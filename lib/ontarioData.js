// =============================================================================
// lib/ontarioData.js — Ontario Canada Expansion
// 22 cities · 7 geographic themes
// Theme 0: Toronto Urban Core (Toronto)
// Theme 1: GTA Affluent Suburbs (Markham, Richmond Hill, Vaughan, Oakville, Burlington)
// Theme 2: GTA Family & Community (Mississauga, Brampton, Ajax, Newmarket, Milton)
// Theme 3: Cottage Country & Resort (Barrie, Collingwood)
// Theme 4: Niagara Tourism (Niagara Falls)
// Theme 5: University & Corporate (Ottawa, Waterloo, Kitchener, London, Kingston, Hamilton)
// Theme 6: Luxury Cottage (Muskoka, Niagara-on-the-Lake)
//
// PRICING (CAD):
//   Adult: $78 · Child (4–12): $40 · Under 3: Free
//   Filet Mignon: +$8 · Lobster Tail: +$15 · Extra Protein: +$20
//   Gyoza: $15 · Edamame: $8 · Noodles: $8 · Minimum: $780
//
// INTRO_VARIANTS indices:   189–195 ON generic · 196–217 ON city-specific
// CLOSING_VARIANTS indices: 189–195 ON generic · 196–217 ON city-specific
// =============================================================================

// ── Variant hash ──────────────────────────────────────────────────────────────
export function getONVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) h = ((h << 5) + h) ^ citySlug.charCodeAt(i)
  return Math.abs(h) % 7
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const ON_HERO_SUBTITLES = [
  (city) => `Condo Terraces · Bachelorette Weekends · Milestone Birthdays · Serving ${city} & the GTA`,
  (city) => `Estate Backyard Events · Family Milestones · Corporate Entertaining · Serving ${city} & the GTA`,
  (city) => `Graduation Parties · Family Reunions · Backyard Celebrations · Serving ${city} & Greater Toronto`,
  (city) => `Cottage Weekend Dining · Victoria Day to Labour Day · Private Events · Serving ${city} & Cottage Country`,
  (city) => `Vacation Rental Chef · Honeymoon Dinners · Bachelor & Bachelorette · Serving ${city} & the Niagara Region`,
  (city) => `Corporate Team Dinners · Graduation Celebrations · Private Events · Serving ${city} & the Region`,
  (city) => `Estate Cottage Dining · Private Chef Experience · Milestone Retreats · Serving ${city} & the Region`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const ON_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Toronto Urban Core
  (city) => [
    `Private hibachi at Toronto's most iconic settings — condo terraces in King West, Leslieville backyards, Annex patios, Beaches homes, and Etobicoke estates`,
    'Perfect for bachelorette weekends, destination birthdays, and milestone anniversary dinners in Canada\'s entertainment capital',
    `Serving all of ${city} — downtown, midtown, east end, west end, the Beaches, Etobicoke, North York, Scarborough, and surrounding communities`,
    'Wedding pre-events, rehearsal dinners, and corporate client entertainment for Toronto\'s premier event season',
    `Spring and summer weekends in ${city} book 3–5 weeks ahead — confirm your date early for any May through September event`,
    'Premium proteins, full live performance, complete setup and cleanup — nothing for the host to manage',
  ],
  // Theme 1 — GTA Affluent Suburbs
  (city) => [
    `Private hibachi at ${city}'s finest estates, stone-patio properties, and suburban backyards built for exactly this kind of evening`,
    'Perfect for milestone birthdays, multi-generational family celebrations, corporate client dinners, and anniversary gatherings',
    `Serving ${city} and all of the surrounding GTA communities — every neighbourhood within the York Region and Peel Region corridors`,
    `Premium proteins including filet mignon and lobster tail available for ${city}'s most milestone-worthy occasions`,
    `Weekend evenings in ${city} book 2–4 weeks ahead during peak spring and summer season`,
    'Full setup and complete cleanup — your estate backyard or patio is spotless when the chef departs',
  ],
  // Theme 2 — GTA Family & Community
  (city) => [
    `Backyard hibachi for ${city}'s diverse community celebrations — graduation parties, family reunions, and cultural milestone events`,
    'Perfect for large multi-generational gatherings of 25–60+ guests in a city built around the family celebration',
    `Dual-station capacity for ${city}'s biggest graduation and reunion events — every guest at the same grill`,
    `Serving ${city} and the surrounding GTA — every community within the Peel Region, Halton Region, and Durham Region corridors`,
    `Graduation season (May–June) is our busiest window across the GTA — book 3–4 weeks ahead for Saturday events`,
    'Full setup and complete cleanup — the best alternative to restaurant group dining in the GTA',
  ],
  // Theme 3 — Cottage Country & Resort
  (city) => [
    `Private hibachi at your ${city} cottage, lakefront property, or resort chalet — no packed marina restaurant on a Friday night`,
    'Perfect for Victoria Day long weekends, Canada Day gatherings, Labour Day send-offs, and summer milestone weekends',
    `Chef travels to your ${city} property with full setup — everything arrives, everything departs, your cottage stays spotless`,
    'From the May long weekend through Labour Day — and select year-round events for cottage owners who stay through the seasons',
    `Peak cottage season (July–August) books 4–6 weeks ahead — confirm your date as early as possible`,
    'Full pack-out when dinner is done — your cottage or chalet property is exactly as you left it when the chef departs',
  ],
  // Theme 4 — Niagara Tourism
  (city) => [
    `Private hibachi at your ${city} vacation rental, inn, or retreat property — no crowded tourist strip reservation required`,
    'Perfect for honeymoon dinners, bachelorette weekends, bachelor parties, anniversary getaways, and wedding weekend groups',
    `Chef travels directly to your ${city} property — full setup, live fire performance, complete cleanup included`,
    'From spring through fall peak season — and year-round for Niagara residents and off-season visitors',
    `Peak Niagara summer season books 4–6 weeks ahead for Friday and Saturday events`,
    'Premium proteins and live teppanyaki performance suited to a Niagara occasion worth remembering',
  ],
  // Theme 5 — University & Corporate
  (city) => [
    `Corporate team dinners and client appreciation events throughout ${city} and the surrounding region`,
    `Perfect for ${city}-area businesses, university graduation celebrations, government events, and executive gatherings`,
    `Ideal for the graduate's backyard party or the corporate team dinner that needs to hold attention for two hours`,
    `Dual-station capacity for large ${city} graduation celebrations and corporate events of 25–60+ guests`,
    `Weekend events in ${city} book 2–3 weeks ahead during peak spring graduation and fall corporate seasons`,
    'Full setup and complete cleanup — nothing for the host or event organiser to manage',
  ],
  // Theme 6 — Luxury Cottage
  (city) => [
    `Private hibachi chef at your ${city} estate cottage, lakefront retreat, or luxury vacation property`,
    'Perfect for Bay Street executive weekends, milestone anniversary retreats, corporate leadership dinners, and luxury family reunions',
    `Chef travels to your ${city} property with premium proteins, full setup, and a live-fire performance that earns its place at a luxury cottage evening`,
    'From Victoria Day through Thanksgiving — and year-round for ${city} properties with year-round access',
    `Luxury ${city} property events book 4–8 weeks ahead in peak season — reserve your date early`,
    'Premium proteins including filet mignon, lobster tail, and scallops available for any estate cottage occasion',
  ],
]

// ── Occasions ─────────────────────────────────────────────────────────────────
const ON_OCCASIONS = [
  // Theme 0 — Toronto Urban Core
  ['Bachelorette Weekends', 'Milestone Birthdays', 'Corporate Client Dinners', 'Anniversary Dinners', 'Engagement Celebrations', 'Girls Weekends', 'Graduation Parties', 'Rooftop & Terrace Events', 'Wedding Pre-Events', 'Private Milestone Dinners'],
  // Theme 1 — GTA Affluent Suburbs
  ['Milestone Birthdays', 'Family Reunions', 'Corporate Client Dinners', 'Anniversary Dinners', 'Engagement Celebrations', 'Graduation Parties', 'Holiday Gatherings', 'Retirement Celebrations', 'Executive Dinner Parties', 'Community Events'],
  // Theme 2 — GTA Family & Community
  ['Graduation Parties', 'Birthday Celebrations', 'Family Reunions', 'Community Gatherings', 'Anniversary Dinners', 'Neighbourhood Parties', 'Holiday Events', 'Retirement Parties', 'Cultural Milestone Events', 'Backyard Celebrations'],
  // Theme 3 — Cottage Country & Resort
  ['Victoria Day Long Weekend', 'Canada Day Celebrations', 'Labour Day Send-Offs', 'Birthday Cottage Weekends', 'Bachelorette Weekends', 'Family Reunion Weekends', 'Anniversary Getaways', 'Girls Cottage Weekends', 'Corporate Retreats', 'Thanksgiving Gatherings'],
  // Theme 4 — Niagara Tourism
  ['Honeymoon Dinners', 'Bachelorette Weekends', 'Bachelor Parties', 'Anniversary Getaways', 'Wedding Weekend Groups', 'Family Vacation Dinners', 'Birthday Getaways', 'Corporate Retreats', 'Wine Country Dinners', 'Girls Weekends'],
  // Theme 5 — University & Corporate
  ['Graduation Celebrations', 'Corporate Team Dinners', 'Client Appreciation Events', 'Office Parties', 'Anniversary Dinners', 'Retirement Celebrations', 'Birthday Milestones', 'Faculty & Staff Events', 'Executive Dinners', 'Holiday Gatherings'],
  // Theme 6 — Luxury Cottage
  ['Anniversary Retreats', 'Corporate Executive Weekends', 'Milestone Birthday Events', 'Family Reunion Weekends', 'Bachelorette Luxury Weekends', 'Wedding Weekend Groups', 'Golf Trip Dinners', 'Thanksgiving Cottage Dinners', 'Retirement Celebrations', 'Private Milestone Evenings'],
]

