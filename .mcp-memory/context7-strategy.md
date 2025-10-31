# Context7 MCP Integration Strategy

This document outlines how to use Context7 MCP wisely alongside the existing memory systems in this project.

## Memory System Architecture

This project uses a **three-tier memory system**:

### 1. **MCP Memory Server** (`memory.json`)
- **Purpose:** Structured entity-relationship graph for project facts
- **Managed by:** `@modelcontextprotocol/server-memory` MCP server
- **Content:** Business data, technical stack, project phases, relationships
- **Format:** JSON with entities and relations
- **When to use:** Recording factual information about the project, business, or technical decisions

### 2. **Personal Memory** (`.mcp-memory/memory.md`)
- **Purpose:** Your coding preferences, workflows, and rules
- **Managed by:** Manual (you)
- **Content:** Development style, testing rules, Git workflow, golden rules
- **Format:** Markdown
- **When to use:** Recording personal preferences, workflows, and operational rules

### 3. **Context7 MCP** (via Cursor integration)
- **Purpose:** Context-aware code understanding and documentation
- **Managed by:** `@upstash/context7-mcp` MCP server
- **Content:** Real-time code context, documentation retrieval, pattern recognition
- **When to use:** Understanding existing code, finding documentation, analyzing patterns

---

## How to Use Context7 Wisely

### ✅ Best Use Cases for Context7

1. **Code Exploration**
   - Understanding unfamiliar code patterns
   - Finding related code across the project
   - Discovering how features are implemented

2. **Documentation Lookup**
   - Finding official docs for libraries (React, Vite, TailwindCSS, Shadcn)
   - Understanding API usage patterns
   - Checking best practices

3. **Pattern Recognition**
   - Identifying architectural patterns in the codebase
   - Finding similar implementations for consistency
   - Detecting anti-patterns or code smells

4. **Dependency Analysis**
   - Understanding how components depend on each other
   - Tracking data flow through the application
   - Identifying tight coupling

### ❌ Don't Use Context7 For

1. **Storing Personal Preferences** → Use `.mcp-memory/memory.md` instead
2. **Recording Project Facts** → Use `memory.json` (MCP Memory Server) instead
3. **Making Code Changes** → Context7 is for understanding, not modifying
4. **Replacing Documentation** → Use `CLAUDE.md` and `README.md` for project docs

---

## Integration Workflow

### When Starting a New Session

1. **AI loads personal memory** from `.mcp-memory/memory.md`
2. **AI loads project facts** from `memory.json` (via MCP Memory Server)
3. **AI uses Context7** for real-time code understanding as needed

### When Exploring Code

```
You: "How does the contact form submission work?"
AI: *Uses Context7 to trace code flow*
    → Reads Contact.tsx
    → Follows API call to /api/sendEmail
    → Explains the Resend integration
```

### When Recording New Information

**New Fact About Business/Project:**
```
You: "Remember that we verified the Resend domain on Oct 10, 2025"
AI: *Updates memory.json with new observation*
```

**New Personal Preference:**
```
You: "I prefer to use Biome over ESLint for new projects"
AI: *Updates .mcp-memory/memory.md with new preference*
```

**Documentation Lookup (no storage needed):**
```
You: "How do I use React.lazy with TypeScript?"
AI: *Uses Context7 to find docs, provides answer, doesn't store*
```

---

## Memory Maintenance Rules

### Weekly Review (every Friday)
- Review `memory.json` entities for accuracy
- Update observations with new project milestones
- Verify all relations are still valid

### Monthly Cleanup (first of month)
- Archive completed project phases
- Remove outdated observations
- Consolidate duplicate information

### Before Major Releases
- Document all architectural decisions in `memory.json`
- Update `.mcp-memory/memory.md` with lessons learned
- Create snapshot of current memory state

---

## Context7 Commands

### Useful Prompts for Context7

**Architecture Analysis:**
```
"Use Context7 to analyze the component architecture and show me the dependency graph"
```

