import type { Locale } from '../../../i18n/languages'
import { localeFallbackChain, resolveByLocale } from '../../locale'
import meta from './meta.json'
import indexMd from './index.md?raw'
import fruitsMd from './sections/fruits.md?raw'
import teaMd from './sections/tea.md?raw'
import exerciseMd from './sections/exercise.md?raw'
import mealsMd from './sections/meals.md?raw'
import lifestyleMd from './sections/lifestyle.md?raw'
import mindmapMd from './sections/mindmap.md?raw'
import indexEnMd from './en/index.md?raw'
import fruitsEnMd from './en/sections/fruits.md?raw'
import teaEnMd from './en/sections/tea.md?raw'
import exerciseEnMd from './en/sections/exercise.md?raw'
import mealsEnMd from './en/sections/meals.md?raw'
import lifestyleEnMd from './en/sections/lifestyle.md?raw'
import mindmapEnMd from './en/sections/mindmap.md?raw'
import indexJaMd from './ja/index.md?raw'
import fruitsJaMd from './ja/sections/fruits.md?raw'
import teaJaMd from './ja/sections/tea.md?raw'
import exerciseJaMd from './ja/sections/exercise.md?raw'
import mealsJaMd from './ja/sections/meals.md?raw'
import lifestyleJaMd from './ja/sections/lifestyle.md?raw'
import mindmapJaMd from './ja/sections/mindmap.md?raw'
import indexKoMd from './ko/index.md?raw'
import fruitsKoMd from './ko/sections/fruits.md?raw'
import teaKoMd from './ko/sections/tea.md?raw'
import exerciseKoMd from './ko/sections/exercise.md?raw'
import mealsKoMd from './ko/sections/meals.md?raw'
import lifestyleKoMd from './ko/sections/lifestyle.md?raw'
import mindmapKoMd from './ko/sections/mindmap.md?raw'
import indexDeMd from './de/index.md?raw'
import fruitsDeMd from './de/sections/fruits.md?raw'
import teaDeMd from './de/sections/tea.md?raw'
import exerciseDeMd from './de/sections/exercise.md?raw'
import mealsDeMd from './de/sections/meals.md?raw'
import lifestyleDeMd from './de/sections/lifestyle.md?raw'
import mindmapDeMd from './de/sections/mindmap.md?raw'
import indexZhTwMd from './zh-TW/index.md?raw'
import fruitsZhTwMd from './zh-TW/sections/fruits.md?raw'
import teaZhTwMd from './zh-TW/sections/tea.md?raw'
import exerciseZhTwMd from './zh-TW/sections/exercise.md?raw'
import mealsZhTwMd from './zh-TW/sections/meals.md?raw'
import lifestyleZhTwMd from './zh-TW/sections/lifestyle.md?raw'
import mindmapZhTwMd from './zh-TW/sections/mindmap.md?raw'
import indexViMd from './vi/index.md?raw'
import fruitsViMd from './vi/sections/fruits.md?raw'
import teaViMd from './vi/sections/tea.md?raw'
import exerciseViMd from './vi/sections/exercise.md?raw'
import mealsViMd from './vi/sections/meals.md?raw'
import lifestyleViMd from './vi/sections/lifestyle.md?raw'
import mindmapViMd from './vi/sections/mindmap.md?raw'
import indexThMd from './th/index.md?raw'
import fruitsThMd from './th/sections/fruits.md?raw'
import teaThMd from './th/sections/tea.md?raw'
import exerciseThMd from './th/sections/exercise.md?raw'
import mealsThMd from './th/sections/meals.md?raw'
import lifestyleThMd from './th/sections/lifestyle.md?raw'
import mindmapThMd from './th/sections/mindmap.md?raw'
import indexFrMd from './fr/index.md?raw'
import fruitsFrMd from './fr/sections/fruits.md?raw'
import teaFrMd from './fr/sections/tea.md?raw'
import exerciseFrMd from './fr/sections/exercise.md?raw'
import mealsFrMd from './fr/sections/meals.md?raw'
import lifestyleFrMd from './fr/sections/lifestyle.md?raw'
import mindmapFrMd from './fr/sections/mindmap.md?raw'
import indexEsMd from './es/index.md?raw'
import fruitsEsMd from './es/sections/fruits.md?raw'
import teaEsMd from './es/sections/tea.md?raw'
import exerciseEsMd from './es/sections/exercise.md?raw'
import mealsEsMd from './es/sections/meals.md?raw'
import lifestyleEsMd from './es/sections/lifestyle.md?raw'
import mindmapEsMd from './es/sections/mindmap.md?raw'
import indexRuMd from './ru/index.md?raw'
import fruitsRuMd from './ru/sections/fruits.md?raw'
import teaRuMd from './ru/sections/tea.md?raw'
import exerciseRuMd from './ru/sections/exercise.md?raw'
import mealsRuMd from './ru/sections/meals.md?raw'
import lifestyleRuMd from './ru/sections/lifestyle.md?raw'
import mindmapRuMd from './ru/sections/mindmap.md?raw'
import indexArMd from './ar/index.md?raw'
import fruitsArMd from './ar/sections/fruits.md?raw'
import teaArMd from './ar/sections/tea.md?raw'
import exerciseArMd from './ar/sections/exercise.md?raw'
import mealsArMd from './ar/sections/meals.md?raw'
import lifestyleArMd from './ar/sections/lifestyle.md?raw'
import mindmapArMd from './ar/sections/mindmap.md?raw'
import indexPtMd from './pt/index.md?raw'
import fruitsPtMd from './pt/sections/fruits.md?raw'
import teaPtMd from './pt/sections/tea.md?raw'
import exercisePtMd from './pt/sections/exercise.md?raw'
import mealsPtMd from './pt/sections/meals.md?raw'
import lifestylePtMd from './pt/sections/lifestyle.md?raw'
import mindmapPtMd from './pt/sections/mindmap.md?raw'

