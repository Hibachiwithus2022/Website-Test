// ─── Hero image pool ─────────────────────────────────────────────────────────
// 4 real brand photos — rotated by variant so every city gets a different image
export const HERO_IMAGES = [
  '/pics/hero-1.jpg',  // Backyard Hibachi
  '/pics/hero-2.jpg',  // Hibachi at Home Dallas
  '/pics/hero-3.jpg',  // Hibachi at Home Raleigh
  '/pics/hero-4.jpg',  // Hibachi at Home Texas
]

// ─── City-specific data for each city page ──────────────────────────────────
// Add a new entry per city. The `variant` field (0–4) rotates intro
// headings, FAQ wording, CTA phrasing, why-us bullets, and hero image automatically.

export const CITY_DATA = {

  // ── TEXAS ──────────────────────────────────────────────────────────────────
  dallas: {
    cityName:    'Dallas',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     0,
    heroImage:   '/pics/hero-1.jpg',
    nearbyCities: [
      'Plano','Frisco','McKinney','Allen','Garland','Irving','Carrollton',
      'Richardson','Mesquite','Grand Prairie','Lewisville','Flower Mound',
      'Denton','Grapevine','Southlake','Coppell','Rockwall',
    ],
    nearbyMajorCities: ['Fort Worth','Arlington','Houston','Austin'],
    localHighlights: [
      'Backyard hibachi for DFW\'s legendary outdoor entertaining culture',
      'Perfect for Uptown and Knox-Henderson dinner parties',
      'Ideal for Deep Ellum birthday celebrations and rooftop events',
      'Dallas corporate event teams love the chef showmanship',
      'Great for Plano and Frisco family gatherings',
    ],
    featuredOccasions: [
      'Birthday Parties','Bachelorette Parties','Anniversary Dinners',
      'Corporate Events','Graduation Parties','Family Reunions',
      'Date Nights','Holiday Gatherings','Neighborhood Cookouts','Bachelor Parties',
    ],
    faqSet: [
      {
        q: 'Do you travel to my neighborhood in Dallas?',
        a: 'Yes — we serve all Dallas neighborhoods including Uptown, Oak Cliff, Lake Highlands, Preston Hollow, Bishop Arts, East Dallas, North Dallas, and beyond. Frisco, Plano, and McKinney are also covered at no extra travel fee in most cases.',
      },
      {
        q: 'Can hibachi be set up indoors in a Dallas home?',
        a: 'Absolutely. We can set up indoors in a large kitchen, open living area, garage, or covered patio — anywhere with at least 10×10 ft of clearance and adequate ventilation. Outdoor patios and backyards are most common in Dallas.',
      },
      {
        q: 'How much outdoor or indoor space does the hibachi setup require?',
        a: 'A minimum 10×10 ft flat area for the grill and chef. Guests sit or stand around the grill, so plan for approximately 2 ft per person around the cooking station.',
      },
      {
        q: 'What do I need to provide for the event?',
        a: 'Tables and chairs for your guests. We bring everything else: the teppan grill, propane, all ingredients, sauces, plates, chopsticks, and serving utensils.',
      },
      {
        q: 'How far in advance should I book in Dallas?',
        a: 'Weekend evenings in Dallas typically book 2–3 weeks out. For Saturday nights in summer, 4+ weeks is safest. Weekday events can often be arranged with 5–7 days notice.',
      },
      {
        q: 'Do you cook at Airbnbs or vacation rentals in Dallas?',
        a: 'Yes — many of our Dallas events take place at short-term rentals. Just confirm the property allows outdoor cooking or open-flame cooking before booking.',
      },
    ],
    testimonials: [
      {
        text: '"We booked for my wife\'s 40th in Plano — 28 guests and the chef had everyone laughing and cheering the whole time. The food was incredible. Already planning round two."',
        name: 'Marcus T.',
        city: 'Plano, TX',
        event: 'Birthday Party',
        initials: 'MT',
      },
      {
        text: '"Used Hibachi Connect for a team dinner in Uptown Dallas. 35 people, zero stress on our end. Setup was fast, cleanup was complete, and every single person said it was the best work event ever."',
        name: 'Jennifer L.',
        city: 'Dallas, TX',
        event: 'Corporate Event',
        initials: 'JL',
      },
      {
        text: '"Graduation party for my son in Frisco. 45 guests, outdoor backyard setup. Chef had the fire tricks going and kids were absolutely losing it. 10/10 would book again."',
        name: 'David & Rita O.',
        city: 'Frisco, TX',
        event: 'Graduation Party',
        initials: 'DO',
      },
    ],
    uniqueIntroVariant: 0,
    uniqueWhyUsVariant: 0,
    uniqueClosingVariant: 0,
  },

  houston: {
    cityName:    'Houston',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     1,
    heroImage:   '/pics/hero-2.jpg',
    nearbyCities: [
      'Sugar Land','Katy','The Woodlands','Pearland','Pasadena',
      'League City','Friendswood','Missouri City','Stafford','Cypress',
      'Spring','Humble','Baytown','Conroe',
    ],
    nearbyMajorCities: ['Dallas','Austin','San Antonio','Galveston'],
    localHighlights: [
      'Perfect for Memorial and River Oaks backyard dinner parties',
      'Great for Montrose and Midtown birthday celebrations',
      'Energy Corridor corporate events done right',
      'The Woodlands and Katy family reunions love the full setup',
      'Galveston beach house weekend event favorite',
    ],
    featuredOccasions: [
      'Anniversary Dinners','Birthday Parties','Corporate Retreats',
      'Graduation Parties','Family Reunions','Bachelorette Parties',
      'Holiday Gatherings','Date Nights','Neighborhood Cookouts','Bachelor Parties',
    ],
    faqSet: [
      {
        q: 'Do you serve all Houston neighborhoods and suburbs?',
        a: 'Yes — we cover Greater Houston including Katy, Sugar Land, The Woodlands, Pearland, Pasadena, Clear Lake, Memorial, Midtown, Heights, Montrose, and all surrounding suburbs.',
      },
      {
        q: 'Can the chef set up in a Houston backyard during summer heat?',
        a: 'Our chefs are trained for Houston\'s humid summers. We recommend evening events (after 6 PM) during summer months. Covered patios and open-air spaces with ceiling fans work great.',
      },
      {
        q: 'What do I need to have ready for the chef\'s arrival?',
        a: 'Tables and chairs for your guests. We handle the grill, propane, all food, sauces, plates, chopsticks, and cleanup. Arrive 30 minutes early to set up.',
      },
      {
        q: 'How many people can one hibachi chef serve?',
        a: 'One chef typically serves 10–20 guests comfortably per session. For 25+ guests, we recommend two chef stations. We scale up to 200+ guests with multiple stations.',
      },
      {
        q: 'Can you cook at an Airbnb or vacation rental in Houston?',
        a: 'Yes — many Houston events are at short-term rentals. Confirm with the host that outdoor or open-flame cooking is permitted and ensure adequate ventilation if indoors.',
      },
    ],
    testimonials: [
      {
        text: '"Booked for a bachelorette dinner in Midtown — 20 ladies, incredible food, chef was hilarious. Way more fun than any restaurant we\'ve ever been to."',
        name: 'Alicia M.',
        city: 'Houston, TX',
        event: 'Bachelorette Party',
        initials: 'AM',
      },
      {
        text: '"Annual company dinner in The Woodlands. 50 employees, two chef stations, flawless from start to finish. Our team has been talking about it for months."',
        name: 'Paul K.',
        city: 'The Woodlands, TX',
        event: 'Corporate Dinner',
        initials: 'PK',
      },
      {
        text: '"Backyard birthday for my daughter in Katy — 40 guests. Chef set up in 25 minutes and the show was absolutely wild. Kids and adults both loved it."',
        name: 'Sandra R.',
        city: 'Katy, TX',
        event: 'Birthday Party',
        initials: 'SR',
      },
    ],
    uniqueIntroVariant: 1,
    uniqueWhyUsVariant: 1,
    uniqueClosingVariant: 1,
  },

  austin: {
    cityName:    'Austin',
    stateName:   'Texas',
    stateAbbr:   'TX',
    stateSlug:   'texas',
    variant:     2,
    heroImage:   '/pics/hero-3.jpg',
    nearbyCities: [
      'Round Rock','Cedar Park','Georgetown','Pflugerville','Kyle',
      'Buda','San Marcos','Lakeway','Bee Cave','Bastrop','Leander',
    ],
    nearbyMajorCities: ['San Antonio','Houston','Dallas','Waco'],
    localHighlights: [
      'Perfect for East Austin house parties and rooftop events',
      'South Congress and Bouldin Creek neighborhood dinners',
      'Tech company team events in the Domain and North Austin',
      'Lake Travis and Lake Austin waterfront celebrations',
      'South by Southwest season pre-parties and gatherings',
    ],
    featuredOccasions: [
      'Backyard Dinner Parties','Tech Team Events','Birthday Celebrations',
      'Bachelorette Parties','Anniversary Dinners','Graduation Parties',
      'Holiday Cookouts','Date Nights','Neighborhood Gatherings','Corporate Lunches',
    ],
    faqSet: [
      {
        q: 'Do you serve East Austin, North Austin, and the suburbs?',
        a: 'Yes — we cover all of Austin including East Austin, South Austin, North Austin, the Domain area, plus Round Rock, Cedar Park, Georgetown, Pflugerville, and surrounding suburbs.',
      },
      {
        q: 'Can you set up at an Airbnb or vacation rental in the Austin area?',
        a: 'Yes — Austin has a vibrant short-term rental scene and we frequently cook at Airbnbs and VRBOs. Confirm with your host that open-flame cooking is allowed outdoors.',
      },
      {
        q: 'Can the chef cook at a Lake Travis or Lake LBJ vacation property?',
        a: 'Absolutely — lakehouse and waterfront hibachi events are some of our most spectacular. Book 3–4 weeks ahead for weekend lake property events.',
      },
      {
        q: 'What proteins are available for Austin events?',
        a: 'Our standard proteins include chicken, steak, shrimp, and tofu. Premium add-ons include lobster tail, filet mignon, scallops, and salmon. We also love sourcing local Texas proteins when requested.',
      },
      {
        q: 'Do you serve smaller towns around Austin like Bastrop or Wimberley?',
        a: 'Yes — we travel throughout the Austin metro and surrounding Hill Country communities. Travel fees may apply for locations more than 30 miles from central Austin.',
      },
    ],
    testimonials: [
      {
        text: '"East Austin birthday dinner for 22 people. Chef was an absolute showman — fire tricks, shrimp toss, the whole deal. Perfectly Austin vibe. Would 100% book again."',
        name: 'Tyler B.',
        city: 'Austin, TX',
        event: 'Birthday Party',
        initials: 'TB',
      },
      {
        text: '"Tech company team dinner in the Domain. 35 people, everyone raving about it. Way more memorable than a restaurant reservation. Seamless setup and cleanup."',
        name: 'Priya N.',
        city: 'Austin, TX',
        event: 'Team Event',
        initials: 'PN',
      },
      {
        text: '"Lake Travis bachelorette weekend — hibachi night was THE highlight. The chef made the whole experience so fun and personal. Cannot recommend enough."',
        name: 'Ashley C.',
        city: 'Austin, TX',
        event: 'Bachelorette Party',
        initials: 'AC',
      },
    ],
    uniqueIntroVariant: 2,
    uniqueWhyUsVariant: 2,
    uniqueClosingVariant: 2,
  },

  // Template for adding new cities:
  // [city-slug]: {
  //   cityName: '',
  //   stateName: '',
  //   stateAbbr: '',
  //   stateSlug: '',
  //   variant: 0 | 1 | 2,
  //   heroImage: '/brand/hero-bg.jpg',
  //   nearbyCities: [],
  //   nearbyMajorCities: [],
  //   localHighlights: [],
  //   featuredOccasions: [],
  //   faqSet: [],
  //   testimonials: [],
  //   uniqueIntroVariant: 0 | 1 | 2,
  //   uniqueWhyUsVariant: 0 | 1 | 2,
  //   uniqueClosingVariant: 0 | 1 | 2,
  // },
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT ROTATION ENGINE
// Each table has 5 entries. City variant (0–4) selects the row, giving every
// city a genuinely distinct voice. Add more entries to scale further.
// ─────────────────────────────────────────────────────────────────────────────

// ── 5 Hero subtitles ─────────────────────────────────────────────────────────
export const HERO_SUBTITLES = [
  (city, state) => `Private Chef • Backyard Parties • ${city} Hibachi Experience`,
  (city, state) => `Live Teppanyaki • Any Occasion • Delivered to Your ${city} Home`,
  (city, state) => `Mobile Hibachi Chef • Fire Cooking • Serving All of ${state}`,
  (city, state) => `${city}'s Favorite Private Chef Experience • From $60/Adult`,
  (city, state) => `Book a Teppanyaki Chef in ${city} • Full Setup & Cleanup Included`,
]

// ── 5 Intro variants — each leads with a distinct angle ──────────────────────
// 0 = Entertainment-first  1 = Convenience-first  2 = Craft/food-first
// 3 = Social/memory-first  4 = Value-first
export const INTRO_VARIANTS = [
  // ── 0: Entertainment-first ─────────────────────────────────────────────────
  {
    angle:    'entertainment',
    headline: (city) => `The Show Comes to You in ${city}`,
    opening:  (city, state) =>
      `Hibachi dining has always been as much about the performance as the food — and Hibachi Connect brings that whole experience directly to your ${city} backyard. A certified teppanyaki chef arrives at your home with a full propane grill, fresh ingredients, and the kind of fire-trick showmanship that turns an ordinary dinner into the event your guests talk about for years.`,
    middle:   (city, state) =>
      `From the first flying shrimp to the flaming onion volcano, every minute of the cook is pure entertainment. Your chef engages the whole crowd — kids, grandparents, first-timers, hibachi veterans — and personally prepares every plate on the spot. No shared platters. No cold food. Every bite cooked to order, right in front of you.`,
    closing:  (city, state) =>
      `We've built the service around one idea: the hibachi experience should be even better at home than at the restaurant. No waiting for a table, no crowded dining room, no rushed turns. Just your people, your space, and a chef who owns the room. That's hibachi at home in ${city} — and it starts at $60 per adult.`,
  },
  // ── 1: Convenience-first ───────────────────────────────────────────────────
  {
    angle:    'convenience',
    headline: (city) => `Forget the Restaurant. We Come to You, ${city}.`,
    opening:  (city, state) =>
      `Planning a dinner event in ${city} doesn't have to mean chasing reservations, splitting into different cars, or spending the night managing logistics. With Hibachi Connect, you pick the date, we do everything else. A professional hibachi chef shows up to your home with a full teppan grill, all the ingredients, and complete setup — roughly 30 minutes before your guests arrive.`,
    middle:   (city, state) =>
      `Your job during the event? Sit back. The chef handles every detail: cooking individual proteins to order, keeping the fried rice and vegetables hot, entertaining the crowd, and managing the pacing of the meal. When the last plate is served and the last chopstick is set down, we clean up completely and disappear. You're left with happy guests and zero dishes.`,
    closing:  (city, state) =>
      `Hibachi Connect has run hundreds of events across ${state} — birthday dinners, corporate retreats, graduation parties, bachelorette nights, and ordinary Saturdays that became anything but ordinary. If you can host 10 people in ${city}, we can make it an unforgettable evening. Pricing starts at $60 per adult, $600 minimum.`,
  },
  // ── 2: Craft/food-first ────────────────────────────────────────────────────
  {
    angle:    'craft',
    headline: (city) => `Real Teppanyaki Craft, Right in Your ${city} Backyard`,
    opening:  (city, state) =>
      `There's a reason teppanyaki has endured for decades as one of the most celebrated cooking styles in the world: it rewards craft. The sear of a steak at the perfect temperature. Fried rice built in layers, grain by grain. Shrimp that hits the hot steel at exactly the right moment. Hibachi Connect's certified chefs bring that technical precision to your ${city} home — with none of the restaurant markup.`,
    middle:   (city, state) =>
      `Every event menu is sourced fresh: hand-selected proteins, seasonal vegetables, and house-made sauces prepared in advance. Your chef arrives with everything prepped for execution — which means from the moment the grill heats up, every second is dedicated to cooking and performance. No shortcuts. No pre-cooked staging. Everything your guests eat is made fresh on the teppan, in front of them.`,
    closing:  (city, state) =>
      `We serve ${city} and surrounding areas with the same standards we'd hold any professional kitchen to — because that's what your guests deserve. Every guest picks 2 proteins at $60 per adult, with premium upgrades like filet mignon and lobster tail available for any event.`,
  },
  // ── 3: Social/memory-first ────────────────────────────────────────────────
  {
    angle:    'social',
    headline: (city) => `The Night Your ${city} Guests Will Still Be Talking About`,
    opening:  (city, state) =>
      `Some dinners are forgettable. This one won't be. When you book a private hibachi chef in ${city}, you're not just feeding people — you're giving them a shared experience. The kind where everyone is facing the same direction, watching the same show, laughing at the same fire tricks, and reacting to the same perfectly timed shrimp toss. That energy is contagious, and it makes for a completely different kind of gathering.`,
    middle:   (city, state) =>
      `Hibachi Connect has hosted everything from 10-person anniversary dinners to 120-person corporate parties across ${state}. What we hear most from hosts afterward isn't about the food (though the food is excellent). It's that the chef made strangers feel like old friends by the time dessert came around. The teppanyaki grill creates a social center — a reason for everyone to look up from their phones and just be present.`,
    closing:  (city, state) =>
      `Whether you're celebrating something huge or just making an ordinary weekend extraordinary, private hibachi in ${city} is the kind of thing people request at the next event. Book a certified chef through Hibachi Connect. Starting at $60 per adult, $600 minimum. Setup and cleanup fully included.`,
  },
  // ── 4: Value-first ────────────────────────────────────────────────────────
  {
    angle:    'value',
    headline: (city) => `More Than a Restaurant Night — and for Less Than You'd Expect`,
    opening:  (city, state) =>
      `A hibachi restaurant in ${city} for a group of 20 guests? You're looking at two-hour waits, split-table seating, fixed menus, and a bill north of $1,500 before tip. Private hibachi at home through Hibachi Connect serves those same 20 guests for $60 per adult — everyone at the same table, with a dedicated chef, customized proteins, and a show built around your crowd.`,
    middle:   (city, state) =>
      `What's included in that price would surprise most people. Your chef arrives 30 minutes early to set up the teppan grill at your ${city} home. They bring all ingredients: fresh proteins, vegetables, rice, and house-made sauces. They cook every plate to order. They entertain throughout. And when the last course is done, they break down and clean up completely. Zero additional labor cost. Zero tip anxiety. Zero logistics on your end.`,
    closing:  (city, state) =>
      `The $600 event minimum covers 8–10 guests at the standard rate. For larger groups, add-on proteins (lobster tail, filet, scallops) and premium packages are available. Travel fees may apply outside ${city}'s metro area. Get a free, no-obligation quote today — most ${city} bookings are confirmed within a few hours.`,
  },
]

// ── 5 Why-Us variants ────────────────────────────────────────────────────────
export const WHY_US_VARIANTS = [
  // 0: Performance-led
  {
    headline: (city) => `Why ${city} Keeps Booking Hibachi Connect`,
    items: (city) => [
      { icon: '🔥', title: 'Live Fire Performance',         desc: 'Volcano tricks, mid-air flips, and fire shows — your chef entertains the entire crowd while cooking every plate to order.' },
      { icon: '🍱', title: 'Fresh, Made-to-Order Meals',   desc: 'No pre-staged food. Every protein, every bowl of fried rice, every vegetable is cooked fresh on the teppan in front of your guests.' },
      { icon: '✅', title: 'We Handle Everything',          desc: 'Setup 30 minutes early, full service throughout, complete cleanup at the end. Your only job is enjoying the night.' },
      { icon: '📍', title: `Serving All of ${city}`,       desc: 'Backyard, covered patio, garage, rooftop, or rented venue — we bring the grill to wherever you are.' },
      { icon: '👥', title: 'Scales to Any Group',          desc: 'Ten guests at a dinner party or 200 at a corporate event — we scale the chef stations to fit your headcount.' },
      { icon: '💯', title: 'Perfect Satisfaction Record',  desc: 'Every event backed by our 100% satisfaction commitment. We don\'t leave until the host is happy.' },
    ],
  },
  // 1: Ease-led
  {
    headline: (city) => `The Easiest Event You'll Ever Host in ${city}`,
    items: (city) => [
      { icon: '👨‍🍳', title: 'Certified Teppanyaki Chefs',  desc: 'Every chef trains in authentic Japanese hibachi technique — knife skills, fire performance, timing, and crowd engagement.' },
      { icon: '🏡', title: 'Fully Mobile Setup',           desc: 'Backyard, patio, driveway, or indoors with ventilation — we adapt to your space and make it work.' },
      { icon: '📋', title: 'No Surprise Pricing',          desc: '$60/adult, $30/child, $600 event minimum. Your quote is locked before the event. No hidden charges, ever.' },
      { icon: '🧹', title: 'Arrive Clean, Leave Clean',   desc: 'We set up early and clean up completely. Many hosts say it\'s the easiest party they\'ve thrown in years.' },
      { icon: '🎯', title: 'Fast, Responsive Booking',     desc: 'Submit a request and get a quote within hours. Most ${city} events are confirmed the same day.' },
      { icon: '🍤', title: 'Menu Built Around You',        desc: 'Choose proteins, add premium upgrades, mix and match per guest preference. We customize, you enjoy.' },
    ],
  },
  // 2: Differentiation-led
  {
    headline: (city) => `What Separates Our ${city} Hibachi Service`,
    items: (city) => [
      { icon: '🎭', title: 'Dinner + Entertainment in One', desc: 'No restaurant can give your guests a front-row seat to their own meal being cooked live. We can.' },
      { icon: '🥩', title: 'Premium Protein Options',       desc: 'Chicken, steak, shrimp, salmon, scallops, filet mignon, lobster tail — build a custom menu for any occasion.' },
      { icon: '📞', title: 'Same-Day Response',             desc: 'We pick up, respond, and quote fast. No waiting days for a callback on your event inquiry.' },
      { icon: '🌆', title: `All ${city} Areas Covered`,    desc: `From the city center to the outer suburbs — if you're within range of ${city}, we come to you.` },
      { icon: '🚀', title: 'Zero-Effort for Hosts',        desc: 'We set up, cook, serve, and disappear. Guests think you planned something extraordinary. You barely lifted a finger.' },
      { icon: '⭐', title: 'Rated 5 Stars Nationwide',     desc: 'Perfect ratings across 200+ events. The experience speaks for itself — and so do our reviews.' },
    ],
  },
  // 3: Trust-led
  {
    headline: (city) => `Why ${city} Families Trust Hibachi Connect`,
    items: (city) => [
      { icon: '🔐', title: 'Fully Insured Service',         desc: 'Every Hibachi Connect event is fully covered. You can host confidently knowing the professionals have it handled.' },
      { icon: '📅', title: 'Reliable, On-Time Chefs',       desc: 'We arrive 30 minutes before your event — every time. Your guests are never left waiting for the food to start.' },
      { icon: '🌟', title: '5.0 Star Rating',               desc: 'Every event is reviewed. Every chef is accountable. We maintain a perfect record because anything less isn\'t acceptable.' },
      { icon: '💬', title: 'Real Communication',            desc: 'You talk to a real person when you book, not a chatbot. We answer questions before, during, and after your event.' },
      { icon: '🔄', title: 'Repeat Hosts Love Us',          desc: 'Over 40% of our events are from returning hosts or referrals. That\'s the best review we could ask for.' },
      { icon: '🤝', title: 'Satisfaction Guaranteed',       desc: 'If something isn\'t right on the night, we make it right. No arguments, no excuses.' },
    ],
  },
  // 4: Local pride-led
  {
    headline: (city) => `Built for ${city}'s Backyard Culture`,
    items: (city) => [
      { icon: '🏆', title: `${city}'s Top-Rated Choice`,   desc: `Hundreds of ${city}-area families have hosted their most memorable dinners with Hibachi Connect. We're not new to this.` },
      { icon: '🎉', title: 'Every Occasion Covered',        desc: 'Birthdays, bachelorette parties, graduations, corporate events, holidays, date nights — we\'ve done it all in this area.' },
      { icon: '🔥', title: 'Fire Tricks Included',          desc: 'The onion volcano, flaming shrimp toss, and chef juggling aren\'t extras — they\'re part of every single event.' },
      { icon: '🍽️', title: 'Restaurant Quality at Home',   desc: 'Premium teppanyaki-grade ingredients, freshly cooked to order. Better than most restaurants, without leaving your yard.' },
      { icon: '📦', title: 'Everything Provided',           desc: 'Grill, propane, ingredients, sauces, plates, chopsticks. You bring chairs. We bring everything else.' },
      { icon: '🌿', title: 'Indoor or Outdoor',             desc: 'No backyard? No problem. Covered patios, garages, and ventilated indoor spaces work just as well.' },
    ],
  },
]

// ── 5 Closing CTA variants ───────────────────────────────────────────────────
export const CLOSING_VARIANTS = [
  {
    headline: (city) => `Ready to Book Hibachi at Home in ${city}?`,
    sub:      (city) => `Weekend dates in ${city} fill up fast — especially for birthdays and summer evenings. Lock in your date before it's gone.`,
    urgency:  'Weekend slots fill 2–3 weeks out. Reserve yours today.',
    btnPrimary: 'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },
  {
    headline: (city) => `Plan Your ${city} Hibachi Party Today`,
    sub:      (city) => `Tell us your date, guest count, and location — we'll build a custom quote for your ${city} event within hours.`,
    urgency:  'Limited weekend availability. Don\'t wait to reserve.',
    btnPrimary: 'Request a Quote',
    btnSecondary: 'See How It Works',
  },
  {
    headline: (city) => `Your ${city} Guests Are Going to Love This`,
    sub:      (city) => `Fire tricks, fresh food, zero cleanup — hibachi at home in ${city} is the event upgrade your crowd has been waiting for.`,
    urgency:  'Weekend slots book 3+ weeks ahead during peak season.',
    btnPrimary: 'Book Now',
    btnSecondary: 'Call Us Instead',
  },
  {
    headline: (city) => `The Best Event You'll Host in ${city} This Year`,
    sub:      (city) => `Don't overthink it. Pick a date, get a quote, and let a certified hibachi chef handle the rest. It's that simple.`,
    urgency:  'Most quotes confirmed same day. Get yours now.',
    btnPrimary: 'Get a Free Quote',
    btnSecondary: 'See Pricing',
  },
  {
    headline: (city) => `Bring the Fire to Your ${city} Backyard`,
    sub:      (city) => `A certified teppanyaki chef. Premium proteins. Full setup and cleanup. Starting at $60 per adult in ${city}.`,
    urgency:  'Availability fills fast on weekend evenings — act early.',
    btnPrimary: 'Check Availability',
    btnSecondary: 'Learn More',
  },
]

// ── Shared FAQ pool — 15 questions, city pages draw from this + city-specific ─
// Each FAQ has a `pool` tag so pages can filter by topic for variety
export const SHARED_FAQ_POOL = [
  {
    pool: 'space',
    q: 'Can hibachi be set up indoors?',
    a: 'Yes — we can set up in any large indoor space with proper ventilation: an open garage, spacious living/dining area, or covered patio. Most of our events are outdoors, but we adapt to your situation. Minimum 10×10 ft clearance required and ventilation is essential for safety.',
  },
  {
    pool: 'space',
    q: 'How much space does the hibachi setup need?',
    a: 'Plan for a minimum 10×10 ft flat area for the grill and chef. Guests typically stand or sit in a horseshoe around the station. For groups of 20+, we recommend 2 ft of perimeter space per person around the cooking area.',
  },
  {
    pool: 'guests',
    q: 'Are kids welcome at hibachi events?',
    a: 'Absolutely — kids are usually the most enthusiastic guests at hibachi events. Children ages 4–12 are $30 each. Ages 3 and under eat free. The fire tricks and shrimp tosses are crowd favorites for younger guests. Just let your chef know the age range so they can adjust the show accordingly.',
  },
  {
    pool: 'logistics',
    q: 'Do you provide tables, chairs, or utensils?',
    a: 'We provide plates, chopsticks, and serving utensils for your guests. Tables and chairs are your responsibility. We bring all cooking equipment, the propane grill, and every ingredient and condiment needed for the meal.',
  },
  {
    pool: 'logistics',
    q: 'What happens if weather forces a cancellation?',
    a: 'We offer a full credit — no penalty — for weather-related cancellations made more than 24 hours before the event start. For outdoor-only spaces, we recommend having a covered backup plan during rainy seasons. We\'ll always work with you to reschedule.',
  },
  {
    pool: 'menu',
    q: 'Can we customize the menu or add premium proteins?',
    a: 'Yes — every menu is fully customizable. Standard includes 2 protein choices per person; Premium includes 3. Premium add-ons are available at any tier: lobster tail (+$15), filet mignon (+$10), scallops (+$5), gyoza (+$10), and more. Just let us know at booking.',
  },
  {
    pool: 'menu',
    q: 'Do you accommodate dietary restrictions or allergies?',
    a: 'We do our best to accommodate dietary needs. Please let us know in advance about any serious allergies. We can prepare vegetarian and gluten-free protein options (tofu, vegetables) and keep allergens separated during cooking.',
  },
  {
    pool: 'logistics',
    q: 'How far in advance should I book?',
    a: 'We recommend 1–2 weeks for weekday events and 2–3 weeks for weekend evenings. Summer, graduation season, and holidays book up quickly — reserve 4+ weeks out during peak periods. Weekday availability is generally easier to arrange on shorter notice.',
  },
  {
    pool: 'logistics',
    q: 'Do you cook at Airbnbs, vacation rentals, or event venues?',
    a: 'Yes — many of our events are at short-term rentals, rented halls, and private event spaces. Always confirm with the property host or venue manager that outdoor cooking and open-flame cooking is permitted before booking. We can advise on space requirements.',
  },
  {
    pool: 'logistics',
    q: 'What time does the chef arrive?',
    a: 'Chefs arrive approximately 30 minutes before your scheduled event start time to set up the grill, arrange the station, and do a safety check. The cooking and show begin at your scheduled time. Cleanup happens immediately after the last course is served.',
  },
  {
    pool: 'pricing',
    q: 'Are there any hidden fees I should know about?',
    a: 'No hidden fees. Your price is $60/adult, $30/child (ages 4–12), $600 event minimum. Children 3 and under eat free. Travel fees may apply for locations more than 30 miles from our nearest chef base. All fees are disclosed and agreed upon before you book — nothing surprises you at the event.',
  },
  {
    pool: 'pricing',
    q: 'What\'s included in the event minimum?',
    a: 'The $600 event minimum covers 8–10 guests at the standard rate and includes the chef, grill, propane, all ingredients, sauces, plates, chopsticks, full setup, and complete cleanup. You simply provide the space and seating.',
  },
  {
    pool: 'experience',
    q: 'What fire tricks and entertainment can we expect?',
    a: 'Every Hibachi Connect chef is trained in classic teppanyaki showmanship: the flaming onion volcano, the flying shrimp toss, knife juggling, and heart/egg-and-butter fried rice. The exact routine varies by chef, but the entertainment is always a highlight.',
  },
  {
    pool: 'experience',
    q: 'How long does a hibachi event typically last?',
    a: 'Most events run 1.5 to 2 hours for a single session of 10–20 guests. Larger groups with multiple chef stations may run slightly longer. Your chef will pace the meal to match your event timeline — just let us know if you have specific timing needs.',
  },
  {
    pool: 'logistics',
    q: 'What if I need to cancel or reschedule my event?',
    a: 'Cancellations made 72+ hours before the event receive a full credit toward a future booking. Cancellations within 72 hours may be subject to a partial fee. We always work with hosts to find a new date rather than enforce penalties where possible.',
  },
]

// ── Related blog post data ───────────────────────────────────────────────────
// Pages pull from this list — tag-filtered by city variant for variety
export const BLOG_POSTS = [
  {
    slug:     'how-much-does-private-hibachi-cost',
    title:    'How Much Does a Private Hibachi Chef Cost in 2025?',
    excerpt:  'A complete breakdown of hibachi at home pricing — per-person rates, event minimums, add-ons, and what actually affects your final quote.',
    tag:      'Pricing',
    readTime: '5 min read',
    pool:     [0, 1, 2, 3, 4],
  },
  {
    slug:     'hibachi-at-home-vs-restaurant',
    title:    'Hibachi at Home vs. Hibachi Restaurant: Which Is Worth It?',
    excerpt:  'We break down the real cost, experience quality, and convenience differences between booking a private chef and going to a hibachi restaurant.',
    tag:      'Comparison',
    readTime: '6 min read',
    pool:     [0, 2, 4],
  },
  {
    slug:     'how-to-plan-a-backyard-hibachi-party',
    title:    'How to Plan a Backyard Hibachi Party (Complete Checklist)',
    excerpt:  'Everything you need to prepare before your private hibachi chef arrives — space setup, guest seating, timing, and the questions to ask your chef.',
    tag:      'Planning',
    readTime: '7 min read',
    pool:     [0, 1, 2, 3, 4],
  },
  {
    slug:     'hibachi-birthday-party-ideas',
    title:    '10 Hibachi Birthday Party Ideas Your Guests Will Never Forget',
    excerpt:  'From themed menus to chef performances, here\'s how to make a backyard hibachi birthday party truly unforgettable for any age group.',
    tag:      'Occasions',
    readTime: '5 min read',
    pool:     [0, 3],
  },
  {
    slug:     'hibachi-catering-corporate-events',
    title:    'Why Hibachi Catering Is the Best Choice for Corporate Events',
    excerpt:  'Team dinners, client entertainment, and office parties all benefit from the live-cooking energy of a private hibachi chef. Here\'s why.',
    tag:      'Corporate',
    readTime: '4 min read',
    pool:     [1, 2, 4],
  },
  {
    slug:     'what-to-expect-hibachi-chef-home',
    title:    'What to Expect When You Book a Private Hibachi Chef at Home',
    excerpt:  'A first-timer\'s guide: what happens from booking to cleanup, what the chef brings, what you need to provide, and what guests can look forward to.',
    tag:      'Guide',
    readTime: '6 min read',
    pool:     [0, 1, 3],
  },
  {
    slug:     'hibachi-bachelorette-party',
    title:    'Private Hibachi for Bachelorette Parties: The Ultimate Guide',
    excerpt:  'Why a private hibachi chef is the best pre-party activity for any bachelorette weekend — entertainment, custom drinks pairing, and zero logistics.',
    tag:      'Occasions',
    readTime: '5 min read',
    pool:     [0, 3, 4],
  },
  {
    slug:     'hibachi-menu-proteins-guide',
    title:    'The Complete Hibachi Menu Guide: Proteins, Sauces & Add-Ons',
    excerpt:  'Everything you can order at a private hibachi event — standard proteins, premium upgrades, appetizers, sauces, and how to build the perfect menu.',
    tag:      'Menu',
    readTime: '4 min read',
    pool:     [2, 4],
  },
]

// Get blog posts for a city based on its variant pool
export function getBlogPostsForCity(variant = 0, count = 3) {
  const v = variant % 5
  return BLOG_POSTS.filter(p => p.pool.includes(v)).slice(0, count)
}

// ── Pull N FAQs from the shared pool (excluding topics already in city faqSet) ─
export function getSupplementalFAQs(cityFaqSet = [], count = 4) {
  const usedQuestions = new Set(cityFaqSet.map(f => f.q.toLowerCase()))
  return SHARED_FAQ_POOL
    .filter(f => !usedQuestions.has(f.q.toLowerCase()))
    .slice(0, count)
}

// Helper: get city data by slug
export function getCityData(citySlug) {
  return CITY_DATA[citySlug] || null
}

// Helper: get all registered city slugs for generateStaticParams
export function getAllCitySlugs() {
  return Object.keys(CITY_DATA).map(slug => slug)
}

// ── SEO metadata generator — 5 title + 5 description patterns ───────────────
// Variant is derived from uniqueIntroVariant (0–4) so each city gets a
// distinct title structure that avoids duplicate-title penalties at scale.
const TITLE_TEMPLATES = [
  // 0 — location + brand (most direct)
  (city, state) => `Hibachi at Home in ${city}, ${state} | Hibachi Connect`,
  // 1 — service + city (chef-focused)
  (city, state) => `Private Hibachi Chef in ${city}, ${state} | Hibachi Connect`,
  // 2 — city-first (local SEO emphasis)
  (city, state) => `${city} Hibachi at Home — Private Chef from $60 | Hibachi Connect`,
  // 3 — action-oriented
  (city, state) => `Book a Hibachi Chef in ${city}, ${state} | Hibachi Connect`,
  // 4 — experience-forward
  (city, state) => `${city} Private Hibachi Experience — Backyard Teppanyaki | Hibachi Connect`,
]

const DESC_TEMPLATES = [
  // 0 — service + price + CTA
  (city, state) => `Book a private hibachi chef in ${city}, ${state}. Live teppanyaki at your home from $60/adult. Full setup & cleanup included. Get a free quote from Hibachi Connect today.`,
  // 1 — what's included + conversion
  (city, state) => `Hibachi at home in ${city}, ${state} — our chefs bring the grill, ingredients, and live-fire entertainment to your backyard. From $60/adult, $600 minimum. Get a free quote now.`,
  // 2 — city + comparison angle
  (city, state) => `Skip the restaurant. Hibachi Connect sends a certified teppanyaki chef to your ${city} home — everything provided, full cleanup included. Starting at $60/person in ${state}.`,
  // 3 — social proof + local
  (city, state) => `Rated 5 stars across 200+ events. Private hibachi chef in ${city}, ${state} — live cooking, fire tricks, and fresh teppanyaki at your home. From $60/adult with $600 minimum.`,
  // 4 — occasion + urgency
  (city, state) => `Planning a party in ${city}? A private hibachi chef brings the grill, food, and entertainment to your ${state} home. $60/adult · $600 min · Setup + cleanup included.`,
]

// 5 OG description variants (separate rotation for richer social previews)
const OG_DESC_TEMPLATES = [
  (city, state) => `A certified hibachi chef comes to your ${city} home with a full teppan grill, fresh ingredients, and live fire cooking. Starting at $60/adult. Book Hibachi Connect today.`,
  (city, state) => `Private teppanyaki at your ${city}, ${state} home — fire tricks, flying shrimp, and freshly cooked meals from $60/adult. Full setup & cleanup. Book Hibachi Connect.`,
  (city, state) => `Hibachi Connect brings restaurant-quality teppanyaki to your ${city} backyard. Certified chefs, premium ingredients, $60/adult. Get a free quote in minutes.`,
  (city, state) => `Your next ${city} party just got upgraded. A private hibachi chef handles everything — grill, food, entertainment, cleanup. From $60/adult. Book with Hibachi Connect.`,
  (city, state) => `Live hibachi cooking at your ${city} home. Our chefs perform, cook, and clean up — all for $60/adult with a $600 event minimum. Serving all ${state} areas.`,
]

export function generateCityMeta(cityData) {
  const { cityName, stateName, stateAbbr, stateSlug, uniqueIntroVariant = 0 } = cityData
  const v    = uniqueIntroVariant % 5
  const slug = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return {
    title:       TITLE_TEMPLATES[v](cityName, stateName),
    description: DESC_TEMPLATES[v](cityName, stateName),
    keywords: [
      `hibachi ${cityName}`,
      `private hibachi chef ${cityName}`,
      `hibachi at home ${cityName}`,
      `hibachi at home ${cityName} ${stateAbbr}`,
      `hibachi catering ${cityName}`,
      `backyard hibachi ${cityName}`,
      `teppanyaki ${cityName}`,
      `teppanyaki chef ${cityName} ${stateName}`,
      `private chef ${cityName} hibachi`,
      `hibachi party ${cityName} ${stateAbbr}`,
    ].join(', '),
    canonical: `https://hibachiconnect.com/locations/${stateSlug}/${slug}`,
    og: {
      title:       `Hibachi at Home in ${cityName}, ${stateName} | Hibachi Connect`,
      description: OG_DESC_TEMPLATES[v](cityName, stateName),
    },
    twitter: {
      title:       `Private Hibachi Chef in ${cityName}, ${stateAbbr} | Hibachi Connect`,
      description: `Book a certified hibachi chef in ${cityName}. $60/adult · full setup & cleanup · free quote. Hibachi Connect serves all ${stateName}.`,
    },
  }
}

// ── JSON-LD Schema generators ────────────────────────────────────────────────
export function generateLocalBusinessSchema(cityData) {
  const { cityName, stateName, stateSlug } = cityData
  const slug    = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const pageUrl = `https://hibachiconnect.com/locations/${stateSlug}/${slug}`

  return {
    '@context': 'https://schema.org',
    '@type':    ['ProfessionalService', 'FoodEstablishment'],
    name:       'Hibachi Connect',
    url:        pageUrl,
    telephone:  '+16027672965',
    email:      'info@hibachiconnect.com',
    image:      'https://hibachiconnect.com/brand/logo.png',
    logo:       'https://hibachiconnect.com/brand/logo.png',
    description:`Private hibachi chef service in ${cityName}, ${stateName}. We bring a live teppanyaki grill, fresh ingredients, and full entertainment to your home or event venue. Starting at $60/adult.`,
    areaServed: {
      '@type': 'City',
      name:    cityName,
      containedInPlace: { '@type': 'State', name: stateName },
    },
    address: {
      '@type':           'PostalAddress',
      addressLocality:   cityName,
      addressRegion:     stateName,
      addressCountry:    'US',
    },
    priceRange:    '$$',
    servesCuisine: ['Japanese', 'Hibachi', 'Teppanyaki'],
    currenciesAccepted: 'USD',
    paymentAccepted:    'Cash, Credit Card, Venmo, Zelle',
    aggregateRating: {
      '@type':       'AggregateRating',
      ratingValue:   '5.0',
      reviewCount:   '200',
      bestRating:    '5',
      worstRating:   '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Private Hibachi Chef Packages',
      itemListElement: [
        {
          '@type':       'Offer',
          name:          'Standard Hibachi Package',
          price:         '55',
          priceCurrency: 'USD',
          description:   'Per adult — choose 2 proteins, fried rice, grilled vegetables, salad, miso soup, yum yum and ginger sauce, full setup and cleanup.',
          availability:  'https://schema.org/InStock',
        },
        {
          '@type':       'Offer',
          name:          'Premium Hibachi Package',
          price:         '65',
          priceCurrency: 'USD',
          description:   'Per adult — choose 3 proteins, fried rice and noodles, grilled vegetables, salad, miso soup, edamame, all sauces, priority booking.',
          availability:  'https://schema.org/InStock',
        },
        {
          '@type':       'Offer',
          name:          'Elite / Corporate Package',
          price:         '0',
          priceCurrency: 'USD',
          description:   'Custom quote — unlimited proteins, multiple chef stations, filet mignon and lobster tail, dedicated event coordinator, 200+ guest capacity.',
          availability:  'https://schema.org/InStock',
        },
      ],
    },
    sameAs: [
      'https://www.instagram.com/hibachiconnect',
      'https://www.facebook.com/hibachiconnect',
    ],
  }
}

export function generateFAQSchema(faqSet) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqSet.map(faq => ({
      '@type': 'Question',
      name:    faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
}

export function generateBreadcrumbSchema(cityName, stateName, stateSlug) {
  const citySlug = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',      item: 'https://hibachiconnect.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://hibachiconnect.com/locations' },
      { '@type': 'ListItem', position: 3, name: stateName,   item: `https://hibachiconnect.com/locations/${stateSlug}` },
      { '@type': 'ListItem', position: 4, name: cityName,    item: `https://hibachiconnect.com/locations/${stateSlug}/${citySlug}` },
    ],
  }
}
