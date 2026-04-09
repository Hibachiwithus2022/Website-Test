import nodemailer from 'nodemailer'

const OWNER_EMAIL = process.env.OWNER_EMAIL
const SMTP_HOST   = process.env.SMTP_HOST
const SMTP_PORT   = parseInt(process.env.SMTP_PORT || '587', 10)
const SMTP_USER   = process.env.SMTP_USER
const SMTP_PASS   = process.env.SMTP_PASS

function createTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
}

// ── Email to the business owner ──────────────────────────────────────────────
function ownerEmailHtml({ name, email, phone, date, guests, message }) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F8F5F2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border:1px solid rgba(26,18,9,0.1);overflow:hidden;">
    <!-- Header -->
    <div style="background:#1A1209;padding:28px 32px;display:flex;align-items:center;gap:12px;">
      <div style="width:4px;height:32px;background:#C8102E;flex-shrink:0;"></div>
      <div>
        <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(245,239,224,0.5);margin-bottom:4px;">New Booking Request</div>
        <div style="font-size:22px;font-weight:700;color:#F5EFE0;letter-spacing:0.01em;">Hibachi Connect</div>
      </div>
    </div>
    <!-- Body -->
    <div style="padding:32px;">
      <p style="margin:0 0 24px;font-size:15px;color:rgba(26,18,9,0.6);line-height:1.6;">
        A new booking request has been submitted. Review the details below and follow up with the customer.
      </p>
      <!-- Detail rows -->
      <table style="width:100%;border-collapse:collapse;">
        ${[
          ['Name',         name],
          ['Email',        email],
          ['Phone',        phone],
          ['Event Date',   date],
          ['Guests',       guests],
        ].map(([label, val]) => `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid rgba(26,18,9,0.07);width:130px;">
            <span style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(26,18,9,0.4);">${label}</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid rgba(26,18,9,0.07);">
            <span style="font-size:15px;color:#1A1209;font-weight:600;">${val || '—'}</span>
          </td>
        </tr>`).join('')}
      </table>
      ${message ? `
      <div style="margin-top:24px;">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(26,18,9,0.4);margin-bottom:10px;">Message</div>
        <div style="background:#F8F5F2;border-left:3px solid #C8102E;padding:16px;font-size:14px;color:rgba(26,18,9,0.75);line-height:1.7;">${message}</div>
      </div>` : ''}
      <!-- CTA -->
      <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(26,18,9,0.08);">
        <a href="mailto:${email}" style="display:inline-block;background:#C8102E;color:#fff;font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;padding:14px 28px;">
          Reply to Customer
        </a>
      </div>
    </div>
    <!-- Footer -->
    <div style="background:#F8F5F2;padding:20px 32px;border-top:1px solid rgba(26,18,9,0.08);">
      <p style="margin:0;font-size:12px;color:rgba(26,18,9,0.4);">
        Hibachi Connect · hibachiconnect.com · (602) 767-2965
      </p>
    </div>
  </div>
</body>
</html>`
}

// ── Confirmation email to the customer ───────────────────────────────────────
function customerEmailHtml({ name, date, guests }) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F8F5F2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border:1px solid rgba(26,18,9,0.1);overflow:hidden;">
    <!-- Header -->
    <div style="background:#1A1209;padding:28px 32px;">
      <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(245,239,224,0.5);margin-bottom:6px;">Booking Confirmed</div>
      <div style="font-size:24px;font-weight:700;color:#F5EFE0;letter-spacing:0.01em;">We Got Your Request!</div>
    </div>
    <!-- Red accent bar -->
    <div style="height:3px;background:linear-gradient(to right,#C8102E,#D4A843);"></div>
    <!-- Body -->
    <div style="padding:36px 32px;">
      <p style="margin:0 0 8px;font-size:18px;font-weight:700;color:#1A1209;">Hi ${name},</p>
      <p style="margin:0 0 24px;font-size:15px;color:rgba(26,18,9,0.65);line-height:1.7;">
        Thank you for reaching out to Hibachi Connect! We've received your booking request and will be in touch within <strong>1 business day</strong> to confirm your event details.
      </p>
      <!-- Summary card -->
      <div style="background:#F8F5F2;border:1px solid rgba(26,18,9,0.08);padding:24px;margin-bottom:28px;">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(26,18,9,0.4);margin-bottom:16px;">Your Event Summary</div>
        <table style="width:100%;border-collapse:collapse;">
          ${[
            ['Event Date', date],
            ['Guests',     guests],
          ].map(([label, val]) => `
          <tr>
            <td style="padding:9px 0;border-bottom:1px solid rgba(26,18,9,0.07);width:130px;">
              <span style="font-size:12px;color:rgba(26,18,9,0.45);">${label}</span>
            </td>
            <td style="padding:9px 0;border-bottom:1px solid rgba(26,18,9,0.07);">
              <span style="font-size:14px;font-weight:600;color:#1A1209;">${val || '—'}</span>
            </td>
          </tr>`).join('')}
        </table>
      </div>
      <!-- What's next -->
      <div style="margin-bottom:28px;">
        <div style="font-size:13px;font-weight:700;letter-spacing:0.08em;color:#1A1209;margin-bottom:14px;">What happens next:</div>
        ${[
          ['📞', "We'll call or email to confirm your event date and location."],
          ['👨\u200d🍳', "We'll match you with a professional hibachi chef in your area."],
          ['🔥', 'Your chef arrives, sets up, and puts on an amazing show!'],
        ].map(([icon, text]) => `
        <div style="display:flex;gap:12px;margin-bottom:10px;align-items:flex-start;">
          <span style="font-size:18px;flex-shrink:0;line-height:1.5;">${icon}</span>
          <span style="font-size:14px;color:rgba(26,18,9,0.65);line-height:1.6;">${text}</span>
        </div>`).join('')}
      </div>
      <p style="margin:0;font-size:14px;color:rgba(26,18,9,0.55);line-height:1.7;">
        Questions? Call us at <a href="tel:+16027672965" style="color:#C8102E;font-weight:600;text-decoration:none;">(602) 767-2965</a> or reply to this email.
      </p>
    </div>
    <!-- Footer -->
    <div style="background:#1A1209;padding:24px 32px;">
      <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#F5EFE0;">Hibachi Connect</p>
      <p style="margin:0;font-size:12px;color:rgba(245,239,224,0.45);">
        hibachiconnect.com · info@hibachiconnect.com · (602) 767-2965
      </p>
    </div>
  </div>
</body>
</html>`
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, guests, message } = body

    // Basic validation
    if (!name || !email || !phone || !date || !guests) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // Check env vars
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !OWNER_EMAIL) {
      console.error('Missing SMTP environment variables')
      return Response.json({ error: 'Server configuration error.' }, { status: 500 })
    }

    const transporter = createTransporter()

    // Send both emails in parallel
    await Promise.all([
      // 1. Notify owner
      transporter.sendMail({
        from:    `"Hibachi Connect" <${SMTP_USER}>`,
        to:      OWNER_EMAIL,
        subject: `New Booking Request — ${name} (${date})`,
        html:    ownerEmailHtml({ name, email, phone, date, guests, message }),
      }),
      // 2. Confirm to customer
      transporter.sendMail({
        from:    `"Hibachi Connect" <${SMTP_USER}>`,
        to:      email,
        subject: 'We received your hibachi booking request!',
        html:    customerEmailHtml({ name, date, guests }),
      }),
    ])

    return Response.json({ success: true })
  } catch (err) {
    console.error('Booking API error:', err)
    return Response.json({ error: 'Failed to send. Please try again or call us directly.' }, { status: 500 })
  }
}
