import { NavLink } from 'react-router-dom'
import type { Module } from '../content/modules'

interface ModuleSidebarProps {
  module: Module
}

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block rounded-md px-3 py-2 text-sm transition-colors',
    isActive
      ? 'bg-cb-bg font-medium text-cb-accent'
      : 'text-cb-muted hover:bg-cb-bg hover:text-cb-text',
  ].join(' ')

export function ModuleSidebar({ module }: ModuleSidebarProps) {
  const { meta, sections } = module

  return (
    <aside className="w-full shrink-0 lg:w-52">
      <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-cb-muted">
        {meta.title}
      </p>
      <nav className="flex flex-col gap-0.5">
        <NavLink to={`/modules/${meta.id}`} end className={linkClass}>
          概述
        </NavLink>
        {sections.map((section) => (
          <NavLink
            key={section.slug}
            to={`/modules/${meta.id}/${section.slug}`}
            className={linkClass}
          >
            {section.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
