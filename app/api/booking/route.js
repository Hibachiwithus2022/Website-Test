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

    // EMAIL TO YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "🔥 New Hibachi Booking",
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Guests:</strong> ${data.guests}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    // EMAIL TO CUSTOMER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "🔥 Your Hibachi Booking Request Received",
      html: `
        <h2>Hi ${data.name},</h2>
        <p>Thanks for booking with <strong>Hibachi Connect</strong>!</p>

        <p>Here are your details:</p>
        <ul>
          <li>Date: ${data.date}</li>
          <li>Guests: ${data.guests}</li>
        </ul>

        <p>We will contact you shortly to confirm your event.</p>

        <p>🔥 Get ready for an amazing hibachi experience!</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
