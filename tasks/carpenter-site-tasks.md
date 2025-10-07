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

---

## 📋 Implementation Plan (T00–T14)

### T00 — Session Prep

- Description: Load memory and PRD; create working branch; persist the approved plan.
- Files likely touched/created: `tasks/carpenter-site-tasks.md`
- Definition of Done: Memory acknowledged; PRD read; branch `feature/carpenter-onepage` checked out; plan saved and committed.
- Commit message template: chore: initialise task plan and session branch
- Dependencies: None
- Ask for approval before proceeding: Yes

### T01 — Bootstrap Vite + TS + Tailwind + Shadcn

- Description: Initialise a fresh Vite React TS app; add Tailwind, PostCSS, Autoprefixer; install Shadcn UI CLI; configure base project structure.
- Files likely touched/created: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `postcss.config.js`, `tailwind.config.ts`, `src/main.tsx`, `src/App.tsx`, `src/index.css`
- Definition of Done: Project starts with `dev` script; Tailwind classes render; Shadcn CLI ready.
- Commit message template: feat(bootstrap): initialise Vite + TS + Tailwind + Shadcn scaffold
- Dependencies: T00
- Ask for approval before proceeding: Yes

### T02 — Project hygiene and DX config

- Description: Add ESLint + Prettier (with Tailwind plugin), editorconfig, path aliases, commitlint (optional), npm scripts; ensure type-check script.
- Files likely touched/created: `.eslintrc.cjs`, `.prettierrc`, `.editorconfig`, `tsconfig.json`, `package.json`
- Definition of Done: Lint and format run clean; `tsc --noEmit` passes.
- Commit message template: chore(dX): configure ESLint, Prettier, TypeScript paths and scripts
- Dependencies: T01
- Ask for approval before proceeding: Yes

### T03 — Design tokens and UI primitives

- Description: Configure Tailwind theme (typography scale, colour palette, spacing); install Shadcn primitives (button, input, textarea, form, toast, card); set global CSS. Create `src/data/site.ts` (NAP, hours, socials, contact, areaServed) and use it in header CTAs & later in JSON-LD.
- Files likely touched/created: `tailwind.config.ts`, `src/index.css`, `src/lib/utils.ts`, `src/components/ui/*`, `src/data/site.ts`
- Definition of Done: Tokens available; Shadcn components compile and render in a sample; `site.ts` exports used values and compiles.
- Commit message template: feat(ui): add design tokens, Shadcn primitives, and site data module
- Dependencies: T01, T02
- Ask for approval before proceeding: Yes

### T04 — App layout, accessibility scaffolding, and header shell

- Description: Create `RootLayout` with skip-to-content link, responsive container, semantic landmarks; implement sticky header shell with placeholder nav.
- Files likely touched/created: `src/components/layout/RootLayout.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Container.tsx`, `src/App.tsx`
- Definition of Done: Landmarks present; skip link works with keyboard; header sticks on mobile.
- Commit message template: feat(layout): add RootLayout with a11y scaffolding and sticky header
- Dependencies: T03
- Ask for approval before proceeding: Yes

### T05 — Hero section with primary CTAs

- Description: Implement hero with business name, tagline, service area; add CTA buttons (Call, WhatsApp, Email) using `lucide-react`; ensure visible above the fold.
- Files likely touched/created: `src/sections/Hero.tsx`
- Definition of Done: CTAs are keyboard-accessible, labelled, and visible on mobile without scrolling.
- Commit message template: feat(hero): add hero with primary CTAs and service area
- Dependencies: T04
- Ask for approval before proceeding: Yes

### T06 — About section

- Description: Add concise bio, years of experience, qualifications/insurance; ensure responsive typography and contrast.
- Files likely touched/created: `src/sections/About.tsx`
- Definition of Done: Content readable on small screens; passes basic a11y checks.
- Commit message template: feat(about): add about section content and styles
- Dependencies: T04
- Ask for approval before proceeding: Yes

### T07 — Services section (6–8 items)

