// =============================================================================
// lib/texasData.js — Texas Expansion (Redo)
// 32 cities · 6 geographic themes · indices 641–678
// Generic: 641–646 | City-specific: 647–678
//
// Theme 0: DFW Luxury             (Highland Park, University Park, Southlake, Westlake, Colleyville)
// Theme 1: DFW Metro & Corporate  (Dallas, Fort Worth, Plano, Frisco, McKinney, Allen, Arlington)
// Theme 2: Houston Metro          (Houston, The Woodlands, Katy, Sugar Land, Pearland, Friendswood)
// Theme 3: Austin Metro           (Austin, Round Rock, Cedar Park, Georgetown, Lakeway)
// Theme 4: San Antonio & Hill Country (San Antonio, Boerne, New Braunfels, Schertz, Kyle)
// Theme 5: Gulf Coast & Destinations  (Galveston, Corpus Christi, Fredericksburg, Waco)
//
// Batch 1 (profileIdx 0–7):   Highland Park, University Park, Southlake, Westlake, Colleyville, Dallas, Fort Worth, Plano
// Batch 2 (profileIdx 8–15):  Frisco, McKinney, Allen, Arlington, Houston, The Woodlands, Katy, Sugar Land
// Batch 3 (profileIdx 16–23): Pearland, Friendswood, Austin, Round Rock, Cedar Park, Georgetown, Lakeway, San Antonio
// Batch 4 (profileIdx 24–31): Boerne, New Braunfels, Schertz, Kyle, Galveston, Corpus Christi, Fredericksburg, Waco
// =============================================================================

// ─── Theme heroes ─────────────────────────────────────────────────────────────
const TX_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0 — DFW Luxury
  '/pics/hibachi-dallas.jpg',         // T1 — DFW Metro & Corporate
  '/pics/hero-1.jpg',                 // T2 — Houston Metro
  '/pics/hibachi-austin-home.jpg',    // T3 — Austin Metro
  '/pics/hibachi-at-home.jpg',        // T4 — San Antonio & Hill Country
  '/pics/hibachi-pool-party.jpg',     // T5 — Gulf Coast & Destinations
]

// ─── Theme H1 prefixes (fallback for non-profileIdx cities) ───────────────────
const TX_THEME_H1_PREFIXES = [
  'Hibachi at Home in',      // T0
  'Private Hibachi Chef in', // T1
  'Hibachi at Home in',      // T2
  'Private Hibachi Chef in', // T3
  'Hibachi at Home in',      // T4
  'Mobile Hibachi in',       // T5
]

// ─── Profile H1 prefixes (all 32 cities, by profileIdx) ──────────────────────
const TX_PROFILE_H1_PREFIXES = [
  'Hibachi at Home in',      // 0  — Highland Park
  'Hibachi at Home in',      // 1  — University Park
  'Private Hibachi Chef in', // 2  — Southlake
  'Private Hibachi Chef in', // 3  — Westlake
  'Hibachi at Home in',      // 4  — Colleyville
  'Private Hibachi Chef in', // 5  — Dallas
  'Hibachi at Home in',      // 6  — Fort Worth
  'Hibachi Catering in',     // 7  — Plano
  'Hibachi at Home in',      // 8  — Frisco
  'Hibachi at Home in',      // 9  — McKinney
  'Backyard Hibachi in',     // 10 — Allen
  'Hibachi Catering in',     // 11 — Arlington
  'Private Hibachi Chef in', // 12 — Houston
  'Private Hibachi Chef in', // 13 — The Woodlands
  'Hibachi at Home in',      // 14 — Katy
  'Hibachi at Home in',      // 15 — Sugar Land
  'Backyard Hibachi in',     // 16 — Pearland
  'Mobile Hibachi in',       // 17 — Friendswood
  'Private Hibachi Chef in', // 18 — Austin
  'Hibachi at Home in',      // 19 — Round Rock
  'Hibachi at Home in',      // 20 — Cedar Park
  'Hibachi Catering in',     // 21 — Georgetown
  'Mobile Hibachi in',       // 22 — Lakeway
  'Hibachi at Home in',      // 23 — San Antonio
  'Mobile Hibachi in',       // 24 — Boerne
  'Mobile Hibachi in',       // 25 — New Braunfels
  'Hibachi at Home in',      // 26 — Schertz
  'Backyard Hibachi in',     // 27 — Kyle
  'Mobile Hibachi in',       // 28 — Galveston
  'Hibachi Catering in',     // 29 — Corpus Christi
  'Hibachi Catering in',     // 30 — Fredericksburg
  'Hibachi at Home in',      // 31 — Waco
]

// ─── Hero subtitles (6 themes) ───────────────────────────────────────────────
const TX_HERO_SUBTITLES = [
  (city) => `Estate Private Dining · Executive Entertaining · Milestone Celebrations · Serving ${city} & the DFW Luxury Market`,
  (city) => `Corporate Events · Family Milestones · Graduation Parties · Serving ${city} & the DFW Metro`,
  (city) => `Quinceañeras · Graduation Parties · Corporate Events · Serving ${city} & Greater Houston`,
  (city) => `Tech & Professional Families · Graduation Celebrations · Private Dining · Serving ${city} & the Austin Metro`,
  (city) => `Military Families · Quinceañeras · Hill Country Events · Serving ${city} & the San Antonio Area`,
  (city) => `Beach Houses · Vacation Rentals · Destination Celebrations · Serving ${city} & All of Texas`,
]

// ─── Local highlights (6 themes) ─────────────────────────────────────────────
const TX_LOCAL_HIGHLIGHTS = [
  // T0 — DFW Luxury
  (city) => [
    `Estate private dining for executive households throughout ${city} and the greater DFW luxury market`,
    'Premium proteins — filet mignon, lobster tail, Chilean sea bass, wagyu — as the default expectation at estate events',
    `Perfect for milestone anniversaries, landmark birthdays, and private dining occasions at ${city} estate properties`,
    `Graduation season (May–June) in ${city} and the DFW luxury corridor books 4–5 weeks ahead for Saturday events`,
    'Dual-station capacity for large estate gatherings of 25–60+ guests; single station for intimate dinners of 10–20',
    'Full setup and complete cleanup — your estate property is exactly as it was when the chef arrived',
  ],
  // T1 — DFW Metro & Corporate
  (city) => [
    `Corporate team events and client appreciation dinners throughout ${city} and the DFW metro`,
    'Perfect for Dallas tech and finance professional milestones, law firm gatherings, and corporate client entertainment',
    `Ideal for graduation parties, family milestones, and backyard celebrations across the ${city} area`,
    `${city} weekend dates book 2–3 weeks out; graduation season (May–June) fills 3–5 weeks ahead`,
    'For groups over 25, dual chef stations run simultaneously — the format built for large DFW family events',
    'Full setup and cleanup included — chef arrives with the complete teppan grill, all proteins, and every piece of equipment',
  ],
  // T2 — Houston Metro
  (city) => [
    `Private events for the Houston energy, medical, and technology professional household community`,
    `Perfect for quinceañeras, multi-generational family milestones, and graduation parties in ${city}`,
    `Ideal for Houston Medical Center professional dinners, energy industry corporate events, and family celebrations`,
    `${city} graduation season (May–June) books 3–5 weeks ahead for peak Saturday events`,
    'Dual-station capacity for groups over 25 — the format for large Houston-area family gatherings',
    'Chef arrives with the full self-contained propane teppan grill — no gas hookup required at any Houston-area property',
  ],
  // T3 — Austin Metro
  (city) => [
    `Private events for the Austin tech community — Apple, Dell, Tesla, Oracle, and the startup corridor families`,
    'Perfect for UT Austin graduation weekends, tech company team events, and Austin milestone celebrations',
    `Ideal for Hill Country-area lakeside dinners, ${city} pool deck celebrations, and music season events`,
    `${city} graduation season and Austin City Limits season book 3–5 weeks ahead`,
    'Dual-station capacity for groups over 25 — the format for large Austin tech-family graduation gatherings',
    'Chef arrives fully self-contained — propane teppan grill, no hookup needed at any Austin-area property',
  ],
  // T4 — San Antonio & Hill Country
  (city) => [
    `Private events for military families, healthcare professionals, and Hill Country households in ${city}`,
    'Perfect for JBSA milestones, quinceañeras, UT Health San Antonio gatherings, and family reunions',
    `Ideal for Hill Country ranch dinners, ${city} backyard graduation parties, and multi-generational celebrations`,
    `${city} graduation season and quinceañera season books 3–5 weeks ahead for Saturday events`,
    'Dual-station capacity for large Hill Country gatherings of 25–60+ guests',
    'Chef arrives fully self-contained at any San Antonio-area or Hill Country ranch property',
  ],
  // T5 — Gulf Coast & Destinations
  (city) => [
    `Beach house and vacation rental hibachi events throughout ${city} and the Texas Gulf Coast`,
    'Perfect for family reunions, bachelorette weekends, and vacation group dinners at Gulf Coast rental properties',
    `Ideal for ${city} destination celebrations, birthday beach trips, and multi-generational vacation dinners`,
    `${city} peak summer (June–August) books 3–5 weeks ahead; spring break dates fill even faster`,
    `Chef comes directly to your ${city} beach house, vacation rental, or destination property — no reservation battle`,
    'Full setup and complete cleanup — your Gulf Coast rental property is spotless when the chef leaves',
  ],
]

// ─── Occasions (6 themes · flat strings required) ─────────────────────────────
const TX_OCCASIONS = [
  // T0 — DFW Luxury
  ['Birthday Parties', 'Anniversary Dinners', 'Graduation Parties', 'Estate Dinner Parties', 'Client Appreciation Events', 'Holiday Gatherings', 'Engagement Parties', 'Retirement Celebrations', 'Family Milestones', 'Wedding Rehearsal Dinners'],
  // T1 — DFW Metro & Corporate
  ['Corporate Team Dinners', 'Client Appreciation Events', 'Graduation Parties', 'Birthday Parties', 'Anniversary Dinners', 'Bachelorette Parties', 'Family Reunions', 'Holiday Gatherings', 'Retirement Parties', 'Backyard Celebrations'],
  // T2 — Houston Metro
  ['Quinceañeras', 'Graduation Parties', 'Corporate Team Events', 'Birthday Parties', 'Anniversary Dinners', 'Family Reunions', 'Client Appreciation Events', 'Holiday Gatherings', 'Retirement Parties', 'Neighborhood Gatherings'],
  // T3 — Austin Metro
  ['Graduation Weekends', 'Corporate Team Events', 'Birthday Parties', 'Tech Company Events', 'Anniversary Dinners', 'Family Reunions', 'Bachelorette Parties', 'Holiday Gatherings', 'Retirement Parties', 'Pool Deck Celebrations'],
  // T4 — San Antonio & Hill Country
  ['Quinceañeras', 'Military Milestone Dinners', 'Graduation Parties', 'Birthday Parties', 'Family Reunions', 'Anniversary Dinners', 'Corporate Team Events', 'Holiday Gatherings', 'Retirement Parties', 'Hill Country Ranch Events'],
  // T5 — Gulf Coast & Destinations
  ['Family Reunions', 'Bachelorette Weekends', 'Birthday Beach Trips', 'Vacation Group Dinners', 'Bachelor Parties', 'Girls Weekends', 'Anniversary Getaways', 'Beach House Events', 'Spring Break Dinners', 'Summer Vacation Gatherings'],
]

// ─── FAQ sets (6 themes) ──────────────────────────────────────────────────────
const TX_FAQ_SETS = [
  // T0 — DFW Luxury
  (city) => [
    {
      q: `Can you set up at an estate property or large backyard in ${city}?`,
      a: `Absolutely — estate homes, covered terraces, and large backyard spaces throughout ${city} and the DFW luxury market are our most common setup environment. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most Highland Park, University Park, Southlake, and Westlake estate properties exceed this easily. We bring everything — no outdoor kitchen or gas hookup required.`,
    },
    {
      q: `What premium proteins are available for ${city} estate events?`,
      a: `Beyond the standard menu (chicken, steak, shrimp, salmon), we offer filet mignon, lobster tail, Chilean sea bass, and wagyu as per-guest upgrades. For most ${city} estate events, premium proteins are the default rather than the conversation. We recommend building the menu around the occasion — most anniversary and milestone estate dinners in the DFW luxury market go full premium.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation party?`,
      a: `Graduation season in ${city} and the DFW luxury corridor runs through May and June, and Saturday events fill 4–5 weeks in advance. We strongly recommend booking as soon as your graduation date is confirmed. Weekday graduation dinners have more flexibility — 2–3 weeks' notice is usually sufficient for Monday through Thursday events.`,
    },
    {
      q: `Can you handle large estate gatherings for 30 or more guests in ${city}?`,
      a: `Yes — large estate events are among our most common ${city} bookings. For groups over 25, we deploy dual chef stations running in parallel. Estate properties with large terraces and outdoor entertaining areas are ideal for the dual-station format. A 40-guest anniversary dinner at a ${city} property with two chefs running simultaneously is a completely different experience than a crowded restaurant private room.`,
    },
    {
      q: `Do you serve all of the DFW luxury market including Westlake, Southlake, and Preston Hollow?`,
      a: `Yes — we serve the full DFW luxury corridor: ${city}, Highland Park, University Park, Westlake, Southlake, Colleyville, Preston Hollow, Frisco, and all surrounding communities. Most DFW luxury market locations fall within our standard service radius with no added travel fee.`,
    },
    {
      q: `What do I need to provide for an estate hibachi event in ${city}?`,
      a: `Tables and chairs for your guests. We bring everything else: the full propane teppan grill, all proteins, vegetables, fried rice, house-made sauces, plates, chopsticks, and serving utensils. Complete setup before dinner and full cleanup after — your ${city} estate property is spotless when we leave.`,
    },
  ],
  // T1 — DFW Metro & Corporate
  (city) => [
    {
      q: `Can you set up at a ${city} corporate venue or residential backyard?`,
      a: `Yes — corporate outdoor spaces, private event venues, and residential backyards throughout ${city} and the DFW metro are among our most common setups. We need a flat outdoor area of at least 10×10 ft. Most DFW corporate properties and residential backyard spaces meet this requirement. We coordinate with event contacts and property managers in advance when needed.`,
    },
    {
      q: `Do you serve all of the DFW metro including the suburbs?`,
      a: `Yes — we serve all of greater DFW including ${city} and surrounding communities: Dallas, Fort Worth, Plano, Frisco, McKinney, Allen, Arlington, Irving, Garland, Mesquite, Grand Prairie, and all surrounding Collin, Denton, and Tarrant County communities. Most locations within 40 miles of central DFW fall within our standard service area.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation party?`,
      a: `Graduation season (May–June) is the highest-demand window for the entire DFW metro. Saturday events fill 3–5 weeks ahead during commencement season. We recommend booking as soon as the graduation date is confirmed. Weekday graduation dinners have more flexibility and typically confirm within 1–2 weeks.`,
    },
    {
      q: `Can you handle large ${city} graduation or corporate events for 25 or more guests?`,
      a: `Absolutely — large family and corporate events are among our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. DFW-area graduation parties of 35–55 guests with dual stations are our peak-season standard. The dual format keeps everyone in the same shared experience without any wait.`,
    },
    {
      q: `Is private hibachi a good option for ${city} corporate client entertainment?`,
      a: `It's one of the best formats available for professional entertainment. A certified teppanyaki chef performs exclusively for your group — no shared dining room, no strangers, no restaurant noise. Dallas tech and finance firms, law firm client dinners, and corporate client appreciation events have all been among our most successful ${city} bookings. The live performance element generates conversation that standard private dining rooms never do.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, fried rice, sauces, plates, chopsticks, and utensils. Full setup before the event and complete cleanup after — your ${city} venue or backyard stays spotless.`,
    },
  ],
  // T2 — Houston Metro
  (city) => [
    {
      q: `Can you set up at a ${city} backyard or suburban property?`,
      a: `Yes — suburban backyards, covered patios, and pool areas throughout ${city} and the Greater Houston area are our most common setup environments. We need a flat outdoor area of at least 10×10 ft. Greater Houston residential properties typically have generous outdoor spaces that work perfectly. We bring everything — fully self-contained propane teppan grill, no gas hookup required.`,
    },
    {
      q: `Do you serve the full Greater Houston metro?`,
      a: `Yes — we serve all of Greater Houston including ${city} and surrounding communities: Houston, The Woodlands, Katy, Sugar Land, Pearland, Friendswood, League City, Pasadena, Baytown, and all surrounding Harris, Fort Bend, and Brazoria County communities. Most Houston-area locations fall within our standard service area.`,
    },
    {
      q: `How far in advance should I book a ${city} quinceañera or graduation party?`,
      a: `Houston-area quinceañera season and graduation season (May–June) are the highest-demand windows in the market. Saturday events fill 3–5 weeks ahead during peak season. We recommend booking as soon as the date is confirmed. Weekday events are more flexible and typically confirm within 1–2 weeks.`,
    },
    {
      q: `Can you handle a large ${city} quinceañera or family event for 25 or more guests?`,
      a: `Absolutely — large quinceañeras and family gatherings are our most common ${city} format. For groups over 25, we deploy dual chef stations running in parallel. A 50-person quinceañera with two chefs is our Houston-area peak-season standard. Every guest at the same grill, same chef, same moment — the shared experience built for multi-generational Houston families.`,
    },
    {
      q: `Is private hibachi a good format for Houston Medical Center or energy sector corporate events?`,
      a: `It's excellent. The live-fire cooking performance creates shared engagement that no conference room or restaurant private dining event can replicate. Houston Medical Center physician team milestones, energy industry corporate appreciation events, and law firm client dinners at ${city} residential properties are among our most consistently well-received bookings.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the full propane teppan grill, all fresh proteins, vegetables, fried rice, house-made sauces, plates, and chopsticks. Complete setup before the event and full cleanup after. Your ${city} property is exactly as it was when we arrive.`,
    },
  ],
  // T3 — Austin Metro
  (city) => [
    {
      q: `Can you set up at a ${city} backyard or pool deck?`,
      a: `Yes — suburban backyards, covered pool decks, and outdoor entertaining spaces throughout ${city} and the Austin metro are among our most common setup environments. We need a flat outdoor area of at least 10×10 ft. Austin-area residential properties typically have the outdoor infrastructure that makes hibachi the natural format. We bring everything — fully self-contained propane teppan grill, no hookup needed.`,
    },
    {
      q: `Do you serve the full Austin metro area?`,
      a: `Yes — we serve all of greater Austin including ${city}, Round Rock, Cedar Park, Georgetown, Lakeway, Pflugerville, Kyle, Buda, Hutto, and all surrounding Williamson, Hays, and Travis County communities. Most Austin-area locations fall within our standard service radius.`,
    },
    {
      q: `How far in advance should I book a ${city} UT graduation or tech company event?`,
      a: `UT Austin graduation weekend is the most competitive private event weekend in Austin — every ${city} restaurant with group dining capacity is committed weeks before commencement. We recommend booking 4–6 weeks ahead for any graduation weekend event. Tech company team events and standard private gatherings typically book 2–3 weeks out.`,
    },
    {
      q: `Can you handle a large ${city} tech company or graduation event for 25 or more guests?`,
      a: `Yes — large graduation parties and corporate team events are our most common ${city} format. For groups over 25, we bring two chef stations running simultaneously. A 40-person Austin tech team event with dual stations is a completely different experience from any restaurant private room. Everyone at the same grill, same performance, same conversation.`,
    },
    {
      q: `Is private hibachi a good option for Austin tech company team events?`,
      a: `It's one of the best formats available for tech team entertainment. The live-fire cooking performance generates the kind of authentic shared engagement that no catered lunch or restaurant private room produces. Apple, Dell, Oracle, and startup corridor teams have all been among our most enthusiastically received Austin bookings. The chef arrives with everything — zero event logistics for the organizer.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the full propane teppan grill, all proteins, fried rice, vegetables, sauces, plates, and chopsticks. Full setup and complete cleanup after — your ${city} property is spotless when we leave.`,
    },
  ],
  // T4 — San Antonio & Hill Country
  (city) => [
    {
      q: `Do you serve ${city} and surrounding San Antonio and Hill Country communities?`,
      a: `Yes — we serve all of greater ${city} and the San Antonio metro including Boerne, New Braunfels, Schertz, Kyle, Seguin, Converse, Universal City, and all surrounding Bexar, Comal, and Guadalupe County communities. Most San Antonio-area locations fall within our standard service radius with no additional travel fee.`,
    },
    {
      q: `Can you set up for a quinceañera or military family event in ${city}?`,
      a: `Absolutely — quinceañeras and JBSA-area military family milestones are among the primary ${city} booking occasions. We set up at residential properties, outdoor venues, and backyard spaces throughout the ${city} area. The fully self-contained setup works at any outdoor space — no venue modifications or gas hookup required.`,
    },
    {
      q: `How far in advance should I book a ${city} private event?`,
      a: `${city} quinceañera season and graduation Saturdays (May–June) book 3–5 weeks ahead. Standard weekend private events book 2–3 weeks in advance. Hill Country destination events should be booked 4–5 weeks out during spring and fall peak season. Same-day quotes are available for any ${city} address.`,
    },
    {
      q: `Can you handle large ${city} quinceañera or family events for 40 or more guests?`,
      a: `Yes — large quinceañera and multi-generational family events are our most common ${city} format. For groups over 25, we bring two chef stations running in parallel. A 55-person quinceañera with dual stations is our standard San Antonio peak-season setup. Every guest at the same grill, same performance, no waiting.`,
    },
    {
      q: `Can you come to a Hill Country ranch or property near ${city}?`,
      a: `Yes — Hill Country ranches, large-lot properties, and destination venues within and surrounding the ${city} area are among our most distinctive setups. The chef arrives fully self-contained with a propane teppan grill. No gas hookup required at any Hill Country property. A flat outdoor area of at least 10×10 feet is all that's needed.`,
    },
    {
      q: `What do I need to provide for a ${city} backyard hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the full propane teppan grill, all proteins, fried rice, vegetables, sauces, plates, and chopsticks. Full setup and complete cleanup after — your ${city} property is spotless when we leave.`,
    },
  ],
  // T5 — Gulf Coast & Destinations
  (city) => [
    {
      q: `Can you come to a ${city} vacation rental or beach house?`,
      a: `Absolutely — Gulf Coast vacation rentals and beach houses are among our most popular Texas booking locations. We come directly to your ${city} rental or destination property. Confirm the rental allows outdoor open-flame cooking (most Gulf Coast properties do), and we handle everything from setup to complete cleanup. The fully self-contained propane teppan grill requires no hookup at any rental property.`,
    },
    {
      q: `How far in advance should I book a ${city} summer or spring break event?`,
      a: `Texas Gulf Coast peak season runs June through August, and spring break weekend dates fill 4–6 weeks ahead. Summer weekend events should be secured as soon as travel plans are confirmed. Off-season events have more flexibility — 2–3 weeks' notice is usually sufficient for fall and winter dates.`,
    },
    {
      q: `Is private hibachi the right option for a bachelorette group at a ${city} beach house or vacation rental?`,
      a: `It's the best option. The combination of live fire cooking, fire tricks, flying shrimp, and everyone gathered around the grill creates exactly the energy a bachelorette group wants — and you don't have to compete for a reservation at a packed destination restaurant. The chef comes to your rental, performs for 90–120 minutes, and leaves the property spotless. The chef makes the evening.`,
    },
    {
      q: `Can you serve groups of 20 to 40 at a ${city} vacation rental?`,
      a: `Yes — groups of 20–40 are our most common ${city} destination format. For groups over 25, we bring two chef stations running in parallel. Most Gulf Coast and destination rental properties with outdoor decks or yard space handle dual-station setups easily.`,
    },
    {
      q: `Do you serve all of the Texas Gulf Coast and surrounding communities?`,
      a: `Yes — we serve the Texas Gulf Coast and all destination communities including ${city}, Galveston, Corpus Christi, South Padre Island, Port Aransas, Rockport, and surrounding communities. For properties more than 45 miles from our nearest chef base, a travel fee may apply and is always disclosed upfront at the time of quoting.`,
    },
    {
      q: `What do I need to provide at a ${city} vacation rental?`,
      a: `Tables and chairs for your guests. We bring everything else: the full propane teppan grill, all proteins, sauces, plates, and chopsticks. Confirm outdoor open-flame cooking is permitted at your rental — most ${city} properties allow it. Full setup and complete cleanup when dinner ends — your rental is spotless when the chef leaves.`,
    },
  ],
]

