# Design System

**Portfolio Design System Documentation**
**Framework Version**: v1.0.0
**Last Updated**: 2025-11-09

---

## 🎨 Overview

This portfolio uses a **minimal, monochromatic design system** built on:
- **Shadcn/UI** - Accessible component library (Radix UI based)
- **Tailwind CSS** - Utility-first CSS framework
- **HSL color tokens** - Theme-aware colors with CSS variables
- **Framer Motion** - Smooth, subtle animations
- **Next Themes** - Dark/light mode support

**Philosophy**: Clean, professional, content-focused. The design should enhance the work, not distract from it.

---

## 🌈 Color System

### Color Tokens (CSS Variables)

All colors use **HSL format** (`hsl(hue saturation lightness)`) for easy theme manipulation.

**Defined in**: `src/app/globals.css`
**Usage**: `bg-background`, `text-foreground`, `border-border`, etc.

---

### Light Mode Colors

```css
:root {
  --background: 0 0% 100%;           /* Pure white */
  --foreground: 210 11.1% 3.53%;     /* Very dark blue-gray */

  --card: 0 0% 100%;                 /* Card background (white) */
  --card-foreground: 210 11.1% 3.53%; /* Card text (dark) */

  --popover: 0 0% 100%;              /* Dropdown/popover background */
  --popover-foreground: 210 11.1% 3.53%; /* Dropdown text */

  --primary: 0 0% 9%;                /* Primary action (near black) */
  --primary-foreground: 0 0% 98%;    /* Text on primary (near white) */

  --secondary: 0 0% 96.1%;           /* Secondary surface (light gray) */
  --secondary-foreground: 0 0% 9%;   /* Text on secondary */

  --muted: 0 0% 96.1%;               /* Muted/disabled surface */
  --muted-foreground: 0 0% 45.1%;    /* Muted text (mid gray) */

  --accent: 0 0% 96.1%;              /* Accent highlights */
  --accent-foreground: 0 0% 9%;      /* Text on accent */

  --destructive: 0 84.2% 60.2%;      /* Error/danger (red) */
  --destructive-foreground: 0 0% 98%; /* Text on destructive */

  --border: 0 0% 89.8%;              /* Border color (light gray) */
  --input: 0 0% 89.8%;               /* Input border */
  --ring: 0 0% 3.9%;                 /* Focus ring (dark) */
}
```

---

### Dark Mode Colors

```css
.dark {
  --background: 210 11.1% 3.53%;     /* Very dark blue-gray */
  --foreground: 0 0% 98%;            /* Near white */

  --card: 210 11.1% 3.53%;           /* Card background (dark) */
  --card-foreground: 0 0% 98%;       /* Card text (light) */

  --popover: 210 11.1% 3.53%;        /* Dropdown background */
  --popover-foreground: 0 0% 98%;    /* Dropdown text */

  --primary: 0 0% 98%;               /* Primary action (near white) */
  --primary-foreground: 0 0% 9%;     /* Text on primary (dark) */

  --secondary: 0 0% 14.9%;           /* Secondary surface (dark gray) */
  --secondary-foreground: 0 0% 98%;  /* Text on secondary */

  --muted: 0 0% 14.9%;               /* Muted/disabled surface */
  --muted-foreground: 0 0% 63.9%;    /* Muted text (light gray) */

  --accent: 0 0% 14.9%;              /* Accent highlights */
  --accent-foreground: 0 0% 98%;     /* Text on accent */

  --destructive: 0 62.8% 30.6%;      /* Error/danger (darker red) */
  --destructive-foreground: 0 0% 98%; /* Text on destructive */

  --border: 0 0% 14.9%;              /* Border color (dark gray) */
  --input: 0 0% 14.9%;               /* Input border */
  --ring: 0 0% 83.1%;                /* Focus ring (light) */
}
```

---

### Using Color Tokens in Code

