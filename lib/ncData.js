// ─────────────────────────────────────────────────────────────────────────────
// North Carolina City Page Variation System
// 5 rotating variants per content section.
// NC personality: corporate Charlotte, Research Triangle tech, Asheville mountain
// cabins, OBX beach houses, Lake Norman residential. NOT Texas. NOT Florida.
// ─────────────────────────────────────────────────────────────────────────────

// ── Deterministic variant index from city slug ────────────────────────────────
export function getNCVariantIndex(citySlug) {
  let h = 5381
  for (let i = 0; i < citySlug.length; i++) {
    h = (((h << 5) + h) ^ citySlug.charCodeAt(i)) >>> 0
  }
  return h % 5
}

// ── Hero subtitles — 5 NC-specific taglines ───────────────────────────────────
export const NC_HERO_SUBTITLES = [
  (city) => `Corporate Events · Backyard Parties · Private Hibachi in ${city}, NC From $60/Person`,
  (city) => `Backyard Dining · Tech Industry Events · Private Chef in ${city}, NC`,
  (city) => `Mountain Cabin Hibachi · Wedding Weekends · Private Chef in ${city}, NC`,
  (city) => `Beach House Hibachi · Family Reunions · Vacation Rental Events in ${city}, NC`,
  (city) => `Lake House Entertaining · Neighborhood Dinners · Private Hibachi in ${city}, NC`,
]

// ── Local highlights — 5 sets of 6 sidebar bullets ───────────────────────────
export const NC_LOCAL_HIGHLIGHTS = [
  // 0 — Charlotte / Urban / Corporate
  (city) => [
    `${city}'s thriving corporate scene makes private hibachi a go-to for team dinners and client entertaining`,
    `Upscale residential neighborhoods and open patios create ideal setups for Charlotte-area events`,
    `Bachelorette and bachelor weekends in ${city} book fast — weekend dates fill 3–4 weeks out`,
    `One chef covers 10–20 guests; two chef stations for corporate groups of 25–60`,
    `All equipment travels to your location — grill, propane, proteins, sauces, plates, and chopsticks`,
    `$60/adult, $30/child (ages 4–12), $600 event minimum — same-day quotes for most ${city} events`,
  ],
  // 1 — Research Triangle / Suburban Tech
  (city) => [
    `${city}'s tech professional community loves private hibachi for team celebrations and home entertaining`,
    `Backyard patios, decks, and driveways in the Triangle area are perfect hibachi setups`,
    `Family birthdays, graduation parties, and milestone dinners are our most-booked events in ${city}`,
    `Kids adore the fire tricks and flying shrimp — expect phones out and big reactions throughout`,
    `No restaurant logistics for 15 people — everyone eats together, hot food, at your own home`,
    `Most ${city}-area quotes returned same day. Weekend dates book 2–3 weeks out — reserve early`,
  ],
  // 2 — Mountain / Cabin / Asheville
  (city) => [
    `${city} cabin rentals and mountain vacation homes are ideal for private hibachi — deck setup, stunning backdrop`,
    `Wedding weekends, bachelorette trips, and girls' getaways are our most-booked in the ${city} area`,
    `Always confirm your cabin or vacation property allows outdoor open-flame cooking before booking`,
    `Mountain weather is spectacular for outdoor hibachi — reserve 3–4 weeks ahead for peak season`,
    `One chef handles 10–20 guests; book two stations for mountain cabin groups of 25–40`,
    `We serve ${city} and surrounding mountain communities. Travel fees disclosed upfront for remote locations`,
  ],
  // 3 — Coastal / Beach House / OBX
  (city) => [
    `${city} beach houses and vacation rentals are built for evenings like this — oceanfront deck, open air, chef performance`,
    `Family reunions, bachelorette weekends, and vacation group dinners are our specialty in the ${city} area`,
    `Always confirm your rental allows outdoor open-flame cooking. Most coastal NC properties do`,
    `Summer weekends at the coast book fast — reserve 3–5 weeks ahead for peak season dates`,
    `One chef serves 10–20 guests; two stations for large beach house groups of 25–50`,
    `$60/adult, $30/child, $600 event minimum. Most ${city} area quotes confirmed same day`,
  ],
  // 4 — Lake / Resort / Residential
  (city) => [
    `${city}'s lake community and residential neighborhoods create ideal outdoor hibachi settings year-round`,
    `Lake house decks, covered patios, and neighborhood gathering spaces all work for hibachi setup`,
    `Anniversary dinners, milestone birthdays, and neighborhood parties are our most-requested events`,
    `NC outdoor season runs spring through fall — perfect timing for lake house entertaining`,
    `One chef handles 10–20 guests; additional stations available for larger lakeside gatherings`,
    `Same-week bookings available on weekdays. Weekend lake dates book 2–3 weeks out — plan ahead`,
  ],
]

// ── Featured occasions — 5 rotating event-type grids ─────────────────────────
export const NC_OCCASIONS = [
  // 0 — Charlotte/Corporate
  [
    'Corporate Team Dinners', 'Bachelorette Weekends', 'Birthday Celebrations',
    'Bachelor Parties', 'Client Appreciation Events', 'Upscale Backyard Parties',
    'Anniversary Dinners', 'Graduation Parties', 'Neighborhood Gatherings', 'Holiday Events',
  ],
  // 1 — Triangle/Suburban
  [
    'Backyard Birthday Parties', 'Tech Team Celebrations', 'Family Reunions',
    'Graduation Dinners', 'Kids Birthday Parties', 'Anniversary Evenings',
    'Neighborhood Cookouts', 'Corporate Team Events', 'Retirement Parties', 'Holiday Gatherings',
  ],
  // 2 — Mountain/Cabin
  [
    'Mountain Cabin Weekends', 'Bachelorette Getaways', 'Wedding Party Dinners',
    'Anniversary Retreats', 'Girls Trip Dinners', 'Birthday Mountain Trips',
    'Vacation Rental Events', 'Family Cabin Reunions', 'Rehearsal Dinners', 'Corporate Retreats',
  ],
  // 3 — Coastal/Beach
  [
    'Beach House Parties', 'Family Vacation Reunions', 'Bachelorette Weekends',
    'OBX Vacation Dinners', 'Birthday Getaways', 'Bachelor Parties',
    'Large Group Vacation Nights', 'Anniversary Beach Trips', 'Summer House Parties', 'Holiday Gatherings',
  ],
  // 4 — Lake/Residential
  [
    'Lake House Parties', 'Anniversary Dinners', 'Birthday Celebrations',
    'Neighborhood Gatherings', 'Retirement Parties', 'Corporate Dinners',
    'Family Reunions', 'Holiday Entertaining', 'Graduation Parties', 'Milestone Events',
  ],
]

// ── FAQ sets — 5 rotating sets of 6 NC-specific FAQs ─────────────────────────
export const NC_FAQ_SETS = [
  // 0 — Charlotte / Urban / Corporate
  (city) => [
    {
      q: `Do you serve ${city} and surrounding suburbs?`,
      a: `Yes — we serve ${city} and all surrounding communities including South Charlotte, Ballantyne, Huntersville, Mooresville, Matthews, Concord, and surrounding areas. Most locations within 30 miles of central ${city} are in our standard service zone with no travel fee.`,
    },
    {
      q: `Can you set up a corporate hibachi event in ${city}?`,
      a: `Absolutely — corporate team dinners, client appreciation events, and executive gatherings are among our most-booked in ${city}. Our chefs are experienced in professional-setting presentations. We scale from intimate 10-person executive dinners to multi-station corporate events for 80+ guests. Quotes returned same day.`,
    },
    {
      q: `Is hibachi a good option for a ${city} bachelorette weekend?`,
      a: `One of the best. A private hibachi chef at your ${city} Airbnb or home eliminates the group restaurant headache, keeps everyone in your space, and gives the night a built-in entertainment anchor. Groups of 12–25 are our sweet spot. Book early — Charlotte bachelorette weekends fill 3–4 weeks out.`,
    },
    {
      q: `What neighborhoods and areas of ${city} do you serve?`,
      a: `We serve all of Greater ${city} — South Charlotte, Uptown, NoDa, Plaza Midwood, Myers Park, Ballantyne, Dilworth, Matthews, Concord, Huntersville, Mooresville, and surrounding Mecklenburg and Cabarrus county communities.`,
    },
    {
      q: `How much does a private hibachi chef cost in ${city}?`,
      a: `$60 per adult, $30 per child (ages 4–12), with a $600 event minimum. This covers your certified chef, full teppan grill, all proteins, fried rice, vegetables, sauces, plates, chopsticks, setup, and complete cleanup. No hidden fees. Most ${city} quotes are returned same day.`,
    },
    {
      q: `Do I need to provide anything for the hibachi event?`,
      a: `Just tables and chairs for your guests. Your chef arrives 5–10 minutes before the scheduled start time with everything else: propane grill, all proteins, rice, vegetables, sauces, plates, and chopsticks. Setup and cleanup are fully handled. Your job is gathering your people.`,
    },
  ],
  // 1 — Research Triangle / Suburban
  (city) => [
    {
      q: `Do you serve ${city} and the Research Triangle area?`,
      a: `Yes — ${city} and the Research Triangle are among our most active North Carolina markets. Raleigh, Durham, Cary, Apex, Chapel Hill, and surrounding communities are all served at standard rates with no travel fee for most Triangle-area addresses.`,
    },
    {
      q: `Is a backyard or deck a good setup for hibachi in ${city}?`,
      a: `Absolutely — backyard patios, wood decks, driveways, and covered outdoor areas are our most common setups in ${city}. We need a flat, stable surface of at least 10×10 ft with clearance overhead. Most ${city}-area homes have exactly the right space.`,
    },
    {
      q: `Are hibachi events good for kids' birthday parties in ${city}?`,
      a: `Kids are consistently the most enthusiastic hibachi guests — the fire tricks, flying shrimp, and onion volcano are genuinely unforgettable at that age. Ages 4–12 are $30 each; children 3 and under eat free. Our chefs know how to work a mixed-age crowd and adjust the energy to the group.`,
    },
    {
      q: `How far in advance should I book a ${city} hibachi event?`,
      a: `For weekend evenings, 2–3 weeks ahead is comfortable. Summer and graduation season weekends (May–June) can fill 4+ weeks out. Weekday events can often be arranged with 1 week's notice. Contact us — we'll confirm availability quickly.`,
    },
    {
      q: `What's the minimum group size for a ${city} hibachi event?`,
      a: `Our event minimum is $600. At $60/adult, that's 10 adults — which is our typical ${city} backyard party size. Groups of 15–25 are most common. For smaller groups that don't meet the minimum, the minimum charge still applies.`,
    },
    {
      q: `Can the chef cook indoors in ${city}?`,
      a: `Hibachi requires adequate ventilation. Outdoors is preferred — backyard, patio, driveway, garage with open doors. Large living spaces or screened porches with strong airflow can sometimes work. Describe your space when requesting a quote and we'll advise on the best setup for your specific location.`,
    },
  ],
  // 2 — Mountain / Cabin
  (city) => [
    {
      q: `Can you set up hibachi at a cabin rental or vacation property near ${city}?`,
      a: `Yes — mountain cabin rentals and vacation properties near ${city} are some of our most memorable setups. Confirm your rental allows outdoor open-flame cooking before booking — most Blue Ridge and western NC cabin properties do. We need a flat outdoor surface (deck, patio, or fire pit area) and vehicle access.`,
    },
    {
      q: `Is hibachi good for a bachelorette weekend in the ${city} area?`,
      a: `It's one of the best bachelorette activities in the mountains. A private chef at your cabin or Airbnb keeps the whole group together, eliminates restaurant logistics for 15–25 people, and gives the night a built-in performance anchor that goes well beyond a restaurant reservation. Book 3–4 weeks ahead for peak mountain season.`,
    },
    {
      q: `How far does the chef travel to mountain properties near ${city}?`,
      a: `We serve ${city} and surrounding mountain communities. For properties within 30 miles of ${city}, standard rates apply. For more remote mountain rentals, a travel fee may apply and is always disclosed upfront in your quote. Just provide your cabin address when requesting a quote.`,
    },
    {
      q: `What's the best time of year for hibachi at a ${city} area cabin?`,
      a: `Late spring (April–May), fall foliage season (September–November), and summer evenings are our busiest windows in the ${city} area. Mountain evenings cool down beautifully after sunset — ideal hibachi conditions. Winter can also work in covered outdoor spaces or large garages. Book ahead during peak mountain tourism weeks.`,
    },
    {
      q: `Can you serve a large group at a mountain rental near ${city}?`,
      a: `Yes — one chef comfortably serves 10–20 guests. For larger mountain cabin groups of 25–45, we recommend two chef stations. Tell us your head count when requesting a quote and we'll size the setup appropriately. Large family reunions and wedding-weekend groups are a specialty.`,
    },
    {
      q: `What do we need to provide at our ${city} area cabin?`,
      a: `Tables and chairs for your guests — that's it. Your chef handles everything else: propane grill, all proteins, rice, vegetables, sauces, plates, and chopsticks. Arrival is 5–10 minutes before your scheduled start time. Full setup and complete cleanup included.`,
    },
  ],
  // 3 — Coastal / Beach House
  (city) => [
    {
      q: `Can you set up hibachi at a beach house or vacation rental near ${city}?`,
      a: `Yes — beach houses and coastal vacation rentals are one of our most popular setups in NC. We come to your rental with the full teppan grill, all ingredients, and complete setup. Confirm your property allows outdoor open-flame cooking before booking. Most coastal NC vacation homes permit it with advance notice.`,
    },
    {
      q: `Is hibachi good for a large family reunion at an OBX or coastal NC rental?`,
      a: `It's one of the best reunion dining options available. Everyone eats together, hot food, chef-cooked to order at the grill. No managing restaurant reservations for 20 people, no coordinating transportation, no splitting checks. One chef handles 10–20 guests; two stations for families of 25–50.`,
    },
    {
      q: `How far in advance should I book a coastal NC hibachi event?`,
      a: `For peak season (June–August) and holiday weekends at the coast, book 3–5 weeks ahead. Spring season (April–May) fills 2–3 weeks out. Fall and shoulder season dates are more flexible — often bookable 1–2 weeks ahead. Don't wait on a summer Saturday at the beach.`,
    },
    {
      q: `Do you serve vacation communities and towns near ${city}?`,
      a: `Yes — we serve the full coastal NC area around ${city}, including nearby vacation communities, resort towns, and beach neighborhoods. Most coastal addresses are within our standard service zone. Provide your property address when requesting a quote and we'll confirm coverage.`,
    },
    {
      q: `What does the chef need at a beach house rental near ${city}?`,
      a: `A flat outdoor surface (deck, patio, or driveway area) of at least 10×10 ft, vehicle access to the setup area, and tables/chairs for your guests. The chef brings everything else — grill, propane, all proteins, sauces, plates, and chopsticks. Setup and cleanup are fully included.`,
    },
    {
      q: `Can hibachi be done on an oceanfront deck in the ${city} area?`,
      a: `Yes — oceanfront and canal-front decks are some of our most scenic setups. We need a stable surface away from the immediate pool or deck edge, adequate overhead clearance, and access for the chef to unload equipment. Most beach house decks work perfectly. Describe your space when requesting a quote.`,
    },
  ],
  // 4 — Lake / Residential
  (city) => [
    {
      q: `Do you serve ${city} and surrounding lake communities?`,
      a: `Yes — ${city} and nearby lake and residential communities are served at standard rates. Most addresses within 30 miles of ${city} are in our standard service zone with no travel fee. Lake Norman area, Davidson, Cornelius, Mooresville, and surrounding communities are all covered.`,
    },
    {
      q: `Is a lake house dock or covered patio a good setup for hibachi near ${city}?`,
      a: `Lake house patios, covered decks, and dock areas make for some of the most spectacular hibachi settings in NC. We need a flat, stable surface of at least 10×10 ft and vehicle access to the setup area. Lake house setups are a specialty — the open-air lake backdrop is hard to beat.`,
    },
    {
      q: `What kinds of events do you do most often near ${city}?`,
      a: `Anniversary dinners, milestone birthday parties, neighborhood gatherings, and corporate team events are most common in ${city}. The lake community lifestyle in this area is built for entertaining — private hibachi fits naturally into that culture.`,
    },
    {
      q: `How much notice do I need for a ${city} area hibachi event?`,
      a: `Weekend evenings book 2–3 weeks out in peak season (April–October). Weekday events are more flexible — often available with 1–2 weeks notice. Contact us directly for same-week availability. Most quotes returned same day.`,
    },
    {
      q: `Can you do hibachi at a screened porch or covered outdoor space near ${city}?`,
      a: `Screened porches and covered patios work well as long as there's adequate ventilation and the structure can safely accommodate a propane grill. We'll review your specific space when you request a quote — most covered outdoor spaces in NC lake communities work perfectly.`,
    },
    {
      q: `How many guests can one hibachi chef serve near ${city}?`,
      a: `One chef comfortably serves 10–20 guests per session. For larger gatherings of 25–50, we recommend two chef stations. Tell us your head count and we'll size it right. Most ${city} area lake parties run 12–25 people — right in our wheelhouse.`,
    },
  ],
]

