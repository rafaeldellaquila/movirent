import App from '@/App.vue'
import { createApp } from 'vue'

import '@styles/base.css'
import '@styles/tailwind.css'

import router from '@router/index'

import i18n from '@i18n/index'

import { vMaska } from 'maska'
import { createPinia } from 'pinia'

const app = createApp(App)

app.directive('maska', vMaska)
app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
