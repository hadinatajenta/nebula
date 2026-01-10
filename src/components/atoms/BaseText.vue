<template>
  <component :is="tag" :class="textClasses">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'p',
    validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(value)
  },
  variant: {
    type: String,
    default: 'body',
    validator: (value) => ['h1', 'h2', 'h3', 'h4', 'body', 'small', 'caption'].includes(value)
  },
  color: {
    type: String,
    default: 'primary'
  },
  weight: {
    type: String,
    default: 'normal',
    validator: (value) => ['light', 'normal', 'medium', 'semibold', 'bold'].includes(value)
  }
})

const textClasses = computed(() => {
  const variants = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug',
    h4: 'text-xl md:text-2xl lg:text-3xl font-medium leading-snug',
    body: 'text-base md:text-lg leading-relaxed',
    small: 'text-sm md:text-base leading-relaxed',
    caption: 'text-xs md:text-sm leading-normal'
  }
  
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }
  
  const colors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    light: 'text-light',
    white: 'text-white'
  }
  
  return `${variants[props.variant]} ${weights[props.weight]} ${colors[props.color]}`
})
</script>
