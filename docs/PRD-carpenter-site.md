# 🧩 PRD — Wright Angle Carpentry: One-Page Website

## 🏷 Feature Name

Wright Angle Carpentry — One-Page Tradesperson Website

## 🎯 Overview

Build a fast, mobile-first, single-page marketing site for **Wright Angle Carpentry** (master joiner, 20+ years’ experience). The page must showcase credibility (About, Services, Testimonials), clear CTAs (Call/Email/WhatsApp), trust signals (badges/testimonials), and local SEO for **Wareham, Dorset, Poole, and surrounding towns**. Initial version uses real business copy with placeholder images that can be swapped later.

## 🧭 Objectives (measurable)

- First Contentful Paint (FCP) < **1.8s** on 4G (Lighthouse Mobile).
- Lighthouse: **Performance ≥ 90**, **SEO ≥ 90**, **Accessibility ≥ 95**.
- Clear above-the-fold primary CTA (“Get a Quote”).
- Valid **Schema.org `LocalBusiness`** (Rich Results test passes).
- Deployed to **Vercel** with preview (PRs) and production (main).

## 👥 Target Users

Homeowners and small businesses in **Wareham, Dorset, Poole, and nearby towns** searching for carpentry/joinery services.

## 📄 Content Scope

- **Hero**: Business name, tagline, service area, CTA buttons (Call, WhatsApp, Email).
- **About**: Real copy—master joiner, **20+ years**, bespoke staircases, fitted wardrobes, custom kitchens, full renovations; trustworthy and local.
- **Services**: 6–8 offerings (staircases, wardrobes, kitchens, alcove units, doors/skirting, decking/pergolas, renovations).
- **Gallery (placeholder)**: 6–8 image cards with meaningful alt text; to be replaced with real photos.
- **Testimonials (initial placeholders)**: 3 short quotes with names/areas; real reviews can replace later.
- **Contact**: Contact form (name, email, phone, message) + direct CTAs; optional map embed.
- **Footer**: NAP (Name, Address, Phone), hours, socials, copyright.

## ✨ Features & UX

- Mobile-first, responsive layout.
- Sticky header (mobile shows “Call now”).
- Smooth anchor navigation; **skip-to-content** for a11y.
- Form validation with inline errors (mock submit for now).
- Success toast on mock submit.

## 🔎 SEO & Trust

- `<title>`/description, Open Graph, Twitter meta.
- `robots.txt`, `sitemap.xml`.
- **LocalBusiness JSON-LD** (use site data constants).
- Accessible components (ARIA, contrast).
- Image `alt` and `loading="lazy"`.

## 🛠 Technical Requirements

- **Frontend**: React + **TypeScript**, **TailwindCSS**, **Shadcn UI**.
- **Build**: **Vite**.
- **Forms**: `zod` + `react-hook-form` (submission mocked).
- **Icons**: `lucide-react`.
- **Analytics**: Vercel Analytics placeholder (off by default).
- **CI/CD**: Vercel previews on PRs; production on `main`.

## 🪜 Implementation Strategy (high level)

1. Bootstrap (Vite, Tailwind, Shadcn).
2. Design tokens & primitives (typography, colour, spacing).
3. Sections in order: Header/Hero → **About** → Services → Gallery → Testimonials → Contact → Footer.
4. SEO meta + LocalBusiness JSON-LD.
5. Lighthouse & accessibility pass.
6. Vercel deploys (preview + production).
7. Swap placeholders for real assets later.

## 🧪 Success Criteria

- Builds cleanly; deploys to Vercel.
- Lighthouse targets met on throttled mobile run.
- Form validates and shows success toast (mock).
- JSON-LD validates (Rich Results tester).

## 🚫 Non-Goals (this iteration)

- CMS, blog, multi-page routing.
- Real image pipeline.
- Real inbox/email integration.
- Booking/payments.

---

## 🧱 Implementation Plan

### T00 — Session Prep

