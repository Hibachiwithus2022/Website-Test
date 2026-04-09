const HEADING_VARIANTS = [
  (city) => `What Makes Our ${city} Hibachi Experience Special`,
  (city) => `Backyard Hibachi, Made Easy in ${city}`,
  (city) => `A Private Chef Experience Your ${city} Guests Will Remember`,
]

const EXPERIENCE_POINTS = [
  {
    icon: '🎭',
    title: 'A Dinner That\'s Also a Show',
    desc: 'Your chef doesn\'t just cook — they perform. Fire tricks, flying proteins, the iconic onion volcano, and chef banter keep everyone entertained from the first flame to the last bite.',
  },
  {
    icon: '🍽️',
    title: 'Fully Cooked to Order',
    desc: 'Every plate is made fresh on the teppan grill in front of your guests. Proteins, fried rice, vegetables — all prepared to each person\'s preference, right there at the grill.',
  },
  {
    icon: '🧹',
    title: 'Effortless Hosting',
    desc: 'You show up for the fun. We handle setup, service, and complete cleanup. Most hosts say hibachi nights are the easiest events they\'ve ever thrown.',
  },
  {
    icon: '🥩',
    title: 'Premium, Customizable Menus',
    desc: 'Choose your proteins, add premium upgrades, and build the meal your guests deserve. Chicken, steak, shrimp, lobster tail, filet mignon — we work with what you want.',
  },
]

export default function CityExperience({ cityName, variant = 0 }) {
  const heading = HEADING_VARIANTS[variant % HEADING_VARIANTS.length](cityName)

  return (
    <section style={{ background: '#FFFFFF', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div style={{ display: 'grid', gap: '4rem', alignItems: 'center' }} className="lg:grid-cols-2">

          {/* Left: image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                src="/brand/hero-bg.jpg"
                alt={`Private hibachi chef cooking at a backyard event in ${cityName}`}
                style={{ width: '100%', display: 'block', objectFit: 'cover', height: 480, filter: 'saturate(1.06)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,18,9,0.6) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,16,46,0.05)', mixBlendMode: 'multiply' }} />
            </div>
            {/* Badge */}
            <div
              style={{
                position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
                background: '#C8102E', padding: '1.5rem 2rem',
                boxShadow: '0 4px 8px rgba(200,16,46,0.15), 0 16px 40px rgba(200,16,46,0.1), 0 24px 48px rgba(0,0,0,0.4)',
              }}
              className="hidden md:block"
            >
              <div className="font-display" style={{ fontSize: '2.2rem', color: '#F5EFE0', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                Guest Satisfaction
              </div>
            </div>
            {/* Decorative border */}
            <div
              style={{ position: 'absolute', top: '-1rem', left: '-1rem', width: '100%', height: '100%', border: '1px solid rgba(200,16,46,0.18)', pointerEvents: 'none' }}
              className="hidden md:block"
            />
          </div>

          {/* Right: content */}
          <div>
            <div className="red-pill" style={{ marginBottom: '1.25rem' }}>The Experience</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', color: '#1A1209', lineHeight: 1.05, marginBottom: '2rem' }}>
              {heading.split(',')[0]}<br />
              <span style={{ color: '#C8102E' }}>{heading.includes(',') ? heading.slice(heading.indexOf(',') + 1) : ''}</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {EXPERIENCE_POINTS.map((point) => (
                <div key={point.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, flexShrink: 0,
                    background: 'rgba(200,16,46,0.1)', border: '1px solid rgba(200,16,46,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                  }}>
                    {point.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1A1209', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{point.title}</div>
                    <div style={{ fontSize: '0.86rem', color: 'rgba(26,18,9,0.55)', lineHeight: 1.75 }}>{point.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