- Description: Grid/list of common services with concise descriptions and icons; mobile-first layout.
- Files likely touched/created: `src/sections/Services.tsx`, `src/data/services.ts`
- Definition of Done: Services render in 1–2 columns on mobile, 3–4 on desktop; icons have aria-hidden.
- Commit message template: feat(services): add responsive services grid with mock data
- Dependencies: T04
- Ask for approval before proceeding: Yes

### T08 — Gallery (placeholder images) with lazy-loading

- Description: Add 6–8 placeholder images/cards with alt text; use `loading="lazy"`; ensure focus styles and keyboard navigation.
- Files likely touched/created: `src/sections/Gallery.tsx`, `src/data/gallery.ts`, `public/images/*` (placeholders)
- Definition of Done: Images lazy-load; alt text meaningful; layout responsive.
- Commit message template: feat(gallery): add placeholder gallery with lazy-loaded images
- Dependencies: T04
- Ask for approval before proceeding: Yes

### T09 — Testimonials section

- Description: Add 3 short testimonials with names/areas; semantic markup (blockquote, cite); responsive card layout.
- Files likely touched/created: `src/sections/Testimonials.tsx`, `src/data/testimonials.ts`
- Definition of Done: Content readable; semantic elements present; passes contrast checks.
- Commit message template: feat(testimonials): add testimonials section with semantic markup
- Dependencies: T04
- Ask for approval before proceeding: Yes

### T10 — Contact section with RHF + Zod and toast

- Description: Implement contact form (name, email, phone, message) with `react-hook-form` + `zod`; inline validation errors; mock submit with success toast; include direct contact buttons.
- Files likely touched/created: `src/sections/Contact.tsx`, `src/lib/validation/contactSchema.ts`, `src/lib/toast.ts`
- Definition of Done: Client-side validation works; submit shows toast; buttons have proper `tel:` and `mailto:` links.
- Commit message template: feat(contact): add validated contact form with RHF + Zod and toast
- Dependencies: T03, T04
- Ask for approval before proceeding: Yes

### T11 — Footer with NAP, hours, socials

- Description: Add footer containing Name, Address, Phone, opening hours, social links, copyright.
- Files likely touched/created: `src/components/layout/Footer.tsx`
- Definition of Done: Links are labelled; NAP is selectable; layout adapts to mobile.
- Commit message template: feat(footer): add footer with NAP, hours, and socials
- Dependencies: T04
- Ask for approval before proceeding: Yes

### T12 — SEO meta, Open Graph, Twitter, and JSON-LD (LocalBusiness)

- Description: Implement SEO helpers; populate `title`, `description`, OG/Twitter meta; add JSON-LD for `LocalBusiness` with mock values; add static `robots.txt` and `sitemap.xml`.
- Files likely touched/created: `src/lib/seo.tsx` (or `seo.ts`), `index.html` (meta), `public/robots.txt`, `public/sitemap.xml`, `src/lib/structuredData.ts`
- Definition of Done: Meta tags present; JSON-LD validates in Rich Results test; robots and sitemap served.
- Commit message template: feat(seo): add meta, OG/Twitter cards, and LocalBusiness JSON-LD
- Dependencies: T05–T11
- Ask for approval before proceeding: Yes

### T13 — Performance and accessibility pass

- Description: Optimise images (placeholders), ensure `prefers-reduced-motion` respect, audit headings order, label controls, focus management, and Lighthouse tuning to meet targets.
- Files likely touched/created: Minor edits across sections; `src/index.css`; `index.html`
- Definition of Done: Lighthouse Mobile: Performance ≥90, SEO ≥90, Accessibility ≥95; FCP < 1.8s on 4G.
- Commit message template: perf(a11y): improve performance and accessibility to meet PRD targets
- Dependencies: T05–T12
- Ask for approval before proceeding: Yes

### T14 — Vercel deploy (preview + production) and release notes

- Description: Add Vercel project settings, preview deployments on PRs, production on `main`; optional analytics placeholder disabled; write concise README with usage and content swap instructions.
- Files likely touched/created: `vercel.json` (if needed), `README.md`, environment settings in Vercel
- Definition of Done: Preview URL on PR; production deploy succeeds; README includes quickstart and content swap guidance.
- Commit message template: chore(deploy): configure Vercel previews and production + README
- Dependencies: T01–T13
- Ask for approval before proceeding: Yes
