import { useTranslation } from 'react-i18next'
import { useLocale } from '../hooks/useLocale'
import type { Module } from '../content/modules'
import { LocalizedNavLink } from './LocalizedLink'

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
  const { t } = useTranslation()
  const { locale } = useLocale()
  const { meta, sections } = module

  return (
    <aside className="w-full shrink-0 lg:w-52">
      <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-cb-muted">
        {meta.title}
      </p>
      <nav className="flex flex-col gap-0.5">
        <LocalizedNavLink to={`/modules/${meta.id}`} end className={linkClass}>
          {t('module.overview')}
        </LocalizedNavLink>
        {sections.map((section) => (
          <LocalizedNavLink
            key={section.slug}
            to={`/modules/${meta.id}/${section.slug}`}
            className={linkClass}
          >
            {section.title}
          </LocalizedNavLink>
        ))}
        {meta.id === 'gut-care' && locale === 'zh' && (
          <LocalizedNavLink to="/exam/gut-care" className={linkClass}>
            {t('exam.sidebar')}
          </LocalizedNavLink>
        )}
      </nav>
    </aside>
  )
}
