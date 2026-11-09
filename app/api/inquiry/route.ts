import { NextResponse } from "next/server";
import { Resend } from "resend";
import { formatInquiryEmail, validateInquiry } from "@/lib/inquiry";
import { CONTACT_EMAIL } from "@/lib/offer";

export const runtime = "nodejs";

const DEFAULT_FROM = "UnlockLab <hello@unlocklab.ai>";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ errors: { form: "Invalid submission." } }, { status: 400 });
  }

  const result = validateInquiry(body);
  if (!result.ok) {
    // Bots get a normal-looking success so they don't retry; nothing is sent.
    if (result.spam) {
      // Logged so a real person caught by the honeypot shows up in Vercel logs.
      console.warn("[inquiry] honeypot hit; dropped submission");
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ errors: result.errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[inquiry] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const { subject, text } = formatInquiryEmail(result.data);
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: process.env.INQUIRY_FROM || DEFAULT_FROM,
      to: process.env.INQUIRY_TO || CONTACT_EMAIL,
      replyTo: result.data.email,
      subject,
      text,
    });
    if (error) {
      console.error("[inquiry] Resend error:", error.name, error.message);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[inquiry] Resend request failed:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
