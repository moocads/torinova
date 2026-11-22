import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMail } from "@/lib/sendgrid";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.email(),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(1).max(5000),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  const { name, email, phone, message } = parsed.data;

  try {
    const sent = await sendMail({
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? "-"}\n\n${message}`,
      replyTo: email,
    });
    if (!sent) {
      return NextResponse.json({ ok: false, error: "email_not_configured" }, { status: 503 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
