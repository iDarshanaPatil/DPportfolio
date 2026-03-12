import React, { useState } from 'react'
import FadeIn from './FadeIn'

const projects = [
  {
    title: 'Mood Mirror',
    subtitle: 'NLP Emotion Tracking Platform',
    period: 'Aug – Dec 2025',
    description: 'An NLP based emotion tracking platform for university students. Applied BERT/RoBERTa transformer models to detect and trend emotional states from daily text inputs, with mood visualizations to support student wellbeing.',
    tags: ['Python', 'BERT', 'RoBERTa', 'NLP', 'Transformers', 'Sentiment Analysis', 'Next.js', 'FastAPI'],
    color: '#a855f7',
    icon: '🧠',
    highlights: [
      'Transformer-based sentiment analysis with BERT/RoBERTa on GoEmotions dataset(54K samples)',
      '74.64% accuracy on 3-class emotion classification',
      'Daily text input pipeline with emotion classification',
      'Interactive mood analytics dashboard',
      'Designed for student emotional wellbeing support',
    ],
  },
  {
    title: 'Weather Database System',
    subtitle: 'End to End ETL Data Pipeline',
    period: 'Feb – May 2025',
    description: 'A complete end-to-end data pipeline collecting historical weather data for Stockton, CA. Stores raw data in MongoDB, transforms and loads into ClickHouse for analytics, caches results in Redis, and visualizes on a local dashboard.',
    tags: ['Node.js', 'MongoDB', 'ClickHouse', 'Redis', 'ETL', 'Data Engineering','Chart.js'],
    color: '#22d3ee',
    icon: '🌦️',
    highlights: [
        '4+ database systems in one pipeline',
      'Full ETL pipeline: MongoDB → ClickHouse → Redis',
        '365+ days of weather data processed',
      'Analytics optimized columnar storage with ClickHouse',
      'Redis caching layer for dashboard performance',
      'Complete ETL metadata tracking for auditability',
    ],
  },
  {
    title: 'ChatBot — Azure Cognitive Services',
    subtitle: 'Conversational AI System',
    period: '2022',
    description: 'Designed an intelligent conversational AI system using Azure Cognitive Services and .NET Core during the Cognizant Caliber Hackathon. The chatbot used NLU for intent and entity recognition to answer domain-specific queries.',
    tags: ['C#', '.NET Core', 'Azure Cognitive Services', 'NLU', 'Bot Framework'],
    color: '#fbbf24',
    icon: '💬',
    highlights: [
      'Built with Azure QnA Maker and Bot Service',
      'Natural language understanding for intent classification',
      'Confidence threshold tuning for response quality',
      'Recognized at Cognizant Caliber Hackathon 2022',
    ],
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="section">
      <div className="container">
        <FadeIn>
          <div style={{ marginBottom: 60 }}>
            <p className="section-label">What I've Built</p>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A mix of AI research, data engineering, and production software. Click any card for details.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: 24 }}>
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div
                className="card"
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              >
                {/* Top accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                }} />

                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: `${p.color}22`, border: `1px solid ${p.color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>{p.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h3 style={{
                          fontFamily: 'var(--font-display)', fontWeight: 700,
                          fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 2,
                        }}>{p.title}</h3>
                        <div style={{ color: p.color, fontSize: '0.8rem', fontWeight: 500 }}>{p.subtitle}</div>
                      </div>
                      <span style={{ color: 'var(--text-3)', fontSize: '0.75rem', flexShrink: 0, marginLeft: 8 }}>{p.period}</span>
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-3)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>
                  {p.description}
                </p>

                {/* Expandable highlights */}
                {expanded === i && (
                  <div style={{
                    borderTop: '1px solid var(--border)', paddingTop: 16, marginBottom: 16,
                    animation: 'fadeUp 0.3s ease',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.8rem',
                      color: 'var(--text-2)', marginBottom: 10, letterSpacing: '0.05em' }}>
                      KEY HIGHLIGHTS
                    </div>
                    {p.highlights.map(h => (
                      <div key={h} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: p.color, fontSize: '0.8rem', marginTop: 2, flexShrink: 0 }}>▸</span>
                        <span style={{ color: 'var(--text-2)', fontSize: '0.88rem', lineHeight: 1.5 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '3px 10px', borderRadius: 50,
                      fontSize: '0.72rem', fontWeight: 500,
                      background: `${p.color}18`, color: p.color,
                      border: `1px solid ${p.color}33`,
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Expand hint */}
                <div style={{
                  marginTop: 12, color: 'var(--text-3)', fontSize: '0.75rem',
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                  letterSpacing: '0.05em',
                }}>
                  {expanded === i ? '↑ Show less' : '↓ Show highlights'}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
