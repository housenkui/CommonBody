import { useTranslation } from 'react-i18next'
import { getLanguageInfo, type Locale } from '../i18n/languages'
import { localizePath } from '../i18n/path'
import { useLocale } from '../hooks/useLocale'
import { LocalizedLink } from './LocalizedLink'

interface ContentFallbackBannerProps {
  contentLocale: Locale
}

export function ContentFallbackBanner({ contentLocale }: ContentFallbackBannerProps) {
  const { t } = useTranslation()
  const { locale, pathWithoutLocale } = useLocale()

  if (locale === contentLocale) return null

  const languageName = getLanguageInfo(locale).english

  return (
    <div
      role="status"
      className="mb-4 rounded-md border border-cb-border bg-cb-bg px-4 py-3 text-sm text-cb-muted"
    >
      {t('fallback.banner', { language: languageName })}{' '}
      <LocalizedLink
        to={localizePath('zh', pathWithoutLocale)}
        className="text-cb-link hover:underline"
      >
        {t('fallback.viewZh')}
      </LocalizedLink>
      {contentLocale !== 'en' && (
        <>
          {' · '}
          <LocalizedLink
            to={localizePath('en', pathWithoutLocale)}
            className="text-cb-link hover:underline"
          >
            {t('fallback.viewEn')}
          </LocalizedLink>
        </>
      )}
    </div>
  )
}
