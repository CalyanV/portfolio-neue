# Quick Start Guide

**Goal**: Get your portfolio running locally and make your first customization in 10 minutes.

**Audience**: Product designer + AI native developer with basic terminal skills.

---

## Prerequisites

Before starting, ensure you have:

- **Node.js** installed (v18 or higher) - [Download here](https://nodejs.org/)
- **Code editor** (VS Code, Cursor, etc.)
- **Terminal** access
- **Git** installed (optional, for version control)

**Check Node version**:
```bash
node --version  # Should be v18.x or higher
```

---

## Step 1: Install Dependencies (2 minutes)

**Navigate to project directory**:
```bash
cd /path/to/portfolio-neue
```

**Install packages**:
```bash
npm install
```

**What this does**: Downloads all required libraries (Next.js, React, Tailwind, Shadcn/UI, Framer Motion, etc.).

**Troubleshooting**:
- If you see errors, try `npm cache clean --force` then `npm install` again
- If Node version is too old, upgrade to v18+

---

## Step 2: Start Development Server (1 minute)

**Run the dev server**:
```bash
npm run dev
```

**Open your browser**:
```
http://localhost:3000
```

**What you should see**:
- Homepage with hero section, work experience, projects, contact
- Dark mode toggle in navbar
- Smooth blur-fade animations on scroll
- Placeholder content (Dillion Verma's template data)

**Troubleshooting**:
- Port already in use? Try `PORT=3001 npm run dev`
- Build errors? Check terminal for specific error messages

---

## Step 3: Customize Resume Data (5 minutes)

**This is where 90% of your portfolio lives.**

**Open the main config file**:
```bash
src/data/resume.tsx
```

### Personal Information

Replace placeholder with your info:

```tsx
export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yourwebsite.com",
  location: "Your City, Country",
  locationLink: "https://www.google.com/maps/place/yourcity",
  description: "Product Designer + AI Native Developer. Building beautiful, intelligent products.",
  summary: "Your professional summary here. Talk about what you do, what you care about, and what you're working on.",
  avatarUrl: "/avatar.jpg",  // Add your photo to public/avatar.jpg

  // ... rest of the file
}
```

### Work Experience

Update the `work` array:

```tsx
work: [
  {
    company: "Your Company",
    href: "https://company.com",
    badges: ["Remote"], // Optional: Add badges like "Remote", "Contract", etc.
    location: "City, Country",
    title: "Your Job Title",
    logoUrl: "/company-logo.png",  // Add logo to public/
    start: "Jan 2024",
    end: "Present",  // Or specific end date
    description: "What you did at this job. Key achievements, technologies used, impact made.",
  },
  // Add more work entries...
],
```

### Skills

Update the `skills` array:

```tsx
skills: [
  "Figma",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "AI/ML",
  // Add your actual skills...
],
```

### Projects

Update the `projects` array:

```tsx
projects: [
  {
    title: "Your Project Name",
    href: "https://project-url.com",
    dates: "Jan 2024 - Mar 2024",
    active: true,  // Show "Active" badge
    description: "What the project does, problem it solves, impact it had.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: [
      {
        type: "Website",
        href: "https://project-url.com",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "GitHub",
        href: "https://github.com/username/repo",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/project-screenshot.png",  // Add to public/
    video: "",  // Or add video URL
  },
  // Add more projects...
],
```

### Social Links

Update contact links:

```tsx
contact: {
  email: "your.email@example.com",
  tel: "+1234567890",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: Icons.github,
      navbar: true,  // Show in navbar
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: Icons.linkedin,
      navbar: true,
    },
    X: {
      name: "X",
      url: "https://x.com/yourusername",
      icon: Icons.x,
      navbar: true,
    },
    // Add/remove social links as needed
  },
},
```

**Save the file**. The dev server auto-reloads. Check `localhost:3000` to see your changes.

---

## Step 4: Add Your Avatar & Project Images (2 minutes)

### Avatar Image

1. **Prepare your photo**:
   - Square crop (1:1 ratio)
   - At least 400x400px
   - Format: JPG or PNG

2. **Add to public folder**:
   ```
   public/avatar.jpg
   ```

3. **Update resume.tsx**:
   ```tsx
   avatarUrl: "/avatar.jpg",
   ```

### Project Images

1. **Add images to public/**:
   ```
   public/project-name-screenshot.png
   public/company-logo.png
   ```

2. **Reference in resume.tsx**:
   ```tsx
   image: "/project-name-screenshot.png",
   logoUrl: "/company-logo.png",
   ```

**Tip**: Use descriptive filenames like `airbnb-redesign.png` instead of `image1.png`.

---

## Step 5: Test Your Changes (1 minute)

### Visual Check

**Open localhost:3000** and verify:

- [ ] Your name appears in hero section
- [ ] Avatar image loads correctly
- [ ] Work experience cards show your jobs
- [ ] Skills badges display your technologies
- [ ] Projects grid shows your work
- [ ] Social links work (click to test)
- [ ] Dark mode toggle works
- [ ] Mobile responsive (resize browser window)

### Quick Tests

**Desktop view** (default browser width)
**Tablet view** (resize to ~768px width)
**Mobile view** (resize to ~375px width)

**All sections should stack nicely on mobile.**

---

## Common Commands Reference

```bash
# Development server (with hot reload)
npm run dev

# Type checking (find TypeScript errors)
npx tsc --noEmit

# Build for production (test before deploying)
npm run build

# Preview production build locally
npm run build && npm run start

# Code linting
npm run lint
```

---

## Next Steps

Now that you have the basics running:

1. **Write your first blog post** - See [Blog Post Template](../templates/blog-post-template.md)
2. **Customize the design** - See [Customization Guide](./customization-guide.md)
3. **Deploy your portfolio** - See [Deployment Guide](./deployment-guide.md)

---

## Troubleshooting

### "Module not found" errors

**Cause**: Dependencies not installed or corrupted.

**Fix**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Avatar/images not loading

**Cause**: File path or filename doesn't match.

**Fix**:
- Ensure file is in `public/` folder
- Check filename matches exactly (case-sensitive)
- Path should start with `/` (e.g., `/avatar.jpg`)

### "Port 3000 already in use"

**Cause**: Another app is using port 3000.

**Fix**:
```bash
# Use different port
PORT=3001 npm run dev

# Or kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9
```

### TypeScript errors in resume.tsx

**Cause**: Missing required fields or wrong data types.

**Fix**:
- Check error message for specific field
- Compare your data structure with template
- Ensure all required fields are present (title, description, etc.)

### Page is blank

**Cause**: JavaScript error breaking the app.

**Fix**:
- Check browser console (F12) for errors
- Check terminal for build errors
- Undo last change and save

---

## Getting Help

**Framework questions**: Ask Claude Code (it has full context from `.claude/` docs)

**Technical issues**:
- Check [Troubleshooting Guide](./troubleshooting.md) (if exists)
- Search [Next.js docs](https://nextjs.org/docs)
- Check browser console for errors

**Design questions**: See [Design System](../core/design-system.md)

---

## Philosophy

**You just customized a production-ready portfolio in 10 minutes.**

The beauty of this template:
- Single-file content updates (resume.tsx)
- No database, no backend, no complexity
- Modern, fast, beautiful out of the box
- Easy to extend when you need more

**Remember**: Build for today. Add complexity only when needed.

---

**Next**: [Customization Guide](./customization-guide.md) - Make this portfolio truly yours.
