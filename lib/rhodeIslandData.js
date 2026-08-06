// =============================================================================
// lib/rhodeIslandData.js — Rhode Island Expansion
// 14 cities · 6 geographic themes
// Theme 0: Providence Luxury Suburbs (East Greenwich)
// Theme 1: Providence Urban & Corporate (Providence)
// Theme 2: Providence Suburban Family (Cranston, Warwick, Lincoln)
// Theme 3: East Bay Waterfront (Barrington, Bristol)
// Theme 4: Newport & Aquidneck Island (Newport, Middletown, Portsmouth)
// Theme 5: South County Coastal (Narragansett, South Kingstown, North Kingstown, Westerly)
//
// INTRO_VARIANTS indices:  488–493 RI generic · 494–507 RI city-specific
// CLOSING_VARIANTS indices: 488–493 RI generic · 494–507 RI city-specific
// Batch 1 profileIdx 0–4: Providence, Cranston, Warwick, East Greenwich, Lincoln
// =============================================================================

// ── Display name overrides ────────────────────────────────────────────────────
const RI_CITY_DISPLAY_NAMES = {
  'east-greenwich':  'East Greenwich',
  'north-kingstown': 'North Kingstown',
  'south-kingstown': 'South Kingstown',
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const RI_HERO_SUBTITLES = [
  (city) => `Estate Graduation Dinners · Anniversary Celebrations · Executive Dinner Parties · Serving ${city} & Greenwich Cove`,
  (city) => `Corporate Team Dinners · Brown University Graduation Parties · WaterFire-Adjacent Events · Serving Providence & Rhode Island`,
  (city) => `Graduation Parties · Backyard Celebrations · Family Events · Serving ${city} & Greater Providence`,
  (city) => `Waterfront Estate Dinners · Yacht Club Celebrations · Graduation Parties · Serving ${city} & Narragansett Bay`,
  (city) => `Vacation Rental Dinners · Bachelorette Weekends · Mansion Estate Events · Serving ${city} & Aquidneck Island`,
  (city) => `Beach House Dinners · Family Reunion Weekends · Bachelorette Groups · Serving ${city} & Rhode Island's South County Coast`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const RI_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Providence Luxury Suburbs
  (city) => [
    `Estate private dining for ${city}'s most discerning hosts — Greenwich Cove, Main Street corridor, and East Greenwich Yacht Club-adjacent properties`,
    'Perfect for graduation dinners, anniversary estate celebrations, and executive milestone events',
    'East Greenwich Yacht Club, Goddard Memorial State Park, and Greenwich Cove waterfront are our signature local settings',
    'Graduation season (May–June) and summer estate events are our fastest-booking windows — reserve 4–6 weeks ahead',
    'Premium proteins available: filet mignon, lobster tail, Wagyu beef, king shrimp',
    'Full setup and complete cleanup — you provide the outdoor space, we handle everything else',
  ],
  // Theme 1 — Providence Urban & Corporate
  (city) => [
    'Private hibachi for Providence corporate events, Brown and RISD graduation parties, and milestone dinners',
    'Perfect for College Hill estate dinners, Federal Hill-adjacent celebrations, and WaterFire-evening backyard events',
    'Corporate team events scale from 20 to 80+ guests — dual stations for larger Providence gatherings',
    'Brown University and RISD graduation Saturdays in May fill our calendar 4–6 weeks ahead — reserve early',
    `Serving all of Providence — College Hill, Federal Hill, Fox Point, Wayland Square, East Side, and the full city`,
    'Full setup and complete cleanup — nothing for the host to manage',
  ],
  // Theme 2 — Providence Suburban Family
  (city) => [
    `Backyard private dining for ${city}'s graduation parties, family milestones, and neighborhood celebrations`,
    'Perfect for high school graduation dinners, birthday milestones, and backyard family events',
    'Greater Providence suburban backyards from Cranston to Warwick to Lincoln are our home territory',
    `Graduation season (May–June) is our fastest-filling period in Greater Providence — book 4–5 weeks ahead`,
    'Full setup and complete cleanup — you provide the outdoor space, we handle everything else',
    'Dual-station capacity for large graduations and family gatherings of 25–60+ guests',
  ],
  // Theme 3 — East Bay Waterfront
  (city) => [
    `Waterfront estate private dining for ${city}'s most distinguished Narragansett Bay properties`,
    'Perfect for yacht club-adjacent milestone events, Bristol Harbor graduation dinners, and anniversary estate celebrations',
    'Barrington Beach, Nayatt Point, Colt State Park, and Narragansett Bay waterfront estates are our signature East Bay settings',
    'East Bay graduation season and summer waterfront events book 4–6 weeks ahead — reserve when your date is confirmed',
    'Full setup and complete cleanup — completely self-contained propane setup, no gas hookup needed at any waterfront property',
    'Premium proteins available: filet mignon, lobster tail, Wagyu beef for East Bay milestone events',
  ],
  // Theme 4 — Newport Luxury & Destination
  (city) => [
    'Private hibachi for Newport vacation rentals, mansion estate events, bachelorette weekends, and corporate retreats',
    'Perfect for Bellevue Avenue-adjacent vacation rental dinners, Cliff Walk corridor events, and Bowen\'s Wharf-area celebrations',
    'Newport Mansions, Ocean Drive estate properties, and Fort Adams-area venues are our signature Newport settings',
    'Newport summer weekends book 8–10 weeks ahead — contact us the moment your vacation rental is confirmed',
    'Fully self-contained propane setup — no gas hookup needed at any Newport vacation rental, mansion property, or estate',
    'Premium proteins as the default consideration at Newport events: Wagyu beef, filet mignon, lobster tail, scallops',
  ],
  // Theme 5 — South County Coastal
  (city) => [
    'Mobile private hibachi for South County beach houses, vacation rentals, and coastal estate properties',
    'Perfect for Narragansett Town Beach-adjacent rental dinners, Watch Hill estate events, and Point Judith waterfront celebrations',
    'Narragansett beach houses, Scarborough Beach-area rentals, and Westerly-Watch Hill estate properties are our South County settings',
    'South County summer beach house weekends book 4–6 weeks ahead — reserve when your rental is confirmed',
    'Fully self-contained propane setup — no gas hookup needed at any South County beach house or vacation rental',
    'The dinner that becomes the anchor memory of the South County weekend',
  ],
]

// ── Occasion Sets ─────────────────────────────────────────────────────────────
const RI_OCCASIONS = [
  // Theme 0 — Providence Luxury Suburbs
  ['Estate Graduation Dinners', 'Anniversary Celebrations', 'Executive Dinner Parties', 'Birthday Milestone Events', 'Corporate Executive Dinners', 'Retirement Celebrations', 'Engagement Parties', 'Rehearsal Dinners', 'Holiday Estate Gatherings', 'Milestone Private Events'],
  // Theme 1 — Providence Urban & Corporate
  ['Corporate Team Dinners', 'Brown University Graduation Parties', 'RISD Graduation Celebrations', 'Birthday Parties', 'Anniversary Dinners', 'Client Appreciation Events', 'Holiday Corporate Events', 'Executive Dinner Parties', 'WaterFire-Evening Celebrations', 'Engagement Parties'],
  // Theme 2 — Providence Suburban Family
  ['Graduation Parties', 'Birthday Celebrations', 'Backyard Anniversary Dinners', 'Family Reunions', 'Neighborhood Gatherings', 'Corporate Team Events', 'Holiday Dinners', 'Retirement Parties', 'Milestone Celebrations', 'Bachelorette Parties'],
  // Theme 3 — East Bay Waterfront
  ['Waterfront Estate Dinners', 'Yacht Club-Adjacent Celebrations', 'Graduation Parties', 'Anniversary Dinners', 'Birthday Milestone Events', 'Family Reunions', 'Rehearsal Dinners', 'Corporate Team Events', 'Engagement Parties', 'Holiday Gatherings'],
  // Theme 4 — Newport Luxury & Destination
  ['Bachelorette Weekend Dinners', 'Bachelor Party Celebrations', 'Vacation Rental Group Dinners', 'Mansion Estate Events', 'Corporate Retreat Dinners', 'Anniversary Getaways', 'Birthday Parties', 'Destination Wedding Weekends', 'Girls Weekend Celebrations', 'Engagement Parties'],
  // Theme 5 — South County Coastal
  ['Beach House Group Dinners', 'Bachelorette Weekends', 'Family Reunion Weekends', 'Vacation Rental Dinners', 'Anniversary Getaways', 'Birthday Parties', 'Graduation Trips', 'Girls Weekends', 'Corporate Retreat Dinners', 'Holiday Gatherings'],
]

// ── FAQ Sets ──────────────────────────────────────────────────────────────────
const RI_FAQ_SETS = [
  // Theme 0 — Providence Luxury Suburbs (East Greenwich)
  (city) => [
    {
      q: `Can you set up at a waterfront estate or luxury property in ${city}?`,
      a: `Absolutely — Greenwich Cove waterfront estates, East Greenwich Yacht Club-adjacent properties, Goddard Memorial State Park-area homes, and the historic Main Street corridor residential properties are among our most requested settings. We need a flat outdoor area of at least 10×10 feet with vehicle access for equipment. Our setup is fully self-contained with propane — no outdoor gas hookup required at any ${city} property.`,
    },
    {
      q: `What premium proteins are available for ${city} estate events?`,
      a: `Our standard menu includes chicken, filet mignon-quality steak, shrimp, and salmon. Premium upgrades available for ${city} events include Wagyu beef, filet mignon, lobster tail, and king scallops. East Greenwich hosts frequently request the premium protein package — we recommend discussing upgrades at booking so your chef arrives with everything ready.`,
    },
    {
      q: `How far in advance should we book for ${city} events?`,
      a: `East Greenwich High School graduation Saturdays in May fill our Kent County calendar 4–6 weeks ahead. Summer estate events — anniversary dinners, milestone birthday celebrations, executive entertaining — book 3–5 weeks ahead. Holiday estate events from Thanksgiving through New Year's: 4–6 weeks. Standard ${city} events outside peak season: 2–3 weeks.`,
    },
  ],
  // Theme 1 — Providence Urban & Corporate
  (city) => [
    {
      q: `Can you set up in College Hill, Federal Hill, Fox Point, and other Providence neighborhoods?`,
      a: `Yes — we serve all of Providence. College Hill historic estate properties, Federal Hill courtyard-adjacent backyards, Fox Point homes, the East Side's generous outdoor spaces, Wayland Square-area properties, and every Providence neighborhood with outdoor access are all in our standard service area. We need a flat 10×10 outdoor area. Most Providence residential properties accommodate this easily.`,
    },
    {
      q: `Do you serve Brown University and RISD graduation parties in Providence?`,
      a: `Brown and RISD graduation season in May is one of our busiest booking windows in Providence. We serve College Hill estate dinners for families hosting 25–55 graduation guests, and we bring dual chef stations for groups where everyone needs to eat at the same time. Both Brown Commencement and RISD's graduation ceremony fall in the same May window — reserve 5–7 weeks ahead for those Saturdays.`,
    },
    {
      q: `How far ahead should we book Providence corporate events?`,
      a: `Providence corporate team events outside graduation season book 2–4 weeks ahead. Q4 corporate holiday events (November–December) fill faster — companies who contact us in September keep their preferred date. Brown and RISD graduation weekends: 5–7 weeks ahead. WaterFire-adjacent event weekends in summer also book quickly — 3–4 weeks ahead.`,
    },
  ],
  // Theme 2 — Providence Suburban Family
  (city) => [
    {
      q: `Can you set up in a typical ${city} backyard for a graduation party?`,
      a: `Yes — a flat outdoor area of at least 10×10 feet with vehicle access for equipment is all we need. Most ${city} residential properties accommodate this comfortably. Our setup is fully self-contained with propane — no gas hookup needed. We arrive 30–45 minutes before event time, set up completely, and run the full live teppanyaki performance for your guests.`,
    },
    {
      q: `How many guests can you serve at a ${city} graduation party?`,
      a: `A single chef station serves 8 to 35 guests comfortably, with everyone gathered around the grill for the live performance. For ${city} graduation parties of 35 to 60+ guests, we bring a dual-station setup so two chefs cook simultaneously and larger groups eat at the same time. Most ${city} graduation parties run 25–50 guests — we handle it all.`,
    },
    {
      q: `When does graduation season book fastest in the Greater Providence area?`,
      a: `Greater Providence graduation season runs mid-May through mid-June, with the peak window in the last two weeks of May. Cranston High School East and West, Pilgrim High School in Warwick, and Lincoln High School graduation ceremonies all fall in the same three-week window. Book 4–5 weeks ahead for any May or June Saturday to secure your date.`,
    },
  ],
  // Theme 3 — East Bay Waterfront
  (city) => [
    {
      q: `Can you set up at a Narragansett Bay waterfront property in ${city}?`,
      a: `Yes — East Bay waterfront estates are among our most requested settings in Rhode Island. Barrington Beach-adjacent properties, Nayatt Point waterfront estates, Colt State Park-area homes in Bristol, and Bristol Harbor-adjacent outdoor spaces all provide excellent setups. We need a flat 10×10 outdoor area on the deck, terrace, or lawn. Our setup is fully self-contained with propane — no gas hookup needed.`,
    },
    {
      q: `Do you serve Roger Williams University and East Bay graduation events?`,
      a: `Roger Williams University commencement in May is one of our key East Bay booking windows. We serve Bristol graduation dinners for families hosting 20–45 guests at waterfront properties, historic Harbor homes, and Colt State Park-area estates. Barrington High School graduation is the other major East Bay booking window — those two events together make May our fastest-booking month in the East Bay market. Reserve 4–6 weeks ahead.`,
    },
    {
      q: `What is the booking window for East Bay waterfront events?`,
      a: `East Bay graduation season and Narragansett Bay summer estate events book 4–6 weeks ahead. Anniversary dinners, milestone birthday celebrations, and waterfront milestone events outside graduation season: 3–4 weeks. Rehearsal dinners at East Bay waterfront properties — Barrington or Bristol harbor settings — book as early as your venue is confirmed.`,
    },
  ],
  // Theme 4 — Newport Luxury & Destination
  (city) => [
    {
      q: `Can you set up at a Newport vacation rental, mansion property, or estate?`,
      a: `Yes — Newport vacation rentals, Bellevue Avenue-adjacent estate properties, Ocean Drive mansion grounds, and Fort Adams-area outdoor venues are our specialty on Aquidneck Island. We need a flat 10×10 outdoor area with vehicle access. Our setup is fully self-contained with propane — no gas hookup required at any Newport vacation rental, historic mansion property, or resort estate. We serve all of Newport, Middletown, and Portsmouth.`,
    },
    {
      q: `Do you serve bachelorette weekends and corporate retreats in Newport?`,
      a: `Bachelorette and bachelor weekends are one of our most consistent Newport booking occasions — vacation rental Saturday-night dinners for 10–25 guests who want a private chef instead of fighting for a Thames Street restaurant reservation. Corporate retreat closing dinners are the other major segment: 20–40 guests at a Newport mansion-adjacent property or Fort Adams-area venue. Premium protein upgrades — Wagyu, filet mignon, lobster tail — are the standard Newport conversation.`,
    },
    {
      q: `How far in advance should we book Newport summer weekends?`,
      a: `Newport summer weekends (Memorial Day through Labor Day) book 8–10 weeks ahead for prime Saturday dates. Contact us the moment your vacation rental reservation is confirmed. Bachelorette weekends in July and August are our most constrained Newport dates — the host who books in May keeps their Saturday. Newport Flower Show weekend, Jazz Festival weekend, and Folk Festival weekend: 10–12 weeks ahead.`,
    },
  ],
  // Theme 5 — South County Coastal
  (city) => [
    {
      q: `Can you set up at a Narragansett beach house or South County vacation rental?`,
      a: `Yes — South County beach houses, Narragansett Town Beach-area rentals, Scarborough Beach-adjacent properties, Point Judith waterfront homes, Watch Hill estate properties, and Misquamicut Beach vacation rentals are all within our standard service area. We need a flat 10×10 outdoor area on the deck, patio, or lawn. Our setup is fully self-contained with propane — no gas hookup needed at any South County rental property.`,
    },
    {
      q: `Should I check with my vacation rental owner before booking?`,
      a: `Yes — we recommend confirming that outdoor cooking is permitted at your South County property before booking. Most beach house and vacation rental properties in Narragansett, South Kingstown, and Westerly allow outdoor propane cooking with advance notice to the owner. Watch Hill estate properties occasionally have specific event guidelines. We can advise on what to communicate to your host when you book.`,
    },
    {
      q: `When does the South County summer season book fastest?`,
      a: `South County beach house summer weekends book 4–6 weeks ahead in peak season (late June through Labor Day). July 4th weekend, College Week in Narragansett, and late August weekends are our most competitive booking windows. URI graduation in May (South Kingstown) and Watch Hill estate summer season (June–August) both require early booking. Contact us when your rental or event date is confirmed.`,
    },
  ],
]

// ── How It Works ─────────────────────────────────────────────────────────────
const RI_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `From booking to final cleanup, we handle every detail — you just enjoy the evening in ${city}, Rhode Island.`,
  steps: [
    { num: '01', title: 'Reserve Your Date',   desc: 'Share your date, guest count, protein preferences, and property address. We confirm Rhode Island availability within hours and lock in your event with a deposit.' },
    { num: '02', title: 'Confirm Your Menu',   desc: 'Choose your proteins — chicken, steak, shrimp, salmon, filet mignon, lobster tail, Wagyu beef — plus fried rice, noodles, vegetables, and house-made sauces. Dietary preferences are confirmed at this stage.' },
    { num: '03', title: 'Chef Arrives Ready',  desc: 'Your private hibachi chef arrives 30–45 minutes before showtime with a fully self-contained propane teppan grill, all ingredients, and everything needed. No prep required on your end.' },
    { num: '04', title: 'The Live Experience', desc: 'The full teppanyaki performance — precision knife work, flame tricks, and live cooking from first flame to final plate. Restaurant-quality food prepared exclusively for your Rhode Island group.' },
    { num: '05', title: 'Complete Cleanup',    desc: 'When the last plate is cleared, we break down the grill, pack out all equipment, and leave your property exactly as we found it. Your only job is to enjoy the evening.' },
  ],
}

