import { ref } from 'vue'
import { useRouter } from 'vue-router'

import type { AuthProps, UserProps } from '@/types/common'

import { defineStore } from 'pinia'

// Função para verificar credenciais
function verifyCredentials(storedUser: UserProps, { email, password }: AuthProps): boolean {
  return (
    storedUser.email === email && storedUser.password === password && storedUser.status === true
  )
}

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const user = ref<UserProps>({
    uid: '0',
    name: '',
    tel: '',
    document: '',
    email: '',
    password: '',
    status: false
  })
  const isAuthenticated = ref(loadAuthenticationState())

  function saveUserData(user: UserProps) {
    console.log('saveUserData', user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  function loadUserData(): UserProps | undefined {
    const userData = localStorage.getItem('user')
    return userData ? JSON.parse(userData) : user
  }

  function saveAuthenticationState(isAuth: boolean) {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuth))
  }

  function loadAuthenticationState(): boolean {
    const isAuth = localStorage.getItem('isAuthenticated')
    return isAuth ? JSON.parse(isAuth) : false
  }

  function registerUser(userData: UserProps) {
    user.value = { ...userData, status: true, uid: crypto.randomUUID() }
    isAuthenticated.value = true
    saveUserData(user.value)
    saveAuthenticationState(true)
    router.push('/auth/dashboard')
  }

  function login(authProps: AuthProps) {
    const storedUser = loadUserData()
    if (storedUser && verifyCredentials(storedUser, authProps)) {
      user.value = storedUser
      isAuthenticated.value = true
      saveAuthenticationState(true)
      router.push('/auth/dashboard')
    } else {
      throw new Error('Credenciais inválidas')
    }
  }

  function logout() {
    console.log('clique')
    isAuthenticated.value = false
    saveAuthenticationState(false)
    console.log('logout', isAuthenticated)
    router.push('/')
  }

  return {
    user,
    registerUser,
    login,
    logout,
    loadUserData,
    saveUserData,
    loadAuthenticationState
  }
})
