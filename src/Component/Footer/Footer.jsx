import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer
      style={{
        fontFamily: 'var(--font-body)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        marginTop: 80,
        padding: '48px 24px 32px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 40,
          marginBottom: 40,
          alignItems: 'start',
        }}>
          {/* Brand */}
          <div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 28,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
            }}>
              SK<span style={{ color: 'var(--clr-accent)' }}>.</span>
            </span>
            <p style={{
              color: 'var(--clr-muted)',
              fontSize: 14,
              marginTop: 10,
              maxWidth: 280,
              lineHeight: 1.6,
            }}>
              Frontend developer building clean, impactful web experiences with React & modern tooling.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 48 }}>
            <div>
              <p style={{ color: '#fff', fontWeight: 600, fontSize: 13, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Pages
              </p>
              {['/', '/about', '/project', '/contact'].map((path, i) => (
                <Link key={path} to={path} style={{
                  display: 'block',
                  color: 'var(--clr-muted)',
                  fontSize: 14,
                  textDecoration: 'none',
                  marginBottom: 10,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'var(--clr-muted)'}
                >
                  {['Home', 'About', 'Projects', 'Contact'][i]}
                </Link>
              ))}
            </div>

            <div>
              <p style={{ color: '#fff', fontWeight: 600, fontSize: 13, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Connect
              </p>
              {[
                { label: 'GitHub', href: 'https://github.com/Sarthak050205' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sarthak-kumar-lohani-214aab325/' },
                { label: 'Email', href: 'mailto:sklohani252@gmail.com' },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'block',
                  color: 'var(--clr-muted)',
                  fontSize: 14,
                  textDecoration: 'none',
                  marginBottom: 10,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--clr-accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--clr-muted)'}
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ color: 'var(--clr-muted)', fontSize: 13 }}>
            © {new Date().getFullYear()} Sarthak Kumar Lohani
          </p>
          <p style={{ color: 'var(--clr-muted)', fontSize: 13 }}>
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
