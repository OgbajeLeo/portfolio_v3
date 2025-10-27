import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[] | undefined;
  canonicalUrl?: string | undefined;
  ogImage?: string | undefined;
  ogImageAlt?: string | undefined;
  noIndex?: boolean;
  structuredData?: any;
}

export const defaultSEO: SEOConfig = {
  title: 'Ogbaje Leo Arome - Frontend Web Developer & Software Engineer',
  description: 'Portfolio website of Ogbaje Leo Arome - A passionate Frontend Web Developer specializing in React, Next.js, Vue.js, Node.js, TypeScript, and modern web technologies. Building end-to-end web solutions with a focus on user experience and performance.',
  keywords: [
    'Frontend Developer',
    'Web Developer',
    'React',
    'Next.js',
    'Vue.js',
    'Node.js',
    'TypeScript',
    'Portfolio',
    'Ogbaje Leo Arome',
    'Software Engineer',
    'JavaScript',
    'TailwindCSS',
    'Full Stack Developer',
    'Mobile Developer',
    'React Native',
    'Flutter',
    'PostgreSQL',
    'MongoDB',
    'Firebase',
    'Supabase',
    'Prisma',
    'Git',
    'GitHub',
    'Docker',
    'AWS',
    'Vercel',
    'Netlify',
    'Figma',
    'VS Code'
  ],
  canonicalUrl: 'https://omogbaje.vercel.app',
  ogImage: 'https://omogbaje.vercel.app/og-image.jpg',
  ogImageAlt: 'Ogbaje Leo Arome - Frontend Developer Portfolio',
};

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage,
    ogImageAlt,
    noIndex = false,
  } = config;

  const fullTitle = title.includes('Ogbaje Leo Arome') 
    ? title 
    : `${title} | Ogbaje Leo Arome`;

  const allKeywords = [...defaultSEO.keywords!, ...(keywords ?? [])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: 'Ogbaje Leo Arome' }],
    creator: 'Ogbaje Leo Arome',
    publisher: 'Ogbaje Leo Arome',
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl || defaultSEO.canonicalUrl!,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl || defaultSEO.canonicalUrl!,
      siteName: 'Ogbaje Leo Arome Portfolio',
      images: [
        {
          url: ogImage || defaultSEO.ogImage!,
          width: 1200,
          height: 630,
          alt: ogImageAlt || defaultSEO.ogImageAlt,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage || defaultSEO.ogImage!],
      creator: '@ogbajeleo',
      site: '@ogbajeleo',
    },
    verification: {
      google: 'kiMz3qY265MAjxXvaS8zCFeENY0K0q8qYtkam4J8NNY', 
    },
  };
}

// Structured Data Generators
export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ogbaje Leo Arome',
    jobTitle: 'Frontend Web Developer & Software Engineer',
    description: 'Passionate Frontend Web Developer specializing in React, Next.js, Vue.js, Node.js, TypeScript, and modern web technologies.',
    url: 'https://omogbaje.vercel.app',
    image: 'https://omogbaje.vercel.app/og-image.jpg',
    sameAs: [
      'https://github.com/ogbajeleo',
      'https://linkedin.com/in/ogbajeleo',
      'https://twitter.com/omaebije',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abuja',
      addressCountry: 'Nigeria',
    },
    email: 'leonardaromeh@gmail.com',
    telephone: '+234 (0)9036787860',
    knowsAbout: [
      'React',
      'Next.js',
      'Vue.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'TailwindCSS',
      'HTML5',
      'CSS3',
      'SASS/SCSS',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'React Native',
      'Expo',
      'Flutter',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Supabase',
      'Prisma',
      'Git',
      'GitHub',
      'Docker',
      'AWS',
      'Vercel',
      'Netlify',
      'Figma',
      'VS Code',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
  };
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ogbaje Leo Arome Portfolio',
    url: 'https://omogbaje.vercel.app',
    description: 'Portfolio website showcasing my work as a Frontend Web Developer specializing in React, Next.js, Vue.js, Node.js, and TypeScript.',
    author: {
      '@type': 'Person',
      name: 'Ogbaje Leo Arome',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://omogbaje.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateProjectStructuredData(project: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `https://omogbaje.vercel.app/projects/${project.id}`,
    image: project.image,
    author: {
      '@type': 'Person',
      name: 'Ogbaje Leo Arome',
    },
    dateCreated: new Date().toISOString(),
    genre: project.category,
    keywords: project.technologies.join(', '),
    ...(project.liveUrl && {
      url: project.liveUrl,
    }),
  };
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// SEO Helper Functions
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://omogbaje.vercel.app';
  return `${baseUrl}${path}`;
}

export function generatePageTitle(pageTitle: string): string {
  return `${pageTitle} | Ogbaje Leo Arome`;
}

export function generateMetaDescription(content: string, maxLength: number = 160): string {
  if (content.length <= maxLength) return content;
  
  const truncated = content.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

export function generateKeywordsFromContent(content: string, existingKeywords: string[] = []): string[] {
  const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can'];
  
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.includes(word));
  
  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const sortedWords = Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
  
  return [...existingKeywords, ...sortedWords];
}
