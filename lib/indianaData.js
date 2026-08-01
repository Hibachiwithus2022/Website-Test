// =============================================================================
// lib/indianaData.js — Indiana Expansion
// 17 cities · 6 geographic themes
// Theme 0: Indianapolis Luxury Suburbs (Carmel, Zionsville)
// Theme 1: Indianapolis Metro & Corporate (Indianapolis)
// Theme 2: North Indianapolis Suburban Family (Fishers, Westfield, Noblesville)
// Theme 3: Indiana College Towns (Bloomington, West Lafayette, Lafayette)
// Theme 4: Northern Indiana (South Bend, Mishawaka, Fort Wayne, Elkhart)
// Theme 5: Indiana Destinations & Southern (Warsaw, Evansville, Jeffersonville, New Albany)
//
// INTRO_VARIANTS indices:  465–470 IN generic · 471–487 IN city-specific
// CLOSING_VARIANTS indices: 465–470 IN generic · 471–487 IN city-specific
// Batch 1 profileIdx 0–4: Indianapolis, Carmel, Fishers, Zionsville, Westfield
// =============================================================================

// ── Display name overrides ────────────────────────────────────────────────────
const IN_CITY_DISPLAY_NAMES = {
  // Batch 2+
  'west-lafayette': 'West Lafayette',
  // Batch 3+
  'south-bend':     'South Bend',
  'fort-wayne':     'Fort Wayne',
  // Batch 4+
  'new-albany':     'New Albany',
}

// ── Hero subtitles ─────────────────────────────────────────────────────────────
const IN_HERO_SUBTITLES = [
  (city) => `Estate Graduation Dinners · Anniversary Celebrations · Executive Dinner Parties · Serving ${city} & Hamilton County`,
  (city) => `Corporate Team Dinners · Lucas Oil Corridor Events · Graduation Celebrations · Serving Indianapolis & Marion County`,
  (city) => `Graduation Parties · Backyard Celebrations · Family Events · Serving ${city} & North Indianapolis`,
  (city) => `University Graduation Dinners · Football Weekends · Campus Milestone Events · Serving ${city} & Indiana College Country`,
  (city) => `Graduation Parties · Corporate Team Events · Community Celebrations · Serving ${city} & Northern Indiana`,
  (city) => `Lake Property Dinners · Vacation Rental Events · Destination Celebrations · Serving ${city} & Indiana's Lake Communities`,
]

// ── Local highlights ───────────────────────────────────────────────────────────
const IN_LOCAL_HIGHLIGHTS = [
  // Theme 0 — Indianapolis Luxury Suburbs
  (city) => [
    `Estate private dining for ${city}'s most discerning hosts`,
    'Perfect for graduation parties, anniversary celebrations, and executive dinner parties',
    `Ideal for Hamilton County and Boone County estate entertaining throughout central Indiana`,
    `Graduation season (May–June) is our highest-demand window — book 4–6 weeks ahead for any Saturday`,
    'Premium proteins available — filet mignon, lobster tail, Wagyu beef, king shrimp',
    'Full setup and complete cleanup — you provide the outdoor space, we handle everything else',
  ],
  // Theme 1 — Indianapolis Metro & Corporate
  (city) => [
    `Private hibachi for Indianapolis corporate events, graduation parties, and milestone dinners`,
    'Perfect for Mass Ave and Broad Ripple home dinners, corporate campus events, and Fountain Square celebrations',
    `Corporate team events scale from 20 to 80+ guests — dual stations for large Indianapolis gatherings`,
    'Butler and IUPUI graduation Saturdays in May fill our calendar 4–6 weeks ahead — reserve early',
    `Serving all of Indianapolis — Meridian-Kessler, Broad Ripple, Fountain Square, Nora, Eagle Creek, and all of Marion County`,
    'Full setup and complete cleanup — nothing for the host to manage',
  ],
  // Theme 2 — North Indianapolis Suburban Family
  (city) => [
    `Backyard private dining for ${city}'s family celebrations and neighborhood events`,
    'Perfect for graduation parties, birthday milestones, and neighborhood gatherings',
    'Ideal for Hamilton County suburban backyards and family-occasion entertaining',
    `Graduation season (May–June) is our fastest-filling period in North Indianapolis — book 4–5 weeks ahead`,
    'Full setup and complete cleanup — you provide the outdoor space, we handle everything else',
    'Dual-station capacity for large graduations and family gatherings of 25–60+ guests',
  ],
  // Theme 3 — Indiana College Towns
  (city) => [
    'Private hibachi for university graduation parties, football weekends, and academic milestone celebrations',
    `Perfect for ${city} families hosting graduation dinners when every restaurant in town is fully booked`,
    `Ideal for birthday celebrations, anniversary dinners, and community events throughout ${city}`,
    `University graduation season is our peak demand period in ${city} — book 4–6 weeks ahead for any Saturday`,
    'Full setup and complete cleanup — you provide the outdoor space, we handle everything else',
    'Premium proteins available — filet mignon, lobster tail, and Wagyu beef upgrades for graduation dinners',
  ],
  // Theme 4 — Northern Indiana
  (city) => [
    `Private hibachi for Northern Indiana celebrations, graduation parties, and corporate milestone events`,
    `Perfect for ${city} community events, family milestones, and birthday celebrations`,
    'Ideal for Notre Dame-adjacent graduation dinners and Northern Indiana corporate entertaining',
    `Northern Indiana graduation season (May–June) books 2–4 weeks ahead — reserve early for Saturday events`,
    'Full setup and complete cleanup — your property is spotless when the chef leaves',
    'Dual-station capacity for large family gatherings and corporate events of 25–60+ guests',
  ],
  // Theme 5 — Indiana Destinations & Southern
  (city) => [
    'Private mobile hibachi for Indiana lake communities, vacation rentals, and destination gatherings',
    `Perfect for ${city} weekend getaways, family reunion dinners, and destination events`,
    `Fully self-contained propane setup — no gas hookup needed at any vacation rental or lake property`,
    'Lake community and vacation rental summer dates fill 4–6 weeks ahead — reserve when your rental is confirmed',
    'Complete pack-out when dinner is done — your vacation rental or lake property stays immaculate',
    'Premium proteins available — filet mignon, lobster tail for destination milestone events',
  ],
]

// ── Occasion Sets ─────────────────────────────────────────────────────────────
const IN_OCCASIONS = [
  // Theme 0 — Indianapolis Luxury Suburbs
  ['Estate Graduation Dinners', 'Anniversary Celebrations', 'Executive Dinner Parties', 'Birthday Milestone Events', 'Corporate Executive Dinners', 'Retirement Celebrations', 'Engagement Parties', 'Rehearsal Dinners', 'Holiday Estate Gatherings', 'Milestone Private Events'],
  // Theme 1 — Indianapolis Metro & Corporate
  ['Corporate Team Dinners', 'Client Appreciation Events', 'Graduation Celebrations', 'Birthday Parties', 'Bachelorette Parties', 'Anniversary Dinners', 'Holiday Corporate Events', 'Executive Dinner Parties', 'Networking Events', 'Engagement Parties'],
  // Theme 2 — North Indianapolis Suburban Family
  ['Graduation Parties', 'Birthday Celebrations', 'Backyard Anniversary Dinners', 'Family Reunions', 'Neighborhood Gatherings', 'Corporate Team Events', 'Holiday Dinners', 'Retirement Parties', 'Milestone Celebrations', 'Bachelorette Parties'],
  // Theme 3 — Indiana College Towns
  ['Graduation Parties', 'University Milestone Dinners', 'Football Weekend Celebrations', 'Birthday Parties', 'Anniversary Dinners', 'Family Reunions', 'Corporate Team Events', 'Engagement Parties', 'Holiday Gatherings', 'Bachelorette Weekends'],
  // Theme 4 — Northern Indiana
  ['Graduation Parties', 'Birthday Celebrations', 'Anniversary Dinners', 'Family Reunions', 'Corporate Team Events', 'Holiday Gatherings', 'Neighborhood Gatherings', 'Retirement Parties', 'Community Celebrations', 'Engagement Parties'],
  // Theme 5 — Indiana Destinations & Southern
  ['Vacation Rental Dinners', 'Family Reunion Weekends', 'Bachelorette Weekends', 'Anniversary Getaways', 'Birthday Parties', 'Lake House Group Dinners', 'Corporate Retreat Dinners', 'Graduation Trips', 'Girls Weekends', 'Holiday Gatherings'],
]

// ── FAQ Sets ──────────────────────────────────────────────────────────────────
const IN_FAQ_SETS = [
  // Theme 0 — Indianapolis Luxury Suburbs
  (city) => [
    {
      q: `Can you set up at an estate or upscale property in ${city}?`,
      a: `Absolutely — estate patios, stone terraces, backyard lawns, and private outdoor dining areas throughout ${city} and Hamilton County are our most common Batch 1 setup environments. We need a flat outdoor area of at least 10×10 feet with vehicle access for equipment. Most ${city} estate properties meet this easily. Our setup is fully self-contained with propane — no outdoor gas hookup required.`,
    },
    {
      q: `Do you serve Hamilton County and Boone County communities?`,
      a: `Yes — we serve all of ${city} and the surrounding Hamilton County and Boone County communities, including Carmel, Fishers, Westfield, Zionsville, Noblesville, Indianapolis, Lebanon, and every community throughout central Indiana. Most locations within 40 miles of Indianapolis fall within our standard service area.`,
    },
    {
      q: `How far ahead should I book for ${city} graduation season?`,
      a: `Graduation season (May–June) is our highest-demand period in the ${city} market. We recommend booking 4–6 weeks ahead for any graduation Saturday event. Carmel High School and Zionsville Community High School graduation Saturdays fill our calendar fastest — families who know their date should contact us as soon as the date is confirmed. Standard non-graduation events: 2–3 weeks out.`,
    },
    {
      q: `Can you accommodate premium proteins for ${city} estate events?`,
      a: `Yes — filet mignon, lobster tail, Wagyu beef, king shrimp, and scallops are all available as per-guest upgrades at any ${city} event. Premium protein upgrades are common at estate graduation dinners, anniversary celebrations, and executive dinner parties throughout the ${city} community. Specify your protein preferences when you book.`,
    },
    {
      q: `What's the minimum for a ${city} private hibachi event?`,
      a: `Our standard pricing is $60 per adult, $30 per child (ages 4–12), with a $600 event minimum. Most ${city} estate events run 18–45 guests. For gatherings over 25, we bring dual chef stations to maintain quality and timing. Premium protein upgrades are available per guest above the base rate.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No travel fee for ${city} and all of Hamilton County and Boone County. For events more than 45 miles from our nearest Indiana chef base, a modest travel fee may apply — always disclosed upfront before you book. Most ${city}-area events fall comfortably within our standard service radius.`,
    },
  ],
  // Theme 1 — Indianapolis Metro & Corporate
  (city) => [
    {
      q: `Can you set up at an Indianapolis corporate venue or private home?`,
      a: `Yes — corporate outdoor spaces, private residential properties, rooftop terraces, and backyard venues throughout Indianapolis and Marion County are among our most common setups. We need a flat outdoor area of at least 10×10 ft with vehicle access. Most Indianapolis properties — from Broad Ripple backyards to Meridian-Kessler patios to corporate outdoor venues — meet this easily.`,
    },
    {
      q: `What Indianapolis neighborhoods and surrounding communities do you serve?`,
      a: `We serve all of Indianapolis — Broad Ripple, Mass Ave, Fountain Square, Meridian-Kessler, Butler-Tarkington, Nora, Eagle Creek, Irvington, Castleton, and every neighborhood throughout Marion County. We also serve Carmel, Fishers, Westfield, Zionsville, Noblesville, Greenwood, Avon, and all of the greater Indianapolis metro. Most locations within 40 miles of Monument Circle are within our standard service area.`,
    },
    {
      q: `Can you handle large corporate team events for Indianapolis companies?`,
      a: `Absolutely — corporate team dinners, client appreciation events, and holiday party setups are a major part of our Indianapolis business. We've run events for Eli Lilly, Salesforce-area corporate teams, healthcare groups, professional services firms, and manufacturing companies throughout Marion County. For groups over 25, we bring two chef stations running in parallel. Corporate campus outdoor spaces and residential backyard venues both work perfectly.`,
    },
    {
      q: `How far in advance should I book for Indianapolis graduation parties?`,
      a: `Butler University and IUPUI graduation Saturdays in May fill our Indianapolis calendar 4–6 weeks ahead. Corporate holiday events from October through December also book quickly — reserve 4–5 weeks ahead for Friday or Saturday events. Standard Indianapolis weeknight events: 1–2 weeks' notice is usually sufficient.`,
    },
    {
      q: `Can you set up at an Indianapolis rooftop, patio, or urban backyard?`,
      a: `Yes — Indianapolis urban properties, rooftop terraces, courtyard venues, and backyard spaces are all excellent hibachi setups. We need a flat outdoor area of at least 10×10 ft. For properties with HOA or building management, we coordinate in advance when needed. We do not cook in enclosed indoor spaces without proper outdoor ventilation.`,
    },
    {
      q: `Is there a travel fee for Indianapolis events?`,
      a: `No travel fee for Indianapolis and all of Marion County, and no travel fee for most Hamilton County communities (Carmel, Fishers, Westfield, Zionsville, Noblesville). For events more than 45 miles from our nearest Indiana chef base, a modest travel fee may apply — always disclosed upfront before you book.`,
    },
  ],
  // Theme 2 — North Indianapolis Suburban Family
  (city) => [
    {
      q: `Can hibachi be set up in a ${city} backyard or patio?`,
      a: `Yes — suburban backyards and patios throughout ${city} and Hamilton County are our most common setup environment. We need a flat area of at least 10×10 ft. Deck, lawn, paver patio, or stone patio all work perfectly. Our setup is fully self-contained with propane — we bring everything and take everything with us when dinner is done.`,
    },
    {
      q: `Do you serve ${city} and surrounding Hamilton County communities?`,
      a: `Yes — we serve all of ${city} and the surrounding Hamilton County communities, including Carmel, Fishers, Westfield, Noblesville, Zionsville, and Indianapolis. Most locations in the North Indianapolis corridor fall within our standard service radius with no added travel fee.`,
    },
    {
      q: `How far in advance should I book for a ${city} graduation party?`,
      a: `Graduation season (May–June) is our highest-demand window across all of Hamilton County. We recommend booking 4–5 weeks in advance for any May or June Saturday event in ${city}. Hamilton Southeastern, Fishers, Carmel, and Westfield High School graduation Saturdays fill our calendar fastest — contact us as soon as your date is set.`,
    },
    {
      q: `Can you handle a large graduation or milestone party in ${city}?`,
      a: `Absolutely — graduation parties of 25–60 guests are our most common bookings in the ${city} area. For groups over 25, we bring two chef stations running in parallel to keep food quality and timing consistent. Large milestone events — graduation dinners, anniversary celebrations, birthday milestones — are a specialty throughout Hamilton County.`,
    },
    {
      q: `Do you do corporate team events for ${city} area companies?`,
      a: `Yes — Hamilton County and North Indianapolis communities have strong demand from corporate and professional services firms. We can set up at corporate outdoor spaces, private residential venues, or backyard properties. Full event coordination included with every booking.`,
    },
    {
      q: `What do I need to provide for the event?`,
      a: `Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all fresh proteins, vegetables, rice, house-made sauces, plates, chopsticks, and serving utensils. Setup and complete cleanup are fully included in every event.`,
    },
  ],
  // Theme 3 — Indiana College Towns
  (city) => [
    {
      q: `Do you serve ${city} and surrounding university communities?`,
      a: `Yes — we serve ${city} and all surrounding communities throughout the region. Most locations within 30 miles of ${city} fall within our standard service area. University graduation weekends are our peak demand period — contact us well in advance for commencement-weekend events.`,
    },
    {
      q: `Can you handle a large university graduation dinner in ${city}?`,
      a: `Absolutely — graduation parties of 20–60 guests are our most common ${city} bookings. For groups over 25, we bring two chef stations. University graduation dinners where families have traveled from across the country are exactly what we specialize in — the private hibachi format solves the restaurant reservation problem completely.`,
    },
    {
      q: `How far in advance should I book for ${city} graduation season?`,
      a: `University commencement weekends in ${city} are our fastest-filling dates in this market. We recommend booking 4–6 weeks ahead for any commencement-weekend Saturday event. Families who book in March for May graduation dates consistently get their preferred time and setup. Standard non-graduation events: 2–3 weeks ahead.`,
    },
    {
      q: `Can you set up at a ${city} home, backyard, or vacation rental?`,
      a: `Yes — residential backyards, patios, and outdoor spaces in ${city} and the surrounding communities all work perfectly. We need a flat outdoor area of at least 10×10 ft. Our setup is fully self-contained with propane — no outdoor gas hookup required at any property.`,
    },
    {
      q: `What proteins are available for a ${city} graduation dinner?`,
      a: `Standard menu includes chicken, steak, shrimp, salmon, fried rice, noodles, vegetables, miso soup, garden salad, and house-made sauces. Premium upgrades — filet mignon, lobster tail, Wagyu beef, king shrimp — are available per guest and are especially popular at graduation milestone events in ${city}. Specify at booking.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `No travel fee for ${city} and most surrounding communities. For events more than 45 miles from our nearest Indiana chef base, a modest travel fee may apply — always disclosed upfront. Most ${city}-area events fall within our standard service radius.`,
    },
  ],
  // Theme 4 — Northern Indiana
  (city) => [
    {
      q: `Do you serve ${city} and surrounding Northern Indiana communities?`,
      a: `Yes — we cover ${city} and all surrounding Northern Indiana communities. South Bend, Mishawaka, Fort Wayne, Elkhart, and surrounding communities are all within our Northern Indiana service area. Most locations within 35 miles of ${city} fall within our standard service radius.`,
    },
    {
      q: `Can you handle Notre Dame graduation events or Northern Indiana corporate dinners?`,
      a: `Absolutely — Notre Dame commencement events, South Bend-area graduation dinners, and Northern Indiana corporate team appreciation events are all within our specialization. For groups over 25, we bring two chef stations. Notre Dame commencement weekend is one of our most in-demand dates statewide — book 6–8 weeks ahead.`,
    },
    {
      q: `How far in advance should I book for a ${city} graduation party?`,
      a: `Northern Indiana graduation season (May–June) books 2–4 weeks ahead for most communities. Notre Dame commencement weekend requires 6–8 weeks minimum. Standard non-graduation events: 1–2 weeks. Holiday corporate events from October through December book faster — reserve 3–4 weeks ahead.`,
    },
    {
      q: `Can you set up at a ${city} backyard or outdoor venue?`,
      a: `Yes — backyards, patios, driveways, and outdoor venue spaces throughout ${city} and Northern Indiana are all excellent hibachi setups. We need a flat area of at least 10×10 ft. Our setup is fully self-contained with propane — no gas hookup required.`,
    },
    {
      q: `What's included in the event pricing?`,
      a: `All food ingredients, house-made sauces, professional chef service, equipment, and complete cleanup. Standard menu includes chicken, steak, shrimp, salmon, fried rice, noodles, vegetables, and sauces. Premium upgrades — filet mignon, lobster tail — available per guest. You provide tables and chairs for your guests.`,
    },
    {
      q: `Is there a travel fee for ${city} events?`,
      a: `Travel fees may apply for locations more than 45 miles from our nearest Indiana chef base — always disclosed upfront before you book. For most Northern Indiana communities, a modest fee covers the distance; for standard South Bend and Fort Wayne-area events, it applies and will be quoted with your event estimate.`,
    },
  ],
  // Theme 5 — Indiana Destinations & Southern
  (city) => [
    {
      q: `Can you come to a vacation rental or lake house near ${city}?`,
      a: `Absolutely — Indiana lake properties and Southern Indiana destination venues are among our most popular booking locations. We come directly to your property with full self-contained setup. Just confirm the property allows outdoor open-flame cooking — most Indiana lake and vacation properties do — and we handle everything from setup to complete pack-out.`,
    },
    {
      q: `How far in advance should I book a ${city} lake or vacation rental event?`,
      a: `Indiana lake community summer events — Memorial Day through Labor Day — fill our calendar 4–6 weeks ahead for peak weekends. For Lake Wawasee and other major lake destinations, book as soon as your rental is confirmed. Southern Indiana and off-season events: 2–3 weeks ahead is usually sufficient.`,
    },
    {
      q: `What's the best setup at a ${city} lake property or vacation rental?`,
      a: `Open decks, large patios, and flat yard areas all work perfectly. We need a minimum 10×10 ft flat surface with clearance overhead. Our setup takes 20–30 minutes and the performance runs 90–120 minutes. We pack everything out completely when dinner is done — your lake property or vacation rental stays immaculate.`,
    },
    {
      q: `Do you serve smaller communities near ${city}?`,
      a: `Yes — we travel throughout the ${city} region and serve all surrounding Indiana communities. For locations more than 45 miles from our nearest Indiana chef base, a travel fee may apply and will always be disclosed upfront before you book.`,
    },
    {
      q: `Is hibachi a good option for a ${city} family reunion or bachelorette weekend?`,
      a: `It's the best option. Everyone gathers around the grill for 90–120 minutes — the live fire cooking, the performance, and the shared format creates exactly the evening a reunion or bachelorette group is looking for. For groups over 25, we bring dual stations. Lake property and vacation rental events are our specialty in this market.`,
    },
    {
      q: `What do I need to tell my vacation rental host about the chef setup?`,
      a: `Our setup is functionally identical to a portable propane grill — most Indiana vacation rental and lake properties allow it. We recommend letting your host know in advance that a private chef service will be on-property. We are licensed and insured, and most hosts are pleased to accommodate once they understand the format. We do not cook in enclosed indoor spaces.`,
    },
  ],
]

