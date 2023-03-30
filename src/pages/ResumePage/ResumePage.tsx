import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from 'applet-apis'
import { type Resume } from '../../types/resume'
import AwardsDetail from './components/AwardsDetail'
import EducationDetail from './components/EducationDetail'
import WorkExperienceDetail from './components/WorkExperienceDetail'
import SkillsDetail from './components/SkillsDetail'
import ContactDetail from './components/ContactDetail'
import { useNavigation } from '../../layouts/Navigation'
import HeaderRightAction from './components/HeaderRigthAction'
// import EditButton from './components/EditButton'

const ResumePage = () => {
  const { resumeId } = useParams<{ resumeId: string }>()
  const [resume, setResume] = React.useState<Resume | null>(null)
  const navigation = useNavigation()
  const [hasConfigNavigation, setHasConfigNavigation] = useState(false)

  useEffect(() => {
    if (!hasConfigNavigation && navigation && resumeId) {
      console.log('yeah...')
      navigation?.setHeaderRightActions(<HeaderRightAction resumeId={resumeId} />)
      setHasConfigNavigation(true)
    }
  }, [navigation])

  useEffect(() => {
    const loadPost = async () => {
      const post = await getPost(Number(resumeId))
      const { id, title, content, store } = post
      const { workExperiences, education, skills, awards, contact } = store

      setResume({
        id,
        title,
        summary: content,
        contact,
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

      <ContactDetail contact={resume.contact} />
      <SkillsDetail skills={resume.skills} />
      <WorkExperienceDetail workExperiences={resume.workExperiences} />
      <EducationDetail educations={resume.education} />
      <AwardsDetail awards={resume.awards} />

      {/* {resumeId && (<EditButton resumeId={resumeId} />)} */}
    </div>
  )
}

export default ResumePage
