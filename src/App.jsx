/* src/App.js */
import React, { useState, useEffect, useRef, useLayoutEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Icons
import { Settings, ArrowLeft, BookOpen, User, Sun, Moon, Coffee, Check, ChevronDown, Globe, HelpCircle, X } from 'lucide-react';
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
  if (month === 0) { if (day <= 8) { cMonthIndex = 3; cDay = day + 22; } else { cMonthIndex = 4; cDay = day - 8; } }
  else if (month === 1) { if (day <= 7) { cMonthIndex = 4; cDay = day + 23; } else { cMonthIndex = 5; cDay = day - 7; } }
  else { const monthOffset = (month + 4) % 13; cMonthIndex = monthOffset; cDay = day; }
  const monthName = appLang === 'ar' ? copticMonths[cMonthIndex].ar : copticMonths[cMonthIndex].de;
  const dayString = appLang === 'ar' ? cDay.toLocaleString('ar-EG') : cDay;
  const yearString = appLang === 'ar' ? cYear.toLocaleString('ar-EG') : cYear;
  return appLang === 'ar' ? `${dayString} ${monthName} ${yearString} للشهداء` : `${cDay}. ${monthName} ${cYear} A.M.`;
};

// --- KYRIE COUNTER ---
const KyrieCounter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [isFinished, setIsFinished] = useState(false);
  const handleClick = (e) => { e.stopPropagation(); if (count > 0) { if (navigator.vibrate) navigator.vibrate(40); const newCount = Math.max(0, count - 3); setCount(newCount); if (newCount === 0) { setIsFinished(true); if (navigator.vibrate) navigator.vibrate([100, 50, 100]); } } };
  const handleContextMenu = (e) => { e.preventDefault(); setCount(initialCount); setIsFinished(false); if (navigator.vibrate) navigator.vibrate(100); };
  return (
    <div className="counter-wrapper">
      <motion.button className={`counter-btn ${isFinished ? 'finished' : ''}`} onClick={handleClick} onContextMenu={handleContextMenu} whileTap={{ scale: 0.95 }}>
        {isFinished ? <Check size={40} /> : count} {!isFinished && <span className="counter-label">Kyrie Eleison</span>}
      </motion.button>
    </div>
  );
};

// --- SUPPORT POPUP (ZENTRIERT & SCROLLBAR) ---
// --- SUPPORT POPUP (ZENTRIERT & SCROLLBAR) ---
const SupportPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({ vorname: '', name: '', email: '', phone: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // --- NEUE SENDELOGIK (Formsubmit) ---
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/kirokolta@yahoo.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `Support: ${formData.vorname} ${formData.name}`,
        _template: "table",
        ...formData
      })
    })
      .then(response => response.json())
      .then(data => {
        setIsSent(true);
        setFormData({ vorname: '', name: '', email: '', phone: '', message: '' });
      })
      .catch(error => {
        console.log(error);
        alert("Fehler beim Senden. Bitte Internetverbindung prüfen.");
      });
  };
  // ------------------------------------

  return (
    <>
      <div className="support-backdrop" onClick={onClose} />
      <motion.div
        className="support-popup"
        initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
      >
        <div className="support-header">
          <span className="support-title" style={{ color: 'var(--gold)', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'Cairo' }}>Kontakt / Support</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}><X size={24} /></button>
        </div>

        <div className="dev-info-section">
          <div className="dev-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '10px', opacity: 0.7 }}>Entwickelt von</div>
          <div className="dev-card">
            <span className="dev-name">Kiro Kolta</span>
            <span className="dev-detail">📞 +49 157 34966434</span>
            <span className="dev-detail">✉️ kirokolta@yahoo.com</span>
          </div>
          <div className="dev-card">
            <span className="dev-name">Kerollos Emad</span>
            <span className="dev-detail">📞 +49 157 35650689</span>
          </div>
          <div className="dev-card">
            <span className="dev-name">Daniel Mikhail</span>
            <span className="dev-detail">📞 +49 163 3656432</span>
            <span className="dev-detail">✉️ Daniel.mikhail@outlook.de</span>
          </div>
        </div>

        {!isSent ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-title">Problem melden</div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input required placeholder="Vorname" type="text" name="vorname" className="form-input" value={formData.vorname} onChange={handleChange} />
              <input required placeholder="Name" type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} />
            </div>
            <input required placeholder="Email" type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} />
            <input placeholder="Telefonnummer" type="tel" name="phone" className="form-input" value={formData.phone} onChange={handleChange} />
            <textarea required placeholder="Nachricht / Betreff..." name="message" className="form-textarea" value={formData.message} onChange={handleChange} />
            <button type="submit" className="submit-btn">Senden</button>
          </form>
        ) : (
          <div className="success-message">
            <Check size={30} style={{ margin: '0 auto 10px auto', display: 'block' }} />
            <p>Nachricht gesendet!</p>
            <button className="submit-btn" onClick={() => setIsSent(false)} style={{ marginTop: '10px', background: 'transparent', border: '1px solid var(--gold)', color: 'var(--text-main)' }}>Zurück</button>
          </div>
        )}
      </motion.div>
    </>
  );
};

