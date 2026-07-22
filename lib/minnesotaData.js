// =============================================================================
// lib/minnesotaData.js — Minnesota Expansion — Batch 1 (5 cities)
// 17 cities planned · 6 geographic themes
// Theme 0: Twin Cities Luxury (Edina, Wayzata, Minnetonka, Eden Prairie)
// Theme 1: Minneapolis Urban/Corporate (Minneapolis, Bloomington)
// Theme 2: Twin Cities Suburban/Family (Maple Grove, Plymouth, Eagan, Burnsville, Lakeville)
// Theme 3: River & Lakes / St. Paul (St. Paul, Woodbury)
// Theme 4: Rochester / Medical (Rochester)
// Theme 5: Destination / North Shore (Duluth, Stillwater, Brainerd)
//
// INTRO_VARIANTS indices:  322–327 MN generic · 328–332 MN Batch 1 city-specific
// CLOSING_VARIANTS indices: 322–327 MN generic · 328–332 MN Batch 1 city-specific
// Batch 1 city indices: Edina=328, Wayzata=329, Minnetonka=330, Rochester=331, Duluth=332
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getMnVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 6
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const MN_HERO_SUBTITLES = [
  (city) => `Estate Dinners · Anniversary Celebrations · Corporate Client Evenings · Lakeside Events · Serving ${city} & Twin Cities Metro`,
  (city) => `Corporate Team Events · Client Appreciation Dinners · Office Parties · Rooftop Events · Serving ${city} & Minneapolis Metro`,
  (city) => `Graduation Parties · Milestone Birthdays · Backyard Celebrations · Neighborhood Gatherings · Serving ${city} & Twin Cities Suburbs`,
  (city) => `Home Dinner Parties · Birthday Celebrations · Bachelorette Weekends · Anniversary Dinners · Serving ${city} & St. Paul Metro`,
  (city) => `Graduation Celebrations · Family Milestones · Welcome & Farewell Dinners · Anniversary Dinners · Serving ${city} & Southeast Minnesota`,
  (city) => `Vacation Rental Dinners · Family Reunion Feasts · Bachelorette Getaways · Corporate Retreat Dinners · Serving ${city} & the North Shore`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const MN_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Twin Cities Luxury
  (city) => [
    `${city} and the western Twin Cities lake communities set the standard for Minnesota luxury entertaining — private hibachi at the estate level`,
    `Lake Minnetonka waterfront properties, Country Club estates, and Centennial Lakes-area homes all within standard service radius`,
    `Premium protein options — filet mignon, Chilean sea bass, wagyu — available for the most discerning ${city} hosts`,
    `Most ${city} luxury events confirm same day and book 2–4 weeks ahead; summer and holiday weekends fill early`,
    `Fully self-contained setup — propane teppan grill, all proteins, all ingredients — at any ${city} estate or lakeside property`,
    `Complete professional cleanup when the performance ends — your outdoor space is immaculate`,
  ],
  // Theme 1 — Minneapolis Urban/Corporate
  (city) => [
    `The Twin Cities corporate community has adopted private hibachi as the team event format that outperforms every restaurant option`,
    `North Loop, Loring Park, Uptown, and Minneapolis rooftop venues all served — corporate campuses and private event spaces welcome`,
    `Groups of 10 to 80+ served; dual chef stations for groups over 25 so everyone eats at the same time`,
    `Most ${city} corporate event quotes returned within 24 hours — holiday season and year-end party dates book 4–6 weeks ahead`,
    `Fully self-contained propane setup — no outdoor kitchen or gas hookup needed at any Twin Cities venue`,
    `Professional cleanup when the performance concludes — your event space is left exactly as we found it`,
  ],
  // Theme 2 — Twin Cities Suburban/Family
  (city) => [
    `${city} and the surrounding Twin Cities suburbs book us for graduation parties, milestone birthdays, and backyard events that exceed every cookout`,
    `Maple Grove, Plymouth, and surrounding Hennepin County communities all within standard service radius`,
    `Kids love the fire tricks and flying shrimp — adults love the food; backyard hibachi works for every age`,
    `Graduation season (May–June) and summer weekends fill 3–5 weeks ahead — book early for any spring Saturday`,
    `Dual chef stations for graduation parties and neighborhood gatherings of 25–60 guests`,
    `Chef arrives early, sets up, performs, and leaves your backyard exactly as they found it — zero cleanup for the host`,
  ],
  // Theme 3 — River & Lakes / St. Paul
  (city) => [
    `${city} hosts home dinner parties, bachelorette weekends, and retirement gatherings that deserve an evening better than any restaurant reservation`,
    `Summit Avenue Victorians, Cathedral Hill patios, and East Side backyards — any outdoor space with 10×10 feet of clearance works`,
    `Private hibachi brings the chef to your home, your Airbnb, or your event space throughout the St. Paul metro`,
    `Most ${city} bookings confirmed same day; summer and bachelorette weekend dates book 2–3 weeks ahead`,
    `Woodbury, Eagan, Burnsville, and surrounding East and South Metro communities within standard service radius`,
    `Full setup and complete professional cleanup — your ${city} property is spotless when the chef leaves`,
  ],
  // Theme 4 — Rochester / Medical
  (city) => [
    `Rochester hosts milestones that deserve a dinner as significant as the occasion — graduation dinners, fellowship completions, anniversary celebrations`,
    `Serving all of Rochester — Cascade Lake, Quarry Hill, Byron, Stewartville, and surrounding Olmsted County communities`,
    `Mayo Clinic families, medical professionals, and University of Minnesota Rochester communities are our most frequent Rochester clients`,
    `Most Rochester quotes returned same day; May graduation season books 4–6 weeks ahead`,
    `Premium proteins available — many Rochester milestone dinners upgrade to filet mignon, lobster tail, and Chilean sea bass`,
    `Chef arrives fully equipped and leaves the property immaculate — complete setup and cleanup included`,
  ],
  // Theme 5 — Destination / Duluth
  (city) => [
    `${city} brings groups from across the Midwest — Canal Park vacation rentals, North Shore cabins, and Lake Superior bluff properties all served`,
    `Fully self-contained propane grill — no gas hookup needed at any Duluth rental or North Shore cabin deck`,
    `Bachelorette weekends, family reunions, and corporate retreats are the most common Duluth group formats`,
    `Summer (June–August) and fall color season book 4–6 weeks ahead; off-season events confirm 1–2 weeks out`,
    `Travel is factored into the Duluth quote at booking — always disclosed upfront, never a surprise`,
    `Chef arrives, performs, and leaves your Duluth rental or North Shore cabin spotless — no cleanup for the group`,
  ],
]

// ── Occasions ──────────────────────────────────────────────────────────────────
const MN_OCCASIONS = [
  // Theme 0 — Luxury
  ['Estate Dinner Parties', 'Anniversary Celebrations', 'Corporate Client Dinners', 'Milestone Birthdays', 'Bachelorette Parties', 'Holiday Entertaining', 'Lake Property Events', 'Engagement Dinners', 'Retirement Celebrations', 'Family Milestone Gatherings'],
  // Theme 1 — Urban/Corporate
  ['Corporate Team Events', 'Client Appreciation Dinners', 'Office Holiday Parties', 'Rooftop & Patio Events', 'Milestone Celebrations', 'Welcome & Farewell Events', 'Year-End Team Dinners', 'Promotion Celebrations', 'Bachelor Parties', 'Engagement Parties'],
  // Theme 2 — Suburban/Family
  ['Graduation Parties', 'Milestone Birthday Parties', 'Summer Cookout Upgrades', 'End-of-Season Team Parties', 'Neighborhood Block Events', 'Kids\' Birthday Extravaganzas', 'Family Reunions', 'Anniversary Dinners', 'Holiday Gatherings', 'Backyard Celebrations'],
  // Theme 3 — River & Lakes
  ['Home Dinner Parties', 'Birthday Celebrations', 'Bachelorette Weekends', 'Retirement Parties', 'Anniversary Dinners', 'Holiday Gatherings', 'Engagement Parties', 'Family Milestone Dinners', 'Neighborhood Cookouts', 'Backyard Dinner Parties'],
  // Theme 4 — Medical/Rochester
  ['Graduation Celebrations', 'Family Milestone Dinners', 'Welcome & Farewell Dinners', 'Anniversary Dinners', 'Retirement Celebrations', 'Birthday Milestones', 'Residency Match Dinners', 'Fellowship Completion Parties', 'Holiday Gatherings', 'Corporate Team Events'],
  // Theme 5 — Destination/Duluth
  ['Vacation Rental Dinners', 'Family Reunion Feasts', 'Bachelorette Getaways', 'Anniversary Escapes', 'Milestone Birthday Weekends', 'Corporate Retreat Dinners', 'North Shore Cabin Events', 'Lake Superior Group Dinners', 'Bachelor Party Weekends', 'Holiday Cabin Gatherings'],
]

