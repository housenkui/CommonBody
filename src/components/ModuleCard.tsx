import { Link } from 'react-router-dom'
import type { Module } from '../content/modules'

interface ModuleCardProps {
  module: Module
}

export function ModuleCard({ module }: ModuleCardProps) {
  const { meta } = module

  return (
    <Link
      to={`/modules/${meta.id}`}
      className="group block rounded-lg border border-cb-border bg-cb-surface p-5 no-underline shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-cb-text group-hover:text-cb-accent">
          {meta.title}
        </h3>
        <span className="shrink-0 rounded-full border border-cb-border bg-cb-bg px-2 py-0.5 font-mono text-xs text-cb-muted">
          v{meta.version}
        </span>
      </div>

      <p className="mt-2 text-sm text-cb-muted">{meta.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-cb-border bg-cb-bg px-2 py-0.5 text-xs text-cb-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-cb-link group-hover:underline">
        阅读指南 →
      </p>
    </Link>
  )
}
