import { Dropdown } from 'applet-design'
import { Link } from 'react-router-dom'
import { HiDotsHorizontal } from 'react-icons/hi'

export default function HeaderRightAction({ coverLetterId }: { coverLetterId: string }) {
  const handleCloneCoverLetter = () => {

  }

  const handleExportPDF = () => {

  }

  return (
    <Dropdown
      overlay={(
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link
              to={`/coverletters/${coverLetterId}/edit`}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700"
        >
              Edit
            </Link>
            <button
              onClick={handleCloneCoverLetter}
              className='text-gray-700 block w-full px-4 py-2 text-left text-sm bg-gray-100'
        >
              Clone
            </button>
            <button
              onClick={handleExportPDF}
              className='text-gray-700 block w-full px-4 py-2 text-left text-sm bg-gray-100'
        >
              Export to PDF
            </button>
          </div>
        </div>
  )}
>
      <div className="flex items-center">
        <HiDotsHorizontal size={20} />
      </div>
    </Dropdown>
  )
}