// ── FAQ sets ──────────────────────────────────────────────────────────────────
const ON_FAQ_SETS = [
  // Theme 0 — Toronto Urban Core
  (city) => [
    {
      q: `Can you set up at a Toronto condo building, rooftop, or terrace?`,
      a: `Yes — condo terraces, rooftop decks, townhouse backyards, and private outdoor spaces throughout Toronto are among our most common setups. We need a flat outdoor area of at least 10×10 ft with vehicle access nearby for equipment. Most Toronto properties have outdoor spaces well-suited to a private hibachi event. We coordinate with building management in advance when needed.`,
    },
    {
      q: `What areas of Toronto and the GTA do you serve?`,
      a: `We serve all of Toronto — downtown, the Annex, Leslieville, the Beaches, King West, Midtown, Etobicoke, North York, Scarborough, and every neighbourhood throughout the city. We also serve the broader GTA including Mississauga, Markham, Richmond Hill, Vaughan, Brampton, and surrounding communities. Most locations within 45 minutes of downtown Toronto fall within our standard service area.`,
    },
    {
      q: `Is private hibachi a good option for a Toronto bachelorette weekend?`,
      a: `It's the standout option. Instead of fighting for reservations at every packed King Street restaurant, your chef comes directly to the property — condo terrace, Airbnb, or rental home. Fire tricks, flying shrimp, and the full teppanyaki performance at your venue, then the whole group is already home for whatever comes next. We've run dozens of Toronto bachelorette weekends. The chef always makes the evening.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `Spring and summer weekends in Toronto book 3–5 weeks ahead for most events. Bachelorette weekends and milestone birthday events fill fastest. Holiday and New Year's Eve events should be reserved 5–7 weeks ahead. Weekday events typically have more flexibility. We recommend booking as early as possible for any May through September Saturday event.`,
    },
    {
      q: `Can you handle a corporate client dinner in ${city}?`,
      a: `Absolutely — corporate client dinners, team appreciation events, and company celebrations are a strong part of our Toronto bookings. We've run events for financial services, tech, and professional services firms throughout the city. Outdoor corporate spaces, private club terraces, and executive home venues all work perfectly. For groups over 25, we deploy two chef stations.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Toronto and inner GTA locations. Properties more than 45 minutes from downtown Toronto may have a modest travel surcharge — always disclosed upfront before you confirm. We serve all of Toronto and the Greater Toronto Area as our primary market.`,
    },
  ],
  // Theme 1 — GTA Affluent Suburbs
  (city) => [
    {
      q: `Can you set up at a ${city} residential property or estate backyard?`,
      a: `Yes — residential estate backyards, stone-patio properties, and suburban outdoor spaces throughout ${city} are among our most common setups. We need a flat outdoor area of at least 10×10 ft with vehicle access for the equipment. Most ${city} properties have generous outdoor spaces already perfectly suited to a private hibachi event.`,
    },
    {
      q: `What communities near ${city} do you serve?`,
      a: `We serve ${city} and all surrounding GTA communities across York Region, Peel Region, and Halton Region. Most locations within 45 minutes of downtown Toronto fall within our standard service area with no extra travel fee. Exact coverage confirmed when you book.`,
    },
    {
      q: `Can you accommodate a premium protein menu for a ${city} milestone event?`,
      a: `Absolutely — filet mignon (+$8 CAD/person), lobster tail (+$15 CAD/person), scallops, and premium upgrades are available for any ${city} occasion. Our standard menu includes two proteins per guest from chicken, beef striploin, shrimp, and salmon at the base rate. Premium packages are confirmed at booking.`,
    },
    {
      q: `How far in advance should I book a ${city} event?`,
      a: `For Friday and Saturday events in ${city}, booking 2–4 weeks ahead is recommended. During peak spring and summer season (May through September), 3–5 weeks is safer. Holiday and New Year's events fill fastest — reserve 5–6 weeks ahead. Weekday events can often be arranged with 1–2 weeks' notice.`,
    },
    {
      q: `Can you handle a ${city} backyard event for 40–60 guests?`,
      a: `Yes — large milestone events of 25–60+ guests are among our most common ${city} bookings. For groups over 25, we bring two chef stations running in parallel. Large milestone birthdays, multi-generational family reunions, and community celebrations are a specialty. We confirm station count when you provide your guest total at booking.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most ${city} locations and all of the surrounding GTA. For events more than 45 minutes from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you confirm. We serve ${city} and all of the Greater Toronto Area as our primary market.`,
    },
  ],
  // Theme 2 — GTA Family & Community
  (city) => [
    {
      q: `Can you handle a large graduation party in ${city}?`,
      a: `Absolutely — graduation parties and commencement weekend events are among our busiest ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. Three generations around the grill — graduates, parents, and grandparents — is our most common GTA graduation format. We confirm station count when you provide your guest total.`,
    },
    {
      q: `What communities near ${city} do you serve?`,
      a: `We serve ${city} and all surrounding GTA communities. Most locations within 45 minutes of downtown Toronto — across Peel Region, Halton Region, Durham Region, and York Region — fall within our standard service area with no extra travel fee.`,
    },
    {
      q: `How far in advance should I book a ${city} graduation or summer event?`,
      a: `Graduation season (May–June) is our highest-demand window across the GTA — book 3–4 weeks ahead for any May or June Saturday in ${city}. Summer events book 2–3 weeks out. Weekday graduation dinners typically have more availability and can often be arranged within 10–14 days.`,
    },
    {
      q: `Is private hibachi a good alternative to a restaurant for a large ${city} group?`,
      a: `Per-person cost is comparable to quality restaurant dining at $78/adult — but hibachi includes a live chef performance at no additional charge. A restaurant seats your group and takes your order; we set up in your backyard, cook in front of your guests, entertain throughout the meal, and handle complete cleanup. Most ${city} hosts who try hibachi say they'll never go back to booking a restaurant for group events.`,
    },
    {
      q: `Can you set up in a ${city} backyard or patio?`,
      a: `Yes — backyard patios, lawn areas, and outdoor spaces throughout ${city} are our standard setup environment. We need a flat area of at least 10×10 ft with vehicle access nearby. Deck, lawn, paver patio, or concrete all work perfectly. Our setup is fully self-contained — we bring everything and take everything with us when we leave.`,
    },
    {
      q: `What do I need to provide for a ${city} backyard hibachi event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, rice, sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included in every event.`,
    },
  ],
  // Theme 3 — Cottage Country & Resort
  (city) => [
    {
      q: `Can you travel to a ${city} cottage or lakefront property?`,
      a: `Yes — cottage country travel is a core part of what we do. We travel to ${city} and surrounding cottage country properties with the full setup. We ask that you confirm the property has a flat outdoor area of at least 10×10 ft — a deck, dock-side patio, or yard space all work well. Vehicle access to the property is also required. Travel fees may apply for remote locations — always disclosed upfront.`,
    },
    {
      q: `How far in advance should I book for Victoria Day, Canada Day, or Labour Day weekend?`,
      a: `The Victoria Day long weekend (May), Canada Day weekend (July 1), and August long weekend are our three fastest-filling dates in cottage country. We strongly recommend booking 6–8 weeks ahead for these dates. Regular summer weekends book 4–5 weeks out. Off-season cottage events (September–April) have much more flexibility.`,
    },
    {
      q: `Can you set up on a lakefront dock, deck, or cottage patio?`,
      a: `Yes — outdoor lakefront decks, dock-adjacent patios, and open yard spaces at cottage properties are our ideal setup. We need a flat outdoor area of at least 10×10 ft with clearance overhead (no low-hanging branches) and vehicle access nearby for equipment. Most Ontario cottage country properties have excellent deck or yard setups already in place.`,
    },
    {
      q: `What's the weather contingency plan for an outdoor cottage event?`,
      a: `We cook in light rain under appropriate shelter — a covered deck, screened porch, or open-sided gazebo all work well. For severe weather, thunderstorms, or unsafe conditions, we work with you to reschedule at no penalty. Cottage country weather is something we understand well — we always discuss a backup setup option when confirming your event.`,
    },
    {
      q: `Is there a travel fee for ${city} cottage events?`,
      a: `A travel fee may apply for cottage country locations depending on distance from our nearest chef base — always confirmed and disclosed upfront before you book, never a surprise. Most Muskoka, Barrie, and Collingwood-area properties fall within a reasonable travel range.`,
    },
    {
      q: `How many guests can you accommodate at a cottage event?`,
      a: `Our standard setup accommodates up to 20 guests comfortably at one chef station. For cottage events of 21–50+ guests, we bring a second station. The outdoor lakefront or backyard setting is ideal for larger groups — the open air and the live fire performance create a natural gathering point for everyone.`,
    },
  ],
  // Theme 4 — Niagara Tourism
  (city) => [
    {
      q: `Can you set up at a ${city} vacation rental, inn, or Airbnb property?`,
      a: `Absolutely — Niagara vacation rentals and short-term properties are among our most popular booking categories in the region. We come directly to your property. Confirm the rental allows outdoor open-flame cooking (most do), and we handle everything from setup to complete cleanup. Winery estate properties, inn courtyards, and vacation home backyards all work equally well.`,
    },
    {
      q: `How far in advance should I book a ${city} summer event?`,
      a: `Niagara peak season — May through September — fills extremely fast for Friday and Saturday events. We strongly recommend booking 4–6 weeks in advance. Canada Day weekend (July 1) and August dates fill the earliest. Off-season events (October–April) have much more availability with 2–3 weeks' notice typically sufficient.`,
    },
    {
      q: `Do you serve visitors staying in ${city} from outside Ontario?`,
      a: `Yes — we serve guests visiting the Niagara region regardless of where they are travelling from. Whether you're a Toronto group renting for the weekend, a destination bachelorette party from the GTA, or visitors from across the border, we come to your property with the full setup. Booking can be arranged from anywhere — just provide your Niagara property address.`,
    },
    {
      q: `Is hibachi a good option for a ${city} honeymoon or anniversary dinner?`,
      a: `It's a memorable option. For intimate groups of 8–20, the chef's performance creates a dinner experience that no Niagara restaurant can replicate — the fire, the flying shrimp, and every plate cooked specifically for your group. For a honeymoon or anniversary dinner, we can arrange premium protein upgrades (filet mignon, lobster tail) to create a genuinely luxury experience at your property.`,
    },
    {
      q: `What setup works best at a ${city} vacation property?`,
      a: `Open patios, backyards, and outdoor deck areas at Niagara vacation properties are the ideal setup. We need a minimum 10×10 ft flat surface with clearance overhead and vehicle access nearby. Our setup takes 20–30 minutes and the performance runs 90–120 minutes. We pack everything out completely when dinner is done — your vacation property is spotless when the chef leaves.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most Niagara region properties. For locations more than 45 minutes from our nearest chef base, a modest travel fee may apply — always confirmed upfront before you book. We serve the full Niagara region including Niagara Falls, Niagara-on-the-Lake, St. Catharines, and surrounding communities.`,
    },
  ],
  // Theme 5 — University & Corporate
  (city) => [
    {
      q: `Can you set up at a corporate venue or private home in ${city}?`,
      a: `Yes — corporate outdoor spaces, university-adjacent properties, private residences, and event venues throughout ${city} and the surrounding region are among our most common setups. We need a flat outdoor area of at least 10×10 ft with vehicle access for setup. Most ${city}-area properties meet this requirement easily.`,
    },
    {
      q: `What communities near ${city} do you serve?`,
      a: `We serve ${city} and surrounding communities throughout the region. Most locations within 40 minutes of downtown ${city} fall within our standard service area with no extra travel fee. Exact coverage is confirmed when you book.`,
    },
    {
      q: `Can you handle a large university graduation celebration in ${city}?`,
      a: `Absolutely — graduation parties following university and college convocation ceremonies are a major part of our ${city} bookings. For groups over 25, we bring two chef stations running in parallel. Three generations at the grill — graduates, parents, and grandparents — is our most common ${city} graduation format.`,
    },
    {
      q: `How far in advance should I book a ${city} corporate event?`,
      a: `Corporate team dinners and client entertainment events in ${city} book 2–3 weeks out during peak season. Holiday party season (November–December) fills fastest — reserve 4–5 weeks ahead for any Friday or Saturday event. Weekday corporate dinners typically have more flexibility and can often be arranged within 7–10 days.`,
    },
    {
      q: `Can you manage a large corporate or graduation event in ${city}?`,
      a: `Yes — events of 25–60+ guests are among our most common ${city} bookings. For groups over 25, we bring two chef stations running simultaneously. Corporate events, faculty dinners, and large graduation parties are a specialty. We confirm station count and logistics when you provide your guest total at booking.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No extra travel fee for most ${city} locations and surrounding communities. For events more than 40 minutes from our nearest chef base, a modest travel fee may apply — always disclosed upfront before you confirm. We serve ${city} and the surrounding region as our primary market.`,
    },
  ],
  // Theme 6 — Luxury Cottage
  (city) => [
    {
      q: `Can you travel to a ${city} estate cottage, lakefront property, or private retreat?`,
      a: `Yes — ${city} estate cottage properties, luxury lakefront retreats, and private vacation properties are a core part of what we do. We travel to your property with the full setup: premium teppan grill, hand-selected proteins, and everything needed for a two-hour private dining experience. We ask that the property has a flat outdoor area of at least 10×10 ft and vehicle access for equipment. Travel fees may apply for remote locations — always confirmed upfront.`,
    },
    {
      q: `How far in advance should I book for peak ${city} cottage season?`,
      a: `Luxury cottage season in ${city} fills well in advance — the Victoria Day long weekend (May), Canada Day (July 1), August, and Thanksgiving weekend (October) are our fastest-filling dates. We recommend booking 6–10 weeks ahead for peak season events. Year-round estate properties have more flexibility in the off-season.`,
    },
    {
      q: `What premium protein options are available for a ${city} estate dinner?`,
      a: `Our premium protein menu includes filet mignon (+$8 CAD/person), lobster tail (+$15 CAD/person), scallops, and extra protein additions (+$20 CAD/person). The standard menu offers two proteins per guest from chicken, beef striploin, shrimp, and salmon. For an estate cottage dinner, most hosts select at least one premium upgrade — these are confirmed and priced transparently at booking.`,
    },
    {
      q: `What's the best outdoor setup at a ${city} cottage or estate property?`,
      a: `Open lakefront decks, stone-patio areas, and flat yard spaces all work exceptionally well. We need a minimum 10×10 ft flat surface with clearance overhead and vehicle access nearby. Our setup takes 20–30 minutes and the dining performance runs 90–120 minutes. We pack everything out completely when dinner is done — your property is immaculate when the chef departs.`,
    },
    {
      q: `Can you accommodate a large estate gathering in ${city}?`,
      a: `Yes — estate cottage events of 20–60+ guests are well within our capacity. For groups over 20, we deploy a second chef station. Executive family weekends, corporate leadership retreats, and large milestone anniversary gatherings at ${city} properties are a specialty.`,
    },
    {
      q: `Is there a travel fee for remote ${city} cottage locations?`,
      a: `A travel fee may apply for remote or particularly distant ${city} cottage properties — always confirmed and disclosed upfront before you book, never a surprise. For most accessible ${city}-area estate properties, travel fees are modest and included transparently in your quote.`,
    },
  ],
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const ON_TESTIMONIALS = [
  // Theme 0 — Toronto Urban Core
  [
    {
      text: '"Bachelorette weekend on a King West condo terrace — 14 of us, chef arrived exactly on time and completely owned the evening. Fire tricks, flying shrimp, the full show. We\'ve been to every rooftop bar in the city. Nothing touched this."',
      name: 'Natalie K.',
      city: 'Toronto, ON',
      event: 'Bachelorette Weekend',
      initials: 'NK',
    },
    {
      text: '"50th birthday in our Leslieville backyard — 28 guests, chef was absolutely exceptional. The performance, the food, the energy — exactly what a milestone evening should be. Three guests booked their own events before the chef finished cleanup."',
      name: 'Michael & Laura T.',
      city: 'Toronto, ON',
      event: 'Milestone Birthday',
      initials: 'MT',
    },
    {
      text: '"Corporate client dinner at our Midtown outdoor venue — 22 guests, chef set up while guests arrived and turned a dinner into a two-hour entertainment event. Every single client said it was the best evening we\'d ever arranged. This is our new standard."',
      name: 'Jonathan R.',
      city: 'Toronto, ON',
      event: 'Corporate Client Dinner',
      initials: 'JR',
    },
  ],
  // Theme 1 — GTA Affluent Suburbs
  [
    {
      text: '"Anniversary dinner in our Markham backyard — 24 guests, chef was outstanding from the first flame to the last plate. The food, the performance, the attention to detail — exactly the standard we were hoping for. Already planning next year\'s event."',
      name: 'David & Helen C.',
      city: 'Markham, ON',
      event: 'Anniversary Dinner',
      initials: 'DC',
    },
    {
      text: '"Family reunion at our Richmond Hill estate — 44 guests from four cities, chef ran dual stations and kept the entire crowd engaged for two hours. Best family event we\'ve hosted in twenty years. The grandparents are still talking about it."',
      name: 'The Wong Family',
      city: 'Richmond Hill, ON',
      event: 'Family Reunion',
      initials: 'WF',
    },
    {
      text: '"Corporate client dinner in Vaughan — 30 guests, outdoor venue, chef arrived on time and delivered a flawless performance. Every client called it the most impressive evening we\'d arranged in years. This is our go-to format for client entertainment now."',
      name: 'Marco D.',
      city: 'Vaughan, ON',
      event: 'Corporate Client Dinner',
      initials: 'MD',
    },
  ],
  // Theme 2 — GTA Family & Community
  [
    {
      text: '"Graduation party for our daughter in Mississauga — 52 guests, dual chef stations, her entire friend group plus family from three provinces gathered around the grill. No restaurant could have done this. Already planning her brother\'s graduation."',
      name: 'Priya & Anil S.',
      city: 'Mississauga, ON',
      event: 'Graduation Party',
      initials: 'PS',
    },
    {
      text: '"Family reunion in our Mississauga backyard — 46 guests, relatives from British Columbia and Quebec, chef had everyone entertained from first flame to last plate. Best reunion we\'ve hosted. This is the new family standard."',
      name: 'The Fernandez Family',
      city: 'Mississauga, ON',
      event: 'Family Reunion',
      initials: 'FF',
    },
    {
      text: '"Birthday party in Brampton — 38 guests, backyard setup, chef completely took over the entertainment for the evening. Easy booking, arrived exactly on time, professional from start to finish. Our guests are still asking for the contact information."',
      name: 'Gurpreet & Simran B.',
      city: 'Brampton, ON',
      event: 'Birthday Party',
      initials: 'GB',
    },
  ],
  // Theme 3 — Cottage Country & Resort
  [
    {
      text: '"Muskoka cottage weekend — 20 guests on the lakefront deck, chef drove up from the city and put on a two-hour show that became the highlight of the whole long weekend. Fire over the lake, flying shrimp, the works. Already planning next Victoria Day."',
      name: 'Andrew & Claire M.',
      city: 'Muskoka, ON',
      event: 'Victoria Day Cottage Weekend',
      initials: 'AM',
    },
    {
      text: '"Canada Day at our Barrie cottage — 26 guests, backyard setup, chef arrived perfectly on time and made the whole evening. Our guests had been to every restaurant in town. Nothing compared to having the performance at the cottage."',
      name: 'The Patterson Family',
      city: 'Barrie, ON',
      event: 'Canada Day Celebration',
      initials: 'PF',
    },
    {
      text: '"Labour Day send-off at a Collingwood chalet — 18 of us, patio setup, chef ran the best dinner of the summer. We\'ve been doing the same cottage weekend for years. This was the first time the dinner was the main event. Booking again next season."',
      name: 'Jessica H.',
      city: 'Collingwood, ON',
      event: 'Labour Day Weekend',
      initials: 'JH',
    },
  ],
  // Theme 4 — Niagara Tourism
  [
    {
      text: '"Bachelorette weekend at a Niagara Falls vacation rental — 16 of us, patio setup, chef completely made Friday night. We\'ve been to every restaurant on the strip over the years. Nothing compares to having the chef at the house."',
      name: 'Amanda C.',
      city: 'Niagara Falls, ON',
      event: 'Bachelorette Weekend',
      initials: 'AC',
    },
    {
      text: '"Anniversary dinner at a Niagara-on-the-Lake inn — 14 guests on the patio, chef put on an exceptional show. The food, the setting, the performance — exactly what a milestone anniversary deserved. Three guests booked their own events before we left."',
      name: 'Robert & Susan L.',
      city: 'Niagara-on-the-Lake, ON',
      event: 'Anniversary Dinner',
      initials: 'RL',
    },
    {
      text: '"Honeymoon dinner at our Niagara vacation rental — just the two of us plus a group of close friends, filet mignon and lobster tail, chef was outstanding. The most memorable dinner of the entire trip. Already recommending to everyone."',
      name: 'Kevin & Maya P.',
      city: 'Niagara Falls, ON',
      event: 'Honeymoon Dinner',
      initials: 'KP',
    },
  ],
  // Theme 5 — University & Corporate
  [
    {
      text: '"Graduation party for our son in Ottawa — 40 guests, backyard setup, chef had everyone at the grill from the first flame. His graduating class plus family from three provinces all cheering together. Best graduation event we\'ve ever hosted."',
      name: 'Diane & Paul F.',
      city: 'Ottawa, ON',
      event: 'University Graduation Party',
      initials: 'DF',
    },
    {
      text: '"Corporate team dinner for our Waterloo tech company — 32 people, outdoor venue, chef arrived on time and put on a flawless show. Every team member said it was the best company event in recent memory. This is our new format for team celebrations."',
      name: 'Sarah T.',
      city: 'Waterloo, ON',
      event: 'Corporate Team Dinner',
      initials: 'ST',
    },
    {
      text: '"Retirement party in London — 36 guests, backyard setup, chef completely owned the evening. Colleagues from 30 years of work, family from across Ontario, everyone around the same grill for two hours. The perfect send-off."',
      name: 'The Harrison Family',
      city: 'London, ON',
      event: 'Retirement Party',
      initials: 'HF',
    },
  ],
  // Theme 6 — Luxury Cottage
  [
    {
      text: '"Bay Street weekend at our Muskoka lakefront estate — 22 guests, chef drove up with the full setup and delivered a two-hour performance on the dock deck that set the standard for the whole season. Filet mignon, lobster tail, flawless. Already booked for August."',
      name: 'Thomas & Elizabeth B.',
      city: 'Muskoka, ON',
      event: 'Estate Cottage Weekend',
      initials: 'TB',
    },
    {
      text: '"Anniversary retreat at a Niagara-on-the-Lake vineyard property — 18 guests, winery estate patio, chef was exceptional. The setting, the premium menu, the fire performance — exactly the standard a Niagara wine country occasion deserves. Truly unforgettable."',
      name: 'James & Patricia G.',
      city: 'Niagara-on-the-Lake, ON',
      event: 'Anniversary Retreat',
      initials: 'JG',
    },
    {
      text: '"Corporate leadership retreat at our Muskoka property — 16 executives, lakefront deck, chef ran an outstanding private dinner. The performance created the kind of relaxed, shared experience that a boardroom never can. This is our annual retreat format now."',
      name: 'Catherine W.',
      city: 'Muskoka, ON',
      event: 'Corporate Leadership Retreat',
      initials: 'CW',
    },
  ],
]

// ── Image themes ──────────────────────────────────────────────────────────────
const ON_IMAGE_THEMES = [
  { heroImage: '/pics/hero-4.jpg' },               // Theme 0 — Toronto Urban Core
  { heroImage: '/pics/hero-2.jpg' },               // Theme 1 — GTA Affluent Suburbs
  { heroImage: '/pics/hero-1.jpg' },               // Theme 2 — GTA Family & Community
  { heroImage: '/pics/hibachi-colorado-home.jpg' }, // Theme 3 — Cottage Country & Resort
  { heroImage: '/pics/hibachi-virginia-beach.jpg' }, // Theme 4 — Niagara Tourism
  { heroImage: '/pics/hibachi-event.jpg' },         // Theme 5 — University & Corporate
  { heroImage: '/pics/hibachi-colorado.jpg' },      // Theme 6 — Luxury Cottage
]

// ── How It Works ──────────────────────────────────────────────────────────────
const ON_HOW_IT_WORKS = [
  // Theme 0 — Toronto Urban Core
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Toronto spring and summer events fill fast. Call or text (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Request Your Event',           desc: 'Tell us your date, guest count, and outdoor space — condo terrace, backyard, or patio. We confirm quickly.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Your certified teppanyaki chef arrives with the full setup: teppan grill, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking Performance',     desc: 'Guests gather at your outdoor space for 90–120 minutes of live hibachi — fire tricks, flying shrimp, freshly grilled food cooked to order.' },
      { num: '04', title: 'Full Cleanup Included',        desc: 'Chef handles all cleanup and packs out completely. Your property stays spotless. You keep the experience.' },
    ],
  },
  // Theme 1 — GTA Affluent Suburbs
  {
    headline:   (city) => `How Private Hibachi Works in ${city}`,
    footerNote: (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Request Your Event',           desc: 'Tell us your date, guest count, and outdoor space — estate backyard, stone patio, or garden. Quick confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Certified chef arrives with full teppan grill, propane, all ingredients, premium protein options, sauces, plates, and chopsticks.' },
      { num: '03', title: 'The Performance Begins',       desc: 'Guests gather around the grill for a live teppanyaki show — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Zero Cleanup for You',         desc: 'Chef packs everything out completely. You hosted the finest dinner in the neighbourhood and didn\'t manage a single detail.' },
    ],
  },
  // Theme 2 — GTA Family & Community
  {
    headline:   (city) => `How Family Hibachi Works in ${city}`,
    footerNote: (city) => `${city} graduation season books fast. Call or text (201) 565-3878 to confirm your date.`,
    steps: [
      { num: '01', title: 'Request Your Event',         desc: 'Book online or by phone. Tell us your guest count — over 25 guests, we bring two chef stations. Confirmed quickly.' },
      { num: '02', title: 'Full Setup Arrives',         desc: 'Your chef (or two chefs for large groups) arrives with everything: grills, propane, all proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Live Cooking for the Crowd', desc: 'Every guest gathers around the grill for a live teppanyaki performance — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Chef Handles Cleanup',       desc: 'Complete cleanup done by your chef. Your family keeps the memory. You do none of the work.' },
    ],
  },
  // Theme 3 — Cottage Country & Resort
  {
    headline:   (city) => `How Mobile Hibachi Works at Your ${city} Cottage`,
    footerNote: (city) => `Cottage country season books fast from the May long weekend onward. Call (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Book From Your Cottage',     desc: 'Reserve your date online or by phone — tell us your property address, guest count, and deck or yard setup. Fast confirmation.' },
      { num: '02', title: 'Chef Travels to You',        desc: 'Certified hibachi chef travels to your cottage or property with full setup: teppan grill, propane, all ingredients, plates, sauces, and utensils.' },
      { num: '03', title: 'Cottage Dinner Show',        desc: 'Guests gather on your deck, patio, or yard for 90–120 minutes of live hibachi — fire tricks, grilled-to-order proteins, the full performance.' },
      { num: '04', title: 'Pack-Out and Done',          desc: 'Chef handles complete cleanup and takes everything with them. Your cottage property stays spotless.' },
    ],
  },
  // Theme 4 — Niagara Tourism
  {
    headline:   (city) => `How Mobile Hibachi Works at Your ${city} Rental`,
    footerNote: (city) => `Niagara peak season books weeks in advance. Call (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Book From Your Rental',     desc: 'Reserve your date online or by phone — tell us your property address, guest count, and outdoor setup. Fast confirmation.' },
      { num: '02', title: 'Chef Comes to You',         desc: 'Certified hibachi chef arrives with full setup: teppan grill, propane, all ingredients, plates, sauces, and utensils. Nothing for you to prepare.' },
      { num: '03', title: 'Niagara Dinner Show',       desc: 'Guests gather on your patio, deck, or yard for 90–120 minutes of live hibachi — fire tricks, grilled-to-order proteins, the full show.' },
      { num: '04', title: 'Pack-Out and Done',         desc: 'Chef handles complete cleanup. Your vacation property is spotless and you had the best dinner of the trip.' },
    ],
  },
  // Theme 5 — University & Corporate
  {
    headline:   (city) => `How Corporate Hibachi Works in ${city}`,
    footerNote: (city) => `Most ${city} corporate bookings confirmed same-day. Call or text (201) 565-3878 with any questions.`,
    steps: [
      { num: '01', title: 'Request Your Event',           desc: 'Tell us your date, guest count, and venue — corporate space, private home, or backyard. Quick confirmation.' },
      { num: '02', title: 'Chef Arrives with Everything', desc: 'Certified chef arrives with full teppan grill, propane, all ingredients, sauces, plates, and chopsticks. No shopping required.' },
      { num: '03', title: 'The Performance Begins',       desc: 'Guests gather around the grill for a live teppanyaki show — fire tricks, fresh proteins cooked to order, fried rice and vegetables.' },
      { num: '04', title: 'Zero Cleanup for You',         desc: 'Chef packs everything out completely. You hosted the best corporate dinner of the year and didn\'t manage a single detail.' },
    ],
  },
  // Theme 6 — Luxury Cottage
  {
    headline:   (city) => `How Private Hibachi Works at Your ${city} Estate`,
    footerNote: (city) => `Luxury cottage events book well in advance. Call (201) 565-3878 to confirm your ${city} date.`,
    steps: [
      { num: '01', title: 'Reserve Your Date',              desc: 'Book online or by phone — tell us your property address, guest count, and outdoor setup. We coordinate travel and confirm quickly.' },
      { num: '02', title: 'Chef Travels to Your Property',  desc: 'Your certified teppanyaki chef arrives with everything: premium teppan grill, propane, hand-selected proteins, sauces, plates, and utensils.' },
      { num: '03', title: 'Estate Dining Performance',      desc: 'Guests gather at your lakefront deck or patio for 90–120 minutes of live hibachi — fire tricks, premium proteins, the full luxury experience.' },
      { num: '04', title: 'Complete Cleanup, Nothing Left', desc: 'Chef handles all teardown and cleanup. Your estate property is immaculate when they depart. You keep the memory.' },
    ],
  },
]

