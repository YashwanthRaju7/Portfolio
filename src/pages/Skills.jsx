import React from 'react';
import SkillsCard from '../components/SkillsCard';

const Skills = () => {
  const skills = [
    { skill: 'HTML', logo: '/logos/HTML.png' },
    { skill: 'CSS', logo: '/logos/CSS.png' },
    { skill: 'JavaScript', logo: '/logos/js.png' },
    { skill: 'React.js', logo: '/logos/React js.png' },
    { skill: 'Node.js', logo: '/logos/NodeJS.png' },
    { skill: 'Express.js', logo: '/logos/ExpressJS.png' },
    { skill: 'MongoDB', logo: '/logos/MongoDB.png' },
    { skill: 'MySQL', logo: '/logos/MySQL.png' }
  ]
  return (
    <div className="skills-section">
      {skills.map((each, index) => (
        <SkillsCard key={index} skill={each.skill} logo={each.logo} />
      ))}
    </div>
  );
};

export default Skills;
