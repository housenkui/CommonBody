import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('页面未找到')

  return (
    <div className="rounded-lg border border-cb-border bg-cb-surface px-6 py-12 text-center">
      <p className="font-mono text-4xl font-semibold text-cb-muted">404</p>
      <h1 className="mt-2 text-xl font-semibold">页面未找到</h1>
      <p className="mt-2 text-cb-muted">你访问的页面不存在。</p>
      <Link
        to="/"
        className="mt-6 inline-block text-cb-link hover:underline"
      >
        返回首页
      </Link>
    </div>
  )
}
