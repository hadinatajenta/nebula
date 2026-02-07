import { createRouter, createWebHistory } from 'vue-router'

import publicRoutes from './modules/publicRoutes'
import authRoutes from './modules/authRoutes'
import dashboardRoutes from './modules/dashboardRoutes'
import notFoundRoutes from './modules/notFoundRoutes'

const routes = [
    ...publicRoutes,
    ...authRoutes,
    ...dashboardRoutes,
    ...notFoundRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
