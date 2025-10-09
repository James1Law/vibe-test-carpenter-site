# 🧱 PRD — Phase 2: Personalisation & Integrations

**Project:** Wright Angle Carpentry (one-page React site)  
**Author:** James Law  
**Phase:** Post-launch customisation  
**Goal:** Tailor the production build to James Wright's real business details and enable functional contact handling.

---

## 🎯 Objective

Deliver a fully branded, contact-functional production site using real data (phone, email, address, socials), ensuring all contact methods trigger real communication channels.

---

## 🧩 Scope

### 1️⃣ Contact Information Updates

**Purpose:** Replace placeholder contact info with real business details.

| Field | Old value | New value |
|-------|-----------|-----------|
| Email | hello@wrightanglecarpentry.co.uk | james@wrightanglecarpentry.co.uk |
| Phone (display) | 01234 567890 | 07753 958 395 |
| Phone (E.164) | — | +447753958395 |
| WhatsApp | placeholder | +447753958395 (same as mobile) |
| Address | generic Wareham address | Woodside Cottage, Carey Road, Wareham, Dorset BH20 7PB |
| Service Areas | "Wareham • Poole • Dorset • Surrounding Towns" | "Wareham • Poole • Dorset • surrounding towns" (lowercase 'surrounding towns') |
| Facebook/Instagram | placeholder URLs | ✅ Facebook: https://www.facebook.com/p/Wright-Angle-Carpentry-100068082019115/<br>✅ Instagram: https://www.instagram.com/wright_angle_carpentry/ |

**Acceptance Criteria:**
- `src/data/site.ts` updated with these exact details
- All `mailto:` and `tel:` links reflect new values
- WhatsApp (`wa.me/447753958395`) opens a chat prefilled with "Hi James, I'd like a quote for joinery work."
- Footer and Contact cards display updated info

---

### 2️⃣ E.164 Normalisation (Single Source of Truth)

**Purpose:** Standardise all phone numbers for programmatic use.

**Implementation:**

```typescript
// site.ts
contact: {
  phoneDisplay: '07753 958 395',
  phoneE164: '+447753958395',
  whatsapp: '+447753958395',
  email: 'james@wrightanglecarpentry.co.uk',
}
```

All `tel:` and `wa.me` links derive from `phoneE164`, while UI shows `phoneDisplay`.

**DoD:** No hard-coded numbers remain anywhere in codebase.

---

### 3️⃣ Email Integration (Contact Form) — Chosen: Resend

**Purpose:** Make the form actually deliver messages.

**Decision:** Use **Resend API** for email delivery.

**Rationale:** Keeps submission on our domain, simple API, good deliverability.

---

#### Resend Implementation Plan

- Create Vercel Serverless Function at `api/send-email.ts`
- Validate body with Zod; fields: `name`, `email`, `phone`, `message`
- Send email **to** `james@wrightanglecarpentry.co.uk`, **reply-to** the submitter's email
- Plaintext body; optional HTML later
- Return `{ ok: true }` on success; 4xx/5xx with message on errors
- Client form will `fetch('/api/send-email')` and show success/error toasts

---

#### Environment Variables

| Variable | Where to set | Notes |
|----------|--------------|-------|
| `RESEND_API_KEY` | Vercel → Project → Settings → Environment Variables (Preview + Production) | **Do not commit to repo.** Owner currently holds key ending `…NsUw`. |

**`.env.example`** (to be added):
```
RESEND_API_KEY=
```

---

#### Acceptance Criteria

- Form submission delivers an email to **james@wrightanglecarpentry.co.uk** via Resend
- Success toast on 2xx; descriptive error toast on network/server/validation failures
- No secrets committed to the repository; `.env.example` present
- Endpoint protected by basic anti-spam (honeypot or rate limit) noted for implementation

---

#### Task Split

- **T2.1** Create `api/send-email.ts` (serverless function + Zod validation)
- **T2.2** Add `.env.example` and README notes; set `RESEND_API_KEY` in Vercel
- **T2.3** Wire `Contact.tsx` submit handler to POST `/api/send-email`
- **T2.4** Add honeypot field and reject in API
- **T2.5** Verify Preview deployment end-to-end

---

#### Alternative (not chosen): Formspree

**Formspree (No backend)** – HTML action post to Formspree endpoint.
- Easiest no-code option for live deploy
- Not chosen because Resend provides better control and keeps submission handling on our domain

---

