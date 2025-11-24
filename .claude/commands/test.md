Run all quality checks for the project. This command ensures code quality before shipping.

## CHECKS TO RUN

Execute the following checks in order and report results:

### 1. TypeScript Type Check
```bash
npm run type-check
```
- Ensures no TypeScript compilation errors
- Must pass before proceeding

### 2. ESLint Check
```bash
npm run lint
```
- Checks code style and potential issues
- Must pass before proceeding

### 3. Vitest Unit Tests
```bash
npm run test
```
- Runs all unit and component tests
- Must pass before proceeding

### 4. Playwright E2E Tests (Optional)
```bash
npm run test:e2e
```
- Runs end-to-end browser tests
- Only run if specifically requested or for UI changes
- Can be skipped for small non-UI changes

## REPORTING RESULTS

After running checks, provide a summary:

```
✅ Type Check: PASSED
✅ Lint: PASSED
✅ Unit Tests: PASSED (15 tests, 0 failures)
❌ E2E Tests: FAILED (2 tests failed)

Failed E2E Tests:
- contact-form.spec.ts: "should submit form successfully"
- contact-form.spec.ts: "should show success message"

Error Details:
[Show relevant error output]
```

## WHAT TO DO IF CHECKS FAIL

### Type Check Fails
- Review TypeScript errors
- Fix type issues before proceeding
- Re-run `npm run type-check`

### Lint Fails
- Try `npm run lint:fix` to auto-fix
- Manually fix remaining issues
- Re-run `npm run lint`

### Tests Fail
- Review test failures carefully
- Fix the code or update tests if specs changed
- Re-run tests until all pass
- NEVER skip failing tests

## WHEN TO USE THIS COMMAND

- ✅ Before creating a PR (`/ship`)
- ✅ After completing a task
- ✅ After making significant code changes
- ✅ Before merging branches
- ✅ When requested by user

## IMPORTANT

- All checks must PASS before shipping
- Do not proceed if tests fail - fix them first
- Report failures clearly with actionable information
- If E2E tests take too long, ask user if they want to skip
