import { CITIES_BY_STATE, ALL_STATES, slugToCity } from '../../../../lib/cities'

const STATE_ABBR = {
  texas: 'TX', florida: 'FL', california: 'CA', 'new-york': 'NY',
  colorado: 'CO', georgia: 'GA', arizona: 'AZ', illinois: 'IL',
  nevada: 'NV', washington: 'WA', virginia: 'VA', 'north-carolina': 'NC',
}
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
import { getTexasCityData, getTexasBlogPosts, getTexasHowItWorks, getTexasSectionVariant, getTexasCityImage, getTexasSupportImages } from '../../../../lib/texasData'
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
import CitySupportImage  from '../../../../components/city/CitySupportImage'
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
  const cityData  = getCityData(citySlug) ?? (params.state === 'texas' ? getTexasCityData(citySlug, slugToCity(citySlug)) : null)
  const stateData = ALL_STATES.find(s => s.slug === params.state)
  const stateName = stateData?.state || slugToCity(params.state)
  const cityName  = cityData?.cityName || slugToCity(citySlug)
  const stateAbbr = cityData?.stateAbbr || STATE_ABBR[params.state] || params.state.toUpperCase().slice(0, 2)

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
    description: `Book a private hibachi chef in ${cityName}, ${stateName}. Professional teppanyaki at your home starting at $60/person. Full setup & cleanup. Contact Hibachi Connect today.`,
    keywords:    `hibachi ${cityName}, private hibachi chef ${cityName}, hibachi at home ${cityName} ${stateAbbr}, hibachi catering ${cityName}`,
    alternates:  { canonical: `https://hibachiconnect.com/locations/${params.state}/${citySlug}` },
    openGraph:   { title: `Hibachi at Home in ${cityName}, ${stateName} | Hibachi Connect`, description: `Professional private hibachi chef in ${cityName}. We bring the grill, ingredients & entertainment to your home. Starting at $60/adult.` },
  }
}

