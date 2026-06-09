import { useEffect } from 'react'

const SITE_NAME = 'CommonBody'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} · 人类健康开源计划`
  }, [title])
}
