import { Dropdown } from 'applet-design'
import { Link } from 'react-router-dom'
import { HiDotsHorizontal } from 'react-icons/hi'
import { type Resume } from '../../../types/resume'
import ResumePDF from '../../../components/ResumePDF/ResumePDF'
import { PDFDownloadLink } from '@react-pdf/renderer'

export default function HeaderRightAction({ resume }: { resume: Resume }) {
  const handleCloneResume = () => {
  }

  return (
    <Dropdown
      overlay={(
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-100 dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:text-white">
          <div className="py-1">
            <Link
              to={`/resumes/${resume.id}/edit`}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-white dark:bg-gray-700"
        >
              Edit
            </Link>
            <button
              onClick={handleCloneResume}
              className='text-gray-700 block w-full px-4 py-2 text-left text-sm bg-gray-100 dark:text-white dark:bg-gray-700'
        >
              Clone
            </button>
            <PDFDownloadLink
              document={<ResumePDF resumeData={resume}/>}
              fileName={`${resume.name} - ${resume.title}`}
              className='text-gray-700 block w-full px-4 py-2 text-left text-sm bg-gray-100 dark:text-white dark:bg-gray-700'
        >
              Export to PDF
            </PDFDownloadLink>
          </div>
        </div>
  )}
>
      <div className="flex items-center dark:text-gray-300">
        <HiDotsHorizontal size={20} />
      </div>
    </Dropdown>
  )
}
