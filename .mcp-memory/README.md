# MCP Memory System

This directory contains the memory and context systems for AI-assisted development.

## 📁 Files in This Directory

| File | Purpose | Managed By |
|------|---------|------------|
| `memory.md` | Your personal coding preferences and workflow rules | Manual (you) |
| `context7-strategy.md` | Comprehensive guide on using Context7 with memory systems | Manual (you) |
| `QUICK-REFERENCE.md` | Quick reference card for daily use | Manual (you) |
| `README.md` | This file - overview of the memory system | Manual (you) |

## 📊 Complete Memory Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   AI Assistance Layer                        │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│   Context7   │   │  MCP Memory  │   │   Personal   │
│     MCP      │   │    Server    │   │    Memory    │
├──────────────┤   ├──────────────┤   ├──────────────┤
│  Research    │   │  Knowledge   │   │   Personal   │
│  Assistant   │   │    Base      │   │   Rulebook   │
├──────────────┤   ├──────────────┤   ├──────────────┤
│ @upstash/    │   │   memory.    │   │  memory.md   │
│ context7-mcp │   │    json      │   │  (this dir)  │
├──────────────┤   ├──────────────┤   ├──────────────┤
│ Real-time    │   │ Structured   │   │   Coding     │
│ code lookup  │   │ entities &   │   │   style &    │
│ & analysis   │   │  relations   │   │  workflow    │
└──────────────┘   └──────────────┘   └──────────────┘
```

## 🎯 Three-Tier System

### Tier 1: Context7 MCP (Real-Time Research)
- **What:** Context-aware code understanding
- **When to use:** Understanding existing code, finding docs, analyzing patterns
- **Storage:** No permanent storage (ephemeral)
- **Example:** "Use Context7 to show me how Gallery.tsx works"

### Tier 2: MCP Memory Server (Project Knowledge)
- **What:** Structured entity-relationship graph
- **When to use:** Recording project facts, business data, technical decisions
- **Storage:** `../memory.json` (root of project)
- **Example:** "Record in memory.json: Phase 3 completed Oct 10, 2025"

### Tier 3: Personal Memory (Your Preferences)
- **What:** Your coding style and workflow rules
- **When to use:** Recording personal preferences, development workflows
- **Storage:** `memory.md` (this directory)
- **Example:** "Update memory.md: I prefer pnpm over npm"

## 🚀 Quick Start

### For AI Assistants (at session start)
```
1. Load personal preferences from .mcp-memory/memory.md
2. Load project knowledge from memory.json
3. Use Context7 for real-time code queries as needed
```

### For Developers
```
1. Read QUICK-REFERENCE.md for daily usage
2. Read context7-strategy.md for comprehensive guide
3. Update memory.md when your preferences change
4. Let AI update memory.json for project facts
```

## 📚 Documentation Hierarchy

```
Root Level:
├── CLAUDE.md              # AI onboarding (high-level architecture)
├── README.md              # User documentation (how to use)
└── memory.json            # Project facts (entities & relations)

.mcp-memory/:
├── README.md              # This file (system overview)
├── memory.md              # Personal preferences & rules
├── context7-strategy.md   # Integration guide (comprehensive)
└── QUICK-REFERENCE.md     # Daily usage cheat sheet

.cursor/:
└── mcp.json               # MCP server configuration
```

## 🔄 Typical Workflow

### Starting a Session
```
AI: *Loads memory.md for your preferences*
AI: *Loads memory.json for project context*
You: "Let's add dark mode to the site"
AI: *Uses Context7 to understand current theme setup*
AI: *Follows your PRD-driven workflow from memory.md*
```

### During Development
```
You: "Use Context7 to show me all React.lazy usage"
AI: *Analyzes codebase with Context7*
AI: "Found 3 lazy-loaded components: Gallery, Testimonials, Contact"

You: "Great. Record the lazy-loading pattern in memory.json"
AI: *Updates memory.json with architecture pattern*
```

### Ending a Session
```
You: "We're done"
AI: *Follows Git workflow from memory.md*
AI: *Updates memory.json with session outcomes*
AI: *Creates PR with summary*
```

## 💾 Backup Strategy

### Weekly (Automated)
```bash
# Add to .git/hooks/pre-commit
cp memory.json memory.json.backup
cp .mcp-memory/memory.md .mcp-memory/memory.md.backup
```

### Monthly (Manual)
```bash
# Archive to git
git add memory.json .mcp-memory/
git commit -m "chore: backup memory systems"
```

### Before Major Changes
```bash
# Create snapshot
tar -czf memory-backup-$(date +%Y%m%d).tar.gz memory.json .mcp-memory/
```

## 🧪 Validation

### Check Memory Integrity
```bash
# Validate memory.json structure
node -e "JSON.parse(require('fs').readFileSync('memory.json'))"

# Check all files exist
ls -l ../memory.json memory.md context7-strategy.md QUICK-REFERENCE.md

# Verify MCP config
cat ../.cursor/mcp.json | jq '.mcpServers'
```

### Memory Health Check (Monthly)
1. Review memory.json entities for accuracy
2. Remove outdated observations
3. Verify relations are still valid
4. Update memory.md with lessons learned
5. Backup both files to git

## 🛠️ Troubleshooting

### Context7 Not Working
- Restart Cursor to reload MCP servers
- Check `.cursor/mcp.json` has context7 entry
- Verify internet connection

### Memory.json Corrupted
- Restore from `memory.json.backup`
- Validate JSON syntax
- Rebuild from git history if needed

### Lost Context Between Sessions
- Start with "Load my memories"
- Check memory.json has recent observations
- Update memory.md with new preferences

## 📖 Further Reading

- **Daily Usage:** `QUICK-REFERENCE.md`
- **Full Strategy:** `context7-strategy.md`
- **Project Docs:** `../CLAUDE.md`
- **User Guide:** `../README.md`
- **MCP Docs:** https://modelcontextprotocol.io/

## 🎓 Golden Rules

1. **Context7 = Research** (understand code, don't store)
2. **memory.json = Facts** (record project decisions)
3. **memory.md = Preferences** (record your style)
4. **Start every session** with "Load my memories"
5. **End every session** with updates to memory.json
6. **Backup weekly** to git
7. **Review monthly** for accuracy

---

**System Status:** ✅ Active (October 10, 2025)

**Components:**
- ✅ Context7 MCP configured
- ✅ MCP Memory Server configured
- ✅ Personal memory documented
- ✅ Integration strategy defined
- ✅ Quick reference created

**Next Steps:**
1. Use QUICK-REFERENCE.md for daily work
2. Follow context7-strategy.md for optimal usage
3. Update memory.json as project evolves
4. Backup memory systems weekly
