import { Link, Navigate, useParams } from 'react-router-dom'
import { getModule } from '../content/modules'
import { MarkdownContent } from '../components/MarkdownContent'
import { ModuleSidebar } from '../components/ModuleSidebar'
import { usePageTitle } from '../hooks/usePageTitle'

export function ModulePage() {
  const { moduleId, sectionSlug } = useParams<{
    moduleId: string
    sectionSlug?: string
  }>()

  const mod = moduleId ? getModule(moduleId) : undefined
  const section =
    mod && sectionSlug
      ? mod.sections.find((s) => s.slug === sectionSlug)
      : undefined

  const pageTitle = mod ? (section ? section.title : mod.meta.title) : undefined
  usePageTitle(pageTitle)

  if (!mod) {
    return <Navigate to="/" replace />
  }

  if (sectionSlug && !section) {
    return <Navigate to={`/modules/${moduleId}`} replace />
  }

  const content = section ? section.content : mod.index

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <ModuleSidebar module={mod} />

      <article className="min-w-0 flex-1">
        {!section && (
          <p className="mb-4 font-mono text-xs text-cb-muted">
            {mod.meta.titleEn} · v{mod.meta.version}
          </p>
        )}

        <div className="rounded-lg border border-cb-border bg-cb-surface p-6 sm:p-8">
          <MarkdownContent content={content} />
        </div>

        {section && (
          <div className="mt-4 flex justify-between text-sm">
            <Link
              to={`/modules/${mod.meta.id}`}
              className="text-cb-link hover:underline"
            >
              ← 返回模块概述
            </Link>
          </div>
        )}
      </article>
    </div>
  )
}
