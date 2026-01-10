<template>
  <section class="bg-gradient-to-br from-primary via-secondary to-primary py-20 md:py-32">
    <div class="container-custom">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6">
          <div class="inline-block">
            <span class="bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium">
              Welcome to Blog Tech
            </span>
          </div>
          
          <BaseText tag="h1" variant="h1" color="white" class="leading-tight">
            Your Gateway to
            <span class="text-accent"> Tech Insights</span>
          </BaseText>
          
          <BaseText variant="body" color="light" class="text-lg opacity-90 max-w-xl">
            Discover cutting-edge technology articles, tutorials, and insights. 
            Stay ahead in the fast-paced world of software development, AI, and digital innovation.
          </BaseText>
          
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <BaseButton variant="primary" size="lg">
              Explore Articles
            </BaseButton>
            <BaseButton variant="outline" size="lg" class="!border-white !text-white hover:!bg-white hover:!text-primary">
              Learn More
            </BaseButton>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div>
              <BaseText tag="div" variant="h3" color="accent" weight="bold">500+</BaseText>
              <BaseText variant="small" color="light" class="opacity-75">Articles</BaseText>
            </div>
            <div>
              <BaseText tag="div" variant="h3" color="accent" weight="bold">50K+</BaseText>
              <BaseText variant="small" color="light" class="opacity-75">Readers</BaseText>
            </div>
            <div>
              <BaseText tag="div" variant="h3" color="accent" weight="bold">100+</BaseText>
              <BaseText variant="small" color="light" class="opacity-75">Topics</BaseText>
            </div>
          </div>
        </div>

        <!-- Right Content - Illustration -->
        <div class="hidden md:block">
          <div class="relative">
            <div class="absolute inset-0 bg-accent opacity-20 blur-3xl rounded-full"></div>
            <div class="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div class="space-y-4">
                <div class="h-4 bg-accent bg-opacity-40 rounded w-3/4"></div>
                <div class="h-4 bg-white bg-opacity-30 rounded w-full"></div>
                <div class="h-4 bg-white bg-opacity-30 rounded w-5/6"></div>
                <div class="h-32 bg-accent bg-opacity-20 rounded-lg mt-6"></div>
                <div class="grid grid-cols-2 gap-4 mt-4">
                  <div class="h-20 bg-white bg-opacity-20 rounded"></div>
                  <div class="h-20 bg-white bg-opacity-20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue'
import BaseButton from '../atoms/BaseButton.vue'
</script>
