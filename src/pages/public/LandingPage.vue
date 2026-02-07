<template>
  <div class="landing-page bg-white">
    <AppHeader />
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturesSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../../components/organisms/AppHeader.vue'
import HeroSection from '../../components/organisms/HeroSection.vue'
import CategoriesSection from '../../components/organisms/CategoriesSection.vue'
import FeaturesSection from '../../components/organisms/FeaturesSection.vue'
import AppFooter from '../../components/organisms/AppFooter.vue'
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
