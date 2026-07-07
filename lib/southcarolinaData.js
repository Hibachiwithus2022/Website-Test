// =============================================================================
// lib/southcarolinaData.js — South Carolina Expansion
// 14 cities · 6 geographic themes
// Theme 0: Charleston Historic Luxury (Charleston, Mount Pleasant)
// Theme 1: Upstate Corporate (Greenville, Spartanburg, Simpsonville)
// Theme 2: Grand Strand Vacation (Myrtle Beach, North Myrtle Beach)
// Theme 3: Lowcountry Coastal (Hilton Head Island, Bluffton, Pawleys Island)
// Theme 4: Columbia Midlands (Columbia, Lexington, Rock Hill)
// Theme 5: SC Suburban (Summerville)
//
// INTRO_VARIANTS indices:   169–174 SC generic · 175–188 SC city-specific
// CLOSING_VARIANTS indices: 169–174 SC generic · 175–188 SC city-specific
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getSCVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 6
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const SC_HERO_SUBTITLES = [
  (city) => `Historic Homes · Bachelorette Weekends · Destination Birthdays · Serving ${city} & Greater Charleston`,
  (city) => `Corporate Team Dinners · Private Events · Upstate Milestones · Serving ${city} & Upstate SC`,
  (city) => `Beach House Hibachi · Bachelor & Bachelorette · Vacation Rental Dining · Serving ${city} & The Grand Strand`,
  (city) => `Golf Vacation Dining · Luxury Rentals · Family Reunions · Serving ${city} & The Lowcountry`,
  (city) => `Graduation Parties · Family Celebrations · Backyard Entertaining · Serving ${city} & The Midlands`,
  (city) => `Backyard Private Dining · Graduation Parties · Family Events · Serving ${city} & Greater Charleston`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const SC_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Charleston Historic Luxury
  (city) => [
    `Private hibachi at Charleston's most iconic settings — historic Peninsula homes, waterfront estates, Sullivan's Island and Isle of Palms rentals`,
    'Perfect for bachelorette weekends, destination birthdays, and milestone anniversary dinners in the Holy City',
    `Serving all of greater ${city} — the Peninsula, Mount Pleasant, James Island, Daniel Island, Sullivan's Island, and Folly Beach`,
    'Wedding pre-events, rehearsal dinners, and post-ceremony group dining for Charleston\'s premier wedding season',
    `Peak Charleston event season (spring and fall) books 3–5 weeks ahead — summer beach rentals book even faster`,
    'Premium proteins, full live performance, complete pack-out — nothing for the host to manage',
  ],
  // Theme 1 — Upstate Corporate
  (city) => [
    `Corporate team dinners and client appreciation events throughout greater ${city} and the Upstate SC corridor`,
    'Perfect for BMW, Michelin, and corporate campus events — Greenville-Spartanburg metro businesses are a major part of our bookings',
    `Ideal for executive dinner parties and private home events in ${city}'s upscale neighborhoods`,
    `Weekend evenings and corporate events in ${city} book 2–3 weeks ahead during peak seasons`,
    'Dual-station capacity for large corporate events and company celebrations of 25–60+ guests',
    'Premium proteins, full live performance, complete setup and cleanup — nothing for the host to manage',
  ],
  // Theme 2 — Grand Strand Vacation
  (city) => [
    `Beach house hibachi at your ${city} vacation rental — no packed restaurant reservations on the main strip`,
    'Perfect for bachelor parties, bachelorette weekends, birthday house rentals, and large family vacations',
    `Chef comes directly to your ${city} rental — full setup, full show, full cleanup`,
    'Memorial Day through Labor Day is peak Grand Strand season — reserve 6–8 weeks ahead for summer events',
    'Fire tricks, flying shrimp, and the full teppanyaki performance at your rental property deck or backyard',
    'Full pack-out when dinner is done — your vacation rental stays spotless',
  ],
  // Theme 3 — Lowcountry Coastal
  (city) => [
    `Private hibachi at your ${city} golf community villa, vacation rental, or Lowcountry estate`,
    'Perfect for golf vacation dinners, family reunions, luxury retreat groups, and corporate gathering events',
    `Chef travels to your ${city} property — full setup, live fire performance, complete cleanup`,
    'From spring through fall golf season — and year-round for Lowcountry residential entertaining',
    'Full setup and cleanup included — your vacation property or home is exactly as you left it when the chef departs',
    'Premium proteins and live teppanyaki performance suited to Lowcountry luxury standards',
  ],
  // Theme 4 — Columbia Midlands
  (city) => [
    `Backyard hibachi parties for ${city} families, USC graduation groups, and Midlands celebrations`,
    'Perfect for graduation parties, family reunions, milestone birthdays, and community gatherings',
    'Ideal for the Midlands families who celebrate big — USC commencement weekends are our most-booked events in the region',
    `Corporate team events for ${city} area businesses, government, and healthcare organizations`,
    `Full setup and cleanup — the best alternative to restaurant group dining in ${city}`,
    'Dual-station capacity for large gatherings of 25–60+ guests',
  ],
  // Theme 5 — SC Suburban
  (city) => [
    `Backyard hibachi for ${city}'s fastest-growing neighborhoods — graduation parties, birthday milestones, and family reunions`,
    `Perfect for the backyard-focused community that ${city} families have built`,
    `Serving ${city} and all of greater Charleston — James Island, West Ashley, North Charleston, and surrounding communities`,
    'Graduation season (May–June) is our busiest window across the greater Charleston area — book 3–4 weeks ahead for Saturday events',
    'Full setup and cleanup included — tables and chairs are all you need to provide',
    'Dual-station capacity for large graduation parties and family reunions of 25–60+ guests',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const SC_OCCASIONS = [
  // Theme 0 — Charleston Historic Luxury
  ['Bachelorette Weekends', 'Destination Birthdays', 'Rehearsal Dinners', 'Anniversary Dinners', 'Wedding Pre-Events', 'Corporate Client Dinners', 'Engagement Celebrations', 'Holiday Gatherings', 'Girls Trip Dinners', 'Private Milestone Events'],
  // Theme 1 — Upstate Corporate
  ['Corporate Team Dinners', 'Client Appreciation Events', 'Birthday Parties', 'Anniversary Dinners', 'Bachelorette Parties', 'Executive Dinner Parties', 'Holiday Gatherings', 'Graduation Parties', 'Retirement Parties', 'Backyard Celebrations'],
  // Theme 2 — Grand Strand Vacation
  ['Bachelorette Weekends', 'Bachelor Parties', 'Birthday Trips', 'Summer House Parties', 'Vacation Group Dinners', 'Girls Trips', 'Anniversary Getaways', 'Engagement Celebrations', 'Family Reunion Weekends', 'Spring Break Dinners'],
  // Theme 3 — Lowcountry Coastal
  ['Golf Vacation Dinners', 'Family Reunions', 'Anniversary Getaways', 'Bachelorette Weekends', 'Birthday Celebrations', 'Corporate Retreats', 'Vacation Rental Parties', 'Engagement Parties', 'Girls Weekends', 'Summer House Dinners'],
  // Theme 4 — Columbia Midlands
  ['Graduation Parties', 'Birthday Parties', 'Family Reunions', 'Anniversary Dinners', 'Corporate Events', 'Neighborhood Gatherings', 'Holiday Dinners', 'Retirement Parties', 'Backyard BBQ Alternatives', 'Community Celebrations'],
  // Theme 5 — SC Suburban
  ['Graduation Parties', 'Birthday Parties', 'Family Reunions', 'Anniversary Dinners', 'Neighborhood Gatherings', 'Corporate Events', 'Holiday Dinners', 'Retirement Parties', 'Backyard Celebrations', 'Community Events'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const SC_FAQ_SETS = [
  // Theme 0 — Charleston Historic Luxury
  (city) => [
    {
      q: `Can you set up at a historic Charleston home or vacation rental?`,
      a: `Absolutely — Charleston's historic Peninsula homes, Mount Pleasant backyards, Sullivan's Island and Isle of Palms vacation rentals, and Daniel Island properties are among our most popular setups. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most greater Charleston properties have excellent outdoor spaces already in place.`,
    },
    {
      q: `What areas of the Charleston metro do you serve?`,
      a: `We serve all of greater Charleston — the Peninsula, Mount Pleasant, James Island, West Ashley, Daniel Island, Summerville, Sullivan's Island, Isle of Palms, Folly Beach, and every community throughout the Lowcountry. Most locations within 35 miles of downtown Charleston fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Is private hibachi a good option for a Charleston bachelorette weekend?`,
      a: `It's the best option. Instead of fighting for reservations at every packed King Street restaurant, your chef comes directly to the vacation rental. Fire tricks, flying shrimp, and the full teppanyaki show at your property — then the rest of the evening is already right there. We've run dozens of Charleston bachelorette weekends. The chef makes the evening.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Spring and fall are Charleston's peak event seasons — we recommend booking 3–5 weeks ahead for weekend events from March through June and September through November. Summer vacation rental dates fill quickly. Holiday and New Year's events should be reserved 4–6 weeks ahead. Weekday events typically have more flexibility.`,
    },
    {
      q: `Can you handle a wedding rehearsal dinner or pre-wedding event in Charleston?`,
      a: `Yes — rehearsal dinners, wedding eve cocktail-and-hibachi events, and post-ceremony group dinners are a significant part of our Charleston bookings. We coordinate directly with your venue or rental property. For wedding-related events, we recommend booking 6–8 weeks ahead as Charleston wedding season fills early.`,
    },
    {
      q: `Is there a travel fee for Charleston events?`,
      a: `No extra travel fee for most greater Charleston locations — the Peninsula, Mount Pleasant, James Island, West Ashley, Daniel Island, and Summerville are all within our standard service area. Sullivan's Island, Isle of Palms, and Folly Beach may have a modest travel surcharge — always disclosed upfront before you book.`,
    },
  ],
  // Theme 1 — Upstate Corporate
  (city) => [
    {
      q: `Can you set up at a corporate venue or private home in ${city}?`,
      a: `Yes — corporate outdoor spaces, private residences, and event venues throughout ${city} and the greater Upstate SC corridor are among our most common setups. We need a flat outdoor area of at least 10×10 ft with vehicle access for setup. Most Greenville-Spartanburg area properties meet this easily.`,
    },
    {
      q: `What Upstate SC communities do you serve?`,
      a: `We serve all of Upstate SC — Greenville, Spartanburg, Simpsonville, Greer, Mauldin, Taylors, Duncan, Gaffney, Fountain Inn, and every community throughout the Upstate corridor. Most locations within 35 miles of downtown Greenville fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle large corporate team events for ${city} companies?`,
      a: `Absolutely — corporate team dinners, client appreciation events, and office celebrations are a major part of our Upstate SC bookings. We've run events for automotive, manufacturing, healthcare, and professional services firms throughout the Greenville-Spartanburg metro. For groups over 25, we bring two chef stations. Outdoor corporate spaces and private venues work perfectly.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend evenings and corporate events in the ${city} area book 2–3 weeks out. Holiday party season (November–December) fills fastest — reserve 4–5 weeks ahead for any Friday or Saturday event. Weekday corporate dinners typically have more flexibility and can often be arranged within 1–2 weeks.`,
    },
    {
      q: `Can you set up at a ${city} backyard or residential outdoor space?`,
      a: `Yes — Upstate SC residential backyards, patios, and deck spaces are excellent hibachi setups. We need a flat outdoor area of at least 10×10 ft. Deck, lawn, paver patio, or stamped concrete all work perfectly. Our setup is fully self-contained — we bring everything and take everything with us.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Upstate SC locations and all of the Greenville-Spartanburg metro area. For events more than 35 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you book.`,
    },
  ],
  // Theme 2 — Grand Strand Vacation
  (city) => [
    {
      q: `Can you come to a ${city} vacation rental or Airbnb?`,
      a: `Absolutely — Grand Strand vacation rentals are our most popular booking category along the SC coast. We come directly to your property. Just confirm the rental allows outdoor open-flame cooking (most do), and we handle everything from setup to complete cleanup. Ocean-front, ocean-view, and off-strip properties all work equally well.`,
    },
    {
      q: `How far in advance should I book a ${city} summer event?`,
      a: `Grand Strand season — Memorial Day through Labor Day — fills extremely fast. We strongly recommend booking 6–8 weeks in advance for peak July and August events. Fourth of July weekend and August beach dates fill weeks in advance. Off-season events (September–May) have much more availability.`,
    },
    {
      q: `Can you set up on the deck or patio of a ${city} beach rental?`,
      a: `Yes — outdoor decks, patios, and yard spaces at Grand Strand vacation rentals are our ideal setup. We need a flat outdoor area of at least 10×10 ft with clearance overhead. Most Myrtle Beach and North Myrtle Beach rental properties have excellent deck or backyard setups already in place.`,
    },
    {
      q: `Do you serve all Grand Strand communities?`,
      a: `Yes — we serve the full Grand Strand including Myrtle Beach, North Myrtle Beach, Surfside Beach, Murrells Inlet, Garden City Beach, Conway, Pawleys Island, and every community along the SC coast. Travel fees may apply for the most remote locations — always disclosed upfront before you book.`,
    },
    {
      q: `Is hibachi a good option for a ${city} bachelorette or bachelor weekend?`,
      a: `It's the standout option. Instead of fighting for a table at every packed restaurant on the main strip, your chef comes to the house. Fire tricks, flying shrimp, and the full teppanyaki performance at your rental — then the whole group is already home for whatever comes next. We've run dozens of Grand Strand bachelorette and bachelor events. The chef always makes the night.`,
    },
    {
      q: `What if the weather changes at our beach event?`,
      a: `We cook in light rain under appropriate shelter. For severe weather or lightning, we work with you to reschedule at no penalty — Grand Strand weather is something we understand well. Covered decks, screened porches, and garage setups make excellent backup locations at most beach rentals.`,
    },
  ],
  // Theme 3 — Lowcountry Coastal
  (city) => [
    {
      q: `Can you set up at a Hilton Head plantation community or vacation villa?`,
      a: `Absolutely — Hilton Head plantation communities, Harbour Town-area villas, Bluffton lifestyle communities, and coastal vacation rentals throughout the Lowcountry are among our most popular setups. We coordinate with your property or HOA in advance when needed. We need a flat outdoor area of at least 10×10 ft — most Lowcountry properties have excellent patio or yard setups already.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `For Lowcountry weekend events, we recommend booking 3–6 weeks ahead during peak golf and vacation season (spring through fall). Summer Hilton Head dates fill especially fast. Winter and off-season events typically have more flexibility — 2–3 weeks' notice is usually sufficient for non-peak dates.`,
    },
    {
      q: `What's the best setup at a ${city} Lowcountry property?`,
      a: `Open decks, large patios, pool areas, and flat yard spaces all work perfectly. We need a minimum 10×10 ft flat surface with clearance overhead. Our setup takes 20–30 minutes and the performance runs 90–120 minutes. We pack everything out completely when dinner is done — your vacation property is spotless when the chef leaves.`,
    },
    {
      q: `Do you serve smaller Lowcountry communities near ${city}?`,
      a: `Yes — we travel throughout the South Carolina Lowcountry and serve all communities along and near the coast, including Bluffton, Beaufort, Hardeeville, Okatie, Pawleys Island, Georgetown, Murrells Inlet, and surrounding areas. Travel fees may apply for locations more than 40 miles from our nearest chef base — always disclosed upfront.`,
    },
    {
      q: `Is hibachi good for a multigenerational family reunion at a Lowcountry property?`,
      a: `It's the ideal format. Kids, parents, and grandparents all gather around the same grill for 90–120 minutes — everyone watching the same chef, sharing the same plates, experiencing the same show. For groups over 25, we bring two chef stations. Three generations at the grill is our most common Lowcountry family event format.`,
    },
    {
      q: `Can you handle a golf group dinner at a ${city} villa or resort property?`,
      a: `Yes — golf vacation group dinners are one of our most common Hilton Head and Lowcountry bookings. Groups of 8–20 golfers gathering for dinner after a round is a natural hibachi format. The chef provides the evening's entertainment so the conversation can be about the day's round rather than finding a restaurant that can seat the whole group. We coordinate directly with your villa or rental manager.`,
    },
  ],
  // Theme 4 — Columbia Midlands
  (city) => [
    {
      q: `Do you serve the ${city} area and surrounding Midlands communities?`,
      a: `Yes — we cover all of the South Carolina Midlands including ${city} and surrounding neighborhoods, suburbs, and communities. Most locations within 30 miles of downtown Columbia fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle a large USC graduation party in ${city}?`,
      a: `Absolutely — USC graduation parties and commencement weekend events are our most common Columbia bookings. For groups over 25, we bring two chef stations running simultaneously. Three generations around the grill — college students, parents, and grandparents — is our most common Midlands graduation setup.`,
    },
    {
      q: `How far in advance should I book a ${city} weekend event?`,
      a: `For Friday and Saturday events in ${city}, booking 2–3 weeks ahead is recommended. During USC graduation season (May) and fall, 3–4 weeks is safer. Weekday events can often be arranged with 5–7 days' notice depending on chef availability.`,
    },
    {
      q: `Can you set up for an outdoor backyard or community event in ${city}?`,
      a: `Yes — backyard events, community gatherings, neighborhood association setups, and outdoor venue events all work well in ${city}. We need a flat area of at least 10×10 ft with vehicle access for setup. Most Columbia-area residential and community spaces meet this requirement easily.`,
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
  // Theme 5 — SC Suburban
  (city) => [
    {
      q: `Can hibachi be set up in a ${city} backyard or patio?`,
      a: `Yes — suburban backyards and patios throughout the greater Charleston area are our most common setup environment. We need a flat area of at least 10×10 ft. Deck, lawn, paver patio, or concrete all work perfectly. Our setup is fully self-contained — we bring everything and take everything with us when we leave.`,
    },
    {
      q: `What communities near ${city} do you serve?`,
      a: `We serve ${city} and all of the greater Charleston metro — Goose Creek, Ladson, North Charleston, Moncks Corner, Hanahan, and every community throughout the greater Lowcountry region. Most locations within 30 miles of Charleston fall within our standard service area with no added travel fee.`,
    },
    {
      q: `How far in advance should I book for a ${city} graduation party?`,
      a: `Graduation season (May–June) is our highest-demand window across the greater Charleston area. We recommend booking 3–4 weeks in advance for any May or June Saturday event in ${city}. Weekday graduation dinners typically have more availability — 2–3 weeks' notice is usually sufficient.`,
    },
    {
      q: `Can you handle a large graduation or milestone party in ${city}?`,
      a: `Absolutely — parties of 25–60 guests are among our most common bookings in the ${city} area. For groups over 25, we bring two chef stations running in parallel to maintain quality and timing. Large milestone events — graduation parties, anniversary dinners, retirement celebrations — are a specialty.`,
    },
    {
      q: `Do you serve North Charleston and West Ashley area communities?`,
      a: `Yes — North Charleston, West Ashley, James Island, and all greater Charleston suburban communities are part of our standard service area. No extra travel fee for most locations within the greater Charleston metro. We serve ${city} and every surrounding community throughout the Lowcountry.`,
    },
    {
      q: `What do I need to provide for the event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all ingredients and proteins, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included.`,
    },
  ],
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const SC_TESTIMONIALS = [
  // Theme 0 — Charleston Historic Luxury
  [
    {
      text: '"Bachelorette weekend on the Charleston Peninsula — 16 of us, historic home patio, chef arrived on time and completely took over the Friday night. Fire tricks, flying shrimp, the full show. We\'ve done every rooftop bar and King Street restaurant over the years. Nothing touched this."',
      name: 'Jenna M.',
      city: 'Charleston, SC',
      event: 'Bachelorette Weekend',
      initials: 'JM',
    },
    {
      text: '"Anniversary dinner in Mount Pleasant — 22 guests on the back patio, chef was absolutely exceptional. The food, the fire performance, the energy — exactly what we wanted for that milestone occasion. Three of our guests booked their own events before the chef even finished cleanup."',
      name: 'Sarah & David R.',
      city: 'Mount Pleasant, SC',
      event: 'Anniversary Dinner',
      initials: 'SR',
    },
    {
      text: '"Rehearsal dinner for 28 guests the night before a wedding at a Sullivan\'s Island rental. Chef showed up exactly on time, set up while guests arrived, and turned a dinner into a full evening\'s entertainment. Every single guest said it was the most fun pre-wedding event they\'d ever attended."',
      name: 'The Whitfield Family',
      city: 'Sullivan\'s Island, SC',
      event: 'Wedding Rehearsal Dinner',
      initials: 'WF',
    },
  ],
  // Theme 1 — Upstate Corporate
  [
    {
      text: '"Corporate team dinner for our Greenville manufacturing group — 30 people, outdoor venue, chef arrived on time and put on a flawless show. Every client said it was the best dinner we\'d arranged in years. This is our new standard for company events."',
      name: 'Marcus T.',
      city: 'Greenville, SC',
      event: 'Corporate Team Dinner',
      initials: 'MT',
    },
    {
      text: '"Birthday party at our Simpsonville backyard — 36 guests, chef had everyone gathered from the first flame. Neighbors we barely knew were cheering at the grill by the end. The best backyard event we\'ve ever hosted. Already booked for next summer."',
      name: 'Karen & Tom B.',
      city: 'Simpsonville, SC',
      event: 'Birthday Party',
      initials: 'KB',
    },
    {
      text: '"Company holiday party in Spartanburg — 28 employees and spouses, private outdoor venue. Nobody expected a live hibachi chef. Chef had the entire group at the grill laughing for two hours. Best company event in recent memory and exactly what we needed after a hard year."',
      name: 'Rebecca W.',
      city: 'Spartanburg, SC',
      event: 'Company Holiday Party',
      initials: 'RW',
    },
  ],
  // Theme 2 — Grand Strand Vacation
  [
    {
      text: '"Bachelorette house in Myrtle Beach — 18 of us, beach rental deck, chef completely made Friday night. Fire tricks, flying shrimp, the full show. We\'ve been to every restaurant on the main strip over the years. Nothing compares to having the chef at the house."',
      name: 'Brittany C.',
      city: 'Myrtle Beach, SC',
      event: 'Bachelorette Weekend',
      initials: 'BC',
    },
    {
      text: '"Birthday weekend in North Myrtle Beach — group house, 14 of us, hibachi on Saturday night. Chef showed up exactly on time, set up while we gathered on the deck, and ran the most entertaining dinner of the trip. Everyone agreed it was the highlight of the whole week."',
      name: 'Tyler M.',
      city: 'North Myrtle Beach, SC',
      event: 'Birthday Weekend',
      initials: 'TM',
    },
    {
      text: '"Myrtle Beach family vacation — rented a house for two weeks, 22 people across three generations. Did hibachi mid-week and it became the dinner everyone planned around. Chef was fantastic, food was outstanding, and the outdoor setting beat every restaurant we tried all week."',
      name: 'The Henderson Family',
      city: 'Myrtle Beach, SC',
      event: 'Family Vacation Dinner',
      initials: 'HF',
    },
  ],
  // Theme 3 — Lowcountry Coastal
  [
    {
      text: '"Golf group dinner at our Hilton Head plantation villa — 16 guests after a round at Harbour Town. Chef set up on the patio and put on a two-hour show. The food was exceptional and the performance was better than any restaurant we tried all week. Already planning next year\'s golf trip around this."',
      name: 'James & Patricia G.',
      city: 'Hilton Head Island, SC',
      event: 'Golf Vacation Dinner',
      initials: 'JG',
    },
    {
      text: '"Family reunion in Bluffton — 34 guests from six states, rented a large property in Palmetto Bluff for the week. Did hibachi on Thursday and it became the trip highlight. Grandparents front row, grandkids asking the chef questions, everyone cheering. Perfect multigenerational evening."',
      name: 'The Caldwell Family',
      city: 'Bluffton, SC',
      event: 'Family Reunion',
      initials: 'CF',
    },
    {
      text: '"Anniversary dinner at a Pawleys Island beach house — 18 guests on the back deck, chef drove down and put on a flawless show. The setting, the food, the performance — exactly what we needed for that milestone. Three guests booked their own events before the chef left."',
      name: 'Lisa & Robert N.',
      city: 'Pawleys Island, SC',
      event: 'Anniversary Dinner',
      initials: 'LN',
    },
  ],
  // Theme 4 — Columbia Midlands
  [
    {
      text: '"USC graduation party for our daughter in Columbia — 48 guests, backyard setup, dual chef stations. Her entire graduating class plus family from three states gathered around the grill for two hours. No Five Points restaurant could have done this. Already planning her brother\'s graduation."',
      name: 'Donna & Charles F.',
      city: 'Columbia, SC',
      event: 'USC Graduation Party',
      initials: 'DF',
    },
    {
      text: '"Family reunion in Lexington — 54 guests, huge backyard, relatives in from Georgia and North Carolina. Chef set up two stations and had the whole crowd entertained from first flame to last plate. Best reunion we\'ve had in twenty years. This is the new family standard."',
      name: 'The Simmons Family',
      city: 'Lexington, SC',
      event: 'Family Reunion',
      initials: 'SF',
    },
    {
      text: '"Birthday party in Rock Hill — 32 guests, outdoor setup, chef completely took over the entertainment for the evening. Easy booking, exactly on time, professional from start to finish. Rock Hill doesn\'t have many options like this. We\'ll be calling again for sure."',
      name: 'Kevin H.',
      city: 'Rock Hill, SC',
      event: 'Birthday Party',
      initials: 'KH',
    },
  ],
  // Theme 5 — SC Suburban
  [
    {
      text: '"Graduation party for our son in Summerville — 42 guests, backyard setup, chef had everyone gathered from the first flame. His graduating class plus our neighbors plus our extended family all cheering at the same grill. Already planning our daughter\'s graduation for next spring."',
      name: 'Thomas & Ellen M.',
      city: 'Summerville, SC',
      event: 'Graduation Party',
      initials: 'TM',
    },
    {
      text: '"Birthday dinner in our Summerville backyard — 30 guests, May evening, absolutely perfect. The chef was personable, professional, and turned what would have been a dinner party into a full performance. My guests are still asking for the contact information months later."',
      name: 'Ashley R.',
      city: 'Summerville, SC',
      event: 'Birthday Dinner',
      initials: 'AR',
    },
    {
      text: '"Neighborhood Fourth of July gathering near Charleston — 36 people, our largest outdoor setup yet. Chef ran dual stations and kept the whole crowd engaged for two solid hours. We\'d done regular catering every year before. This is the new neighborhood standard going forward."',
      name: 'Michael & Janet P.',
      city: 'Summerville, SC',
      event: 'Neighborhood Gathering',
      initials: 'MP',
    },
  ],
]

// ── Image themes ──────────────────────────────────────────────────────────────
const SC_IMAGE_THEMES = [
  { heroImage: '/pics/hero-4.jpg' },               // Theme 0 — Charleston Luxury
  { heroImage: '/pics/hero-2.jpg' },               // Theme 1 — Upstate Corporate
  { heroImage: '/pics/hibachi-photo-2.jpg' },      // Theme 2 — Grand Strand Vacation
  { heroImage: '/pics/hibachi-colorado-home.jpg' }, // Theme 3 — Lowcountry Coastal
  { heroImage: '/pics/hero-1.jpg' },               // Theme 4 — Columbia Midlands
  { heroImage: '/pics/backyard-hibachi-3.jpg' },   // Theme 5 — SC Suburban
]

// ── How It Works ──────────────────────────────────────────────────────────────
const SC_HOW_IT_WORKS = [
  // Theme 0 — Charleston Historic Luxury
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Charleston events book fast. Call or text (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Request Your Event',           desc: 'Tell us your date, guest count, and outdoor space — historic home, vacation rental, or backyard. We confirm fast.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking Performance',     desc: 'Guests gather on your patio or deck for 90–120 minutes of live hibachi — fire tricks, flying shrimp, freshly grilled food cooked to order.' },
      { num: '04', title: 'Full Cleanup Included',        desc: 'Chef handles all cleanup and packs out completely. Your property stays spotless. You keep the experience.' },
    ],
  },
  // Theme 1 — Upstate Corporate
  {
    headline:   (city) => `How Corporate Hibachi Works in ${city}`,
    footerNote: (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Request Your Event',           desc: 'Tell us your date, guest count, and venue — corporate space, private home, or backyard. Quick confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Certified chef arrives with full teppan grill, propane, all ingredients, sauces, plates, and chopsticks. No shopping required.' },
      { num: '03', title: 'The Performance Begins',       desc: 'Guests gather around the grill for a live teppanyaki show — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Zero Cleanup for You',         desc: 'Chef packs everything out completely. You hosted the best corporate dinner of the year and didn\'t manage a single detail.' },
    ],
  },
  // Theme 2 — Grand Strand Vacation
  {
    headline:   (city) => `How Mobile Hibachi Works at Your ${city} Rental`,
    footerNote: (city) => `Grand Strand summer dates book fast. Call or text (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Book From Your Rental',     desc: 'Reserve your date online or by phone — tell us your beach address, guest count, and deck or yard setup. Fast confirmation.' },
      { num: '02', title: 'Chef Comes to You',         desc: 'Certified hibachi chef arrives with full setup: teppan grill, propane, all ingredients, plates, sauces, and utensils. Nothing for you to prepare.' },
      { num: '03', title: 'Beach House Dinner Show',   desc: 'Guests gather on your deck, patio, or yard for 90–120 minutes of live hibachi — fire tricks, grilled-to-order proteins, the full show.' },
      { num: '04', title: 'Pack-Out and Done',         desc: 'Chef handles complete cleanup and takes everything with them. Your rental is spotless and you had the best dinner of the summer.' },
    ],
  },
  // Theme 3 — Lowcountry Coastal
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Property`,
    footerNote: (city) => `Lowcountry events book fast in season. Call (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Book From Your Property',      desc: 'Reserve your date online or by phone — tell us your address, guest count, and outdoor setup. We confirm fast and coordinate travel.' },
      { num: '02', title: 'Chef Travels to You',          desc: 'Your certified teppanyaki chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Lowcountry Live Fire Dining',  desc: 'Guests gather around the grill for 90–120 minutes of live hibachi cooking — fire tricks, custom proteins, fried rice, grilled vegetables.' },
      { num: '04', title: 'Full Cleanup, Nothing Left',   desc: 'Chef handles all teardown and cleanup. Your vacation property is spotless when they leave. You keep the memories.' },
    ],
  },
  // Theme 4 — Columbia Midlands
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
  // Theme 5 — SC Suburban
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
]

// ── Section variants ──────────────────────────────────────────────────────────
const SC_SECTION_VARIANTS = [
  // Theme 0 — Charleston Historic Luxury
  {
    heroPill:           'Charleston\'s Private Chef',
    experiencePill:     'The Charleston Dining Standard',
    experiencePoints:   (city) => [
      { icon: '🏛️', title: `Your ${city} Property Is the Venue`, desc: `No crowded King Street restaurants — your ${city} courtyard, vacation rental, or historic property becomes the exclusive dining room.` },
      { icon: '👨‍🍳', title: 'Private Chef, All Yours',              desc: `A certified teppanyaki chef performs exclusively for your ${city} group — perfect for bachelorette weekends and Holy City milestone occasions.` },
      { icon: '🎭', title: 'Built for Charleston Occasions',        desc: 'Bachelorette weekends, rehearsal dinners, and milestone birthdays — the experiences Charleston guests remember longest.' },
      { icon: '✨', title: 'Premium Experience, Zero Cleanup',      desc: `Premium proteins cooked live on the teppan, a full fire show for your ${city} guests, and complete cleanup when dinner is done.` },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, SC`,
    areasPill:          'Serving Greater Charleston',
    areasHeadline:      (city) => `Hibachi in ${city} and All of Greater Charleston`,
    areasIntro: [
      (city, state) => `We serve all of greater Charleston — the Peninsula, Mount Pleasant, James Island, West Ashley, Daniel Island, Summerville, Sullivan's Island, Isle of Palms, Folly Beach, and every community throughout the South Carolina Lowcountry.`,
      (city) => `Charleston dates book 3–5 weeks ahead in peak season. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Charleston Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Evening Your Group Has Been Waiting For`,
    occasionSubtext:       'Bachelorette weekends, destination birthdays, rehearsal dinners, and anniversary milestones — private hibachi is Charleston\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Charleston & Mount Pleasant Hosts Are Saying',
  },
  // Theme 1 — Upstate Corporate
  {
    heroPill:           'Upstate SC\'s Private Chef',
    experiencePill:     'Better Than Any Greenville Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏢', title: `Your ${city} Space Is the Setting`,  desc: `No reservation battles — your ${city} outdoor corporate venue or backyard becomes the setting for an exclusive private dinner.` },
      { icon: '🔥', title: '90–120 Minute Live Performance',     desc: `A certified teppanyaki chef runs the full show for your ${city} group — fire tricks, freshly cooked proteins, and live entertainment.` },
      { icon: '📍', title: 'Serving All of Upstate SC',          desc: 'Greenville, Spartanburg, Simpsonville, Greer, Mauldin, and every community in the Upstate corridor — we come to you.' },
      { icon: '🧹', title: 'No Logistics for the Host',          desc: `Full setup before the ${city} event and complete cleanup after. Your only job is enjoying the evening with your guests.` },
    ],
    experienceImage:    '/pics/hibachi-event.jpg',
    experienceImageAlt: (city) => `Corporate hibachi event in ${city}, SC`,
    areasPill:          'Serving Upstate South Carolina',
    areasHeadline:      (city) => `Hibachi in ${city} and All of Upstate SC`,
    areasIntro: [
      (city, state) => `We serve all of Upstate SC — Greenville, Spartanburg, Simpsonville, Greer, Mauldin, Taylors, Duncan, Gaffney, Fountain Inn, and every community in the Upstate corridor.`,
      (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Upstate Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Corporate or Private Dinner`,
    occasionSubtext:       'From corporate team dinners to milestone backyard celebrations, private hibachi is Upstate SC\'s most impressive private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city}, ${abbr} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Upstate SC Hosts Are Saying',
  },
  // Theme 2 — Grand Strand Vacation
  {
    heroPill:           'Grand Strand Beach Chef',
    experiencePill:     'Your Beach House Upgrade',
    experiencePoints:   (city) => [
      { icon: '🏖️', title: `Chef at Your ${city} Rental`,        desc: `No packed strip reservations — your chef brings everything needed for a full teppanyaki show to your ${city} vacation rental.` },
      { icon: '🔥', title: 'Grand Strand Deck Dinner Show',      desc: `All ${city} guests at the same outdoor table for the complete performance — fire tricks, flying shrimp, proteins cooked to order.` },
      { icon: '🎭', title: 'Fire Tricks & Live Cooking',         desc: '90–120 minutes of live teppanyaki entertainment — the volcano, the flaming grill, every plate cooked fresh in front of your guests.' },
      { icon: '🏠', title: 'Rental Stays Immaculate',            desc: `Full setup and complete pack-out included. Your ${city} vacation rental looks exactly as it did when the chef arrived.` },
    ],
    experienceImage:    '/pics/hibachi-virginia-beach.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} SC vacation rental`,
    areasPill:          'Serving The Grand Strand',
    areasHeadline:      (city) => `Mobile Hibachi at Your ${city} Rental`,
    areasIntro: [
      (city, state) => `We serve the full Grand Strand — Myrtle Beach, North Myrtle Beach, Surfside Beach, Murrells Inlet, Garden City Beach, Conway, Pawleys Island, and every community along the SC coast.`,
      (city) => `Grand Strand summer dates fill weeks in advance. Call or text (201) 565-3878 to confirm your ${city} booking now.`,
    ],
    areasButton:           'Check Beach Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       'Bachelor weekends, bachelorette house rentals, birthday trips, and family vacation group dinners — private hibachi is the Grand Strand\'s most memorable beach dining experience',
    faqPill:               'Beach Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Beach Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Grand Strand Vacation Guests Are Saying',
  },
  // Theme 3 — Lowcountry Coastal
  {
    heroPill:           'Lowcountry Private Chef',
    experiencePill:     'The Dinner of the Trip',
    experiencePoints:   (city) => [
      { icon: '🏌️', title: `Chef at Your ${city} Property`,      desc: `A certified private hibachi chef comes to your ${city} golf villa, vacation rental, or Lowcountry estate — no logistics to manage.` },
      { icon: '🥩', title: 'Lowcountry Premium Proteins',        desc: `Choose your proteins — chicken, steak, shrimp, salmon, filet mignon, lobster tail — all cooked live on the teppan at your ${city} property.` },
      { icon: '👥', title: 'Scales from 8 to 60 Guests',        desc: `Intimate ${city} golf retreat dinners of 8–20 or larger family gatherings up to 60 — stations sized to your exact guest count.` },
      { icon: '✨', title: 'Nothing for You to Manage',          desc: 'Flawless setup, full service throughout, and complete cleanup. You enjoy the Lowcountry evening; we handle everything else.' },
    ],
    experienceImage:    '/pics/hibachi-colorado.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} SC Lowcountry property`,
    areasPill:          'Serving The Lowcountry',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Surrounding Lowcountry`,
    areasIntro: [
      (city, state) => `We serve all of the South Carolina Lowcountry — Hilton Head Island, Bluffton, Beaufort, Pawleys Island, Hardeeville, Georgetown, Murrells Inlet, and every plantation community and coastal property along the SC coast.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Lowcountry events fill fast in season — don't wait.`,
    ],
    areasButton:           'Reserve Your Lowcountry Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Dinner Everyone Talks About`,
    occasionSubtext:       'Golf vacation dinners, Lowcountry family reunions, anniversary getaways, and luxury corporate retreats — private hibachi is what elevates a great Lowcountry weekend into a lasting memory',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Lowcountry & Hilton Head Hosts Are Saying',
  },
  // Theme 4 — Columbia Midlands
  {
    heroPill:           'Columbia\'s Family Chef',
    experiencePill:     'Every Generation at the Grill',
    experiencePoints:   (city) => [
      { icon: '👥', title: `Two Stations for ${city} Graduates`,  desc: `Two chef stations for ${city} USC graduation groups of 25–60+ — faster service and twice the performance energy for the celebration.` },
      { icon: '👨‍👩‍👧‍👦', title: 'Every Generation at the Grill',    desc: `Kids, parents, and grandparents in ${city} all gathered at the same teppan — multi-generational appeal that few dining formats can match.` },
      { icon: '🔥', title: 'No Columbia Restaurant Logistics',   desc: 'Fresh proteins cooked live, a full teppanyaki performance at your backyard — no reservations, parking, or rushed group tables.' },
      { icon: '🧹', title: 'Everything Fully Covered',            desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except enjoy the Midlands evening.' },
    ],
    experienceImage:    '/pics/hibachi-catering-2.jpg',
    experienceImageAlt: (city) => `Family hibachi celebration in ${city}, SC`,
    areasPill:          'Serving Columbia & The Midlands',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of the Midlands`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the South Carolina Midlands — Columbia, Lexington, Irmo, Chapin, West Columbia, Camden, Rock Hill, and every community throughout the greater Midlands region.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Most large-group events are confirmed within a day.`,
    ],
    areasButton:           'Book Your Family Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Family Celebration`,
    occasionSubtext:       'USC graduation parties, multigenerational family dinners, and milestone events — Midlands families celebrate big, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Columbia & Midlands Hosts Are Saying',
  },
  // Theme 5 — SC Suburban
  {
    heroPill:           'Charleston Area\'s Family Chef',
    experiencePill:     'Better Than Any Local Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Your ${city} Backyard Is the Venue`, desc: `No reservation required — your ${city} backyard becomes an exclusive private dining room for your neighborhood and family guests.` },
      { icon: '🔥', title: 'One Chef, One Shared Moment',         desc: 'Every guest at the same grill, the same chef, the same experience — the shared format is what makes backyard hibachi unforgettable.' },
      { icon: '⏱️', title: '90–120 Minute Performance',           desc: `A certified teppanyaki chef runs the complete show at your ${city} property, keeping every guest entertained from first flame to last plate.` },
      { icon: '🧹', title: 'We Arrive, We Leave Spotless',        desc: 'Your chef arrives early, sets up completely, and packs out after dinner. You host the best backyard event of the season.' },
    ],
    experienceImage:    '/pics/backyard-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} SC backyard event`,
    areasPill:          'Serving Greater Charleston Suburbs',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the greater Charleston area — Goose Creek, Ladson, North Charleston, Moncks Corner, Hanahan, James Island, West Ashley, and every community in the greater Lowcountry.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From graduation parties to neighborhood gatherings, private hibachi is the greater Charleston suburb backyard upgrade you\'ve been waiting for',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Greater Charleston Suburb Hosts Are Saying',
  },
]

// ── City experience image map ──────────────────────────────────────────────────
const SC_CITY_IMAGE_MAP = {
  // Theme 0 — Charleston Historic Luxury
  'charleston':          { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Private hibachi chef at an event in ${city}, SC` },
  'mount-pleasant':      { src: '/pics/hibachi-chef-home.jpg',    alt: (city) => `Private hibachi chef in ${city}, SC` },
  // Theme 1 — Upstate Corporate
  'greenville':          { src: '/pics/hibachi-event.jpg',        alt: (city) => `Corporate hibachi event in ${city}, SC` },
  'spartanburg':         { src: '/pics/hibachi-shot-1.jpg',       alt: (city) => `Private hibachi chef in ${city}, SC` },
  'simpsonville':        { src: '/pics/hibachi-shot-2.jpg',       alt: (city) => `Backyard hibachi party in ${city}, SC` },
  // Theme 2 — Grand Strand Vacation
  'myrtle-beach':        { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Mobile hibachi chef at a ${city} SC vacation rental` },
  'north-myrtle-beach':  { src: '/pics/hibachi-photo-2.jpg',      alt: (city) => `Beach house hibachi event in ${city}, SC` },
  // Theme 3 — Lowcountry Coastal
  'hilton-head-island':  { src: '/pics/hibachi-catering-3.jpg',   alt: (city) => `Private hibachi chef at a ${city} SC Lowcountry event` },
  'bluffton':            { src: '/pics/hibachi-pic-3.jpg',         alt: (city) => `Private hibachi dinner in ${city}, SC` },
  'pawleys-island':      { src: '/pics/mobile-hibachi-2.jpg',     alt: (city) => `Private hibachi chef at a ${city} SC vacation property` },
  // Theme 4 — Columbia Midlands
  'columbia':            { src: '/pics/hibachi-austin-home.jpg',  alt: (city) => `Graduation hibachi party in ${city}, SC` },
  'lexington':           { src: '/pics/backyard-hibachi-2.jpg',   alt: (city) => `Backyard hibachi event in ${city}, SC` },
  'rock-hill':           { src: '/pics/hibachi-dallas-home.jpg',  alt: (city) => `Private hibachi chef in ${city}, SC` },
  // Theme 5 — SC Suburban
  'summerville':         { src: '/pics/backyard-hibachi.jpg',     alt: (city) => `Backyard hibachi graduation party in ${city}, SC` },
}

// ── Support images ────────────────────────────────────────────────────────────
const SC_SUPPORT_IMAGES = {
  // Theme 0 — Charleston Historic Luxury
  'charleston': {
    testimonial: { src: '/pics/private-hibachi.jpg',       alt: () => `Private hibachi chef at a Charleston SC historic home`,    caption: 'Charleston private dining',          intro: () => `Charleston hosts set the standard. Here's what they find:` },
    cta:         { src: '/pics/hibachi-event.jpg',          alt: () => `Private hibachi chef setting up in Charleston, SC`,        caption: 'Your Charleston evening starts here' },
  },
  'mount-pleasant': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',    alt: () => `Private hibachi dinner in Mount Pleasant, SC`,             caption: 'Mount Pleasant private dining',       intro: () => `Mount Pleasant hosts keep coming back. Here's what they say:` },
    cta:         { src: '/pics/backyard-hibachi-3.jpg',     alt: () => `Private hibachi chef in Mount Pleasant, SC`,               caption: 'Your Mount Pleasant event, elevated' },
  },
  // Theme 1 — Upstate Corporate
  'greenville': {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',    alt: () => `Corporate hibachi event in Greenville, SC`,               caption: 'Greenville corporate dining events',  intro: () => `Greenville businesses keep booking us. Here's what they say:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',      alt: () => `Private hibachi chef in Greenville, SC`,                   caption: 'Greenville\'s corporate dining standard' },
  },
  'spartanburg': {
    testimonial: { src: '/pics/backyard-hibachi-2.jpg',    alt: () => `Backyard hibachi party in Spartanburg, SC`,               caption: 'Spartanburg backyard celebrations',   intro: () => `Spartanburg families say it best:` },
    cta:         { src: '/pics/hibachi-event.jpg',          alt: () => `Private hibachi chef at a Spartanburg SC event`,           caption: 'Your Spartanburg celebration' },
  },
  'simpsonville': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',    alt: () => `Backyard hibachi party in Simpsonville, SC`,              caption: 'Simpsonville backyard celebrations',  intro: () => `Simpsonville families keep booking us. Here's why:` },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',     alt: () => `Private hibachi chef at a Simpsonville SC event`,          caption: 'Your Simpsonville backyard, upgraded' },
  },
  // Theme 2 — Grand Strand Vacation
  'myrtle-beach': {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',       alt: () => `Bachelorette hibachi at a Myrtle Beach SC rental`,        caption: 'Myrtle Beach vacation rental hibachi', intro: () => `Myrtle Beach guests come back every season. Here's why:` },
    cta:         { src: '/pics/hibachi-austin-home.jpg',    alt: () => `Mobile hibachi chef in Myrtle Beach, SC`,                  caption: 'The Myrtle Beach dinner of the trip' },
  },
  'north-myrtle-beach': {
    testimonial: { src: '/pics/hibachi-austin-2.jpg',      alt: () => `Birthday hibachi at a North Myrtle Beach SC rental`,      caption: 'North Myrtle Beach vacation hibachi',  intro: () => `North Myrtle Beach groups say it best:` },
    cta:         { src: '/pics/hibachi-virginia-beach.jpg', alt: () => `Mobile hibachi chef in North Myrtle Beach, SC`,            caption: 'The Grand Strand dinner of the trip' },
  },
  // Theme 3 — Lowcountry Coastal
  'hilton-head-island': {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',   alt: () => `Golf group hibachi at a Hilton Head Island SC plantation`, caption: 'Hilton Head golf vacation dining',    intro: () => `Hilton Head golf groups keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-catering.jpg',       alt: () => `Private hibachi chef in Hilton Head Island, SC`,           caption: 'The Hilton Head dinner of the trip' },
  },
  'bluffton': {
    testimonial: { src: '/pics/private-hibachi.jpg',       alt: () => `Private hibachi dinner in Bluffton, SC`,                  caption: 'Bluffton private dining events',      intro: () => `Bluffton hosts set the standard. Here's what they find:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',     alt: () => `Private hibachi chef in Bluffton, SC`,                    caption: 'The Bluffton Lowcountry dining standard' },
  },
  'pawleys-island': {
    testimonial: { src: '/pics/hibachi-austin-home.jpg',   alt: () => `Private hibachi at a Pawleys Island SC beach house`,      caption: 'Pawleys Island vacation home hibachi', intro: () => `Pawleys Island hosts keep coming back every season. Here's why:` },
    cta:         { src: '/pics/hibachi-catering.jpg',       alt: () => `Private hibachi chef in Pawleys Island, SC`,               caption: 'The Pawleys Island coastal dinner' },
  },
  // Theme 4 — Columbia Midlands
  'columbia': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',    alt: () => `USC graduation hibachi party in Columbia, SC`,            caption: 'Columbia graduation season',          intro: () => `Columbia families and USC hosts keep coming back. Here's why:` },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',     alt: () => `Private hibachi chef at a Columbia SC event`,              caption: 'Columbia\'s backyard party standard' },
  },
  'lexington': {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',   alt: () => `Backyard graduation party in Lexington, SC`,              caption: 'Lexington graduation celebrations',   intro: () => `Lexington families know how to celebrate. Here's what they say:` },
    cta:         { src: '/pics/backyard-hibachi.jpg',       alt: () => `Backyard hibachi chef in Lexington, SC`,                   caption: 'Lexington\'s backyard party standard' },
  },
  'rock-hill': {
    testimonial: { src: '/pics/hibachi-shot-2.jpg',        alt: () => `Private hibachi dinner in Rock Hill, SC`,                 caption: 'Rock Hill private dining events',     intro: () => `Rock Hill hosts say it best:` },
    cta:         { src: '/pics/hibachi-catering-2.jpg',     alt: () => `Private hibachi chef in Rock Hill, SC`,                   caption: 'Your Rock Hill celebration' },
  },
  // Theme 5 — SC Suburban
  'summerville': {
    testimonial: { src: '/pics/hibachi-catering.jpg',      alt: () => `Graduation hibachi party in Summerville, SC`,             caption: 'Summerville graduation season',       intro: () => `Summerville families celebrate big. Here's what they say:` },
    cta:         { src: '/pics/backyard-hibachi-3.jpg',     alt: () => `Backyard hibachi chef in Summerville, SC`,                caption: 'Your Summerville backyard, upgraded' },
  },
}

// ── Support fallbacks (per theme) ─────────────────────────────────────────────
const SC_SUPPORT_FALLBACKS = [
  // Theme 0 — Charleston Historic Luxury
  {
    testimonial: { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Private hibachi event in ${city}, SC`,                caption: 'Charleston area hosts agree',         intro: (city) => `${city} hosts keep booking us. Here's what they say:` },
    cta:         { src: '/pics/hibachi-event.jpg',          alt: (city) => `Private hibachi chef in ${city}, SC`,                 caption: 'Your private Charleston evening' },
  },
  // Theme 1 — Upstate Corporate
  {
    testimonial: { src: '/pics/hibachi-event.jpg',         alt: (city) => `Corporate hibachi event in ${city}, SC`,              caption: 'Upstate SC hosts agree',              intro: (city) => `${city} hosts say it best:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Private hibachi chef in ${city}, SC`,                 caption: 'Your Upstate SC event, elevated' },
  },
  // Theme 2 — Grand Strand Vacation
  {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Beach house hibachi in ${city}, SC`,                 caption: 'Grand Strand guests agree',           intro: (city) => `${city} summer guests keep booking us. Here's why:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',        alt: (city) => `Mobile hibachi chef in ${city}, SC`,                  caption: 'The Grand Strand dinner upgrade' },
  },
  // Theme 3 — Lowcountry Coastal
  {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',    alt: (city) => `Vacation rental hibachi in ${city}, SC`,              caption: 'Lowcountry hosts agree',              intro: (city) => `${city} vacation guests keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Private hibachi chef in ${city}, SC`,                 caption: 'The Lowcountry coastal dinner' },
  },
  // Theme 4 — Columbia Midlands
  {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',    alt: (city) => `Family hibachi gathering in ${city}, SC`,             caption: 'Midlands families celebrate',         intro: (city) => `${city} families know how to celebrate. Here's what they say:` },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',     alt: (city) => `Private hibachi chef in ${city}, SC`,                 caption: 'Your Midlands celebration, elevated' },
  },
  // Theme 5 — SC Suburban
  {
    testimonial: { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Backyard hibachi event in ${city}, SC`,               caption: 'Greater Charleston hosts agree',      intro: (city) => `${city} hosts say it best:` },
    cta:         { src: '/pics/backyard-hibachi-3.jpg',     alt: (city) => `Private hibachi chef in ${city}, SC`,                 caption: 'Your backyard, upgraded' },
  },
]

