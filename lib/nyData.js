// =============================================================================
// lib/nyData.js — New York Expansion
// 51 cities · 5 geographic themes
// Theme 0: NYC Metro (New York City, Brooklyn, Queens, The Bronx, Staten Island, Flushing)
// Theme 1: Westchester / Long Island Affluent (22 cities)
// Theme 2: Hamptons / East End (Southampton, East Hampton, Montauk, Shelter Island)
// Theme 3: Hudson Valley / Catskills / Adirondacks (13 cities)
// Theme 4: Western NY / Capital Region / Family (6 cities)
//
// INTRO_VARIANTS indices:  63–67 NY generic · 68–82 NY city-specific
// CLOSING_VARIANTS indices: 63–67 NY generic · 68–82 NY city-specific
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getNYVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 5
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const NY_HERO_SUBTITLES = [
  (city) => `Rooftop Entertaining · Corporate Dinners · Private Events · Serving ${city} & NYC`,
  (city) => `Backyard Private Dining · Graduation Parties · Milestone Celebrations · Serving ${city}`,
  (city) => `Summer House Gatherings · Vacation Rental Dining · Hamptons Events · Serving ${city}`,
  (city) => `Lake House Parties · Weekend Rental Events · Scenic Outdoor Dining · Serving ${city}`,
  (city) => `Backyard Hibachi · Family Celebrations · Community Events · Serving ${city} & Upstate NY`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const NY_LOCAL_HIGHLIGHTS = [
  // Theme 0 — NYC Metro
  (city) => [
    `Rooftop and terrace hibachi events serving ${city} and all five boroughs`,
    'Perfect for bachelorette parties, corporate dinners, and milestone birthday celebrations',
    'Ideal for brownstone backyards, building courtyards, and outdoor common spaces',
    'Corporate team dinners for finance, media, tech, and professional services firms',
    'Premium private dining in New York City at a fraction of restaurant event costs',
    'The chef comes to your space — no reservation battles, no crowded dining rooms',
  ],
  // Theme 1 — Westchester / Long Island Affluent
  (city) => [
    `Backyard private dining for ${city}'s most discerning suburban hosts`,
    'Perfect for graduation parties, milestone birthdays, and anniversary celebrations',
    'Ideal for neighborhood gatherings throughout Westchester and Long Island communities',
    `Corporate events for the ${city} area business corridor`,
    `Summer and graduation season are peak times in ${city} — book 3–4 weeks ahead`,
    'Full setup and cleanup — you provide the space, we handle everything else',
  ],
  // Theme 2 — Hamptons / East End
  (city) => [
    `Summer house private dining for vacation rentals and estates in ${city}`,
    'Perfect for bachelorette weekends, anniversary celebrations, and family reunions',
    `Chef comes directly to your ${city} rental — no reservation battles, no crowded dining room`,
    'Memorial Day to Labor Day is peak Hamptons season — reserve your chef 6–8 weeks ahead',
    'Premium proteins and live-fire performance in your vacation property outdoor space',
    'Full setup and cleanup included — your rental property stays spotless',
  ],
  // Theme 3 — Hudson Valley / Catskills / Adirondacks
  (city) => [
    `Lake house and vacation rental hibachi for weekend getaways near ${city}`,
    'Perfect for Airbnb groups, bachelorette weekends, and family reunion dinners',
    'Ideal for Hudson Valley foliage season events — September through November',
    `Chef travels to your ${city} rental, farm property, or private home`,
    'From the Catskills to the Adirondacks — we serve the full Hudson Valley region',
    'Full setup and cleanup included — your weekend getaway stays effortless',
  ],
  // Theme 4 — Western NY / Capital Region / Family
  (city) => [
    `Backyard hibachi parties for ${city} families and community gatherings`,
    'Perfect for graduation parties, birthday milestones, and family reunions',
    'Ideal for Buffalo, Rochester, and Albany-area community celebrations',
    `Corporate team events for Western NY and Capital Region businesses in and around ${city}`,
    'Fall tailgate seasons and year-round backyard entertaining across upstate New York',
    'Full setup and cleanup — the best alternative to restaurant group dining in ${city}',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const NY_OCCASIONS = [
  // Theme 0 — NYC Metro
  ['Birthday Parties','Bachelorette Parties','Corporate Team Dinners','Rooftop Events','Anniversary Dinners','Graduation Parties','Bachelor Parties','Holiday Gatherings','Date Nights','Engagement Parties'],
  // Theme 1 — Westchester / Long Island Affluent
  ['Birthday Parties','Graduation Parties','Anniversary Dinners','Corporate Events','Neighborhood Gatherings','Bachelorette Parties','Family Reunions','Holiday Dinners','Retirement Parties','Milestone Celebrations'],
  // Theme 2 — Hamptons / East End
  ['Summer House Parties','Bachelorette Weekends','Anniversary Getaways','Birthday Parties','Family Reunions','Girls Trips','Bachelor Parties','Engagement Parties','Rehearsal Dinners','Vacation Group Dinners'],
  // Theme 3 — Hudson Valley / Catskills / Adirondacks
  ['Vacation Rental Parties','Bachelorette Weekends','Family Reunions','Birthday Parties','Anniversary Getaways','Lake House Dinners','Corporate Retreats','Engagement Parties','Graduation Trips','Girls Weekends'],
  // Theme 4 — Western NY / Capital Region
  ['Birthday Parties','Graduation Parties','Family Reunions','Anniversary Dinners','Corporate Events','Neighborhood Block Parties','Holiday Gatherings','Tailgate Parties','Retirement Parties','Backyard BBQ Alternatives'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const NY_FAQ_SETS = [
  // Theme 0 — NYC Metro
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} rooftop or building outdoor space?`,
      a: `Yes — rooftop terraces, building courtyards, and outdoor common areas throughout the five boroughs are among our most popular setups. We coordinate with your building or property manager in advance to ensure smooth access. We need a minimum 10×10 ft flat outdoor area with clearance from overhead structures.`,
    },
    {
      q: `What NYC neighborhoods do you serve?`,
      a: `We serve all five boroughs — Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. Whether you're in the West Village, Astoria, Williamsburg, Riverdale, or Park Slope, a certified teppanyaki chef can come to your outdoor space. No travel fee for most NYC locations within our standard service radius.`,
    },
    {
      q: `Can you handle corporate team dinners for NYC companies?`,
      a: `Absolutely — corporate team events, client appreciation dinners, and office party setups are a major part of our NYC business. We've run events for finance, media, tech, and professional services firms across the boroughs. For groups over 25, we bring two chef stations. Outdoor rooftop and terrace setups are ideal for the corporate NYC format.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend evenings and holiday weekends in NYC book 3–5 weeks out. Peak summer months and the September–November social season move fastest. Bachelorette weekends and birthday events in popular Brooklyn and Manhattan neighborhoods can fill 4+ weeks ahead. Weekday events typically have more availability — 1–2 weeks' notice is usually sufficient.`,
    },
    {
      q: `Can you set up in a ${city} brownstone backyard or rooftop apartment space?`,
      a: `Yes — brownstone backyards, rooftop decks, and building terraces are all excellent hibachi setups. We need a flat outdoor area of at least 10×10 ft. Most NYC outdoor spaces meet this requirement. We do not cook indoors in enclosed apartments without proper ventilation and a suitable outdoor connection.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most five-borough locations. For events in outer borough neighborhoods or locations more than 30 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you book.`,
    },
  ],
  // Theme 1 — Westchester / Long Island Affluent
  (city) => [
    {
      q: `Can hibachi be set up in a ${city} backyard or patio?`,
      a: `Yes — suburban backyards and patios in Westchester and Long Island are our most common setup environment. We need a flat area of at least 10×10 ft. Deck, lawn, paver patio, or stone patio all work. Our setup is fully self-contained — we bring everything and take everything with us.`,
    },
    {
      q: `Do you serve ${city} and surrounding Westchester and Long Island communities?`,
      a: `Yes — we serve all of Westchester County and Long Island, including ${city} and all surrounding neighborhoods. Most locations in Westchester and Nassau/Suffolk Counties fall within our standard service radius with no added travel fee.`,
    },
    {
      q: `How far in advance should I book for a ${city} graduation party?`,
      a: `Graduation season (May–June) is our highest-demand window across Westchester and Long Island. We recommend booking 4–6 weeks in advance for any May or June Saturday event in ${city}. Weekday graduation dinners have more flexibility — 2–3 weeks' notice is typically sufficient.`,
    },
    {
      q: `Can you handle a large graduation or milestone party in ${city}?`,
      a: `Absolutely — parties of 25–60 guests are among our most common bookings in the ${city} area. For groups over 25, we bring two chef stations running in parallel to maintain quality and timing. Large milestone events — anniversary parties, retirement dinners, big birthdays — are a specialty.`,
    },
    {
      q: `Do you do corporate team events for ${city} area companies?`,
      a: `Yes — Westchester and Long Island have strong demand from corporate and professional services firms. We can set up at corporate outdoor spaces, private venues, or residential properties. Full event coordination and confirmation included with every booking.`,
    },
    {
      q: `What do I need to provide for the event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all ingredients and proteins, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included.`,
    },
  ],
  // Theme 2 — Hamptons / East End
  (city) => [
    {
      q: `Can you come to our ${city} summer house or vacation rental?`,
      a: `Absolutely — Hamptons and East End vacation properties are among our most popular booking locations. We come directly to your rental property. Just confirm the house allows outdoor open-flame cooking (most do), and we handle everything from there.`,
    },
    {
      q: `How far in advance should I book a ${city} summer event?`,
      a: `Hamptons summer weekends — Memorial Day through Labor Day — fill up extremely fast. We strongly recommend booking 6–8 weeks in advance for peak July and August events. Prime July 4th weekend and August weekends at top East End destinations can book out weeks in advance during peak season.`,
    },
    {
      q: `Can you set up on the deck or patio of a ${city} rental property?`,
      a: `Yes — outdoor decks, patios, and yard spaces at Hamptons rentals are our ideal setup. We need a flat outdoor area of at least 10×10 ft with clearance overhead. Most Hamptons and East End rental properties have excellent deck or backyard setups already in place.`,
    },
    {
      q: `Do you serve all Hamptons and East End communities?`,
      a: `Yes — we serve the full Hamptons and East End including Southampton, East Hampton, Bridgehampton, Sag Harbor, Montauk, Shelter Island, Water Mill, Westhampton, and surrounding villages. Travel fees may apply for the most remote East End locations.`,
    },
    {
      q: `Is hibachi a good option for a ${city} bachelorette weekend?`,
      a: `It's the best option. The combination of live cooking, fire tricks, and everyone gathered around the grill creates exactly the energy a bachelorette group wants. We've done dozens of Hamptons bachelorette events. The chef makes the evening — no restaurant reservation required.`,
    },
    {
      q: `What happens if the weather changes at our Hamptons event?`,
      a: `We cook in light rain under appropriate shelter. For severe weather or lightning, we'll work with you to reschedule at no penalty — Hamptons summer weather is something we understand deeply. Covered decks, porches, and poolside pavilions make excellent backup setups.`,
    },
  ],
  // Theme 3 — Hudson Valley / Catskills / Adirondacks
  (city) => [
    {
      q: `Can you come to a lake house or vacation rental near ${city}?`,
      a: `Absolutely — Hudson Valley, Catskill, and Adirondack vacation rentals are among our most popular booking locations. We come directly to your rental property. Just confirm the property allows outdoor open-flame cooking, and we handle everything from there.`,
    },
    {
      q: `How far in advance should I book a ${city} weekend event?`,
      a: `For weekend events in the Hudson Valley, Catskills, and Adirondacks, we recommend booking 3–4 weeks ahead. Fall foliage season (September–October) and summer peak season fill fastest. Weekday events and mid-week rentals typically have more flexibility.`,
    },
    {
      q: `Do you travel to the Catskills, Adirondacks, and Hudson Valley?`,
      a: `Yes — we serve the full Hudson Valley corridor from Poughkeepsie and Beacon through Kingston, Woodstock, New Paltz, and Rhinebeck, plus the Catskill communities and Adirondack destinations like Lake George, Lake Placid, and Saratoga Springs. Travel fees may apply for the most remote locations.`,
    },
    {
      q: `Can you set up on a deck or patio at a ${city} rental property?`,
      a: `Yes — outdoor decks, patios, and yard spaces at Hudson Valley and Catskill rentals are our typical setup. We need a flat outdoor area of at least 10×10 ft with clearance overhead. Most vacation rental properties in the region have suitable outdoor spaces.`,
    },
    {
      q: `What's the best outdoor setup for a ${city} vacation rental event?`,
      a: `Open decks, large patios, and flat yard areas all work perfectly. We need a minimum 10×10 ft flat surface. Our setup takes 20–30 minutes and the show runs 90–120 minutes. We pack everything out completely when dinner is done — your rental property stays immaculate.`,
    },
    {
      q: `Do you serve smaller Hudson Valley communities and towns near ${city}?`,
      a: `Yes — we travel throughout the Hudson Valley region and serve smaller communities surrounding our major service cities. For locations more than 35 miles from our nearest chef base, a travel fee may apply and will always be disclosed upfront before you book.`,
    },
  ],
  // Theme 4 — Western NY / Capital Region / Family
  (city) => [
    {
      q: `Do you serve the ${city} area and surrounding Western NY communities?`,
      a: `Yes — we cover all of Western NY and the Capital Region, including ${city} and surrounding neighborhoods, suburbs, and communities. Most locations within 35 miles of ${city} fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `Can you handle a large family reunion or graduation party in ${city}?`,
      a: `Absolutely — family reunions and graduation parties are our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. Three generations around the grill — kids, parents, and grandparents — is our most common Western NY setup.`,
    },
    {
      q: `How far in advance should I book a ${city} weekend event?`,
      a: `For Friday and Saturday events in ${city}, booking 2–3 weeks ahead is recommended. During graduation season (May–June) and peak fall season, 3–4 weeks is safer. Weekday events can often be arranged with 5–7 days' notice.`,
    },
    {
      q: `Can you set up for an outdoor backyard or community event in ${city}?`,
      a: `Yes — backyard events, community gatherings, HOA pavilion setups, and outdoor venue events all work well in ${city}. We need a flat area of at least 10×10 ft with vehicle access for setup. Most Western NY and upstate residential and community spaces meet this requirement easily.`,
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
const NY_TESTIMONIALS = [
  // Theme 0 — NYC Metro
  [
    {
      text: '"Booked for my wife\'s 40th on our Brooklyn rooftop — 20 guests, Manhattan skyline behind the chef the whole night. People are still talking about it three months later. Nothing we\'ve done in New York has come close to this."',
      name: 'Marcus W.',
      city: 'Brooklyn Heights, NY',
      event: 'Birthday Party',
      initials: 'MW',
    },
    {
      text: '"Bachelorette crew of 16 at a Williamsburg rental. We\'d done every bar and restaurant — hibachi night was different on every level. Chef had everyone around the grill, the fire tricks were incredible, and the food was better than any place we ate all weekend."',
      name: 'Jasmine T.',
      city: 'Williamsburg, Brooklyn NY',
      event: 'Bachelorette Party',
      initials: 'JT',
    },
    {
      text: '"Team dinner for our Midtown finance office — 28 people, rooftop venue on the East Side. Zero effort from us, incredible energy from the chef. Every single person said it was the best company event we\'ve done. This is now our default for team entertaining."',
      name: 'Rebecca L.',
      city: 'New York, NY',
      event: 'Corporate Team Dinner',
      initials: 'RL',
    },
  ],
  // Theme 1 — Westchester / Long Island Affluent
  [
    {
      text: '"Graduation party for our daughter in Scarsdale — 38 guests, backyard setup, chef had everyone around the grill from the first flame. Neighbors came over to see what the commotion was. Already booked again for her brother\'s graduation next spring."',
      name: 'Thomas H.',
      city: 'Scarsdale, NY',
      event: 'Graduation Party',
      initials: 'TH',
    },
    {
      text: '"Anniversary dinner in our Manhasset backyard — 22 guests, perfect June evening. Chef was elegant, personable, and turned a dinner party into a full performance. Every guest said it was the best private dinner they\'d attended in years."',
      name: 'Ellen & David R.',
      city: 'Manhasset, NY',
      event: 'Anniversary Dinner',
      initials: 'ER',
    },
    {
      text: '"Neighborhood Fourth of July gathering in Garden City — 45 people, outdoor setup, chef kept the whole crowd engaged for two solid hours. Upgraded from our usual catering and cannot imagine going back. This is the new standard for our neighborhood."',
      name: 'Patricia S.',
      city: 'Garden City, NY',
      event: 'Neighborhood Gathering',
      initials: 'PS',
    },
  ],
  // Theme 2 — Hamptons / East End
  [
    {
      text: '"Southampton summer house bachelorette — 12 of us on the back patio, chef showed up exactly on time and put on an absolute show. Fire tricks, flying shrimp, the whole performance. Best night of the Hamptons weekend and it wasn\'t close."',
      name: 'Caroline B.',
      city: 'Southampton, NY',
      event: 'Bachelorette Weekend',
      initials: 'CB',
    },
    {
      text: '"East Hampton family reunion — 25 guests from three states, all renting the same compound for the week. Did hibachi on the third night and it became the highlight of the entire trip. Grandparents were front row and loving every minute."',
      name: 'James F.',
      city: 'East Hampton, NY',
      event: 'Family Reunion',
      initials: 'JF',
    },
    {
      text: '"Montauk girls trip — five nights at a house on the east end. Hibachi night was the dinner everyone planned the rest of the trip around. Chef was fantastic, the food was outstanding, and the outdoor setting was unlike any restaurant we visited all week."',
      name: 'Nicole A.',
      city: 'Montauk, NY',
      event: 'Girls Trip',
      initials: 'NA',
    },
  ],
  // Theme 3 — Hudson Valley / Catskills / Adirondacks
  [
    {
      text: '"Rhinebeck weekend rental — 14 guests at a farmhouse on the Hudson. Did hibachi Saturday night and it completely elevated the entire weekend. Chef drove up from the city, set up on the back patio, and put on a two-hour show. We\'re already planning next fall."',
      name: 'Sarah K.',
      city: 'Rhinebeck, NY',
      event: 'Weekend Rental Party',
      initials: 'SK',
    },
    {
      text: '"Lake George lake house birthday — 22 people, dock area setup, Adirondack sunset behind the chef the whole evening. Every single guest said it was the best birthday party they\'d ever attended. Worth every penny and then some."',
      name: 'Ryan M.',
      city: 'Lake George, NY',
      event: 'Birthday Party',
      initials: 'RM',
    },
    {
      text: '"Woodstock bachelorette weekend — rented a house in the Catskills, did hibachi on Saturday. The vibe was absolutely perfect. Chef matched the energy of the group, the food was incredible, and the fire show had everyone losing it. Best night of the trip."',
      name: 'Amanda C.',
      city: 'Woodstock, NY',
      event: 'Bachelorette Weekend',
      initials: 'AC',
    },
  ],
  // Theme 4 — Western NY / Capital Region
  [
    {
      text: '"Graduation party in our Buffalo backyard — 42 guests, two chef stations, three generations of family. The chef had my grandmother and my son\'s college friends cheering at the same grill at the same time. Doesn\'t happen at any restaurant. Already planning round two."',
      name: 'Donna M.',
      city: 'Buffalo, NY',
      event: 'Graduation Party',
      initials: 'DM',
    },
    {
      text: '"Albany corporate team event — 35 employees, outdoor setup at the venue. Chef set up while we gathered, and by the time everyone sat down the show was already going. Every person said it was the best team event we\'d done in years. We\'re doing this every year now."',
      name: 'Kevin P.',
      city: 'Albany, NY',
      event: 'Corporate Team Event',
      initials: 'KP',
    },
    {
      text: '"Rochester family reunion — 55 guests, huge backyard, cousins in from out of state. Chef ran two stations and had the whole crowd gathered around for two hours straight. Grandparents who rarely eat at events took three rounds. Best reunion we\'ve had in fifteen years."',
      name: 'The Kowalski Family',
      city: 'Rochester, NY',
      event: 'Family Reunion',
      initials: 'KF',
    },
  ],
]

// ── Image themes ──────────────────────────────────────────────────────────────
const NY_IMAGE_THEMES = [
  { heroImage: '/pics/hero-2.jpg' },                  // Theme 0 — NYC Metro
  { heroImage: '/pics/backyard-hibachi-3.jpg' },       // Theme 1 — Westchester / LI
  { heroImage: '/pics/hero-4.jpg' },                  // Theme 2 — Hamptons / East End
  { heroImage: '/pics/hibachi-colorado-home.jpg' },    // Theme 3 — Hudson Valley / Adirondacks
  { heroImage: '/pics/hero-1.jpg' },                  // Theme 4 — Western NY / Capital Region
]

// ── How It Works ──────────────────────────────────────────────────────────────
const NY_HOW_IT_WORKS = [
  // Theme 0 — NYC Metro
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Questions? Call or text (201) 565-3878. Most ${city} bookings confirmed within hours.`,
    steps: [
      { num: '01', title: 'Request Your NYC Event',     desc: 'Tell us your date, guest count, and outdoor space — rooftop, brownstone backyard, building terrace. We confirm fast.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking Performance',   desc: 'Guests gather around the grill for 90–120 minutes of live hibachi — fire tricks, flying shrimp, freshly grilled food cooked to order.' },
      { num: '04', title: 'Full Cleanup Included',      desc: 'Chef handles all cleanup and packs out completely. You keep the experience — none of the work.' },
    ],
  },
  // Theme 1 — Westchester / Long Island
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
  // Theme 2 — Hamptons / East End
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Rental`,
    footerNote: (city) => `Hamptons summer events book fast. Call or text (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Book From Your Rental',      desc: 'Reserve your date online or by phone — tell us your Hamptons address, guest count, and outdoor space. Fast confirmation.' },
      { num: '02', title: 'Chef Comes to You',          desc: 'Certified hibachi chef arrives with full setup: teppan grill, propane, all ingredients, plates, sauces, and utensils. Nothing for you to prepare.' },
      { num: '03', title: 'Summer House Dinner Show',   desc: 'Guests gather on your deck, patio, or yard for 90–120 minutes of live hibachi — fire tricks, grilled-to-order proteins, the full show.' },
      { num: '04', title: 'Pack-Out and Done',          desc: 'Chef handles complete cleanup and takes everything with them. Your rental is spotless and you had the best dinner of the summer.' },
    ],
  },
  // Theme 3 — Hudson Valley / Catskills / Adirondacks
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Getaway`,
    footerNote: (city) => `Hudson Valley and Adirondack events book fast in peak season. Call (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Book From Your Rental',       desc: 'Reserve your date online or by phone — tell us your address, guest count, and outdoor setup. We confirm fast and coordinate travel.' },
      { num: '02', title: 'Chef Travels to You',         desc: 'Your certified teppanyaki chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Fire Dining Performance', desc: 'Guests gather around the grill for 90–120 minutes of live hibachi cooking — fire tricks, custom proteins, fried rice, grilled vegetables.' },
      { num: '04', title: 'Full Cleanup, Nothing Left',  desc: 'Chef handles all teardown and cleanup. Your rental property is spotless when they leave. You keep the memories.' },
    ],
  },
  // Theme 4 — Western NY / Capital Region
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
const NY_SECTION_VARIANTS = [
  // Theme 0 — NYC Metro
  {
    heroPill:           'New York City\'s Private Chef',
    experiencePill:     'Better Than Any Manhattan Restaurant',
    experiencePoints:   [
      'No restaurant waitlists — your rooftop or backyard is the venue',
      'Certified private chef performs just for your group',
      'All five boroughs served — Manhattan to Staten Island',
      'Premium proteins, full show, zero cleanup',
    ],
    experienceImage:    '/pics/hibachi-event.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, NY`,
    areasPill:          'Serving NYC & All Boroughs',
    areasHeadline:      (city) => `Hibachi in ${city} and Every New York Borough`,
    areasIntro: [
      (city, state) => `We serve all of New York City — Manhattan, Brooklyn, Queens, The Bronx, Staten Island, and the broader NYC metro including Hoboken, Jersey City, and Westchester County. If your outdoor space holds a grill, we can be there.`,
      (city) => `Most ${city} events are confirmed within hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Check Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Reason to Celebrate in ${city}`,
    occasionSubtext:       'From rooftop bachelorettes to corporate team events, private hibachi is New York City\'s most memorable celebration format',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What New York City Hosts Are Saying',
  },
  // Theme 1 — Westchester / Long Island Affluent
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
    areasPill:          'Serving Westchester & Long Island',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Westchester County and Long Island — White Plains, Scarsdale, Bronxville, Great Neck, Manhasset, Garden City, Huntington, and dozens of communities throughout the metro area.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From graduation parties to neighborhood gatherings, private hibachi is the backyard upgrade Westchester and Long Island have been waiting for',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Westchester & Long Island Hosts Are Saying',
  },
  // Theme 2 — Hamptons / East End
  {
    heroPill:           'Hamptons Private Dining',
    experiencePill:     'Your Summer House Upgrade',
    experiencePoints:   [
      'Chef comes directly to your rental — no restaurant needed',
      'All guests at the same outdoor table for the full show',
      'Fire tricks, live cooking, 90–120 minute performance',
      'Full setup and pack-out — rental property stays spotless',
    ],
    experienceImage:    '/pics/hibachi-virginia-beach.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Hamptons summer house`,
    areasPill:          'Serving the Hamptons & East End',
    areasHeadline:      (city) => `Hibachi at Your ${city} Rental`,
    areasIntro: [
      (city, state) => `We serve the full Hamptons and East End — Southampton, East Hampton, Bridgehampton, Sag Harbor, Montauk, Shelter Island, Water Mill, Westhampton, and every village in between.`,
      (city) => `Hamptons dates fill weeks in advance. Call or text (201) 565-3878 to confirm your ${city} booking before it\'s gone.`,
    ],
    areasButton:           'Check Hamptons Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       'Summer house parties, bachelorette weekends, family reunions, and Hamptons group dinners — private hibachi is the East End\'s most memorable dining experience',
    faqPill:               'Hamptons Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Hamptons Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Hamptons & East End Hosts Are Saying',
  },
  // Theme 3 — Hudson Valley / Catskills / Adirondacks
  {
    heroPill:           'Hudson Valley Private Chef',
    experiencePill:     'The Dinner of the Weekend',
    experiencePoints:   [
      'Private chef comes to your vacation rental or lake house',
      'Premium proteins, live fire performance, full service',
      'Intimate groups of 8–20 or larger gatherings up to 60',
      'Flawless setup and cleanup — nothing left for you to manage',
    ],
    experienceImage:    '/pics/hibachi-colorado.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Hudson Valley vacation rental`,
    areasPill:          'Serving Hudson Valley & Adirondacks',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Surrounding Region`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the Hudson Valley, Catskills, and Adirondack region — Rhinebeck, Kingston, Woodstock, New Paltz, Beacon, Poughkeepsie, Lake George, Lake Placid, Saratoga Springs, and surrounding communities throughout the region.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Hudson Valley and Adirondack events fill fast in season — don\'t wait.`,
    ],
    areasButton:           'Reserve Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone Talks About in ${city}`,
    occasionSubtext:       'Vacation rental dinners, bachelorette weekends, lake house parties, and Hudson Valley gatherings — private hibachi is what elevates a great weekend into a lasting memory',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Hudson Valley & Adirondack Hosts Are Saying',
  },
  // Theme 4 — Western NY / Capital Region
  {
    heroPill:           'Western NY\'s Family Chef',
    experiencePill:     'Every Generation at the Grill',
    experiencePoints:   [
      'Dual-station capacity for groups of 25–60+ guests',
      'Kids, parents, and grandparents all around the same grill',
      'Fresh proteins, full performance, no restaurant logistics',
      'Setup and cleanup included — nothing for the host to do',
    ],
    experienceImage:    '/pics/hibachi-catering-2.jpg',
    experienceImageAlt: (city) => `Family hibachi celebration in ${city}, NY`,
    areasPill:          'Serving Western & Upstate New York',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of Western NY`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Western and Upstate New York — Buffalo, Rochester, Albany, Troy, Syracuse, Niagara Falls, Saratoga Springs, and every community throughout the region.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Most large-group events are confirmed within a day.`,
    ],
    areasButton:           'Book Your Family Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Family Celebration`,
    occasionSubtext:       'Graduation parties, multigenerational family dinners, and milestone events — Western NY families celebrate big, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Western NY Hosts Are Saying',
  },
]

// ── City experience image map ──────────────────────────────────────────────────
const NY_CITY_IMAGE_MAP = {
  // Theme 0 (hero = hero-2.jpg)
  'new-york-city':    { src: '/pics/hibachi-event.jpg',          alt: (city) => `Private hibachi chef entertaining guests in ${city}` },
  'brooklyn':         { src: '/pics/hibachi-photo-1.jpg',        alt: (city) => `Live hibachi cooking in Brooklyn, NY` },
  'queens':           { src: '/pics/hibachi-catering-3.jpg',     alt: (city) => `Private hibachi chef at a Queens NY event` },
  'the-bronx':        { src: '/pics/hibachi-chef-2.jpg',         alt: (city) => `Hibachi chef performing in The Bronx, NY` },
  'staten-island':    { src: '/pics/hibachi-at-home.jpg',        alt: (city) => `Private hibachi at a Staten Island NY event` },
  'flushing':         { src: '/pics/hibachi-to-you.jpg',         alt: (city) => `Private hibachi catering in Flushing, NY` },
  // Theme 1 (hero = backyard-hibachi-3.jpg)
  'white-plains':     { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Private hibachi chef at a White Plains NY event` },
  'scarsdale':        { src: '/pics/private-hibachi.jpg',        alt: (city) => `Private hibachi chef in Scarsdale, NY` },
  'bronxville':       { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Private hibachi chef at a Bronxville NY backyard event` },
  'great-neck':       { src: '/pics/hibachi-pic-2.jpg',          alt: (city) => `Hibachi dinner party in Great Neck, NY` },
  'manhasset':        { src: '/pics/hibachi-photo-2.jpg',        alt: (city) => `Private hibachi chef at a Manhasset NY event` },
  'garden-city':      { src: '/pics/hibachi-dallas-home.jpg',    alt: (city) => `Hibachi event in Garden City, NY` },
  'huntington':       { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Private hibachi chef in Huntington, NY` },
  'smithtown':        { src: '/pics/backyard-hibachi.jpg',       alt: (city) => `Backyard hibachi event in Smithtown, NY` },
  'rye':              { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Private hibachi chef at a Rye NY event` },
  'chappaqua':        { src: '/pics/hibachi-catering-austin.jpg',alt: (city) => `Hibachi chef at a Chappaqua NY event` },
  'new-rochelle':     { src: '/pics/hibachi-shot-2.jpg',         alt: (city) => `Private hibachi in New Rochelle, NY` },
  'larchmont':        { src: '/pics/hibachi-at-home.jpg',        alt: (city) => `Hibachi chef at a Larchmont NY home` },
  'port-washington':  { src: '/pics/hibachi-pic-4.jpg',          alt: (city) => `Private hibachi in Port Washington, NY` },
  'tarrytown':        { src: '/pics/hibachi-dallas.jpg',         alt: (city) => `Private hibachi chef in Tarrytown, NY` },
  'yonkers':          { src: '/pics/hibachi-pic-3.jpg',          alt: (city) => `Hibachi event in Yonkers, NY` },
  'commack':          { src: '/pics/backyard-hibachi-2.jpg',     alt: (city) => `Private hibachi chef in Commack, NY` },
  'bay-shore':        { src: '/pics/hibachi-chef-at-home.jpg',   alt: (city) => `Hibachi chef at a Bay Shore NY event` },
  'babylon':          { src: '/pics/hibachi-catering-3.jpg',     alt: (city) => `Private hibachi in Babylon, NY` },
  'rockville-centre': { src: '/pics/hibachi-dallas-home-2.jpg',  alt: (city) => `Hibachi event in Rockville Centre, NY` },
  'oyster-bay':       { src: '/pics/hibachi-photo-1.jpg',        alt: (city) => `Private hibachi chef in Oyster Bay, NY` },
  'long-beach':       { src: '/pics/hibachi-miami.jpg',          alt: (city) => `Hibachi event in Long Beach, NY` },
  'hempstead':        { src: '/pics/hibachi-austin.jpg',         alt: (city) => `Private hibachi in Hempstead, NY` },
  // Theme 2 (hero = hero-4.jpg)
  'southampton':      { src: '/pics/hibachi-pic-3.jpg',          alt: (city) => `Private hibachi chef at a Southampton NY summer house` },
  'east-hampton':     { src: '/pics/hibachi-austin-home.jpg',    alt: (city) => `Private hibachi at an East Hampton NY estate` },
  'montauk':          { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Private hibachi chef in Montauk, NY` },
  'shelter-island':   { src: '/pics/mobile-hibachi-2.jpg',       alt: (city) => `Private hibachi chef on Shelter Island, NY` },
  // Theme 3 (hero = hibachi-colorado-home.jpg)
  'rhinebeck':        { src: '/pics/hibachi-colorado.jpg',       alt: (city) => `Private hibachi chef at a Rhinebeck NY property` },
  'new-paltz':        { src: '/pics/traveling-hibachi.jpg',      alt: (city) => `Private hibachi in New Paltz, NY` },
  'kingston':         { src: '/pics/hibachi-austin-2.jpg',       alt: (city) => `Hibachi chef at a Kingston NY event` },
  'woodstock':        { src: '/pics/hibachi-austin-3.jpg',       alt: (city) => `Private hibachi in Woodstock, NY` },
  'poughkeepsie':     { src: '/pics/hibachi-photo-2.jpg',        alt: (city) => `Hibachi event in Poughkeepsie, NY` },
  'beacon':           { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Private hibachi chef in Beacon, NY` },
  'newburgh':         { src: '/pics/hibachi-austin-home-2.jpg',  alt: (city) => `Private hibachi in Newburgh, NY` },
  'cold-spring':      { src: '/pics/mobile-hibachi.jpg',         alt: (city) => `Private hibachi chef in Cold Spring, NY` },
  'lake-george':      { src: '/pics/hibachi-austin-home-3.jpg',  alt: (city) => `Private hibachi at a Lake George NY lake house` },
  'lake-placid':      { src: '/pics/hibachi-home-austin.jpg',    alt: (city) => `Private hibachi chef in Lake Placid, NY` },
  'saratoga-springs': { src: '/pics/hibachi-dallas-tyler.jpg',   alt: (city) => `Private hibachi in Saratoga Springs, NY` },
  'watkins-glen':     { src: '/pics/hibachi-dallas-tyler-2.jpg', alt: (city) => `Hibachi chef at a Watkins Glen NY event` },
  'ithaca':           { src: '/pics/hibachi-raleigh.jpg',        alt: (city) => `Private hibachi in Ithaca, NY` },
  // Theme 4 (hero = hero-1.jpg)
  'buffalo':          { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Private hibachi chef at a Buffalo NY event` },
  'rochester':        { src: '/pics/hibachi-event.jpg',          alt: (city) => `Hibachi event in Rochester, NY` },
  'albany':           { src: '/pics/hibachi-austin-home.jpg',    alt: (city) => `Private hibachi chef at an Albany NY event` },
  'troy':             { src: '/pics/hibachi-dallas.jpg',         alt: (city) => `Hibachi event in Troy, NY` },
  'syracuse':         { src: '/pics/hibachi-pic-62.jpg',         alt: (city) => `Private hibachi in Syracuse, NY` },
  'niagara-falls':    { src: '/pics/hibachi-texas.jpg',          alt: (city) => `Private hibachi chef in Niagara Falls, NY` },
}

// ── Support images for profileIdx cities ─────────────────────────────────────
const NY_SUPPORT_IMAGES = {
  'new-york-city': {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',      alt: (city) => `Guests at a New York City rooftop hibachi event`,       caption: 'New York City private hibachi',          intro: (city) => `NYC hosts set a high bar. Here's what they say:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',   alt: (city) => `Private hibachi chef setting up in New York City`,      caption: 'Your NYC evening starts here' },
  },
  'brooklyn': {
    testimonial: { src: '/pics/hibachi-photo-1.jpg',      alt: (city) => `Bachelorette hibachi event in Williamsburg Brooklyn`,   caption: 'Brooklyn groups come back every year',   intro: (city) => `Brooklyn hosts have standards. Here's what they find:` },
    cta:         { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Private hibachi chef in Brooklyn, NY`,                  caption: 'The Brooklyn dinner nobody forgets' },
  },
  'scarsdale': {
    testimonial: { src: '/pics/private-hibachi.jpg',      alt: (city) => `Graduation hibachi party in Scarsdale, NY`,             caption: 'Scarsdale graduation season',            intro: (city) => `Scarsdale families book us every graduation season:` },
    cta:         { src: '/pics/backyard-hibachi.jpg',     alt: (city) => `Private hibachi chef at a Scarsdale NY backyard`,       caption: 'The Scarsdale backyard dinner standard' },
  },
  'southampton': {
    testimonial: { src: '/pics/hibachi-pic-3.jpg',        alt: (city) => `Private hibachi on a Southampton summer house patio`,   caption: 'Southampton vacation rental hibachi',    intro: (city) => `Southampton summer guests come back every year:` },
    cta:         { src: '/pics/hibachi-austin-home.jpg',  alt: (city) => `Private hibachi chef in Southampton, NY`,               caption: 'The Southampton dinner everyone remembers' },
  },
  'east-hampton': {
    testimonial: { src: '/pics/hibachi-austin-home-2.jpg',alt: (city) => `Private hibachi at an East Hampton NY estate`,          caption: 'East Hampton summer dining',             intro: (city) => `East Hampton guests know exactly what to expect:` },
    cta:         { src: '/pics/hibachi-shot-1.jpg',       alt: (city) => `Private hibachi chef in East Hampton, NY`,              caption: 'East Hampton\'s private dining standard' },
  },
  'lake-george': {
    testimonial: { src: '/pics/hibachi-austin-home-3.jpg',alt: (city) => `Lake house hibachi event at Lake George, NY`,          caption: 'Lake George lake house hibachi',         intro: (city) => `Lake George hosts keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-colorado.jpg',     alt: (city) => `Private hibachi chef arriving at Lake George, NY`,      caption: 'The Lake George weekend dinner' },
  },
  'buffalo': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: (city) => `Graduation hibachi party in Buffalo, NY`,              caption: 'Buffalo families celebrate big',         intro: (city) => `Buffalo families know how to celebrate. Here's what they say:` },
    cta:         { src: '/pics/hibachi-event.jpg',        alt: (city) => `Private hibachi chef at a Buffalo NY event`,            caption: 'Buffalo\'s backyard party standard' },
  },
  'rhinebeck': {
    testimonial: { src: '/pics/traveling-hibachi.jpg',    alt: (city) => `Weekend rental hibachi dinner in Rhinebeck, NY`,       caption: 'Rhinebeck weekend rental hibachi',       intro: (city) => `Rhinebeck weekend hosts keep booking us. Here's why:` },
    cta:         { src: '/pics/hibachi-raleigh.jpg',      alt: (city) => `Private hibachi chef in Rhinebeck, NY`,                caption: 'The Rhinebeck weekend dinner' },
  },
  'woodstock': {
    testimonial: { src: '/pics/hibachi-austin-3.jpg',     alt: (city) => `Bachelorette hibachi weekend in Woodstock, NY`,        caption: 'Woodstock bachelorette weekends',        intro: (city) => `Woodstock groups book us for a reason:` },
    cta:         { src: '/pics/mobile-hibachi.jpg',        alt: (city) => `Private hibachi chef in Woodstock, NY`,                caption: 'The Woodstock weekend night' },
  },
  'montauk': {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg',alt: (city) => `Girls trip hibachi at a Montauk house`,               caption: 'Montauk groups always come back',        intro: (city) => `Montauk guests keep coming back for this:` },
    cta:         { src: '/pics/hibachi-miami.jpg',         alt: (city) => `Private hibachi chef in Montauk, NY`,                  caption: 'The Montauk dinner of the summer' },
  },
  'white-plains': {
    testimonial: { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Corporate hibachi event in White Plains, NY`,          caption: 'White Plains corporate events',          intro: (city) => `White Plains professionals set the standard. Here's what they say:` },
    cta:         { src: '/pics/hibachi-dallas.jpg',        alt: (city) => `Private hibachi chef in White Plains, NY`,             caption: 'Westchester\'s corporate team dinner' },
  },
  'albany': {
    testimonial: { src: '/pics/hibachi-austin-home.jpg',  alt: (city) => `Corporate hibachi event in Albany, NY`,                caption: 'Albany corporate and family events',     intro: (city) => `Albany hosts expect the best. Here's what they find:` },
    cta:         { src: '/pics/hibachi-shot-2.jpg',        alt: (city) => `Private hibachi chef in Albany, NY`,                   caption: 'The Albany event everyone talks about' },
  },
  'smithtown': {
    testimonial: { src: '/pics/hibachi-shot-1.jpg',       alt: (city) => `Backyard hibachi party in Smithtown, NY`,              caption: 'Smithtown backyard hibachi',             intro: (city) => `Smithtown families say it best:` },
    cta:         { src: '/pics/hibachi-chef-at-home.jpg', alt: (city) => `Private hibachi chef at a Smithtown NY backyard`,      caption: 'Your Smithtown backyard, upgraded' },
  },
  'bronxville': {
    testimonial: { src: '/pics/hibachi-pic-4.jpg',        alt: (city) => `Private hibachi dinner party in Bronxville, NY`,       caption: 'Bronxville dinner parties done right',   intro: (city) => `Bronxville hosts have high standards. Here's what they find:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',    alt: (city) => `Private hibachi chef in Bronxville, NY`,               caption: 'The Bronxville private dining standard' },
  },
  'lake-placid': {
    testimonial: { src: '/pics/hibachi-home-austin.jpg',  alt: (city) => `Lake Placid vacation rental hibachi event`,            caption: 'Lake Placid vacation rental hibachi',    intro: (city) => `Lake Placid guests come back for this experience:` },
    cta:         { src: '/pics/mobile-hibachi-2.jpg',      alt: (city) => `Private hibachi chef in Lake Placid, NY`,              caption: 'The Lake Placid dinner nobody forgets' },
  },
}

// ── Support fallback images (per theme) ───────────────────────────────────────
const NY_SUPPORT_FALLBACKS = [
  // Theme 0 — NYC Metro
  {
    testimonial: { src: '/pics/hibachi-pic-2.jpg',        alt: (city) => `Private hibachi event in ${city}, NY`,    caption: 'New York City hosts agree',       intro: (city) => `${city} hosts keep coming back. Here's what they say:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',   alt: (city) => `Private hibachi chef in ${city}, NY`,     caption: 'Your ${city} evening starts here' },
  },
  // Theme 1 — Westchester / Long Island
  {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',  alt: (city) => `Backyard hibachi event in ${city}, NY`,  caption: 'Westchester & LI hosts agree',    intro: (city) => `${city} hosts say it best:` },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',   alt: (city) => `Private hibachi chef in ${city}, NY`,     caption: 'Your ${city} backyard, upgraded' },
  },
  // Theme 2 — Hamptons / East End
  {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg',alt: (city) => `Hamptons hibachi at ${city}, NY`,        caption: 'Hamptons hosts agree',            intro: (city) => `${city} summer hosts keep booking us. Here's why:` },
    cta:         { src: '/pics/hibachi-pic-3.jpg',         alt: (city) => `Private hibachi chef in ${city}, NY`,    caption: 'The ${city} summer dinner upgrade' },
  },
  // Theme 3 — Hudson Valley / Adirondacks
  {
    testimonial: { src: '/pics/hibachi-colorado.jpg',     alt: (city) => `Vacation rental hibachi in ${city}, NY`, caption: 'Hudson Valley hosts agree',       intro: (city) => `${city} weekend guests keep coming back. Here's why:` },
    cta:         { src: '/pics/traveling-hibachi.jpg',    alt: (city) => `Private hibachi chef in ${city}, NY`,     caption: 'The ${city} weekend dinner' },
  },
  // Theme 4 — Western NY / Capital Region
  {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: (city) => `Family hibachi gathering in ${city}, NY`, caption: 'Western NY families celebrate',   intro: (city) => `${city} families know how to celebrate. Here's what they say:` },
    cta:         { src: '/pics/hibachi-event.jpg',         alt: (city) => `Private hibachi chef in ${city}, NY`,    caption: 'Your ${city} family event, elevated' },
  },
]

