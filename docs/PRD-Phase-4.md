# 🎨 PRD — Phase 4: Content Enhancement & Real Assets

**Project:** Wright Angle Carpentry (one-page React site)
**Author:** James Law
**Phase:** Content maturity & asset upgrade
**Date:** October 13, 2025
**Goal:** Replace placeholder content with real project images, authentic testimonials, and enhance content quality for production excellence.

---

## 🎯 Objective

Elevate the production site from "functional" to "professional showcase" by replacing all placeholder content with real photography, genuine client testimonials, and polished copy that authentically represents Wright Angle Carpentry's 20+ years of master joinery work.

---

## 📊 Current State Assessment

**Phase 1-3 Achievements:**
- ✅ Fully functional one-page site with all sections
- ✅ Real business data integrated (contact, address, hours)
- ✅ Working contact form via Resend API
- ✅ Company logo integrated with responsive behavior
- ✅ SEO optimized with LocalBusiness schema
- ✅ WCAG AA accessibility compliant
- ✅ Deployed to production at wrightanglecarpentry.co.uk

**Current Gaps:**
- ⚠️ Gallery uses placeholder images
- ⚠️ Testimonials are example data (not real client reviews)
- ⚠️ Open Graph image is placeholder
- ⚠️ Service descriptions could be expanded
- ⚠️ No favicon customization from logo

---

## 🧩 Phase 4 Scope

### 1️⃣ Real Project Gallery

**Purpose:** Showcase actual Wright Angle Carpentry projects with professional photography.

**Current State:**
- 6-8 placeholder images in `public/images/`
- Generic alt text
- `src/data/gallery.ts` has example data structure

**Target State:**
- Real project photos from James's portfolio
- Descriptive alt text with project details
- Organized by project type (staircases, kitchens, wardrobes, etc.)
- Image optimization for web (WebP format, multiple sizes for responsive)

**Implementation Tasks:**

**T20-1: Collect & Review Project Photos**
- Request 8-12 best project photos from James
- Preferred subjects:
  - Bespoke staircases (2-3 photos)
  - Fitted wardrobes/alcove units (2-3 photos)
  - Custom kitchens (2-3 photos)
  - Decking/outdoor work (1-2 photos)
  - Detail shots showing craftsmanship (1-2 photos)
- Image requirements:
  - Minimum 1200px on longest edge
  - Good lighting, clear subject
  - Landscape or square orientation preferred

**T20-2: Image Optimization Pipeline**
- Convert images to WebP format with fallback JPG
- Create responsive variants (400px, 800px, 1200px)
- Compress for web delivery (<150KB per image)
- Tools: Sharp CLI or online converters
- Batch script for future image additions

**T20-3: Update Gallery Data**
- Update `src/data/gallery.ts` with real project info
- Write descriptive alt text for each image
- Include project location if available (e.g., "Poole", "Wareham")
- Add captions with project type and materials

**T20-4: Gallery Enhancement (Optional)**
- Consider lightbox/modal for full-size viewing
- Add category filtering (Kitchens, Staircases, etc.)
- Image loading states/skeletons

**Acceptance Criteria:**
- ✅ 8-12 real project images integrated
- ✅ All images optimized (<150KB each)
- ✅ WebP format with JPG fallback
- ✅ Descriptive alt text for SEO and accessibility
- ✅ Gallery loads with lazy loading
- ✅ No placeholder images remain

---

### 2️⃣ Authentic Client Testimonials

**Purpose:** Build trust with genuine reviews from real Wright Angle Carpentry clients.

**Current State:**
- 3 placeholder testimonials in `src/data/testimonials.ts`
- Generic names and locations

**Target State:**
- 4-6 authentic client testimonials
- Real names and locations (with permission)
- Specific project mentions
- Date ranges if available

**Implementation Tasks:**

**T21-1: Collect Testimonials**
- Request testimonials from past clients
- Preferred content:
  - Quote (2-4 sentences)
  - Client first name + location
  - Project type (optional: "Kitchen renovation in Poole")
  - Year/season (optional: "Summer 2024")
- Verify permission to use testimonials publicly

**T21-2: Update Testimonial Data**
- Update `src/data/testimonials.ts` with real reviews
- Format consistently (quote + attribution)
- Add project context where available

**T21-3: Testimonial Display Enhancement (Optional)**
- Star ratings if available
- Project photos linked to testimonials
- "View Project" links to gallery
- Google Reviews integration badge

**Acceptance Criteria:**
- ✅ 4-6 real client testimonials integrated
- ✅ Permission obtained for all testimonials
- ✅ Consistent formatting with client names + locations
- ✅ Testimonials display properly on mobile and desktop
- ✅ No placeholder testimonials remain

