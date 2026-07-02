# Product Requirements Document (PRD)
## AC & Fridge Renting and Service Business Website — India

---

## 1. Executive Summary

| Field | Details |
|-------|---------|
| **Project Name** | CoolRent India — AC & Fridge Rental & Service Platform |
| **Tech Stack** | Next.js , TypeScript, Tailwind CSS, shadcn/ui, Resend (Email), Vercel |
| **Target Market** | Tier 1, 2, and 3 cities in India |
| **Primary Users** | Renters (individuals, students, working professionals, small businesses) |
| **Business Model** | Rental (monthly/quarterly/annual) + On-Demand Service (repair, maintenance, installation) |
| **Design Philosophy** | Rentomojo-like modern, clean, mobile-first, PWA-native feel |

---

## 2. Goals & Objectives

1. **Primary Goal**: Drive enquiries and orders via WhatsApp and Email with zero backend complexity.
2. **Secondary Goal**: Build trust through testimonials, transparent pricing, and professional design.
3. **Tertiary Goal**: Maximize organic reach via SEO-optimized structure and fast Core Web Vitals.

---

## 3. User Personas

| Persona | Description | Pain Points | Needs |
|---------|-------------|-------------|-------|
| **Rohan (Student)** | 22, moves cities for internships | Can't buy AC/Fridge, needs short-term rental | Affordable monthly rent, quick delivery, easy return |
| **Priya (Working Professional)** | 28, lives in a rented apartment | Needs reliable AC service, doesn't own tools | Verified technicians, transparent pricing, warranty |
| **Mr. Sharma (Small Business Owner)** | 45, runs a small restaurant | Needs multiple fridges on rent for events | Bulk rental, flexible duration, GST invoice |
| **Anjali (Homeowner)** | 35, owns a flat | AC broke down in summer, needs urgent repair | Same-day service, genuine spare parts, upfront quote |

---

## 4. Design System (Rentomojo-Inspired)

### 4.1 Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#6C5CE7` | Buttons, links, active states, CTAs |
| Primary Dark | `#5B4BD4` | Hover states |
| Secondary | `#00D2D3` | Badges, highlights, success indicators |
| Accent | `#FF6B6B` | Sale tags, urgency, errors |
| Background | `#F8F9FA` | Page background |
| Surface | `#FFFFFF` | Cards, modals, forms |
| Text Primary | `#2D3436` | Headings, body text |
| Text Secondary | `#636E72` | Captions, placeholders |
| Border | `#DFE6E9` | Dividers, input borders |
| Success | `#00B894` | Success messages, checkmarks |
| Warning | `#FDCB6E` | Warnings, pending states |

### 4.2 Typography
| Element | Font Family | Size (Mobile) | Size (Desktop) | Weight |
|---------|-------------|---------------|----------------|--------|
| H1 | Inter | 32px | 48px | 700 |
| H2 | Inter | 24px | 36px | 600 |
| H3 | Inter | 20px | 28px | 600 |
| Body | Inter | 16px | 16px | 400 |
| Caption | Inter | 12px | 14px | 400 |
| Button | Inter | 16px | 16px | 600 |

### 4.3 Spacing Scale (Tailwind)
- Base unit: 4px
- Card padding: 16px (mobile), 24px (desktop)
- Section gap: 40px (mobile), 64px (desktop)
- Container max-width: 1280px
- Mobile horizontal padding: 16px

### 4.4 Border Radius
- Buttons: 12px (rounded-xl)
- Cards: 16px (rounded-2xl)
- Inputs: 10px (rounded-lg)
- Images: 12px (rounded-xl)
- Full rounded (pills): 9999px

### 4.5 Shadows
| Token | Value | Usage |
|-------|-------|-------|
| shadow-sm | `0 1px 2px rgba(0,0,0,0.05)` | Inputs |
| shadow-md | `0 4px 6px rgba(0,0,0,0.07)` | Cards |
| shadow-lg | `0 10px 25px rgba(0,0,0,0.1)` | Modals, floating elements |
| shadow-primary | `0 8px 20px rgba(108,92,231,0.3)` | Primary CTA buttons |

### 4.6 Animation & Micro-interactions
- **Page transitions**: Fade-in + slight translateY (0.3s ease-out)
- **Card hover**: Scale 1.02 + shadow elevation (0.2s)
- **Button hover**: Background darken + shadow-primary (0.15s)
- **Skeleton loading**: Shimmer effect on cards during data fetch
- **Toast notifications**: Slide-in from bottom (0.3s)
- **Accordion**: Smooth height transition (0.25s)
- **Image lazy load**: Blur-up placeholder (Next.js Image)

