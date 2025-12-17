# Technical Specification: Button Consistency

## Task Difficulty: **Easy**

This is a straightforward UI consistency task with clear requirements:
- Update `InteractiveHoverButton` hover state to use primary color
- Replace major CTAs with `InteractiveHoverButton`
- Ensure secondary/utility buttons use `Button` with appropriate variants

---

## Technical Context

### Language & Framework
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS variables (design tokens)
- **UI Library**: Shadcn/UI

### Key Dependencies
- `class-variance-authority` - Button variant system
- `lucide-react` - Icons
- `cn()` utility from `@/lib/utils` - Conditional class merging

### Design Token System
Primary color is defined as CSS variable:
- `--primary: hsl(182.7451 93.8650% 31.9608%)` (teal/cyan)
- `--primary-foreground: hsl(0 0% 100%)` (white)

---

## Current Button Usage Analysis

### InteractiveHoverButton (Major CTA)
| Location | Usage | Context |
|----------|-------|---------|
| `src/components/sections/hero/hero.tsx:62` | "About – KC" | Hero CTA ✅ Already correct |
| `src/app/about/page.tsx:97` | "Schedule a call" | About page CTA ✅ Already correct |

### Standard Button Usage
| Location | Usage | Variant | Classification |
|----------|-------|---------|----------------|
| `src/components/sections/about/about.tsx:33` | "View Resume" | outline | Secondary ✅ |
| `src/components/sections/about/about.tsx:38` | "Get in Touch" | default | **Major CTA → InteractiveHoverButton** |
| `src/components/sections/contact/contact.tsx:66` | "Send Message" | default | **Major CTA → InteractiveHoverButton** |
| `src/components/sections/experience/experience.tsx:86` | "View Full Resume" | outline | Secondary ✅ |
| `src/components/mode-toggle.tsx:22,29` | Theme toggle | ghost + icon | Utility ✅ |
| `src/components/ui/carousel.tsx:204,233` | Carousel nav | variant-based | Utility ✅ |

---

## Implementation Approach

### 1. Update InteractiveHoverButton Hover State

**File**: `src/components/magicui/interactive-hover-button.tsx`

**Current hover state**:
- The expanding dot uses `bg-accent`
- The sliding text container uses `text-primary-foreground`

**Required changes**:
- Change the dot background from `bg-accent` to `bg-primary` so it expands with primary color
- Keep `text-primary-foreground` for the text (already correct since it needs to be readable on primary)

### 2. Replace Major CTAs with InteractiveHoverButton

**About Section** (`src/components/sections/about/about.tsx`):
- Replace `<Button asChild>` for "Get in Touch" with `<InteractiveHoverButton>`
- Keep "View Resume" as `Button variant="outline"` (secondary action)

**Contact Section** (`src/components/sections/contact/contact.tsx`):
- Replace `<Button type="submit">` for "Send Message" with styled submit button
- Note: `InteractiveHoverButton` needs to support `type="submit"` (it already does via spread props)

---

## Source Code Changes

### Files to Modify

1. **`src/components/magicui/interactive-hover-button.tsx`**
   - Change `bg-accent` to `bg-primary` on the hover dot

2. **`src/components/sections/about/about.tsx`**
   - Import `InteractiveHoverButton`
   - Replace "Get in Touch" button with `InteractiveHoverButton`
   - Wrap with `Link` for navigation

3. **`src/components/sections/contact/contact.tsx`**
   - Import `InteractiveHoverButton`
   - Replace "Send Message" button with `InteractiveHoverButton`
   - Keep `type="submit"` and `className="w-full"`

### Files NOT to Modify
- `src/components/mode-toggle.tsx` - Theme toggle is a utility button (ghost variant appropriate)
- `src/components/ui/carousel.tsx` - Navigation controls are utility buttons
- `src/components/sections/experience/experience.tsx` - "View Full Resume" is secondary CTA (outline appropriate)
- `src/components/sections/about/about.tsx` "View Resume" button - secondary action

---

## Verification Approach

1. **Visual Verification**:
   - Run `npm run dev` and check:
     - Hero CTA hover: Should expand with primary (teal) color
     - About section "Get in Touch": Should use InteractiveHoverButton
     - Contact "Send Message": Should use InteractiveHoverButton with submit behavior
     - Secondary buttons (View Resume, View Full Resume): Should remain as outline variant

2. **Build Verification**:
   - Run `npm run build` to ensure no TypeScript errors
   - Run `npm run lint` to check for linting issues

3. **Functional Verification**:
   - Test form submission in contact section still works
   - Test all navigation links work correctly

---

## Button Classification Summary

| Button Type | Component | When to Use |
|-------------|-----------|-------------|
| **Major CTA** | `InteractiveHoverButton` | Primary actions, conversions (Schedule call, Get in Touch, Send Message) |
| **Secondary** | `Button variant="outline"` | Supporting actions (View Resume, Learn More) |
| **Utility** | `Button variant="ghost"` | Icon buttons, toggles, navigation controls |

---

## Accessibility & Theme Compliance

### Requirement
All CTAs must use **design tokens only** (no inline styles or hardcoded hex colors) to ensure proper contrast in both light and dark modes.

### Audit of InteractiveHoverButton
The component currently uses only Tailwind design token classes:
- `bg-background` - adapts to theme
- `bg-accent` → will change to `bg-primary` - adapts to theme
- `text-primary-foreground` - adapts to theme
- `border` - adapts to theme

**No inline styles or hardcoded colors** - Component is theme-safe.

### Contrast Verification
Primary color tokens provide adequate contrast:
- **Light mode**: `--primary: hsl(182.7451 93.8650% 31.9608%)` with `--primary-foreground: hsl(0 0% 100%)`
- **Dark mode**: Same primary with white foreground

Both pass WCAG AA contrast requirements (white text on teal background).
