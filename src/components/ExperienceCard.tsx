import React from 'react';
import '../styles/ExperienceCard.css';

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  period,
  description,
  technologies
}) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div className="experience-title">
          <h3>{position}</h3>
          <span className="company">{company}</span>
        </div>
        <div className="experience-period">
          <div className="cyber-badge">{period}</div>
        </div>
      </div>
      
      <p className="experience-description">{description}</p>
      
      <div className="experience-tech">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            <span className="tech-dot" />
            {tech}
          </span>
        ))}
      </div>

      <div className="corner-decoration top-left" />
      <div className="corner-decoration top-right" />
      <div className="corner-decoration bottom-left" />
      <div className="corner-decoration bottom-right" />
    </div>
  );
};

export default ExperienceCard; 