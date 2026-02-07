import LandingPage from '../../pages/public/LandingPage.vue'
import ReadPage from '../../pages/public/ReadPage.vue'

const publicRoutes = [
    {
        path: '/',
        name: 'Home',
        component: LandingPage
    },
    {
        path: '/read/:slug',
        name: 'ReadArticle',
        component: ReadPage
    }
]

export default publicRoutes