// ── Blog posts ────────────────────────────────────────────────────────────────
const SC_BLOG_POSTS = [
  // Theme 0 — Charleston Historic Luxury
  [
    { slug: 'hibachi-bachelorette-party',       title: 'Why Hibachi Is the Perfect Bachelorette Party Idea' },
    { slug: 'hibachi-at-home-vs-restaurant',    title: 'Hibachi at Home vs. Restaurant: Which Is Better?' },
    { slug: 'what-to-expect-hibachi-chef-home', title: 'What to Expect When You Book a Private Hibachi Chef' },
  ],
  // Theme 1 — Upstate Corporate
  [
    { slug: 'hibachi-catering-corporate-events', title: 'Hibachi Catering for Corporate Events' },
    { slug: 'how-much-does-private-hibachi-cost', title: 'How Much Does Private Hibachi Cost?' },
    { slug: 'hibachi-at-home-vs-restaurant',    title: 'Hibachi at Home vs. Restaurant: Which Is Better?' },
  ],
  // Theme 2 — Grand Strand Vacation
  [
    { slug: 'hibachi-bachelorette-party',        title: 'Why Hibachi Is the Perfect Bachelorette Party Idea' },
    { slug: 'hibachi-birthday-party-ideas',      title: 'Hibachi Birthday Party Ideas' },
    { slug: 'how-much-does-private-hibachi-cost', title: 'How Much Does Private Hibachi Cost?' },
  ],
  // Theme 3 — Lowcountry Coastal
  [
    { slug: 'what-to-expect-hibachi-chef-home',  title: 'What to Expect When You Book a Private Hibachi Chef' },
    { slug: 'hibachi-menu-proteins-guide',       title: 'The Complete Hibachi Menu & Proteins Guide' },
    { slug: 'indoor-vs-outdoor-hibachi',         title: 'Indoor vs. Outdoor Hibachi: What You Need to Know' },
  ],
  // Theme 4 — Columbia Midlands
  [
    { slug: 'why-families-choose-hibachi-at-home', title: 'Why Families Choose Hibachi at Home' },
    { slug: 'hibachi-birthday-party-ideas',      title: 'Hibachi Birthday Party Ideas' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party' },
  ],
  // Theme 5 — SC Suburban
  [
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party' },
    { slug: 'why-families-choose-hibachi-at-home',  title: 'Why Families Choose Hibachi at Home' },
    { slug: 'is-hibachi-at-home-healthy-nutrition-breakdown', title: 'Is Hibachi at Home Healthy?' },
  ],
]

// ── Major cities map ──────────────────────────────────────────────────────────
const SC_MAJOR_CITIES = {
  // ── Theme 0 — Charleston Historic Luxury ─────────────────────────────────────
  'charleston':          { v: 0, profileIdx: 0,  nearby: ['Mount Pleasant', 'Summerville', 'James Island', 'Sullivan\'s Island', 'Folly Beach'] },
  'mount-pleasant':      { v: 0, profileIdx: 1,  nearby: ['Charleston', 'Sullivan\'s Island', 'Isle of Palms', 'Summerville', 'Daniel Island'] },
  // ── Theme 1 — Upstate Corporate ──────────────────────────────────────────────
  'greenville':          { v: 1, profileIdx: 5,  nearby: ['Spartanburg', 'Simpsonville', 'Greer', 'Mauldin', 'Taylors'] },
  'spartanburg':         { v: 1, profileIdx: 9,  nearby: ['Greenville', 'Simpsonville', 'Gaffney', 'Duncan', 'Greer'] },
  'simpsonville':        { v: 1, profileIdx: 13, nearby: ['Greenville', 'Mauldin', 'Greer', 'Fountain Inn', 'Spartanburg'] },
  // ── Theme 2 — Grand Strand Vacation ──────────────────────────────────────────
  'myrtle-beach':        { v: 2, profileIdx: 2,  nearby: ['North Myrtle Beach', 'Pawleys Island', 'Conway', 'Surfside Beach', 'Murrells Inlet'] },
  'north-myrtle-beach':  { v: 2, profileIdx: 8,  nearby: ['Myrtle Beach', 'Little River', 'Loris', 'Conway', 'Pawleys Island'] },
  // ── Theme 3 — Lowcountry Coastal ─────────────────────────────────────────────
  'hilton-head-island':  { v: 3, profileIdx: 3,  nearby: ['Bluffton', 'Beaufort', 'Hardeeville', 'Pawleys Island', 'Georgetown'] },
  'bluffton':            { v: 3, profileIdx: 7,  nearby: ['Hilton Head Island', 'Beaufort', 'Hardeeville', 'Okatie', 'Savannah'] },
  'pawleys-island':      { v: 3, profileIdx: 12, nearby: ['Myrtle Beach', 'Georgetown', 'Murrells Inlet', 'Surfside Beach', 'North Myrtle Beach'] },
  // ── Theme 4 — Columbia Midlands ───────────────────────────────────────────────
  'columbia':            { v: 4, profileIdx: 4,  nearby: ['Lexington', 'Irmo', 'Chapin', 'Camden', 'West Columbia'] },
  'lexington':           { v: 4, profileIdx: 10, nearby: ['Columbia', 'West Columbia', 'Chapin', 'Batesburg-Leesville', 'Irmo'] },
  'rock-hill':           { v: 4, profileIdx: 11, nearby: ['Fort Mill', 'Lake Wylie', 'Tega Cay', 'Clover', 'York'] },
  // ── Theme 5 — SC Suburban ────────────────────────────────────────────────────
  'summerville':         { v: 5, profileIdx: 6,  nearby: ['Charleston', 'Goose Creek', 'Ladson', 'North Charleston', 'Moncks Corner'] },
}

// ── Display name overrides ────────────────────────────────────────────────────
const SC_CITY_DISPLAY_NAMES = {
  'hilton-head-island': 'Hilton Head Island',
  'north-myrtle-beach': 'North Myrtle Beach',
  'pawleys-island':     'Pawleys Island',
  'rock-hill':          'Rock Hill',
  'mount-pleasant':     'Mount Pleasant',
}

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const SC_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',   // 0  — Charleston
  'Hibachi at Home in',        // 1  — Mount Pleasant
  'Mobile Hibachi in',         // 2  — Myrtle Beach
  'Hibachi Catering in',       // 3  — Hilton Head Island
  'Hibachi at Home in',        // 4  — Columbia
  'Hibachi Catering in',       // 5  — Greenville
  'Hibachi at Home in',        // 6  — Summerville
  'Private Hibachi Chef in',   // 7  — Bluffton
  'Mobile Hibachi in',         // 8  — North Myrtle Beach
  'Hibachi at Home in',        // 9  — Spartanburg
  'Backyard Hibachi Party in', // 10 — Lexington
  'Hibachi at Home in',        // 11 — Rock Hill
  'Private Hibachi Chef in',   // 12 — Pawleys Island
  'Hibachi at Home in',        // 13 — Simpsonville
]

