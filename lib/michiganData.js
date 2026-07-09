// =============================================================================
// lib/michiganData.js — Michigan Expansion (Batch 1)
// 5 cities · 6 geographic themes
// Theme 0: Detroit Metro Luxury (Bloomfield Hills, Birmingham)
// Theme 1: Detroit Metro Corporate/Professional (Troy, Royal Oak, Novi)
// Theme 2: Detroit Metro Suburban (Ann Arbor, Dearborn, Canton, Sterling Heights, Rochester Hills)
// Theme 3: West Michigan (Grand Rapids, Kalamazoo, Lansing)
// Theme 4: Lake Michigan Shore (Holland, Saugatuck, South Haven)
// Theme 5: Northern Michigan Destination (Traverse City, Petoskey)
//
// INTRO_VARIANTS indices:  249–254 MI generic · 255–259 MI city-specific (Batch 1)
// CLOSING_VARIANTS indices: 249–254 MI generic · 255–259 MI city-specific (Batch 1)
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getMIVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 6
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const MI_HERO_SUBTITLES = [
  (city) => `Estate Entertaining · Auto Executive Events · Private Dining · Serving ${city} & Detroit Metro`,
  (city) => `Corporate Team Dinners · Auto Corridor Events · Professional Entertaining · Serving ${city} & Greater Detroit`,
  (city) => `Graduation Parties · Diverse Milestone Celebrations · Backyard Dining · Serving ${city} & Detroit Suburbs`,
  (city) => `Corporate & Family Events · University Graduations · Backyard Dining · Serving ${city} & West Michigan`,
  (city) => `Lake House Events · Bachelorette Weekends · Vacation Rental Dining · Serving ${city} & Lake Michigan Shore`,
  (city) => `Resort Property Dining · Cottage Entertaining · Destination Events · Serving ${city} & Northern Michigan`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const MI_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Detroit Metro Luxury
  (city) => [
    `Ultra-premium estate entertaining for ${city}'s auto executives and professional elite`,
    'Filet mignon, lobster tail, wagyu, and premium protein upgrades — the standard for Detroit luxury events',
    `${city} estate properties and estate-level outdoor spaces ideal for private teppanyaki dining`,
    `Estate events in the Detroit Metro Luxury market book 3–4 weeks ahead`,
    `Full setup and cleanup at your ${city} estate or private property — nothing left behind`,
    'Certified teppanyaki chef performing exclusively for your guest list — complete discretion guaranteed',
  ],
  // Theme 1 — Detroit Metro Corporate/Professional
  (city) => [
    `Corporate team dinners, client entertainment, and automotive industry events throughout ${city}`,
    'The Detroit corridor — automotive executives, professional services, tech companies, and medical systems',
    `${city} corporate events and weekend gatherings book 2–4 weeks ahead`,
    `Diverse community graduation and milestone events are our biggest ${city} market`,
    'Full setup and cleanup included — townhouse patio, suburban backyard, or corporate outdoor space',
    'Premium proteins, full live teppanyaki performance, and dual-station capacity for 25–60+ guests',
  ],
  // Theme 2 — Detroit Metro Suburban
  (city) => [
    `Backyard hibachi for ${city}'s diverse community — graduation parties, milestones, and family celebrations`,
    'South Asian, Arab-American, and multicultural communities in the Detroit suburbs celebrate milestones with intention',
    `${city} and surrounding Macomb/Oakland/Wayne County communities all served within standard radius`,
    `Graduation season (May–June) and spring events in ${city} book 3–4 weeks ahead`,
    'Dual-station capacity for large gatherings of 25–60+ guests — standard for Michigan graduation parties',
    'Full setup and cleanup — you provide the backyard, we handle everything else',
  ],
  // Theme 3 — West Michigan
  (city) => [
    `Corporate team dinners, graduation parties, and family celebrations throughout ${city} and West Michigan`,
    'Grand Rapids corporate corridor, West Michigan university graduation markets, and community celebrations',
    `${city} and the greater Grand Rapids metro area all served within standard radius`,
    `Graduation season (May–June) books 3–4 weeks ahead across West Michigan`,
    'Full setup and cleanup — you provide the outdoor space, we handle everything else',
    'Dual-station capacity for large West Michigan gatherings of 25–60+ guests',
  ],
  // Theme 4 — Lake Michigan Shore
  (city) => [
    `Lake house and vacation rental hibachi events throughout ${city} and the Lake Michigan shoreline`,
    `Bachelorette weekends, family reunions, and summer lake house group dinners are our biggest ${city} bookings`,
    `Saugatuck, South Haven, Holland — the full Lake Michigan vacation corridor served`,
    `Summer Lake Michigan vacation dates book 3–4 weeks ahead — secure yours early`,
    `Full setup and cleanup at your ${city} lake house, vacation rental, or outdoor deck`,
    'Private chef comes to your vacation rental — no restaurant logistics, no driving, just the dinner',
  ],
  // Theme 5 — Northern Michigan Destination
  (city) => [
    `Cottage, resort, and destination property hibachi events throughout ${city} and Northern Michigan`,
    'Traverse City wine country, Petoskey resort community, Bay Harbor estates — premier Michigan destination markets',
    `Harbor Springs, Bay Harbor, and Mackinac Island nearby — ${city} sits at the center of Michigan's finest summer addresses`,
    `Northern Michigan summer dates book 3–4 weeks ahead — peak July–August fills fastest`,
    `Full setup and cleanup at your ${city} cottage, resort property, or vacation rental`,
    'Private chef travels to your Northern Michigan address — the destination dinner that makes the weekend',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const MI_OCCASIONS = [
  // Theme 0 — Detroit Metro Luxury
  ['Estate Dinner Parties', 'Auto Executive Events', 'Client Appreciation Dinners', 'Anniversary Celebrations', 'Milestone Birthday Dinners', 'Corporate Galas', 'Engagement Parties', 'Holiday Executive Dinners', 'Retirement Celebrations', 'Diplomatic Entertaining'],
  // Theme 1 — Detroit Metro Corporate/Professional
  ['Corporate Team Dinners', 'Client Entertainment Events', 'Graduation Parties', 'Birthday Parties', 'Bachelorette Weekends', 'Anniversary Dinners', 'Holiday Gatherings', 'Engagement Parties', 'Diverse Milestone Celebrations', 'Neighborhood Gatherings'],
  // Theme 2 — Detroit Metro Suburban
  ['Graduation Parties', 'Birthday Parties', 'Family Reunions', 'Anniversary Dinners', 'Community Celebrations', 'Bachelorette Weekends', 'Corporate Events', 'Holiday Dinners', 'Milestone Celebrations', 'Neighborhood Gatherings'],
  // Theme 3 — West Michigan
  ['Graduation Parties', 'Corporate Team Dinners', 'Birthday Parties', 'Family Reunions', 'Anniversary Dinners', 'Bachelorette Weekends', 'Community Celebrations', 'Holiday Gatherings', 'Retirement Parties', 'Neighborhood Events'],
  // Theme 4 — Lake Michigan Shore
  ['Bachelorette Weekends', 'Vacation Rental Group Dinners', 'Family Reunion Lake House Events', 'Anniversary Getaways', 'Birthday Celebrations', 'Summer Group Events', 'Engagement Parties', 'Wedding Party Dinners', 'Summer Birthday Milestones', 'Lakefront Gatherings'],
  // Theme 5 — Northern Michigan Destination
  ['Cottage Estate Dinners', 'Resort Property Gatherings', 'Bachelorette Weekends', 'Anniversary Getaways', 'Family Reunion Summer Events', 'Birthday Milestone Dinners', 'Engagement Parties', 'Retirement Destination Dinners', 'Wine Country Estate Dinners', 'Corporate Retreat Events'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const MI_FAQ_SETS = [
  // Theme 0 — Detroit Metro Luxury
  (city) => [
    {
      q: `Can you set up hibachi at a Bloomfield Hills or ${city} estate property?`,
      a: `Absolutely — Bloomfield Hills and Birmingham estate properties are among our most requested Michigan setups. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most ${city} properties have ideal estate terraces, rear patios, or grounds that work perfectly. Premium protein upgrades including filet mignon, lobster tail, and wagyu are standard for any ${city} estate event.`,
    },
    {
      q: `Do you serve auto industry executives and corporate professionals in ${city}?`,
      a: `Yes — automotive executive entertaining, corporate client dinners, and high-discretion estate events are among our most common Detroit Metro bookings. We maintain full professionalism from arrival through complete cleanup. Your property remains exactly as it was when the chef arrived — no trace, no exception.`,
    },
    {
      q: `How far in advance should I book a ${city} estate event?`,
      a: `For estate and luxury events in the ${city} area, we recommend booking 3–4 weeks in advance. Spring and summer fill fastest — May and June when graduation season overlaps with outdoor entertaining season across the Detroit Metro. Premium event dates and large estate gatherings should be secured 4–6 weeks ahead.`,
    },
    {
      q: `What premium protein upgrades are available for ${city} estate dinners?`,
      a: `Full premium menu available for any Michigan estate event: filet mignon, lobster tail, Chilean sea bass, dry scallops, king shrimp, and A5 wagyu beef. Mix and match per guest at booking. Premium packages are the standard addition for Bloomfield Hills, Birmingham, and Grosse Pointe estate events.`,
    },
    {
      q: `Is there a travel fee for ${city} and surrounding Detroit Metro communities?`,
      a: `No extra travel fee for ${city}, Birmingham, Bloomfield Hills, Troy, Royal Oak, and most of the Detroit Metro. For locations more than 40 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you confirm.`,
    },
    {
      q: `Can you handle a large estate gathering in ${city} with 40+ guests?`,
      a: `Yes — for groups over 25, we bring two chef stations running simultaneously. Estate gatherings, large anniversary parties, and milestone events of 40–80 guests are among our most common Detroit luxury bookings. Full coordination handled end-to-end.`,
    },
  ],
  // Theme 1 — Detroit Metro Corporate/Professional
  (city) => [
    {
      q: `Can you set up hibachi in a ${city} backyard, townhouse patio, or corporate outdoor space?`,
      a: `Yes — ${city} suburban backyards, townhouse patios, and corporate outdoor spaces are among our most common Michigan setups. We need a flat outdoor area of at least 10×10 ft. Most ${city} residential properties and corporate outdoor venues meet this comfortably.`,
    },
    {
      q: `Do you serve automotive companies and corporate professionals near ${city}?`,
      a: `Yes — automotive firms, auto suppliers, technology companies, and professional services throughout the Detroit Metro corridor are among our most regular Michigan corporate clients. Troy's corporate parks and the broader Oakland County professional community make for some of our strongest recurring event bookings.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Weekend events in the ${city} area book 2–4 weeks ahead. Spring and early summer fill fastest — graduation season in May and June and the busy Detroit Metro event calendar mean securing your date early is essential. Corporate events with weekday flexibility can often be arranged 1–2 weeks ahead.`,
    },
    {
      q: `Can you handle large corporate dinners or graduation parties for ${city} families?`,
      a: `Absolutely — corporate team dinners and diverse community graduation parties are both major ${city} markets. For groups over 25, we bring two chef stations. South Asian, Arab-American, and other diverse communities throughout the Detroit suburbs frequently book dual-station events for 40–80+ guests.`,
    },
    {
      q: `Do you serve all Detroit Metro communities near ${city}?`,
      a: `Yes — we serve all of the Detroit Metro including ${city} and surrounding communities: Troy, Birmingham, Bloomfield Hills, Royal Oak, Novi, Canton, Northville, Plymouth, Farmington Hills, and all of Oakland and Macomb County. Most locations fall within our standard service radius with no extra travel fee.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Detroit Metro locations. For events more than 40 miles from our nearest chef base, a modest travel fee may apply — always disclosed upfront. Serving all of Oakland, Macomb, and Wayne County.`,
    },
  ],
  // Theme 2 — Detroit Metro Suburban
  (city) => [
    {
      q: `Do you serve the ${city} area and surrounding Detroit suburbs?`,
      a: `Yes — we cover all of the Detroit Metro including ${city}, Canton, Northville, Novi, Plymouth, Sterling Heights, and surrounding communities throughout Macomb, Oakland, and Wayne County. Most locations within 35 miles of metro Detroit fall within our standard service area.`,
    },
    {
      q: `Can you handle a large graduation party or multicultural celebration in ${city}?`,
      a: `Absolutely — multicultural graduation parties and family milestone celebrations are our most common ${city}-area bookings. For groups over 25, we bring two chef stations. Multigenerational gatherings with 40–80 guests are our most common Michigan suburban setup.`,
    },
    {
      q: `How far in advance should I book a ${city} weekend event?`,
      a: `For Friday and Saturday events in the ${city} area, booking 2–3 weeks ahead is recommended. During graduation season (May–June), 3–4 weeks is safer. Summer weekend dates fill quickly. Weekday events can often be arranged with 5–7 days' notice depending on chef availability.`,
    },
    {
      q: `Can you set up at a ${city} backyard, patio, or outdoor venue?`,
      a: `Yes — backyard events and outdoor venue setups work well across the Detroit suburbs. We need a flat area of at least 10×10 ft with vehicle access. Most Michigan residential properties and suburban backyards meet this easily.`,
    },
    {
      q: `Is private hibachi a good option for a diverse ${city} community celebration?`,
      a: `It's one of the best formats for it. The shared grill experience — every guest gathered at the same teppan, watching the same chef, sharing the same fire tricks — is culturally universally engaging. We serve South Asian, Arab-American, East Asian, and multicultural families throughout the Detroit suburbs for their biggest milestone occasions.`,
    },
    {
      q: `What do I need to provide for a ${city} backyard hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, rice, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included in every event.`,
    },
  ],
  // Theme 3 — West Michigan
  (city) => [
    {
      q: `Do you serve the ${city} area and all of West Michigan?`,
      a: `Yes — we serve ${city} and all of West Michigan including Grand Rapids, Ada, East Grand Rapids, Holland, Kalamazoo, Lansing, and surrounding communities. Most locations throughout the West Michigan region fall within our standard service area.`,
    },
    {
      q: `Can you handle large corporate events or graduation parties in ${city}?`,
      a: `Absolutely — West Michigan corporate team dinners and university graduation parties are among our most common bookings in this region. For groups over 25, we bring two chef stations. Events of 30–60+ guests are well within our West Michigan capacity.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `For weekend events in the ${city} area, booking 2–3 weeks ahead is recommended. University graduation season (May–June) and summer events fill fastest. Most West Michigan corporate events can be arranged 1–2 weeks ahead with weekday flexibility.`,
    },
    {
      q: `Can you set up at a ${city} backyard, outdoor venue, or corporate space?`,
      a: `Yes — backyard events, outdoor corporate venues, and patio setups work well throughout West Michigan. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most residential properties and corporate outdoor spaces in ${city} meet this easily.`,
    },
    {
      q: `Is private hibachi a good format for a large West Michigan family or community event?`,
      a: `Excellent. West Michigan has strong family celebration culture — the Dutch Reformed community, church community events, and the corporate celebrating culture here all value a format where everyone is together at the same experience. One chef, one crowd, one great evening. We scale from 10 to 60+ guests.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, rice, sauces, plates, chopsticks, and serving utensils. Full setup and complete cleanup included in every West Michigan event.`,
    },
  ],
  // Theme 4 — Lake Michigan Shore
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} lake house or vacation rental?`,
      a: `Absolutely — lake house and vacation rental setups along the Lake Michigan shore are among our most common summer bookings. We need a flat outdoor area of at least 10×10 ft with vehicle access to the property. Most ${city} vacation rental properties have decks, patios, or backyard spaces that work perfectly. Confirm the rental allows open-flame cooking — most residential settings do.`,
    },
    {
      q: `Do you serve bachelorette weekends and group vacation events near ${city}?`,
      a: `Yes — bachelorette weekends at Lake Michigan vacation rentals are one of our largest ${city}-area markets. Groups staying at Saugatuck, South Haven, and Holland vacation rentals book private hibachi as the anchor evening of their weekend. The chef comes to your rental, performs for your group, and handles complete cleanup — no restaurant logistics, no driving.`,
    },
    {
      q: `How far in advance should I book a ${city} summer lake house event?`,
      a: `For summer Lake Michigan vacation dates, we recommend booking 3–4 weeks ahead. July and August weekends in the Saugatuck, South Haven, and Holland corridor fill fastest. Bachelorette weekends and family reunion events should be secured as early as possible once you have your rental confirmed.`,
    },
    {
      q: `Can you handle a large family reunion or vacation group event near ${city}?`,
      a: `Absolutely — Lake Michigan family reunion events and vacation group dinners are among our most common summer bookings. For groups over 25, we bring two chef stations. Groups of 30–50+ guests at lake house events are fully within our capacity.`,
    },
    {
      q: `What do I need for a ${city} lake house hibachi event?`,
      a: `Outdoor space (at least 10×10 ft flat surface), tables, and chairs. We bring everything else: the teppan grill, propane, all fresh proteins, sauces, plates, chopsticks, and complete setup and cleanup. Many ${city} vacation rentals have exactly the right outdoor deck or patio space.`,
    },
    {
      q: `Is there a travel fee for ${city} and the Lake Michigan shore communities?`,
      a: `Travel fees may apply for some Lake Michigan shore locations depending on distance from our nearest chef base. All fees are disclosed upfront before you confirm. We serve Saugatuck, South Haven, Holland, Douglas, Fennville, and all of the Lake Michigan vacation corridor.`,
    },
  ],
  // Theme 5 — Northern Michigan Destination
  (city) => [
    {
      q: `Can you set up hibachi at a ${city} cottage, resort, or vacation property?`,
      a: `Absolutely — Northern Michigan cottage and resort property setups are among our most distinctive Michigan bookings. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most ${city} area properties — cottages, resort homes, and vacation rentals near Traverse City, Petoskey, Bay Harbor, and Harbor Springs — have ideal outdoor entertaining spaces.`,
    },
    {
      q: `Do you serve the Traverse City, Petoskey, Bay Harbor, and Harbor Springs area?`,
      a: `Yes — we serve all of Northern Michigan including Traverse City, Petoskey, Bay Harbor, Harbor Springs, Charlevoix, Elk Rapids, Suttons Bay, and surrounding communities. For properties more than 40 miles from our nearest chef base, a travel fee may apply and will always be disclosed upfront.`,
    },
    {
      q: `How far in advance should I book a ${city} summer property event?`,
      a: `For Northern Michigan summer events, booking 3–4 weeks ahead is recommended. July and August dates fill fastest as the peak Northern Michigan summer season is also our peak demand period. Traverse City and Petoskey/Bay Harbor events during wine country harvest weekends should be secured 4–6 weeks ahead.`,
    },
    {
      q: `Can hibachi work for a wine country estate dinner near ${city}?`,
      a: `It's one of the best settings for it. Old Mission Peninsula and Leelanau Peninsula vineyard-adjacent properties, Petoskey's Bay Harbor estate community, and the cottage properties near Harbor Springs and Mackinac Island are all ideal for a private teppanyaki chef dinner. Premium proteins, live fire, full service, complete cleanup. The kind of evening that defines the summer.`,
    },
    {
      q: `Is private hibachi a good option for a ${city} bachelorette weekend?`,
      a: `Excellent — Northern Michigan bachelorette weekends at Traverse City and Petoskey vacation rentals are among our fastest-growing summer bookings. The chef comes to your rental property, sets up, performs for 90–120 minutes, and handles complete cleanup. No restaurant reservations, no driving. The private dinner that stays at the rental.`,
    },
    {
      q: `What do I need to provide for a ${city} hibachi event?`,
      a: `Outdoor space (at least 10×10 ft flat surface), tables, and chairs. We bring everything else: the teppan grill, propane, all fresh proteins, sauces, plates, chopsticks, and complete setup and cleanup. Most ${city} cottage and resort properties have ideal outdoor setups for a Northern Michigan teppanyaki evening.`,
    },
  ],
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const MI_TESTIMONIALS = [
  // Theme 0 — Detroit Metro Luxury
  [
    {
      text: '"Estate dinner at our Bloomfield Hills property — 20 guests on the rear terrace, chef arrived exactly on time and delivered a two-hour performance that matched every expectation. Auto industry colleagues and family. Premium proteins across the board — filet and lobster tail for the table. Every guest booked their own event within the month. This is our new format for private entertaining."',
      name: 'James & Patricia W.',
      city: 'Bloomfield Hills, MI',
      event: 'Estate Dinner Party',
      initials: 'JW',
    },
    {
      text: '"Client dinner at our Birmingham property — 16 guests, outdoor patio setup, chef was outstanding in every respect. Corporate clients from the auto corridor, K Street-equivalent professionals, and our personal guests. The performance elevated what would have been a standard dinner into something our clients are still talking about three months later."',
      name: 'Richard T.',
      city: 'Birmingham, MI',
      event: 'Corporate Client Dinner',
      initials: 'RT',
    },
    {
      text: '"Anniversary dinner at our Birmingham estate — 14 guests, outdoor terrace, premium protein menu. The chef was professional, warm, and exceptional at the teppan. After years of going to the same Birmingham and Bloomfield Hills restaurants for milestone occasions, this was the first dinner where nobody wanted to leave."',
      name: 'Susan & David A.',
      city: 'Birmingham, MI',
      event: 'Anniversary Dinner',
      initials: 'SA',
    },
  ],
  // Theme 1 — Detroit Metro Corporate/Professional
  [
    {
      text: '"Corporate team dinner for our Troy automotive group — 32 guests at an outdoor venue, chef ran two stations and kept the entire crowd engaged for over two hours. We\'ve done the Somerset Collection restaurant circuit for years. This was the first corporate dinner in years that had everyone talking at the all-hands the following week."',
      name: 'Michelle K.',
      city: 'Troy, MI',
      event: 'Corporate Team Dinner',
      initials: 'MK',
    },
    {
      text: '"Graduation party in Royal Oak — 40 guests, backyard setup, chef had every generation engaged from the first flame. The Woodward Avenue restaurant options for a group this size are limited and impersonal. Having the chef come to the house was the obvious answer. Three families booked their own events before we were done cleaning up."',
      name: 'The Peterson Family',
      city: 'Royal Oak, MI',
      event: 'Graduation Party',
      initials: 'PF',
    },
    {
      text: '"Diwali celebration in Novi — 52 guests, dual stations, chef was extraordinary. Our community celebrates milestones with intention, and this matched the occasion perfectly. The fire tricks had the kids completely captivated and the adults equally entertained. Dual stations ran smoothly and every guest was served fresh and hot."',
      name: 'Priya & Anand M.',
      city: 'Novi, MI',
      event: 'Diwali Celebration',
      initials: 'PM',
    },
  ],
  // Theme 2 — Detroit Metro Suburban
  [
    {
      text: '"Graduation party in Ann Arbor — U of M graduation weekend and every restaurant in the city was fully booked. 38 guests, backyard setup, chef was phenomenal. The right answer was obvious in hindsight: have the chef come to us. Better food, better entertainment, and everyone together at the same grill."',
      name: 'Carol & Brian H.',
      city: 'Ann Arbor, MI',
      event: 'Graduation Party',
      initials: 'CH',
    },
    {
      text: '"Birthday party in Canton — 44 guests, dual stations, relatives from three states. Chef had three generations at the grill for two solid hours. Grandparents front row, cousins competing for the flying shrimp. This is the new standard for our family celebrations."',
      name: 'The Kim Family',
      city: 'Canton, MI',
      event: 'Birthday Party',
      initials: 'KF',
    },
    {
      text: '"Anniversary dinner in Rochester Hills — 22 guests, backyard setup, chef was professional and energetic throughout. Our guests had never experienced private hibachi before. Four of them have already booked their own events. Would not have changed a single thing about the evening."',
      name: 'Linda & Tom F.',
      city: 'Rochester Hills, MI',
      event: 'Anniversary Dinner',
      initials: 'LF',
    },
  ],
  // Theme 3 — West Michigan
  [
    {
      text: '"Corporate client dinner in Grand Rapids — 28 guests, outdoor corporate venue, chef ran dual stations and delivered a two-hour show. West Michigan has a growing restaurant scene, but nothing in the city creates the same shared experience as a private teppanyaki chef performing exclusively for your group. Our clients still reference it."',
      name: 'Mark D.',
      city: 'Grand Rapids, MI',
      event: 'Corporate Client Dinner',
      initials: 'MD',
    },
    {
      text: '"Graduation party in Kalamazoo — WMU graduation weekend, every venue in the city was packed. 36 guests, backyard setup, chef was outstanding. We discovered that having the chef come to the house was better in every way: more food, more entertainment, and everyone genuinely together for the whole evening."',
      name: 'The Johnson Family',
      city: 'Kalamazoo, MI',
      event: 'Graduation Party',
      initials: 'JF',
    },
    {
      text: '"Family reunion in Holland — 42 guests, outdoor setup, chef set up in under 30 minutes and ran a full show. Dutch community gatherings take their celebrations seriously and this matched the occasion. Four generations at the same grill. Best reunion dinner we\'ve hosted in West Michigan."',
      name: 'The VanderBerg Family',
      city: 'Holland, MI',
      event: 'Family Reunion',
      initials: 'VF',
    },
  ],
  // Theme 4 — Lake Michigan Shore
  [
    {
      text: '"Bachelorette weekend at our Saugatuck rental — 14 guests, lakefront patio, chef was outstanding. We\'ve been to Saugatuck for bachelorettes five times over the years and always struggled with restaurant reservations for the group. This was the best evening we\'ve ever had here. The private format is the answer."',
      name: 'Ashley R.',
      city: 'Saugatuck, MI',
      event: 'Bachelorette Weekend',
      initials: 'AR',
    },
    {
      text: '"Family reunion at our South Haven lake house — 38 guests on the deck, chef brought dual stations and kept three generations entertained for two hours. Cousins flew in from four states. The lake house dinner that anchors the whole reunion weekend. We are absolutely doing this every summer."',
      name: 'The Crawford Family',
      city: 'South Haven, MI',
      event: 'Family Reunion Lake House Dinner',
      initials: 'CF',
    },
    {
      text: '"Anniversary dinner at a Holland vacation rental — 18 guests, outdoor deck setup, chef was exceptional from setup through final plate. The Lake Michigan backdrop made the whole evening feel different from any restaurant dinner we\'ve had. Private, intimate, exactly the right scale for the occasion."',
      name: 'Karen & Steve P.',
      city: 'Holland, MI',
      event: 'Anniversary Dinner',
      initials: 'KP',
    },
  ],
  // Theme 5 — Northern Michigan Destination
  [
    {
      text: '"Wine country estate dinner at our Traverse City property — 16 guests on the outdoor terrace, Old Mission Peninsula backdrop. Chef arrived exactly on time, set up without a sound, and delivered a two-hour performance that matched the setting perfectly. Filet and lobster tail for the occasion. Northern Michigan summer at its best."',
      name: 'Catherine & Robert M.',
      city: 'Traverse City, MI',
      event: 'Wine Country Estate Dinner',
      initials: 'CM',
    },
    {
      text: '"Summer cottage dinner near Petoskey — 20 guests, Bay Harbor-adjacent property, chef was professional and warm throughout. Friends from Chicago and Detroit converged on our Northern Michigan cottage for a long weekend. The hibachi dinner was the centerpiece of the whole trip. Every guest is coming back next summer."',
      name: 'Andrew & Laura F.',
      city: 'Petoskey, MI',
      event: 'Cottage Summer Dinner',
      initials: 'AF',
    },
    {
      text: '"Bachelorette weekend in Traverse City — rented a lakefront property near the wine trail, 12 guests, hibachi on Friday night. Chef was incredible — the fire tricks had everyone completely absorbed, and the private format meant we had the whole experience to ourselves. Best TC bachelorette dinner we could have planned."',
      name: 'Megan T.',
      city: 'Traverse City, MI',
      event: 'Bachelorette Weekend',
      initials: 'MT',
    },
  ],
]

// ── Image themes ──────────────────────────────────────────────────────────────
const MI_IMAGE_THEMES = [
  { heroImage: '/pics/hibachi-chef-home.jpg' },      // Theme 0 — Detroit Metro Luxury
  { heroImage: '/pics/hibachi-catering.jpg' },        // Theme 1 — Detroit Metro Corporate
  { heroImage: '/pics/hibachi-event.jpg' },           // Theme 2 — Detroit Metro Suburban
  { heroImage: '/pics/hibachi-catering-3.jpg' },      // Theme 3 — West Michigan
  { heroImage: '/pics/backyard-hibachi-3.jpg' },      // Theme 4 — Lake Michigan Shore
  { heroImage: '/pics/hibachi-colorado-home.jpg' },   // Theme 5 — Northern Michigan
]

// ── How It Works ──────────────────────────────────────────────────────────────
const MI_HOW_IT_WORKS = [
  // Theme 0 — Detroit Metro Luxury
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Estate`,
    footerNote: (city) => `Most ${city} estate bookings confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Reserve Your Date',             desc: 'Contact us with your date, guest count, and property setup. Premium protein packages available at booking. Fast confirmation.' },
      { num: '02', title: 'Chef Arrives Fully Equipped',   desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, hand-selected proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Estate-Level Performance',      desc: 'Guests gather for 90–120 minutes of live hibachi — fire tricks, precision knife work, and every plate cooked to order at the teppan.' },
      { num: '04', title: 'Complete Cleanup, Nothing Left', desc: 'Chef handles all teardown and cleanup. Your estate or private property is exactly as it was before the chef arrived.' },
    ],
  },
  // Theme 1 — Detroit Metro Corporate/Professional
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} events book 2–4 weeks out. Call or text (201) 565-3878 to confirm your date.`,
    steps: [
      { num: '01', title: 'Request Your Event',             desc: 'Tell us your date, guest count, and outdoor space — corporate venue, backyard, or private home. We confirm fast.' },
      { num: '02', title: 'Chef Arrives with Everything',   desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking Performance',       desc: 'Guests gather for 90–120 minutes of live hibachi — fire tricks, flying shrimp, freshly grilled food cooked to order.' },
      { num: '04', title: 'Full Cleanup Included',          desc: 'Chef handles all cleanup and packs out completely. Your venue stays spotless. You keep the experience.' },
    ],
  },
  // Theme 2 — Detroit Metro Suburban
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 with questions.`,
    steps: [
      { num: '01', title: 'Book Your Date',                 desc: 'Request your event online or by phone. Tell us your guest count and backyard setup. Quick confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything',   desc: 'Certified chef arrives with full teppan grill, propane, all ingredients, sauces, plates, and chopsticks. No shopping required.' },
      { num: '03', title: 'The Performance Begins',         desc: 'Guests gather around the grill for a live teppanyaki show — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Zero Cleanup for You',           desc: 'Chef packs everything out completely. You hosted the best dinner of the season and didn\'t touch a single dish.' },
    ],
  },
  // Theme 3 — West Michigan
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `${city} events book 2–3 weeks out. Call or text (201) 565-3878 to secure your date.`,
    steps: [
      { num: '01', title: 'Request Your Event',             desc: 'Book online or by phone. Tell us your guest count — over 25, we bring two chef stations. Confirmed quickly.' },
      { num: '02', title: 'Full Setup Arrives',             desc: 'Your chef arrives with everything: grills, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking for the Crowd',     desc: 'Every guest gathers around the grill for a live teppanyaki performance — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Chef Handles Cleanup',           desc: 'Complete cleanup done by your chef. Your family keeps the memory. You do none of the work.' },
    ],
  },
  // Theme 4 — Lake Michigan Shore
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Lake House`,
    footerNote: (city) => `Lake Michigan summer dates book 3–4 weeks ahead. Call or text (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Reserve Your Summer Date',       desc: 'Contact us with your date, rental property details, and guest count. We coordinate travel and confirm fast.' },
      { num: '02', title: 'Chef Travels to Your Rental',    desc: 'Your certified teppanyaki chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Lake House Dinner Show',         desc: 'Guests gather on your deck or patio for 90–120 minutes of live hibachi — fire tricks, custom proteins, fried rice, grilled vegetables.' },
      { num: '04', title: 'Full Cleanup, Nothing Left',     desc: 'Chef handles all teardown and cleanup. Your rental property is immaculate when they leave.' },
    ],
  },
  // Theme 5 — Northern Michigan Destination
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Cottage`,
    footerNote: (city) => `Northern Michigan summer dates fill fast. Call or text (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Reserve Your Date',              desc: 'Contact us with your date, cottage or resort address, and guest count. We confirm and coordinate travel upfront.' },
      { num: '02', title: 'Chef Arrives at Your Property',  desc: 'Your certified chef arrives with everything: teppan grill, propane, all fresh proteins, sauces, plates, and chopsticks.' },
      { num: '03', title: 'Northern Michigan Dinner Show',  desc: 'Every guest gathered at the grill for 90–120 minutes — fire tricks, proteins cooked to order, fried rice, grilled vegetables.' },
      { num: '04', title: 'Complete Cleanup Included',      desc: 'Chef handles all teardown and pack-out. Your cottage or resort property is exactly as you left it.' },
    ],
  },
]

