import BookingForm from '../BookingForm'
import { CLOSING_VARIANTS } from '../../lib/cityData'

export default function CityFinalCTA({ cityName, stateName, stateAbbr, uniqueClosingVariant = 0 }) {
  const v = CLOSING_VARIANTS[uniqueClosingVariant % CLOSING_VARIANTS.length]

  return (
    <section
      id="book"
      style={{
        background: '#F5F5F7',
        padding: '5.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(200,16,46,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-3xl mx-auto" style={{ position: 'relative' }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>Ready to Book?</div>
          <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.4rem,6vw,4.2rem)', color: '#1A1209', marginBottom: '1rem' }}>
            {v.headline(cityName)}
          </h2>
          <p style={{ color: 'rgba(26,18,9,0.55)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '34rem', margin: '0 auto 1rem' }}>
            {v.sub(cityName)}
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)',
            padding: '0.4rem 0.9rem', fontSize: '0.78rem', color: '#D4A843', fontWeight: 600,
          }}>
            ⚡ {v.urgency}
          </div>
        </div>

        {/* Booking calendar */}
        <BookingForm />

        {/* Contact fallback */}
        <p className="text-center" style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(26,18,9,0.4)' }}>
          Prefer to call?{' '}
          <a href="tel:+16027672965" style={{ color: '#C8102E', fontWeight: 600, textDecoration: 'none' }}>
            (602) 767-2965
          </a>
        </p>

      </div>
    </section>
  )
}
