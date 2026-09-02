// ─────────────────────────────────────────────────────────────────────────────
// Arkansas City Data — Hibachi Connect
// Batch 1 (profileIdx 0–4): Bentonville, Rogers, Fayetteville, Springdale, Bella Vista
// Batches 2–4 (profileIdx 5–12): placeholders, filled in subsequent sessions
//
// INTRO_VARIANTS index range:
//   AR_INTRO_VARIANTS (generic): 679–683
//   AR_CITY_INTROS (city-specific): 684–696
//   uniqueIntroVariant = 684 + profileIdx
// ─────────────────────────────────────────────────────────────────────────────

// ─── H1 prefix per profileIdx ─────────────────────────────────────────────────
const AR_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',   // 0: Bentonville
  'Hibachi Catering in',       // 1: Rogers
  'Hibachi at Home in',        // 2: Fayetteville
  'Backyard Hibachi in',       // 3: Springdale
  'Hibachi at Home in',        // 4: Bella Vista
  'Private Hibachi Chef in',   // 5: Little Rock
  'Hibachi at Home in',        // 6: Conway
  'Hibachi at Home in',        // 7: Benton
  'Private Hibachi Chef in',   // 8: Hot Springs
  'Mobile Hibachi in',         // 9: Mountain Home
  'Mobile Hibachi in',         // 10: Russellville
  'Hibachi Catering in',       // 11: Fort Smith
  'Hibachi at Home in',        // 12: Jonesboro
]

// ─── Theme hero images ─────────────────────────────────────────────────────────
const AR_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg',  // AR0: NWA Executive
  '/pics/hibachi-at-home.jpg',         // AR1: NWA Community
  '/pics/hero-3.jpg',                  // AR2: Central Arkansas
  '/pics/hibachi-pool-party.jpg',      // AR3: Destination / Lake
  '/pics/hibachi-event.jpg',           // AR4: Regional Arkansas
]

// ─── Hero subtitles ────────────────────────────────────────────────────────────
const AR_HERO_SUBTITLES = [
  (city) => `Walmart executives, corporate teams, and ${city} families — your private teppanyaki chef, brought to your home`,
  (city) => `University of Arkansas graduation weekends, family milestones, and ${city} celebrations — your private chef, at your home`,
  (city) => `${city} professionals, families, and milestones — private hibachi at your home across Central Arkansas`,
  (city) => `Lake houses, vacation rentals, and resort properties in the ${city} area — your private hibachi chef comes to you`,
  (city) => `${city} families and corporate teams — private hibachi at your home or outdoor venue`,
]

// ─── How It Works ──────────────────────────────────────────────────────────────
const AR_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked as soon as you book — no double-bookings, no last-minute uncertainty.`,
  steps: [
    { num: '01', title: 'Submit Your Date & Address',           desc: 'Give us your Arkansas address, event date, and approximate guest count. We respond with a personalized same-day quote — whether you\'re in Bentonville, the Little Rock area, Hot Springs, or anywhere else in Arkansas.' },
    { num: '02', title: 'Confirm Your Menu',                    desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included: fried rice, grilled vegetables, miso soup, yum yum and ginger sauce, plates, and chopsticks.' },
    { num: '03', title: 'Lock Your Date',                       desc: 'A deposit confirms your event immediately. Your Arkansas date is reserved — no double-bookings, no cancellations.' },
    { num: '04', title: 'Chef Travels to You',                  desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No gas hookup required at any Arkansas property.' },
    { num: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your Arkansas property is left exactly as it was.' },
  ],
}

// ─── Section variants (5 themes) ─────────────────────────────────────────────
const AR_SECTION_VARIANTS = [
  // AR0 — NWA Executive (Bentonville, Rogers)
  {
    heroPill:         'NWA Private Chef',
    experiencePill:   'Beyond Any Northwest Arkansas Restaurant',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,          desc: `No reservation required — your ${city} patio, backyard, or outdoor living space becomes an exclusive private dining room for your team or family.` },
      { icon: '👔', title: 'Corporate Entertainment Done Right',       desc: `Supplier dinners, team celebrations, and executive entertaining in the Bentonville and Rogers corridor demand quality. Our certified chefs deliver the performance that matches the NWA professional standard.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',        desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',            desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/private-party-chef-6.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} home`,
    areasPill:          'Serving Northwest Arkansas',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Greater Northwest Arkansas Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Northwest Arkansas — Bentonville, Rogers, Fayetteville, Springdale, Bella Vista, Siloam Springs, Lowell, and every surrounding Benton and Washington County community. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your NWA Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Dining Experience ${city} Hosts Have Been Waiting For`,
    occasionSubtext:       'From Walmart supplier dinners to graduation celebrations and milestone family events, private hibachi is Northwest Arkansas\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Northwest Arkansas Hosts Are Saying',
  },
  // AR1 — NWA Community (Fayetteville, Springdale, Bella Vista)
  {
    heroPill:         'Northwest Arkansas Hibachi',
    experiencePill:   'The Experience No Fayetteville Restaurant Can Match',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,          desc: `Skip the reservation battle — your ${city} backyard, deck, or covered patio becomes an exclusive private dining room for your family or group.` },
      { icon: '🎓', title: 'The Graduation Season Solution',          desc: `University of Arkansas graduation weekend fills every Fayetteville restaurant weeks before commencement. The chef comes to your ${city} home — no wait, no time limit, no strangers at your table.` },
      { icon: '🔥', title: 'Live Teppanyaki for the Whole Family',   desc: 'From fire tricks to flying shrimp, 90–120 minutes of live hibachi keeps every generation at the same table — kids and grandparents equally entertained.' },
      { icon: '✨', title: 'Full Setup & Zero Cleanup',               desc: `Your chef arrives fully equipped, performs the complete dinner service, and packs out completely. You host a ${city} event without touching a single plate.` },
    ],
    experienceImage:    '/pics/backyard-hibachi-3.jpg',
    experienceImageAlt: (city) => `Hibachi at home event in ${city}, AR`,
    areasPill:          'Serving Northwest Arkansas',
    areasHeadline:      (city) => `Hibachi in ${city} and the Surrounding Northwest Arkansas Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Northwest Arkansas — Fayetteville, Springdale, Bentonville, Rogers, Bella Vista, Johnson, Elkins, Prairie Grove, Farmington, and every surrounding Washington and Benton County community.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your NWA Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Celebration Worth Planning`,
    occasionSubtext:       'From University of Arkansas graduation weekends to backyard family milestones and community gatherings, private hibachi is Northwest Arkansas\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Hibachi at Home in ${city}, ${abbr} — Common Questions Answered`,
    testimonialSubheading: 'What Northwest Arkansas Families Are Saying',
  },
  // AR2 — Central Arkansas (Little Rock, Conway, Benton)
  {
    heroPill:         'Central Arkansas Private Chef',
    experiencePill:   'Beyond Any Little Rock Restaurant',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,          desc: `No reservation required — your ${city} pool deck, backyard, or outdoor patio becomes an exclusive private dining room for your family or professional group.` },
      { icon: '🎓', title: 'The Graduation Season Solution',          desc: `Central Arkansas graduation season fills every Little Rock and Conway restaurant weeks in advance. When the table isn\'t available, the chef comes to you.` },
      { icon: '🥩', title: 'Premium Proteins, Live Performance',      desc: 'Every guest orders their proteins individually — chicken, steak, shrimp, salmon, or premium upgrades like filet mignon and lobster tail — all cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',            desc: `Your chef arrives with everything, performs the full dinner service, and leaves your ${city} property spotless. You host without lifting a finger.` },
    ],
    experienceImage:    '/pics/hibachi-home-2.jpg',
    experienceImageAlt: (city) => `Private hibachi chef event in ${city}, AR`,
    areasPill:          'Serving Central Arkansas',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Central Arkansas`,
    areasIntro: [
      (city, state) => `We serve ${city} and all of Central Arkansas — Little Rock, North Little Rock, Conway, Benton, Bryant, Maumelle, Sherwood, Cabot, Searcy, and every surrounding Pulaski, Saline, and Faulkner County community.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Central AR Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Celebration That Brings Everyone Together`,
    occasionSubtext:       'From Chenal Valley executive dinners to graduation parties and family milestones, private hibachi is Central Arkansas\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Central Arkansas Hosts Are Saying',
  },
  // AR3 — Destination / Lake (Hot Springs, Mountain Home, Russellville)
  {
    heroPill:         'Arkansas Lake House Hibachi',
    experiencePill:   'The Vacation Rental Upgrade Worth Booking',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Chef Comes to Your ${city} Property`,     desc: `No driving to a crowded restaurant — your lake house deck, vacation rental patio, or resort property becomes an exclusive private dining room for your group.` },
      { icon: '🎉', title: 'Built for Vacation Groups',               desc: `Reunion groups, bachelorette weekends, and family vacation parties in the ${city} area can stop settling for limited lakefront dining options. A private chef sets up wherever you\'re staying.` },
      { icon: '🥩', title: 'Full Premium Menu, Fully Self-Contained', desc: 'Every protein choice — chicken, steak, shrimp, salmon, filet mignon, lobster — cooked live at the grill. Fully self-contained: no kitchen access required at your rental property.' },
      { icon: '✨', title: 'Full Setup & Zero Cleanup',               desc: `The chef arrives with the complete setup, performs the full teppanyaki dinner, and packs out completely. Your ${city} vacation property is exactly as it was.` },
    ],
    experienceImage:    '/pics/mobile-hibachi.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city} area lake house or vacation rental`,
    areasPill:          'Serving the Arkansas Lake Markets',
    areasHeadline:      (city) => `Private Hibachi at Your ${city} Lake House, Cabin, or Vacation Rental`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding lake and vacation rental markets — Hot Springs, Lake Hamilton, Lake Catherine, Lake Ouachita, Lake Norfork, Lake Bull Shoals, Lake Dardanelle, and every property in between. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Lake House Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Group Dinner Nobody Forgets`,
    occasionSubtext:       'From bachelor and bachelorette weekends to family reunions and lake house birthday trips, private hibachi is Arkansas\'s most memorable vacation group dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Questions from Lake House Hosts`,
    testimonialSubheading: 'What Arkansas Lake House Hosts Are Saying',
  },
  // AR4 — Regional Arkansas (Fort Smith, Jonesboro)
  {
    heroPill:         'Arkansas Private Chef',
    experiencePill:   'The Private Hibachi Experience Arkansas Needed',
    experiencePoints: (city) => [
      { icon: '🏠', title: `Your ${city} Home Is the Venue`,          desc: `No reservation required — your ${city} backyard, patio, or outdoor space becomes an exclusive private dining room for your family or team.` },
      { icon: '🎓', title: 'The Graduation Solution',                 desc: `${city} graduation season fills every local restaurant quickly. When the table isn\'t available, the chef comes to you — no reservation battle, no time limit.` },
      { icon: '🔥', title: 'Live Teppanyaki, Every Guest at the Grill', desc: 'The full hibachi performance — fire tricks, flying shrimp, 90–120 minutes of live entertainment and exceptional cooking — at your own home.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',            desc: `Your chef arrives fully equipped, performs the entire dinner service, and packs out completely. Your ${city} property is spotless when they leave.` },
    ],
    experienceImage:    '/pics/hibachi-catering.jpg',
    experienceImageAlt: (city) => `Private hibachi catering event in ${city}, AR`,
    areasPill:          'Serving Arkansas Regional Markets',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Surrounding Area`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding regional area — including Sebastian, Craighead, and neighboring counties. Every event is fully self-contained; we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your AR Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The ${city} Event That Actually Delivers`,
    occasionSubtext:       'From corporate team dinners to graduation parties and family reunions, private hibachi is the most memorable private dining experience available in the Arkansas regional markets',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Common Questions`,
    testimonialSubheading: 'What Arkansas Hosts Are Saying',
  },
]

// ─── Testimonials ──────────────────────────────────────────────────────────────
const AR_TESTIMONIALS = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'bentonville': [
    {
      text:     "We hosted a Walmart supplier dinner for 18 people at our home in Bentonville — the chef was flawless, the performance was genuinely unforgettable, and three of our guests asked for the contact before the evening was over. Will be using Hibachi Connect for every future corporate event.",
      name:     'Derek M.',
      city:     'Bentonville, AR',
      event:    'Corporate Supplier Dinner',
      initials: 'DM',
    },
    {
      text:     "My daughter's graduation party had 22 guests — family who flew in from Dallas, Oklahoma City, and St. Louis for the weekend. The chef set up on our back patio and the whole evening was exactly what we hoped for. Far better than trying to book a restaurant on graduation weekend.",
      name:     'Carolyn R.',
      city:     'Bentonville, AR',
      event:    'Graduation Celebration',
      initials: 'CR',
    },
    {
      text:     "We used Hibachi Connect for our team's end-of-year dinner and the feedback was unanimous — best company event we've done. Twelve people, chef arrived on time, set up completely, and the teppanyaki performance was legitimately impressive. Already booked for next year.",
      name:     'Jason W.',
      city:     'Bentonville, AR',
      event:    'Team Dinner',
      initials: 'JW',
    },
  ],
  'rogers': [
    {
      text:     "Pinnacle Hills has excellent restaurants, but nothing comes close to what a private chef does for a milestone event. We booked for my husband's 50th and our 30 guests were absolutely blown away. Worth every dollar — and the full cleanup alone justified the cost.",
      name:     'Stephanie L.',
      city:     'Rogers, AR',
      event:    '50th Birthday Celebration',
      initials: 'SL',
    },
    {
      text:     "Our NWA team of 16 had the best corporate event I've organized in ten years. Booking was seamless, the chef was professional and entertaining, and the food was genuinely excellent. Not a single complaint — only requests to do it again.",
      name:     'Marcus T.',
      city:     'Rogers, AR',
      event:    'Corporate Team Dinner',
      initials: 'MT',
    },
    {
      text:     "My daughter graduated from Bentonville High this year and we hosted 28 people at our Rogers home. The chef handled everything — we literally just enjoyed the evening. Every guest from out of town asked how we pulled it off.",
      name:     'Amanda F.',
      city:     'Rogers, AR',
      event:    'Graduation Party',
      initials: 'AF',
    },
  ],
  'fayetteville': [
    {
      text:     "University of Arkansas graduation weekend has zero restaurant availability — we figured that out the hard way the first year. This year we booked a private hibachi dinner at our house and it was the best part of the entire graduation weekend. Our daughter was thrilled, the extended family loved it, and we spent the whole evening together instead of waiting on a table.",
      name:     'Brenda H.',
      city:     'Fayetteville, AR',
      event:    'U of A Graduation Celebration',
      initials: 'BH',
    },
    {
      text:     "We had 20 guests — friends and family from across Arkansas and Missouri — and the chef was professional, entertaining, and the food was outstanding. Fayetteville has no shortage of restaurants, but none of them offer what this experience delivers.",
      name:     'Kevin S.',
      city:     'Fayetteville, AR',
      event:    'Birthday Celebration',
      initials: 'KS',
    },
    {
      text:     "Booked for our faculty retirement dinner — 14 guests, outdoor patio setting, the chef arrived on time and the presentation was flawless. The group had attended multiple hibachi restaurants in the area and everyone agreed this was a completely different level.",
      name:     'Patricia O.',
      city:     'Fayetteville, AR',
      event:    'Faculty Retirement Dinner',
      initials: 'PO',
    },
  ],
  'springdale': [
    {
      text:     "We threw my son's graduation party for 30 people in our backyard and the hibachi chef made it the best event we've ever hosted. My mother, who rarely eats at hibachi restaurants, couldn't stop complimenting the food. The kids loved the fire tricks. Already planning next year's event.",
      name:     'Rosa M.',
      city:     'Springdale, AR',
      event:    'Graduation Party',
      initials: 'RM',
    },
    {
      text:     "Our Springdale office team of 24 had a celebration dinner at someone's backyard and the whole thing was perfectly run. The setup was faster than I expected and the chef kept everyone entertained for the entire two hours. Best team event we've organized.",
      name:     'Todd B.',
      city:     'Springdale, AR',
      event:    'Company Team Celebration',
      initials: 'TB',
    },
    {
      text:     "Family reunion, 22 people, multi-generational — grandparents to grandchildren. The hibachi chef was patient with the kids, attentive to everyone, and the food was exceptional. We've done this two years in a row now and have no plans to change.",
      name:     'Debra C.',
      city:     'Springdale, AR',
      event:    'Family Reunion Dinner',
      initials: 'DC',
    },
  ],
  'bella-vista': [
    {
      text:     "We hosted a retirement celebration for my husband on our deck and the chef was everything we hoped for — professional, entertaining, and the food was genuinely outstanding. Several friends have already booked their own events after attending ours.",
      name:     'Judith K.',
      city:     'Bella Vista, AR',
      event:    'Retirement Celebration',
      initials: 'JK',
    },
    {
      text:     "Golf community entertaining can be limited — this was anything but. Our group of 14 spent two full hours at the same table, the food was exceptional, and the setup and cleanup were completely seamless. Will be doing this again for our anniversary.",
      name:     'Robert V.',
      city:     'Bella Vista, AR',
      event:    'Golf Community Dinner Party',
      initials: 'RV',
    },
    {
      text:     "My wife's milestone birthday was hosted at our Bella Vista home and the evening was genuinely perfect. Eighteen guests, all from the community, and every single one said it was the best dinner party they'd attended. The chef's performance made the evening — not just the food, the entire experience.",
      name:     'Charles N.',
      city:     'Bella Vista, AR',
      event:    'Milestone Birthday Celebration',
      initials: 'CN',
    },
  ],
  // ── Batches 2–4 placeholders ──────────────────────────────────────────────────
  'little-rock':    [],
  'conway':         [],
  'benton':         [],
  'hot-springs':    [],
  'mountain-home':  [],
  'russellville':   [],
  'fort-smith':     [],
  'jonesboro':      [],
}

// ─── City experience images (overrides theme default in CityExperience section) ─
const AR_CITY_IMAGE_MAP = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'bentonville':  { src: '/pics/private-party-chef-6.jpg',       alt: (city) => `Private hibachi chef setup at a Bentonville, AR executive home` },
  'rogers':       { src: '/pics/hibachi-dallas.jpg',             alt: (city) => `Hibachi catering event at a Rogers, AR home near Pinnacle Hills` },
  'fayetteville': { src: '/pics/backyard-hibachi-3.jpg',         alt: (city) => `Hibachi at home in Fayetteville, AR` },
  'springdale':   { src: '/pics/hibachi-event.jpg',              alt: (city) => `Backyard hibachi party in Springdale, AR` },
  'bella-vista':  { src: '/pics/hibachi-pool-party.jpg',         alt: (city) => `Private hibachi on a Bella Vista, AR deck` },
  // ── Batches 2–4 placeholders ──────────────────────────────────────────────────
  'little-rock':   { src: '/pics/hero-1.jpg',                    alt: (city) => `Private hibachi chef in Little Rock, AR` },
  'conway':        { src: '/pics/hibachi-at-home.jpg',           alt: (city) => `Hibachi at home in Conway, AR` },
  'benton':        { src: '/pics/hibachi-home-2.jpg',            alt: (city) => `Hibachi at home in Benton, AR` },
  'hot-springs':   { src: '/pics/hibachi-miami.jpg',             alt: (city) => `Private hibachi chef at a Hot Springs, AR lake house` },
  'mountain-home': { src: '/pics/traveling-hibachi.jpg',         alt: (city) => `Mobile hibachi at a Mountain Home, AR lake cabin` },
  'russellville':  { src: '/pics/hibachi-in-garage.jpg',         alt: (city) => `Mobile hibachi event in Russellville, AR` },
  'fort-smith':    { src: '/pics/hibachi-catering.jpg',          alt: (city) => `Hibachi catering in Fort Smith, AR` },
  'jonesboro':     { src: '/pics/hibachi-charlotte.jpg',         alt: (city) => `Hibachi at home in Jonesboro, AR` },
}

// ─── Support images (testimonial section + CTA section) ───────────────────────
const AR_SUPPORT_IMAGES = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'bentonville': {
    testimonial: {
      src:        '/pics/hibachi-shot-1.jpg',
      alt:        (city) => `Private hibachi dinner at a Bentonville, AR corporate event`,
      caption:    'Bentonville executive entertaining',
      trustBadge: 'Trusted by NWA Corporate Hosts',
      intro:      (city) => `Bentonville's corporate ecosystem sets a high standard for private entertaining — Walmart executives, supplier account managers, and tech-company leaders host events where quality isn't optional. Here's what Bentonville hosts have found when they brought the chef to their home:`,
    },
    cta: {
      src:     '/pics/hibachi-catering.jpg',
      alt:     (city) => `Hibachi Connect chef ready for a Bentonville, AR event`,
      caption: 'The Bentonville private dining standard',
    },
  },
  'rogers': {
    testimonial: {
      src:        '/pics/hero-3.jpg',
      alt:        (city) => `Hibachi event at a Rogers, AR home near Pinnacle Hills`,
      caption:    'Pinnacle Hills and Rogers celebrations',
      trustBadge: '5.0 Average Rating',
      intro:      (city) => `Rogers hosts — across Pinnacle Hills, the Promenade corridor, and every surrounding neighborhood — plan celebrations that match the level of the community. Graduation parties, milestone birthdays, corporate team dinners, and large family gatherings all find a home with private hibachi. See what Rogers hosts have experienced:`,
    },
    cta: {
      src:     '/pics/hibachi-event.jpg',
      alt:     (city) => `Private hibachi chef at a Rogers, AR home`,
      caption: 'The Rogers large-event format',
    },
  },
  'fayetteville': {
    testimonial: {
      src:        '/pics/hero-1.jpg',
      alt:        (city) => `Hibachi at home celebration in Fayetteville, AR`,
      caption:    'Fayetteville graduation and family events',
      trustBadge: 'Trusted by Razorback Families',
      intro:      (city) => `Fayetteville families — whether celebrating a University of Arkansas graduation, hosting visiting relatives for Razorback weekend, or planning a milestone birthday — share one challenge: the city's best tables are always the hardest to book when you need them most. Here's how Fayetteville hosts have solved that:`,
    },
    cta: {
      src:     '/pics/hibachi-austin-home.jpg',
      alt:     (city) => `Private hibachi chef at a Fayetteville, AR home`,
      caption: 'Fayetteville\'s graduation season format',
    },
  },
  'springdale': {
    testimonial: {
      src:        '/pics/hibachi-catering.jpg',
      alt:        (city) => `Large backyard hibachi party in Springdale, AR`,
      caption:    'Springdale backyard and community events',
      trustBadge: 'Trusted by NWA Families',
      intro:      (city) => `Springdale's fast-growing community means large celebrations — and large families. Graduation parties, quinceañeras, milestone birthdays, and corporate team events all thrive in the backyard hibachi format. See what Springdale hosts have experienced:`,
    },
    cta: {
      src:     '/pics/mobile-hibachi.jpg',
      alt:     (city) => `Hibachi chef at a Springdale, AR backyard event`,
      caption: 'The Springdale backyard celebration format',
    },
  },
  'bella-vista': {
    testimonial: {
      src:        '/pics/hibachi-miami.jpg',
      alt:        (city) => `Private hibachi on a Bella Vista, AR deck or patio`,
      caption:    'Bella Vista residential entertaining',
      trustBadge: 'Trusted by Bella Vista Hosts',
      intro:      (city) => `Bella Vista residents — with their wooded lots, lakefront decks, and golf community backyards — have the perfect setting for private hibachi. Retirement celebrations, community gatherings, and milestone family events all come to life when the chef arrives at your Village property. Here's what Bella Vista hosts are saying:`,
    },
    cta: {
      src:     '/pics/hibachi-pool-party.jpg',
      alt:     (city) => `Private hibachi chef at a Bella Vista, AR outdoor event`,
      caption: 'The Bella Vista outdoor entertaining experience',
    },
  },
  // ── Batches 2–4 placeholders ──────────────────────────────────────────────────
  'little-rock':   { testimonial: { src: '/pics/hibachi-shot-1.jpg',       alt: () => 'Private hibachi in Little Rock, AR',   caption: '', trustBadge: '', intro: () => '' }, cta: { src: '/pics/private-party-chef-6.jpg', alt: () => '', caption: '' } },
  'conway':        { testimonial: { src: '/pics/hero-3.jpg',               alt: () => 'Hibachi at home in Conway, AR',        caption: '', trustBadge: '', intro: () => '' }, cta: { src: '/pics/hibachi-event.jpg',         alt: () => '', caption: '' } },
  'benton':        { testimonial: { src: '/pics/hibachi-dallas.jpg',        alt: () => 'Hibachi at home in Benton, AR',        caption: '', trustBadge: '', intro: () => '' }, cta: { src: '/pics/hibachi-shot-1.jpg',        alt: () => '', caption: '' } },
  'hot-springs':   { testimonial: { src: '/pics/hibachi-raleigh.jpg',       alt: () => 'Private hibachi in Hot Springs, AR',   caption: '', trustBadge: '', intro: () => '' }, cta: { src: '/pics/hero-1.jpg',               alt: () => '', caption: '' } },
  'mountain-home': { testimonial: { src: '/pics/hibachi-wilmington.jpg',   alt: () => 'Mobile hibachi in Mountain Home, AR',  caption: '', trustBadge: '', intro: () => '' }, cta: { src: '/pics/hibachi-event.jpg',         alt: () => '', caption: '' } },
  'russellville':  { testimonial: { src: '/pics/hibachi-colorado.jpg',     alt: () => 'Mobile hibachi in Russellville, AR',   caption: '', trustBadge: '', intro: () => '' }, cta: { src: '/pics/hero-3.jpg',               alt: () => '', caption: '' } },
  'fort-smith':    { testimonial: { src: '/pics/hibachi-virginia-beach.jpg', alt: () => 'Hibachi catering in Fort Smith, AR', caption: '', trustBadge: '', intro: () => '' }, cta: { src: '/pics/hibachi-philadelphia.jpg',  alt: () => '', caption: '' } },
  'jonesboro':     { testimonial: { src: '/pics/hibachi-hart.jpg',          alt: () => 'Hibachi at home in Jonesboro, AR',    caption: '', trustBadge: '', intro: () => '' }, cta: { src: '/pics/backyard-hibachi-3.jpg',    alt: () => '', caption: '' } },
}

