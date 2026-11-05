import React from 'react';
import { AlertTriangle, CheckCircle2, Info, Lightbulb } from 'lucide-react';

interface CalloutBoxProps {
  type: 'note' | 'caveat' | 'checklist' | 'pro-tip';
  title: string;
  text: string;
  items?: string[];
}

export const CalloutBox: React.FC<CalloutBoxProps> = ({ type, title, text, items }) => {
  const configs = {
    note: {
      icon: Info,
      iconColor: 'text-cyan-500 dark:text-cyan-400',
      border: 'border-cyan-500/30 dark:border-cyan-500/20',
      bg: 'bg-cyan-950/20 dark:bg-cyan-950/30 text-cyan-900 dark:text-cyan-100',
      heading: 'text-cyan-800 dark:text-cyan-200'
    },
    caveat: {
      icon: AlertTriangle,
      iconColor: 'text-amber-500 dark:text-amber-400',
      border: 'border-amber-500/30 dark:border-amber-500/20',
      bg: 'bg-amber-950/20 dark:bg-amber-950/30 text-amber-900 dark:text-amber-100',
      heading: 'text-amber-800 dark:text-amber-200'
    },
    checklist: {
      icon: CheckCircle2,
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      border: 'border-emerald-500/30 dark:border-emerald-500/20',
      bg: 'bg-emerald-950/20 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100',
      heading: 'text-emerald-800 dark:text-emerald-200'
    },
    'pro-tip': {
      icon: Lightbulb,
      iconColor: 'text-violet-500 dark:text-violet-400',
      border: 'border-violet-500/30 dark:border-violet-500/20',
      bg: 'bg-violet-950/20 dark:bg-violet-950/30 text-violet-900 dark:text-violet-100',
      heading: 'text-violet-800 dark:text-violet-200'
    }
  }[type];

  const IconComponent = configs.icon;

  return (
    <aside
      className={`my-6 p-5 rounded-lg border ${configs.border} ${configs.bg} transition-colors`}
      aria-label={title}
    >
      <div className="flex items-start gap-3">
        <IconComponent className={`w-5 h-5 shrink-0 mt-0.5 ${configs.iconColor}`} />
        <div className="flex-1 min-w-0">
          <h4 className={`text-sm font-semibold tracking-tight ${configs.heading} mb-1.5`}>
            {title}
          </h4>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {text}
          </p>
          {items && items.length > 0 && (
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 font-mono text-xs mt-1">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};