// ── Section variants ──────────────────────────────────────────────────────────
const RI_SECTION_VARIANTS = [
  // Theme 0 — Providence Luxury Suburbs (East Greenwich)
  {
    heroPill:           "Rhode Island's Finest Estate Private Dining",
    experiencePill:     'Greenwich Cove Estate Dining Reimagined',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Your ${city} Estate Is the Venue`,     desc: `No reservation battles — your ${city} outdoor space becomes an exclusive private dining room for the evening. Greenwich Cove properties and East Greenwich Yacht Club-adjacent estates are our natural setting.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',           desc: 'Filet mignon, lobster tail, Wagyu beef, king scallops — choose your proteins and watch them cooked live on the teppan exclusively for your guests.' },
      { icon: '👨‍🍳', title: 'Certified Chef, Your Group Only',      desc: `Your teppanyaki chef performs exclusively for your ${city} guests — no shared dining room, no strangers, no restaurant noise. The full performance from flame to final plate.` },
      { icon: '✨', title: 'Full Show, Zero Cleanup',               desc: 'Premium live performance and complete cleanup when dinner is done — your East Greenwich estate is spotless when the chef leaves.' },
    ],
    experienceImage:    '/pics/hibachi-austin-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Rhode Island estate event`,
    areasPill:          'Serving East Greenwich & Kent County',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Rhode Island Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Kent County and surrounding communities — Warwick, Cranston, North Kingstown, Coventry, West Warwick, and every community within reach of the East Greenwich Main Street corridor throughout Rhode Island.`,
      (city) => `Most ${city} bookings are confirmed within hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Estate Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       "Estate graduation dinners, anniversary celebrations, and milestone events — private hibachi is East Greenwich's private dining upgrade",
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What East Greenwich & Greenwich Cove Hosts Are Saying',
  },
  // Theme 1 — Providence Urban & Corporate
  {
    heroPill:           "Providence's Private Chef",
    experiencePill:     'Better Than Federal Hill\'s Best',
    experiencePoints:   (city) => [
      { icon: '🏛️', title: `Your ${city} Space Is the Venue`,       desc: `College Hill terrace dinners, Federal Hill courtyard events, Fox Point backyard celebrations — wherever your event is in Providence, we come fully equipped.` },
      { icon: '👥', title: 'Corporate Scale: 20 to 80+ Guests',     desc: 'We scale with dual chef stations for larger Providence corporate and team events — every guest at the same performance, at the same time.' },
      { icon: '🔥', title: 'The Live Teppanyaki Performance',       desc: 'Fire tricks, flying shrimp, and every plate cooked to order — the format that replaces any Providence restaurant private room on every occasion that matters.' },
      { icon: '🧹', title: 'Full Setup and Zero Cleanup',           desc: 'Complete arrival-to-cleanup management — you host your Providence event, we handle every detail from first flame to final departure.' },
    ],
    experienceImage:    '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a Providence Rhode Island corporate event`,
    areasPill:          'Serving Providence & Rhode Island\'s Capital City',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Greater Rhode Island`,
    areasIntro: [
      (city, state) => `We serve all of Providence — College Hill, Federal Hill, Fox Point, Wayland Square, the East Side, Elmhurst, Smith Hill, and every neighborhood throughout the city. We also serve Cranston, Warwick, East Greenwich, Barrington, North Providence, Johnston, and the full Greater Providence metro.`,
      (city) => `Most Providence bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Check Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Reason to Celebrate in ${city}`,
    occasionSubtext:       "Corporate team dinners, graduation parties, and milestone celebrations — Providence's most memorable private dining experience",
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Providence Hosts Are Saying',
  },
  // Theme 2 — Providence Suburban Family
  {
    heroPill:           'Rhode Island Backyard Hibachi',
    experiencePill:     'The Backyard Upgrade You Deserved',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Your ${city} Backyard Is the Venue`,    desc: `No reservations, no parking, no rushed tables — your ${city} backyard becomes the best dining room in Greater Providence for the evening.` },
      { icon: '🎓', title: 'Built for Rhode Island Graduation',      desc: `When every restaurant near your ceremony venue is fully booked, your chef comes to you — exactly when and where you need it in ${city}.` },
      { icon: '🔥', title: 'Entertainment for Every Age',           desc: 'Fire tricks, flying shrimp, and live teppanyaki cooking — the performance that works equally for grandparents and teenagers.' },
      { icon: '🧹', title: 'Zero Cleanup for the Host',             desc: `Your chef sets up, performs, and packs out completely. You hosted the best dinner in ${city} without touching a single dish.` },
    ],
    experienceImage:    '/pics/backyard-hibachi.jpg',
    experienceImageAlt: (city) => `Backyard hibachi chef at a ${city} Rhode Island party`,
    areasPill:          'Serving Greater Providence & Rhode Island\'s Suburban Communities',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Greater Providence Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Greater Providence — Providence, Cranston, Warwick, East Greenwich, Lincoln, Johnston, North Providence, Cumberland, Smithfield, and every community throughout the Greater Providence corridor.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       "Graduation parties, birthday milestones, and neighborhood gatherings — Greater Providence's most memorable backyard experience",
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Greater Providence Hosts Are Saying',
  },
  // Theme 3 — East Bay Waterfront
  {
    heroPill:           "East Bay's Private Waterfront Chef",
    experiencePill:     'Narragansett Bay Estate Dining',
    experiencePoints:   (city) => [
      { icon: '⚓', title: `Your ${city} Waterfront Is the Venue`,  desc: `Nayatt Point estates, Bristol Harbor-adjacent terraces, and Narragansett Bay waterfront properties — your outdoor space becomes the finest private dining room on the bay.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',           desc: 'Filet mignon, lobster tail, Wagyu beef — and fresh proteins cooked live on the teppan for your East Bay waterfront guests.' },
      { icon: '👨‍🍳', title: 'Certified Chef, Your Group Only',      desc: `Your teppanyaki chef performs exclusively for your ${city} guests — complete privacy, complete performance, complete delivery from first flame to final plate.` },
      { icon: '✨', title: 'Self-Contained Setup, Full Cleanup',    desc: 'Propane teppan grill travels fully equipped — no gas hookup needed at any Narragansett Bay waterfront property. Complete cleanup when dinner is done.' },
    ],
    experienceImage:    '/pics/hibachi-shot-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Rhode Island waterfront estate`,
    areasPill:          'Serving East Bay & Narragansett Bay Communities',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the East Bay`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of the East Bay — Barrington, Bristol, Warren, East Providence, Tiverton, Little Compton, and every waterfront community along the Narragansett Bay corridor throughout Rhode Island.`,
      (city) => `Most ${city} bookings are confirmed within hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Waterfront Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Waterfront Dinner Everyone Talks About`,
    occasionSubtext:       "Graduation dinners, anniversary waterfront events, and yacht club-adjacent celebrations — East Bay's most memorable private dining experience",
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What East Bay Waterfront Hosts Are Saying',
  },
  // Theme 4 — Newport Luxury & Destination
  {
    heroPill:           "Newport's Private Hibachi Chef",
    experiencePill:     'The Vacation Dinner Newport Needed',
    experiencePoints:   (city) => [
      { icon: '🏰', title: 'Your Newport Property Is the Venue',    desc: 'Vacation rental Saturday dinners on Bellevue Avenue corridors, Cliff Walk-adjacent terraces, Ocean Drive estates — the chef comes fully equipped to wherever you\'re staying in Newport.' },
      { icon: '🥂', title: 'Bachelorette, Corporate, Milestone',   desc: 'Bachelorette weekends, corporate retreat closings, destination wedding weekends, and anniversary getaways — the private hibachi format handles any Newport occasion at any group size.' },
      { icon: '🔥', title: 'Premium Proteins as Standard',          desc: 'Newport groups default to Wagyu beef, lobster tail, filet mignon, and scallops. Your chef arrives with whatever the occasion calls for.' },
      { icon: '✨', title: 'Property Stays Immaculate',             desc: 'Complete self-contained setup and full pack-out when dinner is done. Your Newport vacation rental or estate property is left exactly as you found it.' },
    ],
    experienceImage:    '/pics/private-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a Newport Rhode Island vacation rental event`,
    areasPill:          'Serving Newport & Aquidneck Island',
    areasHeadline:      (city) => `Mobile Hibachi in ${city} and All of Aquidneck Island`,
    areasIntro: [
      (city, state) => `We serve all of Newport, Middletown, Portsmouth, and Aquidneck Island — Bellevue Avenue, Ocean Drive, Cliff Walk corridor properties, Thames Street-adjacent vacation rentals, and every Aquidneck Island address from Fort Adams to Glen Farm.`,
      (city) => `Newport summer weekends fill fast. Call or text (201) 565-3878 the moment your rental is confirmed.`,
    ],
    areasButton:           'Book Your Newport Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Your ${city} Weekend Needed`,
    occasionSubtext:       "Bachelorette weekends, vacation rental group dinners, and Newport mansion estate events — private hibachi is the Aquidneck Island dinner that elevates any occasion",
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Newport & Aquidneck Island Hosts Are Saying',
  },
  // Theme 5 — South County Coastal
  {
    heroPill:           "South County's Mobile Hibachi Chef",
    experiencePill:     'The Beach House Dinner',
    experiencePoints:   (city) => [
      { icon: '🏖️', title: `Chef at Your ${city} Beach Property`,   desc: `A certified hibachi chef comes to your ${city} beach house, vacation rental, or coastal estate — the dinner your South County weekend has been missing.` },
      { icon: '🔥', title: 'Fully Self-Contained Setup',            desc: 'Propane teppan grill travels fully equipped to any South County beach house or vacation rental. No gas hookup needed, no venue coordination required.' },
      { icon: '🎭', title: 'The Dinner of the Weekend',             desc: 'Fire tricks, fresh proteins cooked to order, the full teppanyaki show — the evening that becomes the story everyone tells about the South County trip.' },
      { icon: '✨', title: 'Property Stays Immaculate',             desc: 'Complete setup before the event and full pack-out after. Your beach house or vacation rental is left exactly as you found it.' },
    ],
    experienceImage:    '/pics/hibachi-colorado.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} Rhode Island coastal event`,
    areasPill:          'Serving South County & Rhode Island\'s Coastal Communities',
    areasHeadline:      (city) => `Mobile Hibachi in ${city} and Rhode Island\'s South County Coast`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of South County — Narragansett, South Kingstown, North Kingstown, Westerly, Charlestown, and every coastal community along Rhode Island's South County shore. Watch Hill, Point Judith, Wickford Village, and Misquamicut Beach are all within our standard service area.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. South County summer beach house dates fill 4–6 weeks ahead.`,
    ],
    areasButton:           'Reserve Your Beach House Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Your ${city} Weekend Needed`,
    occasionSubtext:       "Beach house group dinners, bachelorette weekends, family reunion weekends, and South County coastal gatherings — private hibachi is Rhode Island's coastal dinner that elevates any weekend",
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What South County Coastal Hosts Are Saying',
  },
]

// ── Image themes ──────────────────────────────────────────────────────────────
const RI_IMAGE_THEMES = [
  { heroImage: '/pics/hibachi-private-chef-1.jpg' }, // Theme 0 — Providence Luxury Suburbs
  { heroImage: '/pics/hibachi-event.jpg' },           // Theme 1 — Providence Urban & Corporate
  { heroImage: '/pics/hibachi-at-home.jpg' },         // Theme 2 — Providence Suburban Family
  { heroImage: '/pics/backyard-hibachi-3.jpg' },      // Theme 3 — East Bay Waterfront
  { heroImage: '/pics/hibachi-pool-party.jpg' },      // Theme 4 — Newport & Aquidneck Island
  { heroImage: '/pics/traveling-hibachi.jpg' },       // Theme 5 — South County Coastal
]

