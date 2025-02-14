import React from 'react';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  type: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
  type
}) => {
  return (
    <div className="project-card-container">
      <div className="project-card-inner">
        <div className="project-card-front">
          <div className="project-image" style={{ backgroundImage: `url(${image})` }}>
            <div className="project-overlay" />
          </div>
          <div className="project-type">
            <span className="type-badge">{type}</span>
          </div>
          <h3 className="project-title">{title}</h3>
          <div className="project-tech-stack">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-pill">{tech}</span>
            ))}
          </div>
          <div className="card-decoration">
            <div className="corner top-left" />
            <div className="corner top-right" />
            <div className="corner bottom-left" />
            <div className="corner bottom-right" />
            <div className="scan-line" />
          </div>
        </div>

        <div className="project-card-back">
          <div className="project-content">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-links">
              {demoLink && (
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">
                  <i className="fas fa-external-link-alt"></i>
                  DEMO
                </a>
              )}
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                  <i className="fab fa-github"></i>
                  CÓDIGO
                </a>
              )}
            </div>
          </div>
          <div className="card-decoration">
            <div className="corner top-left" />
            <div className="corner top-right" />
            <div className="corner bottom-left" />
            <div className="corner bottom-right" />
            <div className="cyber-lines">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 