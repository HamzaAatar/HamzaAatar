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
                  <UIcon name="i-heroicons-user-circle" class="w-24 h-24 text-gray-400" />
                </div>
                <h3 class="text-xl font-bold mb-2">Hamza A.</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  Automation Expert & Python Developer
                </p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <UIcon name="i-heroicons-map-pin" class="w-5 h-5" />
                    <span>Remote</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <UIcon name="i-heroicons-briefcase" class="w-5 h-5" />
                    <span>Freelancer</span>
                  </div>
                  <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <UIcon name="i-heroicons-star" class="w-5 h-5" />
                    <span>5.0 on Upwork</span>
                  </div>
                </div>
              </div>
              
              <UButton
                to="https://www.upwork.com/freelancers/~018c8cd286816ff836"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                block
                class="mb-4"
              >
                View Upwork Profile
              </UButton>
              
              <UButton
                to="/contact"
                color="white"
                variant="outline"
                block
              >
                Contact Me
              </UButton>
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
            <UButton to="/contact" color="primary" size="lg">
              Contact Me
            </UButton>
            <UButton to="/portfolio" color="gray" variant="ghost" size="lg">
              View My Work
            </UButton>
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