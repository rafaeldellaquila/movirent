import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/authStore'
import UnauthTemplate from '@/templates/UnauthTemplate.vue'

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
