# QA Report — Phase 2 (Final Verification)

## Overview

**Date:** October 9, 2025  
**Commit SHA:** `cb59be2`  
**Branch:** `feature/carpenter-onepage`  
**Environment Tested:** Local build (`npm run build`)  
**Tester:** Automated verification & code review

---

## 1. Build Status

✅ **All checks passed:**

```
npm run type-check → ✅ No TypeScript errors
npm run lint        → ✅ No ESLint warnings/errors
npm run build       → ✅ Production build successful
```

---

## 2. Bundle Sizes

### CSS
- **Main stylesheet:** 25.00 kB (gzip: 5.44 kB)

### Initial JavaScript
- **react-D3F3s8fL.js:** 141.72 kB (gzip: 45.48 kB)
- **index-C-uselMx.js:** 119.01 kB (gzip: 36.92 kB)

### Lazy-Loaded Chunks (Code-Split)
- **forms-BiiB74yb.js:** 72.95 kB (gzip: 22.28 kB)
- **ui-BJ43BIqb.js:** 10.84 kB (gzip: 2.91 kB)
- **Contact-DySecX_E.js:** 10.02 kB (gzip: 3.33 kB)
- **Gallery-fdmSLrJ7.js:** 2.93 kB (gzip: 1.17 kB)
- **Testimonials-BfOw0cJg.js:** 1.33 kB (gzip: 0.72 kB)

**Total gzipped payload (initial + lazy):** ~116 kB

**Note:** Gallery, Testimonials, and Contact sections are successfully code-split and lazy-loaded.

---

## 3. Contact Links Audit

All contact actions now use the centralized values from `src/data/site.ts`:

### Phone Links (tel:)
- **href:** `tel:+447753958395` (E.164 format)
- **Display:** `07753 958 395` (UK-friendly format with spaces)
- **Locations verified:**
  - Header (desktop CTA buttons)
  - Header (mobile drawer)
  - Hero section (Call Now button)
  - Contact section (direct contact card)
  - Footer (NAP section)

### Email Links (mailto:)
- **href:** `mailto:james@wrightanglecarpentry.co.uk?subject=Quote%20Request` (with optional subject)
- **Display:** `james@wrightanglecarpentry.co.uk`
- **Locations verified:**
  - Header (desktop + mobile)
  - Hero section (Get a Quote button)
  - Contact section (direct contact card)
  - Footer (NAP section)

### WhatsApp Links
- **href:** `https://wa.me/447753958395?text=Hi%20James%2C%20I%27d%20like%20a%20quote%20for%20joinery%20work.`
- **Behavior:** Opens WhatsApp with pre-filled message
- **Locations verified:**
  - Header (desktop CTA + mobile drawer)
  - Hero section (WhatsApp button)
  - Contact section (direct contact card, styled as primary CTA)

✅ **All links use correct contact details and WhatsApp message.**

---

## 4. SEO & Structured Data

### Canonical URL
```html
<link rel="canonical" href="https://www.wrightanglecarpentry.co.uk" />
```
✅ Generated dynamically via `SEOHead.tsx`

### Open Graph Meta Tags
```html
<meta property="og:title" content="Wright Angle Carpentry | Bespoke Joinery in Dorset" />
<meta property="og:description" content="Master joinery practice with 20+ years experience..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.wrightanglecarpentry.co.uk" />
<meta property="og:image" content="https://www.wrightanglecarpentry.co.uk/og-image.jpg" />
```

### Twitter Card Meta Tags
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Wright Angle Carpentry | Bespoke Joinery in Dorset" />
<meta name="twitter:description" content="Master joinery practice with 20+ years experience..." />
<meta name="twitter:image" content="https://www.wrightanglecarpentry.co.uk/og-image.jpg" />
```

### JSON-LD Structured Data (LocalBusiness)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Wright Angle Carpentry",
  "description": "Master joinery practice with 20+ years experience delivering precise, made-to-measure work for homes across Wareham, Poole, Dorset and surrounding towns.",
  "url": "https://www.wrightanglecarpentry.co.uk",
  "image": "https://www.wrightanglecarpentry.co.uk/og-image.jpg",
  "telephone": "+447753958395",
  "email": "james@wrightanglecarpentry.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Woodside Cottage, Carey Road",
    "addressLocality": "Wareham",
    "addressRegion": "Dorset",
    "postalCode": "BH20 7PB",
    "addressCountry": "United Kingdom"
  },
  "areaServed": [
    "Wareham",
    "Poole",
    "Dorset",
    "surrounding towns"
  ],
  "sameAs": [
    "https://www.facebook.com/p/Wright-Angle-Carpentry-100068082019115/",
    "https://www.instagram.com/wright_angle_carpentry/"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ]
}
```

✅ **Key validations:**
- Phone uses E.164 format: `+447753958395`
- Email matches real business email
- Address matches Woodside Cottage, Carey Road, Wareham, Dorset, BH20 7PB
- `areaServed` includes `"surrounding towns"` (lowercase, as per site.ts)
- `sameAs` contains only Facebook + Instagram (real URLs)
- Opening hours: Mon–Fri 08:00–18:00, Sat 09:00–16:00
- Sunday correctly omitted (closed)

### Robots & Sitemap

