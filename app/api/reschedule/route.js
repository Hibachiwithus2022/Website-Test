import nodemailer from "nodemailer";

const SITE_URL = 'https://website-test-theta-lac.vercel.app';
const LOGO_URL = `${SITE_URL}/brand/logo.png`;

function rescheduleEmailHtml({ name, bookingId, oldDate, oldTime, newDate, newTime, guests, phone, email }) {
  const firstName = name.split(' ')[0];

  const infoRow = (label, value, highlight) => `
    <tr>
      <td style="padding:5px 0;color:#888;font-size:13px;white-space:nowrap;vertical-align:top;width:140px;">${label}</td>
      <td style="padding:5px 0;font-size:14px;font-weight:600;color:${highlight ? '#C8102E' : '#1A1209'};">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F5F5F7;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F7;padding:32px 16px;">
<tr><td align="center">
<table width="100%" style="max-width:560px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#C8102E,#E8304A);padding:28px;text-align:center;">
    <img src="${LOGO_URL}" alt="Hibachi Connect" height="48" style="max-height:48px;object-fit:contain;" onerror="this.style.display='none'">
    <p style="color:rgba(255,255,255,0.9);margin:10px 0 0;font-size:13px;letter-spacing:0.05em;">Private Hibachi Experience</p>
  </td></tr>

  <!-- Body -->
  <tr><td style="padding:28px 32px;">

    <h2 style="margin:0 0 8px;color:#1A1209;font-size:22px;">Hi ${firstName},</h2>
    <p style="color:#555;line-height:1.7;margin:0 0 20px;font-size:15px;">
      Your <strong>Hibachi Connect</strong> booking has been <strong>rescheduled</strong>. Here are your updated event details.
    </p>

    <!-- Booking Card -->
    <div style="background:#F5EFE0;border-radius:10px;padding:20px 24px;border:1px solid #E8DFC8;margin-bottom:24px;">
      <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:rgba(26,18,9,0.4);">Booking Reference</p>
      <p style="margin:0 0 16px;font-size:18px;font-weight:800;color:#C8102E;letter-spacing:0.05em;">${bookingId || '—'}</p>
      <hr style="border:none;border-top:1px solid #E8DFC8;margin:0 0 16px;">

      <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#888;">Previous Date</p>
      <table style="width:100%;border-collapse:collapse;margin-bottom:12px;">
        ${infoRow('Date', `<span style="text-decoration:line-through;color:#aaa;">${oldDate}</span>`, false)}
        ${infoRow('Time', `<span style="text-decoration:line-through;color:#aaa;">${oldTime}</span>`, false)}
      </table>

      <div style="text-align:center;padding:4px 0 12px;font-size:22px;color:#C8102E;">↓</div>

      <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#C8102E;">New Date</p>
      <table style="width:100%;border-collapse:collapse;margin-bottom:12px;">
        ${infoRow('Date', newDate, true)}
        ${infoRow('Time', newTime, true)}
      </table>

      <hr style="border:none;border-top:1px solid #E8DFC8;margin:0 0 12px;">
      <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#C8102E;">Customer</p>
      <table style="width:100%;border-collapse:collapse;">
        ${infoRow('Name', name, false)}
        ${infoRow('Phone', phone, false)}
        ${infoRow('Email', email, false)}
        ${infoRow('Guests', guests, false)}
      </table>
    </div>

    <p style="color:#555;line-height:1.7;font-size:14px;margin:0;">
      If this change was not requested by you, please contact us immediately.<br><br>
      Best regards,<br><strong>Hibachi Connect</strong>
    </p>

  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#F5F5F7;padding:20px 32px;border-top:1px solid #eee;text-align:center;">
    <p style="margin:0 0 6px;font-size:13px;color:#888;">Need help? Reply to this email or contact us anytime.</p>
    <p style="margin:0;font-size:13px;color:#888;">
      📧 <a href="mailto:info@hibachiconnect.com" style="color:#C8102E;text-decoration:none;">info@hibachiconnect.com</a>
      &nbsp;·&nbsp;
      📞 <a href="tel:+16027672965" style="color:#C8102E;text-decoration:none;">(602) 767-2965</a>
    </p>
    <p style="margin:10px 0 0;font-size:11px;color:#bbb;">Cash or Zelle only · Travel fee may apply based on distance</p>
  </td></tr>

</table>
</td></tr>
</table>
</body></html>`;
}

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const sharedHtml = rescheduleEmailHtml({
      name: data.name,
      bookingId: data.bookingId,
      oldDate: data.oldDate,
      oldTime: data.oldTime,
      newDate: data.newDate,
      newTime: data.newTime,
      guests: data.guests,
      phone: data.phone,
      email: data.email,
    });

    // EMAIL TO ADMIN
    await transporter.sendMail({
      from: 'Hibachi Connect <info@hibachiconnect.com>',
      to: 'info@hibachiconnect.com',
      subject: `📅 Booking Rescheduled — ${data.name} → ${data.newDate} at ${data.newTime}`,
      html: sharedHtml,
    });

    // EMAIL TO CUSTOMER
    await transporter.sendMail({
      from: 'Hibachi Connect <info@hibachiconnect.com>',
      to: data.email,
      subject: "📅 Your Hibachi Booking Has Been Rescheduled",
      html: sharedHtml,
    });

    // UPDATE GOOGLE SHEETS
    if (process.env.SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'reschedule',
            bookingId: data.bookingId,
            oldDate: data.oldDate, oldTime: data.oldTime,
            newDate: data.newDate, newTime: data.newTime,
          }),
        });
      } catch (err) { console.error('[Sheets] Reschedule error:', err); }
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
