# Wright Angle Carpentry — One-Page Website

**Professional one-page website for Wright Angle Carpentry**, a master joinery practice serving Wareham, Poole, and Dorset.

Built with **React**, **TypeScript**, **TailwindCSS**, and **Shadcn UI** for modern performance, accessibility, and SEO.

---

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type checking
npm run type-check

# Lint
npm run lint

# Format code
npm run format
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Project Structure

```
src/
├── components/
│   ├── common/          # Container, Section, SectionHeading, Logo
│   ├── layout/          # Header, Footer, RootLayout, SkipToContent
│   └── ui/              # Shadcn UI components (button, card, form, etc.)
├── data/
│   ├── site.ts          # ⚙️ Site configuration (contact, address, hours)
│   ├── services.ts      # Service offerings
│   ├── gallery.ts       # Portfolio images
│   └── testimonials.ts  # Client reviews
├── lib/
│   ├── seo.ts           # SEO metadata builder
│   ├── structuredData.ts # JSON-LD schema
│   └── validation/      # Form validation schemas
├── sections/
│   ├── Hero.tsx         # Hero + CTA
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx      # Lazy-loaded
│   ├── Testimonials.tsx # Lazy-loaded
│   └── Contact.tsx      # Lazy-loaded with form
└── App.tsx              # Main app with code-splitting
```

---

## ⚙️ Configuration

### Editing Site Content

All site content is centralised in `src/data/`:

**`src/data/site.ts`** — Business details:
- Name, tagline, description
- Contact (phone, email, WhatsApp)
- Address & service areas
- Opening hours
- Social links

**`src/data/services.ts`** — Service offerings

**`src/data/gallery.ts`** — Portfolio images

**`src/data/testimonials.ts`** — Client testimonials

### Domain Configuration

Update domain in:
- `src/lib/seo.ts` — `canonical` URL
- `public/robots.txt` — Sitemap URL
- `public/sitemap.xml` — Site URL

---

## 🎨 Branding & Assets

### Company Logo

**Current logo:** `public/WA Logo.png`
- **Dimensions:** 585×427px (aspect ratio ~1.37:1)
- **Size:** 43 KB PNG with transparency
- **Usage:** Integrated in Header via `<Logo />` component

**Logo Component:**
- **Location:** `src/components/common/Logo.tsx`
- **Size variants:** `sm` (32px), `md` (40px), `lg` (48px)
- **Props:** `size`, `showText`, `className`
- **Optimization:** Uses `-webkit-optimize-contrast` for crisp rendering

**Display recommendations:**
- **Header:** 40px height (desktop), 32px (mobile)
- **Maximum:** 150px width to avoid pixelation
- **Future upgrade:** Replace with 1200×800px or SVG for higher quality

**Usage example:**
```tsx
import { Logo } from '@/components/common/Logo'

// Header - logo + text
<Logo size="md" showText={true} />

// Mobile - logo only
<Logo size="sm" showText={false} />
```

### Favicon & Icons

**Current setup:**
- `public/favicon.svg` — SVG favicon (WAC initials)
- `public/apple-touch-icon.png` — iOS home screen icon (180×180)
- `public/icon-192.png` — PWA icon (192×192)
- `public/icon-512.png` — PWA icon (512×512)

**To replace with custom icons:**

