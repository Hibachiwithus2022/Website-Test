import BookingForm from './BookingForm'

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

        <BookingForm />

        {/* Contact fallback */}
        <p className="text-center mt-8" style={{ fontSize: '0.85rem', color: 'rgba(26,18,9,0.4)' }}>
          Prefer to call?{' '}
          <a href="tel:+16027672965" style={{ color: '#C8102E', fontWeight: 600, textDecoration: 'none' }}>
            (602) 767-2965
          </a>
        </p>

      </div>
    </section>
  )
}