// --- SETTINGS POPUP ---
const SettingsPopup = memo(({ appLang, setAppLang, activeLangs, toggleLanguage, fontSize, changeFontSize, appTheme, setAppTheme, setRole, userRole, close, t }) => {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="settings-popup">
      <h3 style={{ color: 'var(--gold)', textAlign: 'center', marginTop: 0 }}>
        {t('settings')}
        <span className="current-role-indicator">
          {userRole === 'priester' ? (appLang === 'ar' ? 'كاهن' : 'Priester') :
            userRole === 'diakon' ? (appLang === 'ar' ? 'شماس' : 'Diakon') :
              (appLang === 'ar' ? 'شعب' : 'Volk')}
        </span>
      </h3>
      <div className="settings-section">
        <label className="settings-label"><Globe size={14} /> App Language</label>
        <div className="theme-grid">
          <button className={`theme-btn ${appLang === 'de' ? 'active' : ''}`} onClick={() => setAppLang('de')}>DE</button>
          <button className={`theme-btn ${appLang === 'ar' ? 'active' : ''}`} onClick={() => setAppLang('ar')}>AR</button>
        </div>
      </div>
      <div className="settings-section">
        <label className="settings-label">
          {appLang === 'ar' ? 'لغات الصلاة' : 'Gebetssprachen'}
        </label>
        <div className="lang-grid">
          {Object.entries(languages).map(([key, info]) => (
            <button key={key} className={`lang-btn ${activeLangs.includes(key) ? 'active' : ''}`} onClick={() => toggleLanguage(key)} disabled={!activeLangs.includes(key) && activeLangs.length >= 3}>
              {info.label.replace(/[\u{1F1E6}-\u{1F1FF}]/gu, '')}
            </button>
          ))}
        </div>
      </div>
      <div className="settings-section">
        <label className="settings-label"><User size={14} /> Rolle</label>
        <div className="theme-grid">
          <button className={`theme-btn ${userRole === 'priester' ? 'active' : ''}`} onClick={() => setRole('priester')}>Priester</button>
          <button className={`theme-btn ${userRole === 'diakon' ? 'active' : ''}`} onClick={() => setRole('diakon')}>Diakon</button>
          <button className={`theme-btn ${userRole === 'volk' ? 'active' : ''}`} onClick={() => setRole('volk')}>Volk</button>
        </div>
      </div>
      <div className="settings-section">
        <label className="settings-label">Design</label>
        <div className="theme-grid">
          <button className={`theme-btn ${appTheme === 'dark' ? 'active' : ''}`} onClick={() => setAppTheme('dark')}><Moon size={16} /></button>
          <button className={`theme-btn ${appTheme === 'light' ? 'active' : ''}`} onClick={() => setAppTheme('light')}><Sun size={16} /></button>
          <button className={`theme-btn ${appTheme === 'sepia' ? 'active' : ''}`} onClick={() => setAppTheme('sepia')}><Coffee size={16} /></button>
        </div>
      </div>
      <div className="settings-section">
        <label className="settings-label">Größe</label>
        <input type="range" min="0.8" max="1.8" step="0.1" value={fontSize} onChange={(e) => changeFontSize(parseFloat(e.target.value))} />
      </div>
      <button className="close-btn" onClick={close}>{t('done')}</button>
    </motion.div>
  );
});

