<template>
    <DashboardLayouts>
        <div class="space-y-6 mb-4">
            <div>
                <h1 class="text-3xl font-bold text-gray-800">Categories</h1>
                <p class="text-gray-500 mt-1">Organize your content with categories</p>
            </div>
            <button
                class="px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-md transition-transform active:scale-95 hover:shadow-lg">
                + New Category
            </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(category, index) in categories" :key="index"
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                {{ category.categoryName.charAt(0) }}
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">{{ category.categoryName }}</h3>
                                <p class="text-sm text-gray-500">{{ category.posts }} posts</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">{{ category.description }}</p>
                    <div class="flex gap-2">
                        <BaseButton :variant="'secondary'" :size="'sm'" class="flex-1">                            
                            Edit
                        </BaseButton>
                        <BaseButton :variant="'danger'" :size="'sm'">                           
                            Delete
                        </BaseButton>
                    </div>
                </div>
            </div>
    </DashboardLayouts>
</template>

<script setup>
import DashboardLayouts from '../../../layouts/DashboardLayouts.vue'
import BaseButton from '../../../components/atoms/BaseButton.vue'

const categories = [
    {
        categoryName : 'Tutorial',
        description : 'Step-by-step guides and tutorials for developers',
        posts : 42
    },
    {
        categoryName : 'Case Study',
        description : 'Real-world project case studies and analyses',
        posts : 15
    },
    {
        categoryName : 'Resources',
        description : 'Useful resources and tools for developers',
        posts : 22
    },
    {
        categoryName : 'Best Practices',
        description : 'Industry best practices and coding standards',
        posts : 30
    },
    {
        categoryName : 'Tools',
        description : 'Development tools and software recommendations',
        posts : 18
    }
]
</script>

<style scoped></style>
