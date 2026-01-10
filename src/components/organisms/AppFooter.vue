<template>
  <footer class="bg-primary text-light py-12 border-t border-secondary">
    <div class="container-custom">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span class="text-white text-xl font-bold">B</span>
            </div>
            <BaseText tag="span" variant="h4" weight="bold" color="white">
              Blog Tech
            </BaseText>
          </div>
          <BaseText variant="small" color="light" class="opacity-75">
            Your trusted source for technology insights and tutorials.
          </BaseText>
        </div>

        <!-- Quick Links -->
        <div>
          <BaseText tag="h4" variant="body" weight="semibold" color="white" class="mb-4">
            Quick Links
          </BaseText>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">Home</a></li>
            <li><a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">Blog</a></li>
            <li><a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <BaseText tag="h4" variant="body" weight="semibold" color="white" class="mb-4">
            Categories
          </BaseText>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">Web Development</a></li>
            <li><a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">Mobile Apps</a></li>
            <li><a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">Cloud & DevOps</a></li>
            <li><a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">AI & Machine Learning</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <BaseText tag="h4" variant="body" weight="semibold" color="white" class="mb-4">
            Stay Updated
          </BaseText>
          <BaseText variant="small" color="light" class="opacity-75 mb-4">
            Subscribe to our newsletter for the latest articles.
          </BaseText>
          <div class="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your email" 
              class="px-4 py-2 rounded-lg bg-secondary text-white placeholder-gray-400 border border-transparent focus:border-accent focus:outline-none"
            />
            <BaseButton variant="primary" size="sm" class="w-full">
              Subscribe
            </BaseButton>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-secondary">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <BaseText variant="small" color="light" class="opacity-75">
            © 2026 Blog Tech. All rights reserved.
          </BaseText>
          <div class="flex space-x-6">
            <a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" class="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue'
import BaseButton from '../atoms/BaseButton.vue'
</script>
