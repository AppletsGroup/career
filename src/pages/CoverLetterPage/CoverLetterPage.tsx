import {
  useEditor,
  defaultPreset,
  EditorProvider,
  EditorContent
} from 'nonepub'
import 'nonepub/style.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPost } from 'applet-apis'
import { post, useAppDispatch, useAppSelector } from 'applet-store'
import { Dropdown } from 'applet-design'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import HeaderRightAction from './components/HeaderRigthAction'
import { useApplet } from 'applet-shell'

const { initCurrentPost } = post

export default function CoverLetterPage() {
  const { coverLetterId } = useParams<{ coverLetterId: string, groupId: string, postId: string }>()

  const [loaded, setLoaded] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { isAuthed, profile } = useAppSelector(state => state.user)
  const { currentPost } = useAppSelector(state => state.post)
  const isAuthor = isAuthed && profile !== null && profile.id === currentPost?.authorId

  const dispatch = useAppDispatch()

  const applet = useApplet()
  const [hasConfigNavigation, setHasConfigNavigation] = useState(false)

  useEffect(() => {
    if (!hasConfigNavigation && applet && coverLetterId) {
      applet?.setHeaderRightActions(<HeaderRightAction coverLetterId={coverLetterId} />)
      setHasConfigNavigation(true)
    }
  }, [applet])

  useEffect(() => {
    const loadPost = async () => {
      const res = await getPost(Number(coverLetterId))
      if (res) {
        setTitle(res.title ?? '')
        setContent(res.content ?? '')
        dispatch(initCurrentPost(res))
      }
      setLoaded(true)
    }

    if (coverLetterId) {
      void loadPost()
    } else {
      setLoaded(true)
    }
  }, [dispatch, coverLetterId, isAuthed])

  const options = defaultPreset(
    {
      type: 'html',
      value: content || ''
    },
    {
      uploader: async (file) => {
        return await new Promise((resolve, reject) => {
          setTimeout(() => {
            const uri = URL.createObjectURL(file)
            console.log('upload uri', uri)
            resolve({
              src: uri
            })
          }, 1000)
        })
      },
      readonly: true
    }
  )
  const editor = useEditor(options)

  if (!loaded) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl pt-2">
      <div className="flex justify-between items-center px-3 py-2">
        {isAuthor && (
          <Dropdown
            overlay={(
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Link
                    to={`/coverletters/${coverLetterId}/edit`}
                    className="block w-full px-4 py-2 text-left text-sm"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            )}
          >
            <div className="flex items-center">
              <EllipsisHorizontalIcon
                className="h-7 w-7 text-stone-500"
                aria-hidden="true" />
            </div>
          </Dropdown>
        )}
      </div>
      <div className="mt-2 py-5 px-3">
        <div className="text-left text-3xl">{title}</div>
      </div>
      <EditorProvider editor={editor}>
        <EditorContent />
      </EditorProvider>
    </div>
  )
}
