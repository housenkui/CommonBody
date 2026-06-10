import { Navigate, useParams } from 'react-router-dom'
import { getStory } from '../content/stories'
import { MarkdownContent } from '../components/MarkdownContent'
import { usePageTitle } from '../hooks/usePageTitle'

export function StoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const story = slug ? getStory(slug) : undefined

  usePageTitle(story?.title)

  if (!story) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="rounded-lg border border-cb-border bg-cb-surface p-6 sm:p-8">
      <MarkdownContent content={story.content} />
    </article>
  )
}
