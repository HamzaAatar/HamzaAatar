// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Disable auto-importing components
  components: {
    dirs: [
      '~/components'
    ]
  },

  // CSS files
  css: [
    '~/assets/css/critical.css',
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
    },
    // Add more specific cache rules for common static asset types
    '/**/*.{js,css,jpg,jpeg,png,svg,webp,avif,woff,woff2,ttf,eot,otf}': {
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
    },
    // Optimize JavaScript bundle
    minify: true
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
        // Preconnect to Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Remove regular stylesheet and use preload instead
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' },
      ],
      script: [
        // Add non-blocking font loading script
        {
          innerHTML: `
            (function() {
              const fontLink = document.createElement('link');
              fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
              fontLink.rel = 'stylesheet';
              fontLink.media = 'print';
              fontLink.onload = function() {
                this.media = 'all';
                // Add font-loaded class to enable proper font styling
                document.documentElement.classList.add('font-loaded');
              };
              document.head.appendChild(fontLink);
            })();
          `,
          tagPosition: 'bodyClose'
        }
      ],
      // Add font-display: swap as a style to ensure text remains visible during font loading
      style: [
        {
          innerHTML: `
            /* Inline a small subset of Inter 400 for critical text */
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(data:font/woff2;base64,d09GMgABAAAAAAKAAoAAAAABkAAAAIwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAhkQKYghECYESATQCJAMQCwoABCAFg3AHIBtKBoKUbQH3G8nA1uZFiXJ0YjbMl0yq8x35q5z4qnxE8LP935n7ZqcPDdJJNJtGbZKoJHESHfoaIUK2XU3rvvrmXRr9f5LKgXPNICJTdmFKW4K/7FbylbPIR8aQP3/Qf6EJXoDRrKFGI90AZ5EPX7LRxb+gX1IDrGgIQGuFZhb1G9k4NGgSW5+HKrSgA5SxqFAHJHM+8UOxlg78+MG9Gex9GpJUzXZATdIp3bW4XCpSaO3dw7yCnGBbWGf5h5sLXgVsTL2b1sSX4LOEBrDwH6lUl6qgdGhuRfk8AAAA) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfAZJhiI2B.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhiI2B.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 500;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZJhiI2B.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZJhiI2B.woff2) format('woff2');
            }
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZJhiI2B.woff2) format('woff2');
            }
          `
        }
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
  },
  
  // Add Vite optimization options
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: process.env.NODE_ENV === 'production'
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-bundle': ['vue', 'vue-router'],
            'nuxt-bundle': ['nuxt', '@nuxt/content'],
            'ui-bundle': ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router']
    }
  }
})