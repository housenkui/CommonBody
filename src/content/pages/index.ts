import type { Locale } from '../../i18n/languages'
import { resolveByLocale } from '../locale'
import aboutMd from './about.md?raw'
import contributeMd from './contribute.md?raw'
import disclaimerMd from './disclaimer.md?raw'
import motivationMd from './motivation.md?raw'
import privacyMd from './privacy.md?raw'
import aboutEnMd from './en/about.md?raw'
import contributeEnMd from './en/contribute.md?raw'
import disclaimerEnMd from './en/disclaimer.md?raw'
import motivationEnMd from './en/motivation.md?raw'
import privacyEnMd from './en/privacy.md?raw'
import aboutJaMd from './ja/about.md?raw'
import contributeJaMd from './ja/contribute.md?raw'
import disclaimerJaMd from './ja/disclaimer.md?raw'
import motivationJaMd from './ja/motivation.md?raw'
import privacyJaMd from './ja/privacy.md?raw'
import aboutKoMd from './ko/about.md?raw'
import contributeKoMd from './ko/contribute.md?raw'
import disclaimerKoMd from './ko/disclaimer.md?raw'
import motivationKoMd from './ko/motivation.md?raw'
import privacyKoMd from './ko/privacy.md?raw'
import aboutDeMd from './de/about.md?raw'
import contributeDeMd from './de/contribute.md?raw'
import disclaimerDeMd from './de/disclaimer.md?raw'
import motivationDeMd from './de/motivation.md?raw'
import privacyDeMd from './de/privacy.md?raw'
import aboutZhTwMd from './zh-TW/about.md?raw'
import contributeZhTwMd from './zh-TW/contribute.md?raw'
import disclaimerZhTwMd from './zh-TW/disclaimer.md?raw'
import motivationZhTwMd from './zh-TW/motivation.md?raw'
import privacyZhTwMd from './zh-TW/privacy.md?raw'
import aboutViMd from './vi/about.md?raw'
import contributeViMd from './vi/contribute.md?raw'
import disclaimerViMd from './vi/disclaimer.md?raw'
import motivationViMd from './vi/motivation.md?raw'
import privacyViMd from './vi/privacy.md?raw'
import aboutThMd from './th/about.md?raw'
import contributeThMd from './th/contribute.md?raw'
import disclaimerThMd from './th/disclaimer.md?raw'
import motivationThMd from './th/motivation.md?raw'
import privacyThMd from './th/privacy.md?raw'
import aboutFrMd from './fr/about.md?raw'
import contributeFrMd from './fr/contribute.md?raw'
import disclaimerFrMd from './fr/disclaimer.md?raw'
import motivationFrMd from './fr/motivation.md?raw'
import privacyFrMd from './fr/privacy.md?raw'
import aboutEsMd from './es/about.md?raw'
import contributeEsMd from './es/contribute.md?raw'
import disclaimerEsMd from './es/disclaimer.md?raw'
import motivationEsMd from './es/motivation.md?raw'
import privacyEsMd from './es/privacy.md?raw'
import aboutRuMd from './ru/about.md?raw'
import contributeRuMd from './ru/contribute.md?raw'
import disclaimerRuMd from './ru/disclaimer.md?raw'
import motivationRuMd from './ru/motivation.md?raw'
import privacyRuMd from './ru/privacy.md?raw'
import aboutArMd from './ar/about.md?raw'
import contributeArMd from './ar/contribute.md?raw'
import disclaimerArMd from './ar/disclaimer.md?raw'
import motivationArMd from './ar/motivation.md?raw'
import privacyArMd from './ar/privacy.md?raw'
import aboutPtMd from './pt/about.md?raw'
import contributePtMd from './pt/contribute.md?raw'
import disclaimerPtMd from './pt/disclaimer.md?raw'
import motivationPtMd from './pt/motivation.md?raw'
import privacyPtMd from './pt/privacy.md?raw'

export interface StaticPage {
  slug: string
  title: string
  content: string
  contentLocale: Locale
}

type PageEntry = Partial<Record<Locale, { title: string; content: string }>>

