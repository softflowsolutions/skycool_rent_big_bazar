import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { generateCallLink, generateWhatsAppLink } from '@/lib/utils';

export function CTASection() {
  return (
    <section className="container-app py-12 sm:py-16 lg:py-20">
      <div className="bg-gray-900 text-white rounded-lg p-6 sm:p-10 lg:p-14 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 lg:mb-4 leading-tight max-w-3xl mx-auto">
          Beat the Heat. Rent Today.
        </h2>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
          Get your AC or Fridge delivered in 4 hours. Zero deposit, free installation, 24/7 support.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/rent"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 rounded-md px-6 py-3 font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            Browse Rentals
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={generateCallLink(SITE_CONFIG.phone)}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-brand rounded-md px-6 py-3 font-bold text-sm transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={generateWhatsAppLink(
              `Hi Rent BigBazar! I'd like to know more about your AC rental plans.`,
              SITE_CONFIG.whatsapp
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3 font-semibold text-sm transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}