import React from 'react';
import { SEOHead } from '../components/SEOHead';

export const CookiesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cookie Policy — Fringe Coding"
        description="Fringe Coding's minimal cookie and local storage policy: essential preferences, zero third-party cross-site trackers."
        canonicalPath="/cookies"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
            DATA POLICY
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Cookie Policy
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            Last Updated: April 2, 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. What Are Cookies and Local Storage?
          </h2>
          <p>
            Cookies and web storage (localStorage) are small data keys stored on your device by your browser to preserve state across page reloads and browser sessions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. How Fringe Coding Uses Storage
          </h2>
          <p>
            We strictly limit our browser storage usage to functional, user-requested conveniences:
          </p>

          <div className="my-4 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
                <tr>
                  <th className="p-3">Key Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Lifespan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="p-3 font-mono">fc_theme</td>
                  <td className="p-3">Essential</td>
                  <td className="p-3">Remembers your dark or light mode preference</td>
                  <td className="p-3">Persistent</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono">fc_bookmarks</td>
                  <td className="p-3">Functional</td>
                  <td className="p-3">Stores your offline saved reading list</td>
                  <td className="p-3">Persistent</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono">fc_cookie_consent</td>
                  <td className="p-3">Essential</td>
                  <td className="p-3">Records whether you accepted or declined banner</td>
                  <td className="p-3">Persistent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Third-Party Tracker Prohibition
          </h2>
          <p>
            We do not load third-party ad retargeting pixels (Facebook Pixel, Google Floodlight, TikTok Tag) or intrusive session recording software.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Managing Your Storage
          </h2>
          <p>
            You can clear your local storage at any time through your browser settings or Developer Tools. Doing so simply resets your theme and saved article list.
          </p>
        </section>
      </div>
    </>
  );
};
