import React from 'react';
import { Terminal, Shield, Award, Sparkles, Mail, ArrowRight, Code } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { TypographicLogo } from '../components/TypographicLogo';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <>
      <SEOHead
        title="About the Founder: Brian Mutunga (By Tuchii Hunnid) — Fringe Coding"
        description="Learn about Fringe Coding, founded by Brian Mutunga and authored under the byline Tuchii Hunnid. Independent technology journalism, AI evaluation, and developer research."
        canonicalPath="/about"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
        {/* Header */}
        <div className="pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            EDITORIAL LEADERSHIP &amp; MISSION
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Fringe Coding
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Independent technology analysis for developers, engineers, AI trainers, and digital builders navigating what's next.
          </p>
        </div>

        {/* Narrative & Founder Profile */}
        <div className="space-y-8 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B101E] flex flex-col md:flex-row gap-6 items-start">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-extrabold text-2xl font-mono shrink-0 shadow-md">
              BM
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Brian Mutunga
                </h2>
                <span className="text-xs text-slate-500">·</span>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                  Founder &amp; Principal Architect
                </span>
                <span className="text-xs text-slate-500">·</span>
                <span className="text-xs font-mono text-violet-500 font-semibold">
                  By Tuchii Hunnid
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Brian Mutunga is a software engineer, technical researcher, and digital publishing architect. Writing under the author byline <strong>Tuchii Hunnid</strong>, he established Fringe Coding to counteract the proliferation of speculative marketing, automated content farms, and unvetted tutorials in modern technology media.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why "Fringe Coding"?
            </h3>
            <p>
              The most consequential technological breakthroughs rarely originate in safe consensus. They emerge at the boundaries—the <em>fringe</em>—where independent engineers experiment with unproven architectures, where researchers stress-test foundational models with human feedback, and where solo founders build resilient global applications with lean tools.
            </p>
            <p>
              Our motto, <strong>"Beyond the Ordinary. Into What's Possible."</strong>, is not a marketing cliché. It reflects our commitment to testing what tools actually deliver, rather than reciting vendor pitch decks.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0D1322]">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-3">
                <Code className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Proof of Execution
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We do not publish tutorials based on hypothetical guesswork. Code snippets and architectural recommendations are validated, tested, and accompanied by edge-case caveats.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0D1322]">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Editorial Independence
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Commercial compensation never determines our reviews or rankings. If a software product has critical flaws or predatory pricing cliffs, we state them unambiguously.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0D1322]">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center mb-3">
                <Terminal className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Human-in-the-Loop Transparency
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We believe in rigorous investigation over AI-generated filler. When we analyze model alignment platforms, we study real compensation contracts and task queues.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0D1322]">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                Zero Financial Hype
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We never promise guaranteed employment or fabricated freelance income. Digital work and developer tools are evaluated with sober realism.
              </p>
            </div>
          </div>

          {/* Contact and Pitch CTA */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Have a pitch or technical correction?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Brian Mutunga and the editorial desk welcome constructive feedback from working engineers.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold cursor-pointer shrink-0 flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact the Desk</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
