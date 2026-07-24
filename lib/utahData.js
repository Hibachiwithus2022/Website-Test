// =============================================================================
// lib/utahData.js — Utah Expansion (Batches 1–4, complete)
// 17 cities live · 5 geographic themes
// Theme 0: Salt Lake Valley Executive (Salt Lake City, Sandy, Draper, Holladay, South Jordan)
// Theme 1: Wasatch Front Family (Lehi, Provo, Orem, American Fork, Layton)
// Theme 2: Park City Ski Luxury (Park City)
// Theme 3: Mountain Resort Communities (Heber City, Midway)
// Theme 4: Southern Utah Tourism (St. George, Springdale, Moab, Cedar City)
//
// INTRO_VARIANTS indices:   345–349 UT generic · 350–366 UT city-specific (all 17 live)
// CLOSING_VARIANTS indices: 345–349 UT generic · 350–366 UT city-specific (all 17 live)
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getUTVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 5
}

// ── Hero subtitles (5 themes) ──────────────────────────────────────────────────
const UT_HERO_SUBTITLES = [
  (city) => `Executive Entertaining · Tech Corporate Events · Luxury Home Dining · Serving ${city} & the Salt Lake Valley`,
  (city) => `Backyard Celebrations · Graduation Parties · Family Milestones · Serving ${city} & the Wasatch Front`,
  (city) => `Ski Vacation Rentals · Luxury Estate Dining · Sundance Season Events · Serving ${city} & Summit County`,
  (city) => `Cabin & Lake Dining · Destination Weddings · Ski Weekend Gatherings · Serving ${city} & the Wasatch Back`,
  (city) => `National Park Vacation Dining · Family Reunions · Destination Celebrations · Serving ${city} & Southern Utah`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const UT_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Salt Lake Valley Executive
  (city) => [
    `Executive and tech-corridor entertaining for ${city}'s most discerning hosts`,
    'Perfect for Silicon Slopes leadership, corporate teams, and University of Utah families',
    `Premium protein upgrades — filet mignon, lobster tail, wagyu — for any ${city} occasion`,
    `Salt Lake Valley events book 2–4 weeks ahead — spring and summer fill fastest`,
    'Certified teppanyaki chef, full premium setup, and complete cleanup included',
    `Wasatch Mountain backdrop makes every ${city} backyard or patio event feel elevated`,
  ],
  // Theme 1 — Wasatch Front Family
  (city) => [
    `Backyard hibachi for ${city}'s growing family and graduation-season community`,
    'Perfect for graduation parties, birthday milestones, and neighborhood gatherings',
    `${city} events book 2–3 weeks ahead — May and June graduation season fills fastest`,
    'Full setup and cleanup — you provide the backyard, we handle everything else',
    'Dual-station capacity for large gatherings of 25–60+ guests',
    `Silicon Slopes tech-corridor families throughout ${city} book us for milestone celebrations`,
  ],
  // Theme 2 — Park City Ski Luxury
  (city) => [
    `Ski vacation rental and luxury estate dining throughout ${city}`,
    'Perfect for Sundance season gatherings, bachelor/bachelorette weekends, and corporate retreats',
    `Premium proteins and a live-fire performance built for ${city}'s discerning guests`,
    `${city} peak-season dates book 3–4 weeks ahead — winter and film-festival season fill fastest`,
    'Certified teppanyaki chef travels to your ski chalet, condo, or estate property',
    'Dual-station capacity for large group ski weekends and corporate retreats',
  ],
  // Theme 3 — Mountain Resort Communities
  (city) => [
    `Cabin and lake-property dining throughout ${city} and the Wasatch Back`,
    'Perfect for destination weddings, ski weekend gatherings, and holiday reunions',
    `Premium proteins available for any ${city} celebration or resort-property event`,
    `${city} events book 3–4 weeks ahead — wedding season and ski season fill fastest`,
    'Full setup and cleanup at your cabin, lakehouse, or resort-adjacent property',
    'Dual-station capacity for large wedding-weekend and holiday gatherings',
  ],
  // Theme 4 — Southern Utah Tourism
  (city) => [
    `National park vacation dining and family reunion hibachi throughout ${city}`,
    'Perfect for multi-generational family reunions and destination celebrations',
    `Vacation rental and resort-property setups are ${city}'s most common bookings`,
    `${city} peak season (spring and fall) books 2–3 weeks ahead`,
    'Full setup and cleanup at your vacation rental, resort property, or backyard',
    'Dual-station capacity for large family reunion and group-trip gatherings',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const UT_OCCASIONS = [
  // Theme 0 — Salt Lake Valley Executive
  ['Executive Dinner Parties', 'Corporate Team Dinners', 'Client Appreciation Events', 'Milestone Birthday Dinners', 'Graduation Parties', 'Anniversary Celebrations', 'Engagement Parties', 'Holiday Gatherings', 'Retirement Celebrations', 'Neighborhood & HOA Events'],
  // Theme 1 — Wasatch Front Family
  ['Birthday Parties', 'Graduation Parties', 'Anniversary Dinners', 'Family Reunions', 'Corporate Events', 'Bachelorette Parties', 'Neighborhood Gatherings', 'Holiday Dinners', 'Retirement Parties', 'Milestone Celebrations'],
  // Theme 2 — Park City Ski Luxury
  ['Ski Vacation Dinners', 'Sundance Season Events', 'Bachelor & Bachelorette Weekends', 'Corporate Retreats', 'Anniversary Getaways', 'Engagement Dinners', 'Holiday Gatherings', 'Birthday Celebrations', 'Milestone Celebrations', 'Luxury Estate Dinners'],
  // Theme 3 — Mountain Resort Communities
  ['Destination Weddings', 'Ski Weekend Gatherings', 'Cabin Holiday Reunions', 'Anniversary Getaways', 'Family Reunions', 'Birthday Celebrations', 'Corporate Retreats', 'Engagement Dinners', 'Lake Property Dinners', 'Milestone Celebrations'],
  // Theme 4 — Southern Utah Tourism
  ['Family Reunions', 'National Park Vacation Dinners', 'Destination Weddings', 'Birthday Celebrations', 'Anniversary Getaways', 'Multi-Generational Trips', 'Corporate Retreats', 'Bachelorette Weekends', 'Holiday Gatherings', 'Milestone Celebrations'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const UT_FAQ_SETS = [
  // Theme 0 — Salt Lake Valley Executive
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} home or estate property?`,
      a: `Absolutely — Salt Lake Valley properties are among our most requested setups. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most ${city} homes have ideal outdoor entertaining spaces including rear patios, decks, and yards backed by the Wasatch Range. Premium protein upgrades including filet mignon, lobster tail, and wagyu are available for any ${city} event.`,
    },
    {
      q: `Do you serve Silicon Slopes tech companies and corporate teams in ${city}?`,
      a: `Yes — corporate team dinners, client entertainment, and executive private events for tech and finance professionals are among our most common ${city} bookings. We maintain full professionalism from arrival through cleanup, and can coordinate with office parks, corporate campuses, or private homes.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `For events in the ${city} area, we recommend booking 2–4 weeks in advance. Spring and summer fill fastest — particularly May and June when graduation season overlaps with outdoor entertaining season across the Salt Lake Valley. Premium dates and larger events should be secured 4 weeks ahead.`,
    },
    {
      q: `What premium protein upgrades are available for ${city} events?`,
      a: `Full premium menu is available for any Salt Lake Valley event: filet mignon, lobster tail, wagyu beef, king shrimp, and Chilean sea bass. Mix and match per guest at booking. Premium packages are a common addition for executive dinners and milestone celebrations throughout ${city}.`,
    },
    {
      q: `Is there a travel fee for ${city} and surrounding Salt Lake Valley communities?`,
      a: `No extra travel fee for ${city} and most of the Salt Lake Valley. For locations more than 40 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you confirm.`,
    },
    {
      q: `Can you handle a large gathering in ${city} with 40+ guests?`,
      a: `Yes — for groups over 25, we bring two chef stations running simultaneously. Large corporate events, milestone celebrations, and neighborhood gatherings of 40–80 guests are among our most common Salt Lake Valley bookings. Full coordination handled end-to-end.`,
    },
  ],
  // Theme 1 — Wasatch Front Family (scaffolding for future batches)
  (city) => [
    {
      q: `Can you set up hibachi in a ${city} backyard for a graduation party?`,
      a: `Yes — ${city} backyards and suburban patios are among our most common setups. We need a flat outdoor area of at least 10×10 ft. Graduation season books fast, so reserve 3–4 weeks ahead for May and June Saturdays.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend events in ${city} book 2–3 weeks out. Graduation season and summer Saturdays fill fastest along the Wasatch Front.`,
    },
    {
      q: `Can you handle large family reunion gatherings in ${city}?`,
      a: `Yes — for groups over 25, we bring two chef stations running in parallel. Large family reunions and graduation parties of 40–80 guests are common throughout the Wasatch Front.`,
    },
    {
      q: `What's included in a ${city} hibachi event?`,
      a: `Everything: teppan grill, propane, all proteins, fried rice, vegetables, sauces, plates, and utensils. You provide the backyard and guests — we handle the rest.`,
    },
    {
      q: `Is there a travel fee for ${city}?`,
      a: `No extra travel fee for most of the Wasatch Front. Locations beyond 40 miles from our nearest chef base may have a modest, always-disclosed fee.`,
    },
    {
      q: `Can hibachi be done indoors in ${city}?`,
      a: `Yes, in large, well-ventilated spaces. Most ${city} events are outdoors, but covered patios and large garages work well too.`,
    },
  ],
  // Theme 2 — Park City Ski Luxury (scaffolding for future batches)
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} ski chalet or condo?`,
      a: `Yes — ski chalets, luxury condos, and resort-adjacent properties throughout ${city} are among our most requested setups. We coordinate with HOAs and property managers as needed for winter-season events.`,
    },
    {
      q: `Do you serve Sundance Film Festival week events?`,
      a: `Yes — festival-week private dinners are one of our most popular ${city} bookings. Reserve 4–6 weeks ahead for festival dates, as availability is extremely limited during that window.`,
    },
    {
      q: `Can hibachi be done in winter or at altitude in ${city}?`,
      a: `Yes — our chefs are equipped for cold-weather setups including covered decks and heated patios. We handle the logistics; you enjoy the evening.`,
    },
    {
      q: `What premium proteins are available for a ${city} event?`,
      a: `Filet mignon, lobster tail, wagyu, and Chilean sea bass are all available for any ${city} celebration — our most requested upgrade for luxury ski properties.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Peak winter and festival dates book 4–6 weeks ahead. Summer and shoulder-season events can often be booked 2–3 weeks out.`,
    },
    {
      q: `Can you handle a large group ski weekend in ${city}?`,
      a: `Yes — dual-station capacity handles large ski weekend and corporate retreat groups of 25–60+ guests.`,
    },
  ],
  // Theme 3 — Mountain Resort Communities (scaffolding for future batches)
  (city) => [
    {
      q: `Can you cater a destination wedding welcome dinner in ${city}?`,
      a: `Yes — welcome dinners and rehearsal dinners at ${city} resort properties and lake homes are among our most requested events. Reserve 4–6 weeks ahead for wedding-season weekends.`,
    },
    {
      q: `Do you serve cabin and lake properties in ${city}?`,
      a: `Yes — cabins, lakehouses, and resort-adjacent properties throughout ${city} are ideal hibachi setups. We need a flat outdoor area of at least 10×10 ft.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `${city} events book 3–4 weeks ahead. Wedding season (June–September) and ski season holidays fill fastest.`,
    },
    {
      q: `Can you handle a large holiday reunion in ${city}?`,
      a: `Yes — dual-station capacity handles large holiday and wedding-weekend gatherings of 25–60+ guests.`,
    },
    {
      q: `Is there a travel fee for ${city}?`,
      a: `A modest travel fee may apply for remote mountain properties — always disclosed upfront before you confirm.`,
    },
    {
      q: `What premium proteins are available?`,
      a: `Filet mignon, lobster tail, and wagyu upgrades are available for any ${city} wedding or celebration event.`,
    },
  ],
  // Theme 4 — Southern Utah Tourism (scaffolding for future batches)
  (city) => [
    {
      q: `Can you cater a family reunion at our ${city} vacation rental?`,
      a: `Yes — vacation rental group dinners are our most requested ${city} event. We need a flat outdoor area of at least 10×10 ft, common at most rental properties.`,
    },
    {
      q: `Do you serve national park gateway visitors in ${city}?`,
      a: `Yes — family reunions and multi-generational trip dinners built around a national park visit are a core part of our ${city} business.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `${city} peak season (spring and fall) books 2–3 weeks ahead. Summer dates can often be booked with less notice.`,
    },
    {
      q: `Can you handle a large multi-generational group in ${city}?`,
      a: `Yes — dual-station capacity handles large family reunion and group-trip gatherings of 25–60+ guests.`,
    },
    {
      q: `Is there a travel fee for ${city}?`,
      a: `No extra travel fee within the immediate area. Remote properties beyond 40 miles may have a modest, always-disclosed fee.`,
    },
    {
      q: `What's included in a ${city} hibachi event?`,
      a: `Everything: teppan grill, propane, all proteins, fried rice, vegetables, sauces, plates, and utensils. Full setup and cleanup included.`,
    },
  ],
]

