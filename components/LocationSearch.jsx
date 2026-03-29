'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FEATURED_CITIES } from '../lib/cities'

export default function LocationSearch() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    const slug = query.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-')
    router.push(`/locations/search?q=${encodeURIComponent(query.trim())}`)
  }

  // Quick links — top 7 cities
  const quickCities = FEATURED_CITIES.slice(0, 7)

  return (
    <section id="locations" className="section" style={{ background: 'linear-gradient(180deg,#1E1410 0%,#1A1209 100%)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="red-pill" style={{ display: 'inline-block' }}>Find Hibachi Near You</div>
          <h2 className="section-title">
            Private Hibachi Chefs<br />
            <span style={{ color: '#C8102E' }}>Across the U.S.</span>
          </h2>
          <p className="mt-4" style={{ color: 'rgba(245,239,224,0.58)', maxWidth: '38rem', margin: '1rem auto 0' }}>
            We connect you with local hibachi chefs in your city. Search your location or pick from popular cities below.
          </p>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex gap-0 max-w-2xl mx-auto mb-10">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2"
              width="18" height="18" fill="none" stroke="rgba(245,239,224,0.35)"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Enter your city or state…"
              className="form-input"
              style={{ paddingLeft: '3rem', borderRight: 'none' }}
              aria-label="Search for hibachi in your city"
            />
          </div>
          <button type="submit" className="btn-primary" style={{ flexShrink: 0, borderRadius: 0 }}>
            Search
          </button>
        </form>

        {/* Quick city links */}
        <div>
          <p style={{ textAlign: 'center', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.38)', marginBottom: '1rem' }}>
            Popular Cities
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {quickCities.map(c => (
              <Link
                key={c.slug}
                href={`/locations/${c.stateSlug}/${c.slug}`}
                className="quick-city-link"
              >
                {c.city}, {c.state.split(' ')[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .quick-city-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1.1rem;
          background: rgba(245,239,224,0.05);
          border: 1px solid rgba(245,239,224,0.12);
          color: rgba(245,239,224,0.75);
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1);
        }
        .quick-city-link:hover {
          background: rgba(200,16,46,0.12);
          border-color: rgba(200,16,46,0.45);
          color: #F5EFE0;
          transform: translateY(-2px);
        }
        .quick-city-link:focus-visible {
          outline: 2px solid #D4A843;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  )
}
