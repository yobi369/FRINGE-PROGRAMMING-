import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookmarksModal } from './components/BookmarksModal';
import { CookieBanner } from './components/CookieBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { ArticlesArchivePage } from './pages/ArticlesArchivePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { CategoryArchivePage } from './pages/CategoryArchivePage';
import { SearchPage } from './pages/SearchPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PublishingGuidePage } from './pages/PublishingGuidePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CookiesPage } from './pages/CookiesPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { EditorialPolicyPage } from './pages/EditorialPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [bookmarksModalOpen, setBookmarksModalOpen] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Route Dispatcher
  const renderCurrentRoute = () => {
    // Normalizing trailing slashes
    const normalized = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

    if (normalized === '/' || normalized === '') {
      return <HomePage onNavigate={navigate} />;
    }

    if (normalized === '/articles') {
      return <ArticlesArchivePage onNavigate={navigate} />;
    }

    if (normalized.startsWith('/article/')) {
      const slug = normalized.replace('/article/', '');
      return <ArticleDetailPage slug={slug} onNavigate={navigate} />;
    }

    if (normalized.startsWith('/category/')) {
      const slug = normalized.replace('/category/', '');
      return <CategoryArchivePage slug={slug} onNavigate={navigate} />;
    }

    if (normalized === '/search') {
      return <SearchPage onNavigate={navigate} />;
    }

    if (normalized === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    if (normalized === '/contact') {
      return <ContactPage />;
    }

    if (normalized === '/publishing-guide') {
      return <PublishingGuidePage />;
    }

    if (normalized === '/privacy') {
      return <PrivacyPage />;
    }

    if (normalized === '/cookies') {
      return <CookiesPage />;
    }

    if (normalized === '/affiliate-disclosure') {
      return <AffiliateDisclosurePage />;
    }

    if (normalized === '/editorial-policy') {
      return <EditorialPolicyPage />;
    }

    if (normalized === '/terms') {
      return <TermsPage />;
    }

    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-400 font-sans">
        {/* Navigation Bar conforming to Top Bar Contract */}
        <Navbar
          currentPath={currentPath}
          onNavigate={navigate}
          onOpenBookmarks={() => setBookmarksModalOpen(true)}
        />

        {/* Dynamic Page Canvas */}
        <main className="flex-1">
          {renderCurrentRoute()}
        </main>

        {/* Site Footer */}
        <Footer onNavigate={navigate} />

        {/* Reading List Bookmarks Drawer */}
        <BookmarksModal
          isOpen={bookmarksModalOpen}
          onClose={() => setBookmarksModalOpen(false)}
          onNavigate={navigate}
        />

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </div>
    </ThemeProvider>
  );
}
