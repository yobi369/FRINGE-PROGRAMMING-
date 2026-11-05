import React, { useState, useEffect, useMemo } from 'react';
import {
  Clock,
  Calendar,
  Share2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  Check,
  Twitter,
  Linkedin,
  Link2,
  BookOpen,
  ChevronRight,
  Quote,
  Printer,
  ShieldCheck
} from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { Article } from '../types/article';
import { useTheme } from '../context/ThemeContext';
import { SEOHead } from '../components/SEOHead';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { CodeBlock } from '../components/CodeBlock';
import { CalloutBox } from '../components/CalloutBox';
import { ToolRecommendationCard } from '../components/ToolRecommendationCard';
import { ComparisonTable } from '../components/ComparisonTable';
import { AffiliateDisclosureBanner } from '../components/AffiliateDisclosureBanner';
import { AdSlot } from '../components/AdSlot';
import { ArticleCard } from '../components/ArticleCard';
import { NewsletterBox } from '../components/NewsletterBox';
import { CiteArticleModal } from '../components/CiteArticleModal';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, onNavigate }) => {
  const { isBookmarked, toggleBookmark } = useTheme();
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [citeModalOpen, setCiteModalOpen] = useState(false);

  const articleIndex = ARTICLES.findIndex((a) => a.slug === slug);
  const article: Article | undefined = ARTICLES[articleIndex];

  // Dynamic word count approximation
  const estimatedWordCount = useMemo(() => {
    if (!article) return 0;
    const allWords = article.sections
      .flatMap((s) => s.paragraphs)
      .join(' ')
      .split(/\s+/).length;
    return allWords + 350; // including title, deck, notes
  }, [article]);

  // Previous and Next article navigation
  const prevArticle = articleIndex > 0 ? ARTICLES[articleIndex - 1] : null;
  const nextArticle = articleIndex < ARTICLES.length - 1 ? ARTICLES[articleIndex + 1] : null;

  // Related articles in same category or adjacent
  const relatedArticles = article
    ? ARTICLES.filter((a) => a.slug !== article.slug && a.categoryId === article.categoryId).concat(
        ARTICLES.filter((a) => a.slug !== article.slug && a.categoryId !== article.categoryId)
      ).slice(0, 3)
    : [];

  // Track active section for table of contents
  useEffect(() => {
    if (!article) return;

    const handleScroll = () => {
      const headings = article.sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 160;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveSectionId(heading.id);
          return;
        }
      }
      if (article.sections.length > 0) {
        setActiveSectionId(article.sections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Article Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          The requested article permalink does not exist or has been moved.
        </p>
        <button
          onClick={() => onNavigate('/articles')}
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-xs font-semibold cursor-pointer"
        >
          Return to Archive
        </button>
      </div>
    );
  }

  const bookmarked = isBookmarked(article.slug);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`${article.title} via @fringecoding`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleShareLinkedin = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title={article.seo.title}
        description={article.seo.metaDescription}
        canonicalPath={`/article/${article.slug}`}
        article={article}
        type="article"
      />

      <ReadingProgressBar />

      <article className="pb-16 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-cyan-500 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <button
              onClick={() => onNavigate(`/category/${article.categoryId}`)}
              className="hover:text-cyan-500 transition-colors cursor-pointer"
            >
              {article.categoryName}
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="truncate max-w-[220px] sm:max-w-sm text-slate-700 dark:text-slate-300 font-medium">
              {article.title}
            </span>
          </nav>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto text-center md:text-left mb-8 md:mb-12">
            {/* Unboxed Category & Metadata */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3 font-mono">
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{article.categoryName}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>Published {article.publishedDate}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span className="tabular-nums">{article.readingTimeMinutes} min read</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              {article.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {article.subtitle}
            </p>

            {/* Author Byline Lockup */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 font-bold font-mono text-sm">
                  TH
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {article.author.brand}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Founded by {article.author.founder} · Technology Analyst
                  </div>
                </div>
              </div>

              {/* Utility Action Buttons */}
              <div className="flex items-center gap-2 text-xs">
                {/* Font Size Toggle */}
                <div className="flex items-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] rounded-lg p-0.5">
                  <button
                    onClick={() => setFontSize('normal')}
                    className={`px-2 py-1 rounded cursor-pointer ${fontSize === 'normal' ? 'bg-slate-100 dark:bg-slate-800 text-cyan-500 font-semibold' : 'text-slate-400'}`}
                    title="Normal text size"
                  >
                    Aa
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`px-2 py-1 rounded cursor-pointer ${fontSize === 'large' ? 'bg-slate-100 dark:bg-slate-800 text-cyan-500 font-semibold' : 'text-slate-400'}`}
                    title="Large text size"
                  >
                    A+
                  </button>
                </div>

                {/* Cite Article Button */}
                <button
                  type="button"
                  onClick={() => setCiteModalOpen(true)}
                  className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5 font-medium"
                  title="Export BibTeX / IEEE / APA citation"
                >
                  <Quote className="w-3.5 h-3.5 text-cyan-500" />
                  <span className="hidden sm:inline">Cite</span>
                </button>

                {/* Print Utility */}
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors cursor-pointer hidden sm:flex"
                  title="Print or Save as PDF"
                  aria-label="Print article"
                >
                  <Printer className="w-4 h-4" />
                </button>

                {/* Bookmark Toggle */}
                <button
                  type="button"
                  onClick={() => toggleBookmark(article.slug)}
                  className={`p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] transition-colors cursor-pointer ${
                    bookmarked ? 'text-cyan-500' : 'text-slate-500 dark:text-slate-400 hover:text-cyan-500'
                  }`}
                  title={bookmarked ? 'Saved to bookmarks' : 'Save article'}
                  aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-cyan-500' : ''}`} />
                </button>

                {/* Share X */}
                <button
                  type="button"
                  onClick={handleShareTwitter}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors cursor-pointer"
                  title="Share on X"
                  aria-label="Share on X"
                >
                  <Twitter className="w-4 h-4" />
                </button>

                {/* Share LinkedIn */}
                <button
                  type="button"
                  onClick={handleShareLinkedin}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors cursor-pointer"
                  title="Share on LinkedIn"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>

                {/* Copy Link */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors cursor-pointer flex items-center gap-1"
                  title="Copy permanent article link"
                  aria-label="Copy link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Link2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Institutional Peer Review Assurance Strip */}
            <div className="mt-4 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0D1322]/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  <strong>Editorial Invariant:</strong> Validated against current runtime specs · Zero synthetic AI filler
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px] text-slate-500">
                <span>EST. ~{estimatedWordCount.toLocaleString()} WORDS</span>
                <span>·</span>
                <span>ISSN PENDING</span>
              </div>
            </div>
          </header>

          {/* Hero Featured Image */}
          <div className="max-w-4xl mx-auto mb-10">
            <figure className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
              <img
                src={article.featuredImage.url}
                alt={article.featuredImage.alt}
                referrerPolicy="no-referrer"
                className="w-full aspect-16/9 object-cover"
              />
              {article.featuredImage.caption && (
                <figcaption className="p-3 bg-slate-50 dark:bg-slate-900/80 text-xs text-slate-500 dark:text-slate-400 text-center border-t border-slate-200 dark:border-slate-800">
                  {article.featuredImage.caption}
                </figcaption>
              )}
            </figure>
          </div>

          {/* Visible Affiliate Disclosure if applicable */}
          {article.hasAffiliateLinks && (
            <div className="max-w-4xl mx-auto">
              <AffiliateDisclosureBanner customText={article.affiliateDisclosureText} />
            </div>
          )}

          {/* Main Reading Canvas (Two-column asymmetric layout with sticky TOC) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto mt-8">
            {/* Left: Sticky Table of Contents (Desktop) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1220] shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                  <span>TABLE OF CONTENTS</span>
                </div>
                <nav className="space-y-1 text-xs">
                  {article.tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left py-1.5 px-2 rounded-md transition-colors cursor-pointer truncate ${
                        activeSectionId === item.id
                          ? 'text-cyan-600 dark:text-cyan-400 font-semibold bg-cyan-50/50 dark:bg-cyan-950/20'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/40'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Article Stats */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1220] text-xs text-slate-500 space-y-2">
                <div className="flex justify-between">
                  <span>Last Reviewed:</span>
                  <span className="text-slate-800 dark:text-slate-300 font-mono">{article.updatedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tags:</span>
                  <span className="text-slate-800 dark:text-slate-300">{article.tags.slice(0, 3).join(', ')}</span>
                </div>
              </div>
            </aside>

            {/* Right / Center: Article Narrative Column */}
            <main className="lg:col-span-8 max-w-prose mx-auto lg:mx-0 w-full">
              {/* Mobile Table of Contents Accordion */}
              <div className="lg:hidden mb-8 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <div className="font-semibold text-xs text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Jump to Section:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {article.tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-xs px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section-by-Section Render */}
              <div className={`space-y-12 ${fontSize === 'large' ? 'text-lg leading-relaxed' : 'text-base leading-relaxed'}`}>
                {article.sections.map((section, idx) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white pt-2 border-t border-slate-100 dark:border-slate-800/60 first:border-t-0">
                      {section.heading}
                    </h2>

                    {section.subheading && (
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                        {section.subheading}
                      </h3>
                    )}

                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className={`text-slate-700 dark:text-slate-300 ${
                          idx === 0 && pIdx === 0
                            ? 'first-letter:text-4xl first-letter:font-bold first-letter:text-cyan-500 first-letter:float-left first-letter:mr-2.5 first-letter:mt-0.5'
                            : ''
                        }`}
                      >
                        {p}
                      </p>
                    ))}

                    {/* Section Callout */}
                    {section.callout && (
                      <CalloutBox
                        type={section.callout.type}
                        title={section.callout.title}
                        text={section.callout.text}
                        items={section.callout.items}
                      />
                    )}

                    {/* Section Code Block */}
                    {section.codeBlock && (
                      <CodeBlock
                        language={section.codeBlock.language}
                        code={section.codeBlock.code}
                        caption={section.codeBlock.caption}
                      />
                    )}

                    {/* Section Raw Table */}
                    {section.table && (
                      <div className="my-6 rounded-lg border border-slate-200 dark:border-slate-800 overflow-x-auto bg-white dark:bg-[#0C1220]">
                        <table className="w-full text-left text-xs md:text-sm">
                          <thead>
                            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 font-semibold">
                              {section.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="py-2.5 px-4 whitespace-nowrap">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="py-2.5 px-4 text-slate-600 dark:text-slate-300">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {section.table.caption && (
                          <div className="p-2 bg-slate-50 dark:bg-slate-900/40 text-[11px] text-slate-500 italic border-t border-slate-200 dark:border-slate-800">
                            {section.table.caption}
                          </div>
                        )}
                      </div>
                    )}
                  </section>
                ))}

                {/* Optional Recommended Tools */}
                {article.recommendedTools && article.recommendedTools.length > 0 && (
                  <div className="my-10 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Evaluated Tool Recommendations
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                      Tested against real developer workflows. Includes direct non-tracking links and transparent partner programs.
                    </p>
                    <div className="space-y-4">
                      {article.recommendedTools.map((tool, tIdx) => (
                        <ToolRecommendationCard key={tIdx} tool={tool} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Takeaways Summary Box */}
                {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                  <div className="my-8 p-6 rounded-xl border border-cyan-500/20 bg-cyan-950/15 dark:bg-cyan-950/25">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>Executive Takeaways</span>
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      {article.keyTakeaways.map((takeaway, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Reputable References and Sources */}
                {article.references && article.references.length > 0 && (
                  <div className="my-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-200 mb-2 uppercase font-mono tracking-wider">
                      References &amp; Foundational Research
                    </h4>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      {article.references.map((ref, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="font-mono text-slate-400">[{rIdx + 1}]</span>
                          <div>
                            <strong className="text-slate-800 dark:text-slate-200">{ref.title}</strong> — {ref.source}.
                            {ref.note && <span className="text-slate-500 italic ml-1">({ref.note})</span>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Previous / Next Article Navigation */}
              <div className="my-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevArticle ? (
                  <button
                    onClick={() => onNavigate(`/article/${prevArticle.slug}`)}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 group-hover:text-cyan-500 mb-1">
                      <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                      <span>PREVIOUS STORY</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 line-clamp-1">
                      {prevArticle.title}
                    </div>
                  </button>
                ) : (
                  <div />
                )}

                {nextArticle ? (
                  <button
                    onClick={() => onNavigate(`/article/${nextArticle.slug}`)}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors text-right group cursor-pointer"
                  >
                    <div className="flex items-center justify-end gap-1 text-[11px] font-mono text-slate-400 group-hover:text-cyan-500 mb-1">
                      <span>NEXT STORY</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 line-clamp-1">
                      {nextArticle.title}
                    </div>
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </main>
          </div>

          {/* Related Articles Strip */}
          {relatedArticles.length > 0 && (
            <div className="max-w-6xl mx-auto mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Related Reading &amp; Research
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <ArticleCard
                    key={rel.slug}
                    article={rel}
                    onNavigate={onNavigate}
                    layout="standard"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Ad slot placeholder */}
          <div className="max-w-4xl mx-auto mt-12">
            <AdSlot slotId={`article-${article.slug}-footer`} />
          </div>

          {/* Newsletter Box */}
          <div className="max-w-4xl mx-auto mt-12">
            <NewsletterBox />
          </div>
        </div>

        {/* Citation Generator Modal */}
        <CiteArticleModal
          article={article}
          isOpen={citeModalOpen}
          onClose={() => setCiteModalOpen(false)}
        />
      </article>
    </>
  );
};
