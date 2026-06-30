import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { CONTACT } from '@/data/contact'

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message, category } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Brakuje wymaganych pól.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Formularz elektrycznyŁada" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || CONTACT.email.display,
      replyTo: email,
      subject: `Nowe zapytanie od ${name} – elektrycznyŁada`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px;">
          <div style="border-top: 3px solid #F5C842; padding-top: 24px; margin-bottom: 24px;">
            <h1 style="font-size: 22px; font-weight: 800; color: #1a1c1c; margin: 0 0 4px 0;">
              Nowe zapytanie – elektrycznyŁada
            </h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #7f7662; padding: 10px 0 4px; border-bottom: 1px solid #d1c5ae;">
                Imię i nazwisko
              </td>
              <td style="padding: 10px 0 4px; border-bottom: 1px solid #d1c5ae; color: #1a1c1c; font-size: 15px;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #7f7662; padding: 10px 0 4px; border-bottom: 1px solid #d1c5ae;">
                Email
              </td>
              <td style="padding: 10px 0 4px; border-bottom: 1px solid #d1c5ae; color: #1a1c1c; font-size: 15px;">
                <a href="mailto:${email}" style="color: #755b00;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #7f7662; padding: 10px 0 4px; border-bottom: 1px solid #d1c5ae;">
                Telefon
              </td>
              <td style="padding: 10px 0 4px; border-bottom: 1px solid #d1c5ae; color: #1a1c1c; font-size: 15px;">
                <a href="tel:${phone}" style="color: #755b00;">${phone}</a>
              </td>
            </tr>` : ''}
            ${category ? `
            <tr>
              <td style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #7f7662; padding: 10px 0 4px; border-bottom: 1px solid #d1c5ae;">
                Kategoria
              </td>
              <td style="padding: 10px 0 4px; border-bottom: 1px solid #d1c5ae; color: #1a1c1c; font-size: 15px;">
                ${category}
              </td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 24px;">
            <p style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #7f7662; margin-bottom: 12px;">
              Treść wiadomości
            </p>
            <div style="background: #ffffff; border-left: 3px solid #F5C842; padding: 16px 20px; color: #1a1c1c; font-size: 15px; line-height: 1.65; white-space: pre-wrap;">
              ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </div>
          </div>

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #d1c5ae;">
            <p style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #7f7662; text-transform: uppercase; letter-spacing: 0.05em;">
              elektrycznyŁada · ${CONTACT.address.street}, ${CONTACT.address.city} · ${CONTACT.email.display}
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact API] Error:', error)
    return NextResponse.json({ error: 'Błąd serwera. Spróbuj ponownie.' }, { status: 500 })
  }
}
