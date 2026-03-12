import React from 'react'
import FadeIn from './FadeIn'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '3.8', label: 'GPA' },
  { value: '4', label: 'Awards Won' },
  { value: '2', label: 'Research Projects' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* Left */}
          <FadeIn>
            <div>
              <p className="section-label">About Me</p>
              <h2 className="section-title">Building AI systems that matter</h2>
              <p style={{ color: 'var(--text-3)', lineHeight: 1.8, marginBottom: 20, fontSize: '1rem' }}>
                I'm a software engineer and AI researcher based in Stockton, CA. With 3+ years at Cognizant building 
                production-grade banking and pharmaceutical applications, I transitioned into AI research at the 
                University of the Pacific, where I work on agentic AI systems using LangChain.
              </p>
              <p style={{ color: 'var(--text-3)', lineHeight: 1.8, marginBottom: 32, fontSize: '1rem' }}>
                I love the intersection of robust engineering and intelligent systems — building things that are 
                not just technically sound, but genuinely useful to people. Outside of code, I'm the VP of the 
                Data Science Club at UOP and a proud K-Drama enthusiast 🎬
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {['Python', 'C#', 'LangChain', 'Azure', '.NET', 'SQL'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right - Stats */}
          <FadeIn delay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {stats.map(({ value, label }) => (
                <div key={label} className="card" style={{ textAlign: 'center', padding: '32px 20px' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: '2.8rem', lineHeight: 1,
                    background: 'var(--grad-text)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    marginBottom: 8,
                  }}>{value}</div>
                  <div style={{ color: 'var(--text-3)', fontSize: '0.85rem', fontWeight: 500 }}>{label}</div>
                </div>
              ))}

              {/* Education card */}
              <div className="card" style={{ gridColumn: '1 / -1', padding: '24px' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(124,58,237,0.2)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                  }}>🎓</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', marginBottom: 4 }}>
                      MS in Computer Science
                    </div>
                    <div style={{ color: 'var(--purple-1)', fontSize: '0.85rem', marginBottom: 2 }}>University of the Pacific</div>
                    <div style={{ color: 'var(--text-3)', fontSize: '0.8rem' }}>Stockton, CA • GPA 3.8 • In Progress</div>
                    <div style={{ color: 'var(--text-3)', fontSize: '0.78rem', marginTop: 6, fontStyle: 'italic' }}>
                      AI • Machine Learning • Natural Language Processing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