---

## 5. Information Architecture

### 5.1 Site Map

```
Homepage ("/")
├── Rent Section ("/rent")
│   ├── Categories List ("/rent")
│   │   ├── AC Rentals ("/rent/ac")
│   │   │   ├── Window AC ("/rent/ac/window")
│   │   │   ├── Split AC ("/rent/ac/split")
│   │   │   ├── Inverter AC ("/rent/ac/inverter")
│   │   │   └── Portable AC ("/rent/ac/portable")
│   │   ├── Fridge Rentals ("/rent/fridge")
│   │   │   ├── Single Door ("/rent/fridge/single-door")
│   │   │   ├── Double Door ("/rent/fridge/double-door")
│   │   │   └── Side-by-Side ("/rent/fridge/side-by-side")
│   │   └── Combo Deals ("/rent/combo")
│   └── Product Detail ("/rent/[category]/[product-slug]")
├── Service Section ("/service")
│   ├── AC Service ("/service/ac")
│   │   ├── AC Repair ("/service/ac/repair")
│   │   ├── AC Installation ("/service/ac/installation")
│   │   ├── AC Gas Refill ("/service/ac/gas-refill")
│   │   ├── AC Deep Cleaning ("/service/ac/deep-cleaning")
│   │   └── AC AMC ("/service/ac/amc")
│   ├── Fridge Service ("/service/fridge")
│   │   ├── Fridge Repair ("/service/fridge/repair")
│   │   ├── Fridge Gas Refill ("/service/fridge/gas-refill")
│   │   └── Fridge Deep Cleaning ("/service/fridge/deep-cleaning")
│   └── Service Detail ("/service/[category]/[service-slug]")
├── About Us ("/about")
├── Contact ("/contact")
├── Terms & Conditions ("/terms")
├── Privacy Policy ("/privacy")
├── Cancellation & Refund ("/refund-policy")
└── 404 Page
```

### 5.2 Navigation Structure (Mobile-First)

**Bottom Navigation Bar (Mobile — Fixed)**
```
┌─────────┬─────────┬─────────┬─────────┬─────────┐
│  Home   │  Rent   │ Service │  Call   │  Menu   │
│  (🏠)   │  (📦)   │  (🔧)   │  (📞)   │  (☰)   │
└─────────┴─────────┴─────────┴─────────┴─────────┘
```

**Top Navigation Bar (Desktop — Sticky)**
- Logo (left)
- Nav Links: Home | Rent | Service | About | Contact
- CTA: "Call Now" button (right)
- PWA Install button (hidden until prompt available)

---

## 6. Page Specifications

### 6.1 Homepage ("/")

#### Sections (Top to Bottom):

1. **Hero Banner**
   - Full-width, min-height: 80vh (mobile), 70vh (desktop)
   - Background: Gradient overlay on lifestyle image (family enjoying cool AC)
   - Headline: "Stay Cool, Pay Less — Rent AC & Fridge in India"
   - Subheadline: "Starting at ₹599/month. Free delivery & installation. No hidden charges."
   - Two CTAs: "Rent Now" (primary) | "Book Service" (secondary outline)
   - Trust badges below: "✓ 50,000+ Happy Customers | ✓ Pan-India Delivery | ✓ 24/7 Support"
   - Auto-sliding carousel (3 slides, 5s interval, swipeable on mobile)

2. **Search Bar**
   - Sticky search bar below hero
   - Placeholder: "Search AC, Fridge, Service..."
   - Auto-suggestions with categories
   - Voice search icon (optional)

3. **Categories Grid**
   - Section title: "What are you looking for?"
   - 2x2 grid (mobile), 4 columns (desktop)
   - Cards: AC Rentals, Fridge Rentals, AC Service, Fridge Service
   - Each card: Icon (48px), Category name, "Explore →" link
   - Hover: Card lift + icon bounce

4. **Why Choose Us**
   - Section title: "Why Choose CoolRent?"
   - 4 feature cards in horizontal scroll (mobile) / grid (desktop)
   - Features:
     - "💰 Affordable Pricing" — "Starting at ₹599/month with zero deposit options"
     - "🚚 Free Delivery & Installation" — "Same-day delivery in metro cities"
     - "🔒 Quality Assured" — "100% tested appliances with warranty"
     - "📞 24/7 Support" — "Round-the-clock customer assistance"
   - Icon + Title + Description per card

