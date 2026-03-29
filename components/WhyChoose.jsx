import RevealWrapper from './RevealWrapper'

const REASONS = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Nationwide Coverage',
    desc:  'We serve all 48 contiguous U.S. states. From major metros to smaller cities — we connect you with a local chef wherever you are.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Easy Online Booking',
    desc:  'Book in minutes with our simple form. Pick your date, guest count, and proteins — we handle the rest and confirm within 24 hours.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Vetted Professional Chefs',
    desc:  'Every chef in our network is background-checked, trained in teppanyaki, and has passed our quality standards. Your safety matters.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Flexible Scheduling',
    desc:  'Evenings, weekends, or last-minute requests — we work around your schedule. If a chef is available, the event happens.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#D4A843" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'No Restaurant Needed',
    desc:  'Save the reservation, the drive, and the wait. Your backyard becomes a 5-star teppanyaki experience — and cleanup is on us.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#D4A843" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Transparent Pricing',
    desc:  'No hidden fees, no surprises. You see the full cost before you book. Flat per-person rates with a clear minimum.',
  },
]

export default function WhyChoose() {
  return (
    <section
      className="section"
      style={{ background: 'linear-gradient(180deg,#1E1410 0%,#1A1209 100%)' }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <RevealWrapper>
            <div className="red-pill" style={{ display: 'inline-block' }}>Why Hibachi Connect</div>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">
              The Smarter Way to<br />
              <span style={{ color: '#C8102E' }}>Book Hibachi Near You</span>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p style={{ color: 'rgba(245,239,224,0.55)', maxWidth: '38rem', margin: '1rem auto 0' }}>
              We're not just a catering service. We're a platform built to connect you with the best private hibachi chefs, wherever you live.
            </p>
          </RevealWrapper>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => (
            <RevealWrapper key={i} delay={i * 0.08}>
              <div className="card card-bar p-7 h-full flex flex-col gap-4">
                <div style={{
                  width: 48, height: 48, flexShrink: 0,
                  background: 'rgba(200,16,46,0.1)', border: '1px solid rgba(200,16,46,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {r.icon}
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '1rem', color: '#F5EFE0', marginBottom: '0.4rem' }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(245,239,224,0.58)', lineHeight: 1.7 }}>
                    {r.desc}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

      </div>
    </section>
  )
}
