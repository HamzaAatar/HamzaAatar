<template>
  <div>
    <!-- Testimonials Header -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            What clients say about working with me
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Testimonials -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-xl font-bold text-primary-500">
                TC
              </div>
              <div>
                <h3 class="text-xl font-bold">Thomas Chen</h3>
                <p class="text-gray-600 dark:text-gray-400">E-commerce Store Owner</p>
              </div>
            </div>
            
            <div class="flex mb-4">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-lg text-gray-600 dark:text-gray-300 italic mb-6">
              "Hamza created an incredible automation solution for my online store that saved me hours every week. The product listing automation works flawlessly and has been a game-changer for my business. Highly recommended for anyone looking to streamline their e-commerce operations."
            </blockquote>
            
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Project: E-commerce Automation Solution
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-xl font-bold text-primary-500">
                SM
              </div>
              <div>
                <h3 class="text-xl font-bold">Sarah Miller</h3>
                <p class="text-gray-600 dark:text-gray-400">Marketing Agency Director</p>
              </div>
            </div>
            
            <div class="flex mb-4">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-lg text-gray-600 dark:text-gray-300 italic mb-6">
              "Working with Hamza on our workflow automation project was a breath of fresh air. He understood our complex requirements quickly and delivered a robust n8n solution that connects all our systems seamlessly. The automation has dramatically improved our team's efficiency."
            </blockquote>
            
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Project: Marketing Workflow Automation
            </p>
          </div>
        </div>
        
        <!-- More Testimonials -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-lg font-bold text-primary-500">
                RJ
              </div>
              <div>
                <h3 class="font-bold">Robert Johnson</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Real Estate Investor</p>
              </div>
            </div>
            
            <div class="flex mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-600 dark:text-gray-300 italic mb-4">
              "The real estate scraper Hamza built has been invaluable for my investment business. I'm now able to find deals before my competitors and have closed multiple properties thanks to the timely alerts."
            </blockquote>
            
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Project: Real Estate Data Scraper
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-lg font-bold text-primary-500">
                AK
              </div>
              <div>
                <h3 class="font-bold">Amanda Kim</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Product Manager</p>
              </div>
            </div>
            
            <div class="flex mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-600 dark:text-gray-300 italic mb-4">
              "Hamza's Amazon review analysis tool provided us with crucial insights for our product development. The data he extracted helped us identify key features our customers want."
            </blockquote>
            
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Project: Amazon Review Analysis
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-lg font-bold text-primary-500">
                DB
              </div>
              <div>
                <h3 class="font-bold">David Brown</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Sales Director</p>
              </div>
            </div>
            
            <div class="flex mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-600 dark:text-gray-300 italic mb-4">
              "The lead generation bot Hamza created has transformed our sales process. We're now focusing on closing deals rather than searching for prospects. Excellent work!"
            </blockquote>
            
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Project: Lead Generation Bot
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-lg font-bold text-primary-500">
                LR
              </div>
              <div>
                <h3 class="font-bold">Lisa Rodriguez</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Content Creator</p>
              </div>
            </div>
            
            <div class="flex mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-600 dark:text-gray-300 italic mb-4">
              "The social media automation workflow Hamza built with Make has saved me hours every week. I can now focus on creating content rather than manually posting across platforms."
            </blockquote>
            
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Project: Social Media Scheduler
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-lg font-bold text-primary-500">
                MP
              </div>
              <div>
                <h3 class="font-bold">Michael Parker</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">E-commerce Manager</p>
              </div>
            </div>
            
            <div class="flex mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-600 dark:text-gray-300 italic mb-4">
              "Hamza's attention to detail and expertise in automation is impressive. The custom solution he built for our inventory management has eliminated errors and saved us countless hours."
            </blockquote>
            
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Project: Inventory Automation
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-lg font-bold text-primary-500">
                JT
              </div>
              <div>
                <h3 class="font-bold">Jennifer Thompson</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Digital Marketing Specialist</p>
              </div>
            </div>
            
            <div class="flex mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <blockquote class="text-gray-600 dark:text-gray-300 italic mb-4">
              "Working with Hamza was a pleasure. He understood our requirements perfectly and delivered an automation solution that exceeded our expectations. Very reliable and professional."
            </blockquote>
            
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Project: CRM Integration
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Upwork Rating -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <h2 class="text-2xl font-bold mb-4">5.0 Rating on Upwork</h2>
            
            <div class="flex justify-center mb-6">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              I maintain a perfect 5-star rating on Upwork with 100% client satisfaction. Check out my profile to see more client reviews and feedback.
            </p>
            
            <button 
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-primary-600 text-white dark:bg-primary-400 dark:text-white hover:bg-primary-700 dark:hover:bg-primary-500 transition-all"
              onclick="window.open('https://www.upwork.com/freelancers/~018c8cd286816ff836', '_blank', 'noopener,noreferrer')"
            >
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
              </svg>
              View My Upwork Profile
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to become the next success story?</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss how automation can transform your business
          </p>
          <a 
            href="/contact"
            class="inline-block px-6 py-3 bg-primary-600 dark:bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 