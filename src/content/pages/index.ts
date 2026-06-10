import aboutMd from './about.md?raw'
import contributeMd from './contribute.md?raw'
import disclaimerMd from './disclaimer.md?raw'
import motivationMd from './motivation.md?raw'
import privacyMd from './privacy.md?raw'

export interface StaticPage {
  slug: string
  title: string
  content: string
}

export const staticPages: StaticPage[] = [
  { slug: 'about', title: '关于我们', content: aboutMd },
  { slug: 'motivation', title: '发心', content: motivationMd },
  { slug: 'contribute', title: '贡献内容', content: contributeMd },
  { slug: 'disclaimer', title: '免责声明', content: disclaimerMd },
  { slug: 'privacy', title: '隐私政策', content: privacyMd },
]

export function getStaticPage(slug: string): StaticPage | undefined {
  return staticPages.find((p) => p.slug === slug)
}
