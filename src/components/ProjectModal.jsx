import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(11, 22, 16, 0.82)',
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
        className="ghibli-card"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          borderRadius: '24px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 20px 50px var(--shadow-color)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: 'var(--text-main)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={20} />
        </button>

        {/* Project Header Banner */}
        <div style={{ marginBottom: '1.5rem', borderRadius: '16px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '260px', objectFit: 'cover' }}
          />
        </div>

        {/* Title & Subtitle */}
        <div style={{ marginBottom: '1.2rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', textTransform: 'uppercase', tracking: '0.05em', fontWeight: 700 }}>
            {project.category}
          </div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
            {project.title}
          </h3>
          <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: 600 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Tech Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.techTags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-color)',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                fontWeight: 600
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Extended Description */}
        <div style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {project.description}
        </div>

        {/* Key Features List */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '0.8rem' }}>
            Key Capabilities & Features
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.features.map((feat, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                <CheckCircle size={16} style={{ color: 'var(--accent-primary)', marginTop: '3px', flexShrink: 0 }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Specs */}
        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '1.2rem', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={16} /> Architecture & Technical Notes
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
              <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghibli-outline">
              <GithubIcon size={16} />
              <span>Source Repository</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
