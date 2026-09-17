import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, mobile, pickup, dropoff, date, time, price, routeFrom, routeTo } = body;

    const adminEmail = process.env.BOOKING_EMAIL || '1306shub@gmail.com';

    const subject = `New Cab Booking: ${routeFrom} to ${routeTo}`;
    const message = `
      <h2>New Booking Details</h2>
      <p><strong>Name:</strong> ${name}</p>
     
      <p><strong>Mobile Number:</strong> ${mobile}</p>
      <p><strong>Route:</strong> ${routeFrom} to ${routeTo}</p>
      <p><strong>Pickup:</strong> ${pickup}</p>
      <p><strong>Dropoff:</strong> ${dropoff}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Price:</strong> ₹${price}</p>
    `;

    const finalMessage = `<p>Dear ${name},</p><p>We have received your booking request.</p>${message}<p>We will contact you shortly.</p>`;

    // Send to admin
    const adminResponse = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: adminEmail,
      subject: subject,
      html: finalMessage,
    });

    if (adminResponse.error) {
      console.error('Error sending to admin:', adminResponse.error);
      return NextResponse.json({ success: false, error: adminResponse.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
