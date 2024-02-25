import type { UserProps } from '@/types/user'

import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as UserProps,
    isAuthenticated: false
  }),
  actions: {
    async fetchAddressByCep(cep: string) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        if (response.data) {
          this.user.street = response.data.logradouro || ''
          this.user.neighborhood = response.data.bairro || ''
          this.user.city = response.data.localidade || ''
          this.user.state = response.data.uf || ''
          this.user.cep = cep
        }
      } catch (error) {
        console.error('Erro ao buscar CEP', error)
      }
    },
    registerUser(userData: UserProps) {
      this.user = userData
      this.isAuthenticated = true
      this.saveUserData()
    },
    login(userData: UserProps) {
      this.user = userData
      this.isAuthenticated = true
      this.saveUserData()
    },
    logout() {
      this.user = {} as UserProps
      this.isAuthenticated = false
      localStorage.removeItem('user')
    },
    saveUserData() {
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    loadUserData() {
      const userData = localStorage.getItem('user')
      if (userData) {
        this.user = JSON.parse(userData)
        this.isAuthenticated = true
      }
    }
  }
})
