// =============================================================================
// lib/oregonData.js — Oregon Expansion Phase 1 (Top 10 Markets)
// 10 cities · 6 geographic themes
// Theme 0: Portland Urban Core        (Portland)
// Theme 1: Portland Corporate / Tech  (Beaverton, Hillsboro)
// Theme 2: Portland Affluent Suburb   (Lake Oswego)
// Theme 3: Willamette Valley          (Salem, Eugene, McMinnville)
// Theme 4: Oregon Coast               (Cannon Beach, Lincoln City)
// Theme 5: Central Oregon Mountain    (Bend)
//
// INTRO_VARIANTS indices:   108–113 OR generic · 114–123 OR city-specific
// CLOSING_VARIANTS indices: 108–113 OR generic · 114–123 OR city-specific
// =============================================================================

// ── Variant hash (fallback for future expansion cities) ───────────────────────
export function getORVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 6
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const OR_HERO_SUBTITLES = [
  (city) => `Backyard Dinner Parties · Birthday Celebrations · Corporate Events · Serving ${city} & All of Portland Metro`,
  (city) => `Corporate Team Dinners · Client Entertainment · Graduation Parties · Serving ${city} & Washington County`,
  (city) => `Private Estate Dining · Graduation Parties · Anniversary Celebrations · Serving ${city} & the Portland West Side`,
  (city) => `Graduation Parties · Wine Country Gatherings · Family Celebrations · Serving ${city} & the Willamette Valley`,
  (city) => `Beach House Dinners · Bachelorette Weekends · Vacation Rental Groups · Serving ${city} & the Oregon Coast`,
  (city) => `Mountain Retreat Dining · Vacation Rental Events · Corporate Retreats · Serving ${city} & Central Oregon`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const OR_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Portland Urban Core
  (city) => [
    `Private backyard hibachi for Portland's most food-obsessed neighborhood events`,
    'Perfect for NE and SE Portland gatherings on cedar decks and craftsman patios',
    `Ideal for Portland tech company team dinners and corporate events`,
    `PSU, Reed, OHSU, and U of Portland graduation season — book 3–4 weeks ahead`,
    'Full setup and zero cleanup — the best alternative to Portland restaurant group dining',
    'Dual-station capacity for large Portland gatherings of 25–60+ guests',
  ],
  // Theme 1 — Portland Corporate / Tech
  (city) => [
    `Corporate team dinners and client events throughout ${city} and Washington County`,
    'Perfect for Nike, Intel, and Silicon Forest company team appreciation events',
    `Ideal for executive dinner parties at private homes throughout the tech corridor`,
    `Corporate and residential events in ${city} typically book 2–3 weeks ahead`,
    'Full setup and complete cleanup — nothing for the host to manage',
    'Dual-station capacity for groups of 25–60+ guests',
  ],
  // Theme 2 — Portland Affluent Suburb
  (city) => [
    `Private estate and lakefront dining for ${city}'s most discerning hosts`,
    'Perfect for graduation parties, milestone anniversaries, and intimate dinner parties',
    `Ideal for elegant backyard and terrace entertaining throughout the ${city} community`,
    `Graduation season (May–June) and summer evenings book 3–4 weeks ahead in ${city}`,
    'Premium proteins, flawless live performance, complete setup and cleanup',
    'Dual-station capacity for large ${city} gatherings of 25–60+ guests',
  ],
  // Theme 3 — Willamette Valley
  (city) => [
    `Backyard hibachi parties and wine country gatherings throughout ${city} and the Willamette Valley`,
    'Perfect for graduation parties, milestone birthdays, and family celebrations',
    `Ideal for wine country Airbnb dinners and vineyard estate events near ${city}`,
    `University graduation season in ${city} is our highest-demand window — book 4–5 weeks ahead`,
    'Full setup and zero cleanup — your outdoor space is immaculate when the chef leaves',
    'Dual-station capacity for large valley graduations and family reunions of 25–60+ guests',
  ],
  // Theme 4 — Oregon Coast
  (city) => [
    `Beach house hibachi at your ${city} vacation rental — no coastal restaurant reservation battles`,
    'Perfect for bachelorette weekends, birthday trips, and Oregon Coast group dinners',
    `Chef comes directly to your ${city} rental — full setup, full show, complete cleanup`,
    'Summer Oregon Coast season runs Memorial Day through Labor Day — reserve 6–8 weeks ahead',
    'Fire tricks, flying shrimp, and the full teppanyaki performance at your rental deck or patio',
    'Full pack-out when dinner is done — your vacation rental stays spotless',
  ],
  // Theme 5 — Central Oregon Mountain
  (city) => [
    `Private chef at your ${city} vacation rental, mountain cabin, or resort property`,
    'Perfect for Bend group weekends, corporate retreats, and Cascade-view anniversary dinners',
    `Chef travels to your ${city} property — full setup, 90–120 minute show, complete cleanup`,
    'Summer and ski-season events book 3–4 weeks ahead in Central Oregon',
    'Fire tricks, live cooking, premium proteins — all at your property without driving to town',
    'Dual-station capacity for large ${city} retreat groups of 25–60+ guests',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const OR_OCCASIONS = [
  // Theme 0 — Portland Urban
  ['Birthday Parties', 'Graduation Parties', 'Corporate Events', 'Bachelorette Parties', 'Anniversary Dinners', 'Neighborhood Gatherings', 'Holiday Dinners', 'Engagement Parties', 'Family Reunions', 'Retirement Celebrations'],
  // Theme 1 — Portland Corporate / Tech
  ['Corporate Team Dinners', 'Client Appreciation Events', 'Graduation Parties', 'Birthday Parties', 'Anniversary Dinners', 'Holiday Gatherings', 'Executive Dinner Parties', 'Networking Events', 'Retirement Parties', 'Bachelorette Parties'],
  // Theme 2 — Portland Affluent Suburb
  ['Birthday Parties', 'Graduation Parties', 'Anniversary Dinners', 'Corporate Events', 'Neighborhood Gatherings', 'Bachelorette Parties', 'Family Reunions', 'Holiday Dinners', 'Retirement Parties', 'Milestone Celebrations'],
  // Theme 3 — Willamette Valley
  ['Graduation Parties', 'Birthday Parties', 'Anniversary Dinners', 'Family Reunions', 'Wine Country Dinners', 'Bachelorette Weekends', 'Corporate Events', 'Holiday Dinners', 'Engagement Parties', 'Neighborhood Gatherings'],
  // Theme 4 — Oregon Coast
  ['Bachelorette Weekends', 'Birthday Trips', 'Anniversary Getaways', 'Summer House Parties', 'Family Reunions', 'Girls Weekends', 'Vacation Group Dinners', 'Bachelor Parties', 'Engagement Celebrations', 'Corporate Retreats'],
  // Theme 5 — Central Oregon Mountain
  ['Vacation Rental Events', 'Corporate Retreats', 'Birthday Weekends', 'Anniversary Dinners', 'Family Reunions', 'Bachelorette Trips', 'Graduation Getaways', 'Bachelor Parties', 'Ski Season Dinners', 'Summer Lodge Gatherings'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const OR_FAQ_SETS = [
  // Theme 0 — Portland Urban Core
  (city) => [
    {
      q: `Can hibachi be set up at a Portland backyard, rooftop, or courtyard?`,
      a: `Yes — Portland's cedar decks, craftsman backyards, and outdoor patios are our most common setup environment. We need a flat outdoor area of at least 10×10 ft with open overhead clearance. Most Portland NE and SE residential properties work perfectly. For rooftop setups in apartments or condos, confirm with your building management that open-flame cooking is permitted.`,
    },
    {
      q: `Do you serve all Portland neighborhoods — NE, SE, NW, and SW?`,
      a: `Yes — we serve all of Portland including Northeast (Alberta Arts District, Irvington, Beaumont), Southeast (Division, Hawthorne, Sellwood), Northwest (Nob Hill, Forest Park adjacent), Southwest (Hillsdale, Multnomah Village), and North Portland. We also serve the full metro area including Beaverton, Hillsboro, Lake Oswego, Gresham, Tigard, and surrounding communities.`,
    },
    {
      q: `Can you handle a corporate team dinner or client event in Portland?`,
      a: `Absolutely — Portland corporate team dinners, client appreciation events, and company celebrations are a major part of our business. We've run events for tech, healthcare, marketing, and professional services firms throughout the metro. Outdoor corporate spaces, private venues, and residential properties all work well. For groups over 25, we bring two chef stations.`,
    },
    {
      q: `How far in advance should I book a Portland summer event?`,
      a: `Summer weekends in Portland book 3–4 weeks ahead. Graduation season (May and June) fills fastest — book 4–5 weeks out for any Saturday event during graduation season. Spring and fall events typically have more flexibility, usually 2–3 weeks. Winter and weekday bookings can often be arranged with less than 2 weeks' notice.`,
    },
    {
      q: `Is hibachi good for a Portland birthday dinner or graduation party?`,
      a: `It's the best format for both. Portland guests are food-obsessed and interactive — they'll engage with the chef, cheer for the fire tricks, and ask questions throughout. For graduation parties of 20–50 guests, the live cooking show completely replaces the need to fight for a group reservation at any Portland restaurant. The chef performs, you host, and every guest gets exactly what they ordered.`,
    },
    {
      q: `Is there a travel fee for Portland events?`,
      a: `No extra travel fee for Portland proper and most of the metro area including Beaverton, Lake Oswego, Gresham, Tigard, and Tualatin. For locations significantly outside the Portland metro, a travel fee may apply and is always disclosed upfront before you confirm.`,
    },
  ],
  // Theme 1 — Portland Corporate / Tech
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} corporate outdoor space or private home?`,
      a: `Yes — corporate outdoor spaces, private backyards, and event venue patios throughout ${city} and all of Washington County are among our most common setups. We need a flat outdoor area of at least 10×10 ft with vehicle access nearby. Most ${city}-area corporate and residential outdoor spaces meet this requirement easily.`,
    },
    {
      q: `Do you serve ${city} and surrounding Washington County communities?`,
      a: `Yes — we serve all of Washington County including ${city}, Portland, Lake Oswego, Tigard, Tualatin, Wilsonville, and surrounding communities. Most locations in the ${city} area fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle a large corporate team event for a ${city}-area company?`,
      a: `Absolutely — corporate team dinners, client appreciation events, and company celebration setups are a specialty in the ${city} tech corridor. We've run events for large tech and manufacturing companies throughout Washington County. For groups over 25, we deploy two chef stations. Outdoor corporate spaces and private venues both work perfectly.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend events and corporate dinners in ${city} book 2–3 weeks out. Holiday party season (November–December) fills fastest — reserve 4–5 weeks ahead for any Friday or Saturday event. Weekday corporate events typically have more flexibility, often arrangeable within 1–2 weeks.`,
    },
    {
      q: `Can you set up at a ${city} townhouse, backyard, or patio?`,
      a: `Yes — residential properties, corporate outdoor spaces, and event venue patios throughout ${city} are all excellent hibachi setups. We need a flat outdoor area of at least 10×10 ft. We coordinate with property managers in advance when needed. We do not cook in enclosed indoor spaces without proper outdoor ventilation.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for ${city} and most of the Washington County area. For events significantly outside the Portland metro, a modest travel fee may apply — always disclosed upfront before you book.`,
    },
  ],
  // Theme 2 — Portland Affluent Suburb
  (city) => [
    {
      q: `Can hibachi be set up at my ${city} home, deck, or estate property?`,
      a: `Yes — residential backyards, lakefront properties, stone terraces, and elevated decks throughout ${city} are our most common setup environment. We need a flat outdoor area of at least 10×10 ft with adequate overhead clearance. Most ${city} properties have ideal outdoor spaces. We bring everything — the grill, all ingredients, plates, and chopsticks.`,
    },
    {
      q: `Do you serve ${city} and surrounding Portland west-side communities?`,
      a: `Yes — we serve ${city} and all Portland west-side communities including West Linn, Tualatin, Wilsonville, Oregon City, Lake Grove, and surrounding neighborhoods. Most locations in the ${city} area fall within our standard service radius with no extra travel fee.`,
    },
    {
      q: `How far in advance should I book for a ${city} graduation or milestone event?`,
      a: `${city} graduation season (May–June) is our highest-demand window in the Portland metro. We recommend booking 4–5 weeks in advance for any May or June Saturday event. Anniversary dinners, milestone birthdays, and summer weekend events book 3–4 weeks out. Off-season events typically have more flexibility.`,
    },
    {
      q: `Can you handle a large graduation or milestone party in ${city}?`,
      a: `Absolutely — milestone events of 25–60+ guests are among our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously to maintain quality and timing across the full group. Large graduation parties, anniversary dinners, and neighborhood celebrations are a specialty.`,
    },
    {
      q: `Do you offer premium protein options for ${city} estate events?`,
      a: `Yes — every event includes two protein selections per guest from our standard menu (chicken, steak, shrimp, salmon, scallops). Premium upgrades are available for any ${city} event: filet mignon (+$20/order), lobster tail (+$25/order), and additional protein selections (+$15/order). ${city} hosts frequently select premium upgrades for anniversary dinners and milestone celebrations.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. Setup and complete cleanup are fully included. Your ${city} property is spotless when the chef leaves.`,
    },
  ],
  // Theme 3 — Willamette Valley
  (city) => [
    {
      q: `Can hibachi be set up in a ${city} backyard or at a wine country property?`,
      a: `Yes — residential backyards, estate terraces, and vineyard rental properties throughout ${city} and the Willamette Valley are excellent hibachi setups. We need a flat outdoor area of at least 10×10 ft. Concrete patios, stone terraces, lawn areas with level ground, and deck surfaces all work perfectly.`,
    },
    {
      q: `Do you serve ${city} and surrounding Willamette Valley communities?`,
      a: `Yes — we serve all of the Willamette Valley including ${city}, Salem, Eugene, McMinnville, Newberg, Corvallis, Springfield, Silverton, and surrounding communities. Most Willamette Valley locations fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation party?`,
      a: `Graduation season in the Willamette Valley — particularly May through June — is our highest-demand window. We recommend booking 4–5 weeks ahead for any Saturday graduation event in ${city}. University of Oregon, Oregon State, Willamette University, and Linfield College graduation weekends fill fastest. Weekday graduation dinners typically have more flexibility.`,
    },
    {
      q: `Can you come to a vineyard property or Airbnb rental near ${city}?`,
      a: `Yes — wine country vacation rentals, vineyard estate properties, and Airbnb group stays near ${city} are some of our most popular Willamette Valley bookings. Confirm the rental property permits outdoor open-flame cooking (most do), describe your outdoor setup when you inquire, and we'll confirm the best configuration. Most valley properties accommodate us easily.`,
    },
    {
      q: `Can you handle a large family reunion or graduation group in ${city}?`,
      a: `Absolutely — family reunions and large graduation parties are our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. Groups of 40–60+ are a regular format across the Willamette Valley. We've hosted three-generation gatherings with grandparents front row and grandkids asking the chef questions at every event.`,
    },
    {
      q: `What do I need to provide for a ${city} backyard hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, fried rice, house-made sauces, plates, and chopsticks. Setup and complete cleanup are fully included.`,
    },
  ],
  // Theme 4 — Oregon Coast
  (city) => [
    {
      q: `Can you come to our ${city} vacation rental or beach house?`,
      a: `Absolutely — Oregon Coast vacation rentals are among our most popular booking locations. We come directly to your rental property. Just confirm the house allows outdoor open-flame cooking (most Oregon Coast rentals do), and we handle everything from setup to complete cleanup. Covered decks, open patios, and yard areas all work perfectly.`,
    },
    {
      q: `How far in advance should I book an Oregon Coast summer event?`,
      a: `Oregon Coast summer season — Memorial Day through Labor Day — books fast. We strongly recommend reserving 6–8 weeks ahead for peak July and August events in ${city}. The Fourth of July weekend and peak August beach dates fill earliest. Fall and spring coastal events typically have much more availability — 2–3 weeks' notice is usually sufficient.`,
    },
    {
      q: `Can you set up on the deck or covered porch of our ${city} rental?`,
      a: `Yes — outdoor decks, covered porches, and yard areas at Oregon Coast rentals are our ideal setup. We need a minimum 10×10 ft flat surface with overhead clearance. Oregon Coast weather occasionally means light mist or wind; covered decks and screened porches provide excellent shelter. For severe weather, we reschedule at no penalty.`,
    },
    {
      q: `Is hibachi good for an Oregon Coast bachelorette weekend?`,
      a: `It's the best option for a ${city} bachelorette weekend. The combination of live fire cooking, flying shrimp, and everyone gathered around the same grill creates exactly the energy a bachelorette group wants — and you don't spend an hour trying to get a table at a packed coastal restaurant. We've run dozens of Oregon Coast bachelorette events. The chef makes the evening.`,
    },
    {
      q: `What if the weather changes at our beach event?`,
      a: `We cook in light mist and mild wind — typical Oregon Coast conditions — under appropriate shelter. A covered deck or screened porch is ideal. For severe weather, lightning, or extreme conditions, we reschedule at no penalty. Oregon Coast weather is something we plan for every booking. Always mention your backup shelter situation when you inquire.`,
    },
    {
      q: `Do you serve smaller coastal communities near ${city}?`,
      a: `Yes — we serve the full northern Oregon Coast including Cannon Beach, Seaside, Astoria, Lincoln City, and Newport, as well as surrounding communities. Travel fees may apply for locations significantly outside our standard service zones and are always disclosed before you book.`,
    },
  ],
  // Theme 5 — Central Oregon Mountain
  (city) => [
    {
      q: `Can you come to a ${city} vacation rental, cabin, or resort property?`,
      a: `Yes — vacation rentals, mountain cabins, and resort properties in ${city} and throughout Central Oregon are among our most popular Pacific Northwest bookings. We travel to your property with the full setup. Confirm the rental allows outdoor open-flame cooking (most do) and describe your outdoor space — deck, patio, or lawn area — and we'll advise on the best configuration.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Summer season (June through September) and ski season weekends in ${city} book 3–4 weeks ahead. Peak summer Saturdays in Bend fill 4–6 weeks out during July and August. Corporate retreats and large group events should reserve even earlier. Off-season weekday events typically have more flexibility with 2 weeks' notice.`,
    },
    {
      q: `Can you set up on a cedar deck at a ${city} mountain cabin or vacation home?`,
      a: `Yes — cedar decks, stone patios, and gravel outdoor areas at Central Oregon properties are excellent hibachi setups. We need a flat surface of at least 10×10 ft with overhead clearance (open sky or a high structure — not a low awning). Most ${city} vacation rentals have exactly the right outdoor space. We handle all setup and leave every surface spotless.`,
    },
    {
      q: `Is hibachi good for a ${city} corporate retreat?`,
      a: `It's one of the best formats for a corporate retreat. The group is already at the property, the outdoor space already exists, and the chef provides the anchor experience of the trip without anyone coordinating restaurant logistics. We've run corporate retreat events for Portland tech companies at ${city} vacation properties — the interactive format breaks down barriers in a way no conference room dinner can match.`,
    },
    {
      q: `Do you serve Sunriver, Sisters, and Redmond in addition to ${city}?`,
      a: `Yes — we serve all of Central Oregon including Bend, Redmond, Sisters, Sunriver, La Pine, and surrounding communities east of the Cascades. Travel fees may apply for more remote Central Oregon locations and are always disclosed before booking.`,
    },
    {
      q: `What do I need to provide at a ${city} vacation property event?`,
      a: `Tables and chairs for your guests. We bring everything else: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20–30 minutes on your deck or outdoor area. The performance runs 90–120 minutes. Complete cleanup when dinner is done — your ${city} property is spotless when the chef leaves.`,
    },
  ],
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const OR_TESTIMONIALS = [
  // Theme 0 — Portland Urban Core
  [
    {
      text: '"Birthday dinner in our NE Portland backyard — 18 guests on the cedar deck, chef arrived exactly on time and turned our standard summer gathering into two hours of live entertainment. Portland has excellent restaurants. None of them can do what this chef did in our own backyard."',
      name: 'Rachel M.',
      city: 'Portland, OR',
      event: 'Birthday Dinner',
      initials: 'RM',
    },
    {
      text: '"Company team dinner — 24 people, outdoor venue, chef was a complete professional. Our team had just wrapped a six-month project and we wanted something different than the usual restaurant. This was different. The chef had everyone at the same table, engaged, laughing, eating well. Best team event we\'ve done."',
      name: 'Jason T.',
      city: 'Portland, OR',
      event: 'Corporate Team Dinner',
      initials: 'JT',
    },
    {
      text: '"SE Portland graduation party — 34 guests, backyard under the string lights, dual station setup. Chef ran both stations flawlessly and had three generations gathered around the grill for two hours. We\'d been to every restaurant in the neighborhood for previous milestones. This was the first one nobody wanted to leave early."',
      name: 'The Nguyen Family',
      city: 'Portland, OR',
      event: 'Graduation Party',
      initials: 'NF',
    },
  ],
  // Theme 1 — Portland Corporate / Tech
  [
    {
      text: '"Team appreciation dinner for 30 employees — outdoor setup at a private venue in Beaverton, chef was exceptional from first setup to final plate. Our team works incredibly hard and this was exactly the kind of event that shows it. Three people asked for the contact information before the night was over."',
      name: 'Christine L.',
      city: 'Beaverton, OR',
      event: 'Corporate Team Dinner',
      initials: 'CL',
    },
    {
      text: '"Client dinner for our Hillsboro engineering team — 22 guests, private backyard venue, chef handled the entire evening from flame to cleanup. Our clients came from out of state and said it was the most memorable business dinner they\'d attended in years. That\'s exactly what we needed."',
      name: 'David K.',
      city: 'Hillsboro, OR',
      event: 'Client Appreciation Dinner',
      initials: 'DK',
    },
    {
      text: '"Graduation party for our son in Beaverton — 40 guests, backyard, dual stations, chef had every family member and classmate gathered around the grill for two solid hours. Washington County graduation season is competitive and we booked early. Absolutely the right call. His class is still talking about it."',
      name: 'Sandra & Tom R.',
      city: 'Beaverton, OR',
      event: 'Graduation Party',
      initials: 'SR',
    },
  ],
  // Theme 2 — Portland Affluent Suburb
  [
    {
      text: '"Anniversary dinner on our Lake Oswego terrace — 16 guests, lakeside setting, chef was exceptional. The food, the fire tricks, the personal attention to every guest — it was exactly the occasion the evening needed. Three of our guests booked their own events before the chef had finished cleanup."',
      name: 'Margaret & Robert H.',
      city: 'Lake Oswego, OR',
      event: 'Anniversary Dinner',
      initials: 'MH',
    },
    {
      text: '"Graduation party in Lake Oswego — 42 guests, backyard estate setup, dual chef stations. Flawless from start to finish. Our daughter\'s graduating class plus family from Seattle and San Francisco — all gathered around the same grill for two hours. Best event we\'ve ever hosted at this property."',
      name: 'William & Susan P.',
      city: 'Lake Oswego, OR',
      event: 'Graduation Party',
      initials: 'WP',
    },
    {
      text: '"Milestone birthday dinner at our West Linn home — 28 guests on the back terrace, chef was professional, warm, and completely commanding. Premium filet mignon and lobster tail upgrades for every guest. The evening cost less than the same group at a Portland restaurant and was twice the experience."',
      name: 'Kathleen B.',
      city: 'Lake Oswego, OR',
      event: 'Milestone Birthday Dinner',
      initials: 'KB',
    },
  ],
  // Theme 3 — Willamette Valley
  [
    {
      text: '"Graduation party in Salem — 44 guests, large backyard, two chef stations. Family came from Bend, Portland, and Eugene. Chef ran both stations and had every generation gathered around the grill the entire evening. Grandparents front row, grandkids asking questions, college friends cheering every trick. Best celebration we\'ve hosted."',
      name: 'The Gallagher Family',
      city: 'Salem, OR',
      event: 'Graduation Party',
      initials: 'GF',
    },
    {
      text: '"University of Oregon graduation dinner — 38 guests in our Eugene backyard, one chef station plus premium protein upgrades. Chef arrived early, set up faster than expected, and ran a two-hour show that had every UO grad and family member at the table the entire time. Zero restaurant logistics. Every dish exactly right."',
      name: 'Paul & Linda C.',
      city: 'Eugene, OR',
      event: 'UO Graduation Party',
      initials: 'PC',
    },
    {
      text: '"Anniversary dinner at our McMinnville rental — 18 guests, wine country estate, chef was outstanding. The Willamette Valley backdrop, the teppan performance, the premium proteins — it was precisely the evening we wanted and nothing we could have replicated at any McMinnville restaurant. Booked again for next summer."',
      name: 'Elena & James W.',
      city: 'McMinnville, OR',
      event: 'Anniversary Dinner',
      initials: 'EW',
    },
  ],
  // Theme 4 — Oregon Coast
  [
    {
      text: '"Cannon Beach bachelorette weekend — 12 of us, rental house with the Haystack Rock view, hibachi Friday night. Chef arrived exactly on time, set up on the deck, and ran the most entertaining two hours of the whole trip. We\'d eaten at every good restaurant in Cannon Beach over the years. This was in a different category entirely."',
      name: 'Ashley K.',
      city: 'Cannon Beach, OR',
      event: 'Bachelorette Weekend',
      initials: 'AK',
    },
    {
      text: '"Lincoln City family reunion — 22 cousins and parents in a group house, hibachi on Saturday night. Chef showed up, took over the backyard, and had three generations around the grill for two straight hours. Grandparents had never seen a hibachi performance. Kids are still asking when we\'re doing it again."',
      name: 'The Morrison Family',
      city: 'Lincoln City, OR',
      event: 'Family Reunion',
      initials: 'MF',
    },
    {
      text: '"Birthday weekend at our Cannon Beach rental — eight of us, deck setup, chef was absolutely phenomenal. Oregon Coast birthday trips are competitive to plan and we wanted one anchor event that guaranteed a great night regardless of weather. Hibachi on the covered deck delivered exactly that. Will do this every year."',
      name: 'Nicole S.',
      city: 'Cannon Beach, OR',
      event: 'Birthday Weekend',
      initials: 'NS',
    },
  ],
  // Theme 5 — Central Oregon Mountain
  [
    {
      text: '"Corporate retreat in Bend — 24 team members, vacation rental with Cascade views, chef set up on the deck while everyone was still out on bikes. The performance completely reset the energy of the evening. After two days of workshops, having a live chef performance at the house was exactly the right call. Best retreat dinner we\'ve done."',
      name: 'Claire M.',
      city: 'Bend, OR',
      event: 'Corporate Retreat Dinner',
      initials: 'CM',
    },
    {
      text: '"Family reunion at our Sunriver house — 30 people, outdoor setup, dual station. Chef had cousins from Portland, Seattle, and San Francisco all gathered around the same grill for two solid hours. The whole vacation was great, but hibachi night was the one everyone will reference at the next reunion."',
      name: 'The Crawford Family',
      city: 'Bend, OR',
      event: 'Family Reunion',
      initials: 'CF',
    },
    {
      text: '"Anniversary dinner at our Bend rental — 16 guests, cedar deck, mountains in the background, chef was exceptional. Premium proteins, fire tricks, two hours of entertainment, flawless cleanup. The entire Central Oregon setting elevated an already special occasion. We\'ve booked again for this summer."',
      name: 'Thomas & Elena B.',
      city: 'Bend, OR',
      event: 'Anniversary Dinner',
      initials: 'TB',
    },
  ],
]

// ── Image themes (hero image per theme) ──────────────────────────────────────
const OR_IMAGE_THEMES = [
  { heroImage: '/pics/hero-3.jpg' },               // Theme 0 — Portland Urban
  { heroImage: '/pics/hibachi-catering-3.jpg' },   // Theme 1 — Corporate / Tech
  { heroImage: '/pics/private-hibachi.jpg' },      // Theme 2 — Affluent Suburb
  { heroImage: '/pics/hibachi-colorado.jpg' },     // Theme 3 — Willamette Valley
  { heroImage: '/pics/hibachi-virginia-beach.jpg' }, // Theme 4 — Oregon Coast
  { heroImage: '/pics/hibachi-colorado-home.jpg' }, // Theme 5 — Central Oregon Mountain
]

// ── How It Works ──────────────────────────────────────────────────────────────
const OR_HOW_IT_WORKS = [
  // Theme 0 — Portland Urban Core
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Book Your Portland Date',      desc: 'Request your event online or by phone — tell us your guest count and outdoor space. NE deck, SE backyard, or courtyard patio. Fast confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Your certified teppanyaki chef arrives with the full teppan grill, propane, all fresh proteins, sauces, plates, and chopsticks. No prep needed on your end.' },
      { num: '03', title: 'The Portland Performance',     desc: 'Guests gather around the grill for 90–120 minutes of live hibachi — fire tricks, flying shrimp, and every plate cooked to order at the teppan.' },
      { num: '04', title: 'Zero Cleanup for You',         desc: 'Chef packs everything out completely. Your deck or backyard is exactly as you left it. You hosted the best dinner of the season without touching a dish.' },
    ],
  },
  // Theme 1 — Portland Corporate / Tech
  {
    headline:   (city) => `How Corporate Hibachi Works in ${city}`,
    footerNote: (city) => `${city} corporate events book 2–3 weeks out. Call or text (201) 565-3878 to confirm your date.`,
    steps: [
      { num: '01', title: 'Request Your Event',            desc: 'Tell us your date, guest count, and outdoor space — corporate venue, private home, or backyard. We confirm quickly.' },
      { num: '02', title: 'Chef Arrives with Everything',  desc: 'Your certified teppanyaki chef arrives with full setup: teppan grill, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Hibachi for Your Team',    desc: 'Guests gather around the grill for 90–120 minutes of live teppanyaki — fire tricks, group interaction, and every dish cooked to order.' },
      { num: '04', title: 'Full Cleanup Included',         desc: 'Chef handles all cleanup and packs out completely. Your venue stays spotless. Your team keeps the memory.' },
    ],
  },
  // Theme 2 — Portland Affluent Suburb
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Home`,
    footerNote: (city) => `${city} events book 3–4 weeks ahead in season. Call or text (201) 565-3878 to confirm your date.`,
    steps: [
      { num: '01', title: 'Reserve Your Date',             desc: 'Book online or by phone — tell us your guest count and property setup. Quick confirmation.' },
      { num: '02', title: 'Chef Arrives Fully Equipped',   desc: 'Certified chef arrives with the full teppan grill, propane, premium proteins, house-made sauces, plates, and chopsticks. Nothing for you to prepare.' },
      { num: '03', title: 'Live Teppanyaki at Your Home',  desc: 'Guests gather on your terrace, deck, or patio for 90–120 minutes of live hibachi — fire tricks, premium proteins cooked to order, the complete show.' },
      { num: '04', title: 'Zero Cleanup, Perfect Evening', desc: 'Chef packs everything out completely. Your ${city} property is immaculate when they leave. You hosted the most memorable event of the year.' },
    ],
  },
  // Theme 3 — Willamette Valley
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} graduation season books fast. Call or text (201) 565-3878 to secure your date.`,
    steps: [
      { num: '01', title: 'Book Your ${city} Event',       desc: 'Request your date online or by phone. Tell us your guest count and backyard setup. We confirm quickly.' },
      { num: '02', title: 'Chef Arrives with Full Setup',  desc: 'Your certified hibachi chef arrives with everything: grill, propane, all proteins, vegetables, sauces, plates, and chopsticks. No prep needed.' },
      { num: '03', title: 'Valley Hibachi Performance',    desc: 'Guests gather around the grill for 90–120 minutes of live teppanyaki — fire tricks, freshly cooked proteins, fried rice, and the full show.' },
      { num: '04', title: 'Chef Handles All Cleanup',      desc: 'Complete teardown and cleanup done by your chef. Your backyard or property stays spotless. You keep the celebration.' },
    ],
  },
  // Theme 4 — Oregon Coast
  {
    headline:   (city) => `How Mobile Hibachi Works at Your ${city} Rental`,
    footerNote: (city) => `Oregon Coast summer dates fill fast. Call or text (201) 565-3878 to confirm your ${city} booking.`,
    steps: [
      { num: '01', title: 'Book From Your Rental',         desc: 'Reserve your date online or by phone — tell us your beach house address, guest count, and deck or yard setup. Fast confirmation.' },
      { num: '02', title: 'Chef Comes to Your Property',   desc: 'Certified hibachi chef travels to your ${city} rental with everything: teppan grill, propane, all ingredients, plates, sauces, and utensils.' },
      { num: '03', title: 'Oregon Coast Dinner Show',      desc: 'Guests gather on your deck, patio, or yard for 90–120 minutes of live hibachi — fire tricks, grilled-to-order proteins, the full teppanyaki performance.' },
      { num: '04', title: 'Pack-Out and Done',             desc: 'Chef handles complete cleanup and takes everything with them. Your rental stays spotless and you had the best dinner of the coast weekend.' },
    ],
  },
  // Theme 5 — Central Oregon Mountain
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Property`,
    footerNote: (city) => `${city} events book 3–4 weeks ahead in summer. Call or text (201) 565-3878 to confirm your date.`,
    steps: [
      { num: '01', title: 'Book Your ${city} Date',        desc: 'Reserve online or by phone — tell us your guest count and vacation rental setup. We confirm fast and coordinate travel to your property.' },
      { num: '02', title: 'Chef Travels to You',           desc: 'Your certified teppanyaki chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Mountain Retreat Dinner Show',  desc: 'Guests gather on your deck or outdoor space for 90–120 minutes of live hibachi cooking — fire tricks, custom proteins, fried rice, grilled vegetables.' },
      { num: '04', title: 'Full Cleanup, Nothing Left',    desc: 'Chef handles all teardown and cleanup. Your ${city} vacation property is spotless when they leave. You keep the experience.' },
    ],
  },
]

// ── Section variants ──────────────────────────────────────────────────────────
const OR_SECTION_VARIANTS = [
  // Theme 0 — Portland Urban Core
  {
    heroPill:           'Portland\'s Private Chef',
    experiencePill:     'Better Than Any Portland Restaurant',
    experiencePoints:   [
      'No reservation battles — your Portland backyard or deck is the venue',
      'Certified teppanyaki chef performs exclusively for your group',
      'All of Portland and the metro area fully served',
      'Premium proteins, full live show, complete setup and cleanup',
    ],
    experienceImage:    '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a Portland backyard event`,
    areasPill:          'Serving Portland & the Metro Area',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Oregon Communities`,
    areasIntro: [
      (city, state) => `We serve all of Portland and the full metro area — Beaverton, Hillsboro, Lake Oswego, Tigard, Gresham, Tualatin, Wilsonville, Oregon City, West Linn, Happy Valley, and every neighborhood from Alberta Arts to Sellwood.`,
      (city) => `Most Portland bookings are confirmed within hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Check Your Portland Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Reason to Celebrate in ${city}`,
    occasionSubtext:       'From backyard birthday dinners to corporate team events, private hibachi is Portland\'s most memorable outdoor dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your Portland Hibachi Questions — Answered`,
    testimonialSubheading: 'What Portland Hosts Are Saying',
  },
  // Theme 1 — Portland Corporate / Tech
  {
    heroPill:           'Washington County\'s Private Chef',
    experiencePill:     'Better Than Any Restaurant',
    experiencePoints:   [
      'No reservation required — your outdoor space is the venue',
      'Corporate and residential setups throughout Washington County',
      'Certified teppanyaki performance exclusively for your group',
      'Full setup and complete cleanup fully included',
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} corporate or backyard event`,
    areasPill:          'Serving Washington County & Portland Metro',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Oregon Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Washington County — Beaverton, Hillsboro, Tigard, Tualatin, Sherwood, Cornelius, Forest Grove, Portland, and surrounding metro communities.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From corporate team dinners to graduation parties, private hibachi is the Washington County backyard upgrade your event deserves',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi — Common Questions`,
    testimonialSubheading: 'What Washington County & Portland Metro Hosts Are Saying',
  },
  // Theme 2 — Portland Affluent Suburb
  {
    heroPill:           'Private Estate Dining',
    experiencePill:     'The Outdoor Dinner Your Property Deserves',
    experiencePoints:   [
      'No reservation battles — your terrace or garden is the venue',
      'Every guest at the same table, same chef, same moment',
      'Certified teppanyaki performance for 90–120 minutes',
      'Premium protein upgrades available for any occasion',
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a ${city} estate or lakefront property`,
    areasPill:          'Serving Lake Oswego & the Portland West Side',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Surrounding Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Portland's west side — West Linn, Tualatin, Wilsonville, Oregon City, Happy Valley, Sherwood, Portland, Beaverton, and Tigard.`,
      (city) => `${city} bookings confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Estate Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Occasion — Book It`,
    occasionSubtext:       'From graduation parties to estate anniversary dinners, private hibachi is the west Portland suburb dining experience your property was made for',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Lake Oswego & West Portland Suburb Hosts Are Saying',
  },
  // Theme 3 — Willamette Valley
  {
    heroPill:           'Willamette Valley Private Chef',
    experiencePill:     'The Valley Dinner Done Right',
    experiencePoints:   [
      'Private chef comes to your backyard, estate, or wine country property',
      'All guests at the same outdoor table for the full live show',
      'Graduation parties, anniversary dinners, and vineyard gatherings a specialty',
      'Full setup and cleanup included — nothing for the host to manage',
    ],
    experienceImage:    '/pics/hibachi-colorado.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} outdoor property in the Willamette Valley`,
    areasPill:          'Serving the Willamette Valley & Beyond',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of the Willamette Valley`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the Willamette Valley — Salem, Eugene, McMinnville, Newberg, Corvallis, Springfield, Silverton, Albany, and every community from the Coast Range to the Cascades.`,
      (city) => `${city} graduation season books fast. Call or text (201) 565-3878 to confirm your date now.`,
    ],
    areasButton:           'Book Your Valley Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone in ${city} Remembers`,
    occasionSubtext:       'Graduation parties, multigenerational family dinners, and wine country gatherings — the Willamette Valley celebrates big, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Willamette Valley Hosts Are Saying',
  },
  // Theme 4 — Oregon Coast
  {
    heroPill:           'Oregon Coast Private Chef',
    experiencePill:     'Your Beach House Upgrade',
    experiencePoints:   [
      'Chef comes directly to your rental — no coastal restaurant reservation battles',
      'All guests at the same outdoor table for the full teppanyaki show',
      'Fire tricks, live cooking, 90–120 minute performance',
      'Full setup and pack-out — rental property stays spotless',
    ],
    experienceImage:    '/pics/hibachi-virginia-beach.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} Oregon Coast vacation rental`,
    areasPill:          'Serving the Oregon Coast',
    areasHeadline:      (city) => `Mobile Hibachi at Your ${city} Rental`,
    areasIntro: [
      (city, state) => `We serve the full Oregon Coast — Astoria, Seaside, Cannon Beach, Lincoln City, Newport, Florence, Gold Beach, Brookings, and every vacation rental community along Highway 101.`,
      (city) => `Oregon Coast summer dates fill weeks in advance. Call or text (201) 565-3878 to confirm your ${city} date now.`,
    ],
    areasButton:           'Check Coast Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       'Bachelorette weekends, birthday house rentals, family reunions, and Oregon Coast group dinners — mobile hibachi is the vacation rental dinner that makes the whole trip worth it',
    faqPill:               'Oregon Coast Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Beach Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Oregon Coast Vacation Guests Are Saying',
  },
  // Theme 5 — Central Oregon Mountain
  {
    heroPill:           'Central Oregon\'s Private Chef',
    experiencePill:     'The Mountain Retreat Dinner',
    experiencePoints:   [
      'Private chef travels to your Bend cabin, resort house, or vacation rental',
      'Premium proteins, live fire performance, complete service',
      'Intimate groups of 8–20 or larger retreat gatherings up to 60',
      'Flawless setup and cleanup — nothing left for you to manage',
    ],
    experienceImage:    '/pics/hibachi-colorado-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} vacation rental or mountain retreat`,
    areasPill:          'Serving Bend & All of Central Oregon',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of Central Oregon`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Central Oregon — Redmond, Sisters, Sunriver, La Pine, and the High Desert communities east of the Cascades. Hood River and the Columbia Gorge are also in our service area.`,
      (city) => `${city} summer events book 3–4 weeks ahead. Call or text (201) 565-3878 to confirm your date.`,
    ],
    areasButton:           'Reserve Your Bend Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Dinner Your Retreat Has Been Waiting For`,
    occasionSubtext:       'Corporate retreats, vacation rental anchor events, family reunions, and anniversary dinners — private hibachi is the Central Oregon experience that makes your trip unforgettable',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi — Common Questions`,
    testimonialSubheading: 'What Central Oregon Hosts Are Saying',
  },
]

// ── City experience image map ──────────────────────────────────────────────────
const OR_CITY_IMAGE_MAP = {
  'portland':       { src: '/pics/hibachi-catering-3.jpg',   alt: () => `Private hibachi chef performing at a Portland OR backyard event` },
  'beaverton':      { src: '/pics/hibachi-catering.jpg',     alt: () => `Corporate hibachi event in Beaverton OR` },
  'hillsboro':      { src: '/pics/hibachi-event.jpg',        alt: () => `Private hibachi chef at a Hillsboro OR corporate event` },
  'lake-oswego':    { src: '/pics/hibachi-chef-home.jpg',    alt: () => `Private hibachi chef at a Lake Oswego OR estate event` },
  'salem':          { src: '/pics/hibachi-catering-2.jpg',   alt: () => `Graduation hibachi party in Salem OR` },
  'eugene':         { src: '/pics/hibachi-shot-1.jpg',       alt: () => `Private hibachi chef at a Eugene OR graduation party` },
  'mcminnville':    { src: '/pics/hibachi-colorado-home.jpg',alt: () => `Private hibachi at a McMinnville OR wine country property` },
  'cannon-beach':   { src: '/pics/hibachi-virginia-beach.jpg',alt: () => `Mobile hibachi chef at a Cannon Beach OR vacation rental` },
  'lincoln-city':   { src: '/pics/mobile-hibachi-2.jpg',     alt: () => `Mobile hibachi chef at a Lincoln City OR beach house` },
  'bend':           { src: '/pics/hibachi-colorado.jpg',     alt: () => `Private hibachi chef at a Bend OR vacation property` },
}

// ── Support images for profile cities ────────────────────────────────────────
const OR_SUPPORT_IMAGES = {
  'portland': {
    testimonial: { src: '/pics/hibachi-catering-3.jpg', alt: () => `Portland backyard hibachi event`, caption: 'Portland dining, elevated', intro: () => `Portland hosts have high standards. Here's what they find:` },
    cta:         { src: '/pics/hero-3.jpg',             alt: () => `Private hibachi chef in Portland OR`,                                  caption: 'Your Portland event starts here' },
  },
  'beaverton': {
    testimonial: { src: '/pics/hibachi-catering.jpg',   alt: () => `Corporate hibachi event in Beaverton OR`,  caption: 'Beaverton corporate events', intro: () => `Washington County professionals keep booking us. Here's why:` },
    cta:         { src: '/pics/hibachi-event.jpg',      alt: () => `Private hibachi chef in Beaverton OR`,                                 caption: 'The Beaverton event standard' },
  },
  'hillsboro': {
    testimonial: { src: '/pics/hibachi-event.jpg',      alt: () => `Corporate hibachi dinner in Hillsboro OR`, caption: 'Hillsboro corporate dining', intro: () => `Hillsboro tech corridor teams keep coming back. Here's what they say:` },
    cta:         { src: '/pics/hibachi-catering.jpg',   alt: () => `Private hibachi chef in Hillsboro OR`,                                 caption: 'Hillsboro corporate dining standard' },
  },
  'lake-oswego': {
    testimonial: { src: '/pics/hibachi-chef-home.jpg',  alt: () => `Private hibachi dinner in Lake Oswego OR`, caption: 'Lake Oswego private dining', intro: () => `Lake Oswego hosts expect the exceptional. Here's what they find:` },
    cta:         { src: '/pics/private-hibachi.jpg',    alt: () => `Private hibachi chef at a Lake Oswego OR estate`,                      caption: 'The Lake Oswego private dining standard' },
  },
  'salem': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg', alt: () => `Graduation hibachi party in Salem OR`,     caption: 'Salem graduation season',    intro: () => `Salem families celebrate big. Here's what they say:` },
    cta:         { src: '/pics/backyard-hibachi-3.jpg', alt: () => `Backyard hibachi chef in Salem OR`,                                    caption: 'Your Salem backyard event' },
  },
  'eugene': {
    testimonial: { src: '/pics/hibachi-shot-1.jpg',     alt: () => `Graduation hibachi party in Eugene OR`,    caption: 'Eugene graduation celebrations', intro: () => `Eugene hosts and Duck families say it best:` },
    cta:         { src: '/pics/hibachi-catering-2.jpg', alt: () => `Private hibachi chef in Eugene OR`,                                    caption: 'Eugene graduation season standard' },
  },
  'mcminnville': {
    testimonial: { src: '/pics/hibachi-colorado-home.jpg', alt: () => `Wine country hibachi event in McMinnville OR`, caption: 'McMinnville wine country events', intro: () => `McMinnville wine country hosts keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-colorado.jpg',   alt: () => `Private hibachi chef in McMinnville OR wine country`,                  caption: 'Your McMinnville wine country dinner' },
  },
  'cannon-beach': {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg', alt: () => `Bachelorette hibachi weekend in Cannon Beach OR`, caption: 'Cannon Beach vacation rental hibachi', intro: () => `Cannon Beach guests come back every summer. Here's why:` },
    cta:         { src: '/pics/mobile-hibachi-2.jpg',   alt: () => `Mobile hibachi chef in Cannon Beach OR`,                               caption: 'The Cannon Beach dinner of the summer' },
  },
  'lincoln-city': {
    testimonial: { src: '/pics/mobile-hibachi-2.jpg',   alt: () => `Family reunion hibachi in Lincoln City OR`, caption: 'Lincoln City group rental hibachi', intro: () => `Lincoln City vacation groups keep booking us. Here's why:` },
    cta:         { src: '/pics/hibachi-virginia-beach.jpg', alt: () => `Mobile hibachi chef in Lincoln City OR`,                           caption: 'Your Lincoln City vacation dinner' },
  },
  'bend': {
    testimonial: { src: '/pics/hibachi-colorado.jpg',   alt: () => `Corporate retreat hibachi in Bend OR`,     caption: 'Bend retreat and vacation events', intro: () => `Bend hosts and retreat planners say it best:` },
    cta:         { src: '/pics/hibachi-colorado-home.jpg', alt: () => `Private hibachi chef in Bend OR`,                                   caption: 'The Bend retreat dinner' },
  },
}

