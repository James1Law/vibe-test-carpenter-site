# 🧩 Task Plan — One-Page Carpenter & Joiner Website

> Agent: follow these tasks **sequentially**. After each numbered task group, pause and ask for approval before continuing. Keep commits small and descriptive. Use thinking models. Apply `.mcp-memory/memory.md`.

---

## 0️⃣ Session Prep
- Load `.mcp-memory/memory.md`.
- Read `docs/PRD-carpenter-site.md`.
- Create branch: `feature/carpenter-onepage`.

**Commit gate**: none.

---

## 1️⃣ Project Bootstrap
- Create Vite React + TypeScript app (if not present).
- Add TailwindCSS and configure (`tailwind.config.ts`, `postcss.config.js`, `src/index.css` with base/components/utilities).
- Install Shadcn UI and initialise; add Button, Card, Input, Textarea, Separator, Badge, Sheet.
- Install deps: `react-hook-form`, `zod`, `@hookform/resolvers`, `lucide-react`.
- Set up a clean layout: container widths, typography scale, colour tokens (Tailwind config).
- Add a basic `<App>` skeleton with section anchors.

**Commit**: `chore: bootstrap vite + tailwind + shadcn ui and base layout`

---

## 2️⃣ Design System & Utilities
- Create `src/components/ui` (Shadcn exports) and `src/components/common` for shared atoms (Section, SectionHeading, Container).
- Add `src/lib/seo.ts` helper for meta tags and JSON-LD injection.
- Add `src/lib/forms.ts` for zod schemas and RHF utilities.
- Add `SkipToContent` link for a11y.

**Commit**: `feat: add design primitives, seo/json-ld helpers, a11y skip link`

---

## 3️⃣ Header & Hero
- Sticky header with logo (text for now) and CTA buttons (Call, WhatsApp, Email).
- Hero section: headline, subheadline including service area, primary CTA “Get a Quote”, secondary anchor “View Services”.
- Ensure mobile tap targets are large and accessible.

**Commit**: `feat: header and hero with primary CTAs`

---

## 4️⃣ About Section
- Short “About Me” with years of experience, insurance/qualifications (mock).
- Small trust badges (icons) for “Fully Insured”, “Free Quotes”, “Local & Reliable”.

**Commit**: `feat: about section with trust badges`

---

## 5️⃣ Services Section
- Grid of 6–8 services (Card): title, short description, icon.
- Add badges for “Bespoke”, “Made-to-measure” where relevant.

**Commit**: `feat: services grid`

---

## 6️⃣ Gallery (Placeholder)
- Responsive image grid with 6–8 placeholders (use `object-cover`, `rounded-2xl`, lazy-load).
- Meaningful `alt` text (mock).

**Commit**: `feat: gallery placeholder grid with accessible images`

---

## 7️⃣ Testimonials (Placeholder)
- 3 testimonial cards with name + area (mock).
- Consider quote icon and subtle accent border.

**Commit**: `feat: testimonials section`

---

## 8️⃣ Contact Section (Form + Direct Actions)
- Contact form with fields: name, email, phone (optional), message.
- Validation: required name/email/message; phone optional but pattern-checked if present.
- On submit: mock async handler → toast success “Thanks! We’ll be in touch.”
- Direct action buttons: Call, WhatsApp, Email.
- (Optional) Small embedded map iframe or a static map image placeholder.

**Commit**: `feat: contact form with validation and mock submit`

---

## 9️⃣ Footer
- NAP (Name, Address (mock), Phone), opening hours (mock).
- Social links (icons) and copyright.
- Link to Privacy (placeholder) and Terms (placeholder) anchors.

**Commit**: `feat: footer with NAP and links`

---

## 🔟 SEO & JSON-LD
- Add `<title>`, meta description, Open Graph, Twitter tags (mock).
- Add `robots.txt` and `sitemap.xml` (static).
- Inject Schema.org `LocalBusiness` JSON-LD with mock values (name, area served, contact, opening hours).
- Ensure each image has descriptive `alt`.

**Commit**: `feat: seo meta, robots, sitemap, localbusiness json-ld`

---

## 1️⃣1️⃣ Accessibility & Performance Pass
- Keyboard navigation check, focus states, aria-labels where needed.
- Contrast check for text on backgrounds.
- Lighthouse run (mobile, throttled). Optimise images (placeholders), ensure lazy loading, reduce CLS.
- Target: Perf ≥ 90, SEO ≥ 90, A11y ≥ 95.

**Commit**: `chore: accessibility fixes and performance tuning`

---

## 1️⃣2️⃣ Vercel Deployment
- Add `vercel.json` if any headers/meta are needed (likely minimal).
- Connect repo to Vercel; set preview deploys on PRs.
- Deploy `main` to production.
- Verify OG tags on a live URL (social share preview).

**Commit**: `chore: configure vercel and deploy`

---

## 1️⃣3️⃣ Wrap-Up (We’re Done)
- Run all tests (if any), final tidy.
- Prepare short PR description with screenshots (mobile + desktop).
- Merge to `main`.
- Create a follow-up ticket to replace mock content with real copy, images and NAP, and to wire the form to an email service.

**Commit**: `docs: add follow-up tasks for real content and email wiring`