// ── Section variants ──────────────────────────────────────────────────────────
const MI_SECTION_VARIANTS = [
  // Theme 0 — Detroit Metro Luxury
  {
    heroPill:           'Michigan\'s Private Chef',
    experiencePill:     'Beyond Any Detroit Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏛️', title: `Your ${city} Estate Is the Venue`,       desc: `No restaurant can give your guests this — a certified teppanyaki chef performing exclusively at your ${city} property for the evening.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',             desc: 'Filet mignon, lobster tail, wagyu upgrades — cooked live on the teppan in front of your guests. The restaurant version doesn\'t compare.' },
      { icon: '🤫', title: 'Complete Discretion',                     desc: 'Your event stays at your property. No shared dining rooms, no strangers, no valet line. Just your guests and your chef.' },
      { icon: '✨', title: 'Full Show, Zero Cleanup',                  desc: 'Premium performance, hand-selected proteins, and complete teardown. Your estate is spotless when the chef leaves.' },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef performing at a ${city} MI estate event`,
    areasPill:          'Serving Metro Detroit',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Detroit Metro Communities`,
    areasIntro: [
      () => `We serve all of Metro Detroit — Bloomfield Hills, Birmingham, Troy, Royal Oak, Novi, Grosse Pointe, Northville, Plymouth, and every community throughout Oakland County and the greater Detroit Metro.`,
      (city) => `Most ${city} estate bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Reserve Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Standard for Private Entertaining in ${city}`,
    occasionSubtext:       'Estate dinners, auto executive entertaining, client appreciation events, and milestone celebrations — private hibachi is Detroit Metro\'s most exclusive in-home dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city} Private Hibachi Questions — Answered`,
    testimonialSubheading: 'What Detroit Metro Estate Hosts Are Saying',
  },
  // Theme 1 — Detroit Metro Corporate/Professional
  {
    heroPill:           'Detroit Metro\'s Private Chef',
    experiencePill:     'Better Than Any Metro Detroit Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `Your ${city} Space Is the Venue`,         desc: `No restaurant reservation required — your ${city} outdoor space becomes an exclusive private dining room for your guests.` },
      { icon: '👨‍🍳', title: 'Certified Chef, Your Group Only',         desc: 'Your teppanyaki chef performs exclusively for your guests — no shared dining room, no strangers, no crowded parking structure.' },
      { icon: '📍', title: 'All of Metro Detroit Served',             desc: `${city}, Birmingham, Bloomfield Hills, Troy, Novi — wherever your property is in the Detroit Metro, we come to you.` },
      { icon: '✨', title: 'Full Show, Zero Cleanup',                   desc: 'Premium proteins cooked live on the teppan, fire tricks for your guests, and complete cleanup when dinner is done.' },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a corporate event in ${city}, MI`,
    areasPill:          'Serving Metro Detroit',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Detroit Metro Communities`,
    areasIntro: [
      (city) => `We serve all of Metro Detroit — ${city}, Birmingham, Bloomfield Hills, Troy, Royal Oak, Novi, Canton, Northville, Plymouth, Sterling Heights, Rochester Hills, and every community throughout Oakland, Macomb, and Wayne County.`,
      (city) => `Most ${city} bookings are confirmed within hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Check Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Reason to Celebrate in ${city}`,
    occasionSubtext:       'From corporate team dinners to graduation parties to milestone celebrations, private hibachi is Metro Detroit\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city}, ${abbr} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Metro Detroit Hosts Are Saying',
  },
  // Theme 2 — Detroit Metro Suburban
  {
    heroPill:           'Detroit Suburbs\' Private Chef',
    experiencePill:     'Better Than Any Local Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `${city}'s Backyard Is the Venue`,         desc: `No reservation battles, no parking, no rushed tables — your ${city} backyard becomes an exclusive private dining room for the evening.` },
      { icon: '🎓', title: 'Built for Graduation Season',             desc: `When every restaurant near ${city} is fully booked in May and June, we come to your backyard.` },
      { icon: '🔥', title: 'One Chef, One Show',                      desc: 'Every guest at the same grill, the same chef, the same moment — the shared experience is what makes hibachi unforgettable.' },
      { icon: '🧹', title: 'Arrive & Disappear Spotless',             desc: 'Your chef arrives fully equipped, sets up, cooks the entire dinner, and packs out after. You host without lifting a finger.' },
    ],
    experienceImage:    '/pics/hibachi-event.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a backyard event in ${city}, MI`,
    areasPill:          'Serving Metro Detroit Suburbs',
    areasHeadline:      (city) => `Hibachi in ${city} and the Detroit Suburbs`,
    areasIntro: [
      (city) => `We serve ${city} and all of the Detroit Metro suburbs — Ann Arbor, Canton, Northville, Novi, Plymouth, Sterling Heights, Rochester Hills, Dearborn, and every community throughout Macomb, Oakland, and Wayne County.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From graduation parties to multicultural milestone celebrations, private hibachi is the Detroit suburb backyard upgrade that every community deserves',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Detroit Suburb Hosts Are Saying',
  },
  // Theme 3 — West Michigan
  {
    heroPill:           'West Michigan\'s Private Chef',
    experiencePill:     'Better Than Any Grand Rapids Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏢', title: `Corporate & Family Events in ${city}`,    desc: `Corporate team dinners, graduation parties, and family milestones — West Michigan's growing event market at its best.` },
      { icon: '🔥', title: 'Full Teppanyaki Show',                    desc: 'Every guest at the same outdoor grill for 90–120 minutes — fire tricks, fresh proteins cooked to order, the full experience.' },
      { icon: '👨‍👩‍👧‍👦', title: 'Every Generation at the Grill',          desc: 'Kids, parents, and grandparents all gathered at the same teppan — West Michigan family celebration culture at its finest.' },
      { icon: '✨', title: 'Full Show, Zero Cleanup',                  desc: 'Complete setup before the event and full cleanup after — nothing for the host to do except enjoy the celebration.' },
    ],
    experienceImage:    '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at an event in ${city}, MI`,
    areasPill:          'Serving West Michigan',
    areasHeadline:      (city) => `Hibachi in ${city} and West Michigan`,
    areasIntro: [
      (city) => `We serve ${city} and all of West Michigan — Grand Rapids, Ada, East Grand Rapids, Holland, Kalamazoo, Lansing, Zeeland, and every community throughout Kent County and the greater West Michigan area.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Most large-group events confirmed within a day.`,
    ],
    areasButton:           'Book Your Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Celebration`,
    occasionSubtext:       'Corporate team dinners, graduation parties, family reunions, and community events — West Michigan celebrates together and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What West Michigan Hosts Are Saying',
  },
  // Theme 4 — Lake Michigan Shore
  {
    heroPill:           'Lake Michigan\'s Private Chef',
    experiencePill:     'The Dinner of the Weekend',
    experiencePoints:   (city) => [
      { icon: '🌊', title: `Lake House Dining in ${city}`,            desc: `Vacation rentals, lake house decks, and outdoor spaces along the Lake Michigan shore are the ideal setting for private hibachi.` },
      { icon: '🥂', title: 'Bachelorette & Group Weekends',           desc: 'The private dinner that stays at the rental — no driving, no reservations, no competing for a table with summer tourists.' },
      { icon: '👥', title: 'Scales from 10 to 60+ Guests',            desc: `Family reunions, bachelorette groups, and vacation parties of any size — one or two stations sized to your exact guest count.` },
      { icon: '✨', title: 'Rental Stays Immaculate',                  desc: 'Flawless setup, full service throughout, and complete cleanup. You enjoy the lake house evening; we handle everything else.' },
    ],
    experienceImage:    '/pics/backyard-hibachi-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a lake house event in ${city}, MI`,
    areasPill:          'Serving Lake Michigan Shore',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Lake Michigan Corridor`,
    areasIntro: [
      (city) => `We serve ${city} and all of the Lake Michigan vacation corridor — Saugatuck, South Haven, Douglas, Holland, Fennville, Grand Haven, and every community along the West Michigan lakeshore.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Lake Michigan summer dates fill 3–4 weeks ahead.`,
    ],
    areasButton:           'Reserve Your Summer Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Everyone Talks About in ${city}`,
    occasionSubtext:       'Bachelorette weekends, family reunion lake house dinners, and summer vacation group events — private hibachi makes any Lake Michigan evening the highlight of the trip',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Lake Michigan Shore Hosts Are Saying',
  },
  // Theme 5 — Northern Michigan Destination
  {
    heroPill:           'Northern Michigan\'s Private Chef',
    experiencePill:     'The Summer Evening Worth Planning Around',
    experiencePoints:   (city) => [
      { icon: '🍷', title: `Cottage & Resort Dining in ${city}`,      desc: `Wine country estates, resort properties, and cottage addresses near Traverse City, Petoskey, Bay Harbor, and Harbor Springs are ideal private hibachi settings.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',             desc: 'Filet mignon, lobster tail, scallops — cooked live at the teppan on your terrace or cottage grounds. The restaurant version doesn\'t come close.' },
      { icon: '👥', title: 'Scales from 10 to 50+ Guests',            desc: `Intimate ${city} cottage dinners of 8–16 or larger summer gatherings — one or two stations sized to your exact guest count.` },
      { icon: '✨', title: 'Property Stays Immaculate',               desc: 'Flawless setup, full service throughout, and complete cleanup. You enjoy the Northern Michigan evening; we handle everything else.' },
    ],
    experienceImage:    '/pics/hibachi-colorado-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} MI cottage or resort event`,
    areasPill:          'Serving Northern Michigan',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Northern Michigan`,
    areasIntro: [
      (city) => `We serve ${city} and all of Northern Michigan — Traverse City, Petoskey, Bay Harbor, Harbor Springs, Charlevoix, Elk Rapids, Suttons Bay, Leland, and every community throughout the Grand Traverse and Emmet County areas.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Northern Michigan summer events fill 3–4 weeks ahead.`,
    ],
    areasButton:           'Reserve Your Evening',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Northern Michigan Evening Worth Remembering`,
    occasionSubtext:       'Wine country estate dinners, bachelorette weekends, cottage family gatherings, and destination anniversary events — private hibachi elevates any Northern Michigan summer evening into something lasting',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Northern Michigan Hosts Are Saying',
  },
]

// ── City experience image map ──────────────────────────────────────────────────
const MI_CITY_IMAGE_MAP = {
  // Batch 1 — Detroit Metro Core
  'bloomfield-hills': { src: '/pics/hibachi-chef-home.jpg',  alt: (city) => `Private hibachi chef at a Bloomfield Hills MI estate event` },
  'birmingham':       { src: '/pics/private-hibachi.jpg',    alt: (city) => `Private hibachi chef at a Birmingham MI estate dinner` },
  'troy':             { src: '/pics/hibachi-catering.jpg',   alt: (city) => `Corporate hibachi dinner in Troy MI` },
  'royal-oak':        { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at a Royal Oak MI event` },
  'novi':             { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Private hibachi chef at a Novi MI event` },
  // Batch 2 — Detroit Metro Suburban
  'ann-arbor':        { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at an Ann Arbor MI graduation event` },
  'dearborn':         { src: '/pics/hibachi-catering.jpg',   alt: (city) => `Hibachi catering at a Dearborn MI corporate event` },
  'canton':           { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Private hibachi chef at a Canton MI backyard event` },
  'sterling-heights': { src: '/pics/backyard-hibachi-3.jpg', alt: (city) => `Private hibachi chef at a Sterling Heights MI backyard event` },
  'rochester-hills':  { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at a Rochester Hills MI backyard event` },
  // Batch 3 — West Michigan & Lake Shore
  'grand-rapids':  { src: '/pics/hibachi-catering.jpg',   alt: (city) => `Hibachi catering at a Grand Rapids MI corporate event` },
  'kalamazoo':     { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at a Kalamazoo MI backyard event` },
  'lansing':       { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Mobile hibachi chef in Lansing MI` },
  'holland':       { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at a Holland MI lake house event` },
  // Batch 4 — Lake Shore Destination & Northern Michigan
  'saugatuck':     { src: '/pics/hibachi-chef-home.jpg',  alt: (city) => `Private hibachi chef at a Saugatuck MI lake house event` },
  'south-haven':   { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi chef at a South Haven MI vacation rental event` },
  'traverse-city': { src: '/pics/private-hibachi.jpg',    alt: (city) => `Private hibachi chef at a Traverse City MI cottage event` },
  'petoskey':      { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Private hibachi chef at a Petoskey MI resort event` },
}

// ── Support images for profiled cities ────────────────────────────────────────
const MI_SUPPORT_IMAGES = {
  'bloomfield-hills': {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Estate hibachi dinner in Bloomfield Hills, MI`,
      caption:    'Bloomfield Hills estate private dining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `Bloomfield Hills hosts set one of the highest standards for private entertaining in the Midwest — and our certified teppanyaki chefs meet it at every event. Estate terrace dinners, auto executive entertaining, and premium private gatherings for Michigan's most discerning hosts are what we do best here. Filet mignon, lobster tail, and premium protein upgrades are the expected standard, not the exception. See what Bloomfield Hills hosts have found:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef setting up at a Bloomfield Hills MI estate`,
      caption: 'Bloomfield Hills private dining standard',
    },
  },
  'birmingham': {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Private hibachi dinner in Birmingham, MI`,
      caption:    'Birmingham estate entertaining',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Birmingham hosts choose private hibachi when the Maple Road restaurant circuit isn\'t the right format for the evening — estate dinners, anniversary celebrations, corporate client events, and milestone occasions that deserve the exclusivity of your own outdoor space and a certified chef performing for your guests alone. The Birmingham dinner they still talk about is the one that happened at someone\'s terrace. See what Birmingham hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering.jpg',
      alt:     (city) => `Private hibachi chef in Birmingham, MI`,
      caption: 'Birmingham private dining standard',
    },
  },
  'troy': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Corporate hibachi catering in Troy, MI`,
      caption:    'Troy corporate corridor events',
      trustBadge: 'Trusted by Michigan Businesses',
      intro:      (city) => `Troy's automotive corridor — BorgWarner, Altair, Kelly Services, FCA North America, and dozens of auto suppliers and professional services firms — chooses private hibachi for corporate team dinners, client appreciation events, and company milestone celebrations. The Somerset Collection drives Troy's luxury retail culture; private hibachi delivers the dinner format that matches it. See what Troy corporate teams are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Troy, MI`,
      caption: 'Troy corporate dinner standard',
    },
  },
  'royal-oak': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi party in Royal Oak, MI`,
      caption:    'Royal Oak backyard entertaining',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Royal Oak's young professional community — the Woodward Avenue corridor, the Ferndale-Berkley-Clawson triangle, and the 25–40 homeowner demographic that defines this inner suburb — chooses private hibachi for birthday milestones, bachelorette weekends, and graduation parties. Main Street Royal Oak has excellent restaurants; they still can\'t match a private chef at your own outdoor space for a group of 20. See what Royal Oak hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Royal Oak, MI`,
      caption: 'Royal Oak backyard dinner standard',
    },
  },
  'novi': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Private hibachi event in Novi, MI`,
      caption:    'Novi community milestone celebrations',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Novi's South Asian community — one of the largest in Michigan, centered around the Twelve Oaks and Novi Town Center corridor — celebrates milestones with the kind of intention that turns a graduation or engagement into a full production. Dual-station events of 40–80 guests are standard here. Our chefs serve Novi and the full Northville-Plymouth-Canton corridor. See what Novi hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Novi, MI`,
      caption: 'Novi milestone celebration standard',
    },
  },
  // Batch 2 — Detroit Metro Suburban
  'ann-arbor': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Graduation hibachi party in Ann Arbor, MI`,
      caption:    'Ann Arbor U of M graduation season',
      trustBadge: 'Thousands of Happy Guests',
      intro:      (city) => `Ann Arbor hosts — University of Michigan graduation families, the medical and academic community at U of M Health and Michigan Medicine, and the tech sector professionals at Duo Security and beyond — choose private hibachi when May graduation weekend has every restaurant in the city fully booked and they want the chef at their backyard instead. See what Ann Arbor hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Ann Arbor, MI`,
      caption: 'Ann Arbor graduation dinner standard',
    },
  },
  'dearborn': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Hibachi catering in Dearborn, MI`,
      caption:    'Dearborn corporate and community events',
      trustBadge: 'Trusted by Michigan Businesses',
      intro:      (city) => `Dearborn hosts — Ford Motor Company corporate teams, the Arab-American and Chaldean communities that have made this city one of the most culturally rich in Michigan, and the professional families throughout Dearborn Heights and west Detroit — choose private hibachi for corporate client dinners, Eid celebrations, engagement parties, and family milestone gatherings. See what Dearborn hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Dearborn, MI`,
      caption: 'Dearborn corporate and community dining',
    },
  },
  'canton': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Private hibachi party in Canton, MI`,
      caption:    'Canton family milestone celebrations',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `Canton's South Asian, East Asian, and diverse community — the Plymouth-Canton school district produces one of the strongest graduation markets in southeast Michigan — chooses private hibachi for milestone occasions that match the occasion's weight. Dual-station events for 40–80 guests are standard for Canton graduation parties. Our chefs serve Canton and the full Northville-Plymouth-Novi corridor. See what Canton hosts are saying:`,
    },
    cta: {
      src:     '/pics/backyard-hibachi-3.jpg',
      alt:     (city) => `Private hibachi chef in Canton, MI`,
      caption: 'Canton backyard milestone standard',
    },
  },
  'sterling-heights': {
    testimonial: {
      src:        '/pics/backyard-hibachi-3.jpg',
      alt:        (city) => `Backyard hibachi party in Sterling Heights, MI`,
      caption:    'Sterling Heights family celebrations',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Sterling Heights hosts — the Chaldean and Arab-American community that has made this Macomb County city one of Michigan's most culturally vibrant, manufacturing and automotive families throughout the Hall Road and Van Dyke corridor, and the growing diverse population that calls Michigan's fourth-largest city home — choose private hibachi for large family milestone celebrations and backyard gatherings. See what Sterling Heights hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Sterling Heights, MI`,
      caption: 'Sterling Heights backyard dining standard',
    },
  },
  'rochester-hills': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Backyard hibachi party in Rochester Hills, MI`,
      caption:    'Rochester Hills Oakland County celebrations',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Rochester Hills hosts — Rochester Community Schools graduation families, Oakland University students and families, and the upscale Oakland County homeowners throughout Stoney Creek and Paint Creek neighborhoods — choose private hibachi for graduation parties, birthday milestones, and backyard summer celebrations. See what Rochester Hills hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Rochester Hills, MI`,
      caption: 'Rochester Hills backyard entertaining',
    },
  },
  // Batch 3 — West Michigan & Lake Shore
  'grand-rapids': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Hibachi catering at a Grand Rapids MI corporate event`,
      caption:    'Grand Rapids corporate and community events',
      trustBadge: 'Trusted by Michigan Businesses',
      intro:      (city) => `Grand Rapids hosts — Amway, Meijer, Steelcase, Spectrum Health, and the broader West Michigan corporate corridor, alongside the diverse and growing Grand Rapids community and the university families from nearby Aquinas, Calvin, and Grand Valley State — choose private hibachi for corporate client dinners, team celebrations, graduation parties, and the milestone occasions that the West Michigan business and family culture marks with genuine intention. See what Grand Rapids hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Grand Rapids, MI`,
      caption: 'Grand Rapids corporate dinner standard',
    },
  },
  'kalamazoo': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi party in Kalamazoo, MI`,
      caption:    'Kalamazoo university and community events',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Kalamazoo hosts — Western Michigan University graduation families, Kalamazoo College students and faculty, Stryker medical professionals, and the Portage and Richland families throughout southwest Michigan — choose private hibachi for graduation season events, milestone celebrations, and backyard summer dinners that the Kalamazoo community marks with the full weight of the occasion. See what Kalamazoo hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Kalamazoo, MI`,
      caption: 'Kalamazoo backyard dinner standard',
    },
  },
  'lansing': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Mobile hibachi event in Lansing, MI`,
      caption:    'Lansing state government and university events',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `Lansing hosts — Michigan State University graduation families, state government and legislative professionals, GM Lansing plant employees and automotive families, and the East Lansing community along Grand River Avenue — choose private hibachi for graduation season celebrations, corporate team dinners, and the milestone occasions that the capital region community marks with genuine care. See what Lansing hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Lansing, MI`,
      caption: 'Lansing milestone celebration standard',
    },
  },
  'holland': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi event at a Holland MI lake house`,
      caption:    'Holland Lake Michigan shore entertaining',
      trustBadge: 'Highly Rated by Local Hosts',
      intro:      (city) => `Holland hosts — the Tulip Time community and the Dutch-heritage families whose gathering culture is rooted in milestone celebration, the Lake Macatawa and Lake Michigan vacation rental groups who converge on this west Michigan shore city each summer, and Hope College families marking graduation along one of Michigan's most scenic lakefronts — choose private hibachi when the occasion deserves the dinner that stays with everyone. See what Holland hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in Holland, MI`,
      caption: 'Holland lake shore dinner standard',
    },
  },
  // Batch 4 — Lake Shore Destination & Northern Michigan
  'saugatuck': {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Private hibachi chef at a Saugatuck MI lake house`,
      caption:    'Saugatuck lake house private entertaining',
      trustBadge: 'Highly Rated by Lake House Hosts',
      intro:      (city) => `Saugatuck hosts — the bachelorette weekends and family reunions at the rental properties along Kalamazoo Lake and Lake Michigan, the Chicago and Detroit weekenders who book a Saugatuck vacation home for the specific purpose of having an extraordinary dinner without driving anywhere, and the anniversary couples who discovered that a private hibachi chef at the lake house is the format the occasion was always missing — choose private hibachi when the trip has been planned for months and the dinner needs to match it. See what Saugatuck vacation groups have found:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in Saugatuck, MI`,
      caption: 'Saugatuck lake house dinner standard',
    },
  },
  'south-haven': {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Private hibachi chef at a South Haven MI lake house`,
      caption:    'South Haven vacation rental entertaining',
      trustBadge: 'Trusted by Vacation Groups',
      intro:      (city) => `South Haven hosts — the Chicago families who have been coming to this Lake Michigan blue-star beach town for generations and now bring their private chef with them, the bachelorette weekends and birthday milestone groups who fill the downtown vacation rentals each summer, and the anniversary couples who discovered that a private hibachi at the rental property is the format that makes the whole weekend worthwhile — choose private hibachi for the dinner that nobody wants to interrupt by driving somewhere. See what South Haven vacation groups have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in South Haven, MI`,
      caption: 'South Haven lake house dinner standard',
    },
  },
  'traverse-city': {
    testimonial: {
      src:        '/pics/private-hibachi.jpg',
      alt:        (city) => `Private hibachi chef at a Traverse City MI cottage`,
      caption:    'Traverse City wine country private entertaining',
      trustBadge: 'Five-Star Cottage & Resort Events',
      intro:      (city) => `Traverse City hosts — the Traverse City Film Festival and Wine & Art Festival crowd, the Old Mission Peninsula winery visitors who rent the farmhouse estate for a long weekend and want the dinner to be as extraordinary as the setting, the Mackinac Island day-trippers and Harbor Springs harbor families who make Northern Michigan their summer home — choose private hibachi for the cottage dinner that pairs as naturally with a 2021 Old Mission Riesling as it does with a Northern Michigan sunset. See what Traverse City cottage hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Traverse City, MI`,
      caption: 'Traverse City cottage dinner standard',
    },
  },
  'petoskey': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Private hibachi chef at a Petoskey MI resort`,
      caption:    'Petoskey Harbor Springs resort entertaining',
      trustBadge: 'Trusted by Resort Community Hosts',
      intro:      (city) => `Petoskey hosts — the resort community that clusters around Little Traverse Bay and the Bay Harbor marina, Harbor Springs boat families and the estate properties along the northern shore, the Mackinac Island and Charlevoix visitors who extend their summer into Northern Michigan's most refined resort corridor — choose private hibachi for the dinner at the resort property that nobody wants to leave for a restaurant when the bay is doing what the bay does at sunset. See what Petoskey resort hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in Petoskey, MI`,
      caption: 'Petoskey Northern Michigan resort standard',
    },
  },
}

