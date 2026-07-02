'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Bell, Smartphone, Sparkles } from 'lucide-react';
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
    success('You are on the list!', 'We\'ll notify you when our app launches.');
  };

  return (
    <section className="container-app section-padding">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-cool shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-14">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-3 py-1.5 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="text-xs font-semibold">Coming Soon</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 lg:mb-4 leading-tight">
              Download Our App
              <br />
              <span className="text-cyan-200">Get Exclusive Discounts</span>
            </h2>
            <p className="text-sky-100 mb-6 text-sm sm:text-base leading-relaxed max-w-md">
              Get app-only discounts, track your orders, manage rentals, and access 24/7 support from your phone.
            </p>

            <form onSubmit={handleSubmit} className="mb-6">
              <label className="text-xs uppercase tracking-wider font-semibold text-cyan-200 mb-2 block">
                Notify me when app launches
              </label>
              <div className="flex gap-2 bg-white/10 backdrop-blur rounded-2xl p-1.5 border border-white/20">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent text-white placeholder:text-sky-200 outline-none px-3 py-2 text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-sky-600 px-4 sm:px-5 py-2 rounded-xl font-semibold text-sm hover:bg-cyan-50 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="h-3 w-3 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
                      <span className="hidden sm:inline">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Bell className="h-4 w-4" />
                      <span className="hidden sm:inline">Notify Me</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row gap-3">
              <button disabled className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-black/40 text-white/70 rounded-xl px-5 py-3 cursor-not-allowed">
                <Smartphone className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-[10px]">Download on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button disabled className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-black/40 text-white/70 rounded-xl px-5 py-3 cursor-not-allowed">
                <Smartphone className="h-5 w-5" />
                <div className="text-left">
                  <div className="text-[10px]">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl rotate-6 scale-95 opacity-50" />
              <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl -rotate-3 scale-95 opacity-70" />
              <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-900">
                <div className="bg-gradient-cool p-6 h-32 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full" />
                  </div>
                  <div className="relative text-white">
                    <div className="text-xs mb-1 opacity-80">Welcome back,</div>
                    <div className="text-lg font-bold">Priya Sharma</div>
                    <div className="text-xs opacity-80">2 active rentals</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-900">My Rentals</span>
                    <span className="text-[10px] text-sky-600 font-semibold">See all</span>
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2 p-2 mb-2 bg-sky-50 rounded-xl">
                      <div className="h-8 w-8 rounded-lg bg-gradient-cool flex items-center justify-center text-white text-xs font-bold">
                        AC
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-semibold text-gray-900 truncate">
                          {i === 1 ? '1.5 Ton Split AC' : i === 2 ? '260L Fridge' : 'Window AC'}
                        </div>
                        <div className="text-[9px] text-gray-500">Active</div>
                      </div>
                      <div className="text-[10px] font-bold text-sky-600">₹1.8k</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}