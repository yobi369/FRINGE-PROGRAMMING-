import React, { useEffect } from 'react';
import { Article } from '../types/article';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  article?: Article;
  type?: 'website' | 'article';
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  article,
  type = 'website'
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes('Fringe Coding') ? title : `${title} | Fringe Coding`;
    document.title = fullTitle;

    // 2. Helper to set or update meta tag
    const setMeta = (nameOrProperty: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', type, true);
    setMeta('og:site_name', 'Fringe Coding', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    // 3. Canonical URL
    const canonicalUrl = `${window.location.origin}${canonicalPath || window.location.pathname}`;
    setMeta('og:url', canonicalUrl, true);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. JSON-LD Structured Data
    const scriptId = 'json-ld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    if (article) {
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.excerpt,
        image: article.featuredImage.url.startsWith('http')
          ? article.featuredImage.url
          : `${window.location.origin}${article.featuredImage.url}`,
        datePublished: `${article.publishedDate}T08:00:00Z`,
        dateModified: `${article.updatedDate}T08:00:00Z`,
        author: {
          '@type': 'Person',
          name: article.author.name,
          jobTitle: article.author.role,
          url: `${window.location.origin}/about`
        },
        publisher: {
          '@type': 'Organization',
          name: 'Fringe Coding',
          url: window.location.origin,
          logo: {
            '@type': 'ImageObject',
            url: `${window.location.origin}/logo.png`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        keywords: article.tags.join(', ')
      };
      scriptTag.textContent = JSON.stringify(structuredData);
    } else {
      const websiteData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Fringe Coding',
        url: window.location.origin,
        description: 'Beyond the Ordinary. Into What\'s Possible. Technology publication founded by Brian Mutunga, authored by Tuchii Hunnid.',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${window.location.origin}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };
      scriptTag.textContent = JSON.stringify(websiteData);
    }

    return () => {
      // Optional cleanup
    };
  }, [title, description, canonicalPath, article, type]);

  return null;
};
