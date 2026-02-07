<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fefcf9] to-[#faf8f5] px-4">
        <div class="text-center max-w-lg mx-auto">
            <div class="relative inline-block mb-8">
                <h1
                    class="text-9xl font-black text-gray-900 tracking-tighter mix-blend-multiply opacity-20 absolute top-0 left-1 animate-pulse">
                    404
                </h1>
                <h1
                    class="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-violet-600 relative z-10">
                    404
                </h1>
            </div>

            <div class="space-y-6 relative z-10">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                    Page not found
                </h2>

                <p class="text-gray-500 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or removed.
                </p>

                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button @click="goBack"
                        class="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none flex items-center justify-center gap-2">
                        <ArrowLeft :size="20" />
                        Go Back
                    </button>

                    <router-link to="/dashboard"
                        class="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold shadow-[0_4px_16px_rgba(37,99,235,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none flex items-center justify-center gap-2">
                        <Home :size="20" />
                        Go to Dashboard
                    </router-link>
                </div>
            </div>

            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl pointer-events-none opacity-50 z-0">
                <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-blob">
                </div>
                <div
                    class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl animate-blob animation-delay-2000">
                </div>
                <div
                    class="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-blob animation-delay-4000">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ArrowLeft, Home } from 'lucide-vue-next'

const router = useRouter()

const goBack = () => {
    router.back()
}
</script>

<style scoped>
.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    100% {
        transform: translate(0px, 0px) scale(1);
    }
}
</style>
