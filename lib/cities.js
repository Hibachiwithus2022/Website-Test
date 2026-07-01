// ─── Master city/state data ───────────────────────────────────────────────────
// Add any new city here and it will automatically appear in grids + generate
// a dynamic city page at /locations/[state-slug]/[city-slug]

export const FEATURED_CITIES = [
  { city: 'Dallas',        state: 'Texas',          slug: 'dallas',        stateSlug: 'texas',          pop: '1.3M+' },
  { city: 'Houston',       state: 'Texas',          slug: 'houston',       stateSlug: 'texas',          pop: '2.3M+' },
  { city: 'Phoenix',       state: 'Arizona',        slug: 'phoenix',       stateSlug: 'arizona',        pop: '1.6M+' },
  { city: 'Atlanta',       state: 'Georgia',        slug: 'atlanta',       stateSlug: 'georgia',        pop: '500K+' },
  { city: 'Orlando',       state: 'Florida',        slug: 'orlando',       stateSlug: 'florida',        pop: '300K+' },
  { city: 'Charlotte',     state: 'North Carolina', slug: 'charlotte',     stateSlug: 'north-carolina', pop: '900K+' },
  { city: 'Austin',        state: 'Texas',          slug: 'austin',        stateSlug: 'texas',          pop: '960K+' },
  { city: 'Denver',        state: 'Colorado',       slug: 'denver',        stateSlug: 'colorado',       pop: '700K+' },
  { city: 'Nashville',     state: 'Tennessee',      slug: 'nashville',     stateSlug: 'tennessee',      pop: '700K+' },
  { city: 'Las Vegas',     state: 'Nevada',         slug: 'las-vegas',     stateSlug: 'nevada',         pop: '650K+' },
  { city: 'San Antonio',   state: 'Texas',          slug: 'san-antonio',   stateSlug: 'texas',          pop: '1.4M+' },
  { city: 'Jacksonville',  state: 'Florida',        slug: 'jacksonville',  stateSlug: 'florida',        pop: '950K+' },
  { city: 'Washington, DC', state: 'Washington, DC', slug: 'washington-dc', stateSlug: 'washington-dc',  pop: '700K+' },
]

export const ALL_STATES = [
  { state: 'Alabama',        slug: 'alabama' },
  { state: 'Arizona',        slug: 'arizona' },
  { state: 'Arkansas',       slug: 'arkansas' },
  { state: 'California',     slug: 'california' },
  { state: 'Colorado',       slug: 'colorado' },
  { state: 'Connecticut',    slug: 'connecticut' },
  { state: 'Delaware',       slug: 'delaware' },
  { state: 'Florida',        slug: 'florida' },
  { state: 'Georgia',        slug: 'georgia' },
  { state: 'Idaho',          slug: 'idaho' },
  { state: 'Illinois',       slug: 'illinois' },
  { state: 'Indiana',        slug: 'indiana' },
  { state: 'Iowa',           slug: 'iowa' },
  { state: 'Kansas',         slug: 'kansas' },
  { state: 'Kentucky',       slug: 'kentucky' },
  { state: 'Louisiana',      slug: 'louisiana' },
  { state: 'Maine',          slug: 'maine' },
  { state: 'Maryland',       slug: 'maryland' },
  { state: 'Massachusetts',  slug: 'massachusetts' },
  { state: 'Michigan',       slug: 'michigan' },
  { state: 'Minnesota',      slug: 'minnesota' },
  { state: 'Mississippi',    slug: 'mississippi' },
  { state: 'Missouri',       slug: 'missouri' },
  { state: 'Montana',        slug: 'montana' },
  { state: 'Nebraska',       slug: 'nebraska' },
  { state: 'Nevada',         slug: 'nevada' },
  { state: 'New Hampshire',  slug: 'new-hampshire' },
  { state: 'New Jersey',     slug: 'new-jersey' },
  { state: 'New Mexico',     slug: 'new-mexico' },
  { state: 'New York',       slug: 'new-york' },
  { state: 'North Carolina', slug: 'north-carolina' },
  { state: 'North Dakota',   slug: 'north-dakota' },
  { state: 'Ohio',           slug: 'ohio' },
  { state: 'Oklahoma',       slug: 'oklahoma' },
  { state: 'Oregon',         slug: 'oregon' },
  { state: 'Pennsylvania',   slug: 'pennsylvania' },
  { state: 'Rhode Island',   slug: 'rhode-island' },
  { state: 'South Carolina', slug: 'south-carolina' },
  { state: 'South Dakota',   slug: 'south-dakota' },
  { state: 'Tennessee',      slug: 'tennessee' },
  { state: 'Texas',          slug: 'texas' },
  { state: 'Utah',           slug: 'utah' },
  { state: 'Vermont',        slug: 'vermont' },
  { state: 'Virginia',       slug: 'virginia' },
  { state: 'Washington',     slug: 'washington' },
  { state: 'West Virginia',  slug: 'west-virginia' },
  { state: 'Wisconsin',      slug: 'wisconsin' },
  { state: 'Wyoming',        slug: 'wyoming' },
  { state: 'Washington, DC', slug: 'washington-dc' },
]

