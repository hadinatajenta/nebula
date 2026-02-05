<template>
    <DashboardLayouts>
        <div class="max-w-5xl mx-auto space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">Create New Post</h1>
                    <p class="text-gray-500 mt-1">Write and publish your content</p>
                </div>
                <router-link to="/dashboard/posts"
                    class="px-4 py-2 text-gray-600 bg-gray-100 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                    ← Back to Posts
                </router-link>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div
                    class="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6 space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="md:col-span-2">
                            <label for="title" class="block text-sm font-semibold text-gray-700 mb-2">
                                Post Title <span class="text-red-500">*</span>
                            </label>
                            <input v-model="form.title" @input="generateSlug" id="title" type="text" required
                                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Enter your post title...">
                        </div>

                        <div>
                            <label for="category" class="block text-sm font-semibold text-gray-700 mb-2">
                                Category <span class="text-red-500">*</span>
                            </label>
                            <div class="relative">
                                <input v-model="categorySearch" @input="filterCategories"
                                    @focus="showCategoryDropdown = true" @blur="hideCategoryDropdown" id="category"
                                    type="text" required
                                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Search or add category...">

                                <div v-show="showCategoryDropdown && (filteredCategories.length > 0 || categorySearch)"
                                    class="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                                    <div v-if="categorySearch && !filteredCategories.some(c => c.toLowerCase() === categorySearch.toLowerCase())"
                                        @mousedown.prevent="addNewCategory"
                                        class="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 text-blue-600 font-medium">
                                        + Add "{{ categorySearch }}"
                                    </div>
                                    <div v-for="category in filteredCategories" :key="category"
                                        @mousedown.prevent="selectCategory(category)"
                                        class="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                                        {{ category }}
                                    </div>
                                </div>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">Selected: <span class="font-medium text-gray-700">{{
                                    form.category || 'None' }}</span></p>
                        </div>

                        <div>
                            <label for="author" class="block text-sm font-semibold text-gray-700 mb-2">
                                Author
                            </label>
                            <input v-model="author" id="author" type="text" readonly
                                class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-600 cursor-not-allowed">
                        </div>

                        <div class="md:col-span-2">
                            <label for="description" class="block text-sm font-semibold text-gray-700 mb-2">
                                Short Description <span class="text-red-500">*</span>
                            </label>
                            <textarea v-model="form.description" id="description" rows="3" required
                                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                placeholder="Write a short description for your post..."></textarea>
                        </div>

                        <div class="md:col-span-2">
                            <div class="flex items-center justify-between mb-2">
                                <label for="slug" class="block text-sm font-semibold text-gray-700">
                                    URL Slug <span class="text-red-500">*</span>
                                </label>
                                <button type="button" @click="generateSlug"
                                    class="text-xs text-blue-600 hover:text-blue-700 font-medium">
                                    Auto-generate from title
                                </button>
                            </div>
                            <div class="relative">
                                <span
                                    class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">/posts/</span>
                                <input v-model="form.slug" id="slug" type="text" required
                                    class="w-full pl-20 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="your-post-url-slug">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-6">
                    <label class="block text-sm font-semibold text-gray-700 mb-3">
                        Post Content <span class="text-red-500">*</span>
                    </label>
                    <QuillEditor v-model:content="form.content" content-type="html" theme="snow"
                        :toolbar="toolbarOptions" placeholder="Start writing your post content..."
                        class="min-h-[400px]" />
                </div>

                <div class="flex items-center justify-between">
                    <div class="text-sm text-gray-500">
                        All fields marked with <span class="text-red-500">*</span> are required
                    </div>
                    <div class="flex gap-3">
                        <button type="button" @click="saveDraft"
                            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                            Save as Draft
                        </button>
                        <button type="submit"
                            class="px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all active:scale-95">
                            Publish Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </DashboardLayouts>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import DashboardLayouts from '../../../layouts/DashboardLayouts.vue'

const router = useRouter()

const form = reactive({
    title: '',
    category: '',
    description: '',
    slug: '',
    content: ''
})

const author = ref('John Doe')

const categories = ref([
    'Tutorial',
    'Design',
    'News',
    'Reviews',
    'Case Study',
    'Resources',
    'Development',
    'Technology',
    'Business'
])

const categorySearch = ref('')
const filteredCategories = ref([...categories.value])
const showCategoryDropdown = ref(false)

const toolbarOptions = [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['link', 'image', 'code-block'],
    ['clean']
]

const generateSlug = () => {
    if (form.title) {
        form.slug = form.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
    }
}

const filterCategories = () => {
    const search = categorySearch.value.toLowerCase()
    filteredCategories.value = categories.value.filter(cat =>
        cat.toLowerCase().includes(search)
    )
}

const selectCategory = (category) => {
    form.category = category
    categorySearch.value = category
    showCategoryDropdown.value = false
}

const addNewCategory = () => {
    const newCategory = categorySearch.value.trim()
    if (newCategory && !categories.value.includes(newCategory)) {
        categories.value.push(newCategory)
        selectCategory(newCategory)
    }
}

const hideCategoryDropdown = () => {
    setTimeout(() => {
        showCategoryDropdown.value = false
    }, 200)
}

const handleSubmit = () => {
    console.log('Publishing post:', form)
    alert('Post published successfully! ✅')
    router.push('/dashboard/posts')
}

const saveDraft = () => {
    console.log('Saving draft:', form)
    alert('Post saved as draft! 📝')
    router.push('/dashboard/posts')
}
</script>

<style>
.ql-container {
    font-size: 16px;
    min-height: 400px;
}

.ql-editor {
    min-height: 400px;
}

.ql-toolbar {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-color: #e5e7eb;
    background: #fafafa;
}

.ql-container {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-color: #e5e7eb;
}

.ql-editor.ql-blank::before {
    color: #9ca3af;
    font-style: normal;
}
</style>