// --- TOC ---
const TableOfContents = ({ content, appLang, onJump, isOpen, toggleOpen }) => {
  const sections = content.filter(row => row.sectionTitle);
  if (sections.length === 0) return null;
  return (
    <div className="toc-header-wrapper">
      <motion.button whileTap={{ scale: 0.95 }} className={`toc-toggle-btn ${isOpen ? 'active' : ''}`} onClick={toggleOpen} style={{ padding: '8px', borderRadius: '50%', aspectRatio: '1/1', justifyContent: 'center' }}>
        <BookOpen size={20} />
        <ChevronDown size={14} className={`toc-chevron ${isOpen ? 'rotated' : ''}`} style={{ marginLeft: 0 }} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="toc-backdrop" onClick={toggleOpen} />
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="toc-dropdown-solid">
              {sections.map((sec, idx) => (
                <button key={idx} className="toc-item-solid" onClick={() => { onJump(sec.id); toggleOpen(); }}>{sec.sectionTitle[appLang]}</button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- GEBETSZEILE ---
const PrayerRowWithLogic = memo(({ row, rowID, appLang, dynamicLangs, hasMenu, handleMenuAction, hasNav, handleNavAction, getSpeakerClass, hints, openHint, selectedLiturgy, userRole }) => {
  const uniqueHintKey = selectedLiturgy ? `${selectedLiturgy}_id_${rowID}` : `generic_id_${rowID}`;
  const hasHintData = hints && hints[uniqueHintKey] && hints[uniqueHintKey].roles && hints[uniqueHintKey].roles[userRole];
  const showIcon = !!hasHintData;

  return (
    <>
      {row.sectionTitle && (
        <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>
          <h4 className="section-title">{row.sectionTitle[appLang]}</h4>
        </div>
      )}
      <div className={`prayer-row ${getSpeakerClass(row.speaker)}`} data-id={rowID} style={{ position: 'relative' }}>
        {showIcon && (
          <motion.div className="hint-trigger-icon" onClick={() => openHint(uniqueHintKey)} initial={{ scale: 0 }} animate={{ scale: 1 }} whileTap={{ scale: 0.9 }}>!</motion.div>
        )}
        {row.speaker && <span className="speaker">{row.speaker}</span>}
        <div className="text-grid" style={{ gridTemplateColumns: `repeat(${dynamicLangs.length || 1}, 1fr)` }}>
          {[...dynamicLangs].map(lang => (<p key={lang} className={`text-line lang-${lang}`}>{row[lang]}</p>))}
        </div>
        {(hasMenu || hasNav) && (
          <div className="inline-menu-container">
            {hasMenu && row.reconciliation_menu.map((btn, idx) => (
              <button key={`menu-${idx}`} className="inline-menu-btn" onClick={() => handleMenuAction(btn)}>
                <span className="btn-label-ar">{btn.label_ar}</span><span className="btn-label-de">{btn.label_de}</span>
              </button>
            ))}
            {hasNav && row.navigationButtons.map((btn, idx) => (
              <button key={`nav-${idx}`} className="inline-menu-btn" onClick={() => handleNavAction(btn)}>
                <span className="btn-label-ar">{btn.label_ar}</span><span className="btn-label-de">{btn.label_de}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
});

// --- HAUPT APP KOMPONENTE ---
// --- HAUPT APP KOMPONENTE ---
export default function App() {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const [view, setView] = useState('home');
  const [selectedLiturgy, setSelectedLiturgy] = useState(null);
  const [appLang, setAppLang] = useState('de');
  const [activeLangs, setActiveLangs] = useState(['de', 'ar', 'cop_ar']);
  const [showSettings, setShowSettings] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [targetScrollId, setTargetScrollId] = useState(null);
  const [fontSize, setFontSize] = useState(1);
  const [appTheme, setAppTheme] = useState('dark');
  const [activeHintData, setActiveHintData] = useState(null);
  const [selectedIDs, setSelectedIDs] = useState([]);

  // 1. Refs definieren
  const scrollContainerRef = useRef(null);
  const scrollAnchorRef = useRef(null); // Für die Position-Merk-Logik

  const scrollToElementById = (id) => {
    if (!scrollContainerRef.current) return;
    const element = scrollContainerRef.current.querySelector(`[data-id="${id}"]`);
    if (element) {
      // ÄNDERUNG: 'start' statt 'center', damit der Text oben beginnt
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };
  // 3. Helper: Findet das aktuell sichtbare Gebet (für den Anker)
  const getVisibleRowId = () => {
    if (!scrollContainerRef.current) return null;
    const container = scrollContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const rows = container.querySelectorAll('.prayer-row');

    // Ziel: Wir suchen das Element in der oberen Bildschirmhälfte
    const targetY = containerRect.top + (containerRect.height / 3);

    let bestId = null;
    let minDistance = Infinity;

    rows.forEach(row => {
      const rect = row.getBoundingClientRect();
      const dist = Math.abs(rect.top - targetY);
      if (dist < minDistance) {
        minDistance = dist;
        bestId = row.getAttribute('data-id');
      }
    });
    return bestId;
  };

  // 4. Handler: Sprache umschalten + Position merken
  const handleLanguageToggle = (langKey) => {
    // A. Position merken
    const currentId = getVisibleRowId();
    if (currentId) scrollAnchorRef.current = currentId;

    // B. Sprache ändern
    setActiveLangs(prev =>
      prev.includes(langKey)
        ? (prev.length > 1 ? prev.filter(x => x !== langKey) : prev)
        : (prev.length < 3 ? [...prev, langKey] : prev)
    );
  };

  // 5. Effekt: Position wiederherstellen NACHDEM die Sprache geändert wurde
  useLayoutEffect(() => {
    if (scrollAnchorRef.current && view === 'prayer') {
      scrollToElementById(scrollAnchorRef.current);
      scrollAnchorRef.current = null; // Reset
    }
  }, [activeLangs, view]); // Reagiert auf Sprachänderung

  // --- Ab hier dein bestehender Code für Logik ---

  // Optional IDs Logic
  const optionalIDs = React.useMemo(() => {
    if (!selectedLiturgy || !liturgies[selectedLiturgy]) return new Set();
    const ids = new Set();
    liturgies[selectedLiturgy].content.forEach(row => {
      if (row.type === 'selection_menu') {
        if (row.feasts) row.feasts.forEach(item => ids.add(String(item.id)));
        if (row.saints) row.saints.forEach(item => ids.add(String(item.id)));
      }
    });
    return ids;
  }, [selectedLiturgy]);

  const toggleSelection = (id) => {
    setSelectedIDs(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

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
    if (!roleHint) return;
    setActiveHintData({ id, ...roleHint });
  }, [userRole]);

  // Dein alter useLayoutEffect für Navigation (bleibt)
  useLayoutEffect(() => {
    if (view === 'prayer' && targetScrollId) {
      scrollToElementById(targetScrollId);
      setTargetScrollId(null);
    }
  }, [selectedLiturgy, targetScrollId, view]);

  // ... (Ab hier kommt const handleBack, handleMenuAction usw. - das kannst du lassen wie es war)
  const handleBack = () => {
    setShowTOC(false);

    if (view === 'prayer') {
      // Wenn wir in einer Agpeya-Stunde sind, zurück zum Agpeya-Menü
      if (selectedLiturgy && selectedLiturgy.startsWith('agpeya')) {
        setView('agpeyaMenu');
      } else {
        // Sonst zurück zum Liturgie-Menü
        setView('liturgyMenu');
      }
    } else if (view === 'agpeyaMenu') {
      // Vom Agpeya Menü zurück nach Hause
      setView('home');
    } else {
      // Von überall sonst nach Hause
      setView('home');
    }
  };

  const handleMenuAction = useCallback((btn) => {
    // Falls der Button nur ein String war (altes Format), ignorieren wir ihn oder fangen ihn ab
    if (typeof btn === 'string') return;

    // Neue Logik: Direkte Zuweisung aus den Daten
    if (btn.targetLiturgy) {
      setSelectedLiturgy(btn.targetLiturgy);
    }

    if (btn.targetId) {
      setTargetScrollId(btn.targetId);
    }

    // Wenn wir schon im Gebet sind, scrollen wir direkt, ansonsten wechseln wir die View
    if (view !== 'prayer') {
      setView('prayer');
    } else if (btn.targetId) {
      // Wenn wir schon in der View sind, triggern wir das Scrollen manuell
      scrollToElementById(btn.targetId);
    }
  }, [view]);

  // handleNavAction kann jetzt einfach handleMenuAction aufrufen, da die Logik identisch ist
  const handleNavAction = useCallback((btn) => {
    handleMenuAction(btn);
  }, [handleMenuAction]);

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

      <AnimatePresence>
        {activeHintData && (
          <motion.div className="hint-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeHintPopup}>
            <div className="hint-box" onClick={e => e.stopPropagation()}>
              <h2 className="hint-title">{appLang === 'ar' ? 'تنبيه' : 'Hinweis'}</h2>
              <div className="hint-text">{activeHintData[appLang] || activeHintData['de']}</div>
              <button className="hint-btn" onClick={closeHintPopup}>{appLang === 'ar' ? 'حسناً' : 'OK'}</button>
            </div>
          </motion.div>
        )}

        {showSettings && (
          <SettingsPopup
            appLang={appLang}
            setAppLang={setAppLang}
            activeLangs={activeLangs}

            // HIER MUSS JETZT DIE NEUE FUNKTION STEHEN:
            toggleLanguage={handleLanguageToggle}

            fontSize={fontSize}
            changeFontSize={setFontSize}
            appTheme={appTheme}
            setAppTheme={setAppTheme}
            setRole={setUserRole}
            userRole={userRole}
            close={() => setShowSettings(false)}
            t={t}
          />
        )}

        {/* HIER WIRD DAS POPUP AUFGERUFEN - ZENTRAL! */}
        {showSupport && (
          <SupportPopup onClose={() => setShowSupport(false)} />
        )}
      </AnimatePresence>

      <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {view !== 'home' ? (
            <motion.button whileTap={{ scale: 0.9 }} onClick={handleBack} className="icon-btn">
              <ArrowLeft size={24} />
            </motion.button>
          ) : <div style={{ width: 24 }}></div>}

          {/* Der Knopf im Header */}
          <motion.button
            className="icon-btn"
            onClick={() => setShowSupport(true)}
            whileTap={{ scale: 0.9 }}
          >
            <HelpCircle size={22} />
          </motion.button>

          {view === 'prayer' && selectedLiturgy && (
            <TableOfContents
              content={liturgies[selectedLiturgy].content} appLang={appLang}
              isOpen={showTOC} toggleOpen={() => setShowTOC(!showTOC)} onJump={scrollToElementById}
            />
          )}
        </div>

        <div className="header-right-group">
          <div className="coptic-date-display">{getCopticDate(appLang)}</div>
          <motion.button whileTap={{ rotate: 90 }} onClick={() => setShowSettings(!showSettings)} className="icon-btn">
            <Settings size={24} />
          </motion.button>
        </div>
      </header>
      <main className="content">
        <AnimatePresence mode='wait'>

          {/* 1. HOME VIEW (Update für den Agpeya Button) */}
          {view === 'home' && (
            <motion.div key="home" className="center-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="center-content-wrapper">
                <motion.img src="/logo.png" className="main-logo" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }} />
                <h1 className="church-title">{t('homeSubtitle')}</h1>
                <div className="btn-group">
                  {/* ÄNDERUNG: Button führt jetzt zu agpeyaMenu */}
                  <MenuButton onClick={() => setView('agpeyaMenu')} text={t('buttons', 'agpeya')} icon={<BookOpen size={20} />} highlight />
                  <MenuButton onClick={() => setView('liturgyMenu')} text={t('buttons', 'liturgy')} />
                  <MenuButton onClick={() => setView('bible')} text={t('buttons', 'bible')} />
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. NEU: AGPEYA MENU VIEW */}
          {/* 2. NEU: AGPEYA MENU VIEW */}
          {/* 2. AGPEYA MENU VIEW */}
          {view === 'agpeyaMenu' && (
            <motion.div key="agpeyaMenu" className="center-view" initial={{ x: 100 }} animate={{ x: 0 }} exit={{ x: -100 }}>
              <div className="center-content-wrapper">
                {/* Titel ohne zweiten Parameter, um den Absturz zu verhindern */}
                <h2 className="page-title">{t('chooseHour')}</h2>

                <div className="btn-group">
                  <MenuButton onClick={() => { setSelectedLiturgy('agpeya_prime'); setView('prayer'); }} text={t('buttons', 'agpeya_prime')} />
                  <MenuButton onClick={() => { setSelectedLiturgy('agpeya_terce'); setView('prayer'); }} text={t('buttons', 'agpeya_terce')} />
                  <MenuButton onClick={() => { setSelectedLiturgy('agpeya_sext'); setView('prayer'); }} text={t('buttons', 'agpeya_sext')} />

                  {/* --- NEUE KNÖPFE HIER EINGEFÜGT --- */}
                  <MenuButton onClick={() => { setSelectedLiturgy('agpeya_none'); setView('prayer'); }} text={t('buttons', 'agpeya_none')} />
                  <MenuButton onClick={() => { setSelectedLiturgy('agpeya_vespers'); setView('prayer'); }} text={t('buttons', 'agpeya_vespers')} />
                  <MenuButton onClick={() => { setSelectedLiturgy('agpeya_compline'); setView('prayer'); }} text={t('buttons', 'agpeya_compline')} />
                  <MenuButton onClick={() => { setSelectedLiturgy('agpeya_midnight'); setView('prayer'); }} text={t('buttons', 'agpeya_midnight')} />
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. LITURGY MENU (Bleibt fast gleich) */}
          {view === 'liturgyMenu' && (
            <motion.div key="menu" className="center-view" initial={{ x: 100 }} animate={{ x: 0 }} exit={{ x: -100 }}>
              <div className="center-content-wrapper">
                <h2 className="page-title">{t('chooseLiturgy')}</h2>
                <div className="btn-group">
                  <MenuButton
                    onClick={() => { setSelectedLiturgy('morning_incense'); setView('prayer'); }}
                    text={t('buttons', 'morning_incense')}
                    icon={<Sun size={20} />}
                    highlight={true}
                  />
                  {['offering', 'basily', 'kerollosy', 'gregorios'].map(type => (
                    <MenuButton key={type} onClick={() => { setSelectedLiturgy(type); setView('prayer'); }} text={t('buttons', type)} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'prayer' && selectedLiturgy && (
            <div className={prayerModeClass}>
              <div className="scroll-area" ref={scrollContainerRef}>

                {/* --- SICHERHEITS-CHECK START --- */}
                {/* Wenn die Liturgie nicht in der Datenbank gefunden wird, zeige Fehler statt Absturz */}
                {!liturgies[selectedLiturgy] ? (
                  <div style={{ padding: 20, textAlign: 'center', color: 'red' }}>
                    <h2>Fehler: Daten nicht gefunden!</h2>
                    <p>Key: {selectedLiturgy}</p>
                    <button className="hint-btn" onClick={() => setView('home')}>Zurück</button>
                  </div>
                ) : (
                  <>
                    {/* HIER BEGINNT DER NORMALE INHALT */}
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                      {/* Das ? nach title verhindert Absturz, falls title fehlt */}
                      <h3 className="liturgy-header">{liturgies[selectedLiturgy]?.title?.[appLang]}</h3>
                    </div>

                    <div className="prayer-content">
                      {/* Das ? vor .map ist wichtig! */}
                      {liturgies[selectedLiturgy]?.content?.map((row, index) => {
                        // ... (deine existierende map Funktion)
                        // Kopiere hier exakt deinen bestehenden Code rein, der die PrayerRowWithLogic rendert
                        if (row.type === 'selection_menu') {
                          return <SelectionMenu key={index} data={row} selectedIDs={selectedIDs} toggle={toggleSelection} appLang={appLang} />;
                        }

                        const currentRowID = String(row.id);
                        if (optionalIDs.has(currentRowID)) {
                          const isSelected = selectedIDs.some(id => String(id) === currentRowID);
                          if (!isSelected) return null;
                        }

                        const dynamicLangs = activeLangs.filter(l => row[l]?.trim());
                        if (row.counter) return <KyrieCounter key={index} initialCount={row.counter} />;

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
                            openHint={openHint}
                            selectedLiturgy={selectedLiturgy}
                            userRole={userRole}
                          />
                        );
                      })}
                    </div>
                  </>
                )}
                {/* --- SICHERHEITS-CHECK ENDE --- */}

                <div style={{ height: '100px' }}></div>
              </div>
            </div>
          )}
          {/* 5. NUR NOCH BIBEL IST COMING SOON */}
          {view === 'bible' && (
            <div className="center-view">
              <h2 style={{ color: 'var(--gold)' }}>Coming Soon...</h2>
              <button onClick={() => setView('home')} className="hint-btn">Zurück</button>
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
// --- NEUE KOMPONENTE: Auswahl Menü ---
function SelectionMenu({ data, selectedIDs, toggle, appLang }) {
  const isAr = appLang === 'ar';

  return (
    <div className="selection-menu-container" style={{
      background: 'rgba(0,0,0,0.3)',
      border: '1px solid var(--gold)',
      borderRadius: '8px',
      padding: '15px',
      margin: '20px 10px',
      textAlign: isAr ? 'right' : 'left'
    }}>
      <h3 style={{ color: 'var(--gold)', marginTop: 0, fontFamily: isAr ? 'Cairo' : 'inherit' }}>
        {data.title}
      </h3>
      <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '15px' }}>
        {data.description}
      </p>

      {/* Abschnitt: Feste */}
      {data.feasts && data.feasts.length > 0 && (
        <div style={{ marginBottom: '15px' }}>
          <h4 style={{ color: '#fff', borderBottom: '1px solid #444', paddingBottom: '5px' }}>
            {isAr ? 'الأعياد (تسبق التذاكية)' : 'Feste (Vor der Theotokie)'}
          </h4>
          {data.feasts.map(item => (
            <label key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', cursor: 'pointer', flexDirection: isAr ? 'row-reverse' : 'row' }}>
              <input
                type="checkbox"
                checked={selectedIDs.includes(item.id)}
                onChange={() => toggle(item.id)}
                style={{ width: '20px', height: '20px', margin: '0 10px' }}
              />
              <span style={{ fontSize: '1rem', fontFamily: isAr ? 'Cairo' : 'inherit' }}>
                {isAr ? item.ar : item.de}
              </span>
            </label>
          ))}
        </div>
      )}

      {/* Abschnitt: Heilige */}
      {data.saints && data.saints.length > 0 && (
        <div>
          <h4 style={{ color: '#fff', borderBottom: '1px solid #444', paddingBottom: '5px' }}>
            {isAr ? 'القديسين' : 'Heilige'}
          </h4>
          {data.saints.map(item => (
            <label key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', cursor: 'pointer', flexDirection: isAr ? 'row-reverse' : 'row' }}>
              <input
                type="checkbox"
                checked={selectedIDs.includes(item.id)}
                onChange={() => toggle(item.id)}
                style={{ width: '20px', height: '20px', margin: '0 10px' }}
              />
              <span style={{ fontSize: '1rem', fontFamily: isAr ? 'Cairo' : 'inherit' }}>
                {isAr ? item.ar : item.de}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}