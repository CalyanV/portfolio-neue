# PhaseTimeline Component - Visual Preview

## Component Appearance

```
┌─────────────────────────────────────────────────────────────┐
│  FORGE Workflow - 5 Phase Timeline                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 📋  Planning                              [~2h]        [▼]  │
│     Strategic decomposition and architectural planning       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│     What Happens                                            │
│     • Brainstorm with user to understand requirements...    │
│     • Decompose feature into manageable user stories        │
│     • Create dependency graph to identify parallel...       │
│     • Define API contracts between frontend and backend     │
│     • Generate comprehensive test cases for all...          │
│     • Create Linear issues with detailed specifications     │
│                                                              │
│     Output                                                  │
│     ✓ Detailed user stories with acceptance criteria        │
│     ✓ Dependency graph showing parallel execution paths     │
│     ✓ API contract specifications (GraphQL/REST schemas)    │
│     ✓ Test case suite covering all scenarios               │
│     ✓ Linear issues ready for execution                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
        │
        │ (Animated Beam with gradient: blue → purple)
        ▼
┌─────────────────────────────────────────────────────────────┐
│ ⚡  Parallel Execution                   [3-6h]       [▶]  │
│     Simultaneous development across multiple agents          │
└─────────────────────────────────────────────────────────────┘
        │
        │ (Animated Beam)
        ▼
┌─────────────────────────────────────────────────────────────┐
│ 🔗  Integration                        [30-60m]       [▶]  │
│     Automated quality gates and comprehensive validation     │
└─────────────────────────────────────────────────────────────┘
        │
        │ (Animated Beam)
        ▼
┌─────────────────────────────────────────────────────────────┐
│ 🚀  Deployment                         [15-30m]       [▶]  │
│     Safe, automated deployment with monitoring               │
└─────────────────────────────────────────────────────────────┘
        │
        │ (Animated Beam)
        ▼
┌─────────────────────────────────────────────────────────────┐
│ 🔄  Iterate                          [Continuous]     [▶]  │
│     Continuous improvement based on real-world usage         │
└─────────────────────────────────────────────────────────────┘
```

## Visual Elements

### Phase Card (Collapsed)
```
┌────────────────────────────────────────────────┐
│  [🎯]  Phase Title         [Duration] [▶]     │
│        Brief description of the phase          │
└────────────────────────────────────────────────┘
```

### Phase Card (Expanded)
```
┌────────────────────────────────────────────────┐
│  [🎯]  Phase Title         [Duration] [▼]     │
│        Brief description of the phase          │
├────────────────────────────────────────────────┤
│                                                │
│        What Happens                            │
│        • Action item 1                         │
│        • Action item 2                         │
│                                                │
│        Output                                  │
│        ✓ Deliverable 1                         │
│        ✓ Deliverable 2                         │
│                                                │
│        Rules                                   │
│        ⚡ Rule 1                                │
│        ⚡ Rule 2                                │
│                                                │
└────────────────────────────────────────────────┘
```

## Color Scheme

### Light Mode
- **Card Background**: White (#FFFFFF)
- **Card Border**: Neutral-200 (#E5E5E5)
- **Icon Gradient**: Blue-500 → Purple-600
- **Duration Badge**: Blue-100 background, Blue-700 text
- **Text Primary**: Neutral-900
- **Text Secondary**: Neutral-600
- **Bullet Points**: Blue-500
- **Checkmarks**: Green-500
- **Lightning**: Amber-500

### Dark Mode
- **Card Background**: Neutral-900 (#171717)
- **Card Border**: Neutral-800 (#262626)
- **Icon Gradient**: Blue-600 → Purple-700
- **Duration Badge**: Blue-900/30 background, Blue-300 text
- **Text Primary**: Neutral-100
- **Text Secondary**: Neutral-400
- **Bullet Points**: Blue-400
- **Checkmarks**: Green-400
- **Lightning**: Amber-400

## Animations

### Entry Animation (BlurFade)
- Duration: 400ms
- Delay: 100ms + (index × 100ms)
- Effect: Blur(6px) → Blur(0), Y-offset(6px) → Y(0), Opacity(0) → Opacity(1)

### Accordion Toggle
- Height: 0 → auto (300ms ease-in-out)
- Opacity: 0 → 1 (200ms ease-in-out)
- Icon Rotation: 0° → 180° (300ms)

### List Item Animation
- Delay: index × 50ms
- Effect: X(-10px) → X(0), Opacity(0) → Opacity(1)

### Animated Beam
- Duration: 3s infinite
- Gradient: Blue-500 (#3b82f6) → Purple-600 (#8b5cf6)
- Path: Linear from center of phase to center of next phase
- Stagger: index × 200ms

## Responsive Breakpoints

### Mobile (< 640px)
- Full-width cards
- Icon size: 48px
- Padding: 1rem
- Font sizes reduced
- Beams become vertical

### Tablet (640px - 1024px)
- Optimized spacing
- Icon size: 48px
- Padding: 1.5rem

### Desktop (> 1024px)
- Maximum visual impact
- Icon size: 48px
- Padding: 1.5rem
- Full beam animations

## Interaction States

### Default
- Shadow: sm
- Border: neutral-200/800

### Hover (Card)
- Background: neutral-50/neutral-800
- Shadow: md
- Transition: 300ms

### Focus (Button)
- Outline ring visible
- Keyboard accessible

### Active (Expanded)
- Chevron rotated 180°
- Content visible with animation
- Height expanded

## Accessibility

- ✓ Semantic HTML (button, div, ul, li)
- ✓ Keyboard navigation support
- ✓ Focus visible states
- ✓ ARIA-compatible accordion pattern
- ✓ Color contrast WCAG AA compliant
- ✓ Motion respects prefers-reduced-motion
- ✓ Screen reader friendly text
