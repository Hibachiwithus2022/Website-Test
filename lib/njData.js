// =============================================================================
// lib/njData.js — New Jersey Expansion
// 37 cities · 5 geographic themes
// Theme 0: North Jersey / Urban (Jersey City, Hoboken, Fort Lee, Hackensack, Paramus)
// Theme 1: Affluent Suburban  (Morristown, Montclair, Summit, Westfield, Ridgewood,
//                              Short Hills, Livingston, Chatham, Bridgewater, Marlboro, Holmdel)
// Theme 2: Shore / Summer     (Asbury Park, Point Pleasant, Belmar, Long Branch,
//                              Ocean City, Wildwood, Sea Isle City)
// Theme 3: Central / Family   (Princeton, Cherry Hill, Edison, New Brunswick,
//                              Toms River, Middletown)
// Theme 4: Upscale Shore / South Jersey (Cape May, Stone Harbor, Avalon, Spring Lake,
//                              Haddonfield, Moorestown, Mount Laurel, Red Bank)
//
// INTRO_VARIANTS indices:  48–52 NJ generic · 53–62 NJ city-specific
// CLOSING_VARIANTS indices: 48–52 NJ generic · 53–62 NJ city-specific
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getNJVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 5
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const NJ_HERO_SUBTITLES = [
  (city) => `NYC Commuter Professionals · Rooftop Events · Luxury Residential · Serving ${city}`,
  (city) => `Backyard Private Dining · Family Celebrations · Corporate Events · Serving ${city}`,
  (city) => `Shore House Gatherings · Summer Rental Groups · Beach House Events · Serving the Jersey Shore`,
  (city) => `Family Milestones · Graduation Parties · Multicultural Celebrations · Serving ${city}`,
  (city) => `Exclusive Private Dining · Vacation Rental Groups · South Jersey Gatherings · Serving ${city}`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const NJ_LOCAL_HIGHLIGHTS = [
  // Theme 0 — North Jersey
  (city) => [
    `Rooftop hibachi for NYC commuter professionals in ${city} and surrounding Hudson County`,
    'Perfect for bachelor and bachelorette groups renting homes across North Jersey',
    'Ideal for building courtyard, outdoor terrace, and common space events',
    'Corporate team dinners for finance, tech, and professional services firms',
    'Hudson waterfront and skyline-view gatherings unlike any restaurant setting',
    'Premium private dining at a fraction of NYC private event costs',
  ],
  // Theme 1 — Affluent Suburban
  (city) => [
    `Backyard private dining for ${city}'s most discerning hosts`,
    "Perfect for graduation parties across NJ's premier suburban communities",
    'Ideal for neighborhood gatherings where quality isn\'t optional',
    'Corporate events for the pharmaceutical and tech corridor throughout Central NJ',
    `Anniversary and milestone dinners in ${city}'s most beautiful outdoor spaces`,
    'Full setup and cleanup — zero work for the host, no compromise on quality',
  ],
  // Theme 2 — Shore
  (city) => [
    `Shore house dinner parties and group events serving ${city} and nearby Shore communities`,
    'Perfect for bachelorette and bachelor weekends at Jersey Shore rentals',
    'Ideal for family reunions — all generations around the same outdoor grill',
    'The summer cookout alternative your group rental has been missing',
    "Live outdoor hibachi across NJ's most beloved beach communities",
    'No reservation battles, no restaurant wait — your chef comes to you',
  ],
  // Theme 3 — Central / Family
  (city) => [
    `Multigenerational family celebrations serving ${city} and all of Central New Jersey`,
    'Large-group capacity — dual chef stations for parties of 25–60+ guests',
    'Graduation season specialist — book early for May and June Saturday events',
    "Cultural celebrations honoring New Jersey's richly diverse communities",
    'Corporate campus events along the Central NJ pharmaceutical and biotech corridor',
    'Quinceañeras, graduation dinners, family reunions — every milestone handled',
  ],
  // Theme 4 — Upscale Shore / South Jersey
  (city) => [
    `Exclusive private dining for vacation rentals and private homes in ${city}`,
    "Cape May, Stone Harbor, and Avalon — the Shore's preferred private chef service",
    'Rehearsal dinners and wedding weekend gatherings at New Jersey Shore properties',
    `South Jersey's upscale communities — Haddonfield, Moorestown, Red Bank, and ${city}`,
    'Premium experience without the restaurant reservation battle',
    'Full setup, live cooking performance, and complete cleanup — nothing left for you to do',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const NJ_OCCASIONS = [
  // Theme 0 — North Jersey
  ['Birthday Parties','Bachelorette Parties','Rooftop Events','Corporate Team Dinners','Bachelor Parties','Anniversary Dinners','Graduation Parties','Holiday Gatherings','Date Nights','Housewarming Parties'],
  // Theme 1 — Affluent Suburban
  ['Birthday Parties','Graduation Parties','Anniversary Dinners','Corporate Events','Neighborhood Gatherings','Bachelorette Parties','Family Reunions','Holiday Dinners','Retirement Parties','Housewarming Parties'],
  // Theme 2 — Shore
  ['Shore House Parties','Bachelorette Weekends','Family Reunions','Birthday Parties','Bachelor Parties','Anniversary Getaways','Summer Group Dinners','Vacation Group Nights','Graduation Trips','Neighborhood Shore Events'],
  // Theme 3 — Central / Family
  ['Birthday Parties','Graduation Parties','Anniversary Dinners','Family Reunions','Cultural Celebrations','Quinceañeras','Corporate Events','Engagement Parties','Retirement Parties','Multigenerational Gatherings'],
  // Theme 4 — Upscale Shore / South Jersey
  ['Vacation Rental Dinners','Rehearsal Dinners','Family Reunion Events','Girls Trip Nights','Wedding Weekends','Birthday Celebrations','Anniversary Getaways','Graduation Trips','Corporate Retreats','Holiday Gatherings'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const NJ_FAQ_SETS = [
  // Theme 0 — North Jersey / Urban
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} rooftop or building outdoor space?`,
      a: `Yes — rooftop terraces, courtyard gardens, and building outdoor common areas are among our most popular North Jersey setups. We coordinate with your building or property manager in advance to ensure smooth access. We need a minimum 10×10 ft flat outdoor space with clearance from overhead structures.`,
    },
    {
      q: `Is there an extra travel fee for ${city}?`,
      a: `No extra fee for most Hudson and Bergen County locations, including Jersey City, Hoboken, Fort Lee, and nearby towns. Locations more than 30 miles from our nearest chef base may incur a modest travel fee — always disclosed upfront before booking.`,
    },
    {
      q: 'Can you set up in a smaller North Jersey outdoor space?',
      a: 'We need a minimum 10×10 ft flat outdoor area for the grill. Most rooftop terraces, courtyards, and building patios meet this requirement comfortably. We do not cook indoors in apartment units or enclosed spaces without proper ventilation.',
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend evenings and holiday weekends in North Jersey book 3–5 weeks out. Jersey City and Hoboken have particularly high year-round demand — 2–3 weeks minimum notice is strongly recommended. Summer and holiday dates move faster.`,
    },
    {
      q: `Do you serve bachelorette and bachelor groups in ${city}?`,
      a: `Absolutely — bachelorette and bachelor groups are among our most common North Jersey bookings, especially in Hoboken and Jersey City. Groups of 10–30 at a rented home, rooftop, or outdoor space are ideal. The hibachi show makes the whole evening.`,
    },
    {
      q: 'What outdoor setup areas work for North Jersey events?',
      a: 'Rooftop terraces, building courtyards, private backyards, townhome patios, and outdoor terraces all work well. The key requirement is a flat outdoor area of at least 10×10 ft with no overhead obstruction directly above the grill. We handle everything else.',
    },
  ],
  // Theme 1 — Affluent Suburban
  (city) => [
    {
      q: `Can hibachi be set up in a ${city} backyard or patio?`,
      a: `Yes — suburban backyards and patios are our ideal setup environment. We need a flat outdoor area of at least 10×10 ft. Deck, lawn, paver patio, or stone patio all work. Our equipment is fully self-contained — we bring everything and take everything with us.`,
    },
    {
      q: `Do you serve Morris County, Bergen County, and Union County suburbs?`,
      a: `Yes — Morris, Bergen, Somerset, and Union Counties are among our most active NJ service areas. Towns like Morristown, Montclair, Summit, Westfield, and Ridgewood fall within our standard service radius with no extra travel fee in most cases.`,
    },
    {
      q: `How far in advance should I book for a ${city} graduation party?`,
      a: `Graduation season (May–June) is our highest-demand window in suburban NJ. We recommend booking 4–6 weeks in advance for any May or June Saturday event. Weekday graduation dinners have more flexibility — usually 2–3 weeks notice is sufficient.`,
    },
    {
      q: `Can you handle a large graduation or milestone party in ${city}?`,
      a: 'Absolutely — parties of 25–60 guests are common in suburban NJ. For groups over 25, we bring two chef stations running in parallel to maintain quality and timing. Larger milestone events (anniversaries, retirement parties, big birthdays) are a specialty.',
    },
    {
      q: 'Do you do corporate team events for NJ companies?',
      a: 'Yes — Morris County, Somerset County, and Bergen County have strong demand from pharmaceutical, biotech, and technology companies. We can set up at corporate outdoor spaces, catering venues, or private homes. Full event coordination included.',
    },
    {
      q: 'What do I need to provide for the event?',
      a: 'Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all ingredients and proteins, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included.',
    },
  ],
  // Theme 2 — Shore / Summer
  (city) => [
    {
      q: `Can you come to our ${city} shore house or vacation rental?`,
      a: `Absolutely — Jersey Shore rental properties are among our most popular booking locations. We come directly to your rental house. Just confirm the property allows outdoor open-flame cooking (most do), and we handle everything from there.`,
    },
    {
      q: `How far in advance should I book a ${city} summer shore event?`,
      a: `Jersey Shore summer weekends — Memorial Day through Labor Day — fill up fast. We strongly recommend booking 4–6 weeks in advance. Peak July and August weekends at prime Shore destinations can book out entirely within days of opening.`,
    },
    {
      q: `Can you set up on the deck or patio of a Shore rental in ${city}?`,
      a: 'Yes — outdoor decks, patios, and yard spaces at Shore rentals are our typical setup. We need a flat area of at least 10×10 ft with clearance overhead. Many Shore rental properties have perfect deck or backyard setups already.',
    },
    {
      q: 'Do you serve all New Jersey Shore communities?',
      a: 'Yes — we serve the full Jersey Shore from Sandy Hook to Cape May, including Asbury Park, Point Pleasant, Ocean City, Wildwood, Stone Harbor, Avalon, and Cape May. Travel fees may apply to the southernmost Cape May County communities.',
    },
    {
      q: 'Is hibachi a good option for a Shore bachelorette weekend?',
      a: `It's the best option. The combination of live cooking, fire tricks, and everyone gathered around the grill keeps the energy going all night. We've done dozens of Shore bachelorette events — Asbury Park, Cape May, and everywhere in between. No reservation required.`,
    },
    {
      q: 'What happens if it rains at our Shore event?',
      a: 'We cook in light rain with appropriate shelter. For severe weather or lightning, we\'ll work with you to reschedule at no penalty — Shore weather is fully understood. Covered decks, porches, and pavilions make excellent backup spaces.',
    },
  ],
  // Theme 3 — Central / Family
  (city) => [
    {
      q: `Can you handle a large multigenerational family celebration in ${city}?`,
      a: `Absolutely — groups of 20–60 guests are our specialty in Central New Jersey. For parties over 25, we bring two chef stations running simultaneously. Three generations around the grill — kids, parents, and grandparents — is our most common Central NJ setup.`,
    },
    {
      q: `Do you serve ${city} and surrounding Central NJ communities?`,
      a: `Yes — Middlesex, Mercer, Monmouth, and Ocean Counties are active service areas. ${city} and all surrounding towns fall within our standard radius with no extra travel fee in most cases.`,
    },
    {
      q: `Is hibachi appropriate for cultural celebrations and large family events?`,
      a: 'Absolutely — we regularly serve South Asian celebration dinners, graduation parties, quinceañeras, and large extended family events. Our chefs are experienced with diverse event formats, large group dynamics, and adapting to the energy of each event.',
    },
    {
      q: 'Can you set up at a rented venue or outdoor event space?',
      a: 'Yes — as long as the venue has a flat outdoor area of at least 10×10 ft and permits open-flame cooking. Many NJ event halls, community centers, and catering venues have outdoor spaces well-suited for hibachi. We coordinate directly with your venue if needed.',
    },
    {
      q: 'How early should I book for May or June graduation events?',
      a: 'Graduation season is our busiest window in Central NJ. Book 5–8 weeks ahead for any May or June Saturday event. Weekday graduation dinners have more availability — 2–3 weeks is typically sufficient. Confirm early and lock your date.',
    },
    {
      q: 'What proteins are available for a large family event?',
      a: 'Every guest chooses 2 proteins: chicken, steak (sirloin), shrimp, scallops, salmon, or tofu. Premium upgrades — filet mignon and lobster tail — are available at an additional cost. For very large groups, we can pre-coordinate protein selections to keep service smooth.',
    },
  ],
  // Theme 4 — Upscale Shore / South Jersey
  (city) => [
    {
      q: `Can hibachi be set up at a ${city} vacation rental or estate?`,
      a: `Yes — vacation rental properties, private estates, and Victorian Shore homes are among our most requested setups. Most properties have excellent outdoor space — wrap-around porches, gardens, courtyards, or backyard patios. We confirm setup details in advance.`,
    },
    {
      q: `Do you serve Seven Mile Island and South Jersey Shore communities?`,
      a: 'Yes — Stone Harbor, Avalon, Sea Isle City, and all of Seven Mile Island are service areas we know well. Cape May, Spring Lake, and surrounding upscale Shore communities are active markets for us throughout the summer season.',
    },
    {
      q: `How far in advance do I need to book for ${city} summer events?`,
      a: 'Stone Harbor, Avalon, Cape May, and Spring Lake summer events book 6–8 weeks out for peak season. We recommend reaching out as early as April for July and August events. South Jersey community events (Haddonfield, Moorestown) typically need 2–3 weeks.',
    },
    {
      q: 'What does a private hibachi event cost for 8–12 guests?',
      a: 'Our rate is $60/adult and $30/child, with a $600 event minimum. Ten adults totals $600 — this covers your private chef, live teppanyaki performance, all proteins, fried rice, vegetables, sauces, full setup, and complete cleanup. Premium proteins (filet, lobster) are available as add-ons.',
    },
    {
      q: 'Is hibachi available for wedding weekend gatherings and rehearsal dinners?',
      a: 'Yes — Cape May and the Jersey Shore are major wedding destinations, and hibachi is a popular choice for rehearsal dinners, welcome dinners, and post-wedding casual gatherings. We accommodate groups of 10–60 with the same full-service setup.',
    },
    {
      q: 'Do you serve South Jersey communities like Haddonfield and Moorestown?',
      a: 'Yes — South Jersey is fully served including Burlington, Camden, and Gloucester Counties. Haddonfield, Moorestown, Cherry Hill, and surrounding communities are active service areas with no extra travel fee in most cases.',
    },
  ],
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const NJ_TESTIMONIALS = [
  // Theme 0 — North Jersey
  [
    {
      text: '"Set up on our building rooftop in Jersey City — 18 guests, Hudson River views, Manhattan skyline behind the chef the whole evening. My guests were still posting about it the following week. Nothing else comes close."',
      name: 'Sarah K.',
      city: 'Jersey City, NJ',
      event: 'Birthday Party',
      initials: 'SK',
    },
    {
      text: '"Bachelorette crew of 14 in Hoboken. Needed something different than another bar night. Private hibachi on the deck was absolutely the move — chef was incredible, the fire show had everyone going, and the food was better than any restaurant we\'d been to."',
      name: 'Jessica R.',
      city: 'Hoboken, NJ',
      event: 'Bachelorette Party',
      initials: 'JR',
    },
    {
      text: '"Team dinner for our Jersey City office — 22 people, outdoor setup at the venue. Zero logistics stress. Chef set up while we finished our first round, and by the time we sat down everything was ready. Best team event we\'ve ever done."',
      name: 'Marcus P.',
      city: 'Jersey City, NJ',
      event: 'Corporate Team Dinner',
      initials: 'MP',
    },
  ],
  // Theme 1 — Affluent Suburban
  [
    {
      text: '"Graduation party for our daughter in Summit — 35 guests, backyard setup, chef had everyone around the grill from the first flame. Kids were watching every move. Already booked again for her brother\'s graduation next spring."',
      name: 'Thomas W.',
      city: 'Summit, NJ',
      event: 'Graduation Party',
      initials: 'TW',
    },
    {
      text: '"We do a neighborhood Fourth of July gathering in Westfield every year — always trying something different. Private hibachi was the first year everyone stayed until midnight and asked who we were booking next summer. Found our tradition."',
      name: 'Diane M.',
      city: 'Westfield, NJ',
      event: 'Neighborhood Gathering',
      initials: 'DM',
    },
    {
      text: '"My father\'s 70th birthday in our Ridgewood backyard. 28 guests across two generations. Chef handled everything from setup to cleanup — we didn\'t touch a thing. Dad said it was the best birthday he\'d ever had."',
      name: 'Karen L.',
      city: 'Ridgewood, NJ',
      event: 'Birthday Party',
      initials: 'KL',
    },
  ],
  // Theme 2 — Shore
  [
    {
      text: '"Shore house weekend in Point Pleasant — 14 people, going to do a regular cookout. Friend convinced us to book hibachi instead. By the end of the night, people were arguing over whose house gets to host next summer just so they can do this again."',
      name: 'Ryan C.',
      city: 'Point Pleasant Beach, NJ',
      event: 'Shore House Party',
      initials: 'RC',
    },
    {
      text: '"Bachelorette weekend in Asbury Park — rented a house with a great backyard. Chef showed up right on time, fire tricks had everyone screaming, food was better than anything we ate all weekend. Took the night from good to unforgettable."',
      name: 'Amanda T.',
      city: 'Asbury Park, NJ',
      event: 'Bachelorette Weekend',
      initials: 'AT',
    },
    {
      text: '"Family Shore reunion — 32 guests, three generations, different rental than usual. Did hibachi instead of our typical catered dinner. My grandmother who barely eats took three rounds. Best reunion we\'ve ever had and it\'s not close."',
      name: 'Michael G.',
      city: 'Seaside, NJ',
      event: 'Family Reunion',
      initials: 'MG',
    },
  ],
  // Theme 3 — Central / Family
  [
    {
      text: '"Graduation party in Edison — 48 guests, two chef stations, three generations of family. Chef had my 80-year-old grandfather and my daughter\'s college friends all cheering at the same grill at the same time. Doesn\'t happen at any restaurant."',
      name: 'Priya S.',
      city: 'Edison, NJ',
      event: 'Graduation Party',
      initials: 'PS',
    },
    {
      text: '"Princeton graduation weekend — parents flying in, daughter graduating, every restaurant fully booked. Private hibachi at the rental house was beyond what anyone expected. Chef performed for two hours. Family still talks about it."',
      name: 'Robert H.',
      city: 'Princeton, NJ',
      event: 'Graduation Celebration',
      initials: 'RH',
    },
    {
      text: '"Quinceañera after-party in Cherry Hill — 55 guests, outdoor backyard setup, chef ran the entire show for two solid hours. Not one person left early. Had cousins driving from Connecticut saying it was the best family event in years."',
      name: 'Maria V.',
      city: 'Cherry Hill, NJ',
      event: 'Quinceañera',
      initials: 'MV',
    },
  ],
  // Theme 4 — Upscale Shore / South Jersey
  [
    {
      text: '"Cape May girls\' trip — five nights in a Victorian, did hibachi on the third evening. Nine of us on the wraparound porch with string lights, the chef was extraordinary, the food was better than every restaurant we visited. Worth every penny and then some."',
      name: 'Catherine B.',
      city: 'Cape May, NJ',
      event: 'Girls Trip',
      initials: 'CB',
    },
    {
      text: '"Avalon family vacation — we\'re there every August, always looking for something special. Private hibachi on the deck with the full family was the best dinner we\'ve had on the island in fifteen summers. Already planned again for next August."',
      name: 'James D.',
      city: 'Avalon, NJ',
      event: 'Family Vacation',
      initials: 'JD',
    },
    {
      text: '"Rehearsal dinner in Spring Lake — 16 guests, outdoor patio at the rental property. Chef was elegant, personalized, better than any restaurant we considered. Wedding guests kept saying the rehearsal dinner was the real highlight of the weekend."',
      name: 'Patricia L.',
      city: 'Spring Lake, NJ',
      event: 'Rehearsal Dinner',
      initials: 'PL',
    },
  ],
]

// ── Image themes ──────────────────────────────────────────────────────────────
const NJ_IMAGE_THEMES = [
  { heroImage: '/pics/hero-2.jpg' },          // Theme 0 — North Jersey / Urban
  { heroImage: '/pics/backyard-hibachi-3.jpg' }, // Theme 1 — Affluent Suburban
  { heroImage: '/pics/hero-4.jpg' },          // Theme 2 — Shore / Summer
  { heroImage: '/pics/hero-1.jpg' },          // Theme 3 — Central / Family
  { heroImage: '/pics/backyard-hibachi-2.jpg' }, // Theme 4 — Upscale Shore / South Jersey
]

// ── How It Works ──────────────────────────────────────────────────────────────
const NJ_HOW_IT_WORKS = [
  // Theme 0 — North Jersey
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Questions? Call or text (201) 565-3878. Most ${city} bookings are confirmed within a few hours.`,
    steps: [
      { num: '01', title: 'Request Your Event',       desc: 'Tell us your date, guest count, and outdoor space — rooftop, courtyard, private patio. We confirm your booking fast.' },
      { num: '02', title: 'Chef Arrives Ready',        desc: 'Your certified teppanyaki chef arrives with the complete setup: teppan grill, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking Performance', desc: 'Guests gather around the grill for 90–120 minutes of live hibachi — fire tricks, flying shrimp, freshly grilled food cooked to order.' },
      { num: '04', title: 'Full Cleanup Included',    desc: 'Chef handles all cleanup and packs out completely. You keep the experience — none of the work.' },
    ],
  },
  // Theme 1 — Affluent Suburban
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Book Your Date',            desc: 'Request your event by phone or online. Tell us your guest count and backyard setup. Quick confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Certified chef arrives with full teppan grill, propane, all ingredients, sauces, plates, and chopsticks. No shopping required.' },
      { num: '03', title: 'The Performance Begins',   desc: 'Guests gather around the grill for a live teppanyaki show — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Zero Cleanup for You',     desc: 'Chef packs everything out completely. You hosted the best dinner of the season and didn\'t touch a single dish.' },
    ],
  },
  // Theme 2 — Shore
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Rental`,
    footerNote: (city) => `Shore summer events book fast. Call or text (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Book From Your Rental',    desc: 'Reserve your date online or by phone — tell us your Shore address, guest count, and outdoor space. Fast confirmation.' },
      { num: '02', title: 'Chef Comes to You',        desc: 'Certified hibachi chef arrives with full setup: teppan grill, propane, all ingredients, plates, sauces, and utensils. Nothing for you to prepare.' },
      { num: '03', title: 'Shore House Dinner Show',  desc: 'Guests gather on your deck, patio, or backyard for 90–120 minutes of live hibachi — fire tricks, grilled-to-order proteins, the full show.' },
      { num: '04', title: 'Pack-Out and Done',        desc: 'Chef handles complete cleanup and takes everything with them. Your rental is spotless and you had the best dinner of the summer.' },
    ],
  },
  // Theme 3 — Central / Family
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Large group events in ${city}? Call or text (201) 565-3878 — we handle 10 to 60+ guests.`,
    steps: [
      { num: '01', title: 'Request Your Event',       desc: 'Book online or by phone. Tell us your guest count — over 25 guests, we bring two chef stations. Confirmed quickly.' },
      { num: '02', title: 'Full Setup Arrives',       desc: 'Your chef (or two chefs for large groups) arrives with everything: grills, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking for the Crowd', desc: 'Every guest gathers around the grill for a live teppanyaki performance — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Chef Handles Cleanup',     desc: 'Complete cleanup done by your chef. Your family keeps the memory. You do none of the work.' },
    ],
  },
  // Theme 4 — Upscale Shore / South Jersey
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} summer events fill fast. Call or text (201) 565-3878 to secure your date.`,
    steps: [
      { num: '01', title: 'Reserve Your Event',       desc: 'Book by phone or online — ideal for vacation rentals, private homes, and estate venues. We confirm quickly and coordinate your setup.' },
      { num: '02', title: 'Chef and Full Setup Arrive', desc: 'Certified teppanyaki chef arrives with complete setup: grill, propane, premium fresh proteins, plates, sauces, and full service.' },
      { num: '03', title: 'Private Dining Experience', desc: 'Your guests gather around the grill for 90–120 minutes of live cooking — a performance dinner no restaurant can replicate.' },
      { num: '04', title: 'Flawless Cleanup',         desc: 'Chef handles complete teardown and cleanup. Your space is left spotless. You provided the most memorable dinner of the vacation.' },
    ],
  },
]

// ── Section variants ──────────────────────────────────────────────────────────
const NJ_SECTION_VARIANTS = [
  // Theme 0 — North Jersey
  {
    heroPill:           'North Jersey\'s Private Chef',
    experiencePill:     'The NYC Alternative',
    experiencePoints:   [
      'No restaurant waitlists or crowded dining rooms',
      'Your rooftop or outdoor space becomes the venue',
      'Certified private chef performs just for your group',
      'Premium proteins, full show, zero cleanup',
    ],
    experienceImage:    '/pics/hibachi-philadelphia.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, NJ`,
    areasPill:          'Serving North Jersey',
    areasHeadline:      (city) => `Hibachi in ${city} and the Hudson County Corridor`,
    areasIntro: [
      (city, state) => `We serve ${city} and all surrounding North Jersey communities — Jersey City, Hoboken, Fort Lee, Hackensack, Paramus, and every neighborhood in between. If your outdoor space holds a grill, we can be there.`,
      (city) => `Most ${city} events are confirmed within hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Check Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Reason to Celebrate in ${city}`,
    occasionSubtext:       'From rooftop bachelorettes to corporate team events, private hibachi is North Jersey\'s standout celebration format',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What North Jersey Hosts Are Saying',
  },
  // Theme 1 — Affluent Suburban
  {
    heroPill:           'Backyard Private Dining',
    experiencePill:     'Better Than Any Restaurant',
    experiencePoints:   [
      'No reservation battles — your backyard is the venue',
      'Every guest at the same table, same chef, same moment',
      'Certified teppanyaki performance for 90–120 minutes',
      'Setup and complete cleanup fully included',
    ],
    experienceImage:    '/pics/private-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a ${city} backyard event`,
    areasPill:          'Serving NJ Suburbs',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Central and North Jersey's premier suburbs — Summit, Westfield, Ridgewood, Montclair, Morristown, Chatham, and dozens of communities throughout Morris, Bergen, Union, and Somerset Counties.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From graduation parties to neighborhood gatherings, private hibachi is the backyard upgrade NJ suburbs have been waiting for',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What NJ Suburban Hosts Are Saying',
  },
  // Theme 2 — Shore
  {
    heroPill:           'Shore House Private Dining',
    experiencePill:     'Your Shore Weekend Upgrade',
    experiencePoints:   [
      'Chef comes directly to your rental — no restaurant needed',
      'All guests at the same outdoor table for the full show',
      'Fire tricks, live cooking, 90–120 minute performance',
      'Full setup and pack-out — shore house stays spotless',
    ],
    experienceImage:    '/pics/hibachi-virginia-beach.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} shore house rental`,
    areasPill:          'Serving the Jersey Shore',
    areasHeadline:      (city) => `Hibachi at Your ${city} Shore Rental`,
    areasIntro: [
      (city, state) => `We serve the full Jersey Shore from Sandy Hook to Cape May — Asbury Park, Point Pleasant, Ocean City, Wildwood, Stone Harbor, Avalon, Cape May, and every Shore community in between.`,
      (city) => `Shore dates fill fast. Call or text (201) 565-3878 to confirm your ${city} booking before it\'s gone.`,
    ],
    areasButton:           'Check Shore Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       'Shore house parties, bachelorette weekends, family reunions, and summer group dinners — private hibachi is the jersey Shore\'s best BYOG (Bring Your Own Grill) option',
    faqPill:               'Shore Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Shore Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Jersey Shore Hosts Are Saying',
  },
  // Theme 3 — Central / Family
  {
    heroPill:           'Central NJ\'s Family Chef',
    experiencePill:     'Every Generation at the Grill',
    experiencePoints:   [
      'Dual-station capacity for groups of 25–60+ guests',
      'Kids, parents, and grandparents all around the same grill',
      'Fresh proteins, full performance, no restaurant logistics',
      'Setup and cleanup included — nothing for the host to do',
    ],
    experienceImage:    '/pics/hibachi-event.jpg',
    experienceImageAlt: (city) => `Family hibachi celebration in ${city}, NJ`,
    areasPill:          'Serving Central New Jersey',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of Central NJ`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Central New Jersey — Edison, Princeton, Cherry Hill, New Brunswick, Toms River, and every community in Middlesex, Mercer, Monmouth, and Ocean Counties.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Most large-group events are confirmed within a day.`,
    ],
    areasButton:           'Book Your Family Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Family Celebration`,
    occasionSubtext:       'Graduation parties, multigenerational family dinners, cultural celebrations, and milestone events — Central NJ families celebrate big, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Central NJ Families Are Saying',
  },
  // Theme 4 — Upscale Shore / South Jersey
  {
    heroPill:           'Private Shore Dining',
    experiencePill:     'The Dinner of the Vacation',
    experiencePoints:   [
      'Private chef comes to your vacation rental or estate',
      'Premium proteins, live fire performance, full service',
      'Intimate groups of 8–20 or larger gatherings up to 60',
      'Flawless setup and cleanup — nothing left for you to manage',
    ],
    experienceImage:    '/pics/hibachi-pic-3.jpg',
    experienceImageAlt: (city) => `Upscale private hibachi dinner in ${city}, NJ`,
    areasPill:          'Serving the Shore & South Jersey',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Shore Region`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the upscale Shore and South Jersey region — Cape May, Stone Harbor, Avalon, Spring Lake, Sea Isle City, Haddonfield, Moorestown, Red Bank, and surrounding communities throughout Cape May, Burlington, and Camden Counties.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Summer events fill fast — don't wait.`,
    ],
    areasButton:           'Reserve Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone Talks About in ${city}`,
    occasionSubtext:       'Vacation rental dinners, rehearsal dinners, girls\' trip nights, family reunions, and wedding weekends — private hibachi is what elevates a great gathering into a lasting memory',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What South Jersey & Shore Hosts Are Saying',
  },
]

