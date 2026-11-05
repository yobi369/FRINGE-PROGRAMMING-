# FRINGE CODING

> **Beyond the Ordinary. Into What's Possible.**  
> An independent technology publication exploring AI training benchmarks, software reliability engineering, application security defense, developer tooling, and sustainable digital income models.

- **Founder:** Brian Mutunga
- **Author Brand:** By Tuchii Hunnid
- **Target Audience:** Global technology readers, software engineers, AI researchers, cybersecurity learners, and independent digital builders.

---

## Architecture & Design Principles

Fringe Coding is engineered from the ground up to be:
1. **Static-First & Zero-Cost CMS:** Requires no recurring database fees, no headless CMS subscription, and no expensive server processes to deliver published articles.
2. **Lightning Fast Global Edge Delivery:** Optimized for deployment on Cloudflare Pages, Vercel, or GitHub Pages with sub-50ms TTFB and automated CDN asset caching.
3. **Typography & Anti-Slop Discipline:** Custom typographic wordmark, strict zero-pill metadata formatting (unboxed text with typographic `·` separators), midnight navy palette with electric cyan and subtle violet accents, and zero fake telemetry clutter.
4. **Accessible & Responsive:** Seamless light/dark theme switching, mobile-first drawer navigation, keyboard focus management, and reading progress indicators.
5. **SEO & Search Indexation Ready:** Semantic HTML5, canonical URL enforcement, JSON-LD Schema.org structured data (`BlogPosting`, `WebSite`, `BreadcrumbList`), complete `robots.txt`, `sitemap.xml`, and valid `rss.xml` feed.
6. **Ethical Monetization Architecture:** Visible FTC 16 CFR Part 255 affiliate disclosures, `rel="nofollow sponsored"` link hygiene, tool recommendation cards with pros/cons, side-by-side comparison tables, and ad slots disabled by default.

---

## Starter Articles (10 Complete Investigations)

1. **AI Training Jobs: How to Evaluate Platforms, Tasks, and Payment Terms** (`/article/ai-training-jobs-platform-evaluation`)
2. **Data Labeling Quality: Annotation Guidelines, Edge Cases, and Common Errors** (`/article/data-labeling-quality-guidelines-edge-cases`)
3. **Building a Useful AI-Powered Web Application From Scratch** (`/article/building-useful-ai-powered-web-app`)
4. **Cybersecurity Fundamentals for Independent Developers** (`/article/cybersecurity-fundamentals-independent-developers`)
5. **Choosing AI Coding Assistants: A Practical Evaluation Framework** (`/article/choosing-ai-coding-assistants-framework`)
6. **How to Launch a Technology Blog on a Limited Budget** (`/article/launch-technology-blog-limited-budget`)
7. **Affiliate Marketing for Beginners: Trust, Disclosure, and Sustainable Growth** (`/article/affiliate-marketing-beginners-trust-disclosure`)
8. **Software Reliability: Testing, Failure Handling, and Release Evidence** (`/article/software-reliability-testing-failure-handling`)
9. **A Practical Guide to Technical SEO for New Websites** (`/article/practical-guide-technical-seo-new-websites`)
10. **Building a Developer Portfolio That Demonstrates Real Skills** (`/article/building-developer-portfolio-real-skills`)

---

## Seven Editorial Departments

- **Artificial Intelligence** (`/category/artificial-intelligence`)
- **Software Engineering** (`/category/software-engineering`)
- **Cybersecurity** (`/category/cybersecurity`)
- **Developer Tools** (`/category/developer-tools`)
- **AI Training & Data Labeling** (`/category/ai-training-data-labeling`)
- **Digital Income** (`/category/digital-income`)
- **Emerging Technology** (`/category/emerging-technology`)

---

## Local Development & Setup

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Quickstart
```bash
# 1. Clone repository
git clone https://github.com/your-username/fringe-coding.git
cd fringe-coding

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## How to Publish New Articles

Fringe Coding uses a structured, transparent file-based format. You never have to edit complex UI components to publish articles:

1. Open `src/data/articles.ts`.
2. Add a new article object to the `ARTICLES` array following the `Article` interface defined in `src/types/article.ts`.
3. Provide:
   - `slug`: Permanent URL slug (e.g., `modern-caching-patterns`).
   - `title` & `subtitle`: Headline and deck.
   - `categoryId`: One of the 7 supported categories.
   - `publishedDate` & `updatedDate`: ISO dates (YYYY-MM-DD).
   - `readingTimeMinutes`: Estimated read time.
   - `featuredImage`: Vector graphic path in `public/images/` or URL with descriptive alt text.
   - `tableOfContents`: Anchors matching section `id`s.
   - `sections`: Rich paragraphs, callouts, code blocks, or tables.
   - `keyTakeaways`: Summary bullet points.
4. Update `public/sitemap.xml` and `public/rss.xml` with your new permalink.
5. Commit and push to git.

---

## Production Build & Static Deployment

### Building Static Assets
```bash
npm run build
```
This generates a static distribution folder in `dist/`.

### Deploying to Cloudflare Pages (Recommended)
1. In Cloudflare Dashboard, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository.
3. Configure build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Your site will be published on global Anycast edge nodes for free.

### Deploying to Vercel
1. Import repository on Vercel.
2. Framework is detected as Vite automatically.
3. Click **Deploy**.

---

## Custom Domain & HTTPS Setup

1. In Cloudflare Pages or Vercel, navigate to **Custom Domains**.
2. Enter your apex domain (`fringecoding.com`) and subdomain (`www.fringecoding.com`).
3. Add the suggested CNAME and ALIAS DNS records at your domain registrar.
4. Cloudflare issues free, automated universal SSL/TLS certificates with HTTP/2 and HTTP/3 support.

---

## Connecting External Services

- **Newsletter Provider (Buttondown / ConvertKit / Substack):**
  Open `src/components/NewsletterBox.tsx` and connect the form submit handler to your provider's endpoint or embedded action URL.
- **Contact Form (Web3Forms / Formspree):**
  Open `src/pages/ContactPage.tsx` and configure your public form endpoint to forward submissions directly to `editorial@fringecoding.com`.
- **Ad Placements (EthicalAds / Carbon Ads / Google AdSense):**
  Open `src/components/AdSlot.tsx` to insert your publisher token. By default, all ad slots remain inactive for an ad-free reader experience.

---

## Google Search Console Verification

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain** property (`fringecoding.com`).
3. Copy the verification TXT record and add it to your DNS settings at your registrar or Cloudflare DNS.
4. Once verified, submit your sitemap URL: `https://fringecoding.com/sitemap.xml`.

---

## License & Credits

- Founded and engineered by **Brian Mutunga**.
- Author brand: **By Tuchii Hunnid**.
- Published under Fringe Coding. Code samples licensed under MIT / Apache-2.0.
