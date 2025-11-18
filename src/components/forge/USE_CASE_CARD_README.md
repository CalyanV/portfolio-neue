# UseCaseCard Component Documentation

## Overview

The `UseCaseCard` component is an expandable card designed to showcase real-world use cases for the FORGE platform. It displays production features with detailed information about time savings, complexity, agent usage, and implementation details.

## Features

- **Expandable/Collapsible**: Uses shadcn Accordion for smooth expand/collapse animations
- **Rich Metadata Display**: Shows time saved, complexity level, and number of agents used
- **Color-Coded Complexity**: Visual indicators for High (red), Medium (yellow), and Low (green) complexity
- **Detailed Information**: Displays requirements, challenges, timeline, shipped features, and user feedback
- **Interactive Hover Effects**: Enhanced visual feedback on hover
- **Dark Mode Support**: Full support for light and dark themes
- **TypeScript Support**: Fully typed interfaces for type safety

## Installation

The component uses the following shadcn UI components:

```bash
npx shadcn@latest add accordion
npx shadcn@latest add badge
npx shadcn@latest add card
```

## Usage

### Basic Usage

```tsx
import { UseCaseCard } from "@/components/forge/use-case-card";

const myUseCase = {
  icon: "📧",
  title: "Monthly Newsletter System",
  timeSaved: "5h vs 21h traditional (76% faster)",
  complexity: "High",
  agents: 6,
  impact: "Automated multi-section newsletter generation...",
  requirement: "Build a system to automatically generate...",
  challenges: [
    "Content aggregation from multiple sources",
    "Dynamic personalization based on member interests",
  ],
  timeline: [
    {
      phase: "Planning & Architecture",
      duration: "45 min",
      description: "Designed agent orchestration flow",
    },
  ],
  whatShipped: [
    "Automated content curation from 5+ different data sources",
    "Dynamic personalization engine supporting 12 member segments",
  ],
};

function MyComponent() {
  return <UseCaseCard useCase={myUseCase} />;
}
```

### Using Pre-built Examples

```tsx
import { UseCaseExamplesSection, useCaseExamples } from "@/components/forge";

// Use the complete section with all examples
function MyPage() {
  return <UseCaseExamplesSection />;
}

// Or use individual examples
function MyCustomSection() {
  return (
    <div>
      {useCaseExamples.map((useCase, index) => (
        <UseCaseCard key={index} useCase={useCase} defaultOpen={index === 0} />
      ))}
    </div>
  );
}
```

## Props

### UseCaseCardProps

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `useCase` | `UseCase` | Yes | - | The use case data to display |
| `className` | `string` | No | - | Additional CSS classes for the card |
| `defaultOpen` | `boolean` | No | `false` | Whether the card starts expanded |

### UseCase Interface

```typescript
interface UseCase {
  icon: string;                    // Emoji or icon string
  title: string;                   // Use case title
  timeSaved: string;               // e.g., "5h vs 21h traditional (76% faster)"
  complexity: "High" | "Medium" | "Low";  // Complexity level
  agents: number;                  // Number of agents used
  impact: string;                  // Brief impact summary
  requirement: string;             // Original requirement
  challenges: string[];            // Array of challenges faced
  timeline: {
    phase: string;                 // Timeline phase name
    duration: string;              // Phase duration
    description: string;           // Phase description
  }[];
  whatShipped: string[];           // Array of shipped features
  liveExample?: string;            // Optional link to live demo
  userFeedback?: {
    quote: string;                 // User testimonial
    author: string;                // Quote author
  };
}
```

## Styling

The component uses Tailwind CSS and respects your theme configuration. It includes:

- Neutral color scheme that adapts to light/dark mode
- Accent color for highlights and interactive elements
- Complexity-based color coding (red/yellow/green)
- Smooth transitions and animations
- Responsive typography and spacing

## Examples

### Example 1: High Complexity Feature

```tsx
const newsletterUseCase = {
  icon: "📧",
  title: "Monthly Newsletter System",
  timeSaved: "5h vs 21h traditional (76% faster)",
  complexity: "High",
  agents: 6,
  impact: "Automated multi-section newsletter generation with dynamic content sourcing",
  requirement: "Build a system to automatically generate and distribute monthly newsletters",
  challenges: [
    "Content aggregation from multiple sources",
    "Dynamic personalization based on member interests",
    "Multi-format output (HTML email, PDF archive, web preview)",
  ],
  timeline: [
    {
      phase: "Planning & Architecture",
      duration: "45 min",
      description: "Designed agent orchestration flow and defined data sources",
    },
    {
      phase: "Agent Development",
      duration: "2.5 hours",
      description: "Built 6 specialized agents",
    },
  ],
  whatShipped: [
    "Automated content curation from 5+ different data sources",
    "Dynamic personalization engine supporting 12 member segments",
    "Multi-format output generator (HTML, PDF, plain text)",
  ],
  userFeedback: {
    quote: "What used to take our team a full day now happens in under an hour.",
    author: "Sarah Chen, Communications Director",
  },
};

<UseCaseCard useCase={newsletterUseCase} defaultOpen />
```

### Example 2: Low Complexity Feature

```tsx
const photoUploadUseCase = {
  icon: "📸",
  title: "Photo Upload & Processing",
  timeSaved: "2h vs 8h traditional (75% faster)",
  complexity: "Low",
  agents: 3,
  impact: "Automated image upload with intelligent processing",
  requirement: "Enable bulk photo uploads with automatic resizing and compression",
  challenges: [
    "Handling large batch uploads without blocking the UI",
    "Optimizing images for web while maintaining quality",
  ],
  timeline: [
    {
      phase: "Setup & Configuration",
      duration: "20 min",
      description: "Configured image processing pipeline",
    },
    {
      phase: "Agent Development",
      duration: "1 hour",
      description: "Built Upload Manager, Image Processor, Album Organizer agents",
    },
  ],
  whatShipped: [
    "Drag-and-drop bulk upload supporting 100+ images",
    "Automatic image optimization (WebP conversion, responsive variants)",
    "Gallery preview with lazy loading and infinite scroll",
  ],
  liveExample: "https://example.com/photos/demo",
};

<UseCaseCard useCase={photoUploadUseCase} />
```

## Accessibility

- Semantic HTML structure with proper heading hierarchy
- Keyboard navigation support via Radix UI Accordion
- Focus management for interactive elements
- ARIA attributes for screen readers
- Sufficient color contrast in both light and dark modes

## Browser Support

Works in all modern browsers that support:
- CSS Grid and Flexbox
- CSS Custom Properties
- ES6+ JavaScript

## Tips

1. **Use meaningful icons**: Choose emoji or icon strings that represent the feature
2. **Be specific with time savings**: Include concrete numbers and percentages
3. **Keep challenges concise**: 3-5 key challenges work best
4. **Structure timeline logically**: Order phases chronologically
5. **Highlight real results**: Focus on measurable outcomes in "What Shipped"
6. **Include user feedback**: Real quotes add credibility

## Related Components

- `AgentArchitectureDiagram`: Visualize agent relationships
- `PhaseTimeline`: Show project phases and milestones

## License

Part of the KC Portfolio project.