---

### 3️⃣ Service Descriptions Enhancement

**Purpose:** Expand service descriptions with more detail to improve SEO and client understanding.

**Current State:**
- `src/data/services.ts` has brief 1-sentence descriptions
- Basic service list

**Target State:**
- Expanded descriptions (2-3 sentences per service)
- Include typical materials, process, timeline
- Keywords for local SEO (Wareham, Dorset, Poole)
- Call-out any specialty skills or certifications

**Implementation Tasks:**

**T22-1: Expand Service Copy**
- Work with James to expand each service description
- Focus on:
  - What's included
  - Materials used
  - Typical timeline
  - Why choose Wright Angle Carpentry for this service

**T22-2: Add Service Details (Optional)**
- Starting price ranges (if desired)
- Process overview (consultation → design → build)
- Typical project duration
- Service area specifics

**Acceptance Criteria:**
- ✅ All services have 2-3 sentence descriptions
- ✅ Local SEO keywords naturally integrated
- ✅ Clear value propositions for each service
- ✅ Consistent tone and style across all services

---

### 4️⃣ Open Graph & Social Media Image

**Purpose:** Create branded OG image for professional social media sharing.

**Current State:**
- `public/og-image.jpg` is placeholder

**Target State:**
- Custom OG image (1200×630px)
- Features logo + business name + tagline
- Branded color scheme
- Professional appearance for Facebook/Twitter/LinkedIn shares

**Implementation Tasks:**

