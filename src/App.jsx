// src/App.jsx
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, ArrowLeft, BookOpen, PenTool, Eraser } from 'lucide-react';
import { liturgies, languages, uiTranslations } from './liturgyData';
import './App.css';

// --- ANIMATIONEN ---
const pageVariants = { initial: { opacity: 0, scale: 0.98 }, in: { opacity: 1, scale: 1 }, out: { opacity: 0, scale: 1.02 } };
const pageTransition = { type: "tween", ease: "easeOut", duration: 0.3 };
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } } };

export default function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home');
  const [selectedLiturgy, setSelectedLiturgy] = useState(null);
  const [appLang, setAppLang] = useState('de');
  const [activeLangs, setActiveLangs] = useState(['de', 'ar', 'cop_ar']);
  const [showSettings, setShowSettings] = useState(false);

  // --- TOOLS STATE ---
  const [isHighlightMode, setIsHighlightMode] = useState(false);
  const [isEraserMode, setIsEraserMode] = useState(false);

  // --- SCROLL LOGIC ---
  const scrollContainerRef = useRef(null);
  const topVisibleId = useRef(null);

  const captureScroll = () => {
    if (!scrollContainerRef.current) return;
    const rows = scrollContainerRef.current.querySelectorAll('.prayer-row');
    for (let row of rows) {
      const rect = row.getBoundingClientRect();
      if (rect.top > 60 && rect.top < window.innerHeight) {
        topVisibleId.current = row.getAttribute('data-id');
        break;
      }
    }
  };

  const toggleLanguage = (langKey) => {
    captureScroll();
    if (activeLangs.includes(langKey)) {
      if (activeLangs.length > 1) setActiveLangs(activeLangs.filter(l => l !== langKey));
    } else {
      if (activeLangs.length < 3) setActiveLangs([...activeLangs, langKey]);
    }
  };

  useLayoutEffect(() => {
    if (view === 'prayer' && topVisibleId.current && scrollContainerRef.current) {
      const element = scrollContainerRef.current.querySelector(`[data-id="${topVisibleId.current}"]`);
      if (element) {
        element.scrollIntoView({ block: 'center', behavior: 'auto' });
      }
    }
  }, [activeLangs, view]);

  // --- MARKIER FUNKTIONEN ---

  // 1. Kontextmenü (Rechtsklick/Long-Press) blockieren, damit man nicht "kopieren" kann
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  // 2. Text markieren (wenn Stift an)
  const handleTextSelection = () => {
    if (!isHighlightMode || isEraserMode) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const text = selection.toString();
    if (text.length === 0) return;

    try {
      const range = selection.getRangeAt(0);
      // Nicht doppelt markieren
      if (range.commonAncestorContainer.parentElement.classList.contains('highlight-marker')) {
        selection.removeAllRanges();
        return;
      }
      const span = document.createElement('span');
      span.className = 'highlight-marker';
      range.surroundContents(span);
      selection.removeAllRanges(); // Auswahl SOFORT löschen = Menü weg
    } catch (e) {
      console.log("Fehler bei komplexer Markierung", e);
      selection.removeAllRanges();
    }
  };

  // 3. Radieren (Klick auf gelbes)
  const handlePrayerClick = (e) => {
    if (!isEraserMode) return;
    const targetSpan = e.target.closest('.highlight-marker');
    if (targetSpan) {
      // Inhalt behalten, aber gelbes Span entfernen
      targetSpan.replaceWith(...targetSpan.childNodes);
    }
  };

  // 4. Header Buttons
  const togglePen = () => {
    if (isHighlightMode) { setIsHighlightMode(false); }
    else { setIsHighlightMode(true); setIsEraserMode(false); }
  };
  const toggleEraser = () => {
    if (isEraserMode) { setIsEraserMode(false); }
    else { setIsEraserMode(true); setIsHighlightMode(false); }
  };

  useEffect(() => { setTimeout(() => setLoading(false), 2000); }, []);

  const t = (key, subKey) => {
    if (subKey) return uiTranslations[key][subKey][appLang];
    return uiTranslations.titles[key][appLang];
  };

  if (loading) return <LoadingScreen appLang={appLang} />;

  // CSS Klasse berechnen
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
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setView(view === 'prayer' ? 'liturgyMenu' : 'home')}
            className="icon-btn"
          >
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
            <motion.button
              whileTap={{ scale: 0.9 }} onClick={togglePen}
              className={`icon-btn ${isHighlightMode ? 'active-pen' : ''}`}
            >
              <PenTool color={isHighlightMode ? "#FFEB3B" : "#D4AF37"} size={22} fill={isHighlightMode ? "#FFEB3B" : "transparent"} />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }} onClick={toggleEraser}
              className={`icon-btn ${isEraserMode ? 'active-pen' : ''}`}
            >
              <Eraser color={isEraserMode ? "#FFEB3B" : "#D4AF37"} size={22} fill={isEraserMode ? "#FFEB3B" : "transparent"} />
            </motion.button>

            <motion.button
              whileTap={{ rotate: 90 }} onClick={() => setShowSettings(!showSettings)}
              className="icon-btn"
            >
              <Settings color={view === 'prayer' ? "#B8860B" : "#D4AF37"} size={28} />
            </motion.button>
          </div>
        )}
      </header>

      <main className="content">
        <AnimatePresence mode='wait'>

          {/* HOME */}
          {view === 'home' && (
            <motion.div key="home" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="center-view">
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

          {/* MENÜ */}
          {view === 'liturgyMenu' && (
            <motion.div key="menu" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={pageTransition} className="center-view">
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

          {/* GEBET */}
          {view === 'prayer' && selectedLiturgy && (
            <motion.div
              key="prayer"
              className={prayerModeClass}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}

              /* EVENTS für Highlighter & Schutz */
              onContextMenu={handleContextMenu}
              onMouseUp={handleTextSelection}
              onTouchEnd={handleTextSelection}
              onClick={handlePrayerClick}
            >
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8 }}
                    className="settings-popup"
                  >
                    <h3>{t('prayerLanguages')}</h3>
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
                    <button className="close-btn" onClick={() => setShowSettings(false)}>{t('done')}</button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="scroll-area" ref={scrollContainerRef}>
                <div style={{ textAlign: 'center' }}>
                  <h3 className="liturgy-header">{liturgies[selectedLiturgy].title[appLang]}</h3>
                </div>

                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  {liturgies[selectedLiturgy].content.map((row, index) => {
                    const dynamicLangs = activeLangs.filter(lang => row[lang] && row[lang].trim() !== "");
                    if (dynamicLangs.length === 0) return null;
                    const rowID = row.id || index;

                    return (
                      <React.Fragment key={index}>
                        {row.sectionTitle && (
                          <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
                            <h4 className="section-title">{row.sectionTitle[appLang]}</h4>
                          </motion.div>
                        )}

                        <motion.div
                          variants={itemVariants}
                          className="prayer-row"
                          data-id={rowID}
                        >
                          <span className="speaker">{row.speaker}</span>
                          <div className="text-grid" style={{ gridTemplateColumns: `repeat(${dynamicLangs.length}, 1fr)` }}>
                            {[...dynamicLangs].sort((a, b) => {
                              const order = ['de', 'cop_de', 'ar_de', 'cop_cop', 'cop_ar', 'ar'];
                              return order.indexOf(a) - order.indexOf(b);
                            }).map(lang => (
                              <p key={lang} className={`text-line lang-${lang}`}>{row[lang]}</p>
                            ))}
                          </div>
                        </motion.div>
                      </React.Fragment>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );

  function openLiturgy(type) {
    setSelectedLiturgy(type);
    setView('prayer');
    setIsHighlightMode(false);
    setIsEraserMode(false);
  }
}

// SUB COMPONENTS
function LanguageToggle({ current, lang, setLang, label }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }} onClick={() => setLang(lang)}
      style={{
        opacity: current === lang ? 1 : 0.6, background: 'none', border: 'none',
        fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Cairo',
        color: current === lang ? 'var(--gold)' : 'white',
        textShadow: current === lang ? '0 0 10px rgba(212, 175, 55, 0.5)' : 'none'
      }}
    >
      {label}
    </motion.button>
  )
}
function MenuButton({ text, onClick, highlight, icon, index = 0 }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }} whileTap={{ scale: 0.96 }}
      onClick={onClick} className={`menu-btn ${highlight ? 'highlight' : ''}`}
    >
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