// ── Testimonials ────────────────────────────────────────────────────────────────
const UT_TESTIMONIALS = [
  // Theme 0 — Salt Lake Valley Executive
  [
    {
      text: '"Executive dinner at our Salt Lake City home near the Avenues — 18 guests, rear patio setup, chef arrived exactly on time and delivered a flawless two-hour performance. Colleagues from the U of U and a few downtown finance partners. Every guest asked for the contact information before they left."',
      name: 'Robert & Catherine H.',
      city: 'Salt Lake City, UT',
      event: 'Executive Dinner Party',
      initials: 'RH',
    },
    {
      text: '"Corporate team dinner for our Draper tech company — 26 people, backyard venue near Corner Canyon, chef arrived with full setup and ran two stations seamlessly. Best team event we\'ve organized since moving to Silicon Slopes. This is our new quarterly format."',
      name: 'Sandra M.',
      city: 'Draper, UT',
      event: 'Corporate Team Dinner',
      initials: 'SM',
    },
    {
      text: '"Graduation party for our daughter in Sandy — 40 guests, backyard setup, dual stations for the crowd. Every restaurant near us was fully booked for graduation weekend. Having the chef come to us was the best decision we made. Already planning next year\'s event."',
      name: 'Maria & David C.',
      city: 'Sandy, UT',
      event: 'Graduation Party',
      initials: 'MC',
    },
  ],
  // Theme 1 — Wasatch Front Family
  [
    {
      text: '"Corporate team dinner for our Lehi office — 24 people, patio setup near Traverse Mountain, chef ran the whole show flawlessly. Adobe and Ancestry folks in the group were still talking about it at the next standup. Best team dinner we\'ve done since the Silicon Slopes campus opened."',
      name: 'Jason T.',
      city: 'Lehi, UT',
      event: 'Corporate Team Dinner',
      initials: 'JT',
    },
    {
      text: '"BYU graduation party for our son in Provo — 38 guests, backyard setup, dual stations. Every restaurant in Utah County was booked solid for graduation weekend. Having the chef come to us was the easiest decision of the whole week. Grandparents front row the entire time."',
      name: 'The Bennion Family',
      city: 'Provo, UT',
      event: 'Graduation Party',
      initials: 'BF',
    },
    {
      text: '"Homecoming dinner for my husband\'s return from deployment — 30 family members at our Layton home near Hill Air Force Base. Chef was professional, on time, and made the whole evening feel like the celebration it needed to be. Perfect night for our family."',
      name: 'Amanda R.',
      city: 'Layton, UT',
      event: 'Military Homecoming',
      initials: 'AR',
    },
  ],
  // Theme 2 — Park City Ski Luxury
  [
    {
      text: '"Sundance week dinner at our Deer Valley property — 16 guests, great room and deck setup, chef delivered a flawless two-hour performance between screenings. Filet and lobster tail upgrades were the right call. Already booked for next year\'s festival."',
      name: 'Michael & Elena S.',
      city: 'Park City, UT',
      event: 'Sundance Season Dinner',
      initials: 'MS',
    },
    {
      text: '"Bachelorette weekend at our Old Town rental — 12 guests, hibachi Saturday night before a day of skiing. Chef was the highlight of the whole trip. We\'ve done Park City dinners out for years — this was the first one where everyone stayed at the table the entire night."',
      name: 'Kayla D.',
      city: 'Park City, UT',
      event: 'Bachelorette Weekend',
      initials: 'KD',
    },
    {
      text: '"Corporate retreat dinner near Canyons Village — 28 people, chef ran two stations for the group. We\'ve tried every restaurant buyout in Park City for offsites. This was the first one that actually got the whole team talking to each other instead of their phones."',
      name: 'David P.',
      city: 'Park City, UT',
      event: 'Corporate Retreat',
      initials: 'DP',
    },
  ],
  // Theme 3 — Mountain Resort Communities
  [
    {
      text: '"Wedding welcome dinner at Zermatt in Midway — 24 guests the night before the ceremony, chef set up on the resort patio and delivered a performance our families are still talking about. Perfect way to kick off the weekend."',
      name: 'Rachel & Tyler M.',
      city: 'Midway, UT',
      event: 'Wedding Welcome Dinner',
      initials: 'RM',
    },
    {
      text: '"Family reunion at our Heber City lake property near Deer Creek — 34 guests, dual stations, four generations at the same grill. Best reunion dinner we\'ve hosted in years. Kids competing for the flying shrimp, grandparents front row the whole time."',
      name: 'The Osborne Family',
      city: 'Heber City, UT',
      event: 'Family Reunion',
      initials: 'OF',
    },
  ],
  // Theme 4 — Southern Utah Tourism
  [
    {
      text: '"Family reunion at our St. George vacation rental near Desert Color — 30 guests, three generations in town for the week. Chef set up on the patio and ran a flawless two-hour show. Best dinner of the whole trip, and we did four days in Zion."',
      name: 'The Whitmore Family',
      city: 'St. George, UT',
      event: 'Family Reunion',
      initials: 'WF',
    },
    {
      text: '"Group dinner at our Moab rental after two days in Arches and Canyonlands — 18 of us, exhausted from hiking, and the chef turned it into the best night of the trip. Everyone still talks about the fire tricks under the stars."',
      name: 'Chris L.',
      city: 'Moab, UT',
      event: 'National Park Trip Dinner',
      initials: 'CL',
    },
    {
      text: '"Booked hibachi for our Springdale rental the night before our Zion hike — 14 guests, patio setup with the canyon walls right behind us. Chef was fantastic, food was outstanding, and the setting made it unforgettable."',
      name: 'Patricia N.',
      city: 'Springdale, UT',
      event: 'Vacation Rental Dinner',
      initials: 'PN',
    },
  ],
]

// ── Image themes (hero, one per geographic theme) ─────────────────────────────
const UT_IMAGE_THEMES = [
  { heroImage: '/pics/hibachi-colorado-home.jpg' }, // Theme 0 — Salt Lake Valley Executive
  { heroImage: '/pics/backyard-hibachi-3.jpg' },     // Theme 1 — Wasatch Front Family
  { heroImage: '/pics/hibachi-colorado.jpg' },       // Theme 2 — Park City Ski Luxury
  { heroImage: '/pics/hibachi-chef-home.jpg' },      // Theme 3 — Mountain Resort Communities
  { heroImage: '/pics/hibachi-texas-home.jpg' },     // Theme 4 — Southern Utah Tourism
]