// ── City experience image map ──────────────────────────────────────────────────
// (Each city's experience/differentiator section image — must ≠ hero image for that theme)
const NJ_CITY_IMAGE_MAP = {
  // Theme 0 (hero = hero-2.jpg)
  'jersey-city':    { src: '/pics/hibachi-event.jpg',        alt: (city) => `Private hibachi chef entertaining guests in ${city}, NJ` },
  'hoboken':        { src: '/pics/hibachi-photo-1.jpg',      alt: (city) => `Live hibachi cooking in Hoboken, NJ` },
  'fort-lee':       { src: '/pics/hibachi-catering-2.jpg',   alt: (city) => `Private hibachi chef at a Fort Lee NJ event` },
  'hackensack':     { src: '/pics/hibachi-chef-2.jpg',       alt: (city) => `Hibachi chef performing in Hackensack, NJ` },
  'paramus':        { src: '/pics/hibachi-to-you.jpg',       alt: (city) => `Private hibachi catering in Paramus, NJ` },
  // Theme 1 (hero = backyard-hibachi-3.jpg)
  'morristown':     { src: '/pics/backyard-hibachi.jpg',     alt: (city) => `Private hibachi chef at a Morristown NJ backyard event` },
  'montclair':      { src: '/pics/hibachi-pic-4.jpg',        alt: (city) => `Hibachi dinner party in Montclair, NJ` },
  'summit':         { src: '/pics/hibachi-at-home.jpg',      alt: (city) => `Private hibachi chef at a Summit NJ home` },
  'westfield':      { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Hibachi catering at a Westfield NJ event` },
  'ridgewood':      { src: '/pics/hibachi-dallas-home.jpg',  alt: (city) => `Private hibachi chef in Ridgewood, NJ` },
  'short-hills':    { src: '/pics/private-hibachi.jpg',      alt: (city) => `Private hibachi chef at a Short Hills NJ home` },
  'livingston':     { src: '/pics/hibachi-chef-at-home.jpg', alt: (city) => `Hibachi chef at a Livingston NJ home event` },
  'chatham':        { src: '/pics/hibachi-catering-3.jpg',   alt: (city) => `Private hibachi in Chatham, NJ` },
  'bridgewater':    { src: '/pics/hibachi-photo-2.jpg',      alt: (city) => `Hibachi chef at a Bridgewater NJ event` },
  'marlboro':       { src: '/pics/mobile-hibachi.jpg',       alt: (city) => `Private hibachi chef in Marlboro, NJ` },
  'holmdel':        { src: '/pics/hibachi-shot-1.jpg',       alt: (city) => `Hibachi event in Holmdel, NJ` },
  // Theme 2 (hero = hero-4.jpg)
  'asbury-park':    { src: '/pics/hibachi-miami.jpg',        alt: (city) => `Private hibachi chef at an Asbury Park NJ event` },
  'point-pleasant': { src: '/pics/traveling-hibachi.jpg',    alt: (city) => `Hibachi chef at a Point Pleasant NJ shore house` },
  'belmar':         { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Private hibachi at a Belmar NJ shore rental` },
  'long-branch':    { src: '/pics/hibachi-shot-2.jpg',       alt: (city) => `Hibachi chef at a Long Branch NJ event` },
  'ocean-city':     { src: '/pics/hibachi-pic-62.jpg',       alt: (city) => `Private hibachi chef at an Ocean City NJ rental` },
  'wildwood':       { src: '/pics/mobile-hibachi-2.jpg',     alt: (city) => `Hibachi chef at a Wildwood NJ shore house party` },
  'sea-isle-city':  { src: '/pics/hibachi-pic-32.jpg',       alt: (city) => `Private hibachi at a Sea Isle City NJ rental` },
  // Theme 3 (hero = hero-1.jpg)
  'princeton':      { src: '/pics/hibachi-chef-home.jpg',    alt: (city) => `Private hibachi chef at a Princeton NJ event` },
  'cherry-hill':    { src: '/pics/hibachi-dallas-home-2.jpg',alt: (city) => `Family hibachi event in Cherry Hill, NJ` },
  'edison':         { src: '/pics/hibachi-austin-home.jpg',  alt: (city) => `Large family hibachi in Edison, NJ` },
  'new-brunswick':  { src: '/pics/hibachi-catering-austin.jpg', alt: (city) => `Hibachi chef at a New Brunswick NJ event` },
  'toms-river':     { src: '/pics/hibachi-austin-home-2.jpg',alt: (city) => `Private hibachi in Toms River, NJ` },
  'middletown':     { src: '/pics/hibachi-chef-2.jpg',       alt: (city) => `Hibachi event in Middletown, NJ` },
  // Theme 4 (hero = backyard-hibachi-2.jpg)
  'cape-may':       { src: '/pics/hibachi-pic-2.jpg',        alt: (city) => `Private hibachi chef at a Cape May NJ vacation rental` },
  'stone-harbor':   { src: '/pics/hibachi-colorado.jpg',     alt: (city) => `Upscale private hibachi in Stone Harbor, NJ` },
  'avalon':         { src: '/pics/hibachi-colorado-home.jpg',alt: (city) => `Private hibachi chef in Avalon, NJ` },
  'spring-lake':    { src: '/pics/hero-3.jpg',               alt: (city) => `Elegant hibachi dining in Spring Lake, NJ` },
  'haddonfield':    { src: '/pics/hibachi-dallas-tyler.jpg', alt: (city) => `Private hibachi in Haddonfield, NJ` },
  'moorestown':     { src: '/pics/hibachi-dallas.jpg',       alt: (city) => `Private hibachi chef in Moorestown, NJ` },
  'mount-laurel':   { src: '/pics/hibachi-texas-home.jpg',   alt: (city) => `Hibachi event in Mount Laurel, NJ` },
  'red-bank':       { src: '/pics/hero-5.jpg',               alt: (city) => `Private hibachi chef in Red Bank, NJ` },
}

