// ─── Wisconsin City Data ──────────────────────────────────────────────────────
// 17 cities · 6 themes · index range 442–464
// Generic WI_INTRO_VARIANTS:    442–447  (6 entries, one per theme)
// City-specific WI_CITY_INTROS: 448–464  (profileIdx 0–16, by batch order)
// Batch 1 (profileIdx 0–4):  Milwaukee, Mequon, Brookfield, Wauwatosa, Whitefish Bay
// Batch 2 (profileIdx 5–8):  Madison, Middleton, Verona, Waunakee
// Batch 3 (profileIdx 9–12): Delafield, Oconomowoc, Lake Geneva, Kohler
// Batch 4 (profileIdx 13–16): Green Bay, Appleton, Neenah, Sturgeon Bay

export const WI_CITY_DISPLAY_NAMES = {
  'whitefish-bay': 'Whitefish Bay',
  'sturgeon-bay':  'Sturgeon Bay',
  'williams-bay':  'Williams Bay',
  'lake-geneva':   'Lake Geneva',
  'green-bay':     'Green Bay',
}

// ─── Occasion Sets ────────────────────────────────────────────────────────────
const WI_OCCASIONS_LUXURY = [
  'Estate Graduation Dinners', 'Anniversary Celebrations', 'Executive Dinner Parties',
  'Birthday Milestone Events', 'Holiday Estate Gatherings', 'Corporate Executive Dinners',
  'Retirement Celebrations', 'Engagement Parties', 'Rehearsal Dinners', 'Milestone Estate Events',
]

const WI_OCCASIONS_CORPORATE = [
  'Corporate Team Dinners', 'Client Appreciation Events', 'Holiday Office Parties',
  'Graduation Celebrations', 'Birthday Parties', 'Team Building Events',
  'Corporate Retreats', 'Executive Home Dinners', 'Networking Events', 'Anniversary Celebrations',
]

const WI_OCCASIONS_LAKE = [
  'Lakefront Birthday Parties', 'Anniversary Dinners', 'Wedding Weekend Dinners',
  'Summer Estate Celebrations', 'Family Reunion Gatherings', 'Bachelorette Weekends',
  'Graduation Parties', 'Neighborhood Gatherings', 'Holiday Lake Dinners', 'Backyard Celebrations',
]

const WI_OCCASIONS_DESTINATION = [
  'Bachelorette Weekends', 'Bachelor Parties', 'Vacation Rental Dinners', 'Family Reunion Weekends',
  'Wedding Rehearsal Dinners', 'Corporate Retreat Dinners', 'Birthday Getaways',
  'Anniversary Getaways', 'Girls Weekends', 'Group Cabin Dinners',
]

const WI_OCCASIONS_COMMUNITY = [
  'Family Graduation Parties', 'Birthday Celebrations', 'Anniversary Dinners',
  'Corporate Team Events', 'Holiday Gatherings', 'Neighborhood Parties',
  'Backyard Celebrations', 'Retirement Parties', 'Family Reunions', 'Community Events',
]

// ─── FAQ Sets ─────────────────────────────────────────────────────────────────
const WI_FAQ_NORTH_SHORE = [
  { q: 'Do you serve Mequon, Whitefish Bay, Fox Point, and all Milwaukee North Shore communities?', a: 'Yes — we serve the full Milwaukee North Shore including Mequon, Whitefish Bay, Fox Point, Bayside, Shorewood, Glendale, River Hills, and all surrounding Ozaukee and Milwaukee County lakefront communities. We travel to your estate, classic Lake Michigan shore home, or lakefront property fully equipped.' },
  { q: 'What space is needed at a North Shore estate for a hibachi setup?', a: 'Our mobile teppan grill needs approximately a 10×10 foot flat area — a stone patio, backyard lawn, driveway, or covered deck surface all work beautifully. North Shore estate properties are among the most accommodating settings we work in. We handle all equipment transport, setup, and breakdown.' },
  { q: "What's included in the pricing?", a: 'All food ingredients, house-made sauces, professional chef service, equipment, and complete cleanup. You provide seating and dinnerware for your guests. Premium protein upgrades — Wagyu beef, lobster tail, filet mignon — are available at booking.' },
  { q: 'Can you accommodate dietary restrictions common at North Shore events?', a: 'Absolutely — we routinely handle gluten-free, vegetarian, kosher-style, and allergen-specific menus. Please specify all dietary needs at booking and we prepare every guest\'s plate accordingly.' },
  { q: 'How far in advance should we book for North Shore graduation season?', a: 'We recommend booking 3–4 weeks ahead for standard events and 4–6 weeks ahead for graduation season (May–June). North Shore high school and Concordia University graduation Saturdays fill very early — secure your date as soon as your schedule is confirmed.' },
]

const WI_FAQ_MILWAUKEE = [
  { q: 'Do you serve all Milwaukee neighborhoods — Bay View, East Side, Shorewood, Walker\'s Point, and Brady Street?', a: 'Yes — we serve all of Milwaukee including Bay View, the East Side, Walker\'s Point, Brady Street, Historic Third Ward, Riverwest, Wauwatosa, Mequon, Whitefish Bay, Brookfield, and all surrounding Milwaukee metro communities. Urban patios, rooftops, backyards, and event venues all work.' },
  { q: 'What outdoor space is needed for a Milwaukee hibachi event?', a: 'A flat 10×10 foot area — a rooftop terrace, backyard, patio, courtyard, or covered deck all work. For indoor setups at Milwaukee urban properties, good ventilation is essential. We assess each setup when you book.' },
  { q: "What's included in the price?", a: 'All food ingredients, house-made sauces, chef labor, equipment, and cleanup. You provide seating and dinnerware for your group.' },
  { q: 'How do you handle large corporate or group events in the Milwaukee area?', a: 'We scale with multiple chefs and stations for larger groups — corporate team events of 40–80 guests are common. Share your headcount and event type and we\'ll build a package that matches your Milwaukee event.' },
  { q: 'When should I book for Milwaukee Marquette or UWM graduation season?', a: 'Graduation Saturdays in May and June book 4–6 weeks ahead. Milwaukee corporate holiday events and Summerfest-adjacent weekends are also high-demand. Standard weeknight events: 2–3 weeks ahead.' },
]

const WI_FAQ_MADISON = [
  { q: 'Do you serve Madison neighborhoods — Nakoma, Shorewood Hills, University Heights, and the isthmus?', a: 'Yes — we serve all of Madison including the isthmus, Nakoma, Shorewood Hills, University Heights, Maple Bluff, Waunakee, Middleton, Verona, Sun Prairie, Fitchburg, and all surrounding Dane County communities. We travel to homes, properties, and outdoor event spaces throughout the Madison metro.' },
  { q: 'What space is needed for a Madison hibachi event?', a: 'Approximately 10×10 feet of flat outdoor clearance — a patio, backyard, driveway, or deck all work. Madison\'s isthmus homes and suburban properties both accommodate our mobile setup easily.' },
  { q: "What does pricing include?", a: 'All food, sauces, chef service, equipment, and complete cleanup. You provide tables, chairs, and dinnerware for your guests.' },
  { q: 'Can you handle large UW-Madison graduation or Epic Systems events?', a: 'Absolutely — we bring additional chefs and stations for larger headcounts. UW-Madison graduation dinners of 30–60, Epic Systems corporate events, and large family gatherings are all within our range. Mention your count when you reach out.' },
  { q: 'How far ahead should we book for Madison graduation weekend?', a: 'UW-Madison graduation (May) is our highest-demand period in Madison. We recommend booking 6–8 weeks ahead for graduation-weekend events. Standard summer events: 3–4 weeks. Epic Systems team events and corporate dinners: 2–3 weeks.' },
]

const WI_FAQ_LAKE_COUNTRY = [
  { q: 'Do you travel to Lake Country lake houses, vacation rentals, and estate properties?', a: 'Yes — that\'s exactly what we specialize in. We travel to lakefront estates, vacation rental properties, and private homes throughout Waukesha County\'s Lake Country including Delafield, Oconomowoc, Pewaukee, Nashotah, Hartland, and all Nagawicka Lake, Pewaukee Lake, Lac La Belle, and Oconomowoc Lake-adjacent properties.' },
  { q: 'Do you need a gas hookup at a Lake Country property?', a: 'No. Our teppan grill is fully self-contained with its own propane system. We bring our own fuel. Lakefront estates, vacation rental cabins, and remote lake houses with no outdoor gas lines are all fine.' },
  { q: "What's included at a Lake Country event?", a: 'All food, sauces, chef labor, equipment, and cleanup. We pack out completely — your estate or vacation rental is left in perfect condition.' },
  { q: 'Can you accommodate wedding weekend rehearsal dinners at Oconomowoc venues?', a: 'Yes — we specialize in wedding weekend rehearsal dinners at Lake Country properties, including Ingleside Hotel area estates, private lakefront venues, and vacation rental properties. Our mobile setup works at any outdoor space. We coordinate with wedding planners directly when needed.' },
  { q: 'How far ahead should we book for Lake Country summer events?', a: 'Summer weekends in Lake Country (June–September) book 4–6 weeks ahead. Wedding weekend rehearsal dinners book even earlier — 6–8 weeks for peak season. Standard weeknight events: 2–3 weeks.' },
]

const WI_FAQ_DESTINATION = [
  { q: 'Do you travel to Lake Geneva vacation rentals, the Grand Geneva Resort area, and Geneva Lake waterfront properties?', a: 'Yes — that\'s our specialty. We travel to vacation rental properties, resort-adjacent estates, and private homes throughout the Lake Geneva and Walworth County area. Geneva Lake Shore Path properties, Grand Geneva-adjacent vacation homes, Abbey Resort corridor rentals, and all Williams Bay and Fontana-on-Geneva-Lake properties are all in our service range.' },
  { q: 'Do you need a gas hookup at the vacation rental or resort property?', a: 'No — our setup is fully self-contained with its own propane system. Rental properties, resort-adjacent vacation homes, and lakefront cottages with no outdoor gas hookup are all fine. We bring everything needed.' },
  { q: "What's included at a Lake Geneva vacation rental event?", a: 'All food, sauces, chef labor, equipment, and cleanup. We pack out completely — your vacation rental stays in the condition your host requires for checkout.' },
  { q: 'Can you handle bachelorette weekends and large vacation group dinners in Lake Geneva?', a: 'Yes — bachelorette and bachelor group weekends are one of our most common Lake Geneva event types. Groups of 12–30 are our sweet spot. Bring your group size, vacation rental address, and preferred date when you reach out.' },
  { q: 'How far ahead should we book for a Lake Geneva summer event?', a: 'Lake Geneva summer weekends (June–Labor Day) are our most limited dates statewide. We recommend booking 6–8 weeks ahead for any Saturday summer event. Bachelorette and family reunion weekends fill fastest — book as early as possible once your rental is confirmed.' },
]

const WI_FAQ_NORTHEAST = [
  { q: 'Do you serve Green Bay, Appleton, De Pere, Neenah, and all Fox Valley communities?', a: 'Yes — we serve all of Northeast Wisconsin including Green Bay, De Pere, Ashwaubenon, Appleton, Neenah, Menasha, Kaukauna, Oshkosh, and surrounding Fox Valley and Brown County communities. We travel to backyard properties, corporate event spaces, and private venues throughout the region.' },
  { q: 'What outdoor space is needed for a Fox Valley hibachi event?', a: 'A flat 10×10 foot area — a backyard, patio, deck, or driveway surface all work. Northeast Wisconsin suburban homes are among the most accommodating settings for our mobile setup. We handle all transport, setup, and cleanup.' },
  { q: "What's included in the pricing?", a: 'All food, sauces, chef service, equipment, and full cleanup. You provide seating and dinnerware for your guests.' },
  { q: 'Can you handle Packers-season entertaining and Green Bay corporate events?', a: 'Absolutely — Packers-adjacent gatherings and Green Bay corporate team dinners are a specific market we serve year-round. Share your event type and headcount and we\'ll build a package that fits your occasion.' },
  { q: 'When should I book for Lawrence University or UWGB graduation season?', a: 'Graduation Saturdays in May book 4–6 weeks ahead in the Fox Valley. Standard summer and fall events: 3–4 weeks. Corporate holiday events from October through December also book ahead — reserve early if your date is during peak season.' },
]

// ─── How It Works ─────────────────────────────────────────────────────────────
const WI_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `From booking to final cleanup, we handle every detail — you just enjoy the evening in ${city}.`,
  steps: [
    { num: '01', title: 'Reserve Your Date',    desc: 'Share your date, guest count, protein preferences, and home or venue address. We confirm availability within hours and lock in your Wisconsin event with a deposit.' },
    { num: '02', title: 'Confirm Your Menu',    desc: 'Premium proteins — Wagyu beef, filet mignon, lobster tail, shrimp, salmon, chicken — plus rice, noodles, vegetables, and house-made sauces. Tell us about any dietary needs at this stage.' },
    { num: '03', title: 'Chef Arrives Ready',   desc: 'Your private hibachi chef arrives 30–45 minutes before showtime with a self-contained propane teppan grill, all ingredients, and everything needed. No prep work required from you.' },
    { num: '04', title: 'The Live Experience',  desc: 'The full teppanyaki performance — precision knife work, flame tricks, and live cooking from first flame to final plate. Restaurant-quality food prepared for your table and your guests alone.' },
    { num: '05', title: 'Complete Cleanup',     desc: 'When the last plate is cleared, we break down the grill, pack out all equipment, and leave your space exactly as we found it. Your only job is to enjoy the evening.' },
  ],
}

// ─── City Structural Map ──────────────────────────────────────────────────────
// v = theme index (0–5); profileIdx = build-order index (0–16)
const WI_MAJOR_CITIES = {
  // Batch 1 — Milwaukee Metro North Shore
  'milwaukee':     { v: 1, profileIdx: 0,  nearby: ['Wauwatosa', 'Mequon', 'Whitefish Bay', 'Brookfield', 'Shorewood'] },
  'mequon':        { v: 0, profileIdx: 1,  nearby: ['Whitefish Bay', 'Milwaukee', 'Thiensville', 'Brookfield', 'Wauwatosa'] },
  'brookfield':    { v: 1, profileIdx: 2,  nearby: ['Wauwatosa', 'Milwaukee', 'Elm Grove', 'Pewaukee', 'Menomonee Falls'] },
  'wauwatosa':     { v: 1, profileIdx: 3,  nearby: ['Milwaukee', 'Brookfield', 'Whitefish Bay', 'Mequon', 'Elm Grove'] },
  'whitefish-bay': { v: 0, profileIdx: 4,  nearby: ['Mequon', 'Shorewood', 'Milwaukee', 'Wauwatosa', 'Fox Point'] },
  // Batch 2 — Madison Metro
  'madison':       { v: 2, profileIdx: 5,  nearby: ['Middleton', 'Verona', 'Waunakee', 'Sun Prairie', 'Fitchburg'] },
  'middleton':     { v: 2, profileIdx: 6,  nearby: ['Madison', 'Waunakee', 'Verona', 'Fitchburg', 'Cross Plains'] },
  'verona':        { v: 2, profileIdx: 7,  nearby: ['Madison', 'Middleton', 'Fitchburg', 'Belleville', 'Mount Horeb'] },
  'waunakee':      { v: 2, profileIdx: 8,  nearby: ['Madison', 'Middleton', 'DeForest', 'Sun Prairie', 'Cross Plains'] },
  // Batch 3 — Lake Country & Destinations
  'delafield':     { v: 3, profileIdx: 9,  nearby: ['Oconomowoc', 'Pewaukee', 'Hartland', 'Brookfield', 'Waukesha'] },
  'oconomowoc':    { v: 3, profileIdx: 10, nearby: ['Delafield', 'Pewaukee', 'Hartland', 'Wales', 'Brookfield'] },
  'lake-geneva':   { v: 4, profileIdx: 11, nearby: ['Williams Bay', 'Fontana-on-Geneva-Lake', 'Delavan', 'Elkhorn', 'Whitewater'] },
  'kohler':        { v: 4, profileIdx: 12, nearby: ['Sheboygan', 'Plymouth', 'Elkhart Lake', 'Manitowoc', 'Fond du Lac'] },
  // Batch 4 — Northeast Wisconsin
  'green-bay':     { v: 5, profileIdx: 13, nearby: ['De Pere', 'Ashwaubenon', 'Appleton', 'Neenah', 'Oshkosh'] },
  'appleton':      { v: 5, profileIdx: 14, nearby: ['Neenah', 'Menasha', 'Grand Chute', 'Kaukauna', 'Oshkosh'] },
  'neenah':        { v: 5, profileIdx: 15, nearby: ['Appleton', 'Menasha', 'Oshkosh', 'Green Bay', 'Fond du Lac'] },
  'sturgeon-bay':  { v: 4, profileIdx: 16, nearby: ['Fish Creek', 'Sister Bay', 'Egg Harbor', 'Ephraim', 'Green Bay'] },
}

