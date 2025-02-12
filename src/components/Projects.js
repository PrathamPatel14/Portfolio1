import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {/* Project cards will go here */}
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Project description goes here</p>
          <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 