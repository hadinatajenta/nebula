<template>
  <div class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer group">
    <div class="h-40 bg-gradient-to-br overflow-hidden" :class="backgroundColor">
      <div class="w-full h-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
        {{ icon }}
      </div>
    </div>

    <div class="p-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xs font-semibold rounded-full px-3 py-1" :class="categoryClass">
          {{ category }}
        </span>
        <span class="text-xs text-gray-500">{{ readTime }} min read</span>
      </div>

      <h4 class="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-purple-700 transition-colors">
        {{ title }}
      </h4>

      <p class="text-sm text-gray-600 mb-4 line-clamp-2">
        {{ description }}
      </p>

      <div class="flex items-center text-sm text-gray-500">
        <span>{{ author }}</span>
        <span class="mx-2">•</span>
        <span>{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  categoryColor: {
    type: String,
    default: 'purple' // 'purple', 'blue', 'green', 'orange', etc
  },
  icon: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: 'Admin'
  },
  date: {
    type: String,
    required: true
  },
  readTime: {
    type: Number,
    default: 5
  }
})

const props = defineProps()

const categoryColorMap = {
  purple: { bg: 'from-purple-200 to-purple-100', text: 'text-purple-700 bg-purple-100' },
  blue: { bg: 'from-blue-200 to-blue-100', text: 'text-blue-700 bg-blue-100' },
  green: { bg: 'from-green-200 to-green-100', text: 'text-green-700 bg-green-100' },
  orange: { bg: 'from-orange-200 to-orange-100', text: 'text-orange-700 bg-orange-100' },
  pink: { bg: 'from-pink-200 to-pink-100', text: 'text-pink-700 bg-pink-100' },
  indigo: { bg: 'from-indigo-200 to-indigo-100', text: 'text-indigo-700 bg-indigo-100' }
}

const backgroundColor = `bg-gradient-to-br ${categoryColorMap[props.categoryColor]?.bg || categoryColorMap.purple.bg}`
const categoryClass = categoryColorMap[props.categoryColor]?.text || categoryColorMap.purple.text
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
