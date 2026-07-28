import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1140px',
        zIndex: 100,
        padding: isScrolled ? '0.7rem 1.4rem' : '0.9rem 1.6rem',
        background: isScrolled ? 'rgba(15, 23, 32, 0.88)' : 'rgba(24, 36, 45, 0.55)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        boxShadow: isScrolled ? '0 12px 32px rgba(0, 0, 0, 0.35)' : '0 4px 20px rgba(0, 0, 0, 0.15)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* Minimal Brand Logo */}
      <a
        href="#"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          textDecoration: 'none',
          color: 'var(--text-main)',
          fontWeight: 700,
          fontSize: '1.1rem',
          fontFamily: 'var(--font-title)'
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #8BC5A4 0%, #76AB8B 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0F1720'
          }}
        >
          <Leaf size={18} />
        </div>
        <span>
          Varad <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 500 }}>✦ Portfolio</span>
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <nav
        className="desktop-links"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Tech Stack</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#timeline" className="nav-link">Experience</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* Right Controls (Audio Ambience Player) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <AudioPlayer />

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'none'
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <style>{`
        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          font-family: var(--font-title);
          font-size: 0.92rem;
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--text-main);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background: var(--accent-primary);
          transition: width 0.25s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 900px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

