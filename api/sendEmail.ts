import { Resend } from 'resend'
import { contactSchema } from '../src/lib/validation/contactSchema'

const resend = new Resend(process.env.RESEND_API_KEY)

export const config = { runtime: 'edge' }

export default async function handler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'content-type': 'application/json' },
      })
    }

    const body = await req.json()
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
        headers: { 'content-type': 'application/json' },
      })
    }

    const data = parsed.data

    // TEMPORARY VERIFIED SENDER (Resend onboarding domain)
    // Once 'wrightanglecarpentry.co.uk' is verified in Resend,
    // change RESEND_FROM in Vercel to use your domain email.
    const FROM =
      process.env.RESEND_FROM ||
      'Wright Angle Carpentry <onboarding@resend.dev>'

    const TO = process.env.RESEND_TO || 'james@wrightanglecarpentry.co.uk'

    const result = await resend.emails.send({
      from: FROM,
      to: [TO],
      reply_to: data.email,
      subject: 'New enquiry from Wright Angle Carpentry website',
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || 'N/A'}`,
        '',
        'Message:',
        data.message,
      ].join('\n'),
    })

    if ('error' in result && result.error) {
      console.error('Resend error:', result.error)
      return new Response(JSON.stringify({ error: 'Email send failed' }), {
        status: 500,
        headers: { 'content-type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    console.error('API error:', errorMessage)
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }
}

