'use client'
import Link from 'next/link'

// ── Region definitions ─────────────────────────────────────────────────────
const REGIONS = [
  {
    name: 'South',
    slugs: ['texas','florida','georgia','north-carolina','tennessee','virginia','south-carolina','alabama','louisiana','mississippi','arkansas','kentucky','west-virginia','oklahoma','maryland','washington-dc'],
  },
  {
    name: 'West',
    slugs: ['arizona','nevada','colorado','california','washington','oregon','utah','idaho','montana','new-mexico','wyoming'],
  },
  {
    name: 'Midwest',
    slugs: ['illinois','ohio','michigan','indiana','wisconsin','minnesota','missouri','iowa','kansas','nebraska','south-dakota','north-dakota'],
  },
  {
    name: 'Northeast',
    slugs: ['new-york','pennsylvania','new-jersey','massachusetts','connecticut','maine','new-hampshire','rhode-island','vermont','delaware'],
  },
]

function cityToSlug(city) {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function LocationsClient({ allStates, citiesByState }) {
  const stateBySlug = Object.fromEntries(allStates.map(s => [s.slug, s]))

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg,rgba(200,16,46,0.14) 0%,transparent 55%), linear-gradient(180deg,#1E1410,#1A1209)',
        padding: '5rem 1.5rem 4rem',
      }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
            Nationwide Coverage
          </div>
          <h1
            className="font-display leading-none text-brand-cream"
            style={{ fontSize: 'clamp(2.8rem,7vw,5rem)', marginBottom: '1.25rem' }}
          >
            Private Hibachi Chef<br />
            <span style={{ color: '#C8102E' }}>Near You</span>
          </h1>
          <p style={{ color: 'rgba(245,239,224,0.68)', maxWidth: '40rem', margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: 1.78 }}>
            We serve all 50 U.S. states. Browse your state below, select your city, and book your private hibachi experience.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { val: '50', label: 'States' },
              { val: '$55', label: 'Per Adult' },
              { val: '5.0★', label: 'Rating' },
              { val: '200+', label: 'Events' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div className="font-display" style={{ fontSize: '2rem', color: '#F5EFE0', lineHeight: 1 }}>{item.val}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(245,239,224,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regions + States + Cities ─────────────────────────────────────── */}
      <section style={{ background: '#1A1209', padding: '4rem 1.5rem 5rem' }} id="locations">
        <div className="max-w-5xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

          {REGIONS.map((region) => {
            const regionStates = region.slugs
              .map(slug => stateBySlug[slug])
              .filter(Boolean)

            return (
              <div key={region.name}>
                {/* Region header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem',
                }}>
                  <div style={{
                    fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em',
                    textTransform: 'uppercase', color: '#C8102E',
                    background: 'rgba(200,16,46,0.1)', border: '1px solid rgba(200,16,46,0.2)',
                    padding: '0.35rem 0.85rem',
                    whiteSpace: 'nowrap',
                  }}>
                    {region.name}
                  </div>
                  <div style={{ flex: 1, height: 1, background: 'rgba(245,239,224,0.07)' }} />
                </div>

                {/* States grid */}
                <div style={{
                  display: 'grid',
                  gap: '1.25rem',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
                }}>
                  {regionStates.map((s) => {
                    const cities = citiesByState[s.slug] || []
                    return (
                      <div
                        key={s.slug}
                        style={{
                          background: 'rgba(245,239,224,0.025)',
                          border: '1px solid rgba(245,239,224,0.07)',
                          padding: '1.1rem 1.25rem',
                        }}
                      >
                        {/* State name — links to state page */}
                        <Link
                          href={`/locations/${s.slug}`}
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            textDecoration: 'none',
                            marginBottom: cities.length > 0 ? '0.8rem' : 0,
                            paddingBottom: cities.length > 0 ? '0.8rem' : 0,
                            borderBottom: cities.length > 0 ? '1px solid rgba(245,239,224,0.06)' : 'none',
                          }}
                        >
                          <span style={{
                            fontWeight: 700, color: '#F5EFE0', fontSize: '0.93rem',
                            letterSpacing: '0.01em',
                          }}>
                            {s.state}
                          </span>
                          {cities.length > 0 && (
                            <span style={{
                              fontSize: '0.6rem', color: '#C8102E', fontWeight: 600,
                              letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}>
                              {cities.length}
                            </span>
                          )}
                        </Link>

                        {/* City links */}
                        {cities.length > 0 && (
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.28rem' }}>
                            {cities.map((city) => (
                              <li key={city} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <span style={{ color: 'rgba(200,16,46,0.5)', fontSize: '0.6rem', flexShrink: 0, lineHeight: 1 }}>›</span>
                                <Link
                                  href={`/locations/${s.slug}/${cityToSlug(city)}`}
                                  style={{
                                    fontSize: '0.8rem',
                                    color: 'rgba(245,239,224,0.5)',
                                    textDecoration: 'none',
                                    lineHeight: 1.4,
                                    transition: 'color 0.15s ease',
                                  }}
                                  onMouseEnter={e => { e.currentTarget.style.color = '#D4A843' }}
                                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,239,224,0.5)' }}
                                >
                                  {city}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* States without cities */}
                        {cities.length === 0 && (
                          <p style={{ fontSize: '0.72rem', color: 'rgba(245,239,224,0.22)', margin: 0, marginTop: '0.2rem' }}>
                            All areas — contact us
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}

        </div>
      </section>

      {/* ── Mini CTA ─────────────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg,rgba(200,16,46,0.12) 0%,transparent 60%), #1A1209',
        padding: '4rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(245,239,224,0.06)',
      }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4.5vw,2.8rem)', color: '#F5EFE0', marginBottom: '1rem' }}>
            Don't See Your City?
          </h2>
          <p style={{ color: 'rgba(245,239,224,0.6)', marginBottom: '2rem', lineHeight: 1.75 }}>
            We serve communities across all 50 states. Contact us directly — if you have the space, we'll find a way to bring hibachi to you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+16027672965" className="btn-primary">(602) 767-2965</a>
            <a href="mailto:info@hibachiconnect.com" className="btn-ghost">Email Us</a>
          </div>
        </div>
      </section>

    </main>
  )
}