// Theme-level nearby fallback (used when city has no nearby array)
const WI_NEARBY_MAJOR = [
  ['Mequon', 'Whitefish Bay', 'Milwaukee', 'Shorewood', 'Fox Point'],       // T0 North Shore
  ['Milwaukee', 'Wauwatosa', 'Brookfield', 'Mequon', 'Whitefish Bay'],     // T1 Milwaukee Metro
  ['Madison', 'Middleton', 'Verona', 'Waunakee', 'Fitchburg'],             // T2 Madison
  ['Delafield', 'Oconomowoc', 'Pewaukee', 'Hartland', 'Waukesha'],        // T3 Lake Country
  ['Lake Geneva', 'Williams Bay', 'Fontana', 'Delavan', 'Elkhorn'],        // T4 Destinations
  ['Green Bay', 'Appleton', 'Neenah', 'Oshkosh', 'De Pere'],              // T5 Northeast
]

// ─── H1 Prefixes ──────────────────────────────────────────────────────────────
const WI_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',  // 0  Milwaukee
  'Hibachi at Home in',       // 1  Mequon
  'Hibachi Catering in',      // 2  Brookfield
  'Hibachi at Home in',       // 3  Wauwatosa
  'Private Hibachi Chef in',  // 4  Whitefish Bay
  // Batch 2 additions:
  'Hibachi Catering in',      // 5  Madison
  'Hibachi at Home in',       // 6  Middleton
  'Private Hibachi Chef in',  // 7  Verona
  'Hibachi at Home in',       // 8  Waunakee
  // Batch 3 additions:
  'Hibachi at Home in',       // 9  Delafield
  'Backyard Hibachi in',      // 10 Oconomowoc
  'Mobile Hibachi Chef in',   // 11 Lake Geneva
  'Mobile Hibachi Chef in',   // 12 Kohler
  // Batch 4 additions:
  'Hibachi at Home in',       // 13 Green Bay
  'Hibachi Catering in',      // 14 Appleton
  'Hibachi at Home in',       // 15 Neenah
  'Mobile Hibachi Chef in',   // 16 Sturgeon Bay
]

const WI_THEME_H1_PREFIXES = [
  'Hibachi at Home in',       // T0 Milwaukee North Shore Luxury
  'Private Hibachi Chef in',  // T1 Milwaukee Metro & Corporate
  'Hibachi Catering in',      // T2 Madison & Tech Corridor
  'Hibachi at Home in',       // T3 Lake Country
  'Mobile Hibachi Chef in',   // T4 Destinations & Resorts
  'Hibachi at Home in',       // T5 Northeast Wisconsin
]

// ─── Hero Images by Theme ──────────────────────────────────────────────────────
const WI_IMAGE_THEMES = [
  '/pics/hibachi-private-chef-1.jpg', // T0 Milwaukee North Shore Luxury
  '/pics/hibachi-event.jpg',          // T1 Milwaukee Metro & Corporate
  '/pics/hibachi-at-home.jpg',        // T2 Madison & Tech Corridor
  '/pics/hibachi-pool-party.jpg',     // T3 Lake Country
  '/pics/traveling-hibachi.jpg',      // T4 Destinations & Resorts
  '/pics/hibachi-hart.jpg',           // T5 Northeast Wisconsin
]

// ─── City Experience Images (slot 2 — must differ from WI_IMAGE_THEMES[v]) ────
const WI_CITY_IMAGE_MAP = {
  // Batch 1 (T0 hero=hibachi-private-chef-1, T1 hero=hibachi-event)
  'milwaukee':     { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Private hibachi chef at a ${city} Wisconsin event` },
  'mequon':        { src: '/pics/private-party-chef-6.jpg',   alt: (city) => `Private hibachi chef at a ${city} WI estate dinner` },
  'brookfield':    { src: '/pics/hibachi-catering-3.jpg',     alt: (city) => `Hibachi catering at a ${city} WI corporate event` },
  'wauwatosa':     { src: '/pics/hibachi-at-home.jpg',        alt: (city) => `Hibachi at home in ${city} Wisconsin` },
  'whitefish-bay': { src: '/pics/hibachi-shot-2.jpg',         alt: (city) => `Private hibachi chef at a ${city} WI estate dinner` },
  // Batch 2 (T2 hero=hibachi-at-home)
  'madison':       { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Private hibachi chef at a ${city} WI event` },
  'middleton':     { src: '/pics/hibachi-chef-at-home.jpg',   alt: (city) => `Hibachi at home in ${city} Wisconsin` },
  'verona':        { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Hibachi catering in ${city} Wisconsin` },
  'waunakee':      { src: '/pics/hibachi-photo-1.jpg',        alt: (city) => `Private hibachi chef in ${city} WI` },
  // Batch 3 (T3 hero=hibachi-pool-party, T4 hero=traveling-hibachi)
  'delafield':     { src: '/pics/backyard-hibachi-3.jpg',     alt: (city) => `Hibachi at a ${city} WI Lake Country estate` },
  'oconomowoc':    { src: '/pics/hibachi-private-chef-1.jpg', alt: (city) => `Private hibachi chef at a ${city} WI lake property` },
  'lake-geneva':   { src: '/pics/hibachi-pic-3.jpg',          alt: (city) => `Mobile hibachi chef at a ${city} WI vacation rental` },
  'kohler':        { src: '/pics/hibachi-pic-62.jpg',         alt: (city) => `Private hibachi chef at a ${city} WI resort property` },
  // Batch 4 (T5 hero=hibachi-hart, T4 hero=traveling-hibachi)
  'green-bay':     { src: '/pics/hibachi-photo-2.jpg',        alt: (city) => `Private hibachi chef at a ${city} WI event` },
  'appleton':      { src: '/pics/hibachi-shot-1.jpg',         alt: (city) => `Hibachi catering at a ${city} WI event` },
  'neenah':        { src: '/pics/hibachi-private-chef-1.jpg', alt: (city) => `Private hibachi chef at a ${city} WI Lake Winnebago estate` },
  'sturgeon-bay':  { src: '/pics/hibachi-pic-2.jpg',          alt: (city) => `Mobile hibachi chef at a Door County vacation rental near ${city}` },
}

// ─── Support Image Fallbacks by Theme ─────────────────────────────────────────
// slot 3: testimonial · slot 4: cta — must differ from hero and experienceImage
const WI_SUPPORT_FALLBACKS = [
  // T0 — Milwaukee North Shore Luxury (hero=hibachi-private-chef-1)
  { testimonial: { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Guests enjoying private hibachi at a ${city} WI estate`,             caption: 'North Shore Private Events'    }, cta: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Book a private hibachi chef in ${city} WI`,    caption: 'Book Your North Shore Event'   } },
  // T1 — Milwaukee Metro & Corporate (hero=hibachi-event)
  { testimonial: { src: '/pics/private-chef-2.jpg',      alt: (city) => `Private hibachi event in ${city} Wisconsin`,                         caption: 'Milwaukee Area Events'         }, cta: { src: '/pics/mobile-hibachi-2.jpg',    alt: (city) => `Hire a hibachi chef in ${city} WI`,            caption: 'Book in Milwaukee Area'        } },
  // T2 — Madison & Tech Corridor (hero=hibachi-at-home)
  { testimonial: { src: '/pics/private-event-4.jpg',     alt: (city) => `Private hibachi gathering in ${city} Wisconsin`,                     caption: 'Madison Area Events'           }, cta: { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Book a hibachi chef in ${city} WI`,            caption: 'Book Your Madison Event'       } },
  // T3 — Lake Country (hero=hibachi-pool-party)
  { testimonial: { src: '/pics/hibachi-at-home.jpg',     alt: (city) => `Hibachi event at a ${city} WI lake property`,                        caption: 'Lake Country Events'           }, cta: { src: '/pics/hibachi-to-you-2.jpg',   alt: (city) => `Book a hibachi chef in ${city} WI`,            caption: 'Book Your Lake Country Event'  } },
  // T4 — Destinations & Resorts (hero=traveling-hibachi)
  { testimonial: { src: '/pics/hibachi-catering.jpg',    alt: (city) => `Private hibachi at a ${city} WI vacation rental`,                    caption: 'Wisconsin Destination Events'  }, cta: { src: '/pics/backyard-hibachi.jpg',   alt: (city) => `Book a mobile hibachi chef in ${city} WI`,    caption: 'Book Your Destination Event'   } },
  // T5 — Northeast Wisconsin (hero=hibachi-hart)
  { testimonial: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Private hibachi gathering in ${city} Wisconsin`,                     caption: 'Northeast Wisconsin Events'    }, cta: { src: '/pics/private-event-4.jpg',   alt: (city) => `Book a hibachi chef in ${city} WI`,            caption: 'Book Your Event'               } },
]

// ─── City Support Images (slot 3: testimonial · slot 4: cta) ──────────────────
// All 4 images per page must be distinct: hero ≠ cityImg ≠ testimonial ≠ cta
const WI_CITY_SUPPORT_IMAGES = {
  // Milwaukee: hero=hibachi-event, exp=hibachi-catering → testimonial and cta must differ
  'milwaukee':     { testimonial: { src: '/pics/mobile-hibachi-2.jpg',   alt: (city) => `Guests at a private hibachi event in ${city} WI`,             caption: 'Milwaukee Private Events',   intro: (city) => `From the Historic Third Ward to Bay View backyards and East Side rooftops, ${city} hosts some of the most vibrant private hibachi dinners in Wisconsin.` }, cta: { src: '/pics/hibachi-private-chef-1.jpg', alt: (city) => `Book a private hibachi chef in ${city} WI`,    caption: 'Book Your Milwaukee Event'  } },
  // Mequon: hero=hibachi-private-chef-1, exp=private-party-chef-6 → testimonial and cta must differ
  'mequon':        { testimonial: { src: '/pics/hibachi-at-home.jpg',     alt: (city) => `Private hibachi at a ${city} WI Lake Michigan estate`,         caption: 'Mequon North Shore Events',  intro: (city) => `${city}'s Lake Michigan shoreline estates, Concordia University graduation tradition, and Ozaukee County's most distinguished residential addresses make it Wisconsin's premier private hibachi market.` }, cta: { src: '/pics/backyard-hibachi.jpg',       alt: (city) => `Book a private hibachi chef in ${city} WI`,    caption: 'Book Your Mequon Event'     } },
  // Brookfield: hero=hibachi-event, exp=hibachi-catering-3 → testimonial and cta must differ
  'brookfield':    { testimonial: { src: '/pics/private-event-4.jpg',     alt: (city) => `Hibachi catering event in ${city} WI`,                         caption: 'Brookfield Corporate Events',intro: (city) => `${city}'s Moorland Road and Blue Mound Road corporate corridors, Brookfield Square district, and Elmbrook School District community make it Waukesha County's most active private hibachi market.` }, cta: { src: '/pics/mobile-hibachi-2.jpg',       alt: (city) => `Book hibachi catering in ${city} WI`,          caption: 'Book Your Brookfield Event' } },
  // Wauwatosa: hero=hibachi-event, exp=hibachi-at-home → testimonial and cta must differ
  'wauwatosa':     { testimonial: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Private hibachi event in ${city} Wisconsin`,                   caption: 'Wauwatosa Events',           intro: (city) => `${city}'s Medical College of Wisconsin campus, Story Hill and Enderis Park neighborhood character, and Mayfair Collection corridor make it one of Milwaukee's most beloved private hibachi markets.` }, cta: { src: '/pics/private-chef-2.jpg',         alt: (city) => `Book a hibachi chef in ${city} WI`,            caption: 'Book Your Wauwatosa Event'  } },
  // Whitefish Bay: hero=hibachi-private-chef-1, exp=hibachi-shot-2 → testimonial and cta must differ
  'whitefish-bay': { testimonial: { src: '/pics/hibachi-pool-party.jpg',  alt: (city) => `Private hibachi at a ${city} WI lakefront estate`,             caption: 'Whitefish Bay Events',       intro: (city) => `${city}'s Silver Spring Drive lakefront community, prestigious North Shore address, and Whitefish Bay High School graduation tradition make it one of Wisconsin's finest private hibachi markets.` }, cta: { src: '/pics/hibachi-at-home.jpg',        alt: (city) => `Book a private hibachi chef in ${city} WI`,    caption: 'Book Your Whitefish Bay Event'} },
  // Batch 2 (T2 hero=hibachi-at-home)
  // Madison: hero=hibachi-at-home, exp=hibachi-shot-1 → must differ
  'madison':       { testimonial: { src: '/pics/private-party-chef-6.jpg', alt: (city) => `Private hibachi gathering in ${city} Wisconsin`,               caption: 'Madison Area Events',        intro: (city) => `${city}'s UW campus tradition, State Street culture, Capitol Square community, and the lakefront character of Lakes Mendota and Monona together make it Wisconsin's most sophisticated private hibachi market.` }, cta: { src: '/pics/hibachi-catering.jpg',       alt: (city) => `Book a private hibachi chef in ${city} WI`,    caption: 'Book Your Madison Event'      } },
  // Middleton: hero=hibachi-at-home, exp=hibachi-chef-at-home → must differ
  'middleton':     { testimonial: { src: '/pics/backyard-hibachi.jpg',      alt: (city) => `Hibachi at home in ${city} Wisconsin`,                        caption: 'Middleton Events',           intro: (city) => `${city}'s Epic Systems proximity, Greenway Station district character, and Middleton High School graduation tradition make it Dane County's most active tech-corridor private hibachi market.` }, cta: { src: '/pics/mobile-hibachi.jpg',         alt: (city) => `Book a hibachi chef in ${city} WI`,            caption: 'Book Your Middleton Event'    } },
  // Verona: hero=hibachi-at-home, exp=hibachi-catering-2 → must differ
  'verona':        { testimonial: { src: '/pics/private-chef-2.jpg',        alt: (city) => `Private hibachi event in ${city} Wisconsin`,                  caption: 'Verona Events',              intro: (city) => `${city}'s Epic Systems campus, Verona Area School District tradition, and Sugar River State Trail corridor make it Dane County's premier tech-corridor private hibachi destination.` }, cta: { src: '/pics/hibachi-to-you.jpg',         alt: (city) => `Book a private hibachi chef in ${city} WI`,    caption: 'Book Your Verona Event'       } },
  // Waunakee: hero=hibachi-at-home, exp=hibachi-photo-1 → must differ
  'waunakee':      { testimonial: { src: '/pics/hibachi-pic-2.jpg',         alt: (city) => `Private hibachi gathering in ${city} Wisconsin`,               caption: 'Waunakee Events',            intro: (city) => `${city}'s world-class school district, prairie subdivision estate character, and Madison-commuting professional community make it Dane County's most sought-after north-corridor private hibachi market.` }, cta: { src: '/pics/backyard-hibachi-2.jpg',     alt: (city) => `Book a hibachi chef in ${city} WI`,            caption: 'Book Your Waunakee Event'     } },
  // Batch 3 (T3 hero=hibachi-pool-party, T4 hero=traveling-hibachi)
  // Delafield: hero=hibachi-pool-party, exp=backyard-hibachi-3 → must differ
  'delafield':     { testimonial: { src: '/pics/hibachi-to-you-2.jpg',      alt: (city) => `Private hibachi at a ${city} WI Lake Country estate`,         caption: 'Delafield Events',           intro: (city) => `${city}'s Nagawicka Lake shoreline, Kettle Moraine State Forest backdrop, and Delafield Inn-area estate character make it the crown jewel of Waukesha County's Lake Country private hibachi market.` }, cta: { src: '/pics/private-hibachi.jpg',        alt: (city) => `Book a private hibachi chef in ${city} WI`,    caption: 'Book Your Delafield Event'    } },
  // Oconomowoc: hero=hibachi-pool-party, exp=hibachi-private-chef-1 → must differ
  'oconomowoc':    { testimonial: { src: '/pics/mobile-hibachi-2.jpg',      alt: (city) => `Private hibachi at a ${city} WI lake estate`,                 caption: 'Oconomowoc Events',          intro: (city) => `${city}'s Lac La Belle waterfront, Ingleside Hotel area resort culture, and Fowler Lake estate properties make it Wisconsin's most celebrated Lake Country private hibachi market.` }, cta: { src: '/pics/hibachi-shot-2.jpg',         alt: (city) => `Book a hibachi chef in ${city} WI`,            caption: 'Book Your Oconomowoc Event'   } },
  // Lake Geneva: hero=traveling-hibachi, exp=hibachi-pic-3 → must differ
  'lake-geneva':   { testimonial: { src: '/pics/hibachi-pic-4.jpg',         alt: (city) => `Private hibachi at a ${city} WI vacation rental`,             caption: 'Lake Geneva Events',         intro: (city) => `${city}'s Geneva Lake Shore Path, Grand Geneva Resort area, and bachelorette-weekend vacation rental culture make it Wisconsin's most celebrated destination private hibachi market.` }, cta: { src: '/pics/hibachi-chef-2.jpg',         alt: (city) => `Book a mobile hibachi chef in ${city} WI`,     caption: 'Book Your Lake Geneva Event'  } },
  // Kohler: hero=traveling-hibachi, exp=hibachi-pic-62 → must differ
  'kohler':        { testimonial: { src: '/pics/hibachi-to-you.jpg',        alt: (city) => `Private hibachi at a ${city} WI resort property`,             caption: 'Kohler Events',              intro: (city) => `${city}'s American Club resort prestige, Whistling Straits championship golf destination, and Sheboygan County estate character make it Wisconsin's most distinguished destination private hibachi market.` }, cta: { src: '/pics/private-event-4.jpg',        alt: (city) => `Book a mobile hibachi chef in ${city} WI`,     caption: 'Book Your Kohler Event'       } },
  // Batch 4 (T5 hero=hibachi-hart)
  // Green Bay: hero=hibachi-hart, exp=hibachi-photo-2 → must differ
  'green-bay':     { testimonial: { src: '/pics/hibachi-pic-32.jpg',        alt: (city) => `Private hibachi event in ${city} Wisconsin`,                  caption: 'Green Bay Events',           intro: (city) => `${city}'s Lambeau Field community identity, Titletown District energy, and Brown County professional community make it Northeast Wisconsin's most distinctive private hibachi market.` }, cta: { src: '/pics/hibachi-catering-2.jpg',     alt: (city) => `Book a private hibachi chef in ${city} WI`,    caption: 'Book Your Green Bay Event'    } },
  // Appleton: hero=hibachi-hart, exp=hibachi-shot-1 → must differ
  'appleton':      { testimonial: { src: '/pics/backyard-hibachi-2.jpg',    alt: (city) => `Private hibachi event in ${city} Wisconsin`,                  caption: 'Appleton Events',            intro: (city) => `${city}'s Lawrence University tradition, Fox River Mile energy, and Outagamie County professional community make it the Fox Valley's most vibrant private hibachi market.` }, cta: { src: '/pics/private-hibachi.jpg',        alt: (city) => `Book a hibachi chef in ${city} WI`,            caption: 'Book Your Appleton Event'     } },
  // Neenah: hero=hibachi-hart, exp=hibachi-private-chef-1 → must differ
  'neenah':        { testimonial: { src: '/pics/mobile-hibachi-2.jpg',      alt: (city) => `Private hibachi at a ${city} WI Lake Winnebago estate`,       caption: 'Neenah Events',              intro: (city) => `${city}'s Lake Winnebago lakefront estate tradition and Fox Valley Bergstrom-connected civic culture make it Winnebago County's most distinguished private hibachi market.` }, cta: { src: '/pics/hibachi-to-you-2.jpg',       alt: (city) => `Book a private hibachi chef in ${city} WI`,    caption: 'Book Your Neenah Event'       } },
  // Sturgeon Bay: hero=traveling-hibachi, exp=hibachi-pic-2 → must differ
  'sturgeon-bay':  { testimonial: { src: '/pics/hibachi-chef-at-home.jpg',  alt: (city) => `Mobile hibachi chef at a Door County vacation rental`,        caption: 'Door County Events',         intro: (city) => `${city} and Door County's Fish Creek, Sister Bay, Egg Harbor, and Peninsula State Park vacation rental culture make it Wisconsin's most beloved destination private hibachi market.` }, cta: { src: '/pics/backyard-hibachi.jpg',        alt: (city) => `Book a mobile hibachi chef in Door County near ${city}`, caption: 'Book Your Door County Event' } },
}

// ─── Section Variants (6 themes) ──────────────────────────────────────────────
const WI_SECTION_VARIANTS = [
  // T0 — Milwaukee North Shore Luxury
  {
    heroPill:           'Estate Private Hibachi Service',
    experiencePill:     'The North Shore Experience',
    experiencePoints:   (city) => [
      `Chef arrives at your ${city} estate or Lake Michigan shore home fully equipped — no venue required`,
      'Premium proteins: Wagyu beef, filet mignon, lobster tail, and hand-selected seafood',
      'Full teppanyaki entertainment with precision knife artistry and flame performance',
      'Custom menu built entirely around your preferences and dietary needs',
      'From setup to complete cleanup, every detail is handled for you',
    ],
    experienceImage:    '/pics/private-party-chef-6.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a North Shore estate in ${city} Wisconsin`,
    areasPill:          'Milwaukee North Shore Service Area',
    areasHeadline:      (city) => `Serving ${city} and the Milwaukee North Shore`,
    areasIntro: [
      (city) => `Our private hibachi chef service travels throughout the Milwaukee North Shore luxury corridor including ${city}, Mequon, Whitefish Bay, Fox Point, Bayside, Shorewood, River Hills, Thiensville, and all surrounding Ozaukee and Milwaukee County lakefront communities. We travel to your estate, Lake Michigan shore home, or backyard property with everything needed for a full teppanyaki experience.`,
      (city) => `The Milwaukee North Shore is Wisconsin's most prestigious private entertaining market, and ${city} homeowners expect an experience that matches the setting. Our chefs bring premium ingredient sourcing, professional service, and the live teppanyaki performance that transforms any dinner gathering into an evening your guests remember for years.`,
    ],
    areasButton:          'View All Wisconsin Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Private Hibachi Events We Specialize In Around ${city}`,
    occasionSubtext:      'From intimate anniversary dinners to large graduation celebrations, our North Shore hibachi chefs deliver an experience your guests have never encountered at a home dinner.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Private Hibachi FAQ for ${city}, ${abbr}`,
    testimonialSubheading: 'What North Shore Hosts Are Saying',
  },
  // T1 — Milwaukee Metro & Corporate
  {
    heroPill:           'Private Hibachi Chef Milwaukee',
    experiencePill:     'The Milwaukee Experience',
    experiencePoints:   (city) => [
      `Chef travels to your ${city} location — rooftop, backyard, courtyard, or corporate event space`,
      'Premium proteins including steak, lobster, shrimp, salmon, and plant-based options',
      'Interactive teppanyaki show that works perfectly in urban and suburban Milwaukee settings',
      'Menu tailored to your group size, preferences, and dietary requirements',
      'Complete setup and cleanup — zero logistics for the host',
    ],
    experienceImage:    '/pics/hibachi-catering-3.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} Wisconsin event`,
    areasPill:          'Milwaukee Metro',
    areasHeadline:      (city) => `Serving ${city} and Greater Milwaukee`,
    areasIntro: [
      (city) => `Our private hibachi chef service covers all of Milwaukee and the greater metro including ${city}, Historic Third Ward, Bay View, East Side, Walker's Point, Brady Street, Riverwest, Wauwatosa, Mequon, Whitefish Bay, Brookfield, and all Milwaukee metro neighborhoods and suburbs. Urban patios, rooftops, backyards, and corporate event spaces all work.`,
      (city) => `Milwaukee is a city of distinctive neighborhoods — and ${city} brings its own energy to private entertaining. Our chefs deliver restaurant-quality teppanyaki to your location, bringing a live performance where the chef's only focus is your table and your guests.`,
    ],
    areasButton:          'View All Wisconsin Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Private Hibachi Events We Love in ${city}`,
    occasionSubtext:      'From Fiserv Forum-adjacent corporate dinners to Marquette graduation parties and Bay View backyard birthdays, our Milwaukee hibachi chefs elevate every occasion.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Milwaukee Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Milwaukee-Area Hosts Are Saying',
  },
  // T2 — Madison & Tech Corridor
  {
    heroPill:           'Private Hibachi Chef Madison',
    experiencePill:     'The Madison Experience',
    experiencePoints:   (city) => [
      `Chef comes to your ${city} home or property with everything included — setup, cooking, cleanup`,
      'Premium proteins, fresh seafood, and vegetarian options all available',
      'Interactive teppanyaki show your guests will talk about for months',
      'Menu fully customizable for any dietary needs — gluten-free, vegan, allergen-specific',
      'Full performance from first flame to final plate — UW-Madison quality expectations met',
    ],
    experienceImage:    '/pics/hibachi-shot-2.jpg',
    experienceImageAlt: (city) => `Hibachi chef at a backyard party in ${city} Wisconsin`,
    areasPill:          'Madison Metro Service Area',
    areasHeadline:      (city) => `Serving ${city} and the Madison Metro`,
    areasIntro: [
      (city) => `Our private hibachi chef service covers the Madison metro including ${city}, Middleton, Verona, Waunakee, Sun Prairie, Fitchburg, and all surrounding Dane County communities. Whether you're hosting a UW-Madison graduation dinner, an Epic Systems milestone event, or a neighborhood celebration, we travel to your property with everything needed.`,
      (city) => `Madison is a city where academic tradition and tech-corridor ambition live side by side — and ${city} reflects that same combination of sophistication and warmth. Our chefs deliver the full teppanyaki experience with premium proteins, live cooking performance, and zero cleanup responsibility for the host.`,
    ],
    areasButton:          'View All Wisconsin Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Private Events We Specialize In Around ${city}`,
    occasionSubtext:      'From UW-Madison graduation parties to Epic Systems milestone dinners and Capitol Square corporate events, our Madison hibachi chefs make every occasion extraordinary.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Madison Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Madison-Area Hosts Are Saying',
  },
  // T3 — Lake Country
  {
    heroPill:           'Private Hibachi at Home',
    experiencePill:     'The Lake Country Experience',
    experiencePoints:   (city) => [
      `Chef travels to your ${city} lakefront estate, vacation home, or property fully equipped`,
      'Fully self-contained propane setup — no gas hookup needed at any lake property',
      'Premium proteins, full teppanyaki show, and complete cleanup included',
      'Menu customized for your group and any dietary requirements',
      'Everyone eats together — no restaurant logistics or split tables',
    ],
    experienceImage:    '/pics/hibachi-to-you-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a Lake Country estate near ${city} Wisconsin`,
    areasPill:          'Lake Country Service Area',
    areasHeadline:      (city) => `Serving ${city} and the Waukesha County Lake District`,
    areasIntro: [
      (city) => `Our private hibachi chef service travels throughout Waukesha County's Lake Country including ${city}, Delafield, Oconomowoc, Pewaukee, Nashotah, Hartland, Wales, and all Nagawicka Lake, Pewaukee Lake, Lac La Belle, Oconomowoc Lake, and Kettle Moraine-area properties. We specialize in lakefront estate dinners, vacation rental weekend events, and wedding weekend rehearsal dinners.`,
      (city) => `The Lake Country estate and vacation property weekend is exactly the kind of occasion private hibachi was designed for — a group on a lake property, outdoor space available, and people who came together to celebrate. Our chef travels to your ${city} property with a fully self-contained setup, handles everything, and leaves your home or rental spotless.`,
    ],
    areasButton:          'View All Wisconsin Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Lake Country Hibachi Events Near ${city}`,
    occasionSubtext:      'Lakefront birthday parties, anniversary estate dinners, wedding weekend rehearsal dinners — our Lake Country hibachi chefs make every celebration as beautiful as the setting.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Lake Country Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Lake Country Hosts Are Saying',
  },
  // T4 — Destinations & Resorts
  {
    heroPill:           'Mobile Hibachi Chef Wisconsin',
    experiencePill:     'The Wisconsin Destination Experience',
    experiencePoints:   (city) => [
      `Chef travels to your ${city} vacation rental, resort property, or lakefront estate`,
      'Fully self-contained propane setup — no gas hookup at any vacation rental required',
      'Premium proteins, full teppanyaki show, and complete cleanup — nothing left for the host',
      'Menu customized for your group size and any dietary requirements',
      "The Saturday night dinner that becomes the trip's best memory",
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef at a vacation rental near ${city} Wisconsin`,
    areasPill:          'Wisconsin Destination Service Area',
    areasHeadline:      (city) => `Serving ${city} and the Greater Destination Area`,
    areasIntro: [
      (city) => `Our mobile hibachi chef service travels throughout Wisconsin's premier destination corridors including ${city}, Lake Geneva, Williams Bay, Fontana-on-Geneva-Lake, Kohler, Sheboygan, and all vacation rental and resort-adjacent properties in the region. Bachelorette weekends, family reunion cabin dinners, corporate retreat events, and vacation rental group gatherings are all our specialty.`,
      (city) => `A Wisconsin destination weekend — whether at a ${city} vacation rental, a Geneva Lake waterfront estate, or a Kohler resort-adjacent property — is exactly the kind of occasion where private hibachi transforms a good trip into an unforgettable one. Our chef arrives fully equipped, handles every detail, and packs out completely. Your only job is to enjoy the evening.`,
    ],
    areasButton:          'View All Wisconsin Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Wisconsin Destination Hibachi Events Near ${city}`,
    occasionSubtext:      'Bachelorette weekends, vacation rental group dinners, wedding rehearsal dinners, corporate retreat closings — our Wisconsin destination hibachi chefs make every occasion the highlight of the trip.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Wisconsin Destination Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Our Wisconsin Destination Guests Are Saying',
  },
  // T5 — Northeast Wisconsin
  {
    heroPill:           'Private Hibachi Chef',
    experiencePill:     'The Fox Valley & Northeast Wisconsin Experience',
    experiencePoints:   (city) => [
      `Chef travels to your ${city} home, deck, or outdoor event space fully equipped`,
      'Premium proteins — steak, chicken, shrimp, salmon, lobster tail, and more',
      'Interactive teppanyaki entertainment with flame tricks and knife skills',
      'Menu customized around your preferences and dietary requirements',
      'Setup to cleanup — completely handled by your chef',
    ],
    experienceImage:    '/pics/mobile-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at an event in ${city} Wisconsin`,
    areasPill:          'Northeast Wisconsin Service Area',
    areasHeadline:      (city) => `Serving ${city} and Northeast Wisconsin`,
    areasIntro: [
      (city) => `Our private hibachi chef service covers all of Northeast Wisconsin including ${city}, Green Bay, De Pere, Appleton, Neenah, Menasha, Oshkosh, Kaukauna, and surrounding Fox Valley and Brown County communities. From Green Bay backyard gatherings to Appleton corporate team dinners and Neenah lakefront estate events, we come to you with everything needed.`,
      (city) => `Northeast Wisconsin has a proud tradition of community and family entertaining — and ${city} is a vibrant part of that culture. Our private hibachi chefs bring the full teppanyaki experience to your location, delivering restaurant-quality food and live entertainment that elevates every gathering.`,
    ],
    areasButton:          'View All Wisconsin Locations',
    occasionPill:         'Perfect For',
    occasionHeadline:     (city) => `Hibachi Events We Love in ${city}`,
    occasionSubtext:      'From Fox Valley graduation parties to Green Bay Packers-season entertaining and Neenah lakefront estate dinners, our Northeast Wisconsin hibachi chefs bring the experience to you.',
    faqPill:              'Common Questions',
    faqHeadline:          (city, abbr) => `Northeast Wisconsin Hibachi FAQ — ${city}, ${abbr}`,
    testimonialSubheading: 'What Northeast Wisconsin Hosts Are Saying',
  },
]

