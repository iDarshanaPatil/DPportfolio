import React, { useEffect, useState } from 'react'
import CursorSpotlight, { useCursorSpotlight } from './CursorSpotlight'
import { assetUrl } from '../utils/assetUrl'

const roles = [
  'Agentic AI Researcher',
  'Software Engineer',
  'MS CS Student @ UOP',
  '.NET & Azure Developer',
    'VP of Data Science Club @ UOP',
  'AI Agents & Autonomous agents Enthusiast',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const { active: spotlightActive, x, y, onMouseMove, onMouseLeave } = useCursorSpotlight()

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: 64, position: 'relative', overflow: 'hidden',
    }}
      onMouseMove={spotlightActive ? onMouseMove : undefined}
      onMouseLeave={spotlightActive ? onMouseLeave : undefined}
    >
      {spotlightActive && <CursorSpotlight x={x} y={y} />}
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(201,147,58,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,147,58,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 64, flexWrap: 'wrap',
        }}>
        <div style={{ maxWidth: 520, flex: '1 1 300px', minWidth: 0 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 50, marginBottom: 32,
            background: 'rgba(201,147,58,0.15)', border: '1px solid rgba(201,147,58,0.3)',
            animation: 'fadeUp 0.6s ease both',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80',
              boxShadow: '0 0 8px #4ade80', display: 'block',
              animation: 'pulse 2s ease infinite' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem',
              fontWeight: 600, color: 'var(--purple-1)', letterSpacing: '0.05em' }}>
              Open to Internships & Research Roles
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.05,
            marginBottom: 16, animation: 'fadeUp 0.6s ease 0.1s both',
          }}>
            Hi, I'm{' '}
            <span style={{
              background: 'var(--grad-text)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Darshana</span>
          </h1>

          {/* Typewriter */}
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--text-2)',
            marginBottom: 24, minHeight: '2.2em',
            animation: 'fadeUp 0.6s ease 0.2s both',
          }}>
            {displayed}
            <span style={{
              display: 'inline-block', width: 3, height: '1.1em',
              background: 'var(--purple-3)', marginLeft: 3,
              animation: 'blink 1s step-end infinite', verticalAlign: 'text-bottom',
            }} />
          </div>

          {/* Description */}
          <p style={{
            fontSize: '1.1rem', color: 'var(--text-3)', lineHeight: 1.8,
            maxWidth: 580, marginBottom: 40,
            animation: 'fadeUp 0.6s ease 0.3s both',
          }}>
            MS CS candidate at University of the Pacific with 3+ years building scalable 
            backends at Cognizant. Currently researching agentic AI & LangChain. 
            Passionate about building products where AI meets real human needs.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            animation: 'fadeUp 0.6s ease 0.4s both',
          }}>
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View My Work ↓
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Get In Touch
            </button>
          </div>

          {/* Social links */}
          <div style={{
            display: 'flex', gap: 20, marginTop: 48, alignItems: 'center',
            animation: 'fadeUp 0.6s ease 0.5s both',
          }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/idarshanapatil' },
              { label: 'GitHub', href: 'https://github.com/iDarshanaPatil' },
              { label: 'Email', href: 'mailto:patildarshu55@gmail.com' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600,
                color: 'var(--text-3)', textDecoration: 'none', letterSpacing: '0.05em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--purple-1)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-3)'}>
                {label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Photo column */}
        <div style={{
          flex: '0 0 auto', display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto',
          animation: 'fadeUp 0.6s ease 0.3s both',
        }}>
          <div style={{
            width: 320, height: 380, borderRadius: 24, overflow: 'hidden',
            border: '2px solid rgba(201,147,58,0.3)',
            boxShadow: '0 0 48px rgba(201,147,58,0.18)',
          }}>
            <img
              src={assetUrl('profile.jpg')}
              alt="Darshana Patil"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 1,
        animation: 'fadeUp 0.6s ease 0.8s both',
      }}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--text-3)', fontFamily: 'var(--font-display)' }}>SCROLL</span>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, var(--purple-2), transparent)',
          animation: 'pulse 2s ease infinite',
        }} />
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @media (max-width: 768px) {
          #hero .container > div { justify-content: center !important; }
          #hero .container > div > div:last-child { margin: 0 auto !important; }
          #hero .container > div > div:last-child > div { width: 260px !important; height: 310px !important; }
        }
      `}</style>
    </section>
  )
}
