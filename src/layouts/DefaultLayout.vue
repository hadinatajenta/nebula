<template>
  <div class="flex flex-col min-h-screen bg-white">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/organisms/AppHeader.vue'
import AppFooter from '../components/organisms/AppFooter.vue'
</script>

<style scoped>
</style>