// ── FAQ sets ───────────────────────────────────────────────────────────────────
const MN_FAQ_SETS = [
  // Theme 0 — Luxury
  (city) => [
    { q: `Do you serve ${city}, MN?`, a: `Yes — we serve ${city} and the entire Twin Cities metro, including all lake communities in western Hennepin County. Our chefs are experienced with the estate and lakeside settings common in ${city}.` },
    { q: 'What premium proteins do you offer?', a: 'Our standard menu includes chicken, steak, shrimp, salmon, and vegetables. Premium upgrades — filet mignon, Chilean sea bass, and wagyu — are available. Confirm at booking.' },
    { q: 'How much space does the chef need?', a: 'Approximately 10×10 feet of outdoor clearance. Estate patios, pool decks, lakeside lawns, and covered outdoor spaces all work. We confirm setup requirements at booking.' },
    { q: `How far in advance should we book?`, a: `Most ${city} events confirm 2–4 weeks ahead. Summer and holiday weekends fill faster. A deposit secures your date.` },
    { q: 'Do you handle cleanup after the event?', a: 'Yes — the chef cleans the cooking area completely and takes all equipment. Your outdoor space is left spotless.' },
    { q: 'Can you accommodate dietary restrictions?', a: 'Absolutely. Vegetarian, vegan, gluten-free, and allergy accommodations are standard. Let us know at booking.' },
  ],
  // Theme 1 — Urban/Corporate
  (city) => [
    { q: `Can you do corporate events in ${city}?`, a: `Yes — we serve corporate events throughout the Twin Cities, including ${city}. Outdoor venues, rooftop spaces, corporate campuses, and private event spaces all work. Contact us with event details for a custom quote.` },
    { q: 'What group sizes do you serve?', a: 'We serve groups of 8 to 80+. For groups over 25–30, we bring dual chef stations so everyone eats at the same time.' },
    { q: 'How long does the performance last?', a: 'The cooking performance runs 90–120 minutes depending on group size and menu. Most corporate events add a cocktail hour before the chef begins.' },
    { q: 'Do you need a gas hookup or commercial kitchen?', a: 'No — the chef uses a self-contained propane teppan grill. Any outdoor area with 10×10 feet of clearance works.' },
    { q: 'Can you customize menus for dietary restrictions?', a: 'Yes. Vegetarian, vegan, gluten-free, and allergy accommodations are all standard. Note these at booking.' },
    { q: `How do we get a corporate quote?`, a: `Submit a booking request with your group size, date, and ${city} venue. Corporate quotes are returned within 24 hours.` },
  ],
  // Theme 2 — Suburban/Family
  (city) => [
    { q: `Do you serve ${city}?`, a: `Yes — we serve ${city} and the broader Twin Cities northwest metro. Backyard graduation parties and family events are our specialty.` },
    { q: 'How does backyard hibachi work?', a: 'The chef arrives with a portable propane teppan grill, sets up in your backyard or driveway (about 10×10 feet), and cooks your proteins live in front of your guests for 90–120 minutes. No outdoor kitchen required.' },
    { q: 'Is it good for kids?', a: 'Kids love it — the fire volcano trick and flying shrimp are always the party highlight. We\'ve done hundreds of family events and it works for every age.' },
    { q: 'What\'s included in the standard menu?', a: 'Chicken, steak, shrimp, salmon, and vegetables with fried rice and noodles. Upgrade to filet mignon or lobster tail for special graduation celebrations.' },
    { q: 'How many guests can you serve?', a: 'We serve groups of 8 to 60+ comfortably. Dual chef stations for larger graduation parties and neighborhood events.' },
    { q: 'When should we book for graduation season?', a: 'Minnesota graduation Saturdays (May–June) book 4–6 weeks ahead. Regular weekend events book 2–3 weeks out.' },
  ],
  // Theme 3 — River & Lakes
  (city) => [
    { q: `Do you serve ${city}?`, a: `Yes — we serve ${city} and the full Twin Cities east metro. Summit Avenue dinner parties, Cathedral Hill bachelorette rentals, and East Side backyard events are all within our service area.` },
    { q: 'What makes private hibachi different from a restaurant?', a: 'The chef performs at your home or rental. Your guests never leave. The experience is entirely private — no shared dining rooms, no waits, no parking, no driving.' },
    { q: 'What proteins do you cook?', a: 'Standard: chicken, steak, shrimp, salmon, vegetables, fried rice, noodles. Premium options: filet mignon, Chilean sea bass, lobster tail.' },
    { q: 'How much outdoor space is needed?', a: 'About 10×10 feet for the propane teppan setup. Patios, decks, driveways, and lawns all work. No gas hookup required.' },
    { q: 'Can you accommodate 20+ guests?', a: 'Yes. For groups over 20–25, we bring two chefs for the best experience. Let us know your count at booking.' },
    { q: 'What\'s the booking process?', a: 'Submit a request with your date, location, and guest count. We return a quote within 24 hours. A deposit locks your date.' },
  ],
  // Theme 4 — Medical/Rochester
  (city) => [
    { q: 'Do you serve Rochester, MN?', a: 'Yes — we serve Rochester and surrounding southeast Minnesota, including Byron, Stewartville, Kasson, and Olmsted County. Whether you\'re near Cascade Lake or close to Mayo Clinic, we come to you.' },
    { q: 'What occasions do you typically serve in Rochester?', a: 'Graduation dinners (medical school, residency, nursing school, UMR), family milestone celebrations, welcome and farewell dinners for Mayo Clinic families, fellowship completion parties, and anniversary celebrations.' },
    { q: 'What menu options are available?', a: 'Standard: chicken, steak, shrimp, salmon, vegetables, fried rice, noodles. For milestone occasions, many Rochester hosts upgrade to filet mignon or lobster tail.' },
    { q: 'Do you need outdoor space?', a: 'Any outdoor area with about 10×10 feet of clearance works — backyard, patio, deck, or driveway. The chef brings a fully self-contained propane teppan grill.' },
    { q: 'How far in advance should we book?', a: 'Most Rochester events book 2–3 weeks ahead. For May/June graduation season, book 4–6 weeks out to ensure availability on your preferred date.' },
    { q: 'How long does the chef stay?', a: 'The cooking performance runs 90–120 minutes. Most events plan 2–2.5 hours total including setup and teardown.' },
  ],
  // Theme 5 — Destination/Duluth
  (city) => [
    { q: 'Do you serve Duluth and the North Shore?', a: 'Yes — we serve Duluth, Canal Park, and vacation rental communities throughout the Lake Superior corridor. Submit a booking request with your rental address and we\'ll confirm availability.' },
    { q: 'Can you set up at a vacation rental?', a: 'Absolutely — vacation rentals are our most common Duluth format. Deck, patio, or lawn: if there\'s 10×10 feet of outdoor clearance, the chef can set up there.' },
    { q: 'How does the chef get to Duluth?', a: 'Our chefs travel to serve Duluth events. Travel is factored into the quote at booking — always disclosed upfront.' },
    { q: 'What\'s the ideal setting for a Duluth hibachi event?', a: 'A deck with a Lake Superior view is unbeatable. Canal Park vacation rentals, North Shore cabins, and lakeside properties all work beautifully. Any outdoor clearance works.' },
    { q: 'What do you cook?', a: 'Standard: chicken, steak, shrimp, salmon, vegetables. Upgrade to filet mignon, lobster tail, or Chilean sea bass for a premium North Shore dinner.' },
    { q: 'How far ahead should we book for Duluth?', a: 'Summer (June–August) and fall color season book 4–6 weeks ahead. For specific holiday weekends, book as early as possible.' },
  ],
]

// ── Testimonials ───────────────────────────────────────────────────────────────
const MN_TESTIMONIALS = [
  // Theme 0 — Luxury
  [
    { text: `"We hosted a 50th birthday dinner for 22 at our Minnetonka lake house. The chef was extraordinary — filet and Chilean sea bass, the full performance, and our guests were absolutely riveted. This is the kind of experience you can't find at a Twin Cities restaurant. We've already booked for New Year's."`, name: 'Jennifer K.', city: 'Minnetonka, MN', event: '50th Birthday Dinner', initials: 'JK' },
    { text: `"Edina dinner party for 16. We do several dinner parties a year and this was by far the most memorable. The hibachi chef worked our patio like a stage. Guests kept asking how we found this. Exceptional proteins, professional performance, spotless cleanup."`, name: 'David R.', city: 'Edina, MN', event: 'Estate Dinner Party', initials: 'DR' },
    { text: `"Anniversary dinner in our Wayzata backyard overlooking the lake. We've celebrated at restaurants for years and nothing compares to having the chef at your own home. Intimate, personal, and the food was better than any teppan restaurant in the metro. Already planning our return."`, name: 'Sarah & Michael T.', city: 'Wayzata, MN', event: 'Anniversary Dinner', initials: 'ST' },
  ],
  // Theme 1 — Urban/Corporate
  [
    { text: `"We hired Hibachi With Us for our Minneapolis office holiday party — 45 people on our North Loop rooftop. Setup was seamless, the performance was electric, and our team is still talking about it months later. This is the corporate event format everyone else is going to copy."`, name: 'Amanda L.', city: 'Minneapolis, MN', event: 'Corporate Holiday Party', initials: 'AL' },
    { text: `"Client appreciation event for 30 in Bloomington. We were nervous about outdoor logistics in September — completely unfounded. The chef arrived early, performed flawlessly, and every client followed up the next day. Perfect corporate format."`, name: 'Greg M.', city: 'Bloomington, MN', event: 'Client Appreciation Dinner', initials: 'GM' },
    { text: `"Team celebration after a major contract win — 18 of us at the VP's home in Edina. Best team event I've planned in 15 years. The food was excellent, the show was genuinely entertaining, and it cost less than a private dining room downtown."`, name: 'Rachel H.', city: 'Edina, MN', event: 'Corporate Team Celebration', initials: 'RH' },
  ],
  // Theme 2 — Suburban/Family
  [
    { text: `"Graduation party for our daughter — 35 family members in the Maple Grove backyard. The kids were mesmerized, the adults loved the food, and the chef kept the energy high for two full hours. This is now our family's mandatory graduation tradition."`, name: 'Tom & Linda B.', city: 'Maple Grove, MN', event: 'Graduation Party', initials: 'TB' },
    { text: `"Birthday party for my son's 16th — his friends are still texting him about it. Fire tricks, flying shrimp, and everyone eating together around the teppan. Nothing like any birthday party any of us had growing up. Booking again next summer."`, name: 'Kate S.', city: 'Plymouth, MN', event: '16th Birthday Party', initials: 'KS' },
    { text: `"Neighborhood gathering with 28 people in our Eden Prairie backyard. The chef handled every dietary preference without a hitch. Neighbors are already planning a second event for next summer."`, name: 'Mark & Denise F.', city: 'Eden Prairie, MN', event: 'Neighborhood Gathering', initials: 'MF' },
  ],
  // Theme 3 — River & Lakes
  [
    { text: `"Summit Avenue dinner party for 20 guests — our historic home isn't easy to entertain in, so we use the backyard. The hibachi chef transformed our yard into an event space. Every guest said it was the best dinner they'd had in St. Paul."`, name: 'Caroline W.', city: 'St. Paul, MN', event: 'Home Dinner Party', initials: 'CW' },
    { text: `"Retirement party in Woodbury — 30 colleagues from 25 years of teaching. We wanted something that felt like a real celebration. The hibachi performance was exactly that. Everyone left requesting a reunion event."`, name: 'James & Patricia O.', city: 'Woodbury, MN', event: 'Retirement Party', initials: 'JO' },
    { text: `"Bachelorette dinner in Cathedral Hill — our whole group was from out of town and wanted a real St. Paul experience. The chef came to our Airbnb, set up on the patio, and delivered 90 minutes of incredible food. Perfect send-off."`, name: 'Meredith G.', city: 'St. Paul, MN', event: 'Bachelorette Dinner', initials: 'MG' },
  ],
  // Theme 4 — Medical/Rochester
  [
    { text: `"My daughter matched at Mayo Clinic and we celebrated with a private hibachi dinner for 14 family members in our backyard in Byron. The chef was professional, the filet was exceptional, and the whole evening felt as significant as the occasion. Thank you."`, name: 'Nancy P.', city: 'Byron, MN', event: 'Medical School Match Dinner', initials: 'NP' },
    { text: `"We moved to Rochester for my husband's fellowship and wanted to host colleagues. The hibachi format made it easy for everyone to meet. By the end of the evening we had a community. Extraordinary choice for a welcome dinner."`, name: 'Christine L.', city: 'Rochester, MN', event: 'Welcome Dinner', initials: 'CL' },
    { text: `"20th anniversary dinner. We've always gone to restaurants and wanted something different. The chef came to our home, cooked in the backyard, and it was without question the best anniversary dinner we've had. Planning the 25th already."`, name: 'Robert & Michelle A.', city: 'Rochester, MN', event: 'Anniversary Dinner', initials: 'RA' },
  ],
  // Theme 5 — Destination/Duluth
  [
    { text: `"We rented a Canal Park house for a bachelorette weekend — 14 of us. The hibachi chef set up on the deck overlooking the ship canal and cooked for two hours. Lake Superior backdrop, fire tricks, incredible food. None of us had ever done anything like it. This is how you do Duluth."`, name: 'Ashley M.', city: 'Duluth, MN', event: 'Bachelorette Weekend', initials: 'AM' },
    { text: `"Family reunion at our North Shore cabin — 26 people, three generations. We couldn't find a Duluth restaurant to seat us all together. Private hibachi at the cabin solved everything. The grandparents watched from the deck. The kids gathered around the grill. Everyone ate at the same time. Perfect."`, name: 'The Henderson Family', city: 'Duluth, MN', event: 'Family Reunion', initials: 'HF' },
    { text: `"Corporate retreat in Duluth — 22 of us from Minneapolis drove up for the long weekend. The hibachi dinner on Friday pulled the group together in a way that no meeting room had. Best retreat investment we've made."`, name: 'Brian K.', city: 'Duluth, MN', event: 'Corporate Retreat Dinner', initials: 'BK' },
  ],
]

// ── Image themes ───────────────────────────────────────────────────────────────
const MN_IMAGE_THEMES = [
  { heroImage: '/pics/hero-4.jpg' },           // Theme 0 — Twin Cities Luxury
  { heroImage: '/pics/private-chef-2.jpg' },   // Theme 1 — Minneapolis Urban/Corporate
  { heroImage: '/pics/hero-1.jpg' },           // Theme 2 — Twin Cities Suburban/Family
  { heroImage: '/pics/hibachi-at-home.jpg' },  // Theme 3 — River & Lakes / St. Paul
  { heroImage: '/pics/hero-3.jpg' },           // Theme 4 — Rochester / Medical
  { heroImage: '/pics/hero-2.jpg' },           // Theme 5 — Destination / North Shore
]