// ── City experience image map ──────────────────────────────────────────────────
const RI_CITY_IMAGE_MAP = {
  // Batch 1
  'providence':     { src: '/pics/hibachi-photo-1.jpg',    alt: (city) => `Private hibachi chef in Providence, RI` },
  'cranston':       { src: '/pics/hibachi-shot-1.jpg',     alt: (city) => `Backyard hibachi party in Cranston Rhode Island` },
  'warwick':        { src: '/pics/hibachi-catering.jpg',   alt: (city) => `Private hibachi chef in Warwick Rhode Island` },
  'east-greenwich': { src: '/pics/hibachi-chef-2.jpg',     alt: (city) => `Private hibachi chef at an East Greenwich Rhode Island estate` },
  'lincoln':        { src: '/pics/hibachi-colorado.jpg',   alt: (city) => `Backyard hibachi party in Lincoln Rhode Island` },
  'barrington':     { src: '/pics/hibachi-dallas-2.jpg',   alt: (city) => `Private hibachi chef at a Barrington Rhode Island waterfront estate` },
  'bristol':        { src: '/pics/backyard-hibachi-2.jpg', alt: (city) => `Private hibachi chef in Bristol Rhode Island` },
  'newport':        { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Private hibachi chef at a Newport Rhode Island vacation rental event` },
  'middletown':     { src: '/pics/hibachi-photo-2.jpg',    alt: (city) => `Private hibachi chef in Middletown Rhode Island` },
  'portsmouth':     { src: '/pics/hibachi-austin-home.jpg',alt: (city) => `Backyard hibachi party at a Portsmouth Rhode Island estate` },
  'narragansett':   { src: '/pics/hibachi-dallas-2.jpg',   alt: (city) => `Mobile hibachi chef at a Narragansett Rhode Island beach house` },
  'south-kingstown':{ src: '/pics/hibachi-colorado.jpg',   alt: (city) => `Mobile hibachi chef in South Kingstown Rhode Island` },
  'north-kingstown':{ src: '/pics/mobile-hibachi.jpg',     alt: (city) => `Mobile hibachi chef in North Kingstown Rhode Island` },
  'westerly':       { src: '/pics/backyard-hibachi.jpg',   alt: (city) => `Private hibachi chef at a Westerly Rhode Island coastal estate` },
}

// ── Support images (Batch 1) ──────────────────────────────────────────────────
const RI_SUPPORT_IMAGES = {
  'providence': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg', alt: (city) => `Corporate hibachi event in Providence, RI`,                 caption: 'Providence private dining events',        trustBadge: '5.0 Average Rating',                       intro: (city) => `Providence hosts — corporate teams from the Innovation District, Brown and RISD graduation families, College Hill anniversary dinners, and Federal Hill-adjacent backyard events — consistently describe the same discovery: private hibachi at home produces an evening that no Federal Hill restaurant reservation can replicate. The WaterFire city deserves a private dining format that matches its character. Here's what Providence hosts are saying:` },
    cta:         { src: '/pics/hibachi-hart.jpg',        alt: (city) => `Private hibachi chef setting up in Providence, RI`,         caption: 'Your Providence evening starts here' },
  },
  'cranston': {
    testimonial: { src: '/pics/hibachi-chef-home.jpg',  alt: (city) => `Backyard graduation hibachi party in Cranston Rhode Island`, caption: 'Cranston graduation season',               trustBadge: 'Trusted by Rhode Island Families',         intro: (city) => `Cranston families have an entertaining tradition that goes back generations — and private hibachi has become its newest expression. Cranston High School East and West graduation parties, backyard birthday celebrations, and neighborhood milestone dinners have all found their format. Here's what Cranston hosts are saying:` },
    cta:         { src: '/pics/hibachi-pic-2.jpg',       alt: (city) => `Private hibachi chef in Cranston Rhode Island`,             caption: 'Your Cranston backyard dinner' },
  },
  'warwick': {
    testimonial: { src: '/pics/private-hibachi.jpg',    alt: (city) => `Private hibachi event in Warwick Rhode Island`,              caption: 'Warwick backyard celebrations',            trustBadge: 'Thousands of Happy Guests',                intro: (city) => `Warwick is Rhode Island's central family community — Pilgrim High, Toll Gate, and Warwick Veterans graduation parties, backyard anniversary dinners, and neighborhood milestone events that bring together the extended family in exactly the format these occasions deserve. Here's what Warwick hosts are saying:` },
    cta:         { src: '/pics/hibachi-dallas-home.jpg', alt: (city) => `Backyard hibachi chef in Warwick Rhode Island`,             caption: 'Your Warwick backyard, upgraded' },
  },
  'east-greenwich': {
    testimonial: { src: '/pics/hibachi-shot-2.jpg',     alt: (city) => `Estate hibachi dinner in East Greenwich Rhode Island`,       caption: 'East Greenwich estate private dining',    trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `East Greenwich hosts who have discovered private hibachi describe a consistent experience: the Greenwich Cove setting, the East Greenwich Yacht Club community standard, and the occasion together create conditions where a private chef at home outperforms every restaurant in Kent County without effort. The Main Street corridor standard extends to private dining. Here's what East Greenwich hosts are saying:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',  alt: (city) => `Private hibachi chef in East Greenwich Rhode Island`,        caption: "East Greenwich's private dining standard" },
  },
  'lincoln': {
    testimonial: { src: '/pics/hibachi-austin-home.jpg', alt: (city) => `Backyard hibachi party in Lincoln Rhode Island`,              caption: 'Lincoln backyard celebrations',               trustBadge: 'Highly Rated by Rhode Island Hosts',       intro: (city) => `Lincoln families — Chase Farm neighbors, Lincoln Woods outdoor community, Lincoln High School graduation parents — have found that private hibachi at home is the format that brings the whole family together better than any restaurant option in Northern Rhode Island. Here's what Lincoln hosts are saying:` },
    cta:         { src: '/pics/hibachi-chef-at-home.jpg',alt: (city) => `Private hibachi chef in Lincoln Rhode Island`,               caption: 'Your Lincoln backyard event' },
  },
  'barrington': {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',     alt: (city) => `Waterfront graduation hibachi in Barrington Rhode Island`,   caption: 'Barrington waterfront private dining',       trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `Barrington hosts — Nayatt Point waterfront estate families, Barrington Yacht Club community members, and Rumstick Road property owners — share a consistent observation: private hibachi at their Narragansett Bay property creates an evening that no East Bay restaurant can replicate. Here's what Barrington hosts are saying:` },
    cta:         { src: '/pics/hibachi-pic-3.jpg',       alt: (city) => `Private hibachi chef in Barrington Rhode Island`,            caption: 'Your Barrington estate dinner' },
  },
  'bristol': {
    testimonial: { src: '/pics/private-party-chef-6.jpg',alt: (city) => `Waterfront graduation hibachi in Bristol Rhode Island`,      caption: 'Bristol waterfront private dining',          trustBadge: 'Trusted by Rhode Island Families',         intro: (city) => `Bristol hosts — Roger Williams University graduation families, Hope Street historic property owners, Colt State Park-adjacent estate residents — have discovered that private hibachi at home delivers what Bristol Harbor's waterfront restaurants can only partially provide: the entire group, the same chef, the same performance, at your own property. Here's what Bristol hosts are saying:` },
    cta:         { src: '/pics/mobile-hibachi-2.jpg',    alt: (city) => `Private hibachi chef in Bristol Rhode Island`,               caption: 'Your Bristol estate dinner' },
  },
  'newport': {
    testimonial: { src: '/pics/hibachi-pic-3.jpg',       alt: (city) => `Private hibachi vacation rental dinner in Newport Rhode Island`, caption: 'Newport private dining events',            trustBadge: "Newport's Favorite Hibachi Experience",   intro: (city) => `Newport vacation rental groups, bachelorette weekends, and corporate retreat teams discover every summer the same thing: the private hibachi dinner at the property is the evening that becomes the story of the trip. Thames Street was fully booked. The Cliff Walk was beautiful. But the Saturday night chef dinner was the one everyone photographs. Here's what Newport hosts are saying:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',     alt: (city) => `Private hibachi chef in Newport Rhode Island`,               caption: 'Your Newport property, your private chef' },
  },
  'middletown': {
    testimonial: { src: '/pics/backyard-hibachi-2.jpg',  alt: (city) => `Vacation rental hibachi dinner in Middletown Rhode Island`,  caption: 'Middletown Aquidneck Island events',         trustBadge: 'Thousands of Happy Guests',                intro: (city) => `Middletown vacation rental groups — families choosing the island's quieter end, bachelorette weekends wanting more private space, corporate teams needing room to breathe — all find the same thing: the private chef night at the Middletown property is the weekend's best decision. Here's what Middletown hosts are saying:` },
    cta:         { src: '/pics/mobile-hibachi.jpg',      alt: (city) => `Mobile hibachi chef in Middletown Rhode Island`,             caption: 'Your Middletown vacation rental dinner' },
  },
  'portsmouth': {
    testimonial: { src: '/pics/hibachi-shot-2.jpg',      alt: (city) => `Estate hibachi dinner in Portsmouth Rhode Island`,           caption: 'Portsmouth Aquidneck Island dining',         trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `Portsmouth hosts — Glen Farm-adjacent estate families, Sandy Point waterfront property owners, Common Fence Point peninsula residents — choose private hibachi because Portsmouth's character calls for it: private, excellent, away from the Newport weekend energy. Here's what Portsmouth hosts are saying:` },
    cta:         { src: '/pics/hibachi-dallas-home.jpg', alt: (city) => `Private hibachi chef in Portsmouth Rhode Island`,            caption: 'Your Portsmouth backyard, elevated' },
  },
  'narragansett': {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',     alt: (city) => `Beach house hibachi dinner in Narragansett Rhode Island`,   caption: 'Narragansett South County hosts agree',      trustBadge: "Rhode Island's Favorite Hibachi Experience", intro: (city) => `Narragansett beach house groups find every summer that the private hibachi dinner at the rental is the moment the whole group comes together for the first time all weekend. Narragansett Town Beach on Saturday morning. Scarborough Beach in the afternoon. The chef at the property on Saturday night. Here's what Narragansett hosts are saying:` },
    cta:         { src: '/pics/hibachi-pic-2.jpg',       alt: (city) => `Mobile hibachi chef in Narragansett Rhode Island`,          caption: 'Your Narragansett beach house night' },
  },
  'south-kingstown': {
    testimonial: { src: '/pics/mobile-hibachi-2.jpg',    alt: (city) => `Vacation rental hibachi dinner in South Kingstown Rhode Island`, caption: 'South Kingstown South County events',     trustBadge: 'Trusted by Rhode Island Families',         intro: (city) => `South Kingstown hosts — URI graduation families in Kingston, beach house groups in Wakefield, Peace Dale anniversary celebrants, South County vacation rental guests — have found that private hibachi at the property delivers what South County restaurants on a May Saturday genuinely can't: the whole group together, at the same time. Here's what South Kingstown hosts are saying:` },
    cta:         { src: '/pics/hibachi-shot-2.jpg',      alt: (city) => `Private hibachi chef in South Kingstown Rhode Island`,      caption: 'Your South Kingstown property dinner' },
  },
  'north-kingstown': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',  alt: (city) => `Graduation hibachi dinner in North Kingstown Rhode Island`, caption: 'North Kingstown and Wickford area events',   trustBadge: '5.0 Average Rating',                       intro: (city) => `North Kingstown hosts — Wickford Village property owners, Narragansett Bay western shore estate families, and the professional community between Providence and South County — appreciate that private hibachi delivers what the Wickford restaurant strip can't offer for a graduation dinner or a milestone celebration: everyone at the same table, the same experience, the same evening. Here's what North Kingstown hosts are saying:` },
    cta:         { src: '/pics/hibachi-photo-1.jpg',     alt: (city) => `Private hibachi chef in North Kingstown Rhode Island`,      caption: 'Your North Kingstown evening' },
  },
  'westerly': {
    testimonial: { src: '/pics/hibachi-hart.jpg',        alt: (city) => `Watch Hill estate hibachi dinner in Westerly Rhode Island`, caption: 'Watch Hill and Misquamicut events',          trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `Westerly hosts range from Watch Hill estate families who expect Wagyu and lobster tail as the default proteins to Misquamicut beach house bachelorette groups who want Saturday evening at the property rather than the beach strip. Both markets find the same thing: private hibachi delivers exactly what the occasion requires, at the property that's already perfect for the evening. Here's what Westerly hosts are saying:` },
    cta:         { src: '/pics/hibachi-chef-2.jpg',      alt: (city) => `Private hibachi chef in Westerly Rhode Island`,            caption: 'Your Westerly estate or beach house dinner' },
  },
}

