// =============================================================================
// lib/massachusettsData.js — Massachusetts Expansion (Batches 1–4, complete)
// 18 cities live · 5 geographic themes
// Theme 0: Greater Boston (Boston, Cambridge, Brookline, Newton, Wellesley)
// Theme 1: MetroWest (Waltham, Weston, Lexington, Needham)
// Theme 2: North Shore (Marblehead, Newburyport)
// Theme 3: South Shore & Cape Cod (Hingham, Cohasset, Hyannis, Chatham, Falmouth)
// Theme 4: Western Massachusetts (Northampton, Amherst)
//
// profileIdx is assigned by ACTUAL BUILD ORDER across the whole state, not grouped by
// theme (matches the Virginia precedent, e.g. Leesburg=profileIdx21 despite being Theme 0).
// Batch 1: Boston=0, Brookline=1, Newton=2, Wellesley=3.
// Batch 2: Cambridge=4, Waltham=5, Weston=6, Lexington=7, Needham=8.
// Batch 3: Marblehead=9, Newburyport=10, Hingham=11, Cohasset=12.
// Batch 4: Hyannis=13, Chatham=14, Falmouth=15, Northampton=16, Amherst=17.
//
// INTRO_VARIANTS indices:   393–397 MA generic · 398–415 MA city-specific (all 18 live)
// CLOSING_VARIANTS indices: 393–397 MA generic · 398–415 MA city-specific (all 18 live)
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getMAVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 5
}

// ── Hero subtitles (5 themes) ──────────────────────────────────────────────────
const MA_HERO_SUBTITLES = [
  (city) => `Executive Entertaining · Biotech & Healthcare Events · University Milestones · Serving ${city} & Greater Boston`,
  (city) => `Luxury Home Entertaining · Backyard Celebrations · Corporate Executive Events · Serving ${city} & MetroWest`,
  (city) => `Coastal Estate Dining · Waterfront Entertaining · Wedding Weekends · Serving ${city} & the North Shore`,
  (city) => `Vacation Rental Dining · Beach House Entertaining · Family Reunions · Serving ${city} & the South Shore`,
  (city) => `College Town Celebrations · Family Milestones · Destination Weddings · Serving ${city} & Western Massachusetts`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const MA_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Greater Boston
  (city) => [
    `Executive and biotech-corridor entertaining for ${city}'s most discerning hosts`,
    'Perfect for hospital and research leadership, university faculty, and corporate executives',
    `Premium protein upgrades — filet mignon, lobster tail, wagyu — for any ${city} occasion`,
    `Greater Boston events book 2–4 weeks ahead — spring graduation season and summer fill fastest`,
    'Certified teppanyaki chef, full premium setup, and complete cleanup included',
    `Brownstone patios, rooftop terraces, and historic backyards throughout ${city} all work beautifully`,
  ],
  // Theme 1 — MetroWest
  (city) => [
    `Large-lawn backyard hibachi for ${city}'s luxury home and family community`,
    'Perfect for corporate executives, graduation parties, and milestone family celebrations',
    `${city} events book 2–3 weeks ahead — May and June graduation season fills fastest`,
    'Full setup and cleanup — you provide the backyard, we handle everything else',
    'Dual-station capacity for large gatherings of 25–60+ guests',
    `Route 128 corridor executives throughout ${city} book us for both corporate and family events`,
  ],
  // Theme 2 — North Shore
  (city) => [
    `Coastal estate and waterfront dining throughout ${city}`,
    'Perfect for wedding-weekend welcome dinners, milestone anniversaries, and family celebrations',
    `Premium proteins and a live-fire performance built for ${city}'s harborfront properties`,
    `${city} peak-season dates book 3–4 weeks ahead — summer wedding season fills fastest`,
    'Certified teppanyaki chef travels to your waterfront home, estate, or wedding venue',
    'Dual-station capacity for large wedding-weekend and family gatherings',
  ],
  // Theme 3 — South Shore & Cape Cod
  (city) => [
    `Vacation rental and beach house dining throughout ${city}`,
    'Perfect for family reunions, bachelor and bachelorette weekends, and summer celebrations',
    `Vacation rental and backyard setups are ${city}'s most common bookings`,
    `${city} summer season books 2–3 weeks ahead — July and August fill fastest`,
    'Full setup and cleanup at your vacation rental, beach house, or backyard',
    'Dual-station capacity for large family reunion and group-trip gatherings',
  ],
  // Theme 4 — Western Massachusetts
  (city) => [
    `College-town celebration and family milestone dining throughout ${city}`,
    'Perfect for graduation parties, family reunions, and destination wedding weekends',
    `Premium proteins available for any ${city} celebration or wedding-adjacent event`,
    `${city} graduation season (May) and wedding season (June–September) book 3–4 weeks ahead`,
    'Full setup and cleanup at your home, campus-adjacent property, or wedding venue',
    'Dual-station capacity for large graduation and reunion gatherings',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const MA_OCCASIONS = [
  // Theme 0 — Greater Boston
  ['Executive Dinner Parties', 'Corporate Team Dinners', 'Client Appreciation Events', 'University Graduation Parties', 'Milestone Birthday Dinners', 'Anniversary Celebrations', 'Engagement Parties', 'Holiday Gatherings', 'Retirement Celebrations', 'Biotech & Hospital Team Events'],
  // Theme 1 — MetroWest
  ['Birthday Parties', 'Graduation Parties', 'Anniversary Dinners', 'Family Reunions', 'Corporate Events', 'Bachelorette Parties', 'Neighborhood Gatherings', 'Holiday Dinners', 'Retirement Parties', 'Milestone Celebrations'],
  // Theme 2 — North Shore
  ['Wedding Welcome Dinners', 'Rehearsal Dinners', 'Anniversary Getaways', 'Milestone Birthday Dinners', 'Family Reunions', 'Engagement Parties', 'Holiday Gatherings', 'Corporate Retreats', 'Sailing & Yacht Club Events', 'Waterfront Celebrations'],
  // Theme 3 — South Shore & Cape Cod
  ['Family Reunions', 'Beach House Vacation Dinners', 'Bachelor & Bachelorette Weekends', 'Birthday Celebrations', 'Anniversary Getaways', 'Multi-Generational Trips', 'Corporate Retreats', 'Summer Celebrations', 'Graduation Parties', 'Milestone Celebrations'],
  // Theme 4 — Western Massachusetts
  ['Graduation Parties', 'Family Reunions', 'Destination Weddings', 'Birthday Celebrations', 'Anniversary Dinners', 'University Family Weekends', 'Corporate Retreats', 'Holiday Gatherings', 'Engagement Parties', 'Milestone Celebrations'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const MA_FAQ_SETS = [
  // Theme 0 — Greater Boston
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} home or rooftop property?`,
      a: `Absolutely — Greater Boston properties are among our most requested setups, from brownstone rear patios to suburban backyards. We need a flat outdoor area of at least 10×10 ft with vehicle access. Premium protein upgrades including filet mignon, lobster tail, and wagyu are available for any ${city} event.`,
    },
    {
      q: `Do you serve biotech, hospital, and university teams in ${city}?`,
      a: `Yes — corporate team dinners and client entertainment for biotech, healthcare, and university leadership are among our most common ${city} bookings. We maintain full professionalism from arrival through cleanup, and can coordinate with office campuses, labs, or private homes.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `For events in the ${city} area, we recommend booking 2–4 weeks in advance. Spring fills fastest — particularly May and June when university graduation season overlaps with outdoor entertaining season across Greater Boston. Premium dates and larger events should be secured 4 weeks ahead.`,
    },
    {
      q: `What premium protein upgrades are available for ${city} events?`,
      a: `Full premium menu is available for any Greater Boston event: filet mignon, lobster tail, wagyu beef, king shrimp, and Chilean sea bass. Mix and match per guest at booking. Premium packages are a common addition for executive dinners and milestone celebrations throughout ${city}.`,
    },
    {
      q: `Is there a travel fee for ${city} and surrounding Greater Boston communities?`,
      a: `No extra travel fee for ${city} and most of Greater Boston. For locations more than 40 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you confirm.`,
    },
    {
      q: `Can you handle a large gathering in ${city} with 40+ guests?`,
      a: `Yes — for groups over 25, we bring two chef stations running simultaneously. Large corporate events, milestone celebrations, and graduation parties of 40–80 guests are among our most common Greater Boston bookings. Full coordination handled end-to-end.`,
    },
  ],
  // Theme 1 — MetroWest (scaffolding for future batches)
  (city) => [
    { q: `Can you set up hibachi in a ${city} backyard for a graduation party?`, a: `Yes — ${city} backyards and large suburban lawns are among our most common setups. We need a flat outdoor area of at least 10×10 ft. Graduation season books fast, so reserve 2–3 weeks ahead for May and June Saturdays.` },
    { q: `How far in advance should I book a ${city} event?`, a: `Weekend events in ${city} book 2–3 weeks out. Graduation season and summer Saturdays fill fastest along MetroWest.` },
    { q: `Can you handle large family reunion gatherings in ${city}?`, a: `Yes — for groups over 25, we bring two chef stations running in parallel. Large family reunions and graduation parties of 40–80 guests are common throughout MetroWest.` },
    { q: `What's included in a ${city} hibachi event?`, a: `Everything: teppan grill, propane, all proteins, fried rice, vegetables, sauces, plates, and utensils. You provide the backyard and guests — we handle the rest.` },
    { q: `Is there a travel fee for ${city}?`, a: `No extra travel fee for most of MetroWest. Locations beyond 40 miles from our nearest chef base may have a modest, always-disclosed fee.` },
    { q: `Do you serve corporate events in ${city}?`, a: `Yes — Route 128 corridor corporate team dinners and client events are a regular part of our ${city} business.` },
  ],
  // Theme 2 — North Shore (scaffolding for future batches)
  (city) => [
    { q: `Can you cater a wedding welcome dinner in ${city}?`, a: `Yes — welcome dinners and rehearsal dinners at ${city} waterfront homes and venues are among our most requested events. Reserve 3–4 weeks ahead for wedding-season weekends.` },
    { q: `Do you serve waterfront and harbor properties in ${city}?`, a: `Yes — harborfront homes, estate properties, and yacht club-adjacent venues throughout ${city} are ideal hibachi setups. We need a flat outdoor area of at least 10×10 ft.` },
    { q: `How far in advance should I book a ${city} event?`, a: `${city} events book 3–4 weeks ahead. Summer wedding season (June–September) fills fastest.` },
    { q: `Can you handle a large wedding-weekend gathering in ${city}?`, a: `Yes — dual-station capacity handles large wedding-weekend and family gatherings of 25–60+ guests.` },
    { q: `Is there a travel fee for ${city}?`, a: `A modest travel fee may apply for remote coastal properties — always disclosed upfront before you confirm.` },
    { q: `What premium proteins are available?`, a: `Filet mignon, lobster tail, and wagyu upgrades are available for any ${city} wedding or celebration event.` },
  ],
  // Theme 3 — South Shore & Cape Cod (scaffolding for future batches)
  (city) => [
    { q: `Can you cater a family reunion at our ${city} vacation rental?`, a: `Yes — vacation rental group dinners are our most requested ${city} event. We need a flat outdoor area of at least 10×10 ft, common at most rental properties.` },
    { q: `Do you serve beach house rentals in ${city}?`, a: `Yes — beach house and vacation rental group dinners are a core part of our ${city} business, fully self-contained with no gas hookups required.` },
    { q: `How far in advance should I book a ${city} event?`, a: `${city} peak summer season books 2–3 weeks ahead. Shoulder-season dates can often be booked with less notice.` },
    { q: `Can you handle a large multi-generational group in ${city}?`, a: `Yes — dual-station capacity handles large family reunion and group-trip gatherings of 25–60+ guests.` },
    { q: `Is there a travel fee for ${city}?`, a: `No extra travel fee within the immediate area. Remote properties beyond 40 miles may have a modest, always-disclosed fee.` },
    { q: `What's included in a ${city} hibachi event?`, a: `Everything: teppan grill, propane, all proteins, fried rice, vegetables, sauces, plates, and utensils. Full setup and cleanup included.` },
  ],
  // Theme 4 — Western Massachusetts (scaffolding for future batches)
  (city) => [
    { q: `Can you set up hibachi for a graduation party in ${city}?`, a: `Yes — ${city} backyards and campus-adjacent properties are among our most common setups. Reserve 3–4 weeks ahead for graduation weekend.` },
    { q: `Do you serve destination wedding events in ${city}?`, a: `Yes — welcome dinners and rehearsal dinners at ${city} wedding venues are a growing part of our Western Massachusetts business.` },
    { q: `How far in advance should I book a ${city} event?`, a: `${city} events book 2–3 weeks ahead. Graduation season (May) and wedding season require 3–4 weeks' notice.` },
    { q: `Can you handle a large family reunion in ${city}?`, a: `Yes — dual-station capacity handles large graduation and reunion gatherings of 25–60+ guests.` },
    { q: `Is there a travel fee for ${city}?`, a: `A modest travel fee may apply for remote Western Massachusetts properties — always disclosed upfront.` },
    { q: `What premium proteins are available?`, a: `Filet mignon, lobster tail, and wagyu upgrades are available for any ${city} celebration.` },
  ],
]

// ── Testimonials ────────────────────────────────────────────────────────────────
const MA_TESTIMONIALS = [
  // Theme 0 — Greater Boston
  [
    {
      text: '"Executive dinner at our Back Bay brownstone — 16 guests, rooftop terrace setup, chef arrived exactly on time and delivered a flawless two-hour performance. Colleagues from the hospital and a few Seaport biotech partners. Every guest asked for the contact information before they left."',
      name: 'Robert & Catherine H.',
      city: 'Boston, MA',
      event: 'Executive Dinner Party',
      initials: 'RH',
    },
    {
      text: '"Graduation party for our daughter in Newton — 40 guests, backyard setup near Newton Centre, dual stations for the crowd. Every restaurant near Boston College was fully booked for graduation weekend. Having the chef come to us was the best decision we made."',
      name: 'Maria & David C.',
      city: 'Newton, MA',
      event: 'Graduation Party',
      initials: 'MC',
    },
    {
      text: '"Anniversary dinner at our Wellesley home — 18 guests, terrace setup near the college, chef was exceptional from first flame to final plate. The filet mignon and lobster tail upgrades were extraordinary. Nothing in the MetroWest restaurant scene comes close to this."',
      name: 'Elizabeth & James F.',
      city: 'Wellesley, MA',
      event: 'Anniversary Dinner',
      initials: 'EF',
    },
  ],
  // Theme 1 — MetroWest
  [
    {
      text: '"Corporate team dinner for our Waltham office — 24 people, patio setup near Route 128, chef ran the whole show flawlessly. Our biotech partners were still talking about it at the next offsite. Best team dinner we\'ve done since the campus expansion."',
      name: 'Jason T.',
      city: 'Waltham, MA',
      event: 'Corporate Team Dinner',
      initials: 'JT',
    },
    {
      text: '"Estate dinner at our Weston property — 20 guests, terrace setup, chef delivered a flawless two-hour performance. The filet mignon and wagyu upgrades were extraordinary. This is our new standard for private entertaining."',
      name: 'Elizabeth & James F.',
      city: 'Weston, MA',
      event: 'Estate Dinner Party',
      initials: 'EF',
    },
    {
      text: '"Graduation party for our son in Lexington — 36 guests, backyard setup, dual stations. Every restaurant near the Battle Green was booked solid for graduation weekend. Having the chef come to us was the easiest decision of the whole week."',
      name: 'The Sullivan Family',
      city: 'Lexington, MA',
      event: 'Graduation Party',
      initials: 'SF',
    },
  ],
  // Theme 2 — North Shore
  [
    {
      text: '"Wedding welcome dinner at our Marblehead harborfront home — 24 guests the night before the ceremony, chef set up on the waterfront patio and delivered a performance our families are still talking about. Perfect way to kick off the weekend."',
      name: 'Rachel & Tyler M.',
      city: 'Marblehead, MA',
      event: 'Wedding Welcome Dinner',
      initials: 'RM',
    },
    {
      text: '"Anniversary dinner at our Newburyport waterfront property — 16 guests on the deck overlooking the Merrimack, chef arrived exactly on time and delivered a flawless two-hour performance. Will make this an annual tradition."',
      name: 'Susan & David M.',
      city: 'Newburyport, MA',
      event: 'Anniversary Dinner',
      initials: 'SM',
    },
  ],
  // Theme 3 — South Shore & Cape Cod
  [
    {
      text: '"Family reunion at our Hingham home near the harbor — 32 guests, backyard setup, dual stations for the crowd. Best reunion dinner we\'ve hosted in years. Kids competing for the flying shrimp, grandparents front row the whole time."',
      name: 'The Foley Family',
      city: 'Hingham, MA',
      event: 'Family Reunion',
      initials: 'FF',
    },
    {
      text: '"Group dinner at our Chatham beach house rental — 18 of us, back from a day on the beach, and the chef turned it into the best night of the trip. Everyone still talks about the fire tricks with the ocean right behind us."',
      name: 'Chris L.',
      city: 'Chatham, MA',
      event: 'Beach House Vacation Dinner',
      initials: 'CL',
    },
    {
      text: '"Booked hibachi for our Falmouth rental the night before our Woods Hole ferry to the Vineyard — 14 guests, patio setup. Chef was fantastic, food was outstanding, and it was the perfect start to our Cape trip."',
      name: 'Patricia N.',
      city: 'Falmouth, MA',
      event: 'Vacation Rental Dinner',
      initials: 'PN',
    },
  ],
  // Theme 4 — Western Massachusetts
  [
    {
      text: '"UMass graduation party for our daughter in Amherst — 38 guests, backyard setup, dual stations. Every restaurant in the Five College area was booked solid for graduation weekend. Having the chef come to us was the best decision we made."',
      name: 'The Bennion Family',
      city: 'Amherst, MA',
      event: 'Graduation Party',
      initials: 'BF',
    },
    {
      text: '"Family weekend dinner near Smith College in Northampton — 22 guests, patio setup downtown, chef was personable and professional throughout. The Paradise City arts-town energy made the whole evening feel different from any dinner I\'ve attended."',
      name: 'Rachel N.',
      city: 'Northampton, MA',
      event: 'Family Weekend Dinner',
      initials: 'RN',
    },
  ],
]

// ── Image themes (hero, one per geographic theme) ─────────────────────────────
const MA_IMAGE_THEMES = [
  { heroImage: '/pics/hibachi-private-chef-1.jpg' }, // Theme 0 — Greater Boston
  { heroImage: '/pics/backyard-hibachi-3.jpg' },      // Theme 1 — MetroWest
  { heroImage: '/pics/hibachi-virginia-beach.jpg' },  // Theme 2 — North Shore (coastal/waterfront stock shot)
  { heroImage: '/pics/hibachi-pool-party.jpg' },      // Theme 3 — South Shore & Cape Cod
  { heroImage: '/pics/hibachi-colorado-home.jpg' },   // Theme 4 — Western Massachusetts
]

// ── How It Works ──────────────────────────────────────────────────────────────
const MA_HOW_IT_WORKS = [
  // Theme 0 — Greater Boston
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Home`,
    footerNote: (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Reserve Your Date',              desc: 'Contact us with your date, guest count, and property setup. Premium protein packages available at booking. Fast confirmation.' },
      { num: '02', title: 'Chef Arrives Fully Equipped',    desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, hand-selected proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Fire Performance',          desc: 'Guests gather for 90–120 minutes of live hibachi — fire tricks, precision knife work, and every plate cooked to order at the teppan.' },
      { num: '04', title: 'Complete Cleanup, Nothing Left', desc: 'Chef handles all teardown and cleanup. Your property is exactly as it was before the chef arrived.' },
    ],
  },
  // Theme 1 — MetroWest
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} events book 2–3 weeks out. Call or text (201) 565-3878 to confirm your date.`,
    steps: [
      { num: '01', title: 'Book Your Date',                desc: 'Request your event online or by phone. Tell us your guest count and backyard setup. Quick confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything',  desc: 'Certified chef arrives with full teppan grill, propane, all ingredients, sauces, plates, and chopsticks.' },
      { num: '03', title: 'The Performance Begins',        desc: 'Guests gather around the grill for a live teppanyaki show — fire tricks, fresh proteins cooked to order.' },
      { num: '04', title: 'Zero Cleanup for You',          desc: 'Chef packs everything out completely. You hosted the best dinner of the season and didn\'t touch a single dish.' },
    ],
  },
  // Theme 2 — North Shore
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Property`,
    footerNote: (city) => `${city} peak-season dates book 3–4 weeks ahead. Call or text (201) 565-3878 to confirm.`,
    steps: [
      { num: '01', title: 'Reserve Your Evening',          desc: 'Contact us with your date, guest count, and property setup. Premium proteins available. We confirm and coordinate travel.' },
      { num: '02', title: 'Chef Travels to You',           desc: 'Your certified teppanyaki chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Fire Dinner on the Water',  desc: 'Guests gather for 90–120 minutes of live hibachi cooking — fire tricks, custom proteins, fried rice, grilled vegetables.' },
      { num: '04', title: 'Full Cleanup, Nothing Left',    desc: 'Chef handles all teardown and cleanup. Your property is immaculate when they leave.' },
    ],
  },
  // Theme 3 — South Shore & Cape Cod
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Vacation Rental`,
    footerNote: (city) => `${city} peak-season events book 2–3 weeks ahead. Call or text (201) 565-3878 to confirm.`,
    steps: [
      { num: '01', title: 'Request Your Event',            desc: 'Book online or by phone. Tell us your guest count and rental property setup. Confirmed quickly.' },
      { num: '02', title: 'Full Setup Arrives',            desc: 'Your chef arrives with everything: grill, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking for the Crowd',    desc: 'Every guest gathers around the grill for a live teppanyaki performance — fire tricks, fresh proteins cooked to order.' },
      { num: '04', title: 'Chef Handles Cleanup',          desc: 'Complete cleanup done by your chef. Your family keeps the memory. You do none of the work.' },
    ],
  },
  // Theme 4 — Western Massachusetts
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} events book 2–3 weeks ahead. Call or text (201) 565-3878 to secure your date.`,
    steps: [
      { num: '01', title: 'Book Your Event',               desc: 'Request your date online or by phone. Tell us your guest count and outdoor space. We confirm fast and coordinate travel.' },
      { num: '02', title: 'Chef Arrives Equipped',         desc: 'Your certified chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and chopsticks.' },
      { num: '03', title: 'College Town Dinner Show',      desc: 'Every guest gathered at the grill for 90–120 minutes — fire tricks, proteins cooked to order, fried rice, grilled vegetables.' },
      { num: '04', title: 'Complete Cleanup Included',     desc: 'Chef handles all teardown and pack-out. Your property is spotless when they leave.' },
    ],
  },
]

// ── Section variants ────────────────────────────────────────────────────────────
const MA_SECTION_VARIANTS = [
  // Theme 0 — Greater Boston
  {
    heroPill:           'Greater Boston\'s Private Chef',
    experiencePill:     'Beyond Any Boston Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏛️', title: `Your ${city} Property Is the Venue`,     desc: `No restaurant can give your guests this — a certified teppanyaki chef performing exclusively at your ${city} property for the evening.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',             desc: 'Filet mignon, lobster tail, wagyu upgrades — cooked live on the teppan in front of your guests.' },
      { icon: '🏥', title: 'Built for Biotech & University Entertaining', desc: 'Corporate team dinners, hospital leadership events, and graduation milestones — calibrated for the Greater Boston professional class.' },
      { icon: '✨', title: 'Full Show, Zero Cleanup',                  desc: 'Premium performance, hand-selected proteins, and complete teardown. Your property is spotless when the chef leaves.' },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a ${city} MA executive event`,
    areasPill:          'Serving Greater Boston',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Greater Boston Communities`,
    areasIntro: [
      (city, state) => `We serve all of Greater Boston — Boston, Cambridge, Brookline, Newton, Wellesley, and every community throughout Suffolk and Middlesex County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Reserve Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Standard for Private Entertaining in ${city}`,
    occasionSubtext:       'Executive dinners, corporate team events, and university milestones — private hibachi is Greater Boston\'s most memorable in-home dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city} Private Hibachi Questions — Answered`,
    testimonialSubheading: 'What Greater Boston Hosts Are Saying',
  },
  // Theme 1 — MetroWest
  {
    heroPill:           'MetroWest\'s Private Chef',
    experiencePill:     'Better Than Any Restaurant Reservation',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `${city}'s Backyard Is the Venue`,        desc: `No reservation battles, no parking, no rushed tables — your ${city} backyard becomes an exclusive private dining room for the evening.` },
      { icon: '🔥', title: 'One Chef, One Show',                     desc: 'Every guest at the same grill, the same chef, the same moment — the shared experience is what makes hibachi unforgettable.' },
      { icon: '🎓', title: 'Built for Graduation Season',            desc: 'When every restaurant is fully booked in May and June, we come to your backyard.' },
      { icon: '🧹', title: 'Arrive & Disappear Spotless',            desc: 'Your chef arrives fully equipped, sets up, cooks the entire dinner, and packs out after.' },
    ],
    experienceImage:    '/pics/backyard-hibachi-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a backyard event in ${city}, MA`,
    areasPill:          'Serving MetroWest',
    areasHeadline:      (city) => `Hibachi in ${city} and MetroWest`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of MetroWest — every community throughout Middlesex and Norfolk County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From graduation parties to corporate events, private hibachi is the MetroWest backyard upgrade you\'ve been waiting for',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What MetroWest Hosts Are Saying',
  },
  // Theme 2 — North Shore
  {
    heroPill:           'North Shore\'s Private Chef',
    experiencePill:     'The Dinner of the Weekend',
    experiencePoints:   (city) => [
      { icon: '⛵', title: `Waterfront Dining in ${city}`,           desc: `Harborfront homes, estate properties, and yacht club-adjacent venues throughout ${city} are the ideal setting for private hibachi.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',            desc: 'Filet mignon, lobster tail, wagyu — cooked live at the teppan on your waterfront terrace.' },
      { icon: '💍', title: 'Built for Wedding Weekends',             desc: `Welcome dinners and rehearsal dinners at ${city} waterfront properties are among our most requested events.` },
      { icon: '✨', title: 'Property Stays Immaculate',              desc: 'Flawless setup, full service throughout, and complete cleanup. You enjoy the evening; we handle everything else.' },
    ],
    experienceImage:    '/pics/hibachi-virginia-beach.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} MA waterfront estate`,
    areasPill:          'Serving the North Shore',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the North Shore`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the North Shore — every coastal community throughout Essex County.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Summer wedding season fills 3–4 weeks ahead.`,
    ],
    areasButton:           'Reserve Your Evening',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone Talks About in ${city}`,
    occasionSubtext:       'Wedding welcome dinners, waterfront anniversary getaways, and family celebrations — private hibachi elevates any North Shore evening into a lasting memory',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What North Shore Hosts Are Saying',
  },
  // Theme 3 — South Shore & Cape Cod
  {
    heroPill:           'South Shore & Cape Cod\'s Private Chef',
    experiencePill:     'The Best Night of the Trip',
    experiencePoints:   (city) => [
      { icon: '🏖️', title: `Vacation Rental Dining in ${city}`,     desc: `Beach houses and vacation rentals throughout ${city} are the ideal setting for a group dinner.` },
      { icon: '👨‍👩‍👧‍👦', title: 'Built for Family Reunions',              desc: `Multi-generational family reunions and summer group trips are core to our ${city} business.` },
      { icon: '🔥', title: 'No Restaurant Logistics',                desc: 'Fresh proteins cooked live, a full teppanyaki performance, and no reservations for your whole group to manage.' },
      { icon: '🧹', title: 'We Handle Everything',                   desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except enjoy the trip.' },
    ],
    experienceImage:    '/pics/hibachi-pool-party.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} MA vacation rental event`,
    areasPill:          'Serving the South Shore & Cape Cod',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the South Shore & Cape Cod`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the South Shore and Cape Cod — every coastal and vacation community in the region.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Peak summer season books 2–3 weeks ahead.`,
    ],
    areasButton:           'Reserve Your Evening',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone Remembers in ${city}`,
    occasionSubtext:       'Family reunions, beach house vacation dinners, and bachelor/bachelorette weekends — private hibachi elevates any South Shore or Cape Cod trip',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What South Shore & Cape Cod Guests Are Saying',
  },
  // Theme 4 — Western Massachusetts
  {
    heroPill:           'Western Massachusetts\' Private Chef',
    experiencePill:     'Every Generation at the Grill',
    experiencePoints:   (city) => [
      { icon: '🎓', title: `College Town Dining in ${city}`,        desc: `Campus-adjacent properties and family homes throughout ${city} are ideal hibachi setups.` },
      { icon: '👨‍👩‍👧‍👦', title: 'Every Generation at the Grill',          desc: `Students, parents, and grandparents in ${city} all gathered at the same teppan — multi-generational appeal that few dining formats can match.` },
      { icon: '💍', title: 'Built for Destination Weddings',        desc: `Welcome dinners and rehearsal dinners at ${city} wedding venues are a growing part of our business.` },
      { icon: '🧹', title: 'We Handle Everything',                   desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except enjoy the celebration.' },
    ],
    experienceImage:    '/pics/hibachi-colorado-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} MA college-town event`,
    areasPill:          'Serving Western Massachusetts',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Western Massachusetts`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Western Massachusetts — every college town and surrounding community in the Pioneer Valley and Berkshires.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Graduation and wedding season fill fastest.`,
    ],
    areasButton:           'Book Your Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Celebration`,
    occasionSubtext:       'Graduation parties, family reunions, and destination weddings — Western Massachusetts families and wedding parties celebrate together, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Western Massachusetts Hosts Are Saying',
  },
]

// ── City experience image map (Batch 1 cities) ────────────────────────────────
const MA_CITY_IMAGE_MAP = {
  'boston':    { src: '/pics/hibachi-chef-home.jpg',   alt: (city) => `Private hibachi chef at a Boston MA executive event` },
  'brookline': { src: '/pics/hibachi-catering-3.jpg',  alt: (city) => `Private hibachi chef at a Brookline MA event` },
  'newton':    { src: '/pics/backyard-hibachi-3.jpg',  alt: (city) => `Private hibachi chef at a Newton MA family event` },
  'wellesley': { src: '/pics/hibachi-pic-3.jpg',       alt: (city) => `Private hibachi chef at a Wellesley MA estate event` },
  // Batch 2 — MetroWest & Cambridge Biotech Corridor
  'cambridge': { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Private hibachi chef at a Cambridge MA Kendall Square event` },
  'waltham':   { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Private hibachi chef at a Waltham MA Route 128 corporate event` },
  'weston':    { src: '/pics/hibachi-chef-at-home.jpg',   alt: (city) => `Private hibachi chef at a Weston MA estate event` },
  'lexington': { src: '/pics/hibachi-austin-home.jpg',    alt: (city) => `Private hibachi chef at a Lexington MA family event` },
  'needham':   { src: '/pics/hibachi-miami.jpg',          alt: (city) => `Private hibachi chef at a Needham MA event` },
  // Batch 3 — North Shore & South Shore
  'marblehead':   { src: '/pics/hibachi-colorado.jpg',    alt: (city) => `Private hibachi chef at a Marblehead MA harborfront estate` },
  'newburyport':  { src: '/pics/traveling-hibachi.jpg',   alt: (city) => `Private hibachi chef at a Newburyport MA waterfront event` },
  'hingham':      { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Private hibachi chef at a Hingham MA family event` },
  'cohasset':     { src: '/pics/hibachi-home-austin.jpg', alt: (city) => `Private hibachi chef at a Cohasset MA coastal estate` },
  // Batch 4 — Cape Cod & Western Massachusetts
  'hyannis':      { src: '/pics/mobile-hibachi.jpg',        alt: (city) => `Mobile hibachi chef at a Hyannis MA vacation rental` },
  'chatham':      { src: '/pics/hibachi-to-you-2.jpg',      alt: (city) => `Mobile hibachi chef at a Chatham MA beach house` },
  'falmouth':     { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Mobile hibachi chef at a Falmouth MA vacation rental` },
  'northampton':  { src: '/pics/hibachi-catering-austin.jpg', alt: (city) => `Private hibachi chef at a Northampton MA college-town event` },
  'amherst':      { src: '/pics/hibachi-austin.jpg',        alt: (city) => `Private hibachi chef at an Amherst MA UMass graduation event` },
}