// ─── Custom meta overrides ─────────────────────────────────────────────────────
const AR_CUSTOM_META = {
  // ── Batch 1 ──────────────────────────────────────────────────────────────────
  'bentonville': {
    title: 'Private Hibachi Chef in Bentonville, AR | Hibachi Connect',
    desc:  'Walmart executives and Bentonville families book a private hibachi chef for estate dinners, supplier events, and milestone celebrations near Crystal Bridges. Your chef comes to you.',
  },
  'rogers': {
    title: 'Hibachi Catering in Rogers, AR | Hibachi Connect',
    desc:  'Book hibachi catering in Rogers for Pinnacle Hills graduations, corporate team dinners, and large family celebrations. A private chef arrives at your home — no restaurants required.',
  },
  'fayetteville': {
    title: 'Hibachi at Home in Fayetteville, AR | Hibachi Connect',
    desc:  'Hibachi at home in Fayetteville — the premium way to celebrate University of Arkansas graduation weekends and family milestones. Your private chef comes directly to your home.',
  },
  'springdale': {
    title: 'Backyard Hibachi in Springdale, AR | Hibachi Connect',
    desc:  'Backyard hibachi in Springdale, AR — the perfect setup for large family celebrations, milestone birthdays, and outdoor events. Your chef arrives fully equipped for the full experience.',
  },
  'bella-vista': {
    title: 'Hibachi at Home in Bella Vista, AR | Hibachi Connect',
    desc:  'Private hibachi at home in Bella Vista — on your deck, in your golf community, or at your lakeside property. A full hibachi chef experience without leaving the Village.',
  },
  // ── Batches 2–4 ─────────────────────────────────────────────────────────────
  'little-rock': {
    title: 'Private Hibachi Chef in Little Rock, AR | Hibachi Connect',
    desc:  'Private hibachi chef in Little Rock for Chenal Valley dinner parties, corporate entertainment, and milestone family events. We come to you across the Little Rock area.',
  },
  'conway': {
    title: 'Hibachi at Home in Conway, AR | Hibachi Connect',
    desc:  'Hibachi at home in Conway for UCA graduation weekends, family milestones, and suburban celebrations. A private chef comes to your home — serving Conway and surrounding communities.',
  },
  'benton': {
    title: 'Hibachi at Home in Benton, AR | Hibachi Connect',
    desc:  'Hibachi at home in Benton, AR — ideal for Saline County family celebrations, graduation parties, and backyard milestones. Your private chef arrives fully set up.',
  },
  'hot-springs': {
    title: 'Private Hibachi Chef in Hot Springs, AR | Hibachi Connect',
    desc:  'Private hibachi chef at your Lake Hamilton vacation rental, lake house, or Hot Springs resort property. The premium group dining upgrade for your next Arkansas lake trip.',
  },
  'mountain-home': {
    title: 'Mobile Hibachi in Mountain Home, AR | Hibachi Connect',
    desc:  'Mobile hibachi chef at your Lake Norfork or Lake Bull Shoals cabin. Bring a private hibachi experience directly to your Twin Lakes vacation rental or lakefront home.',
  },
  'russellville': {
    title: 'Mobile Hibachi in Russellville, AR | Hibachi Connect',
    desc:  'Mobile hibachi at your Lake Dardanelle vacation rental or Russellville home. Private chef service for ATU graduation celebrations and Arkansas River Valley group events.',
  },
  'fort-smith': {
    title: 'Hibachi Catering in Fort Smith, AR | Hibachi Connect',
    desc:  'Hibachi catering in Fort Smith — private chef events for River Valley corporate teams, milestone family celebrations, and large gatherings across Sebastian County.',
  },
  'jonesboro': {
    title: 'Hibachi at Home in Jonesboro, AR | Hibachi Connect',
    desc:  'Hibachi at home in Jonesboro for Arkansas State graduation weekends, family milestones, and Northeast Arkansas celebrations. Your private chef comes directly to you.',
  },
}

