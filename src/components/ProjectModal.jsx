import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll & handle Escape key
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
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 10, 15, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      />

      {/* Modal card */}
      <div
        className="card"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '740px',
          maxHeight: '88vh',
          overflowY: 'auto',
          padding: '2rem',
          borderRadius: '18px',
          border: '1px solid var(--border-strong)',
          boxShadow: 'var(--shadow-lg)',
          animation: 'scaleIn 0.3s var(--ease-out)'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            zIndex: 5
          }}
        >
          <X size={16} />
        </button>

        {/* Image banner */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '240px',
              objectFit: 'cover',
              filter: 'brightness(0.9)'
            }}
          />
        </div>

        {/* Category + Title */}
        <span
          style={{
            fontSize: '0.72rem',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontWeight: 600
          }}
        >
          {project.category}
        </span>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginTop: '0.3rem',
            marginBottom: '0.3rem',
            lineHeight: 1.2
          }}
        >
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '1.2rem' }}>
          {project.subtitle}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
          {project.techTags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>

        {/* Description */}
        <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {project.description}
        </p>

        {/* Features */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.7rem' }}>
            Key Features
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {project.features.map((feat, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.55rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <CheckCircle2 size={14} style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture notes */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '1.2rem',
            marginBottom: '1.5rem'
          }}
        >
          <h4 style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.4rem', letterSpacing: '0.02em' }}>
            Architecture
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            {project.architectureDetails}
          </p>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span>Live Demo</span>
              <ArrowUpRight size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GithubIcon size={14} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