**Tailwind classes** (automatically theme-aware):
```tsx
// Background colors
<div className="bg-background">         {/* Main page background */}
<div className="bg-card">               {/* Card background */}
<div className="bg-primary">            {/* Primary button */}
<div className="bg-secondary">          {/* Secondary surface */}
<div className="bg-muted">              {/* Muted/disabled */}
<div className="bg-accent">             {/* Accent highlights */}
<div className="bg-destructive">        {/* Error states */}

// Text colors
<p className="text-foreground">         {/* Main text */}
<p className="text-muted-foreground">   {/* Secondary text */}
<p className="text-primary-foreground"> {/* Text on primary */}

// Borders
<div className="border border-border">  {/* Standard border */}
<input className="border-input">        {/* Input border */}
<button className="ring-ring">          {/* Focus ring */}
```

**CSS variables** (for advanced use):
```css
/* Access raw HSL values */
color: hsl(var(--primary));
background: hsl(var(--background));
border: 1px solid hsl(var(--border));
```

---

## 🔤 Typography

### Font Family

**Default**: System font stack
```tsx
font-sans // Uses system fonts (San Francisco on Mac, Roboto on Android, etc.)
```

**Configured in**: `src/app/layout.tsx`
```tsx
import { GeistSans } from "geist/font/sans"

// Applied to <html> element
className={`${GeistSans.variable}`}
```

---

### Type Scale

**Tailwind CSS default scale**:

| Class | Size | Line Height | Use Case |
|-------|------|-------------|----------|
| `text-xs` | 0.75rem (12px) | 1rem | Fine print, captions |
| `text-sm` | 0.875rem (14px) | 1.25rem | Small body text, labels |
| `text-base` | 1rem (16px) | 1.5rem | Body text (default) |
| `text-lg` | 1.125rem (18px) | 1.75rem | Large body, subheadings |
| `text-xl` | 1.25rem (20px) | 1.75rem | Small headings |
| `text-2xl` | 1.5rem (24px) | 2rem | Section headings |
| `text-3xl` | 1.875rem (30px) | 2.25rem | Page headings |
| `text-4xl` | 2.25rem (36px) | 2.5rem | Hero headings |
| `text-5xl` | 3rem (48px) | 1 | Large hero text |

**Responsive patterns**:
```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl">
  {/* Mobile: 30px, Tablet: 36px, Desktop: 48px */}
</h1>

<p className="text-sm md:text-base">
  {/* Mobile: 14px, Tablet+: 16px */}
</p>
```

---

### Font Weights

```tsx
font-thin       // 100
font-extralight // 200
font-light      // 300
font-normal     // 400 (default)
font-medium     // 500
font-semibold   // 600
font-bold       // 700
font-extrabold  // 800
font-black      // 900
```

**Common usage**:
```tsx
<h1 className="font-bold">Headings</h1>
<p className="font-normal">Body text</p>
<span className="font-medium">Emphasis</span>
```

---

## 📏 Spacing System

**Tailwind default spacing scale** (based on 4px increments):

| Class | Value | Pixels | Use Case |
|-------|-------|--------|----------|
| `0` | 0 | 0px | Reset spacing |
| `0.5` | 0.125rem | 2px | Tiny gaps |
| `1` | 0.25rem | 4px | Very small spacing |
| `2` | 0.5rem | 8px | Small spacing |
| `3` | 0.75rem | 12px | Medium-small |
| `4` | 1rem | 16px | **Base spacing** |
| `5` | 1.25rem | 20px | Medium |
| `6` | 1.5rem | 24px | Medium-large |
| `8` | 2rem | 32px | Large spacing |
| `10` | 2.5rem | 40px | Extra large |
| `12` | 3rem | 48px | Section spacing |
| `16` | 4rem | 64px | Large sections |
| `20` | 5rem | 80px | Hero spacing |
| `24` | 6rem | 96px | Page sections |

**Common patterns**:
```tsx
<div className="p-4">      {/* 16px padding all sides */}
<div className="px-6 py-4"> {/* 24px horizontal, 16px vertical */}
<div className="gap-4">    {/* 16px gap in flex/grid */}
<div className="space-y-8"> {/* 32px vertical space between children */}
<div className="mt-12 mb-8"> {/* 48px top margin, 32px bottom */}
```

---

