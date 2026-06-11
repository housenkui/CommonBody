import { Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getModule } from '../content/modules'
import { ContentFallbackBanner } from '../components/ContentFallbackBanner'
import { MarkdownContent } from '../components/MarkdownContent'
import { LocalizedLink } from '../components/LocalizedLink'
import { ModuleSidebar } from '../components/ModuleSidebar'
import { useLocale } from '../hooks/useLocale'
import { usePageTitle } from '../hooks/usePageTitle'
import { localizePath } from '../i18n/path'

export function ModulePage() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const { moduleId, sectionSlug } = useParams<{
    moduleId: string
    sectionSlug?: string
  }>()

  const mod = moduleId ? getModule(moduleId, locale) : undefined
  const section =
    mod && sectionSlug
      ? mod.sections.find((s) => s.slug === sectionSlug)
      : undefined

  const pageTitle = mod ? (section ? section.title : mod.meta.title) : undefined
  usePageTitle(pageTitle)

  if (!mod) {
    return <Navigate to={localizePath(locale, '/')} replace />
  }

  if (sectionSlug && !section) {
    return <Navigate to={localizePath(locale, `/modules/${moduleId}`)} replace />
  }

  const content = section ? section.content : mod.index

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
      <ModuleSidebar module={mod} />

      <article className="min-w-0 flex-1">
        <ContentFallbackBanner contentLocale={mod.contentLocale} />

        {!section && locale === 'zh' && (
          <p className="mb-4 font-mono text-xs text-cb-muted">
            {mod.meta.titleEn} · v{mod.meta.version}
          </p>
        )}

        <div className="rounded-lg border border-cb-border bg-cb-surface p-6 sm:p-8">
          <MarkdownContent content={content} />
        </div>

        {section && (
          <div className="mt-4 flex justify-between text-sm">
            <LocalizedLink
              to={`/modules/${mod.meta.id}`}
              className="text-cb-link hover:underline"
            >
              {t('module.backToOverview')}
            </LocalizedLink>
          </div>
        )}
      </article>
    </div>
  )
}
