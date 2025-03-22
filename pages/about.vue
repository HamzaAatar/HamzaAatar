<template>
  <div>
    <!-- About Header -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Learn more about my background, skills, and experience in automation and web scraping
          </p>
        </div>
      </div>
    </section>

    <!-- Bio Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-12 items-start">
          <div class="md:col-span-1">
            <div class="sticky top-32">
              <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-6">
                <div class="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Hamza A.</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  Automation Expert & Python Developer
                </p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Remote</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Freelancer</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span>5.0 on Upwork</span>
                  </div>
                </div>
              </div>
              
              <a
                href="https://www.upwork.com/freelancers/~018c8cd286816ff836"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-block text-center px-4 py-2 bg-primary-600 dark:bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-700 transition mb-4"
              >
                View Upwork Profile
              </a>
              
              <NuxtLink
                to="/contact"
                class="w-full inline-block text-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </NuxtLink>
            </div>
          </div>
          
          <div class="md:col-span-2">
            <h2 class="text-3xl font-bold mb-6">My Background</h2>
            
            <div class="prose dark:prose-invert lg:prose-lg max-w-none">
              <p>
                I'm a passionate programmer and automation expert specializing in creating efficient solutions that save businesses time and money. With several years of experience in Python development, web scraping, and workflow automation, I've helped companies across various industries streamline their processes and extract valuable data.
              </p>
              
              <p>
                My journey into automation began with a simple problem: I needed to automate repetitive tasks for my own projects. What started as a personal solution quickly evolved into a professional skill set that I now offer to clients worldwide through platforms like Upwork, where I maintain a perfect 5-star rating.
              </p>
              
              <p>
                I take pride in my ability to understand complex business requirements and translate them into practical, efficient automation solutions. Whether it's building a web scraper to gather market intelligence, creating a bot to automate repetitive tasks, or designing a low-code workflow using platforms like n8n and Make, I'm committed to delivering high-quality results that provide real business value.
              </p>
              
              <p>
                When I'm not coding, I'm constantly learning about new technologies and automation approaches to enhance my skill set and provide even better solutions for my clients.
              </p>
            </div>
            
            <div class="mt-12">
              <h2 class="text-3xl font-bold mb-6">My Skills</h2>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h3 class="text-xl font-bold mb-4">Programming</h3>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">Python</span>
                        <span>Expert</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 95%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">JavaScript</span>
                        <span>Advanced</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 85%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">HTML/CSS</span>
                        <span>Intermediate</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 75%"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="text-xl font-bold mb-4">Automation</h3>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">Web Scraping</span>
                        <span>Expert</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 95%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">n8n</span>
                        <span>Expert</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 90%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">Make (Integromat)</span>
                        <span>Expert</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 90%"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="text-xl font-bold mb-4">Tools & Libraries</h3>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">Selenium</span>
                        <span>Expert</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 95%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">Beautiful Soup</span>
                        <span>Expert</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 95%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">Pandas</span>
                        <span>Advanced</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 85%"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="text-xl font-bold mb-4">Other Skills</h3>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">API Integration</span>
                        <span>Expert</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 90%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">Data Analysis</span>
                        <span>Advanced</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 80%"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="font-medium">Task Automation</span>
                        <span>Expert</span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div class="bg-primary-500 h-2 rounded-full" style="width: 95%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Experience Timeline -->
            <div class="mt-16">
              <h2 class="text-3xl font-bold mb-6">Experience</h2>
              
              <div class="space-y-12">
                <div class="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                  <div class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-bold">Freelance Automation Developer</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">2020 - Present</p>
                    <p class="text-gray-600 dark:text-gray-400">
                      Working with various clients to implement automation solutions for their businesses. Projects include web scraping, workflow automation, and custom bot development. Specialized in using Python, n8n, and Make to create efficient solutions.
                    </p>
                  </div>
                </div>
                
                <div class="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                  <div class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-bold">Web Developer</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">2018 - 2020</p>
                    <p class="text-gray-600 dark:text-gray-400">
                      Worked on various web development projects, focusing on both frontend and backend development. Started exploring automation solutions for repetitive tasks, which eventually led to specializing in automation development.
                    </p>
                  </div>
                </div>
                
                <div class="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
                  <div class="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-bold">Self-taught Programmer</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">2016 - 2018</p>
                    <p class="text-gray-600 dark:text-gray-400">
                      Started learning programming through online courses and personal projects. Focused primarily on Python and began developing simple automation scripts for personal use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss how I can help automate your business processes
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/contact" class="inline-block px-6 py-3 bg-primary-600 dark:bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-700 transition">
              Contact Me
            </NuxtLink>
            <NuxtLink to="/portfolio" class="inline-block px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              View My Work
            </NuxtLink>
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
</script> 