// =============================================================================
// lib/delawareData.js — Delaware Expansion
// 22 cities · 5 geographic themes
// Theme 0: Wilmington Metro / Corporate (Wilmington, New Castle, Claymont)
// Theme 1: Brandywine Affluent / Suburban (Newark, Hockessin, Greenville, Middletown, Bear, Pike Creek)
// Theme 2: Party Beach / Bachelorette (Rehoboth Beach, Dewey Beach)
// Theme 3: Coastal Family / Vacation Home (Lewes, Bethany Beach, Fenwick Island, Ocean View, Milton, Selbyville)
// Theme 4: Central & Southern Delaware / Family (Dover, Smyrna, Milford, Georgetown, Seaford)
//
// INTRO_VARIANTS indices:  90–94 DE generic · 95–107 DE city-specific
// CLOSING_VARIANTS indices: 90–94 DE generic · 95–107 DE city-specific
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getDEVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 5
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const DE_HERO_SUBTITLES = [
  (city) => `Corporate Team Dinners · Executive Private Events · Client Entertainment · Serving ${city} & Northern Delaware`,
  (city) => `Backyard Private Dining · Graduation Parties · Milestone Celebrations · Serving ${city} & Brandywine Valley`,
  (city) => `Beach House Hibachi · Bachelorette Weekends · Vacation Rental Dining · Serving ${city} & The Delaware Shore`,
  (city) => `Vacation Home Dinners · Family Reunions · Coastal Summer Events · Serving ${city} & The Delaware Coast`,
  (city) => `Backyard Family Celebrations · Graduation Parties · Community Events · Serving ${city} & Central Delaware`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const DE_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Wilmington Corporate
  (city) => [
    `Corporate team dinners and client appreciation events throughout greater ${city}`,
    'Perfect for finance, legal, healthcare, and professional services firms across northern Delaware',
    'Ideal for executive dinner parties at private homes throughout the Brandywine Valley',
    `Corporate event coordination for the ${city} business corridor`,
    `Weekend evenings and corporate events in ${city} book 2–3 weeks ahead`,
    'Premium proteins, full live performance, complete setup and cleanup — nothing for the host to manage',
  ],
  // Theme 1 — Brandywine Affluent / Suburban
  (city) => [
    `Backyard private dining for ${city}'s most discerning hosts`,
    'Perfect for graduation parties, milestone birthdays, and anniversary celebrations',
    `Ideal for neighborhood gatherings throughout the ${city} community`,
    `Graduation season (May–June) is our highest-demand window in ${city} — book 4–5 weeks ahead`,
    'Full setup and cleanup — you provide the outdoor space, we handle everything else',
    'Dual-station capacity for large graduations and family gatherings of 25–60+ guests',
  ],
  // Theme 2 — Party Beach / Bachelorette
  (city) => [
    `Beach house hibachi at your ${city} vacation rental — no Route 1 reservation battles`,
    'Perfect for bachelorette weekends, birthday trips, and summer group dinners',
    `Chef comes directly to your ${city} rental — full setup, full show, full cleanup`,
    'Memorial Day through Labor Day is peak Delaware beach season — reserve 6–8 weeks ahead',
    'Fire tricks, flying shrimp, and the full teppanyaki performance at your rental property',
    'Full pack-out when dinner is done — your rental stays spotless',
  ],
  // Theme 3 — Coastal Family / Vacation Home
  (city) => [
    `Vacation home hibachi for summer rentals and beach houses near ${city}`,
    'Perfect for family reunions, anniversary getaways, and group vacation dinners',
    `Chef travels to your ${city} rental or coastal property — no restaurant crowds required`,
    'From Memorial Day to Labor Day — and year-round for off-season coastal entertaining',
    'Full setup and cleanup included — your rental stays immaculate when the chef leaves',
    'Premium proteins and live teppanyaki performance at your coastal property',
  ],
  // Theme 4 — Central & Southern Delaware / Family
  (city) => [
    `Backyard hibachi parties for ${city} families and community gatherings`,
    'Perfect for graduation parties, birthday milestones, and family reunions',
    'Ideal for central and southern Delaware families celebrating together',
    `Corporate team events for ${city} area businesses and organizations`,
    `Full setup and cleanup — the best alternative to restaurant group dining in ${city}`,
    'Dual-station capacity for large gatherings of 25–60+ guests',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const DE_OCCASIONS = [
  // Theme 0 — Wilmington Corporate
  ['Corporate Team Dinners', 'Client Appreciation Events', 'Birthday Parties', 'Anniversary Dinners', 'Bachelorette Parties', 'Executive Dinner Parties', 'Holiday Gatherings', 'Engagement Parties', 'Graduation Parties', 'Networking Events'],
  // Theme 1 — Brandywine Affluent / Suburban
  ['Birthday Parties', 'Graduation Parties', 'Anniversary Dinners', 'Corporate Events', 'Neighborhood Gatherings', 'Bachelorette Parties', 'Family Reunions', 'Holiday Dinners', 'Retirement Parties', 'Milestone Celebrations'],
  // Theme 2 — Party Beach / Bachelorette
  ['Bachelorette Weekends', 'Bachelor Parties', 'Birthday Trips', 'Summer House Parties', 'Vacation Group Dinners', 'Girls Trips', 'Anniversary Getaways', 'Engagement Celebrations', 'Reunion Weekends', 'Corporate Retreats'],
  // Theme 3 — Coastal Family / Vacation Home
  ['Family Reunions', 'Vacation Rental Parties', 'Anniversary Getaways', 'Birthday Parties', 'Bachelorette Weekends', 'Graduation Trips', 'Girls Weekends', 'Corporate Retreats', 'Engagement Parties', 'Summer House Dinners'],
  // Theme 4 — Central & Southern Delaware / Family
  ['Birthday Parties', 'Graduation Parties', 'Family Reunions', 'Anniversary Dinners', 'Corporate Events', 'Neighborhood Gatherings', 'Holiday Dinners', 'Retirement Parties', 'Backyard BBQ Alternatives', 'Community Celebrations'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const DE_FAQ_SETS = [
  // Theme 0 — Wilmington Corporate
  (city) => [
    {
      q: `Can you set up hibachi at a corporate event or private home in ${city}?`,
      a: `Yes — corporate outdoor spaces, private residential properties, and event venues throughout ${city} and all of northern Delaware are among our most common setups. We need a flat outdoor area of at least 10×10 ft with vehicle access for setup. Most Wilmington-area outdoor spaces meet this requirement easily.`,
    },
    {
      q: `What ${city} neighborhoods and Delaware communities do you serve?`,
      a: `We serve all of greater Wilmington — including Hockessin, Greenville, Newark, Bear, Pike Creek, Claymont, New Castle, and all surrounding northern Delaware communities. Most locations within 30 miles of Wilmington fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle large corporate team events for ${city} companies?`,
      a: `Absolutely — corporate team dinners, client appreciation events, and office party setups are a major part of our Wilmington business. We've run events for financial services, legal, healthcare, and professional services firms throughout northern Delaware. For groups over 25, we bring two chef stations. Outdoor corporate spaces and private venues work perfectly.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend evenings and corporate events in the Wilmington area book 2–3 weeks out. Holiday party season (November–December) fills fastest — reserve 4–5 weeks ahead for any Friday or Saturday event. Weekday corporate dinners typically have more flexibility and can often be arranged within 1–2 weeks.`,
    },
    {
      q: `Can you set up at a ${city} townhouse, rooftop, or backyard space?`,
      a: `Yes — Wilmington residential properties, rooftop terraces, and backyard spaces are all excellent hibachi setups. We need a flat outdoor area of at least 10×10 ft. We coordinate with your property manager or HOA in advance when needed. We do not cook in enclosed indoor spaces without proper outdoor ventilation.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Wilmington-area locations and all of northern Delaware. For events more than 35 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you book.`,
    },
  ],
  // Theme 1 — Brandywine Affluent / Suburban
  (city) => [
    {
      q: `Can hibachi be set up in a ${city} backyard or patio?`,
      a: `Yes — suburban backyards and patios throughout the Brandywine Valley are our most common setup environment. We need a flat area of at least 10×10 ft. Deck, lawn, paver patio, or stone patio all work perfectly. Our setup is fully self-contained — we bring everything and take everything with us.`,
    },
    {
      q: `Do you serve ${city} and surrounding Brandywine Valley communities?`,
      a: `Yes — we serve all of northern Delaware including ${city} and surrounding communities throughout New Castle County. Most locations in the Brandywine Valley and Wilmington suburbs fall within our standard service radius with no added travel fee.`,
    },
    {
      q: `How far in advance should I book for a ${city} graduation party?`,
      a: `Graduation season (May–June) is our highest-demand window across the Brandywine Valley and Delaware suburbs. We recommend booking 4–5 weeks in advance for any May or June Saturday event in ${city}. Weekday graduation dinners typically have more availability — 2–3 weeks' notice is usually sufficient.`,
    },
    {
      q: `Can you handle a large graduation or milestone party in ${city}?`,
      a: `Absolutely — parties of 25–60 guests are among our most common bookings in the ${city} area. For groups over 25, we bring two chef stations running in parallel to maintain quality and timing. Large milestone events — graduation parties, anniversary dinners, retirement celebrations — are a specialty.`,
    },
    {
      q: `Do you do corporate team events for ${city} area companies?`,
      a: `Yes — the Brandywine Valley and northern Delaware suburbs have strong demand from corporate and professional services firms. We can set up at corporate outdoor spaces, private venues, or residential properties. Full event coordination included with every booking.`,
    },
    {
      q: `What do I need to provide for the event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all ingredients and proteins, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included.`,
    },
  ],
  // Theme 2 — Party Beach / Bachelorette
  (city) => [
    {
      q: `Can you come to our ${city} vacation rental or beach house?`,
      a: `Absolutely — Delaware beach vacation rentals are among our most popular booking locations. We come directly to your rental property on or near the Delaware shore. Just confirm the house allows outdoor open-flame cooking (most do), and we handle everything from setup to complete cleanup.`,
    },
    {
      q: `How far in advance should I book a ${city} summer event?`,
      a: `Delaware beach season — Memorial Day through Labor Day — fills up extremely fast. We strongly recommend booking 6–8 weeks in advance for peak July and August events. The Fourth of July weekend and August beach dates fill weeks in advance. Off-season events (September–May) have much more availability.`,
    },
    {
      q: `Can you set up on the deck or patio of a ${city} beach rental?`,
      a: `Yes — outdoor decks, patios, and yard spaces at Delaware beach rentals are our ideal setup. We need a flat outdoor area of at least 10×10 ft with clearance overhead. Most Rehoboth, Dewey, and Lewes-area rental properties have excellent deck or yard setups already in place.`,
    },
    {
      q: `Do you serve all Delaware beach communities?`,
      a: `Yes — we serve the full Delaware shore including Rehoboth Beach, Dewey Beach, Lewes, Bethany Beach, Fenwick Island, Ocean View, Selbyville, and all communities along the Route 1 corridor. Travel fees may apply for the most remote locations south of Fenwick Island.`,
    },
    {
      q: `Is hibachi a good option for a ${city} bachelorette weekend?`,
      a: `It's the best option. The combination of live fire cooking, flying shrimp, and everyone gathered around the grill creates exactly the energy a bachelorette group wants — and you don't have to fight for a reservation at every packed restaurant on Route 1. We've done dozens of Delaware beach bachelorette events. The chef makes the evening.`,
    },
    {
      q: `What happens if the weather changes at our beach event?`,
      a: `We cook in light rain under appropriate shelter. For severe weather or lightning, we work with you to reschedule at no penalty — Delaware beach weather is something we understand completely. Covered decks, screened porches, and garage setups make excellent backup locations.`,
    },
  ],
  // Theme 3 — Coastal Family / Vacation Home
  (city) => [
    {
      q: `Can you come to a vacation rental or beach house near ${city}?`,
      a: `Absolutely — Delaware coastal vacation properties are among our most popular booking locations. We come directly to your rental. Just confirm the property allows outdoor open-flame cooking, and we handle everything from there. Cape Henlopen-area properties, Lewes historic district homes, and Bethany-area rentals are all excellent setups.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `For weekend events along the Delaware coast, we recommend booking 3–5 weeks ahead during peak summer season. Memorial Day through Labor Day fills fastest. Fall and spring coastal events typically have more flexibility — 2–3 weeks' notice is usually sufficient for off-peak dates.`,
    },
    {
      q: `What's the best setup at a ${city} coastal property?`,
      a: `Open decks, large patios, and flat yard areas all work perfectly. We need a minimum 10×10 ft flat surface with clearance overhead. Our setup takes 20–30 minutes and the performance runs 90–120 minutes. We pack everything out completely when dinner is done — your rental or vacation home stays immaculate.`,
    },
    {
      q: `Do you serve smaller coastal communities near ${city}?`,
      a: `Yes — we travel throughout the Delaware coast and serve all communities along and near the shore, including smaller neighborhoods surrounding our major service areas. For locations more than 35 miles from our nearest chef base, a travel fee may apply and will always be disclosed upfront before you book.`,
    },
    {
      q: `Is hibachi good for a multigenerational family reunion at a Delaware beach property?`,
      a: `It's the perfect format. Kids, parents, and grandparents all gather around the same grill for 90–120 minutes — everyone watching the same chef, sharing the same plates, experiencing the same show. For groups over 25, we bring two chef stations. Three generations at the grill is our most common Delaware coastal family setup.`,
    },
    {
      q: `Can you set up on the deck or patio of our coastal rental?`,
      a: `Yes — outdoor decks, covered porches, and patio areas at Delaware vacation properties are our ideal setup. We need a flat outdoor area of at least 10×10 ft. Most coastal Delaware rental properties have deck or yard spaces that work perfectly. We handle all setup and pack out completely when dinner is done.`,
    },
  ],
  // Theme 4 — Central & Southern Delaware / Family
  (city) => [
    {
      q: `Do you serve the ${city} area and surrounding central Delaware communities?`,
      a: `Yes — we cover all of central and southern Delaware, including ${city} and surrounding neighborhoods, suburbs, and communities. Most locations within 30 miles of ${city} fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle a large family reunion or graduation party in ${city}?`,
      a: `Absolutely — family reunions and graduation parties are our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. Three generations around the grill — kids, parents, and grandparents — is our most common central Delaware setup.`,
    },
    {
      q: `How far in advance should I book a ${city} weekend event?`,
      a: `For Friday and Saturday events in ${city}, booking 2–3 weeks ahead is recommended. During graduation season (May–June) and fall, 3–4 weeks is safer. Weekday events can often be arranged with 5–7 days' notice depending on chef availability.`,
    },
    {
      q: `Can you set up for an outdoor backyard or community event in ${city}?`,
      a: `Yes — backyard events, community gatherings, church grounds setups, and outdoor venue events all work well in ${city}. We need a flat area of at least 10×10 ft with vehicle access for setup. Most central and southern Delaware residential and community spaces meet this requirement easily.`,
    },
    {
      q: `Is private hibachi better than catering for a ${city} graduation party?`,
      a: `Per-head cost is comparable to quality catering at around $60/adult — but hibachi includes a live chef performance at no extra charge. A caterer drops off food; we stay, cook in front of your guests, entertain throughout the meal, and handle complete cleanup. Most ${city} hosts who try hibachi say they'll never go back to the catering format.`,
    },
    {
      q: `What do I need to provide for a ${city} backyard hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, rice, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included in every event.`,
    },
  ],
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const DE_TESTIMONIALS = [
  // Theme 0 — Wilmington Corporate
  [
    {
      text: '"Team dinner for our Wilmington financial services group — 24 people, outdoor venue on the Brandywine, chef arrived exactly on time and put on a flawless show. Every client said it was the best dinner we\'d arranged in years. This is our new standard for client entertainment."',
      name: 'Marcus H.',
      city: 'Wilmington, DE',
      event: 'Corporate Client Dinner',
      initials: 'MH',
    },
    {
      text: '"Anniversary dinner at our Greenville property — 18 guests on the back terrace, chef was absolutely exceptional. The food, the fire tricks, the energy — it matched exactly what we needed for that evening. Three of our guests booked their own events before the chef even left."',
      name: 'Sarah & David L.',
      city: 'Greenville, DE',
      event: 'Anniversary Dinner',
      initials: 'SL',
    },
    {
      text: '"Holiday party for our Wilmington law firm — 32 attorneys and staff, outdoor setup at the senior partner\'s home in Hockessin. Nobody expected a hibachi chef. Chef had the entire group gathered around the grill laughing for two hours straight. Best firm event in memory."',
      name: 'Rebecca T.',
      city: 'Wilmington, DE',
      event: 'Law Firm Holiday Party',
      initials: 'RT',
    },
  ],
  // Theme 1 — Brandywine Affluent / Suburban
  [
    {
      text: '"Graduation party for our son in Hockessin — 44 guests, backyard setup, chef had everyone gathered from the first flame. His graduating class plus our neighbors plus our families all cheering at the same grill. Already planning our daughter\'s graduation for next spring."',
      name: 'Thomas & Karen M.',
      city: 'Hockessin, DE',
      event: 'Graduation Party',
      initials: 'TM',
    },
    {
      text: '"Birthday dinner in our Newark backyard — 28 guests, June evening, absolutely perfect. The chef was personable, professional, and turned what would have been a dinner party into a performance. My guests are still asking for the contact information months later."',
      name: 'Ellen R.',
      city: 'Newark, DE',
      event: 'Birthday Dinner',
      initials: 'ER',
    },
    {
      text: '"Neighborhood Fourth of July gathering in Bear — 38 people, our largest outdoor setup yet. Chef ran dual stations and kept the whole crowd engaged for two solid hours. We\'d done regular catering every year before. This is the new neighborhood standard going forward."',
      name: 'Patricia & James S.',
      city: 'Bear, DE',
      event: 'Neighborhood Gathering',
      initials: 'PS',
    },
  ],
  // Theme 2 — Party Beach / Bachelorette
  [
    {
      text: '"Rehoboth Beach bachelorette house — 14 of us, deck hibachi Friday night, and the chef completely set the tone for the entire weekend. Fire tricks, flying shrimp, the full show. We\'d been to every restaurant on Route 1 over the years. Nothing compares to this."',
      name: 'Caroline B.',
      city: 'Rehoboth Beach, DE',
      event: 'Bachelorette Weekend',
      initials: 'CB',
    },
    {
      text: '"Birthday weekend in Dewey Beach — group house, 12 of us, hibachi on Saturday night. Chef showed up exactly on time, set up while we gathered on the deck, and ran the most entertaining dinner I\'ve ever been part of. The whole group agreed it was the highlight of the trip."',
      name: 'Michelle T.',
      city: 'Dewey Beach, DE',
      event: 'Birthday Weekend',
      initials: 'MT',
    },
    {
      text: '"Rehoboth guys trip — seven of us rented a house for the week. Did hibachi on Thursday and it became the dinner everyone planned the rest of the trip around. Chef was fantastic, the food was outstanding, and the outdoor setting beat every restaurant we tried all week."',
      name: 'Ryan C.',
      city: 'Rehoboth Beach, DE',
      event: 'Group House Weekend',
      initials: 'RC',
    },
  ],
  // Theme 3 — Coastal Family / Vacation Home
  [
    {
      text: '"Lewes vacation house anniversary — 16 guests on the back patio, chef drove down from Wilmington and put on a two-hour show. The food was exceptional and the performance elevated the entire weekend. Exactly what we wanted for that milestone occasion. Will book every summer."',
      name: 'Jennifer & Mark W.',
      city: 'Lewes, DE',
      event: 'Anniversary Dinner',
      initials: 'JW',
    },
    {
      text: '"Bethany Beach family reunion — 28 guests from four states, rented a house together for the week. Did hibachi on Wednesday night and it became the trip highlight. Grandparents front row, grandkids asking the chef questions, cousins cheering. Perfect multigenerational evening."',
      name: 'The Donovan Family',
      city: 'Bethany Beach, DE',
      event: 'Family Reunion',
      initials: 'DF',
    },
    {
      text: '"Fenwick Island girls weekend — five of us at a beach rental. Hibachi night was the dinner everyone planned around. Chef arrived on time, had us completely engaged from first flame to last plate. The whole weekend was great, but hibachi night was the one we talk about."',
      name: 'Nicole A.',
      city: 'Fenwick Island, DE',
      event: 'Girls Weekend',
      initials: 'NA',
    },
  ],
  // Theme 4 — Central & Southern Delaware / Family
  [
    {
      text: '"Graduation party for our daughter in Dover — 46 guests, backyard setup, dual chef stations. Every single family member from grandparents to college roommates gathered around the grill for two hours. No restaurant on Route 13 could have done this. We\'re already planning a second event."',
      name: 'Donna & Charles M.',
      city: 'Dover, DE',
      event: 'Graduation Party',
      initials: 'DM',
    },
    {
      text: '"Family reunion in Milford — 52 guests, huge backyard, relatives in from Maryland and Philadelphia. Chef set up two stations and had the whole crowd entertained from first flame to last plate. Grandparents took three rounds. Best reunion we\'ve had in twenty years."',
      name: 'The Harris Family',
      city: 'Milford, DE',
      event: 'Family Reunion',
      initials: 'HF',
    },
    {
      text: '"Birthday party in Georgetown — 30 guests, outdoor setup, chef completely took over the entertainment for the evening. Easy booking, exactly on time, professional from start to finish. Central Delaware doesn\'t have many options like this. We\'ll be calling again."',
      name: 'Kevin R.',
      city: 'Georgetown, DE',
      event: 'Birthday Party',
      initials: 'KR',
    },
  ],
]

// ── Image themes ──────────────────────────────────────────────────────────────
const DE_IMAGE_THEMES = [
  { heroImage: '/pics/hero-2.jpg' },               // Theme 0 — Wilmington Corporate
  { heroImage: '/pics/backyard-hibachi-3.jpg' },    // Theme 1 — Brandywine Suburban
  { heroImage: '/pics/hero-4.jpg' },               // Theme 2 — Party Beach
  { heroImage: '/pics/hibachi-colorado-home.jpg' }, // Theme 3 — Coastal Family
  { heroImage: '/pics/hero-1.jpg' },               // Theme 4 — Central/Southern DE
]

// ── How It Works ──────────────────────────────────────────────────────────────
const DE_HOW_IT_WORKS = [
  // Theme 0 — Wilmington Corporate
  {
    headline:   (city) => `How Corporate Hibachi Works in ${city}`,
    footerNote: (city) => `Questions? Call or text (201) 565-3878. Most ${city} bookings confirmed within hours.`,
    steps: [
      { num: '01', title: 'Request Your Event',         desc: 'Tell us your date, guest count, and outdoor space — corporate venue, private home, or backyard. We confirm fast.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking Performance',   desc: 'Guests gather around the grill for 90–120 minutes of live hibachi — fire tricks, flying shrimp, freshly grilled food cooked to order.' },
      { num: '04', title: 'Full Cleanup Included',      desc: 'Chef handles all cleanup and packs out completely. Your venue stays spotless. You keep the experience.' },
    ],
  },
  // Theme 1 — Brandywine Affluent / Suburban
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Book Your Date',               desc: 'Request your event online or by phone. Tell us your guest count and backyard setup. Quick confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Certified chef arrives with full teppan grill, propane, all ingredients, sauces, plates, and chopsticks. No shopping required.' },
      { num: '03', title: 'The Performance Begins',       desc: 'Guests gather around the grill for a live teppanyaki show — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Zero Cleanup for You',         desc: 'Chef packs everything out completely. You hosted the best dinner of the season and didn\'t touch a single dish.' },
    ],
  },
  // Theme 2 — Party Beach
  {
    headline:   (city) => `How Mobile Hibachi Works at Your ${city} Rental`,
    footerNote: (city) => `Delaware beach events book fast. Call or text (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Book From Your Rental',      desc: 'Reserve your date online or by phone — tell us your beach address, guest count, and deck or yard setup. Fast confirmation.' },
      { num: '02', title: 'Chef Comes to You',          desc: 'Certified hibachi chef arrives with full setup: teppan grill, propane, all ingredients, plates, sauces, and utensils. Nothing for you to prepare.' },
      { num: '03', title: 'Beach House Dinner Show',    desc: 'Guests gather on your deck, patio, or yard for 90–120 minutes of live hibachi — fire tricks, grilled-to-order proteins, the full show.' },
      { num: '04', title: 'Pack-Out and Done',          desc: 'Chef handles complete cleanup and takes everything with them. Your rental is spotless and you had the best dinner of the summer.' },
    ],
  },
  // Theme 3 — Coastal Family / Vacation Home
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Property`,
    footerNote: (city) => `Delaware coastal events book fast in season. Call (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Book From Your Rental',       desc: 'Reserve your date online or by phone — tell us your address, guest count, and outdoor setup. We confirm fast and coordinate travel.' },
      { num: '02', title: 'Chef Travels to You',         desc: 'Your certified teppanyaki chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Fire Coastal Dining',    desc: 'Guests gather around the grill for 90–120 minutes of live hibachi cooking — fire tricks, custom proteins, fried rice, grilled vegetables.' },
      { num: '04', title: 'Full Cleanup, Nothing Left',  desc: 'Chef handles all teardown and cleanup. Your vacation property is spotless when they leave. You keep the memories.' },
    ],
  },
  // Theme 4 — Central & Southern Delaware
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} events book 2–3 weeks out. Call or text (201) 565-3878 to secure your date.`,
    steps: [
      { num: '01', title: 'Request Your Event',           desc: 'Book online or by phone. Tell us your guest count — over 25 guests, we bring two chef stations. Confirmed quickly.' },
      { num: '02', title: 'Full Setup Arrives',           desc: 'Your chef (or two chefs for large groups) arrives with everything: grills, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking for the Crowd',   desc: 'Every guest gathers around the grill for a live teppanyaki performance — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Chef Handles Cleanup',         desc: 'Complete cleanup done by your chef. Your family keeps the memory. You do none of the work.' },
    ],
  },
]

// ── Section variants ──────────────────────────────────────────────────────────
const DE_SECTION_VARIANTS = [
  // Theme 0 — Wilmington Corporate
  {
    heroPill:           'Wilmington\'s Private Chef',
    experiencePill:     'Better Than Any Wilmington Restaurant',
    experiencePoints:   [
      { icon: '🏠', title: 'Your Space Is the Venue',          desc: 'No reservation required — your outdoor space becomes an exclusive private dining room for your group.' },
      { icon: '👨‍🍳', title: 'Private Chef, All Yours',          desc: 'A certified teppanyaki chef performs exclusively for your group — no shared dining room, no strangers at the next table.' },
      { icon: '📍', title: 'All of Northern Delaware Served',  desc: 'Greater Wilmington, Hockessin, Greenville, Newark, Bear, Pike Creek — we come to your property throughout the region.' },
      { icon: '✨', title: 'Premium Experience, Zero Cleanup', desc: 'Premium proteins cooked live on the teppan, a full fire show for your guests, and complete cleanup when dinner is done.' },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, DE`,
    areasPill:          'Serving Wilmington & Northern Delaware',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Delaware Communities`,
    areasIntro: [
      (city, state) => `We serve all of greater Wilmington — Hockessin, Greenville, Newark, Bear, Pike Creek, New Castle, Claymont, and every community throughout northern Delaware. If your outdoor space holds a grill, we can be there.`,
      (city) => `Most ${city} bookings are confirmed within hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Check Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Reason to Celebrate in ${city}`,
    occasionSubtext:       'From corporate team dinners to milestone celebrations, private hibachi is Wilmington\'s most memorable dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Wilmington & Northern Delaware Hosts Are Saying',
  },
  // Theme 1 — Brandywine Affluent / Suburban
  {
    heroPill:           'Backyard Private Dining',
    experiencePill:     'Better Than Any Restaurant',
    experiencePoints:   [
      { icon: '🏡', title: 'Your Backyard Is the Venue',       desc: 'No reservation battles, no parking, no rushed tables — your backyard becomes an exclusive private dining room.' },
      { icon: '🔥', title: 'One Chef, One Show',               desc: 'Every guest at the same grill, the same chef, the same moment — the shared experience is what makes hibachi unforgettable.' },
      { icon: '⏱️', title: '90–120 Minute Live Performance',   desc: 'A certified teppanyaki chef runs a full performance keeping every guest entertained from the first flame to the last plate.' },
      { icon: '🧹', title: 'Setup & Cleanup Included',         desc: 'Your chef arrives early, sets up completely, and packs out after dinner. You host without lifting a finger.' },
    ],
    experienceImage:    '/pics/private-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a ${city} backyard event`,
    areasPill:          'Serving Brandywine Valley & Delaware Suburbs',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of northern Delaware — Hockessin, Greenville, Newark, Bear, Middletown, Pike Creek, Wilmington, and every community throughout New Castle County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From graduation parties to neighborhood gatherings, private hibachi is the Brandywine Valley backyard upgrade you\'ve been waiting for',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Brandywine Valley & Delaware Hosts Are Saying',
  },
  // Theme 2 — Party Beach / Bachelorette
  {
    heroPill:           'Delaware Beach Private Chef',
    experiencePill:     'Your Beach House Upgrade',
    experiencePoints:   [
      { icon: '🏖️', title: 'Chef Comes to Your Rental',        desc: 'Skip the Route 1 reservation battle — your chef comes to your property with everything needed for a full teppanyaki show.' },
      { icon: '🔥', title: 'Live Show at Your Property',        desc: 'All guests gathered at the same outdoor grill for the full performance — fire tricks, flying shrimp, proteins cooked to order.' },
      { icon: '🎭', title: 'Fire Tricks & Live Cooking',        desc: '90–120 minutes of live teppanyaki entertainment — the volcano, the flaming grill, every plate cooked fresh in front of your guests.' },
      { icon: '🏠', title: 'Property Stays Spotless',           desc: 'Full setup before the event and complete pack-out after. Your vacation rental looks exactly as it did when the chef arrived.' },
    ],
    experienceImage:    '/pics/hibachi-virginia-beach.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} Delaware beach rental`,
    areasPill:          'Serving Delaware\'s Beach Communities',
    areasHeadline:      (city) => `Mobile Hibachi at Your ${city} Rental`,
    areasIntro: [
      (city, state) => `We serve the full Delaware shore — Rehoboth Beach, Dewey Beach, Lewes, Bethany Beach, Fenwick Island, Ocean View, Selbyville, and every community along the Route 1 corridor.`,
      (city) => `Delaware beach dates fill weeks in advance in summer. Call or text (201) 565-3878 to confirm your ${city} booking now.`,
    ],
    areasButton:           'Check Beach Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       'Bachelorette weekends, birthday house rentals, summer group dinners, and family beach gatherings — private hibachi is Delaware\'s most memorable beach dining experience',
    faqPill:               'Beach Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Beach Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Delaware Beach Guests Are Saying',
  },
  // Theme 3 — Coastal Family / Vacation Home
  {
    heroPill:           'Coastal Vacation Dining',
    experiencePill:     'The Dinner of the Weekend',
    experiencePoints:   [
      { icon: '🏡', title: 'Chef at Your Coastal Property',    desc: 'A certified private hibachi chef comes directly to your vacation rental or coastal home — no logistics for you to manage.' },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',      desc: 'Choose your proteins — chicken, steak, shrimp, salmon, filet mignon, lobster tail — all cooked live on the teppan.' },
      { icon: '👥', title: 'Scales from 8 to 60 Guests',      desc: 'Intimate dinners of 8–20 or larger family gatherings up to 60 — one or two stations sized to your exact guest count.' },
      { icon: '✨', title: 'Zero for You to Manage',           desc: 'Flawless setup, full service throughout, and complete cleanup. You enjoy the night; we handle everything else.' },
    ],
    experienceImage:    '/pics/hibachi-colorado.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Delaware coastal vacation property`,
    areasPill:          'Serving Delaware\'s Coastal Communities',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Surrounding Coastal Region`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Delaware's coastal region — Lewes, Bethany Beach, Fenwick Island, Ocean View, Milton, Selbyville, and every community along the Delaware shore.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Coastal Delaware events fill fast in season — don't wait.`,
    ],
    areasButton:           'Reserve Your Coastal Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone Talks About in ${city}`,
    occasionSubtext:       'Vacation rental dinners, family reunions, coastal summer gatherings, and anniversary getaways — private hibachi is what elevates a great Delaware weekend into a lasting memory',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Delaware Coastal Hosts Are Saying',
  },
  // Theme 4 — Central & Southern Delaware
  {
    heroPill:           'Delaware\'s Family Chef',
    experiencePill:     'Every Generation at the Grill',
    experiencePoints:   [
      { icon: '👥', title: 'Dual Stations for Large Groups',   desc: 'Two chef stations running simultaneously for groups of 25–60+ — faster service and double the performance energy.' },
      { icon: '👨‍👩‍👧‍👦', title: 'The Whole Family Around the Grill', desc: 'Kids, parents, and grandparents all gathered at the same teppan — multi-generational appeal that few dining formats can match.' },
      { icon: '🔥', title: 'No Restaurant Logistics',          desc: 'Fresh proteins cooked live, a full teppanyaki performance, and no reservations, parking, or rushed tables to manage.' },
      { icon: '🧹', title: 'Everything Included',              desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except enjoy the evening.' },
    ],
    experienceImage:    '/pics/hibachi-catering-2.jpg',
    experienceImageAlt: (city) => `Family hibachi celebration in ${city}, DE`,
    areasPill:          'Serving Central & Southern Delaware',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of Central Delaware`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of central and southern Delaware — Dover, Smyrna, Milford, Georgetown, Seaford, and every community throughout Kent and Sussex County.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Most large-group events are confirmed within a day.`,
    ],
    areasButton:           'Book Your Family Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Family Celebration`,
    occasionSubtext:       'Graduation parties, multigenerational family dinners, and milestone events — Delaware families celebrate big, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Central & Southern Delaware Hosts Are Saying',
  },
]

// ── City experience image map ──────────────────────────────────────────────────
const DE_CITY_IMAGE_MAP = {
  // Theme 0 — Wilmington Corporate
  'wilmington':      { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Private hibachi chef at a corporate event in ${city}, DE` },
  'new-castle':      { src: '/pics/hibachi-event.jpg',          alt: (city) => `Hibachi event in New Castle, DE` },
  'claymont':        { src: '/pics/hibachi-photo-1.jpg',        alt: (city) => `Private hibachi chef in Claymont, DE` },
  // Theme 1 — Brandywine Affluent / Suburban
  'newark':          { src: '/pics/hibachi-catering-3.jpg',     alt: (city) => `Private hibachi chef at a Newark DE graduation event` },
  'hockessin':       { src: '/pics/private-hibachi.jpg',        alt: (city) => `Private hibachi chef in Hockessin, DE` },
  'greenville':      { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Private hibachi chef at a Greenville DE estate` },
  'middletown':      { src: '/pics/backyard-hibachi.jpg',       alt: (city) => `Backyard hibachi event in Middletown, DE` },
  'bear':            { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Backyard hibachi party in Bear, DE` },
  'pike-creek':      { src: '/pics/hibachi-pic-2.jpg',          alt: (city) => `Private hibachi chef in Pike Creek, DE` },
  // Theme 2 — Party Beach
  'rehoboth-beach':  { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Mobile hibachi chef at a Rehoboth Beach vacation rental` },
  'dewey-beach':     { src: '/pics/hibachi-photo-2.jpg',        alt: (city) => `Beach house hibachi event in Dewey Beach, DE` },
  // Theme 3 — Coastal Family
  'lewes':           { src: '/pics/hibachi-austin-home.jpg',    alt: (city) => `Private hibachi chef at a Lewes DE coastal property` },
  'bethany-beach':   { src: '/pics/hibachi-colorado.jpg',       alt: (city) => `Family hibachi dinner at a Bethany Beach vacation home` },
  'fenwick-island':  { src: '/pics/mobile-hibachi-2.jpg',       alt: (city) => `Private hibachi chef at a Fenwick Island DE rental` },
  'ocean-view':      { src: '/pics/traveling-hibachi.jpg',      alt: (city) => `Hibachi chef at an Ocean View DE vacation property` },
  'milton':          { src: '/pics/hibachi-austin-2.jpg',       alt: (city) => `Private hibachi in Milton, DE` },
  'selbyville':      { src: '/pics/hibachi-raleigh.jpg',        alt: (city) => `Hibachi event in Selbyville, DE` },
  // Theme 4 — Central/Southern DE
  'dover':           { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Graduation hibachi party in Dover, DE` },
  'smyrna':          { src: '/pics/backyard-hibachi-2.jpg',     alt: (city) => `Backyard hibachi event in Smyrna, DE` },
  'milford':         { src: '/pics/hibachi-dallas-home.jpg',    alt: (city) => `Hibachi event in Milford, DE` },
  'georgetown':      { src: '/pics/hibachi-shot-2.jpg',         alt: (city) => `Private hibachi in Georgetown, DE` },
  'seaford':         { src: '/pics/hibachi-pic-3.jpg',          alt: (city) => `Hibachi chef at a Seaford DE event` },
}

// ── Support images for profileIdx cities ─────────────────────────────────────
const DE_SUPPORT_IMAGES = {
  'wilmington': {
    testimonial: { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Corporate hibachi event in Wilmington, DE`,          caption: 'Wilmington corporate dining',         intro: (city) => `Wilmington professionals set the standard. Here's what they find:` },
    cta:         { src: '/pics/hibachi-event.jpg',           alt: (city) => `Private hibachi chef setting up in Wilmington, DE`,  caption: 'Your Wilmington event starts here' },
  },
  'newark': {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',     alt: (city) => `Graduation hibachi event in Newark, DE`,             caption: 'Newark graduation season',            intro: (city) => `Newark and UD hosts keep coming back. Here's what they say:` },
    cta:         { src: '/pics/hibachi-dallas-home.jpg',     alt: (city) => `Private hibachi chef in Newark, DE`,                 caption: 'The Newark graduation dinner standard' },
  },
  'rehoboth-beach': {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Bachelorette hibachi at a Rehoboth Beach rental`,    caption: 'Rehoboth beach house hibachi',         intro: (city) => `Rehoboth Beach guests come back every summer. Here's why:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',         alt: (city) => `Mobile hibachi chef in Rehoboth Beach, DE`,          caption: 'The Rehoboth dinner of the summer' },
  },
  'dover': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Graduation hibachi party in Dover, DE`,              caption: 'Dover graduation season',             intro: (city) => `Dover families celebrate big. Here's what they say:` },
    cta:         { src: '/pics/hibachi-event.jpg',           alt: (city) => `Private hibachi chef at a Dover DE event`,           caption: 'Dover\'s backyard party standard' },
  },
  'hockessin': {
    testimonial: { src: '/pics/private-hibachi.jpg',        alt: (city) => `Private hibachi dinner party in Hockessin, DE`,      caption: 'Hockessin private dining events',     intro: (city) => `Hockessin hosts have high standards. Here's what they find:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',       alt: (city) => `Private hibachi chef in Hockessin, DE`,              caption: 'The Hockessin private dining standard' },
  },
  'greenville': {
    testimonial: { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Estate hibachi dinner in Greenville, DE`,            caption: 'Greenville estate entertaining',       intro: (city) => `Greenville hosts expect the exceptional. Here's what they find:` },
    cta:         { src: '/pics/private-hibachi.jpg',         alt: (city) => `Private hibachi chef at a Greenville DE estate`,     caption: 'Greenville\'s private dining standard' },
  },
  'lewes': {
    testimonial: { src: '/pics/hibachi-austin-home.jpg',    alt: (city) => `Private hibachi dinner at a Lewes DE beach house`,   caption: 'Lewes vacation home hibachi',          intro: (city) => `Lewes hosts keep coming back every summer. Here's why:` },
    cta:         { src: '/pics/hibachi-colorado.jpg',        alt: (city) => `Private hibachi chef in Lewes, DE`,                  caption: 'The Lewes coastal dinner' },
  },
  'bethany-beach': {
    testimonial: { src: '/pics/hibachi-colorado.jpg',       alt: (city) => `Family reunion hibachi at a Bethany Beach rental`,   caption: 'Bethany Beach family vacations',       intro: (city) => `Bethany Beach families book us year after year. Here's why:` },
    cta:         { src: '/pics/traveling-hibachi.jpg',       alt: (city) => `Mobile hibachi chef in Bethany Beach, DE`,           caption: 'The Bethany Beach family dinner' },
  },
  'dewey-beach': {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',        alt: (city) => `Bachelorette hibachi weekend in Dewey Beach, DE`,    caption: 'Dewey Beach bachelorette weekends',    intro: (city) => `Dewey Beach groups say it best:` },
    cta:         { src: '/pics/hibachi-virginia-beach.jpg',  alt: (city) => `Mobile hibachi chef in Dewey Beach, DE`,             caption: 'The Dewey Beach weekend dinner' },
  },
  'bear': {
    testimonial: { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Backyard hibachi party in Bear, DE`,                 caption: 'Bear backyard hibachi events',         intro: (city) => `Bear families celebrate in the backyard. Here's what they find:` },
    cta:         { src: '/pics/backyard-hibachi.jpg',        alt: (city) => `Private hibachi chef at a Bear DE backyard event`,   caption: 'Your Bear backyard, upgraded' },
  },
  'middletown': {
    testimonial: { src: '/pics/backyard-hibachi.jpg',       alt: (city) => `Backyard graduation party in Middletown, DE`,        caption: 'Middletown graduation celebrations',   intro: (city) => `Middletown families know how to celebrate:` },
    cta:         { src: '/pics/hibachi-shot-1.jpg',          alt: (city) => `Backyard hibachi chef in Middletown, DE`,            caption: 'Middletown\'s backyard party standard' },
  },
  'pike-creek': {
    testimonial: { src: '/pics/hibachi-pic-2.jpg',          alt: (city) => `Private hibachi dinner in Pike Creek, DE`,           caption: 'Pike Creek private dining events',     intro: (city) => `Pike Creek hosts set the standard. Here's what they find:` },
    cta:         { src: '/pics/private-hibachi.jpg',         alt: (city) => `Private hibachi chef in Pike Creek, DE`,             caption: 'The Pike Creek private dining standard' },
  },
  'smyrna': {
    testimonial: { src: '/pics/backyard-hibachi-2.jpg',     alt: (city) => `Backyard hibachi party in Smyrna, DE`,               caption: 'Smyrna backyard celebrations',         intro: (city) => `Smyrna families say it best:` },
    cta:         { src: '/pics/hibachi-dallas-home.jpg',     alt: (city) => `Backyard hibachi chef in Smyrna, DE`,                caption: 'Your Smyrna backyard celebration' },
  },
}

// ── Support fallback images (per theme) ───────────────────────────────────────
const DE_SUPPORT_FALLBACKS = [
  // Theme 0 — Wilmington Corporate
  {
    testimonial: { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Corporate hibachi event in ${city}, DE`,             caption: 'Delaware professionals agree',         intro: (city) => `${city} hosts keep booking us. Here's what they say:` },
    cta:         { src: '/pics/hibachi-event.jpg',           alt: (city) => `Private hibachi chef in ${city}, DE`,                caption: 'Your private Delaware evening' },
  },
  // Theme 1 — Brandywine Suburban
  {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',    alt: (city) => `Backyard hibachi event in ${city}, DE`,              caption: 'Brandywine Valley hosts agree',        intro: (city) => `${city} hosts say it best:` },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',      alt: (city) => `Private hibachi chef in ${city}, DE`,                caption: 'Your backyard, upgraded' },
  },
  // Theme 2 — Party Beach
  {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Beach house hibachi in ${city}, DE`,                 caption: 'Delaware beach guests agree',          intro: (city) => `${city} summer guests keep booking us. Here's why:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',         alt: (city) => `Mobile hibachi chef in ${city}, DE`,                 caption: 'The Delaware shore dinner upgrade' },
  },
  // Theme 3 — Coastal Family
  {
    testimonial: { src: '/pics/hibachi-colorado.jpg',       alt: (city) => `Vacation rental hibachi in ${city}, DE`,             caption: 'Delaware coastal hosts agree',         intro: (city) => `${city} vacation guests keep coming back. Here's why:` },
    cta:         { src: '/pics/traveling-hibachi.jpg',       alt: (city) => `Private hibachi chef in ${city}, DE`,                caption: 'The Delaware coastal dinner' },
  },
  // Theme 4 — Central/Southern Delaware
  {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Family hibachi gathering in ${city}, DE`,            caption: 'Central Delaware families celebrate',  intro: (city) => `${city} families know how to celebrate. Here's what they say:` },
    cta:         { src: '/pics/hibachi-event.jpg',           alt: (city) => `Private hibachi chef in ${city}, DE`,                caption: 'Your Delaware celebration, elevated' },
  },
]

// ── Closing variants (DE generic 90–94) ───────────────────────────────────────
export const DE_CLOSING_VARIANTS = [
  // 90 — Wilmington Corporate
  {
    headline: (city) => `Your ${city} Event Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Wilmington corporate and weekend slots fill 2–3 weeks out. Check your date now.`,
  },
  // 91 — Brandywine Suburban
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Book It`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `Brandywine Valley weekends book 2–4 weeks ahead. Secure your date now.`,
  },
  // 92 — Party Beach
  {
    headline: (city) => `The Beach House Dinner Everyone Remembers`,
    sub:      (city) => `A mobile hibachi chef comes to your ${city} rental — grill, ingredients, full show, and complete cleanup. From $60 per adult.`,
    urgency:  `Delaware beach season books fast — confirm your summer date 6–8 weeks ahead.`,
  },
  // 93 — Coastal Family
  {
    headline: (city) => `The Coastal Dinner Your ${city} Weekend Needed`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} vacation property. Full setup, premium proteins, complete cleanup. From $60 per adult.`,
    urgency:  `Delaware coastal peak season fills fast. Reserve your date now.`,
  },
  // 94 — Central/Southern Delaware
  {
    headline: (city) => `${city}'s Most Memorable Celebration — Book Yours`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  'Graduation season books early — confirm your Delaware date now.',
  },
]

// ── City-specific closings (DE city-specific 95–107) ─────────────────────────
export const DE_CITY_CLOSINGS = [
  // 95 — Wilmington (profileIdx 0)
  {
    headline: (city) => `Wilmington's Corporate Dining Standard — Book It`,
    sub:      (city) => `A certified teppanyaki chef for your Wilmington corporate event or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Wilmington corporate and weekend events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 96 — Newark (profileIdx 1)
  {
    headline: (city) => `Newark Graduation Season — Don't Wait`,
    sub:      (city) => `When every restaurant near campus is fully booked, we come to you. A certified hibachi chef at your Newark home or backyard. From $60/adult.`,
    urgency:  `Newark and UD graduation weekends book 4–5 weeks out. Reserve your date now.`,
  },
  // 97 — Rehoboth Beach (profileIdx 2)
  {
    headline: (city) => `The Rehoboth Beach Dinner Your Group Has Been Waiting For`,
    sub:      (city) => `A certified hibachi chef at your Rehoboth Beach rental — grill, ingredients, full show, complete cleanup. From $60/adult.`,
    urgency:  `Rehoboth summer dates fill 6–8 weeks out. Reserve yours now before the season fills.`,
  },
  // 98 — Dover (profileIdx 3)
  {
    headline: (city) => `Dover Graduation Season — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef comes to your Dover home or outdoor venue. All ingredients, live performance, full cleanup. From $60/adult.`,
    urgency:  `Dover graduation season (May–June) fills fast. Check your date now.`,
  },
  // 99 — Hockessin (profileIdx 4)
  {
    headline: (city) => `Hockessin's Private Dining Standard — Book It`,
    sub:      (city) => `A certified hibachi chef at your Hockessin property. Full setup, hand-selected proteins, complete cleanup. From $60/adult.`,
    urgency:  `Hockessin and Brandywine Valley events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 100 — Greenville (profileIdx 5)
  {
    headline: (city) => `Greenville Estate Dining — Reserve Your Chef`,
    sub:      (city) => `A certified teppanyaki chef at your Greenville estate or private property. Premium ingredients, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `Greenville private events book quickly. Reserve your date well in advance.`,
  },
  // 101 — Lewes (profileIdx 6)
  {
    headline: (city) => `The Lewes Coastal Dinner Everyone Remembers`,
    sub:      (city) => `A certified hibachi chef at your Lewes vacation home or coastal property. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Lewes summer season fills 5–7 weeks out. Reserve your date now.`,
  },
  // 102 — Bethany Beach (profileIdx 7)
  {
    headline: (city) => `The Bethany Beach Dinner Your Family Deserves`,
    sub:      (city) => `A certified hibachi chef comes to your Bethany Beach rental or beach house. Full setup, fresh proteins, complete cleanup. From $60/adult.`,
    urgency:  `Bethany Beach summer dates fill fast. Book your date now.`,
  },
  // 103 — Dewey Beach (profileIdx 8)
  {
    headline: (city) => `Your Dewey Beach Weekend Just Found Its Best Night`,
    sub:      (city) => `A certified mobile hibachi chef at your Dewey Beach rental. Full setup, full show, complete cleanup. From $60/adult.`,
    urgency:  `Dewey Beach summer weekends fill 6–8 weeks out. Check availability now.`,
  },
  // 104 — Bear (profileIdx 9)
  {
    headline: (city) => `Bear's Best Backyard Party — Book Yours`,
    sub:      (city) => `A certified hibachi chef comes to your Bear property. All ingredients, full live performance, complete cleanup. From $60/adult.`,
    urgency:  `Bear weekend slots fill 2–3 weeks out. Check your date now.`,
  },
  // 105 — Middletown (profileIdx 10)
  {
    headline: (city) => `Middletown's Backyard Party Standard — Book It`,
    sub:      (city) => `A certified hibachi chef at your Middletown home. All proteins, full show, complete cleanup. From $60/adult.`,
    urgency:  `Middletown graduation and summer weekends book 2–3 weeks ahead. Confirm your date.`,
  },
  // 106 — Pike Creek (profileIdx 11)
  {
    headline: (city) => `Pike Creek's Private Dining Standard — Book It`,
    sub:      (city) => `A certified teppanyaki chef at your Pike Creek home. Full setup, premium ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Pike Creek weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 107 — Smyrna (profileIdx 12)
  {
    headline: (city) => `Smyrna's Best Backyard Celebration — Book Yours`,
    sub:      (city) => `A certified hibachi chef comes to your Smyrna backyard. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Smyrna graduation and summer weekends fill quickly. Check your date now.`,
  },
]

// ── Intro variants (DE generic 90–94) ─────────────────────────────────────────
export const DE_INTRO_VARIANTS = [
  // 90 — Wilmington Metro / Northern Delaware
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for the Greater Wilmington Area`,
    opening:  (city, state) =>
      `Northern Delaware knows how to host. The communities surrounding the Wilmington metro — from historic waterfront neighborhoods along the Delaware River to residential suburbs throughout New Castle County — have always had their own standard for a proper gathering. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with everything included: the full setup, all fresh ingredients, and a live-fire cooking performance that turns any gathering in this part of Delaware into the evening your guests are still talking about the following week.`,
    middle:   (city, state) =>
      `Your chef arrives with a propane teppan grill, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events up to 60+. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out during peak season. Starting at $60 per adult, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of northern Delaware.`,
  },
  // 91 — Brandywine Affluent / Suburban
  {
    headline: (city) => `Hibachi at Home in ${city}: When Your Backyard Becomes Delaware's Best Dinner Table`,
    opening:  (city, state) =>
      `You've invested in the outdoor space. The patio, the backyard, the summer evening setup that finally lives up to the home. Now give it the event it deserves. Private hibachi at home in ${city} brings a certified teppanyaki chef directly to your property — the full grill, all ingredients, the live cooking performance, and total cleanup. Your guests will be talking about this dinner through next season.`,
    middle:   (city, state) =>
      `From the first onion volcano to the final plate of fried rice, your chef works the crowd for 90–120 minutes straight. Every protein cooked to order at the grill: chicken, steak, shrimp, salmon, and premium upgrades like filet mignon or lobster tail. Choose two proteins per guest at the standard rate or mix and match across the group.`,
    closing:  (city, state) =>
      `${city} weekend evenings book 2–4 weeks ahead. Graduation parties, neighborhood gatherings, anniversary dinners, and milestone celebrations are our most common bookings across the Brandywine Valley and Delaware suburbs. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 92 — Party Beach (not used by any non-profileIdx city but required for indexing)
  {
    headline: (city) => `Mobile Hibachi in ${city}: The Beach House Dinner Your Group Has Been Waiting For`,
    opening:  (city, state) =>
      `You have the beach house. You have the group. You planned the weekend down to the last detail — and the best dinner of the trip is the one nobody had to book a reservation for on Route 1. Mobile hibachi at your ${city} rental brings a certified teppanyaki chef directly to your property. The full grill, all ingredients, a live-fire performance built around your guests, and complete cleanup when dinner is done.`,
    middle:   (city, state) =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The show runs from first flame to last plate — no Route 1 restaurant logistics, no group car coordination, no waiting for a table that was never big enough anyway. Every guest at the same outdoor table watching the same performance.`,
    closing:  (city, state) =>
      `Delaware beach events book 6–8 weeks in advance for peak season dates. Starting at $60 per adult, $600 event minimum. Confirm outdoor open-flame cooking is permitted at your rental before booking — most Delaware shore properties allow it.`,
  },
  // 93 — Coastal Family / Vacation Home
  {
    headline: (city) => `Hibachi at Home in ${city}: The Coastal Dinner Your Delaware Weekend Deserves`,
    opening:  (city, state) =>
      `People come to ${city} for the coast, the calm, and the sense that this particular weekend is going to be something different. Private hibachi at your ${city} rental or vacation home makes the best night of the trip happen at the property — a certified teppanyaki chef drives to your house with the full setup, cooks on your deck or patio in front of everyone, and leaves the space spotless. No driving to a packed beach restaurant. No fighting the summer crowd.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The live cooking performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your rental property is immaculate when the chef leaves.`,
    closing:  (city, state) =>
      `Delaware coastal events book 3–5 weeks ahead in peak summer season. Starting at $60 per adult, $600 event minimum. Most quotes returned same day. Travel fees may apply for remote locations — always disclosed upfront.`,
  },
  // 94 — Central & Southern Delaware
  {
    headline: (city) => `Hibachi at Home in ${city}: The Backyard Party Central Delaware Was Made For`,
    opening:  (city, state) =>
      `${city} knows how to celebrate. The backyard culture runs through every season — graduation parties in June, birthday milestones through summer, family reunions that bring everyone back under the same roof. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup: propane grill, all proteins, and a live-fire cooking performance that turns any backyard gathering into the evening your guests still talk about next year.`,
    middle:   (city, state) =>
      `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for large graduations, family reunions, and community events are our most common format across central and southern Delaware.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out during peak season. Graduation season (May–June) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── City-specific intros (DE city-specific 95–107) ────────────────────────────
export const DE_CITY_INTROS = [
  // 95 — Wilmington (profileIdx 0)
  {
    headline: () => `Hibachi Catering in Wilmington`,
    opening:  () =>
      `Wilmington runs on relationships — the financial services firms that have defined this city for generations, the law firms incorporated here because Delaware wrote the rules, the healthcare systems that anchor the economy, and the professionals who entertain because relationships require it. Private hibachi catering in Wilmington brings a certified teppanyaki chef to your outdoor space — corporate venue, private home in Hockessin, backyard in Greenville, or rooftop terrace downtown — with the full setup and a live cooking performance that turns any gathering into the event people bring up at the next one.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For corporate Wilmington events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your venue stays spotless.`,
    closing:  () =>
      `Wilmington corporate events and private gatherings book 2–3 weeks out. Serving Wilmington and all of northern Delaware — Hockessin, Greenville, Newark, Bear, Pike Creek, New Castle, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 96 — Newark (profileIdx 1)
  {
    headline: () => `Hibachi Catering in Newark`,
    opening:  () =>
      `Newark in May is its own kind of event — graduation season at the University of Delaware turns the entire city into a celebration, and every backyard within ten miles of campus becomes the venue for the party the graduating class has been waiting for. Private hibachi catering in Newark brings a certified teppanyaki chef to your property for graduation parties, family milestones, and corporate events in Delaware's most university-driven city. The format that makes even the most jaded senior class stop looking at their phone.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For large Newark graduation events over 25, we bring two chef stations. Full cleanup when dinner is done. Your backyard or venue is spotless when the chef leaves.`,
    closing:  () =>
      `Newark graduation season (May–June) books 4–5 weeks ahead — UD weekends fill fastest. Serving Newark and all of northern Delaware including Bear, Middletown, Wilmington, Hockessin, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 97 — Rehoboth Beach (profileIdx 2)
  {
    headline: () => `Mobile Hibachi in Rehoboth Beach`,
    opening:  () =>
      `Rehoboth Beach is where Washington DC comes to unwind every summer — and the groups that rent houses here are not looking for another crowded reservation at a restaurant on the Avenue. The bachelorette crews who booked the house months ago, the anniversary couples who drove down on Thursday, the friend groups who've been doing Rehoboth for fifteen years — they all came for the experience, not just the destination. Mobile hibachi at your Rehoboth Beach rental brings a certified teppanyaki chef directly to your property. The full setup. The live performance. No Route 1 logistics required.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or backyard. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. Full cleanup when dinner is done. Your Rehoboth rental stays spotless.`,
    closing:  () =>
      `Rehoboth Beach summer events book 6–8 weeks ahead for peak July and August dates. Bachelorette weekends, birthday house rentals, and vacation group dinners are our most common Rehoboth bookings. Serving Rehoboth Beach and all of the Delaware shore. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 98 — Dover (profileIdx 3)
  {
    headline: () => `Hibachi Catering in Dover`,
    opening:  () =>
      `Dover is Delaware's capital city — and the gatherings that happen here reflect that. State government team dinners, Delaware State University graduation celebrations for HBCU families driving in from across the mid-Atlantic, military family milestone events from the Dover Air Force Base community, and the corporate and professional events of a city that has built its own distinct identity apart from Wilmington. Private hibachi catering in Dover brings a certified teppanyaki chef to your property or outdoor venue with the full setup and a live cooking performance that makes any gathering worth attending.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For large Dover events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Dover graduation season and summer events book 2–3 weeks out. Serving Dover and all of central Delaware — Smyrna, Milford, Camden, Harrington, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 99 — Hockessin (profileIdx 4)
  {
    headline: () => `Private Hibachi Chef in Hockessin`,
    opening:  () =>
      `Hockessin sets the standard for private entertaining in Delaware. The graduation parties here are planned months in advance, the anniversary dinners are occasions worth the preparation, and the backyard layouts were designed with exactly this kind of evening in mind. Private hibachi at home in Hockessin brings a certified teppanyaki chef to your property with the full setup, hand-selected proteins, and a live cooking performance that is genuinely worth describing at the next dinner. The chef comes to you — no reservations, no crowded dining room, no competition for the evening.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including premium upgrades like filet mignon and lobster tail, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Hockessin property is spotless when the chef leaves.`,
    closing:  () =>
      `Hockessin backyard evenings book 2–4 weeks ahead. Graduation season (May–June) fills fastest — reserve 4–5 weeks out for Saturday events. Serving Hockessin and all of the Brandywine Valley including Greenville, Wilmington, Newark, and Pike Creek. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available.`,
  },
  // 100 — Greenville (profileIdx 5)
  {
    headline: () => `Private Hibachi Chef in Greenville`,
    opening:  () =>
      `Greenville is Delaware's most private address — the Brandywine Valley estates, the horse country properties, the homes where the standard for any evening is set by the property itself. Private hibachi at a Greenville estate brings a certified teppanyaki chef to your outdoor space with the full setup, hand-selected premium proteins, and a live-fire performance that earns its place on a Greenville back terrace. Intimate dinner parties, milestone anniversaries, and executive gatherings at the level this address requires.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, scallops, premium shrimp — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, patio, or estate grounds. The performance runs 90–120 minutes from first flame to final plate. Every plate cooked to order, every guest at the same table, the entire show designed around your group. Full cleanup when dinner is done. Your property is exactly as you left it.`,
    closing:  () =>
      `Greenville private events book quickly — the calendar fills with Brandywine Valley estate gatherings through spring and summer. Serving Greenville and all of the Brandywine Valley — Wilmington, Hockessin, Centerville, Rockland, and surrounding communities. Starting at $60/adult, $600 minimum. Premium protein packages available for Greenville events. Most quotes returned same day.`,
  },
  // 101 — Lewes (profileIdx 6)
  {
    headline: () => `Private Hibachi Chef in Lewes`,
    opening:  () =>
      `Lewes is Delaware's most gracious beach town — the historic waterfront, the Cape Henlopen light, the kind of vacation property that owners return to every summer not because of the beach alone but because of what the town feels like at dusk with a glass of wine on the back porch. Private hibachi at your Lewes vacation home brings a certified teppanyaki chef to your outdoor space with the full setup, premium proteins, and a live cooking performance that makes this particular summer the one you reference for years. No crowded restaurant on Second Street. The chef comes to you.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Premium upgrades — filet mignon, lobster tail, scallops — are available for any Lewes occasion. Full cleanup when dinner is done.`,
    closing:  () =>
      `Lewes summer events book 5–7 weeks ahead for peak July and August dates. Anniversary dinners, family vacation groups, and intimate private gatherings are our most common Lewes bookings. Serving Lewes and the Cape Henlopen region — Rehoboth Beach, Bethany Beach, Milton, and surrounding communities. Starting at $60/adult, $600 minimum. Confirm outdoor cooking is permitted at your property before reserving.`,
  },
  // 102 — Bethany Beach (profileIdx 7)
  {
    headline: () => `Mobile Hibachi in Bethany Beach`,
    opening:  () =>
      `Bethany Beach earns its name — the Quiet Resorts reputation is real, and the families who come here return year after year because of exactly that. Three generations renting the same house on the same week, the cousins who don't see each other except in Bethany, the multigenerational reunion dinner that needs to happen somewhere everyone can fit. Mobile hibachi at your Bethany Beach rental brings a certified teppanyaki chef to your vacation property with the full setup and a live cooking performance that makes the reunion dinner the night everyone is still talking about on the drive home.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, yard, or patio. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your group. For larger Bethany Beach family gatherings, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Bethany Beach summer events book 5–7 weeks ahead in peak season. Family reunions, anniversary getaways, birthday dinners, and multigenerational vacation group events are our most common Bethany bookings. Serving Bethany Beach and the southern Delaware shore — Lewes, Fenwick Island, Ocean View, Selbyville, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 103 — Dewey Beach (profileIdx 8)
  {
    headline: () => `Mobile Hibachi in Dewey Beach`,
    opening:  () =>
      `Dewey Beach has one speed, and it isn't slow. The bachelorette crews who booked the group house in January, the birthday weekends that turned into a week, the summer regulars who've been coming here since college and aren't stopping — they came for the energy, and the dinner that matches it is the one that happens at the house instead of waiting for a table. Mobile hibachi at your Dewey Beach rental brings a certified teppanyaki chef to your deck or backyard with the full setup and a live-fire performance that gives Friday night its anchor. The show everyone gathers for before the rest of the evening begins.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck or yard. The show runs 90–120 minutes — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. Full cleanup when dinner is done. Your Dewey Beach rental stays spotless.`,
    closing:  () =>
      `Dewey Beach summer events book 6–8 weeks ahead for peak season dates. Bachelorette weekends, birthday trips, and group house vacation events are our most common Dewey bookings. Serving Dewey Beach and the Rehoboth shore corridor. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 104 — Bear (profileIdx 9)
  {
    headline: () => `Backyard Hibachi in Bear`,
    opening:  () =>
      `Bear is where northern Delaware families put down roots — the neighborhoods where graduation season means every other driveway has a balloon arch, where the Fourth of July backyard setup starts before noon, and where the standard for a great summer event is set by the families who have been doing this for twenty years. Backyard hibachi in Bear brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that upgrades any gathering from a good time into the party the neighborhood still references at the next block event.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Bear gatherings, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Bear weekend evenings book 2–3 weeks ahead. Graduation season (May–June) fills fastest — book 3–4 weeks out for Saturday events. Serving Bear and surrounding New Castle County — Newark, Middletown, Wilmington, New Castle, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 105 — Middletown (profileIdx 10)
  {
    headline: () => `Backyard Hibachi in Middletown`,
    opening:  () =>
      `Middletown has grown faster than almost any city in Delaware — new neighborhoods, new families, and a graduation season that gets larger every spring as the community expands. Backyard hibachi in Middletown brings a certified teppanyaki chef to your property with the full setup and a live cooking performance built for exactly the kind of crowd that shows up at a Middletown summer event. The graduation party the neighborhood heard about for weeks before. The birthday that stopped looking like a dinner and started looking like an event.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Middletown weekend evenings book 2–3 weeks ahead. Graduation season (May–June) is our fastest-filling window — book 3–4 weeks out for Saturday events. Serving Middletown and central northern Delaware including Newark, Bear, Smyrna, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 106 — Pike Creek (profileIdx 11)
  {
    headline: () => `Private Hibachi Chef in Pike Creek`,
    opening:  () =>
      `Pike Creek is where Wilmington professionals come home to — the planned community in the Brandywine Valley foothills where the backyards are maintained, the kitchens are renovated, and the dinner parties actually happen on the patio instead of inside. Private hibachi at home in Pike Creek brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that makes any occasion in this neighborhood the one your guests are texting about on the drive home.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Premium proteins — filet mignon, lobster tail, scallops — available for any Pike Creek occasion. Full cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Pike Creek backyard evenings book 2–3 weeks ahead. Serving Pike Creek and the greater Brandywine Valley — Hockessin, Greenville, Wilmington, Newark, and Bear. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 107 — Smyrna (profileIdx 12)
  {
    headline: () => `Backyard Hibachi in Smyrna`,
    opening:  () =>
      `Smyrna has been growing fast — new neighborhoods between Wilmington and Dover, a strong family community that knows how to put together a graduation party, and a backyard culture that's been part of central Delaware life for generations. Backyard hibachi in Smyrna brings a certified teppanyaki chef to your property with the full setup and a live-fire performance that turns any gathering into the kind of evening your guests are planning around when the next occasion comes up. One chef for the dinner party. Two stations for the graduation crowd.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For Smyrna events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Smyrna weekend evenings book 2–3 weeks ahead. Graduation season and summer weekends fill fastest. Serving Smyrna and central Delaware — Middletown, Dover, Milford, Bear, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── Blog posts (5 theme arrays × 3 posts) ─────────────────────────────────────
const DE_BLOG_POSTS = [
  // Theme 0 — Wilmington Corporate (variant 0)
  [
    { slug: 'hibachi-catering-corporate-events',    title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',            excerpt: 'Team dinners, client entertainment, and Wilmington professional events — why a private hibachi chef beats every other corporate format.', date: '2025-03-15' },
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',            excerpt: 'Why backyard and beach house hibachi has become Delaware\'s go-to bachelorette dinner — fire, food, and zero logistics.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: Which Is Worth It?',                      excerpt: 'Wilmington hibachi restaurants vs. a private chef at home — the real cost, experience quality, and convenience breakdown.', date: '2025-01-22' },
  ],
  // Theme 1 — Brandywine Suburban (variant 1)
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',           excerpt: 'From Hockessin to Newark — how to host a backyard hibachi birthday party that outclasses any Delaware restaurant.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',              excerpt: 'Everything you need to prepare for a private hibachi chef at your Brandywine Valley or Delaware suburban home.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                             excerpt: 'A full pricing breakdown for Delaware hibachi events — what\'s included and what to expect.', date: '2025-01-15' },
  ],
  // Theme 2 — Party Beach (variant 2)
  [
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',            excerpt: 'Rehoboth Beach and Dewey Beach hosts: what happens from booking to cleanup at a Delaware shore hibachi event.', date: '2024-11-20' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Private Hibachi vs. Route 1 Restaurants: The Delaware Shore Verdict',   excerpt: 'Why Delaware beach vacation rental guests are choosing private hibachi over restaurant dining every summer.', date: '2025-01-22' },
    { slug: 'hibachi-bachelorette-party',           title: 'Delaware Beach Bachelorette Weekend: Why Hibachi Wins Every Time',       excerpt: 'From Rehoboth to Dewey Beach — how hibachi became Delaware\'s most-requested bachelorette dinner experience.', date: '2025-03-15' },
  ],
  // Theme 3 — Coastal Family (variant 0, same as theme 0)
  [
    { slug: 'hibachi-catering-corporate-events',    title: 'Why Hibachi Catering Is the Best Choice for Vacation Rental Groups',     excerpt: 'Delaware coastal vacation groups, Lewes retreat dinners, Bethany Beach family reunions — why private hibachi is the right call.', date: '2025-03-15' },
    { slug: 'hibachi-bachelorette-party',           title: 'Delaware Coastal Weekend: The Hibachi Option',                           excerpt: 'Why vacation rental groups in Lewes, Bethany Beach, and Fenwick Island keep booking private hibachi.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Vacation Rental Hibachi vs. Restaurant: Delaware Coast Edition',         excerpt: 'Why weekend rental groups along the Delaware shore are choosing private hibachi over restaurant dining.', date: '2025-01-22' },
  ],
  // Theme 4 — Central/Southern Delaware (variant 1)
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',           excerpt: 'From Dover to Georgetown — how to host a backyard hibachi birthday party that stands apart in central Delaware.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',              excerpt: 'Everything Dover, Milford, and Georgetown hosts need before the private hibachi chef arrives.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost in Delaware?',                 excerpt: 'A full pricing breakdown for central and southern Delaware hibachi events.', date: '2025-01-15' },
  ],
]

// ── Major cities map (all 22 DE cities) ───────────────────────────────────────
const DE_MAJOR_CITIES = {
  // ── Theme 0 — Wilmington Metro / Corporate ──────────────────────────────────
  'wilmington':      { v: 0, profileIdx: 0,  nearby: ['Hockessin','Greenville','Newark','Bear','Pike Creek','New Castle','Claymont','Middletown'] },
  'new-castle':      { v: 0,                 nearby: ['Wilmington','Bear','Claymont','Middletown','Newark','Pike Creek'] },
  'claymont':        { v: 0,                 nearby: ['Wilmington','New Castle','Bear','Newark'] },
  // ── Theme 1 — Brandywine Affluent / Suburban ────────────────────────────────
  'newark':          { v: 1, profileIdx: 1,  nearby: ['Wilmington','Middletown','Bear','Hockessin','Pike Creek','Smyrna'] },
  'hockessin':       { v: 1, profileIdx: 4,  nearby: ['Wilmington','Greenville','Newark','Pike Creek'] },
  'greenville':      { v: 1, profileIdx: 5,  nearby: ['Wilmington','Hockessin','Pike Creek','Newark'] },
  'middletown':      { v: 1, profileIdx: 10, nearby: ['Newark','Bear','Smyrna','Wilmington','Dover'] },
  'bear':            { v: 1, profileIdx: 9,  nearby: ['Newark','Middletown','Wilmington','New Castle','Pike Creek'] },
  'pike-creek':      { v: 1, profileIdx: 11, nearby: ['Wilmington','Hockessin','Greenville','Bear','Newark'] },
  // ── Theme 2 — Party Beach / Bachelorette ────────────────────────────────────
  'rehoboth-beach':  { v: 2, profileIdx: 2,  nearby: ['Dewey Beach','Lewes','Bethany Beach','Fenwick Island','Ocean View','Milford'] },
  'dewey-beach':     { v: 2, profileIdx: 8,  nearby: ['Rehoboth Beach','Lewes','Bethany Beach','Milford'] },
  // ── Theme 3 — Coastal Family / Vacation Home ────────────────────────────────
  'lewes':           { v: 3, profileIdx: 6,  nearby: ['Rehoboth Beach','Bethany Beach','Milton','Dewey Beach','Georgetown'] },
  'bethany-beach':   { v: 3, profileIdx: 7,  nearby: ['Lewes','Rehoboth Beach','Fenwick Island','Ocean View','Selbyville','Milford'] },
  'fenwick-island':  { v: 3,                 nearby: ['Bethany Beach','Selbyville','Ocean View','Lewes','Rehoboth Beach'] },
  'ocean-view':      { v: 3,                 nearby: ['Bethany Beach','Fenwick Island','Selbyville','Milford','Lewes'] },
  'milton':          { v: 3,                 nearby: ['Lewes','Georgetown','Rehoboth Beach','Milford','Selbyville'] },
  'selbyville':      { v: 3,                 nearby: ['Fenwick Island','Ocean View','Georgetown','Bethany Beach'] },
  // ── Theme 4 — Central & Southern Delaware / Family ──────────────────────────
  'dover':           { v: 4, profileIdx: 3,  nearby: ['Smyrna','Milford','Georgetown','Middletown','Seaford'] },
  'smyrna':          { v: 4, profileIdx: 12, nearby: ['Dover','Middletown','Milford','Georgetown','Bear'] },
  'milford':         { v: 4,                 nearby: ['Dover','Georgetown','Seaford','Bethany Beach','Smyrna','Lewes'] },
  'georgetown':      { v: 4,                 nearby: ['Milford','Seaford','Lewes','Milton','Selbyville','Rehoboth Beach'] },
  'seaford':         { v: 4,                 nearby: ['Georgetown','Milford','Selbyville','Bridgeville'] },
}

// ── Display name overrides ────────────────────────────────────────────────────
const DE_CITY_DISPLAY_NAMES = {
  'rehoboth-beach': 'Rehoboth Beach',
  'bethany-beach':  'Bethany Beach',
  'dewey-beach':    'Dewey Beach',
  'fenwick-island': 'Fenwick Island',
  'ocean-view':     'Ocean View',
  'new-castle':     'New Castle',
  'pike-creek':     'Pike Creek',
}

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const DE_PROFILE_H1_PREFIXES = [
  'Hibachi Catering in',     // 0  — Wilmington
  'Hibachi Catering in',     // 1  — Newark
  'Mobile Hibachi in',       // 2  — Rehoboth Beach
  'Hibachi Catering in',     // 3  — Dover
  'Private Hibachi Chef in', // 4  — Hockessin
  'Private Hibachi Chef in', // 5  — Greenville
  'Private Hibachi Chef in', // 6  — Lewes
  'Mobile Hibachi in',       // 7  — Bethany Beach
  'Mobile Hibachi in',       // 8  — Dewey Beach
  'Backyard Hibachi in',     // 9  — Bear
  'Backyard Hibachi in',     // 10 — Middletown
  'Private Hibachi Chef in', // 11 — Pike Creek
  'Backyard Hibachi in',     // 12 — Smyrna
]

const DE_THEME_H1_PREFIXES = [
  'Hibachi at Home in', // v=0 Wilmington Metro generic (New Castle, Claymont)
  'Hibachi at Home in', // v=1 Brandywine Suburban generic (none in use)
  'Mobile Hibachi in',  // v=2 Party Beach generic (none in use)
  'Hibachi at Home in', // v=3 Coastal Family generic (Fenwick Island, Ocean View, Milton, Selbyville)
  'Hibachi at Home in', // v=4 Central/Southern DE generic (Milford, Georgetown, Seaford)
]

// ── Custom meta overrides — corrects title/description when H1 keyword ≠ generic template ──
const DE_CUSTOM_META = {
  'wilmington': {
    title: 'Hibachi Catering in Wilmington, DE | Corporate & Private Events | Hibachi Connect',
    desc:  'Book hibachi catering for your Wilmington corporate dinner, client event, or private gathering. Certified teppanyaki chef, full setup & cleanup. From $60/adult. Serving all of northern Delaware.',
  },
  'greenville': {
    title: 'Private Hibachi Chef in Greenville, DE | Estate Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Greenville, DE estate or outdoor property. Premium proteins, live teppanyaki performance, complete cleanup. From $60/adult. Serving the Brandywine Valley.',
  },
  'rehoboth-beach': {
    title: 'Mobile Hibachi in Rehoboth Beach, DE | Beach House Chef | Hibachi Connect',
    desc:  'A certified mobile hibachi chef comes to your Rehoboth Beach vacation rental. No Route 1 reservations — full setup, live show, complete cleanup. From $60/adult. Book your summer date now.',
  },
  'bethany-beach': {
    title: 'Mobile Hibachi in Bethany Beach, DE | Vacation Rental Dining | Hibachi Connect',
    desc:  'A certified hibachi chef comes to your Bethany Beach rental or beach house. Perfect for family reunions, multigenerational dinners, and vacation groups. Full setup & cleanup. From $60/adult.',
  },
  'middletown': {
    title: 'Backyard Hibachi in Middletown, DE | Private Teppanyaki at Home | Hibachi Connect',
    desc:  'Book a backyard hibachi chef in Middletown, DE. Live teppanyaki, fresh proteins, full setup & cleanup. Perfect for graduation parties and family gatherings. From $60/adult.',
  },
  'smyrna': {
    title: 'Backyard Hibachi in Smyrna, DE | Private Teppanyaki Chef | Hibachi Connect',
    desc:  'Book a backyard hibachi chef in Smyrna, DE. Certified teppanyaki chef, all proteins included, full setup & cleanup. Ideal for graduation parties and family events. From $60/adult.',
  },
}

// ── Main builder ──────────────────────────────────────────────────────────────
export function getDelawareCityData(citySlug, cityName) {
  const major       = DE_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getDEVariantIndex(citySlug)
  const theme       = DE_IMAGE_THEMES[v]
  const displayName = DE_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Delaware',
    stateAbbr:    'DE',
    stateSlug:    'delaware',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: DE_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['Wilmington', 'Newark', 'Rehoboth Beach', 'Dover', 'Lewes'],
    localHighlights:   DE_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: DE_OCCASIONS[v],
    faqSet:            DE_FAQ_SETS[v](displayName),
    testimonials:      DE_TESTIMONIALS[v],
    // INTRO_VARIANTS: 90–94 = DE generic, 95–107 = DE city-specific
    uniqueIntroVariant:  (major?.profileIdx != null) ? 95 + major.profileIdx : 90 + v,
    uniqueWhyUsVariant:  v,
    // CLOSING_VARIANTS: 90–94 = DE generic, 95–107 = DE city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 95 + major.profileIdx : 90 + v,
    // H1 prefix for CityHero (line 1 of the hero heading)
    heroH1Prefix: major?.profileIdx != null
      ? DE_PROFILE_H1_PREFIXES[major.profileIdx]
      : DE_THEME_H1_PREFIXES[v],
    // Custom meta overrides where H1 keyword differs from the generic template
    ...(DE_CUSTOM_META[citySlug]
      ? { metaTitle: DE_CUSTOM_META[citySlug].title, metaDescription: DE_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getDeHowItWorks(citySlug) {
  const major = DE_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getDEVariantIndex(citySlug)
  return DE_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getDeSectionVariant(citySlug) {
  const major = DE_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getDEVariantIndex(citySlug)
  return DE_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getDeCityImage(citySlug) {
  return DE_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getDeSupportImages(citySlug, variantIdx) {
  if (DE_SUPPORT_IMAGES[citySlug]) return DE_SUPPORT_IMAGES[citySlug]
  const major = DE_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getDEVariantIndex(citySlug)
  return DE_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getDeBlogPosts(variant, count) {
  return DE_BLOG_POSTS[variant % DE_BLOG_POSTS.length].slice(0, count)
}
