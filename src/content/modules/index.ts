import type { Locale } from '../../i18n/languages'
import { getGutCareModule, type Module } from './gut-care'

export type { Module, ModuleSection, ModuleMeta } from './gut-care'

export function getModules(locale: Locale): Module[] {
  return [getGutCareModule(locale)]
}

export function getModule(id: string, locale: Locale): Module | undefined {
  return getModules(locale).find((m) => m.meta.id === id)
}

export function getModuleSection(moduleId: string, slug: string, locale: Locale) {
  const mod = getModule(moduleId, locale)
  return mod?.sections.find((s) => s.slug === slug)
}
