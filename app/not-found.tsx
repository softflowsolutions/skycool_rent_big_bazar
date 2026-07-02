import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="text-center max-w-md">
        <div className="inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-3xl bg-gradient-cool shadow-cool mb-6 animate-pulse-soft">
          <span className="text-3xl sm:text-4xl">❄️</span>
        </div>

        <h1 className="font-display text-6xl sm:text-8xl font-extrabold text-gradient mb-2">
          404
        </h1>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/rent" className="btn-secondary">
            Browse Rentals
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
          <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
            Popular Links
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/rent/ac"
              className="text-sm px-3 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 font-medium transition-colors"
            >
              AC Rentals
            </Link>
            <Link
              href="/rent/fridge"
              className="text-sm px-3 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 font-medium transition-colors"
            >
              Fridge Rentals
            </Link>
            <Link
              href="/service/ac"
              className="text-sm px-3 py-2 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium transition-colors"
            >
              AC Service
            </Link>
            <Link
              href="/contact"
              className="text-sm px-3 py-2 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}