// ─── Intro / closing placeholders ─────────────────────────────────────────────
const _EMPTY_INTRO = { headline: () => '', opening: () => '', middle: () => '', closing: () => '' }
const _EMPTY_CLOSE = { headline: () => '', sub: () => '', urgency: '', btnPrimary: '', btnSecondary: '' }

// ─── AR_INTRO_VARIANTS — 5 generic entries (indices 679–683) ──────────────────
export const AR_INTRO_VARIANTS = [
  // AR0 (679) — NWA Executive
  {
    headline: () => 'Northwest Arkansas Hosts Are Raising the Standard for Private Entertaining',
    opening:  () => 'The Walmart corporate ecosystem and the broader NWA professional community have changed what private entertaining looks like in Bentonville and Rogers. When the guest list includes supplier contacts, brand executives, and professional colleagues, a restaurant reservation isn\'t the right answer — a private chef at your own home is.',
    middle:   () => 'Private hibachi brings the full teppanyaki experience to your outdoor space — live fire, premium proteins cooked to order, and 90 minutes of shared entertainment that no restaurant table can replicate.',
    closing:  () => 'Northwest Arkansas corporate hosts and families have found that private hibachi is the one format that handles every occasion — from executive dinners to landmark graduation celebrations.',
  },
  // AR1 (680) — NWA Community
  {
    headline: () => 'University Season, Family Milestones, and Celebrations That Actually Deliver',
    opening:  () => 'Northwest Arkansas has grown fast enough that the old approach to celebrating no longer works. Graduation weekend fills every Fayetteville and Springdale restaurant table for weeks in advance. Backyard birthday parties for 25 people need a format that keeps everyone at the same table — not a buffet setup that splinters the group.',
    middle:   () => 'Private hibachi solves both problems at once. The chef comes to your home, sets up completely, and performs 90–120 minutes of live teppanyaki for your entire group — graduation families, milestone birthdays, large extended-family gatherings included.',
    closing:  () => 'Bella Vista residents, Fayetteville families, and Springdale hosts have all found the same answer: when the celebration matters, private hibachi is how Northwest Arkansas entertains.',
  },
  // AR2 (681) — Central Arkansas
  {
    headline: () => 'Central Arkansas Hosts Have Found a Better Way to Celebrate',
    opening:  () => 'Little Rock professionals and growing Conway and Saline County families share a consistent frustration: the city\'s best tables are booked for months around graduation season, and finding a format that works for 20 or 30 guests without splitting the group across multiple tables is nearly impossible.',
    middle:   () => 'Private hibachi solves both. Your chef arrives at your Chenal Valley home, your Conway backyard, or your Benton patio — fully self-contained, fully equipped — and performs the complete teppanyaki experience for every guest at once.',
    closing:  () => 'Central Arkansas hosts have discovered that private hibachi isn\'t just a dinner — it\'s the evening itself. The format creates the memory.',
  },
  // AR3 (682) — Destination / Lake
  {
    headline: () => 'Arkansas Lake House Groups Have Found Their Private Dining Solution',
    opening:  () => 'Vacation groups on Lake Hamilton, Lake Norfork, and Lake Dardanelle face the same problem every summer: the lakefront restaurant options are limited, reservations for large groups are difficult, and the half-hour drive each way costs time that vacation groups don\'t want to spend.',
    middle:   () => 'Private hibachi eliminates the problem entirely. The chef travels to your lake house, cabin deck, or vacation rental property — fully self-contained, no kitchen access required — and sets up wherever your group is gathered.',
    closing:  () => 'Lake Hamilton hosts, Twin Lakes vacation groups, and Hot Springs resort parties have found that a private hibachi chef is the single best upgrade you can add to any Arkansas lake vacation.',
  },
  // AR4 (683) — Regional Arkansas
  {
    headline: () => 'Arkansas Regional Markets Finally Have a Private Hibachi Option',
    opening:  () => 'Fort Smith and Jonesboro have the same event culture as any Arkansas city — milestone birthdays, graduation parties, corporate team events, family reunions. What they\'ve historically lacked is access to a private hibachi chef who comes to your home rather than requiring you to drive to a restaurant in a larger city.',
    middle:   () => 'We serve the Arkansas regional markets with the same fully self-contained private hibachi experience available in Little Rock, Bentonville, and Hot Springs — your chef comes to you, performs the complete teppanyaki dinner, and handles setup and cleanup from start to finish.',
    closing:  () => 'Fort Smith and Jonesboro hosts no longer have to settle for the restaurant option. Private hibachi comes to you.',
  },
]

