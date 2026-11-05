import React from 'react';
import { SEOHead } from '../components/SEOHead';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy — Fringe Coding"
        description="Fringe Coding's transparent privacy policy: zero tracking pixels, minimal local storage, and strict reader data rights."
        canonicalPath="/privacy"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
            LEGAL COMPLIANCE
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            Last Updated: April 2, 2026 · Founder: Brian Mutunga
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Our Commitment to Reader Privacy
          </h2>
          <p>
            Fringe Coding ("we", "our", or "the Publication"), founded by Brian Mutunga, operates under a strict "Privacy by Design" philosophy. We believe that technology journalism should not subject its readers to invasive surveillance capitalism, third-party data broker harvesting, or behavioral cross-site trackers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. Information We Collect
          </h2>
          <p>
            We collect the absolute minimum information necessary to deliver content and receive voluntary correspondence:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs md:text-sm">
            <li>
              <strong>Voluntary Communications:</strong> When you contact our editorial desk via form or email, we receive your name, email address, and message contents. We use this exclusively to reply to your inquiry.
            </li>
            <li>
              <strong>Newsletter Subscriptions:</strong> If you explicitly opt in to the Fringe Dispatch, we store your email address with verified double-opt-in consent. We never sell, rent, or trade subscriber lists.
            </li>
            <li>
              <strong>Client-Side Local Storage:</strong> Your browser stores local preferences: your dark/light theme choice, your saved reading list bookmarks, and cookie consent preferences. These never leave your device.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Analytics and Advertising
          </h2>
          <p>
            Fringe Coding does not load intrusive third-party behavioral ad trackers or fingerprinting scripts. If anonymous server-level edge analytics (such as Cloudflare Web Analytics) are employed, they collect non-identifiable request counts without setting cross-site cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. External Links and Affiliate Programs
          </h2>
          <p>
            Articles may contain outbound links to external software platforms and documentation. When you click an external link, you are subject to that destination's privacy practices. Certain commercial links contain affiliate referral tags that identify Fringe Coding as the referral source. These do not transmit your personal identity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            5. Your Data Rights
          </h2>
          <p>
            Regardless of your geographic location, you have the right to request deletion or inspection of any correspondence or newsletter subscription associated with your email. Contact{' '}
            <a href="mailto:editorial@fringecoding.com" className="text-cyan-500 underline">
              editorial@fringecoding.com
            </a>.
          </p>
        </section>
      </div>
    </>
  );
};
