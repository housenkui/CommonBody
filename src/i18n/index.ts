import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LOCALE, LOCALES, type Locale } from './languages'
import zh from './locales/zh/common.json'
import en from './locales/en/common.json'
import ja from './locales/ja/common.json'
import ko from './locales/ko/common.json'
import de from './locales/de/common.json'
import zhTW from './locales/zh-TW/common.json'
import vi from './locales/vi/common.json'
import th from './locales/th/common.json'
import fr from './locales/fr/common.json'
import es from './locales/es/common.json'
import ru from './locales/ru/common.json'
import ar from './locales/ar/common.json'
import pt from './locales/pt/common.json'

const fallbackLng: Record<string, string[]> = {}
for (const locale of LOCALES) {
  if (locale === 'zh-TW') {
    fallbackLng[locale] = [DEFAULT_LOCALE, 'en']
  } else if (locale !== DEFAULT_LOCALE && locale !== 'en') {
    fallbackLng[locale] = ['en', DEFAULT_LOCALE]
  }
}

i18n.use(initReactI18next).init({
  resources: {
    zh: { common: zh },
    'zh-TW': { common: zhTW },
    en: { common: en },
    ja: { common: ja },
    ko: { common: ko },
    de: { common: de },
    vi: { common: vi },
    th: { common: th },
    fr: { common: fr },
    es: { common: es },
    ru: { common: ru },
    ar: { common: ar },
    pt: { common: pt },
  },
  lng: DEFAULT_LOCALE,
  fallbackLng: {
    ...fallbackLng,
    default: ['en', DEFAULT_LOCALE],
  },
  defaultNS: 'common',
  ns: ['common'],
  interpolation: { escapeValue: false },
})

export function setDocumentLanguage(locale: Locale) {
  const lang =
    locale === 'zh'
      ? 'zh-CN'
      : locale === 'zh-TW'
        ? 'zh-Hant'
        : locale === 'pt'
          ? 'pt-BR'
          : locale
  document.documentElement.lang = lang
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
}

export default i18n
