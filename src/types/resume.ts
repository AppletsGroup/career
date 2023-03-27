export interface Resume {
  name: string // The full name of the person
  title: string // The professional title or position of the person
  summary: string // A brief summary or objective statement
  contact: {
    phone: string // The phone number of the person
    email: string // The email address of the person
    address: {
      street: string // The street address of the person
      city: string // The city of the person
      state: string // The state or province of the person
      zip: string // The ZIP or postal code of the person
      country: string // The country of the person
    }
    website?: string // An optional personal website of the person
    socialMedia?: Record<string, string>
  }
  skills: string[] // An array of the person's skills
  workExperiences: Array<{
    jobTitle: string // The job title or position of the work experience
    companyName: string // The name of the company or organization
    startDate: string // The start date of the work experience in YYYY-MM-DD format
    endDate?: string // An optional end date of the work experience in YYYY-MM-DD format
    location?: {
      city: string // The city of the work experience
      state: string // The state or province of the work experience
      country: string // The country of the work experience
    }
    jobDescription: string // A brief description of the work experience
  }>
  education: Array<{
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
  }>
  awards: string[] // An array of any awards or honors received
}
