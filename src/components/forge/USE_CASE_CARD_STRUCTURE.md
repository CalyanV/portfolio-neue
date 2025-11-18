# UseCaseCard Component Structure

## Visual Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│ Card (with hover effects and expansion ring)                   │
├─────────────────────────────────────────────────────────────────┤
│ Accordion (collapsible)                                         │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ COLLAPSED STATE (AccordionTrigger)                          │ │
│ │                                                             │ │
│ │  [Icon]  Title                                      [▼]    │ │
│ │          ┌────────┐ ┌──────────────┐ ┌──────────┐         │ │
│ │          │ 5h vs  │ │ High         │ │ 6 Agents │         │ │
│ │          │ 21h    │ │ Complexity   │ │          │         │ │
│ │          └────────┘ └──────────────┘ └──────────┘         │ │
│ │          Impact preview text (2 lines max)...               │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ EXPANDED STATE (AccordionContent)                           │ │
│ │                                                             │ │
│ │ ─────────────────────────────────────────                  │ │
│ │                                                             │ │
│ │ [!] Requirement                                             │ │
│ │     Full requirement description text...                    │ │
│ │                                                             │ │
│ │ [⚡] Key Challenges                                         │ │
│ │     • Challenge 1                                           │ │
│ │     • Challenge 2                                           │ │
│ │     • Challenge 3                                           │ │
│ │                                                             │ │
│ │ [📅] Development Timeline                                   │ │
│ │     ● Phase 1           [45 min]                           │ │
│ │     │ Description...                                        │ │
│ │     ● Phase 2           [2.5h]                             │ │
│ │     │ Description...                                        │ │
│ │     ● Phase 3           [1.5h]                             │ │
│ │       Description...                                        │ │
│ │                                                             │ │
│ │ [✓] What Shipped                                            │ │
│ │     ✓ Feature 1                                             │ │
│ │     ✓ Feature 2                                             │ │
│ │     ✓ Feature 3                                             │ │
│ │                                                             │ │
│ │ ┌───────────────────────────────────────────────────────┐   │ │
│ │ │ ["] User Feedback (highlighted background)            │   │ │
│ │ │     "Quote text here..."                              │   │ │
│ │ │     — Author Name, Title                              │   │ │
│ │ └───────────────────────────────────────────────────────┘   │ │
│ │                                                             │ │
│ │ [🔗] View Live Example →                                   │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Component Breakdown

### 1. **Card Wrapper**
- Border with neutral colors
- Transition effects on hover
- Ring effect when expanded (accent color)

### 2. **Collapsed State (Always Visible)**

#### Header Section
- **Icon**: Large (4xl) emoji/icon on the left
- **Title**: Bold, prominent heading
- **Metadata Badges** (3 badges in a row):
  - **Time Saved**: Clock icon + time comparison (accent background)
  - **Complexity**: Zap icon + level (color-coded: red/yellow/green)
  - **Agents**: Users icon + agent count (primary color)
- **Impact Preview**: 2-line truncated description

### 3. **Expanded State (Shows on click)**

#### Requirement Section
- AlertCircle icon (accent)
- Full requirement text

#### Challenges Section
- Zap icon (yellow)
- Bulleted list with yellow bullets
- Each challenge on its own line

#### Timeline Section
- Calendar icon (accent)
- Vertical timeline with dots
- Each phase shows:
  - Phase name
  - Duration badge
  - Description

#### What Shipped Section
- CheckCircle2 icon (green)
- List items with green checkmarks
- Each feature on its own line

#### User Feedback Section (Optional)
- Quote icon
- Highlighted background (neutral-50/900)
- Italic quote text
- Author attribution

#### Live Example Link (Optional)
- ExternalLink icon
- Hover effects (translate on icon)
- Opens in new tab

## Color System

### Complexity Colors
- **High**: `bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20`
- **Medium**: `bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20`
- **Low**: `bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20`

### Accent Colors
- Time Saved badge: `bg-accent/10 text-accent-foreground border-accent/20`
- Icons and highlights: `text-accent`
- Ring on expansion: `ring-accent/50`

### Semantic Colors
- Challenges: `text-yellow-500`
- Shipped features: `text-green-500`

## Icons Used (from lucide-react)

| Icon | Purpose | Color |
|------|---------|-------|
| Clock | Time saved metric | Accent |
| Zap | Complexity badge, challenges | Yellow/Dynamic |
| Users | Agent count | Primary |
| AlertCircle | Requirement section | Accent |
| Calendar | Timeline section | Accent |
| CheckCircle2 | What shipped section | Green |
| Quote | User feedback | Accent |
| ExternalLink | Live example link | Accent |

## Spacing & Typography

- **Card Padding**: `px-6 py-5` (trigger), `px-6 pb-6 pt-2` (content)
- **Section Spacing**: `space-y-6` between major sections
- **Badge Gaps**: `gap-2` between badges, `gap-1.5` inside badges
- **Icon Sizes**:
  - Main icon: `text-4xl`
  - Badge icons: `w-3.5 h-3.5`
  - Section icons: `w-4 h-4`
  - Quote icon: `w-5 h-5`
- **Text Sizes**:
  - Title: `text-lg font-semibold`
  - Section headings: `text-sm font-semibold`
  - Body text: `text-sm`
  - Badge text: `text-xs` (timeline badges)

## Animations

- **Accordion**: Built-in accordion-up/down animations
- **Chevron**: Rotates 180° when expanded
- **Card**: Ring appears with transition on expansion
- **Hover**: Background color transitions on trigger hover
- **Link**: Icon translates on hover

## Responsive Behavior

- Badges wrap to multiple rows on small screens (`flex-wrap`)
- Full width layout
- Text truncation in collapsed state (`line-clamp-2`)
- Maintains spacing and readability across screen sizes

## State Management

Uses `useState` to track expansion state:
- Syncs with Accordion value
- Allows programmatic control via `defaultOpen` prop
- Updates on user interaction
