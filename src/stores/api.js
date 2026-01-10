import { defineStore } from 'pinia'
import { ref } from 'vue'
import apiClient from '../services/api'

export const useApiStore = defineStore('api', () => {
    const loading = ref(false)
    const error = ref(null)
    const data = ref(null)

    const fetchData = async (endpoint, options = {}) => {
        loading.value = true
        error.value = null

        try {
            const response = await apiClient({
                url: endpoint,
                ...options
            })
            data.value = response.data
            return response.data
        } catch (err) {
            error.value = err.response?.data?.message || err.message
            throw err
        } finally {
            loading.value = false
        }
    }

    const postData = async (endpoint, payload) => {
        return fetchData(endpoint, {
            method: 'POST',
            data: payload
        })
    }

    const putData = async (endpoint, payload) => {
        return fetchData(endpoint, {
            method: 'PUT',
            data: payload
        })
    }

    const deleteData = async (endpoint) => {
        return fetchData(endpoint, {
            method: 'DELETE'
        })
    }

    const resetError = () => {
        error.value = null
    }

    return {
        loading,
        error,
        data,
        fetchData,
        postData,
        putData,
        deleteData,
        resetError
    }
})
