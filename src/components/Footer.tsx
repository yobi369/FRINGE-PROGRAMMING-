import React from 'react';
import { Rss, FileText, Shield, ArrowUpRight } from 'lucide-react';
import { TypographicLogo } from './TypographicLogo';
import { CATEGORIES } from '../data/categories';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#070B14] text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand & Founder Statement */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('/')}
              className="text-left cursor-pointer focus-visible:outline-none"
              aria-label="Fringe Coding homepage"
            >
              <TypographicLogo size="md" withTagline={true} />
            </button>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-sm">
              An independent technology publication dissecting AI training, software engineering reliability, cybersecurity defenses, and sustainable digital work.
            </p>

            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <div>
                <strong>Founder:</strong> Brian Mutunga
              </div>
              <div>
                <strong>Author Brand:</strong> By Tuchii Hunnid
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                title="Subscribe via RSS"
              >
                <Rss className="w-3.5 h-3.5 text-amber-500" />
                <span>RSS Feed</span>
              </a>

              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                title="View XML Sitemap"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-500" />
                <span>Sitemap</span>
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Categories
            </h4>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate(`/category/${cat.slug}`)}
                    className="hover:text-cyan-500 transition-colors text-left cursor-pointer"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Editorial & Company */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Editorial
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-cyan-500 transition-colors cursor-pointer"
                >
                  About the Founder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/editorial-policy')}
                  className="hover:text-cyan-500 transition-colors cursor-pointer"
                >
                  Editorial Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/affiliate-disclosure')}
                  className="hover:text-cyan-500 transition-colors cursor-pointer"
                >
                  Affiliate Disclosure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/publishing-guide')}
                  className="hover:text-cyan-500 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Publishing Guide</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-cyan-500 transition-colors cursor-pointer"
                >
                  Contact &amp; Pitches
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Standards */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Legal &amp; Privacy
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('/privacy')}
                  className="hover:text-cyan-500 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cookies')}
                  className="hover:text-cyan-500 transition-colors cursor-pointer"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms')}
                  className="hover:text-cyan-500 transition-colors cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
              <li className="pt-2 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>Zero Spyware Policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} Fringe Coding. All rights reserved. Created and edited by Brian Mutunga (By Tuchii Hunnid).
          </div>
          <div className="flex items-center gap-4">
            <span>Static-First Architecture</span>
            <span>·</span>
            <span>Zero Paid CMS Lock-in</span>
            <span>·</span>
            <button
              onClick={() => onNavigate('/search')}
              className="hover:text-cyan-500 transition-colors cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
