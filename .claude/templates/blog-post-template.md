# Blog Post Template

Use this template when creating new blog posts for your portfolio.

---

## File Location

```
content/your-post-slug.mdx
```

**Slug**: Lowercase, hyphen-separated, descriptive
- ✅ `building-design-system.mdx`
- ✅ `figma-plugin-tutorial.mdx`
- ❌ `post1.mdx`
- ❌ `My_Blog_Post.mdx`

---

## Template Structure

````mdx
---
title: "Your Blog Post Title Here"
summary: "A compelling 1-2 sentence summary that makes readers want to click. Include the main benefit or insight."
publishedAt: "2025-11-09"
---

# Your Blog Post Title Here

**Introduction paragraph**: Hook the reader. Explain what this post is about, why it matters, and what they'll learn.

## Section 1: Main Topic

Start with your first main point. Keep paragraphs short (2-3 sentences max) for readability.

### Subsection (If Needed)

Break down complex topics into digestible chunks.

**Example with code**:

```tsx
export function Example() {
  return (
    <div className="example">
      <h1>Hello World</h1>
    </div>
  )
}
```

**Explanation**: Explain what the code does and why it's structured this way.

## Section 2: Another Main Point

Continue building on your topic.

**Key takeaways**:
- Use bullet points for lists
- Keep items parallel in structure
- Limit to 5-7 items max

## Section 3: Advanced Details (Optional)

Dig deeper if needed. Include:
- Technical details
- Edge cases
- Performance considerations

### Code Example with Multiple Languages

**TypeScript**:
```tsx
interface Props {
  title: string
  description?: string
}

export function Card({ title, description }: Props) {
  return <div>{title}</div>
}
```

**Python**:
```python
def process_data(items):
    return [item.upper() for item in items]
```

## Adding Images

![Image alt text](/images/blog/your-image.png)

*Caption: Descriptive caption for the image*

**Image best practices**:
- Place images in `public/images/blog/`
- Use descriptive alt text (accessibility)
- Optimize file size (< 500KB)
- Use PNG for diagrams, JPG for photos

## Adding Links

