'use client'
import Link from 'next/link'

export default function StateHero({ state, stateSlug, stateData }) {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg,rgba(200,16,46,0.16) 0%,transparent 55%), linear-gradient(180deg,#1E1410,#1A1209)',
        padding: '5.5rem 1.5rem 4.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative fire glow */}
      <div style={{
        position: 'absolute', top: 0, right: '10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-5xl mx-auto" style={{ position: 'relative' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ fontSize: '0.78rem', color: 'rgba(245,239,224,0.4)', marginBottom: '1.75rem' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem', opacity: 0.4 }}>/</span>
          <Link href="/locations" style={{ color: 'inherit', textDecoration: 'none' }}>Locations</Link>
          <span style={{ margin: '0 0.5rem', opacity: 0.4 }}>/</span>
          <span style={{ color: 'rgba(245,239,224,0.7)' }}>{state}</span>
        </nav>

        {/* Tag */}
        <div className="red-pill" style={{ marginBottom: '1.25rem' }}>
          Private Hibachi Chef · {stateData.nickname}
        </div>

        {/* H1 */}
        <h1
          className="font-display leading-none text-brand-cream"
          style={{ fontSize: 'clamp(3rem,8vw,6rem)', marginBottom: '1.25rem', letterSpacing: '0.02em' }}
        >
          Hibachi at Home in<br />
          <span style={{ color: '#C8102E' }}>{state}</span>
        </h1>

        {/* Sub */}
        <p style={{ color: 'rgba(245,239,224,0.72)', maxWidth: '42rem', fontSize: '1.1rem', lineHeight: 1.78, marginBottom: '2.75rem' }}>
          {stateData.heroSub}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/booking" className="btn-primary">
            Book in {state}
          </a>
          <Link href="/#pricing" className="btn-ghost">
            View Pricing
          </Link>
        </div>

        {/* Trust strip */}
        <div style={{
          display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginTop: '3rem',
          paddingTop: '2rem', borderTop: '1px solid rgba(245,239,224,0.08)',
        }}>
          {[
            { val: '$60', label: 'Per Adult' },
            { val: '$600', label: 'Minimum' },
            { val: '5.0★', label: 'Rating' },
            { val: '50', label: 'States Served' },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-display" style={{ fontSize: '1.7rem', color: '#F5EFE0', lineHeight: 1 }}>{item.val}</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(245,239,224,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
