import { NextRequest, NextResponse } from "next/server";

/** Simple in-memory rate limiter */
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, email, phone, message } = body;

    // Server-side validation
    if (!name?.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!email?.trim() || !validateEmail(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }
    if (!phone?.trim()) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }
    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (e.g., Resend, SendGrid, Nodemailer)
    // For now, log the submission
    console.log("Contact form submission:", {
      name: name.trim(),
      company: company?.trim() || "",
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
