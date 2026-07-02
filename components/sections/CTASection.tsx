import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight, Snowflake } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { generateCallLink, generateWhatsAppLink } from '@/lib/utils';

export function CTASection() {
  return (
    <section className="container-app section-padding">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl" />
        </div>

        <div className="relative p-6 sm:p-10 lg:p-14 text-center text-white">
          <div className="inline-flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-white/20 backdrop-blur mb-4">
            <Snowflake className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-3 lg:mb-4 leading-tight max-w-3xl mx-auto">
            Beat the Heat. Rent Today.
          </h2>
          <p className="text-orange-100 text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
            Get your AC or Fridge delivered in 4 hours. Zero deposit, free installation, 24/7 support.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/rent"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 rounded-xl px-6 py-3.5 font-bold text-sm sm:text-base hover:bg-orange-50 transition-colors shadow-lg group"
            >
              Browse Rentals
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={generateCallLink(SITE_CONFIG.phone)}
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur text-white border-2 border-white/30 rounded-xl px-6 py-3.5 font-bold text-sm sm:text-base hover:bg-white/30 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={generateWhatsAppLink(
                `Hi SkyCool! I'd like to know more about your rental plans.`,
                SITE_CONFIG.whatsapp
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-3.5 font-bold text-sm sm:text-base transition-colors shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}