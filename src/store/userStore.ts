import { ref } from 'vue'

import type { UserProps } from '@/types/common'

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<UserProps>({
    uid: '0',
    name: '',
    tel: '',
    document: '',
    email: '',
    password: '',
    status: false
  })

  function saveUserData(user: UserProps) {
    console.log('saveUserData', user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  function loadUserData(): UserProps | undefined {
    const userData = localStorage.getItem('user')
    return userData ? JSON.parse(userData) : user
  }

  return {
    user,
    loadUserData,
    saveUserData
  }
})