export const CITIES_BY_STATE = {
  // ── South ──────────────────────────────────────────────────────────────────
  texas:            ['Houston','Dallas','Austin','San Antonio','Fort Worth','The Woodlands','Katy','Sugar Land','Pearland','Frisco','League City','Cypress','Georgetown','New Braunfels','Corpus Christi','Galveston','Waco','Temple','Beaumont','Victoria'],
  florida: [
    // Major markets
    'Miami','Orlando','Tampa','Jacksonville','Fort Lauderdale',
    // Beach & vacation
    'Sarasota','Naples','West Palm Beach','Destin','St. Petersburg',
    // Growth markets
    'Key West','Cape Coral','Boca Raton','Panama City Beach','30A',
    // Panhandle
    'Pensacola','Fort Walton Beach','Miramar Beach',
    // Northeast FL
    'St. Augustine','Ponte Vedra Beach','Palm Coast','Daytona Beach','Amelia Island',
    // Central FL
    'Kissimmee','Davenport','Clermont','Winter Garden','Lake Buena Vista',
    // Tampa Bay
    'Clearwater','Wesley Chapel','Riverview','Bradenton',
    // Southwest FL
    'Fort Myers','Bonita Springs','Marco Island','Venice',
    // South FL
    'Coral Gables','Hollywood','Aventura','Delray Beach','Pompano Beach',
    'Deerfield Beach','Jupiter','Lake Worth',
    // Others
    'Gainesville','Tallahassee','Kendall','Port St. Lucie',
  ],
  georgia:          ['Atlanta','Savannah','Augusta','Columbus','Athens','Marietta','Alpharetta','Macon'],
  'north-carolina': [
    // Major markets
    'Charlotte','Raleigh','Durham','Greensboro','Winston-Salem',
    // Triangle suburbs
    'Cary','Apex','Holly Springs','Chapel Hill',
    // Charlotte metro
    'Huntersville','Mooresville','Matthews','Concord','Lake Norman',
    // Coastal & tourism
    'Asheville','Outer Banks','Wilmington','Wrightsville Beach','Carolina Beach',
    'Boone','Blowing Rock','Nags Head','Kill Devil Hills','Surf City',
    // Military
    'Fayetteville','Jacksonville',
    // Long tail
    'Pinehurst','High Point','New Bern','Hendersonville','Hickory',
  ],
  'south-carolina': ['Charleston','Myrtle Beach','Hilton Head Island','Columbia','Greenville'],
  tennessee:        ['Nashville','Memphis','Knoxville','Chattanooga','Pigeon Forge','Franklin'],
  louisiana:        ['New Orleans','Baton Rouge','Lafayette','Shreveport','Lake Charles'],
  virginia:         ['Virginia Beach','Richmond','Norfolk','Chesapeake','Alexandria','Fredericksburg','Newport News','Suffolk'],
  alabama:          ['Birmingham','Huntsville','Montgomery','Mobile','Auburn'],
  oklahoma:         ['Oklahoma City','Tulsa','Broken Bow','Norman'],
  mississippi:      ['Jackson','Biloxi','Gulfport','Hattiesburg'],
  kentucky:         ['Louisville','Lexington','Bowling Green'],
  maryland:         ['Baltimore','Annapolis','Ocean City','Frederick'],
  'washington-dc':  ['Washington, DC'],

  // ── Northeast ──────────────────────────────────────────────────────────────
  'new-york': [
    // Tier 1 — NYC Metro
    'New York City','Brooklyn','Queens','The Bronx','Staten Island','Flushing',
    // Tier 1 — Major Markets
    'White Plains','Buffalo','Rochester','Albany',
    // Tier 2 — Westchester Affluent
    'Scarsdale','Bronxville','Rye','Chappaqua','New Rochelle','Larchmont','Tarrytown','Yonkers',
    // Tier 2 — Long Island Affluent
    'Great Neck','Manhasset','Garden City','Huntington','Smithtown','Port Washington','Commack','Bay Shore','Babylon','Rockville Centre','Oyster Bay','Long Beach','Hempstead',
    // Tier 2 — Hamptons / East End
    'Southampton','East Hampton','Montauk','Shelter Island',
    // Tier 3 — Hudson Valley / Catskills / Adirondacks
    'Rhinebeck','New Paltz','Kingston','Woodstock','Poughkeepsie','Beacon','Newburgh','Cold Spring','Lake George','Lake Placid','Saratoga Springs','Watkins Glen','Ithaca',
    // Tier 4 — Western NY / Capital Region
    'Troy','Syracuse','Niagara Falls',
  ],
  'new-jersey':     [
    'Jersey City','Hoboken','Princeton','Cherry Hill','Edison','Morristown',
    'Montclair','Summit','Westfield','Ridgewood','Short Hills',
    'Livingston','Chatham','Bridgewater','Marlboro','Holmdel',
    'Asbury Park','Point Pleasant','Belmar','Long Branch',
    'Ocean City','Wildwood','Sea Isle City',
    'Cape May','Stone Harbor','Avalon','Spring Lake',
    'Haddonfield','Moorestown','Mount Laurel','Red Bank',
    'Hackensack','Paramus','Fort Lee','Toms River',
    'New Brunswick','Middletown',
  ],
  pennsylvania:     ['Philadelphia','Pittsburgh','Allentown','Harrisburg','Lancaster'],
  massachusetts:    ['Boston','Cape Cod','Worcester','Springfield','Salem'],
  connecticut:      ['Hartford','Greenwich','Stamford','New Haven'],
  'rhode-island':   ['Providence','Newport','Warwick'],
  delaware: [
    // Northern DE — Corporate / Brandywine Valley
    'Wilmington','Newark','Hockessin','Greenville','Pike Creek','New Castle','Claymont',
    // Central DE — Capital / Military / Suburban
    'Dover','Bear','Middletown','Smyrna',
    // Coastal DE — Beach / Vacation Rental
    'Rehoboth Beach','Lewes','Bethany Beach','Dewey Beach','Fenwick Island',
    'Ocean View','Milford','Georgetown','Seaford','Milton','Selbyville',
  ],
  'new-hampshire':  ['Manchester','Concord'],

  // ── West ───────────────────────────────────────────────────────────────────
  california:       ['Los Angeles','San Diego','Orange County','Sacramento','Bakersfield','Fresno','Santa Clarita','Thousand Oaks','San Jose'],
  nevada:           ['Las Vegas','Henderson','North Las Vegas','Reno','Summerlin'],
  arizona:          ['Scottsdale','Phoenix','Chandler','Gilbert','Glendale','Tucson','Sedona','Queen Creek','Flagstaff'],
  colorado:         ['Denver','Colorado Springs','Boulder','Fort Collins','Lakewood'],
  washington:       ['Seattle','Tacoma','Spokane','Bellevue','Vancouver'],
  oregon: [
    // Theme 0 — Portland Urban Core
    'Portland',
    // Theme 1 — Portland Corporate / Tech
    'Beaverton','Hillsboro',
    // Theme 2 — Portland Affluent Suburb
    'Lake Oswego',
    // Theme 3 — Willamette Valley
    'Salem','Eugene','McMinnville',
    // Theme 4 — Oregon Coast
    'Cannon Beach','Lincoln City',
    // Theme 5 — Central Oregon Mountain
    'Bend',
  ],
  utah:             ['Salt Lake City','Provo','Park City','St. George','Ogden'],

  // ── Midwest ────────────────────────────────────────────────────────────────
  illinois:         ['Chicago','Naperville','Aurora','Schaumburg','Rockford','Peoria'],
  michigan:         ['Detroit','Grand Rapids','Ann Arbor','Lansing','Troy'],
  ohio:             ['Columbus','Cleveland','Cincinnati','Dayton','Toledo'],
  missouri:         ['St. Louis','Kansas City','Springfield','Columbia'],
  minnesota:        ['Minneapolis','St. Paul','Rochester','Maple Grove'],
  indiana:          ['Indianapolis','Fort Wayne','Carmel','South Bend'],
  kansas:           ['Wichita','Overland Park','Topeka'],
  iowa:             ['Des Moines','Cedar Rapids','Iowa City'],
}

export function cityToSlug(city) {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function slugToCity(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}
