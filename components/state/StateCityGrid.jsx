'use client'
import Link from 'next/link'

function cityToSlug(city) {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function StateCityGrid({ state, stateSlug, cities }) {
  if (!cities || cities.length === 0) return null

  return (
    <section id="cities" style={{ background: 'linear-gradient(180deg,#F8F5F2,#FFFFFF)', padding: '4.5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>Cities We Serve</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#1A1209', lineHeight: 1.05 }}>
            Private Hibachi in<br />
            <span style={{ color: '#C8102E' }}>{state} Cities</span>
          </h2>
          <p style={{ color: 'rgba(26,18,9,0.55)', maxWidth: '36rem', margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.75 }}>
            Click your nearest city for local pricing, availability, and to book your private hibachi chef.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          }}
        >
          {cities.map((city) => (
            <CityCard key={city} city={city} stateSlug={stateSlug} />
          ))}
        </div>

        {/* Fallback CTA for cities not listed */}
        <div style={{
          marginTop: '2.5rem',
          padding: '1.5rem 2rem',
          background: '#FFFFFF',
          border: '1px solid rgba(26,18,9,0.09)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <div style={{ fontWeight: 600, color: '#1A1209', fontSize: '0.92rem' }}>Don't see your city?</div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(26,18,9,0.5)', marginTop: '0.2rem' }}>We serve all of {state} — contact us for availability in your area.</div>
          </div>
          <a href="/estimation" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.75rem 1.5rem' }}>
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  )
}

function CityCard({ city, stateSlug }) {
  const slug = cityToSlug(city)

  return (
    <Link
      href={`/locations/${stateSlug}/${slug}`}
      style={{
        display: 'block',
        padding: '1.25rem 1.5rem',
        background: '#FFFFFF',
        border: '1px solid rgba(26,18,9,0.09)',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(200,16,46,0.07)'
        e.currentTarget.style.borderColor = 'rgba(200,16,46,0.4)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#FFFFFF'
        e.currentTarget.style.borderColor = 'rgba(26,18,9,0.09)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontWeight: 600, color: '#1A1209', fontSize: '0.95rem' }}>{city}</div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(26,18,9,0.4)', marginTop: '0.15rem' }}>Hibachi Chef Available</div>
        </div>
        <svg width="16" height="16" fill="none" stroke="#C8102E" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.7 }}>
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </Link>
  )
}
