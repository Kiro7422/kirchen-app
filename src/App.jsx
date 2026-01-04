import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, ArrowLeft, BookOpen, PenTool, Eraser, User } from 'lucide-react';
import { liturgies, languages, uiTranslations, liturgyHints } from './liturgyData'; 
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  
  // --- STATE: ROLLE ---
  const [userRole, setUserRole] = useState(null); // 'priester', 'diakon', 'volk'

  const [view, setView] = useState('home');
  const [selectedLiturgy, setSelectedLiturgy] = useState(null);
  const [appLang, setAppLang] = useState('de');
  const [activeLangs, setActiveLangs] = useState(['de', 'ar', 'cop_ar']);
  const [showSettings, setShowSettings] = useState(false);
  const [targetScrollId, setTargetScrollId] = useState(null);
  const [isHighlightMode, setIsHighlightMode] = useState(false);
  const [isEraserMode, setIsEraserMode] = useState(false);

  // --- NEUER HINWEIS STATE ---
  // triggeredHints: Welche IDs wurden schon erreicht? (Zeigt das Icon an)
  const [triggeredHints, setTriggeredHints] = useState([]);
  
  // activeHintData: Welcher Hinweis ist gerade OFFEN (Popup)?
  const [activeHintData, setActiveHintData] = useState(null);

  const scrollContainerRef = useRef(null);

  // Popup schließen
  const closeHintPopup = () => {
    setActiveHintData(null);
  };

  // Hinweis manuell öffnen (Klick auf Icon)
  const openHint = (id) => {
    const hint = liturgyHints[id];
    if (hint) {
      setActiveHintData({ id, ...hint });
    }
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

  // Menü Aktionen
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
      if (activeLangs.includes(langKey)) { 
          if (activeLangs.length > 1) setActiveLangs(activeLangs.filter(l => l !== langKey)); 
      } else { 
          if (activeLangs.length < 3) setActiveLangs([...activeLangs, langKey]); 
      } 
  };
  
  const handleContextMenu = (e) => { e.preventDefault(); return false; };
  const handleTextSelection = () => { /* ... */ };
  const handlePrayerClick = (e) => { /* ... */ };
  const togglePen = () => { setIsHighlightMode(!isHighlightMode); if (!isHighlightMode) setIsEraserMode(false); };
  const toggleEraser = () => { setIsEraserMode(!isEraserMode); if (!isEraserMode) setIsHighlightMode(false); };

  useEffect(() => { setTimeout(() => setLoading(false), 2000); }, []);
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

  // --- ROLLEN AUSWAHL (WENN NOCH NICHT GEWÄHLT) ---
  if (!userRole) {
    return (
      <RoleSelectionScreen 
        setRole={setUserRole} 
        appLang={appLang}
        setAppLang={setAppLang} 
      />
    );
  }

  // --- KLASSEN FÜR ROLLEN ---
  let prayerModeClass = "prayer-mode";
  if (isHighlightMode) prayerModeClass += " mode-pen-active";
  if (isEraserMode) prayerModeClass += " mode-eraser-active";
  
  // Diakon Modus
  if (userRole === 'diakon') prayerModeClass += " role-diakon-active";
  // Priester Modus (NEU)
  if (userRole === 'priester') prayerModeClass += " role-priester-active";

  return (
    <div className="app-container">
      {/* --- POPUP (nur wenn Icon geklickt wurde) --- */}
      <AnimatePresence>
        {activeHintData && (
          <motion.div 
            className="hint-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeHintPopup} // Schließen beim Klick auf Hintergrund
          >
            <div className="hint-box" onClick={(e) => e.stopPropagation()}>
              <h2 className="hint-title">{appLang === 'ar' ? 'تنبيه' : 'Hinweis'}</h2>
              <div className="hint-text">
                {activeHintData[appLang] || activeHintData['de']}
              </div>
              <button className="hint-btn" onClick={closeHintPopup}>
                {appLang === 'ar' ? 'حسناً' : 'OK'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
        
        {/* Anzeige der gewählten Rolle im Header */}
        {view === 'home' && (
            <div style={{color: 'var(--gold)', marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', border: '1px solid var(--gold)', padding: '5px 10px', borderRadius: '15px'}}>
                <User size={16} /> 
                {userRole === 'diakon' ? (appLang === 'ar' ? 'شماس' : 'Diakon') : 
                 userRole === 'priester' ? (appLang === 'ar' ? 'كاهن' : 'Priester') : 
                 (appLang === 'ar' ? 'شعب' : 'Volk')}
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
            <div className={prayerModeClass} onContextMenu={handleContextMenu} onMouseUp={handleTextSelection} onTouchEnd={handleTextSelection} onClick={handlePrayerClick}>
              
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

                    // --- SCHLAUE KOMPONENTE: Zeigt Icon an, wenn man scrollt ---
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
                        // Props für Hinweise
                        hints={liturgyHints}
                        triggeredHints={triggeredHints} // State
                        setTriggeredHints={setTriggeredHints} // State Setter
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
  const hasHintData = hints && hints[rowID]; // Gibt es einen Hinweis für diese ID?
  const showIcon = triggeredHints.includes(rowID); // Soll das Icon angezeigt werden?

  // Wenn ein Hinweis existiert, prüfe ob wir dorthin gescrollt sind
  useEffect(() => {
    if (!hasHintData || showIcon) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Aha! Wir sehen den Block. Icon aktivieren!
          setTriggeredHints(prev => [...prev, rowID]);
          observer.disconnect();
        }
      },
      { threshold: 0.6 } // Bei 60% Sichtbarkeit
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
        
        {/* --- DAS ICON (!) --- */}
        {/* Erscheint nur, wenn triggeredHints die ID enthält */}
        {showIcon && (
          <motion.div 
            className="hint-trigger-icon" 
            onClick={() => openHint(rowID)}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
          >
            !
          </motion.div>
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
      {/* Sprachauswahl für den Start-Screen */}
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
         <div style={{ display: 'flex', gap: '15px' }}>
            <LanguageToggle current={appLang} lang='de' setLang={setAppLang} label="DE" />
            <LanguageToggle current={appLang} lang='ar' setLang={setAppLang} label="EG" />
          </div>
      </div>

      <motion.img 
        src="/logo.png" 
        style={{ width: '120px', marginBottom: '20px' }} 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
      />
      
      <motion.h2 
        style={{ color: 'var(--gold)', fontFamily: 'Cairo', marginBottom: '40px' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
      >
        {appLang === 'ar' ? 'اختر دورك' : 'Wähle deine Rolle'}
      </motion.h2>

      <div className="role-grid">
        <RoleCard 
          labelDe="Priester" 
          labelAr="كاهن" 
          icon="✝️" 
          onClick={() => setRole('priester')} 
          delay={0.3} 
        />
        <RoleCard 
          labelDe="Diakon" 
          labelAr="شماس" 
          icon="🕯️" 
          onClick={() => setRole('diakon')} 
          delay={0.4} 
        />
        <RoleCard 
          labelDe="Volk" 
          labelAr="شعب" 
          icon="👥" 
          onClick={() => setRole('volk')} 
          delay={0.5} 
        />
      </div>
    </div>
  );
}

function RoleCard({ labelDe, labelAr, icon, onClick, delay }) {
  return (
    <motion.div 
      className="role-card" 
      onClick={onClick}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: delay }}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="role-icon">{icon}</span>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <span className="role-title" style={{ color: 'var(--gold)' }}>{labelAr}</span>
        <span className="role-title" style={{ fontSize: '1rem', color: '#ccc' }}>{labelDe}</span>
      </div>
    </motion.div>
  )
}

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