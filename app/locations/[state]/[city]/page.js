import { CITIES_BY_STATE, ALL_STATES, slugToCity } from '../../../../lib/cities'
import {
  getCityData,
  generateCityMeta,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  getSupplementalFAQs,
  getBlogPostsForCity,
  HERO_IMAGES,
} from '../../../../lib/cityData'
import { getCityLinkData, getOtherMajorCities } from '../../../../lib/internalLinks'
import Navbar  from '../../../../components/Navbar'
import Footer  from '../../../../components/Footer'
import CityHero          from '../../../../components/city/CityHero'
import CityIntro         from '../../../../components/city/CityIntro'
import CityHowItWorks    from '../../../../components/city/CityHowItWorks'
import CityPricing       from '../../../../components/city/CityPricing'
import CityWhyUs         from '../../../../components/city/CityWhyUs'
import CityOccasions     from '../../../../components/city/CityOccasions'
import CityAreasServed   from '../../../../components/city/CityAreasServed'
import CityExperience    from '../../../../components/city/CityExperience'
import CityTestimonials  from '../../../../components/city/CityTestimonials'
import CityFAQ           from '../../../../components/city/CityFAQ'
import CityNearbyLinks   from '../../../../components/city/CityNearbyLinks'
import CityRelatedPosts  from '../../../../components/city/CityRelatedPosts'
import CityFinalCTA      from '../../../../components/city/CityFinalCTA'
import CityStickyBar        from '../../../../components/city/CityStickyBar'
import ExploreStateSection  from '../../../../components/shared/ExploreStateSection'

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const params = []
  for (const [stateSlug, cities] of Object.entries(CITIES_BY_STATE)) {
    for (const city of cities) {
      params.push({
        state: stateSlug,
        city:  city.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      })
    }
  }
  return params
}

// ── Dynamic metadata ──────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const citySlug  = params.city
  const cityData  = getCityData(citySlug)
  const stateData = ALL_STATES.find(s => s.slug === params.state)
  const stateName = stateData?.state || slugToCity(params.state)
  const cityName  = cityData?.cityName || slugToCity(citySlug)
  const stateAbbr = cityData?.stateAbbr || params.state.toUpperCase().slice(0, 2)

  if (cityData) {
    const meta = generateCityMeta(cityData)
    return {
      title:       meta.title,
      description: meta.description,
      keywords:    meta.keywords,
      alternates:  { canonical: meta.canonical },
      openGraph:   { title: meta.og.title, description: meta.og.description },
      twitter:     { card: 'summary_large_image', title: meta.twitter.title, description: meta.twitter.description },
    }
  }

  // Fallback metadata for cities not in cityData.js yet
  return {
    title:       `Private Hibachi Chef in ${cityName}, ${stateName} | Hibachi Connect`,
    description: `Book a private hibachi chef in ${cityName}, ${stateName}. Professional teppanyaki at your home starting at $55/person. Full setup & cleanup. Contact Hibachi Connect today.`,
    keywords:    `hibachi ${cityName}, private hibachi chef ${cityName}, hibachi at home ${cityName} ${stateAbbr}, hibachi catering ${cityName}`,
    alternates:  { canonical: `https://hibachiconnect.com/locations/${params.state}/${citySlug}` },
    openGraph:   { title: `Hibachi at Home in ${cityName}, ${stateName} | Hibachi Connect`, description: `Professional private hibachi chef in ${cityName}. We bring the grill, ingredients & entertainment to your home. Starting at $55/adult.` },
  }
}