// ─── AR_CITY_INTROS — 13 city-specific entries (indices 684–696) ───────────────
export const AR_CITY_INTROS = [
  // 684 — Bentonville
  {
    headline: () => 'Where Walmart Executives Entertain Clients — and Make Every Dinner Unforgettable',
    opening:  () => 'Bentonville isn\'t like any other Arkansas city, and private entertaining here reflects that. Any given week in this city, there are account managers, brand executives, retail tech leaders, and supplier company owners hosting dinners where the quality of the experience reflects directly on the relationship. A crowded restaurant table with adjacent strangers doesn\'t fit that standard. A private chef who arrives at your home, sets up completely, and performs an exclusive teppanyaki dinner for your specific guests does.',
    middle:   () => 'Beyond the corporate entertaining angle, Bentonville families have built a lifestyle that expects quality — and private hibachi delivers it. Graduation parties for students who\'ve grown up attending Crystal Bridges-caliber events, milestone birthdays for executives who\'ve entertained across the country, and welcoming dinners for relocated families joining the Bentonville community all become something genuinely memorable when the chef comes to you.',
    closing:  () => 'Hibachi Connect serves Bentonville, Rogers, Fayetteville, Bella Vista, Springdale, and all of Northwest Arkansas. Most dates are available — a few phone calls ahead for graduation season is always the right call.',
  },
  // 685 — Rogers
  {
    headline: () => 'Pinnacle Hills Hosts Choose Private Hibachi for Every Celebration That Matters',
    opening:  () => 'Pinnacle Hills and the Rogers corporate corridor have created a residential community where large-format celebrations are the norm — graduation parties for extended families, milestone birthday dinners for 25 or 30 guests, corporate team events that bring out-of-town colleagues to someone\'s Rogers home for an evening. The challenge is always finding a format that matches the scale and the standard of the occasion. Private hibachi solves both.',
    middle:   () => 'The chef arrives at your Rogers property, sets up the self-contained teppan grill wherever your outdoor space works best, and performs 90–120 minutes of live teppanyaki for every guest at once — fire tricks, flying shrimp, premium proteins cooked to order. No split tables, no restaurant noise, no time limit. The experience keeps every generation of a Rogers family at the same table for the entire evening.',
    closing:  () => 'We serve Rogers, Bentonville, Fayetteville, Springdale, Bella Vista, and all of Northwest Arkansas. Graduation season books early — confirm your May or June date before your venue fills.',
  },
  // 686 — Fayetteville
  {
    headline: () => 'University of Arkansas Graduation Weekend Deserves More Than a Restaurant Wait',
    opening:  () => 'Graduation weekend in Fayetteville is one of the most anticipated — and most logistically challenging — events in Arkansas. Families travel from Jonesboro, Fort Smith, Texarkana, Little Rock, and across state lines to watch their University of Arkansas graduates walk across the stage. And when the ceremony ends, every table at every Fayetteville restaurant is already spoken for. The families who planned ahead — not with a reservation, but with a private chef — have the evening the rest are still trying to find.',
    middle:   () => 'Private hibachi turns your Fayetteville backyard, patio, or outdoor space into the evening\'s venue. The chef arrives before guests do, sets up completely, and performs the full teppanyaki dinner service for everyone at once — your graduates, your visiting relatives, your out-of-town family who made the trip for this weekend. The format keeps everyone together for 90–120 minutes, which no restaurant table can do for a group of 15 or 20.',
    closing:  () => 'We serve Fayetteville, Springdale, Rogers, Bentonville, Bella Vista, and all of Northwest Arkansas. University of Arkansas graduation season — May and May weekend dates specifically — fills quickly. Book early.',
  },
  // 687 — Springdale
  {
    headline: () => 'Springdale Families Celebrate Big — Private Hibachi Is Built for That',
    opening:  () => 'When you\'re planning a celebration for 20 or 30 people in Springdale, the restaurant option has a ceiling. Two tables pushed together, a prix-fixe menu the whole group has to choose from, and a room full of strangers on the other side of the divider. Springdale families — particularly those planning large graduation parties, multi-generational family reunions, and milestone birthday events — have found that the backyard is the better venue.',
    middle:   () => 'Private hibachi scales exactly to Springdale celebrations. The chef arrives with the full self-contained setup, positions the teppan grill in your outdoor space, and cooks for every guest individually — proteins chosen per person, cooked live at the grill. Quinceañeras, NWA regional family reunions, Tyson employee team events, and Springdale High School graduation parties all work in the same format because the experience adapts to the group, not the other way around.',
    closing:  () => 'We serve Springdale, Fayetteville, Rogers, Bentonville, Bella Vista, and all of Northwest Arkansas. Springdale graduation season and large-event summer weekends book quickly — secure your date early.',
  },
  // 688 — Bella Vista
  {
    headline: () => 'Seven Golf Courses, Nine Private Lakes, and One Private Chef Experience Worth Planning',
    opening:  () => 'Bella Vista residents chose this community for the quality of life it offers — wooded lots, private lakes, golf courses within a short drive, and a residential lifestyle that doesn\'t exist anywhere else in Arkansas. Private entertaining here matches that standard. Deck dinners overlooking the lake, outdoor celebrations in wooded backyards, and golf community gatherings in a setting that restaurants in Bentonville or Rogers simply cannot replicate.',
    middle:   () => 'Private hibachi fits the Bella Vista entertaining format perfectly. The chef arrives at your property — on your deck, in your backyard, wherever your outdoor space works best — sets up the complete self-contained grill, and performs 90–120 minutes of live teppanyaki for your guests. Retirement celebrations, milestone anniversaries, community member dinners, and family reunion weekends all come together in a format that keeps the entire group at the same table for the full evening.',
    closing:  () => 'We serve Bella Vista, Bentonville, Rogers, Fayetteville, Springdale, and all of Northwest Arkansas. Most dates are available with reasonable advance notice — holiday weekends and summer peak season book earlier.',
  },
  // 689–696 — Placeholders (Batches 2–4)
  _EMPTY_INTRO, // little-rock
  _EMPTY_INTRO, // conway
  _EMPTY_INTRO, // benton
  _EMPTY_INTRO, // hot-springs
  _EMPTY_INTRO, // mountain-home
  _EMPTY_INTRO, // russellville
  _EMPTY_INTRO, // fort-smith
  _EMPTY_INTRO, // jonesboro
]

