import { useTranslation } from 'react-i18next'
import { getModules } from '../content/modules'
import { ModuleCard } from '../components/ModuleCard'
import { LocalizedLink } from '../components/LocalizedLink'
import { useLocale } from '../hooks/useLocale'
import { usePageTitle } from '../hooks/usePageTitle'

export function HomePage() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const modules = getModules(locale)
  usePageTitle()

  return (
    <div className="space-y-10">
      <section className="rounded-lg border border-cb-border bg-cb-surface px-6 py-8 sm:px-10 sm:py-10">
        <p className="font-mono text-sm text-cb-accent">{t('site.tagline')}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-cb-text sm:text-4xl">
          CommonBody
        </h1>
        <p className="mt-1 text-lg text-cb-muted">{t('home.subtitle')}</p>

        <div className="mt-6 space-y-3 border-s-4 border-cb-accent ps-4">
          <p className="text-cb-text">
            <span className="font-medium">{t('home.mission1en')}</span>
            <br />
            <span className="text-cb-muted">{t('home.mission1zh')}</span>
          </p>
          <p className="text-cb-text">
            <span className="font-medium">{t('home.mission2en')}</span>
            <br />
            <span className="text-cb-muted">{t('home.mission2zh')}</span>
          </p>
        </div>

        <p className="mt-6 max-w-2xl text-cb-muted">{t('home.intro')}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <LocalizedLink
            to="/stories/six-hemorrhoid-surgeries"
            className="inline-flex items-center rounded-md bg-cb-accent px-4 py-2 text-sm font-medium text-white no-underline hover:bg-cb-accent-hover"
          >
            {t('home.readStory')}
          </LocalizedLink>
          <LocalizedLink
            to="/modules/gut-care"
            className="inline-flex items-center rounded-md border border-cb-border bg-cb-bg px-4 py-2 text-sm font-medium text-cb-text no-underline hover:bg-cb-border/30"
          >
            {t('home.readGuide')}
          </LocalizedLink>
          <LocalizedLink
            to="/contribute"
            className="inline-flex items-center rounded-md border border-cb-border bg-cb-bg px-4 py-2 text-sm font-medium text-cb-text no-underline hover:bg-cb-border/30"
          >
            {t('home.contribute')}
          </LocalizedLink>
        </div>
      </section>

      <section>
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <LocalizedLink
            to="/motivation"
            className="block rounded-lg border border-cb-border bg-cb-surface p-5 no-underline shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="font-mono text-xs text-cb-accent">{t('home.motivationLabel')}</p>
            <h2 className="mt-1 text-lg font-semibold text-cb-text">
              {t('home.motivationTitle')}
            </h2>
            <p className="mt-2 text-sm text-cb-muted">{t('home.motivationDesc')}</p>
            <p className="mt-3 text-sm text-cb-link">{t('home.readMore')}</p>
          </LocalizedLink>

          <LocalizedLink
            to="/stories/six-hemorrhoid-surgeries"
            className="block rounded-lg border border-cb-border bg-cb-surface p-5 no-underline shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="font-mono text-xs text-cb-accent">{t('home.storyLabel')}</p>
            <h2 className="mt-1 text-lg font-semibold text-cb-text">{t('home.storyTitle')}</h2>
            <p className="mt-2 text-sm text-cb-muted">{t('home.storyDesc')}</p>
            <p className="mt-3 text-sm text-cb-link">{t('home.readMore')}</p>
          </LocalizedLink>
        </div>

        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-cb-text">{t('home.modulesTitle')}</h2>
          <span className="font-mono text-xs text-cb-muted">
            {t('home.modulesCount', { count: modules.length })}
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((mod) => (
            <ModuleCard key={mod.meta.id} module={mod} />
          ))}
        </div>
        <p className="mt-4 text-sm text-cb-muted">
          {t('home.moreModules')}{' '}
          <LocalizedLink to="/contribute" className="text-cb-link hover:underline">
            {t('home.emailContribute')}
          </LocalizedLink>
          {t('home.moreModulesEnd')}
        </p>
      </section>
    </div>
  )
}
