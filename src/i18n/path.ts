import { DEFAULT_LOCALE, isValidLocale, type Locale } from './languages'

export function parsePathname(pathname: string): {
  locale: Locale
  pathWithoutLocale: string
  shouldRedirectZh: boolean
} {
  const segments = pathname.split('/').filter(Boolean)
  const first = segments[0]

  if (first === 'zh') {
    const rest = '/' + segments.slice(1).join('/')
    return {
      locale: DEFAULT_LOCALE,
      pathWithoutLocale: rest === '/' ? '/' : rest,
      shouldRedirectZh: true,
    }
  }

  if (first && isValidLocale(first) && first !== DEFAULT_LOCALE) {
    const rest = '/' + segments.slice(1).join('/')
    return {
      locale: first,
      pathWithoutLocale: rest === '/' ? '/' : rest,
      shouldRedirectZh: false,
    }
  }

  return {
    locale: DEFAULT_LOCALE,
    pathWithoutLocale: pathname || '/',
    shouldRedirectZh: false,
  }
}

export function localizePath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (locale === DEFAULT_LOCALE) {
    return normalized === '/' ? '/' : normalized
  }
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`
}

export function switchLocalePath(
  currentPathname: string,
  targetLocale: Locale,
): string {
  const { pathWithoutLocale } = parsePathname(currentPathname)
  return localizePath(targetLocale, pathWithoutLocale)
}