// ── Support images for 10 profileIdx cities ───────────────────────────────────
const NJ_SUPPORT_IMAGES = {
  'jersey-city': {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',      alt: (city) => `Guests at a Jersey City rooftop hibachi event`,   caption: 'Jersey City rooftop hibachi',         intro: (city) => `Rooftop hibachi events in ${city} get booked for a reason:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',   alt: (city) => `Private hibachi chef arriving in ${city}, NJ`,   caption: 'Your chef, your space, your evening' },
  },
  'hoboken': {
    testimonial: { src: '/pics/hibachi-at-home.jpg',      alt: (city) => `Bachelorette hibachi event in Hoboken, NJ`,       caption: 'Hoboken groups love private hibachi',  intro: (city) => `Hoboken hosts keep booking us back. Here's why:` },
    cta:         { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Private chef setup in Hoboken, NJ`,              caption: 'The Hoboken night everyone talks about' },
  },
  'princeton': {
    testimonial: { src: '/pics/backyard-hibachi-3.jpg',   alt: (city) => `Princeton graduation hibachi dinner`,             caption: 'Princeton graduation season',         intro: (city) => `Princeton families book us every graduation season:` },
    cta:         { src: '/pics/hibachi-pic-3.jpg',        alt: (city) => `Private hibachi chef at a Princeton NJ event`,   caption: 'When every restaurant is fully booked' },
  },
  'cherry-hill': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: (city) => `Family hibachi celebration in Cherry Hill, NJ`,  caption: 'South Jersey families celebrate here', intro: (city) => `South Jersey hosts know exactly what they\'re getting:` },
    cta:         { src: '/pics/private-hibachi.jpg',      alt: (city) => `Private hibachi chef in Cherry Hill, NJ`,        caption: 'South Jersey\'s private dining upgrade' },
  },
  'edison': {
    testimonial: { src: '/pics/hibachi-shot-1.jpg',       alt: (city) => `Large family hibachi gathering in Edison, NJ`,   caption: 'Edison families go big',              intro: (city) => `Edison families celebrate at scale. Here's what they say:` },
    cta:         { src: '/pics/hibachi-event.jpg',        alt: (city) => `Dual-station hibachi event in Edison, NJ`,       caption: 'Two stations, 50 guests, one night' },
  },
  'morristown': {
    testimonial: { src: '/pics/hero-4.jpg',               alt: (city) => `Corporate hibachi event in Morristown, NJ`,      caption: 'Morris County professionals',         intro: (city) => `Morristown professionals set the standard. Here's what they say:` },
    cta:         { src: '/pics/hibachi-photo-1.jpg',      alt: (city) => `Private hibachi chef in Morristown, NJ`,         caption: 'The Morris County team dinner standard' },
  },
  'montclair': {
    testimonial: { src: '/pics/hibachi-dallas.jpg',       alt: (city) => `Dinner party hibachi in Montclair, NJ`,          caption: 'Montclair dinner parties done right',  intro: (city) => `Montclair hosts have standards. Here's what they find:` },
    cta:         { src: '/pics/hibachi-chef-2.jpg',       alt: (city) => `Private hibachi chef in Montclair, NJ`,          caption: 'The Montclair backyard dinner party' },
  },
  'asbury-park': {
    testimonial: { src: '/pics/hibachi-shot-2.jpg',       alt: (city) => `Bachelorette hibachi weekend in Asbury Park, NJ`,caption: 'Asbury Park groups come back every summer', intro: (city) => `Asbury Park groups keep coming back. Here's why:` },
    cta:         { src: '/pics/traveling-hibachi.jpg',    alt: (city) => `Private hibachi chef at an Asbury Park event`,   caption: 'The Asbury weekend everyone talks about' },
  },
  'cape-may': {
    testimonial: { src: '/pics/hibachi-wilmington.jpg',   alt: (city) => `Private hibachi on a Cape May porch`,            caption: 'Cape May vacation rental hibachi',    intro: (city) => `Cape May guests come back every summer for this:` },
    cta:         { src: '/pics/hibachi-raleigh.jpg',      alt: (city) => `Private hibachi chef in Cape May, NJ`,           caption: 'The Cape May dinner everyone remembers' },
  },
  'red-bank': {
    testimonial: { src: '/pics/hibachi-texas-home.jpg',   alt: (city) => `Private hibachi dinner in Red Bank, NJ`,         caption: 'Red Bank\'s private dining scene',    intro: (city) => `Red Bank hosts know what a great dinner looks like:` },
    cta:         { src: '/pics/hibachi-austin.jpg',       alt: (city) => `Private hibachi chef in Red Bank, NJ`,           caption: 'Monmouth County\'s private dining upgrade' },
  },
}