// ── Support fallback images (per theme) ───────────────────────────────────────
const MI_SUPPORT_FALLBACKS = [
  // Theme 0 — Detroit Metro Luxury
  {
    testimonial: {
      src:        '/pics/hibachi-chef-home.jpg',
      alt:        (city) => `Estate hibachi dinner in ${city}, MI`,
      caption:    'Detroit Metro estate entertaining',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `${city} hosts who choose private hibachi discover what Bloomfield Hills and Birmingham have known: nothing combines live entertainment and truly elevated dining like a certified teppanyaki chef at your property. Premium proteins, estate-level service, and complete cleanup. Here's what ${city} hosts are saying:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, MI`,
      caption: 'Your Detroit Metro private evening',
    },
  },
  // Theme 1 — Detroit Metro Corporate/Professional
  {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Corporate hibachi event in ${city}, MI`,
      caption:    'Detroit Metro professionals agree',
      trustBadge: 'Trusted by Local Families',
      intro:      (city) => `${city} professionals and families choose private hibachi for corporate dinners, milestone birthdays, graduation parties, and team celebrations — an experience that turns any outdoor space into an exclusive private dining room. Our certified chefs bring the full setup and leave your property exactly as they found it. Here's what ${city} hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, MI`,
      caption: 'Your Metro Detroit private evening',
    },
  },
  // Theme 2 — Detroit Metro Suburban
  {
    testimonial: {
      src:        '/pics/hibachi-event.jpg',
      alt:        (city) => `Backyard hibachi event in ${city}, MI`,
      caption:    'Detroit suburb hosts agree',
      trustBadge: 'Thousands of Happy Guests',
      intro:      (city) => `${city} hosts choose private hibachi when they want their backyard celebration to feel genuinely different. Graduation parties, milestone birthdays, and family milestones are our specialty — and our chefs handle everything from setup through cleanup. Here's what ${city} hosts have discovered:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, MI`,
      caption: 'Your Detroit suburb backyard, upgraded',
    },
  },
  // Theme 3 — West Michigan
  {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Hibachi event in ${city}, MI`,
      caption:    'West Michigan hosts agree',
      trustBadge: 'Hundreds of Private Events',
      intro:      (city) => `${city} hosts — families, corporate teams, and university communities across West Michigan — choose private hibachi for the format that no restaurant can replicate: one chef, one crowd, one shared experience for the whole group. Our chefs bring the full setup and leave with complete cleanup. Here's what ${city} hosts say:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, MI`,
      caption: 'Your West Michigan celebration',
    },
  },
  // Theme 4 — Lake Michigan Shore
  {
    testimonial: {
      src:        '/pics/backyard-hibachi-3.jpg',
      alt:        (city) => `Lake house hibachi event in ${city}, MI`,
      caption:    'Lake Michigan shore hosts agree',
      trustBadge: 'Unforgettable Private Dining Experiences',
      intro:      (city) => `${city} vacation rental guests discover something different every time: a private hibachi chef at your lake house turns any evening into the anchor memory of the whole weekend. No restaurant logistics, no driving, no competing for a table. Just your group, your rental deck, and a chef performing exclusively for you. Here's what ${city} hosts have found:`,
    },
    cta: {
      src:     '/pics/hibachi-catering-3.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, MI`,
      caption: 'Your lake house evening, elevated',
    },
  },
  // Theme 5 — Northern Michigan Destination
  {
    testimonial: {
      src:        '/pics/hibachi-colorado-home.jpg',
      alt:        (city) => `Cottage hibachi dinner in ${city}, MI`,
      caption:    'Northern Michigan hosts agree',
      trustBadge: 'Five-Star Entertainment & Dining',
      intro:      (city) => `${city} cottage and resort guests find something they didn\'t expect: a private teppanyaki chef at their property makes any Northern Michigan evening genuinely exceptional. Premium proteins at the teppan, live fire performance, complete cleanup. The dinner that defines the summer. Here's what ${city} hosts are saying:`,
    },
    cta: {
      src:     '/pics/private-hibachi.jpg',
      alt:     (city) => `Private hibachi chef in ${city}, MI`,
      caption: 'Your Northern Michigan evening, elevated',
    },
  },
]

