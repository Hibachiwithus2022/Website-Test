// =============================================================================
// lib/alabamaData.js — Alabama Expansion
// 15 cities · 6 geographic themes · indices 620–640
// Generic: 620–625 | City-specific: 626–640
//
// Theme 0: Birmingham Luxury Estate       (Mountain Brook, Vestavia Hills)
// Theme 1: Birmingham Metro & Corporate   (Birmingham, Hoover, Homewood)
// Theme 2: Huntsville & North Alabama Tech (Huntsville, Madison)
// Theme 3: Alabama University Markets     (Tuscaloosa, Auburn)
// Theme 4: Central Alabama                (Montgomery)
// Theme 5: Gulf Coast & Mobile Bay        (Mobile, Fairhope, Daphne, Gulf Shores, Orange Beach)
//
// Batch 1 (profileIdx 0–4): Birmingham, Mountain Brook, Vestavia Hills, Hoover, Huntsville
// Batch 2 (profileIdx 5–8): Homewood, Madison, Tuscaloosa, Auburn
// Batch 3 (profileIdx 9–11): Montgomery, Mobile, Fairhope
// Batch 4 (profileIdx 12–14): Daphne, Gulf Shores, Orange Beach
// =============================================================================

// ─── Theme heroes ─────────────────────────────────────────────────────────────
const AL_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0 — Birmingham Luxury Estate
  '/pics/hero-2.jpg',                 // T1 — Birmingham Metro & Corporate
  '/pics/hibachi-at-home.jpg',        // T2 — Huntsville & North Alabama Tech
  '/pics/hibachi-event.jpg',          // T3 — Alabama University Markets
  '/pics/hero-1.jpg',                 // T4 — Central Alabama
  '/pics/hibachi-pool-party.jpg',     // T5 — Gulf Coast & Mobile Bay
]

// ─── Theme H1 prefixes (for non-profileIdx cities) ────────────────────────────
const AL_THEME_H1_PREFIXES = [
  'Hibachi at Home in',      // T0
  'Hibachi at Home in',      // T1
  'Hibachi at Home in',      // T2
  'Mobile Hibachi in',       // T3
  'Private Hibachi Chef in', // T4
  'Hibachi at Home in',      // T5
]

// ─── Profile H1 prefixes (all 15 cities, by profileIdx) ──────────────────────
const AL_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in', // 0  — Birmingham
  'Hibachi at Home in',      // 1  — Mountain Brook
  'Hibachi at Home in',      // 2  — Vestavia Hills
  'Hibachi at Home in',      // 3  — Hoover
  'Hibachi at Home in',      // 4  — Huntsville
  'Hibachi Catering in',     // 5  — Homewood
  'Hibachi at Home in',      // 6  — Madison
  'Mobile Hibachi in',       // 7  — Tuscaloosa
  'Hibachi Catering in',     // 8  — Auburn
  'Private Hibachi Chef in', // 9  — Montgomery
  'Hibachi at Home in',      // 10 — Mobile
  'Backyard Hibachi in',     // 11 — Fairhope
  'Backyard Hibachi in',     // 12 — Daphne
  'Mobile Hibachi in',       // 13 — Gulf Shores
  'Private Hibachi Chef in', // 14 — Orange Beach
]

// ─── Hero subtitles (6 themes) ───────────────────────────────────────────────
const AL_HERO_SUBTITLES = [
  (city) => `Estate Private Dining · Executive Entertaining · Milestone Celebrations · Serving ${city} & the Birmingham Area`,
  (city) => `Corporate Events · Family Milestones · Graduation Parties · Serving ${city} & the Birmingham Metro`,
  (city) => `Aerospace & Tech Families · Graduation Celebrations · Corporate Events · Serving ${city} & North Alabama`,
  (city) => `Graduation Weekends · Alumni Events · Football Season · Serving ${city} & the University Community`,
  (city) => `Military Families · Government Professionals · Private Dining · Serving ${city} & Central Alabama`,
  (city) => `Beach Houses · Vacation Rentals · Gulf Coast Celebrations · Serving ${city} & the Alabama Coast`,
]

// ─── Local highlights (6 themes) ─────────────────────────────────────────────
const AL_LOCAL_HIGHLIGHTS = [
  // T0 — Birmingham Luxury Estate
  (city) => [
    `Estate private dining for executive households throughout ${city} and the greater Birmingham area`,
    'Premium proteins — filet mignon, lobster tail, Chilean sea bass, wagyu — as the default expectation at estate events',
    `Perfect for milestone anniversaries, landmark birthdays, and private dining occasions at ${city} estate properties`,
    `Graduation season (May–June) in ${city} and Vestavia Hills books 4–5 weeks ahead for Saturday events`,
    'Dual-station capacity for large estate gatherings of 25–60+ guests; single station for intimate dinners of 10–20',
    'Full setup and complete cleanup — your estate property is exactly as it was when the chef arrived',
  ],
  // T1 — Birmingham Metro & Corporate
  (city) => [
    `Corporate team events and client appreciation dinners throughout ${city} and the Birmingham metro`,
    'Perfect for UAB healthcare professional milestones, law firm gatherings, and financial services client entertainment',
    `Ideal for graduation parties, family milestones, and backyard celebrations across the ${city} area`,
    `${city} weekend dates book 2–3 weeks out; graduation season (May–June) fills 3–5 weeks ahead`,
    'For groups over 25, dual chef stations run simultaneously — the format built for large Birmingham family events',
    'Full setup and cleanup included — chef arrives with the complete teppan grill, all proteins, and every piece of equipment',
  ],
  // T2 — Huntsville & North Alabama Tech
  (city) => [
    `Private events for North Alabama's aerospace, defense, and engineering professional household community`,
    `Perfect for Redstone Arsenal milestone dinners, Cummings Research Park team events, and NASA professional gatherings`,
    `Ideal for graduation parties in ${city} engineering-suburb communities and corporate team appreciation events`,
    `${city} graduation season (May–June) books 3–5 weeks ahead for peak Saturday events`,
    'Dual-station capacity for groups over 25 — the format for large North Alabama engineering-family graduation parties',
    'Chef arrives with the full self-contained propane teppan grill — no gas hookup required at any North Alabama property',
  ],
  // T3 — Alabama University Markets
  (city) => [
    `Graduation weekend private events for University of Alabama and Auburn University families traveling to ${city}`,
    `Perfect for groups who need the celebration to stay at the rental property during commencement weekend`,
    `Ideal for alumni gatherings, football-weekend home events, and university-adjacent family milestone dinners in ${city}`,
    `UA and Auburn graduation weekends book 4–6 weeks ahead — every ${city} restaurant is committed weeks before commencement`,
    `Mobile hibachi at your ${city} vacation rental or short-term property — fully self-contained, no hookup required`,
    `Full cleanup after every event — your ${city} rental is exactly as it was when the chef arrived`,
  ],
  // T4 — Central Alabama
  (city) => [
    `Private events for ${city}'s government professionals, military families, and corporate households`,
    'Perfect for Maxwell AFB milestone dinners, state government professional gatherings, and executive family celebrations',
    `Ideal for graduation parties, anniversary dinners, and corporate team appreciation events in Central Alabama`,
    `${city} private events typically book 2–3 weeks ahead; holiday season and graduation months fill 3–4 weeks out`,
    `Chef serves ${city} and all of Central Alabama — fully self-contained setup, no property modifications required`,
    'Full setup and cleanup included — your Central Alabama property stays spotless when the chef leaves',
  ],
  // T5 — Gulf Coast & Mobile Bay
  (city) => [
    `Beach house and vacation rental hibachi events throughout ${city} and the Alabama Gulf Coast`,
    'Perfect for family reunions, bachelor/bachelorette weekends, and vacation group dinners at Gulf Coast rental properties',
    `Ideal for Gulf Coast destination celebrations, birthday weekends, and multi-generational vacation dinners in ${city}`,
    `${city} peak summer (June–August) books 3–5 weeks ahead; Gulf Coast beach season dates fill fast`,
    `Chef comes directly to your ${city} beach house, condo, or vacation rental — no Highway 59 reservation battles`,
    'Full setup and complete cleanup — your Gulf Coast rental property is spotless when the chef leaves',
  ],
]

// ─── Occasions (6 themes · flat strings required) ─────────────────────────────
const AL_OCCASIONS = [
  // T0 — Birmingham Luxury Estate
  ['Birthday Parties', 'Anniversary Dinners', 'Graduation Parties', 'Estate Dinner Parties', 'Client Appreciation Events', 'Holiday Gatherings', 'Engagement Parties', 'Retirement Celebrations', 'Family Milestones', 'Wedding Rehearsal Dinners'],
  // T1 — Birmingham Metro & Corporate
  ['Corporate Team Dinners', 'Client Appreciation Events', 'Graduation Parties', 'Birthday Parties', 'Anniversary Dinners', 'Bachelorette Parties', 'Family Reunions', 'Holiday Gatherings', 'Retirement Parties', 'Backyard Celebrations'],
  // T2 — Huntsville & North Alabama Tech
  ['Graduation Parties', 'Corporate Team Events', 'Birthday Parties', 'Military Promotion Dinners', 'Anniversary Dinners', 'Family Reunions', 'Client Appreciation Events', 'Holiday Gatherings', 'Retirement Parties', 'Neighborhood Gatherings'],
  // T3 — Alabama University Markets
  ['Graduation Weekends', 'Alumni Gatherings', 'Birthday Parties', 'Football Season Events', 'Family Reunions', 'Anniversary Dinners', 'Bachelorette Parties', 'Group Vacation Dinners', 'Parent Weekend Events', 'Spring Celebration Dinners'],
  // T4 — Central Alabama
  ['Birthday Parties', 'Graduation Parties', 'Military Milestone Dinners', 'Corporate Team Events', 'Anniversary Dinners', 'Family Reunions', 'Retirement Parties', 'Holiday Gatherings', 'Client Appreciation Events', 'Neighborhood Celebrations'],
  // T5 — Gulf Coast & Mobile Bay
  ['Family Reunions', 'Bachelorette Weekends', 'Birthday Trips', 'Beach House Vacation Dinners', 'Bachelor Parties', 'Girls Weekends', 'Anniversary Getaways', 'Group Rental Events', 'Wedding Weekends', 'Summer Vacation Dinners'],
]