// ── Testimonials — 5 rotating sets of 3 NC-specific reviews ──────────────────
export const NC_TESTIMONIALS = [
  // 0 — Charlotte / Urban
  [
    {
      text:   '"We hired Hibachi Connect for a corporate team dinner in Charlotte — 28 people on the back patio of our office space. Chef was professional, show was incredible, every plate was perfect. Three different colleagues asked me for the contact info before the night was over."',
      name:   'Marcus T.',
      detail: 'Corporate Event · Charlotte, NC',
      stars:  5,
    },
    {
      text:   '"Bachelorette weekend in South Charlotte — the hibachi night was hands down the best part of the whole trip. Our chef had the group completely locked in for two hours. Every single woman in that party has recommended it to someone since."',
      name:   'Brianna K.',
      detail: 'Bachelorette Party · South Charlotte',
      stars:  5,
    },
    {
      text:   '"Milestone 50th birthday for my husband, backyard party in Myers Park. Everything was perfect. The chef arrived exactly on time, the food was outstanding, and the cleanup was total. We\'ve already booked again for our anniversary."',
      name:   'Diane W.',
      detail: 'Birthday Celebration · Myers Park, Charlotte',
      stars:  5,
    },
  ],
  // 1 — Research Triangle
  [
    {
      text:   '"Our team at the Research Triangle park has done three hibachi events with Hibachi Connect now. Backyard setup, 18–22 people each time. Food quality is consistently excellent and the chefs are genuinely entertaining. It\'s become our go-to team event."',
      name:   'Jason P.',
      detail: 'Tech Team Event · Research Triangle Park, NC',
      stars:  5,
    },
    {
      text:   '"My daughter\'s 10th birthday party in our Cary backyard — absolute perfection. The kids went absolutely wild for the fire tricks and flying shrimp. Parents loved it just as much. Best birthday she\'s ever had, no question."',
      name:   'Angela R.',
      detail: 'Kids Birthday · Cary, NC',
      stars:  5,
    },
    {
      text:   '"Graduation dinner for 14 people at our Raleigh home. The chef was outstanding — personable, professional, and clearly skilled. Every single plate was cooked exactly as ordered. Zero cleanup when he left. We\'ll be booking again."',
      name:   'Thomas B.',
      detail: 'Graduation Dinner · Raleigh, NC',
      stars:  5,
    },
  ],
  // 2 — Mountain / Cabin
  [
    {
      text:   '"Girls\' bachelorette weekend at a cabin outside Asheville. The hibachi night was the unanimous favorite of the whole trip. Chef drove up to our mountain rental, set up on the deck, and completely owned the room for two hours. Absolutely unforgettable."',
      name:   'Melissa C.',
      detail: 'Bachelorette Weekend · Asheville Mountain Cabin',
      stars:  5,
    },
    {
      text:   '"Wedding party dinner at our Boone cabin rental — 22 people the night before the rehearsal. The chef was phenomenal. Fire show on the mountain deck, every plate cooked to order, total cleanup. The wedding party is still talking about it."',
      name:   'Ryan & Courtney S.',
      detail: 'Wedding Party Dinner · Boone, NC',
      stars:  5,
    },
    {
      text:   '"Anniversary trip to the Blue Ridge mountains. We surprised our parents with a private hibachi dinner at the cabin — the chef drove all the way up and delivered the most memorable evening of the whole getaway. Worth every penny."',
      name:   'Laura F.',
      detail: 'Anniversary Dinner · Blue Ridge Cabin',
      stars:  5,
    },
  ],
  // 3 — Coastal / Beach House
  [
    {
      text:   '"Family reunion at our OBX beach house — 38 people, two chef stations, the whole show. Both chefs were phenomenal. Different ages, from 5 to 80, and everyone was completely engaged the entire time. This is our new reunion tradition."',
      name:   'The Henderson Family',
      detail: 'Family Reunion · Outer Banks, NC',
      stars:  5,
    },
    {
      text:   '"Bachelorette weekend at Wrightsville Beach — booked hibachi for the Saturday night dinner. 16 women on the back deck, chef performed all evening. The fire tricks alone were worth it. Every single person asked for the booking info before we left."',
      name:   'Kaitlyn M.',
      detail: 'Bachelorette Weekend · Wrightsville Beach, NC',
      stars:  5,
    },
    {
      text:   '"Summer birthday at our Nags Head rental. The beach house deck setup was absolutely stunning. Chef arrived exactly on time, the food was incredible, and the show had our whole group on their feet at certain points. Best event we\'ve ever hosted."',
      name:   'Derek and Sandra P.',
      detail: 'Birthday Party · Nags Head, NC',
      stars:  5,
    },
  ],
  // 4 — Lake / Residential
  [
    {
      text:   '"Lake Norman anniversary dinner — just the two of us plus eight close friends on our covered dock patio. The chef was exceptional: refined, precise, and entertaining without being over-the-top. Food quality was restaurant-level. We\'ve already rebooked for next year."',
      name:   'David and Christine H.',
      detail: 'Anniversary Dinner · Lake Norman, NC',
      stars:  5,
    },
    {
      text:   '"Neighborhood summer party at our Lake Norman home — 24 people on the back patio. The chef ran a two-hour show that had everyone completely engaged. Three neighbors booked their own events before the night was over. Absolutely delivers."',
      name:   'Greg T.',
      detail: 'Neighborhood Gathering · Lake Norman',
      stars:  5,
    },
    {
      text:   '"60th birthday party at our Mooresville lake house. The chef was professional, personable, and clearly talented. My husband said it was the best party he\'d ever attended at his own home. High praise. The cleanup alone would have been worth the cost."',
      name:   'Pamela R.',
      detail: 'Milestone Birthday · Mooresville, NC',
      stars:  5,
    },
  ],
]

// ── Image themes — 5 NC-specific visual directions ────────────────────────────
export const NC_IMAGE_THEMES = [
  {
    heroImage: '/pics/hero-2.jpg',
    palette:   'evening corporate, warm upscale, city glow',
    style:     'Charlotte upscale residential or corporate outdoor event, polished crowd',
    altHint:   'Corporate hibachi event at Charlotte, NC upscale outdoor venue',
  },
  {
    heroImage: '/pics/hero-3.jpg',
    palette:   'bright suburban, warm family energy, backyard vibes',
    style:     'Research Triangle backyard party, suburban home, family or tech-professional crowd',
    altHint:   'Private hibachi chef at Research Triangle NC backyard party',
  },
  {
    heroImage: '/pics/hero-5.jpg',
    palette:   'warm mountain afternoon, rustic elevated, cabin deck setting',
    style:     'Blue Ridge cabin deck or Asheville vacation rental, mountain backdrop',
    altHint:   'Mountain cabin hibachi dinner near Asheville, North Carolina',
  },
  {
    heroImage: '/pics/hero-4.jpg',
    palette:   'coastal golden hour, ocean light, open-air beach setting',
    style:     'OBX or Wilmington beach house deck, coastal NC vacation group',
    altHint:   'Beach house hibachi party at coastal North Carolina vacation rental',
  },
  {
    heroImage: '/pics/hero-1.jpg',
    palette:   'warm afternoon residential, lake community, North Carolina outdoors',
    style:     'Lake Norman or NC lake community backyard, residential entertaining',
    altHint:   'Lake house hibachi dinner party in Lake Norman, North Carolina',
  },
]

