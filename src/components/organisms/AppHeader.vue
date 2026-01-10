<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
    <nav class="container-custom py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span class="text-white text-xl font-bold">B</span>
          </div>
          <BaseText tag="span" variant="h4" weight="bold" color="primary">
            Blog Tech
          </BaseText>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <BaseButton variant="primary" size="sm">
            Get Started
          </BaseButton>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2" @click="toggleMobileMenu">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-4">
        <NavLink to="/" class="block">Home</NavLink>
        <NavLink to="/about" class="block">About</NavLink>
        <NavLink to="/blog" class="block">Blog</NavLink>
        <NavLink to="/contact" class="block">Contact</NavLink>
        <BaseButton variant="primary" size="sm" class="w-full">
          Get Started
        </BaseButton>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import BaseText from '../atoms/BaseText.vue'
import BaseButton from '../atoms/BaseButton.vue'
import NavLink from '../molecules/NavLink.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