// ─── FAQ sets (6 themes) ──────────────────────────────────────────────────────
const AL_FAQ_SETS = [
  // T0 — Birmingham Luxury Estate
  (city) => [
    {
      q: `Can you set up at an estate property or large backyard in ${city}?`,
      a: `Absolutely — estate homes, covered terraces, and large backyard spaces throughout ${city} and the Birmingham area are our most common setup environment. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most Mountain Brook and Vestavia Hills estate properties exceed this easily. We bring everything — no outdoor kitchen or gas hookup required.`,
    },
    {
      q: `What premium proteins are available for ${city} estate events?`,
      a: `Beyond the standard menu (chicken, steak, shrimp, salmon), we offer filet mignon, lobster tail, Chilean sea bass, and wagyu as per-guest upgrades. For most ${city} estate events, premium proteins are the default rather than the conversation. We recommend building the menu around the occasion — most anniversary and milestone estate dinners go full premium.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation party?`,
      a: `Graduation season in ${city} and the broader Birmingham estate market runs through May and June, and Saturday events fill 4–5 weeks in advance. We strongly recommend booking as soon as your graduation date is confirmed. Weekday graduation dinners have more flexibility — 2–3 weeks' notice is usually sufficient for Monday through Thursday events.`,
    },
    {
      q: `Can you handle large estate gatherings for 30 or more guests in ${city}?`,
      a: `Yes — large estate events are among our most common ${city} bookings. For groups over 25, we deploy dual chef stations running in parallel. Estate properties with large terraces and outdoor entertaining areas are ideal for the dual-station format. A 40-guest anniversary dinner at a ${city} property with two chefs running simultaneously is a completely different experience than a crowded restaurant private room.`,
    },
    {
      q: `Do you serve all of the Birmingham estate market including Hoover, Homewood, and Midtown?`,
      a: `Yes — we serve the full Birmingham metro including ${city}, Vestavia Hills, Mountain Brook, Hoover, Homewood, Birmingham, Midtown, Bluff Park, and all surrounding communities. Most Birmingham area locations fall within our standard service radius with no added travel fee.`,
    },
    {
      q: `What do I need to provide for an estate hibachi event in ${city}?`,
      a: `Tables and chairs for your guests. We bring everything else: the full propane teppan grill, all proteins, vegetables, fried rice, house-made sauces, plates, chopsticks, and serving utensils. Complete setup before dinner and full cleanup after — your estate property is spotless when we leave.`,
    },
  ],
  // T1 — Birmingham Metro & Corporate
  (city) => [
    {
      q: `Can you set up at a ${city} corporate venue or outdoor office space?`,
      a: `Yes — corporate outdoor spaces, private event venues, and residential backyards throughout ${city} and the Birmingham metro are among our most common setups. We need a flat outdoor area of at least 10×10 ft. Most Birmingham corporate properties and residential backyard spaces meet this requirement. We coordinate with event contacts and property managers in advance when needed.`,
    },
    {
      q: `Do you serve all of the Birmingham metro area including the suburbs?`,
      a: `Yes — we serve all of greater Birmingham including ${city} and surrounding communities: Mountain Brook, Vestavia Hills, Hoover, Homewood, Trussville, Gardendale, Pelham, and all surrounding Jefferson and Shelby County communities. Most locations within 35 miles of Birmingham fall within our standard service area.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation party?`,
      a: `Graduation season (May–June) is the highest-demand window for the entire Birmingham metro. Saturday events fill 3–5 weeks ahead during commencement season. We recommend booking as soon as the graduation date is confirmed. Weekday graduation dinners have more flexibility and typically confirm within 1–2 weeks.`,
    },
    {
      q: `Can you handle large ${city} graduation or corporate events for 25 or more guests?`,
      a: `Absolutely — large family and corporate events are among our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. Birmingham-area graduation parties of 35–55 guests with dual stations are our peak-season standard. The dual format keeps everyone in the same shared experience without any wait.`,
    },
    {
      q: `Is private hibachi a good option for UAB or Birmingham corporate client entertainment?`,
      a: `It's one of the best formats available for professional entertainment. A certified teppanyaki chef performs exclusively for your group — no shared dining room, no strangers, no restaurant noise. UAB physician teams, law firm client dinners, and financial services client appreciation events have all been among our most successful ${city} bookings. The live performance element generates conversation that standard private dining rooms never do.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, fried rice, sauces, plates, chopsticks, and utensils. Full setup before the event and complete cleanup after — your ${city} venue or backyard stays spotless.`,
    },
  ],
  // T2 — Huntsville & North Alabama Tech
  (city) => [
    {
      q: `Can you set up at a ${city} backyard or suburban property?`,
      a: `Yes — suburban backyards, covered patios, and pool areas throughout ${city} and the North Alabama engineering-suburb communities are our most common setup environments. We need a flat outdoor area of at least 10×10 ft. North Alabama residential properties typically have generous outdoor spaces that work perfectly. We bring everything — fully self-contained propane teppan grill, no gas hookup required.`,
    },
    {
      q: `Do you serve Madison and surrounding North Alabama communities?`,
      a: `Yes — we serve ${city}, Madison, the Research Park corridor, and all of North Alabama. Redstone Arsenal-adjacent communities, Hampton Cove, Jones Valley, and all surrounding Madison and Limestone County communities fall within our standard service area. Most North Alabama locations have no additional travel fee.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation party?`,
      a: `North Alabama graduation season runs through May and June, and ${city} and Madison graduation weekends fill 3–5 weeks ahead. Madison City Schools and Huntsville City Schools commencement Saturdays are particularly competitive — book as soon as the date is confirmed. Weekday graduation dinners are more flexible and typically confirm within 1–2 weeks.`,
    },
    {
      q: `Can you handle a large ${city} graduation or engineering-family event for 25 or more guests?`,
      a: `Absolutely — large graduation parties are our highest-demand ${city} format. For groups over 25, we deploy dual chef stations running in parallel. A 40-person engineering-family graduation party with two chefs is the ${city} summer standard. Every guest at the same grill, same chef, same moment — the shared experience is what makes it work for multigenerational groups.`,
    },
    {
      q: `Is private hibachi a good format for Redstone Arsenal or Cummings Research Park corporate team events?`,
      a: `It's excellent. The live-fire cooking performance creates shared engagement that no conference room or restaurant private dining event can replicate. Defense contractor team milestones, NASA anniversary dinners, and aerospace corporate appreciation events at ${city} residential properties are among our most consistently well-received bookings. The chef arrives with everything — no venue logistics required.`,
    },
    {
      q: `What do I need to provide for a North Alabama hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the full propane teppan grill, all fresh proteins, vegetables, fried rice, house-made sauces, plates, and chopsticks. Complete setup before the event and full cleanup after. Your ${city} property is exactly as it was when we arrive.`,
    },
  ],
  // T3 — Alabama University Markets
  (city) => [
    {
      q: `Can you come to a UA or Auburn graduation weekend rental property in ${city}?`,
      a: `Absolutely — vacation rentals and short-term rental properties in ${city} are among our most common Alabama university-market setups. We need a flat outdoor area of at least 10×10 ft on your deck, patio, or yard. Confirm the rental property allows outdoor open-flame cooking before booking — most ${city} properties do. We bring the full self-contained setup with no gas hookup required.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation event?`,
      a: `UA and Auburn graduation weekends are among the most competitive private event dates in Alabama — every ${city} restaurant is committed weeks before commencement. We strongly recommend booking 4–6 weeks ahead for any ${city} graduation weekend event. Families traveling from multiple cities for commencement should book as soon as travel plans are confirmed.`,
    },
    {
      q: `Is private hibachi better than trying to get a restaurant reservation during ${city} graduation weekend?`,
      a: `There's no comparison. During UA or Auburn commencement weekend, every ${city} restaurant with group dining capacity is booked weeks in advance. A mobile hibachi chef at your rental property means your entire family — from grandparents to college roommates — is together at the same table with the same chef, the same experience, and zero logistics. You don't need a reservation. You need an address.`,
    },
    {
      q: `Can you serve groups of 20 to 40 at a ${city} vacation rental?`,
      a: `Yes — groups of 20–40 are our most common ${city} graduation format. For groups over 25, we bring two chef stations running simultaneously. Three generations around the grill is the standard we're built for. Most ${city} rental properties with outdoor decks or yard space handle dual-station setups easily.`,
    },
    {
      q: `Do you serve ${city} during football season for home game weekend events?`,
      a: `Yes — UA and Auburn football home game weekends are a secondary booking window for ${city} private events. The same format that works for graduation weekend works for game-day gatherings: families renting a house near campus, alumni groups with outdoor property access, and local residents hosting pre-game dinners all book the same mobile hibachi format.`,
    },
    {
      q: `What do I need to provide at a ${city} university-area rental property?`,
      a: `Tables and chairs for your guests. We bring everything else: the full propane teppan grill, all proteins, sauces, plates, and chopsticks. Confirm outdoor open-flame cooking is permitted at your rental — most ${city} properties allow it. Full setup and complete cleanup when dinner ends — your rental is spotless when the chef leaves.`,
    },
  ],
  // T4 — Central Alabama
  (city) => [
    {
      q: `Do you serve ${city} and surrounding Central Alabama communities?`,
      a: `Yes — we serve all of greater ${city} and Central Alabama including Prattville, Millbrook, Pike Road, Wetumpka, Alabaster, and all surrounding communities. Most ${city} locations fall within our standard service radius with no additional travel fee. Call or text (201) 565-3878 to confirm your address.`,
    },
    {
      q: `Can you set up for a Maxwell AFB or government professional event in ${city}?`,
      a: `Absolutely — Maxwell Air Force Base officer families, senior NCO households, and state government professional households are among the primary ${city} booking demographic. We set up at residential properties, outdoor venues, and backyard spaces throughout the ${city} area. The fully self-contained setup works at any outdoor space — no venue modifications required.`,
    },
    {
      q: `How far in advance should I book a ${city} private event?`,
      a: `${city} weekend private events typically book 2–3 weeks in advance. Graduation season (May–June) and the holiday season (November–December) fill 3–4 weeks out. Weekday events can often be arranged with 5–7 days' notice. Same-day quotes are always available for any ${city} address.`,
    },
    {
      q: `Can you handle large ${city} family or graduation events for 25 or more guests?`,
      a: `Yes — large family and graduation events are our most common ${city} format. For groups over 25, we bring two chef stations running in parallel. A 40-person graduation party with dual stations is our standard ${city} commencement-season setup. Every guest at the same grill, same performance, no waiting.`,
    },
    {
      q: `Is private hibachi a good option for ${city} corporate team events?`,
      a: `It's excellent. The live-fire cooking performance generates shared engagement that private dining rooms don't produce. Hyundai Motor Alabama teams, state agency milestone events, and professional services firm client dinners have all been among our most successful ${city} corporate bookings. The chef arrives with everything — no venue logistics for the organizer to manage.`,
    },
    {
      q: `What do I need to provide for a ${city} backyard hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the full propane teppan grill, all proteins, fried rice, vegetables, sauces, plates, and chopsticks. Full setup and complete cleanup after — your ${city} property is spotless when we leave.`,
    },
  ],
  // T5 — Gulf Coast & Mobile Bay
  (city) => [
    {
      q: `Can you come to a ${city} vacation rental or beach house?`,
      a: `Absolutely — Gulf Coast vacation rentals and beach houses are among our most popular Alabama booking locations. We come directly to your ${city} rental or coastal property. Confirm the rental allows outdoor open-flame cooking (most Gulf Coast properties do), and we handle everything from setup to complete cleanup. The fully self-contained propane teppan grill requires no hookup at any rental property.`,
    },
    {
      q: `How far in advance should I book a ${city} summer event?`,
      a: `Alabama Gulf Coast peak season runs June through August, and summer weekend dates fill 3–5 weeks ahead. Fourth of July weekend books 5–6 weeks out. Beach season bachelorette weekends and family reunion dates should be secured as soon as travel plans are confirmed. Off-season events (September–May) have more flexibility — 2–3 weeks' notice is usually sufficient.`,
    },
    {
      q: `Is private hibachi the right option for a bachelorette group at a ${city} beach house?`,
      a: `It's the best option. The combination of live fire cooking, fire tricks, flying shrimp, and everyone gathered around the grill creates exactly the energy a bachelorette group wants — and you don't have to compete for a reservation at a packed restaurant on Gulf Shores Boulevard. The chef comes to your rental, performs for 90–120 minutes, and leaves the house spotless. We've done dozens of Gulf Coast bachelorette events. The chef makes the evening.`,
    },
    {
      q: `Can you set up at a Mobile Bay property or Eastern Shore home in ${city}?`,
      a: `Yes — Mobile Bay waterfront properties, Eastern Shore estates, and Fairhope-area bay-view homes are all excellent setups. We need a flat outdoor area of at least 10×10 ft on your deck, patio, or yard. Bay-view terraces and bayfront decks work perfectly for the hibachi format — the chef arrives at your property with everything, and the bay is the backdrop for the evening.`,
    },
    {
      q: `Do you serve all of Alabama's Gulf Coast and Mobile Bay communities?`,
      a: `Yes — we serve the full Alabama Gulf Coast and Mobile Bay region: Gulf Shores, Orange Beach, Mobile, Fairhope, Daphne, Spanish Fort, Foley, Robertsdale, and all surrounding communities. Most Gulf Coast and Eastern Shore locations fall within our standard service area. For properties more than 35 miles from our nearest chef base, a travel fee may apply and is always disclosed upfront.`,
    },
    {
      q: `What happens if weather is bad during our ${city} Gulf Coast event?`,
      a: `We cook in light rain under appropriate shelter. For severe weather or lightning, we work with you to reschedule at no penalty — Gulf Coast weather is something we understand completely. Covered decks, screened porches, and large garage spaces make excellent backup setups. Most ${city} rental properties have at least one covered outdoor area suitable for the hibachi setup.`,
    },
  ],
]

