import React from 'react';
import CyberCard from './components/CyberCard';
import SkillBar from './components/SkillBar';
import ExperienceCard from './components/ExperienceCard';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <>
      <div className="cyber-grid" />
      <nav className="nav-container">
        <div className="nav-links">
          <a href="#inicio" className="nav-link">INÍCIO</a>
          <a href="#sobre" className="nav-link">SOBRE</a>
          <a href="#experiencia" className="nav-link">EXPERIÊNCIA</a>
          <a href="#projetos" className="nav-link">PROJETOS</a>
          <a href="#habilidades" className="nav-link">HABILIDADES</a>
          <a href="#contato" className="nav-link">CONTATO</a>
        </div>
      </nav>

      <div className="page-container">
        <section id="inicio" className="hero-section">
          <div>
            <h1 className="hero-title">SEU NOME<br />DESENVOLVEDOR</h1>
            <p className="hero-subtitle">FULL STACK DEVELOPER</p>
            <div className="hero-buttons">
              <button className="cyber-button">CONTATE-ME</button>
              <button className="cyber-button outline">DOWNLOAD CV</button>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <h2 className="section-title">SOBRE MIM</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nunc vestibulum tincidunt.</p>
              <p>Praesent quis sagittis libero, nec suscipit justo. Maecenas aliquet maximus.</p>
            </div>
            <CyberCard
              title="QUEM SOU"
              subtitle="DESENVOLVEDOR"
              highlight="APAIXONADO"
              prompt="SAIBA MAIS"
            />
          </div>
        </section>

        <section id="experiencia" className="section">
          <h2 className="section-title">EXPERIÊNCIA</h2>
          <div className="experience-timeline">
            <ExperienceCard
              company="Empresa Tech"
              position="Senior Developer"
              period="2022 - PRESENTE"
              description="Desenvolvimento de soluções full stack utilizando React, Node.js e tecnologias cloud."
              technologies={["React", "Node.js", "AWS", "TypeScript"]}
            />
            <ExperienceCard
              company="Startup Inovadora"
              position="Full Stack Developer"
              period="2020 - 2022"
              description="Criação de aplicações web e mobile com foco em performance e experiência do usuário."
              technologies={["Vue.js", "Python", "Docker", "MongoDB"]}
            />
          </div>
        </section>

        <section id="projetos" className="section">
          <h2 className="section-title">PROJETOS</h2>
          <div className="card-grid">
            <CyberCard
              title="E-COMMERCE"
              subtitle="WEB APP"
              highlight="REACT"
              prompt="VER PROJETO"
            />
            <CyberCard
              title="SOCIAL APP"
              subtitle="MOBILE"
              highlight="FLUTTER"
              prompt="VER PROJETO"
            />
            <CyberCard
              title="API REST"
              subtitle="BACKEND"
              highlight="NODE.JS"
              prompt="VER PROJETO"
            />
          </div>
        </section>

        <section id="habilidades" className="section">
          <h2 className="section-title">HABILIDADES</h2>
          <div className="skills-container">
            <div className="skills-group">
              <h3 className="skills-subtitle">FRONTEND</h3>
              <SkillBar name="React" percentage={90} color="#61DAFB" />
              <SkillBar name="Vue.js" percentage={85} color="#42B883" />
              <SkillBar name="TypeScript" percentage={88} color="#3178C6" />
              <SkillBar name="CSS/SASS" percentage={92} color="#CC6699" />
            </div>
            
            <div className="skills-group">
              <h3 className="skills-subtitle">BACKEND</h3>
              <SkillBar name="Node.js" percentage={88} color="#339933" />
              <SkillBar name="Python" percentage={85} color="#3776AB" />
              <SkillBar name="SQL" percentage={80} color="#00758F" />
              <SkillBar name="MongoDB" percentage={82} color="#47A248" />
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <h2 className="section-title">CONTATO</h2>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>seu.email@exemplo.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+55 (11) 9999-9999</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>São Paulo, Brasil</span>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-group">
                <input type="text" className="form-input" placeholder="SEU NOME" />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="SEU EMAIL" />
              </div>
              <div className="form-group">
                <textarea className="form-input" rows={5} placeholder="SUA MENSAGEM"></textarea>
              </div>
              <button className="cyber-button">ENVIAR MENSAGEM</button>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
