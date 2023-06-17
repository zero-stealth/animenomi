import { createRouter, createWebHistory } from 'vue-router'
import SplashView from '@/views/SplashView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashView
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/views/AdminView.vue')
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('@/views/WelcomeView.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/views/ProductView.vue')
    },

    {
      path: '/payment',
      name: 'Payment',
      component: () => import('@/views/PaymentView.vue')
    },

    {
      path: '/history',
      name: 'History',
      component: () => import('@/views/HistoryView.vue')
    },

    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/SearchView.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('@/views/ShopView.vue')
    },
    {
      path: '/favourite',
      name: 'Favourite',
      component: () => import('@/views/FavouriteView.vue')
    },
    {
      path: '/measurement',
      name: 'Measurement',
      component: () => import('@/views/MeasurementView.vue')
    },
    {
      path: '/customize',
      name: 'Customize',
      component: () => import('@/views/CustomizeView.vue')
    },
    {
      path: '/alter',
      name: 'Alter',
      component: () => import('@/views/AlterView.vue')
    },
    {
      path: '/notification',
      name: 'Notification',
      component: () => import('@/views/NotificationView.vue')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/views/DetailView.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/ProfileView.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SettingsView.vue')
    }
  ]
})

export default router
