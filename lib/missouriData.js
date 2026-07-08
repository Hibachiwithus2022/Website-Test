// =============================================================================
// lib/missouriData.js — Missouri Expansion (13 Cities · 6 Themes)
// Theme 0: KC Metro          (Kansas City, Lee's Summit, Blue Springs)
// Theme 1: STL Metro         (St. Louis, O'Fallon, St. Charles)
// Theme 2: STL Affluent      (Chesterfield, Kirkwood)
// Theme 3: Ozarks Vacation   (Lake of the Ozarks, Branson)
// Theme 4: University        (Columbia, Springfield)
// Theme 5: Long-tail         (Joplin)
//
// INTRO_VARIANTS indices:   124–129 MO generic · 130–142 MO city-specific
// CLOSING_VARIANTS indices: 124–129 MO generic · 130–142 MO city-specific
// =============================================================================

export function getMOVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 6
}

const toSlug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const MO_HERO_SUBTITLES = [
  (city) => city === 'Kansas City'
    ? `Backyard Hibachi Parties · Birthday Celebrations · Corporate Events · Serving All KC Neighborhoods & the Metro`
    : `Backyard Hibachi Parties · Birthday Celebrations · Corporate Events · Serving ${city} & the Kansas City Metro`,
  (city) => city === 'St. Louis'
    ? `Graduation Parties · Birthday Dinners · Family Celebrations · Serving All St. Louis Neighborhoods & the Metro`
    : `Graduation Parties · Birthday Dinners · Family Celebrations · Serving ${city} & the St. Louis Metro`,
  (city) => `Private Estate Dining · Milestone Anniversaries · Graduation Parties · Serving ${city} & St. Louis County`,
  (city) => city === 'Lake of the Ozarks'
    ? `Lake House Dinners · Bachelorette Weekends · Family Vacation Groups · Serving the Lake & All of the Missouri Ozarks`
    : `Lake House Dinners · Bachelorette Weekends · Family Vacation Groups · Serving ${city} & the Missouri Ozarks`,
  (city) => `Graduation Parties · Family Celebrations · Birthday Dinners · Serving ${city} & Mid-Missouri`,
  (city) => `Birthday Parties · Graduation Parties · Family Gatherings · Serving ${city} & Southwest Missouri`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const MO_LOCAL_HIGHLIGHTS = [
  // Theme 0 — KC Metro
  (city) => [
    `Private backyard hibachi for ${city}'s outdoor entertaining culture — the upgrade to your usual BBQ`,
    'Perfect for birthday dinners, graduation celebrations, corporate team events, and neighborhood gatherings',
    `Ideal for executive client events and company team dinners throughout the Kansas City metro`,
    `Graduation season (May–June) in the KC metro books 3–4 weeks ahead — reserve your date now`,
    'Full setup and zero cleanup — the best alternative to fighting for a group reservation at a KC restaurant',
    `Dual-station capacity for large ${city} gatherings of 25–60+ guests`,
  ],
  // Theme 1 — STL Metro
  (city) => [
    `Private hibachi parties and family gatherings throughout ${city} and the St. Louis metro`,
    'Perfect for graduation parties, birthday dinners, and neighborhood celebrations',
    `Ideal for backyard and patio entertaining in established ${city} residential neighborhoods`,
    `Graduation season (May–June) in ${city} books 2–3 weeks ahead — reserve your weekend date now`,
    'Full setup and complete cleanup — nothing for the host to manage',
    `Dual-station capacity for larger ${city} gatherings of 25–60+ guests`,
  ],
  // Theme 2 — STL Affluent
  (city) => [
    `Private estate dining and backyard entertaining for ${city}'s most discerning hosts`,
    'Perfect for milestone anniversary dinners, graduation parties, and intimate dinner parties',
    `Ideal for elegant outdoor entertaining throughout ${city} and St. Louis County`,
    `Graduation season (May–June) and summer evenings book 3–4 weeks ahead in ${city}`,
    'Premium proteins, flawless live performance, complete setup and cleanup',
    `Dual-station capacity for large ${city} gatherings of 25–60+ guests`,
  ],
  // Theme 3 — Ozarks Vacation
  (city) => [
    `Lake house hibachi at your ${city} rental — no crowded Ozarks restaurant logistics`,
    'Perfect for bachelorette weekends, birthday lake trips, family reunion weekends, and group house dinners',
    `Chef comes directly to your ${city} lake property — full setup, full show, complete cleanup`,
    'Ozarks summer season runs Memorial Day through Labor Day — reserve 4–6 weeks ahead',
    'Fire tricks, flying shrimp, and the full teppanyaki performance at your lake deck or dock patio',
    'Full pack-out when dinner is done — your lake house or vacation rental stays spotless',
  ],
  // Theme 4 — University
  (city) => [
    `Private hibachi parties for ${city}'s graduation season, birthday celebrations, and family events`,
    'Perfect for university graduation parties, faculty dinners, and college town celebrations',
    `Ideal for family gatherings and milestone events throughout ${city} and surrounding communities`,
    `Graduation season (May–June) in ${city} is our highest-demand window — book 4–5 weeks ahead`,
    'Full setup and zero cleanup — your outdoor space is immaculate when the chef leaves',
    `Dual-station capacity for large graduation parties and family reunions of 25–60+ guests`,
  ],
  // Theme 5 — Long-tail
  (city) => [
    `Private backyard hibachi parties and family gatherings throughout ${city} and Southwest Missouri`,
    'Perfect for birthday parties, graduation celebrations, and neighborhood gatherings',
    `Ideal for backyard entertaining and milestone events throughout the ${city} area`,
    `${city} events book 2–3 weeks ahead — reserve your date now`,
    'Full setup and complete cleanup — nothing for the host to manage',
    `Dual-station capacity for groups of 25–60+ guests`,
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const MO_OCCASIONS = [
  ['Birthday Parties', 'Backyard BBQ Upgrade', 'Graduation Parties', 'Corporate Events', 'Bachelorette Parties', 'Anniversary Dinners', 'Neighborhood Gatherings', 'Holiday Dinners', 'Engagement Parties', 'Family Reunions'],
  ['Birthday Parties', 'Graduation Parties', 'Anniversary Dinners', 'Bachelorette Parties', 'Family Reunions', 'Corporate Events', 'Holiday Dinners', 'Engagement Parties', 'Neighborhood Gatherings', 'Retirement Parties'],
  ['Birthday Parties', 'Graduation Parties', 'Anniversary Dinners', 'Corporate Events', 'Milestone Celebrations', 'Neighborhood Gatherings', 'Bachelorette Parties', 'Family Reunions', 'Holiday Dinners', 'Retirement Parties'],
  ['Bachelorette Weekends', 'Birthday Lake Trips', 'Anniversary Getaways', 'Lake House Parties', 'Family Reunions', 'Girls Weekends', 'Vacation Group Dinners', 'Bachelor Parties', 'Engagement Celebrations', 'Corporate Retreats'],
  ['Graduation Parties', 'Birthday Parties', 'Anniversary Dinners', 'Family Reunions', 'Bachelorette Weekends', 'Corporate Events', 'Holiday Dinners', 'Engagement Parties', 'Faculty Dinners', 'Neighborhood Gatherings'],
  ['Birthday Parties', 'Graduation Parties', 'Anniversary Dinners', 'Family Reunions', 'Bachelorette Parties', 'Corporate Events', 'Holiday Dinners', 'Engagement Parties', 'Neighborhood Gatherings', 'Retirement Celebrations'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const MO_FAQ_SETS = [
  // Theme 0 — KC Metro
  (city) => [
    {
      q: `Can hibachi be set up at a ${city} backyard, deck, or patio?`,
      a: `Yes — Kansas City backyards, cedar decks, and outdoor patios are our most common setup environment in the metro. We need a flat outdoor area of at least 10×10 ft with open overhead clearance. Most KC residential properties work perfectly. We bring everything — the teppan grill, propane, all ingredients, plates, and chopsticks. Nothing for you to provide except tables and chairs for your guests.`,
    },
    {
      q: `Do you serve all of the Kansas City metro — both sides of the state line?`,
      a: `Yes — we serve the full KC metro on both sides of the state line: Lee's Summit, Blue Springs, Independence, Raytown, Overland Park, Lenexa, Leawood, Prairie Village, Olathe, Liberty, Gladstone, North KC, and every neighborhood from Waldo to Brookside to the Plaza. Most KC metro locations fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle a large graduation party or corporate event in ${city}?`,
      a: `Absolutely — large graduation parties and corporate team dinners are among our most common KC metro bookings. For groups over 25, we bring two chef stations running simultaneously to keep quality and timing consistent across the full group. Groups of 40–60+ are a regular format throughout the KC metro.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Summer weekends and graduation season (May–June) book 3–4 weeks ahead across the KC metro. Holiday party season (November–December) fills fastest — reserve 4–5 weeks out for any Friday or Saturday. Weekday events and off-season dates typically have more flexibility with 1–2 weeks' notice.`,
    },
    {
      q: `Is hibachi good for a Kansas City birthday dinner or graduation party?`,
      a: `It's the best format for both. KC residents are outdoor entertainers who know good food — they'll engage with the chef, cheer the fire tricks, and talk about it for weeks. For graduation parties of 20–50 guests, the live cooking show completely replaces the need to fight for a group reservation at any KC restaurant. The chef performs, you host, every guest gets exactly what they ordered.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Kansas City metro locations on both sides of the state line. For events significantly outside the KC metro, a modest travel fee may apply and is always disclosed upfront before you confirm.`,
    },
  ],
  // Theme 1 — STL Metro
  (city) => [
    {
      q: `Can hibachi be set up at my ${city} backyard or patio?`,
      a: `Yes — residential backyards, patios, and outdoor spaces throughout ${city} and the St. Louis metro are our most common setup environments. We need a flat outdoor area of at least 10×10 ft with overhead clearance. Most ${city} properties work perfectly. We bring everything — teppan grill, propane, all ingredients, plates, and chopsticks.`,
    },
    {
      q: `Do you serve ${city} and surrounding St. Louis metro communities?`,
      a: `Yes — we serve all of the St. Louis metro including ${city}, Clayton, Webster Groves, Chesterfield, O'Fallon, St. Charles, Wentzville, Belleville, Edwardsville, Florissant, Kirkwood, and every community from South City to St. Charles County. Most ${city} locations fall within our standard service area.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend events in ${city} typically book 2–3 weeks out. Graduation season (May–June) is our highest-demand window — reserve 4–5 weeks ahead for any Saturday graduation event. Holiday party season (November–December) also fills fast. Weekday events usually have more flexibility.`,
    },
    {
      q: `Can you handle a large graduation party or family reunion in ${city}?`,
      a: `Absolutely — large graduation parties and family reunions are among our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. Groups of 40–60+ are a regular format across the St. Louis metro. We've hosted three-generation gatherings where grandparents were front row and grandkids were asking the chef questions all evening.`,
    },
    {
      q: `Is hibachi good for a birthday or graduation celebration in ${city}?`,
      a: `It's excellent for both. The format — live chef at the grill, fire tricks, everyone at the same outdoor table — creates an experience no St. Louis restaurant group dinner can replicate. For graduation parties where every restaurant in the metro is fully booked, we come to you. The chef performs, you host, every guest gets exactly what they want.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most St. Louis metro locations including ${city} and surrounding communities. For events significantly outside the metro, a modest travel fee may apply and is always disclosed upfront before you confirm.`,
    },
  ],
  // Theme 2 — STL Affluent
  (city) => [
    {
      q: `Can hibachi be set up at my ${city} home, deck, or estate property?`,
      a: `Yes — residential backyards, stone terraces, elevated decks, and garden patios throughout ${city} are our most common setup environment. We need a flat outdoor area of at least 10×10 ft with adequate overhead clearance. Most ${city} properties have ideal outdoor spaces. We bring everything — the grill, all ingredients, plates, and chopsticks.`,
    },
    {
      q: `Do you serve ${city} and surrounding St. Louis County communities?`,
      a: `Yes — we serve ${city} and all of St. Louis County including Chesterfield, Kirkwood, Webster Groves, Clayton, Ladue, Town and Country, Ballwin, Wildwood, and the full county to the city limits. Most ${city} locations fall within our standard service radius with no extra travel fee.`,
    },
    {
      q: `How far in advance should I book for a ${city} graduation or milestone event?`,
      a: `${city} graduation season (May–June) is our highest-demand window in St. Louis County. We recommend booking 4–5 weeks in advance for any May or June Saturday event. Anniversary dinners, milestone birthdays, and summer weekend events book 3–4 weeks out. Off-season events typically have more flexibility.`,
    },
    {
      q: `Can you handle a large graduation or milestone party in ${city}?`,
      a: `Absolutely — milestone events of 25–60+ guests are among our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously to maintain quality and timing. Large graduation parties, anniversary dinners, and estate celebrations are a specialty.`,
    },
    {
      q: `Do you offer premium protein options for ${city} estate events?`,
      a: `Yes — every event includes two protein selections per guest from our standard menu. Premium upgrades are available for any ${city} event: filet mignon (+$20/order), lobster tail (+$25/order), and additional protein selections (+$15/order). ${city} hosts frequently select premium upgrades for anniversary dinners and milestone celebrations.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. Setup and complete cleanup are fully included. Your ${city} property is spotless when the chef leaves.`,
    },
  ],
  // Theme 3 — Ozarks Vacation
  (city) => [
    {
      q: `Can you come to our ${city} lake house or vacation rental?`,
      a: `Absolutely — Ozarks vacation rentals and lake houses are among our most popular booking locations. We come directly to your property with everything. Confirm the rental allows outdoor open-flame cooking (most Ozarks properties do), describe your outdoor setup — dock patio, deck, or yard — and we'll handle everything from setup to complete cleanup.`,
    },
    {
      q: `How far in advance should I book an Ozarks summer event?`,
      a: `Ozarks summer season — Memorial Day through Labor Day — books fast. We recommend reserving 4–6 weeks ahead for peak July and August events near ${city}. Fourth of July weekend and peak August lake dates fill earliest. Fall and spring events typically have much more availability with 2–3 weeks' notice.`,
    },
    {
      q: `Can you set up on the deck or dock patio at our ${city} lake house?`,
      a: `Yes — outdoor decks, dock patios, and yard areas at Ozarks lake properties are our ideal setup. We need a minimum 10×10 ft flat surface with overhead clearance. Most lake house properties easily accommodate the full setup. We handle all arrival coordination, setup, and leave every surface spotless.`,
    },
    {
      q: `Is hibachi good for an Ozarks bachelorette weekend near ${city}?`,
      a: `It's the best option for a lake house bachelorette weekend. The combination of live fire cooking, flying shrimp, and everyone gathered around the same grill at the lake creates exactly the energy a bachelorette group wants — and you don't spend an hour driving to a packed Bagnell Dam Strip restaurant. We've run dozens of Ozarks bachelorette events. The chef makes the evening.`,
    },
    {
      q: `What if the weather changes at our lake house event?`,
      a: `We cook in light wind and mild conditions under appropriate shelter. A covered deck or screened porch is ideal. For severe weather or lightning, we reschedule at no penalty. Missouri summer weather is something we plan for every Ozarks booking — always mention your backup shelter situation when you inquire.`,
    },
    {
      q: city === 'Branson' ? `Do you serve smaller communities near ${city}?` : `Do you serve smaller lake communities near ${city}?`,
      a: city === 'Branson'
        ? `Yes — we serve Branson and all of the surrounding Ozarks communities including Hollister, Kimberling City, Ozark, Nixa, Forsyth, and the full Table Rock Lake region. Travel fees may apply for more remote locations and are always disclosed before booking.`
        : `Yes — we serve all of the Lake of the Ozarks area including Osage Beach, Lake Ozark, Camdenton, Laurie, Sunrise Beach, Four Seasons, and surrounding lake communities. Travel fees may apply for more remote locations and are always disclosed before booking.`,
    },
  ],
  // Theme 4 — University
  (city) => [
    {
      q: `Can hibachi be set up at a ${city} backyard or outdoor space?`,
      a: `Yes — residential backyards, patios, and outdoor spaces throughout ${city} are our most common setup environment. We need a flat outdoor area of at least 10×10 ft. Concrete patios, wood decks, and flat lawn areas all work perfectly. We bring everything — the teppan grill, propane, all ingredients, plates, and chopsticks.`,
    },
    {
      q: `Do you serve ${city} and surrounding Mid-Missouri communities?`,
      a: `Yes — we serve all of Mid-Missouri including ${city} and surrounding communities throughout the region. Most ${city} locations fall within our standard service area with no extra travel fee. For more distant locations, any travel fee is always disclosed upfront before you book.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation party?`,
      a: `Graduation season in ${city} — particularly May and June — is our highest-demand window. We recommend booking 4–5 weeks ahead for any Saturday graduation event. University graduation weekends fill fastest. Weekday graduation dinners and off-season events typically have more availability with 2–3 weeks' notice.`,
    },
    {
      q: `Can you handle a large graduation group in ${city}?`,
      a: `Absolutely — large graduation parties of 25–60+ guests are our most common ${city} bookings during graduation season. For groups over 25, we bring two chef stations running simultaneously. Three-generation gatherings with grandparents front row and college graduates asking the chef questions are our standard graduation format.`,
    },
    {
      q: `Is hibachi a good format for a ${city} graduation party?`,
      a: `It's the best format. When every restaurant near campus is fully booked on graduation Saturday, we come to you. The chef performs at your home or backyard — fire tricks, live cooking, 90–120 minutes of entertainment — and every guest gets exactly what they ordered. No reservation battles, no group menu limitations, no fighting for a table.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: teppan grill, propane, all fresh proteins, vegetables, fried rice, house-made sauces, plates, and chopsticks. Setup and complete cleanup are fully included.`,
    },
  ],
  // Theme 5 — Long-tail
  (city) => [
    {
      q: `Can hibachi be set up at a ${city} backyard or patio?`,
      a: `Yes — residential backyards, patios, and outdoor spaces throughout ${city} and Southwest Missouri are our standard setup environment. We need a flat outdoor area of at least 10×10 ft. We bring everything — the teppan grill, propane, all ingredients, plates, and chopsticks. Nothing for you to prepare.`,
    },
    {
      q: `Do you serve ${city} and surrounding Southwest Missouri communities?`,
      a: `Yes — we serve ${city} and all of Southwest Missouri including Neosho, Carthage, Webb City, Carl Junction, Joplin metro, and surrounding communities in the four-state region. Most locations fall within our standard service area. Any travel fee is always disclosed before you book.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend events in ${city} typically book 2–3 weeks ahead. Graduation season (May–June) and summer weekend dates fill fastest — reserve 3–4 weeks out for Saturday events during peak season. Weekday events and off-season dates typically have more flexibility.`,
    },
    {
      q: `Can you handle a large party or family reunion in ${city}?`,
      a: `Absolutely — birthday parties, graduation celebrations, and family reunions of 25–60+ guests are common ${city} bookings. For groups over 25, we bring two chef stations. We've run large multi-generational gatherings throughout Southwest Missouri.`,
    },
    {
      q: `Is hibachi good for a ${city} birthday or graduation party?`,
      a: `It's excellent for both. The live chef performance — fire tricks, flying shrimp, everything cooked to order at the teppan — creates an experience no ${city} restaurant can replicate for a group. No reservation battles, no group menu limitations. The chef comes to you.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `Most ${city} and Southwest Missouri locations fall within our standard service area. For events significantly outside the area, a modest travel fee may apply and is always disclosed upfront before you confirm.`,
    },
  ],
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const MO_TESTIMONIALS = [
  // Theme 0 — KC Metro
  [
    {
      text: '"Birthday dinner in our KC backyard — 22 guests, cedar deck, chef arrived exactly on time and turned our standard outdoor gathering into two hours of live entertainment. Kansas City knows good food. This was in a different category than anything we\'ve done outside."',
      name: 'Jennifer M.',
      city: 'Kansas City, MO',
      event: 'Birthday Dinner',
      initials: 'JM',
    },
    {
      text: '"Graduation party in Lee\'s Summit — 44 guests, Lakewood neighborhood backyard, dual station setup. Chef ran both stations flawlessly and had three generations gathered around the grill for the entire evening. We\'d done restaurants for every previous milestone. This was the first one nobody wanted to leave early."',
      name: 'The Patterson Family',
      city: "Lee's Summit, MO",
      event: 'Graduation Party',
      initials: 'PF',
    },
    {
      text: '"Company team dinner for 30 employees in the KC metro — outdoor venue, chef was exceptional from first setup to final plate. Our team works hard and this was exactly the kind of event that shows it. Four people asked for the contact information before the night was over."',
      name: 'Marcus T.',
      city: 'Kansas City, MO',
      event: 'Corporate Team Dinner',
      initials: 'MT',
    },
  ],
  // Theme 1 — STL Metro
  [
    {
      text: '"Graduation party in south St. Louis — 36 guests, backyard on a standard city lot, chef made it work perfectly. Family came from Columbia, Kansas City, and Chicago. Chef ran a two-hour show and had every generation at the same table the entire time. Best graduation event we\'ve ever done in this city."',
      name: 'The Kowalski Family',
      city: 'St. Louis, MO',
      event: 'Graduation Party',
      initials: 'KF',
    },
    {
      text: '"Birthday dinner in O\'Fallon — 28 guests, backyard, one chef station, premium protein upgrades for everyone. Flawless from setup to cleanup. Our neighborhood does a lot of outdoor entertaining and this was the best evening anyone could remember hosting. Three neighbors booked events before the chef was done packing up."',
      name: 'Linda R.',
      city: "O'Fallon, MO",
      event: 'Birthday Dinner',
      initials: 'LR',
    },
    {
      text: '"Family reunion in St. Charles — 40 people, three generations, backyard near the Missouri River. Chef set up dual stations and ran the whole evening without a single issue. Cousins from out of state who\'d never seen a hibachi performance were asking the chef questions all night. This is now the reunion tradition."',
      name: 'The Brennan Family',
      city: 'St. Charles, MO',
      event: 'Family Reunion',
      initials: 'BF',
    },
  ],
  // Theme 2 — STL Affluent
  [
    {
      text: '"Anniversary dinner at our Chesterfield home — 18 guests, stone terrace, chef was exceptional. The food, the fire performance, the personal attention to every guest — it was exactly the occasion the evening needed. Two of our guests booked their own events before the chef finished cleanup."',
      name: 'Robert & Catherine H.',
      city: 'Chesterfield, MO',
      event: 'Anniversary Dinner',
      initials: 'RH',
    },
    {
      text: '"Graduation party in Kirkwood — 38 guests, backyard garden, dual chef stations. Flawless from start to finish. Our daughter\'s graduating class plus family from Chicago and Kansas City — everyone gathered around the same grill for two hours. Best event we\'ve ever hosted at this property."',
      name: 'William & Susan P.',
      city: 'Kirkwood, MO',
      event: 'Graduation Party',
      initials: 'WP',
    },
    {
      text: '"Milestone birthday at our Chesterfield estate — 32 guests on the back terrace, chef was professional, commanding, and genuinely entertaining. Premium filet mignon and lobster tail for the whole table. The evening cost less than the same group at a Clayton restaurant and was twice the experience."',
      name: 'Margaret B.',
      city: 'Chesterfield, MO',
      event: 'Milestone Birthday',
      initials: 'MB',
    },
  ],
  // Theme 3 — Ozarks Vacation
  [
    {
      text: '"Lake of the Ozarks bachelorette weekend — 14 of us, cove house with the dock patio, hibachi Friday night. Chef arrived exactly on time, set up at the lake, and ran the most entertaining two hours of the whole weekend. We\'d eaten at every good Bagnell Dam restaurant before. This was in a different category entirely."',
      name: 'Ashley K.',
      city: 'Lake of the Ozarks, MO',
      event: 'Bachelorette Weekend',
      initials: 'AK',
    },
    {
      text: '"Family reunion at our Branson cabin — 24 cousins and parents, hibachi on Saturday night. Chef showed up, took over the deck, and had three generations around the grill for two straight hours. Grandparents had never seen a hibachi performance. The cousins are still asking when we\'re doing it again."',
      name: 'The Morrison Family',
      city: 'Branson, MO',
      event: 'Family Reunion',
      initials: 'MF',
    },
    {
      text: '"Birthday weekend at our lake house on the Ozarks — 10 of us, dock patio setup, chef was phenomenal. Lake weekends are competitive to plan and we wanted one anchor dinner that guaranteed a great night. Hibachi at the lake house delivered exactly that. Booking again this summer."',
      name: 'Nicole S.',
      city: 'Lake of the Ozarks, MO',
      event: 'Birthday Weekend',
      initials: 'NS',
    },
  ],
  // Theme 4 — University
  [
    {
      text: '"Mizzou graduation party in Columbia — 42 guests, backyard near campus, dual station setup. Family flew in from Dallas and Seattle. Chef ran both stations for two hours and had every Tiger fan and parent gathered around the grill the entire time. Every Columbia restaurant was fully booked. We were glad we didn\'t need one."',
      name: 'The Sullivan Family',
      city: 'Columbia, MO',
      event: 'Mizzou Graduation Party',
      initials: 'SF',
    },
    {
      text: '"Missouri State graduation dinner in Springfield — 34 guests, backyard, one chef station. Chef arrived early, set up faster than expected, and ran a show that had every MSU grad and family member at the table for two hours. Zero restaurant logistics. Every dish exactly right."',
      name: 'Paul & Linda C.',
      city: 'Springfield, MO',
      event: 'Missouri State Graduation',
      initials: 'PC',
    },
    {
      text: '"Faculty dinner in Columbia — 20 guests, backyard, premium proteins. Chef was exceptional. We host several dinners a year and this was the first format where every guest was genuinely engaged from start to finish. The interactive performance changes the whole dynamic of an outdoor dinner party."',
      name: 'Dr. James W.',
      city: 'Columbia, MO',
      event: 'Faculty Dinner',
      initials: 'JW',
    },
  ],
  // Theme 5 — Long-tail
  [
    {
      text: '"Birthday party in Joplin — 26 guests, backyard, chef was outstanding. We\'d tried hibachi restaurants in the area before. This was a completely different experience — live performance, fire tricks, everything cooked in front of us. My guests are still talking about it three weeks later."',
      name: 'Teresa M.',
      city: 'Joplin, MO',
      event: 'Birthday Party',
      initials: 'TM',
    },
    {
      text: '"Graduation celebration in Joplin — 38 guests, dual station, backyard. Family came from Kansas City and Springfield. Chef handled everything and kept 38 people entertained for two solid hours. We couldn\'t have found a restaurant in Joplin to seat everyone at the same table. This was the right call."',
      name: 'The Garcia Family',
      city: 'Joplin, MO',
      event: 'Graduation Party',
      initials: 'GF',
    },
    {
      text: '"Family reunion in Joplin — 32 people, three generations, backyard. Chef was professional and genuinely fun. The interactive format broke down every awkward cousin-who-hasn\'t-seen-each-other-in-years barrier within the first ten minutes. Best reunion dinner we\'ve ever done."',
      name: 'The Henderson Family',
      city: 'Joplin, MO',
      event: 'Family Reunion',
      initials: 'HF',
    },
  ],
]

// ── Image themes ──────────────────────────────────────────────────────────────
const MO_IMAGE_THEMES = [
  { heroImage: '/pics/hero-4.jpg' },                    // Theme 0 — KC Metro
  { heroImage: '/pics/hibachi-catering-3.jpg' },        // Theme 1 — STL Metro
  { heroImage: '/pics/private-hibachi.jpg' },           // Theme 2 — STL Affluent
  { heroImage: '/pics/hibachi-virginia-beach.jpg' },    // Theme 3 — Ozarks Vacation
  { heroImage: '/pics/hibachi-colorado.jpg' },          // Theme 4 — University
  { heroImage: '/pics/hero-1.jpg' },                    // Theme 5 — Long-tail
]

// ── How It Works ──────────────────────────────────────────────────────────────
const MO_HOW_IT_WORKS = [
  // Theme 0 — KC Metro
  {
    headline:   (city) => `How Backyard Hibachi Works in ${city}`,
    footerNote: (city) => `Most ${city} metro bookings confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Book Your KC Date',             desc: 'Request your event online or by phone — tell us your guest count and outdoor space. KC backyard, deck, or patio. Fast confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything',  desc: 'Your certified teppanyaki chef arrives with the full teppan grill, propane, all fresh proteins, sauces, plates, and chopsticks. No prep needed on your end.' },
      { num: '03', title: 'The KC Backyard Performance',   desc: 'Guests gather around the grill for 90–120 minutes of live hibachi — fire tricks, flying shrimp, and every plate cooked to order at the teppan.' },
      { num: '04', title: 'Zero Cleanup for You',          desc: 'Chef packs everything out completely. Your KC backyard is exactly as you left it. You hosted the best dinner on the block.' },
    ],
  },
  // Theme 1 — STL Metro
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} bookings confirmed same-day. Call or text (201) 565-3878 to confirm your date.`,
    steps: [
      { num: '01', title: 'Book Your St. Louis Date',      desc: 'Request your event online or by phone. Tell us your date, guest count, and outdoor space. Fast confirmation, most same-day.' },
      { num: '02', title: 'Chef Arrives Fully Equipped',   desc: 'Certified teppanyaki chef arrives with the full teppan grill, propane, all fresh proteins, vegetables, sauces, plates, and chopsticks.' },
      { num: '03', title: 'Live Hibachi at Your Home',     desc: 'Guests gather on your backyard, patio, or deck for 90–120 minutes of live teppanyaki — fire tricks, flying shrimp, every dish cooked to order.' },
      { num: '04', title: 'Full Cleanup, Nothing for You', desc: 'Chef handles complete teardown and cleanup. Your property stays spotless. You keep the memories.' },
    ],
  },
  // Theme 2 — STL Affluent
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Home`,
    footerNote: (city) => `${city} events book 3–4 weeks ahead in season. Call or text (201) 565-3878 to confirm your date.`,
    steps: [
      { num: '01', title: 'Reserve Your Date',             desc: 'Book online or by phone — tell us your guest count and property setup. Quick confirmation, premium service from the first call.' },
      { num: '02', title: 'Chef Arrives Fully Equipped',   desc: 'Certified chef arrives with the full teppan grill, propane, premium proteins, house-made sauces, plates, and chopsticks. Nothing for you to prepare.' },
      { num: '03', title: 'Live Teppanyaki at Your Home',  desc: 'Guests gather on your terrace, deck, or patio for 90–120 minutes of live hibachi — fire tricks, premium proteins cooked to order, the complete show.' },
      { num: '04', title: 'Zero Cleanup, Perfect Evening', desc: 'Chef packs everything out completely. Your property is immaculate when they leave. You hosted the most memorable dinner of the year.' },
    ],
  },
  // Theme 3 — Ozarks Vacation
  {
    headline:   (city) => `How Mobile Hibachi Works at Your ${city} Lake House`,
    footerNote: (city) => `Ozarks summer dates fill fast. Call or text (201) 565-3878 to confirm your ${city} booking.`,
    steps: [
      { num: '01', title: 'Book From Your Lake House',     desc: 'Reserve your date online or by phone — tell us your lake property address, guest count, and deck or dock patio setup. Fast confirmation.' },
      { num: '02', title: 'Chef Comes to Your Property',   desc: 'Certified hibachi chef travels to your vacation rental with everything: teppan grill, propane, all ingredients, plates, sauces, and utensils.' },
      { num: '03', title: 'Lake House Dinner Show',        desc: 'Guests gather on your deck, dock patio, or yard for 90–120 minutes of live hibachi — fire tricks, grilled-to-order proteins, the full teppanyaki performance.' },
      { num: '04', title: 'Pack-Out and Done',             desc: 'Chef handles complete cleanup and takes everything with them. Your lake house or rental stays spotless and you had the best dinner of the weekend.' },
    ],
  },
  // Theme 4 — University
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} graduation season books fast. Call or text (201) 565-3878 to secure your date.`,
    steps: [
      { num: '01', title: 'Book Your Event',               desc: 'Request your date online or by phone. Tell us your guest count and outdoor space. We confirm quickly, often same-day.' },
      { num: '02', title: 'Chef Arrives with Full Setup',  desc: 'Your certified hibachi chef arrives with everything: grill, propane, all proteins, vegetables, sauces, plates, and chopsticks. No prep needed on your end.' },
      { num: '03', title: 'Live Hibachi Performance',      desc: 'Guests gather around the grill for 90–120 minutes of live teppanyaki — fire tricks, freshly cooked proteins, fried rice, and the full graduation show.' },
      { num: '04', title: 'Chef Handles All Cleanup',      desc: 'Complete teardown and cleanup done by your chef. Your backyard or property stays spotless. You keep the celebration.' },
    ],
  },
  // Theme 5 — Long-tail
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Book Your Event',               desc: 'Request your event online or by phone. Tell us your date, guest count, and outdoor space. Fast confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything',  desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, all fresh proteins, sauces, plates, and chopsticks.' },
      { num: '03', title: 'Live Hibachi Show',             desc: 'Guests gather around the grill for 90–120 minutes of live teppanyaki — fire tricks, flying shrimp, and every dish cooked to order in front of your guests.' },
      { num: '04', title: 'Zero Cleanup for You',          desc: 'Chef handles all cleanup and packs out completely. Your outdoor space is spotless when they leave. You keep the memories.' },
    ],
  },
]

// ── Section variants ──────────────────────────────────────────────────────────
const MO_SECTION_VARIANTS = [
  // Theme 0 — KC Metro
  {
    heroPill:           "Kansas City's Backyard Chef",
    experiencePill:     'Better Than the BBQ Plate',
    experiencePoints:   [
      "No restaurant reservation — your KC backyard is the venue",
      'Certified teppanyaki chef performs exclusively for your group',
      'All of the KC metro fully served — both sides of the state line',
      'Premium proteins, live fire show, complete setup and cleanup',
    ],
    experienceImage:    '/pics/backyard-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Kansas City backyard event`,
    areasPill:          'Serving the KC Metro',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Missouri Communities`,
    areasIntro: [
      (city, state) => `We serve all of the Kansas City metro on both sides of the state line — Lee's Summit, Blue Springs, Independence, Raytown, Overland Park, Lenexa, Leawood, Prairie Village, Liberty, Gladstone, and every neighborhood from Waldo to Brookside to the Plaza.`,
      (city) => `Most KC metro bookings confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your KC Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Reason to Fire Up the Backyard in ${city}`,
    occasionSubtext:       "From backyard birthday dinners to graduation parties and corporate team events, private hibachi is the Kansas City outdoor food experience your guests have never had",
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your Kansas City Hibachi Questions — Answered`,
    testimonialSubheading: 'What Kansas City Metro Hosts Are Saying',
  },
  // Theme 1 — STL Metro
  {
    heroPill:           "St. Louis Metro's Private Chef",
    experiencePill:     'Better Than Any St. Louis Restaurant',
    experiencePoints:   [
      'No reservation required — your backyard or patio is the venue',
      'Certified teppanyaki chef performs exclusively for your group',
      'Full St. Louis metro service — from South City to St. Charles County',
      'Full setup and complete cleanup fully included',
    ],
    experienceImage:    '/pics/hibachi-shot-1.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} St. Louis metro backyard event`,
    areasPill:          'Serving the St. Louis Metro',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding St. Louis Communities`,
    areasIntro: [
      (city, state) => `We serve all of the St. Louis metro — Clayton, Webster Groves, Chesterfield, O'Fallon, St. Charles, Wentzville, Belleville, Edwardsville, Florissant, Kirkwood, and every neighborhood from South City to St. Charles County.`,
      (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your STL Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       "From graduation parties to family milestone dinners, private hibachi is the St. Louis metro backyard upgrade your event deserves",
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi — Common Questions`,
    testimonialSubheading: 'What St. Louis Metro Hosts Are Saying',
  },
  // Theme 2 — STL Affluent
  {
    heroPill:           'Private Estate Dining',
    experiencePill:     'The Outdoor Dinner Your Property Deserves',
    experiencePoints:   [
      'No restaurant battles — your terrace or garden is the venue',
      'Every guest at the same table, same chef, same moment',
      'Certified teppanyaki performance for 90–120 minutes',
      'Premium protein upgrades available for any occasion',
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} estate or affluent suburb property`,
    areasPill:          'Serving St. Louis County & the Metro',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Surrounding Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of St. Louis County — Chesterfield, Kirkwood, Webster Groves, Clayton, Ladue, Town and Country, Ballwin, Wildwood, and every community throughout the county.`,
      (city) => `${city} bookings confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Estate Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Occasion — Book It`,
    occasionSubtext:       "From graduation parties to anniversary estate dinners, private hibachi is the St. Louis County dining experience your property was made for",
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What St. Louis County Hosts Are Saying',
  },
  // Theme 3 — Ozarks Vacation
  {
    heroPill:           'Ozarks Lake House Chef',
    experiencePill:     'Your Lake House Upgrade',
    experiencePoints:   [
      'Chef comes directly to your rental — no Ozarks strip restaurant logistics',
      'All guests at the same outdoor table for the full teppanyaki show',
      'Fire tricks, live cooking, 90–120 minute performance',
      'Full setup and pack-out — lake house or rental stays spotless',
    ],
    experienceImage:    '/pics/mobile-hibachi-2.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} Ozarks lake house or vacation rental`,
    areasPill:          'Serving the Missouri Ozarks',
    areasHeadline:      (city) => `Mobile Hibachi at Your ${city} Rental`,
    areasIntro: [
      (city, state) => `We serve the full Missouri Ozarks — Lake of the Ozarks, Branson, Osage Beach, Camdenton, Lake Ozark, Laurie, Sunrise Beach, and every lake house and vacation rental community in the region.`,
      (city) => `Ozarks summer dates fill weeks in advance. Call or text (201) 565-3878 to confirm your ${city} date now.`,
    ],
    areasButton:           'Check Lake Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       "Bachelorette weekends, birthday lake house parties, family reunions, and Ozarks group dinners — mobile hibachi is the vacation rental dinner that makes the whole trip worth it",
    faqPill:               'Ozarks Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Lake House Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Ozarks Vacation Guests Are Saying',
  },
  // Theme 4 — University
  {
    heroPill:           "Mid-Missouri's Private Chef",
    experiencePill:     'Better Than Any Campus Area Restaurant',
    experiencePoints:   [
      'No graduation weekend reservation battles — your home is the venue',
      'Every guest at the same outdoor table for the full live show',
      'Graduation parties, faculty dinners, and family celebrations a specialty',
      'Full setup and cleanup included — nothing for the host to manage',
    ],
    experienceImage:    '/pics/hibachi-catering-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} graduation party or outdoor event`,
    areasPill:          'Serving Mid-Missouri & Beyond',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of Mid-Missouri`,
    areasIntro: [
      (city, state) => `We serve all of Mid-Missouri — Columbia, Springfield, Jefferson City, Fulton, Rolla, Sedalia, and every community in the region between Kansas City and St. Louis.`,
      (city) => `${city} graduation season books fast. Call or text (201) 565-3878 to secure your date.`,
    ],
    areasButton:           'Book Your Graduation Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone in ${city} Remembers`,
    occasionSubtext:       "Graduation parties, multigenerational family dinners, and university town celebrations — Mid-Missouri celebrates big, and we're built for it",
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Mid-Missouri Hosts Are Saying',
  },
  // Theme 5 — Long-tail
  {
    heroPill:           "Southwest Missouri's Private Chef",
    experiencePill:     'Better Than Any Joplin Restaurant',
    experiencePoints:   [
      'No reservation required — your backyard or patio is the venue',
      'Certified teppanyaki chef performs exclusively for your group',
      'All of Southwest Missouri served',
      'Full setup and complete cleanup fully included',
    ],
    experienceImage:    '/pics/backyard-hibachi-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Southwest Missouri outdoor event`,
    areasPill:          'Serving Joplin & Southwest Missouri',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Southwest Missouri Communities`,
    areasIntro: [
      (city, state) => `We serve Joplin and all of Southwest Missouri — Neosho, Carthage, Webb City, Carl Junction, and every community in the four-state corner region.`,
      (city) => `Most ${city} bookings confirmed within 24 hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Joplin Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Celebration in ${city} — Book It`,
    occasionSubtext:       "From backyard birthday parties to graduation celebrations and family reunions, private hibachi is the Southwest Missouri outdoor dining experience your event deserves",
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Hibachi — Common Questions`,
    testimonialSubheading: 'What Southwest Missouri Hosts Are Saying',
  },
]

// ── City experience image map ─────────────────────────────────────────────────
const MO_CITY_IMAGE_MAP = {
  'kansas-city':        { src: '/pics/backyard-hibachi.jpg',    alt: () => `Private hibachi chef performing at a Kansas City MO backyard event` },
  'st-louis':           { src: '/pics/hibachi-shot-1.jpg',      alt: () => `Private hibachi chef at a St. Louis MO backyard dinner` },
  'chesterfield':       { src: '/pics/hibachi-chef-home.jpg',   alt: () => `Private hibachi chef at a Chesterfield MO estate event` },
  'lee-s-summit':       { src: '/pics/hibachi-catering.jpg',    alt: () => `Private hibachi chef at a Lee's Summit MO backyard event` },
  'o-fallon':           { src: '/pics/hibachi-event.jpg',       alt: () => `Private hibachi chef at an O'Fallon MO outdoor event` },
  'st-charles':         { src: '/pics/hibachi-catering-2.jpg',  alt: () => `Private hibachi chef at a St. Charles MO backyard event` },
  'blue-springs':       { src: '/pics/backyard-hibachi-3.jpg',  alt: () => `Private hibachi chef at a Blue Springs MO backyard event` },
  'lake-of-the-ozarks': { src: '/pics/mobile-hibachi-2.jpg',   alt: () => `Mobile hibachi chef at a Lake of the Ozarks vacation rental` },
  'branson':            { src: '/pics/mobile-hibachi.jpg',      alt: () => `Mobile hibachi chef at a Branson MO vacation rental` },
  'columbia':           { src: '/pics/hibachi-photo-1.jpg',     alt: () => `Private hibachi chef at a Columbia MO Mizzou graduation party` },
  'springfield':        { src: '/pics/hibachi-colorado-home.jpg', alt: () => `Private hibachi chef at a Springfield MO outdoor event` },
  'kirkwood':           { src: '/pics/hibachi-shot-2.jpg',      alt: () => `Private hibachi chef at a Kirkwood MO backyard event` },
  'joplin':             { src: '/pics/hibachi-photo-2.jpg',     alt: () => `Private hibachi chef at a Joplin MO backyard event` },
}

// ── Support images for profile cities ────────────────────────────────────────
const MO_SUPPORT_IMAGES = {
  'kansas-city': {
    testimonial: { src: '/pics/hibachi-event.jpg',        alt: () => `Kansas City backyard hibachi dinner with guests gathered around the grill`,    caption: 'KC backyard dining, elevated',         trustBadge: '5.0 Average Rating',                        intro: () => `Kansas City hosts — from the Plaza to Leawood backyards — choose private hibachi for birthday dinners, graduation parties, and corporate events that go far beyond a restaurant reservation. Our certified chefs travel to your home with the full teppanyaki setup and complete cleanup, even in the BBQ capital of the world. Here's what Kansas City hosts are saying:` },
    cta:         { src: '/pics/hero-4.jpg',               alt: () => `Private hibachi chef performing in Kansas City MO`,                            caption: 'Your KC backyard event starts here' },
  },
  'st-louis': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: () => `Graduation hibachi party in St. Louis MO`,                                    caption: 'St. Louis graduation season',           trustBadge: 'Trusted by Local Families',                 intro: () => `St. Louis hosts — from Soulard to Ladue, Clayton to Forest Park — choose private hibachi for graduation dinners, anniversary parties, and corporate celebrations that match the Gateway City's high standards. Our certified chefs bring the full teppanyaki experience directly to your backyard or patio with complete cleanup included. Here's what St. Louis hosts are saying:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',   alt: () => `Private hibachi chef performing in St. Louis MO`,                             caption: 'Your St. Louis event starts here' },
  },
  'chesterfield': {
    testimonial: { src: '/pics/hibachi-colorado-home.jpg', alt: () => `Private hibachi dinner at a Chesterfield MO estate`,                         caption: 'Chesterfield private dining',           trustBadge: 'Hundreds of Private Events',                intro: () => `Chesterfield hosts set the bar for private entertaining in St. Louis County, and our certified teppanyaki chefs meet it every time — bringing a full live-cooking performance to your estate, deck, or garden. From milestone anniversary dinners to upscale corporate gatherings, we handle setup, performance, and complete cleanup. Here's what Chesterfield hosts have found:` },
    cta:         { src: '/pics/private-hibachi.jpg',      alt: () => `Private hibachi chef at a Chesterfield MO home`,                              caption: 'The Chesterfield private dining standard' },
  },
  'lee-s-summit': {
    testimonial: { src: '/pics/backyard-hibachi-2.jpg',   alt: () => `Backyard hibachi party in Lee's Summit MO`,                                   caption: "Lee's Summit graduation season",        trustBadge: 'Thousands of Happy Guests',                 intro: () => `Lee's Summit families — right on the Johnson County border and deep in KC's most celebrated suburbs — choose private hibachi for graduation parties, milestone birthdays, and backyard entertaining that rivals the best nights in the metro. Our certified chefs travel directly to your home with everything needed for a complete teppanyaki experience. Here's what Lee's Summit hosts are saying:` },
    cta:         { src: '/pics/hero-4.jpg',               alt: () => `Private hibachi chef performing in Lee's Summit MO`,                          caption: "Your Lee's Summit backyard event" },
  },
  'o-fallon': {
    testimonial: { src: '/pics/hibachi-shot-1.jpg',       alt: () => `Graduation hibachi party in O'Fallon MO`,                                     caption: "O'Fallon family celebrations",          trustBadge: 'Highly Rated by Local Hosts',               intro: () => `O'Fallon families in St. Charles County choose private hibachi for graduation dinners, birthday parties, and community celebrations that turn any backyard into the hottest event of the season. Our certified chefs travel to your home with the full teppanyaki setup and leave with a spotless space. Here's why O'Fallon hosts keep coming back:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',   alt: () => `Private hibachi chef performing in O'Fallon MO`,                              caption: "Your O'Fallon backyard event" },
  },
  'st-charles': {
    testimonial: { src: '/pics/hibachi-shot-2.jpg',       alt: () => `Family hibachi dinner in St. Charles MO`,                                     caption: 'St. Charles family gatherings',         trustBadge: 'Unforgettable Private Dining Experiences',  intro: () => `St. Charles hosts — steps from the historic Missouri River district and at the heart of one of the state's fastest-growing communities — choose private hibachi for family milestones, birthday parties, and celebrations worth remembering. Our certified chefs bring the full teppanyaki experience straight to your backyard. See what St. Charles hosts are saying:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',   alt: () => `Private hibachi chef performing in St. Charles MO`,                           caption: 'Your St. Charles backyard event' },
  },
  'blue-springs': {
    testimonial: { src: '/pics/hibachi-catering.jpg',     alt: () => `Backyard hibachi party in Blue Springs MO`,                                   caption: 'Blue Springs backyard events',          trustBadge: "Missouri's Favorite Hibachi Experience",   intro: () => `Blue Springs hosts in the KC eastern metro know how to throw a backyard event — and private hibachi takes graduation parties, milestone birthdays, and family celebrations to an entirely new level. Our certified chefs travel directly to your home with full setup and cleanup so you can simply enjoy the show. Here's why Blue Springs hosts keep coming back:` },
    cta:         { src: '/pics/hero-4.jpg',               alt: () => `Private hibachi chef performing in Blue Springs MO`,                          caption: 'Your Blue Springs backyard event' },
  },
  'lake-of-the-ozarks': {
    testimonial: { src: '/pics/mobile-hibachi.jpg',       alt: () => `Lake house hibachi at a Lake of the Ozarks vacation rental`,                  caption: 'Lake of the Ozarks lake house hibachi', trustBadge: 'Five-Star Entertainment & Dining',          intro: () => `Lake of the Ozarks vacation groups — from Osage Beach to Camdenton — choose private hibachi at the lake house over crowded strip restaurants every time. Our certified chefs travel to your vacation rental or lake property with everything needed for a full teppanyaki experience and complete cleanup. Here's what Ozarks vacation guests are saying:` },
    cta:         { src: '/pics/hibachi-virginia-beach.jpg', alt: () => `Mobile hibachi chef at a Lake of the Ozarks lake property`,                 caption: 'The lake house dinner of the summer' },
  },
  'branson': {
    testimonial: { src: '/pics/mobile-hibachi-2.jpg',     alt: () => `Vacation rental hibachi in Branson MO`,                                       caption: 'Branson vacation rental hibachi',       trustBadge: '5.0 Average Rating',                        intro: () => `Branson vacation groups choose private hibachi at the rental cabin over fighting for reservations on the Strip every time. Our certified chefs travel to your Branson property with the complete teppanyaki setup and leave everything spotless so you can keep the party going. Here's what Branson vacation guests are saying:` },
    cta:         { src: '/pics/hibachi-virginia-beach.jpg', alt: () => `Mobile hibachi chef at a Branson MO vacation rental`,                       caption: 'Your Branson vacation dinner' },
  },
  'columbia': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: () => `Mizzou graduation hibachi party in Columbia MO`,                              caption: 'Columbia graduation celebrations',      trustBadge: 'Trusted by Local Families',                 intro: () => `Columbia families celebrating Mizzou graduations, Tiger game weekends, and backyard milestones choose private hibachi to give their guests an experience no campus-area restaurant can match. Our certified chefs bring the complete teppanyaki setup to your Columbia home and handle every bit of cleanup. See what Columbia hosts and Tiger families are saying:` },
    cta:         { src: '/pics/hibachi-colorado.jpg',     alt: () => `Private hibachi chef at a Columbia MO graduation party`,                      caption: 'Columbia graduation season standard' },
  },
  'springfield': {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',      alt: () => `Graduation hibachi party in Springfield MO`,                                  caption: 'Springfield graduation celebrations',   trustBadge: 'Hundreds of Private Events',                intro: () => `Springfield families — gateway to the Ozarks and home to Missouri State University — choose private hibachi for graduation parties, community milestones, and backyard celebrations that Southwest Missouri hosts talk about for years. Our certified chefs travel to your Springfield home with the full teppanyaki setup and complete cleanup. Here's what Springfield hosts are saying:` },
    cta:         { src: '/pics/hibachi-colorado.jpg',     alt: () => `Private hibachi chef at a Springfield MO outdoor event`,                      caption: 'Your Springfield celebration' },
  },
  'kirkwood': {
    testimonial: { src: '/pics/hero-3.jpg',               alt: () => `Private hibachi dinner at a Kirkwood MO backyard`,                            caption: 'Kirkwood backyard dining',             trustBadge: 'Highly Rated by Local Hosts',               intro: () => `Kirkwood hosts — in one of St. Louis County's most charming and storied suburbs, just steps from the iconic train station — choose private hibachi for family milestone dinners, anniversary celebrations, and sophisticated backyard events. Our certified chefs bring the complete teppanyaki performance to your Kirkwood home. Here's what they've found:` },
    cta:         { src: '/pics/private-hibachi.jpg',      alt: () => `Private hibachi chef at a Kirkwood MO home`,                                  caption: 'The Kirkwood private dining standard' },
  },
  'joplin': {
    testimonial: { src: '/pics/backyard-hibachi.jpg',     alt: () => `Backyard hibachi party in Joplin MO`,                                         caption: 'Joplin backyard celebrations',          trustBadge: 'Thousands of Happy Guests',                 intro: () => `Joplin hosts — Southwest Missouri's hub near the Spiva Arts district and the crossroads of the four-state area — choose private hibachi for milestone birthdays, graduation celebrations, and community gatherings that go far beyond anything a local restaurant can offer. Our certified chefs travel to your home with the complete teppanyaki setup and full cleanup. Here's what Joplin hosts are saying:` },
    cta:         { src: '/pics/hero-1.jpg',               alt: () => `Private hibachi chef performing in Joplin MO`,                                caption: 'Your Joplin backyard event' },
  },
}

// ── Support fallbacks (per theme, for future expansion cities) ───────────────
const MO_SUPPORT_FALLBACKS = [
  { // Theme 0 — KC Metro
    testimonial: { src: '/pics/hibachi-event.jpg',         alt: (city) => `Kansas City metro hibachi event in ${city}, MO`,    caption: 'KC metro hosts agree',             trustBadge: 'Unforgettable Private Dining Experiences',  intro: (city) => `${city} hosts in the Kansas City metro choose private hibachi for birthday parties, graduation dinners, and backyard events that go far beyond what any restaurant in the area can deliver. Our certified chefs travel to your home with the full teppanyaki setup — even in the BBQ capital of the world, private hibachi steals the show. Here's what KC metro hosts are saying:` },
    cta:         { src: '/pics/hero-4.jpg',                alt: (city) => `Private hibachi chef in ${city}, MO`,               caption: 'Your KC metro event' },
  },
  { // Theme 1 — STL Metro
    testimonial: { src: '/pics/hibachi-catering-2.jpg',    alt: (city) => `St. Louis metro hibachi event in ${city}, MO`,     caption: 'St. Louis metro hosts agree',       trustBadge: "Missouri's Favorite Hibachi Experience",   intro: (city) => `${city} hosts in the Gateway City metro choose private hibachi for graduation celebrations, family birthday dinners, and events that match St. Louis's high standards for a great night out. Our certified chefs bring the complete teppanyaki experience to your backyard with setup and cleanup fully included. See what ${city} hosts are saying:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',    alt: (city) => `Private hibachi chef in ${city}, MO`,               caption: 'Your St. Louis metro event' },
  },
  { // Theme 2 — STL Affluent
    testimonial: { src: '/pics/hibachi-colorado-home.jpg', alt: (city) => `Private hibachi event in ${city}, MO`,             caption: 'St. Louis County hosts agree',      trustBadge: 'Five-Star Entertainment & Dining',          intro: (city) => `${city} hosts in St. Louis County set a high bar for private entertaining, and our certified teppanyaki chefs clear it every time. From estate dinner parties to milestone graduation celebrations, we bring a live culinary performance and complete cleanup directly to your property. Here's what ${city} hosts have found:` },
    cta:         { src: '/pics/private-hibachi.jpg',       alt: (city) => `Private hibachi chef in ${city}, MO`,               caption: 'Your private dining event' },
  },
  { // Theme 3 — Ozarks Vacation
    testimonial: { src: '/pics/mobile-hibachi.jpg',        alt: (city) => `Ozarks lake house hibachi event near ${city}, MO`, caption: 'Ozarks vacation guests agree',      trustBadge: '5.0 Average Rating',                        intro: (city) => `${city} vacation groups in the Ozarks choose private hibachi at the lake house or cabin over busy resort restaurants every time. Our certified chefs travel to your vacation rental with the full teppanyaki setup and leave everything spotless so the night keeps going. Here's what Ozarks vacation guests near ${city} are saying:` },
    cta:         { src: '/pics/hibachi-virginia-beach.jpg',alt: (city) => `Mobile hibachi chef near ${city}, MO`,              caption: 'The Ozarks lake house dinner' },
  },
  { // Theme 4 — University
    testimonial: { src: '/pics/hibachi-catering-2.jpg',    alt: (city) => `Graduation hibachi party in ${city}, MO`,          caption: 'Mid-Missouri hosts agree',          trustBadge: 'Trusted by Local Families',                 intro: (city) => `${city} families celebrating graduations, Tiger game weekends, and backyard milestones choose private hibachi to give their guests an experience no Mid-Missouri restaurant can match. Our certified chefs bring the complete teppanyaki setup to your home and handle every bit of cleanup. Here's what ${city} hosts and families are saying:` },
    cta:         { src: '/pics/hibachi-colorado.jpg',      alt: (city) => `Private hibachi chef in ${city}, MO`,               caption: 'Your Mid-Missouri celebration' },
  },
  { // Theme 5 — Long-tail
    testimonial: { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Backyard hibachi event in ${city}, MO`,            caption: 'Southwest Missouri hosts agree',    trustBadge: 'Hundreds of Private Events',                intro: (city) => `${city} hosts in Southwest Missouri choose private hibachi for milestone birthdays, graduation parties, and community celebrations that go far beyond anything a local restaurant can deliver. Our certified chefs travel to your home with the complete teppanyaki setup and full cleanup so you can focus on your guests. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/hero-1.jpg',                alt: (city) => `Private hibachi chef in ${city}, MO`,               caption: 'Your Southwest Missouri event' },
  },
]

// ── Blog posts (6 theme arrays × 3 posts) ─────────────────────────────────────
const MO_BLOG_POSTS = [
  // Theme 0 — KC Metro
  [
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Kansas City Hibachi at Home vs. Restaurant: The Honest Comparison',               excerpt: 'KC has excellent BBQ and great restaurants. Here\'s why private hibachi at your KC backyard beats restaurant hibachi for group events.', date: '2025-05-01' },
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Kansas City Guests Will Never Forget',       excerpt: 'From KC backyard birthday dinners to graduation celebrations — how to host a private hibachi party that outclasses any restaurant in the metro.', date: '2025-04-15' },
    { slug: 'hibachi-catering-corporate-events',    title: 'Why Hibachi Catering Works for Kansas City Corporate Events',                     excerpt: 'Corporate team dinners, client entertainment, and KC metro professional events — why a private hibachi chef beats every other format.', date: '2025-03-20' },
  ],
  // Theme 1 — STL Metro
  [
    { slug: 'hibachi-birthday-party-ideas',         title: 'Hibachi Birthday and Graduation Party Ideas for St. Louis Metro Events',         excerpt: 'From south city backyards to St. Charles County patios — how St. Louis families host private hibachi parties that outclass any restaurant.', date: '2025-04-20' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party in the St. Louis Metro',                   excerpt: 'Everything St. Louis hosts need before the private hibachi chef arrives at your backyard or patio.', date: '2025-03-10' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Private Hibachi vs. Restaurant Dining for St. Louis Group Events: The Answer',   excerpt: 'Why St. Louis graduation parties and family celebrations choose private hibachi over restaurant dining every spring.', date: '2025-02-05' },
  ],
  // Theme 2 — STL Affluent
  [
    { slug: 'hibachi-birthday-party-ideas',         title: 'Hibachi Milestone Party Ideas for Chesterfield and Kirkwood Events',             excerpt: 'From estate anniversary dinners to graduation parties — how to host a private hibachi event at your St. Louis County property.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Private Hibachi Event at Your St. Louis County Home',             excerpt: 'Everything Chesterfield and Kirkwood hosts need before the private hibachi chef arrives at your terrace, deck, or garden.', date: '2025-02-25' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'Private Hibachi Chef Cost in the St. Louis Metro: What County Hosts Pay',        excerpt: 'A clear pricing breakdown for St. Louis County private hibachi events, including premium protein upgrades for estate events.', date: '2025-01-15' },
  ],
  // Theme 3 — Ozarks Vacation
  [
    { slug: 'hibachi-bachelorette-party',           title: 'Ozarks Bachelorette Weekend: Why Hibachi at the Lake House Wins',               excerpt: 'Lake of the Ozarks, Branson — why Ozarks bachelorette groups keep choosing private hibachi over Bagnell Dam restaurants.', date: '2025-03-18' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect at Your Ozarks Lake House Hibachi Event',                        excerpt: 'From booking to cleanup — what happens when a private hibachi chef arrives at your Missouri lake house or vacation rental.', date: '2025-01-20' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Ozarks Lake House Hibachi vs. Strip Restaurants: The Honest Comparison',         excerpt: 'Why Ozarks vacation rental guests are choosing private hibachi over packed lake town restaurants every summer.', date: '2025-02-10' },
  ],
  // Theme 4 — University
  [
    { slug: 'hibachi-birthday-party-ideas',         title: 'Hibachi Party Ideas for Mizzou and Missouri State Graduation Season',           excerpt: 'From Columbia backyards to Springfield graduation dinners — how Missouri university families host hibachi during graduation season.', date: '2025-04-02' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'Planning a Backyard Hibachi Party in Mid-Missouri: Full Checklist',             excerpt: 'Everything Columbia and Springfield hosts need before the private hibachi chef arrives for graduation season.', date: '2025-03-01' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant in Mid-Missouri: The Honest Answer',             excerpt: 'Why Mid-Missouri graduation parties choose private hibachi over campus area restaurants every spring.', date: '2025-01-25' },
  ],
  // Theme 5 — Long-tail
  [
    { slug: 'hibachi-birthday-party-ideas',         title: 'Hibachi Birthday and Graduation Party Ideas for Joplin Events',                 excerpt: 'How Southwest Missouri families host private hibachi parties that outclass any local restaurant experience.', date: '2025-03-25' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost in Joplin and Southwest Missouri?',   excerpt: 'Complete pricing guide for Joplin hibachi events — per-person rates, group size breakdowns, and what\'s included.', date: '2025-02-15' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect at Your Joplin Private Hibachi Event',                          excerpt: 'From booking to cleanup — everything Southwest Missouri hosts need to know about a private hibachi chef at home.', date: '2025-01-12' },
  ],
]

// ── Major cities map ──────────────────────────────────────────────────────────
const MO_MAJOR_CITIES = {
  // ── Theme 0 — KC Metro ──────────────────────────────────────────────────────
  'kansas-city':        { v: 0, profileIdx: 0,  nearby: ["Lee's Summit", 'Blue Springs', 'Independence', 'Raytown', 'Gladstone', 'Liberty'] },
  'lee-s-summit':       { v: 0, profileIdx: 3,  nearby: ['Blue Springs', 'Kansas City', 'Raytown', 'Independence', 'Grandview'] },
  'blue-springs':       { v: 0, profileIdx: 6,  nearby: ["Lee's Summit", 'Kansas City', 'Independence', 'Raytown', 'Grain Valley'] },
  // ── Theme 1 — STL Metro ─────────────────────────────────────────────────────
  'st-louis':           { v: 1, profileIdx: 1,  nearby: ['Clayton', 'Kirkwood', 'Webster Groves', 'Chesterfield', "O'Fallon"] },
  'o-fallon':           { v: 1, profileIdx: 4,  nearby: ['St. Charles', 'Wentzville', 'St. Peters', 'St. Louis', 'Florissant'] },
  'st-charles':         { v: 1, profileIdx: 5,  nearby: ["O'Fallon", 'St. Peters', 'Wentzville', 'St. Louis', 'Chesterfield'] },
  // ── Theme 2 — STL Affluent ──────────────────────────────────────────────────
  'chesterfield':       { v: 2, profileIdx: 2,  nearby: ['Wildwood', 'Ballwin', 'Ellisville', 'St. Louis', 'Kirkwood'] },
  'kirkwood':           { v: 2, profileIdx: 11, nearby: ['Webster Groves', 'Clayton', 'Ballwin', 'Chesterfield', 'St. Louis'] },
  // ── Theme 3 — Ozarks Vacation ───────────────────────────────────────────────
  'lake-of-the-ozarks': { v: 3, profileIdx: 7,  nearby: ['Osage Beach', 'Camdenton', 'Lake Ozark', 'Eldon'] },
  'branson':            { v: 3, profileIdx: 8,  nearby: ['Hollister', 'Ozark', 'Nixa', 'Kimberling City'] },
  // ── Theme 4 — University ────────────────────────────────────────────────────
  'columbia':           { v: 4, profileIdx: 9,  nearby: ['Jefferson City', 'Fulton', 'Moberly', 'Centralia'] },
  'springfield':        { v: 4, profileIdx: 10, nearby: ['Nixa', 'Ozark', 'Republic', 'Bolivar', 'Branson'] },
  // ── Theme 5 — Long-tail ─────────────────────────────────────────────────────
  'joplin':             { v: 5, profileIdx: 12, nearby: ['Neosho', 'Carthage', 'Webb City', 'Carl Junction'] },
}

// ── Display name overrides ────────────────────────────────────────────────────
const MO_CITY_DISPLAY_NAMES = {
  'kansas-city':        'Kansas City',
  'st-louis':           'St. Louis',
  'lee-s-summit':       "Lee's Summit",
  'o-fallon':           "O'Fallon",
  'st-charles':         'St. Charles',
  'blue-springs':       'Blue Springs',
  'lake-of-the-ozarks': 'Lake of the Ozarks',
}

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const MO_PROFILE_H1_PREFIXES = [
  'Backyard Hibachi Party in',  // 0  — Kansas City
  'Hibachi at Home in',         // 1  — St. Louis
  'Private Hibachi Chef in',    // 2  — Chesterfield
  'Private Hibachi Chef in',    // 3  — Lee's Summit
  'Hibachi at Home in',         // 4  — O'Fallon
  'Hibachi at Home in',         // 5  — St. Charles
  'Hibachi Catering in',        // 6  — Blue Springs
  'Mobile Hibachi at',          // 7  — Lake of the Ozarks
  'Mobile Hibachi in',          // 8  — Branson
  'Private Hibachi Chef in',    // 9  — Columbia
  'Hibachi at Home in',         // 10 — Springfield
  'Hibachi at Home in',         // 11 — Kirkwood
  'Hibachi Catering in',        // 12 — Joplin
]

const MO_THEME_H1_PREFIXES = [
  'Backyard Hibachi Party in',  // v=0 KC Metro (expansion fallback)
  'Hibachi at Home in',         // v=1 STL Metro (expansion fallback)
  'Private Hibachi Chef in',    // v=2 STL Affluent (expansion fallback)
  'Mobile Hibachi in',          // v=3 Ozarks (expansion fallback)
  'Hibachi at Home in',         // v=4 University (expansion fallback)
  'Hibachi Catering in',        // v=5 Long-tail (expansion fallback)
]

// ── Custom meta — all 13 MO cities ───────────────────────────────────────────
const MO_CUSTOM_META = {
  'kansas-city': {
    title: 'Backyard Hibachi Party in Kansas City, Missouri | Private Hibachi Chef | Hibachi Connect',
    desc:  'Book a certified teppanyaki chef for your Kansas City backyard, deck, or outdoor space. Full setup, live cooking performance, complete cleanup. $60/adult. Serving all of KC and the metro area.',
  },
  'st-louis': {
    title: 'Hibachi at Home in St. Louis, Missouri | Private Hibachi Chef | Hibachi Connect',
    desc:  'Book a certified teppanyaki chef for your St. Louis backyard or outdoor space. Perfect for graduation parties, birthday dinners, and family gatherings. $60/adult. Serving all of St. Louis and the metro.',
  },
  'chesterfield': {
    title: 'Private Hibachi Chef in Chesterfield, Missouri | Estate & Luxury Outdoor Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef for your Chesterfield home, terrace, or outdoor entertaining space. Premium proteins, live performance, complete cleanup. $60/adult. Serving Chesterfield and St. Louis County.',
  },
  'lee-s-summit': {
    title: "Private Hibachi Chef in Lee's Summit, Missouri | At-Home Teppanyaki | Hibachi Connect",
    desc:  "Book a certified hibachi chef for your Lee's Summit home or backyard. Perfect for graduation parties, anniversary dinners, and birthday celebrations. $60/adult. Serving Lee's Summit and the KC metro.",
  },
  'o-fallon': {
    title: "Hibachi at Home in O'Fallon, Missouri | Private Hibachi Chef | Hibachi Connect",
    desc:  "Book a certified teppanyaki chef for your O'Fallon home or backyard. Perfect for graduation parties, family gatherings, and birthday dinners. $60/adult. Serving O'Fallon and St. Charles County.",
  },
  'st-charles': {
    title: 'Hibachi at Home in St. Charles, Missouri | Private Hibachi Chef | Hibachi Connect',
    desc:  'Book a certified teppanyaki chef for your St. Charles home or backyard. Perfect for graduation parties, family gatherings, and milestone events. $60/adult. Serving St. Charles and the Missouri River Valley.',
  },
  'blue-springs': {
    title: 'Hibachi Catering in Blue Springs, Missouri | Private Hibachi Chef | Hibachi Connect',
    desc:  'Book hibachi catering for your Blue Springs graduation party, birthday dinner, or corporate event. Certified teppanyaki chef, full setup, complete cleanup. $60/adult. Serving Blue Springs and the KC metro.',
  },
  'lake-of-the-ozarks': {
    title: 'Mobile Hibachi at Lake of the Ozarks | Lake House Private Chef | Hibachi Connect',
    desc:  'A certified mobile hibachi chef at your Lake of the Ozarks vacation rental or lake house. No restaurant reservations — full setup, live performance, complete cleanup. $60/adult. Book your Ozarks date now.',
  },
  'branson': {
    title: 'Mobile Hibachi in Branson, Missouri | Vacation Rental Private Chef | Hibachi Connect',
    desc:  'A certified hibachi chef at your Branson vacation rental or cabin. Perfect for group weekends, family reunions, and birthday trips. $60/adult. Serving Branson and the Missouri Ozarks.',
  },
  'columbia': {
    title: 'Private Hibachi Chef in Columbia, Missouri | Mizzou Graduation & Private Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef for your Columbia home or backyard. Perfect for Mizzou graduation parties, faculty dinners, and family celebrations. $60/adult. Serving Columbia and Mid-Missouri.',
  },
  'springfield': {
    title: 'Hibachi at Home in Springfield, Missouri | Private Hibachi Chef | Hibachi Connect',
    desc:  'Book a certified teppanyaki chef for your Springfield home or backyard. Perfect for Missouri State graduation parties, birthday dinners, and family gatherings. $60/adult. Serving Springfield and Mid-Missouri.',
  },
  'kirkwood': {
    title: 'Hibachi at Home in Kirkwood, Missouri | Private Hibachi Chef | Hibachi Connect',
    desc:  'Book a certified teppanyaki chef for your Kirkwood home, deck, or outdoor space. Perfect for graduation parties, anniversary dinners, and milestone celebrations. $60/adult. Serving Kirkwood and St. Louis County.',
  },
  'joplin': {
    title: 'Hibachi Catering in Joplin, Missouri | Private Hibachi Chef | Hibachi Connect',
    desc:  'Book hibachi catering for your Joplin birthday party, graduation celebration, or family reunion. Certified teppanyaki chef, full setup, complete cleanup. $60/adult. Serving Joplin and Southwest Missouri.',
  },
}

// ── Closing variants (MO generic 124–129) ─────────────────────────────────────
export const MO_CLOSING_VARIANTS = [
  // 124 — KC Metro
  {
    headline: (city) => `Your ${city} Backyard Event Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `KC metro summer weekends book 3–4 weeks out. Graduation season fills fastest — check your date now.`,
  },
  // 125 — STL Metro
  {
    headline: (city) => `${city}'s Best Outdoor Celebration — Book It`,
    sub:      (city) => `A certified teppanyaki chef for your ${city} backyard or patio. All ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `St. Louis metro graduation season (May–June) fills fast. Reserve your date now.`,
  },
  // 126 — STL Affluent
  {
    headline: (city) => `${city}'s Most Memorable Dinner — Book Yours`,
    sub:      (city) => `A certified hibachi chef at your ${city} property. Premium ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `St. Louis County graduation and summer weekends fill 3–4 weeks out. Reserve your date now.`,
  },
  // 127 — Ozarks Vacation
  {
    headline: (city) => `The Lake House Dinner Your ${city} Weekend Needs`,
    sub:      (city) => `A mobile hibachi chef comes to your ${city} rental — grill, ingredients, full show, and complete cleanup. From $60 per adult.`,
    urgency:  `Ozarks summer season books 4–6 weeks ahead. Confirm your lake house date before it fills.`,
  },
  // 128 — University
  {
    headline: (city) => `${city}'s Best Graduation Dinner — Book It`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `Graduation season in Mid-Missouri books fast — confirm your date now.`,
  },
  // 129 — Long-tail
  {
    headline: (city) => `Your ${city} Event Starts Here`,
    sub:      (city) => `A certified teppanyaki chef for your ${city} backyard or outdoor space. All ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Weekend dates fill 2–3 weeks out. Reserve your date now.`,
  },
]

// ── City-specific closings (MO city-specific 130–142) ─────────────────────────
export const MO_CITY_CLOSINGS = [
  // 130 — Kansas City (profileIdx 0)
  {
    headline: () => `Kansas City's Backyard Hibachi Night — Book It`,
    sub:      () => `A certified teppanyaki chef for your KC backyard, deck, or outdoor venue. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `KC summer weekends book 3–4 weeks out. Graduation season fills fastest — reserve now.`,
  },
  // 131 — St. Louis (profileIdx 1)
  {
    headline: () => `St. Louis Graduation Season — Don't Wait`,
    sub:      () => `A certified hibachi chef comes to your St. Louis home or outdoor space. All ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `St. Louis graduation season (May–June) fills fast. Check your date now.`,
  },
  // 132 — Chesterfield (profileIdx 2)
  {
    headline: () => `Chesterfield's Private Dining Standard — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Chesterfield property. Hand-selected proteins, live performance, complete cleanup. From $60/adult. Premium upgrades available.`,
    urgency:  `Chesterfield events book 3–4 weeks ahead in season. Reserve your date now.`,
  },
  // 133 — Lee's Summit (profileIdx 3)
  {
    headline: () => `Lee's Summit Graduation Season — Reserve Your Date`,
    sub:      () => `A certified hibachi chef at your Lee's Summit home or backyard. All ingredients, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Lee's Summit graduation weekends book 3–4 weeks out. Reserve your KC metro date now.`,
  },
  // 134 — O'Fallon (profileIdx 4)
  {
    headline: () => `O'Fallon's Best Outdoor Dinner — Book It`,
    sub:      () => `A certified hibachi chef at your O'Fallon home or outdoor space. All proteins, live performance, complete cleanup. From $60/adult.`,
    urgency:  `O'Fallon graduation season and summer weekends book 2–3 weeks ahead. Reserve now.`,
  },
  // 135 — St. Charles (profileIdx 5)
  {
    headline: () => `The St. Charles Dinner Your Celebration Deserves`,
    sub:      () => `A certified teppanyaki chef at your St. Charles home or backyard. Full setup, all proteins, complete cleanup. From $60/adult.`,
    urgency:  `St. Charles graduation season and summer events book 2–3 weeks ahead. Reserve now.`,
  },
  // 136 — Blue Springs (profileIdx 6)
  {
    headline: () => `Blue Springs Hibachi Catering — Reserve Your Date`,
    sub:      () => `A certified hibachi chef for your Blue Springs graduation party, birthday dinner, or corporate event. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Blue Springs and KC metro east events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 137 — Lake of the Ozarks (profileIdx 7)
  {
    headline: () => `The Lake of the Ozarks Dinner Everyone Talks About — Book It`,
    sub:      () => `A certified mobile hibachi chef at your Lake of the Ozarks rental — grill, ingredients, full show, complete cleanup. From $60/adult.`,
    urgency:  `Ozarks summer dates fill 4–6 weeks out. Reserve yours before the season fills.`,
  },
  // 138 — Branson (profileIdx 8)
  {
    headline: () => `Your Branson Weekend Just Found Its Best Night`,
    sub:      () => `A certified mobile hibachi chef at your Branson vacation rental. Full setup, full show, complete cleanup. From $60/adult.`,
    urgency:  `Branson summer weekends fill 4–5 weeks out. Check availability now.`,
  },
  // 139 — Columbia (profileIdx 9)
  {
    headline: () => `Columbia Graduation Season — Don't Wait`,
    sub:      () => `When every restaurant near campus is booked, we come to you. A certified hibachi chef at your Columbia home or backyard. From $60/adult.`,
    urgency:  `Mizzou graduation weekends book 4–5 weeks out. Reserve your Tiger season date now.`,
  },
  // 140 — Springfield (profileIdx 10)
  {
    headline: () => `Springfield Graduation Season — Reserve Your Date`,
    sub:      () => `A certified hibachi chef comes to your Springfield home or backyard. Perfect for Missouri State graduation parties and family celebrations. From $60/adult.`,
    urgency:  `Springfield graduation weekends book 3–4 weeks ahead. Confirm your date now.`,
  },
  // 141 — Kirkwood (profileIdx 11)
  {
    headline: () => `The Kirkwood Dinner Your Property Deserves — Book It`,
    sub:      () => `A certified teppanyaki chef at your Kirkwood home, deck, or garden. Full setup, fresh proteins, complete cleanup. From $60/adult.`,
    urgency:  `Kirkwood graduation season and summer events book 3–4 weeks ahead. Reserve now.`,
  },
  // 142 — Joplin (profileIdx 12)
  {
    headline: () => `Joplin's Best Outdoor Celebration — Book It`,
    sub:      () => `A certified hibachi chef for your Joplin backyard or outdoor space. All ingredients, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Joplin weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
]

// ── Intro variants (MO generic 124–129) ───────────────────────────────────────
export const MO_INTRO_VARIANTS = [
  // 124 — KC Metro (generic)
  {
    headline: (city) => `Backyard Hibachi Party in ${city}: The Kansas City Backyard Dinner Done Right`,
    opening:  (city, state) =>
      `Kansas City is built around the backyard. Not just the BBQ competition circuits that run through every park and parking lot in the metro, not just the Gates vs. Arthur Bryant's debate that goes on at every office, but the actual culture of outdoor entertaining — the deck built specifically for groups, the neighbors who know your name because the gate is always open. A private backyard hibachi party in ${city} brings a certified teppanyaki chef to that backyard with a completely different fire performance than you've been running. Same outdoor culture. Entirely different food.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events up to 60+. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} weekend events book 3–4 weeks out during peak season. Starting at $60 per adult, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of the Kansas City metro on both sides of the state line.`,
  },
  // 125 — STL Metro (generic)
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for the St. Louis Metro`,
    opening:  (city, state) =>
      `${city} doesn't need to go downtown for a good dinner. The established neighborhoods, the residential backyards and patios that were built for outdoor entertaining, the community that has been hosting the right way since before the Arch was finished — private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that turns any graduation party, birthday dinner, or neighborhood gathering into the best evening of the year without anyone needing to fight for parking or wait for a table.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your outdoor space is spotless when the chef leaves.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out. Graduation season (May–June) is our most competitive booking window — reserve 4–5 weeks ahead for any Saturday event. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of the St. Louis metro.`,
  },
  // 126 — STL Affluent (generic)
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Estate Dining for St. Louis County`,
    opening:  (city, state) =>
      `${city} sets the standard for private entertaining in St. Louis County. The estate homes and established residential properties here were designed for exactly this kind of evening — the stone terrace, the garden below, the backyard that was professionally landscaped for a reason. Private hibachi in ${city} brings a certified teppanyaki chef to your property with the full setup, hand-selected premium proteins, and a live cooking performance that earns its place at a ${city} outdoor table. The chef comes to you. Your property becomes the venue.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and scallops available as premium upgrades, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, deck, or garden. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your ${city} property is immaculate when the chef leaves.`,
    closing:  (city, state) =>
      `${city} backyard evenings book 3–4 weeks ahead. Graduation season (May–June) fills fastest. Serving ${city} and all of St. Louis County including Chesterfield, Kirkwood, Webster Groves, Clayton, and Ladue. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available.`,
  },
  // 127 — Ozarks Vacation (generic)
  {
    headline: (city) => `Mobile Hibachi in ${city}: The Ozarks Lake House Dinner Your Weekend Deserves`,
    opening:  (city, state) =>
      `The Missouri Ozarks is where the state comes to reset. From Memorial Day to Labor Day, the lake fills with pontoons and houseboats, the dock patios get the morning sun, and the group houses rented by Kansas City and St. Louis families need exactly one dinner that brings everyone to the same table without driving fifteen minutes to a packed restaurant on the strip. Mobile hibachi at your ${city} rental brings a certified teppanyaki chef to your lake house with the full grill setup, all ingredients, and a live-fire performance that delivers that dinner at your dock.`,
    middle:   (city, state) =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, dock patio, or yard. The show runs from first flame to last plate — no lake town strip logistics, no waiting for a table that was never big enough for the whole group anyway. Every guest at the same outdoor table watching the same performance.`,
    closing:  (city, state) =>
      `Ozarks events book 4–6 weeks in advance for peak summer season dates. Starting at $60 per adult, $600 event minimum. Confirm outdoor open-flame cooking is permitted at your rental before booking — most Missouri lake properties allow it.`,
  },
  // 128 — University (generic)
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Graduation Season Dining Done Right`,
    opening:  (city, state) =>
      `${city} in May is graduation season. Families converging from across Missouri and beyond, every backyard and restaurant within driving distance of campus at capacity, the window between Saturday ceremony and Sunday departure where one great dinner makes the whole trip worth it. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property for graduation parties, milestone birthdays, and family celebrations — the format that makes even the most distracted graduate put down the phone and pay attention for two full hours.`,
    middle:   (city, state) =>
      `From the first onion volcano to the final plate of fried rice, your chef works the crowd for 90–120 minutes straight. Every protein cooked to order at the grill: chicken, steak, shrimp, salmon, and premium upgrades like filet mignon or lobster tail for the occasions that call for it. Dual-station capacity for large graduation parties and family reunions of 25–60+ guests.`,
    closing:  (city, state) =>
      `${city} weekend evenings book 3–4 weeks ahead. Graduation season (May–June) is the most competitive booking window — reserve 4–5 weeks out for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of Mid-Missouri.`,
  },
  // 129 — Long-tail (generic)
  {
    headline: (city) => `Hibachi Catering in ${city}: Private Dining for Southwest Missouri`,
    opening:  (city, state) =>
      `${city} has the community spirit that Southwest Missouri runs on — the birthday parties that bring three generations to the same backyard, the graduation celebrations that fill a neighborhood with out-of-town family, the outdoor gatherings where the host takes pride in putting on an event worth attending. Hibachi catering in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that makes any ${city} gathering the one your guests are still talking about the following month.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20–30 minutes on your outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks ahead. Starting at $60 per adult, $600 event minimum. Most quotes returned same day. Serving ${city} and all of Southwest Missouri.`,
  },
]

// ── City-specific intros (MO city-specific 130–142) ───────────────────────────
export const MO_CITY_INTROS = [
  // 130 — Kansas City (profileIdx 0)
  {
    headline: () => `Backyard Hibachi Party in Kansas City`,
    opening:  () =>
      `Kansas City is built around the backyard. Not just the BBQ competition circuits that run through every park and parking lot in the metro, not just the Gates vs. Arthur Bryant's debate that goes on at every office on Wornall and Ward Parkway, but the actual culture of outdoor entertaining — the deck built specifically for groups, the Weber kettle that gets replaced every few years, the neighbors who know your kids' names because the gate is always open. A private backyard hibachi party in Kansas City brings a certified teppanyaki chef to that backyard with a completely different fire performance than you've been running. Same outdoor culture. Entirely different food.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For KC events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your backyard is exactly as you left it.`,
    closing:  () =>
      `Kansas City summer weekends book 3–4 weeks ahead. Graduation season fills fastest in May and June. Serving all of Kansas City and the full metro on both sides of the state line — Lee's Summit, Blue Springs, Independence, Overland Park, Leawood, and beyond. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 131 — St. Louis (profileIdx 1)
  {
    headline: () => `Hibachi at Home in St. Louis`,
    opening:  () =>
      `St. Louis doesn't need to go downtown for a good dinner. The south city neighborhoods with the 1920s bungalows and the brick backyards, the west county communities that have been building residential outdoor spaces since Chesterfield was farmland, the communities along Highway 40 that know how to host — private hibachi at home in St. Louis brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that turns any graduation party, birthday dinner, or neighborhood gathering into the best evening of the year without fighting for parking in the CWE.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large St. Louis events over 25 guests, we bring two chef stations. Full cleanup when dinner is done. Your outdoor space is spotless when the chef leaves.`,
    closing:  () =>
      `St. Louis weekend events book 2–3 weeks ahead. Graduation season (May–June) is our most competitive booking window — reserve 4–5 weeks out for any Saturday event. Serving all of St. Louis city and county — South City, Maplewood, Brentwood, Clayton, Kirkwood, Webster Groves, Chesterfield, O'Fallon, St. Charles, and the full metro. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 132 — Chesterfield (profileIdx 2)
  {
    headline: () => `Private Hibachi Chef in Chesterfield`,
    opening:  () =>
      `Chesterfield sets the standard for private entertaining in the St. Louis metro. The estate homes along the Clarkson Road and Long Road corridors, the property lines wide enough for a proper outdoor setup, the residents who have been hosting the kind of dinner parties that require a specific guest list and specific food — private hibachi in Chesterfield brings a certified teppanyaki chef to your property with the full setup, hand-selected premium proteins, and a live teppanyaki performance that earns its place at a Chesterfield outdoor table. No restaurant reservation. The chef comes to you. Your property becomes the venue.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and scallops available as premium upgrades, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, deck, or garden. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Chesterfield property is immaculate when the chef leaves.`,
    closing:  () =>
      `Chesterfield events book 3–4 weeks ahead in season. Graduation season (May–June) and summer evenings fill fastest. Serving Chesterfield and all of St. Louis County — Wildwood, Ballwin, Ellisville, Town and Country, Kirkwood, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available.`,
  },
  // 133 — Lee's Summit (profileIdx 3)
  {
    headline: () => `Private Hibachi Chef in Lee's Summit`,
    opening:  () =>
      `Lee's Summit has built its reputation as one of the most sought-after communities in the Kansas City metro — the Lakewood and Legacy Park neighborhoods, the residential setups that were designed for outdoor entertaining, and the family culture that treats a graduation party or milestone anniversary as something worth doing right. A private hibachi chef at your Lee's Summit home brings a certified teppanyaki chef to your outdoor space with the full setup, premium proteins, and a live teppanyaki performance that becomes the story of the party. The chef comes to you. Your backyard becomes the venue.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For larger Lee's Summit events over 25 guests, we bring two chef stations running simultaneously. Full cleanup when dinner is done. Your outdoor space is spotless when the chef leaves.`,
    closing:  () =>
      `Lee's Summit weekend events book 3–4 weeks ahead. Graduation season (May–June) fills fastest. Serving Lee's Summit and all of the KC metro east — Blue Springs, Independence, Raytown, Grandview, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 134 — O'Fallon (profileIdx 4)
  {
    headline: () => `Hibachi at Home in O'Fallon`,
    opening:  () =>
      `O'Fallon is where St. Charles County lives — the fastest-growing community in Missouri, the young families who moved from St. Louis for the school district and the backyard, the neighborhoods that have filled in along Highway 40 with the kind of residential infrastructure that was built for exactly this kind of outdoor entertaining. Private hibachi at home in O'Fallon brings a certified teppanyaki chef to your outdoor space with everything included and a live cooking performance that turns any graduation party, birthday dinner, or family gathering into the event your guests plan around next time.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For larger O'Fallon events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `O'Fallon weekend events book 2–3 weeks ahead. Graduation season (May–June) is our most competitive window across St. Charles County — reserve 3–4 weeks ahead for Saturday events. Serving O'Fallon and all of St. Charles County — St. Charles, St. Peters, Wentzville, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 135 — St. Charles (profileIdx 5)
  {
    headline: () => `Hibachi at Home in St. Charles`,
    opening:  () =>
      `St. Charles is where Missouri started — the first state capital, the trailhead for the Lewis and Clark Expedition, and the community that has spent two centuries building the kind of Main Street and residential neighborhoods that draw people from across the metro. Private hibachi at home in St. Charles brings a certified teppanyaki chef to your backyard, deck, or outdoor space with the full setup and a live cooking performance that makes any celebration in this corner of the Missouri River valley the dinner your guests are still talking about next week.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For large St. Charles events over 25 guests, we bring two chef stations running simultaneously. Full cleanup when dinner is done. Your outdoor space is spotless when the chef leaves.`,
    closing:  () =>
      `St. Charles weekend events book 2–3 weeks ahead. Graduation season (May–June) fills fastest across St. Charles County. Serving St. Charles and all of the Missouri River Valley metro — O'Fallon, St. Peters, Wentzville, St. Louis, Chesterfield, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 136 — Blue Springs (profileIdx 6)
  {
    headline: () => `Hibachi Catering in Blue Springs`,
    opening:  () =>
      `Blue Springs is the eastern anchor of the Kansas City metro — the community that sits at the intersection of everything suburban KC has built: good schools, established neighborhoods, and the outdoor entertaining culture that runs through every backyard from Adams Dairy to Woods Chapel Road. Hibachi catering in Blue Springs brings a certified teppanyaki chef to your property for graduation parties, birthday dinners, family reunions, and corporate events with the full setup and a live cooking performance that delivers a different kind of KC outdoor food experience.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For larger Blue Springs events over 25, we bring two chef stations. Full cleanup when dinner is done. Your backyard is spotless when the chef leaves.`,
    closing:  () =>
      `Blue Springs weekend events book 2–3 weeks ahead. Graduation season (May–June) fills fastest across the KC metro east. Serving Blue Springs and all of the eastern KC metro — Lee's Summit, Independence, Raytown, Grain Valley, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 137 — Lake of the Ozarks (profileIdx 7)
  {
    headline: () => `Mobile Hibachi at Lake of the Ozarks`,
    opening:  () =>
      `The Lake of the Ozarks is where Missouri comes to reset. From Memorial Day to Labor Day, the coves fill with houseboats and pontoons, the lakefront decks get the first sun of the morning, and the group houses rented by Kansas City and St. Louis families for the weekend need exactly one dinner that brings everyone to the same table without driving fifteen minutes to a packed strip restaurant on the Bagnell Dam. Mobile hibachi at your Lake of the Ozarks rental brings a certified teppanyaki chef to your lake house with the full grill setup, all ingredients, and a live-fire performance that delivers that dinner at your dock patio.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, dock patio, or yard. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. Full cleanup when dinner is done. Your lake house stays spotless.`,
    closing:  () =>
      `Lake of the Ozarks summer events book 4–6 weeks ahead for peak July and August dates. Bachelorette weekends, birthday lake trips, and family reunion weekends are our most common bookings at the lake. Serving the full Lake of the Ozarks area — Osage Beach, Lake Ozark, Camdenton, Laurie, Sunrise Beach, and surrounding cove communities. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor cooking is permitted at your rental before booking — most lake properties allow it.`,
  },
  // 138 — Branson (profileIdx 8)
  {
    headline: () => `Mobile Hibachi in Branson`,
    opening:  () =>
      `Branson is Missouri's live entertainment capital — over 100 live shows, the Landing, and the vacation infrastructure of a small city that knows how to put on a performance. Mobile hibachi in Branson brings a certified teppanyaki chef to your vacation rental, lake house, or cabin with a live-fire cooking performance that fits exactly into what Branson does best: live entertainment you don't have to leave your property to experience. The shows on 76 Country Boulevard will still be there. This one comes to you.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or outdoor area. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. Full cleanup when dinner is done. Your Branson property is spotless when the chef leaves.`,
    closing:  () =>
      `Branson summer events book 4–5 weeks ahead for peak season dates. Family reunions, birthday vacation trips, and bachelorette weekends are our most common Branson bookings. Serving Branson and the surrounding Ozarks — Hollister, Kimberling City, Ozark, Nixa, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor cooking is permitted at your rental before booking.`,
  },
  // 139 — Columbia (profileIdx 9)
  {
    headline: () => `Private Hibachi Chef in Columbia`,
    opening:  () =>
      `Columbia is where Missouri's families converge every May. University of Missouri graduation — Faurot Field, the Francis Quadrangle, the Gold and Black that fills every hotel and Airbnb within 30 miles of campus — draws parents from Kansas City, St. Louis, and every corner of the state to a college town that is excellent at many things but not at finding a group reservation for 20 people on graduation Saturday. A private hibachi chef at your Columbia home or backyard brings a certified teppanyaki chef to your property for graduation parties, milestone birthdays, and family celebrations with the full setup and a performance that makes the best night of Mizzou graduation happen at your address instead of a restaurant.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Columbia graduation events over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Columbia graduation season (May–June) books 4–5 weeks ahead — Mizzou commencement weekends fill fastest. Serving Columbia and surrounding Mid-Missouri communities including Jefferson City, Fulton, Moberly, and Centralia. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 140 — Springfield (profileIdx 10)
  {
    headline: () => `Hibachi at Home in Springfield`,
    opening:  () =>
      `Springfield is Mid-Missouri's crossroads — the birthplace of Route 66, home to Missouri State University, and the community that has built a genuinely distinctive identity at the intersection of the Ozarks and the Plains. Private hibachi at home in Springfield brings a certified teppanyaki chef to your backyard or outdoor space for Missouri State graduation parties, birthday dinners, and family celebrations with the full setup and a live cooking performance that makes any event in this corner of the state the one guests plan around.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For large Springfield graduation events over 25, we bring two chef stations. Full cleanup when dinner is done. Your backyard or property is spotless when the chef leaves.`,
    closing:  () =>
      `Springfield graduation season (Missouri State, May–June) books 3–4 weeks ahead. Serving Springfield and surrounding communities including Nixa, Ozark, Republic, Bolivar, and Branson. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 141 — Kirkwood (profileIdx 11)
  {
    headline: () => `Hibachi at Home in Kirkwood`,
    opening:  () =>
      `Kirkwood is the St. Louis suburb that set the template. The Victorian homes and craftsman bungalows along Argonne Drive and Essex Avenue, the established backyards and gardens in Woodbine and Dougherty Ferry, the resident culture that has been hosting proper dinner parties since before Webster Groves was a neighborhood — private hibachi at home in Kirkwood brings a certified teppanyaki chef to your property with the full setup and a live teppanyaki performance that earns its place at a Kirkwood outdoor table.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, terrace, or garden. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Kirkwood property is spotless when the chef leaves.`,
    closing:  () =>
      `Kirkwood events book 3–4 weeks ahead in season. Graduation season (May–June) and summer evenings fill fastest. Serving Kirkwood and all of South St. Louis County — Webster Groves, Clayton, Ballwin, Chesterfield, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 142 — Joplin (profileIdx 12)
  {
    headline: () => `Hibachi Catering in Joplin`,
    opening:  () =>
      `Joplin is Southwest Missouri's center — the Route 66 heritage city, the community that has rebuilt itself with genuine resilience, and the family culture that treats a birthday party, graduation celebration, or neighborhood gathering as something worth doing right. Hibachi catering in Joplin brings a certified teppanyaki chef to your backyard or outdoor space with the full setup and a live cooking performance that makes any Joplin event the best dinner your guests have had in Southwest Missouri. The chef comes to you with everything — the fire, the food, and the show.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For larger Joplin events over 25, we bring two chef stations. Full cleanup when dinner is done. Your outdoor space is spotless when the chef leaves.`,
    closing:  () =>
      `Joplin weekend events book 2–3 weeks ahead. Birthday parties, graduation celebrations, and family reunions are our most common Joplin bookings. Serving Joplin and all of Southwest Missouri — Neosho, Carthage, Webb City, Carl Junction, and the four-state region. Starting at $60/adult, $30/child, $600 event minimum. Most quotes returned same day.`,
  },
]

// ── Main builder ──────────────────────────────────────────────────────────────
export function getMissouriCityData(citySlug, cityName) {
  const major       = MO_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getMOVariantIndex(citySlug)
  const theme       = MO_IMAGE_THEMES[v] ?? MO_IMAGE_THEMES[0]
  const displayName = MO_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Missouri',
    stateAbbr:    'MO',
    stateSlug:    'missouri',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: MO_HERO_SUBTITLES[v]?.(displayName) ?? MO_HERO_SUBTITLES[0](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['Kansas City', 'St. Louis', 'Columbia', 'Springfield', 'Branson'].filter(c => toSlug(c) !== citySlug),
    localHighlights:   MO_LOCAL_HIGHLIGHTS[v]?.(displayName) ?? MO_LOCAL_HIGHLIGHTS[0](displayName),
    featuredOccasions: MO_OCCASIONS[v] ?? MO_OCCASIONS[0],
    faqSet:            MO_FAQ_SETS[v]?.(displayName) ?? MO_FAQ_SETS[0](displayName),
    testimonials:      MO_TESTIMONIALS[v] ?? MO_TESTIMONIALS[0],
    // INTRO_VARIANTS: 124–129 = MO generic, 130–142 = MO city-specific
    uniqueIntroVariant:   (major?.profileIdx != null) ? 130 + major.profileIdx : 124 + v,
    uniqueWhyUsVariant:   v,
    // CLOSING_VARIANTS: 124–129 = MO generic, 130–142 = MO city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 130 + major.profileIdx : 124 + v,
    // H1 prefix for CityHero
    heroH1Prefix: major?.profileIdx != null
      ? MO_PROFILE_H1_PREFIXES[major.profileIdx]
      : MO_THEME_H1_PREFIXES[v] ?? 'Hibachi at Home in',
    // Custom meta for precise SEO control
    ...(MO_CUSTOM_META[citySlug]
      ? { metaTitle: MO_CUSTOM_META[citySlug].title, metaDescription: MO_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getMoHowItWorks(citySlug) {
  const major = MO_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMOVariantIndex(citySlug)
  return MO_HOW_IT_WORKS[v] ?? MO_HOW_IT_WORKS[0]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getMoSectionVariant(citySlug) {
  const major = MO_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMOVariantIndex(citySlug)
  return MO_SECTION_VARIANTS[v] ?? MO_SECTION_VARIANTS[0]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getMoCityImage(citySlug) {
  return MO_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getMoSupportImages(citySlug) {
  if (MO_SUPPORT_IMAGES[citySlug]) return MO_SUPPORT_IMAGES[citySlug]
  const major = MO_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMOVariantIndex(citySlug)
  return MO_SUPPORT_FALLBACKS[v] ?? MO_SUPPORT_FALLBACKS[0]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getMoBlogPosts(variant, count) {
  return MO_BLOG_POSTS[variant % MO_BLOG_POSTS.length].slice(0, count)
}
