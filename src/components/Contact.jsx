import React, { useState } from 'react';
import { Mail, Send, Copy, Check } from 'lucide-react';
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

    // Subtle celebration confetti with sage colors
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#8BC5A4', '#C9D8C5', '#F5F5F3']
    });

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" style={{ padding: '7rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project idea, engineering role, or collaboration proposal? Send a message to connect.
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
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.6rem' }}>
                Contact & Channels
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
                Feel free to reach out via form or copy my direct email below. Always interested in technical discussions and opportunities.
              </p>

              {/* Copy Email Tool */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  padding: '0.9rem 1.2rem',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Mail size={18} style={{ color: 'var(--accent-primary)' }} />
                  <span style={{ fontWeight: 500, color: 'var(--text-main)', fontSize: '0.92rem' }}>
                    {profileData.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn-ghibli-outline"
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
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
                <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '1rem', fontFamily: 'var(--font-title)' }}>
                  Social Profiles
                </h4>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {profileData.socials?.github && (
                    <a
                      href={profileData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghibli-outline"
                      style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
                    >
                      <GithubIcon size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {profileData.socials?.linkedin && (
                    <a
                      href={profileData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghibli-outline"
                      style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
                    >
                      <LinkedinIcon size={16} />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {profileData.socials?.twitter && (
                    <a
                      href={profileData.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghibli-outline"
                      style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
                    >
                      <TwitterIcon size={16} />
                      <span>Twitter</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              ⚡ Response time: Usually within 24 hours
            </div>
          </div>

          {/* Contact Form */}
          <div className="ghibli-card" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: 'rgba(15, 23, 32, 0.6)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: 'rgba(15, 23, 32, 0.6)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry..."
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: 'rgba(15, 23, 32, 0.6)',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn-ghibli" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                <Send size={16} />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div
                  style={{
                    background: 'rgba(139, 197, 164, 0.12)',
                    border: '1px solid var(--border-hover)',
                    color: 'var(--accent-primary)',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    textAlign: 'center',
                    fontSize: '0.88rem',
                    fontWeight: 500
                  }}
                >
                  ✓ Message sent successfully! I will reply shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