const pagesBySlug: Record<string, PageEntry> = {
  about: {
    zh: { title: '关于我们', content: aboutMd },
    en: { title: 'About', content: aboutEnMd },
    ja: { title: '概要', content: aboutJaMd },
    ko: { title: '소개', content: aboutKoMd },
    de: { title: 'Über uns', content: aboutDeMd },
    'zh-TW': { title: '關於我們', content: aboutZhTwMd },
    vi: { title: 'Giới thiệu', content: aboutViMd },
    th: { title: 'เกี่ยวกับเรา', content: aboutThMd },
    fr: { title: 'À propos', content: aboutFrMd },
    es: { title: 'Acerca de', content: aboutEsMd },
    ru: { title: 'О проекте', content: aboutRuMd },
    ar: { title: 'عن المشروع', content: aboutArMd },
    pt: { title: 'Sobre', content: aboutPtMd },
  },
  motivation: {
    zh: { title: '发心', content: motivationMd },
    en: { title: 'Motivation', content: motivationEnMd },
    ja: { title: '創設の想い', content: motivationJaMd },
    ko: { title: '창립 취지', content: motivationKoMd },
    de: { title: 'Motivation', content: motivationDeMd },
    'zh-TW': { title: '發心', content: motivationZhTwMd },
    vi: { title: 'Động lực sáng lập', content: motivationViMd },
    th: { title: 'แรงจูงใจในการก่อตั้ง', content: motivationThMd },
    fr: { title: 'Motivation', content: motivationFrMd },
    es: { title: 'Motivación', content: motivationEsMd },
    ru: { title: 'Мотивация', content: motivationRuMd },
    ar: { title: 'الدافع', content: motivationArMd },
    pt: { title: 'Motivação', content: motivationPtMd },
  },
  contribute: {
    zh: { title: '贡献内容', content: contributeMd },
    en: { title: 'Contribute', content: contributeEnMd },
    ja: { title: '内容の投稿', content: contributeJaMd },
    ko: { title: '콘텐츠 기여', content: contributeKoMd },
    de: { title: 'Mitwirken', content: contributeDeMd },
    'zh-TW': { title: '貢獻內容', content: contributeZhTwMd },
    vi: { title: 'Đóng góp nội dung', content: contributeViMd },
    th: { title: 'ร่วมสนับสนุนเนื้อหา', content: contributeThMd },
    fr: { title: 'Contribuer', content: contributeFrMd },
    es: { title: 'Contribuir', content: contributeEsMd },
    ru: { title: 'Внести вклад', content: contributeRuMd },
    ar: { title: 'المساهمة', content: contributeArMd },
    pt: { title: 'Contribuir', content: contributePtMd },
  },
  disclaimer: {
    zh: { title: '免责声明', content: disclaimerMd },
    en: { title: 'Disclaimer', content: disclaimerEnMd },
    ja: { title: '免責事項', content: disclaimerJaMd },
    ko: { title: '면책 조항', content: disclaimerKoMd },
    de: { title: 'Haftungsausschluss', content: disclaimerDeMd },
    'zh-TW': { title: '免責聲明', content: disclaimerZhTwMd },
    vi: { title: 'Miễn trừ trách nhiệm', content: disclaimerViMd },
    th: { title: 'ข้อจำกัดความรับผิด', content: disclaimerThMd },
    fr: { title: 'Avertissement', content: disclaimerFrMd },
    es: { title: 'Aviso legal', content: disclaimerEsMd },
    ru: { title: 'Отказ от ответственности', content: disclaimerRuMd },
    ar: { title: 'إخلاء المسؤولية', content: disclaimerArMd },
    pt: { title: 'Aviso legal', content: disclaimerPtMd },
  },
  privacy: {
    zh: { title: '隐私政策', content: privacyMd },
    en: { title: 'Privacy Policy', content: privacyEnMd },
    ja: { title: 'プライバシーポリシー', content: privacyJaMd },
    ko: { title: '개인정보 처리방침', content: privacyKoMd },
    de: { title: 'Datenschutz', content: privacyDeMd },
    'zh-TW': { title: '隱私政策', content: privacyZhTwMd },
    vi: { title: 'Chính sách bảo mật', content: privacyViMd },
    th: { title: 'นโยบายความเป็นส่วนตัว', content: privacyThMd },
    fr: { title: 'Confidentialité', content: privacyFrMd },
    es: { title: 'Privacidad', content: privacyEsMd },
    ru: { title: 'Конфиденциальность', content: privacyRuMd },
    ar: { title: 'الخصوصية', content: privacyArMd },
    pt: { title: 'Privacidade', content: privacyPtMd },
  },
}

export function getStaticPage(slug: string, locale: Locale): StaticPage | undefined {
  const entry = pagesBySlug[slug]
  if (!entry) return undefined

  const resolved = resolveByLocale(entry, locale)
  if (!resolved) return undefined

  return {
    slug,
    title: resolved.value.title,
    content: resolved.value.content,
    contentLocale: resolved.contentLocale,
  }
}
