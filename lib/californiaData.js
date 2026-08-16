// ─── California Data ──────────────────────────────────────────────────────────
// 32 cities · 6 themes · indices 582-619
// Generic: 582-587 | City-specific: 588-619
// Batch 1: Beverly Hills, Malibu, Santa Monica, Calabasas, Manhattan Beach, Pasadena (588-593)
// Batch 2: Newport Beach, Laguna Beach, Irvine, Huntington Beach, Dana Point (594-598)
// Batch 3: La Jolla, Coronado, Del Mar, Rancho Santa Fe, Carlsbad (599-603)
// Batch 4: Atherton, Palo Alto, Los Gatos, San Francisco, San Jose (604-608)
// Batch 5: Napa, Healdsburg, Sonoma, Folsom, Granite Bay (609-613)
// Batch 6: Santa Barbara, San Luis Obispo, Palm Springs, Palm Desert, South Lake Tahoe, Truckee (614-619)

// ─── Theme Heroes ──────────────────────────────────────────────────────────────
const CA_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0 — Ultra-Luxury Estate
  '/pics/hero-2.jpg',                  // T1 — Coastal Premier
  '/pics/hibachi-pool-party.jpg',      // T2 — Beach/Vacation Weekend
  '/pics/hibachi-event.jpg',           // T3 — Tech/Corporate
  '/pics/hibachi-at-home.jpg',         // T4 — Wine Country/Destination
  '/pics/hibachi-catering-2.jpg',      // T5 — Premium Suburb/Mixed
]

// ─── Theme H1 Prefixes (generic fallback) ─────────────────────────────────────
const CA_THEME_H1_PREFIXES = [
  'Private Hibachi Chef in',  // T0
  'Hibachi at Home in',       // T1
  'Mobile Hibachi in',        // T2
  'Hibachi Catering in',      // T3
  'Hibachi at Home in',       // T4
  'Hibachi Catering in',      // T5
]

// ─── Profile H1 Prefixes (city-specific, 32 entries) ──────────────────────────
const CA_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',  // 0  — Beverly Hills
  'Hibachi at Home in',       // 1  — Malibu
  'Mobile Hibachi in',        // 2  — Santa Monica
  'Private Hibachi Chef in',  // 3  — Calabasas
  'Hibachi at Home in',       // 4  — Manhattan Beach
  'Backyard Hibachi in',      // 5  — Pasadena
  'Hibachi at Home in',       // 6  — Newport Beach
  'Hibachi at Home in',       // 7  — Laguna Beach
  'Hibachi Catering in',      // 8  — Irvine
  'Mobile Hibachi in',        // 9  — Huntington Beach
  'Backyard Hibachi in',      // 10 — Dana Point
  'Private Hibachi Chef in',  // 11 — La Jolla
  'Hibachi at Home in',       // 12 — Coronado
  'Hibachi at Home in',       // 13 — Del Mar
  'Private Hibachi Chef in',  // 14 — Rancho Santa Fe
  'Hibachi Catering in',      // 15 — Carlsbad
  'Private Hibachi Chef in',  // 16 — Atherton
  'Private Hibachi Chef in',  // 17 — Palo Alto
  'Hibachi Catering in',      // 18 — Los Gatos
  'Hibachi Catering in',      // 19 — San Francisco
  'Hibachi Catering in',      // 20 — San Jose
  'Hibachi at Home in',       // 21 — Napa
  'Hibachi at Home in',       // 22 — Healdsburg
  'Hibachi at Home in',       // 23 — Sonoma
  'Hibachi at Home in',       // 24 — Folsom
  'Hibachi at Home in',       // 25 — Granite Bay
  'Hibachi at Home in',       // 26 — Santa Barbara
  'Hibachi at Home in',       // 27 — San Luis Obispo
  'Mobile Hibachi in',        // 28 — Palm Springs
  'Backyard Hibachi in',      // 29 — Palm Desert
  'Mobile Hibachi in',        // 30 — South Lake Tahoe
  'Hibachi at Home in',       // 31 — Truckee
]

// ─── Custom Meta (Batch 1) ─────────────────────────────────────────────────────
const CA_CUSTOM_META = {
  // ── Batch 6 ───────────────────────────────────────────────────────────────────
  'santa-barbara':    { title: 'Hibachi at Home in Santa Barbara, CA | Montecito Estate Dinners, Hope Ranch Luxury Events & Santa Barbara Riviera Coastal Celebrations', desc: 'A private hibachi chef arrives at your Santa Barbara or Montecito property — Montecito estate anniversary dinners, Hope Ranch-area luxury backyard events, and Santa Barbara Riviera coastal celebration parties. From $60/adult.' },
  'san-luis-obispo':  { title: 'Hibachi at Home in San Luis Obispo, CA | SLO Wine Country Estate Dinners, Cal Poly Graduation Events & Edna Valley Backyard Celebrations', desc: 'A private hibachi chef arrives at your San Luis Obispo home or venue — SLO wine country estate anniversary dinners, Cal Poly graduation weekend family events, and Edna Valley backyard celebration parties. From $60/adult.' },
  'palm-springs':     { title: 'Mobile Hibachi in Palm Springs, CA | Palm Springs Vacation Rental Events, Desert Home Parties & Coachella Valley Backyard Celebrations', desc: 'A certified teppanyaki chef travels to your Palm Springs vacation rental or home — desert estate anniversary dinners, vacation rental backyard parties, and Coachella Valley celebration events. From $60/adult.' },
  'palm-desert':      { title: 'Backyard Hibachi in Palm Desert, CA | Palm Desert Estate Dinners, Ironwood Country Club-Area Events & Desert Luxury Backyard Celebrations', desc: 'A private hibachi chef arrives at your Palm Desert home — Ironwood Country Club-area estate anniversary dinners, desert luxury backyard milestone events, and El Paseo corridor celebration parties. From $60/adult.' },
  'south-lake-tahoe': { title: 'Mobile Hibachi in South Lake Tahoe, CA | Lake Tahoe Vacation Rental Parties, Cabin Backyard Events & Sierra Nevada Celebration Dinners', desc: 'A certified teppanyaki chef travels to your South Lake Tahoe vacation rental or cabin — lakefront vacation rental backyard parties, cabin celebration dinners, and Sierra Nevada destination milestone events. From $60/adult.' },
  'truckee':          { title: 'Hibachi at Home in Truckee, CA | Tahoe Donner Estate Dinners, Northstar-Adjacent Vacation Rental Events & Sierra Nevada Backyard Celebrations', desc: 'A private hibachi chef arrives at your Truckee home or vacation rental — Tahoe Donner estate anniversary dinners, Northstar-adjacent vacation rental backyard events, and Sierra Nevada destination celebration parties. From $60/adult.' },
  // ── Batch 5 ───────────────────────────────────────────────────────────────────
  'napa':             { title: 'Hibachi at Home in Napa, CA | Napa Valley Vineyard Estate Dinners, Downtown Napa Luxury Events & Wine Country Vacation Rental Celebrations', desc: 'A private hibachi chef arrives at your Napa Valley property — vineyard estate anniversary dinners, downtown Napa milestone backyard events, and wine country vacation rental celebration parties. From $60/adult.' },
  'healdsburg':       { title: 'Hibachi at Home in Healdsburg, CA | Dry Creek Valley Vineyard Estate Dinners, Healdsburg Plaza Luxury Events & Russian River Wine Country Celebrations', desc: 'A private hibachi chef arrives at your Healdsburg property — Dry Creek Valley vineyard estate anniversary dinners, downtown Healdsburg milestone backyard events, and Sonoma County wine country vacation rental parties. From $60/adult.' },
  'sonoma':           { title: 'Hibachi at Home in Sonoma, CA | Sonoma Plaza Estate Dinners, Carneros Vineyard Luxury Events & Sonoma Valley Wine Country Celebrations', desc: 'A private hibachi chef arrives at your Sonoma property — Sonoma Plaza estate anniversary dinners, Carneros vineyard milestone backyard events, and Sonoma Valley wine country vacation rental celebration parties. From $60/adult.' },
  'folsom':           { title: 'Hibachi at Home in Folsom, CA | Folsom Ranch Estate Dinners, Lakefront Backyard Events & Sacramento Foothill Community Celebrations', desc: 'A certified teppanyaki chef arrives at your Folsom home or venue — Folsom Ranch estate anniversary dinners, Lakefront backyard graduation parties, and foothill community milestone celebration events. From $60/adult.' },
  'granite-bay':      { title: 'Hibachi at Home in Granite Bay, CA | Granite Bay Estates Dinners, Douglas Boulevard Backyard Events & Sacramento Premium Suburb Celebrations', desc: 'A certified teppanyaki chef arrives at your Granite Bay home — Granite Bay Estates anniversary dinners, Douglas Boulevard-area milestone backyard parties, and premium suburb celebration events. From $60/adult.' },
  // ── Batch 4 ───────────────────────────────────────────────────────────────────
  'atherton':         { title: 'Private Hibachi Chef in Atherton, CA | Atherton Estate Dinners, Linfield Oaks Luxury Events & Silicon Valley Estate Celebrations', desc: 'A certified teppanyaki chef arrives at your Atherton estate — Atherton Corridor anniversary dinners, Linfield Oaks milestone luxury events, and estate property celebrations in the most exclusive zip code in California. Premium proteins standard. From $60/adult.' },
  'palo-alto':        { title: 'Private Hibachi Chef in Palo Alto, CA | Old Palo Alto Estate Dinners, Stanford Corridor Luxury Events & Crescent Park Celebrations', desc: 'A certified teppanyaki chef arrives at your Palo Alto estate — Old Palo Alto anniversary estate dinners, Crescent Park-area milestone events, and Stanford corridor estate celebrations. Premium proteins standard. From $60/adult.' },
  'los-gatos':        { title: 'Hibachi Catering in Los Gatos, CA | Los Gatos Village Estate Dinners, Silicon Valley Luxury Events & Santa Cruz Mountains Backyard Celebrations', desc: 'A certified teppanyaki chef travels to your Los Gatos home or venue — Los Gatos Village estate anniversary dinners, Silicon Valley executive milestone events, and Santa Cruz Mountains backyard celebration parties. From $60/adult.' },
  'san-francisco':    { title: 'Hibachi Catering in San Francisco, CA | SOMA Tech Corporate Events, Pacific Heights Estate Dinners & Bay Area Team Celebrations', desc: 'A certified teppanyaki chef travels to your San Francisco venue or home — SOMA tech team appreciation events, Pacific Heights estate anniversary dinners, Marina District backyard celebration parties, and Bay Area corporate milestone events. From $60/adult.' },
  'san-jose':         { title: 'Hibachi Catering in San Jose, CA | Silicon Valley Corporate Events, Willow Glen Estate Dinners & Almaden Valley Backyard Celebrations', desc: 'A certified teppanyaki chef travels to your San Jose venue or home — Silicon Valley corporate team appreciation events, Willow Glen estate anniversary dinners, Almaden Valley backyard celebration parties. From $60/adult.' },
  // ── Batch 3 ───────────────────────────────────────────────────────────────────
  'la-jolla':         { title: 'Private Hibachi Chef in La Jolla, CA | La Jolla Cove Estate Dinners, Torrey Pines Luxury Events & Bird Rock Coastal Celebrations', desc: 'A certified teppanyaki chef arrives at your La Jolla property — La Jolla Cove bluff estate anniversary dinners, Torrey Pines-adjacent milestone events, Bird Rock neighborhood celebration parties. Premium proteins standard. From $60/adult.' },
  'coronado':         { title: 'Hibachi at Home in Coronado, CA | Coronado Island Estate Dinners, Ocean Boulevard Luxury Events & Hotel Del Coronado-Adjacent Celebrations', desc: 'A private hibachi chef arrives at your Coronado property — Ocean Boulevard estate anniversary dinners, Coronado Island milestone backyard events, Glorietta Bay luxury celebration parties. From $60/adult.' },
  'del-mar':          { title: 'Hibachi at Home in Del Mar, CA | Del Mar Racetrack-Area Estate Dinners, Stratford Court Luxury Events & 15th Street Coastal Celebrations', desc: 'A private hibachi chef arrives at your Del Mar home — Del Mar estate anniversary dinners, Stratford Court-area milestone celebration events, coastal Del Mar backyard family parties. From $60/adult.' },
  'rancho-santa-fe':  { title: 'Private Hibachi Chef in Rancho Santa Fe, CA | The Covenant Estate Dinners, Rancho Santa Fe Luxury Events & San Dieguito Road Celebrations', desc: 'A certified teppanyaki chef arrives at your Rancho Santa Fe estate — The Covenant anniversary dinners, luxury residential compound milestone events, and RSF estate backyard celebrations. Premium proteins standard. From $60/adult.' },
  'carlsbad':         { title: 'Hibachi Catering in Carlsbad, CA | Carlsbad Village Corporate Events, Legoland-Area Team Dinners & La Costa Backyard Celebrations', desc: 'A certified teppanyaki chef travels to your Carlsbad venue or home — corporate team appreciation dinners near Carlsbad Village, La Costa Resort-area company events, and Carlsbad family backyard celebration parties. From $60/adult.' },
  // ── Batch 2 ───────────────────────────────────────────────────────────────────
  'newport-beach':    { title: 'Hibachi at Home in Newport Beach, CA | Balboa Island Estate Dinners, Corona del Mar Luxury Events & Fashion Island-Area Celebrations', desc: 'A private hibachi chef arrives at your Newport Beach property — Balboa Island anniversary estate dinners, Corona del Mar backyard milestone events, Harbor Island luxury celebration parties. From $60/adult.' },
  'laguna-beach':     { title: 'Hibachi at Home in Laguna Beach, CA | Arch Beach Heights Estate Dinners, Canyon Road Bluff Events & Coast Highway Coastal Celebrations', desc: 'A private hibachi chef arrives at your Laguna Beach estate — Arch Beach Heights bluff anniversary dinners, Canyon Road milestone backyard events, Laguna Beach arts colony celebration parties. From $60/adult.' },
  'irvine':           { title: 'Hibachi Catering in Irvine, CA | Irvine Company Corporate Campus Events, UCI Graduation Dinners & Great Park Area Team Celebrations', desc: 'A certified teppanyaki chef travels to your Irvine venue — Irvine Company campus corporate team events, UCI graduation weekend family dinners, Spectrum Center-adjacent company milestone celebrations. From $60/adult.' },
  'huntington-beach': { title: 'Mobile Hibachi in Huntington Beach, CA | Surf City Beach House Events, Pacific Coast Hwy Vacation Rental Parties & HB Backyard Celebrations', desc: 'A certified teppanyaki chef travels to your Huntington Beach home — Surf City beachfront backyard graduation parties, PCH vacation rental dinners, beach community family milestone celebrations. From $60/adult.' },
  'dana-point':       { title: 'Backyard Hibachi in Dana Point, CA | Monarch Beach Estate Dinners, Dana Point Harbor Events & Lantern District Backyard Celebrations', desc: 'A private hibachi chef arrives at your Dana Point home — Monarch Beach estate anniversary dinners, Dana Point Harbor celebration events, Salt Creek Beach-adjacent family milestone parties. From $60/adult.' },
  // ── Batch 1 ───────────────────────────────────────────────────────────────────
  'beverly-hills':    { title: 'Private Hibachi Chef in Beverly Hills, CA | Rodeo Drive Estate Dinners, Luxury Backyard Events & Bel Air Celebrity Corridor Celebrations', desc: 'A certified teppanyaki chef travels to your Beverly Hills estate — Rodeo Drive corridor anniversary dinners, Bel Air backyard luxury events, North Beverly Hills milestone celebrations. Premium proteins standard. From $60/adult.' },
  'malibu':           { title: 'Hibachi at Home in Malibu, CA | PCH Beach Estate Dinners, Carbon Beach Private Events & Malibu Colony Celebration Parties', desc: 'A private hibachi chef arrives at your Malibu beach estate — PCH property anniversary dinners, Carbon Beach private events, Malibu Colony celebrations with premium proteins as the standard expectation. From $60/adult.' },
  'santa-monica':     { title: 'Mobile Hibachi in Santa Monica, CA | Third Street Promenade-Area Home Events, Ocean Park Backyard Parties & Palisades Milestone Celebrations', desc: 'A certified teppanyaki chef travels to your Santa Monica home — Ocean Park backyard graduation parties, Palisades area anniversary dinners, vacation rental events near the pier. From $60/adult.' },
  'calabasas':        { title: 'Private Hibachi Chef in Calabasas, CA | Calabasas Estates Luxury Dinners, The Oaks Community Events & Las Virgenes Corridor Backyard Celebrations', desc: 'A certified teppanyaki chef arrives at your Calabasas estate — The Oaks and Calabasas Estates luxury anniversary dinners, Las Virgenes corridor milestone parties, Hidden Hills-adjacent private events. From $60/adult.' },
  'manhattan-beach':  { title: 'Hibachi at Home in Manhattan Beach, CA | The Strand Beach Estate Dinners, Tree Section Backyard Events & South Bay Family Celebration Parties', desc: 'A private hibachi chef arrives at your Manhattan Beach home — The Strand coastal estate dinners, Tree Section backyard graduation parties, Sand Section family milestone celebrations. From $60/adult.' },
  'pasadena':         { title: 'Backyard Hibachi in Pasadena, CA | Rose Bowl Corridor Estate Events, San Rafael Hills Backyard Parties & Old Pasadena Milestone Celebrations', desc: 'A private hibachi chef arrives at your Pasadena home — Rose Bowl corridor estate anniversary dinners, San Rafael Hills backyard graduation parties, Arroyo Seco-adjacent milestone events. From $60/adult.' },
}

// ─── City Image Map (Batch 1) ──────────────────────────────────────────────────
const CA_CITY_IMAGE_MAP = {
  // ── Batch 6 ───────────────────────────────────────────────────────────────────
  'santa-barbara':    { src: '/pics/hibachi-austin-home.jpg',  alt: (city) => `Hibachi at home in ${city}, California` },
  'san-luis-obispo':  { src: '/pics/hibachi-chef-home.jpg',    alt: (city) => `Hibachi at home in ${city}, California` },
  'palm-springs':     { src: '/pics/hibachi-to-you.jpg',       alt: (city) => `Mobile hibachi in ${city}, California` },
  'palm-desert':      { src: '/pics/hibachi-dallas-home.jpg',  alt: (city) => `Backyard hibachi in ${city}, California` },
  'south-lake-tahoe': { src: '/pics/hibachi-austin-3.jpg',     alt: (city) => `Mobile hibachi in ${city}, California` },
  'truckee':          { src: '/pics/hibachi-at-home-austin.jpg', alt: (city) => `Hibachi at home in ${city}, California` },
  // ── Batch 5 ───────────────────────────────────────────────────────────────────
  'napa':            { src: '/pics/hibachi-pic-2.jpg',          alt: (city) => `Hibachi at home in ${city}, California` },
  'healdsburg':      { src: '/pics/hibachi-colorado-home.jpg',  alt: (city) => `Hibachi at home in ${city}, California` },
  'sonoma':          { src: '/pics/hibachi-dallas-tyler-2.jpg', alt: (city) => `Hibachi at home in ${city}, California` },
  'folsom':          { src: '/pics/hibachi-austin-2.jpg',       alt: (city) => `Hibachi at home in ${city}, California` },
  'granite-bay':     { src: '/pics/hibachi-to-you-2.jpg',       alt: (city) => `Hibachi at home in ${city}, California` },
  // ── Batch 4 ───────────────────────────────────────────────────────────────────
  'atherton':        { src: '/pics/hibachi-pic-32.jpg',    alt: (city) => `Private hibachi chef in ${city}, California` },
  'palo-alto':       { src: '/pics/private-chef-2.jpg',   alt: (city) => `Private hibachi chef in ${city}, California` },
  'los-gatos':       { src: '/pics/hibachi-raleigh.jpg',  alt: (city) => `Hibachi catering in ${city}, California` },
  'san-francisco':   { src: '/pics/hibachi-pic-3.jpg',    alt: (city) => `Hibachi catering in ${city}, California` },
  'san-jose':        { src: '/pics/hibachi-home-austin.jpg', alt: (city) => `Hibachi catering in ${city}, California` },
  // ── Batch 3 ───────────────────────────────────────────────────────────────────
  'la-jolla':        { src: '/pics/hibachi-catering-austin.jpg', alt: (city) => `Private hibachi chef in ${city}, California` },
  'coronado':        { src: '/pics/hibachi-at-home-austin.jpg',  alt: (city) => `Hibachi at home in ${city}, CA` },
  'del-mar':         { src: '/pics/hibachi-austin-home-2.jpg',   alt: (city) => `Hibachi at home in ${city}, California` },
  'rancho-santa-fe': { src: '/pics/hibachi-austin-3.jpg',        alt: (city) => `Private hibachi chef in ${city}, CA` },
  'carlsbad':        { src: '/pics/hibachi-pic-62.jpg',          alt: (city) => `Hibachi catering in ${city}, California` },
  // ── Batch 2 ───────────────────────────────────────────────────────────────────
  'newport-beach':   { src: '/pics/hibachi-to-you.jpg',       alt: (city) => `Hibachi at home in ${city}, California` },
  'laguna-beach':    { src: '/pics/hibachi-home-austin.jpg',  alt: (city) => `Hibachi at home in ${city}, CA` },
  'irvine':          { src: '/pics/private-event-4.jpg',      alt: (city) => `Corporate hibachi catering in ${city}, California` },
  'huntington-beach':{ src: '/pics/hibachi-to-you-2.jpg',    alt: (city) => `Mobile hibachi in ${city}, CA` },
  'dana-point':      { src: '/pics/hibachi-raleigh.jpg',      alt: (city) => `Backyard hibachi in ${city}, California` },
  // ── Batch 1 ───────────────────────────────────────────────────────────────────
  'beverly-hills':   { src: '/pics/hibachi-chef-2.jpg',       alt: (city) => `Private hibachi chef event in ${city}, California` },
  'malibu':          { src: '/pics/hibachi-austin-home.jpg',  alt: (city) => `Hibachi at home in ${city}, CA` },
  'santa-monica':    { src: '/pics/hibachi-chef-home.jpg',    alt: (city) => `Mobile hibachi chef in ${city}, California` },
  'calabasas':       { src: '/pics/hibachi-photo-2.jpg',      alt: (city) => `Private hibachi chef in ${city}, CA` },
  'manhattan-beach': { src: '/pics/hibachi-dallas-home.jpg',  alt: (city) => `Hibachi at home in ${city}, California` },
  'pasadena':        { src: '/pics/hibachi-at-home.jpg',      alt: (city) => `Backyard hibachi party in ${city}, CA` },
}

