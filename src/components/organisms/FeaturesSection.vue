<template>
  <section class="py-20 bg-light">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <BaseText tag="h2" variant="h2" color="primary" class="mb-4">
          Why Choose Blog Tech?
        </BaseText>
        <BaseText variant="body" color="secondary" class="max-w-2xl mx-auto">
          We provide high-quality, well-researched content that helps developers and tech enthusiasts 
          stay informed and grow their skills.
        </BaseText>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon="📚"
          title="Comprehensive Tutorials"
          description="Step-by-step guides covering everything from basics to advanced topics in modern web development, cloud computing, and more."
        />
        
        <FeatureCard
          icon="⚡"
          title="Latest Tech Trends"
          description="Stay updated with the newest technologies, frameworks, and best practices in the ever-evolving tech landscape."
        />
        
        <FeatureCard
          icon="💡"
          title="Expert Insights"
          description="Learn from industry professionals sharing their real-world experiences and proven solutions to common challenges."
        />
        
        <FeatureCard
          icon="🎯"
          title="Practical Examples"
          description="Every article includes working code examples and practical demonstrations you can use in your own projects."
        />
        
        <FeatureCard
          icon="🚀"
          title="Career Growth"
          description="Advance your career with content designed to help you master in-demand skills and stay competitive."
        />
        
        <FeatureCard
          icon="🌐"
          title="Community Driven"
          description="Join a vibrant community of learners and contributors sharing knowledge and supporting each other."
        />
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-accent to-secondary rounded-2xl p-12 text-white">
          <BaseText tag="h3" variant="h3" color="white" class="mb-4">
            Ready to Level Up Your Tech Knowledge?
          </BaseText>
          <BaseText variant="body" color="white" class="mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of developers who trust Blog Tech for their daily dose of tech insights.
          </BaseText>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton variant="outline" size="lg" class="!border-white !text-white hover:!bg-white hover:!text-accent">
              Browse Articles
            </BaseButton>
            <BaseButton variant="secondary" size="lg" class="!bg-white !text-accent hover:!bg-opacity-90">
              Subscribe Now
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseText from '../atoms/BaseText.vue'
import BaseButton from '../atoms/BaseButton.vue'
import FeatureCard from '../molecules/FeatureCard.vue'
</script>