// ── Blog posts by theme ────────────────────────────────────────────────────────
const MI_BLOG_POSTS = [
  // Theme 0 — Detroit Metro Luxury (variant 0)
  [
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: Why Detroit Estate Hosts Choose Private',   excerpt: 'Bloomfield Hills and Birmingham hosts on why a certified private hibachi chef outclasses any Michigan restaurant for the occasions that matter most.', date: '2025-01-22' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',               excerpt: 'Detroit Metro luxury hosts: what happens from booking through cleanup at a premium estate hibachi event.', date: '2024-11-20' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                               excerpt: 'A full pricing breakdown for Detroit Metro estate hibachi events — premium proteins, dual stations, and what\'s included.', date: '2025-01-15' },
  ],
  // Theme 1 — Detroit Metro Corporate/Professional (variant 1)
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',             excerpt: 'Royal Oak, Novi, and Troy hosts — how to plan a backyard hibachi party that outclasses any Detroit Metro restaurant for your group.', date: '2025-04-08' },
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',              excerpt: 'Royal Oak and Birmingham bachelorette weekends — why private hibachi at home is the best dinner format for your group.', date: '2025-02-10' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',                excerpt: 'Everything Troy and Royal Oak hosts need before the private hibachi chef arrives at your Detroit Metro property.', date: '2025-02-28' },
  ],
  // Theme 2 — Detroit Metro Suburban (variant 2)
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',             excerpt: 'Ann Arbor, Canton, and Sterling Heights hosts — how to plan a backyard hibachi graduation or birthday party.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',                excerpt: 'Everything Detroit suburb hosts need before the private hibachi chef arrives at your Michigan backyard.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                               excerpt: 'A full pricing breakdown for Detroit suburb hibachi events — what\'s included and what to expect.', date: '2025-01-15' },
  ],
  // Theme 3 — West Michigan (variant 3)
  [
    { slug: 'hibachi-birthday-party-ideas',         title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',             excerpt: 'Grand Rapids, Kalamazoo, and Lansing hosts — how to host a backyard hibachi party that stands out in West Michigan.', date: '2025-04-08' },
    { slug: 'how-to-plan-a-backyard-hibachi-party', title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)',                excerpt: 'Everything West Michigan hosts need before the private hibachi chef arrives at your Grand Rapids or Kalamazoo property.', date: '2025-02-28' },
    { slug: 'how-much-does-private-hibachi-cost',   title: 'How Much Does a Private Hibachi Chef Cost?',                               excerpt: 'A full pricing breakdown for West Michigan hibachi events — what\'s included and what to expect.', date: '2025-01-15' },
  ],
  // Theme 4 — Lake Michigan Shore (variant 4)
  [
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',              excerpt: 'Saugatuck and South Haven bachelorette weekends — why private hibachi at your Lake Michigan rental is the best dinner of the trip.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: The Lake Michigan Vacation Verdict',        excerpt: 'Why Lake Michigan vacation rental guests choose private hibachi over local restaurant dining for their summer group events.', date: '2025-01-22' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',               excerpt: 'Saugatuck, Holland, and South Haven hosts: what happens from booking through cleanup at a lake house hibachi event.', date: '2024-11-20' },
  ],
  // Theme 5 — Northern Michigan Destination (variant 5)
  [
    { slug: 'hibachi-bachelorette-party',           title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',              excerpt: 'Traverse City and Petoskey bachelorette weekends — why private hibachi at your Northern Michigan cottage is the right dinner format.', date: '2025-02-10' },
    { slug: 'hibachi-at-home-vs-restaurant',        title: 'Hibachi at Home vs. Restaurant: The Northern Michigan Edition',             excerpt: 'Why Traverse City and Petoskey cottage guests choose private hibachi over Northern Michigan restaurant dining for their summer occasions.', date: '2025-01-22' },
    { slug: 'what-to-expect-hibachi-chef-home',     title: 'What to Expect When You Book a Private Hibachi Chef at Home',               excerpt: 'Traverse City and Petoskey hosts: what happens from booking through cleanup at a Northern Michigan cottage hibachi event.', date: '2024-11-20' },
  ],
]

