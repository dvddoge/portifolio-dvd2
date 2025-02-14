import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [percentage, setPercentage] = useState(0);
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
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="glitch-overlay">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="glitch-line" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 100}px`,
            animationDelay: `${Math.random() * 2}s`
          }}></div>
        ))}
      </div>
      
      <div className="cyber-loading">
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

        <div className="cyber-glitch-effect">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="glitch-line" style={{
              animationDelay: `${i * 0.2}s`
            }}></div>
          ))}
        </div>

        <div className="corner-decorations">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
        </div>

        <div className="matrix-effect">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="matrix-line">
              {[...Array(20)].map((_, j) => (
                <span key={j} className="matrix-character">
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 