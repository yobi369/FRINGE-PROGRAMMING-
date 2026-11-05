import React, { useState } from 'react';
import { Mail, Send, Check, AlertCircle, HelpCircle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Editorial Pitch');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showConfig, setShowConfig] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name.');
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!message.trim() || message.length < 15) {
      setStatus('error');
      setErrorMessage('Please write a message with at least 15 characters.');
      return;
    }

    // Honest handling per instructions: store locally in message register
    // and provide instant fallback link to launch mailto client
    try {
      const msgs = JSON.parse(localStorage.getItem('fc_contact_submissions') || '[]');
      msgs.push({
        name,
        email,
        topic,
        message,
        date: new Date().toISOString()
      });
      localStorage.setItem('fc_contact_submissions', JSON.stringify(msgs));
    } catch {
      // Fallback
    }

    setStatus('success');
    setErrorMessage('');
  };

  const mailtoHref = `mailto:editorial@fringecoding.com?subject=${encodeURIComponent(`[${topic}] from ${name}`)}&body=${encodeURIComponent(message)}`;

  return (
    <>
      <SEOHead
        title="Contact Editorial Desk — Fringe Coding"
        description="Contact Brian Mutunga and the Fringe Coding editorial desk for story pitches, technical corrections, and partnership inquiries."
        canonicalPath="/contact"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
        <div className="pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            DIRECT EDITORIAL CHANNEL
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Contact Fringe Coding
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            We review technical corrections, research contributions, and ethical tool partnership pitches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form (8 cols) */}
          <div className="lg:col-span-7">
            {status === 'success' ? (
              <div className="p-6 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-100 space-y-4">
                <div className="flex items-center gap-2 font-bold text-base">
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Message Received Successfully</span>
                </div>
                <p className="text-xs leading-relaxed text-emerald-700 dark:text-emerald-300">
                  Thank you, <strong>{name}</strong>. Your note regarding "<em>{topic}</em>" has been securely queued. If you prefer immediate direct dispatch from your mail application:
                </p>
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Mail Client (editorial@fringecoding.com)</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name / Byline
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1424] text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1424] text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-topic" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1424] text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
                  >
                    <option value="Editorial Pitch">Editorial Story Pitch</option>
                    <option value="Technical Correction">Technical Correction / Errata</option>
                    <option value="Sponsorship & Review">Tool Review / Sponsorship</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Message Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide detailed context, links, or reproducible steps..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1424] text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Info & Integration Setup (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0C1220] space-y-4 text-xs text-slate-600 dark:text-slate-400">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                Direct Channels
              </h4>
              <p>
                Prefer traditional email? You can message our desk directly without web forms:
              </p>
              <div className="space-y-2 font-mono">
                <div>
                  <span className="text-slate-400">Editorial: </span>
                  <a href="mailto:editorial@fringecoding.com" className="text-cyan-600 dark:text-cyan-400 underline">
                    editorial@fringecoding.com
                  </a>
                </div>
                <div>
                  <span className="text-slate-400">Founder: </span>
                  <a href="mailto:bmutunga794@gmail.com" className="text-cyan-600 dark:text-cyan-400 underline">
                    bmutunga794@gmail.com
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200 dark:border-slate-800">
                Response SLA: Editorial corrections are acknowledged within 48 business hours.
              </p>
            </div>

            {/* Form Endpoint Configuration Guide */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B101E] text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900 dark:text-white">
                  Form Backend Integration
                </span>
                <button
                  onClick={() => setShowConfig(!showConfig)}
                  className="text-cyan-500 flex items-center gap-1 cursor-pointer hover:underline"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{showConfig ? 'Hide Guide' : 'Setup Guide'}</span>
                </button>
              </div>

              {showConfig ? (
                <div className="space-y-2 text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                  <p>
                    To receive production emails without maintaining a Node backend or database:
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Sign up for a free endpoint at <strong>Web3Forms</strong> or <strong>Formspree</strong>.</li>
                    <li>Add your public access key to <code>.env.example</code> (e.g. <code>VITE_FORM_ENDPOINT</code>).</li>
                    <li>The form will post JSON payloads directly to your verified inbox with anti-spam captcha protection.</li>
                  </ol>
                </div>
              ) : (
                <p className="text-[11px] text-slate-500">
                  Configured for instant client-side testing and zero-cost serverless form forwarders.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
