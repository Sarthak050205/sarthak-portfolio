import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'Context API', 'REST APIs']

const featuredProjects = [
  {
    title: 'LinkedIn Post Generator',
    desc: 'AI-powered tool that adapts tone, remembers past posts, and generates multi-post batches.',
    tech: ['React', 'OpenRouter API', 'Tailwind'],
    href: '/project/linkdin-post-generator',
    color: '#0ea5e9',
  },
  {
    title: 'Weather App (React)',
    desc: 'Real-time weather with API integration, elegant loading states, and error handling.',
    tech: ['React', 'API', 'Tailwind'],
    href: '/project/weather-react',
    color: '#8b5cf6',
  },
  {
    title: 'Todo App (Context API)',
    desc: 'Full-featured task manager: add, edit, delete, complete — powered by Context API.',
    tech: ['React', 'Context API'],
    href: '/project/todo-react',
    color: '#f97316',
  },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealDiv({ children, delay = 0, style = {} }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  )
}

function Home() {
  return (
    <div className="page-enter" style={{ fontFamily: 'var(--font-body)' }}>

      {/* ── HERO ── */}
      <section style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '100px 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 48,
        alignItems: 'center',
      }}>
        <div>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 14px',
            background: 'rgba(249,115,22,0.1)',
            border: '1px solid rgba(249,115,22,0.25)',
            borderRadius: 999,
            marginBottom: 28,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--clr-accent)',
              boxShadow: '0 0 6px var(--clr-accent)',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: 12, color: 'var(--clr-accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
              Open to internships & collabs
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 6vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: '0 0 20px',
          }}>
            Hi, I'm{' '}
            <span className="text-gradient">Sarthak</span>
            <br />
            Frontend Dev.
          </h1>

          <p style={{
            fontSize: 18,
            color: 'var(--clr-muted)',
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 36,
          }}>
            I build polished React applications with clean UI, API integrations, and thoughtful UX. Currently seeking my first professional role.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/project" style={{
              padding: '12px 28px',
              background: 'var(--clr-accent)',
              color: '#fff',
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(249,115,22,0.35)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(249,115,22,0.45)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(249,115,22,0.35)' }}
            >
              View Projects →
            </Link>
            <Link to="/contact" style={{
              padding: '12px 28px',
              background: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'transparent' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Profile image */}
        <div style={{ position: 'relative' }} className="hidden md:block">
          <div style={{
            width: 260,
            height: 260,
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'linear-gradient(135deg, rgba(249,115,22,0.3), rgba(251,191,36,0.15))',
            position: 'absolute',
            inset: -12,
            animation: 'blob 8s ease-in-out infinite',
          }} />
          <img
            src="/profile.jpeg"
            alt="Sarthak Kumar Lohani"
            style={{
              width: 236,
              height: 236,
              borderRadius: 24,
              objectFit: 'cover',
              position: 'relative',
              zIndex: 1,
              border: '2px solid rgba(249,115,22,0.3)',
            }}
          />
          <style>{`
            @keyframes blob {
              0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
              50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.4; }
            }
          `}</style>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RevealDiv>
            <p style={{ fontSize: 12, color: 'var(--clr-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Tech Stack
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {skills.map((s, i) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RevealDiv>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 36 }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 36,
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.02em',
              }}>
                Featured Work
              </h2>
              <Link to="/project" style={{
                color: 'var(--clr-accent)',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
              }}>
                All projects →
              </Link>
            </div>
          </RevealDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {featuredProjects.map((p, i) => (
              <RevealDiv key={p.title} delay={i * 80}>
                <Link to={p.href} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: 28, height: '100%', cursor: 'pointer' }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: `${p.color}1a`,
                      border: `1px solid ${p.color}40`,
                      marginBottom: 20,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                    }}>
                      ⚡
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#fff',
                      margin: '0 0 10px',
                      letterSpacing: '-0.01em',
                    }}>
                      {p.title}
                    </h3>
                    <p style={{
                      color: 'var(--clr-muted)',
                      fontSize: 14,
                      lineHeight: 1.6,
                      margin: '0 0 20px',
                    }}>
                      {p.desc}
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {p.tech.map(t => (
                        <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RevealDiv>
            <div style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(251,191,36,0.06))',
              border: '1px solid rgba(249,115,22,0.2)',
              borderRadius: 24,
              padding: 'clamp(40px, 5vw, 72px)',
              textAlign: 'center',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.02em',
                marginBottom: 16,
              }}>
                Let's build something great.
              </h2>
              <p style={{ color: 'var(--clr-muted)', fontSize: 16, marginBottom: 32 }}>
                I'm open to internships, freelance, and collaboration opportunities.
              </p>
              <Link to="/contact" style={{
                display: 'inline-block',
                padding: '14px 36px',
                background: 'var(--clr-accent)',
                color: '#fff',
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(249,115,22,0.4)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                Get In Touch →
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>
    </div>
  )
}

export default Home
