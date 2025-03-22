<template>
  <!-- SEO Component - No visible content -->
</template>

<script setup>
import { useCustomSeoMeta } from '~/composables/useSeoMeta';
const config = useRuntimeConfig().public;

// Build SEO metadata using environment variables
useHead({
  title: `${config.siteName || 'Hamza'} | Web Developer & Designer`,
  meta: [
    { name: 'description', content: config.siteDescription || 'Professional web developer specializing in modern, accessible, high-performance websites and applications.' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#6366f1' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: `${config.siteName || 'Hamza'} | Web Developer & Designer` },
    { property: 'og:description', content: config.siteDescription || 'Professional web developer specializing in modern, accessible, high-performance websites and applications.' },
    { property: 'og:image', content: '/social-preview.jpg' },
    { property: 'og:url', content: config.siteUrl || 'https://hamza.dev' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${config.siteName || 'Hamza'} | Web Developer & Designer` },
    { name: 'twitter:description', content: config.siteDescription || 'Professional web developer specializing in modern, accessible, high-performance websites and applications.' },
    { name: 'twitter:image', content: '/social-preview.jpg' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: config.siteUrl || 'https://hamza.dev' }
  ]
})
</script> 