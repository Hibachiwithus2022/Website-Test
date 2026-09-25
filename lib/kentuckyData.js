// Kentucky — 3 cities, 1 batch, 3 themes
// Batch 1 (profileIdx 0–2): Louisville, Lexington, Bowling Green
//
// KY_INTRO_VARIANTS indices 753–755 (3 generics)
// KY_CITY_INTROS indices 756–758 (3 city-specific)
// uniqueIntroVariant = 756 + profileIdx

// ─── H1 prefixes by profileIdx ────────────────────────────────────────────────
const KY_PROFILE_H1_PREFIXES = [
  'Private Hibachi Chef in',  // 0: Louisville
  'Hibachi at Home in',       // 1: Lexington
  'Hibachi Catering in',      // 2: Bowling Green
]

// ─── Theme hero images ────────────────────────────────────────────────────────
const KY_THEME_HEROES = [
  '/pics/hibachi-private-chef-1.jpg', // T0: Lexington Horse Country
  '/pics/hibachi-shot-2.jpg',         // T1: Louisville Metro & Derby Culture
  '/pics/hibachi-photo-2.jpg',        // T2: Bowling Green & WKU
]

// ─── Hero subtitles by theme ──────────────────────────────────────────────────
const KY_HERO_SUBTITLES = [
  (city) => `${city} horse country estates, Keeneland families, and UK graduation milestones — your private teppanyaki chef, brought to your home`,
  (city) => `${city} Derby city professionals, NuLu executives, and milestone celebrations — private hibachi at your Louisville home`,
  (city) => `${city} WKU graduation families, Corvette Museum corridor professionals, and south Kentucky milestones — your private chef comes to you`,
]

// ─── How It Works ─────────────────────────────────────────────────────────────
const KY_HOW_IT_WORKS = {
  headline:   (city) => `How Private Hibachi Works in ${city}`,
  footerNote: (city) => `Every ${city} event is confirmed with a deposit. Your date is locked the moment you book — no double-bookings, no last-minute uncertainty.`,
  steps: [
    { num: '01', title: 'Submit Your Date & Address',           desc: 'Give us your Kentucky address, event date, and approximate guest count. We respond with a personalized same-day quote — whether you\'re in Louisville, Lexington, Bowling Green, or anywhere in Kentucky.' },
    { num: '02', title: 'Confirm Your Menu',                    desc: 'Choose proteins — chicken, steak, shrimp, salmon — and add premium upgrades like filet mignon, lobster tail, Chilean sea bass, or wagyu. Everything else is included: fried rice, grilled vegetables, miso soup, yum yum and ginger sauce, plates, and chopsticks.' },
    { num: '03', title: 'Lock Your Date',                       desc: 'A deposit confirms your event immediately. Your Kentucky date is reserved — no double-bookings, no cancellations.' },
    { num: '04', title: 'Chef Travels to You',                  desc: 'Your chef arrives 20–30 minutes before the event with the full self-contained propane teppan grill, all ingredients, and every piece of equipment. No gas hookup required at any Kentucky property.' },
    { num: '05', title: 'Live Fire Performance & Full Cleanup', desc: '90–120 minutes of live teppanyaki — fire tricks, the volcano, flying shrimp, every dish cooked to order. Full cleanup when dinner ends. Your Kentucky property is left exactly as it was.' },
  ],
}

