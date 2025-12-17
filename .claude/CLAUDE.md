# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

This portfolio has an **extensive `.claude` framework** with specialized agents, templates, and documentation.

**First time here?** Read these in order:
1. **[.claude/README.md](.claude/README.md)** - Framework overview and philosophy
2. **[.claude/PROJECT_CONTEXT.md](.claude/PROJECT_CONTEXT.md)** - Tech stack and architecture
3. **[.claude/DEVELOPMENT_GUIDE.md](.claude/DEVELOPMENT_GUIDE.md)** - Code standards and conventions

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

**Important**: This project uses **npm** (not pnpm or yarn). The `package-lock.json` file is tracked in git.

## Critical Architecture Patterns

### 1. Single-Config Data Model

**All portfolio content** lives in one file: **`src/data/resume.tsx`**

This file contains:
- Personal information, skills, contact details
- Work history and education
- **Complete project definitions** with extensive metadata (overview, metrics, personas, learnings, problem/solution, impact, reflection)
- Navigation structure

**Key principle**: When adding/editing content, update `resume.tsx` first. UI components consume this data automatically.

📖 **Full details**: [.claude/core/content-architecture.md](.claude/core/content-architecture.md)

### 2. Hybrid Routing Pattern (Critical!)

**Next.js App Router** with a special routing architecture:

```
/projects/[slug]         → Dynamic route for simple projects
/projects/apple          → Dedicated static page (excluded from [slug])
/projects/forge          → Dedicated static page (excluded from [slug])
```

**IMPORTANT**: The `[slug]` dynamic route at `src/app/projects/[slug]/page.tsx` has an **exclusion list** in `generateStaticParams()`:

```tsx
const excludedSlugs = ['apple', 'forge'];
```

**When creating a new dedicated project page**:
1. Create page file: `src/app/projects/{name}/page.tsx`
2. **Add slug to exclusion array** in `src/app/projects/[slug]/page.tsx`
3. Ensure href in `resume.tsx` matches: `/projects/{name}`

This prevents routing conflicts between dynamic and static routes.

### 3. Component Organization

```
src/components/
├── ui/                  # Shadcn/ui components ONLY (installed via CLI)
├── magicui/             # Custom animation components (blur-fade, particles, etc.)
├── forge/               # Forge project-specific components
└── *.tsx                # Feature/domain-specific components (navbar, project-card, etc.)
```

