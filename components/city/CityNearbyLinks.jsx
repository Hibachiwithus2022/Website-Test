'use client'
import Link from 'next/link'

function cityToSlug(city) {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export default function CityNearbyLinks({ cityName, stateName, stateSlug, nearbyMajorCities = [], nearbyCities = [] }) {
  // Show up to 6 nearby cities (major cities first)
  const displayCities = [
    ...nearbyMajorCities,
    ...nearbyCities.filter(c => !nearbyMajorCities.includes(c)),
  ].slice(0, 8)

  return (
    <section style={{ background: '#F8F5F2', padding: '4rem 1.5rem', borderTop: '1px solid rgba(26,18,9,0.08)' }}>
      <div className="max-w-5xl mx-auto">

        <div style={{ display: 'grid', gap: '3rem', alignItems: 'start' }} className="md:grid-cols-[1fr_auto]">

          {/* Nearby city cards */}
          <div>
            <div className="red-pill" style={{ marginBottom: '1.25rem' }}>More {stateName} Cities</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', color: '#1A1209', lineHeight: 1.05, marginBottom: '2rem' }}>
              Also Serving Nearby<br />
              <span style={{ color: '#C8102E' }}>Cities in {stateName}</span>
            </h2>
            <div style={{ display: 'grid', gap: '0.75rem' }} className="sm:grid-cols-2 lg:grid-cols-4">
              {displayCities.map((city) => (
                <Link
                  key={city}
                  href={`/locations/${stateSlug}/${cityToSlug(city)}`}
                  style={{
                    display: 'block',
                    padding: '1rem 1.25rem',
                    background: '#FFFFFF',
                    border: '1px solid rgba(26,18,9,0.09)',
                    textDecoration: 'none',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(200,16,46,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(200,16,46,0.35)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#FFFFFF'
                    e.currentTarget.style.borderColor = 'rgba(26,18,9,0.09)'
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: '#C8102E', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Hibachi at Home</div>
                  <div style={{ fontWeight: 600, color: '#1A1209', fontSize: '0.95rem' }}>{city}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(26,18,9,0.38)', marginTop: '0.15rem' }}>{stateName}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(26,18,9,0.09)',
            padding: '1.75rem',
            minWidth: 200,
            alignSelf: 'start',
          }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.45)', marginBottom: '1.25rem' }}>
              Quick Links
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li>
                <Link href="/" style={{ fontSize: '0.88rem', color: 'rgba(26,18,9,0.65)', textDecoration: 'none', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#C8102E' }}>›</span> Homepage
                </Link>
              </li>
              <li>
                <Link href="/locations" style={{ fontSize: '0.88rem', color: 'rgba(26,18,9,0.65)', textDecoration: 'none', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#C8102E' }}>›</span> All Locations
                </Link>
              </li>
              <li>
                <Link href={`/locations/${stateSlug}`} style={{ fontSize: '0.88rem', color: 'rgba(26,18,9,0.65)', textDecoration: 'none', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#C8102E' }}>›</span> {stateName} Page
                </Link>
              </li>
              <li>
                <a href="#pricing" style={{ fontSize: '0.88rem', color: 'rgba(26,18,9,0.65)', textDecoration: 'none', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#C8102E' }}>›</span> View Pricing
                </a>
              </li>
              <li>
                <a href="/booking" style={{ fontSize: '0.88rem', color: '#C8102E', textDecoration: 'none', fontWeight: 600, display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span>›</span> Book Now
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
