import React from 'react';
import { FileCheck, Shield, AlertCircle, RefreshCw } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const EditorialPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Editorial Policy &amp; Standards — Fringe Coding"
        description="Fringe Coding's editorial standards: fact-checking protocols, AI transparency, zero fabricated claims, and formal correction guidelines."
        canonicalPath="/editorial-policy"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
            JOURNALISTIC STANDARDS
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Editorial Policy
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            Published by Brian Mutunga · Author Brand: By Tuchii Hunnid
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Core Editorial Charter
          </h2>
          <p>
            Fringe Coding exists to deliver rigorous, empirically grounded technology analysis. In an era saturated with automated search spam and AI-generated summary farms, we hold our writing to four foundational standards:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-xs md:text-sm">
            <li><strong>Reproducibility:</strong> Code snippets, CLI scripts, and system architectures must compile and run as written.</li>
            <li><strong>Zero Fabrication:</strong> We never invent user testimonials, client ratings, benchmark statistics, or author experiences.</li>
            <li><strong>Caveats and Limitations:</strong> Engineering solutions always entail trade-offs; our articles explicitly articulate failure modes.</li>
            <li><strong>Clear Attribution:</strong> All citations, academic research papers, and technical specifications are cited with direct sources.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. Policy on Artificial Intelligence and Automation
          </h2>
          <p>
            While Fringe Coding actively investigates artificial intelligence systems, large language model alignment, and automated tooling, <strong>our editorial narratives, technical analyses, and opinions are conceived and authored by human writers</strong> under the byline Tuchii Hunnid and editorial direction of Brian Mutunga.
          </p>
          <p>
            When generative AI models are utilized as technical subjects (e.g., benchmarking prompt responses or evaluating synthetic code generation), their outputs are clearly demarcated inside code blocks or test transcripts. We do not deploy autonomous bots to generate unverified news articles.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. AI Training and Platform Compensation Disclosures
          </h2>
          <p>
            Articles covering AI training gigs (e.g., DataAnnotation.tech, Outlier, Alignerr) treat compensation rates, task queues, and platform terms as volatile contractor conditions that are subject to immediate unilateral revision by third-party platforms.
          </p>
          <p>
            We strictly prohibit claiming guaranteed income or employment. All figures represent observational market estimates at the time of writing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Corrections and Retractions Policy
          </h2>
          <p>
            We take factual errors seriously. When a reader or engineer identifies a technical inaccuracies, syntax bug, or outdated software version:
          </p>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0D1322] space-y-2 text-xs">
            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
              <RefreshCw className="w-4 h-4 text-cyan-500" />
              <span>Correction Protocol</span>
            </div>
            <p>
              1. The editorial team verifies the claim against official documentation or reproduction tests.
            </p>
            <p>
              2. The article text is updated with corrected code or facts.
            </p>
            <p>
              3. The <code>updatedDate</code> metadata field is incremented, and an errata note is appended if the correction impacts fundamental conclusions.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            5. Submitting Corrections
          </h2>
          <p>
            To submit an errata report or dispute a technical claim, please email{' '}
            <a href="mailto:editorial@fringecoding.com" className="text-cyan-500 underline">
              editorial@fringecoding.com
            </a>{' '}
            with the subject line <em>[Correction Request]</em>.
          </p>
        </section>
      </div>
    </>
  );
};