5. **Popular Products (Rent)**
   - Section title: "Most Rented This Month"
   - Horizontal scroll carousel (mobile) / 4-col grid (desktop)
   - Product cards with:
     - Product image (aspect-ratio 4:3)
     - Product name
     - Starting price: "₹599/month"
     - Rating: "⭐ 4.8 (234 reviews)"
     - "Rent Now" button
   - "View All" link to /rent

6. **Popular Services**
   - Section title: "Top Services"
   - Similar layout to Popular Products
   - Service cards with:
     - Service image
     - Service name
     - Starting price: "₹299 onwards"
     - "Book Now" button
   - "View All" link to /service

7. **How It Works**
   - Section title: "Rent in 4 Easy Steps"
   - 4-step horizontal timeline (mobile: vertical)
   - Steps:
     1. "Choose Product" — Browse & select your appliance
     2. "Select Plan" — Pick duration & quantity
     3. "Place Order" — Confirm via WhatsApp/Call
     4. "Get Delivered" — Free delivery & installation
   - Animated step connectors

8. **Testimonials**
   - Section title: "What Our Customers Say"
   - Horizontal swipeable carousel (mobile)
   - Testimonial card:
     - 5-star rating
     - Quote text
     - Customer name, city, photo (or initials avatar)
     - "Verified Customer" badge
   - Auto-slide every 6s
   - Minimum 6 testimonials displayed

9. **Apps Coming Soon**
   - Section title: "Download Our App Soon"
   - App mockup image
   - Text: "Get exclusive app-only discounts & track your orders"
   - Email input: "Notify me when app launches"
   - Submit button
   - App Store & Play Store badges (disabled/coming soon state)

10. **Social Media Links**
    - Section title: "Follow Us"
    - Icons: Instagram, Facebook, Twitter/X, YouTube, LinkedIn
    - Links open in new tab with `rel="noopener noreferrer"`

11. **FAQ Accordion**
    - Section title: "Frequently Asked Questions"
    - 8-10 common questions about rental, service, payments, returns
    - Smooth expand/collapse animation
    - Schema.org FAQ structured data for SEO

12. **Footer**
    - 4-column layout (desktop), stacked (mobile)
    - Column 1: Logo + tagline + brief about
    - Column 2: Quick Links (Rent, Service, About, Contact, Terms, Privacy)
    - Column 3: Contact Info (Phone, Email, Address)
    - Column 4: Newsletter signup
    - Bottom bar: Copyright + Payment method icons (UPI, Cards, Net Banking)

---

### 6.2 Category Listing Page ("/rent" or "/service")

#### Layout:
- Breadcrumb navigation
- Page title + result count
- Filter bar (sticky on mobile):
  - Sort: Price Low-High, Price High-Low, Popular
  - Filter: Brand, Capacity, Price Range, Duration
- Product/Service grid:
  - 2 columns (mobile), 3 columns (tablet), 4 columns (desktop)
  - Infinite scroll or pagination (prefer pagination for SEO)
- Each card:
  - Image (lazy loaded)
  - Name
  - Price ("₹X/month" for rent, "₹X onwards" for service)
  - Rating
  - Quick action buttons: "View Details" | "Enquire Now"

---

### 6.3 Product Detail Page (Rent) — "/rent/[category]/[product-slug]"

#### URL Structure:
- SEO-friendly slug: `/rent/ac/split/1-ton-split-ac-inverter`
- Canonical URL set
- Open Graph tags for social sharing

#### Sections:

1. **Breadcrumb**
   - Home > Rent > AC > Split AC > Product Name

2. **Product Gallery**
   - Main image (large, zoom on tap)
   - Thumbnail strip below (swipeable on mobile)
   - 3-5 product images
   - Image alt text: "[Product Name] - [Brand] [Capacity] for rent in [City]"

3. **Product Info Header**
   - Product name (H1)
   - Brand badge
   - Rating + review count
   - "In Stock" / "Limited Stock" badge

4. **Pricing Card**
   - Monthly rent: "₹X/month"
   - Quarterly: "₹Y/quarter (Save 10%)"
   - Annual: "₹Z/year (Save 20%)"
   - Security deposit (if any): "Refundable deposit: ₹X"
   - "Free delivery & installation" highlight

