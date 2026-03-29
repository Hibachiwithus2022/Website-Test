export default function StateCoverage({ state, stateData }) {
  const citiesList = stateData.coverage.split(',').map(c => c.trim())

  return (
    <section style={{ background: '#1A1209', padding: '4.5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div style={{ display: 'grid', gap: '3rem' }} className="md:grid-cols-2">

          {/* Left: text */}
          <div>
            <div className="red-pill" style={{ marginBottom: '1.25rem' }}>Coverage Area</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.9rem,4vw,2.8rem)', color: '#F5EFE0', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Statewide Coverage<br />
              <span style={{ color: '#C8102E' }}>Across {state}</span>
            </h2>
            <p style={{ color: 'rgba(245,239,224,0.65)', lineHeight: 1.82, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {stateData.regionNotes}
            </p>
            <p style={{ color: 'rgba(245,239,224,0.55)', lineHeight: 1.82, fontSize: '0.9rem' }}>
              Travel fees may apply for locations more than 30 miles outside a primary metro area. Contact us for an exact quote — we always try to accommodate every request.
            </p>
          </div>

          {/* Right: city pills */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.4)', marginBottom: '1.25rem' }}>
              Areas We Serve
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {citiesList.map((city) => (
                <div
                  key={city}
                  style={{
                    padding: '0.35rem 0.9rem',
                    background: 'rgba(245,239,224,0.05)',
                    border: '1px solid rgba(245,239,224,0.1)',
                    fontSize: '0.82rem',
                    color: 'rgba(245,239,224,0.72)',
                  }}
                >
                  {city}
                </div>
              ))}
            </div>

            {/* What's included */}
            <div style={{ marginTop: '2.5rem' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.4)', marginBottom: '1rem' }}>
                What's Included
              </div>
              <ul style={{ fontSize: '0.9rem', color: 'rgba(245,239,224,0.7)', lineHeight: 2.1 }}>
                {[
                  'Professional teppan grill + all equipment',
                  'All ingredients (proteins, rice, veggies, sauces)',
                  'Full setup — arrive 30 min early',
                  'Complete cleanup when the show is over',
                  'Entertainment: fire tricks, onion volcano & more',
                  'You provide: table/chairs, outdoor space',
                ].map((item) => (
                  <li key={item}>✓&nbsp;&nbsp;{item}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
