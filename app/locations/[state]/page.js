import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { getAllPosts } from '../../../lib/blog'
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
      images: [{ url: 'https://hibachiconnect.com/pics/hero-1.jpg', width: 1200, height: 630, alt: `Private hibachi chef serving ${state}` }],
    },
    twitter: { card: 'summary_large_image', images: ['https://hibachiconnect.com/pics/hero-1.jpg'] },
  }
}

// ── State page component ─────────────────────────────────────────────────────
export default function StatePage({ params }) {
  const stateEntry   = ALL_STATES.find(s => s.slug === params.state)
  const state        = stateEntry?.state || params.state.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  const stateData    = getStateData(params.state)
  const cities       = CITIES_BY_STATE[params.state] || []
  const stateLinkData = getStateLinkData(params.state)
  const blogPosts    = getAllPosts().slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type':    'Service',
    name:       `Private Hibachi Chef in ${state}`,
    provider:   { '@type': 'Organization', name: 'Hibachi Connect', url: 'https://hibachiconnect.com' },
    areaServed: { '@type': 'State', name: state, containedInPlace: { '@type': 'Country', name: 'United States' } },
    description: `Professional private hibachi chef experience throughout ${state}. We bring the teppanyaki grill, all ingredients, and full entertainment to your home or event venue.`,
    offers: { '@type': 'Offer', price: '60', priceCurrency: 'USD', description: 'Per adult, minimum $600' },
    telephone: '+12015653878',
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

        {/* Related blog posts */}
        <section style={{ background: '#F5EFE0', padding: '3rem 1.5rem', borderTop: '1px solid rgba(26,18,9,0.07)' }}>
          <div className="max-w-5xl mx-auto">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 className="font-display" style={{ fontSize: 'clamp(1.4rem,3vw,1.8rem)', color: '#1A1209', margin: 0 }}>
                Helpful Guides for Your {state} Event
              </h3>
              <Link href="/blog" style={{ fontSize: '0.82rem', fontWeight: 600, color: '#C8102E', textDecoration: 'none' }}>All Articles →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              {blogPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ background: '#fff', borderRadius: '12px', padding: '20px 22px', textDecoration: 'none', display: 'block', boxShadow: '0 2px 8px rgba(26,18,9,0.06)', border: '1px solid rgba(26,18,9,0.06)' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8102E' }}>{post.category}</span>
                  <p style={{ color: '#1A1209', fontSize: '15px', fontWeight: 700, lineHeight: 1.4, margin: '6px 0 8px' }}>{post.title}</p>
                  <span style={{ color: '#C8102E', fontSize: '12px', fontWeight: 600 }}>Read →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
