import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector, post } from 'applet-store'
import { useReachBottom } from 'use-reach-bottom'
import { type Post } from 'applet-types'
import { Link } from 'react-router-dom'

const { setCurrentPage, setContentTypes, loadPosts } = post

const CoverLettersPage = () => {
  const listRef = useRef(null)
  const { hasNext, posts, currentPage, loadingPosts } = useAppSelector((state) => state.post)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const initData = (): void => {
      dispatch(setContentTypes(['COVER_LETTER']))
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

  const coverLetters = posts.map((postItem: Post) => {
    const { id, title, content, store } = postItem
    const { shortContent } = store

    return {
      id,
      title,
      content,
      shortContent
    }
  })

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-5 sm:px-6 lg:px-8 px-4">
        <h2 className="text-3xl font-extrabold text-blue-500">Cover Letters</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {coverLetters.map((coverLetter) => (
            <Link
              key={coverLetter.id}
              to={`/coverletters/${coverLetter.id}`}>
              {/* cover letter item detail */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{coverLetter.title}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">{coverLetter.shortContent}</p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <dt className="text-sm font-medium text-gray-500">Content</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{coverLetter.content}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoverLettersPage
