import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Code, Heart, Coffee } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: '8rem',
        paddingBottom: '4rem',
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
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Text Content */}
          <div>
            {/* Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(74, 222, 128, 0.12)',
                border: '1px solid var(--border-color)',
                padding: '0.4rem 1rem',
                borderRadius: '30px',
                fontSize: '0.88rem',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                marginBottom: '1.5rem',
                backdropFilter: 'blur(8px)'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  boxShadow: '0 0 10px var(--accent-primary)'
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
                lineHeight: 1.15,
                marginBottom: '1rem',
                color: 'var(--text-main)'
              }}
            >
              Hi, I'm <span style={{ color: 'var(--accent-primary)' }}>{profileData.name}</span>
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontFamily: 'var(--font-title)',
                color: 'var(--accent-secondary)',
                fontWeight: 600,
                marginBottom: '1.2rem'
              }}
            >
              {profileData.title}
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '540px'
              }}
            >
              {profileData.tagline}
            </p>

            {/* Action CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '3rem'
              }}
            >
              <a href="#projects" className="btn-ghibli">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn-ghibli-outline">
                <Mail size={18} />
                <span>Get In Touch</span>
              </a>

              <a
                href={profileData.resumeUrl}
                download
                className="btn-ghibli-outline"
                style={{ padding: '0.8rem 1.2rem' }}
                title="Download Resume PDF"
              >
                <Download size={18} />
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '1rem',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '1.2rem',
                borderRadius: '20px',
                border: '1px solid var(--glass-border)'
              }}
            >
              {profileData.stats.map((st, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-title)'
                    }}
                  >
                    {st.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ghibli Visual Frame */}
          <div style={{ position: 'relative' }}>
            <div
              className="ghibli-card animate-float"
              style={{
                padding: '1rem',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '28px'
              }}
            >
              <img
                src="/assets/hero_art.png"
                alt="Studio Ghibli Scenery Artwork"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  display: 'block',
                  boxShadow: '0 10px 30px var(--shadow-color)'
                }}
              />
              
              {/* Floating Story Overlay Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.8rem',
                  left: '1.8rem',
                  right: '1.8rem',
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(12px)',
                  padding: '1rem 1.2rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}
              >
                <div
                  style={{
                    background: 'var(--accent-primary)',
                    color: '#0f172a',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                    Ghibli-Inspired Craft
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {profileData.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
