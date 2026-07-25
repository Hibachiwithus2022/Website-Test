import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import EstimationTool from '../../components/EstimationTool'
import { CountryProvider } from '../../components/CountryContext'
import CountrySelector from '../../components/CountrySelector'
import RateBand from '../../components/RateBand'

export const metadata = {
  title: 'Price Estimator | Hibachi Connect',
  description: 'Estimate the cost of your private hibachi chef event. $60 per adult, $30 per child (ages 4–12). $600 minimum. Instant pricing calculator.',
  alternates: { canonical: 'https://hibachiconnect.com/estimation' },
}

export default function EstimationPage() {
  return (
    <>
      <Navbar />
      <CountryProvider>
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
              <p style={{ color: 'rgba(245,239,224,0.6)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '36rem', margin: '0 auto 2rem' }}>
                Adjust your guest count and add-ons to get an instant estimate. No sign-up required.
              </p>
              <CountrySelector />
            </div>
          </section>

          {/* Rate cards */}
          <RateBand />

          {/* Tool */}
          <section style={{ background: '#F5F5F7', padding: '4rem 1.5rem' }}>
            <EstimationTool />
          </section>
        </main>
      </CountryProvider>
      <Footer />
    </>
  )
}
