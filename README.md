# AC on Rent Near Me — Rental & Service Platform

A modern, mobile-first Next.js 14 web application for **AC on Rent Near Me** — India's AC on-rent & home-appliance-service business. PWA-ready, zero-backend (orders flow via WhatsApp & Call), Resend-backed enquiry form, and a full SEO stack.

This README is the **operations manual**. If you're changing the brand, prices, contact info, theme colors, images, or content — start here, then edit the file indicated in each section. Every change is one file away.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000`.

---

## 🎨 How to rebrand the site (one file)

### Brand name, contact, address, socials — [lib/constants.ts](lib/constants.ts)

`SITE_CONFIG` is the single source of truth. Change any value here and **the whole site updates** automatically — header, footer, floating call button, mobile menu, contact page, manifest, layout metadata, and every page that imports from `@/lib/constants`.

```ts
export const SITE_CONFIG = {
  name:           'AC on Rent Near Me',                         // header + footer + meta
  shortName:      'AC on Rent Near Me',                         // PWA manifest
  tagline:        'AC on Rent Near Me — …',                     // meta title
  description:    'Rent AC and home appliances in India …',   // meta description
  url:            'https://aconrentnearme.com',                 // canonical + OG site URL
  email:          'support@aconrentnearme.com',                 // contact, mailto links
  adminEmail:     'support@aconrentnearme.com',                 // admin notifications
  phone:          '+918805131431',                              // Call Now button, every contact
  whatsapp:       '918805131431',                               // WhatsApp buttons (no `+`)
  address:        'Mezbaan Bakery, Near Durrani Complex, …',    // footer + contact + mobile menu
  workingHours:   'Mon - Sun: 8:00 AM - 10:00 PM',
  googleMaps:     'https://maps.app.goo.gl/…?g_st=awb',
  justdial:       'https://jsdl.in/RSL-UTD1785219025',
  areasServed:    ['Pune', 'Mumbai', 'Bangalore', 'Delhi NCR', 'Hyderabad', 'Chennai'],
  cities:         ['Pune'],
  socials: {
    youtube:      'https://youtube.com/@skycoolsolutionsltd?…',
    justdial:     'https://jsdl.in/RSL-UTD1785219025',
    googleMaps:   'https://maps.app.goo.gl/…?g_st=awb',
    linkedin:     'https://www.linkedin.com/in/suhail-sayyed-…',
  },
  developer: {
    name: 'Softflow Solutions',
    url:  'https://www.softflowsolutions.com',
  },
} as const;
```

After editing, `npm run build` and publish — every page will show the new brand.

### Theme color palette (3 colors, one file) — [tailwind.config.ts](tailwind.config.ts)

The top of `tailwind.config.ts` declares **three brand colors** that drive the entire site's look. Change these hex values and the buttons, links, badges, focus rings, gradients, shadows, and overlay colors all update.

```ts
const BRAND     = '#2563EB';   // logo "A" deep-blue gradient stop
const ACCENT    = '#F97316';   // orange CTA accent
const HIGHLIGHT = '#0EA5E9';   // logo sky-blue gradient stop
const INK       = '#374151';   // logo wordmark charcoal
```

**Sample the colors from the logo** when rebranding:

1. Open `public/images/logo/logo.png` in any image editor or color picker.
2. Dropper the dominant blue inside the "A" letter → that's `BRAND`.
3. Dropper the lighter cyan/blue at the gradient tail → that's `HIGHLIGHT`.
4. Dropper the dark charcoal used in "R" and the wordmark → that's `INK`.
5. Pick a contrasting orange for CTAs → that's `ACCENT` (or any accent color of your choice).

These are exposed as Tailwind tokens:

| Token            | Use                                           |
| ---------------- | --------------------------------------------- |
| `bg-brand`       | primary buttons / brand background            |
| `text-brand`     | mobile header text, links, accents            |
| `border-brand`   | brand-tinted borders                          |
| `bg-accent`      | orange CTA badges                             |
| `text-accent`    | accent labels                                 |
| `bg-highlight`   | gradient start / skyline backgrounds          |
| `text-highlight` | service tags                                  |
| `bg-ink` / `text-ink` | charcoal text/background — matches logo wordmark |
| `shadow-brand`   | primary-tinted shadow                         |

