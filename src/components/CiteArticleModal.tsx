import React, { useState } from 'react';
import { Quote, X, Check, Copy, BookOpen } from 'lucide-react';
import { Article } from '../types/article';

interface CiteArticleModalProps {
  article: Article;
  isOpen: boolean;
  onClose: () => void;
}

export const CiteArticleModal: React.FC<CiteArticleModalProps> = ({ article, isOpen, onClose }) => {
  const [activeFormat, setActiveFormat] = useState<'bibtex' | 'ieee' | 'apa'>('bibtex');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const year = article.publishedDate.split('-')[0];
  const url = `${window.location.origin}/article/${article.slug}`;
  const citeKey = `mutunga${year}${article.slug.replace(/[^a-zA-Z0-9]/g, '').slice(0, 8)}`;

  const citations = {
    bibtex: `@article{${citeKey},
  author    = {Mutunga, Brian (By Tuchii Hunnid)},
  title     = {${article.title}},
  journal   = {Fringe Coding},
  year      = {${year}},
  url       = {${url}},
  note      = {Accessed: ${new Date().toISOString().split('T')[0]}}
}`,
    ieee: `B. Mutunga, "${article.title}," Fringe Coding, ${new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}. [Online]. Available: ${url}.`,
    apa: `Mutunga, B. (${year}, ${new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}). ${article.title}. Fringe Coding. ${url}`
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(citations[activeFormat]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1424] shadow-2xl p-6 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cite-modal-title"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-cyan-500" />
            <h3 id="cite-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
              Cite This Article
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            aria-label="Close citation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            For academic papers, engineering RFCs, bibliographies, and technical references:
          </p>

          {/* Format Tabs */}
          <div className="flex items-center gap-2 text-xs">
            {(['bibtex', 'ieee', 'apa'] as const).map((fmt) => (
              <button
                key={fmt}
                onClick={() => setActiveFormat(fmt)}
                className={`px-3 py-1.5 rounded-lg font-mono font-medium uppercase transition-colors cursor-pointer ${
                  activeFormat === fmt
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>

          {/* Citation Output Box */}
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed relative">
            <pre>
              <code>{citations[activeFormat]}</code>
            </pre>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] text-slate-500 font-mono">
              Citation Key: {citeKey}
            </span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Citation</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
