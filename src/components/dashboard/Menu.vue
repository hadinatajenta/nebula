<template>
    <div>
        <div v-if="!children || children.length === 0">
            <router-link :to="to"
                class="relative flex items-center px-4 py-3 my-1 mx-2 rounded-xl text-gray-600 decoration-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer overflow-hidden group hover:text-gray-800 hover:translate-x-1 hover:bg-gray-50"
                active-class="bg-gradient-to-br from-blue-50/80 to-blue-100/50 text-blue-800 shadow-[0_2px_8px_rgba(59,130,246,0.15)] menu-active">
                <div class="flex items-center gap-3 w-full relative z-10">
                    <div
                        class="flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <component :is="iconComponent" :size="20" :stroke-width="2" />
                    </div>

                    <span class="flex-1 text-[0.9375rem] font-medium whitespace-nowrap transition-opacity duration-300"
                        v-if="!collapsed">
                        <slot>{{ label }}</slot>
                    </span>

                    <span v-if="badge && !collapsed"
                        class="flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 bg-gradient-to-br from-blue-500 to-blue-600 text-white text-[0.6875rem] font-semibold rounded-[0.625rem] shadow-[0_2px_6px_rgba(59,130,246,0.3)]">
                        {{ badge }}
                    </span>
                </div>

                <div
                    class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[60%] bg-gradient-to-b from-blue-500 to-blue-600 rounded-r opacity-0 transition-opacity duration-300 group-[.menu-active]:opacity-100">
                </div>

                <div v-if="collapsed"
                    class="absolute left-full ml-3 px-3 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 pointer-events-none -translate-x-2 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-[1000] flex items-center gap-2 group-hover:opacity-100 group-hover:translate-x-0">
                    <div
                        class="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-gray-800">
                    </div>
                    {{ label }}
                    <span v-if="badge"
                        class="flex items-center justify-center min-w-[1.125rem] h-[1.125rem] px-1.5 bg-blue-500 text-[0.625rem] font-semibold rounded-lg">
                        {{ badge }}
                    </span>
                </div>
            </router-link>
        </div>

        <div v-else>
            <div @click="toggleSubmenu"
                class="relative flex items-center px-4 py-3 my-1 mx-2 rounded-xl text-gray-600 decoration-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer overflow-hidden group hover:text-gray-800 hover:translate-x-1 hover:bg-gray-50">
                <div class="flex items-center gap-3 w-full relative z-10">
                    <div
                        class="flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <component :is="iconComponent" :size="20" :stroke-width="2" />
                    </div>

                    <span class="flex-1 text-[0.9375rem] font-medium whitespace-nowrap transition-opacity duration-300"
                        v-if="!collapsed">
                        <slot>{{ label }}</slot>
                    </span>

                    <ChevronDown v-if="!collapsed" :size="16"
                        :class="['transition-transform duration-300', { 'rotate-180': isExpanded }]" />
                </div>

                <div v-if="collapsed"
                    class="absolute left-full ml-3 px-3 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 pointer-events-none -translate-x-2 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-[1000] flex items-center gap-2 group-hover:opacity-100 group-hover:translate-x-0">
                    <div
                        class="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-gray-800">
                    </div>
                    {{ label }}
                </div>
            </div>

            <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[500px]" leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 max-h-[500px]" leave-to-class="opacity-0 max-h-0">
                <div v-show="isExpanded && !collapsed" class="overflow-hidden">
                    <router-link v-for="child in children" :key="child.to" :to="child.to"
                        class="relative flex items-center px-4 py-2.5 my-0.5 mx-2 ml-6 rounded-lg text-gray-600 decoration-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer overflow-hidden group hover:text-gray-800 hover:translate-x-1 hover:bg-gray-50"
                        active-class="bg-gradient-to-br from-blue-50/60 to-blue-100/40 text-blue-700 shadow-[0_1px_6px_rgba(59,130,246,0.12)] submenu-active">
                        <div class="flex items-center gap-3 w-full relative z-10">
                            <div
                                class="flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                                <component :is="getIconComponent(child.icon)" :size="18" :stroke-width="2" />
                            </div>

                            <span class="flex-1 text-[0.875rem] font-medium whitespace-nowrap">
                                {{ child.label }}
                            </span>
                        </div>

                        <div
                            class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[50%] bg-gradient-to-b from-blue-400 to-blue-500 rounded-r opacity-0 transition-opacity duration-300 group-[.submenu-active]:opacity-100">
                        </div>
                    </router-link>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
    LayoutDashboard,
    Users,
    Settings,
    Home,
    FileText,
    BarChart,
    Package,
    ShoppingCart,
    Mail,
    Bell,
    Calendar,
    Folder,
    Heart,
    Star,
    ChevronDown
} from 'lucide-vue-next'

const props = defineProps({
    to: {
        type: [String, Object],
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: 'Home'
    },
    badge: {
        type: [Number, String],
        default: null
    },
    collapsed: {
        type: Boolean,
        default: false
    },
    children: {
        type: Array,
        default: () => []
    }
})

const route = useRoute()

const isChildActive = computed(() => {
    if (!props.children || props.children.length === 0) return false
    return props.children.some(child => route.path === child.to)
})

const isExpanded = ref(isChildActive.value)

watch(() => route.path, () => {
    if (isChildActive.value) {
        isExpanded.value = true
    }
}, { immediate: true })

const toggleSubmenu = () => {
    isExpanded.value = !isExpanded.value
}

const iconMap = {
    LayoutDashboard,
    Users,
    Settings,
    Home,
    FileText,
    BarChart,
    Package,
    ShoppingCart,
    Mail,
    Bell,
    Calendar,
    Folder,
    Heart,
    Star
}

const iconComponent = computed(() => iconMap[props.icon] || Home)

const getIconComponent = (iconName) => {
    return iconMap[iconName] || Home
}
</script>
