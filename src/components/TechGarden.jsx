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
    <section id="skills" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">The Tech Garden</h2>
          <p className="section-subtitle">
            A curated ecosystem of modern tools, frameworks, and engineering competencies.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.8rem',
              marginBottom: '3rem'
            }}
          >
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'btn-ghibli' : 'btn-ghibli-outline'}
                style={{
                  padding: '0.5rem 1.2rem',
                  fontSize: '0.88rem'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filteredStack.map((group, gIdx) => (
            <div key={gIdx}>
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--accent-primary)',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-title)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <CheckCircle2 size={20} />
                <span>{group.category}</span>
              </h3>

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
                    <div
                      key={sIdx}
                      className="ghibli-card"
                      style={{
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justify: 'space-between'
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justify: 'space-between',
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
                                width: '40px',
                                height: '40px',
                                borderRadius: '12px',
                                background: 'rgba(255, 255, 255, 0.07)',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent-secondary)'
                              }}
                            >
                              <IconComp size={20} />
                            </div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                              {skill.name}
                            </h4>
                          </div>

                          <span
                            style={{
                              fontSize: '0.85rem',
                              fontWeight: 700,
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

                      {/* Progress Bar */}
                      <div
                        style={{
                          width: '100%',
                          height: '6px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          overflow: 'hidden'
                        }}
                      >
                        <div
                          style={{
                            width: `${skill.level}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                            borderRadius: '10px',
                            transition: 'width 1s ease-in-out'
                          }}
                        />
                      </div>
                    </div>
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