### 4️⃣ Social Links Update

**Purpose:** Link to live Facebook & Instagram profiles.
- Update `siteData.socials.facebook` and `instagram`
- Hide icons if URLs null (maintain fallback behaviour)

**DoD:** Footer icons open correct profiles in new tab with `rel="noopener noreferrer"`.

---

### 5️⃣ SEO / Schema Consistency

**Purpose:** Ensure structured data matches real contact info.
- Update `src/lib/structuredData.ts` to reflect new address & E.164 phone
- Verify Google Rich Results Test passes for LocalBusiness

---

### 6️⃣ Verification & Regression Checklist

- ✅ Build passes (type / lint / format)
- ✅ Lighthouse A11y ≥ 95 after updates
- ✅ Tested form submission delivers email
- ✅ Click tests: Call Now → opens dialler, WhatsApp → chat window, Email → mail client
- ✅ robots.txt / sitemap.xml still valid for production domain

---

## ⚙️ Technical Notes

- Environment vars for email integration should use Vercel Project Settings → Environment Variables
- Add `.env.example` for local dev (e.g. `RESEND_API_KEY=`)
- Continue using Zod for form validation; extend schema to allow server response errors
- Update README with new contact info and deployment instructions for API key

---

## 🧾 Definition of Done

✅ All contact details personalised  
✅ Numbers normalised to E.164  
✅ Working contact form via **Resend API**  
✅ Social links live & verified  
✅ Structured data reflects real info  
✅ Tests and build pass cleanly  
✅ No secrets committed; API key set in Vercel

---

---

## 📋 Phase 2 Task Breakdown

### **T15 — Contact Information & E.164 Normalisation**

**Goal:** Replace placeholder contact details with real business information and standardise phone number handling.

**Sub-Tasks:**

**T15-1: Update Contact Details in `src/data/site.ts`**
- Replace email: `hello@wrightanglecarpentry.co.uk` → `james@wrightanglecarpentry.co.uk`
- Update phone display: `01234 567890` → `07753 958395`
- Add E.164 format: `phoneE164: '+447753958395'`
- Update WhatsApp: `+447753958395`
- Update address to: `Woodside Cottage, Carey Road, Wareham, Dorset BH20 7PB`
- Update service areas: lowercase "surrounding towns"

**T15-2: Refactor Phone Number Architecture**
- Restructure `contact` object to separate `phoneDisplay` and `phoneE164`
- Update all `tel:` links to use `phoneE164`
- Update all `wa.me` links to use `phoneE164`
- Update WhatsApp message text: "Hi James, I'd like a quote for joinery work."
- Ensure UI displays `phoneDisplay` format

**T15-3: Verify Contact Integration**
- Test all `tel:` links open correct number
- Test all `mailto:` links use correct email
- Test WhatsApp opens with prefilled message
- Verify Footer displays updated address
- Verify Contact section shows correct info

**Acceptance Criteria:**
- ✅ No hard-coded phone numbers in codebase (single source of truth)
- ✅ All contact methods functional with real details
- ✅ E.164 normalisation complete

---

### **T16 — Email Integration (Contact Form) — Using Resend**

**Goal:** Enable functional contact form that delivers messages to James's inbox via Resend API.

**Status:** ✅ **READY** — Resend chosen

**Sub-Tasks:**

**T16-1: Create Serverless Email API**
- Install `resend` package
- Create `api/send-email.ts` Vercel Serverless Function
- Validate request body with Zod (name, email, phone, message)
- Send email to `james@wrightanglecarpentry.co.uk` with reply-to set to submitter
- Return `{ ok: true }` on success, 4xx/5xx with error message on failure

**T16-2: Environment & Security Setup**
- Add `.env.example` with `RESEND_API_KEY=`
- Set `RESEND_API_KEY` in Vercel (Preview + Production)
- Add honeypot field to form for anti-spam
- Document API key setup in README

**T16-3: Wire Contact Form**
- Update `Contact.tsx` to POST to `/api/send-email`
- Handle success (show toast, reset form)
- Handle errors (show descriptive error toast)
- Test end-to-end on Preview deployment

**Acceptance Criteria:**
- ✅ Form submission delivers email to james@wrightanglecarpentry.co.uk via Resend
- ✅ Success toast on 2xx; error toast on failures
- ✅ No secrets committed to repo; `.env.example` present
- ✅ Basic anti-spam protection (honeypot) implemented

---

### **T17 — Social Links Update**

