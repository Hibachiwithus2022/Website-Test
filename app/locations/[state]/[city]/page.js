import { CITIES_BY_STATE, ALL_STATES, slugToCity, isCanadaSlug } from '../../../../lib/cities'

const STATE_ABBR = {
  texas: 'TX', florida: 'FL', california: 'CA', 'new-york': 'NY',
  colorado: 'CO', georgia: 'GA', arizona: 'AZ', illinois: 'IL',
  nevada: 'NV', washington: 'WA', virginia: 'VA', 'north-carolina': 'NC',
  'new-jersey': 'NJ', delaware: 'DE', oregon: 'OR', missouri: 'MO',
  'south-carolina': 'SC',
  ontario: 'ON',
  michigan: 'MI',
  maryland: 'MD',
  tennessee: 'TN',
}
import {
  getCityData,
  generateCityMeta,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  getSupplementalFAQs,
  getBlogPostsForCity,
  BLOG_POSTS,
  HERO_IMAGES,
} from '../../../../lib/cityData'
import { getTexasCityData, getTexasBlogPosts, getTexasHowItWorks, getTexasSectionVariant, getTexasCityImage, getTexasSupportImages } from '../../../../lib/texasData'
import { getFloridaCityData, getFloridaBlogPosts, getFloridaHowItWorks, getFloridaSectionVariant, getFloridaCityImage, getFloridaSupportImages } from '../../../../lib/floridaData'
import { getNcCityData, getNcBlogPosts, getNcHowItWorks, getNcSectionVariant, getNcCityImage, getNcSupportImages } from '../../../../lib/ncData'
import { getNjCityData, getNjBlogPosts, getNjHowItWorks, getNjSectionVariant, getNjCityImage, getNjSupportImages } from '../../../../lib/njData'
import { getNyCityData, getNyBlogPosts, getNyHowItWorks, getNySectionVariant, getNyCityImage, getNySupportImages } from '../../../../lib/nyData'
import { getDelawareCityData, getDeBlogPosts, getDeHowItWorks, getDeSectionVariant, getDeCityImage, getDeSupportImages } from '../../../../lib/delawareData'
import { getOregonCityData, getOrBlogPosts, getOrHowItWorks, getOrSectionVariant, getOrCityImage, getOrSupportImages } from '../../../../lib/oregonData'
import { getMissouriCityData, getMoBlogPosts, getMoHowItWorks, getMoSectionVariant, getMoCityImage, getMoSupportImages } from '../../../../lib/missouriData'
import { getGeorgiaCityData, getGaBlogPosts, getGaHowItWorks, getGaSectionVariant, getGaCityImage, getGaSupportImages } from '../../../../lib/georgiaData'
import { getSouthCarolinaCityData, getScBlogPosts, getScHowItWorks, getScSectionVariant, getScCityImage, getScSupportImages } from '../../../../lib/southcarolinaData'
import { getOntarioCityData, getOnBlogPosts, getOnHowItWorks, getOnSectionVariant, getOnCityImage, getOnSupportImages } from '../../../../lib/ontarioData'
import { getVirginiaCityData, getVaBlogPosts, getVaHowItWorks, getVaSectionVariant, getVaCityImage, getVaSupportImages } from '../../../../lib/virginiaData'
import { getMichiganCityData, getMiBlogPosts, getMiHowItWorks, getMiSectionVariant, getMiCityImage, getMiSupportImages } from '../../../../lib/michiganData'
import { getMarylandCityData, getMdBlogPosts, getMdHowItWorks, getMdSectionVariant, getMdCityImage, getMdSupportImages } from '../../../../lib/marylandData'
import { getTennesseeCityData, getTnBlogPosts, getTnHowItWorks, getTnSectionVariant, getTnCityImage, getTnSupportImages } from '../../../../lib/tennesseeData'
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
    ?? (params.state === 'texas'          ? getTexasCityData(citySlug, slugToCity(citySlug))   : null)
    ?? (params.state === 'florida'        ? getFloridaCityData(citySlug, slugToCity(citySlug)) : null)
    ?? (params.state === 'north-carolina' ? getNcCityData(citySlug, slugToCity(citySlug))      : null)
    ?? (params.state === 'new-jersey'     ? getNjCityData(citySlug, slugToCity(citySlug))      : null)
    ?? (params.state === 'new-york'       ? getNyCityData(citySlug, slugToCity(citySlug))      : null)
    ?? (params.state === 'delaware'       ? getDelawareCityData(citySlug, slugToCity(citySlug)) : null)
    ?? (params.state === 'oregon'         ? getOregonCityData(citySlug, slugToCity(citySlug))   : null)
    ?? (params.state === 'missouri'       ? getMissouriCityData(citySlug, slugToCity(citySlug)) : null)
    ?? (params.state === 'georgia'        ? getGeorgiaCityData(citySlug, slugToCity(citySlug))  : null)
    ?? (params.state === 'south-carolina' ? getSouthCarolinaCityData(citySlug, slugToCity(citySlug)) : null)
    ?? (params.state === 'ontario'        ? getOntarioCityData(citySlug, slugToCity(citySlug))        : null)
    ?? (params.state === 'virginia'       ? getVirginiaCityData(citySlug, slugToCity(citySlug))       : null)
    ?? (params.state === 'michigan'       ? getMichiganCityData(citySlug, slugToCity(citySlug))       : null)
    ?? (params.state === 'maryland'       ? getMarylandCityData(citySlug, slugToCity(citySlug))       : null)
    ?? (params.state === 'tennessee'      ? getTennesseeCityData(citySlug, slugToCity(citySlug))      : null)
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
      openGraph:   { title: meta.og.title, description: meta.og.description, images: [{ url: meta.og.image, width: 1200, height: 630, alt: `Private hibachi chef in ${cityName}, ${stateName}` }] },
      twitter:     { card: 'summary_large_image', title: meta.twitter.title, description: meta.twitter.description, images: [meta.twitter.image] },
    }
  }

  // Fallback metadata for cities not in a state-specific data module
  const isCanada = isCanadaSlug(params.state)
  const priceLine = isCanada ? '$78 CAD/person' : '$60/person'
  const priceLineAdult = isCanada ? '$78 CAD/adult' : '$60/adult'
  const ogImage = `https://hibachiconnect.com/og?type=city&city=${encodeURIComponent(cityName)}&state=${encodeURIComponent(stateName)}`
  return {
    title:       `Private Hibachi Chef in ${cityName}, ${stateName} | Hibachi Connect`,
    description: `Book a private hibachi chef in ${cityName}, ${stateName}. Professional teppanyaki at your home starting at ${priceLine}. Full setup & cleanup. Contact Hibachi Connect today.`,
    keywords:    `hibachi ${cityName}, private hibachi chef ${cityName}, hibachi at home ${cityName} ${stateAbbr}, hibachi catering ${cityName}`,
    alternates:  { canonical: `https://hibachiconnect.com/locations/${params.state}/${citySlug}` },
    openGraph:   {
      title:       `Hibachi at Home in ${cityName}, ${stateName} | Hibachi Connect`,
      description: `Professional private hibachi chef in ${cityName}. We bring the grill, ingredients & entertainment to your home. Starting at ${priceLineAdult}.`,
      images:      [{ url: ogImage, width: 1200, height: 630, alt: `Private hibachi chef in ${cityName}, ${stateName}` }],
    },
    twitter:     { card: 'summary_large_image', images: [ogImage] },
  }
}

