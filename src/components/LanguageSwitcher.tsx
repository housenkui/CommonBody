import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { isValidLocale, LANGUAGES } from '../i18n/languages'
import { switchLocalePath } from '../i18n/path'
import { useLocale, useLocalePath } from '../hooks/useLocale'

export function LanguageSwitcher() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const localePath = useLocalePath()
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <label className="flex items-center gap-1.5">
      <span className="sr-only">{t('language.label')}</span>
      <select
        value={localePath}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        onChange={(e) => {
          const next = e.target.value
          if (!isValidLocale(next)) return
          navigate(switchLocalePath(location.pathname, next))
        }}
        className="rounded-md border border-cb-border bg-cb-bg px-2 py-1.5 text-sm text-cb-text"
        aria-label={t('language.label')}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.native}
          </option>
        ))}
      </select>
    </label>
  )
}