const SC_THEME_H1_PREFIXES = [
  'Hibachi at Home in', // v=0 Charleston Luxury generic
  'Hibachi at Home in', // v=1 Upstate Corporate generic
  'Mobile Hibachi in',  // v=2 Grand Strand generic
  'Hibachi at Home in', // v=3 Lowcountry generic
  'Hibachi at Home in', // v=4 Columbia Midlands generic
  'Hibachi at Home in', // v=5 SC Suburban generic
]

// ── Custom meta overrides ──────────────────────────────────────────────────────
const SC_CUSTOM_META = {
  'charleston': {
    title: 'Private Hibachi Chef in Charleston, SC | Historic Homes & Event Venues | Hibachi Connect',
    desc:  'A certified private hibachi chef for your Charleston home, vacation rental, or event venue. Bachelorette weekends, destination birthdays, rehearsal dinners. From $60/adult. Serving all of greater Charleston, SC.',
  },
  'myrtle-beach': {
    title: 'Mobile Hibachi in Myrtle Beach, SC | Beach House & Vacation Rental Chef | Hibachi Connect',
    desc:  'A certified mobile hibachi chef comes to your Myrtle Beach vacation rental. No packed restaurant reservations — full setup, live show, complete cleanup. From $60/adult. Book your Grand Strand date now.',
  },
  'hilton-head-island': {
    title: 'Hibachi Catering in Hilton Head Island, SC | Golf Vacation & Luxury Events | Hibachi Connect',
    desc:  'Book hibachi catering for your Hilton Head Island golf vacation, family reunion, or luxury event. Certified teppanyaki chef, full setup & cleanup. From $60/adult. Serving Hilton Head and the Lowcountry.',
  },
  'greenville': {
    title: 'Hibachi Catering in Greenville, SC | Corporate & Private Events | Hibachi Connect',
    desc:  'Book hibachi catering for your Greenville corporate dinner, client event, or private gathering. Certified teppanyaki chef, full setup & cleanup. From $60/adult. Serving all of Upstate South Carolina.',
  },
  'bluffton': {
    title: 'Private Hibachi Chef in Bluffton, SC | Lowcountry Estate Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Bluffton home, plantation community, or vacation rental. Premium proteins, live teppanyaki, complete cleanup. From $60/adult. Serving Bluffton and Hilton Head Island.',
  },
  'north-myrtle-beach': {
    title: 'Mobile Hibachi in North Myrtle Beach, SC | Beach Rental & Vacation Chef | Hibachi Connect',
    desc:  'A certified mobile hibachi chef comes to your North Myrtle Beach vacation rental or beach house. Full setup, live show, complete cleanup. From $60/adult. Book your Grand Strand date now.',
  },
  'lexington': {
    title: 'Backyard Hibachi Party in Lexington, SC | Private Teppanyaki at Home | Hibachi Connect',
    desc:  'Book a backyard hibachi party in Lexington, SC. Certified teppanyaki chef, fresh proteins, full setup & cleanup. Perfect for graduation parties and family gatherings. From $60/adult.',
  },
  'pawleys-island': {
    title: 'Private Hibachi Chef in Pawleys Island, SC | Coastal Vacation Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Pawleys Island vacation property or beach home. Premium proteins, live teppanyaki performance, complete cleanup. From $60/adult. Serving Pawleys Island and the Grand Strand.',
  },
}