// ── Section variants ──────────────────────────────────────────────────────────
const ON_SECTION_VARIANTS = [
  // Theme 0 — Toronto Urban Core
  {
    heroPill:           'Toronto\'s Private Chef',
    experiencePill:     'The Toronto Dining Standard',
    experiencePoints:   (city) => [
      { icon: '🏙️', title: `Your ${city} Terrace Is the Venue`,   desc: `No King Street reservations — your ${city} condo terrace, King West backyard, or Leslieville patio becomes an exclusive private dining room.` },
      { icon: '👨‍🍳', title: 'Private Chef, All Yours',              desc: `A certified teppanyaki chef performs exclusively for your ${city} group — no shared dining room, no strangers at the next table.` },
      { icon: '🎭', title: 'Built for Toronto Occasions',          desc: 'Bachelorette weekends, milestone birthdays, and corporate client dinners — the experiences Toronto hosts remember longest.' },
      { icon: '🧹', title: 'Arrive, Perform, Disappear Spotless', desc: `Full setup, full service, and complete cleanup at your ${city} property. Nothing for the host to manage from arrival to departure.` },
    ],
    experienceImage:    '/pics/hero-4.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, ON`,
    areasPill:          'Serving the GTA',
    areasHeadline:      (city) => `Hibachi in ${city} and All of the GTA`,
    areasIntro: [
      (city, state) => `We serve all of Toronto and the Greater Toronto Area — Mississauga, Markham, Richmond Hill, Vaughan, Brampton, Scarborough, Etobicoke, North York, and every community throughout the GTA.`,
      (city) => `Toronto spring and summer dates fill 3–5 weeks ahead. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Toronto Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Evening Your Group Has Been Waiting For`,
    occasionSubtext:       'Bachelorette weekends, milestone birthdays, corporate client dinners, and anniversary occasions — private hibachi is Toronto\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Toronto Hosts Are Saying',
  },
  // Theme 1 — GTA Affluent Suburbs
  {
    heroPill:           'GTA\'s Private Chef',
    experiencePill:     'The GTA Affluent Dining Standard',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Your ${city} Estate Is the Venue`,   desc: `No restaurant logistics — your ${city} estate backyard, stone terrace, or garden becomes an exclusive private dining room for the evening.` },
      { icon: '👨‍🍳', title: 'Private Chef for Every Milestone',  desc: `A certified teppanyaki chef for ${city} milestone birthdays, multi-generational family reunions, and corporate client events.` },
      { icon: '🥩', title: 'Premium Proteins Available',         desc: 'Filet mignon (+$8 CAD), lobster tail (+$15 CAD), and full premium menu options — customize the experience to match the occasion.' },
      { icon: '🧹', title: 'Estate Stays Perfectly Clean',       desc: `Full setup before the ${city} event and complete cleanup after. Your estate property is spotless when the chef departs.` },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} ON estate event`,
    areasPill:          'Serving the GTA',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all surrounding GTA communities throughout York Region, Peel Region, and Halton Region.`,
      (city) => `Most ${city} bookings confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your GTA Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Private Dinner`,
    occasionSubtext:       'From milestone family celebrations to corporate client entertainment, private hibachi is the GTA\'s most impressive private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city}, ${abbr} Hibachi Questions — Answered`,
    testimonialSubheading: 'What GTA Hosts Are Saying',
  },
  // Theme 2 — GTA Family & Community
  {
    heroPill:           'GTA\'s Family Chef',
    experiencePill:     'Every Generation at the Grill',
    experiencePoints:   (city) => [
      { icon: '👥', title: `Two Stations for ${city} Graduates`,  desc: `Two chef stations for ${city} graduation groups of 25–60+ — faster service and double the performance energy for commencement season.` },
      { icon: '👨‍👩‍👧‍👦', title: 'Every Generation at the Teppan',   desc: `Kids, parents, and grandparents in ${city} all gathered at the same teppan — the multi-generational format few dining events can match.` },
      { icon: '🔥', title: 'No GTA Restaurant Logistics',        desc: 'Fresh proteins cooked live, a full teppanyaki performance at your backyard — no reservations, no group coordination, no rushed tables.' },
      { icon: '🧹', title: 'Everything Covered, Start to Finish', desc: `Complete setup before the ${city} event and full cleanup after — nothing for the host to do except celebrate with your guests.` },
    ],
    experienceImage:    '/pics/backyard-hibachi.jpg',
    experienceImageAlt: (city) => `Family hibachi celebration in ${city}, ON`,
    areasPill:          'Serving Greater Toronto',
    areasHeadline:      (city) => `Private Hibachi in ${city} and All of the GTA`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the Greater Toronto Area — Mississauga, Brampton, Markham, Richmond Hill, Vaughan, Ajax, Newmarket, Milton, and every community across the GTA.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Most large-group events are confirmed within a day.`,
    ],
    areasButton:           'Book Your Family Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `${city}'s Most Memorable Family Celebration`,
    occasionSubtext:       'Graduation parties, multigenerational family reunions, and cultural milestone events — GTA families celebrate big, and we\'re built for it',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What GTA Family Hosts Are Saying',
  },
  // Theme 3 — Cottage Country & Resort
  {
    heroPill:           'Cottage Country\'s Private Chef',
    experiencePill:     'The Dinner of the Weekend',
    experiencePoints:   (city) => [
      { icon: '🏕️', title: `Chef at Your ${city} Cottage`,       desc: `A certified private hibachi chef travels to your ${city} cottage, lakefront chalet, or resort property — no logistics for you to handle.` },
      { icon: '🍁', title: 'Built for Ontario Long Weekends',    desc: `Victoria Day, Canada Day, Labour Day — the Ontario cottage calendar's most in-demand dates, and your ${city} weekend's best dinner.` },
      { icon: '🔥', title: 'Fire Show on Your Dock or Deck',     desc: `90–120 minutes of live teppanyaki entertainment — fire tricks, proteins cooked to order, right on your ${city} cottage deck.` },
      { icon: '🏠', title: 'Cottage Property Stays Spotless',    desc: 'Full setup and complete pack-out included. Your cottage property looks exactly as it did when the chef arrived.' },
    ],
    experienceImage:    '/pics/hibachi-colorado-home.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} ON cottage property`,
    areasPill:          'Serving Cottage Country',
    areasHeadline:      (city) => `Mobile Hibachi at Your ${city} Cottage`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Ontario cottage country — Muskoka, Barrie, Collingwood, Wasaga Beach, Haliburton, and surrounding cottage areas throughout the province.`,
      (city) => `Cottage country peak season fills fast. Call (201) 565-3878 to confirm your ${city} booking now.`,
    ],
    areasButton:           'Check Cottage Availability',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Make This ${city} Weekend the One They Remember`,
    occasionSubtext:       'Victoria Day long weekends, Canada Day celebrations, and Labour Day send-offs — private hibachi is the cottage country dinner experience that elevates the whole weekend',
    faqPill:               'Cottage Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Cottage Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Ontario Cottage Hosts Are Saying',
  },
  // Theme 4 — Niagara Tourism
  {
    heroPill:           'Niagara\'s Private Chef',
    experiencePill:     'The Dinner of the Trip',
    experiencePoints:   (city) => [
      { icon: '🏖️', title: `Chef at Your ${city} Property`,      desc: `No packed tourist strip reservations — your chef arrives at your ${city} rental or inn with everything needed for a full teppanyaki show.` },
      { icon: '🥂', title: 'Built for Niagara Occasions',        desc: `Honeymoon dinners, bachelorette weekends, and anniversary getaways in ${city} — the Niagara experiences guests remember longest.` },
      { icon: '🎭', title: 'Fire Show Under the Niagara Sky',    desc: '90–120 minutes of live teppanyaki entertainment — fire tricks, flying shrimp, every plate cooked fresh in front of your guests.' },
      { icon: '🏠', title: 'Property Stays Spotless',            desc: `Full setup and complete pack-out included. Your ${city} vacation rental looks exactly as it did when the chef arrived.` },
    ],
    experienceImage:    '/pics/hibachi-virginia-beach.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} ON vacation rental`,
    areasPill:          'Serving the Niagara Region',
    areasHeadline:      (city) => `Mobile Hibachi at Your ${city} Property`,
    areasIntro: [
      (city, state) => `We serve the full Niagara region — Niagara Falls, Niagara-on-the-Lake, St. Catharines, Welland, Thorold, and every community along the Niagara corridor.`,
      (city) => `Niagara peak season fills weeks ahead. Call (201) 565-3878 to confirm your ${city} date now.`,
    ],
    areasButton:           'Reserve Your Niagara Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Dinner Everyone Talks About`,
    occasionSubtext:       'Honeymoon dinners, bachelorette weekends, anniversary getaways, and wine country celebration groups — private hibachi is what makes a Niagara visit unforgettable',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city}, ${abbr} Private Hibachi — Common Questions`,
    testimonialSubheading: 'What Niagara Guests Are Saying',
  },
  // Theme 5 — University & Corporate
  {
    heroPill:           'Ontario\'s Corporate Chef',
    experiencePill:     'Better Than Any Local Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏢', title: `Your ${city} Outdoor Venue`,         desc: `No reservation required — your ${city} outdoor corporate space or backyard becomes the setting for an exclusive private dinner.` },
      { icon: '🔥', title: '90–120 Minute Live Performance',     desc: `A certified teppanyaki chef runs the full show for your ${city} group — fire tricks, freshly cooked proteins, live entertainment.` },
      { icon: '👥', title: 'Two Stations for Large Events',      desc: `Two chef stations for ${city} graduation and corporate groups of 25–60+ — faster service and double the performance energy.` },
      { icon: '🧹', title: 'Zero Logistics for the Organiser',  desc: 'Full setup before the event and complete cleanup after. Nothing for the host or event planner to manage — just show up and enjoy.' },
    ],
    experienceImage:    '/pics/hibachi-event.jpg',
    experienceImageAlt: (city) => `Corporate hibachi event in ${city}, ON`,
    areasPill:          'Serving the Region',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and surrounding communities throughout the region. Most locations within 40 minutes of downtown ${city} fall within our standard service area.`,
      (city) => `Most ${city} bookings confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Corporate Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'From university graduation parties to corporate team dinners, private hibachi is the most impressive private dining experience in the region',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Ontario Corporate & Graduation Hosts Are Saying',
  },
  // Theme 6 — Luxury Cottage
  {
    heroPill:           'Ontario\'s Luxury Cottage Chef',
    experiencePill:     'Estate Dining at the Cottage',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Chef at Your ${city} Estate`,         desc: `A certified private hibachi chef travels to your ${city} estate cottage, lakefront retreat, or luxury Ontario property — entirely on your terms.` },
      { icon: '🥩', title: `Luxury Proteins for ${city} Occasions`, desc: `Filet mignon, lobster tail, and scallops at your ${city} estate — the full premium menu selected to match the occasion it deserves.` },
      { icon: '🔥', title: 'Live Fire Performance All Yours',    desc: 'A full live teppanyaki show designed exclusively around your group — every flame trick, every protein, every moment entirely yours.' },
      { icon: '✨', title: 'Estate Immaculate on Departure',     desc: `Flawless setup and complete cleanup — your ${city} estate property looks exactly as it did before the chef arrived.` },
    ],
    experienceImage:    '/pics/hibachi-colorado.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} ON estate cottage`,
    areasPill:          'Serving Ontario\'s Finest Properties',
    areasHeadline:      (city) => `Private Hibachi at Your ${city} Estate`,
    areasIntro: [
      (city, state) => `We serve ${city} and Ontario's finest cottage country estates, lakefront retreats, and luxury vacation properties throughout the province.`,
      (city) => `Call (201) 565-3878 to confirm your ${city} date. Luxury cottage events book well in advance — don't wait.`,
    ],
    areasButton:           'Reserve Your Estate Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Estate Dinner That Defines the Weekend`,
    occasionSubtext:       'Bay Street executive weekends, milestone anniversary retreats, corporate leadership dinners, and luxury family reunions — private hibachi is what sets a ${city} weekend apart',
    faqPill:               'Estate Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Private Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Ontario Luxury Cottage Hosts Are Saying',
  },
]

