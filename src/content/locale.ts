import type { Locale } from '../i18n/languages'

export function localeFallbackChain(locale: Locale): Locale[] {
  if (locale === 'zh') return ['zh']
  if (locale === 'zh-TW') return ['zh-TW', 'zh']
  if (locale === 'en') return ['en', 'zh']
  return [locale, 'en', 'zh']
}

export function resolveByLocale<T>(
  map: Partial<Record<Locale, T>>,
  locale: Locale,
): { value: T; contentLocale: Locale } | undefined {
  for (const loc of localeFallbackChain(locale)) {
    const variant = map[loc]
    if (variant) {
      return { value: variant, contentLocale: loc }
    }
  }
  return undefined
}
