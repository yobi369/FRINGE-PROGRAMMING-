import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface AffiliateDisclosureBannerProps {
  customText?: string;
}

export const AffiliateDisclosureBanner: React.FC<AffiliateDisclosureBannerProps> = ({ customText }) => {
  return (
    <div
      role="note"
      aria-label="Affiliate link disclosure"
      className="my-5 p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5"
    >
      <ShieldAlert className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
      <div className="leading-relaxed">
        <strong className="text-slate-800 dark:text-slate-200 font-semibold mr-1">
          Editorial Disclosure:
        </strong>
        {customText || (
          <>
            This publication may contain affiliate links. If you purchase or register through these links, Fringe Coding may earn a small referral commission at no additional cost to you. We evaluate developer tools and platforms with independent editorial standards and never fabricate claims or accept paid positive ratings. Read our{' '}
            <a href="/affiliate-disclosure" className="text-cyan-600 dark:text-cyan-400 underline hover:text-cyan-500">
              Affiliate Disclosure
            </a>{' '}
            and{' '}
            <a href="/editorial-policy" className="text-cyan-600 dark:text-cyan-400 underline hover:text-cyan-500">
              Editorial Policy
            </a>.
          </>
        )}
      </div>
    </div>
  );
};
