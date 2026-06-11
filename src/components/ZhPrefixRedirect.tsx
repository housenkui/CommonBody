import { Navigate, useLocation } from 'react-router-dom'

export function ZhPrefixRedirect() {
  const location = useLocation()
  const rest = location.pathname.replace(/^\/zh/, '') || '/'

  return (
    <Navigate
      to={{ pathname: rest, search: location.search, hash: location.hash }}
      replace
    />
  )
}
