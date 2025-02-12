import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A detailed description of your first project. Explain what technologies you used and what problems you solved.",
      demo: "#project-link-1",
      github: "#project-link-2"
    },
    {
      title: "Project 2",
      description: "Description of your second project. Make it engaging and informative.",
      demo: "#project-link-3",
      github: "#project-link-4"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 