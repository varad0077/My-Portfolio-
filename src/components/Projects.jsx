import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { ScrollReveal } from './ScrollReveal';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Web Apps', 'AI & Data'];

  const filteredProjects =
    selectedCategory === 'All'
      ? profileData.projects
      : profileData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" style={{ padding: '7rem 0' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Selected Projects & Works</h2>
            <p className="section-subtitle">
              A showcase of web applications, AI tools, and full-stack software solutions engineered for production.
            </p>

            {/* Filter Pills */}
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

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((proj, idx) => (
            <ScrollReveal key={proj.id} delay={0.1 + idx * 0.1}>
              <div
                className="ghibli-card"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '20px',
                  height: '100%'
                }}
              >
                <div>
                  {/* Image Banner with Hover Zoom */}
                  <div className="project-image-wrap">
                    <img
                      src={proj.image}
                      alt={proj.title}
                    />
                    
                    {/* Category Tag */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.9rem',
                        left: '0.9rem',
                        background: 'rgba(15, 23, 32, 0.82)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--accent-primary)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {proj.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '1.4rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                      {proj.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.8rem' }}>
                      {proj.subtitle}
                    </p>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                      {proj.description.length > 115 ? `${proj.description.substring(0, 115)}...` : proj.description}
                    </p>

                    {/* Tech Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                      {proj.techTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-color)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '8px',
                            fontSize: '0.72rem',
                            color: 'var(--text-muted)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div
                  style={{
                    padding: '1rem 1.4rem 1.4rem 1.4rem',
                    borderTop: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <button
                    onClick={() => setActiveModalProject(proj)}
                    className="btn-ghibli-outline"
                    style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                  >
                    <Eye size={14} />
                    <span>Inspect</span>
                  </button>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghibli-outline"
                        style={{ padding: '0.35rem 0.55rem' }}
                        title="GitHub Repository"
                      >
                        <GithubIcon size={14} />
                      </a>
                    )}
                    {proj.liveUrl && proj.liveUrl !== '#' && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghibli-outline"
                        style={{ padding: '0.35rem 0.55rem', color: 'var(--accent-primary)' }}
                        title="Live Preview"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
    </section>
  );
};
