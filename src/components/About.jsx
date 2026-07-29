import React from 'react';
import { MapPin, Briefcase, Sparkles } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

const philosophyIcons = [Sparkles, Briefcase, MapPin];

export const About = () => {
  return (
    <section id="about" style={{ padding: 'var(--section-pad) 0' }}>
      <div className="container">
        <ScrollReveal>
          <span className="section-label">About</span>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'start'
          }}
        >
          {/* Top — Pull quote + Bio */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'start'
            }}
          >
            {/* Left — pull quote */}
            <ScrollReveal delay={0.1}>
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)'
                }}
              >
                I build software that's{' '}
                <span style={{ color: 'var(--accent)' }}>technically sound</span>{' '}
                and{' '}
                <span style={{ color: 'var(--accent)' }}>beautifully crafted</span>.
              </h2>
            </ScrollReveal>

            {/* Right — bio text */}
            <ScrollReveal delay={0.2}>
              <div
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.98rem',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line'
                }}
              >
                {profileData.bio}
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <MapPin size={14} style={{ color: 'var(--accent)' }} />
                <span>{profileData.location}</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom — Philosophy cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {profileData.philosophy.map((item, idx) => {
              const Icon = philosophyIcons[idx] || Sparkles;
              return (
                <ScrollReveal key={idx} delay={0.15 + idx * 0.1}>
                  <div
                    className="card"
                    style={{
                      padding: '1.8rem',
                      height: '100%'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'var(--accent-muted)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent)',
                        marginBottom: '1.2rem'
                      }}
                    >
                      <Icon size={17} />
                    </div>
                    <h3
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
