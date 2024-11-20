import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const {demo,name, description, link} = project
  return (
    <div className="project-card">
      <img src={demo} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={link}><button>View Project</button></Link>
    </div>
  );
};

export default ProjectCard;
