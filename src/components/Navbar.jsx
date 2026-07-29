import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Contact', href: '#contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
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
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
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

        {/* Desktop Navigation */}
        <nav className="desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
          ))}
        </nav>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <AudioPlayer />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation"
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
      </header>

      {/* Full-screen mobile overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};
