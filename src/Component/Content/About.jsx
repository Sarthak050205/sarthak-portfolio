import React from 'react'
import { Link } from 'react-router-dom'

const timeline = [
  { 
    year: 'Aug 2025', 
    label: 'Started web development', 
    desc: 'Began learning HTML, CSS, and JavaScript, focusing on building strong fundamentals and understanding how the web works.' 
  },
  { 
    year: 'Sep 2025', 
    label: 'Built first projects', 
    desc: 'Created basic projects like Todo App and small UI components to strengthen core JavaScript concepts.' 
  },
  { 
    year: 'Dec 2025', 
    label: 'Moved to React', 
    desc: 'Started learning React, understanding components, hooks, and building interactive UIs.' 
  },
  { 
    year: 'Jan 2026', 
    label: 'Real-world projects', 
    desc: 'Built applications like Weather App with API integration and improved UI/UX skills.' 
  },
  { 
    year: 'Mar 2026', 
    label: 'Advanced React learning', 
    desc: 'Worked with Context API, React Router, and improved project structure for scalability.' 
  },
  { 
    year: 'Now', 
    label: 'Building & improving', 
    desc: 'Developing LinkedIn Post Generator, learning DSA, and preparing for frontend internships.' 
  }
]

const cards = [
  {
    icon: '⚡',
    title: 'Development',
    desc: 'Building responsive and scalable React applications with clean, maintainable code.',
    color: '#f97316',
  },
  {
    icon: '📐',
    title: 'Design Sense',
    desc: 'Focused on clean UI, smooth user experience, and modern design practices.',
    color: '#8b5cf6',
  },
  {
    icon: '🎯',
    title: 'Growth Mindset',
    desc: 'Continuously learning DSA, exploring backend basics, and improving daily.',
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

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: 48,
          alignItems: 'start',
          marginBottom: 72,
        }}>
          <div>
            <p style={{ fontSize: 18, color: 'var(--clr-text)', lineHeight: 1.8, marginBottom: 20 }}>
              I'm <strong style={{ color: '#fff' }}>Sarthak Kumar Lohani</strong>, a frontend developer who builds modern web applications using React.
            </p>

            <p style={{ fontSize: 16, color: 'var(--clr-muted)', lineHeight: 1.8, marginBottom: 20 }}>
              I focus on creating clean UI, writing maintainable code, and building projects that solve real-world problems.
            </p>

            <p style={{ fontSize: 16, color: 'var(--clr-muted)', lineHeight: 1.8, marginBottom: 32 }}>
              Currently, I’m improving my problem-solving skills with DSA and looking for opportunities where I can learn and contribute.
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

              <Link to="/projects" style={{
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

            <div style={{
              position: 'absolute',
              bottom: -16,
              left: -16,
              background: 'var(--clr-surface)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: '16px 20px',
            }}>
              <p style={{ fontSize: 28, fontWeight: 800, color: 'var(--clr-accent)', margin: 0 }}>7+</p>
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
                fontSize: 18,
                fontWeight: 700,
                color: '#fff',
                margin: '0 0 10px',
              }}>
                {c.title}
              </h3>

              <p style={{ color: 'var(--clr-muted)', fontSize: 14 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h2 style={{
            fontSize: 28,
            fontWeight: 800,
            color: '#fff',
            marginBottom: 36,
          }}>
            My Journey
          </h2>

          {timeline.map((t, i) => (
            <div key={i} style={{ marginBottom: 24 }}>
              <span style={{ color: 'var(--clr-accent)', fontSize: 12 }}>
                {t.year}
              </span>
              <h4 style={{ color: '#fff', margin: '4px 0' }}>{t.label}</h4>
              <p style={{ color: 'var(--clr-muted)' }}>{t.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default About