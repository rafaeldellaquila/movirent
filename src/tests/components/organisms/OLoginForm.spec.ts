import AButton from '@atoms/AButton.vue'
import MForm from '@molecules/MForm.vue'
import OLoginForm from '@organisms/OLoginForm.vue'
import { VueWrapper, mount } from '@vue/test-utils'

import router from '@router/index'

import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockLogin = vi.fn()

vi.mock('@store/authStore', () => ({
  useAuthStore: vi.fn(() => ({
    login: mockLogin
  }))
}))

vi.mock('@store/userStore', () => ({
  useUserStore: vi.fn(() => ({
    user: { email: '', password: '' }
  }))
}))

describe('LoginForm', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    vi.clearAllMocks()
    wrapper = mount(OLoginForm, {
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
    expect(wrapper.findComponent(AButton).exists()).toBe(true)
    expect(wrapper.findAllComponents(MForm).length).toBe(2)
  })

  it('submits the form with user credentials', async () => {
    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')
    await emailInput.setValue('user@test.com')
    await passwordInput.setValue('testeuser123')

    await wrapper.find('form').trigger('submit.prevent')

    await wrapper.vm.$nextTick()

    expect(mockLogin).toHaveBeenCalledWith({
      email: 'user@test.com',
      password: 'testeuser123'
    })
  })
})
