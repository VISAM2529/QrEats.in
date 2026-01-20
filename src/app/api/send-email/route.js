import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, phone, cafeName, city } = body;

        // Basic validation
        if (!name || !phone) {
            return NextResponse.json({ message: 'Name and Phone are required' }, { status: 400 });
        }

        // Configure Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email to Admin (User who receives the lead)
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "info@qreats.in", // Sending to self
            subject: `🚀 New QrEats Demo Request: ${cafeName || name}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #FF6B00;">New Demo Request Received!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Cafe Name:</strong> ${cafeName || 'N/A'}</p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>City:</strong> ${city || 'N/A'}</p>
          <br />
          <p style="color: #888; font-size: 12px;">Sent from QrEats Website</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
