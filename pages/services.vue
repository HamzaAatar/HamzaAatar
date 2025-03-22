<template>
  <div>
    <!-- Services Header -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">My Services</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Specialized automation and web scraping solutions to help your business grow
          </p>
        </div>
      </div>
    </section>

    <!-- Main Services -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <!-- Custom Automation -->
        <div id="automation" class="mb-24">
          <div class="grid md:grid-cols-5 gap-12 items-center">
            <div class="md:col-span-2">
              <div class="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl flex items-center justify-center aspect-square">
                <UIcon name="i-heroicons-cpu-chip" class="w-32 h-32 text-primary-500" />
              </div>
            </div>
            
            <div class="md:col-span-3">
              <h2 class="text-3xl font-bold mb-6">Custom Automation Solutions</h2>
              
              <div class="prose dark:prose-invert lg:prose-lg max-w-none mb-8">
                <p>
                  Automate repetitive tasks and streamline your business processes with custom-built solutions tailored to your specific needs. From simple scripts to complex automated workflows, I can help you save time and reduce errors.
                </p>
                
                <p>
                  My custom automation solutions use Python and other tools to create efficient, reliable systems that work exactly how you need them to. Whether you're looking to automate data entry, file processing, or any other repetitive task, I can help.
                </p>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Task Automation</h3>
                    <p class="text-gray-600 dark:text-gray-400">Automate repetitive tasks to save time and reduce human error</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Process Optimization</h3>
                    <p class="text-gray-600 dark:text-gray-400">Streamline and optimize your existing business processes</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Custom Scripts</h3>
                    <p class="text-gray-600 dark:text-gray-400">Python scripts developed specifically for your business needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Web Scraping -->
        <div id="scraping" class="mb-24">
          <div class="grid md:grid-cols-5 gap-12 items-center">
            <div class="md:col-span-3 md:order-1 order-2">
              <h2 class="text-3xl font-bold mb-6">Web Scraping & Data Extraction</h2>
              
              <div class="prose dark:prose-invert lg:prose-lg max-w-none mb-8">
                <p>
                  Extract valuable data from websites and transform it into actionable insights for your business. Whether you need competitive price monitoring, content aggregation, or lead generation, I can build reliable scraping solutions.
                </p>
                
                <p>
                  Using tools like Python, Selenium, and Beautiful Soup, I create robust web scrapers that can handle everything from simple static websites to complex dynamic web applications. All solutions are designed with respect for websites' terms of service and rate limits.
                </p>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Price Monitoring</h3>
                    <p class="text-gray-600 dark:text-gray-400">Track competitor pricing to keep your offerings competitive</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Content Aggregation</h3>
                    <p class="text-gray-600 dark:text-gray-400">Collect and organize content from multiple sources</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Data Analysis</h3>
                    <p class="text-gray-600 dark:text-gray-400">Transform raw data into meaningful insights</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="md:col-span-2 md:order-2 order-1">
              <div class="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl flex items-center justify-center aspect-square">
                <UIcon name="i-heroicons-globe-alt" class="w-32 h-32 text-primary-500" />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Low-Code Automation -->
        <div id="low-code" class="mb-24">
          <div class="grid md:grid-cols-5 gap-12 items-center">
            <div class="md:col-span-2">
              <div class="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl flex items-center justify-center aspect-square">
                <UIcon name="i-heroicons-puzzle-piece" class="w-32 h-32 text-primary-500" />
              </div>
            </div>
            
            <div class="md:col-span-3">
              <h2 class="text-3xl font-bold mb-6">Low-Code Automation with n8n & Make</h2>
              
              <div class="prose dark:prose-invert lg:prose-lg max-w-none mb-8">
                <p>
                  Leverage the power of low-code platforms like n8n and Make (formerly Integromat) to create sophisticated workflows and integrations without extensive custom development. Connect your favorite apps and automate your workflows with less code.
                </p>
                
                <p>
                  Low-code platforms offer a visual approach to automation, making it easier to understand and maintain your workflows. They're perfect for connecting different systems like CRMs, email marketing tools, and project management software.
                </p>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">App Integration</h3>
                    <p class="text-gray-600 dark:text-gray-400">Connect your favorite apps and services seamlessly</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Visual Workflows</h3>
                    <p class="text-gray-600 dark:text-gray-400">Easy-to-understand visual representation of your automated processes</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Rapid Implementation</h3>
                    <p class="text-gray-600 dark:text-gray-400">Quick setup and deployment of automation solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bot Development -->
        <div id="bot" class="mb-24">
          <div class="grid md:grid-cols-5 gap-12 items-center">
            <div class="md:col-span-3 md:order-1 order-2">
              <h2 class="text-3xl font-bold mb-6">Bot Development</h2>
              
              <div class="prose dark:prose-invert lg:prose-lg max-w-none mb-8">
                <p>
                  Custom bots can automate interactions with websites, applications, and messaging platforms. From simple chat bots to complex automation bots, I can develop solutions that handle repetitive tasks automatically.
                </p>
                
                <p>
                  My bot development services include designing, coding, and deploying bots that can interact with web interfaces, APIs, or messaging platforms. These bots can help with customer service, data collection, or process automation.
                </p>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Browser Automation</h3>
                    <p class="text-gray-600 dark:text-gray-400">Automate tasks in web browsers using Selenium and similar tools</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Chat Bots</h3>
                    <p class="text-gray-600 dark:text-gray-400">Automate customer interactions and support functions</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div>
                    <h3 class="font-bold">Task Bots</h3>
                    <p class="text-gray-600 dark:text-gray-400">Create bots that perform specific tasks automatically</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="md:col-span-2 md:order-2 order-1">
              <div class="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl flex items-center justify-center aspect-square">
                <UIcon name="i-heroicons-command-line" class="w-32 h-32 text-primary-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Additional Services -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Additional Services</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Other specialized solutions I offer to help businesses
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div class="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-envelope" class="text-primary-500 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold mb-3">Email Automation</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Streamline your email workflows with automated sending, processing, and filtering solutions.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div class="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-document-text" class="text-primary-500 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold mb-3">Data Processing</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Convert, clean, and analyze data from various sources to make it usable for your business needs.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div class="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-wrench-screwdriver" class="text-primary-500 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold mb-3">API Integration</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Connect your systems and third-party services through API integrations for seamless data flow.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">My Working Process</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            How I approach each project to ensure quality results
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-primary-500">1</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Consultation</h3>
            <p class="text-gray-600 dark:text-gray-400">
              I start by understanding your business needs and requirements through detailed discussions.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-primary-500">2</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Planning</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Creating a detailed plan with the right technologies and approach for your specific needs.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-primary-500">3</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Development</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Building the solution with regular updates and feedback to ensure it meets your expectations.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-primary-500">4</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Support</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Providing ongoing support and maintenance to ensure your solution continues to work effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to start your automation journey?</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's discuss your project and find the right solution for your business
          </p>
          <UButton to="/contact" color="primary" size="lg">
            Get in Touch
          </UButton>
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