// ── Testimonials ──────────────────────────────────────────────────────────────
const IN_TESTIMONIALS_INDIANAPOLIS = [
  {
    text: '"Corporate team appreciation dinner for our Indianapolis financial group — twenty-six colleagues at a Mass Ave-adjacent property. The chef arrived exactly on time, set up on the back patio in twenty minutes, and ran a full two-hour teppanyaki show that had the entire team engaged from first flame to last plate. Best team event we\'ve had in four years. The format works at a level restaurant private rooms never have."',
    name: 'David R.',
    city: 'Indianapolis, IN',
    event: 'Corporate Team Dinner',
    initials: 'DR',
  },
  {
    text: '"IUPUI graduation dinner at our Fountain Square home for thirty-four family members who drove and flew in from seven states. May Saturday in Indianapolis — every restaurant we tried in March was fully booked. Private hibachi was the right call. The chef ran a complete show, the premium proteins were exceptional, and my son\'s graduation became the dinner his grandmother still talks about four months later."',
    name: 'Patricia & James K.',
    city: 'Indianapolis, IN',
    event: 'IUPUI Graduation Dinner',
    initials: 'PK',
  },
  {
    text: '"Birthday party in our Broad Ripple backyard for twenty-eight friends and neighbors. The chef had the entire group gathered around the grill laughing for two solid hours — filet and lobster tail for the birthday couple, the full performance for everyone else. Indianapolis has a great food scene, but nothing in Broad Ripple Village puts a world-class chef in your own backyard for an evening. Already planning the next one."',
    name: 'Michael B.',
    city: 'Indianapolis, IN',
    event: 'Birthday Party',
    initials: 'MB',
  },
]

const IN_TESTIMONIALS_CARMEL = [
  {
    text: '"Carmel High School graduation dinner at our property near the Arts & Design District for forty-two family members. Guests from six states, the full premium protein menu — filet mignon, lobster tail — and a chef who managed the size of the group with complete professionalism. The Palladium is a block away and my guests said the dinner was the better of the two evenings. That\'s the standard this neighborhood sets."',
    name: 'Susan & Thomas M.',
    city: 'Carmel, IN',
    event: 'Carmel HS Graduation Dinner',
    initials: 'SM',
  },
  {
    text: '"Anniversary dinner at our Midtown Carmel property for twenty guests. Monon Trail-adjacent setting, stone patio, summer evening. The chef set up in fifteen minutes and ran a complete teppanyaki performance — the fire tricks alone had the grandparents on their feet. Carmel has exceptional restaurants but nothing they offer is this. Personal, private, and exactly what the occasion deserved."',
    name: 'Robert & Catherine L.',
    city: 'Carmel, IN',
    event: 'Anniversary Dinner',
    initials: 'RL',
  },
  {
    text: '"Executive dinner at our Carmel home for eighteen colleagues and clients from our company\'s Chicago and Columbus offices. The hibachi format made what could have been a routine work dinner into the event the visiting team called out on the flight home. Hamilton County has an impressive restaurant corridor — this was better. Booking again for fourth quarter."',
    name: 'Jennifer W.',
    city: 'Carmel, IN',
    event: 'Executive Dinner Party',
    initials: 'JW',
  },
]

const IN_TESTIMONIALS_FISHERS = [
  {
    text: '"Hamilton Southeastern graduation dinner at our Geist Reservoir waterfront property for thirty-six family members from four states. May Saturday — every HSE-area restaurant with a private room was booked solid. The private hibachi chef set up on our lake deck, ran a complete two-hour show, and created the dinner my daughter said was the best of the graduation weekend. Geist waterfront and private hibachi are a perfect combination."',
    name: 'Mark & Linda T.',
    city: 'Fishers, IN',
    event: 'HSE Graduation Dinner',
    initials: 'MT',
  },
  {
    text: '"Birthday party at our Fall Creek Township property for twenty-eight neighbors and friends. The chef ran a full teppanyaki show — fire tricks, flying shrimp, the complete performance — and held the crowd for ninety minutes without a single distraction. Fishers has a great dining scene. Nothing on Nickel Plate competes with having a private chef in your own backyard. Already booked for next summer."',
    name: 'Karen H.',
    city: 'Fishers, IN',
    event: 'Birthday Party',
    initials: 'KH',
  },
  {
    text: '"Fishers Event Center-area corporate team event at our company\'s Fishers property for twenty-four colleagues. The hibachi format completely changed the energy of what usually is a functional team dinner — everyone at the same grill, same chef, same experience from the same first minute. Hamilton County companies looking for team entertainment: this is the format that creates actual connection."',
    name: 'Brian S.',
    city: 'Fishers, IN',
    event: 'Corporate Team Dinner',
    initials: 'BS',
  },
]

const IN_TESTIMONIALS_ZIONSVILLE = [
  {
    text: '"Zionsville Community High School graduation dinner at our Holliday Farms property for thirty-two family members. The estate setting and the private hibachi chef together created an evening I couldn\'t have replicated at any restaurant. Guests came from Ohio, Illinois, and Michigan — everybody left agreeing it was the finest dinner of the graduation weekend. Boone County estate entertaining has found its format."',
    name: 'William & Anne P.',
    city: 'Zionsville, IN',
    event: 'ZCHS Graduation Dinner',
    initials: 'WP',
  },
  {
    text: '"Anniversary dinner at our brick Main Street-adjacent property for twenty guests. The chef arrived precisely on time, set up on our stone patio, and ran a performance that matched the setting of our home perfectly. Zionsville has become known for a certain standard — the private hibachi evening met it without effort. Three of our guests booked their own events before the chef had finished cleanup."',
    name: 'George & Margaret B.',
    city: 'Zionsville, IN',
    event: 'Anniversary Dinner',
    initials: 'GB',
  },
  {
    text: '"Birthday party at our Zionsville home for twenty-six guests. The Boone County setting and the live teppanyaki performance together created the kind of evening a neighborhood like ours actually expects. My guests are still asking for the contact information two months later. The chef was exceptional, the filet mignon was outstanding, and the cleanup was complete before the last guest left."',
    name: 'Christine N.',
    city: 'Zionsville, IN',
    event: 'Birthday Party',
    initials: 'CN',
  },
]

const IN_TESTIMONIALS_WESTFIELD = [
  {
    text: '"Post-tournament dinner for twenty-two families at our Spring Mill Station property after a Grand Park soccer weekend. The private hibachi chef turned what would have been a scattered group dinner at a crowded restaurant into a two-hour shared experience that the kids and parents loved equally. Grand Park families: this is your Saturday night dinner format."',
    name: 'Kelly & Jason R.',
    city: 'Westfield, IN',
    event: 'Grand Park Tournament Celebration',
    initials: 'KR',
  },
  {
    text: '"Westfield High School graduation party at our backyard for thirty-eight family members from five states. May Saturday in Hamilton County — every restaurant near Grand Park and every private room in Carmel was taken. The private hibachi chef arrived, set up on our patio in twenty minutes, and ran the complete show. Best graduation dinner our family has had. The format is perfect for the group sizes that come with Rocks graduation."',
    name: 'Donna & Steve H.',
    city: 'Westfield, IN',
    event: 'Westfield HS Graduation Party',
    initials: 'DH',
  },
  {
    text: '"Summer birthday party in our Westfield backyard for twenty-four neighbors and close friends. The chef held everyone gathered at the grill for ninety minutes — performance, proteins, fire tricks, the complete show. Hamilton County backyard entertaining has options, but nothing at our level compared to this. Already reserved for anniversary season."',
    name: 'Laura & Tom C.',
    city: 'Westfield, IN',
    event: 'Summer Birthday Party',
    initials: 'LC',
  },
]

const IN_TESTIMONIALS_NOBLESVILLE = [
  {
    text: '"Hamilton County seat graduation dinner at our property near Federal Hill Commons for thirty-four family members. May Saturday — every restaurant in Noblesville and Carmel was fully booked. The private hibachi chef set up on our back patio in twenty minutes and ran a full two-hour show. Ruoff Music Center is a mile away and my guests said the chef put on the better performance of the two evenings. Hamilton County graduation season: this is the format that works."',
    name: 'Kevin & Sarah M.',
    city: 'Noblesville, IN',
    event: 'Graduation Party',
    initials: 'KM',
  },
  {
    text: '"Anniversary dinner at our Morse Reservoir property for twenty guests. July evening, water visible from every seat, private hibachi chef running a complete teppanyaki show on the deck. The combination of the reservoir setting and the live cooking performance was exactly what our anniversary deserved. Three of our guests booked their own events before the chef finished cleanup."',
    name: 'Thomas & Lisa R.',
    city: 'Noblesville, IN',
    event: 'Anniversary Dinner',
    initials: 'TR',
  },
  {
    text: '"Summer birthday party at our Noblesville home for twenty-six neighbors and friends. The chef set up in the backyard, ran the full teppanyaki show for ninety minutes, and the whole group was gathered around the grill from first flame to last plate. Hamilton County has excellent restaurants — none of them put a world-class chef in your own backyard. Already planning the graduation dinner for next May."',
    name: 'Amanda B.',
    city: 'Noblesville, IN',
    event: 'Birthday Party',
    initials: 'AB',
  },
]

const IN_TESTIMONIALS_BLOOMINGTON = [
  {
    text: '"IU Commencement dinner at our Bloomington home for thirty-eight family members from six states. Sample Gates-adjacent property, May Saturday when every Kirkwood Avenue restaurant was fully reserved six weeks earlier. The private hibachi chef solved the logistics problem completely — everyone gathered in the backyard, every protein cooked to order, and a performance our family discussed for the entire drive home. IU graduation season: book early."',
    name: 'Richard & Carol T.',
    city: 'Bloomington, IN',
    event: 'IU Graduation Dinner',
    initials: 'RT',
  },
  {
    text: '"Monroe Lake cabin weekend dinner for twenty friends. The chef traveled to the property fully equipped — no gas hookup at the cabin — and ran a complete teppanyaki show on the deck overlooking the water. The Saturday evening dinner became the anchor of the weekend: better than any Bloomington restaurant, delivered at the cabin where everyone was already together. Already booked for the reunion next summer."',
    name: 'Greg H.',
    city: 'Bloomington, IN',
    event: 'Lake Cabin Dinner',
    initials: 'GH',
  },
  {
    text: '"Faculty appreciation dinner at our property near the IU campus for eighteen colleagues. The format — everyone gathered around one teppan grill, watching the same chef, eating the same exceptional meal — did something that departmental dinners at Indiana Memorial Union never managed: it made everyone feel like the evening was actually for them. Already scheduled for the same group next year."',
    name: 'Dr. Patricia W.',
    city: 'Bloomington, IN',
    event: 'Faculty Appreciation Dinner',
    initials: 'PW',
  },
]

const IN_TESTIMONIALS_WEST_LAFAYETTE = [
  {
    text: '"Purdue Commencement dinner at our West Lafayette home for thirty-six family members from five states. Elliott Hall of Music-adjacent property, May Saturday when every Ross-Ade corridor restaurant was fully booked by March. The private hibachi chef arrived exactly on time, ran a complete two-hour performance on our backyard patio, and served the best filet mignon any of my guests had eaten. Purdue graduation weekend: this is the only format that works at this scale."',
    name: 'James & Patricia K.',
    city: 'West Lafayette, IN',
    event: 'Purdue Graduation Dinner',
    initials: 'JK',
  },
  {
    text: '"Birthday party at our Chauncey Hill property for twenty-four colleagues and friends. The chef set up on the patio in twenty minutes and ran a ninety-minute teppanyaki show that had the entire group engaged from first flame to last plate. West Lafayette has strong dining options on the Levee — nothing replaces a private chef at your own property. Already booked for the Purdue home opener weekend."',
    name: 'Sandra N.',
    city: 'West Lafayette, IN',
    event: 'Birthday Party',
    initials: 'SN',
  },
  {
    text: '"Engineering department corporate dinner at our Tippecanoe County home for twenty-two colleagues. The private hibachi format completely changed the energy — everyone at the same grill, same chef, same experience at the same moment. The team was still talking about it at the Monday morning meeting. For Purdue-corridor corporate entertaining, this is the format that creates connection rather than just attendance."',
    name: 'Michael V.',
    city: 'West Lafayette, IN',
    event: 'Corporate Team Dinner',
    initials: 'MV',
  },
]

const IN_TESTIMONIALS_LAFAYETTE = [
  {
    text: '"Purdue graduation weekend in Lafayette — we hosted thirty family members from out of state who couldn\'t secure a reservation anywhere in Tippecanoe County. The private hibachi chef came to our Lafayette home, set up in the backyard, and ran a complete teppanyaki performance for the whole family. Riehle Plaza restaurants were turning people away that Saturday. We were not one of them. Already booked for next Commencement."',
    name: 'John & Susan D.',
    city: 'Lafayette, IN',
    event: 'Purdue Graduation Dinner',
    initials: 'JD',
  },
  {
    text: '"Corporate catering event for our Tippecanoe County team of twenty-eight. The chef set up at our company\'s outdoor space and ran a complete show — fire tricks, flying shrimp, premium proteins — for two hours. Lafayette has solid restaurant options but nothing that brings a certified teppanyaki chef to your venue. This is the team appreciation format that actually creates memory."',
    name: 'Angela P.',
    city: 'Lafayette, IN',
    event: 'Corporate Team Event',
    initials: 'AP',
  },
  {
    text: '"Birthday party in our Lafayette backyard for twenty-two neighbors. The chef was exceptional — performance, proteins, the complete show. Columbian Park area, summer evening, the kind of gathering that the neighborhood still references. We\'d been recommending the city\'s restaurant scene for birthday dinners for years. We\'ll be recommending this instead from now on."',
    name: 'Christine L.',
    city: 'Lafayette, IN',
    event: 'Birthday Party',
    initials: 'CL',
  },
]

