<template>
    <DashboardLayouts>
        <div class="space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">Posts</h1>
                    <p class="text-gray-500 mt-1">Manage your blog posts and articles</p>
                </div>
                <router-link to="/dashboard/posts/create"
                    class="px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-md transition-transform active:scale-95 hover:shadow-lg">
                    + New Post
                </router-link>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-gray-500 text-sm font-medium">Total Posts</span>
                    </div>
                    <div class="text-3xl font-bold text-gray-800 mb-1">1,234</div>
                </div>

                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-gray-500 text-sm font-medium">Published</span>
                    </div>
                    <div class="text-3xl font-bold text-gray-800 mb-1">892</div>
                </div>

                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-gray-500 text-sm font-medium">Drafts</span>
                    </div>
                    <div class="text-3xl font-bold text-gray-800 mb-1">342</div>
                </div>
            </div>

            <!-- Posts Table -->
            <div
                class="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden">
                <div class="p-6 border-b border-gray-100">
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Title</th>
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Category</th>
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status</th>
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Date</th>
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="hover:bg-gray-50 transition-colors">
                                <td class="px-6 py-4 text-sm font-medium text-gray-800">Getting Started with Vue 3</td>
                                <td class="px-6 py-4 text-sm text-gray-600">Tutorial</td>
                                <td class="px-6 py-4">
                                    <span
                                        class="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Published</span>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-600">Jan 15, 2026</td>
                                <td class="px-6 py-4 text-sm">
                                    <button class="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition-colors">
                                <td class="px-6 py-4 text-sm font-medium text-gray-800">Advanced Tailwind CSS</td>
                                <td class="px-6 py-4 text-sm text-gray-600">Design</td>
                                <td class="px-6 py-4">
                                    <span
                                        class="px-3 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">Draft</span>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-600">Jan 12, 2026</td>
                                <td class="px-6 py-4 text-sm">
                                    <button class="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition-colors">
                                <td class="px-6 py-4 text-sm font-medium text-gray-800">State Management with Pinia</td>
                                <td class="px-6 py-4 text-sm text-gray-600">Tutorial</td>
                                <td class="px-6 py-4">
                                    <span
                                        class="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Published</span>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-600">Jan 10, 2026</td>
                                <td class="px-6 py-4 text-sm">
                                    <button class="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </DashboardLayouts>
</template>

<script setup>
import DashboardLayouts from '../../../layouts/DashboardLayouts.vue'
</script>

<style scoped></style>