// ── Support fallback images (per theme, for cities not in NJ_SUPPORT_IMAGES) ──
const NJ_SUPPORT_FALLBACKS = [
  // Theme 0 — North Jersey
  {
    testimonial: { src: '/pics/hibachi-austin-home-3.jpg', alt: (city) => `Private hibachi event in ${city}, NJ`,  caption: 'North Jersey clients rave',       intro: (city) => `North Jersey hosts keep coming back. Here's what ${city} events look like:` },
    cta:         { src: '/pics/hibachi-home-austin.jpg',   alt: (city) => `Private hibachi chef in ${city}, NJ`,   caption: 'Your ${city} evening starts here' },
  },
  // Theme 1 — Affluent Suburban
  {
    testimonial: { src: '/pics/hibachi-austin-2.jpg',      alt: (city) => `Hibachi backyard event in ${city}, NJ`, caption: 'NJ suburban hosts agree',         intro: (city) => `${city} hosts say it best:` },
    cta:         { src: '/pics/hibachi-austin-3.jpg',      alt: (city) => `Private hibachi chef in ${city}, NJ`,   caption: 'Your ${city} backyard, upgraded' },
  },
  // Theme 2 — Shore
  {
    testimonial: { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Shore house hibachi in ${city}, NJ`,    caption: 'Jersey Shore hosts agree',        intro: (city) => `Shore house hosts from ${city} keep booking us. Here's why:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',       alt: (city) => `Private hibachi chef in ${city}, NJ`,   caption: 'The ${city} shore dinner upgrade' },
  },
  // Theme 3 — Central / Family
  {
    testimonial: { src: '/pics/hibachi-texas-home-2.jpg',  alt: (city) => `Family hibachi gathering in ${city}, NJ`, caption: 'Central NJ families celebrate',   intro: (city) => `${city} families know how to celebrate. Here's what they say:` },
    cta:         { src: '/pics/hibachi-dallas-tyler-2.jpg',alt: (city) => `Private hibachi chef in ${city}, NJ`,   caption: 'Your ${city} family event, elevated' },
  },
  // Theme 4 — Upscale Shore / South Jersey
  {
    testimonial: { src: '/pics/hibachi-at-home.jpg',       alt: (city) => `Upscale private hibachi in ${city}, NJ`, caption: 'South Jersey & Shore hosts agree', intro: (city) => `${city} guests remember this dinner:` },
    cta:         { src: '/pics/hibachi-pic-3.jpg',         alt: (city) => `Private hibachi chef in ${city}, NJ`,   caption: 'The ${city} dinner everyone talks about' },
  },
]

