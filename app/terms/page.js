import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Terms & Conditions | Hibachi Connect',
  description: 'Terms and Conditions for Hibachi Connect private hibachi chef services. Read our policies on bookings, cancellations, liability, and independent contractor relationships.',
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = 'April 18, 2026'
const COMPANY = 'Hibachi Connect'
const EMAIL = 'info@hibachiconnect.com'
const PHONE = '(602) 767-2965'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By submitting a booking request, making a payment, or using any service provided by ${COMPANY} ("Company," "we," "us," or "our"), you ("Client," "Customer," or "you") agree to be fully bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you must not use our services.

These Terms apply to all clients, guests, event hosts, and any person present at a ${COMPANY} event. By allowing others to attend your event, you agree to be responsible for ensuring all attendees comply with these Terms.`,
  },
  {
    title: '2. Services Provided',
    content: `${COMPANY} is a private hibachi and teppanyaki chef experience company operating across the contiguous United States. We connect clients with professional independent contractor chefs who travel to client-specified locations to provide live-fire cooking entertainment and food service.

${COMPANY} does not own, employ, or directly control the independent contractor chefs dispatched to events. The Company acts as a booking and coordination platform. The relationship between ${COMPANY} and its chefs is that of an independent contractor, not employer-employee.`,
  },
  {
    title: '3. Independent Contractor Relationship',
    content: `All chefs, cooks, assistants, and service personnel providing services through ${COMPANY} are independent contractors, not employees, agents, or partners of ${COMPANY}. ${COMPANY} is not responsible for:

• The acts, omissions, negligence, or misconduct of any independent contractor;
• Any employment-related claims, including but not limited to workers' compensation, unemployment benefits, overtime pay, or employee benefits;
• Any federal, state, or local tax obligations of independent contractors;
• Personal injury, property damage, or other harm caused by an independent contractor's actions outside the agreed scope of service.

Independent contractors are responsible for maintaining their own liability insurance, health insurance, and any required business licenses. ${COMPANY} makes no representations or warranties regarding the qualifications, certifications, or background of independent contractors beyond its standard vetting process.`,
  },
  {
    title: '4. Booking, Deposits & Payments',
    content: `4.1 Booking Confirmation: A booking is not confirmed until ${COMPANY} has sent written confirmation via email or text message. Submitting a request form does not guarantee availability.

4.2 Payment Terms: ${COMPANY} accepts Cash and Zelle only. No credit cards, checks, or digital payment platforms are accepted unless expressly agreed to in writing. Full payment is due on the day of the event prior to service commencement, unless otherwise agreed in writing.

4.3 Minimum Order: All events are subject to a $600 minimum. Events with fewer guests than the minimum will still be charged the minimum rate.

4.4 Pricing: The standard rate is $60 per adult (13 years and older) and $30 per child (ages 4–12). Children under 4 eat free. Prices are subject to change without notice until a booking is confirmed in writing.

4.5 Travel Fees: Events located more than a reasonable distance from the assigned chef's base may be subject to additional travel fees. Travel fees will be disclosed prior to booking confirmation.