// ── City experience image map ──────────────────────────────────────────────────
const ON_CITY_IMAGE_MAP = {
  // Batch 1 — Theme 0: Toronto Urban Core
  'toronto':        { src: '/pics/hero-4.jpg',           alt: (city) => `Private hibachi chef event in ${city}, ON` },
  // Batch 1 — Theme 2: GTA Family
  'mississauga':    { src: '/pics/backyard-hibachi.jpg',  alt: (city) => `Family graduation hibachi party in ${city}, ON` },
  // Batch 1 — Theme 1: GTA Affluent Suburbs
  'richmond-hill':  { src: '/pics/hibachi-chef-home.jpg', alt: (city) => `Private hibachi chef in ${city}, ON` },
  'markham':        { src: '/pics/hibachi-catering-2.jpg',alt: (city) => `Mobile hibachi event in ${city}, ON` },
  'vaughan':        { src: '/pics/backyard-hibachi-3.jpg',alt: (city) => `Hibachi catering event in ${city}, ON` },
  // Batch 2 — Theme 2: GTA Family
  'brampton':       { src: '/pics/hibachi-catering.jpg',   alt: (city) => `Family hibachi celebration in ${city}, ON` },
  'milton':         { src: '/pics/hibachi-austin-home.jpg',alt: (city) => `Backyard hibachi party in ${city}, ON` },
  'ajax':           { src: '/pics/hibachi-catering-2.jpg', alt: (city) => `Mobile hibachi event in ${city}, ON` },
  // Batch 2 — Theme 1: GTA Affluent Suburbs
  'oakville':       { src: '/pics/hibachi-photo-2.jpg',    alt: (city) => `Private hibachi chef in ${city}, ON` },
  'burlington':     { src: '/pics/hibachi-event.jpg',      alt: (city) => `Private hibachi dinner in ${city}, ON` },
  'newmarket':      { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Backyard hibachi party in ${city}, ON` },
  // Batch 3 — Luxury Cottage (v=6)
  'muskoka':              { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Private hibachi chef at a ${city} ON lakefront estate` },
  'niagara-on-the-lake':  { src: '/pics/hero-2.jpg',                 alt: (city) => `Private hibachi chef at a ${city} ON winery estate` },
  // Batch 3 — Cottage Country (v=3)
  'barrie':               { src: '/pics/hibachi-photo-2.jpg',        alt: (city) => `Cottage hibachi event in ${city}, ON` },
  'collingwood':          { src: '/pics/private-hibachi.jpg',        alt: (city) => `Mobile hibachi chef at a ${city} ON chalet` },
  // Batch 3 — Niagara Tourism (v=4)
  'niagara-falls':        { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Vacation rental hibachi in ${city}, ON` },
  // Batch 4 — University & Corporate (v=5)
  'ottawa':               { src: '/pics/hibachi-catering-3.jpg',     alt: (city) => `Corporate hibachi event in ${city}, ON` },
  'waterloo':             { src: '/pics/backyard-hibachi-3.jpg',     alt: (city) => `University graduation hibachi in ${city}, ON` },
  'kitchener':            { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Private hibachi chef in ${city}, ON` },
  'london':               { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Graduation hibachi party in ${city}, ON` },
  'kingston':             { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Backyard hibachi party in ${city}, ON` },
  // Batch 4 — GTA Family (v=2)
  'hamilton':             { src: '/pics/hibachi-catering-3.jpg',     alt: (city) => `Family hibachi celebration in ${city}, ON` },
}

// ── Support images ────────────────────────────────────────────────────────────
const ON_SUPPORT_IMAGES = {
  // Batch 1 — Toronto
  'toronto': {
    testimonial: { src: '/pics/private-hibachi.jpg',      alt: () => `Private hibachi chef at a Toronto ON condo event`,      caption: 'Toronto private dining',          intro: () => `Toronto hosts set the standard. Here's what they say:` },
    cta:         { src: '/pics/hibachi-event.jpg',         alt: () => `Private hibachi chef setting up in Toronto, ON`,         caption: 'Your Toronto evening starts here' },
  },
  // Batch 1 — Mississauga
  'mississauga': {
    testimonial: { src: '/pics/hibachi-catering.jpg',     alt: () => `Graduation hibachi party in Mississauga, ON`,            caption: 'Mississauga family celebrations',  intro: () => `Mississauga families celebrate big. Here's what they say:` },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',    alt: () => `Backyard hibachi chef in Mississauga, ON`,                caption: 'Your Mississauga celebration' },
  },
  // Batch 1 — Richmond Hill
  'richmond-hill': {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',   alt: () => `Private hibachi dinner in Richmond Hill, ON`,            caption: 'Richmond Hill private dining',     intro: () => `Richmond Hill hosts keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',       alt: () => `Private hibachi chef in Richmond Hill, ON`,               caption: 'Your Richmond Hill evening, elevated' },
  },
  // Batch 1 — Markham
  'markham': {
    testimonial: { src: '/pics/hibachi-shot-1.jpg',       alt: () => `Mobile hibachi event in Markham, ON`,                    caption: 'Markham corporate & family events', intro: () => `Markham hosts say it best:` },
    cta:         { src: '/pics/hibachi-austin-home.jpg',   alt: () => `Mobile hibachi chef at a Markham ON event`,               caption: 'The Markham event of the year' },
  },
  // Batch 1 — Vaughan
  'vaughan': {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg',alt: () => `Hibachi catering event in Vaughan, ON`,                 caption: 'Vaughan catering events',          intro: () => `Vaughan hosts keep booking us. Here's why:` },
    cta:         { src: '/pics/hibachi-dallas-home.jpg',   alt: () => `Hibachi catering chef in Vaughan, ON`,                   caption: 'Vaughan\'s catering standard' },
  },
  // Batch 2 — Brampton
  'brampton': {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',  alt: () => `Family graduation hibachi in Brampton, ON`,             caption: 'Brampton families celebrate big',  intro: () => `Brampton hosts say it best:` },
    cta:         { src: '/pics/private-hibachi.jpg',       alt: () => `Private hibachi chef in Brampton, ON`,                   caption: 'Your Brampton celebration' },
  },
  // Batch 2 — Oakville
  'oakville': {
    testimonial: { src: '/pics/hibachi-chef-home.jpg',    alt: () => `Private hibachi chef in Oakville, ON`,                  caption: 'Oakville private dining',          intro: () => `Oakville hosts set the standard. Here's what they say:` },
    cta:         { src: '/pics/backyard-hibachi-3.jpg',    alt: () => `Private hibachi chef at an Oakville ON estate`,          caption: 'Your Oakville estate evening' },
  },
  // Batch 2 — Burlington
  'burlington': {
    testimonial: { src: '/pics/hibachi-shot-1.jpg',       alt: () => `Private hibachi dinner in Burlington, ON`,              caption: 'Burlington hosts agree',           intro: () => `Burlington hosts keep booking us. Here's why:` },
    cta:         { src: '/pics/backyard-hibachi.jpg',      alt: () => `Private hibachi chef in Burlington, ON`,                 caption: 'Your Burlington evening, elevated' },
  },
  // Batch 2 — Milton
  'milton': {
    testimonial: { src: '/pics/hibachi-catering.jpg',     alt: () => `Family hibachi party in Milton, ON`,                   caption: 'Milton family celebrations',       intro: () => `Milton families keep booking us. Here's why:` },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',    alt: () => `Backyard hibachi chef in Milton, ON`,                   caption: 'Your Milton family event' },
  },
  // Batch 2 — Ajax
  'ajax': {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg',alt: () => `Mobile hibachi event in Ajax, ON`,                    caption: 'Ajax hosts agree',                 intro: () => `Ajax hosts say it best:` },
    cta:         { src: '/pics/hibachi-colorado-home.jpg', alt: () => `Mobile hibachi chef in Ajax, ON`,                      caption: 'The Ajax event of the year' },
  },
  // Batch 2 — Newmarket
  'newmarket': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: () => `Backyard hibachi party in Newmarket, ON`,              caption: 'Newmarket hosts agree',            intro: () => `Newmarket hosts keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',       alt: () => `Backyard hibachi chef in Newmarket, ON`,               caption: 'Your Newmarket backyard party' },
  },
  // Batch 3 — Muskoka
  'muskoka': {
    testimonial: { src: '/pics/hibachi-event.jpg',         alt: () => `Private hibachi chef at a Muskoka ON lakefront estate`, caption: 'Muskoka estate hosts agree',       intro: () => `Muskoka hosts set the standard. Here's what they say:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',     alt: () => `Private hibachi chef at a Muskoka cottage`,             caption: 'The Muskoka estate dinner of the season' },
  },
  // Batch 3 — Barrie
  'barrie': {
    testimonial: { src: '/pics/backyard-hibachi-3.jpg',   alt: () => `Cottage hibachi party in Barrie, ON`,                  caption: 'Barrie cottage hosts agree',       intro: () => `Barrie hosts keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-austin-home.jpg',   alt: () => `Mobile hibachi chef in Barrie, ON`,                    caption: 'Your Barrie cottage weekend' },
  },
  // Batch 3 — Collingwood
  'collingwood': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: () => `Mobile hibachi at a Collingwood ON chalet`,            caption: 'Collingwood retreat hosts agree',  intro: () => `Collingwood hosts say it best:` },
    cta:         { src: '/pics/hibachi-shot-1.jpg',        alt: () => `Mobile hibachi chef in Collingwood, ON`,               caption: 'Your Collingwood chalet weekend' },
  },
  // Batch 3 — Niagara Falls
  'niagara-falls': {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',      alt: () => `Vacation rental hibachi in Niagara Falls, ON`,         caption: 'Niagara Falls visitors agree',     intro: () => `Niagara Falls visitors keep booking us. Here's why:` },
    cta:         { src: '/pics/hibachi-dallas-home.jpg',   alt: () => `Private hibachi chef in Niagara Falls, ON`,            caption: 'The Niagara Falls dinner of the trip' },
  },
  // Batch 3 — Niagara-on-the-Lake
  'niagara-on-the-lake': {
    testimonial: { src: '/pics/backyard-hibachi.jpg',     alt: () => `Private hibachi at a Niagara-on-the-Lake winery estate`, caption: 'Niagara-on-the-Lake hosts agree', intro: () => `Niagara-on-the-Lake hosts set the standard. Here's what they say:` },
    cta:         { src: '/pics/hibachi-catering-2.jpg',   alt: () => `Private hibachi chef in Niagara-on-the-Lake, ON`,      caption: 'Your Niagara-on-the-Lake estate evening' },
  },
  // Batch 4 — Ottawa
  'ottawa': {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',      alt: () => `Corporate hibachi event in Ottawa, ON`,               caption: 'Ottawa corporate & graduation hosts agree', intro: () => `Ottawa hosts say it best:` },
    cta:         { src: '/pics/private-hibachi.jpg',       alt: () => `Private hibachi chef in Ottawa, ON`,                  caption: 'Your Ottawa event, elevated' },
  },
  // Batch 4 — Waterloo
  'waterloo': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: () => `University graduation hibachi in Waterloo, ON`,       caption: 'Waterloo tech & grad hosts agree',  intro: () => `Waterloo hosts say it best:` },
    cta:         { src: '/pics/hibachi-shot-1.jpg',        alt: () => `Private hibachi chef in Waterloo, ON`,                caption: 'Your Waterloo graduation event' },
  },
  // Batch 4 — Kitchener
  'kitchener': {
    testimonial: { src: '/pics/hibachi-catering.jpg',     alt: () => `Private hibachi event in Kitchener, ON`,              caption: 'Kitchener hosts agree',            intro: () => `Kitchener hosts keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-colorado-home.jpg', alt: () => `Private hibachi chef in Kitchener, ON`,               caption: 'Your Kitchener celebration' },
  },
  // Batch 4 — London
  'london': {
    testimonial: { src: '/pics/backyard-hibachi.jpg',     alt: () => `Graduation hibachi party in London, ON`,              caption: 'London graduation hosts agree',    intro: () => `London ON hosts say it best:` },
    cta:         { src: '/pics/hibachi-austin-home.jpg',   alt: () => `Private hibachi chef in London, ON`,                  caption: 'Your London graduation event' },
  },
  // Batch 4 — Kingston
  'kingston': {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',  alt: () => `Backyard hibachi party in Kingston, ON`,              caption: 'Kingston hosts agree',             intro: () => `Kingston hosts keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-virginia-beach.jpg',alt: () => `Private hibachi chef in Kingston, ON`,               caption: 'Your Kingston backyard party' },
  },
  // Batch 4 — Hamilton
  'hamilton': {
    testimonial: { src: '/pics/backyard-hibachi-2.jpg',   alt: () => `Family hibachi celebration in Hamilton, ON`,          caption: 'Hamilton family hosts agree',      intro: () => `Hamilton hosts say it best:` },
    cta:         { src: '/pics/private-hibachi.jpg',       alt: () => `Private hibachi chef in Hamilton, ON`,                caption: 'Your Hamilton backyard celebration' },
  },
}

