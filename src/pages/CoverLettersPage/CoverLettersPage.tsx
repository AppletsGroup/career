import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector, post } from 'applet-store'
import { useReachBottom } from 'use-reach-bottom'
import { type Post } from 'applet-types'
import { Link } from 'react-router-dom'
import { useApplet } from 'applet-shell'

const { setCurrentPage, setContentTypes, loadPosts } = post

const CoverLettersPage = () => {
  const listRef = useRef(null)
  const { hasNext, posts, currentPage, loadingPosts } = useAppSelector((state) => state.post)
  const dispatch = useAppDispatch()
  const applet = useApplet()

  useEffect(() => {
    applet?.setHeaderTitle('Cover Letters')
    applet?.setHeaderRightActions((<Link to="/coverletters/new">Create</Link>))
  }, [])

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
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coverLetters.map((coverLetter) => (
          <Link
            key={coverLetter.id}
            to={`/coverletters/${coverLetter.id}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{coverLetter.title}</h3>
              <p className="text-gray-600">{coverLetter.shortContent}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CoverLettersPage
