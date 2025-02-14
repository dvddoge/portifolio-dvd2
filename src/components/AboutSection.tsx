import React from 'react';
import '../styles/AboutSection.css';

interface AboutSectionProps {
  description: string[];
  interests: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  description,
  interests,
  stats
}) => {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="about-content">
          <div className="about-description">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-decoration">
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-interests">
          <h3 className="interests-title">ÁREAS DE INTERESSE</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-item">
                <div className="interest-icon">
                  <div className="icon-border">
                    <span className="corner"></span>
                    <span className="corner"></span>
                    <span className="corner"></span>
                    <span className="corner"></span>
                  </div>
                  <i className={`fas fa-${getIconForInterest(interest)}`}></i>
                </div>
                <span className="interest-text">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-decoration">
        <div className="cyber-circuit">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="circuit-line">
              <span className="node"></span>
              <span className="line"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Função auxiliar para mapear interesses para ícones
const getIconForInterest = (interest: string): string => {
  const iconMap: { [key: string]: string } = {
    'Desenvolvimento Web': 'globe',
    'Inteligência Artificial': 'brain',
    'Cloud Computing': 'cloud',
    'Cybersegurança': 'shield-alt',
    'Mobile': 'mobile-alt',
    'IoT': 'microchip',
    'DevOps': 'server',
    'UI/UX': 'paint-brush'
  };

  return iconMap[interest] || 'code';
};

export default AboutSection; 