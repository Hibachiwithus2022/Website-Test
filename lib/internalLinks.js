// ─── Internal Linking Data ────────────────────────────────────────────────────
// Source of truth for state → featured cities, city → nearby/related links,
// and contextual SEO sentences used across state and city pages.

// ── State-level data ──────────────────────────────────────────────────────────
export const STATE_LINK_DATA = {

  texas: {
    stateName: 'Texas',
    stateAbbr: 'TX',
    stateSlug: 'texas',
    featuredCities: [
      { city: 'Houston',       slug: 'houston',       desc: 'Greater Houston & Harris County' },
      { city: 'Dallas',        slug: 'dallas',        desc: 'DFW metroplex & surrounding suburbs' },
      { city: 'Austin',        slug: 'austin',        desc: 'Austin metro & Hill Country' },
      { city: 'San Antonio',   slug: 'san-antonio',   desc: 'Alamo City & Bexar County' },
      { city: 'Fort Worth',    slug: 'fort-worth',    desc: 'Tarrant County & West DFW' },
      { city: 'Katy',          slug: 'katy',          desc: 'West Houston & Fort Bend suburbs' },
      { city: 'Sugar Land',    slug: 'sugar-land',    desc: 'Southwest Houston & Fort Bend County' },
      { city: 'The Woodlands', slug: 'the-woodlands', desc: 'North Houston master-planned community' },
      { city: 'Frisco',        slug: 'frisco',        desc: 'North DFW growth corridor' },
    ],
    secondaryCities: [
      { city: 'Plano',          slug: 'plano' },
      { city: 'Arlington',      slug: 'arlington' },
      { city: 'McKinney',       slug: 'mckinney' },
      { city: 'Pearland',       slug: 'pearland' },
      { city: 'League City',    slug: 'league-city' },
      { city: 'New Braunfels',  slug: 'new-braunfels' },
      { city: 'Georgetown',     slug: 'georgetown' },
      { city: 'Corpus Christi', slug: 'corpus-christi' },
    ],
    contextualSentence: 'We serve all of Texas — Houston, Dallas, Austin, San Antonio, Fort Worth, Katy, Sugar Land, The Woodlands, Frisco, and hundreds of cities statewide.',
  },

  arizona: {
    stateName: 'Arizona',
    stateAbbr: 'AZ',
    stateSlug: 'arizona',
    featuredCities: [
      { city: 'Phoenix',    slug: 'phoenix',    desc: 'Greater Phoenix metro area' },
      { city: 'Scottsdale', slug: 'scottsdale', desc: 'Old Town & North Scottsdale' },
      { city: 'Tucson',     slug: 'tucson',     desc: 'Southern Arizona & University area' },
      { city: 'Mesa',       slug: 'mesa',       desc: 'East Valley communities' },
      { city: 'Chandler',   slug: 'chandler',   desc: 'South East Valley' },
      { city: 'Tempe',      slug: 'tempe',      desc: 'Central Valley & ASU corridor' },
    ],
    secondaryCities: [
      { city: 'Gilbert',    slug: 'gilbert' },
      { city: 'Glendale',   slug: 'glendale' },
      { city: 'Peoria',     slug: 'peoria' },
      { city: 'Surprise',   slug: 'surprise' },
      { city: 'Goodyear',   slug: 'goodyear' },
      { city: 'Flagstaff',  slug: 'flagstaff' },
    ],
    contextualSentence: 'We serve all of Arizona, including Phoenix, Scottsdale, Tucson, Mesa, Chandler, Tempe, and all surrounding Valley communities.',
  },

  florida: {
    stateName: 'Florida',
    stateAbbr: 'FL',
    stateSlug: 'florida',
    featuredCities: [
      { city: 'Miami',           slug: 'miami',           desc: 'Miami-Dade metro & Brickell waterfront' },
      { city: 'Orlando',         slug: 'orlando',         desc: 'Central Florida vacation home corridor' },
      { city: 'Tampa',           slug: 'tampa',           desc: 'Tampa Bay & bachelorette weekends' },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale', desc: 'Canal-front patios & Broward County' },
      { city: 'Sarasota',        slug: 'sarasota',        desc: 'Gulf Coast luxury & snowbird season' },
      { city: 'Destin',          slug: 'destin',          desc: 'Emerald Coast beach houses & vacation rentals' },
      { city: 'Key West',        slug: 'key-west',        desc: 'Tropical vacation rentals & island gatherings' },
      { city: 'Pensacola',       slug: 'pensacola',       desc: 'Gulf Coast beaches & Panhandle events' },
    ],
    secondaryCities: [
      { city: 'St. Petersburg',  slug: 'st-petersburg' },
      { city: 'Naples',          slug: 'naples' },
      { city: 'West Palm Beach', slug: 'west-palm-beach' },
      { city: 'Jacksonville',    slug: 'jacksonville' },
      { city: 'Boca Raton',      slug: 'boca-raton' },
      { city: 'Cape Coral',      slug: 'cape-coral' },
      { city: 'Key West',        slug: 'key-west' },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
    ],
    contextualSentence: 'We serve all of Florida — vacation rentals, beach houses, and waterfront homes across Miami, Orlando, Tampa, Fort Lauderdale, Sarasota, Destin, and every Florida market.',
  },

  georgia: {
    stateName: 'Georgia',
    stateAbbr: 'GA',
    stateSlug: 'georgia',
    featuredCities: [
      { city: 'Atlanta',      slug: 'atlanta',      desc: 'Metro Atlanta & Buckhead' },
      { city: 'Savannah',     slug: 'savannah',     desc: 'Coastal Georgia & Historic District' },
      { city: 'Augusta',      slug: 'augusta',      desc: 'CSRA & Central Savannah River Area' },
      { city: 'Sandy Springs', slug: 'sandy-springs', desc: 'North Atlanta suburbs' },
      { city: 'Roswell',      slug: 'roswell',      desc: 'North Fulton County' },
      { city: 'Athens',       slug: 'athens',       desc: 'UGA corridor & Northeast Georgia' },
    ],
    secondaryCities: [
      { city: 'Columbus',     slug: 'columbus' },
      { city: 'Macon',        slug: 'macon' },
    ],
    contextualSentence: 'We serve all of Georgia, including Atlanta, Savannah, Augusta, Sandy Springs, Roswell, and surrounding metro communities.',
  },

  'north-carolina': {
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    stateSlug: 'north-carolina',
    featuredCities: [
      { city: 'Charlotte',      slug: 'charlotte',      desc: 'Queen City & South Charlotte' },
      { city: 'Raleigh',        slug: 'raleigh',        desc: 'Research Triangle & backyard events' },
      { city: 'Durham',         slug: 'durham',         desc: 'Bull City & Duke University area' },
      { city: 'Asheville',      slug: 'asheville',      desc: 'Mountain cabins & bachelorette weekends' },
      { city: 'Outer Banks',    slug: 'outer-banks',    desc: 'OBX beach house & family reunions' },
      { city: 'Wilmington',     slug: 'wilmington',     desc: 'Cape Fear Coast & beach rentals' },
    ],
    secondaryCities: [
      { city: 'Greensboro',     slug: 'greensboro' },
      { city: 'Cary',           slug: 'cary' },
      { city: 'Winston-Salem',  slug: 'winston-salem' },
      { city: 'Lake Norman',    slug: 'lake-norman' },
    ],
    contextualSentence: 'We serve all of North Carolina — Charlotte, Raleigh, Durham, Asheville, the Outer Banks, Wilmington, Lake Norman, and every NC market from the mountains to the coast.',
  },

  colorado: {
    stateName: 'Colorado',
    stateAbbr: 'CO',
    stateSlug: 'colorado',
    featuredCities: [
      { city: 'Denver',           slug: 'denver',           desc: 'Mile High City & metro area' },
      { city: 'Colorado Springs', slug: 'colorado-springs', desc: 'Pikes Peak region' },
      { city: 'Boulder',          slug: 'boulder',          desc: 'Front Range & CU corridor' },
      { city: 'Aurora',           slug: 'aurora',           desc: 'East Denver metro' },
      { city: 'Fort Collins',     slug: 'fort-collins',     desc: 'Northern Colorado & CSU area' },
      { city: 'Lakewood',         slug: 'lakewood',         desc: 'Jefferson County suburbs' },
    ],
    secondaryCities: [
      { city: 'Thornton',     slug: 'thornton' },
      { city: 'Arvada',       slug: 'arvada' },
      { city: 'Westminster',  slug: 'westminster' },
    ],
    contextualSentence: 'We serve all of Colorado, including Denver, Colorado Springs, Boulder, Aurora, Fort Collins, and Front Range communities.',
  },

  tennessee: {
    stateName: 'Tennessee',
    stateAbbr: 'TN',
    stateSlug: 'tennessee',
    featuredCities: [
      { city: 'Nashville',     slug: 'nashville',     desc: 'Music City & Davidson County' },
      { city: 'Memphis',       slug: 'memphis',       desc: 'Bluff City & Shelby County' },
      { city: 'Franklin',      slug: 'franklin',      desc: 'Williamson County suburbs' },
      { city: 'Knoxville',     slug: 'knoxville',     desc: 'East Tennessee & UT corridor' },
      { city: 'Murfreesboro',  slug: 'murfreesboro',  desc: 'Rutherford County' },
      { city: 'Chattanooga',   slug: 'chattanooga',   desc: 'Scenic City & Hamilton County' },
    ],
    secondaryCities: [
      { city: 'Clarksville',   slug: 'clarksville' },
      { city: 'Jackson',       slug: 'jackson' },
    ],
    contextualSentence: 'We serve all of Tennessee, including Nashville, Memphis, Franklin, Knoxville, Murfreesboro, Chattanooga, and surrounding communities.',
  },

  nevada: {
    stateName: 'Nevada',
    stateAbbr: 'NV',
    stateSlug: 'nevada',
    featuredCities: [
      { city: 'Las Vegas',      slug: 'las-vegas',      desc: 'The Strip, Summerlin & Henderson' },
      { city: 'Henderson',      slug: 'henderson',      desc: 'Southern Nevada suburbs' },
      { city: 'Reno',           slug: 'reno',           desc: 'Biggest Little City & Washoe County' },
      { city: 'North Las Vegas', slug: 'north-las-vegas', desc: 'North Clark County' },
      { city: 'Sparks',         slug: 'sparks',         desc: 'Truckee Meadows' },
      { city: 'Carson City',    slug: 'carson-city',    desc: 'State capital & Carson Valley' },
    ],
    secondaryCities: [],
    contextualSentence: 'We serve all of Nevada, including Las Vegas, Henderson, Reno, North Las Vegas, Sparks, and surrounding communities.',
  },

  'new-jersey': {
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    stateSlug: 'new-jersey',
    featuredCities: [
      { city: 'Jersey City',  slug: 'jersey-city',  desc: 'Hudson County & NYC-adjacent skyline views' },
      { city: 'Hoboken',      slug: 'hoboken',      desc: 'Rooftop parties & waterfront events' },
      { city: 'Morristown',   slug: 'morristown',   desc: 'Morris County estate events' },
      { city: 'Asbury Park',  slug: 'asbury-park',  desc: 'Shore house events & weekend rentals' },
      { city: 'Cape May',     slug: 'cape-may',     desc: 'Victorian Shore & summer gatherings' },
      { city: 'Red Bank',     slug: 'red-bank',     desc: 'Monmouth County upscale dining scene' },
    ],
    secondaryCities: [
      { city: 'Princeton',   slug: 'princeton'   },
      { city: 'Cherry Hill', slug: 'cherry-hill' },
      { city: 'Montclair',   slug: 'montclair'   },
      { city: 'Edison',      slug: 'edison'       },
    ],
    contextualSentence: 'We serve all of New Jersey — Jersey City, Hoboken, Morristown, Asbury Park, Cape May, Red Bank, Princeton, Cherry Hill, and every corner of the Garden State.',
  },

  'new-york': {
    stateName: 'New York',
    stateAbbr: 'NY',
    stateSlug: 'new-york',
    featuredCities: [
      { city: 'New York City', slug: 'new-york-city', desc: 'Manhattan rooftops, corporate dinners & NYC events' },
      { city: 'Brooklyn',      slug: 'brooklyn',      desc: 'Brownstone backyards & borough entertaining' },
      { city: 'Southampton',   slug: 'southampton',   desc: 'Hamptons summer house private dining' },
      { city: 'East Hampton',  slug: 'east-hampton',  desc: 'East End luxury & vacation home events' },
      { city: 'White Plains',  slug: 'white-plains',  desc: 'Westchester corporate & private events' },
      { city: 'Lake George',   slug: 'lake-george',   desc: 'Adirondack lake house summer gatherings' },
    ],
    secondaryCities: [
      { city: 'Scarsdale',  slug: 'scarsdale'  },
      { city: 'Rhinebeck',  slug: 'rhinebeck'  },
      { city: 'Buffalo',    slug: 'buffalo'    },
      { city: 'Montauk',    slug: 'montauk'    },
    ],
    contextualSentence: 'We serve all of New York — Manhattan rooftops, Hamptons summer houses, Westchester backyards, Hudson Valley rentals, Adirondack lake houses, and every market from Buffalo to Montauk.',
  },

  delaware: {
    stateName: 'Delaware',
    stateAbbr: 'DE',
    stateSlug: 'delaware',
    featuredCities: [
      { city: 'Wilmington',     slug: 'wilmington',     desc: 'Corporate team dinners & executive private dining' },
      { city: 'Rehoboth Beach', slug: 'rehoboth-beach', desc: 'Beach house hibachi & bachelorette weekends' },
      { city: 'Lewes',          slug: 'lewes',          desc: 'Coastal vacation home private dining' },
      { city: 'Newark',         slug: 'newark',         desc: 'UD graduation celebrations & corporate events' },
      { city: 'Hockessin',      slug: 'hockessin',      desc: 'Brandywine Valley private backyard dining' },
      { city: 'Dover',          slug: 'dover',          desc: 'State capital graduation parties & military family events' },
    ],
    secondaryCities: [
      { city: 'Bethany Beach', slug: 'bethany-beach' },
      { city: 'Greenville',    slug: 'greenville'    },
      { city: 'Dewey Beach',   slug: 'dewey-beach'   },
      { city: 'Bear',          slug: 'bear'          },
    ],
    contextualSentence: 'We serve all of Delaware — Wilmington corporate events, Brandywine Valley backyard dinners, Rehoboth Beach and Dewey Beach vacation rentals, Lewes coastal homes, and every community from Pike Creek to Georgetown.',
  },
  oregon: {
    stateName: 'Oregon',
    stateAbbr: 'OR',
    stateSlug: 'oregon',
    featuredCities: [
      { city: 'Portland',     slug: 'portland',     desc: 'Backyard dinners, rooftop events & urban outdoor spaces' },
      { city: 'Bend',         slug: 'bend',         desc: 'Mountain-town luxury dining & outdoor entertaining' },
      { city: 'Eugene',       slug: 'eugene',       desc: 'University celebrations, backyard dinners & family events' },
      { city: 'Salem',        slug: 'salem',        desc: 'Willamette Valley graduations & family gatherings' },
      { city: 'Lake Oswego',  slug: 'lake-oswego',  desc: 'Affluent lakeside private dining & estate events' },
      { city: 'Cannon Beach', slug: 'cannon-beach', desc: 'Oceanfront vacation rental & coastal group dinners' },
    ],
    secondaryCities: [
      { city: 'Beaverton',    slug: 'beaverton'    },
      { city: 'Hillsboro',    slug: 'hillsboro'    },
      { city: 'McMinnville',  slug: 'mcminnville'  },
      { city: 'Lincoln City', slug: 'lincoln-city' },
    ],
    contextualSentence: 'We serve all of Oregon — Portland rooftop events and brownstone dinners, Lake Oswego and Bend private chef experiences, wine country gatherings in the Willamette Valley, and oceanfront events from Cannon Beach to Lincoln City.',
  },

  missouri: {
    stateName: 'Missouri',
    stateAbbr: 'MO',
    stateSlug: 'missouri',
    featuredCities: [
      { city: 'Kansas City',        slug: 'kansas-city',        desc: 'Backyard hibachi parties & KC metro outdoor entertaining' },
      { city: 'St. Louis',          slug: 'st-louis',           desc: 'Graduation parties, birthday dinners & family celebrations' },
      { city: 'Lake of the Ozarks', slug: 'lake-of-the-ozarks', desc: 'Lake house hibachi & Ozarks vacation rental dinners' },
      { city: 'Chesterfield',       slug: 'chesterfield',       desc: 'Private estate dining & St. Louis County luxury events' },
      { city: 'Columbia',           slug: 'columbia',           desc: 'Mizzou graduation parties & Mid-Missouri celebrations' },
      { city: 'Branson',            slug: 'branson',            desc: 'Vacation rental hibachi & Ozarks group dinners' },
    ],
    secondaryCities: [
      { city: "Lee's Summit",  slug: 'lee-s-summit'       },
      { city: "O'Fallon",      slug: 'o-fallon'           },
      { city: 'St. Charles',   slug: 'st-charles'         },
      { city: 'Blue Springs',  slug: 'blue-springs'       },
      { city: 'Kirkwood',      slug: 'kirkwood'           },
      { city: 'Springfield',   slug: 'springfield'        },
      { city: 'Joplin',        slug: 'joplin'             },
    ],
    contextualSentence: "We serve all of Missouri — Kansas City backyard parties and metro events, St. Louis graduation dinners and estate celebrations, lake house hibachi at the Ozarks, and university town graduation season in Columbia and Springfield.",
  },
}

