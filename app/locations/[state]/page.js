import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import StateHero           from '../../../components/state/StateHero'
import StateIntro          from '../../../components/state/StateIntro'
import StateFeaturedCities from '../../../components/state/StateFeaturedCities'
import StateCityGrid       from '../../../components/state/StateCityGrid'
import StateCoverage       from '../../../components/state/StateCoverage'
import StateWhyUs          from '../../../components/state/StateWhyUs'
import StatePricing        from '../../../components/state/StatePricing'
import StateFAQ            from '../../../components/state/StateFAQ'
import StateFinalCTA       from '../../../components/state/StateFinalCTA'
import { ALL_STATES, CITIES_BY_STATE } from '../../../lib/cities'
import { getStateData } from '../../../lib/stateData'
import { getStateLinkData } from '../../../lib/internalLinks'

// ── Static params — generates a page for every state ────────────────────────
export async function generateStaticParams() {
  return ALL_STATES.map(s => ({ state: s.slug }))
}

// ── Dynamic metadata per state ───────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const stateEntry = ALL_STATES.find(s => s.slug === params.state)
  const state      = stateEntry?.state || params.state
  const stateData  = getStateData(params.state)

  return {
    title:       `Private Hibachi Chef in ${state} | Hibachi Connect`,
    description: `Book a private hibachi chef anywhere in ${state}. Professional teppanyaki at your home or backyard starting at $60/person. Serving all ${state} cities — contact Hibachi Connect today.`,
    keywords:    `hibachi ${state}, private hibachi chef ${state}, hibachi at home ${state}, hibachi catering ${state}, backyard hibachi ${state}, teppanyaki ${state}`,
    alternates:  { canonical: `https://hibachiconnect.com/locations/${params.state}` },
    openGraph: {
      title:       `Hibachi at Home in ${state} | Hibachi Connect`,
      description: `Professional private hibachi chef in ${state}. We bring the grill, all ingredients, and live entertainment to your backyard or event venue.`,
    },
  }
}

// ── State page component ─────────────────────────────────────────────────────
export default function StatePage({ params }) {
  const stateEntry   = ALL_STATES.find(s => s.slug === params.state)
  const state        = stateEntry?.state || params.state.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  const stateData    = getStateData(params.state)
  const cities       = CITIES_BY_STATE[params.state] || []
  const stateLinkData = getStateLinkData(params.state)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type':    'Service',
    name:       `Private Hibachi Chef in ${state}`,
    provider:   { '@type': 'Organization', name: 'Hibachi Connect', url: 'https://hibachiconnect.com' },
    areaServed: { '@type': 'State', name: state, containedInPlace: { '@type': 'Country', name: 'United States' } },
    description: `Professional private hibachi chef experience throughout ${state}. We bring the teppanyaki grill, all ingredients, and full entertainment to your home or event venue.`,
    offers: { '@type': 'Offer', price: '60', priceCurrency: 'USD', description: 'Per adult, minimum $600' },
    telephone: '+16027672965',
    email: 'info@hibachiconnect.com',
  }

  // Neighboring states for internal linking (grab a few from the ALL_STATES list)
  const stateIdx = ALL_STATES.findIndex(s => s.slug === params.state)
  const nearbyStates = ALL_STATES
    .filter((_, i) => i !== stateIdx)
    .slice(Math.max(0, stateIdx - 3), stateIdx + 4)
    .slice(0, 6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main style={{ paddingTop: 80 }}>

        {/* Hero */}
        <StateHero state={state} stateSlug={params.state} stateData={stateData} />

        {/* SEO intro + quick facts */}
        <StateIntro state={state} stateData={stateData} />

        {/* Featured top cities — rich cards with descriptions */}
        {stateLinkData?.featuredCities?.length > 0 && (
          <StateFeaturedCities
            stateName={state}
            stateSlug={params.state}
            featuredCities={stateLinkData.featuredCities}
            contextualSentence={stateLinkData.contextualSentence}
          />
        )}

        {/* Full city grid */}
        <StateCityGrid state={state} stateSlug={params.state} cities={cities} />

        {/* Coverage section */}
        <StateCoverage state={state} stateData={stateData} />

        {/* Why choose us */}
        <StateWhyUs state={state} />

        {/* Pricing */}
        <StatePricing state={state} />

        {/* FAQ */}
        <StateFAQ state={state} stateData={stateData} />

        {/* Final CTA + booking form */}
        <StateFinalCTA state={state} />

        {/* Internal linking — other state pages */}
        {nearbyStates.length > 0 && (
          <section style={{ background: '#1A1209', padding: '3rem 1.5rem', borderTop: '1px solid rgba(245,239,224,0.06)' }}>
            <div className="max-w-5xl mx-auto">
              <h3
                className="font-display"
                style={{ fontSize: '1.4rem', color: 'rgba(245,239,224,0.6)', marginBottom: '1.25rem' }}
              >
                Also Serving Other States
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {nearbyStates.map(s => (
                  <Link
                    key={s.slug}
                    href={`/locations/${s.slug}`}
                    className="nearby-city-link"
                  >
                    Hibachi in {s.state}
                  </Link>
                ))}
                <Link href="/locations" className="nearby-city-link">
                  View All States →
                </Link>
              </div>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  )
}
