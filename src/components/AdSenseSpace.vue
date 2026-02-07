<template>
  <div class="my-12 p-6 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 text-center">
    <p class="text-sm text-gray-600 mb-4">Advertisement</p>
    <div class="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
      <div class="text-gray-400">
        <p class="text-lg font-semibold">Google AdSense</p>
        <p class="text-sm mt-2">Ad Space - {{ location }}</p>
      </div>
    </div>
    <p class="text-xs text-gray-500 mt-4">{{ location === 'article-middle' ? 'In-article ad' : 'End of article ad' }}</p>
  </div>
</template>

<script setup>
defineProps({
  location: {
    type: String,
    default: 'article-middle'
  }
})
</script>

<style scoped>
</style>
