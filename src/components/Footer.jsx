import React from 'react';
import { Leaf, ArrowUp } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)',
        padding: '3rem 0 2rem 0',
        color: 'var(--text-muted)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {/* Brand Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #8BC5A4 0%, #76AB8B 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0F1720'
              }}
            >
              <Leaf size={16} />
            </div>
            <span style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem', fontFamily: 'var(--font-title)' }}>
              {profileData.name}
            </span>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.88rem' }}>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Tech Stack</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#timeline" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="btn-ghibli-outline"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem'
          }}
        >
          <div>
            © {new Date().getFullYear()} {profileData.name}. Engineered with React & Minimal Aesthetics.
          </div>
          <div style={{ color: 'var(--text-muted)' }}>
            Design inspired by Linear & Apple guidelines
          </div>
        </div>
      </div>
    </footer>
  );
};

