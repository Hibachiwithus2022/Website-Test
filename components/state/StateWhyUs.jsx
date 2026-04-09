const WHY_US = [
  {
    icon: '🔥',
    title: 'Certified Hibachi Chefs',
    desc: 'Every chef is trained in authentic Japanese teppanyaki technique — knife skills, fire performance, and precision cooking.',
  },
  {
    icon: '🍱',
    title: 'Premium Ingredients Only',
    desc: 'We source fresh, high-quality proteins and produce. No shortcuts. Your guests taste the difference immediately.',
  },
  {
    icon: '✅',
    title: 'Full Setup & Cleanup',
    desc: 'Arrive 30 minutes early, set everything up, cook the show, and completely clean up. Zero work on your end.',
  },
  {
    icon: '💯',
    title: '5.0 Star Rating',
    desc: 'Over 200 events nationwide with a perfect satisfaction record. We don\'t leave until you\'re happy.',
  },
  {
    icon: '📋',
    title: 'Transparent Pricing',
    desc: 'No surprise fees. $55/adult, $30/child, $550 minimum. Quoted upfront, invoiced clearly.',
  },
  {
    icon: '🎉',
    title: 'Any Occasion',
    desc: 'Birthday parties, corporate retreats, weddings, graduations — we\'ve done it all and we\'ve nailed it all.',
  },
]

export default function StateWhyUs({ state }) {
  return (
    <section style={{ background: 'linear-gradient(180deg,#FFFFFF,#F8F5F2)', padding: '4.5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>Why Choose Us</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#1A1209', lineHeight: 1.05 }}>
            Why {state} Families<br />
            <span style={{ color: '#C8102E' }}>Love Hibachi Connect</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '1.25rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          }}
        >
          {WHY_US.map((item) => (
            <div
              key={item.title}
              style={{
                padding: '1.75rem',
                background: '#FFFFFF',
                border: '1px solid rgba(26,18,9,0.09)',
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
              }}
            >
              <div style={{
                width: 44, height: 44, flexShrink: 0,
                background: 'rgba(200,16,46,0.08)', border: '1px solid rgba(200,16,46,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#1A1209', marginBottom: '0.3rem', fontSize: '0.95rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(26,18,9,0.58)', lineHeight: 1.72 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
