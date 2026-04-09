import RevealWrapper from './RevealWrapper'

const STEPS = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" fill="none" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title:   'Book Your Date Online',
    desc:    'Fill out a quick form with your event date, guest count, location, and protein choices. We confirm within 24 hours.',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" fill="none" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title:   'Get Matched with a Local Chef',
    desc:    'We pair you with a vetted, professional hibachi chef in your area — someone who knows the showmanship and the flavors.',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" fill="none" stroke="#C8102E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
    title:   'Chef Arrives with Grill & Ingredients',
    desc:    'Your chef shows up with a portable teppan grill, all cooking equipment, and the freshest ingredients. Zero prep needed from you.',
  },
  {
    num: '04',
    icon: (
      <svg width="28" height="28" fill="none" stroke="#D4A843" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title:   'Enjoy the Hibachi Experience',
    desc:    'Sit back as your chef cooks, performs tricks, and delivers restaurant-quality teppanyaki right at your home. We clean up everything.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section"
      style={{ background: '#F8F5F2' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <RevealWrapper>
            <div className="red-pill" style={{ display: 'inline-block' }}>Simple Process</div>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="section-title">How Hibachi at Home Works</h2>
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p style={{ color: 'rgba(26,18,9,0.55)', maxWidth: '36rem', margin: '1rem auto 0' }}>
              Four steps and you're on your way to the most unforgettable dinner party of the year.
            </p>
          </RevealWrapper>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <RevealWrapper key={i} delay={i * 0.1}>
              <div className="card card-bar p-8 h-full flex flex-col">
                {/* Step number */}
                <div
                  className="font-display leading-none mb-4"
                  style={{ fontSize: '3rem', color: 'rgba(200,16,46,0.18)' }}
                >
                  {step.num}
                </div>
                {/* Icon */}
                <div
                  style={{
                    width: 52, height: 52,
                    background: 'rgba(200,16,46,0.1)',
                    border: '1px solid rgba(200,16,46,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {step.icon}
                </div>
                {/* Text */}
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: '1.45rem', color: '#1A1209', lineHeight: 1.2 }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(26,18,9,0.55)', lineHeight: 1.7, flex: 1 }}>
                  {step.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

      </div>
    </section>
  )
}
