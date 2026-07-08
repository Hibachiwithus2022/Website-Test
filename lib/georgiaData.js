// =============================================================================
// lib/georgiaData.js — Georgia Expansion
// 20 cities · 6 geographic themes
// Theme 0: Atlanta Corporate (Atlanta, Sandy Springs)
// Theme 1: North Atlanta Affluent Suburban (Alpharetta, Marietta, Roswell, Dunwoody, Johns Creek)
// Theme 2: Coastal / Vacation (Savannah, St. Simons Island)
// Theme 3: Athens College & Eclectic (Athens, Decatur)
// Theme 4: Augusta Golf / Private Estate (Augusta, Evans)
// Theme 5: Georgia Suburban Family (Columbus, Duluth, Woodstock, Kennesaw, Peachtree City, Gainesville, Warner Robins)
//
// INTRO_VARIANTS indices:  143–148 GA generic · 149–168 GA city-specific
// CLOSING_VARIANTS indices: 143–148 GA generic · 149–168 GA city-specific
// =============================================================================

export function getGAVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 6
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const GA_HERO_SUBTITLES = [
  (city) => city === 'Atlanta'
    ? 'Corporate Team Dinners · Executive Events · Client Entertainment · Serving the Greater Atlanta Metro'
    : `Corporate Team Dinners · Executive Events · Client Entertainment · Serving ${city} & Greater Atlanta`,
  (city) => `Backyard Private Dining · Graduation Parties · Milestone Celebrations · Serving ${city} & North Atlanta`,
  (city) => `Coastal Private Dining · Bachelorette Weekends · Vacation Rental Events · Serving ${city} & the Georgia Coast`,
  (city) => `College Graduation Parties · Backyard Events · Community Celebrations · Serving ${city} & Surrounding Georgia`,
  (city) => `Private Estate Dining · Golf Retreat Events · Milestone Celebrations · Serving ${city} & the Augusta Region`,
  (city) => `Backyard Family Celebrations · Graduation Parties · Neighborhood Events · Serving ${city} & Greater Georgia`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const GA_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Atlanta Corporate
  (city) => [
    `Corporate team dinners and client appreciation events throughout greater ${city}`,
    'Perfect for finance, tech, legal, and professional services firms across the Atlanta metro',
    `Ideal for executive dinner parties at private homes and outdoor venues in ${city}`,
    `Corporate event coordination for the ${city} business corridor — Midtown to Buckhead to Perimeter`,
    `Weekend evenings and corporate events in ${city} book 2–3 weeks ahead`,
    'Premium proteins, full live performance, complete setup and cleanup — nothing for the host to manage',
  ],
  // Theme 1 — North Atlanta Affluent Suburban
  (city) => [
    `Backyard private dining for ${city}'s most discerning hosts`,
    'Perfect for graduation parties, milestone birthdays, and anniversary celebrations in North Atlanta',
    `Ideal for neighborhood gatherings and summer entertaining in the ${city} community`,
    `Graduation season (May–June) is our highest-demand window in ${city} — book 3–4 weeks ahead`,
    'Full setup and cleanup — you provide the outdoor space, we handle everything else',
    'Dual-station capacity for large graduations and family gatherings of 25–60+ guests',
  ],
  // Theme 2 — Coastal / Vacation
  (city) => [
    `Vacation rental hibachi at your ${city} property — no crowded restaurant reservations`,
    'Perfect for bachelorette weekends, birthday trips, and coastal group dinners',
    `Chef comes directly to your ${city} rental — full setup, full show, full cleanup`,
    'Spring through fall is peak Georgia coast season — reserve 4–6 weeks ahead',
    'Fire tricks, flying shrimp, and the full teppanyaki performance at your coastal property',
    'Full pack-out when dinner is done — your rental stays spotless',
  ],
  // Theme 3 — Athens College & Eclectic
  (city) => [
    `Backyard hibachi for ${city} graduation parties, birthday dinners, and neighborhood gatherings`,
    'Perfect for UGA commencement weekends when every restaurant near campus is fully booked',
    `Chef comes to your ${city} home — no parking battles, no group reservation logistics`,
    `Dual-station capacity for graduation parties of 25–60+ guests across ${city}`,
    `Full setup and cleanup — the best alternative to restaurant group dining in ${city}`,
    'Premium proteins, live cooking performance, and 90–120 minutes of entertainment',
  ],
  // Theme 4 — Augusta Golf / Private Estate
  (city) => [
    `Private estate dining and golf retreat events throughout the ${city} region`,
    'Perfect for Masters Week entertaining, anniversary dinners, and milestone occasions',
    `Certified teppanyaki chefs for executive gatherings at private properties near ${city}`,
    `Masters Week and summer events in ${city} book 4–6 weeks ahead`,
    'Premium proteins — filet mignon, lobster tail — available for any Augusta-area occasion',
    'Full setup and cleanup — your property is spotless when the chef leaves',
  ],
  // Theme 5 — Georgia Suburban Family
  (city) => [
    `Backyard hibachi parties for ${city} families and neighborhood gatherings`,
    'Perfect for graduation parties, birthday milestones, and family reunions',
    'Ideal for Georgia suburban families celebrating across the metro and beyond',
    `Corporate team events for ${city} area businesses and professional groups`,
    `Full setup and cleanup — the best alternative to restaurant group dining in ${city}`,
    'Dual-station capacity for large gatherings of 25–60+ guests',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const GA_OCCASIONS = [
  ['Corporate Team Dinners', 'Client Appreciation Events', 'Birthday Parties', 'Anniversary Dinners', 'Bachelorette Parties', 'Executive Dinner Parties', 'Holiday Gatherings', 'Engagement Parties', 'Graduation Parties', 'Networking Events'],
  ['Birthday Parties', 'Graduation Parties', 'Anniversary Dinners', 'Corporate Events', 'Neighborhood Gatherings', 'Bachelorette Parties', 'Family Reunions', 'Holiday Dinners', 'Retirement Parties', 'Milestone Celebrations'],
  ['Bachelorette Weekends', 'Bachelor Parties', 'Birthday Trips', 'Vacation Group Dinners', 'Family Reunions', 'Girls Trips', 'Anniversary Getaways', 'Engagement Celebrations', 'Reunion Weekends', 'Corporate Retreats'],
  ['Graduation Parties', 'Birthday Dinners', 'Family Reunions', 'Anniversary Celebrations', 'Neighborhood Gatherings', 'Bachelorette Parties', 'Corporate Events', 'Holiday Dinners', 'Retirement Parties', 'Community Celebrations'],
  ['Private Estate Dinners', 'Corporate Retreats', 'Anniversary Dinners', 'Birthday Parties', 'Golf Group Dinners', 'Client Entertainment', 'Milestone Celebrations', 'Engagement Parties', 'Holiday Gatherings', 'Family Reunions'],
  ['Birthday Parties', 'Graduation Parties', 'Family Reunions', 'Anniversary Dinners', 'Corporate Events', 'Neighborhood Gatherings', 'Holiday Dinners', 'Retirement Parties', 'Backyard BBQ Alternatives', 'Community Celebrations'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const GA_FAQ_SETS = [
  // Theme 0 — Atlanta Corporate
  (city) => [
    {
      q: `Can you set up hibachi at a corporate event or private home in ${city}?`,
      a: `Yes — corporate outdoor spaces, private residential properties in Buckhead, Sandy Springs, and Dunwoody, and event venues throughout greater ${city} are among our most common setups. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most Atlanta-area outdoor spaces meet this easily.`,
    },
    {
      q: `What ${city} neighborhoods and communities do you serve?`,
      a: `We serve all of greater Atlanta — Sandy Springs, Buckhead, Marietta, Alpharetta, Dunwoody, Roswell, Johns Creek, Decatur, and all surrounding metro communities. Most locations within 35 miles of Atlanta fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle large corporate team events for ${city} companies?`,
      a: `Absolutely — corporate team dinners, client appreciation events, and office party setups are a major part of our Atlanta business. We've run events for tech, finance, healthcare, and professional services firms throughout the metro. For groups over 25, we bring two chef stations. Outdoor corporate spaces and private venues work perfectly.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend evenings and corporate events in the Atlanta area book 2–3 weeks out. Holiday party season (November–December) fills fastest — reserve 4–5 weeks ahead for any Friday or Saturday event. Weekday corporate dinners typically have more flexibility.`,
    },
    {
      q: `Can you set up at a ${city} rooftop, patio, or backyard space?`,
      a: `Yes — Atlanta residential properties, rooftop terraces, backyard spaces, and outdoor venues are all excellent hibachi setups. We need a flat outdoor area of at least 10×10 ft. We do not cook in enclosed indoor spaces without proper outdoor ventilation.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Atlanta metro locations. For events more than 35 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you book.`,
    },
  ],
  // Theme 1 — North Atlanta Affluent Suburban
  (city) => [
    {
      q: `Can hibachi be set up in a ${city} backyard or patio?`,
      a: `Yes — North Atlanta suburban backyards and patios are our most common setup environment. We need a flat area of at least 10×10 ft. Deck, lawn, paver patio, or stone patio all work perfectly. Our setup is fully self-contained — we bring everything and take everything with us.`,
    },
    {
      q: `Do you serve ${city} and surrounding North Atlanta communities?`,
      a: `Yes — we serve all of North Atlanta including ${city} and surrounding communities throughout the Fulton, Cobb, and Gwinnett corridor. Most locations in the North Atlanta suburbs fall within our standard service radius with no added travel fee.`,
    },
    {
      q: `How far in advance should I book for a ${city} graduation party?`,
      a: `Graduation season (May–June) is our highest-demand window across North Atlanta. We recommend booking 3–4 weeks in advance for any May or June Saturday event in ${city}. Weekday graduation dinners typically have more availability — 2–3 weeks' notice is usually sufficient.`,
    },
    {
      q: `Can you handle a large graduation or milestone party in ${city}?`,
      a: `Absolutely — parties of 25–60 guests are among our most common bookings in the ${city} area. For groups over 25, we bring two chef stations running in parallel to maintain quality and timing. Large milestone events — graduation parties, anniversary dinners, retirement celebrations — are a specialty.`,
    },
    {
      q: `Do you do corporate team events for ${city} area companies?`,
      a: `Yes — North Atlanta suburbs have strong demand from corporate and professional services firms. We can set up at corporate outdoor spaces, private venues, or residential properties. Full event coordination included with every booking.`,
    },
    {
      q: `What do I need to provide for the event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all ingredients and proteins, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included.`,
    },
  ],
  // Theme 2 — Coastal / Vacation
  (city) => [
    {
      q: `Can you come to our ${city} vacation rental or coastal property?`,
      a: `Absolutely — Georgia coastal vacation rentals and properties are among our most popular booking locations. We come directly to your rental. Just confirm the house allows outdoor open-flame cooking (most do), and we handle everything from setup to complete cleanup.`,
    },
    {
      q: `How far in advance should I book a ${city} coastal event?`,
      a: `Georgia coast season — spring through fall — fills up fast. We strongly recommend booking 4–6 weeks in advance for peak dates. Summer weekends on the coast book weeks in advance. Off-season events have much more availability with 2–3 weeks' notice.`,
    },
    {
      q: `Can you set up on the deck or patio of a ${city} coastal rental?`,
      a: `Yes — outdoor decks, patios, and yard spaces at Georgia coastal rentals are our ideal setup. We need a flat outdoor area of at least 10×10 ft with clearance overhead. Most Savannah and Golden Isles-area rental properties have excellent deck or yard setups.`,
    },
    {
      q: `Do you serve all Georgia coastal communities?`,
      a: city === 'Savannah'
        ? `Yes — we serve the full Savannah area including Pooler, Richmond Hill, Tybee Island, Port Wentworth, Rincon, and all communities throughout the Coastal Empire region. Travel fees may apply for very remote locations and are always disclosed before you confirm.`
        : `Yes — we serve the full Golden Isles area including St. Simons Island, Brunswick, Jekyll Island, Sea Island, Darien, and surrounding coastal communities. Travel fees may apply for very remote locations and are always disclosed before you confirm.`,
    },
    {
      q: `Is hibachi a good option for a ${city} bachelorette weekend?`,
      a: `It's the best option. The combination of live fire cooking, flying shrimp, and everyone gathered around the grill creates exactly the energy a bachelorette group wants — and you don't have to fight for a reservation at a packed coastal restaurant. The chef makes the evening.`,
    },
    {
      q: `What happens if the weather changes at our coastal event?`,
      a: `We cook in light rain under appropriate shelter. For severe weather or lightning, we work with you to reschedule at no penalty — Georgia coast weather is something we understand completely. Covered decks, screened porches, and garage setups make excellent backup locations.`,
    },
  ],
  // Theme 3 — Athens College & Eclectic
  (city) => [
    {
      q: `Do you serve the ${city} area and surrounding communities?`,
      a: `Yes — we cover ${city} and surrounding neighborhoods and communities throughout the region. Most locations within 30 miles of ${city} fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle a large graduation party in ${city}?`,
      a: `Absolutely — UGA graduation parties and large family celebrations are our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. Three generations around the grill — kids, parents, and grandparents — is our most common Athens-area setup during graduation season.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation weekend event?`,
      a: `For graduation season (May–June) events in ${city}, booking 4–5 weeks ahead is essential — UGA commencement weekends fill our schedule completely. Weekday events and off-season gatherings can often be arranged with 2–3 weeks' notice depending on chef availability.`,
    },
    {
      q: `Can you set up for an outdoor backyard or patio event in ${city}?`,
      a: `Yes — backyard events, patio gatherings, and neighborhood setups all work well in ${city}. We need a flat area of at least 10×10 ft with vehicle access for setup. Most ${city} residential properties meet this requirement easily.`,
    },
    {
      q: `Is private hibachi better than catering for a ${city} graduation party?`,
      a: `Per-head cost is comparable to quality catering at around $60/adult — but hibachi includes a live chef performance at no extra charge. A caterer drops off food; we stay, cook in front of your guests, entertain throughout the meal, and handle complete cleanup. Most ${city} hosts who try hibachi say they'll never go back to catering.`,
    },
    {
      q: `What do I need to provide for a ${city} backyard hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, rice, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included in every event.`,
    },
  ],
  // Theme 4 — Augusta Golf / Private Estate
  (city) => [
    {
      q: `Can you set up at a private estate or golf property near ${city}?`,
      a: `Yes — private residential estates, golf club outdoor spaces, and event venues throughout the Augusta region are among our most common setups. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most Augusta-area estate and club properties meet this easily.`,
    },
    {
      q: `What Augusta-area communities do you serve?`,
      a: `We serve all of the Augusta metro — Evans, Martinez, Grovetown, North Augusta, Aiken, and all surrounding CSRA communities. Most locations within 30 miles of Augusta fall within our standard service area.`,
    },
    {
      q: `Do you serve ${city} during Masters Week?`,
      a: `Yes — Masters Week is our highest-demand Augusta window. If you're planning a Masters Week event, reserve 6–8 weeks ahead minimum. Private estate dinners, corporate hospitality events, and intimate client gatherings during Masters week are among our most prestigious bookings.`,
    },
    {
      q: `Can you handle premium protein requests for an estate event in ${city}?`,
      a: `Absolutely — filet mignon, lobster tail, scallops, and premium shrimp are available as upgrades for any Augusta-area event. Estate dinners and executive client events frequently use premium upgrades. Just specify your preferences during booking.`,
    },
    {
      q: `How far in advance should I book a ${city} private event?`,
      a: `Standard Augusta events book 2–3 weeks ahead. Masters Week events require 6–8 weeks minimum — fill extremely fast. Holiday gatherings and fall corporate events book 3–4 weeks out. The earlier you inquire, the more date flexibility we have.`,
    },
    {
      q: `What do I need to provide at my ${city} property?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins and premium upgrades, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included.`,
    },
  ],
  // Theme 5 — Georgia Suburban Family
  (city) => [
    {
      q: `Do you serve the ${city} area and surrounding Georgia communities?`,
      a: `Yes — we cover ${city} and surrounding suburbs and neighborhoods. Most locations within 30 miles of ${city} fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle a large family reunion or graduation party in ${city}?`,
      a: `Absolutely — family reunions and graduation parties are our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. Three generations around the grill — kids, parents, and grandparents — is our most common Georgia suburban setup.`,
    },
    {
      q: `How far in advance should I book a ${city} weekend event?`,
      a: `For Friday and Saturday events in ${city}, booking 2–3 weeks ahead is recommended. During graduation season (May–June) and summer, 3–4 weeks is safer. Weekday events can often be arranged with 5–7 days' notice depending on chef availability.`,
    },
    {
      q: `Can you set up for an outdoor backyard or community event in ${city}?`,
      a: `Yes — backyard events, community gatherings, and outdoor venue events all work well in ${city}. We need a flat area of at least 10×10 ft with vehicle access for setup. Most Georgia suburban residential and community spaces meet this requirement easily.`,
    },
    {
      q: `Is private hibachi better than catering for a ${city} graduation party?`,
      a: `Per-head cost is comparable to quality catering at around $60/adult — but hibachi includes a live chef performance at no extra charge. A caterer drops off food; we stay, cook in front of your guests, entertain throughout the meal, and handle complete cleanup. Most ${city} hosts who try hibachi say they'll never go back to catering.`,
    },
    {
      q: `What do I need to provide for a ${city} backyard hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, rice, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included in every event.`,
    },
  ],
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const GA_TESTIMONIALS = [
  // Theme 0 — Atlanta Corporate
  [
    {
      text: '"Corporate team dinner for our Atlanta tech group — 28 people, rooftop terrace in Buckhead, chef arrived on time and put on a flawless show. Every client said it was the best event we\'d arranged in years. This is our new standard for client entertainment."',
      name: 'Marcus T.',
      city: 'Atlanta, GA',
      event: 'Corporate Client Dinner',
      initials: 'MT',
    },
    {
      text: '"Anniversary dinner at our Sandy Springs property — 20 guests on the back terrace, chef was exceptional. The food, the fire tricks, the energy — exactly what we needed for that evening. Three of our guests booked their own events before the chef even left."',
      name: 'Sarah & David L.',
      city: 'Sandy Springs, GA',
      event: 'Anniversary Dinner',
      initials: 'SL',
    },
    {
      text: '"Holiday party for our Atlanta law firm — 35 attorneys and staff, outdoor setup at the senior partner\'s home in Buckhead. Nobody expected a hibachi chef. Chef had the entire group gathered around the grill laughing for two hours straight. Best firm event in memory."',
      name: 'Rebecca N.',
      city: 'Atlanta, GA',
      event: 'Law Firm Holiday Party',
      initials: 'RN',
    },
  ],
  // Theme 1 — North Atlanta Affluent Suburban
  [
    {
      text: '"Graduation party for our daughter in Alpharetta — 42 guests, backyard setup, chef had everyone gathered from the first flame. Her graduating class plus our neighbors plus our families all cheering at the same grill. Already planning our son\'s graduation for next spring."',
      name: 'Thomas & Karen M.',
      city: 'Alpharetta, GA',
      event: 'Graduation Party',
      initials: 'TM',
    },
    {
      text: '"Birthday dinner in our Marietta backyard — 30 guests, May evening, absolutely perfect. The chef was personable, professional, and turned what would have been a dinner party into a performance. My guests are still asking for the contact information months later."',
      name: 'Ellen R.',
      city: 'Marietta, GA',
      event: 'Birthday Dinner',
      initials: 'ER',
    },
    {
      text: '"Neighborhood Fourth of July gathering in Roswell — 40 people, our largest outdoor setup yet. Chef ran dual stations and kept the whole crowd engaged for two solid hours. We\'d done regular catering every year before. This is the new neighborhood standard."',
      name: 'Patricia & James S.',
      city: 'Roswell, GA',
      event: 'Neighborhood Gathering',
      initials: 'PS',
    },
  ],
  // Theme 2 — Coastal / Vacation
  [
    {
      text: '"Savannah bachelorette house — 16 of us, patio hibachi Friday night, and the chef completely set the tone for the entire weekend. Fire tricks, flying shrimp, the full show. We\'d been to every restaurant on River Street over the years. Nothing compares to this."',
      name: 'Caroline B.',
      city: 'Savannah, GA',
      event: 'Bachelorette Weekend',
      initials: 'CB',
    },
    {
      text: '"Birthday weekend at a St. Simons Island rental — group house, 14 of us, hibachi on Saturday night. Chef showed up exactly on time, set up while we gathered on the deck, and ran the most entertaining dinner I\'ve ever been part of. Highlight of the whole trip."',
      name: 'Michelle T.',
      city: 'St. Simons Island, GA',
      event: 'Birthday Weekend',
      initials: 'MT',
    },
    {
      text: '"Savannah girls trip — eight of us rented a historic district house for the long weekend. Did hibachi on Thursday and it became the dinner everyone planned the rest of the trip around. Chef was fantastic, the food was outstanding, beat every restaurant on the square."',
      name: 'Ryan C.',
      city: 'Savannah, GA',
      event: 'Group House Weekend',
      initials: 'RC',
    },
  ],
  // Theme 3 — Athens College & Eclectic
  [
    {
      text: '"UGA graduation party in our Athens backyard — 48 guests from four states, dual chef stations, and the whole crowd was locked in for two hours. Grandparents front row, college seniors asking the chef questions all evening. Best graduation dinner we\'ve ever hosted."',
      name: 'The Johnson Family',
      city: 'Athens, GA',
      event: 'UGA Graduation Party',
      initials: 'JF',
    },
    {
      text: '"Birthday dinner in Decatur — 22 guests, backyard setup, chef was exceptional from start to finish. The Decatur crowd is opinionated about food and everyone agreed this was one of the best meals they\'d had all year. Already planning a repeat for next summer."',
      name: 'Amanda K.',
      city: 'Decatur, GA',
      event: 'Birthday Dinner',
      initials: 'AK',
    },
    {
      text: '"Athens family reunion — 36 guests, backyard, relatives in from Atlanta and Charlotte. Chef set up two stations and had the whole crowd entertained from first flame to last plate. Grandparents took three rounds. Best reunion we\'ve had in fifteen years."',
      name: 'The Harris Family',
      city: 'Athens, GA',
      event: 'Family Reunion',
      initials: 'HF',
    },
  ],
  // Theme 4 — Augusta Golf / Private Estate
  [
    {
      text: '"Masters Week dinner at our Evans estate — 24 guests, back terrace, chef arrived exactly on time and put on an incredible show. Every guest at the table was a client we wanted to impress. It was the best client entertainment decision we made all year."',
      name: 'William P.',
      city: 'Evans, GA',
      event: 'Masters Week Client Dinner',
      initials: 'WP',
    },
    {
      text: '"Anniversary dinner in Augusta — 18 guests on our outdoor terrace, filet mignon and lobster tail upgrades, chef was absolutely exceptional. The food, the fire performance, the energy — exactly what we needed. Three couples at the table booked their own events."',
      name: 'James & Catherine H.',
      city: 'Augusta, GA',
      event: 'Anniversary Dinner',
      initials: 'JH',
    },
    {
      text: '"Golf retreat corporate dinner at a private Augusta property — 30 attendees, dual stations, flawless execution from setup to cleanup. The client group was from out of state and said it was the most memorable event of the entire trip. We\'ll do this every retreat."',
      name: 'Robert M.',
      city: 'Augusta, GA',
      event: 'Corporate Golf Retreat',
      initials: 'RM',
    },
  ],
  // Theme 5 — Georgia Suburban Family
  [
    {
      text: '"Graduation party for our son in Kennesaw — 44 guests, backyard setup, dual chef stations. Every single family member from grandparents to college roommates gathered around the grill for two hours. No restaurant in the area could have done this. Already planning a second event."',
      name: 'Donna & Charles M.',
      city: 'Kennesaw, GA',
      event: 'Graduation Party',
      initials: 'DM',
    },
    {
      text: '"Family reunion in Peachtree City — 50 guests, huge backyard, relatives in from Nashville and Charlotte. Chef set up two stations and had the whole crowd entertained from first flame to last plate. Best reunion we\'ve had in twenty years."',
      name: 'The Williams Family',
      city: 'Peachtree City, GA',
      event: 'Family Reunion',
      initials: 'WF',
    },
    {
      text: '"Birthday party in Warner Robins — 32 guests, outdoor setup, chef completely took over the entertainment for the evening. Easy booking, exactly on time, professional from start to finish. We\'ll be calling again for the holidays."',
      name: 'Kevin R.',
      city: 'Warner Robins, GA',
      event: 'Birthday Party',
      initials: 'KR',
    },
  ],
]

// ── Image themes ──────────────────────────────────────────────────────────────
const GA_IMAGE_THEMES = [
  { heroImage: '/pics/hero-2.jpg' },               // Theme 0 — Atlanta Corporate
  { heroImage: '/pics/backyard-hibachi-3.jpg' },    // Theme 1 — North Atlanta Suburban
  { heroImage: '/pics/hero-4.jpg' },               // Theme 2 — Coastal / Savannah
  { heroImage: '/pics/hibachi-catering-3.jpg' },    // Theme 3 — Athens College
  { heroImage: '/pics/private-hibachi.jpg' },       // Theme 4 — Augusta Golf
  { heroImage: '/pics/hero-1.jpg' },               // Theme 5 — Suburban Family
]

// ── How It Works ──────────────────────────────────────────────────────────────
const GA_HOW_IT_WORKS = [
  // Theme 0 — Atlanta Corporate
  {
    headline:   (city) => `How Corporate Hibachi Works in ${city}`,
    footerNote: (city) => `Questions? Call or text (201) 565-3878. Most ${city} bookings confirmed within hours.`,
    steps: [
      { num: '01', title: 'Request Your Event',           desc: 'Tell us your date, guest count, and outdoor space — corporate venue, private home, or backyard. We confirm fast.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking Performance',     desc: 'Guests gather around the grill for 90–120 minutes of live hibachi — fire tricks, flying shrimp, freshly grilled food cooked to order.' },
      { num: '04', title: 'Full Cleanup Included',        desc: 'Chef handles all cleanup and packs out completely. Your venue stays spotless. You keep the experience.' },
    ],
  },
  // Theme 1 — North Atlanta Affluent Suburban
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
  // Theme 2 — Coastal / Vacation
  {
    headline:   (city) => `How Mobile Hibachi Works at Your ${city} Rental`,
    footerNote: (city) => `Georgia coastal events book fast. Call or text (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Book From Your Rental',     desc: 'Reserve your date online or by phone — tell us your address, guest count, and deck or yard setup. Fast confirmation.' },
      { num: '02', title: 'Chef Comes to You',         desc: 'Certified hibachi chef arrives with full setup: teppan grill, propane, all ingredients, plates, sauces, and utensils. Nothing for you to prepare.' },
      { num: '03', title: 'Coastal Dinner Show',       desc: 'Guests gather on your deck, patio, or yard for 90–120 minutes of live hibachi — fire tricks, grilled-to-order proteins, the full show.' },
      { num: '04', title: 'Pack-Out and Done',         desc: 'Chef handles complete cleanup and takes everything with them. Your rental is spotless and you had the best dinner of the trip.' },
    ],
  },
  // Theme 3 — Athens College & Eclectic
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} graduation season books fast. Call or text (201) 565-3878 to confirm your date.`,
    steps: [
      { num: '01', title: 'Request Your Event',         desc: 'Book online or by phone. Tell us your guest count — over 25 guests, we bring two chef stations. Confirmed quickly.' },
      { num: '02', title: 'Full Setup Arrives',         desc: 'Your chef (or two chefs for large groups) arrives with everything: grills, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking for the Crowd', desc: 'Every guest gathers around the grill for a live teppanyaki performance — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Chef Handles Cleanup',       desc: 'Complete cleanup done by your chef. Your family keeps the memory. You do none of the work.' },
    ],
  },
  // Theme 4 — Augusta Golf / Private Estate
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Property`,
    footerNote: (city) => `Augusta area events book quickly. Call (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Request Your Event',           desc: 'Tell us your date, guest count, and property setup. Estate terrace, patio, or outdoor venue — we coordinate everything.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Your certified teppanyaki chef arrives with full setup: teppan grill, propane, premium proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Estate Performance',      desc: 'Guests gather around the grill for 90–120 minutes of live hibachi — fire tricks, premium proteins cooked to order, the full show.' },
      { num: '04', title: 'Flawless Cleanup',             desc: 'Chef handles all teardown and cleanup. Your property is immaculate when they leave. You keep the evening.' },
    ],
  },
  // Theme 5 — Georgia Suburban Family
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
const GA_SECTION_VARIANTS = [
  // Theme 0 — Atlanta Corporate
  {
    heroPill:           'Atlanta\'s Private Chef',
    experiencePill:     'Better Than Any Atlanta Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `Your ${city} Space Is the Venue`,   desc: `No reservation required — your ${city} outdoor space, rooftop, or Buckhead terrace becomes an exclusive private dining room.` },
      { icon: '👨‍🍳', title: 'Private Chef, All Yours',           desc: `A certified teppanyaki chef performs exclusively for your ${city} group — no shared dining room, no strangers at the next table.` },
      { icon: '📍', title: 'All of Greater Atlanta Served',     desc: 'Sandy Springs, Buckhead, Marietta, Alpharetta, Dunwoody, Roswell, Decatur — we come to your property throughout the metro.' },
      { icon: '✨', title: 'Corporate-Grade, Zero Cleanup',     desc: 'Premium proteins cooked live on the teppan, a full fire show for your Atlanta guests, and complete cleanup when dinner is done.' },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, GA`,
    areasPill:          'Serving Atlanta & the Metro',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Georgia Communities`,
    areasIntro: [
      () => `We serve all of greater Atlanta — Sandy Springs, Buckhead, Marietta, Alpharetta, Dunwoody, Roswell, Johns Creek, Decatur, and every community throughout the Atlanta metro. If your outdoor space holds a grill, we can be there.`,
      (city) => `Most ${city} bookings are confirmed within hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Check Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Reason to Celebrate in ${city}`,
    occasionSubtext:       'From corporate team dinners to milestone celebrations, private hibachi is Atlanta\'s most memorable dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Atlanta & Metro Georgia Hosts Are Saying',
  },
  // Theme 1 — North Atlanta Affluent Suburban
  {
    heroPill:           'Backyard Private Dining',
    experiencePill:     'Better Than Any Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Your ${city} Backyard Is the Venue`, desc: `No reservation battles, no parking, no rushed tables — your ${city} backyard becomes an exclusive private dining room for your guests.` },
      { icon: '🔥', title: 'One Chef, One Show',                 desc: 'Every guest at the same grill, the same chef, the same moment — the shared experience is what makes hibachi unforgettable.' },
      { icon: '⏱️', title: '90–120 Minute Live Performance',    desc: `A certified teppanyaki chef keeps every ${city} guest entertained from the first flame to the final plate — no lulls, no dead time.` },
      { icon: '🧹', title: 'Host Without Lifting a Finger',     desc: 'Your chef arrives early, sets up completely, and packs out after dinner. You host the best event in the neighborhood this summer.' },
    ],
    experienceImage:    '/pics/private-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a ${city} backyard event`,
    areasPill:          'Serving North Atlanta Suburbs',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Communities`,
    areasIntro: [
      (city) => `We serve ${city} and all of North Atlanta — Alpharetta, Roswell, Marietta, Dunwoody, Johns Creek, Sandy Springs, Kennesaw, Woodstock, and every community in the North Atlanta corridor.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From graduation parties to neighborhood gatherings, private hibachi is North Atlanta\'s backyard upgrade you\'ve been waiting for',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What North Atlanta Hosts Are Saying',
  },
  // Theme 2 — Coastal / Vacation
  {
    heroPill:           'Georgia Coast Private Chef',
    experiencePill:     'Your Coastal Rental Upgrade',
    experiencePoints:   (city) => [
      { icon: '🏖️', title: `Chef at Your ${city} Rental`,        desc: `Skip the crowded coastal restaurant — your chef arrives at your ${city} property with everything needed for a full teppanyaki show.` },
      { icon: '🔥', title: 'Live Show on the Coastal Deck',      desc: `All ${city} guests gathered at the same outdoor grill for the full performance — fire tricks, flying shrimp, proteins cooked to order.` },
      { icon: '🎭', title: 'Fire Tricks & Live Cooking',         desc: '90–120 minutes of live teppanyaki entertainment — the volcano, the flaming grill, every plate cooked fresh in front of your guests.' },
      { icon: '🏠', title: 'Georgia Rental Stays Spotless',      desc: 'Full setup and complete pack-out included. Your Georgia coastal rental looks exactly as it did when the chef arrived.' },
    ],
    experienceImage:    '/pics/hibachi-virginia-beach.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} Georgia coastal rental`,
    areasPill:          'Serving Georgia\'s Coast',
    areasHeadline:      (city) => `Mobile Hibachi at Your ${city} Rental`,
    areasIntro: [
      (city) => `We serve the full Georgia coast — Savannah, Tybee Island, St. Simons Island, Brunswick, Jekyll Island, Sea Island, and every community along the Georgia shoreline.`,
      (city) => `Georgia coastal dates fill fast in season. Call or text (201) 565-3878 to confirm your ${city} booking now.`,
    ],
    areasButton:           'Check Coastal Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       'Bachelorette weekends, birthday house rentals, coastal group dinners, and family vacation gatherings — private hibachi is Georgia\'s most memorable coastal dining experience',
    faqPill:               'Beach Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Coastal Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Georgia Coastal Guests Are Saying',
  },
  // Theme 3 — Athens College & Eclectic
  {
    heroPill:           'Athens & Decatur Private Chef',
    experiencePill:     'Every Generation at the Grill',
    experiencePoints:   (city) => [
      { icon: '👥', title: `Two Stations for ${city} Grads`,    desc: `Two chef stations for ${city} groups of 25–60+ — faster service and double the performance energy for graduation season.` },
      { icon: '🎓', title: 'Built for UGA Graduation Season',   desc: `When every restaurant near campus is fully booked, we come to your ${city} home — hibachi brings the celebration to you.` },
      { icon: '🔥', title: 'No Restaurant Logistics',           desc: 'Fresh proteins cooked live, a full teppanyaki performance, and no reservations, parking, or rushed tables to manage.' },
      { icon: '🧹', title: 'We Handle All the Details',         desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except celebrate with your guests.' },
    ],
    experienceImage:    '/pics/hibachi-catering-2.jpg',
    experienceImageAlt: (city) => `Graduation hibachi celebration in ${city}, GA`,
    areasPill:          'Serving Athens & Surrounding Georgia',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of Northeast Georgia`,
    areasIntro: [
      (city) => `We serve ${city} and all of northeast Georgia — Athens, Decatur, Gainesville, Commerce, Madison, Winder, and surrounding communities throughout the region.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Most large-group events are confirmed within a day.`,
    ],
    areasButton:           'Book Your Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Celebration`,
    occasionSubtext:       'Graduation parties, multigenerational family dinners, and milestone events — Georgia celebrates big, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Athens & Decatur Hosts Are Saying',
  },
  // Theme 4 — Augusta Golf / Private Estate
  {
    heroPill:           'Augusta\'s Private Chef',
    experiencePill:     'Estate Dining at Your Property',
    experiencePoints:   (city) => [
      { icon: '🥩', title: `Premium Proteins at Your ${city} Estate`, desc: `Filet mignon, lobster tail, and the full premium menu — available for ${city} estate events and luxury occasions at any time of year.` },
      { icon: '👨‍🍳', title: 'Private Chef for Your Property',   desc: `A certified teppanyaki chef for intimate ${city} groups of 8–20 or larger estate gatherings — scaled to your exact guest count.` },
      { icon: '🏆', title: 'Masters Week Our Specialty',        desc: 'Corporate retreats, hospitality events, and Masters Week dinners — we know the Augusta calendar and book accordingly.' },
      { icon: '✨', title: 'Estate Stays Immaculate',           desc: `Flawless setup and complete cleanup — your ${city} estate or golf villa looks exactly as it did before the chef arrived.` },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at an estate event in ${city}, GA`,
    areasPill:          'Serving Augusta & the CSRA',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Augusta Region`,
    areasIntro: [
      (city) => `We serve ${city} and all of the CSRA — Evans, Martinez, Grovetown, North Augusta, Aiken, and every community throughout the Augusta metro and surrounding region.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Masters Week dates fill weeks in advance — reserve early.`,
    ],
    areasButton:           'Reserve Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner of the Evening in ${city}`,
    occasionSubtext:       'Private estate dinners, golf retreat entertaining, Masters Week hospitality, and milestone occasions — Augusta hosts expect the exceptional, and we deliver it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Augusta Region Hosts Are Saying',
  },
  // Theme 5 — Georgia Suburban Family
  {
    heroPill:           'Georgia\'s Family Chef',
    experiencePill:     'Every Generation at the Grill',
    experiencePoints:   (city) => [
      { icon: '👥', title: `Two Stations for ${city} Gatherings`, desc: `Two chef stations for ${city} family groups of 25–60+ — faster service and double the performance energy for your celebration.` },
      { icon: '👨‍👩‍👧‍👦', title: 'Every Generation Around the Grill', desc: `Kids, parents, and grandparents in ${city} all gathered at the same teppan — the multi-generational format few dining experiences can match.` },
      { icon: '🔥', title: 'Skip the Restaurant Completely',    desc: 'Fresh proteins cooked live, a full teppanyaki performance at your backyard — no reservations, parking, or rushed group tables.' },
      { icon: '🧹', title: 'Everything Handled for You',        desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except enjoy the Georgia evening.' },
    ],
    experienceImage:    '/pics/hibachi-catering-2.jpg',
    experienceImageAlt: (city) => `Family hibachi celebration in ${city}, GA`,
    areasPill:          'Serving Georgia Suburbs',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Surrounding Georgia`,
    areasIntro: [
      (city) => `We serve ${city} and all surrounding Georgia communities. Most locations within 35 miles fall within our standard service area with no extra travel fee.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Most large-group events are confirmed within a day.`,
    ],
    areasButton:           'Book Your Family Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Family Celebration`,
    occasionSubtext:       'Graduation parties, multigenerational family dinners, and milestone events — Georgia families celebrate big, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Georgia Suburban Hosts Are Saying',
  },
]

// ── City experience image map ──────────────────────────────────────────────────
const GA_CITY_IMAGE_MAP = {
  // Theme 0 — Atlanta Corporate
  'atlanta':         { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Private hibachi chef at a corporate event in ${city}, GA` },
  'sandy-springs':   { src: '/pics/hibachi-event.jpg',          alt: () => `Hibachi event in Sandy Springs, GA` },
  // Theme 1 — North Atlanta Affluent Suburban
  'alpharetta':      { src: '/pics/hibachi-catering-3.jpg',     alt: () => `Private hibachi chef at an Alpharetta GA graduation event` },
  'marietta':        { src: '/pics/private-hibachi.jpg',        alt: () => `Private hibachi chef in Marietta, GA` },
  'roswell':         { src: '/pics/hibachi-chef-home.jpg',      alt: () => `Private hibachi chef at a Roswell GA backyard event` },
  'dunwoody':        { src: '/pics/backyard-hibachi.jpg',       alt: () => `Backyard hibachi event in Dunwoody, GA` },
  'johns-creek':     { src: '/pics/hibachi-shot-1.jpg',         alt: () => `Backyard hibachi party in Johns Creek, GA` },
  // Theme 2 — Coastal / Vacation
  'savannah':        { src: '/pics/hibachi-virginia-beach.jpg', alt: () => `Mobile hibachi chef at a Savannah GA vacation rental` },
  'st-simons-island':{ src: '/pics/hibachi-photo-2.jpg',        alt: () => `Beach house hibachi event in St. Simons Island, GA` },
  // Theme 3 — Athens College
  'athens':          { src: '/pics/hibachi-austin-home.jpg',    alt: () => `Private hibachi chef at an Athens GA graduation party` },
  'decatur':         { src: '/pics/hibachi-colorado.jpg',       alt: () => `Family hibachi dinner in Decatur, GA` },
  // Theme 4 — Augusta Golf
  'augusta':         { src: '/pics/hibachi-chef-home.jpg',      alt: () => `Private hibachi chef at an Augusta GA estate event` },
  'evans':           { src: '/pics/mobile-hibachi-2.jpg',       alt: () => `Private hibachi chef in Evans, GA` },
  // Theme 5 — Suburban Family
  'columbus':        { src: '/pics/hibachi-catering-2.jpg',     alt: () => `Hibachi catering event in Columbus, GA` },
  'duluth':          { src: '/pics/backyard-hibachi-2.jpg',     alt: () => `Backyard hibachi event in Duluth, GA` },
  'woodstock':       { src: '/pics/hibachi-dallas-home.jpg',    alt: () => `Hibachi event in Woodstock, GA` },
  'kennesaw':        { src: '/pics/hibachi-shot-2.jpg',         alt: () => `Private hibachi in Kennesaw, GA` },
  'peachtree-city':  { src: '/pics/hibachi-pic-3.jpg',          alt: () => `Hibachi chef at a Peachtree City GA event` },
  'gainesville':     { src: '/pics/hibachi-austin-2.jpg',       alt: () => `Private hibachi in Gainesville, GA` },
  'warner-robins':   { src: '/pics/traveling-hibachi.jpg',      alt: () => `Hibachi event in Warner Robins, GA` },
}

// ── Support images for profile cities ─────────────────────────────────────────
const GA_SUPPORT_IMAGES = {
  // profileIdx 0 — Atlanta  (exp: hibachi-catering.jpg → testimonial must differ)
  'atlanta': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',     alt: () => `Corporate hibachi event in Atlanta, GA`,            caption: 'Atlanta corporate dining',           trustBadge: '5.0 Average Rating',                          intro: () => `Atlanta professionals, families, and celebration hosts choose private hibachi for corporate events, milestone birthdays, and backyard dinners that deliver far more than any restaurant can. From Buckhead to Midtown, our certified chefs travel to your Atlanta property with the full teppanyaki setup and complete cleanup. Here's what Atlanta hosts are saying:` },
    cta:         { src: '/pics/hibachi-event.jpg',           alt: () => `Private hibachi chef setting up in Atlanta, GA`,    caption: 'Your Atlanta event starts here' },
  },
  // profileIdx 1 — Savannah  (exp: hibachi-virginia-beach.jpg)
  'savannah': {
    testimonial: { src: '/pics/hibachi-catering.jpg',       alt: () => `Bachelorette hibachi at a Savannah GA rental`,       caption: 'Savannah vacation rental hibachi',   trustBadge: 'Trusted by Local Families',                   intro: () => `Savannah bachelorette groups, birthday weekenders, and vacation rental hosts near the Historic District and River Street area choose private hibachi for the one dinner everyone still talks about on the drive home. Our certified chefs arrive at your Savannah rental with the full teppanyaki setup — no restaurant reservations, no parking, no rushed tables. Here's what Savannah guests are saying:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',         alt: () => `Mobile hibachi chef in Savannah, GA`,               caption: 'The Savannah dinner of the trip' },
  },
  // profileIdx 2 — Augusta  (exp: hibachi-chef-home.jpg)
  'augusta': {
    testimonial: { src: '/pics/hibachi-event.jpg',          alt: () => `Estate hibachi dinner in Augusta, GA`,               caption: 'Augusta estate entertaining',        trustBadge: 'Hundreds of Private Events',                  intro: () => `Augusta professionals, golf community families, and Masters Week hosts choose private hibachi when the occasion demands more than any restaurant can deliver. Our certified teppanyaki chefs travel to your Augusta estate with premium proteins, the full live setup, and complete cleanup — so your property stays immaculate. Here's what Augusta hosts are saying:` },
    cta:         { src: '/pics/private-hibachi.jpg',         alt: () => `Private hibachi chef at an Augusta GA estate`,       caption: 'Augusta\'s private dining standard' },
  },
  // profileIdx 3 — Columbus  (exp: hibachi-catering-2.jpg)
  'columbus': {
    testimonial: { src: '/pics/hibachi-catering.jpg',       alt: () => `Graduation hibachi party in Columbus, GA`,           caption: 'Columbus graduation season',         trustBadge: 'Thousands of Happy Guests',                   intro: () => `Columbus families — including the military community near Fort Benning — celebrate graduation parties, milestone birthdays, and neighborhood gatherings with private hibachi that brings everyone around the same grill. Our certified chefs arrive at your Columbus backyard with everything needed for a full teppanyaki show and handle all setup and cleanup. Here's what Columbus hosts are saying:` },
    cta:         { src: '/pics/hibachi-event.jpg',           alt: () => `Private hibachi chef at a Columbus GA event`,        caption: 'Columbus\'s backyard party standard' },
  },
  // profileIdx 4 — Athens  (exp: hibachi-austin-home.jpg)
  'athens': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',     alt: () => `UGA graduation hibachi party in Athens, GA`,         caption: 'Athens graduation season',           trustBadge: 'Highly Rated by Local Hosts',                 intro: () => `Athens graduation families and UGA celebration hosts choose private hibachi when every restaurant near campus is fully booked and only a backyard dinner will do the occasion justice. Our certified chefs travel to your Athens home with the full teppanyaki setup, handling every detail from arrival to complete cleanup. Here's what Athens hosts are saying:` },
    cta:         { src: '/pics/hibachi-colorado.jpg',        alt: () => `Private hibachi chef in Athens, GA`,                 caption: 'The Athens graduation dinner' },
  },
  // profileIdx 5 — Marietta  (exp: private-hibachi.jpg)
  'marietta': {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',     alt: () => `Private hibachi dinner party in Marietta, GA`,       caption: 'Marietta private dining events',     trustBadge: 'Unforgettable Private Dining Experiences',    intro: () => `Marietta families and Cobb County celebration hosts choose private hibachi for birthday milestones, graduation parties, and backyard dinners that bring the whole neighborhood talking. Our certified teppanyaki chefs come to your Marietta home with the full live-fire setup and complete cleanup — Southern hospitality meets Japanese showmanship. Here's what Marietta hosts are saying:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',       alt: () => `Private hibachi chef in Marietta, GA`,               caption: 'The Marietta private dining standard' },
  },
  // profileIdx 6 — Alpharetta  (exp: hibachi-catering-3.jpg)
  'alpharetta': {
    testimonial: { src: '/pics/hibachi-catering.jpg',       alt: () => `Graduation hibachi event in Alpharetta, GA`,         caption: 'Alpharetta graduation season',       trustBadge: "Georgia's Favorite Hibachi Experience",       intro: () => `Alpharetta tech professionals, Silicon Peach corporate teams, and Avalon-area families choose private hibachi for client entertainment, graduation parties, and upscale backyard events that impress every guest at the table. Our certified chefs travel to your Alpharetta property with the complete teppanyaki setup, premium proteins, and full cleanup included. Here's what Alpharetta hosts are saying:` },
    cta:         { src: '/pics/hibachi-dallas-home.jpg',     alt: () => `Private hibachi chef in Alpharetta, GA`,             caption: 'The Alpharetta graduation dinner' },
  },
  // profileIdx 7 — St. Simons Island  (exp: hibachi-photo-2.jpg)
  'st-simons-island': {
    testimonial: { src: '/pics/hibachi-austin-home.jpg',    alt: () => `Birthday hibachi at a St. Simons Island rental`,     caption: 'St. Simons Island vacation hibachi', trustBadge: 'Five-Star Entertainment & Dining',            intro: () => `St. Simons Island vacation groups, birthday weekend crews, and Golden Isles rental guests choose private hibachi for the one dinner of the trip that everyone remembers long after they head home. Our certified chefs bring the full teppanyaki experience directly to your coastal rental with fire tricks, fresh proteins, and complete cleanup. Here's what St. Simons Island guests are saying:` },
    cta:         { src: '/pics/hibachi-virginia-beach.jpg',  alt: () => `Mobile hibachi chef in St. Simons Island, GA`,       caption: 'The Golden Isles dinner of the trip' },
  },
  // profileIdx 8 — Decatur  (exp: hibachi-colorado.jpg)
  'decatur': {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',     alt: () => `Private hibachi dinner in Decatur, GA`,              caption: 'Decatur private dining events',      trustBadge: '5.0 Average Rating',                          intro: () => `Decatur's eclectic hosts and intown Atlanta families choose private hibachi for dinner parties, graduation celebrations, and backyard events where the food is the entertainment. Our certified chefs come to your Decatur home with everything — grill, proteins, full live performance, and complete cleanup. Here's what Decatur hosts are saying:` },
    cta:         { src: '/pics/hibachi-austin-home.jpg',     alt: () => `Private hibachi chef in Decatur, GA`,                caption: 'The Decatur private dining standard' },
  },
  // profileIdx 9 — Sandy Springs  (exp: hibachi-event.jpg)
  'sandy-springs': {
    testimonial: { src: '/pics/hibachi-catering.jpg',       alt: () => `Backyard hibachi party in Sandy Springs, GA`,        caption: 'Sandy Springs backyard hibachi',     trustBadge: 'Trusted by Local Families',                   intro: () => `Sandy Springs corporate entertainers, estate backyard hosts, and North Atlanta families choose private hibachi for client dinners, milestone birthdays, and celebrations that go well beyond a standard restaurant night out. Our certified teppanyaki chefs travel to your Sandy Springs property with the complete setup and handle all cleanup when the show is done. Here's what Sandy Springs hosts are saying:` },
    cta:         { src: '/pics/backyard-hibachi.jpg',        alt: () => `Private hibachi chef at a Sandy Springs GA event`,   caption: 'Your Sandy Springs backyard, upgraded' },
  },
  // profileIdx 10 — Roswell  (exp: hibachi-chef-home.jpg)
  'roswell': {
    testimonial: { src: '/pics/hibachi-catering.jpg',       alt: () => `Backyard graduation party in Roswell, GA`,           caption: 'Roswell graduation celebrations',    trustBadge: 'Hundreds of Private Events',                  intro: () => `Roswell families along the Chattahoochee River corridor and throughout North Fulton choose private hibachi for graduation parties, anniversary dinners, and backyard milestones that deserve more than a restaurant table. Our certified chefs arrive at your Roswell home with the full teppanyaki show and zero cleanup for the host. Here's what Roswell families are saying:` },
    cta:         { src: '/pics/backyard-hibachi-3.jpg',      alt: () => `Backyard hibachi chef in Roswell, GA`,               caption: 'Roswell\'s backyard party standard' },
  },
  // profileIdx 11 — Dunwoody  (exp: backyard-hibachi.jpg)
  'dunwoody': {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',    alt: () => `Private hibachi dinner in Dunwoody, GA`,             caption: 'Dunwoody private dining events',     trustBadge: 'Thousands of Happy Guests',                   intro: () => `Dunwoody Perimeter-area professionals and families choose private hibachi for corporate client dinners, birthday celebrations, and backyard events where the Peach State's spirit of warm hospitality meets a live teppanyaki performance. Our certified chefs travel to your Dunwoody home with the full setup and complete cleanup — nothing left for the host to manage. Here's what Dunwoody hosts are saying:` },
    cta:         { src: '/pics/private-hibachi.jpg',         alt: () => `Private hibachi chef in Dunwoody, GA`,               caption: 'The Dunwoody private dining standard' },
  },
  // profileIdx 12 — Johns Creek  (exp: hibachi-shot-1.jpg)
  'johns-creek': {
    testimonial: { src: '/pics/backyard-hibachi.jpg',       alt: () => `Backyard hibachi party in Johns Creek, GA`,          caption: 'Johns Creek backyard celebrations',  trustBadge: 'Highly Rated by Local Hosts',                 intro: () => `Johns Creek families in one of North Fulton's most sought-after communities choose private hibachi for upscale backyard entertaining, family milestone events, and graduation parties where every detail matters. Our certified teppanyaki chefs arrive at your Johns Creek property ready to deliver a full live performance with premium proteins and complete post-dinner cleanup. Here's what Johns Creek hosts are saying:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',      alt: () => `Private hibachi chef at a Johns Creek GA event`,     caption: 'Your Johns Creek celebration' },
  },
  // profileIdx 13 — Evans  (exp: mobile-hibachi-2.jpg)
  'evans': {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',     alt: () => `Private hibachi dinner in Evans, GA`,                caption: 'Evans private dining events',        trustBadge: 'Unforgettable Private Dining Experiences',    intro: () => `Evans families in the Augusta metro choose private hibachi for estate entertaining, anniversary dinners, and graduation celebrations that call for something far more special than a restaurant reservation. Our certified chefs travel to your Evans home with the full teppanyaki setup — premium proteins, a live fire performance, and zero cleanup left for the host. Here's what Evans hosts are saying:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',       alt: () => `Private hibachi chef in Evans, GA`,                  caption: 'The Evans private dining standard' },
  },
  // profileIdx 14 — Duluth  (exp: backyard-hibachi-2.jpg)
  'duluth': {
    testimonial: { src: '/pics/hibachi-shot-2.jpg',         alt: () => `Backyard hibachi party in Duluth, GA`,               caption: 'Duluth backyard celebrations',       trustBadge: "Georgia's Favorite Hibachi Experience",       intro: () => `Duluth's diverse Gwinnett County families choose private hibachi for large graduation parties, milestone birthdays, and community celebrations where a single grill just won't be enough to bring everyone together. Our certified teppanyaki chefs come to your Duluth backyard with dual-station capacity, fresh proteins, and full cleanup included. Here's what Duluth families are saying:` },
    cta:         { src: '/pics/hibachi-dallas-home.jpg',     alt: () => `Backyard hibachi chef in Duluth, GA`,                caption: 'Your Duluth backyard celebration' },
  },
  // profileIdx 15 — Woodstock  (exp: hibachi-dallas-home.jpg)
  'woodstock': {
    testimonial: { src: '/pics/backyard-hibachi-2.jpg',     alt: () => `Backyard hibachi event in Woodstock, GA`,            caption: 'Woodstock backyard hibachi events',  trustBadge: 'Five-Star Entertainment & Dining',            intro: () => `Woodstock families in Cherokee County's fastest-growing suburb choose private hibachi for backyard birthday parties, graduation milestones, and summer entertaining that goes beyond anything a restaurant can offer in the Peach State. Our certified chefs arrive at your Woodstock home with the full teppanyaki setup, fresh proteins, and complete cleanup. Here's what Woodstock families are saying:` },
    cta:         { src: '/pics/hibachi-shot-2.jpg',          alt: () => `Private hibachi chef at a Woodstock GA event`,       caption: 'Your Woodstock backyard, upgraded' },
  },
  // profileIdx 16 — Kennesaw  (exp: hibachi-shot-2.jpg)
  'kennesaw': {
    testimonial: { src: '/pics/backyard-hibachi.jpg',       alt: () => `Graduation hibachi party in Kennesaw, GA`,           caption: 'Kennesaw graduation celebrations',   trustBadge: '5.0 Average Rating',                          intro: () => `Kennesaw families — from KSU graduation celebrations to Cobb County community gatherings — choose private hibachi for backyard events where the chef brings the restaurant experience directly to your outdoor space. Our certified teppanyaki chefs arrive at your Kennesaw home with everything included: grill, proteins, live show, and full cleanup. Here's what Kennesaw hosts are saying:` },
    cta:         { src: '/pics/hibachi-catering-2.jpg',      alt: () => `Private hibachi chef at a Kennesaw GA event`,        caption: 'Kennesaw\'s backyard party standard' },
  },
  // profileIdx 17 — Peachtree City  (exp: hibachi-pic-3.jpg)
  'peachtree-city': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',     alt: () => `Family hibachi gathering in Peachtree City, GA`,     caption: 'Peachtree City family celebrations', trustBadge: 'Trusted by Local Families',                   intro: () => `Peachtree City's close-knit golf cart community and family-oriented neighborhoods choose private hibachi for graduation parties, military family celebrations, and backyard milestones that call for more than a typical Georgia dinner out. Our certified chefs travel to your Peachtree City home with the full teppanyaki experience and handle setup to cleanup. Here's what Peachtree City families are saying:` },
    cta:         { src: '/pics/hibachi-event.jpg',           alt: () => `Private hibachi chef in Peachtree City, GA`,         caption: 'Your Peachtree City celebration, elevated' },
  },
  // profileIdx 18 — Gainesville  (exp: hibachi-austin-2.jpg)
  'gainesville': {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',     alt: () => `Private hibachi in Gainesville, GA`,                 caption: 'Gainesville backyard hibachi events', trustBadge: 'Hundreds of Private Events',                  intro: () => `Gainesville families near Lake Lanier and throughout the North Georgia foothills choose private hibachi for boating weekends, graduation parties, and backyard dinners where the scenery deserves a meal to match. Our certified teppanyaki chefs travel to your Gainesville property with the full live setup and complete cleanup — all you do is celebrate. Here's what Gainesville hosts are saying:` },
    cta:         { src: '/pics/hibachi-austin-home.jpg',     alt: () => `Private hibachi chef in Gainesville, GA`,            caption: 'Your Gainesville event, upgraded' },
  },
  // profileIdx 19 — Warner Robins  (exp: traveling-hibachi.jpg)
  'warner-robins': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',     alt: () => `Hibachi event in Warner Robins, GA`,                 caption: 'Warner Robins backyard celebrations', trustBadge: 'Thousands of Happy Guests',                   intro: () => `Warner Robins military families stationed near Robins AFB and Central Georgia communities choose private hibachi for homecoming celebrations, graduation parties, and backyard milestones that honor every guest at the table with Southern hospitality and Japanese flair. Our certified chefs travel to your Warner Robins home with the complete teppanyaki setup and leave with a spotless property. Here's what Warner Robins families are saying:` },
    cta:         { src: '/pics/hibachi-pic-3.jpg',           alt: () => `Private hibachi chef in Warner Robins, GA`,          caption: 'Your Warner Robins celebration' },
  },
}

// ── Support fallback images (per theme) ───────────────────────────────────────
const GA_SUPPORT_FALLBACKS = [
  // Theme 0 — Atlanta Corporate
  {
    testimonial: { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Corporate hibachi event in ${city}, GA`,          caption: 'Georgia professionals agree',         trustBadge: 'Highly Rated by Local Hosts',                 intro: (city) => `${city} professionals and corporate teams choose private hibachi for client entertainment, executive dinners, and team celebrations that go well beyond what any Atlanta-area restaurant can deliver. Our certified chefs travel to your ${city} venue with the complete teppanyaki setup, premium proteins, and full cleanup. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/hibachi-event.jpg',           alt: (city) => `Private hibachi chef in ${city}, GA`,             caption: 'Your private Georgia evening' },
  },
  // Theme 1 — North Atlanta Suburban
  {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',    alt: (city) => `Backyard hibachi event in ${city}, GA`,           caption: 'North Atlanta hosts agree',           trustBadge: 'Unforgettable Private Dining Experiences',    intro: (city) => `${city} families and North Atlanta suburban hosts choose private hibachi for graduation parties, milestone birthdays, and backyard events where the Peach State's spirit of celebration meets a live teppanyaki performance. Our certified chefs come to your ${city} home with the full setup and complete cleanup — nothing left for the host to manage. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',      alt: (city) => `Private hibachi chef in ${city}, GA`,             caption: 'Your backyard, upgraded' },
  },
  // Theme 2 — Coastal
  {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Coastal house hibachi in ${city}, GA`,            caption: 'Georgia coastal guests agree',        trustBadge: 'Five-Star Entertainment & Dining',            intro: (city) => `${city} vacation groups, bachelorette weekenders, and Georgia coastal rental guests choose private hibachi for the one dinner of the trip that everyone still talks about on the drive home. Our certified chefs arrive at your ${city} rental with the full teppanyaki show, fresh proteins, and complete cleanup so the property stays spotless. Here's what ${city} guests are saying:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',         alt: (city) => `Mobile hibachi chef in ${city}, GA`,              caption: 'The Georgia coast dinner upgrade' },
  },
  // Theme 3 — Athens College
  {
    testimonial: { src: '/pics/hibachi-colorado.jpg',       alt: (city) => `Graduation hibachi in ${city}, GA`,               caption: 'Georgia college hosts agree',         trustBadge: "Georgia's Favorite Hibachi Experience",       intro: (city) => `${city} graduation families and college town celebration hosts choose private hibachi when every restaurant is fully booked and only a backyard dinner in true Georgia style will do the occasion justice. Our certified chefs travel to your ${city} home with the full teppanyaki setup and handle every detail from arrival to complete cleanup. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/traveling-hibachi.jpg',       alt: (city) => `Private hibachi chef in ${city}, GA`,             caption: 'The Georgia college town dinner' },
  },
  // Theme 4 — Augusta Golf
  {
    testimonial: { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Estate hibachi event in ${city}, GA`,             caption: 'Augusta region hosts agree',          trustBadge: '5.0 Average Rating',                          intro: (city) => `${city} estate hosts and Augusta-region professionals choose private hibachi for Masters Week entertaining, milestone anniversary dinners, and executive gatherings where only the finest private dining experience will do. Our certified teppanyaki chefs arrive at your ${city} property with premium proteins, a live performance, and complete cleanup. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/private-hibachi.jpg',         alt: (city) => `Private hibachi chef in ${city}, GA`,             caption: 'Your private Georgia estate evening' },
  },
  // Theme 5 — Suburban Family
  {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Family hibachi gathering in ${city}, GA`,         caption: 'Georgia suburban families celebrate', trustBadge: 'Trusted by Local Families',                   intro: (city) => `${city} families across Greater Georgia choose private hibachi for graduation parties, multigenerational birthday dinners, and neighborhood celebrations that bring every generation around the same backyard grill. Our certified chefs travel to your ${city} home with the complete teppanyaki experience — fresh proteins, live performance, and full cleanup. Here's what ${city} families are saying:` },
    cta:         { src: '/pics/hibachi-event.jpg',           alt: (city) => `Private hibachi chef in ${city}, GA`,             caption: 'Your Georgia celebration, elevated' },
  },
]

// ── Closing variants (GA generic 143–148) ─────────────────────────────────────
export const GA_CLOSING_VARIANTS = [
  // 143 — Atlanta Corporate
  {
    headline: (city) => `Your ${city} Event Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Atlanta corporate and weekend slots fill 2–3 weeks out. Check your date now.`,
  },
  // 144 — North Atlanta Suburban
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Book It`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `North Atlanta weekends book 2–4 weeks ahead. Secure your date now.`,
  },
  // 145 — Coastal / Vacation
  {
    headline: (city) => `The Coastal Dinner Everyone Remembers`,
    sub:      (city) => `A mobile hibachi chef comes to your ${city} rental — grill, ingredients, full show, and complete cleanup. From $60 per adult.`,
    urgency:  `Georgia coastal season books fast — confirm your date 4–6 weeks ahead.`,
  },
  // 146 — Athens College
  {
    headline: (city) => `The ${city} Graduation Party Done Right`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} home. Full setup, fresh proteins, complete cleanup. From $60 per adult.`,
    urgency:  `UGA graduation season fills fast. Reserve your date now.`,
  },
  // 147 — Augusta Golf
  {
    headline: (city) => `The ${city} Dinner Your Evening Needed`,
    sub:      (city) => `A certified hibachi chef at your ${city} estate or venue. Premium proteins, live performance, complete cleanup. From $60 per adult.`,
    urgency:  `Augusta private events and Masters Week dates fill fast. Reserve now.`,
  },
  // 148 — Suburban Family
  {
    headline: (city) => `${city}'s Most Memorable Celebration — Book Yours`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  'Graduation season books early — confirm your Georgia date now.',
  },
]

// ── City-specific closings (GA city-specific 149–168) ─────────────────────────
export const GA_CITY_CLOSINGS = [
  // 149 — Atlanta (profileIdx 0)
  {
    headline: () => `Atlanta's Corporate Dining Standard — Book It`,
    sub:      () => `A certified teppanyaki chef for your Atlanta corporate event or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Atlanta corporate and weekend events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 150 — Savannah (profileIdx 1)
  {
    headline: () => `The Savannah Coastal Dinner Your Group Has Been Waiting For`,
    sub:      () => `A certified hibachi chef at your Savannah rental — grill, ingredients, full show, complete cleanup. From $60/adult.`,
    urgency:  `Savannah peak dates fill 4–6 weeks out. Reserve yours now before the season fills.`,
  },
  // 151 — Augusta (profileIdx 2)
  {
    headline: () => `Augusta Private Dining — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Augusta estate or outdoor venue. Premium ingredients, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `Augusta private events and Masters Week dates fill fast. Reserve well in advance.`,
  },
  // 152 — Columbus (profileIdx 3)
  {
    headline: () => `Columbus Graduation Season — Don't Wait`,
    sub:      () => `A certified hibachi chef comes to your Columbus home or backyard. All ingredients, live performance, full cleanup. From $60/adult.`,
    urgency:  `Columbus graduation season (May–June) fills fast. Check your date now.`,
  },
  // 153 — Athens (profileIdx 4)
  {
    headline: () => `Athens Graduation Season — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef comes to your Athens home. All ingredients, live performance, full cleanup. From $60/adult.`,
    urgency:  `UGA graduation weekends fill 4–5 weeks out. Reserve now.`,
  },
  // 154 — Marietta (profileIdx 5)
  {
    headline: () => `Marietta's Private Dining Standard — Book It`,
    sub:      () => `A certified hibachi chef at your Marietta property. Full setup, hand-selected proteins, complete cleanup. From $60/adult.`,
    urgency:  `Marietta and North Atlanta events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 155 — Alpharetta (profileIdx 6)
  {
    headline: () => `Alpharetta Private Dining — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Alpharetta home. Premium ingredients, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `Alpharetta private events and graduation season fill quickly. Reserve your date now.`,
  },
  // 156 — St. Simons Island (profileIdx 7)
  {
    headline: () => `Your St. Simons Island Weekend Just Found Its Best Night`,
    sub:      () => `A certified mobile hibachi chef at your St. Simons rental. Full setup, full show, complete cleanup. From $60/adult.`,
    urgency:  `St. Simons Island summer weekends fill 4–6 weeks out. Check availability now.`,
  },
  // 157 — Decatur (profileIdx 8)
  {
    headline: () => `Decatur's Private Dining Standard — Book It`,
    sub:      () => `A certified teppanyaki chef at your Decatur home. Full setup, premium ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Decatur weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 158 — Sandy Springs (profileIdx 9)
  {
    headline: () => `Sandy Springs' Best Backyard Party — Book Yours`,
    sub:      () => `A certified hibachi chef comes to your Sandy Springs property. All ingredients, full live performance, complete cleanup. From $60/adult.`,
    urgency:  `Sandy Springs weekend slots fill 2–3 weeks out. Check your date now.`,
  },
  // 159 — Roswell (profileIdx 10)
  {
    headline: () => `Roswell's Backyard Party Standard — Book It`,
    sub:      () => `A certified hibachi chef at your Roswell home. All proteins, full show, complete cleanup. From $60/adult.`,
    urgency:  `Roswell graduation and summer weekends book 2–3 weeks ahead. Confirm your date.`,
  },
  // 160 — Dunwoody (profileIdx 11)
  {
    headline: () => `Dunwoody's Private Dining Standard — Book It`,
    sub:      () => `A certified teppanyaki chef at your Dunwoody home. Full setup, premium ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Dunwoody weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 161 — Johns Creek (profileIdx 12)
  {
    headline: () => `Johns Creek's Best Backyard Celebration — Book Yours`,
    sub:      () => `A certified hibachi chef comes to your Johns Creek backyard. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Johns Creek graduation and summer weekends fill quickly. Check your date now.`,
  },
  // 162 — Evans (profileIdx 13)
  {
    headline: () => `Evans Private Dining — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Evans property. Premium ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Evans private events fill quickly. Reserve your date now.`,
  },
  // 163 — Duluth (profileIdx 14)
  {
    headline: () => `Duluth's Best Backyard Party — Book Yours`,
    sub:      () => `A certified hibachi chef comes to your Duluth property. All ingredients, full live performance, complete cleanup. From $60/adult.`,
    urgency:  `Duluth weekend slots fill 2–3 weeks out. Check your date now.`,
  },
  // 164 — Woodstock (profileIdx 15)
  {
    headline: () => `Woodstock's Backyard Party Standard — Book It`,
    sub:      () => `A certified hibachi chef at your Woodstock home. All proteins, full show, complete cleanup. From $60/adult.`,
    urgency:  `Woodstock graduation and summer weekends book 2–3 weeks ahead. Confirm your date.`,
  },
  // 165 — Kennesaw (profileIdx 16)
  {
    headline: () => `Kennesaw's Best Backyard Celebration — Book Yours`,
    sub:      () => `A certified hibachi chef comes to your Kennesaw backyard. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Kennesaw graduation and summer weekends fill quickly. Check your date now.`,
  },
  // 166 — Peachtree City (profileIdx 17)
  {
    headline: () => `Peachtree City's Most Memorable Celebration — Book Yours`,
    sub:      () => `A certified hibachi chef comes to your Peachtree City property. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Peachtree City weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 167 — Gainesville (profileIdx 18)
  {
    headline: () => `Gainesville's Best Backyard Party — Book Yours`,
    sub:      () => `A certified hibachi chef comes to your Gainesville property. All ingredients, full live performance, complete cleanup. From $60/adult.`,
    urgency:  `Gainesville weekend slots fill 2–3 weeks out. Check your date now.`,
  },
  // 168 — Warner Robins (profileIdx 19)
  {
    headline: () => `Warner Robins Private Dining — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Warner Robins property. Full setup, premium ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Warner Robins weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
]

// ── Intro variants (GA generic 143–148) ───────────────────────────────────────
export const GA_INTRO_VARIANTS = [
  // 143 — Atlanta Corporate
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for the Greater Atlanta Metro`,
    opening:  (city) => `Greater Atlanta knows how to entertain. From the corporate hospitality culture in Buckhead to the neighborhood backyard traditions of Sandy Springs and Dunwoody, this metro has always had its own standard for a proper gathering. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with everything included: the full setup, all fresh ingredients, and a live-fire cooking performance that turns any gathering in this part of Georgia into the evening your guests are still talking about the following week.`,
    middle:   (city) => `Your chef arrives with a propane teppan grill, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events up to 60+. Full cleanup when dinner is done.`,
    closing:  (city) => `${city} weekend events book 2–3 weeks out during peak season. Starting at $60 per adult, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of Greater Atlanta.`,
  },
  // 144 — North Atlanta Suburban
  {
    headline: (city) => `Hibachi at Home in ${city}: When Your Backyard Becomes North Atlanta's Best Dinner Table`,
    opening:  (city) => `You've invested in the outdoor space. The patio, the backyard, the summer evening setup that finally lives up to the home. Now give it the event it deserves. Private hibachi at home in ${city} brings a certified teppanyaki chef directly to your property — the full grill, all ingredients, the live cooking performance, and total cleanup. Your guests will be talking about this dinner through next season.`,
    middle:   (city) => `From the first onion volcano to the final plate of fried rice, your chef works the crowd for 90–120 minutes straight. Every protein cooked to order at the grill: chicken, steak, shrimp, salmon, and premium upgrades like filet mignon or lobster tail. Choose two proteins per guest at the standard rate or mix and match across the group.`,
    closing:  (city) => `${city} weekend evenings book 2–4 weeks ahead. Graduation parties, neighborhood gatherings, anniversary dinners, and milestone celebrations are our most common bookings across North Atlanta. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 145 — Coastal / Vacation
  {
    headline: (city) => `Mobile Hibachi in ${city}: The Coastal Dinner Your Group Has Been Waiting For`,
    opening:  (city) => `You have the coastal rental. You have the group. You planned the weekend — and the best dinner of the trip is the one nobody had to fight a restaurant for. Mobile hibachi at your ${city} rental brings a certified teppanyaki chef directly to your property. The full grill, all ingredients, a live-fire performance built around your guests, and complete cleanup when dinner is done.`,
    middle:   (city) => `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The show runs from first flame to last plate — every guest at the same outdoor table watching the same performance.`,
    closing:  (city) => `Georgia coastal events book 4–6 weeks in advance for peak season dates. Starting at $60 per adult, $600 event minimum. Confirm outdoor open-flame cooking is permitted at your rental before booking — most Georgia coast properties allow it.`,
  },
  // 146 — Athens College & Eclectic
  {
    headline: (city) => `Hibachi at Home in ${city}: The Backyard Party Georgia Was Made For`,
    opening:  (city) => `${city} knows how to celebrate. The backyard culture runs through every season — graduation parties in May, birthday milestones through summer, family reunions that bring everyone back under the same roof. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup: propane grill, all proteins, and a live-fire cooking performance that turns any backyard gathering into the evening your guests still talk about next year.`,
    middle:   (city) => `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for large graduations, family reunions, and community events are our most common format across Georgia.`,
    closing:  (city) => `${city} weekend events book 2–3 weeks out during peak season. Graduation season (May–June) fills fastest — reserve 4–5 weeks ahead for UGA commencement weekends. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 147 — Augusta Golf
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Estate Dining for the Augusta Region`,
    opening:  (city) => `Augusta sets the standard for private entertaining in Georgia. The estate properties along the Augusta National corridor, the riverside homes in Evans and Martinez, the private venues that host the world's most prestigious golf gathering every April — this is a market that understands quality and expects it. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with the full setup, hand-selected premium proteins, and a live performance that earns its place at an Augusta table.`,
    middle:   (city) => `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, scallops, premium shrimp — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, patio, or estate grounds. The performance runs 90–120 minutes from first flame to final plate.`,
    closing:  (city) => `Augusta private events book 2–3 weeks ahead. Masters Week events fill 6–8 weeks in advance — the most competitive window in Georgia. Starting at $60/adult, $600 minimum. Premium protein packages available for estate events.`,
  },
  // 148 — Georgia Suburban Family
  {
    headline: (city) => `Hibachi at Home in ${city}: The Backyard Party Georgia Suburban Families Were Made For`,
    opening:  (city) => `${city} has the backyards, the family culture, and the year-round outdoor entertaining tradition that private hibachi was built for. Graduation parties in May and June, birthday milestones through summer, family reunions that bring three generations together — private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire performance that turns any backyard gathering into the evening your guests reference for years.`,
    middle:   (city) => `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for large graduations, family reunions, and neighborhood events are our most common format across Georgia suburbs.`,
    closing:  (city) => `${city} weekend events book 2–3 weeks out during peak season. Graduation season (May–June) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── City-specific intros (GA city-specific 149–168) ───────────────────────────
export const GA_CITY_INTROS = [
  // 149 — Atlanta (profileIdx 0)
  {
    headline: () => `Backyard Hibachi Party in Atlanta`,
    opening:  () =>
      `Atlanta runs on relationships — the tech firms that have reshaped Midtown, the financial services companies in Buckhead, the healthcare systems anchoring the metro, and the professionals who entertain because the city rewards it. Backyard hibachi in Atlanta brings a certified teppanyaki chef to your outdoor space — private home in Sandy Springs, backyard terrace in Buckhead, estate in Druid Hills, or corporate venue on the Perimeter — with the full setup and a live cooking performance that turns any Atlanta gathering into the event people bring up at the next one.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Atlanta events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your space stays spotless.`,
    closing:  () =>
      `Atlanta corporate events and private gatherings book 2–3 weeks out. Serving all of Greater Atlanta — Sandy Springs, Buckhead, Marietta, Alpharetta, Dunwoody, Roswell, Johns Creek, Decatur, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 150 — Savannah (profileIdx 1)
  {
    headline: () => `Mobile Hibachi in Savannah`,
    opening:  () =>
      `Savannah is where the South slows down and the standard for a proper evening rises. The groups who rent historic district homes for bachelorette weekends, the anniversary couples who drove down from Atlanta, the family reunions anchored to a Savannah property for three days — they all came for the experience, not just the squares. Mobile hibachi at your Savannah rental brings a certified teppanyaki chef directly to your property. The full setup. The live performance. No River Street reservation battles required.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, courtyard, or backyard. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. Full cleanup when dinner is done. Your Savannah property stays spotless.`,
    closing:  () =>
      `Savannah peak season events book 4–6 weeks ahead. Bachelorette weekends, birthday house rentals, and vacation group dinners are our most common Savannah bookings. Serving Savannah and surrounding coastal Georgia — Pooler, Richmond Hill, Tybee Island, Rincon, and the full Coastal Empire. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 151 — Augusta (profileIdx 2)
  {
    headline: () => `Mobile Hibachi in Augusta`,
    opening:  () =>
      `Augusta is Georgia's private city — the place where the world's most exclusive golf gathering happens every April behind gates, where the river corridor holds some of the most impressive private properties in the Southeast, and where the standard for any gathering is set by the occasion itself. Mobile hibachi in Augusta brings a certified teppanyaki chef to your estate, backyard, or outdoor venue with hand-selected premium proteins and a live-fire performance that earns its place at an Augusta table. Masters Week entertaining, anniversary dinners, corporate client events, and private milestone occasions.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, scallops, premium shrimp — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, patio, or estate grounds. The performance runs 90–120 minutes from first flame to final plate — every plate cooked to order, every guest at the same table for the complete show. Full cleanup when dinner is done.`,
    closing:  () =>
      `Augusta standard events book 2–3 weeks ahead. Masters Week events fill 6–8 weeks in advance — the most competitive booking window in Georgia. Serving Augusta and all of the CSRA — Evans, Martinez, Grovetown, North Augusta, Aiken, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available.`,
  },
  // 152 — Columbus (profileIdx 3)
  {
    headline: () => `Hibachi Catering in Columbus`,
    opening:  () =>
      `Columbus has genuine community spirit — the Fort Moore families who celebrate milestones with everyone in the unit, the graduation parties that bring three generations from Atlanta and Birmingham to the same backyard, the corporate events anchored by the Aflac and TSYS presence in the metro. Hibachi catering in Columbus brings a certified teppanyaki chef to your property or outdoor venue with the full setup and a live-fire cooking performance that makes any Columbus gathering the dinner guests are still describing next month.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Columbus events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Columbus events book 2–3 weeks ahead. Graduation season and summer weekends fill somewhat faster. Serving Columbus and the west Georgia region — Phenix City, Fort Mitchell, Hamilton, and the full Columbus metro. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 153 — Athens (profileIdx 4)
  {
    headline: () => `Hibachi at Home in Athens`,
    opening:  () =>
      `Athens in May is graduation season at its most concentrated. University of Georgia commencement fills every restaurant, hotel, and Airbnb within 30 miles of campus. Finding a group reservation for 20 people on graduation Saturday in Athens is genuinely difficult. A private hibachi chef at your Athens home or backyard eliminates that problem entirely — the chef comes to you, performs for 90–120 minutes, and every guest gets exactly what they ordered without anyone leaving the property. The format that makes even the most distracted Dawg Nation crowd stop looking at their phone.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For large Athens graduation events over 25, we bring two chef stations. Full cleanup when dinner is done. Your backyard or venue is spotless when the chef leaves.`,
    closing:  () =>
      `Athens graduation season (May–June) books 4–5 weeks ahead — UGA commencement weekends fill fastest. Serving Athens and surrounding northeast Georgia including Commerce, Gainesville, Madison, Watkinsville, Winder, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 154 — Marietta (profileIdx 5)
  {
    headline: () => `Hibachi at Home in Marietta`,
    opening:  () =>
      `Marietta sits at the crossroads of Cobb County's outdoor entertaining culture — the backyards in East Cobb, the patio setups in West Marietta, the neighborhood culture that means the same twenty families have been celebrating each other's graduations and milestones for a decade. Hibachi at home in Marietta brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that upgrades any Marietta gathering from a good time into the party the neighborhood is planning around next season.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Marietta gatherings over 25, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Marietta weekend evenings book 2–3 weeks ahead. Graduation season (May–June) fills fastest — book 3–4 weeks out for Saturday events. Serving Marietta and Cobb County including Kennesaw, Smyrna, Acworth, Austell, Powder Springs, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 155 — Alpharetta (profileIdx 6)
  {
    headline: () => `Private Hibachi Chef in Alpharetta`,
    opening:  () =>
      `Alpharetta sets the standard for private entertaining in North Fulton County. The graduation parties here are planned months in advance, the anniversary dinners are occasions worth the preparation, and the backyard layouts in Milton Road and Windward communities were designed with exactly this kind of evening in mind. Private hibachi at home in Alpharetta brings a certified teppanyaki chef to your property with the full setup, hand-selected proteins, and a live cooking performance that is genuinely worth describing at the next dinner. The chef comes to you — no reservation battles, no crowded North Atlanta restaurant, no competition for the evening.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including premium upgrades like filet mignon and lobster tail, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Alpharetta property is spotless when the chef leaves.`,
    closing:  () =>
      `Alpharetta backyard evenings book 2–4 weeks ahead. Graduation season (May–June) fills fastest — reserve 3–4 weeks out for Saturday events. Serving Alpharetta and all of North Fulton including Roswell, Johns Creek, Dunwoody, Milton, Cumming, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available.`,
  },
  // 156 — St. Simons Island (profileIdx 7)
  {
    headline: () => `Mobile Hibachi in St. Simons Island`,
    opening:  () =>
      `St. Simons Island is where Georgia's Golden Isles reputation is earned — the oak-lined streets, the marsh views at sunset, the vacation rentals and oceanfront properties that groups book months in advance because this particular stretch of Georgia coast is worth protecting on the calendar. Mobile hibachi at your St. Simons Island rental brings a certified teppanyaki chef directly to your deck, patio, or yard with the full setup and a live-fire performance that makes the best dinner of the weekend the one that happened at the house. The bachelorette crew that's been to every Frederica Road restaurant doesn't need another reservation. They need this.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck or patio. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. Full cleanup when dinner is done. Your St. Simons rental stays spotless.`,
    closing:  () =>
      `St. Simons Island summer events book 4–6 weeks ahead for peak season dates. Bachelorette weekends, birthday trips, and vacation group dinners are our most common Golden Isles bookings. Serving St. Simons Island and all of the Golden Isles — Brunswick, Jekyll Island, Sea Island, Darien, and surrounding coastal communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 157 — Decatur (profileIdx 8)
  {
    headline: () => `Private Hibachi Chef in Decatur`,
    opening:  () =>
      `Decatur is the DeKalb County neighborhood that set its own standard — the walkable grid, the local food culture that made the city a dining destination before the Atlanta suburbs caught up, the resident who has very specific opinions about what makes a good dinner and will tell you about them in the backyard while the chef is setting up the grill. Private hibachi at home in Decatur brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that makes any occasion in this neighborhood the one your guests are texting about on the walk home.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Premium proteins — filet mignon, lobster tail, scallops — available for any Decatur occasion. Full cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Decatur backyard evenings book 2–3 weeks ahead. Serving Decatur and the greater DeKalb County area — Avondale Estates, Tucker, Stone Mountain, Clarkston, Atlanta, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 158 — Sandy Springs (profileIdx 9)
  {
    headline: () => `Backyard Hibachi Party in Sandy Springs`,
    opening:  () =>
      `Sandy Springs is where North Atlanta professionals put down roots — the neighborhoods where the backyard is an investment, the summer gathering runs through August, and the graduation party is an occasion that gets planned in February. Backyard hibachi in Sandy Springs brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that upgrades any gathering from a good time into the party the neighborhood still references at the next block event. The chef arrives, the group gathers on the terrace, and the performance runs.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Sandy Springs gatherings over 25, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Sandy Springs weekend evenings book 2–3 weeks ahead. Graduation season (May–June) fills fastest — book 3–4 weeks out for Saturday events. Serving Sandy Springs and all of North Fulton County including Roswell, Dunwoody, Alpharetta, Atlanta, Buckhead, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 159 — Roswell (profileIdx 10)
  {
    headline: () => `Hibachi at Home in Roswell`,
    opening:  () =>
      `Roswell has grown into one of North Atlanta's most celebrated communities — the Canton Street dining scene, the Chattahoochee River corridor, the historic mill district that hosts weddings and events, and the residential streets where the graduation party tradition runs deep. Hibachi at home in Roswell brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that makes any occasion in this city the one your guests are still planning around when the next season's events come up.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For Roswell events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Roswell weekend evenings book 2–3 weeks ahead. Graduation season (May–June) is our fastest-filling window — book 3–4 weeks out for Saturday events. Serving Roswell and all of North Fulton including Alpharetta, Marietta, Dunwoody, Sandy Springs, Johns Creek, and Milton. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 160 — Dunwoody (profileIdx 11)
  {
    headline: () => `Hibachi at Home in Dunwoody`,
    opening:  () =>
      `Dunwoody is where the Perimeter meets the neighborhood — the Dunwoody Village community culture, the professionally managed backyards and outdoor living spaces, the resident who has a firm opinion about every restaurant at the Perimeter and has decided a private chef at the house is a better call anyway. Hibachi at home in Dunwoody brings a certified teppanyaki chef to your property with the full setup and a live-fire performance that makes any occasion in this neighborhood the one your guests are texting about on the drive back to Buckhead.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Premium proteins — filet mignon, lobster tail, scallops — available for any Dunwoody occasion. Full cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Dunwoody backyard evenings book 2–3 weeks ahead. Serving Dunwoody and all of the Perimeter corridor — Sandy Springs, Atlanta, Chamblee, Brookhaven, Johns Creek, Roswell, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 161 — Johns Creek (profileIdx 12)
  {
    headline: () => `Hibachi at Home in Johns Creek`,
    opening:  () =>
      `Johns Creek is one of the youngest and most rapidly established cities in Georgia — planned neighborhoods, exceptional schools, and a family culture that means the graduation party is a major occasion requiring a major dinner. Hibachi at home in Johns Creek brings a certified teppanyaki chef to your property with the full setup and a live cooking performance built for exactly the kind of crowd that shows up at a Johns Creek graduation party. The milestone dinner the neighborhood heard about for weeks before. The birthday that stopped looking like a dinner and started looking like an event.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Johns Creek weekend evenings book 2–3 weeks ahead. Graduation season (May–June) is our fastest-filling window — book 3–4 weeks out for Saturday events. Serving Johns Creek and surrounding Gwinnett and Fulton communities including Duluth, Alpharetta, Roswell, Suwanee, and Cumming. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 162 — Evans (profileIdx 13)
  {
    headline: () => `Private Hibachi Chef in Evans`,
    opening:  () =>
      `Evans is Augusta's most sought-after residential address — the Columbia County suburbs where the Augusta National caddies and club staff live, where the corporate executives who moved here for Aflac and cybersecurity firms built their homes, and where the standard for any gathering is set by the property itself. Private hibachi at home in Evans brings a certified teppanyaki chef to your outdoor space with hand-selected premium proteins and a live-fire performance that earns its place on an Evans back terrace. The anniversary dinner, the milestone birthday, the client entertainment event that the guest is still describing six months later.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, scallops, premium shrimp — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, patio, or estate grounds. The performance runs 90–120 minutes from first flame to final plate. Every plate cooked to order, every guest at the same table, the entire show designed around your group. Full cleanup when dinner is done.`,
    closing:  () =>
      `Evans private events book 2–3 weeks ahead. Masters Week events require 6–8 weeks minimum. Serving Evans and all of the CSRA — Augusta, Martinez, Grovetown, North Augusta, Aiken, and surrounding communities. Starting at $60/adult, $600 minimum. Premium protein packages available. Most quotes returned same day.`,
  },
  // 163 — Duluth (profileIdx 14)
  {
    headline: () => `Hibachi Catering in Duluth`,
    opening:  () =>
      `Duluth anchors the Gwinnett County corridor between Johns Creek and Suwanee — a diverse, family-oriented community with strong Korean and Asian cultural roots that make teppanyaki dinner not just an event format but a genuine celebration of what this city values. Hibachi catering in Duluth brings a certified teppanyaki chef to your property for graduation parties, milestone birthdays, corporate team events, and family reunions with the full setup and a live-fire performance that becomes the evening your guests are planning around when the next occasion comes up.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Duluth events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Duluth weekend evenings book 2–3 weeks ahead. Graduation season and summer weekends fill somewhat faster. Serving Duluth and all of Gwinnett County — Johns Creek, Suwanee, Lawrenceville, Norcross, Alpharetta, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 164 — Woodstock (profileIdx 15)
  {
    headline: () => `Hibachi at Home in Woodstock`,
    opening:  () =>
      `Woodstock has become one of Cherokee County's most dynamic communities — the Downtown Woodstock arts and dining scene, the fast-growing residential corridors off Arnold Mill and Towne Lake Parkway, and a family culture that takes the backyard graduation party seriously. Hibachi at home in Woodstock brings a certified teppanyaki chef to your property with the full setup and a live cooking performance built for exactly the kind of crowd that shows up at a Woodstock summer event. The graduation dinner the neighborhood has been looking forward to. The birthday that finally matched the outdoor space.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Woodstock events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Woodstock weekend evenings book 2–3 weeks ahead. Graduation season (May–June) is our fastest-filling window — book 3–4 weeks out for Saturday events. Serving Woodstock and all of Cherokee County including Kennesaw, Canton, Marietta, Alpharetta, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 165 — Kennesaw (profileIdx 16)
  {
    headline: () => `Hibachi at Home in Kennesaw`,
    opening:  () =>
      `Kennesaw has been growing fast — new neighborhoods north of downtown, a Kennesaw State University community that produces graduation parties every spring, and a family backyard culture that runs from March through October without much pause. Hibachi at home in Kennesaw brings a certified teppanyaki chef to your property with the full setup and a live-fire performance that turns any gathering into the kind of evening your guests are planning around when the next occasion comes up. One chef for the birthday dinner. Two stations for the graduation crowd.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For Kennesaw events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Kennesaw weekend evenings book 2–3 weeks ahead. Graduation season and KSU commencement weekends fill fastest. Serving Kennesaw and northwest Cobb County including Marietta, Woodstock, Acworth, Austell, Smyrna, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 166 — Peachtree City (profileIdx 17)
  {
    headline: () => `Hibachi at Home in Peachtree City`,
    opening:  () =>
      `Peachtree City is planned outdoor living at its most complete — the golf cart paths, the outdoor family culture, the backyard setups that were built to be used for exactly this kind of evening. Hibachi at home in Peachtree City brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that makes any occasion in this community the one your neighbors are talking about on the cart path the next morning. The graduation dinner that brought the whole subdivision to the backyard. The birthday that finally used the patio the way it was always meant to be used.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For Peachtree City events over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Peachtree City weekend evenings book 2–3 weeks ahead. Graduation season (May–June) fills fastest — book 3–4 weeks out for Saturday events. Serving Peachtree City and all of Fayette County including Fayetteville, Newnan, Tyrone, Senoia, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 167 — Gainesville (profileIdx 18)
  {
    headline: () => `Hibachi Catering in Gainesville`,
    opening:  () =>
      `Gainesville anchors Hall County at the foothills of the North Georgia mountains — the gateway to Lake Lanier, the community hub for a region that celebrates big and entertains often. Hibachi catering in Gainesville brings a certified teppanyaki chef to your property for graduation parties, lake house dinners on nearby Lanier, family reunions, and corporate team events with the full setup and a live-fire performance that makes any Gainesville gathering the dinner guests are still talking about next month.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Gainesville events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Gainesville weekend evenings book 2–3 weeks ahead. Graduation season and summer weekends fill somewhat faster. Serving Gainesville and all of Hall County and the Lake Lanier region — Cumming, Dahlonega, Winder, Commerce, Athens, and surrounding northeast Georgia communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 168 — Warner Robins (profileIdx 19)
  {
    headline: () => `Private Hibachi Chef in Warner Robins`,
    opening:  () =>
      `Warner Robins is Middle Georgia's anchor city — the Robins Air Force Base community that celebrates deployments, homecomings, and promotions with a genuine sense of occasion, the growing civilian population that has built its own strong backyard culture, and a city that knows how to bring people together for the right kind of evening. Private hibachi at home in Warner Robins brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that makes any Warner Robins gathering the one your guests reference for years. The military homecoming dinner. The graduation party that brought everyone to the same backyard. The birthday that finally felt like an event.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For Warner Robins events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Warner Robins weekend evenings book 2–3 weeks ahead. Graduation season and summer weekends fill somewhat faster. Serving Warner Robins and all of Middle Georgia — Macon, Perry, Byron, Bonaire, Fort Valley, and Houston County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── Blog posts (6 theme arrays × 3 posts) ─────────────────────────────────────
const GA_BLOG_POSTS = [
  // Theme 0 — Atlanta Corporate
  [
    { slug: 'hibachi-catering-corporate-events',    title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',            excerpt: 'Team dinners, client entertainment, and Atlanta professional events — why a private hibachi chef beats every other corporate format.', date: '2026-07-01' },
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',            excerpt: 'Why backyard and vacation rental hibachi has become Atlanta\'s go-to bachelorette dinner — fire, food, and zero logistics.', date: '2026-07-01' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: Which Is Worth It?',                      excerpt: 'Atlanta hibachi restaurants vs. a private chef at home — the real cost, experience quality, and convenience breakdown.', date: '2026-07-01' },
  ],
  // Theme 1 — North Atlanta Suburban
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',           excerpt: 'From Alpharetta to Roswell — how to host a backyard hibachi birthday party that outclasses any North Atlanta restaurant.', date: '2026-07-01' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',              excerpt: 'Everything you need to prepare for a private hibachi chef at your North Atlanta suburban home.', date: '2026-07-01' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                             excerpt: 'A full pricing breakdown for Georgia hibachi events — what\'s included and what to expect.', date: '2026-07-01' },
  ],
  // Theme 2 — Coastal / Vacation
  [
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',            excerpt: 'Savannah and St. Simons Island hosts: what happens from booking to cleanup at a Georgia coastal hibachi event.', date: '2026-07-01' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Private Hibachi vs. Coastal Restaurants: The Georgia Shore Verdict',    excerpt: 'Why Georgia coastal vacation rental guests are choosing private hibachi over restaurant dining every season.', date: '2026-07-01' },
    { slug: 'hibachi-bachelorette-party',           title: 'Georgia Coast Bachelorette Weekend: Why Hibachi Wins Every Time',        excerpt: 'From Savannah to St. Simons Island — how hibachi became Georgia\'s most-requested coastal bachelorette dinner.', date: '2026-07-01' },
  ],
  // Theme 3 — Athens College
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',           excerpt: 'From Athens to Decatur — how to host a backyard hibachi birthday party that stands apart in Georgia.', date: '2026-07-01' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',              excerpt: 'Everything Athens and Decatur hosts need before the private hibachi chef arrives.', date: '2026-07-01' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost in Georgia?',                  excerpt: 'A full pricing breakdown for Athens and northeast Georgia hibachi events.', date: '2026-07-01' },
  ],
  // Theme 4 — Augusta Golf
  [
    { slug: 'hibachi-catering-corporate-events',    title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',            excerpt: 'Golf retreat dinners, Masters Week entertaining, and Augusta private events — why hibachi catering is the right call.', date: '2026-07-01' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Private Hibachi vs. Augusta Restaurants: The CSRA Verdict',              excerpt: 'Why Augusta hosts are choosing private hibachi chefs over restaurant dining for milestone occasions.', date: '2026-07-01' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost in Augusta?',                  excerpt: 'A full pricing breakdown for Augusta and CSRA hibachi events — including premium protein upgrades.', date: '2026-07-01' },
  ],
  // Theme 5 — Georgia Suburban Family
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',           excerpt: 'From Kennesaw to Peachtree City — how to host a backyard hibachi birthday party that stands apart in Georgia.', date: '2026-07-01' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',              excerpt: 'Everything Georgia suburban hosts need before the private hibachi chef arrives at their home.', date: '2026-07-01' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost in Georgia?',                  excerpt: 'A full pricing breakdown for Georgia hibachi events — what\'s included and what to expect.', date: '2026-07-01' },
  ],
]

// ── Major cities map (all 20 GA cities) ───────────────────────────────────────
const GA_MAJOR_CITIES = {
  // ── Theme 0 — Atlanta Corporate ─────────────────────────────────────────────
  'atlanta':          { v: 0, profileIdx: 0,  nearby: ['Sandy Springs','Marietta','Alpharetta','Decatur','Dunwoody','Roswell','Johns Creek'] },
  'sandy-springs':    { v: 0, profileIdx: 9,  nearby: ['Atlanta','Roswell','Dunwoody','Alpharetta','Marietta'] },
  // ── Theme 1 — North Atlanta Affluent Suburban ────────────────────────────────
  'alpharetta':       { v: 1, profileIdx: 6,  nearby: ['Roswell','Johns Creek','Dunwoody','Marietta','Milton','Cumming'] },
  'marietta':         { v: 1, profileIdx: 5,  nearby: ['Atlanta','Kennesaw','Smyrna','Alpharetta','Roswell','Sandy Springs'] },
  'roswell':          { v: 1, profileIdx: 10, nearby: ['Alpharetta','Marietta','Dunwoody','Johns Creek','Sandy Springs','Milton'] },
  'dunwoody':         { v: 1, profileIdx: 11, nearby: ['Atlanta','Sandy Springs','Roswell','Alpharetta','Johns Creek','Chamblee'] },
  'johns-creek':      { v: 1, profileIdx: 12, nearby: ['Alpharetta','Roswell','Dunwoody','Suwanee','Duluth','Cumming'] },
  // ── Theme 2 — Coastal / Vacation ────────────────────────────────────────────
  'savannah':         { v: 2, profileIdx: 1,  nearby: ['Pooler','Richmond Hill','Tybee Island','Port Wentworth','Rincon'] },
  'st-simons-island': { v: 2, profileIdx: 7,  nearby: ['Brunswick','Jekyll Island','Sea Island','Darien','Golden Isles'] },
  // ── Theme 3 — Athens College & Eclectic ─────────────────────────────────────
  'athens':           { v: 3, profileIdx: 4,  nearby: ['Gainesville','Commerce','Watkinsville','Madison','Winder'] },
  'decatur':          { v: 3, profileIdx: 8,  nearby: ['Atlanta','Avondale Estates','Tucker','Stone Mountain','Clarkston'] },
  // ── Theme 4 — Augusta Golf / Private Estate ──────────────────────────────────
  'augusta':          { v: 4, profileIdx: 2,  nearby: ['Evans','Martinez','Grovetown','North Augusta','Aiken'] },
  'evans':            { v: 4, profileIdx: 13, nearby: ['Augusta','Grovetown','Martinez','North Augusta','Aiken'] },
  // ── Theme 5 — Georgia Suburban Family ───────────────────────────────────────
  'columbus':         { v: 5, profileIdx: 3,  nearby: ['Phenix City','Fort Mitchell','Hamilton','Fortson','Midland'] },
  'duluth':           { v: 5, profileIdx: 14, nearby: ['Johns Creek','Suwanee','Lawrenceville','Norcross','Alpharetta'] },
  'woodstock':        { v: 5, profileIdx: 15, nearby: ['Kennesaw','Canton','Marietta','Alpharetta','Roswell'] },
  'kennesaw':         { v: 5, profileIdx: 16, nearby: ['Marietta','Woodstock','Acworth','Atlanta','Canton'] },
  'peachtree-city':   { v: 5, profileIdx: 17, nearby: ['Fayetteville','Newnan','Tyrone','Senoia','Sharpsburg'] },
  'gainesville':      { v: 5, profileIdx: 18, nearby: ['Athens','Cumming','Dahlonega','Winder','Commerce'] },
  'warner-robins':    { v: 5, profileIdx: 19, nearby: ['Macon','Perry','Byron','Bonaire','Warner Robins area'] },
}

// ── Display name overrides ────────────────────────────────────────────────────
const GA_CITY_DISPLAY_NAMES = {
  'st-simons-island': 'St. Simons Island',
  'sandy-springs':    'Sandy Springs',
  'johns-creek':      'Johns Creek',
  'peachtree-city':   'Peachtree City',
  'warner-robins':    'Warner Robins',
}

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const GA_PROFILE_H1_PREFIXES = [
  'Backyard Hibachi Party in',  // 0  — Atlanta
  'Mobile Hibachi in',          // 1  — Savannah
  'Mobile Hibachi in',          // 2  — Augusta
  'Hibachi Catering in',        // 3  — Columbus
  'Hibachi at Home in',         // 4  — Athens
  'Hibachi at Home in',         // 5  — Marietta
  'Private Hibachi Chef in',    // 6  — Alpharetta
  'Mobile Hibachi in',          // 7  — St. Simons Island
  'Private Hibachi Chef in',    // 8  — Decatur
  'Backyard Hibachi Party in',  // 9  — Sandy Springs
  'Hibachi at Home in',         // 10 — Roswell
  'Hibachi at Home in',         // 11 — Dunwoody
  'Hibachi at Home in',         // 12 — Johns Creek
  'Private Hibachi Chef in',    // 13 — Evans
  'Hibachi Catering in',        // 14 — Duluth
  'Hibachi at Home in',         // 15 — Woodstock
  'Hibachi at Home in',         // 16 — Kennesaw
  'Hibachi at Home in',         // 17 — Peachtree City
  'Hibachi Catering in',        // 18 — Gainesville
  'Private Hibachi Chef in',    // 19 — Warner Robins
]

const GA_THEME_H1_PREFIXES = [
  'Hibachi at Home in', // v=0 Atlanta Corporate generic (none without profileIdx)
  'Hibachi at Home in', // v=1 North Atlanta Suburban generic
  'Mobile Hibachi in',  // v=2 Coastal generic
  'Hibachi at Home in', // v=3 Athens College generic
  'Hibachi at Home in', // v=4 Augusta generic
  'Hibachi at Home in', // v=5 Suburban Family generic
]

// ── Custom meta overrides ─────────────────────────────────────────────────────
const GA_CUSTOM_META = {
  'atlanta': {
    title: 'Backyard Hibachi Party in Atlanta, GA | Private Chef at Home | Hibachi Connect',
    desc:  'Book a backyard hibachi party in Atlanta. Corporate dinners, birthday parties, graduation events — certified teppanyaki chef, full setup & cleanup. From $60/adult. Serving all of Greater Atlanta.',
  },
  'savannah': {
    title: 'Mobile Hibachi in Savannah, GA | Private Chef at Your Rental | Hibachi Connect',
    desc:  'A certified mobile hibachi chef comes to your Savannah vacation rental or home. No restaurant reservations needed — full setup, live show, complete cleanup. From $60/adult. Serving the Georgia Coast.',
  },
  'augusta': {
    title: 'Mobile Hibachi in Augusta, GA | Private Chef & Estate Dining | Hibachi Connect',
    desc:  'A certified mobile hibachi chef for your Augusta estate, corporate event, or Masters Week gathering. Premium proteins, live teppanyaki performance, complete cleanup. From $60/adult.',
  },
  'columbus': {
    title: 'Hibachi Catering in Columbus, GA | Private Teppanyaki Chef | Hibachi Connect',
    desc:  'Book hibachi catering in Columbus, GA. Certified teppanyaki chef, all proteins included, full setup & cleanup. Perfect for graduation parties, corporate events, and family gatherings. From $60/adult.',
  },
  'athens': {
    title: 'Hibachi at Home in Athens, GA | UGA Graduation Party Chef | Hibachi Connect',
    desc:  'Book a private hibachi chef in Athens, GA. Perfect for UGA graduation parties when restaurants are booked solid. Live teppanyaki, full setup & cleanup. From $60/adult. Serving all of Athens.',
  },
  'alpharetta': {
    title: 'Private Hibachi Chef in Alpharetta, GA | Backyard Events | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Alpharetta home or outdoor property. Graduation parties, birthday dinners, anniversary events — premium proteins, live performance, complete cleanup. From $60/adult.',
  },
  'st-simons-island': {
    title: 'Mobile Hibachi in St. Simons Island, GA | Vacation Rental Chef | Hibachi Connect',
    desc:  'A certified mobile hibachi chef comes to your St. Simons Island vacation rental. Perfect for bachelorette weekends, birthday trips, and coastal group dinners. Full setup & cleanup. From $60/adult.',
  },
  'decatur': {
    title: 'Private Hibachi Chef in Decatur, GA | Backyard Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Decatur, GA. Certified teppanyaki chef, premium proteins, full setup & cleanup. Perfect for birthday parties, graduation events, and neighborhood gatherings. From $60/adult.',
  },
  'sandy-springs': {
    title: 'Backyard Hibachi Party in Sandy Springs, GA | Private Chef | Hibachi Connect',
    desc:  'Book a backyard hibachi party in Sandy Springs, GA. Certified teppanyaki chef, full setup & cleanup. Perfect for graduation parties, birthdays, and corporate events. From $60/adult.',
  },
  'duluth': {
    title: 'Hibachi Catering in Duluth, GA | Private Teppanyaki Chef | Hibachi Connect',
    desc:  'Book hibachi catering in Duluth, GA. Certified teppanyaki chef, all proteins included, full setup & cleanup. Perfect for graduation parties, birthday events, and family gatherings. From $60/adult.',
  },
  'gainesville': {
    title: 'Hibachi Catering in Gainesville, GA | Private Teppanyaki Chef | Hibachi Connect',
    desc:  'Book hibachi catering in Gainesville, GA. Certified teppanyaki chef, all proteins included, full setup & cleanup. Perfect for graduation parties, birthday events, and family gatherings. From $60/adult.',
  },
  'warner-robins': {
    title: 'Private Hibachi Chef in Warner Robins, GA | Backyard Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Warner Robins, GA. Certified teppanyaki chef, full setup & cleanup. Perfect for graduation parties, birthdays, and family gatherings. From $60/adult.',
  },
  'evans': {
    title: 'Private Hibachi Chef in Evans, GA | Estate Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Evans, GA property. Premium proteins, live teppanyaki performance, complete cleanup. Perfect for milestone dinners and private gatherings. From $60/adult.',
  },
}

// ── Main builder ──────────────────────────────────────────────────────────────
export function getGeorgiaCityData(citySlug, cityName) {
  const major       = GA_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getGAVariantIndex(citySlug)
  const theme       = GA_IMAGE_THEMES[v]
  const displayName = GA_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Georgia',
    stateAbbr:    'GA',
    stateSlug:    'georgia',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: GA_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['Atlanta', 'Savannah', 'Augusta', 'Athens', 'Columbus'].filter(
      (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') !== citySlug
    ),
    localHighlights:   GA_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: GA_OCCASIONS[v],
    faqSet:            GA_FAQ_SETS[v](displayName),
    testimonials:      GA_TESTIMONIALS[v],
    uniqueIntroVariant:   (major?.profileIdx != null) ? 149 + major.profileIdx : 143 + v,
    uniqueWhyUsVariant:   v,
    uniqueClosingVariant: (major?.profileIdx != null) ? 149 + major.profileIdx : 143 + v,
    heroH1Prefix: major?.profileIdx != null
      ? GA_PROFILE_H1_PREFIXES[major.profileIdx]
      : GA_THEME_H1_PREFIXES[v],
    ...(GA_CUSTOM_META[citySlug]
      ? { metaTitle: GA_CUSTOM_META[citySlug].title, metaDescription: GA_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getGaHowItWorks(citySlug) {
  const major = GA_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getGAVariantIndex(citySlug)
  return GA_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getGaSectionVariant(citySlug) {
  const major = GA_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getGAVariantIndex(citySlug)
  return GA_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getGaCityImage(citySlug) {
  return GA_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getGaSupportImages(citySlug) {
  if (GA_SUPPORT_IMAGES[citySlug]) return GA_SUPPORT_IMAGES[citySlug]
  const major = GA_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getGAVariantIndex(citySlug)
  return GA_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getGaBlogPosts(variant, count) {
  return GA_BLOG_POSTS[variant % GA_BLOG_POSTS.length].slice(0, count)
}
