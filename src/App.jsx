import React, { useState, useEffect } from 'react';
import { GhibliCanvas } from './components/GhibliCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechGarden } from './components/TechGarden';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [theme, setTheme] = useState('totoro');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Interactive Soot-Sprite & Star Canvas */}
      <GhibliCanvas />

      {/* Floating Glass Navbar */}
      <Navbar currentTheme={theme} setTheme={setTheme} />

      {/* Main Content Layout */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <TechGarden />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
