import React from 'react'
import { Link } from 'react-router-dom'

const timeline = [
  { year: '2024', label: 'Started learning React', desc: 'Dived deep into component architecture, hooks, and state management.' },
  { year: '2024', label: 'Built first API project', desc: 'Created a weather app using vanilla JavaScript and external REST APIs.' },
  { year: '2025', label: 'React ecosystem mastery', desc: 'Built complex projects using Context API, React Router, and Tailwind CSS.' },
  { year: '2025', label: 'AI-powered apps', desc: 'Shipped a LinkedIn Post Generator integrating OpenRouter LLM API.' },
]

const cards = [
  {
    icon: '⚡',
    title: 'Development',
    desc: 'Building responsive, interactive web applications with modern React and clean code principles.',
    color: '#f97316',
  },
  {
    icon: '📐',
    title: 'Design Sense',
    desc: 'Obsessed with clean UI, pixel-perfect layouts, and delightful micro-interactions.',
    color: '#8b5cf6',
  },
  {
    icon: '🎯',
    title: 'Growth Mindset',
    desc: 'Leveling up in DSA, exploring backend fundamentals, and shipping projects consistently.',
    color: '#0ea5e9',
  },
]

function About() {
  return (
    <div className="page-enter" style={{ fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <span className="tag" style={{ marginBottom: 20, display: 'inline-block' }}>About Me</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: '16px 0 0',
            lineHeight: 1.05,
          }}>
            Developer. Learner.<br />
            <span className="text-gradient">Problem Solver.</span>
          </h1>
        </div>

        {/* Grid: bio + photo */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: 48,
          alignItems: 'start',
          marginBottom: 72,
        }}>
          <div>
            <p style={{ fontSize: 18, color: 'var(--clr-text)', lineHeight: 1.8, marginBottom: 20 }}>
              I'm <strong style={{ color: '#fff' }}>Sarthak Kumar Lohani</strong>, a frontend developer from India who enjoys building applications that are both technically sound and beautiful to use.
            </p>
            <p style={{ fontSize: 16, color: 'var(--clr-muted)', lineHeight: 1.8, marginBottom: 20 }}>
              My journey started with vanilla JavaScript and HTML/CSS, gradually progressing into the React ecosystem. I focus on writing clean, maintainable code — not just making things work, but making them work <em style={{ color: 'var(--clr-text)' }}>well</em>.
            </p>
            <p style={{ fontSize: 16, color: 'var(--clr-muted)', lineHeight: 1.8, marginBottom: 32 }}>
              Outside of coding, I'm improving my problem-solving through DSA, exploring new tech, and looking for internships where I can contribute meaningfully.
            </p>

            <div style={{ display: 'flex', gap: 12 }}>
              <a
                href="https://www.linkedin.com/in/sarthak-kumar-lohani-214aab325/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '10px 22px',
                  background: 'var(--clr-accent)',
                  color: '#fff',
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                LinkedIn ↗
              </a>
              <Link to="/project" style={{
                padding: '10px 22px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
              }}>
                My Work →
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="hidden md:block" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <img
                src="/profile.jpeg"
                alt="Sarthak"
                style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/5' }}
              />
            </div>
            {/* Floating stat */}
            <div style={{
              position: 'absolute',
              bottom: -16,
              left: -16,
              background: 'var(--clr-surface)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: '16px 20px',
            }}>
              <p style={{ fontSize: 28, fontWeight: 800, color: 'var(--clr-accent)', fontFamily: 'var(--font-display)', margin: 0 }}>7+</p>
              <p style={{ fontSize: 13, color: 'var(--clr-muted)', margin: 0 }}>Projects shipped</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          marginBottom: 72,
        }}>
          {cards.map(c => (
            <div key={c.title} className="card" style={{ padding: 28 }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: `${c.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                marginBottom: 20,
              }}>
                {c.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 700,
                color: '#fff',
                margin: '0 0 10px',
              }}>
                {c.title}
              </h3>
              <p style={{ color: 'var(--clr-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
            marginBottom: 36,
          }}>
            My Journey
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {timeline.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, paddingBottom: 32, position: 'relative' }}>
                {/* Line */}
                {i < timeline.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: 15,
                    top: 32,
                    bottom: 0,
                    width: 1,
                    background: 'rgba(255,255,255,0.08)',
                  }} />
                )}
                {/* Dot */}
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'var(--clr-surface2)',
                  border: '2px solid rgba(249,115,22,0.4)',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--clr-accent)' }} />
                </div>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--clr-accent)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {t.year}
                  </span>
                  <h4 style={{ color: '#fff', fontWeight: 600, fontSize: 16, margin: '4px 0 6px' }}>{t.label}</h4>
                  <p style={{ color: 'var(--clr-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
