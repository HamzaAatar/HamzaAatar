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
    '@nuxt/content',
    '@nuxtjs/color-mode'
  ],

  // Content module configuration
  content: {
    // Using a simplified configuration to avoid TypeScript errors
  },

  // Color mode configuration
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },

  // Route rules
  routeRules: {
    '/blog/**': { swr: 3600 }
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
    }
  },

  // App Config
  app: {
    // This is crucial for GitHub Pages
    baseURL: '/HamzaAatar/', // Updated to include repository name
    buildAssetsDir: '/_nuxt/', // Don't use underscore to avoid GitHub Pages 404 handling
    head: {
      title: "Hamza's Website - Automation & Web Scraping Expert",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Hamza is a freelance developer specializing in automation solutions and web scraping to help businesses save time and resources.' },
        { name: 'theme-color', content: '#1e293b' },
        { property: 'og:title', content: "Hamza's Website - Automation & Web Scraping Expert" },
        { property: 'og:description', content: 'Hamza is a freelance developer specializing in automation solutions and web scraping to help businesses save time and resources.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://hamza.dev' },
        { property: 'og:image', content: 'https://hamza.dev/images/social-banner.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  // Runtime config
  runtimeConfig: {
    public: {
      baseURL: '/HamzaAatar/', // Updated to include repository name
    }
  },

  compatibilityDate: '2025-03-21'
})