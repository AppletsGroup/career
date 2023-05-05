export interface Licence {
  name: string // The job title or position of the work experience
  organisation?: string // The name of the company or organization
  issueData?: string // The start date of the work experience in YYYY-MM-DD format
  expireData?: string // An optional end date of the work experience in YYYY-MM-DD format
  description: string
}

export interface WorkExperience {
  jobTitle: string // The job title or position of the work experience
  companyName: string // The name of the company or organization
  startDate: string // The start date of the work experience in YYYY-MM-DD format
  endDate?: string // An optional end date of the work experience in YYYY-MM-DD format
  location?: {
    city: string // The city of the work experience
    state: string // The state or province of the work experience
    country: string // The country of the work experience
  }
  jobDescription: string
}

export interface Education {
  school: string // The name of the educational institution
  degree: string // The degree or program of study
  startDate: string // The start date of the education in YYYY-MM-DD format
  endDate?: string // An optional end date of the education in YYYY-MM-DD format
  location?: {
    city: string // The city of the education
    state: string // The state or province of the education
    country: string // The country of the education
  }
  description?: string // A brief description of the education
  fieldOfStudy?: string
}

export interface Contact {
  phone: string // The phone number of the person
  email: string // The email address of the person
  address?: {
    street: string // The street address of the person
    city: string // The city of the person
    state: string // The state or province of the person
    zip: string // The ZIP or postal code of the person
    country: string // The country of the person
  }
  website?: string // An optional personal website of the person
  socialMedia?: Record<string, string>
}

export interface Resume {
  id?: number
  name?: string // The full name of the person
  title: string // The professional title or position of the person
  summary: string // A brief summary or objective statement
  contact: Contact
  skills: string[] // An array of the person's skills
  workExperiences: WorkExperience[]
  education: Education[]
  licence?: Licence[]
  awards: string[] // An array of any awards or honors received
}

export const resumeExample: Resume = {
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

// const education = [
//   {
//     institution: 'University of California, Los Angeles',
//     degree: 'Bachelor of Science in Computer Science',
//     duration: 'September 2016 - June 2020'
//   },
//   {
//     institution: 'University of California, Los Angeles',
//     degree: 'Master of Science in Computer Science',
//     duration: 'September 2020 - June 2022'
//   }
// ]

// const experiences = [
//   {
//     company: 'Google',
//     position: 'Software Engineer',
//     startDate: 'June 2022',
//     endDate: 'Present',
//     description: 'Worked on the Google Search team to improve search results.'
//   },
//   {
//     company: 'Facebook',
//     position: 'Product Manager',
//     startDate: 'June 2020',
//     endDate: 'June 2022',
//     description: 'Managed the development of Facebook\'s new video chat feature.'
//   }
// ]
