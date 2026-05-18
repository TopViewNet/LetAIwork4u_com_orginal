import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  product: z.string().optional(),
  plan: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid contact request" }, { status: 400 })
  }

  // TODO: Connect Resend, SMTP, HubSpot, Airtable or a database here.
  console.info("New LetAIwork4u contact request", parsed.data)

  return NextResponse.json({ ok: true })
}
