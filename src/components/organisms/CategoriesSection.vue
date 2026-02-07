<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Browse by Category
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our articles organized by popular topics and interests.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-200 to-purple-100 p-6 md:p-8 h-48 flex flex-col justify-between hover:shadow-lg transition-all">
            <div class="text-4xl md:text-5xl">🚀</div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-opacity-80 transition-colors">Web Development</h3>
              <p class="text-sm text-gray-700">45 Articles</p>
            </div>
          </div>
        </div>

        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-200 to-blue-100 p-6 md:p-8 h-48 flex flex-col justify-between hover:shadow-lg transition-all">
            <div class="text-4xl md:text-5xl">⚡</div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">JavaScript</h3>
              <p class="text-sm text-gray-700">38 Articles</p>
            </div>
          </div>
        </div>

        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-200 to-green-100 p-6 md:p-8 h-48 flex flex-col justify-between hover:shadow-lg transition-all">
            <div class="text-4xl md:text-5xl">🎨</div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">CSS & Design</h3>
              <p class="text-sm text-gray-700">32 Articles</p>
            </div>
          </div>
        </div>

        <div class="group cursor-pointer">
          <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-200 to-orange-100 p-6 md:p-8 h-48 flex flex-col justify-between hover:shadow-lg transition-all">
            <div class="text-4xl md:text-5xl">⚙️</div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors">Tools & Tips</h3>
              <p class="text-sm text-gray-700">28 Articles</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <a href="/categories" class="inline-flex items-center gap-2 font-semibold transition-colors" style="color: #221934;" @mouseenter="$event.target.style.color = '#1a1227'" @mouseleave="$event.target.style.color = '#221934'">
          View all categories <span>→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