// ─── Testimonials (keyed by citySlug, 3 per city) ─────────────────────────────
const TX_TESTIMONIALS = {
  // Batch 1 ——————————————————————————————————————————————————————————————————
  'highland-park': [
    {
      text: '"Anniversary estate dinner at our Highland Park home — 18 guests on the back terrace, chef arrived on time and set up in fifteen minutes. Filet mignon and lobster tail across the table, fire tricks that had our guests on their feet. Nothing in Dallas compares to this format at home. Every guest asked for the booking information before the chef packed up."',
      name: 'Charles & Margaret H.',
      city: 'Highland Park, TX',
      event: 'Anniversary Estate Dinner',
      initials: 'CH',
    },
    {
      text: '"Graduation party for our daughter — 36 guests in our Highland Park backyard, chef set up dual stations and had every generation from grandparents to college roommates completely captivated for two hours. Park Cities graduation season is impossible for restaurants. This was the answer. Already booked for our son\'s graduation next year."',
      name: 'Robert & Susan M.',
      city: 'Highland Park, TX',
      event: 'Graduation Party',
      initials: 'RM',
    },
    {
      text: '"Corporate client appreciation dinner at our estate — 24 attorneys and clients, chef was exceptional from first flame to final plate. Premium proteins across the board. Nobody expected a hibachi chef. The entire group was gathered around that grill for two hours straight. Best firm event we\'ve done in fifteen years."',
      name: 'James W.',
      city: 'Highland Park, TX',
      event: 'Client Appreciation Dinner',
      initials: 'JW',
    },
  ],
  'university-park': [
    {
      text: '"SMU graduation party for our daughter — 40 guests in our University Park backyard, chef ran dual stations and had the entire crowd from first flame to last plate. Every Park Cities restaurant was fully committed for weeks before commencement. Our family flew in from Houston, Chicago, and LA — all at the same grill for the same evening. Extraordinary."',
      name: 'David & Patricia C.',
      city: 'University Park, TX',
      event: 'SMU Graduation Party',
      initials: 'DC',
    },
    {
      text: '"Milestone birthday at our University Park home — 22 guests on the covered patio, chef was extraordinary. Wagyu, lobster tail, and filet mignon across the board. Fire tricks that had our guests standing up. Our neighborhood is full of people who know quality — every guest said it was the finest private dining they\'d experienced in Dallas."',
      name: 'Elizabeth F.',
      city: 'University Park, TX',
      event: 'Milestone Birthday Dinner',
      initials: 'EF',
    },
    {
      text: '"Retirement dinner at our University Park estate — 28 guests, outdoor terrace setup, chef was professional and personable from setup to cleanup. Three people booked their own events before the chef finished packing. We had no idea private hibachi at this level existed. It\'s the format Park Cities has been missing."',
      name: 'Thomas & Linda R.',
      city: 'University Park, TX',
      event: 'Retirement Dinner',
      initials: 'TR',
    },
  ],
  'southlake': [
    {
      text: '"Graduation party for our son at our Southlake property — 44 guests, chef set up dual stations on the back patio and had every generation captivated for two hours. CISD graduation weekend makes every restaurant impossible. This was the right answer. The neighborhood heard about it for weeks. Already planning our daughter\'s graduation for next spring."',
      name: 'Mike & Jennifer T.',
      city: 'Southlake, TX',
      event: 'CISD Graduation Party',
      initials: 'MT',
    },
    {
      text: '"Corporate team dinner at our Southlake home — 28 employees, outdoor setup, chef arrived on time and performed for two solid hours. We\'ve done restaurant private rooms every year. This was the first event where everybody was still talking about it at work the following Monday. The format is simply better."',
      name: 'Kevin A.',
      city: 'Southlake, TX',
      event: 'Corporate Team Dinner',
      initials: 'KA',
    },
    {
      text: '"Anniversary dinner in our Southlake backyard — 20 guests, beautiful May evening on the covered terrace, chef was exceptional from first flame to final plate. Premium proteins across the board. Every guest at the same table, the same chef, the same moment. We\'d been to hibachi restaurants dozens of times. This was on a different level entirely."',
      name: 'Scott & Andrea L.',
      city: 'Southlake, TX',
      event: 'Anniversary Dinner',
      initials: 'SL',
    },
  ],
  'westlake': [
    {
      text: '"Estate dinner at our Westlake property — 16 guests on the terrace, chef was extraordinary. Wagyu, lobster tail, and Chilean sea bass across the entire table. This is the level of event our property demanded. Chef arrived early, set up in twenty minutes, and delivered ninety minutes of the finest private dining any of us have experienced in the Dallas area."',
      name: 'Richard & Catherine B.',
      city: 'Westlake, TX',
      event: 'Estate Private Dinner',
      initials: 'RB',
    },
    {
      text: '"Graduation party for our daughter at our Westlake estate — 32 guests, chef set up dual stations and had the entire crowd together for two hours. Carroll ISD graduation weekend is impossible for restaurants. Our family flew in from New York and London for the occasion. Everyone said it was the best graduation dinner they\'d ever attended."',
      name: 'William & Margaret K.',
      city: 'Westlake, TX',
      event: 'Graduation Estate Party',
      initials: 'WK',
    },
    {
      text: '"Client appreciation dinner at our Westlake property — 20 executives and clients, covered outdoor setup, the chef was at a level that matched what our property already demanded. Effortlessly professional. Premium proteins throughout. Every client asked for the booking information. We\'ve replaced every restaurant client dinner format with this."',
      name: 'Alexandra P.',
      city: 'Westlake, TX',
      event: 'Executive Client Dinner',
      initials: 'AP',
    },
  ],
  'colleyville': [
    {
      text: '"Graduation party for our son — 38 guests in our Colleyville backyard, chef set up dual stations and had every generation completely captivated. Birdville ISD commencement weekend, every Colleyville restaurant with group dining capacity was committed for weeks. This was the answer nobody in our neighborhood had tried yet. We\'ve since recommended it to five families."',
      name: 'Brad & Laura S.',
      city: 'Colleyville, TX',
      event: 'Graduation Party',
      initials: 'BS',
    },
    {
      text: '"Birthday milestone at our Colleyville home — 26 guests, covered patio setup, chef was fantastic from first flame to final plate. Fire tricks alone were worth the entire evening. Every guest at the same table, same chef, same experience for two hours. No Colleyville restaurant has ever kept this group together for two hours straight."',
      name: 'Nancy H.',
      city: 'Colleyville, TX',
      event: 'Milestone Birthday',
      initials: 'NH',
    },
    {
      text: '"Anniversary dinner at our Colleyville property — 22 guests in the backyard, June evening, chef was exceptional. Premium proteins across the table — filet and lobster for the anniversary couple. The whole experience elevated what would have been a dinner party into something genuinely unforgettable. We\'re already planning the next event."',
      name: 'Greg & Lisa D.',
      city: 'Colleyville, TX',
      event: 'Anniversary Dinner',
      initials: 'GD',
    },
  ],
  'dallas': [
    {
      text: '"Corporate team dinner for our investment banking group — 32 people, outdoor terrace in the Uptown corridor, chef arrived on time and put on a two-hour show that had the entire team completely engaged. Our firm has done restaurant private rooms for years. This is the new standard. The performance element generates the kind of conversation no restaurant ever does."',
      name: 'Marcus T.',
      city: 'Dallas, TX',
      event: 'Investment Banking Team Dinner',
      initials: 'MT',
    },
    {
      text: '"Graduation party for our daughter — Preston Hollow backyard, 42 guests, chef set up dual stations and had every generation from grandparents to college roommates captivated for two hours. Every Dallas restaurant with private rooms was fully committed for graduation weekend. This was the only answer that worked. Chef was exceptional."',
      name: 'John & Susan P.',
      city: 'Dallas, TX',
      event: 'Dallas Graduation Party',
      initials: 'JP',
    },
    {
      text: '"Law firm client appreciation event at a partner\'s Lakewood home — 28 attorneys and clients, outdoor setup, chef was extraordinary from first flame to final plate. Nobody expected a hibachi chef. The entire group was gathered around that grill laughing for two solid hours. Best firm event we\'ve done in a decade. Every client booked their own event within thirty days."',
      name: 'Linda C.',
      city: 'Dallas, TX',
      event: 'Law Firm Client Event',
      initials: 'LC',
    },
  ],
  'fort-worth': [
    {
      text: '"Graduation party for our son in our Westover Hills backyard — 40 guests, chef set up dual stations and had the whole crowd together for two hours straight. Grandparents, college roommates, neighbors — all at the same grill. No Fort Worth restaurant could have handled this group on graduation weekend. We\'ll never do graduation any other way."',
      name: 'Michael & Donna K.',
      city: 'Fort Worth, TX',
      event: 'Graduation Party',
      initials: 'MK',
    },
    {
      text: '"Birthday party at our Tanglewood home — 34 guests, backyard setup, chef was outstanding. The fire tricks alone were worth the entire evening. Every guest at the same table, same chef, same experience — no restaurant logistics, no crowded parking, no rushed turnover. My family is already planning the next two events."',
      name: 'Jennifer R.',
      city: 'Fort Worth, TX',
      event: 'Birthday Party',
      initials: 'JR',
    },
    {
      text: '"Anniversary dinner in our Rivercrest backyard — 20 guests, March evening, chef arrived on time and delivered the finest private dining we\'ve hosted. Fire tricks, premium proteins, the whole performance. We\'d been married twenty-five years and hosted hundreds of events. This was the one our guests are still bringing up six months later."',
      name: 'William & Susan B.',
      city: 'Fort Worth, TX',
      event: '25th Anniversary Dinner',
      initials: 'WB',
    },
  ],
  'plano': [
    {
      text: '"Graduation party for our daughter — 36 guests in our West Plano backyard, chef set up dual stations and had the whole crowd engaged for two hours. Plano ISD commencement weekend fills every restaurant in the city weeks before graduation. This was the answer. Three neighboring families have already booked their own events after seeing ours."',
      name: 'Tom & Karen F.',
      city: 'Plano, TX',
      event: 'Plano ISD Graduation Party',
      initials: 'TF',
    },
    {
      text: '"Corporate client catering event at our Legacy office location — 26 clients and team members, outdoor setup, chef was exceptionally professional. The live fire performance gave the evening an energy that no private dining room in Plano ever produces. Toyota clients asked for the booking information before the chef finished packing up."',
      name: 'Ryan S.',
      city: 'Plano, TX',
      event: 'Corporate Client Catering',
      initials: 'RS',
    },
    {
      text: '"Family reunion at our Plano home — 48 guests, dual stations, three generations from Texas, California, and Georgia all at the same grill. The chef arrived fully equipped, set up in twenty minutes, and had every generation captivated from first flame to final plate. Full cleanup when it was done — our backyard was immaculate. The family has already voted on doing this every year."',
      name: 'Patricia D.',
      city: 'Plano, TX',
      event: 'Family Reunion',
      initials: 'PD',
    },
  ],
  // Batch 2 ——————————————————————————————————————————————————————————————————
  'frisco': [
    {
      text: '"Corporate team dinner at our Frisco property — 22 tech professionals from a company off Legacy Drive, chef set up on our covered patio and had the entire group captivated for two hours. The live fire performance outdid every corporate event venue we\'ve tried in North Dallas. Every person at the table asked for the booking contact before the chef packed up. Already planning the next one."',
      name: 'Kyle & Amanda R.',
      city: 'Frisco, TX',
      event: 'Corporate Team Dinner',
      initials: 'KR',
    },
    {
      text: '"Graduation party for our daughter — 40 guests in our Frisco backyard, chef ran dual stations and had four generations at the same grill from first flame to final plate. Frisco ISD commencement weekend books every restaurant in North Collin County months ahead. Our backyard was the answer, and the chef made it the best graduation dinner we\'ve ever seen."',
      name: 'Michael & Dana T.',
      city: 'Frisco, TX',
      event: 'FISD Graduation Party',
      initials: 'MT',
    },
    {
      text: '"Birthday dinner for 28 at our Frisco home — chef arrived fully equipped, set up in twenty minutes on our outdoor patio, and performed for two straight hours. Wagyu and lobster tail across the board. Our guests had never experienced private hibachi at this level — three couples booked their own events before the chef left. The Frisco standard has been set."',
      name: 'Jennifer W.',
      city: 'Frisco, TX',
      event: 'Milestone Birthday Dinner',
      initials: 'JW',
    },
  ],
  'mckinney': [
    {
      text: '"Birthday dinner for my husband — 24 guests in our McKinney backyard, chef arrived on time and set up flawlessly. The fire tricks and flying shrimp had our neighbors at the fence line watching. Two hours of live cooking and everyone was still at the grill when the last plate came out. I\'ve been to every good restaurant in the DFW metro — nothing competes with this format at home."',
      name: 'Sarah & Marcus D.',
      city: 'McKinney, TX',
      event: 'Milestone Birthday Dinner',
      initials: 'SD',
    },
    {
      text: '"McKinney ISD graduation party for our son — 34 guests, dual chef stations, every generation from grandparents to college roommates completely engaged for the full performance. McKinney restaurants are impossible during graduation season. Our backyard was the right call — the chef made it the finest dinner any of our guests had attended all year."',
      name: 'Brian & Carol P.',
      city: 'McKinney, TX',
      event: 'MISD Graduation Party',
      initials: 'BP',
    },
    {
      text: '"Annual company team celebration — 30 employees at our McKinney property, chef set up dual stations and delivered a live performance that had the entire team on their feet during the fire tricks. Every corporate event venue we\'ve tried in North Collin County is a pale substitute for this format. We\'re locking in our date for next year before this one ended."',
      name: 'Alex J.',
      city: 'McKinney, TX',
      event: 'Annual Team Celebration',
      initials: 'AJ',
    },
  ],
  'allen': [
    {
      text: '"Backyard graduation party for 38 guests — chef arrived fully self-contained and had the whole backyard captivated for two hours. Allen ISD commencement weekend is the most competitive for restaurants in Collin County — our backyard was the right call and the chef made it the easiest large party we\'ve ever hosted. Full cleanup when dinner was done."',
      name: 'Tony & Lisa H.',
      city: 'Allen, TX',
      event: 'Allen ISD Graduation Party',
      initials: 'TH',
    },
    {
      text: '"Neighborhood anniversary party — 26 guests, outdoor setup on our Allen patio, chef performed flawlessly from first flame to final plate. The shared backyard format is everything the chef format promises: every guest at the same grill, no separate tables, no divided conversation. Our guests drove from across DFW — everyone was back home talking about it the next day."',
      name: 'David & Rachel K.',
      city: 'Allen, TX',
      event: 'Anniversary Party',
      initials: 'DK',
    },
    {
      text: '"Company cookout at our Allen property — 32 professionals, chef set up dual stations and had the crowd engaged from the opening fire trick to the last plate. Allen is full of tech and finance professionals who know a good experience — every person there said it beat every team dinner they\'d attended in Dallas or Plano. Already booked for next quarter."',
      name: 'Chris M.',
      city: 'Allen, TX',
      event: 'Company Team Event',
      initials: 'CM',
    },
  ],
  'arlington': [
    {
      text: '"Graduation party catering at our Arlington home — 44 guests, chef set up dual stations on our covered patio and had everyone at the grill from first flame to final plate. When every Arlington and Fort Worth restaurant is booked months before commencement, having the chef come to you is the only answer that actually works at this scale. Three families already asked for the booking contact."',
      name: 'Robert & Amy N.',
      city: 'Arlington, TX',
      event: 'Graduation Party Catering',
      initials: 'RN',
    },
    {
      text: '"Corporate catering event at our Arlington facility — 36 clients and team members, outdoor setup, chef was exceptional and professional. The live teppanyaki performance generated engagement that no Arlington event venue has ever produced for us. Clients asked for the contact information before the chef started packing. We\'re adding this to every quarter."',
      name: 'Kevin B.',
      city: 'Arlington, TX',
      event: 'Corporate Catering Event',
      initials: 'KB',
    },
    {
      text: '"Family reunion at our Arlington property — 52 guests, three generations from Texas, Louisiana, and Colorado. Chef set up dual stations, performed for two full hours, and had every generation from 8-year-olds to 80-year-olds captivated the entire time. The family voted immediately — this is the format for every reunion from here forward."',
      name: 'Gloria & James T.',
      city: 'Arlington, TX',
      event: 'Family Reunion',
      initials: 'GT',
    },
  ],
  'houston': [
    {
      text: '"Private chef event at our Houston home — 32 guests on our covered back patio, chef arrived equipped and set up in twenty minutes. The live performance ran for two hours without a single table being turned, a single check being dropped, or a single guest glancing at their phone. Private hibachi in Houston is the format I\'ve been looking for my entire career hosting corporate clients at home. Already planning the next one."',
      name: 'Marcus & Diana L.',
      city: 'Houston, TX',
      event: 'Corporate Client Dinner',
      initials: 'ML',
    },
    {
      text: '"Quinceañera celebration at our Houston property — 56 guests, dual chef stations, three generations from Texas, Mexico, and California all at the same grill for two full hours. The chef performed with the kind of energy and engagement that matched the occasion. Every guest at that party said it was the finest event they\'d attended in years. The chef arrived with everything and left nothing behind."',
      name: 'Maria & Eduardo R.',
      city: 'Houston, TX',
      event: 'Quinceañera Celebration',
      initials: 'MR',
    },
    {
      text: '"Graduation party for my daughter\'s University of Houston commencement — 40 guests, chef ran dual stations on our Houston pool deck and kept four generations engaged for two full hours. UH graduation weekend books every Houston restaurant weeks before the ceremony. Having the chef come to us made it the finest graduation dinner we\'ve hosted. Already booked for my son\'s graduation next spring."',
      name: 'Kevin & Patricia A.',
      city: 'Houston, TX',
      event: 'UH Graduation Party',
      initials: 'KA',
    },
  ],
  'the-woodlands': [
    {
      text: '"Anniversary dinner at our Woodlands property — 20 guests on our covered outdoor patio, chef set up in fifteen minutes and performed the full two-hour show. Filet mignon, lobster tail, and wagyu across the board. The Woodlands has no shortage of quality restaurants — private hibachi at home is in a different category entirely. Three couples booked before the chef finished packing up."',
      name: 'James & Susan H.',
      city: 'The Woodlands, TX',
      event: 'Anniversary Dinner',
      initials: 'JH',
    },
    {
      text: '"Graduation party at our Woodlands home — 38 guests, chef ran dual stations and had every generation from grandparents to college classmates captivated for two hours. The Woodlands and Conroe ISD graduation weekends fill every restaurant in the area weeks before commencement. Our backyard was the right call — the chef made it the best dinner of the year."',
      name: 'Robert & Karen P.',
      city: 'The Woodlands, TX',
      event: 'The Woodlands Graduation Party',
      initials: 'RP',
    },
    {
      text: '"Corporate client dinner at our Woodlands property — 24 energy industry clients and team members, outdoor setup, chef was exceptional from first flame to final plate. The Woodlands has become one of the finest addresses in the Houston area — and our clients responded to the private format better than anything we\'ve done in a restaurant. Every person asked for the booking contact before the chef left."',
      name: 'David W.',
      city: 'The Woodlands, TX',
      event: 'Corporate Client Dinner',
      initials: 'DW',
    },
  ],
  'katy': [
    {
      text: '"Birthday party at our Katy home — 36 guests on our covered patio, chef arrived equipped and set up in twenty minutes. Fire tricks, flying shrimp, and every protein cooked to order in front of the whole group for two hours. Katy is full of families who know how to celebrate — every guest at our party said it was the finest backyard event they\'d been to in Greater Houston. Already booked for next year."',
      name: 'Tom & Michelle C.',
      city: 'Katy, TX',
      event: 'Birthday Party',
      initials: 'TC',
    },
    {
      text: '"Katy ISD graduation party for our son — 44 guests, dual chef stations, chef performed for two full hours in front of our entire crowd. KISD commencement weekend books every Katy restaurant weeks before graduation. Our backyard was the answer — the chef handled the scale effortlessly. Five families asked for the booking contact before the evening was over."',
      name: 'Paul & Linda F.',
      city: 'Katy, TX',
      event: 'Katy ISD Graduation Party',
      initials: 'PF',
    },
    {
      text: '"Family celebration at our Katy property — 30 guests, all from Texas and Louisiana. Chef set up dual stations and had three generations captivated from the first fire trick to the last plate. Full cleanup when it was done — our backyard was spotless. The format works because everyone is at the same grill for the same show. Nobody wanted to leave."',
      name: 'Angela & Dennis B.',
      city: 'Katy, TX',
      event: 'Family Celebration',
      initials: 'AB',
    },
  ],
  'sugar-land': [
    {
      text: '"Anniversary dinner at our Sugar Land home — 24 guests on our backyard deck, chef arrived fully equipped and set up in twenty minutes. The two-hour performance included every course cooked to order in front of our guests. Sugar Land has a culture of celebrating well — our neighbors have been asking for the booking information ever since. Private hibachi at home is the format the Houston suburbs have been waiting for."',
      name: 'Anthony & Grace K.',
      city: 'Sugar Land, TX',
      event: 'Anniversary Dinner',
      initials: 'AK',
    },
    {
      text: '"Graduation party at our Sugar Land property — 40 guests, dual chef stations, chef performed for two full hours. Fort Bend ISD graduation weekend fills every Sugar Land and Richmond restaurant weeks before commencement. Our backyard was the answer — the chef arrived with everything and left the property spotless. The finest graduation party we\'ve ever hosted."',
      name: 'James & Helen N.',
      city: 'Sugar Land, TX',
      event: 'FBISD Graduation Party',
      initials: 'JN',
    },
    {
      text: '"Corporate team event at our Sugar Land location — 28 energy industry professionals, outdoor setup, chef was extraordinary. Two hours of live teppanyaki performance with a crowd that included some of the most discerning corporate entertainers in the Houston market. Every person at the event said it outdid every corporate venue they\'d used in Greater Houston. We\'re adding this to our quarterly schedule."',
      name: 'Victor R.',
      city: 'Sugar Land, TX',
      event: 'Corporate Team Event',
      initials: 'VR',
    },
  ],
  // Batch 3 ——————————————————————————————————————————————————————————————————
  'pearland': [
    {
      text: '"Backyard graduation party for our daughter — 36 guests in our Pearland backyard, chef set up dual stations and had every generation at the same grill for two hours. Pearland and Friendswood restaurants are completely booked for PISD commencement weekends. Our backyard was the solution — the chef arrived with everything, performed for two full hours, and left the property spotless. The neighborhood has been asking for the booking contact ever since."',
      name: 'Sandra & Marcus T.',
      city: 'Pearland, TX',
      event: 'PISD Graduation Party',
      initials: 'ST',
    },
    {
      text: '"Birthday celebration at our Pearland home — 28 guests on our covered back patio, chef set up in twenty minutes and performed for two full hours. Fire tricks, flying shrimp, and every protein cooked to order in front of the whole crowd. South Houston families know how to celebrate — this is the format we\'ve been looking for. Three couples booked their own events before the chef finished packing up."',
      name: 'James & Carla W.',
      city: 'Pearland, TX',
      event: 'Birthday Celebration',
      initials: 'JW',
    },
    {
      text: '"Family reunion at our Pearland property — 50 guests, three generations from Texas, Oklahoma, and Louisiana. Chef set up dual stations and had the entire crowd captivated from the first fire trick to the last plate. Full cleanup when dinner was done — our backyard was spotless. The format works because everyone watches the same show. Nobody wanted to leave."',
      name: 'Patricia H.',
      city: 'Pearland, TX',
      event: 'Family Reunion',
      initials: 'PH',
    },
  ],
  'friendswood': [
    {
      text: '"Birthday party at our Friendswood home — 30 guests on our backyard patio, chef arrived fully equipped and had the entire group engaged for two hours. Fire tricks and flying shrimp in our own backyard — nobody expected that level of live performance. This is what private entertaining in the Houston suburbs looks like when it\'s done right. Already booked for next year."',
      name: 'Kevin & Ashley M.',
      city: 'Friendswood, TX',
      event: 'Birthday Party',
      initials: 'KM',
    },
    {
      text: '"CCISD graduation party — 40 guests in our Friendswood backyard, chef drove directly to our property with the full self-contained setup. Clear Creek ISD commencement weekend fills every Friendswood and League City restaurant weeks before graduation. Our backyard was the answer — the chef handled 40 guests across dual stations without a single issue. Five families asked for the booking contact before the event ended."',
      name: 'Robert & Diane F.',
      city: 'Friendswood, TX',
      event: 'CCISD Graduation Party',
      initials: 'RF',
    },
    {
      text: '"Anniversary dinner at our Friendswood home — 22 guests on our outdoor deck, chef arrived on time and set up in fifteen minutes. The two-hour live performance was exactly what we wanted — every dish cooked to order in front of our guests, fire tricks that had everyone standing, complete cleanup when dinner was done. Mobile hibachi at home is the best-kept secret in the Clear Lake area."',
      name: 'Daniel & Susan B.',
      city: 'Friendswood, TX',
      event: 'Anniversary Dinner',
      initials: 'DB',
    },
  ],
  'austin': [
    {
      text: '"Private chef event at our Austin home — 34 guests on our pool deck, chef set up in twenty minutes and performed for two full hours. Apple and Dell engineers, UT faculty, and tech company families all at the same grill — the shared format is the format. I\'ve hosted corporate events in every private dining room in Austin for fifteen years. This is the best one."',
      name: 'Michael & Sarah K.',
      city: 'Austin, TX',
      event: 'Tech Company Private Dinner',
      initials: 'MK',
    },
    {
      text: '"UT graduation party at our Austin home — 44 guests, chef ran dual stations and had four generations from Texas, California, and Colorado completely engaged from first flame to final plate. UT graduation weekend books every Austin restaurant six weeks before commencement. Our pool deck was the answer — the chef made it the finest dinner of the year. Every guest is already asking about our son\'s graduation next spring."',
      name: 'Lisa & Tom A.',
      city: 'Austin, TX',
      event: 'UT Austin Graduation Party',
      initials: 'LA',
    },
    {
      text: '"Birthday dinner for my husband — 26 guests in our South Austin backyard, chef arrived fully equipped, set up on our covered patio, and performed for two full hours. Wagyu, lobster tail, and filet mignon on the menu. Our guests had never seen private hibachi at this level — three couples booked their own events that same evening. Austin has its tech and startup culture — this is the entertainment format that matches the city."',
      name: 'Rachel & James N.',
      city: 'Austin, TX',
      event: 'Milestone Birthday Dinner',
      initials: 'RN',
    },
  ],
  'round-rock': [
    {
      text: '"Graduation party at our Round Rock home — 38 guests, chef set up dual stations on our covered patio and had the whole crowd engaged for two hours. Round Rock ISD commencement weekend books every restaurant in the Williamson County area weeks before graduation. Our backyard was the answer, and the chef made it look effortless. Four neighboring families already asked for the booking information."',
      name: 'Chris & Linda P.',
      city: 'Round Rock, TX',
      event: 'RRISD Graduation Party',
      initials: 'CP',
    },
    {
      text: '"Family birthday celebration at our Round Rock home — 32 guests, outdoor setup, chef performed with the kind of energy and precision that kept our entire crowd captivated. The Dell Technologies and tech corridor families who live out here appreciate quality — our guests said this beat every restaurant private room they\'d been to in the Austin metro. Already booked for Christmas."',
      name: 'Tony & Maria G.',
      city: 'Round Rock, TX',
      event: 'Birthday Celebration',
      initials: 'TG',
    },
    {
      text: '"Corporate client event at our Round Rock location — 24 tech industry professionals, outdoor patio setup, chef was extraordinary from setup to cleanup. Two hours of live teppanyaki performance generated the kind of client engagement that no Round Rock restaurant private room has ever produced. Every client asked for the contact information before the chef left. Adding this to our quarterly client entertainment schedule."',
      name: 'Brian W.',
      city: 'Round Rock, TX',
      event: 'Corporate Client Event',
      initials: 'BW',
    },
  ],
  'cedar-park': [
    {
      text: '"Birthday party at our Cedar Park home — 34 guests on our backyard patio, chef arrived fully self-contained and performed for two full hours. LISD graduation season books every Cedar Park restaurant in advance — but for a birthday in May, our backyard was the format. Fire tricks, flying shrimp, and every dish cooked to order. The neighborhood heard about this one for weeks after."',
      name: 'Amy & John S.',
      city: 'Cedar Park, TX',
      event: 'Birthday Party',
      initials: 'AS',
    },
    {
      text: '"Graduation party for our son — 42 guests in our Cedar Park backyard, chef set up dual stations and had the whole crowd from first fire trick to last plate. Leander ISD commencement weekend is impossible for restaurants anywhere in the 183-A corridor. Our backyard was the right call — the chef made it the finest event any of our guests had attended in the Austin area. Already booked for our daughter\'s graduation next year."',
      name: 'David & Karen L.',
      city: 'Cedar Park, TX',
      event: 'Leander ISD Graduation Party',
      initials: 'DL',
    },
    {
      text: '"Anniversary dinner at our Cedar Park home — 20 guests, outdoor setup, chef was professional and personable from arrival to cleanup. Every plate was cooked to order in front of our guests. Four couples have already asked us how to book the same chef. Cedar Park is growing fast — private hibachi at home is the format this community has been waiting for."',
      name: 'Steve & Michelle R.',
      city: 'Cedar Park, TX',
      event: 'Anniversary Dinner',
      initials: 'SR',
    },
  ],
  'georgetown': [
    {
      text: '"Graduation catering at our Georgetown home — 46 guests, chef set up dual stations on our outdoor space and had everyone at the grill from first flame to final plate. Georgetown is growing so fast that every restaurant in Williamson County books out on GISD graduation weekends. Our backyard solved that problem perfectly — the chef arrived with everything and left nothing behind."',
      name: 'Paul & Nancy H.',
      city: 'Georgetown, TX',
      event: 'GISD Graduation Catering',
      initials: 'PH',
    },
    {
      text: '"Corporate team catering at our Georgetown property — 28 team members, covered patio setup, chef was exceptional. Georgetown has attracted a lot of Austin-area tech and finance professionals in the past several years — and those professionals expect more from a corporate event than a Williamson County restaurant private room. The chef delivered that. Adding hibachi catering to our quarterly team event rotation."',
      name: 'Nicole B.',
      city: 'Georgetown, TX',
      event: 'Corporate Team Catering',
      initials: 'NB',
    },
    {
      text: '"Family reunion at our Georgetown property — 52 guests, three generations from Texas, Oklahoma, and New Mexico. Chef ran dual stations and had the entire crowd engaged for two full hours. Georgetown is one of those Texas communities that knows how to put a party together — private hibachi catering is the format that matches the ambition of these gatherings. Full cleanup when dinner was done."',
      name: 'Tom & Gloria C.',
      city: 'Georgetown, TX',
      event: 'Family Reunion',
      initials: 'TC',
    },
  ],
  'lakeway': [
    {
      text: '"Lake Travis graduation party at our Lakeway home — 38 guests on our outdoor deck overlooking the lake, mobile hibachi chef set up in twenty minutes and performed for two full hours. Lake Travis ISD commencement weekend is impossible for every restaurant in the area. Having the chef drive directly to our Lakeway property was the only answer that made any sense. The view plus the live performance was something our guests had never seen."',
      name: 'Greg & Jennifer O.',
      city: 'Lakeway, TX',
      event: 'Lake Travis ISD Graduation Party',
      initials: 'GO',
    },
    {
      text: '"Birthday weekend at our Lakeway home — 24 guests on our pool deck, chef arrived with the full mobile setup and performed for two hours in front of the lake. Fire tricks with a Hill Country backdrop. Nobody at that party had ever seen private hibachi in a setting like this. Three couples drove up from Austin — all of them asked for the booking information before they left."',
      name: 'Amanda & Ryan T.',
      city: 'Lakeway, TX',
      event: 'Birthday Weekend Dinner',
      initials: 'AT',
    },
    {
      text: '"Anniversary celebration at our Lakeway vacation property — 20 guests, outdoor deck setup, mobile hibachi chef performed the full show from first fire trick to final plate. Lakeway is a destination in itself — and mobile hibachi at home makes the best dinner of any Lakeway weekend happen at the property rather than at a restaurant. Full cleanup when dinner was done. The property was perfect."',
      name: 'Mark & Catherine D.',
      city: 'Lakeway, TX',
      event: 'Anniversary Celebration',
      initials: 'MD',
    },
  ],
  'san-antonio': [
    {
      text: '"Quinceañera celebration at our San Antonio home — 60 guests, dual chef stations, three generations from Texas, Mexico, and California all at the same grill for two full hours. The chef arrived with everything, performed with the kind of energy that matched the occasion, and left the property spotless. Every San Antonio restaurant on our shortlist was fully booked. Our backyard was the right call — the best quinceañera celebration we\'ve ever hosted."',
      name: 'Maria & Roberto S.',
      city: 'San Antonio, TX',
      event: 'Quinceañera Celebration',
      initials: 'MS',
    },
    {
      text: '"JBSA family graduation party at our San Antonio home — 44 guests, chef ran dual stations and had the crowd engaged from first flame to final plate. Military families know what a good gathering looks like — and private hibachi at home is the format that matches how JBSA households celebrate. Four families from the base asked for the booking contact before the chef finished packing up."',
      name: 'James & Angela P.',
      city: 'San Antonio, TX',
      event: 'Military Family Graduation Party',
      initials: 'JP',
    },
    {
      text: '"Birthday dinner for my wife at our Stone Oak home — 28 guests on our covered back patio, chef performed flawlessly from setup to cleanup. San Antonio is a city with deep hospitality traditions — and private hibachi at home is the format that fits those traditions perfectly. Everyone at that dinner said it was the finest event they\'d attended in San Antonio. Already planning our daughter\'s quinceañera the same way."',
      name: 'Victor & Diana R.',
      city: 'San Antonio, TX',
      event: 'Birthday Dinner',
      initials: 'VR',
    },
  ],
  // Batch 4 ——————————————————————————————————————————————————————————————————
  'boerne': [
    {
      text: '"Anniversary dinner at our Boerne Hill Country property — 22 guests on our covered outdoor terrace, mobile hibachi chef arrived with the full self-contained setup and performed for two full hours. Every Boerne restaurant on the square was booked weeks ahead. Our Hill Country terrace was the answer — fire tricks at sunset, every dish cooked to order, complete cleanup when dinner was done. The most memorable dinner we\'ve hosted in the Texas Hill Country."',
      name: 'Richard & Ellen M.',
      city: 'Boerne, TX',
      event: 'Anniversary Dinner',
      initials: 'RM',
    },
    {
      text: '"Birthday celebration at our Boerne ranch property — 30 guests, mobile hibachi chef drove from San Antonio with the full setup. Boerne is a Hill Country destination and our guests came from San Antonio, Austin, and Houston. The live fire performance with a Hill Country backdrop was something nobody at that dinner had ever experienced. Every person there asked for the booking contact. Already planning our next event."',
      name: 'Laura & James W.',
      city: 'Boerne, TX',
      event: 'Ranch Birthday Celebration',
      initials: 'LW',
    },
    {
      text: '"Family reunion at our Boerne property — 46 guests, three generations from Texas, New Mexico, and Colorado. Chef set up dual stations on our outdoor space and had the entire crowd captivated for two hours. The Hill Country air, the live fire performance, and the food quality made it the finest reunion we\'ve ever hosted. Full cleanup when dinner was done. Nothing was left behind."',
      name: 'Tom & Carolyn F.',
      city: 'Boerne, TX',
      event: 'Family Reunion',
      initials: 'TF',
    },
  ],
  'new-braunfels': [
    {
      text: '"River house party at our New Braunfels property — 34 guests on our Comal River-adjacent outdoor space, mobile hibachi chef arrived fully equipped and performed for two full hours. New Braunfels weekend restaurants are impossible in the summer. Our backyard was the answer — the chef arrived with everything and the performance matched every other element of a perfect Hill Country weekend."',
      name: 'Greg & Maria C.',
      city: 'New Braunfels, TX',
      event: 'River House Party',
      initials: 'GC',
    },
    {
      text: '"Graduation party at our New Braunfels home — 42 guests, chef set up dual stations on our outdoor patio and had the whole crowd engaged from the first fire trick. Canyon High School graduation weekend books every restaurant within 30 miles of New Braunfels. Our backyard was the only answer that worked for 40 guests — and the chef made it the finest graduation dinner we\'ve ever hosted."',
      name: 'Steven & Donna H.',
      city: 'New Braunfels, TX',
      event: 'Graduation Party',
      initials: 'SH',
    },
    {
      text: '"Weekend celebration at our Gruene-area property — 28 guests, mobile hibachi chef, Hill Country evening. The format is perfect for a New Braunfels weekend: everyone at the same outdoor table, the same grill, the same performance. No restaurant that serves this many people at the same quality exists in Comal County. The chef arrived, performed, and left the property spotless."',
      name: 'Amanda & Kyle T.',
      city: 'New Braunfels, TX',
      event: 'Weekend Celebration',
      initials: 'AT',
    },
  ],
  'schertz': [
    {
      text: '"Graduation party at our Schertz home — 38 guests in our backyard, chef set up dual stations and had four generations captivated for two full hours. Schertz-Cibolo-Universal City ISD graduation weekend fills every restaurant in the area weeks before commencement. Our backyard was the answer — the chef made it the finest graduation celebration our family has ever hosted. Three neighbors already booked before the evening was over."',
      name: 'David & Carmen R.',
      city: 'Schertz, TX',
      event: 'SCUCISD Graduation Party',
      initials: 'DR',
    },
    {
      text: '"Birthday dinner at our Schertz home — 26 guests on our covered back patio, chef arrived on time, set up in fifteen minutes, and performed for two full hours. Military families in the Schertz and Universal City corridor know what a real celebration looks like — and this was it. Fire tricks, flying shrimp, every protein cooked to order. Already planning our son\'s graduation the same way."',
      name: 'Carlos & Angela M.',
      city: 'Schertz, TX',
      event: 'Birthday Dinner',
      initials: 'CM',
    },
    {
      text: '"Family celebration at our Schertz property — 48 guests, three generations from Texas, Georgia, and Virginia. Chef ran dual stations and had the entire crowd engaged from first flame to final plate. Full cleanup when dinner was done. Schertz is a military community and we celebrate the way military families celebrate — big, welcoming, and at home. Private hibachi is the format this community deserves."',
      name: 'Michael & Sandra B.',
      city: 'Schertz, TX',
      event: 'Family Celebration',
      initials: 'MB',
    },
  ],
  'kyle': [
    {
      text: '"Backyard graduation party at our Kyle home — 36 guests, chef set up on our outdoor patio and had the entire crowd engaged for two hours. Hays CISD graduation weekend fills every Kyle and Buda restaurant weeks in advance. Our backyard was the right call — the chef arrived with everything, performed flawlessly, and left the property spotless. Four families asked for the booking contact before the chef finished packing."',
      name: 'Jason & Lisa K.',
      city: 'Kyle, TX',
      event: 'Hays CISD Graduation Party',
      initials: 'JK',
    },
    {
      text: '"Birthday party at our Kyle home — 32 guests, backyard setup, chef performed for two full hours. Kyle is one of the fastest-growing cities in America right now — and the families who are moving here expect a quality of private entertaining that matches the homes they\'re building. Private hibachi at home is the format that delivers that. Three households on our block have already asked how to book."',
      name: 'Ryan & Megan P.',
      city: 'Kyle, TX',
      event: 'Birthday Party',
      initials: 'RP',
    },
    {
      text: '"Family reunion at our Kyle property — 50 guests, two generations from Texas, Colorado, and California. Chef set up dual stations and had everyone captivated from the fire tricks to the final plate. Full cleanup when it was done — our backyard was spotless. Kyle is growing fast and the community is learning what private entertaining looks like. This is the answer."',
      name: 'Patricia & Don N.',
      city: 'Kyle, TX',
      event: 'Family Reunion',
      initials: 'PN',
    },
  ],
  'galveston': [
    {
      text: '"Beach house birthday weekend at our Galveston rental — 24 guests on the covered deck, mobile hibachi chef drove to the property with the full self-contained setup and performed for two full hours. Getting a table for 24 at any Galveston restaurant on a Saturday in July is a logistical impossibility. The chef came to us, performed in front of the Gulf, and left the property spotless. Best dinner of the trip. Not close."',
      name: 'Kevin & Sarah J.',
      city: 'Galveston, TX',
      event: 'Beach House Birthday',
      initials: 'KJ',
    },
    {
      text: '"Bachelorette weekend at our Galveston beach house — 16 guests, mobile hibachi on the deck. We\'ve done Galveston restaurants. We\'ve done the boat. None of it compares to having the chef arrive at the beach house, set up on the deck, and perform for two hours in front of the Gulf. Every single person at that party asked how to book the same experience for their own groups."',
      name: 'Ashley G.',
      city: 'Galveston, TX',
      event: 'Bachelorette Beach Weekend',
      initials: 'AG',
    },
    {
      text: '"Family reunion at our Galveston vacation rental — 40 guests, dual chef stations, three generations from Texas, Louisiana, and Mississippi. The chef arrived fully equipped, performed on the covered outdoor deck, and had every generation from grandchildren to grandparents completely captivated for two full hours. Fire tricks with the Gulf in the background. Full cleanup when dinner was done. Best reunion we\'ve ever done."',
      name: 'Robert & Linda T.',
      city: 'Galveston, TX',
      event: 'Family Reunion',
      initials: 'RT',
    },
  ],
  'corpus-christi': [
    {
      text: '"Waterfront event catering at our Corpus Christi property — 44 guests, chef set up dual stations on our outdoor deck and had the whole crowd engaged from first flame to final plate. Getting a table for 44 at any waterfront Corpus Christi restaurant is a different conversation than what the chef delivered. Everyone at that event was still at the grill when the last plate came out. Already planning the next one."',
      name: 'Carlos & Maria V.',
      city: 'Corpus Christi, TX',
      event: 'Waterfront Event Catering',
      initials: 'CV',
    },
    {
      text: '"Beach house graduation catering — 38 guests at our Padre Island-adjacent property. Chef drove to the property with the full setup, performed for two hours in front of our crowd, and left the property spotless. Corpus Christi graduation season is competitive for any restaurant that can fit this group. Our property was the answer — and the chef made it the finest graduation dinner our family has ever hosted."',
      name: 'Daniel & Irma H.',
      city: 'Corpus Christi, TX',
      event: 'Beach House Graduation Catering',
      initials: 'DH',
    },
    {
      text: '"Corporate catering event at our Corpus Christi outdoor venue — 30 clients and team members, chef set up on our covered outdoor space and delivered a live performance that no Corpus Christi restaurant private room has ever produced. Energy industry clients from across the Gulf Coast asked for the booking contact before the chef left. Adding this to our annual client entertainment schedule."',
      name: 'Michael S.',
      city: 'Corpus Christi, TX',
      event: 'Corporate Client Catering',
      initials: 'MS',
    },
  ],
  'fredericksburg': [
    {
      text: '"Wine country weekend at our Fredericksburg vacation property — 20 guests on the outdoor terrace, mobile hibachi chef arrived with the full self-contained setup. Every Fredericksburg restaurant and winery experience is accounted for in a proper Hill Country weekend — this was the dinner nobody expected and everyone remembered. Fire tricks on a Texas Hill Country terrace. The chef arrived, performed, and left the property spotless."',
      name: 'Eric & Patricia L.',
      city: 'Fredericksburg, TX',
      event: 'Hill Country Weekend Dinner',
      initials: 'EL',
    },
    {
      text: '"Bachelorette weekend at our Fredericksburg vineyard rental — 14 guests, mobile hibachi on the property outdoor deck. We had the winery experiences. We had the Main Street restaurants. The hibachi chef coming to the rental was the evening nobody had on the itinerary and nobody forgot. Everyone in that group has already planned their own Fredericksburg trip around doing this again."',
      name: 'Stephanie R.',
      city: 'Fredericksburg, TX',
      event: 'Vineyard Bachelorette Weekend',
      initials: 'SR',
    },
    {
      text: '"Private ranch catering at our Fredericksburg Hill Country property — 36 guests, dual chef stations, family from Texas and Colorado. The Hill Country setting plus the live hibachi performance was the combination that made this the finest event we\'ve hosted at this property. Full cleanup when dinner was done. The chef arrived fully equipped and left nothing behind. Already planning a repeat for next fall."',
      name: 'James & Susan C.',
      city: 'Fredericksburg, TX',
      event: 'Ranch Private Event Catering',
      initials: 'JC',
    },
  ],
  'waco': [
    {
      text: '"Baylor graduation party at our Waco home — 40 guests, chef set up dual stations on our outdoor space and had the whole crowd engaged for two hours. Waco restaurants are impossible on Baylor commencement weekend — every seat taken weeks before graduation. Our backyard was the answer and the chef made it the finest graduation dinner our family has ever hosted. The neighborhood is still talking about it."',
      name: 'Mark & Jennifer D.',
      city: 'Waco, TX',
      event: 'Baylor Graduation Party',
      initials: 'MD',
    },
    {
      text: '"Birthday dinner at our Waco home — 28 guests, backyard setup, chef performed for two full hours. Waco has grown enormously since Magnolia brought national attention to the city — and the families and professionals who\'ve moved here bring the same quality standard to private entertaining they had wherever they came from. Private hibachi at home is the format Waco has been ready for. Three couples booked before the evening was over."',
      name: 'Scott & Amy B.',
      city: 'Waco, TX',
      event: 'Birthday Dinner',
      initials: 'SB',
    },
    {
      text: '"Family reunion at our Waco property — 48 guests, three generations from Texas, Oklahoma, and Arkansas. Chef ran dual stations and had the entire crowd captivated from first flame to final plate. Full cleanup when dinner was done — the property was spotless. Waco is a city with deep Texas hospitality roots and the private hibachi format is exactly what a real Central Texas gathering calls for."',
      name: 'Barbara & Frank T.',
      city: 'Waco, TX',
      event: 'Family Reunion',
      initials: 'BT',
    },
  ],
}

