'use client'
import RevealWrapper from './RevealWrapper'

const OCCASIONS = [
  { emoji: '🎂', label: 'Birthday Parties',          desc: 'Make their birthday unforgettable with live fire and hibachi flair.' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Family Gatherings',        desc: 'Bring the whole family together over a shared hibachi experience.' },
  { emoji: '🥂', label: 'Bachelor / Bachelorette',   desc: 'A night nobody will forget — the perfect pre-wedding celebration.' },
  { emoji: '🏢', label: 'Corporate Events',           desc: 'Impress clients and reward your team with something truly different.' },
  { emoji: '🎄', label: 'Holiday Parties',            desc: 'Upgrade your holiday gathering with a private teppanyaki chef.' },
  { emoji: '🎓', label: 'Graduation Parties',         desc: 'Celebrate their milestone with a backyard hibachi bash.' },
  { emoji: '💍', label: 'Anniversaries',              desc: 'A romantic, one-of-a-kind dinner experience at home.' },
  { emoji: '🏡', label: 'Just Because',              desc: 'You don\'t need a reason. Hibachi at home is always a good idea.' },
]

export default function Occasions() {
  return (
    <section className="section" style={{ background: '#F8F5F2' }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <RevealWrapper>
            <div className="red-pill" style={{ display: 'inline-block' }}>Every Occasion</div>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">
              The Perfect Hibachi Party<br />
              <span style={{ color: '#C8102E' }}>for Any Moment</span>
            </h2>
          </RevealWrapper>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OCCASIONS.map((o, i) => (
            <RevealWrapper key={i} delay={i * 0.07}>
              <a
                href="#book"
                style={{
                  display: 'flex', flexDirection: 'column',
                  background: '#FFFFFF',
                  border: '1px solid rgba(26,18,9,0.09)',
                  padding: '2rem 1.5rem',
                  textDecoration: 'none',
                  transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, background 0.3s ease',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform    = 'translateY(-5px)'
                  e.currentTarget.style.borderColor  = 'rgba(200,16,46,0.4)'
                  e.currentTarget.style.background   = 'rgba(200,16,46,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform    = 'translateY(0)'
                  e.currentTarget.style.borderColor  = 'rgba(26,18,9,0.09)'
                  e.currentTarget.style.background   = '#FFFFFF'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{o.emoji}</div>
                <div
                  className="font-display"
                  style={{ fontSize: '1.3rem', color: '#1A1209', lineHeight: 1.2, marginBottom: '0.5rem' }}
                >
                  {o.label}
                </div>
                <p style={{ fontSize: '0.83rem', color: 'rgba(26,18,9,0.55)', lineHeight: 1.65 }}>
                  {o.desc}
                </p>
                <div style={{ marginTop: '1.25rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8102E' }}>
                  Book Now →
                </div>
              </a>
            </RevealWrapper>
          ))}
        </div>

      </div>
    </section>
  )
}
