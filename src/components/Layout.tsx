import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { MedicalAlert } from './MedicalAlert'

export function Layout() {
  return (
    <>
      <MedicalAlert />
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
