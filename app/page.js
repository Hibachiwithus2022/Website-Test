import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import LocationSearch from '../components/LocationSearch'
import HowItWorks   from '../components/HowItWorks'
import SocialProof  from '../components/SocialProof'
import Experience   from '../components/Experience'
import Pricing      from '../components/Pricing'
import Occasions    from '../components/Occasions'
import WhyChoose    from '../components/WhyChoose'
import FeaturedCities from '../components/FeaturedCities'
import FAQ          from '../components/FAQ'
import FinalCTA     from '../components/FinalCTA'
import Footer       from '../components/Footer'

// ── Structured data (JSON-LD) for rich search results ──────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type':    'LocalBusiness',
  name:       'Hibachi Connect',
  description:'Private hibachi chef service connecting customers with professional teppanyaki chefs across the United States.',
  url:        'https://hibachiconnect.com',
  telephone:  '+16027672965',
  email:      'info@hibachiconnect.com',
  areaServed: 'United States (50 states)',
  priceRange: '$60 per person',
  serviceType:'Private Hibachi Chef / Teppanyaki Catering',
  aggregateRating: {
    '@type':       'AggregateRating',
    ratingValue:   '5.0',
    reviewCount:   '200',
    bestRating:    '5',
    worstRating:   '1',
  },
}

// ── Stats band (server component — no JS needed) ────────────────────────────
function StatsBand() {
  const STATS = [
    { num: '200+',  label: 'Events Hosted'    },
    { num: '50',    label: 'States Covered'   },
    { num: '5.0★',  label: 'Average Rating'   },
    { num: '100%',  label: 'Would Rebook'     },
  ]
  return (
    <section style={{ background: '#C8102E', padding: '3.5rem 1.5rem' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {STATS.map((s, i) => (
          <div key={i}>
            <div
              className="font-display leading-none text-brand-cream"
              style={{ fontSize: 'clamp(2.4rem,5vw,3.6rem)' }}
            >
              {s.num}
            </div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,239,224,0.7)', marginTop: '0.4rem' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Location search */}
        <LocationSearch />

        {/* 3. How it works */}
        <HowItWorks />

        {/* 4. Social proof */}
        <SocialProof />

        {/* 5. Experience */}
        <Experience />

        {/* Stats band */}
        <StatsBand />

        {/* 6. Pricing */}
        <Pricing />

        {/* 7. Occasions */}
        <Occasions />

        {/* 8. Why Choose */}
        <WhyChoose />

        {/* 9. Featured Cities */}
        <FeaturedCities />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