// ── How it works ───────────────────────────────────────────────────────────────
// CRITICAL: Each theme must have exactly 5 steps
const MN_HOW_IT_WORKS = [
  // Theme 0 — Twin Cities Luxury
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Estate or Lake Property`,
    footerNote: (city) => `We serve ${city} and the entire Twin Cities lake corridor — Wayzata, Minnetonka, Eden Prairie, and western Hennepin County. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Request a Quote',          desc: 'Submit your event date, guest count, and location. Most quotes are returned same day. Premium protein upgrades confirmed at booking.' },
      { title: 'Confirm Your Menu',        desc: 'Choose your proteins — filet mignon, Chilean sea bass, standard menu, or a combination. Share dietary restrictions. We handle everything from there.' },
      { title: 'Chef Arrives & Sets Up',   desc: 'Your chef arrives 30–45 minutes early with a propane teppan grill and all ingredients. Full setup requires about a 10×10 outdoor area at your property.' },
      { title: 'Live Teppan Performance',  desc: '90–120 minutes of live cooking — fire tricks, precision knife work, and premium proteins cooked fresh in front of your guests.' },
      { title: 'Enjoy & We Clean Up',      desc: 'When the performance ends, your chef cleans the cooking area completely and removes all equipment. Your outdoor space is left exactly as we found it.' },
    ],
  },
  // Theme 1 — Minneapolis Urban/Corporate
  {
    headline:   (city) => `How Private Hibachi Works for Your ${city} Corporate Event`,
    footerNote: (city) => `We serve corporate and private events throughout Minneapolis, ${city}, and the Twin Cities metro. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Request a Corporate Quote', desc: 'Tell us your event location, group size, and date. Corporate quotes prioritized — most returned within 24 hours.' },
      { title: 'Confirm Your Menu',         desc: 'Select proteins for your team and note any dietary restrictions or allergy accommodations.' },
      { title: 'Chef Arrives & Sets Up',    desc: 'Chef arrives 30–45 minutes before the event and sets up the teppan station at your venue completely independently.' },
      { title: 'Live Performance',          desc: '90–120 minutes of entertainment and excellent food. Every guest eats at the same time, every dish cooked to order.' },
      { title: 'Spotless Cleanup',          desc: 'Chef cleans the cooking area fully when dinner is done. Your venue is left exactly as you received it.' },
    ],
  },
  // Theme 2 — Twin Cities Suburban/Family
  {
    headline:   (city) => `How Backyard Hibachi Works in ${city}`,
    footerNote: (city) => `We serve ${city} and the Twin Cities northwest suburbs — Maple Grove, Plymouth, Minnetonka, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Request a Quote',        desc: 'Tell us your backyard address, guest count, and event date. We confirm availability and return a quote fast.' },
      { title: 'Confirm Your Menu',      desc: 'Pick your proteins. Kids\' favorites are chicken and shrimp. Add filet mignon for the milestone upgrade.' },
      { title: 'Chef Arrives & Sets Up', desc: 'Chef arrives 30–45 minutes early, sets up the teppan grill in your backyard (10×10 area), and preps for the show.' },
      { title: 'The Performance',        desc: 'Fire volcano, flying shrimp, knife skills — the chef entertains and cooks for 90–120 minutes for every age in the crowd.' },
      { title: 'We Clean Up Everything', desc: 'When dinner ends, chef breaks down the station and removes everything. Your backyard is left exactly as it was.' },
    ],
  },
  // Theme 3 — River & Lakes / St. Paul
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Home or Event Space`,
    footerNote: (city) => `We serve ${city} and the East Metro — Woodbury, Eagan, Burnsville, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Request a Quote',          desc: 'Submit your event details — date, guest count, location. We respond quickly with availability and pricing.' },
      { title: 'Confirm Your Menu',        desc: 'Choose proteins and share dietary restrictions. Vegetarian, vegan, and allergy accommodations are standard.' },
      { title: 'Chef Arrives & Sets Up',   desc: 'Your chef arrives 30–45 minutes before guests eat, sets up the portable teppan grill, and prepares your outdoor space.' },
      { title: 'Live Hibachi Performance', desc: 'The chef cooks and performs for 90–120 minutes — fire, knife work, fresh proteins, entertainment your guests remember.' },
      { title: 'Complete Cleanup',         desc: 'Everyone eats together. When the performance ends, the chef cleans completely before leaving.' },
    ],
  },
  // Theme 4 — Rochester / Medical
  {
    headline:   (city) => `How Private Hibachi Works for Your Rochester Celebration`,
    footerNote: (city) => `We serve Rochester, Byron, Stewartville, and surrounding southeast Minnesota communities. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Request a Quote',              desc: 'Tell us your Rochester location, guest count, and occasion date. Quotes returned within 24 hours.' },
      { title: 'Confirm Your Menu',            desc: 'Select proteins — many Rochester milestone dinners upgrade to filet mignon and lobster tail. Share dietary needs.' },
      { title: 'Chef Arrives & Sets Up',       desc: 'Chef arrives 30–45 minutes before the event and sets up the propane teppan station in your backyard or patio.' },
      { title: 'Live Teppan Performance',      desc: 'The chef performs and cooks for 90–120 minutes — fire, showmanship, and the best proteins your guests have had.' },
      { title: 'Celebrate & Chef Cleans Up',   desc: 'Dinner ends with a spotless cooking area. The chef takes everything. Your evening continues without any cleanup obligation.' },
    ],
  },
  // Theme 5 — Destination / Duluth
  {
    headline:   (city) => `How Mobile Hibachi Works at Your Duluth or North Shore Rental`,
    footerNote: (city) => `We serve Duluth, Canal Park, and the North Shore corridor. Travel is factored into your quote at booking. Starting at $60/adult, $30/child, $600 event minimum.`,
    steps: [
      { title: 'Request a Quote',              desc: 'Tell us your Duluth rental address, guest count, and date. We confirm North Shore availability same day.' },
      { title: 'Confirm Your Menu',            desc: 'Choose proteins for your group. North Shore settings call for the premium menu — filet, salmon, lobster tail.' },
      { title: 'Chef Travels to Your Rental',  desc: 'Your chef travels to your Duluth property and arrives 30–45 minutes before the performance to set up the teppan station.' },
      { title: 'North Shore Hibachi Show',     desc: '90–120 minutes of live fire cooking on your deck or patio — Lake Superior as the backdrop, the teppan as the centerpiece.' },
      { title: 'Spotless Cleanup',             desc: 'Chef breaks down the grill and leaves your rental spotless. The evening continues without any cleanup for the group.' },
    ],
  },
]

// ── Section variants ───────────────────────────────────────────────────────────
const MN_SECTION_VARIANTS = [
  // Theme 0 — Twin Cities Luxury
  {
    heroPill:         'Twin Cities\' Private Hibachi Chef',
    experiencePill:   'Why Twin Cities Luxury Hosts Choose Private',
    experienceImage:  '/pics/hibachi-private-chef-1.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a ${city} estate or lake property dinner`,
    experiencePoints: (city) => [
      { icon: '🏡', title: 'Your Estate Is the Venue',          desc: `The lake house, the Country Club backyard, the estate patio — wherever you gather in ${city}, your certified teppanyaki chef arrives fully equipped and performs exclusively for your group.` },
      { icon: '🥩', title: 'Premium Proteins, Private Setting', desc: `Filet mignon, Chilean sea bass, and wagyu upgrades available. Every protein cooked live at the teppan in front of your guests — the standard your ${city} dinner occasion deserves.` },
      { icon: '🔥', title: 'Live Fire at Your Property',        desc: `Fire tricks, precision knife work, and 90–120 minutes of teppanyaki — the full show at your ${city} property, not a shared restaurant with strangers.` },
      { icon: '✨', title: 'Full Setup and Complete Cleanup',   desc: `Your chef arrives with everything, performs for your guests, and leaves the property immaculate. The outdoor space is exactly as we found it.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Private Hibachi Service Area — ${city} & Twin Cities Metro`,
    areasIntro:      [
      (city, state) => `We serve ${city} and all Twin Cities lake communities — Wayzata, Minnetonka, Eden Prairie, Hopkins, Richfield, Bloomington, and surrounding western Hennepin County. The full Minneapolis and St. Paul metro is within our standard service radius.`,
      (city) => `Most ${city} events confirm same day. Summer and holiday weekends fill 2–4 weeks ahead — confirm your date with a deposit to lock it in. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:     'Check Twin Cities Availability',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Private Hibachi in ${city} for Every Occasion`,
    occasionSubtext: `From Lake Minnetonka estate dinner parties to Edina anniversary celebrations — the full teppanyaki experience at your Twin Cities luxury property.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `${city} Private Hibachi FAQs`,
    testimonialSubheading: `What Twin Cities luxury hosts and lake property entertainers are saying about private hibachi at home`,
  },
  // Theme 1 — Minneapolis Urban/Corporate
  {
    heroPill:         'Minneapolis Corporate Hibachi',
    experiencePill:   'The Twin Cities Corporate Event Upgrade',
    experienceImage:  '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a corporate event in ${city}, Minnesota`,
    experiencePoints: (city) => [
      { icon: '🏢', title: 'Built for Twin Cities Corporate Events', desc: `The Minneapolis and ${city} corporate community has adopted private hibachi as the team dinner format that outperforms every restaurant. Your outdoor venue or corporate campus becomes the setting.` },
      { icon: '🔥', title: 'Live Performance for Your Team',          desc: `90–120 minutes of fire tricks, knife work, and live cooking. Your team eats together, watches the show together, and leaves with a shared experience.` },
      { icon: '🍱', title: 'Every Plate Cooked to Order',             desc: `From first flame to final plate, every protein is cooked live at the teppan grill in front of your team. Nothing pre-staged. Fresh, exceptional food for every guest.` },
      { icon: '✨', title: 'Zero Cleanup for the Host',               desc: `Your chef arrives fully equipped, performs for your team, and leaves the venue spotless. The event coordinator's only job is choosing the date.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Corporate Hibachi Service Area — ${city} & Twin Cities`,
    areasIntro:      [
      (city, state) => `We serve corporate events throughout the Twin Cities — Minneapolis, ${city}, Bloomington, Eden Prairie, Minnetonka, Maple Grove, Plymouth, St. Paul, Woodbury, and all metro suburbs. Indoor venues with outdoor space, rooftops, and corporate campus greens all work.`,
      (city) => `Most ${city} corporate quotes returned within 24 hours. Holiday party season (November–December) and year-end events fill 4–6 weeks ahead. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:     'Book a Corporate Event',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Corporate Hibachi in ${city} for Every Occasion`,
    occasionSubtext: `From Minneapolis rooftop client dinners to Twin Cities office holiday parties — the private teppanyaki experience your team actually looks forward to.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `${city} Corporate Hibachi FAQs`,
    testimonialSubheading: `What Twin Cities corporate teams and event planners are saying about private hibachi`,
  },
  // Theme 2 — Twin Cities Suburban/Family
  {
    heroPill:         'Backyard Hibachi in the Twin Cities',
    experiencePill:   'The Twin Cities Backyard Upgrade',
    experienceImage:  '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a family backyard event in ${city}, Minnesota`,
    experiencePoints: (city) => [
      { icon: '🏡', title: 'Your Backyard Is the Venue',            desc: `No restaurant for 40 guests. No waiting rooms. Your ${city} backyard becomes a private dining space for the evening — the whole family, the whole graduating class, at the same grill.` },
      { icon: '🎓', title: 'Built for Minnesota Graduation Season', desc: `When every Twin Cities restaurant is booked for May graduation Saturdays, we come to your ${city} backyard with everything — the chef, the grill, the proteins, and the performance.` },
      { icon: '🔥', title: 'Fire Tricks and Flying Shrimp',         desc: `The onion volcano, flying shrimp, knife skills — the chef entertains every age from first flame to final plate. Kids love it. Adults love it even more.` },
      { icon: '✨', title: 'Complete Setup and Zero Cleanup',        desc: `We arrive, set up, perform, and leave your ${city} backyard exactly as we found it. You host without lifting a finger.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Backyard Hibachi Service Area — ${city} & Twin Cities Suburbs`,
    areasIntro:      [
      (city, state) => `We serve all of the Twin Cities northwest and southwest suburbs — ${city}, Maple Grove, Plymouth, Eden Prairie, Minnetonka, Lakeville, Eagan, Burnsville, and surrounding communities throughout Hennepin and Dakota County.`,
      (city) => `Most ${city} bookings confirmed same day. Graduation season (May–June) fills 4–6 weeks ahead — reserve early for any spring Saturday. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:     'Reserve Your Backyard Date',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Hibachi at Home in ${city} for Every Occasion`,
    occasionSubtext: `From Twin Cities graduation parties to neighborhood block events — backyard entertaining with a certified teppanyaki chef.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `${city}, ${abbr} Backyard Hibachi FAQs`,
    testimonialSubheading: `What Twin Cities graduation hosts and backyard entertainers are saying`,
  },
  // Theme 3 — River & Lakes / St. Paul
  {
    heroPill:         'Private Hibachi in the Twin Cities East',
    experiencePill:   'The St. Paul Home Dining Upgrade',
    experienceImage:  '/pics/hibachi-shot-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a home dinner event in ${city}, Minnesota`,
    experiencePoints: (city) => [
      { icon: '🏡', title: 'Your Home Is the Restaurant',         desc: `The Summit Avenue patio, the Cathedral Hill backyard, the Woodbury deck — wherever your group gathers in ${city}, your certified teppanyaki chef arrives and performs exclusively for your guests.` },
      { icon: '🔥', title: 'Live Teppanyaki at Your Property',    desc: `Fire tricks, precision knife work, and 90–120 minutes of live cooking from first flame to final plate. Your outdoor space becomes the finest dining room in the neighborhood.` },
      { icon: '🎉', title: 'Built for Every Occasion',            desc: `Retirement parties, anniversary dinners, bachelorette weekends, and birthday celebrations — the private hibachi format is built for exactly the ${city} gathering that deserves more than a restaurant table.` },
      { icon: '✨', title: 'Full Setup and Complete Cleanup',      desc: `We arrive, perform, and leave your ${city} property spotless. You hosted an extraordinary dinner and didn't wash a single dish.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Private Hibachi Service Area — ${city} & East Metro`,
    areasIntro:      [
      (city, state) => `We serve ${city} and the full Twin Cities east and south metro — St. Paul, Woodbury, Eagan, Burnsville, Inver Grove Heights, Cottage Grove, and surrounding Washington and Dakota County communities.`,
      (city) => `Most ${city} bookings confirmed same day. Summer and bachelorette weekend events book 2–3 weeks ahead. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:     'Reserve Your St. Paul Date',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Hibachi at Home in ${city} for Every Occasion`,
    occasionSubtext: `From St. Paul Summit Avenue dinner parties to Woodbury retirement celebrations — the full teppanyaki experience at your Twin Cities home.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `${city}, ${abbr} Private Hibachi FAQs`,
    testimonialSubheading: `What St. Paul and East Metro hosts are saying about private hibachi at home`,
  },
  // Theme 4 — Rochester / Medical
  {
    heroPill:         'Rochester\'s Private Hibachi Chef',
    experiencePill:   'Rochester\'s Private Dining Standard',
    experienceImage:  '/pics/private-party-chef-6.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a milestone dinner event in Rochester, Minnesota`,
    experiencePoints: (city) => [
      { icon: '🎓', title: 'Built for Rochester\'s Milestones',       desc: `Medical school match days. Fellowship completions. Residency graduation. Family reunions for Mayo Clinic families. Rochester celebrates milestones that matter, and a private hibachi chef delivers the dinner that matches.` },
      { icon: '🏡', title: 'Your Rochester Home Is the Setting',      desc: `Cascade Lake, Quarry Hill, Byron, Stewartville — wherever your property is in southeast Minnesota, we arrive with the grill and deliver the full teppanyaki performance in your backyard.` },
      { icon: '🔥', title: 'Live Teppanyaki Performance',             desc: `Fire tricks, precision knife work, and 90–120 minutes of live cooking. Every plate cooked to order from first flame to finish.` },
      { icon: '✨', title: 'Zero Cleanup for You',                    desc: `Your chef arrives, performs, and leaves your Rochester property spotless. The milestone dinner ends with nothing left to manage — just the memory.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Private Hibachi Service Area — Rochester & Southeast Minnesota`,
    areasIntro:      [
      (city, state) => `We serve Rochester and all surrounding southeast Minnesota communities — Byron, Stewartville, Kasson, Pine Island, Zumbrota, and throughout Olmsted County. Most Rochester properties are within our standard service radius.`,
      (city) => `Most Rochester quotes confirmed same day. May graduation season fills 4–6 weeks ahead — book early for any spring Saturday. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:     'Book Your Rochester Event',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `Private Hibachi in Rochester for Every Occasion`,
    occasionSubtext: `From Mayo Clinic family graduation dinners to anniversary celebrations near Byron — the full teppanyaki experience at your Rochester home.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `Rochester, ${abbr} Private Hibachi FAQs`,
    testimonialSubheading: `What Rochester families and southeast Minnesota hosts are saying about private hibachi at home`,
  },
  // Theme 5 — Destination / Duluth
  {
    heroPill:         'Duluth & North Shore Hibachi',
    experiencePill:   'Your Rental Deck Becomes the Restaurant',
    experienceImage:  '/pics/mobile-hibachi.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef performing at a Duluth or North Shore vacation rental deck`,
    experiencePoints: (city) => [
      { icon: '🌊', title: 'The Rental Deck Becomes the Restaurant', desc: `Your Canal Park vacation rental, your North Shore cabin, your Lake Superior bluff property — wherever your group is staying, your certified teppanyaki chef arrives and performs on your deck or outdoor space.` },
      { icon: '🔥', title: 'Live Fire on Lake Superior',              desc: `Fire tricks, flying shrimp, and 90–120 minutes of teppanyaki with Lake Superior as the backdrop. The Duluth group experience that nobody forgets.` },
      { icon: '🎉', title: 'Built for Duluth Group Occasions',        desc: `Bachelorette weekends, family reunions, corporate retreats, milestone birthday trips — the private hibachi format is built for exactly the Duluth group that wants the dinner to match the destination.` },
      { icon: '✨', title: 'Self-Contained and Spotless Cleanup',     desc: `Fully self-contained propane grill — no gas hookup needed at any Duluth rental. Complete cleanup when dinner is done. Your rental is immaculate and the security deposit is safe.` },
    ],
    areasPill:       'Service Area',
    areasHeadline:   (city) => `Mobile Hibachi Service Area — Duluth & the North Shore`,
    areasIntro:      [
      (city, state) => `We serve the Duluth and North Shore corridor — Canal Park, Park Point, Duluth Heights, Two Harbors, Silver Bay, and vacation rental communities throughout the Lake Superior region. Travel details are disclosed upfront for any North Shore location.`,
      (city) => `Duluth peak-season weekends (July, fall color season) fill 4–6 weeks ahead. Off-season events confirm 1–2 weeks out. Call or text (201) 565-3878 to check your date.`,
    ],
    areasButton:     'Check Duluth Availability',
    occasionPill:    'Occasions',
    occasionHeadline: (city) => `North Shore Hibachi for Every Group Occasion`,
    occasionSubtext: `From Duluth Canal Park bachelorette weekends to North Shore family reunion cabins — the full teppanyaki experience at your Lake Superior rental.`,
    faqPill:         'FAQ',
    faqHeadline:     (city, abbr) => `Duluth & North Shore Mobile Hibachi FAQs`,
    testimonialSubheading: `What Duluth vacation rental groups and North Shore cabin guests are saying about private hibachi`,
  },
]

// ── City experience image map ──────────────────────────────────────────────────
// Rule: each city src MUST differ from MN_IMAGE_THEMES[v].heroImage
//       MN_SUPPORT_IMAGES testimonial.src MUST differ from this src
//       MN_SUPPORT_IMAGES cta.src MUST differ from both
const MN_CITY_IMAGE_MAP = {
  // Batch 1
  'edina':      { src: '/pics/hibachi-private-chef-1.jpg', alt: (city) => `Private hibachi chef at an Edina, MN estate dinner party` },
  'wayzata':    { src: '/pics/hibachi-hart.jpg',           alt: (city) => `Private hibachi chef at a Wayzata, MN lake property event` },
  'minnetonka': { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Private hibachi chef at a Minnetonka, MN home celebration` },
  'rochester':  { src: '/pics/private-party-chef-6.jpg',   alt: (city) => `Private hibachi chef at a Rochester, MN milestone dinner` },
  'duluth':       { src: '/pics/mobile-hibachi.jpg',         alt: (city) => `Mobile hibachi chef at a Duluth vacation rental deck` },
  // Batch 2
  'minneapolis':  { src: '/pics/hibachi-event.jpg',          alt: (city) => `Private hibachi chef at a corporate event in Minneapolis, Minnesota` },
  'eden-prairie': { src: '/pics/private-event-4.jpg',        alt: (city) => `Private hibachi chef at an Eden Prairie estate dinner party` },
  'maple-grove':  { src: '/pics/backyard-hibachi.jpg',       alt: (city) => `Private hibachi chef at a backyard graduation party in Maple Grove, MN` },
  // Batch 3
  'st-paul':      { src: '/pics/hibachi-shot-2.jpg',         alt: (city) => `Private hibachi chef at a home dinner party in St. Paul, Minnesota` },
  'woodbury':     { src: '/pics/hibachi-at-home.jpg',        alt: (city) => `Private hibachi chef at a Woodbury, MN home celebration` },
  // Batch 4
  'stillwater':   { src: '/pics/traveling-hibachi.jpg',      alt: (city) => `Mobile hibachi chef at a Stillwater, MN St. Croix River vacation rental` },
  'brainerd':     { src: '/pics/mobile-hibachi-2.jpg',       alt: (city) => `Mobile hibachi chef at a Brainerd Lakes cabin event` },
}

// ── Support images (Batch 1 city-specific) ────────────────────────────────────
const MN_SUPPORT_IMAGES = {
  'edina': {
    testimonial: { src: '/pics/hibachi-pool-party.jpg',   alt: (city) => `Happy guests at a private hibachi dinner in Edina, MN`,                caption: '' },
    cta:         { src: '/pics/private-event-4.jpg',      alt: (city) => `Private hibachi chef experience in Edina, Minnesota` },
  },
  'wayzata': {
    testimonial: { src: '/pics/private-chef-2.jpg',       alt: (city) => `Private hibachi chef performing at a Wayzata, MN lake event`,          caption: '' },
    cta:         { src: '/pics/hibachi-to-you-2.jpg',     alt: (city) => `Hibachi chef at a Wayzata, Minnesota lakeside dinner` },
  },
  'minnetonka': {
    testimonial: { src: '/pics/hibachi-event.jpg',        alt: (city) => `Guests enjoying a private hibachi dinner in Minnetonka, MN`,            caption: '' },
    cta:         { src: '/pics/backyard-hibachi.jpg',     alt: (city) => `Backyard hibachi chef in Minnetonka, Minnesota` },
  },
  'rochester': {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',   alt: (city) => `Private hibachi chef at a Rochester, MN graduation dinner`,            caption: '' },
    cta:         { src: '/pics/hibachi-chef-home.jpg',    alt: (city) => `Private hibachi chef at a Rochester, Minnesota home event` },
  },
  'duluth': {
    testimonial: { src: '/pics/hibachi-in-garage.jpg',    alt: (city) => `Private hibachi chef cooking at a Duluth, MN vacation rental event`,   caption: '' },
    cta:         { src: '/pics/traveling-hibachi.jpg',    alt: (city) => `Mobile hibachi chef traveling to a Duluth or North Shore rental` },
  },
}

// ── Support image fallbacks (one per theme) ────────────────────────────────────
const MN_SUPPORT_FALLBACKS = [
  { testimonial: { src: '/pics/hibachi-pool-party.jpg',   alt: (city) => `Private hibachi chef in ${city}, MN`,  caption: '' }, cta: { src: '/pics/private-event-4.jpg',    alt: (city) => `Hibachi experience in ${city}, Minnesota` } },   // T0
  { testimonial: { src: '/pics/hibachi-event.jpg',        alt: (city) => `Corporate hibachi in ${city}, MN`,     caption: '' }, cta: { src: '/pics/hibachi-to-you-2.jpg',   alt: (city) => `Corporate hibachi in ${city}, Minnesota` } },    // T1
  { testimonial: { src: '/pics/backyard-hibachi.jpg',     alt: (city) => `Backyard hibachi chef in ${city}, MN`, caption: '' }, cta: { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Hibachi at home in ${city}, Minnesota` } },     // T2
  { testimonial: { src: '/pics/hibachi-shot-2.jpg',       alt: (city) => `Private hibachi in ${city}, MN`,       caption: '' }, cta: { src: '/pics/hibachi-at-home.jpg',    alt: (city) => `Hibachi at home in ${city}, Minnesota` } },     // T3
  { testimonial: { src: '/pics/hibachi-catering-3.jpg',   alt: (city) => `Private hibachi in ${city}, MN`,       caption: '' }, cta: { src: '/pics/hibachi-chef-home.jpg',  alt: (city) => `Hibachi at home in ${city}, Minnesota` } },    // T4
  { testimonial: { src: '/pics/mobile-hibachi-2.jpg',     alt: (city) => `Mobile hibachi near ${city}, MN`,      caption: '' }, cta: { src: '/pics/traveling-hibachi.jpg',  alt: (city) => `Mobile hibachi near ${city}, Minnesota` } },   // T5
]

// ── Nearby major cities (indexed by v) ────────────────────────────────────────
const MN_NEARBY_MAJOR = [
  ['Minneapolis', 'Wayzata', 'Minnetonka', 'Eden Prairie', 'Bloomington', 'Plymouth'],     // v=0 Luxury
  ['Minneapolis', 'Bloomington', 'Eden Prairie', 'Minnetonka', 'Maple Grove', 'Plymouth'], // v=1 Urban/Corporate
  ['Minneapolis', 'Maple Grove', 'Plymouth', 'Eden Prairie', 'Minnetonka', 'Bloomington'], // v=2 Suburban/Family
  ['St. Paul', 'Minneapolis', 'Woodbury', 'Eagan', 'Burnsville', 'Inver Grove Heights'],   // v=3 River & Lakes
  ['Minneapolis', 'St. Paul', 'Austin, MN', 'La Crosse, WI', 'Winona'],                    // v=4 Rochester/Medical
  ['Minneapolis', 'St. Paul', 'Two Harbors', 'Superior, WI', 'Cloquet'],                   // v=5 Destination/Duluth
]

// ── Blog posts ─────────────────────────────────────────────────────────────────
// variant = v % 3, so themes 0+3 share array 0, themes 1+4 share array 1, themes 2+5 share array 2
const MN_BLOG_POSTS = [
  // Array 0 (v%3=0) — Luxury & River & Lakes themes
  [
    { slug: 'what-to-expect-hibachi-chef-home',   title: 'What to Expect When You Book a Private Hibachi Chef at Home',                excerpt: 'Twin Cities luxury hosts — what happens from booking through cleanup at an estate or lakeside hibachi event.', date: '2024-11-20' },
    { slug: 'hibachi-at-home-vs-restaurant',      title: 'Hibachi at Home vs. Restaurant: Why Twin Cities Hosts Choose Private',        excerpt: 'Why estate and lake property hosts in Edina, Wayzata, and Minnetonka choose private hibachi over the best Twin Cities restaurants.', date: '2025-01-22' },
    { slug: 'hibachi-bachelorette-party',         title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',                excerpt: 'Twin Cities bachelorette weekends — why private hibachi at your rental or estate is the best dinner of the trip.', date: '2025-02-10' },
  ],
  // Array 1 (v%3=1) — Urban/Corporate & Medical themes
  [
    { slug: 'how-much-does-private-hibachi-cost', title: 'How Much Does a Private Hibachi Chef Cost?',                                  excerpt: 'A full pricing breakdown for Twin Cities corporate and milestone hibachi events — what\'s included and what to expect.', date: '2025-01-15' },
    { slug: 'what-to-expect-hibachi-chef-home',   title: 'What to Expect When You Book a Private Hibachi Chef at Home',                excerpt: 'Rochester and Minneapolis corporate hosts — what happens from booking through cleanup at your milestone or office hibachi event.', date: '2024-11-20' },
    { slug: 'hibachi-birthday-party-ideas',       title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',               excerpt: 'Rochester families and Twin Cities corporate teams — how to plan a private hibachi milestone event everyone remembers.', date: '2025-04-08' },
  ],
  // Array 2 (v%3=2) — Suburban/Family & Destination themes
  [
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',                excerpt: 'Everything Twin Cities suburban and Duluth vacation rental hosts need before the private hibachi chef arrives.', date: '2025-02-28' },
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',             excerpt: 'Maple Grove, Plymouth, and Duluth vacation groups — how to plan the backyard or cabin hibachi party everyone remembers.', date: '2025-04-08' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                               excerpt: 'A full pricing breakdown for Twin Cities suburban and North Shore hibachi events — what\'s included.', date: '2025-01-15' },
  ],
]

// ── Major cities (all batches) ────────────────────────────────────────────────
const MN_MAJOR_CITIES = {
  // Batch 1
  'edina':        { v: 0, profileIdx: 0,  nearby: ['Richfield', 'Bloomington', 'Eden Prairie', 'Hopkins', 'Minnetonka'] },
  'wayzata':      { v: 0, profileIdx: 1,  nearby: ['Minnetonka', 'Orono', 'Plymouth', 'Long Lake', 'Mound'] },
  'minnetonka':   { v: 0, profileIdx: 2,  nearby: ['Wayzata', 'Eden Prairie', 'Plymouth', 'Hopkins', 'St. Louis Park'] },
  'rochester':    { v: 4, profileIdx: 3,  nearby: ['Byron', 'Stewartville', 'Kasson', 'Pine Island', 'Zumbrota'] },
  'duluth':       { v: 5, profileIdx: 4,  nearby: ['Superior, WI', 'Two Harbors', 'Cloquet', 'Hermantown', 'Proctor'] },
  // Batch 2
  'minneapolis':  { v: 1, profileIdx: 5,  nearby: ['Bloomington', 'Edina', 'St. Paul', 'Eden Prairie', 'Minnetonka'] },
  'bloomington':  { v: 1, profileIdx: 6,  nearby: ['Edina', 'Minneapolis', 'Eden Prairie', 'Richfield', 'Burnsville'] },
  'eden-prairie': { v: 0, profileIdx: 7,  nearby: ['Minnetonka', 'Bloomington', 'Edina', 'Chaska', 'Chanhassen'] },
  'maple-grove':  { v: 2, profileIdx: 8,  nearby: ['Plymouth', 'Brooklyn Park', 'Osseo', 'Champlin', 'Rogers'] },
  'plymouth':     { v: 2, profileIdx: 9,  nearby: ['Minnetonka', 'Maple Grove', 'Golden Valley', 'Wayzata', 'Hopkins'] },
  // Batch 3
  'st-paul':      { v: 3, profileIdx: 10, nearby: ['Minneapolis', 'Woodbury', 'Eagan', 'Maplewood', 'Roseville'] },
  'woodbury':     { v: 3, profileIdx: 11, nearby: ['St. Paul', 'Cottage Grove', 'Oakdale', 'Maplewood', 'Stillwater'] },
  'eagan':        { v: 2, profileIdx: 12, nearby: ['Burnsville', 'Apple Valley', 'St. Paul', 'Bloomington', 'Inver Grove Heights'] },
  'burnsville':   { v: 2, profileIdx: 13, nearby: ['Eagan', 'Apple Valley', 'Lakeville', 'Bloomington', 'Savage'] },
  'lakeville':    { v: 2, profileIdx: 14, nearby: ['Burnsville', 'Apple Valley', 'Farmington', 'Rosemount', 'Savage'] },
  // Batch 4
  'stillwater':   { v: 5, profileIdx: 15, nearby: ['Woodbury', 'St. Paul', 'Hudson, WI', 'Bayport', 'Afton'] },
  'brainerd':     { v: 5, profileIdx: 16, nearby: ['Baxter', 'Nisswa', 'Pequot Lakes', 'Crosslake', 'Aitkin'] },
}

const MN_CITY_DISPLAY_NAMES = {
  'eden-prairie': 'Eden Prairie',
  'maple-grove':  'Maple Grove',
  'st-paul':      'St. Paul',
}

// ── H1 prefixes ────────────────────────────────────────────────────────────────
const MN_PROFILE_H1_PREFIXES = [
  'Hibachi at Home in',  // 0: Edina
  'Hibachi at Home in',  // 1: Wayzata
  'Hibachi at Home in',  // 2: Minnetonka
  'Hibachi at Home in',  // 3: Rochester
  'Hibachi at Home in',  // 4: Duluth
  'Hibachi at Home in',  // 5: Minneapolis (Batch 2)
  'Hibachi at Home in',  // 6: Bloomington
  'Hibachi at Home in',  // 7: Eden Prairie
  'Hibachi at Home in',  // 8: Maple Grove
  'Hibachi at Home in',  // 9: Plymouth
  'Hibachi at Home in',  // 10: St. Paul (Batch 3)
  'Hibachi at Home in',  // 11: Woodbury
  'Hibachi at Home in',  // 12: Eagan
  'Hibachi at Home in',  // 13: Burnsville
  'Hibachi at Home in',  // 14: Lakeville
  'Hibachi at Home in',  // 15: Stillwater (Batch 4)
  'Hibachi at Home in',  // 16: Brainerd
]

const MN_THEME_H1_PREFIXES = [
  'Hibachi at Home in',  // T0: Luxury
  'Hibachi at Home in',  // T1: Urban/Corporate
  'Hibachi at Home in',  // T2: Suburban/Family
  'Hibachi at Home in',  // T3: River & Lakes
  'Hibachi at Home in',  // T4: Medical/Rochester
  'Hibachi at Home in',  // T5: Destination/Duluth
]

// ── Custom meta ────────────────────────────────────────────────────────────────
const MN_CUSTOM_META = {
  'edina': {
    title: 'Hibachi at Home in Edina, MN | Private Chef Teppan Experience',
    desc:  'Private hibachi chef for Edina estate dinners, milestone birthdays, and luxury home events. Filet mignon, sea bass, full teppan performance in your backyard. Book today.',
  },
  'wayzata': {
    title: 'Hibachi at Home in Wayzata, MN | Lake Minnetonka Private Chef',
    desc:  'Private hibachi chef for Wayzata lakeside events and dinner parties. Full teppan performance at your Lake Minnetonka property. Book today.',
  },
  'minnetonka': {
    title: 'Hibachi at Home in Minnetonka, MN | Private Teppan Chef',
    desc:  'Private hibachi chef for Minnetonka home events and lake property gatherings. Live teppan performance, premium proteins, full service in your backyard. Book today.',
  },
  'rochester': {
    title: 'Hibachi at Home in Rochester, MN | Private Chef Near Mayo Clinic',
    desc:  'Private hibachi chef for Rochester milestone dinners, graduation celebrations, and family gatherings near Mayo Clinic. Book your Rochester event today.',
  },
  'duluth': {
    title: 'Hibachi at Home in Duluth, MN | North Shore Private Chef',
    desc:  'Mobile hibachi chef for Duluth vacation rentals, Canal Park events, and North Shore cabin dinners on Lake Superior. Book today.',
  },
  // Batch 2
  'minneapolis': {
    title: 'Hibachi at Home in Minneapolis, MN | Private Chef Twin Cities',
    desc:  'Private hibachi chef for Minneapolis corporate events, team dinners, and home celebrations. North Loop, Uptown, Loring Park served. Book today.',
  },
  'bloomington': {
    title: 'Hibachi at Home in Bloomington, MN | Private Chef Near MOA',
    desc:  'Private hibachi chef for Bloomington corporate events, team dinners, and backyard celebrations near Mall of America. Book today.',
  },
  'eden-prairie': {
    title: 'Hibachi at Home in Eden Prairie, MN | Private Estate Chef',
    desc:  'Private hibachi chef for Eden Prairie estate dinners, corporate client events, and family celebrations near Round Lake. Book today.',
  },
  'maple-grove': {
    title: 'Hibachi at Home in Maple Grove, MN | Backyard Hibachi Chef',
    desc:  'Private hibachi chef for Maple Grove graduation parties, backyard celebrations, and family events in the northwest Twin Cities suburbs. Book today.',
  },
  'plymouth': {
    title: 'Hibachi at Home in Plymouth, MN | Private Hibachi Chef',
    desc:  'Private hibachi chef for Plymouth graduation parties, backyard events, and family milestones near Medicine Lake. Book today.',
  },
  // Batch 3
  'st-paul': {
    title: 'Hibachi at Home in St. Paul, MN | Private Chef Summit Ave',
    desc:  'Private hibachi chef for St. Paul home dinner parties, bachelorette weekends, and anniversary celebrations. Summit Ave, Grand Ave, Highland Park served. Book today.',
  },
  'woodbury': {
    title: 'Hibachi at Home in Woodbury, MN | Private Hibachi Chef',
    desc:  'Private hibachi chef for Woodbury home events, family milestone dinners, and backyard celebrations in the east Twin Cities metro. Book today.',
  },
  'eagan': {
    title: 'Hibachi at Home in Eagan, MN | Backyard Hibachi Chef',
    desc:  'Private hibachi chef for Eagan graduation parties, family milestones, and backyard events in the south Twin Cities metro. Book today.',
  },
  'burnsville': {
    title: 'Hibachi at Home in Burnsville, MN | Private Hibachi Chef',
    desc:  'Private hibachi chef for Burnsville backyard parties, graduation celebrations, and family events near Crystal Lake. Book today.',
  },
  'lakeville': {
    title: 'Hibachi at Home in Lakeville, MN | Private Hibachi Chef',
    desc:  'Private hibachi chef for Lakeville graduation parties, milestone birthdays, and family events in Minnesota\'s fastest-growing south metro city. Book today.',
  },
  // Batch 4
  'stillwater': {
    title: 'Hibachi at Home in Stillwater, MN | St. Croix Private Chef',
    desc:  'Mobile hibachi chef for Stillwater vacation rentals, river property dinners, and weekend getaway events along the St. Croix. Book today.',
  },
  'brainerd': {
    title: 'Hibachi at Home in Brainerd, MN | Lakes Country Private Chef',
    desc:  'Mobile hibachi chef for Brainerd Lakes cabin events, resort stays, and family reunion dinners in Minnesota lake country. Book today.',
  },
}

// ── Closing variants (MN generic 322–327) ─────────────────────────────────────
export const MN_CLOSING_VARIANTS = [
  // 322 — Luxury generic
  {
    headline: (city) => `Your ${city} Estate Dinner Starts Here`,
    sub:      (city) => `A certified teppanyaki chef. Premium proteins including filet mignon and Chilean sea bass. Full setup and zero cleanup. Starting at $60 per adult in ${city}, Minnesota.`,
    urgency:  `Twin Cities summer and holiday dates book 2–4 weeks out. Reserve your evening now.`,
  },
  // 323 — Urban/Corporate generic
  {
    headline: (city) => `${city} Corporate Event — Book Your Chef`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup for your ${city} corporate event or team dinner. From $60 per adult.`,
    urgency:  `Twin Cities corporate events and holiday parties book 4–6 weeks ahead in peak season. Confirm your date now.`,
  },
  // 324 — Suburban/Family generic
  {
    headline: (city) => `${city}'s Best Backyard Party — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your ${city} backyard. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Twin Cities graduation weekends (May–June) fill 4–6 weeks ahead. Secure your date now.`,
  },
  // 325 — River & Lakes generic
  {
    headline: (city) => `${city} Private Hibachi — Book It`,
    sub:      (city) => `Certified teppanyaki chef for groups of 10–60+ in ${city}. All proteins, full performance, complete setup and cleanup. From $60/adult.`,
    urgency:  `Twin Cities summer events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 326 — Medical/Rochester generic
  {
    headline: (city) => `Rochester Milestone Dinner — Reserve Your Chef`,
    sub:      (city) => `A certified hibachi chef travels to your Rochester home. Full setup, all proteins, premium upgrades available, complete cleanup. From $60/adult.`,
    urgency:  `Rochester graduation season (May–June) fills 4–6 weeks ahead. Secure your date now.`,
  },
  // 327 — Destination/Duluth generic
  {
    headline: (city) => `Duluth & North Shore Hibachi — Book Your Date`,
    sub:      (city) => `A certified mobile hibachi chef comes to your ${city} vacation rental or cabin — grill, ingredients, full show, complete cleanup. From $60/adult.`,
    urgency:  `Duluth summer and fall color season weekends fill fast. Reserve your Lake Superior event now.`,
  },
]

// ── City-specific closings (MN city-specific 328–332, Batch 1) ────────────────
export const MN_CITY_CLOSINGS = [
  // 328 — Edina (profileIdx 0)
  {
    headline: () => `Edina's Private Dining Standard — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Edina estate or patio — Country Club, Morningside, or anywhere in south Minneapolis. Premium proteins, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Edina estate events book 2–4 weeks ahead. Reserve your date now.`,
  },
  // 329 — Wayzata (profileIdx 1)
  {
    headline: () => `Wayzata Lake Minnetonka Hibachi — Reserve Your Chef`,
    sub:      () => `A certified hibachi chef at your Wayzata lakeside property. Hand-selected proteins, full teppan performance, complete cleanup. From $60/adult.`,
    urgency:  `Wayzata summer lake season events book 2–4 weeks ahead. Secure your date now.`,
  },
  // 330 — Minnetonka (profileIdx 2)
  {
    headline: () => `Minnetonka's Best Dinner Party — Book It`,
    sub:      () => `A certified teppanyaki chef at your Minnetonka home. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Minnetonka summer lake events fill 2–3 weeks ahead. Secure your date now.`,
  },
  // 331 — Rochester (profileIdx 3)
  {
    headline: () => `Rochester Milestone Dinner — Don't Wait`,
    sub:      () => `A certified hibachi chef comes to your Rochester home. Full setup, premium proteins available, complete cleanup. From $60/adult.`,
    urgency:  `Rochester graduation weekends fill fast — book 4–6 weeks ahead for any May or June Saturday.`,
  },
  // 332 — Duluth (profileIdx 4)
  {
    headline: () => `Duluth Vacation Rental Hibachi — Book Your Date`,
    sub:      () => `A certified mobile hibachi chef comes to your Canal Park or North Shore rental — grill, ingredients, full show, complete cleanup. From $60/adult.`,
    urgency:  `Duluth summer and fall weekends fill fast. Reserve your North Shore hibachi event now.`,
  },
  // 333 — Minneapolis (profileIdx 5)
  {
    headline: () => `Minneapolis Private Hibachi — Book Your Chef`,
    sub:      () => `A certified teppanyaki chef for your Minneapolis corporate event, team dinner, or home celebration. Full setup, all proteins, complete cleanup. From $60/adult.`,
    urgency:  `Minneapolis holiday party season (Nov–Dec) fills 4–6 weeks ahead. Corporate dates move fast — reserve now.`,
  },
  // 334 — Bloomington (profileIdx 6)
  {
    headline: () => `Bloomington Corporate Hibachi — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Bloomington team event or backyard celebration. Fully self-contained setup, all proteins, complete cleanup. From $60/adult.`,
    urgency:  `Bloomington corporate events and holiday parties book 3–5 weeks ahead in peak season. Confirm your date now.`,
  },
  // 335 — Eden Prairie (profileIdx 7)
  {
    headline: () => `Eden Prairie Estate Hibachi — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Eden Prairie estate or lake property. Premium proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Eden Prairie summer lake events book 2–4 weeks ahead. Secure your date now.`,
  },
  // 336 — Maple Grove (profileIdx 8)
  {
    headline: () => `Maple Grove Backyard Hibachi — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Maple Grove backyard. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Maple Grove graduation Saturdays (May–June) fill 4–6 weeks ahead. Secure your spring date now.`,
  },
  // 337 — Plymouth (profileIdx 9)
  {
    headline: () => `Plymouth Backyard Hibachi — Book It`,
    sub:      () => `A certified teppanyaki chef at your Plymouth home. All proteins, full teppan performance, complete cleanup. From $60/adult.`,
    urgency:  `Plymouth graduation season and summer weekends book 3–5 weeks ahead. Reserve your date now.`,
  },
  // 338 — St. Paul (profileIdx 10)
  {
    headline: () => `St. Paul Private Hibachi — Book Your Chef`,
    sub:      () => `A certified teppanyaki chef at your St. Paul home, Summit Avenue property, or Cathedral Hill rental. Full performance, all proteins, complete cleanup. From $60/adult.`,
    urgency:  `St. Paul summer and bachelorette weekend dates book 2–3 weeks ahead. Confirm your evening now.`,
  },
  // 339 — Woodbury (profileIdx 11)
  {
    headline: () => `Woodbury Private Hibachi — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef at your Woodbury home. All proteins, complete setup, full performance, professional cleanup. From $60/adult.`,
    urgency:  `Woodbury summer events and holiday parties book 2–4 weeks ahead. Secure your date now.`,
  },
  // 340 — Eagan (profileIdx 12)
  {
    headline: () => `Eagan Backyard Hibachi — Book Your Date`,
    sub:      () => `A certified teppanyaki chef at your Eagan backyard. All proteins, full teppan show, complete cleanup. From $60/adult.`,
    urgency:  `Eagan graduation weekends (May–June) book 4–6 weeks ahead. Secure your spring date now.`,
  },
  // 341 — Burnsville (profileIdx 13)
  {
    headline: () => `Burnsville Backyard Hibachi — Reserve Your Chef`,
    sub:      () => `A certified teppanyaki chef for your Burnsville backyard event. Full setup, all proteins, fire performance, complete cleanup. From $60/adult.`,
    urgency:  `Burnsville summer and graduation dates fill 3–5 weeks ahead. Reserve your date now.`,
  },
  // 342 — Lakeville (profileIdx 14)
  {
    headline: () => `Lakeville Backyard Hibachi — Book It`,
    sub:      () => `A certified teppanyaki chef at your Lakeville home. All proteins, full teppan performance, complete cleanup. From $60/adult.`,
    urgency:  `Lakeville graduation weekends book 4–6 weeks ahead. Secure your spring date now.`,
  },
  // 343 — Stillwater (profileIdx 15)
  {
    headline: () => `Stillwater St. Croix Hibachi — Book Your Date`,
    sub:      () => `A certified mobile hibachi chef comes to your Stillwater vacation rental or river property. Full setup, all proteins, complete cleanup. From $60/adult.`,
    urgency:  `Stillwater summer and fall color season weekends fill 3–5 weeks ahead. Reserve your river event now.`,
  },
  // 344 — Brainerd (profileIdx 16)
  {
    headline: () => `Brainerd Lakes Hibachi — Reserve Your Chef`,
    sub:      () => `A certified mobile hibachi chef travels to your Brainerd Lakes cabin or resort property. Full setup, all proteins, complete cleanup. From $60/adult.`,
    urgency:  `Brainerd summer weekends (June–August) fill 4–6 weeks ahead. Book your lake cabin hibachi event now.`,
  },
]

// ── Intro variants (MN generic 322–327) ───────────────────────────────────────
export const MN_INTRO_VARIANTS = [
  // 322 — Luxury generic
  {
    headline: (city) => `Private Hibachi in ${city}: The Twin Cities Estate & Lake Property Experience`,
    opening:  (city) => `${city} sets the standard for Twin Cities entertaining — the lake estates of Country Club and Interlachen, the contemporary homes off 50th & France, the lakeside properties on Lake Minnetonka that attract the region's most discerning hosts. Private hibachi at your ${city} home brings a certified teppanyaki chef to your estate or patio with the full setup, hand-selected proteins including filet mignon and Chilean sea bass, and a live-fire performance that elevates the evening to a category no restaurant can reach.`,
    middle:   (city) => `Your chef arrives with everything: propane teppan grill, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20–30 minutes on your deck, patio, or lawn. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your ${city} guests. For gatherings over 25, we deploy dual chef stations. Full professional cleanup when dinner is done.`,
    closing:  (city) => `${city} events book 2–4 weeks ahead. Summer lake season and holiday dates fill faster. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 323 — Urban/Corporate generic
  {
    headline: (city) => `Corporate Hibachi in ${city}: The Twin Cities Team Dinner Standard`,
    opening:  (city) => `The Twin Cities corporate community has made private hibachi the team event format that outperforms every restaurant option — and ${city} is where that standard lives. From North Loop rooftops to Bloomington corporate campuses, the format is simple: the chef arrives, sets up the teppan station at your outdoor venue, and performs for your entire team at once. No split checks, no shared dining rooms, no reservations that seat half the group at one time and half an hour later. Private hibachi in ${city} gives your team an evening together — fire, food, and a performance that gives everyone something to talk about long after the event.`,
    middle:   (city) => `Your chef arrives with everything: teppan grill, propane, all fresh proteins and ingredients, fried rice, vegetables, house-made sauces, plates, and chopsticks. For corporate events over 25 guests, we bring two chef stations running simultaneously. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  (city) => `${city} corporate events and holiday parties book 4–6 weeks ahead in peak season. Starting at $60/adult, $30/child, $600 event minimum. Corporate quotes returned within 24 hours.`,
  },
  // 324 — Suburban/Family generic
  {
    headline: (city) => `Hibachi at Home in ${city}: The Twin Cities Backyard Graduation & Milestone Dinner`,
    opening:  (city) => `${city} and the surrounding Twin Cities suburbs have built a graduation culture that grows every spring — the families who planned the backyard party six weeks out, the households who discovered that a private hibachi chef serves 40 guests better than any restaurant reservation, and the graduation parties that turned into the dinner everyone is still referencing at Thanksgiving. Hibachi at home in ${city} brings a certified teppanyaki chef to your backyard with the full setup and a live-fire cooking performance that turns any Twin Cities gathering into the event your guests plan around.`,
    middle:   (city) => `Your chef arrives with everything: teppan grill, propane, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes in your backyard. The show runs 90–120 minutes from first flame to final plate — fire volcano, flying shrimp, and every plate cooked to order. For graduation parties over 25, we bring two chef stations. Zero cleanup for the host when dinner is done.`,
    closing:  (city) => `${city} graduation weekends (May–June) book 4–6 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 325 — River & Lakes generic
  {
    headline: (city) => `Private Hibachi in ${city}: Twin Cities Home Entertaining at Its Best`,
    opening:  (city) => `${city} hosts home dinner parties, bachelorette weekends, anniversary celebrations, and retirement gatherings that deserve an evening better than a restaurant can provide. Private hibachi at your ${city} home brings a certified teppanyaki chef to your property — your patio, your backyard, your deck — with the full setup and a live-fire performance that gives your guests an experience they can't recreate anywhere else in the Twin Cities.`,
    middle:   (city) => `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. For ${city} events over 20 guests, we recommend two chef stations. Full cleanup when dinner is done.`,
    closing:  (city) => `${city} events book 2–3 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 326 — Medical/Rochester generic
  {
    headline: (city) => `Private Hibachi in Rochester: Southeast Minnesota's Milestone Dining Standard`,
    opening:  (city) => `Rochester hosts milestones that matter in a way that few cities do. The day a family member matches at Mayo Clinic. The evening a fellowship completes and the whole family is in town. The anniversary dinner for a couple that moved here for a career at the medical center and built a life in southeast Minnesota. Private hibachi at your Rochester home brings a certified teppanyaki chef to your property with the full setup, hand-selected proteins, and a live-fire performance built for the occasion your guests have been waiting for.`,
    middle:   (city) => `Your chef arrives with everything: propane teppan grill, hand-selected proteins — filet mignon and lobster tail upgrades available for milestone occasions — fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  (city) => `Rochester graduation season (May–June) and spring milestones book 4–6 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. Most Rochester quotes confirmed same day.`,
  },
  // 327 — Destination/Duluth generic
  {
    headline: (city) => `Mobile Hibachi in ${city}: The Lake Superior Vacation Rental Dinner Experience`,
    opening:  (city) => `Duluth brings groups from across the Midwest — the Canal Park vacation rental crowd, North Shore cabin families, bachelorette weekends choosing Lake Superior over the usual destinations. The challenge with planning a group dinner in Duluth is universal: the good restaurants don't accommodate the whole group at once, and moving 20 people means coordinating logistics nobody wants during a vacation. Mobile hibachi at your ${city} vacation rental or cabin solves it. The chef comes to the property, sets up on your deck with a fully self-contained propane teppan grill, and performs for your group — Lake Superior as the backdrop — for 90–120 minutes.`,
    middle:   (city) => `Your chef arrives with everything: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. No gas hookup needed at any Duluth rental or North Shore cabin. Setup takes 20 minutes. The show runs 90–120 minutes from first flame to final plate. Complete cleanup when dinner is done — your rental is immaculate.`,
    closing:  (city) => `${city} peak-season dates (July, fall color season) fill 4–6 weeks ahead. Travel is factored into your quote at booking. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
]

// ── City-specific intros (MN city-specific 328–332, Batch 1) ──────────────────
export const MN_CITY_INTROS = [
  // 328 — Edina (profileIdx 0)
  {
    headline: () => `Private Hibachi Chef in Edina`,
    opening:  () =>
      `Edina doesn't need an introduction. Consistently ranked among Minnesota's most affluent communities — home to the 50th & France district that defines Twin Cities luxury retail, the Country Club neighborhood whose estate properties set the standard for private entertaining south of the lake, and the Centennial Lakes-area homes that attract the professional and executive community that expects a quality of dining occasion their neighbors' restaurant reservations simply can't match. A certified private hibachi chef at your Edina estate or patio brings the full teppanyaki performance directly to your property. The format this address was built for.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, hand-selected proteins — filet mignon, Chilean sea bass, wagyu, and lobster tail available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20–30 minutes on your estate patio, deck, or lawn. The performance runs 90–120 minutes from first flame to final plate. Every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Edina property is spotless when the chef leaves.`,
    closing:  () =>
      `Edina evenings book 2–4 weeks ahead. Country Club, Morningside, Highlands, and all Edina neighborhoods are within our standard service radius. Serving Edina and the full Twin Cities luxury corridor — Wayzata, Minnetonka, Eden Prairie, and Bloomington. Starting at $60/adult, $600 minimum. Premium protein packages available.`,
  },
  // 329 — Wayzata (profileIdx 1)
  {
    headline: () => `Private Hibachi Chef in Wayzata`,
    opening:  () =>
      `Wayzata is Lake Minnetonka. The boutique downtown that has drawn Twin Cities residents for summer weekends since the railroad era. The lakefront properties that define western Hennepin County luxury. The Orono and Long Lake communities that chose this corridor because the setting is exactly what it is — and because the hosting culture here expects an evening at a quality that a restaurant drive from the lake can't reliably deliver. A certified private hibachi chef at your Wayzata property brings the full teppanyaki performance to your lakeside home, your patio, or your deck with everything included — the grill, the proteins, the fire, and the show.`,
    middle:   () =>
      `Your chef arrives fully equipped: propane teppan grill, hand-selected proteins including filet mignon and sea bass, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, knife work, and every dish cooked to order in front of your Wayzata guests. Lakefront decks, enclosed patios, and backyard lawns all work. Full cleanup when dinner is done.`,
    closing:  () =>
      `Wayzata lake season events book 2–4 weeks ahead. Serving Wayzata, Orono, Long Lake, Mound, Minnetrista, and the full Lake Minnetonka corridor. Starting at $60/adult, $600 minimum. Premium protein packages available.`,
  },
  // 330 — Minnetonka (profileIdx 2)
  {
    headline: () => `Private Hibachi Chef in Minnetonka`,
    opening:  () =>
      `Minnetonka is where Twin Cities suburban life meets lake country luxury — the Hopkins and St. Louis Park families who moved west for the school systems and the space, the executives along Plymouth Road and Minnetonka Boulevard who chose the community for its access to both downtown and the lake, and the estate properties near the Minnetonka Mills corridor that attract the professional community who hosts at the level their homes were built for. Private hibachi at your Minnetonka home brings a certified teppanyaki chef to your patio, deck, or backyard with everything included — the grill, the premium proteins, and a live-fire performance that turns any Minnetonka gathering into the dinner your guests plan their schedule around.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20–30 minutes in your outdoor space. The performance runs 90–120 minutes from first flame to final plate. For Minnetonka events over 25, we bring two chef stations. Full cleanup when dinner is done — your property is immaculate when the chef leaves.`,
    closing:  () =>
      `Minnetonka events book 2–4 weeks ahead. Serving Minnetonka, Wayzata, Eden Prairie, Plymouth, Hopkins, and the full western Hennepin County corridor. Starting at $60/adult, $600 minimum. Premium protein packages available.`,
  },
  // 331 — Rochester (profileIdx 3)
  {
    headline: () => `Private Hibachi Chef in Rochester`,
    opening:  () =>
      `Rochester is a city built around the milestone. The family that moved here for a Mayo Clinic fellowship and stayed for a career. The medical professional celebrating a graduation that the whole extended family flew in for. The couple marking twenty years in a community that has become home in ways they didn't expect when they took the position. Private hibachi at your Rochester home brings a certified teppanyaki chef to your backyard or patio with the full setup — propane teppan grill, hand-selected proteins including premium filet mignon and lobster tail for milestone occasions — and a live-fire performance built for the evening your guests have been anticipating.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes in your backyard or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, knife work, and every plate cooked to order in front of your Rochester guests. Full cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Rochester private events book 2–3 weeks ahead. Graduation season (May–June) and spring milestone dates fill 4–6 weeks out. Serving Rochester and all of Olmsted County — Byron, Stewartville, Kasson, and surrounding southeast Minnesota communities. Starting at $60/adult, $600 minimum. Premium protein packages available.`,
  },
  // 332 — Duluth (profileIdx 4)
  {
    headline: () => `Mobile Hibachi Chef in Duluth`,
    opening:  () =>
      `Duluth brings groups from across the Midwest — the Canal Park vacation rental that sixteen people booked six months ago for a bachelorette weekend, the North Shore cabin that the extended family rents every August for the reunion, the corporate retreat group that chose Superior Street and the lift bridge as their team's long weekend destination. The challenge with planning a group dinner in Duluth is universal: the good restaurants don't accommodate 20 people together, and moving the group means Uber coordination and a dining room that could be anywhere. Mobile hibachi at your Duluth vacation rental means the chef comes to you. Setup on the deck, performance for the full group, Lake Superior in the background.`,
    middle:   () =>
      `Your chef travels to your Duluth property fully equipped: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. No gas hookup needed at any Canal Park rental or North Shore cabin. Setup takes 20 minutes on your deck or outdoor space. The show runs 90–120 minutes from first flame to final plate. For groups over 25, we bring dual chef stations. Complete cleanup when dinner is done — your rental is spotless.`,
    closing:  () =>
      `Duluth summer and fall color season dates book 4–6 weeks ahead. Travel to your Canal Park rental or North Shore cabin is factored into your quote at booking — never a surprise. Serving Duluth, the North Shore, Superior, WI, and surrounding communities. Starting at $60/adult, $600 minimum.`,
  },
  // 333 — Minneapolis (profileIdx 5)
  {
    headline: () => `Private Hibachi Chef in Minneapolis`,
    opening:  () =>
      `Minneapolis is where the Twin Cities corporate calendar runs — the North Loop events that the marketing team books six weeks out, the Uptown backyard dinner for thirty colleagues, the Loring Park rooftop that the VP uses for client appreciation every fall. Private hibachi at your Minneapolis location brings a certified teppanyaki chef directly to your venue with the full setup and a live-fire performance that turns any corporate event or home gathering into an experience your guests keep referencing. The format that replaced restaurant private dining rooms for Minneapolis hosts who know what they're doing.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, all fresh proteins and ingredients, fried rice, vegetables, house-made sauces, plates, and chopsticks. For groups over 25, we bring dual chef stations running simultaneously — everyone eats at the same time. The performance runs 90–120 minutes from first flame to final plate. Full professional cleanup when dinner is done.`,
    closing:  () =>
      `Minneapolis holiday party season (November–December) and year-end corporate events book 4–6 weeks ahead. Home events and backyard gatherings typically confirm 2–3 weeks out. Serving Minneapolis and all Twin Cities neighborhoods. Starting at $60/adult, $600 minimum.`,
  },
  // 334 — Bloomington (profileIdx 6)
  {
    headline: () => `Private Hibachi Chef in Bloomington`,
    opening:  () =>
      `Bloomington sits at the center of the Twin Cities corporate corridor — the 494 strip where the Fortune 500 campuses concentrate, the hotels that host client appreciation events year-round, and the residential communities between the mall and the river where team dinners happen in someone's backyard instead of a private dining room. Private hibachi at your Bloomington venue or home brings a certified teppanyaki chef with the full self-contained setup and a live-fire performance that works for corporate events of 15 and family celebrations of 40 with equal professionalism.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The chef sets up in your backyard, patio, or outdoor corporate space (10×10 feet of clearance) and performs for 90–120 minutes from first flame to final plate. For groups over 25, dual chef stations are available. Full cleanup when dinner is done.`,
    closing:  () =>
      `Bloomington corporate events and holiday parties book 3–5 weeks ahead in peak season. Home celebrations typically confirm 2–3 weeks out. Serving Bloomington, Richfield, and the full south I-494 corridor. Starting at $60/adult, $600 minimum.`,
  },
  // 335 — Eden Prairie (profileIdx 7)
  {
    headline: () => `Private Hibachi Chef in Eden Prairie`,
    opening:  () =>
      `Eden Prairie has built one of the Twin Cities' most impressive communities — the Round Lake and Riley Lake properties that set the standard for southwest metro estate entertaining, the corporate headquarters along Prairie Center Drive where client appreciation events demand something better than a restaurant reservation, and the neighborhoods that attract the executive and professional community who hosts at the level their homes were built for. A certified private hibachi chef at your Eden Prairie property brings the full teppanyaki performance — premium proteins, live fire, professional execution — to your patio, deck, or backyard.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, hand-selected proteins including filet mignon and sea bass upgrades, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20–30 minutes on your outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full professional cleanup when dinner is done — your property is immaculate when the chef leaves.`,
    closing:  () =>
      `Eden Prairie events book 2–4 weeks ahead. Summer lake season dates fill faster. Serving Eden Prairie, Chanhassen, Chaska, and the full southwest Twin Cities metro. Starting at $60/adult, $600 minimum. Premium protein packages available.`,
  },
  // 336 — Maple Grove (profileIdx 8)
  {
    headline: () => `Private Hibachi Chef in Maple Grove`,
    opening:  () =>
      `Maple Grove is the northwest Twin Cities suburb that does graduation season at the highest volume in the metro — the Arbor Lakes backyard that fills with 45 family members every May, the Grove district neighborhood that books the hibachi chef three months before the ceremony because the good dates are gone, and the community that discovered early that a private teppanyaki chef in the backyard outperforms every Maple Grove restaurant reservation for a celebration of 20 or more. Private hibachi at your Maple Grove home brings a certified chef with the full setup and a live-fire performance that works for graduation parties, milestone birthdays, and the neighborhood events where the whole street is invited.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes in your backyard. The show runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order. For graduation parties over 25, we bring dual chef stations. Zero cleanup for the host when dinner is done.`,
    closing:  () =>
      `Maple Grove graduation Saturdays (May–June) fill 4–6 weeks ahead — reserve early. Regular weekend events book 2–3 weeks out. Serving Maple Grove, Plymouth, Brooklyn Park, Champlin, and the full northwest metro. Starting at $60/adult, $600 minimum.`,
  },
  // 337 — Plymouth (profileIdx 9)
  {
    headline: () => `Private Hibachi Chef in Plymouth`,
    opening:  () =>
      `Plymouth brings together two of the Twin Cities' most active private event communities — the Medicine Lake and Schmidt Lake neighborhoods where estate-scale entertaining is the norm, and the corporate corridor along Highway 55 where team dinners happen at someone's home rather than a downtown restaurant. Private hibachi at your Plymouth property gives your guests an evening that a backyard grill or a shared restaurant simply can't match. A certified teppanyaki chef arrives fully equipped, performs for your group, and leaves your Plymouth property exactly as they found it.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Any outdoor space with 10×10 feet of clearance works — backyard, patio, deck, or driveway. The performance runs 90–120 minutes from first flame to final plate. For events over 25, dual chef stations available. Full cleanup when dinner is done.`,
    closing:  () =>
      `Plymouth graduation season and summer weekends book 3–5 weeks ahead. Standard events confirm 2–3 weeks out. Serving Plymouth, Minnetonka, Maple Grove, Golden Valley, and surrounding communities. Starting at $60/adult, $600 minimum.`,
  },
  // 338 — St. Paul (profileIdx 10)
  {
    headline: () => `Private Hibachi Chef in St. Paul`,
    opening:  () =>
      `St. Paul has a distinct entertainer's identity that Minneapolis doesn't share — the Summit Avenue Victorian whose backyard is the city's most coveted dinner party setting, the Cathedral Hill rowhouse with a patio that hosts bachelorette weekends from across the Midwest, and the Grand Avenue neighborhood where the restaurant scene is strong but the private chef experience is stronger. Private hibachi at your St. Paul home brings a certified teppanyaki chef to your property with the full setup and a live-fire performance that turns a home dinner party into the kind of evening your guests are still describing at the next one.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Summit Avenue patios, Cathedral Hill backyards, Highland Park decks, and East Side driveways all work — any outdoor space with 10×10 feet of clearance. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `St. Paul summer and bachelorette weekend dates book 2–3 weeks ahead. Standard events confirm same day or within the week. Serving St. Paul and all Twin Cities east metro communities. Starting at $60/adult, $600 minimum.`,
  },
  // 339 — Woodbury (profileIdx 11)
  {
    headline: () => `Private Hibachi Chef in Woodbury`,
    opening:  () =>
      `Woodbury is the east Twin Cities suburb that the professional community chose for its schools, its lakes, and its distance from the downtown commute — Colby Lake, Carver Lake, and the planned neighborhoods that attract the families who host at a level their homes were designed for. Private hibachi at your Woodbury home brings a certified teppanyaki chef to your backyard or patio with the full setup and a live-fire performance that works for intimate anniversary dinners of 10 and graduation parties of 40 with the same professional execution.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes in your outdoor space. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done — your Woodbury property is spotless when the chef leaves.`,
    closing:  () =>
      `Woodbury events book 2–3 weeks ahead. Summer and graduation season dates fill faster. Serving Woodbury, Cottage Grove, Oakdale, Maplewood, and the full east Twin Cities metro. Starting at $60/adult, $600 minimum.`,
  },
  // 340 — Eagan (profileIdx 12)
  {
    headline: () => `Private Hibachi Chef in Eagan`,
    opening:  () =>
      `Eagan is the south Twin Cities suburb where May graduation Saturdays are booked before the school year starts — the Central Park neighborhoods that host 30-person backyard graduation parties, the families who graduated past the traditional cookout and discovered that a private hibachi chef serves everyone better and costs less than restaurant reservations for a group that size. Private hibachi at your Eagan home brings a certified teppanyaki chef to your backyard with the full setup, a live-fire performance, and zero cleanup for the host when dinner is done.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Your backyard, patio, or driveway (10×10 feet of clearance) is the venue. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every plate cooked to order for every age in the crowd. Dual chef stations for larger events. Full cleanup when dinner is done.`,
    closing:  () =>
      `Eagan graduation weekends (May–June) book 4–6 weeks ahead. Regular events confirm 2–3 weeks out. Serving Eagan, Burnsville, Apple Valley, Inver Grove Heights, and the full south metro. Starting at $60/adult, $600 minimum.`,
  },
  // 341 — Burnsville (profileIdx 13)
  {
    headline: () => `Private Hibachi Chef in Burnsville`,
    opening:  () =>
      `Burnsville brings together the south metro's established neighborhoods and its lake communities — Crystal Lake, Alimagnet Lake, and the residential areas that have hosted the same families for two and three generations. Private hibachi at your Burnsville home brings a certified teppanyaki chef to your backyard with the full setup and a live-fire performance built for graduation parties, milestone birthday celebrations, and the family gatherings where an ordinary cookout doesn't fit the occasion anymore.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes in your outdoor space (10×10 feet of clearance). The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Burnsville graduation and summer dates book 3–5 weeks ahead. Standard events typically confirm 2–3 weeks out. Serving Burnsville, Eagan, Apple Valley, Savage, and the south metro. Starting at $60/adult, $600 minimum.`,
  },
  // 342 — Lakeville (profileIdx 14)
  {
    headline: () => `Private Hibachi Chef in Lakeville`,
    opening:  () =>
      `Lakeville is one of Minnesota's fastest-growing communities — new construction neighborhoods with large backyards, the King Park and Orchard Lake communities where graduation parties have outgrown the deck, and the families who moved here precisely because Lakeville gives them the space and the setting to host at scale. Private hibachi at your Lakeville home brings a certified teppanyaki chef to your backyard with the full setup and a live-fire performance that makes graduation parties, milestone birthdays, and neighborhood gatherings into the dinner people plan their schedule around.`,
    middle:   () =>
      `Your chef arrives with everything: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Large Lakeville backyards give the chef ideal space to set up and perform. The show runs 90–120 minutes from first flame to final plate. Dual stations for groups over 25. Full cleanup when dinner is done.`,
    closing:  () =>
      `Lakeville graduation weekends (May–June) fill 4–6 weeks ahead. Summer and fall events book 2–4 weeks out. Serving Lakeville, Burnsville, Apple Valley, Farmington, Rosemount, and south metro communities. Starting at $60/adult, $600 minimum.`,
  },
  // 343 — Stillwater (profileIdx 15)
  {
    headline: () => `Mobile Hibachi Chef in Stillwater`,
    opening:  () =>
      `Stillwater is where the Twin Cities goes for the weekend away that feels like a different world — the St. Croix River bluff vacation rental that twenty people rented for a bachelorette weekend, the historic Main Street bed and breakfast that the anniversary couple chose because they wanted something that feels nothing like Minneapolis, and the Airbnb properties along the river that host groups throughout summer and fall color season. The challenge with planning a group dinner in Stillwater is the same it's always been: the best restaurants don't accommodate the whole group at once. Mobile hibachi at your Stillwater rental brings the chef to your deck or outdoor space — river view, live fire, full performance.`,
    middle:   () =>
      `Your chef travels to your Stillwater property fully equipped: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. No gas hookup needed at any St. Croix River rental or historic property. Setup takes 20 minutes on your deck or outdoor space. The show runs 90–120 minutes from first flame to final plate. Complete cleanup when dinner is done — your rental is spotless.`,
    closing:  () =>
      `Stillwater summer and fall color season weekends book 3–5 weeks ahead. Off-season events confirm 1–2 weeks out. Travel is disclosed upfront in your quote. Serving Stillwater, Bayport, Afton, Hudson WI, and the St. Croix River corridor. Starting at $60/adult, $600 minimum.`,
  },
  // 344 — Brainerd (profileIdx 16)
  {
    headline: () => `Mobile Hibachi Chef in Brainerd`,
    opening:  () =>
      `Brainerd is Minnesota's lake cabin capital — Grand View Lodge, Cragun's, the family cabin on Gull Lake, and the resort community that draws Twin Cities groups every summer for the kind of vacation where the highlight is supposed to be the lake, but the dinner on Friday night becomes what everyone actually remembers. Mobile hibachi at your Brainerd cabin or resort property brings a certified teppanyaki chef directly to your deck with everything included — the grill, the proteins, the fire tricks, and the performance that fills 90 minutes while Lake Minnewaska or Gull Lake sits in the background.`,
    middle:   () =>
      `Your chef travels to your Brainerd property fully equipped: propane teppan grill, all proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. No gas hookup needed at any Brainerd Lakes cabin or resort property. Setup takes 20 minutes on your deck or outdoor space. The show runs 90–120 minutes from first flame to final plate. For groups over 25, dual stations available. Complete cleanup when dinner is done — your cabin is spotless.`,
    closing:  () =>
      `Brainerd summer weekends (June–August) fill 4–6 weeks ahead. Book as early as possible for July 4th and Labor Day weekends. Travel is disclosed upfront in your quote. Serving Brainerd, Baxter, Nisswa, Pequot Lakes, Crosslake, and the Brainerd Lakes region. Starting at $60/adult, $600 minimum.`,
  },
]

// ── getMnCityData ──────────────────────────────────────────────────────────────
export function getMnCityData(citySlug, cityName) {
  const major       = MN_MAJOR_CITIES[citySlug] ?? null
  const v           = major ? major.v : getMnVariantIndex(citySlug)
  const theme       = MN_IMAGE_THEMES[v]
  const displayName = MN_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Minnesota',
    stateAbbr:    'MN',
    stateSlug:    'minnesota',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: MN_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: MN_NEARBY_MAJOR[v],
    localHighlights:   MN_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: MN_OCCASIONS[v],
    faqSet:            MN_FAQ_SETS[v](displayName),
    testimonials:      MN_TESTIMONIALS[v],
    uniqueIntroVariant:   (major?.profileIdx != null) ? 328 + major.profileIdx : 322 + v,
    uniqueWhyUsVariant:   v % 5,
    uniqueClosingVariant: (major?.profileIdx != null) ? 328 + major.profileIdx : 322 + v,
    heroH1Prefix: major?.profileIdx != null
      ? MN_PROFILE_H1_PREFIXES[major.profileIdx]
      : MN_THEME_H1_PREFIXES[v],
    ...(MN_CUSTOM_META[citySlug]
      ? { metaTitle: MN_CUSTOM_META[citySlug].title, metaDescription: MN_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── getMnHowItWorks ────────────────────────────────────────────────────────────
export function getMnHowItWorks(citySlug) {
  const major = MN_MAJOR_CITIES[citySlug] ?? null
  const v     = major ? major.v : getMnVariantIndex(citySlug)
  return MN_HOW_IT_WORKS[v]
}

// ── getMnSectionVariant ────────────────────────────────────────────────────────
export function getMnSectionVariant(citySlug) {
  const major = MN_MAJOR_CITIES[citySlug] ?? null
  const v     = major ? major.v : getMnVariantIndex(citySlug)
  return MN_SECTION_VARIANTS[v]
}

// ── getMnCityImage ─────────────────────────────────────────────────────────────
export function getMnCityImage(citySlug) {
  return MN_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── getMnSupportImages ─────────────────────────────────────────────────────────
export function getMnSupportImages(citySlug) {
  if (MN_SUPPORT_IMAGES[citySlug]) return MN_SUPPORT_IMAGES[citySlug]
  const major = MN_MAJOR_CITIES[citySlug] ?? null
  const v     = major ? major.v : getMnVariantIndex(citySlug)
  return MN_SUPPORT_FALLBACKS[v]
}

// ── getMnBlogPosts ─────────────────────────────────────────────────────────────
export function getMnBlogPosts(variant, count) {
  return MN_BLOG_POSTS[variant % MN_BLOG_POSTS.length].slice(0, count)
}
