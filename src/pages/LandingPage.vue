<template>
  <div class="landing-page">
    <AppHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/organisms/AppHeader.vue'
import HeroSection from '../components/organisms/HeroSection.vue'
import FeaturesSection from '../components/organisms/FeaturesSection.vue'
import AppFooter from '../components/organisms/AppFooter.vue'
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
