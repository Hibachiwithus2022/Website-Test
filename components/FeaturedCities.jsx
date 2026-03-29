'use client'
import Link from 'next/link'
import RevealWrapper from './RevealWrapper'
import { FEATURED_CITIES } from '../lib/cities'

export default function FeaturedCities() {
  return (
    <section className="section" style={{ background: '#1A1209' }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <RevealWrapper>
            <div className="red-pill" style={{ display: 'inline-block' }}>Popular Locations</div>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">
              Hibachi Chef Near You —<br />
              <span style={{ color: '#C8102E' }}>Top U.S. Cities</span>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p style={{ color: 'rgba(245,239,224,0.55)', maxWidth: '38rem', margin: '1rem auto 0' }}>
              Don't see your city? We likely cover it. Search above or contact us — we have chefs in every state.
            </p>
          </RevealWrapper>
        </div>

        {/* City cards grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {FEATURED_CITIES.map((c, i) => (
            <RevealWrapper key={c.slug} delay={i * 0.06}>
              <Link
                href={`/locations/${c.stateSlug}/${c.slug}`}
                style={{
                  display: 'flex', flexDirection: 'column',
                  background: 'rgba(245,239,224,0.04)',
                  border: '1px solid rgba(245,239,224,0.09)',
                  padding: '1.75rem 1.5rem',
                  textDecoration: 'none',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, background 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform   = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'rgba(200,16,46,0.4)'
                  e.currentTarget.style.background  = 'rgba(200,16,46,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform   = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(245,239,224,0.09)'
                  e.currentTarget.style.background  = 'rgba(245,239,224,0.04)'
                }}
              >
                {/* Top bar on hover via pseudo — using inline workaround */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <svg width="16" height="16" fill="none" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <svg width="14" height="14" fill="none" stroke="rgba(245,239,224,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>

                <div className="font-display" style={{ fontSize: '1.5rem', color: '#F5EFE0', lineHeight: 1.1, marginBottom: '0.3rem' }}>
                  {c.city}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(245,239,224,0.45)', marginBottom: '0.75rem' }}>
                  {c.state}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(245,239,224,0.3)', marginTop: 'auto' }}>
                  {c.pop} residents
                </div>

                <div style={{ marginTop: '1rem', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8102E' }}>
                  View chefs →
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>

        {/* All states CTA */}
        <RevealWrapper>
          <div className="text-center">
            <Link
              href="/locations"
              className="btn-ghost"
              style={{ display: 'inline-flex' }}
            >
              Browse All 50 States
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