const IN_TESTIMONIALS_SOUTH_BEND = [
  {
    text: '"Notre Dame Commencement dinner at our South Bend home for forty-two family members from seven states. May weekend when every restaurant within fifteen miles of campus was fully reserved since March. The private hibachi chef arrived with a complete dual-station setup, ran a two-hour performance for the whole family, and served the finest graduation dinner the family has had across four Notre Dame degrees. The format that works when Commencement weekend eliminates every other option."',
    name: 'Patrick & Mary O.',
    city: 'South Bend, IN',
    event: 'Notre Dame Graduation Dinner',
    initials: 'PO',
  },
  {
    text: '"Corporate team appreciation dinner at our South Bend property for twenty-six colleagues. The chef arrived exactly on time, set up near our East Race Waterway-adjacent patio, and ran a complete show. The team was together from first flame to final plate — connected in a way that restaurant tables arranged across a private room never achieves. Howard Park-area South Bend entertaining has found its format."',
    name: 'Daniel C.',
    city: 'South Bend, IN',
    event: 'Corporate Team Dinner',
    initials: 'DC',
  },
  {
    text: '"Summer birthday party at our South Bend home for twenty-four guests. The chef ran the full teppanyaki performance — fire tricks, flying shrimp, premium filet mignon — and held the group at the grill for ninety minutes without a break in attention. The College Football Hall of Fame is a mile from our house. On this particular evening, the dinner was the better attraction. Already booked for next summer."',
    name: 'Rachel B.',
    city: 'South Bend, IN',
    event: 'Birthday Party',
    initials: 'RB',
  },
]

const IN_TESTIMONIALS_MISHAWAKA = [
  {
    text: '"Birthday party in our Mishawaka backyard for twenty-eight neighbors and friends. The chef arrived, set up on the patio near Battell Park, and ran a complete teppanyaki show for ninety minutes. The Princess City has excellent dining — none of it replaces a private chef performing at your own property for a crowd that includes kids, grandparents, and everyone in between simultaneously. Already booked for anniversary season."',
    name: 'Mark & Linda S.',
    city: 'Mishawaka, IN',
    event: 'Birthday Party',
    initials: 'MS',
  },
  {
    text: '"Anniversary dinner at our St. Joseph River-adjacent property for eighteen guests. June evening, water visible from the patio, private hibachi chef running a complete performance from first flame to final plate. Mishawaka has a growing restaurant scene on Lincoln Way — this was better than any of it. The setting, the format, and the chef together created an evening that matched the occasion."',
    name: 'Robert & Karen H.',
    city: 'Mishawaka, IN',
    event: 'Anniversary Dinner',
    initials: 'RH',
  },
  {
    text: '"Graduation party for our Penn High School senior at our Mishawaka home for thirty family members. The private hibachi chef handled the whole event — setup, performance, complete cleanup. The filet mignon was outstanding and the fire tricks kept the younger kids entertained for the entire evening. Notre Dame-adjacent Northern Indiana has strong graduation demand: book 3–4 weeks ahead."',
    name: 'Jennifer T.',
    city: 'Mishawaka, IN',
    event: 'Graduation Party',
    initials: 'JT',
  },
]

const IN_TESTIMONIALS_FORT_WAYNE = [
  {
    text: '"Corporate dinner at our Fort Wayne venue for thirty colleagues from our team\'s Sweetwater-adjacent office campus. The private hibachi chef set up at our outdoor corporate space, ran a complete teppanyaki performance, and created the team appreciation evening we\'d been trying to deliver for three years. The Electric Works District has outstanding food and beverage options. This was different: your team, your chef, your performance, no one else\'s restaurant timeline."',
    name: 'Brian W.',
    city: 'Fort Wayne, IN',
    event: 'Corporate Team Dinner',
    initials: 'BW',
  },
  {
    text: '"Graduation dinner at our Fort Wayne home for thirty-five family members. Allen County in May — every worthwhile private room was reserved since February. The private hibachi chef arrived with dual stations, ran a complete show, and delivered the graduation dinner our family had been planning for four years. Promenade Park is three miles away. This was the better evening of the two weekends."',
    name: 'Carol & Jim N.',
    city: 'Fort Wayne, IN',
    event: 'Graduation Party',
    initials: 'CN',
  },
  {
    text: '"Summer birthday party at our Fort Wayne home for twenty-four guests. The chef ran the full teppanyaki performance — fire tricks, premium proteins, the complete show. Fort Wayne has a genuinely impressive dining scene. None of it compares to having a private chef cooking exclusively for your group at your own property. Already planned the next event for the holidays."',
    name: 'Lisa A.',
    city: 'Fort Wayne, IN',
    event: 'Birthday Party',
    initials: 'LA',
  },
]

const IN_TESTIMONIALS_ELKHART = [
  {
    text: '"Corporate team dinner for our Elkhart County RV group — twenty-eight colleagues at a property near the Wellfield Botanic Gardens. The private hibachi chef set up at the outdoor venue, ran a complete teppanyaki performance, and created the team evening we\'d been looking for. Elkhart hosts the Jazz Festival every summer — this was a different kind of performance, and honestly the better one for a corporate evening. Already booked for the Q4 team event."',
    name: 'Thomas B.',
    city: 'Elkhart, IN',
    event: 'Corporate Team Dinner',
    initials: 'TB',
  },
  {
    text: '"Graduation party for our student at our Elkhart home for thirty-two family members from four states. The chef arrived with everything, set up in the backyard, and ran a two-hour show that every generation around the grill enjoyed simultaneously — the fire tricks for the kids, the filet mignon for the adults, the performance for everyone. Elkhart graduation season: reserve 3–4 weeks ahead for any May Saturday."',
    name: 'David & Nancy K.',
    city: 'Elkhart, IN',
    event: 'Graduation Party',
    initials: 'DK',
  },
  {
    text: '"Birthday celebration at our Elkhart home for twenty guests. The chef ran the full teppanyaki performance — the flame work, flying shrimp, complete menu. My guests arrived having attended a hundred birthday dinners at Northern Indiana restaurants. They left saying this was something completely different. That\'s the format: private, personal, and impossible to replicate at any restaurant in the region."',
    name: 'Kimberly R.',
    city: 'Elkhart, IN',
    event: 'Birthday Party',
    initials: 'KR',
  },
]

const IN_TESTIMONIALS_WARSAW = [
  {
    text: '"Lake Wawasee weekend dinner at our cottage for twenty guests. Saturday evening on the lake, private hibachi chef set up on the deck, the full teppanyaki performance from first flame to final plate. Lake Wawasee in July is already perfect — the private hibachi dinner made it the weekend that everyone in the group is already planning to repeat next summer. Kosciusko County lake properties and private hibachi are a natural combination."',
    name: 'Scott & Jennifer A.',
    city: 'Warsaw, IN',
    event: 'Lake Weekend Dinner',
    initials: 'SA',
  },
  {
    text: '"Corporate team event for our orthopedic industry group in Warsaw for twenty-four colleagues. The chef set up at our company property, ran a complete teppanyaki show, and created the team evening that our standard corporate dinner options — the area steakhouses and event centers — never managed to deliver. Warsaw is the orthopedic capital of the world. The team appreciation dinner it deserves should match that standard."',
    name: 'Michael H.',
    city: 'Warsaw, IN',
    event: 'Corporate Team Dinner',
    initials: 'MH',
  },
  {
    text: '"Family reunion dinner at our Winona Lake property for twenty-eight family members from five states. The private hibachi chef traveled to the property fully equipped, set up on the deck, and ran a performance that worked for ages four through eighty-four simultaneously. Village at Winona is beautiful but this dinner was the anchor memory of the entire reunion weekend. Already planning the next one."',
    name: 'Barbara & Tom C.',
    city: 'Warsaw, IN',
    event: 'Family Reunion Dinner',
    initials: 'BC',
  },
]

const IN_TESTIMONIALS_EVANSVILLE = [
  {
    text: '"University of Evansville graduation dinner at our home for thirty-four family members who traveled from across the Midwest and Southeast. UE Commencement weekend — every Ford Center-adjacent restaurant with a private room was fully booked. The private hibachi chef came to our property, ran a complete teppanyaki performance on our outdoor patio, and delivered the finest graduation dinner the family has had. Already planning the next graduation dinner in two years."',
    name: 'Robert & Mary F.',
    city: 'Evansville, IN',
    event: 'UE Graduation Dinner',
    initials: 'RF',
  },
  {
    text: '"Corporate appreciation event for our Ohio River-area team in Evansville for twenty-six colleagues. The private hibachi chef set up at our company property, ran a full show — fire tricks, premium proteins, the complete performance — and delivered the team evening that our usual Evansville restaurant options never quite reached. USI and UE graduation season fills our calendar fastest: plan ahead for spring events."',
    name: 'Laura P.',
    city: 'Evansville, IN',
    event: 'Corporate Team Event',
    initials: 'LP',
  },
  {
    text: '"Birthday party at our Evansville home for twenty-two guests. The chef ran the full teppanyaki show — fire tricks, flying shrimp, premium filet mignon. Angel Mounds State Historic Site is at the edge of the city. The private hibachi evening was a different kind of landmark dinner — one that my guests had not experienced before and immediately started planning for their own occasions. Already referred four households."',
    name: 'Chris N.',
    city: 'Evansville, IN',
    event: 'Birthday Party',
    initials: 'CN',
  },
]

const IN_TESTIMONIALS_JEFFERSONVILLE = [
  {
    text: '"Bachelorette weekend at our Jeffersonville rental property with the Big Four Bridge visible from the back deck for fourteen guests. The private hibachi chef set up on the outdoor patio, ran a complete teppanyaki show, and created the Saturday evening that the whole group had been anticipating since the itinerary was sent. Louisville skyline, Ohio River, private hibachi chef: this is the Jeffersonville bachelorette format."',
    name: 'Ashley W.',
    city: 'Jeffersonville, IN',
    event: 'Bachelorette Weekend',
    initials: 'AW',
  },
  {
    text: '"Clark County graduation dinner at our Jeffersonville home for thirty family members from four states. The private hibachi chef handled everything from setup to complete cleanup. Our guests drove from Columbus and Indianapolis for a May weekend — every restaurant on both sides of the bridge was booked solid. This was the dinner that made the trip. Already scheduling the next one for the fall anniversary."',
    name: 'Michael & Kim D.',
    city: 'Jeffersonville, IN',
    event: 'Graduation Dinner',
    initials: 'MD',
  },
  {
    text: '"Anniversary dinner at our Jeffersonville property with Louisville skyline views for eighteen guests. The private hibachi chef ran a complete performance — fire tricks, lobster tail, the whole show — on our patio overlooking the Ohio River. Louisville has every restaurant category covered across the bridge. This was better than any of them because it was ours, for us, with our people. That\'s the format."',
    name: 'David & Susan L.',
    city: 'Jeffersonville, IN',
    event: 'Anniversary Dinner',
    initials: 'DL',
  },
]

const IN_TESTIMONIALS_NEW_ALBANY = [
  {
    text: '"New Albany High School graduation dinner at our Floyd County home for thirty-six family members from five states. Historic downtown New Albany — every restaurant on Market Street was fully booked, and Louisville across the bridge was no better. The private hibachi chef set up in our backyard, ran a complete two-hour performance, and delivered the graduation dinner our family had been planning for four years. New Albany graduation season: reserve four to six weeks ahead."',
    name: 'James & Patricia H.',
    city: 'New Albany, IN',
    event: 'Graduation Dinner',
    initials: 'JH',
  },
  {
    text: '"Anniversary dinner at our Silver Street Arts District-adjacent property for twenty guests. The chef set up on our patio overlooking Floyd County, ran the full teppanyaki show, and created an evening that matched the character of New Albany\'s historic district — intentional, personal, and exceptional. Culbertson Mansion is two blocks away. The private dinner was the better landmark of the evening."',
    name: 'William & Anne M.',
    city: 'New Albany, IN',
    event: 'Anniversary Dinner',
    initials: 'WM',
  },
  {
    text: '"Corporate team event for our Southern Indiana group at our New Albany venue for twenty-two colleagues. The private hibachi chef ran a complete show at our outdoor corporate space — fire tricks, premium proteins, the full performance. Louisville is across the bridge and has every dining option available. Nothing available over there brings a certified teppanyaki chef to your company\'s property. This is the format that earns the team\'s return."',
    name: 'Susan T.',
    city: 'New Albany, IN',
    event: 'Corporate Team Event',
    initials: 'ST',
  },
]

function _getInTestimonials(citySlug) {
  const map = {
    'indianapolis':  IN_TESTIMONIALS_INDIANAPOLIS,
    'carmel':        IN_TESTIMONIALS_CARMEL,
    'fishers':       IN_TESTIMONIALS_FISHERS,
    'zionsville':    IN_TESTIMONIALS_ZIONSVILLE,
    'westfield':     IN_TESTIMONIALS_WESTFIELD,
    'noblesville':   IN_TESTIMONIALS_NOBLESVILLE,
    'bloomington':   IN_TESTIMONIALS_BLOOMINGTON,
    'west-lafayette':IN_TESTIMONIALS_WEST_LAFAYETTE,
    'lafayette':     IN_TESTIMONIALS_LAFAYETTE,
    'south-bend':    IN_TESTIMONIALS_SOUTH_BEND,
    'mishawaka':     IN_TESTIMONIALS_MISHAWAKA,
    'fort-wayne':    IN_TESTIMONIALS_FORT_WAYNE,
    'elkhart':       IN_TESTIMONIALS_ELKHART,
    'warsaw':        IN_TESTIMONIALS_WARSAW,
    'evansville':    IN_TESTIMONIALS_EVANSVILLE,
    'jeffersonville':IN_TESTIMONIALS_JEFFERSONVILLE,
    'new-albany':    IN_TESTIMONIALS_NEW_ALBANY,
  }
  return map[citySlug] ?? IN_TESTIMONIALS_INDIANAPOLIS
}

// ── How It Works ──────────────────────────────────────────────────────────────
const IN_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `From booking to final cleanup, we handle every detail — you just enjoy the evening in ${city}.`,
  steps: [
    { num: '01', title: 'Reserve Your Date',   desc: 'Share your date, guest count, protein preferences, and home or venue address. We confirm Indiana availability within hours and lock in your event with a deposit.' },
    { num: '02', title: 'Confirm Your Menu',   desc: 'Choose your proteins — chicken, steak, shrimp, salmon, filet mignon, lobster tail, Wagyu beef — plus fried rice, noodles, vegetables, and house-made sauces. Tell us about any dietary needs at this stage.' },
    { num: '03', title: 'Chef Arrives Ready',  desc: 'Your private hibachi chef arrives 30–45 minutes before showtime with a fully self-contained propane teppan grill, all ingredients, and everything needed. No prep required on your end.' },
    { num: '04', title: 'The Live Experience', desc: 'The full teppanyaki performance — precision knife work, flame tricks, and live cooking from first flame to final plate. Restaurant-quality food prepared for your group alone.' },
    { num: '05', title: 'Complete Cleanup',    desc: 'When the last plate is cleared, we break down the grill, pack out all equipment, and leave your property exactly as we found it. Your only job is to enjoy the evening.' },
  ],
}