// ─── Testimonials (keyed by citySlug, 3 per city) ─────────────────────────────
const AL_TESTIMONIALS = {
  // Batch 1 ——————————————————————————————————————————————————————————————————
  'birmingham': [
    {
      text: '"Corporate team dinner for our UAB department — 28 people, outdoor venue in the Southside, chef arrived on time and put on a two-hour show that had the entire group completely engaged. Our division has done restaurant private rooms for years. This is the new standard for our milestone events."',
      name: 'Dr. Marcus T.',
      city: 'Birmingham, AL',
      event: 'Corporate Team Dinner',
      initials: 'MT',
    },
    {
      text: '"Anniversary dinner at our Forest Park home — 16 guests on the back patio, chef was exceptional from first flame to final plate. Premium proteins across the board, every guest transfixed. Three people booked their own events before the chef packed up. We had no idea it would be this good."',
      name: 'Rachel & James W.',
      city: 'Birmingham, AL',
      event: 'Anniversary Dinner',
      initials: 'RW',
    },
    {
      text: '"Law firm client appreciation event — 34 attorneys and clients, outdoor setup at a partner\'s home in Redmont Park. Nobody expected a hibachi chef. The entire group was gathered around that grill laughing for two solid hours. Best firm event we\'ve put on in ten years."',
      name: 'Linda C.',
      city: 'Birmingham, AL',
      event: 'Law Firm Client Event',
      initials: 'LC',
    },
  ],
  'mountain-brook': [
    {
      text: '"Anniversary estate dinner at our English Village home — 20 guests on the terrace, chef set up in fifteen minutes and delivered an absolutely extraordinary evening. Filet mignon and lobster tail across the board, fire tricks that had our guests on their feet. Nothing in Birmingham compares to this at home."',
      name: 'Charles & Margaret P.',
      city: 'Mountain Brook, AL',
      event: 'Anniversary Estate Dinner',
      initials: 'CP',
    },
    {
      text: '"Graduation party for our daughter in Crestline Village — 38 guests, backyard setup, chef ran dual stations and had every generation from grandparents to college roommates completely captivated for two hours. This was the best event we\'ve hosted in fifteen years of Mountain Brook entertaining."',
      name: 'Elizabeth H.',
      city: 'Mountain Brook, AL',
      event: 'Graduation Party',
      initials: 'EH',
    },
    {
      text: '"Birthday milestone at our North Mountain Brook estate — intimate dinner for fourteen guests on the outdoor terrace. Chef was professional, personable, and cooked at a level that matched what our property already demanded. Premium proteins throughout. Every guest asked for the booking information before they left."',
      name: 'Robert A.',
      city: 'Mountain Brook, AL',
      event: 'Milestone Birthday Dinner',
      initials: 'RA',
    },
  ],
  'vestavia-hills': [
    {
      text: '"Graduation party for our son — 42 guests in our Vestavia Hills backyard. Chef arrived on time, set up in twenty minutes, and had the entire crowd gathered from first flame to final plate. His graduating class plus three sets of grandparents all at the same grill. Already planning our daughter\'s graduation for next spring."',
      name: 'Tom & Karen F.',
      city: 'Vestavia Hills, AL',
      event: 'Graduation Party',
      initials: 'TF',
    },
    {
      text: '"Anniversary dinner in our Vestavia Hills backyard — 22 guests, June evening, perfectly executed from start to finish. The chef was personable, the food was outstanding, and the whole experience elevated what would have been a dinner party into an event we\'re still talking about six months later."',
      name: 'Susan B.',
      city: 'Vestavia Hills, AL',
      event: 'Anniversary Dinner',
      initials: 'SB',
    },
    {
      text: '"Retirement party for my husband — 46 guests, our largest backyard gathering in twenty years. Chef ran dual stations and kept the entire crowd engaged for over two hours. The grandkids were as entertained as the corporate colleagues. We\'d been planning this for months and the hibachi chef made it unforgettable."',
      name: 'Patricia D.',
      city: 'Vestavia Hills, AL',
      event: 'Retirement Party',
      initials: 'PD',
    },
  ],
  'hoover': [
    {
      text: '"Graduation party in our Greystone backyard — 48 guests, chef set up dual stations and had the whole crowd together for two hours straight. Grandparents, college roommates, neighbors — all at the same grill. No Hoover restaurant could have handled this group. We\'ll never do a graduation any other way."',
      name: 'Michael & Donna K.',
      city: 'Hoover, AL',
      event: 'Graduation Party',
      initials: 'MK',
    },
    {
      text: '"Birthday party in our Ross Bridge-area home — 32 guests, backyard setup, chef was fantastic. The fire tricks alone were worth the entire evening. Every guest at the same table, same chef, same experience — no restaurant logistics, no crowded parking, no rushed tables. My family is already planning the next event."',
      name: 'Jennifer R.',
      city: 'Hoover, AL',
      event: 'Birthday Party',
      initials: 'JR',
    },
    {
      text: '"Corporate team event at my home near Riverchase — 26 employees, outdoor setup, chef arrived perfectly equipped and performed for two solid hours. We\'d done restaurant private rooms every year. This was the first event where everybody was still talking about it at work the following Monday."',
      name: 'Brian S.',
      city: 'Hoover, AL',
      event: 'Corporate Team Event',
      initials: 'BS',
    },
  ],
  'huntsville': [
    {
      text: '"Team milestone dinner at our Hampton Cove home — 24 Redstone Arsenal colleagues, backyard setup, chef arrived right on time and delivered two hours of the best entertainment any of us had seen outside of a Japanese restaurant. The engineering group immediately started planning the next one. This is the format for North Alabama professional events."',
      name: 'Col. David M. (ret.)',
      city: 'Huntsville, AL',
      event: 'Team Milestone Dinner',
      initials: 'DM',
    },
    {
      text: '"Graduation party for our daughter — 38 guests at our Jones Valley property, chef set up dual stations and had every generation completely captivated. NASA colleagues, grandparents from Georgia, college roommates — all at the same grill for two hours. We\'d tried to get a restaurant reservation for this many people during commencement weekend. Impossible. This was the answer."',
      name: 'Theresa & Paul G.',
      city: 'Huntsville, AL',
      event: 'Graduation Party',
      initials: 'TG',
    },
    {
      text: '"Anniversary dinner at our home near Research Park — 18 guests on the covered patio, chef was exceptional. Premium proteins, fire tricks, the whole performance. Our guests are aerospace engineers who appreciate precision. The chef delivered. Effortlessly professional from setup to the moment he packed the last piece of equipment."',
      name: 'Sandra W.',
      city: 'Huntsville, AL',
      event: 'Anniversary Dinner',
      initials: 'SW',
    },
  ],
  // Batch 2 ——————————————————————————————————————————————————————————————————
  'homewood': [
    {
      text: '"Graduation party for our son — 36 guests in our Homewood backyard, chef was outstanding from first flame to final plate. Homewood High commencement weekend, every restaurant within five miles was packed. The hibachi chef at home was the right answer. Chef set up in fifteen minutes, had the entire crowd gathered for two solid hours. Already booked for next year."',
      name: 'Greg & Carol A.',
      city: 'Homewood, AL',
      event: 'Graduation Party',
      initials: 'GA',
    },
    {
      text: '"Client appreciation dinner at my home in the Edgewood corridor — 20 guests, covered patio setup, the chef was extraordinarily professional. The live fire performance gave the evening an energy that no private dining room in Birmingham ever produces. Three of my clients asked for the booking information before the chef packed up. This is what corporate entertaining should look like."',
      name: 'Nathan B.',
      city: 'Homewood, AL',
      event: 'Client Appreciation Dinner',
      initials: 'NB',
    },
    {
      text: '"Anniversary dinner in our Homewood home — 18 guests, beautiful July evening on the back deck, chef arrived perfectly prepared and executed an absolutely exceptional two-hour experience. Premium proteins across the board — filet and lobster for the table. The couple the party was for said it was the best celebration they\'d had in twenty years. Flawless from start to finish."',
      name: 'Sarah K.',
      city: 'Homewood, AL',
      event: 'Anniversary Dinner',
      initials: 'SK',
    },
  ],
  'madison': [
    {
      text: '"Graduation party for our daughter — 40 guests at our Madison home near Research Park, chef set up dual stations and had every generation captivated for two hours. Madison City Schools commencement weekend — every restaurant in the area was fully committed for weeks. This was the best graduation event in our neighborhood this season. Already have three families asking about our chef."',
      name: 'Kevin & Lisa H.',
      city: 'Madison, AL',
      event: 'Graduation Party',
      initials: 'KH',
    },
    {
      text: '"Team event at my home in the Mill Creek corridor — 22 engineers from our Cummings Research Park group, outdoor setup on the covered patio, chef was exceptional. The fire tricks and cooking performance generated the kind of engagement that no restaurant event ever does. Our group was still talking about it at the following Monday\'s standup. The format is perfect for technical teams."',
      name: 'Alan R.',
      city: 'Madison, AL',
      event: 'Engineering Team Event',
      initials: 'AR',
    },
    {
      text: '"Birthday milestone for my husband — 28 guests in our Madison backyard, June evening, chef arrived on time, set up in twenty minutes, and delivered two hours of the finest private dining we\'ve hosted. Our neighborhood is full of aerospace and defense families who know quality. Every guest said it was the best private event they\'d attended in North Alabama."',
      name: 'Jennifer W.',
      city: 'Madison, AL',
      event: 'Milestone Birthday',
      initials: 'JW',
    },
  ],
  'tuscaloosa': [
    {
      text: '"UA graduation weekend — 34 guests at our rental property near the Quad, chef arrived perfectly on time and set up in the backyard while we watched the ceremony. Every single restaurant in Tuscaloosa was booked. Our family drove from Memphis, Jacksonville, and Nashville for this graduation, and we needed everyone at the same table for the same dinner. The hibachi chef made that happen. Extraordinary."',
      name: 'David & Pamela C.',
      city: 'Tuscaloosa, AL',
      event: 'UA Graduation Weekend',
      initials: 'DC',
    },
    {
      text: '"Birthday party for my husband — 30 guests at our Tuscaloosa home near Forest Lake, chef was outstanding. The fire tricks alone were worth the entire evening. Everyone gathered around the grill for two hours straight — nobody left to get another drink, nobody wandered into another room. The whole group was together for the entire performance. We\'ve never had a gathering like it."',
      name: 'Michelle T.',
      city: 'Tuscaloosa, AL',
      event: 'Birthday Party',
      initials: 'MT',
    },
    {
      text: '"UA alumni gathering at a rental property near Bryant-Denny — 26 guests for a home-game weekend event. Chef came to the house, set up on the back deck, and performed for two hours. The combination of game-day energy and a live hibachi show at the rental was something none of us had done before. Our group is already planning the same format for the Iron Bowl weekend."',
      name: 'Rob F.',
      city: 'Tuscaloosa, AL',
      event: 'Alumni Home-Game Gathering',
      initials: 'RF',
    },
  ],
  'auburn': [
    {
      text: '"Auburn graduation weekend — 38 guests at our rental house in the Samford area. Chef arrived on time, set up in twenty minutes, and performed for the full two hours. Every Auburn restaurant was committed for weeks before commencement. Our family came from Atlanta, Charlotte, and Nashville — all three generations at the same grill for the same evening. Nobody could have gotten a restaurant for this group. This was the answer."',
      name: 'Mark & Diane W.',
      city: 'Auburn, AL',
      event: 'AU Graduation Weekend',
      initials: 'MW',
    },
    {
      text: '"Iron Bowl weekend gathering at a house rental near Toomer\'s Corner — 28 guests, outdoor setup, chef was exceptional. The energy of a War Eagle crowd at a rental property combined with a live hibachi performance is something that doesn\'t translate until you\'ve experienced it. Our group books Auburn football weekends every year. This is the format we\'re using from now on."',
      name: 'Chris L.',
      city: 'Auburn, AL',
      event: 'Football Weekend Gathering',
      initials: 'CL',
    },
    {
      text: '"Graduation party catering at our Auburn rental — 44 guests, dual chef stations, the whole family from six different states all at the same grill. The chef arrived fully equipped and performed for two full hours without pause. Full cleanup when it was done. Our property was immaculate when the chef left. The entire extended family is still talking about this two months later."',
      name: 'Patricia E.',
      city: 'Auburn, AL',
      event: 'Graduation Party',
      initials: 'PE',
    },
  ],
  // Batch 3 ——————————————————————————————————————————————————————————————————
  'montgomery': [
    {
      text: '"Birthday milestone for my husband — 32 guests at our Pike Road home, chef arrived on time, set up in twenty minutes, and delivered two full hours of the finest private dining we\'ve hosted in Central Alabama. Maxwell AFB families, colleagues from the state attorney general\'s office, neighbors — all at the same grill for the same evening. This is the standard for Montgomery private entertaining."',
      name: 'Angela R.',
      city: 'Montgomery, AL',
      event: 'Milestone Birthday',
      initials: 'AR',
    },
    {
      text: '"Corporate team event at my home near Prattville — 26 Hyundai Motor Alabama colleagues, outdoor backyard setup, chef was exceptional from first flame to final plate. The live fire performance generates an energy that no Montgomery restaurant private dining room ever produces. Our team is already planning the same event for next quarter."',
      name: 'James T.',
      city: 'Montgomery, AL',
      event: 'Corporate Team Event',
      initials: 'JT',
    },
    {
      text: '"Graduation party in our Millbrook neighborhood — 42 guests, dual chef stations, the entire extended family from four states all at the same grill. We\'d looked at every Montgomery restaurant for this size group. None of them could have done this. The hibachi chef at home was better than any private dining room we\'ve ever used."',
      name: 'Carol & Robert M.',
      city: 'Montgomery, AL',
      event: 'Graduation Party',
      initials: 'CM',
    },
  ],
  'mobile': [
    {
      text: '"Family reunion at our Mobile Bay waterfront home — 48 guests, dual chef stations, three generations from across the Gulf Coast all at the same grill. The chef arrived with everything, set up on the bay-view deck, and performed for two solid hours while the sun set over the water. Our family has been gathering at this property for twenty years. This was the best event we\'ve ever hosted here."',
      name: 'Elizabeth H.',
      city: 'Mobile, AL',
      event: 'Family Reunion',
      initials: 'EH',
    },
    {
      text: '"Birthday celebration at our home in Midtown Mobile — 30 guests, backyard setup, chef was outstanding. The fire tricks and flying shrimp had the whole crowd gathered from first flame to last plate. Nobody went inside for two full hours. We\'ve hosted dozens of parties in this backyard over the years. None of them came close to this."',
      name: 'Thomas B.',
      city: 'Mobile, AL',
      event: 'Birthday Celebration',
      initials: 'TB',
    },
    {
      text: '"Bachelorette weekend at a rental property on the Eastern Shore — 22 guests, outdoor setup on the bay-view deck, chef was absolutely extraordinary. The fire performance, the flying shrimp, the whole two-hour show at a waterfront property — none of us had experienced anything like it. This format for a bachelorette weekend is something our entire group will be recommending for years."',
      name: 'Sarah K.',
      city: 'Mobile, AL',
      event: 'Bachelorette Weekend',
      initials: 'SK',
    },
  ],
  'fairhope': [
    {
      text: '"Anniversary dinner at our Fairhope bluff-view property — 20 guests on the back terrace, chef set up overlooking the bay and delivered two hours of the finest private dining either of us has experienced in Alabama. Premium proteins from first plate to last, fire tricks that had the entire group on their feet. Our Fairhope friends are still talking about this dinner three months later."',
      name: 'Charles & Margaret F.',
      city: 'Fairhope, AL',
      event: 'Anniversary Dinner',
      initials: 'CF',
    },
    {
      text: '"Birthday gathering at our Fairhope home near the downtown arts district — 28 guests, backyard setup, chef was exceptional. The small-city feel of Fairhope means most of our guests already know each other — the hibachi grill brought everyone together in a way that a restaurant table never does. One of the best evenings we\'ve hosted in ten years in this community."',
      name: 'Jennifer M.',
      city: 'Fairhope, AL',
      event: 'Birthday Gathering',
      initials: 'JM',
    },
    {
      text: '"Family reunion at a Fairhope rental property near the pier — 36 guests from Mobile, New Orleans, and Atlanta, bayfront deck setup, chef arrived perfectly on time and performed for two hours while the sun set over Mobile Bay. This is exactly the format that keeps the whole family at the same place for the same dinner. We\'ve already reserved the same property for next year."',
      name: 'Patricia C.',
      city: 'Fairhope, AL',
      event: 'Family Reunion',
      initials: 'PC',
    },
  ],
  // Batch 4 ——————————————————————————————————————————————————————————————————
  'daphne': [
    {
      text: '"Birthday weekend at our Daphne property near the bay — 32 guests, outdoor deck setup, chef arrived on time and performed for two hours while the sun went down over Mobile Bay behind us. The combination of a live hibachi performance and a bay-view property is something our guests had never experienced. Half the crowd asked for the booking information before the evening ended."',
      name: 'Robert & Karen L.',
      city: 'Daphne, AL',
      event: 'Birthday Weekend',
      initials: 'RL',
    },
    {
      text: '"Graduation party at our Daphne home — 40 guests, backyard setup near Lake Forest, dual chef stations, the whole extended family from Mobile, Birmingham, and Pensacola at the same grill for two hours. We\'d looked at every Eastern Shore restaurant for this size group. Nothing was available for graduation weekend. The hibachi chef at home was better than any of them would have been anyway."',
      name: 'Amy T.',
      city: 'Daphne, AL',
      event: 'Graduation Party',
      initials: 'AT',
    },
    {
      text: '"Bachelorette weekend at a rental on the Eastern Shore — 20 guests, bay-view deck setup, chef was absolutely phenomenal. The fire tricks and flying shrimp had the entire group on their feet from the first flame. The bride said it was the highlight of the entire weekend. We\'ve done coastal bachelorette trips for years. This format is the one the rest of our friend group will be copying."',
      name: 'Lindsay S.',
      city: 'Daphne, AL',
      event: 'Bachelorette Weekend',
      initials: 'LS',
    },
  ],
  'gulf-shores': [
    {
      text: '"Family reunion at our Gulf Shores beach house — 52 guests, dual chef stations on the back deck, three generations from Tennessee, Georgia, and Mississippi all at the same grill for two solid hours. We\'d been doing Gulf Shores restaurant reservations for our family reunion for years. Those days are over. The hibachi chef at the beach house is the answer we\'ve been looking for."',
      name: 'William & Barbara K.',
      city: 'Gulf Shores, AL',
      event: 'Family Reunion',
      initials: 'WK',
    },
    {
      text: '"Bachelorette weekend at our Gulf Shores rental — 18 guests, beach deck setup, chef was spectacular from the moment the first flame went up. The entire group was gathered around the grill for the full two hours. No Highway 59 restaurant battle, no parking nightmare, no waiting for a table. The chef came to us. This is the only format I\'ll ever recommend for a Gulf Shores bachelorette."',
      name: 'Rachel M.',
      city: 'Gulf Shores, AL',
      event: 'Bachelorette Weekend',
      initials: 'RM',
    },
    {
      text: '"Birthday trip at a Gulf Shores vacation rental — 26 guests, outdoor deck setup overlooking the Gulf, chef arrived perfectly on time and put on two hours of the best entertainment our group had ever seen at a beach rental. The flying shrimp moment had the entire group in absolute disbelief. We\'re already planning the same event for next summer."',
      name: 'Jeff & Sara D.',
      city: 'Gulf Shores, AL',
      event: 'Birthday Beach Trip',
      initials: 'JD',
    },
  ],
  'orange-beach': [
    {
      text: '"Anniversary getaway at our Orange Beach condo — 16 guests on the Gulf-view balcony, chef set up and performed for two hours while the Gulf of Mexico was right there behind us. Filet mignon and lobster tail for the whole table. The combination of a waterfront property and a private teppanyaki chef is something neither of us had experienced before. It will not be the last time."',
      name: 'David & Christine W.',
      city: 'Orange Beach, AL',
      event: 'Anniversary Getaway',
      initials: 'DW',
    },
    {
      text: '"Girls weekend at an Orange Beach vacation rental — 22 guests, outdoor deck setup, chef was outstanding from first flame to final plate. The fire performance with the Gulf in the background is something none of us will ever forget. No Perdido Key reservation battle, no parking, no waiting. We had the best dinner of the trip without leaving the property. This is how Gulf Coast weekends are supposed to work."',
      name: 'Michelle F.',
      city: 'Orange Beach, AL',
      event: 'Girls Weekend',
      initials: 'MF',
    },
    {
      text: '"Family vacation at our Orange Beach rental property — 34 guests, dual chef stations, three generations from Alabama and Florida all at the same grill. The chef arrived fully equipped and had everyone together for two solid hours. Full cleanup when it was done — our rental was immaculate. The owner of the property said she\'d never had a group leave it so clean."',
      name: 'Tom & Linda A.',
      city: 'Orange Beach, AL',
      event: 'Family Vacation Dinner',
      initials: 'TA',
    },
  ],
}

