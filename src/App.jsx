import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, ArrowLeft, BookOpen, PenTool, Eraser } from 'lucide-react';
import { liturgies, languages, uiTranslations } from './liturgyData';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home');
  const [selectedLiturgy, setSelectedLiturgy] = useState(null);
  const [appLang, setAppLang] = useState('de');
  const [activeLangs, setActiveLangs] = useState(['de', 'ar', 'cop_ar']);
  const [showSettings, setShowSettings] = useState(false);

  // --- ZIEL FÜR SPRUNG ---
  const [targetScrollId, setTargetScrollId] = useState(null);

  // --- TOOLS ---
  const [isHighlightMode, setIsHighlightMode] = useState(false);
  const [isEraserMode, setIsEraserMode] = useState(false);

  const scrollContainerRef = useRef(null);

  // --- HILFSFUNKTION: Scrollen erzwingen ---
  const scrollToElementById = (id) => {
    let attempts = 0;
    const maxAttempts = 50;

    const checkAndScroll = () => {
      if (!scrollContainerRef.current) return;

      const element = scrollContainerRef.current.querySelector(`[data-id="${id}"]`);

      if (element) {
        element.scrollIntoView({ block: 'center', behavior: 'auto' });
        console.log(`Erfolg: Gesprungen zu ID ${id}`);
      } else {
        attempts++;
        if (attempts < maxAttempts) {
          requestAnimationFrame(checkAndScroll);
        } else {
          console.log(`Fehler: ID ${id} nicht gefunden.`);
        }
      }
    };
    requestAnimationFrame(checkAndScroll);
  };

  // --- EFFEKT: Reagiert auf Liturgie-Wechsel oder Ziel-ID ---
  useLayoutEffect(() => {
    if (view === 'prayer') {
      if (targetScrollId) {
        scrollToElementById(targetScrollId);
        setTargetScrollId(null);
      } else {
        if (scrollContainerRef.current && scrollContainerRef.current.scrollTop > 0) {
          // Optional: Nach oben scrollen, wenn kein Ziel da ist
        }
      }
    }
  }, [selectedLiturgy, targetScrollId, view]);


  // --- MENU AKTIONEN ---
  const handleMenuAction = (action) => {
    if (!action) return;

    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;

    switch (action) {
      // --- BASILIUS ---
      case "goto_basily_start":
        setTargetScrollId(null);
        setSelectedLiturgy('basily');
        break;

      case "goto_basily_id_5":
        // NEU: Sprung zu ID 5 im Basilius
        setSelectedLiturgy('basily');
        setTargetScrollId(5);
        break;

      // --- CYRILLUS ---
      case "goto_cyrillus_start":
        setTargetScrollId(null);
        setSelectedLiturgy('kerollosy');
        break;

      case "goto_cyrillus_id_9":
        // Sprung zu ID 9 im Cyrillus
        setSelectedLiturgy('kerollosy');
        setTargetScrollId(9);
        break;

      case "goto_cyrillus_love_prayer":
        setTargetScrollId(null);
        setSelectedLiturgy('kerollosy');
        break;

      // --- GREGORIOS ---
      case "goto_gregorios_start":
        setTargetScrollId(null);
        setSelectedLiturgy('gregorios');
        break;
      case "goto_gregorios_christ_prayer":
        setTargetScrollId(null);
        setSelectedLiturgy('gregorios');
        break;

      // --- HYMNEN ---
      case "goto_rejoice_mary":
        setTargetScrollId(null);
        setSelectedLiturgy('rejoice_mary');
        break;
      case "goto_aspasmos_adam":
        setTargetScrollId(null);
        setSelectedLiturgy('aspasmos_adam');
        break;

      default:
        console.log("Aktion nicht gefunden:", action);
    }
  };

  // --- HELPER (UNVERÄNDERT) ---
  const captureScroll = () => { };
  const toggleLanguage = (langKey) => {
    if (activeLangs.includes(langKey)) {
      if (activeLangs.length > 1) setActiveLangs(activeLangs.filter(l => l !== langKey));
    } else {
      if (activeLangs.length < 3) setActiveLangs([...activeLangs, langKey]);
    }
  };

  const handleContextMenu = (e) => { e.preventDefault(); return false; };
  const handleTextSelection = () => {
    if (!isHighlightMode || isEraserMode) return;
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      try {
        const range = selection.getRangeAt(0);
        if (!range.commonAncestorContainer.parentElement.classList.contains('highlight-marker')) {
          const span = document.createElement('span');
          span.className = 'highlight-marker';
          range.surroundContents(span);
          selection.removeAllRanges();
        }
      } catch (e) { selection.removeAllRanges(); }
    }
  };
  const handlePrayerClick = (e) => {
    if (!isEraserMode) return;
    const targetSpan = e.target.closest('.highlight-marker');
    if (targetSpan) targetSpan.replaceWith(...targetSpan.childNodes);
  };
  const togglePen = () => { setIsHighlightMode(!isHighlightMode); if (!isHighlightMode) setIsEraserMode(false); };
  const toggleEraser = () => { setIsEraserMode(!isEraserMode); if (!isEraserMode) setIsHighlightMode(false); };

  useEffect(() => { setTimeout(() => setLoading(false), 2000); }, []);
  const t = (key, subKey) => subKey ? uiTranslations[key][subKey][appLang] : uiTranslations.titles[key][appLang];

  if (loading) return <LoadingScreen appLang={appLang} />;

  let prayerModeClass = "prayer-mode";
  if (isHighlightMode) prayerModeClass += " mode-pen-active";
  if (isEraserMode) prayerModeClass += " mode-eraser-active";

  return (
    <div className="app-container">
      {view !== 'prayer' && (
        <>
          <div className="bg-image"></div>
          <div className="overlay"></div>
        </>
      )}

      <header className="header">
        {view !== 'home' ? (
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => setView(view === 'prayer' ? 'liturgyMenu' : 'home')} className="icon-btn">
            <ArrowLeft color="#D4AF37" size={28} />
          </motion.button>
        ) : (
          <div style={{ display: 'flex', gap: '15px' }}>
            <LanguageToggle current={appLang} lang='de' setLang={setAppLang} label="DE" />
            <LanguageToggle current={appLang} lang='ar' setLang={setAppLang} label="EG" />
          </div>
        )}
        {view === 'prayer' && (
          <div className="header-actions">
            <motion.button whileTap={{ scale: 0.9 }} onClick={togglePen} className={`icon-btn ${isHighlightMode ? 'active-pen' : ''}`}>
              <PenTool color={isHighlightMode ? "#FFEB3B" : "#D4AF37"} size={22} fill={isHighlightMode ? "#FFEB3B" : "transparent"} />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} onClick={toggleEraser} className={`icon-btn ${isEraserMode ? 'active-pen' : ''}`}>
              <Eraser color={isEraserMode ? "#FFEB3B" : "#D4AF37"} size={22} fill={isEraserMode ? "#FFEB3B" : "transparent"} />
            </motion.button>
            <motion.button whileTap={{ rotate: 90 }} onClick={() => setShowSettings(!showSettings)} className="icon-btn">
              <Settings color={view === 'prayer' ? "#B8860B" : "#D4AF37"} size={28} />
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
            <div className={prayerModeClass}
              onContextMenu={handleContextMenu} onMouseUp={handleTextSelection} onTouchEnd={handleTextSelection} onClick={handlePrayerClick}>

              <AnimatePresence>
                {showSettings && (
                  <motion.div initial={{ opacity: 0, scale: 0.8, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8 }} className="settings-popup">
                    <h3>{t('prayerLanguages')}</h3>
                    <div className="lang-grid">
                      {Object.entries(languages).map(([key, info]) => (
                        <button key={key} className={`lang-btn ${activeLangs.includes(key) ? 'active' : ''}`} onClick={() => toggleLanguage(key)} disabled={!activeLangs.includes(key) && activeLangs.length >= 3}>
                          {info.label}
                        </button>
                      ))}
                    </div>
                    <button className="close-btn" onClick={() => setShowSettings(false)}>{t('done')}</button>
                  </motion.div>
                )}
              </AnimatePresence>

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
                      <React.Fragment key={index}>
                        {row.sectionTitle && (
                          <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>
                            <h4 className="section-title">{row.sectionTitle[appLang]}</h4>
                          </div>
                        )}

                        <div className="prayer-row" data-id={rowID}>
                          <span className="speaker">{row.speaker}</span>
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
                      </React.Fragment>
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

// ... SUB COMPONENTS (Unverändert) ...
function LanguageToggle({ current, lang, setLang, label }) {
  return (
    <motion.button whileTap={{ scale: 0.9 }} onClick={() => setLang(lang)}
      style={{ opacity: current === lang ? 1 : 0.6, background: 'none', border: 'none', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Cairo', color: current === lang ? 'var(--gold)' : 'white', textShadow: current === lang ? '0 0 10px rgba(212, 175, 55, 0.5)' : 'none' }}>
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