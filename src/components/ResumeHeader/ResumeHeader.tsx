import React from 'react';

interface Props {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

export const ResumeHeader: React.FC<Props> = ({ name, title, email, phone, location }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{name}</h1>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-lg">{email}</p>
        <p className="text-lg">{phone}</p>
        <p className="text-lg">{location}</p>
      </div>
    </div>
  );
};
