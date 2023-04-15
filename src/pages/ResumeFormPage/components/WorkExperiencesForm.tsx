import { Input, Label, TextArea } from 'applet-design'
import { type WorkExperience } from '../../../types/resume'

interface WorkExperiencesFormProps {
  onChange: (education: WorkExperience[]) => void
  workExperiences: WorkExperience[]
}

export default function WorkExperiencesForm({ workExperiences, onChange }: WorkExperiencesFormProps) {
  return (
    <div
      className="mb-4 "
      id="work-experiences">
      <Label>Work Experiences</Label>
      {workExperiences.map((experience, index) => (
        <div
          key={index}
          className="mb-4 dark:bg-gray-800 p-3">
          <Label
            htmlFor={`company-name-${index}`}
            >
            Company Name
          </Label>
          <Input
            type="text"
            id={`company-name-${index}`}
            value={experience.companyName}
            onChange={(event) => {
              onChange([
                ...workExperiences.slice(0, index),
                { ...experience, companyName: event.target.value },
                ...workExperiences.slice(index + 1)
              ])
            }}
          />
          <Label
            htmlFor={`job-title-${index}`}
            >
            Job Title
          </Label>
          <Input
            type="text"
            id={`job-title-${index}`}
            value={experience.jobTitle}
            onChange={(event) => {
              onChange([
                ...workExperiences.slice(0, index),
                { ...experience, jobTitle: event.target.value },
                ...workExperiences.slice(index + 1)
              ])
            }}
          />
          <Label
            htmlFor={`job-description-${index}`}
            >
            Job Description
          </Label>
          <TextArea
            id={`job-description-${index}`}
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
          <Label
            htmlFor={`start-date-${index}`}
            >
            Start Date
          </Label>
          <Input
            type="date"
            id={`start-date-${index}`}
            value={experience.startDate}
            onChange={(event) => {
              onChange([
                ...workExperiences.slice(0, index),
                { ...experience, startDate: event.target.value },
                ...workExperiences.slice(index + 1)
              ])
            }}
          />
          <Label
            htmlFor={`end-date-${index}`}
          >
            End Date
          </Label>
          <Input
            type="date"
            id={`end-date-${index}`}
            value={experience.endDate}
            onChange={(event) => {
              onChange([
                ...workExperiences.slice(0, index),
                { ...experience, endDate: event.target.value },
                ...workExperiences.slice(index + 1)
              ])
            }}
          />
          <button
            type="button"
            className="text-red-500 font-bold float-right dark:text-red-400"
            onClick={() => {
              onChange([...workExperiences.slice(0, index), ...workExperiences.slice(index + 1)])
            }}
>
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-green-500 font-bold mb-4 dark:text-green-400"
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
        }}
>
        Add Work Experience
      </button>
    </div>
  )
}
