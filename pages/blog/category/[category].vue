<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent dark:from-primary-900/40 dark:to-gray-950/95 gradient-animate -z-10"></div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden -z-10">
        <div class="absolute top-1/4 left-1/5 w-64 h-64 bg-primary-400/10 dark:bg-primary-400/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div class="absolute top-2/3 right-1/4 w-72 h-72 bg-secondary-400/10 dark:bg-secondary-400/5 rounded-full filter blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
      </div>
      
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {{ categoryName }}
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up">
            Articles in the {{ categoryName }} category
          </p>
        </div>
      </div>
    </section>

    <!-- Category Content -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <!-- No Posts Message -->
          <div v-if="!filteredPosts || filteredPosts.length === 0" class="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 text-center max-w-3xl mx-auto">
            <h2 class="text-2xl font-bold mb-4">No Posts Available</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-6">There are no posts in this category yet.</p>
          </div>
          
          <!-- Post Grid -->
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="post in filteredPosts" :key="post._path" class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover-lift transition group reveal">
              <NuxtLink :to="`/blog/${post.path.split('/').pop()}`" class="block">
                <div class="relative h-48 overflow-hidden">
                  <img 
                    :src="post.image || '/images/blog/default.jpg'" 
                    :alt="post.title"
                    class="w-full h-full object-cover transition duration-500 transform group-hover:scale-105"
                  />
                </div>
                <div class="p-6">
                  <div class="flex items-center mb-3">
                    <span class="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                      {{ post.category }}
                    </span>
                    <span class="mx-2 text-gray-400 text-sm">•</span>
                    <span class="text-gray-500 dark:text-gray-400 text-sm">{{ formatDate(post.date) }}</span>
                  </div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">{{ post.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{{ post.description }}</p>
                  <div class="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm">
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          
          <!-- Back to Blog -->
          <div class="mt-12 text-center">
            <NuxtLink to="/blog" class="inline-block px-5 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              ← Back to All Posts
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCustomSeoMeta } from '~/composables/useSeoMeta'

definePageMeta({
  layout: 'default'
})

// Get current route
const route = useRoute()
const { category } = route.params

// Format category name (replace hyphens with spaces and capitalize)
const categoryName = computed(() => {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})

// Fetch all blog posts
const { data: posts } = await useAsyncData('all-blog-posts-category', () => 
  queryCollection('blog').order('date', 'DESC').all()
)

// Filter posts by category
const filteredPosts = computed(() => {
  if (!posts.value) return []
  
  return posts.value.filter(post => {
    // Check if post has a category
    if (!post.category) return false
    
    // Compare formatted category slugs
    const postCategorySlug = post.category.toLowerCase().replace(/ /g, '-')
    return postCategorySlug === category.toLowerCase()
  })
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
useCustomSeoMeta({
  title: () => `${categoryName.value} - Blog Category`,
  description: () => `Browse our collection of articles in the ${categoryName.value} category`,
  ogTitle: () => `${categoryName.value} - Blog Category`,
  ogDescription: () => `Browse our collection of articles in the ${categoryName.value} category`,
})
</script> 