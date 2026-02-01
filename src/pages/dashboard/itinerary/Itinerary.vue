<template>
    <DashboardLayouts>
        <div class="p-6 max-w-5xl mx-auto">
            <div
                class="flex justify-between  mb-6 md:flex-row flex-col md:items-start items-start bg-white p-4 rounded-xl">
                <h1 class="text-2xl font-semibold md:mb-0 mb-4">Itinerary</h1>

                <div class="flex gap-2">
                    <button @click="exportJson" class="border px-3 py-2 rounded-lg text-sm">
                        Export JSON
                    </button>
                    <button @click="exportPdf" class="border px-3 py-2 rounded-lg text-sm">
                        Export PDF
                    </button>

                    <button @click="openModal" class="bg-black text-white px-4 py-2 rounded-lg">
                        + Add
                    </button>
                </div>
            </div>

            <!-- Grouped List -->
            <!-- Desktop -->
            <div class="hidden md:block">
                <div class="overflow-x-auto bg-white border rounded-xl">
                    <table class="w-full text-sm">
                        <thead class="bg-gray-50 text-left">
                            <tr>
                                <th class="p-3 w-48">Date</th>
                                <th class="p-3 w-40">Time</th>
                                <th class="p-3">Activity</th>
                                <th class="p-3">Maps</th>
                                <th class="p-3">Budget</th>
                                <th class="p-3 w-24">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <template v-for="(group, gIndex) in groupedItineraries" :key="gIndex">
                                <tr v-for="(item, iIndex) in group.items" :key="iIndex"
                                    class="border-t hover:bg-gray-50">
                                    <td class="p-3 font-medium">
                                        <span v-if="iIndex === 0">
                                            {{ formatDate(group.date) }}
                                        </span>
                                    </td>

                                    <td class="p-3 text-gray-600">
                                        {{ item.time_start }} - {{ item.time_end }}
                                    </td>

                                    <td class="p-3">
                                        {{ item.activity }}
                                    </td>

                                    <td class="p-3"> {{ item.location ?? '-' }} </td>
                                    <td class="p-3"> {{ formatIdr(item.budget ?? 0) }} </td>

                                    <td class="p-3">
                                        <div class="flex gap-2">
                                            <button @click="openEdit(item)" class="text-blue-600 text-xs">
                                                Edit
                                            </button>
                                            <button @click="remove(item)" class="text-red-600 text-xs">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colspan="6" class="p-0">
                                    <div class="flex justify-between items-center px-6 py-4 bg-gray-50 border-t">
                                        <div class="text-sm text-gray-600">
                                            Total Trip
                                            <span class="ml-1">
                                                ({{ totalDays }} {{ totalDays > 1 ? 'days' : 'day' }})
                                            </span>
                                        </div>

                                        <div class="text-lg font-semibold">
                                            {{ formatIdr(totalBudget) }}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>

            <!-- Mobile -->
            <div class="block md:hidden space-y-5">
                <div v-for="(group, index) in groupedItineraries" :key="index" class="bg-white border rounded-xl p-4">
                    <p class="font-semibold mb-3">
                        {{ formatDate(group.date) }}
                    </p>

                    <div class="space-y-3">
                        <div v-for="(item, i) in group.items" :key="i" class="flex justify-between items-start">
                            <div>
                                <p class="text-xs text-gray-500">
                                    {{ item.time_start }} - {{ item.time_end }}
                                </p>
                                <p class="font-medium text-sm">
                                    {{ item.activity }}
                                </p>
                            </div>

                            <div class="flex gap-2">
                                <button @click="openEdit(item)" class="text-xs text-blue-600">
                                    Edit
                                </button>
                                <button @click="remove(item)" class="text-xs text-red-600">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Total -->
            <div class="block md:hidden mt-4 bg-white border rounded-xl p-4">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-sm font-semibold">Total Budget</p>
                        <p class="text-xs text-gray-500 mt-1">{{ totalDays }} {{ totalDays > 1 ? 'days' : 'day' }}</p>
                    </div>
                    <p class="text-lg font-bold">{{ formatIdr(totalBudget) }}</p>
                </div>
            </div>
        </div>


        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div class="bg-white rounded-xl w-full max-w-md p-6">
                <h2 class="font-semibold mb-4">Add Itinerary</h2>

                <div class="space-y-4">
                    <input type="date" v-model="form.date" :min="today" class="input" />

                    <div class="flex gap-3">
                        <input type="time" v-model="form.time_start" class="input" />
                        <input type="time" v-model="form.time_end" class="input" />
                    </div>

                    <input type="text" v-model="form.activity" placeholder="Activity" class="input" />
                    <input type="text" v-model="form.location" placeholder="Location" class="input" />
                    <input type="text" :value="formattedBudget" @input="onBudgetInput" placeholder="Budget (Rp)"
                        class="input" />
                </div>

                <div class="flex justify-end gap-2 mt-6">
                    <button @click="closeModal" class="border px-4 py-2 rounded-lg">
                        Cancel
                    </button>
                    <button @click="submit" class="bg-black text-white px-4 py-2 rounded-lg">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </DashboardLayouts>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import DashboardLayouts from '../../../layouts/DashboardLayouts.vue'


