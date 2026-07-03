'use client';

import { useState } from 'react';
import { Bell, Smartphone } from 'lucide-react';
import { useToast } from '@/components/shared/Toast';

export function AppComingSoon() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { success } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      success('Invalid email', 'Please enter a valid email address');
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setEmail('');
    success("You're on the list!", "We'll notify you when our app launches.");
  };

  return (
    <section className="container-app py-12 sm:py-16 lg:py-20">
      <div className="bg-gray-900 text-white rounded-lg p-6 sm:p-10 lg:p-14 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Coming Soon
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 leading-tight">
              Download Our App
            </h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed max-w-md">
              Get app-only discounts, track your orders, manage rentals, and access 24/7 support from your phone.
            </p>

            <form onSubmit={handleSubmit} className="mb-6 max-w-md">
              <label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">
                Notify me when app launches
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="h-3 w-3 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                      <span className="hidden sm:inline">Sending</span>
                    </>
                  ) : (
                    <>
                      <Bell className="h-4 w-4" />
                      <span className="hidden sm:inline">Notify</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row gap-2">
              <button disabled className="inline-flex items-center justify-center gap-2 bg-white/10 text-white/60 rounded-md px-4 py-2.5 cursor-not-allowed text-sm">
                <Smartphone className="h-4 w-4" />
                App Store
              </button>
              <button disabled className="inline-flex items-center justify-center gap-2 bg-white/10 text-white/60 rounded-md px-4 py-2.5 cursor-not-allowed text-sm">
                <Smartphone className="h-4 w-4" />
                Google Play
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative aspect-square max-w-sm mx-auto bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Smartphone className="h-16 w-16 mx-auto mb-3 opacity-50" />
                <p className="text-sm">App Preview</p>
                <p className="text-xs mt-1 opacity-70">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}