export interface ModuleSection {
  slug: string
  title: string
  content: string
}

export interface ModuleMeta {
  id: string
  title: string
  titleEn: string
  titleJa: string
  titleKo: string
  titleDe: string
  titleZhTw: string
  titleVi: string
  titleTh: string
  titleFr: string
  titleEs: string
  titleRu: string
  titleAr: string
  titlePt: string
  description: string
  descriptionEn: string
  descriptionJa: string
  descriptionKo: string
  descriptionDe: string
  descriptionZhTw: string
  descriptionVi: string
  descriptionTh: string
  descriptionFr: string
  descriptionEs: string
  descriptionRu: string
  descriptionAr: string
  descriptionPt: string
  version: string
  tags: string[]
  tagsEn: string[]
  tagsJa: string[]
  tagsKo: string[]
  tagsDe: string[]
  tagsZhTw: string[]
  tagsVi: string[]
  tagsTh: string[]
  tagsFr: string[]
  tagsEs: string[]
  tagsRu: string[]
  tagsAr: string[]
  tagsPt: string[]
  status: string
}

export interface Module {
  meta: ModuleMeta
  index: string
  sections: ModuleSection[]
  contentLocale: Locale
}

const sectionsZh: ModuleSection[] = [
  { slug: 'fruits', title: '水果类', content: fruitsMd },
  { slug: 'tea', title: '茶饮类', content: teaMd },
  { slug: 'exercise', title: '运动类', content: exerciseMd },
  { slug: 'meals', title: '餐食推荐', content: mealsMd },
  { slug: 'lifestyle', title: '生活习惯', content: lifestyleMd },
  { slug: 'mindmap', title: '护理思维导图', content: mindmapMd },
]

const sectionsEn: ModuleSection[] = [
  { slug: 'fruits', title: 'Fruits', content: fruitsEnMd },
  { slug: 'tea', title: 'Tea', content: teaEnMd },
  { slug: 'exercise', title: 'Exercise', content: exerciseEnMd },
  { slug: 'meals', title: 'Meals', content: mealsEnMd },
  { slug: 'lifestyle', title: 'Daily Habits', content: lifestyleEnMd },
  { slug: 'mindmap', title: 'Care Mind Map', content: mindmapEnMd },
]

const sectionsJa: ModuleSection[] = [
  { slug: 'fruits', title: '果物', content: fruitsJaMd },
  { slug: 'tea', title: 'お茶', content: teaJaMd },
  { slug: 'exercise', title: '運動', content: exerciseJaMd },
  { slug: 'meals', title: '食事のすすめ', content: mealsJaMd },
  { slug: 'lifestyle', title: '生活習慣', content: lifestyleJaMd },
  { slug: 'mindmap', title: 'ケアのマインドマップ', content: mindmapJaMd },
]

