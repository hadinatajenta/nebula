<template>
    <div class="relative">
        <transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="isOpen && isMobile" class="fixed inset-0 bg-black/50 z-[999] backdrop-blur-[4px]"
                @click="toggleSidebar"></div>
        </transition>

        <aside :class="[
            'fixed left-0 top-0 h-screen bg-gradient-to-b from-white via-[#fefcf9] to-[#faf8f5] flex flex-col transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-[1000] shadow-[2px_0_16px_rgba(0,0,0,0.08)] overflow-hidden border-r border-[#f0ede8]',
            isCollapsed ? 'w-20' : 'w-[280px]',
            { '-translate-x-full': !isOpen && isMobile, 'translate-x-0': isOpen && isMobile }
        ]">
            <div
                class="absolute inset-0 bg-gradient-to-br from-[#faf8f5]/50 via-white/30 to-[#faf8f5]/50 pointer-events-none">
            </div>


            <div class="relative z-10 flex items-center justify-between p-6 border-b border-[#f0ede8]">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-3">

                        <transition enter-active-class="transition-opacity duration-300 ease-out"
                            enter-from-class="opacity-0" enter-to-class="opacity-100"
                            leave-active-class="transition-opacity duration-300 ease-in" leave-from-class="opacity-100"
                            leave-to-class="opacity-0">
                            <span v-if="!isCollapsed"
                                class="text-xl font-medium text-gray-700 whitespace-nowrap">Nebula</span>
                        </transition>
                    </div>
                </div>

                <button
                    class="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 border-none text-gray-500 cursor-pointer transition-all duration-300 shrink-0 hover:bg-gray-200 hover:text-gray-700 hover:scale-105"
                    @click="toggleSidebar" :aria-label="isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'">
                    <ChevronLeft :class="['transition-transform duration-300', { 'rotate-180': isCollapsed }]"
                        :size="20" />
                </button>
            </div>

            <nav
                class="flex-1 py-2 overflow-y-auto overflow-x-hidden relative z-10 scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                <Menu v-for="menu in menus" :key="menu.to" :to="menu.to" :label="menu.label" :icon="menu.icon"
                    :badge="menu.badge" :collapsed="isCollapsed" :children="menu.children" />
            </nav>
        </aside>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ChevronLeft } from 'lucide-vue-next'
import Menu from './Menu.vue'
import { sidebarMenu } from './SidebarMenu'

const menus = sidebarMenu
const isCollapsed = ref(false)
const isOpen = ref(false)
const windowWidth = ref(window.innerWidth)

const isMobile = computed(() => windowWidth.value < 1024)

const toggleSidebar = () => {
    if (isMobile.value) {
        isOpen.value = !isOpen.value
    } else {
        isCollapsed.value = !isCollapsed.value
    }
}

const handleResize = () => {
    windowWidth.value = window.innerWidth

    if (!isMobile.value) {
        isOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize)

    if (isMobile.value) {
        isOpen.value = false
    }
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

defineExpose({
    toggleSidebar,
    isCollapsed,
    isOpen
})
</script>
