'use client'
import { useState, useEffect } from 'react'

export default function CityStickyBar({ cityName }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: 'rgba(255,255,255,0.97)',
        borderTop: '1px solid rgba(26,18,9,0.1)',
        padding: '0.85rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
      }}
      className="lg:hidden"
    >
      {/* Left: price anchor */}
      <div style={{ flexShrink: 0 }}>
        <div style={{ fontSize: '0.62rem', color: 'rgba(26,18,9,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1 }}>
          from
        </div>
        <div style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: '1.5rem', color: '#D4A843', letterSpacing: '0.04em', lineHeight: 1 }}>
          $60<span style={{ fontSize: '0.8rem', color: 'rgba(212,168,67,0.6)' }}>/adult</span>
        </div>
      </div>

      {/* Center: city label */}
      <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
        <div style={{ fontSize: '0.7rem', color: 'rgba(26,18,9,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1, marginBottom: '0.15rem' }}>
          Hibachi at Home
        </div>
        <div style={{ fontWeight: 700, color: '#1A1209', fontSize: '0.88rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {cityName}
        </div>
      </div>

      {/* Right: CTAs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
        <a
          href="tel:+16027672965"
          aria-label="Call Hibachi Connect"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 42, height: 42,
            background: 'rgba(26,18,9,0.06)',
            border: '1px solid rgba(26,18,9,0.12)',
            color: '#1A1209',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </a>
        <a
          href="#book"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
            background: '#C8102E',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            padding: '0 1.1rem',
            height: 42,
            whiteSpace: 'nowrap',
          }}
        >
          Book Now
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
