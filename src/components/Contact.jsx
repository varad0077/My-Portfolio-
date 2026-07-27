import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger sweet Ghibli celebration confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4ade80', '#38bdf8', '#facc15', '#c084fc']
    });

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">Send a Message Bird</h2>
          <p className="section-subtitle">
            Whether you have a exciting project idea, a job opportunity, or just want to talk tech & anime.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Quick Info & Social Card */}
          <div className="ghibli-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.6rem' }}>
                Let's Build Something Magical
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                My inbox is always open. Feel free to reach out via form or send a direct email anytime!
              </p>

              {/* Copy Email Tool */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  padding: '1rem 1.2rem',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Mail size={20} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
                    {profileData.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn-ghibli-outline"
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}
                >
                  {copied ? (
                    <>
                      <Check size={14} style={{ color: 'var(--accent-primary)' }} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--accent-secondary)', fontWeight: 700, marginBottom: '1rem' }}>
                  Social Channels
                </h4>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghibli-outline"
                    style={{ padding: '0.6rem 1rem' }}
                  >
                    <GithubIcon size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghibli-outline"
                    style={{ padding: '0.6rem 1rem' }}
                  >
                    <LinkedinIcon size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profileData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghibli-outline"
                    style={{ padding: '0.6rem 1rem' }}
                  >
                    <TwitterIcon size={18} />
                    <span>Twitter/X</span>
                  </a>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              ⚡ Usually responds within 24 hours
            </div>
          </div>

          {/* Contact Form */}
          <div className="ghibli-card" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Chihiro / Howl"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    background: 'rgba(0, 0, 0, 0.25)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    background: 'rgba(0, 0, 0, 0.25)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project idea or opportunity..."
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    background: 'rgba(0, 0, 0, 0.25)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn-ghibli" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                <Send size={18} />
                <span>Dispatch Message</span>
              </button>

              {submitted && (
                <div
                  style={{
                    background: 'rgba(74, 222, 128, 0.15)',
                    border: '1px solid var(--accent-primary)',
                    color: 'var(--accent-primary)',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  ✨ Message dispatched successfully! I will reply shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
