import { Navigate, useParams } from 'react-router-dom'
import { getStory } from '../content/stories'
import { ContentFallbackBanner } from '../components/ContentFallbackBanner'
import { MarkdownContent } from '../components/MarkdownContent'
import { useLocale } from '../hooks/useLocale'
import { usePageTitle } from '../hooks/usePageTitle'
import { localizePath } from '../i18n/path'

export function StoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const { locale } = useLocale()
  const story = slug ? getStory(slug, locale) : undefined

  usePageTitle(story?.title)

  if (!story) {
    return <Navigate to={localizePath(locale, '/')} replace />
  }

  return (
    <article className="rounded-lg border border-cb-border bg-cb-surface p-6 sm:p-8">
      <ContentFallbackBanner contentLocale={story.contentLocale} />
      <MarkdownContent content={story.content} />
    </article>
  )
}
