import React, { useState, useEffect } from 'react'

const links = ['about', 'skills', 'projects', 'experience', 'books', 'contact']

export default function Navbar({ scrollY }) {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const isScrolled = scrollY > 50

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 24px',
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(8,8,15,0.85)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(201,147,58,0.15)' : '1px solid transparent',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem',
            background: 'var(--grad-text)', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>DP.</span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}
          className="desktop-nav">
          {links.map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: '0.85rem', letterSpacing: '0.05em',
              textTransform: 'capitalize', padding: '6px 14px', borderRadius: '50px',
              color: active === id ? '#fff' : 'var(--text-2)',
              background: active === id ? 'rgba(201,147,58,0.25)' : 'transparent',
              transition: 'all 0.2s ease',
            }}>
              {id}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', color: 'var(--text-1)', fontSize: '1.5rem',
        }} className="hamburger">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(8,8,15,0.98)', borderTop: '1px solid var(--border)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {links.map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: '1rem', textTransform: 'capitalize',
              color: 'var(--text-1)', textAlign: 'left', padding: '10px 0',
            }}>{id}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
