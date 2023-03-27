import React from 'react';

export interface ExperienceProps {
  experiences: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}

export const ResumeExperience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-bold">{experience.position}</h3>
          <p className="text-gray-400">{experience.company}</p>
          <p className="text-gray-400">{experience.startDate} - {experience.endDate}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
};
