import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';
import { profileData } from '../data/portfolioData';

// Animated number counter
const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numTarget = parseInt(String(target).replace(/[^0-9]/g, ''), 10) || 0;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatItem = ({ label, value, delay, started }) => {
  const numericPart = String(value).replace(/[^0-9]/g, '');
  const suffix = String(value).replace(/[0-9,]/g, '');
  const count = useCounter(numericPart, 2200, started);

  return (
    <div
      style={{
        opacity: started ? 1 : 0,
        transform: started ? 'translateY(0)' : 'translateY(18px)',
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
      }}
    >
      <div
        style={{
          fontSize: '1.6rem',
          fontWeight: 800,
          color: 'var(--text-main)',
          fontFamily: 'var(--font-title)',
          letterSpacing: '-0.02em'
        }}
      >
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
        {label}
      </div>
    </div>
  );
};

export const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(timer);
  }, []);

  const greeting = "Hi, I'm";
  const words = greeting.split(' ');

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: '9rem',
        paddingBottom: '5rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Main Hero Content */}
          <div>
            {/* Status Badge — animated in */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(139, 197, 164, 0.08)',
                border: '1px solid var(--border-color)',
                padding: '0.35rem 0.9rem',
                borderRadius: '20px',
                fontSize: '0.82rem',
                color: 'var(--accent-primary)',
                fontWeight: 500,
                marginBottom: '1.8rem',
                backdropFilter: 'blur(8px)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ADE80',
                  animation: 'pulseGlow 2s ease-in-out infinite'
                }}
              />
              <span>{profileData.status}</span>
            </div>

            {/* Name — word-by-word stagger reveal */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '0.8rem',
                color: 'var(--text-main)',
                letterSpacing: '-0.03em'
              }}
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    marginRight: '0.25em',
                    verticalAlign: 'top'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(100%)',
                      transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.08}s`
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
              <span
                style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  verticalAlign: 'top'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    color: 'var(--accent-primary)',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(100%)',
                    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + words.length * 0.08}s`
                  }}
                >
                  {profileData.name}
                </span>
              </span>
            </h1>

            {/* Title */}
            <h2
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                fontFamily: 'var(--font-title)',
                color: 'var(--accent-secondary)',
                fontWeight: 600,
                marginBottom: '1.2rem',
                letterSpacing: '-0.01em',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.55s'
              }}
            >
              {profileData.title}
            </h2>

            {/* Tagline */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '520px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.65s'
              }}
            >
              {profileData.tagline}
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '3rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.75s'
              }}
            >
              <a href="#projects" className="btn-ghibli">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-ghibli-outline">
                <Mail size={16} />
                <span>Get In Touch</span>
              </a>
              <a
                href={profileData.resumeUrl}
                download
                className="btn-ghibli-outline"
                style={{ padding: '0.75rem 1rem' }}
                title="Download Resume PDF"
              >
                <Download size={16} />
              </a>
            </div>

            {/* Animated Statistics */}
            <div
              className="hero-stats-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)',
                maxWidth: '480px'
              }}
            >
              {profileData.stats.map((st, idx) => (
                <StatItem
                  key={idx}
                  label={st.label}
                  value={st.value}
                  delay={0.85 + idx * 0.12}
                  started={visible}
                />
              ))}
            </div>
          </div>

          {/* Artwork Frame with enhanced float + hover */}
          <div
            style={{
              position: 'relative',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
            }}
          >
            <div
              className="ghibli-card animate-float"
              style={{
                padding: '0.8rem',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '24px',
                background: 'var(--bg-card)'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '18px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/assets/hero_art.png"
                  alt="Portfolio Art Illustration"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '18px',
                    display: 'block',
                    filter: 'saturate(0.7) brightness(0.85)',
                    transition: 'filter 0.5s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.filter = 'saturate(0.85) brightness(0.92)';
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.filter = 'saturate(0.7) brightness(0.85)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(15, 23, 32, 0.1) 0%, rgba(15, 23, 32, 0.5) 100%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          opacity: visible ? 0.35 : 0,
          transition: 'opacity 1s ease 1.8s'
        }}
      >
        <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <ChevronDown size={16} style={{ color: 'var(--text-muted)', animation: 'bounceDown 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
};
