<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Read Nebula Blog?
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide practical, honest, and well-researched content designed to help you grow your tech skills.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        <div class="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
          <div class="text-4xl mb-4">📚</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Practical Guides</h3>
          <p class="text-gray-600 leading-relaxed">
            Step-by-step tutorials and guides covering web development, programming, and tech tools.
          </p>
        </div>
        
        <div class="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Latest Trends</h3>
          <p class="text-gray-600 leading-relaxed">
            Stay updated with emerging technologies, frameworks, and industry best practices.
          </p>
        </div>
        
        <div class="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
          <div class="text-4xl mb-4">💡</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Real-World Tips</h3>
          <p class="text-gray-600 leading-relaxed">
            Practical advice and solutions based on real development experience and use cases.
          </p>
        </div>
        
        <div class="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
          <div class="text-4xl mb-4">🎯</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Code Examples</h3>
          <p class="text-gray-600 leading-relaxed">
            Every article includes working code samples you can copy and use in your own projects.
          </p>
        </div>
        
        <div class="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
          <div class="text-4xl mb-4">🚀</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Career Growth</h3>
          <p class="text-gray-600 leading-relaxed">
            Develop in-demand skills and advance your career with quality technical content.
          </p>
        </div>
        
        <div class="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
          <div class="text-4xl mb-4">🌐</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Always Free</h3>
          <p class="text-gray-600 leading-relaxed">
            All articles are free to read. No paywalls, no subscriptions required to learn.
          </p>
        </div>
      </div>

      <div class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900">Latest Articles</h3>
          <a href="/blog" class="font-semibold flex items-center gap-2 transition-colors" style="color: #221934;" @mouseenter="$event.target.style.color = '#1a1227'" @mouseleave="$event.target.style.color = '#221934'">
            View All <span>→</span>
          </a>
        </div>

        <div class="grid md:grid-cols-3 gap-6 md:gap-8">
          <article class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
            <div class="h-40 bg-gradient-to-br from-purple-200 to-purple-100 flex items-center justify-center text-5xl">📖</div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">Tutorial</span>
                <span class="text-xs text-gray-500">5 min read</span>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2 leading-tight">Getting Started with Vue 3</h4>
              <p class="text-sm text-gray-600 mb-4">Learn the basics of Vue 3 and build your first interactive component.</p>
              <div class="flex items-center text-sm text-gray-500">
                <span>By Admin</span>
                <span class="mx-2">•</span>
                <span>Feb 7, 2026</span>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
            <div class="h-40 bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center text-5xl">💻</div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">Guide</span>
                <span class="text-xs text-gray-500">8 min read</span>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2 leading-tight">Best Practices for Responsive Design</h4>
              <p class="text-sm text-gray-600 mb-4">Master responsive web design with modern CSS and frameworks.</p>
              <div class="flex items-center text-sm text-gray-500">
                <span>By Admin</span>
                <span class="mx-2">•</span>
                <span>Feb 5, 2026</span>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
            <div class="h-40 bg-gradient-to-br from-green-200 to-green-100 flex items-center justify-center text-5xl">⚙️</div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">Tips</span>
                <span class="text-xs text-gray-500">6 min read</span>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-2 leading-tight">JavaScript Performance Tips</h4>
              <p class="text-sm text-gray-600 mb-4">Optimize your JavaScript code for better performance and speed.</p>
              <div class="flex items-center text-sm text-gray-500">
                <span>By Admin</span>
                <span class="mx-2">•</span>
                <span>Feb 3, 2026</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="rounded-2xl p-8 md:p-12 text-white text-center" style="background: linear-gradient(to right, #221934, #221934); opacity: 0.95;">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">
          Never Miss an Article
        </h3>
        <p class="text-lg mb-8 max-w-2xl mx-auto" style="color: rgba(255, 255, 255, 0.8);">
          Subscribe to get notifications when new articles are published.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 min-w-0"
            style="--tw-ring-color: #221934;"
          />
          <button class="px-6 py-3 bg-white font-semibold rounded-lg transition-colors whitespace-nowrap" style="color: #221934;" @mouseenter="$event.target.style.backgroundColor = '#f3f4f6'" @mouseleave="$event.target.style.backgroundColor = '#ffffff'">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue'
import BaseButton from '../atoms/BaseButton.vue'
import FeatureCard from '../molecules/FeatureCard.vue'
</script>
