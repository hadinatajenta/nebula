<template>
    <DashboardLayouts>
        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-2xl font-bold text-gray-800">Import/Export Users</h1>
                    <p class="text-sm text-gray-500 mt-1">Import users from CSV or export user data.</p>
                </div>
            </div>

            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h2 class="text-lg font-semibold text-gray-900">Export Users</h2>
                        <p class="text-sm text-gray-500 mt-1">Download user data in CSV format</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="space-y-2">
                        <label class="text-sm font-medium text-gray-700">Select Export Format</label>
                        <select
                            class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all">
                            <option>CSV Format</option>
                            <option>Excel Format (.xlsx)</option>
                            <option>JSON Format</option>
                        </select>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm font-medium text-gray-700">Select Columns to Export</label>
                        <div class="grid grid-cols-2 gap-3">
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" checked class="w-4 h-4 text-blue-600 rounded">
                                <span class="text-sm text-gray-700">Name</span>
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" checked class="w-4 h-4 text-blue-600 rounded">
                                <span class="text-sm text-gray-700">Email</span>
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" checked class="w-4 h-4 text-blue-600 rounded">
                                <span class="text-sm text-gray-700">Role</span>
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" checked class="w-4 h-4 text-blue-600 rounded">
                                <span class="text-sm text-gray-700">Status</span>
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" class="w-4 h-4 text-blue-600 rounded">
                                <span class="text-sm text-gray-700">Created Date</span>
                            </label>
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" class="w-4 h-4 text-blue-600 rounded">
                                <span class="text-sm text-gray-700">Last Active</span>
                            </label>
                        </div>
                    </div>

                    <button
                        class="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                        <Download :size="18" />
                        <span>Export Users</span>
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h2 class="text-lg font-semibold text-gray-900">Import Users</h2>
                        <p class="text-sm text-gray-500 mt-1">Import users from CSV or Excel file</p>
                    </div>
                </div>

                <div class="space-y-4">
                    <div
                        class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer">
                        <Upload :size="32" class="mx-auto text-gray-400 mb-2" />
                        <p class="text-sm font-medium text-gray-900">Drag and drop your file here</p>
                        <p class="text-xs text-gray-500 mt-1">or click to browse (CSV, XLSX)</p>
                        <input type="file" class="hidden" accept=".csv,.xlsx" />
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm font-medium text-gray-700">Duplicate Handling</label>
                        <select
                            class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all">
                            <option>Skip duplicates</option>
                            <option>Update existing users</option>
                            <option>Replace all users</option>
                        </select>
                    </div>

                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" class="w-4 h-4 text-blue-600 rounded">
                        <span class="text-sm text-gray-700">Send welcome email to imported users</span>
                    </label>

                    <button
                        class="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                        <Upload :size="18" />
                        <span>Import Users</span>
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Import Template</h2>
                <p class="text-sm text-gray-600 mb-4">Download a CSV template to use for importing users</p>
                <button
                    class="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                    <FileDown :size="18" />
                    <span>Download CSV Template</span>
                </button>
            </div>
        </div>
    </DashboardLayouts>
</template>

<script setup>
import DashboardLayouts from '../../../layouts/DashboardLayouts.vue'
import { Download, Upload, FileDown } from 'lucide-vue-next'
</script>

<style scoped>
</style>