**Goal:** Connect real Facebook & Instagram profiles.

**Status:** ✅ **READY** — URLs received

**Social Media URLs:**
- Facebook: https://www.facebook.com/p/Wright-Angle-Carpentry-100068082019115/
- Instagram: https://www.instagram.com/wright_angle_carpentry/

**Sub-Tasks:**

**T17-1: Collect Social URLs**
- ✅ **COMPLETE:** Facebook URL received
- ✅ **COMPLETE:** Instagram URL received

**T17-2: Update Social Links**
- Update `siteData.socials.facebook`
- Update `siteData.socials.instagram`
- Verify fallback behavior for `null` values works

**T17-3: Test Social Integration**
- Verify Footer icons display correctly
- Test links open in new tab with `rel="noopener noreferrer"`
- Confirm icons hidden if URLs are `null`

**Acceptance Criteria:**
- ✅ Social links point to real profiles
- ✅ Links open in new tab securely
- ✅ Fallback behavior maintained

---

### **T18 — SEO & Schema Consistency**

**Goal:** Update structured data and metadata to reflect real business information.

**Sub-Tasks:**

**T18-1: Update Structured Data**
- Update `src/lib/structuredData.ts`:
  - New address (Woodside Cottage)
  - E.164 phone format
  - Updated email
- Verify JSON-LD output is valid

**T18-2: SEO Verification**
- Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- Validate LocalBusiness schema
- Verify NAP (Name, Address, Phone) consistency across site

**Acceptance Criteria:**
- ✅ Structured data reflects real contact info
- ✅ Google Rich Results Test passes
- ✅ NAP consistency verified

---

### **T19 — Final Verification & Testing**

**Goal:** Comprehensive testing and deployment validation.

**Sub-Tasks:**

**T19-1: Build & Quality Checks**
- Run `npm run type-check`
- Run `npm run lint`
- Run `npm run build`
- Verify no errors or warnings

**T19-2: Functional Testing**
- Click test: "Call Now" → opens dialler with correct number
- Click test: "WhatsApp" → opens chat with prefilled message
- Click test: "Email" → opens mail client with correct address
- Form test: Submit contact form → email arrives
- Social test: Footer links open correct profiles

**T19-3: SEO & Performance Audit**
- Run Lighthouse Mobile audit
- Verify Performance ≥90
- Verify Accessibility ≥95
- Verify SEO ≥95
- Confirm `robots.txt` and `sitemap.xml` valid

**T19-4: Update Documentation**
- Update README with:
  - New contact information
  - Email integration setup instructions
  - Environment variable configuration
  - Testing procedures

**Acceptance Criteria:**
- ✅ All tests pass
- ✅ Lighthouse scores maintained
- ✅ All contact methods verified functional
- ✅ Documentation updated

---

## 📊 Task Summary

| Task | Description | Status | Dependencies |
|------|-------------|--------|--------------|
| **T15** | Contact Info & E.164 | Ready | None |
| **T16** | Email Integration (Resend) | Ready | None |
| **T17** | Social Links | Ready | T15 (optional) |
| **T18** | SEO/Schema Update | Ready | T15 (data) |
| **T19** | Final Verification | Ready | T15, T16, T17, T18 |

---

## 🚦 Recommended Execution Order

1. **T15** — Contact Information (15-20 mins)
2. **T16** — Email Integration with Resend (30-45 mins)
3. **T17** — Social Links (5 mins once URLs provided)
4. **T18** — SEO/Schema Update (10 mins)
5. **T19** — Final Verification (20-30 mins)

**Total Estimated Time:** ~95-125 minutes (T17 now unblocked)

---

## ⚠️ Decisions Required

1. **Email Provider Choice:** ✅ **DECIDED — Resend API**
   - Rationale: Keeps submission on our domain, simple API, good deliverability
   - API key ending `…NsUw` to be set in Vercel Environment Variables

2. **Social Media URLs:** ✅ **RECEIVED**
   - Facebook: https://www.facebook.com/p/Wright-Angle-Carpentry-100068082019115/
   - Instagram: https://www.instagram.com/wright_angle_carpentry/

---

## 📝 Status Notes

- **T15** can proceed immediately once approved
- **T16** ✅ **READY** — Resend chosen, implementation plan documented
- **T17** ✅ **READY** — Social media URLs received
- **T18** and **T19** can proceed after T15 complete
- All blockers cleared — ready for Phase 2 execution
