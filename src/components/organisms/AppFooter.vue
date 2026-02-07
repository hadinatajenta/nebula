<template>
  <footer class="bg-gray-900 text-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div class="grid md:grid-cols-5 gap-8 mb-12">
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg" style="background-color: #221934;">
              <span class="text-white text-xl font-bold">N</span>
            </div>
            <span class="text-lg font-bold text-white">Nebula</span>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">
            A personal tech blog sharing practical insights, tutorials, and tips for developers and tech enthusiasts.
          </p>
        </div>

        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Navigation</h4>
          <ul class="space-y-3">
            <li><a href="/" class="text-sm text-gray-400 transition-colors" style="--hover-color: #221934;" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Home</a></li>
            <li><a href="/blog" class="text-sm text-gray-400 transition-colors" style="--hover-color: #221934;" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Blog</a></li>
            <li><a href="/about" class="text-sm text-gray-400 transition-colors" style="--hover-color: #221934;" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">About</a></li>
            <li><a href="/contact" class="text-sm text-gray-400 transition-colors" style="--hover-color: #221934;" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Categories</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Web Dev</a></li>
            <li><a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">JavaScript</a></li>
            <li><a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Vue.js</a></li>
            <li><a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">CSS Tips</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Resources</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Documentation</a></li>
            <li><a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Code Snippets</a></li>
            <li><a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Tools</a></li>
            <li><a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Resources</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wide mb-4">Stay Updated</h4>
          <p class="text-sm text-gray-400 mb-4">Subscribe to get weekly tech insights.</p>
          <div class="space-y-2">
            <input 
              type="email" 
              placeholder="Your email" 
              class="w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-500 rounded-lg text-sm border border-gray-700 focus:outline-none transition-colors"
              style="--border-color: #221934;"
              @focus="$event.target.style.borderColor = '#221934'"
              @blur="$event.target.style.borderColor = '#374151'"
            />
            <button class="w-full px-4 py-2 text-white font-semibold text-sm rounded-lg transition-colors" style="background-color: #221934;" @mouseenter="$event.target.style.backgroundColor = '#1a1227'" @mouseleave="$event.target.style.backgroundColor = '#221934'">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 py-8">
        <div class="grid md:grid-cols-3 gap-8 items-center">
          <div class="text-sm text-gray-400">
            © 2026 Nebula Blog. All rights reserved.
          </div>

          <div class="flex justify-center gap-4 md:gap-6">
            <a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Privacy Policy</a>
            <a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Terms</a>
            <a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Cookies</a>
            <a href="#" class="text-sm text-gray-400 transition-colors" @mouseenter="$event.target.style.color = '#221934'" @mouseleave="$event.target.style.color = '#9ca3af'">Sitemap</a>
          </div>

          <div class="flex justify-end gap-4">
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 transition-all" style="background-color: #374151;" @mouseenter="e => {e.target.style.backgroundColor = '#221934'; e.target.style.color = 'white';}" @mouseleave="e => {e.target.style.backgroundColor = '#374151'; e.target.style.color = '#9ca3af';}" title="Twitter">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 transition-all" style="background-color: #374151;" @mouseenter="e => {e.target.style.backgroundColor = '#221934'; e.target.style.color = 'white';}" @mouseleave="e => {e.target.style.backgroundColor = '#374151'; e.target.style.color = '#9ca3af';}" title="GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 transition-all" style="background-color: #374151;" @mouseenter="e => {e.target.style.backgroundColor = '#221934'; e.target.style.color = 'white';}" @mouseleave="e => {e.target.style.backgroundColor = '#374151'; e.target.style.color = '#9ca3af';}" title="LinkedIn">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.234-1.664-2.234-1.017 0-1.624.687-1.893 1.354-.097.237-.122.568-.122.898v5.551h-3.554v-11.2h3.554v1.537c.478-.738 1.335-1.788 3.25-1.788 2.374 0 4.15 1.55 4.15 4.883v6.568zM5.337 9.432c-1.143 0-2.063-.929-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.136-.925 2.065-2.064 2.065zm1.782 11.02H3.555v-11.2h3.564v11.2zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-800 bg-gray-950 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500">
      </div>
    </div>
  </footer>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue'
import BaseButton from '../atoms/BaseButton.vue'
</script>
