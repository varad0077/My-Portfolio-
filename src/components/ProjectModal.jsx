import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll and Escape key close
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(15, 23, 32, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        className="ghibli-card modal-content"
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '88vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            width: '34px',
            height: '34px',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            zIndex: 5
          }}
        >
          <X size={18} />
        </button>

        {/* Project Header Banner */}
        <div style={{ marginBottom: '1.5rem', borderRadius: '14px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '240px', objectFit: 'cover', filter: 'saturate(0.85) brightness(0.9)' }}
          />
        </div>

        {/* Title & Subtitle */}
        <div style={{ marginBottom: '1.2rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
            {project.category}
          </div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.2rem' }}>
            {project.title}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Tech Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.techTags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)',
                padding: '0.25rem 0.65rem',
                borderRadius: '8px',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                fontWeight: 500
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Extended Description */}
        <div style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {project.description}
        </div>

        {/* Key Features List */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.8rem' }}>
            Key Capabilities & Features
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.features.map((feat, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <CheckCircle size={15} style={{ color: 'var(--accent-primary)', marginTop: '3px', flexShrink: 0 }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Specs */}
        <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '0.4rem' }}>
            Architecture & Technical Notes
          </h4>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            {project.architectureDetails}
          </p>
        </div>

        {/* Links CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghibli">
              <span>View Live Demo</span>
              <ExternalLink size={15} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghibli-outline">
              <GithubIcon size={15} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