// ── Support fallback images (per theme) ───────────────────────────────────────
const RI_SUPPORT_FALLBACKS = [
  // Theme 0 — Providence Luxury Suburbs
  {
    testimonial: { src: '/pics/hibachi-chef-at-home.jpg', alt: (city) => `Estate hibachi dinner in ${city}, RI`,                   caption: 'Rhode Island estate private dining',      trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `${city} hosts expect the standard that Greenwich Cove and the East Greenwich community has set for private entertaining. Private hibachi at your ${city} estate or home delivers the live teppanyaki experience that matches that standard. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',     alt: (city) => `Private hibachi chef in ${city}, Rhode Island`,          caption: 'Rhode Island estate private dining' },
  },
  // Theme 1 — Providence Urban & Corporate
  {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',      alt: (city) => `Corporate hibachi event in ${city}, RI`,                  caption: 'Providence metro private dining',         trustBadge: '5.0 Average Rating',                       intro: (city) => `${city} professionals and families choose private hibachi for the occasions that deserve more than a restaurant reservation. Corporate team events, graduation dinners, and milestone celebrations — our certified chefs bring the full setup and deliver the performance at your property. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/hibachi-event.jpg',         alt: (city) => `Private hibachi chef in ${city}, Rhode Island`,          caption: 'Providence private dining event' },
  },
  // Theme 2 — Providence Suburban Family
  {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: (city) => `Backyard graduation hibachi in ${city}, RI`,             caption: 'Rhode Island graduation season',          trustBadge: 'Trusted by Rhode Island Families',         intro: (city) => `${city} families discover private hibachi when they're planning a graduation dinner and every restaurant in Greater Providence is fully booked. The chef comes to your backyard, handles everything, and leaves your property spotless. Here's what ${city} hosts have found:` },
    cta:         { src: '/pics/hibachi-at-home.jpg',       alt: (city) => `Backyard hibachi chef in ${city}, Rhode Island`,         caption: 'Rhode Island backyard dining, upgraded' },
  },
  // Theme 3 — East Bay Waterfront
  {
    testimonial: { src: '/pics/backyard-hibachi-2.jpg',   alt: (city) => `Waterfront graduation hibachi in ${city}, RI`,           caption: 'East Bay waterfront private dining',      trustBadge: 'Thousands of Happy Guests',                intro: (city) => `${city} hosts on Narragansett Bay and the East Bay waterfront have found that private hibachi at home produces what no harborfront restaurant can deliver: the entire group gathered at the same grill, watching the same chef, eating the same exceptional meal. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/hibachi-shot-1.jpg',        alt: (city) => `Private hibachi chef in ${city}, Rhode Island`,          caption: 'East Bay waterfront dining standard' },
  },
  // Theme 4 — Newport Luxury & Destination
  {
    testimonial: { src: '/pics/hibachi-pic-3.jpg',        alt: (city) => `Vacation rental hibachi dinner in ${city}, RI`,          caption: 'Newport private dining events',           trustBadge: "Newport's Favorite Hibachi Experience",   intro: (city) => `${city} vacation rental groups discover every summer that the Saturday dinner they expected to get at a Thames Street restaurant is fully booked by April. Private hibachi at the rental property is the solution — and the one the group references when planning the next trip to Newport. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/hibachi-pool-party.jpg',    alt: (city) => `Private hibachi chef in ${city}, Rhode Island`,          caption: 'Newport private dining, your property' },
  },
  // Theme 5 — South County Coastal
  {
    testimonial: { src: '/pics/hibachi-dallas-2.jpg',     alt: (city) => `Beach house hibachi dinner in ${city}, RI`,              caption: 'South County coastal hosts agree',        trustBadge: "Rhode Island's Favorite Hibachi Experience", intro: (city) => `${city} beach house groups and vacation rental guests discover something every summer: nothing elevates a South County weekend quite like a private hibachi dinner at the property. Our chefs travel fully equipped and deliver the teppanyaki show your group will reference for years. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/mobile-hibachi.jpg',        alt: (city) => `Mobile hibachi chef in ${city}, Rhode Island`,           caption: 'South County coastal private dining' },
  },
]

// ── Closing variants (RI generic 488–493) ─────────────────────────────────────
export const RI_CLOSING_VARIANTS = [
  // 488 — T0 Providence Luxury Suburbs
  {
    headline: (city) => `${city}'s Estate Private Dining — Book Your Date`,
    sub:      (city) => `A certified hibachi chef at your ${city} estate or home. Premium proteins, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `East Greenwich graduation season and estate events book early. Reserve your date now.`,
  },
  // 489 — T1 Providence Urban & Corporate
  {
    headline: (city) => `Reserve Your ${city} Private Hibachi Chef`,
    sub:      (city) => `A certified teppanyaki chef for your ${city} event. Full setup, all ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Providence graduation and corporate holiday events book fast. Confirm your date now.`,
  },
  // 490 — T2 Providence Suburban Family
  {
    headline: (city) => `${city} Backyard Hibachi — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your ${city} home. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Greater Providence graduation season books fast. Check your date now.`,
  },
  // 491 — T3 East Bay Waterfront
  {
    headline: (city) => `${city} Waterfront Hibachi — Book Your Date`,
    sub:      (city) => `A certified hibachi chef at your ${city} waterfront estate or property. Premium proteins, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `East Bay graduation season and Narragansett Bay waterfront events book early. Reserve your date now.`,
  },
  // 492 — T4 Newport Luxury & Destination
  {
    headline: (city) => `${city} Private Hibachi — Reserve Your Date`,
    sub:      (city) => `A certified mobile hibachi chef comes to your ${city} vacation rental or estate. Full setup, premium proteins, live show, complete cleanup. From $60/adult.`,
    urgency:  `Newport summer weekends book 8–10 weeks ahead. Contact us when your rental is confirmed.`,
  },
  // 493 — T5 South County Coastal
  {
    headline: (city) => `${city} Beach House Hibachi — Book Your Date`,
    sub:      (city) => `A certified mobile hibachi chef comes to your ${city} beach house or vacation rental. Full setup, live show, complete cleanup. From $60/adult.`,
    urgency:  `South County summer beach house weekends book 4–6 weeks ahead. Reserve when your date is confirmed.`,
  },
]

// ── Intro variants (RI generic 488–493) ──────────────────────────────────────
export const RI_INTRO_VARIANTS = [
  // 488 — T0 Providence Luxury Suburbs
  {
    headline: (city) => `Hibachi at Home in ${city}: Rhode Island's Estate Private Dining Experience`,
    opening:  (city, state) =>
      `${city} is one of Rhode Island's most prestigious residential addresses — and when it comes to entertaining at home, the standard is set by the property, the guest list, and the occasion. Private hibachi at home in ${city} brings a certified teppanyaki chef to your estate, backyard, or outdoor space with the full setup: a self-contained propane teppan grill, hand-selected proteins, all ingredients, and a live cooking performance that transforms any gathering into the evening your guests reference for months. No restaurant reservation required. The chef comes to you.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The live teppanyaki performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For gatherings over 25, we bring dual chef stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} estate events book 2–4 weeks ahead. Graduation season (May–June) and summer milestone events fill earliest — reserve 4–6 weeks out for any Saturday event. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of Rhode Island.`,
  },
  // 489 — T1 Providence Urban & Corporate
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Rhode Island's Urban Private Dining Experience`,
    opening:  (city, state) =>
      `Providence and its surrounding communities know how to celebrate — and the occasion that deserves more than a restaurant table has found its format. Private hibachi in ${city} brings a certified teppanyaki chef to your property with the full setup, hand-selected proteins, and a live cooking performance that makes any gathering into an evening worth attending. Corporate team dinners, graduation celebrations, birthday milestones, and anniversary events — the chef comes to you.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all proteins, fried rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For groups over 25, dual stations keep everyone eating at the same time. Full cleanup included.`,
    closing:  (city, state) =>
      `${city} events book 2–3 weeks out for standard dates. Brown and RISD graduation season and corporate holiday events fill faster — reserve 4–6 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of Greater Rhode Island.`,
  },
  // 490 — T2 Providence Suburban Family
  {
    headline: (city) => `Hibachi at Home in ${city}: Greater Providence's Backyard Private Dining Experience`,
    opening:  (city, state) =>
      `${city} is where Greater Providence families celebrate — graduation parties that bring three generations to one backyard, birthday milestones where the guest list overflows from the deck to the lawn, summer neighborhood dinners where the gathering deserves something better than a restaurant. Private hibachi at home in ${city} brings a certified teppanyaki chef to your backyard with everything needed for the full live teppanyaki experience. No reservations, no parking, no splitting the group across three tables.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, fresh proteins, fried rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For graduations over 25, we bring two stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} graduation season (May–June) is our fastest-filling period in Greater Providence. Book 4–5 weeks ahead for any graduation Saturday. Standard summer events: 2–3 weeks. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of Greater Providence.`,
  },
  // 491 — T3 East Bay Waterfront
  {
    headline: (city) => `Hibachi in ${city}: East Bay's Narragansett Bay Private Dining Experience`,
    opening:  (city, state) =>
      `${city} is one of Rhode Island's most beautiful waterfront communities — Narragansett Bay views, historic harbor character, and a residential culture built around outdoor entertaining at the water's edge. Private hibachi at home in ${city} brings a certified teppanyaki chef to your waterfront estate, harbor-adjacent property, or East Bay outdoor space with the full setup and a live cooking performance that matches the setting your property already provides.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, fresh proteins, fried rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order. For graduation groups over 25, we bring dual stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} graduation season and Narragansett Bay waterfront events book 4–6 weeks ahead. Standard East Bay events: 2–3 weeks. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of the East Bay.`,
  },
  // 492 — T4 Newport Luxury & Destination
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Aquidneck Island's Vacation Rental Dining Experience`,
    opening:  (city, state) =>
      `${city} is a destination — and the best dinner of a Newport weekend shouldn't involve fighting for a table at a Thames Street restaurant that's been fully reserved since April. Mobile hibachi at your ${city} vacation rental, mansion-adjacent estate, or Aquidneck Island property brings a certified teppanyaki chef to your outdoor space with the full setup, all ingredients, and a live cooking performance that makes the dinner the centerpiece of the weekend.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The live performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your property is left exactly as you found it.`,
    closing:  (city, state) =>
      `${city} Newport summer weekend events book 6–10 weeks ahead in peak season. Bachelorette and vacation rental events fill fastest. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor cooking is permitted at your rental before booking.`,
  },
  // 493 — T5 South County Coastal
  {
    headline: (city) => `Mobile Hibachi Chef in ${city}: Rhode Island's South County Coastal Dining Experience`,
    opening:  (city, state) =>
      `${city} is South County — and the best dinner of a South County weekend doesn't involve driving off the peninsula to find a restaurant that still has availability. Mobile hibachi at your ${city} beach house, vacation rental, or coastal estate brings a certified teppanyaki chef to your outdoor space with the full setup, all ingredients, and a live cooking performance that becomes the anchor memory of the South County trip.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The live performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your beach house or vacation rental is left exactly as you found it.`,
    closing:  (city, state) =>
      `${city} South County summer events book 4–6 weeks ahead in peak season. Beach house weekends fill fastest. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor cooking is permitted at your rental before booking.`,
  },
]

// ── City-specific closings (RI city-specific 494–507) ────────────────────────
export const RI_CITY_CLOSINGS = [
  // 494 — Providence (profileIdx 0)
  {
    headline: (city) => `Reserve Your Providence Private Hibachi Chef`,
    sub:      (city) => `A certified teppanyaki chef for your Providence corporate event, Brown or RISD graduation party, or private dinner. Full setup, all ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Providence graduation season and corporate holiday events book fast. Confirm your date now.`,
  },
  // 495 — Cranston (profileIdx 1)
  {
    headline: (city) => `Cranston Backyard Hibachi — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your Cranston home. Full setup, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Cranston High School East and West graduation Saturdays fill 4–5 weeks out. Reserve your date early.`,
  },
  // 496 — Warwick (profileIdx 2)
  {
    headline: (city) => `Warwick Backyard Hibachi — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your Warwick home. Full setup, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Warwick graduation season books 4–5 weeks ahead. Check your date now.`,
  },
  // 497 — East Greenwich (profileIdx 3)
  {
    headline: (city) => `East Greenwich Estate Private Dining — Book Your Date`,
    sub:      (city) => `A certified hibachi chef at your East Greenwich home or estate. Premium proteins, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `East Greenwich High School graduation Saturdays and Greenwich Cove estate events fill early. Reserve your date now.`,
  },
  // 498 — Lincoln (profileIdx 4)
  {
    headline: (city) => `Lincoln Hibachi Catering — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your Lincoln home. Full setup, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Lincoln graduation season books 3–5 weeks ahead. Check your date now.`,
  },
  // 499 — Barrington (profileIdx 5)
  {
    headline: (city) => `Barrington Waterfront Hibachi — Book Your Date`,
    sub:      (city) => `A certified hibachi chef at your Barrington waterfront estate or property. Premium proteins, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Barrington graduation season and Narragansett Bay waterfront events book early. Reserve your date now.`,
  },
  // 500 — Bristol (profileIdx 6)
  {
    headline: (city) => `Bristol Estate Hibachi — Book Your Date`,
    sub:      (city) => `A certified hibachi chef at your Bristol property. Premium proteins, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Roger Williams University graduation weekends and Bristol waterfront events book 4–6 weeks ahead. Reserve your date early.`,
  },
  // 501 — Newport (profileIdx 7)
  {
    headline: (city) => `Newport Private Hibachi — Reserve Your Date`,
    sub:      (city) => `A certified mobile hibachi chef comes to your Newport vacation rental or estate. Premium proteins, live show, complete cleanup. From $60/adult.`,
    urgency:  `Newport summer weekends book 8–10 weeks ahead. Contact us when your rental is confirmed.`,
  },
  // 502 — Middletown (profileIdx 8)
  {
    headline: (city) => `Middletown Hibachi — Book Your Date`,
    sub:      (city) => `A certified mobile hibachi chef comes to your Middletown vacation rental or property on Aquidneck Island. Full setup, live show, complete cleanup. From $60/adult.`,
    urgency:  `Aquidneck Island summer weekends fill fast. Book when your rental or event date is confirmed.`,
  },
  // 503 — Portsmouth (profileIdx 9)
  {
    headline: (city) => `Portsmouth Backyard Hibachi — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your Portsmouth backyard or outdoor space. Full setup, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Portsmouth summer events and Aquidneck Island graduation season book 3–5 weeks ahead. Reserve your date now.`,
  },
  // 504 — Narragansett (profileIdx 10)
  {
    headline: (city) => `Narragansett Beach House Hibachi — Book Your Date`,
    sub:      (city) => `A certified mobile hibachi chef comes to your Narragansett beach house or vacation rental. Full setup, live show, complete cleanup. From $60/adult.`,
    urgency:  `Narragansett summer beach house weekends book 4–6 weeks ahead. Reserve when your rental is confirmed.`,
  },
  // 505 — South Kingstown (profileIdx 11)
  {
    headline: (city) => `South Kingstown Beach House Hibachi — Book Your Date`,
    sub:      (city) => `A certified mobile hibachi chef comes to your South Kingstown beach house or vacation rental. Full setup, live show, complete cleanup. From $60/adult.`,
    urgency:  `URI graduation and South County summer beach house dates book 4–6 weeks ahead. Reserve when your date is confirmed.`,
  },
  // 506 — North Kingstown (profileIdx 12)
  {
    headline: (city) => `North Kingstown Hibachi — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your North Kingstown property. Full setup, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `North Kingstown and Wickford-area events book 3–5 weeks ahead. Reserve your date now.`,
  },
  // 507 — Westerly (profileIdx 13)
  {
    headline: (city) => `Westerly Watch Hill Hibachi — Reserve Your Date`,
    sub:      (city) => `A certified private hibachi chef comes to your Westerly estate, vacation rental, or coastal property. Premium proteins, live show, complete cleanup. From $60/adult.`,
    urgency:  `Watch Hill estate events and Misquamicut summer weekends book 4–6 weeks ahead. Reserve when your date is confirmed.`,
  },
]

