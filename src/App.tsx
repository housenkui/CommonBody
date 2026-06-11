import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ZhPrefixRedirect } from './components/ZhPrefixRedirect'
import { NON_DEFAULT_LOCALES } from './i18n/languages'
import { createAppChildRoutes } from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/zh/*" element={<ZhPrefixRedirect />} />

        <Route element={<Layout />}>{createAppChildRoutes()}</Route>

        {NON_DEFAULT_LOCALES.map((locale) => (
          <Route key={locale} path={locale} element={<Layout />}>
            {createAppChildRoutes()}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  )
}
