# Deployment Guide

**Goal**: Deploy your portfolio to production and make it accessible to the world.

**Audience**: Product designer + AI native developer ready to ship.

---

## Prerequisites

Before deploying:

- [ ] Portfolio content is updated (see [Quick Start](./quick-start.md))
- [ ] Customizations are complete (see [Customization Guide](./customization-guide.md))
- [ ] Build succeeds locally (`npm run build`)
- [ ] All links work (test locally)
- [ ] Images load correctly
- [ ] Dark mode works
- [ ] Mobile responsive

---

## Pre-Deployment Checklist

### 1. Test Production Build Locally

**Run production build**:
```bash
npm run build
```

**Check for errors**:
- TypeScript errors
- Missing images
- Broken imports
- Build failures

**Preview production build**:
```bash
npm run start
```

Open `localhost:3000` and verify everything works.

### 2. Update Site Metadata

**Open**: `src/app/layout.tsx`

Update metadata:

```tsx
export const metadata: Metadata = {
  title: "Your Name - Product Designer + Developer",
  description: "Portfolio of Your Name, product designer and AI native developer building beautiful, intelligent products.",
  metadataBase: new URL("https://yourdomain.com"),  // YOUR DOMAIN
  openGraph: {
    title: "Your Name - Product Designer + Developer",
    description: "Portfolio showcasing design and development work",
    url: "https://yourdomain.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/og-image.png",  // Create this (1200x630px)
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Product Designer + Developer",
    description: "Portfolio showcasing design and development work",
    images: ["/og-image.png"],
  },
};
```

### 3. Add Favicon

**Replace default favicon**:

1. Create favicon (use [favicon.io](https://favicon.io/))
2. Replace files in `public/`:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `favicon-16x16.png`
   - `favicon-32x32.png`

### 4. Create Open Graph Image

**What**: Preview image when sharing your portfolio on social media

**Size**: 1200x630px

**Content**: Your name, title, maybe avatar

**Add to**: `public/og-image.png`

**Tools**:
- [Canva](https://canva.com/) (templates for OG images)
- [Figma](https://figma.com/) (design from scratch)
- [og-playground](https://og-playground.vercel.app/) (automated)

---

## Deployment Option 1: Vercel (Recommended)

**Why Vercel**:
- ✅ Zero config (made by Next.js creators)
- ✅ Automatic deployments on git push
- ✅ Built-in analytics and performance monitoring
- ✅ Edge network (fast globally)
- ✅ Generous free tier (perfect for portfolios)
- ✅ Custom domains (free SSL)

### Step-by-Step (10 minutes)

**1. Create Vercel account**:
- Go to [vercel.com](https://vercel.com/)
- Sign up with GitHub (recommended)

**2. Import your repository**:
- Click "Add New Project"
- Select your portfolio repository
- Or import from GitHub URL

**3. Configure project**:
```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**Vercel auto-detects these** - just verify they're correct.

**4. Deploy**:
- Click "Deploy"
- Wait 2-3 minutes for first build
- You'll get a URL like `your-portfolio.vercel.app`

**5. Set up custom domain** (optional):
- Go to Project Settings → Domains
- Add your domain (e.g., `yourname.com`)
- Follow DNS setup instructions from your registrar
- Vercel auto-provisions SSL certificate

**6. Configure automatic deployments**:
- Every push to `main` branch auto-deploys
- Pull requests get preview URLs
- No configuration needed (it just works)

### Vercel Environment Variables

**If you add features later** (analytics, contact forms):

- Go to Project Settings → Environment Variables
- Add key-value pairs
- Example: `NEXT_PUBLIC_ANALYTICS_ID=your-id`

---

## Deployment Option 2: Netlify

**Why Netlify**:
- ✅ Easy setup, great UI
- ✅ Form handling built-in (useful if you add contact form)
- ✅ Edge functions
- ✅ Split testing
- ✅ Free tier

### Step-by-Step (10 minutes)

**1. Create Netlify account**:
- Go to [netlify.com](https://netlify.com/)
- Sign up with GitHub

**2. Import repository**:
- Click "Add new site" → "Import existing project"
- Select GitHub repository

**3. Configure build settings**:
```
Build command: npm run build
Publish directory: .next
```

**4. Add Next.js configuration**:

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**Install Netlify Next.js plugin**:
```bash
npm install -D @netlify/plugin-nextjs
```

**5. Deploy**:
- Click "Deploy site"
- Wait for build
- Get URL like `your-portfolio.netlify.app`

**6. Custom domain**:
- Go to Domain Settings
- Add custom domain
- Follow DNS instructions

---

## Deployment Option 3: Cloudflare Pages

**Why Cloudflare Pages**:
- ✅ Fastest CDN (best global performance)
- ✅ Unlimited bandwidth (even on free tier)
- ✅ Built-in analytics
- ✅ DDoS protection

### Step-by-Step (10 minutes)

**1. Create Cloudflare account**:
- Go to [pages.cloudflare.com](https://pages.cloudflare.com/)
- Sign up with email

**2. Connect GitHub**:
- Click "Create a project"
- Connect GitHub account
- Select repository

**3. Configure build**:
```
Framework preset: Next.js
Build command: npx @cloudflare/next-on-pages@1
Build output directory: .vercel/output/static
```

**4. Add adapter** (Cloudflare-specific):

```bash
npm install -D @cloudflare/next-on-pages
```

Update `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static export
  images: {
    unoptimized: true,  // Cloudflare doesn't support next/image optimization
  },
};

export default nextConfig;
```

**5. Deploy**:
- Click "Save and Deploy"
- Get URL like `your-portfolio.pages.dev`

**6. Custom domain**:
- Go to Custom domains
- Add domain (free if using Cloudflare DNS)

---

## Deployment Option 4: GitHub Pages (Free)

**Why GitHub Pages**:
- ✅ Completely free
- ✅ No sign-up needed (uses GitHub account)
- ✅ Integrated with GitHub

**Limitations**:
- ⚠️ Requires static export (some Next.js features won't work)
- ⚠️ Manual workflow setup
- ⚠️ Slower than Vercel/Netlify

### Step-by-Step (15 minutes)

**1. Enable static export**:

Update `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-neue' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

**2. Create GitHub Actions workflow**:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v2
```

**3. Enable GitHub Pages**:
- Go to repository Settings → Pages
- Source: GitHub Actions
- Save

**4. Push to GitHub**:
```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

**5. Access site**:
- URL: `https://yourusername.github.io/portfolio-neue`
- Check Actions tab for deployment status

---

## Post-Deployment Tasks

### 1. Test Production Site

**Open your deployed URL** and verify:

- [ ] All pages load
- [ ] Images display correctly
- [ ] Links work (especially external links)
- [ ] Dark mode toggle works
- [ ] Mobile responsive
- [ ] Blog posts load
- [ ] Social links work
- [ ] Forms work (if added)

**Test on multiple devices**:
- Desktop browser
- Mobile phone
- Tablet

### 2. Set Up Analytics (Optional)

**Recommended**: Plausible Analytics (privacy-friendly, GDPR compliant)

**Setup**:
1. Sign up at [plausible.io](https://plausible.io/)
2. Add your domain
3. Get tracking script
4. Add to `layout.tsx`:

```tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Other options**:
- **Google Analytics** (free, feature-rich, privacy concerns)
- **Vercel Analytics** (built-in, paid)
- **Simple Analytics** (privacy-focused, paid)

### 3. Submit to Search Engines

**Google**:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Note**: Next.js auto-generates sitemap if you add `app/sitemap.ts`

**Create sitemap** (optional):

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
```

### 4. Set Up Custom Domain

**Buy domain** (if you don't have one):
- [Namecheap](https://namecheap.com/) - Cheap, reliable
- [Porkbun](https://porkbun.com/) - Great pricing
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) - At-cost pricing

**Configure DNS** (example: Vercel):

Add DNS records at your registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Wait for DNS propagation** (can take up to 48 hours, usually <1 hour).

---

## Continuous Deployment Workflow

**After initial deployment**, your workflow becomes:

1. **Make changes locally**
   ```bash
   # Edit files
   npm run dev  # Test locally
   ```

2. **Commit and push**
   ```bash
   git add .
   git commit -m "Update project section with new work"
   git push
   ```

3. **Auto-deploy** (Vercel/Netlify/Cloudflare)
   - Detects push to main branch
   - Runs build automatically
   - Deploys if build succeeds
   - You get notification (success/failure)

4. **Verify live site**
   - Open production URL
   - Check changes deployed correctly

**No manual steps needed after initial setup!**

---

## Troubleshooting

### Build fails with "Module not found"

**Cause**: Missing dependencies

**Fix**:
```bash
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Images don't load on production

**Cause**: Incorrect path or case-sensitivity

**Fix**:
- Ensure images are in `public/` folder
- Use absolute paths: `/image.png` not `image.png`
- Check filename case matches exactly (`Avatar.png` ≠ `avatar.png`)

### Site is slow to load

**Cause**: Large images, unoptimized assets

**Fix**:
1. Compress images (use [tinypng.com](https://tinypng.com/))
2. Use modern formats (WebP instead of PNG/JPG)
3. Enable Next.js Image optimization (if not using GitHub Pages):

```tsx
import Image from 'next/image';

<Image
  src="/project.png"
  alt="Project"
  width={800}
  height={600}
  priority
/>
```

### Custom domain not working

**Cause**: DNS not configured or still propagating

**Fix**:
1. Wait 24-48 hours for DNS propagation
2. Check DNS with [dnschecker.org](https://dnschecker.org/)
3. Verify DNS records match your platform's requirements
4. Clear browser cache

### Build works locally but fails on platform

**Cause**: Environment differences, missing env variables

**Fix**:
1. Check build logs for specific error
2. Ensure Node version matches (set in `package.json`:)

```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

3. Check for hardcoded localhost URLs
4. Verify all env variables are set on platform

---

## Performance Optimization

### After Deployment

**Run Lighthouse audit**:
1. Open site in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Click "Analyze page load"

**Target scores**:
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >90

**Common improvements**:
- Compress images
- Enable lazy loading
- Minimize unused JavaScript
- Use font-display: swap
- Add meta descriptions

### Enable Caching

**Vercel** (automatic)
- Static assets cached at edge
- No configuration needed

**Cloudflare** (automatic)
- Cached globally
- Can configure cache rules in dashboard

**Netlify** (add headers):

Create `public/_headers`:

```
/*
  Cache-Control: public, max-age=31536000, immutable
```

---

## Security Best Practices

### HTTPS

**All platforms** (Vercel, Netlify, Cloudflare) provide **free SSL certificates automatically**.

**Verify**:
- URL starts with `https://`
- Lock icon in browser
- Certificate is valid (click lock icon)

### Content Security Policy (Optional)

**For added security**, create `next.config.mjs`:

```js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

---

## Monitoring & Maintenance

### Set Up Uptime Monitoring

**Free options**:
- [UptimeRobot](https://uptimerobot.com/) - Check site every 5 minutes
- [Freshping](https://freshping.io/) - Simple uptime monitoring

**Setup**:
1. Add your domain
2. Get email alerts if site goes down
3. Set up status page (optional)

### Regular Maintenance

**Monthly**:
- [ ] Update dependencies (`npm outdated`, `npm update`)
- [ ] Check for security vulnerabilities (`npm audit`)
- [ ] Review analytics (top pages, traffic sources)
- [ ] Test all links (use [broken-link-checker](https://github.com/stevenvachon/broken-link-checker))

**Quarterly**:
- [ ] Update content (new projects, blog posts)
- [ ] Review and refresh resume data
- [ ] Check Lighthouse scores
- [ ] Update portfolio screenshots

---

## Cost Breakdown

### Free Forever (Realistic)

**Vercel Free Tier**:
- ✅ Unlimited personal projects
- ✅ 100 GB bandwidth/month (plenty for portfolio)
- ✅ Automatic HTTPS
- ✅ Custom domain

**Cloudflare Pages Free**:
- ✅ Unlimited bandwidth
- ✅ 500 builds/month
- ✅ Unlimited requests

**Netlify Free**:
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month

**Domain cost**: $10-15/year (only required cost)

### Paid Add-Ons (Optional)

- **Analytics**: $9-19/month (Plausible, Simple Analytics)
- **Form handling**: $5-10/month (if you exceed free tier)
- **Email**: $0-10/month (if adding newsletter)

**Total realistic cost**: $10-15/year (just domain)

---

## Next Steps After Deployment

1. **Share your portfolio**:
   - Update LinkedIn URL
   - Add to resume
   - Share on social media
   - Add to email signature

2. **SEO optimization**:
   - Write blog posts (improves SEO)
   - Add meta descriptions
   - Submit to Google Search Console

3. **Get feedback**:
   - Share with designer friends
   - Post on Twitter/X for feedback
   - Ask hiring managers what they want to see

4. **Iterate**:
   - Track which projects get most views (analytics)
   - A/B test CTAs
   - Update with new work regularly

---

## Philosophy

**Shipping is the goal**. A live, imperfect portfolio beats a perfect portfolio that never launches.

**Ship fast**:
- Deploy on day 1 (even with placeholder content)
- Update weekly (new projects, blog posts)
- Iterate based on real feedback (not assumptions)

**Remember**: Your portfolio is a living document. It grows with you. Ship it, share it, improve it.

---

**Congratulations! Your portfolio is live.** 🎉

**Helpful links**:
- [Quick Start](./quick-start.md) - Setup guide
- [Customization](./customization-guide.md) - Make it yours
- [Project Context](../PROJECT_CONTEXT.md) - Tech stack reference
