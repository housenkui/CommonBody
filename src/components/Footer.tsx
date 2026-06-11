import { useTranslation } from 'react-i18next'
import { LocalizedLink } from './LocalizedLink'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-auto border-t border-cb-border bg-cb-surface">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold text-cb-accent">CommonBody</p>
            <p className="mt-1 text-sm text-cb-muted">{t('site.tagline')}</p>
            <p className="text-sm text-cb-muted">{t('site.taglineZh')}</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <LocalizedLink
              to="/disclaimer"
              className="text-cb-link hover:text-cb-link-hover hover:underline"
            >
              {t('footer.disclaimer')}
            </LocalizedLink>
            <LocalizedLink
              to="/privacy"
              className="text-cb-link hover:text-cb-link-hover hover:underline"
            >
              {t('footer.privacy')}
            </LocalizedLink>
            <a
              href="mailto:housenkui@gmail.com"
              className="text-cb-link hover:text-cb-link-hover hover:underline"
            >
              {t('footer.contact')}
            </a>
          </div>
        </div>

        <p className="mt-6 border-t border-cb-border pt-4 text-xs text-cb-muted">
          {t('footer.note')}
        </p>
      </div>
    </footer>
  )
}
