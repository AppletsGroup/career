import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from 'applet-apis'
import { type Resume } from '../../types/resume'
import AwardsDetail from './components/AwardsDetail'
import EducationDetail from './components/EducationDetail'
import WorkExperienceDetail from './components/WorkExperienceDetail'
import SkillsDetail from './components/SkillsDetail'
import ContactDetail from './components/ContactDetail'
import HeaderRightAction from './components/HeaderRigthAction'
import { PageHeader } from 'applet-shell'

const ResumePage = () => {
  const { id } = useParams<{ id: string }>()
  const [resume, setResume] = useState<Resume | null>(null)
  const resumeId = Number(id)

  useEffect(() => {
    const loadPost = async () => {
      const post = await getPost(resumeId)
      const { id, title, content, store } = post
      const { workExperiences, education, skills, awards, contact, name } = store

      setResume({
        id,
        title,
        summary: content,
        contact,
        workExperiences,
        education,
        skills,
        awards,
        name
      })
    }

    if (resumeId) {
      void loadPost()
    }
  }, [resumeId])

  if (resume == null) return <></>

  return (
    <>
      <PageHeader
        headerTitle="Resume Detail"
        headerRightActions={resumeId ? (<HeaderRightAction resume={resume} />) : <></>} />
      <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <div
          className="p-4 max-w-2xl mx-auto"
          id="resume-pdf">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{resume.name}</h1>
            <p className="text-lg">{resume.title}</p>
            <p className="text-lg">{resume.summary}</p>
          </div>

          <ContactDetail contact={resume.contact} />
          <SkillsDetail skills={resume.skills} />
          <WorkExperienceDetail workExperiences={resume.workExperiences} />
          <EducationDetail educations={resume.education} />
          <AwardsDetail awards={resume.awards} />
        </div>
      </div>
    </>
  )
}

export default ResumePage
