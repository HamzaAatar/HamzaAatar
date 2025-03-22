<template>
  <div>
    <!-- Article Content -->
    <article class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <!-- Breadcrumbs -->
          <div class="mb-8 flex items-center text-sm text-gray-600 dark:text-gray-400 reveal">
            <NuxtLink to="/" class="hover:text-primary-600 dark:hover:text-primary-400 transition">Home</NuxtLink>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <NuxtLink to="/blog" class="hover:text-primary-600 dark:hover:text-primary-400 transition">Blog</NuxtLink>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span>{{ post.title }}</span>
          </div>
          
          <!-- Post Header -->
          <div class="mb-8 reveal">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">{{ post.title }}</h1>
            
            <div class="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-8">
              <div class="flex items-center mr-6 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ formatDate(post.date) }}</span>
              </div>
              
              <div v-if="post.category" class="flex items-center mr-6 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <NuxtLink 
                  :to="`/blog/category/${post.category.toLowerCase().replace(/ /g, '-')}`"
                  class="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {{ post.category }}
                </NuxtLink>
              </div>
              
              <div v-if="post.author" class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{{ post.author }}</span>
              </div>
            </div>
          </div>
          
          <!-- Featured Image -->
          <div v-if="post.image" class="mb-8 rounded-xl overflow-hidden reveal">
            <img 
              :src="post.image" 
              :alt="post.title" 
              class="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          
          <!-- Content -->
          <div class="prose prose-lg dark:prose-invert max-w-none mb-16 reveal">
            <ContentRenderer :value="post" />
          </div>
          
          <!-- Share Section -->
          <div class="border-t border-b border-gray-200 dark:border-gray-800 py-6 mb-16 reveal">
            <div class="flex flex-wrap items-center justify-between">
              <h3 class="text-lg font-semibold mb-4 md:mb-0">Share this article</h3>
              <div class="flex items-center space-x-4">
                <a 
                  :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`" 
                  target="_blank" 
                  class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a 
                  :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(post.title)}`" 
                  target="_blank" 
                  class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  :href="`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent('I thought you might find this article interesting: ' + pageUrl)}`" 
                  class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Related Posts -->
          <div v-if="relatedPosts.length > 0" class="mb-16 reveal">
            <h2 class="text-2xl font-bold mb-6 border-l-4 border-primary-500 pl-4">Related Articles</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div v-for="relatedPost in relatedPosts" :key="relatedPost._path" class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover-lift transition group">
                <NuxtLink :to="`/blog/${relatedPost._path.split('/').pop()}`" class="block">
                  <div class="relative h-48 overflow-hidden">
                    <img 
                      :src="relatedPost.image || '/images/blog/default.jpg'" 
                      :alt="relatedPost.title"
                      class="w-full h-full object-cover transition duration-500 transform group-hover:scale-105"
                    />
                  </div>
                  <div class="p-6">
                    <div class="flex items-center mb-3">
                      <span class="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                        {{ relatedPost.category }}
                      </span>
                    </div>
                    <h3 class="text-lg font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">{{ relatedPost.title }}</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{{ relatedPost.description }}</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          
          <!-- CTA Section -->
          <div class="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 reveal">
            <div class="text-center text-white">
              <h3 class="text-2xl font-bold mb-4">Need help with your automation projects?</h3>
              <p class="text-white/90 mb-6">
                Let's discuss how I can help you save time and resources with custom solutions tailored to your business needs.
              </p>
              <NuxtLink 
                to="/contact" 
                class="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-white/90 transition"
              >
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

definePageMeta({
  layout: 'default'
})

// Get current route
const route = useRoute()

// Get the slug
const { slug } = route.params

// Fetch the post data
const { data: post } = await useAsyncData(`blog-post-${slug.join('-')}`, () =>
    queryCollection('blog').path(`/blog/${slug}`).first()
)

// Add debugging
console.log("Fetching blog post with slug:", slug.join('/'))
console.log("Post found:", post.value)
console.log("Full path being queried:", `/blog/${slug.join('/')}`)

// If post not found, try a direct approach
if (!post.value) {
  console.log("Post not found with path query, trying direct query")
  const { data: directPost } = await useAsyncData(`direct-blog-post-${slug.join('-')}`, () =>
    queryContent(`/blog/${slug.join('/')}`).findOne()
  )
  console.log("Direct query result:", directPost.value)
  
  if (directPost.value) {
    post.value = directPost.value
  } else {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }
}

// Page URL for sharing
const pageUrl = computed(() => {
  if (process.client) {
    return window.location.href
  }
  return ''
})

// Get related posts (same category)
const { data: allPosts } = await useAsyncData('all-blog-posts', () => 
  queryContent('blog').find()
)

const relatedPosts = computed(() => {
  if (!post.value || !post.value.category || !allPosts.value) return []
  
  return allPosts.value
    .filter(p => 
      p.category === post.value.category && 
      p._path !== post.value._path
    )
    .slice(0, 2)
})

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

// Add animation when component mounts
onMounted(() => {
  // Add animation class to reveal elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.1 })
  
  // Observe all elements with .reveal class
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el)
  })
})

// SEO
useSeoMeta({
  title: () => post.value.title,
  description: () => post.value.description,
  ogTitle: () => post.value.title,
  ogDescription: () => post.value.description,
  ogImage: () => post.value.image || '/images/blog/default.jpg',
  ogType: 'article',
  twitterCard: 'summary_large_image',
})
</script>

<style>
/* Typography styles for markdown content */
.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  scroll-margin-top: 100px;
}

.prose code {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.dark .prose code {
  background-color: rgba(255, 255, 255, 0.1);
}

.prose pre {
  background-color: #f4f4f4;
  border-radius: 6px;
  padding: 1em;
  overflow-x: auto;
}

.dark .prose pre {
  background-color: #1a1a1a;
}

.prose pre code {
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  font-size: 0.9em;
}

.prose img {
  border-radius: 8px;
}

.prose a {
  color: theme('colors.primary.600');
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}

.dark .prose a {
  color: theme('colors.primary.400');
}

/* Reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
</style> 