import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Timeline = () => {
  return (
    <section id="experience" style={{ padding: 'var(--section-pad) 0' }}>
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Experience</span>
          <h2 className="section-heading">Career & Education</h2>
          <p className="section-description" style={{ marginBottom: '3rem' }}>
            Professional milestones, engineering leadership, and academic background.
          </p>
        </ScrollReveal>

        {/* Timeline container */}
        <div
          style={{
            maxWidth: '720px',
            position: 'relative',
            paddingLeft: '2.5rem'
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              top: '0.5rem',
              bottom: '0.5rem',
              left: '0.5rem',
              width: '1.5px',
              background: 'linear-gradient(180deg, var(--accent) 0%, var(--border) 100%)',
              borderRadius: '1px'
            }}
          />

          {profileData.timeline.map((item, idx) => (
            <ScrollReveal key={idx} delay={0.1 + idx * 0.1}>
              <div
                style={{
                  position: 'relative',
                  marginBottom: idx < profileData.timeline.length - 1 ? '2rem' : 0
                }}
              >
                {/* Node dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.85rem',
                    top: '0.35rem',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    zIndex: 2
                  }}
                >
                  {item.type === 'Work'
                    ? <Briefcase size={11} />
                    : <GraduationCap size={11} />
                  }
                </div>

                {/* Card */}
                <div className="card" style={{ padding: '1.5rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.6rem',
                      marginBottom: '0.6rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-heading)',
                        background: 'var(--accent-muted)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border)'
                      }}
                    >
                      {item.period}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {item.organization}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: item.highlights ? '1rem' : 0
                    }}
                  >
                    {item.description}
                  </p>

                  {item.highlights && (
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {item.highlights.map((hl, hIdx) => (
                        <li
                          key={hIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.84rem',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          <CheckCircle2 size={13} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