5. **Configuration Form (Order Section)**
   - **Duration Selector**:
     - Radio buttons: 1 Month | 3 Months | 6 Months | 12 Months
     - Default: 3 Months
     - Price updates dynamically
   - **Quantity Selector**:
     - Stepper: - [1] + (min: 1, max: 10)
   - **City Selector** (dropdown):
     - Pre-filled if location detected
     - Options: Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, etc.
   - **Dynamic Price Calculator**:
     - Shows: "Total for X months: ₹XXX"
     - "You save: ₹XX" (if applicable)

6. **CTA Buttons**
   - **Primary**: "Order on WhatsApp" — Generates pre-filled WhatsApp message
   - **Secondary**: "Call Now" — `tel:` link
   - **Tertiary**: "Send Enquiry" — Scrolls to enquiry form

7. **Why Choose Us (Product Level)**
   - 4 mini features specific to this product category

8. **Specifications Section**
   - Accordion or tabbed layout
   - Table format:
     | Specification | Value |
     |---------------|-------|
     | Brand | Voltas / LG / Samsung / etc. |
     | Type | Split / Window / Inverter |
     | Capacity | 1 Ton / 1.5 Ton / 2 Ton |
     | Star Rating | 3 Star / 5 Star |
     | Power Consumption | X Watts |
     | Warranty | X months |
     | Dimensions | H x W x D |
     | Weight | X kg |
     | Color | White / Silver |
   - For Fridge:
     | Specification | Value |
     |---------------|-------|
     | Brand | LG / Samsung / Whirlpool |
     | Type | Single Door / Double Door |
     | Capacity | 190L / 250L / 300L |
     | Star Rating | 3 Star / 4 Star / 5 Star |
     | Defrost Type | Direct Cool / Frost Free |
     | Warranty | X months |

9. **What's Included**
   - Bullet list:
     - Free delivery & installation
     - Free maintenance during rental period
     - Free relocation within city (1 per contract)
     - 24/7 customer support
     - Easy return policy

10. **Terms & Conditions Checkbox**
    - Mandatory checkbox: "I agree to the Terms & Conditions and Rental Agreement"
    - Link to /terms page (opens in new tab)
    - Link to /refund-policy
    - Form cannot submit without checking
    - Error state: "Please accept the terms to proceed"

11. **Enquiry Form (Bottom of Page)**
    - Pre-filled with selected product details
    - Fields: Name, Phone, Email, Address, Message
    - Submit → Email via Resend

12. **Related Products**
    - "You may also like" carousel
    - 4-6 related items

13. **Recently Viewed**
    - LocalStorage-based
    - Horizontal scroll

---

### 6.4 Service Detail Page — "/service/[category]/[service-slug]"

#### Similar to Product Detail but:
- No Duration/Quantity selectors
- Service-specific fields:
  - Service type (dropdown)
  - Preferred date (date picker)
  - Preferred time slot (Morning / Afternoon / Evening)
  - Problem description (textarea)
- Pricing: "Starting at ₹X" (estimate, final after inspection)
- WhatsApp message includes service type and preferred date

---

### 6.5 Enquiry Form (Standalone) — "/contact" or Modal

#### Fields:
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Full Name | Text | Yes | Min 2 chars, only letters & spaces |
| Phone Number | Tel | Yes | 10 digits, Indian format, starts with 6-9 |
| Email | Email | Yes | Valid email format |
| Address | Textarea | Yes | Min 10 chars |
| Category | Select | Yes | Rent / Service |
| Sub-Category | Select | Yes | Dynamic based on Category |
| Product/Service | Select | Yes | Dynamic based on Sub-Category |
| Quantity | Number | Conditional (Rent only) | Min 1, Max 10 |
| Duration | Select | Conditional (Rent only) | 1/3/6/12 months |
| Message | Textarea | No | Max 500 chars |
| Terms Checkbox | Checkbox | Yes | Must be checked |

#### Validation Rules:
- Real-time validation on blur
- Phone: Regex `^[6-9]\d{9}$`
- Email: Standard RFC 5322 simplified regex
- Show inline error messages below each field
- Disable submit button until all required fields valid
- Show loading state on submit
- Success: Toast notification + form reset
- Error: Toast with specific error message

#### Data Flow:
```
User fills form → Client-side validation → Submit
→ Resend API call (server action)
→ Email sent to: business@coolrent.in
→ CC to: admin@coolrent.in
→ Auto-reply to user (optional)
→ Success toast shown
→ Form reset
```

