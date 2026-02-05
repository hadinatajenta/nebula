<template>
    <DashboardLayouts>
        <div class="space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">Categories</h1>
                    <p class="text-gray-500 mt-1">Organize your content with categories</p>
                </div>
                <button
                    class="px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-md transition-transform active:scale-95 hover:shadow-lg">
                    + New Category
                </button>
            </div>

            <!-- Category Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Category Card 1 -->
                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                T
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">Tutorial</h3>
                                <p class="text-sm text-gray-500">45 posts</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">Step-by-step guides and tutorials for developers</p>
                    <div class="flex gap-2">
                        <button
                            class="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            Edit
                        </button>
                        <button
                            class="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            Delete
                        </button>
                    </div>
                </div>

                <!-- Category Card 2 -->
                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                D
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">Design</h3>
                                <p class="text-sm text-gray-500">32 posts</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">UI/UX design principles and best practices</p>
                    <div class="flex gap-2">
                        <button
                            class="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            Edit
                        </button>
                        <button
                            class="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            Delete
                        </button>
                    </div>
                </div>

                <!-- Category Card 3 -->
                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                                N
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">News</h3>
                                <p class="text-sm text-gray-500">28 posts</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">Latest news and updates from the tech world</p>
                    <div class="flex gap-2">
                        <button
                            class="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            Edit
                        </button>
                        <button
                            class="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            Delete
                        </button>
                    </div>
                </div>

                <!-- Category Card 4 -->
                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                                R
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">Reviews</h3>
                                <p class="text-sm text-gray-500">19 posts</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">In-depth reviews of tools and technologies</p>
                    <div class="flex gap-2">
                        <button
                            class="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            Edit
                        </button>
                        <button
                            class="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            Delete
                        </button>
                    </div>
                </div>

                <!-- Category Card 5 -->
                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                                C
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">Case Study</h3>
                                <p class="text-sm text-gray-500">15 posts</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">Real-world project case studies and analyses</p>
                    <div class="flex gap-2">
                        <button
                            class="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            Edit
                        </button>
                        <button
                            class="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            Delete
                        </button>
                    </div>
                </div>

                <!-- Category Card 6 -->
                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                                R
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">Resources</h3>
                                <p class="text-sm text-gray-500">22 posts</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">Useful resources and tools for developers</p>
                    <div class="flex gap-2">
                        <button
                            class="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            Edit
                        </button>
                        <button
                            class="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayouts>
</template>

<script setup>
import DashboardLayouts from '../../../layouts/DashboardLayouts.vue'
</script>

<style scoped></style>
