import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      role: 'MERN Industrial Trainee',
      company: 'Edu-Versity',
      duration: 'July 2024 - Aug 2024',
      description: 'Learnt & Developed MERN components',
      credential: '/certificates/Edu-Versity.jpg',
    },
    {
      role: 'Web Development Intern',
      company: 'Oasis Infobyte',
      duration: 'Oct 2023 - Nov 2023',
      description: 'Built web applications using Front-End Technologies.',
      credential: '/certificates/Oasis.png',
    },
    {
      role: 'Front-End Intern',
      company: 'Thekrita Technologies Pvt Lmtd',
      duration: 'July 2023 - Oct 2023',
      description: 'Developed responsive front-end components using React.js.',
      credential: '/certificates/Krita.jpg',
    },
    {
      role: 'Teaching Assistant',
      company: 'NxtWave',
      duration: 'Feb 2023 - Apr 2023',
      description: 'Guided students in coding assignments and projects.',
      credential: '/certificates/TA.png',
    },
  ];
  return (
    <div className="experience-section">
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </div>
  );
};

export default Experience;
