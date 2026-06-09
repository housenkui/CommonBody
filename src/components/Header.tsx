import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-3 py-1.5 text-sm transition-colors',
    isActive
      ? 'bg-cb-bg font-medium text-cb-text'
      : 'text-cb-muted hover:bg-cb-bg hover:text-cb-text',
  ].join(' ')

export function Header() {
  return (
    <header className="border-b border-cb-border bg-cb-surface">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="group flex items-baseline gap-2 no-underline">
          <span className="font-mono text-lg font-semibold text-cb-accent group-hover:text-cb-accent-hover">
            CommonBody
          </span>
          <span className="hidden text-sm text-cb-muted sm:inline">共同体</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1">
          <NavLink to="/modules/gut-care" className={navLinkClass}>
            护理指南
          </NavLink>
          <NavLink to="/contribute" className={navLinkClass}>
            贡献
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            关于
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