// ─── How It Works (single shared, 5 steps) ────────────────────────────────────
const TX_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings, no last-minute uncertainty.`,
  steps: [
    { num: '01', title: 'Submit Your Date & Address',           desc: 'Give us your Texas address, event date, and approximate guest count. We respond with a personalized same-day quote — DFW estate, Houston suburb, Austin pool deck, Hill Country ranch, or any Texas property.' },
    { num: '02', title: 'Confirm Your Menu',                    desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included: fried rice, vegetables, sauces, plates, and chopsticks.' },
    { num: '03', title: 'Lock Your Date',                       desc: 'A deposit confirms your event immediately. Your Texas date is reserved — no double-bookings, no cancellations.' },
    { num: '04', title: 'Chef Travels to You',                  desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No gas hookup required at any Texas property.' },
    { num: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your Texas property is left exactly as it was.' },
  ],
}

// ─── Section variants (6 themes) ─────────────────────────────────────────────
const TX_SECTION_VARIANTS = [
  // T0 — DFW Luxury
  {
    heroPill:           'DFW Estate Dining',
    experiencePill:     'Beyond Dallas Restaurants',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Your ${city} Estate Is the Venue`,      desc: `No reservation required — your ${city} outdoor terrace, pool deck, or backyard becomes an exclusive private dining room for the evening.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',           desc: 'Filet mignon, lobster tail, Chilean sea bass, wagyu — all available per guest. The estate-level expectation, delivered at your Park Cities or North Dallas property.' },
      { icon: '👨‍🍳', title: 'One Chef, Your Group Only',            desc: `Your certified teppanyaki chef performs exclusively for your ${city} guests — no shared dining room, no strangers, no restaurant noise or timekeeping.` },
      { icon: '✨', title: 'Arrive, Perform, Disappear Spotless',   desc: 'Full setup before dinner and complete cleanup after. Your estate property is exactly as it was when the chef arrived.' },
    ],
    experienceImage:    '/pics/hibachi-dallas-tyler.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} estate property`,
    areasPill:          'Serving the DFW Luxury Market',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the DFW Luxury Corridor`,
    areasIntro: [
      (city, state) => `We serve ${city} and the full DFW luxury market — Highland Park, University Park, Westlake, Southlake, Colleyville, Preston Hollow, Frisco, and all surrounding Collin, Denton, and Tarrant County communities. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Estate Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Dining Standard in ${city}`,
    occasionSubtext:       'From estate anniversary dinners to landmark graduation celebrations, private hibachi is the DFW luxury market\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Questions Answered`,
    testimonialSubheading: 'What DFW Estate Hosts Are Saying',
  },
  // T1 — DFW Metro & Corporate
  {
    heroPill:           'DFW Private Chef',
    experiencePill:     'Beyond Any Dallas Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `${city} Is the Venue`,                  desc: `No reservation battle, no group parking, no rushed tables — your ${city} outdoor space becomes an exclusive private dining room for your group.` },
      { icon: '🔥', title: 'One Chef, One Show',                    desc: 'Every guest at the same grill, the same chef, the same performance — the shared experience is what makes hibachi unforgettable for any size group.' },
      { icon: '🎓', title: 'Built for Graduation Season',           desc: `${city} graduation Saturdays fill weeks in advance — when every DFW restaurant is fully booked, we come to your backyard.` },
      { icon: '🧹', title: 'Full Setup & Zero Cleanup',             desc: 'Chef arrives fully equipped, sets up completely, cooks the entire dinner, and packs out after. You host without touching a single plate.' },
    ],
    experienceImage:    '/pics/hibachi-texas.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, TX`,
    areasPill:          'Serving DFW & the Metro Area',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding DFW Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of greater DFW — Dallas, Fort Worth, Plano, Frisco, McKinney, Allen, Arlington, Irving, Garland, Mesquite, Grand Prairie, and every community throughout Collin, Denton, Tarrant, and Dallas County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your DFW Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From corporate team dinners to graduation parties and family milestones, private hibachi is DFW\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What DFW Metro Hosts Are Saying',
  },
  // T2 — Houston Metro
  {
    heroPill:           'Houston Private Chef',
    experiencePill:     'Better Than Any Houston Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} backyard, pool deck, or covered patio becomes an exclusive private dining room for your family or team.` },
      { icon: '🎉', title: 'Built for Houston Celebrations',        desc: `Quinceañeras, graduation parties, and family milestones — the ${city} format that keeps every generation at the same table for 90–120 minutes.` },
      { icon: '🎓', title: 'The Graduation Solution',               desc: `When every ${city} restaurant is booked weeks before commencement, the chef comes to you. One call. No reservation battle.` },
      { icon: '✨', title: 'Full Setup, Zero Cleanup',              desc: 'Chef arrives with everything, performs the full show, and packs out completely. Your Houston-area property is spotless when they leave.' },
    ],
    experienceImage:    '/pics/hibachi-event.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Houston-area home`,
    areasPill:          'Serving Houston & Greater Harris County',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of Greater Houston`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Greater Houston — The Woodlands, Katy, Sugar Land, Pearland, Friendswood, League City, Pasadena, Baytown, and all communities throughout Harris, Fort Bend, and Brazoria County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878.`,
    ],
    areasButton:           'Book Your Houston Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Celebration Worth Planning`,
    occasionSubtext:       'From quinceañeras and graduation parties to corporate team events and family reunions, private hibachi is Houston\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Greater Houston Hosts Are Saying',
  },
  // T3 — Austin Metro
  {
    heroPill:           'Austin Private Chef',
    experiencePill:     'The Austin Tech Standard',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} pool deck, backyard, or outdoor patio becomes an exclusive private dining room for your team or family.` },
      { icon: '💻', title: 'Built for Austin Tech Professionals',   desc: `Apple, Dell, Tesla, Oracle, and startup corridor families know quality. Our certified chefs deliver the performance and precision that matches the ${city} standard.` },
      { icon: '🎓', title: 'The Graduation Solution',               desc: `UT Austin graduation weekend books every ${city} restaurant table weeks before commencement. The chef comes to you — no reservation battle.` },
      { icon: '✨', title: 'Full Setup, Zero Cleanup',              desc: 'Chef arrives with everything, performs the full show, and packs out completely. Your Austin-area property is spotless when they leave.' },
    ],
    experienceImage:    '/pics/hibachi-austin-home-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Austin-area home`,
    areasPill:          'Serving Austin & the Central Texas Metro',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of the Austin Metro`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the Austin metro — Round Rock, Cedar Park, Georgetown, Lakeway, Pflugerville, Kyle, Buda, Hutto, and all communities throughout Travis, Williamson, and Hays County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878.`,
    ],
    areasButton:           'Book Your Austin Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner ${city} Professionals Have Been Waiting For`,
    occasionSubtext:       'Graduation parties, corporate team events, tech company milestones, and family celebrations — private hibachi is Austin\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Austin Metro Hosts Are Saying',
  },
  // T4 — San Antonio & Hill Country
  {
    heroPill:           'San Antonio Private Chef',
    experiencePill:     'Beyond San Antonio Restaurants',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} outdoor space becomes an exclusive private dining room for your family, quinceañera guests, or military celebration.` },
      { icon: '🪖', title: 'Serving Military & Hill Country Families', desc: `JBSA families, healthcare professionals, and ${city} corporate households — the private format that matches every occasion the city celebrates.` },
      { icon: '🎉', title: 'Built for Quinceañeras & Milestones',   desc: `When every ${city} restaurant is fully committed, the chef comes to your backyard. One call. No reservation battle. Full performance.` },
      { icon: '✨', title: 'Full Setup, Full Cleanup',               desc: 'Chef arrives with everything and leaves nothing behind. Your property is spotless. You kept the memory.' },
    ],
    experienceImage:    '/pics/hibachi-at-home-austin.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} San Antonio-area property`,
    areasPill:          'Serving San Antonio & the Hill Country',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of the San Antonio Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the San Antonio metro — Boerne, New Braunfels, Schertz, Kyle, Seguin, Converse, Universal City, and all surrounding Bexar, Comal, and Guadalupe County communities.`,
      (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878.`,
    ],
    areasButton:           'Book Your San Antonio Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Celebration`,
    occasionSubtext:       'From quinceañeras and military milestones to graduation parties and Hill Country ranch events, private hibachi brings San Antonio together',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi Questions — Answered`,
    testimonialSubheading: 'What San Antonio & Hill Country Hosts Are Saying',
  },
  // T5 — Gulf Coast & Destinations
  {
    heroPill:           'Texas Gulf Coast Private Chef',
    experiencePill:     'The Dinner of the Trip',
    experiencePoints:   (city) => [
      { icon: '🏖️', title: `Chef at Your ${city} Rental`,           desc: `Skip the impossible beach-town reservation — your chef comes directly to your ${city} beach house or vacation rental with the full self-contained setup.` },
      { icon: '🔥', title: 'Fire at the Beach House',               desc: 'Guests gathered on the deck for fire tricks, flying shrimp, and fresh proteins cooked to order — the Texas Gulf Coast evening nobody forgets.' },
      { icon: '👥', title: 'Scales from 10 to 60 Guests',           desc: `Intimate ${city} beach dinners of 10–20 or large family reunion gatherings of 60 — one or two stations sized to your exact group.` },
      { icon: '🏠', title: 'Rental Stays Spotless',                 desc: 'Full setup before the event and complete pack-out after. Your Gulf Coast rental is exactly as it was when the chef arrived.' },
    ],
    experienceImage:    '/pics/mobile-hibachi-2.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} Texas vacation rental`,
    areasPill:          'Serving the Texas Gulf Coast',
    areasHeadline:      (city) => `Mobile Hibachi in ${city} and the Texas Gulf Coast`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the Texas Gulf Coast — Galveston, Corpus Christi, South Padre Island, Port Aransas, Rockport, Fredericksburg, Waco, and every destination community across the state.`,
      (city) => `Gulf Coast and destination dates fill fast. Call or text (201) 565-3878 to confirm your ${city} booking now.`,
    ],
    areasButton:           'Check Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       'Bachelorette weekends, family reunions, birthday beach trips, and vacation group dinners — private hibachi is the best dinner of any Texas trip',
    faqPill:               'Gulf Coast Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Texas Gulf Coast & Destination Hosts Are Saying',
  },
]

// ─── City experience image map (citySlug → experience section image) ──────────
const TX_CITY_IMAGE_MAP = {
  // Batch 1 (profileIdx 0–7)
  'highland-park':   { src: '/pics/hibachi-chef-at-home.jpg',   alt: (city) => `Private hibachi chef at a Highland Park estate` },
  'university-park': { src: '/pics/hibachi-dallas-2.jpg',       alt: (city) => `Private hibachi chef at a University Park home` },
  'southlake':       { src: '/pics/private-hibachi.jpg',        alt: (city) => `Private hibachi chef at a Southlake, TX property` },
  'westlake':        { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Private hibachi chef at a Westlake, TX estate` },
  'colleyville':     { src: '/pics/hibachi-pic-2.jpg',          alt: (city) => `Hibachi event in Colleyville, TX` },
  'dallas':          { src: '/pics/hibachi-dallas-home-2.jpg',  alt: (city) => `Private hibachi chef at a Dallas, TX home` },
  'fort-worth':      { src: '/pics/hibachi-texas-home-2.jpg',   alt: (city) => `Private hibachi chef at a Fort Worth, TX home` },
  'plano':           { src: '/pics/hibachi-catering-3.jpg',     alt: (city) => `Hibachi catering event in Plano, TX` },
  // Batch 2 (profileIdx 8–15)
  'frisco':          { src: '/pics/hibachi-dallas-home.jpg',    alt: (city) => `Private hibachi chef at a Frisco, TX home` },
  'mckinney':        { src: '/pics/hibachi-dallas-tyler-2.jpg', alt: (city) => `Private hibachi event in McKinney, TX` },
  'allen':           { src: '/pics/backyard-hibachi-2.jpg',     alt: (city) => `Backyard hibachi event in Allen, TX` },
  'arlington':       { src: '/pics/hibachi-texas-home.jpg',     alt: (city) => `Hibachi catering event in Arlington, TX` },
  'houston':         { src: '/pics/hibachi-to-you.jpg',         alt: (city) => `Private hibachi chef in Houston, TX` },
  'the-woodlands':   { src: '/pics/hibachi-pic-4.jpg',          alt: (city) => `Private hibachi chef in The Woodlands, TX` },
  'katy':            { src: '/pics/hibachi-pic-62.jpg',         alt: (city) => `Private hibachi event in Katy, TX` },
  'sugar-land':      { src: '/pics/hibachi-pic-32.jpg',         alt: (city) => `Private hibachi event in Sugar Land, TX` },
  // Batch 3 (profileIdx 16–23)
  'pearland':        { src: '/pics/hibachi-texas-home.jpg',     alt: (city) => `Backyard hibachi event in Pearland, TX` },
  'friendswood':     { src: '/pics/hibachi-texas-home-2.jpg',   alt: (city) => `Mobile hibachi chef in Friendswood, TX` },
  'austin':          { src: '/pics/hibachi-austin.jpg',         alt: (city) => `Private hibachi chef at an Austin, TX home` },
  'round-rock':      { src: '/pics/hibachi-at-home-austin.jpg', alt: (city) => `Private hibachi event in Round Rock, TX` },
  'cedar-park':      { src: '/pics/hibachi-austin-home-3.jpg',  alt: (city) => `Private hibachi event in Cedar Park, TX` },
  'georgetown':      { src: '/pics/hibachi-shot-2.jpg',         alt: (city) => `Hibachi catering event in Georgetown, TX` },
  'lakeway':         { src: '/pics/mobile-hibachi.jpg',         alt: (city) => `Mobile hibachi chef at a Lakeway, TX lake property` },
  'san-antonio':     { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Private hibachi chef at a San Antonio, TX home` },
  // Batch 4 (profileIdx 24–31)
  'boerne':          { src: '/pics/hibachi-in-garage.jpg',      alt: (city) => `Mobile hibachi chef at a Boerne, TX Hill Country property` },
  'new-braunfels':   { src: '/pics/hibachi-pic-3.jpg',          alt: (city) => `Mobile hibachi event in New Braunfels, TX` },
  'schertz':         { src: '/pics/hibachi-philadelphia.jpg',   alt: (city) => `Private hibachi chef in Schertz, TX` },
  'kyle':            { src: '/pics/backyard-hibachi-3.jpg',     alt: (city) => `Backyard hibachi event in Kyle, TX` },
  'galveston':       { src: '/pics/hibachi-miami.jpg',          alt: (city) => `Mobile hibachi at a Galveston, TX beach house` },
  'corpus-christi':  { src: '/pics/hibachi-raleigh.jpg',        alt: (city) => `Hibachi catering event in Corpus Christi, TX` },
  'fredericksburg':  { src: '/pics/hibachi-wilmington.jpg',     alt: (city) => `Mobile hibachi at a Fredericksburg, TX Hill Country property` },
  'waco':            { src: '/pics/hibachi-hart.jpg',           alt: (city) => `Hibachi event in Waco, TX` },
}

// ─── Support images (testimonial + CTA sections) ──────────────────────────────
const TX_SUPPORT_IMAGES = {
  // Batch 1 (profileIdx 0–7)
  'highland-park': {
    testimonial: {
      src:        '/pics/hibachi-shot-1.jpg',
      alt:        (city) => `Estate hibachi dinner in Highland Park, TX`,
      caption:    'Highland Park estate entertaining',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `Highland Park and University Park hosts set the standard for private entertaining in Dallas — and our chefs arrive at every estate event ready to meet it. From Park Cities terrace anniversary dinners to graduation parties on English Tudor backyards, the level of quality our guests expect is the level we deliver. Here's what Highland Park hosts have found:`,
    },
    cta: {
      src:     '/pics/mobile-hibachi.jpg',
      alt:     (city) => `Private hibachi chef setting up at a Highland Park estate`,
      caption: 'The Park Cities private dining standard',
    },
  },
  'university-park': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Estate hibachi dinner in University Park, TX`,
      caption:    'University Park estate entertaining',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `University Park hosts — adjacent to SMU and anchoring Dallas's most prestigious residential corridor — choose private hibachi for graduation parties, estate anniversary dinners, and milestone celebrations that match the standard of their properties. See what University Park hosts have discovered:`,
    },
    cta: {
      src:     '/pics/private-party-chef-6.jpg',
      alt:     (city) => `Private hibachi chef at a University Park home`,
      caption: 'University Park\'s estate dining format',
    },
  },
  'southlake': {
    testimonial: {
      src:        '/pics/hero-3.jpg',
      alt:        (city) => `Private hibachi graduation party in Southlake, TX`,
      caption:    'Southlake graduation season',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Southlake families choose private hibachi for their CISD graduation parties, corporate team dinners, and milestone celebrations — because nothing else delivers the combination of live entertainment and genuine dining quality that makes any occasion worth planning. See what Southlake hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Southlake, TX`,
      caption: 'The Southlake graduation standard',
    },
  },
  'westlake': {
    testimonial: {
      src:        '/pics/backyard-hibachi.jpg',
      alt:        (city) => `Estate hibachi dinner in Westlake, TX`,
      caption:    'Westlake estate entertaining',
      trustBadge: 'Premium Private Dining Experiences',
      intro:      (city) => `Westlake is Texas's most exclusive residential community — and the estate events here set a standard our chefs arrive fully prepared to meet. From Carroll ISD graduation estate parties to executive client appreciation dinners, see what Westlake hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-photo-2.jpg',
      alt:     (city) => `Private hibachi chef at a Westlake, TX estate`,
      caption: 'Westlake\'s private dining standard',
    },
  },
  'colleyville': {
    testimonial: {
      src:        '/pics/hibachi-austin.jpg',
      alt:        (city) => `Private hibachi party in Colleyville, TX`,
      caption:    'Colleyville graduation season',
      trustBadge: 'Trusted by Colleyville Families',
      intro:      (city) => `Colleyville families and professionals choose private hibachi for Birdville ISD graduation parties, anniversary dinners, and milestone backyard celebrations. See what Colleyville hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-2.jpg',
      alt:     (city) => `Private hibachi chef in Colleyville, TX`,
      caption: 'The Colleyville celebration standard',
    },
  },
  'dallas': {
    testimonial: {
      src:        '/pics/hibachi-shot-2.jpg',
      alt:        (city) => `Corporate hibachi event in Dallas, TX`,
      caption:    'Dallas professionals choose hibachi',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `Dallas professionals, corporate teams, and families all turn to private hibachi when the event needs to be truly memorable. From Uptown milestone dinners and Preston Hollow graduation parties to law firm client events and tech company team gatherings — our certified chefs bring the full teppanyaki experience to your door. See what Dallas hosts have discovered:`,
    },
    cta: {
      src:     '/pics/hero-2.jpg',
      alt:     (city) => `Private hibachi chef setting up in Dallas, TX`,
      caption: 'Your Dallas event starts here',
    },
  },
  'fort-worth': {
    testimonial: {
      src:        '/pics/private-event-4.jpg',
      alt:        (city) => `Private hibachi party in Fort Worth, TX`,
      caption:    'Fort Worth backyard entertaining',
      trustBadge: 'Trusted by Fort Worth Families',
      intro:      (city) => `Fort Worth families near the Cultural District, Westover Hills, Tanglewood, and Rivercrest know how to host — and private hibachi fits right into the Texas tradition of big, welcoming backyard gatherings. See what Fort Worth hosts are saying:`,
    },
    cta: {
      src:     '/pics/hero-3.jpg',
      alt:     (city) => `Private hibachi chef in Fort Worth, TX`,
      caption: 'The Fort Worth celebration standard',
    },
  },
  'plano': {
    testimonial: {
      src:        '/pics/hibachi-pic-3.jpg',
      alt:        (city) => `Hibachi catering event in Plano, TX`,
      caption:    'Plano corporate and graduation events',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Plano hosts — from Legacy Drive corporate professionals and Toyota North America teams to West Plano families planning Plano ISD graduation parties — choose private hibachi for events that demand something better than a restaurant reservation. See what Plano hosts are saying:`,
    },
    cta: {
      src:     '/pics/hero-4.jpg',
      alt:     (city) => `Private hibachi chef catering in Plano, TX`,
      caption: 'Plano\'s corporate catering standard',
    },
  },
  // Batch 2 (profileIdx 8–15)
  'frisco': {
    testimonial: {
      src:        '/pics/hibachi-photo-1.jpg',
      alt:        (city) => `Private hibachi event in Frisco, TX`,
      caption:    'Frisco graduation and team dinners',
      trustBadge: 'Trusted by North Collin County Families',
      intro:      (city) => `Frisco tech professionals, corporate teams, and Frisco ISD families choose private hibachi when the event needs to stand out. From Legacy Drive team dinners to graduation parties in Stonebriar neighborhoods, see what Frisco hosts are saying:`,
    },
    cta: {
      src:     '/pics/hero-5.jpg',
      alt:     (city) => `Private hibachi chef setting up in Frisco, TX`,
      caption: 'Your Frisco event starts here',
    },
  },
  'mckinney': {
    testimonial: {
      src:        '/pics/backyard-hibachi-3.jpg',
      alt:        (city) => `Private hibachi party in McKinney, TX`,
      caption:    'McKinney backyard entertaining',
      trustBadge: 'Trusted by McKinney Families',
      intro:      (city) => `McKinney families — from Craig Ranch professionals and Adriatica Village households to MISD graduation families — choose private hibachi for celebrations that match Collin County's quality standard. See what McKinney hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-hart.jpg',
      alt:     (city) => `Private hibachi chef in McKinney, TX`,
      caption: 'McKinney\'s celebration standard',
    },
  },
  'allen': {
    testimonial: {
      src:        '/pics/hibachi-catering-austin.jpg',
      alt:        (city) => `Backyard hibachi party in Allen, TX`,
      caption:    'Allen ISD graduation season',
      trustBadge: 'Trusted by Allen Families',
      intro:      (city) => `Allen families and professionals choose private hibachi for AISD graduation parties, anniversary celebrations, and backyard events that bring the neighborhood together. See what Allen hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-chef-2.jpg',
      alt:     (city) => `Private hibachi chef in Allen, TX`,
      caption: 'The Allen backyard celebration',
    },
  },
  'arlington': {
    testimonial: {
      src:        '/pics/hibachi-raleigh.jpg',
      alt:        (city) => `Hibachi catering event in Arlington, TX`,
      caption:    'Arlington corporate and graduation events',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `Arlington families, corporate teams, and event hosts choose private hibachi catering when the scale and occasion demand something beyond a restaurant. From UTA graduation parties to AT&T Stadium-area corporate events, see what Arlington hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-miami.jpg',
      alt:     (city) => `Private hibachi catering setup in Arlington, TX`,
      caption: 'Arlington\'s catering standard',
    },
  },
  'houston': {
    testimonial: {
      src:        '/pics/hibachi-to-you-2.jpg',
      alt:        (city) => `Private hibachi chef in Houston, TX`,
      caption:    'Houston celebrations — quinceañeras, graduation, corporate',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `Houston families, corporate professionals, and celebration hosts choose private hibachi for quinceañeras, graduation parties, corporate client dinners, and milestones that bring generations together. See what Houston hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-home-austin.jpg',
      alt:     (city) => `Private hibachi chef setting up in Houston, TX`,
      caption: 'Your Houston event starts here',
    },
  },
  'the-woodlands': {
    testimonial: {
      src:        '/pics/hibachi-colorado-home.jpg',
      alt:        (city) => `Private hibachi dinner in The Woodlands, TX`,
      caption:    'The Woodlands estate entertaining',
      trustBadge: 'Premium Private Dining Experiences',
      intro:      (city) => `The Woodlands hosts — from Waterway District professionals and energy company executives to Conroe ISD graduation families — choose private hibachi for the format that matches the community's quality standard. See what Woodlands hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-colorado.jpg',
      alt:     (city) => `Private hibachi chef in The Woodlands, TX`,
      caption: 'The Woodlands\' private dining standard',
    },
  },
  'katy': {
    testimonial: {
      src:        '/pics/hibachi-austin-2.jpg',
      alt:        (city) => `Private hibachi party in Katy, TX`,
      caption:    'Katy ISD graduation season',
      trustBadge: 'Trusted by Katy Families',
      intro:      (city) => `Katy ISD families and Cinco Ranch households choose private hibachi for graduation parties, birthday celebrations, and backyard events that the whole neighborhood hears about. See what Katy hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-3.jpg',
      alt:     (city) => `Private hibachi chef in Katy, TX`,
      caption: 'The Katy celebration standard',
    },
  },
  'sugar-land': {
    testimonial: {
      src:        '/pics/private-chef-2.jpg',
      alt:        (city) => `Private hibachi dinner in Sugar Land, TX`,
      caption:    'Sugar Land estate entertaining',
      trustBadge: 'Trusted by Fort Bend County Families',
      intro:      (city) => `Sugar Land professionals, Fort Bend ISD families, and First Colony households choose private hibachi for graduation parties, anniversary dinners, and corporate team events that match the quality standard this community sets. See what Sugar Land hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-home-3.jpg',
      alt:     (city) => `Private hibachi chef in Sugar Land, TX`,
      caption: 'Sugar Land\'s private dining standard',
    },
  },
  // Batch 3 (profileIdx 16–23)
  'pearland': {
    testimonial: {
      src:        '/pics/hibachi-catering-2.jpg',
      alt:        (city) => `Backyard hibachi event in Pearland, TX`,
      caption:    'Pearland backyard celebrations',
      trustBadge: 'Trusted by Brazoria County Families',
      intro:      (city) => `Pearland families choose backyard hibachi for PISD graduation parties, birthday celebrations, and family reunions that bring the whole neighborhood together. See what Pearland hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-shot-1.jpg',
      alt:     (city) => `Private hibachi chef in Pearland, TX`,
      caption: 'Pearland\'s backyard celebration standard',
    },
  },
  'friendswood': {
    testimonial: {
      src:        '/pics/hibachi-photo-2.jpg',
      alt:        (city) => `Mobile hibachi party in Friendswood, TX`,
      caption:    'Friendswood Clear Lake area entertaining',
      trustBadge: 'Trusted by Clear Lake Families',
      intro:      (city) => `Friendswood families in the Clear Creek ISD corridor choose mobile hibachi for graduation parties, anniversary dinners, and backyard celebrations that make the evening unforgettable. See what Friendswood hosts are saying:`,
    },
    cta: {
      src:     '/pics/hero-2.jpg',
      alt:     (city) => `Mobile hibachi chef in Friendswood, TX`,
      caption: 'Your Friendswood event starts here',
    },
  },
  'austin': {
    testimonial: {
      src:        '/pics/hibachi-austin-2.jpg',
      alt:        (city) => `Private hibachi chef in Austin, TX`,
      caption:    'Austin tech professionals choose private hibachi',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `Austin tech professionals, UT families, and corporate teams choose private hibachi for the format that matches the city's standard — from Domain-area team dinners to pool deck graduation parties and South Congress anniversary celebrations. See what Austin hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-3.jpg',
      alt:     (city) => `Private hibachi chef setting up in Austin, TX`,
      caption: 'Your Austin event starts here',
    },
  },
  'round-rock': {
    testimonial: {
      src:        '/pics/hibachi-home-austin.jpg',
      alt:        (city) => `Private hibachi event in Round Rock, TX`,
      caption:    'Round Rock graduation and tech events',
      trustBadge: 'Trusted by Williamson County Families',
      intro:      (city) => `Round Rock families — from Dell Technologies professionals and tech corridor households to RRISD graduation families — choose private hibachi for the format that makes any occasion more than a restaurant dinner. See what Round Rock hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-home-2.jpg',
      alt:     (city) => `Private hibachi chef in Round Rock, TX`,
      caption: 'Round Rock\'s celebration standard',
    },
  },
  'cedar-park': {
    testimonial: {
      src:        '/pics/hibachi-catering-austin.jpg',
      alt:        (city) => `Private hibachi party in Cedar Park, TX`,
      caption:    'Cedar Park Leander ISD graduation season',
      trustBadge: 'Trusted by Cedar Park Families',
      intro:      (city) => `Cedar Park families — from Leander ISD graduation households and Twin Creeks tech professionals to 183-A corridor families — choose private hibachi for the format that makes every celebration worth planning. See what Cedar Park hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-pic-4.jpg',
      alt:     (city) => `Private hibachi chef in Cedar Park, TX`,
      caption: 'Cedar Park\'s celebration standard',
    },
  },
  'georgetown': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Hibachi catering event in Georgetown, TX`,
      caption:    'Georgetown graduation and Hill Country events',
      trustBadge: 'Trusted by Georgetown Families',
      intro:      (city) => `Georgetown families — from Sun City retirees and Hill Country-adjacent households to GISD graduation families and Austin-area tech professionals — choose hibachi catering for celebrations that match the ambition of this growing Williamson County community. See what Georgetown hosts are saying:`,
    },
    cta: {
      src:     '/pics/backyard-hibachi.jpg',
      alt:     (city) => `Hibachi catering chef in Georgetown, TX`,
      caption: 'Georgetown\'s catering standard',
    },
  },
  'lakeway': {
    testimonial: {
      src:        '/pics/mobile-hibachi-2.jpg',
      alt:        (city) => `Mobile hibachi at a Lakeway, TX lake property`,
      caption:    'Lake Travis lakeside hibachi events',
      trustBadge: 'Unforgettable Lake House Dining',
      intro:      (city) => `Lakeway homeowners, Lake Travis vacation hosts, and Bee Cave-area families choose mobile hibachi for the format that makes the best dinner of any lake weekend happen at the property — not at a restaurant. See what Lakeway hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-pool-party.jpg',
      alt:     (city) => `Mobile hibachi chef at a Lakeway, TX home`,
      caption: 'Your Lakeway lake event starts here',
    },
  },
  'san-antonio': {
    testimonial: {
      src:        '/pics/hibachi-wilmington.jpg',
      alt:        (city) => `Private hibachi chef in San Antonio, TX`,
      caption:    'San Antonio quinceañeras, graduation, military milestones',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `San Antonio families — from JBSA military households and Stone Oak professionals to multi-generational quinceañera celebrations and NEISD graduation parties — choose private hibachi for the format that matches San Antonio's deep tradition of celebratory hospitality. See what San Antonio hosts are saying:`,
    },
    cta: {
      src:     '/pics/traveling-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in San Antonio, TX`,
      caption: 'Your San Antonio event starts here',
    },
  },
  // Batch 4 (profileIdx 24–31)
  'boerne': {
    testimonial: {
      src:        '/pics/hibachi-dallas.jpg',
      alt:        (city) => `Mobile hibachi at a Boerne, TX Hill Country property`,
      caption:    'Boerne Hill Country entertaining',
      trustBadge: 'Unforgettable Hill Country Experiences',
      intro:      (city) => `Boerne Hill Country hosts — from ranch property owners and Boerne ISD families to San Antonio-area households celebrating milestone occasions in the Hill Country — choose mobile hibachi for the format that matches the setting. See what Boerne hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-dallas-2.jpg',
      alt:     (city) => `Mobile hibachi chef in Boerne, TX`,
      caption: 'Your Boerne Hill Country event starts here',
    },
  },
  'new-braunfels': {
    testimonial: {
      src:        '/pics/backyard-hibachi-2.jpg',
      alt:        (city) => `Mobile hibachi event in New Braunfels, TX`,
      caption:    'New Braunfels river and Hill Country events',
      trustBadge: 'Trusted by Hill Country Hosts',
      intro:      (city) => `New Braunfels hosts — from Comal River property owners and Gruene Historic District visitors to Canyon High graduation families and San Marcos-area households — choose mobile hibachi for the Hill Country format that no restaurant can match. See what New Braunfels hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Mobile hibachi chef in New Braunfels, TX`,
      caption: 'Your New Braunfels event starts here',
    },
  },
  'schertz': {
    testimonial: {
      src:        '/pics/hibachi-shot-1.jpg',
      alt:        (city) => `Private hibachi event in Schertz, TX`,
      caption:    'Schertz military and family celebrations',
      trustBadge: 'Trusted by Military & Schertz Families',
      intro:      (city) => `Schertz military families, SCUCISD households, and Universal City-area professionals choose private hibachi for graduation parties, birthday celebrations, and family gatherings that match the community's hospitality standard. See what Schertz hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-2.jpg',
      alt:     (city) => `Private hibachi chef in Schertz, TX`,
      caption: 'Your Schertz event starts here',
    },
  },
  'kyle': {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Backyard hibachi event in Kyle, TX`,
      caption:    'Kyle Hays CISD graduation season',
      trustBadge: 'Trusted by Kyle Families',
      intro:      (city) => `Kyle families — from Hays CISD graduation households and Plum Creek community professionals to the fast-growing residential communities running south of Austin on IH-35 — choose private hibachi for celebrations that match Kyle's momentum. See what Kyle hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-texas-home-2.jpg',
      alt:     (city) => `Backyard hibachi chef in Kyle, TX`,
      caption: 'Your Kyle backyard event starts here',
    },
  },
  'galveston': {
    testimonial: {
      src:        '/pics/hero-3.jpg',
      alt:        (city) => `Mobile hibachi at a Galveston, TX beach house`,
      caption:    'Galveston beach house entertaining',
      trustBadge: 'The Best Dinner of the Trip',
      intro:      (city) => `Galveston beach house hosts and vacation rental groups choose mobile hibachi for the dinner that no Gulf Coast restaurant can match at this scale — the chef comes to the property, performs on the deck, and leaves the rental spotless. See what Galveston hosts are saying:`,
    },
    cta: {
      src:     '/pics/hero-4.jpg',
      alt:     (city) => `Mobile hibachi chef at a Galveston, TX beach rental`,
      caption: 'Your Galveston beach event starts here',
    },
  },
  'corpus-christi': {
    testimonial: {
      src:        '/pics/hibachi-raleigh.jpg',
      alt:        (city) => `Hibachi catering event in Corpus Christi, TX`,
      caption:    'Corpus Christi waterfront catering',
      trustBadge: 'Trusted by Coastal Bend Hosts',
      intro:      (city) => `Corpus Christi waterfront hosts, Padre Island vacation groups, and Coastal Bend corporate professionals choose hibachi catering for the format that scales to any outdoor venue along the Texas Gulf Coast. See what Corpus Christi hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-colorado.jpg',
      alt:     (city) => `Hibachi catering chef in Corpus Christi, TX`,
      caption: 'Your Corpus Christi event starts here',
    },
  },
  'fredericksburg': {
    testimonial: {
      src:        '/pics/hibachi-catering-austin.jpg',
      alt:        (city) => `Mobile hibachi at a Fredericksburg, TX Hill Country property`,
      caption:    'Fredericksburg wine country entertaining',
      trustBadge: 'The Dinner of the Weekend',
      intro:      (city) => `Fredericksburg vacation property hosts, wine country weekend groups, and Hill Country ranch owners choose mobile hibachi catering for the dinner that no Fredericksburg restaurant or winery can replicate — the chef comes to the property and the evening becomes the highlight of the trip. See what Fredericksburg hosts are saying:`,
    },
    cta: {
      src:     '/pics/traveling-hibachi.jpg',
      alt:     (city) => `Mobile hibachi chef at a Fredericksburg, TX property`,
      caption: 'Your Fredericksburg event starts here',
    },
  },
  'waco': {
    testimonial: {
      src:        '/pics/hibachi-colorado-home.jpg',
      alt:        (city) => `Private hibachi event in Waco, TX`,
      caption:    'Waco Baylor graduation and family celebrations',
      trustBadge: 'Trusted by Waco Families',
      intro:      (city) => `Waco families — from Baylor graduation households and Magnolia-area professionals to multi-generational Central Texas families who celebrate their milestones at home — choose private hibachi for the format that matches the city's hospitality tradition. See what Waco hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-home-austin.jpg',
      alt:     (city) => `Private hibachi chef in Waco, TX`,
      caption: 'Your Waco event starts here',
    },
  },
}

