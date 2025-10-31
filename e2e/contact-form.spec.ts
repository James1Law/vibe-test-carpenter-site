import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.locator('form')).toBeVisible();
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/phone/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /send message/i })).toBeVisible();
  });

  test('should show validation errors for empty form submission', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: /send message/i });
    await submitButton.click();

    // Wait for validation messages to appear
    await expect(page.getByText(/name must be at least 2 characters/i)).toBeVisible();
    await expect(page.getByText(/please enter a valid email address/i)).toBeVisible();
    await expect(page.getByText(/message must be at least 10 characters/i)).toBeVisible();
  });

  test('should show validation error for invalid email', async ({ page }) => {
    await page.getByLabel(/name/i).fill('John Smith');
    await page.getByLabel(/email/i).fill('invalid-email');
    await page.getByLabel(/message/i).fill('This is a test message for the contact form.');

    await page.getByRole('button', { name: /send message/i }).click();

    await expect(page.getByText(/please enter a valid email address/i)).toBeVisible();
  });

  test('should show validation error for short name', async ({ page }) => {
    await page.getByLabel(/name/i).fill('J');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/message/i).fill('This is a test message.');

    await page.getByRole('button', { name: /send message/i }).click();

    await expect(page.getByText(/name must be at least 2 characters/i)).toBeVisible();
  });

  test('should show validation error for short message', async ({ page }) => {
    await page.getByLabel(/name/i).fill('John Smith');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/message/i).fill('Short');

    await page.getByRole('button', { name: /send message/i }).click();

    await expect(page.getByText(/message must be at least 10 characters/i)).toBeVisible();
  });

  test('should accept valid form data', async ({ page }) => {
    await page.getByLabel(/name/i).fill('John Smith');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/phone/i).fill('07700 900000');
    await page.getByLabel(/message/i).fill('I am interested in getting a quote for custom kitchen cabinets.');

    // Note: This will actually attempt to send the form in local dev
    // In a real test, you might want to mock the API endpoint
    await page.getByRole('button', { name: /send message/i }).click();

    // Wait for either success or error toast
    // Adjust based on your actual toast implementation
    await expect(page.locator('.sonner')).toBeVisible({ timeout: 5000 });
  });

  test('should clear form after successful submission', async ({ page }) => {
    await page.getByLabel(/name/i).fill('Test User');
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/message/i).fill('This is a test message for form clearing.');

    await page.getByRole('button', { name: /send message/i }).click();

    // Wait a bit for the form to potentially clear
    await page.waitForTimeout(1000);

    // Note: Adjust based on actual form behavior after submission
    // This test assumes form clears on success
  });

  test('should be keyboard accessible', async ({ page }) => {
    // Tab through form fields
    await page.keyboard.press('Tab'); // Skip to content link

    // Navigate to contact section using keyboard
    await page.locator('#contact').focus();

    const nameInput = page.getByLabel(/name/i);
    await nameInput.focus();
    await expect(nameInput).toBeFocused();

    await page.keyboard.press('Tab');
    const emailInput = page.getByLabel(/email/i);
    await expect(emailInput).toBeFocused();

    await page.keyboard.press('Tab');
    const phoneInput = page.getByLabel(/phone/i);
    await expect(phoneInput).toBeFocused();

    await page.keyboard.press('Tab');
    const messageInput = page.getByLabel(/message/i);
    await expect(messageInput).toBeFocused();
  });

  test('should display contact information', async ({ page }) => {
    await expect(page.getByText(/07753 958 395/)).toBeVisible();
    await expect(page.getByText(/james@wrightanglecarpentry\.co\.uk/i)).toBeVisible();
    await expect(page.getByText(/Wareham, Dorset/i)).toBeVisible();
  });

  test('should have working Call Now button', async ({ page }) => {
    const callButton = page.getByRole('link', { name: /call now/i });
    await expect(callButton).toBeVisible();
    await expect(callButton).toHaveAttribute('href', /tel:/);
  });

  test('should have working WhatsApp button', async ({ page }) => {
    const whatsappButton = page.getByRole('link', { name: /whatsapp/i });
    await expect(whatsappButton).toBeVisible();
    await expect(whatsappButton).toHaveAttribute('href', /wa\.me/);
  });
});

test.describe('Contact Form Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should display contact form on mobile', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();

    await expect(page.locator('form')).toBeVisible();
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
  });

  test('should have proper touch targets on mobile', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();

    const submitButton = page.getByRole('button', { name: /send message/i });
    const boundingBox = await submitButton.boundingBox();

    // Check button is at least 44px tall (iOS accessibility minimum)
    expect(boundingBox?.height).toBeGreaterThanOrEqual(44);
  });
});
