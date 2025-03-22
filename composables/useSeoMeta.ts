/**
 * Custom SEO composable to replace @nuxtjs/seo module functionality
 * This provides simplified SEO metadata management
 */
export function useCustomSeoMeta(meta: {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}) {
  const config = useRuntimeConfig().public;
  
  const title = meta.title || `${config.siteName} | Web Developer & Designer`;
  const description = meta.description || config.siteDescription;
  
  // Ensure we have an absolute URL for canonical links
  const baseUrl = config.siteUrl || 'https://hamzaaatar.github.io';
  const canonicalUrl = meta.canonicalUrl 
    ? (meta.canonicalUrl.startsWith('http') ? meta.canonicalUrl : `${baseUrl}${meta.canonicalUrl}`) 
    : baseUrl;
  
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:title', content: meta.ogTitle || title },
      { property: 'og:description', content: meta.ogDescription || description },
      { property: 'og:image', content: meta.ogImage || '/social-preview.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.twitterTitle || title },
      { name: 'twitter:description', content: meta.twitterDescription || description },
      { name: 'twitter:image', content: meta.twitterImage || '/social-preview.jpg' }
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ]
  });
} 