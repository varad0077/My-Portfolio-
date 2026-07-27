import React from 'react';
import { BookOpen, Compass, Feather, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">The Artisan's Journey</h2>
          <p className="section-subtitle">
            Blending software craftsmanship with Studio Ghibli inspired tranquility & care.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Main Storybook Card */}
          <div className="ghibli-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  color: 'var(--accent-primary)',
                  marginBottom: '1.2rem'
                }}
              >
                <BookOpen size={24} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>About Me</h3>
              </div>

              <div
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line'
                }}
              >
                {profileData.bio}
              </div>
            </div>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                📍 Based in <strong style={{ color: 'var(--text-main)' }}>{profileData.location}</strong>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className="btn-ghibli-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>
                  ☕ Match Tea
                </span>
                <span className="btn-ghibli-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>
                  🌱 Open Source
                </span>
              </div>
            </div>
          </div>

          {/* Philosophy Cards Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-secondary)', fontFamily: 'var(--font-title)', fontWeight: 700 }}>
              Core Principles & Craft
            </h3>

            {profileData.philosophy.map((item, idx) => (
              <div
                key={idx}
                className="ghibli-card"
                style={{
                  padding: '1.4rem 1.6rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.2rem'
                }}
              >
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--accent-primary)',
                    padding: '0.7rem',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {idx === 0 ? <Feather size={20} /> : idx === 1 ? <Sparkles size={20} /> : <Compass size={20} />}
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
