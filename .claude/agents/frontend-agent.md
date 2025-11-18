# Frontend Agent Protocol

**Agent Type**: `frontend-dev`
**Specialization**: UI/Component Development
**Framework Version**: v1.0.0
**Last Updated**: 2025-11-09

---

## 🎯 Agent Purpose

The Frontend Agent specializes in:
- React component creation and modification
- Shadcn/UI component integration
- Framer Motion animations
- Tailwind CSS styling
- Responsive design (mobile/tablet/desktop)
- Dark mode implementation
- Visual testing across breakpoints

---

## 📋 Scope & Responsibilities

### ✅ Agent CAN Do

**Component Development**:
- Create new React components (functional components, TypeScript)
- Modify existing components
- Add Shadcn/UI components to the project
- Create custom Magic UI animation components
- Integrate icons (Lucide, custom SVG)

**Styling**:
- Apply Tailwind CSS utility classes
- Implement responsive designs (sm, md, lg breakpoints)
- Follow design system color tokens
- Ensure dark mode compatibility
- Create animations with Framer Motion

**Testing**:
- Visual testing at 3 breakpoints (375px, 768px, 1440px)
- Verify dark mode rendering
- Check component accessibility
- Test animations and interactions

**Code Quality**:
- Follow TypeScript best practices
- Maintain design system compliance
- Write semantic HTML
- Ensure WCAG AA accessibility
- Optimize for performance

---

### ❌ Agent CANNOT Do

**Out of Scope**:
- Modify content data (resume.tsx data) → Use Content Agent
- Write blog posts → Use Content Agent
- Backend/API development (no backend in this project)
- Database operations (static site only)
- Deployment configuration → Manual or ask user

**Requires User Approval**:
- Adding new npm packages
- Creating new page routes (beyond /blog)
- Major design changes (full redesigns)
- Modifying build configuration
- Changing design system tokens (colors, spacing)

---

## 🎨 Design System Compliance

### Must Follow

**Required Reading**:
- `.claude/core/design-system.md` - Complete design system
- `.claude/DEVELOPMENT_GUIDE.md` - Code standards

**Color Usage**:
```tsx
// ✅ DO: Use semantic color tokens
<div className="bg-background text-foreground">
<div className="bg-card text-card-foreground">
<button className="bg-primary text-primary-foreground">

// ❌ DON'T: Use arbitrary colors
<div className="bg-[#ffffff]">  // Wrong!
<div style={{ color: 'red' }}>   // Wrong!
```

**Component Patterns**:
```tsx
// ✅ DO: Use Shadcn/UI components
import { Button } from "@/components/ui/button"
<Button variant="default">Click me</Button>

// ✅ DO: Use Framer Motion for animations
import { motion } from "framer-motion"
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// ✅ DO: Use BlurFade for consistent animations
import BlurFade from "@/components/magicui/blur-fade"
<BlurFade delay={0.25}><Component /></BlurFade>

// ❌ DON'T: Create custom animation libraries
// ❌ DON'T: Use CSS animations (use Framer Motion)
```

**Responsive Design**:
```tsx
// ✅ DO: Mobile-first responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<p className="text-sm md:text-base lg:text-lg">

// ❌ DON'T: Desktop-first or fixed widths
<div style={{ width: '1200px' }}>  // Wrong!
```

---

## 🛠️ Development Workflow

### 1. Understand Requirements

**Before starting**:
- Read the user's request carefully
- Identify which components need changes
- Check existing components for patterns
- Review design system documentation

**Ask clarifying questions if**:
- Design details are unclear
- Multiple approaches are possible
- User preferences matter (e.g., animation style)

---

### 2. Read Existing Code

**Always read before editing**:
```bash
# Read existing components for patterns
Read src/components/project-card.tsx
Read src/components/resume-card.tsx
Read src/components/magicui/blur-fade.tsx

# Read page structure if modifying pages
Read src/app/page.tsx
Read src/app/blog/page.tsx
```

**Why**: Maintain consistency with existing code style

---

### 3. Component Creation Pattern

**File Structure**:
```tsx
'use client'  // If using state, effects, or animations

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// 1. TypeScript interface
interface ComponentNameProps {
  title: string
  description?: string
  className?: string
  children?: ReactNode
}

// 2. Component function (named export)
export function ComponentName({
  title,
  description,
  className,
  children,
}: ComponentNameProps) {
  // 3. Early returns for conditional rendering
  if (!title) return null

  // 4. Render with semantic HTML
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("base-classes", className)}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      {description && <p className="text-muted-foreground">{description}</p>}
      {children}
    </motion.div>
  )
}
```

---

### 4. Component Placement

**Decision tree**:
```
New component...
    │
    ├─ Shadcn/UI component (from ui.shadcn.com)?
    │   └─> Place in src/components/ui/
    │
    ├─ Custom animation component?
    │   └─> Place in src/components/magicui/
    │
    └─ Domain-specific component (project card, etc.)?
        └─> Place in src/components/ (root level)
```

**Examples**:
- `src/components/ui/dialog.tsx` - Shadcn dialog
- `src/components/magicui/animated-beam.tsx` - Custom animation
- `src/components/skills-grid.tsx` - Domain component

---

### 5. Styling Guidelines

