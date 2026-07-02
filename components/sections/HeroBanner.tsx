'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Snowflake, ArrowRight, Check, Wrench, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { generateCallLink, generateWhatsAppLink } from '@/lib/utils';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1631545806609-cad1d7c5d4cd?w=1920&q=80';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="blob bg-sky-400 w-96 h-96 -top-20 -left-20" />
      <div className="blob bg-blue-400 w-96 h-96 top-40 -right-20" />
      <div className="blob bg-cyan-300 w-72 h-72 bottom-0 left-1/3" />

      <div className="container-app relative py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-sky-200 rounded-full px-3 py-1.5 mb-4 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              <span className="text-xs font-semibold text-gray-700">
                Summer Sale 2026 — Save Big
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-3 lg:mb-4 leading-[1.1]">
              Stay Cool,
              <br />
              <span className="text-gradient">Pay Less</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Rent AC & Fridge starting at ₹599/month. Free delivery & installation. No hidden charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <Link href="/rent" className="btn-primary text-base group">
                <Snowflake className="h-5 w-5" />
                Rent Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/service" className="btn-secondary text-base">
                <Wrench className="h-5 w-5" />
                Book Service
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-xs sm:text-sm">
              {['50,000+ Customers', 'Pan-India Delivery', '24/7 Support', 'Zero Deposit'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-cool">
                    <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 justify-center lg:hidden mt-6">
              <a
                href={generateWhatsAppLink(
                  `Hi SkyCool! I'd like to know more about your AC/Fridge rental services.`,
                  SITE_CONFIG.whatsapp
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl px-4 py-2.5 font-semibold text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={generateCallLink(SITE_CONFIG.phone)}
                className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl px-4 py-2.5 font-semibold text-sm"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-cool rounded-3xl blur-2xl opacity-20 scale-110" />
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={HERO_IMAGE}
                alt="Family enjoying cool air conditioning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent" />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-cool">
                    <Snowflake className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Starting</div>
                    <div className="font-bold text-lg text-gradient">₹599/mo</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600">
                    <Check className="h-5 w-5 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Free</div>
                    <div className="font-bold text-sm">Installation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}