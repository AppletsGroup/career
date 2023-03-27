import { type Resume } from '../../types/resume'
import ResumeForm from './ResumeForm'

export default function ResumeFormPage() {
  const resume: Resume = {
    name: 'John Doe',
    title: 'Software Engineer',
    summary: 'A highly skilled software engineer with experience developing web applications using various technologies.',
    contact: {
      phone: '555-555-5555',
      email: 'johndoe@email.com',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'NY',
        zip: '12345',
        country: 'USA'
      },
      website: 'www.johndoe.com',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe'
      }
    },
    skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    workExperiences: [
      {
        jobTitle: 'Software Engineer',
        companyName: 'ABC Company',
        startDate: '2019-01-01',
        endDate: '2022-02-28',
        location: {
          city: 'Anytown',
          state: 'NY',
          country: 'USA'
        },
        jobDescription: 'Developed and maintained web applications using React and Node.js.'
      },
      {
        jobTitle: 'Software Engineer Intern',
        companyName: 'XYZ Company',
        startDate: '2018-05-01',
        endDate: '2018-08-31',
        location: {
          city: 'Anytown',
          state: 'NY',
          country: 'USA'
        },
        jobDescription: 'Assisted in the development of a new web application using React and Node.js.'
      }
    ],
    education: [
      {
        school: 'University of Anytown',
        degree: 'Bachelor of Science in Computer Science',
        startDate: '2015-09-01',
        endDate: '2019-05-31',
        location: {
          city: 'Anytown',
          state: 'NY',
          country: 'USA'
        },
        fieldOfStudy: 'Computer Science'
      }
    ],
    awards: ['Dean\'s List, University of Anytown (2016-2019)']
  }

  return (
    <ResumeForm
      resume={resume}
      onSave={function (resume: Resume): void {
        throw new Error('Function not implemented.')
      } }
      onCancel={function (): void {
        throw new Error('Function not implemented.')
      } } />
  )
}
