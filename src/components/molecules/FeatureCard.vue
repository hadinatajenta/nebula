<template>
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
    <div v-if="icon" class="p-6 pb-4">
      <div class="w-14 h-14 rounded-lg bg-accent bg-opacity-10 flex items-center justify-center mb-4">
        <span class="text-3xl">{{ icon }}</span>
      </div>
    </div>
    
    <div class="p-6" :class="{ 'pt-2': icon }">
      <BaseText v-if="title" tag="h3" variant="h4" class="mb-3">
        {{ title }}
      </BaseText>
      
      <BaseText v-if="description" variant="body" color="secondary" class="mb-4">
        {{ description }}
      </BaseText>
      
      <slot />
    </div>
  </div>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue'

defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>