// ── Support fallbacks (per theme) ─────────────────────────────────────────────
const ON_SUPPORT_FALLBACKS = [
  // Theme 0 — Toronto Urban Core
  {
    testimonial: { src: '/pics/private-hibachi.jpg',      alt: (city) => `Private hibachi event in ${city}, ON`,               caption: 'Toronto area hosts agree',         intro: (city) => `${city} hosts keep booking us. Here's what they say:` },
    cta:         { src: '/pics/hibachi-event.jpg',         alt: (city) => `Private hibachi chef in ${city}, ON`,                 caption: 'Your private Toronto evening' },
  },
  // Theme 1 — GTA Affluent Suburbs
  {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',   alt: (city) => `Private hibachi event in ${city}, ON`,               caption: 'GTA affluent hosts agree',         intro: (city) => `${city} hosts say it best:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',     alt: (city) => `Private hibachi chef in ${city}, ON`,                 caption: 'Your GTA estate event, elevated' },
  },
  // Theme 2 — GTA Family & Community
  {
    testimonial: { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Family hibachi party in ${city}, ON`,                caption: 'GTA family hosts agree',           intro: (city) => `${city} families keep booking us. Here's why:` },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Backyard hibachi chef in ${city}, ON`,                caption: 'Your ${city} family celebration' },
  },
  // Theme 3 — Cottage Country & Resort
  {
    testimonial: { src: '/pics/hibachi-colorado-home.jpg',alt: (city) => `Cottage hibachi event in ${city}, ON`,               caption: 'Cottage country hosts agree',      intro: (city) => `${city} cottage hosts keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',       alt: (city) => `Mobile hibachi chef at a ${city} ON cottage`,         caption: 'The cottage dinner of the weekend' },
  },
  // Theme 4 — Niagara Tourism
  {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg',alt: (city) => `Vacation rental hibachi in ${city}, ON`,            caption: 'Niagara guests agree',             intro: (city) => `${city} visitors keep coming back. Here's why:` },
    cta:         { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Private hibachi chef in ${city}, ON`,                caption: 'The Niagara dinner of the trip' },
  },
  // Theme 5 — University & Corporate
  {
    testimonial: { src: '/pics/hibachi-event.jpg',        alt: (city) => `Corporate hibachi event in ${city}, ON`,             caption: 'Ontario corporate hosts agree',    intro: (city) => `${city} hosts say it best:` },
    cta:         { src: '/pics/hibachi-catering-2.jpg',    alt: (city) => `Private hibachi chef in ${city}, ON`,                 caption: 'Your ${city} corporate event' },
  },
  // Theme 6 — Luxury Cottage
  {
    testimonial: { src: '/pics/hibachi-colorado.jpg',     alt: (city) => `Estate cottage hibachi in ${city}, ON`,              caption: 'Ontario estate hosts agree',       intro: (city) => `${city} estate hosts set the standard. Here's what they say:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',    alt: (city) => `Private hibachi chef at a ${city} ON estate`,         caption: 'The ${city} estate dining standard' },
  },
]

// ── Blog posts ────────────────────────────────────────────────────────────────
const ON_BLOG_POSTS = [
  // Theme 0 — Toronto Urban Core
  [
    { slug: 'hibachi-bachelorette-party',        title: 'Why Hibachi Is the Perfect Bachelorette Party Idea' },
    { slug: 'hibachi-at-home-vs-restaurant',     title: 'Hibachi at Home vs. Restaurant: Which Is Worth It?' },
    { slug: 'what-to-expect-hibachi-chef-home',  title: 'What to Expect When You Book a Private Hibachi Chef' },
  ],
  // Theme 1 — GTA Affluent Suburbs
  [
    { slug: 'hibachi-menu-proteins-guide',        title: 'The Complete Hibachi Menu Guide: Proteins, Sauces & Add-Ons' },
    { slug: 'how-much-does-private-hibachi-cost', title: 'How Much Does a Private Hibachi Chef Cost?' },
    { slug: 'hibachi-at-home-vs-restaurant',      title: 'Hibachi at Home vs. Restaurant: Which Is Worth It?' },
  ],
  // Theme 2 — GTA Family & Community
  [
    { slug: 'why-families-choose-hibachi-at-home',   title: 'Why Families Are Choosing Hibachi at Home Over Restaurants' },
    { slug: 'hibachi-birthday-party-ideas',           title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget' },
    { slug: 'how-to-plan-a-backyard-hibachi-party',   title: 'How to Plan a Backyard Hibachi Party (Complete Checklist)' },
  ],
  // Theme 3 — Cottage Country & Resort
  [
    { slug: 'what-to-expect-hibachi-chef-home',  title: 'What to Expect When You Book a Private Hibachi Chef' },
    { slug: 'indoor-vs-outdoor-hibachi',          title: 'Indoor vs Outdoor Hibachi: What You Need to Know Before Booking' },
    { slug: 'hibachi-bachelorette-party',         title: 'Why Hibachi Is the Perfect Bachelorette Party Idea' },
  ],
  // Theme 4 — Niagara Tourism
  [
    { slug: 'hibachi-bachelorette-party',         title: 'Why Hibachi Is the Perfect Bachelorette Party Idea' },
    { slug: 'hibachi-birthday-party-ideas',        title: '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget' },
    { slug: 'how-much-does-private-hibachi-cost',  title: 'How Much Does a Private Hibachi Chef Cost?' },
  ],
  // Theme 5 — University & Corporate
  [
    { slug: 'hibachi-catering-corporate-events',  title: 'Why Hibachi Catering Is the Best Choice for Corporate Events' },
    { slug: 'how-much-does-private-hibachi-cost', title: 'How Much Does a Private Hibachi Chef Cost?' },
    { slug: 'hibachi-at-home-vs-restaurant',      title: 'Hibachi at Home vs. Restaurant: Which Is Worth It?' },
  ],
  // Theme 6 — Luxury Cottage
  [
    { slug: 'hibachi-menu-proteins-guide',        title: 'The Complete Hibachi Menu Guide: Proteins, Sauces & Add-Ons' },
    { slug: 'what-to-expect-hibachi-chef-home',   title: 'What to Expect When You Book a Private Hibachi Chef' },
    { slug: 'indoor-vs-outdoor-hibachi',           title: 'Indoor vs Outdoor Hibachi: What You Need to Know Before Booking' },
  ],
]

// ── Major cities map ──────────────────────────────────────────────────────────
// Batch 1: profileIdx 0–4 (Toronto, Mississauga, Richmond Hill, Markham, Vaughan)
const ON_MAJOR_CITIES = {
  // ── Theme 0 — Toronto Urban Core ─────────────────────────────────────────────
  'toronto':        { v: 0, profileIdx: 0,  nearby: ['Mississauga', 'Markham', 'Vaughan', 'Etobicoke', 'North York'] },
  // ── Theme 2 — GTA Family & Community ─────────────────────────────────────────
  'mississauga':    { v: 2, profileIdx: 1,  nearby: ['Toronto', 'Brampton', 'Oakville', 'Milton', 'Etobicoke'] },
  // ── Theme 1 — GTA Affluent Suburbs ───────────────────────────────────────────
  'richmond-hill':  { v: 1, profileIdx: 2,  nearby: ['Markham', 'Vaughan', 'Newmarket', 'Toronto', 'Aurora'] },
  'markham':        { v: 1, profileIdx: 3,  nearby: ['Richmond Hill', 'Vaughan', 'Toronto', 'Ajax', 'Pickering'] },
  'vaughan':        { v: 1, profileIdx: 4,  nearby: ['Richmond Hill', 'Toronto', 'Newmarket', 'Brampton', 'Woodbridge'] },
  // ── Batch 2 — GTA Family & Community ─────────────────────────────────────────
  'brampton':       { v: 2, profileIdx: 5,  nearby: ['Toronto', 'Mississauga', 'Vaughan', 'Etobicoke', 'Malton'] },
  'milton':         { v: 2, profileIdx: 8,  nearby: ['Oakville', 'Brampton', 'Burlington', 'Mississauga', 'Georgetown'] },
  'ajax':           { v: 2, profileIdx: 9,  nearby: ['Pickering', 'Whitby', 'Oshawa', 'Toronto', 'Markham'] },
  // ── Batch 2 — GTA Affluent Suburbs ───────────────────────────────────────────
  'oakville':       { v: 1, profileIdx: 6,  nearby: ['Burlington', 'Mississauga', 'Milton', 'Brampton', 'Etobicoke'] },
  'burlington':     { v: 1, profileIdx: 7,  nearby: ['Oakville', 'Hamilton', 'Mississauga', 'Milton', 'Brampton'] },
  'newmarket':      { v: 1, profileIdx: 10, nearby: ['Aurora', 'Richmond Hill', 'Barrie', 'Vaughan', 'Bradford'] },
  // ── Batch 3 — Luxury Cottage ──────────────────────────────────────────────────
  'muskoka':             { v: 6, profileIdx: 11, nearby: ['Bracebridge', 'Gravenhurst', 'Huntsville', 'Parry Sound', 'Barrie'] },
  'niagara-on-the-lake': { v: 6, profileIdx: 15, nearby: ['Niagara Falls', 'St. Catharines', 'Queenston', 'Fort Erie', 'Hamilton'] },
  // ── Batch 3 — Cottage Country & Resort ───────────────────────────────────────
  'barrie':              { v: 3, profileIdx: 12, nearby: ['Collingwood', 'Newmarket', 'Orillia', 'Wasaga Beach', 'Midland'] },
  'collingwood':         { v: 3, profileIdx: 13, nearby: ['Barrie', 'Wasaga Beach', 'Owen Sound', 'Thornbury', 'Meaford'] },
  // ── Batch 3 — Niagara Tourism ─────────────────────────────────────────────────
  'niagara-falls':       { v: 4, profileIdx: 14, nearby: ['Niagara-on-the-Lake', 'St. Catharines', 'Welland', 'Fort Erie', 'Thorold'] },
  // ── Batch 4 — University & Corporate ─────────────────────────────────────────
  'ottawa':     { v: 5, profileIdx: 16, nearby: ['Gatineau', 'Kanata', 'Barrhaven', 'Gloucester', 'Nepean'] },
  'waterloo':   { v: 5, profileIdx: 17, nearby: ['Kitchener', 'Cambridge', 'Guelph', 'London', 'Hamilton'] },
  'kitchener':  { v: 5, profileIdx: 18, nearby: ['Waterloo', 'Cambridge', 'Guelph', 'Brantford', 'London'] },
  'london':     { v: 5, profileIdx: 19, nearby: ['Kitchener', 'Waterloo', 'Woodstock', 'Sarnia', 'Stratford'] },
  'kingston':   { v: 5, profileIdx: 20, nearby: ['Gananoque', 'Belleville', 'Napanee', 'Brockville', 'Ottawa'] },
  // ── Batch 4 — GTA Family (Hamilton) ──────────────────────────────────────────
  'hamilton':   { v: 2, profileIdx: 21, nearby: ['Burlington', 'Oakville', 'Niagara Falls', 'Brantford', 'Toronto'] },
}

// ── Display name overrides ────────────────────────────────────────────────────
const ON_CITY_DISPLAY_NAMES = {
  'richmond-hill':       'Richmond Hill',
  'niagara-falls':       'Niagara Falls',
  'niagara-on-the-lake': 'Niagara-on-the-Lake',
  'newmarket':           'Newmarket',
  'north-york':          'North York',
}

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const ON_PROFILE_H1_PREFIXES = [
  'Hibachi at Home in',        // 0  — Toronto
  'Hibachi at Home in',        // 1  — Mississauga
  'Hibachi at Home in',        // 2  — Richmond Hill
  'Mobile Hibachi in',         // 3  — Markham
  'Hibachi Catering in',       // 4  — Vaughan
  'Hibachi at Home in',        // 5  — Brampton
  'Private Hibachi Chef in',   // 6  — Oakville
  'Hibachi at Home in',        // 7  — Burlington
  'Hibachi at Home in',        // 8  — Milton
  'Mobile Hibachi in',         // 9  — Ajax
  'Backyard Hibachi Party in', // 10 — Newmarket
  'Private Hibachi Chef in',   // 11 — Muskoka
  'Hibachi at Home in',        // 12 — Barrie
  'Mobile Hibachi in',         // 13 — Collingwood
  'Mobile Hibachi in',         // 14 — Niagara Falls
  'Private Hibachi Chef in',   // 15 — Niagara-on-the-Lake
  'Private Hibachi Chef in',   // 16 — Ottawa
  'Hibachi Catering in',       // 17 — Waterloo
  'Hibachi Catering in',       // 18 — Kitchener
  'Hibachi at Home in',        // 19 — London
  'Backyard Hibachi Party in', // 20 — Kingston
  'Hibachi at Home in',        // 21 — Hamilton
]

const ON_THEME_H1_PREFIXES = [
  'Hibachi at Home in', // v=0 Toronto Urban Core generic
  'Hibachi at Home in', // v=1 GTA Affluent Suburbs generic
  'Hibachi at Home in', // v=2 GTA Family generic
  'Hibachi at Home in', // v=3 Cottage Country generic
  'Mobile Hibachi in',  // v=4 Niagara Tourism generic
  'Hibachi Catering in',// v=5 University & Corporate generic
  'Private Hibachi Chef in', // v=6 Luxury Cottage generic
]

// ── Custom meta overrides ──────────────────────────────────────────────────────
const ON_CUSTOM_META = {
  'toronto': {
    title: 'Hibachi at Home in Toronto, ON | Condo Terraces & Backyard Events | Hibachi Connect',
    desc:  'Book a certified private hibachi chef in Toronto for your condo terrace, backyard, or outdoor venue. Bachelorette weekends, milestone birthdays, corporate dinners. From $78/adult CAD. Serving Toronto and all of the GTA.',
  },
  'mississauga': {
    title: 'Hibachi at Home in Mississauga, ON | Graduation & Family Celebrations | Hibachi Connect',
    desc:  'A certified hibachi chef for your Mississauga graduation party, family reunion, or backyard celebration. From $78/adult CAD. Dual-station capacity for 25–60+ guests. Serving Mississauga and the GTA.',
  },
  'richmond-hill': {
    title: 'Hibachi at Home in Richmond Hill, ON | GTA North Estate Dining | Hibachi Connect',
    desc:  'A certified teppanyaki chef for your Richmond Hill backyard or estate event. Premium proteins, live performance, complete cleanup. From $78/adult CAD. Serving Richmond Hill and York Region.',
  },
  'markham': {
    title: 'Mobile Hibachi in Markham, ON | Corporate Tech & Family Milestone Events | Hibachi Connect',
    desc:  'A certified mobile hibachi chef comes to your Markham property. Perfect for corporate tech events and family milestone celebrations. Full setup, live performance, complete cleanup. From $78/adult CAD.',
  },
  'vaughan': {
    title: 'Hibachi Catering in Vaughan, ON | Large Family Events & Corporate Dining | Hibachi Connect',
    desc:  'Book hibachi catering for your Vaughan large family gathering, corporate dinner, or backyard celebration. Certified teppanyaki chefs, dual-station capacity, complete cleanup. From $78/adult CAD.',
  },
  'brampton': {
    title: 'Hibachi at Home in Brampton, ON | Graduation & Cultural Celebration Events | Hibachi Connect',
    desc:  'A certified hibachi chef for your Brampton graduation party, Diwali celebration, or family reunion. From $78/adult CAD. Dual-station capacity for 25–60+ guests. Serving Brampton and the GTA.',
  },
  'oakville': {
    title: 'Private Hibachi Chef in Oakville, ON | Lakeshore Estate & Backyard Dining | Hibachi Connect',
    desc:  'Book a certified private hibachi chef for your Oakville estate, waterfront property, or backyard event. Premium proteins, live performance, full cleanup. From $78/adult CAD. Serving Oakville and Halton Region.',
  },
  'burlington': {
    title: 'Hibachi at Home in Burlington, ON | Lakefront & Estate Backyard Events | Hibachi Connect',
    desc:  'A certified teppanyaki chef for your Burlington backyard, waterfront property, or estate event. Full setup, live performance, complete cleanup. From $78/adult CAD. Serving Burlington and Halton Region.',
  },
  'milton': {
    title: 'Hibachi at Home in Milton, ON | Family Graduation & Backyard Celebrations | Hibachi Connect',
    desc:  'A certified hibachi chef for your Milton graduation party, birthday celebration, or family gathering. From $78/adult CAD. Full setup, live teppanyaki performance, complete cleanup. Serving Milton and Halton Region.',
  },
  'ajax': {
    title: 'Mobile Hibachi in Ajax, ON | Durham Region Family & Graduation Events | Hibachi Connect',
    desc:  'A certified mobile hibachi chef comes to your Ajax property. Perfect for graduation parties, family reunions, and backyard celebrations. Full setup, live performance, complete cleanup. From $78/adult CAD.',
  },
  'newmarket': {
    title: 'Backyard Hibachi Party in Newmarket, ON | York Region Estate Events | Hibachi Connect',
    desc:  'Book a certified hibachi chef for your Newmarket backyard or estate property. Perfect for milestone birthdays, graduation parties, and family celebrations. From $78/adult CAD. Serving Newmarket and York Region.',
  },
  'muskoka': {
    title: 'Private Hibachi Chef in Muskoka, ON | Lakefront Cottage & Estate Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Muskoka lakefront cottage or estate. Premium proteins, live fire performance, full pack-out. From $78/adult CAD. Serving Muskoka and Ontario cottage country.',
  },
  'barrie': {
    title: 'Hibachi at Home in Barrie, ON | Cottage Country & Kempenfelt Bay Events | Hibachi Connect',
    desc:  'A certified mobile hibachi chef for your Barrie backyard, cottage, or Lake Simcoe waterfront property. Full setup, live performance, complete cleanup. From $78/adult CAD. Serving Barrie and Georgian Bay.',
  },
  'collingwood': {
    title: 'Mobile Hibachi in Collingwood, ON | Blue Mountain Chalet & Georgian Bay Events | Hibachi Connect',
    desc:  'A certified mobile hibachi chef comes to your Collingwood chalet, cottage, or resort property. Perfect for Blue Mountain retreats and Georgian Bay weekends. From $78/adult CAD.',
  },
  'niagara-falls': {
    title: 'Mobile Hibachi in Niagara Falls, ON | Vacation Rental & Bachelorette Dinners | Hibachi Connect',
    desc:  'A certified mobile hibachi chef at your Niagara Falls vacation rental or inn. Bachelorette weekends, honeymoon dinners, group getaways. From $78/adult CAD. Serving the full Niagara region.',
  },
  'niagara-on-the-lake': {
    title: 'Private Hibachi Chef in Niagara-on-the-Lake, ON | Winery Estate & Inn Dining | Hibachi Connect',
    desc:  'A certified private hibachi chef at your Niagara-on-the-Lake winery estate, inn, or vacation property. Premium proteins, live fire performance, full cleanup. From $78/adult CAD.',
  },
  'ottawa': {
    title: 'Private Hibachi Chef in Ottawa, ON | Government & Corporate Events | Hibachi Connect',
    desc:  'A certified private hibachi chef for your Ottawa corporate dinner, university graduation party, or backyard celebration. From $78/adult CAD. Full setup, live performance, complete cleanup. Serving Ottawa and the region.',
  },
  'waterloo': {
    title: 'Hibachi Catering in Waterloo, ON | University Graduation & Tech Events | Hibachi Connect',
    desc:  'A certified hibachi chef for your Waterloo graduation party, corporate tech event, or family celebration. From $78/adult CAD. Dual-station capacity, full setup and cleanup. Serving Waterloo and Waterloo Region.',
  },
  'kitchener': {
    title: 'Hibachi Catering in Kitchener, ON | Family Celebrations & Corporate Dinners | Hibachi Connect',
    desc:  'A certified hibachi chef for your Kitchener graduation party, family gathering, or corporate event. From $78/adult CAD. Full setup, live teppanyaki performance, complete cleanup. Serving Kitchener and Waterloo Region.',
  },
  'london': {
    title: 'Hibachi at Home in London, ON | University Graduation & Forest City Events | Hibachi Connect',
    desc:  'A certified private hibachi chef for your London Ontario graduation party, family celebration, or corporate dinner. From $78/adult CAD. Full setup, live performance, complete cleanup. Serving London and the region.',
  },
  'kingston': {
    title: 'Backyard Hibachi Party in Kingston, ON | Queen\'s University Graduation Events | Hibachi Connect',
    desc:  'A certified hibachi chef for your Kingston graduation party, backyard celebration, or family event. From $78/adult CAD. Full setup, live teppanyaki performance, complete cleanup. Serving Kingston and surrounding communities.',
  },
  'hamilton': {
    title: 'Hibachi at Home in Hamilton, ON | Family Celebrations & Graduation Events | Hibachi Connect',
    desc:  'A certified hibachi chef for your Hamilton backyard graduation party, family celebration, or milestone event. From $78/adult CAD. Dual-station capacity, full setup and cleanup. Serving Hamilton and surrounding communities.',
  },
}

// ── Generic closing variants (ON 189–195) ────────────────────────────────────
export const ON_CLOSING_VARIANTS = [
  // 189 — Toronto Urban Core
  {
    headline: (city) => `Your ${city} Event Starts Here`,
    sub:      (city) => `A certified hibachi chef. Premium proteins. Full setup and zero cleanup. Starting at $78 per adult CAD in ${city}.`,
    urgency:  `Toronto spring and summer weekends fill 3–5 weeks out. Check your date now.`,
  },
  // 190 — GTA Affluent Suburbs
  {
    headline: (city) => `${city}'s Best Private Dinner — Book It`,
    sub:      (city) => `A certified teppanyaki chef. All proteins and ingredients. Complete setup and cleanup. From $78 per adult CAD in ${city}.`,
    urgency:  `GTA weekend events book 2–4 weeks ahead. Secure your date now.`,
  },
  // 191 — GTA Family & Community
  {
    headline: (city) => `${city}'s Most Memorable Celebration — Book Yours`,
    sub:      (city) => `Certified teppanyaki chefs for groups of 10–60+. Fresh proteins, full performance, complete setup and cleanup. From $78/adult CAD in ${city}.`,
    urgency:  `Graduation season and summer Saturdays book fast. Confirm your Ontario date now.`,
  },
  // 192 — Cottage Country & Resort
  {
    headline: (city) => `The ${city} Cottage Weekend Dinner Everyone Remembers`,
    sub:      (city) => `A mobile hibachi chef travels to your ${city} cottage — grill, ingredients, full show, complete cleanup. From $78/adult CAD.`,
    urgency:  `Victoria Day through Labour Day fills fast in cottage country. Reserve your date now.`,
  },
  // 193 — Niagara Tourism
  {
    headline: (city) => `The ${city} Dinner Your Group Has Been Waiting For`,
    sub:      (city) => `A certified hibachi chef at your ${city} vacation rental. Full setup, premium proteins, complete cleanup. From $78/adult CAD.`,
    urgency:  `Niagara summer and peak weekends fill weeks in advance. Book your date now.`,
  },
  // 194 — University & Corporate
  {
    headline: (city) => `${city}'s Best Corporate Dining Experience — Book It`,
    sub:      (city) => `Certified teppanyaki chefs for corporate events and graduation celebrations. Full setup and cleanup. From $78/adult CAD in ${city}.`,
    urgency:  'Graduation season and corporate event season book early. Confirm your Ontario date now.',
  },
  // 195 — Luxury Cottage
  {
    headline: (city) => `The ${city} Private Dining Experience — Reserve Your Chef`,
    sub:      (city) => `A certified private hibachi chef at your ${city} estate cottage or retreat. Premium proteins, live performance, complete cleanup. From $78/adult CAD.`,
    urgency:  'Luxury cottage season fills quickly. Reserve your Ontario date well in advance.',
  },
]

// ── City-specific closings (ON 196–217) ───────────────────────────────────────
// Batch 1: indices 0–4 (profileIdx 0–4: Toronto, Mississauga, Richmond Hill, Markham, Vaughan)
export const ON_CITY_CLOSINGS = [
  // 196 — Toronto (profileIdx 0)
  {
    headline: (city) => `Toronto's Private Chef Experience — Book Yours`,
    sub:      (city) => `A certified teppanyaki chef at your Toronto condo terrace, backyard, or event space. Full setup, all ingredients, complete cleanup. From $78/adult CAD.`,
    urgency:  `Toronto spring and summer weekends fill 3–5 weeks out. Bachelorette and milestone birthday weekends book fastest. Confirm your date now.`,
  },
  // 197 — Mississauga (profileIdx 1)
  {
    headline: (city) => `Mississauga's Most Memorable Celebration — Book It`,
    sub:      (city) => `A certified hibachi chef for your Mississauga backyard or outdoor space. Dual-station capacity for groups of 25–60+. From $78/adult CAD.`,
    urgency:  `Graduation season (May–June) and summer Saturdays fill fast across the GTA. Reserve your Mississauga date now.`,
  },
  // 198 — Richmond Hill (profileIdx 2)
  {
    headline: (city) => `Richmond Hill's Private Dining Standard — Book Yours`,
    sub:      (city) => `A certified teppanyaki chef at your Richmond Hill home or estate. Premium ingredients, live performance, complete cleanup. From $78/adult CAD.`,
    urgency:  `Richmond Hill spring and summer events book 2–4 weeks ahead. Confirm your York Region date now.`,
  },
  // 199 — Markham (profileIdx 3)
  {
    headline: (city) => `The Markham Event Everyone Remembers — Book It`,
    sub:      (city) => `A certified mobile hibachi chef comes to your Markham property. Full setup, live teppanyaki performance, complete cleanup. From $78/adult CAD.`,
    urgency:  `Markham corporate and family events book 2–3 weeks ahead. Check your date now.`,
  },
  // 200 — Vaughan (profileIdx 4)
  {
    headline: (city) => `Vaughan's Hibachi Catering Standard — Reserve Your Chef`,
    sub:      (city) => `Certified teppanyaki chefs for Vaughan's large events and private gatherings. Dual-station capacity, full setup and cleanup. From $78/adult CAD.`,
    urgency:  `Vaughan weekend events book 2–3 weeks ahead. Large events and holiday gatherings fill fastest. Reserve your date now.`,
  },
  // 201 — Brampton (profileIdx 5)
  {
    headline: (city) => `Brampton's Most Memorable Celebration — Book It`,
    sub:      (city) => `A certified hibachi chef for your Brampton backyard or outdoor space. Dual-station capacity for groups of 25–60+. From $78/adult CAD.`,
    urgency:  `Brampton graduation season and cultural celebration weekends book fast. Reserve your date now.`,
  },
  // 202 — Oakville (profileIdx 6)
  {
    headline: (city) => `Oakville's Private Chef Standard — Book Yours`,
    sub:      (city) => `A certified teppanyaki chef at your Oakville estate, waterfront property, or backyard. Premium proteins, full setup and cleanup. From $78/adult CAD.`,
    urgency:  `Oakville spring and summer events book 2–4 weeks ahead. Reserve your Halton Region date now.`,
  },
  // 203 — Burlington (profileIdx 7)
  {
    headline: (city) => `Burlington's Private Hibachi Standard — Book Yours`,
    sub:      (city) => `A certified teppanyaki chef at your Burlington home or lakefront property. Live performance, full setup and cleanup. From $78/adult CAD.`,
    urgency:  `Burlington summer and graduation season events book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 204 — Milton (profileIdx 8)
  {
    headline: (city) => `Milton's Backyard Hibachi Event — Book It`,
    sub:      (city) => `A certified hibachi chef for your Milton backyard celebration. Full setup, live teppanyaki performance, complete cleanup. From $78/adult CAD.`,
    urgency:  `Milton graduation and summer events fill fast. Reserve your Halton Region date now.`,
  },
  // 205 — Ajax (profileIdx 9)
  {
    headline: (city) => `The Ajax Event Everyone Remembers — Book It`,
    sub:      (city) => `A certified mobile hibachi chef comes to your Ajax property. Full setup, live teppanyaki performance, complete cleanup. From $78/adult CAD.`,
    urgency:  `Ajax and Durham Region events book 2–3 weeks ahead. Check your date now.`,
  },
  // 206 — Newmarket (profileIdx 10)
  {
    headline: (city) => `Newmarket's Backyard Hibachi Party — Reserve Yours`,
    sub:      (city) => `A certified hibachi chef at your Newmarket backyard or estate. Full setup, live performance, complete cleanup. From $78/adult CAD.`,
    urgency:  `Newmarket and York Region events book 2–3 weeks ahead. Graduation season fills fastest. Reserve your date now.`,
  },
  // 207 — Muskoka (profileIdx 11)
  {
    headline: (city) => `Your Muskoka Estate Dinner — Reserve Your Chef`,
    sub:      (city) => `A certified private hibachi chef at your Muskoka lakefront cottage or estate. Premium proteins, live fire performance, full pack-out. From $78/adult CAD.`,
    urgency:  `Muskoka peak season (Victoria Day through Thanksgiving) fills 6–10 weeks ahead. Reserve your date well in advance.`,
  },
  // 208 — Barrie (profileIdx 12)
  {
    headline: (city) => `Your Barrie Cottage Dinner — Book It`,
    sub:      (city) => `A certified mobile hibachi chef travels to your Barrie property or cottage. Full setup, live performance, complete cleanup. From $78/adult CAD.`,
    urgency:  `Barrie and Georgian Bay cottage events book 3–5 weeks ahead in peak season. Check your date now.`,
  },
  // 209 — Collingwood (profileIdx 13)
  {
    headline: (city) => `Your Collingwood Chalet Dinner — Reserve the Chef`,
    sub:      (city) => `A certified mobile hibachi chef at your Collingwood chalet or Georgian Bay property. Full setup, live performance, complete cleanup. From $78/adult CAD.`,
    urgency:  `Collingwood peak season events book 3–5 weeks ahead. Blue Mountain and summer weekends fill fastest. Reserve now.`,
  },
  // 210 — Niagara Falls (profileIdx 14)
  {
    headline: (city) => `The Niagara Falls Dinner Your Group Deserves — Book It`,
    sub:      (city) => `A certified mobile hibachi chef at your Niagara Falls vacation rental or property. Full setup, live teppanyaki performance, complete cleanup. From $78/adult CAD.`,
    urgency:  `Niagara Falls summer and peak weekends fill weeks in advance. Reserve your date now.`,
  },
  // 211 — Niagara-on-the-Lake (profileIdx 15)
  {
    headline: (city) => `Your Niagara-on-the-Lake Private Dinner — Reserve It`,
    sub:      (city) => `A certified private hibachi chef at your Niagara-on-the-Lake winery estate, inn, or vacation property. Premium proteins, full setup and cleanup. From $78/adult CAD.`,
    urgency:  `Niagara-on-the-Lake peak season books 4–8 weeks ahead. Winery estate and inn events fill fastest. Reserve now.`,
  },
  // 212 — Ottawa (profileIdx 16)
  {
    headline: (city) => `Ottawa's Private Chef Experience — Book Yours`,
    sub:      (city) => `A certified teppanyaki chef for your Ottawa corporate dinner, university graduation, or backyard celebration. Full setup and cleanup. From $78/adult CAD.`,
    urgency:  `Ottawa graduation season and corporate event season book 2–3 weeks ahead. Confirm your date now.`,
  },
  // 213 — Waterloo (profileIdx 17)
  {
    headline: (city) => `Waterloo's Hibachi Catering Standard — Book It`,
    sub:      (city) => `Certified teppanyaki chefs for Waterloo graduation parties, tech company events, and family celebrations. Dual-station capacity, full setup and cleanup. From $78/adult CAD.`,
    urgency:  `Waterloo graduation season (May–June) fills fast. Reserve your Waterloo Region date now.`,
  },
  // 214 — Kitchener (profileIdx 18)
  {
    headline: (city) => `Kitchener's Most Memorable Celebration — Book It`,
    sub:      (city) => `A certified hibachi chef for your Kitchener graduation party, family event, or corporate dinner. Full setup and complete cleanup. From $78/adult CAD.`,
    urgency:  `Kitchener and Waterloo Region events book 2–3 weeks ahead. Graduation season fills fastest. Reserve now.`,
  },
  // 215 — London (profileIdx 19)
  {
    headline: (city) => `London Ontario's Hibachi Celebration — Book Yours`,
    sub:      (city) => `A certified teppanyaki chef for your London Ontario graduation party, family celebration, or corporate dinner. Full setup and cleanup. From $78/adult CAD.`,
    urgency:  `London graduation season (May–June) and summer events book 2–3 weeks ahead. Reserve your date now.`,
  },
  // 216 — Kingston (profileIdx 20)
  {
    headline: (city) => `Kingston's Backyard Hibachi Party — Reserve It`,
    sub:      (city) => `A certified hibachi chef at your Kingston backyard or outdoor venue. Full setup, live teppanyaki performance, complete cleanup. From $78/adult CAD.`,
    urgency:  `Kingston Queen's convocation weekend and summer events fill fast. Reserve your date now.`,
  },
  // 217 — Hamilton (profileIdx 21)
  {
    headline: (city) => `Hamilton's Most Memorable Backyard Event — Book It`,
    sub:      (city) => `A certified hibachi chef for your Hamilton backyard graduation party, family reunion, or milestone celebration. Dual-station capacity. From $78/adult CAD.`,
    urgency:  `Hamilton graduation season and summer events book 2–3 weeks ahead. Reserve your date now.`,
  },
]

// ── Generic intro variants (ON 189–195) ───────────────────────────────────────
export const ON_INTRO_VARIANTS = [
  // 189 — Toronto Urban Core
  {
    headline: (city) => `Hibachi at Home in ${city}: Private Dining for the GTA`,
    opening:  (city, state) =>
      `Toronto runs on occasion. The King West condo terraces where bachelorette groups fly in from Vancouver and Montreal for the weekend, the Leslieville backyards where the milestone birthday was months in planning, the Midtown corporate patios where a client dinner has to earn its two hours. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with everything included — the full setup, all fresh ingredients, and a live-fire cooking performance that turns any Toronto gathering into the evening your guests are still referencing at the next one.`,
    middle:   (city, state) =>
      `Your chef arrives with a propane teppan grill, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. One station for up to 20 guests; dual stations for larger ${city} events up to 60+. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} spring and summer events book 3–5 weeks out during peak season. Bachelorette weekends and wedding-related events fill even faster. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day. Serving ${city} and all of the GTA.`,
  },
  // 190 — GTA Affluent Suburbs
  {
    headline: (city) => `Hibachi at Home in ${city}: The GTA Affluent Suburb Standard`,
    opening:  (city, state) =>
      `The GTA's most sought-after suburban communities — Markham, Richmond Hill, Vaughan, Oakville — have built something real. The estate backyards, the stone-patio properties that were the selling point when the home was purchased, the milestone event culture that holds the family gathering to a standard that most restaurants simply cannot reach. Private hibachi at home in ${city} brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire performance that meets the standard ${city} hosts set for every occasion.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Premium protein upgrades including filet mignon and lobster tail available. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–4 weeks out during peak season. Milestone birthdays and family reunion events book fastest — reserve 3–5 weeks ahead for Saturday events. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day. Serving ${city} and all of the GTA.`,
  },
  // 191 — GTA Family & Community
  {
    headline: (city) => `Hibachi at Home in ${city}: The Backyard Party the GTA Was Made For`,
    opening:  (city, state) =>
      `${city} knows how to celebrate. The backyard graduation parties in June where three generations are in the same postal code for the first time in a year. The cultural milestone events that bring forty guests to a single family property and make every square foot of the outdoor space count. The birthday celebrations where anything less than memorable is a missed opportunity. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that turns any backyard gathering into the evening your guests plan around the next time.`,
    middle:   (city, state) =>
      `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for graduation parties, family reunions, and large community celebrations are our most common format across the GTA.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out during peak season. Graduation season (May–June) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day. Serving ${city} and all of the Greater Toronto Area.`,
  },
  // 192 — Cottage Country & Resort
  {
    headline: (city) => `Hibachi at Home in ${city}: The Cottage Weekend Dinner Everyone Remembers`,
    opening:  (city, state) =>
      `You have the cottage. You have the group. You've been planning this weekend since the last long weekend ended. And the best dinner of the trip is the one that happens at the property — no drive into town, no marina restaurant waitlist, no group logistics on a Friday evening in ${city}. Mobile hibachi at your ${city} cottage or resort property brings a certified teppanyaki chef directly to your deck or yard with the full grill, all ingredients, a live-fire performance built around your guests, and complete cleanup when dinner is done.`,
    middle:   (city, state) =>
      `Your chef travels to your ${city} property fully equipped: teppan grill, propane, hand-selected proteins, rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The show runs from first flame to last plate — no cottage country restaurant logistics, no dock parking issues, no waiting for a table that was never big enough anyway.`,
    closing:  (city, state) =>
      `${city} cottage events book 4–6 weeks ahead for peak Victoria Day, Canada Day, and August weekends. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Travel fees may apply for remote properties — always confirmed upfront.`,
  },
  // 193 — Niagara Tourism
  {
    headline: (city) => `Mobile Hibachi in ${city}: The Vacation Dinner Your Group Deserves`,
    opening:  (city, state) =>
      `People come to the Niagara region for the falls, the wine, the weekends that feel genuinely removed from the usual routine. Private hibachi at your ${city} vacation rental or inn property gives the best evening of the trip its proper frame — a certified teppanyaki chef drives to your property with the full setup, cooks on your patio or deck in front of everyone, and leaves the space spotless. No tourist strip reservation. No driving. No wait.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, sauces, plates, and chopsticks. The live cooking performance runs 90–120 minutes — fire tricks, precision knife work, and every plate cooked to order in front of your guests. Full cleanup when dinner is done. Your vacation property is immaculate when the chef leaves.`,
    closing:  (city, state) =>
      `Niagara events book 4–6 weeks ahead during peak season. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes returned same day. Travel fees may apply for remote locations — always disclosed upfront.`,
  },
  // 194 — University & Corporate
  {
    headline: (city) => `Hibachi at Home in ${city}: The University City Celebration Standard`,
    opening:  (city, state) =>
      `${city} has two seasons — convocation season and corporate event season — and both of them call for something better than a restaurant reservation. The families who drove from across Ontario and back again to watch their son or daughter cross the stage, the corporate teams who need a team dinner that actually holds attention for two full hours, the retirement celebrations that mark three decades of work with something genuinely worth the occasion. Private hibachi at home in ${city} brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance that makes any ${city} celebration the one your guests plan around.`,
    middle:   (city, state) =>
      `From first flame to final plate, your chef cooks for 90–120 minutes straight — fire tricks, flying shrimp, and every dish cooked to order at the teppan. For groups over 25, we bring two chef stations running in parallel. Dual-station setups for university graduation parties, corporate team events, and large community celebrations are our most common format across Ontario.`,
    closing:  (city, state) =>
      `${city} weekend events book 2–3 weeks out during peak season. Graduation season (May–June) fills fastest — reserve 3–4 weeks ahead for Saturday events. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Serving ${city} and the surrounding region.`,
  },
  // 195 — Luxury Cottage
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Estate Cottage Dining in Ontario`,
    opening:  (city, state) =>
      `The ${city} property isn't just a cottage — it's the destination. The lakefront deck where the evening is expected to match the setting. The estate grounds where a private chef dinner is not an extravagance but a standard. The retreat property where the weekend is planned around the quality of every experience it contains. Private hibachi at your ${city} estate brings a certified teppanyaki chef to your outdoor space with premium hand-selected proteins, the full setup, and a live-fire dining performance built to the standard that a ${city} property demands.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins — including filet mignon (+$8 CAD), lobster tail (+$15 CAD), and scallops — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or estate grounds. The performance runs 90–120 minutes from first flame to final plate. Every plate cooked to order, every guest at the same outdoor table, the entire show designed around your property and your group.`,
    closing:  (city, state) =>
      `${city} estate events book 6–10 weeks ahead for peak cottage season. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Premium protein packages available. Travel fees may apply for remote properties — always confirmed upfront. Most quotes returned same day.`,
  },
]

// ── City-specific intros (ON 196–217) ─────────────────────────────────────────
// Batch 1: indices 0–4 (profileIdx 0–4: Toronto, Mississauga, Richmond Hill, Markham, Vaughan)
export const ON_CITY_INTROS = [
  // 196 — Toronto (profileIdx 0)
  {
    headline: () => `Hibachi at Home in Toronto`,
    opening:  () =>
      `Toronto is Canada's city — the CN Tower skyline, the Distillery District lofts where birthday weekends start on Thursday, the King West condos where bachelorette groups fly in from Calgary and Vancouver specifically for the weekend in the city, the Leslieville backyards where the milestone anniversary was months in the making. It is Canada's most competitive entertainment market and the standard it sets is felt in every city between Windsor and Ottawa. Private hibachi at home in Toronto brings a certified teppanyaki chef to your outdoor space — condo terrace, Annex backyard, Beaches patio, or Etobicoke estate — with the full setup and a live-fire cooking performance that earns its place at a Toronto evening.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Premium proteins including filet mignon (+$8 CAD), lobster tail (+$15 CAD), and scallops are available for any Toronto occasion that calls for it. For groups over 25, we deploy dual chef stations. Full cleanup when dinner is done. Your property is spotless when the chef leaves.`,
    closing:  () =>
      `Toronto spring and summer events book 3–5 weeks out. Bachelorette weekends, milestone birthdays, and corporate client dinners fill fastest — reserve 4–6 weeks ahead for any May through September Friday or Saturday. Serving Toronto and all of the GTA — Mississauga, Markham, Richmond Hill, Vaughan, Brampton, Scarborough, Etobicoke, North York, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Premium protein packages available. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 197 — Mississauga (profileIdx 1)
  {
    headline: () => `Hibachi at Home in Mississauga`,
    opening:  () =>
      `Mississauga is where the GTA's celebration culture runs deepest. Three generations gather in Erin Mills backyards for June graduation weekends that are planned like weddings. Port Credit waterfront properties host anniversary dinners for fifty guests with a standard that restaurants in Toronto rarely match. The South Asian, East Asian, Middle Eastern, and Caribbean communities that make Mississauga Canada's most culturally diverse city bring a milestone event culture that is genuinely unmatched anywhere in Ontario — the guest lists are large, the occasions are meaningful, and the expectations are high. Private hibachi at home in Mississauga brings a certified teppanyaki chef to your property with the full setup and a live-fire performance built for exactly the scale and energy of a Mississauga celebration.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Mississauga graduation events and family reunions over 25 guests, we bring two chef stations running in parallel. Full cleanup when dinner is done.`,
    closing:  () =>
      `Mississauga graduation season (May–June) is our busiest GTA window — book 3–4 weeks out for Saturday events. Summer and fall weekends book 2–3 weeks ahead. Serving Mississauga and all of the GTA — Toronto, Brampton, Oakville, Milton, Etobicoke, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 198 — Richmond Hill (profileIdx 2)
  {
    headline: () => `Hibachi at Home in Richmond Hill`,
    opening:  () =>
      `Richmond Hill has quietly established itself as one of the most affluent and culturally distinguished addresses in all of Ontario — the Oak Ridges Moraine estates where the homes were built to entertain, the Bayview Hill and North Richvale neighbourhoods where a milestone birthday is held to a standard that few restaurants in the GTA can approach, the Yonge Street corridor where the Chinese-Canadian, Iranian-Canadian, and Korean-Canadian communities have built a tradition of milestone celebration that is thorough, attentive, and centred on the family gathering. Private hibachi at home in Richmond Hill brings a certified teppanyaki chef to your property with the full setup and a live-fire performance that meets the standard Richmond Hill hosts set for every occasion they choose to mark.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Premium protein upgrades available for any Richmond Hill milestone. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Richmond Hill weekend evenings book 2–4 weeks ahead. Graduation season (May–June) and fall events fill fastest — reserve 3–5 weeks out for Saturday events. Serving Richmond Hill and all of York Region — Markham, Vaughan, Newmarket, Aurora, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 199 — Markham (profileIdx 3)
  {
    headline: () => `Mobile Hibachi in Markham`,
    opening:  () =>
      `Markham is Canada's technology capital — the IBM Canada headquarters, the Huawei R&D campus, the AMD facility in Unionville, the constellation of tech firms along the Highway 407 corridor that chose Markham over downtown Toronto and never looked back. It is also home to the largest concentration of Chinese-Canadian families in the country, bringing a milestone event culture that understands exactly what a memorable occasion should look and feel like. Mobile hibachi in Markham brings a certified teppanyaki chef directly to your outdoor space — Unionville heritage backyard, Cornell neighbourhood patio, Greensborough estate, or corporate venue — with the full setup and a live-fire performance designed for the Markham standard.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Markham events, dual-station capacity handles groups of 25–60+. Full cleanup when dinner is done. Your property is spotless when the chef departs.`,
    closing:  () =>
      `Markham corporate and family events book 2–3 weeks ahead. Graduation season and summer Saturdays fill fastest — reserve 3–4 weeks out. Serving Markham and all of York Region — Richmond Hill, Vaughan, Toronto, Ajax, Pickering, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 200 — Vaughan (profileIdx 4)
  {
    headline: () => `Hibachi Catering in Vaughan`,
    opening:  () =>
      `Vaughan is where the GTA's Italian-Canadian community put down its deepest roots — the Woodbridge estates where the backyard is the showpiece of the house, the Villa Royale and Vellore neighbourhood properties where a family gathering is an occasion taken seriously from the first phone call to the last plate. It is also home to one of the GTA's most established Jewish communities in Thornhill, and the Highway 400 corridor businesses that need a corporate dinner that actually holds attention for two hours. Hibachi catering in Vaughan brings a certified teppanyaki chef to your outdoor space with the full setup, dual-station capacity for large gatherings, and a live-fire performance that earns its place at a Vaughan occasion.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Vaughan events over 25 guests, we deploy dual chef stations running in parallel. Full cleanup when dinner is done.`,
    closing:  () =>
      `Vaughan weekend evenings book 2–3 weeks ahead. Large milestone events and holiday gatherings fill fastest — reserve 3–5 weeks out for Saturday events. Serving Vaughan and all of York Region — Toronto, Richmond Hill, Newmarket, Brampton, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 201 — Brampton (profileIdx 5)
  {
    headline: () => `Hibachi at Home in Brampton`,
    opening:  () =>
      `Brampton is one of Canada's most culturally vibrant cities — the South Asian community that fills the Springdale and Sandalwood neighbourhoods, the Caribbean-Canadian families of Malton and Bramalea, the Punjabi graduation season in June that brings forty guests to a single backyard for an occasion that is every bit as significant as the wedding it precedes. Private hibachi at home in Brampton brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance built for exactly the scale, energy, and cultural weight that a Brampton celebration demands.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Brampton graduation events, Diwali celebrations, and family reunions over 25 guests, we bring two chef stations running in parallel. Full cleanup when dinner is done.`,
    closing:  () =>
      `Brampton graduation season (May–June) and cultural celebration weekends book fast — reserve 3–4 weeks ahead for any Saturday event. Serving Brampton and all of the GTA — Toronto, Mississauga, Vaughan, Etobicoke, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 202 — Oakville (profileIdx 6)
  {
    headline: () => `Private Hibachi Chef in Oakville`,
    opening:  () =>
      `Oakville is one of Canada's wealthiest communities — the Lakeshore Road waterfront estates where the backyard was a significant part of the purchase decision, the Glen Abbey corridor where the outdoor space was designed for exactly the kind of private dining event that most restaurants can't approach, the Old Oakville heritage properties where a milestone anniversary deserves something genuinely distinguished. Private hibachi in Oakville brings a certified teppanyaki chef to your property with premium hand-selected proteins, the full setup, and a live-fire performance that earns its place at an Oakville occasion.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Premium upgrades including filet mignon (+$8 CAD), lobster tail (+$15 CAD), and scallops are available for any Oakville milestone that calls for it. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Oakville spring and summer events book 2–4 weeks ahead. Milestone anniversary events and corporate client dinners fill fastest — reserve 3–5 weeks out for Saturday events. Serving Oakville and all of Halton Region — Burlington, Mississauga, Milton, Brampton, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 203 — Burlington (profileIdx 7)
  {
    headline: () => `Hibachi at Home in Burlington`,
    opening:  () =>
      `Burlington sits at the western anchor of the Greater Toronto Area — the Aldershot and Shoreacres waterfront properties that face Lake Ontario, the Orchard and Millcroft neighbourhoods where the homes were built with the outdoor space as the feature, the Roseland and Tyandaga communities where the milestone birthday dinner or the family anniversary has always been held to a higher standard than a restaurant reservation can meet. Private hibachi at home in Burlington brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire cooking performance that meets the standard Burlington hosts set for every occasion.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Premium protein upgrades available for any Burlington milestone occasion. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Burlington summer and graduation season events book 2–3 weeks ahead. Large family events and corporate dinners fill fastest — reserve 3–4 weeks out for Saturday events. Serving Burlington and Halton Region — Oakville, Hamilton, Mississauga, Milton, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 204 — Milton (profileIdx 8)
  {
    headline: () => `Hibachi at Home in Milton`,
    opening:  () =>
      `Milton is Canada's fastest-growing municipality — the Hawthorne Village and Mattamy Meadows neighbourhoods where the backyard was the reason for the move from Brampton, the Willmott and Scott communities where a June graduation party brings the entire extended family out from Mississauga and Toronto for the afternoon, the young-family culture that has made Milton one of the GTA's most celebration-driven communities. Private hibachi at home in Milton brings a certified teppanyaki chef to your property with the full setup and a live-fire cooking performance built for exactly the backyard energy that a Milton celebration demands.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Milton graduation parties and family reunions over 25 guests, we bring two chef stations running in parallel. Full cleanup when dinner is done.`,
    closing:  () =>
      `Milton graduation season (May–June) and summer Saturdays fill fast across Halton Region — book 2–4 weeks out for any Saturday event. Serving Milton and all of Halton Region — Oakville, Brampton, Burlington, Mississauga, Georgetown, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 205 — Ajax (profileIdx 9)
  {
    headline: () => `Mobile Hibachi in Ajax`,
    opening:  () =>
      `Ajax anchors Durham Region — the Westney Heights and Nottingham neighbourhoods where the backyard is the main event space from May to September, the Riverside and Duffin's Creek communities where the June graduation party brings three generations of family across Highway 401, the established and newer developments that together make Ajax one of the GTA's most underrated celebration cities. Mobile hibachi in Ajax brings a certified teppanyaki chef directly to your outdoor space with the full setup and a live-fire cooking performance that turns any Ajax backyard gathering into the evening your guests are still referencing at the next family occasion.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Ajax graduation parties and family reunions over 25 guests, we bring two chef stations running in parallel. Full cleanup when dinner is done.`,
    closing:  () =>
      `Ajax and Durham Region events book 2–3 weeks ahead. Graduation season Saturdays fill fastest — reserve 3–4 weeks out. Serving Ajax and all of Durham Region — Pickering, Whitby, Oshawa, Toronto, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 206 — Newmarket (profileIdx 10)
  {
    headline: () => `Backyard Hibachi Party in Newmarket`,
    opening:  () =>
      `Newmarket sits at the northern edge of York Region — the Stonehaven and Summerhill Estates properties where the backyard was built for entertaining, the Leslie Valley and Glenway communities where the milestone birthday party or the graduation celebration has always been held at the home rather than the restaurant, the Aurora-Newmarket corridor that runs from the 404 to the 400 and holds some of the most celebration-driven families in all of York Region. Private hibachi at your Newmarket property brings a certified teppanyaki chef with the full setup and a live-fire performance built for the backyard standard that Newmarket hosts expect.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. Premium protein upgrades available for any Newmarket milestone. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Newmarket and York Region events book 2–3 weeks ahead. Graduation season (May–June) and summer Saturdays fill fastest — reserve 3–4 weeks out. Serving Newmarket and all of York Region — Aurora, Richmond Hill, Barrie, Vaughan, Bradford, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 207 — Muskoka (profileIdx 11)
  {
    headline: () => `Private Hibachi Chef in Muskoka`,
    opening:  () =>
      `Muskoka is Ontario's most iconic cottage country — Lake Muskoka, Lake Rosseau, and Lake Joseph, the three lakes that hold the most storied lakefront estates in the province. The Bracebridge and Gravenhurst properties where the family has been coming since the 1970s. The Port Carling and Bala estates where the Bay Street weekends unfold at a speed and standard that the city never quite matches. The Huntsville properties that mark the northern edge of a corridor that has held Ontario's most celebratory summer culture for generations. Private hibachi at your Muskoka cottage brings a certified teppanyaki chef with premium hand-selected proteins, the full setup, and a live-fire performance built to the standard that a Muskoka lakefront estate demands.`,
    middle:   () =>
      `Your chef travels to your Muskoka property with everything: teppan grill, propane, hand-selected proteins — including filet mignon (+$8 CAD), lobster tail (+$15 CAD), and scallops — fried rice, vegetables, sauces, plates, and chopsticks. Setup takes 20 minutes on your deck or dock-adjacent patio. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, every plate cooked to order. Full pack-out when dinner is done. Your lakefront estate is immaculate when the chef departs.`,
    closing:  () =>
      `Muskoka peak season (Victoria Day through Thanksgiving) books 6–10 weeks ahead — the Victoria Day and Canada Day weekends are the first to fill. Travel fees may apply for remote Muskoka properties — always confirmed upfront. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Premium protein packages available. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 208 — Barrie (profileIdx 12)
  {
    headline: () => `Hibachi at Home in Barrie`,
    opening:  () =>
      `Barrie sits on the southern shore of Kempenfelt Bay and serves as the gateway to Ontario's most celebrated cottage country. It is home to a growing permanent community — the Allandale, Painswick, and Holly neighbourhoods where the backyard culture is real and the milestone birthday or graduation party is held to a standard that a restaurant reservation can't reach — and it is also the last major city before Muskoka, Georgian Bay, and the Collingwood ski corridor. Private hibachi at home in Barrie brings a certified teppanyaki chef to your property or cottage with the full setup and a live-fire cooking performance that works just as well at a Bayfield Street property as it does at a lakeside deck an hour north.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For groups over 25, we bring two chef stations. Full setup and complete cleanup — your property is spotless when the chef departs.`,
    closing:  () =>
      `Barrie and Georgian Bay cottage events book 3–5 weeks ahead during peak season. Victoria Day, Canada Day, and August weekends fill fastest. Serving Barrie, Collingwood, Wasaga Beach, Orillia, Midland, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Travel fees may apply for remote properties. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 209 — Collingwood (profileIdx 13)
  {
    headline: () => `Mobile Hibachi in Collingwood`,
    opening:  () =>
      `Collingwood is Ontario's four-season retreat destination — Blue Mountain in winter, Georgian Bay in summer, and an event calendar that runs from bachelorette weekends in June through corporate leadership retreats in October. The ski chalet weekends where a Friday night dinner at the mountain needs to be an event in itself. The summer vacation rental groups where the Blue Mountain Resort crowd wants something better than another restaurant in the Village. The Thornbury vineyard properties and the Georgian Bay waterfront cottages where the weekend is planned around the quality of every hour it contains. Mobile hibachi in Collingwood brings a certified teppanyaki chef to your chalet, rental, or cottage property with the full setup and a live-fire performance that earns its place at a Blue Mountain weekend.`,
    middle:   () =>
      `Your chef travels to your Collingwood property with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your deck, patio, or yard. The show runs from first flame to last plate — 90–120 minutes of live teppanyaki at your property. Full pack-out when dinner is done.`,
    closing:  () =>
      `Collingwood peak season events book 3–5 weeks ahead. Blue Mountain ski weekends (December–March) and Georgian Bay summer weekends (June–August) fill fastest. Travel fees may apply for remote properties — always confirmed upfront. Serving Collingwood, Wasaga Beach, Thornbury, Meaford, Owen Sound, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD.`,
  },
  // 210 — Niagara Falls (profileIdx 14)
  {
    headline: () => `Mobile Hibachi in Niagara Falls`,
    opening:  () =>
      `Niagara Falls draws more visitors than any destination in Ontario — the falls themselves, the casino, the Clifton Hill corridor, the Fallsview hotel district, and the surrounding vacation rental properties that book up every weekend from May through October. The bachelorette weekends that fly in from Toronto and Montreal and want a Friday dinner that doesn't involve fighting for a table at a Fallsview restaurant. The bachelor groups at a rented house near the American falls who want the chef to come to them. The extended family vacation groups where forty-eight hours in Niagara needs to include at least one genuinely memorable meal. Mobile hibachi in Niagara Falls brings a certified teppanyaki chef directly to your rental property with the full setup and a live-fire performance that becomes the dinner everyone references for the rest of the trip.`,
    middle:   () =>
      `Your chef travels to your Niagara Falls vacation property with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your patio, deck, or yard. The show runs 90–120 minutes from first flame to final plate. Full pack-out when dinner is done — your vacation property is spotless when the chef leaves.`,
    closing:  () =>
      `Niagara Falls summer peak season (May–September) fills 4–6 weeks ahead for Friday and Saturday events. Canada Day weekend fills earliest. Serving Niagara Falls, Niagara-on-the-Lake, St. Catharines, Welland, Fort Erie, and surrounding Niagara region communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes returned same day.`,
  },
  // 211 — Niagara-on-the-Lake (profileIdx 15)
  {
    headline: () => `Private Hibachi Chef in Niagara-on-the-Lake`,
    opening:  () =>
      `Niagara-on-the-Lake is Ontario's most distinguished wine country destination — the Victorian inns along Queen Street, the vineyard estates that run from Peller Estates to Inniskillin to Ravine Vineyard, the heritage properties and Shaw Festival theatre weekends that attract guests specifically because the experience here is elevated above anything available in the city. The anniversary retreat couples who book a five-night stay at a Niagara-on-the-Lake inn and want the Thursday dinner to match the setting. The family reunion groups at a rented winery estate property who want a private chef dinner that justifies the occasion. Private hibachi at your Niagara-on-the-Lake property brings a certified teppanyaki chef with premium proteins, the full setup, and a live-fire performance that holds its place alongside the wine country experience your guests came for.`,
    middle:   () =>
      `Your chef travels to your Niagara-on-the-Lake property with everything: teppan grill, propane, hand-selected proteins — including filet mignon (+$8 CAD), lobster tail (+$15 CAD), and scallops — fried rice, vegetables, house-made sauces, plates, and chopsticks. Setup takes 20 minutes on your inn patio, winery estate grounds, or vacation property deck. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Niagara-on-the-Lake peak season (May through October) fills 4–8 weeks ahead. Shaw Festival weekends, wine harvest season (September–October), and Canada Day weekend fill first. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Premium protein packages available. Event minimum $780 CAD. Serving Niagara-on-the-Lake, Niagara Falls, St. Catharines, and the full Niagara region.`,
  },
  // 212 — Ottawa (profileIdx 16)
  {
    headline: () => `Private Hibachi Chef in Ottawa`,
    opening:  () =>
      `Ottawa runs on two calendars — the government calendar that empties the Byward Market in August and fills it again in September, and the university calendar that sends the Glebe and Sandy Hill streets into full celebration mode every May and June when the University of Ottawa and Carleton University convocation season arrives. The federal public service retirement parties in the Westboro and Westgate neighbourhoods where thirty years of work deserves something better than a restaurant that can't seat the whole team. The Kanata tech corridor corporate events where Shopify, Nokia, and the constellation of federal contractors need a team dinner that actually earns two hours of focus. Private hibachi in Ottawa brings a certified teppanyaki chef to your property — deck, Glebe backyard, Kanata patio, or Barrhaven outdoor space — with the full setup and a live-fire cooking performance that meets the Ottawa standard.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Ottawa graduation and corporate events over 25 guests, we bring two chef stations running in parallel. Full cleanup when dinner is done.`,
    closing:  () =>
      `Ottawa graduation season (May–June) and corporate event season book 2–3 weeks ahead. Holiday party season (November–December) fills fastest — reserve 4–5 weeks out. Serving Ottawa, Kanata, Barrhaven, Nepean, Gloucester, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 213 — Waterloo (profileIdx 17)
  {
    headline: () => `Hibachi Catering in Waterloo`,
    opening:  () =>
      `Waterloo is Canada's technology capital — the University of Waterloo, Wilfrid Laurier, Google's Canadian engineering hub, OpenText, and the startup ecosystem that has built more billion-dollar companies per square kilometre than any city in the country. It is also one of the most celebration-dense university communities in Ontario, where the June convocation season brings thousands of engineering, mathematics, and computer science graduates and their families to the Region for a weekend that calls for something better than a Waterloo Street restaurant that can't hold twenty people. Hibachi catering in Waterloo brings a certified teppanyaki chef to your backyard or outdoor venue with the full setup and a live-fire performance built for the Waterloo standard — precise, impressive, and entirely focused on the group in front of the grill.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order. For large Waterloo graduation events and tech company team dinners over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Waterloo graduation season (May–June) fills fastest — book 3–4 weeks out for Saturday events. Corporate team dinners book 2–3 weeks ahead year-round. Serving Waterloo, Kitchener, Cambridge, Guelph, and surrounding Waterloo Region communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 214 — Kitchener (profileIdx 18)
  {
    headline: () => `Hibachi Catering in Kitchener`,
    opening:  () =>
      `Kitchener is the working twin of Waterloo — the Oktoberfest capital of Canada, the city where German-Canadian heritage runs through the market district and the Rockway neighbourhood, where the multicultural community that has built itself across Chicopee and Stanley Park brings a milestone celebration culture that knows exactly what it wants and holds it to a real standard. The graduation parties that follow convocation at Waterloo and Conestoga, the large family events in the Victoria Hills and Heritage Park neighbourhoods, the corporate dinners for the manufacturing and technology companies that have made Kitchener one of Ontario's strongest economic corridors. Hibachi catering in Kitchener brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire performance built for a Kitchener occasion.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Kitchener graduation parties and family events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Kitchener and Waterloo Region events book 2–3 weeks ahead. Graduation season (May–June) and holiday season fill fastest. Serving Kitchener, Waterloo, Cambridge, Guelph, Brantford, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 215 — London (profileIdx 19)
  {
    headline: () => `Hibachi at Home in London, Ontario`,
    opening:  () =>
      `London is the Forest City — Western University's convocation filling the Old North and Masonville neighbourhoods every June with families from Windsor, Sarnia, and Southwestern Ontario who drove in specifically for the occasion, Fanshawe College graduation parties in the Argyle and White Oaks communities, the London Health Sciences Centre physicians and hospital leadership who book their best team dinners for outdoor venues in Byron or the Westmount corridor. It is also a city that has always celebrated at home — the Richmond Row restaurant district notwithstanding, London's backyard culture is genuine, and the graduation party in the Byron or Wortley Village backyard is the event that matters most. Private hibachi at home in London brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire cooking performance that makes any London occasion the one your guests talk about.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large London graduation events and family reunions over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `London graduation season (May–June) fills 2–3 weeks out — reserve earlier for Saturday events. Corporate and family events book 1–2 weeks out for weekdays, 2–3 weeks for weekends. Serving London, Kitchener, Waterloo, Woodstock, Sarnia, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 216 — Kingston (profileIdx 20)
  {
    headline: () => `Backyard Hibachi Party in Kingston`,
    opening:  () =>
      `Kingston is Ontario's limestone city — the Queen's University homecoming weekends in October that fill the Sydenham and University District neighbourhoods, the May convocation ceremony that brings families from across Ontario and Quebec to a city where the celebration has always happened at the house rather than the restaurant, the Royal Military College graduation dinners that mark the end of years of service with an occasion that deserves something genuinely distinguished. Private hibachi in Kingston brings a certified teppanyaki chef to your backyard or outdoor space with the full setup and a live-fire cooking performance that matches the occasion Kingston families hold their milestones to.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For larger Kingston graduation and family events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Kingston Queen's convocation weekend (May) and homecoming (October) book 3–4 weeks ahead. Summer events book 2–3 weeks out. Serving Kingston, Gananoque, Belleville, Napanee, Brockville, and surrounding Eastern Ontario communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
  // 217 — Hamilton (profileIdx 21)
  {
    headline: () => `Hibachi at Home in Hamilton`,
    opening:  () =>
      `Hamilton has reinvented itself — the steel city that spent decades in the shadow of Toronto has emerged as one of the most culturally distinct and celebration-driven communities in the Golden Horseshoe. The James Street North arts district. The Locke Street restaurants that can't seat a group of twenty. The Westdale neighbourhood beside McMaster University where the convocation season brings families from across Southern Ontario for a June celebration that the backyard handles better than any local restaurant. The east end and Stoney Creek communities where the large multicultural family reunion has always been the occasion that the home was bought for. Private hibachi at home in Hamilton brings a certified teppanyaki chef to your outdoor space with the full setup and a live-fire cooking performance that brings the Hamilton backyard to the standard of any celebration in the province.`,
    middle:   () =>
      `Your chef arrives with everything: teppan grill, propane, all fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For large Hamilton graduation parties and family events over 25 guests, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  () =>
      `Hamilton graduation season (May–June) and summer Saturdays book 2–3 weeks ahead. Large family events and holiday gatherings fill fastest. Serving Hamilton, Burlington, Oakville, Niagara Falls, Brantford, and surrounding communities. Starting at $78/adult CAD, $40/child (ages 4–12), under 3 free. Event minimum $780 CAD. Most quotes confirmed same day.`,
  },
]

// ── Main builder ──────────────────────────────────────────────────────────────
export function getOntarioCityData(citySlug, cityName) {
  const major       = ON_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getONVariantIndex(citySlug)
  const theme       = ON_IMAGE_THEMES[v]
  const displayName = ON_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Ontario',
    stateAbbr:    'ON',
    stateSlug:    'ontario',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: ON_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['Toronto', 'Mississauga', 'Ottawa', 'Hamilton', 'Niagara Falls'].filter(
      (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') !== citySlug
    ),
    localHighlights:   ON_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: ON_OCCASIONS[v],
    faqSet:            ON_FAQ_SETS[v](displayName),
    testimonials:      ON_TESTIMONIALS[v],
    // INTRO_VARIANTS:   189–195 = ON generic, 196–217 = ON city-specific
    uniqueIntroVariant:   (major?.profileIdx != null) ? 196 + major.profileIdx : 189 + v,
    uniqueWhyUsVariant:   v,
    // CLOSING_VARIANTS: 189–195 = ON generic, 196–217 = ON city-specific
    uniqueClosingVariant: (major?.profileIdx != null) ? 196 + major.profileIdx : 189 + v,
    heroH1Prefix: major?.profileIdx != null
      ? ON_PROFILE_H1_PREFIXES[major.profileIdx]
      : ON_THEME_H1_PREFIXES[v],
    ...(ON_CUSTOM_META[citySlug]
      ? { metaTitle: ON_CUSTOM_META[citySlug].title, metaDescription: ON_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getOnHowItWorks(citySlug) {
  const major = ON_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getONVariantIndex(citySlug)
  return ON_HOW_IT_WORKS[v]
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getOnSectionVariant(citySlug) {
  const major = ON_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getONVariantIndex(citySlug)
  return ON_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getOnCityImage(citySlug) {
  return ON_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getOnSupportImages(citySlug) {
  if (ON_SUPPORT_IMAGES[citySlug]) return ON_SUPPORT_IMAGES[citySlug]
  const major = ON_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getONVariantIndex(citySlug)
  return ON_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
const ON_POST_META = {
  'hibachi-bachelorette-party':          { tag: 'Occasions',   readTime: '5 min read', excerpt: 'Why a private hibachi chef is the best pre-party activity for any bachelorette weekend — entertainment, custom drinks pairing, and zero logistics.' },
  'hibachi-at-home-vs-restaurant':       { tag: 'Comparison',  readTime: '6 min read', excerpt: 'We break down the real cost, experience quality, and convenience differences between booking a private chef and going to a hibachi restaurant.' },
  'what-to-expect-hibachi-chef-home':    { tag: 'Guide',       readTime: '6 min read', excerpt: 'A first-timer\'s guide: what happens from booking to cleanup, what the chef brings, what you need to provide, and what guests can look forward to.' },
  'hibachi-menu-proteins-guide':         { tag: 'Menu',        readTime: '4 min read', excerpt: 'Everything you can order at a private hibachi event — standard proteins, premium upgrades, appetizers, sauces, and how to build the perfect menu.' },
  'how-much-does-private-hibachi-cost':  { tag: 'Pricing',     readTime: '5 min read', excerpt: 'A complete breakdown of hibachi at home pricing — per-person rates, event minimums, add-ons, and what actually affects your final quote.' },
  'why-families-choose-hibachi-at-home': { tag: 'Lifestyle',   readTime: '5 min read', excerpt: 'More families are trading restaurant reservations for backyard hibachi nights — here\'s why private hibachi has become the go-to choice for family celebrations.' },
  'hibachi-birthday-party-ideas':        { tag: 'Occasions',   readTime: '5 min read', excerpt: 'From themed menus to chef performances, here\'s how to make a backyard hibachi birthday party truly unforgettable for any age group.' },
  'how-to-plan-a-backyard-hibachi-party':{ tag: 'Planning',    readTime: '7 min read', excerpt: 'Everything you need to prepare before your private hibachi chef arrives — space setup, guest seating, timing, and the questions to ask your chef.' },
  'indoor-vs-outdoor-hibachi':           { tag: 'Guide',       readTime: '4 min read', excerpt: 'Not sure whether to set up inside or outside? Here\'s how to decide — and what your chef needs to make either setup work perfectly.' },
  'hibachi-catering-corporate-events':   { tag: 'Corporate',   readTime: '4 min read', excerpt: 'Team dinners, client entertainment, and office parties all benefit from the live-cooking energy of a private hibachi chef. Here\'s why.' },
  'hibachi-at-home-ontario-guide':       { tag: 'Guide',       readTime: '7 min read', excerpt: 'Everything Ontario residents need to know about booking a private hibachi chef — from GTA suburbs to cottage country, here\'s how it works.' },
  'cottage-country-hibachi-ontario':     { tag: 'Lifestyle',   readTime: '6 min read', excerpt: 'Bring a certified hibachi chef to your Muskoka cottage, Haliburton chalet, or Georgian Bay property — the ultimate Ontario long-weekend dinner.' },
  'hibachi-graduation-party-ontario':    { tag: 'Occasions',   readTime: '5 min read', excerpt: 'Planning a graduation celebration in Ontario? A private hibachi chef turns any backyard into a live-fire dinner party your grad will never forget.' },
}

export function getOnBlogPosts(variant, count) {
  return ON_BLOG_POSTS[variant % ON_BLOG_POSTS.length].slice(0, count).map(p => ({
    ...p,
    ...(ON_POST_META[p.slug] || { tag: 'Guide', readTime: '5 min read', excerpt: '' }),
  }))
}
