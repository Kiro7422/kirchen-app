/* src/App.js */
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, ArrowLeft, BookOpen, PenTool, Eraser, User, Sun, Moon, Coffee } from 'lucide-react';
import { liturgies, languages, uiTranslations, liturgyHints } from './liturgyData';
import './App.css';

// --- HELPER: Koptisches Datum (Verbesserte Näherung) ---
const getCopticDate = (appLang) => {
  const today = new Date();
  const copticMonths = [
    { ar: "توت", de: "Thout" }, { ar: "بابه", de: "Paopi" }, { ar: "هاتور", de: "Hathor" },
    { ar: "كيهك", de: "Kiahk" }, { ar: "طوبة", de: "Tobi" }, { ar: "أمشير", de: "Meshir" },
    { ar: "برمهات", de: "Paremhotep" }, { ar: "برمودة", de: "Parmouti" }, { ar: "بشنس", de: "Pashons" },
    { ar: "بؤونة", de: "Paoni" }, { ar: "أبيب", de: "Epip" }, { ar: "مسرى", de: "Mesori" }, { ar: "نسيئ", de: "Pi Kogi Enavot" }
  ];

  // Koptisches Neujahr ~ 11. Sept.
  // Einfache Berechnung für den Zeitraum Jan - Sept (Rest des koptischen Jahres)
  // 1. Jan = 22. Kiahk (normales Jahr) / 23. Kiahk (Schaltjahr vor 29. Feb)
  // Wir nutzen eine Annäherung für heute (5. Jan = 27. Kiahk)

  let cDay, cMonthIndex, cYear;
  const day = today.getDate();
  const month = today.getMonth(); // 0 = Jan
  const year = today.getFullYear();
  cYear = year - 284; // Märtyrer Jahr grob

  // Sehr vereinfachte Logik für Jan/Feb (Kiahk/Tobi) damit es heute stimmt:
  // Jan 1 = 23 Kiahk (Index 3).
  // Jan 5 = 27 Kiahk.

  if (month === 0) { // Januar
    if (day <= 8) {
      cMonthIndex = 3; // Kiahk
      cDay = day + 22; // 5 + 22 = 27
    } else {
      cMonthIndex = 4; // Tobi
      cDay = day - 8;
    }
  } else if (month === 1) { // Feb
    if (day <= 7) {
      cMonthIndex = 4; // Tobi
      cDay = day + 23; // 31 Jan Tage - 8 = 23 offset
    } else {
      cMonthIndex = 5; // Meshir
      cDay = day - 7;
    }
  } else {
    // Fallback für den Rest des Jahres (Näherung)
    const monthOffset = (month + 4) % 13;
    cMonthIndex = monthOffset;
    cDay = day;
  }

  const monthName = appLang === 'ar' ? copticMonths[cMonthIndex].ar : copticMonths[cMonthIndex].de;
  const dayString = appLang === 'ar' ? cDay.toLocaleString('ar-EG') : cDay;
  const yearString = appLang === 'ar' ? cYear.toLocaleString('ar-EG') : cYear;

  return appLang === 'ar'
    ? `${dayString} ${monthName} ${yearString} للشهداء`
    : `${cDay}. ${monthName} ${cYear} A.M.`;
};

