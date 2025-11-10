# Portfolio Development Framework

> **Medium-weight agentic framework for product designer + AI native developer portfolio**

**Framework Version**: v1.0.0
**Project Type**: Personal Portfolio
**Last Updated**: 2025-11-09

---

## 🎯 What This Is

This `.claude` directory contains documentation and agent protocols to help Claude Code assist you with maintaining and extending your portfolio website. It's designed for:

- **Product designers** who code (design-first, code-second mindset)
- **AI native developers** ("vibe coders" who iterate fast with AI assistance)
- **Balanced updates** across content, UI, and features
- **Keep it simple** philosophy (extend complexity only when needed)

---

## 📁 Quick Navigation

| Document | Purpose |
|----------|---------|
| **[PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)** | Tech stack, architecture, deployment info |
| **[DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)** | Code standards, styling rules, conventions |
| **[CHANGELOG.md](./CHANGELOG.md)** | Session history and updates |
| **[core/design-system.md](./core/design-system.md)** | Shadcn/UI + Tailwind + Framer Motion patterns |
| **[core/content-architecture.md](./core/content-architecture.md)** | Resume.tsx data model, blog structure |
| **[core/agents/](./core/agents/)** | Agent protocols for UI and content tasks |
| **[templates/](./templates/)** | Templates for blog posts, projects, components |
| **[guides/](./guides/)** | Quick start, customization, deployment guides |

---

## 🚀 Quick Start (First Time)

1. **Read [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)** - Understand the portfolio tech stack
2. **Read [guides/quick-start.md](./guides/quick-start.md)** - 10-minute setup guide
3. **Read [guides/customization-guide.md](./guides/customization-guide.md)** - Personalize your portfolio

---

## 🤖 When to Use Agents

### Frontend Agent (`frontend-dev`)

**Use for**:
- Building/modifying React components
- Updating UI layouts and responsive design
- Creating animations (Framer Motion)
- Shadcn/UI component integration
- Styling changes (Tailwind CSS)
- Visual testing across breakpoints

**Example**:
```
"Use the Frontend Agent to create a new ProjectGallery component with blur-fade animations"
```

### Content Agent (`content-agent`)

**Use for**:
- Writing blog posts (MDX format)
- Updating resume data (src/data/resume.tsx)
- Adding new projects to showcase
- Updating work experience or education
- Managing blog metadata and frontmatter
- Asset organization (images, links)

**Example**:
```
"Use the Content Agent to add my new project to the resume.tsx file"
```

### When NOT to Use Agents

**Work manually for**:
- Quick content edits (fixing a typo in resume.tsx)
- Simple one-line changes
- Exploring/reading code
- Running build commands
- Asking questions about the codebase

**Philosophy**: Agents are for **recurring tasks** and **complex features**. For quick tweaks, just do it directly.

---

## 🎨 Design Philosophy

Your portfolio follows these principles:

1. **Design-First**: Clean, minimal, professional aesthetic
2. **Content-Focused**: Resume data drives the entire site (single-config pattern)
3. **Fast Iteration**: Easy to update projects, blog, resume
4. **Mobile-First**: Responsive across all breakpoints
5. **Performance**: Static generation, optimized assets
6. **Dark Mode**: Seamless theme switching

See [core/design-system.md](./core/design-system.md) for complete design system documentation.

---

## 📝 Common Workflows

### 1. Add a New Project

See [templates/project-addition-template.md](./templates/project-addition-template.md)

**Quick steps**:
1. Open `src/data/resume.tsx`
2. Add project object to `projects` array
3. Add project image to `public/` folder
4. Test locally
5. Commit changes

### 2. Write a Blog Post

See [templates/blog-post-template.md](./templates/blog-post-template.md)

**Quick steps**:
1. Create `content/blog-post-title.mdx`
2. Add frontmatter (title, summary, publishedAt)
3. Write content in MDX
4. Add images to `public/` if needed
5. Test locally at `/blog/blog-post-title`
6. Commit changes

