# 🎨 PRD — Phase 3: Company Logo Integration

**Project:** Wright Angle Carpentry (one-page React site)
**Author:** James Law
**Phase:** Brand Enhancement
**Date:** October 10, 2025
**Goal:** Integrate the Wright Angle Carpentry logo across the site while managing image quality constraints.

---

## 🎯 Objective

Add the company logo ("WA Logo.png") to key locations on the site in a way that:
1. Enhances brand recognition
2. Maintains professional appearance despite quality limitations
3. Ensures responsive behavior across devices
4. Maintains accessibility standards

---

## 📸 Asset Information

**Current Asset:**
- **File:** `public/WA Logo.png`
- **Dimensions:** 585×427px (aspect ratio ~1.37:1)
- **Size:** 43 KB
- **Format:** PNG with transparency (RGBA)
- **Quality:** Lower resolution (will appear pixelated if displayed too large)

**Recommended Display Sizes:**
- **Header:** Max 120px wide (to avoid pixelation)
- **Hero:** Max 150px wide (if included)
- **Footer:** Max 100px wide
- **Mobile:** Scale proportionally, max 100px wide

---

## 🧩 Scope

### 1️⃣ Header Logo Integration

**Purpose:** Replace text-only brand with logo + text combination

**Design Options:**

#### Option A: Logo + Text (Recommended)
```
[Logo Icon] Wright Angle Carpentry
```
- Logo: 40px height on desktop, 32px on mobile
- Text remains for clarity and SEO
- Logo acts as visual anchor

#### Option B: Logo Only (if text is included in logo image)
```
[Logo Image]
```
- Logo: 120px max width on desktop, 100px on mobile
- Alt text: "Wright Angle Carpentry"
- Consider if logo already contains company name

**Acceptance Criteria:**
- ✅ Logo displays at appropriate size to avoid pixelation
- ✅ Logo links to home (href="#" or "/")
- ✅ Proper alt text for accessibility
- ✅ Responsive sizing (smaller on mobile)
- ✅ Maintains header height consistency
- ✅ Logo loads quickly (already 43KB, acceptable)

---

### 2️⃣ Favicon Update (Optional Enhancement)

**Purpose:** Replace generic favicon with branded icon

**Options:**

#### Option A: Extract Icon from Logo
- Crop the "WA" mark from existing logo
- Generate square favicon sizes (16×16, 32×32, 180×180, 192×192, 512×512)
- Replace `public/favicon.svg` and PNG variants

#### Option B: Keep Existing
- Current favicon is functional (WA initials in SVG)
- May already match brand better than low-res logo extraction

**Recommendation:** Review current favicon first. If it already looks good, skip this task.

---

### 3️⃣ Hero Section Logo (Optional)

**Purpose:** Add visual interest to hero section

**Design Considerations:**
- **Pro:** Reinforces brand immediately
- **Con:** May compete with text hierarchy
- **Con:** Quality limitations more visible on larger displays

**Recommendation:**
- **Skip for now** - Hero is already strong with text
- Consider only if logo quality improves in future
- Alternative: Add as subtle background watermark at 10% opacity

---

### 4️⃣ Footer Logo (Optional)

**Purpose:** Brand reinforcement at page bottom

**Implementation:**
- Add small logo above company name in footer
- Max 80-100px wide
- Grayscale or muted opacity for subtlety

**Acceptance Criteria:**
- ✅ Logo doesn't dominate footer
- ✅ Maintains visual balance with text content
- ✅ Links to top of page (href="#")

---

### 5️⃣ Image Optimization

**Purpose:** Ensure logo looks as good as possible given quality constraints

**Tasks:**

**T20-1: Optimize Display Rendering**
- Add CSS for crisp rendering:
  ```css
  img.logo {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
  ```
- Use `loading="eager"` for header logo (above fold)
- Use `loading="lazy"` for footer logo (below fold)

