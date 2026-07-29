import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { profileData } from '../data/portfolioData';

// Animated counter hook
const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
};

const StatItem = ({ label, value, delay, started }) => {
  const count = useCounter(value, 2200, started);
  
  return (
    <div
      style={{
        opacity: started ? 1 : 0,
        transform: started ? 'translateY(0)' : 'translateY(16px)',
        transition: `all 0.6s var(--ease-out) ${delay}s`
      }}
    >
      <div
        style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
          fontWeight: 700,
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          lineHeight: 1
        }}
      >
        {count}<span style={{ color: 'var(--accent)', fontSize: '0.75em' }}>+</span>
      </div>
      <div
        style={{
          fontSize: '0.78rem',
          color: 'var(--text-secondary)',
          marginTop: '0.35rem',
          fontWeight: 500
        }}
      >
        {label}
      </div>
    </div>
  );
};

export const Hero = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after a brief delay for polish
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const words = `Hi, I'm`.split(' ');

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        padding: '7rem 0 4rem'
      }}
    >
      <div className="container">
        {/* Status badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--accent-muted)',
            border: '1px solid var(--border)',
            padding: '0.3rem 0.85rem',
            borderRadius: '20px',
            fontSize: '0.78rem',
            color: 'var(--accent)',
            fontWeight: 600,
            fontFamily: 'var(--font-heading)',
            marginBottom: '2.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.6s var(--ease-out) 0.1s'
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#4ADE80',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
          {profileData.status}
        </div>

        {/* Main heading — massive type */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)'
            }}
          >
            {words.map((word, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  marginRight: '0.3em',
                  verticalAlign: 'top'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(100%)',
                    transition: `all 0.7s var(--ease-out) ${0.2 + i * 0.08}s`
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
            <span
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                verticalAlign: 'top'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  color: 'var(--accent)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(100%)',
                  transition: `all 0.7s var(--ease-out) ${0.2 + words.length * 0.08}s`
                }}
              >
                {profileData.name}
              </span>
            </span>
          </h1>
        </div>

        {/* Title line */}
        <h2
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.7s var(--ease-out) 0.55s'
          }}
        >
          {profileData.title}
        </h2>

        {/* Tagline */}
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '540px',
            marginBottom: '2.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.7s var(--ease-out) 0.65s'
          }}
        >
          {profileData.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '4rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.7s var(--ease-out) 0.75s'
          }}
        >
          <a href="#projects" className="btn-primary">
            <span>View Projects</span>
            <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-ghost">
            <span>Get In Touch</span>
          </a>
          <a
            href={profileData.resumeUrl}
            download
            className="btn-ghost"
            style={{ padding: '0.75rem 0.85rem' }}
            title="Download Resume"
          >
            <Download size={16} />
          </a>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            maxWidth: '520px',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)'
          }}
        >
          {profileData.stats.map((st, i) => (
            <StatItem
              key={i}
              label={st.label}
              value={st.value}
              delay={0.85 + i * 0.1}
              started={visible}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          opacity: visible ? 0.4 : 0,
          transition: 'opacity 1s ease 1.5s'
        }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <ChevronDown size={16} style={{ color: 'var(--text-tertiary)', animation: 'bounceDown 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
};