#### Email Template (Resend):
- Subject: "New Enquiry from [Name] — [Product/Service]"
- Body:
  ```
  New Enquiry Received

  Name: [Name]
  Phone: [Phone]
  Email: [Email]
  Address: [Address]
  Category: [Category]
  Sub-Category: [Sub-Category]
  Product/Service: [Product]
  Quantity: [Quantity]
  Duration: [Duration]
  Message: [Message]

  Submitted at: [Timestamp]
  Source: CoolRent Website
  ```

---

### 6.6 WhatsApp Integration

#### Order on WhatsApp Flow:
1. User selects product, quantity, duration
2. Clicks "Order on WhatsApp"
3. Pre-filled message generated:
   ```
   Hi CoolRent Team,

   I want to rent the following:

   Product: [Product Name]
   Category: [Category] > [Sub-Category]
   Quantity: [X]
   Duration: [X Months]
   City: [City]
   Estimated Price: ₹[Total]

   Please confirm availability and share payment details.

   Name: [Pre-filled if available]
   Phone: [Pre-filled if available]

   Sent from: CoolRent Website
   ```
4. URL encoded and opened:
   `https://wa.me/91[BUSINESS_NUMBER]?text=[ENCODED_MESSAGE]`
5. WhatsApp opens (app or web) with pre-filled message
6. User sends message

#### Call Button:
- Fixed floating button (bottom-right on mobile)
- Desktop: In header + on product cards
- `tel:+91[BUSINESS_NUMBER]`
- Icon: Phone handset
- Label: "Call Now" / "📞"

---

## 7. PWA (Progressive Web App) Requirements

### 7.1 Manifest File (`manifest.json`)
```json
{
  "name": "CoolRent India - AC & Fridge Rental",
  "short_name": "CoolRent",
  "description": "Rent AC and Fridge in India. Affordable monthly rentals with free delivery.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#6C5CE7",
  "theme_color": "#6C5CE7",
  "orientation": "portrait",
  "icons": [
    { "src": "/icons/icon-72x72.png", "sizes": "72x72" },
    { "src": "/icons/icon-96x96.png", "sizes": "96x96" },
    { "src": "/icons/icon-128x128.png", "sizes": "128x128" },
    { "src": "/icons/icon-144x144.png", "sizes": "144x144" },
    { "src": "/icons/icon-152x152.png", "sizes": "152x152" },
    { "src": "/icons/icon-192x192.png", "sizes": "192x192" },
    { "src": "/icons/icon-384x384.png", "sizes": "384x384" },
    { "src": "/icons/icon-512x512.png", "sizes": "512x512" }
  ]
}
```

### 7.2 Service Worker (`sw.js`)
- Cache static assets (JS, CSS, images)
- Cache-first strategy for static assets
- Network-first for API calls (if any)
- Offline fallback page
- Background sync for form submissions (optional)

### 7.3 Install Prompt
- Custom "Add to Home Screen" button
- Shows when `beforeinstallprompt` event fires
- Button hidden after installation
- Stores installation state in localStorage
- Position: Floating banner (top) or Settings menu

### 7.4 Native App Feel
- `viewport-fit=cover` for notch devices
- Safe area insets for iPhone X+
- No browser UI in standalone mode
- Splash screen auto-generated from manifest
- Status bar color matches theme
- Smooth page transitions (no browser default)
- Touch feedback on all interactive elements
- Pull-to-refresh disabled (or customized)
- Overscroll behavior: none (prevents bounce)

---

## 8. SEO & Structured Data

### 8.1 Meta Tags (Per Page)
```
title: [Product/Service Name] | Rent [Category] in [City] | CoolRent India
description: Rent [Product] starting at ₹X/month. Free delivery & installation in [City]. [Brand] [Specs]. Book now!
keywords: AC rental, fridge rental, AC service, fridge repair, [City], monthly rent
og:title: [Same as title]
og:description: [Same as description]
og:image: [Product image URL]
og:url: [Canonical URL]
twitter:card: summary_large_image
canonical: [Canonical URL]
robots: index, follow
```

### 8.2 Structured Data (JSON-LD)

**Organization Schema (Global)**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CoolRent India",
  "url": "https://coolrent.in",
  "logo": "https://coolrent.in/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://facebook.com/coolrent",
    "https://instagram.com/coolrent"
  ]
}
```

**Product Schema (Rent Pages)**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "1 Ton Split AC Inverter",
  "image": "[Image URL]",
  "description": "Rent 1 Ton Split Inverter AC starting at ₹899/month",
  "brand": { "@type": "Brand", "name": "Voltas" },
  "offers": {
    "@type": "Offer",
    "price": "899",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "234"
  }
}
```