1. Create icons from your logo using [Real Favicon Generator](https://realfavicongenerator.net)
2. Replace placeholder files in `public/`
3. Or use CLI: `npx sharp-cli -i logo.svg -o public/icon-512.png resize 512 512`

### Open Graph Image

**Current:** `public/og-image.jpg` (placeholder)

**To create:**
1. Design 1200×630px image with:
   - Background: `#0f172a` (brand colour) or wood texture
   - Text: "Wright Angle Carpentry"
   - Subtitle: "Bespoke Joinery in Dorset"
2. Export as JPEG (≤150 KB, quality 85%)
3. Replace `public/og-image.jpg`

**Tools:**
- [Figma](https://figma.com) / [Canva](https://canva.com)
- [OpenGraph.xyz](https://www.opengraph.xyz/)
- [Vercel OG Image](https://github.com/vercel/og-image)

**Test:**
- [OpenGraph.xyz URL Tester](https://www.opengraph.xyz/url/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

---

## 📊 Analytics (Optional)

Analytics are commented out by default.

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Uncomment in `src/App.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

// Inside RootLayout:
<Analytics />
```

### Plausible (Privacy-focused)

```bash
npm install plausible-tracker
```

Add to `index.html`:
```html
<script defer data-domain="wrightanglecarpentry.co.uk" src="https://plausible.io/js/script.js"></script>
```

---

## 📧 Contact Form / Email Integration

The contact form uses **Resend API** to deliver enquiries to `james@wrightanglecarpentry.co.uk`.

### Setup for Production

1. **Get Resend API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Create API key at [resend.com/api-keys](https://resend.com/api-keys)

2. **Configure Environment Variables in Vercel:**
   - Go to Vercel Project → Settings → Environment Variables
   - Add these variables:
   
   | Variable | Value | Required | Environments |
   |----------|-------|----------|--------------|
   | `RESEND_API_KEY` | Your Resend API key (e.g., `re_...`) | Yes | Preview + Production |
   | `RESEND_FROM` | Sender email (default: `Wright Angle Carpentry <onboarding@resend.dev>`) | No | Preview + Production |
   | `RESEND_TO` | Recipient email (default: `james@wrightanglecarpentry.co.uk`) | No | Preview + Production |

   **Note:** `RESEND_FROM` uses `onboarding@resend.dev` (verified domain) by default. Once you verify `wrightanglecarpentry.co.uk` in Resend, update to `Wright Angle Carpentry <noreply@wrightanglecarpentry.co.uk>`.

3. **Verify Domain (Optional, for branded sender):**
   - Go to [Resend Domains](https://resend.com/domains)
   - Add `wrightanglecarpentry.co.uk`
   - Add DNS records as instructed
   - Once verified, update `RESEND_FROM` in Vercel

4. **Redeploy:**
   ```bash
   git push origin feature/carpenter-onepage
   ```
   Vercel will automatically redeploy with the new environment variables.

### Local Development

For local testing, create a `.env` file (not committed):
```bash
RESEND_API_KEY=your_api_key_here
RESEND_FROM=Wright Angle Carpentry <onboarding@resend.dev>
RESEND_TO=james@wrightanglecarpentry.co.uk
```

**Note:** The API endpoint (`/api/sendEmail.ts`) is a Vercel serverless function. Local development requires Vercel CLI:
```bash
vercel dev
```

### How It Works

- Form submission POSTs to `/api/sendEmail`
- Request validated with Zod schema
- Email sent via Resend API to `james@wrightanglecarpentry.co.uk`
- Reply-to set to submitter's email
- Success/error toasts displayed to user

### Testing

1. Fill out contact form on deployed site
2. Submit and verify success toast appears
3. Check `james@wrightanglecarpentry.co.uk` inbox for email
4. Verify reply-to address is set to submitter's email

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add -A
   git commit -m "feat: complete site build"
   git push origin feature/carpenter-onepage
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

3. **Configure custom domain:**
   - Go to Vercel project → Settings → Domains
   - Add `wrightanglecarpentry.co.uk` and `www.wrightanglecarpentry.co.uk`
   - Update DNS:
     - `A` record: `76.76.21.21`
     - `CNAME` for `www`: `cname.vercel-dns.com`

4. **Verify deployment:**
   - Check robots.txt: `https://www.wrightanglecarpentry.co.uk/robots.txt`
   - Check sitemap: `https://www.wrightanglecarpentry.co.uk/sitemap.xml`
   - Run Lighthouse audit (Performance ≥90, A11y ≥95, SEO ≥95)

### Manual Deployment (Other Hosts)

```bash
# Build
npm run build

# Upload dist/ folder to:
# - Netlify (drag & drop or CLI)
# - Cloudflare Pages
# - AWS S3 + CloudFront
# - Any static host
```

---

## 🧪 Testing & Validation

### Lighthouse Audit

```bash
# Build and serve locally
npm run build
npx serve dist

# Open Chrome DevTools → Lighthouse
# Run audit on http://localhost:3000
```

**Target scores:**
- ✅ Performance: ≥90
- ✅ Accessibility: ≥95
- ✅ SEO: ≥95
- ✅ Best Practices: ≥90

### SEO Validation

**JSON-LD Schema:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- Paste site URL or HTML

**Structured Data:**
- [Schema Markup Validator](https://validator.schema.org/)

**Meta Tags:**
- View source → check `<meta>` tags
- [Meta Tags Checker](https://metatags.io/)

---

## 🔧 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** TailwindCSS 3 + Shadcn UI
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Hosting:** Vercel
- **Performance:** Code-splitting (React.lazy + Suspense)

---

## 📈 Performance Optimisations

- ✅ **Code-splitting:** Gallery, Testimonials, Contact lazy-loaded
- ✅ **Vendor chunking:** React, forms, UI libs split into separate bundles
- ✅ **CSS code-splitting:** Per-chunk CSS extraction
- ✅ **Image optimisation:** Lazy loading + `decoding="async"`
- ✅ **Bundle size:** ~90 KB gzipped initial payload

**Build output:**
```
dist/assets/index-*.css          ~5.45 KB gzip
dist/assets/react-*.js          ~45.48 KB gzip
dist/assets/index-*.js          ~37.12 KB gzip
dist/assets/Gallery-*.js         ~1.17 KB gzip (lazy)
dist/assets/Testimonials-*.js    ~0.73 KB gzip (lazy)
dist/assets/Contact-*.js         ~3.33 KB gzip (lazy)
dist/assets/forms-*.js          ~22.28 KB gzip (lazy)
dist/assets/ui-*.js              ~2.91 KB gzip
```

**Note:** Logo asset (`WA Logo.png`) adds 43 KB to initial page load, bringing total initial payload to ~133 KB gzipped.

---

## ♿ Accessibility Features

- ✅ WCAG AA contrast compliance
- ✅ Skip-to-content link
- ✅ Semantic HTML5 structure
- ✅ ARIA labels and landmarks
- ✅ Keyboard navigation (`tabIndex={-1}` on sections)
- ✅ Focus-visible styles
- ✅ Screen-reader friendly forms
- ✅ `lang="en-GB"` and `color-scheme` meta tags

---

## 📝 Content Update Workflow

### Update Business Hours

Edit `src/data/site.ts`:
```typescript
hours: {
  monday: '8:00 AM – 6:00 PM',
  // ...
}
```

### Add New Service

Edit `src/data/services.ts`:
```typescript
{
  id: 'new-service',
  title: 'Service Name',
  summary: 'Description...',
  icon: Hammer,
}
```

### Add Gallery Image

1. Add image to `public/images/`
2. Edit `src/data/gallery.ts`:
```typescript
{
  id: 'project-7',
  src: '/images/project-7.jpg',
  alt: 'Description for SEO',
  caption: 'Project name',
  width: 800,
  height: 600,
}
```

### Add Testimonial

Edit `src/data/testimonials.ts`:
```typescript
{
  id: 'testimonial-4',
  quote: 'Client feedback...',
  author: 'Client Name',
  location: 'Wareham',
}
```

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Type Errors

```bash
npm run type-check
```

### Linting Issues

```bash
npm run lint:fix
```

### Preview Not Working

```bash
# Ensure build succeeded first
npm run build
npm run preview
```

---

## 📄 License

Proprietary — Built for **Wright Angle Carpentry**

---

## 📞 Support

For technical issues or questions:
- **Developer:** James Law
- **Contact:** Via GitHub or email

For business inquiries:
- **Email:** hello@wrightanglecarpentry.co.uk
- **Phone:** 01234 567890

