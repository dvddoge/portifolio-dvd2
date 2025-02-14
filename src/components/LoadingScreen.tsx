import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [percentage, setPercentage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [glitchText] = useState(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    return [...Array(5)].map(() => 
      [...Array(Math.floor(Math.random() * 10 + 5))]
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join('')
    );
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          handleLoadingComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleLoadingComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      onLoadingComplete();
    }, 500); // Tempo da animação de saída
  };

  useEffect(() => {
    const createParticle = () => {
      const particles = document.querySelector('.loading-particles');
      if (!particles) return;

      const particle = document.createElement('div');
      particle.className = 'loading-particle';
      particle.style.left = `${Math.random() * 100}%`;
      
      const duration = 4 + Math.random() * 4;
      particle.style.animation = `particleRise ${duration}s infinite linear`;
      
      particles.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };

    const particleInterval = setInterval(createParticle, 200);

    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className={`loading-screen ${isExiting ? 'fade-out' : ''}`}>
      <div className="cyber-grid" />
      <div className="loading-particles" />
      <div className={`cyber-loading ${isExiting ? 'fade-out' : ''}`}>
        <div className="loading-text">INICIALIZANDO SISTEMA</div>
        <div className="loading-bar-container">
          <div className="loading-bar">
            <div className="loading-progress" style={{ width: `${percentage}%` }}></div>
          </div>
          <div className="loading-percentage">{percentage}%</div>
        </div>
        
        <div className="loading-details">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="loading-detail-line">
              <span className="detail-label">
                {percentage >= (i + 1) * 20 ? `MÓDULO_${i + 1} CARREGADO` : glitchText[i]}
              </span>
              <span className="detail-status">
                {percentage >= (i + 1) * 20 ? "CONCLUÍDO" : "EM PROGRESSO"}
              </span>
            </div>
          ))}
        </div>

        <div className="cyber-circles">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="cyber-circle"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 