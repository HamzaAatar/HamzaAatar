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
            Blog
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up">
            Insights on Automation, Web Scraping, and No-Code Solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
            <!-- Main Content -->
            <div class="md:col-span-8">
              <!-- No Posts Message -->
              <div v-if="!posts || posts.length === 0" class="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 text-center">
                <h2 class="text-2xl font-bold mb-4">No Posts Available</h2>
                <p class="text-gray-600 dark:text-gray-400">Check back soon for new content!</p>
              </div>
              
              <!-- Featured Post (if available) -->
              <div v-else-if="featuredPost" class="mb-16 reveal">
                <h2 class="text-2xl font-bold mb-6 border-l-4 border-primary-500 pl-4">Featured Post</h2>
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover-lift transition group">
                  <NuxtLink :to="`/blog/${featuredPost.path.split('/').pop()}`" class="block">
                    <div class="relative h-64 md:h-80 overflow-hidden">
                      <img 
                        :src="featuredPost.image || '/images/blog/default.jpg'" 
                        :alt="featuredPost.title"
                        class="w-full h-full object-cover transition duration-500 transform group-hover:scale-105"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div class="absolute bottom-0 left-0 p-6">
                        <span class="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full mb-3">
                          {{ featuredPost.category }}
                        </span>
                        <h3 class="text-xl md:text-2xl font-bold text-white mb-2">{{ featuredPost.title }}</h3>
                        <p class="text-gray-200 text-sm">{{ formatDate(featuredPost.date) }} • {{ featuredPost.author }}</p>
                      </div>
                    </div>
                    <div class="p-6">
                      <p class="text-gray-600 dark:text-gray-400 mb-4">{{ featuredPost.description }}</p>
                      <div class="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                        <span>Read Article</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              
              <!-- Post Grid -->
              <div v-if="posts && posts.length > 0">
                <h2 class="text-2xl font-bold mb-6 border-l-4 border-primary-500 pl-4">Latest Articles</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div v-for="post in regularPosts" :key="post.path" class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover-lift transition group reveal">
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
              </div>
              
              <!-- Pagination (if needed) -->
              <div v-if="posts && posts.length > postsPerPage" class="mt-12 flex justify-center">
                <ul class="flex items-center space-x-2">
                  <li>
                    <button 
                      @click="currentPage > 1 && (currentPage--)"
                      :class="[
                        'flex items-center justify-center w-10 h-10 rounded-lg border',
                        currentPage === 1 
                          ? 'border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed' 
                          : 'border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                      ]"
                      :disabled="currentPage === 1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  </li>
                  <li v-for="page in totalPages" :key="page">
                    <button 
                      @click="currentPage = page"
                      :class="[
                        'flex items-center justify-center w-10 h-10 rounded-lg border',
                        currentPage === page 
                          ? 'bg-primary-600 border-primary-600 text-white' 
                          : 'border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                      ]"
                    >
                      {{ page }}
                    </button>
                  </li>
                  <li>
                    <button 
                      @click="currentPage < totalPages && (currentPage++)"
                      :class="[
                        'flex items-center justify-center w-10 h-10 rounded-lg border',
                        currentPage === totalPages 
                          ? 'border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed' 
                          : 'border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                      ]"
                      :disabled="currentPage === totalPages"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            
            <!-- Sidebar -->
            <div class="md:col-span-4">
              <!-- Categories -->
              <div class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-8 reveal">
                <h3 class="text-xl font-bold mb-4">Categories</h3>
                <ul class="space-y-2">
                  <li v-for="category in categories" :key="category.name">
                    <NuxtLink :to="`/blog/category/${category.slug}`" class="flex items-center justify-between group">
                      <span class="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">{{ category.name }}</span>
                      <span class="text-gray-500 dark:text-gray-500 text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">{{ category.count }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              
              <!-- Newsletter Signup -->
              <div class="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-6 text-white reveal">
                <h3 class="text-xl font-bold mb-3">Subscribe to Newsletter</h3>
                <p class="text-white/90 mb-4">Get the latest articles and resources directly to your inbox.</p>
                <form @submit.prevent="subscribeToNewsletter" class="space-y-3">
                  <div>
                    <input 
                      v-model="newsletterEmail"
                      type="email" 
                      placeholder="Your email address" 
                      class="w-full px-4 py-3 rounded-lg bg-white/10 placeholder-white/60 text-white border border-white/20 focus:outline-none focus:border-white/40 focus:bg-white/15"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    class="w-full bg-white text-primary-600 font-medium py-3 px-4 rounded-lg hover:bg-white/90 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              
              <!-- Popular Tags -->
              <div class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mt-8 reveal">
                <h3 class="text-xl font-bold mb-4">Popular Tags</h3>
                <div class="flex flex-wrap gap-2">
                  <NuxtLink 
                    v-for="tag in popularTags" 
                    :key="tag.name"
                    :to="`/blog/tag/${tag.slug}`"
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition"
                  >
                    #{{ tag.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

definePageMeta({
  layout: 'default'
})

// Fetch blog posts - using correct v3 syntax with queryCollection
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').order('date', 'DESC').all()
})

// Pagination
const postsPerPage = 6
const currentPage = ref(1)
const totalPages = computed(() => {
  return posts.value && posts.value.length > 0 
    ? Math.ceil(posts.value.length / postsPerPage) 
    : 0
})

// Featured post
const featuredPost = computed(() => {
  if (!posts.value || posts.value.length === 0) return null
  return posts.value.find(post => post.featured === true)
})

// Regular posts (excluding featured)
const regularPosts = computed(() => {
  if (!posts.value || posts.value.length === 0) return []
  return posts.value
    .filter(post => post !== featuredPost.value)
    .slice((currentPage.value - 1) * postsPerPage, currentPage.value * postsPerPage)
})

// Calculate categories
const categories = computed(() => {
  if (!posts.value || posts.value.length === 0) return []
  const categoryMap = {}
  
  posts.value.forEach(post => {
    if (post.category) {
      const category = post.category
      if (!categoryMap[category]) {
        categoryMap[category] = {
          name: category,
          slug: category.toLowerCase().replace(/ /g, '-'),
          count: 0
        }
      }
      categoryMap[category].count++
    }
  })
  
  return Object.values(categoryMap).sort((a, b) => b.count - a.count)
})

// Popular tags (hardcoded for now, but could be dynamic)
const popularTags = [
  { name: 'Automation', slug: 'automation' },
  { name: 'Python', slug: 'python' },
  { name: 'Web Scraping', slug: 'web-scraping' },
  { name: 'No-Code', slug: 'no-code' },
  { name: 'API', slug: 'api' },
  { name: 'Workflows', slug: 'workflows' }
]

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

// Newsletter subscription
const newsletterEmail = ref('')

function subscribeToNewsletter() {
  alert(`Thanks for subscribing with ${newsletterEmail.value}! (This is a demo, no email is actually sent)`)
  newsletterEmail.value = ''
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
</script> 