<template>
  <div>
    <!-- Portfolio Header -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Explore my past projects and automation solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Categories -->
    <section class="py-8 border-b border-gray-200 dark:border-gray-800 sticky top-20 z-30 bg-white dark:bg-gray-950 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-2 justify-center">
          <button 
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all',
              activeFilter === 'all' 
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]" 
            @click="setFilter('all')"
          >
            All Projects
          </button>
          <button 
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all',
              activeFilter === 'automation' 
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
            @click="setFilter('automation')"
          >
            Automation
          </button>
          <button 
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all',
              activeFilter === 'scraping' 
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
            @click="setFilter('scraping')"
          >
            Web Scraping
          </button>
          <button 
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all',
              activeFilter === 'low-code' 
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
            @click="setFilter('low-code')"
          >
            Low-Code
          </button>
          <button 
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all',
              activeFilter === 'bots' 
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            ]"
            @click="setFilter('bots')"
          >
            Bots
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <UIcon name="i-heroicons-folder-open" class="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 class="text-xl font-bold mb-2">No projects found</h3>
          <p class="text-gray-600 dark:text-gray-400">Try selecting a different category</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in filteredProjects" :key="project.id" class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <div class="aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
              <UIcon :name="project.icon" class="w-16 h-16 text-gray-400" />
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {{ project.description }}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>
              
              <button 
                class="w-full px-4 py-2 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition"
                @click="selectedProject = project"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div 
          class="fixed inset-0 bg-black/50 backdrop-blur-sm"
          @click="isModalOpen = false"
        ></div>
        
        <div 
          class="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          :class="{'animate-fade-in': isModalOpen}"
        >
          <button 
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
            @click="isModalOpen = false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          
          <div v-if="selectedProject" class="p-6 md:p-8">
            <h2 class="text-2xl md:text-3xl font-bold mb-6">{{ selectedProject.title }}</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="bg-gray-100 dark:bg-gray-900 aspect-square rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="selectedProject.icon">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <div class="md:col-span-2">
                <div class="prose dark:prose-invert max-w-none">
                  <p class="text-lg">{{ selectedProject.longDescription }}</p>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h3 class="font-bold text-xl mb-3">Client Challenge</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ selectedProject.challenge }}</p>
              </div>
              
              <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <h3 class="font-bold text-xl mb-3">Solution Delivered</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ selectedProject.solution }}</p>
              </div>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-8">
              <h3 class="font-bold text-xl mb-4">Results</h3>
              <div class="space-y-3">
                <div v-for="(result, index) in selectedProject.results" :key="index" class="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-600 dark:text-gray-400">{{ result }}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="font-bold text-xl mb-3">Technologies Used</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in selectedProject.technologies" 
                  :key="tech" 
                  class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Need a similar solution?</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss how I can help automate your business processes
          </p>
          <NuxtLink 
            to="/contact" 
            class="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition"
          >
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

