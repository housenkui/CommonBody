export const DEFAULT_LOCALE = 'zh' as const

export const LOCALES = [
  'zh',
  'zh-TW',
  'en',
  'de',
  'ja',
  'ko',
  'vi',
  'th',
  'fr',
  'es',
  'ru',
  'ar',
  'pt',
] as const

export type Locale = (typeof LOCALES)[number]

export const NON_DEFAULT_LOCALES = LOCALES.filter(
  (l): l is Exclude<Locale, 'zh'> => l !== DEFAULT_LOCALE,
)

export interface LanguageInfo {
  code: Locale
  native: string
  english: string
}

export const LANGUAGES: LanguageInfo[] = [
  { code: 'zh', native: '简体中文', english: 'Chinese (Simplified)' },
  { code: 'zh-TW', native: '繁體中文', english: 'Chinese (Traditional)' },
  { code: 'en', native: 'English', english: 'English' },
  { code: 'de', native: 'Deutsch', english: 'German' },
  { code: 'ja', native: '日本語', english: 'Japanese' },
  { code: 'ko', native: '한국어', english: 'Korean' },
  { code: 'vi', native: 'Tiếng Việt', english: 'Vietnamese' },
  { code: 'th', native: 'ไทย', english: 'Thai' },
  { code: 'fr', native: 'Français', english: 'French' },
  { code: 'es', native: 'Español', english: 'Spanish' },
  { code: 'ru', native: 'Русский', english: 'Russian' },
  { code: 'ar', native: 'العربية', english: 'Arabic' },
  { code: 'pt', native: 'Português', english: 'Portuguese' },
]

export function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function getLanguageInfo(locale: Locale): LanguageInfo {
  return LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0]
}
