import type { Config } from 'tailwindcss';

/**
 * GLOBAL THEME — change these 3 colors and the whole site updates.
 * - BRAND        primary brand color (buttons, links, focus rings)
 * - ACCENT       secondary action color (CTAs, badges, highlights)
 * - HIGHLIGHT    tertiary color (decorative, gradients, service tags)
 *
 * The hex codes below are sampled from the brand logo at
 * `public/images/logo/logo.png`:
 *   BRAND     = logo "R" navy blue (#1B2A4E)
 *   ACCENT    = logo "B" / shopping-cart orange (#F47B27)
 *   HIGHLIGHT = lighter sky-blue accent derived from the logo (#3B82F6)
 * Also exposed: `ink` (charcoal #2C3340) — taken from the logo wordmark.
 *
 * Tints/shades are auto-derived via Tailwind's color opacity utilities.
 * Components consume them via `bg-brand`, `text-accent`, `border-highlight`.
 */
const BRAND = '#1B2A4E';      // logo "R" navy blue
const ACCENT = '#F47B27';     // logo "B" / cart orange
const HIGHLIGHT = '#3B82F6';  // lighter accent blue
const INK = '#2C3340';        // logo charcoal wordmark

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
          dark: '#0F1B36',
          light: '#3B82F6',
          50: '#F0F3FA',
          100: '#DCE2F0',
          500: BRAND,
          600: '#13213E',
          700: '#0F1B36',
        },
        accent: {
          DEFAULT: ACCENT,
          dark: '#D9621A',
          50: '#FFF4EA',
          100: '#FFE4D1',
          600: '#D9621A',
        },
        highlight: {
          DEFAULT: HIGHLIGHT,
          dark: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: HIGHLIGHT,
          600: '#2563EB',
        },
        // legacy aliases kept so existing component classes still resolve
        primary: { DEFAULT: BRAND, dark: '#0F1B36', light: '#3B82F6', 50: '#F0F3FA', 100: '#DCE2F0', 500: BRAND, 600: '#13213E', 700: '#0F1B36', 900: '#0A142A' },
        // Charcoal from the logo wordmark.
        ink: {
          DEFAULT: INK,
          dark:   '#1A1F2A',
          light:  '#6B7280',
          50:     '#F9FAFB',
          100:    '#F3F4F6',
          500:    '#6B7280',
          700:    INK,
          900:    '#1A1F2A',
        },
        secondary: { DEFAULT: HIGHLIGHT, dark: '#2563EB' },
        sky: { 50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD', 400: '#60A5FA', 500: HIGHLIGHT, 600: '#2563EB', 700: '#1D4ED8', 800: '#1E40AF', 900: '#1E3A8A' },
        cool: { 50: '#EFF6FF', 100: '#DBEAFE', 500: HIGHLIGHT, 600: '#2563EB', 700: '#1D4ED8', 900: '#1E3A8A' },
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
        brand: '0 8px 20px rgba(27,42,78,0.3)',
        accent: '0 8px 20px rgba(244,123,39,0.3)',
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