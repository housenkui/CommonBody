import type { Locale } from '../../i18n/languages'
import { resolveByLocale } from '../locale'
import sixSurgeriesMd from './six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesEnMd from './en/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesJaMd from './ja/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesKoMd from './ko/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesDeMd from './de/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesZhTwMd from './zh-TW/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesViMd from './vi/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesThMd from './th/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesFrMd from './fr/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesEsMd from './es/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesRuMd from './ru/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesArMd from './ar/six-hemorrhoid-surgeries.md?raw'
import sixSurgeriesPtMd from './pt/six-hemorrhoid-surgeries.md?raw'

export interface Story {
  slug: string
  title: string
  description: string
  content: string
  contentLocale: Locale
}

type StoryEntry = Partial<
  Record<Locale, { title: string; description: string; content: string }>
>

const storiesBySlug: Record<string, StoryEntry> = {
  'six-hemorrhoid-surgeries': {
    zh: {
      title: '六次痔疮手术的经历',
      description:
        '作者从安徽北方农村成长，2009 年至 2013 年六次手术，及此后十余年未再手术的康复与护理经验。',
      content: sixSurgeriesMd,
    },
    en: {
      title: 'Six Hemorrhoid Surgeries',
      description:
        'From rural northern Anhui through six surgeries (2009–2013) to more than a decade without another operation—recovery and daily care.',
      content: sixSurgeriesEnMd,
    },
    ja: {
      title: '痔の手術を6回受けた経験',
      description:
        '安徽北部の農村から6回の手術（2009〜2013年）、その後10年以上再手術なし——回復と日常ケアの経験。',
      content: sixSurgeriesJaMd,
    },
    ko: {
      title: '치질 수술 6번의 경험',
      description:
        '안후이 북부 농촌에서 6번의 수술(2009~2013년), 그 후 10년 넘게 재수술 없이——회복과 일상 케어 경험.',
      content: sixSurgeriesKoMd,
    },
    de: {
      title: 'Sechs Hämorrhoiden-Operationen',
      description:
        'Vom ländlichen Nord-Anhui über sechs Operationen (2009–2013) bis zu über einem Jahrzehnt ohne erneuten Eingriff — Genesung und Alltagspflege.',
      content: sixSurgeriesDeMd,
    },
    'zh-TW': {
      title: '六次痔瘡手術的經歷',
      description:
        '作者從安徽北方農村成長，2009 年至 2013 年六次手術，及此後十餘年未再手術的康復與護理經驗。',
      content: sixSurgeriesZhTwMd,
    },
    vi: {
      title: 'Sáu lần phẫu thuật trĩ',
      description:
        'Từ nông thôn bắc An Huy qua sáu ca mổ (2009–2013) đến hơn mười năm không mổ lại — hồi phục và chăm sóc hàng ngày.',
      content: sixSurgeriesViMd,
    },
    th: {
      title: 'ผ่าตัดริดสีดวงทวารหกครั้ง',
      description:
        'จากชนบททางเหนือของอานฮุย ผ่าตัดหกครั้ง (2009–2013) มากกว่าสิบปีไม่ผ่าตัดอีก — การฟื้นตัวและการดูแลประจำวัน',
      content: sixSurgeriesThMd,
    },
    fr: {
      title: 'Six opérations des hémorroïdes',
      description:
        'Du nord rural de l\'Anhui à six opérations (2009–2013), puis plus de dix ans sans nouvelle intervention — récupération et soins quotidiens.',
      content: sixSurgeriesFrMd,
    },
    es: {
      title: 'Seis operaciones de hemorroides',
      description:
        'Del norte rural de Anhui a seis operaciones (2009–2013), luego más de diez años sin otra intervención — recuperación y cuidado diario.',
      content: sixSurgeriesEsMd,
    },
    ru: {
      title: 'Шесть операций на геморрое',
      description:
        'От сельского севера Аньхоя через шесть операций (2009–2013) к более чем десяти годам без повторной — восстановление и ежедневный уход.',
      content: sixSurgeriesRuMd,
    },
    ar: {
      title: 'ست عمليات بواسير',
      description:
        'من ريف أنهوي الشمال عبر ست عمليات (2009–2013) إلى أكثر من عشر سنوات دون عملية أخرى — التعافي والعناية اليومية.',
      content: sixSurgeriesArMd,
    },
    pt: {
      title: 'Seis cirurgias de hemorroidas',
      description:
        'Do interior do norte de Anhui a seis cirurgias (2009–2013), depois mais de uma década sem outra — recuperação e cuidado diário.',
      content: sixSurgeriesPtMd,
    },
  },
}

export function getStory(slug: string, locale: Locale): Story | undefined {
  const entry = storiesBySlug[slug]
  if (!entry) return undefined

  const resolved = resolveByLocale(entry, locale)
  if (!resolved) return undefined

  return {
    slug,
    title: resolved.value.title,
    description: resolved.value.description,
    content: resolved.value.content,
    contentLocale: resolved.contentLocale,
  }
}
