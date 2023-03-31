import { type WorkExperience } from '../../../types/resume'

export default function WorkExperienceDetail({ workExperiences }: { workExperiences: WorkExperience[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      {workExperiences.map((experience) => (
        <div
          key={experience.jobTitle}
          className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold">{experience.jobTitle}</h3>
            <span className="text-gray-600 text-sm">
              {experience.startDate}
              {' '}
              -
              {' '}
              {experience.endDate ?? 'Present'}
            </span>
          </div>
          <div className="mb-2">
            <span className="text-gray-600 mr-2">Company:</span>
            <span>{experience.companyName}</span>
          </div>
          {
              experience.location && (
                <div className="mb-2">
                  <span className="text-gray-600 mr-2">Location:</span>
                  <span>
                    {experience.location.city}
                    ,
                    {' '}
                    {experience.location.state}
                    ,
                    {' '}
                    {experience.location.country}
                  </span>
                </div>
              )
            }
          <div className="mb-2">
            {experience.jobDescription}
          </div>
        </div>
      ))}
    </div>
  )
}