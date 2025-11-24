# 🧪 Testing Guide

**Project:** Wright Angle Carpentry Website
**Testing Stack:** Vitest + Testing Library + Playwright
**Methodology:** Test-Driven Development (TDD) - MANDATORY

---

## 🎯 Testing Philosophy

**ALL code changes MUST follow Test-Driven Development (TDD):**

### TDD Cycle (RED-GREEN-REFACTOR)
1. **RED** — Write a failing test first
2. **GREEN** — Write minimal code to pass the test
3. **REFACTOR** — Clean up code while keeping tests green

**CRITICAL:** Never write implementation code without a test first. No exceptions.

---

## 📁 Test Organization

```
src/
├── test/
│   ├── setup.ts                 # Global test setup
│   ├── helpers/
│   │   └── renderWithProviders.tsx  # Custom render utility
│   └── mockData/
│       ├── index.ts             # Export all mocks
│       ├── mockSiteData.ts      # Mock business data
│       ├── mockServices.ts      # Mock services
│       ├── mockGallery.ts       # Mock gallery images
│       └── mockTestimonials.ts  # Mock testimonials
├── components/
│   └── common/
│       ├── Container.tsx
│       └── __tests__/
│           └── Container.test.tsx
├── sections/
│   └── Hero.tsx
│       └── __tests__/
│           └── Hero.test.tsx
└── lib/
    └── seo.ts
        └── __tests__/
            └── seo.test.ts
```

**Convention:** Test files live in `__tests__/` directories alongside the code they test.

---

## 🧰 Testing Utilities

### Custom Render Helper
Import from `@/test/helpers/renderWithProviders` for consistent testing:

```typescript
import { render, screen } from '@/test/helpers/renderWithProviders';

test('renders component', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

**Benefits:**
- Wraps components with any necessary providers
- Re-exports all Testing Library utilities
- Includes `userEvent` for user interactions
- Provides consistent testing environment

### Mock Data
Import from `@/test/mockData` for realistic test data:

```typescript
import { mockSiteData, mockServices } from '@/test/mockData';

test('displays site name', () => {
  render(<Header siteName={mockSiteData.name} />);
  expect(screen.getByText('Test Carpentry Co')).toBeInTheDocument();
});
```

**Available Mocks:**
- `mockSiteData` — Business information
- `mockService` / `mockServices` — Service data
- `mockGalleryImage` / `mockGalleryImages` — Gallery images
- `mockTestimonial` / `mockTestimonials` — Client testimonials

---

## 📝 Writing Component Tests

### Testing Library Best Practices

✅ **DO: Test user-visible behavior**
```typescript
// Good: Tests what users see and do
test('user can submit form', async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  await user.type(screen.getByLabelText(/name/i), 'John');
  await user.type(screen.getByLabelText(/email/i), 'john@example.com');
  await user.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByText(/thank you/i)).toBeInTheDocument();
});
```

❌ **DON'T: Test implementation details**
```typescript
// Bad: Tests internal state/structure
test('sets state correctly', () => {
  const { container } = render(<MyComponent />);
  expect(container.querySelector('.some-class')).toBeTruthy();
});
```

### Query Priority
Follow Testing Library's query priority:

1. **Accessible queries (prefer these):**
   - `getByRole` — Buttons, links, headings, etc.
   - `getByLabelText` — Form fields
   - `getByText` — Non-interactive text
   - `getByAltText` — Images

2. **Semantic queries:**
   - `getByTestId` — Only when accessibility queries don't work

**Example:**
```typescript
// ✅ Good: Uses accessible queries
const heading = screen.getByRole('heading', { name: /services/i });
const submitButton = screen.getByRole('button', { name: /submit/i });
const nameField = screen.getByLabelText(/name/i);

// ❌ Bad: Uses test IDs unnecessarily
const heading = screen.getByTestId('services-heading');
```

---

## 🎭 Component Testing Patterns

### Pattern 1: Rendering Tests
Test that components render without crashing:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/helpers/renderWithProviders';
import { Container } from '../Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <p>Test content</p>
      </Container>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
```

### Pattern 2: Props Testing
Test that props are applied correctly:

```typescript
it('applies custom className', () => {
  const { container } = render(
    <Container className="custom-class">
      <p>Content</p>
    </Container>
  );

  expect(container.firstChild).toHaveClass('custom-class');
});
```

### Pattern 3: User Interaction Testing
Test user interactions with userEvent:

```typescript
import { userEvent } from '@/test/helpers/renderWithProviders';

it('calls onClick when button clicked', async () => {
  const handleClick = vi.fn();
  const user = userEvent.setup();

  render(<Button onClick={handleClick}>Click me</Button>);

  await user.click(screen.getByRole('button', { name: /click me/i }));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Pattern 4: Async Testing
Test async operations:

```typescript
it('displays data after loading', async () => {
  render(<DataComponent />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for async operation
  expect(await screen.findByText(/data loaded/i)).toBeInTheDocument();
});
```

### Pattern 5: Accessibility Testing
Test accessibility attributes:

```typescript
it('has accessible labels', () => {
  render(<ContactForm />);

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email');
});

it('maintains keyboard navigation', () => {
  render(<Header />);

  const skipLink = screen.getByText(/skip to content/i);
  expect(skipLink).toHaveAttribute('href', '#main-content');
});
```

---

## 🧪 Utility Function Testing

Test pure functions directly:

```typescript
import { describe, it, expect } from 'vitest';
import { formatPhoneNumber } from '../utils';

describe('formatPhoneNumber', () => {
  it('formats UK phone numbers correctly', () => {
    expect(formatPhoneNumber('+447700900000')).toBe('07700 900 000');
  });

  it('handles empty input', () => {
    expect(formatPhoneNumber('')).toBe('');
  });

  it('handles invalid input', () => {
    expect(formatPhoneNumber('invalid')).toBe('invalid');
  });
});
```

**Best Practices:**
- Test happy path (valid input)
- Test edge cases (empty, null, undefined)
- Test error conditions
- Test boundary values

---

## 🎬 E2E Testing with Playwright

E2E tests live in `e2e/` directory and test full user journeys:

```typescript
import { test, expect } from '@playwright/test';

test('user can submit contact form', async ({ page }) => {
  // Navigate to page
  await page.goto('/');

  // Fill out form
  await page.fill('[name="name"]', 'John Smith');
  await page.fill('[name="email"]', 'john@example.com');
  await page.fill('[name="message"]', 'Test message');

  // Submit form
  await page.click('button[type="submit"]');

  // Verify success
  await expect(page.getByText(/message sent/i)).toBeVisible();
});
```

**When to use E2E tests:**
- Critical user journeys (contact form, navigation)
- Multi-step flows
- Browser-specific behavior
- Integration between frontend and backend

---

## 🚀 Running Tests

### Local Development
```bash
# Run tests in watch mode (TDD workflow)
make test
npm run test

# Run tests once
make test-unit
npm run test:unit

# Run with UI (interactive)
npm run test:unit:ui

# Run E2E tests
make test-e2e
npm run test:e2e
```

### Coverage
```bash
# Run with coverage
make test-ci
npm run test:coverage

# Save baseline before feature work
make baseline-coverage

# Open coverage report
make coverage
```

### CI Pipeline
```bash
# Run all CI checks (type-check + lint + test)
make ci
```

---

## 📊 Coverage Requirements

**Phase 5 Targets:**
- Overall coverage: ≥ 80%
- Component coverage: ≥ 80%
- Utility coverage: ≥ 90%
- Critical path coverage: 100%

**No coverage regression allowed** — Always check coverage before committing:
```bash
make baseline-coverage  # Before starting work
# ... make changes ...
make test-ci            # Compare with baseline
```

---

## ✅ TDD Workflow Example

**Scenario:** Add a new `Badge` component

### Step 1: Write the test FIRST (RED)
```typescript
// src/components/ui/__tests__/Badge.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/helpers/renderWithProviders';
import { Badge } from '../Badge';

describe('Badge', () => {
  it('renders with text', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    render(<Badge variant="success">Success</Badge>);
    const badge = screen.getByText('Success');
    expect(badge).toHaveClass('bg-green-100');
  });
});
```

**Run test:** Should fail ❌ (component doesn't exist yet)

### Step 2: Write minimal code (GREEN)
```typescript
// src/components/ui/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const className = variant === 'success' ? 'bg-green-100' : 'bg-gray-100';
  return <span className={className}>{children}</span>;
}
```

**Run test:** Should pass ✅

### Step 3: Refactor (REFACTOR)
```typescript
// Improve with cn() utility and better styling
export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={cn(
      'px-2 py-1 rounded text-sm',
      variant === 'success' && 'bg-green-100 text-green-800',
      variant === 'default' && 'bg-gray-100 text-gray-800'
    )}>
      {children}
    </span>
  );
}
```

**Run test:** Should still pass ✅

---

## 🐛 Debugging Tests

### View test output
```bash
npm run test:unit:ui  # Interactive UI
```

### Debug in VS Code
Add to `.vscode/launch.json`:
```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Vitest Tests",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run", "test"],
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen"
}
```

### Common Issues

**Issue:** "Can't find module '@/...'"
- **Solution:** Check `tsconfig.json` and `vitest.config.ts` have path alias configured

**Issue:** "Element not found in document"
- **Solution:** Use `screen.debug()` to see rendered output
- Check query is correct (case-sensitive)
- Use `findBy` for async elements

**Issue:** "userEvent is not a function"
- **Solution:** Import from helpers: `import { userEvent } from '@/test/helpers/renderWithProviders'`
- Setup userEvent: `const user = userEvent.setup()`

---

## 📚 Resources

- [Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest Docs](https://vitest.dev/)
- [Playwright Docs](https://playwright.dev/)
- [Testing Library Query Priority](https://testing-library.com/docs/queries/about/#priority)
- [Common Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

## 🎓 Testing Principles

1. **Test behavior, not implementation**
2. **Write tests before code (TDD)**
3. **Keep tests simple and focused**
4. **Use descriptive test names**
5. **Test one thing per test**
6. **Avoid testing internal state**
7. **Make tests deterministic (no randomness)**
8. **Keep tests fast**

---

**Remember:** Tests are documentation. Write them as if explaining the feature to another developer.

---

**Last Updated:** October 31, 2025
**Version:** 1.0 (Phase 5 - Testing Infrastructure)
