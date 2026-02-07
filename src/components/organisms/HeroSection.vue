<template>
  <section class="bg-white pt-12 md:pt-20 pb-16 md:pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div class="space-y-6 md:space-y-8">
          <div class="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold" style="background-color: rgba(34, 25, 52, 0.1); color: #221934;">
            <span class="w-2 h-2 rounded-full" style="background-color: #221934;"></span>
            Welcome to Nebula Blog
          </div>
          
          <div class="space-y-4">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Insights & Tips on
              <span class="bg-clip-text text-transparent" style="background-image: linear-gradient(to right, #221934, #221934);"> Personal Tech Journey</span>
            </h1>
            
            <p class="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
              Explore practical articles, honest reviews, and real-world tech insights. 
              Perfect for developers, students, and tech enthusiasts looking to learn and grow.
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <button class="px-6 md:px-8 py-3 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl" style="background-color: #221934;" @mouseenter="$event.target.style.backgroundColor = '#1a1227'" @mouseleave="$event.target.style.backgroundColor = '#221934'">
              Read Latest Articles
            </button>
            <button class="px-6 md:px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors">
              Subscribe
            </button>
          </div>

          <div class="grid grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-10 border-t border-gray-200">
            <div class="py-4">
              <div class="text-2xl md:text-3xl font-bold" style="color: #221934;">150+</div>
              <div class="text-xs md:text-sm text-gray-600">Articles</div>
            </div>
            <div class="py-4">
              <div class="text-2xl md:text-3xl font-bold" style="color: #221934;">50K+</div>
              <div class="text-xs md:text-sm text-gray-600">Readers</div>
            </div>
            <div class="py-4">
              <div class="text-2xl md:text-3xl font-bold" style="color: #221934;">15+</div>
              <div class="text-xs md:text-sm text-gray-600">Categories</div>
            </div>
          </div>
        </div>

        <div class="hidden md:flex items-center justify-center">
          <div class="relative w-full max-w-md">
            <div class="absolute top-0 right-0 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
            <div class="absolute bottom-0 left-0 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-60"></div>

            <div class="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-xl">
              <div class="space-y-4">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full" style="background-color: #221934;"></div>
                  <div class="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <div class="w-3 h-3 bg-purple-200 rounded-full"></div>
                </div>
                <div class="space-y-3 mt-6">
                  <div class="h-3 bg-gray-200 rounded-full w-4/5"></div>
                  <div class="h-3 bg-gray-200 rounded-full w-full"></div>
                  <div class="h-3 bg-gray-200 rounded-full w-3/4"></div>
                </div>
                <div class="h-32 bg-gradient-to-br from-purple-200 to-purple-100 rounded-xl mt-6 flex items-center justify-center">
                  <span class="text-4xl">📝</span>
                </div>
                <div class="grid grid-cols-2 gap-3 mt-6">
                  <div class="h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">💡</div>
                  <div class="h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue'
import BaseButton from '../atoms/BaseButton.vue'
</script>
