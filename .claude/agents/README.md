# Agent Decision Tree

**Portfolio Agent Selection Guide**
**Framework Version**: v1.0.0
**Last Updated**: 2025-11-09

---

## 🤖 Available Agents

This portfolio framework includes **2 specialized agents**:

1. **Frontend Agent** (`frontend-dev`) - UI/component development
2. **Content Agent** (`content-agent`) - Blog posts and resume data

---

## 🎯 Quick Decision Matrix

| Task | Use This | Why |
|------|----------|-----|
| Fix typo in resume.tsx | **Manual** | Too simple for agent |
| Add new project to resume | **Content Agent** | Structured content update |
| Write blog post | **Content Agent** | Content creation workflow |
| Create new React component | **Frontend Agent** | UI development |
| Update styling/layout | **Frontend Agent** | UI changes |
| Add animation | **Frontend Agent** | Framer Motion expertise |
| Fix responsive design bug | **Frontend Agent** | UI debugging |
| Update package.json | **Manual** | Dependency management |
| Debug TypeScript error | **Manual** or **Frontend Agent** | Depends on complexity |

---

## 🧭 Decision Tree

```
User wants to make a change
    │
    ├─ Content change?
    │   ├─ Quick edit (typo, small text change)
    │   │   └─> Work manually ✋
    │   │
    │   └─ Structured update (blog post, project addition)
    │       └─> Use Content Agent 📝
    │
    ├─ UI/component change?
    │   ├─ Simple style tweak (color, spacing)
    │   │   └─> Work manually ✋
    │   │
    │   └─ Component creation/modification
    │       └─> Use Frontend Agent 🎨
    │
    ├─ Build/deployment issue?
    │   └─> Work manually ✋
    │
    └─ Not sure?
        └─> Ask Claude for recommendation ❓
```

---

## 📝 Content Agent (`content-agent`)

### When to Use

**✅ Use Content Agent for**:
- Writing new blog posts (MDX format)
- Adding projects to resume.tsx
- Updating work experience entries
- Modifying education history
- Updating skills list
- Changing personal information (bio, summary)
- Adding hackathon entries
- Organizing content assets (images, links)

### When NOT to Use

**❌ Work manually for**:
- Fixing typos (1-2 word changes)
- Updating a single date or number
- Changing a URL
- Quick text edits that take < 30 seconds

### Invocation

```bash
"Use the Content Agent to add my new project 'Design System' to the portfolio"

"Use the Content Agent to write a blog post about my experience with Figma plugins"

"Use the Content Agent to update my work experience with my new role at Acme Corp"
```

**Agent reads**: `core/content-architecture.md`, `templates/blog-post-template.md`, `templates/project-addition-template.md`

---

## 🎨 Frontend Agent (`frontend-dev`)

### When to Use

**✅ Use Frontend Agent for**:
- Creating new React components
- Modifying existing components
- Updating UI layouts (grid, flex, spacing)
- Adding/modifying animations (Framer Motion)
- Responsive design fixes (mobile/tablet/desktop)
- Styling changes (Tailwind CSS)
- Integrating new Shadcn/UI components
- Creating custom Magic UI animations
- Visual testing across breakpoints
- Dark mode fixes

### When NOT to Use

**❌ Work manually for**:
- Changing a single Tailwind class
- Updating a color value
- Quick spacing adjustments (p-4 → p-6)
- Changing text content

### Invocation

```bash
"Use the Frontend Agent to create a ProjectGallery component with blur-fade animations"

"Use the Frontend Agent to make the navbar responsive on mobile"

"Use the Frontend Agent to add a Testimonials section to the homepage"
```

**Agent reads**: `core/design-system.md`, `templates/component-template.md`, `DEVELOPMENT_GUIDE.md`

---

## 🛠️ Work Manually

### When to Work Manually

**✅ Work manually for**:
- Quick edits (< 1 minute)
- Single-line changes
- Typo fixes
- Running commands (`npm run dev`, `npm run build`)
- Exploring code (reading files, searching)
- Package management (`npm install`, `npm update`)
- Git operations (simple commits, pushes)
- Environment variable updates
- Config file changes (next.config.mjs, tailwind.config.ts)

**Why manual is better**:
- Faster for simple tasks
- No agent overhead
- More control over small changes
- Easier to verify immediately

---

## 🤔 When to Ask Claude

If you're unsure which approach to use, ask Claude directly:

```bash
"Should I use an agent to add a new blog post or do it manually?"

"What's the best way to add 3 new projects to my portfolio?"

"I want to redesign the projects section - should I use the Frontend Agent?"
```

