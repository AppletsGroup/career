import React from 'react'
import { FcDocument } from 'react-icons/fc'
import { AiOutlineExport, AiOutlineFilePdf, AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai'
import { SiTensorflow } from 'react-icons/si'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Welcome to our Resume Management App!
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Manage Your Resumes and Cover Letters with Ease
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Our app provides powerful features to help you create, edit, and optimize your resumes and cover letters.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-md bg-blue-600 text-white">
                <FcDocument className="w-8 h-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Edit with Ease</h3>
              <p className="mt-2 text-base text-gray-500">
                Our app provides a simple and intuitive interface to help you create and edit your resumes and cover letters with ease.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-md bg-blue-600 text-white">
                <AiOutlineExport className="w-8 h-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Export as PDF</h3>
              <p className="mt-2 text-base text-gray-500">
                You can easily export your resumes and cover letters as PDF files, so you can share them with potential employers or save them for future reference.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-md bg-blue-600 text-white">
                <SiTensorflow className="w-8 h-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">AI Powered Updates</h3>
              <p className="mt-2 text-base text-gray-500">
                Our app uses AI to analyze your resumes and cover letters and provide suggestions to help you optimize them for the job market.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-md bg-blue-600 text-white">
                <AiOutlineFilePdf className="w-8 h" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">PDF Compatibility</h3>
              <p className="mt-2 text-base text-gray-500">
                Our app ensures that your resumes and cover letters are compatible with PDF viewers, so you can be sure they will look great no matter where they are opened.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-md bg-blue-600 text-white">
                <AiOutlineEdit className="w-8 h-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Easy Editing</h3>
              <p className="mt-2 text-base text-gray-500">
                You can quickly and easily make changes to your resumes and cover letters using our app's editing tools and features.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-md bg-blue-600 text-white">
                <AiOutlineCheck className="w-8 h-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Match to Job Description</h3>
              <p className="mt-2 text-base text-gray-500">
                Our app uses AI to check whether your resumes and cover letters match the requirements of the job description, so you can increase your chances of getting hired.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
