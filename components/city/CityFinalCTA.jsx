import { CLOSING_VARIANTS } from '../../lib/cityData'

export default function CityFinalCTA({ cityName, stateName, stateAbbr, uniqueClosingVariant = 0, supportImage = null }) {
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

      <div style={{ position: 'relative', maxWidth: supportImage ? '64rem' : '48rem', margin: '0 auto' }}>

        {/* Header — 2-column with image, or centered without */}
        {supportImage ? (
          <div style={{ display: 'grid', gap: '3rem', alignItems: 'center', marginBottom: '3rem' }} className="lg:grid-cols-[1fr_260px]">

            {/* Left: text (left-aligned on desktop, centered on mobile) */}
            <div className="text-center lg:text-left">
              <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>Ready to Book?</div>
              <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.4rem,6vw,4rem)', color: '#1A1209', marginBottom: '1rem' }}>
                {v.headline(cityName)}
              </h2>
              <p style={{ color: 'rgba(26,18,9,0.55)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1rem', maxWidth: '36rem' }}>
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

            {/* Right: framed image card — desktop only */}
            <div className="hidden lg:block" style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={supportImage.src}
                  alt={supportImage.alt}
                  loading="lazy"
                  style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', filter: 'saturate(1.06)' }}
                />
                {/* Subtle overlays */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,18,9,0.3) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,16,46,0.04)', mixBlendMode: 'multiply' }} />
              </div>
              {/* Offset frame — inset direction opposite to testimonials for variety */}
              <div style={{
                position: 'absolute', top: 8, left: 8, right: -8, bottom: -8,
                border: '1px solid rgba(200,16,46,0.2)', pointerEvents: 'none',
              }} />
              {/* Red accent bar — top right corner */}
              <div style={{ position: 'absolute', top: -2, right: 8, width: 40, height: 3, background: '#C8102E' }} />
            </div>

          </div>
        ) : (
          /* Default centered header */
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
        )}

        {/* Booking calendar — constrained to max-w-3xl */}
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <iframe
            src="https://app.acuityscheduling.com/schedule.php?owner=39391414&ref=embedded_csp"
            title="Schedule Appointment"
            width="100%"
            height="800"
            frameBorder="0"
            allow="payment"
            style={{ display: 'block', border: 'none', borderRadius: '12px', minHeight: '800px' }}
          />
          <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript" async />

          {/* Contact fallback */}
          <div className="text-center" style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(26,18,9,0.55)', marginBottom: '0.25rem' }}>
              Questions before booking?
            </p>
            <a
              href="tel:+12015653878"
              style={{ fontSize: '0.875rem', color: '#C8102E', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              📞 Call or Text: (201) 565-3878
            </a>
            <a
              href="mailto:info@hibachiconnect.com"
              style={{ fontSize: '0.875rem', color: '#C8102E', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              ✉️ Email: info@hibachiconnect.com
            </a>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(26,18,9,0.08)' }}>
              <a href="/menu" style={{ fontSize: '0.82rem', color: 'rgba(26,18,9,0.5)', textDecoration: 'none' }}>View Full Menu</a>
              <span style={{ color: 'rgba(26,18,9,0.2)', fontSize: '0.82rem' }}>·</span>
              <a href="/estimation" style={{ fontSize: '0.82rem', color: 'rgba(26,18,9,0.5)', textDecoration: 'none' }}>Estimate Your Price</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