// ── City-specific intros (RI city-specific 494–507) ──────────────────────────
export const RI_CITY_INTROS = [
  // 494 — Providence (profileIdx 0)
  {
    headline: () => `Private Hibachi Chef in Providence — College Hill, Federal Hill, WaterFire & Brown University Graduation`,
    opening:  () =>
      `Providence, Rhode Island carries the cultural weight of New England's most surprising city: the WaterFire installation that turns the downtown rivers into a living art experience on summer nights, College Hill's Brown University and RISD campuses whose graduation weekends fill the East Side with families from across the country, Federal Hill's James Beard-recognized restaurant corridor that has made Providence one of America's most celebrated food cities, the Fox Point neighborhood's waterfront gathering energy, and India Point Park's Narragansett Bay view that anchors the city's outdoor life. Amica Mutual, Textron, Davol Square's office corridor, and a growing technology and healthcare innovation community make Providence Rhode Island's economic and professional hub.`,
    middle:   () =>
      `Our private hibachi chef service covers every Providence occasion. A Brown University graduation dinner for thirty-six family members in a College Hill historic home on a May Saturday when every restaurant on Thayer Street and Wayland Square was fully reserved. A RISD graduation celebration for twenty-four guests at a Fox Point loft-adjacent property where the chef's live performance matches the creative energy of the neighborhood. A corporate team appreciation dinner for twenty-eight colleagues at a Providence Innovation District venue where the teppanyaki format creates the connection that restaurant private rooms rarely manage. A WaterFire-evening birthday party at an East Side home where the fire on the river three blocks away and the fire on the teppan grill in the backyard together create an evening nobody forgets. We arrive with everything — a self-contained propane teppan grill, hand-selected proteins, all ingredients, plates, chopsticks — and leave with nothing but the memory when dinner is done.`,
    closing:  () =>
      `Providence graduation season (May–June) fills our calendar fastest of any Rhode Island market. Brown University and RISD graduation Saturdays book 5–7 weeks ahead. Corporate holiday events from October through December: 4–6 weeks. WaterFire weekend-adjacent summer events: 3–4 weeks. Standard Providence events: 2–3 weeks. Serving all of Providence — College Hill, Federal Hill, Fox Point, Wayland Square, the East Side, Smith Hill, Elmhurst, South Side, and all of Providence County. Starting at $60/adult, $30/child, $600 event minimum. Premium proteins available.`,
  },
  // 495 — Cranston (profileIdx 1)
  {
    headline: () => `Hibachi at Home in Cranston — Cranston High School Graduation, Knightsville & Ocean State's Backyard Entertaining Heart`,
    opening:  () =>
      `Cranston, Rhode Island is the state's second-largest city and its most energetic family entertaining community — a place where the Italian-American and Portuguese-American family traditions that have defined Ocean State culture for generations express themselves most fully in the backyard, around the table, at the occasion that brings the entire family together. Cranston High School East and Cranston High School West graduation seasons together create one of Rhode Island's most concentrated May celebrations. The Garden City Center's commercial energy, Knightsville's historic character, and the Auburn neighborhood's family-gathering tradition all contribute to a community where private hibachi at home is the format that brings the whole guest list together at once.`,
    middle:   () =>
      `Our private hibachi chef service is the right format for the Cranston backyard occasion. Whether it's a Cranston East graduation dinner for forty-two family members gathered on a backyard deck from three states, a Cranston West graduation party where thirty-eight guests range from the graduate's kindergarten-age cousins to the grandparents who immigrated from Portugal thirty years ago, a birthday celebration at a Knightsville-area home where the neighbors are invited and the backyard needs a chef who can hold a crowd, or an anniversary dinner where the couple wants something more memorable than another night on Federal Hill — our chef arrives fully equipped and manages every detail from setup to cleanup. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done.`,
    closing:  () =>
      `Cranston graduation season (May–June) fills our Greater Providence calendar faster than any other event type. Cranston East and West graduation Saturdays book 4–5 weeks ahead. Garden City Center-area events and Knightsville anniversary dinners: 2–3 weeks. Serving Cranston and all of Greater Providence — Providence, Warwick, East Greenwich, Johnston, North Providence, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 496 — Warwick (profileIdx 2)
  {
    headline: () => `Hibachi at Home in Warwick — Pilgrim High, Toll Gate, Veterans & Rhode Island's Central Family Community`,
    opening:  () =>
      `Warwick, Rhode Island is the state's most representative family community — a city of 82,000 where three public high schools, a strong Portuguese and Italian-American heritage, and the backyard-entertaining culture that characterizes Ocean State family life combine to create Rhode Island's most consistent graduation party market. T.F. Green Airport's commercial corridor, the Warwick Mall's retail center, Warwick Neck's waterfront neighborhoods, and Oakland Beach's summer community all contribute to a city that celebrates its milestones with straightforward enthusiasm. Pilgrim High School, Toll Gate High School, and Warwick Veterans Memorial High School graduation ceremonies together produce the most graduation parties of any single community in Rhode Island — and private hibachi has become the format that makes those celebrations genuinely memorable.`,
    middle:   () =>
      `Our private hibachi chef service covers the full range of Warwick occasions. A Pilgrim High School graduation dinner for thirty-eight family members at a Warwick Neck home where the chef sets up on the back lawn and runs a two-hour teppanyaki show for guests from three states. A Veterans graduation backyard party where forty guests — the graduate's extended family, the youth soccer teammates' families, the neighborhood friends — gather around the grill for an evening that's genuinely better than anything available at Bald Hill Road restaurant row on a May Saturday. A summer birthday dinner at an Oakland Beach-area property where the water is visible and the chef's fire tricks match the occasion's energy. We arrive with everything — propane teppan grill, all proteins, fried rice, vegetables, sauces, plates, chopsticks — and leave with everything when dinner is done. Complete cleanup.`,
    closing:  () =>
      `Warwick graduation season (May–June) is our highest-demand period in Kent County. Pilgrim, Toll Gate, and Veterans graduation Saturdays book 4–5 weeks ahead. Oakland Beach summer events and Warwick Neck-area milestone celebrations: 3–4 weeks. Standard Warwick events: 2–3 weeks. Serving Warwick and all of Greater Providence — Cranston, East Greenwich, North Kingstown, West Warwick, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 497 — East Greenwich (profileIdx 3)
  {
    headline: () => `Hibachi at Home in East Greenwich — Greenwich Cove, East Greenwich Yacht Club & Rhode Island's Premier Residential Address`,
    opening:  () =>
      `East Greenwich, Rhode Island occupies a distinctive position in the Ocean State's hierarchy of places: a small town of 14,000 where the Main Street brick corridor, Greenwich Cove's Narragansett Bay waterfront, the East Greenwich Yacht Club's community identity, Goddard Memorial State Park's sweeping coastal landscape, and some of Rhode Island's highest household incomes combine to create the state's most demanding private entertaining market outside Newport. East Greenwich High School's graduation tradition, the Kent County executive and medical professional community, and a standard for home hosting that has been set by a generation of East Greenwich hosts who invested in their properties precisely to host at this level.`,
    middle:   () =>
      `Our private hibachi chef service is the right format for the East Greenwich hosting tradition. Whether it's an East Greenwich High School graduation dinner at a Greenwich Cove waterfront estate for thirty-two family members who've driven from Massachusetts, Connecticut, and New York, an anniversary celebration at a Goddard State Park-adjacent property where the coastal setting conveys something about the occasion before the food arrives, a birthday dinner at a Main Street corridor home where the host wants a private dining experience that matches the neighborhood's standard, or a corporate executive dinner where out-of-town guests from Boston or New York need to understand immediately that Rhode Island entertaining operates at a different level than they expected — our chef arrives fully equipped and manages every detail from first arrival to final cleanup. The performance runs 90–120 minutes. Premium proteins as the default conversation.`,
    closing:  () =>
      `East Greenwich private events book 3–5 weeks ahead for standard occasions. East Greenwich High School graduation Saturdays in May fill 4–6 weeks out — Kent County families who know their date should reach out early. Greenwich Cove waterfront estate events and summer anniversary dinners: 4–6 weeks. Serving East Greenwich and surrounding Kent County and Providence County communities — Warwick, North Kingstown, Cranston, Coventry, and all of Greater Providence. Starting at $60/adult, $30/child, $600 event minimum. Premium proteins — filet mignon, lobster tail, Wagyu beef — available for any East Greenwich occasion.`,
  },
  // 498 — Lincoln (profileIdx 4)
  {
    headline: () => `Hibachi Catering in Lincoln — Chase Farm, Lincoln Woods & Northern Rhode Island's Suburban Family Community`,
    opening:  () =>
      `Lincoln, Rhode Island is the northern anchor of the Greater Providence suburban corridor — a community of 22,000 where Chase Farm's historic agricultural landscape, Lincoln Woods State Park's outdoor recreation culture, the Lime Rock Athletic Complex's youth sports energy, and a residential community built around family milestone celebrating combine to create consistent demand for private dining that the city's restaurant options alone can't always serve on peak graduation weekends. Lincoln High School's graduation tradition, the Smithfield-adjacent Bryant University community, and a professional community that has built well-designed properties in the Lincoln Hill, Limerock, and Lime Rock neighborhoods all contribute to a private entertaining market with understated but genuine quality expectations.`,
    middle:   () =>
      `Our private hibachi chef service covers the full Lincoln occasion. A Lincoln High School graduation party for thirty-four family members at a Chase Farm-adjacent property where the pastoral New England landscape and the live teppanyaki performance together create an evening that's genuinely unexpected for a community this close to Providence. A birthday celebration at a Lincoln Woods-area home where twenty-six neighbors gather in the backyard for ninety minutes of fire tricks and precision cooking. A family reunion dinner at a Limerock neighborhood property where the extended family hasn't all been in one place since the previous year's graduation — and the private chef is the occasion that makes the gathering worth the drive from Connecticut and Massachusetts. We arrive with everything and leave with everything when dinner is done.`,
    closing:  () =>
      `Lincoln graduation events book 3–5 weeks ahead for May Saturdays. Summer family celebrations and Lincoln Woods-area events: 2–3 weeks. Serving Lincoln and all of Northern Rhode Island — Cumberland, North Smithfield, Smithfield, Providence, Pawtucket, and surrounding Greater Providence communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 499 — Barrington (profileIdx 5)
  {
    headline: () => `Hibachi at Home in Barrington — Nayatt Point, Barrington Yacht Club & Narragansett Bay Waterfront Estate Dining`,
    opening:  () =>
      `Barrington, Rhode Island is the finest residential address along the western shore of Narragansett Bay — a town of 16,000 where the Barrington Yacht Club's traditional summer schedule, Nayatt Point's waterfront estate character, Barrington Beach's community gathering quality, the Sowams Yacht Club's intimate sailing culture, and some of the most carefully maintained residential properties on the New England coast combine to create one of the Ocean State's most gracious private entertaining communities. Barrington High School's graduation tradition, the established professional and executive families who have built properties along the Nayatt Road and Rumstick Road waterfront corridors, and a community standard that expects quality as the baseline rather than the aspiration.`,
    middle:   () =>
      `Our private hibachi chef service at Barrington waterfront properties delivers the teppanyaki experience that matches this community's standard. Whether it's a Barrington High School graduation dinner for thirty-two family members at a Nayatt Point waterfront estate on a May Saturday when every East Bay restaurant is fully committed, an anniversary celebration on a Barrington Yacht Club-adjacent property where the host wants something more personal than Federal Hill can offer, a birthday dinner at a Rumstick Road property where the Narragansett Bay view and the live teppanyaki fire together create an evening that the guest list carries forward for years, or a summer milestone event at a Barrington Beach-adjacent home where the community knows what quality looks like — our chef arrives with everything: teppan grill, propane, all proteins, fried rice, vegetables, sauces, plates, chopsticks. Full cleanup when dinner is done.`,
    closing:  () =>
      `Barrington events book 3–5 weeks ahead for standard occasions. Barrington High School graduation Saturdays in May and summer Narragansett Bay waterfront events: 4–6 weeks. Rehearsal dinners at Barrington waterfront estates: as early as the venue is confirmed. Serving Barrington and all of the East Bay — Bristol, Warren, East Providence, Providence, and all of Greater Rhode Island. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 500 — Bristol (profileIdx 6)
  {
    headline: () => `Hibachi Catering in Bristol — Colt State Park, Bristol Harbor & Roger Williams University Graduation Dining`,
    opening:  () =>
      `Bristol, Rhode Island is the quintessential New England harbor town — a community of 22,000 where Independence Park's Fourth of July parade tradition (the oldest continuous Independence Day parade in the United States), Colt State Park's sweeping Narragansett Bay landscape, Bristol Harbor's working waterfront aesthetic, Hope Street's Federal-era architectural corridor, King Philip Distillery's artisan local identity, and Roger Williams University's hilltop campus above Mount Hope Bay make Bristol one of Rhode Island's most distinctive communities for private entertaining. The professional and executive families who have renovated historic Hope Street properties and built contemporary estates along the bay's western shore form a private hosting community with expectations calibrated by the town's own historical self-regard.`,
    middle:   () =>
      `Our private hibachi chef service covers every Bristol occasion. Whether it's a Roger Williams University graduation dinner for thirty-six family members at a Bristol Harbor-adjacent property on the late May Saturday when every waterfront restaurant in the East Bay is fully booked, an anniversary celebration at a Colt State Park-area estate where the coastal landscape and the live teppanyaki performance together create an evening the host remembers as their finest, a birthday dinner on a Hope Street-adjacent terrace where thirty guests from across New England gather for a meal that matches the setting's character, or a summer milestone event at a Bristol waterfront property where the sunset over Narragansett Bay is visible from the grill — our chef arrives with everything and leaves with everything when dinner is done.`,
    closing:  () =>
      `Bristol graduation events book 4–6 weeks ahead for Roger Williams University commencement and Bristol High School graduation Saturdays in May. Summer Narragansett Bay waterfront events: 3–5 weeks. Standard Bristol events outside graduation season: 2–3 weeks. Serving Bristol and all of the East Bay — Barrington, Warren, East Providence, Providence, and all of Greater Rhode Island. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 501 — Newport (profileIdx 7)
  {
    headline: () => `Private Hibachi Chef in Newport — Cliff Walk, The Breakers, Bellevue Avenue & Aquidneck Island Vacation Rental Dining`,
    opening:  () =>
      `Newport, Rhode Island is one of New England's most layered destinations — a city of 24,000 that carries simultaneously the Gilded Age weight of The Breakers, Marble House, and Bellevue Avenue's mansion corridor, the working waterfront energy of Bowen's Wharf and Thames Street's restaurant and bar scene, the natural drama of the Cliff Walk's forty-yard Atlantic views, Ocean Drive's open coastal highway with Fort Adams State Park at its anchor, and the summer social calendar that makes Newport one of America's most consistently booked vacation destinations from Memorial Day through Labor Day. Salve Regina University's Ochre Point campus adds a year-round academic community to the destination's identity. The private hibachi dinner at the Newport vacation rental has become the solution that bachelorette weekends, corporate retreat groups, destination wedding parties, and summer vacation groups reach for when they want the dinner to be as memorable as the mansion visit on Friday and the Cliff Walk on Sunday morning.`,
    middle:   () =>
      `Our mobile hibachi chef service covers every Newport occasion. A bachelorette weekend group of eighteen women at a Bellevue Avenue-adjacent vacation rental where Saturday dinner at a Thames Street restaurant was unavailable since April — the chef comes to the property, sets up on the terrace, and runs a performance that becomes the weekend's best story. A corporate retreat closing dinner for twenty-four colleagues at a Fort Adams-area venue adjacent to Narragansett Bay. A destination wedding welcome dinner at a Newport mansion-adjacent property for thirty-eight guests whose only shared evening is the Friday before the ceremony. An anniversary getaway at an Ocean Drive estate where two couples have rented the property for a long weekend and want one evening that matches the setting's ambition. We arrive with everything — propane teppan grill, hand-selected proteins including Wagyu, filet mignon, lobster tail, and scallops — and leave your Newport property exactly as we found it.`,
    closing:  () =>
      `Newport summer weekends (Memorial Day through Labor Day) book 8–10 weeks ahead for prime Saturday dates. Contact us the moment your vacation rental reservation is confirmed. Newport Flower Show weekend, Jazz Festival weekend, and Folk Festival weekend: 10–12 weeks ahead. Bachelorette and bachelor party weekends in July and August are our most constrained Newport dates. Serving all of Newport, Middletown, Portsmouth, and Aquidneck Island. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor cooking is permitted at your rental before booking.`,
  },
  // 502 — Middletown (profileIdx 8)
  {
    headline: () => `Mobile Hibachi Chef in Middletown — Third Beach, Sachuest Point & Aquidneck Island Vacation Rental Dining`,
    opening:  () =>
      `Middletown, Rhode Island shares Aquidneck Island with Newport but carries a different character — a residential community of 16,000 where Third Beach's ocean-facing shoreline, Sachuest Point National Wildlife Refuge's protected coastal landscape, Purgatory Chasm's dramatic rock formation, Norman Bird Sanctuary's 325-acre conservation landscape, and the availability of larger private rental properties make Middletown the island's preferred destination for groups renting vacation homes who want Newport's proximity without Newport's weekend crowds. Whitehall Museum House's colonial history adds the depth of Aquidneck Island's pre-Gilded Age story to the community's already layered character.`,
    middle:   () =>
      `Our mobile hibachi chef service is the dinner that Middletown vacation rental weekends are built around. A family reunion group of twenty-six at a Third Beach-adjacent rental property where Newport restaurant reservations couldn't accommodate the full group. A bachelorette weekend at a larger Middletown vacation home where the group wants a private chef night rather than competing with Newport's weekend crowd for restaurant availability. A corporate team retreat closing dinner at a Sachuest Point-area property where twenty colleagues have spent two days in a strategy off-site and want the final evening to be genuinely celebratory. We arrive with everything — propane teppan grill, all ingredients, complete setup — and leave your Middletown property exactly as we found it.`,
    closing:  () =>
      `Middletown Aquidneck Island summer weekends book 6–8 weeks ahead in peak season. Third Beach-adjacent vacation rental dates in July and August fill similarly to Newport. Standard Middletown events outside peak summer: 3–4 weeks. Serving Middletown and all of Aquidneck Island — Newport, Portsmouth, and all of Rhode Island. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor cooking is permitted at your rental before booking.`,
  },
  // 503 — Portsmouth (profileIdx 9)
  {
    headline: () => `Backyard Hibachi in Portsmouth — Glen Farm, Aquidneck Island & Narragansett Bay Estate Dining`,
    opening:  () =>
      `Portsmouth, Rhode Island is Aquidneck Island's quietest and most residential end — a community of 17,000 where Glen Farm's historic agricultural landscape and equestrian tradition, Sandy Point Beach's Narragansett Bay waterfront character, Portsmouth Abbey School's academic prestige, Common Fence Point's enclosed peninsula community, and the Sakonnet River's eastern shore combine to create a private entertaining culture calibrated to the island's natural landscape rather than its social calendar. The professional and executive families who have built and maintained substantial properties across Portsmouth's rural and waterfront sections host private events at a standard that requires a chef who can match the setting's quality without instruction.`,
    middle:   () =>
      `Our private hibachi chef service covers the full range of Portsmouth occasions. Whether it's a Portsmouth Abbey graduation celebration at a Glen Farm-adjacent estate for twenty-eight family members who have driven from Boston, New York, and Connecticut, a summer anniversary dinner at a Sandy Point Beach waterfront property where the Narragansett Bay view at dusk and the live teppanyaki performance together create an evening impossible to replicate at any Newport restaurant, a birthday milestone celebration at a Common Fence Point property where the peninsula's intimacy allows twenty-four guests to gather without the crowds the Newport end of the island would bring, or a family reunion weekend at a Portsmouth waterfront estate where the entire extended family has gathered for the first time since the previous graduate's ceremony — our chef arrives fully equipped and manages every detail from first setup through final cleanup.`,
    closing:  () =>
      `Portsmouth events book 3–5 weeks ahead for standard occasions. Aquidneck Island summer weekends and Portsmouth Abbey graduation events: 5–7 weeks. Standard Portsmouth events outside peak season: 2–3 weeks. Serving Portsmouth and all of Aquidneck Island — Newport, Middletown, Tiverton, Little Compton, and all of Rhode Island. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 504 — Narragansett (profileIdx 10)
  {
    headline: () => `Mobile Hibachi Chef in Narragansett — Narragansett Town Beach, Scarborough Beach & South County Coastal Dining`,
    opening:  () =>
      `Narragansett, Rhode Island is South County's most iconic beach destination — a community of 15,000 where Narragansett Town Beach's mile-long summer gathering, Scarborough Beach State Park's youth and family culture, Point Judith's working fishing harbor character, The Towers' Victorian stone arch and Narragansett Pier's historic resort identity, and the ocean-facing vacation rental inventory that draws South County summer visitors from across New England and the mid-Atlantic combine to create Rhode Island's most active beach destination market for private events. URI students and families who return to Narragansett for spring graduation celebrations, summer beach house groups who discover that the private hibachi dinner at the rental is the weekend's best decision, and bachelorette groups who want a South County beach house Saturday that's better than anything on the Narragansett restaurant strip — all find the private chef format solves the problem exactly.`,
    middle:   () =>
      `Our mobile hibachi chef service is built for the Narragansett beach house format. A bachelorette group of sixteen at a Narragansett Town Beach-adjacent vacation rental where the Saturday dinner chef comes to the deck and runs a complete teppanyaki show from setup through cleanup. A family reunion of twenty-eight at a Scarborough Beach-area property where the extended family has gathered for a long weekend and wants one evening that matches the effort of bringing everyone together. A URI graduation weekend dinner at a Narragansett beach house for thirty-four family members who drove from Connecticut and Massachusetts — when the Narragansett Pier restaurants were fully booked since March and the solution had to come to the property. We arrive fully equipped with everything and leave your Narragansett rental exactly as we found it.`,
    closing:  () =>
      `Narragansett summer beach house weekends book 4–6 weeks ahead in peak season (late June through Labor Day). URI graduation weekend in May books similarly to peak summer. The Towers-adjacent and Narragansett Pier-area rental properties are our most consistent Narragansett booking locations. Serving Narragansett and all of South County — South Kingstown, North Kingstown, Westerly, Charlestown, and all of coastal Rhode Island. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor cooking is permitted at your rental before booking.`,
  },
  // 505 — South Kingstown (profileIdx 11)
  {
    headline: () => `Hibachi at Home in South Kingstown — URI Campus, Kingston Village & South County Coastal Dining`,
    opening:  () =>
      `South Kingstown, Rhode Island anchors the center of South County — a community of 31,000 where the University of Rhode Island's main campus in Kingston creates one of Rhode Island's most consistent graduation party markets, Peace Dale's historic mill village character provides an authentic small-town counterweight to the vacation destination energy of the nearby coast, Wakefield's commercial center serves as South County's everyday hub, and Worden Pond and Trustom Pond National Wildlife Refuge's agricultural and freshwater landscape gives the inland sections of South Kingstown a character that purely coastal communities rarely share. URI's engineering, nursing, and pharmacy graduation weekends in May create the largest single annual booking window in South County, drawing families from across New England and the Northeast to a community where restaurant availability is genuinely limited on peak graduation Saturdays.`,
    middle:   () =>
      `Our private hibachi chef service covers every South Kingstown occasion. Whether it's a URI graduation dinner for thirty-eight family members at a Kingston-adjacent property where May restaurant availability was exhausted by February — the chef comes to the backyard, sets up in thirty minutes, and runs a two-hour teppanyaki show that feeds everyone at the same time — a beach house group dinner at a Wakefield-area property where twenty-six summer vacation guests want one evening that's genuinely special, an anniversary celebration at a Peace Dale historic home where the mill village setting and live teppanyaki together create an unexpected pairing that the guest list finds unforgettable, or a family reunion weekend at a South Kingstown property where the generations gathered from Massachusetts, Connecticut, and New York for the first time in three years — our chef arrives with everything and leaves with everything when dinner is done.`,
    closing:  () =>
      `South Kingstown URI graduation season (May) fills our South County calendar 4–6 weeks ahead. Summer beach house and vacation rental events: 3–5 weeks in peak season. Standard South Kingstown events outside graduation and summer: 2–3 weeks. Serving South Kingstown and all of South County — Narragansett, North Kingstown, Westerly, Charlestown, and coastal Rhode Island. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 506 — North Kingstown (profileIdx 12)
  {
    headline: () => `Hibachi at Home in North Kingstown — Wickford Village, Quonset & Narragansett Bay Estate Dining`,
    opening:  () =>
      `North Kingstown, Rhode Island sits at the intersection of Rhode Island's multiple geographic identities — a community of 26,000 where Wickford Village's beautifully preserved 18th-century New England maritime character, Quonset State Airport's industrial heritage, Narragansett Bay's western shore waterfront estates, and easy access to both Providence's Greater Metro corridor and South County's coastal communities combine to create a private entertaining market that ranges from intimate historic-village-adjacent dinner parties to large backyard graduation events. North Kingstown High School's graduation tradition and the executive and professional community along the Narragansett Bay western waterfront both generate consistent private event demand across the calendar year.`,
    middle:   () =>
      `Our private hibachi chef service covers every North Kingstown occasion. Whether it's a North Kingstown High School graduation dinner at a Wickford Village-adjacent property for thirty-two family members gathered for a celebration that the historic setting makes feel like more than just a graduation party, a summer anniversary at a Narragansett Bay western shore waterfront estate where twenty-four guests arrive from across Greater Rhode Island for an evening that the chef's performance and the bay view together elevate beyond anything available at a local restaurant, a birthday celebration at a North Kingstown property where the residential community's practical sensibility meets a live teppanyaki performance that surprises everyone present, or a family milestone event in a community that serves as the midpoint between Providence and Newport — our chef arrives with everything and leaves with everything when dinner is done.`,
    closing:  () =>
      `North Kingstown events book 2–4 weeks ahead for standard occasions. North Kingstown High School graduation Saturdays in May and summer Narragansett Bay western shore events: 3–5 weeks. Wickford Village-area events: 2–3 weeks. Serving North Kingstown and all of South County and Greater Providence — South Kingstown, East Greenwich, Warwick, Narragansett, and all of Rhode Island. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 507 — Westerly (profileIdx 13)
  {
    headline: () => `Private Hibachi Chef in Westerly — Watch Hill, Misquamicut Beach & Rhode Island's Western Coastal Dining`,
    opening:  () =>
      `Westerly, Rhode Island occupies the southwestern corner of the Ocean State with a character unlike any other Rhode Island community — a town of 23,000 where Watch Hill's extraordinary concentration of Gilded Age and early 20th-century estate properties, the legendary flying horse carousel, Weekapaug Inn's understated luxury resort character, the Watch Hill Yacht Club's traditional sailing community, and Misquamicut Beach's wide Atlantic-facing sand and unpretentious beach town energy create Westerly's distinctive dual market: the Watch Hill estate event that expects the premium treatment as standard, and the Misquamicut beach house group dinner that wants something better than anything available on the beach strip. Shelter Harbor's tucked-away coastal character adds a third register — the intimate retreat community that values privacy above all else.`,
    middle:   () =>
      `Our private hibachi chef service is the right format for both ends of the Westerly market. Whether it's a Watch Hill estate anniversary dinner for twenty-eight guests at a property whose summer neighbors are recognizable names from Boston finance and New York real estate, a Misquamicut Beach house bachelorette weekend dinner for sixteen women who want Saturday evening at the property rather than competing for a table at a beach town restaurant, a corporate retreat closing dinner at a Shelter Harbor area property where eighteen colleagues have spent the week in a focused off-site and want the final evening to be genuinely celebratory, or a family reunion weekend at a Weekapaug-adjacent vacation rental where the extended family's five households have gathered for the first time since the previous summer — our chef arrives with everything and leaves your Westerly property exactly as we found it. Premium proteins — Wagyu, filet mignon, lobster tail, scallops — are the standard Watch Hill conversation.`,
    closing:  () =>
      `Westerly Watch Hill estate events and Misquamicut Beach summer weekends book 4–6 weeks ahead in peak season. Watch Hill Yacht Club-adjacent events during August: 6–8 weeks ahead. Standard Westerly events outside peak summer: 2–3 weeks. Serving Westerly and all of South County — Charlestown, South Kingstown, North Kingstown, Narragansett, and all of coastal Rhode Island. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor cooking is permitted at any Watch Hill estate or Misquamicut rental property before booking.`,
  },
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const RI_TESTIMONIALS_PROVIDENCE = [
  {
    text: '"Brown University graduation dinner at our College Hill home for thirty-four family members from six states. May Saturday in Providence — every restaurant on Thayer Street and in Wayland Square was booked through March. The private hibachi chef set up on our terrace and ran a full two-hour show that had every age in the family engaged from first flame to last plate. The College Hill setting and the live performance together created an evening that matched the occasion. Booking again for our next Brown graduation."',
    name: 'Kathleen & James F.',
    city: 'Providence, RI',
    event: 'Brown University Graduation Dinner',
    initials: 'KF',
  },
  {
    text: '"Corporate team appreciation dinner for our Providence healthcare company — twenty-six colleagues at a Wayland Square property adjacent to our office corridor. The hibachi format completely transformed what would have been a standard team dinner into a two-hour experience that every colleague is still talking about three months later. Federal Hill has exceptional restaurants. This was better. The format creates a shared moment that a restaurant private room never achieves."',
    name: 'David M.',
    city: 'Providence, RI',
    event: 'Corporate Team Dinner',
    initials: 'DM',
  },
  {
    text: '"Birthday party at our Fox Point home for twenty-eight friends and neighbors. WaterFire was happening three blocks away — we had a private teppanyaki chef in the backyard. The combination was extraordinary. The chef\'s performance matched the energy of the evening completely. Providence has a remarkable food culture and we know Federal Hill well. Nothing there puts a private chef in your own backyard for ninety minutes of live teppanyaki. We\'re already planning the next occasion."',
    name: 'Christina L.',
    city: 'Providence, RI',
    event: 'Birthday Party',
    initials: 'CL',
  },
]

const RI_TESTIMONIALS_CRANSTON = [
  {
    text: '"Cranston East graduation dinner at our backyard for forty-two family members from four states. The chef arrived exactly on time, set up on our patio in twenty minutes, and held the entire group — from my mother-in-law to the graduate\'s eight-year-old cousins — engaged for two full hours. Every restaurant in Cranston and Providence was booked solid for that May Saturday. Private hibachi was the right call and the only one that worked for our group size. Already planning for my younger son\'s graduation."',
    name: 'Maria & Anthony C.',
    city: 'Cranston, RI',
    event: 'Cranston East Graduation Dinner',
    initials: 'MC',
  },
  {
    text: '"Birthday celebration at our Knightsville home for thirty guests. The chef\'s performance was exceptional — fire tricks, flying shrimp, and every protein cooked to perfection. Our family tradition has always been to celebrate big occasions at home, and private hibachi is the format that matches that tradition at the level it deserves. Three of our guests called the next week to ask for the contact information for their own events."',
    name: 'Robert F.',
    city: 'Cranston, RI',
    event: 'Birthday Party',
    initials: 'RF',
  },
  {
    text: '"Family reunion dinner at our Cranston home for twenty-eight relatives who come in from Massachusetts and Connecticut every summer. The hibachi format kept everyone at the same table for two hours — the cousins, the grandparents, the teenagers who usually disappear after five minutes. Rhode Island has a beautiful outdoor summer culture and our backyard is set up for exactly this kind of evening. The chef completed it. Already booked for next summer."',
    name: 'Teresa V.',
    city: 'Cranston, RI',
    event: 'Family Reunion Dinner',
    initials: 'TV',
  },
]

const RI_TESTIMONIALS_WARWICK = [
  {
    text: '"Pilgrim High School graduation party at our Warwick home for thirty-eight family members. The chef set up on our back lawn, ran a complete two-hour teppanyaki show, and kept everyone from the graduate\'s kindergarten-age cousins to my 78-year-old father genuinely entertained the entire time. Every restaurant on Bald Hill Road was fully committed for that Saturday by March. Private hibachi solved the problem completely and produced a better evening than any of them could have."',
    name: 'Linda & Paul D.',
    city: 'Warwick, RI',
    event: 'Pilgrim HS Graduation Party',
    initials: 'LD',
  },
  {
    text: '"Anniversary dinner at our Warwick Neck home for twenty-two guests. The Narragansett Bay waterfront setting and the live teppanyaki performance together created an evening that genuinely surprised everyone. My husband and I have celebrated at some excellent Providence restaurants over the years. This was distinctly better — more personal, more memorable, and the chef\'s attention to our group from first setup to complete cleanup was exceptional throughout."',
    name: 'Susan & Mark R.',
    city: 'Warwick, RI',
    event: 'Anniversary Dinner',
    initials: 'SR',
  },
  {
    text: '"Veterans graduation dinner at our Warwick home for thirty-two family members. The entire extended family — two sides, three generations, multiple dietary preferences — gathered in the backyard and the chef handled every detail without a single hitch. Premium filet mignon for the graduate, shrimp and salmon for the vegetable-forward relatives, chicken and steak for everyone else. The cleanup was complete before the last guest left. Already planning the next one."',
    name: 'Patricia N.',
    city: 'Warwick, RI',
    event: 'Veterans HS Graduation Dinner',
    initials: 'PN',
  },
]

const RI_TESTIMONIALS_EAST_GREENWICH = [
  {
    text: '"East Greenwich High School graduation dinner at our Greenwich Cove property for twenty-eight family members. The estate setting, the Narragansett Bay view from the terrace, and the private hibachi chef together created an evening that forty-five minutes in a restaurant could never have produced. Guests came from Boston, New York, and Connecticut — everyone agreed it was the finest dinner of the graduation weekend. East Greenwich has a standard. This met it without effort."',
    name: 'William & Anne H.',
    city: 'East Greenwich, RI',
    event: 'EG High School Graduation Dinner',
    initials: 'WH',
  },
  {
    text: '"Anniversary dinner at our Main Street corridor home for twenty guests. The chef arrived precisely on schedule, set up on our stone terrace in fifteen minutes, and ran a performance that matched the occasion completely — filet mignon and lobster tail for the anniversary couple, premium proteins for everyone else. East Greenwich has excellent restaurants. A private chef at your own home is a different category of experience entirely. Three guests booked their own events before the chef left."',
    name: 'George & Catherine B.',
    city: 'East Greenwich, RI',
    event: 'Anniversary Dinner',
    initials: 'GB',
  },
  {
    text: '"Birthday dinner at our Goddard Park-adjacent property for twenty-four guests including colleagues from our medical practice and longstanding family friends. The coastal setting, the live teppanyaki performance, and the premium protein menu together created the kind of evening Kent County can deliver when it sets its standard intentionally. My colleagues from Massachusetts had never seen private hibachi at a New England property. They\'re already planning their own."',
    name: 'Dr. Jennifer S.',
    city: 'East Greenwich, RI',
    event: 'Birthday Dinner Party',
    initials: 'JS',
  },
]

const RI_TESTIMONIALS_LINCOLN = [
  {
    text: '"Lincoln High School graduation dinner at our home near Chase Farm for thirty-two family members from three states. The New England landscape of Lincoln in late May and the live teppanyaki performance in the backyard together created an evening that none of our guests expected at this level. Every Providence and Pawtucket restaurant with a private room was unavailable by April. Private hibachi gave us something better. Already planning for my younger daughter\'s graduation."',
    name: 'Karen & Thomas M.',
    city: 'Lincoln, RI',
    event: 'Lincoln HS Graduation Dinner',
    initials: 'KM',
  },
  {
    text: '"Birthday party at our Lincoln Woods-area home for twenty-six neighbors and friends. The chef held the crowd for ninety solid minutes — fire tricks, flying shrimp, the complete teppanyaki performance. Northern Rhode Island doesn\'t have many private dining options at this level. The format delivered exactly what we needed: everyone at the same table, same experience, all evening. Several guests booked their own events before the month was out."',
    name: 'Michael D.',
    city: 'Lincoln, RI',
    event: 'Birthday Party',
    initials: 'MD',
  },
  {
    text: '"Family celebration at our Limerock neighborhood home for twenty-four relatives who travel from Connecticut and Massachusetts for our annual summer gathering. The hibachi format kept everyone engaged from the youngest to the oldest — the cousins who are usually on their phones were watching the chef from the first flame. Lincoln is a community that values quality quietly. This delivered on that value completely."',
    name: 'Patricia R.',
    city: 'Lincoln, RI',
    event: 'Family Celebration',
    initials: 'PR',
  },
]

const RI_TESTIMONIALS_BARRINGTON = [
  {
    text: '"Graduation dinner at our Nayatt Point waterfront estate for thirty-two family members from four states. The chef set up on our bay-facing terrace, ran a complete two-hour teppanyaki show, and managed every detail from first flame to final cleanup without any direction from us. The Narragansett Bay view and the live hibachi performance together created an evening that our guests are still referencing four months later. East Bay restaurants were fully committed for that May Saturday by March. This was the right decision."',
    name: 'James & Elizabeth W.',
    city: 'Barrington, RI',
    event: 'Graduation Dinner',
    initials: 'JW',
  },
  {
    text: '"Anniversary dinner at our Barrington Yacht Club-adjacent property for twenty-four guests. My husband and I wanted something more personal than Providence or Federal Hill and this delivered exactly that — a private chef in our own backyard, every guest at the same performance, Narragansett Bay in the background. The chef was exceptional from first setup through final pack-out. Three of our guests booked their own events before the summer was out."',
    name: 'Catherine M.',
    city: 'Barrington, RI',
    event: 'Anniversary Dinner',
    initials: 'CM',
  },
  {
    text: '"Birthday dinner at our Rumstick Road property for twenty-eight neighbors and friends. Barrington has a standard for everything it does — the schools, the sailing, the social life on the water — and this matched it. The chef arrived on time, set up beautifully on our outdoor terrace, and delivered a performance that surprised everyone who had never experienced hibachi at home. We are already planning the next occasion."',
    name: 'Robert H.',
    city: 'Barrington, RI',
    event: 'Birthday Dinner',
    initials: 'RH',
  },
]

const RI_TESTIMONIALS_BRISTOL = [
  {
    text: '"Roger Williams University graduation dinner at our Bristol Harbor-adjacent property for thirty-four family members who drove from Connecticut, Massachusetts, and New York. Every waterfront restaurant in the East Bay was committed for that late May Saturday by April. The private hibachi chef set up on our terrace with the harbor visible behind the grill, ran a complete two-hour performance, and left the property spotless. The setting and the show together created an evening that matched the occasion."',
    name: 'Thomas & Mary F.',
    city: 'Bristol, RI',
    event: 'Roger Williams University Graduation',
    initials: 'TF',
  },
  {
    text: '"Anniversary dinner at our Colt State Park-area property for twenty-two guests. My partner and I had been looking for a private dining format that matched Bristol\'s character — not a Federal Hill restaurant, not a Providence event space, something genuinely private and genuinely excellent. The hibachi chef delivered exactly that. The coastal setting, the live performance, and the complete cleanup made it the finest dinner we have given in this home."',
    name: 'David & Jonathan B.',
    city: 'Bristol, RI',
    event: 'Anniversary Dinner',
    initials: 'DB',
  },
  {
    text: '"Summer birthday celebration at our Hope Street property for thirty guests from across New England. Bristol has exceptional character in every dimension — architecture, history, harbor — and private hibachi matched that character completely. The chef was punctual, professional, and genuinely engaging from the first flame through the last plate. Our guests are still talking about it. We will absolutely be doing this again."',
    name: 'Patricia C.',
    city: 'Bristol, RI',
    event: 'Birthday Celebration',
    initials: 'PC',
  },
]

const RI_TESTIMONIALS_NEWPORT = [
  {
    text: '"Bachelorette weekend at our Bellevue Avenue-adjacent vacation rental for eighteen women from six states. Saturday dinner at every Thames Street restaurant we contacted had been booked since April. The private hibachi chef came to our property, set up on the rear terrace, and ran a show for ninety minutes that the entire group agreed was the weekend\'s best moment — better than the Cliff Walk, better than The Breakers tour, better than anything on the Newport social calendar that weekend. We will be booking again for the next bachelorette in our group."',
    name: 'Alexandra R.',
    city: 'Newport, RI',
    event: 'Bachelorette Weekend',
    initials: 'AR',
  },
  {
    text: '"Corporate retreat closing dinner for twenty-two colleagues at a Fort Adams-area event property. The hibachi format was exactly right for a group that had been in strategy sessions for two days — interactive, genuinely entertaining, and the best closing dinner we have done in five years of Newport retreats. Wagyu beef and lobster tail upgrades were the right call. The chef handled everything from first setup through complete pack-out. Already planning the next year\'s retreat around this format."',
    name: 'Michael D.',
    city: 'Newport, RI',
    event: 'Corporate Retreat Dinner',
    initials: 'MD',
  },
  {
    text: '"Destination wedding welcome dinner at our Ocean Drive estate property for thirty-six guests the Friday before the ceremony. We needed something memorable that the full wedding party could experience together before the weekend began in earnest. The private hibachi chef delivered precisely that — guests gathered around a teppan grill on an Ocean Drive estate with the Atlantic in the background, a two-hour performance from a genuinely excellent chef, complete cleanup. Newport set the bar for the weekend. This cleared it."',
    name: 'Sarah & William L.',
    city: 'Newport, RI',
    event: 'Wedding Welcome Dinner',
    initials: 'SL',
  },
]

const RI_TESTIMONIALS_MIDDLETOWN = [
  {
    text: '"Family reunion at our Third Beach-adjacent rental in Middletown for twenty-six relatives from five states. We chose Middletown for the larger property and a quieter Aquidneck Island experience than Newport\'s commercial center offers. The private hibachi chef was the weekend\'s centerpiece dinner — thirty-five minutes of setup, ninety minutes of performance, complete cleanup. Everyone from the eight-year-olds to the grandparents was genuinely engaged the entire time. Already booked the same property and the same chef for next summer."',
    name: 'Linda & Paul S.',
    city: 'Middletown, RI',
    event: 'Family Reunion Dinner',
    initials: 'LS',
  },
  {
    text: '"Bachelorette weekend at our Middletown vacation home for fourteen women. We chose Middletown specifically for the property size and the privacy. The chef came to the house, set up on the back deck, and ran a show that became the story the entire group told for months. Newport-adjacent without Newport\'s weekend crowds — and a private chef at the house instead of competing for a restaurant table. Exactly right."',
    name: 'Emily T.',
    city: 'Middletown, RI',
    event: 'Bachelorette Weekend',
    initials: 'ET',
  },
  {
    text: '"Corporate team retreat closing dinner at a Sachuest Point-area venue for twenty colleagues. Middletown was the right choice for our two-day off-site — quiet, private, close enough to Newport for the first night and our own chef on the property for the second. The hibachi performance was the right format for a team that had been in focused work sessions all day — genuinely interactive, entertaining for every personality type, and excellent food from first protein to final plate."',
    name: 'Andrew K.',
    city: 'Middletown, RI',
    event: 'Corporate Team Dinner',
    initials: 'AK',
  },
]

const RI_TESTIMONIALS_PORTSMOUTH = [
  {
    text: '"Anniversary dinner at our Sandy Point waterfront property for twenty guests. Portsmouth is the island\'s quiet end — generous properties, complete privacy, and the Narragansett Bay view from the backyard lawn is exactly the setting we wanted. The private hibachi chef set up on the lawn, ran a full performance with the bay behind the grill, and delivered a dinner that surpassed anything Newport\'s restaurant corridor could have offered. A perfect evening."',
    name: 'George & Margaret V.',
    city: 'Portsmouth, RI',
    event: 'Anniversary Dinner',
    initials: 'GV',
  },
  {
    text: '"Portsmouth Abbey School graduation celebration at our Glen Farm-adjacent property for twenty-eight family members from Boston, New York, and Washington. The chef arrived exactly on schedule, set up beautifully on our stone terrace, and ran a two-hour teppanyaki show that the entire guest list agreed was the finest dinner of the graduation weekend. Portsmouth\'s character lends itself to this format — private, excellent, away from the Newport weekend energy."',
    name: 'William & Anne D.',
    city: 'Portsmouth, RI',
    event: 'Portsmouth Abbey Graduation',
    initials: 'WD',
  },
  {
    text: '"Family reunion weekend at our Common Fence Point property for twenty-four relatives from three states. The chef came to the peninsula, set up on our outdoor terrace, and delivered ninety minutes of performance that kept everyone — from the young cousins to the grandparents — entirely engaged. Portsmouth\'s peninsula character gives this kind of gathering a contained, connected feeling that larger venues don\'t. The private hibachi format matched it exactly."',
    name: 'Susan R.',
    city: 'Portsmouth, RI',
    event: 'Family Reunion Dinner',
    initials: 'SR',
  },
]

const RI_TESTIMONIALS_NARRAGANSETT = [
  {
    text: '"Bachelorette weekend at our Narragansett Town Beach-adjacent rental for sixteen women from the Northeast. Every Narragansett Pier restaurant with space for sixteen was either fully committed or required a minimum spend that didn\'t fit the occasion. The private hibachi chef came to the deck, set up in twenty minutes, and ran a show that the entire group is still describing as the best part of the South County weekend. Easy call. Already planning for the next one."',
    name: 'Jessica M.',
    city: 'Narragansett, RI',
    event: 'Bachelorette Weekend',
    initials: 'JM',
  },
  {
    text: '"URI graduation weekend dinner at our Narragansett beach house for thirty-four family members from Connecticut and Massachusetts. May graduation Saturday — every Narragansett and South Kingstown restaurant with a private room had been committed since winter. The chef came to the property, set up on the back deck, and delivered a dinner that forty minutes later every guest agreed was exactly the right occasion for the moment. Complete cleanup. The rental was spotless when we left."',
    name: 'Daniel & Karen F.',
    city: 'Narragansett, RI',
    event: 'URI Graduation Dinner',
    initials: 'DF',
  },
  {
    text: '"Family beach house reunion at our Scarborough Beach-area rental for twenty-eight relatives for a long weekend. The private hibachi dinner on Saturday evening was the first time everyone — the teenagers, the young children, the grandparents — was genuinely at the same table for the same experience at the same time. Rhode Island beach house weekends build around meals. This one built around the chef and kept everyone at the table for two hours. We\'ll be doing this every summer."',
    name: 'Patricia H.',
    city: 'Narragansett, RI',
    event: 'Family Beach House Reunion',
    initials: 'PH',
  },
]

const RI_TESTIMONIALS_SOUTH_KINGSTOWN = [
  {
    text: '"URI graduation dinner at our Kingston-area home for thirty-eight family members from New England and the mid-Atlantic. May graduation Saturday — South County restaurant availability was essentially zero by March for a group our size. The chef came to our backyard, set up in thirty minutes, and ran a full two-hour teppanyaki show that served everyone at the same time and kept every generation at the table. The graduate said it was better than any restaurant dinner the family had ever hosted."',
    name: 'Richard & Nancy B.',
    city: 'South Kingstown, RI',
    event: 'URI Graduation Dinner',
    initials: 'RB',
  },
  {
    text: '"Summer vacation rental group dinner at our Wakefield-area beach property for twenty-four guests. The group had a full South County weekend planned — Narragansett Beach Saturday morning, and a private chef for Saturday evening. The hibachi format was perfect for the size and the setting. The chef managed every detail from the deck setup through the final cleanup and left the rental exactly as we found it. Everyone took the contact information before the chef\'s van left the driveway."',
    name: 'Christine O.',
    city: 'South Kingstown, RI',
    event: 'Vacation Rental Group Dinner',
    initials: 'CO',
  },
  {
    text: '"Anniversary dinner at our Peace Dale home for twenty guests who came from across New England. South Kingstown has a quiet character that I wanted the evening to match — not a Newport restaurant, not a Providence Federal Hill table, something genuinely private and genuinely excellent. The chef delivered exactly that. The Peace Dale setting, the live performance, and the complete service from first arrival through final cleanup made it the finest dinner we have hosted in this home."',
    name: 'Matthew & Laura S.',
    city: 'South Kingstown, RI',
    event: 'Anniversary Dinner',
    initials: 'MS',
  },
]

const RI_TESTIMONIALS_NORTH_KINGSTOWN = [
  {
    text: '"North Kingstown High School graduation dinner at our Wickford Village-adjacent property for thirty-two family members from across New England. The chef set up on our stone terrace, ran a complete two-hour teppanyaki performance, and managed every detail from arrival through pack-out without any direction from us. The Wickford Village setting and the live hibachi show together created an evening that the graduate is still referencing months later. We will be doing this for every milestone from now on."',
    name: 'Kevin & Patricia M.',
    city: 'North Kingstown, RI',
    event: 'North Kingstown HS Graduation',
    initials: 'KM',
  },
  {
    text: '"Birthday celebration at our Narragansett Bay western shore property for twenty-eight guests. North Kingstown sits between Providence and South County in a way that makes it genuinely convenient for guests from both directions — and the bay view from our backyard provided the setting the occasion deserved. The chef\'s performance matched the setting. Full setup, full show, complete cleanup. Three guests contacted us within the week asking for the booking information."',
    name: 'Jennifer A.',
    city: 'North Kingstown, RI',
    event: 'Birthday Celebration',
    initials: 'JA',
  },
  {
    text: '"Family reunion dinner at our Wickford-area property for twenty-four relatives from four states. North Kingstown\'s central position in Rhode Island meant that relatives coming from Providence, from Newport, and from South County all had a reasonable drive. The chef handled the full gathering — three generations, multiple dietary restrictions, every age group genuinely engaged — from first flame through final cleanup. The best dinner the extended family has shared in years."',
    name: 'Robert C.',
    city: 'North Kingstown, RI',
    event: 'Family Reunion Dinner',
    initials: 'RC',
  },
]

const RI_TESTIMONIALS_WESTERLY = [
  {
    text: '"Watch Hill estate dinner for twenty-eight guests at our summer property. We have hosted many private events at this home over the years — the Watch Hill community has a standard for entertaining that my family takes seriously. The private hibachi chef matched that standard without effort: precise timing, exceptional proteins (Wagyu and lobster tail as the main course), complete engagement with every guest around the grill, and cleanup that left the property exactly as we found it. We are introducing this format to every Watch Hill neighbor we know."',
    name: 'Charles & Victoria H.',
    city: 'Westerly, RI',
    event: 'Watch Hill Estate Dinner',
    initials: 'CH',
  },
  {
    text: '"Bachelorette weekend at our Misquamicut Beach rental for fourteen women from New York and Connecticut. Saturday dinner on the South County beach strip was not going to work for our group — the options were either too crowded or too casual for what we wanted the evening to be. Private hibachi at the property was exactly right: the chef came to the deck, set up, and ran a show that the group is still talking about. Westerly has more going for it than people from outside Rhode Island realize. This dinner proved it."',
    name: 'Rebecca N.',
    city: 'Westerly, RI',
    event: 'Bachelorette Weekend',
    initials: 'RN',
  },
  {
    text: '"Corporate retreat closing dinner at our Shelter Harbor area property for sixteen colleagues. We chose Westerly for the retreat because the distance from our Providence office creates genuine separation from the daily work pattern — and the private hibachi dinner at the property on the final evening was the right format for a group that had been intensely focused for two days. The chef was excellent, the premium proteins were outstanding, and the format created exactly the kind of shared experience that closes a successful off-site."',
    name: 'Thomas W.',
    city: 'Westerly, RI',
    event: 'Corporate Retreat Dinner',
    initials: 'TW',
  },
]

function _getRiTestimonials(citySlug) {
  const map = {
    'providence':      RI_TESTIMONIALS_PROVIDENCE,
    'cranston':        RI_TESTIMONIALS_CRANSTON,
    'warwick':         RI_TESTIMONIALS_WARWICK,
    'east-greenwich':  RI_TESTIMONIALS_EAST_GREENWICH,
    'lincoln':         RI_TESTIMONIALS_LINCOLN,
    'barrington':      RI_TESTIMONIALS_BARRINGTON,
    'bristol':         RI_TESTIMONIALS_BRISTOL,
    'newport':         RI_TESTIMONIALS_NEWPORT,
    'middletown':      RI_TESTIMONIALS_MIDDLETOWN,
    'portsmouth':      RI_TESTIMONIALS_PORTSMOUTH,
    'narragansett':    RI_TESTIMONIALS_NARRAGANSETT,
    'south-kingstown': RI_TESTIMONIALS_SOUTH_KINGSTOWN,
    'north-kingstown': RI_TESTIMONIALS_NORTH_KINGSTOWN,
    'westerly':        RI_TESTIMONIALS_WESTERLY,
  }
  return map[citySlug] ?? RI_TESTIMONIALS_PROVIDENCE
}

// ── Major cities registry ─────────────────────────────────────────────────────
const RI_MAJOR_CITIES = {
  // Batch 1 — Providence Metro
  'providence':     { v: 1, profileIdx: 0,  nearby: ['Cranston', 'East Greenwich', 'Barrington', 'Warwick', 'Lincoln'] },
  'cranston':       { v: 2, profileIdx: 1,  nearby: ['Providence', 'Warwick', 'East Greenwich', 'Lincoln'] },
  'warwick':        { v: 2, profileIdx: 2,  nearby: ['Providence', 'Cranston', 'East Greenwich', 'North Kingstown'] },
  'east-greenwich': { v: 0, profileIdx: 3,  nearby: ['Warwick', 'North Kingstown', 'Providence', 'Cranston'] },
  'lincoln':        { v: 2, profileIdx: 4,  nearby: ['Providence', 'Cranston', 'Warwick'] },
  // Batch 2 — East Bay Waterfront
  'barrington':      { v: 3, profileIdx: 5,  nearby: ['Bristol', 'Warwick', 'Providence', 'East Greenwich'] },
  'bristol':         { v: 3, profileIdx: 6,  nearby: ['Barrington', 'Newport', 'Warwick', 'Providence'] },
  // Batch 3 — Newport & Aquidneck Island
  'newport':         { v: 4, profileIdx: 7,  nearby: ['Middletown', 'Portsmouth', 'Bristol', 'Barrington'] },
  'middletown':      { v: 4, profileIdx: 8,  nearby: ['Newport', 'Portsmouth', 'Bristol'] },
  'portsmouth':      { v: 4, profileIdx: 9,  nearby: ['Newport', 'Middletown', 'Bristol', 'Barrington'] },
  // Batch 4 — South County Coastal
  'narragansett':    { v: 5, profileIdx: 10, nearby: ['South Kingstown', 'North Kingstown', 'Westerly'] },
  'south-kingstown': { v: 5, profileIdx: 11, nearby: ['Narragansett', 'North Kingstown', 'Westerly'] },
  'north-kingstown': { v: 5, profileIdx: 12, nearby: ['South Kingstown', 'Narragansett', 'East Greenwich', 'Warwick'] },
  'westerly':        { v: 5, profileIdx: 13, nearby: ['South Kingstown', 'Narragansett', 'North Kingstown'] },
}

// ── Custom meta overrides ─────────────────────────────────────────────────────
const RI_CUSTOM_META = {
  'providence':     { title: 'Private Hibachi Chef in Providence, RI | Corporate Events & Brown University Celebrations',               desc: 'Your private hibachi chef comes to College Hill, Federal Hill, Fox Point, and all of Providence — corporate team dinners, Brown and RISD graduation parties, and milestone events. No restaurant reservation, complete cleanup. From $60/adult.' },
  'cranston':       { title: 'Hibachi at Home in Cranston, RI | Private Chef for Graduation Parties & Family Events',                   desc: 'Cranston graduation parties, family birthday milestones, and backyard celebrations — your private hibachi chef arrives at your Cranston home with the full teppanyaki setup. From $60/adult.' },
  'warwick':        { title: 'Hibachi at Home in Warwick, RI | Private Chef for Graduation Parties & Family Celebrations',              desc: 'Warwick graduation parties, family milestone events, and backyard celebrations — a certified hibachi chef arrives at your Warwick home fully equipped for the live teppanyaki experience. From $60/adult.' },
  'east-greenwich': { title: 'Hibachi at Home in East Greenwich, RI | Private Chef for Estate Dinners & Milestone Celebrations',        desc: 'Greenwich Cove estate dinners, East Greenwich Yacht Club-adjacent celebrations, and milestone events — your private hibachi chef arrives at your East Greenwich property with the full teppanyaki setup. From $60/adult.' },
  'lincoln':         { title: 'Hibachi Catering in Lincoln, RI | Private Chef for Graduation Parties & Family Events',                    desc: 'Lincoln High School graduation parties, family milestone celebrations, and Northern Rhode Island backyard events — a certified hibachi chef arrives at your Lincoln property with everything needed. From $60/adult.' },
  'barrington':      { title: 'Hibachi at Home in Barrington, RI | Private Chef for Waterfront Estate Dinners & Graduation Parties',    desc: 'Barrington waterfront estate dinners, Nayatt Point-adjacent celebrations, and East Bay graduation parties — your private hibachi chef arrives at your Barrington property with the full teppanyaki setup. From $60/adult.' },
  'bristol':         { title: 'Hibachi Catering in Bristol, RI | Private Chef for Estate Dinners & RWU Graduation Parties',             desc: 'Bristol waterfront estate dinners, Roger Williams University graduation parties, and Colt State Park-adjacent celebrations — a certified hibachi chef at your Bristol property. From $60/adult.' },
  'newport':         { title: 'Private Hibachi Chef in Newport, RI | Vacation Rental Dinners, Bachelorette Weekends & Mansion Events',  desc: 'Newport vacation rental dinners, bachelorette weekends, mansion estate events, and corporate retreats — your mobile hibachi chef arrives at your Aquidneck Island property. From $60/adult.' },
  'middletown':      { title: 'Mobile Hibachi Chef in Middletown, RI | Vacation Rental Dinners & Aquidneck Island Events',              desc: 'Middletown vacation rental dinners, beach house group events, and Aquidneck Island celebrations — a certified mobile hibachi chef arrives at your Middletown property with everything needed. From $60/adult.' },
  'portsmouth':      { title: 'Backyard Hibachi in Portsmouth, RI | Private Chef for Aquidneck Island Estate Dinners & Family Events',  desc: 'Portsmouth backyard estate dinners, Aquidneck Island family celebrations, and Glen Farm-adjacent milestone events — a certified hibachi chef arrives at your Portsmouth property. From $60/adult.' },
  'narragansett':    { title: 'Mobile Hibachi Chef in Narragansett, RI | Beach House Dinners & South County Coastal Events',            desc: 'Narragansett beach house group dinners, Narragansett Town Beach-adjacent vacation rental events, and South County bachelorette weekends — a mobile hibachi chef comes to your property. From $60/adult.' },
  'south-kingstown': { title: 'Hibachi at Home in South Kingstown, RI | Private Chef for URI Graduation & South County Coastal Events', desc: 'South Kingstown beach house dinners, URI graduation parties, and South County coastal vacation rental events — a certified hibachi chef arrives at your South Kingstown property. From $60/adult.' },
  'north-kingstown': { title: 'Hibachi at Home in North Kingstown, RI | Private Chef for Wickford Events & South County Celebrations',  desc: 'North Kingstown backyard events, Wickford Village-adjacent celebrations, and South County milestone dinners — a certified hibachi chef arrives at your North Kingstown property. From $60/adult.' },
  'westerly':        { title: 'Private Hibachi Chef in Westerly, RI | Watch Hill Estate Dinners & Misquamicut Beach House Events',      desc: 'Westerly Watch Hill estate dinners, Misquamicut Beach vacation rental events, and South County bachelorette weekends — a private hibachi chef arrives at your Westerly property. From $60/adult.' },
}

// ── H1 prefix lookup ──────────────────────────────────────────────────────────
const RI_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in', // 0  — Providence
  'Hibachi at Home in',      // 1  — Cranston
  'Hibachi at Home in',      // 2  — Warwick
  'Hibachi at Home in',      // 3  — East Greenwich
  'Hibachi Catering in',     // 4  — Lincoln
  // Batch 2 (added when built)
  'Hibachi at Home in',      // 5  — Barrington
  'Hibachi Catering in',     // 6  — Bristol
  // Batch 3
  'Private Hibachi Chef in', // 7  — Newport
  'Mobile Hibachi Chef in',  // 8  — Middletown
  'Backyard Hibachi in',     // 9  — Portsmouth
  // Batch 4
  'Mobile Hibachi Chef in',  // 10 — Narragansett
  'Hibachi at Home in',      // 11 — South Kingstown
  'Hibachi at Home in',      // 12 — North Kingstown
  'Private Hibachi Chef in', // 13 — Westerly
]

const RI_THEME_H1_PREFIXES = [
  'Hibachi at Home in',       // T0 — Providence Luxury Suburbs
  'Private Hibachi Chef in',  // T1 — Providence Urban & Corporate
  'Hibachi at Home in',       // T2 — Providence Suburban Family
  'Hibachi Catering in',      // T3 — East Bay Waterfront
  'Private Hibachi Chef in',  // T4 — Newport Luxury & Destination
  'Mobile Hibachi Chef in',   // T5 — South County Coastal
]

// ── Blog posts ────────────────────────────────────────────────────────────────
const RI_BLOG_POSTS = [
  [], // slot 0 — T0 and T3 cities — populated post-audit
  [], // slot 1 — T1 and T4 cities — populated post-audit
  [], // slot 2 — T2 and T5 cities — populated post-audit
]

// ── Main builder ──────────────────────────────────────────────────────────────
export function getRiCityData(citySlug, cityName) {
  const major       = RI_MAJOR_CITIES[citySlug]
  if (!major) return null
  const { v, profileIdx, nearby } = major
  const theme       = RI_IMAGE_THEMES[v]
  const displayName = RI_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Rhode Island',
    stateAbbr:    'RI',
    stateSlug:    'rhode-island',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: RI_HERO_SUBTITLES[v](displayName),
    nearbyCities:      nearby,
    nearbyMajorCities: ['Providence', 'Cranston', 'Warwick', 'Newport', 'Barrington', 'East Greenwich'],
    localHighlights:   RI_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: RI_OCCASIONS[v],
    faqSet:            RI_FAQ_SETS[v](displayName),
    testimonials:      _getRiTestimonials(citySlug),
    uniqueIntroVariant:   profileIdx != null ? 494 + profileIdx : 488 + v,
    uniqueWhyUsVariant:   v,
    uniqueClosingVariant: profileIdx != null ? 494 + profileIdx : 488 + v,
    heroH1Prefix: profileIdx != null
      ? RI_PROFILE_H1_PREFIXES[profileIdx]
      : RI_THEME_H1_PREFIXES[v],
    ...(RI_CUSTOM_META[citySlug]
      ? { metaTitle: RI_CUSTOM_META[citySlug].title, metaDescription: RI_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getRiHowItWorks(citySlug) {
  return RI_HOW_IT_WORKS
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getRiSectionVariant(citySlug) {
  const major = RI_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : 0
  return RI_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getRiCityImage(citySlug) {
  return RI_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getRiSupportImages(citySlug) {
  if (RI_SUPPORT_IMAGES[citySlug]) return RI_SUPPORT_IMAGES[citySlug]
  const major = RI_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : 0
  return RI_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getRiBlogPosts(variant, count) {
  return RI_BLOG_POSTS[variant % RI_BLOG_POSTS.length].slice(0, count)
}
