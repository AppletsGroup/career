import { createPost, getPost, updatePost } from 'applet-apis'
import { type Post } from 'applet-types'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { type Licence, type Education, type WorkExperience } from '../../types/resume'
import AwardsForm from './components/AwardsForm'
import EducationForm from './components/EducationForm'
import FormTabs from './components/FormTabs'
import LicencesForm from './components/LicencesForm'
import SkillsForm from './components/SkillsForm'
import WorkExperiencesForm from './components/WorkExperiencesForm'

const ResumeFormPage = () => {
  const [name, setName] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [summary, setSummary] = useState<string>('')
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([])
  const [education, setEducation] = useState<Education[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [licences, setLicences] = useState<Licence[]>([])
  const [awards, setAwards] = useState<string[]>([])
  const { resumeId } = useParams<{ resumeId: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    const loadPost = async () => {
      const res = await getPost(Number(resumeId))
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

    if (resumeId !== null) {
      const updatedPost: {
        postId: number
        store: any
        channelId?: number
        title: string
        content: string
      } = {
        title,
        content: summary,
        postId: Number(resumeId),
        store: newResumeStore
      }

      await updatePost(updatedPost)

      toast.success('update Resume success')

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

      toast.success('create Resume success')
    }
  }

  return (
    <div>
      <FormTabs />
      <form
        onSubmit={handleSubmit}
        className="p-2">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(event) => { setName(event.target.value) }}
           />
        </div>
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

        <WorkExperiencesForm
          onChange={setWorkExperiences}
          workExperiences={workExperiences} />

        <EducationForm
          onChange={setEducation}
          education={education} />

        <SkillsForm
          onChange={setSkills}
          skills={skills} />

        <LicencesForm
          onChange={setLicences}
          licences={licences} />

        <AwardsForm
          onChange={setAwards}
          awards={awards} />
        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default ResumeFormPage
