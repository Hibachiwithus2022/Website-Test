import BookingForm from '../BookingForm'

export default function StateFinalCTA({ state }) {
  return (
    <section
      id="book"
      style={{
        background: '#F5F5F7',
        padding: '5rem 1.5rem',
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
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
            Ready to Book?
          </div>
          <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.4rem,6vw,4.2rem)', color: '#1A1209', marginBottom: '1rem' }}>
            Book Your Hibachi<br />
            <span style={{ color: '#C8102E' }}>Experience in {state}</span>
          </h2>
          <p style={{ color: 'rgba(26,18,9,0.55)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '34rem', margin: '0 auto' }}>
            Select your date and time — we confirm within 1 business day. No payment required to request.
          </p>
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
