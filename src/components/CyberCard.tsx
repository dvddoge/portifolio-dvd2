import React from 'react';
import '../styles/CyberCard.css';

interface CyberCardProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  prompt?: string;
  className?: string;
}

const CyberCard: React.FC<CyberCardProps> = ({
  title,
  subtitle = "INTERACTIVE",
  highlight = "3D EFFECT",
  prompt = "HOVER ME",
  className = ""
}) => {
  return (
    <div className={`container noselect ${className}`}>
      <div className="canvas">
        {[...Array(25)].map((_, index) => (
          <div key={index} className={`tracker tr-${index + 1}`}></div>
        ))}
        <div id="card">
          <div className="card-content">
            <div className="card-glare"></div>
            <div className="cyber-lines">
              <span></span><span></span><span></span><span></span>
            </div>
            <p id="prompt">{prompt}</p>
            <div className="title">{title}</div>
            <div className="glowing-elements">
              <div className="glow-1"></div>
              <div className="glow-2"></div>
              <div className="glow-3"></div>
            </div>
            <div className="subtitle">
              <span>{subtitle}</span>
              <span className="highlight">{highlight}</span>
            </div>
            <div className="card-particles">
              {[...Array(6)].map((_, index) => (
                <span key={index}></span>
              ))}
            </div>
            <div className="corner-elements">
              <span></span><span></span><span></span><span></span>
            </div>
            <div className="scan-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberCard; 