Link to [relevant resources](https://example.com) or [other blog posts](/blog/another-post).

**Internal links**: Use relative paths
**External links**: Use full URLs

## Conclusion

Summarize the main points. What should readers remember?

**Next steps** (optional):
1. Try implementing this yourself
2. Read the [follow-up post](/blog/related-post)
3. Share feedback or questions

---

*Published on November 9, 2025*
````

---

## Frontmatter Fields

### `title` (required)

**Purpose**: Post title for heading and SEO
**Length**: 40-60 characters ideal
**Format**: Title Case
**Examples**:
- ✅ "Building a Design System from Scratch"
- ✅ "10 Figma Tips for Product Designers"
- ❌ "My thoughts" (too vague)
- ❌ "This is an extremely long title that goes on and on and is bad for SEO" (too long)

### `summary` (required)

**Purpose**: Short description for blog listing page and SEO
**Length**: 1-2 sentences, under 160 characters
**Format**: Complete sentence(s)
**Examples**:
- ✅ "Lessons learned from creating a component library used by 20+ teams."
- ✅ "A practical guide to building performant animations with Framer Motion."
- ❌ "Design systems" (too short)
- ❌ Long paragraph (too long)

### `publishedAt` (required)

**Purpose**: Publication date for sorting and display
**Format**: `YYYY-MM-DD`
**Examples**:
- ✅ `"2025-11-09"`
- ❌ `"Nov 9, 2025"` (wrong format)
- ❌ Future date (post won't show until that date)

---

## Markdown Features

### Headings

```md
# H1 - Use once at top (matches title)
## H2 - Main sections
### H3 - Subsections
#### H4 - Rarely needed
```

### Text Formatting

```md
**Bold text** for emphasis
*Italic text* for subtle emphasis
`inline code` for code snippets
[Link text](https://example.com)
```

### Lists

```md
Unordered:
- Item 1
- Item 2
  - Nested item

Ordered:
1. First step
2. Second step
3. Third step
```

### Code Blocks

**With syntax highlighting**:
````md
```tsx
// TypeScript + React
export function Component() {
  return <div>Example</div>
}
```

```python
# Python
def example():
    return "Hello"
```

```bash
# Shell commands
npm install package-name
cd directory
```
````

**Supported languages**: tsx, jsx, ts, js, python, bash, json, css, html, go, rust, etc.

### Images

```md
![Alt text description](/images/blog/image-name.png)

*Optional caption goes here*
```

**Image placement**:
1. Add image to `public/images/blog/`
2. Reference with path starting with `/`
3. Always include descriptive alt text (accessibility)

### Blockquotes

```md
> This is a callout or quote
> It can span multiple lines
```

### Tables

```md
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

---

## Blog Post Checklist

Before publishing:
- [ ] Frontmatter complete (title, summary, publishedAt)
- [ ] Title is clear and under 60 chars
- [ ] Summary is compelling (1-2 sentences)
- [ ] Date format is YYYY-MM-DD
- [ ] H1 matches title
- [ ] Content is structured with H2/H3 headings
- [ ] Code blocks have language identifiers
- [ ] Images are in `public/images/blog/`
- [ ] Alt text for all images
- [ ] Links tested and working
- [ ] Proofread for typos/grammar
- [ ] Tested locally: `npm run dev` → `/blog/your-slug`

---

## Example: Complete Blog Post

**File**: `content/figma-to-code-workflow.mdx`

````mdx
---
title: "From Figma to Code: My Design Handoff Workflow"
summary: "A streamlined process for converting Figma designs to production-ready React components."
publishedAt: "2025-11-09"
---

# From Figma to Code: My Design Handoff Workflow

As a product designer who codes, I've spent years refining my process for turning Figma designs into pixel-perfect components. Here's the workflow that works for me.

## The Problem with Traditional Handoff

Traditional design handoff is broken. Designers create mockups, hand them to developers, and hope for the best. The result? Miscommunication, inconsistencies, and endless back-and-forth.

**Common issues**:
- Missing specs (spacing, colors, states)
- Broken component hierarchy
- No design tokens
- Inefficient iteration loops

## My Workflow in 4 Steps

### Step 1: Design with Code in Mind

When designing in Figma, I structure my components like I'd structure them in React:

```
Component (like a React component)
├─ Container (flex/grid layout)
├─ Header (title, description)
└─ Content (body content)
```

**Why this matters**: Makes translation to code effortless.

### Step 2: Extract Design Tokens

Before writing code, I extract all design tokens:

```tsx
// colors.ts
export const colors = {
  primary: "hsl(210, 100%, 50%)",
  background: "hsl(0, 0%, 100%)",
  // ...
}

// spacing.ts
export const spacing = {
  xs: "0.25rem",  // 4px
  sm: "0.5rem",   // 8px
  md: "1rem",     // 16px
  // ...
}
```

![Design tokens in Figma](/images/blog/design-tokens.png)

*Design tokens ensure consistency between design and code*

### Step 3: Build Component Structure

Start with the HTML structure (semantic, accessible):

```tsx
export function Card({ title, description }: CardProps) {
  return (
    <article className="card">
      <header>
        <h3>{title}</h3>
      </header>
      <p>{description}</p>
    </article>
  )
}
```

### Step 4: Apply Styling

Use Tailwind CSS (or your framework) matching the design tokens:

```tsx
<article className="flex flex-col gap-4 p-6 rounded-lg bg-background">
  <header>
    <h3 className="text-xl font-bold">{title}</h3>
  </header>
  <p className="text-muted-foreground">{description}</p>
</article>
```

## Results

This workflow has:
- Reduced handoff time by 60%
- Eliminated 90% of design inconsistencies
- Made iterations 3x faster

## Try It Yourself

1. Structure Figma components like React components
2. Extract design tokens first
3. Build HTML structure
4. Apply styles using design tokens

Want to dive deeper? Check out my [design system case study](/blog/design-system-case-study).

---

*Published on November 9, 2025*
````

---

**Version**: v1.0.0
**Last Updated**: 2025-11-09