## 🔲 Border Radius

**Custom radius values** (defined in `tailwind.config.ts`):

```tsx
--radius: 0.5rem; // 8px (base radius)
```

**Tailwind classes**:
```tsx
rounded-lg  // var(--radius) = 8px
rounded-md  // calc(var(--radius) - 2px) = 6px
rounded-sm  // calc(var(--radius) - 4px) = 4px
rounded     // 0.25rem = 4px
rounded-full // 9999px (perfect circle/pill)
```

**Usage**:
```tsx
<div className="rounded-lg">  {/* Cards, buttons (8px) */}
<img className="rounded-md">  {/* Images (6px) */}
<button className="rounded-full"> {/* Pills, avatars */}
```

---

## 🧩 Shadcn/UI Components

### Installed Components

**Current components** (in `src/components/ui/`):

1. **Avatar** - User profile pictures
   ```tsx
   import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

   <Avatar>
     <AvatarImage src="/me.png" alt="@username" />
     <AvatarFallback>KC</AvatarFallback>
   </Avatar>
   ```

2. **Badge** - Labels, tags, skill badges
   ```tsx
   import { Badge } from "@/components/ui/badge"

   <Badge variant="default">React</Badge>
   <Badge variant="secondary">TypeScript</Badge>
   <Badge variant="outline">Next.js</Badge>
   <Badge variant="destructive">Error</Badge>
   ```

3. **Button** - Actions, CTAs
   ```tsx
   import { Button } from "@/components/ui/button"

   <Button variant="default">Primary Action</Button>
   <Button variant="secondary">Secondary</Button>
   <Button variant="outline">Outlined</Button>
   <Button variant="ghost">Ghost</Button>
   <Button variant="link">Link</Button>
   <Button size="sm">Small</Button>
   <Button size="lg">Large</Button>
   <Button size="icon"><Icon /></Button>
   ```

4. **Card** - Content containers
   ```tsx
   import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

   <Card>
     <CardHeader>
       <CardTitle>Card Title</CardTitle>
       <CardDescription>Card description</CardDescription>
     </CardHeader>
     <CardContent>
       <p>Card content</p>
     </CardContent>
     <CardFooter>
       <Button>Action</Button>
     </CardFooter>
   </Card>
   ```

5. **Separator** - Visual dividers
   ```tsx
   import { Separator } from "@/components/ui/separator"

   <Separator />
   <Separator orientation="vertical" />
   ```

6. **Tooltip** - Hover information
   ```tsx
   import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

   <TooltipProvider>
     <Tooltip>
       <TooltipTrigger>Hover me</TooltipTrigger>
       <TooltipContent>
         <p>Tooltip content</p>
       </TooltipContent>
     </Tooltip>
   </TooltipProvider>
   ```

---

### Adding New Shadcn Components

```bash
# Browse available components
# https://ui.shadcn.com/docs/components

# Install a component (e.g., dialog)
npx shadcn-ui@latest add dialog

# Install multiple components
npx shadcn-ui@latest add dialog dropdown-menu tabs
```

**After installation**:
- Component appears in `src/components/ui/`
- Import and use in your pages/components
- Customize styling with Tailwind classes

---

## ✨ Magic UI Components

### Custom Animation Components

**Location**: `src/components/magicui/`

These are **hand-coded components** using Framer Motion, NOT from npm.

---

#### 1. BlurFade

**Purpose**: Fade-in animation with blur effect

**File**: `src/components/magicui/blur-fade.tsx`

**Usage**:
```tsx
import BlurFade from "@/components/magicui/blur-fade"

<BlurFade delay={0.25}>
  <h2>This fades in with blur</h2>
</BlurFade>
```

**Props**:
- `delay` (number) - Delay before animation starts (seconds)
- `duration` (number, optional) - Animation duration
- `children` (ReactNode) - Content to animate

**Common pattern** (stagger list items):
```tsx
{projects.map((project, idx) => (
  <BlurFade key={project.title} delay={0.25 + idx * 0.05}>
    <ProjectCard {...project} />
  </BlurFade>
))}
```

---