// ── Section variants ──────────────────────────────────────────────────────────
const IN_SECTION_VARIANTS = [
  // Theme 0 — Indianapolis Luxury Suburbs
  {
    heroPill:           "Indiana's Finest Private Dining",
    experiencePill:     'Estate Dining Reimagined',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Your ${city} Estate Is the Venue`,     desc: `No reservation battles — your ${city} outdoor space becomes an exclusive private dining room for the evening.` },
      { icon: '🥩', title: 'Premium Proteins, Live Fire',           desc: "Filet mignon, lobster tail, Wagyu beef — choose your proteins and watch them cooked live on the teppan for your guests only." },
      { icon: '👨‍🍳', title: 'Certified Chef, Your Group Only',      desc: `Your teppanyaki chef performs exclusively for your guests — no shared dining room, no strangers, no restaurant noise.` },
      { icon: '✨', title: 'Full Show, Zero Cleanup',               desc: 'Premium live performance and complete cleanup when dinner is done — your estate is spotless when the chef leaves.' },
    ],
    experienceImage:    '/pics/hibachi-austin-home.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Indiana estate event`,
    areasPill:          'Serving Hamilton County & Boone County',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Indiana Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Hamilton County and Boone County — Carmel, Fishers, Westfield, Zionsville, Noblesville, Indianapolis, Lebanon, and every community throughout central Indiana.`,
      (city) => `Most ${city} bookings are confirmed within hours. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Estate Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       "Estate graduation dinners, anniversary celebrations, and milestone events — private hibachi is the Hamilton County private dining upgrade you've been waiting for",
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Hamilton County & Boone County Hosts Are Saying',
  },
  // Theme 1 — Indianapolis Metro & Corporate
  {
    heroPill:           "Indianapolis's Private Chef",
    experiencePill:     'Better Than Any Indy Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏢', title: `Your ${city} Space Is the Venue`,       desc: `From Monument Circle corporate venues to Broad Ripple backyards — wherever your event is in Indianapolis, we come to you.` },
      { icon: '👥', title: 'Corporate Scale: 20 to 80+ Guests',     desc: 'We scale with dual chef stations for larger Indianapolis corporate and team events — every guest at the same performance, at the same time.' },
      { icon: '🔥', title: 'The Live Teppanyaki Performance',       desc: 'Fire tricks, flying shrimp, and every plate cooked to order — the format that replaces any Indianapolis restaurant private room.' },
      { icon: '🧹', title: 'Full Setup and Zero Cleanup',           desc: 'Complete arrival-to-cleanup management — you host your Indianapolis event, we handle every detail from first flame to final departure.' },
    ],
    experienceImage:    '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at an Indianapolis corporate event`,
    areasPill:          'Serving Indianapolis & Marion County',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Greater Indianapolis`,
    areasIntro: [
      (city, state) => `We serve all of Indianapolis — Broad Ripple, Mass Ave, Fountain Square, Meridian-Kessler, Butler-Tarkington, Nora, Eagle Creek, Irvington, Castleton, and every neighborhood throughout Marion County. We also serve Carmel, Fishers, Westfield, Zionsville, Noblesville, Greenwood, and the full greater Indianapolis metro.`,
      (city) => `Most Indianapolis bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Check Your Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Best Reason to Celebrate in ${city}`,
    occasionSubtext:       'Corporate team dinners, graduation parties, and milestone celebrations — Indianapolis\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Your ${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Indianapolis Hosts Are Saying',
  },
  // Theme 2 — North Indianapolis Suburban Family
  {
    heroPill:           'Hamilton County Backyard Hibachi',
    experiencePill:     "The Backyard Upgrade You Deserved",
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Your ${city} Backyard Is the Venue`,    desc: `No reservations, no parking, no rushed tables — your ${city} backyard becomes the best dining room in Hamilton County for the evening.` },
      { icon: '🎓', title: 'Built for Hamilton County Graduation',   desc: `When every restaurant near your graduation venue is fully booked, your chef comes to you — exactly when and where you need it in ${city}.` },
      { icon: '🔥', title: 'Entertainment for Every Age',           desc: 'Fire tricks, flying shrimp, and live teppanyaki cooking — the performance that works equally for grandparents and kindergartners.' },
      { icon: '🧹', title: 'Zero Cleanup for the Host',             desc: `Your chef sets up, performs, and packs out completely. You hosted the best dinner in ${city} without touching a single dish.` },
    ],
    experienceImage:    '/pics/backyard-hibachi.jpg',
    experienceImageAlt: (city) => `Backyard hibachi chef at a ${city} Indiana party`,
    areasPill:          'Serving Hamilton County & North Indianapolis',
    areasHeadline:      (city) => `Hibachi in ${city} and Surrounding Hamilton County Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Hamilton County — Carmel, Fishers, Westfield, Noblesville, Zionsville, Indianapolis, and every community throughout the North Indianapolis corridor.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Backyard Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `Celebrate in ${city} — The Right Way`,
    occasionSubtext:       'Graduation parties, birthday milestones, and neighborhood gatherings — Hamilton County\'s most memorable backyard experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Hamilton County & North Indianapolis Hosts Are Saying',
  },
  // Theme 3 — Indiana College Towns
  {
    heroPill:           "Indiana's University Private Chef",
    experiencePill:     'The Graduation Dinner Format',
    experiencePoints:   (city) => [
      { icon: '🎓', title: 'The Graduation Dinner Format',          desc: `When every restaurant in ${city} is fully booked for commencement weekend, your chef comes to your backyard — no reservation needed.` },
      { icon: '🔥', title: 'Live Fire, Fresh Proteins',             desc: 'Chicken, steak, shrimp, salmon — and premium upgrades like filet mignon and lobster tail for graduation milestone celebrations.' },
      { icon: '👥', title: 'Scales from 8 to 60 Guests',            desc: `One station for intimate dinners, dual stations for large graduation gatherings — sized to your exact guest count in ${city}.` },
      { icon: '✨', title: 'Complete Setup and Cleanup',             desc: 'The chef handles everything from arrival through final cleanup. Your graduation celebration needs exactly zero additional logistics.' },
    ],
    experienceImage:    '/pics/hibachi-shot-1.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Indiana graduation party`,
    areasPill:          'Serving Indiana College Towns',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Surrounding Region`,
    areasIntro: [
      (city, state) => `We serve ${city} and all surrounding communities throughout the region. University graduation weekends are our peak demand period — contact us well in advance for commencement-weekend events.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. University graduation weekends fill fast.`,
    ],
    areasButton:           'Book Your Graduation Dinner',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Graduation Dinner Everyone Talks About`,
    occasionSubtext:       'University graduation parties, football weekend dinners, and academic milestone celebrations — private hibachi is the Indiana college town dinner that solves the reservation problem',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Indiana College Town Hosts Are Saying',
  },
  // Theme 4 — Northern Indiana
  {
    heroPill:           "Northern Indiana's Private Chef",
    experiencePill:     'Better Than Any Restaurant',
    experiencePoints:   (city) => [
      { icon: '🏠', title: `Your ${city} Space Is the Venue`,       desc: `Notre Dame graduation dinners, Fort Wayne corporate events, Northern Indiana community celebrations — we come to your property.` },
      { icon: '🔥', title: 'The Full Teppanyaki Experience',        desc: 'Fire tricks, flying shrimp, and every protein cooked to order — the live performance that no Northern Indiana restaurant can replicate.' },
      { icon: '👥', title: 'Scales to Your Group',                  desc: 'One station for groups up to 25, dual stations for larger Northern Indiana gatherings — sized correctly from the start.' },
      { icon: '🧹', title: 'Complete Cleanup Included',             desc: 'Your chef handles all setup and teardown. Your property is left exactly as it was found. You keep the memory.' },
    ],
    experienceImage:    '/pics/hibachi-pic-4.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Indiana event`,
    areasPill:          'Serving Northern Indiana',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Northern Indiana`,
    areasIntro: [
      (city, state) => `We serve ${city} and all surrounding Northern Indiana communities — South Bend, Mishawaka, Fort Wayne, Elkhart, and surrounding communities throughout Northern Indiana.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Notre Dame commencement and graduation events book early.`,
    ],
    areasButton:           'Reserve Your Northern Indiana Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Celebration Everyone Remembers`,
    occasionSubtext:       'Graduation parties, community milestones, and corporate celebrations — private hibachi is Northern Indiana\'s most memorable dining experience',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi Questions — Answered`,
    testimonialSubheading: 'What Northern Indiana Hosts Are Saying',
  },
  // Theme 5 — Indiana Destinations & Southern Indiana
  {
    heroPill:           "Indiana's Mobile Hibachi Chef",
    experiencePill:     'The Destination Dinner',
    experiencePoints:   (city) => [
      { icon: '🏡', title: `Chef at Your ${city} Property`,         desc: `A certified hibachi chef comes to your vacation rental, lake house, or ${city} property — no restaurant logistics required.` },
      { icon: '🔥', title: 'Fully Self-Contained Setup',            desc: 'Propane teppan grill travels fully equipped — no gas hookup needed at any Indiana lake property, vacation rental, or cabin.' },
      { icon: '🎭', title: 'The Dinner of the Weekend',             desc: 'Fire tricks, fresh proteins cooked to order, the full teppanyaki show — the evening everyone plans the Indiana trip around.' },
      { icon: '✨', title: 'Property Stays Immaculate',             desc: 'Complete setup before the event and full pack-out after. Your vacation property or lake house is spotless when the chef leaves.' },
    ],
    experienceImage:    '/pics/traveling-hibachi.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a ${city} Indiana destination event`,
    areasPill:          'Serving Indiana Lakes & Southern Indiana',
    areasHeadline:      (city) => `Mobile Hibachi in ${city} and Indiana's Destination Communities`,
    areasIntro: [
      (city, state) => `We serve ${city} and Indiana's destination communities — Lake Wawasee, Evansville, Jeffersonville, New Albany, and every lake community and Southern Indiana property throughout the state.`,
      (city) => `Call or text (201) 565-3878 to confirm your ${city} date. Indiana lake summer dates fill 4–6 weeks ahead.`,
    ],
    areasButton:           'Reserve Your Destination Date',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Dinner Your ${city} Weekend Needed`,
    occasionSubtext:       'Vacation rental dinners, lake house family reunions, bachelorette weekends, and Southern Indiana gatherings — private hibachi is the Indiana destination dinner that elevates any weekend',
    faqPill:               'FAQs',
    faqHeadline:           (city, abbr) => `${city} Hibachi — Your Questions Answered`,
    testimonialSubheading: 'What Indiana Destination Hosts Are Saying',
  },
]

// ── Image themes ──────────────────────────────────────────────────────────────
const IN_IMAGE_THEMES = [
  { heroImage: '/pics/hibachi-private-chef-1.jpg' }, // Theme 0 — Indianapolis Luxury Suburbs
  { heroImage: '/pics/hibachi-event.jpg' },           // Theme 1 — Indianapolis Metro & Corporate
  { heroImage: '/pics/hibachi-at-home.jpg' },         // Theme 2 — North Indianapolis Suburban Family
  { heroImage: '/pics/backyard-hibachi-3.jpg' },      // Theme 3 — Indiana College Towns
  { heroImage: '/pics/hibachi-pool-party.jpg' },      // Theme 4 — Northern Indiana
  { heroImage: '/pics/traveling-hibachi.jpg' },       // Theme 5 — Indiana Destinations & Southern
]

// ── City experience image map ──────────────────────────────────────────────────
const IN_CITY_IMAGE_MAP = {
  // Theme 1 — Indianapolis Metro
  'indianapolis': { src: '/pics/hibachi-photo-1.jpg',      alt: (city) => `Private hibachi chef in Indianapolis, IN` },
  // Theme 0 — Indianapolis Luxury Suburbs
  'carmel':       { src: '/pics/hibachi-chef-home.jpg',    alt: (city) => `Private hibachi chef at a Carmel Indiana estate event` },
  'zionsville':   { src: '/pics/hibachi-chef-2.jpg',       alt: (city) => `Private hibachi chef at a Zionsville Indiana estate` },
  // Theme 2 — North Indianapolis Suburban
  'fishers':      { src: '/pics/hibachi-shot-1.jpg',       alt: (city) => `Backyard hibachi party in Fishers Indiana` },
  'westfield':    { src: '/pics/backyard-hibachi-2.jpg',   alt: (city) => `Backyard hibachi event in Westfield Indiana` },
  // Batch 2
  'noblesville':   { src: '/pics/hibachi-catering.jpg',     alt: (city) => `Private hibachi graduation party in Noblesville Indiana` },
  'bloomington':   { src: '/pics/hibachi-shot-2.jpg',        alt: (city) => `Backyard hibachi graduation dinner in Bloomington Indiana` },
  'west-lafayette':{ src: '/pics/private-hibachi.jpg',       alt: (city) => `Private hibachi chef in West Lafayette Indiana` },
  'lafayette':     { src: '/pics/hibachi-catering-3.jpg',    alt: (city) => `Hibachi catering in Lafayette Indiana` },
  // Batch 3
  'south-bend':    { src: '/pics/hibachi-chef-at-home.jpg',  alt: (city) => `Private hibachi chef at a South Bend Indiana event` },
  'mishawaka':     { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Backyard hibachi party in Mishawaka Indiana` },
  'fort-wayne':    { src: '/pics/hibachi-at-home.jpg',       alt: (city) => `Private hibachi chef in Fort Wayne Indiana` },
  'elkhart':       { src: '/pics/mobile-hibachi.jpg',        alt: (city) => `Hibachi catering in Elkhart Indiana` },
  // Batch 4
  'warsaw':        { src: '/pics/hibachi-colorado.jpg',      alt: (city) => `Lakeside hibachi dinner near Warsaw Indiana` },
  'evansville':    { src: '/pics/hibachi-chef-home.jpg',     alt: (city) => `Private hibachi chef in Evansville Indiana` },
  'jeffersonville':{ src: '/pics/hibachi-shot-1.jpg',        alt: (city) => `Mobile hibachi chef in Jeffersonville Indiana` },
  'new-albany':    { src: '/pics/hibachi-private-chef-1.jpg',alt: (city) => `Private hibachi chef in New Albany Indiana` },
}

// ── Support images for profileIdx cities ─────────────────────────────────────
const IN_SUPPORT_IMAGES = {
  'indianapolis': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: (city) => `Corporate hibachi event in Indianapolis, IN`,             caption: 'Indianapolis private dining events',  trustBadge: '5.0 Average Rating',                       intro: (city) => `Indianapolis professionals, corporate teams, and families celebrating Colts season, Butler graduations, and business milestones all turn to private hibachi when the occasion deserves more than a restaurant table. From Broad Ripple backyards to Mass Ave-adjacent corporate venues, our certified chefs deliver the full teppanyaki experience to your property. Here's what Indianapolis hosts are saying:` },
    cta:         { src: '/pics/hibachi-hart.jpg',          alt: (city) => `Private hibachi chef setting up in Indianapolis, IN`,     caption: 'Your Indianapolis evening starts here' },
  },
  'carmel': {
    testimonial: { src: '/pics/private-hibachi.jpg',       alt: (city) => `Estate hibachi dinner in Carmel Indiana`,                 caption: 'Carmel estate private dining',         trustBadge: 'Trusted by Hamilton County Hosts',         intro: (city) => `Carmel hosts who've discovered private hibachi consistently describe the same outcome: effortless to arrange, extraordinary to experience, and the new standard for every home occasion that follows. Arts & Design District estate dinners, Monon Trail-adjacent birthday celebrations, and Carmel High School graduation parties are our specialty in Hamilton County's finest community. See what Carmel hosts have found:` },
    cta:         { src: '/pics/hibachi-pic-2.jpg',          alt: (city) => `Private hibachi chef in Carmel Indiana`,                  caption: "Carmel's private dining standard" },
  },
  'fishers': {
    testimonial: { src: '/pics/hibachi-catering.jpg',      alt: (city) => `Backyard hibachi graduation party in Fishers Indiana`,    caption: 'Fishers graduation season',            trustBadge: 'Thousands of Happy Guests',                intro: (city) => `Fishers families celebrate at Geist Reservoir, in Hamilton Southeastern backyards, and along the Nickel Plate corridor — and private hibachi is the format that keeps every generation around the same table for two hours. Graduation season fills our Fishers calendar faster than any other event type. Here's what Fishers hosts are saying:` },
    cta:         { src: '/pics/hibachi-dallas-home.jpg',    alt: (city) => `Backyard hibachi chef in Fishers Indiana`,                caption: "The Fishers backyard dinner standard" },
  },
  'zionsville': {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',   alt: (city) => `Estate hibachi dinner in Zionsville Indiana`,             caption: 'Zionsville estate entertaining',       trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `Zionsville hosts expect exceptional — from the brick Main Street's boutique standard to Holliday Farms' estate character, this community has always known how to celebrate with intention. Private hibachi is the format that matches the setting and the occasion. Here's what Zionsville hosts have discovered:` },
    cta:         { src: '/pics/hibachi-chef-at-home.jpg',   alt: (city) => `Private hibachi chef at a Zionsville Indiana estate`,     caption: "Zionsville's estate dining standard" },
  },
  'westfield': {
    testimonial: { src: '/pics/hibachi-shot-2.jpg',        alt: (city) => `Backyard hibachi event in Westfield Indiana`,             caption: 'Westfield backyard celebrations',      trustBadge: 'Highly Rated by Indiana Hosts',            intro: (city) => `Westfield families bring the same energy to backyard celebrations that the Grand Park Sports Campus brings to game day — and private hibachi is the format that matches it. Spring Mill Station birthday parties, Westfield High School graduation dinners, and post-tournament celebration events are our core Westfield occasions. Here's what Westfield hosts are saying:` },
    cta:         { src: '/pics/hibachi-catering-3.jpg',     alt: (city) => `Backyard hibachi chef in Westfield Indiana`,              caption: "Your Westfield backyard, upgraded" },
  },
  // Batch 2
  'noblesville': {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',       alt: (city) => `Graduation hibachi party in Noblesville Indiana`,          caption: 'Noblesville graduation season',        trustBadge: 'Trusted by Hamilton County Hosts',         intro: (city) => `Noblesville is Hamilton County's fastest-growing city — Ruoff Music Center, Morse Reservoir, Federal Hill Commons, and the energy of a community that celebrates its milestones with the same enthusiasm it brings to everything else. Private hibachi is the format that matches that energy. Here's what Noblesville hosts are saying:` },
    cta:         { src: '/pics/backyard-hibachi-3.jpg',     alt: (city) => `Backyard hibachi chef in Noblesville Indiana`,             caption: 'Your Noblesville event starts here' },
  },
  'bloomington': {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',   alt: (city) => `IU graduation hibachi dinner in Bloomington Indiana`,      caption: 'Bloomington graduation season',        trustBadge: 'Thousands of Happy Guests',                intro: (city) => `Bloomington families know the IU Commencement weekend restaurant problem intimately — Kirkwood Avenue is fully reserved, downtown Monroe County is booked, and the surrounding communities offer no private room that fits 30+ family members. Private hibachi solves it completely. Here's what Bloomington hosts are saying:` },
    cta:         { src: '/pics/hibachi-pic-2.jpg',          alt: (city) => `Private hibachi chef in Bloomington Indiana`,             caption: 'The Bloomington graduation dinner solution' },
  },
  'west-lafayette': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',    alt: (city) => `Purdue graduation hibachi dinner in West Lafayette Indiana`, caption: 'West Lafayette graduation season',     trustBadge: '5.0 Average Rating',                       intro: (city) => `West Lafayette and the Purdue Commencement calendar share one characteristic: every capable graduation dinner venue in Tippecanoe County is fully reserved by the time most families realize they need one. Private hibachi solves the problem permanently. Here's what West Lafayette hosts are saying:` },
    cta:         { src: '/pics/hibachi-austin-home.jpg',    alt: (city) => `Private hibachi chef in West Lafayette Indiana`,           caption: 'The West Lafayette graduation dinner' },
  },
  'lafayette': {
    testimonial: { src: '/pics/hibachi-pic-3.jpg',         alt: (city) => `Hibachi catering in Lafayette Indiana`,                    caption: 'Lafayette graduation overflow hosts',  trustBadge: 'Highly Rated by Indiana Hosts',            intro: (city) => `Lafayette hosts understand Purdue graduation season from both sides of the Wabash — as the nearest large city to campus, Lafayette absorbs the graduation dinner overflow when Tippecanoe County restaurants are uniformly full. Private hibachi at your Lafayette home is the solution. Here's what Lafayette hosts are saying:` },
    cta:         { src: '/pics/hibachi-chef-2.jpg',         alt: (city) => `Private hibachi chef in Lafayette Indiana`,               caption: 'Lafayette private dining, reimagined' },
  },
  // Batch 3
  'south-bend': {
    testimonial: { src: '/pics/hibachi-event.jpg',         alt: (city) => `Notre Dame graduation hibachi dinner in South Bend Indiana`, caption: 'South Bend graduation season',        trustBadge: 'Trusted by Northern Indiana Hosts',        intro: (city) => `South Bend is Notre Dame country — and Notre Dame Commencement weekend is the single most in-demand private dining event in Northern Indiana. Every restaurant within fifteen miles of campus has been fully reserved since February. Private hibachi at your South Bend property is the format that solves it. Here's what South Bend hosts are saying:` },
    cta:         { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Private hibachi chef in South Bend Indiana`,              caption: 'Your South Bend dinner, your way' },
  },
  'mishawaka': {
    testimonial: { src: '/pics/hibachi-chef-2.jpg',        alt: (city) => `Backyard hibachi party in Mishawaka Indiana`,              caption: 'Mishawaka backyard celebrations',      trustBadge: 'Thousands of Happy Guests',                intro: (city) => `Mishawaka's Princess City character — the St. Joseph River, Beutter Park, Battell Park, the Lincoln Way East dining corridor — sets the context for a community that celebrates with intention. Private hibachi at your Mishawaka property delivers the private dining experience the occasion deserves. Here's what Mishawaka hosts are saying:` },
    cta:         { src: '/pics/hibachi-private-chef-1.jpg', alt: (city) => `Private hibachi chef in Mishawaka Indiana`,              caption: 'The Mishawaka private dining upgrade' },
  },
  'fort-wayne': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',    alt: (city) => `Corporate hibachi event in Fort Wayne Indiana`,            caption: 'Fort Wayne corporate private dining',  trustBadge: '5.0 Average Rating',                       intro: (city) => `Fort Wayne's Sweetwater Sound corridor, Electric Works District, Promenade Park, and Allen County executive community all create consistent demand for private dining that goes beyond what the city's impressive restaurant scene provides. Private hibachi at your Fort Wayne property or venue is the format. Here's what Fort Wayne hosts are saying:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',        alt: (city) => `Hibachi chef in Fort Wayne Indiana`,                      caption: 'Fort Wayne corporate dining, elevated' },
  },
  'elkhart': {
    testimonial: { src: '/pics/hibachi-pic-2.jpg',         alt: (city) => `Team hibachi dinner in Elkhart Indiana`,                   caption: 'Elkhart team and community events',    trustBadge: 'Highly Rated by Indiana Hosts',            intro: (city) => `Elkhart's RV industry heritage, Wellfield Botanic Gardens, the annual Jazz Festival, and a strong Northern Indiana community identity create demand for private dining that matches the occasion. Private hibachi at your Elkhart property delivers it. Here's what Elkhart hosts are saying:` },
    cta:         { src: '/pics/hibachi-shot-2.jpg',         alt: (city) => `Hibachi chef in Elkhart Indiana`,                         caption: 'Elkhart private dining, your property' },
  },
  // Batch 4
  'warsaw': {
    testimonial: { src: '/pics/hibachi-austin-home.jpg',   alt: (city) => `Lake Wawasee hibachi dinner in Warsaw Indiana`,            caption: 'Warsaw lake property dining',          trustBadge: "Kosciusko County's Favorite Hibachi",     intro: (city) => `Warsaw and Kosciusko County combine Indiana's deepest lake community tradition — Lake Wawasee, Winona Lake, the Village at Winona — with one of the state's most distinctive economic identities as the orthopedic capital of the world. Private hibachi at your lake property or Warsaw home is the format the occasion deserves. Here's what Warsaw-area hosts are saying:` },
    cta:         { src: '/pics/backyard-hibachi-2.jpg',     alt: (city) => `Private hibachi chef in Warsaw Indiana`,                   caption: 'Your Warsaw lake property dinner' },
  },
  'evansville': {
    testimonial: { src: '/pics/hibachi-catering-3.jpg',    alt: (city) => `Private hibachi event in Evansville Indiana`,              caption: 'Evansville private dining events',     trustBadge: 'Trusted by Southern Indiana Hosts',        intro: (city) => `Evansville's Ohio River character — the Ford Center, Angel Mounds, USI and UE graduation seasons, the river corridor's community-gathering tradition — creates demand for private dining that the city's restaurant scene can't always satisfy on peak graduation weekends. Private hibachi at your Evansville property is the solution. Here's what Evansville hosts are saying:` },
    cta:         { src: '/pics/hibachi-event.jpg',          alt: (city) => `Private hibachi chef in Evansville Indiana`,               caption: 'Your Evansville private dinner' },
  },
  'jeffersonville': {
    testimonial: { src: '/pics/private-hibachi.jpg',       alt: (city) => `Private hibachi near Big Four Bridge in Jeffersonville IN`, caption: 'Jeffersonville destination dining',    trustBadge: "Southern Indiana's Favorite Hibachi",     intro: (city) => `Jeffersonville sits at one of Southern Indiana's most distinctive settings — the Big Four Bridge, the Ohio River waterfront, the Louisville skyline visible from Clark County properties just across the water. Private hibachi at your Jeffersonville property delivers a dinner that matches the setting. Here's what Jeffersonville hosts are saying:` },
    cta:         { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Mobile hibachi chef in Jeffersonville Indiana`,            caption: 'Jeffersonville river corridor dining' },
  },
  'new-albany': {
    testimonial: { src: '/pics/hibachi-dallas-home.jpg',   alt: (city) => `Private hibachi event in New Albany Indiana`,              caption: 'New Albany private dining events',     trustBadge: 'Highly Rated by Southern Indiana Hosts',  intro: (city) => `New Albany's historic downtown character — the Silver Street Arts District, Culbertson Mansion State Historic Site, Floyd County's established neighborhood identity — sets the stage for home entertaining that expects quality. Private hibachi at your New Albany home delivers it. Here's what New Albany hosts are saying:` },
    cta:         { src: '/pics/mobile-hibachi-2.jpg',       alt: (city) => `Private hibachi chef in New Albany Indiana`,               caption: 'New Albany private dining, your home' },
  },
}

