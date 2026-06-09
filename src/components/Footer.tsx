import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-cb-border bg-cb-surface">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold text-cb-accent">CommonBody</p>
            <p className="mt-1 text-sm text-cb-muted">
              Human Open Source Health Project
            </p>
            <p className="text-sm text-cb-muted">人类健康开源计划 · 非盈利公益项目</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/disclaimer" className="text-cb-link hover:text-cb-link-hover hover:underline">
              免责声明
            </Link>
            <Link to="/privacy" className="text-cb-link hover:text-cb-link-hover hover:underline">
              隐私政策
            </Link>
            <a
              href="mailto:housenkui@gmail.com"
              className="text-cb-link hover:text-cb-link-hover hover:underline"
            >
              联系邮箱
            </a>
          </div>
        </div>

        <p className="mt-6 border-t border-cb-border pt-4 text-xs text-cb-muted">
          内容由患者经验整理，未经医学机构认证，不构成医疗建议。
        </p>
      </div>
    </footer>
  )
}
