<template>
  <header class="bg-white sticky top-0 z-50 border-b border-gray-100">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <div class="flex items-center gap-2 flex-shrink-0">
          <div class="w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center shadow-lg" style="background-color: #221934;">
            <span class="text-white text-lg md:text-xl font-bold">N</span>
          </div>
          <span class="text-lg md:text-xl font-bold text-gray-900 hidden sm:inline">Nebula</span>
        </div>

        <div class="hidden md:flex items-center gap-1">
          <NavLink 
            to="/" 
            class="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors nav-link"
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            class="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors nav-link"
          >
            About
          </NavLink>
          <NavLink 
            to="/blog" 
            class="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors nav-link"
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact" 
            class="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors nav-link"
          >
            Contact
          </NavLink>
        </div>

        <div class="hidden md:flex items-center gap-3">
          <BaseButton 
            variant="secondary" 
            size="sm"
            class="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
            style="background-color: #221934;"
            @mouseenter="$event.target.style.backgroundColor = '#1a1227'"
            @mouseleave="$event.target.style.backgroundColor = '#221934'"
          >
            Get Started
          </BaseButton>
        </div>

        <button 
          class="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          style="--hover-color: #221934;"
          @click="toggleMobileMenu"
        >
          <svg 
            v-if="!mobileMenuOpen"
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg 
            v-else
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-100 bg-gray-50">
          <div class="px-4 py-4 space-y-2">
            <NavLink 
              to="/" 
              class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors nav-link"
              @click="mobileMenuOpen = false"
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors nav-link"
              @click="mobileMenuOpen = false"
            >
              About
            </NavLink>
            <NavLink 
              to="/blog" 
              class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors nav-link"
              @click="mobileMenuOpen = false"
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              class="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors nav-link"
              @click="mobileMenuOpen = false"
            >
              Contact
            </NavLink>
            <BaseButton 
              variant="secondary" 
              size="sm"
              class="w-full px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
              style="background-color: #221934;"
              @mouseenter="$event.target.style.backgroundColor = '#1a1227'"
              @mouseleave="$event.target.style.backgroundColor = '#221934'"
            >
              Get Started
            </BaseButton>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../atoms/BaseButton.vue'
import NavLink from '../molecules/NavLink.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.nav-link:hover {
  color: #221934;
}
</style>
