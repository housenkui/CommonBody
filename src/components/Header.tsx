import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { LocalizedLink, LocalizedNavLink } from './LocalizedLink'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-3 py-1.5 text-sm transition-colors',
    isActive
      ? 'bg-cb-bg font-medium text-cb-text'
      : 'text-cb-muted hover:bg-cb-bg hover:text-cb-text',
  ].join(' ')

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="border-b border-cb-border bg-cb-surface">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <LocalizedLink to="/" className="group flex items-baseline gap-2 text-start no-underline">
          <span className="font-mono text-lg font-semibold text-cb-accent group-hover:text-cb-accent-hover">
            CommonBody
          </span>
          <span className="hidden text-sm text-cb-muted sm:inline">共同体</span>
        </LocalizedLink>

        <div className="flex flex-wrap items-center gap-2">
          <nav className="flex flex-wrap items-center gap-1">
            <LocalizedNavLink
              to="/stories/six-hemorrhoid-surgeries"
              className={navLinkClass}
            >
              {t('nav.story')}
            </LocalizedNavLink>
            <LocalizedNavLink to="/modules/gut-care" className={navLinkClass}>
              {t('nav.guide')}
            </LocalizedNavLink>
            <LocalizedNavLink to="/motivation" className={navLinkClass}>
              {t('nav.motivation')}
            </LocalizedNavLink>
            <LocalizedNavLink to="/contribute" className={navLinkClass}>
              {t('nav.contribute')}
            </LocalizedNavLink>
            <LocalizedNavLink to="/volunteers" className={navLinkClass}>
              {t('nav.volunteers')}
            </LocalizedNavLink>
            <LocalizedNavLink to="/about" className={navLinkClass}>
              {t('nav.about')}
            </LocalizedNavLink>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
