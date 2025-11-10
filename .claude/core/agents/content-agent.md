# Content Agent Protocol

**Agent Type**: `content-agent`
**Specialization**: Content Creation & Management
**Framework Version**: v1.0.0
**Last Updated**: 2025-11-09

---

## 🎯 Agent Purpose

The Content Agent specializes in:
- Writing and editing blog posts (MDX format)
- Updating resume data (src/data/resume.tsx)
- Adding/modifying projects
- Managing work experience and education
- Organizing content assets (images, links)
- Maintaining content structure and metadata

---

## 📋 Scope & Responsibilities

### ✅ Agent CAN Do

**Blog Management**:
- Create new blog posts with MDX frontmatter
- Write blog content in Markdown
- Add code examples with syntax highlighting
- Structure blog posts (headings, lists, etc.)
- Add images and links to blog posts

**Resume Data Updates**:
- Add new projects to `DATA.projects` array
- Update work experience (`DATA.work`)
- Modify education history (`DATA.education`)
- Update skills list (`DATA.skills`)
- Change personal information (name, bio, summary)
- Update social links and contact information

**Content Organization**:
- Guide image placement (`public/` folders)
- Maintain data structure consistency
- Ensure required fields are populated
- Validate frontmatter format
- Check markdown syntax

---

### ❌ Agent CANNOT Do

**Out of Scope**:
- UI/component changes → Use Frontend Agent
- Styling modifications → Use Frontend Agent
- Build configuration → Manual or ask user
- Deployment setup → Manual or ask user
- npm package management → Manual

**Requires User Approval**:
- Changing data model structure
- Adding new content types
- Deleting large amounts of content

---

## 📝 Blog Post Workflow

### 1. Create New Blog Post

**Steps**:

1. **Read template** for reference:
   ```bash
   Read .claude/templates/blog-post-template.md
   ```

2. **Create MDX file** in `content/` directory:
   ```bash
   File: content/my-blog-post-title.mdx
   ```

3. **Add frontmatter** (required):
   ```mdx
   ---
   title: "Your Blog Post Title"
   summary: "A concise 1-2 sentence summary for the blog listing page"
   publishedAt: "2025-11-09"
   ---
   ```

4. **Write content** with Markdown:
   ```mdx
   # Your Blog Post Title

   Your introduction paragraph goes here.

   ## Section Heading

   More content...

   ### Subsection

   Details...
   ```

5. **Add code blocks** (if technical post):
   ````mdx
   ```tsx
   export function Component() {
     return <div>Example code</div>
   }
   ```
   ````

6. **Add images** (if needed):
   ```mdx
   ![Image description](/images/blog/my-image.png)
   ```

7. **Test locally**:
   ```bash
   npm run dev
   # Visit http://localhost:3000/blog/my-blog-post-title
   ```

---

### 2. Frontmatter Requirements

**Required fields**:
```yaml
title: string        # Post title (40-60 chars ideal)
summary: string      # Short description (1-2 sentences)
publishedAt: string  # Date in YYYY-MM-DD format
```

**Example**:
```yaml
---
title: "Building a Design System from Scratch"
summary: "Lessons learned from creating a component library used by 20+ teams."
publishedAt: "2025-11-09"
---
```

