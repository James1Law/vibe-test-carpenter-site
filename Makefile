.PHONY: help test test-unit test-e2e test-ci test-all coverage baseline-coverage clean type-check lint ci

# Default target
help:
	@echo "Available targets:"
	@echo "  make test              - Run unit tests in watch mode"
	@echo "  make test-unit         - Run unit tests once"
	@echo "  make test-e2e          - Run E2E tests"
	@echo "  make test-ci           - Run unit tests with coverage (for CI/baseline)"
	@echo "  make test-all          - Run all tests (unit + E2E)"
	@echo "  make coverage          - Generate coverage report"
	@echo "  make baseline-coverage - Save current coverage as baseline"
	@echo "  make type-check        - Run TypeScript type checking"
	@echo "  make lint              - Run ESLint"
	@echo "  make ci                - Run all CI checks (type-check + lint + test-ci)"
	@echo "  make clean             - Remove test artifacts and coverage"

# Run unit tests in watch mode
test:
	npm run test:unit:watch

# Run unit tests once
test-unit:
	npm run test:unit

# Run E2E tests
test-e2e:
	npm run test:e2e

# Run unit tests with coverage (for CI/baseline)
test-ci:
	npm run test:coverage
	@echo "-----------------------------------"
	@echo "Test coverage complete. To save as baseline:"
	@echo "  cp coverage/coverage-summary.json baseline-coverage.txt"

# Run all tests
test-all: test-unit test-e2e
	@echo "All tests completed"

# Generate and open coverage report
coverage:
	npm run test:coverage
	@echo "Opening coverage report..."
	@open coverage/index.html || xdg-open coverage/index.html || echo "Please open coverage/index.html manually"

# Save baseline coverage
baseline-coverage:
	@echo "Saving baseline coverage..."
	npm run test:coverage
	@cp coverage/coverage-summary.json baseline-coverage.txt
	@echo "Baseline coverage saved to baseline-coverage.txt"
	@echo ""
	@cat baseline-coverage.txt

# TypeScript type checking
type-check:
	@echo "Running TypeScript type checking..."
	npm run type-check

# Run linter
lint:
	@echo "Running ESLint..."
	npm run lint

# CI pipeline - runs all checks
ci: type-check lint test-ci
	@echo "-----------------------------------"
	@echo "✓ All CI checks passed!"
	@echo "  - TypeScript compilation: OK"
	@echo "  - ESLint: OK"
	@echo "  - Unit tests with coverage: OK"

# Clean test artifacts
clean:
	rm -rf coverage/
	rm -rf playwright-report/
	rm -rf test-results/
	rm -f baseline-coverage.txt
	@echo "Test artifacts cleaned"