// ── Major cities map (Batch 1 — Detroit Metro Core) ──────────────────────────
const MI_MAJOR_CITIES = {
  // ── Theme 0 — Detroit Metro Luxury ─────────────────────────────────────────
  'bloomfield-hills': { v: 0, profileIdx: 0, nearby: ['Birmingham','Troy','West Bloomfield','Clarkston','Lake Orion','Royal Oak'] },
  'birmingham':       { v: 0, profileIdx: 1, nearby: ['Bloomfield Hills','Troy','Royal Oak','Southfield','Bingham Farms','Berkley'] },
  // ── Theme 1 — Detroit Metro Corporate/Professional ──────────────────────────
  'troy':             { v: 1, profileIdx: 2, nearby: ['Birmingham','Bloomfield Hills','Royal Oak','Sterling Heights','Rochester Hills','Novi'] },
  'royal-oak':        { v: 1, profileIdx: 3, nearby: ['Birmingham','Troy','Ferndale','Clawson','Oak Park','Berkley'] },
  'novi':             { v: 1, profileIdx: 4, nearby: ['Troy','Plymouth','Canton','Northville','South Lyon','Wixom'] },
  // ── Theme 2 — Detroit Metro Suburban ───────────────────────────────────────
  'ann-arbor':        { v: 2, profileIdx: 5, nearby: ['Saline','Ypsilanti','Plymouth','Canton','Dexter','Chelsea'] },
  'dearborn':         { v: 2, profileIdx: 6, nearby: ['Detroit','Livonia','Canton','Taylor','Allen Park','Dearborn Heights'] },
  'canton':           { v: 2, profileIdx: 7, nearby: ['Plymouth','Northville','Novi','Ann Arbor','Westland','Belleville'] },
  'sterling-heights': { v: 2, profileIdx: 8, nearby: ['Troy','Clinton Township','Warren','Shelby Township','Utica','Fraser'] },
  'rochester-hills':  { v: 2, profileIdx: 9, nearby: ['Troy','Auburn Hills','Lake Orion','Shelby Township','Pontiac','Clarkston'] },
  // ── Theme 3 — West Michigan ────────────────────────────────────────────────
  'grand-rapids':  { v: 3, profileIdx: 10, nearby: ['Ada','East Grand Rapids','Kentwood','Wyoming','Grandville','Rockford'] },
  'kalamazoo':     { v: 3, profileIdx: 11, nearby: ['Portage','Richland','Battle Creek','Mattawan','Schoolcraft','Plainwell'] },
  'lansing':       { v: 3, profileIdx: 12, nearby: ['East Lansing','Okemos','Haslett','DeWitt','Mason','Grand Ledge'] },
  // ── Theme 4 — Lake Michigan Shore ─────────────────────────────────────────
  'holland':       { v: 4, profileIdx: 13, nearby: ['Zeeland','Hudsonville','Grand Haven','Saugatuck','West Olive','Macatawa'] },
  'saugatuck':     { v: 4, profileIdx: 14, nearby: ['Douglas','Holland','South Haven','Fennville','Allegan','Glenn'] },
  'south-haven':   { v: 4, profileIdx: 15, nearby: ['Saugatuck','Holland','Bangor','Covert','Hagar Shores','Hartford'] },
  // ── Theme 5 — Northern Michigan Destination ────────────────────────────────
  'traverse-city': { v: 5, profileIdx: 16, nearby: ['Traverse City Township','Acme','Elk Rapids','Suttons Bay','Glen Arbor','Leelanau'] },
  'petoskey':      { v: 5, profileIdx: 17, nearby: ['Harbor Springs','Bay Harbor','Boyne City','Charlevoix','Mackinaw City','East Jordan'] },
}

// ── Nearby major cities by theme (only link to pages that exist) ──────────────
const MI_NEARBY_MAJOR = [
  ['Bloomfield Hills', 'Birmingham', 'Troy', 'Royal Oak', 'Novi'],  // v=0 Detroit Luxury
  ['Troy', 'Royal Oak', 'Novi', 'Birmingham', 'Bloomfield Hills'],  // v=1 Detroit Corporate
  ['Ann Arbor', 'Canton', 'Sterling Heights', 'Rochester Hills', 'Dearborn'],  // v=2 Detroit Suburban
  ['Grand Rapids', 'Kalamazoo', 'Lansing', 'Holland', 'Ann Arbor'],  // v=3 West Michigan (Batch 3)
  ['Holland', 'Saugatuck', 'South Haven', 'Grand Rapids', 'Kalamazoo'],  // v=4 Lake Shore (Batch 4)
  ['Traverse City', 'Petoskey', 'Grand Rapids', 'Holland', 'Ann Arbor'],  // v=5 Northern MI (Batch 4)
]

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const MI_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in', // 0  — Bloomfield Hills
  'Private Hibachi Chef in', // 1  — Birmingham
  'Hibachi Catering in',     // 2  — Troy
  'Hibachi at Home in',      // 3  — Royal Oak
  'Mobile Hibachi in',       // 4  — Novi
  'Hibachi at Home in',      // 5  — Ann Arbor
  'Hibachi Catering in',     // 6  — Dearborn
  'Hibachi at Home in',      // 7  — Canton
  'Hibachi at Home in',      // 8  — Sterling Heights
  'Backyard Hibachi in',     // 9  — Rochester Hills
  'Hibachi Catering in',     // 10 — Grand Rapids
  'Hibachi at Home in',      // 11 — Kalamazoo
  'Mobile Hibachi in',       // 12 — Lansing
  'Hibachi at Home in',      // 13 — Holland
  'Private Hibachi Chef in', // 14 — Saugatuck
  'Hibachi at Home in',      // 15 — South Haven
  'Private Hibachi Chef in', // 16 — Traverse City
  'Mobile Hibachi in',       // 17 — Petoskey
]

const MI_THEME_H1_PREFIXES = [
  'Private Hibachi Chef in', // v=0 Detroit Luxury
  'Hibachi at Home in',      // v=1 Detroit Corporate (generic fallback)
  'Hibachi at Home in',      // v=2 Detroit Suburban
  'Hibachi Catering in',     // v=3 West Michigan
  'Hibachi at Home in',      // v=4 Lake Shore
  'Private Hibachi Chef in', // v=5 Northern Michigan
]

