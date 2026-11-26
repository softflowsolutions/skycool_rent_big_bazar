import { Award, Users, Target, Heart, TrendingUp, Globe2 } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTASection } from '@/components/sections/CTASection';
import { SITE_CONFIG } from '@/lib/constants';
import { SEO } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata = SEO.about;

const stats = [
  { icon: Users, value: '50,000+', label: 'Happy Customers' },
  { icon: Globe2, value: '15+', label: 'Cities Served' },
  { icon: TrendingUp, value: '1L+', label: 'Services Completed' },
  { icon: Award, value: '4.8/5', label: 'Customer Rating' },
];

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every decision we make starts with our customers. Their comfort is our priority.',
  },
  {
    icon: Target,
    title: 'Quality Always',
    description: 'We never compromise on quality. Every appliance is tested and verified before delivery.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'We constantly improve our services to bring you the best rental experience in India.',
  },
  {
    icon: Award,
    title: 'Trust & Transparency',
    description: 'No hidden charges, no surprise fees. What you see is what you pay.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Our Story
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Making Cool Comfort Affordable for Every Indian
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Founded in {SITE_CONFIG.establishedYear}, {SITE_CONFIG.name} started with a simple mission:
              make AC and Fridge ownership accessible without the high upfront costs. Today, we serve
              50,000+ customers across 15+ cities in India.
            </p>
          </div>
        </div>
      </section>

      <section className="container-app section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-accent mb-3 shadow-md">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-brand" />
                </div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-0.5">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-app section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Our Mission
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Cooling India, One Home at a Time
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                In a country where summer temperatures soar above 45°C, access to cooling is not a luxury
                — it&apos;s a necessity. Yet, the upfront cost of buying an AC or Fridge puts it out of
                reach for millions of Indians.
              </p>
              <p>
                That&apos;s why we started {SITE_CONFIG.name}. We believe everyone deserves comfort. Our
                flexible rental packages offer transparent pricing with zero security deposit — with
                charges applicable on delivery and installation as per distance.
              </p>
              <p>
                Whether you&apos;re a student in a PG, a young professional in a rented apartment, or a
                small business owner needing temporary cooling solutions, we have a plan for you.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative grid grid-cols-2 gap-3">
              {values.slice(0, 4).map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all"
                  >
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent mb-2 shadow-md`}>
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-gray-900 mb-1">{v.title}</h3>
                    <p className="text-xs text-gray-600">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white section-padding">
        <div className="container-app">
          <div className="text-center mb-10 lg:mb-14">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Our Values
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent mb-3 shadow-lg`}>
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-app section-padding">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Our Journey
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            From a small startup to India&apos;s most trusted rental platform.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
          {[
            { year: '2020', title: 'Founded', desc: 'Started with 5 ACs in Delhi NCR' },
            { year: '2021', title: 'Expansion', desc: 'Crossed 1,000 customers and expanded to 5 cities' },
            { year: '2023', title: 'Pan-India', desc: 'Now serving 15+ cities with 25,000+ customers' },
            { year: '2026', title: 'Today', desc: '50,000+ happy customers, 1L+ services completed' },
          ].map((m, idx) => (
            <div
              key={idx}
              className={`relative flex items-center gap-4 mb-6 ${
                idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent shadow-md flex items-center justify-center text-brand text-xs font-bold relative z-10">
                ✓
              </div>
              <div
                className={`flex-1 bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-gray-100 ${
                  idx % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
                }`}
              >
                <div className="text-xs font-bold text-accent mb-1">{m.year}</div>
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 mb-0.5">
                  {m.title}
                </h3>
                <p className="text-sm text-gray-600">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}