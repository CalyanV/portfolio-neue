# Development Guide

**Framework Version**: v1.0.0
**Last Updated**: 2025-11-09

---

## 🎯 Development Philosophy

This portfolio follows these development principles:

1. **TypeScript-first** - Type safety prevents bugs
2. **Component-driven** - Small, reusable, composable pieces
3. **Performance-focused** - Static generation, optimized assets
4. **Accessibility-first** - WCAG 2.1 AA compliance
5. **Mobile-first** - Responsive from smallest breakpoint up
6. **Simple over clever** - Readable code > clever code

---

## 📁 File Organization

### Component Placement Rules

```
src/components/
├── ui/                    # Shadcn/UI components ONLY
│   ├── avatar.tsx         # ✅ Radix UI based
│   ├── button.tsx         # ✅ Design system component
│   └── card.tsx           # ✅ Reusable UI primitive
│
├── magicui/               # Custom animation components
│   ├── blur-fade.tsx      # ✅ Framer Motion animations
│   └── dock.tsx           # ✅ Custom interactive UI
│
├── navbar.tsx             # ✅ Top-level layout component
├── project-card.tsx       # ✅ Domain-specific component
├── resume-card.tsx        # ✅ Domain-specific component
└── mode-toggle.tsx        # ✅ Feature-specific component
```

### Rules

**✅ DO**:
- Place Shadcn/UI components in `ui/`
- Place custom animations in `magicui/`
- Place domain components at root level (`components/`)
- Name files with kebab-case: `project-card.tsx`
- Export components as named exports: `export function ProjectCard() {}`

**❌ DON'T**:
- Don't add non-Shadcn components to `ui/` folder
- Don't create deep nested folders (max 2 levels)
- Don't use default exports for components
- Don't mix UI and business logic in one file

---

## 🎨 Styling Conventions

### Tailwind CSS Rules

**✅ DO**:
```tsx
// Use Tailwind utility classes
<div className="flex items-center gap-4 p-6 rounded-lg bg-background">

// Use semantic color variables (theme-aware)
<div className="bg-primary text-primary-foreground">

// Use responsive modifiers
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Use the cn() utility for conditional classes
import { cn } from "@/lib/utils"
<div className={cn("base-class", isActive && "active-class")}>
```

**❌ DON'T**:
```tsx
// Don't use arbitrary values unless necessary
<div className="bg-[#a442fe]"> // ❌ Use bg-primary instead

// Don't use inline styles
<div style={{ color: 'red' }}> // ❌ Use Tailwind classes

// Don't create custom CSS files for components
// ❌ Use Tailwind utilities instead
```

---

### Shadcn/UI Component Patterns

**✅ Correct Usage**:
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Project description</p>
        <Button variant="default">View Project</Button>
      </CardContent>
    </Card>
  )
}
```

**Available Variants** (from Shadcn/UI):
```tsx
<Button variant="default" size="default" />
<Button variant="destructive" size="sm" />
<Button variant="outline" size="lg" />
<Button variant="secondary" size="icon" />
<Button variant="ghost" />
<Button variant="link" />
```

---

### Theme Colors

**Use semantic color tokens** (defined in `globals.css`):

```tsx
// Background colors
bg-background         // Main background
bg-foreground         // Inverse (for text on dark bg)
bg-card              // Card background
bg-popover           // Popover/dropdown background
bg-primary           // Primary brand color
bg-secondary         // Secondary accent
bg-muted             // Muted/disabled state
bg-accent            // Accent highlights
bg-destructive       // Error/danger states

// Text colors
text-foreground      // Main text
text-muted-foreground // Secondary text
text-primary-foreground
text-card-foreground
```

**Color Variables** (CSS custom properties):
```css
/* Light mode */
--background: 0 0% 100%;
--foreground: 240 10% 3.9%;
--primary: 240 5.9% 10%;
--secondary: 240 4.8% 95.9%;

/* Dark mode (automatic via next-themes) */
--background: 240 10% 3.9%;
--foreground: 0 0% 98%;
```

---

## ⚛️ React/Next.js Patterns

### Component Structure

**Recommended pattern**:
```tsx
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

// 1. Props interface (TypeScript)
interface ProjectCardProps {
  title: string
  description: string
  href: string
  image?: string
  className?: string
  children?: ReactNode
}

// 2. Component function (named export)
export function ProjectCard({
  title,
  description,
  href,
  image,
  className,
  children
}: ProjectCardProps) {
  // 3. Early returns for conditional rendering
  if (!title) return null

  // 4. Render logic
  return (
    <div className={cn("project-card", className)}>
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>View Project</a>
      {children}
    </div>
  )
}
```

---

### TypeScript Best Practices

**✅ DO**:
```tsx
// Define prop interfaces
interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

// Use type inference for state
const [count, setCount] = useState(0) // TypeScript infers 'number'

// Type event handlers
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  // ...
}