// ── Custom meta overrides ──────────────────────────────────────────────────────
const MI_CUSTOM_META = {
  'bloomfield-hills': {
    title: 'Private Hibachi Chef in Bloomfield Hills, MI | Estate & Executive Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Bloomfield Hills, MI for estate dinners, auto executive entertaining, and milestone events. Filet mignon & lobster tail upgrades. Full setup & cleanup. From $60/adult.',
  },
  'birmingham': {
    title: 'Private Hibachi Chef in Birmingham, MI | Estate & Private Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Birmingham, MI for estate dinners, anniversary celebrations, and private events. Premium proteins available. Full setup & cleanup. From $60/adult.',
  },
  'troy': {
    title: 'Hibachi Catering in Troy, MI | Corporate & Private Events | Hibachi Connect',
    desc:  'Book hibachi catering for your Troy corporate team dinner, client event, or private gathering. Certified teppanyaki chef, full setup & cleanup. From $60/adult. Serving all of Metro Detroit.',
  },
  'novi': {
    title: 'Mobile Hibachi in Novi, MI | Private Chef for Graduation & Milestone Events | Hibachi Connect',
    desc:  'Book mobile hibachi in Novi, MI for graduation parties, milestone celebrations, and community events. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'ann-arbor': {
    title: 'Hibachi at Home in Ann Arbor, MI | U of M Graduation & Private Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Ann Arbor, MI for University of Michigan graduation parties, academic milestones, and backyard events. Full setup & cleanup. From $60/adult.',
  },
  'dearborn': {
    title: 'Hibachi Catering in Dearborn, MI | Corporate & Community Events | Hibachi Connect',
    desc:  'Book hibachi catering in Dearborn, MI for Ford corporate events, Eid celebrations, engagement parties, and family milestones. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'grand-rapids': {
    title: 'Hibachi Catering in Grand Rapids, MI | Corporate & Private Events | Hibachi Connect',
    desc:  'Book hibachi catering in Grand Rapids, MI for corporate team dinners, graduation parties, and milestone celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'kalamazoo': {
    title: 'Hibachi at Home in Kalamazoo, MI | Graduation & Private Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Kalamazoo, MI for WMU graduation parties, backyard events, and milestone celebrations. Full setup & cleanup. From $60/adult.',
  },
  'saugatuck': {
    title: 'Private Hibachi Chef in Saugatuck, MI | Lake House & Vacation Rental Events | Hibachi Connect',
    desc:  'Book a private hibachi chef for your Saugatuck MI lake house, vacation rental, or bachelorette weekend. Chef comes to you. Full setup & cleanup. From $60/adult.',
  },
  'traverse-city': {
    title: 'Private Hibachi Chef in Traverse City, MI | Wine Country Cottage & Resort Events | Hibachi Connect',
    desc:  'Book a private hibachi chef for your Traverse City cottage, resort property, or wine country rental. Old Mission Peninsula events welcome. Full setup & cleanup. From $60/adult.',
  },
}

// ── Closing variants (MI generic 249–254) ─────────────────────────────────────
export const MI_CLOSING_VARIANTS = [
  // 249 — Detroit Metro Luxury
  {
    headline: (city) => `Your ${city} Estate Dinner Starts Here`,
    sub:      (city) => `A certified teppanyaki chef. Premium proteins including filet mignon and lobster tail. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Bloomfield Hills and Birmingham estate dates book 3–4 weeks out. Reserve your evening now.`,
  },
  // 250 — Detroit Metro Corporate/Professional
  {
    headline: (city) => `Your ${city} Event Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  `Detroit Metro weekend and corporate slots fill 2–4 weeks out. Check your date now.`,
  },
  // 251 — Detroit Metro Suburban
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $60 per adult in ${city}.`,
    urgency:  `Detroit suburb graduation weekends book 2–3 weeks ahead. Secure your date now.`,
  },
  // 252 — West Michigan
  {
    headline: (city) => `${city}'s Best Backyard Dinner — Reserve Your Date`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $60/adult in ${city}.`,
    urgency:  `West Michigan graduation and summer dates fill quickly. Confirm your event now.`,
  },
  // 253 — Lake Michigan Shore
  {
    headline: (city) => `The ${city} Lake House Dinner Your Weekend Deserves`,
    sub:      (city) => `A certified hibachi chef travels to your ${city} lake house or vacation rental. Premium proteins, live teppanyaki, complete cleanup. From $60 per adult.`,
    urgency:  `Lake Michigan summer dates fill 3–4 weeks ahead. Reserve your lake house evening now.`,
  },
  // 254 — Northern Michigan Destination
  {
    headline: (city) => `The ${city} Cottage Dinner Worth Planning Around`,
    sub:      (city) => `Certified teppanyaki chefs travel to your ${city} cottage or resort property. Fresh proteins, live fire performance, complete cleanup. From $60/adult.`,
    urgency:  `Northern Michigan summer dates fill fast. Confirm your date now.`,
  },
]

// ── City-specific closings (MI city-specific 255–259, Batch 1) ─────────────────
export const MI_CITY_CLOSINGS = [
  // 255 — Bloomfield Hills (profileIdx 0)
  {
    headline: () => `Bloomfield Hills' Private Dining Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Bloomfield Hills estate or property. Filet mignon, lobster tail, premium proteins. Full setup, flawless performance, complete cleanup. From $60/adult.`,
    urgency:  `Bloomfield Hills estate and executive events book 3–4 weeks ahead. Reserve your evening now.`,
  },
  // 256 — Birmingham (profileIdx 1)
  {
    headline: () => `Birmingham's Private Dining Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Birmingham estate or property — Maple Road adjacent, downtown Birmingham, or residential neighborhood. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Birmingham estate events and private dinners book 3–4 weeks ahead. Confirm your date now.`,
  },
  // 257 — Troy (profileIdx 2)
  {
    headline: () => `Troy's Corporate Dinner Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Troy team dinner or private gathering. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Troy corporate events and weekend gatherings book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 258 — Royal Oak (profileIdx 3)
  {
    headline: () => `Royal Oak's Best Backyard Dinner — Reserve Your Date`,
    sub:      () => `A certified hibachi chef at your Royal Oak home or backyard. All proteins and ingredients. Complete setup and cleanup. From $60/adult.`,
    urgency:  `Royal Oak and Woodward corridor weekend events fill fast. Reserve your date now.`,
  },
  // 259 — Novi (profileIdx 4)
  {
    headline: () => `Novi's Milestone Celebration Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Novi graduation, milestone, or community event. Dual stations available for 25+ guests. Full setup and cleanup. From $60/adult.`,
    urgency:  `Novi graduation season (May–June) and weekend events fill 2–3 weeks ahead. Reserve your date now.`,
  },
  // 260 — Ann Arbor (profileIdx 5)
  {
    headline: () => `Ann Arbor's Best Graduation Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Ann Arbor home or backyard for graduation season, academic milestones, and private celebrations. Full setup and cleanup. From $60/adult.`,
    urgency:  `Ann Arbor U of M graduation weekends (May–June) book 3–4 weeks ahead. Reserve your date early.`,
  },
  // 261 — Dearborn (profileIdx 6)
  {
    headline: () => `Dearborn's Private Dining Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Dearborn corporate event, community celebration, or family milestone. Full setup and cleanup. From $60/adult.`,
    urgency:  `Dearborn corporate and community events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 262 — Canton (profileIdx 7)
  {
    headline: () => `Canton's Best Backyard Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Canton home for graduation parties, milestone celebrations, and backyard events. Dual stations for 25+ guests. Full setup and cleanup. From $60/adult.`,
    urgency:  `Canton graduation season (May–June) and weekend events fill 2–3 weeks ahead. Reserve your date now.`,
  },
  // 263 — Sterling Heights (profileIdx 8)
  {
    headline: () => `Sterling Heights' Backyard Dinner Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Sterling Heights home for family milestone celebrations, cultural events, and backyard gatherings. Full setup and cleanup. From $60/adult.`,
    urgency:  `Sterling Heights weekend and milestone events fill quickly. Reserve your date now.`,
  },
  // 264 — Rochester Hills (profileIdx 9)
  {
    headline: () => `Rochester Hills' Best Backyard Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Rochester Hills home for graduation parties, birthday milestones, and summer backyard celebrations. Full setup and cleanup. From $60/adult.`,
    urgency:  `Rochester Hills graduation and summer weekend events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 265 — Grand Rapids (profileIdx 10)
  {
    headline: () => `Grand Rapids' Corporate Dinner Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Grand Rapids corporate event, graduation party, or private gathering. Full setup and cleanup. From $60/adult.`,
    urgency:  `Grand Rapids corporate and graduation events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 266 — Kalamazoo (profileIdx 11)
  {
    headline: () => `Kalamazoo's Best Backyard Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Kalamazoo home for WMU graduation parties, birthday milestones, and backyard celebrations. Full setup and cleanup. From $60/adult.`,
    urgency:  `Kalamazoo graduation weekends and summer events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 267 — Lansing (profileIdx 12)
  {
    headline: () => `Lansing's Best Backyard Dinner — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef for your Lansing graduation party, corporate event, or milestone celebration. Full setup and cleanup. From $60/adult.`,
    urgency:  `Lansing MSU graduation season (May–June) and weekend events fill fast. Reserve your date now.`,
  },
  // 268 — Holland (profileIdx 13)
  {
    headline: () => `Holland's Lake Shore Dinner Standard — Reserve Your Date`,
    sub:      () => `A certified teppanyaki chef at your Holland lake house, vacation rental, or backyard. Full setup and cleanup. From $60/adult.`,
    urgency:  `Holland summer lake shore events book 3–4 weeks ahead. Reserve your date now.`,
  },
  // 269 — Saugatuck (profileIdx 14)
  {
    headline: () => `The Saugatuck Lake House Dinner Your Weekend Deserves — Reserve Now`,
    sub:      () => `A certified hibachi chef travels to your Saugatuck lake house or vacation rental. Premium proteins, live teppanyaki, complete cleanup. From $60 per adult.`,
    urgency:  `Saugatuck summer lake house events book 3–4 weeks ahead. Secure your weekend now.`,
  },
  // 270 — South Haven (profileIdx 15)
  {
    headline: () => `The South Haven Lake House Dinner Your Weekend Deserves — Reserve Now`,
    sub:      () => `A certified hibachi chef travels to your South Haven vacation rental or lake house. All proteins, full performance, complete cleanup. From $60 per adult.`,
    urgency:  `South Haven summer vacation dates book 3–4 weeks ahead. Reserve your evening now.`,
  },
  // 271 — Traverse City (profileIdx 16)
  {
    headline: () => `The Traverse City Cottage Dinner Worth Planning Around — Reserve Now`,
    sub:      () => `A certified hibachi chef travels to your Traverse City cottage, resort, or wine country rental. Premium proteins, live fire performance, complete cleanup. From $60 per adult.`,
    urgency:  `Traverse City summer cottage dates fill fast. Confirm your Northern Michigan dinner now.`,
  },
  // 272 — Petoskey (profileIdx 17)
  {
    headline: () => `The Petoskey Resort Dinner Worth Planning Around — Reserve Now`,
    sub:      () => `A certified hibachi chef travels to your Petoskey resort, cottage, or Bay Harbor property. Premium proteins, live teppanyaki, complete cleanup. From $60 per adult.`,
    urgency:  `Petoskey and Bay Harbor summer events book 3–4 weeks ahead. Secure your date now.`,
  },
]