export default function App() {
  const [loading, setLoading] = useState(true);

  // --- STATE ---
  const [userRole, setUserRole] = useState(null);
  const [view, setView] = useState('home');
  const [selectedLiturgy, setSelectedLiturgy] = useState(null);
  const [appLang, setAppLang] = useState('de');
  const [activeLangs, setActiveLangs] = useState(['de', 'ar', 'cop_ar']);
  const [showSettings, setShowSettings] = useState(false);
  const [targetScrollId, setTargetScrollId] = useState(null);

  // --- TOOLS ---
  const [isHighlightMode, setIsHighlightMode] = useState(false);
  const [isEraserMode, setIsEraserMode] = useState(false);

  // --- FEATURE STATES ---
  const [fontSize, setFontSize] = useState(1);
  const [appTheme, setAppTheme] = useState('dark');

  // --- HINWEIS STATE ---
  const [triggeredHints, setTriggeredHints] = useState([]);
  const [activeHintData, setActiveHintData] = useState(null);

  const scrollContainerRef = useRef(null);
  const scrollAnchorRef = useRef(null);

  // Initialisierung
  useEffect(() => { setTimeout(() => setLoading(false), 2000); }, []);

  // Theme anwenden
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', appTheme);
    document.documentElement.style.setProperty('--font-scale', fontSize);
  }, [appTheme, fontSize]);

  const closeHintPopup = () => { setActiveHintData(null); };

  const openHint = (id) => {
    const hint = liturgyHints[id];
    if (hint) setActiveHintData({ id, ...hint });
  };

  // Scroll Helfer
  const scrollToElementById = (id) => {
    let attempts = 0;
    const maxAttempts = 50;
    const checkAndScroll = () => {
      if (!scrollContainerRef.current) return;
      const element = scrollContainerRef.current.querySelector(`[data-id="${id}"]`);
      if (element) {
        element.scrollIntoView({ block: 'center', behavior: 'auto' });
      } else {
        attempts++;
        if (attempts < maxAttempts) requestAnimationFrame(checkAndScroll);
      }
    };
    requestAnimationFrame(checkAndScroll);
  };

  useLayoutEffect(() => {
    if (view === 'prayer' && targetScrollId) {
      scrollToElementById(targetScrollId);
      setTargetScrollId(null);
    }
  }, [selectedLiturgy, targetScrollId, view]);

  // Scroll Stabilisierung
  useLayoutEffect(() => {
    if (scrollAnchorRef.current && scrollContainerRef.current) {
      const { id, offsetTop } = scrollAnchorRef.current;
      const element = scrollContainerRef.current.querySelector(`[data-id="${id}"]`);
      if (element) {
        const currentRect = element.getBoundingClientRect();
        const diff = currentRect.top - offsetTop;
        scrollContainerRef.current.scrollTop += diff;
      }
      scrollAnchorRef.current = null;
    }
  }, [activeLangs, fontSize]);

  const captureScrollAnchor = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const rows = Array.from(container.querySelectorAll('.prayer-row'));
      for (let row of rows) {
        const rect = row.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          scrollAnchorRef.current = {
            id: row.getAttribute('data-id'),
            offsetTop: rect.top
          };
          break;
        }
      }
    }
  };

  const handleMenuAction = (action) => {
    if (!action) return;
    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
    switch (action) {
      case "goto_basily_start": setTargetScrollId(null); setSelectedLiturgy('basily'); break;
      case "goto_basily_id_5": setSelectedLiturgy('basily'); setTargetScrollId(5); break;
      case "goto_basily_id_222": setSelectedLiturgy('basily'); setTargetScrollId(222); break;
      case "goto_cyrillus_start": setTargetScrollId(null); setSelectedLiturgy('kerollosy'); break;
      case "goto_cyrillus_id_9": setSelectedLiturgy('kerollosy'); setTargetScrollId(9); break;
      case "goto_cyrillus_id_16": setSelectedLiturgy('kerollosy'); setTargetScrollId(16); break;
      case "goto_cyrillus_id_23": setSelectedLiturgy('kerollosy'); setTargetScrollId(23); break;
      case "goto_cyrillus_love_prayer": setTargetScrollId(null); setSelectedLiturgy('kerollosy'); break;
      case "goto_gregorios_start": setTargetScrollId(null); setSelectedLiturgy('gregorios'); break;
      case "goto_gregorios_id_5": setSelectedLiturgy('gregorios'); setTargetScrollId(5); break;
      case "goto_gregorios_christ_prayer": setTargetScrollId(null); setSelectedLiturgy('gregorios'); break;
      case "goto_rejoice_mary": setTargetScrollId(null); setSelectedLiturgy('rejoice_mary'); break;
      case "goto_aspasmos_adam": setTargetScrollId(null); setSelectedLiturgy('aspasmos_adam'); break;
      case "goto_lord_of_hosts": setTargetScrollId(null); setSelectedLiturgy('lord_of_hosts'); break;
      case "goto_aspasmos_watos_1": setTargetScrollId(null); setSelectedLiturgy('aspasmos_watos_1'); break;
      default: console.log("Aktion:", action);
    }
  };

  const toggleLanguage = (langKey) => {
    captureScrollAnchor();
    if (activeLangs.includes(langKey)) {
      if (activeLangs.length > 1) setActiveLangs(activeLangs.filter(l => l !== langKey));
    } else {
      if (activeLangs.length < 3) setActiveLangs([...activeLangs, langKey]);
    }
  };

  const changeFontSize = (newSize) => {
    captureScrollAnchor();
    setFontSize(newSize);
  };

  const handleContextMenu = (e) => { e.preventDefault(); return false; };
  const handleTextSelection = () => { /* ... */ };
  const handlePrayerClick = (e) => { /* ... */ };
  const togglePen = () => { setIsHighlightMode(!isHighlightMode); if (!isHighlightMode) setIsEraserMode(false); };
  const toggleEraser = () => { setIsEraserMode(!isEraserMode); if (!isEraserMode) setIsHighlightMode(false); };

  const t = (key, subKey) => subKey ? uiTranslations[key][subKey][appLang] : uiTranslations.titles[key][appLang];
  const getSpeakerClass = (speaker) => {
    if (!speaker) return "";
    const s = speaker.toLowerCase().trim();
    if (s.startsWith('p')) return "speaker-priester";
    if (s.startsWith('d')) return "speaker-diakon";
    if (s === "volk" || s === "v" || s === "congregation") return "speaker-volk";
    return "";
  };

  if (loading) return <LoadingScreen appLang={appLang} />;

  if (!userRole) {
    return (
      <RoleSelectionScreen setRole={setUserRole} appLang={appLang} setAppLang={setAppLang} />
    );
  }

  let prayerModeClass = "prayer-mode";
  if (isHighlightMode) prayerModeClass += " mode-pen-active";
  if (isEraserMode) prayerModeClass += " mode-eraser-active";
  if (userRole === 'diakon') prayerModeClass += " role-diakon-active";
  if (userRole === 'priester') prayerModeClass += " role-priester-active";

  return (
    <div className="app-container">
      <AnimatePresence>
        {activeHintData && (
          <motion.div className="hint-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeHintPopup}>
            <div className="hint-box" onClick={(e) => e.stopPropagation()}>
              <h2 className="hint-title">{appLang === 'ar' ? 'تنبيه' : 'Hinweis'}</h2>
              <div className="hint-text">{activeHintData[appLang] || activeHintData['de']}</div>
              <button className="hint-btn" onClick={closeHintPopup}>{appLang === 'ar' ? 'حسناً' : 'OK'}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Popup jetzt global verfügbar (Home & Prayer) */}
      <AnimatePresence>
        {showSettings && (
          <motion.div initial={{ opacity: 0, scale: 0.8, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8 }} className="settings-popup">

            <div className="settings-section">
              <label className="settings-label">{t('prayerLanguages')}</label>
              <div className="lang-grid">
                {Object.entries(languages).map(([key, info]) => (
                  <button key={key} className={`lang-btn ${activeLangs.includes(key) ? 'active' : ''}`} onClick={() => toggleLanguage(key)} disabled={!activeLangs.includes(key) && activeLangs.length >= 3}>
                    {info.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="settings-section">
              <label className="settings-label">{appLang === 'ar' ? 'حجم الخط' : 'Schriftgröße'}</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.8rem' }}>A</span>
                <input
                  type="range" min="0.8" max="1.8" step="0.1"
                  value={fontSize}
                  onChange={(e) => changeFontSize(parseFloat(e.target.value))}
                />
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>A</span>
              </div>
            </div>

            <div className="settings-section">
              <label className="settings-label">{appLang === 'ar' ? 'السمة' : 'Design'}</label>
              <div className="theme-grid">
                <button className={`theme-btn ${appTheme === 'dark' ? 'active' : ''}`} onClick={() => setAppTheme('dark')}>
                  <Moon size={16} /> Dark
                </button>
                <button className={`theme-btn ${appTheme === 'light' ? 'active' : ''}`} onClick={() => setAppTheme('light')}>
                  <Sun size={16} /> Light
                </button>
                <button className={`theme-btn ${appTheme === 'sepia' ? 'active' : ''}`} onClick={() => setAppTheme('sepia')}>
                  <Coffee size={16} /> Sepia
                </button>
              </div>
            </div>

            <button className="close-btn" onClick={() => setShowSettings(false)}>{t('done')}</button>
          </motion.div>
        )}
      </AnimatePresence>

      {view !== 'prayer' && <><div className="bg-image"></div><div className="overlay"></div></>}

      <header className="header">
        {view !== 'home' ? (
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => setView(view === 'prayer' ? 'liturgyMenu' : 'home')} className="icon-btn">
            <ArrowLeft size={28} />
          </motion.button>
        ) : (
          <div style={{ display: 'flex', gap: '15px' }}>
            {/* Hier: label "DE" und "AR" */}
            <LanguageToggle current={appLang} lang='de' setLang={setAppLang} label="DE" />
            <LanguageToggle current={appLang} lang='ar' setLang={setAppLang} label="AR" />
          </div>
        )}

        {/* RECHTE SEITE HEADER */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: '10px' }}>

          {/* Datum */}
          <div className="coptic-date-display">
            {getCopticDate(appLang)}
          </div>

          {/* SETTINGS BUTTON: JETZT AUCH AUF HOME SICHTBAR */}
          <motion.button whileTap={{ rotate: 90 }} onClick={() => setShowSettings(!showSettings)} className="icon-btn">
            <Settings size={28} />
          </motion.button>

          {/* PROFIL BUTTON (Nur Home) */}
          {view === 'home' && (
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => setUserRole(null)}
              style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', border: '1px solid var(--gold)', padding: '5px 10px', borderRadius: '15px', background: 'transparent', cursor: 'pointer' }}>
              <User size={16} />
              {userRole === 'diakon' ? (appLang === 'ar' ? 'شماس' : 'Diakon') :
                userRole === 'priester' ? (appLang === 'ar' ? 'كاهن' : 'Priester') :
                  (appLang === 'ar' ? 'شعب' : 'Volk')}
            </motion.button>
          )}
        </div>

        {view === 'prayer' && (
          <div className="header-actions" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <motion.button whileTap={{ scale: 0.9 }} onClick={togglePen} className={`icon-btn ${isHighlightMode ? 'active-pen' : ''}`}>
              <PenTool size={22} />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} onClick={toggleEraser} className={`icon-btn ${isEraserMode ? 'active-pen' : ''}`}>
              <Eraser size={22} />
            </motion.button>
          </div>
        )}
      </header>

      <main className="content">
        <AnimatePresence mode='wait'>
          {view === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="center-view">
              <div className="center-content-wrapper">
                <div className="logo-container">
                  <motion.img src="/logo.png" alt="Logo" className="main-logo" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />
                  <h1 className="church-title">{t('homeSubtitle')}</h1>
                </div>
                <div className="btn-group">
                  <MenuButton onClick={() => setView('agpeya')} text={t('buttons', 'agpeya')} icon={<BookOpen size={20} />} />
                  <MenuButton onClick={() => setView('liturgyMenu')} text={t('buttons', 'liturgy')} highlight />
                  <MenuButton onClick={() => setView('bible')} text={t('buttons', 'bible')} />
                </div>
              </div>
            </motion.div>
          )}

          {view === 'liturgyMenu' && (
            <motion.div key="menu" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="center-view">
              <div className="center-content-wrapper">
                <img src="/logo.png" alt="Logo" className="main-logo" style={{ width: '90px', height: '90px' }} />
                <h2 className="page-title">{t('chooseLiturgy')}</h2>
                <div className="btn-group">
                  {['offering', 'basily', 'kerollosy', 'gregorios', 'habashy'].map((type, i) => (
                    <MenuButton key={type} onClick={() => openLiturgy(type)} text={t('buttons', type)} index={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'prayer' && selectedLiturgy && liturgies[selectedLiturgy] && (
            <div className={prayerModeClass} onContextMenu={handleContextMenu} onMouseUp={handleTextSelection} onTouchEnd={handleTextSelection} onClick={handlePrayerClick}>

              <div className="scroll-area" ref={scrollContainerRef}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <h3 className="liturgy-header">{liturgies[selectedLiturgy].title[appLang]}</h3>
                </div>

                <div className="prayer-content">
                  {liturgies[selectedLiturgy].content.map((row, index) => {
                    const dynamicLangs = activeLangs.filter(lang => row[lang] && row[lang].trim() !== "");
                    const hasMenu = row.reconciliation_menu && row.reconciliation_menu.length > 0;
                    if (dynamicLangs.length === 0 && !hasMenu && !row.sectionTitle) return null;
                    const rowID = row.id || index;

                    return (
                      <PrayerRowWithLogic
                        key={index}
                        row={row}
                        rowID={rowID}
                        appLang={appLang}
                        dynamicLangs={dynamicLangs}
                        hasMenu={hasMenu}
                        handleMenuAction={handleMenuAction}
                        getSpeakerClass={getSpeakerClass}
                        hints={liturgyHints}
                        triggeredHints={triggeredHints}
                        setTriggeredHints={setTriggeredHints}
                        openHint={openHint}
                      />
                    );
                  })}
                </div>
                <div style={{ height: '100px' }}></div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );

  function openLiturgy(type) {
    setSelectedLiturgy(type);
    setView('prayer');
    setTargetScrollId(null);
    setIsHighlightMode(false);
    setIsEraserMode(false);
  }
}

// --- LOGIK KOMPONENTE ---
function PrayerRowWithLogic({ row, rowID, appLang, dynamicLangs, hasMenu, handleMenuAction, getSpeakerClass, hints, triggeredHints, setTriggeredHints, openHint }) {
  const rowRef = useRef(null);
  const hasHintData = hints && hints[rowID];
  const showIcon = triggeredHints.includes(rowID);

  useEffect(() => {
    if (!hasHintData || showIcon) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggeredHints(prev => [...prev, rowID]);
          observer.disconnect();
        }
      }, { threshold: 0.6 }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, [hasHintData, showIcon, rowID, setTriggeredHints]);

  return (
    <>
      {row.sectionTitle && (
        <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>
          <h4 className="section-title">{row.sectionTitle[appLang]}</h4>
        </div>
      )}
      <div ref={rowRef} className={`prayer-row ${getSpeakerClass(row.speaker)}`} data-id={rowID} style={{ position: 'relative' }}>
        {showIcon && (
          <motion.div className="hint-trigger-icon" onClick={() => openHint(rowID)} whileTap={{ scale: 0.9 }} initial={{ scale: 0 }} animate={{ scale: 1 }}>!</motion.div>
        )}
        {row.speaker && <span className="speaker">{row.speaker}</span>}
        <div className="text-grid" style={{ gridTemplateColumns: `repeat(${dynamicLangs.length > 0 ? dynamicLangs.length : 1}, 1fr)` }}>
          {[...dynamicLangs].sort((a, b) => {
            const order = ['de', 'cop_de', 'ar_de', 'cop_cop', 'cop_ar', 'ar'];
            return order.indexOf(a) - order.indexOf(b);
          }).map(lang => (
            <p key={lang} className={`text-line lang-${lang}`}>{row[lang]}</p>
          ))}
        </div>
        {hasMenu && (
          <div className="inline-menu-container">
            {row.reconciliation_menu.map((btn, btnIdx) => (
              <button key={btnIdx} className="inline-menu-btn" onClick={() => handleMenuAction(btn.action)}>
                <span className="btn-label-ar">{btn.label_ar}</span>
                <span className="btn-label-de">{btn.label_de}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// --- ROLLEN SCREEN ---
function RoleSelectionScreen({ setRole, appLang, setAppLang }) {
  return (
    <div className="role-selection-container">
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <LanguageToggle current={appLang} lang='de' setLang={setAppLang} label="DE" />
          <LanguageToggle current={appLang} lang='ar' setLang={setAppLang} label="AR" />
        </div>
      </div>
      <motion.img src="/logo.png" style={{ width: '120px', marginBottom: '20px' }} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} />
      <motion.h2 style={{ color: 'var(--gold)', fontFamily: 'Cairo', marginBottom: '40px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        {appLang === 'ar' ? 'اختر دورك' : 'Wähle deine Rolle'}
      </motion.h2>
      <div className="role-grid">
        <RoleCard labelDe="Priester" labelAr="كاهن" onClick={() => setRole('priester')} delay={0.3} />
        <RoleCard labelDe="Diakon" labelAr="شماس" onClick={() => setRole('diakon')} delay={0.4} />
        <RoleCard labelDe="Volk" labelAr="شعب" onClick={() => setRole('volk')} delay={0.5} />
      </div>
    </div>
  );
}

function RoleCard({ labelDe, labelAr, onClick, delay }) {
  return (
    <motion.div className="role-card" onClick={onClick} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: delay }} whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }} whileTap={{ scale: 0.95 }} style={{ justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="role-title" style={{ color: 'var(--gold)' }}>{labelAr}</span>
        <span className="role-title" style={{ fontSize: '1rem', color: '#ccc' }}>{labelDe}</span>
      </div>
    </motion.div>
  )
}

function LanguageToggle({ current, lang, setLang, label }) {
  return (
    <motion.button whileTap={{ scale: 0.9 }} onClick={() => setLang(lang)} style={{ opacity: current === lang ? 1 : 0.6, background: 'none', border: 'none', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Cairo', color: current === lang ? 'var(--gold)' : 'white', textShadow: current === lang ? '0 0 10px rgba(212, 175, 55, 0.5)' : 'none' }}>
      {label}
    </motion.button>
  )
}

function MenuButton({ text, onClick, highlight, icon, index = 0 }) {
  return (
    <motion.button initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} whileTap={{ scale: 0.96 }} onClick={onClick} className={`menu-btn ${highlight ? 'highlight' : ''}`}>
      {icon && <span className="btn-icon">{icon}</span>}
      {text}
    </motion.button>
  );
}

function LoadingScreen({ appLang }) {
  return (
    <div className="loading-screen">
      <motion.img src="/logo.png" className="loading-logo" alt="Loading" animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
      <motion.h2 animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ fontFamily: 'Cairo' }}>
        {appLang === 'ar' ? '...جار التحميل' : 'Wird geladen...'}
      </motion.h2>
    </div>
  );
}