// ── Closing variants (NJ generic 48–52, no ${city} in urgency) ───────────────
export const NJ_CLOSING_VARIANTS = [
  // 48 — North Jersey
  {
    headline: (city) => `Your ${city} Night Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `North Jersey weekend slots fill 2–4 weeks out. Check your date now.`,
  },
  // 49 — Affluent Suburban
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Book It`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `NJ suburban weekends book 2–3 weeks ahead. Secure your date now.`,
  },
  // 50 — Shore
  {
    headline: (city) => `The Shore House Dinner Everyone Remembers`,
    sub:      (city) => `A private hibachi chef comes to your ${city} rental — grill, ingredients, full show, and complete cleanup. From $60 per adult.`,
    urgency:  `Shore season books fast — confirm your summer date 4–6 weeks ahead.`,
  },
  // 51 — Central / Family
  {
    headline: (city) => `${city}'s Most Memorable Family Celebration`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `Graduation season books early — confirm your May or June date now.`,
  },
  // 52 — Upscale Shore / South Jersey
  {
    headline: (city) => `The Private Dining Experience ${city} Deserves`,
    sub:      (city) => `A certified hibachi chef comes to your ${city} property — premium ingredients, live performance, complete service. Starting at $60 per adult.`,
    urgency:  `Summer shore and South Jersey events fill fast. Reserve your date now.`,
  },
]

// ── City-specific closings (NJ city-specific 53–62) ───────────────────────────
export const NJ_CITY_CLOSINGS = [
  // 53 — Jersey City
  {
    headline: (city) => `Your Jersey City Night — Book It`,
    sub:      (city) => `Rooftop or outdoor space in Jersey City? A certified chef comes to you. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Jersey City rooftop and weekend slots fill fast. Check your date now.`,
  },
  // 54 — Hoboken
  {
    headline: (city) => `Hoboken's Best Private Dining Experience`,
    sub:      (city) => `One square mile, unlimited potential. A certified teppanyaki chef comes to your Hoboken space. Everything included. From $60/adult.`,
    urgency:  `Hoboken weekend events book 3+ weeks out. Check availability now.`,
  },
  // 55 — Princeton
  {
    headline: (city) => `Princeton Graduation Season — Don't Wait`,
    sub:      (city) => `When every restaurant is fully booked, we come to you. A certified hibachi chef at your Princeton rental or home. From $60/adult.`,
    urgency:  `Princeton graduation weekends book 6–8 weeks out. Reserve your date now.`,
  },
  // 56 — Cherry Hill
  {
    headline: (city) => `South Jersey's Private Chef Experience`,
    sub:      (city) => `A certified hibachi chef comes to your Cherry Hill home. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `South Jersey weekend slots go fast. Book your Cherry Hill event now.`,
  },
  // 57 — Edison
  {
    headline: (city) => `Edison's Celebration Standard — Book Yours`,
    sub:      (city) => `Groups of 10–60+ in Edison. Single or dual chef stations. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Large group dates in Edison fill quickly. Check availability now.`,
  },
  // 58 — Morristown
  {
    headline: (city) => `Morristown's Private Dining Standard`,
    sub:      (city) => `A certified teppanyaki chef for your Morristown corporate event or private gathering. Full setup and cleanup. From $60/adult.`,
    urgency:  `Morris County weekend events book 2–3 weeks ahead. Confirm your date.`,
  },
  // 59 — Montclair
  {
    headline: (city) => `Montclair's Best Dinner Party — Your Backyard`,
    sub:      (city) => `A certified hibachi chef comes to your Montclair property. All ingredients, full live performance, complete cleanup. From $60/adult.`,
    urgency:  `Montclair weekend slots fill 2–3 weeks out. Check your date now.`,
  },
  // 60 — Asbury Park
  {
    headline: (city) => `Your Asbury Weekend Just Found Its Best Night`,
    sub:      (city) => `A certified hibachi chef comes to your Asbury Park rental or home. Full setup, shore-ready, complete cleanup. From $60/adult.`,
    urgency:  `Asbury Park summer weekends book weeks in advance. Check availability now.`,
  },
  // 61 — Cape May
  {
    headline: (city) => `The Dinner Your Cape May Vacation Needed`,
    sub:      (city) => `A certified hibachi chef at your Cape May rental or estate. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Cape May summer dates fill 6–8 weeks out. Reserve yours now.`,
  },
  // 62 — Red Bank
  {
    headline: (city) => `Red Bank Hosts It Differently — Book Yours`,
    sub:      (city) => `A certified teppanyaki chef at your Red Bank home or outdoor venue. All ingredients, live performance, full cleanup. From $60/adult.`,
    urgency:  `Red Bank weekend events fill 2–3 weeks out. Check your date now.`,
  },
]

