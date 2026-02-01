<template>
    <div class="min-h-screen bg-[url('/img/black.jpg')] bg-cover bg-center flex items-center justify-center px-4">
        <div class="w-full max-w-sm rounded-xl bg-[#181818]/90 backdrop-blur-md p-6 shadow-xl ">
            <h1 class="text-white text-2xl font-semibold text-center mb-6">
                Welcome back!
            </h1>

            <form class="space-y-4">
                <div
                    class="flex items-center gap-2 w-full rounded-md bg-[#111111] px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-none">
                    <AtSymbolIcon class=" w-5 h-5 text-gray-400" />
                    <input type="email" placeholder="email" v-model="email"
                        class="w-full rounded-md bg-[#111111] px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-none" />
                </div>
                <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>
                <div
                    class="flex items-center gap-2 w-full rounded-md bg-[#111111] px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-none">
                    <LockClosedIcon class=" w-5 h-5 text-gray-400" />
                    <input type="password" placeholder="Password"
                        class="w-full rounded-md bg-[#111111] px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-none" />

                </div>

                <button type="submit" @click="login"
                    class="w-full rounded-md bg-[#0072db] py-2 font-medium text-white transition hover:bg-[#0059b3]">
                    Login
                </button>
            </form>
            <div class="text-gray-400 text-sm text-center my-6">
                Long time no see, <a class="text-blue-500">forgot password?</a>
            </div>
        </div>
    </div>
</template>


<script setup>
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/vue/24/solid'
import axios from 'axios';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const router = useRouter()
const errorMsg = ref('')
const emailError = computed(() => {
    if (!email.value) {
        return 'Email is required';
    } else if (!email.value.includes('@')) {
        return 'Invalid email format';
    } else {
        return '';
    }
})

const login = () => {
    router.push('/dashboard')
}
</script>

<style scoped></style>