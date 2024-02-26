import { createI18n } from 'vue-i18n'

import en from './dict/en.json'
import pt from './dict/pt.json'

const messages = {
  en,
  pt
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  silentTranslationWarn: true
})

export default i18n
