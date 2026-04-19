import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Hibachi Menu | Hibachi Connect',
  description: 'Full hibachi menu: proteins, premium add-ons, sides, and extras. Every guest picks 2 proteins. Starting at $60/adult.',
}

const PROTEINS = [
  { name: 'Chicken', desc: 'Tender breast, seasoned with garlic butter and soy — the crowd favorite.' },
  { name: 'Steak', desc: 'Sirloin cooked to order, seared on the teppan with hibachi seasoning.' },
  { name: 'Shrimp', desc: 'Jumbo shrimp grilled with garlic butter and a touch of lemon.' },
  { name: 'Salmon', desc: 'Fresh Atlantic salmon fillet, lightly seasoned and perfectly seared.' },
  { name: 'Scallops', desc: 'Sea scallops seared to a golden crust with herb butter.' },
  { name: 'Tofu', desc: 'Firm tofu grilled with hibachi sauce — great for vegetarians.' },
]

const PREMIUM = [
  { name: 'Filet Mignon', price: '+$5/person', desc: 'Center-cut tenderloin — the most tender beef on the menu.' },
  { name: 'Lobster Tail', price: '+$10/person', desc: 'Whole lobster tail grilled tableside with drawn butter.' },
]

const SIDES = [
  { name: 'Hibachi Fried Rice', desc: 'Egg fried rice cooked tableside — always included.' },
  { name: 'Grilled Vegetables', desc: 'Zucchini, mushrooms, onions, and bean sprouts — always included.' },
  { name: 'House Salad', desc: 'Garden salad with signature ginger dressing — always included.' },
]

const SAUCES = ['Yum Yum Sauce', 'Ginger Sauce', 'Teriyaki Glaze', 'Soy Sauce']

const EXTRAS = [
  { name: 'Yakisoba Noodles', price: '$5/order', desc: 'Stir-fried noodles — one order feeds 3–4 guests.' },
  { name: 'Gyoza (8 pcs)', price: '$10/order', desc: 'Pan-seared pork dumplings — one order feeds 4–6 guests.' },
  { name: 'Edamame', price: '$6/order', desc: 'Salted edamame — great starter while the chef sets up.' },
  { name: 'Extra Protein (standard)', price: '$15/order', desc: 'Add an extra order of any standard protein.' },
  { name: 'Extra Filet Mignon', price: '$20/order', desc: 'Additional filet mignon order.' },
  { name: 'Extra Lobster Tail', price: '$25/order', desc: 'Additional lobster tail order.' },
]

function Section({ title, subtitle, children }) {
  return (
    <div style={{ marginBottom: '56px' }}>
      <div style={{ marginBottom: '24px', borderBottom: '2px solid #E8DFC8', paddingBottom: '12px' }}>
        <h2 style={{ color: '#1A1209', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, margin: 0, letterSpacing: '-0.01em' }}>
          {title}
        </h2>
        {subtitle && <p style={{ color: '#888', fontSize: '14px', margin: '4px 0 0' }}>{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#F5EFE0', minHeight: '100vh' }}>

        {/* Header */}
        <section style={{ background: '#1A1209', padding: '80px 24px 60px', textAlign: 'center' }}>
          <p style={{ color: '#D4A843', fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
            What We Serve
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 16px' }}>
            Hibachi Menu
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Every guest picks <strong style={{ color: '#fff' }}>2 proteins</strong> from the standard menu. Sides, sauces, and entertainment always included.
          </p>

          {/* Price bar */}
          <div style={{ display: 'inline-flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px 32px' }}>
            {[
              { val: '$60', label: 'Per Adult', sub: '13 & older' },
              { val: '$30', label: 'Per Child', sub: 'Ages 4–12' },
              { val: 'Free', label: 'Under 3', sub: 'Always' },
              { val: '$600', label: 'Minimum', sub: 'All events' },
            ].map(({ val, label, sub }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ color: '#D4A843', fontSize: '22px', fontWeight: 800 }}>{val}</div>
                <div style={{ color: '#fff', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>{sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Content */}
        <section style={{ maxWidth: '820px', margin: '0 auto', padding: '56px 24px 80px' }}>

          {/* Standard Proteins */}
          <Section title="Standard Proteins" subtitle="Every guest picks 2 — included in base price">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
              {PROTEINS.map(p => (
                <div key={p.name} style={{ background: '#fff', borderRadius: '12px', padding: '18px 20px', boxShadow: '0 2px 8px rgba(26,18,9,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C8102E', flexShrink: 0 }} />
                    <strong style={{ color: '#1A1209', fontSize: '15px' }}>{p.name}</strong>
                  </div>
                  <p style={{ color: '#777', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Premium Add-ons */}
          <Section title="Premium Upgrades" subtitle="Counts as one of your 2 protein picks">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
              {PREMIUM.map(p => (
                <div key={p.name} style={{ background: '#1A1209', borderRadius: '12px', padding: '20px 24px', boxShadow: '0 2px 12px rgba(26,18,9,0.15)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <strong style={{ color: '#fff', fontSize: '16px' }}>{p.name}</strong>
                    <span style={{ background: '#D4A843', color: '#1A1209', fontSize: '12px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', whiteSpace: 'nowrap' }}>{p.price}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Sides */}
          <Section title="Always Included" subtitle="Every event comes with all three">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SIDES.map(s => (
                <div key={s.name} style={{ background: '#fff', borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 2px 8px rgba(26,18,9,0.06)' }}>
                  <span style={{ color: '#C8102E', fontSize: '18px' }}>✓</span>
                  <div>
                    <strong style={{ color: '#1A1209', fontSize: '15px' }}>{s.name}</strong>
                    <p style={{ color: '#888', fontSize: '13px', margin: '2px 0 0' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sauces */}
            <div style={{ marginTop: '16px', background: '#fff', borderRadius: '10px', padding: '16px 20px', boxShadow: '0 2px 8px rgba(26,18,9,0.06)' }}>
              <strong style={{ color: '#1A1209', fontSize: '15px', display: 'block', marginBottom: '10px' }}>Sauce Spread — Always Included</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {SAUCES.map(s => (
                  <span key={s} style={{ background: '#F5EFE0', color: '#555', fontSize: '13px', padding: '4px 12px', borderRadius: '20px', border: '1px solid #E8DFC8' }}>{s}</span>
                ))}
              </div>
            </div>
          </Section>

          {/* Extras */}
          <Section title="Extras & Add-Ons" subtitle="Ordered per table, not per person">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {EXTRAS.map(e => (
                <div key={e.name} style={{ background: '#fff', borderRadius: '10px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', boxShadow: '0 2px 8px rgba(26,18,9,0.06)', flexWrap: 'wrap' }}>
                  <div>
                    <strong style={{ color: '#1A1209', fontSize: '15px' }}>{e.name}</strong>
                    <p style={{ color: '#888', fontSize: '13px', margin: '2px 0 0' }}>{e.desc}</p>
                  </div>
                  <span style={{ background: '#F5EFE0', color: '#C8102E', fontSize: '13px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', border: '1px solid #E8DFC8', whiteSpace: 'nowrap' }}>{e.price}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <div style={{ background: '#1A1209', borderRadius: '16px', padding: '40px 32px', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, margin: '0 0 10px' }}>
              Ready to build your menu?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', margin: '0 0 24px' }}>
              Get an instant price estimate or reserve your date now.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/estimation" style={{ background: '#D4A843', color: '#1A1209', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                Get Instant Quote
              </Link>
              <Link href="/booking" style={{ background: '#C8102E', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                Book Now
              </Link>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}