**Rules**:
- Shadcn/UI components → `ui/` (don't add custom components here)
- Custom animations → `magicui/`
- Everything else → root level `components/`

📖 **Full details**: [.claude/DEVELOPMENT_GUIDE.md](.claude/DEVELOPMENT_GUIDE.md)

### 4. Blog System

- Blog posts are **MDX files** in `/content` directory
- Processed with unified/remark/rehype pipeline
- Syntax highlighting via rehype-pretty-code (dual themes: min-light/min-dark)
- Frontmatter: `title`, `publishedAt`, `summary`, `image` (optional)

📖 **Templates**: [.claude/templates/blog-post-template.md](.claude/templates/blog-post-template.md)

### 5. Styling System

**Stack**: Shadcn/UI + Tailwind CSS + Framer Motion + Magic UI components

- **Theme**: Dark mode only (`defaultTheme="dark"`, `enableSystem={false}`)
- **Fonts**: Raleway (primary) + Acorn (display, custom local font)
- **Colors**: HSL CSS variables (theme-aware, defined in `globals.css`)
- **Utility**: `cn()` from `lib/utils.ts` for conditional classes

📖 **Full design system**: [.claude/core/design-system.md](.claude/core/design-system.md)

## Agent System

This portfolio uses a **medium-weight agentic framework** with specialized agents for recurring tasks.

### Available Agents

1. **Content Agent** (`content-agent`) - Blog posts, resume updates, project additions
2. **Frontend Agent** (`frontend-dev`) - UI/component development, animations, responsive design

### When to Use Agents

**✅ Use agents for**:
- Writing blog posts (MDX structure, frontmatter)
- Adding projects to resume.tsx (structured data)
- Creating new React components (Shadcn/UI patterns)
- Updating UI layouts (responsive design, animations)
- Complex multi-file changes

**❌ Work manually for**:
- Quick edits (< 1 minute)
- Typo fixes
- Single-line changes
- Running commands
- Package management

📖 **Full agent guide**: [.claude/agents/README.md](.claude/agents/README.md)

### Agent Invocation Examples

```bash
"Use the Content Agent to add my new project 'Design System' to the portfolio"
"Use the Frontend Agent to create a Testimonials section with blur-fade animations"
"Use the Content Agent to write a blog post about my Figma workflow"
```

## Common Workflows

### Add a New Project

1. Add project image to `public/projects/`
2. **Content Agent** → Add project entry to `src/data/resume.tsx`
3. Test locally → `npm run dev`
4. Commit and deploy

📖 **Template**: [.claude/templates/project-addition-template.md](.claude/templates/project-addition-template.md)

### Write a Blog Post

1. **Content Agent** → Create MDX file in `content/`
2. Add images to `public/` if needed
3. Review and refine content
4. Test at `/blog/your-post-slug`
5. Commit and deploy

📖 **Template**: [.claude/templates/blog-post-template.md](.claude/templates/blog-post-template.md)

### Create a New Component

1. Decide placement: `ui/` (Shadcn) or `components/` (custom)
2. **Frontend Agent** → Create component with TypeScript interface
3. Follow Shadcn/UI patterns (if UI component)
4. Add Framer Motion animations (if interactive)
5. Test on mobile/tablet/desktop
6. Import and use in pages

📖 **Template**: [.claude/templates/component-template.md](.claude/templates/component-template.md)

## Special Considerations

### Path Aliases

`@/*` maps to `src/*` (configured in `tsconfig.json`)

Always use:
```tsx
import { DATA } from "@/data/resume"
import { Button } from "@/components/ui/button"
```

### Client vs Server Components

- Most pages use `"use client"` for interactivity/animations
- Blog MDX rendering is server-side
- Add `"use client"` when using: useState, event handlers, Framer Motion, browser APIs

### Spline 3D Integration

Some project cards use Spline 3D via `@splinetool/react-spline`:
- Set `splineUrl` in project data (resume.tsx)
- Example: Apple project hero uses Spline scene

### Deployment

- Optimized for **Vercel** deployment
- Static export ready with SEO/OG images
- All routes use `generateMetadata()` for proper meta tags

## Framework Documentation

### Core Documentation
- **[README.md](.claude/README.md)** - Framework overview, agent philosophy
- **[PROJECT_CONTEXT.md](.claude/PROJECT_CONTEXT.md)** - Tech stack, architecture, file structure
- **[DEVELOPMENT_GUIDE.md](.claude/DEVELOPMENT_GUIDE.md)** - Code standards, TypeScript patterns, styling rules
- **[CHANGELOG.md](.claude/CHANGELOG.md)** - Session history

### Specialized Docs
- **[core/design-system.md](.claude/core/design-system.md)** - Colors, typography, Shadcn/UI components
- **[core/content-architecture.md](.claude/core/content-architecture.md)** - Resume.tsx data model, blog structure
- **[agents/README.md](.claude/agents/README.md)** - Agent decision tree
- **[agents/frontend-agent.md](.claude/agents/frontend-agent.md)** - Frontend agent protocol
- **[agents/content-agent.md](.claude/agents/content-agent.md)** - Content agent protocol

### Templates
- **[templates/blog-post-template.md](.claude/templates/blog-post-template.md)** - MDX blog starter
- **[templates/project-addition-template.md](.claude/templates/project-addition-template.md)** - Resume.tsx project entry
- **[templates/component-template.md](.claude/templates/component-template.md)** - Component creation guide

### Guides
- **[guides/quick-start.md](.claude/guides/quick-start.md)** - 10-minute setup guide
- **[guides/customization-guide.md](.claude/guides/customization-guide.md)** - Personalization instructions
- **[guides/deployment-guide.md](.claude/guides/deployment-guide.md)** - Build & deploy process

## Philosophy

> "Build fast, iterate faster, document along the way"

This portfolio prioritizes:
1. **Content-first** - Single-config data model (`resume.tsx`)
2. **Design consistency** - Shadcn/UI + Tailwind + design system
3. **Fast iteration** - Agents for recurring tasks, manual for quick edits
4. **Type safety** - TypeScript everywhere
5. **Performance** - Static generation, optimized assets
6. **Simplicity** - Don't over-engineer, extend complexity only when needed

## Files Not to Modify

- `.next/` - Build output (auto-generated)
- `node_modules/` - Dependencies
- Debug/report files (`ANIMATION_FIX_SUMMARY.md`, `BLANK_PAGE_DIAGNOSIS.md`, etc.) - Historical debugging docs
- `KC UX Portfolio old/` - Legacy portfolio backup

---

**Framework Version**: v1.0.0
**Maintained By**: Kalyan Chandana (Product Designer + AI Native Developer)
**Template Source**: [Dillion Verma's Portfolio](https://portfolio-magicui.vercel.app/)
**Built With**: Next.js 14, TypeScript, Shadcn/UI, Tailwind CSS, Framer Motion, MDX
