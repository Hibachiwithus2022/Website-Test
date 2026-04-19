import BookingForm from '../../components/BookingForm';

export const metadata = {
  title: 'Book Your Private Hibachi Chef | Hibachi Connect',
  description: 'Reserve your private hibachi chef. Select your date, time, and guest count — we confirm within 1 business day. $60/adult, $600 minimum.',
};

export default function BookingPage() {
  return (
    <main style={{ background: '#F5EFE0', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        background: '#1A1209',
        padding: '80px 24px 60px',
        textAlign: 'center',
      }}>
        <p style={{ color: '#D4A843', fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Reservations
        </p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 16px' }}>
          Book Your Private<br />
          <span style={{ color: '#C8102E' }}>Hibachi Chef</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
          Select your date and time — we confirm within 1 business day.
        </p>
      </section>

      {/* Booking Form */}
      <section style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <BookingForm />

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: 'rgba(26,18,9,0.45)' }}>
          Prefer to call?{' '}
          <a href="tel:+16027672965" style={{ color: '#C8102E', fontWeight: 600, textDecoration: 'none' }}>
            (602) 767-2965
          </a>
        </p>
      </section>
    </main>
  );
}
