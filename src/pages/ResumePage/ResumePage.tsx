import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from 'applet-apis'
import { type Resume } from '../../types/resume'

const ResumePage = () => {
  const { resumeId } = useParams<{ resumeId: string }>()
  const [resume, setResume] = React.useState<Resume | null>(null)

  useEffect(() => {
    const loadPost = async () => {
      const post = await getPost(Number(resumeId))
      const { id, title, content, store } = post
      const { workExperiences, education, skills, awards } = store

      setResume({
        id,
        title,
        summary: content,
        workExperiences,
        education,
        skills,
        awards
      })
    }

    if (resumeId) {
      void loadPost()
    }
  }, [resumeId])

  if (resume == null) return <></>

  return (
    <div className="p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{resume.name}</h1>
        <p className="text-lg">{resume.title}</p>
        <p className="text-lg">{resume.summary}</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="mb-2">
            <span className="text-gray-600 mr-2">Phone:</span>
            <a href={`tel:${resume.contact?.phone}`}>{resume.contact?.phone}</a>
          </div>
          <div className="mb-2">
            <span className="text-gray-600 mr-2">Email:</span>
            <a href={`mailto:${resume.contact?.email}`}>{resume.contact?.email}</a>
          </div>
          <div className="mb-2">
            <span className="text-gray-600 mr-2">Address:</span>
            <span>
              {resume.contact?.address.street}
              ,
              {' '}
              {resume.contact?.address.city}
              ,
              {' '}
              {resume.contact?.address.state}
              {' '}
              {resume.contact?.address.zip}
              ,
              {' '}
              {resume.contact?.address.country}
            </span>
          </div>
          {resume.contact?.website && (
            <div className="mb-2">
              <span className="text-gray-600 mr-2">Website:</span>
              <a
                href={resume.contact.website}
                target="_blank"
                rel="noopener noreferrer">
                {resume.contact.website}
              </a>
            </div>
          )}
          {resume.contact?.socialMedia && (
            <div>
              <span className="text-gray-600 mr-2">Social Media:</span>
              {Object.entries(resume.contact.socialMedia).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2">
                  {platform}
                </a>
              ))}
            </div>
          )}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside mb-4">
            {resume.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Work Experience</h2>
        {resume.workExperiences.map((experience) => (
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
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        {resume.education.map((education) => (
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
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Awards and Honors</h2>
        <ul className="list-disc list-inside">
          {resume.awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResumePage
