<template>
    <DashboardLayouts>
        <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600">
                            <UsersIcon :size="24" />
                        </div>
                        <span
                            class="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                            +12%
                            <ArrowUpRight :size="14" />
                        </span>
                    </div>
                    <div class="text-3xl font-bold text-gray-800 mb-1">1,234</div>
                    <div class="text-sm text-gray-500 font-medium">Total Posts</div>
                </div>

                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-green-600">
                            <Activity :size="24" />
                        </div>
                        <span
                            class="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                            +5%
                            <ArrowUpRight :size="14" />
                        </span>
                    </div>
                    <div class="text-3xl font-bold text-gray-800 mb-1">892</div>
                    <div class="text-sm text-gray-500 font-medium">Draft Posts</div>
                </div>

                <div
                    class="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-50 text-violet-600">
                            <UserPlus :size="24" />
                        </div>
                        <span
                            class="flex items-center gap-1 text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-lg">
                            -2%
                            <ArrowDownRight :size="14" />
                        </span>
                    </div>
                    <div class="text-3xl font-bold text-gray-800 mb-1">45</div>
                    <div class="text-sm text-gray-500 font-medium">New Users (7d)</div>
                </div>
            </div>


        </div>
    </DashboardLayouts>
</template>

<script setup>
import DashboardLayouts from '../layouts/DashboardLayouts.vue';
import { Users as UsersIcon, Activity, UserPlus, ArrowUpRight, ArrowDownRight } from 'lucide-vue-next';
</script>

<style scoped></style>