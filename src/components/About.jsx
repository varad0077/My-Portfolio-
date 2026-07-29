import React from 'react';
import { BookOpen, Compass, Feather, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const About = () => {
  return (
    <section id="about" style={{ padding: '7rem 0' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Engineering & Philosophy</h2>
            <p className="section-subtitle">
              Blending technical precision with thoughtful craftsmanship and minimal design aesthetics.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Main Profile Story Card */}
          <ScrollReveal delay={0.1}>
            <div className="ghibli-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
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
                  <BookOpen size={22} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)' }}>About Me</h3>
                </div>
                <div
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '1.02rem',
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
                  <span className="btn-ghibli-outline" style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}>
                    🌱 Open Source
                  </span>
                  <span className="btn-ghibli-outline" style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}>
                    ⚡ System Design
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Philosophy Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <ScrollReveal delay={0.15}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-title)', fontWeight: 600 }}>
                Core Principles & Craft
              </h3>
            </ScrollReveal>

            {profileData.philosophy.map((item, idx) => (
              <ScrollReveal key={idx} delay={0.2 + idx * 0.1}>
                <div
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
                      background: 'rgba(139, 197, 164, 0.08)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--accent-primary)',
                      padding: '0.6rem',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {idx === 0 ? <Feather size={18} /> : idx === 1 ? <ShieldCheck size={18} /> : <Compass size={18} />}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
