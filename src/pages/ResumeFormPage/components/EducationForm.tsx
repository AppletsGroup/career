import { type Education } from '../../../types/resume'

interface EducationFormProps {
  onChange: (education: Education[]) => void
  education: Education[]
}

export default function EducationForm({ education, onChange }: EducationFormProps) {
  return (
    <div
      className="mb-4"
      id="education">
      <label className="block text-gray-700 font-bold mb-2">Education</label>
      {education.map((edu, index) => (
        <div
          key={index}
          className="mb-4">
          <label
            htmlFor={`school-${index}`}
            className="block text-gray-700 font-bold mb-2">
            School
          </label>
          <input
            type="text"
            id={`school-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={edu.school}
            onChange={(event) => {
              onChange([
                ...education.slice(0, index),
                { ...edu, school: event.target.value },
                ...education.slice(index + 1)
              ])
            }
              }
            />
          <label
            htmlFor={`degree-${index}`}
            className="block text-gray-700 font-bold mb-2">
            {' '}
            Degree
            {' '}
          </label>
          <input
            type="text"
            id={`degree-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={edu.degree}
            onChange={(event) => { onChange([...education.slice(0, index), { ...edu, degree: event.target.value }, ...education.slice(index + 1)]) }} />
          <label
            htmlFor={`field-of-study-${index}`}
            className="block text-gray-700 font-bold mb-2">
            {' '}
            Field of Study
            {' '}
          </label>
          <input
            type="text"
            id={`field-of-study-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={edu.fieldOfStudy}
            onChange={(event) => { onChange([...education.slice(0, index), { ...edu, fieldOfStudy: event.target.value }, ...education.slice(index + 1)]) }} />
          <label
            htmlFor={`start-date-${index}`}
            className="block text-gray-700 font-bold mb-2">
            {' '}
            Start Date
            {' '}
          </label>
          <input
            type="date"
            id={`start-date-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={edu.startDate}
            onChange={(event) => { onChange([...education.slice(0, index), { ...edu, startDate: event.target.value }, ...education.slice(index + 1)]) }} />
          <label
            htmlFor={`end-date-${index}`}
            className="block text-gray-700 font-bold mb-2">
            {' '}
            End Date
            {' '}
          </label>
          <input
            type="date"
            id={`end-date-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={edu.endDate}
            onChange={(event) => {
              onChange([
                ...education.slice(0, index),
                { ...edu, endDate: event.target.value },
                ...education.slice(index + 1)
              ])
            }
              }
            />
          <button
            type="button"
            className="text-red-500 font-bold float-right"
            onClick={() => { onChange([...education.slice(0, index), ...education.slice(index + 1)]) }}
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
            ...education,
            {
              school: '',
              degree: '',
              fieldOfStudy: '',
              startDate: '',
              endDate: ''
            }
          ])
        }
          }
        >
        Add Education
      </button>
    </div>
  )
}
