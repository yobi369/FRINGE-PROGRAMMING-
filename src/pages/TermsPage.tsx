import React from 'react';
import { SEOHead } from '../components/SEOHead';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of Use — Fringe Coding"
        description="Fringe Coding's terms of use: intellectual property, code licensing, technical disclaimers, and limitation of liability."
        canonicalPath="/terms"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
            LEGAL AGREEMENT
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Terms of Use
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            Effective Date: April 2, 2026 · Founder: Brian Mutunga
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or reading Fringe Coding (https://fringecoding.com), you agree to be bound by these Terms of Use. If you disagree with any portion of these terms, please discontinue use of the publication.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. Intellectual Property &amp; Editorial Content
          </h2>
          <p>
            All original editorial prose, article titles, diagrams, and brand assets ("FRINGE CODING") are the intellectual property of Brian Mutunga and Fringe Coding. Content may not be scraped for commercial resale or fed into automated summarization syndicates without explicit written permission.
          </p>
          <p>
            Fair use quotation with explicit backlink attribution to the original article permalink is warmly encouraged.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. Software Code Snippets &amp; Disclaimers
          </h2>
          <p>
            Code samples and scripts published on Fringe Coding are provided for educational and illustrative purposes. While we strive to verify all examples against modern runtime environments:
          </p>
          <p className="text-xs font-mono p-3 bg-slate-100 dark:bg-slate-900 rounded-md text-slate-800 dark:text-slate-300">
            ALL CODE AND TECHNICAL GUIDANCE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
          </p>
          <p>
            You are solely responsible for testing and auditing any software before deploying it into production environments or processing sensitive data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. Limitation of Liability
          </h2>
          <p>
            In no event shall Brian Mutunga, Fringe Coding, or its contributors be liable for any direct, indirect, incidental, or consequential damages resulting from your use of this site or reliance on any technical tutorials or platform compensation guides.
          </p>
        </section>
      </div>
    </>
  );
};
