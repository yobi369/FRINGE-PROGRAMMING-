import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  language: string;
  code: string;
  caption?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, caption }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-slate-700/60 dark:border-slate-800 bg-[#0A0F1D] text-slate-200">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400">
        <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-cyan-400">
          {language}
        </span>
        <button
          onClick={handleCopy}
          type="button"
          aria-label={copied ? 'Code copied' : 'Copy code to clipboard'}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy code</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-[13px] md:text-sm font-mono leading-relaxed">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
      {caption && (
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-900 text-[11px] text-slate-400 italic">
          {caption}
        </div>
      )}
    </div>
  );
};
