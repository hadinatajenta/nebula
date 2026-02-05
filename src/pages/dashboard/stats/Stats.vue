<template>
    <DashboardLayouts>
        <div class="space-y-6">
            <!-- Header -->
            <div>
                <h1 class="text-3xl font-bold text-gray-800">Statistics</h1>
                <p class="text-gray-500 mt-1">Analytics and insights for your content</p>
            </div>

            <!-- Key Metrics -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                    </div>
                    <div class="text-2xl font-bold text-gray-800 mb-1">45,832</div>
                    <div class="text-sm text-gray-500 font-medium">Total Views</div>
                    <div class="mt-2 text-sm text-green-600 font-medium">+12.5%</div>
                </div>

                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                    <div class="text-2xl font-bold text-gray-800 mb-1">12,453</div>
                    <div class="text-sm text-gray-500 font-medium">Unique Visitors</div>
                    <div class="mt-2 text-sm text-green-600 font-medium">+8.2%</div>
                </div>

                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <div class="text-2xl font-bold text-gray-800 mb-1">3m 24s</div>
                    <div class="text-sm text-gray-500 font-medium">Avg. Time</div>
                    <div class="mt-2 text-sm text-green-600 font-medium">+15.3%</div>
                </div>

                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-orange-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                    </div>
                    <div class="text-2xl font-bold text-gray-800 mb-1">64.3%</div>
                    <div class="text-sm text-gray-500 font-medium">Bounce Rate</div>
                    <div class="mt-2 text-sm text-red-600 font-medium">-5.1%</div>
                </div>
            </div>

            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Views Chart -->
                <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                    <h2 class="text-xl font-semibold text-gray-800 mb-6">Views Over Time</h2>
                    <div class="h-64 flex items-end justify-between gap-2">
                        <div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                            style="height: 45%;">
                        </div>
                        <div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                            style="height: 60%;">
                        </div>
                        <div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                            style="height: 75%;">
                        </div>
                        <div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                            style="height: 55%;">
                        </div>
                        <div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                            style="height: 85%;">
                        </div>
                        <div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                            style="height: 70%;">
                        </div>
                        <div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                            style="height: 90%;">
                        </div>
                    </div>
                    <div class="flex justify-between mt-4 text-xs text-gray-500 font-medium">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </div>

                <!-- Top Posts -->
                <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                    <h2 class="text-xl font-semibold text-gray-800 mb-6">Top Performing Posts</h2>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <div class="flex-1">
                                <h3 class="text-sm font-semibold text-gray-800">Getting Started with Vue 3</h3>
                                <p class="text-xs text-gray-500 mt-1">8,542 views</p>
                            </div>
                            <div class="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                                    style="width: 95%;"></div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex-1">
                                <h3 class="text-sm font-semibold text-gray-800">Advanced Tailwind CSS</h3>
                                <p class="text-xs text-gray-500 mt-1">6,234 views</p>
                            </div>
                            <div class="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                                    style="width: 73%;"></div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex-1">
                                <h3 class="text-sm font-semibold text-gray-800">State Management with Pinia</h3>
                                <p class="text-xs text-gray-500 mt-1">5,891 views</p>
                            </div>
                            <div class="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                                    style="width: 69%;"></div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex-1">
                                <h3 class="text-sm font-semibold text-gray-800">Modern JavaScript Features</h3>
                                <p class="text-xs text-gray-500 mt-1">4,765 views</p>
                            </div>
                            <div class="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                                    style="width: 56%;"></div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex-1">
                                <h3 class="text-sm font-semibold text-gray-800">Building REST APIs</h3>
                                <p class="text-xs text-gray-500 mt-1">3,982 views</p>
                            </div>
                            <div class="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"
                                    style="width: 47%;"></div>
                            </div>
                        </div>
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
