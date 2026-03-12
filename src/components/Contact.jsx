import React, { useState } from 'react'
import FadeIn from './FadeIn'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with your EmailJS config or any form backend
    // For now, simulates a successful send
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--border)',
    borderRadius: 12, color: 'var(--text-1)',
    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
    outline: 'none', transition: 'all 0.2s ease',
    boxSizing: 'border-box',
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <FadeIn>
            <div>
              <p className="section-label">Get In Touch</p>
              <h2 className="section-title">Let's work together</h2>
              <p style={{ color: 'var(--text-3)', lineHeight: 1.8, fontSize: '1rem', marginBottom: 40 }}>
                I'm open to internship opportunities, research collaborations, and interesting conversations 
                about AI and software engineering. Drop me a message!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: '✉️', label: 'Email', value: 'patildarshu55@gmail.com', href: 'mailto:patildarshu55@gmail.com' },
                  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/idarshanapatil', href: 'https://www.linkedin.com/in/idarshanapatil' },
                  { icon:'👩🏻‍💻',    label: 'GitHub', value:'https://github.com/iDarshanaPatil',href: 'https://github.com/iDarshanaPatil' },
                  { icon: '📍', label: 'Location', value: 'Stockton, CA, USA', href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem',
                    }}>{icon}</div>
                    <div>
                      <div style={{ color: 'var(--text-3)', fontSize: '0.75rem', marginBottom: 2 }}>{label}</div>
                      {href ? (
                        <a href={href} style={{ color: 'var(--purple-1)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}
                          target="_blank" rel="noreferrer">{value}</a>
                      ) : (
                        <div style={{ color: 'var(--text-1)', fontSize: '0.9rem', fontWeight: 500 }}>{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15}>
            <div className="card" style={{ padding: 32 }}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-1)', marginBottom: 8 }}>
                    Message sent!
                  </h3>
                  <p style={{ color: 'var(--text-3)', fontSize: '0.9rem' }}>
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button className="btn btn-outline" style={{ marginTop: 24 }} onClick={() => setStatus(null)}>
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-2)', fontSize: '0.82rem',
                      fontWeight: 600, marginBottom: 8, fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                      YOUR NAME
                    </label>
                    <input name="name" value={form.name} onChange={handleChange} required
                      placeholder="Jennie Doe" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-2)', fontSize: '0.82rem',
                      fontWeight: 600, marginBottom: 8, fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                      EMAIL ADDRESS
                    </label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="jennie@example.com" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-2)', fontSize: '0.82rem',
                      fontWeight: 600, marginBottom: 8, fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                      MESSAGE
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} required
                      placeholder="Hi Darshana, I'd love to connect about..." rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: 4, opacity: status === 'sending' ? 0.7 : 1 }}
                    disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
