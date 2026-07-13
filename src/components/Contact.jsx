import React from 'react'
import FadeIn from './FadeIn'

const contacts = [
  { icon: '✉️', label: 'Email', value: 'patildarshu55@gmail.com', href: 'mailto:patildarshu55@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/idarshanapatil', href: 'https://www.linkedin.com/in/idarshanapatil' },
  { icon: '👩🏻‍💻', label: 'GitHub', value: 'github.com/iDarshanaPatil', href: 'https://github.com/iDarshanaPatil' },
  { icon: '📍', label: 'Location', value: 'San Francisco, CA, USA', href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ maxWidth: 560 }}>
        <FadeIn>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's work together</h2>
          <p style={{ color: 'var(--text-3)', lineHeight: 1.8, fontSize: '1rem', marginBottom: 40 }}>
            I'm open to internship opportunities, research collaborations, and interesting conversations
            about AI and software engineering. Reach out via email or LinkedIn.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {contacts.map(({ icon, label, value, href }) => (
              <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(201,147,58,0.15)', border: '1px solid rgba(201,147,58,0.25)',
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
        </FadeIn>
      </div>
    </section>
  )
}