**Service Schema (Service Pages)**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AC Repair Service",
  "provider": { "@type": "Organization", "name": "CoolRent India" },
  "areaServed": { "@type": "City", "name": "Delhi" },
  "priceRange": "₹299 - ₹1999",
  "description": "Professional AC repair service in Delhi. Same-day service available."
}
```

**FAQ Schema (Homepage)**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum rental duration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The minimum rental duration is 1 month."
      }
    }
  ]
}
```

**BreadcrumbList Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://coolrent.in/" },
    { "@type": "ListItem", "position": 2, "name": "Rent", "item": "https://coolrent.in/rent" },
    { "@type": "ListItem", "position": 3, "name": "AC", "item": "https://coolrent.in/rent/ac" }
  ]
}
```

### 8.3 Sitemap & Robots
- `sitemap.xml` — Auto-generated, includes all product/service pages
- `robots.txt` — Allow all, point to sitemap
- Submit to Google Search Console

### 8.4 Performance SEO
- Core Web Vitals targets:
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
- Image optimization: WebP format, responsive images, lazy loading
- Font loading: `font-display: swap`
- Preconnect to critical domains

---

## 9. Security Requirements

### 9.1 Input Validation
- All form inputs sanitized (DOMPurify for HTML)
- Phone validation: 10-digit Indian format
- Email validation: Strict regex
- Rate limiting on API routes (5 requests/minute per IP)
- CSRF protection on all forms

### 9.2 Data Protection
- No sensitive data stored in localStorage (except non-PII preferences)
- Phone numbers masked in logs
- GDPR/CCPA compliant cookie consent banner
- Privacy policy page mandatory

### 9.3 HTTPS & Headers
- Force HTTPS redirect
- Security headers:
  ```
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: [Strict CSP]
  Permissions-Policy: geolocation=(self)
  ```

### 9.4 Resend Email Security
- API key stored in environment variables (never client-side)
- Server-side only API calls (Next.js Server Actions)
- Input validation before sending
- Rate limiting: Max 10 emails/hour per IP
- Domain verification with Resend
- DKIM, SPF, DMARC configured

---

## 10. Performance Requirements

### 10.1 Loading Performance
| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint (FCP) | < 1.5s | Lighthouse |
| Largest Contentful Paint (LCP) | < 2.5s | Lighthouse |
| Time to Interactive (TTI) | < 3.5s | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| Total Blocking Time (TBT) | < 200ms | Lighthouse |

### 10.2 Optimization Strategies
- **Images**: Next.js Image component, WebP/AVIF, responsive sizes, blur placeholder
- **Fonts**: Subset Inter font, preload critical weights
- **CSS**: Tailwind purge unused styles, critical CSS inline
- **JS**: Code splitting per route, dynamic imports for heavy components
- **Caching**: Static page generation (SSG) for product pages, ISR for updates
- **CDN**: Vercel Edge Network
- **Compression**: Brotli/Gzip

### 10.3 Bundle Size Budgets
- Initial JS: < 200KB (gzipped)
- CSS: < 50KB (gzipped)
- Images: < 100KB per image (hero images max 200KB)

---

## 11. Accessibility (a11y)

### 11.1 Standards
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### 11.2 Implementation
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- ARIA labels on interactive elements
- Alt text on all images (descriptive)
- Color contrast ratio: 4.5:1 minimum
- Focus visible states on all interactive elements
- Skip-to-content link
- Form labels associated with inputs
- Error announcements via `aria-live`

---

## 12. Analytics & Tracking

### 12.1 Events to Track
| Event | Trigger | Data |
|-------|---------|------|
| page_view | Page load | Page path, referrer |
| product_view | Product page load | Product ID, name, category |
| whatsapp_click | Click "Order on WhatsApp" | Product, quantity, duration, price |
| call_click | Click "Call Now" | Location on page |
| enquiry_submit | Form submission | Category, product, source |
| category_click | Click category card | Category name |
| pwa_install | Click "Add to Home Screen" | Success/failure |
| search | Search query | Query text, results count |

### 12.2 Tools
- Google Analytics 4 (GA4)
- Google Search Console
- Hotjar / Microsoft Clarity (heatmaps, recordings)

---

## 13. Content Requirements

### 13.1 Product Data Structure
```typescript
interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'ac' | 'fridge';
  subCategory: string;
  brand: string;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  pricing: {
    monthly: number;
    quarterly: number;
    halfYearly: number;
    yearly: number;
  };
  deposit: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
  whatsappMessage: string;
}
```

### 13.2 Service Data Structure
```typescript
interface Service {
  id: string;
  slug: string;
  name: string;
  category: 'ac' | 'fridge';
  subCategory: string;
  description: string;
  startingPrice: number;
  images: string[];
  whatsappMessage: string;
  features: string[];
}
```

### 13.3 City Coverage
Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Indore, Nagpur, Kochi, Coimbatore

---

## 14. Legal & Compliance Pages

### 14.1 Terms & Conditions (`/terms`)
- Rental agreement terms
- Payment terms
- Security deposit policy
- Damage liability
- Cancellation policy
- Force majeure

### 14.2 Privacy Policy (`/privacy`)
- Data collection practices
- Cookie usage
- Third-party sharing
- User rights
- Contact for data requests

### 14.3 Cancellation & Refund (`/refund-policy`)
- Cancellation process
- Refund timeline
- Partial refund conditions
- Security deposit refund process

### 14.4 Mandatory Checkbox Text
> "I have read and agree to the [Terms & Conditions](/terms) and [Privacy Policy](/privacy). I understand that submitting this enquiry does not guarantee availability and the final confirmation will be provided via WhatsApp/Call."

---

## 15. Technical Architecture

### 15.1 Project Structure
```
coolrent-india/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── manifest.ts             # PWA manifest
│   ├── robots.ts               # robots.txt
│   ├── sitemap.ts              # sitemap.xml
│   ├── rent/
│   │   ├── page.tsx            # Rent category listing
│   │   ├── [category]/
│   │   │   ├── page.tsx        # Sub-category listing
│   │   │   └── [product]/
│   │   │       └── page.tsx    # Product detail
│   ├── service/
│   │   ├── page.tsx            # Service listing
│   │   └── [category]/
│   │       ├── page.tsx        # Service sub-category
│   │       └── [service]/
│   │           └── page.tsx    # Service detail
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── refund-policy/
│   │   └── page.tsx
│   ├── api/
│   │   └── send-enquiry/
│   │       └── route.ts        # Resend API route
│   └── actions/
│       └── enquiry.ts          # Server action for enquiry
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── BottomNav.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── HeroBanner.tsx
│   │   ├── CategoriesGrid.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProductCarousel.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── AppsComingSoon.tsx
│   ├── product/
│   │   ├── ProductGallery.tsx
│   │   ├── ProductInfo.tsx
│   │   ├── PricingCard.tsx
│   │   ├── ConfigurationForm.tsx
│   │   ├── Specifications.tsx
│   │   └── EnquiryForm.tsx
│   ├── shared/
│   │   ├── ProductCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── StarRating.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── CallButton.tsx
│   │   ├── PWAInstall.tsx
│   │   └── CookieConsent.tsx
│   └── forms/
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Checkbox.tsx
│       └── ValidationMessage.tsx
├── lib/
│   ├── utils.ts                # Utility functions
│   ├── data.ts                 # Product/service data
│   ├── constants.ts            # App constants
│   └── validations.ts          # Form validations
├── hooks/
│   ├── usePWA.ts               # PWA install prompt
│   ├── useLocalStorage.ts      # Local storage hook
│   ├── useRecentlyViewed.ts    # Recently viewed products
│   └── useAnalytics.ts         # Analytics events
├── types/
│   └── index.ts                # TypeScript types
├── public/
│   ├── icons/                  # PWA icons
│   ├── images/                 # Product images
│   └── sw.js                   # Service worker
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 15.2 Dependencies
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "resend": "^3.0.0",
    "tailwindcss": "^3.4.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-select": "^2.1.0",
    "@radix-ui/react-checkbox": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/react": "^19.0.0",
    "@types/node": "^20.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

