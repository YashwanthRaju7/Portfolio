import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      name: 'Task Manager App',
      description: 'A web-based task manager built with the MERN stack.',
      link: 'https://github.com/Yashnani1234/Task_Manager_App.git',
      demo: '/images/task.png'
    },
    {
      name: 'Typing Test App',
      description: 'An app to test typing speed with a custom challenge feature.',
      link: 'https://github.com/Yashnani1234/Typing-Test.git',
      demo: '/images/typing.png'
    },
    {
      name: 'Calculator App',
      description: 'An app to calculate values',
      link: 'https://github.com/YashwanthRaju7/Calucator.git',
      demo: '/images/calculator.png'
    },
    {
      name: 'Age - Calculator App',
      description: 'An app to calculate values',
      link: 'https://github.com/YashwanthRaju7/Age_Calculator.git',
      demo: '/images/age_calculator.png'
    }
  ];

  return (
    <div className="projects-section">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;