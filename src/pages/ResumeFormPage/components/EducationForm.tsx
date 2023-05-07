import { Heading, Input, Label } from 'applet-design'
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
      <Heading level={3}>Education</Heading>
      {education.map((edu, index) => (
        <div
          key={index}
          className="mb-4">
          <Label
            htmlFor={`school-${index}`}>
            School
          </Label>
          <Input
            id={`school-${index}`}
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
          <Label
            htmlFor={`degree-${index}`}>
            Degree
          </Label>
          <Input
            id={`degree-${index}`}
            value={edu.degree}
            onChange={(event) => { onChange([...education.slice(0, index), { ...edu, degree: event.target.value }, ...education.slice(index + 1)]) }}
          />
          <Label
            htmlFor={`field-of-study-${index}`}>
            Field of Study
          </Label>
          <Input
            id={`field-of-study-${index}`}
            value={edu.fieldOfStudy}
            onChange={(event) => { onChange([...education.slice(0, index), { ...edu, fieldOfStudy: event.target.value }, ...education.slice(index + 1)]) }}
          />
          <Label
            htmlFor={`start-date-${index}`}>
            Start Date
          </Label>
          <Input
            type="date"
            id={`start-date-${index}`}
            value={edu.startDate}
            onChange={(event) => { onChange([...education.slice(0, index), { ...edu, startDate: event.target.value }, ...education.slice(index + 1)]) }}
          />
          <Label
            htmlFor={`end-date-${index}`}>
            End Date
          </Label>
          <Input
            type="date"
            id={`end-date-${index}`}
            value={edu.endDate}
            onChange={(event) => {
              onChange([
                ...education.slice(0, index),
                { ...edu, endDate: event.target.value },
                ...education.slice(index + 1)
              ])
            }}
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