// ── How It Works ──────────────────────────────────────────────────────────────
const UT_HOW_IT_WORKS = [
  // Theme 0 — Salt Lake Valley Executive
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
  // Theme 1 — Wasatch Front Family
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
  // Theme 2 — Park City Ski Luxury
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Property`,
    footerNote: (city) => `${city} peak-season dates book 4–6 weeks ahead. Call or text (201) 565-3878 to confirm.`,
    steps: [
      { num: '01', title: 'Reserve Your Evening',          desc: 'Contact us with your date, guest count, and property setup. Premium proteins available. We confirm and coordinate travel.' },
      { num: '02', title: 'Chef Travels to You',           desc: 'Your certified teppanyaki chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Fire Dinner at Your Chalet', desc: 'Guests gather for 90–120 minutes of live hibachi cooking — fire tricks, custom proteins, fried rice, grilled vegetables.' },
      { num: '04', title: 'Full Cleanup, Nothing Left',    desc: 'Chef handles all teardown and cleanup. Your property is immaculate when they leave.' },
    ],
  },
  // Theme 3 — Mountain Resort Communities
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} events book 3–4 weeks ahead. Call or text (201) 565-3878 to secure your date.`,
    steps: [
      { num: '01', title: 'Book Your Event',               desc: 'Request your date online or by phone. Tell us your guest count and outdoor space. We confirm fast and coordinate travel.' },
      { num: '02', title: 'Chef Arrives Equipped',         desc: 'Your certified chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and chopsticks.' },
      { num: '03', title: 'Mountain Dinner Show',          desc: 'Every guest gathered at the grill for 90–120 minutes — fire tricks, proteins cooked to order, fried rice, grilled vegetables.' },
      { num: '04', title: 'Complete Cleanup Included',     desc: 'Chef handles all teardown and pack-out. Your cabin or lake property is spotless when they leave.' },
    ],
  },
  // Theme 4 — Southern Utah Tourism
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
]

