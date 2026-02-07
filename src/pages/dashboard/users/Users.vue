<template>
    <DashboardLayouts>
        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-2xl font-bold text-gray-800">Users Management</h1>
                    <p class="text-sm text-gray-500 mt-1">Manage users, roles, and permissions.</p>
                </div>
            </div>

            <div
                class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div class="relative w-full sm:w-96">
                    <Search :size="20" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search users..."
                        class="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all">
                </div>

                <div class="flex items-center gap-3 w-full sm:w-auto">
                    <button
                        class="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                        <Filter :size="18" />
                        <span>Filter</span>
                    </button>
                    <button
                        class="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                        <Download :size="18" />
                        <span>Export</span>
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="bg-gray-50/50 border-b border-gray-100">
                                <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">User
                                </th>
                                <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role
                                </th>
                                <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Status</th>
                                <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Last
                                    Active</th>
                                <th
                                    class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr v-for="user in mockUsers" :key="user.id"
                                class="group hover:bg-blue-50/30 transition-colors">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-4">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                                            {{ user.name.charAt(0) }}
                                        </div>
                                        <div>
                                            <div class="text-sm font-semibold text-gray-800">{{ user.name }}</div>
                                            <div class="text-xs text-gray-500">{{ user.email }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                                        {{ user.role }}
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    <span :class="[
                                        'inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium border',
                                        user.status === 'Active'
                                            ? 'bg-green-50 text-green-700 border-green-100'
                                            : 'bg-red-50 text-red-700 border-red-100'
                                    ]">
                                        <span class="w-1.5 h-1.5 rounded-full mr-1.5"
                                            :class="user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'"></span>
                                        {{ user.status }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500">
                                    {{ user.lastActive }}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button
                                        class="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                        <MoreHorizontal :size="20" />
                                    </button>
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
import DashboardLayouts from '../../../layouts/DashboardLayouts.vue';
import { Plus, Search, Filter, Download, MoreHorizontal } from 'lucide-vue-next';

const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@rosenebula.com', role: 'Admin', status: 'Active', lastActive: '2 mins ago' },
    { id: 2, name: 'Alice Smith', email: 'alice@rosenebula.com', role: 'Editor', status: 'Active', lastActive: '1 hr ago' },
    { id: 3, name: 'Robert Fox', email: 'robert@rosenebula.com', role: 'Viewer', status: 'Inactive', lastActive: '3 days ago' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@rosenebula.com', role: 'Editor', status: 'Active', lastActive: '5 mins ago' },
    { id: 5, name: 'Mike Johnson', email: 'mike@rosenebula.com', role: 'Viewer', status: 'Active', lastActive: '1 day ago' },
]
</script>

<style scoped></style>