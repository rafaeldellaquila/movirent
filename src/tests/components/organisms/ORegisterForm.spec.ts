import ORegisterForm from '@organisms/ORegisterForm.vue'
import { VueWrapper, mount } from '@vue/test-utils'

import router from '@/router'

import { useUserStore } from '@store/userStore'

import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockRegister = vi.fn()

vi.mock('@/store/authStore', () => ({
  useAuthStore: vi.fn(() => ({
    registerUser: mockRegister
  }))
}))

vi.mock('@store/userStore', () => ({
  useUserStore: vi.fn(() => ({
    user: { email: '', password: '' }
  }))
}))

describe('RegistrationForm', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(ORegisterForm, {
      global: {
        mocks: {
          $t: (msg: string) => msg
        },
        stubs: {
          RouterLink: true
        },
        plugins: [router]
      }
    })
  })

  it('renders correctly', () => {
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.text()).toContain('register')
    expect(wrapper.text()).toContain('login_cta')
  })

  it('submits user registration data', async () => {
    const userStore = useUserStore()

    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    expect(mockRegister).toHaveBeenCalledWith(userStore.user)
  })
})
