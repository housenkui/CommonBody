import { Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ModulePage } from './pages/ModulePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { StaticPage } from './pages/StaticPage'
import { StoryPage } from './pages/StoryPage'

/** 每次调用返回新的 Route 片段（React Router 不接受自定义组件包裹） */
export function createAppChildRoutes() {
  return (
    <>
      <Route index element={<HomePage />} />
      <Route path="stories/:slug" element={<StoryPage />} />
      <Route path="modules/:moduleId" element={<ModulePage />} />
      <Route path="modules/:moduleId/:sectionSlug" element={<ModulePage />} />
      <Route path="about" element={<StaticPage />} />
      <Route path="motivation" element={<StaticPage />} />
      <Route path="contribute" element={<StaticPage />} />
      <Route path="disclaimer" element={<StaticPage />} />
      <Route path="privacy" element={<StaticPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
}
