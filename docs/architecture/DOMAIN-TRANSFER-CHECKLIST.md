# 🚨 Domain Transfer & Contact Form Setup Checklist

**Status:** ⏳ IN PROGRESS - BLOCKED
**Priority:** CRITICAL
**Created:** November 21, 2025
**Owner:** James Law

---

## Current Situation

✅ **Contact form is fully implemented and working**
- Code complete with validation, error handling, tests
- Currently sends emails from `onboarding@resend.dev` (Resend's temporary domain)

🚨 **Blocking Issue:**
- Domain `wrightanglecarpentry.co.uk` is currently owned by Adrian
- Domain transfer to James's Namecheap account is in progress
- Cannot configure branded email sender until domain ownership is transferred

💼 **Business Impact:**
- Contact form is the primary conversion point for new business
- Professional branded sender email is essential for credibility
- Current temporary sender may be flagged as spam by some email providers

---

## Phase 1: Domain Transfer (BLOCKED - Waiting for Adrian)

### ⏳ T29-0: Accept Domain Transfer

**Action Required:** Check email (Namecheap account email given to Adrian)

- [ ] Receive transfer notification email from Namecheap
- [ ] Click approval link in email
- [ ] Log into Namecheap account
- [ ] Confirm acceptance of domain transfer
- [ ] Verify domain appears in "Domain List" in Namecheap dashboard

**Estimated Time:** 5 minutes + 1-48 hours waiting for Adrian to initiate transfer

**Notes:**
- Check spam folder if email doesn't arrive within 24 hours
- Contact Adrian if no notification received after 48 hours

---

## Phase 2: Connect Domain to Vercel

### ✅ T29-1: Configure Vercel Domain

**Prerequisites:** Domain must be in your Namecheap account

**Steps:**

1. **Add Domain in Vercel**
   - [ ] Log into Vercel dashboard
   - [ ] Navigate to project: `new-vibe-test` (or your project name)
   - [ ] Go to Settings → Domains
   - [ ] Click "Add Domain"
   - [ ] Enter: `wrightanglecarpentry.co.uk`
   - [ ] Click "Add"
   - [ ] Repeat for: `www.wrightanglecarpentry.co.uk`

2. **Get DNS Records from Vercel**
   - [ ] Copy the A Record IP address (typically `76.76.21.21`)
   - [ ] Copy the CNAME value (typically `cname.vercel-dns.com`)

3. **Configure DNS in Namecheap**
   - [ ] Log into Namecheap
   - [ ] Go to Domain List → Manage `wrightanglecarpentry.co.uk`
   - [ ] Click "Advanced DNS" tab
   - [ ] Delete any existing A Records or CNAME Records for `@` and `www`
   - [ ] Add new A Record:
     - Type: `A Record`
     - Host: `@`
     - Value: `[IP from Vercel]` (verify current IP in Vercel dashboard)
     - TTL: `Automatic`
   - [ ] Add new CNAME Record:
     - Type: `CNAME Record`
     - Host: `www`
     - Value: `cname.vercel-dns.com`
     - TTL: `Automatic`
   - [ ] Save all changes

4. **Wait for DNS Propagation**
   - [ ] Wait 5-30 minutes (can take up to 48 hours in rare cases)
   - [ ] Check Vercel dashboard for green checkmarks on both domains
   - [ ] Visit `https://wrightanglecarpentry.co.uk` in browser
   - [ ] Verify SSL certificate (green padlock icon)

**Estimated Time:** 30 minutes + 5-30 minutes DNS propagation

---

## Phase 3: Verify Domain in Resend

### ✅ T29-2: Configure Resend Email Domain

**Prerequisites:** Domain must be connected to Vercel with working SSL

**Steps:**

1. **Add Domain in Resend**
   - [ ] Log into Resend dashboard: https://resend.com
   - [ ] Go to "Domains" section
   - [ ] Click "Add Domain"
   - [ ] Enter: `wrightanglecarpentry.co.uk`
   - [ ] Click "Add"

2. **Get DNS Records from Resend**
   Resend will display 3 TXT records:
   - [ ] Copy SPF record (for email authentication)
   - [ ] Copy DKIM record (for email signing)
   - [ ] Copy DMARC record (for email policy)

3. **Add DNS Records in Namecheap**
   - [ ] Go back to Namecheap → Domain → Advanced DNS
   - [ ] For each TXT record provided by Resend:
     - Click "Add New Record"
     - Type: `TXT Record`
     - Host: `[provided by Resend]`
     - Value: `[provided by Resend]`
     - TTL: `Automatic`
   - [ ] Save all changes

4. **Verify Domain in Resend**
   - [ ] Return to Resend dashboard
   - [ ] Click "Verify" button next to the domain
   - [ ] Wait 5-30 minutes for DNS propagation
   - [ ] Refresh page until status shows "Verified" ✅

**Estimated Time:** 15 minutes + 5-30 minutes verification wait

**Troubleshooting:**
- If verification fails, double-check TXT record values (no extra spaces)
- DNS changes can take up to 24 hours in rare cases
- Use DNS checker tool: https://dnschecker.org

---

## Phase 4: Update Production Configuration

### ✅ T29-3: Configure Vercel Environment Variables

**Prerequisites:** Domain must be verified in Resend

**Steps:**

1. **Update Environment Variables**
   - [ ] Log into Vercel dashboard
   - [ ] Go to project Settings → Environment Variables
   - [ ] Find `RESEND_FROM` variable
   - [ ] Click "Edit"
   - [ ] Change value to: `Wright Angle Carpentry <contact@wrightanglecarpentry.co.uk>`
   - [ ] Ensure it's applied to "Production" and "Preview" environments
   - [ ] (Optional) Update `RESEND_TO` if different from current
   - [ ] Click "Save"

2. **Redeploy to Apply Changes**
   - [ ] Go to "Deployments" tab
   - [ ] Click "..." menu on latest deployment
   - [ ] Click "Redeploy"
   - [ ] Wait for deployment to complete

**Estimated Time:** 5 minutes + 2-3 minutes deployment

---

## Phase 5: Production Testing

### ✅ T29-4: Test Contact Form in Production

**Prerequisites:** New environment variables deployed

**Steps:**

1. **Basic Functionality Test**
   - [ ] Visit https://wrightanglecarpentry.co.uk
   - [ ] Scroll to Contact section
   - [ ] Fill out form with test data:
     - Name: `Test User`
     - Email: `your-test-email@gmail.com` (use your real email)
     - Phone: `01234 567890`
     - Message: `This is a test submission from the production contact form.`
   - [ ] Click "Send Message"
   - [ ] Verify success message appears

2. **Email Verification**
   - [ ] Check inbox at `james@wrightanglecarpentry.co.uk`
   - [ ] Verify email received
   - [ ] Check sender shows: `Wright Angle Carpentry <contact@wrightanglecarpentry.co.uk>`
   - [ ] Verify email content is correct
   - [ ] Verify reply-to is set to the test email submitted
   - [ ] Reply to the email to test reply-to functionality

3. **Deliverability Test (Multiple Providers)**
   - [ ] Test with Gmail account
   - [ ] Test with Outlook/Hotmail account
   - [ ] Test with Apple Mail (iCloud) account
   - [ ] Verify none go to spam folder
   - [ ] Check email headers show proper authentication (SPF, DKIM)

4. **Error Handling Test**
   - [ ] Submit form with invalid email
   - [ ] Verify client-side validation works
   - [ ] Submit form with empty fields
   - [ ] Verify error messages display correctly

**Estimated Time:** 15 minutes

---

## Success Criteria

All checkboxes below must be ✅ before marking T29 as complete:

### Domain Ownership
- [ ] Domain `wrightanglecarpentry.co.uk` appears in James's Namecheap account
- [ ] Domain is not showing any transfer locks or restrictions

### DNS & Hosting
- [ ] Site loads at `https://wrightanglecarpentry.co.uk` (no subdomain)
- [ ] Site loads at `https://www.wrightanglecarpentry.co.uk`
- [ ] Both URLs show SSL certificate (green padlock)
- [ ] SSL certificate issued by Let's Encrypt or similar
- [ ] DNS records correctly configured in Namecheap

### Email Configuration
- [ ] Domain verified in Resend dashboard (green "Verified" status)
- [ ] SPF record configured and passing
- [ ] DKIM record configured and passing
- [ ] DMARC record configured
- [ ] Vercel environment variable `RESEND_FROM` updated to custom domain

### Production Testing
- [ ] Contact form successfully sends emails
- [ ] Emails received at `james@wrightanglecarpentry.co.uk`
- [ ] Sender shows as `contact@wrightanglecarpentry.co.uk`
- [ ] Emails arrive in inbox (not spam)
- [ ] Reply-to functionality works
- [ ] Tested across multiple email providers (Gmail, Outlook, Apple)
- [ ] Form validation and error handling working correctly

### Code Quality
- [ ] No code changes required (all changes are configuration-only)
- [ ] E2E tests still passing
- [ ] No console errors in production

---

## Quick Reference Links

### Dashboards
- **Namecheap:** https://ap.www.namecheap.com/domains/list/
- **Vercel:** https://vercel.com/dashboard
- **Resend:** https://resend.com/domains

### Documentation
- **Full domain transfer guide:** Provided to James in previous message
- **Phase 5 PRD (T29 section):** `docs/PRD-Phase-5.md` section 0️⃣
- **Resend API docs:** https://resend.com/docs
- **Vercel domain docs:** https://vercel.com/docs/concepts/projects/domains

### Support Contacts
- **Namecheap Support:** https://www.namecheap.com/support/
- **Vercel Support:** https://vercel.com/support
- **Resend Support:** support@resend.com
- **Adrian (current domain owner):** [Contact info]

---

## Troubleshooting Common Issues

### Transfer email not received
- Check spam/junk folder
- Verify email address given to Adrian is correct
- Wait 48 hours before contacting Adrian
- Adrian may need to initiate the transfer from his end

### DNS not propagating
- Changes can take 5-30 minutes (rarely up to 48 hours)
- Clear browser cache and try incognito mode
- Check DNS propagation: https://dnschecker.org
- Verify no typos in DNS record values

### SSL certificate not provisioning
- DNS must be fully propagated first
- Can take 1-2 hours after DNS propagation
- Try removing and re-adding domain in Vercel
- Contact Vercel support if issue persists

### Domain not verifying in Resend
- Double-check TXT record values (no spaces, exact match)
- Wait up to 30 minutes for DNS propagation
- Use DNS checker: https://dnschecker.org
- Ensure records are added to root domain (not subdomain)

### Emails going to spam
- Verify SPF, DKIM, DMARC records in Resend
- Check email headers for authentication failures
- Warm up domain by sending test emails gradually
- Consider adding domain to email allowlist initially

### Contact form still using old sender
- Verify environment variable was saved in Vercel
- Ensure redeployment completed successfully
- Check deployment logs for errors
- Clear CDN cache if needed

---

## Post-Completion Tasks

Once T29 is complete:

1. **Documentation**
   - [ ] Update `docs/PROJECT-STATUS.md` to remove blocker
   - [ ] Update CLAUDE.md if any configuration notes needed
   - [ ] Mark T29 as complete in PRD-Phase-5.md

2. **Communication**
   - [ ] Inform Adrian that transfer is complete and working
   - [ ] Test form with a real submission (ask colleague/friend)
   - [ ] Monitor email deliverability for first few days

3. **Monitoring**
   - [ ] Set up email delivery monitoring in Resend dashboard
   - [ ] Watch for any delivery failures
   - [ ] Track form submission conversion rate (Phase 5 T33)

4. **Resume Phase 5**
   - [ ] Continue with T30 (Component Test Suite)
   - [ ] Follow TDD methodology for all new features

---

**Last Updated:** November 21, 2025
**Status:** ⏳ Blocked - Waiting for domain transfer from Adrian
**Next Action:** Monitor email for Namecheap transfer notification