**Pattern Search:**
```
"Use Context7 to find all places where we use React.lazy in the codebase"
```

**Documentation:**
```
"Use Context7 to find the latest Vite 6 documentation on code-splitting"
```

**Impact Analysis:**
```
"Use Context7 to show what would be affected if I change the contactSchema"
```

---

## Integration with Existing Systems

### CLAUDE.md (Project Documentation)
- **Purpose:** Onboarding guide for AI agents
- **Relationship to Context7:** Context7 reads CLAUDE.md to understand project structure
- **Don't duplicate:** Keep CLAUDE.md high-level, let Context7 handle code-level details

### README.md (User Documentation)
- **Purpose:** Setup instructions and user guide
- **Relationship to Context7:** Context7 uses README for understanding workflows
- **Don't duplicate:** Keep README focused on "how to use", not "how it works"

### memory.json (Structured Facts)
- **Purpose:** Persistent entity-relationship graph
- **Relationship to Context7:** Context7 can reference memory.json for project facts
- **Update together:** When Context7 discovers new patterns, record them in memory.json

### .mcp-memory/memory.md (Personal Rules)
- **Purpose:** Your coding style and preferences
- **Relationship to Context7:** Context7 doesn't modify this, but AI reads it for guidance
- **Keep stable:** Only update when your preferences genuinely change

---

## Example Integration Session

### Scenario: Adding Dark Mode Toggle

**Step 1: Load Memories**
```
AI: *Loads memory.md → knows your preference for small, functional components*
AI: *Loads memory.json → knows project uses next-themes and TailwindCSS*
```

**Step 2: Use Context7 for Research**
```
AI: *Uses Context7 to find how next-themes is currently configured*
AI: *Uses Context7 to check TailwindCSS dark mode setup in tailwind.config.ts*
```

**Step 3: Plan Implementation**
```
AI: Creates plan following your PRD-driven approach (from memory.md)
    1. Create DarkModeToggle component
    2. Add to Header
    3. Test toggle functionality
    4. Verify accessibility
```

**Step 4: Record Outcome**
```
AI: *Updates memory.json with new entity for dark mode feature*
AI: *Records observation: "Dark mode toggle added using next-themes, Oct 10 2025"*
```

---

## Token Optimization Tips

Context7 can consume significant tokens. Use it wisely:

### ✅ Efficient
- Ask specific questions: "How does Gallery.tsx lazy load?"
- Limit scope: "Show me the validation in Contact.tsx only"
- Cache results: Once Context7 explains something, record it in memory.json

### ❌ Inefficient
- Broad questions: "Explain the entire codebase"
- Repeated lookups: Asking the same question multiple times
- Over-reliance: Using Context7 when CLAUDE.md already has the answer

---

## Troubleshooting

### Context7 Not Working
1. Check `.cursor/mcp.json` has context7 entry
2. Restart Cursor to reload MCP servers
3. Verify npx can reach @upstash/context7-mcp

### Context7 Too Slow
1. Narrow your query scope
2. Check internet connection (Context7 may fetch docs)
3. Consider caching frequently needed info in memory.json

### Memory Systems Out of Sync
1. Review memory.json and compare with actual code
2. Run git log to verify recent changes
3. Update observations with current state
4. Use Context7 to validate assumptions

---

## Summary: When to Use Each System

| System | Use For | Example |
|--------|---------|---------|
| **Context7** | Real-time code understanding | "How does the build process work?" |
| **memory.json** | Project facts and decisions | "Record that Phase 2 is complete" |
| **memory.md** | Personal preferences | "I prefer functional components" |
| **CLAUDE.md** | AI onboarding | "Here's how to develop in this repo" |
| **README.md** | User instructions | "Here's how to run the dev server" |

**Golden Rule:** Context7 is your **research assistant**, not your **memory bank**. Use it to understand, then record important findings in the appropriate memory system.
