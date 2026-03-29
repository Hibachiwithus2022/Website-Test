import { INTRO_VARIANTS } from '../../lib/cityData'

export default function CityIntro({ cityName, stateName, localHighlights = [], uniqueIntroVariant = 0 }) {
  const v = INTRO_VARIANTS[uniqueIntroVariant % INTRO_VARIANTS.length]

  return (
    <section style={{ background: '#1A1209', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div style={{ display: 'grid', gap: '4rem', alignItems: 'start' }} className="lg:grid-cols-[1fr_340px]">

          {/* Main copy */}
          <div>
            <div className="red-pill" style={{ marginBottom: '1.25rem' }}>
              Hibachi at Home in {cityName}
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: '#F5EFE0', lineHeight: 1.05, marginBottom: '1.75rem' }}>
              {v.headline(cityName, stateName)}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ color: 'rgba(245,239,224,0.7)', lineHeight: 1.85, fontSize: '1rem' }}>
                {v.opening(cityName, stateName)}
              </p>
              <p style={{ color: 'rgba(245,239,224,0.62)', lineHeight: 1.85, fontSize: '0.97rem' }}>
                {v.middle(cityName, stateName)}
              </p>
              <p style={{ color: 'rgba(245,239,224,0.55)', lineHeight: 1.85, fontSize: '0.94rem' }}>
                {v.closing(cityName, stateName)}
              </p>
            </div>
          </div>

          {/* Local highlights sidebar */}
          {localHighlights.length > 0 && (
            <div style={{
              background: 'rgba(200,16,46,0.06)',
              border: '1px solid rgba(200,16,46,0.2)',
              padding: '2rem',
              alignSelf: 'start',
            }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '1.25rem' }}>
                Popular in {cityName}
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {localHighlights.map((highlight, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ color: '#C8102E', marginTop: '0.1rem', flexShrink: 0 }}>✦</span>
                    <span style={{ fontSize: '0.88rem', color: 'rgba(245,239,224,0.68)', lineHeight: 1.65 }}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
