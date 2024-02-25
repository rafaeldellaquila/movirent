import UnauthTemplate from '@templates/UnauthTemplate.vue'
import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@store/authStore'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: UnauthTemplate,
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../pages/LoginPage.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../pages/RegisterPage.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../pages/LoginPage.vue') // CRIAR
        },
        {
          path: '/faq',
          name: 'faq',
          component: () => import('../pages/LoginPage.vue') // CRIAR
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../pages/LoginPage.vue') // CRIAR
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
