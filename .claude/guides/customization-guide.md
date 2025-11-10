# Customization Guide

**Goal**: Make this portfolio truly yours - beyond just replacing placeholder content.

**Audience**: Product designer + AI native developer ready to add personal touches.

---

## Philosophy

This template is designed to be customized. You should:

- **Keep what works** - The structure, animations, and layout are solid
- **Remove what doesn't fit** - Not everyone has hackathons, some have certifications instead
- **Add what's missing** - Custom sections, unique features, your personality

**Rule of thumb**: Start with small changes. Test often. Ship when you're proud.

---

## Level 1: Content Customization (No Code)

### Remove Sections You Don't Need

**Open**: `src/data/resume.tsx`

**Option 1: Hide entire section**

Comment out or remove the section you don't want:

```tsx
export const DATA = {
  // ... other fields

  // Comment out hackathons if you don't have any
  // hackathons: [],

  // Or delete the hackathons array entirely
}
```

**Then** open `src/app/page.tsx` and remove/comment the section:

```tsx
// Remove or comment this entire block
{/* <BlurFade delay={BLUR_FADE_DELAY * 13}>
  <h2 className="text-xl font-bold">Hackathons</h2>
</BlurFade>
<BlurFade delay={BLUR_FADE_DELAY * 14}>
  <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
    {DATA.hackathons.map((project, id) => (
      <HackathonCard
        key={id}
        title={project.title}
        // ...
      />
    ))}
  </ul>
</BlurFade> */}
```

**Common sections to remove**:
- Hackathons (if not applicable)
- Education (if you're self-taught)
- Work experience (if you're a student)

### Add Custom Sections

**Example**: Add a "Certifications" section

1. **Add data to resume.tsx**:

```tsx
certifications: [
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2024",
    url: "https://coursera.org/verify/...",
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://aws.amazon.com/certification/...",
  },
],
```

2. **Add section to page.tsx**:

```tsx
<section id="certifications">
  <BlurFade delay={BLUR_FADE_DELAY * 10}>
    <h2 className="text-xl font-bold">Certifications</h2>
  </BlurFade>
  <BlurFade delay={BLUR_FADE_DELAY * 11}>
    <ul className="mb-4 ml-4 space-y-2">
      {DATA.certifications.map((cert, id) => (
        <li key={id}>
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <strong>{cert.name}</strong> - {cert.issuer} ({cert.date})
          </a>
        </li>
      ))}
    </ul>
  </BlurFade>
</section>
```

### Customize Bio and Summary

**Your summary is crucial** - it's what hiring managers read first.

**Good formula**:
1. What you do (role/expertise)
2. What you've accomplished (quantifiable if possible)
3. What you're passionate about
4. Call to action or current focus

**Example**:

```tsx
summary: "Product designer with 5 years building AI-native tools. Led design for 3 SaaS products from 0→1, including a design system used by 50K+ developers. Currently exploring the intersection of AI and creative tools. Open to product design roles at early-stage startups.",
```

**Tips**:
- Keep it under 3 sentences for readability
- Use numbers/metrics when possible ("5 years", "50K users")
- End with what you're looking for (job, collaboration, learning)
- Update quarterly as your focus changes

---

## Level 2: Design Customization (Light Code)

### Change Colors/Theme

**Current theme**: Uses Shadcn/UI defaults with dark mode support.

**To customize colors**:

**Open**: `src/app/globals.css`

Find the CSS variables:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... more variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    /* ... more variables */
  }
}
```

**Change primary color** (buttons, links, accents):

```css
:root {
  --primary: 240 100% 50%;  /* Blue */
  /* Or use HSL color picker to find your brand color */
}
```

**Tip**: Use [HSL Color Picker](https://hslpicker.com/) to find HSL values.

**Common customizations**:
- **Primary color**: Your brand color (buttons, links)
- **Background**: Page background (white/dark)
- **Foreground**: Text color
- **Accent**: Secondary highlights

### Change Fonts

**Current fonts**: Inter (from Google Fonts)

**Open**: `src/app/layout.tsx`

Replace font:

```tsx
import { Montserrat } from "next/font/google";

const font = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});
```

**Or use custom font**:

1. Add font files to `public/fonts/`
2. Update `globals.css`:

```css
@font-face {
  font-family: 'YourCustomFont';
  src: url('/fonts/your-font.woff2') format('woff2');
}

