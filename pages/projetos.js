import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Styles/projetos.module.css';
import VoltarButton from '../components/button_return';

export default function Projetos() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('descricao');

  const projetos = [
    {
      id: 1,
      title: "Personal Website",
      description: "Website pessoal para demonstrar habilidades em desenvolvimento web.",
      longDescription: "Meu portfolio pessoal construído com Next.js, React e CSS Modules. O site apresenta seções sobre meus projetos, habilidades técnicas e informações de contato. Implementei animações suaves e otimização de performance para melhor experiência do usuário.",
      technologies: ["Next.js", "React", "CSS Modules", "Javascript", "Vercel"],
      features: [
        "Design responsivo para todos os dispositivos",
        "Sistema de dark/light mode",
        "Animações CSS personalizadas",
        "Otimização de performance (Lazy Loading)"
      ],
      screenshots: [
        "/projetos/site-screenshot1.png",
        "/projetos/site-screenshot2.png"
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
                    {selectedProject.technologies.map((tech, index) => (
                      <div key={index} className={styles.skillItem}>
                        {tech}
                      </div>
                    ))}
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
                  <div key={index} className={styles.screenshotItem}>
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
                Ver Demonstração
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}