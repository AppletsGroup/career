import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { appletStore } from 'applet-store'
import { Provider } from 'react-redux'

import { Toaster } from 'react-hot-toast'
import ResumesPage from './pages/ResumesPage/ResumesPage'
import ResumePage from './pages/ResumePage/ResumePage'
import ResumeFormPage from './pages/ResumeFormPage/ResumeFormPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/resumes"
        element={<ResumesPage />} />
      <Route
        path="/resume/:id"
        element={<ResumePage />} />
      <Route
        path="/resume/new"
        element={<ResumeFormPage />} />
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
