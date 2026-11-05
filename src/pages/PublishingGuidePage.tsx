import React from 'react';
import { FileCode, GitBranch, Globe, CheckCircle2, Copy } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CodeBlock } from '../components/CodeBlock';

export const PublishingGuidePage: React.FC = () => {
  const exampleArticleCode = `// Add your new article object into src/data/articles.ts:
{
  slug: 'understanding-state-machines-in-ui',
  title: 'Understanding Finite State Machines in Production UIs',
  subtitle: 'Eliminating impossible UI states with mathematical rigor and XState.',
  excerpt: 'Boolean state flags quickly multiply into unmaintainable bugs. Learn how statecharts provide verifiable UI contracts.',
  categoryId: 'software-engineering',
  categoryName: 'Software Engineering',
  author: AUTHOR_DEFAULT,
  publishedDate: '2026-04-15',
  updatedDate: '2026-04-15',
  readingTimeMinutes: 9,
  featured: false,
  tags: ['State Machines', 'TypeScript', 'Frontend Architecture'],
  featuredImage: {
    url: '/images/editorial-state-machines.svg',
    alt: 'Visual statechart graph showing transitions and guards',
    caption: 'Statechart transitions between Idle, Loading, Success, and Error states.'
  },
  seo: {
    title: 'Finite State Machines in Production UIs | Fringe Coding',
    metaDescription: 'Eliminate impossible UI states with finite state machines and XState in TypeScript.',
    keywords: ['state machines', 'XState', 'UI state architecture']
  },
  tableOfContents: [
    { id: 'boolean-explosion', title: 'The Problem with Boolean Explosion', level: 2 },
    { id: 'statechart-basics', title: 'Statechart Primitives: States and Events', level: 2 }
  ],
  sections: [
    {
      id: 'boolean-explosion',
      heading: 'The Problem with Boolean Explosion',
      paragraphs: [
        'When an engineer combines isLoading, isError, isSuccess, and isRetrying, they create 16 theoretical permutations—most of which represent broken states.'
      ]
    }
  ],
  keyTakeaways: [
    'Replace competing boolean flags with mutually exclusive states.',
    'Test state machines with deterministic event transitions.'
  ],
  hasAffiliateLinks: false,
  references: []
}`;

  return (
    <>
      <SEOHead
        title="Publishing Workflow &amp; Architecture Guide — Fringe Coding"
        description="Documentation on how to publish new articles, configure SEO metadata, and deploy to Cloudflare Pages or Vercel without editing UI components."
        canonicalPath="/publishing-guide"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
        <div className="pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            OPERATIONAL ARCHITECTURE
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Publishing New Articles Guide
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            How to add articles, manage metadata, and deploy updates to global CDNs without touching React components or maintaining a database.
          </p>
        </div>

        {/* Step-by-Step Workflow */}
        <div className="space-y-10 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileCode className="w-5 h-5 text-cyan-500" />
              <span>Step 1: The File-Based Content Architecture</span>
            </h2>
            <p>
              Fringe Coding intentionally uses a <strong>file-based structured content system</strong> located at <code>src/data/articles.ts</code>. You never need to touch layout JSX, navigation code, or styling files to publish an article.
            </p>
            <p>
              Every article is a typed TypeScript object conforming to the <code>Article</code> interface in <code>src/types/article.ts</code>. This guarantees autocomplete, type-checking, and build-time verification.
            </p>

            <CodeBlock
              language="typescript"
              code={exampleArticleCode}
              caption="Example article entry ready to paste into src/data/articles.ts"
            />
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-500" />
              <span>Step 2: Automated SEO, Sitemap &amp; RSS Updates</span>
            </h2>
            <p>
              When you add an article to <code>src/data/articles.ts</code>:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm">
              <li>The article automatically appears on the <strong>Homepage</strong>, <strong>Archive</strong>, and its <strong>Category Page</strong>.</li>
              <li>A clean permanent URL is generated: <code>/article/your-slug</code>.</li>
              <li>Schema.org JSON-LD structured data is dynamically generated.</li>
              <li>To update your public search files, append the URL to <code>public/sitemap.xml</code> and <code>public/rss.xml</code>.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-cyan-500" />
              <span>Step 3: Continuous Deployment with Git</span>
            </h2>
            <p>
              Because the site compiles to high-performance static bundles, deployment is instantaneous and free:
            </p>
            <div className="p-4 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs space-y-2">
              <div># 1. Test compilation locally</div>
              <div className="text-cyan-400">npm run build</div>
              <div># 2. Commit your article</div>
              <div className="text-cyan-400">git commit -am "Publish: Finite State Machines in Production UIs"</div>
              <div># 3. Push to GitHub</div>
              <div className="text-cyan-400">git push origin main</div>
            </div>
            <p className="text-xs text-slate-500">
              Your edge provider (Cloudflare Pages, Vercel, or GitHub Pages) detects the commit, runs <code>vite build</code>, and rolls out your article worldwide in approximately 40 seconds.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Publishing Checklist</span>
            </h2>
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0D1322] space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Slug uses lowercase hyphens only (e.g., <code>ai-training-jobs-platform-evaluation</code>).</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Meta description is between 120 and 160 characters.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Table of contents anchors match section <code>id</code> attributes exactly.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>If affiliate links exist, set <code>hasAffiliateLinks: true</code> and include disclosure text.</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