// ── Intro variants (NJ generic 48–52) ─────────────────────────────────────────
export const NJ_INTRO_VARIANTS = [
  // 48 — North Jersey / Urban
  {
    headline: (city) => `The NYC Alternative Comes to Your ${city} Rooftop`,
    opening:  (city, state) =>
      `You can see Manhattan from half the rooftops in ${city}. That sets the standard. Private hibachi at home in ${city} means a certified teppanyaki chef comes to your rooftop, courtyard, or outdoor space — with the full grill, all ingredients, and a live cooking performance that outshines any restaurant on either side of the Hudson.`,
    middle:   (city, state) =>
      `Your chef arrives 5–10 minutes before your scheduled start time with a full propane teppan grill, all proteins, rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, every dish cooked to order in front of your guests. One chef covers 10–20 guests; two stations for larger ${city} groups.`,
    closing:  (city, state) =>
      `Birthdays, bachelorette weekends, corporate team dinners, and celebration nights in ${city} book fast. Starting at $60 per adult, $600 event minimum. Skip the reservation battle. The chef comes to you.`,
  },
  // 49 — Affluent Suburban
  {
    headline: (city) => `Your ${city} Backyard Just Became the Best Seat in New Jersey`,
    opening:  (city, state) =>
      `You've spent years building the outdoor space. Now give it a reason. Private hibachi at home in ${city} brings a certified teppanyaki chef to your backyard — the full grill, all ingredients, the complete live performance, and total cleanup included. Your guests will talk about this dinner through next season.`,
    middle:   (city, state) =>
      `From the first onion volcano to the final plate of fried rice, your chef works the crowd for 90–120 minutes straight. Every protein cooked to order at the grill: chicken, steak, shrimp, salmon, and premium upgrades like filet mignon or lobster tail. Choose two proteins per guest at the standard rate or mix and match for the group.`,
    closing:  (city, state) =>
      `${city} weekend evenings book 2–3 weeks ahead. Corporate events, neighborhood gatherings, graduation parties, anniversary dinners — we've run them all across New Jersey's premier suburbs. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 50 — Shore / Summer
  {
    headline: (city, state) => `The Shore House Dinner Your ${city} Weekend Has Been Missing`,
    opening:  (city, state) =>
      `You have the rental, you have the crew — now get the experience that makes this the summer weekend everyone talks about for the next ten years. Private hibachi in ${city} brings a certified teppanyaki chef to your shore house or vacation rental. Live fire cooking, the full performance, every guest at the same outdoor table.`,
    middle:   (city, state) =>
      `Your chef arrives fully equipped: teppan grill, propane, all fresh proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or outdoor area. The show runs from first flame to last plate — no restaurant logistics, no group car coordination, no waiting for a table that was never big enough anyway.`,
    closing:  (city, state) =>
      `Jersey Shore dates during peak summer season (June–August) book 4–6 weeks ahead. Starting at $60 per adult, $600 event minimum. Confirm outdoor open-flame cooking is permitted at your rental before booking. Most Shore properties allow it.`,
  },
  // 51 — Central / Family
  {
    headline: (city) => `Where Every ${city} Celebration Becomes an Actual Event`,
    opening:  (city, state) =>
      `In ${city}, celebrations are not casual dinners — they are events. Private hibachi at home brings the scale and spectacle to match. A certified teppanyaki chef comes to your home with the full setup — 10 guests or 60, one station or two. The food is freshly grilled in front of your crowd. The chef makes the whole evening a show.`,
    middle:   (city, state) =>
      `Every guest picks two proteins at the standard $60/adult rate: chicken, steak, shrimp, salmon, or tofu. Premium upgrades — filet mignon, lobster tail, scallops — are available for any event. For groups over 25, we deploy dual chef stations to keep pace with the crowd. Fried rice, vegetables, and house-made sauces round out every plate.`,
    closing:  (city, state) =>
      `Graduation season (May–June) is our busiest time in ${city} and all of Central NJ — book 4–6 weeks ahead for Saturday events. All other occasions: most quotes are confirmed same-day. Starting at $60/adult, $30/child, $600 minimum.`,
  },
  // 52 — Upscale Shore / South Jersey
  {
    headline: (city) => `Private Dining Done Right in ${city}`,
    opening:  (city, state) =>
      `You have planned the gathering. You have chosen the setting. Now choose the dinner that earns the memory. Private hibachi in ${city} brings a certified teppanyaki chef to your vacation rental, estate, or private home — with fresh ingredients, complete setup, and a live performance your guests spend the rest of the summer describing.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. The live cooking performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup included. Your property is spotless when the chef leaves.`,
    closing:  (city, state) =>
      `South Jersey and Shore summer events book fast. Starting at $60 per adult, $600 event minimum. Premium proteins — filet mignon, lobster tail, scallops — available for upscale occasions. Most ${city} quotes returned same day.`,
  },
]

// ── City-specific intros (NJ city-specific 53–62) ─────────────────────────────
export const NJ_CITY_INTROS = [
  // 53 — Jersey City
  {
    headline: () => `Private Hibachi in Jersey City: The Chef Comes to Your Rooftop`,
    opening:  () =>
      `The restaurant scene in Jersey City is already world-class. But a private hibachi chef on your rooftop — with the Manhattan skyline behind the grill — is a different conversation entirely. We bring a certified teppanyaki chef directly to your Jersey City rooftop, courtyard, or building outdoor space. Full setup, all ingredients, and a live cooking performance that makes your gathering the best night anyone has had in the city.`,
    middle:   () =>
      `Your chef arrives 5–10 minutes before your start time with the complete setup: propane teppan grill, all fresh proteins, rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, every dish cooked to order in front of your crowd. One station for up to 20 guests; two stations for larger Jersey City events.`,
    closing:  () =>
      `Jersey City rooftop and weekend evening events book 3–4 weeks ahead. Birthdays, bachelorette weekends, corporate team dinners, and milestone nights. Starting at $60/adult, $30/child, $600 event minimum. Skip the table wait. The chef comes to you.`,
  },
  // 54 — Hoboken
  {
    headline: () => `Private Hibachi in Hoboken: A Night Your Group Won't Stop Talking About`,
    opening:  () =>
      `Hoboken has one square mile, 60,000 people, and more bachelorette parties per capita than anywhere in New Jersey. When you want an experience that is actually different — not another bar night, not another restaurant reservation — private hibachi is the move. Your Hoboken rooftop, outdoor deck, or rented space becomes the venue. The chef brings everything else.`,
    middle:   () =>
      `Your certified teppanyaki chef arrives fully equipped with the teppan grill, propane, all proteins, fried rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on any flat outdoor surface. The show runs 90–120 minutes from first flame to final plate — the full performance, every dish cooked to order, complete cleanup when dinner is done.`,
    closing:  () =>
      `Hoboken weekend events book 2–3 weeks out during peak season. Bachelorette weekends, birthday dinners, corporate gatherings, and neighborhood parties are our most-booked occasions here. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 55 — Princeton
  {
    headline: () => `Private Hibachi in Princeton: The Graduation Dinner Everyone Remembers`,
    opening:  () =>
      `May and June in Princeton mean one thing: the nation's most celebrated graduates, surrounded by family members who flew across the country for this moment. Every restaurant is booked solid from April. Private hibachi at your Princeton rental or backyard means your party does not compete with anyone else's. Your certified chef comes to you with the full setup and performance.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The live cooking performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked fresh at the grill in front of your family. For large Princeton graduation parties, dual-station capacity is available for groups of 25–60+.`,
    closing:  () =>
      `Princeton graduation weekends book 6–8 weeks in advance. Families who plan ahead get their date locked; those who wait discover the calendar is full. Starting at $60/adult, $30/child, $600 event minimum. Most quotes returned same day for non-peak occasions.`,
  },
  // 56 — Cherry Hill
  {
    headline: () => `Private Hibachi in Cherry Hill: South Jersey's Chef Experience`,
    opening:  () =>
      `Cherry Hill is South Jersey's gathering point — where the big family celebrations happen, where graduation parties run until midnight, where the neighborhood events need to match the neighborhood. Private hibachi at home in Cherry Hill brings a certified teppanyaki chef to your backyard, with the full setup, all proteins, and a live cooking performance that handles 10 guests or 60.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, all fresh proteins, rice, vegetables, sauces, plates, and chopsticks. The show runs 90–120 minutes from first flame to final plate. For larger South Jersey gatherings, dual-station capacity is available. Every plate is cooked to order at the grill in front of your guests. Full cleanup when dinner is done.`,
    closing:  () =>
      `Cherry Hill weekend evenings and graduation season dates book 3–4 weeks ahead. Birthdays, family reunions, quinceañeras, corporate events, and neighborhood gatherings are our most-booked occasions in South Jersey. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 57 — Edison
  {
    headline: () => `Private Hibachi in Edison: Where Every Celebration Goes Bigger`,
    opening:  () =>
      `Edison does not do small gatherings. When a family gets together here, it is 30 people minimum — three generations in the backyard, a dinner that needs to match the occasion. Private hibachi at home brings a certified teppanyaki chef with dual-station capacity for large groups, fresh proteins for every guest, and a live cooking performance that turns any backyard into a spectacle.`,
    middle:   () =>
      `Your chef (or two chefs for large groups) arrives with everything: teppan grills, propane, all proteins, fried rice, vegetables, sauces, plates, and chopsticks. Every guest chooses two proteins at the standard rate. Cultural celebration menus — quinceañeras, poojas, graduation dinners, milestone events — are our most common booking in Edison. The chef adapts to the crowd.`,
    closing:  () =>
      `Edison events book fast for graduation season and major cultural holidays. For groups over 25, reserve at least 3–4 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. Most quotes are confirmed within hours. Dual-station events available for 30+ guests.`,
  },
  // 58 — Morristown
  {
    headline: () => `Private Hibachi in Morristown: Morris County's Private Chef Standard`,
    opening:  () =>
      `Morristown hosts pharma executives, biotech directors, and the professionals who drive New Jersey's most important industries. When those people host events — team dinners, client entertaining, neighborhood gatherings — the standard is set high. Private hibachi at home in Morristown brings a certified teppanyaki chef with the full performance setup. Not catering. An experience.`,
    middle:   () =>
      `Your chef arrives with the complete setup: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, precision cooking, every plate to order. Premium upgrades including filet mignon, lobster tail, and scallops are available for corporate and upscale private events. Full cleanup when dinner is done.`,
    closing:  () =>
      `Morris County weekend evenings book 2–3 weeks out. Corporate team events, client dinners, and neighborhood gatherings are our most common bookings in Morristown. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes returned same day.`,
  },
  // 59 — Montclair
  {
    headline: () => `Private Hibachi in Montclair: The Dinner Party Your Guests Actually Remember`,
    opening:  () =>
      `Montclair is the kind of town that takes dinner seriously. The restaurant scene, the food culture, the Saturday morning farmers market crowd — your guests know the difference between a good dinner and a great one. Private hibachi at home in Montclair brings a certified teppanyaki chef to your backyard or patio, with fresh proteins, a full live-fire performance, and the kind of dinner party that starts a group text thread before the chef finishes packing up.`,
    middle:   () =>
      `Your chef arrives with everything needed: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The show runs 90–120 minutes from first flame to final plate. Fire tricks, flying shrimp, precision knife work — every guest is involved the entire time. Full cleanup when dinner is done.`,
    closing:  () =>
      `Montclair backyard evenings book 2–3 weeks ahead during peak spring and summer. Birthdays, anniversary dinners, neighborhood gatherings, and bachelorette parties are our most common bookings here. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 60 — Asbury Park
  {
    headline: () => `Private Hibachi in Asbury Park: The Shore Weekend That Goes Differently`,
    opening:  () =>
      `Asbury Park does not follow a script. The bachelorette groups renting houses behind the beach, the friend groups doing a long weekend — they are not looking for another restaurant reservation. Private hibachi at your Asbury Park rental brings a certified teppanyaki chef to your backyard or deck, with the full show, live fire, and the food your weekend actually needed.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck or backyard. The performance runs 90–120 minutes — fire tricks, flying shrimp, every plate cooked to order at the grill. Complete cleanup when dinner is done. Your rental stays spotless.`,
    closing:  () =>
      `Asbury Park summer weekends book 3–5 weeks ahead. Bachelorette weekends, birthday dinners, shore house group events, and long-weekend gatherings are our most common bookings here. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor open-flame cooking is permitted at your rental before booking.`,
  },
  // 61 — Cape May
  {
    headline: () => `Private Hibachi in Cape May: The Dinner Everyone Still Talks About`,
    opening:  () =>
      `Cape May brings everyone together — family reunion groups, girls' trips, wedding weekends, the same extended family who has rented the same Victorian for fifteen summers. Private hibachi at your Cape May rental means the night everyone remembers is the evening a certified teppanyaki chef cooked in front of your group on the wraparound porch, and your grandmother said she had eaten better here than at any restaurant in twenty years.`,
    middle:   () =>
      `Your chef arrives with the complete setup: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes on your deck, patio, or outdoor property area. Premium proteins — filet mignon, lobster tail, scallops — are available for upscale vacation occasions. Full cleanup when dinner is done.`,
    closing:  () =>
      `Cape May summer dates book 6–8 weeks ahead. Confirm outdoor open-flame cooking is permitted at your property before reserving. Rehearsal dinners, family reunions, anniversary celebrations, and vacation group dinners are our most common Cape May bookings. Starting at $60/adult, $600 minimum.`,
  },
  // 62 — Red Bank
  {
    headline: () => `Private Hibachi in Red Bank: Monmouth County's Best Private Dinner`,
    opening:  () =>
      `Red Bank has the arts scene, the Navesink waterfront, and a food culture that makes residents genuinely particular about what they eat. When you host in Red Bank, the bar is already high. Private hibachi at your Red Bank property brings a certified teppanyaki chef with the full setup and live performance — the kind of dinner that starts a conversation about who hosts next.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The show runs 90–120 minutes from first flame to final plate. Premium proteins including filet mignon and lobster tail are available for upscale Red Bank occasions. Full cleanup when dinner is done.`,
    closing:  () =>
      `Red Bank weekend events book 2–3 weeks ahead. Serving Red Bank and all of Monmouth County — Rumson, Little Silver, Middletown, Fair Haven, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes returned same day.`,
  },
]