// Use readonly for arrays that shouldn't mutate
const skills: readonly string[] = ["React", "TypeScript", "Next.js"]
```

**❌ DON'T**:
```tsx
// Don't use 'any'
const data: any = fetchData() // ❌

// Don't ignore TypeScript errors
// @ts-ignore // ❌

// Don't use 'Function' type
const onClick: Function = () => {} // ❌ Use specific signature
```

---

### Server vs Client Components

**Server Components** (default in Next.js 14 App Router):
```tsx
// No 'use client' directive = Server Component
// ✅ Good for: Data fetching, static content, SEO

export default async function BlogPage() {
  const posts = await getPosts() // Server-side data fetching
  return <div>{posts.map(...)}</div>
}
```

**Client Components** (interactive):
```tsx
// Add 'use client' directive
'use client'

import { useState } from 'react'

// ✅ Good for: Interactivity, state, browser APIs, event handlers
export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

**When to use Client Components**:
- useState, useEffect, or other React hooks
- Event handlers (onClick, onChange, etc.)
- Browser APIs (localStorage, window, etc.)
- Framer Motion animations
- Theme toggle (next-themes)

---

## 🎭 Animation Patterns

### Framer Motion Usage

**✅ Correct Pattern**:
```tsx
'use client'

import { motion } from 'framer-motion'

export function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card"
    >
      Content
    </motion.div>
  )
}
```

---

### BlurFade Component Pattern

**Usage** (from `magicui/blur-fade.tsx`):
```tsx
import BlurFade from "@/components/magicui/blur-fade"

export function Section() {
  return (
    <BlurFade delay={0.25}>
      <h2>Section Title</h2>
    </BlurFade>
  )
}
```

**Stagger animations**:
```tsx
{projects.map((project, index) => (
  <BlurFade key={project.title} delay={0.25 + index * 0.05}>
    <ProjectCard {...project} />
  </BlurFade>
))}
```

---

### Animation Best Practices

**✅ DO**:
- Keep animations subtle (< 0.5s duration)
- Use `ease: "easeOut"` for natural motion
- Stagger list item animations (0.05s delay increment)
- Respect `prefers-reduced-motion` (Framer Motion handles automatically)

**❌ DON'T**:
- Don't animate on every interaction (causes fatigue)
- Don't use long durations (> 1s feels sluggish)
- Don't animate layout shifts (causes jank)

---

## 📝 Content Management

### Resume Data Structure

**File**: `src/data/resume.tsx`

**Required fields**:
```tsx
export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yourwebsite.com",
  location: "City, Country",
  locationLink: "https://maps.google.com/?q=City",
  description: "Your title/tagline",
  summary: "Longer bio paragraph",
  avatarUrl: "/me.png",

  skills: ["Skill 1", "Skill 2"],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "you@example.com",
    tel: "+123456789",
    social: {
      GitHub: { name: "GitHub", url: "...", icon: Icons.github },
      LinkedIn: { name: "LinkedIn", url: "...", icon: Icons.linkedin },
    },
  },

  work: [ /* work experience array */ ],
  education: [ /* education array */ ],
  projects: [ /* projects array */ ],
}
```

---

### Blog Post Structure

**File**: `content/my-blog-post.mdx`

**Frontmatter**:
```mdx
---
title: "Your Blog Post Title"
summary: "A concise summary (1-2 sentences) for the blog listing page"
publishedAt: "2025-11-09"
---

# Your Blog Post Title

Content goes here...

## Subheading

More content with **markdown** formatting.

\`\`\`tsx
// Code blocks with syntax highlighting
export function Example() {
  return <div>Hello</div>
}
\`\`\`
```

**Supported Markdown**:
- Headers (`#`, `##`, `###`)
- Bold (`**bold**`), italic (`*italic*`)
- Lists (ordered and unordered)
- Links (`[text](url)`)
- Images (`![alt](url)`)
- Code blocks with syntax highlighting
- Tables
- Blockquotes (`>`)

---

## ♿ Accessibility Guidelines

### WCAG 2.1 AA Compliance

**✅ Required**:
```tsx
// 1. Semantic HTML
<nav>...</nav>  // Not <div role="navigation">
<button>...</button>  // Not <div onClick={...}>

// 2. Alt text for images
<img src="..." alt="Descriptive alt text" />

// 3. ARIA labels for icon-only buttons
<button aria-label="Toggle dark mode">
  <MoonIcon />
</button>

// 4. Focus styles (Tailwind includes these)
<button className="focus-visible:ring-2 focus-visible:ring-offset-2">

// 5. Color contrast (4.5:1 minimum)
// Shadcn/UI colors are WCAG compliant by default
```

**❌ Avoid**:
```tsx
// Don't use divs as buttons
<div onClick={...}>Click me</div> // ❌

// Don't remove focus outlines
<button className="outline-none">...</button> // ❌

// Don't use color alone to convey information
<p className="text-red-500">Error</p> // ❌ Add icon or text
```

---

### Keyboard Navigation

