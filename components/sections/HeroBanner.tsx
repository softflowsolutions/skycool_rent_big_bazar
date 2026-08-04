import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Snowflake, ArrowRight, Check, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { generateCallLink, generateWhatsAppLink } from '@/lib/utils';

const HERO_IMAGE = '/images/products/split1.5.png';

export function HeroBanner() {
  return (
    <section className="bg-white">
      <div className="container-app py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-3">
              Summer Sale 2026 — Save Big
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-5 leading-[1.1] tracking-tight">
              Stay Cool,
              <br />
              Pay Less.
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Rent AC & Fridge starting at ₹599/month. Free delivery & installation. No hidden charges.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <Link
                href="/rent"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-brand rounded-lg px-6 py-3 font-bold text-sm transition-colors shadow-md hover:shadow-lg"
              >
                <Snowflake className="h-4 w-4" />
                Rent Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-lg px-6 py-3 font-semibold text-sm transition-colors"
              >
                <Wrench className="h-4 w-4" />
                Book Service
              </Link>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-sm text-gray-700">
              {['50,000+ Customers', 'Pan-India Delivery', '24/7 Support', 'Zero Deposit'].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-gray-900" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Mobile WhatsApp & Call row */}
            <div className="flex gap-2 justify-center lg:hidden mt-6">
              <a
                href={generateWhatsAppLink(
                  `Hi Rent BigBazar! I'd like to know more about your AC rental services.`,
                  SITE_CONFIG.whatsapp
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2.5 font-semibold text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={generateCallLink(SITE_CONFIG.phone)}
                className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-brand rounded-lg px-4 py-2.5 font-bold text-sm"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={HERO_IMAGE}
                alt="Family enjoying cool air conditioning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Small starting-price badge */}
              <div className="absolute bottom-4 left-4 bg-white border border-gray-200 rounded-md px-3 py-2 shadow-sm">
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">Starting at</div>
                <div className="text-base font-bold text-gray-900">₹599/mo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
