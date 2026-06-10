import { Link } from 'react-router-dom'
import { modules } from '../content/modules'
import { ModuleCard } from '../components/ModuleCard'
import { usePageTitle } from '../hooks/usePageTitle'

export function HomePage() {
  usePageTitle()

  return (
    <div className="space-y-10">
      <section className="rounded-lg border border-cb-border bg-cb-surface px-6 py-8 sm:px-10 sm:py-10">
        <p className="font-mono text-sm text-cb-accent">Human Open Source Health Project</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-cb-text sm:text-4xl">
          CommonBody
        </h1>
        <p className="mt-1 text-lg text-cb-muted">共同体 · 人类健康开源计划</p>

        <div className="mt-6 space-y-3 border-l-4 border-cb-accent pl-4">
          <p className="text-cb-text">
            <span className="font-medium">Every patient can contribute knowledge.</span>
            <br />
            <span className="text-cb-muted">每一个患者都可以贡献知识。</span>
          </p>
          <p className="text-cb-text">
            <span className="font-medium">
              Every recovered patient can become a light for others.
            </span>
            <br />
            <span className="text-cb-muted">每一个康复者都可以成为后来者的灯塔。</span>
          </p>
        </div>

        <p className="mt-6 max-w-2xl text-cb-muted">
          我们分享患者与康复者的真实经验，开源非药物、非手术的日常改善方法，帮助普通人减少疾病痛苦。
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/stories/six-hemorrhoid-surgeries"
            className="inline-flex items-center rounded-md bg-cb-accent px-4 py-2 text-sm font-medium text-white no-underline hover:bg-cb-accent-hover"
          >
            阅读作者经历
          </Link>
          <Link
            to="/modules/gut-care"
            className="inline-flex items-center rounded-md border border-cb-border bg-cb-bg px-4 py-2 text-sm font-medium text-cb-text no-underline hover:bg-cb-border/30"
          >
            阅读护理指南
          </Link>
          <Link
            to="/contribute"
            className="inline-flex items-center rounded-md border border-cb-border bg-cb-bg px-4 py-2 text-sm font-medium text-cb-text no-underline hover:bg-cb-border/30"
          >
            贡献你的经验
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <Link
            to="/motivation"
            className="block rounded-lg border border-cb-border bg-cb-surface p-5 no-underline shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="font-mono text-xs text-cb-accent">Motivation</p>
            <h2 className="mt-1 text-lg font-semibold text-cb-text">发心</h2>
            <p className="mt-2 text-sm text-cb-muted">
              从 2014 年的愿望，到 App「滚蛋吧痔疮君」，再到今天的 CommonBody——但行好事，莫问前程。
            </p>
            <p className="mt-3 text-sm text-cb-link">阅读全文 →</p>
          </Link>

          <Link
            to="/stories/six-hemorrhoid-surgeries"
            className="block rounded-lg border border-cb-border bg-cb-surface p-5 no-underline shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="font-mono text-xs text-cb-accent">Author Story</p>
            <h2 className="mt-1 text-lg font-semibold text-cb-text">六次痔疮手术的经历</h2>
            <p className="mt-2 text-sm text-cb-muted">
              从安徽北方农村到六次手术，再到十余年未再手术——作者亲笔撰写的真实经历与教训。
            </p>
            <p className="mt-3 text-sm text-cb-link">阅读全文 →</p>
          </Link>
        </div>

        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-cb-text">健康模块</h2>
          <span className="font-mono text-xs text-cb-muted">{modules.length} module(s)</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((mod) => (
            <ModuleCard key={mod.meta.id} module={mod} />
          ))}
        </div>
        <p className="mt-4 text-sm text-cb-muted">
          更多主题（腰痛、失眠等）规划中，欢迎通过{' '}
          <Link to="/contribute" className="text-cb-link hover:underline">
            邮件投稿
          </Link>
          。
        </p>
      </section>
    </div>
  )
}
