import React, { useState } from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';

interface AdSlotProps {
  slotId?: string;
  format?: 'banner' | 'in-feed' | 'sidebar';
}

export const AdSlot: React.FC<AdSlotProps> = ({ slotId = 'sponsor-slot-default', format = 'in-feed' }) => {
  // Advertising is disabled by default per editorial policy
  const [showConfigGuide, setShowConfigGuide] = useState(false);

  // In production, if an ad client ID is configured, real script would mount here.
  // By default, it's dormant or renders a tasteful, non-intrusive sponsor reservation card.
  return (
    <div className="my-8 p-4 rounded-lg border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 text-slate-500 text-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono uppercase tracking-wider text-[10px] text-slate-400">
            Sponsorship &amp; Ad Placement
          </span>
          <span className="text-slate-400">· Dormant by Default</span>
        </div>

        <button
          onClick={() => setShowConfigGuide(!showConfigGuide)}
          className="flex items-center gap-1 text-[11px] text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
        >
          <HelpCircle className="w-3 h-3" />
          <span>{showConfigGuide ? 'Hide Instructions' : 'Provider Setup'}</span>
        </button>
      </div>

      {showConfigGuide ? (
        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 space-y-2">
          <p>
            <strong>How to enable ad networks on Fringe Coding:</strong>
          </p>
          <ol className="list-decimal list-inside space-y-1 text-[11px]">
            <li>
              <strong>EthicalAds / Carbon Ads (Recommended):</strong> Ideal for technical developer publications. Sign up at ethicalads.io or carbonads.net to receive your publisher token.
            </li>
            <li>
              <strong>Google AdSense:</strong> Add your verified <code>client_id</code> into <code>index.html</code> after Google approval.
            </li>
            <li>
              Insert your network snippet inside <code>src/components/AdSlot.tsx</code> for slot <code>{slotId}</code>.
            </li>
          </ol>
        </div>
      ) : (
        <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
          Fringe Coding maintains an ad-free reading experience by default. Direct developer tools and ethical sponsors can contact <a href="/contact" className="text-cyan-500 underline">editorial@fringecoding.com</a>.
        </p>
      )}
    </div>
  );
};