### 3. Create a New Component

See [templates/component-template.md](./templates/component-template.md)

**Quick steps**:
1. Decide: UI component → `src/components/ui/`, custom → `src/components/`
2. Create `.tsx` file with TypeScript interface
3. Follow Shadcn/UI patterns (if UI component)
4. Add Framer Motion animations (if interactive)
5. Test on mobile/tablet/desktop
6. Import and use in pages

### 4. Update Resume Data

**Quick steps**:
1. Open `src/data/resume.tsx`
2. Update relevant section:
   - `name`, `location`, `description`, `summary`
   - `work` array (add/edit work experience)
   - `education` array
   - `skills` array
   - `projects` array
   - Contact links (`navbar`, `contact.social`)
3. Save and test locally
4. Commit changes

---

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Type checking
npx tsc --noEmit

# Lint code
npm run lint
```

---

## 📚 Framework Structure

```
.claude/
├── README.md                          # This file (framework overview)
├── PROJECT_CONTEXT.md                 # Portfolio project details
├── DEVELOPMENT_GUIDE.md               # Dev patterns & conventions
├── CHANGELOG.md                       # Session history
├── settings.local.json                # Framework config
│
├── core/
│   ├── design-system.md               # Shadcn/UI + Tailwind + Framer
│   ├── content-architecture.md        # Resume.tsx + blog structure
│   │
│   └── agents/
│       ├── README.md                  # Agent decision tree
│       ├── frontend-agent.md          # UI/component development
│       └── content-agent.md           # Blog/resume updates
│
├── templates/
│   ├── blog-post-template.md         # MDX blog starter
│   ├── project-addition-template.md  # Resume.tsx project entry
│   └── component-template.md         # Component creation guide
│
├── guides/
│   ├── quick-start.md                # 10-min setup guide
│   ├── customization-guide.md        # Personalization instructions
│   └── deployment-guide.md           # Build & deploy process
│
└── analytics/ (optional)
    ├── velocity.md                   # Dev speed tracking
    └── improvements.md               # Framework enhancements
```

---

## 🎯 Framework Goals

1. **Speed up iteration** - Templates and agents for recurring tasks
2. **Maintain consistency** - Design system compliance, code standards
3. **Reduce cognitive load** - Document decisions, automate repetitive work
4. **Enable exploration** - Easy to add new sections, try new ideas
5. **Stay simple** - Don't over-engineer, add complexity only when needed

---

## 🔄 Continuous Improvement

This framework evolves with your portfolio. When you notice:

- Repetitive patterns that could be templated
- Unclear documentation
- Opportunities to save time
- New workflows that should be documented

**Propose improvements** via the framework improvement protocol (see [analytics/improvements.md](./analytics/improvements.md)).

---

## 📞 Getting Help

**For framework questions**:
- Read [guides/quick-start.md](./guides/quick-start.md)
- Check [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)
- Review [core/agents/README.md](./core/agents/README.md)

**For tech stack questions**:
- Read [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)
- Check [core/design-system.md](./core/design-system.md)

**For coding help**:
- Ask Claude Code directly (it has context from this framework)
- Use agents for complex tasks
- Check external docs (Next.js, Shadcn/UI, Tailwind, Framer Motion)

---

## 🎉 Philosophy

> "Build fast, iterate faster, document along the way"

This portfolio is a reflection of your work and your process. The framework exists to:
- Make updates easy
- Keep quality high
- Let you focus on creativity
- Reduce friction between idea and implementation

**Keep it simple. Extend when needed. Always improve.**

---

**Framework Version**: v1.0.0
**Maintained By**: Kalyan Chandana (product designer + AI native developer)
**Template Source**: [Dillion Verma's Portfolio](https://portfolio-magicui.vercel.app/)
**Built With**: Next.js, Shadcn/UI, Framer Motion, Tailwind CSS, MDX
