import React from 'react';
import CyberCard from './components/CyberCard';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <>
      <div className="cyber-grid" />
      <nav className="nav-container">
        <div className="nav-links">
          <a href="#inicio" className="nav-link">INÍCIO</a>
          <a href="#sobre" className="nav-link">SOBRE</a>
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
            <button className="cyber-button">CONTATE-ME</button>
          </div>
        </section>

        <section id="sobre" className="section">
          <h2 className="section-title">SOBRE MIM</h2>
          <div className="card-grid">
            <CyberCard
              title="QUEM SOU"
              subtitle="DESENVOLVEDOR"
              highlight="APAIXONADO"
              prompt="SAIBA MAIS"
            />
          </div>
        </section>

        <section id="projetos" className="section">
          <h2 className="section-title">PROJETOS</h2>
          <div className="card-grid">
            <CyberCard
              title="PROJETO 1"
              subtitle="WEB APP"
              highlight="REACT"
              prompt="VER PROJETO"
            />
            <CyberCard
              title="PROJETO 2"
              subtitle="MOBILE"
              highlight="FLUTTER"
              prompt="VER PROJETO"
            />
            <CyberCard
              title="PROJETO 3"
              subtitle="BACKEND"
              highlight="NODE.JS"
              prompt="VER PROJETO"
            />
          </div>
        </section>

        <section id="habilidades" className="section">
          <h2 className="section-title">HABILIDADES</h2>
          <div className="card-grid">
            <CyberCard
              title="FRONTEND"
              subtitle="TECNOLOGIAS"
              highlight="REACT & VUE"
              prompt="DETALHES"
            />
            <CyberCard
              title="BACKEND"
              subtitle="TECNOLOGIAS"
              highlight="NODE & PYTHON"
              prompt="DETALHES"
            />
            <CyberCard
              title="MOBILE"
              subtitle="TECNOLOGIAS"
              highlight="REACT NATIVE"
              prompt="DETALHES"
            />
          </div>
        </section>

        <section id="contato" className="section">
          <h2 className="section-title">CONTATO</h2>
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

          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
