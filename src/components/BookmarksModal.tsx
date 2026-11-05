import React from 'react';
import { Bookmark, X, ArrowRight, Trash2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ARTICLES } from '../data/articles';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const { bookmarks, toggleBookmark } = useTheme();

  if (!isOpen) return null;

  const savedArticles = ARTICLES.filter((a) => bookmarks.includes(a.slug));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1424] shadow-2xl p-6 overflow-hidden flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bookmarks-modal-title"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-cyan-500 fill-cyan-500" />
            <h3 id="bookmarks-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
              Saved Articles ({savedArticles.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            aria-label="Close saved articles"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {savedArticles.length === 0 ? (
            <div className="py-12 text-center text-slate-500 dark:text-slate-400">
              <Bookmark className="w-8 h-8 mx-auto mb-3 text-slate-300 dark:text-slate-600" />
              <p className="text-sm font-medium">No saved articles yet.</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                Click the bookmark icon on any article to save it for offline or later reading.
              </p>
            </div>
          ) : (
            savedArticles.map((article) => (
              <div
                key={article.slug}
                className="p-3.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex items-start justify-between gap-3 group"
              >
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => {
                    onNavigate(`/article/${article.slug}`);
                    onClose();
                  }}
                >
                  <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                    {article.categoryName} · {article.readingTimeMinutes} min read
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 transition-colors mt-0.5 line-clamp-2">
                    {article.title}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 mt-1">
                  <button
                    onClick={() => toggleBookmark(article.slug)}
                    className="p-1.5 rounded text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 cursor-pointer"
                    title="Remove from saved"
                    aria-label={`Remove ${article.title} from bookmarks`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onNavigate(`/article/${article.slug}`);
                      onClose();
                    }}
                    className="p-1.5 rounded text-slate-400 hover:text-cyan-500 cursor-pointer"
                    aria-label={`Read ${article.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {savedArticles.length > 0 && (
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Stored locally in browser cache</span>
            <button
              onClick={() => {
                onNavigate('/articles');
                onClose();
              }}
              className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline cursor-pointer"
            >
              Browse All Articles →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
