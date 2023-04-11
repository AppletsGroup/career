import { Dropdown } from 'applet-design'
import { Link } from 'react-router-dom'
import { HiDotsHorizontal } from 'react-icons/hi'
import { type Resume } from '../../../types/resume'
import JSPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default function HeaderRightAction({ resume }: { resume: Resume }) {
  const handleCloneResume = () => {
  }

  const handleExportPDF = () => {
    const input = document.getElementById('resume-pdf')
    if (input) {
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png')
          const pdf = new JSPDF()
          const imgProps = pdf.getImageProperties(imgData)
          const pdfWidth = pdf.internal.pageSize.getWidth()
          const pdfHeight = pdf.internal.pageSize.getHeight()
          const imgHeight = (imgProps.height * pdfWidth) / imgProps.width
          const numPages = Math.ceil(imgHeight / pdfHeight)
          let yOffset = 0
          for (let i = 0; i < numPages; i++) {
            pdf.addImage(imgData, 'PNG', 0, -yOffset, pdfWidth, 0, '', 'NONE')
            yOffset += pdfHeight
            pdf.addPage()
          }
          pdf.save('download.pdf')
        }).catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <Dropdown
      overlay={(
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link
              to={`/resumes/${resume.id}/edit`}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700"
        >
              Edit
            </Link>
            <button
              onClick={handleCloneResume}
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
