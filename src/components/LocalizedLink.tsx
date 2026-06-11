import { Link, type LinkProps, NavLink, type NavLinkProps } from 'react-router-dom'
import { localizePath } from '../i18n/path'
import { useLocalePath } from '../hooks/useLocale'

export function LocalizedLink({ to, ...props }: LinkProps) {
  const locale = useLocalePath()
  const localizedTo = typeof to === 'string' ? localizePath(locale, to) : to

  return <Link to={localizedTo} {...props} />
}

export function LocalizedNavLink({ to, ...props }: NavLinkProps) {
  const locale = useLocalePath()
  const localizedTo = typeof to === 'string' ? localizePath(locale, to) : to

  return <NavLink to={localizedTo} {...props} />
}
