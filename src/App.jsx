import React from 'react';
import './App.css';
import { GradientMesh } from './components/GradientMesh';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Ambient gradient mesh background */}
      <GradientMesh />

      {/* Floating navigation */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
