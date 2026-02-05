import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/public/LandingPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import Users from '../pages/dashboard/users/Users.vue'
import Itinerary from '../pages/dashboard/itinerary/Itinerary.vue'
import Post from '../pages/dashboard/articles/Post.vue'
import CreatePost from '../pages/dashboard/articles/CreatePost.vue'
import Categories from '../pages/dashboard/categories/Categories.vue'
import Stats from '../pages/dashboard/stats/Stats.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: LandingPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage
    },
    {
        path: '/dashboard/posts',
        name: 'Posts',
        component: Post
    },
    {
        path: '/dashboard/posts/create',
        name: 'CreatePost',
        component: CreatePost
    },
    {
        path: '/dashboard/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/dashboard/stats',
        name: 'Stats',
        component: Stats
    },
    {
        path: '/dashboard/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/dashboard/itinerary',
        name: 'Itinerary',
        component: Itinerary
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/NotFoundPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