// ─── How It Works (single shared, 5 steps) ────────────────────────────────────
const AL_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings.`,
  steps: [
    { num: '01', title: 'Submit Your Date & Address',           desc: 'Give us your Alabama address, event date, and approximate guest count. We respond with a personalized same-day quote — Mountain Brook estate, Huntsville engineering suburb, Gulf Shores beach house, or any Alabama property.' },
    { num: '02', title: 'Confirm Your Menu',                    desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included.' },
    { num: '03', title: 'Lock Your Date',                       desc: 'A deposit confirms your event immediately. Your Alabama date is reserved — no double-bookings, no last-minute uncertainty.' },
    { num: '04', title: 'Chef Travels to You',                  desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No gas hookup required at any Alabama property.' },
    { num: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your property is left exactly as it was.' },
  ],
}

// ─── Section variants (6 themes) ─────────────────────────────────────────────
const AL_SECTION_VARIANTS = [
  // T0 — Birmingham Luxury Estate
  {
    heroPill:           'Birmingham Estate Dining',
    experiencePill:     'Beyond Birmingham Restaurants',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Your ${city} Estate Is the Venue`,      desc: `No reservation required — your ${city} outdoor terrace, pool deck, or backyard becomes an exclusive private dining room for the evening.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',           desc: 'Filet mignon, lobster tail, Chilean sea bass, wagyu — all available per guest. The estate-level expectation, delivered at your property.' },
      { icon: '👨‍🍳', title: 'One Chef, Your Group Only',            desc: `Your certified teppanyaki chef performs exclusively for your ${city} guests — no shared dining room, no strangers, no restaurant noise.` },
      { icon: '✨', title: 'Arrive, Perform, Disappear Spotless',   desc: 'Full setup before dinner and complete cleanup after. Your estate property is exactly as it was when the chef arrived.' },
    ],
    experienceImage:    '/pics/private-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} estate property`,
    areasPill:          'Serving the Birmingham Estate Market',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Birmingham Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and the full Birmingham estate market — Mountain Brook, Vestavia Hills, Hoover, Homewood, Birmingham, and all surrounding Jefferson and Shelby County communities. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Estate Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Dining Standard in ${city}`,
    occasionSubtext:       'From estate anniversary dinners to landmark graduation celebrations, private hibachi is the Birmingham estate market\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Questions Answered`,
    testimonialSubheading: 'What Birmingham Area Estate Hosts Are Saying',
  },
  // T1 — Birmingham Metro & Corporate
  {
    heroPill:           'Birmingham Private Chef',
    experiencePill:     'Beyond Any Birmingham Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `${city} Is the Venue`,                  desc: `No reservation battle, no group parking, no rushed tables — your ${city} outdoor space becomes an exclusive private dining room for your group.` },
      { icon: '🔥', title: 'One Chef, One Show',                    desc: 'Every guest at the same grill, the same chef, the same performance — the shared experience is what makes hibachi unforgettable for any size group.' },
      { icon: '🎓', title: 'Built for Graduation Season',           desc: `${city} graduation Saturdays fill weeks in advance — when restaurants are fully booked, we come to your backyard.` },
      { icon: '🧹', title: 'Full Setup & Zero Cleanup',             desc: 'Chef arrives fully equipped, sets up completely, cooks the entire dinner, and packs out after. You host without touching a single plate.' },
    ],
    experienceImage:    '/pics/hibachi-event.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, AL`,
    areasPill:          'Serving Birmingham & the Metro Area',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Birmingham Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of greater Birmingham — Mountain Brook, Vestavia Hills, Hoover, Homewood, Trussville, Gardendale, Pelham, and every community throughout Jefferson and Shelby County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Birmingham Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From corporate team dinners to graduation parties and family milestones, private hibachi is Birmingham\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Birmingham & Metro Area Hosts Are Saying',
  },
  // T2 — Huntsville & North Alabama Tech
  {
    heroPill:           'North Alabama Private Chef',
    experiencePill:     'Better Than Any Huntsville Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} backyard or patio becomes an exclusive private dining room for your family, team, or graduating class.` },
      { icon: '🚀', title: 'Built for Rocket City Professionals',   desc: 'Aerospace engineers, defense contractors, and NASA families know quality. Our certified chefs deliver the performance and precision that matches the standard.' },
      { icon: '🎓', title: 'The Graduation Solution',               desc: `When every ${city} restaurant is booked six weeks before commencement, the chef comes to you. One call. No reservation battle.` },
      { icon: '✨', title: 'Full Setup, Zero Cleanup',              desc: 'Chef arrives with everything, performs the full show, and packs out completely. Your North Alabama property is spotless when they leave.' },
    ],
    experienceImage:    '/pics/hibachi-colorado-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} North Alabama home`,
    areasPill:          'Serving Huntsville, Madison & North Alabama',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of North Alabama`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of North Alabama — Madison, Decatur, Athens, Hartselle, Cullman, and all communities throughout Madison, Limestone, and Lawrence County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878.`,
    ],
    areasButton:           'Book Your North Alabama Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner ${city} Professionals Have Been Waiting For`,
    occasionSubtext:       'Graduation parties, corporate team events, military milestones, and family celebrations — private hibachi is North Alabama\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Huntsville & North Alabama Hosts Are Saying',
  },
  // T3 — Alabama University Markets
  {
    heroPill:           'University Event Chef',
    experiencePill:     'The Graduation Weekend Solution',
    experiencePoints:   (city) => [
      { icon: '🎓', title: 'When Restaurants Are Fully Booked',     desc: `${city} graduation weekend books every restaurant table weeks before commencement. A mobile hibachi chef at your rental means you don't need one.` },
      { icon: '🔥', title: 'Live Fire at Your Rental',              desc: `Chef comes to your ${city} vacation rental or short-term property — full setup on your deck, patio, or yard. No hookup required.` },
      { icon: '👥', title: 'Every Generation at the Grill',         desc: 'Grandparents, parents, and college friends all gathered at the same teppan for 90–120 minutes — the shared experience that photos can\'t capture.' },
      { icon: '🏠', title: 'Rental Stays Spotless',                 desc: 'Complete cleanup when dinner ends — your rental property is exactly as it was before the chef arrived. Zero damage, zero mess.' },
    ],
    experienceImage:    '/pics/hibachi-catering-2.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} graduation weekend rental`,
    areasPill:          'Serving Alabama\'s University Communities',
    areasHeadline:      (city) => `Mobile Hibachi in ${city} and the University Market`,
    areasIntro: [
      (city, state) => `We serve ${city} and the full Alabama university market — Tuscaloosa, Auburn, Oxford, Opelika, and all surrounding communities throughout the commencement season calendar.`,
      (city) => `${city} graduation weekend books fast. Call or text (201) 565-3878 to confirm your date now.`,
    ],
    areasButton:           'Check Graduation Weekend Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       'Graduation weekends, alumni gatherings, football-season home events, and family visits to the university — private hibachi is the format that keeps everyone at the property',
    faqPill:               'University Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi — Your Graduation Weekend Questions`,
    testimonialSubheading: 'What Alabama University-Market Hosts Are Saying',
  },
  // T4 — Central Alabama
  {
    heroPill:           'Central Alabama Private Chef',
    experiencePill:     'Beyond Montgomery Restaurants',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} outdoor space becomes an exclusive private dining room for your family, team, or guests.` },
      { icon: '🪖', title: 'Serving Military & Professional Families', desc: `Maxwell AFB families, state government professionals, and ${city} corporate households — the private format that matches the occasion.` },
      { icon: '🎓', title: 'The Graduation Alternative',             desc: `When every ${city} restaurant has a waitlist, the chef comes to your backyard. One call, no reservation battle, full performance.` },
      { icon: '✨', title: 'Full Setup, Full Cleanup',               desc: 'Chef arrives with everything and leaves nothing behind. Your property is spotless. You kept the memory.' },
    ],
    experienceImage:    '/pics/hibachi-austin.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Central Alabama property`,
    areasPill:          'Serving Montgomery & Central Alabama',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of Central Alabama`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Central Alabama — Prattville, Millbrook, Pike Road, Wetumpka, Tallassee, and all surrounding communities. Most ${city} locations are within our standard service radius.`,
      (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878.`,
    ],
    areasButton:           'Book Your Central Alabama Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Celebration`,
    occasionSubtext:       'From military milestone dinners to graduation parties and corporate team events, private hibachi brings Central Alabama together',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Central Alabama Hosts Are Saying',
  },
  // T5 — Gulf Coast & Mobile Bay
  {
    heroPill:           'Gulf Coast Private Chef',
    experiencePill:     'The Dinner of the Trip',
    experiencePoints:   (city) => [
      { icon: '🏖️', title: `Chef at Your ${city} Rental`,           desc: `Skip the Highway 59 reservation battle — your chef comes directly to your ${city} beach house or vacation rental with the full setup.` },
      { icon: '🔥', title: 'Fire at the Beach House',               desc: 'Guests gathered on the deck for fire tricks, flying shrimp, and fresh proteins cooked to order — the Gulf Coast evening nobody forgets.' },
      { icon: '👥', title: 'Scales from 10 to 60 Guests',           desc: `Intimate ${city} beach dinners of 10–20 or large family reunions of 60 — one or two stations sized to your exact group.` },
      { icon: '🏠', title: 'Rental Stays Spotless',                 desc: 'Full setup before the event and complete pack-out after. Your Gulf Coast rental is exactly as it was when the chef arrived.' },
    ],
    experienceImage:    '/pics/hibachi-miami.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} Gulf Coast vacation rental`,
    areasPill:          'Serving the Alabama Gulf Coast',
    areasHeadline:      (city) => `Mobile Hibachi in ${city} and the Alabama Gulf Coast`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the Alabama Gulf Coast — Gulf Shores, Orange Beach, Mobile, Fairhope, Daphne, Spanish Fort, Foley, and every community along the coast and Eastern Shore.`,
      (city) => `Gulf Coast summer dates fill fast. Call or text (201) 565-3878 to confirm your ${city} booking now.`,
    ],
    areasButton:           'Check Gulf Coast Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       'Bachelorette weekends, family reunions, birthday beach trips, and vacation group dinners — private hibachi is Alabama\'s most memorable Gulf Coast dining experience',
    faqPill:               'Gulf Coast Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Beach Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Alabama Gulf Coast Hosts Are Saying',
  },
]

// ─── City experience image map (citySlug → experience section image) ──────────
const AL_CITY_IMAGE_MAP = {
  // Batch 1 (profileIdx 0–4)
  'birmingham':     { src: '/pics/hibachi-event.jpg',          alt: (city) => `Private hibachi chef event in Birmingham, AL` },
  'mountain-brook': { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Private hibachi chef at a Mountain Brook estate` },
  'vestavia-hills': { src: '/pics/backyard-hibachi-3.jpg',     alt: (city) => `Backyard hibachi party in Vestavia Hills, AL` },
  'hoover':         { src: '/pics/backyard-hibachi.jpg',       alt: (city) => `Backyard hibachi event in Hoover, AL` },
  'huntsville':     { src: '/pics/hibachi-austin-home.jpg',    alt: (city) => `Private hibachi chef at a Huntsville, AL home` },
  // Batch 2
  'homewood':       { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Hibachi catering event in Homewood, AL` },
  'madison':        { src: '/pics/hibachi-private-chef-1.jpg', alt: (city) => `Private hibachi chef at a Madison, AL home` },
  'tuscaloosa':     { src: '/pics/hibachi-pool-party.jpg',     alt: (city) => `Mobile hibachi chef at a Tuscaloosa, AL rental property` },
  'auburn':         { src: '/pics/hibachi-austin.jpg',         alt: (city) => `Hibachi catering at an Auburn, AL rental property` },
  // Batch 3
  'montgomery':     { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Private hibachi chef at a Montgomery, AL property` },
  'mobile':         { src: '/pics/hibachi-miami.jpg',          alt: (city) => `Backyard hibachi event in Mobile, AL` },
  'fairhope':       { src: '/pics/backyard-hibachi-3.jpg',     alt: (city) => `Backyard hibachi party in Fairhope, AL` },
  // Batch 4
  'daphne':         { src: '/pics/hibachi-at-home.jpg',        alt: (city) => `Backyard hibachi event in Daphne, AL` },
  'gulf-shores':    { src: '/pics/hibachi-austin-home.jpg',    alt: (city) => `Mobile hibachi chef at a Gulf Shores, AL beach house` },
  'orange-beach':   { src: '/pics/hibachi-chef-2.jpg',         alt: (city) => `Private hibachi chef at an Orange Beach, AL rental property` },
}