// ─── Section variants (3 themes) ─────────────────────────────────────────────
const KY_SECTION_VARIANTS = [
  // T0 — Lexington Horse Country
  {
    heroPill:         'Lexington Private Chef',
    experiencePill:   'Beyond Any Lexington Restaurant',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} estate, farm property, or suburban home becomes an exclusive private teppanyaki dining room for your family or guests.` },
      { icon: '🐎', title: `${city} Horse Country Entertaining`,    desc: `${city}'s thoroughbred estate community sets a distinctive standard for private entertaining. Our certified chefs deliver a premium teppanyaki experience that matches the occasion — whether it's a Keeneland season dinner or a UK graduation celebration.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/private-party-chef-6.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at a ${city}, Kentucky estate`,
    areasPill:          'Serving Greater Lexington',
    areasHeadline:      (city) => `Private Hibachi in ${city} and Central Kentucky`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding central Kentucky corridor — Hamburg, Beaumont, Georgetown, Richmond, Versailles, Paris, and every Bluegrass region community. If your outdoor space holds a grill, we come to you.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Lexington Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Dining Experience ${city} Hosts Have Been Waiting For`,
    occasionSubtext:       'From UK graduation celebrations and Keeneland season entertaining to milestone anniversary dinners on horse country estates, private hibachi is Kentucky\'s most memorable private dining experience',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Lexington Hosts Are Saying',
  },
  // T1 — Louisville Metro & Derby Culture
  {
    heroPill:         'Louisville Hibachi',
    experiencePill:   'Private Dining for Louisville',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No reservation required — your ${city} backyard, covered patio, or outdoor space becomes a private dining room for every guest at once.` },
      { icon: '🏇', title: 'Derby City Private Entertaining',       desc: `${city}'s Derby city culture understands premium private events. From Prospect estate dinners to NuLu professional team celebrations, private hibachi at your Louisville home delivers the kind of live-performance dining that no Churchill Downs restaurant can replicate for a private group.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-chef-home.jpg',
    experienceImageAlt: (city) => `Private hibachi at a ${city}, Kentucky home`,
    areasPill:          'Serving Greater Louisville',
    areasHeadline:      (city) => `Private Hibachi in ${city} and the Greater Louisville Metro`,
    areasIntro: [
      (city, state) => `We serve ${city} and the greater Louisville metro — Prospect, St. Matthews, The Highlands, Jeffersontown, Anchorage, Crestwood, Shelbyville, and every surrounding community across Jefferson County and beyond.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Louisville Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Hibachi Experience ${city} Has Been Looking For`,
    occasionSubtext:       'Corporate team dinners, U of L and Bellarmine graduation parties, Derby season entertaining, and milestone family celebrations — private hibachi is Louisville\'s most memorable private group dining format',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Louisville Hosts Are Saying',
  },
  // T2 — Bowling Green & WKU
  {
    heroPill:         'Bowling Green Hibachi',
    experiencePill:   'Private Dining for South Kentucky',
    experiencePoints: (city) => [
      { icon: '🏡', title: `Your ${city} Home Is the Venue`,        desc: `No restaurant reservation required — your ${city} backyard, covered patio, or outdoor space becomes a private teppanyaki dining room for your group.` },
      { icon: '🎓', title: 'WKU Graduation Weekend Solution',       desc: `${city}'s WKU commencement fills every restaurant in the area for weeks. Private hibachi catering at your home means your family doesn't compete for the last available table — your chef comes to you.` },
      { icon: '🥩', title: 'Premium Proteins, Live Teppanyaki',     desc: 'Choose from chicken, steak, shrimp, salmon — or upgrade to filet mignon, lobster tail, Chilean sea bass, or wagyu. Every guest orders individually, cooked live at the teppan grill.' },
      { icon: '✨', title: 'Full Setup & Complete Cleanup',          desc: `Your chef arrives with the full self-contained setup, performs the complete teppanyaki experience, and leaves your ${city} property exactly as they found it.` },
    ],
    experienceImage:    '/pics/hibachi-chef-2.jpg',
    experienceImageAlt: (city) => `Private hibachi catering in ${city}, Kentucky`,
    areasPill:          'Serving South Kentucky',
    areasHeadline:      (city) => `Private Hibachi in ${city} and South Kentucky`,
    areasIntro: [
      (city, state) => `We serve ${city} and the surrounding south Kentucky corridor — Elizabethtown, Glasgow, Franklin, Scottsville, Cave City, and every Warren County and southern Kentucky community.`,
      (city) => `Most ${city} bookings are confirmed same-day. Call or text (201) 565-3878 or book online.`,
    ],
    areasButton:           'Book Your Bowling Green Event',
    occasionPill:          'Perfect For',
    occasionHeadline:      (city) => `The Private Hibachi Experience ${city} Has Been Looking For`,
    occasionSubtext:       'WKU graduation parties, Corvette Museum corridor corporate events, and south Kentucky family milestones — private hibachi catering is the group dinner format Bowling Green has been missing',
    faqPill:               'Hibachi FAQs',
    faqHeadline:           (city, abbr) => `Private Hibachi in ${city}, ${abbr} — Your Questions Answered`,
    testimonialSubheading: 'What Bowling Green Hosts Are Saying',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
const KY_TESTIMONIALS = {
  'louisville': [
    {
      text:     'We hosted an executive client dinner for 16 at our home in Prospect overlooking the river. Louisville has plenty of excellent restaurants — Jeff Ruby\'s, Proof on Main, Decca — but none of them work for a private group that size with the format I wanted. The private hibachi chef on our back patio was the answer. Two hours of live performance, premium proteins, every client at the same table. Everyone asked us how we arranged it.',
      name:     'William H.',
      city:     'Louisville, KY',
      event:    'Executive Client Dinner',
      initials: 'WH',
    },
    {
      text:     'My daughter graduated from U of L and we had 20 family members coming in from Ohio, Tennessee, and Indiana. Louisville graduation weekend means every restaurant on Bardstown Road and in NuLu is either fully booked or inadequate for a group that size. The private hibachi chef came to our St. Matthews home and performed for the whole family at once. The best graduation celebration we\'ve ever hosted.',
      name:     'Sandra K.',
      city:     'Louisville, KY',
      event:    'U of L Graduation Party',
      initials: 'SK',
    },
    {
      text:     'My husband\'s 55th birthday party. 22 guests at our home in The Highlands. I\'d looked at every Louisville option and nothing had the energy or the private feel I wanted for his milestone. The private hibachi chef on our back deck performed for two hours — fire tricks, individually cooked orders, everyone at the same table. My husband said it was the best birthday dinner he\'d ever had.',
      name:     'Carol T.',
      city:     'Louisville, KY',
      event:    '55th Birthday Celebration',
      initials: 'CT',
    },
  ],
  'lexington': [
    {
      text:     'We hosted a Keeneland fall meet dinner at our farm outside Lexington — 18 guests from the thoroughbred industry. I\'d considered every Lexington option and nothing worked for that group size in a private setting. The private hibachi chef set up in our barn pavilion, performed the full teppanyaki dinner for the whole group, and it was the single best hosted dinner of the season. We\'ve already booked for Keeneland spring.',
      name:     'James F.',
      city:     'Lexington, KY',
      event:    'Keeneland Season Dinner',
      initials: 'JF',
    },
    {
      text:     'My daughter graduated from UK and we had 24 family members flying in from four states. Lexington restaurant options for that group size on a May Saturday are essentially nonexistent in a private format. The private hibachi chef came to our Hamburg home, set up in the backyard, and performed for the whole family at once. Our daughter said it was the best celebration she could have imagined.',
      name:     'Linda B.',
      city:     'Lexington, KY',
      event:    'UK Graduation Party',
      initials: 'LB',
    },
    {
      text:     'Our 30th anniversary dinner. 16 of our closest family and friends at our home in Beaumont. We\'ve tried Lockbox, A La Lucie, and every Lexington restaurant that\'s supposed to be special — nothing for a group our size works the way I wanted for 30 years. The private hibachi chef on our patio, performing for everyone at once, was exactly right. My wife said it was the best dinner of our marriage.',
      name:     'Robert M.',
      city:     'Lexington, KY',
      event:    '30th Anniversary Dinner',
      initials: 'RM',
    },
  ],
  'bowling-green': [
    {
      text:     'My son graduated from WKU and we had 22 family members coming in from Nashville, Louisville, and Lexington. Every Bowling Green restaurant was booked by January for commencement weekend. The private hibachi chef came to our home near Sunnyside, set up in the backyard, and performed for the whole family at once. Our son said it was the best graduation celebration he could have had.',
      name:     'Donna R.',
      city:     'Bowling Green, KY',
      event:    'WKU Graduation Party',
      initials: 'DR',
    },
    {
      text:     'Our manufacturing team had an end-of-year celebration — 20 people at a colleague\'s home in Bowling Green. We\'d done team dinners at Mariah\'s and other local options before. The private hibachi catering was a completely different experience. Live performance in the backyard, individually cooked orders, everyone at the same table. The best team event we\'ve done in five years.',
      name:     'Jason P.',
      city:     'Bowling Green, KY',
      event:    'Corporate Team Celebration',
      initials: 'JP',
    },
    {
      text:     'A milestone birthday for my mother — 18 family members at our home in Bowling Green. I\'d looked at every south Kentucky option and nothing was going to match what I wanted for her 70th. The private hibachi catering chef came to us, set up on the covered patio, and performed the full teppanyaki dinner for the whole family. My mother said it was the most memorable dinner of her life.',
      name:     'Michelle C.',
      city:     'Bowling Green, KY',
      event:    '70th Birthday Celebration',
      initials: 'MC',
    },
  ],
}

// ─── City experience images ────────────────────────────────────────────────────
const KY_CITY_IMAGE_MAP = {
  'louisville':   { src: '/pics/hibachi-photo-1.jpg',  alt: (city) => `Private hibachi chef at a Louisville, Kentucky home` },
  'lexington':    { src: '/pics/hero-1.jpg',            alt: (city) => `Hibachi at home in Lexington, Kentucky` },
  'bowling-green':{ src: '/pics/hibachi-dallas.jpg',    alt: (city) => `Hibachi catering in Bowling Green, Kentucky` },
}

// ─── Support images ────────────────────────────────────────────────────────────
const KY_SUPPORT_IMAGES = {
  'louisville': {
    testimonial: {
      src:        '/pics/backyard-hibachi-2.jpg',
      alt:        (city) => `Private hibachi at a Louisville, Kentucky home`,
      caption:    'Louisville Derby city executive and milestone events',
      trustBadge: 'Trusted by Louisville Hosts',
      intro:      (city) => `Louisville hosts — Prospect executives, The Highlands professionals, and families across the metro — have found that private hibachi delivers the live-performance group dining experience no Derby city restaurant can replicate for a private group of 20. Here's what Louisville hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Louisville, Kentucky home`, caption: 'The Louisville private dining format' },
  },
  'lexington': {
    testimonial: {
      src:        '/pics/hibachi-catering-3.jpg',
      alt:        (city) => `Hibachi at home in Lexington, Kentucky`,
      caption:    'Lexington horse country estate and milestone events',
      trustBadge: 'Trusted by Lexington Hosts',
      intro:      (city) => `Lexington hosts — thoroughbred estate families, Hamburg and Beaumont suburban households, and the UK graduation community — have found that private hibachi at home delivers the premium private dining experience that matches the Bluegrass region's standard for private entertaining. Here's what Lexington hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Private hibachi chef at a Lexington, Kentucky estate`, caption: 'The Lexington horse country private dining format' },
  },
  'bowling-green': {
    testimonial: {
      src:        '/pics/hibachi-raleigh.jpg',
      alt:        (city) => `Hibachi catering in Bowling Green, Kentucky`,
      caption:    'Bowling Green WKU graduation and corporate events',
      trustBadge: 'Trusted by Bowling Green Hosts',
      intro:      (city) => `Bowling Green hosts — WKU graduation families, Corvette corridor corporate teams, and south Kentucky households — have found that private hibachi catering delivers a group dining experience no local restaurant can provide for a private group of 20. Here's what Bowling Green hosts are saying:`,
    },
    cta: { src: null, alt: (city) => `Hibachi catering in Bowling Green, Kentucky`, caption: 'The Bowling Green south Kentucky catering format' },
  },
}

// ─── Custom meta ───────────────────────────────────────────────────────────────
const KY_CUSTOM_META = {
  'louisville': {
    title: 'Private Hibachi Chef in Louisville, KY | Hibachi Connect',
    desc:  'Private hibachi chef in Louisville, Kentucky for Derby season entertaining, U of L graduation parties, and milestone celebrations. Your chef comes to your Louisville home.',
  },
  'lexington': {
    title: 'Hibachi at Home in Lexington, KY | Hibachi Connect',
    desc:  'Hibachi at home in Lexington, Kentucky for UK graduation weekends, Keeneland season entertaining, and horse country milestone celebrations. Your private chef arrives fully equipped.',
  },
  'bowling-green': {
    title: 'Hibachi Catering in Bowling Green, KY | Hibachi Connect',
    desc:  'Hibachi catering in Bowling Green, Kentucky for WKU graduation parties, corporate team events, and south Kentucky family milestones. Your private chef comes to your home.',
  },
}

// ─── KY_INTRO_VARIANTS — 3 generic entries (indices 753–755) ──────────────────
export const KY_INTRO_VARIANTS = [
  // T0 (753) — Lexington Horse Country
  {
    headline: () => 'Lexington\'s Bluegrass Estates and Keeneland Community Have Found a New Private Dining Format',
    opening:  () => 'Lexington\'s horse country community — the thoroughbred farm estates, the Keeneland racing families, and the Hamburg and Beaumont suburban households that represent some of the fastest-growing residential corridors in central Kentucky — has always set a high standard for private entertaining. When your guest list includes industry colleagues, family from four states, or the team that just completed a record year, a Lexington restaurant reservation no longer rises to the occasion. A private chef at your own home does.',
    middle:   () => 'Private hibachi brings the full teppanyaki experience to your outdoor space — live fire, premium proteins cooked to order, and 90 minutes of shared entertainment that no central Kentucky restaurant can replicate for a private group.',
    closing:  () => 'Lexington and Bluegrass region hosts have found that private hibachi is the format that matches their outdoor entertaining infrastructure — from horse country estate pavilions to suburban backyard decks. UK graduation season and Keeneland meet weekends fill quickly — secure your event today.',
  },
  // T1 (754) — Louisville Metro & Derby Culture
  {
    headline: () => 'Louisville\'s Derby City Has Found a Private Dining Format That Matches the Occasion',
    opening:  () => 'Louisville has one of the most sophisticated private entertaining cultures in the south — shaped by Derby season, bourbon culture, and the executive professional community that has built its career and its home in Prospect, St. Matthews, The Highlands, and the greater Jefferson County corridor. When the occasion demands something more memorable than a reservation at Jeff Ruby\'s or Proof on Main, private hibachi at your Louisville home is the answer.',
    middle:   () => 'The chef arrives at your Louisville property fully self-contained — the complete propane teppan grill, all proteins, rice, vegetables, sauces, and every piece of equipment required. No gas hookup. No venue minimum. Just the full live teppanyaki performance for every guest at once.',
    closing:  () => 'Louisville hosts have found that private hibachi delivers the kind of Derby city private entertaining their outdoor spaces were designed for. U of L and Bellarmine graduation season and spring peak dates fill quickly — confirm your event today.',
  },
  // T2 (755) — Bowling Green & WKU
  {
    headline: () => 'Bowling Green and South Kentucky Have Found a Private Catering Format That Finally Works for Groups of 20',
    opening:  () => 'Bowling Green\'s growing corridor — the WKU campus community, the Corvette Museum and GM manufacturing corridor, the Nashville-suburb professionals who have relocated north along I-65, and the established Warren County families who have anchored south Kentucky\'s social calendar for generations — has always had the appetite for premium private group dining. What it has lacked is a format that works for 20 or 25 guests without a 90-minute drive to Nashville or Louisville. Private hibachi catering solves it.',
    middle:   () => 'The chef arrives at your Bowling Green home fully self-contained and performs the complete teppanyaki dinner for your group. WKU graduation parties, corporate year-end celebrations for the GM manufacturing corridor, and milestone family events all fit the same format in your own backyard.',
    closing:  () => 'Bowling Green and south Kentucky hosts have found that private hibachi catering is worth the same call as Louisville or Nashville — without the drive. WKU commencement weekend and spring peak dates fill quickly — book your event early.',
  },
]

// ─── KY_CLOSING_VARIANTS — 3 generic (indices 753–755) ────────────────────────
export const KY_CLOSING_VARIANTS = [
  // T0 (753) — Lexington Horse Country
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `UK graduation celebrations, Keeneland season entertaining, and Bluegrass milestone events — your private chef arrives fully equipped`,
    urgency:      'Lexington UK graduation season and Keeneland meet weekends fill quickly — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T1 (754) — Louisville Metro & Derby Culture
  {
    headline:     (city) => `Book Your ${city} Private Hibachi Event`,
    sub:          (city) => `Derby city executive dinners, U of L and Bellarmine graduation parties, and ${city} milestone celebrations — your private chef comes to your home`,
    urgency:      'Louisville graduation season and spring peak dates fill quickly — confirm your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // T2 (755) — Bowling Green & WKU
  {
    headline:     (city) => `Book Your ${city} Hibachi Catering Event`,
    sub:          (city) => `WKU graduation parties, corporate team dinners, and south Kentucky family milestones — your private chef arrives fully equipped`,
    urgency:      'WKU commencement weekend dates fill quickly — book your Bowling Green event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── KY_CITY_INTROS — city-specific (indices 756–758) ─────────────────────────
export const KY_CITY_INTROS = [
  // 756 — Louisville
  {
    headline: () => 'Louisville\'s Derby City Private Entertaining Has a New Format',
    opening:  () => 'Louisville is Kentucky\'s largest city and one of the most private-entertaining-forward cities in the south — shaped by Derby season, the bourbon trail, and the executive professional community that has built its home in Prospect, St. Matthews, The Highlands, and Anchorage. When a corporate client dinner for 18 requires something more than a table at Jeff Ruby\'s, or a U of L graduation party brings 22 family members from four states on a May weekend when every reservation is taken, private hibachi at your Louisville home is the format that delivers.',
    middle:   () => 'The chef arrives at your Louisville property fully self-contained — the complete self-contained propane teppan grill, all proteins, rice, vegetables, sauces, and every piece of equipment. No gas hookup. No venue fee. No minimum-spend guarantee. Just the full teppanyaki performance for every guest at once on your back patio or deck.',
    closing:  () => 'We serve Louisville, Prospect, St. Matthews, The Highlands, Jeffersontown, Anchorage, Crestwood, Shelbyville, and all of Jefferson County and the greater Louisville metro. Graduation season and spring peak dates fill 4–5 weeks ahead — secure your event today.',
  },
  // 757 — Lexington
  {
    headline: () => 'Lexington\'s Horse Country Community Has Found the Private Chef Format Their Estates Were Built For',
    opening:  () => 'Lexington sits at the center of Kentucky\'s thoroughbred country — and the Bluegrass region\'s estate and suburban communities have the outdoor entertaining infrastructure that private hibachi was designed for. Farm pavilions facing the paddocks. Back decks on Hamburg Pavilion-area homes that seat 25. Covered patios in Beaumont and Tates Creek Road neighborhoods that have never had a private chef format that matched them. Private hibachi at your Lexington property fills exactly that gap.',
    middle:   () => 'UK commencement is one of the strongest graduation party markets in Kentucky — families fly in from across the southeast for their Wildcat\'s weekend, and every Lexington restaurant fills by March. Keeneland fall and spring meet seasons draw industry dinners and estate entertaining throughout October and April. And the milestone birthday and anniversary celebrations for the Lexington professional and thoroughbred community all share the same preference: private, premium, and at home.',
    closing:  () => 'We serve Lexington, Hamburg, Beaumont, Georgetown, Richmond, Versailles, Paris, Winchester, and all of central Kentucky\'s Bluegrass region. UK graduation season and Keeneland meet windows fill 4–5 weeks ahead — secure your Lexington event today.',
  },
  // 758 — Bowling Green
  {
    headline: () => 'WKU Graduation Weekend in Bowling Green Deserves More Than a Full Restaurant',
    opening:  () => 'Western Kentucky University commencement is one of the most compressed graduation-weekend restaurant events in south Kentucky. WKU draws families from across Tennessee, Indiana, and the greater Mid-South for commencement weekend, and Bowling Green\'s restaurant capacity fills months ahead for May and December graduation dates. Families who drive up from Nashville or down from Louisville for their Hilltopper\'s big weekend have historically had two options: a very long waitlist or a very long drive. Private hibachi catering comes to your Bowling Green home before the scramble starts.',
    middle:   () => 'WKU graduation parties that bring extended families from Nashville, Louisville, and across the south. Corporate team celebrations for the GM Corvette plant professionals and the growing Bowling Green manufacturing corridor. Milestone family events for the Warren County residents who have anchored south Kentucky\'s social calendar for generations. All of it fits the same format at your Bowling Green home.',
    closing:  () => 'We serve Bowling Green, Elizabethtown, Glasgow, Franklin, Scottsville, Cave City, Auburn, and all of south Kentucky. WKU commencement weekend and spring peak dates fill months ahead — book your Bowling Green catering event early.',
  },
]

// ─── KY_CITY_CLOSINGS — city-specific (indices 756–758) ───────────────────────
export const KY_CITY_CLOSINGS = [
  // 756 — Louisville
  {
    headline:     (city) => `Book Your Louisville Private Hibachi Event`,
    sub:          (city) => `Derby city executive dinners, U of L graduation parties, and Louisville metro milestones — your private chef comes to your home`,
    urgency:      'Louisville graduation season and spring peak dates fill 4–5 weeks ahead — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 757 — Lexington
  {
    headline:     (city) => `Book Your Lexington Private Hibachi Event`,
    sub:          (city) => `UK graduation celebrations, Keeneland season entertaining, and Lexington milestone events — your private chef arrives fully equipped`,
    urgency:      'Lexington UK graduation season and Keeneland meet weekends fill 4–5 weeks ahead — secure your event today.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
  // 758 — Bowling Green
  {
    headline:     (city) => `Book Your Bowling Green Hibachi Catering Event`,
    sub:          (city) => `WKU graduation parties, corporate team celebrations, and south Kentucky milestones — your private chef arrives at your home fully set up`,
    urgency:      'WKU commencement weekend and spring peak dates fill months ahead — book your Bowling Green event early.',
    btnPrimary:   'Book Now',
    btnSecondary: 'Get a Quote',
  },
]

// ─── Major cities map ──────────────────────────────────────────────────────────
const KY_MAJOR_CITIES = {
  'louisville':    { v: 1, profileIdx: 0, nearby: ['Lexington', 'Elizabethtown', 'Shelbyville'] },
  'lexington':     { v: 0, profileIdx: 1, nearby: ['Louisville', 'Georgetown', 'Richmond'] },
  'bowling-green': { v: 2, profileIdx: 2, nearby: ['Nashville', 'Elizabethtown', 'Glasgow'] },
}

// ─── Display name overrides ────────────────────────────────────────────────────
const KY_CITY_DISPLAY_NAMES = {
  'bowling-green': 'Bowling Green',
}

// ─── Blog posts ───────────────────────────────────────────────────────────────
// Slot 0 (v%3=0): Lexington (v=0)
// Slot 1 (v%3=1): Louisville (v=1)
// Slot 2 (v%3=2): Bowling Green (v=2)
export const KY_BLOG_POSTS = [
  // Slot 0 — Lexington
  [
    { slug: 'hibachi-at-home-kentucky-guide',            title: 'Hibachi at Home in Kentucky: Louisville, Lexington, and Bowling Green Guide', date: '2025-03-15', excerpt: 'Everything Kentucky hosts need to know — Derby city executive entertaining, horse country estate events, and WKU graduation parties.' },
    { slug: 'private-hibachi-louisville-derby-season',   title: 'Private Hibachi in Louisville: Derby Season, U of L Graduation, and Executive Entertaining', date: '2025-04-05', excerpt: 'How Louisville hosts use private hibachi for Derby season, U of L graduation parties, and milestone celebrations.' },
    { slug: 'private-hibachi-wku-bowling-green-graduation', title: 'Private Hibachi for WKU Graduation in Bowling Green, Kentucky', date: '2025-04-20', excerpt: 'How to book a private hibachi chef for WKU commencement weekend and the Bowling Green corporate catering market.' },
  ],
  // Slot 1 — Louisville
  [
    { slug: 'private-hibachi-louisville-derby-season',   title: 'Private Hibachi in Louisville: Derby Season, U of L Graduation, and Executive Entertaining', date: '2025-04-05', excerpt: 'How Louisville hosts use private hibachi for Derby season, U of L graduation parties, and milestone celebrations.' },
    { slug: 'hibachi-at-home-kentucky-guide',            title: 'Hibachi at Home in Kentucky: Louisville, Lexington, and Bowling Green Guide', date: '2025-03-15', excerpt: 'Everything Kentucky hosts need to know — Derby city executive entertaining, horse country estate events, and WKU graduation parties.' },
    { slug: 'private-hibachi-wku-bowling-green-graduation', title: 'Private Hibachi for WKU Graduation in Bowling Green, Kentucky', date: '2025-04-20', excerpt: 'How to book a private hibachi chef for WKU commencement weekend and the Bowling Green corporate catering market.' },
  ],
  // Slot 2 — Bowling Green
  [
    { slug: 'private-hibachi-wku-bowling-green-graduation', title: 'Private Hibachi for WKU Graduation in Bowling Green, Kentucky', date: '2025-04-20', excerpt: 'How to book a private hibachi chef for WKU commencement weekend and the Bowling Green corporate catering market.' },
    { slug: 'hibachi-at-home-kentucky-guide',            title: 'Hibachi at Home in Kentucky: Louisville, Lexington, and Bowling Green Guide', date: '2025-03-15', excerpt: 'Everything Kentucky hosts need to know — Derby city executive entertaining, horse country estate events, and WKU graduation parties.' },
    { slug: 'private-hibachi-louisville-derby-season',   title: 'Private Hibachi in Louisville: Derby Season, U of L Graduation, and Executive Entertaining', date: '2025-04-05', excerpt: 'How Louisville hosts use private hibachi for Derby season, U of L graduation parties, and milestone celebrations.' },
  ],
]

// =============================================================================
// EXPORTED FUNCTIONS
// =============================================================================

export function getKyCityData(citySlug, cityName) {
  const entry = KY_MAJOR_CITIES[citySlug]
  if (!entry) return null
  const { v, profileIdx, nearby } = entry
  const customMeta  = KY_CUSTOM_META[citySlug] || null
  const displayName = KY_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:             displayName,
    stateAbbr:            'KY',
    stateName:            'Kentucky',
    stateSlug:            'kentucky',
    variant:              v % 3,
    heroImage:            KY_THEME_HEROES[v],
    heroSubtitle:         KY_HERO_SUBTITLES[v](displayName),
    heroH1Prefix:         KY_PROFILE_H1_PREFIXES[profileIdx],
    uniqueIntroVariant:   756 + profileIdx,
    uniqueWhyUsVariant:   v % 3,
    uniqueClosingVariant: 756 + profileIdx,
    ...(customMeta ? { metaTitle: customMeta.title, metaDescription: customMeta.desc } : {}),
    testimonials:         KY_TESTIMONIALS[citySlug] || [],
    nearbyCities:         nearby,
    nearbyMajorCities:    ['Louisville', 'Lexington', 'Bowling Green'],
  }
}

export function getKyBlogPosts(variant, count) {
  return KY_BLOG_POSTS[variant % 3] || []
}

export function getKyHowItWorks(citySlug) {
  return KY_HOW_IT_WORKS
}

export function getKySectionVariant(citySlug) {
  const entry = KY_MAJOR_CITIES[citySlug]
  if (!entry) return null
  return KY_SECTION_VARIANTS[entry.v]
}

export function getKyCityImage(citySlug) {
  return KY_CITY_IMAGE_MAP[citySlug] || null
}

export function getKySupportImages(citySlug) {
  return KY_SUPPORT_IMAGES[citySlug] || null
}
