export type CategoryId =
  | 'artificial-intelligence'
  | 'software-engineering'
  | 'cybersecurity'
  | 'developer-tools'
  | 'ai-training-data-labeling'
  | 'digital-income'
  | 'emerging-technology';

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  description: string;
  editorialStatement: string;
  badgeAccent: string;
}

export interface Author {
  name: string;
  brand: string;
  role: string;
  bio: string;
  founder: string;
  avatar: string;
}

export interface TableOfContentItem {
  id: string;
  title: string;
  level: number;
}

export interface RecommendedTool {
  name: string;
  tagline: string;
  category: string;
  pricing: string;
  verdict: string;
  badge?: string;
  pros: string[];
  cons: string[];
  directUrl: string;
  affiliateUrl?: string;
}

export interface ComparisonRow {
  aspect: string;
  optionA: string;
  optionB: string;
  recommendation: string;
}

export interface ContentSection {
  id: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  callout?: {
    type: 'note' | 'caveat' | 'checklist' | 'pro-tip';
    title: string;
    text: string;
    items?: string[];
  };
  codeBlock?: {
    language: string;
    code: string;
    caption?: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
    caption?: string;
  };
  quote?: {
    text: string;
    author: string;
    source?: string;
  };
}

export interface ArticleReference {
  title: string;
  source: string;
  url?: string;
  note?: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  categoryId: CategoryId;
  categoryName: string;
  author: Author;
  publishedDate: string; // ISO date e.g. "2026-03-24"
  updatedDate: string;
  readingTimeMinutes: number;
  featured: boolean;
  editorPick?: boolean;
  trending?: boolean;
  tags: string[];
  featuredImage: {
    url: string;
    alt: string;
    caption?: string;
  };
  seo: {
    title: string;
    metaDescription: string;
    keywords: string[];
  };
  tableOfContents: TableOfContentItem[];
  sections: ContentSection[];
  keyTakeaways: string[];
  recommendedTools?: RecommendedTool[];
  comparisonTable?: {
    title: string;
    headers: string[];
    rows: ComparisonRow[];
  };
  hasAffiliateLinks: boolean;
  affiliateDisclosureText?: string;
  references: ArticleReference[];
}