body {
  font-family: 'YourCustomFont', sans-serif;
}
```

**Recommended Google Fonts** (for portfolios):
- **Serif**: Playfair Display, Lora, Merriweather
- **Sans-serif**: Inter, Poppins, DM Sans, Outfit
- **Monospace**: JetBrains Mono, Fira Code

### Customize Animation Speed

**Current**: Blur-fade animations with 0.04s delay between elements

**Open**: `src/app/page.tsx`

Change delay constant:

```tsx
const BLUR_FADE_DELAY = 0.04;  // Default

// Faster animations
const BLUR_FADE_DELAY = 0.02;

// Slower, more dramatic
const BLUR_FADE_DELAY = 0.08;

// No stagger (all at once)
const BLUR_FADE_DELAY = 0;
```

**Disable animations entirely**:

Replace `<BlurFade>` with `<div>`:

```tsx
// Before
<BlurFade delay={BLUR_FADE_DELAY * 11}>
  <h2>Work Experience</h2>
</BlurFade>

// After (no animation)
<div>
  <h2>Work Experience</h2>
</div>
```

---

## Level 3: Layout Customization (Medium Code)

### Change Project Grid Layout

**Current**: 2-column grid on desktop, 1-column on mobile

**Open**: `src/app/page.tsx`

Find projects section:

```tsx
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
  {DATA.projects.map((project, id) => (
    <ProjectCard key={id} {...project} />
  ))}
</div>
```

**Change to 3 columns**:

```tsx
<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
```

**Or single column (showcase style)**:

```tsx
<div className="flex flex-col gap-6 max-w-[600px] mx-auto">
```

### Reorder Homepage Sections

**Open**: `src/app/page.tsx`

Sections are rendered in order. Cut and paste to reorder:

**Example**: Show projects before work experience:

```tsx
export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section id="hero">...</section>

      {/* About */}
      <section id="about">...</section>

      {/* Projects FIRST */}
      <section id="projects">...</section>

      {/* Work SECOND */}
      <section id="work">...</section>

      {/* Skills */}
      <section id="skills">...</section>

      {/* Contact */}
      <section id="contact">...</section>
    </main>
  );
}
```

**Remember**: Update `BLUR_FADE_DELAY` multipliers if you reorder (optional).

### Add Sidebar Layout

**Current**: Single-column centered layout

**To add sidebar** (e.g., sticky contact info):

```tsx
<div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
  {/* Main content */}
  <main className="flex-1">
    {/* Your sections here */}
  </main>

  {/* Sidebar */}
  <aside className="md:w-64 md:sticky md:top-20 h-fit">
    <div className="rounded-lg border bg-card p-6">
      <h3 className="font-bold mb-4">Contact</h3>
      {/* Contact info */}
    </div>
  </aside>
</div>
```

---

## Level 4: Component Customization (Advanced Code)

### Customize Project Cards

**Open**: `src/components/project-card.tsx`

**Change card design**:

```tsx
// Add gradient border
<Card className="border-2 border-transparent bg-gradient-to-r from-primary to-accent p-[2px]">
  <div className="bg-card rounded-lg p-4">
    {/* Card content */}
  </div>
</Card>

// Add hover lift effect
<Card className="transition-transform hover:-translate-y-2 hover:shadow-xl">

// Change aspect ratio
<AspectRatio ratio={16 / 9}>  {/* Default: 16/9 */}
<AspectRatio ratio={4 / 3}>   {/* More square */}
```

### Customize Work Experience Cards

**Open**: `src/components/resume-card.tsx`

**Add company logo to cards**:

```tsx
<Card>
  <CardHeader>
    <div className="flex items-center gap-3">
      {logoUrl && (
        <img src={logoUrl} alt={company} className="w-10 h-10 rounded" />
      )}
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{company}</CardDescription>
      </div>
    </div>
  </CardHeader>
  {/* ... rest of card */}
</Card>
```

### Add New Shadcn/UI Components

**Example**: Add a tooltip to skills badges

1. **Install component**:
```bash
npx shadcn-ui@latest add tooltip
```

2. **Use in page.tsx**:

```tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

<TooltipProvider>
  {DATA.skills.map((skill) => (
    <Tooltip key={skill}>
      <TooltipTrigger>
        <Badge>{skill}</Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>Click to see projects using {skill}</p>
      </TooltipContent>
    </Tooltip>
  ))}