// ── Blog posts (5 theme variants × 3 posts) ───────────────────────────────────
const NJ_BLOG_POSTS = [
  // Theme 0 — North Jersey
  [
    { slug: 'hibachi-bachelorette-party',          title: 'How to Plan the Perfect Hibachi Bachelorette Party',         excerpt: 'Rooftop hibachi for bachelorette weekends — why it\'s become the go-to choice for North Jersey groups.', date: '2025-03-15' },
    { slug: 'hibachi-catering-corporate-events',   title: 'Hibachi Catering for Corporate Events',                       excerpt: 'Private hibachi for team dinners, client events, and corporate gatherings in the NYC metro area.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',       title: 'Hibachi at Home vs. Restaurant: Which Is Better?',           excerpt: 'Why NYC-adjacent professionals are choosing private hibachi over restaurant dining for group events.', date: '2025-01-22' },
  ],
  // Theme 1 — Affluent Suburban
  [
    { slug: 'hibachi-birthday-party-ideas',        title: 'Hibachi Birthday Party Ideas for Any Backyard',               excerpt: 'How to host the ultimate backyard hibachi birthday party in NJ\'s most sought-after suburbs.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party',title: 'How to Plan a Backyard Hibachi Party',                       excerpt: 'From Summit to Ridgewood — everything you need to know about backyard hibachi in New Jersey.', date: '2025-02-28' },
    { slug: 'hibachi-catering-corporate-events',   title: 'Hibachi Catering for Corporate Events',                       excerpt: 'Morris County and Somerset County\'s guide to hibachi team events for pharma and tech companies.', date: '2025-02-10' },
  ],
  // Theme 2 — Shore
  [
    { slug: 'how-to-plan-a-backyard-hibachi-party',title: 'How to Plan a Shore House Hibachi Party',                    excerpt: 'Shore house hibachi guide: everything you need to know about booking a chef for your Jersey Shore rental.', date: '2025-02-28' },
    { slug: 'hibachi-bachelorette-party',          title: 'Shore Bachelorette Weekend: Why Hibachi Wins',                excerpt: 'From Asbury Park to Cape May — how hibachi became the Jersey Shore\'s best bachelorette dinner option.', date: '2025-03-15' },
    { slug: 'hibachi-family-celebrations-texas',   title: 'Planning a Family Reunion Hibachi Dinner',                   excerpt: 'How to host a multigenerational family reunion hibachi event at your Shore rental.', date: '2024-12-05' },
  ],
  // Theme 3 — Central / Family
  [
    { slug: 'hibachi-family-celebrations-texas',   title: 'Family Hibachi Celebrations: A Complete Guide',               excerpt: 'Large group hibachi events in Central NJ — Edison, Princeton, and Cherry Hill family celebrations.', date: '2024-12-05' },
    { slug: 'hibachi-birthday-party-ideas',        title: 'Graduation Party Hibachi: Why It Works',                     excerpt: 'Princeton graduation season is here — why private hibachi is the best alternative to fully-booked restaurants.', date: '2025-04-08' },
    { slug: 'how-much-does-private-hibachi-cost',  title: 'How Much Does a Private Hibachi Chef Cost in NJ?',           excerpt: 'Pricing breakdown for private hibachi events in New Jersey — what to expect for groups of 10 to 60.', date: '2025-01-15' },
  ],
  // Theme 4 — Upscale Shore / South Jersey
  [
    { slug: 'what-to-expect-hibachi-chef-home',    title: 'What to Expect When You Book a Private Hibachi Chef',        excerpt: 'Cape May, Stone Harbor, and Avalon: what upscale Shore guests experience at a private hibachi event.', date: '2024-11-20' },
    { slug: 'hibachi-at-home-vs-restaurant',       title: 'Private Hibachi vs. Restaurant: The Shore House Verdict',    excerpt: 'Why Shore vacation rental guests are choosing private hibachi over restaurant dining every summer.', date: '2025-01-22' },
    { slug: 'how-much-does-private-hibachi-cost',  title: 'Private Hibachi Cost in South Jersey — What to Expect',     excerpt: 'Pricing, packages, and what\'s included when you book a private hibachi chef for a South Jersey event.', date: '2025-01-15' },
  ],
]

