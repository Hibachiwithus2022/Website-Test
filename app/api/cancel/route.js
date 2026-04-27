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
      subject: `Booking Cancelled – ${data.name} – ${data.date}`,
      html: `
        <h2>Booking Cancellation</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Guests:</strong> ${data.guests}</p>
        ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
      `,
    });

    // EMAIL TO CUSTOMER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Your Hibachi Booking Has Been Cancelled",
      html: `
        <h2>Hi ${data.name},</h2>
        <p>Your <strong>Hibachi Connect</strong> booking has been cancelled.</p>
        <ul>
          <li><strong>Date:</strong> ${data.date}</li>
          <li><strong>Time:</strong> ${data.time}</li>
          <li><strong>Guests:</strong> ${data.guests}</li>
        </ul>
        ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
        <p>If this cancellation was not requested by you, please contact us immediately.</p>
        <p style="color:#888;font-size:13px;">Need to rebook? Visit our website to schedule a new appointment.</p>
      `,
    });

    // UPDATE GOOGLE SHEETS
    if (process.env.SHEETS_WEBHOOK_URL) {
      fetch(process.env.SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'cancel', bookingId: data.bookingId }),
      }).catch(() => {});
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
