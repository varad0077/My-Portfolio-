import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { ScrollReveal } from './ScrollReveal';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [modalProject, setModalProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Web Apps', 'AI & Data'];

  const filtered = activeFilter === 'All'
    ? profileData.projects
    : profileData.projects.filter(p => p.category === activeFilter);

  const featured = filtered.find(p => p.featured);
  const others = filtered.filter(p => p !== featured);

  return (
    <section id="projects" style={{ padding: 'var(--section-pad) 0' }}>
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Projects</span>
          <h2 className="section-heading">Selected Work</h2>
          <p className="section-description" style={{ marginBottom: '2.5rem' }}>
            Production-grade applications and tools I've designed and engineered.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.4rem 1rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: activeFilter === cat ? 600 : 500,
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? 'var(--accent)' : 'var(--border)',
                  background: activeFilter === cat ? 'var(--accent)' : 'transparent',
                  color: activeFilter === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.25s var(--ease-out)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured project — cinematic card */}
        {featured && (
          <ScrollReveal delay={0.15}>
            <div
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                overflow: 'hidden',
                marginBottom: '2rem',
                cursor: 'pointer'
              }}
              onClick={() => setModalProject(featured)}
            >
              {/* Image side */}
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: '280px' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s var(--ease-out)',
                    filter: 'brightness(0.85)'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(10, 10, 15, 0.8)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--accent)',
                    padding: '0.2rem 0.7rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    border: '1px solid var(--border)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}
                >
                  Featured
                </span>
              </div>

              {/* Content side */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>
                  {featured.category}
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.2 }}>
                  {featured.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                  {featured.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  {featured.techTags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); setModalProject(featured); }}
                    className="btn-primary"
                    style={{ padding: '0.6rem 1.2rem', fontSize: '0.82rem' }}
                  >
                    <Eye size={14} />
                    <span>Case Study</span>
                  </button>
                  {featured.githubUrl && (
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ padding: '0.6rem 0.8rem' }}
                      onClick={e => e.stopPropagation()}
                    >
                      <GithubIcon size={14} />
                    </a>
                  )}
                  {featured.liveUrl && featured.liveUrl !== '#' && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ padding: '0.6rem 0.8rem' }}
                      onClick={e => e.stopPropagation()}
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Other projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {others.map((proj, idx) => (
            <ScrollReveal key={proj.id} delay={0.1 + idx * 0.08}>
              <div
                className="card"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer'
                }}
                onClick={() => setModalProject(proj)}
              >
                {/* Image */}
                <div style={{ position: 'relative', overflow: 'hidden', height: '190px' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.85)',
                      transition: 'transform 0.5s var(--ease-out)'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.8rem',
                      left: '0.8rem',
                      background: 'rgba(10, 10, 15, 0.8)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--accent)',
                      padding: '0.18rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      border: '1px solid var(--border)'
                    }}
                  >
                    {proj.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.3rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.25 }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>
                    {proj.description.length > 120 ? `${proj.description.substring(0, 120)}...` : proj.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1rem' }}>
                    {proj.techTags.slice(0, 4).map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Footer actions */}
                <div
                  style={{
                    padding: '0.8rem 1.3rem',
                    borderTop: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    View Details →
                  </span>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ padding: '0.3rem 0.5rem', fontSize: '0.75rem' }}
                        onClick={e => e.stopPropagation()}
                      >
                        <GithubIcon size={13} />
                      </a>
                    )}
                    {proj.liveUrl && proj.liveUrl !== '#' && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ padding: '0.3rem 0.5rem', color: 'var(--accent)' }}
                        onClick={e => e.stopPropagation()}
                      >
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
};
