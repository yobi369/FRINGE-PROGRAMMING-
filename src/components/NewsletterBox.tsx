import React, { useState } from 'react';
import { Mail, Check, AlertCircle, Settings } from 'lucide-react';

export const NewsletterBox: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showIntegrationGuide, setShowIntegrationGuide] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!consent) {
      setStatus('error');
      setErrorMessage('Please confirm your consent to receive our editorial updates.');
      return;
    }

    // Honest handling per instructions: store locally in browser cache for demonstration
    // and advise how to hook up ConvertKit, Buttondown, or Substack.
    try {
      const existing = JSON.parse(localStorage.getItem('fc_local_subscribers') || '[]');
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem('fc_local_subscribers', JSON.stringify(existing));
      }
    } catch {
      // Fallback
    }

    setStatus('success');
    setErrorMessage('');
  };

  return (
    <div className="my-10 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B101E] relative overflow-hidden">
      {/* Subtle background ambient tint */}
      <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-widest font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
            THE FRINGE DISPATCH
          </span>
          <span className="text-slate-400 dark:text-slate-600">·</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Weekly Tech Briefing</span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Critical Engineering Analysis. Zero Marketing Fluff.
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Get practical guides on AI training, software reliability, cybersecurity, and digital publishing economics directly from Brian Mutunga and Tuchii Hunnid. Sent once a week. Unsubscribe anytime with one click.
        </p>

        {status === 'success' ? (
          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 text-sm">
            <div className="flex items-center gap-2 font-semibold mb-1">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Subscription Confirmed</span>
            </div>
            <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed">
              Thank you for subscribing! Your address (<code>{email}</code>) has been registered in the local test storage. Once an active email provider (e.g., Buttondown or ConvertKit) is wired in, you will receive our first weekly digest.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#13192B] text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer shrink-0"
              >
                Join the Dispatch
              </button>
            </div>

            <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
              <input
                id="newsletter-consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 rounded border-slate-300 dark:border-slate-700 text-cyan-600 focus:ring-cyan-500"
              />
              <label htmlFor="newsletter-consent" className="leading-snug select-none cursor-pointer">
                I agree to receive Fringe Coding's editorial newsletter. We respect your privacy and will never sell or share your email address. Read our{' '}
                <a href="/privacy" className="text-cyan-600 dark:text-cyan-400 underline">Privacy Policy</a>.
              </label>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>
        )}

        {/* Integration Instructions Drawer */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span>Protected by Privacy by Design</span>
          <button
            type="button"
            onClick={() => setShowIntegrationGuide(!showIntegrationGuide)}
            className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>{showIntegrationGuide ? 'Hide API Setup' : 'Provider Integration'}</span>
          </button>
        </div>

        {showIntegrationGuide && (
          <div className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
            <h5 className="font-semibold text-slate-900 dark:text-slate-200">
              Developer Guide: Connecting a Real Newsletter Service
            </h5>
            <p>
              To collect real live subscribers without recurring server costs, configure one of these services:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Buttondown (Easiest):</strong> Create a free account at buttondown.email and replace the form action with your embed URL.
              </li>
              <li>
                <strong>ConvertKit / Kit:</strong> Embed your public form action URL or call their API via an edge route.
              </li>
              <li>
                <strong>Substack / Brevo:</strong> Point this submit handler to your transactional webhook endpoint.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