**Ensure**:
- All interactive elements are keyboard accessible
- Tab order is logical (follows visual order)
- Focus is visible (don't remove outlines)
- Escape key closes modals/dropdowns
- Enter/Space activates buttons

---

## 🚀 Performance Best Practices

### Image Optimization

**Current** (standard img tags):
```tsx
<img src="/projects/project-1.jpg" alt="Project 1" />
```

**Future Improvement** (Next.js Image):
```tsx
import Image from 'next/image'

<Image
  src="/projects/project-1.jpg"
  alt="Project 1"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
  blurDataURL="..." // Low-res placeholder
/>
```

**Benefits**:
- Automatic format conversion (WebP, AVIF)
- Lazy loading
- Responsive srcsets
- Blur placeholders

---

### Code Splitting

**Next.js automatically code-splits** by route. For additional optimization:

```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false, // Don't render on server
})
```

---

### Bundle Analysis

```bash
# Analyze bundle size
npm run build
# Check .next/build-manifest.json for sizes
```

**Watch out for**:
- Large dependencies (Framer Motion is biggest at ~50KB)
- Duplicate code (ensure tree-shaking works)
- Unused Radix UI components

---

## 🧪 Testing & Quality

### Type Checking

```bash
# Check TypeScript errors
npx tsc --noEmit

# Fix auto-fixable issues
npm run lint --fix
```

---

### Visual Testing (Manual)

**Test at 3 breakpoints**:
1. **Mobile** (375px) - iPhone SE
2. **Tablet** (768px) - iPad
3. **Desktop** (1440px) - Standard laptop

**Check**:
- Layout doesn't break
- Images scale correctly
- Text is readable
- Buttons are tappable (min 44x44px)
- Animations play smoothly

---

### Browser Testing

**Test in**:
- Chrome (primary)
- Safari (webkit)
- Firefox (gecko)

**Check**:
- Dark mode toggle works
- Fonts load correctly
- Animations play smoothly
- No console errors

---

## 🔧 Code Quality Standards

### ESLint Rules

**Follow Next.js recommended rules**:
```bash
npm run lint
```

**Common issues**:
- Unused variables → Remove them
- Missing alt text → Add descriptive alt
- Missing key prop → Add unique key in lists
- Unescaped entities → Use `&amp;` not `&`

---

### Code Review Checklist

Before committing:
- [ ] TypeScript compiles (`npx tsc --noEmit`)
- [ ] ESLint passes (`npm run lint`)
- [ ] No console.log statements
- [ ] Components are properly typed
- [ ] Tailwind classes are semantic
- [ ] Accessibility: alt text, ARIA labels, semantic HTML
- [ ] Mobile responsive (test at 375px)
- [ ] Dark mode works correctly

---

## 📦 Dependency Management

### Adding New Packages

```bash
# Install production dependency
npm install package-name

# Install dev dependency
npm install -D package-name
```

**Before adding**:
- Check bundle size impact
- Verify TypeScript support
- Ensure maintained (last updated < 6 months)
- Check for alternatives

---

### Updating Dependencies

```bash
# Check outdated packages
npm outdated

# Update specific package
npm update package-name

# Update all (carefully!)
npm update

# Audit security
npm audit
npm audit fix
```

---

## 🐛 Debugging Tips

### Common Issues

**Build Errors**:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript Errors**:
```bash
# Check errors
npx tsc --noEmit

# Restart VS Code TypeScript server
# CMD+Shift+P → "TypeScript: Restart TS Server"
```

**Styling Issues**:
```bash
# Rebuild Tailwind
npm run dev
# Tailwind JIT watches files automatically
```

---

### Console Debugging

```tsx
// Use proper debugging, not console.log
import { useEffect } from 'react'

useEffect(() => {
  console.debug('Component mounted', { props })
}, [])
```

---

## 📚 External Resources

### Documentation

- [Next.js App Router](https://nextjs.org/docs/app)
- [Shadcn/UI Components](https://ui.shadcn.com/docs/components)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/introduction/)
- [MDX](https://mdxjs.com/docs/)
- [TypeScript](https://www.typescriptlang.org/docs/)

---

## 🎯 Summary

**Golden Rules**:
1. **Type everything** (TypeScript prevents bugs)
2. **Use Tailwind** (no custom CSS files)
3. **Follow Shadcn patterns** (don't reinvent UI components)
4. **Animate subtly** (< 0.5s, easeOut)
5. **Mobile-first** (design for 375px up)
6. **Accessibility matters** (semantic HTML, alt text, ARIA)
7. **Performance counts** (lazy load, optimize images)
8. **Keep it simple** (boring code is good code)

**When in doubt**:
- Check existing components for patterns
- Read Shadcn/UI docs for UI components
- Use Tailwind utilities instead of custom CSS
- Ask Claude Code for help (it has full context)

---

**Version**: v1.0.0
**Last Updated**: 2025-11-09
**Maintained By**: Kalyan Chandana
