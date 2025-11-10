# Project Addition Template

Use this template when adding new projects to your portfolio.

---

## File Location

```
src/data/resume.tsx
```

**Section**: `DATA.projects` array

---

## Template Structure

```tsx
{
  title: "Project Name",
  href: "https://project-url.com",
  dates: "Jan 2024 - Present",
  active: true,
  description:
    "Clear, impact-focused description. Start with the outcome/value. Quantify results when possible (40% increase, 10,000 users, etc.).",
  technologies: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    // Add 5-8 key technologies
  ],
  links: [
    {
      type: "Website",
      href: "https://project-url.com",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/username/repo",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/project-name.png",
  video: "", // Optional: "https://video-url.mp4"
}
```

---

## Field Reference

### `title` (required)

**Type**: `string`
**Purpose**: Project name displayed as heading
**Guidelines**:
- Clear and concise (2-5 words)
- Proper capitalization
- No taglines or descriptions

**Examples**:
- ✅ "Design System"
- ✅ "AI Content Generator"
- ❌ "My Cool App" (too vague)
- ❌ "Design System - A comprehensive component library" (too long, use description)

---

### `href` (required)

**Type**: `string` (URL)
**Purpose**: Link to live project or homepage
**Guidelines**:
- Full URL including `https://`
- Prefer live demo over GitHub
- Use custom domain if available