// ── Intro variants (MI generic 249–254) ───────────────────────────────────────
export const MI_INTRO_VARIANTS = [
  // 249 — Detroit Metro Luxury
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Executive Entertaining for Michigan's Most Prestigious Addresses`,
    opening:  (city) =>
      `${city} sets the standard for private entertaining in Michigan — the estate properties where auto industry careers are made, the outdoor terraces where the right private dinner says more than any restaurant reservation ever could. Private hibachi at your ${city} property brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance calibrated for Michigan's highest standard of private entertaining. Bloomfield Hills and Birmingham are the addresses that define excellence in the Detroit Metro. The dinner worth hosting here happens at the property — not down the street.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, wagyu upgrades, and premium Chilean sea bass — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your estate terrace, rear patio, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For estate gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  (city) =>
      `${city} estate events book 3–4 weeks ahead — spring through summer fills fastest. Starting at $60 per adult, $600 event minimum. Premium protein packages available for any ${city} occasion. Most quotes confirmed same day.`,
  },
  // 250 — Detroit Metro Corporate/Professional
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for the Detroit Metro Corridor`,
    opening:  (city) =>
      `The Detroit Metro runs on the automotive industry, the professional services that support it, and the diverse communities that have built something remarkable in these suburbs. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space — suburban backyard, corporate townhouse patio, or residential property — with everything included: the full setup, all fresh ingredients, and a live-fire cooking performance that turns any ${city} gathering into the evening your guests are still referencing the following week. Corporate teams at Troy and Novi. Young professional birthdays and bachelorettes in Royal Oak. Diverse community milestone celebrations throughout the Oakland County corridor.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events up to 60+. Full cleanup when dinner is done.`,
    closing:  (city) =>
      `${city} weekend events and corporate dinners book 2–4 weeks out during peak season. Starting at $60 per adult, $600 event minimum. Graduation season (May–June) fills fastest — reserve early for any spring Saturday event. Most quotes confirmed same day.`,
  },
  // 251 — Detroit Metro Suburban
  {
    headline: (city) => `Hibachi at Home in ${city}: The Backyard Celebration Michigan's Suburbs Deserve`,
    opening:  (city) =>
      `${city} knows how to celebrate — the graduation parties that bring relatives in from across the state, the birthday milestones for South Asian, Arab-American, and diverse families who mark every occasion with genuine intention, and the summer backyard evenings that finally feel right for something extraordinary. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any Detroit suburb backyard into the dinner your guests reference at the next occasion.`,
    middle:   (city) =>
      `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for large graduations, family reunions, and milestone parties are our most common format across the Detroit suburbs.`,
    closing:  (city) =>
      `${city} weekend events book 2–3 weeks out during peak season. Graduation season (May–June) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 252 — West Michigan
  {
    headline: (city) => `Hibachi at Home in ${city}: West Michigan's Best Backyard Dinner`,
    opening:  (city) =>
      `West Michigan celebrates differently — the Dutch Reformed community's family gathering culture, the growing Grand Rapids corporate and food scene, and the university communities at Kalamazoo and Lansing that mark graduation season with the energy it deserves. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any West Michigan gathering into the event your guests plan around for next time.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city) =>
      `${city} weekend events book 2–3 weeks ahead. University graduation season (May–June) and summer weekends fill fastest. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 253 — Lake Michigan Shore
  {
    headline: (city) => `Private Hibachi at Your ${city} Lake House: The Dinner That Defines the Weekend`,
    opening:  (city) =>
      `${city} draws guests who came specifically for an experience — the Lake Michigan shoreline, the vacation rental that sleeps fifteen, the bachelorette weekend or family reunion that someone has been planning for six months. Private hibachi at your ${city} lake house or vacation rental brings a certified teppanyaki chef to your property with hand-selected proteins and a live-fire performance that becomes the anchor memory of the entire trip. No restaurant reservation. No driving. No competing for a table with summer tourists. The chef comes to you.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or lakefront outdoor space. The performance runs 90–120 minutes from first flame to final plate. For vacation groups over 25, we bring dual chef stations. Full cleanup when dinner is done. Your rental property is immaculate when the chef leaves.`,
    closing:  (city) =>
      `${city} summer lake house events book 3–4 weeks ahead — peak July and August weekends fill fastest. Starting at $60 per adult, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 254 — Northern Michigan Destination
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Northern Michigan Cottage & Resort Entertaining`,
    opening:  (city) =>
      `${city} is where Michigan families come to slow down — the cottage on Little Traverse Bay, the resort property near Harbor Springs and Mackinac Island, the Traverse City wine country rental where the whole weekend is planned around one extraordinary evening. Private hibachi at your ${city} property brings a certified teppanyaki chef with hand-selected premium proteins and a live-fire performance that pairs as naturally with a Northern Michigan sunset as it does with the Old Mission Peninsulas finest wines. The dinner worth planning around is the one that happens at your cottage.`,
    middle:   (city) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — filet mignon, lobster tail, and premium upgrades available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, deck, or cottage grounds. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your property is immaculate when the chef leaves.`,
    closing:  (city) =>
      `${city} Northern Michigan events book 3–4 weeks ahead — peak summer months fill fastest. Starting at $60 per adult, $600 event minimum. Travel fees may apply for remote locations — always disclosed upfront. Most quotes returned same day.`,
  },
]

// ── City-specific intros (MI city-specific 255–259, Batch 1) ──────────────────
export const MI_CITY_INTROS = [
  // 255 — Bloomfield Hills (profileIdx 0)
  {
    headline: () => `Private Hibachi Chef in Bloomfield Hills`,
    opening:  () =>
      `Bloomfield Hills is one of the wealthiest communities per capita in the United States — the Cranbrook estate neighborhood, the properties along Long Lake Road where auto industry executives have entertained for generations, and the addresses that represent Michigan's highest standard of private living. Private hibachi at your Bloomfield Hills estate brings a certified teppanyaki chef with the full setup, hand-selected premium proteins, and a live-fire performance built for Michigan's most discerning hosts. The Bloomfield Hills estate dinner has a profile distinct from any other market we serve: guest lists that include automotive C-suite executives, corporate attorneys, medical system leaders, and their families, gathered at a rear terrace or estate patio for the kind of exclusive evening no restaurant in the Detroit Metro can replicate.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, wagyu upgrades, and Chilean sea bass — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your estate terrace, patio, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order in front of your guests. For Bloomfield Hills estate gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done. Your property is exactly as you left it.`,
    closing:  () =>
      `Bloomfield Hills estate events book 3–4 weeks ahead — spring through summer fills fastest. Serving Bloomfield Hills and all of Metro Detroit — Birmingham, Troy, Royal Oak, Novi, Grosse Pointe, and surrounding Oakland County communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 256 — Birmingham (profileIdx 1)
  {
    headline: () => `Private Hibachi Chef in Birmingham`,
    opening:  () =>
      `Birmingham is Metro Detroit's most accomplished suburb — the boutique Maple Road restaurant corridor, the Old Woodward dining district, the properties where professionals from across Oakland County choose to live when they've earned the right address. Private hibachi at your Birmingham property brings a certified teppanyaki chef with the full setup and a live-fire performance for the dinner that those Birmingham restaurants can never quite deliver: exclusive, private, unhurried, and entirely for your guests. Anniversary celebrations on the patio, estate dinner parties that bring clients and colleagues together at your property rather than a table at someone else's restaurant, and milestone birthdays that deserve more than the standard reservation.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and premium upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order. For Birmingham gatherings over 25, we deploy dual chef stations. Complete cleanup when dinner is done.`,
    closing:  () =>
      `Birmingham events book 3–4 weeks ahead. Serving Birmingham and all of Metro Detroit — Bloomfield Hills, Troy, Royal Oak, Novi, and surrounding Oakland County communities. Starting at $60/adult, $30/child, $600 event minimum. Premium protein packages available. Most quotes confirmed same day.`,
  },
  // 257 — Troy (profileIdx 2)
  {
    headline: () => `Hibachi Catering in Troy`,
    opening:  () =>
      `Troy is Michigan's corporate headquarters city — BorgWarner, Altair Engineering, Kelly Services, Flagstar Bank, and dozens of automotive suppliers and professional services firms have their Michigan offices or world headquarters here. The Somerset Collection drives Troy's luxury retail and corporate gifting culture. The corporate client dinner in Troy occupies a different tier than the standard company outing — it needs a format that matches the standard of the relationship being built. Hibachi catering for your Troy corporate event brings a certified teppanyaki chef to your outdoor venue with the full setup and a live-fire cooking performance that turns any team dinner or client appreciation event into the one your guests are referencing when the next occasion comes up.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For corporate Troy events over 25 guests — standard for team dinners and client events — we bring two chef stations running simultaneously. Setup takes 20–30 minutes at your venue. The performance runs 90–120 minutes of live cooking. Complete cleanup when the event is done.`,
    closing:  () =>
      `Troy corporate events and weekend gatherings book 2–4 weeks ahead. Serving Troy and all of Metro Detroit — Birmingham, Bloomfield Hills, Royal Oak, Novi, Sterling Heights, and surrounding Oakland and Macomb County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 258 — Royal Oak (profileIdx 3)
  {
    headline: () => `Hibachi at Home in Royal Oak`,
    opening:  () =>
      `Royal Oak is where Metro Detroit's young professional community has landed — the Woodward Avenue corridor, the walkable neighborhoods between Ferndale and Berkley, the 25–40 year old homeowners who want a backyard birthday dinner or bachelorette weekend that genuinely stands apart from the Main Street restaurant they've already been to a dozen times. Hibachi at home in Royal Oak brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire cooking performance built for the kind of crowd that shows up at a Royal Oak birthday party: engaged, ready to laugh, and open to something they've never quite experienced before. The fire tricks, the flying shrimp, and the entire group gathered at the same grill for two hours — this is the format that makes the Royal Oak backyard the place people are talking about the next Monday.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes in your backyard or on your patio. The performance runs 90–120 minutes from first flame to final plate. For Royal Oak events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Royal Oak weekend events book 2–4 weeks ahead. Serving Royal Oak and all of Metro Detroit — Birmingham, Troy, Bloomfield Hills, Ferndale, Clawson, and surrounding Oakland County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 259 — Novi (profileIdx 4)
  {
    headline: () => `Mobile Hibachi in Novi`,
    opening:  () =>
      `Novi's South Asian community is among the largest in Michigan — the Twelve Oaks corridor, the Novi Town Center neighborhoods, and the extended families who have made this growing Oakland County suburb one of Metro Detroit's most vibrant communities. Milestone occasions here — graduation parties, engagement celebrations, Diwali dinners, milestone birthdays — are produced at a scale and with an intention that most private dining formats struggle to match. Mobile hibachi in Novi brings a certified teppanyaki chef to your outdoor space with dual-station capacity for 40–80 guests, the full setup, and a live-fire performance that the entire guest list — from grandparents who drove in from Canton to cousins visiting from the East Coast — can gather around simultaneously. No crowded restaurant. No split tables. The entire community at the same grill, the same chef, the same fire tricks, the same moment.`,
    middle:   () =>
      `Your chef (or two for large groups) arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Novi milestone events over 25 guests — standard for the graduation and celebration culture here — we bring two chef stations running simultaneously. Setup takes 30 minutes. The performance runs 90–120 minutes. Full cleanup when dinner is done.`,
    closing:  () =>
      `Novi graduation season (May–June) and weekend events book 2–3 weeks ahead. Serving Novi and all of Metro Detroit — Troy, Plymouth, Canton, Northville, Birmingham, and surrounding Oakland and Wayne County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 260 — Ann Arbor (profileIdx 5)
  {
    headline: () => `Hibachi at Home in Ann Arbor`,
    opening:  () =>
      `Ann Arbor is one of Michigan's most intellectually and culturally charged cities — the University of Michigan campus, the Michigan Medicine research corridor, the tech sector companies that have spun out of U of M and clustered around the downtown, and the graduation culture that makes May weekends in Ann Arbor one of the most competitive event scheduling environments in the state. Private hibachi at home in Ann Arbor brings a certified teppanyaki chef to your backyard or outdoor space when graduation weekend has every restaurant in the city fully booked and waiting lists that stretch for months. The smart Ann Arbor family doesn't compete for a restaurant table — they book the chef and bring the experience to the property. Graduation parties of 30–60 guests, professor retirement dinners, academic milestone celebrations, and the summer backyard events that the Ann Arbor food and wine community plans with genuine intention.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins — chicken, steak, shrimp, scallops, lobster tail upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order. For Ann Arbor events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your backyard or on your patio. Full cleanup when dinner is done.`,
    closing:  () =>
      `Ann Arbor U of M graduation weekends (May–June) book 3–4 weeks ahead — reserve early for Saturday events during commencement. Serving Ann Arbor and surrounding southeast Michigan — Saline, Ypsilanti, Plymouth, Canton, Dexter, Chelsea, and the full Metro Detroit corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 261 — Dearborn (profileIdx 6)
  {
    headline: () => `Hibachi Catering in Dearborn`,
    opening:  () =>
      `Dearborn is the heart of Arab-American life in the United States — the largest Arab-American community in the country, the cultural institutions that anchor community life along Michigan Avenue and Warren Avenue, and the families and businesses that have built something remarkable in this industrial city adjacent to Detroit. It's also the headquarters of Ford Motor Company. The private event culture in Dearborn reflects both: corporate client dinners and team celebrations that represent Ford's global scale and automotive engineering legacy, alongside the community gatherings — Eid al-Fitr dinners, engagement parties, milestone birthdays, and family reunions — that the Arab-American and Chaldean community marks with the full weight of their celebratory tradition. Hibachi catering in Dearborn brings a certified teppanyaki chef to your venue, outdoor space, or backyard with the full setup and a live-fire cooking performance built for both corporate and community occasions.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Dearborn corporate and community events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes at your location. The performance runs 90–120 minutes. Full cleanup when the event is done.`,
    closing:  () =>
      `Dearborn corporate and community events book 2–3 weeks ahead. Serving Dearborn and all of Metro Detroit — Detroit, Livonia, Canton, Taylor, Allen Park, Dearborn Heights, and the full Wayne County corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 262 — Canton (profileIdx 7)
  {
    headline: () => `Hibachi at Home in Canton`,
    opening:  () =>
      `Canton Township is one of southeast Michigan's fastest-growing communities — the Plymouth-Canton school district that produces one of the most competitive academic cultures in the state, a large South Asian and East Asian community that has transformed this Wayne County suburb into one of Metro Detroit's most diverse municipalities, and the extended family networks that mark graduation season with the scale and intention it deserves. Hibachi at home in Canton brings a certified teppanyaki chef to your outdoor space for the graduation parties of 40–80 guests that the Canton celebration culture expects, the milestone birthday dinners for dual-income families who can afford to do the occasion right, and the backyard summer events where the entire extended family gathers from across southeast Michigan. The Canton graduation party is one of the most competitive event bookings in the Detroit Metro — and the families who book private hibachi typically make that call in early spring for a reason.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Canton graduation and milestone events over 25 guests — the standard here — we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your backyard. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Canton graduation weekends (May–June) book 2–3 weeks ahead — reserve 3–4 weeks ahead for Saturday events. Serving Canton and southeast Michigan — Plymouth, Northville, Novi, Ann Arbor, Westland, Belleville, and the full Wayne and Washtenaw County corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 263 — Sterling Heights (profileIdx 8)
  {
    headline: () => `Hibachi at Home in Sterling Heights`,
    opening:  () =>
      `Sterling Heights is Michigan's fourth-largest city and Macomb County's cultural and commercial center — the Chaldean and Arab-American community that has built some of the most successful businesses in the Detroit Metro along Van Dyke Avenue and Hall Road, the manufacturing and automotive families who have lived in this northeastern suburb for generations, and the growing diverse population that makes Sterling Heights one of the most genuinely multicultural cities in southeast Michigan. Private hibachi at home in Sterling Heights brings a certified teppanyaki chef to your outdoor space for the large family milestone celebrations, holiday gatherings, and backyard events that the Sterling Heights community marks with full intention. The Chaldean community here in particular has a celebration culture built around large extended family gatherings — and a dual-station hibachi setup for 50–80 guests is one of the best formats for the kind of occasion where everyone at the table matters.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Sterling Heights milestone events over 25 guests — standard for the family gathering culture here — we bring two chef stations running simultaneously. Setup takes 20–30 minutes in your backyard or outdoor space. The performance runs 90–120 minutes. Full cleanup when dinner is done.`,
    closing:  () =>
      `Sterling Heights weekend events and milestone celebrations book 2–3 weeks ahead. Serving Sterling Heights and all of Macomb County — Troy, Clinton Township, Warren, Shelby Township, Utica, Fraser, and the full northeast Detroit Metro corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 264 — Rochester Hills (profileIdx 9)
  {
    headline: () => `Backyard Hibachi in Rochester Hills`,
    opening:  () =>
      `Rochester Hills is one of Oakland County's most established suburban communities — the Rochester Community Schools district that has produced some of the top graduating classes in Michigan, Oakland University and its surrounding student and family community, the upscale residential neighborhoods throughout Stoney Creek and Paint Creek that define this northeast Oakland County suburb. Backyard hibachi in Rochester Hills brings a certified teppanyaki chef to your property for the graduation parties where Rochester parents host out-of-town family from across the state, the birthday milestone dinners that match the standard of the neighborhood, and the summer backyard events that the Rochester Hills outdoor entertaining culture was built for. The private hibachi format works exceptionally well here: families with outdoor space who want to host their guests at home rather than compete for restaurant tables in a month when half the city is booking.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes in your backyard or on your patio. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order. For Rochester Hills events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Rochester Hills graduation and summer weekend events book 2–3 weeks ahead. Serving Rochester Hills and all of Oakland County — Troy, Auburn Hills, Lake Orion, Shelby Township, Clarkston, Pontiac, and the full north Oakland County corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 265 — Grand Rapids (profileIdx 10)
  {
    headline: () => `Hibachi Catering in Grand Rapids`,
    opening:  () =>
      `Grand Rapids is the economic and cultural capital of West Michigan — Amway and the DeVos family enterprises that helped shape this city's philanthropic and commercial character, Meijer headquarters, Steelcase and Herman Miller and the furniture and manufacturing corridor that has diversified into technology and healthcare, and Spectrum Health making Grand Rapids one of the strongest healthcare employment markets in Michigan. The West Michigan business culture has its own distinct character: values-driven, community-oriented, and intensely local. Hibachi catering in Grand Rapids brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire cooking performance built for the corporate team dinners, client appreciation events, graduation celebrations, and community milestone occasions that define how Grand Rapids companies and families mark their best moments. Ada and East Grand Rapids — the upscale residential communities east of the city — are among our most active booking markets in West Michigan.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Grand Rapids corporate and milestone events over 25 guests, we bring two chef stations running simultaneously. Setup takes 20–30 minutes at your venue or outdoor space. The performance runs 90–120 minutes. Full cleanup when done.`,
    closing:  () =>
      `Grand Rapids corporate and community events book 2–3 weeks ahead. Serving Grand Rapids and all of West Michigan — Ada, East Grand Rapids, Kentwood, Wyoming, Grandville, Rockford, and the full Kent County corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 266 — Kalamazoo (profileIdx 11)
  {
    headline: () => `Hibachi at Home in Kalamazoo`,
    opening:  () =>
      `Kalamazoo is southwest Michigan's university and medical city — Western Michigan University's 20,000-student campus and its graduation culture, Kalamazoo College's tight academic community, Stryker's medical device engineering workforce, and Bell's Brewery and the craft economy that has made Kalamazoo one of the most culturally vibrant mid-size cities in the Midwest. Hibachi at home in Kalamazoo brings a certified teppanyaki chef to your backyard or outdoor space for the WMU and K-College graduation parties where family drives in from across Michigan and Indiana, the backyard summer celebrations that Kalamazoo's food-and-drink culture has made into an art form, and the Stryker and medical professional entertaining that matches the occasion with the right format. Private hibachi in Kalamazoo is especially effective during graduation season, when every downtown restaurant is packed and the families who planned ahead are hosting their graduate's party at home with a live chef.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes in your backyard or on your patio. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order. For Kalamazoo events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Kalamazoo graduation weekends and summer events book 2–3 weeks ahead. Serving Kalamazoo and southwest Michigan — Portage, Richland, Battle Creek, Mattawan, Schoolcraft, Plainwell, and the full Kalamazoo County corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 267 — Lansing (profileIdx 12)
  {
    headline: () => `Mobile Hibachi in Lansing`,
    opening:  () =>
      `Lansing is Michigan's state capital and home to Michigan State University — the Spartan graduation culture that produces some of the largest and most emotionally charged graduation weekends in the state, the state government and legislative professional community that works along Capitol Avenue, GM's Lansing Delta Township and Grand River Assembly plants and the automotive and manufacturing workers who have built careers here, and the East Lansing community along Grand River Avenue where bars and restaurants fill to capacity every May weekend. Mobile hibachi in Lansing brings a certified teppanyaki chef to your outdoor space for the MSU graduation party where the entire extended family has driven from across Michigan and Ohio, the state government team dinner that needs a format that works for the professionals in the room, and the Lansing family milestone celebration that deserves more than the standard restaurant option. Haslett, Okemos, DeWitt, and the surrounding East Lansing suburban communities are all within our standard service radius.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. For Lansing graduation and milestone events over 25 guests — the standard for MSU family weekends — we bring two chef stations running simultaneously. Setup takes 20–30 minutes. The performance runs 90–120 minutes. Full cleanup when dinner is done.`,
    closing:  () =>
      `Lansing MSU graduation weekends (May–June) and weekend events book 2–3 weeks ahead — reserve 3–4 weeks ahead for Saturday commencement events. Serving Lansing and the greater mid-Michigan area — East Lansing, Okemos, Haslett, DeWitt, Mason, Grand Ledge, and the full Ingham County corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 268 — Holland (profileIdx 13)
  {
    headline: () => `Hibachi at Home in Holland`,
    opening:  () =>
      `Holland is one of Lake Michigan's most distinctive shore communities — the Dutch-heritage city whose Tulip Time Festival draws more than half a million visitors each May, Hope College's beautiful downtown campus and the graduation families who converge on Holland every spring for the commencement weekend, the Lake Macatawa and Lake Michigan waterfront properties where West Michigan's most accomplished families host summer gatherings, and the vacation rental corridor that fills each summer with bachelorette parties, family reunions, and anniversary groups looking for the Lake Michigan shoreline experience without the Saugatuck price premium. Hibachi at home in Holland brings a certified teppanyaki chef to your lake house, vacation rental, or backyard for the dinner that defines the occasion — the Hope College graduation party, the anniversary dinner on the Lake Macatawa deck, the bachelorette weekend that ends with fire tricks and flying shrimp. Zeeland and Grand Haven — Holland's neighboring Lake Michigan communities — are all within our standard service radius.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or shoreline outdoor space. The performance runs 90–120 minutes from first flame to final plate. For Holland events over 25 guests, we bring two chef stations. Full cleanup when dinner is done — your vacation rental is immaculate when the chef leaves.`,
    closing:  () =>
      `Holland summer lake house events and graduation weekends book 3–4 weeks ahead. Serving Holland and the Lake Michigan shore corridor — Zeeland, Hudsonville, Grand Haven, Saugatuck, West Olive, Macatawa, and the full Ottawa County shoreline. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 269 — Saugatuck (profileIdx 14)
  {
    headline: () => `Private Hibachi Chef in Saugatuck`,
    opening:  () =>
      `Saugatuck is one of the most sought-after lakefront destination communities in the Midwest — the art galleries and boutique shops that line Butler Street, the waterfront properties along Kalamazoo Lake where Chicago weekenders have been investing in vacation homes for decades, and the Lake Michigan shoreline that consistently lands Saugatuck on every list of the best beach towns east of the Mississippi. The guests who arrive in Saugatuck have driven two to four hours, booked the rental six months in advance, and planned the weekend around the idea of doing exactly what they want to do and nothing else. Private hibachi in Saugatuck brings a certified teppanyaki chef to your lake house or vacation rental for the dinner that becomes the anchor of the weekend — the bachelorette Saturday where every other activity is optional but the hibachi dinner is the plan, the anniversary evening where you stopped competing with every other couple trying to get into one of the five restaurants in town, the family reunion where thirty people are finally in the same place and the dinner needs to match the occasion. Douglas, just across the Kalamazoo River, falls within our standard radius.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including premium upgrades like lobster tail and filet mignon, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or lakefront outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order. For Saugatuck vacation groups over 25, we bring two chef stations. Full cleanup when dinner is done — your rental property is exactly as you found it when the chef leaves.`,
    closing:  () =>
      `Saugatuck summer events book 3–4 weeks ahead — peak July and August weekends fill fastest. Travel fees may apply for remote lake house locations — always disclosed upfront. Serving Saugatuck, Douglas, and the Lake Michigan shore corridor — Holland, South Haven, Fennville, Allegan, and surrounding Allegan County communities. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 270 — South Haven (profileIdx 15)
  {
    headline: () => `Hibachi at Home in South Haven`,
    opening:  () =>
      `South Haven is the Lake Michigan shore town that Chicago families have claimed as their own — the blue-star beaches and the South Pier lighthouse that appear in every Michigan summer bucket list, the downtown vacation rentals and lake house properties that families have been returning to for generations, and the seasonal influx of Chicago weekenders who drive three hours to Lake Michigan and spend every moment on or near the water. Hibachi at home in South Haven brings a certified teppanyaki chef to your vacation rental or lake house for the dinner that turns a good summer weekend into the one your group is still talking about in September. The bachelorette group that discovered they'd rather have the chef at the rental than fight for a table on Phoenix Street. The family reunion that finally had everyone in the same place and the dinner needed to be as memorable as the occasion. The Chicago couple who realized that a private chef at the lake house is exactly what the South Haven anniversary weekend was missing.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or lake house outdoor space. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order. For South Haven vacation groups over 25, we bring two chef stations. Full cleanup when dinner is done — your rental is immaculate when the chef leaves.`,
    closing:  () =>
      `South Haven summer vacation events book 3–4 weeks ahead. Serving South Haven and the Lake Michigan shore — Saugatuck, Holland, Bangor, Covert, Hagar Shores, and Hartford. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 271 — Traverse City (profileIdx 16)
  {
    headline: () => `Private Hibachi Chef in Traverse City`,
    opening:  () =>
      `Traverse City is Northern Michigan at its finest — the Cherry Festival and the Traverse City Film Festival that define the cultural calendar, the Old Mission Peninsula and Leelanau Peninsula wineries that have made this the wine country of the Midwest, the Grand Traverse Bay waterfront where cottages and resort properties compete for the view, and the broader Northern Michigan destination ecosystem that includes Harbor Springs, Bay Harbor, and Mackinac Island just to the north. The guests who come to Traverse City are not casually here. They planned this trip months in advance. They booked the rental on the Old Mission Peninsula or the cottage on East Bay for the specific purpose of having an extraordinary week in one of Michigan's most beautiful places. Private hibachi at your Traverse City property brings a certified teppanyaki chef with hand-selected premium proteins and a live-fire performance that pairs as naturally with a 2022 Bowers Harbor Riesling as it does with a Northern Michigan July sunset. Guests who have ventured to Harbor Springs, Bay Harbor, or Mackinac Island earlier in the week often extend the Northern Michigan experience with a cottage hibachi dinner back in Traverse City before heading home — and that's exactly the format we're built for.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins including filet mignon, lobster tail, and premium upgrades — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your cottage terrace, resort deck, or property grounds. The performance runs 90–120 minutes from first flame to final plate — fire tricks, precision knife work, and every dish cooked to order. For Traverse City cottage groups over 25, we bring two chef stations. Full cleanup when dinner is done — your property is immaculate when the chef leaves.`,
    closing:  () =>
      `Traverse City summer cottage and resort events book 3–4 weeks ahead — peak season (July–August) and the National Cherry Festival week fill fastest. Travel fees may apply for remote Old Mission Peninsula or Leelanau County locations — always disclosed upfront. Serving Traverse City and Northern Michigan — Traverse City Township, Acme, Elk Rapids, Suttons Bay, Glen Arbor, and the full Grand Traverse County corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
  // 272 — Petoskey (profileIdx 17)
  {
    headline: () => `Mobile Hibachi in Petoskey`,
    opening:  () =>
      `Petoskey is Northern Michigan's most refined resort community — the Gaslight District's galleries and boutiques that define the downtown experience, Bay Harbor's private marina and estate properties that house some of the most exclusive summer addresses in the Great Lakes region, and the proximity to Harbor Springs and Mackinac Island that makes Petoskey the natural center of Northern Michigan's most accomplished summer community. The guests who are in Petoskey during the summer months are here for the full experience: the Little Traverse Bay sailing, the Bay Harbor yacht club, the Walloon Lake or Lake Charlevoix cottage that the family has been coming back to for forty years, and an evening that matches the weight of the occasion. Mobile hibachi in Petoskey brings a certified teppanyaki chef to your resort property, estate, or Bay Harbor cottage for the dinner that anchors the week. Anniversary couples who spent the day in Harbor Springs and want the evening to be even better. Families at Mackinac Island who return to their Petoskey cottage base for a summer gathering that the whole group has been anticipating. Executive retreats at the resort properties along Little Traverse Bay who want the team dinner to be as impressive as the surroundings.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected premium proteins — filet mignon, lobster tail, Chilean sea bass, and wagyu upgrades available — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your terrace, deck, or resort grounds. The performance runs 90–120 minutes from first flame to final plate. For Petoskey resort and estate groups over 25, we bring two chef stations. Full cleanup when dinner is done — your property is exactly as it was.`,
    closing:  () =>
      `Petoskey and Bay Harbor summer events book 3–4 weeks ahead — peak July and August fill fastest. Travel fees may apply for remote Bay Harbor estate or Lake Charlevoix locations — always disclosed upfront. Serving Petoskey and Northern Michigan — Harbor Springs, Bay Harbor, Boyne City, Charlevoix, East Jordan, and the full Emmet and Charlevoix County corridor. Starting at $60/adult, $30/child, $600 event minimum. Most quotes confirmed same day.`,
  },
]

// ── Main city data function ───────────────────────────────────────────────────
export function getMichiganCityData(citySlug, cityName) {
  const major       = MI_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getMIVariantIndex(citySlug)
  const theme       = MI_IMAGE_THEMES[v]
  const displayName = cityName

  return {
    cityName:     displayName,
    stateName:    'Michigan',
    stateAbbr:    'MI',
    stateSlug:    'michigan',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: MI_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: MI_NEARBY_MAJOR[v],
    localHighlights:   MI_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: MI_OCCASIONS[v],
    faqSet:            MI_FAQ_SETS[v](displayName),
    testimonials:      MI_TESTIMONIALS[v],
    // INTRO_VARIANTS: 249–254 = MI generic, 255–272 = MI city-specific
    uniqueIntroVariant:  (major?.profileIdx != null) ? 255 + major.profileIdx : 249 + v,
    uniqueWhyUsVariant:  v % 5,
    // CLOSING_VARIANTS: 249–254 = MI generic, 255–272 = MI city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 255 + major.profileIdx : 249 + v,
    // H1 prefix for CityHero
    heroH1Prefix: major?.profileIdx != null
      ? MI_PROFILE_H1_PREFIXES[major.profileIdx]
      : MI_THEME_H1_PREFIXES[v],
    // Custom meta overrides
    ...(MI_CUSTOM_META[citySlug]
      ? { metaTitle: MI_CUSTOM_META[citySlug].title, metaDescription: MI_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getMiHowItWorks(citySlug) {
  const major = MI_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMIVariantIndex(citySlug)
  return MI_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getMiSectionVariant(citySlug) {
  const major = MI_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMIVariantIndex(citySlug)
  return MI_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getMiCityImage(citySlug) {
  return MI_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getMiSupportImages(citySlug) {
  if (MI_SUPPORT_IMAGES[citySlug]) return MI_SUPPORT_IMAGES[citySlug]
  const major = MI_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getMIVariantIndex(citySlug)
  return MI_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getMiBlogPosts(variant, count) {
  return MI_BLOG_POSTS[variant % MI_BLOG_POSTS.length].slice(0, count)
}
