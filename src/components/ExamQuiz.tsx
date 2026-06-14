import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { ExamMeta, ExamQuestion } from '../content/exam/gut-care'
import { LocalizedLink } from './LocalizedLink'

type AnswerValue = string | string[] | boolean | undefined

interface ExamQuizProps {
  meta: ExamMeta
  questions: ExamQuestion[]
}

function isAnswered(value: AnswerValue): boolean {
  if (value === undefined) return false
  if (Array.isArray(value)) return value.length > 0
  return true
}

function arraysEqual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false
  const sortedA = [...a].sort()
  const sortedB = [...b].sort()
  return sortedA.every((v, i) => v === sortedB[i])
}

function isCorrect(question: ExamQuestion, answer: AnswerValue): boolean {
  if (!isAnswered(answer)) return false

  if (question.type === 'single') {
    return answer === question.correct
  }

  if (question.type === 'truefalse') {
    return answer === question.correct
  }

  if (question.type === 'multiple' && Array.isArray(answer) && Array.isArray(question.correct)) {
    return arraysEqual(answer, question.correct)
  }

  return false
}

function typeLabel(type: ExamQuestion['type']): string {
  switch (type) {
    case 'single':
      return '单选'
    case 'multiple':
      return '多选'
    case 'truefalse':
      return '判断'
  }
}