// ── Section variants ────────────────────────────────────────────────────────────
const UT_SECTION_VARIANTS = [
  // Theme 0 — Salt Lake Valley Executive
  {
    heroPill:           'Salt Lake Valley\'s Private Chef',
    experiencePill:     'Beyond Any Salt Lake Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏔️', title: `Your ${city} Property Is the Venue`,     desc: `No restaurant can give your guests this — a certified teppanyaki chef performing exclusively at your ${city} property for the evening.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',             desc: 'Filet mignon, lobster tail, wagyu upgrades — cooked live on the teppan in front of your guests.' },
      { icon: '💼', title: 'Built for Executive & Tech Entertaining', desc: 'Corporate team dinners, client events, and milestone celebrations — calibrated for the Salt Lake Valley professional class.' },
      { icon: '✨', title: 'Full Show, Zero Cleanup',                  desc: 'Premium performance, hand-selected proteins, and complete teardown. Your property is spotless when the chef leaves.' },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a ${city} UT executive event`,
    areasPill:          'Serving the Salt Lake Valley',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Salt Lake Valley Communities`,
    areasIntro: [
      (city, state) => `We serve all of the Salt Lake Valley — Salt Lake City, Sandy, Draper, Holladay, South Jordan, and every community throughout Salt Lake County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Reserve Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Standard for Private Entertaining in ${city}`,
    occasionSubtext:       'Executive dinners, corporate team events, and milestone celebrations — private hibachi is the Salt Lake Valley\'s most memorable in-home dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city} Private Hibachi Questions — Answered`,
    testimonialSubheading: 'What Salt Lake Valley Hosts Are Saying',
  },
  // Theme 1 — Wasatch Front Family
  {
    heroPill:           'Wasatch Front\'s Private Chef',
    experiencePill:     'Better Than Any Restaurant Reservation',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `${city}'s Backyard Is the Venue`,        desc: `No reservation battles, no parking, no rushed tables — your ${city} backyard becomes an exclusive private dining room for the evening.` },
      { icon: '🔥', title: 'One Chef, One Show',                     desc: 'Every guest at the same grill, the same chef, the same moment — the shared experience is what makes hibachi unforgettable.' },
      { icon: '🎓', title: 'Built for Graduation Season',            desc: 'When every restaurant is fully booked in May and June, we come to your backyard.' },
      { icon: '🧹', title: 'Arrive & Disappear Spotless',            desc: 'Your chef arrives fully equipped, sets up, cooks the entire dinner, and packs out after.' },
    ],
    experienceImage:    '/pics/backyard-hibachi-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a backyard event in ${city}, UT`,
    areasPill:          'Serving the Wasatch Front',
    areasHeadline:      (city) => `Hibachi in ${city} and the Wasatch Front`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the Wasatch Front — every community throughout Utah and Davis County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From graduation parties to neighborhood gatherings, private hibachi is the Wasatch Front backyard upgrade you\'ve been waiting for',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Wasatch Front Hosts Are Saying',
  },
  // Theme 2 — Park City Ski Luxury
  {
    heroPill:           'Park City\'s Private Chef',
    experiencePill:     'The Dinner of the Weekend',
    experiencePoints:   (city) => [
      { icon: '🎿', title: `Ski Estate Dining in ${city}`,          desc: `Ski chalets, luxury condos, and resort-adjacent properties throughout ${city} are the ideal setting for private hibachi.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',            desc: 'Filet mignon, lobster tail, wagyu — cooked live at the teppan on your deck or great room.' },
      { icon: '🎬', title: 'Built for Sundance Season',              desc: `Festival-week private dinners are among our most requested ${city} bookings.` },
      { icon: '✨', title: 'Property Stays Immaculate',              desc: 'Flawless setup, full service throughout, and complete cleanup — you enjoy the evening, we handle everything else.' },
    ],
    experienceImage:    '/pics/hibachi-colorado-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} UT ski luxury estate`,
    areasPill:          'Serving Summit County',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Summit County`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Summit County — every ski and resort community throughout the Wasatch Back.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Peak winter and festival dates fill 4–6 weeks ahead.`,
    ],
    areasButton:           'Reserve Your Evening',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone Talks About in ${city}`,
    occasionSubtext:       'Ski vacation dinners, Sundance season events, bachelor/bachelorette weekends, and corporate retreats — private hibachi elevates any Park City evening',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Park City Hosts Are Saying',
  },
  // Theme 3 — Mountain Resort Communities
  {
    heroPill:           'Wasatch Back\'s Private Chef',
    experiencePill:     'Every Generation at the Grill',
    experiencePoints:   (city) => [
      { icon: '🏔️', title: `Cabin & Lake Dining in ${city}`,       desc: `Cabins, lakehouses, and resort properties throughout ${city} are ideal hibachi setups.` },
      { icon: '💍', title: 'Built for Destination Weddings',        desc: `Welcome dinners and rehearsal dinners at ${city} resort properties are among our most requested events.` },
      { icon: '🔥', title: 'No Restaurant Logistics',               desc: 'Fresh proteins cooked live, a full teppanyaki performance, and no reservations or rushed tables to manage.' },
      { icon: '🧹', title: 'We Handle Everything',                  desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except enjoy the celebration.' },
    ],
    experienceImage:    '/pics/hibachi-colorado.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} UT mountain resort event`,
    areasPill:          'Serving the Wasatch Back',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Wasatch Back`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the Wasatch Back — Heber Valley, Midway, and surrounding Wasatch County communities.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Wedding season and ski holidays fill fastest.`,
    ],
    areasButton:           'Book Your Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Celebration`,
    occasionSubtext:       'Destination weddings, ski weekend gatherings, and holiday reunions — Wasatch Back families and wedding parties celebrate together, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Wasatch Back Hosts Are Saying',
  },
  // Theme 4 — Southern Utah Tourism
  {
    heroPill:           'Southern Utah\'s Private Chef',
    experiencePill:     'The Best Night of the Trip',
    experiencePoints:   (city) => [
      { icon: '🏜️', title: `Vacation Rental Dining in ${city}`,    desc: `Vacation rentals and resort properties throughout ${city} are the ideal setting for a group dinner.` },
      { icon: '🏞️', title: 'Built for National Park Trips',        desc: `Family reunions and multi-generational trip dinners built around a national park visit are core to our ${city} business.` },
      { icon: '🔥', title: 'No Restaurant Logistics',               desc: 'Fresh proteins cooked live, a full teppanyaki performance, and no reservations for your whole group to manage.' },
      { icon: '🧹', title: 'We Handle Everything',                  desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except enjoy the trip.' },
    ],
    experienceImage:    '/pics/hibachi-texas-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} UT vacation rental event`,
    areasPill:          'Serving Southern Utah',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Southern Utah`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Southern Utah — every national park gateway community in the region.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Peak season books 2–3 weeks ahead.`,
    ],
    areasButton:           'Reserve Your Evening',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone Remembers in ${city}`,
    occasionSubtext:       'Family reunions, national park vacation dinners, and destination celebrations — private hibachi elevates any Southern Utah trip',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Southern Utah Guests Are Saying',
  },
]

// ── City experience image map (Batch 1 cities) ────────────────────────────────
const UT_CITY_IMAGE_MAP = {
  'salt-lake-city': { src: '/pics/hibachi-chef-home.jpg',   alt: (city) => `Private hibachi chef at a Salt Lake City UT executive event` },
  'sandy':          { src: '/pics/hibachi-catering-3.jpg',  alt: (city) => `Private hibachi chef at a Sandy UT event` },
  'draper':         { src: '/pics/hibachi-catering.jpg',    alt: (city) => `Private hibachi chef at a Draper UT Silicon Slopes event` },
  'holladay':       { src: '/pics/hibachi-pic-4.jpg',       alt: (city) => `Private hibachi chef at a Holladay UT estate event` },
  'south-jordan':   { src: '/pics/backyard-hibachi-3.jpg',  alt: (city) => `Private hibachi chef at a South Jordan UT event` },
  // Batch 2 — Utah County & Wasatch Front
  'lehi':           { src: '/pics/hibachi-catering-2.jpg',  alt: (city) => `Private hibachi chef at a Lehi UT Silicon Slopes event` },
  'provo':          { src: '/pics/hibachi-pic-4.jpg',       alt: (city) => `Private hibachi chef at a Provo UT graduation event` },
  'orem':           { src: '/pics/hibachi-pic-2.jpg',       alt: (city) => `Private hibachi chef at an Orem UT event` },
  'american-fork':  { src: '/pics/hibachi-catering.jpg',    alt: (city) => `Private hibachi chef at an American Fork UT event` },
  'layton':         { src: '/pics/backyard-hibachi-2.jpg',  alt: (city) => `Private hibachi chef at a Layton UT event` },
  // Batch 3 — Park City & Mountain Resort Communities
  'park-city':      { src: '/pics/hibachi-colorado-home.jpg', alt: (city) => `Private hibachi chef at a Park City UT ski estate` },
  'heber-city':     { src: '/pics/hibachi-pic-32.jpg',       alt: (city) => `Private hibachi chef at a Heber City UT lake property` },
  'midway':         { src: '/pics/hibachi-colorado-home.jpg', alt: (city) => `Private hibachi chef at a Midway UT resort wedding event` },
  // Batch 4 — Southern Utah Tourism
  'st-george':      { src: '/pics/hibachi-austin-home.jpg', alt: (city) => `Private hibachi chef at a St. George UT vacation rental` },
  'springdale':     { src: '/pics/mobile-hibachi-2.jpg',    alt: (city) => `Mobile hibachi chef at a Springdale UT Zion vacation rental` },
  'moab':           { src: '/pics/hibachi-dallas-home.jpg', alt: (city) => `Mobile hibachi chef at a Moab UT vacation rental` },
  'cedar-city':     { src: '/pics/hibachi-catering-austin.jpg', alt: (city) => `Private hibachi chef at a Cedar City UT event` },
}

// ── Support images for profileIdx cities (Batch 1) ────────────────────────────
const UT_SUPPORT_IMAGES = {
  'salt-lake-city': {
    testimonial: {
      src:        '/pics/hibachi-pic-2.jpg',
      alt:        (city) => `Executive hibachi dinner in Salt Lake City, UT`,
      caption:    'Salt Lake City executive private dining',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `Salt Lake City hosts expect the exceptional — and our private hibachi chefs deliver it at every event. Downtown rooftop dinners, Sugar House and Avenues backyard entertaining, and executive private gatherings near the Capitol are our specialty. See what Salt Lake City hosts have discovered:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef setting up at a Salt Lake City UT home`,
      caption: 'Salt Lake City\'s private dining standard',
    },
  },
  'sandy': {
    testimonial: {
      src:        '/pics/hibachi-photo-1.jpg',
      alt:        (city) => `Graduation hibachi party in Sandy, UT`,
      caption:    'Sandy family & graduation season',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Sandy families choose private hibachi when a backyard birthday or graduation party needs to rise above the ordinary. From neighborhoods near Dimple Dell to properties by the Cairns, hibachi at home consistently outperforms every restaurant reservation in the area. See what Sandy hosts are saying:`,
    },
    cta: {
      src:     '/pics/backyard-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in Sandy, UT`,
      caption: 'Sandy\'s backyard dinner standard',
    },
  },
  'draper': {
    testimonial: {
      src:        '/pics/hibachi-chef-2.jpg',
      alt:        (city) => `Corporate hibachi event in Draper, UT`,
      caption:    'Draper Silicon Slopes corporate dining',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Draper's Silicon Slopes tech companies and SunCrest hillside estate owners choose private hibachi for corporate team dinners, client entertainment, and milestone celebrations. Near Corner Canyon and Point of the Mountain, our chefs bring the full teppanyaki experience to your door. See what Draper hosts and teams are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Draper, UT`,
      caption: 'Draper\'s corporate dinner standard',
    },
  },
  'holladay': {
    testimonial: {
      src:        '/pics/hibachi-shot-1.jpg',
      alt:        (city) => `Estate hibachi dinner in Holladay, UT`,
      caption:    'Holladay estate private dining',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Holladay's Olympus Cove estate owners and Cottonwood Country Club neighbors choose private hibachi for anniversary dinners, milestone celebrations, and executive private gatherings. Our chefs bring the full setup to your door at the base of Mount Olympus. See what Holladay hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-chef-at-home.jpg',
      alt:     (city) => `Private hibachi chef in Holladay, UT`,
      caption: 'Holladay\'s private dining standard',
    },
  },
  'south-jordan': {
    testimonial: {
      src:        '/pics/hibachi-photo-2.jpg',
      alt:        (city) => `Private hibachi party in South Jordan, UT`,
      caption:    'South Jordan family celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `South Jordan hosts — from Daybreak's Oquirrh Lake neighborhoods to established communities near the District — choose private hibachi for graduation parties, birthday milestones, and neighborhood gatherings. Our chefs serve all of South Jordan with the full setup every time. See what South Jordan hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-2.jpg',
      alt:     (city) => `Private hibachi chef in South Jordan, UT`,
      caption: 'South Jordan\'s backyard dining standard',
    },
  },
  // Batch 2 — Utah County & Wasatch Front
  'lehi': {
    testimonial: {
      src:        '/pics/hibachi-pic-3.jpg',
      alt:        (city) => `Corporate hibachi event in Lehi, UT`,
      caption:    'Lehi Silicon Slopes corporate dining',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Lehi's Silicon Slopes tech campuses — Adobe, Ancestry, Vivint, and dozens of growing startups near Traverse Mountain — choose private hibachi for corporate team dinners and client events. Our chefs bring the full teppanyaki experience to your office park or home. See what Lehi teams and hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Lehi, UT`,
      caption: 'Lehi\'s corporate dinner standard',
    },
  },
  'provo': {
    testimonial: {
      src:        '/pics/backyard-hibachi.jpg',
      alt:        (city) => `Graduation hibachi party in Provo, UT`,
      caption:    'Provo BYU graduation season',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Provo families and BYU graduates choose private hibachi when a graduation celebration needs to rise above the ordinary. With every restaurant near campus booked solid every April, our chefs come to your backyard instead. See what Provo hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Provo, UT`,
      caption: 'Provo\'s graduation dinner standard',
    },
  },
  'orem': {
    testimonial: {
      src:        '/pics/hibachi-chef-at-home.jpg',
      alt:        (city) => `Backyard hibachi party in Orem, UT`,
      caption:    'Orem family celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Orem families near UVU and the SCERA corridor choose private hibachi for birthday parties, graduation dinners, and neighborhood gatherings. Our chefs serve all of Orem with the full setup and complete cleanup every time. See what Orem hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-photo-1.jpg',
      alt:     (city) => `Private hibachi chef in Orem, UT`,
      caption: 'Orem\'s backyard dinner standard',
    },
  },
  'american-fork': {
    testimonial: {
      src:        '/pics/hibachi-shot-2.jpg',
      alt:        (city) => `Private hibachi event in American Fork, UT`,
      caption:    'American Fork family celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `American Fork families near the canyon and Timpanogos Cave corridor choose private hibachi for birthday parties, graduation dinners, and backyard milestones. Our chefs serve all of American Fork with the full setup every time. See what local hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-chef-2.jpg',
      alt:     (city) => `Private hibachi chef in American Fork, UT`,
      caption: 'American Fork\'s backyard dinner standard',
    },
  },
  'layton': {
    testimonial: {
      src:        '/pics/hibachi-pic-62.jpg',
      alt:        (city) => `Military family hibachi event in Layton, UT`,
      caption:    'Layton military & family celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Layton's Hill Air Force Base families and Davis County's largest community choose private hibachi for homecomings, promotions, and family milestones. Our chefs serve all of Layton with the full setup every time. See what Layton hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-2.jpg',
      alt:     (city) => `Private hibachi chef in Layton, UT`,
      caption: 'Layton\'s family dinner standard',
    },
  },
  // Batch 3 — Park City & Mountain Resort Communities
  'park-city': {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Ski luxury hibachi dinner in Park City, UT`,
      caption:    'Park City ski estate entertaining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Park City hosts — Deer Valley and Canyons Village ski estate owners, Sundance-season guests, and Old Town property renters — choose private hibachi for the dinner that defines the trip. Premium proteins and a live-fire performance built for the mountain's highest standard. See what Park City guests are saying:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in Park City, UT`,
      caption: 'Park City\'s ski luxury dining standard',
    },
  },
  'heber-city': {
    testimonial: {
      src:        '/pics/traveling-hibachi.jpg',
      alt:        (city) => `Lake property hibachi event in Heber City, UT`,
      caption:    'Heber Valley lake & vacation home dining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Heber City hosts near Deer Creek and Jordanelle Reservoir choose private hibachi for vacation home dinners and family reunions. Our chefs bring the full teppanyaki setup to your lake property or backyard. See what Heber Valley hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-photo-2.jpg',
      alt:     (city) => `Private hibachi chef in Heber City, UT`,
      caption: 'Heber Valley\'s vacation home dining standard',
    },
  },
  'midway': {
    testimonial: {
      src:        '/pics/mobile-hibachi.jpg',
      alt:        (city) => `Destination wedding hibachi dinner in Midway, UT`,
      caption:    'Midway destination wedding dining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Midway's Zermatt Resort weddings and luxury mountain estate owners choose private hibachi for welcome dinners, rehearsal dinners, and holiday gatherings. Our chefs bring the full setup to your resort property or estate. See what Midway hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-pic-4.jpg',
      alt:     (city) => `Private hibachi chef in Midway, UT`,
      caption: 'Midway\'s destination wedding dining standard',
    },
  },
  // Batch 4 — Southern Utah Tourism
  'st-george': {
    testimonial: {
      src:        '/pics/hibachi-pic-2.jpg',
      alt:        (city) => `Family reunion hibachi event in St. George, UT`,
      caption:    'St. George family reunion & vacation dining',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `St. George hosts — Entrada and Desert Color vacation properties, Snow Canyon-adjacent homes, and Zion-bound family reunions — choose private hibachi for the dinner that anchors the trip. Our chefs bring the full setup to your rental or backyard. See what St. George guests are saying:`,
    },
    cta: {
      src:     '/pics/backyard-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in St. George, UT`,
      caption: 'St. George\'s vacation dining standard',
    },
  },
  'springdale': {
    testimonial: {
      src:        '/pics/hibachi-photo-1.jpg',
      alt:        (city) => `Zion vacation rental hibachi event in Springdale, UT`,
      caption:    'Springdale Zion gateway dining',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `Springdale's Zion National Park vacation rentals and lodges choose mobile hibachi for the dinner that caps off a day on the trail. Our chefs bring a fully self-contained setup to your rental property. See what Springdale guests are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-to-you.jpg',
      alt:     (city) => `Mobile hibachi chef in Springdale, UT`,
      caption: 'Springdale\'s Zion gateway dining standard',
    },
  },
  'moab': {
    testimonial: {
      src:        '/pics/hibachi-austin-2.jpg',
      alt:        (city) => `National park trip hibachi event in Moab, UT`,
      caption:    'Moab national park basecamp dining',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `Moab's Arches and Canyonlands vacation rentals, Spanish Valley properties, and mountain biking group trips choose mobile hibachi for the dinner that caps off a day of adventure. Our chefs bring a fully self-contained setup to your rental. See what Moab guests are saying:`,
    },
    cta: {
      src:     '/pics/mobile-hibachi.jpg',
      alt:     (city) => `Mobile hibachi chef in Moab, UT`,
      caption: 'Moab\'s national park basecamp dining standard',
    },
  },
  'cedar-city': {
    testimonial: {
      src:        '/pics/hibachi-pic-3.jpg',
      alt:        (city) => `University town hibachi event in Cedar City, UT`,
      caption:    'Cedar City university & festival season dining',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Cedar City hosts — SUU families, Utah Shakespeare Festival visitors, and Cedar Breaks-adjacent property owners — choose private hibachi for milestone celebrations and festival-season gatherings. See what Cedar City hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-3.jpg',
      alt:     (city) => `Private hibachi chef in Cedar City, UT`,
      caption: 'Cedar City\'s celebration dining standard',
    },
  },
}

