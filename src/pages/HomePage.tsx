import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Layers, Terminal } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { ArticleCard } from '../components/ArticleCard';
import { NewsletterBox } from '../components/NewsletterBox';
import { AdSlot } from '../components/AdSlot';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const secondaryArticles = ARTICLES.filter((a) => a.slug !== featuredArticle.slug && (a.editorPick || a.trending)).slice(0, 2);
  const latestArticles = ARTICLES.filter((a) => a.slug !== featuredArticle.slug && !secondaryArticles.some((s) => s.slug === a.slug)).slice(0, 4);
  const editorsPicks = ARTICLES.filter((a) => a.editorPick);

  return (
    <>
      <SEOHead
        title="Fringe Coding — Beyond the Ordinary. Into What's Possible."
        description="Independent technology publication exploring AI training, software engineering, cybersecurity, developer tools, and sustainable digital income. Founded by Brian Mutunga (By Tuchii Hunnid)."
        canonicalPath="/"
      />

      <div className="space-y-16 md:space-y-24 pb-12">
        {/* Editorial Hero & 3-Tier Visual Hierarchy */}
        <section className="pt-6 md:pt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Editorial Kicker Banner */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1.5 font-semibold">
                  <span>DISPATCH VOL. 01</span>
                  <span>·</span>
                  <span>INDEPENDENT TECHNOLOGY JOURNALISM</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white" style={{ textWrap: 'balance' }}>
                  Beyond the Ordinary. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500">Into What's Possible.</span>
                </h1>
              </div>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-md">
                Critical investigations into frontier AI alignment, software reliability, developer economics, and defensive cybersecurity.
              </p>
            </div>

            {/* 3-Tier Visual Grid */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Tier 1: Lead Story (7 cols, dominant weight >= 1.3x) */}
              <div className="lg:col-span-7">
                <article
                  onClick={() => onNavigate(`/article/${featuredArticle.slug}`)}
                  className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B101E] overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg"
                >
                  <div className="relative aspect-16/10 w-full bg-slate-950 overflow-hidden">
                    <img
                      src={featuredArticle.featuredImage.url}
                      alt={featuredArticle.featuredImage.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-xs text-cyan-300 font-mono mb-1 font-semibold">
                        <span>LEAD STORY</span>
                        <span>·</span>
                        <span>{featuredArticle.categoryName}</span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                        {featuredArticle.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900 dark:text-slate-200">{featuredArticle.author.brand}</span>
                        <span>·</span>
                        <span>{featuredArticle.readingTimeMinutes} min read</span>
                      </div>
                      <span className="font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Read Full Analysis</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Tier 2: Secondary Features (5 cols, structured cards) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                  <span>CURATED HIGHLIGHTS</span>
                </div>

                {secondaryArticles.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    onNavigate={onNavigate}
                    layout="standard"
                  />
                ))}
              </div>
            </div>

            {/* Institutional Standards & Peer Review Strip */}
            <div className="mt-12 p-4 md:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B101E]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">01.</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Peer-Verified Code</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">All snippets tested in Node 22, Python 3.12, and TypeScript.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">02.</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Zero Synthetic Fluff</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Written and audited by humans. No automated AI article generators.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">03.</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Real Unit Economics</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Sober analysis of AI contractor queues, cloud costs, and margins.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">04.</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">FTC 16 CFR § 255</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Zero paid ratings. Transparent affiliate disclosures on every review.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Latest Publications
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Fresh insights on architecture, model evaluation, and software defense.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/articles')}
              className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 flex items-center gap-1 cursor-pointer"
            >
              <span>View All 10 Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                onNavigate={onNavigate}
                layout="standard"
              />
            ))}
          </div>
        </section>

        {/* Seven Category Archive Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B101E]/60">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                EDITORIAL TAXONOMY
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Explore by Domain
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Seven core engineering and digital work departments curated with practical standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {CATEGORIES.map((cat) => {
                const count = ARTICLES.filter((a) => a.categoryId === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onNavigate(`/category/${cat.slug}`)}
                    className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1424] text-left hover:border-cyan-500 dark:hover:border-cyan-500 transition-all group cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                      <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{cat.name}</span>
                      <span className="tabular-nums">{count} {count === 1 ? 'article' : 'articles'}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-cyan-500 transition-colors">
                      <span>Browse category</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tier 3: Editor's Picks (Compact horizontal department list) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                <BookOpen className="w-4 h-4 text-cyan-500" />
                <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  Editor's Essential Reading
                </h3>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {editorsPicks.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    onNavigate={onNavigate}
                    layout="horizontal"
                  />
                ))}
              </div>
            </div>

            {/* Founder Note & Mission Statement */}
            <div className="lg:col-span-4 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-500 dark:text-violet-400 font-semibold">
                <Terminal className="w-4 h-4" />
                <span>FROM THE FOUNDER</span>
              </div>

              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Brian Mutunga / Tuchii Hunnid
              </h4>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                "Fringe Coding was founded on a simple conviction: technology media should serve working developers, learners, and real practitioners, not speculative press releases.
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Every guide published here is tested against real engineering criteria: no fabricated earnings, no hidden affiliate traps, and zero automated AI slop."
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <button
                  onClick={() => onNavigate('/about')}
                  className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline cursor-pointer"
                >
                  Read Founder Narrative →
                </button>
                <span className="text-slate-400">Founder &amp; Author</span>
              </div>
            </div>
          </div>
        </section>

        {/* AdSlot (Dormant by default, cleanly styled) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSlot slotId="home-bottom-sponsor" />
        </div>

        {/* Newsletter Signup Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterBox />
        </section>
      </div>
    </>
  );
};