// ── Closing variants (NY generic 63–67) ───────────────────────────────────────
export const NY_CLOSING_VARIANTS = [
  // 63 — NYC Metro
  {
    headline: (city) => `Your ${city} Night Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `NYC rooftop and weekend slots fill 3–5 weeks out. Check your date now.`,
  },
  // 64 — Westchester / Long Island
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Book It`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `Westchester and Long Island weekends book 2–4 weeks ahead. Secure your date now.`,
  },
  // 65 — Hamptons / East End
  {
    headline: (city) => `The Summer House Dinner Everyone Remembers`,
    sub:      (city) => `A private hibachi chef comes to your ${city} rental — grill, ingredients, full show, and complete cleanup. From $60 per adult.`,
    urgency:  `Hamptons season books fast — confirm your summer date 6–8 weeks ahead.`,
  },
  // 66 — Hudson Valley / Adirondacks
  {
    headline: (city) => `The Weekend Dinner Your ${city} Getaway Needed`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} rental. Full setup, premium proteins, complete cleanup. From $60 per adult.`,
    urgency:  `Hudson Valley and Adirondack peak season fills fast. Reserve your date now.`,
  },
  // 67 — Western NY / Capital Region
  {
    headline: (city) => `${city}'s Most Memorable Celebration — Book Yours`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  'Graduation season books early — confirm your upstate NY date now.',
  },
]

