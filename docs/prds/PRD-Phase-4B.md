# 🎨 PRD — Phase 4B: Content Polish & Optimization

**Project:** Wright Angle Carpentry (one-page React site)
**Author:** James Law
**Phase:** Content refinement & final polish
**Date:** October 15, 2025
**Goal:** Complete remaining Phase 4 content tasks focusing on service descriptions, testimonials, copy polish, and performance optimization.

---

## 🎯 Objective

Complete the content enhancement and optimization tasks from Phase 4, building on Phase 4A's gallery and branding improvements. Focus on authentic content, SEO-optimized copy, and final performance tuning.

---

## 📊 Current State Assessment

**Phase 4A Achievements (Deployed):**
- ✅ T20 - Real Project Gallery (8 AI-generated professional images)
- ✅ T23 - Branded Open Graph image (1200×630px)
- ✅ T24 - Complete favicon set from WA logo
- ✅ T27 - Footer layout refinement
- ✅ T28 - Hero mobile MapPin alignment fix
- ✅ Deployed to production at wrightanglecarpentry.co.uk

**Remaining Tasks:**
- ⚠️ T21 - Authentic client testimonials (requires client outreach)
- ⚠️ T22 - Expanded service descriptions with SEO keywords
- ⚠️ T25 - Content polish and copywriting refinement
- ⚠️ T26 - Performance & SEO audit

---

## 🧩 Phase 4B Scope

### 1️⃣ Service Descriptions Enhancement (T22)

**Purpose:** Expand service descriptions with more detail to improve SEO and client understanding.

**Current State:**
- `src/data/services.ts` has brief 1-sentence descriptions
- Basic service list with icons
- Minimal detail about materials, process, or timeline

**Target State:**
- Expanded descriptions (2-3 sentences per service)
- Include typical materials, process overview, timeline
- Keywords for local SEO (Wareham, Dorset, Poole)
- Call-out specialty skills or certifications

**Implementation Tasks:**

**T22-1: Draft Expanded Service Descriptions**
- Expand each service from 1 sentence to 2-3 sentences
- Include:
  - What's included in the service
  - Typical materials used
  - Estimated timeline or project duration
  - Why choose Wright Angle Carpentry
- Naturally integrate local SEO keywords (Wareham, Poole, Dorset)

**T22-2: Review and Refine with James**
- Share drafted descriptions for review
- Incorporate James's expertise and preferences
- Ensure accuracy of materials, timelines, and process
- Verify tone matches brand voice

**T22-3: Update Services Data File**
- Update `src/data/services.ts` with expanded descriptions
- Ensure descriptions are mobile-friendly (concise but informative)
- Test rendering on mobile and desktop

**Acceptance Criteria:**
- ✅ All 7 services have 2-3 sentence descriptions
- ✅ Local SEO keywords naturally integrated
- ✅ Clear value propositions for each service
- ✅ Consistent tone and style across all services
- ✅ Mobile-friendly formatting

**Estimated Time:** 1-2 hours (including review iterations)

---

### 2️⃣ Authentic Client Testimonials (T21)

**Purpose:** Build trust with genuine reviews from real Wright Angle Carpentry clients.

**Current State:**
- 3 placeholder testimonials in `src/data/testimonials.ts`
- Generic names and locations
- Example quotes that don't reflect real projects

**Target State:**
- 4-6 authentic client testimonials
- Real names and locations (with permission)
- Specific project mentions
- Date ranges if available

**Implementation Tasks:**

