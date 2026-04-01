import React, { useState } from 'react'

const contacts = [
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+91 8271788650',
    sub: 'Chat with me directly',
    href: 'https://wa.me/918271788650',
    color: '#22c55e',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'sklohani252@gmail.com',
    sub: 'Best for detailed messages',
    href: 'mailto:sklohani252@gmail.com',
    color: '#f97316',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'sarthak-kumar-lohani',
    sub: 'Connect professionally',
    href: 'https://www.linkedin.com/in/sarthak-kumar-lohani-214aab325/',
    color: '#0ea5e9',
  },
  {
    icon: '⚡',
    label: 'GitHub',
    value: 'Sarthak050205',
    sub: 'Explore my code',
    href: 'https://github.com/Sarthak050205',
    color: '#a78bfa',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 8271788650',
    sub: 'Available during IST hours',
    href: 'tel:+918271788650',
    color: '#f59e0b',
  },
]

function Contact() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="page-enter" style={{ fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 64, maxWidth: 560 }}>
          <span className="tag" style={{ marginBottom: 16, display: 'inline-block' }}>Say Hello</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: '16px 0 20px',
            lineHeight: 1.05,
          }}>
            Let's Work<br />
            <span className="text-gradient">Together.</span>
          </h1>
          <p style={{ color: 'var(--clr-muted)', fontSize: 16, lineHeight: 1.7 }}>
            Whether it's an internship, collaboration, or just a chat about tech — I'm always up for it. Reach out through any channel below.
          </p>
        </div>

        {/* Contact grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
          marginBottom: 72,
        }}>
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                textDecoration: 'none',
                display: 'block',
              }}
            >
              <div style={{
                background: 'var(--clr-surface)',
                border: hovered === i ? `1px solid ${c.color}50` : '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                transition: 'all 0.25s',
                transform: hovered === i ? 'translateY(-2px)' : 'none',
              }}>
                {/* Icon */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: `${c.color}15`,
                  border: `1px solid ${c.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                  transition: 'background 0.25s',
                  ...(hovered === i ? { background: `${c.color}25` } : {}),
                }}>
                  {c.icon}
                </div>

                <div style={{ minWidth: 0 }}>
                  <p style={{
                    fontSize: 12,
                    color: 'var(--clr-muted)',
                    margin: '0 0 4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                  }}>
                    {c.label}
                  </p>
                  <p style={{
                    fontSize: 15,
                    color: hovered === i ? '#fff' : 'var(--clr-text)',
                    fontWeight: 600,
                    margin: '0 0 2px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s',
                  }}>
                    {c.value}
                  </p>
                  <p style={{ fontSize: 12, color: 'var(--clr-muted)', margin: 0 }}>
                    {c.sub}
                  </p>
                </div>

                {/* Arrow */}
                <div style={{
                  marginLeft: 'auto',
                  color: hovered === i ? c.color : 'rgba(255,255,255,0.2)',
                  fontSize: 18,
                  transition: 'color 0.2s, transform 0.2s',
                  transform: hovered === i ? 'translateX(3px)' : 'none',
                  flexShrink: 0,
                }}>
                  →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 40,
          textAlign: 'center',
        }}>
          <p style={{ color: 'var(--clr-muted)', fontSize: 15 }}>
            Based in India 🇮🇳 &nbsp;·&nbsp; IST (UTC+5:30) &nbsp;·&nbsp; Usually responds within 24hrs
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