Also as 50/100/500/600/700 ramps (`bg-brand-50`, `text-brand-600`, `text-ink-700` …).

> Legacy aliases `bg-sky-600`, `bg-blue-600`, etc. still resolve — they map to the new `brand`/`highlight` tokens so existing component classes keep working.

> ⚠️ **Theme from logo** is a one-direction operation: changing the three constants re-skins the whole site, but the logo *image* (`public/images/logo/logo.png`) is independent of these tokens. To fully rebrand, replace **both** the constants here and the logo file in `public/images/logo/logo.png`.

### SEO content (one file) — [lib/seo.ts](lib/seo.ts)

All titles, descriptions, keywords, OpenGraph and Twitter cards live in `lib/seo.ts`. Edit the `SEO.home`, `SEO.rent`, `SEO.service`, `SEO.contact`, `SEO.about`, `SEO.terms`, `SEO.privacy`, `SEO.refund` entries and every page automatically picks up the change.

**Helpers that auto-generate dynamic metadata:**

- `productSeo({ name, brand, category, capacity, description })` → title, description, keywords, OG card for a single product
- `serviceSeo({ name, category, description, price })` → same for a single service
- `categorySeo({ category: 'rent' | 'service', slug, label, description })` → for category / sub-category pages

These helpers add **local-keyword phrases** automatically (e.g. "AC on rent near me", "{Label} in Pune", "{{brand}} {{category}} rental Pune").

### How to modify SEO content

**Edit a page's title/description/keywords:**

1. Open `lib/seo.ts`.
2. Find the entry in the `SEO` map (e.g. `SEO.rent`).
3. Change `title`, `description`, `keywords`, `alternates.canonical`, `openGraph`, `twitter`.
4. Save — every page that exports `metadata = SEO.rent` re-renders on next build.

**Add a new page's SEO:**

1. Add an entry to the `SEO` map:
   ```ts
   export const SEO = {
     ...
     newPage: {
       title: '...',
       description: '...',
       keywords: ['...'],
       alternates: { canonical: `${SITE_CONFIG.url}/new-page` },
       openGraph: og('...', '...'),
     },
   };
   ```
2. In the corresponding `app/new-page/page.tsx`, add `export const metadata = SEO.newPage;`.

**Change local-keyword targeting:**

Edit the keyword arrays at the top of `lib/seo.ts`:

```ts
const KW_HOME  = ['AC on rent near me', 'AC on rent', ...];
const KW_RENT  = ['rent AC', 'AC rental', 'rent AC in Pune', ...];
const KW_RENT_CATEGORY = (slug, label) => [`rent ${slug}`, `${slug} on rent`, ...];
const KW_SERVICE = ['AC service near me', 'AC repair near me', ...];
```

To rank in **new cities**, extend the arrays with city-specific phrases (`rent AC in Chennai`, `AC service in Hyderabad`).

**Structured data (JSON-LD):**

See `components/seo/JsonLd.tsx` for `OrganizationJsonLd`, `ProductJsonLd`, `ServiceJsonLd`, `FAQJsonLd`, `BreadcrumbJsonLd`. Each one is rendered as `<script type="application/ld+json">` in the matching page. To add a new schema (e.g. `LocalBusiness`), create a component and include `<LocalBusinessJsonLd />` in the relevant page.

**Sitemap & robots:**

- `app/sitemap.ts` — auto-generated sitemap (see "Sitemap" section below).
- `app/robots.ts` — disallows `/api/`, points search engines at `/sitemap.xml`. Add paths to `disallow: [...]` to hide more routes from crawlers.

**Per-page canonical URLs:**

Every page that uses a `categorySeo` / `productSeo` / `serviceSeo` helper sets its own canonical. To change canonical strategy (e.g. force-www or strip trailing slash), edit the helper functions in `lib/seo.ts` — they all build canonical URLs from `SITE_CONFIG.url`.

**OpenGraph image (`og:image`):**

