'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FEATURED_CITIES } from '../lib/cities'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0E0B04', borderTop: '1px solid rgba(245,239,224,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Image src="/brand/logo.png" alt="Hibachi Connect" width={72} height={72} className="mb-4 rounded-lg" />
            <p style={{ fontSize: '0.88rem', color: 'rgba(245,239,224,0.48)', lineHeight: 1.75, maxWidth: '22rem' }}>
              Hibachi Connect is the nation's leading platform for private hibachi chef experiences. We bring the teppanyaki show to your backyard — serving all 50 states.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[
                { label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M2 2h20v20H2z' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 38, height: 38,
                    background: 'rgba(245,239,224,0.06)', border: '1px solid rgba(245,239,224,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,16,46,0.5)'; e.currentTarget.style.background = 'rgba(200,16,46,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,239,224,0.1)'; e.currentTarget.style.background = 'rgba(245,239,224,0.06)' }}
                >
                  <svg width="16" height="16" fill="none" stroke="rgba(245,239,224,0.65)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.38)', marginBottom: '1rem' }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Menu',         href: '#menu' },
                { label: 'Pricing',      href: '#pricing' },
                { label: 'Locations',    href: '#locations' },
                { label: 'Reviews',      href: '#reviews' },
                { label: 'FAQ',          href: '#faq' },
                { label: 'Book Now',     href: '/booking' },
                { label: 'Blog',         href: '/blog' },
              ].map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{ fontSize: '0.88rem', color: 'rgba(245,239,224,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C8102E'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,239,224,0.55)'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.38)', marginBottom: '1rem' }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+16027672965" style={{ fontSize: '0.9rem', color: 'rgba(245,239,224,0.6)', textDecoration: 'none' }}>
                (602) 767-2965
              </a>
              <a href="mailto:info@hibachiconnect.com" style={{ fontSize: '0.9rem', color: 'rgba(245,239,224,0.6)', textDecoration: 'none' }}>
                info@hibachiconnect.com
              </a>
              <div style={{ fontSize: '0.88rem', color: 'rgba(245,239,224,0.55)' }}>
                All 50 U.S. States
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <a href="/booking" className="btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.8rem', display: 'inline-flex' }}>
                  Book Now
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* City links for SEO */}
        <div style={{ borderTop: '1px solid rgba(245,239,224,0.06)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.68rem', color: 'rgba(245,239,224,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Private Hibachi Chef Near You
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem' }}>
            {FEATURED_CITIES.map(c => (
              <Link
                key={c.slug}
                href={`/locations/${c.stateSlug}/${c.slug}`}
                style={{ fontSize: '0.78rem', color: 'rgba(245,239,224,0.38)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C8102E'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,239,224,0.38)'}
              >
                Hibachi {c.city}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(245,239,224,0.06)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(245,239,224,0.25)' }}>
            © {year} Hibachi Connect — hibachiconnect.com. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link
              href="/terms"
              style={{ fontSize: '0.75rem', color: 'rgba(245,239,224,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8102E'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,239,224,0.35)'}
            >
              Terms &amp; Conditions
            </Link>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,239,224,0.15)' }}>·</span>
            <Link
              href="/blog"
              style={{ fontSize: '0.75rem', color: 'rgba(245,239,224,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8102E'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,239,224,0.35)'}
            >
              Blog
            </Link>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,239,224,0.15)' }}>·</span>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,239,224,0.25)', margin: 0 }}>
              Not serving Hawaii or Alaska.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
