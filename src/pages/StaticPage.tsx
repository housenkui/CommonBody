import { Navigate } from 'react-router-dom'
import { getStaticPage } from '../content/pages'
import { ContentFallbackBanner } from '../components/ContentFallbackBanner'
import { MarkdownContent } from '../components/MarkdownContent'
import { useLocale } from '../hooks/useLocale'
import { usePageTitle } from '../hooks/usePageTitle'
import { localizePath } from '../i18n/path'

export function StaticPage() {
  const { locale, pathWithoutLocale } = useLocale()
  const slug = pathWithoutLocale.replace(/^\//, '').split('/')[0]
  const page = slug ? getStaticPage(slug, locale) : undefined

  usePageTitle(page?.title)

  if (!page) {
    return <Navigate to={localizePath(locale, '/')} replace />
  }

  return (
    <article className="rounded-lg border border-cb-border bg-cb-surface p-6 sm:p-8">
      <ContentFallbackBanner contentLocale={page.contentLocale} />
      <MarkdownContent content={page.content} />
    </article>
  )
}
