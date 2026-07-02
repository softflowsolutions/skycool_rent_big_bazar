# RentoMojo Mobile Web UI - Design System & Style Guide

## Table of Contents
1. [Overview](#overview)
2. [Brand Identity](#brand-identity)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Layout & Grid System](#layout--grid-system)
6. [Components](#components)
7. [Spacing & Whitespace](#spacing--whitespace)
8. [Shadows & Elevation](#shadows--elevation)
9. [Border Radius](#border-radius)
10. [Icons & Imagery](#icons--imagery)
11. [Animations & Interactions](#animations--interactions)
12. [Page-Specific Patterns](#page-specific-patterns)
13. [Responsive Behavior](#responsive-behavior)
14. [Accessibility Considerations](#accessibility-considerations)

---

## Overview

**Platform:** Mobile Web (mWeb) - RentoMojo  
**Domain:** rentomojo.com  
**Primary Market:** India (Pune focus in screenshots)  
**Business Model:** Furniture & Appliance Rental (Subscription/Rental Economy)  
**Device Context:** Mobile-first, touch-optimized, single-column layout  
**Overall Aesthetic:** Clean, modern, trustworthy, warm, approachable with a premium-yet-accessible feel. Heavy use of lifestyle photography, rounded corners, and ample whitespace.

---

## Brand Identity

### Logo
- **Primary Logo:** Lowercase "m" in a rounded square container, white "m" on red background
- **Secondary Text:** "rentomojo.com" in clean sans-serif
- **Logo Color:** White text on `#E53935` (RentoMojo Red) background
- **Logo Shape:** Rounded square with slightly pronounced corners

### Brand Voice
- Friendly, helpful, transparent
- Emphasis on "worry-free", "flexible", "affordable"
- Trust-building language ("100% Refundable Deposit", "Free Repair & Maintenance")
- Urgency cues without being aggressive ("10+ ordered in last 1 hour")

---

## Color Palette

### Primary Colors
| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **RentoMojo Red** | `#E53935` | rgb(229, 57, 53) | Primary CTA buttons, logo, badges, price highlights, active states, add-to-cart buttons |
| **RentoMojo Dark Red** | `#C62828` | rgb(198, 40, 40) | Button hover states, pressed states, emphasis |
| **RentoMojo Light Red** | `#FFEBEE` | rgb(255, 235, 238) | Light backgrounds for badges, subtle highlights, rating stars fill |

### Secondary Colors
| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Success Green** | `#4CAF50` | rgb(76, 175, 80) | Success messages, verified badges, positive indicators, "in stock" |
| **Dark Green** | `#2E7D32` | rgb(46, 125, 50) | Darker green for text emphasis |
| **Info Blue** | `#1976D2` | rgb(25, 118, 210) | Information banners, links, KYC prompts |
| **Light Blue** | `#E3F2FD` | rgb(227, 242, 253) | Light blue backgrounds for info sections |

### Neutral Colors
| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Primary backgrounds, cards, input fields |
| **Off-White** | `#FAFAFA` | rgb(250, 250, 250) | Page background, subtle section differentiation |
| **Light Gray** | `#F5F5F5` | rgb(245, 245, 245) | Card backgrounds, section separators, hover states |
| **Border Gray** | `#E0E0E0` | rgb(224, 224, 224) | Borders, dividers, input outlines |
| **Medium Gray** | `#9E9E9E` | rgb(158, 158, 158) | Secondary text, placeholders, disabled states |
| **Dark Gray** | `#616161` | rgb(97, 97, 97) | Body text, labels |
| **Charcoal** | `#212121` | rgb(33, 33, 33) | Primary headings, important text |
| **Pure Black** | `#000000` | rgb(0, 0, 0) | Maximum emphasis text, overlay text on images |

### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| **AQI Poor Orange** | `#FF9800` | Air quality indicator - poor level |
| **AQI Good Green** | `#4CAF50` | Air quality indicator - good level |
| **Discount Red** | `#E53935` | Discount percentages, strike-through pricing |
| **Star Gold** | `#FFC107` | Rating stars fill color |
| **Tag Light Red** | `#FFCDD2` | Light red tag backgrounds |
| **Tag Text Red** | `#C62828` | Tag text color |

### Gradient Patterns
- **Hero Overlay:** `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)` - Used on product hero images for text readability
- **Promo Banner:** `linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)` - Red gradient for promotional sections

---

## Typography

### Font Family
- **Primary Font:** System font stack or custom sans-serif (likely Inter, Roboto, or similar)
- **Fallback Stack:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Characteristics:** Clean, geometric, highly legible at small sizes, modern feel

### Type Scale (Mobile)

| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| **H1 - Page Title** | 24px / 1.5rem | 700 (Bold) | 1.3 | -0.02em | Main page headings, hero text |
| **H2 - Section Title** | 20px / 1.25rem | 700 (Bold) | 1.3 | -0.01em | Section headers, product names |
| **H3 - Card Title** | 18px / 1.125rem | 600 (SemiBold) | 1.4 | 0 | Card headings, product titles |
| **H4 - Subsection** | 16px / 1rem | 600 (SemiBold) | 1.4 | 0 | Subsection titles, feature names |
| **Body Large** | 16px / 1rem | 400 (Regular) | 1.5 | 0 | Primary body text, descriptions |
| **Body** | 14px / 0.875rem | 400 (Regular) | 1.5 | 0 | Standard body text, descriptions |
| **Body Small** | 13px / 0.8125rem | 400 (Regular) | 1.4 | 0 | Secondary descriptions |
| **Caption** | 12px / 0.75rem | 400 (Regular) | 1.3 | 0.01em | Captions, metadata, timestamps |
| **Caption Small** | 11px / 0.6875rem | 400 (Regular) | 1.3 | 0.02em | Fine print, legal text |
| **Button** | 14px / 0.875rem | 600 (SemiBold) | 1 | 0.02em | Button text, CTAs |
| **Price Large** | 28px / 1.75rem | 700 (Bold) | 1.2 | -0.02em | Large price display |
| **Price** | 20px / 1.25rem | 700 (Bold) | 1.2 | -0.01em | Standard price display |
| **Price Small** | 14px / 0.875rem | 600 (SemiBold) | 1.3 | 0 | Small price text, strikethrough |
| **Badge** | 11px / 0.6875rem | 600 (SemiBold) | 1 | 0.03em | Badge labels, tags |

### Text Colors Hierarchy
1. **Primary Text:** `#212121` - Headlines, important content
2. **Secondary Text:** `#616161` - Body text, descriptions
3. **Tertiary Text:** `#9E9E9E` - Metadata, placeholders, disabled
4. **Inverse Text:** `#FFFFFF` - Text on dark/colored backgrounds
5. **Link Text:** `#1976D2` - Clickable links, interactive text
6. **Price Text:** `#212121` - Regular prices
7. **Discount Text:** `#E53935` - Discounted prices, savings
8. **Success Text:** `#2E7D32` - Positive indicators

### Text Formatting Patterns
- **Strike-through:** Used for original prices before discount. Color: `#9E9E9E`, with a horizontal line through
- **Underline:** Used sparingly for links, color `#1976D2`
- **Bold Emphasis:** Weight 600-700 for prices, headings, important labels
- **Uppercase:** Used for badges, tags, and some section labels. Letter-spacing increased to 0.03em

---

## Layout & Grid System

### Container
- **Max Width:** 100% (mobile-first, full-bleed)
- **Side Padding:** 16px (1rem) on left and right
- **Content Max Width:** None (fluid on mobile)

### Grid System
- **Type:** Single-column layout (mobile)
- **Card Grids:** 2-column grid for product cards, category cards
  - Gap: 12px-16px between cards
  - Equal width columns
- **Category Rows:** Horizontal scrollable rows
  - Card width: ~120px-140px
  - Gap: 12px
  - Snap scrolling

### Section Spacing
- **Between Major Sections:** 24px-32px
- **Between Subsections:** 16px-20px
- **Within Cards:** 12px-16px padding

### Z-Index Hierarchy
| Layer | Z-Index | Elements |
|-------|---------|----------|
| **Base Content** | 0-10 | Page content, cards |
| **Sticky Headers** | 100 | Sticky nav, filters |
| **Overlays** | 200 | Modals, dropdowns |
| **Toasts/Notifications** | 300 | Toast messages |
| **Loading Spinners** | 400 | Full-screen loaders |

---

## Components

### 1. Navigation Bar (Header)

**Structure:**
- **Height:** ~56px
- **Background:** `#FFFFFF` with subtle bottom border `#E0E0E0`
- **Position:** Sticky top
- **Elements (left to right):**
  1. **Location Selector**
     - Icon: Map pin (location icon)
     - Text: City name (e.g., "Pune, Mah...")
     - Dropdown chevron
     - Font: 14px, weight 500, color `#616161`
  2. **Right Actions:**
     - Wishlist icon (heart outline)
     - Settings/gear icon
     - User profile icon
     - Cart icon with badge

**Search Bar (below header):**
- **Height:** 48px
- **Background:** `#F5F5F5`
- **Border Radius:** 24px (pill shape)
- **Placeholder:** "Search for products to rent"
- **Icon:** Search magnifying glass, left-aligned, color `#9E9E9E`
- **Padding:** 16px horizontal
- **Margin:** 12px below header

---

### 2. Hero Banner / Product Gallery

**Structure:**
- **Aspect Ratio:** ~16:10 or 4:3 (varies by product)
- **Width:** Full bleed (100% viewport)
- **Image Treatment:** High-quality lifestyle photography, well-lit, aspirational settings
- **Overlay:** Subtle dark gradient at bottom for text legibility
- **Navigation:**
  - Thumbnail strip below main image (3-4 visible thumbnails)
  - Thumbnail size: ~80px x 60px
  - Thumbnail border: 2px solid transparent, active state `#E53935`
  - Video thumbnail: Play button overlay (red circle with white triangle)

**Social Proof Badge (overlay on image):**
- **Position:** Top-left or below image
- **Style:** Subtle text
- **Text:** "10+ ordered in last 1 hour"
- **Font:** 12px, color `#616161`

---

### 3. Product Title Section

**Structure:**
- **Product Name:** H2, 20px, weight 700, color `#212121`
- **Example:** "Morris Ergo-Back Support Office Chair"
- **Margin:** 16px below image

---

### 4. Rating & Review Summary

**Structure:**
- **Rating Badge:**
  - Background: `#4CAF50` (green) pill
  - Text: "4.89" white, 14px, weight 600
  - Star icon: White, 12px, inline
  - Review count: "344 reviews" in gray, 12px
- **Rating Breakdown (expanded):**
  - Horizontal bar chart
  - Bars: Green fill `#4CAF50` on gray track `#E0E0E0`
  - Star labels: 5★, 4★, etc.
  - Count labels: Right-aligned numbers

---

### 5. Pricing Section

**Structure:**
- **Label:** "To Pay:" - 14px, weight 400, color `#616161`
- **Price:** "₹175" - 28px, weight 700, color `#212121`
- **Tenure:** "/mo for 36 months" - 14px, weight 400, color `#616161`
- **Change Link:** "Change" - 13px, weight 500, color `#1976D2`, underlined
- **Deposit Note:** "100% Refundable Deposit" - 12px, color `#616161`
- **Discount Badge:** 
  - Background: `#FFEBEE` (light red)
  - Text: "52% off" - 11px, weight 600, color `#C62828`
  - Border radius: 4px
  - Padding: 4px 8px

**Tenure Selector:**
- **Style:** Horizontal scrollable pills
- **Active Pill:** 
  - Background: `#E53935`
  - Text: White, 14px, weight 600
  - Border radius: 20px
- **Inactive Pill:**
  - Background: `#F5F5F5`
  - Text: `#616161`, 14px
  - Border: 1px solid `#E0E0E0`

---

### 6. Add to Cart Button

**Primary CTA:**
- **Height:** 48px-52px
- **Width:** Full width (minus padding)
- **Background:** `#E53935`
- **Border Radius:** 8px-12px
- **Text:** "ADD TO CART" - 14px, weight 700, uppercase, white
- **Icon:** Shopping cart icon, right side
- **Shadow:** `0 2px 8px rgba(229, 57, 53, 0.3)`
- **Pressed State:** Background `#C62828`, scale 0.98
- **Disabled State:** Background `#FFCDD2`, text `#E57373`

**Secondary Button (Add to Cart - outline):**
- **Height:** 44px
- **Background:** Transparent
- **Border:** 1px solid `#E0E0E0`
- **Text:** "Add to Cart" - 14px, weight 600, color `#212121`
- **Border Radius:** 8px

---

### 7. Quantity Selector

**Structure:**
- **Layout:** Inline with "-" button, number, "+" button
- **Button Size:** 36px x 36px
- **Button Style:** 
  - Background: `#F5F5F5`
  - Border radius: 4px
  - Icon: 16px, color `#616161`
- **Number Display:** 16px, weight 600, centered, min-width 40px

---

### 8. Product Attributes / Specifications

**Structure:**
- **Label:** 14px, weight 500, color `#616161`
- **Value:** 16px, weight 600, color `#212121`
- **Divider:** 1px solid `#E0E0E0` between items
- **Expandable:** Chevron icon for collapse/expand
- **Icon:** Checkmark in green circle for feature lists

**Feature List:**
- **Icon:** Green checkmark circle, 20px
- **Text:** 14px, weight 400, color `#212121`
- **Spacing:** 12px between items

---

### 9. Info Banner / KYC Prompt

**Structure:**
- **Background:** `#1976D2` (blue)
- **Border Radius:** 8px
- **Padding:** 12px 16px
- **Text:** White, 13px, weight 500
- **Icon:** Truck/delivery icon, white
- **Example:** "Place Order & complete KYC anytime to get your items the next day of KYC approval."

---

### 10. Plan Benefits Cards

**Structure:**
- **Layout:** 2x2 grid
- **Card Background:** `#FFFFFF`
- **Border:** 1px solid `#E0E0E0`
- **Border Radius:** 12px
- **Padding:** 16px
- **Icon:** 
  - Size: 40px
  - Background: Light tinted circle (e.g., `#FFEBEE` for red icon)
  - Icon color: `#E53935` or theme color
- **Title:** 14px, weight 600, color `#212121`
- **Examples:** "Free Relocation", "Free Repair & Maintenance", "Postpaid Rentals", "Upgrade with Ease"

---

### 11. Store Locator Section

**Structure:**
- **Header:** "Prefer to see in person?" - H3, 18px, weight 700
- **Subheader:** "Visit a RentoMojo Store" - 14px, weight 400
- **Background:** `#212121` (dark section)
- **Text Color:** White
- **Feature List:**
  - Bullet: Checkmark icon
  - Text: 14px, white
- **CTA Button:**
  - Background: `#FFFFFF`
  - Text: "Turn on device location" - 14px, weight 600, color `#212121`
  - Border radius: 24px (pill)
  - Icon: Location pin
- **Stats:** "Over 1mn+ orders fulfilled with 95% happy customers" - 12px, gray text

**Store Cards:**
- **Background:** `#FFFFFF`
- **Border Radius:** 12px
- **Status Badge:** 
  - Background: `#E8F5E9` (light green)
  - Text: "Open till 09:00 PM" - 11px, weight 500, color `#2E7D32`
- **Store Name:** 16px, weight 600
- **Address:** 13px, color `#616161`, 2 lines max
- **Actions:** 
  - "Directions" - Red text with arrow icon
  - "Call" - Red text with phone icon
  - "View Details >>" - Red text

---

### 12. Reviews Section

**Structure:**
- **Tab Navigation:** "Reviews" | "FAQ's"
  - Active: Underline 2px `#E53935`, text `#212121`
  - Inactive: Text `#9E9E9E`
- **Overall Rating:**
  - Large number: 48px, weight 700
  - Stars: 24px, filled `#FFC107`
  - Count: "344 reviews" - 14px, `#616161`
- **Filter Chips:**
  - "Popular" (active): Background `#212121`, text white, border radius 20px
  - "With Photos", "Recent" (inactive): Background `#F5F5F5`, text `#616161`
- **Review Card:**
  - Avatar: 40px circle, gray placeholder or user image
  - Name: 14px, weight 600
  - Stars: 14px, `#FFC107`
  - Date: 12px, `#9E9E9E`
  - Content: 14px, `#616161`, line height 1.5
  - Background: `#FFFFFF`
  - Border bottom: 1px solid `#F5F5F5`

---

### 13. Category Grid (Homepage)

**Structure:**
- **Section Title:** "Browse our top categories" - H3, 18px, weight 700, left-aligned
- **Grid:** 2 rows x 5 columns (horizontal scroll on mobile)
- **Card Size:** ~100px x 100px
- **Card Style:**
  - Background: `#FFFFFF`
  - Border radius: 12px
  - Image: Square, object-fit cover, border radius 12px 12px 0 0
  - Label: 12px, weight 500, centered, color `#212121`
  - Padding bottom: 8px
- **Categories:** Packages, Water Purifiers, Beds, Sofas, Mattresses, Wardrobe, Refrigerators, Televisions, Washing Machines, Air Conditioners

**"More Categories" Row:**
- Horizontal scroll
- Smaller cards: ~80px x 80px
- Same styling as above

---

### 14. Product Cards (Listing)

**Structure:**
- **Layout:** 2-column grid
- **Card Background:** `#FFFFFF`
- **Border Radius:** 12px
- **Shadow:** `0 2px 8px rgba(0,0,0,0.08)`
- **Image:**
  - Aspect ratio: 4:3 or 1:1
  - Border radius: 12px 12px 0 0
  - Object-fit: cover
- **Content Padding:** 12px
- **Wishlist Icon:**
  - Position: Top-right of image
  - Background: White circle, 32px
  - Icon: Heart outline, 18px, `#616161`
  - Shadow: `0 2px 4px rgba(0,0,0,0.1)`
- **Product Name:** 14px, weight 600, color `#212121`, 2 lines max, ellipsis
- **Price:** 
  - Current: 16px, weight 700, color `#212121`
  - Original: 13px, strikethrough, color `#9E9E9E`
  - Discount: 11px, weight 600, color `#C62828`, background `#FFEBEE`, border radius 4px
- **Tenure:** "/mo" suffix, 12px, color `#616161`
- **Add Button:** 
  - Size: 36px circle
  - Background: `#FFEBEE`
  - Icon: Plus, 18px, `#E53935`
  - Border: 1px solid `#FFCDD2`

---

### 15. Promo Banner ("Limitless")

**Structure:**
- **Background:** Red gradient or image with overlay
- **Border Radius:** 16px
- **Padding:** 20px
- **Logo Badge:** White "m" on red, with "Limitless By RentoMojo"
- **Headline:** "Full home furnishing." - 24px, weight 700, white
- **Subheadline:** "Plans starting at ₹2,499/mo" - 16px, weight 400, white
- **CTA:** "Rent now" - Pill button, white background, red text, 14px weight 600

---

### 16. Business Banner ("RentoMojo For Business")

**Structure:**
- **Background:** `#FFFFFF`
- **Border Radius:** 16px
- **Border:** 1px solid `#E0E0E0`
- **Padding:** 20px
- **Image:** Left side, rounded, ~40% width
- **Content:** Right side
- **Headline:** "RentoMojo For Business" - 20px, weight 700
  - "For Business" in red `#E53935`
- **Subheadline:** 14px, color `#616161`
- **CTA:** "Enquire Now" - Red background, white text, pill shape, 14px weight 600

---

### 17. Reviews & Ratings (Homepage Section)

**Structure:**
- **Background:** `#F5F5F5` or `#FFFFFF`
- **Padding:** 24px 16px
- **Overall Rating:**
  - "4.9" - 48px, weight 700
  - Stars: 24px, `#FFC107`
  - "Based on 10613 reviews" - 14px, `#616161`
- **Review Cards:**
  - Background: `#FFFFFF`
  - Border radius: 12px
  - Border: 1px solid `#E0E0E0`
  - Padding: 16px
  - Name: 14px, weight 600
  - "Service Review" badge: Background `#E3F2FD`, text `#1976D2`, 11px, border radius 4px
  - Stars: 16px, `#FFC107`
  - Content: 14px, `#616161`, italic style
- **CTA:** "View all 10613 reviews" - 14px, weight 500, with chevron down

---

### 18. Footer / Bottom Section

**Structure:**
- **Background:** `#FFFFFF`
- **Border Top:** 1px solid `#E0E0E0`
- **Accordion Sections:**
  - "RentoMojo", "Information", "Policies"
  - Title: 16px, weight 600
  - Chevron: Right-pointing, rotates down when expanded
  - Content: 14px, links in `#616161`
- **App Download:**
  - "Get the app" - 16px, weight 600, centered
  - Buttons: App Store, Google Play
  - Size: ~120px x 40px each
- **Social Icons:**
  - X (Twitter), YouTube, LinkedIn, Instagram, Facebook
  - Size: 24px
  - Color: `#616161`
  - Spacing: 16px between icons
- **Legal Text:**
  - 11px, color `#9E9E9E`
  - Centered

---

### 19. AQI Widget (Floating)

**Structure:**
- **Position:** Fixed, bottom-left
- **Background:** `#FFF3E0` (light orange)
- **Border Radius:** 12px
- **Padding:** 12px 16px
- **Shadow:** `0 4px 12px rgba(0,0,0,0.15)`
- **Label:** "Live AQI" - 12px, weight 500, color `#616161`
- **Value:** "127" - 32px, weight 700, color `#FF9800`
- **Status:** "(Poor)" - 12px, weight 500, color `#FF9800`
- **Refresh Icon:** Top-right, 16px, `#9E9E9E`

---

### 20. Chat Support Button (Floating)

**Structure:**
- **Position:** Fixed, bottom-right
- **Size:** 56px circle
- **Background:** `#212121` (dark)
- **Icon:** Chat bubble, 24px, white
- **Shadow:** `0 4px 12px rgba(0,0,0,0.2)`
- **Badge:** Red dot for unread, 12px, top-right

---

## Spacing & Whitespace

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| **xs** | 4px | Tight spacing, icon padding |
| **sm** | 8px | Inline elements, small gaps |
| **md** | 12px | Card padding, section inner spacing |
| **lg** | 16px | Standard section padding, card margins |
| **xl** | 20px | Large component padding |
| **2xl** | 24px | Section separators |
| **3xl** | 32px | Major section breaks |
| **4xl** | 48px | Hero spacing, large gaps |

### Whitespace Philosophy
- **Generous padding** around content areas (16px minimum on sides)
- **Clear separation** between sections using background color changes or spacing
- **Breathing room** around CTAs - never crowded
- **Consistent rhythm** - spacing follows 4px base grid
- **Card isolation** - cards have internal padding and external margins to create visual separation

---

## Shadows & Elevation

### Shadow Scale
| Level | Shadow | Usage |
|-------|--------|-------|
| **Level 0** | None | Flat cards, inputs |
| **Level 1** | `0 1px 3px rgba(0,0,0,0.08)` | Subtle card elevation |
| **Level 2** | `0 2px 8px rgba(0,0,0,0.1)` | Cards, buttons |
| **Level 3** | `0 4px 12px rgba(0,0,0,0.12)` | Floating elements, dropdowns |
| **Level 4** | `0 8px 24px rgba(0,0,0,0.15)` | Modals, popovers |

### Special Shadows
- **CTA Button:** `0 2px 8px rgba(229, 57, 53, 0.3)` - Red-tinted shadow
- **Floating Widgets:** `0 4px 16px rgba(0,0,0,0.2)` - Stronger for floating AQI/chat
- **Image Cards:** `0 2px 12px rgba(0,0,0,0.08)` - Soft shadow for product images

---

## Border Radius

### Radius Scale
| Token | Value | Usage |
|-------|-------|-------|
| **none** | 0px | Full-bleed images, dividers |
| **sm** | 4px | Small buttons, badges, tags |
| **md** | 8px | Input fields, small cards |
| **lg** | 12px | Standard cards, sections, images |
| **xl** | 16px | Large cards, modals, banners |
| **2xl** | 20px | Pill buttons, chips |
| **full** | 9999px | Circles, avatars, floating buttons |

### Usage Patterns
- **Images in cards:** 12px top radius, 0 bottom (when card has separate content area)
- **Standalone cards:** 12px all corners
- **Buttons:** 8px standard, 24px pill shape for secondary actions
- **Input fields:** 24px (pill shape) for search, 8px for standard inputs
- **Badges/Tags:** 4px
- **Floating action buttons:** Full circle (56px diameter)

---

## Icons & Imagery

### Icon Style
- **Type:** Outlined icons (Material Design style)
- **Stroke Width:** 1.5px-2px
- **Size Scale:** 16px (inline), 20px (buttons), 24px (navigation), 32px (features)
- **Color:** Inherits from text color or specific semantic color
- **Library:** Likely Material Icons, Feather Icons, or custom SVG set

### Common Icons
| Icon | Usage | Size | Color |
|------|-------|------|-------|
| **Search** | Search bar | 20px | `#9E9E9E` |
| **Heart/Heart-outline** | Wishlist | 20-24px | `#616161` / `#E53935` (active) |
| **Shopping Cart** | Cart, Add to cart | 20-24px | White or `#212121` |
| **Chevron Down/Up** | Expand/collapse | 16px | `#616161` |
| **Chevron Right** | Navigation, links | 16px | `#E53935` |
| **Map Pin** | Location | 16px | `#616161` |
| **Star** | Ratings | 12-24px | `#FFC107` (filled) |
| **Checkmark** | Features, success | 16px | `#4CAF50` |
| **Plus/Minus** | Quantity selector | 16px | `#616161` |
| **Phone** | Call store | 16px | `#E53935` |
| **Navigation Arrow** | Directions | 16px | `#E53935` |
| **Play** | Video thumbnail | 24px | White on red circle |
| **Settings/Gear** | Settings | 24px | `#616161` |
| **User** | Profile | 24px | `#616161` |

### Imagery Guidelines
- **Photography Style:** Bright, well-lit, lifestyle-oriented, aspirational
- **Color Treatment:** Natural, warm tones, slightly saturated
- **Settings:** Modern Indian homes, clean backgrounds, realistic settings
- **Product Images:** 
  - White or transparent background for category icons
  - Lifestyle context for product hero images
  - Multiple angles in gallery
- **Image Loading:** Lazy loading with gray placeholder (`#F5F5F5`)
- **Aspect Ratios:** 
  - Hero: 4:3 or 16:10
  - Cards: 1:1 or 4:3
  - Thumbnails: 4:3

---

## Animations & Interactions

### Touch Feedback
- **Buttons:** 
  - Active: Scale to 0.97, darken background by 10%
  - Duration: 100ms
  - Easing: `ease-out`
- **Cards:**
  - Tap: Slight elevation increase, subtle shadow expansion
  - Duration: 150ms

### Page Transitions
- **Type:** Slide from right (iOS-style) or fade
- **Duration:** 300ms
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

### Scroll Behaviors
- **Header:** Sticky with background blur on scroll (`backdrop-filter: blur(8px)`)
- **Horizontal Scroll:** Snap to card, smooth scroll
- **Pull to Refresh:** Standard spinner, brand color

### Loading States
- **Skeleton Screens:** 
  - Background: `#F5F5F5`
  - Shimmer: Linear gradient animation from left to right
  - Color: `#EEEEEE` to `#F5F5F5`
- **Spinners:** 
  - Color: `#E53935`
  - Size: 24px-32px
  - Stroke width: 3px

### Micro-interactions
- **Heart/Wishlist:** 
  - Tap: Scale up to 1.2, then bounce back
  - Fill animation: Outline to filled with color change
  - Duration: 300ms
- **Add to Cart:**
  - Button text change: "ADD TO CART" → "ADDED" with checkmark
  - Brief scale pulse
- **Badge/Count:**
  - Update: Scale bounce animation
  - Duration: 200ms

---

## Page-Specific Patterns

### Product Detail Page (PDP)

**Section Order:**
1. Header (sticky)
2. Search bar
3. Product image gallery (swipeable)
4. Social proof badge
5. Product title
6. Rating summary
7. Price section (with tenure selector)
8. Add to Cart button
9. Plan benefits grid
10. Store locator (dark section)
11. Reviews & Ratings tabs
12. Product details (collapsible)
13. You Might Also Like (recommendations)
14. Footer

**Key Interactions:**
- Image pinch-to-zoom
- Swipe gallery
- Expandable sections (chevron animation)
- Sticky "Add to Cart" at bottom (optional)

### Homepage

**Section Order:**
1. Header (sticky)
2. Search bar
3. Category grid (horizontal scroll + 2x5 grid)
4. Promo banner ("Limitless")
5. Latest & Trending (product cards)
6. Business banner
7. Reviews & Ratings section
8. Footer

**Key Interactions:**
- Horizontal scroll categories with snap
- Parallax on hero (subtle)
- Lazy load products on scroll

---

## Responsive Behavior

### Breakpoints
| Breakpoint | Width | Behavior |
|------------|-------|----------|
| **Mobile** | < 640px | Single column, full-width cards, hamburger menu |
| **Tablet** | 640px - 1024px | 2-3 column grids, side navigation |
| **Desktop** | > 1024px | Max-width container (1200px), multi-column, hover states |

### Mobile-Specific Patterns
- **Bottom Sheet:** For filters, sort, share options
  - Background: White
  - Border radius: 16px top corners
  - Handle bar: 40px x 4px, `#E0E0E0`, centered top
- **Swipe Gestures:** 
  - Product images: Horizontal swipe
  - Cards: Horizontal scroll
  - Lists: Vertical scroll with pull-to-refresh
- **Touch Targets:** Minimum 44px x 44px for all interactive elements

---

## Accessibility Considerations

### Color Contrast
- **Primary Text on White:** 16.1:1 (exceeds WCAG AAA)
- **Secondary Text on White:** 6.3:1 (meets WCAG AA)
- **Red CTA Text on White:** 5.8:1 (meets WCAG AA)
- **White Text on Red:** 5.1:1 (meets WCAG AA)

### Touch Targets
- All interactive elements: Minimum 44px x 44px
- Buttons: 48px-52px height
- Icon buttons: 44px x 44px container

### Focus States
- **Outline:** 2px solid `#1976D2`, offset 2px
- **Visible on:** Keyboard navigation, screen readers

### Screen Reader Support
- **Images:** Descriptive alt text for all product images
- **Icons:** aria-label for all icon-only buttons
- **Live Regions:** For cart updates, price changes
- **Headings:** Proper hierarchy (H1 > H2 > H3)

### Reduced Motion
- Respect `prefers-reduced-motion`
- Disable parallax, auto-scroll
- Instant transitions instead of animated

---

## Design Tokens Summary

```css
:root {
  /* Colors */
  --color-primary: #E53935;
  --color-primary-dark: #C62828;
  --color-primary-light: #FFEBEE;
  --color-success: #4CAF50;
  --color-info: #1976D2;
  --color-warning: #FF9800;
  --color-white: #FFFFFF;
  --color-off-white: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #EEEEEE;
  --color-gray-300: #E0E0E0;
  --color-gray-500: #9E9E9E;
  --color-gray-700: #616161;
  --color-gray-900: #212121;
  --color-black: #000000;
  --color-star: #FFC107;
  --color-discount: #C62828;

  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 28px;
  --font-size-4xl: 48px;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 20px;
  --space-2xl: 24px;
  --space-3xl: 32px;
  --space-4xl: 48px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-lg: 0 4px 12px rgba(0,0,0,0.12);
  --shadow-xl: 0 8px 24px rgba(0,0,0,0.15);
  --shadow-primary: 0 2px 8px rgba(229, 57, 53, 0.3);

  /* Transitions */
  --transition-fast: 100ms ease-out;
  --transition-base: 150ms ease-out;
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Notes for AI Implementation

1. **Mobile-First:** All designs are optimized for mobile viewport (375px-414px width)
2. **Performance:** Use lazy loading for images, skeleton screens for content
3. **Touch-Optimized:** All interactions must work with touch, no hover-dependent actions
4. **Brand Consistency:** RentoMojo Red (`#E53935`) must be used consistently for all primary actions
5. **Trust Signals:** Always include security badges, refund policies, and review counts near CTAs
6. **Localization:** Currency in INR (₹), Indian English conventions
7. **Image Priority:** Lifestyle photography is crucial - show products in real home settings
8. **Whitespace:** Don't crowd elements - the design relies on breathing room for premium feel
9. **Hierarchy:** Price and CTA should be the most prominent elements after the product image
10. **Accessibility:** Ensure all colors meet WCAG AA standards, proper heading hierarchy, alt text for images
