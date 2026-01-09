/* src/App.js */
import React, { useState, useEffect, useRef, useLayoutEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, ArrowLeft, BookOpen, User, Sun, Moon, Coffee, Check, ChevronDown, Globe } from 'lucide-react';
import { liturgies, languages, uiTranslations, liturgyHints } from './liturgyData';
import './App.css';

// --- HELPER: Koptisches Datum ---
const getCopticDate = (appLang) => {
  const today = new Date();
  const copticMonths = [
    { ar: "توت", de: "Thout" }, { ar: "بابه", de: "Paopi" }, { ar: "هاتور", de: "Hathor" },
    { ar: "كيهك", de: "Kiahk" }, { ar: "طوبة", de: "Tobi" }, { ar: "أمشير", de: "Meshir" },
    { ar: "برمهات", de: "Paremhotep" }, { ar: "برمودة", de: "Parmouti" }, { ar: "بشنس", de: "Pashons" },
    { ar: "بؤونة", de: "Paoni" }, { ar: "أبيب", de: "Epip" }, { ar: "مسرى", de: "Mesori" }, { ar: "نسيئ", de: "Pi Kogi Enavot" }
  ];

  let cDay, cMonthIndex, cYear;
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  cYear = year - 284;

  if (month === 0) {
    if (day <= 8) { cMonthIndex = 3; cDay = day + 22; } else { cMonthIndex = 4; cDay = day - 8; }
  } else if (month === 1) {
    if (day <= 7) { cMonthIndex = 4; cDay = day + 23; } else { cMonthIndex = 5; cDay = day - 7; }
  } else {
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

// --- KYRIE COUNTER (Zählt -3) ---
const KyrieCounter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [isFinished, setIsFinished] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (count > 0) {
      if (navigator.vibrate) navigator.vibrate(40);
      const newCount = Math.max(0, count - 3);
      setCount(newCount);
      if (newCount === 0) {
        setIsFinished(true);
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      }
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setCount(initialCount);
    setIsFinished(false);
    if (navigator.vibrate) navigator.vibrate(100);
  };

  return (
    <div className="counter-wrapper">
      <motion.button
        className={`counter-btn ${isFinished ? 'finished' : ''}`}
        onClick={handleClick}
        onContextMenu={handleContextMenu}
        whileTap={{ scale: 0.95 }}
      >
        {isFinished ? <Check size={40} /> : count}
        {!isFinished && <span className="counter-label">Kyrie Eleison</span>}
      </motion.button>
    </div>
  );
};

// --- SETTINGS POPUP (Sprache & Rolle jetzt hier drin) ---
const SettingsPopup = memo(({ appLang, setAppLang, activeLangs, toggleLanguage, fontSize, changeFontSize, appTheme, setAppTheme, setRole, userRole, close, t }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="settings-popup"
    >
      <h3 style={{ color: 'var(--gold)', textAlign: 'center', marginTop: 0 }}>
        {t('settings')}
        <span className="current-role-indicator">
          {userRole === 'priester' ? (appLang === 'ar' ? 'كاهن' : 'Priester') :
            userRole === 'diakon' ? (appLang === 'ar' ? 'شماس' : 'Diakon') :
              (appLang === 'ar' ? 'شعب' : 'Volk')}
        </span>
      </h3>

      {/* 1. App Sprache */}
      <div className="settings-section">
        <label className="settings-label"><Globe size={14} /> App Language</label>
        <div className="theme-grid">
          <button className={`theme-btn ${appLang === 'de' ? 'active' : ''}`} onClick={() => setAppLang('de')}>DE</button>
          <button className={`theme-btn ${appLang === 'ar' ? 'active' : ''}`} onClick={() => setAppLang('ar')}>AR</button>
        </div>
      </div>

      {/* 2. Gebetssprachen mit Limit-Anzeige */}
      <div className="settings-section">
        <label className="settings-label">
          {appLang === 'ar' ? 'لغات الصلاة' : 'Gebetssprachen'}
          <div style={{ fontSize: '0.7rem', opacity: 0.7, textTransform: 'none', marginTop: '2px' }}>
            {appLang === 'ar' ? '(حد أقصى ٣ لغات)' : '(maximal 3 Sprachen)'}
          </div>
        </label>
        <div className="lang-grid">
          {Object.entries(languages).map(([key, info]) => (
            <button
              key={key}
              className={`lang-btn ${activeLangs.includes(key) ? 'active' : ''}`}
              onClick={() => toggleLanguage(key)}
              disabled={!activeLangs.includes(key) && activeLangs.length >= 3}
            >
              {info.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Rollen Auswahl */}
      <div className="settings-section">
        <label className="settings-label"><User size={14} /> {appLang === 'ar' ? 'تغيير الدور' : 'Rolle ändern'}</label>
        <div className="theme-grid">
          <button className={`theme-btn ${userRole === 'priester' ? 'active' : ''}`} onClick={() => setRole('priester')}>Priester</button>
          <button className={`theme-btn ${userRole === 'diakon' ? 'active' : ''}`} onClick={() => setRole('diakon')}>Diakon</button>
          <button className={`theme-btn ${userRole === 'volk' ? 'active' : ''}`} onClick={() => setRole('volk')}>Volk</button>
        </div>
      </div>

      {/* 4. Design / Themes */}
      <div className="settings-section">
        <label className="settings-label">{appLang === 'ar' ? 'السمة' : 'Design'}</label>
        <div className="theme-grid">
          <button className={`theme-btn ${appTheme === 'dark' ? 'active' : ''}`} onClick={() => setAppTheme('dark')}><Moon size={16} /></button>
          <button className={`theme-btn ${appTheme === 'light' ? 'active' : ''}`} onClick={() => setAppTheme('light')}><Sun size={16} /></button>
          <button className={`theme-btn ${appTheme === 'sepia' ? 'active' : ''}`} onClick={() => setAppTheme('sepia')}><Coffee size={16} /></button>
        </div>
      </div>

      <div className="settings-section">
        <label className="settings-label">{appLang === 'ar' ? 'حجم الخط' : 'Schriftgröße'}</label>
        <input type="range" min="0.8" max="1.8" step="0.1" value={fontSize} onChange={(e) => changeFontSize(parseFloat(e.target.value))} />
      </div>

      <button className="close-btn" onClick={close}>{t('done')}</button>
    </motion.div>
  );
});

// --- INHALTSVERZEICHNIS ---
// src/App.js

// ...

// --- INHALTSVERZEICHNIS (Nur Icon) ---
const TableOfContents = ({ content, appLang, onJump, isOpen, toggleOpen }) => {
  const sections = content.filter(row => row.sectionTitle);
  if (sections.length === 0) return null;

  return (
    <div className="toc-header-wrapper">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`toc-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleOpen}
        // Button etwas runder machen, da kein Text mehr drin ist
        style={{ padding: '8px', borderRadius: '50%', aspectRatio: '1/1', justifyContent: 'center' }}
      >
        <BookOpen size={20} />
        {/* Text wurde hier entfernt */}
        {/* Kleiner Pfeil optional behalten oder auch entfernen, hier behalten für UX */}
        <ChevronDown size={14} className={`toc-chevron ${isOpen ? 'rotated' : ''}`} style={{ marginLeft: 0 }} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="toc-backdrop" onClick={toggleOpen} />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="toc-dropdown-solid"
            >
              {sections.map((sec, idx) => (
                <button key={idx} className="toc-item-solid" onClick={() => { onJump(sec.id); toggleOpen(); }}>
                  {sec.sectionTitle[appLang]}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
// --- GEBETSZEILE (MEMOIZED) ---
// src/App.js

// ... (Imports bleiben gleich)

// --- GEBETSZEILE (LOGIK UPDATE: SOFORTIGE HINWEISE) ---
const PrayerRowWithLogic = memo(({
  row,
  rowID,
  appLang,
  dynamicLangs,
  hasMenu,
  handleMenuAction,
  hasNav,
  handleNavAction,
  getSpeakerClass,
  hints,
  // triggeredHints und setTriggeredHints brauchen wir nicht mehr
  openHint,
  selectedLiturgy,
  userRole
}) => {

  // Eindeutiger Schlüssel für den Hinweis
  const uniqueHintKey = selectedLiturgy ? `${selectedLiturgy}_id_${rowID}` : `generic_id_${rowID}`;

  // PRÜFUNG: Gibt es einen Hinweis für DIESE Rolle an DIESER Stelle?
  // Das !! macht daraus einen echten ja/nein (boolean) Wert
  const hasHintData =
    hints &&
    hints[uniqueHintKey] &&
    hints[uniqueHintKey].roles &&
    hints[uniqueHintKey].roles[userRole];

  // LÖSUNG: Zeige Icon SOFORT, wenn Daten da sind. Kein Warten auf Scrollen.
  const showIcon = !!hasHintData;

  return (
    <>
      {row.sectionTitle && (
        <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>
          <h4 className="section-title">{row.sectionTitle[appLang]}</h4>
        </div>
      )}

      <div className={`prayer-row ${getSpeakerClass(row.speaker)}`} data-id={rowID} style={{ position: 'relative' }}>

        {/* Hinweis Icon - Erscheint sofort, wenn Text für die Rolle existiert */}
        {showIcon && (
          <motion.div
            className="hint-trigger-icon"
            onClick={() => openHint(uniqueHintKey)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            !
          </motion.div>
        )}

        {row.speaker && <span className="speaker">{row.speaker}</span>}

        <div className="text-grid" style={{ gridTemplateColumns: `repeat(${dynamicLangs.length || 1}, 1fr)` }}>
          {[...dynamicLangs].map(lang => (
            <p key={lang} className={`text-line lang-${lang}`}>{row[lang]}</p>
          ))}
        </div>

        {/* Menü & Navigations Knöpfe */}
        {(hasMenu || hasNav) && (
          <div className="inline-menu-container">
            {hasMenu && row.reconciliation_menu.map((btn, idx) => (
              <button
                key={`menu-${idx}`}
                className="inline-menu-btn"
                onClick={() => handleMenuAction(btn.action)}
              >
                <span className="btn-label-ar">{btn.label_ar}</span>
                <span className="btn-label-de">{btn.label_de}</span>
              </button>
            ))}

            {hasNav && row.navigationButtons.map((btn, idx) => (
              <button
                key={`nav-${idx}`}
                className="inline-menu-btn"
                onClick={() => handleNavAction(btn)}
              >
                <span className="btn-label-ar">{btn.label_ar}</span>
                <span className="btn-label-de">{btn.label_de}</span>
              </button>
            ))}
          </div>
        )}

      </div>
    </>
  );
});
export default function App() {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const [view, setView] = useState('home');
  const [selectedLiturgy, setSelectedLiturgy] = useState(null);
  const [appLang, setAppLang] = useState('de');
  const [activeLangs, setActiveLangs] = useState(['de', 'ar', 'cop_ar']);
  const [showSettings, setShowSettings] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const [targetScrollId, setTargetScrollId] = useState(null);
  const [fontSize, setFontSize] = useState(1);
  const [appTheme, setAppTheme] = useState('dark');
  const [triggeredHints, setTriggeredHints] = useState([]);
  const [activeHintData, setActiveHintData] = useState(null);

  const scrollContainerRef = useRef(null);

  useEffect(() => { setTimeout(() => setLoading(false), 2000); }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', appTheme);
    document.documentElement.style.setProperty('--font-scale', fontSize);
  }, [appTheme, fontSize]);

  const closeHintPopup = () => setActiveHintData(null);
  const openHint = useCallback((id) => {
    const hint = liturgyHints[id];
    if (!hint || !hint.roles) return;

    const roleHint = hint.roles[userRole];
    if (!roleHint) return; // Rolle hat keinen Hinweis → nichts anzeigen

    setActiveHintData({
      id,
      ...roleHint
    });
  }, [userRole]);


  const scrollToElementById = (id) => {
    if (!scrollContainerRef.current) return;
    const element = scrollContainerRef.current.querySelector(`[data-id="${id}"]`);
    if (element) {
      element.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  };

  useLayoutEffect(() => {
    if (view === 'prayer' && targetScrollId) {
      scrollToElementById(targetScrollId);
      setTargetScrollId(null);
    }
  }, [selectedLiturgy, targetScrollId, view]);

  const handleBack = () => {
    setShowTOC(false);
    if (view === 'prayer') setView('liturgyMenu');
    else setView('home');
  };

  const handleMenuAction = useCallback((action) => {
    if (!action) return;
    const litMap = {
      goto_basily_start: ['basily', null],
      goto_basily_id_5: ['basily', 5],
      goto_basily_id_222: ['basily', 222],
      goto_cyrillus_start: ['kerollosy', null],
      goto_cyrillus_id_9: ['kerollosy', 9],
      goto_cyrillus_id_16: ['kerollosy', 16],
      goto_cyrillus_id_23: ['kerollosy', 23],
      goto_gregorios_id_22: ['gregorios', 22],
      goto_gregorios_id_5: ['gregorios', 5],
      goto_rejoice_mary: ['rejoice_mary', null],
      goto_aspasmos_adam: ['aspasmos_adam', null],
      goto_lord_of_hosts: ['lord_of_hosts', null],
      goto_aspasmos_watos_1: ['aspasmos_watos_1', null]
    };
    if (litMap[action]) {
      setSelectedLiturgy(litMap[action][0]);
      setTargetScrollId(litMap[action][1]);
      setView('prayer');
    }
  }, []);

  const handleNavAction = useCallback((btn) => {
    if (!btn || !btn.action) return;
    if (btn.action === 'jumpToId') {
      if (btn.targetLiturgy) setSelectedLiturgy(btn.targetLiturgy);
      if (btn.targetId) setTargetScrollId(btn.targetId);
      setView('prayer');
    } else if (btn.action === 'navigatePage') {
      setSelectedLiturgy(btn.targetPage);
      setView('prayer');
    }
  }, []);

  const t = (key, subKey) => subKey ? uiTranslations[key][subKey][appLang] : uiTranslations.titles[key][appLang];

  const getSpeakerClass = useCallback((speaker) => {
    const s = speaker?.toLowerCase().trim() || "";
    if (s.startsWith('p')) return "speaker-priester";
    if (s.startsWith('d')) return "speaker-diakon";
    if (s === "volk" || s === "v") return "speaker-volk";
    return "";
  }, []);

  if (loading) return <LoadingScreen appLang={appLang} />;

  if (!userRole) {
    return (
      <div className="app-container">
        <div className="bg-image"></div>
        <div className="overlay"></div>
        <RoleSelectionScreen setRole={setUserRole} appLang={appLang} setAppLang={setAppLang} />
      </div>
    );
  }

  let prayerModeClass = "prayer-mode";
  if (userRole === 'diakon') prayerModeClass += " role-diakon-active";
  if (userRole === 'priester') prayerModeClass += " role-priester-active";

  return (
    <div className="app-container">
      <div className="bg-image"></div>
      <div className="overlay"></div>

      <AnimatePresence>{activeHintData && (
        <motion.div className="hint-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeHintPopup}>
          <div className="hint-box" onClick={e => e.stopPropagation()}>
            <h2 className="hint-title">{appLang === 'ar' ? 'تنبيه' : 'Hinweis'}</h2>
            <div className="hint-text">{activeHintData[appLang] || activeHintData['de']}</div>
            <button className="hint-btn" onClick={closeHintPopup}>{appLang === 'ar' ? 'حسناً' : 'OK'}</button>
          </div>
        </motion.div>
      )}</AnimatePresence>



      <AnimatePresence>{showSettings && (
        <SettingsPopup
          appLang={appLang}
          setAppLang={setAppLang}
          activeLangs={activeLangs}
          toggleLanguage={l => setActiveLangs(prev => prev.includes(l) ? (prev.length > 1 ? prev.filter(x => x !== l) : prev) : (prev.length < 3 ? [...prev, l] : prev))}
          fontSize={fontSize}
          changeFontSize={setFontSize}
          appTheme={appTheme}
          setAppTheme={setAppTheme}
          setRole={setUserRole}
          userRole={userRole} // Wichtig: Rolle übergeben
          close={() => setShowSettings(false)}
          t={t}
        />
      )}</AnimatePresence>

      <header className="header">
        {/* Links: Back Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {view !== 'home' ? (
            <motion.button whileTap={{ scale: 0.9 }} onClick={handleBack} className="icon-btn">
              <ArrowLeft size={28} />
            </motion.button>
          ) : <div style={{ width: 48 }}></div>}

          {/* Inhaltsverzeichnis: Hier direkt neben dem Back-Button positioniert */}
          {view === 'prayer' && selectedLiturgy && (
            <TableOfContents
              content={liturgies[selectedLiturgy].content}
              appLang={appLang}
              isOpen={showTOC}
              toggleOpen={() => setShowTOC(!showTOC)}
              onJump={scrollToElementById}
            />
          )}
        </div>

        {/* Rechts: Datum & Zahnrad */}
        <div className="header-right-group">
          <div className="coptic-date-display">{getCopticDate(appLang)}</div>
          <motion.button whileTap={{ rotate: 90 }} onClick={() => setShowSettings(!showSettings)} className="icon-btn">
            <Settings size={28} />
          </motion.button>
        </div>
      </header>

      <main className="content">
        <AnimatePresence mode='wait'>
          {view === 'home' && (
            <motion.div key="home" className="center-view">
              <div className="center-content-wrapper">
                <motion.img src="/logo.png" className="main-logo" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }} />
                <h1 className="church-title">{t('homeSubtitle')}</h1>
                <div className="btn-group">
                  <MenuButton onClick={() => setView('agpeya')} text={t('buttons', 'agpeya')} icon={<BookOpen size={20} />} />
                  <MenuButton onClick={() => setView('liturgyMenu')} text={t('buttons', 'liturgy')} highlight />
                  <MenuButton onClick={() => setView('bible')} text={t('buttons', 'bible')} />
                </div>
              </div>
            </motion.div>
          )}

          {view === 'liturgyMenu' && (
            <motion.div key="menu" className="center-view">
              <div className="center-content-wrapper">
                <h2 className="page-title">{t('chooseLiturgy')}</h2>
                <div className="btn-group">
                  {['offering', 'basily', 'kerollosy', 'gregorios', 'habashy'].map(type => (
                    <MenuButton key={type} onClick={() => { setSelectedLiturgy(type); setView('prayer'); }} text={t('buttons', type)} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'prayer' && selectedLiturgy && (
            <div className={prayerModeClass}>
              <div className="scroll-area" ref={scrollContainerRef}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <h3 className="liturgy-header">{liturgies[selectedLiturgy].title[appLang]}</h3>
                </div>
                <div className="prayer-content">
                  {liturgies[selectedLiturgy].content.map((row, index) => {
                    const dynamicLangs = activeLangs.filter(l => row[l]?.trim());
                    return (
                      <PrayerRowWithLogic
                        key={index}
                        row={row}
                        rowID={row.id || index}
                        appLang={appLang}
                        dynamicLangs={dynamicLangs}
                        hasMenu={!!row.reconciliation_menu?.length}
                        handleMenuAction={handleMenuAction}
                        hasNav={!!row.navigationButtons?.length}
                        handleNavAction={handleNavAction}
                        getSpeakerClass={getSpeakerClass}
                        hints={liturgyHints}
                        // HIER WURDEN DIE 'triggeredHints' PROPS ENTFERNT:
                        openHint={openHint}
                        selectedLiturgy={selectedLiturgy}
                        userRole={userRole}
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
}

// --- UI SCREENS ---
function RoleSelectionScreen({ setRole, appLang, setAppLang }) {
  return (
    <div className="role-selection-container">
      <div style={{ position: 'absolute', top: 20, right: 20, display: 'flex', gap: '10px' }}>
        <button onClick={() => setAppLang('de')} style={{ color: appLang === 'de' ? 'var(--gold)' : 'white', background: 'none', border: 'none', fontWeight: 'bold' }}>DE</button>
        <button onClick={() => setAppLang('ar')} style={{ color: appLang === 'ar' ? 'var(--gold)' : 'white', background: 'none', border: 'none', fontWeight: 'bold' }}>AR</button>
      </div>
      <motion.img src="/logo.png" style={{ width: '120px', marginBottom: '20px' }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} />
      <h2 style={{ color: 'var(--gold)', fontFamily: 'Cairo', marginBottom: '40px' }}>{appLang === 'ar' ? 'اختر دورك' : 'Wähle deine Rolle'}</h2>
      <div className="role-grid">
        <RoleCard labelDe="Priester" labelAr="كاهن" onClick={() => setRole('priester')} />
        <RoleCard labelDe="Diakon" labelAr="شماس" onClick={() => setRole('diakon')} />
        <RoleCard labelDe="Volk" labelAr="شعب" onClick={() => setRole('volk')} />
      </div>
    </div>
  );
}

function RoleCard({ labelDe, labelAr, onClick }) {
  return (
    <motion.div className="role-card" onClick={onClick} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <span className="role-title" style={{ color: 'var(--gold)' }}>{labelAr}</span>
      <span className="role-title" style={{ fontSize: '1rem', color: '#ccc' }}>{labelDe}</span>
    </motion.div>
  );
}

function MenuButton({ text, onClick, highlight, icon }) {
  return (
    <motion.button whileTap={{ scale: 0.96 }} onClick={onClick} className={`menu-btn ${highlight ? 'highlight' : ''}`}>
      {icon && <span style={{ marginRight: '8px' }}>{icon}</span>} {text}
    </motion.button>
  );
}

function LoadingScreen({ appLang }) {
  return (
    <div className="loading-screen">
      <motion.img src="/logo.png" className="loading-logo" animate={{ y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} />
      <h2 style={{ fontFamily: 'Cairo' }}>{appLang === 'ar' ? '...جار التحميل' : 'Wird geladen...'}</h2>
    </div>
  );
}