You are starting a new task from the PRD. Follow this workflow exactly:

## WORKFLOW

### 1. Load Memories
- Load personal preferences from `.mcp-memory/memory.md`
- Load project facts from `memory.json` (via MCP Memory Server)
- Confirm you understand the project context

### 2. Identify the Task
- Ask the user which PRD they want to work from (if not specified)
- Ask which specific task ID (e.g., T22, T25) they want to tackle
- Read the relevant PRD section from `docs/` folder

### 3. Use Context7 for Code Understanding
- Use Context7 MCP to understand the current implementation
- Identify files that need to be modified
- Understand dependencies and potential impact
- Report findings to the user

### 4. Create Task Plan
- Use TodoWrite to create a detailed task list
- Break down the task into specific, actionable steps
- Include testing steps in the plan
- Estimate time for each step if possible

### 5. Wait for Confirmation
- Present the plan to the user
- Wait for explicit confirmation before proceeding
- If user requests changes, update the plan

### 6. Begin Implementation
- Only start coding after user confirms the plan
- Follow the user's coding preferences from `memory.md`
- Mark todos as in_progress → completed as you work
- Run type-check after each file modification

## IMPORTANT RULES

- ✅ Always use Context7 before modifying unfamiliar code
- ✅ Always create a task plan with TodoWrite
- ✅ Always wait for user confirmation
- ✅ Follow PRD acceptance criteria exactly
- ✅ Never skip the planning phase
- ❌ Never start coding without a confirmed plan
- ❌ Never modify code without understanding it first

## EXAMPLE USAGE

```
User: /start-task T22
AI: Loading memories...
AI: Reading PRD-Phase-4B.md for task T22...
AI: Using Context7 to understand current services implementation...
AI: Creating task plan with TodoWrite...
AI: [Presents detailed plan]
AI: Ready to proceed? (waiting for confirmation)
```

Be thorough, methodical, and always prioritize understanding before implementation.
