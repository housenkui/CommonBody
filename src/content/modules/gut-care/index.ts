import meta from './meta.json'
import indexMd from './index.md?raw'
import fruitsMd from './sections/fruits.md?raw'
import teaMd from './sections/tea.md?raw'
import exerciseMd from './sections/exercise.md?raw'
import mealsMd from './sections/meals.md?raw'
import lifestyleMd from './sections/lifestyle.md?raw'
import mindmapMd from './sections/mindmap.md?raw'

export interface ModuleSection {
  slug: string
  title: string
  content: string
}

export interface Module {
  meta: typeof meta
  index: string
  sections: ModuleSection[]
}

export const gutCareModule: Module = {
  meta,
  index: indexMd,
  sections: [
    { slug: 'fruits', title: '水果类', content: fruitsMd },
    { slug: 'tea', title: '茶饮类', content: teaMd },
    { slug: 'exercise', title: '运动类', content: exerciseMd },
    { slug: 'meals', title: '餐食推荐', content: mealsMd },
    { slug: 'lifestyle', title: '生活习惯', content: lifestyleMd },
    { slug: 'mindmap', title: '原始思维导图', content: mindmapMd },
  ],
}