// ─── Local Highlights ──────────────────────────────────────────────────────────
const WI_LOCAL_HIGHLIGHTS = {
  'milwaukee':     ['Historic Third Ward event culture and rooftop entertaining', 'Bay View neighborhood backyard celebrations', 'Fiserv Forum-adjacent corporate team dinners', 'Brady Street and East Side community gatherings', 'Walker\'s Point creative district celebrations', 'Marquette University graduation weekend events', 'UWM milestone and neighborhood dinners'],
  'mequon':        ['Lake Michigan shoreline estate graduation dinners', 'Concordia University of Wisconsin graduation weekend events', 'Thiensville village-adjacent community celebrations', 'Ozaukee County executive estate entertaining', 'Mequon-Thiensville School District graduation season'],
  'brookfield':    ['Brookfield Square and Moorland Road corporate corridor events', 'Blue Mound Road executive home entertaining', 'Elmbrook School District graduation parties', 'Waukesha County corporate holiday team dinners', 'Fiserv Corporation-area team appreciation events'],
  'wauwatosa':     ['Medical College of Wisconsin milestone and residency dinners', 'Story Hill and Enderis Park neighborhood celebrations', 'Tosa Village-area community gatherings', 'Mayfair Collection district corporate entertaining', 'Wauwatosa East High School graduation events'],
  'whitefish-bay': ['Whitefish Bay High School graduation season estate parties', 'Silver Spring Drive lakefront community entertaining', 'Lake Michigan North Shore estate celebrations', 'Milwaukee\'s most prestigious residential enclave milestone events', 'North Shore professional family anniversary and birthday events'],
  // Batch 2
  'madison':       ['UW-Madison State Street graduation weekend events', 'Epic Systems milestone and corporate retreat dinners', 'Capitol Square neighborhood celebrations', 'Lake Mendota and Lake Monona waterfront estate parties', 'Willy Street and Atwood neighborhood community gatherings', 'Madison tech corridor corporate team appreciation dinners'],
  'middleton':     ['Epic Systems and Exact Sciences campus milestone dinners', 'Greenway Station and Century Avenue corporate corridor events', 'Middleton High School graduation season celebrations', 'Pheasant Branch Creek-adjacent neighborhood estate gatherings', 'Middleton Hills community-oriented anniversary and birthday dinners', 'Madison-Middleton tech corridor team appreciation dinners'],
  'verona':        ['Epic Systems campus corporate retreat and milestone dinners', 'Verona Area High School graduation season celebrations', 'Sugar River State Trail-adjacent property estate events', 'Dane County western corridor community gatherings', 'Verona tech corridor corporate team appreciation events', 'Black Earth Creek corridor rural estate dinners'],
  'waunakee':      ['Waunakee High School graduation season estate celebrations', 'Prairie subdivision and rural estate property dinners', 'Madison-Waunakee commuter professional community events', 'DeForest and Windsor-adjacent corridor gatherings', 'Lake Mendota north-shore adjacent property events', 'Waunakee Tech Park corporate team dinners'],
  // Batch 3
  'delafield':     ['Nagawicka Lake and Pewaukee Lake estate graduation dinners', 'Kettle Moraine State Forest-adjacent property events', 'Delafield Inn and Hawks Inn area celebration dinners', 'Summit-Nashotah School District graduation season', 'Lake Country lakefront estate anniversary and birthday parties', 'Waukesha County western corridor executive home dinners'],
  'oconomowoc':    ['Oconomowoc Lake and Lac La Belle estate graduation dinners', 'Ingleside Hotel area property and wedding weekend rehearsal dinners', 'Oconomowoc High School graduation season celebrations', 'Fowler Lake and Fowler Park-adjacent property estate events', 'Lake Country resort community vacation rental dinners', 'Waukesha County executive lakefront estate celebrations'],
  'lake-geneva':   ['Geneva Lake Shore Path vacation rental property events', 'Grand Geneva Resort-adjacent estate and vacation home dinners', 'The Abbey Resort corridor bachelorette and group weekend events', 'Riviera Beach-adjacent property celebrations', 'Williams Bay and Fontana-on-Geneva-Lake lakefront property dinners', 'Lake Geneva vacation rental group and family reunion gatherings'],
  'kohler':        ['American Club resort-adjacent vacation home and estate dinners', 'Whistling Straits and Blackwolf Run corporate retreat events', 'Kohler Arts Center community and cultural celebration dinners', 'Sheboygan County resort corridor vacation rental group events', 'Elkhart Lake Road America area corporate retreat dinners', 'Lake Michigan shoreline estate and vacation property celebrations'],
  // Batch 4
  'green-bay':     ['Lambeau Field and Titletown District corporate and celebration events', 'Packers Heritage Trail community gatherings and season parties', 'Ashwaubenon-adjacent corporate team appreciation dinners', 'De Pere and Howard-adjacent community estate celebrations', 'UWGB graduation season family and community dinners', 'Green Bay Packers game-week entertaining and backyard parties'],
  'appleton':      ['Lawrence University graduation season family and celebration dinners', 'Fox Cities Performing Arts Center-adjacent community events', 'Fox River Mile-adjacent property and corporate celebrations', 'Outagamie County corporate team appreciation and holiday events', 'ThedaCare and Fox Valley healthcare milestone celebration dinners', 'Appleton North and East High School graduation season parties'],
  'neenah':        ['Lake Winnebago lakefront estate graduation and anniversary dinners', 'Neenah High School graduation season backyard celebrations', 'Fox River corridor-adjacent estate property events', 'Winnebago County corporate and professional community dinners', 'Menasha and Kaukauna adjacent Fox Valley community events', 'Plexus Corp and Menasha Corporation milestone and team appreciation events'],
  'sturgeon-bay':  ['Peninsula State Park-adjacent vacation rental and cabin weekend dinners', 'Fish Creek, Sister Bay, and Egg Harbor waterfront vacation property events', 'Ephraim and Ellison Bay-adjacent Door County destination dinners', 'Sturgeon Bay waterfront property and historic city celebrations', 'Door County bachelorette, family reunion, and group weekend events', 'Door County corporate retreat closing and milestone dinners'],
}

