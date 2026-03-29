'use client'
import Link from 'next/link'

/**
 * ExploreStateSection — City page "More in [State]" internal linking block.
 * Placed after the FAQ, before the Final CTA. Combines:
 *   - Contextual SEO sentence mentioning nearby + other state cities
 *   - Cards linking to other major cities in the same state
 *   - Prominent "Back to [State] Page" link as a state hub anchor
 *
 * Props:
 *   cityName            — current city, e.g. "Dallas"
 *   stateName           — e.g. "Texas"
 *   stateSlug           — e.g. "texas"
 *   stateAbbr           — e.g. "TX"
 *   otherMajorCities    — Array<{ city, slug }> — other featured cities in same state
 *   contextualSentence  — SEO sentence, e.g. "Not in Dallas? We also serve..."
 */
export default function ExploreStateSection({
  cityName,
  stateName,
  stateSlug,
  stateAbbr,
  otherMajorCities = [],
  contextualSentence,
}) {
  const fallbackSentence = `Not in ${cityName}? We serve all of ${stateName} — contact us for availability anywhere in ${stateAbbr}.`

  return (
    <section
      style={{
        background: 'linear-gradient(180deg,#1A1209,#1E1410)',
        padding: '4.5rem 1.5rem',
        borderTop: '1px solid rgba(245,239,224,0.05)',
      }}
    >
      <div className="max-w-5xl mx-auto">

        <div style={{ display: 'grid', gap: '3rem', alignItems: 'start' }} className="lg:grid-cols-[1fr_260px]">

          {/* Left: other major cities */}
          <div>
            <div className="red-pill" style={{ marginBottom: '1rem' }}>Explore {stateName}</div>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(1.7rem,4vw,2.5rem)', color: '#F5EFE0', lineHeight: 1.05, marginBottom: '0.75rem' }}
            >
              Also Serving Major Cities<br />
              <span style={{ color: '#C8102E' }}>Across {stateName}</span>
            </h2>

            {/* Contextual SEO paragraph */}
            <p style={{ fontSize: '0.9rem', color: 'rgba(245,239,224,0.48)', lineHeight: 1.82, marginBottom: '1.75rem', maxWidth: '42rem' }}>
              {contextualSentence || fallbackSentence}
            </p>

            {/* City cards */}
            {otherMajorCities.length > 0 && (
              <div style={{ display: 'grid', gap: '0.75rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
                {otherMajorCities.map((c) => (
                  <MajorCityCard
                    key={c.slug}
                    city={c.city}
                    slug={c.slug}
                    stateSlug={stateSlug}
                    stateName={stateName}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: state hub + quick nav */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>

            {/* State hub card */}
            <Link
              href={`/locations/${stateSlug}`}
              aria-label={`All hibachi locations in ${stateName}`}
              style={{
                display: 'block',
                background: 'rgba(200,16,46,0.07)',
                border: '1px solid rgba(200,16,46,0.25)',
                padding: '1.75rem',
                textDecoration: 'none',
                transition: 'border-color 0.22s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,16,46,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,16,46,0.25)' }}
            >
              <div style={{
                fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: '#C8102E', marginBottom: '0.6rem',
              }}>
                {stateName} Hub
              </div>
              <div style={{ fontWeight: 700, color: '#F5EFE0', fontSize: '1rem', marginBottom: '0.4rem' }}>
                Hibachi at Home in {stateName}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(245,239,224,0.45)', lineHeight: 1.65, marginBottom: '1rem' }}>
                Browse all cities, availability, and pricing for {stateName}.
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.07em',
                textTransform: 'uppercase', color: '#C8102E',
              }}>
                View {stateName} Page
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>

            {/* Quick links panel */}
            <div style={{
              background: 'rgba(245,239,224,0.04)',
              border: '1px solid rgba(245,239,224,0.08)',
              padding: '1.5rem',
            }}>
              <div style={{
                fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(245,239,224,0.35)', marginBottom: '1rem',
              }}>
                Quick Links
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  { label: 'All Locations', href: '/locations' },
                  { label: `${stateName} Cities`, href: `/locations/${stateSlug}` },
                  { label: 'View Pricing', href: '#pricing' },
                  { label: 'Book Now', href: '#book', highlight: true },
                ].map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: '0.86rem',
                        color: link.highlight ? '#C8102E' : 'rgba(245,239,224,0.6)',
                        textDecoration: 'none',
                        fontWeight: link.highlight ? 600 : 400,
                        display: 'flex', gap: '0.45rem', alignItems: 'center',
                      }}
                    >
                      <span style={{ color: '#C8102E' }}>›</span> {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

function MajorCityCard({ city, slug, stateSlug, stateName }) {
  return (
    <Link
      href={`/locations/${stateSlug}/${slug}`}
      aria-label={`Hibachi at Home in ${city}, ${stateName}`}
      style={{
        display: 'block',
        padding: '1rem 1.25rem',
        background: 'rgba(245,239,224,0.04)',
        border: '1px solid rgba(245,239,224,0.08)',
        textDecoration: 'none',
        transition: 'all 0.22s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(200,16,46,0.07)'
        e.currentTarget.style.borderColor = 'rgba(200,16,46,0.35)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(245,239,224,0.04)'
        e.currentTarget.style.borderColor = 'rgba(245,239,224,0.08)'
      }}
    >
      <div style={{ fontSize: '0.68rem', color: '#C8102E', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
        Hibachi at Home
      </div>
      <div style={{ fontWeight: 600, color: '#F5EFE0', fontSize: '0.92rem' }}>{city}</div>
      <div style={{ fontSize: '0.7rem', color: 'rgba(245,239,224,0.35)', marginTop: '0.15rem' }}>{stateName}</div>
    </Link>
  )
}
