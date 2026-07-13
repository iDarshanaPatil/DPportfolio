import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import { useReducedMotion } from '../hooks/useReducedMotion'

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="image-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${image.title} screenshot`}
        >
          <motion.div
            className="image-lightbox-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="image-lightbox-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
            <p className="image-lightbox-title">{image.title}</p>
            <img src={image.src} alt={image.alt} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ProjectImage({ src, alt, color, icon, onOpen }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        className="project-card-image project-card-image--placeholder"
        style={{ borderColor: `${color}33`, background: `${color}12` }}
      >
        <span>{icon}</span>
      </div>
    )
  }

  return (
    <button
      type="button"
      className="project-card-image project-card-image--clickable"
      onClick={(e) => {
        e.stopPropagation()
        onOpen?.()
      }}
      aria-label={`View full screenshot: ${alt}`}
    >
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      <span className="project-card-image-hint">Click to expand</span>
    </button>
  )
}

const stackVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const projects = [
  {
    title: 'CVE Prioritization Agent',
    subtitle: 'Hallucination-Resistant Software Update System',
    period: 'Jan 2026 – Present',
    description: 'A multi-agent system that answers natural-language software security queries using NIST NVD, ReleaseTrain, Reddit, and Google News with evidence-grounded responses. Built to replace slow manual CVE/patch triage and reduce hallucinated CVEs and version numbers from LLM tools.',
    tags: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'Groq', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'NIST NVD API'],
    color: '#B8956A',
    icon: '🛡️',
    image: '/projects/cve-agent.png',
    github: 'https://github.com/iDarshanaPatil/Software-Update-Prioritizer',
    highlights: [
      'Stateful multi-agent retrieval with structural evidence grounding across NIST NVD, ReleaseTrain, Reddit, and Google News',
      'Addresses LLM hallucination of CVE IDs and software versions in security triage workflows',
      '100% pilot evaluation pass rate with ~25s average response time',
      'Explicit abstention when retrieved evidence is insufficient to ground an answer',
      'Full-stack delivery with FastAPI backend and React + TypeScript frontend',
    ],
  },
  {
    title: 'CineVibes',
    subtitle: 'Movie Discussion Platform',
    period: 'Spring 2026',
    description: 'CineVibes is a full-stack web application for movie enthusiasts to browse, discuss, and share opinions on movies. It features movie browsing via OMDB API, structured discussions, a comment system with likes, and search. It includes authentication and is deployed on Render.',
    tags: ['React', 'Vite', 'React Router', 'Axios', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT Authentication'],
    color: '#A67C2E',
    icon: '🎬',
    image: '/projects/CineVibes.png',
    github: 'https://github.com/comp227/final-cinevibes',
    highlights: [
      'Movie browsing with OMDB API integration (posters, titles, year, rating).',
      'Pagination on home page (10 movies per page)',
      'Realtime search by title using MongoDB $regex.',
      'JWT-based authentication with signup/login',
      'Discussion categories (General Chat, Technical Analysis) with comments Like feature for comments',
    ],
  },
  {
    title: 'Mood Mirror',
    subtitle: 'NLP Emotion Tracking Platform',
    period: 'Aug – Dec 2025',
    groupProject: true,
    description: 'Group project at University of the Pacific. An NLP-based emotion tracking platform for university students that applies BERT/RoBERTa transformer models to detect and trend emotional states from daily text inputs, with mood visualizations to support student wellbeing.',
    tags: ['Python', 'BERT', 'RoBERTa', 'NLP', 'Transformers', 'Sentiment Analysis', 'Next.js', 'FastAPI'],
    color: '#D4A853',
    icon: '🧠',
    github: 'https://github.com/manumathewjiss/MoodMirror',
    contribution: [
      'Fine-tuned BERT/RoBERTa on the GoEmotions dataset (54K samples) for 3-class emotion classification',
      'Built the text preprocessing and daily input pipeline for emotion inference',
      'Evaluated model performance and reported 74.64% classification accuracy',
      'Collaborated on FastAPI endpoints and dashboard integration for mood analytics',
    ],
    highlights: [
      'Transformer-based sentiment analysis with BERT/RoBERTa on GoEmotions dataset (54K samples)',
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
    color: '#C9933A',
    icon: '🌦️',
    github: 'https://github.com/iDarshanaPatil/Weather-Database-System',
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
    color: '#E8C97E',
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
  const [lightbox, setLightbox] = useState(null)
  const reducedMotion = useReducedMotion()

  return (
    <section id="projects" className="section">
      <div className="container">
        <FadeIn>
          <div style={{ marginBottom: 60 }}>
            <p className="section-label">What I've Built</p>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A mix of AI research, data engineering, and production software. Scroll horizontally to browse — click a card for details.
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="projects-stack"
          variants={reducedMotion ? undefined : stackVariants}
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'show'}
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((p, i) => (
            <motion.div key={p.title} className="project-card-wrapper" variants={reducedMotion ? undefined : cardVariants}>
              <div
                className="card project-card"
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              >
                {/* Top accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                }} />

                <ProjectImage
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  color={p.color}
                  icon={p.icon}
                  onOpen={p.image ? () => setLightbox({
                    src: p.image,
                    alt: `${p.title} screenshot`,
                    title: p.title,
                  }) : undefined}
                />

                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h3 style={{
                          fontFamily: 'var(--font-display)', fontWeight: 700,
                          fontSize: '1.05rem', color: 'var(--text-1)', marginBottom: 2,
                        }}>{p.title}</h3>
                        <div style={{ color: p.color, fontSize: '0.8rem', fontWeight: 500 }}>{p.subtitle}</div>
                        {p.groupProject && (
                          <span
                            className="project-group-badge"
                            style={{
                              color: p.color,
                              background: `${p.color}18`,
                              borderColor: `${p.color}33`,
                            }}
                          >
                            Group Project · UOP
                          </span>
                        )}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                        <span style={{ color: 'var(--text-3)', fontSize: '0.75rem' }}>{p.period}</span>
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: 'var(--text-3)',
                              fontSize: '1rem',
                              transition: 'color 0.2s',
                            }}
                            onClick={(e) => e.stopPropagation()}
                            onMouseEnter={(e) => e.currentTarget.style.color = p.color}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-3)'}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <p
                  className="project-card-description"
                  style={{
                    color: 'var(--text-3)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16,
                    display: expanded === i ? 'block' : '-webkit-box',
                    WebkitLineClamp: expanded === i ? 'unset' : 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: expanded === i ? 'visible' : 'hidden',
                  }}
                >
                  {p.description}
                </p>

                {/* Expandable highlights */}
                {expanded === i && (
                  <div style={{
                    borderTop: '1px solid var(--border)', paddingTop: 16, marginBottom: 16,
                    animation: 'fadeUp 0.3s ease',
                  }}>
                    {p.contribution && (
                      <>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.8rem',
                          color: 'var(--text-2)', marginBottom: 10, letterSpacing: '0.05em' }}>
                          MY CONTRIBUTION
                        </div>
                        {p.contribution.map(c => (
                          <div key={c} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                            <span style={{ color: p.color, fontSize: '0.8rem', marginTop: 2, flexShrink: 0 }}>▸</span>
                            <span style={{ color: 'var(--text-1)', fontSize: '0.88rem', lineHeight: 1.5 }}>{c}</span>
                          </div>
                        ))}
                        <div style={{
                          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.8rem',
                          color: 'var(--text-2)', margin: '16px 0 10px', letterSpacing: '0.05em',
                        }}>
                          PROJECT HIGHLIGHTS
                        </div>
                      </>
                    )}
                    {!p.contribution && (
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.8rem',
                        color: 'var(--text-2)', marginBottom: 10, letterSpacing: '0.05em' }}>
                        KEY HIGHLIGHTS
                      </div>
                    )}
                    {p.highlights.map(h => (
                      <div key={h} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: p.color, fontSize: '0.8rem', marginTop: 2, flexShrink: 0 }}>▸</span>
                        <span style={{ color: 'var(--text-2)', fontSize: '0.88rem', lineHeight: 1.5 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="project-card-footer">
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ImageLightbox image={lightbox} onClose={() => setLightbox(null)} />

      <style>{`
        .project-group-badge {
          display: inline-flex;
          margin-top: 8px;
          padding: 3px 10px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid;
        }

        .project-card-image {
          width: calc(100% + 56px);
          margin: -28px -28px 16px;
          height: 160px;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
          padding: 0;
          border-left: none;
          border-right: none;
          border-top: none;
          background: none;
          display: block;
          position: relative;
        }

        .project-card-image--clickable {
          cursor: zoom-in;
        }

        .project-card-image--clickable:hover img {
          transform: scale(1.03);
        }

        .project-card-image--clickable:hover .project-card-image-hint {
          opacity: 1;
        }

        .project-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.3s ease;
        }

        .project-card-image-hint {
          position: absolute;
          bottom: 8px;
          right: 8px;
          padding: 4px 10px;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--text-1);
          background: rgba(8, 8, 15, 0.75);
          border: 1px solid var(--border);
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }

        .image-lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(8, 8, 15, 0.92);
          backdrop-filter: blur(12px);
          cursor: zoom-out;
        }

        .image-lightbox-content {
          position: relative;
          max-width: min(1100px, 95vw);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: default;
        }

        .image-lightbox-content img {
          max-width: 100%;
          max-height: calc(90vh - 48px);
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-card);
        }

        .image-lightbox-title {
          color: var(--text-2);
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 12px;
          letter-spacing: 0.05em;
        }

        .image-lightbox-close {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--bg-2);
          color: var(--text-1);
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 1;
        }

        .image-lightbox-close:hover {
          background: rgba(201, 147, 58, 0.2);
          border-color: var(--border-hover);
        }

        .project-card-image--placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
        }

        .projects-stack {
          display: flex;
          flex-direction: row;
          gap: 24px;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 4px 4px 20px;
          scroll-snap-type: x mandatory;
          scroll-padding-left: 4px;
          -webkit-overflow-scrolling: touch;
        }

        .projects-stack::-webkit-scrollbar {
          height: 6px;
        }

        .projects-stack::-webkit-scrollbar-track {
          background: var(--bg-1);
          border-radius: 3px;
        }

        .projects-stack::-webkit-scrollbar-thumb {
          background: var(--purple-2);
          border-radius: 3px;
        }

        .project-card-wrapper {
          flex: 0 0 360px;
          scroll-snap-align: start;
          display: flex;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 420px;
        }

        .project-card-footer {
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .project-card-wrapper {
            flex: 0 0 300px;
          }

          .project-card {
            min-height: 400px;
          }
        }
      `}</style>
    </section>
  )
}