// ── Support fallback images (per theme, for future expansion cities) ──────────
const OR_SUPPORT_FALLBACKS = [
  { // Theme 0 — Portland Urban
    testimonial: { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Portland metro hibachi event in ${city}, OR`,      caption: 'Portland metro hosts agree',          intro: (city) => `${city} hosts keep booking us. Here's what they say:` },
    cta:         { src: '/pics/hero-3.jpg',             alt: (city) => `Private hibachi chef in ${city}, OR`,              caption: 'Your Portland metro event' },
  },
  { // Theme 1 — Corporate / Tech
    testimonial: { src: '/pics/hibachi-catering.jpg',   alt: (city) => `Corporate hibachi event in ${city}, OR`,           caption: 'Washington County hosts agree',        intro: (city) => `${city} hosts say it best:` },
    cta:         { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef in ${city}, OR`,              caption: 'Your Washington County event' },
  },
  { // Theme 2 — Affluent Suburb
    testimonial: { src: '/pics/private-hibachi.jpg',    alt: (city) => `Private hibachi event in ${city}, OR`,             caption: 'Portland west side hosts agree',       intro: (city) => `${city} hosts have high standards. Here's what they find:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',  alt: (city) => `Private hibachi chef in ${city}, OR`,              caption: 'Your private dining event' },
  },
  { // Theme 3 — Willamette Valley
    testimonial: { src: '/pics/hibachi-colorado.jpg',   alt: (city) => `Willamette Valley hibachi event in ${city}, OR`,   caption: 'Willamette Valley hosts agree',        intro: (city) => `${city} hosts say it best:` },
    cta:         { src: '/pics/hibachi-catering-2.jpg', alt: (city) => `Private hibachi chef in ${city}, OR`,              caption: 'Your Willamette Valley celebration' },
  },
  { // Theme 4 — Oregon Coast
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Oregon Coast hibachi in ${city}, OR`,          caption: 'Oregon Coast vacation guests agree',   intro: (city) => `${city} vacation guests keep coming back. Here's why:` },
    cta:         { src: '/pics/mobile-hibachi-2.jpg',   alt: (city) => `Mobile hibachi chef in ${city}, OR`,               caption: 'The Oregon Coast beach house dinner' },
  },
  { // Theme 5 — Central Oregon Mountain
    testimonial: { src: '/pics/hibachi-colorado-home.jpg', alt: (city) => `Central Oregon retreat hibachi in ${city}, OR`, caption: 'Central Oregon retreat hosts agree',   intro: (city) => `${city} retreat and vacation hosts say it best:` },
    cta:         { src: '/pics/hibachi-colorado.jpg',   alt: (city) => `Private hibachi chef in ${city}, OR`,              caption: 'The Central Oregon retreat dinner' },
  },
]

// ── Closing variants (OR generic 108–113) ─────────────────────────────────────
export const OR_CLOSING_VARIANTS = [
  // 108 — Portland Urban Core
  {
    headline: (city) => `Your ${city} Event Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Portland summer weekends book 3–4 weeks out. Check your date now.`,
  },
  // 109 — Portland Corporate / Tech
  {
    headline: (city) => `${city}'s Corporate Dining Standard — Book It`,
    sub:      (city) => `A certified teppanyaki chef for your ${city} team dinner or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Washington County corporate and weekend events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 110 — Portland Affluent Suburb
  {
    headline: (city) => `${city}'s Most Memorable Dinner — Book Yours`,
    sub:      (city) => `A certified hibachi chef at your ${city} property. Premium ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Portland west side graduation and summer weekends fill 3–4 weeks out. Reserve your date now.`,
  },
  // 111 — Willamette Valley
  {
    headline: (city) => `${city}'s Best Outdoor Celebration — Book It`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `Graduation season in the Willamette Valley books fast — confirm your date now.`,
  },
  // 112 — Oregon Coast
  {
    headline: (city) => `The Beach House Dinner Your ${city} Weekend Needs`,
    sub:      (city) => `A mobile hibachi chef comes to your ${city} rental — grill, ingredients, full show, and complete cleanup. From $60 per adult.`,
    urgency:  `Oregon Coast summer season books 6–8 weeks ahead. Confirm your date before it fills.`,
  },
  // 113 — Central Oregon Mountain
  {
    headline: (city) => `The ${city} Retreat Dinner Everyone Remembers`,
    sub:      (city) => `A certified hibachi chef at your ${city} vacation property. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Bend summer season books 3–4 weeks ahead. Reserve your retreat date now.`,
  },
]

// ── City-specific closings (OR city-specific 114–123) ─────────────────────────
export const OR_CITY_CLOSINGS = [
  // 114 — Portland (profileIdx 0)
  {
    headline: () => `Portland's Best Outdoor Dinner — Book It`,
    sub:      () => `A certified teppanyaki chef for your Portland backyard, deck, or outdoor venue. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Portland summer weekends book 3–4 weeks out. Graduation season fills fastest — reserve now.`,
  },
  // 115 — Beaverton (profileIdx 1)
  {
    headline: () => `Beaverton Corporate Dining — Reserve Your Date`,
    sub:      () => `A certified hibachi chef for your Beaverton team dinner or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Beaverton and Washington County events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 116 — Hillsboro (profileIdx 2)
  {
    headline: () => `The Hillsboro Corporate Dinner Your Team Deserves — Book It`,
    sub:      () => `A certified teppanyaki chef for your Hillsboro corporate event or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Hillsboro corporate and weekend events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 117 — Lake Oswego (profileIdx 3)
  {
    headline: () => `Lake Oswego's Private Dining Standard — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Lake Oswego property. Hand-selected proteins, live performance, complete cleanup. From $60/adult. Premium upgrades available.`,
    urgency:  `Lake Oswego events book 3–4 weeks ahead in season. Reserve your date now.`,
  },
  // 118 — Salem (profileIdx 4)
  {
    headline: () => `Salem Graduation Season — Don't Wait`,
    sub:      () => `A certified hibachi chef comes to your Salem home or outdoor venue. All ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Salem graduation season (May–June) fills fast. Check your date now.`,
  },
  // 119 — Eugene (profileIdx 5)
  {
    headline: () => `Eugene Graduation Season — Reserve Your Date`,
    sub:      () => `When every restaurant near campus is fully booked, we come to you. A certified hibachi chef at your Eugene home or backyard. From $60/adult.`,
    urgency:  `Eugene graduation weekends book 4–5 weeks out. Reserve your Duck season date now.`,
  },
  // 120 — McMinnville (profileIdx 6)
  {
    headline: () => `The McMinnville Wine Country Dinner Your Event Deserves`,
    sub:      () => `A certified hibachi chef at your McMinnville home or wine country property. Full setup, fresh proteins, complete cleanup. From $60/adult.`,
    urgency:  `McMinnville graduation season and wine country summer events book 3–4 weeks ahead. Reserve now.`,
  },
  // 121 — Cannon Beach (profileIdx 7)
  {
    headline: () => `The Cannon Beach Dinner Everyone Talks About — Book It`,
    sub:      () => `A certified mobile hibachi chef at your Cannon Beach rental — grill, ingredients, full show, complete cleanup. From $60/adult.`,
    urgency:  `Cannon Beach summer dates fill 6–8 weeks out. Reserve yours before the season fills.`,
  },
  // 122 — Lincoln City (profileIdx 8)
  {
    headline: () => `Your Lincoln City Weekend Just Found Its Best Night`,
    sub:      () => `A certified mobile hibachi chef at your Lincoln City rental. Full setup, full show, complete cleanup. From $60/adult.`,
    urgency:  `Lincoln City summer weekends fill 5–7 weeks out. Check availability now.`,
  },
  // 123 — Bend (profileIdx 9)
  {
    headline: () => `The Bend Retreat Dinner Everyone Remembers — Book It`,
    sub:      () => `A certified private hibachi chef at your Bend vacation rental or mountain cabin. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Bend summer events book 3–4 weeks ahead. Reserve your Central Oregon date now.`,
  },
]

// ── Intro variants (OR generic 108–113) ───────────────────────────────────────
export const OR_INTRO_VARIANTS = [
  // 108 — Portland Urban Core (generic)
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for Portland Metro's Most Food-Obsessed City`,
    opening:  (city, state) =>
      `The Portland metro runs on good food and the outdoors — and private hibachi at home in ${city} is the format that makes both of those things happen simultaneously. A certified teppanyaki chef arrives at your outdoor space with everything: the full setup, all fresh ingredients, and a live-fire cooking performance that turns any backyard gathering in this corner of the Pacific Northwest into the evening your guests are still talking about the following weekend.`,
    middle:   (city, state) =>
      `Your chef arrives with a propane teppan grill, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events up to 60+. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} weekend events book 3–4 weeks out during peak season. Starting at $60 per adult, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of the Portland metro area.`,
  },
  // 109 — Portland Corporate / Tech (generic)
  {
    headline: (city) => `Hibachi Catering in ${city}: The Pacific Northwest Corporate Dinner Done Right`,
    opening:  (city, state) =>
      `${city} runs on talent — the engineers, the designers, the account managers who show up every day and make the machines run. Private hibachi catering in ${city} brings a certified teppanyaki chef to your outdoor corporate space or private venue with everything included: full grill setup, hand-selected proteins, and a live cooking performance that turns any team dinner in Washington County into the event people bring up at the next one.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For corporate ${city} events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your venue stays spotless.`,
    closing:  (city, state) =>
      `${city} corporate events and private gatherings book 2–3 weeks out. Serving ${city} and all of Washington County — Beaverton, Hillsboro, Tigard, Tualatin, Portland, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 110 — Portland Affluent Suburb (generic)
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for Portland's West Side`,
    opening:  (city, state) =>
      `${city} sets the standard for private entertaining in the Portland metro. The outdoor spaces here were designed for exactly this kind of evening — the graduated terrace, the garden below, the neighborhood that has always known how to host. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup, hand-selected proteins, and a live cooking performance that is genuinely worth describing at the next gathering. The chef comes to you.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including premium upgrades like filet mignon and lobster tail, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} backyard evenings book 3–4 weeks ahead. Graduation season (May–June) fills fastest. Serving ${city} and all of Portland's west side including Lake Oswego, West Linn, Tualatin, and Wilsonville. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 111 — Willamette Valley (generic)
  {
    headline: (city) => `Hibachi at Home in ${city}: Outdoor Dining in Oregon's Most Beautiful Valley`,
    opening:  (city, state) =>
      `The Willamette Valley takes its time. The season is long, the outdoor spaces are generous, and the culture of gathering — around a table, around a fire, under the same summer sky — is built into how people live here. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that makes the best night of any ${city} celebration happen in your own backyard, not at a restaurant that can't fit your whole group at the same table.`,
    middle:   (city, state) =>
      `From the first onion volcano to the final plate of fried rice, your chef works the crowd for 90–120 minutes straight. Every protein cooked to order at the grill: chicken, steak, shrimp, salmon, and premium upgrades like filet mignon or lobster tail for the occasions that call for it. Dual-station capacity for large graduation parties and family reunions of 25–60+ guests.`,
    closing:  (city, state) =>
      `${city} weekend evenings book 3–4 weeks ahead. Graduation season (May–June) is the most competitive booking window across the valley — reserve 4–5 weeks out for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of the Willamette Valley.`,
  },
  // 112 — Oregon Coast (generic)
  {
    headline: (city) => `Mobile Hibachi in ${city}: The Oregon Coast Dinner Your Rental Weekend Deserves`,
    opening:  (city, state) =>
      `The Oregon Coast is not tropical. It is dramatic — the kind of dramatic that makes a beach house dinner with a live fire performance on the covered deck feel exactly right. Mobile hibachi at your ${city} rental brings a certified teppanyaki chef to your property with the full grill, all ingredients, a live-fire performance for your guests, and complete cleanup when dinner is done. No coastal restaurant reservation required. No group car logistics. The chef comes to the house.`,
    middle:   (city, state) =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The show runs from first flame to last plate — no coast highway logistics, no waiting for a table that was never big enough anyway. Every guest at the same outdoor table watching the same performance.`,
    closing:  (city, state) =>
      `Oregon Coast events book 6–8 weeks in advance for peak summer season dates. Starting at $60 per adult, $600 event minimum. Confirm outdoor open-flame cooking is permitted at your rental before booking — most Oregon Coast properties allow it.`,
  },
  // 113 — Central Oregon Mountain (generic)
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Mountain Retreat Dining in Central Oregon`,
    opening:  (city, state) =>
      `Central Oregon's outdoor lifestyle runs all year, but the groups that come to ${city} for a long weekend — the corporate retreat, the annual family reunion, the bachelorette trip that's been planned since January — want the dinner to match the setting. Private hibachi at your ${city} vacation rental or mountain cabin brings a certified teppanyaki chef to your property with the full setup and a live-fire performance that becomes the anchor of the trip. The chef comes to your cabin. The Cascades stay in the background.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck or outdoor area. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your ${city} property is spotless when the chef leaves.`,
    closing:  (city, state) =>
      `Central Oregon events book 3–4 weeks ahead in summer season. Starting at $60 per adult, $600 event minimum. Most quotes returned same day. Travel fees may apply for remote Central Oregon locations — always disclosed upfront.`,
  },
]

// ── City-specific intros (OR city-specific 114–123) ───────────────────────────
export const OR_CITY_INTROS = [
  // 114 — Portland (profileIdx 0)
  {
    headline: () => `Hibachi at Home in Portland`,
    opening:  () =>
      `Portland takes food seriously. The dining culture here — Division Street, Mississippi Avenue, the Pearl District, the SE neighborhoods that have more excellent restaurants per block than almost any city in the country — has created a guest base that knows what good food tastes like and appreciates when it's elevated. Private hibachi at home in Portland brings a certified teppanyaki chef to your NE backyard, your SE deck, your courtyard or outdoor patio, with the full setup and a live-fire cooking performance that earns its place in a city this food-obsessed.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For Portland events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your deck or backyard is spotless when the chef leaves.`,
    closing:  () =>
      `Portland summer weekends book 3–4 weeks ahead. Graduation season — PSU, Reed, OHSU, University of Portland — fills fastest in May and June. Serving all Portland neighborhoods and the full metro area including Beaverton, Lake Oswego, and Gresham. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 115 — Beaverton (profileIdx 1)
  {
    headline: () => `Hibachi Catering in Beaverton`,
    opening:  () =>
      `Beaverton is where Oregon's corporate engine runs — Nike World Headquarters, the Daimler North American campus, the constellation of tech and professional services firms that have made Washington County one of the highest-income regions in the Pacific Northwest. Hibachi catering in Beaverton brings a certified teppanyaki chef to your corporate outdoor space or private property with the full setup and a live cooking performance that makes any team dinner, client appreciation event, or company gathering in this part of the metro the one your colleagues are still referencing at the next quarter kickoff.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Beaverton corporate events over 25, we deploy two chef stations. Full cleanup when dinner is done. Your venue is spotless when the chef leaves.`,
    closing:  () =>
      `Beaverton corporate events and private gatherings book 2–3 weeks ahead. Holiday party season (November–December) fills fastest — reserve 4–5 weeks out for Friday and Saturday events. Serving Beaverton and all of Washington County — Hillsboro, Tigard, Tualatin, Portland, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Invoice billing available for corporate accounts.`,
  },
  // 116 — Hillsboro (profileIdx 2)
  {
    headline: () => `Hibachi Catering in Hillsboro`,
    opening:  () =>
      `Hillsboro is the center of Oregon's Silicon Forest — the Intel campus that employs tens of thousands, the semiconductor ecosystem that has made Washington County a global technology hub, and the professional community that has built residential neighborhoods around it. Hibachi catering in Hillsboro brings a certified teppanyaki chef to your corporate outdoor space, private venue, or residential backyard with the full setup and a live performance that makes any event in this corridor the one people are still discussing at the water cooler.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Hillsboro events over 25, we bring two chef stations running simultaneously. Full cleanup when dinner is done. Your outdoor space is spotless when the chef leaves.`,
    closing:  () =>
      `Hillsboro corporate and private events book 2–3 weeks out. Serving Hillsboro and all of Washington County — Beaverton, Tigard, Forest Grove, Cornelius, Aloha, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Invoice billing and W-9 available for corporate accounts.`,
  },
  // 117 — Lake Oswego (profileIdx 3)
  {
    headline: () => `Private Hibachi Chef in Lake Oswego`,
    opening:  () =>
      `Lake Oswego sets the standard for private entertaining in the Portland metro. The lakefront properties, the hillside estates, the manicured gardens with stone terraces and outdoor kitchen setups that were designed for exactly this kind of gathering — private hibachi in Lake Oswego brings a certified teppanyaki chef to your property with the full setup, hand-selected premium proteins, and a live cooking performance that earns its place at a Lake Oswego outdoor table. No restaurant reservation. The chef comes to you. Your property becomes the venue.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and scallops available as premium upgrades, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, deck, or garden. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Lake Oswego property is immaculate when the chef leaves.`,
    closing:  () =>
      `Lake Oswego events book 3–4 weeks ahead in season. Graduation season (May–June) and summer evenings fill fastest. Serving Lake Oswego and all of Portland's west side — West Linn, Tualatin, Wilsonville, Oregon City, Happy Valley, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available.`,
  },
  // 118 — Salem (profileIdx 4)
  {
    headline: () => `Hibachi at Home in Salem`,
    opening:  () =>
      `Salem is Oregon's capital — the state government community, the Willamette University campus, the agricultural roots of the mid-valley, and the residential neighborhoods that define how families in this part of Oregon celebrate. Private hibachi at home in Salem brings a certified teppanyaki chef to your backyard or outdoor venue with the full setup and a live cooking performance that turns any gathering into the evening your guests plan around next time. From Salem's South Commercial neighborhood to the established backyards of West Salem, the chef comes to you with everything.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Salem events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Salem weekend events book 2–3 weeks ahead. Graduation season (May–June) is the most competitive booking window — reserve 4–5 weeks out for Saturday events. Serving Salem and all of the mid-Willamette Valley including Silverton, Keizer, Monmouth, Independence, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 119 — Eugene (profileIdx 5)
  {
    headline: () => `Hibachi at Home in Eugene`,
    opening:  () =>
      `Eugene in May is graduation season — University of Oregon families converging on the Willamette Valley from Portland, Seattle, San Francisco, and beyond, every backyard within driving distance of campus transformed into a celebration venue for the graduating class. Private hibachi at home in Eugene brings a certified teppanyaki chef to your property for graduation parties, milestone birthdays, and family celebrations in Oregon's most university-driven food city. The format that makes even the most distracted Duck senior put down the phone and pay attention.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For large Eugene graduation events over 25, we bring two chef stations. Full cleanup when dinner is done. Your backyard or property is spotless when the chef leaves.`,
    closing:  () =>
      `Eugene graduation season (May–June) books 4–5 weeks ahead — UO commencement weekends fill fastest. Serving Eugene and surrounding communities including Springfield, Cottage Grove, Veneta, and Lane County. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 120 — McMinnville (profileIdx 6)
  {
    headline: () => `Hibachi at Home in McMinnville`,
    opening:  () =>
      `McMinnville is the center of Oregon wine country — the Yamhill Valley hub where Chehalem Mountain Pinot Noir, Eola-Amity Hills estate dinners, and the International Pinot Noir Celebration all converge on a town that has spent twenty years building one of the Pacific Northwest's most compelling food and wine destinations. Private hibachi at home in McMinnville brings a certified teppanyaki chef to your property or wine country rental — the estate terrace, the Airbnb with the valley view, the home with the vineyard behind it — with the full setup and a live cooking performance that fits exactly into the dining culture this town has built.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, patio, or garden. The show runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order at the teppan. Full cleanup when dinner is done. Your McMinnville property is spotless when the chef leaves.`,
    closing:  () =>
      `McMinnville graduation season (Linfield University, May–June) and wine country summer events book 3–4 weeks ahead. Bachelorette weekends, anniversary dinners, and vineyard estate gatherings are our most common McMinnville bookings. Serving McMinnville and all of the Yamhill Valley — Newberg, Sherwood, Dayton, Carlton, and surrounding wine country communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 121 — Cannon Beach (profileIdx 7)
  {
    headline: () => `Mobile Hibachi in Cannon Beach`,
    opening:  () =>
      `Cannon Beach has Haystack Rock — and the bachelorette crews who booked the house in January, the anniversary couples who drove up from Portland to earn the view, the friend groups who've been doing this particular stretch of the northern Oregon Coast for a decade all came for the same reason: because Cannon Beach is genuinely one of the most beautiful places in the Pacific Northwest to spend a weekend. Mobile hibachi at your Cannon Beach rental brings a certified teppanyaki chef directly to your property. The full setup. The live performance. No Hemlock Street restaurant battle required.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, covered porch, or yard. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. Full cleanup when dinner is done. Your Cannon Beach rental stays spotless.`,
    closing:  () =>
      `Cannon Beach summer events book 6–8 weeks ahead for peak July and August dates. Bachelorette weekends, anniversary getaways, and birthday house rentals are our most common Cannon Beach bookings. Serving the full northern Oregon Coast — Seaside, Astoria, Manzanita, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor cooking is permitted at your rental before booking — most Cannon Beach properties allow it.`,
  },
  // 122 — Lincoln City (profileIdx 8)
  {
    headline: () => `Mobile Hibachi in Lincoln City`,
    opening:  () =>
      `Lincoln City is the Oregon Coast's most visited city — the group houses rented by Willamette Valley families who drive 90 minutes from Portland or Salem for the weekend, the birthday trips that turned into week-long stays, the family reunions where 25 cousins descended on a single beach house and need exactly one dinner that brings everyone to the same table at the same time. Mobile hibachi at your Lincoln City rental brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that delivers that dinner without driving everyone to a restaurant.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The show runs 90–120 minutes from first flame to final plate. For larger Lincoln City family events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your rental property is spotless when the chef leaves.`,
    closing:  () =>
      `Lincoln City summer events book 5–7 weeks ahead for peak season dates. Family reunions, group house vacations, birthday weekends, and bachelorette trips are our most common Lincoln City bookings. Serving Lincoln City and the central Oregon Coast — Newport, Depoe Bay, Otis, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 123 — Bend (profileIdx 9)
  {
    headline: () => `Private Hibachi Chef in Bend`,
    opening:  () =>
      `Bend is Oregon's fastest-growing city for a reason: the Cascades, the Deschutes River, the mountain biking trails and ski runs that make the outdoor recreation here genuinely world-class. The groups that come to Bend for a long weekend — the Portland tech team doing a corporate retreat, the family from three states renting a house for spring break, the anniversary couple who planned this particular trip for a year — want the dinner to match the setting. A private hibachi chef at your Bend vacation rental or mountain cabin brings a certified teppanyaki chef to your property with the full setup, premium proteins, and a live-fire performance that becomes the anchor event of the trip.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including premium upgrades like filet mignon and lobster tail, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or outdoor area. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order at the teppan in front of your guests. Full cleanup when dinner is done. Your Bend property is spotless when the chef leaves.`,
    closing:  () =>
      `Bend summer events book 3–4 weeks ahead. Corporate retreats, family reunion weekends, anniversary dinners, and vacation rental anchor events are our most common Bend bookings. Serving Bend and all of Central Oregon — Redmond, Sisters, Sunriver, La Pine, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Travel fees may apply for remote Central Oregon locations.`,
  },
]

// ── Blog posts (6 theme arrays × 3 posts) ─────────────────────────────────────
const OR_BLOG_POSTS = [
  // Theme 0 — Portland Urban Core
  [
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Portland Hibachi at Home vs. Restaurant: The Real Comparison',                excerpt: 'Portland has excellent restaurants. Here\'s why private hibachi at your home or deck beats restaurant hibachi for group events.', date: '2025-03-12' },
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Portland Guests Will Never Forget',       excerpt: 'From NE Portland backyard birthdays to SE deck dinners — how to host a private hibachi party that outclasses any PDX restaurant.', date: '2025-04-05' },
    { slug: 'hibachi-catering-corporate-events',    title: 'Why Hibachi Catering Works for Portland Metro Corporate Events',               excerpt: 'Corporate team dinners, client entertainment, and Portland professional events — why a private hibachi chef beats every other format.', date: '2025-02-18' },
  ],
  // Theme 1 — Portland Corporate / Tech
  [
    { slug: 'hibachi-catering-corporate-events',    title: 'Why Corporate Hibachi Catering Wins for Washington County Events',            excerpt: 'From Nike to Intel — why tech corridor companies in Beaverton and Hillsboro keep booking private hibachi for team events.', date: '2025-03-05' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Private Hibachi vs. Restaurant Dining for Washington County Corporate Events', excerpt: 'The honest cost and experience breakdown for corporate group dining in Beaverton and Hillsboro.', date: '2025-01-28' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost in the Portland Metro?',            excerpt: 'A full pricing breakdown for Portland, Beaverton, and Hillsboro hibachi events — what\'s included and what to expect.', date: '2025-02-10' },
  ],
  // Theme 2 — Portland Affluent Suburb
  [
    { slug: 'hibachi-birthday-party-ideas',         title: 'Hibachi Birthday and Milestone Party Ideas for Lake Oswego Events',           excerpt: 'From lakefront anniversary dinners to estate graduation parties — how to host a private hibachi event at your Lake Oswego property.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party in Lake Oswego',                         excerpt: 'Everything Lake Oswego hosts need before the private hibachi chef arrives at your terrace, deck, or garden.', date: '2025-02-25' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'Private Hibachi Chef Cost in the Portland Metro: What Lake Oswego Hosts Pay', excerpt: 'A clear pricing breakdown for Portland west-side private hibachi events, including premium protein upgrades.', date: '2025-01-15' },
  ],
  // Theme 3 — Willamette Valley
  [
    { slug: 'hibachi-birthday-party-ideas',         title: 'Hibachi Party Ideas for Willamette Valley Graduation Season',                 excerpt: 'From Salem backyards to Eugene graduation dinners to McMinnville wine country events — how Oregon valley families host hibachi.', date: '2025-04-02' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'Planning a Backyard Hibachi Party in the Willamette Valley: Full Checklist',  excerpt: 'Everything Salem, Eugene, and McMinnville hosts need before the private hibachi chef arrives.', date: '2025-02-28' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant in the Willamette Valley: The Honest Answer',  excerpt: 'Why valley graduation parties and family celebrations choose private hibachi over restaurant dining every spring.', date: '2025-01-22' },
  ],
  // Theme 4 — Oregon Coast
  [
    { slug: 'hibachi-bachelorette-party',           title: 'Oregon Coast Bachelorette Weekend: Why Hibachi at the Rental Wins',           excerpt: 'Cannon Beach, Lincoln City, Newport — why Oregon Coast bachelorette groups keep choosing private hibachi over restaurant dining.', date: '2025-03-18' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect at Your Oregon Coast Vacation Rental Hibachi Event',          excerpt: 'From booking to cleanup — what happens when a private hibachi chef arrives at your Oregon beach house.', date: '2024-11-15' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Oregon Coast Rental Hibachi vs. Coastal Restaurants: The Honest Comparison',  excerpt: 'Why Oregon Coast vacation rental guests are choosing private hibachi over packed beach town restaurants.', date: '2025-01-10' },
  ],
  // Theme 5 — Central Oregon Mountain
  [
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect at Your Bend or Central Oregon Vacation Property Hibachi Event', excerpt: 'From booking to cleanup — everything Bend vacation rental guests and corporate retreat planners need to know.', date: '2024-12-05' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost in Bend and Central Oregon?',       excerpt: 'Complete pricing guide for Bend, Sunriver, and Sisters hibachi events — per-person rates, travel fees, and group size breakdowns.', date: '2025-02-05' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Bend Vacation Rental Hibachi vs. Restaurant: The Better Choice',              excerpt: 'Why Bend corporate retreats and family vacation groups choose private hibachi over driving to a Bend restaurant.', date: '2025-01-18' },
  ],
]

// ── Major cities map (all 10 OR cities) ───────────────────────────────────────
const OR_MAJOR_CITIES = {
  // ── Theme 0 — Portland Urban Core ──────────────────────────────────────────
  'portland':     { v: 0, profileIdx: 0, nearby: ['Beaverton', 'Hillsboro', 'Lake Oswego', 'Salem'] },
  // ── Theme 1 — Portland Corporate / Tech ────────────────────────────────────
  'beaverton':    { v: 1, profileIdx: 1, nearby: ['Hillsboro', 'Portland', 'Lake Oswego'] },
  'hillsboro':    { v: 1, profileIdx: 2, nearby: ['Beaverton', 'Portland'] },
  // ── Theme 2 — Portland Affluent Suburb ─────────────────────────────────────
  'lake-oswego':  { v: 2, profileIdx: 3, nearby: ['Portland', 'Beaverton'] },
  // ── Theme 3 — Willamette Valley ─────────────────────────────────────────────
  'salem':        { v: 3, profileIdx: 4, nearby: ['McMinnville', 'Eugene', 'Portland'] },
  'eugene':       { v: 3, profileIdx: 5, nearby: ['Salem', 'McMinnville'] },
  'mcminnville':  { v: 3, profileIdx: 6, nearby: ['Salem', 'Portland', 'Eugene'] },
  // ── Theme 4 — Oregon Coast ──────────────────────────────────────────────────
  'cannon-beach': { v: 4, profileIdx: 7, nearby: ['Lincoln City'] },
  'lincoln-city': { v: 4, profileIdx: 8, nearby: ['Cannon Beach'] },
  // ── Theme 5 — Central Oregon Mountain ──────────────────────────────────────
  'bend':         { v: 5, profileIdx: 9, nearby: ['Portland', 'Eugene', 'Salem'] },
}

// ── Display name overrides ────────────────────────────────────────────────────
const OR_CITY_DISPLAY_NAMES = {
  'lake-oswego':  'Lake Oswego',
  'cannon-beach': 'Cannon Beach',
  'lincoln-city': 'Lincoln City',
  'mcminnville':  'McMinnville',
}

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const OR_PROFILE_H1_PREFIXES = [
  'Hibachi at Home in',     // 0  — Portland
  'Hibachi Catering in',    // 1  — Beaverton
  'Hibachi Catering in',    // 2  — Hillsboro
  'Private Hibachi Chef in',// 3  — Lake Oswego
  'Hibachi at Home in',     // 4  — Salem
  'Hibachi at Home in',     // 5  — Eugene
  'Hibachi at Home in',     // 6  — McMinnville
  'Mobile Hibachi in',      // 7  — Cannon Beach
  'Mobile Hibachi in',      // 8  — Lincoln City
  'Private Hibachi Chef in',// 9  — Bend
]

const OR_THEME_H1_PREFIXES = [
  'Hibachi at Home in',     // v=0 Portland Urban (expansion fallback)
  'Hibachi Catering in',    // v=1 Corporate / Tech (expansion fallback)
  'Private Hibachi Chef in',// v=2 Affluent Suburb (expansion fallback)
  'Hibachi at Home in',     // v=3 Willamette Valley (expansion fallback)
  'Mobile Hibachi in',      // v=4 Oregon Coast (expansion fallback)
  'Private Hibachi Chef in',// v=5 Central Oregon (expansion fallback)
]

// ── Custom meta — precise title + description for all 10 OR cities ────────────
const OR_CUSTOM_META = {
  'portland': {
    title: 'Hibachi at Home in Portland, Oregon | Private Hibachi Chef | Hibachi Connect',
    desc:  'Book a certified teppanyaki chef for your Portland backyard, deck, or outdoor space. Full setup, live cooking performance, complete cleanup. $60/adult. Serving all of Portland and the metro area.',
  },
  'beaverton': {
    title: 'Hibachi Catering in Beaverton, Oregon | Corporate & Private Events | Hibachi Connect',
    desc:  'Book hibachi catering for your Beaverton corporate team dinner or private gathering. Certified teppanyaki chef, full setup, complete cleanup. $60/adult. Serving Beaverton, Hillsboro, and all of Washington County.',
  },
  'hillsboro': {
    title: 'Hibachi Catering in Hillsboro, Oregon | Corporate & Private Events | Hibachi Connect',
    desc:  'Hibachi catering for Hillsboro corporate team dinners and private events. Certified teppanyaki chef, full setup, complete cleanup. $60/adult. Serving Hillsboro and the Silicon Forest corridor.',
  },
  'lake-oswego': {
    title: 'Private Hibachi Chef in Lake Oswego, Oregon | Premium At-Home Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef for your Lake Oswego home, terrace, or outdoor entertaining space. Premium proteins, live performance, complete cleanup. $60/adult. Serving Lake Oswego and Portland\'s west side.',
  },
  'salem': {
    title: 'Hibachi at Home in Salem, Oregon | Private Hibachi Chef | Hibachi Connect',
    desc:  'Book a certified teppanyaki chef for your Salem home or backyard. Perfect for graduation parties, family gatherings, and milestone events. $60/adult. Serving Salem and the Willamette Valley.',
  },
  'eugene': {
    title: 'Hibachi at Home in Eugene, Oregon | Private Hibachi Chef | Hibachi Connect',
    desc:  'Book a certified teppanyaki chef for your Eugene home or backyard. Perfect for UO graduation parties, family gatherings, and birthday dinners. $60/adult. Serving Eugene, Springfield, and Lane County.',
  },
  'mcminnville': {
    title: 'Hibachi at Home in McMinnville, Oregon | Wine Country Private Chef | Hibachi Connect',
    desc:  'A certified teppanyaki chef at your McMinnville home, vineyard rental, or wine country property. Full setup, all proteins, complete cleanup. $60/adult. Serving McMinnville and the Willamette Valley wine country.',
  },
  'cannon-beach': {
    title: 'Mobile Hibachi in Cannon Beach, Oregon | Beach House Private Chef | Hibachi Connect',
    desc:  'A certified mobile hibachi chef at your Cannon Beach vacation rental. No restaurant reservations — full setup, live performance, complete cleanup. $60/adult. Book your Oregon Coast date now.',
  },
  'lincoln-city': {
    title: 'Mobile Hibachi in Lincoln City, Oregon | Vacation Rental Hibachi Chef | Hibachi Connect',
    desc:  'A certified hibachi chef at your Lincoln City beach house or vacation rental. Perfect for group weekends, family reunions, and birthday trips. $60/adult. Serving Lincoln City and the Oregon Coast.',
  },
  'bend': {
    title: 'Private Hibachi Chef in Bend, Oregon | Mountain Retreat & Vacation Rental Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef for your Bend vacation rental, mountain cabin, or backyard. Full setup, premium proteins, complete cleanup. $60/adult. Serving Bend and all of Central Oregon.',
  },
}

// ── Main builder ──────────────────────────────────────────────────────────────
export function getOregonCityData(citySlug, cityName) {
  const major       = OR_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getORVariantIndex(citySlug)
  const theme       = OR_IMAGE_THEMES[v] ?? OR_IMAGE_THEMES[0]
  const displayName = OR_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Oregon',
    stateAbbr:    'OR',
    stateSlug:    'oregon',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: OR_HERO_SUBTITLES[v]?.(displayName) ?? OR_HERO_SUBTITLES[0](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['Portland', 'Bend', 'Eugene', 'Salem', 'McMinnville'],
    localHighlights:   OR_LOCAL_HIGHLIGHTS[v]?.(displayName) ?? OR_LOCAL_HIGHLIGHTS[0](displayName),
    featuredOccasions: OR_OCCASIONS[v] ?? OR_OCCASIONS[0],
    faqSet:            OR_FAQ_SETS[v]?.(displayName) ?? OR_FAQ_SETS[0](displayName),
    testimonials:      OR_TESTIMONIALS[v] ?? OR_TESTIMONIALS[0],
    // INTRO_VARIANTS: 108–113 = OR generic, 114–123 = OR city-specific
    uniqueIntroVariant:   (major?.profileIdx != null) ? 114 + major.profileIdx : 108 + v,
    uniqueWhyUsVariant:   v,
    // CLOSING_VARIANTS: 108–113 = OR generic, 114–123 = OR city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 114 + major.profileIdx : 108 + v,
    // H1 prefix for CityHero
    heroH1Prefix: major?.profileIdx != null
      ? OR_PROFILE_H1_PREFIXES[major.profileIdx]
      : OR_THEME_H1_PREFIXES[v] ?? 'Hibachi at Home in',
    // Custom meta for precise SEO control across all 10 OR cities
    ...(OR_CUSTOM_META[citySlug]
      ? { metaTitle: OR_CUSTOM_META[citySlug].title, metaDescription: OR_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getOrHowItWorks(citySlug) {
  const major = OR_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getORVariantIndex(citySlug)
  return OR_HOW_IT_WORKS[v] ?? OR_HOW_IT_WORKS[0]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getOrSectionVariant(citySlug) {
  const major = OR_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getORVariantIndex(citySlug)
  return OR_SECTION_VARIANTS[v] ?? OR_SECTION_VARIANTS[0]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getOrCityImage(citySlug) {
  return OR_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getOrSupportImages(citySlug) {
  if (OR_SUPPORT_IMAGES[citySlug]) return OR_SUPPORT_IMAGES[citySlug]
  const major = OR_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getORVariantIndex(citySlug)
  return OR_SUPPORT_FALLBACKS[v] ?? OR_SUPPORT_FALLBACKS[0]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getOrBlogPosts(variant, count) {
  return OR_BLOG_POSTS[variant % OR_BLOG_POSTS.length].slice(0, count)
}
