import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 24px',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem',
          background: 'var(--grad-text)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Darshana Patil
        </div>
        <div style={{ color: 'var(--text-3)', fontSize: '0.82rem' }}>
          © {new Date().getFullYear()} Darshana Patil. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/idarshanapatil' },
            { label: 'Email', href: 'mailto:patildarshu55@gmail.com' },
            { label: 'GitHub', href: 'https://github.com/iDarshanaPatil' },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{ color: 'var(--text-3)', fontSize: '0.82rem', textDecoration: 'none',
                fontFamily: 'var(--font-display)', fontWeight: 600,
                transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--purple-1)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-3)'}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
