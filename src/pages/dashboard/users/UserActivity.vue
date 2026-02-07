<template>
    <DashboardLayouts>
        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-2xl font-bold text-gray-800">Users Activity</h1>
                    <p class="text-sm text-gray-500 mt-1">Track user activities and login history.</p>
                </div>
            </div>

            <div class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div class="relative w-full sm:w-96">
                    <Search :size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search activities..."
                        class="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all">
                </div>

                <div class="flex items-center gap-3 w-full sm:w-auto">
                    <button
                        class="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                        <Filter :size="18" />
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="bg-gray-50/50 border-b border-gray-100">
                                <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                                <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Activity</th>
                                <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date & Time</th>
                                <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">IP Address</th>
                                <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr class="hover:bg-gray-50/50 transition-colors">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                                            JD
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-900">John Doe</p>
                                            <p class="text-sm text-gray-500">john@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-600">Login</td>
                                <td class="px-6 py-4 text-sm text-gray-600">Feb 07, 2026 10:30 AM</td>
                                <td class="px-6 py-4 text-sm text-gray-600">192.168.1.1</td>
                                <td class="px-6 py-4">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Success
                                    </span>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50/50 transition-colors">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center text-white font-semibold">
                                            SM
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-900">Sarah Miller</p>
                                            <p class="text-sm text-gray-500">sarah@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-600">Profile Update</td>
                                <td class="px-6 py-4 text-sm text-gray-600">Feb 06, 2026 03:15 PM</td>
                                <td class="px-6 py-4 text-sm text-gray-600">192.168.1.5</td>
                                <td class="px-6 py-4">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Success
                                    </span>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50/50 transition-colors">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-semibold">
                                            RC
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-900">Robert Chen</p>
                                            <p class="text-sm text-gray-500">robert@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-600">Password Change</td>
                                <td class="px-6 py-4 text-sm text-gray-600">Feb 05, 2026 08:45 AM</td>
                                <td class="px-6 py-4 text-sm text-gray-600">192.168.2.10</td>
                                <td class="px-6 py-4">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Failed
                                    </span>
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
import { Search, Filter } from 'lucide-vue-next'
</script>

<style scoped>
</style>
