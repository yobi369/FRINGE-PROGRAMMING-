import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const AffiliateDisclosurePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Affiliate Disclosure &amp; Commercial Ethics — Fringe Coding"
        description="Fringe Coding's complete affiliate disclosure under FTC 16 CFR Part 255. How we evaluate tools, maintain editorial independence, and disclose partnerships."
        canonicalPath="/affiliate-disclosure"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
            COMMERCIAL ETHICS
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Affiliate Disclosure
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            Compliance Notice under FTC 16 CFR Part 255 · Founder: Brian Mutunga
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Transparent Operating Principle
          </h2>
          <p>
            Fringe Coding is an independent digital technology publication. To sustain in-depth research, hosting infrastructure, and technical analysis without charging readers a mandatory paywall or subscription fee, we participate in selective affiliate marketing programs.
          </p>
          <p>
            This disclosure is provided in accordance with the United States Federal Trade Commission’s Guides Concerning the Use of Endorsements and Testimonials in Advertising (16 CFR Part 255).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. How Affiliate Links Work
          </h2>
          <p>
            When you click certain links on our website pointing to developer tools, cloud hosting platforms, IDE extensions, or educational resources, and subsequently make a purchase or subscribe, Fringe Coding may receive a referral commission from the merchant.
          </p>
          <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/15 dark:bg-cyan-950/20 text-xs space-y-1.5">
            <div className="font-semibold text-cyan-800 dark:text-cyan-300">
              Crucial Facts for Readers:
            </div>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300">
              <li>• You never pay extra. Referral commissions are paid entirely by the vendor out of their standard marketing budget.</li>
              <li>• All commercial links are properly marked with <code>rel="nofollow sponsored"</code> attributes.</li>
              <li>• We provide direct, non-tracking link alternatives alongside every recommendation whenever feasible.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Our Non-Negotiable Editorial Firewalls
          </h2>
          <div className="space-y-2.5">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>No Paid Positive Reviews:</strong> We never accept monetary compensation in exchange for guaranteed favorable coverage or inflated review scores.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Mandatory Drawbacks:</strong> Every product evaluation must document drawbacks, trade-offs, and situations where readers should avoid the tool.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Relevance First:</strong> We only partner with reputable software and developer tools directly relevant to our engineering and digital work curriculum.</span>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Updating and Removing Outdated Programs
          </h2>
          <p>
            If a recommended vendor degrades service quality, alters pricing unpredictably, or introduces anti-user policies, we promptly revise our verdict or remove the affiliate partnership entirely.
          </p>
          <p>
            To report an outdated or problematic vendor recommendation, please alert our desk at{' '}
            <a href="mailto:editorial@fringecoding.com" className="text-cyan-500 underline">
              editorial@fringecoding.com
            </a>.
          </p>
        </section>
      </div>
    </>
  );
};