**T20-2: Consider Future Enhancement**
- Document in README: "Logo can be upgraded with higher resolution version"
- Suggest ideal dimensions: 1200×800px for future replacement
- Keep filename same (`WA Logo.png`) for easy swap

---

## 🎨 Technical Implementation

### Logo Component Pattern

**Create reusable Logo component:**

```typescript
// src/components/common/Logo.tsx
interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showText?: boolean
}

export function Logo({ size = 'md', className, showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',  // 32px - Mobile header, footer
    md: 'h-10', // 40px - Desktop header
    lg: 'h-12', // 48px - Hero section (if used)
  }

  return (
    <a href="#" className="flex items-center gap-2">
      <img
        src="/WA Logo.png"
        alt="Wright Angle Carpentry Logo"
        className={cn('logo', sizeClasses[size], className)}
        loading="eager"
        style={{
          imageRendering: '-webkit-optimize-contrast',
        }}
      />
      {showText && (
        <span className="text-lg font-bold tracking-tight">
          {siteData.name}
        </span>
      )}
    </a>
  )
}
```

**Usage:**
```tsx
// Header
<Logo size="md" showText={true} />

// Footer
<Logo size="sm" showText={false} className="opacity-70" />
```

---

## 📋 Task Breakdown

### **T20 — Logo Integration**

**Goal:** Add company logo to Header with quality-aware sizing

**Sub-Tasks:**

**T20-1: Create Logo Component**
- Create `src/components/common/Logo.tsx`
- Implement size variants (sm, md, lg)
- Add props for text visibility and custom classes
- Include image optimization CSS
- Add proper alt text and ARIA labels

**T20-2: Update Header Component**
- Replace text-only brand with `<Logo />` component
- Test desktop layout (logo + text + nav + CTAs fit)
- Test mobile layout (logo scales appropriately)
- Verify click target size meets accessibility standards (44×44px minimum)

**T20-3: Update Footer (Optional)**
- Add small logo above company name
- Use `<Logo size="sm" showText={false} />`
- Ensure visual balance maintained

**T20-4: Update SEO Head**
- Verify Open Graph image still points to `og-image.jpg` (not logo)
- Logo is for branding, OG image should remain optimized social share graphic

**T20-5: Test Across Devices**
- Desktop: Logo clear at 40px height
- Tablet: Logo scales appropriately
- Mobile: Logo clear at 32px height
- Verify no pixelation at specified sizes

**T20-6: Accessibility Audit**
- Proper alt text: "Wright Angle Carpentry Logo"
- Logo link has accessible name
- Focus styles visible on logo
- Logo doesn't interfere with skip link

**Acceptance Criteria:**
- ✅ Logo displays in header without pixelation
- ✅ Logo + text combination maintains header layout
- ✅ Responsive sizing works on all devices
- ✅ Accessibility standards maintained
- ✅ No performance regression (logo is 43KB, acceptable)
- ✅ Logo component reusable for future placements

---

## ⚙️ Technical Considerations

### Quality Management

**Given Constraints:**
- Logo is 585×427px
- At 40px height, logo will be 55px wide (well within quality limits)
- Pixelation only becomes noticeable above ~150px width

**CSS Optimization:**
```css
.logo {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated; /* Fallback for older browsers */
}
```

**Alternative:** Consider using CSS `filter: contrast(1.1)` to sharpen slightly

---

### Header Layout Adjustments

**Current Header Structure:**
```
[Brand Text] [Nav Links] [CTAs]
```

**New Header Structure:**
```
[Logo + Text] [Nav Links] [CTAs]
```

**Responsive Behavior:**
- **Desktop (≥1024px):** Logo (40px) + Text + Full Nav + All CTAs
- **Tablet (768-1023px):** Logo (36px) + Text + Full Nav + Primary CTA + Menu
- **Mobile (<768px):** Logo (32px) + Short Text/No Text + Primary CTA + Menu

---

### Performance Impact

**Before:**
- Header: Text only (no image)
- First Contentful Paint: ~0.3s

**After:**
- Header: Text + 43KB PNG logo
- Estimated FCP: ~0.32s (minimal impact)
- Logo above fold → use `loading="eager"`
- Logo in footer → use `loading="lazy"`

**Mitigation:**
- Logo already optimized (43KB for 585×427px is reasonable)
- Consider WebP conversion in future for 30-40% size reduction

---

## 🧾 Definition of Done

✅ Logo component created with size variants
✅ Logo integrated into Header (desktop + mobile)
✅ Logo displays at quality-appropriate size
✅ Responsive sizing works across all devices
✅ Accessibility maintained (alt text, focus styles, click targets)
✅ No visual regression in Header layout
✅ No performance regression (Lighthouse ≥90)
✅ Documentation updated in README
✅ Optional: Logo added to Footer
✅ Optional: Favicon updated if needed

---

## 📊 Testing Checklist

### Visual Testing
- [ ] Logo clear and not pixelated at specified sizes
- [ ] Logo + text combination looks balanced
- [ ] Header layout maintains alignment
- [ ] Mobile header doesn't overflow
- [ ] Logo link hover state visible

### Functional Testing
- [ ] Logo links to home/top of page
- [ ] Logo click target meets 44×44px minimum
- [ ] Focus visible when navigating with keyboard
- [ ] Skip link still works correctly

### Performance Testing
- [ ] Lighthouse Performance ≥90
- [ ] No CLS (Cumulative Layout Shift) from logo load
- [ ] Logo loads before LCP (Largest Contentful Paint)

### Accessibility Testing
- [ ] Alt text reads correctly with screen reader
- [ ] Logo doesn't interfere with heading hierarchy
- [ ] Color contrast maintained around logo

---

## 🚀 Recommended Execution Order

1. **T20-1** — Create Logo component (15 mins)
2. **T20-2** — Update Header (20 mins)
3. **T20-5** — Test across devices (10 mins)
4. **T20-6** — Accessibility audit (10 mins)
5. **T20-3** — Footer integration (optional, 10 mins)
6. **T20-4** — Verify SEO (5 mins)

**Total Estimated Time:** ~60-70 minutes

---

## 💡 Future Enhancements

### When Higher Quality Logo Available

**Ideal Specifications:**
- **Dimensions:** 1200×800px or larger
- **Format:** PNG with transparency, or SVG (ideal)
- **File size:** <100KB
- **Resolution:** 2x or 3x for Retina displays

**Benefits:**
- Can display logo larger (up to 200px)
- Can use in Hero section without quality concerns
- Can generate better favicons
- Can create better OG image with logo overlay

**Migration Path:**
1. Replace `public/WA Logo.png` with high-res version
2. Update Logo component to use responsive `srcset` if needed
3. Regenerate favicons from high-res source
4. Consider adding to Hero section
5. Consider branded OG image with logo

---

## 📝 Notes

- Current logo quality is acceptable for header usage (40px height)
- Logo should **not** be displayed larger than 150px width to avoid pixelation
- If logo contains text, consider "logo only" approach in Header
- If logo is mark/icon only, keep text alongside for clarity
- Document upgrade path for future high-res logo replacement

---

## ⚠️ Decisions Required

1. **Header Layout:** Logo + Text, or Logo Only?
   - **Recommendation:** Logo + Text (better for SEO and clarity)

2. **Footer Logo:** Include or skip?
   - **Recommendation:** Optional - test visually, add if it looks good

3. **Hero Logo:** Include or skip?
   - **Recommendation:** Skip for now due to quality constraints

4. **Favicon Update:** Replace or keep current?
   - **Recommendation:** Review current favicon first - if it looks good, keep it

---

## 📚 Documentation Updates

**README.md:**
- Add section: "Logo Assets"
- Document logo file location and size constraints
- Provide upgrade path for future high-res version

**CLAUDE.md:**
- Document Logo component location and usage
- Note quality constraints and recommended sizes

---

**Status:** ✅ Ready for review and approval
**Blocked by:** None
**Dependencies:** Phase 2 complete (✅)
