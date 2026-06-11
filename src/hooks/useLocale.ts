import { useLocation } from 'react-router-dom'
import { parsePathname } from '../i18n/path'
import type { Locale } from '../i18n/languages'

export function useLocale() {
  const { pathname } = useLocation()
  const { locale, pathWithoutLocale } = parsePathname(pathname)

  return { locale, pathWithoutLocale }
}

export function useLocalePath(): Locale {
  return useLocale().locale
}
