'use client'
import Link from 'next/link'
import { HERO_SUBTITLES } from '../../lib/cityData'

export default function CityHero({ cityName, stateName, stateSlug, variant = 0, heroImage }) {
  const subtitle = HERO_SUBTITLES[variant % HERO_SUBTITLES.length](cityName, stateName)

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      {heroImage && (
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src={heroImage}
            alt={`Private hibachi chef in ${cityName}, ${stateName}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Dark overlay layers */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,18,9,0.96) 0%, rgba(26,18,9,0.75) 55%, rgba(26,18,9,0.4) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,18,9,1) 0%, transparent 40%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,16,46,0.06)', mixBlendMode: 'multiply' }} />
        </div>
      )}

      {/* No image fallback */}
      {!heroImage && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg,rgba(200,16,46,0.18) 0%,transparent 55%), linear-gradient(180deg,#1E1410,#1A1209)',
        }} />
      )}

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(200,16,46,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-5xl mx-auto px-6" style={{ position: 'relative', paddingTop: '6rem', paddingBottom: '5rem', width: '100%' }}>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ fontSize: '0.75rem', color: 'rgba(245,239,224,0.4)', marginBottom: '2rem' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.4rem', opacity: 0.4 }}>/</span>
          <Link href="/locations" style={{ color: 'inherit', textDecoration: 'none' }}>Locations</Link>
          <span style={{ margin: '0 0.4rem', opacity: 0.4 }}>/</span>
          <Link href={`/locations/${stateSlug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{stateName}</Link>
          <span style={{ margin: '0 0.4rem', opacity: 0.4 }}>/</span>
          <span style={{ color: 'rgba(245,239,224,0.65)' }}>{cityName}</span>
        </nav>

        {/* Red pill tag */}
        <div className="red-pill" style={{ marginBottom: '1.25rem' }}>Private Hibachi Chef</div>

        {/* H1 */}
        <h1
          className="font-display leading-none text-brand-cream"
          style={{ fontSize: 'clamp(3.2rem,9vw,6.5rem)', marginBottom: '1rem', letterSpacing: '0.015em' }}
        >
          Hibachi at Home in<br />
          <span style={{ color: '#C8102E' }}>{cityName},</span>{' '}
          <span style={{ color: 'rgba(245,239,224,0.55)', fontSize: '0.65em' }}>{stateName}</span>
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: '1.05rem', color: 'rgba(245,239,224,0.65)', letterSpacing: '0.04em', marginBottom: '2.75rem', maxWidth: '40rem' }}>
          {subtitle}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <a href="#book" className="btn-primary">
            Book Now
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#pricing" className="btn-ghost">Get a Quote</a>
        </div>

        {/* Trust strip */}
        <div style={{
          display: 'flex', gap: '2rem', flexWrap: 'wrap',
          paddingTop: '2rem', borderTop: '1px solid rgba(245,239,224,0.08)',
        }}>
          {[
            { val: '$55', label: 'Per Adult' },
            { val: '$550', label: 'Event Minimum' },
            { val: '5.0★', label: 'Avg Rating' },
            { val: '10+', label: 'Min Guests' },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-display" style={{ fontSize: '1.6rem', color: '#F5EFE0', lineHeight: 1 }}>{item.val}</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(245,239,224,0.38)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
