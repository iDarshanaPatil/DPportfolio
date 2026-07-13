import React from 'react'
import FadeIn from './FadeIn'
import { assetUrl } from '../utils/assetUrl'

const books = [
  {
    title: 'Start with Why',
    author: 'Simon Sinek',
    image: assetUrl('projects/StartwithWhy.png'),
    color: '#D4A853',
    takeaway: 'When you start with why — whether it\'s a career decision or an everyday life choice — you\'ll figure out how to do it anyway.',
  },
  {
    title: 'Do Epic Shit',
    author: 'Ankur Warikoo',
    image: assetUrl('projects/DoepicShit.png'),
    color: '#C9933A',
    takeaway: 'The best thing about this book is that there\'s no real start or end — you can open any page and just begin reading. Perfect for me who can\'t sit down for more than five minutes at a time 😅',
  },
]

export default function Books() {
  return (
    <section id="books" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <FadeIn>
          <div style={{ marginBottom: 60 }}>
            <p className="section-label">Off the Clock</p>
            <h2 className="section-title">Books I Like</h2>
            <p className="section-subtitle">
              Reads that stuck with me — a few personal thoughts on what I took away from each.
            </p>
          </div>
        </FadeIn>

        <div className="books-grid">
          {books.map((book, i) => (
            <FadeIn key={book.title} delay={i * 0.1}>
              <div className="card book-card">
                <div
                  className="book-card-accent"
                  style={{ background: `linear-gradient(90deg, ${book.color}, transparent)` }}
                />
                <div className="book-card-cover">
                  <img src={book.image} alt={`${book.title} cover`} loading="lazy" />
                </div>
                <div className="book-card-content">
                  <h3 className="book-card-title">{book.title}</h3>
                  <p className="book-card-author" style={{ color: book.color }}>{book.author}</p>
                  <p className="book-card-takeaway">{book.takeaway}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        .books-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .book-card {
          position: relative;
          overflow: hidden;
          display: flex;
          gap: 24px;
          align-items: flex-start;
          padding: 28px;
          height: 100%;
        }

        .book-card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        .book-card-cover {
          flex: 0 0 120px;
          width: 120px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-card);
        }

        .book-card-cover img {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 2 / 3;
          object-fit: cover;
        }

        .book-card-content {
          flex: 1;
          min-width: 0;
        }

        .book-card-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-1);
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .book-card-author {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .book-card-takeaway {
          color: var(--text-3);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .books-grid {
            grid-template-columns: 1fr;
          }

          .book-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .book-card-cover {
            flex: 0 0 auto;
            width: 140px;
          }
        }
      `}</style>
    </section>
  )
}
