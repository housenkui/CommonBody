import { useTranslation } from 'react-i18next'

export function MedicalAlert() {
  const { t } = useTranslation()

  return (
    <div
      role="alert"
      className="border-b border-cb-alert-border bg-cb-alert-bg px-4 py-2.5 text-sm text-cb-text"
    >
      <strong className="me-1 font-semibold">{t('alert.label')}</strong>
      {t('alert.body')}
    </div>
  )
}