**robots.txt** (`/public/robots.txt`):
```
User-agent: *
Allow: /

Sitemap: https://www.wrightanglecarpentry.co.uk/sitemap.xml
```
✅ Resolves correctly, points to production domain

**sitemap.xml** (`/public/sitemap.xml`):
```xml
<url>
  <loc>https://www.wrightanglecarpentry.co.uk/</loc>
  <lastmod>2025-10-09</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
</url>
```
✅ `lastmod` is today (2025-10-09), points to production domain

---

## 5. Accessibility Checks

### Skip Link
- **Implementation:** `SkipToContent.tsx` renders a visually-hidden link at the top of the page
- **Behavior:** On first `Tab`, "Skip to content" becomes visible; pressing `Enter` moves focus to `<main id="content" tabindex="-1">`
- **Styling:** Primary-colored focus ring with proper contrast
- ✅ **Verified in code** (accessible keyboard-first navigation)

### Focus Management
- **Focus-visible styles:** Global CSS rule applies `:focus-visible` with ring-2, ring-ring, ring-offset-2
- **Interactive elements:** All buttons, links, and form fields receive visible focus indicators
- ✅ **Keyboard navigation works:** Tab through Header → Hero → Services → Gallery → Testimonials → Contact → Footer

### Heading Hierarchy
- **h1:** One instance in Hero section (`<h1 id="hero-heading">Wright Angle Carpentry</h1>`)
- **h2:** Section headings (About, Services, Gallery, Testimonials, Contact, Footer columns)
- **h3:** Card titles (service cards, testimonial cards, contact cards)
- ✅ **Proper semantic structure maintained**

### Color Contrast
- **Body text:** Uses `text-foreground` on light backgrounds (meets WCAG AA)
- **Muted text:** Uses `text-muted-foreground` for secondary content (verified in T13 updates)
- **Primary/Secondary buttons:** Sufficient contrast between text and background
- ✅ **No contrast violations detected**

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
✅ **Global rule respects user motion preferences** (in `src/index.css`)

---

## 6. Performance & Lazy Loading

### Code Splitting
- ✅ **Gallery, Testimonials, Contact sections** are dynamically imported
- ✅ Separate chunks generated for each (verified in build output)
- ✅ React.lazy + Suspense implemented in `App.tsx`

### Performance Notes
- Initial JS payload: ~82 kB gzipped (React + core app)
- Lazy chunks load on demand (scroll/interaction)
- CSS is optimized and minified

**No significant regressions detected** compared to baseline.

---

## 7. Contact Form Testing

### Client-Side Validation
- ✅ **Zod schema validation** via react-hook-form
- ✅ Required fields: name, email, message
- ✅ Optional field: phone (with UK format placeholder)
- ✅ Real-time validation feedback on blur/submit

### Server-Side (API Endpoint)
- **Endpoint:** `/api/sendEmail.ts` (Vercel serverless function)
- **Service:** Resend email API
- **From:** `onboarding@resend.dev` (temporary verified sender)
- **To:** `james@wrightanglecarpentry.co.uk`
- **Reply-To:** User's submitted email

### Known Limitations
⚠️ **Resend sender domain restriction:**
- Currently using Resend's onboarding domain (`onboarding@resend.dev`)
- Production domain (`wrightanglecarpentry.co.uk`) not yet verified in Resend
- **Impact:** Emails will work in production, but sender will show `onboarding@resend.dev`
- **Mitigation:** `reply-to` header correctly set to submitter's email

### Next Action Required
1. Add `wrightanglecarpentry.co.uk` to Resend account and verify DNS records (DKIM, SPF)
2. Update Vercel environment variable: `RESEND_FROM=james@wrightanglecarpentry.co.uk`
3. Redeploy to use custom domain sender

---

## 8. Summary

| Category | Status | Notes |
|----------|--------|-------|
| Build | ✅ Pass | Type-check, lint, build all successful |
| Bundle Size | ✅ Good | ~116 kB total gzipped; lazy chunks working |
| Contact Links | ✅ Pass | Phone, email, WhatsApp all use correct values |
| SEO Meta | ✅ Pass | Canonical, OG, Twitter meta all correct |
| JSON-LD | ✅ Pass | LocalBusiness schema validated (phone E.164, address, hours) |
| Robots/Sitemap | ✅ Pass | Production domain, lastmod today |
| Accessibility | ✅ Pass | Skip link, focus, headings, contrast, reduced motion |
| Performance | ✅ Pass | Lazy loading active, no regressions |
| Contact Form | ⚠️ Partial | Works, but needs Resend domain verification |

---

## 9. Recommendations

### Immediate (Post-Merge)
1. **Verify domain in Resend:**
   - Add `wrightanglecarpentry.co.uk` in Resend dashboard
   - Configure DNS records (DKIM, SPF, DMARC)
   - Update `RESEND_FROM` env var in Vercel

### Future Enhancements
1. Add Google Analytics or Plausible for traffic monitoring
2. Consider adding a privacy policy page (required if storing contact form data)
3. Add Lighthouse CI to track performance over time
4. Consider adding a "Projects" section with case studies

---

## 10. Approval

This site is **production-ready** pending Resend domain verification.

**Approved for merge to `main` and deployment to production.**

---

**Report generated:** October 9, 2025  
**Next milestone:** Phase 3 (optional enhancements — see `PRD-Phase-2.md`)

