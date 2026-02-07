<template>
  <DefaultLayout>
    <div class="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div class="bg-white rounded-2xl shadow-md overflow-hidden">
        <div class="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 overflow-hidden">
          <img :src="article.featuredImage" :alt="article.title" class="w-full h-full object-cover" />
        </div>

        <div class="p-6 md:p-10 lg:p-12">
          <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 text-sm font-medium text-white rounded-full" :style="{ backgroundColor: article.categoryColor }">
                {{ article.category }}
              </span>
              <span class="text-sm text-gray-500">{{ formatDate(article.publishedDate) }}</span>
            </div>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <Clock class="w-4 h-4" />
              <span>{{ article.readTime }} min read</span>
            </div>
          </div>

          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {{ article.title }}
          </h1>

          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            {{ article.description }}
          </p>

          <div class="flex items-center justify-between mb-10 pb-8 border-b border-gray-200">
            <div class="flex items-center gap-4">
              <img :src="article.authorAvatar" :alt="article.author" class="w-12 h-12 rounded-full object-cover" />
              <div>
                <p class="font-semibold text-gray-900">{{ article.author }}</p>
                <p class="text-sm text-gray-500">Published {{ formatDate(article.publishedDate) }}</p>
              </div>
            </div>
            <button 
              @click="shareArticle(article.slug)"
              class="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              :style="{ 
                backgroundColor: isShared ? '#10b981' : '#f3f4f6',
                color: isShared ? 'white' : '#221934'
              }"
              @mouseenter="!isShared && ($event.target.style.backgroundColor = '#e5e7eb')"
              @mouseleave="!isShared && ($event.target.style.backgroundColor = '#f3f4f6')">
              <Share2 class="w-4 h-4" />
              <span>{{ isShared ? 'Copied!' : 'Share' }}</span>
            </button>
          </div>

          <div class="prose prose-lg max-w-none mb-12 text-gray-700">
            <p v-for="(paragraph, idx) in article.content" :key="idx" class="mb-6 leading-relaxed">
              {{ paragraph }}
            </p>
          </div>

          <AdSenseSpace location="article-middle" />

          <div class="bg-gray-50 rounded-xl p-6 mb-12">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">About the Author</h3>
            <div class="flex gap-4">
              <img :src="article.authorAvatar" :alt="article.author" class="w-16 h-16 rounded-full object-cover flex-shrink-0" />
              <div>
                <p class="font-semibold text-gray-900 mb-2">{{ article.author }}</p>
                <p class="text-sm text-gray-600">{{ article.authorBio }}</p>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Related Articles</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article 
                v-for="item in relatedArticles" 
                :key="item.id"
                class="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
                @click="$router.push(`/read/${item.slug}`)">
                <div class="aspect-video bg-gradient-to-br from-purple-300 to-blue-300 overflow-hidden">
                  <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div class="p-4">
                  <span class="text-xs font-medium text-white px-2 py-1 rounded" :style="{ backgroundColor: item.categoryColor }">
                    {{ item.category }}
                  </span>
                  <h4 class="font-semibold text-gray-900 mt-3 line-clamp-2 hover:text-purple-600 transition-colors">
                    {{ item.title }}
                  </h4>
                  <p class="text-sm text-gray-500 mt-2">{{ item.readTime }} min read</p>
                </div>
              </article>
            </div>
          </div>

          <AdSenseSpace location="article-bottom" />
        </div>
      </div>

      <div class="mt-8 text-center">
        
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Clock, Share2 } from 'lucide-vue-next'
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import AdSenseSpace from '../../components/AdSenseSpace.vue'
import { useArticle } from '../../composables/useArticle'

const route = useRoute()
const router = useRouter()
const { isShared, shareArticle, formatDate } = useArticle()

const article = ref({
  id: 1,
  slug: 'how-to-build-modern-web-apps',
  title: 'How to Build Modern Web Applications with Vue 3',
  description: 'Learn the best practices and techniques for building scalable, maintainable web applications using Vue 3 and modern JavaScript tools.',
  category: 'Tutorial',
  categoryColor: '#221934',
  featuredImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
  content: [
    'Vue 3 is a powerful JavaScript framework that makes it easy to build interactive user interfaces. In this comprehensive guide, we\'ll explore how to leverage Vue 3\'s Composition API to build modern, scalable web applications.',
    'One of the key benefits of Vue 3 is its reactive system. This allows your application to automatically update the DOM whenever your data changes, making it much easier to manage complex state.',
    'The Composition API is a new way to write Vue components that emphasizes reusability and code organization. Instead of relying on options API, you can now use functions to organize your code logically.',
    'When building web applications, it\'s important to think about performance. Vue 3 comes with several built-in optimizations that can help your application run faster and use less memory.',
    'By following best practices and using the tools available in Vue 3, you can build web applications that are not only powerful and feature-rich, but also maintainable and easy to understand.',
  ],
  author: 'John Doe',
  authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  authorBio: 'Full-stack developer with 10+ years of experience building web applications. Passionate about clean code and modern development practices.',
  publishedDate: '2024-02-05',
  readTime: 8,
})

const relatedArticles = ref([
  {
    id: 2,
    slug: 'vue-3-composition-api-guide',
    title: 'Vue 3 Composition API: Complete Guide',
    category: 'Tutorial',
    categoryColor: '#3b82f6',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
    readTime: 6,
  },
  {
    id: 3,
    slug: 'optimize-your-vue-applications',
    title: 'Performance Tips: Optimizing Vue Applications',
    category: 'Tips',
    categoryColor: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    readTime: 5,
  },
])

// const formatDate = (dateString) => {
//   const options = { year: 'numeric', month: 'long', day: 'numeric' }
//   return new Date(dateString).toLocaleDateString('en-US', options)
// }

// const shareArticle = async () => {
//   const shareUrl = `${window.location.origin}/read/${article.value.slug}`
//   try {
//     await navigator.clipboard.writeText(shareUrl)
//     isShared.value = true
//     setTimeout(() => {
//       isShared.value = false
//     }, 2000)
//   } catch (err) {
//     console.error('Failed to copy:', err)
//   }
// }

onMounted(() => {
  const slug = route.params.slug
  console.log('Loading article with slug:', slug)
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
