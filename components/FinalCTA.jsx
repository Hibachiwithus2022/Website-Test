import RevealWrapper from './RevealWrapper'

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="section"
      style={{
        background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,16,46,0.06) 0%, transparent 70%), #F8F5F2`,
        textAlign: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto">

        <RevealWrapper>
          <div className="red-pill" style={{ display: 'inline-block' }}>Ready to Book?</div>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <h2
            className="font-display leading-none"
            style={{ color: '#1A1209', fontSize: 'clamp(2.8rem,7vw,5.5rem)', letterSpacing: '0.02em', marginBottom: '1.25rem' }}
          >
            Ready to Book Your<br />
            <span style={{ color: '#C8102E' }}>Hibachi Experience?</span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <p style={{ color: 'rgba(26,18,9,0.6)', maxWidth: '36rem', margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: 1.75 }}>
            Join hundreds of families and event hosts who've made their gatherings unforgettable with Hibachi Connect. Nationwide. Professional. Guaranteed.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.3}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <a href="tel:+16027672965" className="btn-primary" style={{ fontSize: '0.95rem' }}>
              <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21H6.6a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Book Now — (602) 767-2965
            </a>
            <a href="/estimation" className="btn-ghost">
              Get a Free Quote
            </a>
          </div>
        </RevealWrapper>

        {/* Trust badges */}
        <RevealWrapper delay={0.4}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {[
              { icon: '✓', text: 'No credit card to hold your date' },
              { icon: '✓', text: 'Response within 24 hours' },
              { icon: '✓', text: 'Free cancellation 7+ days out' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'rgba(26,18,9,0.45)' }}>
                <span style={{ color: '#C8102E', fontWeight: 700 }}>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
