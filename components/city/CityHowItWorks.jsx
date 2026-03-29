const STEPS = [
  {
    num: '01',
    title: 'Book Your Date',
    desc: 'Fill out the form below or call us. Tell us your city, guest count, and preferred date. We confirm availability fast — usually within a few hours.',
  },
  {
    num: '02',
    title: 'Get Matched with a Chef',
    desc: 'We assign a certified hibachi chef in your area. You\'ll receive a confirmation with your chef\'s details and any event prep tips.',
  },
  {
    num: '03',
    title: 'Chef Arrives with Everything',
    desc: 'Your chef shows up ~30 minutes early with a full propane grill, all ingredients, sauces, plates, and chopsticks. You provide chairs and table space.',
  },
  {
    num: '04',
    title: 'Enjoy the Full Experience',
    desc: 'Sit back while your chef cooks, entertains, and serves. Fire tricks, flying shrimp, onion volcanos — dinner is the show. Chef cleans up completely when done.',
  },
]

export default function CityHowItWorks({ cityName }) {
  return (
    <section style={{ background: 'linear-gradient(180deg,#1E1410,#1A1209)', padding: '5rem 1.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1rem' }}>How It Works</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#F5EFE0', lineHeight: 1.05 }}>
            From Booking to<br />
            <span style={{ color: '#C8102E' }}>Your Backyard in {cityName}</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gap: '1.5rem' }} className="md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                padding: '2rem 1.75rem',
                background: 'rgba(245,239,224,0.03)',
                border: '1px solid rgba(245,239,224,0.07)',
              }}
            >
              {/* Step number */}
              <div
                className="font-display"
                style={{
                  fontSize: '3.5rem', lineHeight: 1, color: 'rgba(200,16,46,0.18)',
                  position: 'absolute', top: '1rem', right: '1.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {step.num}
              </div>
              {/* Accent bar */}
              <div style={{ width: 32, height: 2, background: '#C8102E', marginBottom: '1.25rem' }} />
              <div style={{ fontWeight: 700, color: '#F5EFE0', fontSize: '0.97rem', marginBottom: '0.6rem' }}>{step.title}</div>
              <div style={{ fontSize: '0.86rem', color: 'rgba(245,239,224,0.55)', lineHeight: 1.78 }}>{step.desc}</div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.88rem', color: 'rgba(245,239,224,0.4)', fontStyle: 'italic' }}>
          Whether you're planning a dinner party in {cityName} or hosting friends in the suburbs, we make the entire experience simple.
        </p>
      </div>
    </section>
  )
}
