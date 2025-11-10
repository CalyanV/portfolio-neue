# Content Architecture

**Portfolio Content Structure Documentation**
**Framework Version**: v1.0.0
**Last Updated**: 2025-11-09

---

## 🎯 Overview

This portfolio uses a **single-config content pattern** where all portfolio data lives in one TypeScript file.

**Core File**: `src/data/resume.tsx`

**Benefits**:
- ✅ Single source of truth for all content
- ✅ Type-safe data model (TypeScript interfaces)
- ✅ Easy version control
- ✅ Fast static generation
- ✅ No database or CMS needed

**Trade-offs**:
- ⚠️ Requires rebuild for content updates
- ⚠️ Large projects list may make file lengthy
- ⚠️ Non-technical users can't easily edit

---

## 📋 Resume Data Model

### File Structure

```tsx
// src/data/resume.tsx
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  // Personal information
  name: string
  initials: string
  url: string
  location: string
  locationLink: string
  description: string
  summary: string
  avatarUrl: string

  // Skills
  skills: string[]

  // Navigation
  navbar: NavItem[]

  // Contact information
  contact: ContactInfo

  // Work experience
  work: WorkExperience[]

  // Education
  education: Education[]

  // Projects
  projects: Project[]

  // Hackathons (optional)
  hackathons?: Hackathon[]
}
```

---

## 👤 Personal Information

### Fields

```tsx
{
  name: string                // Full name
  initials: string            // 2-3 letter initials (for avatar fallback)
  url: string                 // Portfolio website URL
  location: string            // City, Country/State
  locationLink: string        // Google Maps link to location
  description: string         // One-line tagline (meta description)
  summary: string             // Longer bio paragraph (supports markdown links)
  avatarUrl: string           // Path to avatar image (in /public folder)
}
```

### Example

```tsx
{
  name: "Kalyan Chandana",
  initials: "KC",
  url: "https://kalyanchandana.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Product Designer and AI Native Developer. Building delightful experiences.",
  summary: "I'm a product designer who codes. I love creating beautiful, functional interfaces and exploring how AI can enhance human creativity. Currently building [my latest project](/#projects).",
  avatarUrl: "/me.png",
}
```

### Notes

- **avatarUrl**: Place image in `public/` folder (e.g., `public/me.png`)
- **summary**: Supports inline markdown links `[text](url)`
- **description**: Used for SEO meta tags (keep under 160 characters)

---

## 💼 Skills

### Schema

```tsx
skills: string[]  // Array of skill names
```

### Example

```tsx
skills: [
  "React",
  "Next.js",
  "TypeScript",
  "Figma",
  "Framer",
  "Product Design",
  "AI/ML",
  "Node.js",
  "Tailwind CSS",
]
```

### Notes

- Skills display as **badges** on homepage
- Order matters (displayed left-to-right, top-to-bottom)
- Keep skill names concise (2-3 words max)

---

## 🧭 Navigation

### Schema

```tsx
interface NavItem {
  href: string      // Route path
  icon: LucideIcon  // Icon component
  label: string     // Link text
}

navbar: NavItem[]
```

### Example

```tsx
import { HomeIcon, NotebookIcon } from "lucide-react";

navbar: [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blog", icon: NotebookIcon, label: "Blog" },
]
```

### Notes

