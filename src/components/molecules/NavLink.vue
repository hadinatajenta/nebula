<template>
  <router-link
    :to="to"
    class="text-base font-medium transition-colors duration-200 hover:text-accent"
    :class="isActive ? 'text-accent' : 'text-primary'"
  >
    <slot />
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>
