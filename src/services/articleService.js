import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export const articleService = {
  async getArticleBySlug(slug) {
    try {
      const response = await axios.get(`${API_BASE}/articles/slug/${slug}`)
      return response.data
    } catch (error) {
      console.error('Failed to fetch article:', error)
      throw error
    }
  },

  async getArticleById(id) {
    try {
      const response = await axios.get(`${API_BASE}/articles/${id}`)
      return response.data
    } catch (error) {
      console.error('Failed to fetch article:', error)
      throw error
    }
  },

  async getRelatedArticles(articleId, limit = 2) {
    try {
      const response = await axios.get(`${API_BASE}/articles/${articleId}/related`, {
        params: { limit }
      })
      return response.data
    } catch (error) {
      console.error('Failed to fetch related articles:', error)
      return []
    }
  },

  async getArticlesByCategory(category, limit = 6) {
    try {
      const response = await axios.get(`${API_BASE}/articles/category/${category}`, {
        params: { limit }
      })
      return response.data
    } catch (error) {
      console.error('Failed to fetch articles by category:', error)
      return []
    }
  }
}
