import DashboardPage from '../../pages/DashboardPage.vue'
import Users from '../../pages/dashboard/users/Users.vue'
import UserActivity from '../../pages/dashboard/users/UserActivity.vue'
import UserImportExport from '../../pages/dashboard/users/UserImportExport.vue'
import Itinerary from '../../pages/dashboard/itinerary/Itinerary.vue'
import Post from '../../pages/dashboard/articles/Post.vue'
import CreatePost from '../../pages/dashboard/articles/CreatePost.vue'
import Categories from '../../pages/dashboard/categories/Categories.vue'
import Stats from '../../pages/dashboard/stats/Stats.vue'

const dashboardRoutes = [
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
        path: '/dashboard/users/list',
        name: 'UsersList',
        component: Users
    },
    {
        path: '/dashboard/users/activity',
        name: 'UserActivity',
        component: UserActivity
    },
    {
        path: '/dashboard/users/import-export',
        name: 'UserImportExport',
        component: UserImportExport
    },
    {
        path: '/dashboard/itinerary',
        name: 'Itinerary',
        component: Itinerary
    }
]

export default dashboardRoutes
