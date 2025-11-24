# Claude Code Skills

This directory contains custom skills for Claude Code.

## What are Skills?

Skills are reusable AI capabilities that can be invoked during conversations. They're similar to commands but more powerful, with access to tools and the ability to perform complex multi-step tasks.

## How to Add Skills

1. Create a new `.md` file in this directory
2. Define the skill's frontmatter (name, description, tools)
3. Write the skill's instructions

Example frontmatter:
```yaml
---
name: my-skill
description: Brief description of what this skill does
tools: Read, Write, Bash
---
```

## Current Skills

(None yet - we'll add skills as needed)

## Agents vs Skills

**Agents** (in `.claude/agents/`):
- Launched as subprocesses for complex, multi-step tasks
- Have their own context and tool access
- Use for: complex implementations, research tasks, refactoring
- Examples: frontend-developer, ui-designer

**Skills**:
- Execute within the main conversation
- Provide specialized capabilities inline
- Use for: focused tasks, utilities, quick operations
- Faster execution for simpler tasks

## Resources

- [Claude Code Documentation](https://docs.claude.ai/claude-code)
- [Agent SDK Documentation](https://github.com/anthropics/claude-code)
