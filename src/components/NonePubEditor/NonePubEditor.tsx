import {
  EditorProvider,
  EditorContent,
  HelpButton
} from 'nonepub'
import 'nonepub/style.css'

// eslint-disable-next-line react/prop-types
export default function NonePubEditor({ editor }: { editor: any }) {
  return (
    <div>
      <EditorProvider editor={editor}>
        <EditorContent />
        <HelpButton />
      </EditorProvider>
    </div>
  )
}
