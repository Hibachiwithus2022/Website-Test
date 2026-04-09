'use client'
import RevealWrapper from './RevealWrapper'
import Image from 'next/image'

const FEATURES = [
  {
    icon: '🔥',
    title: 'Live Fire Cooking Show',
    desc:  'Watch your chef command fire, flip proteins mid-air, and build the iconic onion volcano — all while cooking your meal.',
  },
  {
    icon: '🍱',
    title: 'Fresh Made-to-Order Meals',
    desc:  'Every plate is cooked to order on a clean teppan grill. Premium proteins, house sauces, fried rice, and fresh vegetables.',
  },
  {
    icon: '👥',
    title: 'Perfect for Any Group Size',
    desc:  'Designed for 8 to 200+ guests. Intimate dinners or massive celebrations — we scale with your event.',
  },
  {
    icon: '🏡',
    title: 'Indoor or Outdoor Setup',
    desc:  'Backyard, patio, driveway, covered venue — if there\'s space and ventilation, we can cook. We bring everything.',
  },
]

export default function Experience() {
  return (
    <section
      className="section"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <RevealWrapper>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src="/brand/hero-bg.jpg"
                  alt="Hibachi chef cooking live fire teppanyaki at a backyard party"
                  style={{ width: '100%', display: 'block', objectFit: 'cover', height: 540, filter: 'saturate(1.08)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,16,46,0.06)', mixBlendMode: 'multiply' }} />
              </div>

              {/* Floating badge */}
              <div
                style={{
                  position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
                  background: '#C8102E', padding: '1.5rem 2rem',
                  boxShadow: '0 4px 8px rgba(200,16,46,0.15), 0 16px 40px rgba(200,16,46,0.1), 0 32px 64px rgba(0,0,0,0.4)',
                }}
                className="hidden md:block"
              >
                <div className="font-display" style={{ fontSize: '2.4rem', color: '#F5EFE0', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(245,239,224,0.82)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                  Guest Satisfaction
                </div>
              </div>

              {/* Decorative border */}
              <div
                style={{ position: 'absolute', top: '-1rem', left: '-1rem', width: '100%', height: '100%', border: '1px solid rgba(200,16,46,0.2)', pointerEvents: 'none' }}
                className="hidden md:block"
              />
            </div>
          </RevealWrapper>

          {/* Right: text */}
          <div>
            <RevealWrapper>
              <div className="red-pill">The Experience</div>
            </RevealWrapper>
            <RevealWrapper delay={0.1}>
              <h2 className="section-title mb-4">
                Turn Your Backyard Into<br />
                <span style={{ color: '#C8102E' }}>a Hibachi Restaurant</span>
              </h2>
            </RevealWrapper>
            <RevealWrapper delay={0.15}>
              <p style={{ color: 'rgba(26,18,9,0.68)', lineHeight: 1.78, marginBottom: '2.5rem' }}>
                It's not just dinner — it's a performance. Your private hibachi chef arrives ready to entertain, cook, and create memories your guests will be talking about for years. No restaurants. No waiting. The show comes to you.
              </p>
            </RevealWrapper>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {FEATURES.map((f, i) => (
                <RevealWrapper key={i} delay={0.2 + i * 0.08}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: 48, height: 48, flexShrink: 0,
                      background: 'rgba(200,16,46,0.1)', border: '1px solid rgba(200,16,46,0.28)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.35rem',
                    }}>
                      {f.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#1A1209', marginBottom: '0.2rem' }}>{f.title}</div>
                      <div style={{ fontSize: '0.88rem', color: 'rgba(26,18,9,0.55)', lineHeight: 1.7 }}>{f.desc}</div>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