// ── Generic closing variants (SC 169–174) ────────────────────────────────────
export const SC_CLOSING_VARIANTS = [
  // 169 — Charleston Historic Luxury
  {
    headline: (city) => `Your ${city} Event Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Charleston spring and fall weekends fill 3–5 weeks out. Check your date now.`,
  },
  // 170 — Upstate Corporate
  {
    headline: (city) => `${city}'s Best Private Dinner — Book It`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `Upstate SC weekends book 2–3 weeks ahead. Secure your date now.`,
  },
  // 171 — Grand Strand Vacation
  {
    headline: (city) => `The Beach House Dinner Everyone Remembers`,
    sub:      (city) => `A mobile hibachi chef comes to your ${city} rental — grill, ingredients, full show, and complete cleanup. From $60 per adult.`,
    urgency:  `Grand Strand summer season books fast — confirm your date 6–8 weeks ahead.`,
  },
  // 172 — Lowcountry Coastal
  {
    headline: (city) => `The Lowcountry Dinner Your ${city} Weekend Needed`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} vacation property. Full setup, premium proteins, complete cleanup. From $60 per adult.`,
    urgency:  `Lowcountry peak season fills fast. Reserve your date now.`,
  },
  // 173 — Columbia Midlands
  {
    headline: (city) => `${city}'s Most Memorable Celebration — Book Yours`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  'USC graduation season books early — confirm your South Carolina date now.',
  },
  // 174 — SC Suburban
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Book It`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `Greater Charleston weekends book 2–4 weeks ahead. Secure your date now.`,
  },
]

// ── City-specific closings (SC 175–188) ──────────────────────────────────────
// Batch 1: indices 0–4 (profileIdx 0–4: Charleston, Mount Pleasant, Myrtle Beach, Hilton Head, Columbia)
// Batch 2: indices 5–9 (profileIdx 5–9: Greenville, Summerville, Bluffton, North Myrtle Beach, Spartanburg)
export const SC_CITY_CLOSINGS = [
  // 175 — Charleston (profileIdx 0)
  {
    headline: (city) => `Charleston's Private Dining Standard — Book It`,
    sub:      (city) => `A certified teppanyaki chef for your Charleston historic home, vacation rental, or waterfront property. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Charleston spring and fall weekends book 3–5 weeks out. Bachelorette and wedding-related events fill even faster. Confirm your date now.`,
  },
  // 176 — Mount Pleasant (profileIdx 1)
  {
    headline: (city) => `Mount Pleasant's Most Memorable Backyard Dinner — Book Yours`,
    sub:      (city) => `A certified hibachi chef at your Mount Pleasant home or Shem Creek-area property. All proteins, full show, complete cleanup. From $60/adult.`,
    urgency:  `Mount Pleasant weekend evenings book 2–4 weeks ahead. Graduation season and fall fill fastest. Reserve your date now.`,
  },
  // 177 — Myrtle Beach (profileIdx 2)
  {
    headline: (city) => `The Myrtle Beach Dinner Your Group Has Been Waiting For`,
    sub:      (city) => `A certified hibachi chef at your Myrtle Beach vacation rental — grill, ingredients, full show, complete cleanup. From $60/adult.`,
    urgency:  `Myrtle Beach summer dates fill 6–8 weeks out. Reserve yours now before the season fills.`,
  },
  // 178 — Hilton Head Island (profileIdx 3)
  {
    headline: (city) => `The Hilton Head Dinner Everyone Talks About — Book It`,
    sub:      (city) => `A certified teppanyaki chef at your Hilton Head plantation villa or vacation property. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Hilton Head golf season and summer fill fast. Reserve your Lowcountry date now.`,
  },
  // 179 — Columbia (profileIdx 4)
  {
    headline: (city) => `Columbia Graduation Season — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef comes to your Columbia home or outdoor venue. All ingredients, live performance, full cleanup. From $60/adult.`,
    urgency:  `Columbia graduation season (May) fills fast. Check your date now.`,
  },
  // 180 — Greenville (profileIdx 5)
  {
    headline: (city) => `Greenville's Corporate Dining Standard — Book It`,
    sub:      (city) => `A certified teppanyaki chef for your Greenville corporate event or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Greenville corporate and weekend events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 181 — Summerville (profileIdx 6)
  {
    headline: (city) => `Summerville's Best Backyard Dinner — Book Yours`,
    sub:      (city) => `A certified hibachi chef at your Summerville home. All proteins, full show, complete cleanup. From $60/adult.`,
    urgency:  `Summerville graduation and summer weekends book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 182 — Bluffton (profileIdx 7)
  {
    headline: (city) => `Bluffton's Private Dining Standard — Reserve Your Chef`,
    sub:      (city) => `A certified teppanyaki chef at your Bluffton home, plantation community, or Sun City property. Premium ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Bluffton private events book quickly. Reserve your date well in advance.`,
  },
  // 183 — North Myrtle Beach (profileIdx 8)
  {
    headline: (city) => `Your North Myrtle Beach Weekend Just Found Its Best Night`,
    sub:      (city) => `A certified mobile hibachi chef at your North Myrtle Beach rental. Full setup, full show, complete cleanup. From $60/adult.`,
    urgency:  `North Myrtle Beach summer weekends fill 6–8 weeks out. Check availability now.`,
  },
  // 184 — Spartanburg (profileIdx 9)
  {
    headline: (city) => `Spartanburg's Best Backyard Party — Book Yours`,
    sub:      (city) => `A certified hibachi chef comes to your Spartanburg property. All ingredients, full live performance, complete cleanup. From $60/adult.`,
    urgency:  `Spartanburg weekend slots fill 2–3 weeks out. Check your date now.`,
  },
  // 185 — Lexington (profileIdx 10)
  {
    headline: (city) => `Lexington's Best Backyard Party — Book Yours`,
    sub:      (city) => `A certified hibachi chef comes to your Lexington backyard. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Lexington graduation and summer weekends fill quickly. Check your date now.`,
  },
  // 186 — Rock Hill (profileIdx 11)
  {
    headline: (city) => `Rock Hill's Best Backyard Celebration — Book Yours`,
    sub:      (city) => `A certified hibachi chef at your Rock Hill home. All ingredients, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Rock Hill weekend slots fill 2–3 weeks out. Check your date now.`,
  },
  // 187 — Pawleys Island (profileIdx 12)
  {
    headline: (city) => `The Pawleys Island Dinner Everyone Remembers`,
    sub:      (city) => `A certified hibachi chef at your Pawleys Island beach house or vacation rental. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Pawleys Island summer dates fill fast. Book your coastal dinner now.`,
  },
  // 188 — Simpsonville (profileIdx 13)
  {
    headline: (city) => `Simpsonville's Backyard Party Standard — Book It`,
    sub:      (city) => `A certified hibachi chef at your Simpsonville home. All proteins, full show, complete cleanup. From $60/adult.`,
    urgency:  `Simpsonville graduation and summer weekends book 2–3 weeks ahead. Confirm your date.`,
  },
]

