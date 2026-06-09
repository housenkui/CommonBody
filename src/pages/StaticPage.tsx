import { Navigate, useLocation } from 'react-router-dom'
import { getStaticPage } from '../content/pages'
import { MarkdownContent } from '../components/MarkdownContent'
import { usePageTitle } from '../hooks/usePageTitle'

export function StaticPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '')
  const page = getStaticPage(slug)

  usePageTitle(page?.title)

  if (!page) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="rounded-lg border border-cb-border bg-cb-surface p-6 sm:p-8">
      <MarkdownContent content={page.content} />
    </article>
  )
}
