import { useTranslation } from 'react-i18next'
import { LocalizedLink } from '../components/LocalizedLink'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFoundPage() {
  const { t } = useTranslation()
  usePageTitle(t('notFound.title'))

  return (
    <div className="rounded-lg border border-cb-border bg-cb-surface px-6 py-12 text-center">
      <p className="font-mono text-4xl font-semibold text-cb-muted">404</p>
      <h1 className="mt-2 text-xl font-semibold">{t('notFound.title')}</h1>
      <p className="mt-2 text-cb-muted">{t('notFound.body')}</p>
      <LocalizedLink
        to="/"
        className="mt-6 inline-block text-cb-link hover:underline"
      >
        {t('notFound.back')}
      </LocalizedLink>
    </div>
  )
}
