import React, { useEffect, useState } from 'react';
import SkillBar from './components/SkillBar';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';
import LoadingScreen from './components/LoadingScreen';
import './styles/global.css';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showGlitch, setShowGlitch] = useState(false);

  const handleLoadingComplete = () => {
    setShowGlitch(true);
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowGlitch(false);
      }, 1000);
    }, 500);
  };

  useEffect(() => {
    // Simula um tempo de carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const createParticle = () => {
      const particles = document.querySelector('.cyber-particles');
      if (!particles) return;

      const particle = document.createElement('div');
      particle.className = 'cyber-particle';
      
      // Posição aleatória horizontal
      particle.style.left = `${Math.random() * 100}%`;
      
      // Velocidade aleatória
      const duration = 10 + Math.random() * 20;
      particle.style.animation = `particleFloat ${duration}s infinite linear`;
      
      particles.appendChild(particle);
      
      // Remove a partícula após a animação
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };

    // Cria partículas em intervalos
    const interval = setInterval(() => {
      createParticle();
    }, 500);

    // Limpa o intervalo quando o componente é desmontado
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <div className={`app-container ${showGlitch ? 'glitch-transition' : ''}`}>
        <div className="cyber-grid" />
        <div className="cyber-particles" />
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
              <h1 className="hero-title">DEYVID JERÔNIMO<br />DESENVOLVEDOR</h1>
              <p className="hero-subtitle">FULL STACK DEVELOPER</p>
              <div className="hero-buttons">
                <button className="cyber-button">CONTATE-ME</button>
                <button className="cyber-button outline">DOWNLOAD CV</button>
              </div>
            </div>
          </section>

          <section id="sobre" className="section">
            <h2 className="section-title">SOBRE MIM</h2>
            <AboutSection
              description={[
                "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e impactantes. Com mais de 5 anos de experiência no desenvolvimento de aplicações web e mobile, sempre busco combinar criatividade com as melhores práticas de programação.",
                "Especializado em tecnologias modernas como React, Node.js e TypeScript, tenho um histórico comprovado de entrega de projetos complexos e escaláveis. Minha abordagem é focada em código limpo, performance e experiência do usuário.",
                "Além do desenvolvimento, sou um entusiasta de novas tecnologias e sempre estou aprendendo e experimentando as últimas tendências do mercado."
              ]}
              stats={[
                { label: "ANOS DE EXPERIÊNCIA", value: "5+" },
                { label: "PROJETOS CONCLUÍDOS", value: "30+" },
                { label: "CLIENTES SATISFEITOS", value: "20+" },
                { label: "TECNOLOGIAS DOMINADAS", value: "15+" }
              ]}
              interests={[
                "Desenvolvimento Web",
                "Inteligência Artificial",
                "Cloud Computing",
                "Cybersegurança",
                "Mobile",
                "IoT",
                "DevOps",
                "UI/UX"
              ]}
            />
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
              <ProjectCard
                title="E-COMMERCE CYBERPUNK"
                type="WEB APP"
                description="Uma plataforma de e-commerce moderna com design cyberpunk, desenvolvida com React e Node.js. Inclui sistema de pagamentos, carrinho de compras e painel administrativo."
                image="/images/ecommerce-preview.jpg"
                technologies={["React", "Node.js", "MongoDB", "Stripe"]}
                demoLink="https://cyber-shop.exemplo.com"
                githubLink="https://github.com/seu-usuario/cyber-shop"
              />
              <ProjectCard
                title="REDE SOCIAL FUTURISTA"
                type="FULL STACK"
                description="Aplicação de rede social com interface futurista, recursos de chat em tempo real, compartilhamento de posts e sistema de notificações."
                image="/images/social-preview.jpg"
                technologies={["React", "Socket.io", "Express", "PostgreSQL"]}
                demoLink="https://cyber-social.exemplo.com"
                githubLink="https://github.com/seu-usuario/cyber-social"
              />
              <ProjectCard
                title="API GESTÃO DE DADOS"
                type="BACKEND"
                description="API RESTful robusta para gestão de dados empresariais, com autenticação JWT, cache Redis e documentação Swagger."
                image="/images/api-preview.jpg"
                technologies={["Node.js", "Express", "Redis", "JWT"]}
                githubLink="https://github.com/seu-usuario/cyber-api"
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
      </div>
    </>
  );
};

export default App;
