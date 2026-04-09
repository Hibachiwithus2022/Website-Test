import BookingForm from './BookingForm'

export default function BookingSection() {
  return (
    <section
      id="book"
      className="section"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-5xl mx-auto">
        <div style={{ display: 'grid', gap: '4rem' }} className="lg:grid-cols-[1fr_1.15fr] grid-cols-1">

          {/* ── Left: info panel ── */}
          <div>
            <div className="red-pill" style={{ display: 'inline-block' }}>Book Your Event</div>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Reserve Your<br />
              <span style={{ color: '#C8102E' }}>Hibachi Chef</span>
            </h2>
            <p style={{ color: 'rgba(26,18,9,0.6)', lineHeight: 1.78, marginBottom: '2.5rem', maxWidth: '30rem' }}>
              Fill out the form and we'll confirm your date within 1 business day. No payment required to request.
            </p>

            {/* What to expect */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  icon: (
                    <svg width="20" height="20" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  ),
                  title: 'Pick Your Date',
                  desc: 'Choose any date — we serve 7 days a week, including holidays.',
                },
                {
                  icon: (
                    <svg width="20" height="20" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                  title: 'We Confirm Within 24h',
                  desc: 'A team member will call or email to finalize your event details.',
                },
                {
                  icon: (
                    <svg width="20" height="20" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                    </svg>
                  ),
                  title: 'Chef Arrives & Performs',
                  desc: 'Your chef brings everything — grill, ingredients, full setup and cleanup.',
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, flexShrink: 0,
                    background: 'rgba(200,16,46,0.07)',
                    border: '1px solid rgba(200,16,46,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1A1209', fontSize: '0.95rem', marginBottom: '0.2rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(26,18,9,0.55)', lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact fallback */}
            <div style={{
              marginTop: '2.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(26,18,9,0.08)',
              display: 'flex', flexDirection: 'column', gap: '0.6rem',
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,18,9,0.4)' }}>
                Prefer to call?
              </div>
              <a href="tel:+16027672965" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                color: '#1A1209', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem',
              }}>
                <svg width="18" height="18" fill="none" stroke="#C8102E" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                (602) 767-2965
              </a>
            </div>
          </div>

          {/* ── Right: form card ── */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(26,18,9,0.1)',
            padding: '2.5rem',
            boxShadow: '0 4px 32px rgba(26,18,9,0.06), 0 1px 4px rgba(26,18,9,0.04)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Top accent bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, #C8102E, #D4A843)' }} />
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  )
}
