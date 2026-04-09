'use client'
import { useState } from 'react'
import { CLOSING_VARIANTS } from '../../lib/cityData'

export default function CityFinalCTA({ cityName, stateName, stateAbbr, uniqueClosingVariant = 0 }) {
  const [submitted, setSubmitted] = useState(false)
  const v = CLOSING_VARIANTS[uniqueClosingVariant % CLOSING_VARIANTS.length]

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="book"
      style={{
        background: 'linear-gradient(135deg,rgba(200,16,46,0.07) 0%,transparent 60%), #FFFFFF',
        padding: '5.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(200,16,46,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-4xl mx-auto" style={{ position: 'relative' }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>Ready to Book?</div>
          <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.8rem,7vw,5rem)', color: '#1A1209', marginBottom: '1.25rem' }}>
            {v.headline(cityName)}
          </h2>
          <p style={{ color: 'rgba(26,18,9,0.6)', fontSize: '1.05rem', lineHeight: 1.78, maxWidth: '38rem', margin: '0 auto 1.25rem' }}>
            {v.sub(cityName)}
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)',
            padding: '0.45rem 1rem', fontSize: '0.8rem', color: '#D4A843', fontWeight: 600,
          }}>
            ⚡ {v.urgency}
          </div>
        </div>

        {/* Two-column layout: form + side info */}
        <div style={{ display: 'grid', gap: '2.5rem', alignItems: 'start' }} className="lg:grid-cols-[1fr_280px]">

          {/* Booking form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              style={{
                background: '#F8F5F2',
                border: '1px solid rgba(26,18,9,0.09)',
                padding: '2.5rem',
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="font-display" style={{ fontSize: '1.4rem', color: '#1A1209', marginBottom: '0.3rem' }}>
                  Get Your Free Quote
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(26,18,9,0.45)' }}>
                  Response within a few hours · No commitment required
                </div>
              </div>

              <div style={{ display: 'grid', gap: '1rem' }} className="sm:grid-cols-2">
                <FormField label="Your Name" type="text" placeholder="Full name" required />
                <FormField label="Phone Number" type="tel" placeholder="(602) 767-2965" required />
                <FormField label={`City in ${stateAbbr}`} type="text" placeholder={`e.g., ${cityName}`} />
                <FormField label="# of Guests" type="number" placeholder="Minimum 10" min="10" />
                <FormField label="Event Date" type="date" fullWidth style={{ colorScheme: 'dark' }} />
                <div className="sm:col-span-2">
                  <label style={{ fontSize: '0.72rem', color: 'rgba(26,18,9,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                    Occasion (optional)
                  </label>
                  <select
                    className="form-input"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="">Select occasion type...</option>
                    {['Birthday Party','Bachelorette Party','Bachelor Party','Anniversary','Corporate Event','Graduation Party','Family Reunion','Date Night','Holiday Party','Other'].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem', fontSize: '0.95rem' }}>
                Get My Free Quote for {cityName}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              <p style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.38)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.6 }}>
                By submitting you agree to be contacted by Hibachi Connect regarding your event.
              </p>
            </form>
          ) : (
            <div style={{
              background: 'rgba(200,16,46,0.08)', border: '1px solid rgba(200,16,46,0.3)',
              padding: '3rem', textAlign: 'center',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <div className="font-display" style={{ fontSize: '2rem', color: '#1A1209', marginBottom: '0.75rem' }}>
                Request Received!
              </div>
              <p style={{ color: 'rgba(26,18,9,0.65)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                We'll reach out within a few hours to confirm availability and build your custom quote for {cityName}.
              </p>
              <div style={{ fontSize: '0.9rem', color: 'rgba(26,18,9,0.45)' }}>
                Questions? Call or text:{' '}
                <a href="tel:+16027672965" style={{ color: '#C8102E', fontWeight: 600, textDecoration: 'none' }}>
                  (602) 767-2965
                </a>
              </div>
            </div>
          )}

          {/* Side panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Contact */}
            <div style={{ background: '#F8F5F2', border: '1px solid rgba(26,18,9,0.09)', padding: '1.75rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.38)', marginBottom: '1rem' }}>
                Prefer to Call?
              </div>
              <a href="tel:+16027672965" style={{ display: 'block', fontFamily: 'var(--font-bebas), sans-serif', fontSize: '1.6rem', color: '#C8102E', textDecoration: 'none', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                (602) 767-2965
              </a>
              <div style={{ fontSize: '0.82rem', color: 'rgba(26,18,9,0.45)' }}>Call or text anytime. We respond fast.</div>
              <a href="mailto:info@hibachiconnect.com" style={{ display: 'block', marginTop: '0.75rem', fontSize: '0.85rem', color: 'rgba(26,18,9,0.55)', textDecoration: 'none' }}>
                info@hibachiconnect.com
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ background: '#F8F5F2', border: '1px solid rgba(26,18,9,0.09)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  '✓ No deposit to inquire',
                  '✓ Free custom quote',
                  '✓ Response within hours',
                  '✓ 5.0 star service guarantee',
                  '✓ Full setup & cleanup included',
                ].map((badge) => (
                  <div key={badge} style={{ fontSize: '0.83rem', color: 'rgba(26,18,9,0.55)', display: 'flex', gap: '0.4rem' }}>
                    <span style={{ color: '#C8102E' }}>{badge.split(' ')[0]}</span>
                    <span>{badge.slice(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function FormField({ label, type, placeholder, required, min, fullWidth, style: extraStyle }) {
  return (
    <div className={fullWidth ? 'sm:col-span-2' : ''}>
      <label style={{ fontSize: '0.72rem', color: 'rgba(26,18,9,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        className="form-input"
        style={extraStyle}
      />
    </div>
  )
}
