import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import i18n, { setDocumentLanguage } from '../i18n'
import { parsePathname } from '../i18n/path'

const LOCALE_STORAGE_KEY = 'locale'

export function LocaleSync() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { locale } = parsePathname(pathname)
    void i18n.changeLanguage(locale)
    setDocumentLanguage(locale)
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }, [pathname])

  return null
}
