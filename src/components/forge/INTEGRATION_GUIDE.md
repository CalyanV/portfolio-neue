# PhaseTimeline - Integration Guide

## Quick Start

### 1. Import the Component
```tsx
import { PhaseTimeline, DEFAULT_FORGE_PHASES } from "@/components/forge/phase-timeline";
```

### 2. Add to Your Page
```tsx
export default function ForgePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">FORGE Workflow</h1>
      <PhaseTimeline phases={DEFAULT_FORGE_PHASES} />
    </div>
  );
}
```

### 3. That's it! 
The component is fully self-contained with all 5 phases pre-configured.

---

## Advanced Usage

### Custom Styling
```tsx
<PhaseTimeline 
  phases={DEFAULT_FORGE_PHASES} 
  className="max-w-4xl mx-auto my-16"
/>
```

### Custom Phases
```tsx
import { PhaseTimeline, Phase } from "@/components/forge/phase-timeline";

const myPhases: Phase[] = [
  {
    id: "research",
    icon: "🔍",
    title: "Research",
    duration: "1-2 days",
    description: "User research and competitive analysis",
    details: {
      whatHappens: [
        "Conduct user interviews",
        "Analyze competitors",
        "Gather requirements"
      ],
      output: [
        "User personas",
        "Market analysis report",
        "Feature requirements doc"
      ],
      rules: [
        "Talk to at least 10 users",
        "Document all findings"
      ]
    }
  },
  // ... more phases
];

<PhaseTimeline phases={myPhases} />
```

### Combine with Other Components
```tsx
export default function WorkflowPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <h1>Our Workflow</h1>
        <p>How we build features in record time</p>
      </section>

      {/* Timeline */}
      <section>
        <PhaseTimeline phases={DEFAULT_FORGE_PHASES} />
      </section>

      {/* CTA */}
      <section>
        <button>Try FORGE Today</button>
      </section>
    </div>
  );
}
```

---

## Customization Options

### Color Themes
The component uses Tailwind colors. You can customize by modifying the component or wrapping in a custom theme provider.

**Current colors:**
- Icons: Blue-500 → Purple-600 gradient
- Duration badges: Blue-100/Blue-700 (light), Blue-900/Blue-300 (dark)
- Beams: Blue-500 → Purple-600 gradient

### Animation Timing
Modify animation durations in the component:
- Entry delay: `0.1 + index * 0.1` seconds
- Accordion transition: `300ms`
- Beam duration: `3s`

### Icon Customization
Replace emoji icons with React components:
```tsx
const customPhases: Phase[] = [
  {
    id: "plan",
    icon: <ClipboardIcon className="w-6 h-6" />, // ⚠️ Update type definition
    // ... rest of phase
  }
];
```

---

## Responsive Behavior

The component is fully responsive:
- **Mobile (<640px)**: Compact layout, smaller icons
- **Tablet (640-1024px)**: Medium spacing
- **Desktop (>1024px)**: Full visual treatment with animations

No additional configuration needed!

---

## Performance Tips

### 1. Lazy Loading
For pages with many sections:
```tsx
import dynamic from 'next/dynamic';

const PhaseTimeline = dynamic(
  () => import('@/components/forge/phase-timeline').then(mod => mod.PhaseTimeline),
  { ssr: true } // Keep SSR for SEO
);
```

### 2. Reduce Animations
For pages with many timeline instances:
```tsx
// Reduce beam count or disable
// Modify component or create a "minimal" variant
```

### 3. Code Splitting
The component is already optimized for tree-shaking when importing specific exports.

---

## Accessibility Checklist

- [x] Keyboard navigation (Tab to focus buttons, Enter/Space to toggle)
- [x] Screen reader support (semantic HTML)
- [x] Color contrast (WCAG AA compliant)
- [x] Focus indicators (visible outline on focus)
- [x] Motion reduction (respects prefers-reduced-motion)

---

## Common Issues

### Issue: Beams not appearing
**Solution:** Ensure the container has a defined size and the refs are properly set.

### Issue: Animations not smooth
**Solution:** Check for CSS conflicts or motion preference settings.

### Issue: Dark mode not working
**Solution:** Ensure your app has dark mode configured in Tailwind and the theme provider is set up.

### Issue: TypeScript errors
**Solution:** Make sure all imports are from the correct paths and types are properly exported.

---

## Browser Support

- ✓ Chrome/Edge (latest 2 versions)
- ✓ Firefox (latest 2 versions)
- ✓ Safari (latest 2 versions)
- ✓ Mobile browsers (iOS Safari, Chrome Mobile)

**Requires:**
- CSS Grid support
- Framer Motion compatibility
- SVG support for beams

---

## Dependencies

All dependencies are already in your package.json:
- `motion/react` (Framer Motion)
- `lucide-react`
- `@/components/magicui/*` (already in your project)

No additional installation needed!

---

## Examples

See these files for complete examples:
- `phase-timeline-example.tsx` - Basic usage
- `VISUAL_PREVIEW.md` - Visual representation
- `README.md` - Full documentation

---

## Support

For issues or questions:
1. Check the README.md
2. Review VISUAL_PREVIEW.md for design reference
3. See phase-timeline-example.tsx for usage patterns
4. Inspect the component source code for customization

---

## Version History

**v1.0.0** (2025-11-16)
- Initial release
- 5 pre-configured FORGE phases
- Full TypeScript support
- Dark mode support
- Responsive design
- Animated beams
- Accordion functionality
