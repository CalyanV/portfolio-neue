# Component Creation Template

Use this template when creating new React components for your portfolio.

---

## Component Template

```tsx
'use client'  // Only if using client-side features (state, effects, events, animations)

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"  // If adding animations

// 1. TypeScript interface for props
interface ComponentNameProps {
  title: string
  description?: string
  children?: ReactNode
  className?: string
  onClick?: () => void
}

// 2. Component function (named export, not default)
export function ComponentName({
  title,
  description,
  children,
  className,
  onClick,
}: ComponentNameProps) {
  // 3. Early returns for conditional rendering
  if (!title) return null

  // 4. Render with semantic HTML
  return (
    <div
      className={cn(
        "base-styles",  // Base Tailwind classes
        className       // Allow prop override
      )}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  )
}
```

---

## Where to Place Components

### Decision Tree

```
New component type?
│
├─ Shadcn/UI component (from ui.shadcn.com)?
│   → Place in: src/components/ui/
│   → Example: src/components/ui/dialog.tsx
│
├─ Custom animation component (Framer Motion)?
│   → Place in: src/components/magicui/
│   → Example: src/components/magicui/fade-in.tsx
│
└─ Domain/feature-specific component?
    → Place in: src/components/ (root level)
    → Example: src/components/project-grid.tsx
```

---

## Component Patterns

### 1. Basic Component (No Client Features)

**When**: Static content, no interactivity

```tsx
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
```

**Note**: No `'use client'` directive (server component by default)

---

### 2. Interactive Component (Client-Side)

**When**: Uses state, events, or browser APIs

```tsx
'use client'

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CounterProps {
  initialValue?: number
  className?: string
}

export function Counter({ initialValue = 0, className }: CounterProps) {
  const [count, setCount] = useState(initialValue)

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <span className="text-2xl font-bold">{count}</span>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  )
}
```

**Needs `'use client'`**: Uses `useState` and `onClick`

---

### 3. Animated Component

**When**: Uses Framer Motion animations

```tsx
'use client'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  title: string
  description: string
  delay?: number
  className?: string
}

export function AnimatedCard({
  title,
  description,
  delay = 0,
  className,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={cn(
        "rounded-lg border bg-card p-6 shadow-sm",
        className
      )}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </motion.div>
  )
}
```

**Needs `'use client'`**: Uses Framer Motion (client-side library)

---

### 4. Component with Shadcn/UI

**When**: Building on Shadcn components

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  category: string
  skills: string[]
  className?: string
}

export function SkillCard({ category, skills, className }: SkillCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{category}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
```

**Note**: No `'use client'` needed if Shadcn component doesn't require it

---

### 5. Responsive Layout Component

**When**: Creating grid/flex layouts

```tsx
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GridLayoutProps {
  children: ReactNode
  columns?: 1 | 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
  className?: string
}

export function GridLayout({
  children,
  columns = 3,
  gap = "md",
  className,
}: GridLayoutProps) {
  return (
    <div
      className={cn(
        "grid",
        // Responsive columns
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        // Gap sizes
        gap === "sm" && "gap-4",
        gap === "md" && "gap-6",
        gap === "lg" && "gap-8",
        className
      )}
    >
      {children}
    </div>
  )
}
```

---

## Styling Guidelines

### Using `cn()` Utility

```tsx
import { cn } from "@/lib/utils"

// ✅ DO: Use cn() for conditional classes
<div className={cn(
  "base-class always-applied",
  isActive && "active-class",
  isDisabled && "disabled-class",
  className  // Allow prop override
)}>

// ❌ DON'T: Manual string concatenation
<div className={`base-class ${isActive ? 'active-class' : ''}`}>
```

---

### Tailwind Class Patterns

```tsx
// Spacing
className="p-4 md:p-6 lg:p-8"  // Responsive padding

// Layout
className="flex items-center gap-4"
className="grid grid-cols-1 md:grid-cols-2 gap-6"

// Typography
className="text-sm md:text-base lg:text-lg"
className="font-semibold text-foreground"

// Colors (use design tokens)
className="bg-background text-foreground"
className="bg-card text-card-foreground"
className="bg-primary text-primary-foreground"

// Borders & Shadows
className="rounded-lg border border-border"
className="shadow-sm hover:shadow-md transition-shadow"

// Responsive visibility
className="hidden md:block"  // Hidden on mobile, visible on tablet+
className="md:hidden"         // Visible on mobile, hidden on tablet+
```

---

## Animation Patterns

### Fade In

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

### Slide Up + Fade

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
```

### Scale + Fade

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
>
```

### Stagger Children

```tsx
// Parent
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: { staggerChildren: 0.05 }
    }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Using BlurFade Component

