import nodemailer from "nodemailer";

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

    // EMAIL TO ADMIN
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Booking Rescheduled – ${data.name} – ${data.newDate}`,
      html: `
        <h2>Booking Rescheduled</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Guests:</strong> ${data.guests}</p>
        <p><strong>Previous Date:</strong> ${data.oldDate} at ${data.oldTime}</p>
        <p><strong>New Date:</strong> ${data.newDate} at ${data.newTime}</p>
      `,
    });

    // EMAIL TO CUSTOMER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Your Hibachi Booking Has Been Rescheduled",
      html: `
        <h2>Hi ${data.name},</h2>
        <p>Your <strong>Hibachi Connect</strong> booking has been rescheduled.</p>
        <ul>
          <li><strong>Previous Date:</strong> ${data.oldDate} at ${data.oldTime}</li>
          <li><strong>New Date:</strong> ${data.newDate} at ${data.newTime}</li>
          <li><strong>Guests:</strong> ${data.guests}</li>
        </ul>
        <p>If this change was not requested by you, contact us immediately.</p>
        <p style="color:#888;font-size:13px;">Cash or Zelle only · Travel fee may apply based on distance</p>
      `,
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
