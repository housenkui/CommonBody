import { gutCareModule, type Module } from './gut-care'

export type { Module, ModuleSection } from './gut-care'

export const modules: Module[] = [gutCareModule]

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.meta.id === id)
}

export function getModuleSection(moduleId: string, slug: string) {
  const mod = getModule(moduleId)
  return mod?.sections.find((s) => s.slug === slug)
}
