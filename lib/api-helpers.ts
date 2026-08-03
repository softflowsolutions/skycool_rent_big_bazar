/**
 * Shared helpers for /api/* POST routes.
 *
 * - IP rate limit (5 / hour)
 * - HTML-escape
 * - Resend bootstrap (reads env, returns ready-to-send payload)
 */
import { NextResponse } from 'next/server';

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1h

const buckets = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const b = buckets.get(ip);
  if (!b || b.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (b.count >= RATE_LIMIT) return false;
  b.count += 1;
  return true;
}

export function getClientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

export function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Returns 503-style error envelope if Resend env is not configured.
 * Otherwise returns the prepared `to`/`from`/`cc` fields.
 */
export function resendConfig():
  | { error: NextResponse }
  | { ok: true; to: string; from: string; cc?: string } {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error: NextResponse.json(
        {
          success: false,
          error: 'Email service is not configured. Please contact support.',
        },
        { status: 503 }
      ),
    };
  }
  const to = process.env.RESEND_TO_EMAIL || process.env.ENQUIRY_EMAIL;
  if (!to) {
    return {
      error: NextResponse.json(
        {
          success: false,
          error: 'Destination email is not configured. Please contact support.',
        },
        { status: 503 }
      ),
    };
  }
  return {
    ok: true,
    to,
    from:
      process.env.RESEND_FROM_EMAIL ||
      'AC on Rent Near Me Enquiries <onboarding@resend.dev>',
    cc: process.env.RESEND_CC_EMAIL || process.env.ADMIN_EMAIL || undefined,
  };
}