// ── Support fallback images (per theme) ───────────────────────────────────────
const IN_SUPPORT_FALLBACKS = [
  // Theme 0 — Indianapolis Luxury Suburbs
  {
    testimonial: { src: '/pics/hibachi-chef-at-home.jpg',  alt: (city) => `Estate hibachi dinner in ${city}, IN`,                   caption: 'Hamilton County estate dining',        trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `${city} hosts expect quality — and our private hibachi chefs deliver it at every estate event. From graduation dinners at Holliday Farms-adjacent properties to anniversary celebrations on Boone County stone patios, we bring the full teppanyaki experience to your property. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/hibachi-chef-home.jpg',      alt: (city) => `Private hibachi chef in ${city}, Indiana`,              caption: 'Hamilton County estate private dining' },
  },
  // Theme 1 — Indianapolis Metro & Corporate
  {
    testimonial: { src: '/pics/hibachi-photo-2.jpg',       alt: (city) => `Corporate hibachi event in ${city}, IN`,                 caption: 'Indianapolis metro private dining',    trustBadge: '5.0 Average Rating',                       intro: (city) => `${city} professionals and families turn to private hibachi for the occasions that deserve more than a restaurant reservation. Corporate team dinners, graduation celebrations, and milestone events — our certified chefs bring the full setup and deliver the performance at your property. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/hibachi-event.jpg',          alt: (city) => `Private hibachi chef in ${city}, Indiana`,              caption: 'Indianapolis private dining event' },
  },
  // Theme 2 — North Indianapolis Suburban Family
  {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',    alt: (city) => `Backyard hibachi graduation party in ${city}, IN`,       caption: 'Hamilton County graduation season',    trustBadge: 'Trusted by Indiana Families',              intro: (city) => `${city} families discover private hibachi when they're planning a graduation dinner in May and every Hamilton County restaurant is fully booked. The chef comes to your backyard, handles everything, and leaves your property spotless. Here's what ${city} hosts have found:` },
    cta:         { src: '/pics/hibachi-at-home.jpg',        alt: (city) => `Backyard hibachi chef in ${city}, Indiana`,             caption: 'Hamilton County backyard dining, upgraded' },
  },
  // Theme 3 — Indiana College Towns
  {
    testimonial: { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Graduation hibachi party in ${city}, IN`,                caption: 'Indiana graduation season',            trustBadge: 'Thousands of Happy Guests',                intro: (city) => `${city} families who've planned graduation dinners during university commencement season know the logistics problem well — every restaurant worth going to is fully reserved by March. Private hibachi solves it permanently. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Private hibachi chef in ${city}, Indiana`,              caption: 'Indiana graduation dinner standard' },
  },
  // Theme 4 — Northern Indiana
  {
    testimonial: { src: '/pics/hibachi-pic-2.jpg',         alt: (city) => `Community hibachi gathering in ${city}, IN`,             caption: 'Northern Indiana hosts celebrate',     trustBadge: 'Highly Rated by Indiana Hosts',            intro: (city) => `${city} families and corporate teams choose private hibachi when they want an evening that stands apart from Northern Indiana's restaurant options. Full setup, live teppanyaki performance, complete cleanup. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/hibachi-pic-3.jpg',          alt: (city) => `Private hibachi chef in ${city}, Indiana`,              caption: 'Northern Indiana private dining event' },
  },
  // Theme 5 — Indiana Destinations & Southern Indiana
  {
    testimonial: { src: '/pics/hibachi-colorado.jpg',      alt: (city) => `Vacation rental hibachi in ${city}, IN`,                 caption: 'Indiana destination hosts agree',      trustBadge: "Indiana's Favorite Hibachi Experience",   intro: (city) => `${city} vacation guests and lake property hosts discover something every summer: nothing elevates a destination weekend quite like a private hibachi dinner at the property. Our chefs travel fully equipped and deliver fresh teppanyaki with fire tricks your guests will reference for years. Here's what ${city} hosts are saying:` },
    cta:         { src: '/pics/mobile-hibachi.jpg',         alt: (city) => `Mobile hibachi chef in ${city}, Indiana`,               caption: 'Indiana destination private dining' },
  },
]

// ── Closing variants (IN generic 465–470) ─────────────────────────────────────
export const IN_CLOSING_VARIANTS = [
  // 465 — T0 Indianapolis Luxury Suburbs
  {
    headline: (city) => `${city}'s Estate Private Dining — Book Your Date`,
    sub:      (city) => `A certified hibachi chef at your ${city} estate or home. Premium proteins, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Hamilton County graduation season and estate events book early. Reserve your date now.`,
  },
  // 466 — T1 Indianapolis Metro & Corporate
  {
    headline: (city) => `Reserve Your ${city} Private Hibachi Chef`,
    sub:      (city) => `A certified teppanyaki chef for your ${city} event. Full setup, all ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Indianapolis graduation and corporate holiday events book fast. Confirm your date now.`,
  },
  // 467 — T2 North Indianapolis Suburban Family
  {
    headline: (city) => `${city} Backyard Hibachi — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your ${city} home. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `North Indianapolis graduation season books fast. Check your date now.`,
  },
  // 468 — T3 Indiana College Towns
  {
    headline: (city) => `${city} Graduation Season — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef for your ${city} graduation party or milestone event. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Indiana university graduation weekends book 4–6 weeks ahead. Secure your date now.`,
  },
  // 469 — T4 Northern Indiana
  {
    headline: (city) => `${city} Hibachi Chef — Book Your Event`,
    sub:      (city) => `A certified teppanyaki chef for your ${city} celebration. Full setup, all ingredients, complete cleanup. From $60/adult.`,
    urgency:  `Northern Indiana events book 2–4 weeks ahead. Confirm your date now.`,
  },
  // 470 — T5 Indiana Destinations & Southern Indiana
  {
    headline: (city) => `${city} Private Hibachi — Reserve Your Date`,
    sub:      (city) => `A certified mobile hibachi chef comes to your ${city} property. Full setup, live show, complete cleanup. From $60/adult.`,
    urgency:  `Indiana destination and lake events book fast in season. Check your date now.`,
  },
]

// ── City-specific closings (IN city-specific 471–487) ────────────────────────
export const IN_CITY_CLOSINGS = [
  // 471 — Indianapolis (profileIdx 0)
  {
    headline: (city) => `Reserve Your Indianapolis Private Hibachi Chef`,
    sub:      (city) => `A certified teppanyaki chef for your Indianapolis corporate event or private dinner. Full setup, all ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Indianapolis graduation season and corporate holiday events book fast. Confirm your date now.`,
  },
  // 472 — Carmel (profileIdx 1)
  {
    headline: (city) => `Carmel's Private Dining Standard — Book Your Date`,
    sub:      (city) => `A certified hibachi chef at your Carmel home or estate. Premium proteins, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Carmel High School graduation Saturdays fill 4–6 weeks out. Reserve your date early.`,
  },
  // 473 — Fishers (profileIdx 2)
  {
    headline: (city) => `Fishers Graduation Season — Don't Wait`,
    sub:      (city) => `A certified hibachi chef at your Fishers backyard or Geist Reservoir property. Full setup, live show, complete cleanup. From $60/adult.`,
    urgency:  `Hamilton Southeastern and Fishers High School graduation weekends book 4–5 weeks ahead. Secure your date now.`,
  },
  // 474 — Zionsville (profileIdx 3)
  {
    headline: (city) => `Zionsville's Estate Dining Standard — Book Your Date`,
    sub:      (city) => `A certified private hibachi chef at your Zionsville home or Boone County estate. Premium proteins, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Zionsville Community High School graduation and Boone County estate events book quickly. Reserve your date now.`,
  },
  // 475 — Westfield (profileIdx 4)
  {
    headline: (city) => `Westfield Backyard Hibachi — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your Westfield home or Grand Park-adjacent property. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Westfield graduation season and summer events book 3–5 weeks out. Check your date now.`,
  },
  // 476 — Noblesville (profileIdx 5)
  {
    headline: (city) => `Noblesville Hibachi at Home — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your Noblesville home or Morse Reservoir property. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Noblesville and Hamilton County graduation season books 4–5 weeks ahead. Reserve your date now.`,
  },
  // 477 — Bloomington (profileIdx 6)
  {
    headline: (city) => `Bloomington Hibachi at Home — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef for your Bloomington graduation party or backyard celebration. Full setup, live show, complete cleanup. From $60/adult.`,
    urgency:  `IU Commencement weekend graduation dinners book 4–6 weeks ahead. Secure your date now.`,
  },
  // 478 — West Lafayette (profileIdx 7)
  {
    headline: (city) => `West Lafayette Private Hibachi Chef — Book Your Date`,
    sub:      (city) => `A certified teppanyaki chef for your West Lafayette graduation party or corporate event. Full setup, all ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Purdue Commencement graduation dinners book 4–6 weeks ahead. Check your West Lafayette date now.`,
  },
  // 479 — Lafayette (profileIdx 8)
  {
    headline: (city) => `Lafayette Hibachi Catering — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your Lafayette home or corporate venue. Full setup, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Lafayette graduation season and Purdue weekend events book 3–5 weeks ahead. Reserve your date now.`,
  },
  // 480 — South Bend (profileIdx 9)
  {
    headline: (city) => `South Bend Hibachi at Home — Book Your Date`,
    sub:      (city) => `A certified hibachi chef for your South Bend graduation party or private event. Full setup, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Notre Dame Commencement graduation dinners book 6–8 weeks ahead. South Bend standard events: 2–3 weeks. Reserve now.`,
  },
  // 481 — Mishawaka (profileIdx 10)
  {
    headline: (city) => `Mishawaka Mobile Hibachi Chef — Reserve Your Date`,
    sub:      (city) => `A certified teppanyaki chef at your Mishawaka home or outdoor venue. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Mishawaka and South Bend area events book 2–4 weeks ahead. Notre Dame commencement: 6–8 weeks. Reserve now.`,
  },
  // 482 — Fort Wayne (profileIdx 11)
  {
    headline: (city) => `Fort Wayne Hibachi Catering — Book Your Event`,
    sub:      (city) => `A certified teppanyaki chef for your Fort Wayne corporate event or private celebration. Full setup, all ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Fort Wayne corporate holiday and graduation events book 3–4 weeks ahead. Secure your date now.`,
  },
  // 483 — Elkhart (profileIdx 12)
  {
    headline: (city) => `Elkhart Hibachi Catering — Reserve Your Date`,
    sub:      (city) => `A certified hibachi chef for your Elkhart team event or backyard celebration. Full setup, live teppanyaki performance, complete cleanup. From $60/adult.`,
    urgency:  `Elkhart graduation and corporate events book 2–4 weeks ahead. Check your date now.`,
  },
  // 484 — Warsaw (profileIdx 13)
  {
    headline: (city) => `Warsaw Mobile Hibachi Chef — Book Your Lake Event`,
    sub:      (city) => `A certified mobile hibachi chef at your Lake Wawasee property, Winona Lake cottage, or Warsaw home. Full setup, live show, complete cleanup. From $60/adult.`,
    urgency:  `Lake Wawasee and Kosciusko County summer dates fill 4–6 weeks ahead. Reserve when your property is confirmed.`,
  },
  // 485 — Evansville (profileIdx 14)
  {
    headline: (city) => `Evansville Private Hibachi Chef — Book Your Event`,
    sub:      (city) => `A certified teppanyaki chef for your Evansville graduation party or corporate event. Full setup, all ingredients, live performance, complete cleanup. From $60/adult.`,
    urgency:  `Evansville graduation season and USI/UE commencement events book 3–5 weeks ahead. Reserve your date now.`,
  },
  // 486 — Jeffersonville (profileIdx 15)
  {
    headline: (city) => `Jeffersonville Mobile Hibachi Chef — Reserve Your Date`,
    sub:      (city) => `A certified mobile hibachi chef at your Jeffersonville property or Clark County outdoor venue. Full setup, live teppanyaki show, complete cleanup. From $60/adult.`,
    urgency:  `Jeffersonville and Clark County bachelorette and graduation events book 3–4 weeks ahead. Check your date now.`,
  },
  // 487 — New Albany (profileIdx 16)
  {
    headline: (city) => `New Albany Hibachi at Home — Book Your Event`,
    sub:      (city) => `A certified hibachi chef at your New Albany home or Floyd County property. Full setup, live performance, complete cleanup. From $60/adult.`,
    urgency:  `New Albany graduation season and Southern Indiana events book 3–5 weeks ahead. Reserve your date now.`,
  },
]

// ── Intro variants (IN generic 465–470) ───────────────────────────────────────
export const IN_INTRO_VARIANTS = [
  // 465 — T0 Indianapolis Luxury Suburbs
  {
    headline: (city) => `Hibachi at Home in ${city}: Hamilton County's Private Estate Dining Experience`,
    opening:  (city, state) =>
      `${city} is one of Indiana's most discerning communities — and when it comes to entertaining at home, the standard is set by the property, the guest list, and the occasion. Private hibachi at home in ${city} brings a certified teppanyaki chef to your estate, backyard, or outdoor space with the full setup: a self-contained propane teppan grill, hand-selected proteins, all ingredients, and a live cooking performance that transforms any gathering into the evening your guests reference for months. No restaurant reservation required. The chef comes to you.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, fresh proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The live teppanyaki performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every dish cooked to order in front of your guests. For gatherings over 25, we bring dual chef stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} estate events book 2–4 weeks ahead. Graduation season (May–June) and summer milestone events fill earliest — reserve 4–6 weeks out for any Saturday event. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of Hamilton County.`,
  },
  // 466 — T1 Indianapolis Metro & Corporate
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Indianapolis Metro Private Dining Experience`,
    opening:  (city, state) =>
      `Indianapolis and its surrounding communities know how to celebrate — and the occasion that deserves more than a restaurant table has found its format. Private hibachi in ${city} brings a certified teppanyaki chef to your property with the full setup, hand-selected proteins, and a live cooking performance that makes any gathering into an evening worth attending. Corporate team dinners, graduation celebrations, birthday milestones, and anniversary events — the chef comes to you.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, all proteins, fried rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes from first flame to final plate — fire tricks, flying shrimp, and every plate cooked to order in front of your guests. For groups over 25, dual stations keep everyone eating at the same time. Full cleanup included.`,
    closing:  (city, state) =>
      `${city} events book 2–3 weeks out for standard dates. Graduation season and corporate holiday events fill faster — reserve 4–5 weeks ahead. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of greater Indianapolis.`,
  },
  // 467 — T2 North Indianapolis Suburban Family
  {
    headline: (city) => `Hibachi at Home in ${city}: Hamilton County's Backyard Private Dining Experience`,
    opening:  (city, state) =>
      `${city} is where Hamilton County families celebrate — graduation parties that bring three generations to one backyard, birthday milestones where the guest list overflows from the deck to the lawn, summer neighborhood dinners where the gathering deserves something better than a restaurant. Private hibachi at home in ${city} brings a certified teppanyaki chef to your backyard with everything needed for the full live teppanyaki experience. No reservations, no parking, no splitting the group across three tables.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, fresh proteins, fried rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every dish cooked to order at the teppan in front of your guests. For graduations over 25, we bring two stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} graduation season (May–June) is our fastest-filling period in North Indianapolis. Book 4–5 weeks ahead for any graduation Saturday. Standard summer events: 2–3 weeks. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of Hamilton County.`,
  },
  // 468 — T3 Indiana College Towns
  {
    headline: (city) => `Hibachi at Home in ${city}: Indiana's University Private Dining Experience`,
    opening:  (city, state) =>
      `${city} is a college town that celebrates with intention — graduation weekends that fill every restaurant for miles, university milestone events that bring families from across the country, and a residential community built around the academic calendar. Private hibachi at home in ${city} brings a certified teppanyaki chef to your backyard or outdoor space with the full setup, all ingredients, and a live cooking performance that solves the graduation dinner logistics problem permanently.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, fresh proteins, fried rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order. For graduation groups over 25, we bring dual stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} graduation season is our highest-demand period in this market. Book 4–6 weeks ahead for graduation-weekend events. Standard events: 2–3 weeks. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 469 — T4 Northern Indiana
  {
    headline: (city) => `Hibachi at Home in ${city}: Northern Indiana's Private Dining Experience`,
    opening:  (city, state) =>
      `${city} celebrates with the warmth and directness that characterizes Northern Indiana — graduation dinners that bring extended families from across the Midwest, community milestone events that matter, and a professional community that knows the difference between a good dinner and a memorable one. Private hibachi at home in ${city} brings a certified teppanyaki chef to your backyard or outdoor space with the full setup and a live cooking performance that turns any gathering into an evening your guests describe for months.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, fresh proteins, fried rice, vegetables, sauces, plates, and chopsticks. The performance runs 90–120 minutes — fire tricks, flying shrimp, and every plate cooked to order. For groups over 25, we bring two chef stations. Full cleanup when dinner is done.`,
    closing:  (city, state) =>
      `${city} events book 2–3 weeks out for standard occasions. Graduation season and corporate events fill faster. Starting at $60/adult, $30/child, $600 event minimum. Serving ${city} and all of Northern Indiana.`,
  },
  // 470 — T5 Indiana Destinations & Southern Indiana
  {
    headline: (city) => `Mobile Hibachi Chef in ${city}: Indiana's Destination Private Dining Experience`,
    opening:  (city, state) =>
      `${city} is a destination — and the best dinner of a trip to an Indiana destination shouldn't involve fighting for a table at a restaurant that's fully booked before you arrive. Mobile hibachi at your ${city} vacation property, lake house, or home brings a certified teppanyaki chef to your outdoor space with the full setup, all ingredients, and a live cooking performance that makes the dinner the centerpiece of the trip. The evening everyone plans the weekend around.`,
    middle:   (city, state) =>
      `Your chef arrives with everything: teppan grill, propane, hand-selected proteins, fried rice, vegetables, house-made sauces, plates, and chopsticks. The live performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your property is left exactly as you found it.`,
    closing:  (city, state) =>
      `${city} destination events book 4–6 weeks ahead in peak season. Lake community and vacation rental events fill fastest. Starting at $60/adult, $30/child, $600 event minimum. Confirm outdoor cooking is permitted at your rental before booking.`,
  },
]

// ── City-specific intros (IN city-specific 471–487) ──────────────────────────
export const IN_CITY_INTROS = [
  // 471 — Indianapolis (profileIdx 0)
  {
    headline: () => `Indianapolis Private Hibachi Chef — Monument Circle, Mass Ave, Broad Ripple & Lucas Oil Corridor`,
    opening:  () =>
      `Indianapolis, Indiana is a city built around shared moments — the Colts season that unites strangers at Lucas Oil Stadium, the Pacers energy at Gainbridge Fieldhouse, the Indianapolis 500 weekend that fills every hotel and backyard in the city, the Mass Ave arts district's openings and dinners, the Broad Ripple Village's backyard block party tradition, the Fountain Square community-gathering culture. Eli Lilly, Salesforce Tower, Anthem (Elevance Health), Simon Property Group, Cummins, and Rolls-Royce North America together make Indianapolis one of the Midwest's most significant corporate event cities. Butler University and IUPUI send thousands of graduates across the stage each May — and thousands of families looking for a dinner that matches the occasion.`,
    middle:   () =>
      `Our private hibachi chef service covers every corner of Indianapolis and every occasion on its calendar. A corporate team appreciation dinner for twenty-eight colleagues at a Mass Ave-adjacent property after a major milestone. A graduation dinner for forty family members at an IUPUI graduate's Fountain Square home on a May Saturday when every reservation in Marion County was taken three months earlier. A Broad Ripple birthday party where the backyard already looks the part and the event just needs a chef who does too. A Keystone at the Crossing-area anniversary dinner where the occasion deserves proteins that match the setting. We arrive with everything: a self-contained propane teppan grill, hand-selected proteins, all ingredients, and 90–120 minutes of live teppanyaki performance. Full cleanup when dinner is done.`,
    closing:  () =>
      `Indianapolis events book 2–3 weeks out for standard dates. Butler University and IUPUI graduation Saturdays in May fill our calendar 4–6 weeks ahead. Corporate holiday events from October through December book earlier — the host who calls in September keeps their Friday. We serve all of Indianapolis — Fountain Square, Broad Ripple, Meridian-Kessler, Butler-Tarkington, Nora, North Meridian Street, Eagle Creek, and all of Marion County. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 472 — Carmel (profileIdx 1)
  {
    headline: () => `Hibachi at Home in Carmel — Arts & Design District, Monon Trail & Hamilton County Estate Dining`,
    opening:  () =>
      `Carmel, Indiana sets a standard. The Arts & Design District's European village character, the Monon Trail's connectivity through neighborhoods where homes were designed with the outdoor entertaining season in mind, the Carmel City Center's cultural calendar anchored by the Palladium concert hall and the Tarkington Theatre, Midtown Carmel's boutique walkability, the Proscenium's luxury residential corridor — all of these are expressions of a community that takes the quality of its experiences seriously. Carmel High School's graduation tradition, one of Indiana's largest and most decorated programs, creates one of the state's most concentrated graduation dinner markets each May and June. The executive community anchored by Hamilton County's corporate corridor entertains frequently, and for the occasions that matter most, a restaurant reservation is never the right format.`,
    middle:   () =>
      `Our private hibachi chef service is built for the Carmel hosting occasion. Whether it's a Carmel High School graduation dinner for forty-two family members gathered at a Meridian Corridor estate with guests who've flown in from six states, an anniversary celebration at a Proscenium property where the setting is already extraordinary, a Monon Trail-adjacent birthday where the neighborhood walks over and the evening becomes a community memory, or a corporate executive dinner where the impression made matters as much as the food — our chef arrives fully equipped and manages every detail from setup to cleanup. The performance runs 90–120 minutes from first flame to final plate. Full cleanup when dinner is done. Your Carmel property is exactly as you left it.`,
    closing:  () =>
      `Carmel graduation season (May–June) fills our calendar fastest of any Hamilton County market. Carmel High School graduation Saturdays book 4–6 weeks ahead. Arts & Design District celebrations, Monon Trail-adjacent birthday parties, and Midtown Carmel anniversary dinners all fill early in spring. Serving Carmel and all of Hamilton County — Fishers, Westfield, Zionsville, Noblesville, and Indianapolis. Starting at $60/adult, $30/child, $600 event minimum. Premium proteins available.`,
  },
  // 473 — Fishers (profileIdx 2)
  {
    headline: () => `Hibachi at Home in Fishers — Geist Reservoir, Nickel Plate District & Hamilton County's Fastest-Growing City`,
    opening:  () =>
      `Fishers, Indiana has become one of America's most celebrated places to live — and the families who chose it know exactly why. Geist Reservoir's lakefront community, where waterfront properties host the kind of backyard gatherings that define Indiana summer entertaining. The Nickel Plate District's walkable energy, where restaurants and community events fill the calendar year-round. Conner Prairie Interactive History Park's seasonal programming. The Fishers Event Center's live entertainment calendar. Hamilton Southeastern High School and Fishers High School's graduation seasons, which together fill Hamilton County restaurants so completely that a May Saturday reservation at anything worth going to is unavailable by March.`,
    middle:   () =>
      `Our private hibachi chef service was built for exactly the Fishers backyard occasion. A Geist Reservoir waterfront graduation dinner where thirty-eight family members from four states gather at a lakefront property on a May evening — no restaurant table configuration comes close to this setting. A Nickel Plate District-adjacent birthday party where the host wants an evening that's genuinely different from Fishers' excellent restaurant scene. A Fall Creek Township neighborhood anniversary dinner where the backyard, the season, and the occasion together create the conditions for an evening nobody forgets. A Hamilton Southeastern graduation party where the private hibachi chef provides the entertainment that keeps the conversation going for two hours after the last plate is cleared. We arrive with everything — full self-contained setup — and leave with everything when dinner is done.`,
    closing:  () =>
      `Fishers graduation season (May–June) is our fastest-booking period in the North Indianapolis corridor. Hamilton Southeastern and Fishers High School graduation Saturdays fill 4–5 weeks ahead. Geist Reservoir summer events and Nickel Plate District-adjacent celebrations book 3–4 weeks out. Serving Fishers and all of Hamilton County — Carmel, Noblesville, Westfield, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 474 — Zionsville (profileIdx 3)
  {
    headline: () => `Hibachi at Home in Zionsville — Boone County's Brick Main Street, Holliday Farms & Estate Private Dining`,
    opening:  () =>
      `Zionsville, Indiana is Indiana's most distinctive luxury small town — a community where the brick Main Street corridor, Boone County's rolling landscape, Holliday Farms' exceptional residential character, Trader's Point Creamery's farm-and-community culture, and Cool Creek Park's natural setting combine with one of the highest median household incomes in the state. Zionsville Community High School's graduation tradition, the Boone County executive residential community, and a standard for home entertaining that's been set by a generation of Zionsville hosts who invested in their properties precisely to host occasions like this one.`,
    middle:   () =>
      `Our private hibachi chef service is the right format for the Zionsville hosting tradition. Whether it's a Zionsville Community High School graduation dinner at a Holliday Farms-adjacent estate for thirty-eight family members who've driven from across the Midwest, an anniversary celebration at a Boone County property where the setting conveys something about the couple long before the food arrives, a milestone birthday dinner on a property whose stone patio and manicured grounds already set a high bar, or a corporate executive dinner where the host wants to entertain out-of-town leadership in a setting that a Carmel or Indianapolis restaurant cannot match — our chef arrives fully equipped and manages every detail from first arrival to final cleanup. Full cleanup when dinner is done. Your Zionsville property is spotless when the chef leaves.`,
    closing:  () =>
      `Zionsville private events book 3–5 weeks ahead for standard occasions. Zionsville Community High School graduation Saturdays in May fill 4–6 weeks out — Boone County graduation families who know their date should reserve early. Serving Zionsville and surrounding Boone and Hamilton County communities — Carmel, Westfield, Lebanon, and surrounding towns. Starting at $60/adult, $30/child, $600 event minimum. Premium proteins — filet mignon, lobster tail — available for any Zionsville occasion.`,
  },
  // 475 — Westfield (profileIdx 4)
  {
    headline: () => `Backyard Hibachi in Westfield — Grand Park, Spring Mill Station & Hamilton County's Sports Community`,
    opening:  () =>
      `Westfield, Indiana is where Hamilton County brings its sports families, its backyard entertaining culture, and its Midwest-sized sense of occasion. Grand Park Sports Campus — the largest youth sports facility in North America — brings visiting families from every state to Westfield each summer and fall, and the families who live here have built the community around exactly that energy. Spring Mill Station's growing neighborhood character, Union Street's development corridor, and Westfield High School Rock Nation's graduation tradition together form a community that celebrates with frequency, intention, and the straightforward enthusiasm of a Midwest sports town.`,
    middle:   () =>
      `Our private hibachi chef service is a natural fit for the Westfield backyard occasion. A team celebration dinner for twenty-four families at a Spring Mill Station-adjacent property after a Grand Park tournament that ran through Saturday afternoon. A Westfield High School graduation backyard party where the guest list is the whole family extended over two generations. A Rock Nation summer neighborhood gathering where the host already has the outdoor space set up and just needs a chef who turns it into an event. A fall birthday party at a Westfield estate where the Hamilton County outdoor entertaining season is at its best. Our chef arrives fully equipped, sets up in your backyard in 20 minutes, and runs a 90–120 minute live teppanyaki show that becomes the evening's anchor. Full cleanup when dinner is done.`,
    closing:  () =>
      `Westfield graduation season (May–June) and Grand Park summer events are our highest-demand periods in the West Hamilton County corridor. Westfield High School graduation Saturdays book 3–5 weeks ahead. Grand Park tournament-adjacent celebration events book with shorter lead times when available — early booking ensures your date. Serving Westfield and all of Hamilton County — Carmel, Zionsville, Noblesville, and surrounding communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 476 — Noblesville (profileIdx 5)
  {
    headline: () => `Hibachi at Home in Noblesville — Ruoff Music Center, Morse Reservoir & Hamilton County's Fastest-Growing City`,
    opening:  () =>
      `Noblesville, Indiana is Hamilton County's fastest-growing city — and the community that has absorbed the county's growth with the outdoor entertaining culture that growth brings. Ruoff Music Center, one of Indiana's premier outdoor amphitheaters, puts Noblesville at the center of Hamilton County's entertainment calendar. Morse Reservoir's lakefront neighborhoods create a distinct private-dining market of their own: waterfront decks and patios where the setting already does half the work. Federal Hill Commons, the Hamilton County Government and Courts Center, and a residential community built around outdoor life and milestone celebration make Noblesville the next frontier of Hamilton County private dining.`,
    middle:   () =>
      `Our private hibachi chef service is designed for exactly the Noblesville backyard and lakefront occasion. Whether it's a Hamilton County seat graduation dinner for thirty-four family members on a May Saturday when every Noblesville and Carmel restaurant is fully booked, an anniversary dinner at a Morse Reservoir waterfront property where the setting and the live teppanyaki performance together create an extraordinary evening, or a summer birthday party where the neighborhood gathers in the backyard and the chef becomes the evening's entertainment for two hours — we arrive fully equipped and manage every detail from setup through complete cleanup. Graduation season (May–June) is our fastest-filling window across all of Hamilton County. The host who books in April keeps their date.`,
    closing:  () =>
      `Noblesville graduation events book 4–5 weeks ahead for any May or June Saturday. Morse Reservoir summer events and Federal Hill Commons-area celebrations: 2–4 weeks. Serving Noblesville and all of Hamilton County — Carmel, Fishers, Westfield, Zionsville, Indianapolis, and surrounding central Indiana communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 477 — Bloomington (profileIdx 6)
  {
    headline: () => `Hibachi at Home in Bloomington — IU Campus, Kirkwood Avenue & Monroe Lake Private Dining`,
    opening:  () =>
      `Bloomington, Indiana is Indiana University — and Indiana University creates one of the state's most concentrated graduation dinner markets every May. Sample Gates, Kirkwood Avenue, the IU Memorial Union, Assembly Hall, the IU Auditorium, and the surrounding Limestone City neighborhoods together form a campus community where thirty to forty family members gathering for a graduation dinner constitute a perfectly ordinary May Saturday. The problem is that every restaurant within reasonable distance of campus knows this, and they've been fully reserved since March. Private hibachi at your Bloomington home, Monroe County property, or Monroe Lake cabin is the solution that doesn't require a reservation.`,
    middle:   () =>
      `Our private hibachi chef service covers the full range of Bloomington occasions. A IU Commencement dinner for thirty-eight family members from six states at a Kirkwood corridor home on a May Saturday when every table on Kirkwood was taken. A Monroe Lake cabin weekend dinner where the water is visible from the deck and the chef sets up the teppan grill at the property fully self-contained. A faculty appreciation dinner at a University neighborhood home where the format — everyone gathered at the same grill, watching the same chef, eating the same exceptional meal — creates the evening that departmental dinners at the Indiana Memorial Union never quite achieve. We arrive with everything from teppan grill to complete cleanup.`,
    closing:  () =>
      `Bloomington IU graduation season (May–June) books 4–6 weeks ahead for commencement-weekend Saturday events. Monroe Lake summer events: 3–5 weeks. Standard Bloomington events: 2–3 weeks. Serving Bloomington and all of Monroe County — Ellettsville, Martinsville, Bedford, Spencer, and surrounding South-Central Indiana communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 478 — West Lafayette (profileIdx 7)
  {
    headline: () => `Private Hibachi Chef in West Lafayette — Purdue University, Ross-Ade Stadium & Tippecanoe County`,
    opening:  () =>
      `West Lafayette, Indiana is Purdue University — and Purdue University produces one of Indiana's most demanding graduation dinner markets each May. Ross-Ade Stadium, Mackey Arena, Elliott Hall of Music, the Chauncey Hill District, and the Levee District together anchor a university community where graduation families expect exceptional and restaurants in Tippecanoe County are uniformly full on Commencement weekend by February. The private hibachi chef at your West Lafayette home or Chauncey Hill-adjacent property is the graduation dinner format that doesn't require a reservation at a restaurant that stopped taking them in January.`,
    middle:   () =>
      `Our private hibachi chef service is built for the Purdue Commencement occasion and every other West Lafayette milestone that follows it. A Purdue engineering graduation dinner for thirty-six family members from five states at a Tippecanoe County home on the Commencement Saturday when every restaurant corridor was fully committed. A Chauncey Hill property birthday party where twenty-four guests gather around the teppan grill for ninety minutes and the chef's performance becomes the evening's anchor. A corporate faculty dinner at a West Lafayette home where the live teppanyaki format creates the connection that a restaurant private room never manages. Our chefs arrive fully equipped and manage everything through complete cleanup.`,
    closing:  () =>
      `West Lafayette Purdue graduation season is our highest-demand period in the Tippecanoe County market. Book 4–6 weeks ahead for any Commencement-weekend Saturday. Chauncey Hill-area events and standard West Lafayette celebrations: 2–3 weeks. Serving West Lafayette and all of Tippecanoe County — Lafayette, Frankfort, Crawfordsville, Delphi, and surrounding North-Central Indiana communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 479 — Lafayette (profileIdx 8)
  {
    headline: () => `Hibachi Catering in Lafayette — Tippecanoe County, Riehle Plaza & Purdue Graduation Season`,
    opening:  () =>
      `Lafayette, Indiana is the urban counterpart to Purdue's West Lafayette campus — and every Purdue Commencement weekend, Lafayette becomes the city where visiting families who couldn't find a restaurant reservation in West Lafayette look for dinner. Downtown Lafayette's arts district, Riehle Plaza, Columbian Park, the Moses Fowler House historic corridor, and a residential community with strong home entertaining traditions all create demand for private dining that goes beyond what the Wabash River corridor's restaurant scene can serve on peak graduation weekends.`,
    middle:   () =>
      `Our private hibachi chef service serves the full Lafayette market: graduation overflow dinners for families who are hosting Purdue relatives from out of state and want an occasion that doesn't require a reservation at a restaurant that doesn't have one; corporate catering events for Tippecanoe County businesses and professional groups; birthday parties and anniversary dinners at Lafayette homes where the backyard setting is already excellent and the chef completes it. We arrive with everything — teppan grill, propane, all proteins, fried rice, vegetables, sauces, plates, and chopsticks — and leave with everything when the dinner is done.`,
    closing:  () =>
      `Lafayette graduation season (May–June) and Purdue football weekend events book 3–4 weeks ahead. Corporate holiday events October through December: 3–5 weeks. Standard Lafayette occasions: 2–3 weeks. Serving Lafayette and all of Tippecanoe County — West Lafayette, Frankfort, Crawfordsville, Delphi, Attica, and surrounding Central Indiana communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 480 — South Bend (profileIdx 9)
  {
    headline: () => `Hibachi at Home in South Bend — Notre Dame, College Football Hall of Fame & St. Joseph County`,
    opening:  () =>
      `South Bend, Indiana is Notre Dame — and Notre Dame creates one of the most concentrated and in-demand graduation dinner markets in the entire Midwest. The Grotto, Touchdown Jesus (the Word of Life mural), the Basilica, the Hesburgh Library, and the entire Notre Dame campus experience reaches its apex each May at Commencement, when forty thousand families descend on St. Joseph County looking for a dinner that matches the occasion. The College Football Hall of Fame, the East Race Waterway, Howard Park, Four Winds Field, and the Studebaker National Museum all contribute to a South Bend cultural identity that takes its celebrations seriously — and graduation is the most serious one.`,
    middle:   () =>
      `Our private hibachi chef service is built for the Notre Dame graduation dinner challenge and every other South Bend milestone that surrounds it. A Commencement dinner for forty-two family members from seven states at a South Bend property on the May Saturday when every restaurant in St. Joseph County was fully committed — the chef arrives with dual stations and runs two hours of live teppanyaki performance for the whole family, together. A corporate team appreciation dinner for a downtown South Bend company, the East Race corridor property, the Howard Park-adjacent venue, the St. Joseph River neighborhood. The chef arrives fully equipped and manages everything through complete cleanup.`,
    closing:  () =>
      `Notre Dame Commencement graduation dinners book 6–8 weeks ahead — this is our most in-demand date in all of Northern Indiana and one of the highest-demand dates in the state. Standard South Bend events: 2–3 weeks. Serving South Bend and all of St. Joseph County — Mishawaka, Granger, Goshen, Niles, and surrounding Northern Indiana communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 481 — Mishawaka (profileIdx 10)
  {
    headline: () => `Mobile Hibachi Chef in Mishawaka — The Princess City, Beutter Park & St. Joseph River Dining`,
    opening:  () =>
      `Mishawaka, Indiana — the Princess City — sits just east of South Bend on the St. Joseph River, with its own distinct character: Beutter Park and Battell Park's riverfront settings, Lincoln Way East's dining and shopping corridor, the St. Joseph River's outdoor gathering culture, and a residential community that entertains frequently and well. Notre Dame's proximity means Mishawaka shares South Bend's graduation season demand without necessarily getting the name recognition — but the families who live here know exactly what they have, and they celebrate it accordingly.`,
    middle:   () =>
      `Our private hibachi chef service covers the full Mishawaka occasion. A Princess City birthday backyard party for twenty-eight guests where the chef's performance becomes the evening's entertainment for ninety solid minutes. An anniversary dinner at a St. Joseph River-adjacent property where the setting and the live cooking together create an evening the couple and their guests reference for months. A Penn High School graduation party for thirty family members where the chef handles everything — setup, performance, cleanup — and the host's only job is to enjoy the occasion. We arrive fully equipped and leave with everything when dinner is done.`,
    closing:  () =>
      `Mishawaka and South Bend area events book 2–4 weeks ahead for most occasions. Notre Dame Commencement-adjacent events: 4–6 weeks minimum. Serving Mishawaka and surrounding St. Joseph County — South Bend, Granger, Osceola, Elkhart, and surrounding Northern Indiana communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 482 — Fort Wayne (profileIdx 11)
  {
    headline: () => `Hibachi Catering in Fort Wayne — Sweetwater, Electric Works, Promenade Park & Allen County`,
    opening:  () =>
      `Fort Wayne, Indiana is the state's second city — and it has built a genuinely impressive dining and entertainment ecosystem around that identity. Sweetwater Sound's campus brings musicians and audio professionals from across the country to Allen County. The Electric Works District's adaptive reuse of the old General Electric campus is creating a new mixed-use cultural center. Promenade Park's riverfront has transformed downtown Fort Wayne's outdoor gathering culture. Parkview Field's minor league baseball draws thousands of fans to the near-downtown neighborhood. And through all of it, Fort Wayne remains a city where graduation season fills Allen County restaurants well ahead of commencement and corporate teams need an entertainment option that goes beyond what the city's excellent restaurant scene alone provides.`,
    middle:   () =>
      `Our private hibachi chef service is built for the Fort Wayne corporate occasion, the Allen County graduation dinner, and every milestone event in between. A Sweetwater-adjacent corporate team dinner for thirty colleagues at an outdoor company venue where the live teppanyaki performance does what restaurant private rooms rarely manage — brings everyone together at the same moment of the same experience. A Fort Wayne graduation party for thirty-five family members where the chef's dual stations keep everyone eating at the same time. A summer birthday party in a Fort Wayne backyard where the host wanted something genuinely different from the city's dining options. We arrive with everything and leave with everything when dinner is done.`,
    closing:  () =>
      `Fort Wayne corporate holiday events (October through December) and graduation season (May–June) both book 3–4 weeks ahead. Sweetwater Sound event-adjacent dates and Electric Works District-area corporate events: 3–5 weeks. Standard Fort Wayne events: 2–3 weeks. Serving Fort Wayne and all of Allen County — Auburn, Huntington, Bluffton, Kendallville, Columbia City, and surrounding Northeast Indiana communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 483 — Elkhart (profileIdx 12)
  {
    headline: () => `Hibachi Catering in Elkhart — RV Capital, Wellfield Botanic Gardens & Northern Indiana`,
    opening:  () =>
      `Elkhart, Indiana is the RV capital of the world — and the Elkhart County community that has built that identity over generations knows how to mark milestones. The RV/MH Hall of Fame and Museum celebrates an industry that calls Elkhart home. The Wellfield Botanic Gardens provides one of Northern Indiana's finest outdoor event settings. The Elkhart Jazz Festival draws visitors to the city each summer. The NIBCO Aquatic Center and Goshen College-adjacent communities round out a Kosciusko and Elkhart County region with consistent demand for private dining that goes beyond standard Northern Indiana restaurant options.`,
    middle:   () =>
      `Our private hibachi chef service covers the Elkhart corporate occasion, the Goshen-adjacent graduation dinner, and every team and community celebration in between. A corporate team dinner for an Elkhart County RV industry group at an outdoor company property where the live teppanyaki performance creates the team connection that restaurant-organized evenings rarely manage. A graduation party for thirty-two family members from across the Midwest where the chef's complete teppanyaki show holds every age around the grill for two hours. A birthday celebration where the host wanted something that the city's dining scene — good as it is — genuinely cannot provide. We arrive fully equipped and complete cleanup before the last guest leaves.`,
    closing:  () =>
      `Elkhart graduation and corporate events book 2–4 weeks ahead. Notre Dame Commencement-adjacent dates: 4–6 weeks minimum. Serving Elkhart and surrounding Elkhart County — Goshen, Mishawaka, Nappanee, Bristol, Wakarusa, and surrounding Northern Indiana communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 484 — Warsaw (profileIdx 13)
  {
    headline: () => `Mobile Hibachi Chef in Warsaw — Lake Wawasee, Winona Lake & Kosciusko County`,
    opening:  () =>
      `Warsaw, Indiana is the orthopedic capital of the world — home to Zimmer Biomet, DePuy Synthes, Biomet, and dozens of orthopedic medical device companies that together employ tens of thousands of professionals in Kosciusko County. But Warsaw is also Indiana's lake community anchor: Lake Wawasee, the state's largest natural lake, sits just east of the city with shoreline properties that define Midwest lakefront entertaining. Winona Lake, the Village at Winona, the Grace College campus, and Syracuse Lake extend the lake-and-destination character throughout Kosciusko County. The combination of professional industry wealth and Indiana's finest lake community creates private dining demand that seasonal restaurants at the water's edge can't always satisfy.`,
    middle:   () =>
      `Our private mobile hibachi chef service is built for exactly this occasion: the Lake Wawasee waterfront deck dinner for twenty guests, where the propane teppan grill travels fully self-contained to the property with no gas hookup required. The Winona Lake cottage family reunion dinner where twenty-eight family members from five states gather for the weekend and the Saturday dinner becomes the anchor memory. The orthopedic industry corporate team appreciation event at a Warsaw corporate property where the format creates team connection rather than just shared attendance. We arrive with everything — teppan grill, all proteins, all ingredients, complete cleanup — and leave with everything when the dinner is done.`,
    closing:  () =>
      `Lake Wawasee and Kosciusko County lake properties book our calendar 4–6 weeks ahead in peak season (Memorial Day through Labor Day). Book as soon as your lake rental or property weekend is confirmed. Standard Warsaw-area events: 2–3 weeks. Serving Warsaw and all of Kosciusko County — Winona Lake, Syracuse, North Webster, Plymouth, Rochester, and surrounding Indiana lake communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 485 — Evansville (profileIdx 14)
  {
    headline: () => `Private Hibachi Chef in Evansville — Ohio River, University Corridor & Vanderburgh County`,
    opening:  () =>
      `Evansville, Indiana is the largest city in Indiana's southwestern quadrant — and it carries the cultural weight of a city that has been Southern Indiana's center of gravity for well over a century. The University of Evansville's graduation season, the University of Southern Indiana's Commencement, the Ford Center's event calendar, the Ohio River waterfront's gathering culture, Angel Mounds State Historic Site, and a professional community anchored by major healthcare, manufacturing, and service employers all create demand for private dining that goes well beyond what Evansville's solid restaurant scene can accommodate on peak graduation weekends.`,
    middle:   () =>
      `Our private hibachi chef service covers the full Evansville occasion. A UE or USI graduation dinner for thirty-four family members at an Evansville property on a Commencement Saturday when every private room in Vanderburgh County was full. A corporate team appreciation dinner at an Ohio River corridor venue where the live teppanyaki performance creates the team connection that standard Evansville restaurant outings rarely achieve. A birthday party in an Evansville backyard where the host wanted something that genuinely stood apart from the city's dining options. We arrive with everything — teppan grill, propane, all ingredients, sauces, plates, and chopsticks — and leave with everything when dinner is done.`,
    closing:  () =>
      `Evansville UE and USI graduation season books 3–5 weeks ahead. Corporate holiday events October through December: 3–4 weeks. Standard Evansville events: 2–3 weeks. Serving Evansville and all of Vanderburgh County — Newburgh, Boonville, Mount Vernon, Henderson (KY), and surrounding Tri-State communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 486 — Jeffersonville (profileIdx 15)
  {
    headline: () => `Mobile Hibachi Chef in Jeffersonville — Big Four Bridge, Ohio River & Clark County Southern Indiana`,
    opening:  () =>
      `Jeffersonville, Indiana occupies one of Southern Indiana's most distinctive geographic positions: directly across the Ohio River from Louisville, Kentucky, with the Big Four Bridge pedestrian connection, the Jeffersonville riverfront, Schimpff's Confectionery's Main Street anchor, and the Clark County outdoor gathering tradition all contributing to a community that draws Louisville visitors and Southern Indiana families alike. Charlestown State Park's natural setting, the Clark County Fairgrounds, and a growing residential community along the Ohio River create consistent demand for private dining that the Jeffersonville-Louisville restaurant bridge can't always satisfy on graduation weekends and bachelorette season.`,
    middle:   () =>
      `Our private mobile hibachi chef service is built for the Jeffersonville occasion. A bachelorette weekend at a Clark County rental property with the Big Four Bridge and Louisville skyline visible from the deck — the private hibachi chef sets up, runs a complete teppanyaki performance for fourteen guests, and creates the Saturday evening that the entire group will reference when planning the next bachelorette. A Jeffersonville graduation dinner for thirty family members where the chef handles everything from setup through complete cleanup. An anniversary dinner at an Ohio River property where the setting and the live cooking together create an evening that matches the view. We arrive fully equipped and leave with everything when dinner is done.`,
    closing:  () =>
      `Jeffersonville bachelorette weekends and graduation events book 3–4 weeks ahead. Ohio River waterfront property events in summer: 4–5 weeks. Standard Clark County events: 2–3 weeks. Serving Jeffersonville and all of Clark County — New Albany, Clarksville, Sellersburg, Charlestown, Georgetown, and surrounding Southern Indiana communities. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
  // 487 — New Albany (profileIdx 16)
  {
    headline: () => `Hibachi at Home in New Albany — Silver Street Arts District, Culbertson Mansion & Floyd County`,
    opening:  () =>
      `New Albany, Indiana is Southern Indiana's most historically distinctive residential community — the Silver Street Arts District, the Culbertson Mansion State Historic Site, downtown New Albany's Main Street historic corridor, and the Floyd County neighborhoods that developed in the Ohio River's bluff-and-valley terrain all contribute to a character that sets New Albany apart from every other Southern Indiana community. New Albany High School's graduation tradition, the Floyd County professional community, and a residential culture of home entertaining that goes back generations create demand for private dining that the city's growing restaurant scene is increasingly equipped to serve — and that private hibachi delivers in a way that no restaurant can replicate.`,
    middle:   () =>
      `Our private hibachi chef service is the right format for the New Albany hosting tradition. Whether it's a New Albany High School graduation dinner for thirty-six family members in a Floyd County backyard on a May Saturday when every restaurant in Clark-Floyd County was fully committed, an anniversary celebration at a Silver Street Arts District-adjacent property where the setting conveys something about the couple before the food arrives, a birthday party in a New Albany historic neighborhood where the host wanted something that matched the character of the home, or a corporate team event at a Southern Indiana venue where the connection created matters as much as the food — we arrive fully equipped and manage every detail through complete cleanup.`,
    closing:  () =>
      `New Albany graduation season (May–June) books 3–5 weeks ahead for Saturday events. Silver Street Arts District-adjacent events and historic district anniversary dinners: 2–4 weeks. Serving New Albany and all of Floyd County — Jeffersonville, Clarksville, Georgetown, Floyds Knobs, and all of Southern Indiana. Starting at $60/adult, $30/child, $600 event minimum.`,
  },
]

// ── H1 prefix lookup tables ───────────────────────────────────────────────────
const IN_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in', // 0  — Indianapolis
  'Hibachi at Home in',      // 1  — Carmel
  'Hibachi at Home in',      // 2  — Fishers
  'Hibachi at Home in',      // 3  — Zionsville
  'Backyard Hibachi in',     // 4  — Westfield
  // Batch 2 (added when built)
  'Hibachi at Home in',      // 5  — Noblesville
  'Hibachi at Home in',      // 6  — Bloomington
  'Private Hibachi Chef in', // 7  — West Lafayette
  'Hibachi Catering in',     // 8  — Lafayette
  // Batch 3
  'Hibachi at Home in',      // 9  — South Bend
  'Mobile Hibachi Chef in',  // 10 — Mishawaka
  'Hibachi Catering in',     // 11 — Fort Wayne
  'Hibachi Catering in',     // 12 — Elkhart
  // Batch 4
  'Mobile Hibachi Chef in',  // 13 — Warsaw
  'Private Hibachi Chef in', // 14 — Evansville
  'Mobile Hibachi Chef in',  // 15 — Jeffersonville
  'Hibachi at Home in',      // 16 — New Albany
]

const IN_THEME_H1_PREFIXES = [
  'Hibachi at Home in',       // T0 — Indianapolis Luxury Suburbs
  'Private Hibachi Chef in',  // T1 — Indianapolis Metro & Corporate
  'Hibachi at Home in',       // T2 — North Indianapolis Suburban Family
  'Hibachi at Home in',       // T3 — Indiana College Towns
  'Hibachi Catering in',      // T4 — Northern Indiana
  'Mobile Hibachi Chef in',   // T5 — Indiana Destinations & Southern
]

// ── Custom meta overrides ─────────────────────────────────────────────────────
const IN_CUSTOM_META = {
  'indianapolis': {
    title: 'Private Hibachi Chef in Indianapolis, IN | Corporate & Private Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Indianapolis, Indiana. Corporate team dinners, graduation parties, and milestone celebrations. Certified teppanyaki chef, full setup & cleanup. From $60/adult. Serving all of Indianapolis and Marion County.',
  },
  'carmel': {
    title: 'Hibachi at Home in Carmel, IN | Arts & Design District Estate Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Carmel, Indiana for graduation parties, estate dinners, and milestone celebrations. Arts & Design District, Monon Trail, Carmel High School graduation. From $60/adult. Serving Hamilton County.',
  },
  'fishers': {
    title: 'Hibachi at Home in Fishers, IN | Geist Reservoir Private Chef | Hibachi Connect',
    desc:  'Book a private hibachi chef in Fishers, Indiana for graduation parties and backyard celebrations. Geist Reservoir, Nickel Plate District. Hamilton Southeastern and Fishers HS graduation season. From $60/adult.',
  },
  'zionsville': {
    title: 'Hibachi at Home in Zionsville, IN | Boone County Estate Private Chef | Hibachi Connect',
    desc:  'Book a private hibachi chef in Zionsville, Indiana. Holliday Farms estate graduation parties, Boone County milestone events, and anniversary dinners. Zionsville Community HS graduation season. From $60/adult.',
  },
  'westfield': {
    title: 'Backyard Hibachi in Westfield, IN | Grand Park Private Teppanyaki Chef | Hibachi Connect',
    desc:  'Book a backyard hibachi chef in Westfield, Indiana. Grand Park celebration dinners, Westfield High School graduation parties, and Hamilton County family events. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'noblesville': {
    title: 'Hibachi at Home in Noblesville, IN | Ruoff Music Center & Morse Reservoir Events | Hibachi Connect',
    desc:  'Book a private hibachi chef in Noblesville, Indiana. Morse Reservoir waterfront dinners, Noblesville graduation parties, and Hamilton County celebrations. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'bloomington': {
    title: 'Hibachi at Home in Bloomington, IN | IU Graduation Parties & Monroe Lake Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Bloomington, Indiana. IU Commencement graduation parties, Kirkwood corridor home dinners, and Monroe Lake cabin events. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'west-lafayette': {
    title: 'Private Hibachi Chef in West Lafayette, IN | Purdue Graduation & Tippecanoe County | Hibachi Connect',
    desc:  'Book a private hibachi chef in West Lafayette, Indiana. Purdue University Commencement graduation parties and Tippecanoe County private events. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'lafayette': {
    title: 'Hibachi Catering in Lafayette, IN | Tippecanoe County Private Chef | Hibachi Connect',
    desc:  'Book hibachi catering in Lafayette, Indiana. Purdue graduation overflow dinners, Tippecanoe County corporate events, and private celebrations. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'south-bend': {
    title: 'Hibachi at Home in South Bend, IN | Notre Dame Graduation Parties | Hibachi Connect',
    desc:  'Book a private hibachi chef in South Bend, Indiana. Notre Dame Commencement graduation parties, St. Joseph County celebrations, and corporate team dinners. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'mishawaka': {
    title: 'Mobile Hibachi Chef in Mishawaka, IN | Princess City Private Dining | Hibachi Connect',
    desc:  'Book a mobile hibachi chef in Mishawaka, Indiana. Backyard birthday parties, St. Joseph River corridor events, and Northern Indiana celebrations. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'fort-wayne': {
    title: 'Hibachi Catering in Fort Wayne, IN | Sweetwater & Electric Works Private Chef | Hibachi Connect',
    desc:  'Book hibachi catering in Fort Wayne, Indiana. Corporate team events, Allen County graduation parties, and Sweetwater-adjacent private dinners. Certified teppanyaki chef, full setup & cleanup. From $60/adult.',
  },
  'elkhart': {
    title: 'Hibachi Catering in Elkhart, IN | RV Capital Northern Indiana Private Chef | Hibachi Connect',
    desc:  'Book hibachi catering in Elkhart, Indiana. Corporate RV industry team events, Northern Indiana graduation parties, and community celebrations. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'warsaw': {
    title: 'Mobile Hibachi Chef in Warsaw, IN | Lake Wawasee & Winona Lake Private Dining | Hibachi Connect',
    desc:  'Book a mobile hibachi chef in Warsaw, Indiana. Lake Wawasee waterfront dinners, Kosciusko County corporate events, and Winona Lake property celebrations. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'evansville': {
    title: 'Private Hibachi Chef in Evansville, IN | Ohio River Corridor Private Dining | Hibachi Connect',
    desc:  'Book a private hibachi chef in Evansville, Indiana. UE and USI graduation parties, Vanderburgh County corporate events, and Ohio River corridor celebrations. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'jeffersonville': {
    title: 'Mobile Hibachi Chef in Jeffersonville, IN | Big Four Bridge & Clark County Private Dining | Hibachi Connect',
    desc:  'Book a mobile hibachi chef in Jeffersonville, Indiana. Big Four Bridge destination dinners, Clark County graduation parties, and bachelorette weekends. Certified chef, full setup & cleanup. From $60/adult.',
  },
  'new-albany': {
    title: 'Hibachi at Home in New Albany, IN | Silver Street Arts District & Floyd County | Hibachi Connect',
    desc:  'Book a private hibachi chef in New Albany, Indiana. Historic district graduation parties, Floyd County anniversary dinners, and Southern Indiana celebrations. Certified chef, full setup & cleanup. From $60/adult.',
  },
}

// ── City structural map ───────────────────────────────────────────────────────
// v = theme index (0–5); profileIdx = build-order index (0–16)
const IN_MAJOR_CITIES = {
  // Batch 1 — Indianapolis + Affluent North Suburbs
  'indianapolis': { v: 1, profileIdx: 0,  nearby: ['Carmel', 'Fishers', 'Zionsville', 'Westfield', 'Noblesville', 'Greenwood', 'Brownsburg', 'Avon', 'Lawrence'] },
  'carmel':       { v: 0, profileIdx: 1,  nearby: ['Indianapolis', 'Fishers', 'Zionsville', 'Westfield', 'Noblesville', 'Brownsburg', 'Cicero'] },
  'fishers':      { v: 2, profileIdx: 2,  nearby: ['Carmel', 'Indianapolis', 'Noblesville', 'Westfield', 'Fortville', 'McCordsville', 'Geist'] },
  'zionsville':   { v: 0, profileIdx: 3,  nearby: ['Indianapolis', 'Carmel', 'Westfield', 'Lebanon', 'Brownsburg', 'Whitestown'] },
  'westfield':    { v: 2, profileIdx: 4,  nearby: ['Carmel', 'Indianapolis', 'Noblesville', 'Zionsville', 'Fishers', 'Arcadia', 'Sheridan'] },
  // Batch 2 — Indiana College Towns + Noblesville
  'noblesville':   { v: 2, profileIdx: 5,  nearby: ['Carmel', 'Fishers', 'Westfield', 'Indianapolis', 'Cicero', 'Sheridan', 'Arcadia'] },
  'bloomington':   { v: 3, profileIdx: 6,  nearby: ['Indianapolis', 'Martinsville', 'Bedford', 'Ellettsville', 'Spencer'] },
  'west-lafayette':{ v: 3, profileIdx: 7,  nearby: ['Lafayette', 'Brookston', 'Frankfort', 'Crawfordsville', 'Covington'] },
  'lafayette':     { v: 3, profileIdx: 8,  nearby: ['West Lafayette', 'Frankfort', 'Crawfordsville', 'Delphi', 'Attica', 'Covington'] },
  // Batch 3 — Northern Indiana
  'south-bend':    { v: 4, profileIdx: 9,  nearby: ['Mishawaka', 'Elkhart', 'Granger', 'Goshen', 'Niles', 'Stevensville'] },
  'mishawaka':     { v: 4, profileIdx: 10, nearby: ['South Bend', 'Granger', 'Elkhart', 'Osceola', 'Niles'] },
  'fort-wayne':    { v: 4, profileIdx: 11, nearby: ['Auburn', 'Huntington', 'Bluffton', 'Kendallville', 'Warsaw', 'Columbia City'] },
  'elkhart':       { v: 4, profileIdx: 12, nearby: ['Goshen', 'Mishawaka', 'South Bend', 'Nappanee', 'Bristol', 'Wakarusa'] },
  // Batch 4 — Indiana Destinations & Southern Indiana
  'warsaw':        { v: 5, profileIdx: 13, nearby: ['Winona Lake', 'Syracuse', 'North Webster', 'Plymouth', 'Rochester', 'Fort Wayne'] },
  'evansville':    { v: 5, profileIdx: 14, nearby: ['Newburgh', 'Boonville', 'Mount Vernon', 'Henderson', 'Owensboro'] },
  'jeffersonville':{ v: 5, profileIdx: 15, nearby: ['New Albany', 'Clarksville', 'Sellersburg', 'Charlestown', 'Georgetown'] },
  'new-albany':    { v: 5, profileIdx: 16, nearby: ['Jeffersonville', 'Clarksville', 'Georgetown', 'Floyds Knobs'] },
}

// ── Blog posts ────────────────────────────────────────────────────────────────
const IN_BLOG_POSTS = [
  // slot 0: T0 (Carmel, Zionsville) + T3 (Bloomington, West Lafayette, Lafayette) — luxury suburbs + college towns
  [
    {
      slug:     'private-hibachi-graduation-party-indiana-college-towns',
      title:    'Private Hibachi for an Indiana Graduation Party: IU, Purdue, and the North Indianapolis Suburbs',
      excerpt:  'Bloomington, West Lafayette, Lafayette, Carmel, Fishers, Noblesville, Westfield — how Indiana families plan private hibachi graduation parties that outperform every restaurant option in the state.',
      category: 'Guide',
      readTime: '9 min read',
    },
    {
      slug:     'private-hibachi-indianapolis-corporate-carmel-estate',
      title:    'Private Hibachi for Indianapolis Corporate Events and Carmel Estate Dinners',
      excerpt:  'From Salesforce and Eli Lilly team dinners to Meridian Hills milestone celebrations and Zionsville Boone County estate events — how Indiana\'s most sophisticated private hibachi markets work.',
      category: 'Guide',
      readTime: '8 min read',
    },
  ],
  // slot 1: T1 (Indianapolis) + T4 (South Bend, Mishawaka, Fort Wayne, Elkhart) — metro + northern Indiana
  [
    {
      slug:     'private-hibachi-indianapolis-corporate-carmel-estate',
      title:    'Private Hibachi for Indianapolis Corporate Events and Carmel Estate Dinners',
      excerpt:  'From Salesforce and Eli Lilly team dinners to Meridian Hills milestone celebrations and Zionsville Boone County estate events — how Indiana\'s most sophisticated private hibachi markets work.',
      category: 'Guide',
      readTime: '8 min read',
    },
    {
      slug:     'hibachi-at-home-indiana-guide',
      title:    'Private Hibachi Chef in Indiana: The Complete Guide to All Six Markets',
      excerpt:  'Indianapolis Metro, Carmel luxury suburbs, Purdue graduation, Northern Indiana, and Southern Indiana destinations — how private hibachi works across all six Indiana markets.',
      category: 'Guide',
      readTime: '10 min read',
    },
  ],
  // slot 2: T2 (Fishers, Westfield, Noblesville) + T5 (Warsaw, Evansville, Jeffersonville, New Albany) — north suburbs + destinations
  [
    {
      slug:     'private-hibachi-graduation-party-indiana-college-towns',
      title:    'Private Hibachi for an Indiana Graduation Party: IU, Purdue, and the North Indianapolis Suburbs',
      excerpt:  'Bloomington, West Lafayette, Lafayette, Carmel, Fishers, Noblesville, Westfield — how Indiana families plan private hibachi graduation parties that outperform every restaurant option in the state.',
      category: 'Guide',
      readTime: '9 min read',
    },
    {
      slug:     'hibachi-at-home-indiana-guide',
      title:    'Private Hibachi Chef in Indiana: The Complete Guide to All Six Markets',
      excerpt:  'Indianapolis Metro, Carmel luxury suburbs, Purdue graduation, Northern Indiana, and Southern Indiana destinations — how private hibachi works across all six Indiana markets.',
      category: 'Guide',
      readTime: '10 min read',
    },
  ],
]

// ── Main builder ──────────────────────────────────────────────────────────────
export function getInCityData(citySlug, cityName) {
  const major       = IN_MAJOR_CITIES[citySlug]
  if (!major) return null
  const { v, profileIdx, nearby } = major
  const theme       = IN_IMAGE_THEMES[v]
  const displayName = IN_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:     displayName,
    stateName:    'Indiana',
    stateAbbr:    'IN',
    stateSlug:    'indiana',
    variant:      v % 3,
    heroImage:    theme.heroImage,
    heroSubtitle: IN_HERO_SUBTITLES[v](displayName),
    nearbyCities:      nearby,
    nearbyMajorCities: ['Indianapolis', 'Carmel', 'Fishers', 'South Bend', 'Fort Wayne', 'Bloomington'],
    localHighlights:   IN_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: IN_OCCASIONS[v],
    faqSet:            IN_FAQ_SETS[v](displayName),
    testimonials:      _getInTestimonials(citySlug),
    uniqueIntroVariant:   profileIdx != null ? 471 + profileIdx : 465 + v,
    uniqueWhyUsVariant:   v,
    uniqueClosingVariant: profileIdx != null ? 471 + profileIdx : 465 + v,
    heroH1Prefix: profileIdx != null
      ? IN_PROFILE_H1_PREFIXES[profileIdx]
      : IN_THEME_H1_PREFIXES[v],
    ...(IN_CUSTOM_META[citySlug]
      ? { metaTitle: IN_CUSTOM_META[citySlug].title, metaDescription: IN_CUSTOM_META[citySlug].desc }
      : {}),
  }
}

// ── How It Works dispatcher ───────────────────────────────────────────────────
export function getInHowItWorks(citySlug) {
  return IN_HOW_IT_WORKS
}

// ── Section variant dispatcher ────────────────────────────────────────────────
export function getInSectionVariant(citySlug) {
  const major = IN_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : 0
  return IN_SECTION_VARIANTS[v]
}

// ── City experience image dispatcher ─────────────────────────────────────────
export function getInCityImage(citySlug) {
  return IN_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Support images dispatcher ─────────────────────────────────────────────────
export function getInSupportImages(citySlug) {
  if (IN_SUPPORT_IMAGES[citySlug]) return IN_SUPPORT_IMAGES[citySlug]
  const major = IN_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : 0
  return IN_SUPPORT_FALLBACKS[v]
}

// ── Blog posts dispatcher ─────────────────────────────────────────────────────
export function getInBlogPosts(variant, count) {
  return IN_BLOG_POSTS[variant % IN_BLOG_POSTS.length].slice(0, count)
}
