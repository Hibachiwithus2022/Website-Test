import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ALL_STATES, CITIES_BY_STATE } from '../../lib/cities'
import LocationsClient from './LocationsClient'

export const metadata = {
  title: 'Private Hibachi Chef Locations | Hibachi Connect — All 50 States',
  description: 'Hibachi Connect serves all 50 U.S. states. Find a private hibachi chef near you — backyard teppanyaki starting at $55/person with full setup and cleanup.',
  keywords: 'private hibachi chef near me, hibachi at home, hibachi catering locations, hibachi connect states',
  alternates: { canonical: 'https://hibachiconnect.com/locations' },
}

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <LocationsClient allStates={ALL_STATES} citiesByState={CITIES_BY_STATE} />
      <Footer />
    </>
  )
}