// ── Generic intro variants (SC 169–174) ───────────────────────────────────────
export const SC_INTRO_VARIANTS = [
  // 169 — Charleston Historic Luxury
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for the Greater Charleston Area`,
    opening:  (city, state) =>
      `Charleston runs on occasion. The Battery dinners, the Sullivan's Island beach house weekends, the rooftop gatherings before a wedding, the bachelorette groups that flew in from three cities to spend the weekend in the Holy City — they all came for an experience worth the trip. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with everything included: the full setup, all fresh ingredients, and a live-fire cooking performance that turns any Charleston gathering into the evening your guests are still talking about on the flight home.`,
    middle:   (city, state) =>
      `Your chef arrives with a propane teppan grill, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events up to 60+. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} spring and fall events book 3–5 weeks out during peak season. Bachelorette weekends and wedding-related events fill even faster. Starting at $60 per adult, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of greater Charleston.`,
  },
  // 170 — Upstate Corporate
  {
    headline: (city) => `Hibachi at Home in ${city}: The Upstate SC Corporate Dining Upgrade`,
    opening:  (city, state) =>
      `Greenville and Spartanburg have built something real over the past twenty years — the BMW plant, the Michelin headquarters, the healthcare systems, the professional services firms, the residential growth that follows all of it. The Upstate has its own standard now, and the people who entertain here know it. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space — corporate venue, private home, or backyard — with everything included and a live-fire performance that makes any gathering the event your team is still talking about at the next one.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done. Your venue or property stays spotless.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out during peak season. Graduation parties and corporate holiday events book fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day. Serving ${city} and all of Upstate South Carolina.`,
  },
  // 171 — Grand Strand Vacation
  {
    headline: (city) => `Mobile Hibachi in ${city}: The Beach House Dinner Your Group Has Been Waiting For`,
    opening:  (city, state) =>
      `You have the beach house. You have the group. You planned the trip down to the last detail — and the best dinner of the weekend is the one nobody had to book a reservation for on the main strip. Mobile hibachi at your ${city} rental brings a certified teppanyaki chef directly to your property. The full grill, all ingredients, a live-fire performance built around your guests, and complete cleanup when dinner is done.`,
    middle:   (city, state) =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The show runs from first flame to last plate — no Grand Strand restaurant logistics, no group car coordination, no waiting for a table that was never big enough anyway. Every guest at the same outdoor table watching the same performance.`,
    closing:  (city, state) =>
      `Grand Strand summer events book 6–8 weeks in advance for peak season dates. Starting at $60 per adult, $600 event minimum. Confirm outdoor open-flame cooking is permitted at your rental before booking — most SC beach properties allow it.`,
  },
  // 172 — Lowcountry Coastal
  {
    headline: (city) => `Hibachi at Home in ${city}: The Coastal Dinner Your Lowcountry Weekend Deserves`,
    opening:  (city, state) =>
      `People come to the ${city} area for the marsh views, the golf, the unhurried pace of a place that knows how to make an evening last. Private hibachi at your ${city} vacation villa or coastal property makes the best night of the trip happen at the property — a certified teppanyaki chef drives to your house with the full setup, cooks on your deck or patio in front of everyone, and leaves the space spotless. No crowded restaurant. No driving. No wait.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The live cooking performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your property is immaculate when the chef leaves.`,
    closing:  (city, state) =>
      `Lowcountry events book 3–6 weeks ahead in peak golf and vacation season. Starting at $60 per adult, $600 event minimum. Most quotes returned same day. Travel fees may apply for remote locations — always disclosed upfront.`,
  },
  // 173 — Columbia Midlands
  {
    headline: (city) => `Hibachi at Home in ${city}: The Backyard Party the Midlands Was Made For`,
    opening:  (city, state) =>
      `${city} knows how to celebrate. The backyard culture runs through every season — graduation parties in May, birthday milestones through summer, family reunions that bring everyone back under the same roof. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup: propane grill, all proteins, and a live-fire cooking performance that turns any backyard gathering into the evening your guests still reference at the next family event.`,
    middle:   (city, state) =>
      `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for USC graduation parties, family reunions, and large backyard celebrations are our most common format across the Midlands.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out during peak season. USC graduation season (May) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 174 — SC Suburban
  {
    headline: (city) => `Hibachi at Home in ${city}: When Your Backyard Becomes the Best Table in Town`,
    opening:  (city, state) =>
      `You've put the work into the outdoor space. The patio, the yard, the neighborhood that finally lives up to what you'd imagined when you moved here. Now give it the event it deserves. Private hibachi at home in ${city} brings a certified teppanyaki chef directly to your property — the full grill, all ingredients, the live cooking performance, and total cleanup. Your guests will be talking about this dinner through next season.`,
    middle:   (city, state) =>
      `From the first onion volcano to the final plate of fried rice, your chef works the crowd for 90–120 minutes straight. Every protein cooked to order at the grill: chicken, steak, shrimp, salmon, and premium upgrades like filet mignon or lobster tail. Choose two proteins per guest at the standard rate or mix and match across the group.`,
    closing:  (city, state) =>
      `${city} weekend evenings book 2–4 weeks ahead. Graduation parties, neighborhood gatherings, anniversary dinners, and milestone celebrations are our most common bookings across the greater Charleston suburbs. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
]

// ── City-specific intros (SC 175–188) ─────────────────────────────────────────
// Batch 1: indices 0–4 (profileIdx 0–4: Charleston, Mount Pleasant, Myrtle Beach, Hilton Head, Columbia)
// Batch 2: indices 5–9 (profileIdx 5–9: Greenville, Summerville, Bluffton, North Myrtle Beach, Spartanburg)
export const SC_CITY_INTROS = [
  // 175 — Charleston (profileIdx 0)
  {
    headline: () => `Private Hibachi Chef in Charleston`,
    opening:  () =>
      `Charleston is the crown jewel of the South — the Battery, the Rainbow Row townhouses, the Intracoastal estates, the historic Peninsula neighborhoods that have set the architectural and cultural standard for the entire region for three centuries. It is also, without question, the bachelorette capital of the Eastern Seaboard: the house rentals on Sullivan's Island, the Airbnbs in the Cannonborough-Elliotborough district, the waterfront properties in Mount Pleasant where groups of twelve fly in from four cities specifically for the weekend. Private hibachi in Charleston brings a certified teppanyaki chef to your outdoor space — whether that's a King Street rooftop, a historic home patio on the Peninsula, a Sullivan's Island rental deck, or a Daniel Island backyard — with the full setup and a live cooking performance that earns its place at a Charleston evening.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Premium proteins including filet mignon, lobster tail, and scallops are available for any Charleston occasion that calls for it. Full cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Charleston spring and fall events book 3–5 weeks out. Bachelorette weekends, rehearsal dinners, and wedding pre-events fill fastest — reserve 6–8 weeks ahead for any high-season Friday or Saturday. Serving Charleston and all of greater Charleston — Mount Pleasant, James Island, Daniel Island, Sullivan's Island, Isle of Palms, Folly Beach, and the surrounding Lowcountry. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 176 — Mount Pleasant (profileIdx 1)
  {
    headline: () => `Hibachi at Home in Mount Pleasant`,
    opening:  () =>
      `Mount Pleasant has quietly become one of the most sought-after residential addresses on the entire East Coast — the manicured neighborhoods off Coleman Boulevard, the Shem Creek waterfront, the affluent suburban communities tucked behind the marshes where the standard for any gathering is set by the home itself. It is a city of backyard patios built for exactly this kind of evening. Private hibachi at home in Mount Pleasant brings a certified teppanyaki chef to your property with the full setup, hand-selected proteins, and a live cooking performance that makes any occasion here the one your guests are texting about on the drive home across the bridge.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Premium protein upgrades available for any Mount Pleasant milestone. Full cleanup when dinner is done. Your patio or backyard is spotless when the chef leaves.`,
    closing:  () =>
      `Mount Pleasant weekend evenings book 2–4 weeks ahead. Graduation season (May–June) and fall events fill fastest — reserve 3–4 weeks out for Saturday events. Serving Mount Pleasant and all of greater Charleston — the Peninsula, Daniel Island, Sullivan's Island, Isle of Palms, Summerville, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 177 — Myrtle Beach (profileIdx 2)
  {
    headline: () => `Mobile Hibachi in Myrtle Beach`,
    opening:  () =>
      `Myrtle Beach draws more than twenty million visitors every year, and the people who rent the houses here — not the hotel rooms, the houses — are a different kind of traveler. The bachelorette crews who booked the place months in advance. The bachelor groups who've been planning this trip since last summer. The three-family vacation rental where the kids outnumber the adults and everyone needs a Friday night that actually delivers. Mobile hibachi at your Myrtle Beach vacation rental brings a certified teppanyaki chef directly to your property. The full setup. The live performance. No Ocean Boulevard reservation required.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, backyard, or patio. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. Full cleanup when dinner is done. Your Myrtle Beach rental stays spotless.`,
    closing:  () =>
      `Myrtle Beach summer events book 6–8 weeks ahead for peak July and August dates. Bachelor weekends, bachelorette house rentals, and vacation group dinners are our most common Myrtle Beach bookings. Serving Myrtle Beach and the full Grand Strand — North Myrtle Beach, Surfside Beach, Murrells Inlet, Garden City Beach, Conway, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 178 — Hilton Head Island (profileIdx 3)
  {
    headline: () => `Hibachi Catering in Hilton Head Island`,
    opening:  () =>
      `Hilton Head Island runs on a specific rhythm — golf mornings at Harbour Town, afternoon rounds at Palmetto Dunes, the evening question of what to do with twelve people who've been on the course all day and don't want to fight for a reservation at every crowded restaurant between the roundabout and Sea Pines Circle. Hibachi catering in Hilton Head Island brings a certified teppanyaki chef to your plantation villa, vacation rental, or private estate with the full setup and a live cooking performance that gives the entire group a reason to stay at the property for the best dinner of the trip.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For Hilton Head groups over 25, we deploy dual chef stations. Premium proteins — filet mignon, lobster tail, scallops — are available for golf vacation groups who want the full luxury treatment. Full cleanup when dinner is done.`,
    closing:  () =>
      `Hilton Head golf season (spring and fall) and summer vacation dates book 4–6 weeks ahead. Golf vacation group dinners, family reunions, corporate retreats, and luxury occasion dinners are our most common Hilton Head bookings. Serving Hilton Head Island and all of the South Carolina Lowcountry — Bluffton, Beaufort, Hardeeville, Pawleys Island, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available.`,
  },
  // 179 — Columbia (profileIdx 4)
  {
    headline: () => `Hibachi at Home in Columbia`,
    opening:  () =>
      `Columbia has two speeds — state capital mode and USC graduation mode — and both of them involve backyard events. The government professionals who host client dinners on their Lake Murray properties. The families who drive in from Greenville, Charleston, and Charlotte in May to watch their son or daughter walk across the Williams-Brice stadium stage. The graduation parties that start at noon and run until the neighbors come over to watch the fire tricks. Private hibachi at home in Columbia brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that makes any Midlands celebration the one your guests plan around.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Columbia graduation events over 25 guests, we bring two chef stations running in parallel. Full cleanup when dinner is done.`,
    closing:  () =>
      `Columbia graduation season (May) is our busiest Midlands window — book 3–4 weeks out for Saturday events. Summer and fall weekends book 2–3 weeks ahead. Serving Columbia and all of the Midlands — Lexington, Irmo, Chapin, West Columbia, Camden, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 180 — Greenville (profileIdx 5)
  {
    headline: () => `Hibachi Catering in Greenville`,
    opening:  () =>
      `Greenville has reinvented itself into one of the most dynamic cities in the Southeast — the thriving downtown on the Reedy River, the Fortune 500 corporations that chose the Upstate over larger markets, the healthcare systems, the international automotive and manufacturing presence that turned the Greenville-Spartanburg corridor into a genuine economic force. The people who entertain here know that the standard has changed. Hibachi catering in Greenville brings a certified teppanyaki chef to your outdoor space — corporate venue, private estate, or residential backyard — with the full setup and a live cooking performance that earns its place at a Greenville event.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For corporate Greenville events over 25 guests, we deploy dual chef stations. Full cleanup when dinner is done. Your venue stays spotless.`,
    closing:  () =>
      `Greenville corporate events and private gatherings book 2–3 weeks out. Holiday party season (November–December) fills fastest — reserve 4–5 weeks ahead for Saturday events. Serving Greenville and all of Upstate SC — Spartanburg, Simpsonville, Greer, Mauldin, Taylors, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 181 — Summerville (profileIdx 6)
  {
    headline: () => `Hibachi at Home in Summerville`,
    opening:  () =>
      `Summerville has grown faster than almost any city in South Carolina — new neighborhoods appearing along every corridor, young families putting down roots, and a graduation season that gets larger every spring as the community expands. The backyard culture here is real: the patios that were the selling point when the house was purchased, the outdoor spaces that finally get their moment when the right occasion comes along. Private hibachi at home in Summerville brings a certified teppanyaki chef to your property with the full setup and a live cooking performance built for exactly the kind of crowd that shows up at a Summerville celebration.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Summerville weekend evenings book 2–3 weeks ahead. Graduation season (May–June) is our fastest-filling window — book 3–4 weeks out for Saturday events. Serving Summerville and the greater Charleston area including Goose Creek, Ladson, North Charleston, Moncks Corner, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 182 — Bluffton (profileIdx 7)
  {
    headline: () => `Private Hibachi Chef in Bluffton`,
    opening:  () =>
      `Bluffton has become the Lowcountry's fastest-growing address — the Palmetto Bluff estates, the Sun City retiree community that brought a new standard of private entertaining to the May River corridor, the young professional families in the Berkeley Hall and Hampton Lake communities who came for the quality of life and stayed for exactly this kind of evening. Private hibachi in Bluffton brings a certified teppanyaki chef to your outdoor space with the full setup, hand-selected premium proteins, and a live cooking performance that earns its place at a Lowcountry patio. The chef comes to you — no Hilton Head restaurant logistics, no off-island reservation battles.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — including premium upgrades like filet mignon and lobster tail — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, pool deck, or estate grounds. The performance runs 90–120 minutes from first flame to final plate. Every plate cooked to order, every guest at the same table, the entire show designed around your group. Full cleanup when dinner is done.`,
    closing:  () =>
      `Bluffton private events book 2–4 weeks ahead. Spring and fall are our busiest Lowcountry windows. Serving Bluffton and all of the South Carolina Lowcountry — Hilton Head Island, Beaufort, Hardeeville, Okatie, and surrounding communities. Starting at $60/adult, $30/child, $600 minimum. Premium protein packages available. Most quotes returned same day.`,
  },
  // 183 — North Myrtle Beach (profileIdx 8)
  {
    headline: () => `Mobile Hibachi in North Myrtle Beach`,
    opening:  () =>
      `North Myrtle Beach has its own identity separate from the main strip — the quieter beach houses in Cherry Grove, the Ocean Drive boardwalk district, the rental properties along the Intracoastal that attract a slightly different crowd than the resort corridor to the south. The bachelorette groups that specifically wanted the house rental experience rather than the hotel strip. The birthday weekends where the whole point was the group house, not the activities. Mobile hibachi at your North Myrtle Beach rental brings a certified teppanyaki chef directly to your property with the full setup and a live-fire performance that gives Friday night exactly the anchor it needed.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck or backyard. The show runs 90–120 minutes — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. Full cleanup when dinner is done. Your North Myrtle Beach rental stays spotless.`,
    closing:  () =>
      `North Myrtle Beach summer events book 6–8 weeks ahead for peak season dates. Bachelorette weekends, birthday trips, and group house vacation events are our most common North Myrtle Beach bookings. Serving North Myrtle Beach and the Grand Strand corridor. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 184 — Spartanburg (profileIdx 9)
  {
    headline: () => `Hibachi at Home in Spartanburg`,
    opening:  () =>
      `Spartanburg is where Upstate South Carolina started — and it has built something genuine over the decades that cities twice its size are still working toward. The residential neighborhoods where the backyard is a real feature, not an afterthought. The corporate and manufacturing community that has its own standard for how a team dinner should go. The university culture from Wofford, Converse, and USC Upstate that feeds a steady calendar of graduation celebrations. Private hibachi at home in Spartanburg brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that upgrades any gathering from a good time into the event the neighborhood talks about for the rest of the summer.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Spartanburg gatherings, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Spartanburg weekend evenings book 2–3 weeks ahead. Graduation season (May–June) fills fastest — book 3–4 weeks out for Saturday events. Serving Spartanburg and Upstate SC including Greenville, Simpsonville, Greer, Gaffney, Duncan, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 185 — Lexington (profileIdx 10)
  {
    headline: () => `Backyard Hibachi Party in Lexington`,
    opening:  () =>
      `Lexington has become the backyard capital of the South Carolina Midlands — the subdivisions where the cul-de-sac lots actually have space to use, the neighborhood culture where the graduation party is a community event as much as a family one, and the proximity to Columbia that makes it easy to host the USC relatives without the Lake Murray commute. Backyard hibachi in Lexington brings a certified teppanyaki chef to your property with the full setup and a live-fire performance that turns any gathering from a good dinner into the event the neighborhood heard about for weeks before and references for months after.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Lexington events, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Lexington weekend evenings book 2–3 weeks ahead. Graduation season (May) and summer Saturdays fill fastest — book 3–4 weeks out. Serving Lexington and the greater Columbia Midlands — West Columbia, Chapin, Irmo, Batesburg-Leesville, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 186 — Rock Hill (profileIdx 11)
  {
    headline: () => `Hibachi at Home in Rock Hill`,
    opening:  () =>
      `Rock Hill sits at the exact intersection of two markets — the South Carolina residential community that has been building real neighborhoods for three decades, and the Charlotte metro overflow that has discovered that you can have the suburban quality of life here without the Mecklenburg County price tag. The families in Riverwalk and Waterford, the Fort Mill commuters who live on the York County side, the college families connected to Winthrop University — all of them host the same backyard graduation parties and birthday milestones. Private hibachi at home in Rock Hill brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that makes any occasion here the one your guests plan around next time.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Rock Hill gatherings, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Rock Hill weekend evenings book 2–3 weeks ahead. Graduation season and summer Saturdays fill fastest. Serving Rock Hill and the greater York County area including Fort Mill, Lake Wylie, Tega Cay, Clover, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 187 — Pawleys Island (profileIdx 12)
  {
    headline: () => `Private Hibachi Chef in Pawleys Island`,
    opening:  () =>
      `Pawleys Island has been the understated alternative to Myrtle Beach for generations — the families who rent the same creek-side house every August, the anniversary couples who discovered the hammock shops and Litchfield Beach thirty years ago and never stopped coming back, the golf groups who prefer Caledonia and True Blue to the resort strip and want an evening at the house that matches the quality of the round. Private hibachi at your Pawleys Island vacation property brings a certified teppanyaki chef to your deck or yard with the full setup, premium proteins, and a live cooking performance that gives this particular evening the respect it deserves.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Premium proteins — filet mignon, lobster tail, scallops — available for any Pawleys Island occasion. Full cleanup when dinner is done.`,
    closing:  () =>
      `Pawleys Island summer events book 5–7 weeks ahead for peak July and August dates. Anniversary dinners, family vacation groups, and golf group dinners are our most common Pawleys Island bookings. Serving Pawleys Island and the southern Grand Strand — Murrells Inlet, Georgetown, Litchfield Beach, Surfside Beach, and surrounding communities. Starting at $60/adult, $600 minimum. Confirm outdoor cooking is permitted at your rental before reserving.`,
  },
  // 188 — Simpsonville (profileIdx 13)
  {
    headline: () => `Hibachi at Home in Simpsonville`,
    opening:  () =>
      `Simpsonville has grown into the most sought-after address in Greenville County — the Five Forks corridor, the Woodruff Road retail district, the neighborhoods where the homes are newer, the lots are larger, and the backyard setup was a selling point when the house was built. It is Upstate South Carolina's fastest-growing suburb and it has the graduation parties, birthday milestones, and neighborhood gatherings to prove it. Private hibachi at home in Simpsonville brings a certified teppanyaki chef to your property with the full setup and a live cooking performance that upgrades any backyard event from dinner into the evening your neighborhood heard about before it happened.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order at the grill in front of your guests. For large Simpsonville events, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Simpsonville weekend evenings book 2–3 weeks ahead. Graduation season (May–June) is our fastest-filling window — book 3–4 weeks out for Saturday events. Serving Simpsonville and all of Upstate SC including Greenville, Mauldin, Greer, Fountain Inn, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
]

// ── Main builder ──────────────────────────────────────────────────────────────
export function getSouthCarolinaCityData(citySlug, cityName) {
  const major       = SC_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getSCVariantIndex(citySlug)
  const theme       = SC_IMAGE_THEMES[v]
  const displayName = SC_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'South Carolina',
    stateAbbr:    'SC',
    stateSlug:    'south-carolina',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: SC_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['Charleston', 'Myrtle Beach', 'Hilton Head Island', 'Columbia', 'Greenville'].filter(
      (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') !== citySlug
    ),
    localHighlights:   SC_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: SC_OCCASIONS[v],
    faqSet:            SC_FAQ_SETS[v](displayName),
    testimonials:      SC_TESTIMONIALS[v],
    // INTRO_VARIANTS:   169–174 = SC generic, 175–188 = SC city-specific
    uniqueIntroVariant:   (major?.profileIdx != null) ? 175 + major.profileIdx : 169 + v,
    uniqueWhyUsVariant:   v,
    // CLOSING_VARIANTS: 169–174 = SC generic, 175–188 = SC city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 175 + major.profileIdx : 169 + v,
    heroH1Prefix: major?.profileIdx != null
      ? SC_PROFILE_H1_PREFIXES[major.profileIdx]
      : SC_THEME_H1_PREFIXES[v],
    ...(SC_CUSTOM_META[citySlug]
      ? { metaTitle: SC_CUSTOM_META[citySlug].title, metaDescription: SC_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getScHowItWorks(citySlug) {
  const major = SC_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getSCVariantIndex(citySlug)
  return SC_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getScSectionVariant(citySlug) {
  const major = SC_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getSCVariantIndex(citySlug)
  return SC_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getScCityImage(citySlug) {
  return SC_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getScSupportImages(citySlug) {
  if (SC_SUPPORT_IMAGES[citySlug]) return SC_SUPPORT_IMAGES[citySlug]
  const major = SC_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getSCVariantIndex(citySlug)
  return SC_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getScBlogPosts(variant, count) {
  return SC_BLOG_POSTS[variant % SC_BLOG_POSTS.length].slice(0, count)
}
