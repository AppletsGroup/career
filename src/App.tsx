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
          path="/resume/:resumeId"
          element={<ResumePage />} />
        <Route
          path="/resume/new"
          element={<ResumeFormPage />} />
        <Route
          path="/resume/edit/:resumeId"
          element={<ResumeFormPage />} />
      </Route>
    </Route>
  )
)

const App: React.FC = () => {
  return (
    <Provider store={appletStore}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  )
}

export default App
