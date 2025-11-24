Complete the PR workflow following the project's Git workflow rules from `memory.md`.

## WORKFLOW

### 1. Verify All Tests Pass
- Run `/test` command first
- ✅ All checks must pass before proceeding
- ❌ If any check fails, STOP and fix the issues

### 2. Review Changes
- Run `git status` to see all changes
- Run `git diff` to review modifications
- Confirm changes are intentional and complete
- Ask user to review if uncertain

### 3. Stage Changes
- Stage all relevant files: `git add .`
- Or stage specific files if needed
- Verify staging with `git status`

### 4. Create Descriptive Commit
- Analyze all changes
- Draft commit message following this format:

```
<type>(<scope>): <short summary>

<detailed description>

<task references if applicable>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Commit types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

**Example:**
```
feat(testing): add comprehensive test infrastructure

- Install Vitest for unit tests and Playwright for E2E
- Configure Playwright MCP for automated testing
- Create example tests for contact form validation
- Add test scripts to package.json
- Secure GitHub token in .env file

Related to Phase 4B testing requirements.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### 5. Create/Push to Feature Branch
- Check current branch: `git branch --show-current`
- If on main, create feature branch: `git checkout -b feature/<task-name>`
- If on feature branch, verify it's the correct one
- Push with upstream: `git push -u origin <branch-name>`

### 6. Create Pull Request
- Use `gh pr create` to open PR
- Generate PR title and description:
  - Title: Clear, concise summary
  - Description:
    - ## Summary (bullet points)
    - ## Changes Made (file list)
    - ## Testing Done (test results)
    - ## Related Tasks (PRD references)

**Example PR Description:**
```markdown
## Summary
- Implement comprehensive testing infrastructure
- Add Vitest for unit tests and Playwright for E2E
- Configure Playwright MCP for automated testing
- Secure GitHub token using environment variables

## Changes Made
- `vitest.config.ts` - Vitest configuration
- `playwright.config.ts` - Playwright configuration
- `.cursor/mcp.json` - Add Playwright MCP server
- `src/lib/validation/__tests__/contactSchema.test.ts` - Unit tests
- `e2e/contact-form.spec.ts` - E2E tests
- `.env` - Environment variables (not committed)
- `.gitignore` - Update for test artifacts

## Testing Done
- ✅ Type check passed
- ✅ Lint passed
- ✅ 15 unit tests passing
- ✅ 12 E2E tests passing

## Related Tasks
Implements testing infrastructure for Phase 4B (T22, T25, T26)

🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

### 7. Update Memory
- Update `memory.json` with completion status
- Add observation about what was accomplished
- Record any important decisions made

### 8. Provide PR URL
- Output the PR URL for user to review
- Summarize what was accomplished
- Confirm next steps if any

## IMPORTANT RULES FROM memory.md

- ✅ Feature branches with meaningful names
- ✅ Descriptive commit messages
- ✅ Always test before shipping
- ✅ Update memory.json with outcomes
- ❌ Never force push to main
- ❌ Never skip tests
- ❌ Never commit without review

## WHEN TO USE THIS COMMAND

Use `/ship` when:
- Task is complete and tested
- Ready to create a PR
- All acceptance criteria met
- User says "we're done" or "ship it"

## EXAMPLE WORKFLOW

```
User: /ship
AI: Running /test first...
AI: ✅ All checks passed
AI: Reviewing changes...
AI: Staging files...
AI: Creating commit...
AI: Pushing to feature/testing-infrastructure...
AI: Creating PR #5...
AI: ✅ PR created: https://github.com/.../pull/5
AI: Updated memory.json with completion status
```

Be thorough and ensure quality before shipping. The PR is your chance to summarize the work clearly.
