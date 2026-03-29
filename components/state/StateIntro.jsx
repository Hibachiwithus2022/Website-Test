export default function StateIntro({ state, stateData }) {
  return (
    <section style={{ background: '#1A1209', padding: '4.5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div style={{ display: 'grid', gap: '3rem' }} className="lg:grid-cols-[1fr_auto]">

          {/* Main blurb */}
          <div>
            <div className="red-pill" style={{ marginBottom: '1.25rem' }}>About Our {state} Service</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.9rem,4vw,2.8rem)', color: '#F5EFE0', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Private Hibachi Chef<br />
              <span style={{ color: '#C8102E' }}>Serving All of {state}</span>
            </h2>
            <p style={{ color: 'rgba(245,239,224,0.68)', lineHeight: 1.82, fontSize: '1rem', maxWidth: '54rem', marginBottom: '1.25rem' }}>
              {stateData.blurb}
            </p>
            <p style={{ color: 'rgba(245,239,224,0.58)', lineHeight: 1.82, fontSize: '0.95rem', maxWidth: '54rem' }}>
              Our certified hibachi chefs travel to your location in {state} with a professional teppan grill, all ingredients, tableware, and full setup/cleanup service. You focus on enjoying the evening — we handle everything else.
            </p>
          </div>

          {/* Quick facts card */}
          <div style={{
            background: 'rgba(200,16,46,0.07)',
            border: '1px solid rgba(200,16,46,0.25)',
            padding: '2rem',
            minWidth: 230,
            alignSelf: 'start',
          }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '1.25rem' }}>
              Quick Facts
            </div>
            {[
              { label: 'Starting Price', value: '$55/adult' },
              { label: 'Children (12 & under)', value: '$30/child' },
              { label: 'Event Minimum', value: '$550' },
              { label: 'Min. Guest Count', value: '10 guests' },
              { label: 'Setup Time', value: '~30 min' },
              { label: 'Cleanup Included', value: 'Yes' },
            ].map((f) => (
              <div key={f.label} style={{
                display: 'flex', justifyContent: 'space-between', gap: '1rem',
                paddingBottom: '0.6rem', marginBottom: '0.6rem',
                borderBottom: '1px solid rgba(200,16,46,0.12)',
              }}>
                <span style={{ fontSize: '0.82rem', color: 'rgba(245,239,224,0.55)' }}>{f.label}</span>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#F5EFE0' }}>{f.value}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
