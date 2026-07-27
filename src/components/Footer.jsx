import React from 'react';
import { ArrowUp, Heart, Leaf } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 0',
        background: 'rgba(0, 0, 0, 0.25)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem',
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
          <Leaf size={20} className="animate-sway" />
          <span>Varad — Studio Ghibli Portfolio</span>
        </div>

        <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.92rem', fontFamily: 'var(--font-heading)' }}>
          "Always move forward, like the wind in the valley trees."
        </p>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Varad. Handcrafted with React & Ghibli magic.
        </div>

        <button
          onClick={scrollToTop}
          className="btn-ghibli-outline"
          style={{ padding: '0.5rem 1rem', fontSize: '0.82rem', marginTop: '0.5rem' }}
          title="Back to Top"
        >
          <ArrowUp size={16} />
          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  );
};