// ── City page ─────────────────────────────────────────────────────────────────
export default function CityPage({ params }) {
  const citySlug    = params.city
  const stateEntry  = ALL_STATES.find(s => s.slug === params.state)
  const stateName   = stateEntry?.state || slugToCity(params.state)
  const cityData    = getCityData(citySlug) ?? (params.state === 'texas' ? getTexasCityData(citySlug, slugToCity(citySlug)) : null)
  const cityName    = cityData?.cityName  || slugToCity(citySlug)
  const stateAbbr   = cityData?.stateAbbr || STATE_ABBR[params.state] || params.state.toUpperCase().slice(0, 2)

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
  const relatedPosts      = params.state === 'texas'
    ? getTexasBlogPosts(variant, 3)
    : getBlogPostsForCity(variant, 3)
  // Pre-resolve Texas-specific data (call all functions server-side — client components cannot receive functions as props)
  const _howItWorksRaw  = params.state === 'texas' ? getTexasHowItWorks(citySlug) : null
  const howItWorksData  = _howItWorksRaw ? {
    steps:      _howItWorksRaw.steps,
    headline:   _howItWorksRaw.headline?.(cityName)   ?? null,
    footerNote: _howItWorksRaw.footerNote?.(cityName) ?? null,
  } : null

  const _sectionRaw     = params.state === 'texas' ? getTexasSectionVariant(citySlug) : null
  const _cityImg        = params.state === 'texas' ? getTexasCityImage(citySlug) : null
  const sectionVariant  = _sectionRaw ? {
    heroPill:              _sectionRaw.heroPill,
    experiencePill:        _sectionRaw.experiencePill,
    experiencePoints:      _sectionRaw.experiencePoints,
    experienceImage:       _cityImg?.src ?? _sectionRaw.experienceImage,
    experienceImageAlt:    _cityImg ? _cityImg.alt(cityName) : _sectionRaw.experienceImageAlt(cityName),
    areasPill:             _sectionRaw.areasPill,
    areasHeadline:         _sectionRaw.areasHeadline(cityName),
    areasIntro:            [_sectionRaw.areasIntro[0](cityName, stateName), _sectionRaw.areasIntro[1](cityName)],
    areasButton:           _sectionRaw.areasButton,
    occasionPill:          _sectionRaw.occasionPill,
    occasionHeadline:      _sectionRaw.occasionHeadline(cityName),
    occasionSubtext:       _sectionRaw.occasionSubtext,
    faqPill:               _sectionRaw.faqPill,
    faqHeadline:           _sectionRaw.faqHeadline(cityName, stateAbbr),
    testimonialSubheading: _sectionRaw.testimonialSubheading,
  } : null

  const cityLinkData      = getCityLinkData(citySlug)
  const otherMajorCities  = getOtherMajorCities(params.state, citySlug)

  // Pre-resolve support images (above testimonials + above final CTA)
  const _supportRaw    = params.state === 'texas' ? getTexasSupportImages(citySlug, variant) : null
  const supportImages  = _supportRaw ? {
    testimonial: {
      src:     _supportRaw.testimonial.src,
      alt:     _supportRaw.testimonial.alt(cityName),
      caption: _supportRaw.testimonial.caption,
    },
    cta: {
      src:     _supportRaw.cta.src,
      alt:     _supportRaw.cta.alt(cityName),
      caption: _supportRaw.cta.caption,
    },
  } : null

  // JSON-LD schemas
  const lbSchema  = generateLocalBusinessSchema({ cityName, stateName, stateSlug: params.state })
  const faqSchema = generateFAQSchema(faqSet.length > 0 ? faqSet : [
    { q: `Do you serve ${cityName}, ${stateName}?`,          a: `Yes — we serve ${cityName} and all surrounding areas in ${stateName}. Our chefs travel to your location with a full teppan grill, all ingredients, and complete setup.` },
    { q: 'How much does a private hibachi chef cost?',       a: 'Our rate is $60 per adult and $30 per child (ages 4–12). Children 3 and under eat free. The event minimum is $600.' },
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
          heroSubtitle={cityData?.heroSubtitle}
          heroPill={sectionVariant?.heroPill}
        />

        {/* 2. Unique intro + local highlights */}
        <CityIntro
          cityName={cityName}
          stateName={stateName}
          localHighlights={localHighlights}
          uniqueIntroVariant={cityData?.uniqueIntroVariant ?? variant}
        />

        {/* 3. How It Works */}
        <CityHowItWorks cityName={cityName} howItWorksData={howItWorksData} />

        {/* 4. Pricing */}
        <CityPricing cityName={cityName} stateName={stateName} variant={variant} />

        {/* 5. Why us (rotating) */}
        <CityWhyUs
          cityName={cityName}
          uniqueWhyUsVariant={cityData?.uniqueWhyUsVariant ?? variant}
        />

        {/* 6. Occasions grid */}
        <CityOccasions
          cityName={cityName}
          featuredOccasions={featuredOccasions}
          occasionPill={sectionVariant?.occasionPill}
          occasionHeadline={sectionVariant?.occasionHeadline}
          occasionSubtext={sectionVariant?.occasionSubtext}
        />

        {/* 7. Areas served */}
        <CityAreasServed
          cityName={cityName}
          stateName={stateName}
          nearbyCities={nearbyCities}
          areasPill={sectionVariant?.areasPill}
          areasHeadline={sectionVariant?.areasHeadline}
          areasIntro={sectionVariant?.areasIntro}
          areasButton={sectionVariant?.areasButton}
        />

        {/* 8. Experience / differentiator */}
        <CityExperience
          cityName={cityName}
          variant={variant}
          experiencePill={sectionVariant?.experiencePill}
          experiencePoints={sectionVariant?.experiencePoints}
          experienceImage={sectionVariant?.experienceImage}
          experienceImageAlt={sectionVariant?.experienceImageAlt}
        />

        {/* Support image — above Testimonials */}
        {supportImages?.testimonial && (
          <CitySupportImage
            src={supportImages.testimonial.src}
            alt={supportImages.testimonial.alt}
            caption={supportImages.testimonial.caption}
          />
        )}

        {/* 9. Testimonials */}
        <CityTestimonials
          cityName={cityName}
          testimonials={testimonials}
          subheading={sectionVariant?.testimonialSubheading}
          variant={variant}
        />

        {/* 10. FAQ */}
        <CityFAQ
          cityName={cityName}
          stateName={stateName}
          stateAbbr={stateAbbr}
          faqSet={faqSet}
          supplementalFaqs={supplementalFaqs}
          faqPill={sectionVariant?.faqPill}
          faqHeadline={sectionVariant?.faqHeadline}
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

        {/* Support image — above Final CTA */}
        {supportImages?.cta && (
          <CitySupportImage
            src={supportImages.cta.src}
            alt={supportImages.cta.alt}
            caption={supportImages.cta.caption}
          />
        )}

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