Claude will:
1. Assess task complexity
2. Recommend agent vs manual
3. Provide reasoning
4. Offer to proceed with recommended approach

---

## 🔄 Multi-Step Tasks

### Scenario: Add New Project with Custom Component

**Task**: Add a new project AND create a custom component to showcase it.

**Approach**:
1. **Use Content Agent** → Add project to resume.tsx
2. **Use Frontend Agent** → Create custom showcase component
3. **Manually** → Test and deploy

**Why split**:
- Each agent has specialized knowledge
- Parallel work possible (agents can work independently)
- Clearer separation of concerns

---

## 📊 Agent Comparison

| Feature | Content Agent | Frontend Agent |
|---------|---------------|----------------|
| **Primary Focus** | Content creation | UI development |
| **File Types** | .tsx (data), .mdx (blog) | .tsx (components), .css |
| **Tools** | Templates, content structure | Design system, Shadcn/UI |
| **Output** | Blog posts, resume updates | React components, styles |
| **Dependencies** | Content architecture docs | Design system docs |
| **Testing** | Content validation | Visual testing (3 breakpoints) |

---

## 🎯 Best Practices

### 1. Start Simple

**If unsure**, start without an agent:
- Try the task manually
- If it takes > 5 minutes or is repetitive → Use agent
- If you get stuck → Ask Claude for help

### 2. Use Agents for Patterns

**Agents excel at**:
- Following templates
- Maintaining consistency
- Complex, multi-file changes
- Tasks you do repeatedly

### 3. Combine Manual + Agent

**Example workflow**:
1. Manually sketch out what you want
2. Ask Claude to use appropriate agent
3. Manually review and adjust
4. Commit changes

---

## 🚀 Example Workflows

### Workflow 1: Add New Project

**Goal**: Add "AI Design Assistant" project to portfolio

**Steps**:
1. Prepare project image → Manually add to `public/projects/`
2. **Content Agent** → Add project entry to resume.tsx with complete details
3. Manually → Test locally, verify image loads
4. Manually → Commit and deploy

**Time Savings**: 5-10 minutes (agent handles structured data correctly)

---

### Workflow 2: Write Blog Post

**Goal**: Write blog post "My Design Process"

**Steps**:
1. **Content Agent** → Create MDX file with frontmatter and structure
2. Manually or **Content Agent** → Write content (agent can draft, you edit)
3. Manually → Add images to `public/images/blog/`
4. Manually → Review, edit, and refine
5. Manually → Commit and deploy

**Time Savings**: 10-15 minutes (agent handles MDX structure, frontmatter)

---

### Workflow 3: Create New Component

**Goal**: Create animated "Skills Grid" component

**Steps**:
1. **Frontend Agent** → Create `SkillsGrid.tsx` with Shadcn/UI and Framer Motion
2. **Frontend Agent** → Add responsive styles (mobile/tablet/desktop)
3. Manually → Test component on homepage
4. Manually → Adjust animation timing
5. Manually → Commit changes

**Time Savings**: 15-20 minutes (agent handles boilerplate, styling patterns)

---

### Workflow 4: Redesign Section

**Goal**: Redesign Projects section with new layout

**Steps**:
1. Manually → Sketch design, decide on layout
2. **Frontend Agent** → Implement new layout with Tailwind grid
3. **Frontend Agent** → Add blur-fade animations
4. **Frontend Agent** → Make responsive (3 breakpoints)
5. Manually → Visual testing, adjustments
6. Manually → Commit changes

**Time Savings**: 20-30 minutes (agent handles responsive patterns, animations)

---

## 📚 Agent Documentation

### Full Agent Protocols

- [Frontend Agent Protocol](./frontend-agent.md) - Complete UI development guide
- [Content Agent Protocol](./content-agent.md) - Complete content creation guide

### Related Documentation

- [Design System](../design-system.md) - Colors, typography, components
- [Content Architecture](../content-architecture.md) - Resume data model, blog structure
- [Development Guide](../../DEVELOPMENT_GUIDE.md) - Code standards, patterns

---

## 🎉 Summary

**Golden Rules**:
1. **Quick tasks** → Work manually
2. **Structured content** → Content Agent
3. **UI development** → Frontend Agent
4. **Unsure?** → Ask Claude

**Philosophy**: Agents are tools, not replacements. Use them when they add value, work manually when it's faster.

---

**Version**: v1.0.0
**Last Updated**: 2025-11-09
**Maintained By**: Kalyan Chandana
