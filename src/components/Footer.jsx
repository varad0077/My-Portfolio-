import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '3rem 0 2rem',
        position: 'relative',
        zIndex: 10
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
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '7px',
                background: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--bg-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.8rem',
                lineHeight: 1
              }}
            >
              V
            </div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '0.95rem',
                color: 'var(--text-primary)'
              }}
            >
              {profileData.name}
            </span>
          </div>

          {/* Quick nav */}
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="btn-ghost"
            style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem' }}
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'var(--text-tertiary)'
          }}
        >
          <span>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</span>
          <span>Engineered with React & attention to detail.</span>
        </div>
      </div>
    </footer>
  );
};