**T23-1: Design OG Image**
- Create 1200×630px image with:
  - Wright Angle Carpentry logo (now available!)
  - Business tagline: "Bespoke Joinery and Fitted Furniture across Dorset"
  - Service area: "Wareham • Poole • Dorset"
  - Background: Brand color (#0f172a) or wood texture
  - Phone number: 07753 958 395
- Tools: Figma, Canva, or Photoshop
- Export as JPG (<150KB, quality 85%)

**T23-2: Replace OG Image**
- Replace `public/og-image.jpg`
- Test OG preview with:
  - Facebook Sharing Debugger
  - Twitter Card Validator
  - LinkedIn Post Inspector

**Acceptance Criteria:**
- ✅ Custom OG image with logo and branding
- ✅ File size <150KB
- ✅ Tested on major social platforms
- ✅ Professional appearance

---

### 5️⃣ Favicon Generation from Logo

**Purpose:** Create custom favicon set from company logo for brand consistency.

**Current State:**
- Generic "WA" initials favicon
- `public/favicon.svg`, `apple-touch-icon.png`, etc.

**Target State:**
- Favicons generated from `WA Logo.png`
- All sizes: 16×16, 32×32, 180×180, 192×192, 512×512
- SVG favicon for modern browsers

**Implementation Tasks:**

**T24-1: Extract Logo Mark**
- Crop/extract the "WA" mark from `WA Logo.png`
- Create square version with padding
- Export as high-res PNG (512×512px minimum)

**T24-2: Generate Favicon Set**
- Use [Real Favicon Generator](https://realfavicongenerator.net)
- Upload logo mark
- Generate all required sizes
- Download and replace `public/` favicon files

**T24-3: Test Favicon Display**
- Test in multiple browsers (Chrome, Firefox, Safari)
- Verify iOS home screen icon
- Check PWA manifest icons

**Acceptance Criteria:**
- ✅ Custom favicons generated from company logo
- ✅ All sizes provided (16×16 through 512×512)
- ✅ Display correctly across browsers and devices
- ✅ iOS and PWA icons working

---

### 6️⃣ Content Polish & Copywriting

**Purpose:** Refine all copy for clarity, tone, and professionalism.

**Current State:**
- Functional copy, minimal polish

**Target State:**
- Professional, warm, approachable tone
- Clear calls-to-action
- Error-free grammar and spelling
- Consistent voice throughout

**Implementation Tasks:**

**T25-1: Copy Audit**
- Review all sections: Hero, About, Services, Contact, Footer
- Check for:
  - Tone consistency
  - Grammar/spelling
  - Clear CTAs
  - Professional language

**T25-2: Hero & About Refinement**
- Polish hero tagline
- Expand About section with:
  - James's story/background
  - Company values
  - What sets Wright Angle apart
  - Awards/certifications (if any)

**T25-3: CTA Optimization**
- Review all button copy
- Ensure CTAs are action-oriented
- Test different CTA text for clarity
- Mobile CTA visibility

**Acceptance Criteria:**
- ✅ All copy proofread and polished
- ✅ Consistent professional tone
- ✅ Clear, compelling CTAs
- ✅ About section tells Wright Angle story

---

### 7️⃣ Performance & SEO Audit

**Purpose:** Final optimization pass before Phase 4 completion.

**Implementation Tasks:**

**T26-1: Image Optimization Verification**
- Verify all new images are optimized
- Check for WebP support
- Confirm lazy loading working
- Test Core Web Vitals

**T26-2: SEO Enhancement**
- Update meta descriptions with specific keywords
- Verify all alt text is descriptive
- Check internal linking
- Submit updated sitemap to Google Search Console

**T26-3: Lighthouse Audit**
- Run Lighthouse on mobile and desktop
- Target scores: Performance ≥90, SEO ≥95, Accessibility ≥95
- Address any regressions
- Document scores for comparison

**T26-4: Analytics Setup (Optional)**
- Install Vercel Analytics
- Or Plausible/Fathom for privacy-focused tracking
- Set up conversion tracking for contact form

**Acceptance Criteria:**
- ✅ Lighthouse scores maintained or improved
- ✅ All images optimized
- ✅ SEO audit passed
- ✅ Analytics configured (optional)

---

### 8️⃣ Footer Layout Refinement

**Purpose:** Optimize footer layout to reduce redundancy and improve visual alignment.

**Current State:**
- Logo appears above company name in NAP section
- Company name appears twice (as h2 heading and repeated below)
- Logo baseline sits slightly higher than company name text baseline

**Target State:**
- Logo and company name appear on same line (horizontally aligned)
- Company name only appears once
- Logo vertically centered with text baseline

**Implementation Tasks:**

**T27-1: Remove Duplicate Company Name**
- Keep h2 heading "Wright Angle Carpentry"
- Remove duplicate company name display
- Ensure semantic heading structure remains intact

**T27-2: Horizontal Layout with Vertical Alignment**
- Position logo next to (left of) company name
- Align logo baseline with text baseline
- Adjust spacing between logo and text
- Ensure responsive behavior on mobile

**Acceptance Criteria:**
- ✅ Logo and company name on same line
- ✅ No duplicate company name
- ✅ Logo vertically aligned with text baseline
- ✅ Proper spacing maintained
- ✅ Responsive on all screen sizes

**Status:** ✅ Complete

---

### 9️⃣ Hero Section Mobile Layout Bug Fix

**Purpose:** Fix MapPin icon misalignment on mobile viewport in Hero section.

**Bug Description:**
- The MapPin icon next to "Proudly serving Wareham, Poole, Dorset, surrounding towns" is skewed/shifted to the left on mobile screens
- Located in `src/sections/Hero.tsx` at line 30-33
- Icon and text are in a flex container with `justify-center` but text wrapping on mobile causes misalignment

**Root Cause:**
The flex container with `items-center justify-center gap-2` doesn't handle text wrapping properly on narrow mobile screens. When the service area text wraps to multiple lines, the icon remains vertically centered to the entire flex container rather than aligning with the first line of text.

**Implementation Tasks:**

**T28-1: Fix Mobile Text Wrapping**
- Adjust flex container to handle multi-line text properly
- Consider centering the entire flex container as a block
- Ensure icon stays aligned with first line of text or centered with full text block
- Test on various mobile viewport widths (320px, 375px, 414px)

**T28-2: Alternative Layout for Mobile**
- Consider responsive layout changes for mobile:
  - Stack icon above text on very small screens
  - Remove icon on mobile (keep desktop only)
  - Use responsive padding/margin adjustments

**Acceptance Criteria:**
- ✅ MapPin icon properly aligned on mobile viewports
- ✅ No horizontal overflow or skewing
- ✅ Text wraps gracefully without breaking layout
- ✅ Desktop layout unaffected
- ✅ Tested on mobile browsers (Safari iOS, Chrome Android)

---

## 📋 Task Summary

| Task | Description | Estimated Time | Dependencies | Status |
|------|-------------|----------------|--------------|--------|
| **T20** | Real Project Gallery | 2-3 hours | Image collection | ✅ Complete |
| **T21** | Authentic Testimonials | 1-2 hours | Client outreach | Pending |
| **T22** | Service Descriptions | 1 hour | James input | Pending |
| **T23** | OG Image Creation | 1 hour | Logo asset | ✅ Complete |
| **T24** | Favicon Generation | 30 mins | Logo asset | ✅ Complete |
| **T25** | Content Polish | 1-2 hours | — | Pending |
| **T26** | Performance & SEO | 1 hour | T20-T25 | Pending |
| **T27** | Footer Layout Refinement | 15 mins | T24 | ✅ Complete |
| **T28** | Hero Mobile Bug Fix | 15 mins | — | In Progress |

**Total Estimated Time:** 7-10 hours (excluding content collection time)

---

## 🚦 Recommended Execution Order

### Phase 4A: Content Collection (James's homework)
1. Collect 8-12 project photos
2. Request 4-6 client testimonials (with permission)
3. Review and approve expanded service descriptions

### Phase 4B: Implementation (Development work)
1. **T23** — OG Image Creation (no dependencies, quick win)
2. **T24** — Favicon Generation (no dependencies, quick win)
3. **T20** — Real Project Gallery (once photos received)
4. **T21** — Authentic Testimonials (once testimonials received)
5. **T22** — Service Descriptions Enhancement
6. **T25** — Content Polish & Copywriting
7. **T26** — Performance & SEO Audit (final pass)

---

## ⚙️ Technical Considerations

### Image Optimization Tools

**Recommended: Sharp CLI**
```bash
# Install Sharp CLI globally
npm install -g sharp-cli

# Batch convert to WebP
npx sharp -i "public/images/*.jpg" -o "public/images/{name}.webp" --webp

# Batch resize
npx sharp -i "public/images/*.jpg" -o "public/images/{name}-800.jpg" resize 800
```

**Alternative: Online Tools**
- [Squoosh.app](https://squoosh.app) — Google's image optimizer
- [TinyPNG](https://tinypng.com) — Batch compression
- [ImageOptim](https://imageoptim.com) — Mac desktop app

### Gallery Component Enhancement

If implementing lightbox/modal in T20-4, consider:
- [react-image-lightbox](https://github.com/frontend-collective/react-image-lightbox)
- [yet-another-react-lightbox](https://yet-another-react-lightbox.com/)
- Custom modal with Shadcn Dialog component

### Analytics Integration

If implementing in T26-4:
- **Vercel Analytics:** `npm install @vercel/analytics` (easiest, free tier)
- **Plausible:** Privacy-focused, lightweight script tag
- **Fathom:** Similar to Plausible, paid

---

## 🧾 Definition of Done

✅ Real project gallery with 8-12 optimized images
✅ 4-6 authentic client testimonials integrated
✅ Expanded service descriptions with SEO keywords
✅ Custom OG image for social sharing
✅ Branded favicon set generated from logo
✅ All copy polished and professional
✅ Lighthouse scores maintained or improved
✅ No placeholder content remains
✅ Site ready for professional marketing/launch

---

## 📝 Content Collection Checklist

### For James to Gather:

**Project Photos (8-12 total):**
- [ ] 2-3 staircase projects
- [ ] 2-3 fitted wardrobes/alcove units
- [ ] 2-3 custom kitchens
- [ ] 1-2 decking/outdoor projects
- [ ] 1-2 detail shots (joinery close-ups)

**Photo Requirements:**
- Minimum 1200px on longest edge
- Good lighting, clear subject focus
- Landscape or square orientation preferred
- Original files (not compressed social media versions)

**Client Testimonials (4-6 total):**
- [ ] Client quote (2-4 sentences)
- [ ] Client first name + location (with permission)
- [ ] Project type (optional)
- [ ] Year/season (optional)
- [ ] Written confirmation of permission to use publicly

**Service Details:**
- [ ] Review and approve expanded service descriptions
- [ ] Confirm any specialty skills or certifications to highlight
- [ ] Verify typical timelines for each service type

---

## 🚀 Future Enhancements (Beyond Phase 4)

Consider for Phase 5 or later:

### Blog/Portfolio Section
- Multi-page routing with React Router
- Case study format for featured projects
- SEO benefits from content marketing

### CMS Integration
- Sanity.io or Contentful for content management
- Non-technical updates for gallery and testimonials
- Blog post management

### Online Booking
- Calendly integration for consultations
- Quote request wizard with project details
- Availability calendar

### Video Content
- Project timelapse videos
- Testimonial video snippets
- "Meet James" introduction video

### Performance Enhancements
- Image CDN (Cloudinary or Vercel Image Optimization)
- PWA enhancements (offline support)
- Advanced caching strategies

---

## 📞 Stakeholder Communication

**James needs to provide:**
1. Project photos (priority: staircases, kitchens, wardrobes)
2. Client testimonials with permission
3. Review expanded service descriptions

**Timeline:**
- Content collection: 1-2 weeks (James's availability)
- Implementation: 1-2 days once content received
- Testing & deployment: Half day

**Deployment:**
- No downtime deployment via Vercel
- Preview branch for James to review before going live
- Can implement incrementally (gallery first, then testimonials, etc.)

---

**Status:** ✅ Ready for approval
**Blocked by:** Content collection (James's homework)
**Dependencies:** Phase 3 complete (✅)
**Priority:** High — Completes site for professional launch
