import { defineStore } from 'pinia'
import { setData, getData, removeData } from '../services/localStorageDB'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: getData('user') || null
  }),
  actions: {
    login(userData) {
      // Aqui você adicionaria a lógica de autenticação
      this.user = userData
      setData('user', userData)
    },
    logout() {
      this.user = null
      removeData('user')
    },
    isAuthenticated() {
      return !!this.user
    }
  }
})
