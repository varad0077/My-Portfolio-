import React, { useState } from 'react';
import {
  Code2,
  FileCode2,
  Palette,
  Zap,
  Server,
  Terminal,
  Database,
  Layers,
  GitBranch,
  Box,
  Cloud,
  CheckCircle2
} from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

// Icon Map
const iconComponents = {
  Code2,
  FileCode2,
  Palette,
  Zap,
  Server,
  Terminal,
  Database,
  Layers,
  GitBranch,
  Box,
  Cloud
};

export const TechGarden = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...profileData.techStack.map((c) => c.category)];

  const filteredStack =
    selectedCategory === 'All'
      ? profileData.techStack
      : profileData.techStack.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" style={{ padding: '7rem 0' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Technical Stack & Ecosystem</h2>
            <p className="section-subtitle">
              A curated collection of modern engineering tools, frameworks, and core technical proficiencies.
            </p>

            {/* Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.6rem',
                marginBottom: '3.5rem'
              }}
            >
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? 'btn-ghibli' : 'btn-ghibli-outline'}
                  style={{
                    padding: '0.45rem 1.1rem',
                    fontSize: '0.85rem'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Skill Category Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filteredStack.map((group, gIdx) => (
            <div key={gIdx}>
              <ScrollReveal delay={0.05}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-title)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)' }} />
                  <span>{group.category}</span>
                </h3>
              </ScrollReveal>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1.5rem'
                }}
              >
                {group.skills.map((skill, sIdx) => {
                  const IconComp = iconComponents[skill.icon] || Code2;
                  return (
                    <ScrollReveal key={sIdx} delay={0.1 + sIdx * 0.08}>
                      <div
                        className="ghibli-card"
                        style={{
                          padding: '1.5rem',
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
                              marginBottom: '1rem'
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.7rem'
                              }}
                            >
                              <div
                                style={{
                                  width: '36px',
                                  height: '36px',
                                  borderRadius: '10px',
                                  background: 'rgba(139, 197, 164, 0.08)',
                                  border: '1px solid var(--border-color)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'var(--accent-primary)'
                                }}
                              >
                                <IconComp size={18} />
                              </div>
                              <h4 style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--text-main)' }}>
                                {skill.name}
                              </h4>
                            </div>

                            <span
                              style={{
                                fontSize: '0.82rem',
                                fontWeight: 600,
                                color: 'var(--accent-primary)',
                                fontFamily: 'var(--font-title)'
                              }}
                            >
                              {skill.level}%
                            </span>
                          </div>

                          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                            {skill.desc}
                          </p>
                        </div>

                        {/* Clean Progress Bar */}
                        <div
                          style={{
                            width: '100%',
                            height: '4px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            borderRadius: '4px',
                            overflow: 'hidden'
                          }}
                        >
                          <div
                            style={{
                              width: `${skill.level}%`,
                              height: '100%',
                              background: 'var(--accent-primary)',
                              borderRadius: '4px',
                              transition: 'width 0.8s ease'
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
