import sixSurgeriesMd from './six-hemorrhoid-surgeries.md?raw'

export interface Story {
  slug: string
  title: string
  description: string
  content: string
}

export const stories: Story[] = [
  {
    slug: 'six-hemorrhoid-surgeries',
    title: '六次痔疮手术的经历',
    description: '作者从安徽北方农村成长，2009 年至 2013 年六次手术，及此后十余年未再手术的康复与护理经验。',
    content: sixSurgeriesMd,
  },
]

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug)
}
