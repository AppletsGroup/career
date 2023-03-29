import { Outlet, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function SubPageLayout() {
  const navigate = useNavigate()

  const navigteBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
        <div
          onClick={navigteBack}
          className="text-gray-600 flex items-center">
          <FiArrowLeft className="inline-block mr-2" />
        </div>
        <h1 className="text-lg font-semibold flex justify-center items-center flex-1 mr-auto ml-auto">Page Title</h1>
        <div></div>
      </div>
      <Outlet />
    </>
  )
}
