import os, re

REGIONS = {
  "South": {
    "Texas": {
      "emoji": "🤠", "blurb": "From Houston to the Hill Country, Hibachi With Us serves every corner of the Lone Star State. Book your private teppanyaki chef today.",
      "cities": [
        ("Houston", "Our home base. Serving the greater Houston metro — Heights, Montrose, Midtown, Sugar Land, and beyond."),
        ("Dallas", "DFW's go-to private hibachi chef — serving Uptown, Plano, Frisco, McKinney, and everywhere between."),
        ("Austin", "Live Music Capital backyard hibachi — Hill Country vibes with teppanyaki flair year-round."),
        ("San Antonio", "Alamo City hibachi — from the Pearl District to the Hill Country border towns."),
        ("The Woodlands", "Upscale master-planned community north of Houston — perfect for neighborhood and estate events."),
        ("Katy", "West Houston suburb with spacious lots — we set up the full hibachi show for your neighborhood."),
        ("Sugar Land", "Fort Bend County's premier suburb — large family gatherings and corporate events welcome."),
        ("Pearland", "Fast-growing Houston suburb — we cover Pearland, Friendswood, and the Clear Lake area."),
        ("Frisco", "Dallas-area luxury suburb — perfect for upscale backyard parties and corporate team events."),
        ("League City", "Southeast Houston near the bay — coastal breeze outdoor events done right."),
        ("Cypress", "Northwest Houston community with large lots — perfect for big hibachi setups."),
        ("Georgetown", "Hill Country city just north of Austin — intimate and mid-size events our specialty."),
        ("New Braunfels", "Texas Hill Country gem — river events and ranch-style gatherings are a specialty."),
        ("Corpus Christi", "Coastal Bend city — beachside hibachi with fresh Gulf seafood upgrades available."),
        ("Galveston", "Gulf island city — beach house and vacation rental events on the water."),
        ("Waco", "Central Texas hub — mid-size city events between Dallas and Austin."),
        ("Temple", "Central Texas serving the Bell County area including Killeen and Belton."),
        ("Beaumont", "Southeast Texas near Louisiana — serving the Golden Triangle region."),
        ("Driftwood", "Hill Country escape southwest of Austin — vineyard and ranch estate events."),
        ("Victoria", "Crossroads of South Texas — serving the Coastal Bend and surrounding communities."),
      ]
    },
    "Florida": {
      "emoji": "🌊", "blurb": "Sunshine State hibachi from the Panhandle to South Florida. Private teppanyaki chefs serving Florida's best cities.",
      "cities": [
        ("Orlando", "Theme park capital — family reunions, corporate retreats, and private backyard events."),
        ("Miami", "Magic City luxury poolside hibachi — Brickell, Coral Gables, and Miami Beach."),
        ("Tampa", "Tampa Bay area — South Tampa, Wesley Chapel, Brandon, and Clearwater."),
        ("Jacksonville", "Florida's largest city — Riverside, Ponte Vedra, Fleming Island, and the Beaches."),
        ("Fort Lauderdale", "Waterfront Broward County events — canal-side and backyard hibachi experiences."),
        ("West Palm Beach", "Palm Beach County — Wellington estates to Palm Beach island luxury events."),
        ("Destin", "Emerald Coast — beach house and resort events on Florida's pristine Panhandle."),
        ("30A", "Scenic Hwy 30A — Rosemary Beach, Seaside, and WaterColor vacation rental events."),
        ("Daytona Beach", "Volusia County — Daytona, Port Orange, Ormond Beach, and New Smyrna."),
        ("Fort Myers", "Southwest Florida — Cape Coral, Bonita Springs, and Naples corridor events."),
        ("Gainesville", "Home of the Gators — graduation parties, campus events, and community gatherings."),
        ("Tallahassee", "Florida's capital — FSU, FAMU events and North Florida private gatherings."),
        ("Pensacola", "Panhandle coastal events — Pensacola Beach and Gulf Breeze shoreline."),
        ("Sarasota", "Gulf Coast culture — Sarasota, Bradenton, and Siesta Key vacation homes."),
        ("Kendall", "Miami-Dade suburbs — large residential lots for big backyard hibachi setups."),
      ]
    },
    "Georgia": {
      "emoji": "🍑", "blurb": "Peach State private hibachi from Atlanta to Savannah. Book your chef for any Georgia event.",
      "cities": [
        ("Atlanta", "ATL hibachi — Buckhead estates, Decatur neighborhoods, and Alpharetta corporate events."),
        ("Savannah", "Historic coastal city — garden district homes and destination wedding after-parties."),
        ("Augusta", "Home of the Masters — serving Augusta and the CSRA year-round."),
        ("Columbus", "Chattahoochee Valley — Columbus, Phenix City, and Fort Moore communities."),
        ("Athens", "UGA Bulldog territory — graduation parties, tailgates, and neighborhood events."),
        ("Marietta", "Historic Cobb County northwest of Atlanta — suburban backyard events welcome."),
        ("Alpharetta", "Upscale Atlanta tech suburb — luxury home and corporate team events."),
        ("Macon", "Heart of Georgia — mid-size events, family reunions, and community gatherings."),
      ]
    },
    "North Carolina": {
      "emoji": "🌲", "blurb": "Tar Heel State hibachi from the Outer Banks to the Smoky Mountains. Private chefs serving NC cities.",
      "cities": [
        ("Charlotte", "Queen City hibachi — SouthPark, Ballantyne, and Lake Norman lakefront events."),
        ("Raleigh", "Research Triangle — serving Raleigh, Durham, Cary, and Chapel Hill communities."),
        ("Asheville", "Blue Ridge Mountain retreat — cabin events and Biltmore Estate area gatherings."),
        ("Outer Banks", "OBX beach homes — deck hibachi with Atlantic Ocean views year-round."),
        ("Wilmington", "Port City events — Wrightsville Beach and greater Wilmington area."),
        ("Greensboro", "Triad city — Greensboro, Winston-Salem, and High Point area events."),
        ("Fayetteville", "Fort Liberty military community — proudly serving our service members."),
        ("Durham", "Bull City — Duke campus area and American Underground tech events."),
        ("Hickory", "Catawba Valley serving the western Piedmont and Lake Norman's north shore."),
      ]
    },
    "South Carolina": {
      "emoji": "🌴", "blurb": "Palmetto State hibachi from Hilton Head to Myrtle Beach. Private teppanyaki chefs for SC events.",
      "cities": [
        ("Charleston", "Holy City hibachi — downtown Charleston, Mount Pleasant, and James Island."),
        ("Myrtle Beach", "Grand Strand vacation events — beach houses from North Myrtle to Pawleys Island."),
        ("Hilton Head Island", "Luxury island resort events — plantation homes and oceanfront villas."),
        ("Columbia", "State capital — Gamecock celebrations and midlands community events."),
        ("Greenville", "Upstate SC's fastest-growing city — Falls Park area and corporate events."),
      ]
    },
    "Tennessee": {
      "emoji": "🎵", "blurb": "Volunteer State hibachi from Nashville to the Smokies. Private chefs for Tennessee events.",
      "cities": [
        ("Nashville", "Music City hibachi — Brentwood estates, East Nashville, and Franklin countryside."),
        ("Memphis", "Bluff City events — Germantown to East Memphis and Collierville."),
        ("Knoxville", "Vol Nation celebrations — UT parties and East Tennessee family gatherings."),
        ("Chattanooga", "River city at Lookout Mountain — rooftop and patio events welcome."),
        ("Pigeon Forge", "Smoky Mountain cabins — deck hibachi with mountain views year-round."),
        ("Franklin", "Affluent Nashville suburb — estate events and corporate retreats in the countryside."),
      ]
    },
    "Louisiana": {
      "emoji": "🎷", "blurb": "Bayou State hibachi from New Orleans to Shreveport. Private teppanyaki chefs in Louisiana.",
      "cities": [
        ("New Orleans", "NOLA courtyard and garden district events — hibachi meets Creole culture."),
        ("Baton Rouge", "Tiger State events — LSU after-parties and Capital Region family gatherings."),
        ("Lafayette", "Cajun Country — Acadiana community gatherings with Southern hospitality."),
        ("Shreveport", "Northwest Louisiana — Shreveport, Bossier City, and the Ark-La-Tex region."),
        ("Lake Charles", "Southwest Louisiana — I-10 corridor and casino resort events."),
      ]
    },
    "Virginia": {
      "emoji": "🦅", "blurb": "Old Dominion hibachi from Virginia Beach to Northern Virginia. Private chefs for VA events.",
      "cities": [
        ("Virginia Beach", "Hampton Roads oceanfront — beachside events and military family celebrations."),
        ("Richmond", "RVA hibachi — The Fan, Short Pump, and the craft culture crowd."),
        ("Norfolk", "Naval Station Norfolk — serving military families and Ghent neighborhood events."),
        ("Chesapeake", "South Hampton Roads suburbs — large lots perfect for big backyard events."),
        ("Alexandria", "Old Town rooftops and Northern VA homes just across the Potomac from DC."),
        ("Fredericksburg", "Historic city between DC and Richmond — serving the 95 corridor."),
        ("Newport News", "Hampton Roads Peninsula — Newport News, Hampton, and York County."),
        ("Suffolk", "Suburban haven — spacious properties ideal for hibachi grill setup."),
      ]
    },
    "Alabama": {
      "emoji": "🏈", "blurb": "Heart of Dixie hibachi from Birmingham to Mobile. Private teppanyaki chefs across Alabama.",
      "cities": [
        ("Birmingham", "Magic City events — Mountain Brook, Hoover, and the Lakeview District."),
        ("Huntsville", "Rocket City tech events — NASA and aerospace community corporate gatherings."),
        ("Montgomery", "Capital city — River Region family reunions and civic celebrations."),
        ("Mobile", "Port City on Mobile Bay — Gulf Coast events and Mardi Gras celebrations."),
        ("Auburn", "War Eagle country — Auburn University game day parties and Lee County events."),
      ]
    },
    "Oklahoma": {
      "emoji": "🌻", "blurb": "Sooner State hibachi from OKC to Broken Bow. Private chefs for Oklahoma events.",
      "cities": [
        ("Oklahoma City", "OKC metro — Edmond, Moore, and Bricktown entertainment district events."),
        ("Tulsa", "Oil Capital hibachi — Utica Square, Midtown, and South Tulsa neighborhoods."),
        ("Broken Bow", "Ouachita Mountain cabins — lakeside and treehouse deck hibachi events."),
        ("Norman", "OU Sooner celebrations — Greek life events and campus community parties."),
      ]
    },
    "Mississippi": {
      "emoji": "🎸", "blurb": "Magnolia State hibachi from Jackson to Biloxi. Private teppanyaki chefs for MS events.",
      "cities": [
        ("Jackson", "Capitol City events — Fondren, Ridgeland, and Madison County communities."),
        ("Biloxi", "Gulf Coast casino resort city — beachside events and resort venue parties."),
        ("Gulfport", "Harrison County Gulf Coast hub — serving the Mississippi Sound shoreline."),
        ("Hattiesburg", "Hub City serving USM community, Oak Grove, and the Pine Belt region."),
      ]
    },
    "Kentucky": {
      "emoji": "🐎", "blurb": "Bluegrass State hibachi from Louisville to Lexington. Private chefs for Kentucky events.",
      "cities": [
        ("Louisville", "Derby City — Churchill Downs season, bourbon estates, and NuLu district events."),
        ("Lexington", "Horse capital of the world — Bluegrass estate events and UK Wildcat celebrations."),
        ("Bowling Green", "South-central KY — WKU campus events and Barren River lake community parties."),
      ]
    },
    "Maryland": {
      "emoji": "🦀", "blurb": "Old Line State hibachi from Baltimore to Ocean City. Private chefs for Maryland and DC area events.",
      "cities": [
        ("Baltimore", "Charm City — Federal Hill, Canton, and Roland Park neighborhood events."),
        ("Annapolis", "Waterfront capital — dock-side events and Naval Academy community gatherings."),
        ("Ocean City", "Beach resort — boardwalk rental homes and summer vacation house events."),
        ("Washington DC", "DMV hibachi — Capitol Hill rooftops, Georgetown gardens, and Embassy Row estates."),
        ("Frederick", "Western Maryland city serving Frederick County and the I-270 corridor."),
      ]
    },
  },
  "Northeast": {
    "New York": {
      "emoji": "🗽", "blurb": "Empire State hibachi from Long Island to the Finger Lakes. Private teppanyaki chefs across NY.",
      "cities": [
        ("Long Island", "Nassau and Suffolk County events — from Great Neck to the Hamptons and Fire Island."),
        ("The Hamptons", "East End luxury — Southampton, East Hampton, Bridgehampton, and Montauk estates."),
        ("Westchester County", "NYC suburb — Scarsdale, White Plains, Rye, and Hudson Valley estate events."),
        ("Rochester", "Flower City — Pittsford, Brighton, and the greater Finger Lakes region."),
        ("Buffalo", "Bills country — tailgate-style backyard events and Western NY family reunions."),
        ("Syracuse", "Central NY hub — serving Syracuse, Fayetteville, and the CNY region."),
      ]
    },
    "New Jersey": {
      "emoji": "🏖️", "blurb": "Garden State hibachi from the Jersey Shore to the Hudson. Private chefs serving NJ events.",
      "cities": [
        ("Jersey Shore", "Shore towns from Asbury Park to Stone Harbor — beach house and boardwalk events."),
        ("Jersey City", "NYC-adjacent rooftop and terrace events with the Manhattan skyline backdrop."),
        ("Hoboken", "Waterfront rooftop parties and brownstone garden events across from NYC."),
        ("Princeton", "University town — faculty gatherings, campus celebrations, and Mercer County."),
        ("Cherry Hill", "South Jersey suburb of Philadelphia — Camden County residential communities."),
        ("Morristown", "Historic Morris County — affluent Morris Plains and surrounding communities."),
      ]
    },
    "Pennsylvania": {
      "emoji": "🔔", "blurb": "Keystone State hibachi from Philadelphia to Pittsburgh. Private chefs for PA events.",
      "cities": [
        ("Philadelphia", "Philly metro — Main Line estates, South Jersey suburbs, and Center City rooftops."),
        ("Pittsburgh", "Steel City — Sewickley, Fox Chapel, and South Hills community events."),
        ("Allentown", "Lehigh Valley — Allentown, Bethlehem, Easton, and the Poconos."),
        ("Harrisburg", "State capital — Mechanicsburg, Camp Hill, and Hershey area events."),
        ("Lancaster", "Pennsylvania Dutch Country — farm estate events and city community gatherings."),
      ]
    },
    "Massachusetts": {
      "emoji": "🦞", "blurb": "Bay State hibachi from Boston to Cape Cod. Private teppanyaki chefs for MA events.",
      "cities": [
        ("Boston", "Beantown events — Back Bay brownstones, Newton, and Brookline suburban estates."),
        ("Cape Cod", "Cape Cod and the Islands — Hyannis, Chatham, and Nantucket vacation homes."),
        ("Worcester", "Heart of the Commonwealth — Central MA events from Worcester to Shrewsbury."),
        ("Springfield", "Pioneer Valley — Springfield, Northampton, and the Five College area."),
        ("Salem", "North Shore — Salem, Newburyport, Marblehead, and Gloucester waterfront events."),
      ]
    },
    "Connecticut": {
      "emoji": "⚓", "blurb": "Constitution State hibachi from Greenwich to Hartford. Private chefs for Connecticut events.",
      "cities": [
        ("Hartford", "Insurance Capital — Hartford, West Hartford, Glastonbury, and greater CT events."),
        ("Greenwich", "Gold Coast Fairfield County — luxury hibachi for Connecticut's most exclusive homes."),
        ("Stamford", "Financial hub of Fairfield County — corporate team dinners and executive events."),
        ("New Haven", "Elm City — Yale University events and New Haven community gatherings."),
      ]
    },
    "Rhode Island": {
      "emoji": "🚢", "blurb": "Ocean State hibachi from Providence to Newport. Private chefs for Rhode Island events.",
      "cities": [
        ("Providence", "Rhode Island events — East Side Victorians to Newport mansion parties."),
        ("Newport", "Gilded Age mansions and yacht club events — America's premier summer resort."),
        ("Warwick", "Kent County events serving Warwick, Cranston, and the greater Providence metro."),
      ]
    },
    "Delaware": {
      "emoji": "🏛️", "blurb": "First State hibachi from Wilmington to Rehoboth Beach. Private chefs for Delaware events.",
      "cities": [
        ("Wilmington", "First State events — Wilmington, Newark, and the Brandywine Valley communities."),
        ("Rehoboth Beach", "Delaware's beach resort — vacation homes and summer season events."),
        ("Dover", "State capital serving Kent County and central Delaware communities."),
      ]
    },
    "New Hampshire": {
      "emoji": "🍂", "blurb": "Granite State hibachi from Manchester to the Lakes Region. Private chefs for NH events.",
      "cities": [
        ("Manchester", "Queen City — serving Manchester, Nashua, and southern New Hampshire."),
        ("Concord", "State capital serving Merrimack County and the I-93 corridor communities."),
        ("Lakes Region", "Lake Winnipesaukee vacation homes and Laconia area waterfront events."),
      ]
    },
  },
  "West": {
    "California": {
      "emoji": "☀️", "blurb": "Golden State hibachi from LA to the Bay Area. Private teppanyaki chefs across California.",
      "cities": [
        ("Los Angeles", "LA County — Beverly Hills, Malibu, Pasadena, and the San Fernando Valley."),
        ("San Diego", "America's Finest City — La Jolla, Coronado, Del Mar, and Rancho Santa Fe."),
        ("Orange County", "OC events — Newport Beach, Laguna, Irvine, Anaheim, and Huntington Beach."),
        ("Sacramento", "Capital city — El Dorado Hills, Folsom, Roseville, and Elk Grove."),
        ("Bakersfield", "Central Valley ranch events — large community gatherings in Kern County."),
        ("Fresno", "San Joaquin Valley — Fresno, Clovis, and Central CA communities."),
        ("Santa Clarita", "SCV events — Valencia to Stevenson Ranch, suburban LA backyards."),
        ("Thousand Oaks", "Conejo Valley — Thousand Oaks, Westlake Village, and Agoura Hills."),
        ("Lancaster", "Antelope Valley high desert — the AV's growing residential community."),
        ("San Jose", "Silicon Valley — tech company team dinners and Bay Area home events."),
      ]
    },
    "Nevada": {
      "emoji": "🎲", "blurb": "Silver State hibachi from Las Vegas to Reno. Private teppanyaki chefs for Nevada events.",
      "cities": [
        ("Las Vegas", "Sin City — pool parties at Summerlin estates and corporate events near The Strip."),
        ("Henderson", "Lake Las Vegas and Green Valley Ranch — upscale backyard events and galas."),
        ("North Las Vegas", "North Valley communities — serving the full Las Vegas metro area."),
        ("Reno", "Biggest Little City — Tahoe nearby for lakeside mountain resort gatherings."),
        ("Summerlin", "Las Vegas premier master-planned community — Red Rock foothills luxury events."),
      ]
    },
    "Arizona": {
      "emoji": "🌵", "blurb": "Grand Canyon State hibachi from Phoenix to Sedona. Private chefs for Arizona events.",
      "cities": [
        ("Scottsdale", "Desert luxury — McCormick Ranch, North Scottsdale, and Paradise Valley estates."),
        ("Phoenix", "Valley of the Sun — Arcadia, Ahwatukee, and the Camelback corridor events."),
        ("Chandler", "Southeast Valley tech corridor — corporate events and suburban gatherings."),
        ("Gilbert", "Fast-growing East Valley — large family lots and HOA community events."),
        ("Glendale", "West Valley sports city — Cardinals fan after-parties and community events."),
        ("Tucson", "Old Pueblo — Oro Valley to Sahuarita, desert backdrop for unforgettable dinners."),
        ("Sedona", "Red Rock Country luxury retreats — upscale vacation home and wellness events."),
        ("Queen Creek", "East Valley agricultural community — ranch events and equestrian properties."),
        ("Flagstaff", "High-elevation mountain city — cabin events and NAU campus community."),
      ]
    },
    "Colorado": {
      "emoji": "🏔️", "blurb": "Centennial State hibachi from Denver to the Rockies. Private teppanyaki chefs for CO events.",
      "cities": [
        ("Denver", "Mile High City — Cherry Creek, Washington Park, and Cherry Hills estates."),
        ("Colorado Springs", "Pikes Peak region — military community, USAFA, and Broadmoor area."),
        ("Boulder", "Flatirons city — CU Boulder campus gatherings and tech startup team dinners."),
        ("Fort Collins", "Choice City — CSU Rams celebrations and Old Town community gatherings."),
        ("Lakewood", "West metro Denver — Green Mountain and Bear Creek residential events."),
      ]
    },
    "Washington": {
      "emoji": "🌲", "blurb": "Evergreen State hibachi from Seattle to Spokane. Private teppanyaki chefs across WA.",
      "cities": [
        ("Seattle", "Emerald City — Bellevue, Kirkland, Mercer Island, and Capitol Hill events."),
        ("Tacoma", "Grit City on Commencement Bay — Joint Base Lewis-McChord military community."),
        ("Spokane", "Eastern WA — Spokane, Coeur d'Alene ID, and the Inland Empire region."),
        ("Bellevue", "Eastside tech hub — Amazon and Microsoft area corporate and home events."),
        ("Vancouver", "Southwest WA — Clark County communities and Portland metro north events."),
      ]
    },
    "Oregon": {
      "emoji": "🌲", "blurb": "Beaver State hibachi from Portland to Bend. Private teppanyaki chefs for Oregon events.",
      "cities": [
        ("Portland", "City of Roses — Pearl District rooftops and SE Portland backyard garden events."),
        ("Salem", "Oregon capital — Willamette Valley wine country estate events."),
        ("Eugene", "Emerald Valley — UO Duck celebrations and Lane County community events."),
        ("Bend", "High desert outdoor city — mountain cabin and resort events near Mt. Bachelor."),
      ]
    },
    "Utah": {
      "emoji": "🏔️", "blurb": "Beehive State hibachi from Salt Lake City to St. George. Private chefs for Utah events.",
      "cities": [
        ("Salt Lake City", "SLC events — Cottonwood Heights, Holladay, and East Bench communities."),
        ("Provo", "Utah Valley — BYU campus gatherings and Utah County community parties."),
        ("Park City", "Ski resort luxury — Sundance season and mountain home estate events."),
        ("St. George", "Dixie Desert — Red Rock country and Sun River retirement community."),
        ("Ogden", "Weber County — Historic 25th Street district and North Ogden community events."),
      ]
    },
  },
  "Midwest": {
    "Illinois": {
      "emoji": "🌆", "blurb": "Prairie State hibachi from Chicago to Springfield. Private teppanyaki chefs across Illinois.",
      "cities": [
        ("Chicago", "Windy City — Lincoln Park, Wicker Park, and North Shore suburb estate events."),
        ("Naperville", "DuPage County premier suburb — upscale residential and corporate team events."),
        ("Aurora", "Fox Valley — Aurora, Elgin, and the western Chicago suburban corridor."),
        ("Schaumburg", "Northwest suburban Chicago — corporate events in the Woodfield corridor."),
        ("Rockford", "Forest City — Rockford, Belvidere, and the Rock River Valley communities."),
        ("Peoria", "Central Illinois hub — Peoria, Bloomington-Normal, and the Heart of Illinois."),
      ]
    },
    "Michigan": {
      "emoji": "🚗", "blurb": "Great Lakes State hibachi from Detroit to Grand Rapids. Private chefs for Michigan events.",
      "cities": [
        ("Detroit", "Motor City — Grosse Pointe estates, Birmingham, and Royal Oak community events."),
        ("Grand Rapids", "West Michigan — Eastown, Ada, and the lakeshore communities of Holland."),
        ("Ann Arbor", "Wolverine territory — UM campus celebrations and tech corridor corporate events."),
        ("Lansing", "State capital — East Lansing MSU events and Ingham County community gatherings."),
        ("Troy", "Oakland/Macomb County suburbs — large backyard events for metro Detroit area."),
      ]
    },
    "Ohio": {
      "emoji": "🏈", "blurb": "Buckeye State hibachi from Columbus to Cincinnati. Private teppanyaki chefs across Ohio.",
      "cities": [
        ("Columbus", "Buckeye Country — Dublin, New Albany, German Village, and Bexley events."),
        ("Cleveland", "Forest City — Rocky River, Westlake, Beachwood, and Chagrin Falls."),
        ("Cincinnati", "Queen City — Hyde Park, Indian Hill, Madeira, and East Side suburbs."),
        ("Dayton", "Miami Valley — Centerville, Beavercreek, and the WPAFB military community."),
        ("Toledo", "Glass City — Perrysburg, Maumee, and northwest Ohio region events."),
      ]
    },
    "Missouri": {
      "emoji": "🌉", "blurb": "Show Me State hibachi from St. Louis to Kansas City. Private chefs for Missouri events.",
      "cities": [
        ("St. Louis", "Gateway City — Clayton, Chesterfield, Ladue, and Central West End events."),
        ("Kansas City", "BBQ capital gets hibachi — Leawood, Overland Park, and the Plaza area."),
        ("Springfield", "Ozarks hub — Table Rock Lake vacation homes and MSU community events."),
        ("Columbia", "Mizzou Tiger celebrations and Boone County community events."),
      ]
    },
    "Minnesota": {
      "emoji": "⛄", "blurb": "North Star State hibachi from Minneapolis to the lakes. Private chefs for Minnesota events.",
      "cities": [
        ("Minneapolis", "Twin Cities — Edina, Eden Prairie, Minnetonka, and Wayzata lakeshore estates."),
        ("St. Paul", "Capital City — Highland Park, Maplewood, and East Side communities."),
        ("Rochester", "Mayo Clinic city — medical community events and IBM campus team gatherings."),
        ("Maple Grove", "Northwest suburbs — Maple Grove, Plymouth, and Corcoran community events."),
      ]
    },
    "Indiana": {
      "emoji": "🏎️", "blurb": "Hoosier State hibachi from Indianapolis to Fort Wayne. Private chefs for Indiana events.",
      "cities": [
        ("Indianapolis", "Indy events — Carmel, Fishers, Geist Reservoir, and Meridian Hills."),
        ("Fort Wayne", "Northeast Indiana — Fort Wayne, Auburn, and the surrounding region."),
        ("Carmel", "Hamilton County — arts and design district upscale residential events."),
        ("South Bend", "Notre Dame Fighting Irish celebrations and Michiana community events."),
      ]
    },
    "Kansas": {
      "emoji": "🌾", "blurb": "Sunflower State hibachi from Wichita to Overland Park. Private chefs for Kansas events.",
      "cities": [
        ("Wichita", "Air Capital — Wichita, Derby, and the greater Sedgwick County community."),
        ("Overland Park", "Johnson County KC suburb — one of the Midwest's most affluent communities."),
        ("Topeka", "State capital serving Topeka and surrounding Shawnee County communities."),
      ]
    },
    "Iowa": {
      "emoji": "🌽", "blurb": "Hawkeye State hibachi from Des Moines to Iowa City. Private teppanyaki chefs in Iowa.",
      "cities": [
        ("Des Moines", "Iowa capital — West Des Moines, Ankeny, and Johnston suburban events."),
        ("Cedar Rapids", "Corridor city — Cedar Rapids, Iowa City, and the Eastern Iowa region."),
        ("Iowa City", "Hawkeye home — University of Iowa events and Johnson County community parties."),
      ]
    },
  }
}