// ─── Support Images (Batch 1) ─────────────────────────────────────────────────
const CA_SUPPORT_IMAGES = {
  // ── Batch 6 ───────────────────────────────────────────────────────────────────
  'santa-barbara':    { testimonial: { src: '/pics/hibachi-photo-1.jpg',   alt: (c) => `Hibachi at home in ${c}`,      caption: 'Santa Barbara Montecito & Coastal Estate Events',     trustBadge: '5.0★ · Montecito & Hope Ranch Trusted'        }, cta: { src: '/pics/hibachi-shot-1.jpg',          alt: (c) => `Reserve your ${c} estate hibachi event`,  caption: 'Coastal estates · Premium proteins'           } },
  'san-luis-obispo':  { testimonial: { src: '/pics/hibachi-dallas.jpg',    alt: (c) => `Hibachi at home in ${c}`,      caption: 'San Luis Obispo Wine Country & Cal Poly Events',      trustBadge: '4.9★ · SLO Wine Country Corridor Trusted'     }, cta: { src: '/pics/hibachi-pic-4.jpg',           alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · Same-day quotes'             } },
  'palm-springs':     { testimonial: { src: '/pics/hibachi-colorado.jpg',  alt: (c) => `Mobile hibachi in ${c}`,       caption: 'Palm Springs Vacation Rental & Desert Events',        trustBadge: '4.9★ · Desert Hot Springs & Palm Canyon Trusted'}, cta: { src: '/pics/mobile-hibachi.jpg',         alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · Peak season books fast'      } },
  'palm-desert':      { testimonial: { src: '/pics/hibachi-catering.jpg',  alt: (c) => `Backyard hibachi in ${c}`,     caption: 'Palm Desert Estate & El Paseo Corridor Events',       trustBadge: '4.9★ · Ironwood Country Club Area Trusted'    }, cta: { src: '/pics/hibachi-raleigh.jpg',         alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · Desert luxury events'        } },
  'south-lake-tahoe': { testimonial: { src: '/pics/hibachi-pic-3.jpg',    alt: (c) => `Mobile hibachi in ${c}`,       caption: 'Lake Tahoe Vacation Rental & Sierra Nevada Events',   trustBadge: '4.9★ · South Lake Tahoe Corridor Trusted'     }, cta: { src: '/pics/backyard-hibachi.jpg',        alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · Peak season books fast'      } },
  'truckee':          { testimonial: { src: '/pics/hibachi-dallas-2.jpg',  alt: (c) => `Hibachi at home in ${c}`,      caption: 'Truckee Tahoe Donner Estate & Mountain Events',       trustBadge: '4.9★ · Tahoe Donner & Northstar Trusted'      }, cta: { src: '/pics/hibachi-colorado-home.jpg',   alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · Mountain vacation events'    } },
  // ── Batch 5 ───────────────────────────────────────────────────────────────────
  'napa':          { testimonial: { src: '/pics/hibachi-shot-2.jpg',       alt: (c) => `Hibachi at home in ${c}`,      caption: 'Napa Valley Vineyard Estate Events',                  trustBadge: '5.0★ · Napa Valley Wine Country Trusted'      }, cta: { src: '/pics/hibachi-pic-32.jpg',         alt: (c) => `Reserve your ${c} wine country hibachi event`, caption: 'Vineyard estates · From $60/adult'           } },
  'healdsburg':    { testimonial: { src: '/pics/hibachi-wilmington.jpg',   alt: (c) => `Hibachi at home in ${c}`,      caption: 'Healdsburg Dry Creek Valley & Wine Country Events',   trustBadge: '5.0★ · Healdsburg Plaza & Dry Creek Trusted'  }, cta: { src: '/pics/hibachi-dallas-tyler.jpg',   alt: (c) => `Reserve your ${c} wine country hibachi event`, caption: 'Vineyard estates · From $60/adult'           } },
  'sonoma':        { testimonial: { src: '/pics/hibachi-dallas-home-2.jpg',alt: (c) => `Hibachi at home in ${c}`,      caption: 'Sonoma Valley Estate & Wine Country Events',          trustBadge: '4.9★ · Sonoma Plaza & Carneros Trusted'       }, cta: { src: '/pics/mobile-hibachi-2.jpg',       alt: (c) => `Book your ${c} wine country hibachi event`,   caption: 'From $60/adult · Peak harvest books fast'   } },
  'folsom':        { testimonial: { src: '/pics/hibachi-in-garage.jpg',    alt: (c) => `Hibachi at home in ${c}`,      caption: 'Folsom Estate & Sacramento Foothill Events',          trustBadge: '4.9★ · Folsom Ranch & Lake Corridor Trusted'  }, cta: { src: '/pics/hibachi-photo-2.jpg',        alt: (c) => `Book your ${c} hibachi event`,                 caption: 'From $60/adult · Same-day quotes'           } },
  'granite-bay':   { testimonial: { src: '/pics/private-party-chef-6.jpg', alt: (c) => `Hibachi at home in ${c}`,      caption: 'Granite Bay Estate & Premium Suburb Events',          trustBadge: '4.9★ · Granite Bay Estates Corridor Trusted'  }, cta: { src: '/pics/hibachi-pic-2.jpg',          alt: (c) => `Book your ${c} hibachi event`,                 caption: 'From $60/adult · Same-day quotes'           } },
  // ── Batch 4 ───────────────────────────────────────────────────────────────────
  'atherton':      { testimonial: { src: '/pics/hibachi-catering-3.jpg', alt: (c) => `Private hibachi chef in ${c}`,      caption: 'Atherton Estate & Silicon Valley Luxury Events',        trustBadge: '5.0★ · Atherton Estate Corridor Trusted'     }, cta: { src: '/pics/hibachi-photo-1.jpg',  alt: (c) => `Reserve your ${c} estate hibachi event`,  caption: 'Premium proteins · Full estate setup'           } },
  'palo-alto':     { testimonial: { src: '/pics/hibachi-shot-1.jpg',     alt: (c) => `Private hibachi chef in ${c}`,      caption: 'Palo Alto Estate & Stanford Corridor Events',          trustBadge: '5.0★ · Old Palo Alto & Stanford Trusted'     }, cta: { src: '/pics/hibachi-colorado.jpg', alt: (c) => `Reserve your ${c} estate hibachi event`,  caption: 'Premium proteins · Full setup included'         } },
  'los-gatos':     { testimonial: { src: '/pics/hibachi-hart.jpg',       alt: (c) => `Hibachi catering in ${c}`,          caption: 'Los Gatos Estate & Silicon Valley Events',             trustBadge: '4.9★ · Los Gatos Village Corridor Trusted'    }, cta: { src: '/pics/hibachi-pic-4.jpg',    alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · Silicon Valley events'         } },
  'san-francisco': { testimonial: { src: '/pics/hibachi-dallas-2.jpg',   alt: (c) => `Hibachi catering in ${c}`,          caption: 'San Francisco Tech Corporate & Estate Events',         trustBadge: '5.0★ · SOMA & Marina District Trusted'        }, cta: { src: '/pics/backyard-hibachi-2.jpg',alt: (c) => `Book your ${c} corporate hibachi event`,  caption: 'Corporate packages · From $60/adult'            } },
  'san-jose':      { testimonial: { src: '/pics/hibachi-catering.jpg',   alt: (c) => `Hibachi catering in ${c}`,          caption: 'San Jose Silicon Valley Corporate Events',             trustBadge: '4.9★ · Silicon Valley Tech Corridor Trusted'  }, cta: { src: '/pics/traveling-hibachi.jpg', alt: (c) => `Book your ${c} hibachi event`,              caption: 'Corporate packages · From $60/adult'            } },
  // ── Batch 3 ───────────────────────────────────────────────────────────────────
  'la-jolla':        { testimonial: { src: '/pics/hibachi-miami.jpg',         alt: (c) => `Private hibachi chef in ${c}`,           caption: 'La Jolla Cove Estate & Coastal Events',            trustBadge: '5.0★ · La Jolla Cove & Torrey Pines Trusted' }, cta: { src: '/pics/hibachi-photo-2.jpg',         alt: (c) => `Reserve your ${c} estate hibachi event`,    caption: 'Coastal estates · Premium proteins'         } },
  'coronado':        { testimonial: { src: '/pics/hibachi-virginia-beach.jpg',alt: (c) => `Hibachi at home in ${c}`,                caption: 'Coronado Island Estate & Coastal Events',          trustBadge: '5.0★ · Ocean Blvd & Island Trusted'         }, cta: { src: '/pics/hibachi-colorado-home.jpg',   alt: (c) => `Book your ${c} estate hibachi event`,      caption: 'Island estates · From $60/adult'            } },
  'del-mar':         { testimonial: { src: '/pics/hibachi-philadelphia.jpg',  alt: (c) => `Hibachi at home in ${c}`,                caption: 'Del Mar Coastal Estate & Racetrack Events',        trustBadge: '4.9★ · Stratford Court & Del Mar Trusted'    }, cta: { src: '/pics/hibachi-wilmington.jpg',      alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · Coastal estate events'     } },
  'rancho-santa-fe': { testimonial: { src: '/pics/hibachi-dallas-tyler.jpg',  alt: (c) => `Private hibachi chef in ${c}`,           caption: 'Rancho Santa Fe Covenant Estate Events',           trustBadge: '5.0★ · The Covenant Estate Trusted'          }, cta: { src: '/pics/hibachi-dallas-tyler-2.jpg',  alt: (c) => `Reserve your ${c} estate hibachi event`,   caption: 'Premium proteins · Full estate setup'       } },
  'carlsbad':        { testimonial: { src: '/pics/hibachi-austin-2.jpg',      alt: (c) => `Hibachi catering in ${c}`,               caption: 'Carlsbad Corporate & La Costa Resort Events',      trustBadge: '4.9★ · Carlsbad Village Corridor Trusted'    }, cta: { src: '/pics/hibachi-dallas-home-2.jpg',   alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · Same-day quotes'           } },
  // ── Batch 2 ───────────────────────────────────────────────────────────────────
  'newport-beach':   { testimonial: { src: '/pics/hibachi-pic-3.jpg',       alt: (c) => `Hibachi at home in ${c}`,              caption: 'Newport Beach Coastal Estate Events',              trustBadge: '5.0★ · Balboa Island & Corona del Mar Trusted' }, cta: { src: '/pics/hibachi-dallas.jpg',          alt: (c) => `Reserve your ${c} estate hibachi event`,    caption: 'Coastal estates · Premium proteins'         } },
  'laguna-beach':    { testimonial: { src: '/pics/hibachi-hart.jpg',         alt: (c) => `Hibachi at home in ${c}`,              caption: 'Laguna Beach Bluff Estate Events',                 trustBadge: '5.0★ · Arch Beach & Canyon Rd Trusted'      }, cta: { src: '/pics/backyard-hibachi-2.jpg',      alt: (c) => `Book your ${c} estate hibachi event`,      caption: 'Coastal estates · From $60/adult'           } },
  'irvine':          { testimonial: { src: '/pics/hibachi-catering.jpg',     alt: (c) => `Corporate hibachi catering in ${c}`,   caption: 'Irvine Corporate & UCI Graduation Events',         trustBadge: '4.9★ · Irvine Company Campus Trusted'       }, cta: { src: '/pics/private-chef-2.jpg',          alt: (c) => `Book your ${c} corporate hibachi event`,   caption: 'Corporate packages · From $60/adult'        } },
  'huntington-beach':{ testimonial: { src: '/pics/hibachi-dallas-2.jpg',     alt: (c) => `Mobile hibachi in ${c}`,               caption: 'Huntington Beach Surf City Backyard Events',       trustBadge: '4.9★ · Surf City Beachfront Trusted'        }, cta: { src: '/pics/mobile-hibachi-2.jpg',        alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · Peak season books fast'    } },
  'dana-point':      { testimonial: { src: '/pics/hibachi-in-garage.jpg',    alt: (c) => `Backyard hibachi in ${c}`,             caption: 'Dana Point Harbor & Monarch Beach Events',         trustBadge: '4.9★ · Monarch Beach & Harbor Trusted'      }, cta: { src: '/pics/traveling-hibachi.jpg',       alt: (c) => `Book your ${c} hibachi party`,              caption: 'From $60/adult · OC coastal events'         } },
  // ── Batch 1 ───────────────────────────────────────────────────────────────────
  'beverly-hills':   { testimonial: { src: '/pics/hibachi-shot-1.jpg',      alt: (c) => `Private hibachi event in ${c}`,          caption: 'Beverly Hills Estate & Luxury Events',             trustBadge: '5.0★ · Rodeo Drive Corridor Trusted'        }, cta: { src: '/pics/hibachi-colorado.jpg',        alt: (c) => `Book your ${c} private hibachi event`,      caption: 'Premium proteins · Full setup included'     } },
  'malibu':          { testimonial: { src: '/pics/hibachi-photo-1.jpg',     alt: (c) => `Hibachi at home in ${c}`,                caption: 'Malibu PCH Beach Estate Events',                   trustBadge: '5.0★ · Carbon Beach & PCH Trusted'          }, cta: { src: '/pics/backyard-hibachi.jpg',         alt: (c) => `Reserve your ${c} estate hibachi event`,    caption: 'Coastal estates · From $60/adult'           } },
  'santa-monica':    { testimonial: { src: '/pics/mobile-hibachi.jpg',      alt: (c) => `Mobile hibachi chef in ${c}`,            caption: 'Santa Monica Beachside & Home Events',             trustBadge: '4.9★ · Ocean Park & Palisades Trusted'      }, cta: { src: '/pics/hibachi-pic-4.jpg',            alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · Same-day quotes'           } },
  'calabasas':       { testimonial: { src: '/pics/hibachi-catering-3.jpg',  alt: (c) => `Private hibachi chef in ${c}`,           caption: 'Calabasas Estates & The Oaks Events',              trustBadge: '5.0★ · Calabasas & Hidden Hills Trusted'    }, cta: { src: '/pics/private-party-chef-6.jpg',     alt: (c) => `Reserve your ${c} estate event`,            caption: 'Premium proteins · Full setup included'     } },
  'manhattan-beach': { testimonial: { src: '/pics/hibachi-shot-2.jpg',      alt: (c) => `Hibachi at home in ${c}`,                caption: 'Manhattan Beach Strand & South Bay Events',        trustBadge: '4.9★ · The Strand & Tree Section Trusted'   }, cta: { src: '/pics/hibachi-pic-2.jpg',            alt: (c) => `Book your ${c} hibachi event`,              caption: 'From $60/adult · South Bay events'          } },
  'pasadena':        { testimonial: { src: '/pics/hibachi-austin.jpg',      alt: (c) => `Backyard hibachi in ${c}`,               caption: 'Pasadena Rose Bowl Corridor & Estate Events',      trustBadge: '4.9★ · San Rafael Hills & Arroyo Trusted'   }, cta: { src: '/pics/hibachi-pic-32.jpg',           alt: (c) => `Book your ${c} hibachi party`,              caption: 'From $60/adult · Graduation season'         } },
}

// ─── Major Cities Map (Batch 1) ────────────────────────────────────────────────
const CA_MAJOR_CITIES = {
  // ── Batch 6 — Central Coast / Desert / Mountain ────────────────────────────
  'santa-barbara':    { v: 1, profileIdx: 26, nearby: ['San Luis Obispo', 'Malibu', 'Napa'] },
  'san-luis-obispo':  { v: 4, profileIdx: 27, nearby: ['Santa Barbara', 'Napa', 'Healdsburg'] },
  'palm-springs':     { v: 2, profileIdx: 28, nearby: ['Palm Desert', 'La Jolla', 'Malibu'] },
  'palm-desert':      { v: 5, profileIdx: 29, nearby: ['Palm Springs', 'La Jolla', 'Newport Beach'] },
  'south-lake-tahoe': { v: 2, profileIdx: 30, nearby: ['Truckee', 'Napa', 'San Francisco'] },
  'truckee':          { v: 4, profileIdx: 31, nearby: ['South Lake Tahoe', 'Napa', 'Healdsburg'] },
  // ── Batch 5 — Wine Country / Sacramento ───────────────────────────────────
  'napa':            { v: 4, profileIdx: 21, nearby: ['Healdsburg', 'Sonoma', 'Santa Barbara'] },
  'healdsburg':      { v: 4, profileIdx: 22, nearby: ['Napa', 'Sonoma', 'Santa Barbara'] },
  'sonoma':          { v: 4, profileIdx: 23, nearby: ['Napa', 'Healdsburg', 'Santa Barbara'] },
  'folsom':          { v: 5, profileIdx: 24, nearby: ['Granite Bay', 'Atherton', 'San Francisco'] },
  'granite-bay':     { v: 5, profileIdx: 25, nearby: ['Folsom', 'Atherton', 'San Francisco'] },
  // ── Batch 4 — Silicon Valley / Bay Area ───────────────────────────────────
  'atherton':        { v: 0, profileIdx: 16, nearby: ['Palo Alto', 'Los Gatos', 'San Francisco'] },
  'palo-alto':       { v: 0, profileIdx: 17, nearby: ['Atherton', 'Los Gatos', 'San Francisco'] },
  'los-gatos':       { v: 5, profileIdx: 18, nearby: ['Palo Alto', 'Atherton', 'San Jose'] },
  'san-francisco':   { v: 3, profileIdx: 19, nearby: ['Palo Alto', 'Atherton', 'San Jose'] },
  'san-jose':        { v: 3, profileIdx: 20, nearby: ['San Francisco', 'Palo Alto', 'Los Gatos'] },
  // ── Batch 3 — San Diego North ─────────────────────────────────────────────
  'la-jolla':        { v: 1, profileIdx: 11, nearby: ['Coronado', 'Del Mar', 'Carlsbad'] },
  'coronado':        { v: 1, profileIdx: 12, nearby: ['La Jolla', 'Del Mar'] },
  'del-mar':         { v: 1, profileIdx: 13, nearby: ['La Jolla', 'Rancho Santa Fe', 'Carlsbad'] },
  'rancho-santa-fe': { v: 0, profileIdx: 14, nearby: ['Del Mar', 'La Jolla', 'Carlsbad'] },
  'carlsbad':        { v: 3, profileIdx: 15, nearby: ['Del Mar', 'Rancho Santa Fe', 'La Jolla'] },
  // ── Batch 2 — Orange County ────────────────────────────────────────────────
  'newport-beach':    { v: 1, profileIdx: 6,  nearby: ['Laguna Beach', 'Irvine', 'Huntington Beach', 'Dana Point'] },
  'laguna-beach':     { v: 1, profileIdx: 7,  nearby: ['Newport Beach', 'Dana Point', 'Irvine'] },
  'irvine':           { v: 3, profileIdx: 8,  nearby: ['Newport Beach', 'Huntington Beach', 'Laguna Beach'] },
  'huntington-beach': { v: 2, profileIdx: 9,  nearby: ['Newport Beach', 'Irvine', 'Laguna Beach'] },
  'dana-point':       { v: 5, profileIdx: 10, nearby: ['Laguna Beach', 'Newport Beach', 'Irvine'] },
  // ── Batch 1 — Los Angeles ──────────────────────────────────────────────────
  'beverly-hills':   { v: 0, profileIdx: 0,  nearby: ['Malibu', 'Santa Monica', 'Calabasas', 'Pasadena'] },
  'malibu':          { v: 1, profileIdx: 1,  nearby: ['Beverly Hills', 'Santa Monica', 'Calabasas'] },
  'santa-monica':    { v: 2, profileIdx: 2,  nearby: ['Malibu', 'Manhattan Beach', 'Beverly Hills'] },
  'calabasas':       { v: 0, profileIdx: 3,  nearby: ['Malibu', 'Beverly Hills', 'Santa Monica'] },
  'manhattan-beach': { v: 2, profileIdx: 4,  nearby: ['Santa Monica', 'Pasadena', 'Beverly Hills'] },
  'pasadena':        { v: 5, profileIdx: 5,  nearby: ['Beverly Hills', 'Manhattan Beach', 'Santa Monica'] },
}

// ─── Hero Subtitles (per theme) ────────────────────────────────────────────────
const CA_HERO_SUBTITLES = [
  (city) => `Estate Private Dining · Premium Proteins · Full Setup & Cleanup · Serving All of ${city}`,
  (city) => `Coastal Estate Events · Premium Proteins · Private Chef · Serving ${city} & the Coast`,
  (city) => `Beachside & Vacation Events · Mobile Chef · Live Teppanyaki · Serving ${city}`,
  (city) => `Tech Corporate Events · Team Dinners · Live Teppanyaki · Serving ${city} & Surrounding Areas`,
  (city) => `Wine Country Estate Dinners · Destination Events · Private Chef · Serving ${city}`,
  (city) => `Estate Milestone Dinners · Corporate Events · Live Teppanyaki · Serving ${city}`,
]

// ─── Generic Intro Variants (T0–T5, indices 582–587) ──────────────────────────
export const CA_INTRO_VARIANTS = [
  // 582 — T0 Ultra-Luxury Estate
  {
    headline: (city) => `Private Hibachi Chef in ${city}: Ultra-Luxury Estate Dining and Private Events`,
    opening:  (city, state) => `Estate anniversary dinners on private terraces, milestone birthday celebrations at residential compounds, executive client appreciation events at luxury residential properties — a certified teppanyaki chef arrives at your ${city} estate with a fully self-contained propane teppan grill, premium proteins as the baseline expectation, and a live performance that transforms the property into the finest private dining room in California for the evening. ${city}'s ultra-luxury residential market demands a private event format commensurate with the property — and no restaurant in California can replicate what your estate already is.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, filet mignon and lobster tail as standard upgrade options, Chilean sea bass, wagyu available on request, fried rice, vegetables, house-made sauces, and complete equipment. For estate events of 20–40, dual chef stations ensure everyone eats at the same time. Complete setup in 20–30 minutes, live performance 90–120 minutes, full cleanup when dinner ends.`,
    closing:  (city, state) => `Same-day quotes for any ${city} estate property or residential address — submit your date and we respond immediately.`,
  },
  // 583 — T1 Coastal Premier
  {
    headline: (city) => `Hibachi at Home in ${city}: Coastal Estate Dinners and Private Beachfront Events`,
    opening:  (city, state) => `${city} beachfront estate anniversary dinners, coastal property graduation celebrations, ocean-view milestone events, and private home gatherings along the California coast — a certified teppanyaki chef arrives at your ${city} property with a fully self-contained propane teppan grill and premium proteins as the standard expectation. California's coastal residential corridor, its beach estate culture, and its tradition of private outdoor entertaining make it the ideal setting for the live-fire format that no oceanfront restaurant can fully replicate — because the chef arrives at your property and the occasion happens where it belongs.`,
    middle:   (city, state) => `The chef brings the propane grill, filet mignon and lobster tail available per guest, fried rice, vegetables, house-made sauces, and all equipment. No gas hookup required at any California coastal property or vacation rental. For events of 20–40, dual stations available. Setup in 20–30 minutes, live performance 90–120 minutes, full cleanup.`,
    closing:  (city, state) => `${city} coastal estate events book 3–5 weeks ahead in summer and peak season — submit your date for a same-day quote.`,
  },
  // 584 — T2 Beach/Vacation Weekend
  {
    headline: (city) => `Mobile Hibachi in ${city}: Beach Events, Vacation Rentals and Backyard Celebrations`,
    opening:  (city, state) => `${city} vacation rental dinners, beach house gatherings, backyard birthday parties, and coastal home events — a certified teppanyaki chef travels to your property with a fully self-contained propane teppan grill so you spend the evening at your party instead of managing it. California's beach communities have the outdoor entertaining space, the vacation rental culture, and the gathering tradition that private hibachi was built for — and the format keeps your group at the property all evening instead of splitting across beachside restaurants that booked up a month ago.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins including premium upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. No gas hookup required. For groups of 25–50, dual stations are available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Peak summer and holiday weekend dates in ${city} book 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 585 — T3 Tech/Corporate
  {
    headline: (city) => `Hibachi Catering in ${city}: Tech Corporate Events and Team Appreciation Dinners`,
    opening:  (city, state) => `${city}'s technology industry, venture-backed startup ecosystem, and established corporate market — a certified teppanyaki chef travels to your ${city} venue or executive property with a fully self-contained propane teppan grill and delivers the live performance that transforms a team dinner into a genuine occasion. California's tech corridor has hosted every conceivable corporate dinner format, and private hibachi is the one that consistently produces something neither a private dining room nor a catered buffet can generate: a shared, live-fire experience that every person at the table participates in and no one forgets by the following Monday.`,
    middle:   (city, state) => `The chef arrives fully self-contained — propane teppan grill, all proteins, complete ingredients, and all equipment. For corporate groups of 25–60, dual stations keep everyone eating and engaging at the same time. Professional setup, 90–120 minute live performance, complete cleanup.`,
    closing:  (city, state) => `Most ${city} corporate and tech team event quotes are returned same day — submit your date and venue address.`,
  },
  // 586 — T4 Wine Country/Destination
  {
    headline: (city) => `Hibachi at Home in ${city}: Wine Country Estate Dinners and Destination Private Events`,
    opening:  (city, state) => `${city} wine country anniversary dinners, vineyard property milestone celebrations, vacation rental gatherings for out-of-town families, and destination estate events where the setting is already exceptional before the chef arrives — a certified teppanyaki chef travels to your ${city} property with the full self-contained setup and makes the evening genuinely memorable. California's wine country and destination communities have the estate properties, the outdoor entertaining culture, and the tradition of gathering that private hibachi was designed to complement.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins including premium upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. No gas hookup required at any ${city} property, vineyard estate, or vacation rental. Setup in 20–30 minutes, live performance 90–120 minutes, full cleanup.`,
    closing:  (city, state) => `${city} destination and peak season dates book 3–5 weeks ahead — submit your date for a same-day quote.`,
  },
  // 587 — T5 Premium Suburb/Mixed
  {
    headline: (city) => `Hibachi Catering in ${city}: Estate Milestone Dinners and Premium Backyard Events`,
    opening:  (city, state) => `${city} milestone anniversary dinners, graduation backyard parties, corporate team events, and estate property celebrations — a certified teppanyaki chef arrives at your ${city} property with a fully self-contained propane teppan grill and delivers the live performance that makes any occasion genuinely memorable. ${city}'s established residential culture, its outdoor entertaining tradition, and its mix of estate properties and corporate venues give it a private event market that spans both the personal milestone calendar and the company event calendar — and private hibachi is the format that serves both at the same high level.`,
    middle:   (city, state) => `The chef arrives with the propane grill, all proteins, premium upgrades available per guest, fried rice, vegetables, house-made sauces, and complete equipment. For groups of 25–60, dual stations are available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Same-day quotes for any ${city} address — submit your date and we respond immediately.`,
  },
]

// ─── City-Specific Intros (Batch 1, indices 588–593) ──────────────────────────
export const CA_CITY_INTROS = [
  // 588 — Beverly Hills
  {
    headline: (city, state) => `Private Hibachi Chef in Beverly Hills: Rodeo Drive Corridor Estate Dinners, Bel Air Luxury Events and North Beverly Hills Milestone Celebrations`,
    opening:  (city, state) => `Your Beverly Hills estate — the Rodeo Drive residential corridor, the Bel Air adjacencies on Benedict Canyon, the North Beverly Hills properties above Sunset, the flats of Beverly Hills where the homes have been hosting private dinners at the highest level for generations — a certified teppanyaki chef arrives with the full self-contained setup, premium proteins as the baseline expectation, and a performance that transforms your outdoor terrace, pool deck, or courtyard into the finest private dining room in Los Angeles for the evening. Beverly Hills is California's most prestigious residential address and one of the most active luxury private event markets in the country. No restaurant on Sunset Boulevard or Canon Drive replicates what your Beverly Hills property already is when a certified chef arrives and makes the occasion happen exactly where it belongs.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, filet mignon and lobster tail as standard upgrade options, Chilean sea bass, wagyu available on request, fried rice, vegetables, miso soup, salad, house-made ginger, yum yum, and teriyaki sauces, and all plates and utensils. For estate events of 20–40, dual stations ensure everyone eats at the same time. Complete setup in 20–30 minutes. Live teppanyaki performance for 90–120 minutes. Full cleanup when dinner ends — your estate is exactly as it was when the chef arrived.`,
    closing:  (city, state) => `Beverly Hills estate event quotes are returned same day — submit your date, address, and guest count and we respond immediately.`,
  },
  // 589 — Malibu
  {
    headline: (city, state) => `Hibachi at Home in Malibu: PCH Beach Estate Dinners, Carbon Beach Private Events and Malibu Colony Celebration Parties`,
    opening:  (city, state) => `Your Malibu property — a Carbon Beach front-row estate where Pacific Coast Highway runs past the gate, a Point Dume bluff home where the chef sets up on the deck as the sun drops into the ocean, a Serra Retreat-area compound for a milestone anniversary dinner, or a Malibu Colony home gathering for twelve guests on a Saturday in June — a private hibachi chef arrives at your Malibu property with everything needed for the full live-fire performance, premium proteins as the expectation, and cleanup so complete that the property is exactly as it was when the chef arrived. Malibu's private event culture is built on the premise that the property is already the most extraordinary venue in California — and the chef's job is to match that standard rather than compete with it.`,
    middle:   (city, state) => `The chef brings the propane grill, filet mignon and lobster tail available per guest, Chilean sea bass, fried rice, vegetables, house-made sauces, and all equipment. No gas hookup required at any Malibu property or coastal vacation rental. For events of 20–35, dual stations available. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends.`,
    closing:  (city, state) => `Malibu estate and peak summer dates fill 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 590 — Santa Monica
  {
    headline: (city, state) => `Mobile Hibachi in Santa Monica: Ocean Park Backyard Parties, Palisades Estate Events and Vacation Rental Celebration Dinners`,
    opening:  (city, state) => `Santa Monica graduation backyard parties in an Ocean Park bungalow yard, Palisades-adjacent anniversary dinners for sixteen guests on a private terrace, vacation rental home events near the pier for out-of-town family gatherings, Sunset Park neighborhood birthday celebrations, and Montana Avenue-corridor milestone dinners for families who want the evening to stay at the property rather than scatter across the Third Street Promenade restaurant corridor — a certified teppanyaki chef travels to your Santa Monica property with a fully self-contained propane teppan grill and delivers the live performance that makes any occasion genuinely memorable. Santa Monica's mix of beach bungalow backyards, Palisades-adjacent estate properties, and vacation rental culture makes it one of the most naturally suited communities in Southern California for private hibachi.`,
    middle:   (city, state) => `The chef arrives with the propane grill, all proteins including premium upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For groups of 25–50, dual stations are available. No gas hookup required at any Santa Monica property or vacation rental. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Santa Monica dates book 3–5 weeks ahead in summer and graduation season — submit your date now for a same-day quote.`,
  },
  // 591 — Calabasas
  {
    headline: (city, state) => `Private Hibachi Chef in Calabasas: The Oaks Estate Dinners, Calabasas Estates Luxury Events and Las Virgenes Corridor Backyard Celebrations`,
    opening:  (city, state) => `The Oaks of Calabasas anniversary dinner for eighteen guests behind a gated estate, Calabasas Estates backyard graduation party for forty-two family members, Las Virgenes Road corridor milestone birthday celebration, Hidden Hills-adjacent luxury home events, and Vista Calabasas community gatherings where a certified teppanyaki chef arrives at your property and transforms the outdoor terrace into the best private dining room in the San Fernando Valley for the evening. Calabasas is one of California's most exclusive residential communities — an gated community culture where the properties are already exceptional and where a private hibachi chef is the event format that matches the standard the neighborhood has already set.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, filet mignon and lobster tail as standard upgrade options, Chilean sea bass, wagyu available on request, fried rice, vegetables, house-made sauces, and complete equipment. For estate events of 20–40, dual stations available. Complete setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup — your estate is exactly as it was when the chef leaves.`,
    closing:  (city, state) => `Calabasas estate event quotes are returned same day — submit your date and address and we respond immediately.`,
  },
  // 592 — Manhattan Beach
  {
    headline: (city, state) => `Hibachi at Home in Manhattan Beach: The Strand Beach Estate Dinners, Tree Section Backyard Events and South Bay Family Celebration Parties`,
    opening:  (city, state) => `Manhattan Beach Strand estate anniversary dinner for fourteen guests on a private deck two houses from the water, Tree Section backyard graduation party for thirty-eight family members on a May Saturday when every restaurant in the South Bay is already committed to someone else's celebration, Sand Section home gathering for a milestone birthday where the Pacific is three blocks away and the chef sets up on the back patio — a private hibachi chef arrives at your Manhattan Beach property with everything included so the occasion actually belongs to the people it's for. Manhattan Beach's outdoor entertaining culture, its beach community backyard tradition, and its concentration of South Bay families with strong graduation and milestone calendars make it one of California's most active private hibachi markets.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins including filet mignon and lobster tail upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For Manhattan Beach graduation parties of 25–50, dual stations keep everyone eating at the same time. Complete setup. Full performance. Full cleanup.`,
    closing:  (city, state) => `South Bay graduation Saturdays in May and June book 4–6 weeks ahead — submit your Manhattan Beach date now for a same-day quote.`,
  },
  // 593 — Pasadena
  {
    headline: (city, state) => `Backyard Hibachi in Pasadena: Rose Bowl Corridor Estate Events, San Rafael Hills Backyard Parties and Old Pasadena Milestone Celebrations`,
    opening:  (city, state) => `Rose Bowl corridor estate anniversary dinners, San Rafael Hills backyard graduation parties for forty-five family members on a June Saturday, Arroyo Seco-adjacent milestone birthday celebrations, South Pasadena community gatherings, and Caltech and JPL corporate team events at Pasadena-area properties — a private hibachi chef arrives at your Pasadena home or venue with a fully self-contained propane teppan grill so you're at the party instead of managing it. Pasadena's mix of craftsman estate properties, spacious backyard culture, Rose Bowl neighborhood outdoor entertaining tradition, and proximity to Caltech, JPL, and the Pasadena Playhouse-area corporate corridor makes it one of the most varied private hibachi markets in the Los Angeles metro.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For graduation parties of 30–50, dual stations keep everyone eating and watching at the same time. No gas hookup required at any Pasadena property or venue. Complete setup, full performance, complete cleanup.`,
    closing:  (city, state) => `Pasadena graduation Saturdays in May and June book 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // ── Batch 2 ────────────────────────────────────────────────────────────────
  // 594 — Newport Beach
  {
    headline: (city, state) => `Hibachi at Home in Newport Beach: Balboa Island Estate Dinners, Corona del Mar Luxury Events and Harbor Island Celebration Parties`,
    opening:  (city, state) => `Your Newport Beach property — a Balboa Island bayfront estate where the chef sets up on the deck as the harbor lights come on, a Corona del Mar bluff home anniversary dinner for eighteen guests with Pelican Hill as the backdrop, a Harbor Island private event for C-suite clients who have attended every conceivable format and find this one genuinely different, or a Fashion Island-corridor executive home client appreciation dinner where the occasion stays at the property rather than at a restaurant that everyone in the group knows already. Newport Beach is Orange County's most established coastal luxury market — a community where the harbor estates, the beachfront properties, and the residential culture have all been built around the expectation of private entertaining at the highest level. A private hibachi chef arrives at your Newport Beach property with premium proteins as the standard expectation and a live performance that matches the setting.`,
    middle:   (city, state) => `The chef arrives with the propane grill, filet mignon and lobster tail available per guest, Chilean sea bass, fried rice, vegetables, house-made sauces, and all equipment. No gas hookup required at any Newport Beach property or bayfront vacation rental. For events of 20–40, dual stations available. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends.`,
    closing:  (city, state) => `Newport Beach estate and peak summer dates fill 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 595 — Laguna Beach
  {
    headline: (city, state) => `Hibachi at Home in Laguna Beach: Arch Beach Heights Bluff Estate Dinners, Canyon Road Milestone Events and Laguna Arts Colony Celebration Parties`,
    opening:  (city, state) => `Arch Beach Heights bluff estate anniversary dinner for sixteen guests overlooking the Pacific, Canyon Road-area milestone birthday celebration where the chef sets up on a private courtyard, Laguna Beach arts colony home gatherings for artists, executives, and old friends who have been coming to this town for thirty years, and Coast Highway-adjacent oceanview property events where the occasion needs to match the setting — a private hibachi chef arrives at your Laguna Beach property with the full self-contained setup and premium proteins as the expectation. Laguna Beach is one of California's most distinctive coastal communities — a small city with estate properties that rival anything in the state, a private entertaining culture built around the town's identity, and a residential market where the homes already do most of the work before the chef even arrives.`,
    middle:   (city, state) => `The chef brings the propane grill, filet mignon and lobster tail available per guest, fried rice, vegetables, house-made sauces, and all equipment. No gas hookup required at any Laguna Beach property. For events of 16–35, dual stations available. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends.`,
    closing:  (city, state) => `Laguna Beach estate and peak summer dates fill 4–6 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 596 — Irvine
  {
    headline: (city, state) => `Hibachi Catering in Irvine: Irvine Company Corporate Campus Events, UCI Graduation Weekend Dinners and Great Park Area Team Celebrations`,
    opening:  (city, state) => `Irvine Company corporate campus team appreciation events for division milestones, UCI graduation weekend family dinners for out-of-state families who need a format that works without competing for restaurant reservations on the busiest dining weekend in Orange County, Spectrum Center-adjacent company anniversary gatherings, Great Park-area neighborhood backyard graduation parties, and Irvine tech corridor team events for the technology and professional services companies that have made this city one of California's most important corporate markets — a certified teppanyaki chef travels to your Irvine venue or residential property with a fully self-contained propane teppan grill and delivers the live performance that transforms a team event from a routine dinner into a genuinely memorable occasion. Irvine is Orange County's corporate capital and one of California's most active private event markets, with a dual demand that spans the UCI commencement calendar and the year-round corporate milestone season.`,
    middle:   (city, state) => `The chef arrives fully self-contained — propane teppan grill, all proteins, complete ingredients, and all equipment. For corporate groups of 25–60, dual stations keep everyone eating and engaging at the same time. Professional setup, 90–120 minute live performance, complete cleanup.`,
    closing:  (city, state) => `Most Irvine corporate and graduation event quotes are returned same day — submit your date and venue address for an immediate response.`,
  },
  // 597 — Huntington Beach
  {
    headline: (city, state) => `Mobile Hibachi in Huntington Beach: Surf City Beach House Events, Pacific Coast Highway Vacation Rental Parties and HB Backyard Family Celebrations`,
    opening:  (city, state) => `Huntington Beach graduation backyard party for thirty-eight family members in a Huntington Harbour-area home, PCH vacation rental dinner for twenty guests celebrating a milestone birthday a block from the beach, Main Street-adjacent family reunion gathering in an HB residential neighborhood, Edison High graduation party at a Lake Huntington property, and Surf City beach house weekend events where the chef sets up in the backyard and the Pacific is three minutes away — a certified teppanyaki chef travels to your Huntington Beach property with a fully self-contained propane teppan grill and delivers the live performance that keeps your group at the property all evening instead of competing for restaurant tables on one of the South OC coast's most congested dining weekends. Huntington Beach's backyard culture, its outdoor entertaining tradition, and its concentration of beach-accessible residential properties make it one of Orange County's most naturally suited communities for private hibachi.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins including premium upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. For groups of 25–50, dual stations are available. No gas hookup required at any HB property or vacation rental. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Huntington Beach peak summer and graduation season dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 598 — Dana Point
  {
    headline: (city, state) => `Backyard Hibachi in Dana Point: Monarch Beach Estate Dinners, Dana Point Harbor Events and Lantern District Celebration Parties`,
    opening:  (city, state) => `Monarch Beach estate anniversary dinner for twenty guests above the Pacific, Dana Point Harbor milestone birthday celebration at a Strand Vista property, Lantern District neighborhood graduation backyard party for thirty-five family members, Salt Creek Beach-adjacent vacation rental gathering, and Ritz-Carlton-adjacent residential estate events where the chef sets up on an outdoor terrace and the occasion happens exactly where it belongs — a private hibachi chef arrives at your Dana Point property with everything included so you're at the event instead of managing it. Dana Point is one of Orange County's most scenic residential communities — a harbor city with estate properties on the bluffs, a marina culture built around private entertaining, and a residential backyard tradition that private hibachi was built to complement.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. For events of 20–45, dual stations available. No gas hookup required. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Dana Point estate and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // ── Batch 3 ────────────────────────────────────────────────────────────────
  // 599 — La Jolla
  {
    headline: (city, state) => `Private Hibachi Chef in La Jolla: La Jolla Cove Bluff Estate Dinners, Torrey Pines-Adjacent Luxury Events and Bird Rock Coastal Celebration Parties`,
    opening:  (city, state) => `La Jolla Cove bluff estate anniversary dinner for sixteen guests with the Pacific three hundred feet below, Torrey Pines-adjacent residential compound milestone birthday celebration, Bird Rock neighborhood estate gathering for twenty-two guests where the chef sets up on a stone terrace as the marine layer rolls in, and Coast Boulevard-adjacent private events where the occasion needs to match one of California's most spectacular coastal settings — a certified teppanyaki chef arrives at your La Jolla property with a fully self-contained propane teppan grill and premium proteins as the expectation. La Jolla is San Diego's most prestigious residential community and one of California's finest coastal addresses — a small city of estate properties, ocean-view terraces, and private entertaining culture that has been built around the premise that the property is already the most extraordinary venue available, and the private format is the one that actually matches it.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, filet mignon and lobster tail available per guest, Chilean sea bass, fried rice, vegetables, house-made sauces, and all equipment. No gas hookup required at any La Jolla property or coastal vacation rental. For events of 16–40, dual stations available. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends.`,
    closing:  (city, state) => `La Jolla estate and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 600 — Coronado
  {
    headline: (city, state) => `Hibachi at Home in Coronado: Coronado Island Estate Dinners, Ocean Boulevard Luxury Events and Hotel Del Coronado-Adjacent Celebration Parties`,
    opening:  (city, state) => `Coronado Island estate anniversary dinner for eighteen guests on Ocean Boulevard, Glorietta Bay-front property milestone birthday celebration where the chef sets up on a bayfront terrace and the lights of downtown San Diego reflect off the water, Hotel Del Coronado-adjacent residential neighborhood gathering for twenty-four guests where a private hibachi chef arrives at your Coronado home and delivers the occasion that no restaurant on the island fully replicates — because the setting is already extraordinary and the format is the one that belongs to it. Coronado is one of California's most iconic addresses — a bridge-and-ferry island city with estate properties, a historic resort corridor, and a private entertaining culture built around the premise that the island itself is already the finest venue in San Diego.`,
    middle:   (city, state) => `The chef brings the propane grill, filet mignon and lobster tail available per guest, fried rice, vegetables, house-made sauces, and all equipment. No gas hookup required at any Coronado property or island vacation rental. For events of 14–35, dual stations available. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends.`,
    closing:  (city, state) => `Coronado island estate and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 601 — Del Mar
  {
    headline: (city, state) => `Hibachi at Home in Del Mar: Del Mar Racetrack-Area Estate Dinners, Stratford Court Luxury Events and 15th Street Coastal Celebration Parties`,
    opening:  (city, state) => `Del Mar estate anniversary dinner for sixteen guests at a Stratford Court property above the Pacific, racetrack-season milestone birthday celebration at a Del Mar Heights home where the chef arrives during opening week for the family's gathering that no restaurant table in Del Mar can accommodate, 15th Street-area neighborhood graduation party for thirty family members on a June Saturday, and coastal bluff vacation rental events where the group has driven from Los Angeles specifically for a weekend at the San Diego coast — a private hibachi chef arrives at your Del Mar property with the full self-contained setup and makes the evening match the setting. Del Mar is one of California's most naturally scenic residential communities — a small coastal city with bluff properties, a private entertaining culture built around the racing season and the summer calendar, and the kind of intimate scale that makes private hibachi the format that actually fits.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Del Mar property or coastal vacation rental. For events of 14–40, dual stations available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Del Mar racetrack-season and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 602 — Rancho Santa Fe
  {
    headline: (city, state) => `Private Hibachi Chef in Rancho Santa Fe: The Covenant Estate Dinners, Rancho Santa Fe Luxury Events and San Dieguito Road Celebration Parties`,
    opening:  (city, state) => `The Covenant anniversary estate dinner for twenty guests behind a gated entry, a private residential compound on Rancho Santa Fe Road milestone birthday celebration where the occasion has to match the property, a San Dieguito Road estate family reunion for thirty-eight members who flew in from four states for the weekend, and The Inn at Rancho Santa Fe-adjacent residential events where a certified teppanyaki chef arrives at your property and transforms a private outdoor terrace into the finest private dining room in San Diego County for the evening. Rancho Santa Fe is one of California's most exclusive residential communities — a master-planned Covenant of oak and eucalyptus-lined roads with estate properties that define what private entertaining at the highest level in San Diego County looks like, and a private event market that demands a format commensurate with the property rather than a restaurant booking the neighborhood doesn't need.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, filet mignon and lobster tail as standard upgrade options, Chilean sea bass, wagyu available on request, fried rice, vegetables, house-made sauces, and complete equipment. For estate events of 20–40, dual stations ensure everyone eats at the same time. Complete setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup — your estate is exactly as it was.`,
    closing:  (city, state) => `Rancho Santa Fe estate event quotes are returned same day — submit your date and address and we respond immediately.`,
  },
  // 603 — Carlsbad
  {
    headline: (city, state) => `Hibachi Catering in Carlsbad: Carlsbad Village Corporate Events, La Costa Resort-Area Team Dinners and Aviara Backyard Celebration Parties`,
    opening:  (city, state) => `Carlsbad Village corporate team appreciation event for thirty-two employees, La Costa Resort-area company anniversary gathering at an executive home in the Aviara community, Legoland-area graduation backyard party for forty family members when every restaurant in north coastal San Diego County is fully committed for that Saturday, and tech company team dinners at Carlsbad's Palomar Airport Road business corridor where the format is the one that consistently outperforms every catered alternative the company has tried — a certified teppanyaki chef travels to your Carlsbad venue or home with a fully self-contained propane teppan grill and delivers the live performance that makes any occasion genuinely memorable. Carlsbad is one of North San Diego County's most active private event markets — a coastal city with the residential density, the corporate corridor, and the vacation rental inventory that private hibachi was built to serve.`,
    middle:   (city, state) => `The chef arrives fully self-contained — propane teppan grill, all proteins, complete ingredients, and all equipment. For groups of 25–60, dual stations keep everyone eating and engaging at the same time. Professional setup, 90–120 minute live performance, complete cleanup.`,
    closing:  (city, state) => `Most Carlsbad corporate and backyard event quotes are returned same day — submit your date and address for an immediate response.`,
  },
  // ── Batch 4 ────────────────────────────────────────────────────────────────
  // 604 — Atherton
  {
    headline: (city, state) => `Private Hibachi Chef in Atherton: Atherton Estate Dinners, Linfield Oaks Luxury Events and Silicon Valley Corridor Private Celebrations`,
    opening:  (city, state) => `An Atherton estate anniversary dinner for sixteen guests on a private terrace behind a hedge-lined gate on a road with no sidewalks and no signage, where the properties are measured in acres and the private format is the only format that matches the setting — a certified teppanyaki chef arrives at your Atherton estate with a fully self-contained propane teppan grill, premium proteins as the baseline expectation, and a performance that transforms your outdoor terrace or pool deck into the finest private dining room in the Bay Area for the evening. Atherton is California's most expensive residential zip code — a community of estate properties, gated enclaves, and a private entertaining tradition that has been built around the premise that the property is already the most extraordinary venue available, and the occasion that happens there should match it. Linfield Oaks, the Fair Oaks area, Felton Gables, and the private roads of central Atherton have collectively hosted more landmark estate events than any comparable residential community in Northern California.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, filet mignon and lobster tail as standard upgrade options, Chilean sea bass, wagyu available on request, fried rice, vegetables, miso soup, salad, house-made ginger, yum yum, and teriyaki sauces, and all plates and utensils. For estate events of 20–40, dual stations ensure everyone eats at the same time. Complete setup in 20–30 minutes. Live teppanyaki performance for 90–120 minutes. Full cleanup when dinner ends — your estate is exactly as it was when the chef arrived.`,
    closing:  (city, state) => `Atherton estate event quotes are returned same day — submit your date and estate address and we respond immediately.`,
  },
  // 605 — Palo Alto
  {
    headline: (city, state) => `Private Hibachi Chef in Palo Alto: Old Palo Alto Estate Dinners, Stanford Corridor Luxury Events and Crescent Park Milestone Celebrations`,
    opening:  (city, state) => `Old Palo Alto anniversary estate dinner for twenty guests on a private terrace on a tree-lined street where professors, CEOs, and retired founders have been hosting private dinners at the highest level for forty years, Crescent Park-area milestone birthday celebration at a property that has been in the same family since before the technology industry that surrounds it existed, Stanford Oval-adjacent executive home client appreciation dinner for eighteen guests where the format is the one that consistently produces something genuinely memorable rather than simply expensive, and South Palo Alto neighborhood backyard milestone parties where the occasion belongs at the property rather than at a University Avenue restaurant that everyone in the group has already visited a dozen times — a certified teppanyaki chef arrives at your Palo Alto estate or home with a fully self-contained propane teppan grill and premium proteins as the expectation. Palo Alto is one of California's most distinguished residential communities — a university town with estate properties, a private entertaining tradition built by generations of Stanford faculty and Silicon Valley executives, and a cultural standard for private dining that demands more than a restaurant booking.`,
    middle:   (city, state) => `The chef arrives with the propane teppan grill, filet mignon and lobster tail available per guest, Chilean sea bass, wagyu on request, fried rice, vegetables, house-made sauces, and all equipment. For estate events of 16–40, dual stations available. Complete setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends.`,
    closing:  (city, state) => `Palo Alto estate event quotes are returned same day — submit your date and address and we respond immediately.`,
  },
  // 606 — Los Gatos
  {
    headline: (city, state) => `Hibachi Catering in Los Gatos: Los Gatos Village Estate Dinners, Silicon Valley Executive Events and Santa Cruz Mountains Backyard Celebrations`,
    opening:  (city, state) => `Los Gatos Village estate anniversary dinner for eighteen guests, Silicon Valley executive home milestone birthday at a property above the tree line with views of the South Bay, Almaden-adjacent company CEO appreciation dinner for twenty-four guests where the format outperforms every private dining room the executive has ever used for the same purpose, and Santa Cruz Mountains vacation property gatherings where the setting is already extraordinary and the occasion needs to match it — a certified teppanyaki chef travels to your Los Gatos home or venue with a fully self-contained propane teppan grill and delivers the live performance that makes any occasion genuinely memorable. Los Gatos is one of Silicon Valley's most appealing residential communities — a small town with estate properties above the foothills, a Main Street village culture that draws Bay Area families and executives who want the quality of Atherton and Saratoga without the formality, and a private event market that spans the corporate milestone calendar and the personal occasion calendar in equal measure.`,
    middle:   (city, state) => `The chef arrives with the propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. For groups of 20–50, dual stations available. No gas hookup required. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Los Gatos estate and Silicon Valley event quotes are returned same day — submit your date and address for an immediate response.`,
  },
  // 607 — San Francisco
  {
    headline: (city, state) => `Hibachi Catering in San Francisco: SOMA Tech Corporate Events, Pacific Heights Estate Dinners and Bay Area Team Celebration Parties`,
    opening:  (city, state) => `San Francisco's technology industry, its venture capital ecosystem, its startup culture, its established corporate market, and its residential neighborhoods of Pacific Heights estates, Marina District Victorian homes, and Noe Valley backyard properties — a certified teppanyaki chef travels to your San Francisco venue or executive home with a fully self-contained propane teppan grill and delivers the live performance that transforms any team event from a routine dinner into a genuinely memorable occasion. The Bay Area has hosted every conceivable format for team entertainment: restaurant buyouts, rooftop cocktail receptions, corporate catering, private dining room events. Private hibachi is the format that consistently generates something none of those alternatives can produce — a shared, live-fire experience at the same table where every person present participates in the same thing simultaneously and no one checks their phone for the duration.`,
    middle:   (city, state) => `The chef arrives fully self-contained — propane teppan grill, all proteins, complete ingredients, and all equipment. No gas hookup required at any San Francisco venue, rooftop, or residential property. For corporate groups of 25–60, dual stations keep everyone eating and engaging at the same time. Professional setup, 90–120 minute live performance, complete cleanup.`,
    closing:  (city, state) => `Most San Francisco corporate and Bay Area event quotes are returned same day — submit your date and venue address for an immediate response.`,
  },
  // 608 — San Jose
  {
    headline: (city, state) => `Hibachi Catering in San Jose: Silicon Valley Corporate Events, Willow Glen Estate Dinners and Almaden Valley Backyard Celebration Parties`,
    opening:  (city, state) => `San Jose's technology industry — the software companies, semiconductor firms, venture-backed startups, and established tech corporations that have made the city the capital of Silicon Valley for six decades — a certified teppanyaki chef travels to your San Jose venue or residential property with a fully self-contained propane teppan grill and delivers the live performance that transforms a team event from an obligation on the company calendar into a genuinely memorable occasion. San Jose's private event market spans two distinct hemispheres: the corporate tech corridor from North San Jose to the Almaden Valley, where companies large and small book team events that justify the investment in employee engagement, and the residential markets of Willow Glen estate properties, Almaden Valley backyard celebrations, and Evergreen Hills milestone dinners, where private hibachi consistently outperforms every format a Bay Area family has tried before it.`,
    middle:   (city, state) => `The chef arrives fully self-contained — propane teppan grill, all proteins, complete ingredients, and all equipment. For corporate groups and residential events of 25–60, dual stations keep everyone eating and engaging at the same time. Professional setup, 90–120 minute live performance, complete cleanup.`,
    closing:  (city, state) => `Most San Jose corporate and Silicon Valley event quotes are returned same day — submit your date and venue address for an immediate response.`,
  },
  // ── Batch 5 ────────────────────────────────────────────────────────────────
  // 609 — Napa
  {
    headline: (city, state) => `Hibachi at Home in Napa: Napa Valley Vineyard Estate Dinners, Downtown Napa Luxury Events and Wine Country Vacation Rental Celebration Parties`,
    opening:  (city, state) => `A Napa Valley vineyard estate anniversary dinner for twenty guests at a property in the Silverado Trail corridor, where the chef sets up on a stone terrace between the barrel room and the vine rows and the evening becomes genuinely extraordinary without requiring anything beyond the property and the occasion — a private hibachi chef arrives at your Napa Valley estate, vacation rental, or residential property with a fully self-contained propane teppan grill and makes the evening match the setting that already exists. Napa is one of California's most extraordinary destination communities — a wine country estate market with vineyard properties, vacation rental compounds, and a tradition of destination private entertaining that draws families from across the country for milestone events that need to happen in the most beautiful setting California offers.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins including premium upgrades, fried rice, vegetables, miso soup, salad, house-made sauces, and complete equipment. No gas hookup required at any Napa Valley vineyard estate, vacation rental, or residential property. For events of 16–45, dual stations available. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends.`,
    closing:  (city, state) => `Napa Valley harvest season and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 610 — Healdsburg
  {
    headline: (city, state) => `Hibachi at Home in Healdsburg: Dry Creek Valley Vineyard Estate Dinners, Downtown Healdsburg Luxury Events and Russian River Wine Country Celebrations`,
    opening:  (city, state) => `Dry Creek Valley vineyard estate anniversary dinner for sixteen guests at a property above the valley floor, Alexander Valley vacation rental gathering for twenty-two guests celebrating a milestone birthday weekend in the wine country, downtown Healdsburg-adjacent residential milestone event at a property within walking distance of the plaza, and Russian River Valley-area estate gatherings where the occasion calls for something that matches the extraordinary character of one of California's most beloved small wine country towns — a private hibachi chef arrives at your Healdsburg property with the full self-contained setup and makes the evening match the place. Healdsburg is Sonoma County's most celebrated wine country village — a small town of vineyard properties, luxury vacation rentals, Michelin-starred restaurants, and a private entertaining culture that has been built around the premise that the property and the occasion belong together and no restaurant, however excellent, replicates what a private chef at a Dry Creek estate actually delivers.`,
    middle:   (city, state) => `The chef brings the propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Healdsburg property, vineyard estate, or vacation rental. For events of 14–40, dual stations available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Healdsburg harvest season and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 611 — Sonoma
  {
    headline: (city, state) => `Hibachi at Home in Sonoma: Sonoma Plaza Estate Dinners, Carneros Vineyard Luxury Events and Sonoma Valley Wine Country Celebration Parties`,
    opening:  (city, state) => `Sonoma Plaza estate anniversary dinner for eighteen guests at a historic property within walking distance of the Mission, Carneros vineyard vacation rental gathering for twenty-four guests celebrating a milestone anniversary at a property overlooking the bay-fog-cooled southern end of the valley, Sonoma Valley backyard graduation dinner at a residential property in the Sonoma hills, and destination milestone events where families drive from the Bay Area, Sacramento, and Los Angeles for the weekend specifically because Sonoma is the kind of place where a private hibachi chef and a vineyard estate produce an evening that everyone at the table still describes to people six months later — a private hibachi chef arrives at your Sonoma property with the full self-contained setup and makes the occasion match the setting. Sonoma is one of California's most historic wine country towns — a community of vineyard properties, plaza-adjacent estate homes, and a tradition of private outdoor entertaining that is uniquely suited to the format.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Sonoma property, vineyard estate, or vacation rental. For events of 14–40, dual stations available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Sonoma harvest season and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 612 — Folsom
  {
    headline: (city, state) => `Hibachi at Home in Folsom: Folsom Ranch Estate Dinners, Lakefront Backyard Events and Sacramento Foothill Community Celebration Parties`,
    opening:  (city, state) => `Folsom Ranch estate anniversary dinner for twenty-two guests, Lakefront community backyard graduation party for thirty-eight family members on a June Saturday when every Folsom restaurant has been committed to someone else's celebration since April, Broadstone corridor neighborhood milestone birthday celebration, Empire Ranch community event at a property with views of the Sierra Nevada foothills, and Folsom Lake-adjacent vacation home gatherings where the occasion belongs at the property rather than at a Sacramento restaurant on the other side of the freeway — a certified teppanyaki chef arrives at your Folsom home with a fully self-contained propane teppan grill and delivers the live performance that makes any occasion genuinely memorable. Folsom is one of Sacramento's most desirable foothill communities — a city of estate neighborhoods, lakefront properties, and an outdoor entertaining culture built around some of the finest residential backyards in Northern California.`,
    middle:   (city, state) => `The chef arrives with the propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. For graduation parties and events of 25–55, dual stations are available. No gas hookup required at any Folsom property. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Folsom graduation season and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 613 — Granite Bay
  {
    headline: (city, state) => `Hibachi at Home in Granite Bay: Granite Bay Estates Dinners, Douglas Boulevard Backyard Events and Sacramento Premium Suburb Celebration Parties`,
    opening:  (city, state) => `Granite Bay Estates anniversary dinner for twenty guests on a private terrace in one of Sacramento's most exclusive residential communities, Douglas Boulevard-area backyard graduation party for forty family members on a May Saturday when the Folsom and Granite Bay restaurant corridor has been fully committed for weeks, Barton Road neighborhood milestone birthday celebration, Whitney Ranch-adjacent community gatherings, and Sierra Nevada foothill-view estate events where the property is already extraordinary and the occasion needs to match it — a certified teppanyaki chef arrives at your Granite Bay home with a fully self-contained propane teppan grill and delivers the live performance that makes any occasion genuinely memorable. Granite Bay is one of Sacramento's most prestigious residential communities — a foothill city of estate properties, lakefront homes on Folsom Lake, and a private entertaining culture built around the finest backyards in Placer County.`,
    middle:   (city, state) => `The chef arrives with the propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. For events of 20–55, dual stations are available. No gas hookup required at any Granite Bay property. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Granite Bay estate and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // ── Batch 6 ────────────────────────────────────────────────────────────────
  // 614 — Santa Barbara
  {
    headline: (city, state) => `Hibachi at Home in Santa Barbara: Montecito Estate Dinners, Hope Ranch Luxury Events and Santa Barbara Riviera Coastal Celebration Parties`,
    opening:  (city, state) => `Montecito estate anniversary dinner for eighteen guests on a private terrace at a property above the Pacific, Hope Ranch-area luxury backyard celebration for twenty-two guests on a June Saturday when every Santa Barbara restaurant has been committed for months, Santa Barbara Riviera home gathering at a property with ocean views and an outdoor terrace that already functions as the finest private dining room in the area, and Summerland-adjacent vacation rental events where families have driven from Los Angeles for the weekend and the hibachi chef is the occasion that keeps the whole group at the property all evening — a private hibachi chef arrives at your Santa Barbara or Montecito property with the full self-contained setup and makes the evening match the extraordinary character of one of California's most beloved coastal communities. Santa Barbara is both a luxury residential market in the Montecito and Hope Ranch tradition and a destination that draws travelers from across the country for milestone celebrations — and private hibachi serves both of those markets at the same high level.`,
    middle:   (city, state) => `The chef brings the propane grill, filet mignon and lobster tail available per guest, fried rice, vegetables, house-made sauces, and all equipment. No gas hookup required at any Santa Barbara or Montecito property or coastal vacation rental. For events of 14–40, dual stations available. Setup in 20–30 minutes. Live performance for 90–120 minutes. Full cleanup when dinner ends.`,
    closing:  (city, state) => `Santa Barbara and Montecito estate and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 615 — San Luis Obispo
  {
    headline: (city, state) => `Hibachi at Home in San Luis Obispo: SLO Wine Country Estate Dinners, Cal Poly Graduation Weekend Events and Edna Valley Backyard Celebration Parties`,
    opening:  (city, state) => `San Luis Obispo wine country estate anniversary dinner for sixteen guests at an Edna Valley-area property, Cal Poly graduation weekend family dinner for twenty-four guests when every restaurant in SLO has been committed for six weeks and out-of-state families need a format that works for the full group at the same table, downtown SLO-adjacent milestone birthday at a residential property within the Bungalow neighborhood, and Paso Robles-corridor vacation rental events for wine country destination weekenders from the Bay Area and Los Angeles — a private hibachi chef arrives at your San Luis Obispo property with the full self-contained setup and makes the occasion match the character of one of California's most beloved mid-coast communities. San Luis Obispo is California's most livable city — a university town with wine country on its doorstep, an outdoor entertaining culture built around its residential neighborhoods and estate properties, and an event market that spans the Cal Poly graduation calendar and the year-round wine country destination season.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any SLO property or vacation rental. For events of 14–45, dual stations available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `San Luis Obispo Cal Poly graduation and peak summer dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 616 — Palm Springs
  {
    headline: (city, state) => `Mobile Hibachi in Palm Springs: Desert Vacation Rental Parties, Palm Canyon Drive Home Events and Coachella Valley Backyard Celebration Dinners`,
    opening:  (city, state) => `Palm Springs vacation rental anniversary party for twenty guests at a mid-century modern home with a pool and a mountain view that no restaurant in the valley can replicate because the property is already the venue, Coachella Valley destination birthday weekend for twenty-eight guests who flew in from three cities and need a format that keeps everyone at the property all evening rather than competing for reservations at the Indian Canyon restaurant corridor on a Friday night, and Palm Canyon Drive-adjacent residential milestone event where the chef sets up by the pool and the evening unfolds exactly the way the setting always suggested it could — a certified teppanyaki chef travels to your Palm Springs vacation rental or home with a fully self-contained propane teppan grill and delivers the live performance that makes any occasion genuinely memorable. Palm Springs is California's premier desert vacation destination — a city of mid-century estate properties, iconic vacation rental inventory, pool culture, and a destination event tradition that private hibachi was built for.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. For groups of 20–50, dual stations are available. No gas hookup required at any Palm Springs vacation rental or residential property. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Palm Springs peak season and Coachella Valley event dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 617 — Palm Desert
  {
    headline: (city, state) => `Backyard Hibachi in Palm Desert: Ironwood Country Club-Area Estate Dinners, El Paseo Corridor Luxury Events and Desert Backyard Celebration Parties`,
    opening:  (city, state) => `Palm Desert estate anniversary dinner for twenty guests at an Ironwood Country Club-area property where the chef sets up on a covered patio with the Santa Rosa Mountains as the backdrop, El Paseo corridor luxury home milestone birthday for twenty-four guests in a neighborhood that has been the Coachella Valley's most prestigious residential address for forty years, Indian Ridge Country Club-area graduation backyard party for thirty-six family members when the desert restaurant circuit is committed and the occasion needs to stay at the property, and Bighorn-adjacent vacation home events where the group has been coming to the valley for years and the private chef format is the occasion that finally matches the setting — a private hibachi chef arrives at your Palm Desert home with everything included so you're at the event instead of managing it. Palm Desert is the Coachella Valley's most established luxury residential community — a desert city with estate properties, country club enclaves, and a private entertaining culture that private hibachi was built to serve.`,
    middle:   (city, state) => `The chef arrives with the propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. For events of 20–50, dual stations are available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Palm Desert estate and peak desert season dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 618 — South Lake Tahoe
  {
    headline: (city, state) => `Mobile Hibachi in South Lake Tahoe: Lake Tahoe Vacation Rental Parties, Cabin Backyard Events and Sierra Nevada Destination Celebration Dinners`,
    opening:  (city, state) => `South Lake Tahoe vacation rental anniversary party for twenty-two guests at a lakefront cabin where the chef sets up on the deck as the sun drops behind the Sierra Nevada, Heavenly Village-area destination birthday weekend for thirty guests who flew in from California, Nevada, and the Pacific Northwest for the occasion, and King's Beach-adjacent cabin backyard events for families who have been coming to the Lake Tahoe basin for thirty years and have finally found the format that keeps everyone at the property for the whole evening rather than splitting across the South Shore restaurant corridor that every person in the group already knows — a certified teppanyaki chef travels to your South Lake Tahoe vacation rental or cabin with a fully self-contained propane teppan grill and delivers the live performance that makes any mountain occasion genuinely extraordinary. South Lake Tahoe is California's preeminent mountain destination — a Sierra Nevada lake city with the vacation rental inventory, the outdoor property culture, and the destination gathering tradition that private hibachi was designed to serve.`,
    middle:   (city, state) => `Your chef brings the self-contained propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. For groups of 20–50, dual stations are available. No gas hookup required at any Tahoe cabin, vacation rental, or residential property. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `South Lake Tahoe peak summer and ski season destination dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
  // 619 — Truckee
  {
    headline: (city, state) => `Hibachi at Home in Truckee: Tahoe Donner Estate Dinners, Northstar-Adjacent Vacation Rental Events and Sierra Nevada Backyard Celebration Parties`,
    opening:  (city, state) => `Tahoe Donner estate anniversary dinner for sixteen guests on a deck with Sierran granite and pine as the backdrop, Northstar-at-Tahoe-adjacent vacation rental gathering for twenty-four guests celebrating a milestone birthday weekend at a property that a Bay Area family has rented every summer for a decade, Old Town Truckee-adjacent residential milestone event at a craftsman-era home where the chef sets up in the backyard and the occasion unfolds exactly as the setting always suggested it could, and Glenshire-area cabin events for multigenerational families who drive up from Sacramento and the Bay Area specifically because Truckee is the kind of place where private hibachi and a mountain property produce an evening that every person at the table still describes to people six months later — a private hibachi chef arrives at your Truckee property with the full self-contained setup and makes the occasion match the character of one of California's most beloved Sierra Nevada communities. Truckee is a mountain destination town — a historic railroad city with timber-frame estate properties, an active vacation rental market, and an outdoor entertaining tradition that private hibachi was built to complement.`,
    middle:   (city, state) => `Your chef brings the propane grill, all proteins including premium upgrades, fried rice, vegetables, house-made sauces, and complete equipment. No gas hookup required at any Truckee property, vacation rental, or cabin. For events of 14–40, dual stations available. Complete setup, full performance, full cleanup.`,
    closing:  (city, state) => `Truckee destination and peak mountain season dates fill 3–5 weeks ahead — submit your date now for a same-day quote.`,
  },
]

// ─── Generic Closing Variants (T0–T5, indices 582–587) ────────────────────────
export const CA_CLOSING_VARIANTS = [
  // 582 — T0
  { headline: (city) => `Book Your ${city} Estate Hibachi Event`, sub: (city) => `Luxury estate dinners, milestone anniversary events, and celebrity-corridor private dining in ${city} — same-day quotes for any estate address.`, urgency: 'Beverly Hills, Malibu, and Calabasas estate dates fill 4–6 weeks ahead in peak season. Lock your date with a deposit.', cta: { label: 'Reserve Your Estate Date', caption: 'Premium proteins · Full setup included' } },
  // 583 — T1
  { headline: (city) => `Book Your ${city} Coastal Event`, sub: (city) => `Beachfront estate dinners, coastal property anniversary events, and ocean-view milestone celebrations in ${city} — same-day quotes for any coastal address.`, urgency: 'Coastal California peak season and summer dates fill 4–6 weeks ahead. Reserve yours now.', cta: { label: 'Reserve Your Coastal Date', caption: 'Premium proteins · Full setup included' } },
  // 584 — T2
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Beach parties, vacation rental dinners, and backyard celebrations in ${city} — same-day quotes for any date.`, urgency: 'Peak summer and holiday weekend dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Date', caption: 'From $60/adult · Peak season books fast' } },
  // 585 — T3
  { headline: (city) => `Book Your ${city} Corporate Event`, sub: (city) => `Tech team dinners, client appreciation events, and company milestones in ${city} — same-day quotes for any corporate date.`, urgency: 'California tech corporate season and Q4 holiday events fill 3–4 weeks ahead. Reserve now with a deposit.', cta: { label: 'Request a Corporate Quote', caption: 'Groups 8–60+ · From $60/adult' } },
  // 586 — T4
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Wine country estate dinners, vineyard celebration events, and vacation property gatherings in ${city} — same-day quotes for any date.`, urgency: 'Wine country peak harvest season and summer dates fill 3–5 weeks ahead. Reserve your date now.', cta: { label: 'Reserve Your Date', caption: 'From $60/adult · Peak season books fast' } },
  // 587 — T5
  { headline: (city) => `Book Your ${city} Hibachi Event`, sub: (city) => `Estate anniversary dinners, graduation parties, corporate team events, and milestone celebrations in ${city} — same-day quotes for any date.`, urgency: 'Peak summer and graduation season dates fill 3–5 weeks ahead. Lock your date with a deposit.', cta: { label: 'Book Your Date', caption: 'From $60/adult · Same-day quotes' } },
]

// ─── City-Specific Closings (Batch 1, indices 588–593) ────────────────────────
export const CA_CITY_CLOSINGS = [
  // 588 — Beverly Hills
  { headline: (city) => `Book Your Beverly Hills Estate Event`, sub: (city) => `Rodeo Drive corridor estate dinners, Bel Air luxury events, and North Beverly Hills milestone celebrations — same-day quotes for any Beverly Hills address.`, urgency: 'Beverly Hills estate dates fill 4–6 weeks ahead in peak season. Reserve yours now with a deposit.', cta: { label: 'Reserve Your Beverly Hills Date', caption: 'Premium proteins · Full estate setup' } },
  // 589 — Malibu
  { headline: (city) => `Book Your Malibu Estate Event`, sub: (city) => `Carbon Beach estate dinners, PCH property anniversary events, and Malibu Colony celebration parties — most Malibu quotes returned same day.`, urgency: 'Malibu coastal estate and summer peak dates fill 4–6 weeks ahead. Reserve yours now.', cta: { label: 'Reserve Your Malibu Date', caption: 'Coastal estates · Premium proteins' } },
  // 590 — Santa Monica
  { headline: (city) => `Book Your Santa Monica Hibachi Event`, sub: (city) => `Ocean Park backyard parties, Palisades estate events, and vacation rental celebration dinners — same-day quotes for any Santa Monica date.`, urgency: 'Santa Monica summer and graduation season dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Santa Monica Date', caption: 'From $60/adult · Same-day quotes' } },
  // 591 — Calabasas
  { headline: (city) => `Book Your Calabasas Estate Event`, sub: (city) => `The Oaks estate dinners, Calabasas Estates luxury events, and Las Virgenes corridor celebrations — same-day quotes for any Calabasas address.`, urgency: 'Calabasas gated community and estate dates fill 4–6 weeks ahead in peak season. Reserve yours now.', cta: { label: 'Reserve Your Calabasas Date', caption: 'Premium proteins · Full estate setup' } },
  // 592 — Manhattan Beach
  { headline: (city) => `Book Your Manhattan Beach Hibachi Event`, sub: (city) => `The Strand estate dinners, Tree Section graduation parties, and South Bay family celebrations — same-day quotes for any Manhattan Beach date.`, urgency: 'South Bay graduation Saturdays in May and June fill 4–6 weeks ahead. Submit your Manhattan Beach date now.', cta: { label: 'Book Your Manhattan Beach Date', caption: 'From $60/adult · Graduation books fast' } },
  // 593 — Pasadena
  { headline: (city) => `Book Your Pasadena Hibachi Event`, sub: (city) => `Rose Bowl corridor estate events, San Rafael Hills graduation parties, and Old Pasadena milestone celebrations — same-day quotes for any Pasadena date.`, urgency: 'Pasadena graduation Saturdays in May and June book 4–6 weeks ahead. Submit your date now.', cta: { label: 'Book Your Pasadena Date', caption: 'From $60/adult · Graduation season books fast' } },
  // ── Batch 2 ────────────────────────────────────────────────────────────────
  // 594 — Newport Beach
  { headline: (city) => `Book Your Newport Beach Estate Event`, sub: (city) => `Balboa Island estate dinners, Corona del Mar luxury events, and Harbor Island celebration parties — same-day quotes for any Newport Beach address.`, urgency: 'Newport Beach estate and peak summer dates fill 4–6 weeks ahead. Reserve yours now with a deposit.', cta: { label: 'Reserve Your Newport Beach Date', caption: 'Premium proteins · Coastal estates' } },
  // 595 — Laguna Beach
  { headline: (city) => `Book Your Laguna Beach Estate Event`, sub: (city) => `Arch Beach Heights bluff estate dinners, Canyon Road milestone events, and Laguna arts colony celebrations — same-day quotes for any Laguna Beach address.`, urgency: 'Laguna Beach estate and peak summer dates fill 4–6 weeks ahead. Reserve yours now with a deposit.', cta: { label: 'Reserve Your Laguna Beach Date', caption: 'Coastal estates · Premium proteins' } },
  // 596 — Irvine
  { headline: (city) => `Book Your Irvine Corporate Event`, sub: (city) => `Irvine Company campus events, UCI graduation dinners, and Great Park-area team celebrations — same-day quotes for any Irvine date.`, urgency: 'Irvine corporate season and UCI graduation dates fill 3–5 weeks ahead. Reserve your Irvine date now.', cta: { label: 'Request an Irvine Quote', caption: 'Corporate packages · From $60/adult' } },
  // 597 — Huntington Beach
  { headline: (city) => `Book Your Huntington Beach Hibachi Event`, sub: (city) => `Surf City beach house events, PCH vacation rental parties, and HB backyard celebrations — same-day quotes for any Huntington Beach date.`, urgency: 'Peak summer and graduation season dates in Huntington Beach fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your HB Date', caption: 'From $60/adult · Peak season books fast' } },
  // 598 — Dana Point
  { headline: (city) => `Book Your Dana Point Hibachi Event`, sub: (city) => `Monarch Beach estate dinners, Dana Point Harbor events, and Lantern District celebration parties — same-day quotes for any Dana Point date.`, urgency: 'Dana Point estate and peak summer dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Dana Point Date', caption: 'From $60/adult · OC coastal events' } },
  // ── Batch 3 ────────────────────────────────────────────────────────────────
  // 599 — La Jolla
  { headline: (city) => `Book Your La Jolla Estate Event`, sub: (city) => `La Jolla Cove bluff estate dinners, Torrey Pines-adjacent luxury events, and Bird Rock coastal celebrations — same-day quotes for any La Jolla address.`, urgency: 'La Jolla estate and peak summer dates fill 3–5 weeks ahead. Reserve yours now with a deposit.', cta: { label: 'Reserve Your La Jolla Date', caption: 'Coastal estates · Premium proteins' } },
  // 600 — Coronado
  { headline: (city) => `Book Your Coronado Island Event`, sub: (city) => `Ocean Boulevard estate dinners, Glorietta Bay-front milestone events, and Hotel Del-adjacent island celebrations — same-day quotes for any Coronado date.`, urgency: 'Coronado island estate and summer dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Coronado Date', caption: 'Island estates · From $60/adult' } },
  // 601 — Del Mar
  { headline: (city) => `Book Your Del Mar Hibachi Event`, sub: (city) => `Stratford Court estate dinners, racetrack-area milestone events, and 15th Street coastal celebrations — same-day quotes for any Del Mar date.`, urgency: 'Del Mar racing season and peak summer dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Del Mar Date', caption: 'From $60/adult · Coastal estate events' } },
  // 602 — Rancho Santa Fe
  { headline: (city) => `Book Your Rancho Santa Fe Estate Event`, sub: (city) => `The Covenant estate dinners, Rancho Santa Fe luxury compound events, and San Dieguito Road milestone celebrations — same-day quotes for any RSF address.`, urgency: 'Rancho Santa Fe estate dates fill 4–6 weeks ahead in peak season. Reserve yours now with a deposit.', cta: { label: 'Reserve Your RSF Date', caption: 'Premium proteins · Full estate setup' } },
  // 603 — Carlsbad
  { headline: (city) => `Book Your Carlsbad Hibachi Event`, sub: (city) => `Carlsbad Village corporate events, La Costa-area team dinners, and Aviara backyard celebrations — same-day quotes for any Carlsbad date.`, urgency: 'Carlsbad corporate season and graduation dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Carlsbad Date', caption: 'From $60/adult · North SD coastal events' } },
  // ── Batch 4 ────────────────────────────────────────────────────────────────
  // 604 — Atherton
  { headline: (city) => `Book Your Atherton Estate Event`, sub: (city) => `Atherton estate dinners, Linfield Oaks luxury events, and Silicon Valley corridor milestone celebrations — same-day quotes for any Atherton estate address.`, urgency: 'Atherton estate dates fill 4–6 weeks ahead in peak season. Reserve yours now with a deposit.', cta: { label: 'Reserve Your Atherton Date', caption: 'Premium proteins · Full estate setup' } },
  // 605 — Palo Alto
  { headline: (city) => `Book Your Palo Alto Estate Event`, sub: (city) => `Old Palo Alto estate dinners, Stanford corridor luxury events, and Crescent Park milestone celebrations — same-day quotes for any Palo Alto address.`, urgency: 'Palo Alto estate and Silicon Valley event dates fill 4–6 weeks ahead. Reserve yours now.', cta: { label: 'Reserve Your Palo Alto Date', caption: 'Premium proteins · Full estate setup' } },
  // 606 — Los Gatos
  { headline: (city) => `Book Your Los Gatos Hibachi Event`, sub: (city) => `Los Gatos Village estate dinners, Silicon Valley executive events, and Santa Cruz Mountains backyard celebrations — same-day quotes for any Los Gatos date.`, urgency: 'Los Gatos estate and peak season dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Los Gatos Date', caption: 'From $60/adult · Silicon Valley events' } },
  // 607 — San Francisco
  { headline: (city) => `Book Your San Francisco Corporate Event`, sub: (city) => `SOMA tech team dinners, Pacific Heights estate events, and Bay Area corporate celebrations — same-day quotes for any San Francisco date.`, urgency: 'San Francisco corporate season and Bay Area event dates fill 3–5 weeks ahead. Reserve now.', cta: { label: 'Request a SF Quote', caption: 'Corporate packages · From $60/adult' } },
  // 608 — San Jose
  { headline: (city) => `Book Your San Jose Corporate Event`, sub: (city) => `Silicon Valley tech team events, Willow Glen estate dinners, and Almaden Valley backyard celebrations — same-day quotes for any San Jose date.`, urgency: 'San Jose corporate season and tech event dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Request a San Jose Quote', caption: 'Corporate packages · From $60/adult' } },
  // ── Batch 5 ────────────────────────────────────────────────────────────────
  // 609 — Napa
  { headline: (city) => `Book Your Napa Valley Hibachi Event`, sub: (city) => `Napa Valley vineyard estate dinners, downtown Napa luxury events, and wine country vacation rental celebrations — same-day quotes for any Napa date.`, urgency: 'Napa Valley harvest season and peak summer dates fill 3–5 weeks ahead. Reserve your date now.', cta: { label: 'Reserve Your Napa Date', caption: 'Vineyard estates · From $60/adult' } },
  // 610 — Healdsburg
  { headline: (city) => `Book Your Healdsburg Wine Country Event`, sub: (city) => `Dry Creek Valley vineyard estate dinners, downtown Healdsburg luxury events, and Russian River wine country celebrations — same-day quotes for any Healdsburg date.`, urgency: 'Healdsburg harvest season and peak summer dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Healdsburg Date', caption: 'Vineyard estates · From $60/adult' } },
  // 611 — Sonoma
  { headline: (city) => `Book Your Sonoma Wine Country Event`, sub: (city) => `Sonoma Plaza estate dinners, Carneros vineyard luxury events, and Sonoma Valley wine country celebration parties — same-day quotes for any Sonoma date.`, urgency: 'Sonoma harvest season and peak summer dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Sonoma Date', caption: 'From $60/adult · Peak harvest books fast' } },
  // 612 — Folsom
  { headline: (city) => `Book Your Folsom Hibachi Event`, sub: (city) => `Folsom Ranch estate dinners, Lakefront backyard graduation parties, and foothill community milestone celebrations — same-day quotes for any Folsom date.`, urgency: 'Folsom graduation season and peak summer dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Folsom Date', caption: 'From $60/adult · Same-day quotes' } },
  // 613 — Granite Bay
  { headline: (city) => `Book Your Granite Bay Hibachi Event`, sub: (city) => `Granite Bay Estates dinners, Douglas Boulevard backyard events, and Sacramento foothill milestone celebrations — same-day quotes for any Granite Bay date.`, urgency: 'Granite Bay estate and peak summer dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Granite Bay Date', caption: 'From $60/adult · Same-day quotes' } },
  // ── Batch 6 ────────────────────────────────────────────────────────────────
  // 614 — Santa Barbara
  { headline: (city) => `Book Your Santa Barbara Hibachi Event`, sub: (city) => `Montecito estate dinners, Hope Ranch luxury events, and Santa Barbara Riviera coastal celebrations — same-day quotes for any Santa Barbara or Montecito date.`, urgency: 'Santa Barbara and Montecito estate and summer dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your SB Date', caption: 'Coastal estates · From $60/adult' } },
  // 615 — San Luis Obispo
  { headline: (city) => `Book Your San Luis Obispo Hibachi Event`, sub: (city) => `SLO wine country estate dinners, Cal Poly graduation events, and Edna Valley backyard celebrations — same-day quotes for any SLO date.`, urgency: 'Cal Poly graduation and peak summer dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your SLO Date', caption: 'From $60/adult · Same-day quotes' } },
  // 616 — Palm Springs
  { headline: (city) => `Book Your Palm Springs Hibachi Event`, sub: (city) => `Desert vacation rental parties, Palm Canyon-area home events, and Coachella Valley backyard celebrations — same-day quotes for any Palm Springs date.`, urgency: 'Palm Springs peak season and festival dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Palm Springs Date', caption: 'From $60/adult · Peak season books fast' } },
  // 617 — Palm Desert
  { headline: (city) => `Book Your Palm Desert Hibachi Event`, sub: (city) => `Ironwood Country Club-area estate dinners, El Paseo luxury events, and desert backyard celebrations — same-day quotes for any Palm Desert date.`, urgency: 'Palm Desert estate and desert season dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Palm Desert Date', caption: 'From $60/adult · Desert luxury events' } },
  // 618 — South Lake Tahoe
  { headline: (city) => `Book Your Lake Tahoe Hibachi Event`, sub: (city) => `Lakefront vacation rental parties, cabin backyard events, and Sierra Nevada destination celebration dinners — same-day quotes for any South Lake Tahoe date.`, urgency: 'Lake Tahoe peak summer and ski season dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Tahoe Date', caption: 'From $60/adult · Peak season books fast' } },
  // 619 — Truckee
  { headline: (city) => `Book Your Truckee Hibachi Event`, sub: (city) => `Tahoe Donner estate dinners, Northstar-adjacent vacation rental events, and Sierra Nevada backyard celebrations — same-day quotes for any Truckee date.`, urgency: 'Truckee peak mountain season and destination dates fill 3–5 weeks ahead. Submit your date now.', cta: { label: 'Book Your Truckee Date', caption: 'From $60/adult · Mountain vacation events' } },
]

// ─── Testimonials (Batch 1) ────────────────────────────────────────────────────
const CA_TESTIMONIALS = {
  // ── Batch 6 ───────────────────────────────────────────────────────────────────
  'santa-barbara': [
    { name: 'Alexandra M.', text: 'Anniversary estate dinner at our Montecito property — 16 guests on our west terrace above the Pacific. We\'ve entertained at this home for thirteen years and this was the first format that genuinely matched what the property and the occasion called for. The chef set up in 25 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes, and left the terrace exactly as it was. Our guests included people who attend private events at this level from Napa to Amalfi, and every person said this was among the finest private dinners they\'d attended anywhere. Already planned for our next milestone at this property.', location: 'Santa Barbara, CA', rating: 5, event: 'Anniversary Montecito Estate Dinner' },
    { name: 'William T.', text: 'Hope Ranch anniversary celebration — 20 guests in our garden. We live in one of Santa Barbara\'s most beautiful neighborhoods and host often, but this was the first evening where the format matched the property and the occasion simultaneously. The chef set up in 20 minutes, served filet mignon and Chilean sea bass across the full table, performed for 90 minutes, and left the garden spotless. Our neighbors have been asking for the contact information ever since the evening ended. Already planned for our next major occasion.', location: 'Santa Barbara, CA', rating: 5, event: 'Anniversary Garden Estate Dinner' },
    { name: 'Caroline B.', text: 'Destination family reunion at our Santa Barbara Riviera vacation rental — 26 guests from across the country. We needed a format that worked for a multigenerational group from 9 to 72 without restaurant logistics on a summer Saturday when every Santa Barbara table was committed weeks before. The hibachi chef solved everything: dual stations for the full group, fire tricks for every generation, premium proteins, and cleanup that left the property exactly as it was. Best family reunion format we\'ve used at any destination property.', location: 'Santa Barbara, CA', rating: 5, event: 'Family Reunion Destination Weekend' },
  ],
  'san-luis-obispo': [
    { name: 'Kathleen H.', text: 'Cal Poly graduation weekend dinner for our daughter — 28 family members at our Edna Valley-area rental. We had family flying in from four time zones and needed a format that worked without competing for SLO reservations on the most competitive dining weekend of the year. The hibachi chef solved every problem: arrived with everything, dual stations for the full group, performed for two hours with premium proteins throughout, and left the property exactly as it was. Every family member said it was the finest graduation dinner they\'d attended in twenty years of hosting them.', location: 'San Luis Obispo, CA', rating: 5, event: 'Cal Poly Graduation Family Dinner' },
    { name: 'Mark W.', text: 'Wine country anniversary dinner at our Edna Valley property — 18 guests. We\'ve been coming to the SLO wine country for twelve years and this was the first private event format that matched what the setting already is. The chef performed for 90 minutes with filet mignon and lobster tail across the full table, the fire tricks had even our most reserved guests completely engaged, and the cleanup left the property spotless. Our guests came from the Bay Area and Los Angeles specifically for the evening. Already planned for next year\'s milestone.', location: 'San Luis Obispo, CA', rating: 5, event: 'Wine Country Anniversary Dinner' },
    { name: 'Nicole C.', text: 'Downtown SLO milestone birthday at our Bungalow neighborhood home — 24 guests. We live year-round in San Luis Obispo and wanted a format that felt genuinely different from the restaurant circuit everyone in our group knows well. The hibachi chef delivered exactly that: interactive, live, extraordinary, and the kind of shared experience where every guest was at the same table all evening. Our guests are still describing it to people months later. Our new standard for milestone events at this home.', location: 'San Luis Obispo, CA', rating: 5, event: 'Milestone Birthday Party' },
  ],
  'palm-springs': [
    { name: 'Steven K.', text: 'Vacation rental birthday weekend at our Palm Canyon Drive property — 24 guests from Los Angeles and the Bay Area. We rented the house specifically for the occasion and the hibachi chef was the centerpiece event of the entire weekend. Chef arrived with everything, set up by the pool, performed for 90 minutes with fire tricks and premium proteins throughout, and left the property exactly as it was. The volcano over the pool in the desert air at sunset was the moment every guest described for the rest of the year. Perfect format for a Palm Springs mid-century vacation rental.', location: 'Palm Springs, CA', rating: 5, event: 'Birthday Vacation Rental Weekend' },
    { name: 'Jennifer R.', text: 'Anniversary celebration at our Indian Canyons-area home — 18 guests in our outdoor living space. We\'ve owned this property for eleven years and host regularly, but this was the first evening where every guest was completely engaged from start to finish. The chef set up by the pool, served filet mignon and lobster tail across the full table, performed for 90 minutes, and left everything spotless. Our guests came from three cities — everyone asked for the contact information before reaching the street. Already reserving the same format for our next milestone at this property.', location: 'Palm Springs, CA', rating: 5, event: 'Anniversary Celebration' },
    { name: 'David A.', text: 'Coachella Valley gathering at our vacation rental — 30 guests for a destination weekend reunion. We had guests driving from Los Angeles, San Diego, and Phoenix for the occasion and needed a format that kept everyone at the property all evening rather than competing for tables in downtown Palm Springs. The hibachi chef solved it completely: dual stations, fire tricks by the pool, premium proteins, and the kind of cleanup that left the rental exactly as it was. Best destination reunion format we\'ve used.', location: 'Palm Springs, CA', rating: 5, event: 'Destination Reunion Weekend' },
  ],
  'palm-desert': [
    { name: 'Margaret L.', text: 'Anniversary estate dinner at our Ironwood Country Club-area property — 18 guests on our covered patio. We\'ve been in the Coachella Valley for fourteen years and host regularly in this community, but this was the first format that matched the property and the occasion in the way I\'d always hoped something would. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes with the Santa Rosa Mountains as the backdrop, and left the patio exactly as it was. Our guests are still talking about it. Already planned for next year\'s milestone.', location: 'Palm Desert, CA', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Richard F.', text: 'Milestone birthday at our Indian Ridge-adjacent property — 24 guests. We live in one of Palm Desert\'s finest communities and have hosted many events here, but this was genuinely different from anything we\'d done before. The chef performed for 90 minutes with premium proteins throughout, fire tricks that had even our most reserved guests completely engaged, and the kind of cleanup that left the backyard spotless. The format everyone in our community has since asked us about. Our new standard for milestone events at this property.', location: 'Palm Desert, CA', rating: 5, event: 'Milestone Birthday Celebration' },
    { name: 'Susan J.', text: 'El Paseo-area graduation dinner for our granddaughter — 30 family members. We had family arriving from four states for the weekend and needed a format that worked for a large multigenerational group without competing for desert restaurant tables on a celebratory weekend. The hibachi chef solved every problem: dual stations, fire tricks for every age from 7 to 80, premium proteins, and cleanup that left the backyard exactly as it was. Best graduation event our family has hosted at any of our desert properties.', location: 'Palm Desert, CA', rating: 5, event: 'Graduation Family Dinner' },
  ],
  'south-lake-tahoe': [
    { name: 'Brian T.', text: 'Lake Tahoe vacation rental anniversary weekend — 20 guests at our Tahoe Keys property. We\'ve been coming to the South Shore for sixteen years and renting this house for a decade, and this was the first event format that matched what the property and the setting already are. The chef set up on our deck with the lake visible from every seat, served filet mignon and lobster tail across the full table, performed for 90 minutes as the sun set behind the Sierras, and left the deck exactly as it was. Our guests are still describing it to everyone they know. Already planning the same for next year.', location: 'South Lake Tahoe, CA', rating: 5, event: 'Anniversary Lake Tahoe Weekend' },
    { name: 'Lisa M.', text: 'Cabin birthday party at our South Shore property — 28 guests from California and Nevada. We needed a format that kept everyone at the cabin all evening instead of competing for Heavenly Village restaurant tables on a summer Saturday. The hibachi chef solved it completely: dual stations for the full group, fire tricks in the mountain air, premium proteins throughout, and cleanup that left the cabin spotless. Every guest said it was the finest Tahoe gathering they\'d attended. The only format we\'ll use for future milestone events at this property.', location: 'South Lake Tahoe, CA', rating: 5, event: 'Birthday Cabin Party' },
    { name: 'Eric W.', text: 'Sierra Nevada destination reunion at our vacation rental — 32 guests flying in from five states. We needed a format that worked for a large multigenerational group without scattering everyone across the South Shore restaurant circuit that the California people in the group already know. The hibachi chef solved every problem: dual stations, fire tricks for every age, premium proteins, and the kind of cleanup that left the property exactly as it was. Best mountain destination reunion format our extended family has ever used.', location: 'South Lake Tahoe, CA', rating: 5, event: 'Destination Family Reunion' },
  ],
  'truckee': [
    { name: 'Catherine L.', text: 'Tahoe Donner anniversary dinner at our property — 16 guests on our deck with the Sierras as the backdrop. We\'ve owned this home for eight years and host every summer, but this was the first format that matched the mountain setting and the occasion simultaneously. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes in the mountain air, and left the deck spotless. Our guests came from San Francisco and Sacramento specifically for the evening. Every person asked for the contact information before reaching the road. Already planned for next year\'s milestone.', location: 'Truckee, CA', rating: 5, event: 'Anniversary Mountain Estate Dinner' },
    { name: 'Andrew P.', text: 'Northstar-area vacation rental birthday weekend — 24 guests from the Bay Area and Sacramento. We rented the house for the occasion and the hibachi chef was the centerpiece event of the entire weekend. Chef arrived fully self-contained, performed for 90 minutes with premium proteins throughout, fire tricks in the mountain air, and left the property exactly as it was. The combination of Truckee mountain setting and live teppanyaki was the finest destination event format any of our guests had experienced. Our format for every future Truckee milestone gathering.', location: 'Truckee, CA', rating: 5, event: 'Birthday Destination Weekend' },
    { name: 'Nancy F.', text: 'Glenshire cabin gathering — 28 guests for a multigenerational family reunion at our Truckee property. We needed a format that worked for everyone from our 7-year-old grandchild to our 78-year-old parents without requiring restaurant logistics in a mountain town where every table books up weeks ahead. The hibachi chef solved every problem: dual stations, fire tricks for every age, premium proteins, and the kind of cleanup that left the cabin exactly as it was. Best family reunion format we\'ve used at any mountain property.', location: 'Truckee, CA', rating: 5, event: 'Multigenerational Family Reunion' },
  ],
  // ── Batch 5 ───────────────────────────────────────────────────────────────────
  'napa': [
    { name: 'Elizabeth W.', text: 'Vineyard anniversary dinner at our Silverado Trail estate — 18 guests on our stone terrace between the barrel room and the vine rows. We\'ve hosted private dinners at this property for eleven years and this was the finest format we\'ve used. The chef set up in 25 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes as the Napa Valley turned gold in the evening light, and left the terrace exactly as it was. Our guests came from San Francisco, Los Angeles, and New York — every person said it was the most extraordinary private dinner they\'d attended in California. We\'re already planning the same for our next milestone at this property.', location: 'Napa, CA', rating: 5, event: 'Vineyard Anniversary Estate Dinner' },
    { name: 'Thomas B.', text: 'Destination milestone birthday at our vacation rental in the Napa Valley — 24 guests from across the country. We rented the property specifically for the occasion and the hibachi chef was the centerpiece event of the entire weekend. Chef arrived fully self-contained, performed for 90 minutes with filet mignon and wagyu across the full table, and left the property exactly as it was. Fire tricks between the vine rows, premium proteins, and the kind of shared experience that had every guest at the same table all evening. Every person said it was the finest destination event they\'d attended.', location: 'Napa, CA', rating: 5, event: 'Destination Milestone Birthday' },
    { name: 'Caroline M.', text: 'Family reunion wine country weekend — 30 guests at our Carneros-area vacation property. We had family flying in from four time zones and needed a format that worked for everyone from 8 to 74 without requiring three separate restaurant reservations on a busy Napa Saturday. The hibachi chef solved every problem: dual stations, fire tricks for every generation, premium proteins, and cleanup that left the property exactly as it was for the next day\'s activities. Best family reunion format we\'ve used in years of hosting them at Napa Valley properties.', location: 'Napa, CA', rating: 5, event: 'Family Reunion Wine Country Weekend' },
  ],
  'healdsburg': [
    { name: 'George L.', text: 'Anniversary estate dinner at our Dry Creek Valley property — 14 guests on our terrace above the valley. The setting was already extraordinary; the chef matched it in a way I hadn\'t thought a dinner format could. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes, and left the terrace spotless. Our guests included people who attend private dinners at the highest level in wine country communities from Burgundy to the Willamette Valley, and every person said this was the finest format they\'d experienced at a private vineyard estate. Already planned for next year\'s milestone.', location: 'Healdsburg, CA', rating: 5, event: 'Anniversary Dry Creek Vineyard Dinner' },
    { name: 'Rachel P.', text: 'Destination birthday weekend at our Alexander Valley vacation rental — 22 guests. We drove up from San Francisco with family and friends specifically for the occasion and the hibachi chef was the evening\'s centerpiece. Chef arrived with everything, performed for 90 minutes with premium proteins across the full table, and left the property exactly as it was. The fire tricks between the vine rows were the moment every guest kept describing for weeks afterward. The only private event format I\'ve used that genuinely matched the character of the Healdsburg wine country setting.', location: 'Healdsburg, CA', rating: 5, event: 'Destination Birthday Weekend' },
    { name: 'Steven A.', text: 'Harvest season corporate dinner at our downtown Healdsburg-adjacent venue — 26 guests from our Bay Area company. We wanted a format that felt genuinely different from every team event the company had done before. The hibachi chef delivered: interactive, live, memorable, and the kind of shared experience where every person was at the same table for the full evening. The combination of Healdsburg wine country and live teppanyaki was the format every employee has asked us to repeat for the next company milestone. Our new company standard for team appreciation events.', location: 'Healdsburg, CA', rating: 5, event: 'Corporate Team Harvest Season Dinner' },
  ],
  'sonoma': [
    { name: 'Barbara H.', text: 'Plaza-area anniversary dinner at our Sonoma estate — 16 guests in our garden courtyard. We\'ve lived in Sonoma for twenty years and host regularly, but this was the first format that matched both the occasion and the town\'s character simultaneously. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes, and left the courtyard spotless. Our guests are still talking about it. The volcano between the olive trees, premium proteins throughout the evening, and the kind of cleanup that left no trace. Already planned for our next milestone at this property.', location: 'Sonoma, CA', rating: 5, event: 'Anniversary Garden Estate Dinner' },
    { name: 'Michael F.', text: 'Destination family reunion at our Carneros vineyard property — 28 guests from across the country. We rented the house for the weekend and the hibachi chef was the centerpiece event. Chef arrived fully self-contained, performed for two hours with dual stations for the full group, and left the property exactly as it was. Family came from Seattle, Denver, New York, and Chicago — every person said it was the finest family gathering format they\'d attended. The format we\'re using for every future Sonoma wine country family event.', location: 'Sonoma, CA', rating: 5, event: 'Family Reunion Destination Weekend' },
    { name: 'Nancy C.', text: 'Sonoma Valley graduation backyard dinner — 32 family members at our residential property. Our son graduated from Sonoma Valley High and we had family arriving from four states for the weekend. We needed something that kept everyone together for one genuinely memorable evening rather than scattered across the Sonoma plaza restaurants that everyone knows. The hibachi chef solved it completely: arrived with everything, dual stations for the full group, fire tricks for every generation, and the kind of cleanup that left the property spotless. Best graduation dinner our family has done.', location: 'Sonoma, CA', rating: 5, event: 'Graduation Backyard Dinner' },
  ],
  'folsom': [
    { name: 'David M.', text: 'Folsom Ranch anniversary dinner at our property — 20 guests on our outdoor patio. We\'ve been in this community for nine years and host regularly, but this was the first evening where the format matched the occasion in a way nothing else had. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes, and left the patio exactly as it was. Our guests are still talking about it. Already planning the same format for our next milestone at this property — and our neighbors have been asking for the contact information ever since.', location: 'Folsom, CA', rating: 5, event: 'Anniversary Dinner' },
    { name: 'Jennifer L.', text: 'Lakefront backyard graduation party — 40 family members. Our daughter graduated from Folsom High and we had family coming in from five states. Every Folsom restaurant was booked solid for that Saturday by early March. The hibachi chef solved everything: arrived with every piece of equipment, dual stations for the full group, fire tricks that had every age completely captivated, and cleanup that left our backyard exactly as it was before the first guest arrived. Best graduation event our family has done in fifteen years of hosting them.', location: 'Folsom, CA', rating: 5, event: 'Folsom High Graduation Party' },
    { name: 'Paul K.', text: 'Empire Ranch milestone birthday at our property — 28 guests. We live in one of Folsom\'s finest neighborhoods and host regularly, but this was genuinely different from anything we\'d done before. The chef performed for 90 minutes with fire tricks, the volcano, flying shrimp, and premium proteins across the full table. Every generation from our 9-year-old niece to our 78-year-old father was completely engaged for the full performance. The kind of evening our guests describe to everyone they meet. Our new standard for milestone events at this property.', location: 'Folsom, CA', rating: 5, event: 'Milestone Birthday Celebration' },
  ],
  'granite-bay': [
    { name: 'Susan R.', text: 'Granite Bay Estates anniversary dinner at our property — 18 guests on our back patio with Sierra Nevada foothills views. We\'ve been in this neighborhood for twelve years and entertain often, but this was the first event format that matched the quality of the neighborhood and the occasion simultaneously. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes with complete professionalism, and left the patio spotless. Our neighbors have been asking for the contact information ever since. Already reserved the same format for our landmark anniversary next year.', location: 'Granite Bay, CA', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'James P.', text: 'Folsom Lake-view graduation party at our property — 42 family members. Our son graduated from Granite Bay High and we had family flying in from four states. We needed a format that worked for a large group without competing for restaurant tables in Granite Bay and Folsom on the busiest Saturday of the year. The hibachi chef solved every problem: dual stations for the full group, fire tricks that had every age engaged, premium proteins, and a cleanup that left the property exactly as it was. Best graduation event our extended family has hosted.', location: 'Granite Bay, CA', rating: 5, event: 'Granite Bay High Graduation Party' },
    { name: 'Lisa T.', text: 'Neighborhood milestone birthday at our Douglas Boulevard-area property — 26 guests. We live in one of Sacramento\'s finest suburbs and have hosted many events here, but this was the first evening where the format genuinely matched the setting. The chef set up in 20 minutes, performed for 90 minutes with complete skill, served premium proteins throughout, and left the backyard spotless. Our guests are still talking about it months later. The format that replaced every restaurant booking and catered dinner we\'d used for prior occasions.', location: 'Granite Bay, CA', rating: 5, event: 'Milestone Birthday Party' },
  ],
  // ── Batch 4 ───────────────────────────────────────────────────────────────────
  'atherton': [
    { name: 'Margot H.', text: 'Anniversary estate dinner at our Linfield Oaks property — 18 guests on our south terrace. We\'ve hosted private events at this estate for twelve years and this was the first format that genuinely matched what the property already is. The chef arrived at our gate, set up in 20 minutes, served wagyu and lobster tail across the full table, performed for 90 minutes with complete professionalism and warmth, and left the terrace exactly as it was when he arrived. Our guests included people who attend private events at this level across the country, and the unanimous response was that this was the finest residential private dinner format any of them had experienced. We\'ve already planned the same for next year\'s milestone.', location: 'Atherton, CA', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Charles W.', text: 'Client appreciation dinner at our Fair Oaks-area estate — 24 guests including C-suite executives and major clients from the Bay Area tech and finance sectors. These are clients who attend private events at the highest level in cities across the country and internationally, and the unanimous feedback was that the live hibachi chef format was categorically different from any private dining experience they\'d had at a residential property. The chef was extraordinary, the proteins were flawless, and the performance kept every guest engaged for two full hours without a single phone appearing. Three clients called specifically the next morning to request the contact information for their own estate events.', location: 'Atherton, CA', rating: 5, event: 'Estate Client Appreciation Dinner' },
    { name: 'Sylvia M.', text: 'Milestone 60th birthday at our central Atherton property — 22 guests in our garden. We wanted a format that matched the estate and the occasion simultaneously — not a restaurant booking, not a catered dinner, but something that actually belonged at the property. The chef matched that vision exactly. Setup was seamless, the filet mignon and Chilean sea bass were exceptional, and the performance had every guest at the table from start to finish. Our youngest guest was 14 and our oldest was 82 — the chef found exactly the right tone for every generation simultaneously. The finest event we\'ve hosted at this property in fifteen years.', location: 'Atherton, CA', rating: 5, event: 'Milestone Birthday Celebration' },
  ],
  'palo-alto': [
    { name: 'Richard L.', text: 'Anniversary dinner at our Old Palo Alto property — 16 guests on our backyard terrace. We\'ve lived in this home for eighteen years and host regularly, but this was the first evening where every guest was completely engaged from the first fire trick to the last flying shrimp. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, and performed for 90 minutes with complete skill. The terrace was spotless when he left. Our neighbors — Stanford faculty, retired executives, longtime Palo Alto families — asked for the contact information before the last guest reached the gate. Already reserved for our next major occasion.', location: 'Palo Alto, CA', rating: 5, event: 'Anniversary Dinner' },
    { name: 'Jennifer S.', text: 'Crescent Park graduation dinner for our daughter — 28 family members. Stanford graduation weekend and every restaurant in Palo Alto was committed weeks before we called. The hibachi chef solved everything: arrived with every piece of equipment, dual stations for the full group, performed for two hours with premium proteins throughout, and left the property exactly as it was. Family flew in from three time zones for the occasion, and every person said it was the finest graduation dinner they\'d attended. The format everyone has since asked us to repeat for the next family milestone.', location: 'Palo Alto, CA', rating: 5, event: 'Stanford Graduation Family Dinner' },
    { name: 'Andrew C.', text: 'Company executive team event at our South Palo Alto home — 20 guests including founders and senior leadership. We\'d done every format in the Bay Area: restaurant buyouts, rooftop receptions, catered executive dinners. The hibachi chef was categorically different. The setup was professional, the performance was extraordinary, and every executive at the table said it was the first company event in memory where no one looked at their phone for the entire duration. Three of them called me the next day to ask for the contact information for their own events. Our new format for any future leadership team occasion.', location: 'Palo Alto, CA', rating: 5, event: 'Executive Team Dinner' },
  ],
  'los-gatos': [
    { name: 'Karen T.', text: 'Anniversary dinner at our Los Gatos Village property — 20 guests in our backyard garden. We\'ve been in this home for fourteen years and entertain regularly, but this was the first evening where the format actually matched the occasion and the setting simultaneously. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, and performed for 90 minutes with complete skill and warmth. The backyard was spotless when he left. Our guests — Los Gatos neighbors, Bay Area family, and longtime friends — are still talking about it. Already planning the same for our next milestone occasion at this property.', location: 'Los Gatos, CA', rating: 5, event: 'Anniversary Dinner' },
    { name: 'David F.', text: 'Graduation backyard party at our Almaden-adjacent property — 38 family members. Our son graduated from Los Gatos High and we had family arriving from four states. We needed a format that worked for a large multigenerational group ranging from 5 to 76 years old without restaurant logistics on a June Saturday. The hibachi chef solved everything: dual stations for the full group, fire tricks that had every generation transfixed, premium proteins, and the kind of cleanup that left the backyard exactly as it was. The finest graduation event we\'ve done in twenty years of hosting them.', location: 'Los Gatos, CA', rating: 5, event: 'Graduation Backyard Party' },
    { name: 'Michelle R.', text: 'Silicon Valley tech startup milestone event at our Los Gatos home — 26 employees and their guests. We wanted something that felt genuinely different from every company event format we\'d tried in the Bay Area. The hibachi format delivered: interactive, live, memorable, and the kind of shared experience where every employee was talking about it at Monday\'s standup and asking when we\'re doing it again. The format that replaced every other company event option we\'d used before it.', location: 'Los Gatos, CA', rating: 5, event: 'Company Milestone Celebration' },
  ],
  'san-francisco': [
    { name: 'Victoria P.', text: 'Tech company team appreciation event — 40 employees at our SOMA-adjacent venue. We\'ve done restaurant group buyouts, rooftop cocktail events, and private dining room events across the Bay Area, and this format was categorically better than any of them. The chef arrived fully self-contained, dual stations handled the full group, and every employee was genuinely engaged for 90 minutes of live fire teppanyaki. Our VP of People called it the best team event in four years of doing them. Every hiring manager on the team has asked us to book this for their next new hire cohort. Our permanent format for company milestones.', location: 'San Francisco, CA', rating: 5, event: 'Tech Team Appreciation Event' },
    { name: 'Jason M.', text: 'Pacific Heights estate anniversary dinner — 16 guests on our terrace. We\'ve hosted private events at this property for nine years and this was the first format that matched the setting in the way I\'d always hoped something would. The chef set up in 20 minutes, served wagyu and lobster tail across the full table, performed for 90 minutes with complete professionalism, and left the terrace exactly as it was. Our guests included people who attend private events at this level across the country and internationally — every person asked for the contact information before they left the building. Already planned for our next milestone.', location: 'San Francisco, CA', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Amanda K.', text: 'Startup investor dinner at our Marina District home — 18 guests including founders, angels, and Series A investors. We needed a format that felt genuinely different from every VC dinner circuit event that everyone in the room has attended before. The live hibachi chef delivered exactly that: two hours of shared experience at the same table where every person was present and engaged simultaneously. Two investors called me specifically the next day to say it was the finest founder dinner they\'d attended in the Bay Area. Our format for every future investor relationship event.', location: 'San Francisco, CA', rating: 5, event: 'Investor Relationship Dinner' },
  ],
  'san-jose': [
    { name: 'Kevin L.', text: 'Silicon Valley corporate team event — 36 employees at our North San Jose venue. We\'d done every format that exists in the South Bay: restaurant takeovers, catered office dinners, private dining room events. The hibachi chef format was categorically better than all of them. Dual stations handled the full group, the live performance kept everyone genuinely engaged for 90 minutes, and the kind of energy it created among the team carried over into the following week in a way that no other format we\'d used had done. Our new company standard for team milestone events.', location: 'San Jose, CA', rating: 5, event: 'Corporate Team Milestone Event' },
    { name: 'Sophia C.', text: 'Willow Glen anniversary dinner at our property — 20 guests in our backyard. We\'ve been in this neighborhood for sixteen years and this was the first event format that felt genuinely commensurate with the occasion we were celebrating. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, and performed for 90 minutes with complete skill. The backyard was spotless when he left. Our guests are still talking about it. Already planning the same for our next major family milestone.', location: 'San Jose, CA', rating: 5, event: 'Anniversary Backyard Dinner' },
    { name: 'Robert T.', text: 'Almaden Valley graduation backyard party — 42 family members. Our daughter graduated from Leland High and we had family flying in from five states for the weekend. We needed something that worked for a large multigenerational group without competing for South Bay restaurant reservations on the busiest dining weekend of the year. The hibachi chef solved everything: dual stations for the full group, fire tricks for every age, premium proteins, and cleanup that left the backyard exactly as it was. Best graduation event our family has ever hosted.', location: 'San Jose, CA', rating: 5, event: 'Graduation Backyard Party' },
  ],
  // ── Batch 3 ───────────────────────────────────────────────────────────────────
  'la-jolla': [
    { name: 'Catherine R.', text: 'Anniversary estate dinner at our La Jolla Cove bluff property — 14 guests on our terrace above the cove. We\'ve entertained at this property for eleven years and this was the first format that genuinely matched the setting. The chef set up in 25 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes as the sun set into the Pacific, and left the terrace exactly as it was. Every guest asked for the contact information before reaching the gate. We\'re already planning the same format for the next milestone.', location: 'La Jolla, CA', rating: 5, event: 'Anniversary Bluff Estate Dinner' },
    { name: 'Andrew P.', text: 'Client appreciation dinner at our Torrey Pines-area estate — 20 guests including senior executives and major clients. These are professionals who have attended private dining events across the country, and the unanimous response was that the live hibachi chef format was categorically better than any private dining room we\'ve used in San Diego. Chef arrived self-contained, performed for two hours, premium proteins throughout, and the property was spotless when he left. Three clients called specifically the next morning to request the contact information for their own events.', location: 'La Jolla, CA', rating: 5, event: 'Client Appreciation Estate Dinner' },
    { name: 'Melissa J.', text: 'Graduation celebration at our Bird Rock estate — 26 family members. UCSD graduation weekend and every restaurant in La Jolla was committed weeks before we called. The hibachi chef solved everything: arrived with every piece of equipment, performed for two hours with dual stations, fire tricks over the terrace, premium proteins, and the kind of cleanup that left the property exactly as it was. Our family came from six states and every person called it the finest graduation event they\'d attended. Worth every penny.', location: 'La Jolla, CA', rating: 5, event: 'UCSD Graduation Celebration' },
  ],
  'coronado': [
    { name: 'Robert S.', text: 'Anniversary dinner at our Ocean Boulevard estate — 16 guests on our bayfront terrace with the lights of downtown San Diego across the water. We\'ve entertained on this island for fourteen years and this format matched the setting in a way nothing else has. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes, and left the terrace exactly as it was. Every guest asked for the contact information before they reached the street. Already reserved the same format for our next milestone.', location: 'Coronado, CA', rating: 5, event: 'Anniversary Bayfront Estate Dinner' },
    { name: 'Patricia L.', text: 'Milestone birthday at our Coronado Island home — 22 guests. We live on the island year-round and host regularly, but this was the first evening where every guest was completely engaged from the first fire trick to the last flying shrimp. Chef arrived fully self-contained, set up in the garden facing the bay, performed for two hours with wagyu and lobster tail across the full table, and left the property spotless. Our neighbors have been asking for the contact information ever since. Our go-to format for every future occasion at this property.', location: 'Coronado, CA', rating: 5, event: 'Milestone Birthday Party' },
    { name: 'Kevin M.', text: 'Summer gathering at our Hotel Del-adjacent property — 30 family members for a reunion weekend. We needed a format that worked for a multigenerational group from 5 to 77 years old without everyone scattering across the island restaurants that were booked weeks before the weekend started. The hibachi chef solved every problem: dual stations, fire tricks for every age, premium proteins, and a cleanup that left our property exactly as it was when the chef arrived. Best family reunion format we\'ve used in twenty years of hosting them on this island.', location: 'Coronado, CA', rating: 5, event: 'Family Reunion Summer Party' },
  ],
  'del-mar': [
    { name: 'Gregory H.', text: 'Anniversary dinner at our Stratford Court property — 18 guests on our bluff terrace with the Pacific below. The setting was already extraordinary; the chef matched it completely. Filet mignon and lobster tail across the full table, 90 minutes of live performance, and a cleanup so thorough we couldn\'t tell the chef had been there. Our guests included people who had attended private dinners from Napa to New York City, and every person said this was the finest format they\'d experienced. We\'ve already planned the same for our next milestone occasion.', location: 'Del Mar, CA', rating: 5, event: 'Anniversary Bluff Estate Dinner' },
    { name: 'Sandra K.', text: 'Racetrack opening-week graduation party for our daughter — 32 family members at our Del Mar Heights property. Opening week and every restaurant along the coast was committed weeks ahead. The hibachi chef solved the entire problem: arrived with everything, dual stations for the full group, fire tricks that had every generation completely transfixed, premium proteins, and cleanup that left the property spotless before the last guest left. Our daughter called it the best graduation event she could have imagined. Already planning the same format for the next family milestone.', location: 'Del Mar, CA', rating: 5, event: 'Graduation Party During Racing Season' },
    { name: 'Thomas A.', text: 'Coastal vacation rental event — 24 guests at a Del Mar property we rented for the weekend. We drove down from Los Angeles specifically for the occasion and the hibachi chef was the centerpiece event of the entire trip. Chef arrived fully self-contained, set up in the backyard facing the coast, and performed for 90 minutes with premium proteins throughout. Fire tricks, flying shrimp, the volcano — every person was at the same table watching the same thing for the full evening. Perfect format for a vacation rental weekend event.', location: 'Del Mar, CA', rating: 5, event: 'Coastal Vacation Rental Weekend Party' },
  ],
  'rancho-santa-fe': [
    { name: 'Victoria H.', text: 'Anniversary estate dinner at our Covenant property — 18 guests on our outdoor terrace. We\'ve hosted private dinners at this estate for sixteen years and this was the first format that genuinely matched what the property already is. The chef arrived at our gate, set up in 20 minutes, served wagyu and lobster tail across the full table, performed for 90 minutes with complete professionalism, and left the terrace exactly as it was. Our guests are still describing it as the finest private dinner they\'ve attended in San Diego County. Already reserved the same format for our landmark anniversary next year.', location: 'Rancho Santa Fe, CA', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'James C.', text: 'Executive client appreciation dinner at our Rancho Santa Fe compound — 24 guests including C-suite clients from three different industries. These are clients who attend private events at the highest level in cities across the country, and every person said the live hibachi format was categorically different from any private dining experience they\'d had at a residential property. Chef was extraordinary, proteins were flawless, and the live performance kept every guest genuinely engaged for the full two hours. Three clients called the next morning to request the contact information.', location: 'Rancho Santa Fe, CA', rating: 5, event: 'Executive Client Appreciation Dinner' },
    { name: 'Eleanor M.', text: 'Milestone 65th birthday at our San Dieguito Road estate — 28 guests from across the country. We had family flying in from the East Coast, Chicago, and Seattle for the occasion and needed a format that matched the estate and the milestone simultaneously. The chef arrived self-contained, set up on our outdoor terrace, and delivered 90 minutes of teppanyaki with filet mignon and Chilean sea bass across the full table. The fire tricks had even our most reserved guests completely engaged. Our go-to format for any future milestone at this property.', location: 'Rancho Santa Fe, CA', rating: 5, event: 'Milestone Birthday Estate Dinner' },
  ],
  'carlsbad': [
    { name: 'Daniel R.', text: 'Corporate team appreciation event for our Carlsbad tech company — 34 employees at our Palomar Airport Road office campus. We\'d done catered dinners and restaurant group events and this format was categorically better than either. The chef arrived fully self-contained, dual stations handled the full group, and every employee was genuinely engaged for 90 minutes of live fire teppanyaki. Our CEO called it the best team event in five years of doing them. Our new format for every company milestone in Carlsbad going forward.', location: 'Carlsbad, CA', rating: 5, event: 'Corporate Team Appreciation Event' },
    { name: 'Maria C.', text: 'Graduation backyard party at our Aviara property — 38 family members. Our son graduated from Carlsbad High and we had family arriving from four states. We needed something that worked for a large multigenerational group without competing for restaurant tables on the busiest Saturday of the year in North County. The hibachi chef solved everything: dual stations for the full group, fire tricks for every generation, premium proteins, and the kind of cleanup that left our backyard exactly as it was. Best graduation event our family has done in twenty years of hosting them.', location: 'Carlsbad, CA', rating: 5, event: 'Carlsbad High Graduation Party' },
    { name: 'Stephen L.', text: 'La Costa Resort-area anniversary dinner at our neighborhood home — 20 guests. We\'ve lived near the resort for nine years and host regularly, but this was the first evening where every guest was at the same table for the full event without anyone wandering off. The chef set up in our backyard, served filet mignon and lobster tail throughout, and performed for 90 minutes with complete skill. The fire tricks had even our most reserved guests genuinely captivated. Already planning the same format for our next milestone occasion.', location: 'Carlsbad, CA', rating: 5, event: 'Anniversary Dinner' },
  ],
  // ── Batch 2 ───────────────────────────────────────────────────────────────────
  'newport-beach': [
    { name: 'Katherine H.', text: 'Anniversary estate dinner at our Balboa Island bayfront property — 16 guests on the dock deck. We\'ve entertained at this home for twelve years and this was the first format that matched the setting completely. The chef set up in 25 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes as the harbor lights came on, and left the deck spotless. Our guests asked for the contact information before the last boat left the dock. Already reserving for next year\'s milestone.', location: 'Newport Beach, CA', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'William R.', text: 'Client appreciation dinner at our Corona del Mar property — 20 guests including senior partners and major clients. These are professionals who have attended client entertainment events across the country, and the unanimous response was that the live hibachi format was categorically better than any private dining room we\'ve used. Chef arrived self-contained, performed for two hours, premium proteins throughout, and the property was spotless when he left. Three clients called specifically the next morning to ask for the contact information for their own events.', location: 'Newport Beach, CA', rating: 5, event: 'Client Appreciation Estate Dinner' },
    { name: 'Amy C.', text: 'Graduation party for our daughter at our Harbor Island property — 28 family members. UCI graduation weekend and every restaurant in Newport Beach was booked solid. The hibachi chef solved everything: arrived with every piece of equipment, performed for two hours, dual stations kept the whole group eating at once. Fire tricks over the dock, premium proteins, and the kind of cleanup that left the property exactly as it was. The finest graduation celebration our family has done.', location: 'Newport Beach, CA', rating: 5, event: 'UCI Graduation Family Dinner' },
  ],
  'laguna-beach': [
    { name: 'Jonathan P.', text: 'Milestone anniversary dinner at our Arch Beach Heights estate — 14 guests on our bluff terrace. The Pacific as the backdrop, a certified teppanyaki chef performing 90 minutes of live fire teppanyaki with filet mignon and lobster tail across the full table, and a cleanup so complete the terrace was exactly as it was when the chef arrived. We\'ve hosted private dinners at this property for twenty years. This was the finest format we\'ve used. Already planning the same for next year\'s occasion.', location: 'Laguna Beach, CA', rating: 5, event: 'Anniversary Bluff Estate Dinner' },
    { name: 'Diana L.', text: 'Milestone birthday at our Canyon Road property — 22 guests in our courtyard garden. The setting was already extraordinary; the chef matched it completely. Two hours of live performance, wagyu and lobster tail across the table, fire tricks that had even our most reserved guests genuinely engaged. Our guests came from four different cities and the unanimous feedback was that it was the finest private event they\'d attended on the OC coast. We\'re already booking the same format for the next occasion.', location: 'Laguna Beach, CA', rating: 5, event: 'Milestone Birthday Courtyard Party' },
    { name: 'Eric M.', text: 'Summer gathering at our Laguna Beach home — 30 guests for a family reunion weekend. We needed a format that worked for a multigenerational group ranging from 7 to 79 years old without restaurant logistics on a summer Saturday when every table in Laguna is committed. The hibachi chef solved every problem: dual stations, fire tricks that had every age completely transfixed, excellent proteins, and a cleanup that left our property spotless. Best family gathering format we\'ve found in years of hosting.', location: 'Laguna Beach, CA', rating: 5, event: 'Family Reunion Summer Party' },
  ],
  'irvine': [
    { name: 'Linda K.', text: 'Irvine Company division team appreciation event — 36 employees at our Spectrum-area venue. We\'d done restaurant group buyouts and catered buffets and this format was categorically better than either. The chef arrived fully self-contained, dual stations handled the full group, and every employee was genuinely engaged for 90 minutes of live performance. Our SVP called it the best team event in four years of doing them. Our new format for every company milestone in Irvine.', location: 'Irvine, CA', rating: 5, event: 'Corporate Team Appreciation Event' },
    { name: 'Brian T.', text: 'UCI graduation weekend dinner for our son — 24 family members at our campus-area rental. We had family flying in from three time zones and needed a format that worked in a rental space without competing for reservations during the most competitive dining weekend in Orange County. Chef arrived fully self-contained, performed for two hours, and left the rental exactly as it was. The whole family was at the same table for the entire evening instead of scattered across three restaurants. Best graduation dinner we\'ve done.', location: 'Irvine, CA', rating: 5, event: 'UCI Graduation Weekend Dinner' },
    { name: 'Michelle P.', text: 'Tech startup company anniversary celebration — 28 employees and their guests at our Irvine venue. We wanted something that felt genuinely different from every team event format we\'d tried in Silicon Beach and the OC tech corridor. The hibachi format delivered: interactive, live, memorable, and the kind of shared experience that had every person at the table talking about it at the following Monday\'s standup. Our go-to format for any future company milestone.', location: 'Irvine, CA', rating: 5, event: 'Company Anniversary Celebration' },
  ],
  'huntington-beach': [
    { name: 'Jason R.', text: 'Graduation backyard party at our Huntington Harbour home — 40 family members. Our son graduated from Edison High and we had family coming in from three states. Every coastal restaurant was fully committed for that Saturday. The hibachi chef solved it completely: arrived with everything, dual stations for the full group, fire tricks that had every generation completely captivated, and the kind of cleanup that left the backyard exactly as it was. Best graduation event in our family\'s history.', location: 'Huntington Beach, CA', rating: 5, event: 'Edison High Graduation Party' },
    { name: 'Karen D.', text: 'Vacation rental birthday party near the pier — 28 guests for a milestone weekend. We rented the beach house for the weekend and the hibachi chef was the centerpiece event. Chef arrived with everything, set up in the backyard, performed for two hours. Fire tricks, premium proteins, and the kind of effortless experience that made our guests feel like they were at the finest private event in the South OC. Cleanup was complete before the last guest left. Perfect format for a vacation rental beach party.', location: 'Huntington Beach, CA', rating: 5, event: 'Beach House Birthday Party' },
    { name: 'Tony S.', text: 'Anniversary backyard dinner at our Lake Huntington property — 18 guests. We\'ve lived in this neighborhood for fourteen years and host regularly, but this was the first evening where every guest was at the same table for the entire event. The chef set up by our pool, served premium proteins throughout, and performed for 90 minutes with complete skill. The volcano over the pool was the moment of the evening. Our guests are still talking about it. Already booking for the next occasion.', location: 'Huntington Beach, CA', rating: 5, event: 'Anniversary Backyard Dinner' },
  ],
  'dana-point': [
    { name: 'Robert J.', text: 'Anniversary estate dinner at our Monarch Beach bluff property — 16 guests on our west terrace overlooking the Pacific. We\'ve entertained at this property for nine years and this was the finest private dinner format we\'ve used. The chef set up in 20 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes as the sun set, and left the terrace exactly as it was. Every guest asked for the contact information before reaching the street. Already planning for next year\'s milestone.', location: 'Dana Point, CA', rating: 5, event: 'Anniversary Bluff Estate Dinner' },
    { name: 'Susan M.', text: 'Graduation backyard party in the Lantern District — 35 family members. Our daughter graduated from Dana Hills High and we had family arriving from four states. We needed something that worked for every age from 5 to 80 without restaurant logistics on the busiest Saturday in Dana Point. The hibachi chef solved every problem: fire tricks for the youngest guests, premium proteins for everyone, and a cleanup so complete we couldn\'t tell the chef had been there. Our family\'s best graduation event.', location: 'Dana Point, CA', rating: 5, event: 'Dana Hills Graduation Party' },
    { name: 'Paul C.', text: 'Milestone birthday celebration at our Strand Vista property — 24 guests with a view of Salt Creek. We wanted something genuinely different from the standard OC restaurant circuit that our guests know well. The chef set up on our patio, served wagyu and lobster tail across the full table, and performed for 90 minutes with the Pacific as the backdrop. Our guests drove from Newport Beach, Laguna, and San Diego specifically for this event. Every one of them asked for the contact information on the way out.', location: 'Dana Point, CA', rating: 5, event: 'Milestone Birthday Celebration' },
  ],
  // ── Batch 1 ───────────────────────────────────────────────────────────────────
  'beverly-hills': [
    { name: 'Vanessa L.', text: 'Anniversary estate dinner at our North Beverly Hills property — 14 guests on our south terrace. We\'ve hosted private events at this home for fifteen years and this was genuinely new territory. The chef set up in 20 minutes, served wagyu and lobster tail across the full table, performed for 90 minutes with complete professionalism, and the terrace was spotless when he left. Our guests came from three countries and unanimously asked for the contact information before they reached the gate. We\'ve already reserved the same chef for next year.', location: 'Beverly Hills, CA', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'David K.', text: 'Client appreciation dinner at our Beverly Hills estate — 22 guests including C-suite professionals from four different companies. These are clients who attend private events at the highest level in cities across the country, and the unanimous feedback was that this was unlike anything they\'d experienced at a private home. The chef was extraordinary, the proteins were flawless, and the live performance kept every guest completely engaged for two full hours. Three clients called specifically the next morning to ask for the contact information.', location: 'Beverly Hills, CA', rating: 5, event: 'Estate Client Appreciation Dinner' },
    { name: 'Rachel M.', text: 'Milestone 50th birthday at our Bel Air-adjacent property — 18 guests. We had a specific vision: premium private dining at the estate, not a restaurant. The chef matched that vision exactly. The setup was seamless, the wagyu and filet mignon were exceptional, and the performance had every guest at the table for the full evening. Our youngest guest was 12 and our oldest was 78 — the chef engaged every generation simultaneously. The finest event we\'ve hosted at this property.', location: 'Beverly Hills, CA', rating: 5, event: 'Milestone Birthday Celebration' },
  ],
  'malibu': [
    { name: 'James P.', text: 'Anniversary dinner at our Carbon Beach property — 12 guests on the deck with the Pacific forty feet away. We\'ve entertained at this property for nine years and this was the first format that matched the setting completely. Chef set up in 25 minutes, served filet mignon and lobster tail across the full table, performed for 90 minutes as the sun set into the ocean, and left the deck exactly as it was. Our guests are still telling people about it three months later. Reserving the same chef for our next major occasion immediately.', location: 'Malibu, CA', rating: 5, event: 'Anniversary Beach Estate Dinner' },
    { name: 'Stephanie C.', text: 'Point Dume graduation dinner for our daughter — 26 family members on our bluff property. Family flying in from New York, Chicago, and London for the weekend, and we needed a format that kept everyone together for one genuinely remarkable evening. The chef arrived self-contained, set up on our deck with the Pacific as the backdrop, and performed for two hours. Fire tricks, the volcano, premium proteins across the full table. Every family member said it was the single best event of the weekend. Worth every penny.', location: 'Malibu, CA', rating: 5, event: 'Graduation Celebration Dinner' },
    { name: 'Thomas R.', text: 'Summer gathering at our Malibu Colony home — 20 guests for a milestone birthday. We live in the Colony and host regularly, but this was the first evening where every guest was at the same table, watching the same thing, for the entire evening. The chef performed with complete skill and warmth, the proteins were excellent, and the fire tricks over the pool area had even our most reserved guests laughing and engaged. Our go-to format for any future occasion at this property.', location: 'Malibu, CA', rating: 5, event: 'Milestone Birthday Party' },
  ],
  'santa-monica': [
    { name: 'Emily N.', text: 'Graduation backyard party at our Ocean Park home — 34 family members. Our son graduated from Santa Monica College and we had family coming in from five states. We\'ve tried restaurant group blocks before and the logistics are always a problem. The hibachi chef solved everything: arrived at 5pm, set up in the backyard by 5:20, performed from 6 to 8, and left the yard spotless by 8:15. Every generation from 6 to 74 was completely captivated. Best graduation event our family has ever done.', location: 'Santa Monica, CA', rating: 5, event: 'College Graduation Party' },
    { name: 'Mark S.', text: 'Anniversary dinner at our Palisades-adjacent home — 16 guests. We wanted something that felt genuinely special without requiring anyone to drive across LA. The chef arrived with everything, set up on our back patio, and gave us two hours of teppanyaki that had every guest at the table from start to finish. The filet mignon and lobster tail option was exactly right for the occasion. Cleanup was complete before the last guest left. Our new standard for anniversary celebrations at this property.', location: 'Santa Monica, CA', rating: 5, event: 'Anniversary Dinner' },
    { name: 'Jennifer H.', text: 'Vacation rental dinner near the pier — 22 guests for a family reunion weekend. We rented the house specifically for this gathering and the hibachi chef was the centerpiece event of the entire trip. Chef arrived fully self-contained, performed for 90 minutes, and left the rental exactly as it was — which was important since we were responsible for the property. Fire tricks, premium proteins, and the kind of shared experience that had every family member at the same table for the entire evening. Perfect format for a vacation rental gathering.', location: 'Santa Monica, CA', rating: 5, event: 'Vacation Rental Family Reunion' },
  ],
  'calabasas': [
    { name: 'Christina W.', text: 'Anniversary estate dinner at our Oaks of Calabasas home — 16 guests on our pool deck. We\'ve hosted events at this property for twelve years and this was the first format that felt genuinely commensurate with the setting. The chef arrived self-contained at our gate, set up in 20 minutes, served wagyu and lobster tail across the full table, and performed for 90 minutes with complete professionalism. The pool deck was spotless when he left. Our guests are still asking for the contact information. Reserving the same format for our landmark anniversary.', location: 'Calabasas, CA', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Michael B.', text: 'Graduation party at our Calabasas Estates property — 42 family members including grandparents from Florida and cousins from New York. Our daughter graduated from Calabasas High and we needed a format that worked for every generation simultaneously. Dual chef stations handled the full group, the fire tricks had even the skeptical grandparents completely transfixed, and the filet mignon upgrade for our graduate was exactly right for the occasion. Every person at the party said it was the best family event they\'d attended in years.', location: 'Calabasas, CA', rating: 5, event: 'Calabasas High Graduation Party' },
    { name: 'Alicia T.', text: 'Milestone 60th birthday at our Hidden Hills-adjacent property — 24 guests behind the gates. We\'ve lived here for eight years and host regularly, but this was the first event where every guest was completely engaged from start to finish. The chef set up by our outdoor kitchen, served premium proteins throughout the evening, and performed for 90 minutes with the kind of professionalism that matched the neighborhood\'s expectation for quality. Our guests have been sharing the contact information with everyone in the community. Already booked for the next milestone.', location: 'Calabasas, CA', rating: 5, event: 'Milestone Birthday Celebration' },
  ],
  'manhattan-beach': [
    { name: 'Kevin R.', text: 'Strand estate graduation dinner for our daughter — 30 family members on our deck two houses from the water. Our daughter graduated from Mira Costa and we had family arriving from four states. Every restaurant in the South Bay was fully committed for that Saturday by March. The hibachi format solved the problem completely: chef arrived with everything, set up on our deck, performed for two hours. The Pacific as backdrop, premium proteins, fire tricks with the ocean behind them. Our family\'s finest graduation celebration.', location: 'Manhattan Beach, CA', rating: 5, event: 'Mira Costa Graduation Dinner' },
    { name: 'Sandra J.', text: 'Tree Section anniversary dinner — 18 guests in our backyard. We\'ve been in this home for sixteen years and entertain regularly, but this was the first evening where the format matched the occasion completely. The chef set up in 25 minutes, served filet mignon and lobster tail across the full table, and performed for 90 minutes with complete skill. The backyard was spotless when he left. Our neighbors have been asking for the contact information since the party ended. Already booking for next year.', location: 'Manhattan Beach, CA', rating: 5, event: 'Anniversary Dinner' },
    { name: 'Brian D.', text: 'Sand Section birthday party — 36 guests for a milestone gathering three blocks from the water. We needed a format that kept everyone at the property all evening instead of scattered across the beachside restaurant circuit. The hibachi chef solved it: dual stations for the full group, fire tricks that had every age engaged, and the kind of cleanup that left no trace. Our youngest guest was 8 and our oldest was 72, and the chef found exactly the right tone for every generation simultaneously. Perfect South Bay backyard format.', location: 'Manhattan Beach, CA', rating: 5, event: 'Milestone Birthday Party' },
  ],
  'pasadena': [
    { name: 'Patricia L.', text: 'Rose Bowl corridor anniversary dinner at our San Rafael Hills property — 20 guests on our west terrace. We\'ve hosted dinners at this home for eighteen years and this was among the most memorable. The chef set up with the Arroyo as the backdrop, served premium proteins throughout, performed for 90 minutes, and left the terrace exactly as it was. Our guests included Caltech faculty and longtime Pasadena neighbors — every person at the table said it was the finest private dinner they\'d attended in the city. Already planned for next year\'s anniversary.', location: 'Pasadena, CA', rating: 5, event: 'Anniversary Estate Dinner' },
    { name: 'Robert T.', text: 'Graduation backyard party — 44 family members at our Bungalow Heaven property. Our son graduated from Pasadena City College and we had family coming in from six states for the weekend. We needed a format that worked for a large group without restaurant logistics on the graduation Saturday. Dual chef stations, the fire tricks, flying shrimp, the full performance — every generation from toddlers to grandparents was completely captivated for two full hours. The best graduation event our family has ever done in twenty years of hosting them.', location: 'Pasadena, CA', rating: 5, event: 'Graduation Backyard Party' },
    { name: 'Nicole C.', text: 'Corporate team dinner at an Old Town Pasadena-area property — 28 JPL employees for a department milestone celebration. We needed something that felt genuinely different from the Pasadena restaurant circuit that our team knows well. The hibachi format delivered exactly that: live fire performance, interactive entertainment, excellent food, and 90 minutes that had every engineer at the table engaged from start to finish. Three people called me specifically the next day to say it was the best company event they\'d attended. Our new format for team milestones.', location: 'Pasadena, CA', rating: 5, event: 'Corporate Team Milestone Dinner' },
  ],
}

// ─── Section Variants (6 themes) ──────────────────────────────────────────────
const CA_SECTION_VARIANTS = [
  // T0 — Ultra-Luxury Estate
  {
    heroPill: 'California Estate & Luxury Events',
    experiencePill: 'The California Estate Private Hibachi Experience',
    experiencePoints: [
      'A certified teppanyaki chef arrives at your Beverly Hills, Malibu, Calabasas, or estate property fully self-contained — no gas hookup, no outdoor kitchen required',
      'Premium proteins are the baseline: filet mignon, lobster tail, Chilean sea bass, and wagyu available per guest',
      'Complete estate setup in 20 minutes, 90–120 minute live performance, full cleanup — your property is exactly as it was',
      'Groups of 8–40 guests: single station for intimate dinners, dual stations for larger estate events',
    ],
    experienceImage: '/pics/hibachi-chef-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, California`,
    areasPill: 'California Luxury Market',
    areasHeadline: (city) => `We Serve ${city} and All of Coastal and Luxury California`,
    areasIntro: [
      (city, state) => `We serve ${city} and every luxury California community — Beverly Hills, Malibu, Calabasas, Bel Air, Brentwood, Pacific Palisades, Hidden Hills, and every estate corridor across the Los Angeles metro and beyond.`,
      (city) => `Most ${city} estate event quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'California Luxury Estate Events',
    occasionHeadline: (city) => `What ${city} Estate Hosts Book Private Hibachi For`,
    occasionSubtext: [
      'Anniversary estate private dining events',
      'Milestone birthday luxury celebrations',
      'Executive client appreciation estate dinners',
      'Celebrity corridor landmark celebrations',
      'Holiday intimate estate dinner parties',
      'Graduation family gatherings at estate properties',
    ],
    faqPill: 'Estate Event FAQ',
    faqHeadline: (city, abbr) => `Private Hibachi Chef in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Does a private hibachi chef work at a Beverly Hills, Malibu, or Calabasas gated estate?', a: 'Yes — gated estates, beachfront properties, Bel Air compounds, and Calabasas community properties are all standard service. The chef is fully self-contained with a propane teppan grill — no gas line, no outdoor kitchen needed. Just vehicle access to the property and a flat outdoor area of approximately 10×10 feet.' },
      { q: 'Are premium proteins standard at California luxury estate events?', a: 'Yes — filet mignon, lobster tail, Chilean sea bass, king shrimp, and wagyu are all available as per-guest upgrades. Most Beverly Hills, Malibu, and estate-level California hosts select premium proteins across the full table. The upgrade is per-guest, not all-or-nothing.' },
      { q: 'How large a group can you serve at a California estate event?', a: 'We serve groups of 8 to 60+. For estate dinners of 8–20, a single chef station provides the most intimate experience. For larger events of 25–40, dual stations ensure everyone eats at the same time. Note your count at booking.' },
      { q: 'How far ahead should I book a Beverly Hills, Malibu, or Calabasas estate event?', a: 'Four to six weeks ahead for peak season and summer events. Standard dates confirm 3–4 weeks out. Same-day quotes are always available — submit your estate address and date and we respond the same day.' },
    ],
    testimonialSubheading: 'Beverly Hills, Malibu & California Luxury Estate Events',
  },

  // T1 — Coastal Premier
  {
    heroPill: 'California Coastal Estate Events',
    experiencePill: 'The California Coastal Private Hibachi Experience',
    experiencePoints: [
      'A certified teppanyaki chef arrives at your coastal California property — beachfront estate, ocean-view terrace, or vacation rental — fully self-contained',
      'Premium proteins standard: filet mignon, lobster tail, Chilean sea bass, and wagyu available per guest at coastal estate events',
      'No gas hookup required at any California coastal property, beach house, or vacation rental',
      'Complete setup in 20 minutes, 90–120 minute live performance, full cleanup — your property is exactly as it was',
    ],
    experienceImage: '/pics/hibachi-austin-home.jpg',
    experienceImageAlt: (city) => `Hibachi at home in ${city}, California`,
    areasPill: 'California Coastal Market',
    areasHeadline: (city) => `We Serve ${city} and the Entire California Coast`,
    areasIntro: [
      (city, state) => `We serve ${city} and every California coastal community — Malibu, Newport Beach, Laguna Beach, La Jolla, Del Mar, Coronado, Santa Barbara, and every beachfront and ocean-view community from the Bay Area to San Diego.`,
      (city) => `Most ${city} coastal event quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Coastal California Events',
    occasionHeadline: (city) => `What ${city} Coastal Hosts Book Private Hibachi For`,
    occasionSubtext: [
      'Beachfront estate anniversary celebrations',
      'Ocean-view milestone birthday events',
      'Coastal graduation family dinners',
      'Executive client appreciation coastal events',
      'Summer holiday beach property gatherings',
      'Vacation rental weekend celebration dinners',
    ],
    faqPill: 'Coastal Event FAQ',
    faqHeadline: (city, abbr) => `Hibachi at Home in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Does a private hibachi chef work at a Malibu, Newport Beach, or La Jolla coastal property?', a: 'Yes — beachfront properties, ocean-view estates, and coastal vacation rentals are all standard service. The setup is fully self-contained propane — no gas line, no outdoor kitchen needed. Just a flat outdoor area of approximately 10×10 feet and vehicle access to the property.' },
      { q: 'What\'s included in a California coastal private hibachi event?', a: 'Your chef arrives with the self-contained propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made ginger, yum yum, and teriyaki sauces, and all plates and utensils. Setup takes 20–30 minutes. Performance runs 90–120 minutes. Full cleanup when dinner ends.' },
      { q: 'Are premium proteins available at California coastal events?', a: 'Yes — filet mignon, lobster tail, Chilean sea bass, king shrimp, and wagyu are all available as per-guest upgrades. Most coastal California estate hosts select premium proteins across the full table.' },
      { q: 'How far ahead should I book a coastal California event?', a: 'Three to five weeks ahead for most coastal events. Peak summer dates and holiday weekends book 4–6 weeks ahead. Same-day quotes are always available — submit your date and coastal address and we respond immediately.' },
    ],
    testimonialSubheading: 'California Coastal & Beachfront Estate Events',
  },

  // T2 — Beach/Vacation Weekend
  {
    heroPill: 'California Beach & Vacation Events',
    experiencePill: 'The California Beach & Backyard Experience',
    experiencePoints: [
      'A certified teppanyaki chef arrives at your California beach home, vacation rental, or backyard — you host without managing the kitchen',
      'Beach community events, vacation rental dinners, and family backyard celebrations for 8–60+ guests',
      'For groups of 25+, dual chef stations keep everyone eating and watching at the same time',
      'No gas hookup required — self-contained propane, setup in 20 minutes on any flat outdoor surface',
    ],
    experienceImage: '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Mobile hibachi chef in ${city}, California`,
    areasPill: 'California Beach & Vacation Market',
    areasHeadline: (city) => `We Serve ${city} and Every California Beach Community`,
    areasIntro: [
      (city, state) => `We serve ${city} and every California beach and vacation community — Santa Monica, Manhattan Beach, Huntington Beach, Pacific Palisades, and every coastal community from Malibu to San Diego.`,
      (city) => `Most ${city} quotes are confirmed same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'California Beach & Backyard Events',
    occasionHeadline: (city) => `What ${city} Families and Visitors Book Private Hibachi For`,
    occasionSubtext: [
      'Beach community graduation backyard parties',
      'Vacation rental celebration dinners',
      'Milestone birthday beach house gatherings',
      'Family reunion summer coastal events',
      'Anniversary beachside backyard celebrations',
      'Holiday weekend vacation property dinners',
    ],
    faqPill: 'Beach Event FAQ',
    faqHeadline: (city, abbr) => `Mobile Hibachi in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Can a mobile hibachi chef serve a Santa Monica or Manhattan Beach backyard or vacation rental?', a: 'Yes — beach house backyards, vacation rental properties, and residential homes across California beach communities are all standard service. The chef is fully self-contained with a propane teppan grill — no gas hookup, no permanent infrastructure required.' },
      { q: 'How does private hibachi work for a beach community graduation party of 35?', a: 'For a group of 35, dual chef stations are recommended so everyone eats at the same time. The chef needs approximately 10×10 feet of flat outdoor clearance per station — standard in most California beach home backyards and vacation rental properties. Note your count at booking.' },
      { q: 'What\'s on the menu for a California beach house hibachi event?', a: 'Standard menu: chicken, steak, shrimp, salmon, vegetables, hibachi fried rice, lo mein, miso soup, garden salad, and house-made ginger, yum yum, and teriyaki sauces. Premium upgrades — filet mignon, lobster tail, Chilean sea bass — available per guest.' },
      { q: 'When should I book for a peak summer or graduation weekend in a California beach community?', a: 'Three to five weeks ahead for most dates. Peak summer weekends and May/June graduation Saturdays fill 4–6 weeks ahead. Same-day quotes always available — submit your date and we respond immediately.' },
    ],
    testimonialSubheading: 'California Beach Communities & Vacation Events',
  },

  // T3 — Tech/Corporate
  {
    heroPill: 'California Tech & Corporate Events',
    experiencePill: 'The California Corporate Private Hibachi Experience',
    experiencePoints: [
      'A certified teppanyaki chef arrives at your Silicon Valley, SoCal tech, or Bay Area corporate venue fully self-contained',
      'Tech company team events, startup milestone dinners, and corporate client appreciation events for groups of 8–60+',
      'For corporate groups over 25, dual stations ensure everyone eats and engages at the same time',
      'Professional setup in 20 minutes, 90–120 minute live performance, complete cleanup',
    ],
    experienceImage: '/pics/private-event-4.jpg',
    experienceImageAlt: (city) => `Corporate hibachi catering event in ${city}, California`,
    areasPill: 'California Tech & Corporate Market',
    areasHeadline: (city) => `We Serve ${city} and the Full California Corporate Corridor`,
    areasIntro: [
      (city, state) => `We serve ${city} and every California corporate and tech community — Silicon Valley, the Bay Area, Irvine, San Diego, and every technology corridor and business park across the state.`,
      (city) => `Most ${city} corporate and tech event quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Corporate Event Types',
    occasionHeadline: (city) => `What ${city} Companies Book Private Hibachi For`,
    occasionSubtext: [
      'Tech team appreciation and milestone dinners',
      'Startup investor and client entertainment events',
      'Corporate quarter-end celebration events',
      'Executive team-building dinner gatherings',
      'Company anniversary and launch celebrations',
      'Holiday corporate party events',
    ],
    faqPill: 'Corporate Event FAQ',
    faqHeadline: (city, abbr) => `Hibachi Catering in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Can you serve a California tech company team event at an office, venue, or executive home?', a: 'Yes — corporate campuses, hotel event spaces, executive home properties, and outdoor venue spaces across Silicon Valley, Irvine, and Southern California are all standard service. The chef is fully self-contained with a propane grill — no gas hookup, no permanent infrastructure required.' },
      { q: 'What does a California corporate hibachi catering event include?', a: 'Your chef arrives with the propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made sauces, and all plates and utensils. Setup takes 20–30 minutes. The performance runs 90–120 minutes. Full cleanup when dinner ends.' },
      { q: 'How large a corporate group can you serve in California?', a: 'We serve corporate groups of 8 to 60+. For groups over 25, dual chef stations are recommended. Note your headcount at booking and we\'ll configure accordingly.' },
      { q: 'How far ahead should I book a California tech or corporate event?', a: 'Two to four weeks ahead for most corporate events. Q4 holiday events and end-of-year parties book 4–6 weeks ahead. Same-day quotes always available.' },
    ],
    testimonialSubheading: 'California Tech Companies & Corporate Events',
  },

  // T4 — Wine Country/Destination
  {
    heroPill: 'California Wine Country & Destination Events',
    experiencePill: 'The California Wine Country Hibachi Experience',
    experiencePoints: [
      'A certified teppanyaki chef arrives at your Napa Valley, Sonoma, or California destination property fully self-contained — vineyard estate, vacation rental, or private home',
      'Wine country estate dining with premium proteins: filet mignon, lobster tail, Chilean sea bass, and wagyu available per guest',
      'No gas hookup required at any California vineyard estate, vacation rental, or resort property',
      'Complete setup in 20 minutes, 90–120 minute live performance, full cleanup — your property is exactly as it was',
    ],
    experienceImage: '/pics/hibachi-dallas-home.jpg',
    experienceImageAlt: (city) => `Hibachi at home in ${city}, California`,
    areasPill: 'California Wine Country & Destination Market',
    areasHeadline: (city) => `We Serve ${city} and All of California Wine Country`,
    areasIntro: [
      (city, state) => `We serve ${city} and every California wine country and destination community — Napa, Healdsburg, Sonoma, Calistoga, Yountville, Santa Barbara, and every vineyard estate and resort community across Northern and Central California.`,
      (city) => `Most ${city} destination event quotes are returned same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'Wine Country & Destination Events',
    occasionHeadline: (city) => `What ${city} Hosts Book Private Hibachi For`,
    occasionSubtext: [
      'Vineyard estate anniversary dinners',
      'Wine country vacation rental celebration events',
      'Milestone birthday destination gatherings',
      'Harvest season estate private dining events',
      'Bachelorette and engagement party weekends',
      'Family reunion destination celebration dinners',
    ],
    faqPill: 'Wine Country Event FAQ',
    faqHeadline: (city, abbr) => `Hibachi at Home in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Does a private hibachi chef work at a Napa or Sonoma vineyard estate or vacation rental?', a: 'Yes — vineyard properties, vacation rentals, private estates, and resort properties across Napa, Sonoma, and California wine country are all standard service. The setup is fully self-contained propane — no gas line, no outdoor kitchen needed. Just a flat outdoor area of approximately 10×10 feet and vehicle access to the property.' },
      { q: 'What\'s included in a California wine country private hibachi event?', a: 'Your chef arrives with the self-contained propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made ginger, yum yum, and teriyaki sauces, and all plates and utensils. Setup takes 20–30 minutes. Performance runs 90–120 minutes. Full cleanup when dinner ends.' },
      { q: 'Are premium proteins available at wine country estate events?', a: 'Yes — filet mignon, lobster tail, Chilean sea bass, king shrimp, and wagyu are all available as per-guest upgrades. Most Napa and Sonoma estate hosts select premium proteins across the full table to match the setting and occasion.' },
      { q: 'How far ahead should I book for a Napa Valley or Sonoma wine country event?', a: 'Three to five weeks ahead for most events. Harvest season (September–November) and peak summer dates fill 4–6 weeks ahead. Same-day quotes are always available — submit your date and address and we respond immediately.' },
    ],
    testimonialSubheading: 'Napa Valley, Sonoma & California Wine Country Events',
  },

  // T5 — Premium Suburb/Mixed
  {
    heroPill: 'California Estate & Backyard Events',
    experiencePill: 'The California Premium Suburb Experience',
    experiencePoints: [
      'A certified teppanyaki chef arrives at your California estate, suburban home, or event venue fully self-contained',
      'Estate anniversary dinners, graduation parties, corporate team events, and milestone celebrations for 8–60+ guests',
      'For graduation parties and corporate events over 25, dual chef stations keep everyone eating at the same time',
      'No gas hookup required — self-contained propane setup in 20 minutes on any flat outdoor surface',
    ],
    experienceImage: '/pics/hibachi-at-home.jpg',
    experienceImageAlt: (city) => `Hibachi catering event in ${city}, California`,
    areasPill: 'California Premium Suburb Market',
    areasHeadline: (city) => `We Serve ${city} and All of Greater California`,
    areasIntro: [
      (city, state) => `We serve ${city} and every California community — from the Los Angeles metro and Silicon Valley to San Diego, the Central Coast, and every California suburb and city.`,
      (city) => `Most ${city} quotes are confirmed same day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton: 'Check Availability',
    occasionPill: 'California Home & Estate Events',
    occasionHeadline: (city) => `What ${city} Hosts Book Private Hibachi For`,
    occasionSubtext: [
      'Estate anniversary and milestone dinners',
      'High school and college graduation backyard parties',
      'Corporate team milestone events',
      'Milestone birthday family celebrations',
      'Summer backyard gathering events',
      'Holiday intimate dinner parties',
    ],
    faqPill: 'California Event FAQ',
    faqHeadline: (city, abbr) => `Hibachi Catering in ${city}, ${abbr} — Common Questions`,
    faqSet: [
      { q: 'Does a private hibachi chef work at a California suburban home, estate, or corporate venue?', a: 'Yes — suburban homes, estate properties, corporate campuses, and event venues across California are all standard service. The chef is fully self-contained with a propane teppan grill — no gas hookup, no permanent infrastructure required. Just a flat outdoor area of approximately 10×10 feet.' },
      { q: 'What\'s included in a California private hibachi event?', a: 'Your chef arrives with the propane teppan grill, all proteins (standard and premium), fried rice, vegetables, miso soup, salad, house-made ginger, yum yum, and teriyaki sauces, and all plates and utensils. Setup takes 20–30 minutes. Performance runs 90–120 minutes. Full cleanup when dinner ends.' },
      { q: 'How large a group can you serve in California?', a: 'We serve groups of 8 to 60+. For graduation parties and corporate events over 25, dual chef stations are recommended so everyone eats at the same time. Note your count at booking and we\'ll configure accordingly.' },
      { q: 'How far ahead should I book a California private hibachi event?', a: 'Two to four weeks ahead for most events. Graduation season (May–June) and peak summer dates fill 4–6 weeks ahead. Same-day quotes always available — submit your date and address and we respond immediately.' },
    ],
    testimonialSubheading: 'Pasadena, San Francisco & California Premium Events',
  },
]

// ─── How It Works ──────────────────────────────────────────────────────────────
const CA_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings.`,
  steps: [
    { step: '01', title: 'Submit Your Date & Address', desc: 'Give us your California address, event date, and approximate guest count. We respond with a personalized same-day quote — Beverly Hills estate, Malibu beach property, Napa vineyard, or any California home.' },
    { step: '02', title: 'Confirm Your Menu',          desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included.' },
    { step: '03', title: 'Lock Your Date',             desc: 'A deposit confirms your event immediately. Your California date is reserved — no double-bookings, no last-minute uncertainty.' },
    { step: '04', title: 'Chef Travels to You',        desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No hookup required at any California property.' },
    { step: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your property is left exactly as it was.' },
  ],
}

// ─── Blog Posts (keyed by slot: variant % 3) ──────────────────────────────────
// Slot 0: T0 (Ultra-Luxury) + T3 (Tech/Corporate)
// Slot 1: T1 (Coastal Premier) + T4 (Wine Country)
// Slot 2: T2 (Beach/Vacation) + T5 (Premium Suburb)
const CA_BLOG_POSTS = [
  // Slot 0 — Ultra-Luxury + Tech/Corporate
  [
    {
      slug:     'private-hibachi-los-angeles-beverly-hills-malibu',
      title:    'Private Hibachi Chef in Los Angeles: Beverly Hills Estate Dinners, Malibu Beach Properties and the LA Luxury Market',
      excerpt:  'From Rodeo Drive corridor estate anniversary dinners and Carbon Beach private events to Calabasas gated community celebrations and Manhattan Beach graduation parties — how Los Angeles\'s private hibachi market works.',
      category: 'Guide',
      readTime: '8 min read',
    },
    {
      slug:     'hibachi-at-home-california-guide',
      title:    'Private Hibachi Chef in California: The Complete Guide to All Six Markets',
      excerpt:  'From Beverly Hills estate dinners and Malibu beach events to Napa wine country celebrations, Silicon Valley corporate team dinners, and Palm Springs vacation rental parties — how private hibachi works across California.',
      category: 'Guide',
      readTime: '10 min read',
    },
  ],
  // Slot 1 — Coastal Premier + Wine Country
  [
    {
      slug:     'private-hibachi-napa-wine-country-palm-springs',
      title:    'Private Hibachi in Napa, Wine Country and Palm Springs: Vineyard Estates, Desert Vacation Rentals and California Destination Events',
      excerpt:  'From Napa Valley vineyard anniversary dinners and Healdsburg estate celebrations to Palm Springs vacation rental parties and Palm Desert resort gatherings — California\'s wine country and desert destination hibachi markets.',
      category: 'Guide',
      readTime: '8 min read',
    },
    {
      slug:     'hibachi-at-home-california-guide',
      title:    'Private Hibachi Chef in California: The Complete Guide to All Six Markets',
      excerpt:  'From Beverly Hills estate dinners and Malibu beach events to Napa wine country celebrations, Silicon Valley corporate team dinners, and Palm Springs vacation rental parties — how private hibachi works across California.',
      category: 'Guide',
      readTime: '10 min read',
    },
  ],
  // Slot 2 — Beach/Vacation + Premium Suburb
  [
    {
      slug:     'private-hibachi-los-angeles-beverly-hills-malibu',
      title:    'Private Hibachi Chef in Los Angeles: Beverly Hills Estate Dinners, Malibu Beach Properties and the LA Luxury Market',
      excerpt:  'From Rodeo Drive corridor estate anniversary dinners and Carbon Beach private events to Calabasas gated community celebrations and Manhattan Beach graduation parties — how Los Angeles\'s private hibachi market works.',
      category: 'Guide',
      readTime: '8 min read',
    },
    {
      slug:     'hibachi-at-home-california-guide',
      title:    'Private Hibachi Chef in California: The Complete Guide to All Six Markets',
      excerpt:  'From Beverly Hills estate dinners and Malibu beach events to Napa wine country celebrations, Silicon Valley corporate team dinners, and Palm Springs vacation rental parties — how private hibachi works across California.',
      category: 'Guide',
      readTime: '10 min read',
    },
  ],
]

// ─── getCaCityData ─────────────────────────────────────────────────────────────
export function getCaCityData(citySlug, cityName) {
  const entry = CA_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry

  const customMeta = CA_CUSTOM_META[citySlug] || null

  return {
    cityName,
    stateAbbr:   'CA',
    stateName:   'California',
    stateSlug:   'california',
    variant:     v % 3,

    heroImage:    CA_THEME_HEROES[v],
    heroSubtitle: CA_HERO_SUBTITLES[v](cityName),
    heroH1Prefix: profileIdx != null ? CA_PROFILE_H1_PREFIXES[profileIdx] : CA_THEME_H1_PREFIXES[v],

    uniqueIntroVariant:   profileIdx != null ? 588 + profileIdx : 582 + v,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: profileIdx != null ? 588 + profileIdx : 582 + v,

    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),

    testimonials:      CA_TESTIMONIALS[citySlug] || [],
    nearbyCities:      nearby,
    nearbyMajorCities: ['Beverly Hills', 'Newport Beach', 'Napa', 'Palm Springs', 'Santa Barbara', 'Atherton'],
  }
}

// ─── getCaBlogPosts ────────────────────────────────────────────────────────────
export function getCaBlogPosts(variant, count = 3) {
  return CA_BLOG_POSTS[variant % 3].slice(0, count)
}

// ─── getCaHowItWorks ──────────────────────────────────────────────────────────
export function getCaHowItWorks(citySlug) {
  return CA_HOW_IT_WORKS
}

// ─── getCaSectionVariant ──────────────────────────────────────────────────────
export function getCaSectionVariant(citySlug) {
  const entry = CA_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return CA_SECTION_VARIANTS[entry.v]
}

// ─── getCaCityImage ───────────────────────────────────────────────────────────
export function getCaCityImage(citySlug) {
  return CA_CITY_IMAGE_MAP[citySlug] || null
}

// ─── getCaSupportImages ───────────────────────────────────────────────────────
export function getCaSupportImages(citySlug) {
  return CA_SUPPORT_IMAGES[citySlug] || null
}