// Project data
const projects = ref([
  {
    id: 1,
    title: 'E-commerce Automation',
    description: 'Automated product listings for an online store, saving the client 10 hours per week.',
    longDescription: 'Created a comprehensive automation solution for a growing e-commerce business that needed to list products across multiple platforms efficiently.',
    challenge: 'The client was spending hours manually creating product listings across different platforms, leading to inconsistencies and consuming valuable time.',
    solution: 'Developed a Python-based automation system using Selenium that extracts product information from suppliers and creates consistent listings across multiple marketplaces.',
    results: [
      'Reduced listing time from 20 minutes per product to 2 minutes',
      'Saved approximately 10 hours per week for the business owner',
      'Improved listing consistency and reduced data entry errors',
      'Enabled more time for business development and customer service'
    ],
    technologies: ['Python', 'Selenium', 'E-commerce'],
    categories: ['automation', 'bots'],
    icon: 'i-heroicons-shopping-cart'
  },
  {
    id: 2,
    title: 'Amazon Review Analysis',
    description: 'Built a system to extract and analyze Amazon product reviews for competitor research.',
    longDescription: 'Developed a comprehensive web scraping solution that collected competitor product reviews from Amazon and analyzed sentiment and feature mentions.',
    challenge: 'The client needed to understand what customers loved and disliked about competitor products but had no efficient way to analyze thousands of reviews.',
    solution: 'Created a web scraping system using Python, Beautiful Soup, and Pandas that collected reviews, analyzed sentiment, and identified commonly mentioned features and complaints.',
    results: [
      'Collected and analyzed over 10,000 product reviews',
      'Identified key features customers appreciated in competitor products',
      'Highlighted common complaints and issues to avoid',
      'Provided actionable insights for product development'
    ],
    technologies: ['Python', 'Web Scraping', 'Data Analysis', 'Beautiful Soup', 'Pandas'],
    categories: ['scraping', 'automation'],
    icon: 'i-heroicons-chart-bar'
  },
  {
    id: 3,
    title: 'Workflow Automation',
    description: 'Created n8n workflows to connect CRM, email marketing, and billing systems.',
    longDescription: 'Implemented a comprehensive integration solution using n8n to create a seamless flow of information between client\'s key business systems.',
    challenge: 'The client was manually transferring data between their CRM, email marketing platform, and billing system, leading to delays and occasional errors.',
    solution: 'Designed and implemented n8n workflows that automatically synchronized customer data across platforms, triggered appropriate emails, and updated billing information.',
    results: [
      'Eliminated manual data transfer between systems',
      'Reduced administrative work by approximately 15 hours per week',
      'Ensured consistent and error-free data across all platforms',
      'Improved customer experience with timely and accurate communications'
    ],
    technologies: ['n8n', 'Make', 'API Integration', 'Workflow Automation'],
    categories: ['low-code', 'automation'],
    icon: 'i-heroicons-arrow-path'
  },
  {
    id: 4,
    title: 'Lead Generation Bot',
    description: 'Developed a bot to automatically collect and qualify leads from various sources.',
    longDescription: 'Created an automated lead generation system that searched multiple platforms for potential clients matching specific criteria.',
    challenge: 'The client\'s sales team was spending excessive time manually searching for and qualifying leads, limiting their ability to focus on closing sales.',
    solution: 'Built a Python-based bot that automatically searched specified websites and platforms for potential leads, qualified them based on predefined criteria, and delivered organized lead information.',
    results: [
      'Generated 200+ qualified leads per week automatically',
      'Increased sales team efficiency by 40%',
      'Improved lead quality with consistent qualification criteria',
      'Allowed sales team to focus on relationship building instead of prospecting'
    ],
    technologies: ['Python', 'Selenium', 'Beautiful Soup', 'CRM Integration'],
    categories: ['bots', 'automation', 'scraping'],
    icon: 'i-heroicons-users'
  },
  {
    id: 5,
    title: 'Social Media Scheduler',
    description: 'Built a Make workflow to automate scheduling and posting across multiple social media platforms.',
    longDescription: 'Implemented a comprehensive social media automation system using Make (formerly Integromat) to streamline the client\'s content publishing process.',
    challenge: 'The client was managing multiple social media accounts and struggling to maintain consistent posting schedules across platforms.',
    solution: 'Created a Make workflow that connected to their content calendar, automatically prepared posts with appropriate formatting for each platform, and scheduled them for optimal posting times.',
    results: [
      'Reduced social media management time by 70%',
      'Ensured consistent posting schedule across all platforms',
      'Optimized posting times based on audience engagement',
      'Simplified content repurposing across different social networks'
    ],
    technologies: ['Make (Integromat)', 'Social Media APIs', 'Content Automation'],
    categories: ['low-code', 'automation'],
    icon: 'i-heroicons-megaphone'
  },
  {
    id: 6,
    title: 'Real Estate Data Scraper',
    description: 'Developed a system to monitor and collect property listings from multiple websites.',
    longDescription: 'Built a comprehensive web scraping solution to monitor real estate listings across multiple platforms and alert the client to new opportunities.',
    challenge: 'The client needed to quickly identify new property listings matching specific investment criteria but couldn\'t efficiently monitor multiple real estate websites.',
    solution: 'Created a Python-based scraping system that regularly checks multiple real estate websites, identifies new listings matching client criteria, and sends immediate alerts with property details.',
    results: [
      'Monitored 20+ real estate websites simultaneously',
      'Provided real-time alerts for new listings matching specific criteria',
      'Collected comprehensive property data for analysis',
      'Helped client secure 5 investment properties by being first to respond'
    ],
    technologies: ['Python', 'Web Scraping', 'Beautiful Soup', 'Selenium', 'Notification System'],
    categories: ['scraping', 'automation'],
    icon: 'i-heroicons-home'
  },
])

// Filter logic
const activeFilter = ref('all')
const selectedProject = ref(null)
const isModalOpen = ref(false)

const setFilter = (filter) => {
  activeFilter.value = filter
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.categories.includes(activeFilter.value))
})

// Modal handling
watch(selectedProject, (newValue) => {
  isModalOpen.value = !!newValue
})

watch(isModalOpen, (newValue) => {
  if (!newValue) {
    setTimeout(() => {
      selectedProject.value = null
    }, 300)
  }
})
</script> 