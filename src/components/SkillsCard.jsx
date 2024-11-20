import React from 'react';

const SkillsCard = ({ skill, logo }) => {
  console.log(skill, logo);
  return (
    <div className="skill-card">
      <img src={logo} alt={skill} />
      <h3>{skill}</h3>
      <p>Proficiency: Intermediate</p>
    </div>
  );
};

export default SkillsCard;