// ── City page ─────────────────────────────────────────────────────────────────
export default function CityPage({ params }) {
  const citySlug    = params.city
  const stateEntry  = ALL_STATES.find(s => s.slug === params.state)
  const stateName   = stateEntry?.state || slugToCity(params.state)
  const cityData    = getCityData(citySlug)
  const cityName    = cityData?.cityName  || slugToCity(citySlug)
  const stateAbbr   = cityData?.stateAbbr || params.state.toUpperCase().slice(0, 2)

  // Build props — use cityData if available, fall back to generic
  const variant           = cityData?.variant ?? 0
  const nearbyCities      = cityData?.nearbyCities      ?? (CITIES_BY_STATE[params.state] || []).filter(c => c !== cityName).slice(0, 10)
  const nearbyMajorCities = cityData?.nearbyMajorCities ?? []
  const localHighlights   = cityData?.localHighlights   ?? []
  const featuredOccasions = cityData?.featuredOccasions ?? []
  const faqSet            = cityData?.faqSet            ?? []
  const testimonials      = cityData?.testimonials      ?? []
  const heroImage         = cityData?.heroImage         ?? HERO_IMAGES[variant % HERO_IMAGES.length]
  const supplementalFaqs  = getSupplementalFAQs(faqSet, 4)
  const relatedPosts      = getBlogPostsForCity(variant, 3)
  const cityLinkData      = getCityLinkData(citySlug)
  const otherMajorCities  = getOtherMajorCities(params.state, citySlug)

  // JSON-LD schemas
  const lbSchema  = generateLocalBusinessSchema({ cityName, stateName, stateSlug: params.state })
  const faqSchema = generateFAQSchema(faqSet.length > 0 ? faqSet : [
    { q: `Do you serve ${cityName}, ${stateName}?`,          a: `Yes — we serve ${cityName} and all surrounding areas in ${stateName}. Our chefs travel to your location with a full teppan grill, all ingredients, and complete setup.` },
    { q: 'How much does a private hibachi chef cost?',       a: 'Our standard rate is $55 per adult and $30 per child (12 and under). The minimum event total is $550.' },
    { q: 'Can hibachi be done indoors?',                     a: 'Yes — in large spaces with adequate ventilation. Most events are outdoors, but covered patios, large garages, and open indoor spaces work well.' },
    { q: 'What do I need to provide?',                       a: 'Tables and chairs for your guests. We bring everything else: grill, propane, all food, sauces, plates, and cleanup.' },
  ])
  const bcSchema  = generateBreadcrumbSchema(cityName, stateName, params.state)

  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      <Navbar />

      <main>
        {/* 1. Hero */}
        <CityHero
          cityName={cityName}
          stateName={stateName}
          stateSlug={params.state}
          variant={variant}
          heroImage={heroImage}
        />

        {/* 2. Unique intro + local highlights */}
        <CityIntro
          cityName={cityName}
          stateName={stateName}
          localHighlights={localHighlights}
          uniqueIntroVariant={cityData?.uniqueIntroVariant ?? variant}
        />

        {/* 3. How It Works */}
        <CityHowItWorks cityName={cityName} />

        {/* 4. Pricing */}
        <CityPricing cityName={cityName} stateName={stateName} />

        {/* 5. Why us (rotating) */}
        <CityWhyUs
          cityName={cityName}
          uniqueWhyUsVariant={cityData?.uniqueWhyUsVariant ?? variant}
        />

        {/* 6. Occasions grid */}
        <CityOccasions cityName={cityName} featuredOccasions={featuredOccasions} />

        {/* 7. Areas served */}
        <CityAreasServed
          cityName={cityName}
          stateName={stateName}
          nearbyCities={nearbyCities}
        />

        {/* 8. Experience / differentiator */}
        <CityExperience cityName={cityName} variant={variant} />

        {/* 9. Testimonials */}
        <CityTestimonials cityName={cityName} testimonials={testimonials} />

        {/* 10. FAQ */}
        <CityFAQ
          cityName={cityName}
          stateName={stateName}
          stateAbbr={stateAbbr}
          faqSet={faqSet}
          supplementalFaqs={supplementalFaqs}
        />

        {/* 11. Internal links to nearby cities + state */}
        <CityNearbyLinks
          cityName={cityName}
          stateName={stateName}
          stateSlug={params.state}
          nearbyMajorCities={nearbyMajorCities}
          nearbyCities={nearbyCities}
        />

        {/* 12. Explore state — links to other major cities + back to state hub */}
        <ExploreStateSection
          cityName={cityName}
          stateName={stateName}
          stateSlug={params.state}
          stateAbbr={stateAbbr}
          otherMajorCities={otherMajorCities}
          contextualSentence={cityLinkData?.contextualSentence}
        />

        {/* 13. Related blog posts */}
        <CityRelatedPosts
          cityName={cityName}
          posts={relatedPosts}
        />

        {/* 13. Final CTA + booking form */}
        <CityFinalCTA
          cityName={cityName}
          stateName={stateName}
          stateAbbr={stateAbbr}
          uniqueClosingVariant={cityData?.uniqueClosingVariant ?? variant}
        />
      </main>

      <Footer />

      {/* Sticky mobile conversion bar */}
      <CityStickyBar cityName={cityName} />
    </>
  )
}