</TooltipProvider>
```

---

## Level 5: Advanced Features (Expert Code)

### Add Contact Form

**Not included by default** - requires backend/service integration.

**Options**:
1. **Formspree** (free tier available)
2. **Resend** (email API)
3. **Web3Forms** (free, no backend)

**Example with Web3Forms**:

```tsx
// src/components/contact-form.tsx
export function ContactForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    alert("Message sent!");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  );
}
```

### Add Analytics

**Recommended**: Plausible Analytics (privacy-friendly, lightweight)

1. **Install**:
```bash
npm install next-plausible
```

2. **Update layout.tsx**:

```tsx
import PlausibleProvider from 'next-plausible';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <PlausibleProvider domain="yourdomain.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Add Blog Categories/Tags

**Current**: No categorization

**To add tags**:

1. **Update blog frontmatter**:

```mdx
---
title: "My Post"
summary: "..."
publishedAt: "2024-01-01"
tags: ["design", "AI", "tutorial"]
---
```

2. **Update blog listing** (`src/app/blog/page.tsx`):

```tsx
// Filter by tag
const selectedTag = "design";
const filteredPosts = posts.filter(post =>
  post.metadata.tags?.includes(selectedTag)
);
```

3. **Add tag badges** to blog cards:

```tsx
<div className="flex gap-2 mt-2">
  {post.metadata.tags?.map(tag => (
    <Badge key={tag} variant="secondary">{tag}</Badge>
  ))}
</div>
```

---

## Pre-Built Customization Ideas

### Minimalist Style

```css
/* Remove all animations */
/* Use monochrome colors */
/* Increase whitespace */

:root {
  --primary: 0 0% 0%;        /* Black */
  --background: 0 0% 100%;   /* White */
}

/* Increase section spacing */
section {
  @apply py-24;  /* More breathing room */
}
```

### Bold/Colorful Style

```css
:root {
  --primary: 280 100% 50%;    /* Purple */
  --accent: 45 100% 50%;      /* Orange */
}

/* Add gradient backgrounds */
.hero {
  background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)));
}
```

### Dense/Information-Rich

```tsx
// Reduce animations
const BLUR_FADE_DELAY = 0.01;

// Tighter spacing
<section className="space-y-8 py-8">  {/* vs default py-12 */}

// Smaller headings
<h2 className="text-lg font-bold">  {/* vs text-xl */}
```

---

## Testing Your Customizations

**Before committing changes**:

1. **Visual test on all breakpoints**:
   - Desktop (1920px)
   - Laptop (1280px)
   - Tablet (768px)
   - Mobile (375px)

2. **Test dark mode**:
   - Click mode toggle
   - Check all sections
   - Ensure colors have enough contrast

3. **Test interactions**:
   - Click all links
   - Hover over cards
   - Test animations (scroll page)

4. **Run build**:
   ```bash
   npm run build
   ```
   - Should complete without errors
   - Check for TypeScript errors

---

## Common Customization Mistakes

### ❌ Breaking Responsive Design

**Problem**: Hardcoded widths break mobile layout

```tsx
// Bad
<div style={{ width: "800px" }}>

// Good
<div className="max-w-[800px] w-full px-4">
```

### ❌ Removing Key Accessibility Features

**Problem**: Removing semantic HTML or ARIA labels

```tsx
// Bad
<div onClick={handleClick}>Click me</div>

// Good
<button onClick={handleClick}>Click me</button>
```

### ❌ Over-Customizing

**Problem**: Changing everything, losing cohesive design

**Solution**: Start with small changes. Test. Get feedback. Iterate.

---

## Getting Help

**Design questions**: See [Design System](../core/design-system.md)

**Code questions**: Ask Claude Code (it has full framework context)

**Inspiration**:
- [awwwards.com](https://www.awwwards.com/) - Award-winning portfolio designs
- [Behance](https://www.behance.net/) - Designer portfolios
- [dribbble.com](https://dribbble.com/tags/portfolio) - Portfolio UI patterns

---

## Philosophy

**Customization should serve your goals:**

- **Job hunting?** → Clear CTAs, emphasize relevant work, professional tone
- **Freelancing?** → Client testimonials, diverse projects, easy contact
- **Building in public?** → Blog-first, social links, work-in-progress projects
- **Personal brand?** → Unique personality, storytelling, visual flair

**Remember**: Your portfolio is never "done". Ship early, iterate based on feedback, improve continuously.

---

**Next**: [Deployment Guide](./deployment-guide.md) - Ship your customized portfolio to the world.