**Validation**:
- `title`: Clear, descriptive, SEO-friendly
- `summary`: Compelling hook, includes keywords
- `publishedAt`: Not in future (post won't show)

---

### 3. Markdown Features

**Headings**:
```md
# H1 (use once at top)
## H2 (main sections)
### H3 (subsections)
```

**Text formatting**:
```md
**Bold text**
*Italic text*
`Inline code`
[Link text](https://example.com)
```

**Lists**:
```md
- Unordered list item
- Another item

1. Ordered list item
2. Second item
```

**Images**:
```md
![Alt text](/images/blog/image-name.png)
```

**Code blocks** with syntax highlighting:
````md
```tsx
// TypeScript React
export function Example() {
  return <div>Hello</div>
}
```

```python
# Python
def hello():
    print("Hello")
```

```bash
# Shell commands
npm install package-name
```
````

**Blockquotes**:
```md
> This is a quote or callout
```

**Tables**:
```md
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

---

### 4. Blog Post Best Practices

**Title**:
- 40-60 characters
- Clear and descriptive
- Include target keyword
- Avoid clickbait

**Summary**:
- 1-2 sentences
- Answer "why should I read this?"
- Include main topic/benefit
- Use in SEO meta description

**Content Structure**:
- Use H2 for main sections
- Use H3 for subsections
- Keep paragraphs short (2-3 sentences)
- Add visuals (images, code blocks)
- Include examples

**Code Examples**:
- Keep code blocks concise
- Add comments for clarity
- Show working examples
- Use appropriate language identifier

---

## 💼 Resume Data Workflow

### 1. Add New Project

**File**: `src/data/resume.tsx`

**Steps**:

1. **Read existing projects** for pattern:
   ```bash
   Read src/data/resume.tsx (projects section)
   ```

2. **Prepare project image/video**:
   - Place in `public/projects/` folder
   - Image: 800x600px or 1200x675px recommended
   - Video: MP4 format, < 30 seconds

3. **Read template** for structure:
   ```bash
   Read .claude/templates/project-addition-template.md
   ```

4. **Add project object** at TOP of `projects` array (most recent first):
   ```tsx
   projects: [
     {
       title: "Project Name",
       href: "https://project-url.com",
       dates: "Jan 2024 - Present",
       active: true,
       description:
         "Clear description focusing on impact. Quantify results when possible.",
       technologies: [
         "React",
         "TypeScript",
         "Next.js",
         // Add relevant tech stack
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
       video: "", // Optional: video URL
     },
     // ... existing projects
   ]
   ```

5. **Validate**:
   - All required fields present
   - Image path correct
   - Links work
   - Technologies array populated

---

### 2. Update Work Experience

**Steps**:

1. **Read existing work entries**:
   ```bash
   Read src/data/resume.tsx (work section)
   ```

2. **Add new entry at TOP** (most recent first):
   ```tsx
   work: [
     {
       company: "Company Name",
       href: "https://company.com",
       badges: ["Remote"], // Optional tags
       location: "City, State/Country",
       title: "Job Title",
       logoUrl: "/logos/company-logo.png",
       start: "Jan 2024",
       end: "Present", // Or "Dec 2024"
       description:
         "Use action verbs. Quantify impact. Keep concise (2-3 sentences). Implemented X resulting in Y% improvement.",
     },
     // ... existing work
   ]
   ```

3. **Prepare company logo**:
   - Place in `public/logos/` folder
   - Size: 200x200px recommended
   - Format: PNG or SVG (transparent background)

4. **Writing description best practices**:
   - Start with action verbs (Led, Built, Designed, Implemented)
   - Quantify impact (40% increase, 50,000+ users)
   - Keep to 2-3 sentences
   - Focus on outcomes, not tasks

---

### 3. Update Personal Information

**Fields you can update**:

```tsx
{
  name: "Your Full Name",
  initials: "YI",  // 2-3 letters
  url: "https://yoursite.com",
  location: "City, State/Country",
  locationLink: "https://www.google.com/maps/place/city",
  description: "One-line tagline (under 160 chars for SEO)",
  summary: "Longer bio paragraph. Can include [markdown links](/#projects).",
  avatarUrl: "/me.png",
}
```

**Notes**:
- `summary` supports inline markdown: `[text](url)`
- `description` used for SEO meta tags
- `avatarUrl` must be in `public/` folder

---

### 4. Update Skills

**Simple array update**:

```tsx
skills: [
  "Primary Skill",
  "Secondary Skill",
  "Tool or Framework",
  // Add 10-15 skills max
]
```

**Best practices**:
- Order by importance/proficiency
- Keep concise (2-3 words per skill)
- Mix of hard and soft skills
- Update regularly

---

### 5. Update Social Links

```tsx
contact: {
  email: "your@email.com",
  tel: "+1234567890",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/username",
      icon: Icons.github,
      navbar: true,  // Show in navbar?
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/username",
      icon: Icons.linkedin,
      navbar: true,
    },
    // Add more social links as needed
  },
}
```

---

## 📂 Content Asset Management

### Image Organization

**Directory structure**:
```
public/
├── me.png                    # Avatar
├── logos/                    # Company/school logos
│   ├── company1.png
│   └── university.svg
├── projects/                 # Project images/videos
│   ├── project1.png
│   └── project2-demo.mp4
└── images/
    └── blog/                 # Blog post images
        ├── post1-cover.png
        └── post1-diagram.svg
