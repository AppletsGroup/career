import { type WorkExperience } from '../../../types/resume'

interface WorkExperiencesFormProps {
  onChange: (education: WorkExperience[]) => void
  workExperiences: WorkExperience[]
}

export default function WorkExperiencesForm({ workExperiences, onChange }: WorkExperiencesFormProps) {
  return (

    <div
      className="mb-4"
      id="work-experiences">
      <label className="block text-gray-700 font-bold mb-2">Work Experiences</label>
      {workExperiences.map((experience, index) => (
        <div
          key={index}
          className="mb-4">
          <label
            htmlFor={`company-name-${index}`}
            className="block text-gray-700 font-bold mb-2">
            Company Name
          </label>
          <input
            type="text"
            id={`company-name-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={experience.companyName}
            onChange={(event) => {
              onChange([
                ...workExperiences.slice(0, index),
                { ...experience, companyName: event.target.value },
                ...workExperiences.slice(index + 1)
              ])
            }
        }
      />
          <label
            htmlFor={`job-title-${index}`}
            className="block text-gray-700 font-bold mb-2">
            Job Title
          </label>
          <input
            type="text"
            id={`job-title-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={experience.jobTitle}
            onChange={(event) => {
              onChange([
                ...workExperiences.slice(0, index),
                { ...experience, jobTitle: event.target.value },
                ...workExperiences.slice(index + 1)
              ])
            }
        }
      />
          <label
            htmlFor={`job-description-${index}`}
            className="block text-gray-700 font-bold mb-2">
            Job Description
          </label>
          <textarea
            id={`job-description-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={4}
            value={experience.jobDescription}
            onChange={(event) => {
              onChange([
                ...workExperiences.slice(0, index),
                { ...experience, jobDescription: event.target.value },
                ...workExperiences.slice(index + 1)
              ])
            }
        }
      />
          <label
            htmlFor={`start-date-${index}`}
            className="block text-gray-700 font-bold mb-2">
            Start Date
          </label>
          <input
            type="date"
            id={`start-date-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={experience.startDate}
            onChange={(event) => {
              onChange([
                ...workExperiences.slice(0, index),
                { ...experience, startDate: event.target.value },
                ...workExperiences.slice(index + 1)
              ])
            }
        }
      />
          <label
            htmlFor={`end-date-${index}`}
            className="block text-gray-700 font-bold mb-2">
            End Date
          </label>
          <input
            type="date"
            id={`end-date-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={experience.endDate}
            onChange={(event) => {
              onChange([
                ...workExperiences.slice(0, index),
                { ...experience, endDate: event.target.value },
                ...workExperiences.slice(index + 1)
              ])
            }
        }
      />
          <button
            type="button"
            className="text-red-500 font-bold float-right"
            onClick={() => { onChange([...workExperiences.slice(0, index), ...workExperiences.slice(index + 1)]) }
        }
      >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-green-500 font-bold mb-4"
        onClick={() => {
          onChange([
            ...workExperiences,
            {
              companyName: '',
              jobTitle: '',
              jobDescription: '',
              startDate: '',
              endDate: ''
            }
          ])
        }
    }
  >
        Add Work Experience
      </button>
    </div>
  )
}
