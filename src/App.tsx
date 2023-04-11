import React, { lazy } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { appletStore } from 'applet-store'
import { Provider } from 'react-redux'
import { AppletProvider, DefaultLayout, SubPageLayout } from 'applet-shell'
import LandingPage from './pages/LandingPage/LandingPage'

const CoverLetterPage = lazy(async () => await import('./pages/CoverLetterPage/CoverLetterPage'))
const CoverLettersPage = lazy(async () => await import('./pages/CoverLettersPage/CoverLettersPage'))
const CoverLetterFormPage = lazy(async () => await import('./pages/CoverLetterFormPage/CoverLetterFormPage'))
const ResumeFormPage = lazy(async () => await import('./pages/ResumeFormPage/ResumeFormPage'))
const ResumePage = lazy(async () => await import('./pages/ResumePage/ResumePage'))
const ResumesPage = lazy(async () => await import('./pages/ResumesPage/ResumesPage'))

const menus = [
  { path: '/', label: 'Home' },
  { path: '/resumes', label: 'Resumes' },
  { path: '/resumes/new', label: 'Create Resume' },
  { path: '/coverletters', label: 'Cover Letters' }
]

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route
        element={(
          <DefaultLayout
            menus={menus}
            title={'Career'}/>
      )}>
        <Route
          path="/"
          element={<LandingPage />} />
        <Route
          path="/resumes"
          element={<ResumesPage />} />
      </Route>
      <Route element={<SubPageLayout />}>
        <Route
          path="/resumes/:id"
          element={<ResumePage />} />
        <Route
          path="/resumes/new"
          element={<ResumeFormPage />} />
        <Route
          path="/resumes/:id/edit"
          element={<ResumeFormPage />} />
        <Route
          path="/coverletters"
          element={<CoverLettersPage />} />
        <Route
          path="/coverletters/:id"
          element={<CoverLetterPage />} />
        <Route
          path="/coverletters/new"
          element={<CoverLetterFormPage />} />
        <Route
          path="/coverletters/:id/edit"
          element={<CoverLetterFormPage />} />
      </Route>
    </Route>
  )
)

const App: React.FC = () => {
  return (
    <AppletProvider>
      <Provider store={appletStore}>
        <RouterProvider router={router} />
      </Provider>
    </AppletProvider>
  )
}

export default App
