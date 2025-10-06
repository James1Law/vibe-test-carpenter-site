# 🧩 PRD — One-Page Carpenter & Joiner Website (Mock)

## 🏷 Feature Name
One-Page Tradesperson Website (Carpentry & Joinery) — Mock Content

## 🎯 Overview
Build a fast, mobile-first, single-page marketing site suitable for a local carpenter/joiner. The page should showcase credibility (about, services, socials), clear CTAs (call/email/WhatsApp), trust signals (testimonials/associations), and local SEO basics. Initial version uses mock content and images, ready to be swapped for real assets later.

## 🧭 Objectives (measurable)
- First Contentful Paint (FCP) < 1.8s on 4G (Lighthouse Mobile).
- Lighthouse Performance ≥ 90, SEO ≥ 90, Accessibility ≥ 95.
- Clear primary CTA (“Get a Quote”) visible above the fold.
- Schema.org `LocalBusiness` present and valid (Rich Results test).
- Deployed to Vercel with preview and production environments.

## 👥 Target Users
Homeowners and small businesses searching locally (Google/Maps) for carpentry/joinery services.

## 📄 Content Scope (mock)
- **Hero**: Business name, tagline, service area, CTA buttons (Call, WhatsApp, Email).
- **About**: Short bio, years of experience, qualifications/insurance.
- **Services**: 6–8 common services (e.g. bespoke wardrobes, kitchens, doors, skirting, decking, fitted furniture).
- **Gallery (placeholder)**: 6–8 image cards with alt text (stock or blurred placeholders).
- **Testimonials (placeholder)**: 3 short quotes with names/areas.
- **Contact**: Contact form (name, email, phone, message), plus direct contact buttons; service area map embed (optional).
- **Footer**: NAP (Name, Address, Phone), hours, social links, copyright.

## ✨ Features & UX
- Mobile-first, responsive layout.
- Sticky header with “Call now” on mobile.
- Smooth scroll to sections; skip-to-content link for accessibility.
- Form validation with inline error messages.
- Toast on successful form submission (mock).

## 🔎 SEO & Trust
- Title/description, Open Graph, Twitter meta.
- `robots.txt`, `sitemap.xml` (static for now).
- Schema.org `LocalBusiness` JSON-LD (mock values).
- Accessible components (ARIA labels, colour contrast).
- Image `alt` text and `loading="lazy"`.

## 🛠 Technical Requirements
- **Frontend**: React + TypeScript, TailwindCSS, Shadcn UI.
- **Build**: Vite (mobile-first).  
- **Forms**: `zod` + `react-hook-form`. (Submission mocked; later wire to email/API.)
- **Icons**: `lucide-react`.
- **Analytics**: Placeholder for Vercel Analytics (disabled by default).
- **CI/CD**: Vercel previews on PRs; production on `main`.

## 🪜 Implementation Strategy (high level)
1. Project bootstrap (Vite, Tailwind, Shadcn).
2. Design system primitives (typography scale, colour tokens, spacing).
3. Sections in order: Header/Hero → About → Services → Gallery → Testimonials → Contact → Footer.
4. Add SEO meta and JSON-LD.
5. Lighthouse pass and accessibility fixes.
6. Deploy to Vercel with preview + production.
7. Swap mock content later.

## 🧪 Success Criteria
- Builds cleanly, deploys to Vercel.
- Lighthouse targets met on a throttled mobile run.
- Form validates and displays success toast (mock).
- JSON-LD validates in Rich Results tester.

## 🚫 Non-Goals (for this iteration)
- CMS, blog, or multi-page routing.
- Real image asset pipeline.
- Real inbox/email integration.
- Payment/booking.

## 🧱 Implementation Plan

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