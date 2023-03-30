import React from 'react'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'

const EditButton = ({ resumeId }: { resumeId: string }) => {
  return (
    <Link
      to={`/resumes/${resumeId}/edit`}
      className="fixed bottom-4 right-4 rounded-full bg-blue-500 p-3 text-white hover:bg-blue-600 transition-all duration-200"
    >
      <FaEdit className="text-xl" />
    </Link>
  )
}

export default EditButton