### 15.3 Next.js Configuration
```javascript
// next.config.js
const nextConfig = {
  output: 'export', // Static export for simple hosting
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ],
};

module.exports = nextConfig;
```

---

## 16. Resend Email Integration

### 16.1 Setup
1. Sign up at resend.com
2. Verify domain (coolrent.in)
3. Generate API key
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   ENQUIRY_EMAIL=business@coolrent.in
   ```

### 16.2 API Route (`app/api/send-enquiry/route.ts`)
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const enquirySchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email(),
  address: z.string().min(10),
  category: z.enum(['rent', 'service']),
  subCategory: z.string(),
  product: z.string(),
  quantity: z.number().min(1).optional(),
  duration: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = enquirySchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: 'CoolRent Enquiries <enquiries@coolrent.in>',
      to: [process.env.ENQUIRY_EMAIL!],
      cc: ['admin@coolrent.in'],
      replyTo: validated.email,
      subject: `New Enquiry: ${validated.product} from ${validated.name}`,
      html: generateEmailTemplate(validated),
    });

    if (error) throw error;

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to send enquiry' },
      { status: 500 }
    );
  }
}
```

### 16.3 Rate Limiting
- Implement IP-based rate limiting
- Max 5 enquiries per IP per hour
- Use Vercel KV or simple in-memory store