const sectionsKo: ModuleSection[] = [
  { slug: 'fruits', title: '과일', content: fruitsKoMd },
  { slug: 'tea', title: '차', content: teaKoMd },
  { slug: 'exercise', title: '운동', content: exerciseKoMd },
  { slug: 'meals', title: '식사 추천', content: mealsKoMd },
  { slug: 'lifestyle', title: '생활 습관', content: lifestyleKoMd },
  { slug: 'mindmap', title: '케어 마인드맵', content: mindmapKoMd },
]

const sectionsDe: ModuleSection[] = [
  { slug: 'fruits', title: 'Obst', content: fruitsDeMd },
  { slug: 'tea', title: 'Tee', content: teaDeMd },
  { slug: 'exercise', title: 'Bewegung', content: exerciseDeMd },
  { slug: 'meals', title: 'Mahlzeiten', content: mealsDeMd },
  { slug: 'lifestyle', title: 'Gewohnheiten', content: lifestyleDeMd },
  { slug: 'mindmap', title: 'Pflege-Mindmap', content: mindmapDeMd },
]

const sectionsZhTw: ModuleSection[] = [
  { slug: 'fruits', title: '水果類', content: fruitsZhTwMd },
  { slug: 'tea', title: '茶飲類', content: teaZhTwMd },
  { slug: 'exercise', title: '運動類', content: exerciseZhTwMd },
  { slug: 'meals', title: '餐食推薦', content: mealsZhTwMd },
  { slug: 'lifestyle', title: '生活習慣', content: lifestyleZhTwMd },
  { slug: 'mindmap', title: '護理思維導圖', content: mindmapZhTwMd },
]

const sectionsVi: ModuleSection[] = [
  { slug: 'fruits', title: 'Trái cây', content: fruitsViMd },
  { slug: 'tea', title: 'Trà', content: teaViMd },
  { slug: 'exercise', title: 'Vận động', content: exerciseViMd },
  { slug: 'meals', title: 'Bữa ăn', content: mealsViMd },
  { slug: 'lifestyle', title: 'Thói quen', content: lifestyleViMd },
  { slug: 'mindmap', title: 'Sơ đồ chăm sóc', content: mindmapViMd },
]

const sectionsTh: ModuleSection[] = [
  { slug: 'fruits', title: 'ผลไม้', content: fruitsThMd },
  { slug: 'tea', title: 'ชา', content: teaThMd },
  { slug: 'exercise', title: 'การออกกำลัง', content: exerciseThMd },
  { slug: 'meals', title: 'มื้ออาหาร', content: mealsThMd },
  { slug: 'lifestyle', title: 'นิสัย', content: lifestyleThMd },
  { slug: 'mindmap', title: 'แผนผังการดูแล', content: mindmapThMd },
]

const sectionsFr: ModuleSection[] = [
  { slug: 'fruits', title: 'Fruits', content: fruitsFrMd },
  { slug: 'tea', title: 'Thé', content: teaFrMd },
  { slug: 'exercise', title: 'Exercice', content: exerciseFrMd },
  { slug: 'meals', title: 'Repas', content: mealsFrMd },
  { slug: 'lifestyle', title: 'Habitudes', content: lifestyleFrMd },
  { slug: 'mindmap', title: 'Carte mentale', content: mindmapFrMd },
]

const sectionsEs: ModuleSection[] = [
  { slug: 'fruits', title: 'Frutas', content: fruitsEsMd },
  { slug: 'tea', title: 'Té', content: teaEsMd },
  { slug: 'exercise', title: 'Ejercicio', content: exerciseEsMd },
  { slug: 'meals', title: 'Comidas', content: mealsEsMd },
  { slug: 'lifestyle', title: 'Hábitos', content: lifestyleEsMd },
  { slug: 'mindmap', title: 'Mapa mental', content: mindmapEsMd },
]

const sectionsRu: ModuleSection[] = [
  { slug: 'fruits', title: 'Фрукты', content: fruitsRuMd },
  { slug: 'tea', title: 'Чай', content: teaRuMd },
  { slug: 'exercise', title: 'Упражнения', content: exerciseRuMd },
  { slug: 'meals', title: 'Еда', content: mealsRuMd },
  { slug: 'lifestyle', title: 'Привычки', content: lifestyleRuMd },
  { slug: 'mindmap', title: 'Ментальная карта', content: mindmapRuMd },
]

