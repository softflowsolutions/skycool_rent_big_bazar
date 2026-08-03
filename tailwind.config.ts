import type { Config } from 'tailwindcss';

/**
 * GLOBAL THEME — change these 3 colors and the whole site updates.
 * - BRAND        primary brand color (buttons, links, focus rings)
 * - ACCENT       secondary action color (CTAs, badges, highlights)
 * - HIGHLIGHT    tertiary color (decorative, gradients, service tags)
 *
 * The hex codes below are sampled from the brand logo at
 * `public/images/logo/logo.png`:
 *   BRAND     = logo "A" gradient mid-stop (#2563EB primary blue)
 *   HIGHLIGHT = logo gradient light-stop (#0EA5E9 sky blue)
 *   ACCENT    = orange CTA accent (#F97316)
 * Also exposed: `ink` (charcoal #374151) — taken from the logo wordmark
 * "R" and "aconrentnearme" text color.
 *
 * Tints/shades are auto-derived via Tailwind's color opacity utilities.
 * Components consume them via `bg-brand`, `text-accent`, `border-highlight`.
 */
const BRAND = '#2563EB';      // logo "A" deep blue gradient stop
const ACCENT = '#F97316';     // orange CTA accent
const HIGHLIGHT = '#0EA5E9';  // logo sky-blue gradient stop
const INK = '#374151';        // logo charcoal (R + wordmark text)

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: BRAND,
          dark: '#1D4ED8',
          light: '#60A5FA',
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: BRAND,
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        accent: {
          DEFAULT: ACCENT,
          dark: '#EA580C',
          50: '#FFF7ED',
          100: '#FFEDD5',
          600: '#EA580C',
        },
        highlight: {
          DEFAULT: HIGHLIGHT,
          dark: '#0284C7',
          50: '#F0F9FF',
          100: '#E0F2FE',
          500: HIGHLIGHT,
          600: '#0284C7',
        },
        // legacy aliases kept so existing component classes still resolve
        primary: { DEFAULT: BRAND, dark: '#1D4ED8', light: '#60A5FA', 50: '#EFF6FF', 100: '#DBEAFE', 500: BRAND, 600: '#1D4ED8', 700: '#1D4ED8', 900: '#1E3A8A' },
        // Charcoal from the logo wordmark "R" and "aconrentnearme" text.
        ink: {
          DEFAULT: INK,
          dark:   '#1F2937',
          light:  '#6B7280',
          50:     '#F9FAFB',
          100:    '#F3F4F6',
          500:    '#6B7280',
          700:    INK,
          900:    '#1F2937',
        },
        secondary: { DEFAULT: HIGHLIGHT, dark: '#0284C7' },
        sky: { 50: '#F0F9FF', 100: '#E0F2FE', 200: '#BAE6FD', 300: '#7DD3FC', 400: '#38BDF8', 500: HIGHLIGHT, 600: '#0284C7', 700: '#0369A1', 800: '#075985', 900: '#0C4A6E' },
        cool: { 50: '#F0F9FF', 100: '#E0F2FE', 500: HIGHLIGHT, 600: '#0284C7', 700: '#0369A1', 900: '#0C4A6E' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        md: '0 4px 6px rgba(0,0,0,0.07)',
        lg: '0 10px 25px rgba(0,0,0,0.1)',
        xl: '0 20px 40px rgba(0,0,0,0.12)',
        brand: '0 8px 20px rgba(37,99,235,0.3)',
        accent: '0 8px 20px rgba(249,115,22,0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInRight: { '0%': { opacity: '0', transform: 'translateX(20px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        slideInLeft: { '0%': { opacity: '0', transform: 'translateX(-20px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
        pulseSoft: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.7' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      backgroundImage: {
        'gradient-brand': `linear-gradient(135deg, ${HIGHLIGHT} 0%, ${BRAND} 100%)`,
        'gradient-accent': `linear-gradient(135deg, ${ACCENT} 0%, ${BRAND} 100%)`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)',
      },
    },
  },
  plugins: [],
};

export default config;