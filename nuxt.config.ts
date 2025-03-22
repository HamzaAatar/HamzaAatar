// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Disable auto-importing components
  components: {
    dirs: []
  },

  // CSS files
  css: [
    '~/assets/css/styles.css',
    '~/assets/css/animations.css',
  ],

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],

  // Content module configuration (minimal to avoid TypeScript errors)
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
        // Object syntax can be used to override default options
        remarkPlugins: {
          // Override remark-emoji options
          'remark-emoji': {
            options: {
              emoticon: true
            }
          },
          'remark-oembed': {},
          'remark-gfm': {
            
          },
        },
        rehypePlugins: {
          'rehype-figure': {

          }
        },
        highlight: {
          // Theme used in all color schemes.
          theme: 'monokai',
          langs: [
            'bash',
            'python',
            'javascript',
            'typescript',
            'css',
            'html',
            'json',
            'markdown',
            'sql'
          ]
        }
      }
    }
  },

  // Color mode configuration
  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: ''
  },

  // Route rules
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/blog/**': { swr: 60 * 60 },
    '/_nuxt/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable'
      }
    },
    '/assets/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable'
      }
    }
  },

  // GitHub Pages deployment settings
  nitro: {
    preset: 'github_pages',
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/services',
        '/portfolio',
        '/testimonials',
        '/blog',
        '/blog/getting-started-with-web-scraping',
        '/blog/automating-workflows-with-n8n',
        '/contact'
      ]
    },
    // Enable compression
    compressPublicAssets: {
      gzip: true,
      brotli: true
    }
  },

  // App Config
  app: {
    // This is crucial for GitHub Pages
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/HamzaAatar/',
    buildAssetsDir: '/_nuxt/', // Don't use underscore to avoid GitHub Pages 404 handling
    head: {
      htmlAttrs: {
        lang: process.env.NUXT_PUBLIC_SITE_LANGUAGE || 'en'
      },
      title: 'Hamza | Web Developer & Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional web developer specializing in modern, accessible, high-performance websites and applications.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#6366f1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Hamza | Web Developer & Designer' },
        { property: 'og:description', content: 'Professional web developer specializing in modern, accessible, high-performance websites and applications.' },
        { property: 'og:image', content: '/social-preview.jpg' },
        { property: 'og:url', content: 'https://hamza.dev' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Hamza | Web Developer & Designer' },
        { name: 'twitter:description', content: 'Professional web developer specializing in modern, accessible, high-performance websites and applications.' },
        { name: 'twitter:image', content: '/social-preview.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://hamza.dev' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
      siteName: process.env.NUXT_PUBLIC_SITE_NAME,
      siteDescription: process.env.NUXT_PUBLIC_SITE_DESCRIPTION,
      language: process.env.NUXT_PUBLIC_SITE_LANGUAGE,
      // Social media
      twitter: process.env.NUXT_PUBLIC_TWITTER_HANDLE,
      github: process.env.NUXT_PUBLIC_GITHUB_HANDLE,
      linkedin: process.env.NUXT_PUBLIC_LINKEDIN_HANDLE,
      // Contact info
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL,
      contactPhone: process.env.NUXT_PUBLIC_CONTACT_PHONE,
      contactLocation: process.env.NUXT_PUBLIC_CONTACT_LOCATION,
    }
  },

  // Sitemap Configuration simplified to avoid type errors
  sitemap: {},

  // Image optimization
  image: {
    format: ['webp', 'avif', 'jpg', 'png'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },

  postcss: {
    plugins: {
      'postcss-preset-env': {
        features: {
          'is-pseudo-class': false
        }
      },
      'cssnano': { preset: 'default' }
    }
  },

  compatibilityDate: '2025-03-21',

  // Configure Site
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },

  robots: {
    robotsTxt: false
  }
})