// ── Major cities map (all 37 NJ cities) ───────────────────────────────────────
const NJ_MAJOR_CITIES = {
  // ── Theme 0 — North Jersey / Urban ──────────────────────────────────────────
  'jersey-city':    { v: 0, profileIdx: 0, nearby: ['Hoboken','Bayonne','Harrison','Weehawken','Union City','Secaucus','Kearny'] },
  'hoboken':        { v: 0, profileIdx: 1, nearby: ['Jersey City','Weehawken','Union City','Edgewater','Fort Lee','Secaucus'] },
  'fort-lee':       { v: 0, nearby: ['Edgewater','Cliffside Park','Palisades Park','Englewood','Leonia','Ridgefield'] },
  'hackensack':     { v: 0, nearby: ['Paramus','River Edge','Teaneck','Bergenfield','Maywood','South Hackensack'] },
  'paramus':        { v: 0, nearby: ['Ridgewood','Fair Lawn','Hackensack','Glen Rock','Saddle Brook','Emerson'] },
  // ── Theme 1 — Affluent Suburban ─────────────────────────────────────────────
  'morristown':     { v: 1, profileIdx: 5, nearby: ['Montclair','Bridgewater','Madison','Chatham','Florham Park','Morris Plains','Parsippany','Whippany'] },
  'montclair':      { v: 1, profileIdx: 6, nearby: ['Bloomfield','Glen Ridge','Verona','Nutley','West Orange','Cedar Grove','Clifton'] },
  'summit':         { v: 1, nearby: ['Chatham','New Providence','Berkeley Heights','Westfield','Madison','Springfield','Millburn'] },
  'westfield':      { v: 1, nearby: ['Cranford','Scotch Plains','Fanwood','Mountainside','Clark','Garwood','Linden'] },
  'ridgewood':      { v: 1, nearby: ['Ho-Ho-Kus','Wyckoff','Glen Rock','Fair Lawn','Hawthorne','Midland Park','Waldwick'] },
  'short-hills':    { v: 1, nearby: ['Livingston','Maplewood','South Orange','Summit','Springfield','Chatham','Millburn'] },
  'livingston':     { v: 1, nearby: ['West Orange','Roseland','Florham Park','Short Hills','East Hanover','Chatham','Cedar Knolls'] },
  'chatham':        { v: 1, nearby: ['Madison','Summit','New Providence','Florham Park','Berkeley Heights','Harding Township'] },
  'bridgewater':    { v: 1, nearby: ['Morristown','Princeton','Somerville','Bound Brook','Warren','Raritan','Hillsborough','Manville'] },
  'marlboro':       { v: 1, nearby: ['Morganville','Old Bridge','Manalapan','Holmdel','Aberdeen','Freehold','Matawan'] },
  'holmdel':        { v: 1, nearby: ['Marlboro','Aberdeen','Hazlet','Keyport','Middletown','Colts Neck','Matawan'] },
  // ── Theme 2 — Shore / Summer ────────────────────────────────────────────────
  'asbury-park':    { v: 2, profileIdx: 7, nearby: ['Ocean Grove','Bradley Beach','Neptune','Long Branch','Belmar','Avon-by-the-Sea','Deal'] },
  'point-pleasant': { v: 2, nearby: ['Toms River','Brielle','Manasquan','Bay Head','Brick','Wall Township','Sea Girt','Lavallette'] },
  'belmar':         { v: 2, nearby: ['Spring Lake','Sea Girt','Avon-by-the-Sea','Wall Township','Manasquan','Bradley Beach'] },
  'long-branch':    { v: 2, nearby: ['Asbury Park','Deal','Monmouth Beach','Sea Bright','Elberon','Red Bank','Little Silver'] },
  'ocean-city':     { v: 2, nearby: ['Sea Isle City','Strathmere','Somers Point','Northfield','Linwood','Marmora'] },
  'wildwood':       { v: 2, nearby: ['Cape May','North Wildwood','Wildwood Crest','Sea Isle City','Stone Harbor','Rio Grande'] },
  'sea-isle-city':  { v: 2, nearby: ['Avalon','Ocean City','Strathmere','Cape May Court House','Wildwood','Stone Harbor'] },
  // ── Theme 3 — Central / Family ──────────────────────────────────────────────
  'princeton':      { v: 3, profileIdx: 2, nearby: ['West Windsor','Plainsboro','Lawrence','Montgomery','Princeton Junction','Hopewell','Pennington'] },
  'cherry-hill':    { v: 3, profileIdx: 3, nearby: ['Voorhees','Marlton','Haddonfield','Moorestown','Mount Laurel','Medford','Collingswood'] },
  'edison':         { v: 3, profileIdx: 4, nearby: ['Woodbridge','Piscataway','Old Bridge','South Plainfield','Metuchen','New Brunswick','Middlesex'] },
  'new-brunswick':  { v: 3, nearby: ['Highland Park','Milltown','Piscataway','Edison','South River','Metuchen','East Brunswick'] },
  'toms-river':     { v: 3, nearby: ['Point Pleasant','Brick','Beachwood','Lakewood','Lacey Township','Berkeley Township','Seaside Heights','Island Heights'] },
  'middletown':     { v: 3, nearby: ['Keyport','Keansburg','Red Bank','Aberdeen','Hazlet','Holmdel','Fair Haven'] },
  // ── Theme 4 — Upscale Shore / South Jersey ──────────────────────────────────
  'cape-may':       { v: 4, profileIdx: 8, nearby: ['West Cape May','Cape May Point','Wildwood','North Wildwood','Stone Harbor','Avalon','Rio Grande'] },
  'stone-harbor':   { v: 4, nearby: ['Avalon','Sea Isle City','Cape May','North Wildwood','Strathmere','Cape May Court House'] },
  'avalon':         { v: 4, nearby: ['Stone Harbor','Sea Isle City','Ocean City','North Wildwood','Cape May','Strathmere'] },
  'spring-lake':    { v: 4, nearby: ['Sea Girt','Manasquan','Belmar','Avon-by-the-Sea','Wall Township','Point Pleasant','Brielle'] },
  'haddonfield':    { v: 4, nearby: ['Cherry Hill','Collingswood','Westmont','Voorhees','Marlton','Merchantville','Magnolia'] },
  'moorestown':     { v: 4, nearby: ['Mount Laurel','Marlton','Cherry Hill','Haddonfield','Medford','Lumberton','Hainesport'] },
  'mount-laurel':   { v: 4, nearby: ['Marlton','Hainesport','Lumberton','Moorestown','Medford','Bordentown','Eastampton'] },
  'red-bank':       { v: 4, profileIdx: 9, nearby: ['Rumson','Fair Haven','Little Silver','Shrewsbury','Middletown','Tinton Falls','Keyport'] },
}

// ── Display name overrides (fixes slugToCity() failures) ──────────────────────
const NJ_CITY_DISPLAY_NAMES = {
  'jersey-city':    'Jersey City',
  'fort-lee':       'Fort Lee',
  'short-hills':    'Short Hills',
  'long-branch':    'Long Branch',
  'point-pleasant': 'Point Pleasant',
  'asbury-park':    'Asbury Park',
  'ocean-city':     'Ocean City',
  'sea-isle-city':  'Sea Isle City',
  'stone-harbor':   'Stone Harbor',
  'cape-may':       'Cape May',
  'spring-lake':    'Spring Lake',
  'red-bank':       'Red Bank',
  'new-brunswick':  'New Brunswick',
  'toms-river':     'Toms River',
  'mount-laurel':   'Mount Laurel',
}

// ── Main builder ──────────────────────────────────────────────────────────────
export function getNjCityData(citySlug, cityName) {
  const major       = NJ_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getNJVariantIndex(citySlug)
  const theme       = NJ_IMAGE_THEMES[v]
  const displayName = NJ_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'New Jersey',
    stateAbbr:    'NJ',
    stateSlug:    'new-jersey',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: NJ_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['Jersey City', 'Princeton', 'Cherry Hill', 'Red Bank', 'Cape May'],
    localHighlights:   NJ_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: NJ_OCCASIONS[v],
    faqSet:            NJ_FAQ_SETS[v](displayName),
    testimonials:      NJ_TESTIMONIALS[v],
    // INTRO_VARIANTS: 48–52 = NJ generic, 53–62 = NJ city-specific
    uniqueIntroVariant:  (major?.profileIdx != null) ? 53 + major.profileIdx : 48 + v,
    uniqueWhyUsVariant:  v,
    // CLOSING_VARIANTS: 48–52 = NJ generic, 53–62 = NJ city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 53 + major.profileIdx : 48 + v,
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getNjHowItWorks(citySlug) {
  const major = NJ_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getNJVariantIndex(citySlug)
  return NJ_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getNjSectionVariant(citySlug) {
  const major = NJ_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getNJVariantIndex(citySlug)
  return NJ_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getNjCityImage(citySlug) {
  return NJ_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getNjSupportImages(citySlug, variantIdx) {
  if (NJ_SUPPORT_IMAGES[citySlug]) return NJ_SUPPORT_IMAGES[citySlug]
  const major = NJ_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getNJVariantIndex(citySlug)
  return NJ_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getNjBlogPosts(variant, count) {
  return NJ_BLOG_POSTS[variant % NJ_BLOG_POSTS.length].slice(0, count)
}