```tsx
import BlurFade from "@/components/magicui/blur-fade"

// Single element
<BlurFade delay={0.25}>
  <Component />
</BlurFade>

// Staggered list
{items.map((item, idx) => (
  <BlurFade key={item.id} delay={0.25 + idx * 0.05}>
    <ItemCard {...item} />
  </BlurFade>
))}
```

---

## Accessibility Checklist

- [ ] Use semantic HTML (`<nav>`, `<button>`, `<article>`, not `<div>` everywhere)
- [ ] Add alt text to images
- [ ] Include ARIA labels for icon-only buttons
- [ ] Ensure keyboard navigation works (Tab, Enter, Space)
- [ ] Use focus styles (Tailwind includes by default)
- [ ] Test with keyboard only (no mouse)
- [ ] Check color contrast (use design system colors)

**Examples**:

```tsx
// ✅ Semantic HTML
<button onClick={handleClick}>Click me</button>
<nav>...</nav>

// ❌ Non-semantic
<div onClick={handleClick}>Click me</div>
<div className="navigation">...</div>

// ✅ Alt text
<img src="/avatar.png" alt="Profile picture of John Doe" />

// ❌ Missing alt
<img src="/avatar.png" />

// ✅ ARIA label for icon button
<button aria-label="Close dialog">
  <X className="size-4" />
</button>

// ❌ No label
<button>
  <X className="size-4" />
</button>
```

---

## Component Checklist

Before completing:
- [ ] TypeScript interface defined for props
- [ ] Props destructured with defaults
- [ ] Named export (not default export)
- [ ] `'use client'` directive if needed (state, effects, events, animations)
- [ ] Semantic HTML elements
- [ ] Tailwind classes for styling (no custom CSS)
- [ ] `cn()` utility for conditional classes
- [ ] `className` prop for style override
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Tested at 3 breakpoints (375px, 768px, 1440px)
- [ ] Dark mode tested
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ESLint errors (`npm run lint`)

---

## Testing

```bash
# 1. Type check
npx tsc --noEmit

# 2. Lint
npm run lint

# 3. Run dev server
npm run dev

# 4. Visual test
# - Visit page where component is used
# - Test at 375px (mobile)
# - Test at 768px (tablet)
# - Test at 1440px (desktop)
# - Toggle dark mode
# - Check animations
# - Test keyboard navigation

# 5. Fix any issues
# - Fix TypeScript errors
# - Fix ESLint warnings
# - Adjust responsive styles
# - Tweak animation timing
```

---

## Example: Complete Component

**File**: `src/components/skill-grid.tsx`

```tsx
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import BlurFade from "@/components/magicui/blur-fade"

interface SkillGridProps {
  title: string
  skills: string[]
  className?: string
}

export function SkillGrid({ title, skills, className }: SkillGridProps) {
  if (!skills || skills.length === 0) return null

  return (
    <section className={cn("space-y-4", className)}>
      <BlurFade delay={0.25}>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </BlurFade>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <BlurFade key={skill} delay={0.25 + idx * 0.05}>
            <Badge variant="secondary" className="text-sm">
              {skill}
            </Badge>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
```

**Usage**:
```tsx
import { SkillGrid } from "@/components/skill-grid"
import { DATA } from "@/data/resume"

export default function HomePage() {
  return (
    <main>
      <SkillGrid title="Skills" skills={DATA.skills} />
    </main>
  )
}
```

---

**Version**: v1.0.0
**Last Updated**: 2025-11-09
