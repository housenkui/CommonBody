import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import volunteersMd from '../content/pages/volunteers.md?raw'
import { MarkdownContent } from '../components/MarkdownContent'
import { useLocale } from '../hooks/useLocale'
import { usePageTitle } from '../hooks/usePageTitle'
import { localizePath } from '../i18n/path'

const VOLUNTEERS_TITLE_ZH = '共同体志愿者招募'

export function VolunteersPage() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const isZh = locale === 'zh'

  usePageTitle(isZh ? VOLUNTEERS_TITLE_ZH : t('volunteers.unavailableTitle'))

  if (isZh) {
    return (
      <article className="rounded-lg border border-cb-border bg-cb-surface p-6 sm:p-8">
        <MarkdownContent content={volunteersMd} />
      </article>
    )
  }

  return (
    <article className="rounded-lg border border-cb-border bg-cb-surface px-6 py-12 text-center sm:px-8">
      <p className="font-mono text-sm text-cb-muted">{t('volunteers.label')}</p>
      <h1 className="mt-2 text-xl font-semibold text-cb-text">
        {t('volunteers.unavailableTitle')}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-cb-muted">{t('volunteers.unavailableBody')}</p>
      <Link
        to={localizePath('zh', '/volunteers')}
        className="mt-6 inline-block text-cb-link hover:underline"
      >
        {t('volunteers.viewZh')}
      </Link>
    </article>
  )
}
