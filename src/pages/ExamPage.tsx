import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ExamQuiz } from '../components/ExamQuiz'
import { gutCareExamMeta, gutCareExamQuestions } from '../content/exam/gut-care'
import { useLocale } from '../hooks/useLocale'
import { usePageTitle } from '../hooks/usePageTitle'
import { localizePath } from '../i18n/path'

const EXAM_TITLE_ZH = '护理自测'

export function ExamPage() {
  const { t } = useTranslation()
  const { locale } = useLocale()
  const isZh = locale === 'zh'

  usePageTitle(isZh ? EXAM_TITLE_ZH : t('exam.unavailableTitle'))

  if (isZh) {
    return (
      <article className="rounded-lg border border-cb-border bg-cb-surface p-6 sm:p-8">
        <ExamQuiz meta={gutCareExamMeta} questions={gutCareExamQuestions} />
      </article>
    )
  }

  return (
    <article className="rounded-lg border border-cb-border bg-cb-surface px-6 py-12 text-center sm:px-8">
      <p className="font-mono text-sm text-cb-muted">{t('exam.label')}</p>
      <h1 className="mt-2 text-xl font-semibold text-cb-text">{t('exam.unavailableTitle')}</h1>
      <p className="mx-auto mt-4 max-w-md text-cb-muted">{t('exam.unavailableBody')}</p>
      <Link
        to={localizePath('zh', '/exam/gut-care')}
        className="mt-6 inline-block text-cb-link hover:underline"
      >
        {t('exam.viewZh')}
      </Link>
    </article>
  )
}
