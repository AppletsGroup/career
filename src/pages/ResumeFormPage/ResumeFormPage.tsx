import { createPost, getPost, updatePost } from 'applet-apis'
import { useApplet } from 'applet-shell'
import { type Post } from 'applet-types'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { type Licence, type Education, type WorkExperience } from '../../types/resume'
import AwardsForm from './components/AwardsForm'
import EducationForm from './components/EducationForm'
import FormTabs from './components/FormTabs'
import LicencesForm from './components/LicencesForm'
import SkillsForm from './components/SkillsForm'
import WorkExperiencesForm from './components/WorkExperiencesForm'
import { Input, Label, TextArea } from 'applet-design'

const ResumeFormPage = () => {
  const [name, setName] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [summary, setSummary] = useState<string>('')
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([])
  const [education, setEducation] = useState<Education[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [licences, setLicences] = useState<Licence[]>([])
  const [awards, setAwards] = useState<string[]>([])
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const applet = useApplet()
  const resumeId = Number(id)

  useEffect(() => {
    const loadPost = async () => {
      const res = await getPost(resumeId)
      if (res) {
        setTitle(res.title)
        setSummary(res.content)
        const resumeStore = res.store
        setWorkExperiences(resumeStore.workExperiences)
        setEducation(resumeStore.education)
        setSkills(resumeStore.skills)
        setLicences(resumeStore.licences ?? [])
        setAwards(resumeStore.awards)
        setName(resumeStore.name ?? '')
      }
    }

    if (resumeId) {
      void loadPost()
    }
  }, [resumeId])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newResumeStore = {
      workExperiences,
      education,
      skills,
      licences,
      awards,
      name
    }

    if (resumeId > 0) {
      const updatedPost: {
        postId: number
        store: any
        channelId?: number
        title: string
        content: string
      } = {
        title,
        content: summary,
        postId: resumeId,
        store: newResumeStore
      }

      await updatePost(updatedPost)

      applet?.toast.success('Resume Update Success')

      navigate(`/resumes/${resumeId}`)
    } else {
      const post2Create: Post = {
        title,
        content: summary,
        contentType: 'RESUME',
        store: newResumeStore,
        isDraft: false
      }

      await createPost(post2Create)

      applet?.toast.success('Resume Create Success')
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900 ">
      <div className="max-w-2xl mx-auto">
        <FormTabs />
        <form
          onSubmit={handleSubmit}
          className="p-2">
          <div className="mb-4">
            <Label
              htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(event) => { setName(event.target.value) }} />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="title">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(event) => { setTitle(event.target.value) }} />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="summary">
              Summary
            </Label>
            <TextArea
              id="summary"
              rows={4}
              value={summary}
              onChange={(event) => { setSummary(event.target.value) }}
          />
          </div>

          <SkillsForm
            onChange={setSkills}
            skills={skills}
        />

          <WorkExperiencesForm
            onChange={setWorkExperiences}
            workExperiences={workExperiences}
        />

          <EducationForm
            onChange={setEducation}
            education={education}
        />

          <LicencesForm
            onChange={setLicences}
            licences={licences}
        />

          <AwardsForm
            onChange={setAwards}
            awards={awards}
        />

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
              Save
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default ResumeFormPage