4.6 Gratuity: Gratuity for the chef is not included in the quoted price and is entirely at the client's discretion. However, gratuity is strongly encouraged and appreciated by our chefs.`,
  },
  {
    title: '5. Cancellation & Rescheduling Policy',
    content: `5.1 Client Cancellations:
• Cancellation 7 or more days before the event: Full refund of any deposit paid.
• Cancellation 3–6 days before the event: 50% of the total estimated event cost is due as a cancellation fee.
• Cancellation less than 72 hours before the event: 100% of the total estimated event cost is due.
• No-show or cancellation on the event date: Full payment is required.

5.2 Rescheduling: Clients may reschedule an event one (1) time at no charge with at least 5 days' written notice. Subsequent rescheduling requests are subject to a $100 rescheduling fee.

5.3 ${COMPANY} Cancellations: ${COMPANY} reserves the right to cancel an event due to circumstances beyond our control, including but not limited to chef illness, emergency, severe weather, or force majeure events. In such cases, clients will receive a full refund of any payments made or the option to reschedule at no additional charge.`,
  },
  {
    title: '6. Food Safety, Allergies & Dietary Restrictions',
    content: `6.1 Allergen Disclaimer: ${COMPANY} and its independent contractor chefs are NOT a certified allergen-free kitchen. Our menus contain or may come into contact with common allergens including but not limited to soy, shellfish, gluten, eggs, sesame, and tree nuts. Cross-contamination is possible.

6.2 Client Responsibility: It is the Client's sole responsibility to inform ${COMPANY} in writing of any food allergies or dietary restrictions prior to the event. ${COMPANY} and its contractors will make reasonable efforts to accommodate disclosed restrictions but cannot guarantee an allergen-free environment.

6.3 Medical Conditions: By attending a ${COMPANY} event, you acknowledge awareness of the food being prepared and assume full responsibility for your personal dietary decisions. ${COMPANY} is not liable for any allergic reaction, illness, or medical incident resulting from consumption of food prepared at an event.

6.4 Alcohol: ${COMPANY} does not provide or serve alcohol. Clients are responsible for compliance with all applicable alcohol laws at their event. ${COMPANY} reserves the right to refuse service or leave an event where guests are visibly intoxicated and creating unsafe conditions.`,
  },
  {
    title: '7. Property & Venue Responsibility',
    content: `7.1 Client Venue Obligations: The Client is responsible for ensuring the event location is safe, legally accessible, and suitable for open-flame cooking. The Client must provide adequate space, a level surface, and appropriate ventilation for outdoor or semi-indoor events.

7.2 Permits & Compliance: The Client is solely responsible for obtaining any required permits, HOA approvals, or venue permissions for events involving open-flame cooking. ${COMPANY} is not liable for fines, citations, or event shutdowns due to the Client's failure to obtain required permits.

7.3 Property Damage: ${COMPANY} and its independent contractors are not liable for damage to property, surfaces, decks, patios, lawns, furniture, or any other items resulting from the cooking process, including heat, grease, sparks, or spills, unless caused by gross negligence or willful misconduct on the part of ${COMPANY} personnel.

7.4 Client Equipment: Clients agree not to hold ${COMPANY} responsible for any damage to personal property brought near the cooking area.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:

8.1 ${COMPANY}'s total liability to any client for any claim arising from or related to our services, whether in contract, tort, or otherwise, shall not exceed the total amount paid by the Client for the specific event giving rise to the claim.

8.2 ${COMPANY} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, including but not limited to loss of profits, loss of data, personal injury, or property damage.

8.3 ${COMPANY} is not responsible for personal injury to any event guest, whether caused by the cooking process, consumption of food, slipping, tripping, or any other incident at the event venue. The Client assumes full responsibility for the safety of their guests.

8.4 Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability shall be limited to the greatest extent permitted by law.`,
  },
  {
    title: '9. Indemnification',
    content: `You agree to indemnify, defend, and hold harmless ${COMPANY}, its owners, officers, directors, affiliates, employees, independent contractors, agents, and successors ("Indemnified Parties") from and against any and all claims, liabilities, losses, damages, costs, and expenses (including reasonable attorneys' fees) arising from or related to:

• Your use of our services;
• Your breach of these Terms;
• Your violation of any applicable law or regulation;
• Any bodily injury, property damage, or other harm occurring at your event venue;
• Any claim brought by your guests, invitees, or third parties related to the event;
• Your failure to obtain required permits or approvals;
• Any misrepresentation made by you to ${COMPANY}.

This indemnification obligation survives the termination or expiration of these Terms.`,
  },
  {
    title: '10. Health & Safety',
    content: `10.1 Safe Environment: The Client agrees to provide a safe working environment for the chef and all ${COMPANY} personnel. ${COMPANY} reserves the right to immediately terminate service and leave the event without refund if the chef or personnel feel unsafe, are subjected to harassment, discrimination, or threatening behavior.

10.2 Children & Minors: Children must be supervised by a responsible adult at all times and kept at a safe distance from the cooking area. ${COMPANY} is not responsible for injuries to unsupervised minors.

10.3 Pets: Clients are responsible for securing pets away from the cooking area. ${COMPANY} is not liable for pet injuries or pet-related property damage.

10.4 COVID-19 & Communicable Disease: ${COMPANY} does not guarantee a disease-free environment. Clients and guests assume all risks associated with gathering in groups.`,
  },
  {
    title: '11. Intellectual Property',
    content: `All content on the ${COMPANY} website, including text, graphics, logos, images, and software, is the property of ${COMPANY} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.

${COMPANY} may photograph or video events for marketing purposes. By booking an event, the Client grants ${COMPANY} a non-exclusive, royalty-free license to use images or video from the event for marketing and promotional purposes. If you do not consent to photography, you must notify us in writing at least 48 hours before the event.`,
  },
  {
    title: '12. Privacy',
    content: `By booking with ${COMPANY}, you consent to the collection and use of your personal information (name, phone, email, event address) for the purposes of scheduling, confirming, and managing your event. We do not sell your personal information to third parties. We may use your contact information to send service-related communications and, with your consent, promotional offers.

SMS communications: By providing your phone number, you consent to receive booking-related SMS messages from ${COMPANY}. Message and data rates may apply. You may opt out at any time by replying STOP.`,
  },
  {
    title: '13. Force Majeure',
    content: `Neither ${COMPANY} nor its independent contractors shall be liable for any delay or failure to perform resulting from causes beyond their reasonable control, including but not limited to acts of God, severe weather, natural disasters, government actions, pandemics, civil unrest, war, strikes, or utility failures. In such events, ${COMPANY} will make reasonable efforts to reschedule your event.`,
  },
  {
    title: '14. Dispute Resolution & Governing Law',
    content: `14.1 Governing Law: These Terms shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law provisions.

14.2 Informal Resolution: Before initiating any legal proceeding, both parties agree to attempt to resolve disputes informally by contacting ${COMPANY} at ${EMAIL} or ${PHONE}. We will attempt to resolve the dispute within 30 days.

14.3 Binding Arbitration: If informal resolution fails, any dispute, claim, or controversy arising from or relating to these Terms or our services shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules. The arbitration will take place in Maricopa County, Arizona. Each party shall bear its own costs, except as required by the AAA rules.

14.4 Class Action Waiver: YOU WAIVE ANY RIGHT TO PARTICIPATE IN CLASS ACTION LAWSUITS OR CLASS-WIDE ARBITRATION against ${COMPANY} or any of its affiliated parties.

14.5 Small Claims Exception: Either party may bring an individual claim in small claims court in lieu of arbitration, provided the claim qualifies.`,
  },
  {
    title: '15. Severability & Entire Agreement',
    content: `If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it enforceable.

These Terms, together with any written booking confirmation from ${COMPANY}, constitute the entire agreement between you and ${COMPANY} regarding our services and supersede all prior agreements, representations, or understandings.`,
  },
  {
    title: '16. Modifications to Terms',
    content: `${COMPANY} reserves the right to update or modify these Terms at any time. Updated Terms will be posted on our website with a revised effective date. Your continued use of our services after any changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically.`,
  },
  {
    title: '17. Contact Information',
    content: `For questions about these Terms and Conditions, please contact us:

Hibachi Connect
Email: ${EMAIL}
Phone: ${PHONE}
Website: hibachiconnect.com`,
  },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: '#1A1209', paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="red-pill" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>Legal</div>
            <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem,7vw,5rem)', color: '#F5EFE0', lineHeight: 1, marginBottom: '1rem', letterSpacing: '0.02em' }}>
              Terms &amp;<br />
              <span style={{ color: '#C8102E' }}>Conditions</span>
            </h1>
            <p style={{ color: 'rgba(245,239,224,0.5)', fontSize: '0.9rem', lineHeight: 1.75 }}>
              Effective Date: {EFFECTIVE_DATE} · Last Updated: {EFFECTIVE_DATE}
            </p>
            <p style={{ color: 'rgba(245,239,224,0.45)', fontSize: '0.85rem', lineHeight: 1.75, marginTop: '0.75rem', maxWidth: '42rem' }}>
              Please read these Terms and Conditions carefully before using Hibachi Connect's services. By booking an event you agree to be bound by these terms.
            </p>
          </div>
        </section>

        {/* Disclaimer banner */}
        <div style={{ background: 'rgba(212,168,67,0.1)', borderBottom: '1px solid rgba(212,168,67,0.2)', padding: '1rem 1.5rem' }}>
          <div className="max-w-4xl mx-auto" style={{ fontSize: '0.82rem', color: 'rgba(26,18,9,0.65)', lineHeight: 1.6 }}>
            <strong style={{ color: '#D4A843' }}>Legal Notice:</strong> These Terms and Conditions are provided for informational purposes and represent Hibachi Connect's standard service agreement. Hibachi Connect recommends that clients consult with their own legal counsel if they have questions about these terms. Nothing herein constitutes legal advice.
          </div>
        </div>

        {/* Content */}
        <section style={{ background: '#FFFFFF', padding: '4rem 1.5rem' }}>
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div style={{ background: '#F8F5F2', border: '1px solid rgba(26,18,9,0.08)', borderLeft: '4px solid #C8102E', padding: '1.5rem 2rem', marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'rgba(26,18,9,0.7)', lineHeight: 1.8, margin: 0 }}>
                These Terms and Conditions ("Terms") govern your use of Hibachi Connect's website located at <strong>hibachiconnect.com</strong> and all private hibachi chef services provided by <strong>Hibachi Connect</strong>. These Terms protect the rights and safety of all parties — including clients, guests, independent contractor chefs, and Hibachi Connect personnel.
              </p>
            </div>

            {/* Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {sections.map((s, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(26,18,9,0.07)', paddingBottom: '2.5rem' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-bebas, sans-serif)',
                    fontSize: '1.5rem', color: '#1A1209',
                    letterSpacing: '0.04em', marginBottom: '1rem',
                  }}>
                    {s.title}
                  </h2>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(26,18,9,0.7)', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
                    {s.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div style={{ marginTop: '3rem', padding: '1.5rem 2rem', background: '#F8F5F2', border: '1px solid rgba(26,18,9,0.08)' }}>
              <p style={{ fontSize: '0.82rem', color: 'rgba(26,18,9,0.55)', lineHeight: 1.75, margin: 0 }}>
                By using Hibachi Connect's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These Terms were last updated on {EFFECTIVE_DATE}. For questions, contact us at{' '}
                <a href={`mailto:${EMAIL}`} style={{ color: '#C8102E', textDecoration: 'none', fontWeight: 600 }}>{EMAIL}</a>{' '}
                or{' '}
                <a href={`tel:+16027672965`} style={{ color: '#C8102E', textDecoration: 'none', fontWeight: 600 }}>{PHONE}</a>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
