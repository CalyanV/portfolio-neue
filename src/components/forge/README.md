# FORGE Components

This directory contains specialized components for the FORGE case study.

## Components

### PhaseTimeline

A visually appealing timeline component that displays the 5 phases of FORGE's AI-powered development workflow with expandable accordion sections and animated beam connections.

**Location:** `/src/components/forge/phase-timeline.tsx`

#### Features

- **Expandable Accordions**: Click any phase to expand/collapse details
- **Animated Beams**: Smooth animated connections between phases using AnimatedBeam from MagicUI
- **Responsive Design**: Works beautifully on all screen sizes
- **Dark Mode**: Fully supports dark mode theming
- **Smooth Animations**: BlurFade entry animations and Framer Motion transitions
- **Interactive UI**: Hover effects and smooth state transitions
- **TypeScript**: Fully typed with comprehensive interfaces

#### Usage

```tsx
import { PhaseTimeline, DEFAULT_FORGE_PHASES } from "@/components/forge/phase-timeline";

export default function ForgePage() {
  return (
    <div className="container mx-auto py-12">
      <PhaseTimeline phases={DEFAULT_FORGE_PHASES} />
    </div>
  );
}
```

#### Props

```typescript
interface Phase {
  id: string;              // Unique identifier
  icon: string;            // Emoji or icon
  title: string;           // Phase title
  duration: string;        // Time estimate (e.g., "~2h")
  description: string;     // Brief description
  details: {
    whatHappens: string[]; // List of actions in this phase
    output?: string[];     // Optional: deliverables
    rules?: string[];      // Optional: rules/constraints
  };
}

interface PhaseTimelineProps {
  phases: Phase[];         // Array of phases to display
  className?: string;      // Optional: additional CSS classes
}
```

#### Default Phases

The component exports `DEFAULT_FORGE_PHASES` with all 5 phases pre-configured:

1. **Planning** (~2h) - Strategic decomposition and architectural planning
2. **Parallel Execution** (3-6h) - Simultaneous development across multiple agents
3. **Integration** (30-60m) - Automated quality gates and comprehensive validation
4. **Deployment** (15-30m) - Safe, automated deployment with monitoring
5. **Iterate** (Continuous) - Continuous improvement based on real-world usage

#### Customization

You can customize the phases by providing your own array:

```tsx
import { PhaseTimeline, Phase } from "@/components/forge/phase-timeline";

const customPhases: Phase[] = [
  {
    id: "discover",
    icon: "🔍",
    title: "Discovery",
    duration: "1-2d",
    description: "Research and exploration phase",
    details: {
      whatHappens: [
        "User research and interviews",
        "Competitive analysis",
        "Requirements gathering"
      ],
      output: [
        "User personas",
        "Feature requirements",
        "Technical specifications"
      ]
    }
  },
  // ... more phases
];

export default function CustomWorkflow() {
  return <PhaseTimeline phases={customPhases} className="my-8" />;
}
```

#### Styling

The component uses Tailwind CSS classes and supports:
- Light/dark mode themes
- Responsive breakpoints
- Custom className prop for additional styling

#### Dependencies

- `motion/react` (Framer Motion) - Smooth animations
- `lucide-react` - ChevronDown icon
- `@/components/magicui/blur-fade` - Entry animations
- `@/components/magicui/animated-beam` - Connecting beams
- `@/lib/utils` - Utility functions (cn)

#### Example

See `phase-timeline-example.tsx` for a complete implementation example.

---

## Design Principles

All FORGE components follow these principles:

1. **Accessibility First** - WCAG 2.1 AA compliant
2. **Performance** - Optimized animations and lazy loading
3. **Responsive** - Mobile-first, works on all devices
4. **Dark Mode** - Full dark mode support
5. **Type Safety** - Comprehensive TypeScript types
6. **Reusable** - Modular and composable components
