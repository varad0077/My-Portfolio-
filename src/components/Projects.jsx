import React, { useState } from 'react';
import { ExternalLink, Eye, Sparkles, Folder } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Web Apps', 'AI & Data'];

  const filteredProjects =
    selectedCategory === 'All'
      ? profileData.projects
      : profileData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">Workshop Artifacts & Projects</h2>
          <p className="section-subtitle">
            A showcase of web applications, AI tools, and full-stack solutions crafted with care.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.8rem',
              marginBottom: '3.5rem'
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

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="ghibli-card"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                borderRadius: '24px'
              }}
            >
              <div>
                {/* Image Banner */}
                <div style={{ position: 'relative', overflow: 'hidden', height: '210px' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  
                  {/* Category Pill Tag */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--accent-primary)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {proj.category}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '0.8rem' }}>
                    {proj.subtitle}
                  </p>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                    {proj.description.length > 120 ? `${proj.description.substring(0, 120)}...` : proj.description}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {proj.techTags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--glass-border)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
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
                  padding: '1rem 1.5rem 1.5rem 1.5rem',
                  borderTop: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between'
                }}
              >
                <button
                  onClick={() => setActiveModalProject(proj)}
                  className="btn-ghibli-outline"
                  style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}
                >
                  <Eye size={14} />
                  <span>Inspect Details</span>
                </button>

                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghibli-outline"
                      style={{ padding: '0.4rem 0.6rem' }}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                  {proj.liveUrl && proj.liveUrl !== '#' && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghibli-outline"
                      style={{ padding: '0.4rem 0.6rem', color: 'var(--accent-primary)' }}
                      title="Live Preview"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
    </section>
  );
};
