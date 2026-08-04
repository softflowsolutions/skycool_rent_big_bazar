import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

/**
 * POST /api/send-enquiry
 * ----------------------
 *
 * Receives an enquiry payload from the public website, validates it with
 * zod, applies a tiny per-IP rate limit, and forwards it to the internal
 * inbox via Resend.
 *
 * Status codes
 *   - 200  { success: true }
 *   - 400  Validation failed (zod errors).
 *   - 429  Rate limit hit (>5 requests / hour / IP).
 *   - 503  Server is mis-configured (missing RESEND_API_KEY).
 *   - 500  Anything else.
 *
 * Rate limiting
 *   - In-memory bucket keyed on client IP (x-forwarded-for first hop,
 *     falling back to x-real-ip, then a literal "unknown").
 *   - Simple sliding window: 5 requests per hour.
 *   - NOTE: in-memory means each serverless cold start gets its own
 *     bucket. That's acceptable for "stop spammers" — not for "stop
 *     determined attackers". If you need stronger guarantees, point
 *     this at Upstash / Vercel KV.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ---------- Validation ----------------------------------------------------

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Phone must be a valid 10-digit Indian number'),
  email: z
    .string()
    .trim()
    .email('Email looks invalid')
    .max(120)
    .optional()
    .or(z.literal('').transform(() => undefined)),
  address: z.string().trim().min(10, 'Address is too short').max(400),
  category: z.enum(['rent', 'service']),
  subCategory: z.string().trim().min(1).max(80),
  product: z.string().trim().min(1).max(120),
  parentCategory: z.string().trim().max(40).optional(),
  quantity: z
    .number()
    .int()
    .min(1, 'Quantity must be at least 1')
    .max(10, 'Maximum 10 units per enquiry')
    .optional(),
  duration: z.string().trim().max(40).optional(),
  city: z.string().trim().max(60).optional(),
  message: z.string().trim().max(500).optional(),
});

export type EnquiryPayload = z.infer<typeof enquirySchema>;

// ---------- Rate limiting -------------------------------------------------

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

interface RateBucket {
  hits: number[];
}

const rateBuckets = new Map<string, RateBucket>();

function getClientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) {
    // First entry in the chain is the original client.
    const first = xff.split(',')[0]?.trim();
    if (first) return first;
  }
  const xri = request.headers.get('x-real-ip');
  if (xri) return xri.trim();
  return 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip) ?? { hits: [] };
  bucket.hits = bucket.hits.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );
  if (bucket.hits.length >= RATE_LIMIT_MAX) {
    rateBuckets.set(ip, bucket);
    return false;
  }
  bucket.hits.push(now);
  rateBuckets.set(ip, bucket);
  return true;
}

// ---------- HTML escape ---------------------------------------------------

const HTML_ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;',
};

function escapeHtml(input: unknown): string {
  if (input === null || input === undefined) return '';
  return String(input).replace(/[&<>"'`]/g, (ch) => HTML_ESCAPE_MAP[ch] ?? ch);
}

function nl2br(input: string | undefined): string {
  if (!input) return '';
  return escapeHtml(input).replace(/\r?\n/g, '<br />');
}

// ---------- Email template ------------------------------------------------

interface BuildEmailArgs {
  data: EnquiryPayload;
  receivedAt: string;
}

function buildEmailHtml({ data, receivedAt }: BuildEmailArgs): string {
  const safe = {
    name: escapeHtml(data.name),
    phone: escapeHtml(data.phone),
    email: escapeHtml(data.email ?? ''),
    address: escapeHtml(data.address),
    category: escapeHtml(data.category),
    parentCategory: escapeHtml(data.parentCategory ?? ''),
    subCategory: escapeHtml(data.subCategory),
    product: escapeHtml(data.product),
    quantity: data.quantity ?? null,
    duration: escapeHtml(data.duration ?? ''),
    city: escapeHtml(data.city ?? ''),
    message: nl2br(data.message),
    receivedAt: escapeHtml(receivedAt),
  };

  const rows: Array<[string, string]> = [
    ['Name', safe.name],
    ['Phone', safe.phone],
    ['Email', safe.email || '—'],
    ['City', safe.city || '—'],
    ['Address', safe.address],
    ['Category', safe.category],
    ['Type', safe.parentCategory || '—'],
    ['Sub-category', safe.subCategory],
    ['Product', safe.product],
    ['Quantity', safe.quantity != null ? String(safe.quantity) : '—'],
    ['Duration', safe.duration || '—'],
    ['Message', safe.message || '—'],
  ];

  const rowHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#475569;background:#f8fafc;border:1px solid #e2e8f0;width:35%;vertical-align:top;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:10px 14px;font-size:14px;color:#0f172a;border:1px solid #e2e8f0;word-break:break-word;">
            ${value}
          </td>
        </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Enquiry: ${safe.product}</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f1f5f9;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(2,132,199,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#0ea5e9 0%,#2563eb 50%,#4f46e5 100%);padding:28px 32px;color:#ffffff;">
              <p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">Rent BigBazar</p>
              <h1 style="margin:6px 0 0;font-size:22px;line-height:1.3;font-weight:700;">New Enquiry Received</h1>
              <p style="margin:8px 0 0;font-size:14px;opacity:0.9;">${safe.category === 'rent' ? 'Rental' : 'Service'} request · ${safe.receivedAt}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 8px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#0284c7;">Customer</p>
              <h2 style="margin:0;font-size:20px;font-weight:700;color:#0f172a;">${safe.name}</h2>
              <p style="margin:4px 0 0;font-size:14px;color:#475569;">
                <a href="tel:+91${safe.phone}" style="color:#0284c7;text-decoration:none;font-weight:600;">+91 ${safe.phone}</a>
                ${
                  safe.email
                    ? ` · <a href="mailto:${safe.email}" style="color:#0284c7;text-decoration:none;font-weight:600;">${safe.email}</a>`
                    : ''
                }
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
                ${rowHtml}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="left">
                    <a href="tel:+91${safe.phone}" style="display:inline-block;background:linear-gradient(135deg,#0ea5e9,#2563eb);color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 22px;border-radius:12px;box-shadow:0 8px 18px rgba(14,165,233,0.35);">Call Customer</a>
                    ${
                      safe.email
                        ? `&nbsp;<a href="mailto:${safe.email}?subject=Re:%20Your%20Rental%20Enquiry" style="display:inline-block;background:#f1f5f9;color:#0f172a;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:12px;border:1px solid #e2e8f0;">Email Customer</a>`
                        : ''
                    }
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:18px 32px;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="margin:0;font-size:12px;color:#64748b;">Submitted via the Rent BigBazar website enquiry form</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ---------- Handler -------------------------------------------------------

export async function POST(request: Request) {
  // 1. Rate limit
  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // 2. Parse + validate JSON
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON body.' },
      { status: 400 }
    );
  }

  const parsed = enquirySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: 'Validation failed.',
        issues: parsed.error.flatten(),
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // 3. Resend bootstrap
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        error: 'Email service is not configured. Please contact support.',
      },
      { status: 503 }
    );
  }

  // Accept either RESEND_TO_EMAIL (preferred, documented in README) or the
  // legacy ENQUIRY_EMAIL so existing deployments keep working.
  const to = process.env.RESEND_TO_EMAIL || process.env.ENQUIRY_EMAIL;
  if (!to) {
    return NextResponse.json(
      {
        success: false,
        error: 'Destination email is not configured. Please contact support.',
      },
      { status: 503 }
    );
  }

  const from =
    process.env.RESEND_FROM_EMAIL ||
    "Rent BigBazar Enquiries <onboarding@resend.dev>";
  const cc =
    process.env.RESEND_CC_EMAIL || process.env.ADMIN_EMAIL || undefined;
  const replyTo =
    data.email && data.email.length > 0 ? data.email : undefined;

  const subject = `New Enquiry: ${data.product} from ${data.name}`;
  const receivedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });
  const html = buildEmailHtml({ data, receivedAt });

  try {
    const resend = new Resend(apiKey);
    const sendPayload: Parameters<typeof resend.emails.send>[0] = {
      from,
      to,
      subject,
      html,
    };
    if (cc) sendPayload.cc = cc;
    if (replyTo) sendPayload.reply_to = replyTo;

    const { error } = await resend.emails.send(sendPayload);

    if (error) {
      // eslint-disable-next-line no-console
      console.error('[enquiry] Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email.' },
        { status: 500 }
      );
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[enquiry] Unexpected error:', err);
    return NextResponse.json(
      { success: false, error: 'Unexpected server error.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
