import React from 'react';
import { Check, X, ExternalLink, ShieldCheck } from 'lucide-react';
import { RecommendedTool } from '../types/article';

interface ToolRecommendationCardProps {
  tool: RecommendedTool;
}

export const ToolRecommendationCard: React.FC<ToolRecommendationCardProps> = ({ tool }) => {
  return (
    <div className="my-6 p-5 md:p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] shadow-sm transition-all">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs uppercase tracking-wider font-mono text-cyan-600 dark:text-cyan-400">
              {tool.category}
            </span>
            {tool.badge && (
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                · {tool.badge}
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {tool.name}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            {tool.tagline}
          </p>
        </div>

        <div className="text-left sm:text-right shrink-0">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Pricing
          </div>
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-200">
            {tool.pricing}
          </div>
        </div>
      </div>

      <div className="py-4">
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          <strong className="text-slate-900 dark:text-slate-100 font-semibold">Editorial Verdict:</strong> {tool.verdict}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <div className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <span>Notable Strengths</span>
            </div>
            <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
              {tool.pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
              <span>Trade-offs &amp; Caveats</span>
            </div>
            <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
              {tool.cons.map((con, index) => (
                <li key={index} className="flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
          <span>Independently evaluated by Fringe Coding</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={tool.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Direct Site
          </a>

          {tool.affiliateUrl ? (
            <a
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-medium transition-colors cursor-pointer"
            >
              <span>Visit Partner</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <a
              href={tool.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded font-medium transition-colors cursor-pointer"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
