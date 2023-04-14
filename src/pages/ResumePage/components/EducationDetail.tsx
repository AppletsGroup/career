import { type Education } from '../../../types/resume'

export default function EducationDetail ({ educations }: { educations: Education[] }) {
  return (
    <div className="mb-8 dark:text-white">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      {educations.map((education) => (
        <div
          key={education.degree}
          className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold">{education.degree}</h3>
            <span className="text-gray-600 text-sm">
              {education.startDate}
              {' '}
              -
              {' '}
              {education.endDate ?? 'Present'}
            </span>
          </div>
          <div className="mb-2">
            <span className="text-gray-600 mr-2">School:</span>
            <span>{education.school}</span>
          </div>
          {
          education.location && (
            <div className="mb-2">
              <span className="text-gray-600 mr-2">Location:</span>
              <span>
                {education.location.city}
                ,
                {' '}
                {education.location.state}
                ,
                {' '}
                {education.location.country}
              </span>
            </div>
          )
        }
        </div>
      ))}
    </div>
  )
}