---

## 17. Responsive Breakpoints

| Breakpoint | Width | Tailwind Prefix | Layout Changes |
|------------|-------|-----------------|----------------|
| Mobile | < 640px | Default | Single column, bottom nav, stacked sections |
| Tablet | 640px - 1023px | `sm:` / `md:` | 2-column grids, side nav |
| Desktop | 1024px - 1279px | `lg:` | 3-4 column grids, horizontal nav |
| Large Desktop | >= 1280px | `xl:` | Max-width container, enhanced spacing |

---

## 18. Error Handling

### 18.1 404 Page
- Custom design matching brand
- "Page not found" message
- Suggested links (Home, Rent, Service)
- Search bar

### 18.2 500 Page
- Generic error message
- "Try again" button
- Contact support link

### 18.3 Form Errors
- Inline validation with clear messages
- Shake animation on invalid submit
- Toast notification for server errors

### 18.4 Image Fallback
- Placeholder image on load failure
- Alt text displayed if image fails

---

## 19. Testing Checklist

### 19.1 Functional Testing
- [ ] All navigation links work
- [ ] Product pages load with correct data
- [ ] WhatsApp link generates correct message
- [ ] Call button opens dialer
- [ ] Enquiry form validates all fields
- [ ] Email sends successfully via Resend
- [ ] Terms checkbox blocks submission if unchecked
- [ ] PWA install prompt appears
- [ ] Recently viewed products persist

### 19.2 Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest, iOS)
- [ ] Firefox (latest)
- [ ] Edge (latest)

### 19.3 Device Testing
- [ ] iPhone (various sizes)
- [ ] Android (various sizes)
- [ ] iPad / Tablet
- [ ] Desktop (various resolutions)

### 19.4 Performance Testing
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals pass
- [ ] No console errors
- [ ] Images load progressively

### 19.5 SEO Testing
- [ ] Meta tags correct on all pages
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Sitemap submitted to GSC
- [ ] Robots.txt accessible
- [ ] Canonical URLs correct

---

## 20. Deployment

### 20.1 Environment Variables
```
RESEND_API_KEY=
ENQUIRY_EMAIL=
ADMIN_EMAIL=
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_BUSINESS_PHONE=+91XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://coolrent.in
```

### 20.2 Deployment Steps
1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Configure custom domain
5. Verify SSL certificate
6. Test all functionality
7. Submit sitemap to Google

### 20.3 Post-Launch
- Monitor analytics
- Collect user feedback
- A/B test CTAs
- Optimize based on data

---

## 21. Future Enhancements (Phase 2)

1. **User Accounts**: Login/signup, order history, profile management
2. **Payment Integration**: Razorpay/UPI for online payments
3. **Real-time Availability**: Inventory management system
4. **Chat Support**: WhatsApp Business API integration
5. **Reviews System**: User-submitted reviews and ratings
6. **Multi-city**: City-specific landing pages
7. **Blog**: SEO content for AC/fridge tips
8. **Referral Program**: Refer and earn discounts

---

## 22. Appendix

### 22.1 Glossary
- **PWA**: Progressive Web App
- **SSG**: Static Site Generation
- **ISR**: Incremental Static Regeneration
- **LCP**: Largest Contentful Paint
- **CLS**: Cumulative Layout Shift
- **CSP**: Content Security Policy

### 22.2 Reference Links
- Next.js Docs: https://nextjs.org/docs
- Resend Docs: https://resend.com/docs
- Tailwind CSS: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- Schema.org: https://schema.org

---

**Document Version**: 1.0
**Last Updated**: 2026-07-01
**Author**: Product Team
**Status**: Approved for Development
