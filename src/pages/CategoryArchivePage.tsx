import React from 'react';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { ARTICLES } from '../data/articles';
import { ArticleCard } from '../components/ArticleCard';
import { SEOHead } from '../components/SEOHead';

interface CategoryArchivePageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const CategoryArchivePage: React.FC<CategoryArchivePageProps> = ({ slug, onNavigate }) => {
  const category = CATEGORIES.find((c) => c.slug === slug);
  const articles = ARTICLES.filter((a) => a.categoryId === category?.id);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Category Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          The requested technology topic does not match any current editorial department.
        </p>
        <button
          onClick={() => onNavigate('/articles')}
          className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-xs font-semibold cursor-pointer"
        >
          View All Departments
        </button>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${category.name} — Fringe Coding Archives`}
        description={`${category.description} Read in-depth engineering analysis and practical guides.`}
        canonicalPath={`/category/${category.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10">
        {/* Department Banner */}
        <div className="pb-8 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => onNavigate('/articles')}
            className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>EDITORIAL DEPARTMENT</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {category.name}
          </h1>

          <p className="text-base text-slate-700 dark:text-slate-300 max-w-3xl mt-3 leading-relaxed">
            {category.description}
          </p>

          <div className="mt-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0C1220] max-w-3xl text-xs text-slate-600 dark:text-slate-400">
            <strong className="text-slate-900 dark:text-slate-200 font-semibold mr-1">Editorial Scope:</strong>
            {category.editorialStatement}
          </div>
        </div>

        {/* Article Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>
              Articles in Department ({articles.length})
            </span>
            <span>Reviewed &amp; Fact-Checked</span>
          </div>

          {articles.length === 0 ? (
            <div className="py-16 text-center rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-500 text-xs">
              Upcoming articles in this department are currently undergoing editorial peer review.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  onNavigate={onNavigate}
                  layout="standard"
                />
              ))}
            </div>
          )}
        </div>

        {/* Other Categories Strip */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-4">
            Other Editorial Departments
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => (
              <button
                key={c.id}
                onClick={() => onNavigate(`/category/${c.slug}`)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] hover:border-cyan-500 dark:hover:border-cyan-500 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