export function ExamQuiz({ meta, questions }: ExamQuizProps) {
  const { t } = useTranslation()
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({})
  const [submitted, setSubmitted] = useState(false)

  const sections = useMemo(() => {
    const map = new Map<string, { title: string; items: ExamQuestion[] }>()
    for (const q of questions) {
      const key = q.section
      if (!map.has(key)) {
        map.set(key, { title: q.sectionTitle, items: [] })
      }
      map.get(key)!.items.push(q)
    }
    return [...map.entries()]
  }, [questions])

  const answeredCount = questions.filter((q) => isAnswered(answers[q.id])).length

  const score = useMemo(() => {
    if (!submitted) return 0
    return questions.reduce((sum, q) => {
      return sum + (isCorrect(q, answers[q.id]) ? q.points : 0)
    }, 0)
  }, [submitted, questions, answers])

  const passed = score >= meta.passScore

  function setSingleAnswer(id: number, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
    if (submitted) setSubmitted(false)
  }

  function setTrueFalseAnswer(id: number, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
    if (submitted) setSubmitted(false)
  }

  function toggleMultipleAnswer(id: number, optionId: string) {
    setAnswers((prev) => {
      const current = prev[id]
      const selected = Array.isArray(current) ? current : []
      const next = selected.includes(optionId)
        ? selected.filter((v) => v !== optionId)
        : [...selected, optionId]
      return { ...prev, [id]: next }
    })
    if (submitted) setSubmitted(false)
  }

  function handleSubmit() {
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleRetry() {
    setAnswers({})
    setSubmitted(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3 border-b border-cb-border pb-6">
        <p className="font-mono text-xs text-cb-muted">
          {meta.subtitle} · {meta.version}
        </p>
        <h1 className="text-2xl font-semibold text-cb-text">{meta.title}</h1>
        <p className="text-sm text-cb-muted">
          {t('exam.intro', {
            count: meta.questionCount,
            total: meta.totalPoints,
            pass: meta.passScore,
          })}
        </p>
        <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
          {meta.disclaimer}
        </div>
      </header>

      {submitted && (
        <section
          className={`rounded-lg border px-6 py-5 ${
            passed
              ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-900/40 dark:bg-emerald-950/30'
              : 'border-orange-200 bg-orange-50 dark:border-orange-900/40 dark:bg-orange-950/30'
          }`}
        >
          <p className="font-mono text-sm text-cb-muted">{t('exam.resultLabel')}</p>
          <p className="mt-1 text-2xl font-semibold text-cb-text">
            {score} / {meta.totalPoints} {t('exam.points')}
          </p>
          <p className="mt-2 text-sm text-cb-text">
            {passed ? t('exam.passed', { pass: meta.passScore }) : t('exam.failed', { pass: meta.passScore })}
          </p>
          <p className="mt-2 text-sm text-cb-muted">
            {score >= 90
              ? t('exam.adviceExcellent')
              : score >= meta.passScore
                ? t('exam.advicePass')
                : score >= 60
                  ? t('exam.adviceReview')
                  : t('exam.adviceStudy')}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleRetry}
              className="rounded-md border border-cb-border bg-cb-surface px-4 py-2 text-sm text-cb-text hover:bg-cb-bg"
            >
              {t('exam.retry')}
            </button>
            <LocalizedLink
              to="/modules/gut-care"
              className="rounded-md border border-cb-border bg-cb-surface px-4 py-2 text-sm text-cb-link hover:bg-cb-bg"
            >
              {t('exam.reviewGuide')}
            </LocalizedLink>
          </div>
        </section>
      )}

      {sections.map(([sectionKey, section]) => (
        <section key={sectionKey} className="space-y-4">
          <h2 className="text-lg font-semibold text-cb-text">
            {sectionKey}. {section.title}
          </h2>

          {section.items.map((question) => {
            const answer = answers[question.id]
            const correct = submitted ? isCorrect(question, answer) : null
            const unanswered = submitted && !isAnswered(answer)

            return (
              <div
                key={question.id}
                className={`rounded-lg border p-5 ${
                  submitted
                    ? correct
                      ? 'border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/30 dark:bg-emerald-950/20'
                      : unanswered
                        ? 'border-orange-200 bg-orange-50/50 dark:border-orange-900/30 dark:bg-orange-950/20'
                        : 'border-red-200 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20'
                    : 'border-cb-border bg-cb-surface'
                }`}
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-cb-muted">
                    {t('exam.questionNo', { no: question.id })}
                  </span>
                  <span className="rounded bg-cb-bg px-2 py-0.5 font-mono text-xs text-cb-muted">
                    {typeLabel(question.type)}
                  </span>
                  <span className="font-mono text-xs text-cb-muted">
                    {question.points} {t('exam.points')}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-cb-text">{question.prompt}</p>

                <div className="mt-4 space-y-2">
                  {question.type === 'truefalse' ? (
                    <div className="flex flex-wrap gap-3">
                      {[
                        { value: true, label: t('exam.true') },
                        { value: false, label: t('exam.false') },
                      ].map((item) => (
                        <label
                          key={item.label}
                          className="flex cursor-pointer items-center gap-2 rounded-md border border-cb-border px-3 py-2 text-sm hover:bg-cb-bg"
                        >
                          <input
                            type="radio"
                            name={`q-${question.id}`}
                            checked={answer === item.value}
                            disabled={false}
                            onChange={() => setTrueFalseAnswer(question.id, item.value)}
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    question.options?.map((option) => {
                      const checked =
                        question.type === 'single'
                          ? answer === option.id
                          : Array.isArray(answer) && answer.includes(option.id)

                      return (
                        <label
                          key={option.id}
                          className="flex cursor-pointer items-start gap-2 rounded-md border border-cb-border px-3 py-2 text-sm hover:bg-cb-bg"
                        >
                          <input
                            type={question.type === 'single' ? 'radio' : 'checkbox'}
                            name={`q-${question.id}`}
                            checked={checked}
                            onChange={() =>
                              question.type === 'single'
                                ? setSingleAnswer(question.id, option.id)
                                : toggleMultipleAnswer(question.id, option.id)
                            }
                            className="mt-0.5"
                          />
                          <span className="leading-relaxed">{option.text}</span>
                        </label>
                      )
                    })
                  )}
                </div>

                {submitted && (
                  <div className="mt-4 border-t border-cb-border pt-3 text-sm">
                    {unanswered ? (
                      <p className="text-orange-700 dark:text-orange-300">{t('exam.unanswered')}</p>
                    ) : (
                      <p className={correct ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'}>
                        {correct ? t('exam.correct') : t('exam.incorrect')}
                      </p>
                    )}
                    <p className="mt-1 text-cb-muted">{question.explanation}</p>
                  </div>
                )}
              </div>
            )
          })}
        </section>
      ))}

      {!submitted && (
        <div className="sticky bottom-4 rounded-lg border border-cb-border bg-cb-surface/95 p-4 shadow-sm backdrop-blur">
          <p className="text-sm text-cb-muted">
            {t('exam.progress', { answered: answeredCount, total: questions.length })}
          </p>
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-3 w-full rounded-md bg-cb-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-cb-accent-hover sm:w-auto"
          >
            {t('exam.submit')}
          </button>
        </div>
      )}
    </div>
  )
}
