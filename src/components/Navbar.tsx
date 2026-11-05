import React, { useState } from 'react';
import { Search, Sun, Moon, Bookmark, Menu, X, ChevronDown } from 'lucide-react';
import { TypographicLogo } from './TypographicLogo';
import { useTheme } from '../context/ThemeContext';
import { CATEGORIES } from '../data/categories';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBookmarks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenBookmarks }) => {
  const { theme, toggleTheme, bookmarks } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Archive', path: '/articles' },
    { label: 'About', path: '/about' },
    { label: 'Publishing Guide', path: '/publishing-guide' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[#090D16]/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones, gap-8, single line */}
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center whitespace-nowrap shrink-0 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
            aria-label="Fringe Coding homepage"
          >
            <TypographicLogo size="sm" />
          </button>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => onNavigate('/articles')}
              className={`whitespace-nowrap shrink-0 hover:text-cyan-500 transition-colors cursor-pointer ${
                currentPath === '/articles' ? 'text-cyan-500 font-semibold' : ''
              }`}
            >
              Archive
            </button>

            {/* Categories dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                className="flex items-center gap-1 whitespace-nowrap shrink-0 hover:text-cyan-500 transition-colors cursor-pointer"
                aria-expanded={categoriesDropdownOpen}
              >
                <span>Categories</span>
                <ChevronDown className="w-3.5 h-3.5 mt-0.5 opacity-70" />
              </button>

              {categoriesDropdownOpen && (
                <div
                  onMouseLeave={() => setCategoriesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-64 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1424] shadow-xl p-2 z-50 text-xs"
                >
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onNavigate(`/category/${cat.slug}`);
                        setCategoriesDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`whitespace-nowrap shrink-0 hover:text-cyan-500 transition-colors cursor-pointer ${
                  currentPath === link.path ? 'text-cyan-500 font-semibold' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Functional utilities (Search, Bookmark, Theme, Mobile toggle) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onNavigate('/search')}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors cursor-pointer"
              title="Search articles"
              aria-label="Search articles"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBookmarks}
              className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors cursor-pointer"
              title="Saved reading list"
              aria-label="View saved reading list"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarks.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-500" />
              )}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors cursor-pointer"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090D16] px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            <button
              onClick={() => {
                onNavigate('/articles');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              All Articles Archive
            </button>

            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-2">
              Categories
            </div>
            <div className="grid grid-cols-1 gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onNavigate(`/category/${cat.slug}`);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-cyan-500"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