Default `<site>/og-image.jpg` (1200 × 630 JPEG, < 300 KB). Update the URL in `lib/seo.ts` → `og()` helper if you change the path. The image filename must not change without updating SEO references.

### Quick wins for ranking

- Each page title: `<Page Title> — AC on Rent Near Me` (already in helpers).
- Each page description: 140–160 chars, includes city + intent phrase.
- Keywords: keep each page's `keywords` ≤ 15 phrases to avoid "keyword stuffing" penalties.
- Every page links back to `/` via the header — automatically included.

---

## 🖼️ How to change images

### One-off categories / tiles

`lib/data.ts` → `CATEGORIES` array. Each entry has `image: '/images/...'`. Drop the new file into `public/images/…` and update the path.

### Subcategory tiles (Rent)

`app/rent/[category]/page.tsx` → the `subCategoryMap`. Each sub-category entry has its own `image`. Update the path; image appears on `/rent/[category]` and `/rent/[category]/[subcategory]`.

### Product images (Rent)

`lib/data.ts` → `IMG` map and the `PRODUCT_CATALOG` (`CAT` array). The product catalog builds thousands of SKU combinations from a few base entries. Two paths:

1. **Change the IMAGE used by an entire sub-type** (e.g. all "Split AC" products must use the new split-AC photo): edit `IMG.acSplit: '/images/…'` in `lib/data.ts`. Every product that references `IMG.acSplit` updates.
2. **Add a brand-specific image for one product** without touching the others: change the specific `img` field in that line of the `CAT` array, or — for fully bespoke products — add an entry to `PRODUCTS` directly with `images: ['…', '…']`.

Replace images in `public/images/products/` (or `public/images/newproductimages/`). Both are whitelisted in `next.config.js`.

### Service images

`lib/data.ts` → `SERVICES` array. Each service has `images: ['…']` — change the first entry to update the cover image, add a second entry for the gallery. The AC service tile on `/service` also pulls from this.

---

## 📐 Image dimension & size spec (drop-in replacements)

Every image slot on the site has a fixed aspect-ratio container so you can use any image with **identical proportions** and it will fit pixel-perfect. Keep the source file ≤ 200 KB for fast LCP. Format: **PNG** for logos & line-art, **JPEG/WebP** for product photos (the site will auto-convert via Next/Image).

### Where each image renders + required dimensions

| Slot | Component | Aspect / Size | Where the image lives | Recommended source file |
| ---- | --------- | ------------- | --------------------- | ----------------------- |
| **Logo (header & footer)** | `components/layout/Header.tsx`, `Footer.tsx`, `MobileMenu.tsx` | `40×40` (mobile) / `48×48` (desktop), **square 1:1** | `public/images/logo/logo1.png` | `512×512` PNG, transparent background |
| **Popup / app badge icon** | `components/shared/PWAInstallModal.tsx` | `44×44 → 48×48` mobile/desktop, **square 1:1** | `public/images/logo/logo1.png` (reuse) | Same 512×512 |
| **Homepage hero fallback** | `components/sections/HeroBanner.tsx` | `aspect-[4/3]` | `app/sections/HeroBanner` uses inline image | `1200×900` JPEG |
| **Homepage banner carousel** | `components/sections/BannerCarousel.tsx` | Full-width `220 / 280 / 340 px tall` | `lib/banners.ts` → `BANNERS[].image` | `1920×340` (≈ 5.6:1 ultra-wide), JPEG/WebP |
| **Homepage "Explore Categories" tile** | `components/sections/CategoriesGrid.tsx` | `aspect-[16/10]` | `BANNERS` / per-category entries | `1200×750` JPEG |
| **Rent page category tile** | `app/rent/page.tsx` | `aspect-[4/3]` (mobile), `aspect-[5/4]` (desktop) | `lib/data.ts` → `CATEGORIES[].image` | `800×600` (mobile 4:3) / `1000×800` (5:4) JPEG |
| **Rent sub-category tile** | `app/rent/[category]/page.tsx` → `subCategoryMap` | same `4/3 → 5/4` | inline in `subCategoryMap` | same `800×600 / 1000×800` |
| **Product card (rent listing)** | `components/shared/ProductCard.tsx` | `aspect-[4/3]` | `PRODUCTS[i].images[0]` | `800×600` JPEG |
| **Product gallery main image** | `components/product/ProductGallery.tsx` | `aspect-[4/3]` (mobile), `aspect-[4/3]` (desktop) | `PRODUCT.images[0..n]` | `1200×900` JPEG |
| **Product gallery thumbnail** | `components/product/ProductGallery.tsx` | `80×80 px` (rendered) | Same set | `400×400` JPEG |
| **Service card (listing)** | `components/shared/ServiceCard.tsx` | `aspect-[4/3]` | `SERVICES[i].images[0]` | `800×600` JPEG |
| **Service detail hero** | `app/service/[category]/[subcategory]/[service]/page.tsx` | `aspect-[4/3]` (mobile), `aspect-square` (desktop) | `SERVICE.images[0]` | `1200×1200` (square safe) JPEG |
| **Service category tile (Choose Appliance)** | `app/service/page.tsx` | `4:3 mobile stacked → 3:3 desktop grid` | `CATEGORIES[].image` (now uses category image) | `800×600` JPEG |
| **OG/social share image** | `app/layout.tsx` & `lib/seo.ts` | `1200×630 px`, **1.91:1** | `public/og-image.jpg` | `1200×630` JPEG, < 300 KB |
| **PWA app icon (manifest)** | `app/manifest.ts` | `72 / 96 / 128 / 144 / 152 / 192 / 384 / 512` px | `public/icons/icon-{N}x{N}.png` | PNG, transparent where possible, square |
| **Apple touch icon** | `app/layout.tsx` | `180×180` | `public/apple-icon.png` | PNG, square |
| **Favicon** | `app/layout.tsx` | `32×32`, `16×16` | `public/favicon.ico` | ICO w/ both sizes |

