import React, { useState, useMemo } from 'react';
import { Search, LayoutGrid, ListFilter, ArrowUpDown, Filter } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { ArticleCard } from '../components/ArticleCard';
import { SEOHead } from '../components/SEOHead';

interface ArticlesArchivePageProps {
  onNavigate: (path: string) => void;
}

export const ArticlesArchivePage: React.FC<ArticlesArchivePageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'read-time'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.categoryId === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      }
      if (sortBy === 'oldest') {
        return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
      }
      if (sortBy === 'read-time') {
        return b.readingTimeMinutes - a.readingTimeMinutes;
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <>
      <SEOHead
        title="Complete Article Archive — Fringe Coding"
        description="Comprehensive repository of all published engineering guides, AI training evaluations, cybersecurity playbooks, and digital publishing architectures."
        canonicalPath="/articles"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-8">
        {/* Header Title */}
        <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
            EDITORIAL CATALOG
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            All Articles Archive
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Explore 10 in-depth technical investigations written by Tuchii Hunnid and edited by Brian Mutunga.
          </p>
        </div>

        {/* Filter Controls Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword, title, or tag..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1424] text-slate-900 dark:text-slate-100 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Sort & View Options */}
          <div className="flex items-center gap-3 shrink-0 text-xs">
            <div className="flex items-center gap-1.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1424] rounded-lg px-2.5 py-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="read-time">Longest Read</option>
              </select>
            </div>

            <div className="flex items-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1424] rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-slate-100 dark:bg-slate-800 text-cyan-500'
                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
                title="Grid view"
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-slate-100 dark:bg-slate-800 text-cyan-500'
                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
                title="List view"
                aria-label="List view"
              >
                <ListFilter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Category Segmented Tabs (Buttons per Rule A) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-cyan-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Categories ({ARTICLES.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = ARTICLES.filter((a) => a.categoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center justify-between">
          <span>
            Showing <strong className="text-slate-900 dark:text-white">{filteredArticles.length}</strong> matching articles
          </span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-cyan-500 hover:underline cursor-pointer"
            >
              Reset category filter
            </button>
          )}
        </div>

        {/* Articles List / Grid */}
        {filteredArticles.length === 0 ? (
          <div className="py-20 text-center rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
            <Filter className="w-8 h-8 mx-auto text-slate-400 mb-2" />
            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
              No matching articles found
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-lg text-xs font-medium cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                onNavigate={onNavigate}
                layout="standard"
              />
            ))}
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800/80 border-t border-b border-slate-200 dark:border-slate-800">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                onNavigate={onNavigate}
                layout="horizontal"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