// ── Support images for profileIdx cities (Batch 1) ────────────────────────────
const MA_SUPPORT_IMAGES = {
  'boston': {
    testimonial: {
      src:        '/pics/private-event-4.jpg',
      alt:        (city) => `Executive hibachi dinner in Boston, MA`,
      caption:    'Boston executive private dining',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `Boston hosts expect the exceptional — and our private hibachi chefs deliver it at every event. Back Bay rooftop dinners, Beacon Hill townhouse entertaining, Seaport waterfront events, and South End and North End backyard gatherings are our specialty. See what Boston hosts have discovered:`,
    },
    cta: {
      src:     '/pics/hibachi-pic-2.jpg',
      alt:     (city) => `Private hibachi chef setting up at a Boston MA home`,
      caption: 'Boston\'s private dining standard',
    },
  },
  'brookline': {
    testimonial: {
      src:        '/pics/hibachi-photo-1.jpg',
      alt:        (city) => `Private hibachi dinner in Brookline, MA`,
      caption:    'Brookline private dining',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Brookline's Coolidge Corner families and Longwood Medical Area physicians and researchers choose private hibachi for milestone dinners, anniversary celebrations, and family gatherings. Our chefs bring the full teppanyaki experience to your door. See what Brookline hosts have found:`,
    },
    cta: {
      src:     '/pics/private-chef-2.jpg',
      alt:     (city) => `Private hibachi chef in Brookline, MA`,
      caption: 'Brookline\'s private dining standard',
    },
  },
  'newton': {
    testimonial: {
      src:        '/pics/hibachi-pic-4.jpg',
      alt:        (city) => `Graduation hibachi party in Newton, MA`,
      caption:    'Newton family & graduation season',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Newton families across Chestnut Hill, Newton Centre, Newton Highlands, and Auburndale choose private hibachi when a backyard birthday or graduation party needs to rise above the ordinary. Hibachi at home consistently outperforms every restaurant reservation in the area. See what Newton hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Newton, MA`,
      caption: 'Newton\'s backyard dinner standard',
    },
  },
  'wellesley': {
    testimonial: {
      src:        '/pics/hibachi-chef-2.jpg',
      alt:        (city) => `Estate hibachi dinner in Wellesley, MA`,
      caption:    'Wellesley estate private dining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Wellesley's estate homeowners and Wellesley College families choose private hibachi for anniversary dinners, milestone celebrations, and college-weekend entertaining. Our chefs bring the full setup to your door. See what Wellesley hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-colorado-home.jpg',
      alt:     (city) => `Private hibachi chef in Wellesley, MA`,
      caption: 'Wellesley\'s private dining standard',
    },
  },
  // Batch 2 — MetroWest & Cambridge Biotech Corridor
  'cambridge': {
    testimonial: {
      src:        '/pics/hibachi-austin-3.jpg',
      alt:        (city) => `Kendall Square hibachi dinner in Cambridge, MA`,
      caption:    'Cambridge biotech corridor dining',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Cambridge's Kendall Square biotech companies, Harvard and MIT faculty, and Central Square residents choose private hibachi for corporate team dinners, lab celebrations, and milestone events. Our chefs bring the full teppanyaki experience to your office campus or Charles River-adjacent home. See what Cambridge hosts and teams are saying:`,
    },
    cta: {
      src:     '/pics/private-party-chef-6.jpg',
      alt:     (city) => `Private hibachi chef in Cambridge, MA`,
      caption: 'Cambridge\'s corporate dinner standard',
    },
  },
  'waltham': {
    testimonial: {
      src:        '/pics/hibachi-dallas-home.jpg',
      alt:        (city) => `Route 128 corporate hibachi event in Waltham, MA`,
      caption:    'Waltham biotech corridor dining',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Waltham's Route 128 "Biotech Row" companies and Brandeis University community choose private hibachi for corporate team dinners and client entertainment. Our chefs bring the full setup to your campus or Charles River-adjacent property. See what Waltham teams are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-2.jpg',
      alt:     (city) => `Private hibachi chef in Waltham, MA`,
      caption: 'Waltham\'s corporate dinner standard',
    },
  },
  'weston': {
    testimonial: {
      src:        '/pics/hibachi-texas-home.jpg',
      alt:        (city) => `Estate hibachi dinner in Weston, MA`,
      caption:    'Weston estate private dining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Weston's estate homeowners — among the highest household incomes in Massachusetts — choose private hibachi for milestone dinners and executive private entertaining. Our chefs bring the full setup to your property. See what Weston hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-dallas-2.jpg',
      alt:     (city) => `Private hibachi chef in Weston, MA`,
      caption: 'Weston\'s private dining standard',
    },
  },
  'lexington': {
    testimonial: {
      src:        '/pics/hibachi-raleigh.jpg',
      alt:        (city) => `Graduation hibachi party in Lexington, MA`,
      caption:    'Lexington family & graduation season',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Lexington families near the Battle Green and Minuteman corridor choose private hibachi when a backyard birthday or graduation party needs to rise above the ordinary. See what Lexington hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-philadelphia.jpg',
      alt:     (city) => `Private hibachi chef in Lexington, MA`,
      caption: 'Lexington\'s backyard dinner standard',
    },
  },
  'needham': {
    testimonial: {
      src:        '/pics/hibachi-wilmington.jpg',
      alt:        (city) => `Corporate hibachi event in Needham, MA`,
      caption:    'Needham corporate & family dining',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Needham's corporate professionals and affluent family community choose private hibachi for team dinners, client events, and backyard milestone celebrations. See what Needham hosts and teams are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-dallas-tyler.jpg',
      alt:     (city) => `Private hibachi chef in Needham, MA`,
      caption: 'Needham\'s corporate dinner standard',
    },
  },
  // Batch 3 — North Shore & South Shore
  'marblehead': {
    testimonial: {
      src:        '/pics/hibachi-texas-home-2.jpg',
      alt:        (city) => `Harborfront hibachi dinner in Marblehead, MA`,
      caption:    'Marblehead harbor estate dining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Marblehead's harborfront estate owners and sailing community choose private hibachi for waterfront dinners, wedding-weekend welcome events, and milestone celebrations. See what Marblehead hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-home-2.jpg',
      alt:     (city) => `Private hibachi chef in Marblehead, MA`,
      caption: 'Marblehead\'s waterfront dining standard',
    },
  },
  'newburyport': {
    testimonial: {
      src:        '/pics/hibachi-austin-home-3.jpg',
      alt:        (city) => `Waterfront hibachi event in Newburyport, MA`,
      caption:    'Newburyport waterfront dining',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Newburyport's historic downtown and Merrimack River waterfront properties choose private hibachi for wedding-weekend dinners and family celebrations. See what Newburyport hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-dallas-tyler-2.jpg',
      alt:     (city) => `Private hibachi chef in Newburyport, MA`,
      caption: 'Newburyport\'s waterfront dining standard',
    },
  },
  'hingham': {
    testimonial: {
      src:        '/pics/hibachi-at-home.jpg',
      alt:        (city) => `Backyard hibachi party in Hingham, MA`,
      caption:    'Hingham family celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Hingham families near the harbor and commuter rail corridor choose private hibachi for birthday parties, graduation dinners, and neighborhood milestones. See what Hingham hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-at-home-austin.jpg',
      alt:     (city) => `Private hibachi chef in Hingham, MA`,
      caption: 'Hingham\'s backyard dinner standard',
    },
  },
  'cohasset': {
    testimonial: {
      src:        '/pics/hibachi-shot-1.jpg',
      alt:        (city) => `Coastal estate hibachi dinner in Cohasset, MA`,
      caption:    'Cohasset coastal estate dining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Cohasset's small, exclusive coastal estate community chooses private hibachi for intimate anniversary dinners and discreet milestone celebrations. See what Cohasset hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-shot-2.jpg',
      alt:     (city) => `Private hibachi chef in Cohasset, MA`,
      caption: 'Cohasset\'s private dining standard',
    },
  },
  // Batch 4 — Cape Cod & Western Massachusetts
  'hyannis': {
    testimonial: {
      src:        '/pics/mobile-hibachi-2.jpg',
      alt:        (city) => `Vacation rental hibachi event in Hyannis, MA`,
      caption:    'Hyannis vacation rental dining',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `Hyannis's vacation rental guests and Hyannis Port-adjacent families choose mobile hibachi for the dinner that anchors a Cape Cod trip. See what Hyannis guests are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-to-you.jpg',
      alt:     (city) => `Mobile hibachi chef in Hyannis, MA`,
      caption: 'Hyannis\'s vacation dining standard',
    },
  },
  'chatham': {
    testimonial: {
      src:        '/pics/hibachi-in-garage.jpg',
      alt:        (city) => `Beach house hibachi event in Chatham, MA`,
      caption:    'Chatham beach house dining',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `Chatham's upscale beach house rentals and Nantucket Sound-facing properties choose mobile hibachi for the dinner that caps off a day at the beach. See what Chatham guests are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-hart.jpg',
      alt:     (city) => `Mobile hibachi chef in Chatham, MA`,
      caption: 'Chatham\'s beach house dining standard',
    },
  },
  'falmouth': {
    testimonial: {
      src:        '/pics/hibachi-pic-62.jpg',
      alt:        (city) => `Family vacation hibachi event in Falmouth, MA`,
      caption:    'Falmouth family vacation dining',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `Falmouth's family vacation rentals and Woods Hole research community choose mobile hibachi for summer group dinners. See what Falmouth guests are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-pic-32.jpg',
      alt:     (city) => `Mobile hibachi chef in Falmouth, MA`,
      caption: 'Falmouth\'s family vacation dining standard',
    },
  },
  'northampton': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `College town hibachi event in Northampton, MA`,
      caption:    'Northampton college town dining',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Northampton's Smith College families and downtown arts community choose private hibachi for family weekend dinners and milestone celebrations. See what Northampton hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-dallas.jpg',
      alt:     (city) => `Private hibachi chef in Northampton, MA`,
      caption: 'Northampton\'s celebration dining standard',
    },
  },
  'amherst': {
    testimonial: {
      src:        '/pics/hibachi-photo-2.jpg',
      alt:        (city) => `UMass graduation hibachi party in Amherst, MA`,
      caption:    'Amherst UMass graduation season',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Amherst's UMass Amherst graduation families and Five College community choose private hibachi when every restaurant in the Pioneer Valley is booked solid for graduation weekend. See what Amherst hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-3.jpg',
      alt:     (city) => `Private hibachi chef in Amherst, MA`,
      caption: 'Amherst\'s graduation dinner standard',
    },
  },
}

// ── Support fallback images (per theme, used when a city has no explicit entry) ─
const MA_SUPPORT_FALLBACKS = [
  { testimonial: { src: '/pics/hibachi-pic-32.jpg',   alt: (city) => `Private hibachi event in ${city}, MA`, caption: 'Greater Boston private dining', trustBadge: 'Trusted by Local Families', intro: (city) => `${city} hosts choose private hibachi for executive dinners and milestone celebrations. See what local hosts are saying:` }, cta: { src: '/pics/hibachi-pic-62.jpg', alt: (city) => `Private hibachi chef in ${city}, MA`, caption: 'The Greater Boston standard' } },
  { testimonial: { src: '/pics/hibachi-shot-1.jpg',   alt: (city) => `Backyard hibachi party in ${city}, MA`, caption: 'MetroWest family celebrations', trustBadge: 'Trusted by Local Families', intro: (city) => `${city} families choose private hibachi for graduation parties and backyard milestones. See what local hosts are saying:` }, cta: { src: '/pics/hibachi-shot-2.jpg', alt: (city) => `Private hibachi chef in ${city}, MA`, caption: 'The MetroWest backyard standard' } },
  { testimonial: { src: '/pics/hibachi-to-you.jpg',   alt: (city) => `Waterfront hibachi event in ${city}, MA`, caption: 'North Shore waterfront dining', trustBadge: 'Five-Star Entertainment & Dining', intro: (city) => `${city} hosts choose private hibachi for wedding weekends and waterfront celebrations. See what guests are saying:` }, cta: { src: '/pics/hibachi-to-you-2.jpg', alt: (city) => `Private hibachi chef in ${city}, MA`, caption: 'The North Shore private dining standard' } },
  { testimonial: { src: '/pics/mobile-hibachi.jpg',   alt: (city) => `Vacation rental hibachi event in ${city}, MA`, caption: 'South Shore & Cape Cod vacation dining', trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `${city} guests choose private hibachi for family reunions and beach house trip dinners. See what guests are saying:` }, cta: { src: '/pics/mobile-hibachi-2.jpg', alt: (city) => `Private hibachi chef in ${city}, MA`, caption: 'The South Shore & Cape Cod vacation standard' } },
  { testimonial: { src: '/pics/hibachi-in-garage.jpg', alt: (city) => `College town hibachi event in ${city}, MA`, caption: 'Western Massachusetts celebration dining', trustBadge: 'Trusted by Local Families', intro: (city) => `${city} hosts choose private hibachi for graduation parties and destination wedding events. See what guests are saying:` }, cta: { src: '/pics/hibachi-hart.jpg', alt: (city) => `Private hibachi chef in ${city}, MA`, caption: 'The Western Massachusetts celebration standard' } },
]

// ── Major cities map (all 18 MA cities) ────────────────────────────────────────
// profileIdx assigned by build order, not theme grouping (see header note).
const MA_MAJOR_CITIES = {
  // ── Theme 0 — Greater Boston ────────────────────────────────────────────────
  'boston':      { v: 0, profileIdx: 0, nearby: ['Cambridge','Brookline','Newton','Somerville','Quincy','Waltham'] },
  'brookline':   { v: 0, profileIdx: 1, nearby: ['Boston','Newton','Cambridge','Wellesley'] },
  'newton':      { v: 0, profileIdx: 2, nearby: ['Brookline','Wellesley','Waltham','Needham','Natick'] },
  'wellesley':   { v: 0, profileIdx: 3, nearby: ['Newton','Natick','Weston','Needham'] },
  'cambridge':   { v: 0, profileIdx: 4, nearby: ['Boston','Somerville','Watertown','Arlington','Belmont'] },
  // ── Theme 1 — MetroWest ──────────────────────────────────────────────────────
  'waltham':     { v: 1, profileIdx: 5, nearby: ['Cambridge','Newton','Watertown','Lexington','Belmont'] },
  'weston':      { v: 1, profileIdx: 6, nearby: ['Wellesley','Lincoln','Wayland','Natick'] },
  'lexington':   { v: 1, profileIdx: 7, nearby: ['Concord','Arlington','Belmont','Bedford','Winchester'] },
  'needham':     { v: 1, profileIdx: 8, nearby: ['Newton','Wellesley','Dedham','Dover'] },
  // ── Theme 2 — North Shore ────────────────────────────────────────────────────
  'marblehead':  { v: 2, profileIdx: 9,  nearby: ['Salem','Swampscott','Beverly','Lynn'] },
  'newburyport': { v: 2, profileIdx: 10, nearby: ['Amesbury','Newbury','Salisbury','Ipswich'] },
  // ── Theme 3 — South Shore & Cape Cod ─────────────────────────────────────────
  'hingham':     { v: 3, profileIdx: 11, nearby: ['Cohasset','Hull','Norwell','Weymouth'] },
  'cohasset':    { v: 3, profileIdx: 12, nearby: ['Hingham','Scituate','Norwell'] },
  'hyannis':     { v: 3, profileIdx: 13, nearby: ['Yarmouth','Dennis','Sandwich','Mashpee'] },
  'chatham':     { v: 3, profileIdx: 14, nearby: ['Harwich','Orleans','Brewster'] },
  'falmouth':    { v: 3, profileIdx: 15, nearby: ['Mashpee','Bourne','Sandwich'] },
  // ── Theme 4 — Western Massachusetts ──────────────────────────────────────────
  'northampton': { v: 4, profileIdx: 16, nearby: ['Amherst','Hadley','Easthampton','South Hadley'] },
  'amherst':     { v: 4, profileIdx: 17, nearby: ['Northampton','Hadley','South Hadley','Belchertown'] },
}

// ── Display name overrides ────────────────────────────────────────────────────
const MA_CITY_DISPLAY_NAMES = {}

// ── Nearby major cities by theme (only link to pages that exist) ───────────
const MA_NEARBY_MAJOR = [
  ['Boston', 'Cambridge', 'Brookline', 'Newton', 'Wellesley'],   // v=0 Greater Boston
  ['Waltham', 'Weston', 'Lexington', 'Needham'],                  // v=1 MetroWest
  ['Marblehead', 'Newburyport'],                                  // v=2 North Shore
  ['Hingham', 'Cohasset', 'Hyannis', 'Chatham', 'Falmouth'],      // v=3 South Shore & Cape Cod
  ['Northampton', 'Amherst'],                                     // v=4 Western Massachusetts
]

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const MA_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in', // 0 — Boston
  'Hibachi at Home in',      // 1 — Brookline
  'Hibachi at Home in',      // 2 — Newton
  'Private Hibachi Chef in', // 3 — Wellesley
  'Hibachi Catering in',     // 4 — Cambridge
  'Hibachi Catering in',     // 5 — Waltham
  'Private Hibachi Chef in', // 6 — Weston
  'Hibachi at Home in',      // 7 — Lexington
  'Hibachi Catering in',     // 8 — Needham
  'Hibachi at Home in',      // 9 — Marblehead
  'Hibachi at Home in',      // 10 — Newburyport
  'Backyard Hibachi in',     // 11 — Hingham
  'Private Hibachi Chef in', // 12 — Cohasset
  'Mobile Hibachi in',       // 13 — Hyannis
  'Mobile Hibachi in',       // 14 — Chatham
  'Mobile Hibachi in',       // 15 — Falmouth
  'Hibachi at Home in',      // 16 — Northampton
  'Hibachi at Home in',      // 17 — Amherst
]

const MA_THEME_H1_PREFIXES = [
  'Private Hibachi Chef in', // v=0 Greater Boston generic
  'Hibachi at Home in',      // v=1 MetroWest generic
  'Hibachi at Home in',      // v=2 North Shore generic
  'Mobile Hibachi in',       // v=3 South Shore & Cape Cod generic
  'Hibachi at Home in',      // v=4 Western Massachusetts generic
]

// ── Custom meta overrides ──────────────────────────────────────────────────────
const MA_CUSTOM_META = {
  'boston': {
    title: 'Private Hibachi Chef in Boston, MA | Executive & Corporate Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Boston, MA for executive dinners, corporate team events, and milestone celebrations. Back Bay, Beacon Hill, Seaport. Full setup & cleanup. From $60/adult.',
  },
  'wellesley': {
    title: 'Private Hibachi Chef in Wellesley, MA | Estate & Executive Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Wellesley, MA for estate dinners and milestone celebrations. Premium protein upgrades. Full setup & cleanup. From $60/adult.',
  },
  'cambridge': {
    title: 'Hibachi Catering in Cambridge, MA | Harvard, MIT & Kendall Square Events | Hibachi Connect',
    desc:  'Book hibachi catering for your Cambridge corporate team dinner, lab celebration, or private gathering. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'weston': {
    title: 'Private Hibachi Chef in Weston, MA | Estate Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Weston, MA for estate dinners and milestone celebrations. Premium protein upgrades. Full setup & cleanup. From $60/adult.',
  },
  'marblehead': {
    title: 'Hibachi at Home in Marblehead, MA | Waterfront Estate & Wedding Weekend Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Marblehead, MA for harborfront estate dinners, wedding welcome dinners, and milestone celebrations. Full setup & cleanup. From $60/adult.',
  },
  'hyannis': {
    title: 'Mobile Hibachi Chef in Hyannis, MA | Cape Cod Vacation Rental Dining | Hibachi Connect',
    desc:  'Book a mobile hibachi chef in Hyannis, MA for vacation rental group dinners and family reunions on Cape Cod. Self-contained setup. From $60/adult.',
  },
  'chatham': {
    title: 'Mobile Hibachi Chef in Chatham, MA | Beach House Vacation Dining | Hibachi Connect',
    desc:  'Book a mobile hibachi chef in Chatham, MA for beach house group dinners and bachelorette weekends on Cape Cod. Self-contained setup. From $60/adult.',
  },
  'amherst': {
    title: 'Hibachi at Home in Amherst, MA | UMass Graduation & Family Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Amherst, MA for UMass graduation parties and family celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
}

// ── Main builder ──────────────────────────────────────────────────────────────
export function getMassachusettsCityData(citySlug, cityName) {
  const major       = MA_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getMAVariantIndex(citySlug)
  const theme       = MA_IMAGE_THEMES[v]
  const displayName = MA_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Massachusetts',
    stateAbbr:    'MA',
    stateSlug:    'massachusetts',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: MA_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: MA_NEARBY_MAJOR[v],
    localHighlights:   MA_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: MA_OCCASIONS[v],
    faqSet:            MA_FAQ_SETS[v](displayName),
    testimonials:      MA_TESTIMONIALS[v],
    // INTRO_VARIANTS: 393–397 = MA generic, 398–415 = MA city-specific (398–401 live, Batch 1)
    uniqueIntroVariant:  (major?.profileIdx != null) ? 398 + major.profileIdx : 393 + v,
    uniqueWhyUsVariant:  v % 5,
    // CLOSING_VARIANTS: 393–397 = MA generic, 398–415 = MA city-specific (398–401 live, Batch 1)
    uniqueClosingVariant: (major?.profileIdx != null) ? 398 + major.profileIdx : 393 + v,
    // H1 prefix for CityHero
    heroH1Prefix: (major?.profileIdx != null && MA_PROFILE_H1_PREFIXES[major.profileIdx])
      ? MA_PROFILE_H1_PREFIXES[major.profileIdx]
      : MA_THEME_H1_PREFIXES[v],
    // Custom meta overrides
    ...(MA_CUSTOM_META[citySlug]
      ? { metaTitle: MA_CUSTOM_META[citySlug].title, metaDescription: MA_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getMaHowItWorks(citySlug) {
  const major = MA_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMAVariantIndex(citySlug)
  return MA_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getMaSectionVariant(citySlug) {
  const major = MA_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMAVariantIndex(citySlug)
  return MA_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getMaCityImage(citySlug) {
  return MA_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getMaSupportImages(citySlug, variantIdx) {
  if (MA_SUPPORT_IMAGES[citySlug]) return MA_SUPPORT_IMAGES[citySlug]
  const major = MA_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMAVariantIndex(citySlug)
  return MA_SUPPORT_FALLBACKS[v]
}

// ── Blog posts (theme arrays × 3 posts; v%3 dispatch — see getMaBlogPosts) ────
// `private-hibachi-cape-cod-vacation-rental` is intentionally NOT featured here — its
// natural slot (index 0) is shared with Theme 0 (Greater Boston / Boston, Cambridge,
// Newton...), where a Cape Cod vacation-rental post would be a geographic mismatch.
// Still fully live and linked from the state guide and the North Shore guide.
const MA_BLOG_POSTS = [
  // Theme 0 — Greater Boston (variant 0; also serves Theme 3 South Shore & Cape Cod)
  [
    { slug: 'hibachi-at-home-massachusetts-guide',  title: 'Private Hibachi Chef in Massachusetts: The Complete Guide to All Five Markets', excerpt: 'From Boston executive dinners to Cape Cod vacation rentals — how private hibachi works across Massachusetts.', date: '2026-07-26' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                             excerpt: 'A full pricing breakdown for Greater Boston hibachi events — what\'s included and premium protein options.', date: '2025-01-15' },
    { slug: 'hibachi-catering-corporate-events',    title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',            excerpt: 'Biotech and university teams in Boston and Cambridge — why a private hibachi chef beats every corporate dinner format.', date: '2025-03-15' },
  ],
  // Theme 1 — MetroWest (variant 1; also serves Theme 4 Western Massachusetts)
  [
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',              excerpt: 'Everything MetroWest hosts need before the private hibachi chef arrives.', date: '2025-02-28' },
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',           excerpt: 'Weston, Lexington, and Needham families — how to plan a backyard hibachi party that outclasses any MetroWest restaurant.', date: '2025-04-08' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',            excerpt: 'A first-timer\'s guide for Massachusetts hosts — what happens from booking to cleanup at a private hibachi event.', date: '2024-11-20' },
  ],
  // Theme 2 — North Shore (variant 2)
  [
    { slug: 'private-hibachi-north-shore-wedding-weekend', title: 'Private Hibachi Chef for a North Shore Wedding Weekend',           excerpt: 'Waterfront welcome dinners and rehearsal dinners in Marblehead and Newburyport — how to book a private hibachi chef for the night before the ceremony.', date: '2026-07-26' },
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',            excerpt: 'Why North Shore wedding weekends are choosing private hibachi at the waterfront rental the night before the ceremony.', date: '2025-02-10' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                             excerpt: 'A full pricing breakdown for North Shore hibachi events — what\'s included and premium options.', date: '2025-01-15' },
  ],
]

export function getMaBlogPosts(variant, count) {
  return MA_BLOG_POSTS[variant % MA_BLOG_POSTS.length].slice(0, count)
}

// ── City-specific intros (MA city-specific, profileIdx 0–17, all 18 live) ─────
export const MA_CITY_INTROS = [
  // 398 — Boston (profileIdx 0)
  {
    headline: () => `Private Hibachi Chef in Boston`,
    opening:  () =>
      `Boston runs on a rare mix of Fortune 500 headquarters, world-class biotech and healthcare institutions, and a university population that fills the city every graduation season. Back Bay's brownstone rooftops, Beacon Hill's historic townhouses, the Seaport's waterfront high-rises, and the backyard gardens of the South End and North End all host the kind of dinner that a restaurant reservation simply can't match. Private hibachi at your Boston property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance calibrated for the city's highest standard of private entertaining. Executive team dinners, university graduation parties, and milestone celebrations are our most common Boston bookings.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — including filet mignon, lobster tail, and wagyu upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your rooftop, patio, or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For Boston gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Boston events book 2–4 weeks ahead — spring graduation season and summer fill fastest as the city's entertaining calendar peaks. Serving Boston and all of Greater Boston — Cambridge, Brookline, Newton, Somerville, and surrounding Suffolk and Middlesex County communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 399 — Brookline (profileIdx 1)
  {
    headline: () => `Hibachi at Home in Brookline`,
    opening:  () =>
      `Brookline sits directly against Boston's western edge — a dense, walkable town of Coolidge Corner triple-deckers, Longwood Medical Area physicians and researchers, and some of the highest-achieving public schools in Massachusetts. Hibachi at home in Brookline brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that gives any Brookline gathering its defining moment — a birthday dinner off Harvard Street, a milestone anniversary near the Reservoir, or a family celebration in one of Brookline's tightly packed but fiercely loved backyards. Minutes from Boston, Brookline hosts have high standards. Our chefs match them.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Brookline events over 25, we bring dual stations. Full cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Brookline weekend events and milestone dinners book 2–3 weeks ahead — spring and early summer fill fastest. Serving Brookline and all of Greater Boston — Boston, Newton, Cambridge, Wellesley, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 400 — Newton (profileIdx 2)
  {
    headline: () => `Hibachi at Home in Newton`,
    opening:  () =>
      `Newton is thirteen villages in one city — the Boston College-adjacent estates of Chestnut Hill, the walkable village center of Newton Centre, the family neighborhoods of Newton Highlands, and the riverside streets of Auburndale, all part of one of the wealthiest and best-schooled communities in Massachusetts. Hibachi at home in Newton brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance built for the kind of crowd that shows up at a Newton graduation party — families driving in from across New England, generations gathered on a backyard lawn, everyone wanting the same thing: a dinner they'll be referencing when the next occasion comes up.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Newton graduation events over 25, we bring dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Newton graduation season (May–June) and summer weekends book 2–3 weeks ahead — reserve 3–4 weeks ahead for those dates. Serving Newton and all of Greater Boston — Brookline, Wellesley, Waltham, Needham, Natick, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 401 — Wellesley (profileIdx 3)
  {
    headline: () => `Private Hibachi Chef in Wellesley`,
    opening:  () =>
      `Wellesley is home to Wellesley College and some of the highest household incomes in Massachusetts — a town of grand estate properties along Washington Street, Lake Waban's shoreline, and a downtown built around the college's ivy-covered quads. Private hibachi at your Wellesley property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance calibrated for the town's highest standard of private entertaining. Alumnae weekend dinners, estate anniversary celebrations, and milestone gatherings are our most common Wellesley bookings — the evening Wellesley hosts remember is the one that happened on their own terrace, not the same restaurant reservation everyone else made.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and wagyu upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, rear patio, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For Wellesley estate gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Wellesley estate events book 3–4 weeks ahead — spring and college-weekend dates fill fastest. Serving Wellesley and all of Greater Boston — Newton, Natick, Weston, Needham, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 402 — Cambridge (profileIdx 4)
  {
    headline: () => `Hibachi Catering in Cambridge`,
    opening:  () =>
      `Cambridge is Harvard and MIT, and Cambridge is Kendall Square — the densest concentration of biotech and life-sciences companies on the planet, where Moderna, Biogen, and dozens of research labs sit blocks from Harvard Yard and MIT's Killian Court. Central Square's diverse restaurant scene and the Charles River's rowing culture round out a city that runs on brilliance and long hours in equal measure. Hibachi catering in Cambridge brings a certified teppanyaki chef to your lab campus, faculty home, or Charles River-adjacent property with the full setup and a live performance that turns any corporate team dinner or research group celebration into something your colleagues are still talking about the following quarter.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, courtyard, or corporate outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Cambridge corporate events over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Cambridge corporate and weekend events book 2–4 weeks ahead — spring and early summer fill fastest along the Kendall Square corridor. Serving Cambridge and all of Greater Boston — Boston, Somerville, Watertown, Arlington, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 403 — Waltham (profileIdx 5)
  {
    headline: () => `Hibachi Catering in Waltham`,
    opening:  () =>
      `Waltham anchors Route 128 — the highway corridor nicknamed "America's Technology Highway" and, more recently, Biotech Row, where pharmaceutical and life-sciences campuses line the road minutes from Brandeis University and the Moody Street restaurant district. Hibachi catering in Waltham brings a certified teppanyaki chef to your corporate campus, Charles River-adjacent property, or suburban backyard with the full setup and a live performance that elevates any team dinner or private celebration into something your guests are still talking about the following quarter.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, backyard, or corporate outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Waltham corporate events over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Waltham corporate and weekend events book 2–4 weeks ahead — spring and early summer fill fastest along Route 128. Serving Waltham and all of Greater Boston — Cambridge, Newton, Watertown, Lexington, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 404 — Weston (profileIdx 6)
  {
    headline: () => `Private Hibachi Chef in Weston`,
    opening:  () =>
      `Weston is one of the wealthiest towns in Massachusetts and the country — large estate lots along winding, unlit roads, a golf club that has anchored the town's social calendar for a century, and a household income that ranks among the highest in New England. Private hibachi at your Weston property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance calibrated for the town's highest standard of private entertaining. The evening Weston hosts remember is the one that happened on their own grounds — not the same restaurant reservation everyone else made.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and wagyu upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, rear patio, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For Weston estate gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Weston estate events book 3–4 weeks ahead — spring through summer fills fastest. Serving Weston and all of MetroWest — Wellesley, Lincoln, Wayland, Natick, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 405 — Lexington (profileIdx 7)
  {
    headline: () => `Hibachi at Home in Lexington`,
    opening:  () =>
      `Lexington is where the American Revolution began — the Battle Green, the Minuteman statue, and a town that has built one of the strongest public school systems in the country on top of that history. High-income families along Massachusetts Avenue and the neighborhoods surrounding the Battle Green celebrate milestones with the same seriousness they bring to everything else. Hibachi at home in Lexington brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance built for the kind of crowd that shows up at a Lexington graduation party — families driving in from across New England, generations gathered on a backyard lawn, everyone wanting the same thing: a dinner they'll be referencing when the next occasion comes up.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Lexington graduation events over 25, we bring dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Lexington graduation season (May–June) and summer weekends book 2–3 weeks ahead — reserve 3–4 weeks ahead for those dates. Serving Lexington and all of MetroWest — Concord, Arlington, Belmont, Bedford, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 406 — Needham (profileIdx 8)
  {
    headline: () => `Hibachi Catering in Needham`,
    opening:  () =>
      `Needham sits along the Charles River between Newton and Wellesley — a corporate and family town anchored by Needham Heights' business district and home to companies including TripAdvisor, alongside some of the top-ranked public schools in Massachusetts. Hibachi catering in Needham brings a certified teppanyaki chef to your corporate office park, riverside property, or suburban backyard with the full setup and a live performance that elevates any team dinner, client event, or family milestone into something your guests are still talking about the following quarter.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, backyard, or corporate outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Needham events over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Needham corporate and weekend events book 2–4 weeks ahead — spring and early summer fill fastest. Serving Needham and all of MetroWest — Newton, Wellesley, Dedham, Dover, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 407 — Marblehead (profileIdx 9)
  {
    headline: () => `Hibachi at Home in Marblehead`,
    opening:  () =>
      `Marblehead is New England's sailing capital — Marblehead Harbor filled with moorings every summer weekend, the historic Old Town's narrow colonial streets, and waterfront estates that have made this one of the highest household-income towns on the North Shore. Hibachi at home in Marblehead brings a certified teppanyaki chef to your harborfront property with the full setup and a live-fire cooking performance that gives any Marblehead gathering — wedding-weekend welcome dinner, milestone anniversary, yacht club celebration — a centerpiece that matches the setting. Your guests watch the sunset over the harbor while the chef performs on your terrace.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your waterfront terrace, patio, or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Marblehead gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Marblehead wedding-season and summer events book 3–4 weeks ahead. Serving Marblehead and the North Shore — Salem, Swampscott, Beverly, Lynn, and surrounding Essex County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 408 — Newburyport (profileIdx 10)
  {
    headline: () => `Hibachi at Home in Newburyport`,
    opening:  () =>
      `Newburyport sits where the Merrimack River meets the Atlantic — a compact, historic downtown of Federal-era brick buildings, a boutique-lined High Street, and waterfront properties that draw visitors and residents in equal measure. Plum Island's barrier beach and Crane Beach are both minutes away, making this one of the North Shore's most popular wedding-weekend destinations. Hibachi at home in Newburyport brings a certified teppanyaki chef to your waterfront property with the full setup and a live-fire cooking performance that gives any Newburyport wedding weekend or family celebration a centerpiece that matches the setting.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your waterfront patio, deck, or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Newburyport gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Newburyport wedding-season and summer events book 3–4 weeks ahead. Serving Newburyport and the North Shore — Amesbury, Newbury, Salisbury, Ipswich, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 409 — Hingham (profileIdx 11)
  {
    headline: () => `Backyard Hibachi in Hingham`,
    opening:  () =>
      `Hingham is the South Shore's most affluent commuter town — a harborfront community connected to Boston by ferry and commuter rail, with a historic Main Street once recognized as one of the most beautiful in America. Backyard hibachi in Hingham brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that gives any Hingham birthday party, graduation dinner, or neighborhood celebration a centerpiece no South Shore restaurant can match.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Hingham gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Hingham weekend events book 2–3 weeks ahead. Graduation season and summer Saturdays fill fastest. Serving Hingham and the South Shore — Cohasset, Hull, Norwell, Weymouth, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 410 — Cohasset (profileIdx 12)
  {
    headline: () => `Private Hibachi Chef in Cohasset`,
    opening:  () =>
      `Cohasset is the South Shore's smallest and most exclusive coastal enclave — a quiet harbor town of understated estates, Sandy Beach, and a household income that rivals any North Shore address. Private hibachi at your Cohasset property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance calibrated for the town's highest standard of private, discreet entertaining. The evening Cohasset hosts remember is the one that happened on their own terrace, not a restaurant reservation forty minutes away.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and wagyu upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, rear patio, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Cohasset estate events book 3–4 weeks ahead — spring through summer fills fastest. Serving Cohasset and the South Shore — Hingham, Scituate, Norwell, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 411 — Hyannis (profileIdx 13)
  {
    headline: () => `Mobile Hibachi in Hyannis`,
    opening:  () =>
      `Hyannis is Cape Cod's commercial heart — the ferry terminal that sends visitors to Nantucket and Martha's Vineyard, the Hyannis Port shoreline where the Kennedy Compound has drawn attention for generations, and a Main Street that anchors the entire mid-Cape region. Mobile hibachi in Hyannis brings a certified teppanyaki chef to your vacation rental with a fully self-contained setup and everything included — the grill, propane, proteins, and a live-fire performance that turns a day at the beach or a ferry-hopping trip into the best night of the vacation.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your rental patio or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan with Nantucket Sound minutes away. Full cleanup when dinner is done.`,
    closing:  () =>
      `Hyannis peak summer season books 2–3 weeks ahead. Serving Hyannis and all of Cape Cod — Yarmouth, Dennis, Sandwich, Mashpee, and surrounding Barnstable County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 412 — Chatham (profileIdx 14)
  {
    headline: () => `Mobile Hibachi in Chatham`,
    opening:  () =>
      `Chatham sits at the elbow of Cape Cod — the lighthouse-topped bluffs, the upscale Main Street shopping district, and beach houses facing Nantucket Sound that have made this one of the Cape's most desirable and expensive vacation markets. Mobile hibachi in Chatham brings a certified teppanyaki chef to your beach house with a fully self-contained setup and everything included — the grill, propane, proteins, and a live-fire performance that turns a day at Lighthouse Beach into the best night of the trip.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your rental patio or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Chatham group trips over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Chatham peak summer season books 2–3 weeks ahead. Serving Chatham and the Lower Cape — Harwich, Orleans, Brewster, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 413 — Falmouth (profileIdx 15)
  {
    headline: () => `Mobile Hibachi in Falmouth`,
    opening:  () =>
      `Falmouth is Cape Cod's family-vacation anchor — Woods Hole's oceanographic and marine biology institutions, the Shining Sea Bikeway along the coast, and the ferry terminal that sends day-trippers to Martha's Vineyard. Falmouth Heights and the town's dense summer-rental inventory make it one of the Cape's largest family vacation markets. Mobile hibachi in Falmouth brings a certified teppanyaki chef to your vacation rental with a fully self-contained setup and everything included — the grill, propane, proteins, and a live-fire performance built for a family reunion or multi-generational summer trip.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your rental patio or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Falmouth family reunions over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Falmouth peak summer season books 2–3 weeks ahead. Serving Falmouth and the Upper Cape — Mashpee, Bourne, Sandwich, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 414 — Northampton (profileIdx 16)
  {
    headline: () => `Hibachi at Home in Northampton`,
    opening:  () =>
      `Northampton is the Pioneer Valley's arts and culture anchor — Smith College's campus, a downtown of independent shops and restaurants that has earned the nickname "Paradise City," and a Five College community that fills the area with families every graduation and family-weekend season. Hibachi at home in Northampton brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that gives any Northampton family weekend, milestone celebration, or campus-adjacent gathering a centerpiece worthy of the occasion.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Northampton gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Northampton events book 2–3 weeks ahead — graduation season (May) and family weekends fill fastest. Serving Northampton and the Pioneer Valley — Amherst, Hadley, Easthampton, South Hadley, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 415 — Amherst (profileIdx 17)
  {
    headline: () => `Hibachi at Home in Amherst`,
    opening:  () =>
      `Amherst is UMass Amherst — the largest public university in New England, with nearly 24,000 undergraduates, alongside Amherst College and Hampshire College as part of the Five College consortium. Graduation season every May fills every restaurant in the Pioneer Valley for two weeks straight, and the town's family-weekend and move-in calendars draw visitors from across the country. Hibachi at home in Amherst brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that gives any Amherst graduation party or family celebration a centerpiece that no restaurant in the Five College area can match. When UMass graduation weekend has every venue booked solid, having the chef come to your backyard is the obvious answer.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Amherst graduation gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Amherst events book 2–3 weeks ahead — UMass graduation weekend (mid-May) requires 3–4 weeks' advance notice. Serving Amherst and the Pioneer Valley — Northampton, Hadley, South Hadley, Belchertown, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── Intro variants (MA generic 393–397, one per theme) ────────────────────────
export const MA_INTRO_VARIANTS = [
  // 393 — Greater Boston
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Executive Entertaining for Greater Boston`,
    opening:  (city, state) =>
      `${city} sits at the center of one of the country's most concentrated biotech, healthcare, and university corridors — Fortune 500 headquarters, teaching hospitals, and world-class research institutions all within a few miles of ${city}'s borders. Private hibachi at your ${city} property brings a certified teppanyaki chef to your outdoor space with the full setup, hand-selected premium proteins, and a live-fire performance that earns its place on any Greater Boston terrace. Executives, physicians, researchers, and university families all celebrate milestones here — and the dinner they remember is the one that happened at someone's home.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — including filet mignon, lobster tail, and wagyu upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, backyard, or patio. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} events book 2–4 weeks ahead — spring graduation season and summer fill fastest as Greater Boston's entertaining season peaks. Starting at $60 per adult, $600 event minimum. Premium protein packages available for any ${city} occasion. Most quotes confirmed same day.`,
  },
  // 394 — MetroWest
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for MetroWest`,
    opening:  (city, state) =>
      `${city} knows how to celebrate. The backyard culture here runs through graduation season in June, the birthday milestones that bring relatives in from across New England, and the summer evenings that finally feel right for an outdoor gathering. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup — propane grill, all proteins, and a live-fire cooking performance that turns any MetroWest backyard gathering into the evening your guests still reference at the next occasion.`,
    middle:   (city, state) =>
      `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for large graduations, family reunions, and corporate events are our most common format across MetroWest.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out during peak season. Graduation season (May–June) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 395 — North Shore
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Coastal Entertaining at Its Best`,
    opening:  (city, state) =>
      `${city} draws guests who know the difference between a good evening and an exceptional one — the harborfront estates, the historic sailing culture, the wedding weekends where the right dinner becomes the memory of the trip. Private hibachi at your ${city} property brings a certified teppanyaki chef to your outdoor space with hand-selected premium proteins and a live-fire performance that pairs as well with the North Shore's coastal light as it does with the setting itself.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, and premium upgrades available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, patio, or waterfront grounds. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your property is immaculate when the chef leaves.`,
    closing:  (city, state) =>
      `${city} events book 3–4 weeks ahead — summer wedding season fills fastest. Starting at $60 per adult, $600 event minimum. Premium protein packages available. Most quotes returned same day.`,
  },
  // 396 — South Shore & Cape Cod
  {
    headline: (city) => `Mobile Hibachi in ${city}: Vacation Rental & Beach House Dining`,
    opening:  (city, state) =>
      `${city} has always found a way to celebrate in the right setting — the beach house culture, the summer trips that bring three generations to the same rental, and the reunions that mark the season with the energy they deserve. Mobile hibachi in ${city} brings a certified teppanyaki chef to your vacation rental with a fully self-contained setup and a live-fire cooking performance that turns any gathering into the evening your guests are planning around when the next trip comes up.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large ${city} gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} peak summer season books 2–3 weeks ahead. Family reunions, bachelor and bachelorette weekends, and summer celebrations are our most common bookings. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 397 — Western Massachusetts
  {
    headline: (city) => `Hibachi at Home in ${city}: College Town Private Dining`,
    opening:  (city, state) =>
      `${city} has a rhythm built around its campus — graduation season every May, family weekends throughout the year, and a wedding season that fills the Pioneer Valley and Berkshires with visitors every summer. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any gathering in Western Massachusetts into the evening your guests are planning around when the next occasion comes up.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large ${city} gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks ahead. Graduation season (May) and wedding season fill fastest. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── City-specific closings (MA city-specific, profileIdx 0–17, all 18 live) ───
export const MA_CITY_CLOSINGS = [
  // 398 — Boston (profileIdx 0)
  {
    headline: (city) => `Boston's Private Dining Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Boston home or property. Filet mignon, lobster tail, premium proteins. Full setup, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `Boston spring and summer events book 2–4 weeks ahead. Reserve your evening now.`,
  },
  // 399 — Brookline (profileIdx 1)
  {
    headline: (city) => `Brookline's Private Dining Standard — Reserve Your Evening`,
    sub:      (city) => `A certified teppanyaki chef at your Brookline property — Coolidge Corner, Longwood, or the Reservoir. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Brookline weekend events book 2–3 weeks ahead. Reserve your evening now.`,
  },
  // 400 — Newton (profileIdx 2)
  {
    headline: (city) => `Newton's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Newton home, deck, or backyard — Chestnut Hill, Newton Centre, or Auburndale. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Newton graduation weekends (May–June) and summer Saturdays book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 401 — Wellesley (profileIdx 3)
  {
    headline: (city) => `Wellesley's Private Dining Standard — Reserve Your Evening`,
    sub:      (city) => `A certified teppanyaki chef at your Wellesley estate or property. Premium proteins available. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Wellesley estate events book 3–4 weeks ahead. Reserve your evening now.`,
  },
  // 402 — Cambridge (profileIdx 4)
  {
    headline: (city) => `Cambridge's Corporate Dinner Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef for your Cambridge team dinner or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Cambridge Kendall Square and weekend events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 403 — Waltham (profileIdx 5)
  {
    headline: (city) => `Waltham's Corporate Dinner Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef for your Waltham team dinner or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Waltham Route 128 and weekend events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 404 — Weston (profileIdx 6)
  {
    headline: (city) => `Weston's Private Dining Standard — Reserve Your Evening`,
    sub:      (city) => `A certified teppanyaki chef at your Weston estate or property. Premium proteins available. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Weston estate events book 3–4 weeks ahead. Reserve your evening now.`,
  },
  // 405 — Lexington (profileIdx 7)
  {
    headline: (city) => `Lexington's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Lexington home, deck, or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Lexington graduation weekends (May–June) and summer Saturdays book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 406 — Needham (profileIdx 8)
  {
    headline: (city) => `Needham's Corporate Dinner Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef for your Needham team dinner or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Needham corporate and weekend events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 407 — Marblehead (profileIdx 9)
  {
    headline: (city) => `Marblehead's Waterfront Dining Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Marblehead waterfront home or estate. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Marblehead wedding-season and summer events book 3–4 weeks ahead. Reserve your date now.`,
  },
  // 408 — Newburyport (profileIdx 10)
  {
    headline: (city) => `Newburyport's Waterfront Dining Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Newburyport waterfront home or property. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Newburyport wedding-season and summer events book 3–4 weeks ahead. Reserve your date now.`,
  },
  // 409 — Hingham (profileIdx 11)
  {
    headline: (city) => `Hingham's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Hingham home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Hingham graduation weekends and summer Saturdays book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 410 — Cohasset (profileIdx 12)
  {
    headline: (city) => `Cohasset's Private Dining Standard — Reserve Your Evening`,
    sub:      (city) => `A certified teppanyaki chef at your Cohasset estate or property. Premium proteins available. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Cohasset estate events book 3–4 weeks ahead. Reserve your evening now.`,
  },
  // 411 — Hyannis (profileIdx 13)
  {
    headline: (city) => `Hyannis's Best Vacation Dinner — Reserve Your Chef`,
    sub:      (city) => `A fully self-contained mobile hibachi chef at your Hyannis vacation rental. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Hyannis peak summer season books 2–3 weeks ahead. Confirm your date now.`,
  },
  // 412 — Chatham (profileIdx 14)
  {
    headline: (city) => `Chatham's Best Beach House Dinner — Reserve Your Chef`,
    sub:      (city) => `A fully self-contained mobile hibachi chef at your Chatham beach house. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Chatham peak summer season books 2–3 weeks ahead. Confirm your date now.`,
  },
  // 413 — Falmouth (profileIdx 15)
  {
    headline: (city) => `Falmouth's Best Family Vacation Dinner — Reserve Your Chef`,
    sub:      (city) => `A fully self-contained mobile hibachi chef at your Falmouth vacation rental. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Falmouth peak summer season books 2–3 weeks ahead. Confirm your date now.`,
  },
  // 414 — Northampton (profileIdx 16)
  {
    headline: (city) => `Northampton's Best Celebration Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Northampton home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Northampton graduation season and family weekends book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 415 — Amherst (profileIdx 17)
  {
    headline: (city) => `Amherst's Graduation Season Standard — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Amherst home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `UMass Amherst graduation weekend requires 3–4 weeks' advance notice. All other Amherst events book 2–3 weeks ahead.`,
  },
]

// ── Closing variants (MA generic 393–397, one per theme) ──────────────────────
export const MA_CLOSING_VARIANTS = [
  // 393 — Greater Boston
  {
    headline: (city) => `Your ${city} Dinner Starts Here`,
    sub:      (city) => `A certified teppanyaki chef. Premium proteins including filet mignon and lobster tail. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Greater Boston dates book 2–4 weeks out. Reserve your evening now.`,
  },
  // 394 — MetroWest
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `MetroWest weekends book 2–3 weeks ahead. Secure your date now.`,
  },
  // 395 — North Shore
  {
    headline: (city) => `The ${city} Evening Your Property Deserves`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} waterfront property or estate. Premium proteins, live teppanyaki, complete cleanup. From $60 per adult.`,
    urgency:  `North Shore wedding-season dates fill fast. Reserve your evening now.`,
  },
  // 396 — South Shore & Cape Cod
  {
    headline: (city) => `${city}'s Best Vacation Dinner — Reserve Your Chef`,
    sub:      (city) => `A fully self-contained mobile hibachi chef at your ${city} vacation rental. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Peak summer season books 2–3 weeks ahead. Confirm your date now.`,
  },
  // 397 — Western Massachusetts
  {
    headline: (city) => `${city}'s Best Celebration Dinner — Reserve Your Date`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `Graduation and wedding season dates book 3–4 weeks ahead. Confirm your date now.`,
  },
]