### Reference rules

- **Subject framing** — keep the appliance in the **center 80 %** of the frame; pages sit the image inside a `bg-gray-50` shell so any white edges blend in.
- **Background** — transparent for logos, white or light-gray for products, slate-blue OK for coolers & ACs (gradients hide on hover).
- **Color profile** — sRGB; Next/Image auto-converts to AVIF/WebP at request time, so upload JPEG/PNG as the source.
- **Maximum file size** — `< 200 KB` per image (banners can go up to 400 KB because of width).
- **Naming** — keep lowercase + dashes. `images/products/{slug}.png` for catalogue, `images/newproductimages/{slug}.jpeg` for newer batches, `images/logo/logo1.png` for the primary logo.

### Quick replace workflow

1. Drop the new file into `public/images/<bucket>/` with the exact filename listed above.
2. If the file name differs (e.g. new photo), update the path in `lib/data.ts` (`IMG.*` map / `CATEGORIES[].image` / `PRODUCTS[i].images`) or in the page that references it.
3. Rebuild with `npm run build` — Next/Image will generate optimal `srcset` variants automatically.

> If a slot looks stretched or blurry, the source aspect ratio doesn't match the table above. Adjust the source file (crop / resize), don't change the container.

---

## 🖼️ Logo, favicon & PWA icon replacement

The site's primary logo file is **`public/images/logo/logo.png`** (square 1:1, ≥ 512×512 PNG, transparent background).

### Where the logo is referenced

| Use site                                       | File                              | Rendered at |
| ---------------------------------------------- | --------------------------------- | ----------- |
| Header logo + brand text                       | `components/layout/Header.tsx`     | 40 × 40 px mobile / 48 × 48 px desktop |
| Footer brand block                             | `components/layout/Footer.tsx`     | 48 × 48 px |
| Mobile drawer brand                            | `components/layout/MobileMenu.tsx` | 36 × 36 px |
| PWA install modal icon                         | `components/shared/PWAInstallModal.tsx` | 48 × 48 px |
| `<head>` favicon + Apple touch                 | Next.js file convention          | 192 / 180 / 512 px |
| `og:image` social share                        | `public/og-image.jpg` (see below)  | 1200 × 630 |

### Replace the logo (3-step)

1. Drop the new file into `public/images/logo/logo.png` (overwrite).
2. Restart `npm run dev` or `npm run build` — Next/Image will pick up the new asset automatically.
3. If the pixel ratio or rendering looks blurry, double the source resolution (e.g. `1024×1024`).

