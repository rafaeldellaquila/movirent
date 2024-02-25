import '@styles/base.css'
import '@styles/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@i18n/index'
import App from '@/App.vue'
import router from '@router/index'
import { vMaska } from 'maska'

const app = createApp(App)

app.directive('maska', vMaska)
app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
