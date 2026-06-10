import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ModulePage } from './pages/ModulePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { StaticPage } from './pages/StaticPage'
import { StoryPage } from './pages/StoryPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="stories/:slug" element={<StoryPage />} />
          <Route path="modules/:moduleId" element={<ModulePage />} />
          <Route path="modules/:moduleId/:sectionSlug" element={<ModulePage />} />
          <Route path="about" element={<StaticPage />} />
          <Route path="contribute" element={<StaticPage />} />
          <Route path="disclaimer" element={<StaticPage />} />
          <Route path="privacy" element={<StaticPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