### Favicon, Apple touch, PWA icons

Next.js auto-generates these via **App Router file conventions**:

- `public/favicon.ico` — main favicon (drop your `.ico` here)
- `app/icon.tsx` — `ImageResponse` that renders the brand-mark on a gradient (no PNG needed)
- `app/apple-icon.tsx` — `ImageResponse` for Apple touch

These auto-generate `/icon` and `/apple-icon` at build time. To replace with a static PNG instead of the rendered `ImageResponse`:

1. Delete `app/icon.tsx` and `app/apple-icon.tsx`.
2. Drop the static assets into `public/`:
   - `public/favicon.ico` (multi-resolution)
   - `public/icon-192.png`
   - `public/icon-512.png`
   - `public/apple-icon.png` (180 × 180)
3. The references in `app/layout.tsx` already point at these paths.

> `public/og-image.jpg` should be 1200 × 630 JPEG, < 300 KB. Update `lib/seo.ts` → `og()` image URL after replacing.

---

## 🗺️ Sitemap — auto-generated, no maintenance

`sitemap.xml` is generated at **request time** by `app/sitemap.ts`. It walks the live catalog and emits every URL:

- 8 static pages (`/`, `/rent`, `/service`, `/about`, `/contact`, `/terms`, `/privacy`, `/refund-policy`)
- Every rent category from `RENT_CATEGORY_SLUGS`
- Every `(category, subCategory)` pair from `PRODUCTS`
- Every product page
- Every service category (legacy aliases resolved via `resolveServiceCategorySlug`)
- Every service sub-category pair
- Every service page

**To control which URLs get indexed:**

- Add new product → it auto-appears in `sitemap.xml` because `PRODUCTS` is walked at request time.
- Add new category → add its slug to `RENT_CATEGORY_SLUGS` in `lib/data.ts`; update `staticPaths` in `app/sitemap.ts` only if you want a new top-level URL.
- Drop a page from indexing → add it to the `disallow` list in `app/robots.ts`.

`robots.txt` and `sitemap.xml` are auto-served by Next.js. No manual `build/sitemap.xml` file to commit.

**To verify after deployment:**

```
https://aconrentnearme.com/sitemap.xml
https://aconrentnearme.com/robots.txt
```

Submit to Google Search Console and Bing Webmaster Tools once for ongoing discovery.

---

## 💰 How to change pricing & product copy

`lib/data.ts` is the catalog. Global pricing is at the top:

```ts
const PRICE_TIERS: Record<category, { base, perCapacity, step }> = {
  'air-conditioners':  { base: 999, perCapacity: 250, step: 100 },
  'air-coolers':       { base: 449, perCapacity:  12, step:  50 },
  'washing-machines':  { base: 799, perCapacity: 110, step:  50 },
  'refrigerators':     { base: 599, perCapacity:   4, step:  50 },
  'inverters':         { base: 549, perCapacity: 0.35, step: 100 },
  'geysers':           { base: 199, perCapacity:  18, step:  25 },
  ...
}
```

Discount tiers (1 / 3 / 6 / 12 month plans):

```ts
export const DURATIONS = [
  { value: 1,  label: '1 Month',  savings: 0 },
  { value: 3,  label: '3 Months', savings: 8  },
  { value: 6,  label: '6 Months', savings: 12 },
  { value: 12, label: '12 Months', savings: 20 },
];
```

The PRICING_OBJECTS map (`{ 1, 3, 6, 12 }`) is computed automatically; you only need to update the `base` and `perCapacity`.

To edit **descriptions / features** of a product sub-type (e.g. all "Split AC" products share one description), edit the `CAT` array entry's `description` and `features` field. To edit a single specific product's copy, add it as an explicit override in the `PRODUCTS` array.

Service pricing: each service in `SERVICES` has `startingPrice`. Change that number directly.

### Testimonials, FAQs, hero copy

