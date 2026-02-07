export const sidebarMenu = [
    {
        label: 'Dashboard',
        to: '/dashboard',
        icon: 'LayoutDashboard',
        badge: null,
        children: [
            {
                label: 'Posts',
                to: '/dashboard/posts',
                icon: 'FileText'
            },
            {
                label: 'Categories',
                to: '/dashboard/categories',
                icon: 'Folder'
            },
            {
                label: 'Stats',
                to: '/dashboard/stats',
                icon: 'BarChart'
            }
        ]
    },
    {
        label: 'Users',
        to: '/dashboard/users',
        icon: 'Users',
        badge: 3,
        children: [
            {
                label: 'List Users',
                to: '/dashboard/users/list',
                icon: 'Users'
            },
            {
                label: 'Users Activity',
                to: '/dashboard/users/activity',
                icon: 'Activity'
            },
            {
                label: 'Import/Export',
                to: '/dashboard/users/import-export',
                icon: 'Upload'
            }
        ]
    },
    {
        label: 'Itinerary',
        to: '/dashboard/itinerary',
        icon: 'Calendar',
        badge: null
    },
    {
        label: 'Settings',
        to: '/settings',
        icon: 'Settings',
        badge: null
    }
]
