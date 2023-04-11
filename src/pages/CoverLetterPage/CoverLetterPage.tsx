import {
  useEditor,
  defaultPreset,
  EditorProvider,
  EditorContent
} from 'nonepub'
import 'nonepub/style.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPost } from 'applet-apis'
import { post, useAppDispatch, useAppSelector } from 'applet-store'
import HeaderRightAction from './components/HeaderRigthAction'
import { PageHeader, useApplet } from 'applet-shell'

const { initCurrentPost } = post

export default function CoverLetterPage() {
  const applet = useApplet()
  const { id } = useParams<{ id: string }>()
  const coverLetterId = Number(id)

  const [loaded, setLoaded] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { currentPost } = useAppSelector(state => state.post)
  const isAuthor = applet?.profile && applet.profile.id === currentPost?.authorId
  const dispatch = useAppDispatch()

  useEffect(() => {
    const loadPost = async () => {
      const res = await getPost(coverLetterId)
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
  }, [dispatch, coverLetterId])

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
    <>
      <PageHeader
        headerTitle="Cover Letter Detail"
        headerRightActions={isAuthor && coverLetterId ? <HeaderRightAction coverLetterId={coverLetterId} /> : <></>}/>

      <div className="mx-auto max-w-3xl pt-2">
        <div className="mt-2 py-5 px-3">
          <div className="text-center text-3xl">{title}</div>
        </div>
        <EditorProvider editor={editor}>
          <EditorContent />
        </EditorProvider>
      </div>
    </>
  )
}
