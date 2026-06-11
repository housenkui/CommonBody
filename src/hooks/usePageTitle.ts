import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const SITE_NAME = 'CommonBody'

export function usePageTitle(title?: string) {
  const { t } = useTranslation()

  useEffect(() => {
    const suffix = t('site.subtitle')
    document.title = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} · ${suffix}`
  }, [title, t])
}