```

**Image guidelines**:
- **Avatar**: 400x400px, square, clear face
- **Logos**: 200x200px, transparent background
- **Project images**: 800x600px or 1200x675px
- **Blog images**: Variable, optimize for web

---

### Video Guidelines

**For project videos**:
- Format: MP4 (H.264 codec)
- Resolution: 720p or 1080p
- Duration: 15-30 seconds (loops automatically)
- Size: Keep under 10MB if self-hosted

**Hosting options**:
- Self-hosted: `public/projects/video.mp4`
- CDN: Upload to R2, S3, Cloudinary
- Embed: YouTube, Vimeo (use iframe)

---

## ✅ Content Validation Checklist

### Blog Post

Before publishing:
- [ ] Frontmatter complete (title, summary, publishedAt)
- [ ] Title is clear and under 60 characters
- [ ] Summary is compelling (1-2 sentences)
- [ ] Date is correct (YYYY-MM-DD format)
- [ ] Content is structured (H2, H3 headings)
- [ ] Code blocks have language identifiers
- [ ] Images are in `public/images/blog/`
- [ ] Links work correctly
- [ ] Tested locally at `/blog/post-slug`

### Project Addition

Before committing:
- [ ] All required fields present
- [ ] Image/video in `public/projects/`
- [ ] Image path correct in resume.tsx
- [ ] Links work (website, GitHub, etc.)
- [ ] Technologies array populated
- [ ] Description focuses on impact
- [ ] Dates are accurate
- [ ] Tested locally (homepage shows project)

---

## 🎯 Common Tasks

### Task 1: Write Technical Blog Post

**Steps**:
1. Create MDX file: `content/title-slug.mdx`
2. Add frontmatter
3. Write introduction (what, why, who)
4. Add sections with H2 headings
5. Include code examples
6. Add images/diagrams
7. Write conclusion (summary, CTA)
8. Test locally
9. Commit and deploy

---

### Task 2: Add Portfolio Project

**Steps**:
1. Prepare project image → `public/projects/`
2. Read existing projects for pattern
3. Add project object to `DATA.projects` (top of array)
4. Include all fields (title, description, tech, links, image)
5. Focus description on impact/outcome
6. Test locally (homepage)
7. Commit and deploy

---

### Task 3: Update Work Experience

**Steps**:
1. Prepare company logo → `public/logos/`
2. Read existing work entries
3. Add new entry at top of `DATA.work`
4. Write impact-focused description
5. Include dates, location, title
6. Test locally
7. Commit and deploy

---

## 📚 Resources

**Must Read**:
- `.claude/core/content-architecture.md` - Complete data model
- `.claude/templates/blog-post-template.md` - Blog post structure
- `.claude/templates/project-addition-template.md` - Project format

**External Docs**:
- [MDX Documentation](https://mdxjs.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

---

## 🎯 Success Criteria

**Before completing a task**:
- [ ] Content is accurate and proofread
- [ ] Data structure is correct (matches schema)
- [ ] All required fields populated
- [ ] Assets are in correct directories
- [ ] Paths to images/videos are correct
- [ ] Links work
- [ ] Tested locally
- [ ] Content follows best practices

---

## 🎉 Best Practices

1. **Read templates first** - Use provided templates as guides
2. **Proofread** - Check spelling, grammar, accuracy
3. **Quantify impact** - Use numbers when describing projects/work
4. **Keep it concise** - Shorter descriptions are more impactful
5. **Use action verbs** - Led, Built, Designed, Implemented
6. **Test locally** - Always verify before committing
7. **Ask when unsure** - Better to clarify than guess

---

**Version**: v1.0.0
**Last Updated**: 2025-11-09
**Maintained By**: Kalyan Chandana