def slugify(s):
    s = s.lower().replace(' ', '-').replace('/', '-').replace(',', '').replace("'", '')
    return re.sub(r'[^a-z0-9-]', '-', s).strip('-')


def state_page(state, data, region):
    slug = slugify(state)
    city_links = ''
    for city, desc in data['cities']:
        cslug = slugify(city)
        city_links += (
            '\n      <a href="../cities/' + cslug + '.html" class="city-card">'
            '<div class="city-name">' + city + '</div>'
            '<div class="city-desc">' + desc + '</div>'
            '<div class="city-link">Book in ' + city + ' \u2192</div>'
            '</a>'
        )
    city_names_preview = ', '.join(c[0] for c in data['cities'][:5])
    city_count = len(data['cities'])

    return (
        '<!DOCTYPE html>\n<html lang="en">\n<head>\n'
        '  <meta charset="UTF-8"/>\n'
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n'
        '  <title>Hibachi With Us in ' + state + ' | Private Hibachi Chef ' + state + '</title>\n'
        '  <meta name="description" content="Book a private hibachi chef in ' + state + '. Hibachi With Us serves ' + city_names_preview + ', and more. Professional teppanyaki at your home or venue."/>\n'
        '  <link rel="canonical" href="https://www.hibachiwithus.com/states/' + slug + '.html"/>\n'
        '  <script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"Hibachi With Us \u2014 ' + state + '","areaServed":{"@type":"State","name":"' + state + '"},"url":"https://www.hibachiwithus.com/states/' + slug + '.html","priceRange":"$$"}</script>\n'
        '  <script src="https://cdn.tailwindcss.com"></script>\n'
        '  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>\n'
        '  <style>\n'
        '    *,*::before,*::after{box-sizing:border-box;margin:0;}\n'
        '    html{scroll-behavior:smooth;}\n'
        '    body{background:#FFFFFF;color:#1A1209;font-family:"DM Sans",sans-serif;line-height:1.7;overflow-x:hidden;}\n'
        '    nav#navbar{position:fixed;top:0;left:0;right:0;z-index:200;transition:background .4s ease,box-shadow .4s ease;}\n'
        '    nav#navbar.scrolled{background:rgba(255,255,255,.97);backdrop-filter:blur(16px);box-shadow:0 1px 0 rgba(26,18,9,.07),0 4px 24px rgba(0,0,0,.1);}\n'
        '    .nav-link{color:#F5EFE0;text-decoration:none;font-size:.8rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;padding:.35rem 0;position:relative;transition:color .25s ease;}\n'
        '    .nav-link.sl{color:#1A1209;}\n'
        '    .btn-primary{display:inline-flex;align-items:center;gap:.5rem;background:#C8102E;color:#F5EFE0;font-family:"DM Sans",sans-serif;font-weight:600;font-size:.83rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;padding:.85rem 2.2rem;border:none;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 4px 16px rgba(200,16,46,.35);}\n'
        '    .btn-primary:hover{transform:translateY(-2px) scale(1.02);}\n'
        '    .city-card{display:block;background:#FFFFFF;border:1px solid rgba(26,18,9,.09);padding:1.25rem 1.4rem;text-decoration:none;color:inherit;position:relative;overflow:hidden;transition:transform .25s ease,border-color .2s ease,box-shadow .2s ease;}\n'
        '    .city-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:#C8102E;transform:scaleY(0);transform-origin:bottom;transition:transform .25s ease;}\n'
        '    .city-card:hover{transform:translateY(-3px);border-color:rgba(200,16,46,.3);box-shadow:0 6px 24px rgba(26,18,9,.1);}\n'
        '    .city-card:hover::before{transform:scaleY(1);}\n'
        '    .city-name{font-family:"Bebas Neue",sans-serif;font-size:1.2rem;letter-spacing:.04em;color:#1A1209;line-height:1.1;}\n'
        '    .city-desc{font-size:.8rem;color:rgba(26,18,9,.55);line-height:1.55;margin-top:.3rem;}\n'
        '    .city-link{font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#C8102E;margin-top:.6rem;}\n'
        '    .red-pill{display:inline-block;background:rgba(200,16,46,.1);border:1px solid rgba(200,16,46,.3);color:#C8102E;font-size:.7rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;padding:.28rem 1rem;margin-bottom:1rem;}\n'
        '    .check-item{display:flex;align-items:flex-start;gap:.75rem;padding:.55rem 0;border-bottom:1px solid rgba(26,18,9,.07);}\n'
        '    .check-item:last-child{border-bottom:none;}\n'
        '    footer{background:#1A1209;}\n'
        '    .bc a{color:#C8102E;text-decoration:none;font-size:.82rem;}\n'
        '    .bc span{color:rgba(245,239,224,.4);font-size:.82rem;margin:0 .4rem;}\n'
        '  </style>\n'
        '</head>\n<body>\n'
        '<nav id="navbar">\n'
        '  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">\n'
        '    <a href="../index.html"><img src="../Brand_Assets/Hibachi%20With%20Us%20-%20Transparent%20Background.png" alt="Hibachi With Us" style="height:60px;width:auto;"/></a>\n'
        '    <div class="hidden lg:flex items-center gap-8">\n'
        '      <a href="../index.html#about" class="nav-link">About</a>\n'
        '      <a href="../index.html#menu" class="nav-link">Menu</a>\n'
        '      <a href="../index.html#pricing" class="nav-link">Pricing</a>\n'
        '      <a href="../locations.html" class="nav-link">Locations</a>\n'
        '      <a href="../index.html#book" class="btn-primary" style="padding:.6rem 1.5rem;">Book Now</a>\n'
        '    </div>\n  </div>\n</nav>\n\n'
        '<section style="background:linear-gradient(135deg,#1A1209 0%,#2D1A0E 100%);padding:8rem 1.5rem 4rem;min-height:40vh;display:flex;align-items:center;">\n'
        '  <div class="max-w-7xl mx-auto w-full">\n'
        '    <div class="bc" style="margin-bottom:1.5rem;"><a href="../locations.html">Locations</a><span>\u203a</span><span style="color:rgba(245,239,224,.6);">' + region + '</span><span>\u203a</span><span style="color:#F5EFE0;">' + state + '</span></div>\n'
        '    <div class="red-pill">' + region + ' Region</div>\n'
        '    <h1 style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(3rem,8vw,6rem);color:#F5EFE0;line-height:1;letter-spacing:.03em;">' + data['emoji'] + ' Hibachi With Us<br/><span style="color:#C8102E;">in ' + state + '</span></h1>\n'
        '    <p style="margin-top:1.25rem;font-size:1.05rem;color:rgba(245,239,224,.75);max-width:40rem;line-height:1.72;">' + data['blurb'] + '</p>\n'
        '    <div style="margin-top:2rem;display:flex;flex-wrap:wrap;gap:1rem;">\n'
        '      <a href="../index.html#book" class="btn-primary">Book in ' + state + '</a>\n'
        '      <a href="../locations.html" style="display:inline-flex;align-items:center;color:rgba(245,239,224,.7);text-decoration:none;font-size:.83rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.85rem 0;">\u2190 All Locations</a>\n'
        '    </div>\n  </div>\n</section>\n\n'
        '<section style="padding:4rem 1.5rem;background:#FFFFFF;">\n'
        '  <div class="max-w-7xl mx-auto">\n'
        '    <div style="margin-bottom:2.5rem;">\n'
        '      <div class="red-pill">Cities We Serve</div>\n'
        '      <h2 style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(2rem,5vw,3rem);color:#1A1209;line-height:1;">' + str(city_count) + ' Cities in ' + state + '</h2>\n'
        '      <p style="color:rgba(26,18,9,.55);margin-top:.5rem;">Click any city for details, or <a href="../index.html#book" style="color:#C8102E;">book directly</a> and mention your city.</p>\n'
        '    </div>\n'
        '    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">' + city_links + '\n    </div>\n'
        '  </div>\n</section>\n\n'
        '<section style="padding:3.5rem 1.5rem;background:#F8F6F2;">\n'
        '  <div class="max-w-4xl mx-auto">\n'
        '    <div class="red-pill">Why Choose Us</div>\n'
        '    <h2 style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(2rem,4vw,2.8rem);color:#1A1209;line-height:1;margin-bottom:1.25rem;">Your Private Hibachi Chef<br/><span style="color:#C8102E;">Anywhere in ' + state + '</span></h2>\n'
        '    <div class="grid md:grid-cols-2 gap-8">\n'
        '      <p style="color:rgba(26,18,9,.65);line-height:1.78;">We bring the full teppanyaki restaurant experience to you — at your home, venue, or outdoor space anywhere in ' + state + '. Our chefs arrive with all equipment, fresh ingredients, and showmanship. Expect the onion volcano, flying shrimp, and the iconic hibachi flames.</p>\n'
        '      <div>\n'
        '        <div class="check-item"><div style="flex-shrink:0;width:20px;height:20px;background:rgba(200,16,46,.1);border:1px solid rgba(200,16,46,.3);display:flex;align-items:center;justify-content:center;margin-top:2px;"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 6 5 9 10 3"/></svg></div><span style="color:rgba(26,18,9,.75);font-size:.92rem;">Full setup &amp; teardown — we bring everything</span></div>\n'
        '        <div class="check-item"><div style="flex-shrink:0;width:20px;height:20px;background:rgba(200,16,46,.1);border:1px solid rgba(200,16,46,.3);display:flex;align-items:center;justify-content:center;margin-top:2px;"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 6 5 9 10 3"/></svg></div><span style="color:rgba(26,18,9,.75);font-size:.92rem;">Fresh premium ingredients sourced locally</span></div>\n'
        '        <div class="check-item"><div style="flex-shrink:0;width:20px;height:20px;background:rgba(200,16,46,.1);border:1px solid rgba(200,16,46,.3);display:flex;align-items:center;justify-content:center;margin-top:2px;"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 6 5 9 10 3"/></svg></div><span style="color:rgba(26,18,9,.75);font-size:.92rem;">Live entertainment — tricks, flames &amp; flair</span></div>\n'
        '        <div class="check-item"><div style="flex-shrink:0;width:20px;height:20px;background:rgba(200,16,46,.1);border:1px solid rgba(200,16,46,.3);display:flex;align-items:center;justify-content:center;margin-top:2px;"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 6 5 9 10 3"/></svg></div><span style="color:rgba(26,18,9,.75);font-size:.92rem;">10 to 200+ guests — any size event</span></div>\n'
        '      </div>\n    </div>\n'
        '    <div style="margin-top:2rem;text-align:center;"><a href="../index.html#book" class="btn-primary">Book Your ' + state + ' Event</a></div>\n'
        '  </div>\n</section>\n\n'
        '<footer style="padding:2.5rem 1.5rem;">\n'
        '  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">\n'
        '    <img src="../Brand_Assets/Hibachi%20With%20Us%20-%20Transparent%20Background.png" alt="Hibachi With Us" style="height:52px;width:auto;"/>\n'
        '    <p style="font-size:.8rem;color:rgba(245,239,224,.4);">\u00a9 2026 Hibachi With Us. Private hibachi chef in ' + state + '.</p>\n'
        '    <a href="../index.html#book" class="btn-primary" style="padding:.6rem 1.4rem;font-size:.78rem;">Book Now</a>\n'
        '  </div>\n</footer>\n'
        '<script>\n'
        '  const nb=document.getElementById("navbar");\n'
        '  const nl=document.querySelectorAll(".nav-link");\n'
        '  window.addEventListener("scroll",()=>{const s=window.scrollY>60;nb.classList.toggle("scrolled",s);nl.forEach(l=>l.classList.toggle("sl",s));},{passive:true});\n'
        '</script>\n</body>\n</html>'
    )