const showModal = ref(false)
const itineraries = ref([])
const isEdit = ref(false)
const editingIndex = ref(null)


const today = new Date().toISOString().split('T')[0]

const form = ref({
    date: today,
    time_start: '',
    time_end: '',
    activity: '',
    location: '',
    budget: null
})

onMounted(() => {
    const saved = localStorage.getItem('itineraries')
    if (saved) itineraries.value = JSON.parse(saved)
})

const submit = () => {
    if (isEdit.value && editingIndex.value !== null) {
        itineraries.value[editingIndex.value] = { ...form.value }
    } else {
        itineraries.value.push({ ...form.value })
    }

    localStorage.setItem(
        'itineraries',
        JSON.stringify(itineraries.value)
    )

    resetForm()
}

const resetForm = () => {
    form.value = {
        date: today,
        time_start: '',
        time_end: '',
        activity: '',
        location: '',
        budget: ''
    }

    isEdit.value = false
    editingIndex.value = null
    showModal.value = false
}

const groupedItineraries = computed(() => {
    const map = {}

    itineraries.value.forEach(item => {
        if (!map[item.date]) map[item.date] = []
        map[item.date].push(item)
    })

    return Object.keys(map)
        .sort()
        .map(date => ({
            date,
            items: map[date].sort(
                (a, b) => a.time_start.localeCompare(b.time_start)
            )
        }))
})

const formatDate = (date) =>
    new Date(date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

const exportJson = () => {
    downloadFile(
        JSON.stringify(sortedItineraries.value, null, 2),
        'itinerary.json',
        'application/json'
    )
}

const exportExcel = () => {
    const header = 'Date,Start,End,Activity\n'
    const rows = sortedItineraries.value
        .map(i =>
            `${i.date},${i.time_start},${i.time_end},"${i.activity}"`
        )
        .join('\n')

    downloadFile(header + rows, 'itinerary.csv', 'text/csv')
}

const downloadFile = (content, filename, type) => {
    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
}

const sortedItineraries = computed(() => {
    return [...itineraries.value].sort((a, b) => {
        if (a.date !== b.date) {
            return a.date.localeCompare(b.date)
        }
        return a.time_start.localeCompare(b.time_start)
    })
})

const openEdit = (item) => {
    isEdit.value = true
    showModal.value = true

    editingIndex.value = itineraries.value.findIndex(
        i =>
            i.date === item.date &&
            i.time_start === item.time_start &&
            i.activity === item.activity &&
            i.location === item.location &&
            i.budget === item.budget
    )

    form.value = { ...item }
}

const remove = (item) => {
    const confirmDelete = confirm(
        'Hapus kegiatan ini?'
    )

    if (!confirmDelete) return

    itineraries.value = itineraries.value.filter(
        i =>
            !(
                i.date === item.date &&
                i.time_start === item.time_start &&
                i.time_end === item.time_end &&
                i.activity === item.activity &&
                i.location === item.location &&
                i.budget === item.budget
            )
    )

    localStorage.setItem(
        'itineraries',
        JSON.stringify(itineraries.value)
    )
}


const openModal = () => (showModal.value = true)
const closeModal = () => (showModal.value = false)

const formattedBudget = computed(() => {
    if (!form.value.budget) return ''
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(form.value.budget)
})

const onBudgetInput = (e) => {
    const raw = e.target.value.replace(/\D/g, '')
    form.value.budget = raw ? Number(raw) : null
}

const formatIdr = (value) => {
    if (!value) return 'Rp 0'
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(value)
}

const totalBudget = computed(() => {
    return itineraries.value.reduce((sum, item) => {
        return sum + (Number(item.budget) || 0)
    }, 0)
})

const totalDays = computed(() => {
    const uniqueDates = new Set(itineraries.value.map(item => item.date))
    return uniqueDates.size
})

const exportPdf = () => {
    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text('Travel Itinerary', 14, 15)

    doc.setFontSize(10)
    doc.text(
        `Total Budget: ${formatIdr(totalBudget.value)}`,
        14,
        22
    )

    let startY = 30

    groupedItineraries.value.forEach(group => {
        // Date header
        doc.setFontSize(12)
        doc.text(formatDate(group.date), 14, startY)
        startY += 4

        autoTable(doc, {
            startY,
            head: [['Time', 'Activity', 'Budget']],
            body: group.items.map(item => [
                `${item.time_start} - ${item.time_end}`,
                item.activity,
                formatIdr(item.budget)
            ]),
            theme: 'grid',
            styles: {
                fontSize: 9
            },
            headStyles: {
                fillColor: [240, 240, 240],
                textColor: 0
            }
        })

        startY = doc.lastAutoTable.finalY + 8
    })

    doc.save('itinerary.pdf')
}

</script>

<style scoped>
.input {
    @apply w-full border rounded-lg p-2 text-sm;
}
</style>
