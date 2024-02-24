import '@styles/base.css'
import '@styles/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@i18n/index'
import App from '@/App.vue'
import router from '@router/index'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
