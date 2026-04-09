'use client'

export default function StateFinalCTA({ state }) {
  return (
    <section
      id="book"
      style={{
        background: 'linear-gradient(135deg,rgba(200,16,46,0.07) 0%,transparent 60%), #F8F5F2',
        padding: '5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(200,16,46,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-3xl mx-auto text-center" style={{ position: 'relative' }}>
        <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
          Ready to Book?
        </div>

        <h2
          className="font-display leading-none"
          style={{ fontSize: 'clamp(2.6rem,7vw,5rem)', marginBottom: '1.25rem', color: '#1A1209' }}
        >
          Book Your Hibachi<br />
          <span style={{ color: '#C8102E' }}>Experience in {state} Today</span>
        </h2>

        <p style={{ color: 'rgba(26,18,9,0.65)', fontSize: '1.05rem', lineHeight: 1.78, marginBottom: '2.75rem', maxWidth: '38rem', margin: '0 auto 2.75rem' }}>
          Fill out the form below or call us directly. We'll confirm availability, build a custom quote, and lock in your date — typically within a few hours.
        </p>

        {/* Simple contact form */}
        <form
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(26,18,9,0.09)',
            padding: '2.5rem',
            textAlign: 'left',
            maxWidth: '560px',
            margin: '0 auto',
          }}
          onSubmit={e => { e.preventDefault(); alert('Thanks! We\'ll be in touch within a few hours.') }}
        >
          <div style={{ display: 'grid', gap: '1rem' }} className="sm:grid-cols-2">
            <div>
              <label style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Name</label>
              <input type="text" placeholder="Your name" required className="form-input" />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Phone</label>
              <input type="tel" placeholder="(602) 767-2965" required className="form-input" />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>City in {state}</label>
              <input type="text" placeholder={`City, ${state}`} className="form-input" />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Guest Count</label>
              <input type="number" placeholder="# of guests" min="10" className="form-input" />
            </div>
            <div className="sm:col-span-2">
              <label style={{ fontSize: '0.75rem', color: 'rgba(26,18,9,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Event Date</label>
              <input type="date" className="form-input" style={{ colorScheme: 'light' }} />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}>
            Request My Quote in {state}
          </button>
        </form>

        {/* Trust badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
          {[
            '✓ No deposit to inquire',
            '✓ Response within hours',
            '✓ Free custom quote',
          ].map((badge) => (
            <span key={badge} style={{ fontSize: '0.8rem', color: 'rgba(26,18,9,0.45)', letterSpacing: '0.04em' }}>{badge}</span>
          ))}
        </div>

        {/* Phone */}
        <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(26,18,9,0.45)' }}>
          Or call / text us directly:{' '}
          <a href="tel:+16027672965" style={{ color: '#C8102E', fontWeight: 600, textDecoration: 'none' }}>
            (602) 767-2965
          </a>
        </div>
      </div>
    </section>
  )
}