// ── City page ─────────────────────────────────────────────────────────────────
export default function CityPage({ params }) {
  const citySlug    = params.city
  const stateEntry  = ALL_STATES.find(s => s.slug === params.state)
  const stateName   = stateEntry?.state || slugToCity(params.state)
  const cityData    = getCityData(citySlug)
    ?? (params.state === 'texas'          ? getTexasCityData(citySlug, slugToCity(citySlug))   : null)
    ?? (params.state === 'florida'        ? getFloridaCityData(citySlug, slugToCity(citySlug)) : null)
    ?? (params.state === 'north-carolina' ? getNcCityData(citySlug, slugToCity(citySlug))      : null)
    ?? (params.state === 'new-jersey'     ? getNjCityData(citySlug, slugToCity(citySlug))      : null)
    ?? (params.state === 'new-york'       ? getNyCityData(citySlug, slugToCity(citySlug))      : null)
    ?? (params.state === 'delaware'       ? getDelawareCityData(citySlug, slugToCity(citySlug)) : null)
    ?? (params.state === 'oregon'         ? getOregonCityData(citySlug, slugToCity(citySlug))   : null)
    ?? (params.state === 'missouri'       ? getMissouriCityData(citySlug, slugToCity(citySlug)) : null)
    ?? (params.state === 'georgia'        ? getGeorgiaCityData(citySlug, slugToCity(citySlug))  : null)
    ?? (params.state === 'south-carolina' ? getSouthCarolinaCityData(citySlug, slugToCity(citySlug)) : null)
    ?? (params.state === 'ontario'        ? getOntarioCityData(citySlug, slugToCity(citySlug))        : null)
    ?? (params.state === 'virginia'       ? getVirginiaCityData(citySlug, slugToCity(citySlug))       : null)
    ?? (params.state === 'michigan'       ? getMichiganCityData(citySlug, slugToCity(citySlug))       : null)
    ?? (params.state === 'maryland'       ? getMarylandCityData(citySlug, slugToCity(citySlug))       : null)
    ?? (params.state === 'tennessee'      ? getTennesseeCityData(citySlug, slugToCity(citySlug))      : null)
  const cityName    = cityData?.cityName  || slugToCity(citySlug)
  const stateAbbr   = cityData?.stateAbbr || STATE_ABBR[params.state] || params.state.toUpperCase().slice(0, 2)

  // Build props — use cityData if available, fall back to generic
  const variant           = cityData?.variant ?? 0
  const nearbyCities      = cityData?.nearbyCities      ?? (CITIES_BY_STATE[params.state] || []).filter(c => c !== cityName).slice(0, 10)
  const nearbyMajorCities = (cityData?.nearbyMajorCities ?? []).filter(c => c !== cityName)
  const localHighlights   = cityData?.localHighlights   ?? []
  const featuredOccasions = cityData?.featuredOccasions ?? []
  const faqSet            = cityData?.faqSet            ?? []
  const testimonials      = cityData?.testimonials      ?? []
  const heroImage         = cityData?.heroImage         ?? HERO_IMAGES[variant % HERO_IMAGES.length]
  const supplementalFaqs  = getSupplementalFAQs(faqSet, 4)
  const isTexas          = params.state === 'texas'
  const isFlorida        = params.state === 'florida'
  const isNorthCarolina  = params.state === 'north-carolina'
  const isNewJersey      = params.state === 'new-jersey'
  const isNewYork        = params.state === 'new-york'
  const isDelaware       = params.state === 'delaware'
  const isOregon         = params.state === 'oregon'
  const isMissouri       = params.state === 'missouri'
  const isGeorgia        = params.state === 'georgia'
  const isSouthCarolina  = params.state === 'south-carolina'
  const isOntario        = params.state === 'ontario'
  const isVirginia       = params.state === 'virginia'
  const isMichigan       = params.state === 'michigan'
  const isMaryland       = params.state === 'maryland'
  const isTennessee      = params.state === 'tennessee'

  const relatedPosts = isTexas         ? getTexasBlogPosts(variant, 3)
                     : isFlorida       ? getFloridaBlogPosts(variant, 3)
                     : isNorthCarolina ? getNcBlogPosts(variant, 3)
                     : isNewJersey     ? getNjBlogPosts(variant, 3)
                     : isNewYork       ? getNyBlogPosts(variant, 3)
                     : isDelaware      ? getDeBlogPosts(variant, 3)
                     : isOregon        ? getOrBlogPosts(variant, 3)
                     : isMissouri      ? getMoBlogPosts(variant, 3)
                     : isGeorgia       ? getGaBlogPosts(variant, 3)
                     : isSouthCarolina ? getScBlogPosts(variant, 3)
                     : isOntario       ? getOnBlogPosts(variant, 3)
                     : isVirginia      ? getVaBlogPosts(variant, 3)
                     : isMichigan      ? getMiBlogPosts(variant, 3)
                     : isMaryland      ? getMdBlogPosts(variant, 3)
                     : isTennessee     ? getTnBlogPosts(variant, 3)
                     : getBlogPostsForCity(variant, 3)

  // Enrich relatedPosts with tag/readTime from the shared BLOG_POSTS lookup if missing
  const _blogMeta = Object.fromEntries(BLOG_POSTS.map(p => [p.slug, { tag: p.tag, readTime: p.readTime }]))
  const enrichedPosts = relatedPosts.map(p => p.tag ? p : { ...p, ...(_blogMeta[p.slug] || { tag: 'Guide', readTime: '5 min read' }) })

  // Pre-resolve state-specific data server-side (client components cannot receive functions as props)
  const _howItWorksRaw  = isTexas         ? getTexasHowItWorks(citySlug)
                        : isFlorida       ? getFloridaHowItWorks(citySlug)
                        : isNorthCarolina ? getNcHowItWorks(citySlug)
                        : isNewJersey     ? getNjHowItWorks(citySlug)
                        : isNewYork       ? getNyHowItWorks(citySlug)
                        : isDelaware      ? getDeHowItWorks(citySlug)
                        : isOregon        ? getOrHowItWorks(citySlug)
                        : isMissouri      ? getMoHowItWorks(citySlug)
                        : isGeorgia       ? getGaHowItWorks(citySlug)
                        : isSouthCarolina ? getScHowItWorks(citySlug)
                        : isOntario       ? getOnHowItWorks(citySlug)
                        : isVirginia      ? getVaHowItWorks(citySlug)
                        : isMichigan      ? getMiHowItWorks(citySlug)
                        : isMaryland      ? getMdHowItWorks(citySlug)
                        : isTennessee     ? getTnHowItWorks(citySlug)
                        : null
  const howItWorksData  = _howItWorksRaw ? {
    steps:      _howItWorksRaw.steps,
    headline:   _howItWorksRaw.headline?.(cityName)   ?? null,
    footerNote: _howItWorksRaw.footerNote?.(cityName) ?? null,
  } : null

  const _sectionRaw = isTexas         ? getTexasSectionVariant(citySlug)
                    : isFlorida       ? getFloridaSectionVariant(citySlug)
                    : isNorthCarolina ? getNcSectionVariant(citySlug)
                    : isNewJersey     ? getNjSectionVariant(citySlug)
                    : isNewYork       ? getNySectionVariant(citySlug)
                    : isDelaware      ? getDeSectionVariant(citySlug)
                    : isOregon        ? getOrSectionVariant(citySlug)
                    : isMissouri      ? getMoSectionVariant(citySlug)
                    : isGeorgia       ? getGaSectionVariant(citySlug)
                    : isSouthCarolina ? getScSectionVariant(citySlug)
                    : isOntario       ? getOnSectionVariant(citySlug)
                    : isVirginia      ? getVaSectionVariant(citySlug)
                    : isMichigan      ? getMiSectionVariant(citySlug)
                    : isMaryland      ? getMdSectionVariant(citySlug)
                    : isTennessee     ? getTnSectionVariant(citySlug)
                    : null
  const _cityImg    = isTexas         ? getTexasCityImage(citySlug)
                    : isFlorida       ? getFloridaCityImage(citySlug)
                    : isNorthCarolina ? getNcCityImage(citySlug)
                    : isNewJersey     ? getNjCityImage(citySlug)
                    : isNewYork       ? getNyCityImage(citySlug)
                    : isDelaware      ? getDeCityImage(citySlug)
                    : isOregon        ? getOrCityImage(citySlug)
                    : isMissouri      ? getMoCityImage(citySlug)
                    : isGeorgia       ? getGaCityImage(citySlug)
                    : isSouthCarolina ? getScCityImage(citySlug)
                    : isOntario       ? getOnCityImage(citySlug)
                    : isVirginia      ? getVaCityImage(citySlug)
                    : isMichigan      ? getMiCityImage(citySlug)
                    : isMaryland      ? getMdCityImage(citySlug)
                    : isTennessee     ? getTnCityImage(citySlug)
                    : null
  const sectionVariant  = _sectionRaw ? {
    heroPill:              _sectionRaw.heroPill,
    experiencePill:        _sectionRaw.experiencePill,
    experiencePoints:      typeof _sectionRaw.experiencePoints === 'function' ? _sectionRaw.experiencePoints(cityName) : _sectionRaw.experiencePoints,
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
  const _supportRaw   = isTexas         ? getTexasSupportImages(citySlug, variant)
                      : isFlorida       ? getFloridaSupportImages(citySlug, variant)
                      : isNorthCarolina ? getNcSupportImages(citySlug, variant)
                      : isNewJersey     ? getNjSupportImages(citySlug, variant)
                      : isNewYork       ? getNySupportImages(citySlug, variant)
                      : isDelaware      ? getDeSupportImages(citySlug, variant)
                      : isOregon        ? getOrSupportImages(citySlug, variant)
                      : isMissouri      ? getMoSupportImages(citySlug)
                      : isGeorgia       ? getGaSupportImages(citySlug)
                      : isSouthCarolina ? getScSupportImages(citySlug)
                      : isOntario       ? getOnSupportImages(citySlug)
                      : isVirginia      ? getVaSupportImages(citySlug, variant)
                      : isMichigan      ? getMiSupportImages(citySlug)
                      : isMaryland      ? getMdSupportImages(citySlug)
                      : isTennessee     ? getTnSupportImages(citySlug)
                      : null
  const supportImages  = _supportRaw ? {
    testimonial: {
      src:        _supportRaw.testimonial.src,
      alt:        _supportRaw.testimonial.alt(cityName),
      caption:    _supportRaw.testimonial.caption,
      intro:      _supportRaw.testimonial.intro ? _supportRaw.testimonial.intro(cityName) : null,
      trustBadge: _supportRaw.testimonial.trustBadge ?? null,
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
    { q: 'How much does a private hibachi chef cost?',       a: isOntario ? 'Our rate is $78 CAD per adult and $40 CAD per child (ages 4–12). Children 3 and under eat free. The event minimum is $780 CAD.' : 'Our rate is $60 per adult and $30 per child (ages 4–12). Children 3 and under eat free. The event minimum is $600.' },
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
          heroH1Prefix={cityData?.heroH1Prefix}
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
        <CityPricing cityName={cityName} stateName={stateName} variant={variant} isOntario={isOntario} />

        {/* 5. Why us (rotating) */}
        <CityWhyUs
          cityName={cityName}
          uniqueWhyUsVariant={cityData?.uniqueWhyUsVariant ?? variant}
          isOntario={isOntario}
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

        {/* 9. Testimonials (supportImage integrated inside when present) */}
        <CityTestimonials
          cityName={cityName}
          testimonials={testimonials}
          subheading={sectionVariant?.testimonialSubheading}
          variant={variant}
          supportImage={supportImages?.testimonial ?? null}
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
          posts={enrichedPosts}
        />

        {/* 13. Final CTA + booking form (supportImage integrated inside when present) */}
        <CityFinalCTA
          cityName={cityName}
          stateName={stateName}
          stateAbbr={stateAbbr}
          uniqueClosingVariant={cityData?.uniqueClosingVariant ?? variant}
          supportImage={null}
        />
      </main>

      <Footer />

      {/* Sticky mobile conversion bar */}
      <CityStickyBar cityName={cityName} stateSlug={params.state} />
    </>
  )
}
