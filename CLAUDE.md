# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

One-page marketing website for Wright Angle Carpentry built with React + TypeScript + Vite. Uses Shadcn UI component library, TailwindCSS for styling, and React Hook Form + Zod for validation. Designed for Vercel deployment with serverless functions.

## Common Commands

### Development
```bash
npm run dev              # Start dev server on localhost:5173
npm run type-check       # TypeScript compilation check (no emit)
npm run lint             # ESLint on .ts/.tsx files
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Prettier format all files
npm run format:check     # Check formatting without changes
```

### Production
```bash
npm run build            # TypeScript compile + Vite production build
npm run preview          # Serve production build locally
vercel --prod            # Deploy to Vercel production
vercel dev               # Test serverless functions locally
```

## Architecture

### Data-Driven Content

All site content lives in `src/data/` and is imported by sections:
- `src/data/site.ts` — Business info (contact, address, hours, meta)
- `src/data/services.ts` — Service offerings array
- `src/data/gallery.ts` — Portfolio images array
- `src/data/testimonials.ts` — Client reviews array

This separation allows non-technical content updates without touching components.

### Code-Splitting Strategy

`src/App.tsx` implements manual code-splitting with React.lazy:
- **Eager-loaded:** Hero, About, Services (above fold)
- **Lazy-loaded:** Gallery, Testimonials, Contact (below fold)

Vite config (`vite.config.ts`) further splits bundles:
- `react` chunk: React core libs
- `forms` chunk: react-hook-form + zod + resolvers
- `ui` chunk: lucide-react icons

This keeps initial JS bundle ~90KB gzipped.

### SEO & Structured Data

SEO handled by two dedicated modules:
- `src/lib/seo.ts` — Builds meta tags (Open Graph, Twitter Card, etc.)
- `src/lib/structuredData.ts` — Generates JSON-LD LocalBusiness schema

Both consume `src/data/site.ts` as single source of truth. Canonical URLs are hardcoded to `https://www.wrightanglecarpentry.co.uk` — update these if domain changes.

### Contact Form Flow

1. User submits form → validated client-side via `src/lib/validation/contactSchema.ts` (Zod)
2. POST to `/api/sendEmail` → handled by `api/sendEmail.ts` (Vercel serverless function)
3. Serverless function validates again server-side, sends email via Resend API
4. Success/error toast shown via `sonner` library

Environment variables (Vercel only):
- `RESEND_API_KEY` (required)
- `RESEND_FROM` (optional, defaults to onboarding domain)
- `RESEND_TO` (optional, defaults to james@wrightanglecarpentry.co.uk)

### Component Structure

```
src/components/
├── common/          # Reusable layout primitives (Container, Section, SectionHeading)
├── layout/          # App structure (Header, Footer, RootLayout, SkipToContent)
└── ui/              # Shadcn components (button, card, form, input, etc.)
```

**Shadcn components** (`src/components/ui/`) are controlled via `components.json` config. To add new components:
```bash
npx shadcn@latest add [component-name]
```

### Path Aliases

TypeScript + Vite configured with `@/` alias pointing to `src/`:
- `tsconfig.json` — `"@/*": ["./src/*"]`
- `vite.config.ts` — `alias: { '@': path.resolve(__dirname, './src') }`
- `components.json` — Shadcn CLI uses this for code generation

Always use `@/` imports, never relative paths across directories.

### Styling System

TailwindCSS with CSS variables for theming (`src/index.css`). All colors use HSL variables:
- `--primary`, `--secondary`, `--accent`, etc.
- Dark mode ready (class-based, controlled by `next-themes`)

Custom container config in `tailwind.config.ts` with responsive padding. Font sizes use tuple format for consistent line heights.

### ESLint Configuration

Flat config (`eslint.config.js`) with TypeScript-ESLint:
- Warns on unused vars prefixed with `_`
- Disables `react-refresh/only-export-components` for `src/components/ui/**` (Shadcn components)
- Ignores `dist/` and config files

## Important Constraints

1. **No backend database** — This is a static site with only one serverless function. All data is hardcoded in `src/data/`.

2. **Image optimization** — Images in `public/images/` are served as-is. For production, compress images before committing (target <200KB per image).

3. **Domain-specific URLs** — `src/lib/seo.ts` and `public/sitemap.xml` reference `wrightanglecarpentry.co.uk`. Update these if deploying under different domain.

4. **Vercel-only serverless** — `/api/sendEmail.ts` requires Vercel runtime. Won't work with `npm run dev` — use `vercel dev` to test contact form locally.

5. **Type-check before commits** — `npm run type-check` must pass. Build command runs `tsc -b` first, so type errors block deployment.

## Common Development Patterns

### Adding a New Section

1. Create component in `src/sections/NewSection.tsx`
2. Import in `src/App.tsx`
3. Add to RootLayout (eager or lazy-loaded depending on position)
4. Update `src/lib/seo.ts` if section affects meta description

### Updating Business Info

Edit `src/data/site.ts` — changes propagate to:
- SEO meta tags (`src/lib/seo.ts`)
- JSON-LD schema (`src/lib/structuredData.ts`)
- Contact section (`src/sections/Contact.tsx`)
- Footer (`src/components/layout/Footer.tsx`)

### Adding Shadcn Component

```bash
npx shadcn@latest add dialog
```

This reads `components.json`, generates component in `src/components/ui/dialog.tsx`, and auto-installs dependencies.

## Memory & Context Systems

This project uses a **three-tier memory architecture** for AI assistance:

### 1. MCP Memory Server (`memory.json`)
- **Purpose:** Structured entity-relationship graph of project facts
- **Package:** `@modelcontextprotocol/server-memory`
- **Content:** Business data, technical stack, project milestones, relationships
- **Update when:** Recording factual information about project decisions or business changes

### 2. Personal Memory (`.mcp-memory/memory.md`)
- **Purpose:** Developer's coding preferences and workflow rules
- **Managed by:** Manual updates
- **Content:** Development style, testing rules, Git workflow, golden rules
- **Update when:** Developer preferences or workflows change

### 3. Context7 MCP
- **Purpose:** Real-time code understanding and documentation lookup
- **Package:** `@upstash/context7-mcp`
- **Content:** On-demand code analysis, pattern recognition, doc retrieval
- **Use for:** Exploring code, finding documentation, impact analysis

### Integration Strategy

See `.mcp-memory/context7-strategy.md` for comprehensive guide on using these systems together.

**Quick Guide:**
- **Context7** = Research assistant (understand existing code)
- **memory.json** = Knowledge base (record project facts)
- **memory.md** = Personal rulebook (your coding style)

MCP servers configured in `.cursor/mcp.json` — run automatically in Cursor/Claude Code via `npx -y`.

## Testing Checklist

Before deployment:
1. `npm run type-check` — No TypeScript errors
2. `npm run lint` — No ESLint errors
3. `npm run build` — Build succeeds
4. `npm run preview` → Test production build
5. Lighthouse audit — Performance ≥90, A11y ≥95, SEO ≥95
6. Test contact form with `vercel dev` (requires Resend API key in `.env`)
7. Validate JSON-LD at https://search.google.com/test/rich-results