**T21-1: Client Outreach (James's Task)**
- Request testimonials from past clients via:
  - Email to satisfied customers
  - Phone calls to recent projects
  - Social media DM requests (Facebook/Instagram)
- Preferred content format:
  - Quote (2-4 sentences)
  - Client first name + location (e.g., "Sarah, Poole")
  - Project type (optional: "Kitchen renovation")
  - Year/season (optional: "Summer 2024")
- Obtain written permission to use testimonials publicly

**T21-2: Testimonial Data Integration**
- Update `src/data/testimonials.ts` with real reviews
- Format consistently (quote + attribution)
- Add project context where available
- Maintain privacy (first name + town only)

**T21-3: Optional Enhancements**
- Star ratings if clients provide them
- Link testimonials to related gallery images
- "View Project" links to gallery items
- Consider Google Reviews widget integration

**Acceptance Criteria:**
- ✅ 4-6 real client testimonials integrated
- ✅ Permission obtained for all testimonials
- ✅ Consistent formatting with client names + locations
- ✅ Testimonials display properly on mobile and desktop
- ✅ No placeholder testimonials remain

**Estimated Time:** 1-2 hours (development work, excluding client outreach time)
**Blocked By:** Client outreach and testimonial collection (James's task)

---

### 3️⃣ Content Polish & Copywriting (T25)

**Purpose:** Refine all copy for clarity, tone, and professionalism.

**Current State:**
- Functional copy, minimal polish
- Some sections could benefit from storytelling
- CTAs could be more compelling

**Target State:**
- Professional, warm, approachable tone
- Clear calls-to-action
- Error-free grammar and spelling
- Consistent voice throughout

**Implementation Tasks:**

**T25-1: Copy Audit**
- Review all sections: Hero, About, Services, Gallery, Testimonials, Contact, Footer
- Check for:
  - Tone consistency
  - Grammar/spelling errors
  - Clear CTAs
  - Professional language
  - Mobile readability

**T25-2: Hero & About Section Refinement**
- Polish hero tagline for impact
- Expand About section with:
  - James's story/background
  - Company values and mission
  - What sets Wright Angle apart
  - Awards/certifications (if any)
  - Years of experience emphasis

**T25-3: CTA Optimization**
- Review all button copy ("Get a Quote", "Call Now", "WhatsApp")
- Ensure CTAs are action-oriented and clear
- Test different CTA text for clarity
- Verify mobile CTA visibility and tap targets

**T25-4: SEO Meta Descriptions**
- Review and refine page title
- Optimize meta description (155 characters)
- Ensure keywords naturally integrated
- Check Open Graph descriptions

**Acceptance Criteria:**
- ✅ All copy proofread and polished
- ✅ Consistent professional tone throughout
- ✅ Clear, compelling CTAs
- ✅ About section tells Wright Angle story
- ✅ No spelling or grammar errors
- ✅ Mobile-friendly copy (short paragraphs, scannable)

**Estimated Time:** 1-2 hours

---

### 4️⃣ Performance & SEO Audit (T26)

**Purpose:** Final optimization pass to ensure production-ready performance and SEO.

**Implementation Tasks:**

**T26-1: Image Optimization Verification**
- Verify all gallery images are optimized (<200KB each)
- Check for WebP support or optimization opportunities
- Confirm lazy loading is working for gallery
- Test Core Web Vitals (LCP, FID, CLS)
- Verify logo and OG image file sizes

**T26-2: Lighthouse Audit**
- Run Lighthouse on mobile and desktop
- Target scores:
  - Performance ≥90
  - SEO ≥95
  - Accessibility ≥95
  - Best Practices ≥90
- Address any regressions from Phase 4A
- Document scores for comparison

**T26-3: SEO Enhancement**
- Verify all images have descriptive alt text
- Check internal linking structure
- Ensure heading hierarchy is logical (h1 → h2 → h3)
- Verify LocalBusiness JSON-LD schema is accurate
- Test Open Graph preview on social platforms

**T26-4: Cross-Browser Testing**
- Test on Chrome, Firefox, Safari (desktop)
- Test on Safari iOS and Chrome Android (mobile)
- Verify responsive behavior at breakpoints:
  - 320px (small mobile)
  - 375px (iPhone)
  - 768px (tablet)
  - 1024px (desktop)
  - 1440px (large desktop)

**T26-5: Analytics Setup (Optional)**
- Install Vercel Analytics for basic metrics
- Or consider Plausible/Fathom for privacy-focused tracking
- Set up conversion tracking for contact form submissions
- Monitor Core Web Vitals in production

**Acceptance Criteria:**
- ✅ Lighthouse scores meet or exceed targets
- ✅ All images optimized and lazy-loaded
- ✅ SEO audit passed with 95+ score
- ✅ Cross-browser testing complete
- ✅ No accessibility violations
- ✅ Analytics configured (optional)

**Estimated Time:** 1-2 hours

---

## 📋 Task Summary

| Task | Description | Estimated Time | Dependencies | Priority |
|------|-------------|----------------|--------------|----------|
| **T22** | Service Descriptions Enhancement | 1-2 hours | James input | High |
| **T21** | Authentic Testimonials | 1-2 hours | Client outreach | Medium |
| **T25** | Content Polish & Copywriting | 1-2 hours | — | High |
| **T26** | Performance & SEO Audit | 1-2 hours | T22, T25 | High |

**Total Estimated Time:** 4-8 hours (excluding client outreach time)

---

## 🚦 Recommended Execution Order

### Immediate (Can Start Now):
1. **T22** — Service Descriptions Enhancement
   - Draft expanded descriptions
   - Review with James
   - Deploy to production

2. **T25** — Content Polish & Copywriting
   - Copy audit
   - Hero/About refinement
   - CTA optimization

3. **T26** — Performance & SEO Audit
   - Lighthouse audit
   - Image optimization check
   - Cross-browser testing

### Blocked (Requires Client Outreach):
4. **T21** — Authentic Testimonials
   - James collects testimonials from clients
   - Integration and deployment once received

---

## 🧾 Definition of Done

✅ All service descriptions expanded with SEO keywords
✅ 4-6 authentic client testimonials integrated
✅ All copy polished and professional
✅ Lighthouse scores ≥90 Performance, ≥95 SEO, ≥95 Accessibility
✅ No spelling/grammar errors
✅ Mobile-friendly and responsive
✅ Cross-browser tested
✅ Analytics configured (optional)
✅ Phase 4B deployed to production

---

## 📝 Content Collection Checklist

### For James to Gather:

**Client Testimonials (4-6 total):**
- [ ] Client quote (2-4 sentences)
- [ ] Client first name + location (with permission)
- [ ] Project type (optional)
- [ ] Year/season (optional)
- [ ] Written confirmation of permission to use publicly

**Service Details for T22:**
- [ ] Review and approve expanded service descriptions
- [ ] Verify typical timelines for each service type
- [ ] Confirm materials and processes described accurately

---

## 🚀 Future Enhancements (Beyond Phase 4B)

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

---

## 📞 Next Steps

**Immediate:**
1. Start with T22 (Service Descriptions) - can be done immediately
2. Complete T25 (Content Polish) - quick wins for UX
3. Run T26 (Performance Audit) - ensure quality maintained

**When Ready:**
4. James collects client testimonials (T21)
5. Integrate testimonials when received
6. Final deployment of complete Phase 4B

**Timeline:**
- T22, T25, T26: 1-2 days
- T21: Depends on client response time (1-2 weeks typical)
- Full Phase 4B completion: 2-3 weeks

---

**Status:** Ready to begin
**Dependencies:** None (T22, T25, T26 can start immediately)
**Priority:** High — Completes Phase 4 content goals
