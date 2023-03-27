import { useState } from 'react'
import { type Resume } from '../../types/resume'

interface Props {
  resume: Resume
  onSave: (resume: Resume) => void
  onCancel: () => void
}

const ResumeForm = ({ resume, onSave, onCancel }: Props) => {
  const [title, setTitle] = useState(resume.title)
  const [summary, setSummary] = useState(resume.summary)
  const [workExperiences, setWorkExperiences] = useState(resume.workExperiences)
  const [education, setEducation] = useState(resume.education)
  const [skills, setSkills] = useState(resume.skills)
  const [awards, setAwards] = useState(resume.awards)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSave({
      ...resume,
      title,
      summary,
      workExperiences,
      education,
      skills,
      awards
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={(event) => { setTitle(event.target.value) }}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="summary"
          className="block text-gray-700 font-bold mb-2">
          Summary
        </label>
        <textarea
          id="summary"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={4}
          value={summary}
          onChange={(event) => { setSummary(event.target.value) }}
        />
      </div>
      <div className="mb-4">
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
                setWorkExperiences([
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
                setWorkExperiences([
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
                setWorkExperiences([
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
                setWorkExperiences([
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
                setWorkExperiences([
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
              onClick={() => { setWorkExperiences([...workExperiences.slice(0, index), ...workExperiences.slice(index + 1)]) }
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
            setWorkExperiences([
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
      <div className="mb-4">
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
                setEducation([
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
              onChange={(event) => { setEducation([...education.slice(0, index), { ...edu, degree: event.target.value }, ...education.slice(index + 1)]) }} />
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
              onChange={(event) => { setEducation([...education.slice(0, index), { ...edu, fieldOfStudy: event.target.value }, ...education.slice(index + 1)]) }} />
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
              onChange={(event) => { setEducation([...education.slice(0, index), { ...edu, startDate: event.target.value }, ...education.slice(index + 1)]) }} />
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
                setEducation([
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
              onClick={() => { setEducation([...education.slice(0, index), ...education.slice(index + 1)]) }}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="text-green-500 font-bold mb-4"
          onClick={() => {
            setEducation([
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
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Skills</label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={4}
          value={skills}
          onChange={(event) => { setSkills(event.target.value.split('/n')) }}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="skills"
          className="block text-gray-700 font-bold mb-2">
          Skills
        </label>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="mb-4">
            <input
              type="text"
              id={`skill-${index}`}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={skill}
              onChange={(event) => { setSkills([...skills.slice(0, index), event.target.value, ...skills.slice(index + 1)]) }
              }
            />
            <button
              type="button"
              className="text-red-500 font-bold float-right"
              onClick={() => { setSkills([...skills.slice(0, index), ...skills.slice(index + 1)]) }}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="text-green-500 font-bold mb-4"
          onClick={() => { setSkills([...skills, '']) }}
        >
          Add Skill
        </button>
      </div>

      {/* Awards */}
      <label
        htmlFor="awards"
        className="block text-gray-700 font-bold mb-2">
        Awards
      </label>
      {awards.map((award, index) => (
        <div
          key={index}
          className="mb-4">
          <input
            type="text"
            id={`award-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={award}
            onChange={(event) => { setAwards([...awards.slice(0, index), event.target.value, ...awards.slice(index + 1)]) }
              }
            />
          <button
            type="button"
            className="text-red-500 font-bold float-right"
            onClick={() => { setAwards([...awards.slice(0, index), ...awards.slice(index + 1)]) }}
            >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-green-500 font-bold mb-4"
        onClick={() => { setAwards([...awards, '']) }}
        >
        Add Award
      </button>

      {/* Submit button */}
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
        Save
      </button>
    </form>
  )
}

export default ResumeForm
