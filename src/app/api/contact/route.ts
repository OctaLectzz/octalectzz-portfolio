import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { contactInfo } from '@/data'

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL, // Must be configured in .env (e.g. octalectzz@gmail.com)
        pass: process.env.SMTP_PASSWORD // Must be configured in .env (App Password)
      }
    })

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: contactInfo.email,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp || 'Not provided'}</p>
          <br />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-left: 4px solid #0070f3;">${message}</p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
