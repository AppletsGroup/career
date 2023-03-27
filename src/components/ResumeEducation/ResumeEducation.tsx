import React from 'react'
import { type Education } from '../../types'

interface Props {
  education: Education[]
}

export const ResumeEducation: React.FC<Props> = ({ education }) => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold leading-tight text-gray-100">Education</h2>
        <div className="mt-4 space-y-4">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex">
              {/*               <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white">
                  <edu.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div> */}
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-100">{edu.degree}</h3>
                <p className="mt-2 text-base text-gray-400">{edu.institution}</p>
                <p className="mt-2 text-base text-gray-400">{edu.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
