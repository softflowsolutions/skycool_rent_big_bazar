import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { checkRateLimit, escapeHtml, getClientIp, resendConfig } from '@/lib/api-helpers';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const schema = z.object({
  businessName: z.string().trim().min(2).max(120),
  contactName: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, 'Invalid 10-digit phone'),
  email: z
    .string()
    .trim()
    .max(120)
    .optional()
    .refine((v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Invalid email'),
  address: z.string().trim().min(5).max(200),
  pincode: z.string().trim().regex(/^[1-9]\d{5}$/, 'Invalid 6-digit pincode'),
  city: z.string().trim().min(2).max(60),
  state: z.string().trim().min(2).max(60),
  gstin: z
    .string()
    .trim()
    .max(20)
    .optional()
    .refine(
      (v) =>
        !v ||
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(v),
      'Invalid GSTIN'
    ),
  yearsInBusiness: z.string().trim().min(1).max(4),
  serviceCategories: z.array(z.string().trim().min(1)).min(1),
  coverageArea: z.string().trim().min(2).max(160),
  pricingModel: z.enum(['per-job', 'monthly', 'hybrid']),
  teamSize: z.string().trim().max(80).optional().default(''),
  website: z.string().trim().max(200).optional().default(''),
  notes: z.string().trim().max(600).optional().default(''),
});

type Submission = z.infer<typeof schema>;

function buildEmailHtml(d: Submission) {
  const cats = d.serviceCategories.join(', ');
  const rows: Array<[string, string]> = [
    ['Business Name', d.businessName],
    ['Contact Person', d.contactName],
    ['Phone', `<a href="tel:+91${escapeHtml(d.phone)}">+91 ${escapeHtml(d.phone)}</a>`],
    ['Email', d.email ? `<a href="mailto:${escapeHtml(d.email)}">${escapeHtml(d.email)}</a>` : '—'],
    ['Address', escapeHtml(d.address)],
    ['Pincode', `${escapeHtml(d.pincode)}, ${escapeHtml(d.city)}, ${escapeHtml(d.state)}`],
    ['GSTIN', d.gstin || '—'],
    ['Years in Business', escapeHtml(d.yearsInBusiness)],
    ['Team Size', d.teamSize || '—'],
    ['Service Categories', cats],
    ['Coverage Area', escapeHtml(d.coverageArea)],
    ['Pricing Model', d.pricingModel],
    ['Website', d.website || '—'],
    ['Notes', d.notes || '—'],
  ];

  const rowHtml = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#475569;background:#f8fafc;border:1px solid #e2e8f0;width:35%;vertical-align:top;">
          ${label}
        </td>
        <td style="padding:10px 14px;font-size:14px;color:#0f172a;border:1px solid #e2e8f0;word-break:break-word;">
          ${value}
        </td>
      </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><title>New Vendor Application</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f1f5f9;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(2,132,199,0.08);">
        <tr>
          <td style="background:linear-gradient(135deg,#0ea5e9 0%,#2563eb 50%,#4f46e5 100%);padding:28px 32px;color:#ffffff;">
            <p style="margin:0;font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">Rent BigBazar</p>
            <h1 style="margin:6px 0 0;font-size:22px;line-height:1.3;font-weight:700;">Vendor Registration</h1>
            <p style="margin:8px 0 0;font-size:14px;opacity:0.9;">New partner application · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 8px;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#0284c7;">Business</p>
            <h2 style="margin:0;font-size:20px;font-weight:700;color:#0f172a;">${escapeHtml(d.businessName)}</h2>
            <p style="margin:4px 0 0;font-size:14px;color:#475569;">
              ${escapeHtml(d.contactName)} ·
              <a href="tel:+91${escapeHtml(d.phone)}" style="color:#0284c7;text-decoration:none;font-weight:600;">+91 ${escapeHtml(d.phone)}</a>
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
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr>
              <td align="left">
                <a href="tel:+91${escapeHtml(d.phone)}" style="display:inline-block;background:linear-gradient(135deg,#0ea5e9,#2563eb);color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 22px;border-radius:12px;box-shadow:0 8px 18px rgba(14,165,233,0.35);">Call Vendor</a>
                ${d.email ? `&nbsp;<a href="mailto:${escapeHtml(d.email)}?subject=Re:%20Your%20Vendor%20Application" style="display:inline-block;background:#f1f5f9;color:#0f172a;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:12px;border:1px solid #e2e8f0;">Reply by Email</a>` : ''}
              </td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="background:#f8fafc;padding:18px 32px;text-align:center;border-top:1px solid #e2e8f0;">
            <p style="margin:0;font-size:12px;color:#64748b;">Submitted via the Rent BigBazar vendor registration form</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  if (!checkRateLimit(getClientIp(request))) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON body.' },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: 'Validation failed.', issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const cfg = resendConfig();
  if ('error' in cfg) return cfg.error;

  const data = parsed.data;
  const subject = `Vendor Registration: ${data.businessName} — ${data.coverageArea}`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const payload: Parameters<typeof resend.emails.send>[0] = {
      from: cfg.from,
      to: cfg.to,
      subject,
      html: buildEmailHtml(data),
    };
    if (cfg.cc) payload.cc = cfg.cc;
    if (data.email) payload.reply_to = data.email;
    const { error } = await resend.emails.send(payload);
    if (error) {
      console.error('[register-vendor] Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email.' },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error('[register-vendor] Failed:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to send email.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
