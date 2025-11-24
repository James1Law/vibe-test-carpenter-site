# Quick Reference: Memory System Usage

## 🎯 When to Use Each System

### Use Context7 When:
- ✅ "How does [feature] work in this codebase?"
- ✅ "Find all places where we use [pattern]"
- ✅ "Show me the React Hook Form documentation"
- ✅ "What would break if I change [file]?"
- ✅ "Analyze the component dependency graph"

### Update memory.json When:
- ✅ "Remember that we completed Phase 3 on [date]"
- ✅ "Record that we're using Stripe for payments"
- ✅ "Note that the domain was verified today"
- ✅ "Add relation between [component] and [service]"
- ✅ "Update business hours to [new schedule]"

### Update memory.md When:
- ✅ "From now on, I prefer Biome over ESLint"
- ✅ "Remember to always run Playwright tests before committing"
- ✅ "I want to use pnpm instead of npm"
- ✅ "Add rule: never use default exports"
- ✅ "Update workflow: always create PRD first"

---

## 🚀 Quick Commands

### Context7 Exploration
```
"Use Context7 to show me how the contact form validates input"
"Use Context7 to find the Vite 6 documentation on code-splitting"
"Use Context7 to analyze what depends on src/data/site.ts"
```

### Memory Recording
```
"Remember in memory.json: We migrated to TypeScript 5.6 on Oct 10, 2025"
"Add to memory.json: New entity for analytics integration with Plausible"
"Update my memory.md: I prefer kebab-case for file names"
```

### Combined Workflow
```
"Use Context7 to understand how Gallery.tsx works, then record the architecture pattern in memory.json"
```

---

## 📋 File Locations

```
.cursor/mcp.json                    # MCP server configuration
memory.json                         # Structured project facts
.mcp-memory/memory.md              # Your personal rules
.mcp-memory/context7-strategy.md   # Full integration guide (this file)
.mcp-memory/QUICK-REFERENCE.md     # This quick reference
CLAUDE.md                          # AI onboarding guide
README.md                          # User documentation
```

---

## 💡 Pro Tips

1. **Start every session**: "Load my memory from memory.md and memory.json"
2. **After exploration**: "Record what we learned in memory.json"
3. **Token efficiency**: Ask Context7 specific questions, not "explain everything"
4. **Weekly cleanup**: Review memory.json entities for accuracy
5. **Before major changes**: Backup memory.json to git

---

## ⚠️ Common Mistakes

| ❌ Don't | ✅ Do Instead |
|---------|--------------|
| "Context7, remember this pattern" | "Record this pattern in memory.json" |
| "Add to memory.json: I prefer async/await" | "Add to memory.md: I prefer async/await" |
| "Context7, what's my Git workflow?" | "Read my memory.md for Git workflow" |
| Ask Context7 the same question twice | Record the answer in memory.json first time |

---

## 🔄 Session Workflow

### 1. Session Start
```
AI: *Loads .mcp-memory/memory.md*
AI: *Loads memory.json via MCP Memory Server*
AI: *Context7 ready for on-demand queries*
```

### 2. During Work
```
You: "Use Context7 to understand the email integration"
AI: *Uses Context7 to trace code*
AI: "The /api/sendEmail endpoint uses Resend..."

You: "Record that in memory.json"
AI: *Updates memory.json with Resend integration details*
```

### 3. Session End
```
You: "We're done"
AI: *Follows Git workflow from memory.md*
AI: *Updates memory.json with session outcomes*
```

---

## 📊 Memory Health Check

Run this monthly:

```bash
# Check memory.json is valid JSON
node -e "JSON.parse(require('fs').readFileSync('memory.json'))"

# Verify all files exist
ls -l memory.json .mcp-memory/memory.md .mcp-memory/context7-strategy.md

# Backup memories
cp memory.json memory.json.backup
cp .mcp-memory/memory.md .mcp-memory/memory.md.backup
```

---

## 🎓 Example: Adding Dark Mode

### Bad Approach ❌
```
You: "Add dark mode"
AI: *Makes changes without understanding context*
AI: *Doesn't record decision*
```

### Good Approach ✅
```
You: "Load my memories, then use Context7 to show me how next-themes is configured"
AI: *Loads memory.md and memory.json*
AI: *Uses Context7 to find next-themes usage*
AI: "Currently configured in src/App.tsx with class-based dark mode..."

You: "Great. Create a dark mode toggle following my component style from memory.md"
AI: *Creates small, functional component following your preferences*

You: "Test it, then record in memory.json that we added dark mode on Oct 10, 2025"
AI: *Runs tests, updates memory.json with new entity and observation*
```

---

## 🛠️ Troubleshooting

### Context7 Not Responding
1. Restart Cursor
2. Check `.cursor/mcp.json` has context7 entry
3. Verify internet connection

### Memory.json Corrupted
1. Restore from `memory.json.backup`
2. Validate JSON syntax
3. Rebuild from git history if needed

### Lost Context Between Sessions
1. Always start with "Load my memories"
2. Check memory.json has recent observations
3. Update memory.md with any new preferences

---

## 📚 Further Reading

- **Full Strategy Guide**: `.mcp-memory/context7-strategy.md`
- **Project Onboarding**: `CLAUDE.md`
- **User Documentation**: `README.md`
- **MCP Documentation**: https://modelcontextprotocol.io/

---

**Remember:** Context7 is your research assistant. Memory systems are your knowledge base. Use them together, but don't confuse their roles.