- Testimonials: `lib/data.ts` → `TESTIMONIALS`.
- FAQs (used by FAQ schema + `/about` page): `lib/data.ts` → `FAQS`.
- Hero/CTA/homepage copy: `components/sections/*.tsx` — open the file that renders the section (e.g. `HeroBanner.tsx`, `WhyChooseUs.tsx`).

---

## 📧 Email (Resend) — `.env.local`

The enquiry form posts to `/api/send-enquiry` which calls **Resend**. Add to your `.env.local`:

```bash
RESEND_API_KEY=re_•••••••••••••••••••••••••    # https://resend.com/api-keys
RESEND_FROM_EMAIL=enquiries@aconrentnearme.com  # must be a verified sender in Resend
RESEND_TO_EMAIL=support@aconrentnearme.com       # where enquiries land
NEXT_PUBLIC_SITE_URL=https://aconrentnearme.com  # canonical URL for OG / canonical tags
NEXT_PUBLIC_BUSINESS_PHONE=+918805131431        # fallback phone (lib/constants.ts has the canonical value)
NEXT_PUBLIC_WHATSAPP_NUMBER=918805131431
```

After submitting the form, the API returns a success envelope and the React client triggers the **`/components/forms/EnquiryForm.tsx`** success modal — animated banner with the text **"Our team will contact you soon."** The Resend email content is in `app/api/send-enquiry/route.ts` (HTML template). To preview it locally without sending, log the response from `/api/send-enquiry`.

> No Resend key? The route falls back to logging the enquiry to the server console — the modal still fires so the user sees the success state.

---

## 📱 Mobile-view header layout

`components/layout/Header.tsx` — order on mobile:

1. **Logo (left corner)** — small `Image` of `/images/logo/logo1.png`
2. **Brand text (center)** — `text-brand` (the primary theme color), reads **"AC on Rent Near Me"**
3. **Menu trigger (right)** — `MobileMenu` opens as a bottom drawer with full navigation, social icons (YouTube, LinkedIn, JustDial, Google Maps), address, call & WhatsApp buttons

Desktop layout: logo + wordmark on the left, nav center, Call Now + WhatsApp buttons + mobile trigger on the right.

---

## 🧱 File map (where everything lives)

| What                                           | File                                                     |
| ---------------------------------------------- | -------------------------------------------------------- |
| Brand name, contact, address, socials          | `lib/constants.ts` → `SITE_CONFIG`                        |
| Theme palette (3 colors)                       | `tailwind.config.ts` → `BRAND`/`ACCENT`/`HIGHLIGHT`       |
| All SEO content (titles, descriptions, kws)    | `lib/seo.ts`                                             |
| Products, services, prices, testimonials, FAQs | `lib/data.ts`                                            |
| Rent tile & sub-category image map             | `app/rent/[category]/page.tsx`                           |
| Service tile image map                         | `app/service/page.tsx`                                   |
| Enquiry form + success modal                   | `components/forms/EnquiryForm.tsx`                       |
| Resend API route                               | `app/api/send-enquiry/route.ts`                          |
| Floating call / WhatsApp button                | `components/shared/FloatingCallButton.tsx`               |
| Header + Mobile menu                           | `components/layout/Header.tsx`, `MobileMenu.tsx`         |
| Footer + Softflow credit                       | `components/layout/Footer.tsx`                           |
| PWA manifest                                   | `app/manifest.ts`                                        |

---

## 📜 Pages (25+, all SSG)

- `/` Homepage (search, banner, categories, popular products & services, why-choose-us, testimonials, FAQ, CTA, etc.)
- `/rent`, `/rent/[category]`, `/rent/[category]/[subcategory]`, `/rent/[category]/[subcategory]/[product]`
- `/service`, `/service/[category]`, `/service/[category]/[subcategory]`, `/service/[category]/[subcategory]/[service]`
- `/about`, `/contact`, `/terms`, `/privacy`, `/refund-policy`, `/not-found`
- `/sitemap.xml`, `/robots.txt`, `/manifest.json`

## ✅ Tech stack

- Next.js 14 (App Router, SSG)
- Tailwind CSS 3.4 (custom 3-color theme tokens)
- Resend (`resend` npm) for transactional email
- Lucide icons + Next/Image
- TypeScript strict mode
- PWA service worker + manifest
