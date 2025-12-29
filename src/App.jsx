// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, ArrowLeft, BookOpen } from 'lucide-react';
import { liturgies, languages } from './liturgyData';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home'); // home, liturgyMenu, prayer, bible, agpeya
  const [selectedLiturgy, setSelectedLiturgy] = useState(null);

  // Standard-Sprachen: Deutsch, Arabisch, Koptisch-Arabisch
  const [activeLangs, setActiveLangs] = useState(['de', 'ar', 'cop_ar']);
  const [showSettings, setShowSettings] = useState(false);

  // Loading Screen Timer (3.5 Sekunden für die Animation)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);

  // Logik: Maximal 3 Sprachen gleichzeitig
  const toggleLanguage = (langKey) => {
    if (activeLangs.includes(langKey)) {
      // Sprache entfernen (aber mind. 1 muss bleiben)
      if (activeLangs.length > 1) setActiveLangs(activeLangs.filter(l => l !== langKey));
    } else {
      // Sprache hinzufügen (nur wenn weniger als 3)
      if (activeLangs.length < 3) setActiveLangs([...activeLangs, langKey]);
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="app-container">
      {/* Hintergrundbild */}
      <div className="bg-image"></div>
      <div className="overlay"></div>

      {/* Kopfzeile */}
      <header className="header">
        {view !== 'home' ? (
          <button onClick={() => setView(view === 'prayer' ? 'liturgyMenu' : 'home')} className="icon-btn">
            <ArrowLeft color="#D4AF37" size={32} />
          </button>
        ) : <div />}

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
                <h1 className="church-title">Koptisch-Orthodoxes<br />Patriarchat Unna-Massen</h1>
              </div>

              <div className="btn-group">
                <MenuButton onClick={() => setView('agpeya')} text="Agpeya" icon={<BookOpen size={20} />} />
                <MenuButton onClick={() => setView('liturgyMenu')} text="Liturgie" highlight />
                <MenuButton onClick={() => setView('bible')} text="Bibel" />
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
              <h2 className="page-title">Wähle die Liturgie</h2>
              <div className="btn-group">
                <MenuButton onClick={() => openLiturgy('basily')} text="Basilius (Basily)" />
                <MenuButton onClick={() => openLiturgy('kerollosy')} text="Cyrillus (Kerollosy)" />
                <MenuButton onClick={() => openLiturgy('gregorios')} text="Gregorios (8ere8orios)" />
                <MenuButton onClick={() => openLiturgy('habashy')} text="Äthiopisch (Habashy)" />
              </div>
            </motion.div>
          )}

          {/* GEBET ANSICHT (LIVE) */}
          {view === 'prayer' && selectedLiturgy && (
            <motion.div key="prayer" className="prayer-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

              {/* EINSTELLUNGEN POPUP */}
              {showSettings && (
                <div className="settings-popup">
                  <h3>Sprachen wählen (Max 3)</h3>
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
                  <button className="close-btn" onClick={() => setShowSettings(false)}>Fertig</button>
                </div>
              )}

              {/* DER TEXT */}
              <div className="scroll-area">
                <h3 className="liturgy-header">{liturgies[selectedLiturgy].title}</h3>
                {liturgies[selectedLiturgy].content.map((row, index) => (
                  <div key={index} className="prayer-row">
                    <span className="speaker">{row.speaker}</span>
                    <div className="text-grid">
                      {activeLangs.map(lang => (
                        <p key={lang} className={`text-line lang-${lang}`}>
                          {row[lang] || "-"}
                        </p>
                      ))}
                    </div>
                  </div>
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

// Kleine Hilfs-Komponenten
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

function LoadingScreen() {
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
        Wird geladen...
      </motion.h2>
    </div>
  );
}