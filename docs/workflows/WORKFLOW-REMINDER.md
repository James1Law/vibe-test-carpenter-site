# ⚠️ WORKFLOW REMINDER FOR EVERY NEW TASK

**CRITICAL:** Read this BEFORE starting any new task!

---

## 🚫 NEVER Commit Directly to Main

**Wrong:** ❌
```bash
git checkout main
# ... make changes ...
git commit -m "changes"
git push origin main
```

**Correct:** ✅
```bash
# 1. ALWAYS create feature branch FIRST
git checkout -b feature/descriptive-name

# 2. Make changes, commit frequently
git add .
git commit -m "feat: description"

# 3. Push feature branch
git push -u origin feature/descriptive-name

# 4. Create PR when done
# 5. Review, then merge to main
```

---

## 📋 Feature Branch Naming Convention

Use descriptive names following this pattern:

**Format:** `type/description`

**Types:**
- `feature/` — New features (feature/phase-5-testing)
- `fix/` — Bug fixes (fix/header-alignment)
- `test/` — Adding tests (test/component-coverage)
- `docs/` — Documentation only (docs/update-readme)
- `refactor/` — Code refactoring (refactor/clean-utils)
- `chore/` — Maintenance (chore/update-deps)

**Examples:**
```bash
git checkout -b feature/phase-5-testing
git checkout -b test/add-logo-tests
git checkout -b fix/mobile-navigation
git checkout -b docs/testing-guide
```

---

## ✅ Proper Task Workflow

### Before Starting ANY Task:

```bash
# 1. Ensure on main and up to date
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/task-name

# 3. Verify you're on feature branch (should show * feature/task-name)
git branch
```

### During Task Work:

```bash
# Save baseline coverage (for TDD)
make baseline-coverage

# ... make changes following TDD ...

# Commit frequently with clear messages
git add .
git commit -m "test: add Container tests"

# ... continue working ...

git add .
git commit -m "test: add Section tests"
```

### When Task Complete:

```bash
# 1. Run all checks
make ci

# 2. Compare coverage with baseline
make test-ci
# Check: No regression, ideally improvement

# 3. Clean up baseline file
rm baseline-coverage.txt

# 4. Push feature branch to GitHub
git push -u origin feature/task-name

# 5. Create Pull Request
gh pr create --title "feat: Task Description" \
             --body "Detailed description of changes"

# OR use GitHub website:
# https://github.com/James1Law/vibe-test-carpenter-site/pulls

# 6. Review PR (self-review or AI review)

# 7. Merge when satisfied
```

### After Merge:

```bash
# 1. Switch back to main
git checkout main

# 2. Pull merged changes
git pull origin main

# 3. Verify everything works
make ci

# 4. Delete local feature branch (optional)
git branch -d feature/task-name
```

---

## 🎯 Next Task Checklist

Before starting next task (T30-2, T30-3, etc.):

- [ ] On main branch: `git checkout main`
- [ ] Pull latest: `git pull origin main`
- [ ] Create feature branch: `git checkout -b feature/phase-5-t30-2`
- [ ] Verify branch: `git branch` (should show * on feature branch)
- [ ] Save baseline: `make baseline-coverage`
- [ ] **NOW** you can start coding!

---

## 🚨 Emergency: Committed to Main by Accident

If you realize you committed to main instead of feature branch:

```bash
# 1. Create feature branch from current position
git checkout -b feature/branch-name

# 2. Push it
git push -u origin feature/branch-name

# 3. Reset main to previous commit
git checkout main
git reset --hard HEAD~1  # or use commit hash

# 4. Force push corrected main (CAREFUL!)
git push origin main --force

# 5. Go back to feature branch
git checkout feature/branch-name
```

**Note:** Only use `--force` if you're the only developer!

---

## 📖 Why This Matters

**Feature branches:**
- ✅ Keep main stable (always deployable)
- ✅ Allow code review before merging
- ✅ Create Vercel preview deployments
- ✅ Run CI checks before production
- ✅ Enable collaboration and discussion
- ✅ Easy to abandon if experiment fails

**Direct commits to main:**
- ❌ No code review
- ❌ No CI validation before production
- ❌ Harder to rollback
- ❌ Can break production
- ❌ No preview deployment

---

## 🎓 Learning Resources

**Your project docs:**
- `.mcp-memory/memory.md` — Git & PR Workflow section
- `docs/PROJECT-STATUS.md` — Development workflow
- `docs/TESTING.md` — Testing workflow

**External:**
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

---

## 💡 Quick Tips

- **Branch names:** Use kebab-case (dashes), lowercase
- **Commit messages:** Use conventional commits (feat:, fix:, test:, docs:)
- **Commit frequency:** Commit often, small logical chunks
- **PR size:** Smaller PRs = easier review = faster merge
- **CI checks:** Always passing before merge

---

**Remember:** Feature branches are your friend! Create them early, push them often, merge when ready.

---

**Last Updated:** October 31, 2025
**Lesson Learned:** T30-1 committed directly to main (won't happen again!)
