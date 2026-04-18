import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import EstimationTool from '../../components/EstimationTool'

export const metadata = {
  title: 'Price Estimator | Hibachi Connect',
  description: 'Estimate the cost of your private hibachi chef event. $60 per adult, $30 per child (ages 4–12). $600 minimum. Instant pricing calculator.',
}

export default function EstimationPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: '#1A1209', paddingTop: '9rem', paddingBottom: '5rem' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              Instant Price Estimator
            </div>
            <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', color: '#F5EFE0', lineHeight: 1, marginBottom: '1rem', letterSpacing: '0.02em' }}>
              How Much Does<br />
              <span style={{ color: '#C8102E' }}>Hibachi at Home Cost?</span>
            </h1>
            <p style={{ color: 'rgba(245,239,224,0.6)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '36rem', margin: '0 auto' }}>
              Adjust your guest count and add-ons to get an instant estimate. No sign-up required.
            </p>
          </div>
        </section>

        {/* Rate cards */}
        <section style={{ background: '#C8102E', padding: '2rem 1.5rem' }}>
          <div className="max-w-3xl mx-auto">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', textAlign: 'center' }}>
              {[
                { label: 'Per Adult',   value: '$60',  sub: '13 & older' },
                { label: 'Per Child',   value: '$30',  sub: 'Ages 4–12'  },
                { label: 'Minimum',     value: '$600', sub: 'All events'  },
              ].map((r, i) => (
                <div key={i}>
                  <div className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#F5EFE0', lineHeight: 1 }}>{r.value}</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.65)', marginTop: '0.25rem' }}>{r.label}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(245,239,224,0.45)', marginTop: '0.15rem' }}>{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool */}
        <section style={{ background: '#F5F5F7', padding: '4rem 1.5rem' }}>
          <EstimationTool />
        </section>
      </main>
      <Footer />
    </>
  )
}
