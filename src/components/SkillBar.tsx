import React from 'react';
import '../styles/SkillBar.css';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color = 'var(--primary)' }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-bar" 
          style={{ 
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${color}, ${color}88)`
          }}
        >
          <div className="skill-glow" style={{ background: color }} />
        </div>
        <div className="skill-lines">
          {[...Array(10)].map((_, i) => (
            <span 
              key={i} 
              className="skill-line"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillBar; 