#### 2. BlurFadeText

**Purpose**: Text animation variant (animates by character/word)

**File**: `src/components/magicui/blur-fade-text.tsx`

**Usage**:
```tsx
import BlurFadeText from "@/components/magicui/blur-fade-text"

<BlurFadeText text="Animated Heading" delay={0.25} />
```

---

#### 3. Dock

**Purpose**: Floating navigation dock (macOS-style)

**File**: `src/components/magicui/dock.tsx`

**Usage**:
```tsx
import { Dock, DockIcon } from "@/components/magicui/dock"

<Dock>
  <DockIcon><HomeIcon /></DockIcon>
  <DockIcon><AboutIcon /></DockIcon>
  <DockIcon><ContactIcon /></DockIcon>
</Dock>
```

---

## 🎬 Animation Patterns

### Framer Motion Guidelines

**Philosophy**: Subtle, smooth, purposeful

**Recommended values**:
```tsx
// Durations
duration: 0.3  // Quick interactions
duration: 0.5  // Standard animations
duration: 0.8  // Slow, dramatic reveals

// Easing
ease: "easeOut"     // Most animations (feels natural)
ease: "easeInOut"   // Smooth start and end
ease: "linear"      // Constant speed (rare)

// Spring physics (alternative to duration/ease)
type: "spring"
stiffness: 100
damping: 10
```

**Common animation patterns**:
```tsx
// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
/>

// Slide up + fade
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
/>

// Scale + fade
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
/>

// Stagger children
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }}
>
  {items.map(item => (
    <motion.div variants={fadeInVariant} key={item.id}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

### Accessibility

**Respect reduced motion**:
Framer Motion automatically respects `prefers-reduced-motion`. No extra code needed.

```tsx
// Animations automatically disabled if user has reduced motion preference
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
/>
```

---

## 📱 Responsive Breakpoints

**Tailwind CSS default breakpoints**:

| Prefix | Min Width | Target Devices |
|--------|-----------|----------------|
| `sm:` | 640px | Large phones (landscape) |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Small laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large desktops |

**Mobile-first approach**:
```tsx
{/* Mobile (default), Tablet (768px+), Desktop (1024px+) */}
<div className="text-sm md:text-base lg:text-lg">

{/* 1 column mobile, 2 columns tablet, 3 columns desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

{/* Hidden on mobile, visible on tablet+ */}
<div className="hidden md:block">

{/* Padding changes across breakpoints */}
<div className="px-4 md:px-6 lg:px-8">
```

**Container widths**:
```tsx
<div className="container"> {/* Max 1400px, centered */}
```

**Configured in** `tailwind.config.ts`:
```ts
container: {
  center: true,
  padding: "2rem",
  screens: {
    "2xl": "1400px",
  },
}
```

---

## 🎯 Design Principles

### 1. Monochromatic Focus

- **Why**: Content is the hero, not the design
- **Implementation**: Grayscale palette (no brand colors)
- **Exception**: Red for destructive actions only

### 2. Generous Whitespace

- **Why**: Improves readability, feels premium
- **Implementation**: Large gaps (`gap-8`, `space-y-12`), generous padding

### 3. Subtle Animations

- **Why**: Delightful without being distracting
- **Implementation**: Short durations (< 0.5s), easeOut easing, blur-fade effects

### 4. Accessibility First

- **Why**: Everyone should be able to use the site
- **Implementation**: Semantic HTML, WCAG AA contrast, keyboard navigation, ARIA labels

### 5. Mobile-First Responsive

- **Why**: Most users view on mobile
- **Implementation**: Design for 375px first, enhance for larger screens

---

## 📚 Resources

### Official Documentation

- [Shadcn/UI Components](https://ui.shadcn.com/docs/components)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [Framer Motion](https://www.framer.com/motion/introduction/)
- [Next Themes](https://github.com/pacocoursey/next-themes)

### Tools

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (VS Code extension)
- [HSL Color Picker](https://hslpicker.com/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**Version**: v1.0.0
**Last Updated**: 2025-11-09
**Maintained By**: Kalyan Chandana
