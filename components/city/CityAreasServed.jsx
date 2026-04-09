export default function CityAreasServed({ cityName, stateName, nearbyCities = [] }) {
  return (
    <section style={{ background: '#F8F5F2', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div style={{ display: 'grid', gap: '3.5rem', alignItems: 'start' }} className="md:grid-cols-2">

          {/* Left: copy */}
          <div>
            <div className="red-pill" style={{ marginBottom: '1.25rem' }}>Areas We Serve</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: '#1A1209', lineHeight: 1.05, marginBottom: '1.25rem' }}>
              We Proudly Serve<br />
              <span style={{ color: '#C8102E' }}>{cityName} & Surrounding Areas</span>
            </h2>
            <p style={{ color: 'rgba(26,18,9,0.65)', lineHeight: 1.82, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Hibachi Connect operates throughout {cityName} and all surrounding neighborhoods, suburbs, and communities. Whether you're in the heart of the city or 20 miles out in the suburbs, our chefs come to you.
            </p>
            <p style={{ color: 'rgba(26,18,9,0.5)', lineHeight: 1.82, fontSize: '0.88rem' }}>
              Service may extend beyond the areas listed below depending on chef availability. Contact us with your exact location — we always try to accommodate every request. Travel fees may apply for locations more than 30 miles from {cityName}.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <a href="#book" className="btn-primary">Check Availability in My Area</a>
            </div>
          </div>

          {/* Right: city grid */}
          {nearbyCities.length > 0 && (
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.38)', marginBottom: '1.25rem' }}>
                Cities & Neighborhoods Served
              </div>
              <div style={{ display: 'grid', gap: '0.6rem' }} className="grid-cols-2">
                {[cityName, ...nearbyCities].map((city) => (
                  <div
                    key={city}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.6rem 0.85rem',
                      background: '#FFFFFF',
                      border: '1px solid rgba(26,18,9,0.09)',
                      fontSize: '0.85rem',
                      color: city === cityName ? '#1A1209' : 'rgba(26,18,9,0.65)',
                      fontWeight: city === cityName ? 600 : 400,
                    }}
                  >
                    <span style={{ color: '#C8102E', fontSize: '0.6rem' }}>●</span>
                    {city}
                    {city === cityName && (
                      <span style={{ marginLeft: 'auto', fontSize: '0.62rem', color: '#C8102E', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Primary</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
