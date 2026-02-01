<template>
    <div class="flex min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e9ecef]">
        <Sidebar ref="sidebarRef" />

        <main
            class="flex-1 flex flex-col ml-0 lg:ml-[280px] transition-[margin] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] has-[.sidebar-collapsed]:lg:ml-20">
            <header
                class="sticky top-0 z-[100] flex items-center gap-4 px-6 py-4 bg-white border-b border-gray-200 shadow-sm lg:hidden">
                <button
                    class="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg text-white border-none cursor-pointer transition-all duration-300 shadow-[0_2px_8px_rgba(99,102,241,0.3)] hover:scale-105 hover:shadow-[0_4px_12px_rgba(99,102,241,0.4)] active:scale-95"
                    @click="toggleMobileMenu" aria-label="Toggle menu">
                    <Menu :size="24" />
                </button>
                <h1 class="text-xl font-bold text-gray-800 m-0">Dashboard</h1>
            </header>

            <div class="flex-1 p-4 sm:p-6 lg:p-8">
                <slot />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'lucide-vue-next'
import Sidebar from '../components/dashboard/Sidebar.vue'

const sidebarRef = ref(null)

const toggleMobileMenu = () => {
    if (sidebarRef.value) {
        sidebarRef.value.toggleSidebar()
    }
}
</script>

<style>
/*
   Selecting the main content when sidebar is collapsed (w-20 class is present on sidebar)
   This mimics the :has() selector behavior for the sidebar state
*/
@media (min-width: 1024px) {
    aside.w-20+main {
        margin-left: 5rem !important;
    }
}
</style>