import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceCard = ({ experience }) => {
  const {role, company, duration, description, credential } = experience;
  return (
    <div className="experience-card">
        <h3>{role} - {company}</h3>
        <p><strong>{duration}</strong></p>
        <p>{description}</p>
        <Link to={credential} target='_blank'><button>Credential</button></Link>
    </div>
  );
};

export default ExperienceCard;
