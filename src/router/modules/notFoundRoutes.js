const notFoundRoutes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../../pages/NotFoundPage.vue')
    }
]

export default notFoundRoutes
