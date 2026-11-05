import React from 'react';
import { Bookmark, Clock, ArrowUpRight } from 'lucide-react';
import { Article } from '../types/article';
import { useTheme } from '../context/ThemeContext';

interface ArticleCardProps {
  article: Article;
  onNavigate: (path: string) => void;
  layout?: 'standard' | 'compact' | 'featured-hero' | 'horizontal';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onNavigate,
  layout = 'standard'
}) => {
  const { isBookmarked, toggleBookmark } = useTheme();
  const bookmarked = isBookmarked(article.slug);

  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if user clicked the bookmark button
    if ((e.target as HTMLElement).closest('.fc-bookmark-btn')) return;
    onNavigate(`/article/${article.slug}`);
  };

  if (layout === 'horizontal') {
    return (
      <article
        onClick={handleCardClick}
        className="group cursor-pointer py-4 border-b border-slate-100 dark:border-slate-800/80 last:border-b-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-900/30 px-3 rounded-lg -mx-3"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span className="font-mono text-cyan-600 dark:text-cyan-400 font-semibold">{article.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span>{formattedDate}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{article.readingTimeMinutes} min read</span>
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 transition-colors line-clamp-1">
            {article.title}
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mt-1">
            {article.excerpt}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(article.slug);
            }}
            className="fc-bookmark-btn p-2 rounded-md text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer"
            aria-label={bookmarked ? `Remove ${article.title} from bookmarks` : `Save ${article.title} to bookmarks`}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-cyan-500 text-cyan-500' : ''}`} />
          </button>
          <span className="text-slate-400 group-hover:text-cyan-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={handleCardClick}
      className="group cursor-pointer rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B101E] overflow-hidden flex flex-col justify-between transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md"
    >
      <div>
        {/* Visual Header / Cover Image */}
        <div className="relative aspect-16/9 w-full bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800/80">
          <img
            src={article.featuredImage.url}
            alt={article.featuredImage.alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(article.slug);
            }}
            className="fc-bookmark-btn absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-slate-300 hover:text-white hover:bg-black/80 transition-colors cursor-pointer"
            aria-label={bookmarked ? `Remove ${article.title} from bookmarks` : `Save ${article.title} to bookmarks`}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-cyan-400 text-cyan-400' : ''}`} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 md:p-6">
          {/* Unboxed Metadata Line per Zero-Pill Rule */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
            <span className="font-mono text-cyan-600 dark:text-cyan-400 font-semibold">{article.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span>{formattedDate}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{article.readingTimeMinutes} min read</span>
          </div>

          <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="mt-2.5 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Author and Action Footer */}
      <div className="px-5 md:px-6 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {article.author.brand}
          </span>
        </div>

        <span className="inline-flex items-center gap-1 font-medium text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform">
          <span>Read story</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