// ─── Custom meta overrides ────────────────────────────────────────────────────
const TX_CUSTOM_META = {
  'highland-park': {
    title: 'Hibachi at Home in Highland Park, TX | Estate Private Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Highland Park estate. Premium proteins, live teppanyaki performance, complete cleanup. Perfect for graduation parties and anniversary dinners. From $60/adult.',
  },
  'university-park': {
    title: 'Hibachi at Home in University Park, TX | Estate Private Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in University Park, TX for graduation parties, estate anniversary dinners, and milestone celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'southlake': {
    title: 'Private Hibachi Chef in Southlake, TX | Graduation Parties & Corporate Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Southlake, TX for CISD graduation parties, corporate team dinners, and milestone celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'westlake': {
    title: 'Private Hibachi Chef in Westlake, TX | Estate Private Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Westlake, TX estate. Premium proteins, live teppanyaki performance, complete cleanup. Perfect for milestone events and executive gatherings. From $60/adult.',
  },
  'colleyville': {
    title: 'Hibachi at Home in Colleyville, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Colleyville, TX property. Live teppanyaki, full setup & cleanup. Perfect for graduation parties and family milestones. Serving Colleyville and the DFW area. From $60/adult.',
  },
  'dallas': {
    title: 'Private Hibachi Chef in Dallas, TX | Corporate & Private Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Dallas, TX for corporate team dinners, graduation parties, and estate milestone events. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'fort-worth': {
    title: 'Hibachi at Home in Fort Worth, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Fort Worth, TX home. Live teppanyaki, full setup & cleanup. Perfect for graduation parties, family milestones, and backyard celebrations. From $60/adult.',
  },
  'plano': {
    title: 'Hibachi Catering in Plano, TX | Corporate & Graduation Events | Hibachi Connect',
    desc:  'Book hibachi catering in Plano, TX for graduation parties, corporate events, and private dinners. Certified teppanyaki chef, full setup & cleanup. Serving Plano and greater DFW. From $60/adult.',
  },
  // Batch 2 (profileIdx 8–15)
  'frisco': {
    title: 'Hibachi at Home in Frisco, TX | Graduation Parties & Team Dinners | Hibachi Connect',
    desc:  'Book a private hibachi chef in Frisco, TX for graduation parties, corporate team dinners, and backyard celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'mckinney': {
    title: 'Hibachi at Home in McKinney, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your McKinney, TX home. Live teppanyaki, full setup & cleanup. Perfect for Collin County graduation parties and family milestones. From $60/adult.',
  },
  'allen': {
    title: 'Backyard Hibachi in Allen, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Allen, TX backyard. Live teppanyaki, full setup & cleanup. Perfect for AISD graduation parties and family milestones. From $60/adult.',
  },
  'arlington': {
    title: 'Hibachi Catering in Arlington, TX | Corporate & Graduation Events | Hibachi Connect',
    desc:  'Book hibachi catering in Arlington, TX for graduation parties, corporate events, and family celebrations. Certified teppanyaki chef, full setup & cleanup. Serving Arlington and the DFW area. From $60/adult.',
  },
  'houston': {
    title: 'Private Hibachi Chef in Houston, TX | Quinceañeras, Graduation & Corporate Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Houston, TX for quinceañeras, graduation parties, corporate dinners, and family milestones. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'the-woodlands': {
    title: 'Private Hibachi Chef in The Woodlands, TX | Corporate & Graduation Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Woodlands, TX property. Premium dining, live teppanyaki performance, complete cleanup. Perfect for graduation parties and executive dinners. From $60/adult.',
  },
  'katy': {
    title: 'Hibachi at Home in Katy, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Katy, TX home. Live teppanyaki, full setup & cleanup. Perfect for KISD graduation parties and family celebrations. Serving Katy and Greater Houston. From $60/adult.',
  },
  'sugar-land': {
    title: 'Hibachi at Home in Sugar Land, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Sugar Land, TX home. Live teppanyaki, full setup & cleanup. Perfect for Fort Bend ISD graduation parties and family milestones. From $60/adult.',
  },
  // Batch 3 (profileIdx 16–23)
  'pearland': {
    title: 'Backyard Hibachi in Pearland, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Pearland, TX backyard. Live teppanyaki, full setup & cleanup. Perfect for PISD graduation parties and family celebrations. From $60/adult.',
  },
  'friendswood': {
    title: 'Mobile Hibachi in Friendswood, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified mobile hibachi chef at your Friendswood, TX home. Live teppanyaki, full setup & cleanup. Perfect for CCISD graduation parties and family milestones. From $60/adult.',
  },
  'austin': {
    title: 'Private Hibachi Chef in Austin, TX | Graduation Parties & Corporate Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Austin, TX for UT graduation parties, tech company team dinners, and family milestones. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'round-rock': {
    title: 'Hibachi at Home in Round Rock, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Round Rock, TX home. Live teppanyaki, full setup & cleanup. Perfect for RRISD graduation parties and family celebrations. From $60/adult.',
  },
  'cedar-park': {
    title: 'Hibachi at Home in Cedar Park, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Cedar Park, TX home. Live teppanyaki, full setup & cleanup. Perfect for Leander ISD graduation parties and family milestones. From $60/adult.',
  },
  'georgetown': {
    title: 'Hibachi Catering in Georgetown, TX | Graduation Parties & Corporate Events | Hibachi Connect',
    desc:  'Book hibachi catering in Georgetown, TX for graduation parties, corporate events, and family celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'lakeway': {
    title: 'Mobile Hibachi in Lakeway, TX | Lake Travis Events & Graduation Parties | Hibachi Connect',
    desc:  'A certified mobile hibachi chef at your Lakeway, TX home or Lake Travis vacation property. Live teppanyaki, full setup & cleanup. Perfect for lake weekends and graduation parties. From $60/adult.',
  },
  'san-antonio': {
    title: 'Hibachi at Home in San Antonio, TX | Quinceañeras, Graduation & Military Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in San Antonio, TX for quinceañeras, graduation parties, military family milestones, and corporate events. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  // Batch 4 (profileIdx 24–31)
  'boerne': {
    title: 'Mobile Hibachi in Boerne, TX | Hill Country Private Events | Hibachi Connect',
    desc:  'A certified mobile hibachi chef at your Boerne, TX Hill Country property or ranch. Live teppanyaki, full self-contained setup & cleanup. Perfect for anniversary dinners and family reunions. From $60/adult.',
  },
  'new-braunfels': {
    title: 'Mobile Hibachi in New Braunfels, TX | River House & Hill Country Events | Hibachi Connect',
    desc:  'A certified mobile hibachi chef at your New Braunfels, TX property. Live teppanyaki, full setup & cleanup. Perfect for Comal River gatherings and Hill Country celebrations. From $60/adult.',
  },
  'schertz': {
    title: 'Hibachi at Home in Schertz, TX | Graduation Parties & Military Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Schertz, TX home. Live teppanyaki, full setup & cleanup. Perfect for SCUCISD graduation parties and military family milestones. From $60/adult.',
  },
  'kyle': {
    title: 'Backyard Hibachi in Kyle, TX | Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Kyle, TX backyard. Live teppanyaki, full setup & cleanup. Perfect for Hays CISD graduation parties and family celebrations. From $60/adult.',
  },
  'galveston': {
    title: 'Mobile Hibachi in Galveston, TX | Beach House Events & Gulf Coast Celebrations | Hibachi Connect',
    desc:  'A certified mobile hibachi chef at your Galveston, TX beach house or vacation rental. Live teppanyaki, full self-contained setup & cleanup. The best dinner of any Gulf Coast trip. From $60/adult.',
  },
  'corpus-christi': {
    title: 'Hibachi Catering in Corpus Christi, TX | Waterfront Events & Gulf Coast Celebrations | Hibachi Connect',
    desc:  'Book hibachi catering in Corpus Christi, TX for waterfront events, graduation parties, and corporate gatherings. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'fredericksburg': {
    title: 'Hibachi Catering in Fredericksburg, TX | Wine Country & Hill Country Private Events | Hibachi Connect',
    desc:  'A certified mobile hibachi chef at your Fredericksburg, TX vacation property or ranch. Live teppanyaki, full self-contained setup & cleanup. The dinner of any Hill Country weekend. From $60/adult.',
  },
  'waco': {
    title: 'Hibachi at Home in Waco, TX | Baylor Graduation Parties & Family Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Waco, TX home. Live teppanyaki, full setup & cleanup. Perfect for Baylor graduation parties and Central Texas family celebrations. From $60/adult.',
  },
}

// ─── Generic theme closings (TX generic 641–646) ──────────────────────────────
export const TX_CLOSING_VARIANTS = [
  // 641 — T0 DFW Luxury
  {
    headline: (city) => `${city}'s Estate Dining Standard — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your ${city} estate or outdoor property. Premium ingredients, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `DFW luxury estate events and graduation Saturdays book 4–5 weeks out. Reserve your date now.`,
  },
  // 642 — T1 DFW Metro & Corporate
  {
    headline: (city) => `${city}'s Private Dining Standard — Book It`,
    sub:      (city) => `A certified teppanyaki chef for your ${city} corporate event or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `DFW corporate and graduation weekends book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 643 — T2 Houston Metro
  {
    headline: (city) => `The ${city} Celebration Worth Planning — Book Yours`,
    sub:      (city) => `A certified teppanyaki chef for your ${city} quinceañera, graduation, or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Houston quinceañera season and graduation weekends book 3–5 weeks ahead. Confirm your date now.`,
  },
  // 644 — T3 Austin Metro
  {
    headline: (city) => `${city}'s Most Memorable Dinner — Book Yours`,
    sub:      (city) => `A certified hibachi chef at your ${city} home or outdoor venue. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Austin graduation season and peak weekends book 3–5 weeks ahead. Reserve your date now.`,
  },
  // 645 — T4 San Antonio & Hill Country
  {
    headline: (city) => `${city}'s Most Memorable Celebration — Book Yours`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `San Antonio quinceañera season and graduation weekends book early — confirm your date now.`,
  },
  // 646 — T5 Gulf Coast & Destinations
  {
    headline: (city) => `The ${city} Dinner Your Group Has Been Waiting For`,
    sub:      (city) => `A certified hibachi chef at your ${city} beach house or rental — grill, ingredients, full show, complete cleanup. From $60 per adult.`,
    urgency:  `Gulf Coast and destination dates fill fast — confirm your Texas beach season booking 3–5 weeks ahead.`,
  },
]

// ─── City-specific closings (TX city-specific 647–654, Batch 1) ──────────────
export const TX_CITY_CLOSINGS = [
  // 647 — Highland Park (profileIdx 0)
  {
    headline: (city) => `Highland Park Estate Dining — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Highland Park estate or outdoor property. Premium ingredients, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `Highland Park estate events and graduation Saturdays book 4–5 weeks out. Reserve your date now.`,
  },
  // 648 — University Park (profileIdx 1)
  {
    headline: (city) => `University Park Estate Dining — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your University Park home. Premium ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `University Park estate events and SMU graduation Saturdays book 4–5 weeks out. Reserve your date now.`,
  },
  // 649 — Southlake (profileIdx 2)
  {
    headline: (city) => `Southlake Graduation Season — Don't Wait`,
    sub:      (city) => `A certified teppanyaki chef at your Southlake home. All proteins, live performance, full cleanup. From $60/adult.`,
    urgency:  `Southlake CISD graduation and summer weekends fill fast. Check your date now.`,
  },
  // 650 — Westlake (profileIdx 3)
  {
    headline: (city) => `Westlake Estate Dining — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Westlake estate. Premium proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Westlake estate events and Carroll ISD graduation Saturdays book 4–6 weeks out. Reserve your date now.`,
  },
  // 651 — Colleyville (profileIdx 4)
  {
    headline: (city) => `Colleyville's Best Backyard Event — Book Yours`,
    sub:      (city) => `A certified hibachi chef comes to your Colleyville property. All ingredients, full live performance, complete cleanup. From $60/adult.`,
    urgency:  `Colleyville graduation and summer weekends book 2–3 weeks out. Secure your date now.`,
  },
  // 652 — Dallas (profileIdx 5)
  {
    headline: (city) => `Dallas's Private Dining Standard — Book It`,
    sub:      (city) => `A certified teppanyaki chef for your Dallas corporate event or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Dallas corporate and graduation weekends book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 653 — Fort Worth (profileIdx 6)
  {
    headline: (city) => `Fort Worth's Best Backyard Party — Book Yours`,
    sub:      (city) => `A certified hibachi chef at your Fort Worth home. All ingredients, full live performance, complete cleanup. From $60/adult.`,
    urgency:  `Fort Worth graduation and summer weekends book 2–4 weeks out. Secure your date now.`,
  },
  // 654 — Plano (profileIdx 7)
  {
    headline: (city) => `Plano Hibachi Catering — Reserve Your Chef`,
    sub:      (city) => `A certified teppanyaki chef at your Plano property. Corporate events, graduation parties, private dinners. Full setup & cleanup. From $60/adult.`,
    urgency:  `Plano graduation and summer weekends book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 655 — Frisco (profileIdx 8)
  {
    headline: (city) => `Frisco Hibachi at Home — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Frisco home or outdoor property. Full setup, all fresh ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Frisco ISD graduation and summer weekends book 2–4 weeks out. Confirm your date now.`,
  },
  // 656 — McKinney (profileIdx 9)
  {
    headline: (city) => `McKinney Hibachi at Home — Book Your Date`,
    sub:      (city) => `A certified hibachi chef at your McKinney property. Live teppanyaki, full setup, complete cleanup. From $60/adult.`,
    urgency:  `McKinney ISD graduation and summer weekends book 2–4 weeks ahead. Secure your date now.`,
  },
  // 657 — Allen (profileIdx 10)
  {
    headline: (city) => `Allen Backyard Hibachi — Reserve Now`,
    sub:      (city) => `A certified hibachi chef at your Allen home. Backyard performance, live cooking, full setup and cleanup. From $60/adult.`,
    urgency:  `Allen ISD graduation and summer weekends book 2–3 weeks out. Check your date now.`,
  },
  // 658 — Arlington (profileIdx 11)
  {
    headline: (city) => `Arlington Hibachi Catering — Lock In Your Date`,
    sub:      (city) => `Certified teppanyaki catering at your Arlington venue or home. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Arlington corporate events and graduation weekends book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 659 — Houston (profileIdx 12)
  {
    headline: (city) => `Houston's Private Chef Standard — Book Yours`,
    sub:      (city) => `A certified teppanyaki chef at your Houston home or outdoor venue. All proteins, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Houston graduation season and quinceañera season book 3–5 weeks out. Reserve your date now.`,
  },
  // 660 — The Woodlands (profileIdx 13)
  {
    headline: (city) => `The Woodlands Private Chef — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Woodlands property. Premium dining, live performance, full cleanup. From $60/adult.`,
    urgency:  `The Woodlands graduation and corporate weekends book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 661 — Katy (profileIdx 14)
  {
    headline: (city) => `Katy Hibachi at Home — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Katy property. Full setup, live teppanyaki, complete cleanup. From $60/adult.`,
    urgency:  `Katy ISD graduation and summer weekends book 2–4 weeks out. Secure your date now.`,
  },
  // 662 — Sugar Land (profileIdx 15)
  {
    headline: (city) => `Sugar Land Hibachi at Home — Book Yours`,
    sub:      (city) => `A certified hibachi chef at your Sugar Land home. Live teppanyaki, full setup, complete cleanup. From $60/adult.`,
    urgency:  `Fort Bend ISD graduation and Houston suburb weekends book 2–4 weeks ahead. Reserve your date now.`,
  },
  // 663 — Pearland (profileIdx 16)
  {
    headline: (city) => `Pearland Backyard Hibachi — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Pearland property. Live backyard performance, full setup, complete cleanup. From $60/adult.`,
    urgency:  `Pearland ISD graduation and summer weekends book 2–4 weeks ahead. Secure your date now.`,
  },
  // 664 — Friendswood (profileIdx 17)
  {
    headline: (city) => `Mobile Hibachi in Friendswood — Book Your Chef`,
    sub:      (city) => `A certified mobile hibachi chef to your Friendswood home. Full self-contained setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Clear Creek ISD graduation and summer weekends book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 665 — Austin (profileIdx 18)
  {
    headline: (city) => `Austin's Private Chef Standard — Book Yours`,
    sub:      (city) => `A certified teppanyaki chef at your Austin pool deck, backyard, or outdoor patio. All ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `UT Austin graduation weekend fills 4–6 weeks ahead. Standard Austin events book 2–3 weeks out. Reserve now.`,
  },
  // 666 — Round Rock (profileIdx 19)
  {
    headline: (city) => `Round Rock Hibachi at Home — Book Your Date`,
    sub:      (city) => `A certified hibachi chef at your Round Rock home. Full setup, live teppanyaki, complete cleanup. From $60/adult.`,
    urgency:  `Round Rock ISD graduation and summer weekends book 2–4 weeks ahead. Secure your date now.`,
  },
  // 667 — Cedar Park (profileIdx 20)
  {
    headline: (city) => `Cedar Park Hibachi at Home — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Cedar Park home. Live teppanyaki, full setup, complete cleanup. From $60/adult.`,
    urgency:  `Leander ISD graduation and summer weekends book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 668 — Georgetown (profileIdx 21)
  {
    headline: (city) => `Georgetown Hibachi Catering — Lock In Your Date`,
    sub:      (city) => `Certified teppanyaki catering at your Georgetown home or outdoor venue. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Georgetown ISD graduation and Hill Country weekends book 2–4 weeks ahead. Reserve your date now.`,
  },
  // 669 — Lakeway (profileIdx 22)
  {
    headline: (city) => `Lakeway Mobile Hibachi — Book Your Lake Travis Event`,
    sub:      (city) => `A certified mobile hibachi chef to your Lakeway home or Lake Travis vacation property. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Lake Travis ISD graduation and summer lake weekends fill fast. Reserve your Lakeway date now.`,
  },
  // 670 — San Antonio (profileIdx 23)
  {
    headline: (city) => `San Antonio Hibachi at Home — Book Your Chef`,
    sub:      (city) => `A certified hibachi chef at your San Antonio home. Quinceañeras, graduation parties, military family milestones. Full setup & cleanup. From $60/adult.`,
    urgency:  `San Antonio graduation season and quinceañera weekends book 3–5 weeks ahead. Reserve your date now.`,
  },
  // 671 — Boerne (profileIdx 24)
  {
    headline: (city) => `Boerne Hill Country Mobile Hibachi — Reserve Your Chef`,
    sub:      (city) => `A certified mobile hibachi chef to your Boerne property or Hill Country ranch. Full self-contained setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Boerne Hill Country weekends and graduation Saturdays book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 672 — New Braunfels (profileIdx 25)
  {
    headline: (city) => `New Braunfels Mobile Hibachi — Book Your Event`,
    sub:      (city) => `A certified mobile hibachi chef to your New Braunfels property. Full self-contained setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `New Braunfels summer river weekends and graduation Saturdays fill fast. Reserve your date now.`,
  },
  // 673 — Schertz (profileIdx 26)
  {
    headline: (city) => `Schertz Hibachi at Home — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Schertz home. Graduation parties, military family milestones, backyard celebrations. Full setup & cleanup. From $60/adult.`,
    urgency:  `Schertz and Universal City graduation weekends book 2–4 weeks ahead. Secure your date now.`,
  },
  // 674 — Kyle (profileIdx 27)
  {
    headline: (city) => `Kyle Backyard Hibachi — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Kyle backyard. Live teppanyaki, full setup, complete cleanup. From $60/adult.`,
    urgency:  `Hays CISD graduation and summer weekends book 2–4 weeks out. Check your date now.`,
  },
  // 675 — Galveston (profileIdx 28)
  {
    headline: (city) => `Galveston Beach House Hibachi — Book Your Date`,
    sub:      (city) => `A certified mobile hibachi chef to your Galveston beach house or vacation rental. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Galveston summer weekends fill 3–5 weeks ahead. Confirm outdoor cooking is permitted. Reserve now.`,
  },
  // 676 — Corpus Christi (profileIdx 29)
  {
    headline: (city) => `Corpus Christi Hibachi Catering — Lock In Your Date`,
    sub:      (city) => `Certified teppanyaki catering at your Corpus Christi outdoor venue or beach property. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Corpus Christi summer and graduation weekends fill fast. Reserve your date now.`,
  },
  // 677 — Fredericksburg (profileIdx 30)
  {
    headline: (city) => `Fredericksburg Hill Country Hibachi — Book Your Weekend`,
    sub:      (city) => `A certified mobile hibachi chef to your Fredericksburg property or Hill Country ranch. Full self-contained setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Fredericksburg wine country weekends book 2–4 weeks ahead in peak season. Reserve your date now.`,
  },
  // 678 — Waco (profileIdx 31)
  {
    headline: (city) => `Waco Hibachi at Home — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef at your Waco home. Baylor graduation parties, family celebrations, backyard events. Full setup & cleanup. From $60/adult.`,
    urgency:  `Baylor graduation weekend and Waco summer events book 2–4 weeks ahead. Confirm your date now.`,
  },
]

// ─── Generic theme intros (TX generic 641–646) ────────────────────────────────
export const TX_INTRO_VARIANTS = [
  // 641 — T0 DFW Luxury
  {
    headline: (city) => `Hibachi at Home in ${city}: Estate Private Dining for the DFW Luxury Market`,
    opening:  (city, state) =>
      `The DFW luxury market has its own standard for a private gathering — and the backyard at a Highland Park, University Park, Westlake, or Southlake property is the finest private venue in Texas before any chef sets up. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with everything included: the full setup, all fresh ingredients, and a live-fire cooking performance that turns any gathering in this part of Dallas into the evening your guests are still talking about the following week.`,
    middle:   (city, state) =>
      `Your chef arrives with a propane teppan grill, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events of 25–60+. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} estate evenings book 4–5 weeks out during graduation season and peak spring. Starting at $60 per adult, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of the DFW luxury market.`,
  },
  // 642 — T1 DFW Metro & Corporate
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Corporate and Private Events for the DFW Metro`,
    opening:  (city, state) =>
      `DFW runs on relationship and occasion — the tech companies along Legacy Drive and the Telecom Corridor, the law firms incorporated in Dallas for generations, the financial services firms and Fortune 500 headquarters that anchor the North Dallas and Uptown corridors, and the families who celebrate every milestone with a gathering that expects something better than a restaurant reservation. Private hibachi in ${city} brings a certified teppanyaki chef to your outdoor space with the full setup and a live cooking performance that turns any gathering into the event people bring up at the next one.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For ${city} events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your venue stays spotless.`,
    closing:  (city, state) =>
      `${city} weekend events and corporate dinners book 2–3 weeks out. Graduation season (May–June) fills fastest — reserve 3–5 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of the DFW metro.`,
  },
  // 643 — T2 Houston Metro
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Events for the Greater Houston Area`,
    opening:  (city, state) =>
      `Houston is the most diverse city in America and one of the most celebratory — quinceañeras that run until midnight, graduation parties that gather three generations from across the Gulf Coast, energy industry corporate events that set the standard for professional entertaining, and family milestones that treat the backyard as the finest private venue in the state. Private hibachi in ${city} brings a certified teppanyaki chef to your outdoor space with everything included: the full setup, all fresh proteins, and a live-fire cooking performance that turns any Houston gathering into the event the neighborhood is still talking about.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your covered patio, deck, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish made to order in front of your guests. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} graduation season (May–June) and quinceañera season book 3–5 weeks out. Standard private events book 2–3 weeks out. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of Greater Houston.`,
  },
  // 644 — T3 Austin Metro
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Private Events for the Austin Metro`,
    opening:  (city, state) =>
      `Austin is the South's tech capital — a city of Apple engineers, Dell alumni, Oracle campus professionals, Tesla families, and a startup corridor that has made Austin and its suburbs among the fastest-growing communities in the country. The families here celebrate their milestones at home, in backyards and pool decks designed for the kind of gathering that matches the professional standard they hold at work — and the format that does that is one where a certified teppanyaki chef arrives at your ${city} property with a self-contained propane teppan grill, all fresh ingredients, and a live-fire performance genuinely worth describing to the colleagues who weren't there.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your covered patio, pool deck, or yard. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} graduation season (May–June) books 3–5 weeks out. UT Austin graduation weekend is the most competitive — reserve 4–6 weeks ahead. Standard private events book 2–3 weeks out. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of the Austin metro.`,
  },
  // 645 — T4 San Antonio & Hill Country
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for San Antonio and the Hill Country`,
    opening:  (city, state) =>
      `${city} is the heart of Texas's military culture, a city of JBSA families who have lived on bases across the world and celebrated their milestones with hospitality that matches. San Antonio healthcare professionals who set the standard at UT Health San Antonio. Hill Country ranch families whose properties already command the right format for a private dinner — all they needed was the chef. Private hibachi in ${city} brings a certified teppanyaki chef to your outdoor space with the full setup and a live cooking performance that makes any gathering worth attending — from the 20-person intimate quinceañera to the 60-person multi-generational family reunion.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For ${city} events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} private events book 2–3 weeks out; quinceañera season and graduation season fill 3–5 weeks ahead. Serving ${city} and all of the San Antonio metro — Boerne, New Braunfels, Schertz, Kyle, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 646 — T5 Gulf Coast & Destinations
  {
    headline: (city) => `Mobile Hibachi in ${city}: Beach House Events and Texas Destination Celebrations`,
    opening:  (city, state) =>
      `People come to ${city} for the Gulf, the warm water, and the sense that this particular week is going to be something different from the rest of the year. Mobile hibachi at your ${city} beach house or vacation rental makes the best dinner of the trip happen at the property — a certified teppanyaki chef drives to your rental with the full self-contained setup, performs on your deck or pool area in front of everyone, and leaves the property spotless. No impossible beach-town reservation. No group car coordination. No waiting for a table that was never big enough anyway.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The live cooking performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your rental property is immaculate when the chef leaves.`,
    closing:  (city, state) =>
      `Texas Gulf Coast events book 3–5 weeks ahead in peak summer season. Starting at $60 per adult, $600 event minimum. Most quotes returned same day. Confirm outdoor open-flame cooking is permitted at your rental — most Gulf Coast properties allow it.`,
  },
]

// ─── City-specific intros (TX city-specific 647–654, Batch 1) ────────────────
export const TX_CITY_INTROS = [
  // 647 — Highland Park (profileIdx 0)
  {
    headline: () => `Hibachi at Home in Highland Park`,
    opening:  () =>
      `Highland Park is the most prestigious residential address in Texas — a community of 9,000 people inside the Dallas city limits where the estate homes along Armstrong Parkway, the Tudor Revival properties on the Versailles corridor, and the backyards of Park Cities professionals have been the setting for the finest private entertaining in Dallas for decades. The family who hosts a 30-person graduation dinner in Highland Park expects the same standard of quality at home that they bring to every other aspect of how they live. Hibachi at home in Highland Park brings a certified teppanyaki chef to your estate property with the full setup, hand-selected premium proteins, and a live-fire performance that earns its place on a Park Cities back terrace.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, Chilean sea bass, wagyu — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, pool deck, or estate lawn. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Highland Park property is exactly as you left it.`,
    closing:  () =>
      `Highland Park estate evenings and graduation parties book 4–5 weeks ahead. The most competitive Saturday dates fill early — reserve as soon as your occasion is planned. Serving Highland Park and all of the Park Cities including University Park, Dallas, and surrounding DFW luxury communities. Starting at $60/adult, $600 minimum. Premium protein packages available for every Highland Park event. Most quotes returned same day.`,
  },
  // 648 — University Park (profileIdx 1)
  {
    headline: () => `Hibachi at Home in University Park`,
    opening:  () =>
      `University Park occupies the northwest quadrant of the Park Cities — 23,000 residents on a 3.7-square-mile footprint adjacent to SMU's campus, where the properties along Preston Road, the neighborhoods running off Mockingbird Lane, and the estate homes backing the Katy Trail carry the kind of residential expectation that makes any gathering a private event. Hibachi at home in University Park brings a certified teppanyaki chef to your property with the full setup, hand-selected premium ingredients, and a live-fire cooking performance that turns any Park Cities gathering into the evening your guests are still describing the following week.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, Chilean sea bass, wagyu — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, pool deck, or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your University Park property is exactly as you left it.`,
    closing:  () =>
      `University Park estate evenings and SMU graduation parties book 4–5 weeks ahead. Reserve as soon as your occasion is planned. Serving University Park and all of the Park Cities — Highland Park, Dallas, and surrounding DFW luxury communities. Starting at $60/adult, $600 minimum. Premium protein packages available. Most quotes returned same day.`,
  },
  // 649 — Southlake (profileIdx 2)
  {
    headline: () => `Private Hibachi Chef in Southlake`,
    opening:  () =>
      `Southlake is Tarrant County's flagship community — the home of Carroll ISD, the Dragon program that has turned out state championships and college athletes for decades, and a residential corridor of Vaquero-area estates, Timarron community properties, and the large-lot homes along Dove Road where the standard for a backyard event has always been set higher than any neighboring community. Southlake families celebrate their milestones at home, and the private hibachi chef format is the one that keeps forty guests at the same grill for two hours and sends them home with a story. Private hibachi in Southlake brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that earns its place at any Southlake home.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done. Your Southlake property is spotless when the chef leaves.`,
    closing:  () =>
      `Southlake CISD graduation season (May–June) books 4–5 weeks ahead — reserve as soon as your commencement date is confirmed. Serving Southlake and the full DFW area including Westlake, Colleyville, Grapevine, Keller, and Fort Worth. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 650 — Westlake (profileIdx 3)
  {
    headline: () => `Private Hibachi Chef in Westlake`,
    opening:  () =>
      `Westlake is Texas's most exclusive enclave — a town of fewer than 1,500 residents where the Deloitte campus, Fidelity Investments, and the gated Vaquero Club properties sit alongside estate homes on acreage lots that set a private entertaining standard above anything else in the DFW luxury market. The graduation party at a Westlake estate, the anniversary dinner on a terrace looking across the Hill Country-adjacent landscape, the corporate client event at a property that already outperforms any event venue in Dallas — these are occasions that require a chef who arrives prepared to match the setting. Private hibachi in Westlake brings a certified teppanyaki chef to your estate with everything included, at a level that earns its place at any Westlake property.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, Chilean sea bass, wagyu — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your covered terrace, pool deck, or estate lawn. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your Westlake property is exactly as it was when the chef arrived.`,
    closing:  () =>
      `Westlake estate events and Carroll ISD graduation parties book 4–6 weeks ahead. Reserve as soon as your occasion is confirmed — the most competitive dates fill early. Serving Westlake and all of the DFW luxury market including Southlake, Colleyville, Highland Park, University Park, and surrounding communities. Starting at $60/adult, $600 minimum. Premium proteins are the standard. Most quotes returned same day.`,
  },
  // 651 — Colleyville (profileIdx 4)
  {
    headline: () => `Hibachi at Home in Colleyville`,
    opening:  () =>
      `Colleyville occupies the corridor between DFW Airport and the Fort Worth city limits — a community of large-lot properties, Birdville ISD families, and the professionals who chose this address precisely because it offers the outdoor space and the privacy that Southlake and Highland Park charge a premium for. The Colleyville backyard is the format that serves 40 guests at the same grill for two hours, the birthday party the neighborhood heard about the following week, the anniversary dinner that made a partner in a downtown Dallas law firm wish he'd thought of it first. Hibachi at home in Colleyville brings a certified teppanyaki chef to your property with the full setup and a live cooking performance built for exactly the kind of crowd that shows up at a Colleyville outdoor event.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done. Your Colleyville backyard is spotless when the chef leaves.`,
    closing:  () =>
      `Colleyville graduation season and summer weekends book 2–4 weeks ahead. Birdville ISD commencement Saturdays fill fastest. Serving Colleyville and all of the DFW area — Southlake, Westlake, Grapevine, Keller, Fort Worth, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 652 — Dallas (profileIdx 5)
  {
    headline: () => `Private Hibachi Chef in Dallas`,
    opening:  () =>
      `Dallas runs on relationship — the tech and finance firms along Legacy Drive and the Telecom Corridor that have made this one of the fastest-growing corporate markets in the country, the law firms registered in Dallas because Texas wrote the rules, the healthcare systems and energy companies that anchor the professional economy, and the families who mark every occasion with a gathering that expects the best. Private hibachi in Dallas brings a certified teppanyaki chef to your outdoor space — corporate venue in Uptown, private home in Preston Hollow, backyard in Lakewood or Kessler Park, or patio in the M Streets — with the full setup and a live cooking performance that turns any Dallas gathering into the event people bring up at the next one.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Dallas corporate events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your Dallas venue or backyard stays spotless.`,
    closing:  () =>
      `Dallas corporate events and private gatherings book 2–4 weeks out. Graduation season (May–June) fills fastest — reserve 3–5 weeks ahead for Saturday events. Serving Dallas and all of the DFW metro — Highland Park, University Park, Plano, Frisco, McKinney, Allen, Irving, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 653 — Fort Worth (profileIdx 6)
  {
    headline: () => `Hibachi at Home in Fort Worth`,
    opening:  () =>
      `Fort Worth is where Texas hospitality is original — the Cultural District galleries, the Stockyards National Historic District, the Sundance Square entertainment corridor, and the residential neighborhoods of Westover Hills, Tanglewood, Rivercrest, and Monticello where the tradition of a big, welcoming gathering at home has been the social fabric for generations. The Fort Worth backyard graduation party for forty guests is not a constraint; it's the expectation. Hibachi at home in Fort Worth brings a certified teppanyaki chef to your property with the full setup and a live cooking performance built for exactly the kind of crowd that Texas hospitality produces — everyone at the same grill, nobody ready to leave.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Fort Worth gatherings, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Fort Worth graduation season and summer weekends book 2–4 weeks ahead. Keller, Carroll, and Fort Worth ISD commencement Saturdays fill fastest. Serving Fort Worth and all of the DFW metro including Southlake, Westlake, Colleyville, Dallas, and surrounding Tarrant County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 654 — Plano (profileIdx 7)
  {
    headline: () => `Hibachi Catering in Plano`,
    opening:  () =>
      `Plano is the corporate capital of North Texas — the city where Toyota North America moved its headquarters, where JPMorgan Chase, Capital One, and dozens of Fortune 500 companies planted their North Texas offices, and where the West Plano residential communities and Frisco-adjacent neighborhoods have built a culture of professional entertaining that expects more from a corporate event than a private dining room with the usual menu. Hibachi catering in Plano brings a certified teppanyaki chef to your property — Legacy Drive office outdoor venue, West Plano backyard, or Windhaven Meadows covered patio — with everything included and a live-fire cooking performance that generates the kind of engagement that no Plano restaurant private room has ever produced.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your covered patio, deck, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision cooking, and every dish made to order at the teppan in front of your guests. For Plano events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Plano graduation season (May–June) books 3–5 weeks out — Plano ISD and Frisco ISD commencement Saturdays are the most competitive. Reserve as soon as your date is confirmed. Serving Plano and all of greater DFW — Frisco, McKinney, Allen, Richardson, Dallas, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 655 — Frisco (profileIdx 8)
  {
    headline: () => `Hibachi at Home in Frisco`,
    opening:  () =>
      `Frisco is DFW's fastest-growing city — a community of 200,000 residents anchored by the Legacy business corridor, the Frisco ISD schools that have produced state championship programs year after year, and the residential neighborhoods of Stonebriar, Wade Park, and the communities running east from the Dallas North Tollway where the expectation for a private gathering matches the ambition that brought these households to Collin County. Hibachi at home in Frisco brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that turns any Frisco backyard party into the neighborhood event of the year.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Frisco events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your Frisco property is spotless when the chef leaves.`,
    closing:  () =>
      `Frisco ISD graduation season (May–June) books 2–4 weeks ahead — the most competitive Saturday dates fill early. Serving Frisco and all of greater DFW — Plano, McKinney, Allen, Dallas, and surrounding North Collin County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 656 — McKinney (profileIdx 9)
  {
    headline: () => `Hibachi at Home in McKinney`,
    opening:  () =>
      `McKinney is Collin County's historic capital — a city of 200,000 with one of the fastest-growing residential markets in North Texas, where the Adriatica Village neighborhood, the Craig Ranch community, and the historic downtown square attract families from across the Dallas-Fort Worth metro who came specifically for the space, the ISD school quality, and the community that McKinney's combination of established charm and new growth produces. Hibachi at home in McKinney brings a certified teppanyaki chef to your property with the full setup and a live cooking performance built for exactly the kind of large backyard gathering McKinney families host.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For McKinney gatherings over 25, dual stations handle groups of 25–60+. Full cleanup when dinner is done. Your McKinney backyard is spotless when the chef leaves.`,
    closing:  () =>
      `McKinney ISD graduation season (May–June) books 2–4 weeks ahead. Serving McKinney and all of greater DFW — Frisco, Allen, Plano, Dallas, and surrounding North Collin County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 657 — Allen (profileIdx 10)
  {
    headline: () => `Backyard Hibachi in Allen`,
    opening:  () =>
      `Allen is the quintessential North Collin County city — a community of 100,000 residents where Allen ISD's championship programs, the Watters Creek entertainment district, and the residential neighborhoods running east from US 75 have attracted the kind of professional families who take their backyard gatherings seriously. The Allen backyard graduation party for forty guests, the birthday dinner that the neighborhood shows up for, the anniversary celebration that earns a return invite — these are the occasions where a certified teppanyaki chef arriving with a self-contained teppan grill and two hours of live-fire cooking turns any Allen property into the private venue the occasion deserves. Backyard hibachi in Allen brings a certified chef to your outdoor space with everything included.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done. Your Allen backyard is spotless when the chef leaves.`,
    closing:  () =>
      `Allen ISD graduation season (May–June) books 2–3 weeks ahead. Serving Allen and all of North Collin County — McKinney, Frisco, Plano, Dallas, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 658 — Arlington (profileIdx 11)
  {
    headline: () => `Hibachi Catering in Arlington`,
    opening:  () =>
      `Arlington is the demographic and geographic center of the DFW metroplex — a city of 400,000 halfway between Dallas and Fort Worth, home to AT&T Stadium and Globe Life Field, the University of Texas at Arlington, and the residential neighborhoods of Pantego, Kennedale, and surrounding Tarrant County communities where the tradition of a large, welcoming gathering at home is the social fabric of the city. Hibachi catering in Arlington brings a certified teppanyaki chef to your property — corporate venue, backyard, covered patio — with the full setup and a live cooking performance that scales from a 20-person graduation dinner to a 60-person family reunion without missing a single plate.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For Arlington catering events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your Arlington venue stays spotless.`,
    closing:  () =>
      `Arlington corporate events and graduation season (May–June) book 2–4 weeks ahead. Mansfield ISD and Arlington ISD commencement Saturdays fill fastest. Serving Arlington and all of Tarrant County — Fort Worth, Dallas, Mansfield, Burleson, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 659 — Houston (profileIdx 12)
  {
    headline: () => `Private Hibachi Chef in Houston`,
    opening:  () =>
      `Houston is the most diverse city in America and the fourth-largest city in the country — an energy capital, a medical center, a port, a tech hub, and a cultural crossroads where the quinceañera season runs alongside the corporate calendar, where graduation parties gather three generations from across the Gulf Coast, and where the standard for a backyard event is set by the quality of the household hosting it. Private hibachi in Houston brings a certified teppanyaki chef to your outdoor space — Memorial home, Meyerland backyard, River Oaks estate, Katy suburb, or energy corridor corporate venue — with everything included and a live-fire cooking performance that turns any Houston gathering into the event people are still describing the following week.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Houston events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your Houston property is exactly as it was when the chef arrived.`,
    closing:  () =>
      `Houston graduation season (May–June) and quinceañera season book 3–5 weeks out. Standard private events book 2–3 weeks out. Serving Houston and all of Greater Houston — The Woodlands, Katy, Sugar Land, Pearland, Friendswood, League City, and all surrounding Harris, Fort Bend, and Brazoria County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 660 — The Woodlands (profileIdx 13)
  {
    headline: () => `Private Hibachi Chef in The Woodlands`,
    opening:  () =>
      `The Woodlands is the Houston area's finest master-planned community — a city of 120,000 residents where the Town Center's commercial corridor, the Waterway District's professional addresses, and the residential villages of Panther Creek, Indian Springs, and Alden Bridge carry a private entertaining expectation that matches the community's position as one of the most prestigious ZIP codes in the Houston metro. The graduation party at a Woodlands property, the anniversary dinner on a covered outdoor space looking across the community's meticulously maintained surroundings, the corporate client dinner at a property that already outperforms any private dining room in The Woodlands — these are occasions where a certified teppanyaki chef arrives fully prepared to match the setting.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For events over 25 guests, we bring dual stations. Full cleanup when dinner is done. Your Woodlands property is spotless when the chef leaves.`,
    closing:  () =>
      `The Woodlands graduation and corporate event weekends book 2–4 weeks ahead. Conroe ISD commencement Saturdays fill fastest. Serving The Woodlands and all of the Greater Houston area — Kingwood, Humble, Conroe, Spring, Tomball, Houston, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 661 — Katy (profileIdx 14)
  {
    headline: () => `Hibachi at Home in Katy`,
    opening:  () =>
      `Katy is one of the Houston metro's fastest-growing communities — a city of 25,000 in the incorporated limits but over 300,000 in the greater Katy area, home to the Katy ISD school system that produces some of the strongest academic and athletic programs in Texas, and the residential neighborhoods of Cinco Ranch, Cane Island, Seven Meadows, and the communities running west of Houston's Beltway 8 where the backyard culture and the celebration tradition are built into the neighborhood fabric. Hibachi at home in Katy brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that turns any Katy backyard into the event the neighborhood is still talking about.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Katy gatherings over 25, dual stations handle groups of 25–60+. Full cleanup when dinner is done. Your Katy backyard is spotless when the chef leaves.`,
    closing:  () =>
      `Katy ISD graduation season (May–June) books 2–4 weeks ahead. KISD commencement Saturdays and peak summer weekends fill fastest. Serving Katy and all of Greater Houston — Houston, Sugar Land, The Woodlands, Cypress, and surrounding Fort Bend and Harris County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 662 — Sugar Land (profileIdx 15)
  {
    headline: () => `Hibachi at Home in Sugar Land`,
    opening:  () =>
      `Sugar Land is one of the Houston area's most prestigious suburban addresses — a city of 115,000 in Fort Bend County where the First Colony and Riverstone master-planned communities, the Cinco Ranch-adjacent neighborhoods, and the Telfair and New Territory residential villages attract the kind of professional families — energy industry executives, medical center physicians, technology company professionals, and established Fort Bend County households — who bring the same quality standard to a backyard graduation party that they apply to everything else. Hibachi at home in Sugar Land brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any Fort Bend gathering into the dinner the neighborhood is still talking about.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Sugar Land events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your Sugar Land property is spotless when the chef leaves.`,
    closing:  () =>
      `Sugar Land graduation season (May–June) and summer weekends book 2–4 weeks ahead. Fort Bend ISD commencement Saturdays fill fastest. Serving Sugar Land and all of the Greater Houston area — Houston, Katy, Pearland, Friendswood, Missouri City, and surrounding Fort Bend County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 663 — Pearland (profileIdx 16)
  {
    headline: () => `Backyard Hibachi in Pearland`,
    opening:  () =>
      `Pearland is one of the fastest-growing suburbs in Greater Houston — a city of 130,000 in Brazoria County where the Shadow Creek Ranch, Silverlake, and Pearland Town Center communities have attracted the kind of families who celebrate their milestones at home, in the backyards and covered patios that the South Houston suburb lifestyle is designed around. The PISD graduation party for forty guests, the birthday that the whole cul-de-sac shows up to, the anniversary dinner that earns a return invite — these are the occasions where a certified teppanyaki chef arriving at your Pearland property with a self-contained teppan grill and two hours of live-fire cooking turns any backyard into the private dining venue the occasion deserves. Backyard hibachi in Pearland brings a certified chef to your outdoor space with everything included.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done. Your Pearland backyard is spotless when the chef leaves.`,
    closing:  () =>
      `Pearland ISD graduation season (May–June) books 2–4 weeks ahead. Serving Pearland and all of Greater Houston — Houston, Sugar Land, Friendswood, League City, and surrounding Brazoria and Harris County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 664 — Friendswood (profileIdx 17)
  {
    headline: () => `Mobile Hibachi in Friendswood`,
    opening:  () =>
      `Friendswood is one of the most sought-after addresses in the Clear Lake area — a city of 40,000 in Galveston County where the residential neighborhoods adjacent to the Johnson Space Center corridor, the Clear Creek ISD schools that consistently rank among the best in the Houston area, and the outdoor spaces of Friendswood homes produce exactly the kind of gathering for which mobile hibachi is the correct format. The chef drives to your property with the full self-contained setup, performs on your back patio or deck in front of your guests, and leaves the property exactly as they found it. No reservation. No shared dining room. No group parking. Mobile hibachi in Friendswood brings a certified teppanyaki chef directly to your home with everything included.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Friendswood events over 25, we bring dual chef stations. Full cleanup when dinner is done. Your Friendswood property is spotless when the chef leaves.`,
    closing:  () =>
      `Clear Creek ISD graduation season (May–June) books 2–4 weeks ahead. Serving Friendswood and all of the Clear Lake area — Houston, Pearland, League City, Pasadena, and surrounding Galveston and Harris County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 665 — Austin (profileIdx 18)
  {
    headline: () => `Private Hibachi Chef in Austin`,
    opening:  () =>
      `Austin is the South's tech capital — a city of 1.1 million where Apple's 10,000-person campus in North Austin, Dell's corporate headquarters in Round Rock, Tesla's Gigafactory in Travis County, Oracle's lakeside campus in West Austin, and the startup corridor running from the Domain to the East Seventh innovation district have made this city and its suburbs among the fastest-growing professional markets in America. The families and professionals who come to Austin for the opportunity bring with them a standard for private entertaining that matches everything else they do — and the format that delivers to that standard is a certified teppanyaki chef at your Austin home, pool deck, or outdoor patio with everything included and a live-fire cooking performance genuinely worth describing to the colleagues who weren't there.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your covered patio, pool deck, or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Austin events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your Austin property is exactly as it was when the chef arrived.`,
    closing:  () =>
      `Austin graduation season (May–June) books 3–5 weeks out. UT graduation weekend is the most competitive — reserve 4–6 weeks ahead for Saturday events. Standard private events book 2–3 weeks out. Serving Austin and all of the Austin metro — Round Rock, Cedar Park, Georgetown, Lakeway, Pflugerville, Kyle, and surrounding Travis and Williamson County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 666 — Round Rock (profileIdx 19)
  {
    headline: () => `Hibachi at Home in Round Rock`,
    opening:  () =>
      `Round Rock is the heart of the Dell Technologies corridor — a city of 130,000 in Williamson County where the Dell corporate campus, the retail and tech business parks running along IH-35, and the residential communities of Forest Creek, Paloma Lake, and Teravista have attracted the kind of tech-industry families who set a high standard for every part of how they live and celebrate. The Dell engineer's graduation party, the Round Rock ISD commencement celebration for forty guests, the corporate team dinner that's supposed to generate real conversation rather than restaurant background noise — these are the occasions where hibachi at home in Round Rock turns any covered patio or backyard into the private venue the occasion deserves.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Round Rock events over 25 guests, we bring dual stations. Full cleanup when dinner is done. Your Round Rock property is spotless when the chef leaves.`,
    closing:  () =>
      `Round Rock ISD graduation season (May–June) books 2–4 weeks ahead. Serving Round Rock and all of the Austin metro — Austin, Cedar Park, Georgetown, Pflugerville, Hutto, and surrounding Williamson County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 667 — Cedar Park (profileIdx 20)
  {
    headline: () => `Hibachi at Home in Cedar Park`,
    opening:  () =>
      `Cedar Park is one of Williamson County's fastest-growing cities — a community of 80,000 where the 183-A Toll Road corridor, the Leander ISD schools that have become one of the top-ranked districts in Central Texas, and the residential neighborhoods of Twin Creeks, Walsh Ranch, and Brushy Creek have attracted tech-industry families, medical professionals, and Austin-area households who chose Cedar Park specifically for the space, the community, and the lifestyle that the Austin suburb provides. Hibachi at home in Cedar Park brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that turns any Cedar Park backyard into the neighborhood event of the year.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Cedar Park gatherings over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your Cedar Park backyard is spotless when the chef leaves.`,
    closing:  () =>
      `Leander ISD graduation season (May–June) books 2–4 weeks ahead. Serving Cedar Park and all of the Austin-Round Rock metro — Austin, Round Rock, Leander, Georgetown, Lakeway, and surrounding Williamson County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 668 — Georgetown (profileIdx 21)
  {
    headline: () => `Hibachi Catering in Georgetown`,
    opening:  () =>
      `Georgetown is Williamson County's historic seat — a city of 85,000 and one of the fastest-growing communities in the United States, where the San Gabriel River district, the historic downtown square, the Sun City active adult community, and the Hill Country-adjacent residential corridors running north of IH-35 have brought an eclectic mix of Austin-area tech professionals, retired professionals from across the country, and multi-generational Texas families who celebrate their milestones with the scale and hospitality that Georgetown's wide lots and outdoor spaces naturally support. Hibachi catering in Georgetown brings a certified teppanyaki chef to your property — backyard, covered patio, outdoor venue — with the full setup and a live cooking performance that scales from an intimate family dinner to a 60-person graduation celebration.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For Georgetown catering events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your Georgetown venue stays spotless.`,
    closing:  () =>
      `Georgetown ISD graduation season (May–June) books 2–4 weeks ahead. Serving Georgetown and all of the Austin-Round Rock metro — Austin, Round Rock, Cedar Park, Leander, and surrounding Williamson County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 669 — Lakeway (profileIdx 22)
  {
    headline: () => `Mobile Hibachi in Lakeway`,
    opening:  () =>
      `Lakeway is one of the Austin area's most distinctive addresses — a lakeside community on the shores of Lake Travis where the Rough Hollow and Lakeway Marina neighborhoods, the Bee Cave and Lakeway retail corridors, and the residential properties perched above the Hill Country and the Colorado River arms combine to produce exactly the kind of outdoor living that makes private hibachi at home the obvious answer. The graduation party on the deck overlooking the lake, the birthday weekend for thirty guests at the vacation property, the anniversary dinner with the Hill Country sunset backdrop — these are Lakeway occasions where a mobile hibachi chef arriving with a self-contained propane grill and a full two-hour live performance turns the best view in Central Texas into the best dinner of the year. Mobile hibachi in Lakeway brings a certified teppanyaki chef directly to your lakeside home or vacation property.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Full cleanup when dinner is done. Your Lakeway property is exactly as it was when the chef arrived.`,
    closing:  () =>
      `Lake Travis ISD graduation season (May–June) books 3–5 weeks ahead. Summer lake weekends fill fast — reserve as soon as your date is confirmed. Serving Lakeway and all of the Austin Hill Country — Bee Cave, Austin, Cedar Park, Marble Falls, and surrounding Travis County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 670 — San Antonio (profileIdx 23)
  {
    headline: () => `Hibachi at Home in San Antonio`,
    opening:  () =>
      `San Antonio is the heart of Texas's military culture and its most visited city — a metropolis of 1.4 million where JBSA-Fort Sam Houston, Lackland, Randolph, and Camp Bullis have built a military family community that spans generations and celebrates every milestone from promotions to graduations with the kind of hospitality that San Antonio has always done best. It's a city of UT Health San Antonio physicians, Valero Energy executives, USAA corporate professionals, the families who have lived in Stone Oak, Alamo Heights, Shavano Park, and Helotes for generations, and the quinceañera and graduation cultures that bring the entire family together from across the state and across the border for a celebration that deserves the chef to match. Hibachi at home in San Antonio brings a certified teppanyaki chef to your outdoor space with the full setup and a live cooking performance built for exactly the scale and occasion that San Antonio families host.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For San Antonio events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your San Antonio property is exactly as it was when the chef arrived.`,
    closing:  () =>
      `San Antonio graduation season (May–June) and quinceañera season book 3–5 weeks ahead. NEISD, NISD, Northside, and South San ISD commencement weekends fill fastest. Serving San Antonio and all of the San Antonio metro — Boerne, New Braunfels, Schertz, Kyle, Universal City, Converse, and surrounding Bexar, Comal, and Guadalupe County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 671 — Boerne (profileIdx 24)
  {
    headline: () => `Mobile Hibachi in Boerne`,
    opening:  () =>
      `Boerne is the Texas Hill Country's most sophisticated small city — a community of 20,000 in Kendall County where the historic Main Street district, the Cibolo Creek corridor, and the Hill Country ranch properties running north of the city toward Comfort and Fredericksburg attract San Antonio professionals, retirees from across the country, and the Texas families who chose this address specifically for the outdoor space and the quality of life that no San Antonio suburb can replicate at this altitude and setting. The Hill Country anniversary dinner, the ranch property birthday celebration for forty guests, the multi-generational family reunion on a Kendall County property — these are the occasions where a mobile hibachi chef arriving with a self-contained propane grill and two hours of live-fire cooking turns any outdoor setting into the finest private dining experience in the Texas Hill Country. Mobile hibachi in Boerne brings a certified teppanyaki chef directly to your property.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Full cleanup when dinner is done. Your Boerne property is exactly as it was when the chef arrived.`,
    closing:  () =>
      `Boerne Hill Country weekends and Boerne ISD graduation season (May–June) book 2–4 weeks ahead. Serving Boerne and all of the San Antonio Hill Country area — San Antonio, Comfort, Kerrville, Helotes, and surrounding Kendall County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 672 — New Braunfels (profileIdx 25)
  {
    headline: () => `Mobile Hibachi in New Braunfels`,
    opening:  () =>
      `New Braunfels is the Texas Hill Country's fastest-growing city — a community of 100,000 in Comal County where the Comal River tubing culture, the Gruene Historic District, the Schlitterbahn waterpark corridor, and the residential communities running along IH-35 between San Antonio and Austin have made this city one of the most visited and most celebrated destinations in Central Texas. The river house party for thirty-five guests on a Comal River-adjacent property, the Hill Country weekend birthday for a crowd that has come from San Antonio, Austin, and Houston, the graduation celebration that needs a format that works at this scale and in this setting — these are the occasions where mobile hibachi in New Braunfels is the format that earns a place in the weekend itinerary and stays the story of the trip.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Full cleanup when dinner is done. Your New Braunfels property is spotless when the chef leaves.`,
    closing:  () =>
      `New Braunfels summer river weekends and Canyon High ISD graduation season (May–June) book 2–4 weeks ahead. Serving New Braunfels and the Central Texas Hill Country — San Antonio, Austin, Boerne, Schertz, and surrounding Comal County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 673 — Schertz (profileIdx 26)
  {
    headline: () => `Hibachi at Home in Schertz`,
    opening:  () =>
      `Schertz is one of the fastest-growing cities in the San Antonio metro — a community of 50,000 in Guadalupe County where the Schertz-Cibolo-Universal City ISD, the proximity to Randolph Air Force Base, and the residential communities of Schertz, Cibolo, and Universal City have built a culture of military families, young professional households, and established Bexar County families who celebrate their milestones at home in exactly the way the San Antonio tradition produces — big, welcoming, and in the backyard. Hibachi at home in Schertz brings a certified teppanyaki chef to your property with the full setup and a live cooking performance built for the kind of graduation party, birthday dinner, and family celebration that Schertz households host.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your Schertz property is spotless when the chef leaves.`,
    closing:  () =>
      `Schertz-Cibolo-Universal City ISD graduation season (May–June) books 2–4 weeks ahead. Serving Schertz and all of the San Antonio metro — San Antonio, New Braunfels, Boerne, Kyle, Universal City, Converse, and surrounding Guadalupe and Bexar County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 674 — Kyle (profileIdx 27)
  {
    headline: () => `Backyard Hibachi in Kyle`,
    opening:  () =>
      `Kyle is one of the fastest-growing cities in the United States — a community of 75,000 in Hays County just 20 miles south of Austin on IH-35, where the Plum Creek, Bradfield, and Six Creeks residential communities, the Hays Consolidated ISD schools, and the Austin-area overflow that has made Kyle and Buda two of the state's most dynamic suburban markets have attracted the kind of young professional families who bring the same quality standard to a backyard graduation party they apply to everything else they build here. Backyard hibachi in Kyle brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that turns any Kyle backyard into the neighborhood event worth talking about.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Kyle gatherings over 25, dual stations handle groups of 25–60+. Full cleanup when dinner is done. Your Kyle backyard is spotless when the chef leaves.`,
    closing:  () =>
      `Hays CISD graduation season (May–June) books 2–4 weeks ahead. Serving Kyle and all of the Austin-San Antonio corridor — Austin, San Antonio, Buda, San Marcos, New Braunfels, and surrounding Hays County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 675 — Galveston (profileIdx 28)
  {
    headline: () => `Mobile Hibachi in Galveston`,
    opening:  () =>
      `Galveston Island is Texas's most storied Gulf Coast destination — a barrier island city of 53,000 with the Strand Historic District, the Pleasure Pier, the East End Historic District's Victorian architecture, and the miles of Gulf-facing beach houses, vacation rentals, and private properties where Houston families, Texas Gulf Coast visitors, and destination celebrators have been coming for the kind of week that doesn't happen anywhere else in the state. The bachelorette weekend beach house dinner for sixteen guests that no Galveston restaurant could seat at the same table. The family reunion on the deck overlooking the Gulf where forty guests needed a format that kept everyone together and produced something genuinely memorable. Mobile hibachi in Galveston brings a certified teppanyaki chef to your beach house, vacation rental, or Gulf-facing property with the full self-contained setup and a live performance that makes the best dinner of any Galveston trip happen at the property.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Full cleanup when dinner is done. Your Galveston rental stays spotless. Confirm outdoor open-flame cooking is permitted at your property before booking.`,
    closing:  () =>
      `Galveston peak summer weekends (May–September) book 3–5 weeks ahead. Off-peak dates often available within 1–2 weeks. Serving Galveston Island and the Texas Gulf Coast — Houston, Texas City, Bolivar Peninsula, and surrounding Gulf Coast communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 676 — Corpus Christi (profileIdx 29)
  {
    headline: () => `Hibachi Catering in Corpus Christi`,
    opening:  () =>
      `Corpus Christi is the Texas Gulf Coast's largest city — a port, an energy hub, and a Gulf-facing metropolis of 320,000 in Nueces County where the North Beach waterfront, the Padre Island National Seashore, the Port of Corpus Christi's industrial and professional corridors, and the residential communities of Southside, Flour Bluff, and the Coastal Bend suburbs attract families and professionals who understand the Gulf Coast format for a celebration: outdoors, waterfront-adjacent when possible, and at a scale that no restaurant in Corpus Christi was built to accommodate. Hibachi catering in Corpus Christi brings a certified teppanyaki chef to your outdoor venue — Gulf-facing property, Padre Island vacation rental, covered patio, or corporate outdoor space — with everything included and a live-fire cooking performance that scales from an intimate family dinner to a 60-person corporate catering event.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For Corpus Christi catering events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your Corpus Christi venue stays spotless.`,
    closing:  () =>
      `Corpus Christi summer season and graduation weekends (May–June) fill fast — reserve 2–4 weeks ahead. Serving Corpus Christi and the Coastal Bend — Portland, Rockport, Kingsville, Padre Island, and surrounding Nueces County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 677 — Fredericksburg (profileIdx 30)
  {
    headline: () => `Hibachi Catering in Fredericksburg`,
    opening:  () =>
      `Fredericksburg is the Texas Hill Country's most celebrated destination — a city of 11,000 in Gillespie County where the Wine Road 290 corridor has established one of the country's most productive wine regions, where the Main Street shopping and dining district draws visitors from across Texas and the country every weekend, and where the vacation rental properties, boutique hotels, and ranch accommodations that have sprung up across Gillespie County attract the kind of group traveler who comes specifically to celebrate: the bachelorette weekend planning the best dinner of the trip, the multi-family reunion wanting something beyond the usual winery experience, the corporate group that chose Fredericksburg because the setting does the work. Hibachi catering in Fredericksburg brings a certified mobile teppanyaki chef to your vacation property, ranch, or outdoor venue with the full self-contained setup and a live performance that becomes the story of the weekend.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Full cleanup when dinner is done. Your Fredericksburg property is exactly as the chef found it.`,
    closing:  () =>
      `Fredericksburg peak season (March–November) books 2–4 weeks ahead. Holiday weekends and wine harvest season fill fastest. Serving Fredericksburg and the Texas Hill Country — Boerne, Kerrville, San Antonio, Austin, and surrounding Gillespie County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 678 — Waco (profileIdx 31)
  {
    headline: () => `Hibachi at Home in Waco`,
    opening:  () =>
      `Waco is Central Texas's rising city — a community of 140,000 in McLennan County where Baylor University has anchored one of the most rapidly evolving college cities in Texas, where Chip and Joanna Gaines's Magnolia empire has made the Silos District and the Bosque corridor nationally recognized destinations, and where the families, professionals, and multi-generational households of Central Texas have been celebrating their milestones in the backyard tradition that is as Texas as anything else this region produces. The Baylor graduation party for forty guests in a University Parks backyard, the birthday dinner in a Woodway or Hewitt neighborhood that the whole cul-de-sac heard about, the family reunion at a Lake Waco-adjacent property — these are occasions where hibachi at home in Waco turns any outdoor space into the private dining venue the occasion deserves.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Waco gatherings over 25, dual stations handle groups of 25–60+. Full cleanup when dinner is done. Your Waco property is spotless when the chef leaves.`,
    closing:  () =>
      `Baylor University graduation weekend and Waco summer events book 2–4 weeks ahead. BU commencement Saturdays fill fastest — reserve as soon as your date is confirmed. Serving Waco and all of Central Texas — Woodway, Hewitt, Temple, Killeen, Belton, and surrounding McLennan County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ─── Blog posts (3 slots keyed by variant % 3) ────────────────────────────────
// Slot 0: T0 DFW Luxury + T3 Austin
// Slot 1: T1 DFW Metro + T4 San Antonio
// Slot 2: T2 Houston + T5 Gulf Coast
const TX_BLOG_POSTS = [
  // Slot 0 — T0 DFW Luxury + T3 Austin (v%3=0)
  [],
  // Slot 1 — T1 DFW Metro + T4 San Antonio (v%3=1)
  [],
  // Slot 2 — T2 Houston + T5 Gulf Coast (v%3=2)
  [],
]

// ─── Major cities map (Batch 1: 8 cities) ─────────────────────────────────────
const TX_MAJOR_CITIES = {
  // Batch 1 (profileIdx 0–7)
  'highland-park':   { v: 0, profileIdx: 0, nearby: ['University Park', 'Dallas', 'Plano'] },
  'university-park': { v: 0, profileIdx: 1, nearby: ['Highland Park', 'Dallas', 'Plano'] },
  'southlake':       { v: 0, profileIdx: 2, nearby: ['Westlake', 'Colleyville', 'Fort Worth', 'Dallas'] },
  'westlake':        { v: 0, profileIdx: 3, nearby: ['Southlake', 'Colleyville', 'Fort Worth'] },
  'colleyville':     { v: 0, profileIdx: 4, nearby: ['Southlake', 'Westlake', 'Fort Worth', 'Dallas'] },
  'dallas':          { v: 1, profileIdx: 5, nearby: ['Highland Park', 'University Park', 'Plano', 'Fort Worth'] },
  'fort-worth':      { v: 1, profileIdx: 6, nearby: ['Dallas', 'Southlake', 'Westlake', 'Colleyville'] },
  'plano':           { v: 1, profileIdx: 7, nearby: ['Dallas', 'Highland Park', 'University Park'] },
  // Batch 2 (profileIdx 8–15)
  'frisco':          { v: 1, profileIdx: 8,  nearby: ['Dallas', 'Plano', 'McKinney', 'Allen'] },
  'mckinney':        { v: 1, profileIdx: 9,  nearby: ['Frisco', 'Allen', 'Dallas', 'Plano'] },
  'allen':           { v: 1, profileIdx: 10, nearby: ['McKinney', 'Frisco', 'Plano', 'Dallas'] },
  'arlington':       { v: 1, profileIdx: 11, nearby: ['Dallas', 'Fort Worth'] },
  'houston':         { v: 2, profileIdx: 12, nearby: ['The Woodlands', 'Katy', 'Sugar Land'] },
  'the-woodlands':   { v: 2, profileIdx: 13, nearby: ['Houston', 'Katy', 'Sugar Land'] },
  'katy':            { v: 2, profileIdx: 14, nearby: ['Houston', 'Sugar Land', 'The Woodlands'] },
  'sugar-land':      { v: 2, profileIdx: 15, nearby: ['Houston', 'Katy'] },
  // Batch 3 (profileIdx 16–23)
  'pearland':        { v: 2, profileIdx: 16, nearby: ['Houston', 'Sugar Land', 'Friendswood'] },
  'friendswood':     { v: 2, profileIdx: 17, nearby: ['Houston', 'Pearland', 'Sugar Land'] },
  'austin':          { v: 3, profileIdx: 18, nearby: ['Round Rock', 'Cedar Park', 'Georgetown'] },
  'round-rock':      { v: 3, profileIdx: 19, nearby: ['Austin', 'Cedar Park', 'Georgetown'] },
  'cedar-park':      { v: 3, profileIdx: 20, nearby: ['Austin', 'Round Rock', 'Lakeway'] },
  'georgetown':      { v: 3, profileIdx: 21, nearby: ['Austin', 'Round Rock', 'Cedar Park'] },
  'lakeway':         { v: 3, profileIdx: 22, nearby: ['Austin', 'Cedar Park', 'Round Rock'] },
  'san-antonio':     { v: 4, profileIdx: 23, nearby: ['Austin', 'Houston'] },
  // Batch 4 (profileIdx 24–31)
  'boerne':          { v: 4, profileIdx: 24, nearby: ['San Antonio', 'New Braunfels'] },
  'new-braunfels':   { v: 4, profileIdx: 25, nearby: ['San Antonio', 'Boerne', 'Kyle'] },
  'schertz':         { v: 4, profileIdx: 26, nearby: ['San Antonio', 'New Braunfels'] },
  'kyle':            { v: 4, profileIdx: 27, nearby: ['Austin', 'San Antonio', 'New Braunfels'] },
  'galveston':       { v: 5, profileIdx: 28, nearby: ['Houston'] },
  'corpus-christi':  { v: 5, profileIdx: 29, nearby: ['San Antonio', 'Houston'] },
  'fredericksburg':  { v: 5, profileIdx: 30, nearby: ['San Antonio', 'Austin'] },
  'waco':            { v: 5, profileIdx: 31, nearby: ['Austin', 'Dallas', 'Fort Worth'] },
}

// ─── Display name overrides (multi-word city slugs) ───────────────────────────
const TX_CITY_DISPLAY_NAMES = {
  'highland-park':   'Highland Park',
  'university-park': 'University Park',
  'fort-worth':      'Fort Worth',
  'the-woodlands':   'The Woodlands',
  'sugar-land':      'Sugar Land',
  'round-rock':      'Round Rock',
  'cedar-park':      'Cedar Park',
  'san-antonio':     'San Antonio',
  'new-braunfels':   'New Braunfels',
  'corpus-christi':  'Corpus Christi',
}

// ─── Main builder ─────────────────────────────────────────────────────────────
export function getTexasCityData(citySlug, cityName) {
  const entry       = TX_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry
  const customMeta  = TX_CUSTOM_META[citySlug] || null
  const displayName = TX_CITY_DISPLAY_NAMES[citySlug] ?? cityName
  return {
    cityName:     displayName,
    stateAbbr:    'TX',
    stateName:    'Texas',
    stateSlug:    'texas',
    variant:      v % 3,
    heroImage:    TX_THEME_HEROES[v],
    heroSubtitle: TX_HERO_SUBTITLES[v](displayName),
    heroH1Prefix: profileIdx != null ? TX_PROFILE_H1_PREFIXES[profileIdx] : TX_THEME_H1_PREFIXES[v],
    uniqueIntroVariant:   profileIdx != null ? 647 + profileIdx : 641 + v,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: profileIdx != null ? 647 + profileIdx : 641 + v,
    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),
    testimonials:      TX_TESTIMONIALS[citySlug] || [],
    nearbyCities:      nearby,
    nearbyMajorCities: ['Dallas', 'Fort Worth', 'Houston', 'Austin', 'San Antonio', 'Plano'],
  }
}

// ─── getTexasBlogPosts ────────────────────────────────────────────────────────
export function getTexasBlogPosts(variant, count) {
  return TX_BLOG_POSTS[variant % 3] || []
}

// ─── getTexasHowItWorks ───────────────────────────────────────────────────────
export function getTexasHowItWorks(citySlug) {
  return TX_HOW_IT_WORKS
}

// ─── getTexasSectionVariant ───────────────────────────────────────────────────
export function getTexasSectionVariant(citySlug) {
  const entry = TX_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return TX_SECTION_VARIANTS[entry.v]
}

// ─── getTexasCityImage ────────────────────────────────────────────────────────
export function getTexasCityImage(citySlug) {
  return TX_CITY_IMAGE_MAP[citySlug] || null
}

// ─── getTexasSupportImages ────────────────────────────────────────────────────
export function getTexasSupportImages(citySlug, variant) {
  return TX_SUPPORT_IMAGES[citySlug] || null
}

// =============================================================================
// LEGACY PLACEHOLDER EXPORTS
// These preserve the existing INTRO_VARIANTS / CLOSING_VARIANTS index positions
// for Florida, NC, NJ, NY, and all downstream states. Do NOT change the array
// lengths. New TX content is appended after Alabama via TX_INTRO_VARIANTS /
// TX_CITY_INTROS above.
// =============================================================================

const _EMPTY_INTRO = { headline: () => '', opening: () => '', middle: () => '', closing: () => '' }
const _EMPTY_CLOSE = { headline: () => '', sub: () => '', urgency: '', btnPrimary: '', btnSecondary: '' }

export const TEXAS_INTRO_VARIANTS    = Array(5).fill(_EMPTY_INTRO)
export const TEXAS_CITY_INTROS       = Array(8).fill(_EMPTY_INTRO)
export const TEXAS_CLOSING_VARIANTS  = Array(5).fill(_EMPTY_CLOSE)
export const TEXAS_CITY_CLOSINGS     = Array(8).fill(_EMPTY_CLOSE)