// ── City-level linking data ───────────────────────────────────────────────────
export const CITY_LINK_DATA = {

  // ── Texas ──────────────────────────────────────────────────────────────────
  dallas: {
    cityName: 'Dallas',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Fort Worth', slug: 'fort-worth' },
      { city: 'Plano',      slug: 'plano'      },
      { city: 'Frisco',     slug: 'frisco'     },
      { city: 'Arlington',  slug: 'arlington'  },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in Dallas? We serve all of Texas — Fort Worth, Plano, Frisco, Arlington, Houston, Katy, Sugar Land, Austin, and San Antonio.',
  },

  houston: {
    cityName: 'Houston',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Katy',          slug: 'katy'          },
      { city: 'Sugar Land',    slug: 'sugar-land'    },
      { city: 'The Woodlands', slug: 'the-woodlands' },
      { city: 'Pearland',      slug: 'pearland'      },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Houston? We also serve Katy, Sugar Land, The Woodlands, Pearland, Dallas, Fort Worth, Austin, and San Antonio — all of Greater Texas.',
  },

  austin: {
    cityName: 'Austin',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Round Rock',  slug: 'round-rock'  },
      { city: 'Cedar Park',  slug: 'cedar-park'  },
      { city: 'Georgetown',  slug: 'georgetown'  },
      { city: 'San Marcos',  slug: 'san-marcos'  },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'San Antonio', slug: 'san-antonio' },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Katy',        slug: 'katy'        },
    ],
    contextualSentence: 'Not in Austin? We serve Houston, Dallas, San Antonio, Fort Worth, Katy, Sugar Land, The Woodlands, Round Rock, Cedar Park, and Georgetown.',
  },

  'san-antonio': {
    cityName: 'San Antonio',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Austin',        slug: 'austin'        },
      { city: 'New Braunfels', slug: 'new-braunfels' },
      { city: 'Schertz',       slug: 'schertz'       },
      { city: 'Boerne',        slug: 'boerne'        },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in San Antonio? We serve Austin, Houston, Dallas, Fort Worth, Katy, Sugar Land, The Woodlands, and all surrounding Hill Country and Texas metro communities.',
  },

  'fort-worth': {
    cityName: 'Fort Worth',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Dallas',     slug: 'dallas'     },
      { city: 'Arlington',  slug: 'arlington'  },
      { city: 'Southlake',  slug: 'southlake'  },
      { city: 'Keller',     slug: 'keller'     },
    ],
    otherStateCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in Fort Worth? We serve Dallas, Arlington, Plano, Frisco, Houston, Katy, Sugar Land, The Woodlands, Austin, and San Antonio.',
  },

  katy: {
    cityName: 'Katy',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Houston',       slug: 'houston'       },
      { city: 'Sugar Land',    slug: 'sugar-land'    },
      { city: 'The Woodlands', slug: 'the-woodlands' },
      { city: 'Cypress',       slug: 'cypress'       },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Katy? We serve all Greater Houston — Sugar Land, The Woodlands, Pearland, Cypress, and central Houston, plus Dallas, Fort Worth, Austin, and San Antonio.',
  },

  'sugar-land': {
    cityName: 'Sugar Land',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Houston',     slug: 'houston'     },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Pearland',    slug: 'pearland'    },
      { city: 'Missouri City', slug: 'missouri-city' },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'San Antonio', slug: 'san-antonio' },
    ],
    contextualSentence: 'Not in Sugar Land? We serve all of Fort Bend County and Greater Houston — Katy, Pearland, Missouri City, The Woodlands, central Houston, Dallas, Austin, and San Antonio.',
  },

  'the-woodlands': {
    cityName: 'The Woodlands',
    stateSlug: 'texas',
    stateName: 'Texas',
    stateAbbr: 'TX',
    nearbyMajorCities: [
      { city: 'Houston',  slug: 'houston'  },
      { city: 'Spring',   slug: 'spring'   },
      { city: 'Conroe',   slug: 'conroe'   },
      { city: 'Humble',   slug: 'humble'   },
    ],
    otherStateCities: [
      { city: 'Dallas',      slug: 'dallas'      },
      { city: 'Fort Worth',  slug: 'fort-worth'  },
      { city: 'Austin',      slug: 'austin'      },
      { city: 'Katy',        slug: 'katy'        },
      { city: 'Sugar Land',  slug: 'sugar-land'  },
    ],
    contextualSentence: 'Not in The Woodlands? We cover all North Houston — Spring, Conroe, Humble, Kingwood, and central Houston, plus Katy, Sugar Land, Dallas, Fort Worth, and Austin.',
  },

  // ── Arizona ────────────────────────────────────────────────────────────────
  phoenix: {
    cityName: 'Phoenix',
    stateSlug: 'arizona',
    stateName: 'Arizona',
    stateAbbr: 'AZ',
    nearbyMajorCities: [
      { city: 'Scottsdale', slug: 'scottsdale' },
      { city: 'Mesa',       slug: 'mesa'       },
      { city: 'Chandler',   slug: 'chandler'   },
      { city: 'Tempe',      slug: 'tempe'      },
    ],
    otherStateCities: [
      { city: 'Tucson',  slug: 'tucson'  },
      { city: 'Gilbert', slug: 'gilbert' },
    ],
    contextualSentence: 'Not in Phoenix? We serve all of Arizona — including Scottsdale, Mesa, Chandler, Tempe, and Tucson.',
  },

  // ── Florida ────────────────────────────────────────────────────────────────
  miami: {
    cityName: 'Miami',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Boca Raton',      slug: 'boca-raton'      },
      { city: 'Hialeah',         slug: 'hialeah'         },
      { city: 'Coral Gables',    slug: 'coral-gables'    },
    ],
    otherStateCities: [
      { city: 'Orlando',     slug: 'orlando'     },
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Jacksonville', slug: 'jacksonville' },
    ],
    contextualSentence: 'Not in Miami? We serve all of Florida — including Fort Lauderdale, Boca Raton, Orlando, Tampa, and Jacksonville.',
  },

  orlando: {
    cityName: 'Orlando',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Kissimmee',   slug: 'kissimmee'   },
      { city: 'Sanford',     slug: 'sanford'     },
      { city: 'Lakeland',    slug: 'lakeland'    },
      { city: 'Winter Park',  slug: 'winter-park' },
    ],
    otherStateCities: [
      { city: 'Miami',       slug: 'miami'       },
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Jacksonville', slug: 'jacksonville' },
    ],
    contextualSentence: 'Not in Orlando? We serve all of Florida — including Miami, Tampa, Jacksonville, Kissimmee, and Lakeland.',
  },

  tampa: {
    cityName: 'Tampa',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'St. Petersburg', slug: 'st-petersburg' },
      { city: 'Clearwater',     slug: 'clearwater'    },
      { city: 'Brandon',        slug: 'brandon'       },
      { city: 'Wesley Chapel',  slug: 'wesley-chapel' },
    ],
    otherStateCities: [
      { city: 'Miami',           slug: 'miami'           },
      { city: 'Orlando',         slug: 'orlando'         },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Sarasota',        slug: 'sarasota'        },
    ],
    contextualSentence: 'Not in Tampa? We serve all of Florida — St. Petersburg, Clearwater, Sarasota, Orlando, Miami, and Fort Lauderdale.',
  },

  jacksonville: {
    cityName: 'Jacksonville',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Ponte Vedra Beach', slug: 'ponte-vedra-beach' },
      { city: 'Atlantic Beach',    slug: 'atlantic-beach'    },
      { city: 'St. Augustine',     slug: 'st-augustine'      },
      { city: 'Palm Coast',        slug: 'palm-coast'        },
    ],
    otherStateCities: [
      { city: 'Miami',     slug: 'miami'     },
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Tampa',     slug: 'tampa'     },
      { city: 'Sarasota',  slug: 'sarasota'  },
    ],
    contextualSentence: 'Not in Jacksonville? We serve all of Florida — St. Augustine, Ponte Vedra Beach, Orlando, Miami, Tampa, and Sarasota.',
  },

  'fort-lauderdale': {
    cityName: 'Fort Lauderdale',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Miami',         slug: 'miami'         },
      { city: 'Boca Raton',    slug: 'boca-raton'    },
      { city: 'Hollywood',     slug: 'hollywood'     },
      { city: 'Pompano Beach', slug: 'pompano-beach' },
    ],
    otherStateCities: [
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Tampa',     slug: 'tampa'     },
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Naples',    slug: 'naples'    },
    ],
    contextualSentence: 'Not in Fort Lauderdale? We serve all of Florida — Miami, Boca Raton, Hollywood, Orlando, Tampa, and Naples.',
  },

  sarasota: {
    cityName: 'Sarasota',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Bradenton',    slug: 'bradenton'    },
      { city: 'Venice',       slug: 'venice'       },
      { city: 'Siesta Key',   slug: 'siesta-key'   },
      { city: 'Longboat Key', slug: 'longboat-key' },
    ],
    otherStateCities: [
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Naples',      slug: 'naples'      },
      { city: 'Fort Myers',  slug: 'fort-myers'  },
      { city: 'Cape Coral',  slug: 'cape-coral'  },
    ],
    contextualSentence: 'Not in Sarasota? We serve all of Florida\'s Gulf Coast — Bradenton, Venice, Naples, Fort Myers, Tampa, and Cape Coral.',
  },

  naples: {
    cityName: 'Naples',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Bonita Springs', slug: 'bonita-springs' },
      { city: 'Marco Island',   slug: 'marco-island'   },
      { city: 'Fort Myers',     slug: 'fort-myers'     },
      { city: 'Cape Coral',     slug: 'cape-coral'     },
    ],
    otherStateCities: [
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Tampa',     slug: 'tampa'     },
      { city: 'Miami',     slug: 'miami'     },
    ],
    contextualSentence: 'Not in Naples? We serve all of Southwest Florida — Bonita Springs, Marco Island, Fort Myers, Cape Coral, Sarasota, and Tampa.',
  },

  'west-palm-beach': {
    cityName: 'West Palm Beach',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Boca Raton',     slug: 'boca-raton'     },
      { city: 'Delray Beach',   slug: 'delray-beach'   },
      { city: 'Jupiter',        slug: 'jupiter'        },
      { city: 'Palm Beach Gardens', slug: 'palm-beach-gardens' },
    ],
    otherStateCities: [
      { city: 'Miami',           slug: 'miami'           },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Orlando',         slug: 'orlando'         },
    ],
    contextualSentence: 'Not in West Palm Beach? We serve all of Palm Beach County and South Florida — Boca Raton, Delray Beach, Jupiter, Miami, and Fort Lauderdale.',
  },

  destin: {
    cityName: 'Destin',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Miramar Beach',    slug: 'miramar-beach'    },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
      { city: '30A',              slug: '30a'              },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
    ],
    otherStateCities: [
      { city: 'Pensacola',     slug: 'pensacola'     },
      { city: 'Jacksonville',  slug: 'jacksonville'  },
      { city: 'Tampa',         slug: 'tampa'         },
      { city: 'Orlando',       slug: 'orlando'       },
    ],
    contextualSentence: 'Not in Destin? We serve the entire Emerald Coast — 30A, Fort Walton Beach, Miramar Beach, Panama City Beach, and all Florida Panhandle vacation communities.',
  },

  'st-petersburg': {
    cityName: 'St. Petersburg',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Tampa',         slug: 'tampa'         },
      { city: 'Clearwater',    slug: 'clearwater'    },
      { city: 'Gulfport',      slug: 'gulfport'      },
      { city: 'St. Pete Beach', slug: 'st-pete-beach' },
    ],
    otherStateCities: [
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Miami',     slug: 'miami'     },
    ],
    contextualSentence: 'Not in St. Petersburg? We serve all of Tampa Bay — Clearwater, Gulfport, Sarasota, Tampa, Orlando, and Miami.',
  },

  clearwater: {
    cityName: 'Clearwater',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'St. Petersburg', slug: 'st-petersburg' },
      { city: 'Tampa',          slug: 'tampa'          },
      { city: 'Dunedin',        slug: 'dunedin'        },
      { city: 'Tarpon Springs', slug: 'tarpon-springs' },
    ],
    otherStateCities: [
      { city: 'Sarasota',  slug: 'sarasota'  },
      { city: 'Orlando',   slug: 'orlando'   },
      { city: 'Miami',     slug: 'miami'     },
    ],
    contextualSentence: 'Not in Clearwater? We serve all of Pinellas County — St. Petersburg, Dunedin, Tarpon Springs, Sarasota, Tampa, and Orlando.',
  },

  kissimmee: {
    cityName: 'Kissimmee',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Orlando',        slug: 'orlando'        },
      { city: 'Celebration',    slug: 'celebration'    },
      { city: 'Lake Buena Vista', slug: 'lake-buena-vista' },
      { city: 'Davenport',      slug: 'davenport'      },
    ],
    otherStateCities: [
      { city: 'Tampa',       slug: 'tampa'       },
      { city: 'Miami',       slug: 'miami'       },
      { city: 'Sarasota',    slug: 'sarasota'    },
    ],
    contextualSentence: 'Not in Kissimmee? We serve the full Central Florida vacation corridor — Orlando, Celebration, Davenport, Clermont, and Winter Garden.',
  },

  'key-west': {
    cityName: 'Key West',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Marathon',    slug: 'marathon'    },
      { city: 'Islamorada',  slug: 'islamorada'  },
      { city: 'Key Largo',   slug: 'key-largo'   },
      { city: 'Big Pine Key', slug: 'big-pine-key' },
    ],
    otherStateCities: [
      { city: 'Miami',           slug: 'miami'           },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Naples',          slug: 'naples'          },
    ],
    contextualSentence: 'Not in Key West? We serve all of Florida — Miami, Fort Lauderdale, Naples, Sarasota, Tampa, and Orlando.',
  },

  'boca-raton': {
    cityName: 'Boca Raton',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Delray Beach',   slug: 'delray-beach'   },
      { city: 'Deerfield Beach', slug: 'deerfield-beach' },
      { city: 'Boynton Beach',  slug: 'boynton-beach'  },
      { city: 'Highland Beach', slug: 'highland-beach'  },
    ],
    otherStateCities: [
      { city: 'West Palm Beach', slug: 'west-palm-beach' },
      { city: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { city: 'Miami',           slug: 'miami'           },
    ],
    contextualSentence: 'Not in Boca Raton? We serve all of Palm Beach County — West Palm Beach, Delray Beach, Deerfield Beach, Fort Lauderdale, and Miami.',
  },

  'cape-coral': {
    cityName: 'Cape Coral',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Fort Myers',     slug: 'fort-myers'    },
      { city: 'Bonita Springs', slug: 'bonita-springs' },
      { city: 'Sanibel',        slug: 'sanibel'        },
      { city: 'North Fort Myers', slug: 'north-fort-myers' },
    ],
    otherStateCities: [
      { city: 'Sarasota', slug: 'sarasota' },
      { city: 'Tampa',    slug: 'tampa'    },
      { city: 'Naples',   slug: 'naples'   },
    ],
    contextualSentence: 'Not in Cape Coral? We serve all of Southwest Florida — Fort Myers, Bonita Springs, Naples, Sarasota, and Tampa.',
  },

  'panama-city-beach': {
    cityName: 'Panama City Beach',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Destin',            slug: 'destin'            },
      { city: '30A',               slug: '30a'               },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
      { city: 'Mexico Beach',      slug: 'mexico-beach'      },
    ],
    otherStateCities: [
      { city: 'Pensacola',    slug: 'pensacola'    },
      { city: 'Tallahassee',  slug: 'tallahassee'  },
      { city: 'Jacksonville', slug: 'jacksonville' },
    ],
    contextualSentence: 'Not in Panama City Beach? We serve the full Emerald Coast — Destin, 30A, Fort Walton Beach, Pensacola, and all Panhandle vacation communities.',
  },

  '30a': {
    cityName: '30A',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Destin',            slug: 'destin'            },
      { city: 'Miramar Beach',     slug: 'miramar-beach'     },
      { city: 'Santa Rosa Beach',  slug: 'santa-rosa-beach'  },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
    ],
    otherStateCities: [
      { city: 'Pensacola',         slug: 'pensacola'         },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
      { city: 'Jacksonville',      slug: 'jacksonville'      },
    ],
    contextualSentence: 'Not on 30A? We serve the full Emerald Coast — Destin, Miramar Beach, Fort Walton Beach, and Panama City Beach.',
  },

  pensacola: {
    cityName: 'Pensacola',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Gulf Breeze',   slug: 'gulf-breeze'   },
      { city: 'Navarre',       slug: 'navarre'        },
      { city: 'Navarre Beach', slug: 'navarre-beach'  },
      { city: 'Perdido Key',   slug: 'perdido-key'    },
    ],
    otherStateCities: [
      { city: 'Destin',            slug: 'destin'            },
      { city: 'Fort Walton Beach', slug: 'fort-walton-beach' },
      { city: 'Panama City Beach', slug: 'panama-city-beach' },
    ],
    contextualSentence: 'Not in Pensacola? We serve the full Emerald Coast — Destin, Fort Walton Beach, Navarre Beach, 30A, and Panama City Beach.',
  },

  bradenton: {
    cityName: 'Bradenton',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Sarasota',        slug: 'sarasota'        },
      { city: 'Anna Maria Island', slug: 'anna-maria-island' },
      { city: 'Palmetto',        slug: 'palmetto'        },
      { city: 'Lakewood Ranch',  slug: 'lakewood-ranch'  },
    ],
    otherStateCities: [
      { city: 'Tampa',      slug: 'tampa'     },
      { city: 'Naples',     slug: 'naples'    },
      { city: 'Fort Myers', slug: 'fort-myers' },
    ],
    contextualSentence: 'Not in Bradenton? We serve all of the Gulf Coast — Sarasota, Anna Maria Island, Tampa, Naples, and Fort Myers.',
  },

  'fort-myers': {
    cityName: 'Fort Myers',
    stateSlug: 'florida',
    stateName: 'Florida',
    stateAbbr: 'FL',
    nearbyMajorCities: [
      { city: 'Cape Coral',     slug: 'cape-coral'    },
      { city: 'Bonita Springs', slug: 'bonita-springs' },
      { city: 'Estero',         slug: 'estero'         },
      { city: 'Sanibel',        slug: 'sanibel'        },
    ],
    otherStateCities: [
      { city: 'Naples',   slug: 'naples'   },
      { city: 'Sarasota', slug: 'sarasota' },
      { city: 'Tampa',    slug: 'tampa'    },
    ],
    contextualSentence: 'Not in Fort Myers? We serve all of Southwest Florida — Cape Coral, Bonita Springs, Naples, Sarasota, and Tampa.',
  },

  // ── Georgia ────────────────────────────────────────────────────────────────
  atlanta: {
    cityName: 'Atlanta',
    stateSlug: 'georgia',
    stateName: 'Georgia',
    stateAbbr: 'GA',
    nearbyMajorCities: [
      { city: 'Sandy Springs', slug: 'sandy-springs' },
      { city: 'Roswell',       slug: 'roswell'       },
      { city: 'Marietta',      slug: 'marietta'      },
      { city: 'Alpharetta',    slug: 'alpharetta'    },
    ],
    otherStateCities: [
      { city: 'Savannah', slug: 'savannah' },
      { city: 'Augusta',  slug: 'augusta'  },
    ],
    contextualSentence: 'Not in Atlanta? We serve all of Georgia — including Sandy Springs, Roswell, Savannah, Augusta, and surrounding metro communities.',
  },

  // ── North Carolina ─────────────────────────────────────────────────────────
  charlotte: {
    cityName: 'Charlotte',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Huntersville', slug: 'huntersville' },
      { city: 'Mooresville',  slug: 'mooresville'  },
      { city: 'Matthews',     slug: 'matthews'     },
      { city: 'Concord',      slug: 'concord'      },
    ],
    otherStateCities: [
      { city: 'Raleigh',      slug: 'raleigh'      },
      { city: 'Durham',       slug: 'durham'       },
      { city: 'Greensboro',   slug: 'greensboro'   },
      { city: 'Cary',         slug: 'cary'         },
      { city: 'Lake Norman',  slug: 'lake-norman'  },
    ],
    contextualSentence: 'Not in Charlotte? We serve all of North Carolina — Raleigh, Durham, Greensboro, Cary, Wilmington, Asheville, and the Outer Banks.',
  },

  raleigh: {
    cityName: 'Raleigh',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Cary',          slug: 'cary'          },
      { city: 'Apex',          slug: 'apex'          },
      { city: 'Holly Springs', slug: 'holly-springs' },
      { city: 'Durham',        slug: 'durham'        },
    ],
    otherStateCities: [
      { city: 'Charlotte',     slug: 'charlotte'     },
      { city: 'Greensboro',    slug: 'greensboro'    },
      { city: 'Wilmington',    slug: 'wilmington'    },
      { city: 'Chapel Hill',   slug: 'chapel-hill'   },
    ],
    contextualSentence: 'Not in Raleigh? We serve the full Research Triangle — Cary, Apex, Durham, Chapel Hill, Holly Springs — and all of North Carolina.',
  },

  durham: {
    cityName: 'Durham',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Raleigh',      slug: 'raleigh'     },
      { city: 'Cary',         slug: 'cary'        },
      { city: 'Chapel Hill',  slug: 'chapel-hill' },
    ],
    otherStateCities: [
      { city: 'Charlotte',    slug: 'charlotte'   },
      { city: 'Greensboro',   slug: 'greensboro'  },
      { city: 'Apex',         slug: 'apex'        },
      { city: 'Wilmington',   slug: 'wilmington'  },
    ],
    contextualSentence: 'Not in Durham? We serve the full Triangle — Raleigh, Cary, Chapel Hill, Apex — and all of North Carolina from Charlotte to the coast.',
  },

  asheville: {
    cityName: 'Asheville',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Hendersonville', slug: 'hendersonville' },
      { city: 'Boone',          slug: 'boone'          },
      { city: 'Blowing Rock',   slug: 'blowing-rock'   },
    ],
    otherStateCities: [
      { city: 'Charlotte',      slug: 'charlotte'      },
      { city: 'Raleigh',        slug: 'raleigh'        },
      { city: 'Wilmington',     slug: 'wilmington'     },
    ],
    contextualSentence: 'Not in Asheville? We serve western NC — Hendersonville, Boone, Blowing Rock — and all of North Carolina from the mountains to the coast.',
  },

  wilmington: {
    cityName: 'Wilmington',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Wrightsville Beach', slug: 'wrightsville-beach' },
      { city: 'Carolina Beach',     slug: 'carolina-beach'     },
      { city: 'Surf City',          slug: 'surf-city'          },
    ],
    otherStateCities: [
      { city: 'Charlotte',          slug: 'charlotte'          },
      { city: 'Raleigh',            slug: 'raleigh'            },
      { city: 'Outer Banks',        slug: 'outer-banks'        },
    ],
    contextualSentence: 'Not in Wilmington? We serve coastal NC — Wrightsville Beach, Carolina Beach, Surf City, the Outer Banks — and all of North Carolina.',
  },

  greensboro: {
    cityName: 'Greensboro',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Winston-Salem', slug: 'winston-salem' },
      { city: 'High Point',    slug: 'high-point'    },
      { city: 'Burlington',    slug: 'burlington'    },
    ],
    otherStateCities: [
      { city: 'Charlotte',     slug: 'charlotte'     },
      { city: 'Raleigh',       slug: 'raleigh'       },
      { city: 'Durham',        slug: 'durham'        },
    ],
    contextualSentence: 'Not in Greensboro? We serve the full Piedmont Triad — Winston-Salem, High Point, Burlington — and all of North Carolina.',
  },

  cary: {
    cityName: 'Cary',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Apex',          slug: 'apex'          },
      { city: 'Holly Springs', slug: 'holly-springs' },
      { city: 'Morrisville',   slug: 'morrisville'   },
    ],
    otherStateCities: [
      { city: 'Raleigh',       slug: 'raleigh'       },
      { city: 'Durham',        slug: 'durham'        },
      { city: 'Chapel Hill',   slug: 'chapel-hill'   },
      { city: 'Charlotte',     slug: 'charlotte'     },
    ],
    contextualSentence: 'Not in Cary? We serve the full Triangle — Raleigh, Durham, Apex, Chapel Hill, Holly Springs — and all of North Carolina.',
  },

  'winston-salem': {
    cityName: 'Winston-Salem',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Greensboro',    slug: 'greensboro'    },
      { city: 'High Point',    slug: 'high-point'    },
      { city: 'Kernersville',  slug: 'kernersville'  },
    ],
    otherStateCities: [
      { city: 'Charlotte',     slug: 'charlotte'     },
      { city: 'Raleigh',       slug: 'raleigh'       },
      { city: 'Durham',        slug: 'durham'        },
    ],
    contextualSentence: 'Not in Winston-Salem? We serve the full Piedmont Triad — Greensboro, High Point — and all of North Carolina.',
  },

  'lake-norman': {
    cityName: 'Lake Norman',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Cornelius',    slug: 'cornelius'    },
      { city: 'Mooresville',  slug: 'mooresville'  },
      { city: 'Huntersville', slug: 'huntersville' },
      { city: 'Davidson',     slug: 'davidson'     },
    ],
    otherStateCities: [
      { city: 'Charlotte',    slug: 'charlotte'    },
      { city: 'Concord',      slug: 'concord'      },
      { city: 'Raleigh',      slug: 'raleigh'      },
    ],
    contextualSentence: 'Not at Lake Norman? We serve all of greater Charlotte — Cornelius, Mooresville, Huntersville, Davidson, Concord — and all of North Carolina.',
  },

  'outer-banks': {
    cityName: 'Outer Banks',
    stateSlug: 'north-carolina',
    stateName: 'North Carolina',
    stateAbbr: 'NC',
    nearbyMajorCities: [
      { city: 'Nags Head',        slug: 'nags-head'        },
      { city: 'Kill Devil Hills', slug: 'kill-devil-hills' },
      { city: 'Duck',             slug: 'duck'             },
    ],
    otherStateCities: [
      { city: 'Wilmington',       slug: 'wilmington'       },
      { city: 'Wrightsville Beach', slug: 'wrightsville-beach' },
      { city: 'Carolina Beach',   slug: 'carolina-beach'   },
    ],
    contextualSentence: 'Not at the Outer Banks? We serve all coastal NC — Nags Head, Kill Devil Hills, Wrightsville Beach, Carolina Beach, Wilmington, and Surf City.',
  },

  // ── Colorado ───────────────────────────────────────────────────────────────
  denver: {
    cityName: 'Denver',
    stateSlug: 'colorado',
    stateName: 'Colorado',
    stateAbbr: 'CO',
    nearbyMajorCities: [
      { city: 'Aurora',     slug: 'aurora'     },
      { city: 'Lakewood',   slug: 'lakewood'   },
      { city: 'Thornton',   slug: 'thornton'   },
      { city: 'Arvada',     slug: 'arvada'     },
    ],
    otherStateCities: [
      { city: 'Colorado Springs', slug: 'colorado-springs' },
      { city: 'Boulder',          slug: 'boulder'          },
      { city: 'Fort Collins',     slug: 'fort-collins'     },
    ],
    contextualSentence: 'Not in Denver? We serve all of Colorado — including Colorado Springs, Boulder, Fort Collins, Aurora, and Front Range communities.',
  },

  // ── Tennessee ──────────────────────────────────────────────────────────────
  nashville: {
    cityName: 'Nashville',
    stateSlug: 'tennessee',
    stateName: 'Tennessee',
    stateAbbr: 'TN',
    nearbyMajorCities: [
      { city: 'Franklin',     slug: 'franklin'     },
      { city: 'Murfreesboro', slug: 'murfreesboro' },
      { city: 'Brentwood',    slug: 'brentwood'    },
      { city: 'Hendersonville', slug: 'hendersonville' },
    ],
    otherStateCities: [
      { city: 'Memphis',      slug: 'memphis'      },
      { city: 'Knoxville',    slug: 'knoxville'    },
      { city: 'Chattanooga',  slug: 'chattanooga'  },
    ],
    contextualSentence: 'Not in Nashville? We serve all of Tennessee — including Franklin, Memphis, Knoxville, Chattanooga, and surrounding Middle Tennessee.',
  },

  // ── Nevada ─────────────────────────────────────────────────────────────────
  'las-vegas': {
    cityName: 'Las Vegas',
    stateSlug: 'nevada',
    stateName: 'Nevada',
    stateAbbr: 'NV',
    nearbyMajorCities: [
      { city: 'Henderson',      slug: 'henderson'      },
      { city: 'North Las Vegas', slug: 'north-las-vegas' },
      { city: 'Summerlin',      slug: 'summerlin'      },
      { city: 'Boulder City',   slug: 'boulder-city'   },
    ],
    otherStateCities: [
      { city: 'Reno',        slug: 'reno'        },
      { city: 'Sparks',      slug: 'sparks'      },
      { city: 'Carson City', slug: 'carson-city' },
    ],
    contextualSentence: 'Not in Las Vegas? We serve all of Nevada — including Henderson, Reno, North Las Vegas, Sparks, and Carson City.',
  },

  // ── New Jersey ─────────────────────────────────────────────────────────────
  'jersey-city': {
    cityName: 'Jersey City',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Hoboken',     slug: 'hoboken'     },
      { city: 'Newark',      slug: 'newark'      },
      { city: 'Bayonne',     slug: 'bayonne'     },
      { city: 'Fort Lee',    slug: 'fort-lee'    },
    ],
    otherStateCities: [
      { city: 'Morristown', slug: 'morristown' },
      { city: 'Montclair',  slug: 'montclair'  },
      { city: 'Princeton',  slug: 'princeton'  },
    ],
    contextualSentence: 'Not in Jersey City? We serve all of New Jersey — Hoboken, Montclair, Morristown, Princeton, Cherry Hill, and the entire Garden State.',
  },

  hoboken: {
    cityName: 'Hoboken',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Jersey City', slug: 'jersey-city' },
      { city: 'Fort Lee',    slug: 'fort-lee'    },
      { city: 'Weehawken',   slug: 'weehawken'   },
      { city: 'Edgewater',   slug: 'edgewater'   },
    ],
    otherStateCities: [
      { city: 'Montclair',  slug: 'montclair'  },
      { city: 'Morristown', slug: 'morristown' },
      { city: 'Red Bank',   slug: 'red-bank'   },
    ],
    contextualSentence: 'Not in Hoboken? We serve all of New Jersey — Jersey City, Montclair, Morristown, Red Bank, Asbury Park, and the entire Garden State.',
  },

  princeton: {
    cityName: 'Princeton',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'New Brunswick', slug: 'new-brunswick' },
      { city: 'Trenton',       slug: 'trenton'       },
      { city: 'Lawrenceville', slug: 'lawrenceville' },
      { city: 'Plainsboro',    slug: 'plainsboro'    },
    ],
    otherStateCities: [
      { city: 'Cherry Hill',  slug: 'cherry-hill'  },
      { city: 'Edison',       slug: 'edison'       },
      { city: 'Morristown',   slug: 'morristown'   },
    ],
    contextualSentence: 'Not in Princeton? We serve all of Central New Jersey — Cherry Hill, Edison, New Brunswick, Morristown, and the full Garden State.',
  },

  'cherry-hill': {
    cityName: 'Cherry Hill',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Haddonfield',  slug: 'haddonfield'  },
      { city: 'Moorestown',   slug: 'moorestown'   },
      { city: 'Mount Laurel', slug: 'mount-laurel' },
      { city: 'Marlton',      slug: 'marlton'      },
    ],
    otherStateCities: [
      { city: 'Princeton',    slug: 'princeton'    },
      { city: 'Cape May',     slug: 'cape-may'     },
      { city: 'Ocean City',   slug: 'ocean-city'   },
    ],
    contextualSentence: 'Not in Cherry Hill? We serve all of South Jersey — Haddonfield, Moorestown, Cape May, Ocean City, Princeton, and beyond.',
  },

  edison: {
    cityName: 'Edison',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'New Brunswick', slug: 'new-brunswick' },
      { city: 'Woodbridge',    slug: 'woodbridge'    },
      { city: 'Piscataway',    slug: 'piscataway'    },
      { city: 'Metuchen',      slug: 'metuchen'      },
    ],
    otherStateCities: [
      { city: 'Princeton',    slug: 'princeton'    },
      { city: 'Bridgewater',  slug: 'bridgewater'  },
      { city: 'Morristown',   slug: 'morristown'   },
    ],
    contextualSentence: 'Not in Edison? We serve all of Central New Jersey — New Brunswick, Princeton, Bridgewater, Morristown, and the full Garden State.',
  },

  morristown: {
    cityName: 'Morristown',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Summit',    slug: 'summit'    },
      { city: 'Chatham',   slug: 'chatham'   },
      { city: 'Madison',   slug: 'madison'   },
      { city: 'Parsippany', slug: 'parsippany' },
    ],
    otherStateCities: [
      { city: 'Montclair',   slug: 'montclair'   },
      { city: 'Jersey City', slug: 'jersey-city' },
      { city: 'Red Bank',    slug: 'red-bank'    },
    ],
    contextualSentence: 'Not in Morristown? We serve all of Morris County and greater New Jersey — Summit, Chatham, Montclair, Jersey City, and the full Garden State.',
  },

  montclair: {
    cityName: 'Montclair',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Bloomfield',   slug: 'bloomfield'   },
      { city: 'Glen Ridge',   slug: 'glen-ridge'   },
      { city: 'Verona',       slug: 'verona'       },
      { city: 'West Orange',  slug: 'west-orange'  },
    ],
    otherStateCities: [
      { city: 'Morristown',  slug: 'morristown'  },
      { city: 'Jersey City', slug: 'jersey-city' },
      { city: 'Hoboken',     slug: 'hoboken'     },
    ],
    contextualSentence: 'Not in Montclair? We serve all of Essex County and greater New Jersey — Morristown, Hoboken, Jersey City, and the full Garden State.',
  },

  'asbury-park': {
    cityName: 'Asbury Park',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Long Branch',     slug: 'long-branch'     },
      { city: 'Red Bank',        slug: 'red-bank'        },
      { city: 'Belmar',          slug: 'belmar'          },
      { city: 'Ocean Grove',     slug: 'ocean-grove'     },
    ],
    otherStateCities: [
      { city: 'Point Pleasant', slug: 'point-pleasant' },
      { city: 'Cape May',       slug: 'cape-may'       },
      { city: 'Ocean City',     slug: 'ocean-city'     },
    ],
    contextualSentence: 'Not in Asbury Park? We serve the full Jersey Shore — Long Branch, Red Bank, Belmar, Point Pleasant, Cape May, and all Shore communities.',
  },

  'cape-may': {
    cityName: 'Cape May',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Stone Harbor',   slug: 'stone-harbor'   },
      { city: 'Avalon',         slug: 'avalon'         },
      { city: 'Wildwood',       slug: 'wildwood'       },
      { city: 'Sea Isle City',  slug: 'sea-isle-city'  },
    ],
    otherStateCities: [
      { city: 'Ocean City',   slug: 'ocean-city'   },
      { city: 'Cherry Hill',  slug: 'cherry-hill'  },
      { city: 'Asbury Park',  slug: 'asbury-park'  },
    ],
    contextualSentence: 'Not in Cape May? We serve all of South Jersey Shore — Stone Harbor, Avalon, Wildwood, Sea Isle City, Ocean City, and Cherry Hill.',
  },

  'red-bank': {
    cityName: 'Red Bank',
    stateSlug: 'new-jersey',
    stateName: 'New Jersey',
    stateAbbr: 'NJ',
    nearbyMajorCities: [
      { city: 'Rumson',         slug: 'rumson'         },
      { city: 'Little Silver',  slug: 'little-silver'  },
      { city: 'Middletown',     slug: 'middletown'     },
      { city: 'Fair Haven',     slug: 'fair-haven'     },
    ],
    otherStateCities: [
      { city: 'Asbury Park',  slug: 'asbury-park'  },
      { city: 'Morristown',   slug: 'morristown'   },
      { city: 'Princeton',    slug: 'princeton'    },
    ],
    contextualSentence: 'Not in Red Bank? We serve all of Monmouth County and greater New Jersey — Asbury Park, Long Branch, Middletown, Morristown, and the full Garden State.',
  },
}

// ── Helper functions ──────────────────────────────────────────────────────────

/** Returns state linking data, or a minimal fallback for states not yet in the map. */
export function getStateLinkData(stateSlug) {
  return STATE_LINK_DATA[stateSlug] || null
}

/** Returns city linking data, or null if the city isn't mapped yet. */
export function getCityLinkData(citySlug) {
  return CITY_LINK_DATA[citySlug] || null
}

/** Returns featured cities for a state (top 6), used in StateFeaturedCities. */
export function getFeaturedCities(stateSlug) {
  return STATE_LINK_DATA[stateSlug]?.featuredCities || []
}

/** Returns secondary cities for a state, used in expanded city grids. */
export function getSecondaryCities(stateSlug) {
  return STATE_LINK_DATA[stateSlug]?.secondaryCities || []
}

/** Returns all major cities in a state except the current one — for ExploreStateSection. */
export function getOtherMajorCities(stateSlug, excludeCitySlug) {
  const featured = STATE_LINK_DATA[stateSlug]?.featuredCities || []
  return featured.filter(c => c.slug !== excludeCitySlug).slice(0, 5)
}