// ── Support fallback images (per theme, used when a city has no explicit entry) ─
const UT_SUPPORT_FALLBACKS = [
  { testimonial: { src: '/pics/hibachi-pic-3.jpg',   alt: (city) => `Private hibachi event in ${city}, UT`, caption: 'Salt Lake Valley private dining', trustBadge: 'Trusted by Local Families', intro: (city) => `${city} hosts choose private hibachi for executive dinners and milestone celebrations. See what local hosts are saying:` }, cta: { src: '/pics/hibachi-pic-32.jpg', alt: (city) => `Private hibachi chef in ${city}, UT`, caption: 'The Salt Lake Valley standard' } },
  { testimonial: { src: '/pics/mobile-hibachi.jpg',  alt: (city) => `Backyard hibachi party in ${city}, UT`, caption: 'Wasatch Front family celebrations', trustBadge: 'Trusted by Local Families', intro: (city) => `${city} families choose private hibachi for graduation parties and backyard milestones. See what local hosts are saying:` }, cta: { src: '/pics/hibachi-pic-62.jpg', alt: (city) => `Private hibachi chef in ${city}, UT`, caption: 'The Wasatch Front backyard standard' } },
  { testimonial: { src: '/pics/traveling-hibachi.jpg', alt: (city) => `Ski luxury hibachi event in ${city}, UT`, caption: 'Park City ski luxury dining', trustBadge: 'Five-Star Entertainment & Dining', intro: (city) => `${city} hosts choose private hibachi for ski vacation dinners and Sundance season events. See what guests are saying:` }, cta: { src: '/pics/mobile-hibachi-2.jpg', alt: (city) => `Private hibachi chef in ${city}, UT`, caption: 'The Park City private dining standard' } },
  { testimonial: { src: '/pics/hibachi-shot-2.jpg',  alt: (city) => `Cabin hibachi event in ${city}, UT`, caption: 'Wasatch Back resort dining', trustBadge: 'Five-Star Entertainment & Dining', intro: (city) => `${city} hosts choose private hibachi for destination weddings and cabin gatherings. See what guests are saying:` }, cta: { src: '/pics/hibachi-to-you.jpg', alt: (city) => `Private hibachi chef in ${city}, UT`, caption: 'The Wasatch Back celebration standard' } },
  { testimonial: { src: '/pics/hibachi-austin-home.jpg', alt: (city) => `Vacation rental hibachi event in ${city}, UT`, caption: 'Southern Utah vacation dining', trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `${city} guests choose private hibachi for family reunions and national park trip dinners. See what guests are saying:` }, cta: { src: '/pics/hibachi-austin-2.jpg', alt: (city) => `Private hibachi chef in ${city}, UT`, caption: 'The Southern Utah vacation dining standard' } },
]

// ── Major cities map (all 17 UT cities) ────────────────────────────────────────
const UT_MAJOR_CITIES = {
  // ── Theme 0 — Salt Lake Valley Executive ───────────────────────────────────
  'salt-lake-city': { v: 0, profileIdx: 0, nearby: ['Sandy','Holladay','Millcreek','South Jordan','Draper','West Valley City'] },
  'sandy':          { v: 0, profileIdx: 1, nearby: ['Salt Lake City','Draper','Holladay','South Jordan','Midvale','Cottonwood Heights'] },
  'draper':         { v: 0, profileIdx: 2, nearby: ['Sandy','South Jordan','Lehi','Bluffdale','Cottonwood Heights','Riverton'] },
  'holladay':       { v: 0, profileIdx: 3, nearby: ['Salt Lake City','Sandy','Millcreek','Cottonwood Heights','Murray'] },
  'south-jordan':   { v: 0, profileIdx: 4, nearby: ['Draper','Sandy','Riverton','West Jordan','Herriman','Bluffdale'] },
  // ── Theme 1 — Wasatch Front Family (Utah County & Davis County) ────────────
  'lehi':           { v: 1, profileIdx: 5, nearby: ['Draper','American Fork','Saratoga Springs','Highland','Pleasant Grove','Eagle Mountain'] },
  'provo':          { v: 1, profileIdx: 6, nearby: ['Orem','American Fork','Springville','Spanish Fork','Pleasant Grove'] },
  'orem':           { v: 1, profileIdx: 7, nearby: ['Provo','American Fork','Lindon','Pleasant Grove','Vineyard'] },
  'american-fork':  { v: 1, profileIdx: 8, nearby: ['Lehi','Highland','Pleasant Grove','Orem','Alpine'] },
  'layton':         { v: 1, profileIdx: 9, nearby: ['Ogden','Kaysville','Farmington','Clearfield','Syracuse'] },
  // ── Theme 2 — Park City Ski Luxury ──────────────────────────────────────────
  'park-city':      { v: 2, profileIdx: 10, nearby: ['Heber City','Midway','Kamas','Deer Valley','Snyderville'] },
  // ── Theme 3 — Mountain Resort Communities (Wasatch Back) ────────────────────
  'heber-city':     { v: 3, profileIdx: 11, nearby: ['Park City','Midway','Kamas','Charleston'] },
  'midway':         { v: 3, profileIdx: 12, nearby: ['Heber City','Park City','Wallsburg'] },
  // ── Theme 4 — Southern Utah Tourism ──────────────────────────────────────────
  'st-george':      { v: 4, profileIdx: 13, nearby: ['Washington','Ivins','Santa Clara','Hurricane','Springdale'] },
  'springdale':     { v: 4, profileIdx: 14, nearby: ['St. George','Hurricane','La Verkin','Rockville'] },
  'moab':           { v: 4, profileIdx: 15, nearby: ['Spanish Valley','Castle Valley','Green River','La Sal'] },
  'cedar-city':     { v: 4, profileIdx: 16, nearby: ['St. George','Parowan','Enoch','Brian Head'] },
}

// ── Display name overrides ────────────────────────────────────────────────────
const UT_CITY_DISPLAY_NAMES = {
  'st-george':   'St. George',
  'cedar-city':  'Cedar City',
  'park-city':   'Park City',
  'heber-city':  'Heber City',
}

// ── Nearby major cities by theme (only link to pages that exist) ───────────
const UT_NEARBY_MAJOR = [
  ['Salt Lake City', 'Sandy', 'Draper', 'Holladay', 'South Jordan'],   // v=0 Salt Lake Valley Executive
  ['Lehi', 'Provo', 'Orem', 'American Fork', 'Layton'],                // v=1 Wasatch Front Family
  ['Park City', 'Heber City', 'Midway'],                               // v=2 Park City Ski Luxury (cross-links the mountain resort cluster)
  ['Park City', 'Heber City', 'Midway'],                               // v=3 Mountain Resort Communities (same cluster)
  ['St. George', 'Springdale', 'Moab', 'Cedar City'],                  // v=4 Southern Utah Tourism
]

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const UT_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',   // 0 — Salt Lake City
  'Hibachi at Home in',        // 1 — Sandy
  'Hibachi Catering in',       // 2 — Draper
  'Private Hibachi Chef in',   // 3 — Holladay
  'Hibachi at Home in',        // 4 — South Jordan
  'Hibachi Catering in',       // 5 — Lehi
  'Hibachi at Home in',        // 6 — Provo
  'Backyard Hibachi in',       // 7 — Orem
  'Backyard Hibachi in',       // 8 — American Fork
  'Hibachi at Home in',        // 9 — Layton
  'Private Hibachi Chef in',   // 10 — Park City
  'Hibachi at Home in',        // 11 — Heber City
  'Private Hibachi Chef in',   // 12 — Midway
  'Hibachi at Home in',        // 13 — St. George
  'Mobile Hibachi Chef in',    // 14 — Springdale
  'Mobile Hibachi Chef in',    // 15 — Moab
  'Hibachi at Home in',        // 16 — Cedar City
]

const UT_THEME_H1_PREFIXES = [
  'Private Hibachi Chef in', // v=0 Salt Lake Valley Executive generic
  'Hibachi at Home in',      // v=1 Wasatch Front Family generic
  'Private Hibachi Chef in', // v=2 Park City Ski Luxury generic
  'Hibachi at Home in',      // v=3 Mountain Resort Communities generic
  'Hibachi at Home in',      // v=4 Southern Utah Tourism generic
]

