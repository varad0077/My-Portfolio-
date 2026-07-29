import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { ScrollReveal } from './ScrollReveal';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socialLinks = [
    { href: profileData.github, icon: GithubIcon, label: 'GitHub' },
    { href: profileData.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
    { href: profileData.twitter, icon: TwitterIcon, label: 'Twitter' }
  ];

  return (
    <section id="contact" style={{ padding: 'var(--section-pad) 0' }}>
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Contact</span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem'
            }}
          >
            Let's work together.
          </h2>
          <p className="section-description" style={{ marginBottom: '3rem' }}>
            Have a project, role, or collaboration in mind? I'd love to hear from you.
          </p>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}
        >
          {/* Left — info & social */}
          <ScrollReveal delay={0.1}>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Reach Out
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Whether it's a technical discussion, job opportunity, or just a chat about engineering — I'm always open.
              </p>

              {/* Email copy */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border)',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.8rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', minWidth: 0 }}>
                  <Mail size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {profileData.email}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="btn-ghost"
                  style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem', flexShrink: 0 }}
                >
                  {copied
                    ? <><Check size={12} style={{ color: 'var(--accent)' }} /><span>Copied</span></>
                    : <><Copy size={12} /><span>Copy</span></>
                  }
                </button>
              </div>

              {/* Socials */}
              <h4 style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>
                Connect
              </h4>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ padding: '0.5rem 0.85rem', fontSize: '0.82rem' }}
                    title={label}
                  >
                    <Icon size={15} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                Response time: usually within 24 hours.
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal delay={0.2}>
            <div className="card" style={{ padding: '2rem' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="name@company.com"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.25rem' }}>
                  <Send size={15} />
                  <span>Send Message</span>
                </button>

                {submitted && (
                  <div
                    style={{
                      background: 'var(--accent-muted)',
                      border: '1px solid var(--border-hover)',
                      color: 'var(--accent)',
                      padding: '0.7rem 1rem',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      animation: 'fadeInUp 0.3s var(--ease-out)'
                    }}
                  >
                    ✓ Message sent! I'll get back to you shortly.
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
