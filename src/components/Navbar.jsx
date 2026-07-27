import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Sparkles, Sun, Moon, Cloud, Flame } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

export const Navbar = ({ currentTheme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes = [
    { id: 'totoro', label: "Totoro's Forest", icon: Leaf, color: '#4ade80' },
    { id: 'howl', label: "Howl's Sky", icon: Cloud, color: '#38bdf8' },
    { id: 'spirited', label: "Spirited Night", icon: Flame, color: '#f59e0b' },
    { id: 'kiki', label: "Kiki's Sunset", icon: Sparkles, color: '#c084fc' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 100,
        padding: isScrolled ? '0.75rem 1.5rem' : '1rem 2rem',
        background: isScrolled ? 'var(--bg-card)' : 'rgba(26, 51, 36, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid var(--border-color)',
        borderRadius: '50px',
        boxShadow: isScrolled ? '0 10px 30px var(--shadow-color)' : 'none',
        transition: 'all 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* Brand Logo */}
      <a
        href="#"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          textDecoration: 'none',
          color: 'var(--text-main)',
          fontWeight: 800,
          fontSize: '1.25rem',
          fontFamily: 'var(--font-title)'
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0f172a',
            boxShadow: '0 0 12px var(--glow-color)'
          }}
          className="animate-sway"
        >
          <Leaf size={20} />
        </div>
        <span>
          Varad <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>✦ Ghibli Code</span>
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <div
        className="desktop-links"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.8rem'
        }}
      >
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Tech Garden</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#timeline" className="nav-link">Journey</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

      {/* Right Tools (Audio Player + Theme Switcher) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <AudioPlayer />

        {/* Theme Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
            className="btn-ghibli-outline"
            style={{
              padding: '0.5rem 0.9rem',
              fontSize: '0.85rem',
              borderRadius: '20px'
            }}
          >
            <Sparkles size={15} style={{ color: 'var(--accent-secondary)' }} />
            <span style={{ textTransform: 'capitalize' }}>{currentTheme} Theme</span>
          </button>

          {themeDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: '120%',
                right: 0,
                width: '180px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '0.5rem',
                boxShadow: '0 10px 25px var(--shadow-color)',
                backdropFilter: 'blur(12px)',
                zIndex: 110
              }}
            >
              {themes.map((t) => {
                const IconComponent = t.icon;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setThemeDropdownOpen(false);
                    }}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: currentTheme === t.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      border: 'none',
                      borderRadius: '10px',
                      color: 'var(--text-main)',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      textAlign: 'left',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    <IconComponent size={16} style={{ color: t.color }} />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

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
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <style>{`
        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 600;
          font-family: var(--font-title);
          font-size: 0.95rem;
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--accent-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--accent-primary);
          transition: width 0.3s ease;
          border-radius: 2px;
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
    </nav>
  );
};
