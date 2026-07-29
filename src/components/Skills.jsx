import React, { useState } from 'react';
import {
  Code2, FileCode2, Palette, Zap,
  Server, Terminal, Database, Layers,
  GitBranch, Box, Cloud
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

const iconComponents = {
  Code2, FileCode2, Palette, Zap,
  Server, Terminal, Database, Layers,
  GitBranch, Box, Cloud
};

export const Skills = () => {
  const categories = ['All', ...profileData.techStack.map(c => c.category)];
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? profileData.techStack
    : profileData.techStack.filter(c => c.category === active);

  return (
    <section id="skills" style={{ padding: 'var(--section-pad) 0' }}>
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Skills</span>
          <h2 className="section-heading">Technical Stack</h2>
          <p className="section-description" style={{ marginBottom: '2.5rem' }}>
            A curated set of tools, frameworks, and core engineering proficiencies I work with daily.
          </p>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal delay={0.1}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '3rem'
            }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '0.4rem 1rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: active === cat ? 600 : 500,
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: active === cat ? 'var(--accent)' : 'var(--border)',
                  background: active === cat ? 'var(--accent)' : 'transparent',
                  color: active === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.25s var(--ease-out)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filtered.map((group, gIdx) => (
            <div key={group.category}>
              <ScrollReveal delay={0.05}>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '1.25rem',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0
                    }}
                  />
                  {group.category}
                </h3>
              </ScrollReveal>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '1rem'
                }}
              >
                {group.skills.map((skill, sIdx) => {
                  const IconComp = iconComponents[skill.icon] || Code2;
                  return (
                    <ScrollReveal key={sIdx} delay={0.1 + sIdx * 0.07}>
                      <div
                        className="card"
                        style={{
                          padding: '1.4rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          height: '100%'
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginBottom: '0.8rem'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                              <div
                                style={{
                                  width: '34px',
                                  height: '34px',
                                  borderRadius: '9px',
                                  background: 'var(--accent-muted)',
                                  border: '1px solid var(--border)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'var(--accent)'
                                }}
                              >
                                <IconComp size={16} />
                              </div>
                              <h4
                                style={{
                                  fontSize: '0.95rem',
                                  fontWeight: 600,
                                  color: 'var(--text-primary)'
                                }}
                              >
                                {skill.name}
                              </h4>
                            </div>
                            <span
                              style={{
                                fontSize: '0.78rem',
                                fontWeight: 600,
                                color: 'var(--accent)',
                                fontFamily: 'var(--font-heading)'
                              }}
                            >
                              {skill.level}%
                            </span>
                          </div>

                          <p
                            style={{
                              fontSize: '0.82rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.55,
                              marginBottom: '1rem'
                            }}
                          >
                            {skill.desc}
                          </p>
                        </div>

                        {/* Progress bar */}
                        <div
                          style={{
                            width: '100%',
                            height: '3px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '3px',
                            overflow: 'hidden'
                          }}
                        >
                          <div
                            className="skill-bar-fill"
                            style={{
                              width: `${skill.level}%`,
                              height: '100%',
                              background: 'linear-gradient(90deg, var(--accent), var(--accent-hover))',
                              borderRadius: '3px',
                              animation: 'fillBar 1s var(--ease-out) forwards'
                            }}
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