- Uses [Lucide Icons](https://lucide.dev/)
- Navbar appears on all pages
- Keep to 2-4 items for clean design

---

## 📧 Contact Information

### Schema

```tsx
interface ContactInfo {
  email: string
  tel: string
  social: {
    [key: string]: {
      name: string
      url: string
      icon: React.ComponentType<{ className?: string }>
      navbar: boolean  // Show in navbar?
    }
  }
}
```

### Example

```tsx
import { Icons } from "@/components/icons";

contact: {
  email: "hello@kalyanchandana.com",
  tel: "+1234567890",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/username",
      icon: Icons.github,
      navbar: true,  // Show in navbar
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/username",
      icon: Icons.linkedin,
      navbar: true,
    },
    X: {
      name: "X",
      url: "https://x.com/username",
      icon: Icons.x,
      navbar: true,
    },
    email: {
      name: "Send Email",
      url: "#",  // Mailto link handled by component
      icon: Icons.email,
      navbar: false,  // Show in contact section only
    },
  },
}
```

### Available Icons

**Defined in** `src/components/icons.tsx`:
- `Icons.github`
- `Icons.linkedin`
- `Icons.x` (Twitter/X)
- `Icons.youtube`
- `Icons.email`
- (Add more by editing `icons.tsx`)

### Notes

- **navbar: true** → Icon appears in top navigation
- **navbar: false** → Icon appears in contact section only
- Icons are SVG components, not Lucide icons

---

## 💼 Work Experience

### Schema

```tsx
interface WorkExperience {
  company: string       // Company name
  href: string          // Company website URL
  badges: string[]      // Tags (e.g., ["Remote", "Part-time"])
  location: string      // Office location
  title: string         // Job title
  logoUrl: string       // Company logo path (in /public)
  start: string         // Start date (e.g., "Jan 2020")
  end: string           // End date (e.g., "Present" or "Dec 2022")
  description: string   // Job description (supports markdown)
}

work: WorkExperience[]
```

### Example

```tsx
work: [
  {
    company: "Acme Corp",
    href: "https://acme.com",
    badges: ["Remote"],
    location: "San Francisco, CA",
    title: "Senior Product Designer",
    logoUrl: "/logos/acme.png",
    start: "Jan 2022",
    end: "Present",
    description:
      "Led design for the core product dashboard, improving user engagement by 40%. Designed and shipped 3 major features including real-time collaboration and AI-powered insights.",
  },
  {
    company: "StartupXYZ",
    href: "https://startupxyz.io",
    badges: [],
    location: "New York, NY",
    title: "Product Designer",
    logoUrl: "/logos/startupxyz.svg",
    start: "Jun 2020",
    end: "Dec 2021",
    description:
      "First design hire. Built the design system from scratch using Figma. Designed web and mobile apps for 50,000+ users.",
  },
]
```

### Notes

- **Order**: Most recent first (reverse chronological)
- **logoUrl**: Place logos in `public/logos/` folder
- **Logo size**: Recommended 200x200px or similar aspect ratio
- **description**: Supports markdown (bold, links, etc.)
- **badges**: Optional tags (displayed as chips)

---

## 🎓 Education

### Schema

```tsx
interface Education {
  school: string      // Institution name
  href: string        // Institution website
  degree: string      // Degree/program name
  logoUrl: string     // School logo path (in /public)
  start: string       // Start year (e.g., "2016")
  end: string         // End year (e.g., "2020")
}

education: Education[]
```

### Example

```tsx
education: [
  {
    school: "Stanford University",
    href: "https://stanford.edu",
    degree: "Master of Fine Arts (MFA) in Design",
    logoUrl: "/logos/stanford.png",
    start: "2018",
    end: "2020",
  },
  {
    school: "UC Berkeley",
    href: "https://berkeley.edu",
    degree: "Bachelor of Arts in Computer Science",
    logoUrl: "/logos/berkeley.png",
    start: "2014",
    end: "2018",
  },
]
```

### Notes

- **Order**: Most recent first
- **degree**: Can be degree name, program name, or certifications

---

## 🚀 Projects

### Schema

```tsx
interface Project {
  title: string             // Project name
  href: string              // Project URL
  dates: string             // Date range (e.g., "Jan 2024 - Present")
  active: boolean           // Is project ongoing?
  description: string       // Project description (supports markdown)
  technologies: string[]    // Tech stack (e.g., ["React", "Node.js"])
  links: ProjectLink[]      // External links (website, GitHub, etc.)
  image?: string            // Static image path (optional)
  video?: string            // Video URL (optional, takes precedence over image)
}

interface ProjectLink {
  type: string              // Link type (e.g., "Website", "Source")
  href: string              // URL
  icon: React.ReactNode     // Icon component
}

projects: Project[]
```

### Example

```tsx
projects: [
  {
    title: "Design System",
    href: "https://designsystem.io",
    dates: "Jun 2023 - Present",
    active: true,
    description:
      "Built a comprehensive design system with 50+ components, used by 20+ internal teams. Reduced design-to-dev time by 60%.",
    technologies: [
      "Figma",
      "React",
      "TypeScript",
      "Storybook",
      "Tailwind CSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://designsystem.io",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/username/design-system",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/projects/design-system.png",
    video: "", // Optional: video URL (MP4 recommended)
  },
]
```

### Notes

- **Order**: Most recent or most important first
- **active**: `true` → Shows "Active" badge
- **image vs video**: If both provided, video takes precedence
- **Video format**: MP4 recommended for best compatibility
- **Image size**: Recommended 800x600px or 16:9 aspect ratio
- **technologies**: Displayed as badges under description
- **links**: Multiple links supported (website, GitHub, demo, etc.)

### Link Types (Common)

- `"Website"` - Live demo or product
- `"Source"` - GitHub/GitLab repository
- `"Demo"` - Interactive demo
- `"Case Study"` - Detailed write-up
- `"Video"` - YouTube/Vimeo walkthrough

---

## 🏆 Hackathons (Optional)

### Schema

```tsx
interface Hackathon {
  title: string             // Hackathon name
  dates: string             // Date range
  location: string          // City, Country
  description: string       // What you built/achieved
  image?: string            // Event image
  links?: HackathonLink[]   // External links
}

interface HackathonLink {
  title: string             // Link title
  icon: React.ReactNode     // Icon component
  href: string              // URL
}

hackathons?: Hackathon[]  // Optional field
```

### Example

```tsx
hackathons: [
  {
    title: "AI Hackathon 2024",
    dates: "March 15-17, 2024",
    location: "San Francisco, CA",
    description:
      "Built an AI-powered design assistant. Won 1st place out of 200+ teams.",
    image: "/hackathons/ai-hackathon.jpg",
    links: [
      {
        title: "Demo",
        icon: <Icons.globe className="size-3" />,
        href: "https://demo.example.com",
      },
    ],
  },
]
```

### Notes

- **Optional**: Can omit `hackathons` field entirely if not applicable
- **Order**: Most recent first

---

## 📝 Blog Posts

### Overview

Blog posts are **separate from resume.tsx**. They live as individual MDX files in the `content/` directory.

**Location**: `content/*.mdx`

---

### MDX File Structure

```mdx
---
title: "Your Blog Post Title"
summary: "A concise summary (1-2 sentences) for the blog listing page"
publishedAt: "2025-11-09"
---

# Your Blog Post Title

Your content goes here with full **markdown** support.

## Subheading

More content...

\`\`\`tsx
// Code blocks with syntax highlighting
export function Example() {
  return <div>Hello World</div>
}
\`\`\`

![Image alt text](/images/blog/image.png)

[Link text](https://example.com)
```

---

### Frontmatter Fields

```yaml
title: string        # Post title (required)
summary: string      # Short description for listing page (required)
publishedAt: string  # Publish date in YYYY-MM-DD format (required)
```

### Markdown Support

**Headings**:
```md
# H1 Heading
## H2 Heading
### H3 Heading
```

**Text Formatting**:
```md
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`
```

**Lists**:
```md
- Unordered list item 1
- Unordered list item 2

1. Ordered list item 1
2. Ordered list item 2
```

**Links**:
```md
[Link text](https://example.com)
```

**Images**:
```md
![Alt text](/images/blog/my-image.png)
```

**Code Blocks** (with syntax highlighting):
````md
```tsx
export function Component() {
  return <div>Example</div>
}
```
````

**Blockquotes**:
```md
> This is a quote
```

**Tables**:
```md
| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

---

### Blog Metadata

**File**: `src/data/blog.ts`

This file exports helper functions to:
- Fetch all blog posts
- Get a single blog post by slug
- Generate static paths for blog routes

**You don't need to edit this file** - it automatically scans the `content/` directory.

---

## 📂 Asset Organization

### File Locations

```
public/
├── me.png                    # Avatar image
│
├── logos/                    # Company/school logos
│   ├── acme.png
│   ├── stanford.svg
│   └── ...
│
├── projects/                 # Project images/videos
│   ├── design-system.png
│   ├── project-2.jpg
│   └── ...
│
├── hackathons/               # Hackathon images
│   └── ai-hackathon.jpg
│
└── images/                   # Blog post images
    └── blog/
        ├── post-1-cover.png
        └── post-2-diagram.svg
```

### Image Recommendations

| Type | Size | Format | Notes |
|------|------|--------|-------|
| Avatar | 400x400px | PNG/JPG | Square, clear face |
| Company logo | 200x200px | PNG/SVG | Transparent background preferred |
| Project image | 800x600px (4:3) or 1200x675px (16:9) | PNG/JPG | High quality, no text overlay |
| Blog cover | 1200x630px | PNG/JPG | Open Graph size |
| Blog inline | Variable | PNG/JPG/SVG | Optimize for web |

### Video Recommendations

- **Format**: MP4 (H.264 codec)
- **Size**: 1280x720px (720p) or 1920x1080px (1080p)
- **Duration**: 15-30 seconds (autoplay loops)
- **Hosting**: Self-hosted in `public/` or CDN (e.g., R2, S3)

---

## 🔄 Content Update Workflow

### Update Resume Data

1. Open `src/data/resume.tsx`
2. Edit relevant fields (personal info, work, projects, etc.)
3. Save file
4. Test locally: `npm run dev`
5. Commit changes: `git commit -m "Update resume data"`
6. Deploy (automatic on push if using Vercel/Netlify)

### Add a New Project

1. Add project image to `public/projects/`
2. Open `src/data/resume.tsx`
3. Add new project object to `projects` array (at top for most recent)
4. Include all required fields: `title`, `href`, `dates`, `active`, `description`, `technologies`, `links`
5. Test locally
6. Commit and deploy

### Write a Blog Post

1. Create new file: `content/my-new-post.mdx`
2. Add frontmatter (title, summary, publishedAt)
3. Write content in Markdown
4. Add images to `public/images/blog/` if needed
5. Test locally: Visit `/blog/my-new-post`
6. Commit and deploy

**Example**:
```bash
# Create blog post
touch content/my-first-design-case-study.mdx

# Add content (see MDX structure above)

# Test
npm run dev
# Visit http://localhost:3000/blog/my-first-design-case-study

# Deploy
git add content/my-first-design-case-study.mdx
git commit -m "Add design case study blog post"
git push
```

---

## 🎯 Content Best Practices

### Resume Data

**Personal Info**:
- Keep `description` under 160 characters (SEO meta description)
- Make `summary` personal and authentic (supports markdown links)
- Update `avatarUrl` with professional headshot

**Work Experience**:
- Use **action verbs** (Built, Designed, Led, Implemented)
- Quantify impact (40% increase, 50,000+ users, 3 major features)
- Keep descriptions concise (2-3 sentences max)

**Projects**:
- Lead with **outcome/impact**, not tech stack
- Include visual media (image or video)
- Link to live demo or GitHub when possible

### Blog Posts

**Titles**:
- Clear, descriptive, SEO-friendly
- 40-60 characters ideal

**Summaries**:
- 1-2 sentences, compelling hook
- Include keywords for SEO

**Content**:
- Use headings to structure (H2, H3)
- Include visuals (images, diagrams, code)
- Keep paragraphs short (2-3 sentences)
- Use code blocks for technical content

---

## 📚 Examples

### Complete Personal Info Example

```tsx
{
  name: "Kalyan Chandana",
  initials: "KC",
  url: "https://bykc.pro",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Product Designer & AI Developer building delightful experiences at the intersection of design and technology.",
  summary: "I'm a product designer who codes. I love creating beautiful, functional interfaces and exploring how AI can enhance human creativity. Currently building tools for designers at [Figma](https://figma.com) and exploring [generative design](/#projects) in my free time.",
  avatarUrl: "/me.png",
  skills: [
    "Product Design",
    "Figma",
    "React",
    "TypeScript",
    "Next.js",
    "Framer",
    "Tailwind CSS",
    "AI/ML",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@bykc.pro",
    tel: "+1234567890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kalyanchandana",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/kalyanchandana",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kalyanchandana",
        icon: Icons.x,
        navbar: true,
      },
    },
  },
}
```

---

## 🔍 Troubleshooting

### Images Not Showing

**Problem**: Images don't load after deployment

**Solution**:
- Ensure images are in `public/` folder
- Use paths starting with `/` (e.g., `/me.png`, not `./me.png`)
- Check image file names match exactly (case-sensitive)
- Verify images are committed to git

### Blog Post Not Appearing

**Problem**: Blog post doesn't show on `/blog` page

**Solution**:
- Check frontmatter is valid YAML (no syntax errors)
- Ensure `publishedAt` date is not in the future
- Verify file extension is `.mdx` (not `.md`)
- Rebuild site: `rm -rf .next && npm run build`

### Syntax Highlighting Not Working

**Problem**: Code blocks show plain text, no colors

**Solution**:
- Ensure language identifier in code fence (e.g., ````tsx``)
- Check Shiki is installed: `npm install shiki`
- Supported languages: tsx, jsx, ts, js, python, go, rust, etc.

---

**Version**: v1.0.0
**Last Updated**: 2025-11-09
**Maintained By**: Kalyan Chandana