// ─── Per-City Occasion / FAQ Assignments ──────────────────────────────────────
const WI_FEATURED_OCCASIONS = {
  'milwaukee':     WI_OCCASIONS_CORPORATE,
  'mequon':        WI_OCCASIONS_LUXURY,
  'brookfield':    WI_OCCASIONS_CORPORATE,
  'wauwatosa':     WI_OCCASIONS_CORPORATE,
  'whitefish-bay': WI_OCCASIONS_LUXURY,
  'madison':       WI_OCCASIONS_CORPORATE,
  'middleton':     WI_OCCASIONS_CORPORATE,
  'verona':        WI_OCCASIONS_CORPORATE,
  'waunakee':      WI_OCCASIONS_COMMUNITY,
  'delafield':     WI_OCCASIONS_LAKE,
  'oconomowoc':    WI_OCCASIONS_LAKE,
  'lake-geneva':   WI_OCCASIONS_DESTINATION,
  'kohler':        WI_OCCASIONS_DESTINATION,
  'green-bay':     WI_OCCASIONS_COMMUNITY,
  'appleton':      WI_OCCASIONS_COMMUNITY,
  'neenah':        WI_OCCASIONS_COMMUNITY,
  'sturgeon-bay':  WI_OCCASIONS_DESTINATION,
}

const WI_FAQ_SETS = {
  'milwaukee':     WI_FAQ_MILWAUKEE,
  'mequon':        WI_FAQ_NORTH_SHORE,
  'brookfield':    WI_FAQ_MILWAUKEE,
  'wauwatosa':     WI_FAQ_MILWAUKEE,
  'whitefish-bay': WI_FAQ_NORTH_SHORE,
  'madison':       WI_FAQ_MADISON,
  'middleton':     WI_FAQ_MADISON,
  'verona':        WI_FAQ_MADISON,
  'waunakee':      WI_FAQ_MADISON,
  'delafield':     WI_FAQ_LAKE_COUNTRY,
  'oconomowoc':    WI_FAQ_LAKE_COUNTRY,
  'lake-geneva':   WI_FAQ_DESTINATION,
  'kohler':        WI_FAQ_DESTINATION,
  'green-bay':     WI_FAQ_NORTHEAST,
  'appleton':      WI_FAQ_NORTHEAST,
  'neenah':        WI_FAQ_NORTHEAST,
  'sturgeon-bay':  WI_FAQ_DESTINATION,
}

// ─── Hero Subtitles ────────────────────────────────────────────────────────────
const WI_HERO_SUBTITLES = {
  'milwaukee':     'Private hibachi chef in Milwaukee — Historic Third Ward, Bay View, East Side, Fiserv Forum district, and all Milwaukee neighborhoods.',
  'mequon':        'Hibachi at home in Mequon, WI — private hibachi chef for Lake Michigan estate dinners, graduation parties, and Ozaukee County celebrations.',
  'brookfield':    'Hibachi catering in Brookfield, WI — private chef for Waukesha County corporate events, Elmbrook graduation parties, and holiday team dinners.',
  'wauwatosa':     'Hibachi at home in Wauwatosa, WI — private hibachi chef for Medical College milestone dinners, Story Hill celebrations, and Tosa neighborhood events.',
  'whitefish-bay': 'Private hibachi chef in Whitefish Bay — Silver Spring Drive lakefront estate dinners, graduation parties, and North Shore milestone celebrations.',
  'madison':       'Hibachi catering in Madison, WI — private hibachi chef for UW-Madison graduation parties, Epic Systems corporate events, and Capitol Square celebrations.',
  'middleton':     'Hibachi at home in Middleton, WI — private hibachi chef for Epic corridor team dinners, Middleton High School graduation parties, and Dane County events.',
  'verona':        'Private hibachi chef in Verona, WI — catering for Epic Systems events, Verona Area School District graduations, and Dane County celebrations.',
  'waunakee':      'Hibachi at home in Waunakee, WI — private hibachi chef for backyard dinners, graduation parties, and Dane County community celebrations.',
  'delafield':     'Hibachi at home in Delafield, WI — private hibachi chef for Lake Country estate dinners, Nagawicka Lake celebrations, and Kettle Moraine events.',
  'oconomowoc':    'Backyard hibachi in Oconomowoc, WI — private hibachi chef for Lac La Belle estate events, Ingleside Hotel area celebrations, and Lake Country gatherings.',
  'lake-geneva':   'Mobile hibachi chef in Lake Geneva, WI — private hibachi for Geneva Lake vacation rentals, Grand Geneva area events, and bachelorette weekend dinners.',
  'kohler':        'Mobile hibachi chef in Kohler, WI — private hibachi for American Club resort area, Whistling Straits events, and Sheboygan County estate celebrations.',
  'green-bay':     'Hibachi at home in Green Bay, WI — private hibachi chef for Titletown District celebrations, Lambeau Field-adjacent events, and Brown County family dinners.',
  'appleton':      'Hibachi catering in Appleton, WI — private hibachi chef for Fox Valley corporate events, Lawrence University graduations, and Outagamie County celebrations.',
  'neenah':        'Hibachi at home in Neenah, WI — private hibachi chef for Lake Winnebago estate events, Fox Valley community celebrations, and Winnebago County gatherings.',
  'sturgeon-bay':  'Mobile hibachi chef in Sturgeon Bay, WI — private hibachi for Door County cabin weekends, Fish Creek vacation rentals, and Peninsula State Park area events.',
}

