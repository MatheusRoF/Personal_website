import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Styles/projetos.module.css';
import VoltarButton from '../components/button_return';
import techIcons from '../components/techIcons';

export default function Projetos() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('descricao');
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);

  const projetos = [
    {
      id: 1,
      title: "Personal Website",
      description: "Portfólio profissional desenvolvido com Next.js e React, apresentando minha trajetória, projetos e habilidades técnicas. Implementa design responsivo, animações CSS e otimizações de performance. Demonstra domínio completo do fluxo de desenvolvimento front-end, desde a concepção até o deploy automatizado na Vercel.",
      longDescription: "Meu portfólio profissional é uma aplicação web moderna e responsiva, desenvolvida para destacar minhas habilidades em desenvolvimento front-end e UI/UX design. O projeto foi construído com Next.js e React, garantindo performance otimizada, SEO eficiente e uma experiência de usuário fluida.Utilizando a arquitetura de renderização híbrida do Next.js (SSR e SSG), o site oferece tempos de carregamento rápidos e melhor indexação por motores de busca. O React, com seus hooks funcionais, permite um gerenciamento de estado eficiente e um código mais limpo e organizado.Para a estilização, adotei CSS Modules, assegurando que os estilos sejam escopados e modulares, evitando conflitos e facilitando a manutenção. O design é totalmente responsivo, adaptando-se a diferentes dispositivos e tamanhos de tela, com atenção especial à acessibilidade e às melhores práticas de UI/UX.Este projeto reflete meu compromisso com código limpo, performance e design intuitivo, servindo como uma vitrine do meu trabalho e um exemplo do que posso entregar em futuros projetos.",
      technologies: ["Next.js", "React", "CSS Modules", "Javascript", "Vercel"],
      features: [
        "Design responsivo para todos os dispositivos",
        "Sistema de dark/light mode",
        "Animações CSS personalizadas",
        "Otimização de performance (Lazy Loading)"
      ],
      screenshots: [
        "/projetos/site-screenshot1.png",
        "/projetos/site-screenshot2.png",
        "/projetos/site-screenshot3.png",
        "/projetos/site-screenshot4.png",
        "/projetos/site-screenshot5.png"
      ],
      imageSrc: "/projetos/site-preview.png",
      githubUrl: "https://github.com/MatheusRoF/Personal_website"
    },
    {
      id: 2,
      title: "Skull King Score",
      description: "Aplicativo para contagem de pontos do jogo Skull King.",
      longDescription: "Aplicativo desenvolvido em Flutter para gerenciar pontuações do jogo de cartas Skull King. Inclui cálculo automático de bônus, histórico de partidas e interface intuitiva para até 6 jogadores. Totalmente offline com armazenamento local.",
      technologies: ["Flutter", "Dart", "HiveDB"],
      features: [
        "Cálculo automático de pontuação",
        "Histórico de partidas",
        "Modo offline completo",
        "Interface amigável para múltiplos jogadores"
      ],
      screenshots: [
        "/projetos/skull-king-1.png",
        "/projetos/skull-king-2.png"
      ],
      imageSrc: "/projetos/skull-king.png",
      githubUrl: "https://github.com/seuusuario/skull-king",
      demoUrl: "https://play.google.com/store/apps/details?id=com.example.skullking"
    },
    {
      id: 3,
      title: "Sistema Bancário",
      description: "Sistema de monitoramento bancário para faculdade.",
      longDescription: "Sistema desenvolvido em Java para disciplina de Engenharia de Software no UniCEUB. Implementa autenticação segura, transferências, extrato e relatórios. Arquitetura em camadas com padrões de projeto como Singleton e DAO.",
      technologies: ["Java", "MySQL", "Swing"],
      features: [
        "Autenticação segura de usuários",
        "Operações bancárias básicas",
        "Geração de extratos",
        "Relatórios financeiros"
      ],
      imageSrc: "/projetos/banco.png",
      githubUrl: "https://github.com/seuusuario/sistema-bancario"
    },
    {
      id: 4,
      title: "Chatbot Oficina",
      description: "Chatbot para agendamento em oficinas mecânicas.",
      longDescription: "Solução desenvolvida no ChatVolt para automatizar atendimento em oficinas. Integra com Google Agenda para marcação de serviços, envia lembretes por WhatsApp e responde dúvidas frequentes sobre manutenção automotiva.",
      technologies: ["ChatVolt", "Node.js", "Google Calendar API"],
      features: [
        "Agendamento automático de serviços",
        "Integração com WhatsApp",
        "Lembretes automáticos",
        "Respostas para dúvidas frequentes"
      ],
      imageSrc: "/projetos/chatbot-oficina.png",
      demoUrl: "https://chatbot-oficina-exemplo.com"
    }
  ];

  const openDetail = (project) => {
    setSelectedProject(project);
    setActiveTab('descricao');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeDetail = () => {
    setSelectedProject(null);
  };

  const openScreenshot = (screenshot) => {
    setSelectedScreenshot(screenshot);
  };

  const closeScreenshot = () => {
    setSelectedScreenshot(null);
  };

  return (
    <div className={styles.container}>
      <VoltarButton />

      <header className={styles.header}>
        <h1>🧠 Projetos</h1>
        <p className={styles.subtitle}>Clique em um projeto para ver detalhes</p>
      </header>

      {!selectedProject ? (
        <main className={styles.main}>
          {projetos.map((projeto) => (
            <article 
              key={projeto.id} 
              className={styles.projectCard}
              onClick={() => openDetail(projeto)}
            >
              <div className={styles.cardHeader}>
                <h2>{projeto.title}</h2>
                <div className={styles.cardMeta}>
                  <span className={styles.description}>{projeto.description}</span>
                </div>
              </div>
              <div className={styles.cardPreview}>
                <div className={styles.imageContainer}>
                  <Image
                    src={projeto.imageSrc}
                    alt={projeto.title}
                    width={400}
                    height={200}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.tags}>
                  {projeto.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </main>
      ) : (
        <div className={styles.detailContainer}>
          <div className={styles.detailHeader}>
            <h2>{selectedProject.title}</h2>
            <div className={styles.detailMeta}>
              <button 
                onClick={closeDetail} 
                className={styles.closeButton}
                aria-label="Fechar detalhes"
              >
                &times;
              </button>
            </div>
          </div>

          <div className={styles.detailTabs}>
            <button
              className={`${styles.tabButton} ${activeTab === 'descricao' ? styles.active : ''}`}
              onClick={() => setActiveTab('descricao')}
            >
              Descrição
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'tecnologias' ? styles.active : ''}`}
              onClick={() => setActiveTab('tecnologias')}
            >
              Tecnologias
            </button>
            {selectedProject.features && selectedProject.features.length > 0 && (
              <button
                className={`${styles.tabButton} ${activeTab === 'features' ? styles.active : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Funcionalidades
              </button>
            )}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <button
                className={`${styles.tabButton} ${activeTab === 'screenshots' ? styles.active : ''}`}
                onClick={() => setActiveTab('screenshots')}
              >
                Screenshots
              </button>
            )}
          </div>

          <div className={styles.detailContent}>
            {activeTab === 'descricao' && (
              <div className={styles.description}>
                <p>{selectedProject.longDescription || selectedProject.description}</p>
              </div>
            )}

            {activeTab === 'tecnologias' && (
              <div className={styles.skillsContainer}>
                <div className={styles.skillCategory}>
                  <h3>Tecnologias Utilizadas</h3>
                  <div className={styles.skillsGrid}>
                    {selectedProject.technologies.map((tech, index) => {
                      const iconPath = techIcons[tech]?.src || "/tech-icons/default.svg";
                      return (
                        <div key={index} className={styles.skillItem}>
                          <div className={styles.techIconContainer}>
                            <Image
                              src={iconPath}
                              alt={`${tech} icon`}
                              width={24}
                              height={24}
                              className={styles.techIcon}
                            />
                          </div>
                          <span className={styles.techName}>{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <ul className={styles.detailList}>
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>
                    <span className={styles.bullet}>•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'screenshots' && (
              <div className={styles.screenshotsGrid}>
                {selectedProject.screenshots.map((screenshot, index) => (
                  <div 
                    key={index} 
                    className={styles.screenshotItem}
                    onClick={() => openScreenshot(screenshot)}
                  >
                    <Image
                      src={screenshot}
                      alt={`${selectedProject.title} - Screenshot ${index + 1}`}
                      width={600}
                      height={400}
                      className={styles.screenshotImage}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.detailFooter}>
            {selectedProject.githubUrl && (
              <Link 
                href={selectedProject.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
              >
                <svg 
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver no GitHub
              </Link>
            )}
            {selectedProject.demoUrl && (
              <Link 
                href={selectedProject.demoUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
              >
                <svg 
                  className={styles.icon}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                >
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"/>
                </svg>
                Ver Demonstração
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Modal para screenshot ampliada */}
      {selectedScreenshot && (
        <div className={styles.screenshotModal} onClick={closeScreenshot}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <button 
                className={styles.closeModalButton}
                onClick={closeScreenshot}
                aria-label="Fechar visualização"
              >
                &times;
              </button>
            </div>
            
            <div className={styles.screenshotContainer}>
              <Image
                src={selectedScreenshot}
                alt="Screenshot em tamanho ampliado"
                width={1200}
                height={800}
                className={styles.enlargedScreenshot}
              />
            </div>
            
            <div className={styles.screenshotNavigation}>
              <button 
                className={styles.navButton}
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = selectedProject.screenshots.indexOf(selectedScreenshot);
                  const prevIndex = (currentIndex - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length;
                  setSelectedScreenshot(selectedProject.screenshots[prevIndex]);
                }}
                aria-label="Screenshot anterior"
              >
                &lt;
              </button>
              
              <span className={styles.screenshotCounter}>
                {selectedProject.screenshots.indexOf(selectedScreenshot) + 1} / {selectedProject.screenshots.length}
              </span>
              
              <button 
                className={styles.navButton}
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = selectedProject.screenshots.indexOf(selectedScreenshot);
                  const nextIndex = (currentIndex + 1) % selectedProject.screenshots.length;
                  setSelectedScreenshot(selectedProject.screenshots[nextIndex]);
                }}
                aria-label="Próxima screenshot"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}