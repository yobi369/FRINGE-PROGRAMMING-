import React from 'react';
import { Search, Home, BookOpen, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { SEOHead } from '../components/SEOHead';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const popularArticles = ARTICLES.slice(0, 3);

  return (
    <>
      <SEOHead
        title="Page Not Found (404) — Fringe Coding"
        description="The requested page could not be located. Explore our latest technical articles and research archives."
        canonicalPath="/404"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center space-y-8">
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
            ERROR 404 · RESOURCE ABSENT
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Lost on the Fringe
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            The URL you requested does not exist on this server. It may have been refactored or moved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onNavigate('/search')}
            className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search Articles</span>
          </button>
        </div>

        {/* Suggested Articles */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-4 text-center">
            RECOMMENDED READING
          </div>
          <div className="space-y-3">
            {popularArticles.map((article) => (
              <div
                key={article.slug}
                onClick={() => onNavigate(`/article/${article.slug}`)}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1424] hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                    {article.categoryName} · {article.readingTimeMinutes} min read
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {article.title}
                  </h3>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
