export default function BookingSection() {
  return (
    <section id="book" className="section" style={{ background: '#F5F5F7' }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="red-pill" style={{ display: 'inline-block' }}>Reservations</div>
          <h2 className="section-title">
            Book Your Private<br />
            <span style={{ color: '#C8102E' }}>Hibachi Chef</span>
          </h2>
          <p style={{ color: 'rgba(26,18,9,0.55)', marginTop: '0.75rem', lineHeight: 1.75 }}>
            Select your date and time — we confirm within 1 business day.
          </p>
        </div>

        <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=39391414&ref=embedded_csp"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
          allow="payment"
          style={{ display: 'block', border: 'none', borderRadius: '12px', minHeight: '800px' }}
        />
        <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript" async />

        {/* Contact fallback */}
        <div className="text-center mt-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(26,18,9,0.55)', marginBottom: '0.25rem' }}>
            Questions before booking?
          </p>
          <a
            href="tel:+12015653878"
            style={{ fontSize: '0.875rem', color: '#C8102E', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            📞 Call or Text: (201) 565-3878
          </a>
          <a
            href="mailto:info@hibachiconnect.com"
            style={{ fontSize: '0.875rem', color: '#C8102E', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            ✉️ Email: info@hibachiconnect.com
          </a>
        </div>

      </div>
    </section>
  )
}
