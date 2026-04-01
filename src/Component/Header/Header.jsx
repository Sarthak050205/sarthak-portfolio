import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/project', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        fontFamily: 'var(--font-body)',
        background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 20,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            SK<span style={{ color: 'var(--clr-accent)' }}>.</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="hidden md:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                textDecoration: 'none',
                padding: '6px 16px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                color: isActive ? '#fff' : 'var(--clr-muted)',
                background: isActive ? 'rgba(249,115,22,0.15)' : 'transparent',
                border: isActive ? '1px solid rgba(249,115,22,0.3)' : '1px solid transparent',
                transition: 'all 0.2s',
              })}
            >
              {label}
            </NavLink>
          ))}

          <a
            href="https://github.com/Sarthak050205"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: 8,
              padding: '7px 18px',
              background: 'var(--clr-accent)',
              color: '#fff',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: 22,
              height: 2,
              background: '#fff',
              borderRadius: 2,
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(13,13,13,0.97)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                display: 'block',
                padding: '12px 0',
                textDecoration: 'none',
                fontSize: 16,
                fontWeight: 500,
                color: isActive ? 'var(--clr-accent)' : 'var(--clr-text)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
