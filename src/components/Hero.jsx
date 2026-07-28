import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '92vh',
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
            {/* Minimal Status Badge */}
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
                backdropFilter: 'blur(8px)'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)'
                }}
                className="animate-pulse-glow"
              />
              <span>{profileData.status}</span>
            </div>

            {/* Name & Title */}
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
              Hi, I'm <span style={{ color: 'var(--accent-primary)' }}>{profileData.name}</span>
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                fontFamily: 'var(--font-title)',
                color: 'var(--accent-secondary)',
                fontWeight: 600,
                marginBottom: '1.2rem',
                letterSpacing: '-0.01em'
              }}
            >
              {profileData.title}
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '520px'
              }}
            >
              {profileData.tagline}
            </p>

            {/* 2 CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '3rem'
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

            {/* Statistics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)',
                maxWidth: '480px'
              }}
            >
              {profileData.stats.map((st, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      fontFamily: 'var(--font-title)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {st.value}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Blended Artwork Frame */}
          <div style={{ position: 'relative' }}>
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
                    transition: 'filter 0.3s ease'
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
    </section>
  );
};

