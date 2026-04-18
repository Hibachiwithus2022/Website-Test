'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    // Subtle parallax on scroll
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.06) translateY(${window.scrollY * 0.25}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // Trigger load zoom-out
    setTimeout(() => {
      if (bgRef.current) bgRef.current.style.transform = 'scale(1)'
    }, 100)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: 0 }}
    >
      {/* Background photo */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/brand/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          transform: 'scale(1.06)',
          transition: 'transform 8s ease',
          willChange: 'transform',
        }}
      />

      {/* Overlay layers */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 90% at 12% 50%, rgba(200,16,46,0.22) 0%, transparent 65%),
            linear-gradient(to right, rgba(26,18,9,0.94) 0%, rgba(26,18,9,0.6) 55%, rgba(26,18,9,0.3) 100%),
            linear-gradient(to top, rgba(26,18,9,0.8) 0%, transparent 55%)
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(200,16,46,0.07)', mixBlendMode: 'multiply' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 md:py-0 md:min-h-screen md:flex md:items-center">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="red-pill animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Now Serving All 50 States Nationwide
          </div>

          {/* H1 — primary SEO headline */}
          <h1
            className="font-display leading-none text-brand-cream animate-fade-up"
            style={{
              fontSize: 'clamp(3rem,9.5vw,7.5rem)',
              letterSpacing: '0.02em',
              textShadow: '0 2px 48px rgba(0,0,0,0.55)',
              animationDelay: '0.2s',
            }}
          >
            Book a Private<br />
            <span style={{ color: '#C8102E' }}>Hibachi Chef</span><br />
            at Home
          </h1>

          {/* Subheadline — secondary SEO keywords */}
          <p
            className="mt-6 text-lg animate-fade-up"
            style={{
              color: 'rgba(245,239,224,0.8)',
              maxWidth: '38rem',
              lineHeight: 1.72,
              animationDelay: '0.3s',
            }}
          >
            Backyard Parties&nbsp;•&nbsp;Private Chef Experience&nbsp;•&nbsp;Hibachi Near You.<br />
            Professional teppanyaki chefs travel to your home — anywhere in the lower&nbsp;48.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#book" className="btn-primary">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Check Availability
            </a>
            <a href="/estimation" className="btn-ghost">
              Get Instant Quote
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="mt-14 flex flex-wrap items-center gap-6 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {[
              { num: '200+',  label: 'Events Hosted' },
              { num: '5.0★',  label: 'Average Rating' },
              { num: '50',    label: 'States Served'  },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && <div style={{ width: 1, height: 48, background: 'rgba(245,239,224,0.14)' }} />}
                <div>
                  <div
                    className="font-display leading-none"
                    style={{ fontSize: 'clamp(2.2rem,5vw,3.4rem)', color: '#C8102E' }}
                  >
                    {s.num}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'rgba(245,239,224,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.6)' }}>Scroll</span>
        <div style={{
          width: 1, height: 36,
          background: 'linear-gradient(to bottom, rgba(200,16,46,0.8), transparent)',
          animation: 'scrollCue 1.8s ease-in-out infinite',
        }} />
      </div>

      <style jsx>{`
        @keyframes scrollCue {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50%  { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(1) translateY(10px); }
        }
      `}</style>
    </section>
  )
}