// ── Custom meta overrides ──────────────────────────────────────────────────────
const UT_CUSTOM_META = {
  'salt-lake-city': {
    title: 'Private Hibachi Chef in Salt Lake City, UT | Executive & Corporate Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Salt Lake City, UT for executive dinners, corporate team events, and milestone celebrations. Full setup & cleanup. From $60/adult.',
  },
  'draper': {
    title: 'Hibachi Catering in Draper, UT | Silicon Slopes Corporate Events | Hibachi Connect',
    desc:  'Book hibachi catering for your Draper corporate team dinner or private gathering. Certified teppanyaki chef, full setup & cleanup. From $60/adult. Serving Silicon Slopes.',
  },
  'holladay': {
    title: 'Private Hibachi Chef in Holladay, UT | Estate & Executive Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Holladay, UT for estate dinners and milestone celebrations. Premium protein upgrades. Full setup & cleanup. From $60/adult.',
  },
  'lehi': {
    title: 'Hibachi Catering in Lehi, UT | Silicon Slopes Corporate Events | Hibachi Connect',
    desc:  'Book hibachi catering for your Lehi corporate team dinner or private gathering. Certified teppanyaki chef, full setup & cleanup. From $60/adult. Serving Silicon Slopes.',
  },
  'provo': {
    title: 'Hibachi at Home in Provo, UT | BYU Graduation & Family Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Provo, UT for BYU graduation parties and backyard celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'park-city': {
    title: 'Private Hibachi Chef in Park City, UT | Ski Luxury & Sundance Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Park City, UT for ski vacation dinners, Sundance season events, and luxury estate entertaining. Premium proteins. From $60/adult.',
  },
  'midway': {
    title: 'Private Hibachi Chef in Midway, UT | Destination Wedding Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Midway, UT for destination wedding welcome dinners, Zermatt Resort events, and luxury mountain estate dining. From $60/adult.',
  },
  'moab': {
    title: 'Mobile Hibachi Chef in Moab, UT | Arches & Canyonlands Vacation Dining | Hibachi Connect',
    desc:  'Book a mobile hibachi chef in Moab, UT for vacation rental group dinners near Arches and Canyonlands National Parks. Self-contained setup. From $60/adult.',
  },
  'st-george': {
    title: 'Hibachi at Home in St. George, UT | Family Reunion & Vacation Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in St. George, UT for family reunions, vacation rental dinners, and Zion-area celebrations. Full setup & cleanup. From $60/adult.',
  },
}