**Examples**:
- ✅ `"https://myproject.com"`
- ✅ `"https://username.github.io/project"`
- ❌ `"/project"` (relative path)
- ❌ `"github.com/user/repo"` (missing https://)

---

### `dates` (required)

**Type**: `string`
**Purpose**: Project timeline
**Format**: `"MMM YYYY - MMM YYYY"` or `"MMM YYYY - Present"`
**Examples**:
- ✅ `"Jan 2024 - Present"`
- ✅ `"Jun 2023 - Dec 2023"`
- ✅ `"2024"` (if single year)
- ❌ `"January 2024 - Now"` (use "Present")

---

### `active` (required)

**Type**: `boolean`
**Purpose**: Show "Active" badge on project card
**Guidelines**:
- `true` = Ongoing project, receiving updates
- `false` = Completed, archived, or discontinued

**Examples**:
- ✅ `active: true` (still working on it)
- ✅ `active: false` (finished, no more updates)

---

### `description` (required)

**Type**: `string`
**Purpose**: Project description (2-3 sentences)
**Guidelines**:
- Lead with impact/outcome (not tech stack)
- Quantify results when possible
- Keep under 200 characters
- Focus on "what" and "why", not "how"

**Structure**:
```
[Outcome/value]. [Key feature or approach]. [Result/impact].
```

**Examples**:

✅ **Good**:
```
"Built a comprehensive design system with 50+ components, used by 20+ internal teams. Reduced design-to-dev time by 60% and ensured brand consistency across products."
```

✅ **Good**:
```
"AI-powered content generator that creates blog posts from keywords. Processes 1,000+ requests daily with 95% user satisfaction. Built with GPT-4 and Next.js."
```

❌ **Bad** (too technical, no impact):
```
"A web app built with React, TypeScript, and Tailwind CSS. Uses Next.js for the backend."
```

❌ **Bad** (too vague):
```
"A cool project I worked on."
```

---

### `technologies` (required)

**Type**: `string[]` (array of strings)
**Purpose**: Tech stack badges displayed under description
**Guidelines**:
- 5-8 technologies max (most important)
- Order by prominence/importance
- Include frameworks, languages, key tools
- Avoid over-listing

**Examples**:
```tsx
// ✅ Good - concise, relevant
technologies: [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
]

// ❌ Bad - too many, includes obvious ones
technologies: [
  "HTML",  // Obvious for web project
  "CSS",   // Obvious
  "JavaScript",  // Redundant with TypeScript
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "PostCSS",  // Too granular
  "ESLint",   // Dev tool, not core tech
  "Prettier", // Dev tool
]
```

---

### `links` (required)

**Type**: `ProjectLink[]` (array of link objects)
**Purpose**: External links (website, GitHub, demo, etc.)
**Guidelines**:
- Include at least 1 link (usually website)
- Prioritize: Live demo > GitHub > Other
- Use appropriate icons
- Descriptive link types

**Link Object Structure**:
```tsx
{
  type: string              // Link label ("Website", "Source", etc.)
  href: string              // Full URL
  icon: React.ReactNode     // Icon component
}
```

**Common Link Types**:
```tsx
// Live website/demo
{
  type: "Website",
  href: "https://project.com",
  icon: <Icons.globe className="size-3" />,
}

// GitHub repository
{
  type: "Source",
  href: "https://github.com/username/repo",
  icon: <Icons.github className="size-3" />,
}

// Video demo (YouTube, Vimeo)
{
  type: "Video",
  href: "https://youtube.com/watch?v=...",
  icon: <Icons.youtube className="size-3" />,
}

// Case study or blog post
{
  type: "Case Study",
  href: "https://yoursite.com/blog/project-case-study",
  icon: <Icons.post className="size-3" />,
}
```

---

### `image` (required)

**Type**: `string` (file path)
**Purpose**: Static project screenshot/image
**Guidelines**:
- Place file in `public/projects/` folder
- Path starts with `/projects/`
- Recommended size: 800x600px or 1200x675px (16:9)
- Use PNG for UI screenshots, JPG for photos
- Optimize file size (< 500KB)

**Examples**:
```tsx
// ✅ Correct path
image: "/projects/my-project.png"

// ❌ Wrong - missing leading slash
image: "projects/my-project.png"

// ❌ Wrong - not in public folder
image: "src/assets/my-project.png"
```

**Naming convention**:
- Lowercase, hyphen-separated
- Descriptive name
- Examples: `design-system.png`, `ai-generator-dashboard.jpg`

---

### `video` (optional)

**Type**: `string` (URL or file path)
**Purpose**: Project demo video (takes precedence over image)
**Guidelines**:
- Format: MP4 recommended (H.264 codec)
- Duration: 15-30 seconds (loops automatically)
- Size: < 10MB if self-hosted
- Can use CDN or self-host in `public/`

**Examples**:
```tsx
// Self-hosted
video: "/projects/demo-video.mp4"

// CDN (R2, S3, Cloudinary)
video: "https://cdn.example.com/my-video.mp4"

// Leave empty if using static image
video: ""
```

---

## Complete Example

```tsx
// src/data/resume.tsx
export const DATA = {
  // ... other fields
  projects: [
    {
      title: "Component Library",
      href: "https://components.designsystem.io",
      dates: "Jun 2023 - Present",
      active: true,
      description:
        "Built a production-ready component library with 60+ accessible React components. Used by 25+ product teams, reducing development time by 50%. Features automated testing and Storybook documentation.",
      technologies: [
        "React",
        "TypeScript",
        "Storybook",
        "Tailwind CSS",
        "Radix UI",
        "Vitest",
      ],
      links: [
        {
          type: "Website",
          href: "https://components.designsystem.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/username/component-library",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Storybook",
          href: "https://storybook.designsystem.io",
          icon: <Icons.book className="size-3" />,
        },
      ],
      image: "/projects/component-library.png",
      video: "https://cdn.example.com/component-library-demo.mp4",
    },
    // ... other projects
  ],
}
```

---

## Asset Preparation Checklist

Before adding project to resume.tsx:

**Image/Video**:
- [ ] Image created (800x600px or 1200x675px recommended)
- [ ] File optimized (< 500KB for images, < 10MB for videos)
- [ ] File placed in `public/projects/` folder
- [ ] Filename is descriptive and lowercase-hyphenated

**Company Logo** (if work project):
- [ ] Logo obtained (transparent PNG or SVG preferred)
- [ ] Size: 200x200px recommended
- [ ] Placed in `public/logos/` folder

**Links**:
- [ ] Live website/demo tested and working
- [ ] GitHub repo public (or link removed if private)
- [ ] All URLs include `https://`

---

## Project Addition Checklist

- [ ] All required fields present
- [ ] Title is clear and concise (2-5 words)
- [ ] Dates are accurate and formatted correctly
- [ ] `active` reflects current status
- [ ] Description focuses on impact (not tech stack)
- [ ] Description is 2-3 sentences, under 200 chars
- [ ] Technologies list has 5-8 items (most relevant only)
- [ ] At least 1 link included
- [ ] Image path is correct (`/projects/filename`)
- [ ] Image file exists in `public/projects/`
- [ ] Tested locally (homepage shows project correctly)
- [ ] Project added to TOP of `projects` array (most recent first)

---

## Where to Add

**Location**: `src/data/resume.tsx`

**Pattern**: Add to TOP of `projects` array (newest first)

```tsx
export const DATA = {
  // ... other fields
  projects: [
    { /* NEW PROJECT HERE (most recent) */ },
    { /* Existing project 1 */ },
    { /* Existing project 2 */ },
    // ... older projects
  ],
}
```

---

## Testing

```bash
# 1. Start dev server
npm run dev

# 2. Visit homepage
# http://localhost:3000

# 3. Scroll to Projects section

# 4. Verify:
# - Project appears at top
# - Image/video loads correctly
# - Links work
# - Technologies display as badges
# - Active badge shows (if active: true)
# - Description is readable

# 5. Test dark mode
# Toggle theme, verify image/colors look good
```

---

**Version**: v1.0.0
**Last Updated**: 2025-11-09
