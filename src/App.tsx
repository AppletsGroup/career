import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { appletStore } from 'applet-store'
import { Provider } from 'react-redux'

import { Toaster } from 'react-hot-toast'
import ResumesPage from './pages/ResumesPage/ResumesPage'
import ResumePage from './pages/ResumePage/ResumePage'
import ResumeFormPage from './pages/ResumeFormPage/ResumeFormPage'
import DefaultLayout from './layouts/DefaultLayout'
import LandingPage from './pages/LandingPage/LandingPage'
import SubPageLayout from './layouts/SubPageLayout'
import NavigationProvider from './layouts/Navigation'
import CoverLetterFormPage from './pages/CoverLetterFormPage/CoverLetterFormPage'
import CoverLettersPage from './pages/CoverLettersPage/CoverLettersPage'
import CoverLetterPage from './pages/CoverLetterPage/CoverLetterPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route element={<DefaultLayout />}>
        <Route
          path="/"
          element={<LandingPage />} />
        <Route
          path="/resumes"
          element={<ResumesPage />} />
      </Route>
      <Route element={<SubPageLayout />}>
        <Route
          path="/resumes/:resumeId"
          element={<ResumePage />} />
        <Route
          path="/resumes/new"
          element={<ResumeFormPage />} />
        <Route
          path="/resumes/:resumeId/edit"
          element={<ResumeFormPage />} />
        <Route
          path="/coverletters"
          element={<CoverLettersPage />} />
        <Route
          path="/coverletters/:coverLetterId"
          element={<CoverLetterPage />} />
        <Route
          path="/coverletters/new"
          element={<CoverLetterFormPage />} />
        <Route
          path="/coverletters/:coverLetterId/edit"
          element={<CoverLetterFormPage />} />
      </Route>
    </Route>
  )
)

const App: React.FC = () => {
  return (

    <NavigationProvider>
      <Provider store={appletStore}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </NavigationProvider>
  )
}

export default App
