import { useEffect, useRef } from 'react'
import ResumeCard from '../../components/ResumeCard/ResumeCard'
import { useAppDispatch, useAppSelector, post } from 'applet-store'
import { useReachBottom } from 'use-reach-bottom'
import { type Resume } from '../../types/resume'
import { type Post } from 'applet-types'

const { setCurrentPage, setContentTypes, loadPosts } = post

const ResumesPage = () => {
  const listRef = useRef(null)
  const { hasNext, posts, currentPage, loadingPosts } = useAppSelector((state) => state.post)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const initData = (): void => {
      dispatch(setContentTypes(['RESUME']))
      void dispatch(loadPosts())
    }
    initData()
  }, [dispatch])

  useReachBottom(listRef, () => {
    if (hasNext && !loadingPosts) {
      dispatch(setCurrentPage(currentPage + 1))
      void dispatch(loadPosts())
    }
  })

  const resumes: Resume[] = posts.map((postItem: Post) => {
    const { id, title, content, store } = postItem
    const { workExperiences, education, skills, awards, contact } = store

    return {
      id,
      title: title ?? '',
      summary: content ?? '',
      contact,
      workExperiences,
      education,
      skills,
      awards
    }
  })

  return (
    <div className="bg-white dark:bg-gray-900 h-full">
      <div className="max-w-7xl mx-auto py-5 sm:px-6 lg:px-8 px-4">
        <h2 className="text-3xl font-extrabold text-blue-500 dark:text-white">Resumes</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {resumes.map((resume) => (
            <ResumeCard
              key={resume.id}
              resume={resume} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResumesPage
