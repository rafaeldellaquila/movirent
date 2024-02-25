import { ref } from 'vue'
import { useRouter } from 'vue-router'

import type { AuthProps, UserProps } from '@/types/common'

import { useUserStore } from './userStore'
import { defineStore } from 'pinia'

function verifyCredentials(storedUser: UserProps, { email, password }: AuthProps): boolean {
  return (
    storedUser.email === email && storedUser.password === password && storedUser.status === true
  )
}

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(loadAuthenticationState())
  const { loadUserData, saveUserData } = useUserStore()
  const router = useRouter()

  function loadAuthenticationState(): boolean {
    const isAuth = localStorage.getItem('isAuthenticated')
    return isAuth ? JSON.parse(isAuth) : false
  }

  function saveAuthenticationState(isAuth: boolean) {
    return localStorage.setItem('isAuthenticated', JSON.stringify(isAuth))
  }

  function registerUser(userData: UserProps) {
    saveUserData({ ...userData, status: true, uid: crypto.randomUUID() })
    saveAuthenticationState(true)
    router.push('/auth/dashboard')
  }

  function login(authProps: AuthProps) {
    console.log('authProps', authProps)
    const storedUser = loadUserData()
    if (storedUser && verifyCredentials(storedUser, authProps)) {
      console.log('if')
      isAuthenticated.value = true
      saveAuthenticationState(true)
      loadUserData()
      router.push('/auth/dashboard')
    } else {
      throw new Error('Credenciais inválidas')
    }
  }

  function logout() {
    isAuthenticated.value = false
    saveAuthenticationState(false)
    console.log('logout', isAuthenticated)
    router.push('/')
  }

  return {
    login,
    logout,
    registerUser,
    loadAuthenticationState,
    saveAuthenticationState,
    isAuthenticated
  }
})
