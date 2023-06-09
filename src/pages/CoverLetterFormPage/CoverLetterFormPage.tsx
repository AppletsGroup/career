import { useState, useEffect, useRef, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createPost, getPost, updatePost } from 'applet-apis'
import {
  useEditor,
  defaultPreset,
  mobilePreset
} from 'nonepub'
import { Button, useIsMobile } from 'applet-design'
import { type Post } from 'applet-types'
import NonePubEditor from '../../components/NonePubEditor/NonePubEditor'
import { useAppDispatch, post } from 'applet-store'
import { PageHeader, useApplet } from 'applet-shell'

const { postAdded } = post
export default function CoverLetterFormPage () {
  const { id } = useParams<{ id: string }>()
  const coverLetterId = Number(id)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [loaded, setLoaded] = useState(false)
  const titleInputRef = useRef<HTMLInputElement>(null)
  const [title, setTitle] = useState('')
  const [resetEditorContent, setResetEditorContent] = useState(false)

  const isMobile = useIsMobile()
  const applet = useApplet()

  const editorPreset = isMobile ? mobilePreset : defaultPreset

  const options = useMemo(() => {
    return editorPreset(
      {
        type: 'html',
        value: '<p></p>'
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
            }, 4000)
          })
        },
        readonly: false
      }
    )
  }, [isMobile])
  const editor = useEditor(options)

  useEffect(() => {
    const loadPost = async () => {
      const res = await getPost(coverLetterId)
      if (res) {
        setTitle(res.title ?? '')
        editor.replaceContent(res.content || '<p></p>')
      }
      setLoaded(true)
    }

    if (coverLetterId) {
      void loadPost()
    } else {
      setLoaded(true)
    }
  }, [coverLetterId])

  if (!loaded) {
    return (
      <div>Loading...</div>
    )
  }

  async function handleConfirmSave() {
    const htmlString = editor.getContentHtml()
    const docTitle = titleInputRef.current?.value
    const shortContent = htmlString.replace(/<[^>]+>/g, '').substring(0, 100)

    if (coverLetterId > 0) {
      await updatePost({
        title: docTitle,
        content: htmlString,
        postId: coverLetterId,
        store: { shortContent }
      })

      navigate(`/coverletters/${coverLetterId}`, { replace: true })
    } else {
      const post2Create: Post = {
        contentType: 'COVER_LETTER',
        title: docTitle,
        content: htmlString,
        store: {
          shortContent
        },
        isDraft: false
      }
      const newPost = await createPost(post2Create)

      dispatch(postAdded({
        newPost,
        isTimeline: false
      }))
      if (titleInputRef.current != null) titleInputRef.current.value = ''
      setResetEditorContent(!resetEditorContent)

      applet?.toast.success('create cover letter success')
      navigate(`/coverletters/${newPost.id}`, { replace: true })
    }
  }

  return (
    <>
      <PageHeader
        headerTitle='Edit Cover Letter'
        headerRightActions={ (
          <Button
            onClick={handleConfirmSave}
            className="ml-2">
            Done
          </Button>
      )}/>
      <div className="mx-auto max-w-xl px-5 lg:px-0">
        <input
          defaultValue={title}
          ref={titleInputRef}
          placeholder='Cover Letter Title' />
        <NonePubEditor editor={editor} />
      </div>
    </>
  )
}