// ─── AR_CLOSING_VARIANTS — 5 generic (indices 679–683) ────────────────────────
export const AR_CLOSING_VARIANTS = [
  // AR0 (679) — NWA Executive
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Serving Bentonville, Rogers, and all of Northwest Arkansas — corporate events, executive dinners, and family milestones`,
    urgency:      'Graduation season and peak summer dates fill early — confirm your date today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // AR1 (680) — NWA Community
  {
    headline:     (city) => `Ready to Host Your ${city} Event?`,
    sub:          (city) => `Serving Fayetteville, Springdale, Bella Vista, and all of Northwest Arkansas — graduation parties, family milestones, and community celebrations`,
    urgency:      'University of Arkansas graduation season books out early — secure your May date now.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // AR2 (681) — Central Arkansas
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Experience`,
    sub:          (city) => `Serving Little Rock, Conway, Benton, and all of Central Arkansas — from Chenal Valley executive homes to growing Saline County suburbs`,
    urgency:      'Central Arkansas graduation season and holiday dates fill quickly — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // AR3 (682) — Destination / Lake
  {
    headline:     (city) => `Book Your ${city} Lake House Chef`,
    sub:          (city) => `Serving Hot Springs, Mountain Home, Russellville, and all of the Arkansas lake markets — vacation rentals, lake houses, and resort properties`,
    urgency:      'Peak summer lake season fills fast — lock your date before it\'s gone.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // AR4 (683) — Regional Arkansas
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Serving Fort Smith, Jonesboro, and the Arkansas regional markets — graduation parties, corporate events, and family milestones`,
    urgency:      'Graduation season and summer peak dates fill early — confirm your date today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── AR_CITY_CLOSINGS — 13 city-specific (indices 684–696) ────────────────────
export const AR_CITY_CLOSINGS = [
  // 684 — Bentonville
  {
    headline:     (city) => `Book Your Bentonville Private Hibachi Event`,
    sub:          (city) => `Corporate supplier dinners, executive home entertaining, and landmark family milestones — your private hibachi chef comes to your Bentonville home or patio`,
    urgency:      'Graduation season and NWA corporate event season books out early — confirm your Bentonville date today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 685 — Rogers
  {
    headline:     (city) => `Book Your Rogers Private Hibachi Event`,
    sub:          (city) => `Pinnacle Hills graduations, corporate team dinners, and large Rogers family celebrations — your private chef arrives fully equipped`,
    urgency:      'Graduation season and summer dates fill quickly — secure your Rogers event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 686 — Fayetteville
  {
    headline:     (city) => `Book Your Fayetteville Graduation Event`,
    sub:          (city) => `University of Arkansas graduation weekends, family milestone celebrations, and Fayetteville home events — your private chef comes to you`,
    urgency:      'U of A graduation season fills weeks in advance — book your May date now.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 687 — Springdale
  {
    headline:     (city) => `Book Your Springdale Backyard Hibachi Event`,
    sub:          (city) => `Large graduation parties, family reunions, and NWA backyard celebrations — your private hibachi chef comes to your Springdale home`,
    urgency:      'Summer backyard dates and graduation season fill early — confirm your Springdale event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 688 — Bella Vista
  {
    headline:     (city) => `Book Your Bella Vista Private Chef Event`,
    sub:          (city) => `Deck dinners, golf community gatherings, and milestone celebrations at your Bella Vista property — your private hibachi chef comes to you`,
    urgency:      'Summer and holiday dates in Bella Vista book quickly — secure your date today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 689–696 — Placeholders (Batches 2–4)
  _EMPTY_CLOSE, // little-rock
  _EMPTY_CLOSE, // conway
  _EMPTY_CLOSE, // benton
  _EMPTY_CLOSE, // hot-springs
  _EMPTY_CLOSE, // mountain-home
  _EMPTY_CLOSE, // russellville
  _EMPTY_CLOSE, // fort-smith
  _EMPTY_CLOSE, // jonesboro
]

// ─── Major cities map ──────────────────────────────────────────────────────────
const AR_MAJOR_CITIES = {
  // Batch 1 (profileIdx 0–4) — NWA
  'bentonville':  { v: 0, profileIdx: 0,  nearby: ['Rogers', 'Fayetteville', 'Bella Vista', 'Springdale'] },
  'rogers':       { v: 0, profileIdx: 1,  nearby: ['Bentonville', 'Fayetteville', 'Springdale'] },
  'fayetteville': { v: 1, profileIdx: 2,  nearby: ['Springdale', 'Rogers', 'Bentonville'] },
  'springdale':   { v: 1, profileIdx: 3,  nearby: ['Fayetteville', 'Rogers', 'Bentonville'] },
  'bella-vista':  { v: 1, profileIdx: 4,  nearby: ['Bentonville', 'Rogers', 'Fayetteville'] },
  // Batch 2 (profileIdx 5–7) — Little Rock Metro
  'little-rock':  { v: 2, profileIdx: 5,  nearby: ['Conway', 'Benton', 'Hot Springs'] },
  'conway':       { v: 2, profileIdx: 6,  nearby: ['Little Rock', 'Benton', 'Russellville'] },
  'benton':       { v: 2, profileIdx: 7,  nearby: ['Little Rock', 'Conway', 'Hot Springs'] },
  // Batch 3 (profileIdx 8–10) — Destination / Lake
  'hot-springs':   { v: 3, profileIdx: 8,  nearby: ['Little Rock', 'Benton'] },
  'mountain-home': { v: 3, profileIdx: 9,  nearby: ['Little Rock'] },
  'russellville':  { v: 3, profileIdx: 10, nearby: ['Conway', 'Little Rock', 'Fort Smith'] },
  // Batch 4 (profileIdx 11–12) — Regional
  'fort-smith':    { v: 4, profileIdx: 11, nearby: ['Fayetteville', 'Springdale', 'Russellville'] },
  'jonesboro':     { v: 4, profileIdx: 12, nearby: ['Little Rock'] },
}

// ─── Display name overrides for multi-word slugs ───────────────────────────────
const AR_CITY_DISPLAY_NAMES = {
  'bella-vista':   'Bella Vista',
  'little-rock':   'Little Rock',
  'hot-springs':   'Hot Springs',
  'mountain-home': 'Mountain Home',
  'fort-smith':    'Fort Smith',
}

// ─── Blog posts (3 planned — built in a separate session) ─────────────────────
export const AR_BLOG_POSTS = [[], [], []]

// =============================================================================
// EXPORTED FUNCTIONS
// =============================================================================

export function getArCityData(citySlug, cityName) {
  const entry = AR_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry
  const customMeta  = AR_CUSTOM_META[citySlug] || null
  const displayName = AR_CITY_DISPLAY_NAMES[citySlug] ?? cityName
  return {
    cityName:     displayName,
    stateAbbr:    'AR',
    stateName:    'Arkansas',
    stateSlug:    'arkansas',
    variant:      v % 3,
    heroImage:    AR_THEME_HEROES[v],
    heroSubtitle: AR_HERO_SUBTITLES[v](displayName),
    heroH1Prefix: AR_PROFILE_H1_PREFIXES[profileIdx],
    uniqueIntroVariant:   684 + profileIdx,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: 684 + profileIdx,
    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),
    testimonials:      AR_TESTIMONIALS[citySlug] || [],
    nearbyCities:      nearby,
    nearbyMajorCities: ['Little Rock', 'Bentonville', 'Fayetteville', 'Fort Smith', 'Jonesboro', 'Hot Springs'],
  }
}

export function getArBlogPosts(variant, count) {
  return AR_BLOG_POSTS[variant % 3] || []
}

export function getArHowItWorks(citySlug) {
  return AR_HOW_IT_WORKS
}

export function getArSectionVariant(citySlug) {
  const entry = AR_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return AR_SECTION_VARIANTS[entry.v]
}

export function getArCityImage(citySlug) {
  return AR_CITY_IMAGE_MAP[citySlug] || null
}

export function getArSupportImages(citySlug) {
  return AR_SUPPORT_IMAGES[citySlug] || null
}

// ─── AR_INTRO_VARIANTS and AR_CITY_INTROS are already exported above ────────
// ─── AR_CLOSING_VARIANTS and AR_CITY_CLOSINGS are already exported above ────
