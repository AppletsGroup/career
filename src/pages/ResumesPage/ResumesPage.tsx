import React from 'react';
import { Resume } from '../../types';
import ResumeCard from '../../components/ResumeCard/ResumeCard';

const ResumesPage = () => {
  const resumes: Resume[] = []
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">Your Resumes</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumesPage;
