import React from 'react'
import FadeIn from './FadeIn'

const skillGroups = [
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    color: '#D4A853',
    skills: ['LangChain', 'Agentic AI', 'BERT / RoBERTa', 'NLP', 'Sentiment Analysis', 'Azure Cognitive Services', 'RAG'],
  },
  {
    category: 'Backend & APIs',
    icon: '⚙️',
    color: '#C9933A',
    skills: ['C# / .NET', 'ASP.NET MVC', '.NET Core', 'REST APIs', 'Microservices', 'Entity Framework', 'xUnit'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: '#E8C97E',
    skills: ['Azure', 'Azure Service Bus', 'Azure DevOps', 'Git / GitLab', 'CI/CD', 'OAuth / JWT', 'OKTA'],
  },
  {
    category: 'Data & Databases',
    icon: '🗄️',
    color: '#A67C2E',
    skills: ['SQL Server', 'MongoDB', 'ClickHouse', 'Redis', 'ETL Pipelines', 'LINQ', 'SQL'],
  },
  {
    category: 'Languages',
    icon: '💻',
    color: '#B8956A',
    skills: ['Python', 'C#', 'Java', 'JavaScript', 'HTML / CSS', 'SQL'],
  },
  {
    category: 'Methodologies',
    icon: '🔄',
    color: '#C9933A',
    skills: ['Agile / Scrum', 'Waterfall', 'Code Reviews', 'Unit Testing', 'Integration Testing', 'TDD'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <FadeIn>
          <div style={{ marginBottom: 60 }}>
            <p className="section-label">What I Work With</p>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              From production .NET backends to cutting-edge AI research — a broad stack built through real-world experience.
            </p>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {skillGroups.map(({ category, icon, color, skills }, i) => (
            <FadeIn key={category} delay={i * 0.07}>
              <div className="card" style={{ height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: `${color}22`, border: `1px solid ${color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem',
                  }}>{icon}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '0.95rem', color: 'var(--text-1)',
                  }}>{category}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {skills.map(skill => (
                    <span key={skill} style={{
                      padding: '4px 12px', borderRadius: 50,
                      fontSize: '0.78rem', fontWeight: 500,
                      background: `${color}18`,
                      color: color,
                      border: `1px solid ${color}33`,
                    }}>{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