// ── Main builder ──────────────────────────────────────────────────────────────
export function getUtahCityData(citySlug, cityName) {
  const major       = UT_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getUTVariantIndex(citySlug)
  const theme       = UT_IMAGE_THEMES[v]
  const displayName = UT_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Utah',
    stateAbbr:    'UT',
    stateSlug:    'utah',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: UT_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: UT_NEARBY_MAJOR[v],
    localHighlights:   UT_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: UT_OCCASIONS[v],
    faqSet:            UT_FAQ_SETS[v](displayName),
    testimonials:      UT_TESTIMONIALS[v],
    // INTRO_VARIANTS: 345–349 = UT generic, 350–366 = UT city-specific (350–354 live, Batch 1)
    uniqueIntroVariant:  (major?.profileIdx != null) ? 350 + major.profileIdx : 345 + v,
    uniqueWhyUsVariant:  v % 5,
    // CLOSING_VARIANTS: 345–349 = UT generic, 350–366 = UT city-specific (350–354 live, Batch 1)
    uniqueClosingVariant: (major?.profileIdx != null) ? 350 + major.profileIdx : 345 + v,
    // H1 prefix for CityHero
    heroH1Prefix: (major?.profileIdx != null && UT_PROFILE_H1_PREFIXES[major.profileIdx])
      ? UT_PROFILE_H1_PREFIXES[major.profileIdx]
      : UT_THEME_H1_PREFIXES[v],
    // Custom meta overrides
    ...(UT_CUSTOM_META[citySlug]
      ? { metaTitle: UT_CUSTOM_META[citySlug].title, metaDescription: UT_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getUtHowItWorks(citySlug) {
  const major = UT_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getUTVariantIndex(citySlug)
  return UT_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getUtSectionVariant(citySlug) {
  const major = UT_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getUTVariantIndex(citySlug)
  return UT_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getUtCityImage(citySlug) {
  return UT_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getUtSupportImages(citySlug, variantIdx) {
  if (UT_SUPPORT_IMAGES[citySlug]) return UT_SUPPORT_IMAGES[citySlug]
  const major = UT_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getUTVariantIndex(citySlug)
  return UT_SUPPORT_FALLBACKS[v]
}

// ── Blog posts (theme arrays × 3 posts) ────────────────────────────────────────
// Dispatch note: getUtBlogPosts is called with `variant` = cityData.variant = v % 3,
// so only indices 0–2 are ever selected (Theme 3 reuses index 0, Theme 4 reuses index 1) —
// same shared-variant convention used across every other state's blog dispatcher.
const UT_BLOG_POSTS = [
  // Theme 0 — Salt Lake Valley Executive (variant 0; also serves Theme 3 Mountain Resort)
  [
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: Which Is Worth It?',                      excerpt: 'Salt Lake Valley executive hosts — why private hibachi at your property beats every downtown restaurant option.', date: '2025-01-22' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                             excerpt: 'A full pricing breakdown for Salt Lake Valley hibachi events — what\'s included and premium protein options.', date: '2025-01-15' },
    { slug: 'hibachi-catering-corporate-events',    title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',            excerpt: 'Silicon Slopes teams in Draper and Salt Lake City — why a private hibachi chef beats every corporate dinner format.', date: '2025-03-15' },
  ],
  // Theme 1 — Wasatch Front Family (variant 1; also serves Theme 4 Southern Utah Tourism)
  [
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',              excerpt: 'Everything Utah County and Wasatch Front hosts need before the private hibachi chef arrives.', date: '2025-02-28' },
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',           excerpt: 'Lehi, Provo, and Orem families — how to plan a backyard hibachi party that outclasses any Utah Valley restaurant.', date: '2025-04-08' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',            excerpt: 'A first-timer\'s guide for Utah hosts — what happens from booking to cleanup at a private hibachi event.', date: '2024-11-20' },
  ],
  // Theme 2 — Park City Ski Luxury (variant 2)
  [
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: The Park City Verdict',                   excerpt: 'Why Park City ski estate hosts choose private hibachi over every Main Street restaurant reservation.', date: '2025-01-22' },
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',            excerpt: 'Why Park City bachelorette weekends are choosing private hibachi at their Old Town or Deer Valley rental.', date: '2025-02-10' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                             excerpt: 'A full pricing breakdown for Park City and Summit County hibachi events — what\'s included and premium options.', date: '2025-01-15' },
  ],
]

export function getUtBlogPosts(variant, count) {
  return UT_BLOG_POSTS[variant % UT_BLOG_POSTS.length].slice(0, count)
}

// ── City-specific intros (UT city-specific, profileIdx 0–4 live — Batch 1) ────
export const UT_CITY_INTROS = [
  // 350 — Salt Lake City (profileIdx 0)
  {
    headline: () => `Private Hibachi Chef in Salt Lake City`,
    opening:  () =>
      `Salt Lake City runs on a rare mix of state government, higher education, and a fast-growing tech sector — the Utah State Capitol on Capitol Hill, the University of Utah campus and Huntsman-adjacent research corridor, and the downtown finance and tech firms that have made this city one of the fastest-growing metros in the country. Private hibachi at your Salt Lake City property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance that pairs naturally with the entertaining standard of Sugar House bungalows, Avenues rowhouses, and downtown rooftop properties alike. Executive team dinners, University of Utah graduation parties, and milestone celebrations are our most common Salt Lake City bookings.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — including filet mignon, lobster tail, and wagyu upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, rooftop, or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For Salt Lake City gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Salt Lake City events book 2–4 weeks ahead — spring through summer fills fastest as the Salt Lake Valley's entertaining season peaks. Serving Salt Lake City and all of the Salt Lake Valley — Sandy, Holladay, Millcreek, South Jordan, Draper, and surrounding Salt Lake County communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 351 — Sandy (profileIdx 1)
  {
    headline: () => `Hibachi at Home in Sandy`,
    opening:  () =>
      `Sandy is one of the Salt Lake Valley's largest and most established communities — home to America First Field and Real Salt Lake, the Hale Centre Theatre arts scene, the Cairns golf course, and the Dimple Dell Regional Park trail corridor that has made this city a favorite for growing families and corporate professionals alike. Hibachi at home in Sandy brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance built for the kind of crowd that shows up at a Sandy graduation party or summer backyard gathering — families driving in from across the valley, generations gathered on a backyard lawn, everyone wanting the same thing: a dinner they'll be referencing when the next occasion comes up.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Sandy graduation events over 25, we bring dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Sandy graduation season (May–June) and summer weekends book 2–3 weeks ahead. Serving Sandy and all of the Salt Lake Valley — Salt Lake City, Draper, Holladay, South Jordan, Cottonwood Heights, and surrounding Salt Lake County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 352 — Draper (profileIdx 2)
  {
    headline: () => `Hibachi Catering in Draper`,
    opening:  () =>
      `Draper anchors the northern end of Silicon Slopes — the tech corridor along the I-15 spine that has made Utah one of the fastest-growing tech economies in the country. Corporate campuses, the Corner Canyon trail system, the hillside luxury homes of SunCrest, and the Point of the Mountain redevelopment corridor all define modern Draper. Hibachi catering in Draper brings a certified teppanyaki chef to your corporate outdoor venue, SunCrest hillside property, or suburban backyard with the full setup and a live performance that elevates any professional gathering or private celebration into something your guests are still talking about the following quarter.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, backyard, or corporate outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Draper corporate events over 25, we bring two chef stations. Full cleanup when dinner is done. Near Corner Canyon and the Point of the Mountain corridor — our Draper coverage is complete.`,
    closing:  () =>
      `Draper corporate and weekend events book 2–4 weeks ahead — spring and early summer fill fastest along Silicon Slopes. Serving Draper and all of the Salt Lake Valley — Sandy, South Jordan, Lehi, Bluffdale, Cottonwood Heights, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 353 — Holladay (profileIdx 3)
  {
    headline: () => `Private Hibachi Chef in Holladay`,
    opening:  () =>
      `Holladay is one of the Salt Lake Valley's most exclusive small cities — the Cottonwood Country Club, the Olympus Cove foothill estates at the base of Mount Olympus, and the Holladay Village Plaza that anchors a community defined by high household income and understated luxury. Private hibachi at your Holladay property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance calibrated for the Salt Lake Valley's highest standard of private entertaining. The dinner Holladay hosts remember is the one that happened on their own terrace — not the same restaurant reservation everyone else made.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and wagyu upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, rear patio, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For Holladay estate gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Holladay estate events book 3–4 weeks ahead — spring through summer fills fastest. Serving Holladay and all of the Salt Lake Valley — Salt Lake City, Sandy, Millcreek, Cottonwood Heights, Murray, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 354 — South Jordan (profileIdx 4)
  {
    headline: () => `Hibachi at Home in South Jordan`,
    opening:  () =>
      `South Jordan is one of the fastest-growing cities in the Salt Lake Valley — anchored by the Daybreak master-planned community and its Oquirrh Lake shoreline, the shopping and entertainment corridor at the District, and a young, family-heavy population that has made this one of Utah's most active graduation and birthday party markets. Hibachi at home in South Jordan brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any South Jordan backyard or Daybreak lakeside gathering into the evening your guests plan the next occasion around.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes in your backyard or patio space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large South Jordan gatherings over 25, we bring two chef stations running in parallel. Complete cleanup when dinner is done.`,
    closing:  () =>
      `South Jordan weekend events book 2–3 weeks ahead. Graduation season (May–June) fills fastest. Serving South Jordan and all of the Salt Lake Valley — Draper, Sandy, Riverton, West Jordan, Herriman, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 355 — Lehi (profileIdx 5)
  {
    headline: () => `Hibachi Catering in Lehi`,
    opening:  () =>
      `Lehi is the core of Silicon Slopes — Adobe's second-largest global campus, Ancestry.com's headquarters, Vivint Smart Home, and dozens of growing startups along the Traverse Mountain corridor have made this once-quiet farming town one of the fastest-growing tech economies in the country. Thanksgiving Point's gardens, farm country, and event spaces sit alongside new corporate campuses and master-planned neighborhoods full of young tech families. Hibachi catering in Lehi brings a certified teppanyaki chef to your corporate outdoor venue, Traverse Mountain property, or backyard with the full setup and a live performance that elevates any team dinner or private celebration into something your guests are still talking about the following quarter.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, backyard, or corporate outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For Lehi corporate events over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Lehi corporate and weekend events book 2–4 weeks ahead — spring and early summer fill fastest along Silicon Slopes. Serving Lehi and all of northern Utah County — Draper, American Fork, Saratoga Springs, Highland, Eagle Mountain, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 356 — Provo (profileIdx 6)
  {
    headline: () => `Hibachi at Home in Provo`,
    opening:  () =>
      `Provo runs on Brigham Young University — 33,000-plus students, a graduation season every April that books out every restaurant in Utah County for two weeks straight, and a fast-growing "Silicon Slopes South" tech scene that has brought young families and startups to the neighborhoods surrounding campus. Hibachi at home in Provo brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance built for the kind of crowd that shows up at a Provo graduation party — families driving in from across the Mountain West, generations gathered on a backyard lawn, everyone wanting the same thing: a dinner they'll be referencing when the next occasion comes up.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For large Provo graduation events over 25, we bring dual chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Provo graduation season (April) books 3–4 weeks ahead — every other Provo weekend books 2–3 weeks out. Serving Provo and all of Utah Valley — Orem, American Fork, Springville, Spanish Fork, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 357 — Orem (profileIdx 7)
  {
    headline: () => `Backyard Hibachi in Orem`,
    opening:  () =>
      `Orem sits between Provo and American Fork as one of Utah Valley's densest family communities — Utah Valley University's growing campus, the SCERA Park and Shell amphitheater arts scene, and a mix of established neighborhoods and new construction that has made this one of Utah County's most active backyard-party markets. Backyard hibachi in Orem brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any Orem birthday party, graduation dinner, or neighborhood gathering into the evening your guests still reference when the next occasion comes up.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Orem gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Orem weekend events book 2–3 weeks ahead. Graduation season (April–May) fills fastest. Serving Orem and all of Utah Valley — Provo, American Fork, Lindon, Pleasant Grove, Vineyard, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 358 — American Fork (profileIdx 8)
  {
    headline: () => `Backyard Hibachi in American Fork`,
    opening:  () =>
      `American Fork sits at the mouth of American Fork Canyon — the gateway to Timpanogos Cave National Monument, a growing bedroom community for the Silicon Slopes workforce in nearby Lehi and Draper, and a family-first culture that shows up every summer at the American Fork Amphitheater and the city's crowded backyard party calendar. Backyard hibachi in American Fork brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that gives any American Fork birthday party, graduation dinner, or neighborhood celebration a centerpiece no local restaurant can match.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large American Fork gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `American Fork weekend events book 2–3 weeks ahead. Graduation season and summer Saturdays fill fastest. Serving American Fork and all of northern Utah County — Lehi, Highland, Pleasant Grove, Orem, Alpine, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 359 — Layton (profileIdx 9)
  {
    headline: () => `Hibachi at Home in Layton`,
    opening:  () =>
      `Layton is Davis County's largest city and one of Utah's most concentrated military communities — Hill Air Force Base sits at its doorstep, employing tens of thousands and anchoring a culture of homecomings, promotions, and family milestones celebrated with real intention. Hibachi at home in Layton brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance built for the occasions that define this community: welcome-home dinners, retirement celebrations, graduation parties, and the neighborhood gatherings that fill Ellison Park and the streets around Layton Hills Mall every summer weekend.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Layton gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Layton weekend events book 2–3 weeks ahead. Military homecomings and summer Saturdays fill fastest. Serving Layton and all of Davis County — Ogden, Kaysville, Farmington, Clearfield, Syracuse, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 360 — Park City (profileIdx 10)
  {
    headline: () => `Private Hibachi Chef in Park City`,
    opening:  () =>
      `Park City is Utah's most storied ski address — Deer Valley Resort, Park City Mountain (the largest ski resort in the country), Canyons Village, and the historic Old Town Main Street that hosts the Sundance Film Festival every January. Ski-in/ski-out estates near Jordanelle Reservoir and luxury condos throughout the resort corridor draw guests who expect the same standard of excellence at dinner that they find on the mountain. Private hibachi at your Park City property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance that pairs as well with a powder day as it does with a summer evening on the deck.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — including filet mignon, lobster tail, and wagyu upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, great room, or ski-property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For Park City gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Park City winter and Sundance-season dates book 4–6 weeks ahead — summer events can often be booked 2–3 weeks out. Serving Park City and all of Summit County — Deer Valley, Canyons Village, Heber City, Midway, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 361 — Heber City (profileIdx 11)
  {
    headline: () => `Hibachi at Home in Heber City`,
    opening:  () =>
      `Heber City anchors the Heber Valley — Deer Creek Reservoir, Jordanelle Reservoir shared with neighboring Park City, Wasatch Mountain State Park, and the historic Heber Valley Railroad steam train that has made this one of the fastest-growing vacation-home and bedroom-community markets in the Wasatch Back. Hibachi at home in Heber City brings a certified teppanyaki chef to your lake property, mountain home, or backyard with the full setup and a live-fire cooking performance that turns any Heber Valley gathering — family reunion, vacation home dinner, or holiday celebration — into the evening your guests remember longest.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, backyard, or lake-property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Heber Valley gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Heber City events book 3–4 weeks ahead — wedding season and ski holidays fill fastest. Serving Heber City and the Heber Valley — Park City, Midway, Kamas, Charleston, and surrounding Wasatch County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 362 — Midway (profileIdx 12)
  {
    headline: () => `Private Hibachi Chef in Midway`,
    opening:  () =>
      `Midway is Utah's most distinctive small resort town — the Swiss-themed Zermatt Resort that anchors one of the state's most in-demand wedding destinations, the Homestead Crater's geothermal hot spring, and the Soldier Hollow Nordic venue from the 2002 Winter Olympics, all set against the Heber Valley's mountain backdrop. Private hibachi at your Midway property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance calibrated for wedding welcome dinners, rehearsal dinners, and luxury estate entertaining. The evening your wedding guests remember is the one that happened the night before, at the resort property, with the chef performing just for your group.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, and premium upgrades available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your resort patio, estate grounds, or backyard. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your property is immaculate when the chef leaves.`,
    closing:  () =>
      `Midway wedding-season and holiday dates book 4–6 weeks ahead — reserve early for June through September weekends. Serving Midway and the Heber Valley — Heber City, Park City, Wallsburg, and surrounding Wasatch County communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 363 — St. George (profileIdx 13)
  {
    headline: () => `Hibachi at Home in St. George`,
    opening:  () =>
      `St. George is Utah's red-rock boomtown — the Entrada golf and luxury home community, Snow Canyon State Park's slot canyons, the new Desert Color resort district with its private lagoon, Sand Hollow's reservoir and dune fields, and the Tuacahn outdoor amphitheater that draws visitors from across the Southwest. A fast-growing retiree population and a steady stream of Zion-bound family trips have made this one of the most active vacation and reunion markets in the state. Hibachi at home in St. George brings a certified teppanyaki chef to your vacation rental, resort property, or backyard with the full setup and a live-fire cooking performance that anchors any family reunion or milestone trip.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, backyard, or rental-property outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large St. George family reunions over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `St. George peak season (spring and fall) books 2–3 weeks ahead. Serving St. George and southwest Utah — Washington, Ivins, Santa Clara, Hurricane, Springdale, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 364 — Springdale (profileIdx 14)
  {
    headline: () => `Mobile Hibachi Chef in Springdale`,
    opening:  () =>
      `Springdale sits directly at the entrance to Zion National Park — a small town built entirely around the canyon's red cliffs, with vacation rentals and boutique lodges that fill every night of the spring and fall hiking season. Mobile hibachi in Springdale brings a certified teppanyaki chef, fully self-contained, to your rental property with everything included — the grill, propane, proteins, and a live-fire performance that turns the night before or after a day on the Narrows or Angels Landing into the best meal of the trip.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your rental patio or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan with Zion's canyon walls as the backdrop. Full cleanup when dinner is done.`,
    closing:  () =>
      `Springdale peak season (spring and fall) books 2–3 weeks ahead. Serving Springdale and the Zion gateway — Hurricane, La Verkin, Rockville, St. George, and surrounding southwest Utah communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 365 — Moab (profileIdx 15)
  {
    headline: () => `Mobile Hibachi Chef in Moab`,
    opening:  () =>
      `Moab is the basecamp for two national parks — Arches and Canyonlands — and one of the country's premier mountain biking and off-roading destinations, with the Colorado River running through Spanish Valley and a vacation rental market that fills every weekend from spring through fall. Mobile hibachi in Moab brings a certified teppanyaki chef, fully self-contained, to your rental property or group house with everything included — the grill, propane, proteins, and a live-fire performance that turns a day of Slickrock Trail riding or canyon hiking into the best night of the trip.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your rental patio or backyard. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan under the Moab desert sky. For large group trips over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Moab peak season (spring and fall) books 2–3 weeks ahead. Serving Moab and Spanish Valley — Castle Valley, Green River, La Sal, and surrounding southeast Utah communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 366 — Cedar City (profileIdx 16)
  {
    headline: () => `Hibachi at Home in Cedar City`,
    opening:  () =>
      `Cedar City is southern Utah's university and arts hub — Southern Utah University's growing campus, the Tony Award-winning Utah Shakespeare Festival that draws visitors from across the country every summer, and the gateway position to Cedar Breaks National Monument and Brian Head Resort that makes this a year-round destination town. Hibachi at home in Cedar City brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance built for SUU family weekends, festival-season gatherings, and the backyard milestones that define this community.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your backyard, patio, or outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Cedar City gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Cedar City events book 2–3 weeks ahead — Shakespeare Festival season (summer) and SUU family weekends fill fastest. Serving Cedar City and surrounding Iron County — St. George, Parowan, Enoch, Brian Head, and nearby communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── Intro variants (UT generic 345–349, one per theme) ────────────────────────
export const UT_INTRO_VARIANTS = [
  // 345 — Salt Lake Valley Executive
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Executive Entertaining for the Salt Lake Valley`,
    opening:  (city, state) =>
      `${city} sits at the center of Utah's fastest-growing tech and business corridor — the Silicon Slopes companies, the state government and university institutions, and the occasions that require something genuinely above the ordinary. Private hibachi at your ${city} property brings a certified teppanyaki chef to your outdoor space with the full setup, hand-selected premium proteins, and a live-fire performance that earns its place on any Salt Lake Valley patio. Executives, tech leadership, and university families all celebrate milestones here — and the dinner they remember is the one that happened at someone's home.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — including filet mignon, lobster tail, and wagyu upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, backyard, or patio. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} events book 2–4 weeks ahead — spring through summer fills fastest as the Salt Lake Valley's entertaining season peaks. Starting at $60 per adult, $600 event minimum. Premium protein packages available for any ${city} occasion. Most quotes confirmed same day.`,
  },
  // 346 — Wasatch Front Family
  {
    headline: (city) => `Hibachi at Home in ${city}: The Backyard Dinner the Wasatch Front Has Been Waiting For`,
    opening:  (city, state) =>
      `${city} knows how to celebrate. The backyard culture here runs through graduation season in June, the birthday milestones that bring relatives in from across Utah, and the summer evenings that finally feel right for an outdoor gathering. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup — propane grill, all proteins, and a live-fire cooking performance that turns any Wasatch Front backyard gathering into the evening your guests still reference at the next occasion.`,
    middle:   (city, state) =>
      `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for large graduations, family reunions, and birthday parties are our most common format across the Wasatch Front.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out during peak season. Graduation season (May–June) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 347 — Park City Ski Luxury
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Ski Country Entertaining at Its Best`,
    opening:  (city, state) =>
      `${city} draws guests who know the difference between a good evening and an exceptional one — the ski-in/ski-out estates, the Sundance-season energy, and the resort properties where the right dinner becomes the memory of the trip. Private hibachi at your ${city} property brings a certified teppanyaki chef to your outdoor space with hand-selected premium proteins and a live-fire performance that pairs as well with a powder day as it does with a summer mountain evening.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, and premium upgrades available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or ski-property grounds. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your property is immaculate when the chef leaves.`,
    closing:  (city, state) =>
      `${city} events book 4–6 weeks ahead — winter and Sundance season fills fastest. Starting at $60 per adult, $600 event minimum. Premium protein packages available. Most quotes returned same day.`,
  },
  // 348 — Mountain Resort Communities
  {
    headline: (city) => `Hibachi at Home in ${city}: Wasatch Back Private Dining`,
    opening:  (city, state) =>
      `${city} has always found a way to celebrate in the right setting — the cabin and lake-property backdrop that makes any outdoor gathering feel more intentional, the destination wedding culture of the Heber Valley, and the holiday reunions that mark milestones with the energy they deserve. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any gathering in the Wasatch Back into the evening your guests are planning around when the next occasion comes up.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large ${city} gatherings over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} events book 3–4 weeks ahead. Wedding season and ski holidays fill fastest. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 349 — Southern Utah Tourism
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for Southern Utah Vacations`,
    opening:  (city, state) =>
      `${city} draws travelers chasing the red rock — the national park trips, the multi-generational family reunions, and the vacation rental gatherings that bring everyone to the same patio. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with the full setup and a live cooking performance that matches the occasion. No crowded restaurant, no reservation battle. The chef comes to you.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For large Southern Utah gatherings, dual-station capacity handles 25–60+ guests. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} peak season events book 2–3 weeks ahead. Family reunions, national park vacation dinners, and destination celebrations are our most common Southern Utah bookings. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
]

// ── City-specific closings (UT city-specific, profileIdx 0–4 live — Batch 1) ──
export const UT_CITY_CLOSINGS = [
  // 350 — Salt Lake City (profileIdx 0)
  {
    headline: (city) => `Salt Lake City's Private Dining Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Salt Lake City home or property. Filet mignon, lobster tail, premium proteins. Full setup, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `Salt Lake City spring and summer events book 2–4 weeks ahead. Reserve your evening now.`,
  },
  // 351 — Sandy (profileIdx 1)
  {
    headline: (city) => `Sandy's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Sandy home, deck, or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Sandy graduation weekends (May–June) and summer Saturdays book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 352 — Draper (profileIdx 2)
  {
    headline: (city) => `Draper's Corporate Dinner Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef for your Draper team dinner or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Draper Silicon Slopes and weekend events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 353 — Holladay (profileIdx 3)
  {
    headline: (city) => `Holladay's Private Dining Standard — Reserve Your Evening`,
    sub:      (city) => `A certified teppanyaki chef at your Holladay property — Olympus Cove, Cottonwood, or Holladay Village. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Holladay estate events book 3–4 weeks ahead. Reserve your evening now.`,
  },
  // 354 — South Jordan (profileIdx 4)
  {
    headline: (city) => `South Jordan's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your South Jordan or Daybreak home. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `South Jordan graduation weekends and summer dates book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 355 — Lehi (profileIdx 5)
  {
    headline: (city) => `Lehi's Corporate Dinner Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef for your Lehi team dinner or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Lehi Silicon Slopes and weekend events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 356 — Provo (profileIdx 6)
  {
    headline: (city) => `Provo's Graduation Dinner Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Provo home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `BYU graduation weekend (April) books 3–4 weeks out. All other Provo events book 2–3 weeks ahead.`,
  },
  // 357 — Orem (profileIdx 7)
  {
    headline: (city) => `Orem's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Orem home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Orem graduation season and summer Saturdays book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 358 — American Fork (profileIdx 8)
  {
    headline: (city) => `American Fork's Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your American Fork home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `American Fork graduation season and summer Saturdays book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 359 — Layton (profileIdx 9)
  {
    headline: (city) => `Layton's Best Family Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Layton home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Layton military homecomings and summer Saturdays book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 360 — Park City (profileIdx 10)
  {
    headline: (city) => `Park City's Ski Luxury Dining Standard — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Park City ski estate, condo, or resort property. Filet mignon, lobster tail, premium proteins. Full setup, complete cleanup. From $60/adult.`,
    urgency:  `Park City winter and Sundance-season dates book 4–6 weeks ahead. Reserve your evening now.`,
  },
  // 361 — Heber City (profileIdx 11)
  {
    headline: (city) => `Heber City's Best Lake Property Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Heber Valley lake home, cabin, or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Heber City wedding season and ski holidays book 3–4 weeks ahead. Reserve your date now.`,
  },
  // 362 — Midway (profileIdx 12)
  {
    headline: (city) => `Midway's Destination Wedding Dining Standard — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Midway resort property or estate. Premium proteins available. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Midway wedding-season dates book 4–6 weeks ahead. Reserve your evening now.`,
  },
  // 363 — St. George (profileIdx 13)
  {
    headline: (city) => `St. George's Best Vacation Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your St. George vacation rental, resort property, or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `St. George peak season books 2–3 weeks ahead. Reserve your date now.`,
  },
  // 364 — Springdale (profileIdx 14)
  {
    headline: (city) => `Springdale's Best Zion Trip Dinner — Reserve Your Chef`,
    sub:      (city) => `A fully self-contained mobile hibachi chef at your Springdale vacation rental. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Springdale peak season books 2–3 weeks ahead. Confirm your date now.`,
  },
  // 365 — Moab (profileIdx 15)
  {
    headline: (city) => `Moab's Best National Park Trip Dinner — Reserve Your Chef`,
    sub:      (city) => `A fully self-contained mobile hibachi chef at your Moab vacation rental. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Moab peak season books 2–3 weeks ahead. Confirm your date now.`,
  },
  // 366 — Cedar City (profileIdx 16)
  {
    headline: (city) => `Cedar City's Best Celebration Dinner — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef at your Cedar City home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Cedar City Shakespeare Festival season and SUU family weekends book 2–3 weeks ahead. Reserve your date now.`,
  },
]

// ── Closing variants (UT generic 345–349, one per theme) ──────────────────────
export const UT_CLOSING_VARIANTS = [
  // 345 — Salt Lake Valley Executive
  {
    headline: (city) => `Your ${city} Dinner Starts Here`,
    sub:      (city) => `A certified teppanyaki chef. Premium proteins including filet mignon and lobster tail. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Salt Lake Valley dates book 2–4 weeks out. Reserve your evening now.`,
  },
  // 346 — Wasatch Front Family
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `Wasatch Front weekends book 2–3 weeks ahead. Secure your date now.`,
  },
  // 347 — Park City Ski Luxury
  {
    headline: (city) => `The ${city} Evening Your Trip Deserves`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} ski property or estate. Premium proteins, live teppanyaki, complete cleanup. From $60 per adult.`,
    urgency:  `Park City winter and Sundance dates fill fast. Reserve your evening now.`,
  },
  // 348 — Mountain Resort Communities
  {
    headline: (city) => `${city}'s Best Outdoor Dinner — Reserve Your Chef`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full mountain dinner show, complete cleanup. From $60/adult in ${city}.`,
    urgency:  `Wasatch Back wedding and ski season dates book 3–4 weeks ahead. Confirm your date now.`,
  },
  // 349 — Southern Utah Tourism
  {
    headline: (city) => `${city}'s Most Memorable Trip Dinner — Reserve Your Date`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `Southern Utah peak season dates fill quickly. Confirm your event now.`,
  },
]
