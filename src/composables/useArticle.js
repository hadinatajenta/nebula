import { ref } from 'vue'

export const useArticle = () => {
  const isShared = ref(false)
  
  const shareArticle = async (slug) => {
    const shareUrl = `${window.location.origin}/read/${slug}`
    try {
      await navigator.clipboard.writeText(shareUrl)
      isShared.value = true
      setTimeout(() => {
        isShared.value = false
      }, 2000)
      return true
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
      return false
    }
  }
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  return {
    isShared,
    shareArticle,
    formatDate
  }
}