// ─── Meta Title & Description Overrides ────────────────────────────────────────
const WI_META_OVERRIDES = {
  'milwaukee':     { metaTitle: 'Private Hibachi Chef in Milwaukee WI | Hibachi Chef Milwaukee Wisconsin',          metaDescription: 'Hire a private hibachi chef in Milwaukee, WI. We travel to every neighborhood — Bay View, East Side, Third Ward, Wauwatosa, Brookfield — for events from 10 to 100 guests.' },
  'mequon':        { metaTitle: 'Hibachi at Home in Mequon WI | Private Hibachi Chef Mequon Wisconsin',             metaDescription: 'Private hibachi chef in Mequon, WI for Lake Michigan estate dinners, graduation parties, and Ozaukee County celebrations. Serving the full North Shore corridor.' },
  'brookfield':    { metaTitle: 'Hibachi Catering Brookfield WI | Private Hibachi Chef Brookfield Wisconsin',        metaDescription: 'Private hibachi catering in Brookfield, WI for corporate events, team dinners, and Elmbrook graduation parties. Serving the Moorland Road and Blue Mound Road corporate corridor.' },
  'wauwatosa':     { metaTitle: 'Hibachi at Home in Wauwatosa WI | Private Hibachi Chef Wauwatosa Wisconsin',        metaDescription: 'Private hibachi chef in Wauwatosa, WI for Medical College milestone dinners, Story Hill neighborhood parties, and Tosa Village celebrations.' },
  'whitefish-bay': { metaTitle: 'Private Hibachi Chef in Whitefish Bay WI | Hibachi Chef Whitefish Bay Wisconsin',   metaDescription: 'Private hibachi chef in Whitefish Bay, WI for North Shore estate graduations, anniversary dinners, and lakefront celebrations. Serving Silver Spring Drive and all North Shore communities.' },
  'madison':       { metaTitle: 'Hibachi Catering Madison WI | Private Hibachi Chef Madison Wisconsin',              metaDescription: 'Private hibachi catering in Madison, WI for UW-Madison graduation dinners, Epic Systems team events, and Dane County celebrations. Serving the full Madison metro and surrounding communities.' },
  'middleton':     { metaTitle: 'Hibachi at Home Middleton WI | Private Hibachi Chef Middleton Wisconsin',           metaDescription: 'Private hibachi chef in Middleton, WI for Epic corridor team dinners, graduation parties, and Dane County events. Serving the Madison-Middleton corridor and surrounding communities.' },
  'verona':        { metaTitle: 'Private Hibachi Chef Verona WI | Hibachi Catering Verona Wisconsin',                metaDescription: 'Private hibachi chef in Verona, WI for Epic Systems milestone dinners, Verona Area graduation parties, and Dane County celebrations. Serving the full Madison west-corridor.' },
  'waunakee':      { metaTitle: 'Hibachi at Home Waunakee WI | Private Hibachi Chef Waunakee Wisconsin',             metaDescription: 'Private hibachi chef in Waunakee, WI for graduation dinners, backyard celebrations, and Dane County community events. Serving Waunakee and the Madison north corridor.' },
  'delafield':     { metaTitle: 'Hibachi at Home Delafield WI | Private Hibachi Chef Delafield Wisconsin',           metaDescription: 'Private hibachi chef in Delafield, WI for Nagawicka Lake estate events, graduation dinners, and Lake Country celebrations. Serving Waukesha County Lake Country and surrounding communities.' },
  'oconomowoc':    { metaTitle: 'Backyard Hibachi Oconomowoc WI | Private Hibachi Chef Oconomowoc Wisconsin',        metaDescription: 'Private hibachi chef in Oconomowoc, WI for Lac La Belle estate events, rehearsal dinners, and Lake Country celebrations. Serving the Lake Country Waukesha County corridor.' },
  'lake-geneva':   { metaTitle: 'Mobile Hibachi Chef Lake Geneva WI | Private Hibachi Lake Geneva Wisconsin',        metaDescription: 'Mobile hibachi chef in Lake Geneva, WI for vacation rental dinners, bachelorette weekends, and Geneva Lake celebrations. Serving Lake Geneva, Williams Bay, Fontana, and all Walworth County properties.' },
  'kohler':        { metaTitle: 'Mobile Hibachi Chef Kohler WI | Private Hibachi Chef Kohler Wisconsin',             metaDescription: 'Mobile hibachi chef in Kohler, WI for American Club area events, corporate retreats, and Sheboygan County estate celebrations. Serving Kohler, Sheboygan, and surrounding resort properties.' },
  'green-bay':     { metaTitle: 'Hibachi at Home Green Bay WI | Private Hibachi Chef Green Bay Wisconsin',           metaDescription: 'Private hibachi chef in Green Bay, WI for Titletown corporate events, graduation dinners, and Brown County celebrations. Serving Green Bay, De Pere, Ashwaubenon, and the full northeast corridor.' },
  'appleton':      { metaTitle: 'Hibachi Catering Appleton WI | Private Hibachi Chef Appleton Wisconsin',            metaDescription: 'Private hibachi catering in Appleton, WI for Lawrence University graduation dinners, Fox Valley corporate events, and Outagamie County celebrations. Serving the full Fox Cities area.' },
  'neenah':        { metaTitle: 'Hibachi at Home Neenah WI | Private Hibachi Chef Neenah Wisconsin',                 metaDescription: 'Private hibachi chef in Neenah, WI for Lake Winnebago estate events, graduation parties, and Fox Valley community celebrations. Serving Neenah, Menasha, Appleton, and the Fox Valley.' },
  'sturgeon-bay':  { metaTitle: 'Mobile Hibachi Chef Sturgeon Bay WI | Private Hibachi Door County Wisconsin',       metaDescription: 'Mobile hibachi chef in Sturgeon Bay and Door County, WI for vacation rental dinners, bachelorette weekends, and cabin group events. Serving Fish Creek, Sister Bay, Ephraim, and all of Door County.' },
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
const WI_TESTIMONIALS_MILWAUKEE = [
  { text: "Historic Third Ward rooftop birthday dinner for twenty-two — the chef set up perfectly in our outdoor terrace and the teppanyaki performance had every guest completely captivated. Milwaukee has great restaurants but nothing compares to a private chef at your own event. Already planning next year's celebration.", name: 'Stephanie K.', city: 'Milwaukee', event: 'Birthday Celebration', initials: 'SK' },
  { text: "Corporate team appreciation dinner at our Bay View property for thirty-four after a record year. The private hibachi chef was professional from first contact to cleanup, the food was exceptional, and the team connection we built at that table exceeded anything we've created at a restaurant event. Fiserv corridor teams — this is the format.", name: 'David R.', city: 'Milwaukee', event: 'Corporate Team Dinner', initials: 'DR' },
  { text: "Marquette graduation party for our daughter at our East Side home — thirty-eight family members who had flown in from eight states. The chef navigated every dietary preference flawlessly, the performance was extraordinary, and the cleanup was complete. The most effortless large gathering we have ever hosted.", name: 'Mary & John B.', city: 'Milwaukee', event: 'Graduation Celebration', initials: 'MB' },
]

const WI_TESTIMONIALS_MEQUON = [
  { text: "Lake Michigan estate graduation dinner at our Mequon property for forty-two guests who came from across the country. The private hibachi chef set up on our stone terrace overlooking the shore, performed beautifully, and the evening became something our family references as the finest dinner we've ever hosted. Ozaukee County — if you haven't tried this, you're missing the best format in private entertaining.", name: 'Margaret & William C.', city: 'Mequon', event: 'Estate Graduation Dinner', initials: 'MC' },
  { text: "Thirty-eighth anniversary dinner at our Mequon home with twenty-four guests. We've celebrated at Milwaukee's finest restaurants over the years — this private hibachi evening was the most memorable of them all. The intimacy of our own lakefront setting, the quality of the performance, and the premium proteins together created something no restaurant experience can replicate.", name: 'Robert & Patricia H.', city: 'Mequon', event: 'Anniversary Dinner', initials: 'RH' },
  { text: "Executive home dinner for a visiting leadership team at our Mequon estate — fourteen senior guests from three countries. The private hibachi chef was professional, the Wagyu beef was extraordinary, and our international guests had never experienced teppanyaki in a private setting. Mequon is the right backdrop for this format.", name: 'Thomas A.', city: 'Mequon', event: 'Executive Dinner', initials: 'TA' },
]

const WI_TESTIMONIALS_BROOKFIELD = [
  { text: "Moorland Road team appreciation dinner for thirty-six after a major contract win. The private hibachi chef transformed what could have been a standard team dinner into the best company event we've held in four years of doing this. Every colleague said the same thing — they'd never experienced anything like it. Already planning the holiday repeat.", name: 'Jennifer M.', city: 'Brookfield', event: 'Corporate Team Dinner', initials: 'JM' },
  { text: "Elmbrook graduation party at our Brookfield home for twenty-eight family members. The chef arrived on time, set up on our patio with no fuss, and delivered a live performance that had guests from eight to seventy-five equally engaged. Waukesha County graduation Saturdays — private hibachi solves the reservation problem completely.", name: 'Susan & James D.', city: 'Brookfield', event: 'Graduation Party', initials: 'SD' },
  { text: "Holiday party for thirty-two Brookfield corporate colleagues. The hibachi format created the atmosphere that none of our previous holiday events had managed — everyone at the same table, watching the same performance, eating together. Zero logistics for me. Already the standard format for next year.", name: 'Greg L.', city: 'Brookfield', event: 'Corporate Holiday Party', initials: 'GL' },
]

const WI_TESTIMONIALS_WAUWATOSA = [
  { text: "Medical College residency completion dinner at our Wauwatosa home for twenty-six colleagues and families. The private hibachi chef was exceptional from first contact to cleanup — exactly the level of professionalism our Medical Mile community expects. Already the most-referenced event of the year.", name: 'Dr. Rachel K.', city: 'Wauwatosa', event: 'Medical Milestone Dinner', initials: 'RK' },
  { text: "Story Hill birthday party for twenty-two on our patio. The chef needed minimal setup space, ran the complete show, and left the yard spotless. Tosa neighbors have been asking for the contact information for two months. Wauwatosa backyard hibachi is an absolute revelation.", name: 'Ben & Lisa T.', city: 'Wauwatosa', event: 'Birthday Party', initials: 'BT' },
  { text: "Anniversary dinner for twenty at our Enderis Park home. We've lived in Wauwatosa for eighteen years and this was the finest dinner party we've hosted — the intimacy of our own backyard, the quality of the teppanyaki performance, and the premium proteins together created an evening that no Milwaukee restaurant dinner could match.", name: 'Carol & Mike W.', city: 'Wauwatosa', event: 'Anniversary Dinner', initials: 'CW' },
]

const WI_TESTIMONIALS_WHITEFISH_BAY = [
  { text: "Whitefish Bay High School graduation party at our Silver Spring Drive property for thirty-four family and friends who came from across the country. The private hibachi chef set up on our lakefront terrace and the performance with Lake Michigan as the backdrop was something none of our guests had ever experienced. North Shore hosts — this is the graduation format you've been looking for.", name: 'Nancy & Charles P.', city: 'Whitefish Bay', event: 'Estate Graduation Party', initials: 'NP' },
  { text: "Forty-second anniversary dinner at our Whitefish Bay home for twenty guests. We've marked our anniversaries at some of Milwaukee's finest restaurants, and this private hibachi evening surpassed every one of them. The North Shore setting, the quality of the performance, and the premium proteins all worked together beautifully.", name: 'Edward & Margaret L.', city: 'Whitefish Bay', event: 'Anniversary Dinner', initials: 'EL' },
  { text: "Birthday celebration for twenty-four on our Whitefish Bay property. The chef was professional, needed minimal setup space on our patio, and delivered a show that had guests of all ages simultaneously entertained. Milwaukee North Shore friends are already asking for the contact. This is the format that defines a memorable evening.", name: 'Christine H.', city: 'Whitefish Bay', event: 'Birthday Celebration', initials: 'CH' },
]

const WI_TESTIMONIALS_MADISON = [
  { text: "UW-Madison graduation dinner at our Nakoma home for thirty-eight family members who had traveled from seven states. The private hibachi chef arrived on time, set up on our patio, and delivered a performance that had guests from eight to seventy-two completely captivated. The Capitol Square restaurants were fully booked for three Saturdays — private hibachi solved the graduation dinner problem completely.", name: 'Michael & Susan T.', city: 'Madison', event: 'UW-Madison Graduation Dinner', initials: 'MT' },
  { text: "Epic Systems team appreciation dinner for forty-two colleagues at our Madison property after a major product launch. The private hibachi format created the kind of shared experience that our usual restaurant team dinners never manage — everyone at the same table, watching the same performance, eating together. Already the format for our next team milestone.", name: 'Jennifer K.', city: 'Madison', event: 'Corporate Team Dinner', initials: 'JK' },
  { text: "Capitol Square-adjacent birthday dinner at our Isthmus home for twenty-four. The chef navigated our outdoor space perfectly, ran the full teppanyaki performance, and left everything spotless. Madison hosts who haven't done private hibachi — this is the format that works in any outdoor setting this city has to offer.", name: 'Alicia R.', city: 'Madison', event: 'Birthday Celebration', initials: 'AR' },
]

const WI_TESTIMONIALS_MIDDLETON = [
  { text: "Middleton High School graduation party at our Greenway area home for thirty guests. The private hibachi chef set up on our patio with no issues, ran a full teppanyaki performance that had every age group entertained, and cleaned up completely. Graduation restaurants in Madison were fully booked — this was the right choice.", name: 'Mark & Karen H.', city: 'Middleton', event: 'Graduation Party', initials: 'MH' },
  { text: "Team dinner at our Middleton property for twenty-eight Epic colleagues after a major software release. The shared experience — everyone watching the same chef, eating together — created the team connection our leadership had been trying to build at restaurant dinners for two years. Simple recommendation: private hibachi is just the better format.", name: 'David C.', city: 'Middleton', event: 'Corporate Team Dinner', initials: 'DC' },
  { text: "Anniversary dinner for twenty at our Middleton Hills home. We've been celebrating in Madison restaurants for eighteen years. This private hibachi dinner on our own patio — with the chef focused entirely on our table — was the finest evening we've hosted. Middleton hosting culture just found its format.", name: 'Paul & Lisa M.', city: 'Middleton', event: 'Anniversary Dinner', initials: 'PM' },
]

const WI_TESTIMONIALS_VERONA = [
  { text: "Verona Area graduation party at our property for thirty-two family members and friends. The chef arrived fully equipped, set up in our backyard seamlessly, and delivered a complete teppanyaki experience that was the highlight of our graduation weekend. Verona and Madison restaurants were fully booked — private hibachi was the answer we'd been looking for.", name: 'Steven & Karen L.', city: 'Verona', event: 'Graduation Party', initials: 'SL' },
  { text: "Epic Systems team appreciation dinner at our Verona property for twenty-six colleagues. The private hibachi format created a shared table experience that our previous team dinners at restaurants never managed — the performance, the interaction, and the shared meal all contributed. Already the go-to format for every team milestone.", name: 'Rachel G.', city: 'Verona', event: 'Epic Corporate Team Dinner', initials: 'RG' },
  { text: "Birthday celebration for twenty on our Verona home deck. The chef needed minimal space, ran the complete show, and left our deck immaculate. West Dane County is discovering what Madison already knows — private hibachi in your own outdoor space is the finest dinner party format available.", name: 'Tom & Julie W.', city: 'Verona', event: 'Birthday Celebration', initials: 'TW' },
]

const WI_TESTIMONIALS_WAUNAKEE = [
  { text: "Waunakee High School graduation party at our home for twenty-eight family members. The chef arrived on time, set up on our backyard patio without any trouble, and ran a complete teppanyaki show that entertained every age group from six to seventy-four. Madison graduation restaurants were fully booked for every Saturday in May — private hibachi was the right answer.", name: 'Brian & Amy K.', city: 'Waunakee', event: 'Graduation Celebration', initials: 'BK' },
  { text: "Birthday dinner for twenty at our Waunakee home. We've celebrated in Madison for years but never hosted anything like this. The chef ran the full performance, the premium proteins were outstanding, and the cleanup was complete. Our Dane County neighborhood has found its private dinner format.", name: 'Carol & Greg T.', city: 'Waunakee', event: 'Birthday Celebration', initials: 'CT' },
  { text: "Corporate team dinner at our Waunakee property for eighteen colleagues from our tech startup. The private hibachi format created a connection our usual restaurant outings never do — everyone at the same table, the same experience, the same conversation. Already planning the next milestone event.", name: 'Nathan F.', city: 'Waunakee', event: 'Corporate Team Dinner', initials: 'NF' },
]

const WI_TESTIMONIALS_DELAFIELD = [
  { text: "Nagawicka Lake estate graduation party at our Delafield lakefront property for thirty-six guests. The private hibachi chef set up on our stone terrace with the lake as backdrop, ran a full teppanyaki performance, and left everything spotless. Lake Country graduation season — this is the format that matches the setting.", name: 'Robert & Patricia W.', city: 'Delafield', event: 'Lakefront Graduation Party', initials: 'RW' },
  { text: "Anniversary dinner at our Delafield home for twenty-two guests. We've celebrated at Lake Country restaurants and Milwaukee establishments for years — this private hibachi evening on our own property surpassed all of them. The Kettle Moraine setting, the quality of the performance, and the premium proteins combined to create an evening we reference constantly.", name: 'Charles & Margaret B.', city: 'Delafield', event: 'Anniversary Dinner', initials: 'CB' },
  { text: "Birthday party at our Delafield lake property for twenty-eight guests. The chef traveled fully equipped, needed minimal setup space, and ran a complete show that had everyone from our teenager to my seventy-five-year-old mother equally engaged. Waukesha County Lake Country has found its private dinner format.", name: 'Sarah & James D.', city: 'Delafield', event: 'Birthday Party', initials: 'SD' },
]

const WI_TESTIMONIALS_OCONOMOWOC = [
  { text: "Oconomowoc Lake estate dinner for forty guests — graduation celebration for two family members at our lakefront property. The private hibachi chef set up on our terrace, ran the full performance, and created the evening we'd been imagining. Lac La Belle backdrop, premium proteins, and the teppanyaki show together — this is the Lake Country experience.", name: 'William & Susan E.', city: 'Oconomowoc', event: 'Lakefront Graduation Dinner', initials: 'WE' },
  { text: "Wedding weekend rehearsal dinner at our Oconomowoc property for twenty-eight. Our guests had come from eleven states — the private hibachi dinner on our lakefront lawn was the memory everyone carried home from the weekend. Ingleside Hotel and resort-adjacent properties in Oconomowoc are perfect for this format.", name: 'Jennifer & Mark T.', city: 'Oconomowoc', event: 'Rehearsal Dinner', initials: 'JT' },
  { text: "Birthday party for twenty-four at our Fowler Lake property. Oconomowoc has wonderful restaurants, but nothing they offer compares to a private hibachi chef on your own lake property. The experience, the setting, and the food together made it the finest dinner we've hosted in twenty years of living on this lake.", name: 'David & Carol R.', city: 'Oconomowoc', event: 'Lake Property Birthday Party', initials: 'DR' },
]

const WI_TESTIMONIALS_LAKE_GENEVA = [
  { text: "Bachelorette weekend at our Lake Geneva vacation rental on the Shore Path — twelve guests for Saturday dinner. The mobile hibachi chef arrived fully equipped, set up on our waterfront deck, and delivered a show that became the weekend's definitive memory. Grand Geneva bachelorette groups and vacation rental parties — this is the Lake Geneva Saturday night dinner.", name: 'Ashley M.', city: 'Lake Geneva', event: 'Bachelorette Weekend Dinner', initials: 'AM' },
  { text: "Family reunion weekend at our Geneva Lake vacation rental — thirty-two guests over three generations, five states represented. The private hibachi chef managed every dietary preference, navigated our large outdoor space with complete professionalism, and delivered a dinner that everyone from eight to eighty-two celebrated equally. Lake Geneva vacation rental hosts — this is your format.", name: 'Thomas & Elizabeth H.', city: 'Lake Geneva', event: 'Family Reunion Dinner', initials: 'TH' },
  { text: "Anniversary dinner at our Grand Geneva area vacation home for twenty guests. We've celebrated at Lake Geneva's finest restaurants many times over the years — this private hibachi evening on our own lake property was the most memorable dinner of our thirty years together. The Shore Path setting, the premium proteins, and the live teppanyaki performance made it what it was.", name: 'Richard & Patricia C.', city: 'Lake Geneva', event: 'Anniversary Celebration', initials: 'RC' },
]

const WI_TESTIMONIALS_KOHLER = [
  { text: "Corporate retreat dinner at our Kohler-area vacation property for twenty-four executives after two days at Whistling Straits. The private hibachi chef was the evening's centerpiece — a world-class performance that matched the Kohler experience our group had come for. Resort-adjacent properties in Kohler are the perfect setting for this format.", name: 'James R.', city: 'Kohler', event: 'Corporate Retreat Dinner', initials: 'JR' },
  { text: "Birthday weekend at our American Club-adjacent vacation property for eighteen guests. We'd come for the Kohler resort experience — the private hibachi dinner our last evening was the memory that outlasted all of it. The chef traveled fully equipped, the food was exceptional, and the cleanup was complete.", name: 'Catherine B.', city: 'Kohler', event: 'Birthday Weekend Dinner', initials: 'CB' },
  { text: "Wedding rehearsal dinner at our Sheboygan County estate for twenty-eight family members visiting from across the country. The private hibachi format worked beautifully for a group of diverse tastes and ages — the performance brought everyone together in a way a restaurant dinner never could. Kohler-area estate properties are exceptional for this.", name: 'Michael & Susan W.', city: 'Kohler', event: 'Rehearsal Dinner', initials: 'MW' },
]

const WI_TESTIMONIALS_GREEN_BAY = [
  { text: "Packers season corporate entertaining at our Green Bay property for twenty-eight team members. The private hibachi chef was a perfect complement to a Lambeau weekend — premium food, live performance, and the kind of shared experience that brings a team together more effectively than any restaurant dinner. Titletown District businesses have found their corporate event format.", name: 'Kevin L.', city: 'Green Bay', event: 'Corporate Team Dinner', initials: 'KL' },
  { text: "UWGB graduation dinner at our Ashwaubenon home for thirty family members from across the country. The chef arrived on time, set up on our backyard deck, and ran a full teppanyaki show from start to clean finish. Brown County graduation season — private hibachi is the answer to the restaurant reservation problem.", name: 'Barbara & Tom C.', city: 'Green Bay', event: 'Graduation Celebration', initials: 'BC' },
  { text: "Birthday party at our Green Bay home for twenty-two neighbors and friends. The chef ran the complete performance, navigated our backyard patio with no issues, and left everything spotless. Green Bay hosts who haven't done private hibachi — the experience matches what this community knows how to celebrate.", name: 'Linda & Steve A.', city: 'Green Bay', event: 'Birthday Party', initials: 'LA' },
]

const WI_TESTIMONIALS_APPLETON = [
  { text: "Lawrence University graduation dinner at our Appleton home for thirty guests — family members who had traveled from six states. The private hibachi chef arrived fully equipped, set up on our deck, and delivered a complete performance that made our Commencement weekend dinner the memory our family carries forward. Fox Cities graduation restaurants were fully booked — this was the right call.", name: 'Patricia & James H.', city: 'Appleton', event: 'Lawrence University Graduation Dinner', initials: 'PH' },
  { text: "Outagamie County corporate holiday party for thirty-eight colleagues at our Appleton space. The hibachi format created the atmosphere our previous holiday parties had never managed — everyone at the same table, the same live experience, the kind of evening that gets referenced for months afterward.", name: 'Scott V.', city: 'Appleton', event: 'Corporate Holiday Party', initials: 'SV' },
  { text: "Anniversary dinner at our Grand Chute home for twenty-two guests. The Fox Valley has great restaurants — but nothing they offer puts a world-class chef in your own backyard for two hours of live cooking. Appleton private entertaining has found its format.", name: 'Ronald & Carol M.', city: 'Appleton', event: 'Anniversary Dinner', initials: 'RM' },
]

const WI_TESTIMONIALS_NEENAH = [
  { text: "Lake Winnebago estate graduation party at our Neenah lakefront property for thirty-two family members. The private hibachi chef set up on our terrace facing the lake, ran the complete teppanyaki performance, and the evening became the finest dinner we've hosted in seventeen years at this property. Fox Valley lakefront estates are the perfect setting for this format.", name: 'Edward & Nancy T.', city: 'Neenah', event: 'Lakefront Graduation Party', initials: 'ET' },
  { text: "Anniversary dinner for twenty at our Neenah home. We've celebrated at Fox Valley restaurants for years — the private hibachi dinner in our own backyard was something no restaurant experience could match. The intimacy, the performance, and the premium food together created the anniversary evening we had always imagined.", name: 'William & Sandra R.', city: 'Neenah', event: 'Anniversary Dinner', initials: 'WR' },
  { text: "Birthday party for twenty-two at our Neenah property. The chef traveled from Milwaukee fully equipped, ran the complete show, and left our patio spotless. Neenah and the Fox Valley are building their private hibachi hosting tradition — and this was where it started for our family.", name: 'Christine & Brian K.', city: 'Neenah', event: 'Birthday Celebration', initials: 'CK' },
]

const WI_TESTIMONIALS_STURGEON_BAY = [
  { text: "Bachelorette weekend at our Fish Creek vacation rental in Door County — fourteen guests for Saturday dinner. The mobile hibachi chef traveled fully equipped, set up on our cabin deck above the bay, and delivered a show that became the weekend everyone references six months later. Door County vacation rental hosts — this is your Saturday night dinner.", name: 'Megan S.', city: 'Sturgeon Bay', event: 'Door County Bachelorette Weekend', initials: 'MS' },
  { text: "Family reunion weekend at our Sturgeon Bay vacation property — twenty-eight guests from eight states, three generations. The private hibachi chef managed every dietary preference, navigated our outdoor space perfectly, and created the dinner that brought a scattered family back together around one table. Peninsula State Park Door County — this is the format.", name: 'Daniel & Susan B.', city: 'Sturgeon Bay', event: 'Family Reunion Dinner', initials: 'DB' },
  { text: "Corporate retreat closing dinner at our Sister Bay vacation rental for twenty-two executives. We'd spent two days working at our Door County property — the private hibachi dinner closed the retreat in a way no restaurant could have. The performance, the setting, and the shared table made the trip's final evening its most memorable.", name: 'Andrew K.', city: 'Sturgeon Bay', event: 'Corporate Retreat Dinner', initials: 'AK' },
]

function _getWiTestimonials(citySlug) {
  const map = {
    'milwaukee':     WI_TESTIMONIALS_MILWAUKEE,
    'mequon':        WI_TESTIMONIALS_MEQUON,
    'brookfield':    WI_TESTIMONIALS_BROOKFIELD,
    'wauwatosa':     WI_TESTIMONIALS_WAUWATOSA,
    'whitefish-bay': WI_TESTIMONIALS_WHITEFISH_BAY,
    'madison':       WI_TESTIMONIALS_MADISON,
    'middleton':     WI_TESTIMONIALS_MIDDLETON,
    'verona':        WI_TESTIMONIALS_VERONA,
    'waunakee':      WI_TESTIMONIALS_WAUNAKEE,
    'delafield':     WI_TESTIMONIALS_DELAFIELD,
    'oconomowoc':    WI_TESTIMONIALS_OCONOMOWOC,
    'lake-geneva':   WI_TESTIMONIALS_LAKE_GENEVA,
    'kohler':        WI_TESTIMONIALS_KOHLER,
    'green-bay':     WI_TESTIMONIALS_GREEN_BAY,
    'appleton':      WI_TESTIMONIALS_APPLETON,
    'neenah':        WI_TESTIMONIALS_NEENAH,
    'sturgeon-bay':  WI_TESTIMONIALS_STURGEON_BAY,
  }
  return map[citySlug] ?? WI_TESTIMONIALS_MILWAUKEE
}

// ─── Batch 1 City-Specific Intros (indices 448–452) ───────────────────────────
export const WI_CITY_INTROS = [
  // 0 — Milwaukee (index 448)
  {
    headline: () => `Milwaukee Private Hibachi Chef — The City of Neighborhoods Experience`,
    opening:  () => `Milwaukee, Wisconsin is a city of neighborhoods — each with its own identity, its own pride, and its own social calendar. The Historic Third Ward's brick-warehouse event culture. Brady Street's European-village character. Bay View's creative backyard entertaining tradition. The East Side's lakefront-adjacent neighborhood gatherings. Walker's Point's emerging arts district energy. Fiserv Forum's Deer District corporate and celebration life. Marquette University's campus and family celebration season. Milwaukee knows how to celebrate, and it does so with a distinctiveness that no other Wisconsin city matches.`,
    middle:   () => `Our private hibachi chef service brings the full teppanyaki experience to your Milwaukee location — wherever that is. A Third Ward rooftop terrace. A Bay View backyard. An East Side home with the lake visible three blocks away. A Deer District-adjacent corporate venue. Our chef arrives with everything needed: a self-contained propane grill, hand-selected proteins, all ingredients, and the showmanship to transform your gathering into a genuine Milwaukee event. Marquette and UWM graduation season in May and June creates peak demand — Milwaukee families who want to celebrate without the city's overbooked restaurant landscape find that private hibachi is the natural solution.`,
    closing:  () => `Milwaukee has one of the most vibrant and diverse food cultures in the Midwest. A private hibachi chef brings the performance element that no Milwaukee restaurant can match — an interactive, personalized experience where the chef is there for your table and your guests alone. Whether it's a birthday dinner in the Third Ward, a corporate appreciation event near Fiserv, or a graduation celebration for a Marquette or UWM graduate, we make it the evening Milwaukee hosts talk about for months.`,
  },
  // 1 — Mequon (index 449)
  {
    headline: () => `Mequon Hibachi at Home — Lake Michigan Estate Private Chef Experience`,
    opening:  () => `Mequon, Wisconsin is Wisconsin's most prestigious residential address — a Lake Michigan shoreline community in Ozaukee County characterized by estate properties on wooded lots, Concordia University of Wisconsin's academic presence, the charming Thiensville village-adjacent character, and a residential culture built by generations of Milwaukee's most accomplished executives, physicians, and entrepreneurs. The Mequon-Thiensville School District's academic excellence and the community's strong graduation tradition create a consistent private hibachi market that matches the setting perfectly.`,
    middle:   () => `Our private hibachi chef service was designed for exactly the Mequon hosting experience. Whether you're hosting a graduation dinner on your estate lawn for forty family members who've traveled from across the country, an anniversary celebration on a stone patio that looks out over Ozaukee County's wooded landscape, a corporate executive dinner for visiting leadership from national firm headquarters, or a milestone birthday party where the guest list expects an experience that honors the occasion — our chef arrives fully equipped and handles every detail from arrival to cleanup.`,
    closing:  () => `Mequon hosts understand that the setting they've built — the property, the neighborhood, the community — deserves occasions that match it. Our private hibachi chef delivers a restaurant-quality teppanyaki experience to your Lake Michigan-area home with premium proteins, the live performance, and complete cleanup. From Concordia graduation weekends to Ozaukee County estate anniversary dinners, we serve Wisconsin's most distinguished residential community at the level it deserves.`,
  },
  // 2 — Brookfield (index 450)
  {
    headline: () => `Brookfield Hibachi Catering — Waukesha County Corporate & Estate Events`,
    opening:  () => `Brookfield, Wisconsin is Waukesha County's commercial and residential anchor — home to Brookfield Square's mixed-use district, the Moorland Road and Blue Mound Road corporate corridors that house regional headquarters and professional offices, Fiserv Corporation's proximity, and one of the most educated and accomplished professional communities in the Milwaukee metro. The Elmbrook School District's exceptional academics and graduation tradition make May and June one of Brookfield's most active private hibachi booking seasons.`,
    middle:   () => `Our private hibachi catering service was built for the Brookfield event calendar. Team appreciation dinners for thirty colleagues after a major quarterly close. Holiday parties for corporate teams who want something genuinely different from the standard banquet hall format. Client entertainment events at a Brookfield corporate campus where the impression made on visitors directly reflects on the company. Elmbrook graduation dinners for families whose children have achieved something worth celebrating with twenty-five guests and premium proteins. Our chef arrives at your property or venue with everything needed and manages every detail from setup to cleanup.`,
    closing:  () => `Brookfield's corporate and residential community has found that private hibachi catering is uniquely effective at creating team connection and client impression. The live cooking performance, the shared table, and the premium food work together to make the evening memorable in a way that a Brookfield restaurant private room cannot replicate. We scale from twenty to eighty guests and serve every occasion on the Brookfield corporate and family calendar.`,
  },
  // 3 — Wauwatosa (index 451)
  {
    headline: () => `Wauwatosa Hibachi at Home — Private Chef for Milwaukee's Medical Mile & Tosa Village`,
    opening:  () => `Wauwatosa, Wisconsin is Milwaukee County's most beloved inner-ring suburb — a community defined by the Medical College of Wisconsin's prestigious campus and healthcare research presence, the Story Hill and Enderis Park neighborhoods' architecturally distinctive homes and vibrant hosting culture, Tosa Village's walkable boutique district along North Avenue, Mayfair Collection's mixed-use energy, and a professional and medical community that entertains with the same intentionality they bring to everything else they do. When Wauwatosa celebrates, the occasion is done right.`,
    middle:   () => `Our private hibachi chef service is a natural fit for Wauwatosa's home-entertaining tradition. Whether it's a Medical College residency completion dinner for twenty-six colleagues and families, a Story Hill anniversary celebration where the guest list has known the host for decades, a Tosa Village-area neighborhood birthday party that needs a format that matches the neighborhood's energy, or a Mayfair corridor corporate team dinner after a significant milestone — our chef arrives fully equipped and manages every detail from first arrival to final cleanup.`,
    closing:  () => `Wauwatosa hosts who've discovered private hibachi consistently report the same outcome: effortless to arrange, extraordinary to live through, and the new standard against which all future home dinners are measured. The Medical College community celebrates milestones frequently — residency completions, fellowship achievements, academic promotions — and private hibachi is the format that honors those moments with the quality they deserve. We bring the chef, the food, and the performance to your Tosa property.`,
  },
  // 4 — Whitefish Bay (index 452)
  {
    headline: () => `Whitefish Bay Private Hibachi Chef — North Shore Estate Dining`,
    opening:  () => `Whitefish Bay, Wisconsin is Milwaukee's most prestigious lakefront suburb — a tightly-knit community on Lake Michigan's western shore where Silver Spring Drive's boutique corridor, the lakefront park bluffs, and some of Milwaukee's most architecturally significant classic homes define a neighborhood that has always entertained with intention. "The Bay" is where Milwaukee's most established professional families chose to live — and where they host with the same pride they bring to everything else about their community.`,
    middle:   () => `Our private hibachi chef service is the right format for Whitefish Bay's hosting tradition. Whether it's a graduation party at a Silver Spring Drive-adjacent lakefront property for thirty-four guests who've traveled from across the country, an anniversary dinner where the guest list spans three generations and expects an evening that honors the occasion, or a milestone birthday celebration on a Whitefish Bay estate whose setting already sets a high bar — our chef arrives fully equipped and manages every detail. Whitefish Bay High School's graduation season is one of the North Shore's most active private hibachi booking periods.`,
    closing:  () => `Whitefish Bay hosts who've experienced private hibachi tell us it's the format they'd been looking for — premium food, the live teppanyaki performance, intimate setting, and complete cleanup by a professional chef. Lake Michigan as your backdrop, the Whitefish Bay neighborhood's warmth and pride as the energy, and a hibachi chef who makes the evening the memory your guests carry home. That's a North Shore dinner done right.`,
  },
  // 5 — Madison (index 453)
  {
    headline: () => `Madison Private Hibachi Chef — State Street, Capitol Square & the University of Wisconsin Experience`,
    opening:  () => `Madison, Wisconsin is unlike any other city in the Midwest — a place where a world-class research university, a thriving tech corridor anchored by Epic Systems and American Family Insurance, a vibrant State Street and Capitol Square cultural scene, and the natural grandeur of two lakes create a community with a consistently sophisticated appetite for life. UW-Madison's annual graduation season, the Dane County housing stock of Nakoma and Shorewood Hills, the Isthmus's walkable dining culture, and the academic and professional community that has chosen Madison as its home form a private hibachi market that appreciates both quality and the element of surprise.`,
    middle:   () => `Our private hibachi chef service has become Madison's preferred format for the occasions that deserve more than a restaurant reservation. A UW-Madison graduation dinner where forty family members from seven states gather around a Nakoma home patio. An Epic Systems milestone dinner for a team that built something worth celebrating. A Capitol Square-adjacent birthday where the guest list is too sophisticated for a standard restaurant private room. A Lake Mendota-adjacent property dinner where the water visible from the table already sets a high standard. We travel to your location with everything needed — self-contained propane grill, hand-selected proteins, all ingredients, and the teppanyaki performance skills that create the evening.`,
    closing:  () => `Madison graduation season is the most concentrated private hibachi booking period in Dane County. UW-Madison commencement in May fills our calendar 6–8 weeks ahead — Madison families who know their date should act early. For Epic corporate events, Capitol Square neighborhood celebrations, and Lake Monona waterfront dinners, we serve the full Madison metro and surrounding Dane County. State Street can wait for another night. This one belongs at your table.`,
  },
  // 6 — Middleton (index 454)
  {
    headline: () => `Middleton Hibachi at Home — Epic Corridor, Greenway Station & the Dane County Tech Community`,
    opening:  () => `Middleton, Wisconsin wears many identities simultaneously — and does so with the confidence of a community that has earned all of them. It is home to the Epic Systems neighboring campus culture, Exact Sciences and TDS Telecom professional community, Greenway Station's walkable mixed-use energy, Middleton Hills' new-urbanist residential character, and a school district that sends class after class into the University of Wisconsin and the tech careers that follow. When Middleton celebrates — and it celebrates with frequency and intention — it does so as a community that combines suburban warmth with a tech-corridor sophistication that few Wisconsin communities can match.`,
    middle:   () => `Our private hibachi chef service is built for the Middleton occasion calendar. Team appreciation dinners at an Epic-adjacent Middleton home for twenty-six colleagues after a major software release. Middleton High School graduation parties where the guest list is a full family extended over two generations and several states. Anniversary dinners on a Middleton Hills property where the character of the neighborhood already sets a high expectation. Century Avenue-area corporate events where a shared table experience creates the team connection that restaurant dinners never quite manage. We travel to your Middleton location with everything included and handle every detail from setup to complete cleanup.`,
    closing:  () => `Middleton's tech corridor and school district combine to create one of Dane County's most active private hibachi markets. Epic Systems milestone events, Middleton High School graduation season, and Pheasant Branch neighborhood celebrations together fill our calendar earlier than any other Madison suburb. Book your Middleton date early — especially for spring graduation season, when Dane County demand peaks simultaneously.`,
  },
  // 7 — Verona (index 455)
  {
    headline: () => `Verona Private Hibachi Chef — Epic Systems, Verona Area Schools & the Dane County Tech Corridor`,
    opening:  () => `Verona, Wisconsin is one of Dane County's most distinctive communities — the city where Epic Systems, the largest private employer in the state and one of the most consequential health IT companies in the world, chose to build its campus, and where thousands of the state's most accomplished software engineers, clinicians, and executives live and celebrate. The Verona Area School District's academic culture, the Sugar River State Trail's outdoor character, and the tech-corridor residential communities that have grown around the Epic campus form a private hibachi market defined by sophistication, high standards, and the kind of milestone occasions that a world-class employer creates regularly.`,
    middle:   () => `Our private hibachi chef service has a natural relationship with the Verona corporate and residential community. Epic Systems team appreciation dinners for groups of twenty to fifty where the occasion marks a software release, a team milestone, or a personal achievement worth honoring. Verona Area High School graduation parties where multiple generations gather to mark a student's next chapter. Anniversary and birthday celebrations at properties in the Oak Park corridor where the setting already conveys something about the people celebrating. We travel to your Verona property with full equipment, premium proteins, and the teppanyaki performance skills that transform your backyard into a dining destination.`,
    closing:  () => `Verona is one of our fastest-growing Wisconsin markets — driven by Epic Systems' continued expansion, Verona Area School District's graduation season, and a residential community of professionals who have found that private hibachi matches their standards for home entertaining. Tech corridor milestone events and May graduation Saturdays book quickly. Secure your Verona date early.`,
  },
  // 8 — Waunakee (index 456)
  {
    headline: () => `Waunakee Hibachi at Home — Dane County's Premier Suburb Private Chef Experience`,
    opening:  () => `Waunakee, Wisconsin holds a special distinction — as the only Waunakee in the world, it carries its identity with the quiet confidence of a community that knows exactly what it is. Situated north of Madison on the Dane County agricultural prairie, it has grown into one of Wisconsin's most sought-after residential communities: a school district of consistent excellence, a growing professional population of Madison-commuting executives and tech-corridor families, prairie subdivision estate properties, and a community culture where home entertaining is taken seriously. When Waunakee gathers, it does so with the warmth of a small town and the ambitions of a suburb that has deliberately chosen to stay connected to its roots.`,
    middle:   () => `Our private hibachi chef service travels to Waunakee with everything needed to create a full teppanyaki evening at your property. Waunakee High School graduation dinners where extended family members have traveled from across the Midwest to celebrate together. Birthday celebrations at prairie subdivision properties where the guest list spans multiple generations and the host wants to create an evening worth the journey. Corporate team events for Madison-commuting professionals who want to entertain colleagues in Waunakee without driving everyone back into the city. Anniversary dinners where the setting of a Waunakee estate property deserves an occasion that matches it. Our chef arrives, sets up on your patio or lawn, and handles the full teppanyaki experience from first flame to final plate and cleanup.`,
    closing:  () => `Waunakee graduation season and summer backyard celebrations together create our strongest Dane County north-corridor demand. Waunakee High School graduation Saturdays in May and June book 4–6 weeks ahead. Summer anniversary, birthday, and neighborhood gathering dates fill quickly across the full Dane County market. Reserve your Waunakee event date now.`,
  },
  // 9 — Delafield (index 457)
  {
    headline: () => `Delafield Hibachi at Home — Kettle Moraine Lake Country Estate Private Chef`,
    opening:  () => `Delafield, Wisconsin is the jewel of Waukesha County's Lake Country — a community where the kettle moraine landscape, Nagawicka Lake's blue expanse, the Delafield Inn's colonial character, and a residential culture built by Milwaukee's most established families combine to create one of the most consistently beautiful private entertaining environments in all of Wisconsin. The Summit-Nashotah School District, the lakefront estate properties along Nagawicka and Pewaukee Lakes, and the Kettle Moraine State Forest's dramatic backdrop make Delafield the kind of community where home entertaining is elevated by the setting before the host has done anything at all.`,
    middle:   () => `Our private hibachi chef service is precisely the right format for the Delafield hosting tradition. Nagawicka Lake estate graduation dinners where forty family members gather on a stone terrace and the lake is visible from every seat. Anniversary celebrations at a lakefront property where twenty-five guests already feel the occasion before the chef arrives. Wedding weekend rehearsal dinners where visitors from across the country experience the Delafield setting for the first time. Corporate executive dinners where the host wants to impress visiting leadership in an environment that no Milwaukee restaurant can replicate. We travel to your Delafield property with full self-contained equipment, premium proteins, and the performance skills to match the setting.`,
    closing:  () => `Lake Country graduation season and summer estate events are the core of our Delafield calendar. Nagawicka Lake graduations and Delafield wedding season rehearsal dinners book 6–8 weeks ahead in peak season. Reserve your Delafield date early — the properties that suit private hibachi perfectly are booked by hosts who plan ahead.`,
  },
  // 10 — Oconomowoc (index 458)
  {
    headline: () => `Oconomowoc Backyard Hibachi — Lac La Belle, Fowler Lake & Lake Country Estate Experience`,
    opening:  () => `Oconomowoc, Wisconsin is Lake Country's most celebrated small city — a community where Lac La Belle, Fowler Lake, Oconomowoc Lake, and the Ziegler Art Museum's cultural presence combine with a historic downtown, the Ingleside Hotel's regional event reputation, and one of the most distinguished collections of lakefront estate properties in the upper Midwest. Families who have summered at Oconomowoc Lake for three generations, executives who chose its lakefront estates over Milwaukee's suburbs for reasons of setting as much as size, and a school district community that celebrates with the warmth of a lake town and the expectations of a prosperous suburb together make Oconomowoc one of Wisconsin's most active private hibachi markets.`,
    middle:   () => `Our private hibachi chef service was designed for exactly the Oconomowoc occasion. Lakefront estate dinner parties where forty guests gather on a terrace above Lac La Belle and the setting already does the work. Wedding weekend rehearsal dinners at Ingleside Hotel-adjacent properties where guests have come from nine states and the host wants to create the weekend's defining evening. Graduation celebrations where the graduate has grown up on the water and the dinner should honor that. Anniversary milestones at Oconomowoc Lake properties where the home itself tells the story of the occasion. We travel fully equipped, handle every detail, and leave the property in the condition your lake home deserves.`,
    closing:  () => `Oconomowoc summer event season and Lake Country wedding calendar together create our most competitive Waukesha County booking period. Lac La Belle and Oconomowoc Lake graduation dates and rehearsal dinner weekends fill 6–8 weeks ahead. Reserve your Oconomowoc date as soon as your occasion is confirmed — this is one of Wisconsin's most in-demand private hibachi markets.`,
  },
  // 11 — Lake Geneva (index 459)
  {
    headline: () => `Lake Geneva Mobile Hibachi Chef — Geneva Lake, Grand Geneva & Vacation Rental Group Dinners`,
    opening:  () => `Lake Geneva, Wisconsin occupies a singular place in the American vacation imagination — a Geneva Lake shore town with a century-old tradition of Chicago luxury escapes, Victorian-era estate properties accessible by the celebrated Shore Path, the Grand Geneva Resort's four-season hospitality, the Abbey Resort's lakefront elegance, and a bachelorette-and-bachelor weekend market that has made it one of the most photographed vacation destinations in the upper Midwest. The Riviera Beach, Williams Bay's quiet sophistication, Fontana-on-Geneva-Lake's family resort character, and the growing vacation rental inventory on and around Geneva Lake together create a private hibachi market defined by celebration, group energy, and the search for the dinner that makes the trip.`,
    middle:   () => `Our mobile hibachi chef service has found its most natural home in the Lake Geneva vacation rental experience. A Saturday bachelorette dinner for fourteen on a Shore Path vacation rental deck above the lake. A family reunion weekend where thirty-two guests from four states gather at a Grand Geneva-adjacent vacation home for the dinner that brings all three generations to the same table. A corporate retreat closing dinner at an Elkhorn-area estate property. An anniversary celebration at a Williams Bay lakefront property where the couple has been returning for twenty years. We travel fully equipped to your vacation rental, resort property, or lakefront estate — no gas hookup required, no venue arrangement, no restaurant reservation — just a private teppanyaki chef and your group around one table.`,
    closing:  () => `Lake Geneva summer weekend dates — Memorial Day through Labor Day — are our most limited dates in all of Wisconsin. Bachelorette groups, family reunions, and anniversary weekends book our Lake Geneva calendar 8–10 weeks ahead in peak season. If your vacation rental is confirmed, contact us immediately. Shore Path, Grand Geneva-adjacent, and Williams Bay properties are the settings we work in all summer.`,
  },
  // 12 — Kohler (index 460)
  {
    headline: () => `Kohler Mobile Hibachi Chef — American Club Resort, Whistling Straits & Sheboygan County Estate Dining`,
    opening:  () => `Kohler, Wisconsin is one of the most extraordinary communities in the Midwest — a planned village that grew around the American Standard plumbing empire into a world-class resort destination, home to the American Club's AAA Five Diamond hospitality, the Whistling Straits and Blackwolf Run championship golf corridors, the Kohler Arts Center's cultural programming, and a Sheboygan County shoreline that includes some of the most dramatic Lake Michigan estate properties in Wisconsin. Corporate retreat clients, golf destination visitors, wedding parties, and family milestone travelers all arrive in Kohler expecting an experience that matches the setting — and the private hibachi dinner is increasingly the evening that delivers it.`,
    middle:   () => `Our mobile hibachi chef service travels to Kohler vacation properties, resort-adjacent estates, and corporate retreat venues with a fully self-contained setup — propane grill, premium proteins, all ingredients, and the performance skills that create the evening centerpiece. A corporate leadership retreat closing dinner for twenty-four executives at a Whistling Straits-adjacent vacation property. A birthday weekend group dinner at an American Club-area estate for eighteen guests who came from three time zones. A wedding rehearsal dinner at a Sheboygan County lakefront property where the family has gathered from across the country for the occasion. We handle every detail and pack out completely — your property stays in the condition Kohler properties deserve.`,
    closing:  () => `Kohler corporate retreat season, summer estate event weekends, and Whistling Straits golf destination calendar together make advance booking essential. Corporate retreat closing dinners and family milestone weekend events book 6–8 weeks ahead. If you have a Kohler property event on your calendar, reserve your chef date as soon as your group is confirmed.`,
  },
  // 13 — Green Bay (index 461)
  {
    headline: () => `Green Bay Hibachi at Home — Lambeau Field, Titletown District & Brown County Private Chef`,
    opening:  () => `Green Bay, Wisconsin is unlike any other American city of its size — the smallest market in professional sports and the home of the Green Bay Packers, an organization that belongs to the community in the most literal sense and defines the city's identity, its calendar, and its collective pride in ways that residents from other cities can observe but never fully replicate. The Titletown District's development has brought new energy to a city that already knew how to celebrate; the Packers Heritage Trail connects the franchise to the community's memory; and a Brown County professional community that includes ThedaCare, Schneider National, and Bellin Health means that Green Bay entertains with both the warmth of a Packers city and the sophistication of a growing regional economy.`,
    middle:   () => `Our private hibachi chef service is a natural complement to the Green Bay entertainment calendar. Corporate team appreciation dinners in the Titletown District corridor for thirty-eight colleagues after a major quarter. Packers-season entertaining at a De Pere home where twenty guests gather around a backyard fire table and a hibachi chef changes the evening's format entirely. UWGB and St. Norbert College graduation dinners where extended family members who've traveled from across the Midwest find the best meal of the weekend at their host's own table. Ashwaubenon neighborhood anniversary celebrations where the guest list is forty years in the making. We travel to your Green Bay location with full equipment, premium proteins, and the teppanyaki performance that makes the evening the one everyone talks about.`,
    closing:  () => `Green Bay graduation season and Packers-influenced corporate entertainment together fill our Northeast Wisconsin calendar earlier than any other market. Brown County graduation Saturdays in May and June book 4–6 weeks ahead. Corporate milestone events and holiday team dinners fill October through December. Reserve your Green Bay date early — this is a market that plans ahead.`,
  },
  // 14 — Appleton (index 462)
  {
    headline: () => `Appleton Hibachi Catering — Fox Valley, Lawrence University & Outagamie County Private Chef`,
    opening:  () => `Appleton, Wisconsin is the Fox Valley's most vibrant city — home to Lawrence University's small-college academic tradition, the Fox Cities Performing Arts Center's cultural programming, the thriving Fox River Mile entertainment corridor, ThedaCare's regional healthcare presence, and a professional community that includes some of the most dynamic small and mid-size businesses in the upper Midwest. The Fox River's industrial heritage has been transformed into a riverfront park system; Appleton's neighborhood character runs from College Avenue's downtown energy to the North and East Side residential corridors where Fox Valley professionals have built the homes and community where they celebrate.`,
    middle:   () => `Our private hibachi chef service covers all of Appleton and the greater Fox Valley. Lawrence University graduation dinners where thirty guests from six states gather around an Appleton home patio for the Commencement weekend meal that no restaurant could have accommodated. Outagamie County corporate holiday events for thirty-eight colleagues who want something genuinely different from the standard banquet hall format. ThedaCare milestone celebrations for healthcare professionals who mark career achievements the way they deserve. Fox River Mile-adjacent corporate team dinners where the evening creates a shared experience that outlasts the occasion. We travel fully equipped to your Appleton location and handle every detail.`,
    closing:  () => `Lawrence University graduation season, Fox Valley corporate holiday events, and Appleton neighborhood summer celebrations together fill our calendar from May through December. Lawrence Commencement dates and Fox Valley graduation Saturdays book 4–6 weeks ahead. Corporate holiday events from October forward fill quickly. Secure your Appleton event date now.`,
  },
  // 15 — Neenah (index 463)
  {
    headline: () => `Neenah Hibachi at Home — Lake Winnebago Estates, Fox Valley & Winnebago County Private Chef`,
    opening:  () => `Neenah, Wisconsin sits on the western shore of Lake Winnebago with a grace that reflects its history as one of Wisconsin's most prosperous paper industry cities and its present as a Fox Valley residential community where lakefront estate properties, a Bergstrom-connected civic tradition, and a professional community built by Plexus Corp, Menasha Corporation, and regional healthcare employers create a private entertaining culture of quiet sophistication. Lake Winnebago's blue expanse visible from estate terraces, the Fox River connecting Neenah to the broader Fox Valley, and a residential community of homeowners who have invested significantly in the spaces where they gather together form one of Wisconsin's most distinctive private hibachi markets.`,
    middle:   () => `Our private hibachi chef service travels to Neenah with full equipment, premium proteins, and the teppanyaki performance skills that transform a Lake Winnebago lakefront terrace into the finest private dining venue in the Fox Valley. Graduation dinners where the Lake Winnebago view provides the backdrop and forty family members provide the occasion. Anniversary celebrations at lakefront properties where a couple has spent their most important years building a home worth celebrating in. Birthday milestones at Neenah estates where the setting already communicates something about the people gathering. Corporate team events for Plexus Corporation and Menasha executives who want to entertain colleagues in a setting no Fox Valley restaurant can replicate. We handle every detail from setup to cleanup.`,
    closing:  () => `Neenah Lake Winnebago estate events and Fox Valley graduation season together create our strongest Winnebago County booking demand. Lakefront graduation parties and anniversary dinners at established estate properties book 4–6 weeks ahead in peak summer season. Secure your Neenah date now — Lake Winnebago lakefront dates are our most requested in the Fox Valley corridor.`,
  },
  // 16 — Sturgeon Bay (index 464)
  {
    headline: () => `Sturgeon Bay Mobile Hibachi Chef — Door County Cabin Weekends, Fish Creek & Peninsula State Park`,
    opening:  () => `Sturgeon Bay and Door County, Wisconsin occupy a special place in the Midwestern imagination — a peninsula jutting into Lake Michigan and Green Bay with cherry orchards, limestone bluffs, harbor towns that feel like New England, and a vacation rental and cabin tradition that draws visitors from Chicago, Milwaukee, Minneapolis, and beyond for weekends defined by water, wine, and the kind of outdoor beauty that the upper Midwest saves for its finest places. Fish Creek's gallery-lined streets, Sister Bay's Swedish heritage, Egg Harbor's harbor view, Ephraim's historic whitewashed character, Peninsula State Park's 3,700 wooded acres, and the working maritime identity of Sturgeon Bay's shipyard community combine to make Door County one of America's most beloved vacation destinations.`,
    middle:   () => `Our mobile hibachi chef service travels to Door County vacation rentals, cabin properties, and lakefront estates with a fully self-contained setup — propane grill, premium proteins, all ingredients, and the teppanyaki performance that becomes the weekend's defining evening. A bachelorette Saturday dinner at a Fish Creek vacation rental for fourteen guests who came for the scenery and stayed for the private chef. A family reunion weekend at a Sturgeon Bay harbor-adjacent property where twenty-eight guests from eight states gather around one table. A corporate retreat closing dinner at a Sister Bay-area cabin where the executives who've spent two days strategizing find the common ground that comes from a shared meal. A Door County anniversary trip where the couple has been returning for fifteen years and this year the dinner was different. We travel fully equipped and pack out completely.`,
    closing:  () => `Door County summer weekend dates fill faster than any other destination market in Wisconsin. Memorial Day, Fourth of July, and August weekends are booked months ahead. Fish Creek and Sister Bay vacation rental dinners book 8–10 weeks ahead in peak season. If your Door County rental is confirmed, contact us as soon as possible — the further in advance you reach out, the more likely we can serve your date.`,
  },
]

// ─── Batch 1 City-Specific Closings (indices 448–452) ─────────────────────────
export const WI_CITY_CLOSINGS = [
  // 0 — Milwaukee
  { headline: () => 'Book Your Milwaukee Private Hibachi Chef Today', sub: () => 'Serving Milwaukee, Wauwatosa, Mequon, Whitefish Bay, Brookfield, Shorewood, and all Milwaukee metro communities.', urgency: 'Milwaukee graduation season and Summerfest-adjacent summer dates fill fast — reserve early.' },
  // 1 — Mequon
  { headline: () => 'Reserve Your Mequon Private Hibachi Experience', sub: () => 'Serving Mequon, Whitefish Bay, Milwaukee, Thiensville, Port Washington, and the full Ozaukee County North Shore corridor.', urgency: 'Mequon graduation season and estate event dates book weeks ahead — secure your date now.' },
  // 2 — Brookfield
  { headline: () => 'Book Hibachi Catering for Your Brookfield Event', sub: () => 'Serving Brookfield, Wauwatosa, Milwaukee, Elm Grove, Pewaukee, and all Waukesha County communities.', urgency: 'Brookfield corporate holiday season and Elmbrook graduation dates book fast — reserve now.' },
  // 3 — Wauwatosa
  { headline: () => 'Reserve Your Wauwatosa Private Hibachi Event', sub: () => 'Serving Wauwatosa, Milwaukee, Brookfield, Whitefish Bay, Mequon, and all Milwaukee metro communities.', urgency: 'Wauwatosa summer backyard and Medical College milestone dates fill quickly — secure your date now.' },
  // 4 — Whitefish Bay
  { headline: () => 'Book Your Whitefish Bay Private Hibachi Chef', sub: () => 'Serving Whitefish Bay, Mequon, Shorewood, Milwaukee, Fox Point, and the full Milwaukee North Shore corridor.', urgency: 'Whitefish Bay graduation season and estate event dates are our most limited — reserve early.' },
  // 5 — Madison
  { headline: () => 'Book Your Madison Private Hibachi Event', sub: () => 'Serving Madison, Middleton, Verona, Waunakee, Sun Prairie, Fitchburg, and all Dane County communities.', urgency: 'UW-Madison graduation season (May) is our most limited period in Dane County — book 6–8 weeks ahead.' },
  // 6 — Middleton
  { headline: () => 'Reserve Your Middleton Private Hibachi Event', sub: () => 'Serving Middleton, Madison, Waunakee, Verona, Cross Plains, and all Dane County communities.', urgency: 'Middleton High School graduation season and Epic milestone dates fill fast — reserve early.' },
  // 7 — Verona
  { headline: () => 'Book Your Verona Private Hibachi Experience', sub: () => 'Serving Verona, Madison, Middleton, Fitchburg, Belleville, and all Dane County communities.', urgency: 'Verona Area graduation season and Epic Systems milestone dates fill weeks ahead — reserve now.' },
  // 8 — Waunakee
  { headline: () => 'Reserve Your Waunakee Private Hibachi Event', sub: () => 'Serving Waunakee, Madison, Middleton, DeForest, Sun Prairie, and all Dane County north-corridor communities.', urgency: 'Waunakee High School graduation Saturdays and summer backyard dates fill quickly — secure your date now.' },
  // 9 — Delafield
  { headline: () => 'Book Your Delafield Lake Country Hibachi Event', sub: () => 'Serving Delafield, Oconomowoc, Pewaukee, Hartland, Nashotah, and all Waukesha County Lake Country communities.', urgency: 'Nagawicka Lake estate and Delafield wedding rehearsal dinner dates book 6–8 weeks ahead — reserve early.' },
  // 10 — Oconomowoc
  { headline: () => 'Reserve Your Oconomowoc Lake Country Hibachi Event', sub: () => 'Serving Oconomowoc, Delafield, Pewaukee, Wales, Hartland, and all Waukesha County Lake Country communities.', urgency: 'Oconomowoc summer event season and Lake Country rehearsal dinners fill fast — reserve your date now.' },
  // 11 — Lake Geneva
  { headline: () => 'Book Your Lake Geneva Mobile Hibachi Chef', sub: () => 'Serving Lake Geneva, Williams Bay, Fontana-on-Geneva-Lake, Delavan, Elkhorn, and all Walworth County vacation properties.', urgency: 'Lake Geneva summer weekend dates — Memorial Day through Labor Day — fill 8–10 weeks ahead. Book immediately once your rental is confirmed.' },
  // 12 — Kohler
  { headline: () => 'Reserve Your Kohler Private Hibachi Event', sub: () => 'Serving Kohler, Sheboygan, Plymouth, Elkhart Lake, and all Sheboygan County resort and estate properties.', urgency: 'Kohler corporate retreat season and summer estate event dates fill weeks ahead — reserve as soon as your group is confirmed.' },
  // 13 — Green Bay
  { headline: () => 'Book Your Green Bay Private Hibachi Event', sub: () => 'Serving Green Bay, De Pere, Ashwaubenon, Howard, Allouez, and all Brown County communities.', urgency: 'Brown County graduation season and Packers-adjacent corporate dates fill weeks ahead — reserve early.' },
  // 14 — Appleton
  { headline: () => 'Reserve Your Appleton Private Hibachi Event', sub: () => 'Serving Appleton, Neenah, Menasha, Grand Chute, Kaukauna, and all Outagamie and Calumet County communities.', urgency: 'Lawrence University graduation season and Fox Valley corporate holiday dates fill 4–6 weeks ahead — reserve now.' },
  // 15 — Neenah
  { headline: () => 'Book Your Neenah Lake Winnebago Hibachi Event', sub: () => 'Serving Neenah, Appleton, Menasha, Oshkosh, Green Bay, and all Winnebago and Calumet County communities.', urgency: 'Neenah Lake Winnebago estate dates and Fox Valley graduation season fill fast — secure your date early.' },
  // 16 — Sturgeon Bay
  { headline: () => 'Book Your Door County Mobile Hibachi Chef', sub: () => 'Serving Sturgeon Bay, Fish Creek, Sister Bay, Egg Harbor, Ephraim, Ellison Bay, and all Door County vacation properties.', urgency: 'Door County summer weekends fill months ahead. If your rental is confirmed, contact us now — we cannot guarantee availability for last-minute requests.' },
]

// ─── Generic Intro Variants (indices 442–447) ─────────────────────────────────
export const WI_INTRO_VARIANTS = [
  // 442 — T0 Milwaukee North Shore Luxury
  {
    headline: (city) => `Private Hibachi Chef Service in ${city}, Wisconsin`,
    opening:  (city) => `The Milwaukee North Shore is Wisconsin's most prestigious residential corridor, and ${city} sits at the heart of its Lake Michigan luxury community. When you're ready to host an event that matches the character of your setting, our private hibachi chef service delivers a restaurant-quality teppanyaki experience directly to your home.`,
    middle:   (city) => `Our chef arrives at your ${city} property with all equipment, premium proteins, and the showmanship to turn your backyard, patio, or estate into a private dining stage. From Lake Michigan shoreline graduation parties to Ozaukee County executive anniversary dinners, we handle every detail from setup to cleanup.`,
    closing:  (city) => `Hosting on the North Shore means setting a high bar. Our private hibachi chefs are experienced serving discerning guests in premium settings — bringing culinary excellence and live entertainment to every event we take on in ${city} and surrounding lakefront communities.`,
  },
  // 443 — T1 Milwaukee Metro & Corporate
  {
    headline: (city) => `Private Hibachi Chef in ${city} — We Come to You`,
    opening:  (city) => `Milwaukee and its surrounding communities have one of the most vibrant and diverse private entertaining cultures in the Midwest. In ${city}, that means hosts who expect a premium experience — and our private hibachi chef service was built to deliver one. We come to your location, fully equipped, and handle every detail.`,
    middle:   (city) => `Whether you're hosting in an urban Milwaukee neighborhood, a suburban backyard, or a corporate event space, our chef brings the full teppanyaki performance to your table. Premium proteins, interactive cooking, knife skills, and flame tricks — the complete experience, designed specifically for your group in ${city}.`,
    closing:  (city) => `Milwaukee-area hosts who've experienced private hibachi consistently say it's the best format they've found for entertaining any size group. The chef does the work, the food is exceptional, and the evening creates memories that outlast any restaurant experience. Book your ${city} event today.`,
  },
  // 444 — T2 Madison & Tech Corridor
  {
    headline: (city) => `Private Hibachi at Home in ${city}, Wisconsin`,
    opening:  (city) => `The Madison metro corridor is one of Wisconsin's most sophisticated hosting communities — and ${city} is a perfect example of that blend of academic excellence, tech-corridor energy, and home-entertaining pride. When a restaurant reservation isn't the right format for your occasion, our private hibachi chef brings the entire dining experience to your backyard.`,
    middle:   (city) => `Our chef arrives at your ${city} home with a self-contained propane teppan grill, hand-selected proteins, all ingredients, and the performance skills to create a memorable live-cooking experience for your guests. UW-Madison graduation parties, Epic Systems milestone dinners, birthday celebrations, neighborhood gatherings — we serve every Madison occasion.`,
    closing:  (city) => `${city} hosts who've tried private hibachi tell us the same thing: it's the most effortless entertaining format they've found. We handle the food, the cooking, the performance, and the cleanup. You just gather your guests and enjoy the evening.`,
  },
  // 445 — T3 Lake Country
  {
    headline: (city) => `Private Hibachi at Home in ${city} — Lake Country Private Chef Experience`,
    opening:  (city) => `Waukesha County's Lake Country has long been one of Wisconsin's most beloved private entertaining landscapes — and ${city} sits at the heart of it. When the occasion calls for something more than a restaurant reservation, our private hibachi chef service brings the full teppanyaki experience to your lakefront estate or vacation property.`,
    middle:   (city) => `Our chef arrives at your ${city} property with a fully self-contained setup — propane grill, premium proteins, all ingredients, and the complete teppanyaki performance. Lakefront birthday parties, anniversary estate dinners, wedding weekend rehearsal dinners, and summer reunion gatherings are all within our range.`,
    closing:  (city) => `Lake Country hosts who've experienced private hibachi consistently say it's the format they'd been looking for — one that matches the setting they've built and the occasions that bring people to the lake. We bring the chef; you bring the people.`,
  },
  // 446 — T4 Destinations & Resorts
  {
    headline: (city) => `Mobile Hibachi Chef in ${city} — Wisconsin Destination Experience`,
    opening:  (city) => `Wisconsin's destination and resort communities draw visitors for reasons as distinct as Lake Geneva's century-old vacation tradition and Kohler's world-class resort culture — and ${city} is one of those destinations. Our mobile hibachi chef service turns the vacation rental dinner or resort-adjacent property event into the highlight of your trip.`,
    middle:   (city) => `Our chef travels to your ${city} vacation rental or destination property with a fully self-contained propane teppan grill — no gas hookup needed. We handle setup, cook the full teppanyaki menu for your group, and pack out completely when dinner is done.`,
    closing:  (city) => `Destination groups who've booked a private hibachi chef in ${city} consistently rate the dinner as the best memory of the trip. The performance, the shared table, and the premium food create the kind of experience that becomes a group reference point for years. Book before your dates fill.`,
  },
  // 447 — T5 Northeast Wisconsin
  {
    headline: (city) => `Private Hibachi Chef Service in ${city}, Wisconsin`,
    opening:  (city) => `Northeast Wisconsin has a proud tradition of community and family entertaining — and ${city} is a vibrant part of that culture. Whether it's the Fox Valley's community events, Green Bay's Packers-influenced corporate calendar, or the Lake Winnebago corridor's waterfront entertaining, our private hibachi chef service brings the full teppanyaki experience to your location.`,
    middle:   (city) => `Our chef arrives at your ${city} property with a self-contained propane setup, premium proteins, all ingredients, and the performance skills to create a restaurant-quality teppanyaki experience for your group. Family graduations, corporate team events, anniversary dinners, and backyard celebrations all are served.`,
    closing:  (city) => `Northeast Wisconsin hosts who've experienced private hibachi tell us it's the format that brought their gathering together — everyone at the same table, watching the same performance, eating the same exceptional meal. We handle everything — you focus on the people and the occasion.`,
  },
]

// ─── Generic Closing Variants (indices 442–447) ───────────────────────────────
export const WI_CLOSING_VARIANTS = [
  // 442 — T0 Milwaukee North Shore Luxury
  { headline: (city) => `Book Your ${city} Private Hibachi Experience Today`, sub: (city) => `Serving ${city} and the full Milwaukee North Shore — Mequon, Whitefish Bay, Fox Point, Shorewood, and all Ozaukee and Milwaukee County lakefront communities.`, urgency: 'North Shore graduation season and estate event dates fill weeks ahead. Reserve your date now.' },
  // 443 — T1 Milwaukee Metro & Corporate
  { headline: (city) => `Reserve Your Milwaukee-Area Hibachi Event`,          sub: (city) => `Serving ${city} and all of Greater Milwaukee — every neighborhood, every suburb, and every occasion.`,                                                             urgency: 'Milwaukee graduation season and summer event dates book quickly. Reserve early.' },
  // 444 — T2 Madison & Tech Corridor
  { headline: (city) => `Book Your ${city} Private Hibachi Event`,            sub: (city) => `Serving ${city} and all Madison-area communities — Middleton, Verona, Waunakee, Sun Prairie, Fitchburg, and surrounding Dane County.`,                               urgency: 'UW-Madison graduation season dates fill 6–8 weeks ahead. Secure your date now.' },
  // 445 — T3 Lake Country
  { headline: (city) => `Reserve Your Lake Country Hibachi Event`,            sub: (city) => `Serving ${city} and all of Lake Country — Delafield, Oconomowoc, Pewaukee, Hartland, and all Waukesha County lake communities.`,                                     urgency: 'Lake Country summer events and wedding season rehearsal dinners book weeks ahead. Reserve now.' },
  // 446 — T4 Destinations & Resorts
  { headline: (city) => `Book Your ${city} Mobile Hibachi Chef`,              sub: (city) => `Serving ${city} and all Wisconsin destination communities — Lake Geneva, Williams Bay, Kohler, and vacation rental properties throughout the region.`,                 urgency: 'Wisconsin summer destination weekends fill our calendar fast. Reserve your date as soon as your rental is confirmed.' },
  // 447 — T5 Northeast Wisconsin
  { headline: (city) => `Reserve Your ${city} Area Hibachi Event`,            sub: (city) => `Serving ${city} and all of Northeast Wisconsin — Green Bay, Appleton, Neenah, De Pere, Oshkosh, and all Fox Valley and Brown County communities.`,                    urgency: 'Fox Valley graduation season and Packers-season event dates book ahead. Reserve early.' },
]

// ─── Blog Post Slots (3 slots, v%3 dispatch) ──────────────────────────────────
// Slot 0: T0 North Shore (v=0) + T3 Lake Country (v=3)
// Slot 1: T1 Milwaukee Metro (v=1) + T4 Destinations (v=4)
// Slot 2: T2 Madison (v=2) + T5 Northeast WI (v=5)
const WI_BLOG_POSTS = [
  [
    { slug: 'hibachi-at-home-wisconsin-guide',           title: 'Private Hibachi Chef in Wisconsin: The Complete Guide to All Six Markets',             excerpt: 'From Milwaukee North Shore estates to Lake Geneva vacation rentals and Door County cabin weekends — how private hibachi works across all six Wisconsin markets.',  date: '2026-07-27' },
    { slug: 'private-hibachi-lake-geneva-vacation-rental', title: 'Private Hibachi at a Lake Geneva Vacation Rental: Your Weekend Getaway Guide',      excerpt: 'Geneva Lake bachelorette weekends, family reunion cabin dinners, and resort-adjacent group events — how a mobile hibachi chef works at any Lake Geneva property.', date: '2026-07-27' },
    { slug: 'hibachi-catering-corporate-events',         title: 'Why Hibachi Catering Is the Best Choice for Corporate Events',                         excerpt: 'Milwaukee and Waukesha County corporate teams — why a private hibachi chef beats every company dinner format.',                                               date: '2025-03-15' },
  ],
  [
    { slug: 'hibachi-at-home-wisconsin-guide',           title: 'Private Hibachi Chef in Wisconsin: The Complete Guide to All Six Markets',             excerpt: 'From Milwaukee metro events to Lake Geneva destination weekends and Madison graduation season — how private hibachi works across Wisconsin.',                   date: '2026-07-27' },
    { slug: 'private-hibachi-lake-geneva-vacation-rental', title: 'Private Hibachi at a Lake Geneva Vacation Rental: Your Weekend Getaway Guide',      excerpt: 'Bachelorette weekends, family reunions, and corporate retreats at Geneva Lake vacation rentals — how a mobile hibachi chef works at any property.',            date: '2026-07-27' },
    { slug: 'hibachi-bachelorette-party',                title: 'Private Hibachi for Bachelorette Parties: The Ultimate Guide',                         excerpt: 'Why Lake Geneva and Door County cabin weekends are choosing private hibachi as the Saturday night dinner — and how to book for any vacation rental.',           date: '2025-02-10' },
  ],
  [
    { slug: 'hibachi-at-home-wisconsin-guide',           title: 'Private Hibachi Chef in Wisconsin: The Complete Guide to All Six Markets',             excerpt: 'From Madison graduation dinners to Whitefish Bay estate events and Fox Valley family celebrations — how private hibachi works across Wisconsin.',               date: '2026-07-27' },
    { slug: 'private-hibachi-uw-madison-graduation-party', title: 'Private Hibachi Chef for a UW-Madison Graduation Party: Planning Your Celebration', excerpt: 'UW-Madison commencement weekend, Epic Systems milestone dinners, and Madison-area graduation season — how private hibachi solves the restaurant reservation problem.', date: '2026-07-27' },
    { slug: 'private-hibachi-lake-geneva-vacation-rental', title: 'Private Hibachi at a Lake Geneva Vacation Rental: Your Weekend Getaway Guide',      excerpt: 'Geneva Lake vacation rental weekends, Door County cabin getaways, and Wisconsin destination events — how a mobile hibachi chef works at any property.',         date: '2026-07-27' },
  ],
]

// ─── Exported Functions ───────────────────────────────────────────────────────
export function getWiCityData(citySlug, cityName) {
  const major = WI_MAJOR_CITIES[citySlug]
  if (!major) return null

  const { v, profileIdx, nearby } = major
  const displayName    = WI_CITY_DISPLAY_NAMES[citySlug] ?? cityName
  const heroH1Prefix   = profileIdx != null ? WI_PROFILE_H1_PREFIXES[profileIdx] : WI_THEME_H1_PREFIXES[v]

  const uniqueIntroVariant   = profileIdx != null ? 448 + profileIdx : 442 + v
  const uniqueClosingVariant = profileIdx != null ? 448 + profileIdx : 442 + v
  const uniqueWhyUsVariant   = 442 + v

  const heroSubtitle      = WI_HERO_SUBTITLES[citySlug] ?? `${heroH1Prefix} ${displayName}, WI — private hibachi chef for all occasions.`
  const localHighlights   = WI_LOCAL_HIGHLIGHTS[citySlug] ?? []
  const featuredOccasions = WI_FEATURED_OCCASIONS[citySlug] ?? WI_OCCASIONS_LUXURY
  const faqSet            = WI_FAQ_SETS[citySlug] ?? WI_FAQ_NORTH_SHORE
  const testimonials      = _getWiTestimonials(citySlug)
  const nearbyCities      = nearby ?? WI_NEARBY_MAJOR[v]
  const metaOverride      = WI_META_OVERRIDES[citySlug] ?? {}

  return {
    cityName: displayName,
    stateName: 'Wisconsin',
    stateAbbr: 'WI',
    stateSlug: 'wisconsin',
    variant: v % 3,
    heroImage: WI_IMAGE_THEMES[v],
    heroSubtitle,
    nearbyCities,
    nearbyMajorCities: WI_NEARBY_MAJOR[v],
    localHighlights,
    featuredOccasions,
    faqSet,
    testimonials,
    uniqueIntroVariant,
    uniqueWhyUsVariant,
    uniqueClosingVariant,
    heroH1Prefix,
    ...metaOverride,
  }
}

export function getWiBlogPosts(variant, count) {
  return WI_BLOG_POSTS[variant % WI_BLOG_POSTS.length].slice(0, count)
}
export function getWiHowItWorks()             { return WI_HOW_IT_WORKS }
export function getWiSectionVariant(citySlug) {
  const v = WI_MAJOR_CITIES[citySlug]?.v ?? 0
  return WI_SECTION_VARIANTS[v]
}
export function getWiCityImage(citySlug)      { return WI_CITY_IMAGE_MAP[citySlug] ?? null }
export function getWiSupportImages(citySlug)  {
  if (WI_CITY_SUPPORT_IMAGES[citySlug]) return WI_CITY_SUPPORT_IMAGES[citySlug]
  const v = WI_MAJOR_CITIES[citySlug]?.v ?? 0
  return WI_SUPPORT_FALLBACKS[v]
}
