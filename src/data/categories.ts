import { Category } from '../types/article';

export const CATEGORIES: Category[] = [
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    description: 'Autonomous systems, generative model architectures, evaluation protocols, and practical deployment workflows.',
    editorialStatement: 'We examine AI systems through engineering rigor, real-world utility, and computational cost rather than hyperbolic marketing.',
    badgeAccent: 'text-violet-400 dark:text-violet-300'
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    slug: 'software-engineering',
    description: 'System design, reliability engineering, distributed architecture, testing frameworks, and clean code paradigms.',
    editorialStatement: 'Principled engineering practice focusing on maintainability, release evidence, failure handling, and resilient architectures.',
    badgeAccent: 'text-cyan-400 dark:text-cyan-300'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Threat modeling, application security hardening, authentication flows, secrets management, and defensive engineering.',
    editorialStatement: 'Actionable defense guides for independent developers, founders, and small teams building secure production applications.',
    badgeAccent: 'text-emerald-400 dark:text-emerald-300'
  },
  {
    id: 'developer-tools',
    name: 'Developer Tools',
    slug: 'developer-tools',
    description: 'Objective benchmarking of IDEs, AI coding assistants, compilers, CI/CD pipelines, and local development environments.',
    editorialStatement: 'Hands-on developer tooling reviews evaluated against code accuracy, latency, workflow friction, and real developer economics.',
    badgeAccent: 'text-amber-400 dark:text-amber-300'
  },
  {
    id: 'ai-training-data-labeling',
    name: 'AI Training & Data Labeling',
    slug: 'ai-training-data-labeling',
    description: 'Annotation taxonomy, RLHF evaluation, prompt engineering contracts, platform mechanics, and edge-case classification.',
    editorialStatement: 'Clear, realistic analysis of annotation quality, platform terms, and the human labor powering foundational model alignment.',
    badgeAccent: 'text-fuchsia-400 dark:text-fuchsia-300'
  },
  {
    id: 'digital-income',
    name: 'Digital Income',
    slug: 'digital-income',
    description: 'Sustainable digital publishing, ethical monetization, affiliate disclosure standards, micro-SaaS, and technical freelancing.',
    editorialStatement: 'Strictly zero-hype strategies grounded in legal compliance, transparent unit economics, and honest value creation.',
    badgeAccent: 'text-teal-400 dark:text-teal-300'
  },
  {
    id: 'emerging-technology',
    name: 'Emerging Technology',
    slug: 'emerging-technology',
    description: 'Technical SEO architectures, decentralized protocols, edge computing, WebAssembly, and new computing paradigms.',
    editorialStatement: 'Tracking technological shifts before they become industry consensus, separating durable advancements from ephemeral noise.',
    badgeAccent: 'text-indigo-400 dark:text-indigo-300'
  }
];

export const AUTHOR_DEFAULT = {
  name: 'Tuchii Hunnid',
  brand: 'By Tuchii Hunnid',
  role: 'Lead Author & Technology Analyst',
  founder: 'Brian Mutunga',
  bio: 'Writing under the moniker Tuchii Hunnid, Brian Mutunga analyzes AI systems, software reliability, independent developer economics, and technical publishing at Fringe Coding.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
};
