import React, { useState } from 'react'
import FadeIn from './FadeIn'

const experiences = [
  {
    role: 'Research Assistant — Agentic AI',
    company: 'University of the Pacific',
    period: 'Jan 2026 – Present',
    type: 'Research',
    color: '#a855f7',
    icon: '🔬',
    bullets: [
      'Researching and developing agentic AI systems using LangChain for multi-step reasoning and autonomous tool use.',
      'Designing and evaluating LLM-powered pipelines for scalable, reliable AI workflows.',
      'Collaborating with faculty on NLP and agent-based architectures.',
    ],
  },
  {
    role: 'VP, Data Science Club',
    company: 'University of the Pacific',
    period: '2025 – Present',
    type: 'Leadership',
    color: '#22d3ee',
    icon: '📊',
    bullets: [
      'Leading the Data Science Club, organizing workshops, speaker sessions, and hackathons.',
      'Mentoring students in ML, data engineering, and AI tools.',
      'Building community around data science education at UOP.',
    ],
  },
  {
    role: 'Software Engineer (.NET Developer)',
    company: 'Cognizant Technology Solutions',
    period: 'Feb 2021 – Nov 2024',
    type: 'Full-Time',
    color: '#e879f9',
    icon: '💼',
    bullets: [
      'Novartis (2024): Built and maintained a .NET MVC web application for pharmaceutical inspection and testing.',
      'Ally Lending (2021–2024): Designed and developed features for a US banking loan management platform using ASP.NET.',
      'Built an Azure Service Bus alert mechanism for real-time loan lifecycle event notifications.',
      'Extended lending application to process manually-signed loan agreements, expanding borrower accessibility.',
      'Implemented unit and integration tests (xUnit), conducted peer code reviews, and delivered KT sessions.',
    ],
  },
]

const awards = [
  { text: 'Cognizant Cheers Bronze — Valuable Collaborator', icon: '🥉' },
  { text: 'Cognizant Cheers Bronze — Consistent Quality', icon: '🥉' },
  { text: 'Cognizant Cheers Coral — Excellence in Performance', icon: '🪸' },
  { text: '2nd Place — H2O Hackathon: Hack the Tap', icon: '🏆' },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]

  return (
    <section id="experience" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <FadeIn>
          <div style={{ marginBottom: 60 }}>
            <p className="section-label">Where I've Worked</p>
            <h2 className="section-title">Experience</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 24, marginBottom: 48 }}>
            {/* Sidebar tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {experiences.map((e, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  background: active === i ? 'rgba(124,58,237,0.2)' : 'transparent',
                  border: `1px solid ${active === i ? 'rgba(124,58,237,0.5)' : 'transparent'}`,
                  borderLeft: `3px solid ${active === i ? e.color : 'transparent'}`,
                  borderRadius: 8, padding: '14px 16px',
                  cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s ease',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '0.85rem', color: active === i ? 'var(--text-1)' : 'var(--text-3)',
                    marginBottom: 2,
                  }}>{e.company}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{e.period}</div>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="card" key={active} style={{ animation: 'fadeUp 0.3s ease' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${exp.color}22`, border: `1px solid ${exp.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', flexShrink: 0,
                }}>{exp.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 2 }}>{exp.role}</h3>
                  <div style={{ color: exp.color, fontSize: '0.85rem', fontWeight: 500 }}>{exp.company}</div>
                </div>
                <span style={{
                  marginLeft: 'auto', padding: '4px 12px', borderRadius: 50,
                  fontSize: '0.72rem', fontWeight: 600,
                  background: `${exp.color}18`, color: exp.color,
                  border: `1px solid ${exp.color}33`, flexShrink: 0,
                }}>{exp.type}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {exp.bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: exp.color, marginTop: 4, flexShrink: 0 }}>▸</span>
                    <span style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.7 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Awards */}
        <FadeIn delay={0.2}>
          <div>
            <p className="section-label" style={{ marginBottom: 20 }}>Awards & Recognition</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
              {awards.map(({ text, icon }) => (
                <div key={text} className="card" style={{ padding: '16px 20px', display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{icon}</span>
                  <span style={{ color: 'var(--text-2)', fontSize: '0.82rem', lineHeight: 1.4 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .container > div:nth-child(2) > div:first-child { grid-template-columns: 1fr !important; }
          #experience .container > div:nth-child(2) > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