// ─── Support images (testimonial + CTA sections) ──────────────────────────────
const AL_SUPPORT_IMAGES = {
  // Batch 1 (profileIdx 0–4)
  'birmingham': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Corporate hibachi event in Birmingham, AL`,
      caption:    'Birmingham professionals choose hibachi',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `Birmingham professionals, corporate teams, and families all turn to private hibachi when the event needs to be truly memorable. From Forest Park milestone dinners and UAB department gatherings to graduation parties across the metro — our certified chefs bring the full teppanyaki experience to your door. See what Birmingham hosts have discovered:`,
    },
    cta: {
      src:     '/pics/private-party-chef-6.jpg',
      alt:     (city) => `Private hibachi chef setting up in Birmingham, AL`,
      caption: 'Your Birmingham event starts here',
    },
  },
  'mountain-brook': {
    testimonial: {
      src:        '/pics/hibachi-chef-2.jpg',
      alt:        (city) => `Estate hibachi dinner in Mountain Brook, AL`,
      caption:    'Mountain Brook estate entertaining',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `Mountain Brook hosts set the standard for private entertaining in Alabama — and our chefs arrive at every estate event ready to meet it. From English Village terrace anniversary dinners to Crestline Village graduation parties, the level of quality our guests expect is the level we deliver. Here's what Mountain Brook hosts have found:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef at a Mountain Brook estate`,
      caption: 'Mountain Brook\'s private dining standard',
    },
  },
  'vestavia-hills': {
    testimonial: {
      src:        '/pics/hibachi-at-home.jpg',
      alt:        (city) => `Graduation hibachi party in Vestavia Hills, AL`,
      caption:    'Vestavia Hills graduation season',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Vestavia Hills families choose private hibachi for their graduation parties, anniversary dinners, and milestone celebrations — because nothing else delivers the combination of live entertainment and genuine dining quality that makes any occasion worth planning. See what Vestavia Hills hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Vestavia Hills, AL`,
      caption: 'The Vestavia Hills graduation standard',
    },
  },
  'hoover': {
    testimonial: {
      src:        '/pics/hibachi-shot-1.jpg',
      alt:        (city) => `Backyard hibachi party in Hoover, AL`,
      caption:    'Hoover backyard celebrations',
      trustBadge: 'Thousands of Happy Guests',
      intro:      (city) => `Hoover families celebrate their milestones — graduation parties, birthday milestones, and neighborhood gatherings — with a private hibachi chef who brings the entire experience to the door. Real food, real entertainment, full cleanup included. Here's what Hoover hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-dallas-home.jpg',
      alt:     (city) => `Private hibachi chef at a Hoover, AL backyard event`,
      caption: 'Your Hoover backyard, upgraded',
    },
  },
  'huntsville': {
    testimonial: {
      src:        '/pics/hibachi-colorado-home.jpg',
      alt:        (city) => `Private hibachi dinner at a Huntsville, AL home`,
      caption:    'Huntsville professional households',
      trustBadge: 'Highly Rated by North Alabama Hosts',
      intro:      (city) => `Huntsville's aerospace, defense, and engineering professionals choose private hibachi when the occasion demands something genuinely extraordinary. Milestone team dinners, graduation celebrations, and anniversary estate events at North Alabama properties — our chefs deliver the precision and quality this community expects. Here's what Huntsville hosts have discovered:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-home-2.jpg',
      alt:     (city) => `Private hibachi chef at a Huntsville, AL property`,
      caption: 'The Huntsville private dining standard',
    },
  },
  // Batch 4
  'daphne': {
    testimonial: {
      src:        '/pics/hibachi-catering-2.jpg',
      alt:        (city) => `Backyard hibachi event in Daphne, AL`,
      caption:    'Eastern Shore bay-view events',
      trustBadge: 'Trusted by Eastern Shore Hosts',
      intro:      (city) => `Daphne residents and Eastern Shore families choose private hibachi for birthday celebrations, graduation parties, and bachelorette weekends — the format that keeps everyone at the same outdoor table with the same view for the whole evening. Here's what Daphne hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-home-2.jpg',
      alt:     (city) => `Private hibachi chef at a Daphne, AL property`,
      caption: 'Daphne bay-view hibachi — book yours',
    },
  },
  'gulf-shores': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Mobile hibachi chef at a Gulf Shores, AL beach house`,
      caption:    'Gulf Shores beach house events',
      trustBadge: 'Trusted by Gulf Coast Hosts',
      intro:      (city) => `Gulf Shores beach house groups — family reunions, bachelorette weekends, birthday beach trips — choose a private hibachi chef because no restaurant on Highway 59 can seat 30 people on a summer Saturday. The chef comes to the beach house. Here's what Gulf Shores hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-dallas-home.jpg',
      alt:     (city) => `Mobile hibachi chef at a Gulf Shores, AL beach house`,
      caption: 'Gulf Shores beach house hibachi — book it',
    },
  },
  'orange-beach': {
    testimonial: {
      src:        '/pics/backyard-hibachi.jpg',
      alt:        (city) => `Private hibachi chef at an Orange Beach, AL Gulf-view property`,
      caption:    'Orange Beach Gulf-view events',
      trustBadge: 'Highly Rated by Gulf Coast Hosts',
      intro:      (city) => `Orange Beach vacation groups — anniversary getaways, girls weekends, family vacation dinners — choose private hibachi because a certified teppanyaki chef at your Gulf-view rental is the dinner of the trip. No Perdido Key reservation required. Here's what Orange Beach hosts have discovered:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef at an Orange Beach, AL property`,
      caption: 'Orange Beach Gulf-view hibachi — reserve yours',
    },
  },
  // Batch 3
  'montgomery': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Private hibachi chef event in Montgomery, AL`,
      caption:    'Central Alabama private events',
      trustBadge: 'Trusted by Montgomery Families',
      intro:      (city) => `Montgomery professionals, military families, and corporate households choose private hibachi for graduation parties, anniversary dinners, and team milestone events — because the format that keeps everyone at the same table produces memories that restaurant private rooms never do. Here's what Central Alabama hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-2.jpg',
      alt:     (city) => `Private hibachi chef at a Montgomery, AL property`,
      caption: 'Montgomery private dining — book yours',
    },
  },
  'mobile': {
    testimonial: {
      src:        '/pics/backyard-hibachi.jpg',
      alt:        (city) => `Backyard hibachi event in Mobile, AL`,
      caption:    'Mobile Bay private events',
      trustBadge: 'Highly Rated by Gulf Coast Hosts',
      intro:      (city) => `Mobile families and Gulf Coast visitors choose private hibachi for waterfront gatherings, family reunions, and milestone celebrations — the format that keeps every generation at the same table for the same dinner with no restaurant logistics. Here's what Mobile hosts have discovered:`,
    },
    cta: {
      src:     '/pics/hibachi-at-home.jpg',
      alt:     (city) => `Private hibachi chef at a Mobile, AL property`,
      caption: 'Mobile Bay hibachi — book yours',
    },
  },
  'fairhope': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Backyard hibachi dinner in Fairhope, AL`,
      caption:    'Fairhope bay-view entertaining',
      trustBadge: 'Trusted by Eastern Shore Hosts',
      intro:      (city) => `Fairhope residents and Eastern Shore families choose private hibachi for anniversary dinners, birthday celebrations, and family reunions at bayfront properties — the shared experience that no Fairhope restaurant table can replicate. Here's what Fairhope hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-private-chef-1.jpg',
      alt:     (city) => `Private hibachi chef at a Fairhope, AL property`,
      caption: 'Fairhope private dining — reserve yours',
    },
  },
  // Batch 2
  'homewood': {
    testimonial: {
      src:        '/pics/private-party-chef-6.jpg',
      alt:        (city) => `Private hibachi chef event in Homewood, AL`,
      caption:    'Homewood backyard entertaining',
      trustBadge: 'Trusted by Homewood Families',
      intro:      (city) => `Homewood families and professionals choose private hibachi for graduation parties, corporate client events, and milestone dinners — because no Birmingham restaurant produces the shared experience of a live teppanyaki chef at your own property. See what Homewood hosts are saying:`,
    },
    cta: {
      src:     '/pics/backyard-hibachi-2.jpg',
      alt:     (city) => `Hibachi catering setup in Homewood, AL`,
      caption: 'Homewood\'s catering standard',
    },
  },
  'madison': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Private hibachi event at a Madison, AL home`,
      caption:    'Madison engineering families',
      trustBadge: 'Highly Rated by North Alabama Hosts',
      intro:      (city) => `Madison's engineering and defense families choose private hibachi for graduation celebrations, team milestone dinners, and anniversary events — the performance and quality standard that matches the professional community they belong to. Here's what Madison hosts have discovered:`,
    },
    cta: {
      src:     '/pics/hibachi-shot-2.jpg',
      alt:     (city) => `Private hibachi chef at a Madison, AL property`,
      caption: 'The Madison private dining experience',
    },
  },
  'tuscaloosa': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Mobile hibachi event at a Tuscaloosa, AL rental property`,
      caption:    'Tuscaloosa graduation weekends',
      trustBadge: 'Trusted by UA Families',
      intro:      (city) => `Tuscaloosa graduation weekend is the most competitive private event calendar in Alabama — and families who plan ahead with a mobile hibachi chef never fight for a restaurant table that can't fit all three generations anyway. Here's what Tuscaloosa hosts have found:`,
    },
    cta: {
      src:     '/pics/hero-2.jpg',
      alt:     (city) => `Mobile hibachi chef at a Tuscaloosa, AL property`,
      caption: 'Tuscaloosa graduation weekend solved',
    },
  },
  'auburn': {
    testimonial: {
      src:        '/pics/hero-1.jpg',
      alt:        (city) => `Hibachi catering at an Auburn, AL rental property`,
      caption:    'Auburn graduation weekends',
      trustBadge: 'Trusted by Auburn University Families',
      intro:      (city) => `Auburn graduation weekends and Iron Bowl football Saturdays book every Auburn restaurant table weeks before the event. Families who bring a hibachi chef to their rental property skip the reservation battle entirely — and get the dinner that keeps everyone together. Here's what Auburn hosts are saying:`,
    },
    cta: {
      src:     '/pics/private-party-chef-1.jpg',
      alt:     (city) => `Private hibachi chef at an Auburn, AL event`,
      caption: 'Auburn graduation weekend, solved',
    },
  },
}