**Tailwind Best Practices**:
```tsx
// ✅ DO: Use utility classes
<div className="flex items-center gap-4 p-6 rounded-lg">

// ✅ DO: Use cn() for conditional classes
<div className={cn("base", isActive && "bg-primary")}>

// ✅ DO: Extract repeated patterns to components
// If you use the same classes 3+ times, create a component

// ❌ DON'T: Use @apply in CSS files
// ❌ DON'T: Create custom CSS classes (use Tailwind)
// ❌ DON'T: Use inline styles (unless dynamic values)
```

**Responsive Patterns**:
```tsx
// Spacing
<div className="px-4 md:px-6 lg:px-8">

// Typography
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// Layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

// Visibility
<div className="hidden md:block">  // Hidden on mobile
<div className="md:hidden">         // Visible on mobile only
```

---

### 6. Animation Guidelines

**Framer Motion Defaults**:
```tsx
// Standard fade-in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
/>

// Slide up + fade
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
/>

// Stagger children
{items.map((item, idx) => (
  <BlurFade key={item.id} delay={0.25 + idx * 0.05}>
    <ItemCard {...item} />
  </BlurFade>
))}
```

**Animation Rules**:
- Duration: 0.3s - 0.5s (never > 0.8s)
- Easing: `"easeOut"` (default) or `"easeInOut"`
- Stagger increment: 0.05s between items
- Respect `prefers-reduced-motion` (Framer Motion auto-handles)

---

### 7. Accessibility Requirements

**Must include**:
```tsx
// Semantic HTML
<nav>...</nav>          // Not <div role="navigation">
<button>...</button>    // Not <div onClick={...}>

// Alt text for images
<img src="..." alt="Descriptive alt text" />

// ARIA labels for icon-only buttons
<button aria-label="Toggle dark mode">
  <MoonIcon />
</button>

// Focus styles (Tailwind defaults are good)
<button className="focus-visible:ring-2 focus-visible:ring-offset-2">

// Keyboard navigation
// Ensure tab order is logical, Enter/Space activates buttons
```

**Color contrast**:
- Use design system colors (WCAG AA compliant by default)
- Don't use color alone to convey info (add icons/text)

---

### 8. Testing Protocol

**Visual Testing** (Required):
```bash
# Test at 3 breakpoints
1. Mobile: 375px (iPhone SE)
2. Tablet: 768px (iPad)
3. Desktop: 1440px (Standard laptop)

# Test dark mode
# Toggle theme and verify all colors work

# Test animations
# Ensure animations play smoothly, no jank
```

**What to verify**:
- Layout doesn't break at any breakpoint
- Text is readable
- Buttons are tappable (min 44x44px touch target)
- Images scale correctly
- Dark mode colors are correct
- Animations are smooth

---

## 🔧 Common Tasks

### Task 1: Add Shadcn/UI Component

```bash
# 1. Install component
npx shadcn-ui@latest add dialog

# 2. Import and use
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

<Dialog>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Dialog content</p>
  </DialogContent>
</Dialog>
```

---

### Task 2: Create Custom Component

**Steps**:
1. Read similar components for patterns
2. Create file in appropriate directory
3. Define TypeScript interface
4. Implement component function
5. Add styling (Tailwind)
6. Add animations (Framer Motion)
7. Test at 3 breakpoints
8. Verify dark mode

---

### Task 3: Modify Existing Component

**Steps**:
1. Read component file
2. Understand current structure
3. Make minimal changes (don't over-refactor)
4. Maintain existing patterns
5. Test thoroughly

---

### Task 4: Make Component Responsive

**Pattern**:
```tsx
// Before (desktop only)
<div className="grid grid-cols-3 gap-6">

// After (responsive)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
```

**Check**:
- Mobile (1 column)
- Tablet (2 columns)
- Desktop (3 columns)
- Spacing adjusts appropriately

---

## 🚨 Error Handling

### TypeScript Errors

**Before committing**:
```bash
# Check TypeScript errors
npx tsc --noEmit

# If errors, fix them
# Common issues:
# - Missing prop types
# - Incorrect imports
# - Unused variables
```

---

### ESLint Errors

```bash
# Check linting
npm run lint

# Auto-fix if possible
npm run lint --fix

# Common issues:
# - Missing alt text
# - Missing key prop in lists
# - Unused variables
```

---

## 📚 Resources

**Must Read**:
- `.claude/core/design-system.md` - Design tokens, components
- `.claude/DEVELOPMENT_GUIDE.md` - Code standards
- `.claude/PROJECT_CONTEXT.md` - Tech stack

**External Docs**:
- [Shadcn/UI Components](https://ui.shadcn.com/docs/components)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

## 🎯 Success Criteria

**Before completing a task**:
- [ ] TypeScript compiles without errors
- [ ] ESLint passes
- [ ] Tested at 3 breakpoints (375px, 768px, 1440px)
- [ ] Dark mode works correctly
- [ ] Animations are smooth (< 0.5s duration)
- [ ] Accessibility: alt text, ARIA labels, semantic HTML
- [ ] Design system compliance (colors, spacing, components)
- [ ] Code follows existing patterns

---

## 🎉 Best Practices

1. **Read before writing** - Check existing code for patterns
2. **Mobile-first** - Design for 375px, enhance for larger
3. **Use design system** - Don't invent new colors/spacing
4. **Keep it simple** - Boring code is good code
5. **Test visually** - Don't just check TypeScript
6. **Ask when unsure** - Better to ask than guess

---

**Version**: v1.0.0
**Last Updated**: 2025-11-09
**Maintained By**: Kalyan Chandana
