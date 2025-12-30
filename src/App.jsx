// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, ArrowLeft, BookOpen, Globe } from 'lucide-react'; // Globe Icon für Sprache
import { liturgies, languages, uiTranslations } from './liturgyData';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home');
  const [selectedLiturgy, setSelectedLiturgy] = useState(null);

  // App Sprache (UI & Titel): Standard Deutsch
  const [appLang, setAppLang] = useState('de');

  // Gebetssprachen (Die Zeilen im Gebet): Standard DE, AR, COP
  const [activeLangs, setActiveLangs] = useState(['de', 'ar', 'cop_ar']);

  // Das Settings-Popup brauchen wir jetzt NUR noch für die Text-Zeilen, nicht mehr für App-Sprache
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);

  const toggleLanguage = (langKey) => {
    if (activeLangs.includes(langKey)) {
      if (activeLangs.length > 1) setActiveLangs(activeLangs.filter(l => l !== langKey));
    } else {
      if (activeLangs.length < 3) setActiveLangs([...activeLangs, langKey]);
    }
  };

  // Hilfsfunktion für Übersetzungen
  const t = (key, subKey) => {
    if (subKey) return uiTranslations[key][subKey][appLang];
    return uiTranslations.titles[key][appLang];
  };

  if (loading) return <LoadingScreen appLang={appLang} />;

  return (
    <div className="app-container">
      <div className="bg-image"></div>
      <div className="overlay"></div>

      <header className="header">
        {view !== 'home' ? (
          <button onClick={() => setView(view === 'prayer' ? 'liturgyMenu' : 'home')} className="icon-btn">
            <ArrowLeft color="#D4AF37" size={32} />
          </button>
        ) : (
          // HIER: Sprachumschalter direkt im Header auf der Startseite
          <div style={{ display: 'flex', gap: '10px', marginLeft: 'auto' }}>
            <button
              onClick={() => setAppLang('de')}
              style={{ opacity: appLang === 'de' ? 1 : 0.5, cursor: 'pointer', background: 'none', border: 'none', fontSize: '1.5rem' }}
            >
              🇩🇪
            </button>
            <button
              onClick={() => setAppLang('ar')}
              style={{ opacity: appLang === 'ar' ? 1 : 0.5, cursor: 'pointer', background: 'none', border: 'none', fontSize: '1.5rem' }}
            >
              🇪🇬
            </button>
          </div>
        )}

        {view === 'prayer' && (
          <button onClick={() => setShowSettings(!showSettings)} className="icon-btn">
            <Settings color="#D4AF37" size={32} />
          </button>
        )}
      </header>

      <main className="content">
        <AnimatePresence mode='wait'>

          {/* HAUPTMENÜ */}
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="center-view"
            >
              <div className="logo-container">
                <img src="/logo.png" alt="Logo" className="main-logo glow-effect" />
                <h1 className="church-title">
                  {t('homeSubtitle')}
                </h1>
              </div>

              <div className="btn-group">
                <MenuButton onClick={() => setView('agpeya')} text={t('buttons', 'agpeya')} icon={<BookOpen size={20} />} />
                <MenuButton onClick={() => setView('liturgyMenu')} text={t('buttons', 'liturgy')} highlight />
                <MenuButton onClick={() => setView('bible')} text={t('buttons', 'bible')} />
              </div>
            </motion.div>
          )}

          {/* LITURGIE AUSWAHL */}
          {view === 'liturgyMenu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="center-view"
            >
              <img src="/logo.png" alt="Logo" className="small-logo" />
              <h2 className="page-title">{t('chooseLiturgy')}</h2>
              <div className="btn-group">
                <MenuButton onClick={() => openLiturgy('basily')} text={t('buttons', 'basily')} />
                <MenuButton onClick={() => openLiturgy('kerollosy')} text={t('buttons', 'kerollosy')} />
                <MenuButton onClick={() => openLiturgy('gregorios')} text={t('buttons', 'gregorios')} />
                <MenuButton onClick={() => openLiturgy('habashy')} text={t('buttons', 'habashy')} />
              </div>
            </motion.div>
          )}

          {/* GEBET ANSICHT */}
          {view === 'prayer' && selectedLiturgy && (
            <motion.div key="prayer" className="prayer-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

              {showSettings && (
                <div className="settings-popup">
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
                </div>
              )}

              <div className="scroll-area">
                {/* HIER WURDE GEÄNDERT: Title ist jetzt sprachabhängig */}
                <h3 className="liturgy-header">
                  {liturgies[selectedLiturgy].title[appLang]}
                </h3>

                {liturgies[selectedLiturgy].content.map((row, index) => (
                  <React.Fragment key={index}>
                    {/* Roter Abschnitts-Titel */}
                    {row.sectionTitle && (
                      <h4 className="section-title">
                        {row.sectionTitle[appLang]}
                      </h4>
                    )}

                    <div className="prayer-row">
                      <span className="speaker">{row.speaker}</span>
                      <div className="text-grid">
                        {activeLangs.map(lang => (
                          <p key={lang} className={`text-line lang-${lang}`}>
                            {row[lang] || "-"}
                          </p>
                        ))}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
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
  }
}

// ... MenuButton und LoadingScreen bleiben gleich ...
function MenuButton({ text, onClick, highlight, icon }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`menu-btn ${highlight ? 'highlight' : ''}`}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {text}
    </motion.button>
  );
}

function LoadingScreen({ appLang }) {
  return (
    <div className="loading-screen">
      <motion.img
        src="/logo.png"
        animate={{
          scale: [1, 1.2, 1],
          filter: ["drop-shadow(0 0 0px #D4AF37)", "drop-shadow(0 0 20px #D4AF37)", "drop-shadow(0 0 0px #D4AF37)"]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="loading-logo"
      />
      <motion.h2 animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}>
        {appLang === 'ar' ? '...جار التحميل' : 'Wird geladen...'}
      </motion.h2>
    </div>
  );
}