- **Description:** Load memory and PRD; create working branch; persist the approved plan.
- **Files:** `tasks/carpenter-site-tasks.md`
- **DoD:** Memory acknowledged; PRD read; branch `feature/carpenter-onepage` checked out; plan saved & committed.
- **Commit:** `chore: initialise task plan and session branch`
- **Deps:** —
- **Pause for approval:** Yes

### T01 — Bootstrap Vite + TS + Tailwind + Shadcn

- **Description:** Initialise Vite React TS app; add Tailwind/PostCSS/Autoprefixer; install Shadcn; base structure.
- **Files:** `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `postcss.config.js`, `tailwind.config.ts`, `src/main.tsx`, `src/App.tsx`, `src/index.css`
- **DoD:** `npm run dev` works; Tailwind renders; Shadcn ready.
- **Commit:** `feat(bootstrap): initialise Vite + TS + Tailwind + Shadcn scaffold`
- **Deps:** T00
- **Pause:** Yes

### T02 — Project hygiene and DX config

- **Description:** ESLint (flat config) + Prettier (Tailwind plugin), EditorConfig, TS paths, npm scripts; ensure type-check.
- **Files:** `eslint.config.js`, `.prettierrc`, `.editorconfig`, `.vscode/settings.json`, `tsconfig.json`, `vite.config.ts`, `package.json`
- **DoD:** Lint/format clean; `tsc --noEmit` passes.
- **Commit:** `chore(DX): add ESLint, Prettier (Tailwind), EditorConfig, TS paths and scripts`
- **Deps:** T01
- **Pause:** Yes

### T03 — Design tokens and UI primitives

- **Description:** Configure Tailwind theme (typography palette spacing); install Shadcn primitives (button, input, textarea, form, toast, card); global CSS. Create `src/data/site.ts` (NAP, hours, socials, contact, `areaServed`) and reuse for CTAs & later JSON-LD.
- **Files:** `tailwind.config.ts`, `src/index.css`, `src/lib/utils.ts`, `src/components/ui/*`, `src/data/site.ts`
- **DoD:** Tokens available; primitives compile; `site.ts` exports used & compile.
- **Commit:** `feat(ui): add design tokens, primitives, and site data module`
- **Deps:** T01, T02
- **Pause:** Yes

### T04 — App layout, accessibility scaffolding, and header shell

- **Description:** `RootLayout` with skip link, semantic landmarks; sticky header shell with anchors to sections.
- **Files:** `src/components/layout/RootLayout.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/App.tsx`
- **DoD:** Landmarks present; skip link keyboard-works; sticky header on mobile.
- **Commit:** `feat(layout): add RootLayout with a11y scaffolding and sticky header`
- **Deps:** T03
- **Pause:** Yes

### T05 — Hero section with primary CTAs

- **Description:** Above-the-fold hero with **Wright Angle Carpentry** name, tagline, service area; CTAs (Call/WhatsApp/Email) using site data; visible on mobile without scrolling.
- **Files:** `src/sections/Hero.tsx`
- **DoD:** Keyboard-accessible CTAs; correct hrefs; h1 present.
- **Commit:** `feat(hero): add hero with primary CTAs and service area`
- **Deps:** T04
- **Pause:** Yes

### T06 — About section (real business content)

- **Description:** Introduce **Wright Angle Carpentry** (master joiner, **20+ years**). Real copy covering bespoke staircases, fitted wardrobes, custom kitchens, full property renovations; emphasis on precision craftsmanship, reliability, and local service across **Wareham, Dorset, Poole, and surrounding towns**. Add trust badges (e.g. _Master Joiner_, _20+ Years Experience_, _Local & Reliable_, _Fully Insured_).
- **Files:** `src/sections/About.tsx`
- **DoD:** Readable on mobile/desktop; accessible icons; consistent typography.
- **Commit:** `feat(about): add about section for Wright Angle Carpentry with real business content`
- **Deps:** T04
- **Pause:** Yes

### T07 — Services section (real business offerings)

- **Description:** Services grid (6–8): bespoke **staircases**, **fitted wardrobes**, **custom kitchens**, **alcove units & shelving**, **door hanging & skirting**, **garden decking & pergolas**, **full property renovations**. Icons + concise descriptions.
- **Files:** `src/sections/Services.tsx`, `src/data/services.ts`
- **DoD:** 1–2 cols mobile, 3–4 desktop; icons `aria-hidden`; accessible layout.
- **Commit:** `feat(services): add Wright Angle Carpentry services grid with descriptions and icons`
- **Deps:** T06
- **Pause:** Yes

### T08 — Gallery (project showcase)

- **Description:** Placeholder grid (6–8) with meaningful alt text (“Bespoke oak staircase”, “Fitted kitchen in Poole”); lazy-loading; keyboard navigation.
- **Files:** `src/sections/Gallery.tsx`, `src/data/gallery.ts`, `public/images/*`
- **DoD:** Lazy images; responsive; accessible.
- **Commit:** `feat(gallery): add Wright Angle Carpentry project gallery (placeholders)`
- **Deps:** T07
- **Pause:** Yes

### T09 — Testimonials section

- **Description:** 3 short quotes with names/areas (initial placeholders, e.g. _Emma — Wareham_, _David — Poole_). Use `<blockquote>` + `<cite>`.
- **Files:** `src/sections/Testimonials.tsx`, `src/data/testimonials.ts`
- **DoD:** Readable, semantic, balanced layout.
- **Commit:** `feat(testimonials): add Wright Angle Carpentry testimonials with semantic markup`
- **Deps:** T08
- **Pause:** Yes

### T10 — Contact section with RHF + Zod and toast

- **Description:** Form (name, email, phone, message) with zod/RHF; inline errors; mock submit + success toast; direct CTAs (tel/mailto).
- **Files:** `src/sections/Contact.tsx`, `src/lib/validation/contactSchema.ts`, `src/lib/toast.ts`
- **DoD:** Client validation; toast on submit; direct buttons correct.
- **Commit:** `feat(contact): add validated contact form with RHF + Zod and toast`
- **Deps:** T03, T04
- **Pause:** Yes

### T11 — Footer with NAP, hours, socials

- **Description:** Footer with Name, Address (from site data, can be partial), Phone, hours, socials, copyright.
- **Files:** `src/components/layout/Footer.tsx`
- **DoD:** Labelled links; selectable NAP; responsive layout.
- **Commit:** `feat(footer): add footer with NAP, hours, and socials`
- **Deps:** T04
- **Pause:** Yes

### T12 — SEO meta, Open Graph, Twitter, and JSON-LD (LocalBusiness)

- **Description:** SEO helpers; `<title>`/description; OG/Twitter; **LocalBusiness JSON-LD** using **site data** (name, url, telephone, address, `areaServed`, `openingHoursSpecification`, `sameAs`, `image`, `priceRange`); add static `robots.txt` & `sitemap.xml`.
- **Files:** `src/lib/seo.ts(x)`, `index.html`, `public/robots.txt`, `public/sitemap.xml`, `src/lib/structuredData.ts`
- **DoD:** Meta present; JSON-LD validates; robots/sitemap served.
- **Commit:** `feat(seo): add meta, OG/Twitter, and LocalBusiness JSON-LD`
- **Deps:** T05–T11
- **Pause:** Yes

### T13 — Performance and accessibility pass

- **Description:** Optimise images (placeholders), respect `prefers-reduced-motion`, audit headings/labels/focus, Lighthouse tuning to targets.
- **Files:** Minor edits; `src/index.css`; `index.html`
- **DoD:** Lighthouse Mobile: Perf ≥ 90, SEO ≥ 90, A11y ≥ 95; FCP < 1.8s.
- **Commit:** `perf(a11y): improve performance and accessibility to meet PRD targets`
- **Deps:** T05–T12
- **Pause:** Yes

### T14 — Vercel deploy (preview + production) and release notes

- **Description:** Confirm Vercel project settings; previews on PRs; production on `main`. Add concise README with usage and content-swap instructions.
- **Files:** `vercel.json` (if needed), `README.md`, Vercel settings
- **DoD:** Preview URL on PR; production deploy succeeds; README quickstart ready.
- **Commit:** `chore(deploy): configure Vercel previews and production + README`
- **Deps:** T01–T13
- **Pause:** Yes
