import React, { useState, useMemo } from 'react';
import { Search, X, Tag, BookOpen, Clock } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { SEOHead } from '../components/SEOHead';

interface SearchPageProps {
  onNavigate: (path: string) => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Collect all distinct tags across articles
  const allTags = useMemo(() => {
    const set = new Set<string>();
    ARTICLES.forEach((a) => a.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q && !activeTag) return [];

    return ARTICLES.filter((article) => {
      const matchesTag = !activeTag || article.tags.includes(activeTag);
      if (!matchesTag) return false;
      if (!q) return true;

      const titleMatch = article.title.toLowerCase().includes(q);
      const excerptMatch = article.excerpt.toLowerCase().includes(q);
      const categoryMatch = article.categoryName.toLowerCase().includes(q);
      const tagMatch = article.tags.some((t) => t.toLowerCase().includes(q));
      const sectionMatch = article.sections.some(
        (s) =>
          s.heading.toLowerCase().includes(q) ||
          s.paragraphs.some((p) => p.toLowerCase().includes(q))
      );

      return titleMatch || excerptMatch || categoryMatch || tagMatch || sectionMatch;
    });
  }, [query, activeTag]);

  return (
    <>
      <SEOHead
        title="Search Articles &amp; Guides — Fringe Coding"
        description="Search through all technical investigations, AI alignment benchmarks, software reliability patterns, and developer guides."
        canonicalPath="/search"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
            GLOBAL KNOWLEDGE SEARCH
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Search Fringe Coding
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Real-time full-text search across titles, engineering sections, tags, and categories.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for 'RLHF', 'circuit breaker', 'SEO', 'Cursor'..."
            className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1424] text-slate-900 dark:text-slate-100 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Popular Tags Segmented Filter */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-2 font-mono">
            <Tag className="w-3.5 h-3.5" />
            <span>Filter by topic tag:</span>
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="text-cyan-500 underline ml-2 cursor-pointer"
              >
                Clear tag
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  activeTag === tag
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Display */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
          {!query && !activeTag ? (
            <div className="text-center py-12 text-slate-500 dark:text-slate-400 space-y-4">
              <BookOpen className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-600" />
              <p className="text-sm">
                Enter a search query above or choose a tag to explore matching articles.
              </p>
              <div className="text-xs text-slate-400">
                Tip: Search across coding assistants, data annotation guidelines, or web reliability.
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-16 text-slate-500 dark:text-slate-400">
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
                No matching articles found
              </p>
              <p className="text-xs mt-1">
                No articles matched "{query}"{activeTag ? ` with tag #${activeTag}` : ''}.
              </p>
              <button
                onClick={() => {
                  setQuery('');
                  setActiveTag(null);
                }}
                className="mt-4 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>
                  Found <strong>{results.length}</strong> matching {results.length === 1 ? 'story' : 'stories'}
                </span>
                <span>Sorted by relevance</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    onNavigate={onNavigate}
                    layout="standard"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