// ─── Closing variants (AL generic 620–625) ────────────────────────────────────
export const AL_CLOSING_VARIANTS = [
  // 620 — T0 Birmingham Luxury Estate
  {
    headline: (city) => `Your ${city} Estate Event Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Birmingham estate and graduation weekends book 3–5 weeks out. Confirm your date now.`,
  },
  // 621 — T1 Birmingham Metro & Corporate
  {
    headline: (city) => `${city}'s Best Private Dining — Book It`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `Birmingham metro weekends book 2–4 weeks ahead. Secure your date now.`,
  },
  // 622 — T2 Huntsville & North Alabama Tech
  {
    headline: (city) => `Your ${city} Event — Reserve It Now`,
    sub:      (city) => `A certified hibachi chef comes to your ${city} property. Full setup, premium proteins, complete cleanup. From $60 per adult.`,
    urgency:  `North Alabama graduation season books 3–5 weeks out. Confirm your date now.`,
  },
  // 623 — T3 Alabama University Markets
  {
    headline: (city) => `The ${city} Graduation Dinner Everyone Remembers`,
    sub:      (city) => `A mobile hibachi chef comes to your ${city} rental — grill, ingredients, full show, complete cleanup. From $60 per adult.`,
    urgency:  `UA and Auburn graduation weekends book 4–6 weeks ahead. Reserve your date now.`,
  },
  // 624 — T4 Central Alabama
  {
    headline: (city) => `${city}'s Most Memorable Celebration — Book Yours`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `Central Alabama graduation season and peak weekends book early — confirm your date now.`,
  },
  // 625 — T5 Gulf Coast & Mobile Bay
  {
    headline: (city) => `The ${city} Dinner Your Group Has Been Waiting For`,
    sub:      (city) => `A certified hibachi chef at your ${city} beach house or rental — grill, ingredients, full show, complete cleanup. From $60 per adult.`,
    urgency:  `Gulf Coast summer dates fill fast — confirm your beach season booking 3–5 weeks ahead.`,
  },
]

// ─── City-specific closings (AL city-specific 626–640) ────────────────────────
export const AL_CITY_CLOSINGS = [
  // 626 — Birmingham (profileIdx 0)
  {
    headline: (city) => `Birmingham's Private Dining Standard — Book It`,
    sub:      (city) => `A certified teppanyaki chef for your Birmingham corporate event or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Birmingham corporate and graduation weekends book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 627 — Mountain Brook (profileIdx 1)
  {
    headline: (city) => `Mountain Brook Estate Dining — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Mountain Brook estate or outdoor property. Premium ingredients, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `Mountain Brook estate events and graduation Saturdays book 4–5 weeks out. Reserve your date now.`,
  },
  // 628 — Vestavia Hills (profileIdx 2)
  {
    headline: (city) => `Vestavia Hills Graduation Season — Don't Wait`,
    sub:      (city) => `A certified teppanyaki chef at your Vestavia Hills home. All proteins, live performance, full cleanup. From $60/adult.`,
    urgency:  `Vestavia Hills graduation and summer weekends fill fast. Check your date now.`,
  },
  // 629 — Hoover (profileIdx 3)
  {
    headline: (city) => `Hoover's Best Backyard Party — Book Yours`,
    sub:      (city) => `A certified hibachi chef comes to your Hoover property. All ingredients, full live performance, complete cleanup. From $60/adult.`,
    urgency:  `Hoover graduation and summer weekends book 2–3 weeks out. Secure your date now.`,
  },
  // 630 — Huntsville (profileIdx 4)
  {
    headline: (city) => `Huntsville's Private Dining Standard — Book It`,
    sub:      (city) => `A certified hibachi chef at your Huntsville home or outdoor venue. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Huntsville graduation season and peak weekends book 3–5 weeks ahead. Confirm your date now.`,
  },
  // 631 — Homewood (profileIdx 5)
  {
    headline: (city) => `Homewood Hibachi Catering — Reserve Your Chef`,
    sub:      (city) => `A certified teppanyaki chef at your Homewood property. Corporate events, graduation parties, private dinners. Full setup & cleanup. From $60/adult.`,
    urgency:  `Homewood graduation and summer weekends book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 632 — Madison (profileIdx 6)
  {
    headline: (city) => `Madison's Private Dining Standard — Book It`,
    sub:      (city) => `A certified hibachi chef at your Madison, AL home. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Madison graduation season and peak weekends book 3–5 weeks ahead. Reserve your date now.`,
  },
  // 633 — Tuscaloosa (profileIdx 7)
  {
    headline: (city) => `Tuscaloosa Graduation Weekend — Book Your Chef Now`,
    sub:      (city) => `A mobile hibachi chef comes to your Tuscaloosa rental. Full setup, grill, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `UA graduation weekends book 4–6 weeks ahead. Reserve your date now — don't wait.`,
  },
  // 634 — Auburn (profileIdx 8)
  {
    headline: (city) => `Auburn Graduation Weekend — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Auburn rental or property. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Auburn graduation and Iron Bowl weekends book 4–6 weeks ahead. Confirm your date now.`,
  },
  // 635 — Montgomery (profileIdx 9)
  {
    headline: (city) => `Montgomery's Most Memorable Event — Book Yours`,
    sub:      (city) => `A certified private hibachi chef at your Montgomery property. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Central Alabama graduation season and peak weekends book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 636 — Mobile (profileIdx 10)
  {
    headline: (city) => `Mobile's Backyard Hibachi Experience — Reserve It`,
    sub:      (city) => `A certified hibachi chef at your Mobile home or Gulf Coast property. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Mobile Bay summer events book 3–5 weeks ahead. Confirm your date now.`,
  },
  // 637 — Fairhope (profileIdx 11)
  {
    headline: (city) => `Fairhope Backyard Hibachi — Book Your Evening`,
    sub:      (city) => `A certified hibachi chef at your Fairhope bayfront or downtown property. Full performance, full cleanup. From $60/adult.`,
    urgency:  `Fairhope Eastern Shore events book 2–4 weeks ahead. Reserve your date now.`,
  },
  // 638 — Daphne (profileIdx 12)
  {
    headline: (city) => `Daphne Backyard Hibachi — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Daphne bay-view or Eastern Shore property. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Eastern Shore summer events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 639 — Gulf Shores (profileIdx 13)
  {
    headline: (city) => `Gulf Shores Beach House Hibachi — Book It Now`,
    sub:      (city) => `A mobile hibachi chef at your Gulf Shores beach house or vacation rental. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Gulf Shores summer peak books 3–5 weeks ahead. Reserve your beach season date now.`,
  },
  // 640 — Orange Beach (profileIdx 14)
  {
    headline: (city) => `Orange Beach Private Chef — Reserve Your Evening`,
    sub:      (city) => `A certified teppanyaki chef at your Orange Beach rental or Gulf-view property. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Orange Beach summer season books 3–5 weeks ahead. Confirm your Gulf Coast date now.`,
  },
]

// ─── Intro variants (AL generic 620–625) ──────────────────────────────────────
export const AL_INTRO_VARIANTS = [
  // 620 — T0 Birmingham Luxury Estate
  {
    headline: (city) => `Hibachi at Home in ${city}: Estate Private Dining for the Birmingham Area`,
    opening:  (city, state) =>
      `The Birmingham estate market has its own standard for a private gathering — and the backyard at a Mountain Brook or Vestavia Hills property is the finest private venue in Alabama before any chef sets up. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with everything included: the full setup, all fresh ingredients, and a live-fire cooking performance that turns any gathering in this part of the Birmingham area into the evening your guests are still talking about the following week.`,
    middle:   (city, state) =>
      `Your chef arrives with a propane teppan grill, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events of 25–60+. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} estate evenings book 3–5 weeks out during graduation season and peak summer. Starting at $60 per adult, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of the Birmingham estate market.`,
  },
  // 621 — T1 Birmingham Metro & Corporate
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Corporate and Private Events for the Birmingham Metro`,
    opening:  (city, state) =>
      `Birmingham runs on relationship and occasion — the UAB medical community that defines the city's professional culture, the law firms incorporated here for generations, the financial services firms and regional corporate headquarters that anchor the Riverchase and downtown corridors, and the families who celebrate every milestone with the kind of gathering that requires something more than a restaurant reservation. Private hibachi in ${city} brings a certified teppanyaki chef to your outdoor space with the full setup and a live cooking performance that turns any gathering into the event people bring up at the next one.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For ${city} events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your venue stays spotless.`,
    closing:  (city, state) =>
      `${city} weekend events and corporate dinners book 2–3 weeks out. Graduation season (May–June) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of the Birmingham metro.`,
  },
  // 622 — T2 Huntsville & North Alabama Tech
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Events for North Alabama's Aerospace and Engineering Community`,
    opening:  (city, state) =>
      `North Alabama knows what excellence looks like. The aerospace and defense professionals at Redstone Arsenal and Cummings Research Park, the NASA families in Hampton Cove and Jones Valley, the engineering households that have made Huntsville and Madison among the fastest-growing communities in the country — they celebrate their milestones at home, and the backyard at a North Alabama engineering family property is the right venue for a gathering that meets the professional standard they hold at work. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with the full setup and a performance that earns its place.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your covered patio, deck, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision cooking, and every dish made to order in front of your guests. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} graduation season (May–June) books 3–5 weeks out. Standard private events book 2–3 weeks out. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day. Serving ${city}, Madison, and all of North Alabama.`,
  },
  // 623 — T3 Alabama University Markets
  {
    headline: (city) => `Mobile Hibachi in ${city}: Graduation Weekends and University Events in Alabama`,
    opening:  (city, state) =>
      `Commencement weekend in ${city} is one of the most celebrated occasions in the state — and every restaurant table in the area is committed weeks before the ceremony. The families who drove in from Montgomery, Atlanta, and Dallas for graduation have one goal: to be at the same table for the same dinner with every generation accounted for. Mobile hibachi at your ${city} vacation rental or short-term property brings a certified teppanyaki chef directly to your address with everything included. No reservation required. No dining room logistics. Just a live cooking performance for the group that made the trip.`,
    middle:   (city, state) =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The show runs 90–120 minutes from first flame to last plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} graduation weekends book 4–6 weeks ahead — don't wait. Football season home weekends book 2–4 weeks out. Starting at $60 per adult, $600 event minimum. Confirm outdoor open-flame cooking is permitted at your rental before booking — most ${city} properties allow it.`,
  },
  // 624 — T4 Central Alabama
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Private Dining for Central Alabama`,
    opening:  (city, state) =>
      `${city} is Alabama's capital city and the center of a professional community that knows how to mark an occasion. Maxwell AFB officers who have dined at private events on bases across the country. State government attorneys who have attended every format of professional entertainment in Montgomery. Corporate families in the Hyundai Motor Alabama corridor and the east ${city} professional residential communities. Private hibachi in ${city} brings a certified teppanyaki chef to your outdoor space with the full setup and a live cooking performance that makes any gathering worth attending — from the intimate anniversary dinner to the 40-person graduation party that needs dual stations.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For ${city} events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} private events book 2–3 weeks out; graduation season and holiday season fill 3–4 weeks ahead. Serving ${city} and all of Central Alabama — Prattville, Millbrook, Pike Road, Wetumpka, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 625 — T5 Gulf Coast & Mobile Bay
  {
    headline: (city) => `Hibachi at Home in ${city}: Beach House Events and Gulf Coast Celebrations`,
    opening:  (city, state) =>
      `People come to ${city} for the Gulf, the warmth, and the sense that this particular week is going to be something different from the rest of the year. Private hibachi at your ${city} beach house or vacation rental makes the best dinner of the trip happen at the property — a certified teppanyaki chef drives to your rental with the full self-contained setup, performs on your deck or pool area in front of everyone, and leaves the property spotless. No Highway 59 reservation battle. No group car coordination. No waiting for a table that was never big enough anyway.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The live cooking performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Gulf Coast rental property is immaculate when the chef leaves.`,
    closing:  (city, state) =>
      `Alabama Gulf Coast events book 3–5 weeks ahead in peak summer season. Starting at $60 per adult, $600 event minimum. Most quotes returned same day. Confirm outdoor open-flame cooking is permitted at your rental — most Gulf Coast properties allow it.`,
  },
]

