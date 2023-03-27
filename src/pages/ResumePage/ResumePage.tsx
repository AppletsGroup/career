import React from 'react'
import { ResumeDetail } from '../../components/ResumeDetail/ResumeDetail'
import { ResumeHeader } from '../../components/ResumeHeader/ResumeHeader'
import { ResumeSkills } from '../../components/ResumeSkills/ResumeSkills'
import { ResumeExperience } from '../../components/ResumeExperience/ResumeExperience'
import { ResumeEducation } from '../../components/ResumeEducation/ResumeEducation'
import ResumeProjects from '../../components/ResumeProjects/ResumeProjects'
import ResumeLanguages from '../../components/ResumeLanguages/ResumeLanguages'
import ResumeInterests from '../../components/ResumeInterests/ResumeInterests'

const ResumePage: React.FC = () => {
  const education = [
    {
      institution: 'University of California, Los Angeles',
      degree: 'Bachelor of Science in Computer Science',
      duration: 'September 2016 - June 2020'
    },
    {
      institution: 'University of California, Los Angeles',
      degree: 'Master of Science in Computer Science',
      duration: 'September 2020 - June 2022'
    }
  ]

  const experiences = [
    {
      company: 'Google',
      position: 'Software Engineer',
      startDate: 'June 2022',
      endDate: 'Present',
      description: 'Worked on the Google Search team to improve search results.'
    },
    {
      company: 'Facebook',
      position: 'Product Manager',
      startDate: 'June 2020',
      endDate: 'June 2022',
      description: 'Managed the development of Facebook\'s new video chat feature.'
    }
  ]

  return (
    <div className="bg-gray-900 text-white">
      <ResumeHeader
        name={''}
        title={''}
        email={''}
        phone={''}
        location={''} />
      <ResumeDetail />
      <ResumeSkills />
      <ResumeExperience experiences={experiences}/>
      <ResumeEducation education={education} />
      <ResumeProjects />
      <ResumeLanguages />
      <ResumeInterests />
    </div>
  )
}

export default ResumePage