// ── NC closing variants — 5 generic, indices 33–37 ───────────────────────────
export const NC_CLOSING_VARIANTS = [
  // 33 — Charlotte / Corporate
  {
    headline:     (city) => `Ready to Book Private Hibachi in ${city}?`,
    sub:          (city) => `Corporate events, birthday parties, bachelorette weekends — get a same-day quote for your ${city} hibachi experience.`,
    urgency:      `Charlotte weekend dates fill 3–4 weeks out. Secure yours now.`,
    btnPrimary:   'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },
  // 34 — Triangle / Suburban
  {
    headline:     (city) => `Book Your ${city} Backyard Hibachi Event`,
    sub:          (city) => `Tell us your date, guest count, and address — we'll confirm coverage and send a quote same day.`,
    urgency:      `Triangle-area weekend slots fill 2–3 weeks out. Reserve yours before it's gone.`,
    btnPrimary:   'Request a Quote',
    btnSecondary: 'See How It Works',
  },
  // 35 — Mountain / Cabin
  {
    headline:     (city) => `Your ${city} Mountain Weekend Needs This Night`,
    sub:          (city) => `Cabin deck hibachi — full chef performance, fire show, every plate cooked to order. Book before your mountain date fills.`,
    urgency:      `Peak mountain season dates book 3–5 weeks out. Don't wait.`,
    btnPrimary:   'Book a Mountain Event',
    btnSecondary: 'See Pricing',
  },
  // 36 — Coastal / Beach
  {
    headline:     (city) => `Make Your ${city} Beach Trip Unforgettable`,
    sub:          (city) => `Private hibachi at your beach house rental — the dinner the whole group will talk about all the way home.`,
    urgency:      `Peak coastal NC season books fast. Reserve your date now.`,
    btnPrimary:   'Get a Quote',
    btnSecondary: 'Learn More',
  },
  // 37 — Lake / Residential
  {
    headline:     (city) => `Your ${city} Lake House Deserves This Evening`,
    sub:          (city) => `Lake deck, covered patio, or backyard — a private hibachi chef makes it the dinner your guests remember all season.`,
    urgency:      `Weekend lake dates fill 2–3 weeks out. Check availability today.`,
    btnPrimary:   'Check Availability',
    btnSecondary: 'See Pricing',
  },
]

// ── NC city-specific closings — 10 top cities, indices 38–47 ─────────────────
export const NC_CITY_CLOSINGS = [
  // 38 — Charlotte
  {
    headline:     (city) => `Book Your Charlotte Hibachi Event`,
    sub:          (city) => `Queen City backyard, corporate patio, or South Charlotte deck — get a same-day quote for your Charlotte hibachi experience.`,
    urgency:      `Charlotte bachelorette and weekend dates fill 3–4 weeks out. Act now.`,
    btnPrimary:   'Get My Free Quote',
    btnSecondary: 'View Pricing',
  },
  // 39 — Raleigh
  {
    headline:     (city) => `Bring Hibachi to Your Raleigh Backyard`,
    sub:          (city) => `Raleigh deck, backyard patio, or Triangle corporate venue — confirm your date and we'll get a quote back same day.`,
    urgency:      `Raleigh summer and graduation weekends fill fast. Reserve 2–3 weeks ahead.`,
    btnPrimary:   'Request a Quote',
    btnSecondary: 'See How It Works',
  },
  // 40 — Durham
  {
    headline:     (city) => `Private Hibachi in the Bull City`,
    sub:          (city) => `Durham backyard, Duke area patio, or Research Triangle venue — get a same-day quote for your Durham event.`,
    urgency:      `Durham weekend slots fill 2–3 weeks out during spring and summer. Book early.`,
    btnPrimary:   'Get a Free Quote',
    btnSecondary: 'See Pricing',
  },
  // 41 — Asheville
  {
    headline:     (city) => `Your Asheville Mountain Weekend Deserves This`,
    sub:          (city) => `Cabin deck, Biltmore area patio, or Arts District backyard — get a same-day quote for your Asheville event.`,
    urgency:      `Asheville bachelorette and mountain weekends fill 4–6 weeks out. Don't lose your date.`,
    btnPrimary:   'Book My Asheville Event',
    btnSecondary: 'See Pricing',
  },
  // 42 — Outer Banks
  {
    headline:     (city) => `Book Hibachi at Your OBX Beach House`,
    sub:          (city) => `Family reunion, bachelorette weekend, or vacation group dinner — OBX beach house hibachi is the night everyone remembers.`,
    urgency:      `OBX peak season dates book 5–6 weeks ahead. Secure your summer weekend now.`,
    btnPrimary:   'Book My Beach House Event',
    btnSecondary: 'Check Availability',
  },
  // 43 — Wilmington
  {
    headline:     (city) => `Hibachi at Your Wilmington Home or Beach Rental`,
    sub:          (city) => `Cape Fear Coast backyard, Wrightsville-area rental, or Wilmington patio — get a same-day quote.`,
    urgency:      `Wilmington summer dates fill 3–4 weeks out. Reserve before your weekend is gone.`,
    btnPrimary:   'Get a Free Quote',
    btnSecondary: 'Learn More',
  },
  // 44 — Greensboro
  {
    headline:     (city) => `Book Your Greensboro Hibachi Party`,
    sub:          (city) => `Piedmont Triad backyard, Greensboro patio, or corporate outdoor venue — get a same-day quote.`,
    urgency:      `Greensboro weekend slots fill 2–3 weeks out. Reserve yours today.`,
    btnPrimary:   'Request a Quote',
    btnSecondary: 'See How It Works',
  },
  // 45 — Cary
  {
    headline:     (city) => `Bring Hibachi to Your Cary Backyard`,
    sub:          (city) => `Cary deck, Western Wake patio, or Triangle suburb venue — confirm your date and get a quote same day.`,
    urgency:      `Cary weekend and graduation season dates book fast. Plan 2–3 weeks ahead.`,
    btnPrimary:   'Get My Free Quote',
    btnSecondary: 'See Pricing',
  },
  // 46 — Winston-Salem
  {
    headline:     (city) => `Book Your Winston-Salem Hibachi Experience`,
    sub:          (city) => `Forsyth County patio, Wake Forest area home, or Reynolda neighborhood backyard — get a same-day quote.`,
    urgency:      `Winston-Salem weekend slots fill 2–3 weeks out. Check availability now.`,
    btnPrimary:   'Request a Quote',
    btnSecondary: 'View Pricing',
  },
  // 47 — Lake Norman
  {
    headline:     (city) => `Book Hibachi at Your Lake Norman Property`,
    sub:          (city) => `Lake house deck, covered patio, or lakeside backyard — private hibachi at Lake Norman is the evening your guests won't forget.`,
    urgency:      `Lake Norman summer and fall entertaining season books fast. Reserve your date now.`,
    btnPrimary:   'Book My Lake Event',
    btnSecondary: 'See Pricing',
  },
]

// ── NC intro variants — 5 generic, indices 33–37 ─────────────────────────────
// These are appended to INTRO_VARIANTS at indices 33–37 in cityData.js
export const NC_INTRO_VARIANTS = [

  // ── 33: Charlotte / Urban / Corporate ─────────────────────────────────────
  {
    angle:    'nc-charlotte-corporate',
    headline: (city) => `Private Hibachi in ${city}: The Event Your Group Hasn't Done Yet`,
    opening:  (city, state) =>
      `${city} has no shortage of restaurant options — and that's exactly why private hibachi stands out. When you bring a certified teppanyaki chef to your backyard, corporate patio, or event space, the experience is fundamentally different from any restaurant night out: the food is cooked two feet in front of your guests, the performance runs the whole table, and everyone leaves talking about the same moment. No other dinner format does that.`,
    middle:   (city, state) =>
      `The setup is simple. Your chef arrives 5–10 minutes before your scheduled start time with a full propane teppan grill, all proteins, rice, vegetables, sauces, plates, and chopsticks. You supply the tables and chairs — we handle everything else. The show runs from first flame to final plate, with fire tricks, flying shrimp, and the kind of precision knife work that keeps phones out throughout. One chef serves 10–20 guests; two stations for larger ${city} events.`,
    closing:  (city, state) =>
      `Corporate team dinners, bachelorette weekends, milestone birthdays, and client appreciation events are our most-booked occasions in ${city}. Starting at $60 per adult and $30 per child, $600 event minimum. Most ${city} quotes are returned same day. Weekend dates fill 3–4 weeks out — reserve yours early.`,
  },

  // ── 34: Research Triangle / Suburban ──────────────────────────────────────
  {
    angle:    'nc-triangle-suburban',
    headline: (city) => `The Best Backyard Event in ${city} Starts With a Hibachi Chef`,
    opening:  (city, state) =>
      `You've hosted the backyard cookout. The restaurant group dinner. The catered event with the forgettable buffet. None of those produce what a private hibachi chef produces: a crowd that doesn't check their phones for two hours, kids who are genuinely transfixed, adults who look up from their conversations and watch every single dish get cooked. It's not just dinner — it's dinner with a show built in, at your own home, on your own schedule.`,
    middle:   (city, state) =>
      `Hibachi Connect sends a certified teppanyaki chef directly to your ${city} backyard, deck, or driveway. They arrive fully equipped — propane grill, all proteins, fried rice, vegetables, sauces, plates, and chopsticks — 5–10 minutes before your start time. Two proteins per guest at the standard rate: chicken, steak, shrimp, salmon, or tofu. Every plate cooked to order at the grill while the chef performs. Complete cleanup when the last plate is done. Your backyard is exactly as you left it.`,
    closing:  (city, state) =>
      `The ${city} area's backyard event culture is one of the strongest in the state — private hibachi fits it perfectly. $60 per adult, $30 per child (ages 4–12), $600 event minimum. Most ${city} quotes are returned the same day. Graduation season and summer weekends book fast — contact us early for your date.`,
  },

  // ── 35: Mountain / Cabin / Asheville area ─────────────────────────────────
  {
    angle:    'nc-mountain-cabin',
    headline: (city) => `Your ${city} Mountain Cabin Weekend Just Found Its Best Night`,
    opening:  (city, state) =>
      `You've reserved the cabin, gathered your people, and picked the most scenic corner of North Carolina for the weekend. The hiking is planned, the bonfire wood is stacked, and then comes the inevitable question: where does the whole group go for dinner? The best answer, consistently, is nowhere. A certified hibachi chef from Hibachi Connect comes to your rental, sets up on the deck, and turns your mountain property into the best dining experience of the entire trip.`,
    middle:   (city, state) =>
      `It works on any flat outdoor surface — cabin deck, covered patio, fire pit area, or any open outdoor space with vehicle access. Your chef arrives 5–10 minutes before your scheduled start time with the full teppan grill, all proteins, rice, sauces, plates, and chopsticks. The mountain evening air, the fire show, every plate cooked fresh — it's consistently the moment the group says the cabin weekend was worth it. One chef for 10–20; two stations for 25–45.`,
    closing:  (city, state) =>
      `Always confirm your rental property allows outdoor open-flame cooking before booking. Most ${city}-area cabin and vacation properties do, especially those with dedicated outdoor decks or fire areas. Starting at $60 per adult, $30 per child, $600 event minimum. Peak mountain season dates — fall foliage, spring, and summer — book 3–5 weeks out.`,
  },

  // ── 36: Coastal / Beach House / OBX area ──────────────────────────────────
  {
    angle:    'nc-coastal-beach',
    headline: (city) => `The Beach House Dinner Nobody in ${city} Forgets`,
    opening:  (city, state) =>
      `You've booked the house, packed your people, and landed at the coast. Dinner reservations for 20 at a packed beach-town restaurant, navigating three car shuttles, waiting for a table that's never quite big enough — or a private hibachi chef who comes to your deck, sets up with the ocean in the background, and runs a full performance while your group stays at the rental with cold drinks and no logistics. Most groups, once they find this option, never go back to the restaurant.`,
    middle:   (city, state) =>
      `Hibachi Connect sends a certified teppanyaki chef to your ${city}-area beach house, vacation rental, or coastal property fully equipped. Pool decks, covered patios, oceanfront terraces — we set up wherever the view is best. Chef arrives 5–10 minutes before your start time with the full propane grill, all proteins, rice, vegetables, sauces, plates, and chopsticks. The show runs from first flame to last plate. Complete cleanup when dinner is done. You stay on the deck.`,
    closing:  (city, state) =>
      `Confirm your rental property allows outdoor open-flame cooking before booking — most coastal NC vacation homes permit it. Starting at $60 per adult, $30 per child, $600 event minimum. Peak coastal NC season (June–August) fills fast — reserve your date 3–5 weeks ahead for summer beach weekends.`,
  },

  // ── 37: Lake / Resort / Residential ───────────────────────────────────────
  {
    angle:    'nc-lake-residential',
    headline: (city) => `Lake House Hibachi in ${city}: The Dinner Your Guests Will Still Talk About`,
    opening:  (city, state) =>
      `There's something about a lake house setting that already sets the stage for a memorable evening — the water, the deck, the open air. A private hibachi chef from Hibachi Connect takes that stage and fills it completely. Your guests gather around the teppan grill on the patio, the flames go up, and the performance begins. Two hours later, the food is done, the chef is packed up, and the conversation is entirely about what they just watched and ate.`,
    middle:   (city, state) =>
      `The setup works on any flat outdoor surface — lake house deck, covered patio, screened porch with good airflow, or backyard entertaining area. Your chef arrives 5–10 minutes before your scheduled start time, fully equipped: propane grill, all proteins, fried rice, grilled vegetables, sauces, plates, and chopsticks. Every plate cooked to order at the grill. Full cleanup when the last guest is served. Your property is left exactly as you found it.`,
    closing:  (city, state) =>
      `${city} lake and residential communities are some of our most active markets in North Carolina. Anniversary dinners, milestone birthdays, neighborhood gatherings, and corporate team events are our most common bookings in this area. Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum. Most quotes returned same day.`,
  },
]

// ── NC city-specific intros — 10 top cities, indices 38–47 ───────────────────
export const NC_CITY_INTROS = [

  // ── 38: Charlotte ─────────────────────────────────────────────────────────
  {
    angle:    'nc-charlotte-specific',
    headline: (city) => `Private Hibachi in Charlotte, NC — Where the Queen City Eats at Home`,
    opening:  (city, state) =>
      `Charlotte has one of the most vibrant food cultures in the Southeast, which makes it easy to overlook what's become one of its most requested private dining experiences: a certified teppanyaki chef at your South Charlotte deck, Uptown rooftop, Ballantyne patio, or NoDa backyard. When you've done the restaurant route enough times for a group of 20, the private hibachi chef option isn't just more convenient — it's genuinely more memorable. The food is better, the entertainment is built in, and nobody waits for a table.`,
    middle:   (city, state) =>
      `Charlotte's corporate culture, tech sector growth, and active social scene have made private hibachi a go-to for client entertaining, team dinners, bachelorette weekends, and high-end residential celebrations. Hibachi Connect sends certified teppanyaki chefs throughout the Charlotte metro — Myers Park, Dilworth, SouthPark, Ballantyne, Waxhaw, Concord, Mooresville, Lake Norman — fully equipped and ready to perform. One chef for 10–20 guests; two stations for corporate events of 25–80.`,
    closing:  (city, state) =>
      `Charlotte is one of our most active North Carolina markets. Weekend dates and bachelorette season (April–October) fill 3–4 weeks out. Corporate and corporate-adjacent bookings can often be arranged with 1–2 weeks notice on weekdays. Starting at $60 per adult, $600 event minimum. Same-day quotes for most Charlotte events.`,
  },

  // ── 39: Raleigh ───────────────────────────────────────────────────────────
  {
    angle:    'nc-raleigh-specific',
    headline: (city) => `Private Hibachi in Raleigh — Backyard Chef Experiences for the Triangle`,
    opening:  (city, state) =>
      `Raleigh's combination of tech-industry professionals, young families, and a strong outdoor entertaining culture makes it one of the best cities in the state for private hibachi. The Research Triangle corridor is full of homes with exactly the right backyard setups — decks, patios, driveways — and a population that's seen plenty of standard dinner parties. A private hibachi chef delivers something most Triangle households haven't hosted before: a live teppanyaki performance in their own outdoor space.`,
    middle:   (city, state) =>
      `Hibachi Connect sends certified chefs throughout Raleigh and the Research Triangle — Five Points, North Hills, Brier Creek, North Raleigh, and surrounding communities including Cary, Apex, Holly Springs, Morrisville, Garner, and Clayton. Your chef arrives fully equipped 5–10 minutes before your start time. All proteins, fried rice, vegetables, sauces, plates, and chopsticks travel with the chef. Two proteins per person at the standard rate; premium upgrades available. Complete cleanup always included.`,
    closing:  (city, state) =>
      `Graduation season (May–June) and summer weekends are our busiest Raleigh windows — book 3–4 weeks ahead for those dates. Fall and spring are more flexible, though weekends still fill 2–3 weeks out. Weekday corporate events often bookable within 1 week. Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum.`,
  },

  // ── 40: Durham ────────────────────────────────────────────────────────────
  {
    angle:    'nc-durham-specific',
    headline: (city) => `Private Hibachi in Durham, NC — The Bull City Gets a Teppanyaki Chef`,
    opening:  (city, state) =>
      `Durham's food culture is among the most sophisticated in the Southeast — the city that produced some of the best restaurants in North Carolina takes its dining seriously. Which is exactly why private hibachi lands so well here: it's not a gimmick, it's a genuinely skilled cooking format delivered by a certified teppanyaki chef who performs and produces at the same time. For a Duke event, a biotech corridor team dinner, a Bull City birthday, or a Ninth Street backyard party — it's the kind of evening that stands out.`,
    middle:   (city, state) =>
      `Hibachi Connect serves Durham and the surrounding Research Triangle communities including Chapel Hill, Carrboro, Hillsborough, and Morrisville. Duke University events, Research Triangle Park team dinners, and residential backyard celebrations are among our most common Durham bookings. Your chef arrives fully equipped — everything travels with them, from the propane grill to the chopsticks. Premium protein upgrades (filet mignon, lobster tail) are available for any Durham event.`,
    closing:  (city, state) =>
      `Durham's event season peaks in spring and fall — reserve 2–3 weeks ahead for weekend dates during those windows. Graduation and Duke event calendar weeks book faster. Weekday corporate events are more flexible. Starting at $60 per adult, $30 per child, $600 event minimum. Same-day quotes for most Durham events.`,
  },

  // ── 41: Asheville ─────────────────────────────────────────────────────────
  {
    angle:    'nc-asheville-specific',
    headline: (city) => `Private Hibachi in Asheville — Mountain Cabins, Bachelorette Weekends & the Blue Ridge`,
    opening:  (city, state) =>
      `Asheville has made a name as one of the best weekend destination cities in the country — and with that reputation comes a particular event challenge: you've gathered 16 people in a mountain cabin, everyone's had a great hiking day, and now the question is what to do for dinner. Navigate downtown traffic with a bachelorette group? Wait an hour at a restaurant that wasn't designed for 20 people? Or have a certified hibachi chef show up at your cabin deck, set up with the Blue Ridge as a backdrop, and run a full performance while everyone stays exactly where they are?`,
    middle:   (city, state) =>
      `Hibachi Connect serves Asheville and surrounding mountain communities including Weaverville, Black Mountain, Swannanoa, Arden, Biltmore Forest, Brevard, Hendersonville, and the broader western NC region. Cabin decks, vacation rental patios, and Biltmore-area outdoor spaces are all workable setups. Always confirm your rental allows outdoor open-flame cooking. Your chef arrives with the full setup — one chef for 10–20 guests; two stations for groups of 25–45.`,
    closing:  (city, state) =>
      `Asheville bachelorette season (April–October) is our busiest window — reserve 4–6 weeks ahead for fall foliage weekends and peak summer dates. Wedding party dinners and cabin weekend events book 3–4 weeks out. Weekday and off-peak events more flexible. Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum.`,
  },

  // ── 42: Outer Banks ───────────────────────────────────────────────────────
  {
    angle:    'nc-outer-banks-specific',
    headline: (city) => `Private Hibachi at Your OBX Beach House — The Outer Banks Dinner Nobody Forgets`,
    opening:  (city, state) =>
      `The Outer Banks runs on one model: fill the beach house, stay together, make the most of every night. Which is why private hibachi works so well here. You've got 25 people at a Nags Head rental, 32 at a Duck oceanfront, 40 at a Corolla house — and the logistics of getting that group anywhere for dinner are genuinely painful. A certified hibachi chef comes to your OBX property, sets up on the back deck, and turns the most complicated dinner night of the trip into the most memorable one.`,
    middle:   (city, state) =>
      `Hibachi Connect serves the full Outer Banks corridor — Corolla, Duck, Southern Shores, Kitty Hawk, Kill Devil Hills, Nags Head, Manteo, and Hatteras Island. Beach house decks and oceanfront patios are our bread and butter in this market. One chef for 10–20; two stations for the 25–50 person OBX groups that are the norm here. Always confirm your rental allows outdoor open-flame cooking. Most OBX vacation home decks are perfectly configured for it.`,
    closing:  (city, state) =>
      `OBX peak season runs June–August, with shoulder season in May and September also very active. Summer Saturday evenings fill 5–6 weeks out — don't wait if you have your weeks set. Confirm your property allows open flame before booking. Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum. Same-day quotes returned for most OBX events.`,
  },

  // ── 43: Wilmington ────────────────────────────────────────────────────────
  {
    angle:    'nc-wilmington-specific',
    headline: (city) => `Private Hibachi in Wilmington, NC — Cape Fear Coast Dining at Your Home`,
    opening:  (city, state) =>
      `Wilmington is coastal without being overcrowded, sophisticated without being stiff — a city with film industry money, UNCW energy, and a year-round outdoor entertaining culture that makes private hibachi a natural fit. Whether you're hosting a birthday in Landfall, a corporate dinner in Porters Neck, a bachelorette party in Wrightsville Beach, or a summer gathering at Carolina Beach — the private teppanyaki setup delivers a dining experience the Cape Fear Coast doesn't offer anywhere else.`,
    middle:   (city, state) =>
      `Hibachi Connect serves the full Wilmington metro: Wilmington proper, Wrightsville Beach, Carolina Beach, Leland, Hampstead, Castle Hayne, and surrounding Cape Fear communities. Backyard patios, waterfront decks, vacation rental porches, and covered outdoor spaces are all workable setups. Your chef arrives fully equipped — grill, all proteins, rice, sauces, plates, and chopsticks. Premium upgrades available. One chef for 10–20; two stations for larger coastal gatherings.`,
    closing:  (city, state) =>
      `Wilmington peak season runs April–September, with summer weekends at Wrightsville and Carolina Beach filling 3–5 weeks out. Fall and spring are more relaxed but still busy on weekends. Starting at $60 per adult, $30 per child, $600 event minimum. Same-day quotes for most Wilmington-area events.`,
  },

  // ── 44: Greensboro ────────────────────────────────────────────────────────
  {
    angle:    'nc-greensboro-specific',
    headline: (city) => `Private Hibachi in Greensboro — Piedmont Triad's Premier At-Home Chef Experience`,
    opening:  (city, state) =>
      `Greensboro sits at the center of the Piedmont Triad — close enough to Winston-Salem, High Point, and Burlington to draw from a wide event market, large enough to have a strong residential backyard culture, and home to universities and a corporate community that knows what a quality event looks like. Private hibachi in ${city} delivers something the Triad restaurant scene doesn't: a live teppanyaki performance at your own home, cooked to order, with complete cleanup and zero logistics on your end.`,
    middle:   (city, state) =>
      `Hibachi Connect serves Greensboro and the full Piedmont Triad corridor including High Point, Winston-Salem, Burlington, Kernersville, Asheboro, and surrounding communities. UNCG and NC A&T area events, backyard birthday parties, corporate team dinners, and neighborhood gatherings are our most common Greensboro bookings. Your chef arrives fully equipped. One station for 10–20 guests; two for larger Triad events.`,
    closing:  (city, state) =>
      `Greensboro weekend events book 2–3 weeks out in peak season. Graduation and spring events are our busiest windows. Starting at $60 per adult, $30 per child, $600 event minimum. Same-day quotes for most Greensboro events.`,
  },

  // ── 45: Cary ──────────────────────────────────────────────────────────────
  {
    angle:    'nc-cary-specific',
    headline: (city) => `Private Hibachi in Cary, NC — The Triangle's Most Requested Backyard Experience`,
    opening:  (city, state) =>
      `Cary is one of the fastest-growing and most affluent suburban communities in the country — and with that comes a backyard event culture that's always looking for something better than the standard cookout or restaurant run. Private hibachi at your Cary home delivers exactly that: a certified teppanyaki chef at your deck or patio, performing and cooking from first flame to last plate, for a group that leaves with a genuinely different kind of evening behind them.`,
    middle:   (city, state) =>
      `Hibachi Connect serves Cary and the surrounding Research Triangle communities — Morrisville, Apex, Holly Springs, Western Raleigh, Research Triangle Park, Fuquay-Varina, and beyond. Tech-professional team dinners, kids' birthdays, graduation celebrations, and anniversary dinners are our most common Cary events. Your chef arrives 5–10 minutes before your start time, fully equipped. Same-day quotes for most Cary bookings.`,
    closing:  (city, state) =>
      `Cary graduation season (May–June) and summer weekends book fast — reserve 3–4 weeks ahead. Year-round weekend availability; weekday events more flexible. Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum.`,
  },

  // ── 46: Winston-Salem ─────────────────────────────────────────────────────
  {
    angle:    'nc-winston-salem-specific',
    headline: (city) => `Private Hibachi in Winston-Salem — Forsyth County's At-Home Teppanyaki Experience`,
    opening:  (city, state) =>
      `Winston-Salem brings together a Wake Forest University community, a strong arts and craft-brewing culture, and a residential base that knows how to host. The Camel City's neighborhoods — Reynolda, Ardmore, Buena Vista, Clemmons, Lewisville — have exactly the kind of outdoor entertaining spaces where private hibachi delivers at its best: backyard decks, covered patios, large driveways, and neighborhood gathering areas where a teppanyaki chef can set up and run a full performance for the whole crowd.`,
    middle:   (city, state) =>
      `Hibachi Connect serves Winston-Salem and the Piedmont Triad — Kernersville, Clemmons, Lewisville, High Point, and Greensboro. Wake Forest University events, Novant Health area corporate dinners, and residential celebrations are common Winston-Salem bookings. Your chef arrives fully equipped. One chef for 10–20 guests; two stations for Triad corporate events of 25–60.`,
    closing:  (city, state) =>
      `Winston-Salem weekend events book 2–3 weeks out in peak season. Wake Forest University calendar events and graduation weekends fill faster. Starting at $60 per adult, $30 per child, $600 event minimum. Same-day quotes for most Winston-Salem events.`,
  },

  // ── 47: Lake Norman ───────────────────────────────────────────────────────
  {
    angle:    'nc-lake-norman-specific',
    headline: (city) => `Private Hibachi at Lake Norman — The Lake House Evening Your Guests Remember All Season`,
    opening:  (city, state) =>
      `Lake Norman has built one of the most active residential entertaining cultures in North Carolina — lake house decks, covered docks, waterfront patios, and neighborhood gatherings that run from spring through fall. Private hibachi fits this culture perfectly. A certified teppanyaki chef sets up on your deck, the lake is the backdrop, the fire goes up, and two hours later every guest is still at the table recapping what they just experienced. It's the upgrade that turns a good lake house party into the one everyone talks about the rest of the summer.`,
    middle:   (city, state) =>
      `Hibachi Connect serves the full Lake Norman area — Cornelius, Davidson, Mooresville, Huntersville, Denver, Sherrills Ford, and surrounding lake communities. Lake house decks, covered patios, screened porches, and waterfront entertaining areas are all workable setups. Your chef arrives fully equipped 5–10 minutes before your start time. Premium proteins available for elevated lake house occasions. One chef for 10–20; two stations for larger lakeside events.`,
    closing:  (city, state) =>
      `Lake Norman entertaining season peaks April–October. Summer weekend dates fill 3–4 weeks out; fall season 2–3 weeks. Corporate events and weekday bookings are more flexible. Starting at $60 per adult, $30 per child (ages 4–12), $600 event minimum. Same-day quotes for most Lake Norman events.`,
  },
]

// ── NC How It Works — 5 variants ─────────────────────────────────────────────
export const NC_HOW_IT_WORKS = [

  // ── 0: Charlotte / Corporate tone ────────────────────────────────────────
  {
    headline:   (city) => `How Private Hibachi Works in ${city} — From Request to Last Plate`,
    footerNote: (city) => `Whether it's a Charlotte corporate event, a bachelorette weekend in South Charlotte, or a Myers Park anniversary dinner — the process is seamless on your end and exceptional for every guest.`,
    steps: [
      {
        num:   '01',
        title: 'Request Your Quote',
        desc:  'Tell us your date, ${city} address, and guest count. We confirm coverage and send full pricing — most Charlotte-area requests are answered same day. Corporate and large-group bookings welcome.',
      },
      {
        num:   '02',
        title: 'Chef Assigned & Confirmed',
        desc:  'A certified teppanyaki chef is locked in for your event. You\'ll receive confirmation details and a pre-event note so your patio or outdoor space is ready for setup.',
      },
      {
        num:   '03',
        title: 'Full Arrival — Zero Prep Required',
        desc:  'Your chef arrives 5–10 minutes before your scheduled start with the full teppan station — propane grill, all proteins, fried rice, vegetables, sauces, plates, and chopsticks. You greet your guests.',
      },
      {
        num:   '04',
        title: 'The Performance. The Food. The Memory.',
        desc:  'Fire tricks, precision knife work, flying shrimp, the onion volcano — every plate cooked to order while the chef commands the table. Complete cleanup the moment dinner ends.',
      },
    ],
  },

  // ── 1: Research Triangle / Suburban ──────────────────────────────────────
  {
    headline:   (city) => `From Backyard to Best Night of the Year — How It Works in ${city}`,
    footerNote: (city) => `One chef for 10–20 Triangle-area guests; two stations for larger ${city} gatherings. Tell us your head count and we\'ll size it right.`,
    steps: [
      {
        num:   '01',
        title: 'Pick Your Date & Tell Us the Address',
        desc:  'Give us your ${city} address, event date, and guest count. We confirm we cover your neighborhood and return a full quote — usually same day. Backyard, deck, or driveway all work.',
      },
      {
        num:   '02',
        title: 'Chef Locked In',
        desc:  'We match you with a certified teppanyaki chef in your area. You\'ll get a confirmation with a short prep note. Your only job from here is gathering your people.',
      },
      {
        num:   '03',
        title: 'Everything Comes to You',
        desc:  'Your chef arrives 5–10 minutes before your start time with the complete setup: propane grill, all proteins, rice, vegetables, sauces, plates, and chopsticks. Nothing to shop, prep, or clean.',
      },
      {
        num:   '04',
        title: 'Show, Food, Done.',
        desc:  'Two hours of live cooking and performance — fire tricks, flying shrimp, the full show. Every plate cooked fresh. Complete cleanup before the chef leaves. Your backyard is spotless.',
      },
    ],
  },

  // ── 2: Mountain / Cabin tone ──────────────────────────────────────────────
  {
    headline:   (city) => `Hibachi at Your ${city} Mountain Cabin — Here's How It Works`,
    footerNote: (city) => `Planning a ${city}-area cabin hibachi event? Confirm your rental allows outdoor open-flame cooking before booking. Most western NC properties do. We handle the rest.`,
    steps: [
      {
        num:   '01',
        title: 'Send the Cabin Address',
        desc:  'Share your property address, event date, and how many guests are joining. We confirm mountain coverage and return pricing — most western NC cabin requests answered same day.',
      },
      {
        num:   '02',
        title: 'Chef Confirmed',
        desc:  'A certified hibachi chef serving the ${city} area gets confirmed for your event. You\'ll receive details plus a quick note to prep the deck or outdoor area. Confirm your rental allows open-flame cooking.',
      },
      {
        num:   '03',
        title: 'Fully Equipped Arrival',
        desc:  'Your chef arrives 5–10 minutes before your start time with the full teppan grill, all proteins, rice, sauces, plates, and chopsticks. Mountain setting, full setup, zero logistics for you.',
      },
      {
        num:   '04',
        title: 'The Best Night of the Trip.',
        desc:  'Fire show on the mountain deck, every plate cooked to order, chef performance from first flame to last plate. Complete cleanup when dinner is done. Your cabin is left exactly as it was.',
      },
    ],
  },

  // ── 3: Coastal / Beach tone ───────────────────────────────────────────────
  {
    headline:   (city) => `Hibachi at Your ${city} Beach House — Four Steps to the Best Night on the Coast`,
    footerNote: (city) => `Whether you\'re in an OBX oceanfront or a Wilmington-area rental — the process is the same. Simple on your end. Unforgettable for everyone at the beach house.`,
    steps: [
      {
        num:   '01',
        title: 'Send Your Rental Address',
        desc:  'Tell us your coastal property address, event date, and group size. We confirm coverage and return pricing fast — usually same day. Always confirm your rental allows outdoor open-flame cooking.',
      },
      {
        num:   '02',
        title: 'Chef Assigned',
        desc:  'A certified hibachi chef serving your area gets confirmed. You\'ll receive confirmation with everything you need to prep the deck or outdoor space.',
      },
      {
        num:   '03',
        title: 'We Arrive Fully Loaded',
        desc:  'Your chef arrives 5–10 minutes before your start time with the full propane grill, all proteins, rice, vegetables, sauces, plates, and chopsticks. You supply the chairs — we bring everything else.',
      },
      {
        num:   '04',
        title: 'Fire, Food, and the Whole Show.',
        desc:  'Fire tricks, flying shrimp, the onion volcano — the chef performs and cooks every plate to order while the whole beach house watches. Complete cleanup when the last plate is done.',
      },
    ],
  },

  // ── 4: Lake / Residential tone ────────────────────────────────────────────
  {
    headline:   (city) => `Private Hibachi at Your ${city} Home — How to Book It`,
    footerNote: (city) => `Lake house deck, covered patio, or residential backyard — the same seamless process runs every ${city} area event. Exceptional execution is the standard, not the upgrade.`,
    steps: [
      {
        num:   '01',
        title: 'Tell Us Your Address & Date',
        desc:  'Submit your ${city}-area address, event date, and guest count. We confirm coverage and return a full quote — most lake area requests answered same day.',
      },
      {
        num:   '02',
        title: 'Chef Confirmed',
        desc:  'A certified teppanyaki chef is assigned to your event. You\'ll receive confirmation with a pre-event checklist to have your deck or outdoor space event-ready.',
      },
      {
        num:   '03',
        title: 'Complete Setup — Nothing Required from You',
        desc:  'Chef arrives 5–10 minutes before your start time with the full station: propane grill, all proteins, sauces, plates, and serving ware. Setup is entirely handled.',
      },
      {
        num:   '04',
        title: 'The Full Evening.',
        desc:  'Live cooking performance, every plate made to order, chef present throughout. Full teardown and cleanup the moment dinner is complete. Your property is left exactly as you found it.',
      },
    ],
  },
]

// ── NC Section Variants — 5 rotating sets ────────────────────────────────────
export const NC_SECTION_VARIANTS = [

  // ── [0] Charlotte / Corporate ─────────────────────────────────────────────
  {
    heroPill: 'Private Hibachi Chef',
    experiencePill: 'At Your Charlotte Event',
    experienceImage: '/pics/hibachi-chef-at-home.jpg',
    experienceImageAlt: (city) => `Corporate hibachi chef performing at ${city}, NC outdoor event`,
    experiencePoints: [
      {
        icon: '🏙️',
        title: 'Corporate & Residential Events',
        desc: 'Client dinners, team celebrations, bachelorette weekends, and birthday milestones — we handle the full spectrum of Charlotte-area private events.',
      },
      {
        icon: '🔥',
        title: 'Full Teppanyaki Performance',
        desc: 'Fire tricks, precision knife work, flying shrimp — the complete show runs while every plate gets cooked fresh. Phones come out. Conversations stop.',
      },
      {
        icon: '🥩',
        title: 'Premium Proteins Available',
        desc: 'Filet mignon, lobster tail, sea bass — available for any Charlotte event. Mix-and-match per guest or configure an all-premium menu for elevated occasions.',
      },
      {
        icon: '✅',
        title: 'Complete Setup & Cleanup',
        desc: 'Chef arrives, sets up, performs, cooks, and cleans up completely. Your patio or outdoor space is left exactly as it was.',
      },
    ],
    areasPill: 'NC Coverage',
    areasHeadline: (city) => `We Serve ${city} & All of Greater Charlotte`,
    areasIntro: [
      (city, stateName) => `Hibachi Connect serves ${city} and the full Charlotte metro — South Charlotte, Ballantyne, Huntersville, Mooresville, Matthews, Concord, Waxhaw, Davidson, and surrounding ${stateName} communities.`,
      (city) => `Send us your address and we'll confirm coverage same day. Most Charlotte-area locations are within our standard service zone with no travel fee.`,
    ],
    areasButton: 'Confirm My Address',
    occasionPill: 'Every Charlotte Occasion',
    occasionHeadline: (city) => `The Events That Bring ${city} Together — Hibachi Makes Them Better`,
    occasionSubtext: 'Corporate dinners, bachelorette weekends, birthday parties, and neighborhood gatherings — private hibachi turns any Charlotte occasion into a full evening.',
    faqPill: 'Charlotte Hibachi FAQs',
    faqHeadline: (city, stateAbbr) => `Private Hibachi in ${city}, ${stateAbbr} — Your Questions Answered`,
    testimonialSubheading: 'Corporate teams, bachelorette groups, and Charlotte families — here\'s what they\'re saying.',
  },

  // ── [1] Research Triangle / Suburban ──────────────────────────────────────
  {
    heroPill: 'Private Hibachi Chef',
    experiencePill: 'At Your Backyard',
    experienceImage: '/pics/hibachi-raleigh.jpg',
    experienceImageAlt: (city) => `Private hibachi chef at ${city}, NC backyard party`,
    experiencePoints: [
      {
        icon: '🏡',
        title: 'Backyard & Deck Ready',
        desc: 'Flat outdoor surface, deck, driveway, or covered patio — we set up at your Triangle-area home. No venue required.',
      },
      {
        icon: '🔥',
        title: 'Full Chef Performance',
        desc: 'Fire tricks, flying shrimp, the onion volcano — the complete show while every plate gets cooked fresh. Kids and adults equally transfixed.',
      },
      {
        icon: '👨‍👩‍👧‍👦',
        title: 'All Ages, Every Occasion',
        desc: 'Birthdays, graduation dinners, tech team events, neighborhood cookouts — one format that works for every gathering.',
      },
      {
        icon: '🧹',
        title: 'Zero Cleanup for You',
        desc: 'Chef sets up, cooks, performs, and cleans everything. Your backyard is spotless before the chef drives away.',
      },
    ],
    areasPill: 'Triangle Coverage',
    areasHeadline: (city) => `We Serve ${city} & the Full Research Triangle`,
    areasIntro: [
      (city, stateName) => `Hibachi Connect serves ${city} and the Research Triangle metro — Raleigh, Durham, Cary, Apex, Chapel Hill, Morrisville, Holly Springs, Wake Forest, Garner, and surrounding ${stateName} communities.`,
      (city) => `Send us your address and we\'ll confirm coverage same day. Most Triangle-area locations are within our standard service zone with no travel fee.`,
    ],
    areasButton: 'Check My Neighborhood',
    occasionPill: 'Perfect for Every Triangle Event',
    occasionHeadline: (city) => `What Brings ${city} Together — And Why Hibachi Fits`,
    occasionSubtext: 'Backyard birthdays, graduation dinners, kids parties, team celebrations — hibachi at your Triangle home turns any occasion into the best version of itself.',
    faqPill: 'Triangle Hibachi FAQs',
    faqHeadline: (city, stateAbbr) => `Hibachi at Home in ${city}, ${stateAbbr} — Common Questions`,
    testimonialSubheading: 'Research Triangle families, tech teams, and backyard party hosts — what they\'re saying.',
  },

  // ── [2] Mountain / Cabin / Asheville ──────────────────────────────────────
  {
    heroPill: 'Private Mountain Hibachi',
    experiencePill: 'At Your Cabin or Rental',
    experienceImage: '/pics/hibachi-colorado-home.jpg',
    experienceImageAlt: (city) => `Mountain cabin hibachi dinner near ${city}, NC`,
    experiencePoints: [
      {
        icon: '🏔️',
        title: 'Mountain Cabin & Rental Ready',
        desc: 'Deck, covered patio, or fire pit area — we set up at your cabin or vacation property. Confirm the rental allows outdoor open-flame cooking before booking.',
      },
      {
        icon: '🔥',
        title: 'Full Performance in the Mountains',
        desc: 'Fire show on your mountain deck, every plate cooked to order — the Blue Ridge backdrop makes it even better.',
      },
      {
        icon: '🎉',
        title: 'Bachelorette & Wedding Party Specialty',
        desc: 'Mountain bachelorette weekends and wedding party dinners are our most-booked in this region. Groups of 12–25 are our sweet spot.',
      },
      {
        icon: '🧹',
        title: 'Full Cleanup — Cabin Left Spotless',
        desc: 'Complete teardown and cleanup after the last plate. Your rental property is left exactly as it was.',
      },
    ],
    areasPill: 'Western NC Coverage',
    areasHeadline: (city) => `We Serve ${city} & the Blue Ridge Mountains`,
    areasIntro: [
      (city, stateName) => `Hibachi Connect serves ${city} and the western ${stateName} mountain region — Asheville, Weaverville, Black Mountain, Brevard, Hendersonville, Boone, Blowing Rock, and surrounding mountain communities.`,
      (city) => `For remote mountain cabin locations, provide your property address when requesting a quote. Travel fees apply for locations beyond standard coverage and are always disclosed upfront.`,
    ],
    areasButton: 'Check My Cabin Address',
    occasionPill: 'Mountain Weekend Events',
    occasionHeadline: (city) => `The Best ${city} Mountain Weekend Includes This Night`,
    occasionSubtext: 'Bachelorette trips, cabin family reunions, wedding weekends, anniversary retreats — hibachi at your mountain rental is the evening that defines the trip.',
    faqPill: 'Mountain Cabin Hibachi FAQs',
    faqHeadline: (city, stateAbbr) => `Hibachi at Your ${city}, ${stateAbbr} Cabin — Common Questions`,
    testimonialSubheading: 'Mountain cabin weekenders, bachelorette groups, and Blue Ridge visitors — what they\'re saying.',
  },

  // ── [3] Coastal / Beach House ─────────────────────────────────────────────
  {
    heroPill: 'Beach House Hibachi Chef',
    experiencePill: 'At Your Coastal Rental',
    experienceImage: '/pics/hibachi-wilmington.jpg',
    experienceImageAlt: (city) => `Beach house hibachi at ${city}, NC coastal vacation rental`,
    experiencePoints: [
      {
        icon: '🌊',
        title: 'Beach House & Vacation Rental Ready',
        desc: 'Ocean-front deck, covered porch, or backyard patio — we set up at your NC coastal rental. Confirm the property allows outdoor open-flame cooking before booking.',
      },
      {
        icon: '🔥',
        title: 'Full Show at the Coast',
        desc: 'Fire tricks, flying shrimp, the onion volcano — the complete performance runs while the whole beach house group watches. Better than any restaurant reservation.',
      },
      {
        icon: '👨‍👩‍👧‍👦',
        title: 'Built for Large Beach Groups',
        desc: 'Family reunions of 25–50, bachelorette groups of 12–20, vacation group dinners — one chef or two stations sized to your group.',
      },
      {
        icon: '🧹',
        title: 'Zero Cleanup — Stay on the Deck',
        desc: 'Complete setup and full cleanup after the last plate. Your beach rental stays clean. You stay outside.',
      },
    ],
    areasPill: 'Coastal NC Coverage',
    areasHeadline: (city) => `We Serve ${city} & All Coastal North Carolina`,
    areasIntro: [
      (city, stateName) => `Hibachi Connect serves ${city} and the full coastal ${stateName} corridor — Outer Banks, Nags Head, Kill Devil Hills, Wrightsville Beach, Carolina Beach, Wilmington, Surf City, and surrounding beach communities.`,
      (city) => `Provide your beach house address when requesting a quote and we\'ll confirm coverage same day. Most coastal NC vacation homes are in our standard service zone.`,
    ],
    areasButton: 'Check My Beach House',
    occasionPill: 'Built for Coastal NC',
    occasionHeadline: (city) => `The Events That Fill ${city} Beach Houses — Hibachi Makes Them Memorable`,
    occasionSubtext: 'Family reunions, bachelorette weekends, vacation group dinners — hibachi at your NC beach house is the dinner everyone talks about on the drive home.',
    faqPill: 'Beach House Hibachi FAQs',
    faqHeadline: (city, stateAbbr) => `Hibachi at Your ${city}, ${stateAbbr} Beach House — Questions Answered`,
    testimonialSubheading: 'OBX families, beach house bachelorettes, and coastal NC vacation groups — what they\'re saying.',
  },

  // ── [4] Lake / Residential ────────────────────────────────────────────────
  {
    heroPill: 'Private Hibachi Chef',
    experiencePill: 'At Your Lake House or Backyard',
    experienceImage: '/pics/backyard-hibachi-3.jpg',
    experienceImageAlt: (city) => `Lake house hibachi dinner in the ${city}, NC area`,
    experiencePoints: [
      {
        icon: '🏠',
        title: 'Lake House & Residential Ready',
        desc: 'Lake house deck, covered patio, or residential backyard — we come to your NC property fully equipped. Lake Norman, Piedmont, and all NC lake communities served.',
      },
      {
        icon: '🔥',
        title: 'Full Chef Performance',
        desc: 'The complete teppanyaki show — fire tricks, flying shrimp, every plate cooked to order while the group watches. The lake is the backdrop; we provide the evening.',
      },
      {
        icon: '🥩',
        title: 'Premium Upgrades Available',
        desc: 'Filet mignon, lobster tail, sea bass — available for any lakeside occasion. Mix-and-match by guest or configure an all-premium menu.',
      },
      {
        icon: '✅',
        title: 'Complete Service from Setup to Cleanup',
        desc: 'Chef arrives, sets up, performs, and cleans up fully. Your property is left exactly as it was.',
      },
    ],
    areasPill: 'NC Lake & Residential Coverage',
    areasHeadline: (city) => `We Serve ${city} & Surrounding NC Lake Communities`,
    areasIntro: [
      (city, stateName) => `Hibachi Connect serves ${city} and surrounding ${stateName} lake and residential communities. Lake Norman, Davidson, Cornelius, Mooresville, Huntersville, and the broader Charlotte-metro lake corridor are all covered.`,
      (city) => `Send us your address when requesting a quote. Most lake-area addresses are in our standard service zone with no travel fee.`,
    ],
    areasButton: 'Confirm My Location',
    occasionPill: 'Lake House & Residential Events',
    occasionHeadline: (city) => `The Events That Fill ${city} Lake Houses — Hibachi Is the Upgrade`,
    occasionSubtext: 'Anniversary dinners, birthday parties, neighborhood gatherings, and corporate team events — private hibachi at your NC lake property turns any occasion into the best version of itself.',
    faqPill: 'Lake House Hibachi FAQs',
    faqHeadline: (city, stateAbbr) => `Private Hibachi in ${city}, ${stateAbbr} — Your Questions Answered`,
    testimonialSubheading: 'Lake Norman residents, NC lake house hosts, and residential entertaining enthusiasts — what they\'re saying.',
  },
]

// ── Per-city experience section images ────────────────────────────────────────
const NC_CITY_IMAGE_MAP = {
  charlotte:          { src: '/pics/hibachi-chef-2.jpg',      alt: (city) => `Upscale private hibachi event at ${city}, NC corporate or residential outdoor space` },
  raleigh:            { src: '/pics/hibachi-raleigh.jpg',     alt: (city) => `Private hibachi chef at a Raleigh, NC backyard party` },
  durham:             { src: '/pics/private-hibachi.jpg',     alt: (city) => `Private teppanyaki dinner at a Durham, NC home` },
  asheville:          { src: '/pics/hibachi-colorado.jpg',    alt: (city) => `Mountain setting private hibachi dinner near ${city}, NC` },
  'outer-banks':      { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Coastal vacation rental hibachi event at the Outer Banks, NC` },
  wilmington:         { src: '/pics/hibachi-wilmington.jpg',  alt: (city) => `Private hibachi chef at a Wilmington, NC outdoor event` },
  greensboro:         { src: '/pics/hibachi-photo-1.jpg',     alt: (city) => `Backyard hibachi party in ${city}, NC` },
  cary:               { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Suburban backyard hibachi dinner in ${city}, NC` },
  'winston-salem':    { src: '/pics/hibachi-event.jpg',       alt: (city) => `Residential hibachi event in ${city}, NC` },
  'lake-norman':      { src: '/pics/hibachi-dallas-home.jpg', alt: (city) => `Lake house hibachi dinner at ${city}, NC` },
  fayetteville:       { src: '/pics/hibachi-shot-1.jpg',      alt: (city) => `Private hibachi party in ${city}, NC` },
  hickory:            { src: '/pics/hibachi-shot-2.jpg',      alt: (city) => `Residential hibachi event in ${city}, NC` },
  'wrightsville-beach': { src: '/pics/hibachi-miami.jpg',     alt: (city) => `Upscale coastal hibachi event near ${city}, NC` },
  'carolina-beach':   { src: '/pics/mobile-hibachi.jpg',      alt: (city) => `Beach vacation hibachi in ${city}, NC` },
  boone:              { src: '/pics/hibachi-colorado-home.jpg', alt: (city) => `Mountain cabin hibachi dinner near ${city}, NC` },
  'blowing-rock':     { src: '/pics/traveling-hibachi.jpg',   alt: (city) => `Traveling hibachi chef at a mountain property near ${city}, NC` },
  pinehurst:          { src: '/pics/hibachi-catering.jpg',    alt: (city) => `Resort-area private hibachi catering in ${city}, NC` },
  'high-point':       { src: '/pics/hibachi-catering-2.jpg',  alt: (city) => `Residential hibachi catering event in ${city}, NC` },
  'new-bern':         { src: '/pics/hibachi-philadelphia.jpg', alt: (city) => `Historic coastal city hibachi event in ${city}, NC` },
  hendersonville:     { src: '/pics/hibachi-to-you.jpg',      alt: (city) => `Private hibachi chef traveling to a ${city}, NC mountain property` },
  huntersville:       { src: '/pics/hibachi-dallas-tyler.jpg', alt: (city) => `Suburban hibachi event in ${city}, NC near Lake Norman` },
  mooresville:        { src: '/pics/hibachi-texas-home.jpg',  alt: (city) => `Lake Norman area residential hibachi party in ${city}, NC` },
  matthews:           { src: '/pics/hibachi-at-home-austin.jpg', alt: (city) => `Backyard hibachi dinner in ${city}, NC` },
  concord:            { src: '/pics/hibachi-austin.jpg',      alt: (city) => `Outdoor hibachi event in ${city}, NC` },
  apex:               { src: '/pics/hibachi-austin-home-2.jpg', alt: (city) => `Triangle suburb backyard hibachi in ${city}, NC` },
  'holly-springs':    { src: '/pics/backyard-hibachi-2.jpg',  alt: (city) => `Residential backyard hibachi event in ${city}, NC` },
  'chapel-hill':      { src: '/pics/hibachi-home-austin.jpg', alt: (city) => `University town backyard hibachi in ${city}, NC` },
  jacksonville:       { src: '/pics/hibachi-dallas-tyler-2.jpg', alt: (city) => `Backyard hibachi party in ${city}, NC` },
  'surf-city':        { src: '/pics/hibachi-pic-2.jpg',       alt: (city) => `Coastal vacation hibachi in ${city}, NC on Topsail Island` },
  'nags-head':        { src: '/pics/hibachi-pic-3.jpg',       alt: (city) => `OBX vacation rental hibachi event in ${city}, NC` },
  'kill-devil-hills': { src: '/pics/hibachi-pic-4.jpg',       alt: (city) => `Outer Banks beach house hibachi in ${city}, NC` },
}

// ── Per-city support images (testimonial + CTA sections) ─────────────────────
const NC_SUPPORT_FALLBACKS = [
  // v=0 Charlotte/Urban
  { testimonial: { src: '/pics/hibachi-chef-2.jpg',      alt: (city) => `Private chef at ${city}, NC event`, caption: 'Charlotte Metro', trustBadge: 'Trusted by Local Families', intro: (city) => `${city} families and corporate teams choose private hibachi for birthdays, milestone celebrations, and client dinners that go well beyond what any restaurant in the area can offer. Our certified chefs travel to your outdoor space fully equipped with the complete teppanyaki setup and handle everything from first flame to final cleanup. Here's what local hosts are saying:` },
    cta:         { src: '/pics/hibachi-dallas.jpg',      alt: (city) => `Hibachi event in the ${city}, NC area` } },
  // v=1 Triangle/Suburban
  { testimonial: { src: '/pics/backyard-hibachi.jpg',    alt: (city) => `Backyard hibachi party in the ${city} area`, caption: 'Research Triangle', trustBadge: '5.0 Average Rating', intro: (city) => `${city} tech professionals and suburban families book private hibachi for graduation dinners, kids' birthday parties, and team celebrations that keep everyone at the same backyard table — no restaurant logistics, no group transportation. Our certified chefs arrive fully equipped and leave your property spotless. See what ${city} hosts have discovered:` },
    cta:         { src: '/pics/hibachi-at-home.jpg',     alt: (city) => `Private hibachi at home in ${city}, NC` } },
  // v=2 Mountain
  { testimonial: { src: '/pics/hibachi-colorado.jpg',    alt: (city) => `Mountain cabin hibachi event near ${city}, NC`, caption: 'Western NC Mountains', trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `${city}-area cabin weekends and mountain vacation rentals have made western NC one of our most celebrated private hibachi markets — bachelorette groups, wedding parties, and family reunions all discover that a chef on the deck beats any restaurant in the mountains. Our chefs travel to your rental property with the full teppanyaki setup and complete cleanup included. Here's what mountain hosts are saying:` },
    cta:         { src: '/pics/hibachi-shot-1.jpg',      alt: (city) => `Private hibachi chef near ${city}, NC mountains` } },
  // v=3 Coastal
  { testimonial: { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Coastal vacation hibachi near ${city}, NC`, caption: 'Coastal NC', trustBadge: 'Thousands of Happy Guests', intro: (city) => `${city} beach vacation groups — family reunions, bachelorette weekends, and summer rental-house gatherings — have found private hibachi to be the dinner that solves every coastal NC logistics headache and becomes the night everyone remembers. Our certified chefs travel to your beach house or coastal rental fully equipped, set up on your deck, and handle all the cleanup. See what coastal NC hosts have discovered:` },
    cta:         { src: '/pics/mobile-hibachi-2.jpg',    alt: (city) => `Mobile hibachi setup at ${city}, NC beach house` } },
  // v=4 Lake/Resort
  { testimonial: { src: '/pics/hibachi-dallas-home.jpg', alt: (city) => `Lake house hibachi event in the ${city} area`, caption: 'Lake Norman & NC Lakes', trustBadge: 'Highly Rated by Local Hosts', intro: (city) => `${city}'s lake house entertaining culture and upscale residential community have made private hibachi a natural fit for anniversary dinners, neighborhood gatherings, and milestone birthday celebrations where the setting deserves something extraordinary. Our chefs arrive at your lake house deck or covered patio fully equipped and leave nothing behind but great memories. Here's what ${city}-area hosts are saying:` },
    cta:         { src: '/pics/hibachi-event.jpg',       alt: (city) => `Hibachi event at ${city}, NC property` } },
]

const NC_SUPPORT_IMAGES = {
  charlotte: {
    testimonial: { src: '/pics/hibachi-catering-3.jpg', alt: (city) => `Upscale hibachi catering event in ${city}, NC`, caption: 'Charlotte, NC', trustBadge: 'Trusted by Local Families', intro: (city) => `Charlotte families and corporate teams choose private hibachi for birthdays, graduation dinners, bachelorette weekends, and client entertainment that goes beyond what any restaurant can offer. From SouthPark to Ballantyne, our certified chefs travel to your home or event space with the full teppanyaki setup and complete cleanup. Here's what Charlotte hosts are saying:` },
    cta:         { src: '/pics/hibachi-dallas.jpg',     alt: (city) => `Private hibachi in Charlotte, NC` },
  },
  raleigh: {
    testimonial: { src: '/pics/backyard-hibachi-3.jpg', alt: (city) => `Backyard hibachi party in Raleigh, NC`, caption: 'Raleigh, NC', trustBadge: 'Highly Rated by Local Hosts', intro: (city) => `Raleigh tech professionals, suburban families, and Triangle community groups book private hibachi for backyard birthdays, graduation dinners, and team celebrations that no restaurant in the area can replicate. Our chefs travel throughout the Research Triangle — North Raleigh, Five Points, Brier Creek, and beyond — arriving fully equipped with everything from the grill to the chopsticks. See what Raleigh hosts have discovered:` },
    cta:         { src: '/pics/hibachi-at-home.jpg',    alt: (city) => `Private hibachi at home in Raleigh, NC` },
  },
  durham: {
    testimonial: { src: '/pics/hibachi-austin-home.jpg', alt: (city) => `Residential hibachi event in Durham, NC`, caption: 'Durham, NC', trustBadge: 'Five-Star Entertainment & Dining', intro: (city) => `Durham's progressive food culture and Duke University community have made private hibachi a standout choice for birthday celebrations, biotech corridor team dinners, and Bull City backyard gatherings. Our certified chefs bring the full teppanyaki experience directly to your Ninth Street bungalow, Research Triangle Park venue, or residential patio — no restaurant logistics required. Here's what Durham hosts are saying:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',     alt: (city) => `Private hibachi in Durham, NC` },
  },
  asheville: {
    testimonial: { src: '/pics/hibachi-shot-1.jpg',       alt: (city) => `Mountain cabin hibachi event near Asheville, NC`, caption: 'Asheville Mountain Area', trustBadge: 'Unforgettable Private Dining Experiences', intro: (city) => `Asheville bachelorette weekends, mountain cabin getaways, and wedding party dinners have made the Blue Ridge area one of our most celebrated NC markets — groups drive hours to these rentals and deserve a dinner that matches the setting. Our chefs set up on your cabin deck with the Blue Ridge as a backdrop, running the full teppanyaki performance from first flame to last plate. Here's what Asheville-area hosts are saying:` },
    cta:         { src: '/pics/hibachi-catering-austin.jpg', alt: (city) => `Private hibachi near Asheville, NC` },
  },
  'outer-banks': {
    testimonial: { src: '/pics/hibachi-photo-1.jpg',      alt: (city) => `Beach house hibachi at the Outer Banks, NC`, caption: 'Outer Banks, NC', trustBadge: 'Hundreds of Private Events', intro: (city) => `OBX vacation groups — family reunions in Corolla, bachelorette weekends in Duck, and large rental house gatherings in Nags Head — have made the Outer Banks one of our most active coastal NC markets, where getting 30 people to a restaurant is painful and a private chef on your back deck is a revelation. Our certified chefs travel the full OBX corridor with the complete teppanyaki setup and handle every detail from arrival to cleanup. See what Outer Banks hosts have discovered:` },
    cta:         { src: '/pics/hibachi-dallas-home.jpg',  alt: (city) => `Outer Banks beach house hibachi event` },
  },
  wilmington: {
    testimonial: { src: '/pics/hibachi-pic-62.jpg',       alt: (city) => `Wilmington, NC coastal hibachi event`, caption: 'Wilmington, NC', trustBadge: 'Thousands of Happy Guests', intro: (city) => `Wilmington's Cape Fear Coast lifestyle — film industry gatherings, UNCW community events, Wrightsville Beach bachelorette parties, and Landfall backyard dinners — runs year-round outdoors, making private hibachi one of the most versatile catering options in the area. Our chefs travel throughout the Wilmington metro to your coastal rental, waterfront patio, or residential backyard fully equipped and ready to perform. Here's what Wilmington hosts are saying:` },
    cta:         { src: '/pics/hibachi-dallas-2.jpg',     alt: (city) => `Private hibachi in Wilmington, NC` },
  },
  greensboro: {
    testimonial: { src: '/pics/hibachi-shot-2.jpg',       alt: (city) => `Piedmont Triad hibachi event in Greensboro, NC`, caption: 'Greensboro, NC', trustBadge: "North Carolina's Favorite Hibachi Experience", intro: (city) => `Greensboro's university community, Piedmont Triad corporate scene, and strong residential neighborhoods have made private hibachi a go-to for UNCG and NC A&T events, backyard birthday parties, and Triad family celebrations. Our certified chefs serve the full Greensboro area — High Point, Kernersville, and beyond — with the complete teppanyaki setup and zero cleanup left behind. See what Greensboro hosts have discovered:` },
    cta:         { src: '/pics/hibachi-austin-3.jpg',     alt: (city) => `Private hibachi in Greensboro, NC` },
  },
  cary: {
    testimonial: { src: '/pics/hibachi-austin-home-3.jpg', alt: (city) => `Suburban backyard hibachi in Cary, NC`, caption: 'Cary, NC', trustBadge: '5.0 Average Rating', intro: (city) => `Cary's tech-professional families and affluent suburban community choose private hibachi for graduation dinners, kids' birthday parties, anniversary evenings, and team celebrations that exceed what any Triangle restaurant experience can deliver. Our certified chefs travel to your Cary backyard, deck, or patio fully equipped — handling setup, the full performance, and complete cleanup. Here's what Cary hosts are saying:` },
    cta:         { src: '/pics/hibachi-pic-32.jpg',        alt: (city) => `Private hibachi at home in Cary, NC` },
  },
  'winston-salem': {
    testimonial: { src: '/pics/hibachi-catering-2.jpg',   alt: (city) => `Forsyth County hibachi catering event in Winston-Salem, NC`, caption: 'Winston-Salem, NC', trustBadge: 'Trusted by Local Families', intro: (city) => `Winston-Salem's Reynolda neighborhood gatherings, Forsyth County family celebrations, and Wake Forest University community events have found private hibachi to be the one dining experience the Camel City's restaurant scene simply can't replicate at home. Our certified chefs travel throughout the Winston-Salem metro — Clemmons, Lewisville, Ardmore, and beyond — with the full teppanyaki setup and seamless cleanup. See what Winston-Salem hosts have discovered:` },
    cta:         { src: '/pics/hibachi-dallas-tyler.jpg',  alt: (city) => `Private hibachi in Winston-Salem, NC` },
  },
  'lake-norman': {
    testimonial: { src: '/pics/hibachi-austin-2.jpg',     alt: (city) => `Lake house hibachi event at Lake Norman, NC`, caption: 'Lake Norman, NC', trustBadge: 'Highly Rated by Local Hosts', intro: (city) => `Lake Norman's boating community and upscale lakefront properties have built one of the strongest outdoor entertaining cultures in North Carolina — and private hibachi on the lake house deck, with the water as a backdrop, has become the signature evening for anniversary dinners, milestone birthdays, and neighborhood gatherings. Our certified chefs travel throughout the Lake Norman corridor fully equipped for lake deck, covered patio, or waterfront setup. Here's what Lake Norman hosts are saying:` },
    cta:         { src: '/pics/hibachi-pic-4.jpg',         alt: (city) => `Private hibachi at Lake Norman, NC` },
  },
  'carolina-beach': {
    testimonial: { src: '/pics/hibachi-virginia-beach.jpg', alt: (city) => `Coastal NC vacation hibachi at Carolina Beach`, caption: 'Carolina Beach, NC', trustBadge: 'Hundreds of Private Events', intro: (city) => `Carolina Beach vacation families, summer bachelorette groups, and Pleasure Island rental-house weekenders have made this stretch of coastline one of our most active private hibachi markets — because getting 20 people off a beach house deck and into a restaurant is never the plan. Our certified chefs travel to your Carolina Beach or Kure Beach rental fully equipped, set up wherever the view is best, and handle every detail. See what Carolina Beach hosts have discovered:` },
    cta:         { src: '/pics/hibachi-photo-2.jpg',        alt: (city) => `Private hibachi at Carolina Beach, NC` },
  },
}

// ── NC major cities map ───────────────────────────────────────────────────────
// Top-10 get city-specific intros (profileIdx 0–9 → INTRO_VARIANTS indices 38–47)
// Others get per-city intro field (33–37) or fallback 33+v
const NC_MAJOR_CITIES = {
  // ── Top-10 (profileIdx defined) ──────────────────────────────────────────
  charlotte:          { v: 0, profileIdx: 0, nearby: ['Ballantyne', 'Matthews', 'Huntersville', 'Mooresville', 'Concord', 'Waxhaw', 'Indian Trail', 'Davidson', 'Mint Hill', 'Harrisburg'] },
  raleigh:            { v: 1, profileIdx: 1, nearby: ['Cary', 'Apex', 'Wake Forest', 'Garner', 'Clayton', 'Knightdale', 'Morrisville', 'Wendell', 'Holly Springs', 'Fuquay-Varina'] },
  durham:             { v: 1, profileIdx: 2, nearby: ['Chapel Hill', 'Carrboro', 'Hillsborough', 'Morrisville', 'Cary', 'Mebane', 'Burlington', 'Wake Forest', 'Research Triangle Park', 'Raleigh'] },
  asheville:          { v: 2, profileIdx: 3, nearby: ['Weaverville', 'Fletcher', 'Black Mountain', 'Swannanoa', 'Biltmore Forest', 'Brevard', 'Hendersonville', 'Waynesville', 'Arden', 'Marshall'] },
  'outer-banks':      { v: 3, profileIdx: 4, nearby: ['Nags Head', 'Kill Devil Hills', 'Duck', 'Corolla', 'Manteo', 'Kitty Hawk', 'Avon', 'Buxton', 'Rodanthe', 'Wanchese'] },
  wilmington:         { v: 3, profileIdx: 5, nearby: ['Wrightsville Beach', 'Carolina Beach', 'Leland', 'Hampstead', 'Castle Hayne', 'Kure Beach', 'Myrtle Grove', 'Porters Neck', 'Ogden', 'Surf City'] },
  greensboro:         { v: 0, profileIdx: 6, nearby: ['High Point', 'Winston-Salem', 'Burlington', 'Kernersville', 'Asheboro', 'Jamestown', 'Oak Ridge', 'Summerfield', 'McLeansville', 'Stokesdale'] },
  cary:               { v: 1, profileIdx: 7, nearby: ['Morrisville', 'Apex', 'Holly Springs', 'Raleigh', 'Durham', 'Fuquay-Varina', 'Garner', 'Clayton', 'Wake Forest', 'Research Triangle Park'] },
  'winston-salem':    { v: 0, profileIdx: 8, nearby: ['Kernersville', 'Lewisville', 'Clemmons', 'High Point', 'Greensboro', 'Mocksville', 'Pfafftown', 'Rural Hall', 'King', 'Walkertown'] },
  'lake-norman':      { v: 4, profileIdx: 9, nearby: ['Cornelius', 'Mooresville', 'Davidson', 'Huntersville', 'Denver', 'Sherrills Ford', 'Catawba', 'Statesville', 'Kannapolis', 'Troutman'] },

  // ── Charlotte Metro ───────────────────────────────────────────────────────
  fayetteville:       { v: 0, intro: 33, nearby: ['Hope Mills', 'Spring Lake', 'Pinehurst', 'Linden', 'Eastover', 'Godwin', 'Wade', 'Saint Pauls', 'Raeford', 'Shannon'] },
  hickory:            { v: 4, intro: 37, nearby: ['Boone', 'Conover', 'Newton', 'Statesville', 'Morganton', 'Lenoir', 'Catawba', 'Claremont', 'Maiden', 'Granite Falls'] },
  huntersville:       { v: 4, intro: 37, nearby: ['Cornelius', 'Davidson', 'Lake Norman', 'Charlotte', 'Mooresville', 'Kannapolis', 'Denver', 'Concord', 'Mount Holly', 'Harrisburg'] },
  mooresville:        { v: 4, intro: 37, nearby: ['Lake Norman', 'Davidson', 'Cornelius', 'Huntersville', 'Statesville', 'Troutman', 'Denver', 'Kannapolis', 'China Grove', 'Faith'] },
  matthews:           { v: 0, intro: 34, nearby: ['Charlotte', 'Monroe', 'Mint Hill', 'Indian Trail', 'Stallings', 'Marvin', 'Waxhaw', 'Harrisburg', 'Hemby Bridge', 'Unionville'] },
  concord:            { v: 0, intro: 33, nearby: ['Kannapolis', 'Harrisburg', 'Mint Hill', 'Charlotte', 'Mooresville', 'Huntersville', 'Landis', 'China Grove', 'Mount Pleasant', 'Midland'] },

  // ── Triangle Cluster ──────────────────────────────────────────────────────
  apex:               { v: 1, intro: 34, nearby: ['Cary', 'Holly Springs', 'Morrisville', 'Raleigh', 'Fuquay-Varina', 'New Hill', 'Holly Ridge', 'Wendell', 'Garner', 'Research Triangle Park'] },
  'holly-springs':    { v: 1, intro: 34, nearby: ['Apex', 'Fuquay-Varina', 'Cary', 'Raleigh', 'Garner', 'Angier', 'Willow Spring', 'New Hill', 'Lillington', 'Morrisville'] },
  'chapel-hill':      { v: 1, intro: 34, nearby: ['Carrboro', 'Durham', 'Hillsborough', 'Pittsboro', 'Mebane', 'Morrisville', 'Cary', 'Efland', 'Saxapahaw', 'Cedar Grove'] },

  // ── Coastal & Tourism ──────────────────────────────────────────────────────
  'wrightsville-beach': { v: 3, intro: 36, nearby: ['Wilmington', 'Carolina Beach', 'Figure Eight Island', 'Porters Neck', 'Ogden', 'Landfall', 'Masonboro', 'Hampstead', 'Leland', 'Kure Beach'] },
  'carolina-beach':   { v: 3, intro: 36, nearby: ['Wilmington', 'Wrightsville Beach', 'Kure Beach', 'Pleasure Island', 'Myrtle Grove', 'Monkey Junction', 'Southport', 'Oak Island', 'Leland', 'Carolina Beach'] },
  boone:              { v: 2, intro: 35, nearby: ['Blowing Rock', 'Hickory', 'Banner Elk', 'Beech Mountain', 'Lenoir', 'Newland', 'Elk Park', 'Vilas', 'Seven Devils', 'West Jefferson'] },
  'blowing-rock':     { v: 2, intro: 35, nearby: ['Boone', 'Hickory', 'Banner Elk', 'Linville', 'Beech Mountain', 'Valle Crucis', 'Sugar Mountain', 'Newland', 'Lenoir', 'Grandfather Mountain area'] },
  'nags-head':        { v: 3, intro: 36, nearby: ['Kill Devil Hills', 'Kitty Hawk', 'Southern Shores', 'Duck', 'Manteo', 'Roanoke Island', 'Wanchese', 'South Nags Head', 'Colington', 'Avon'] },
  'kill-devil-hills': { v: 3, intro: 36, nearby: ['Nags Head', 'Kitty Hawk', 'Southern Shores', 'Duck', 'Manteo', 'Colington', 'Colington Harbour', 'Martin\'s Point', 'Dare County', 'Avon'] },
  'surf-city':        { v: 3, intro: 36, nearby: ['Topsail Beach', 'North Topsail Beach', 'Sneads Ferry', 'Holly Ridge', 'Hampstead', 'Swansboro', 'Jacksonville', 'Wilmington', 'Wrightsville Beach', 'Carolina Beach'] },

  // ── Long Tail ─────────────────────────────────────────────────────────────
  pinehurst:          { v: 4, intro: 37, nearby: ['Fayetteville', 'Southern Pines', 'Aberdeen', 'Sanford', 'Carthage', 'Vass', 'Cameron', 'West End', 'Robbins', 'Eagle Springs'] },
  'high-point':       { v: 0, intro: 33, nearby: ['Greensboro', 'Winston-Salem', 'Thomasville', 'Archdale', 'Jamestown', 'Trinity', 'Randleman', 'Asheboro', 'Burlington', 'Kernersville'] },
  'new-bern':         { v: 3, intro: 36, nearby: ['Jacksonville', 'Havelock', 'Morehead City', 'Kinston', 'Bridgeton', 'Vanceboro', 'River Bend', 'Trent Woods', 'Arapahoe', 'Oriental'] },
  hendersonville:     { v: 2, intro: 35, nearby: ['Asheville', 'Flat Rock', 'Brevard', 'Mills River', 'Etowah', 'East Flat Rock', 'Saluda', 'Arden', 'Fletcher', 'Horse Shoe'] },
  jacksonville:       { v: 0, intro: 33, nearby: ['New Bern', 'Onslow County', 'Swansboro', 'Sneads Ferry', 'Holly Ridge', 'Camp Lejeune', 'Piney Green', 'Richlands', 'Hubert', 'Surf City'] },
}

// Correct display names that slugToCity() cannot reconstruct
const NC_CITY_DISPLAY_NAMES = {
  'outer-banks':      'Outer Banks',
  'winston-salem':    'Winston-Salem',
  'lake-norman':      'Lake Norman',
  'wrightsville-beach': 'Wrightsville Beach',
  'carolina-beach':   'Carolina Beach',
  'blowing-rock':     'Blowing Rock',
  'holly-springs':    'Holly Springs',
  'chapel-hill':      'Chapel Hill',
  'nags-head':        'Nags Head',
  'kill-devil-hills': 'Kill Devil Hills',
  'surf-city':        'Surf City',
  'high-point':       'High Point',
  'new-bern':         'New Bern',
}

// ── Master builder — returns a complete data object for any NC city ────────────
export function getNcCityData(citySlug, cityName) {
  const major       = NC_MAJOR_CITIES[citySlug]
  const v           = major ? major.v : getNCVariantIndex(citySlug)
  const theme       = NC_IMAGE_THEMES[v]
  const displayName = NC_CITY_DISPLAY_NAMES[citySlug] ?? cityName

  return {
    cityName:          displayName,
    stateName:         'North Carolina',
    stateAbbr:         'NC',
    stateSlug:         'north-carolina',
    variant:           v % 3,
    heroImage:         theme.heroImage,
    heroSubtitle:      NC_HERO_SUBTITLES[v](displayName),
    nearbyCities:      major?.nearby ?? [],
    nearbyMajorCities: ['Charlotte', 'Raleigh', 'Durham', 'Asheville', 'Wilmington'],
    localHighlights:   NC_LOCAL_HIGHLIGHTS[v](displayName),
    featuredOccasions: NC_OCCASIONS[v],
    faqSet:            NC_FAQ_SETS[v](displayName),
    testimonials:      NC_TESTIMONIALS[v],
    // profileIdx cities get city-specific intros 38–47; others use per-city intro or fallback 33+v
    uniqueIntroVariant:   (major?.profileIdx != null) ? 38 + major.profileIdx : (major?.intro ?? 33 + v),
    uniqueWhyUsVariant:   v,
    uniqueClosingVariant: (major?.profileIdx != null) ? 38 + major.profileIdx : 33 + v,
  }
}

// ── Helper: How It Works per city ─────────────────────────────────────────────
export function getNcHowItWorks(citySlug) {
  const major = NC_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getNCVariantIndex(citySlug)
  return NC_HOW_IT_WORKS[v]
}

// ── Helper: Section variant per city ──────────────────────────────────────────
export function getNcSectionVariant(citySlug) {
  const major = NC_MAJOR_CITIES[citySlug]
  const v     = major ? major.v : getNCVariantIndex(citySlug)
  return NC_SECTION_VARIANTS[v % NC_SECTION_VARIANTS.length]
}

// ── Helper: Per-city experience image ─────────────────────────────────────────
export function getNcCityImage(citySlug) {
  return NC_CITY_IMAGE_MAP[citySlug] ?? null
}

// ── Helper: Support images (testimonial + CTA) ────────────────────────────────
export function getNcSupportImages(citySlug, variantIdx) {
  if (NC_SUPPORT_IMAGES[citySlug]) return NC_SUPPORT_IMAGES[citySlug]
  const fallback = NC_SUPPORT_FALLBACKS[variantIdx % NC_SUPPORT_FALLBACKS.length]
  return {
    testimonial: {
      src:        fallback.testimonial.src,
      alt:        fallback.testimonial.alt,
      caption:    fallback.testimonial.caption,
      trustBadge: fallback.testimonial.trustBadge,
      intro:      fallback.testimonial.intro,
    },
    cta: {
      src: fallback.cta.src,
      alt: fallback.cta.alt,
    },
  }
}

// ── Blog posts for NC city pages ──────────────────────────────────────────────
export const NC_BLOG_POSTS = [
  {
    slug:     'how-to-plan-a-backyard-hibachi-party',
    title:    'How to Plan a Backyard Hibachi Party (Complete Checklist)',
    tag:      'Planning',
    readTime: '7 min read',
    excerpt:  'Everything you need to prepare before your private hibachi chef arrives — space setup, guest seating, timing, and the questions to ask your chef.',
  },
  {
    slug:     'hibachi-bachelorette-party',
    title:    'Why Hibachi Is the Best Bachelorette Party Activity',
    tag:      'Occasions',
    readTime: '5 min read',
    excerpt:  'Bachelorette groups across the Southeast are skipping the restaurant reservation and booking a private hibachi chef instead. Here\'s why it works so well.',
  },
  {
    slug:     'how-much-does-private-hibachi-cost',
    title:    'How Much Does a Private Hibachi Chef Cost?',
    tag:      'Pricing',
    readTime: '5 min read',
    excerpt:  'A complete breakdown of private hibachi pricing: per-person rates, event minimums, premium add-ons, and what\'s included at every price point.',
  },
  {
    slug:     'hibachi-at-home-vs-restaurant',
    title:    'Hibachi at Home vs. Restaurant: Which Is Better for Your Group?',
    tag:      'Comparison',
    readTime: '5 min read',
    excerpt:  'A straight comparison: cost, convenience, experience, and who wins for vacation groups, bachelorette parties, and family reunions.',
  },
  {
    slug:     'hibachi-birthday-party-ideas',
    title:    'Hibachi Birthday Party Ideas: Make It the Best One Yet',
    tag:      'Occasions',
    readTime: '6 min read',
    excerpt:  'From kids\' birthdays to milestone celebrations — how to plan a private hibachi party that your guests will talk about for years.',
  },
]

export function getNcBlogPosts(cityVariant, count = 3) {
  const rotatingIndex = [2, 3, 4, 3, 2][cityVariant % 5]
  return [
    NC_BLOG_POSTS[0],
    NC_BLOG_POSTS[1],
    NC_BLOG_POSTS[rotatingIndex],
  ].slice(0, count)
}
