'use client'
import Link from 'next/link'

/**
 * StateFeaturedCities — Premium featured city cards for state pages.
 * Shows the top 6 major cities with a description, displayed ABOVE the full
 * city grid (StateCityGrid). Drives high-intent traffic to city pages.
 *
 * Props:
 *   stateName      — e.g. "Texas"
 *   stateSlug      — e.g. "texas"
 *   featuredCities — Array<{ city, slug, desc }> from getStateLinkData()
 *   contextualSentence — SEO paragraph text mentioning all major cities
 */
export default function StateFeaturedCities({ stateName, stateSlug, featuredCities = [], contextualSentence }) {
  if (!featuredCities.length) return null

  return (
    <section style={{ background: '#F8F5F2', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="red-pill" style={{ marginBottom: '0.85rem' }}>Top Destinations</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.9rem,4.5vw,2.8rem)', color: '#1A1209', lineHeight: 1.05 }}
            >
              Featured Cities in<br />
              <span style={{ color: '#C8102E' }}>{stateName}</span>
            </h2>
            <Link
              href={`/locations/${stateSlug}#cities`}
              style={{
                fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'rgba(26,18,9,0.45)',
                textDecoration: 'none', display: 'flex', gap: '0.4rem', alignItems: 'center', flexShrink: 0,
              }}
            >
              All {stateName} Cities
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* City cards — 3-col grid */}
        <div style={{ display: 'grid', gap: '1rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
          {featuredCities.map((fc) => (
            <FeaturedCityCard
              key={fc.slug}
              city={fc.city}
              slug={fc.slug}
              desc={fc.desc}
              stateSlug={stateSlug}
              stateName={stateName}
            />
          ))}
        </div>

        {/* Contextual SEO paragraph with inline city links */}
        {contextualSentence && (
          <p style={{
            marginTop: '2.25rem',
            fontSize: '0.88rem',
            color: 'rgba(26,18,9,0.38)',
            lineHeight: 1.8,
            textAlign: 'center',
          }}>
            {contextualSentence}
          </p>
        )}

      </div>
    </section>
  )
}

function FeaturedCityCard({ city, slug, desc, stateSlug, stateName }) {
  return (
    <Link
      href={`/locations/${stateSlug}/${slug}`}
      aria-label={`Hibachi at Home in ${city}, ${stateName}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.75rem',
        background: '#FFFFFF',
        border: '1px solid rgba(26,18,9,0.09)',
        textDecoration: 'none',
        transition: 'border-color 0.22s ease, transform 0.22s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(200,16,46,0.35)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(26,18,9,0.09)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(to right, #C8102E, #D4A843)',
        opacity: 0,
        transition: 'opacity 0.25s ease',
      }} className="city-card-bar" />

      {/* Icon */}
      <div style={{
        width: 38, height: 38, marginBottom: '1rem', flexShrink: 0,
        background: 'rgba(200,16,46,0.1)', border: '1px solid rgba(200,16,46,0.22)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="16" height="16" fill="none" stroke="#C8102E" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
        </svg>
      </div>

      {/* City name */}
      <div style={{ fontWeight: 700, color: '#1A1209', fontSize: '1.05rem', marginBottom: '0.3rem' }}>
        Hibachi at Home in {city}
      </div>

      {/* Description */}
      <div style={{ fontSize: '0.8rem', color: 'rgba(26,18,9,0.42)', lineHeight: 1.65, flex: 1 }}>
        {desc}
      </div>

      {/* CTA */}
      <div style={{
        marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem',
        fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em',
        textTransform: 'uppercase', color: '#C8102E',
      }}>
        View {city} Page
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </Link>
  )
}
