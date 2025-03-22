<template>
  <!-- SEO Component - No visible content -->
</template>

<script setup>
const config = useRuntimeConfig().public;

// Build SEO metadata using environment variables
useHead({
  title: `${config.siteName} | Web Developer & Designer`,
  meta: [
    { name: 'description', content: config.siteDescription },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#6366f1' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: `${config.siteName} | Web Developer & Designer` },
    { property: 'og:description', content: config.siteDescription },
    { property: 'og:image', content: '/social-preview.jpg' },
    { property: 'og:url', content: config.siteUrl },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${config.siteName} | Web Developer & Designer` },
    { name: 'twitter:description', content: config.siteDescription },
    { name: 'twitter:image', content: '/social-preview.jpg' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: config.siteUrl }
  ]
})
</script> 