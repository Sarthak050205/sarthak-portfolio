import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'LinkedIn Post Generator',
    image: '/LinkdinPostGenerator.png',
    desc: 'AI-powered generator that adapts tone (casual, professional, story), remembers previous posts, and supports multi-post batch creation.',
    tech: ['React', 'Tailwind', 'OpenRouter API'],
    github: 'https://github.com/Sarthak050205/linkedin-post-generator',
    live: 'https://linkedin-post-generator-silk.vercel.app',
    path: '/project/linkdin-post-generator',
    category: 'React',
    featured: true,
  },
  {
    title: 'Weather App (React)',
    image: '/weather-react.png',
    desc: 'Fetches real-time weather data with loading states and robust error handling.',
    tech: ['React', 'Tailwind', 'API'],
    github: 'https://github.com/Sarthak050205/weather-app-react',
    live: 'https://weather-app-react-virid-three.vercel.app',
    path: '/project/weather-react',
    category: 'React',
  },
  {
    title: 'Todo App (Context API)',
    image: '/todo-react.png',
    desc: 'Full-featured task manager with add, edit, delete, and completion state via Context API.',
    tech: ['React', 'Context API'],
    github: 'https://github.com/Sarthak050205/todo-context-api',
    live: 'https://todo-context-api-deploy.vercel.app',
    path: '/project/todo-react',
    category: 'React',
  },
  {
    title: 'Weather App (JavaScript)',
    image: '/weather-js.png',
    desc: 'Vanilla JavaScript weather application with real-time API data and clean UI.',
    tech: ['JavaScript', 'API'],
    github: 'https://github.com/Sarthak050205/weather-app-js',
    live: 'https://weather-app-js-ivory.vercel.app/',
    path: '/project/weather-js',
    category: 'JavaScript',
  },
  {
    title: 'Todo App (JavaScript)',
    image: '/todo-js.png',
    desc: 'Clean, minimal todo app with add and delete functionality.',
    tech: ['JavaScript'],
    github: 'https://github.com/Sarthak050205/Todo-app-js',
    live: 'https://todo-app-js-pink.vercel.app/',
    path: '/project/todo-js',
    category: 'JavaScript',
  },
  {
    title: 'Tic Tac Toe',
    image: '/tictactoe.png',
    desc: 'Classic game with interactive UI, win detection, and restart functionality.',
    tech: ['JavaScript'],
    github: 'https://github.com/Sarthak050205/Tic-Tac-Toe-JS',
    live: 'https://tic-tac-toe-js-sigma.vercel.app/',
    path: '/project/tictactoe',
    category: 'JavaScript',
  },
  {
    title: 'Netflix Clone',
    image: '/netflix.png',
    desc: 'Pixel-perfect UI clone of Netflix homepage with responsive layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Sarthak050205/Netflix-clone',
    live: 'https://netflix-clone-three-xi-57.vercel.app/',
    path: '/project/netflix',
    category: 'HTML/CSS',
  },
]

const filters = ['All', 'React', 'JavaScript', 'HTML/CSS']

function Project() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="page-enter" style={{ fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>Portfolio</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: '16px 0 16px',
            lineHeight: 1.05,
          }}>
            Things I've Built
          </h1>
          <p style={{ color: 'var(--clr-muted)', fontSize: 16 }}>
            {projects.length} projects spanning React apps, JS tools, and UI clones.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: '8px 18px',
                borderRadius: 999,
                border: active === f ? '1px solid rgba(249,115,22,0.5)' : '1px solid rgba(255,255,255,0.1)',
                background: active === f ? 'rgba(249,115,22,0.12)' : 'transparent',
                color: active === f ? 'var(--clr-accent)' : 'var(--clr-muted)',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-body)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {filtered.map((project, i) => (
            <div key={project.title} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* Image */}
              <div style={{ overflow: 'hidden', position: 'relative' }}>
                {project.featured && (
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    zIndex: 10,
                    padding: '4px 12px',
                    background: 'var(--clr-accent)',
                    borderRadius: 999,
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>
                    ⭐ Featured
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    display: 'block',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'none'}
                />
              </div>

              {/* Content */}
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#fff',
                  margin: '0 0 8px',
                  letterSpacing: '-0.01em',
                }}>
                  {project.title}
                </h2>

                <p style={{
                  color: 'var(--clr-muted)',
                  fontSize: 13,
                  lineHeight: 1.65,
                  margin: '0 0 16px',
                  flex: 1,
                }}>
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                  {project.tech.map(t => (
                    <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '8px 0',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#fff',
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '8px 0',
                      background: 'var(--clr-accent)',
                      color: '#fff',
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    Live ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--clr-muted)' }}>
            No projects in this category yet.
          </div>
        )}
      </div>
    </div>
  )
}

export default Project