const sectionsAr: ModuleSection[] = [
  { slug: 'fruits', title: 'الفواكه', content: fruitsArMd },
  { slug: 'tea', title: 'الشاي', content: teaArMd },
  { slug: 'exercise', title: 'التمرين', content: exerciseArMd },
  { slug: 'meals', title: 'الوجبات', content: mealsArMd },
  { slug: 'lifestyle', title: 'العادات', content: lifestyleArMd },
  { slug: 'mindmap', title: 'الخريطة الذهنية', content: mindmapArMd },
]

const sectionsPt: ModuleSection[] = [
  { slug: 'fruits', title: 'Frutas', content: fruitsPtMd },
  { slug: 'tea', title: 'Chá', content: teaPtMd },
  { slug: 'exercise', title: 'Exercício', content: exercisePtMd },
  { slug: 'meals', title: 'Refeições', content: mealsPtMd },
  { slug: 'lifestyle', title: 'Hábitos', content: lifestylePtMd },
  { slug: 'mindmap', title: 'Mapa mental', content: mindmapPtMd },
]

const contentByLocale: Partial<
  Record<Locale, { index: string; sections: ModuleSection[] }>
> = {
  zh: { index: indexMd, sections: sectionsZh },
  'zh-TW': { index: indexZhTwMd, sections: sectionsZhTw },
  en: { index: indexEnMd, sections: sectionsEn },
  ja: { index: indexJaMd, sections: sectionsJa },
  ko: { index: indexKoMd, sections: sectionsKo },
  de: { index: indexDeMd, sections: sectionsDe },
  vi: { index: indexViMd, sections: sectionsVi },
  th: { index: indexThMd, sections: sectionsTh },
  fr: { index: indexFrMd, sections: sectionsFr },
  es: { index: indexEsMd, sections: sectionsEs },
  ru: { index: indexRuMd, sections: sectionsRu },
  ar: { index: indexArMd, sections: sectionsAr },
  pt: { index: indexPtMd, sections: sectionsPt },
}

const metaByLocale: Partial<
  Record<Locale, { title: string; description: string; tags: string[] }>
> = {
  zh: { title: meta.title, description: meta.description, tags: meta.tags },
  en: {
    title: meta.titleEn,
    description: meta.descriptionEn,
    tags: meta.tagsEn,
  },
  ja: {
    title: meta.titleJa,
    description: meta.descriptionJa,
    tags: meta.tagsJa,
  },
  ko: {
    title: meta.titleKo,
    description: meta.descriptionKo,
    tags: meta.tagsKo,
  },
  de: {
    title: meta.titleDe,
    description: meta.descriptionDe,
    tags: meta.tagsDe,
  },
  'zh-TW': {
    title: meta.titleZhTw,
    description: meta.descriptionZhTw,
    tags: meta.tagsZhTw,
  },
  vi: {
    title: meta.titleVi,
    description: meta.descriptionVi,
    tags: meta.tagsVi,
  },
  th: {
    title: meta.titleTh,
    description: meta.descriptionTh,
    tags: meta.tagsTh,
  },
  fr: {
    title: meta.titleFr,
    description: meta.descriptionFr,
    tags: meta.tagsFr,
  },
  es: {
    title: meta.titleEs,
    description: meta.descriptionEs,
    tags: meta.tagsEs,
  },
  ru: {
    title: meta.titleRu,
    description: meta.descriptionRu,
    tags: meta.tagsRu,
  },
  ar: {
    title: meta.titleAr,
    description: meta.descriptionAr,
    tags: meta.tagsAr,
  },
  pt: {
    title: meta.titlePt,
    description: meta.descriptionPt,
    tags: meta.tagsPt,
  },
}

export function getLocalizedMeta(locale: Locale): ModuleMeta {
  for (const loc of localeFallbackChain(locale)) {
    const localized = metaByLocale[loc]
    if (localized) {
      return {
        ...meta,
        title: localized.title,
        description: localized.description,
        tags: localized.tags,
      }
    }
  }
  return meta
}

export function getGutCareModule(locale: Locale): Module {
  const resolved = resolveByLocale(contentByLocale, locale)!
  return {
    meta: getLocalizedMeta(locale),
    index: resolved.value.index,
    sections: resolved.value.sections,
    contentLocale: resolved.contentLocale,
  }
}
