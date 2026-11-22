import "server-only";
import { env } from "@/lib/env";

const SENDGRID_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";

interface SendMailInput {
  subject: string;
  text: string;
  replyTo?: string;
}

/** Sends via SendGrid REST API (no SDK). Returns false when SendGrid isn't configured. */
export async function sendMail({ subject, text, replyTo }: SendMailInput) {
  if (!env.SENDGRID_API_KEY || !env.SENDGRID_FROM_EMAIL || !env.CONTACT_TO_EMAIL) {
    return false;
  }

  const res = await fetch(SENDGRID_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: env.CONTACT_TO_EMAIL }] }],
      from: { email: env.SENDGRID_FROM_EMAIL },
      reply_to: replyTo ? { email: replyTo } : undefined,
      subject,
      content: [{ type: "text/plain", value: text }],
    }),
  });

  if (!res.ok) throw new Error(`SendGrid ${res.status}`);
  return true;
}
