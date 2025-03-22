<template>
  <div class="bg-white dark:bg-gray-950">
    <!-- Hero Section -->
    <section class="pt-20 pb-32 relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-12 md:mb-0">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
              Automation Expert <span class="text-primary-600 dark:text-primary-400">& Web Scraper</span>
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl animate-fade-in-up animation-delay-100">
              I help businesses save time and money through custom automation solutions and data extraction services.
            </p>
            <div class="flex flex-wrap gap-4 animate-fade-in-up animation-delay-200">
              <NuxtLink to="/portfolio" class="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition duration-300 shadow-lg hover:shadow-xl">
                View My Work
              </NuxtLink>
              <NuxtLink to="/contact" class="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300">
                Get in Touch
              </NuxtLink>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary-400 to-secondary-500 animate-float shadow-lg">
              <div class="absolute inset-4 rounded-full bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-800 shadow-inner flex items-center justify-center overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-40 h-40 text-gray-400 dark:text-gray-600">
                  <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Background decorations -->
      <div class="absolute top-0 right-0 -mt-10 -mr-20 w-72 h-72 bg-secondary-500 dark:bg-secondary-700 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute bottom-0 left-0 -mb-10 -ml-20 w-72 h-72 bg-primary-500 dark:bg-primary-700 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Services</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Specialized solutions tailored to optimize your business processes.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up">
            <div class="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Web Scraping</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Extract valuable data from websites to gain insights and competitive advantage.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Large-scale data extraction
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Anti-bot bypass solutions
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Structured data delivery
              </li>
            </ul>
          </div>
          
          <!-- Service 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up animation-delay-100">
            <div class="w-14 h-14 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary-600 dark:text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Process Automation</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Eliminate repetitive tasks and streamline your workflows with custom automation.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-600 dark:text-secondary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Workflow optimization
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-600 dark:text-secondary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Custom script development
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-600 dark:text-secondary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Integration with existing systems
              </li>
            </ul>
          </div>
          
          <!-- Service 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up animation-delay-200">
            <div class="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Data Analysis</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Transform raw data into actionable insights to drive business decisions.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Data cleaning & processing
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Pattern recognition
              </li>
              <li class="flex items-center text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Visual reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-20 bg-white dark:bg-gray-950">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center animate-fade-in-up">
            <div class="text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
            <div class="text-lg text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div class="text-center animate-fade-in-up animation-delay-100">
            <div class="text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">30+</div>
            <div class="text-lg text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
          <div class="text-center animate-fade-in-up animation-delay-200">
            <div class="text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
            <div class="text-lg text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div class="text-center animate-fade-in-up animation-delay-300">
            <div class="text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
            <div class="text-lg text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Clients Say</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Feedback from clients who have experienced my services.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg relative animate-fade-in-up">
            <div class="text-primary-600 dark:text-primary-400 absolute -top-4 left-6 text-6xl">"</div>
            <p class="text-gray-600 dark:text-gray-400 mb-6 pt-4">Hamza delivered an exceptional automation solution that saved our company countless hours of manual work. His attention to detail and problem-solving skills are top-notch.</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                <div class="w-full h-full bg-primary-200 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-lg">JD</div>
              </div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">John Doe</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">E-commerce Manager</div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg relative animate-fade-in-up animation-delay-100">
            <div class="text-primary-600 dark:text-primary-400 absolute -top-4 left-6 text-6xl">"</div>
            <p class="text-gray-600 dark:text-gray-400 mb-6 pt-4">Working with Hamza was a game-changer for our research team. His web scraping solution helped us collect data that would have taken months to gather manually.</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                <div class="w-full h-full bg-secondary-200 dark:bg-secondary-900 flex items-center justify-center text-secondary-600 dark:text-secondary-400 font-bold text-lg">JS</div>
              </div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Jane Smith</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Research Director</div>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg relative animate-fade-in-up animation-delay-200">
            <div class="text-primary-600 dark:text-primary-400 absolute -top-4 left-6 text-6xl">"</div>
            <p class="text-gray-600 dark:text-gray-400 mb-6 pt-4">Hamza's custom automation scripts transformed our inventory management process. His solutions are robust, reliable, and exactly what we needed.</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                <div class="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold text-lg">RJ</div>
              </div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Robert Johnson</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Operations Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">Ready to Streamline Your Business?</h2>
        <p class="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
          Let's discuss how custom automation and data solutions can help your business save time and drive growth.
        </p>
        <NuxtLink to="/contact" class="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-200">
          Get in Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// Add any required client-side functionality here
</script> 