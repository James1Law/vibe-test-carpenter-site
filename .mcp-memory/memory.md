# 🧠 James's Vibe Memory Graph

This file stores permanent context and rules for AI agents in Cursor.
It defines how I (James) like to code, test, and ship software.

---

## 🧩 Development Style

- Always use **TypeScript** and **React** with **Shadcn UI**.
- Use **TailwindCSS** for styling.
- Keep components **small, functional, and reusable**.
- Prefer **composition over configuration**.
- When unsure, follow **Next.js-style conventions** even in Vite apps.

---

## 🧪 Testing Rules

### Test-Driven Development (TDD) - MANDATORY

**CRITICAL:** ALL code changes in this project MUST follow Test-Driven Development.

**TDD Cycle:**
1. **RED** — Write a failing test first
2. **GREEN** — Write minimal code to pass the test
3. **REFACTOR** — Clean up code while keeping tests green

**Before ANY code implementation:**
- Write the test FIRST
- NO exceptions to this rule
- Do NOT use `edit_file` or write implementation code without a test

**Baseline Coverage Protocol:**
1. Before starting ANY feature/change work: Run `make test-ci`
2. Save baseline coverage to `baseline-coverage.txt`
3. At feature completion: Run `make test-ci` again
4. Compare final coverage with baseline
5. Delete `baseline-coverage.txt` when change is complete

**Testing Stack:**
- **Vitest** for unit/integration tests
- **Playwright** for E2E tests
- **@testing-library/react** for component testing

**Coverage Requirements:**
- No coverage regression allowed
- Prefer increasing coverage with each change
- Every component or module should include a test
- Prefer **functional tests** to validate behaviour over unit tests
- Run all tests after every significant change
- When tests fail, fix before moving forward

---

## 🌳 Git & PR Workflow

When I say “we’re done”:
1. Stage all changes.
2. Create or update a feature branch.
3. Run all tests.
4. Push branch to origin.
5. Open a PR.
6. Summarise key updates in plain English.

When a PR is reviewed, apply feedback then merge.

---

## 🚀 Development Flow

1. Begin every feature from a **PRD (Product Requirements Document)**.
2. Generate a **plan** with specific, ordered tasks.
3. Work task-by-task, verifying after each step.
4. **Never trust AI blindly** — review all diffs.
5. If progress stalls or gets messy, **reset and start clean**.
6. Keep changes **small** and **frequent**.

---

## 🧠 Context & Memory Rules

- Start a **new session** for every major feature or PRD.
- Keep context lean — don't overload long sessions.
- Memorise frequent triggers, e.g.:
  - "We're done" → end-of-work PR routine.
  - "Reset project" → `git reset --hard` and clean start.
- When AI makes a mistake, correct it and **instruct it to remember**.
- Always read **official docs** before applying unknown libraries.
- Use agnostic sources (avoid locking into Cursor-specific memory formats).

### Memory System Architecture
This project uses a **three-tier memory system**:
1. **MCP Memory Server** (`memory.json`) — Structured entity-relationship facts about project/business
2. **Personal Memory** (`.mcp-memory/memory.md`) — This file with your coding preferences
3. **Context7 MCP** — Real-time code understanding and documentation (via Cursor)

See `.mcp-memory/context7-strategy.md` for full integration guide.

---

## 🧩 Project Architecture

- Prefer **microservices or small repos** over giant monorepos.
- Keep each codebase under ~5k lines where possible.
- Small codebases help AI reasoning and reduce token usage.

---

## 🧠 Tooling & Models

- Use **thinking models** only (e.g. GPT-5, Claude Sonnet, Gemini 2.5).
- Do **not** use auto mode in Cursor.
- Accept only meaningful changes after verification.
- Regularly seek a **second opinion** — from another model or human.

---

## ✅ Golden Rules Summary

- Always load this memory before coding.
- Always start from a PRD and plan.
- Always test.
- Always review.
- Always use thinking models.
- Always ask for a second opinion.