// ─── City-specific intros (AL city-specific 626–640) ─────────────────────────
export const AL_CITY_INTROS = [
  // 626 — Birmingham (profileIdx 0)
  {
    headline: () => `Private Hibachi Chef in Birmingham`,
    opening:  () =>
      `Birmingham runs on relationship — the UAB medical center that has defined this city for generations, the law firms registered here because Alabama wrote the rules, the healthcare systems and financial institutions that anchor the professional economy, and the families who mark every occasion with a gathering that expects the best. Private hibachi in Birmingham brings a certified teppanyaki chef to your outdoor space — corporate venue in Southside, private home in Forest Park, backyard in Redmont Park, or patio in the Highland Park communities — with the full setup and a live cooking performance that turns any Birmingham gathering into the event people bring up at the next one.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Birmingham corporate events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your Birmingham venue or backyard stays spotless.`,
    closing:  () =>
      `Birmingham corporate events and private gatherings book 2–4 weeks out. Graduation season (May–June) fills fastest — reserve 3–5 weeks ahead for Saturday events. Serving Birmingham and all of the metro — Mountain Brook, Vestavia Hills, Hoover, Homewood, Trussville, Gardendale, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 627 — Mountain Brook (profileIdx 1)
  {
    headline: () => `Hibachi at Home in Mountain Brook`,
    opening:  () =>
      `Mountain Brook sets the standard for private entertaining in Alabama. The estate properties in the English Village corridor, the North Mountain Brook terrace homes where the city views align with the occasion, the Crestline Village backyards maintained for exactly the kind of evening that requires the outdoor space and not the restaurant — this is where the standard for a private dinner exists at a level that most venues in Birmingham cannot match. Hibachi at home in Mountain Brook brings a certified teppanyaki chef to your estate property with the full setup, hand-selected premium proteins, and a live-fire performance that earns its place on a Mountain Brook back terrace.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, Chilean sea bass, wagyu — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, pool deck, or estate lawn. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Mountain Brook property is exactly as you left it.`,
    closing:  () =>
      `Mountain Brook estate evenings and graduation parties book 4–5 weeks ahead. The most competitive Saturday dates fill early — reserve as soon as your occasion is planned. Serving Mountain Brook and all of the Birmingham area including Vestavia Hills, Hoover, Birmingham, and Homewood. Starting at $60/adult, $600 minimum. Premium protein packages available for every Mountain Brook event. Most quotes returned same day.`,
  },
  // 628 — Vestavia Hills (profileIdx 2)
  {
    headline: () => `Hibachi at Home in Vestavia Hills`,
    opening:  () =>
      `Vestavia Hills is Birmingham's graduation-party capital — the community where Vestavia Hills High commencement produces the most competitive outdoor-event Saturday of the year and where families have been planning milestone backyard parties for decades with the same expectation: that the occasion matches the home that holds it. Hibachi at home in Vestavia Hills brings a certified teppanyaki chef to your property with the full setup and a live cooking performance built for exactly the kind of crowd that shows up at a Vestavia Hills summer event. The graduation party the neighborhood heard about for weeks before. The anniversary that stopped looking like a dinner and started looking like an evening.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done. Your Vestavia Hills backyard is spotless when the chef leaves.`,
    closing:  () =>
      `Vestavia Hills graduation season (May–June) books 4–5 weeks ahead — reserve as soon as your commencement date is confirmed. Serving Vestavia Hills and the full Birmingham area including Mountain Brook, Hoover, Birmingham, and Homewood. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 629 — Hoover (profileIdx 3)
  {
    headline: () => `Hibachi at Home in Hoover`,
    opening:  () =>
      `Hoover is Alabama's largest suburb — and the graduation parties, birthday milestones, and family reunions that happen in these communities are the events that private hibachi was designed for. The Greystone estates, the Ross Bridge resort community backyards, the Spain Park High and Hoover High commencement calendars that fill every catering option in the Riverchase corridor for weeks — Hoover's outdoor entertaining culture runs year-round, and the format that keeps 40 guests together at the same grill for two hours is the one the neighborhood is still talking about at the next block event. Hibachi at home in Hoover brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that turns any outdoor gathering into the party the community references for years.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Hoover gatherings, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Hoover graduation season and summer weekends book 2–4 weeks ahead. Spain Park and Hoover High commencement Saturdays fill fastest. Serving Hoover and all of the Birmingham metro including Vestavia Hills, Mountain Brook, Birmingham, and Pelham. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 630 — Huntsville (profileIdx 4)
  {
    headline: () => `Hibachi at Home in Huntsville`,
    opening:  () =>
      `Huntsville is the South's aerospace capital — a city of NASA engineers, Redstone Arsenal professionals, Cummings Research Park defense contractors, and a growing technology corridor that has made this community one of the fastest-growing and highest-earning metro areas in the Southeast. The families here celebrate their milestones at home, in backyards designed for the kind of gathering that matches the professional standard they hold at work — and the format that does that is one where a certified teppanyaki chef arrives at your Hampton Cove home or Jones Valley property with a self-contained propane teppan grill, all fresh ingredients, and a live-fire performance that is genuinely worth describing to the colleagues who weren't there.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your covered patio, deck, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision cooking, and every dish made to order at the teppan in front of your guests. For Huntsville events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Huntsville graduation season (May–June) books 3–5 weeks out. Madison City and Huntsville City Schools commencement Saturdays are the most competitive — reserve as soon as your date is confirmed. Serving Huntsville, Madison, and all of North Alabama including the Research Park, Redstone, Hampton Cove, and Jones Valley communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 631 — Homewood (profileIdx 5)
  {
    headline: () => `Hibachi Catering in Homewood`,
    opening:  () =>
      `Homewood is Birmingham's most livable city — a small municipality with its own distinct identity carved out of the larger metro, where the Edgewood and West Homewood neighborhoods have a community feel that belongs to neither suburb nor urban core. The families and professionals here celebrate their milestones — Homewood High commencement parties, client appreciation dinners in the Green Springs Highway corridor, anniversary gatherings in the homes off Oxmoor Road — with the standard of a community that knows the difference between a good dinner and an event worth remembering. Hibachi catering in Homewood brings a certified teppanyaki chef to your property with everything included: the full grill, all fresh ingredients, and a live-fire performance that becomes the reason your guests are still talking about the evening the following week.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Homewood events over 25 guests, we bring dual chef stations. Full cleanup when dinner is done. Your Homewood backyard or outdoor venue is spotless when the chef leaves.`,
    closing:  () =>
      `Homewood graduation season and summer weekends book 2–4 weeks ahead. Serving Homewood and all of greater Birmingham — Birmingham, Mountain Brook, Vestavia Hills, Hoover, Midtown, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 632 — Madison (profileIdx 6)
  {
    headline: () => `Hibachi at Home in Madison`,
    opening:  () =>
      `Madison is the community that North Alabama's aerospace and defense professionals chose when they needed great schools and a genuine neighborhood — Madison City Schools has produced some of the highest academic outcomes in the state, and the families in the Research Park corridor, the Mill Creek communities, and the subdivisions along Sullivan Street have built a culture of celebration that matches the quality of the work they bring home from Cummings Research Park and Redstone Arsenal each day. Hibachi at home in Madison brings a certified teppanyaki chef to your property with everything included — the full self-contained setup, hand-selected fresh proteins, and a live-fire cooking performance that earns its place at any Madison professional household event.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your covered patio, deck, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision cooking, and every dish made to order in front of your guests. For Madison events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Madison graduation season (May–June) books 3–5 weeks out — Madison City Schools commencement Saturdays fill the fastest. Reserve as soon as your date is confirmed. Serving Madison and all of North Alabama — Huntsville, Research Park corridor, Hampton Cove, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 633 — Tuscaloosa (profileIdx 7)
  {
    headline: () => `Mobile Hibachi in Tuscaloosa`,
    opening:  () =>
      `Tuscaloosa has two identities: the permanent city of 100,000 people who live here year-round, and the University of Alabama campus that makes this the most emotionally charged address in the state during commencement season and football Saturdays. The family who drove from Atlanta to watch their son walk at Bryant-Denny, the alumni who flew in from Chicago for homecoming weekend, the parents who rented every available house within walking distance of the Quad for their daughter's graduation — they all face the same problem on commencement weekend: every Tuscaloosa restaurant is fully committed before the ceremony ends. Mobile hibachi in Tuscaloosa brings a certified teppanyaki chef directly to your rental property or home with the full self-contained setup and a live cooking performance that turns any gathering into the event the family remembers from that graduation trip.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25 at your Tuscaloosa rental, we bring two chef stations. Full cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Tuscaloosa UA graduation weekends book 4–6 weeks ahead — reserve as soon as your commencement date is confirmed. Football season home weekends and Iron Bowl dates also book 3–5 weeks out. Confirm outdoor open-flame cooking is permitted at your rental — most Tuscaloosa properties allow it. Starting at $60/adult, $30/child, $600 event minimum. Serving Tuscaloosa and all of West Alabama.`,
  },
  // 634 — Auburn (profileIdx 8)
  {
    headline: () => `Hibachi Catering in Auburn`,
    opening:  () =>
      `Auburn is a university town with a championship football program, a School of Engineering with a national reputation, and a commencement weekend that brings families from every state in the South to a city of 75,000. The graduation families who rent houses near Toomer's Corner for commencement, the War Eagle alumni who come back for the Iron Bowl, the engineering-family parents who drove from Atlanta or Nashville for their child's commencement — they all face the same reality on graduation weekend: every Auburn restaurant with group dining capacity is committed weeks before the ceremony. Hibachi catering in Auburn brings a certified teppanyaki chef directly to your rental property with the full self-contained setup and a live fire performance that keeps every generation at the same table for the full dinner.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Auburn graduation groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Auburn graduation weekends and Iron Bowl Saturdays book 4–6 weeks ahead — reserve as soon as your event date is confirmed. Confirm outdoor open-flame cooking is allowed at your rental before booking. Serving Auburn, Opelika, and all of East Alabama. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 635 — Montgomery (profileIdx 9)
  {
    headline: () => `Private Hibachi Chef in Montgomery`,
    opening:  () =>
      `Montgomery is Alabama's capital — the city where a bus boycott changed the course of American history, where Maxwell Air Force Base has stationed careers and families for generations, and where the professional community of state government attorneys, federal agency households, and corporate families in the east corridor has built a culture of private entertaining that expects the occasion to match the occasion. Private hibachi in Montgomery brings a certified teppanyaki chef to your outdoor space — Pike Road backyard, Prattville covered patio, Millbrook yard, or any Montgomery area property — with the full setup and a live cooking performance that turns any gathering into the event people reference the next time they're planning one.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Montgomery events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Montgomery private events book 2–3 weeks out. Graduation season (May–June) and the holiday season fill 3–4 weeks ahead. Serving Montgomery, Prattville, Millbrook, Pike Road, Wetumpka, and all of Central Alabama. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 636 — Mobile (profileIdx 10)
  {
    headline: () => `Hibachi at Home in Mobile`,
    opening:  () =>
      `Mobile is Alabama's port city — older than the state itself, with a Mardi Gras tradition that predates New Orleans, a Mobile Bay waterfront that has anchored Southern culture for three centuries, and a professional and residential community that knows how to celebrate. The families in Midtown Mobile, the Eastern Shore households in the communities across the bay, the bayfront property owners in the Dauphin Island corridor — they mark their milestones at home, and the property they've built or maintained is the venue worth using. Hibachi at home in Mobile brings a certified teppanyaki chef to your outdoor space with the full self-contained setup and a live-fire performance that turns any gathering into the Mobile Bay evening people have been describing to friends for weeks.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For Mobile events over 25 guests, we bring dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Mobile private events and bay-view dinners book 2–3 weeks out. Summer Gulf Coast season (June–August) fills 3–5 weeks ahead. Serving Mobile, Daphne, Spanish Fort, Fairhope, and all of the Mobile Bay area. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 637 — Fairhope (profileIdx 11)
  {
    headline: () => `Backyard Hibachi in Fairhope`,
    opening:  () =>
      `Fairhope is the Eastern Shore's most celebrated small city — a bluff-top arts community overlooking Mobile Bay where the properties range from Victorian craftsman homes on the pier walk to modern bayfront estates above the water, and where the culture of celebrating in your own outdoor space has been the standard for as long as the community has existed. Backyard hibachi in Fairhope brings a certified teppanyaki chef to your property — bluff-view terrace, downtown backyard, Greeno Road bayfront deck, or any Fairhope-area outdoor space — with everything included and a live-fire cooking performance that earns its place at any Fairhope gathering worth hosting.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, deck, or yard. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Fairhope events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Fairhope and Eastern Shore events book 2–4 weeks out. Gulf Coast summer peak (June–August) fills faster — reserve 3–4 weeks ahead for weekend dates. Serving Fairhope, Daphne, Spanish Fort, Mobile, and all of the Eastern Shore and Mobile Bay corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 638 — Daphne (profileIdx 12)
  {
    headline: () => `Backyard Hibachi in Daphne`,
    opening:  () =>
      `Daphne sits on the Eastern Shore of Mobile Bay — the community across the water from Mobile proper where the bay-view properties, the Lake Forest neighborhood gatherings, and the Eastern Shore's fastest-growing residential corridor have created a culture of backyard entertaining that takes the bay as its backdrop and the occasion as its standard. Backyard hibachi in Daphne brings a certified teppanyaki chef to your outdoor space — bay-view deck, covered patio, backyard overlooking the water or the trees — with the full self-contained setup and a live-fire cooking performance that makes any Daphne gathering the one people are still describing the following week.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck or patio. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Daphne events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Daphne and Eastern Shore events book 2–4 weeks out. Gulf Coast peak summer (June–August) fills faster. Serving Daphne, Fairhope, Spanish Fort, Mobile, and all of the Eastern Shore and Mobile Bay corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 639 — Gulf Shores (profileIdx 13)
  {
    headline: () => `Mobile Hibachi in Gulf Shores`,
    opening:  () =>
      `Gulf Shores is Alabama's beach destination — the stretch of Gulf Coast where white sand beaches, vacation rental houses, and the annual rhythms of Alabama summer tourism have created the most competitive private event calendar on the coast. The family reunion group that rented the six-bedroom beach house a year in advance, the bachelorette weekend crew who needed the best dinner of the trip without fighting for a Highway 59 reservation, the birthday group that drove from Birmingham and Nashville for a weekend at the Gulf — they all face the same reality: every Gulf Shores restaurant with group dining capacity is committed weeks before their date. Mobile hibachi in Gulf Shores brings a certified teppanyaki chef directly to your beach house or vacation rental with the full self-contained setup and a live-fire performance that becomes the story of the trip.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your beach deck, pool area, or backyard. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For Gulf Shores groups over 25, we bring two chef stations. Full cleanup when dinner ends. Your rental property is spotless.`,
    closing:  () =>
      `Gulf Shores peak summer (June–August) books 3–5 weeks ahead. July 4th weekend books 5–6 weeks out. Confirm outdoor open-flame cooking is permitted at your rental — most Gulf Shores properties allow it. Serving Gulf Shores and all of Alabama's Gulf Coast. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 640 — Orange Beach (profileIdx 14)
  {
    headline: () => `Private Hibachi Chef in Orange Beach`,
    opening:  () =>
      `Orange Beach sits just east of Gulf Shores on Alabama's most spectacular stretch of Gulf Coast — a community of vacation rentals, Gulf-view condominiums, and waterfront properties where the combination of the Perdido Pass, the Gulf of Mexico, and the Alabama/Florida state line creates a beach destination that draws visitors from across the Southeast for anniversary getaways, girls weekends, and family vacation trips that need to be worth the drive. Private hibachi in Orange Beach brings a certified teppanyaki chef to your rental property with everything included — the full self-contained setup, hand-selected fresh proteins, and a live-fire cooking performance at your deck or pool area that becomes the dinner the entire trip is measured against.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, premium proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your Gulf-view deck, pool area, or outdoor patio. The performance runs 90–120 minutes from first flame to final plate. For Orange Beach groups over 25, we deploy dual chef stations. Full cleanup when dinner is done. Your rental property is immaculate when the chef leaves.`,
    closing:  () =>
      `Orange Beach peak summer (June–August) books 3–5 weeks ahead. Confirm outdoor open-flame cooking is permitted at your rental before booking. Serving Orange Beach, Gulf Shores, Perdido Key, and all of Alabama's Gulf Coast. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ─── Blog posts (3 slots keyed by variant % 3) ────────────────────────────────
// Slot 0: T0 (Birmingham Luxury) + T3 (University)
// Slot 1: T1 (Birmingham Metro) + T4 (Central Alabama)
// Slot 2: T2 (Huntsville Tech) + T5 (Gulf Coast)
const AL_BLOG_POSTS = [
  // Slot 0 — T0 Birmingham Luxury + T3 University (v%3=0: Mountain Brook, Vestavia Hills, Tuscaloosa, Auburn)
  [
    { slug: 'hibachi-at-home-alabama-guide',              title: 'Private Hibachi Chef in Alabama: The Complete Guide to All Six Markets',                           excerpt: 'From Birmingham estate dinners and Mountain Brook graduation parties to Huntsville aerospace families and Gulf Shores beach house events — how private hibachi works across Alabama.', category: 'Guide', readTime: '10 min read' },
    { slug: 'private-hibachi-alabama-graduation-party',   title: 'Private Hibachi for Alabama Graduation Parties: UA, Auburn, and Birmingham',                      excerpt: 'How to book a private hibachi chef for graduation season in Alabama — when to book, what to expect, and how to handle any size group.', category: 'Guide', readTime: '7 min read' },
    { slug: 'hibachi-at-home-vs-restaurant',              title: 'Hibachi at Home vs. Restaurant: Which Is Worth It?',                                              excerpt: 'Birmingham hibachi restaurants vs. a private chef at home — the real cost, quality, and convenience comparison.', category: 'Guide', readTime: '5 min read' },
  ],
  // Slot 1 — T1 Birmingham Metro + T4 Central AL (v%3=1: Birmingham, Hoover, Homewood, Montgomery)
  [
    { slug: 'hibachi-at-home-alabama-guide',              title: 'Private Hibachi Chef in Alabama: The Complete Guide to All Six Markets',                           excerpt: 'From Birmingham estate and corporate events to Huntsville aerospace-family dinners, Gulf Shores beach house events, and graduation parties across every Alabama community.', category: 'Guide', readTime: '10 min read' },
    { slug: 'private-hibachi-alabama-graduation-party',   title: 'Private Hibachi for Alabama Graduation Parties: The Complete Guide',                              excerpt: 'How to book a private hibachi chef for graduation season in Alabama — Hoover, Homewood, Birmingham metro, and Montgomery. When to book and what to expect.', category: 'Guide', readTime: '7 min read' },
    { slug: 'hibachi-catering-corporate-events',          title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',                                    excerpt: 'Team dinners, client entertainment, and Birmingham professional events — why private hibachi beats every other corporate format.', category: 'Guide', readTime: '5 min read' },
  ],
  // Slot 2 — T2 Huntsville + T5 Gulf Coast (v%3=2: Huntsville, Madison, Mobile, Fairhope, Daphne, Gulf Shores, Orange Beach)
  [
    { slug: 'hibachi-at-home-alabama-guide',                                    title: 'Private Hibachi Chef in Alabama: The Complete Guide to All Six Markets',                   excerpt: 'From Huntsville aerospace-family events and North Alabama graduation parties to Gulf Shores beach house dinners and Orange Beach vacation rental events.', category: 'Guide', readTime: '10 min read' },
    { slug: 'private-hibachi-gulf-shores-orange-beach-beach-house',             title: 'Private Hibachi at Your Gulf Shores or Orange Beach Beach House: The Complete Guide',    excerpt: 'Everything you need to know about booking a private hibachi chef at your Alabama Gulf Coast vacation rental — when to book, what to expect, and how it works.', category: 'Guide', readTime: '7 min read' },
    { slug: 'hibachi-bachelorette-party',                                       title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',                           excerpt: 'Why Gulf Shores and Orange Beach beach house hibachi has become Alabama\'s most requested bachelorette dinner experience.', category: 'Guide', readTime: '6 min read' },
  ],
]

// ─── Major cities map (Batch 1: 5 cities) ─────────────────────────────────────
const AL_MAJOR_CITIES = {
  // Batch 1 (profileIdx 0–4)
  'birmingham':     { v: 1, profileIdx: 0,  nearby: ['Mountain Brook', 'Vestavia Hills', 'Hoover', 'Homewood'] },
  'mountain-brook': { v: 0, profileIdx: 1,  nearby: ['Birmingham', 'Vestavia Hills', 'Homewood', 'Hoover'] },
  'vestavia-hills': { v: 0, profileIdx: 2,  nearby: ['Birmingham', 'Mountain Brook', 'Hoover', 'Homewood'] },
  'hoover':         { v: 1, profileIdx: 3,  nearby: ['Birmingham', 'Vestavia Hills', 'Mountain Brook', 'Homewood'] },
  'huntsville':     { v: 2, profileIdx: 4,  nearby: ['Madison', 'Birmingham'] },
  // Batch 2 (profileIdx 5–8)
  'homewood':       { v: 1, profileIdx: 5,  nearby: ['Birmingham', 'Mountain Brook', 'Vestavia Hills', 'Hoover'] },
  'madison':        { v: 2, profileIdx: 6,  nearby: ['Huntsville', 'Birmingham'] },
  'tuscaloosa':     { v: 3, profileIdx: 7,  nearby: ['Birmingham'] },
  'auburn':         { v: 3, profileIdx: 8,  nearby: ['Birmingham', 'Montgomery'] },
  // Batch 3 (profileIdx 9–11)
  'montgomery':     { v: 4, profileIdx: 9,  nearby: ['Birmingham', 'Tuscaloosa'] },
  'mobile':         { v: 5, profileIdx: 10, nearby: ['Fairhope', 'Daphne', 'Gulf Shores'] },
  'fairhope':       { v: 5, profileIdx: 11, nearby: ['Mobile', 'Daphne', 'Gulf Shores', 'Orange Beach'] },
  // Batch 4 (profileIdx 12–14)
  'daphne':         { v: 5, profileIdx: 12, nearby: ['Mobile', 'Fairhope', 'Gulf Shores', 'Orange Beach'] },
  'gulf-shores':    { v: 5, profileIdx: 13, nearby: ['Orange Beach', 'Fairhope', 'Mobile'] },
  'orange-beach':   { v: 5, profileIdx: 14, nearby: ['Gulf Shores', 'Fairhope', 'Mobile'] },
}

// ─── Display name overrides (multi-word city slugs) ───────────────────────────
const AL_CITY_DISPLAY_NAMES = {
  'mountain-brook': 'Mountain Brook',
  'vestavia-hills': 'Vestavia Hills',
  'gulf-shores':    'Gulf Shores',
  'orange-beach':   'Orange Beach',
}

// ─── Custom meta overrides ────────────────────────────────────────────────────
const AL_CUSTOM_META = {
  'birmingham': {
    title: 'Private Hibachi Chef in Birmingham, AL | Corporate & Private Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Birmingham, AL for corporate team dinners, graduation parties, and estate milestone events. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'mountain-brook': {
    title: 'Hibachi at Home in Mountain Brook, AL | Estate Private Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Mountain Brook estate. Premium proteins, live teppanyaki performance, complete cleanup. Perfect for graduation parties and anniversary dinners. From $60/adult.',
  },
  'vestavia-hills': {
    title: 'Hibachi at Home in Vestavia Hills, AL | Graduation Parties & Private Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Vestavia Hills, AL for graduation parties, anniversary dinners, and backyard milestone events. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'hoover': {
    title: 'Hibachi at Home in Hoover, AL | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Hoover, AL property. Live teppanyaki, full setup & cleanup. Perfect for graduation parties and family milestones. Serving Hoover and the Birmingham metro. From $60/adult.',
  },
  'huntsville': {
    title: 'Hibachi at Home in Huntsville, AL | Aerospace & Engineering Families | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Huntsville, AL home. Live teppanyaki, full setup & cleanup. Perfect for graduation parties, corporate events, and North Alabama milestone occasions. From $60/adult.',
  },
  'homewood': {
    title: 'Hibachi Catering in Homewood, AL | Corporate & Graduation Events | Hibachi Connect',
    desc:  'Book hibachi catering in Homewood, AL for graduation parties, corporate events, and private dinners. Certified teppanyaki chef, full setup & cleanup. Serving Homewood and greater Birmingham. From $60/adult.',
  },
  'madison': {
    title: 'Hibachi at Home in Madison, AL | North Alabama Private Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Madison, AL home. Live teppanyaki, full setup & cleanup. Perfect for graduation parties and engineering-family milestone events in North Alabama. From $60/adult.',
  },
  'tuscaloosa': {
    title: 'Mobile Hibachi in Tuscaloosa, AL | UA Graduation Weekends | Hibachi Connect',
    desc:  'A mobile hibachi chef comes to your Tuscaloosa, AL rental property. Full setup, live teppanyaki performance, complete cleanup. Perfect for UA graduation weekends and family gatherings. From $60/adult.',
  },
  'auburn': {
    title: 'Hibachi Catering in Auburn, AL | Graduation Weekends & AU Events | Hibachi Connect',
    desc:  'Book a hibachi chef at your Auburn, AL rental for graduation weekends, football Saturdays, and family gatherings. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'montgomery': {
    title: 'Private Hibachi Chef in Montgomery, AL | Military & Corporate Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Montgomery, AL for graduation parties, military milestones, and corporate events. Certified teppanyaki chef, full setup & cleanup. Serving Central Alabama. From $60/adult.',
  },
  'mobile': {
    title: 'Hibachi at Home in Mobile, AL | Mobile Bay Private Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Mobile, AL home or waterfront property. Live teppanyaki, full setup & cleanup. Perfect for family reunions and Mobile Bay milestone events. From $60/adult.',
  },
  'fairhope': {
    title: 'Backyard Hibachi in Fairhope, AL | Eastern Shore Private Dining | Hibachi Connect',
    desc:  'A certified hibachi chef at your Fairhope, AL bayfront or backyard property. Live teppanyaki, full setup & cleanup. Perfect for anniversary dinners and Eastern Shore celebrations. From $60/adult.',
  },
  'daphne': {
    title: 'Backyard Hibachi in Daphne, AL | Eastern Shore Bay-View Events | Hibachi Connect',
    desc:  'A certified hibachi chef at your Daphne, AL bay-view or Eastern Shore property. Live teppanyaki, full setup & cleanup. Perfect for birthday celebrations and Gulf Coast gatherings. From $60/adult.',
  },
  'gulf-shores': {
    title: 'Mobile Hibachi in Gulf Shores, AL | Beach House Events | Hibachi Connect',
    desc:  'A mobile hibachi chef comes to your Gulf Shores, AL beach house or vacation rental. Full setup, live teppanyaki performance, complete cleanup. Perfect for family reunions and bachelorette weekends. From $60/adult.',
  },
  'orange-beach': {
    title: 'Private Hibachi Chef in Orange Beach, AL | Gulf-View Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Orange Beach, AL rental or Gulf-view property. Live teppanyaki, full setup & cleanup. Perfect for anniversary getaways and Gulf Coast celebrations. From $60/adult.',
  },
}

// ─── Main builder ─────────────────────────────────────────────────────────────
export function getAlCityData(citySlug, cityName) {
  const entry       = AL_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry
  const customMeta  = AL_CUSTOM_META[citySlug] || null
  const displayName = AL_CITY_DISPLAY_NAMES[citySlug] ?? cityName
  return {
    cityName:     displayName,
    stateAbbr:    'AL',
    stateName:    'Alabama',
    stateSlug:    'alabama',
    variant:      v % 3,
    heroImage:    AL_THEME_HEROES[v],
    heroSubtitle: AL_HERO_SUBTITLES[v](displayName),
    heroH1Prefix: profileIdx != null ? AL_PROFILE_H1_PREFIXES[profileIdx] : AL_THEME_H1_PREFIXES[v],
    uniqueIntroVariant:   profileIdx != null ? 626 + profileIdx : 620 + v,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: profileIdx != null ? 626 + profileIdx : 620 + v,
    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),
    testimonials:      AL_TESTIMONIALS[citySlug] || [],
    nearbyCities:      nearby,
    nearbyMajorCities: ['Birmingham', 'Huntsville', 'Montgomery', 'Gulf Shores', 'Orange Beach', 'Mobile'],
  }
}

// ─── getAlHowItWorks ──────────────────────────────────────────────────────────
export function getAlHowItWorks(citySlug) {
  return AL_HOW_IT_WORKS
}

// ─── getAlSectionVariant ──────────────────────────────────────────────────────
export function getAlSectionVariant(citySlug) {
  const entry = AL_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return AL_SECTION_VARIANTS[entry.v]
}

// ─── getAlCityImage ───────────────────────────────────────────────────────────
export function getAlCityImage(citySlug) {
  return AL_CITY_IMAGE_MAP[citySlug] || null
}

// ─── getAlSupportImages ───────────────────────────────────────────────────────
export function getAlSupportImages(citySlug) {
  return AL_SUPPORT_IMAGES[citySlug] || null
}

// ─── getAlBlogPosts ───────────────────────────────────────────────────────────
export function getAlBlogPosts(citySlug) {
  const entry = AL_MAJOR_CITIES[citySlug]
  if (!entry) return []
  return AL_BLOG_POSTS[entry.v % 3] || []
}
