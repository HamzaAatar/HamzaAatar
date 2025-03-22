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
            Get in Touch
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up">
            Let's discuss how I can help your business save time and money
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-visible">
            <!-- Email -->
            <div class="stagger-item bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm hover-lift text-center">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Email</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                For project inquiries and general questions
              </p>
              <a href="mailto:example@example.com" class="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                example@example.com
              </a>
            </div>

            <!-- Location -->
            <div class="stagger-item bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm hover-lift text-center">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Location</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Based in London, United Kingdom
              </p>
              <p class="text-primary-600 dark:text-primary-400 font-medium">
                Working with clients worldwide
              </p>
            </div>

            <!-- Social -->
            <div class="stagger-item bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm hover-lift text-center">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Connect</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Follow me on social media
              </p>
              <div class="flex items-center justify-center space-x-4">
                <a href="https://github.com/your-username" target="_blank" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://twitter.com/your-username" target="_blank" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/your-username" target="_blank" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div class="grid md:grid-cols-2">
            <!-- Form -->
            <div class="p-8 md:p-12 reveal">
              <h2 class="text-3xl font-bold mb-6">Send Me a Message</h2>
              <p class="text-gray-600 dark:text-gray-400 mb-8">
                Have a project idea? Fill out the form below to start a conversation.
              </p>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    v-model="formData.name"
                    id="name"
                    type="text"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    v-model="formData.email"
                    id="email"
                    type="email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input
                    v-model="formData.subject"
                    id="subject"
                    type="text"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea
                    v-model="formData.message"
                    id="message"
                    rows="5"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  class="w-full px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>
            </div>
            
            <!-- Image/Info -->
            <div class="bg-gradient-to-br from-primary-500 to-secondary-500 text-white p-8 md:p-12 flex flex-col justify-center reveal">
              <div class="mb-8">
                <h3 class="text-2xl font-bold mb-4">Work with Me</h3>
                <p class="opacity-90 mb-6">
                  I specialize in creating custom automation solutions and web scraping tools that help businesses save time and money.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom automation solutions for your business</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Web scraping and data extraction services</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Low-code automation with n8n and Make</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ongoing support and maintenance</span>
                  </li>
                </ul>
              </div>
              
              <div class="mt-auto">
                <h4 class="font-bold mb-2">Typical Response Time</h4>
                <p class="opacity-90">I aim to respond to all inquiries within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16 reveal">
            <h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get answers to common questions about working with me
            </p>
          </div>

          <div class="space-y-6 reveal">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              <button 
                @click="toggleFaq(index)" 
                class="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <h3 class="text-lg font-semibold">{{ faq.question }}</h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 text-gray-500 transition-transform duration-300" 
                  :class="{ 'transform rotate-180': faq.isOpen }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="faq.isOpen" class="px-6 py-6 text-gray-600 dark:text-gray-400">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-12 reveal">
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Still have questions? Feel free to reach out.
            </p>
            <a href="mailto:example@example.com" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors">
              Contact me directly
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Form state
const isSubmitting = ref(false)

// Handle form submission
async function handleSubmit() {
  isSubmitting.value = true
  
  try {
    // Here you would integrate with your backend form handling service
    // For example: sending data to a serverless function or email service
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Show success message
    alert('Your message has been sent successfully! I will get back to you soon.')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error sending your message. Please try again later.')
  } finally {
    isSubmitting.value = false
  }
}

// FAQ data
const faqs = ref([
  {
    question: 'What types of businesses do you work with?',
    answer: 'I work with businesses of all sizes, from startups to enterprises, across various industries. My solutions are particularly valuable for e-commerce businesses, digital marketing agencies, research organizations, and any company looking to automate repetitive tasks.',
    isOpen: false
  },
  {
    question: 'How do you charge for your services?',
    answer: 'I offer both project-based pricing and hourly rates depending on your needs. For most automation and web scraping projects, I provide a flat rate based on the scope and complexity. For ongoing maintenance and support, I offer flexible monthly retainers.',
    isOpen: false
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity and scope. Simple automation projects might take 1-2 weeks, while more complex systems could require 4-8 weeks. I always provide a detailed timeline during the proposal phase after understanding your specific requirements.',
    isOpen: false
  },
  {
    question: 'Do you provide support after project completion?',
    answer: 'Yes, I offer ongoing support and maintenance for all projects. Websites and APIs change over time, so maintenance is crucial for scrapers and automation tools. I provide documentation, training, and optional support packages to ensure your solutions continue working effectively.',
    isOpen: false
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in Python for custom automation and web scraping projects. I also work with n8n and Make (formerly Integromat) for low-code automation workflows. Additionally, I have experience with APIs, database systems, and cloud deployment platforms like AWS and Google Cloud.',
    isOpen: false
  }
])

// Toggle FAQ item
function toggleFaq(index) {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
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
  
  // Handle staggered animations
  setTimeout(() => {
    document.querySelectorAll('.stagger-visible').forEach(container => {
      container.classList.add('active')
    })
  }, 300)
})
</script> 