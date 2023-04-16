import React from 'react'
import { Link } from 'react-router-dom'
import { type Resume } from '../../types/resume'

interface Props {
  resume: Resume
}

const ResumeCard: React.FC<Props> = ({ resume }) => {
  return (
    <Link
      to={`/resumes/${resume.id}`}
      className="bg-white dark:bg-gray-800 hover:bg-gray-100 shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{resume.title}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">{resume.summary}</p>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700">
        <dl>
          <div className="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Skills</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">{resume.skills?.join(', ')}</dd>
          </div>
        </dl>
      </div>
    </Link>
  )
}

export default ResumeCard
