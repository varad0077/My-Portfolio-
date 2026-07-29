import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Timeline = () => {
  return (
    <section id="timeline" style={{ padding: '7rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">Experience & Journey</h2>
          <p className="section-subtitle">
            A chronicle of professional milestones, engineering leadership, and academic background.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '2rem'
          }}
        >
          {/* Vertical Connecting Guide Line */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              bottom: '1rem',
              left: '0.6rem',
              width: '2px',
              background: 'rgba(139, 197, 164, 0.2)'
            }}
          />

          {profileData.timeline.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                marginBottom: '2.5rem'
              }}
            >
              {/* Timeline Node Marker */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.4rem',
                  top: '0.2rem',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  border: '2px solid var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)'
                }}
              >
                {item.type === 'Work' ? <Briefcase size={15} /> : <GraduationCap size={15} />}
              </div>

              {/* Card */}
              <div className="ghibli-card" style={{ padding: '1.8rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                    marginBottom: '0.6rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-title)',
                      background: 'rgba(139, 197, 164, 0.08)',
                      padding: '0.2rem 0.7rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {item.period}
                  </span>

                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    {item.organization}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {item.description}
                </p>

                {/* Highlights List */}
                {item.highlights && (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {item.highlights.map((hl, hIdx) => (
                      <li
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.88rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        <CheckCircle2 size={15} style={{ color: 'var(--accent-primary)', marginTop: '2px', flexShrink: 0 }} />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

