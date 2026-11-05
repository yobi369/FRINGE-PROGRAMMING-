import React, { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('fc_cookie_consent');
    if (!consent) {
      // Delay slightly for polite arrival
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (preference: 'accepted' | 'declined') => {
    localStorage.setItem('fc_cookie_consent', preference);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and cookies"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0E1424]/95 backdrop-blur-md shadow-xl text-xs text-slate-700 dark:text-slate-300 transition-all"
    >
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
            Privacy &amp; Cookie Notice
          </h4>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400 mb-3">
            Fringe Coding uses local storage solely to remember your reading theme and saved bookmarks. We do not run invasive tracking pixels or sell personal browsing data. Read our{' '}
            <a href="/cookies" className="text-cyan-600 dark:text-cyan-400 underline">
              Cookie Policy
            </a>.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleChoice('accepted')}
              className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-medium transition-colors cursor-pointer"
            >
              Accept Preferences
            </button>
            <button
              onClick={() => handleChoice('declined')}
              className="px-3 py-1.5 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded font-medium transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={() => handleChoice('declined')}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