// ── City-specific closings (NY city-specific 68–82) ──────────────────────────
export const NY_CITY_CLOSINGS = [
  // 68 — New York City (profileIdx 0)
  {
    headline: (city) => `Your New York City Night — Book It`,
    sub:      (city) => `Rooftop or outdoor space in New York City? A certified chef comes to you. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `NYC weekend and rooftop slots fill 3–5 weeks out. Check your date now.`,
  },
  // 69 — Brooklyn (profileIdx 1)
  {
    headline: (city) => `Brooklyn's Best Private Dining — Book It`,
    sub:      (city) => `A certified teppanyaki chef comes to your Brooklyn space. Full setup, all fresh ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Brooklyn weekend events book 3–4 weeks out. Check availability now.`,
  },
  // 70 — Scarsdale (profileIdx 2)
  {
    headline: (city) => `Scarsdale Graduation Season — Don't Wait`,
    sub:      (city) => `When every restaurant is fully booked, we come to you. A certified hibachi chef at your Scarsdale home or backyard. From $60/adult.`,
    urgency:  `Scarsdale graduation weekends book 4–6 weeks out. Reserve your date now.`,
  },
  // 71 — Southampton (profileIdx 3)
  {
    headline: (city) => `The Southampton Summer Dinner Everyone Remembers`,
    sub:      (city) => `A certified hibachi chef at your Southampton rental or estate. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Southampton summer dates fill 6–8 weeks out. Reserve yours now.`,
  },
  // 72 — East Hampton (profileIdx 4)
  {
    headline: (city) => `The East Hampton Dinner Your Weekend Needed`,
    sub:      (city) => `A certified teppanyaki chef at your East Hampton property. All ingredients, live performance, full cleanup. From $60/adult.`,
    urgency:  `East Hampton peak season books weeks in advance. Check your date now.`,
  },
  // 73 — Lake George (profileIdx 5)
  {
    headline: (city) => `The Lake George Night Your Group Has Been Waiting For`,
    sub:      (city) => `A certified hibachi chef comes to your Lake George rental or lake house. Full setup, fresh proteins, complete cleanup. From $60/adult.`,
    urgency:  `Lake George summer weekends fill fast. Book your date now.`,
  },
  // 74 — Buffalo (profileIdx 6)
  {
    headline: (city) => `Buffalo's Backyard Party Standard — Book Yours`,
    sub:      (city) => `Groups of 10–60+ in Buffalo. Single or dual chef stations. All proteins, full performance, complete cleanup. From $60/adult.`,
    urgency:  `Buffalo graduation and peak season dates fill quickly. Check availability now.`,
  },
  // 75 — Rhinebeck (profileIdx 7)
  {
    headline: (city) => `The Rhinebeck Weekend Dinner That Makes the Trip`,
    sub:      (city) => `A certified teppanyaki chef travels to your Rhinebeck rental or home. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Rhinebeck fall foliage and summer weekends book 3–4 weeks out. Confirm your date.`,
  },
  // 76 — Woodstock (profileIdx 8)
  {
    headline: (city) => `Your Woodstock Weekend Just Found Its Best Night`,
    sub:      (city) => `A certified hibachi chef comes to your Woodstock rental or home. Full setup, Catskill-ready, complete cleanup. From $60/adult.`,
    urgency:  `Woodstock weekend events book weeks in advance. Check availability now.`,
  },
  // 77 — Montauk (profileIdx 9)
  {
    headline: (city) => `The Dinner Your Montauk Trip Was Missing`,
    sub:      (city) => `A certified hibachi chef at your Montauk rental or house. Full setup, premium proteins, complete cleanup. From $60/adult.`,
    urgency:  `Montauk summer dates fill 6–8 weeks out. Reserve yours now.`,
  },
  // 78 — White Plains (profileIdx 10)
  {
    headline: (city) => `White Plains Corporate Dining Done Right`,
    sub:      (city) => `A certified teppanyaki chef for your White Plains corporate event or private gathering. Full setup and cleanup. From $60/adult.`,
    urgency:  `Westchester weekend and corporate events book 2–3 weeks ahead. Confirm your date.`,
  },
  // 79 — Albany (profileIdx 11)
  {
    headline: (city) => `Albany's Private Dining Standard — Book It`,
    sub:      (city) => `A certified hibachi chef comes to your Albany home or outdoor venue. All ingredients, live performance, full cleanup. From $60/adult.`,
    urgency:  `Albany weekend events fill 2–3 weeks out. Check your date now.`,
  },
  // 80 — Smithtown (profileIdx 12)
  {
    headline: (city) => `Smithtown's Best Backyard Party — Book Yours`,
    sub:      (city) => `A certified hibachi chef comes to your Smithtown property. All ingredients, full live performance, complete cleanup. From $60/adult.`,
    urgency:  `Smithtown weekend slots fill 2–3 weeks out. Check your date now.`,
  },
  // 81 — Bronxville (profileIdx 13)
  {
    headline: (city) => `Bronxville's Private Dinner Party — Elevated`,
    sub:      (city) => `A certified teppanyaki chef at your Bronxville home. Full setup, premium ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Bronxville weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 82 — Lake Placid (profileIdx 14)
  {
    headline: (city) => `The Lake Placid Dinner Your Group Deserves`,
    sub:      (city) => `A certified hibachi chef comes to your Lake Placid rental or Adirondack property. Full setup, fresh proteins, complete cleanup. From $60/adult.`,
    urgency:  `Lake Placid peak season fills fast. Reserve your date well in advance.`,
  },
]

// ── Intro variants (NY generic 63–67) ─────────────────────────────────────────
export const NY_INTRO_VARIANTS = [
  // 63 — NYC Metro
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining in the City That Never Stops`,
    opening:  (city, state) =>
      `New York City is the world's most competitive food city. Every block has a restaurant worth returning to. And yet: there is no restaurant in Manhattan, Brooklyn, or Queens that can give your group a private chef on your rooftop, a performance built around your crowd, and every plate cooked to order in front of everyone you invited. That is what Hibachi Connect brings to ${city} — the full teppanyaki experience, your space, your terms.`,
    middle:   (city, state) =>
      `Your certified teppanyaki chef arrives 5–10 minutes before your scheduled start time with a propane grill, all fresh proteins, rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked fresh at the grill in front of your guests. One chef for up to 20 guests; two stations for larger ${city} events.`,
    closing:  (city, state) =>
      `Birthdays, bachelorette weekends, corporate team dinners, and milestone nights in ${city} book 3–5 weeks out. Starting at $60 per adult, $600 event minimum. Skip the reservation battle and the crowded dining room. The chef comes to you.`,
  },
  // 64 — Westchester / Long Island
  {
    headline: (city) => `Hibachi at Home in ${city}: When Your Backyard Becomes New York's Best Dinner Table`,
    opening:  (city, state) =>
      `You've invested in the outdoor space. The backyard, the patio, the perfect evening setup. Now give it the event it deserves. Private hibachi at home in ${city} brings a certified teppanyaki chef directly to your property — the full grill, all ingredients, the live cooking performance, and total cleanup. Your guests will be talking about this dinner through next season.`,
    middle:   (city, state) =>
      `From the first onion volcano to the final plate of fried rice, your chef works the crowd for 90–120 minutes straight. Every protein cooked to order at the grill: chicken, steak, shrimp, salmon, and premium upgrades like filet mignon or lobster tail. Choose two proteins per guest at the standard rate or mix and match across the group.`,
    closing:  (city, state) =>
      `${city} weekend evenings book 2–4 weeks ahead. Graduation parties, neighborhood gatherings, anniversary dinners, and milestone celebrations are our most common bookings across Westchester and Long Island. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 65 — Hamptons / East End
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Summer House Luxury Dining at Its Most Memorable`,
    opening:  (city, state) =>
      `You have the summer house. You have the group. You've planned the weekend down to the last detail — and the best dinner of the trip is the one nobody had to book a reservation for. Private hibachi at your ${city} rental brings a certified teppanyaki chef directly to your property. The full grill, all ingredients, a live-fire performance built around your guests, and complete cleanup when dinner is done.`,
    middle:   (city, state) =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The show runs from first flame to last plate — no restaurant logistics, no group car coordination, no waiting for a table that was never big enough anyway. Every guest sits at the same outdoor table watching the same performance.`,
    closing:  (city, state) =>
      `Hamptons and East End summer events book 6–8 weeks in advance for peak season dates. Starting at $60 per adult, $600 event minimum. Confirm outdoor open-flame cooking is permitted at your rental before booking — most Hamptons properties allow it.`,
  },
  // 66 — Hudson Valley / Catskills / Adirondacks
  {
    headline: (city) => `Hibachi at Home in ${city}: Where Hudson Valley Weekends Come to Life`,
    opening:  (city, state) =>
      `People come to ${city} for the landscape, the quiet, and the sense that this weekend is going to be different from the usual. Private hibachi makes the best night of the trip happen at your rental property — a certified teppanyaki chef drives to your house with the full setup, cooks in front of everyone on your deck or patio, and leaves the space spotless. No driving into town, no waiting for tables, no rushing through a restaurant meal.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The live cooking performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your rental property is spotless when the chef leaves.`,
    closing:  (city, state) =>
      `Hudson Valley, Catskill, and Adirondack events book 3–4 weeks ahead in peak season. Starting at $60 per adult, $600 event minimum. Most quotes returned same day. Travel fees may apply for remote locations — always disclosed upfront.`,
  },
  // 67 — Western NY / Capital Region
  {
    headline: (city) => `Hibachi at Home in ${city}: The Backyard Party Western New York Was Made For`,
    opening:  (city, state) =>
      `${city} knows how to throw a party. The backyard culture runs deep here — graduation season, family reunions, neighborhood block parties, milestone anniversaries. Private hibachi at home brings a certified teppanyaki chef to your property with the full setup: propane grill, all proteins, and a live-fire cooking performance that turns any backyard gathering into the kind of evening your guests still bring up next year.`,
    middle:   (city, state) =>
      `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for large graduations, family reunions, and community events are our most common format across Western NY and the Capital Region.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out during peak season. Graduation season (May–June) fills fastest — reserve 4–5 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── City-specific intros (NY city-specific 68–82) ─────────────────────────────
export const NY_CITY_INTROS = [
  // 68 — New York City (profileIdx 0)
  {
    headline: () => `Private Hibachi Chef in New York City`,
    opening:  () =>
      `In a city with more Michelin stars per square mile than anywhere else on the planet, the private hibachi chef is still something different. No restaurant in New York can give your group a teppanyaki chef on your rooftop, a performance built around your guests, and every plate cooked live in front of the people you actually want to be with. Hibachi Connect brings a certified chef to any NYC outdoor space — brownstone backyard, building terrace, rooftop deck, corporate event patio — with the full setup and nothing for you to manage.`,
    middle:   () =>
      `Your chef arrives 5–10 minutes before your scheduled start time with a propane teppan grill, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from the first flame to the final plate — fire tricks, flying shrimp, precision knife work, and every dish cooked to order in front of your crowd. One station for up to 20 guests; dual stations for larger NYC events up to 60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `New York City weekends and rooftop events fill 3–5 weeks out. Corporate team dinners, bachelorette weekends, birthday celebrations, and milestone nights are our most common bookings across the boroughs. Starting at $60/adult, $30/child, $600 event minimum. The chef comes to you — no reservation required.`,
  },
  // 69 — Brooklyn (profileIdx 1)
  {
    headline: () => `Hibachi Catering in Brooklyn`,
    opening:  () =>
      `Brooklyn has the most opinionated food culture in New York, which means your guests have been to the best restaurants in Williamsburg, Park Slope, and Carroll Gardens — and they still haven't experienced anything like a private hibachi chef in your backyard or on your rooftop. Hibachi Connect brings the full teppanyaki setup directly to your Brooklyn outdoor space. One call, one chef, one unforgettable evening for 10 to 60 guests across any Brooklyn neighborhood.`,
    middle:   () =>
      `Your certified chef arrives with the complete setup: propane teppan grill, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The show runs 90–120 minutes from first flame to last plate — fire tricks, flying shrimp, and every protein cooked fresh to order in front of your guests. Complete cleanup when dinner is done. Your Brooklyn space stays exactly as you left it.`,
    closing:  () =>
      `Brooklyn weekend evenings book 3–4 weeks out. Bachelorette weekends in Williamsburg and Bushwick, birthday dinners in Park Slope and Cobble Hill, and corporate gatherings across North Brooklyn are our most common bookings. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 70 — Scarsdale (profileIdx 2)
  {
    headline: () => `Private Hibachi Chef in Scarsdale`,
    opening:  () =>
      `Scarsdale backyards are among the finest in Westchester County — and the events that happen in them tend to match. When the graduation class is celebrated, when the milestone anniversary dinner happens, when the neighborhood gathers for something worth remembering — the standard is set high. Private hibachi at home in Scarsdale brings a certified teppanyaki chef to your property with the full setup and live performance. The kind of dinner your guests request at the next event.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, knife juggling, and every plate cooked to order at the grill in front of your guests. For larger Scarsdale gatherings, dual-station capacity is available for groups of 25–60+. Full cleanup when dinner is done.`,
    closing:  () =>
      `Scarsdale backyard evenings book 2–4 weeks ahead. Graduation season (May–June) fills fastest — reserve 4–6 weeks out for Saturday events. Serving Scarsdale and all of Westchester County. Starting at $60/adult, $30/child, $600 event minimum. Most quotes returned same day.`,
  },
  // 71 — Southampton (profileIdx 3)
  {
    headline: () => `Private Hibachi Chef in Southampton`,
    opening:  () =>
      `Southampton summer houses define what Hamptons luxury actually looks like from the inside — the parties, the dinners, the evenings that become the story everyone tells from that particular summer. Private hibachi at your Southampton property brings a certified teppanyaki chef to your outdoor space with the full setup, all ingredients, and a live-fire performance that makes the evening no restaurant reservation could compete with. No waitlists. No crowded dining room. Your chef comes to you.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or pool area. The performance runs 90–120 minutes from first flame to final plate. Premium upgrades — filet mignon, lobster tail, scallops — are available for any Southampton occasion. Full cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Southampton summer events book 6–8 weeks ahead for peak July and August dates. Bachelorette weekends, family reunions, anniversary celebrations, and vacation house group dinners are our most common Southampton bookings. Starting at $60/adult, $600 minimum. Confirm outdoor cooking is permitted at your property before reserving.`,
  },
  // 72 — East Hampton (profileIdx 4)
  {
    headline: () => `Private Hibachi Chef in East Hampton`,
    opening:  () =>
      `East Hampton is where New York comes to unwind in the most elevated way possible — and the dinner that gets remembered from this particular summer is the one that didn't require a reservation at a fully booked restaurant. Private hibachi at your East Hampton property brings a certified teppanyaki chef directly to your estate, rental, or vacation home. The full grill, all ingredients, a live cooking performance that earns the evening, and complete cleanup before the chef drives home.`,
    middle:   () =>
      `Your chef arrives with everything needed: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The live performance runs 90–120 minutes — fire tricks, flying shrimp, precision knife work at the teppan. Premium proteins including filet mignon and lobster tail available for East Hampton's most special occasions. Full cleanup when dinner is done.`,
    closing:  () =>
      `East Hampton peak season events book 6–8 weeks ahead. Serving East Hampton and all of the East End — Amagansett, Springs, Bridgehampton, and the surrounding Hamptons communities. Starting at $60/adult, $600 minimum. Most quotes returned same day for off-peak occasions.`,
  },
  // 73 — Lake George (profileIdx 5)
  {
    headline: () => `Mobile Hibachi in Lake George`,
    opening:  () =>
      `Lake George brings friend groups and families to the Adirondack foothills every summer and fall — lake house weekends, boat trips, the kind of gatherings that become the stories everyone references at every subsequent gathering. Private hibachi at your Lake George rental or lake house makes the best dinner of the trip happen at the property, not at a restaurant. A certified chef drives up with the full setup, cooks on your deck or dock area, and leaves the space spotless.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard area. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, every dish cooked to order at the grill in front of your group. Full cleanup when dinner is done.`,
    closing:  () =>
      `Lake George summer weekends book 4–6 weeks ahead for peak July and August dates. Fall foliage season fills fast as well. Birthday dinners, family reunions, and lake house group events are our most common Lake George bookings. Starting at $60/adult, $30/child, $600 event minimum. Travel fees may apply for remote properties.`,
  },
  // 74 — Buffalo (profileIdx 6)
  {
    headline: () => `Hibachi at Home in Buffalo`,
    opening:  () =>
      `Buffalo has always known how to celebrate. The backyard cookout is a way of life here, the graduation parties run until midnight, and the family reunion means three generations in the same outdoor space making noise that carries across the fence. Private hibachi at home in Buffalo brings a certified teppanyaki chef to your backyard with the full setup — one chef for a dinner party, two stations for the big family event, and a live-fire performance that upgrades any occasion from memorable to unforgettable.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate. Fire tricks, flying shrimp, and every plate cooked to order at the grill in front of your guests. For groups over 25, we bring two chef stations. For large Buffalo graduation parties and family reunions, dual-station setups handle 50–80 guests smoothly.`,
    closing:  () =>
      `Buffalo weekend evenings book 2–3 weeks ahead. Graduation season (May–June) and Bills season weekends move fastest — book 3–4 weeks out. Serving Buffalo and all of Erie County including Amherst, Cheektowaga, Tonawanda, Hamburg, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 75 — Rhinebeck (profileIdx 7)
  {
    headline: () => `Hibachi at Home in Rhinebeck`,
    opening:  () =>
      `Rhinebeck draws the most intentional travelers in New York — the people who chose this particular Hudson Valley village because they wanted something authentic, scenic, and genuinely worth the trip. The dinner that earns the evening is the one nobody had to fight a reservation line for. Private hibachi at your Rhinebeck rental, farmhouse, or private property brings a certified teppanyaki chef directly to your outdoor space — the full grill, all ingredients, a live cooking performance on your deck or patio, and complete cleanup before the chef heads back down the Taconic.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The show runs 90–120 minutes from first flame to final plate. Premium proteins — filet mignon, lobster tail, scallops — are available for Rhinebeck's most special weekend occasions. Full cleanup when dinner is done. Your property stays exactly as you found it.`,
    closing:  () =>
      `Rhinebeck fall foliage season and summer weekends book 3–4 weeks ahead. Serving Rhinebeck and all of the Hudson Valley — Hyde Park, Red Hook, Millbrook, Tivoli, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 76 — Woodstock (profileIdx 8)
  {
    headline: () => `Mobile Hibachi in Woodstock`,
    opening:  () =>
      `Woodstock brings people who came for the experience, not just the destination — bachelorette groups renting houses in the Catskills, friend groups doing a long weekend in the mountains, families returning to the same rental every fall. The dinner that becomes the story from this particular weekend is the one that happened at the house, not at a restaurant in town. Private hibachi at your Woodstock rental brings a certified teppanyaki chef to your deck or outdoor space — the full setup, the live performance, and complete cleanup before the chef drives back.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your group. Full cleanup when dinner is done. Your Woodstock rental stays spotless.`,
    closing:  () =>
      `Woodstock and Catskill weekend events book 3–5 weeks ahead in peak season. Bachelorette weekends, birthday dinners, and vacation group events are our most common Catskill bookings. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor open-flame cooking is permitted at your rental before booking.`,
  },
  // 77 — Montauk (profileIdx 9)
  {
    headline: () => `Mobile Hibachi in Montauk`,
    opening:  () =>
      `Montauk is where the Hamptons ends and the Atlantic begins — and the people who come here are not looking for another restaurant reservation. The girls' trip groups renting houses on the east end, the birthday weekends that went a different direction this year, the friend crews who have been talking about Montauk since March — they came for the experience, not just the address. Private hibachi at your Montauk rental brings a certified teppanyaki chef to your house, your deck, your outdoor space. The full setup. The full performance. Every plate cooked in front of everyone you brought.`,
    middle:   () =>
      `Your chef arrives fully equipped: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck or yard. The show runs 90–120 minutes — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your group. Full cleanup when dinner is done. Your Montauk rental stays spotless.`,
    closing:  () =>
      `Montauk summer events book 6–8 weeks ahead for peak July and August dates. Girls trips, bachelorette weekends, birthday dinners, and vacation group events are our most common Montauk bookings. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 78 — White Plains (profileIdx 10)
  {
    headline: () => `Hibachi Catering in White Plains`,
    opening:  () =>
      `White Plains is Westchester County's economic and cultural hub — where the major employers hold events, where the most ambitious dinner parties happen, and where the standard for professional entertaining is set. Private hibachi catering in White Plains brings a certified teppanyaki chef to your property or outdoor event venue with the full setup — all proteins, complete service, and a live cooking performance that turns any corporate gathering or private celebration into the kind of evening people plan around next time.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the grill. For White Plains corporate events over 25 guests, we deploy dual chef stations. For events of 50–100, we configure multi-station setups with a full timeline in your quote.`,
    closing:  () =>
      `White Plains corporate events and private gatherings book 2–3 weeks out. Serving White Plains and all of Westchester County — Harrison, Rye, Scarsdale, Bronxville, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 79 — Albany (profileIdx 11)
  {
    headline: () => `Hibachi Catering in Albany`,
    opening:  () =>
      `Albany hosts the events that shape New York State — and the private gatherings that happen here tend to match that energy. Corporate team dinners for Capital Region employers, graduation celebrations for the university community, family reunions that bring everyone back from across the state. Private hibachi catering in Albany brings a certified teppanyaki chef to your property or outdoor venue with the full setup and a live cooking performance that makes any gathering the one people remember.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For large Albany events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Albany weekend events and corporate dinners book 2–3 weeks out. Serving Albany and the full Capital Region — Troy, Schenectady, Saratoga Springs, Clifton Park, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 80 — Smithtown (profileIdx 12)
  {
    headline: () => `Backyard Hibachi in Smithtown`,
    opening:  () =>
      `Smithtown is Long Island backyard party culture at its best — big graduation parties, family reunions with the extended crew, the neighborhood summer gathering that always grows larger than planned. Private backyard hibachi in Smithtown brings a certified teppanyaki chef to your property with the full setup: propane grill, all proteins, and a live cooking performance built for exactly the kind of crowd that shows up at a Smithtown summer event. One station for smaller parties. Two stations for the bigger ones.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Smithtown weekend evenings book 2–3 weeks ahead. Graduation season (May–June) fills fastest — book 4–5 weeks out for Saturday events. Serving Smithtown and surrounding Suffolk County communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 81 — Bronxville (profileIdx 13)
  {
    headline: () => `Private Hibachi Chef in Bronxville`,
    opening:  () =>
      `Bronxville sets the standard for Westchester County private entertaining. The dinners that happen in Bronxville backyards and on Bronxville terraces are the ones people describe at subsequent events — and the comparison is always "not quite like that dinner in Bronxville." Private hibachi at home in Bronxville brings a certified teppanyaki chef to your property with the full setup, hand-selected proteins, and a live cooking performance that is genuinely worth describing.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including premium upgrades like filet mignon and lobster tail, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your Bronxville property is spotless when the chef leaves.`,
    closing:  () =>
      `Bronxville backyard evenings book 2–3 weeks ahead. Serving Bronxville and surrounding Westchester communities — Tuckahoe, Yonkers, Scarsdale, New Rochelle, Larchmont, and Pelham. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 82 — Lake Placid (profileIdx 14)
  {
    headline: () => `Mobile Hibachi in Lake Placid`,
    opening:  () =>
      `Lake Placid is where serious outdoorspeople come to recharge — and the dinner that earns this particular Adirondack evening is not the one everyone drove twenty minutes into town for. Private hibachi at your Lake Placid rental or Adirondack property brings a certified teppanyaki chef to your outdoor space with the full setup and a live cooking performance that matches the scale of the experience everyone came up here for. The chef travels to you, cooks in front of your group, and leaves the space spotless.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or outdoor area. The show runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order. Full cleanup when dinner is done.`,
    closing:  () =>
      `Lake Placid and Adirondack peak season events book 4–6 weeks ahead. Vacation rental groups, anniversary getaways, birthday weekends, and family reunion dinners are our most common Lake Placid bookings. Starting at $60/adult, $30/child, $600 event minimum. Travel fees may apply for remote Adirondack locations — always disclosed upfront.`,
  },
]

// ── Blog posts (5 theme arrays × 3 posts) ─────────────────────────────────────
const NY_BLOG_POSTS = [
  // Theme 0 — NYC Metro / Hudson Valley (variant 0)
  [
    { slug: 'hibachi-catering-corporate-events',   title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',             excerpt: 'Team dinners, client entertainment, and NYC office parties — why a private hibachi chef beats every other corporate event format.', date: '2025-03-15' },
    { slug: 'hibachi-bachelorette-party',          title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',             excerpt: 'Why rooftop and backyard hibachi has become New York\'s go-to bachelorette party activity — fire, food, and zero logistics.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',       title: 'Hibachi at Home vs. Restaurant: Which Is Worth It?',                       excerpt: 'NYC hibachi restaurants vs. a private chef — the real cost, experience quality, and convenience breakdown.', date: '2025-01-22' },
  ],
  // Theme 1 — Westchester / Long Island (variant 1)
  [
    { slug: 'hibachi-birthday-party-ideas',        title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',            excerpt: 'From Scarsdale to Garden City — how to host a backyard hibachi birthday party that outclasses any restaurant.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party',title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',               excerpt: 'Everything you need to prepare for a private hibachi chef at your Westchester or Long Island home.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',  title: 'How Much Does a Private Hibachi Chef Cost?',                              excerpt: 'A full pricing breakdown for Westchester and Long Island hibachi events — what\'s included and what to expect.', date: '2025-01-15' },
  ],
  // Theme 2 — Hamptons / East End (variant 2)
  [
    { slug: 'what-to-expect-hibachi-chef-home',    title: 'What to Expect When You Book a Private Hibachi Chef at Home',             excerpt: 'Hamptons and East End hosts: what happens from booking to cleanup at a private hibachi event.', date: '2024-11-20' },
    { slug: 'hibachi-at-home-vs-restaurant',       title: 'Private Hibachi vs. Restaurant: The Hamptons Verdict',                    excerpt: 'Why Hamptons vacation rental guests are choosing private hibachi over restaurant dining every summer.', date: '2025-01-22' },
    { slug: 'hibachi-bachelorette-party',          title: 'Hamptons Bachelorette Weekend: Why Hibachi Wins Every Time',              excerpt: 'From Southampton to Montauk — how hibachi became the Hamptons\' most-requested bachelorette dinner.', date: '2025-03-15' },
  ],
  // Theme 3 — Hudson Valley / Adirondacks (variant 0, same as theme 0)
  [
    { slug: 'hibachi-catering-corporate-events',   title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',             excerpt: 'Hudson Valley retreat dinners, Adirondack corporate getaways — why private hibachi is the right call.', date: '2025-03-15' },
    { slug: 'hibachi-bachelorette-party',          title: 'Hudson Valley Bachelorette Weekend: The Hibachi Option',                   excerpt: 'Why vacation rental bachelorette groups in Woodstock, Rhinebeck, and the Catskills keep booking private hibachi.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',       title: 'Vacation Rental Hibachi vs. Restaurant: Hudson Valley Edition',            excerpt: 'Why weekend rental groups in the Hudson Valley and Catskills are choosing private hibachi over restaurant dining.', date: '2025-01-22' },
  ],
  // Theme 4 — Western NY / Capital Region (variant 1, same as theme 1)
  [
    { slug: 'hibachi-birthday-party-ideas',        title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',            excerpt: 'From Buffalo to Albany — how to host a backyard hibachi birthday party that stands apart in Western NY.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party',title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',               excerpt: 'Everything Buffalo, Rochester, and Albany hosts need before the private hibachi chef arrives.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',  title: 'How Much Does a Private Hibachi Chef Cost in Western NY?',                excerpt: 'A full pricing breakdown for Western NY and Capital Region hibachi events.', date: '2025-01-15' },
  ],
]

// ── Major cities map (all 51 NY cities) ───────────────────────────────────────
const NY_MAJOR_CITIES = {
  // ── Theme 0 — NYC Metro ─────────────────────────────────────────────────────
  'new-york-city':    { v: 0, profileIdx: 0,  nearby: ['Brooklyn','Queens','The Bronx','Staten Island','Hoboken','Jersey City','White Plains','Yonkers'] },
  'brooklyn':         { v: 0, profileIdx: 1,  nearby: ['New York City','Queens','Staten Island','Yonkers','Jersey City'] },
  'queens':           { v: 0,                 nearby: ['New York City','Brooklyn','The Bronx','Flushing','Great Neck','Garden City','Hempstead'] },
  'the-bronx':        { v: 0,                 nearby: ['New York City','Yonkers','New Rochelle','White Plains','Queens'] },
  'staten-island':    { v: 0,                 nearby: ['Brooklyn','New York City','Jersey City','Hoboken'] },
  'flushing':         { v: 0,                 nearby: ['Queens','New York City','Great Neck','Garden City','Hempstead','Manhasset'] },
  // ── Theme 1 — Westchester / Long Island Affluent ────────────────────────────
  'white-plains':     { v: 1, profileIdx: 10, nearby: ['Scarsdale','Bronxville','New Rochelle','Tarrytown','Yonkers','Chappaqua','Larchmont','Rye'] },
  'scarsdale':        { v: 1, profileIdx: 2,  nearby: ['White Plains','Bronxville','Larchmont','New Rochelle','Rye','Chappaqua','Yonkers'] },
  'bronxville':       { v: 1, profileIdx: 13, nearby: ['Scarsdale','White Plains','Yonkers','New Rochelle','Larchmont','Tuckahoe','Pelham'] },
  'great-neck':       { v: 1,                 nearby: ['Manhasset','Port Washington','Flushing','Garden City','Oyster Bay','Roslyn','Queens'] },
  'manhasset':        { v: 1,                 nearby: ['Great Neck','Port Washington','Garden City','Oyster Bay','Flushing','Roslyn Heights','New Hyde Park'] },
  'garden-city':      { v: 1,                 nearby: ['Hempstead','Rockville Centre','Manhasset','Great Neck','Flushing','Mineola','Uniondale'] },
  'huntington':       { v: 1,                 nearby: ['Smithtown','Commack','Bay Shore','Northport','Cold Spring Harbor','Oyster Bay','Babylon'] },
  'smithtown':        { v: 1, profileIdx: 12, nearby: ['Huntington','Commack','Bay Shore','Islip','Hauppauge','St. James','Kings Park'] },
  'rye':              { v: 1,                 nearby: ['Scarsdale','Chappaqua','Larchmont','White Plains','Port Chester','Harrison'] },
  'chappaqua':        { v: 1,                 nearby: ['Scarsdale','White Plains','Rye','Pleasantville','Mount Kisco','Armonk','Briarcliff Manor'] },
  'new-rochelle':     { v: 1,                 nearby: ['Yonkers','Bronxville','Scarsdale','Larchmont','White Plains','Pelham'] },
  'larchmont':        { v: 1,                 nearby: ['New Rochelle','Bronxville','Scarsdale','Rye','Mamaroneck','White Plains','Harrison'] },
  'port-washington':  { v: 1,                 nearby: ['Great Neck','Manhasset','Oyster Bay','Garden City','Roslyn','Sands Point','Plandome'] },
  'tarrytown':        { v: 1,                 nearby: ['White Plains','Yonkers','Scarsdale','Sleepy Hollow','Irvington','Dobbs Ferry','Pleasantville'] },
  'yonkers':          { v: 1,                 nearby: ['The Bronx','New Rochelle','Bronxville','White Plains','Tarrytown','Dobbs Ferry','Scarsdale'] },
  'commack':          { v: 1,                 nearby: ['Smithtown','Huntington','Bay Shore','Hauppauge','Dix Hills','Brentwood','Bohemia'] },
  'bay-shore':        { v: 1,                 nearby: ['Babylon','Commack','Smithtown','Islip','Sayville','Brentwood','West Islip'] },
  'babylon':          { v: 1,                 nearby: ['Bay Shore','Commack','Long Beach','Lindenhurst','West Babylon','Amityville','Massapequa'] },
  'rockville-centre': { v: 1,                 nearby: ['Garden City','Hempstead','Long Beach','Oceanside','Valley Stream','Lynbrook','Hewlett'] },
  'oyster-bay':       { v: 1,                 nearby: ['Huntington','Great Neck','Manhasset','Garden City','Cold Spring Harbor','Glen Cove','Locust Valley'] },
  'long-beach':       { v: 1,                 nearby: ['Rockville Centre','Babylon','Freeport','Oceanside','Garden City','Hempstead','Lawrence'] },
  'hempstead':        { v: 1,                 nearby: ['Garden City','Rockville Centre','Long Beach','Flushing','Queens','Valley Stream','Uniondale'] },
  // ── Theme 2 — Hamptons / East End ───────────────────────────────────────────
  'southampton':      { v: 2, profileIdx: 3,  nearby: ['East Hampton','Montauk','Bridgehampton','Sag Harbor','Shelter Island','Water Mill','Westhampton'] },
  'east-hampton':     { v: 2, profileIdx: 4,  nearby: ['Southampton','Montauk','Bridgehampton','Sag Harbor','Springs','Shelter Island','Amagansett'] },
  'montauk':          { v: 2, profileIdx: 9,  nearby: ['East Hampton','Amagansett','Sag Harbor','Southampton','Shelter Island'] },
  'shelter-island':   { v: 2,                 nearby: ['Southampton','East Hampton','Sag Harbor','Greenport'] },
  // ── Theme 3 — Hudson Valley / Catskills / Adirondacks ──────────────────────
  'rhinebeck':        { v: 3, profileIdx: 7,  nearby: ['Poughkeepsie','Kingston','New Paltz','Woodstock','Beacon','Millbrook','Hyde Park','Red Hook'] },
  'new-paltz':        { v: 3,                 nearby: ['Woodstock','Kingston','Poughkeepsie','Beacon','Newburgh','Highland','Rosendale','Ellenville'] },
  'kingston':         { v: 3,                 nearby: ['Woodstock','New Paltz','Rhinebeck','Poughkeepsie','Catskill','Saugerties','Red Hook'] },
  'woodstock':        { v: 3, profileIdx: 8,  nearby: ['Kingston','New Paltz','Rhinebeck','Catskill','Phoenicia','Saugerties','Hunter','Windham'] },
  'poughkeepsie':     { v: 3,                 nearby: ['Rhinebeck','Kingston','Newburgh','New Paltz','Beacon','Hyde Park','Highland'] },
  'beacon':           { v: 3,                 nearby: ['Newburgh','Poughkeepsie','Cold Spring','Rhinebeck','Fishkill','Wappingers Falls'] },
  'newburgh':         { v: 3,                 nearby: ['Poughkeepsie','Beacon','New Paltz','Middletown','Goshen','Kingston','Cornwall'] },
  'cold-spring':      { v: 3,                 nearby: ['Beacon','Newburgh','Tarrytown','Peekskill','Putnam Valley','Carmel'] },
  'lake-george':      { v: 3, profileIdx: 5,  nearby: ['Saratoga Springs','Lake Placid','Glens Falls','Ticonderoga','Bolton Landing','Queensbury'] },
  'lake-placid':      { v: 3, profileIdx: 14, nearby: ['Lake George','Saranac Lake','Keene Valley','Tupper Lake','Elizabethtown'] },
  'saratoga-springs': { v: 3,                 nearby: ['Albany','Lake George','Troy','Clifton Park','Glens Falls','Ballston Spa'] },
  'watkins-glen':     { v: 3,                 nearby: ['Ithaca','Corning','Geneva','Seneca Falls','Elmira','Montour Falls'] },
  'ithaca':           { v: 3,                 nearby: ['Watkins Glen','Corning','Syracuse','Rochester','Cortland','Trumansburg','Dryden'] },
  // ── Theme 4 — Western NY / Capital Region ───────────────────────────────────
  'buffalo':          { v: 4, profileIdx: 6,  nearby: ['Niagara Falls','Amherst','Cheektowaga','Tonawanda','Hamburg','Orchard Park','Lancaster','Rochester'] },
  'rochester':        { v: 4,                 nearby: ['Buffalo','Syracuse','Ithaca','Pittsford','Victor','Fairport','Brighton','Henrietta'] },
  'albany':           { v: 4, profileIdx: 11, nearby: ['Troy','Saratoga Springs','Schenectady','Clifton Park','Latham','Guilderland','Cohoes'] },
  'troy':             { v: 4,                 nearby: ['Albany','Saratoga Springs','Schenectady','Watervliet','Green Island','Cohoes','Lansingburgh'] },
  'syracuse':         { v: 4,                 nearby: ['Rochester','Ithaca','Albany','Utica','Liverpool','Fayetteville','Dewitt','Camillus'] },
  'niagara-falls':    { v: 4,                 nearby: ['Buffalo','Lewiston','Lockport','North Tonawanda','Grand Island','Youngstown'] },
}

// ── Display name overrides (fixes slugToCity() failures) ──────────────────────
const NY_CITY_DISPLAY_NAMES = {
  'new-york-city':    'New York City',
  'the-bronx':        'The Bronx',
  'east-hampton':     'East Hampton',
  'rockville-centre': 'Rockville Centre',
  'lake-george':      'Lake George',
  'lake-placid':      'Lake Placid',
  'port-washington':  'Port Washington',
  'new-rochelle':     'New Rochelle',
  'saratoga-springs': 'Saratoga Springs',
  'watkins-glen':     'Watkins Glen',
  'cold-spring':      'Cold Spring',
  'new-paltz':        'New Paltz',
  'niagara-falls':    'Niagara Falls',
  'bay-shore':        'Bay Shore',
  'oyster-bay':       'Oyster Bay',
  'great-neck':       'Great Neck',
  'shelter-island':   'Shelter Island',
}

// ── Main builder ──────────────────────────────────────────────────────────────
export function getNyCityData(citySlug, cityName) {
  const major       = NY_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getNYVariantIndex(citySlug)
  const theme       = NY_IMAGE_THEMES[v]
  const displayName = NY_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'New York',
    stateAbbr:    'NY',
    stateSlug:    'new-york',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: NY_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['New York City', 'Brooklyn', 'White Plains', 'Buffalo', 'Albany'],
    localHighlights:   NY_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: NY_OCCASIONS[v],
    faqSet:            NY_FAQ_SETS[v](displayName),
    testimonials:      NY_TESTIMONIALS[v],
    // INTRO_VARIANTS: 63–67 = NY generic, 68–82 = NY city-specific
    uniqueIntroVariant:  (major?.profileIdx != null) ? 68 + major.profileIdx : 63 + v,
    uniqueWhyUsVariant:  v,
    // CLOSING_VARIANTS: 63–67 = NY generic, 68–82 = NY city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 68 + major.profileIdx : 63 + v,
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getNyHowItWorks(citySlug) {
  const major = NY_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getNYVariantIndex(citySlug)
  return NY_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getNySectionVariant(citySlug) {
  const major = NY_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getNYVariantIndex(citySlug)
  return NY_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getNyCityImage(citySlug) {
  return NY_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getNySupportImages(citySlug, variantIdx) {
  if (NY_SUPPORT_IMAGES[citySlug]) return NY_SUPPORT_IMAGES[citySlug]
  const major = NY_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getNYVariantIndex(citySlug)
  return NY_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getNyBlogPosts(variant, count) {
  return NY_BLOG_POSTS[variant % NY_BLOG_POSTS.length].slice(0, count)
}