def city_page(city, desc, state, region):
    state_slug = slugify(state)
    city_slug = slugify(city)

    checkmark = '<div style="flex-shrink:0;width:20px;height:20px;background:rgba(200,16,46,.1);border:1px solid rgba(200,16,46,.3);display:flex;align-items:center;justify-content:center;margin-top:2px;"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#C8102E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 6 5 9 10 3"/></svg></div>'
    plus_icon = '<div style="width:20px;height:20px;border:1px solid rgba(26,18,9,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .3s ease,border-color .2s ease;"><svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="6" y1="1" x2="6" y2="11"/><line x1="1" y1="6" x2="11" y2="6"/></svg></div>'

    return (
        '<!DOCTYPE html>\n<html lang="en">\n<head>\n'
        '  <meta charset="UTF-8"/>\n'
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n'
        '  <title>Hibachi With Us in ' + city + ', ' + state + ' | Private Hibachi Chef Near You</title>\n'
        '  <meta name="description" content="Book a private hibachi chef in ' + city + ', ' + state + '. ' + desc + ' Professional chef, fresh ingredients, live entertainment. Book today!"/>\n'
        '  <link rel="canonical" href="https://www.hibachiwithus.com/cities/' + city_slug + '.html"/>\n'
        '  <script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"Hibachi With Us \u2014 ' + city + ', ' + state + '","description":"' + desc + '","areaServed":{"@type":"City","name":"' + city + '"},"url":"https://www.hibachiwithus.com/cities/' + city_slug + '.html","priceRange":"$$","servesCuisine":"Japanese, Teppanyaki, Hibachi"}</script>\n'
        '  <script src="https://cdn.tailwindcss.com"></script>\n'
        '  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>\n'
        '  <style>\n'
        '    *,*::before,*::after{box-sizing:border-box;margin:0;}\n'
        '    html{scroll-behavior:smooth;}\n'
        '    body{background:#FFFFFF;color:#1A1209;font-family:"DM Sans",sans-serif;line-height:1.7;overflow-x:hidden;}\n'
        '    nav#navbar{position:fixed;top:0;left:0;right:0;z-index:200;transition:background .4s ease,box-shadow .4s ease;}\n'
        '    nav#navbar.scrolled{background:rgba(255,255,255,.97);backdrop-filter:blur(16px);box-shadow:0 1px 0 rgba(26,18,9,.07),0 4px 24px rgba(0,0,0,.1);}\n'
        '    .nav-link{color:#F5EFE0;text-decoration:none;font-size:.8rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;position:relative;transition:color .25s ease;}\n'
        '    .nav-link.sl{color:#1A1209;}\n'
        '    .btn-primary{display:inline-flex;align-items:center;gap:.5rem;background:#C8102E;color:#F5EFE0;font-family:"DM Sans",sans-serif;font-weight:600;font-size:.83rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;padding:.85rem 2.2rem;border:none;cursor:pointer;transition:transform .2s ease;box-shadow:0 4px 16px rgba(200,16,46,.35);}\n'
        '    .btn-primary:hover{transform:translateY(-2px) scale(1.02);}\n'
        '    .red-pill{display:inline-block;background:rgba(200,16,46,.1);border:1px solid rgba(200,16,46,.3);color:#C8102E;font-size:.7rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;padding:.28rem 1rem;margin-bottom:1rem;}\n'
        '    .menu-item{background:#FFFFFF;border:1px solid rgba(26,18,9,.09);padding:1.25rem;}\n'
        '    .check-item{display:flex;align-items:flex-start;gap:.75rem;padding:.55rem 0;border-bottom:1px solid rgba(26,18,9,.07);}\n'
        '    .check-item:last-child{border-bottom:none;}\n'
        '    .form-input{width:100%;background:#FFFFFF;border:1px solid rgba(26,18,9,.15);color:#1A1209;padding:.85rem 1rem;font-family:"DM Sans",sans-serif;font-size:.95rem;outline:none;transition:border-color .2s ease;}\n'
        '    .form-input:focus{border-color:#C8102E;}\n'
        '    .form-input::placeholder{color:rgba(26,18,9,.32);}\n'
        '    .form-label{display:block;font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(26,18,9,.5);margin-bottom:.4rem;}\n'
        '    footer{background:#1A1209;}\n'
        '    .bc a{color:#C8102E;text-decoration:none;font-size:.82rem;}\n'
        '    .bc span{color:rgba(245,239,224,.4);font-size:.82rem;margin:0 .4rem;}\n'
        '    .faq-item{border-bottom:1px solid rgba(26,18,9,.08);}\n'
        '    .faq-trigger{width:100%;background:none;border:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:1.2rem 0;color:#1A1209;font-family:"DM Sans",sans-serif;font-size:.95rem;font-weight:500;text-align:left;transition:color .2s ease;}\n'
        '    .faq-trigger:hover{color:#C8102E;}\n'
        '    .faq-body{max-height:0;overflow:hidden;transition:max-height .35s ease;}\n'
        '    .faq-body.open{max-height:300px;}\n'
        '    .faq-body p{padding-bottom:1.2rem;color:rgba(26,18,9,.6);font-size:.92rem;line-height:1.75;}\n'
        '  </style>\n'
        '</head>\n<body>\n'
        '<nav id="navbar">\n'
        '  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">\n'
        '    <a href="../index.html"><img src="../Brand_Assets/Hibachi%20With%20Us%20-%20Transparent%20Background.png" alt="Hibachi With Us" style="height:60px;width:auto;"/></a>\n'
        '    <div class="hidden lg:flex items-center gap-8">\n'
        '      <a href="../index.html#about" class="nav-link">About</a>\n'
        '      <a href="../index.html#menu" class="nav-link">Menu</a>\n'
        '      <a href="../index.html#pricing" class="nav-link">Pricing</a>\n'
        '      <a href="../locations.html" class="nav-link">Locations</a>\n'
        '      <a href="#book" class="btn-primary" style="padding:.6rem 1.5rem;">Book Now</a>\n'
        '    </div>\n  </div>\n</nav>\n\n'

        '<!-- HERO -->\n'
        '<section style="background:linear-gradient(135deg,#1A1209 0%,#2D1A0E 60%,#1A1209 100%);padding:8rem 1.5rem 4rem;min-height:45vh;display:flex;align-items:center;position:relative;overflow:hidden;">\n'
        '  <div style="position:absolute;top:-40%;right:-10%;width:60%;height:180%;background:radial-gradient(ellipse,rgba(200,16,46,.12) 0%,transparent 70%);pointer-events:none;"></div>\n'
        '  <div class="max-w-7xl mx-auto w-full relative" style="z-index:1;">\n'
        '    <div class="bc" style="margin-bottom:1.5rem;"><a href="../locations.html">Locations</a><span>\u203a</span><a href="../states/' + state_slug + '.html">' + state + '</a><span>\u203a</span><span style="color:#F5EFE0;">' + city + '</span></div>\n'
        '    <div class="red-pill">Private Chef \u00b7 ' + city + ', ' + state + '</div>\n'
        '    <h1 style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(2.8rem,7vw,5.5rem);color:#F5EFE0;line-height:1;letter-spacing:.03em;">Hibachi With Us<br/><span style="color:#C8102E;">in ' + city + '</span></h1>\n'
        '    <p style="margin-top:1.25rem;font-size:1.05rem;color:rgba(245,239,224,.78);max-width:42rem;line-height:1.72;">' + desc + ' Book your private teppanyaki chef in ' + city + ' today.</p>\n'
        '    <div style="margin-top:2rem;display:flex;flex-wrap:wrap;gap:1.5rem;align-items:center;">\n'
        '      <a href="#book" class="btn-primary">Book in ' + city + '</a>\n'
        '      <div style="display:flex;gap:1.5rem;flex-wrap:wrap;">\n'
        '        <div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:1.8rem;color:#C8102E;line-height:1;">$55+</div><div style="font-size:.65rem;color:rgba(245,239,224,.5);letter-spacing:.12em;text-transform:uppercase;">Per Person</div></div>\n'
        '        <div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:1.8rem;color:#C8102E;line-height:1;">5&#9733;</div><div style="font-size:.65rem;color:rgba(245,239,224,.5);letter-spacing:.12em;text-transform:uppercase;">Rating</div></div>\n'
        '        <div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:1.8rem;color:#C8102E;line-height:1;">24hr</div><div style="font-size:.65rem;color:rgba(245,239,224,.5);letter-spacing:.12em;text-transform:uppercase;">Response</div></div>\n'
        '      </div>\n    </div>\n  </div>\n</section>\n\n'

        '<!-- WHAT WE OFFER -->\n'
        '<section style="padding:4rem 1.5rem;background:#FFFFFF;">\n'
        '  <div class="max-w-7xl mx-auto">\n'
        '    <div class="grid lg:grid-cols-2 gap-14 items-start">\n'
        '      <div>\n'
        '        <div class="red-pill">The Experience</div>\n'
        '        <h2 style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(2rem,4vw,2.8rem);color:#1A1209;line-height:1;margin-bottom:1.25rem;">Restaurant-Quality Hibachi<br/><span style="color:#C8102E;">at Your ' + city + ' Home</span></h2>\n'
        '        <p style="color:rgba(26,18,9,.65);line-height:1.78;margin-bottom:1rem;">Our professional hibachi chefs bring the full teppanyaki experience directly to you in ' + city + '. We arrive fully equipped — portable grill, fresh ingredients, sauces, and the showmanship to match.</p>\n'
        '        <p style="color:rgba(26,18,9,.65);line-height:1.78;margin-bottom:1.75rem;">From the onion volcano to the flying shrimp trick, every performance is designed to wow your guests and create lasting memories.</p>\n'
        '        <div>\n'
        '          <div class="check-item">' + checkmark + '<span style="color:rgba(26,18,9,.75);font-size:.92rem;">Full setup and teardown \u2014 we handle logistics</span></div>\n'
        '          <div class="check-item">' + checkmark + '<span style="color:rgba(26,18,9,.75);font-size:.92rem;">Fresh, premium ingredients sourced locally in ' + state + '</span></div>\n'
        '          <div class="check-item">' + checkmark + '<span style="color:rgba(26,18,9,.75);font-size:.92rem;">Live hibachi entertainment and signature tricks</span></div>\n'
        '          <div class="check-item">' + checkmark + '<span style="color:rgba(26,18,9,.75);font-size:.92rem;">Accommodates 10 to 200+ guests</span></div>\n'
        '          <div class="check-item">' + checkmark + '<span style="color:rgba(26,18,9,.75);font-size:.92rem;">Birthday, anniversary, corporate \u2014 any occasion</span></div>\n'
        '        </div>\n      </div>\n'
        '      <div>\n'
        '        <div class="red-pill">What\'s on the Grill</div>\n'
        '        <h3 style="font-family:\'Bebas Neue\',sans-serif;font-size:1.8rem;color:#1A1209;margin-bottom:1rem;">Menu Options</h3>\n'
        '        <div class="grid grid-cols-2 gap-3">\n'
        '          <div class="menu-item"><div style="font-size:1.5rem;margin-bottom:.4rem;">\U0001f969</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:1.1rem;">Filet Mignon</div><div style="font-size:.78rem;color:rgba(26,18,9,.5);margin-top:.2rem;">Premium cut, seared to order</div></div>\n'
        '          <div class="menu-item"><div style="font-size:1.5rem;margin-bottom:.4rem;">\U0001f364</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:1.1rem;">Hibachi Shrimp</div><div style="font-size:.78rem;color:rgba(26,18,9,.5);margin-top:.2rem;">Garlic butter &amp; house sauce</div></div>\n'
        '          <div class="menu-item"><div style="font-size:1.5rem;margin-bottom:.4rem;">\U0001f357</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:1.1rem;">Hibachi Chicken</div><div style="font-size:.78rem;color:rgba(26,18,9,.5);margin-top:.2rem;">Teriyaki glaze, signature seasoning</div></div>\n'
        '          <div class="menu-item"><div style="font-size:1.5rem;margin-bottom:.4rem;">\U0001f41f</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:1.1rem;">Salmon</div><div style="font-size:.78rem;color:rgba(26,18,9,.5);margin-top:.2rem;">Lemon butter &amp; sesame glaze</div></div>\n'
        '          <div class="menu-item" style="grid-column:span 2;background:#FFF5F7;border-color:rgba(200,16,46,.2);"><div style="font-family:\'Bebas Neue\',sans-serif;font-size:1.1rem;margin-bottom:.4rem;">Every Plate Includes</div><div style="font-size:.8rem;color:rgba(26,18,9,.6);line-height:1.8;">Hibachi fried rice &middot; Grilled vegetables &middot; Miso soup &middot; Garden salad &middot; Yum yum &amp; ginger sauce</div></div>\n'
        '        </div>\n'
        '        <div style="margin-top:1rem;text-align:center;"><a href="../index.html#pricing" style="font-size:.82rem;color:#C8102E;font-weight:600;text-decoration:none;letter-spacing:.08em;text-transform:uppercase;">View Full Pricing \u2192</a></div>\n'
        '      </div>\n    </div>\n  </div>\n</section>\n\n'

        '<!-- FAQ -->\n'
        '<section style="padding:4rem 1.5rem;background:#F8F6F2;">\n'
        '  <div class="max-w-3xl mx-auto">\n'
        '    <div class="red-pill">Questions</div>\n'
        '    <h2 style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(2rem,4vw,2.8rem);color:#1A1209;line-height:1;margin-bottom:2rem;">Hibachi in ' + city + ' \u2014 FAQ</h2>\n'
        '    <div class="faq-item"><button class="faq-trigger" onclick="tf(this)"><span>Do you serve ' + city + ', ' + state + '?</span>' + plus_icon + '</button><div class="faq-body"><p>Yes! ' + desc + ' We serve ' + city + ' and surrounding ' + state + ' communities. Fill out the booking form and we\'ll confirm within 24 hours.</p></div></div>\n'
        '    <div class="faq-item"><button class="faq-trigger" onclick="tf(this)"><span>How much does hibachi cost in ' + city + '?</span>' + plus_icon + '</button><div class="faq-body"><p>Standard package starts at $55/person (children 12 and under $30). Premium is $65/person. Minimum order $550. Contact us for large or Elite events in ' + city + '.</p></div></div>\n'
        '    <div class="faq-item"><button class="faq-trigger" onclick="tf(this)"><span>What do I need to provide?</span>' + plus_icon + '</button><div class="faq-body"><p>Just tables, chairs, and plates! We bring the portable teppan grill, all cooking equipment, ingredients, sauces, and the chef. Full setup and cleanup included.</p></div></div>\n'
        '    <div class="faq-item"><button class="faq-trigger" onclick="tf(this)"><span>Can we host indoors in ' + city + '?</span>' + plus_icon + '</button><div class="faq-body"><p>We recommend outdoor or well-ventilated spaces due to smoke and open flame. Covered patios and backyards work perfectly. For indoor venues in ' + city + ' with commercial ventilation, contact us to assess your space.</p></div></div>\n'
        '  </div>\n</section>\n\n'

        '<!-- BOOKING -->\n'
        '<section id="book" style="padding:4rem 1.5rem;background:#FFFFFF;">\n'
        '  <div class="max-w-3xl mx-auto">\n'
        '    <div class="red-pill">Get a Quote</div>\n'
        '    <h2 style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(2rem,4vw,2.8rem);color:#1A1209;line-height:1;margin-bottom:.5rem;">Book Your Hibachi Event<br/><span style="color:#C8102E;">in ' + city + '</span></h2>\n'
        '    <p style="color:rgba(26,18,9,.55);margin-bottom:2rem;font-size:.95rem;">Fill out the form and we\'ll respond with a quote within 24 hours.</p>\n'
        '    <form onsubmit="hs(event)" style="display:flex;flex-direction:column;gap:1.1rem;background:#F8F6F2;padding:2rem;border:1px solid rgba(26,18,9,.08);">\n'
        '      <div class="grid sm:grid-cols-2 gap-4"><div><label class="form-label">First Name *</label><input class="form-input" type="text" required placeholder="Jane"/></div><div><label class="form-label">Last Name *</label><input class="form-input" type="text" required placeholder="Smith"/></div></div>\n'
        '      <div><label class="form-label">Email *</label><input class="form-input" type="email" required placeholder="jane@example.com"/></div>\n'
        '      <div><label class="form-label">Phone</label><input class="form-input" type="tel" placeholder="(555) 000-0000"/></div>\n'
        '      <div class="grid sm:grid-cols-2 gap-4"><div><label class="form-label">Event Date *</label><input class="form-input" type="date" required/></div><div><label class="form-label">Guest Count *</label><input class="form-input" type="number" required placeholder="e.g. 20" min="1"/></div></div>\n'
        '      <div><label class="form-label">Location in ' + city + '</label><input class="form-input" type="text" placeholder="Neighborhood or venue" value="' + city + ', ' + state + '"/></div>\n'
        '      <div><label class="form-label">Package</label><select class="form-input" style="cursor:pointer;"><option>Standard ($55/person)</option><option>Premium ($65/person)</option><option>Elite (Custom)</option><option>Not sure yet</option></select></div>\n'
        '      <div><label class="form-label">Tell Us About Your Event</label><textarea class="form-input" rows="3" placeholder="Birthday, corporate, dietary needs, special requests\u2026"></textarea></div>\n'
        '      <button type="submit" class="btn-primary" style="width:100%;justify-content:center;padding:1rem;">\n'
        '        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>\n'
        '        Send Booking Request for ' + city + '\n      </button>\n'
        '    </form>\n  </div>\n</section>\n\n'

        '<footer style="padding:2.5rem 1.5rem;">\n'
        '  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap">\n'
        '    <img src="../Brand_Assets/Hibachi%20With%20Us%20-%20Transparent%20Background.png" alt="Hibachi With Us" style="height:52px;width:auto;"/>\n'
        '    <nav style="display:flex;gap:1.5rem;flex-wrap:wrap;">\n'
        '      <a href="../locations.html" style="font-size:.8rem;color:rgba(245,239,224,.5);text-decoration:none;">All Locations</a>\n'
        '      <a href="../states/' + state_slug + '.html" style="font-size:.8rem;color:rgba(245,239,224,.5);text-decoration:none;">' + state + '</a>\n'
        '      <a href="../index.html#menu" style="font-size:.8rem;color:rgba(245,239,224,.5);text-decoration:none;">Menu</a>\n'
        '      <a href="../index.html#pricing" style="font-size:.8rem;color:rgba(245,239,224,.5);text-decoration:none;">Pricing</a>\n'
        '    </nav>\n'
        '    <p style="font-size:.75rem;color:rgba(245,239,224,.35);">\u00a9 2026 Hibachi With Us \u00b7 ' + city + ', ' + state + '</p>\n'
        '  </div>\n</footer>\n'

        '<script>\n'
        '  const nb=document.getElementById("navbar");\n'
        '  const nl=document.querySelectorAll(".nav-link");\n'
        '  window.addEventListener("scroll",()=>{const s=window.scrollY>60;nb.classList.toggle("scrolled",s);nl.forEach(l=>l.classList.toggle("sl",s));},{passive:true});\n'
        '  function tf(btn){const b=btn.nextElementSibling;const ic=btn.querySelector("div");const o=b.classList.toggle("open");btn.setAttribute("aria-expanded",o);ic.style.transform=o?"rotate(45deg)":"";ic.style.borderColor=o?"#C8102E":"rgba(26,18,9,.2)";ic.style.background=o?"rgba(200,16,46,.1)":"";}\n'
        '  function hs(e){e.preventDefault();const b=e.target.querySelector("button[type=\'submit\']");b.textContent="\u2713 Request Sent! We\'ll be in touch within 24 hours.";b.style.background="#2a7a3a";b.disabled=true;}\n'
        '</script>\n</body>\n</html>'
    )


# ── Generate ──
states_count = 0
cities_count = 0

for region, states in REGIONS.items():
    for state, data in states.items():
        state_slug = slugify(state)
        with open(f'states/{state_slug}.html', 'w') as f:
            f.write(state_page(state, data, region))
        states_count += 1

        for city, desc in data['cities']:
            city_slug = slugify(city)
            with open(f'cities/{city_slug}.html', 'w') as f:
                f.write(city_page(city, desc, state, region))
            cities_count += 1

print(f"Generated {states_count} state pages")
print(f"Generated {cities_count} city pages")
print(f"Total: {states_count + cities_count} pages")
