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

  function saveUserData(userData: UserProps) {
    console.log('saveUserData', userData)
    localStorage.setItem('user', JSON.stringify(userData))
    user.value = userData
  }

  function loadUserData(): UserProps | undefined {
    const userData = localStorage.getItem('user')
    if (userData) {
      const parsedUserData: UserProps = JSON.parse(userData)
      user.value = parsedUserData
      return parsedUserData
    }
    return userData ? JSON.parse(userData) : user
  }

  return {
    user,
    loadUserData,
    saveUserData
  }
})
