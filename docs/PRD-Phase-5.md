# 🧪 PRD — Phase 5: Test Coverage Expansion & Quality Assurance

**Project:** Wright Angle Carpentry (one-page React site)
**Author:** AI Assistant (for James Law review)
**Phase:** Testing maturity & quality assurance
**Date:** October 31, 2025
**Goal:** Expand test coverage to 80%+, implement comprehensive testing across all components and utilities, and establish production monitoring.

---

## 🎯 Objective

Build on Phase 4B's testing foundation by expanding test coverage across the entire codebase, implementing component tests, adding E2E test scenarios, and establishing production monitoring and analytics. Ensure the site maintains high quality through automated testing and real-time monitoring.

---

## 📊 Current State Assessment

**Phase 4B Achievements:**
- ✅ Vitest + Playwright testing infrastructure
- ✅ GitHub Actions CI/CD pipeline
- ✅ TDD workflow established
- ✅ Makefile build automation
- ✅ 100% coverage for contactSchema.ts (15 tests)
- ✅ Basic E2E test for contact form
- ✅ MCP server integration for development

**Current Gaps:**
- ⚠️ Limited test coverage (only 1 file tested)
- ⚠️ No component tests for React components
- ⚠️ No utility function tests (seo.ts, structuredData.ts)
- ⚠️ Limited E2E coverage (only contact form)
- ⚠️ No analytics or error monitoring in production
- ⚠️ No performance monitoring
- ⚠️ Real testimonials still pending (blocked by client outreach)

---

## 🧩 Phase 5 Scope

### 1️⃣ Component Test Suite (Priority: HIGH)

**Purpose:** Ensure all React components render correctly and handle user interactions properly.

**Target Components:**
- Common: `Container`, `Section`, `SectionHeading`, `Logo`
- Layout: `Header`, `Footer`, `RootLayout`, `SkipToContent`
- Sections: `Hero`, `About`, `Services`, `Gallery`, `Testimonials`, `Contact`
- UI: Selected Shadcn components used in the app

**Implementation Tasks:**

**T30-1: Set Up Component Testing Infrastructure**
- Install additional testing utilities if needed
- Create test helpers and mock data
- Set up component testing patterns
- Document testing conventions

**T30-2: Test Common Components (TDD)**
```typescript
// src/components/common/__tests__/Container.test.tsx
// src/components/common/__tests__/Section.test.tsx
// src/components/common/__tests__/SectionHeading.test.tsx
// src/components/common/__tests__/Logo.test.tsx
```

**Test Coverage:**
- Renders without crashing
- Props are applied correctly
- Responsive behavior (width prop for Container)
- Size variants (Logo component)
- Accessibility attributes (ARIA labels, semantic HTML)

**T30-3: Test Layout Components (TDD)**
```typescript
// src/components/layout/__tests__/Header.test.tsx
// src/components/layout/__tests__/Footer.test.tsx
// src/components/layout/__tests__/SkipToContent.test.tsx
```

**Test Coverage:**
- Navigation rendering and links
- Mobile menu behavior (if applicable)
- Contact information display
- Skip link functionality and focus management
- Logo integration

**T30-4: Test Section Components (TDD)**
```typescript
// src/sections/__tests__/Hero.test.tsx
// src/sections/__tests__/About.test.tsx
// src/sections/__tests__/Services.test.tsx
// src/sections/__tests__/Gallery.test.tsx
// src/sections/__tests__/Testimonials.test.tsx
// src/sections/__tests__/Contact.test.tsx
```

**Test Coverage:**
- Content rendering from data files
- User interaction (buttons, links)
- Form validation (Contact section)
- Gallery image loading and lazy loading
- Service card rendering
- Testimonial carousel (if applicable)
- Call-to-action button behavior

**Acceptance Criteria:**
- ✅ All components have corresponding test files
- ✅ Tests follow TDD methodology (written before changes)
- ✅ Component coverage ≥ 80%
- ✅ All tests pass in CI pipeline
- ✅ Tests use Testing Library best practices
- ✅ Mock data is reusable across tests

**Estimated Time:** 6-8 hours

---

### 2️⃣ Utility Function Tests (Priority: HIGH)

**Purpose:** Ensure utility functions work correctly and handle edge cases.

**Target Files:**
- `src/lib/seo.ts` - SEO meta tag generation
- `src/lib/structuredData.ts` - JSON-LD schema generation
- `src/lib/utils.ts` - General utilities (if exists)
- `src/data/` files - Data exports and transformations

**Implementation Tasks:**

**T31-1: Test SEO Utilities (TDD)**
```typescript
// src/lib/__tests__/seo.test.ts
```

**Test Coverage:**
- Meta tag generation with correct attributes
- Open Graph tags creation
- Twitter Card tags
- Canonical URL handling
- Default values when optional data missing
- Special character escaping

**T31-2: Test Structured Data (TDD)**
```typescript
// src/lib/__tests__/structuredData.test.ts
```

**Test Coverage:**
- Valid LocalBusiness JSON-LD schema
- All required fields present
- Address formatting
- Contact information accuracy
- Opening hours format
- Social media links
- Schema.org compliance

**T31-3: Test Data Files (TDD)**
```typescript
// src/data/__tests__/site.test.ts
// src/data/__tests__/services.test.ts
// src/data/__tests__/gallery.test.ts
// src/data/__tests__/testimonials.test.ts
```

**Test Coverage:**
- Data structure validation
- Required fields present
- Valid URLs and email addresses
- Phone number format
- Image paths exist
- No duplicate IDs

**Acceptance Criteria:**
- ✅ All utility functions tested
- ✅ Edge cases covered (empty data, null values, special characters)
- ✅ Utility coverage ≥ 90%
- ✅ All tests pass in CI
- ✅ Data integrity validated

**Estimated Time:** 3-4 hours

---

### 3️⃣ Expanded E2E Test Suite (Priority: MEDIUM)

**Purpose:** Ensure critical user journeys work end-to-end across browsers and devices.

**Target Scenarios:**
- Navigation and scrolling
- Gallery interaction
- Service browsing
- Contact form (already tested, expand)
- Mobile responsiveness
- Accessibility features

**Implementation Tasks:**

**T32-1: Navigation & Scrolling Tests (TDD)**
```typescript
// e2e/navigation.spec.ts
```

**Test Scenarios:**
- Clicking navigation links scrolls to correct section
- Smooth scroll behavior works
- Skip to content link functions
- Header remains accessible while scrolling
- Mobile menu opens and closes (if applicable)

**T32-2: Gallery Interaction Tests (TDD)**
```typescript
// e2e/gallery.spec.ts
```

**Test Scenarios:**
- Gallery images load correctly
- Lazy loading works (images load on scroll)
- Image alt text is present
- Gallery is keyboard accessible (tab navigation)
- Images display at correct sizes

**T32-3: Services Section Tests (TDD)**
```typescript
// e2e/services.spec.ts
```

**Test Scenarios:**
- All 7 services render correctly
- Service icons display properly
- Service descriptions are visible
- Service cards are clickable/interactive
- Responsive layout works on mobile

**T32-4: Enhanced Contact Form Tests (TDD)**
```typescript
// e2e/contact-form.spec.ts (expand existing)
```

**Additional Scenarios:**
- Phone field validation (optional field)
- Multi-field validation errors
- Form submission loading states
- Success message display
- Error handling for API failures
- WhatsApp link functionality

**T32-5: Accessibility E2E Tests (TDD)**
```typescript
// e2e/accessibility.spec.ts
```

**Test Scenarios:**
- Keyboard navigation through entire page
- Focus indicators visible
- Screen reader landmarks present
- Heading hierarchy correct
- Skip link works
- Form labels associated correctly
- ARIA attributes present where needed

**T32-6: Mobile Responsiveness Tests (TDD)**
```typescript
// e2e/mobile.spec.ts
```

**Test Scenarios:**
- Layout adapts to mobile viewport
- Touch targets are appropriately sized
- Images scale correctly
- Text is readable without zooming
- Forms work on mobile keyboards
- No horizontal scrolling

**Acceptance Criteria:**
- ✅ All critical user journeys tested
- ✅ Tests pass on Chromium and Mobile Chrome
- ✅ Accessibility tests pass
- ✅ Mobile tests cover key breakpoints (375px, 768px, 1024px)
- ✅ Tests run in CI pipeline
- ✅ Test execution time < 5 minutes

**Estimated Time:** 5-6 hours

---

### 4️⃣ Analytics & Monitoring Setup (Priority: MEDIUM)

**Purpose:** Gain visibility into production performance, user behavior, and errors.

**Tools to Implement:**
- Vercel Analytics or Plausible.io (privacy-focused)
- Vercel Speed Insights (Core Web Vitals)
- Error tracking (Sentry or similar)
- Contact form conversion tracking

**Implementation Tasks:**

**T33-1: Analytics Installation**
- Install Vercel Analytics or Plausible.io
- Configure privacy-compliant tracking
- Set up custom events for key actions:
  - Contact form submissions
  - WhatsApp clicks
  - Phone number clicks
  - Navigation events
- Test analytics in development
- Deploy to production

**T33-2: Performance Monitoring**
- Enable Vercel Speed Insights
- Monitor Core Web Vitals:
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)
- Set up alerts for performance degradation
- Track page load times
- Monitor bundle sizes

**T33-3: Error Tracking**
- Set up Sentry or similar error tracking
- Configure error boundaries in React
- Track JavaScript errors
- Monitor API failures (contact form)
- Set up error alerts
- Implement user feedback mechanism

**T33-4: Conversion Tracking**
- Track contact form submissions
- Monitor conversion funnel:
  - Page views
  - Section scrolling
  - Contact form starts
  - Contact form completions
- Set up goals in analytics
- Create conversion dashboard

**Acceptance Criteria:**
- ✅ Analytics tracking live in production
- ✅ Core Web Vitals monitored
- ✅ Error tracking active
- ✅ Conversion tracking working
- ✅ Dashboard accessible to James
- ✅ Alerts configured for critical errors
- ✅ Privacy-compliant (no PII tracking)
- ✅ GDPR/CCPA compliant

**Estimated Time:** 2-3 hours

---

### 5️⃣ Authentic Client Testimonials (Priority: LOW - Blocked)

**Purpose:** Replace placeholder testimonials with real client reviews.

**Status:** ⚠️ Blocked by client outreach (James's task)

**When Ready:**
- Update `src/data/testimonials.ts` with real testimonials
- Add tests for testimonial rendering
- Deploy to production

**Deferred to:** When testimonials are collected (estimated 1-2 weeks)

---

## 📋 Task Summary

| Task | Description | Priority | Estimated Time | Dependencies |
|------|-------------|----------|----------------|--------------|
| **T30** | Component Test Suite | HIGH | 6-8 hours | Test infrastructure |
| **T31** | Utility Function Tests | HIGH | 3-4 hours | Test infrastructure |
| **T32** | Expanded E2E Test Suite | MEDIUM | 5-6 hours | Playwright config |
| **T33** | Analytics & Monitoring | MEDIUM | 2-3 hours | Vercel account |
| **T34** | Real Testimonials | LOW | 1 hour | Client outreach (blocked) |

**Total Estimated Time:** 17-22 hours (excluding blocked testimonials)

---

## 🚦 Recommended Execution Order

### Week 1: Testing Foundation
1. **T30** - Component Test Suite
   - Start with common components (quick wins)
   - Move to layout components
   - Complete section components
   - Follow TDD: write tests before fixing bugs

2. **T31** - Utility Function Tests
   - Test SEO utilities
   - Test structured data
   - Validate data files

### Week 2: E2E & Monitoring
3. **T32** - Expanded E2E Test Suite
   - Navigation and scrolling
   - Gallery interactions
   - Enhanced contact form tests
   - Accessibility tests

4. **T33** - Analytics & Monitoring Setup
   - Install analytics
   - Enable performance monitoring
   - Configure error tracking
   - Set up conversion tracking

### Future: When Ready
5. **T34** - Real Testimonials (when client testimonials received)

---

## 🎯 Success Metrics

### Test Coverage Goals
- **Overall Coverage:** ≥ 80%
- **Component Coverage:** ≥ 80%
- **Utility Coverage:** ≥ 90%
- **Critical Path Coverage:** 100% (Hero, Services, Contact)

### Quality Metrics
- **CI Pipeline:** 100% success rate
- **Test Execution Time:** < 5 minutes
- **Zero Flaky Tests:** All tests deterministic
- **Code Quality:** ESLint 0 errors, 0 warnings

### Production Metrics (Post-Analytics Setup)
- **Performance Score:** Maintain 90+
- **Error Rate:** < 0.1%
- **Contact Form Conversion:** Track baseline
- **Core Web Vitals:** All metrics in "Good" range

---

## 🧾 Definition of Done

### Test Coverage
- ✅ Component tests for all sections and layout components
- ✅ Utility function tests with edge cases
- ✅ Expanded E2E test suite (navigation, gallery, services, contact, accessibility)
- ✅ Overall test coverage ≥ 80%
- ✅ All tests passing in CI
- ✅ No flaky tests

### Analytics & Monitoring
- ✅ Analytics installed and tracking
- ✅ Core Web Vitals monitored
- ✅ Error tracking active with alerts
- ✅ Conversion tracking configured
- ✅ Dashboard accessible

### Quality Assurance
- ✅ All CI checks passing
- ✅ TypeScript: 0 errors
- ✅ ESLint: 0 errors, 0 warnings
- ✅ Lighthouse: Performance ≥90, SEO ≥95, Accessibility ≥95
- ✅ No console errors in production

### Documentation
- ✅ Test coverage documented
- ✅ Testing patterns documented
- ✅ Analytics dashboard guide created
- ✅ Monitoring runbook created
- ✅ Phase 5 completion report

---

## 🧪 Testing Best Practices

### Component Testing Guidelines
```typescript
// Follow Testing Library best practices
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// ✅ Good: Test user-visible behavior
test('contact form shows validation error', async () => {
  render(<Contact />);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  await userEvent.click(submitButton);
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
});

// ❌ Avoid: Testing implementation details
test('state updates correctly', () => {
  // Don't test internal state directly
});
```

### E2E Testing Guidelines
```typescript
// Use descriptive test names
test('user can submit contact form with valid data', async ({ page }) => {
  // Arrange: Navigate and set up
  await page.goto('/');

  // Act: Perform user actions
  await page.fill('[name="name"]', 'John Smith');
  await page.fill('[name="email"]', 'john@example.com');
  await page.click('button[type="submit"]');

  // Assert: Check results
  await expect(page.getByText(/message sent/i)).toBeVisible();
});
```

### TDD Workflow
1. Write test (RED) - Test fails
2. Write minimal code (GREEN) - Test passes
3. Refactor (REFACTOR) - Improve code, tests still pass
4. Run `make test-ci` - Verify coverage didn't regress

---

## 📊 Coverage Tracking

### Baseline (Phase 4B)
```
File              | % Stmts | % Branch | % Funcs | % Lines
------------------|---------|----------|---------|--------
All files         |     100 |      100 |     100 |     100
 contactSchema.ts |     100 |      100 |     100 |     100
```

### Target (Phase 5)
```
File                  | % Stmts | % Branch | % Funcs | % Lines
----------------------|---------|----------|---------|--------
All files             |      80 |       80 |      80 |      80
 src/components/      |      80 |       75 |      80 |      80
 src/lib/             |      90 |       85 |      90 |      90
 src/sections/        |      85 |       80 |      85 |      85
 src/data/            |      95 |       90 |      95 |      95
```

Use `make baseline-coverage` before starting each task to track progress.

---

## 🔄 Continuous Improvement

### After Phase 5
- Review test coverage weekly
- Add tests for any bugs discovered
- Refactor tests to reduce duplication
- Update testing patterns as needed
- Monitor analytics for insights
- Iterate on conversion optimization

### Future Testing Enhancements
- Visual regression testing (Percy, Chromatic)
- Performance testing (Lighthouse CI)
- Load testing for contact form API
- Smoke tests for production deployments
- A/B testing framework for CTAs

---

## 🚀 Phase 6 Preview (Future Work)

**Potential Next Steps After Phase 5:**

1. **Blog/Portfolio Section**
   - Multi-page routing with React Router
   - Individual project case studies
   - SEO-optimized content pages

2. **CMS Integration**
   - Sanity.io or Contentful
   - Non-technical content management
   - Gallery and testimonial updates via UI

3. **Advanced Features**
   - Online booking (Calendly)
   - Quote request wizard
   - Video content integration
   - Customer portal

4. **Performance Optimization**
   - Image CDN (Cloudinary)
   - Service Worker for offline support
   - Edge caching strategies
   - Advanced code splitting

---

## 📞 Next Steps

**Immediate Actions:**
1. Review and approve Phase 5 PRD
2. Create feature branch: `feature/phase-5-testing`
3. Run `make baseline-coverage` to record starting point
4. Begin T30 (Component Tests) following TDD methodology

**Timeline Estimate:**
- Week 1: Component and utility tests (T30-T31)
- Week 2: E2E tests and analytics (T32-T33)
- Week 3: QA, documentation, deployment
- **Total: 3 weeks** (17-22 hours of development work)

**Blockers:**
- None - All tasks can start immediately
- T34 (Testimonials) remains blocked pending client outreach

---

**Status:** Ready to begin
**Dependencies:** None
**Priority:** HIGH - Quality assurance critical for production stability
**Risk:** LOW - Builds on proven Phase 4B infrastructure

---

**Document Version:** 1.0
**Created:** October 31, 2025
**Author:** AI Assistant
**For Review By:** James Law
