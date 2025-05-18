import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Styles/projetos.module.css';

const ProjectCard = ({ 
  title, 
  description, 
  longDescription, 
  imageSrc, 
  githubUrl, 
  demoUrl,
  technologies = [],
  screenshots = []
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card principal (clicável) */}
      <div 
        className={styles.projectCard}
        onClick={() => setIsModalOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={200}
            className={styles.projectImage}
          />
        </div>
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
          {technologies.length > 0 && (
            <div className={styles.technologies}>
              {technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal de detalhes */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Botão Fechar DENTRO do modal */}
            <div style={{
              position: 'relative',
              width: '100%'
            }}>
              <button 
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  zIndex: 1001,
                  textDecoration: 'none'
                }}
                onClick={() => setIsModalOpen(false)}
                aria-label="Fechar modal"
              >
                × Fechar
              </button>
            </div>

            <h2 className={styles.modalTitle}>{title}</h2>
            
            <div className={styles.modalImageContainer}>
              <Image
                src={imageSrc}
                alt={title}
                width={800}
                height={400}
                className={styles.modalMainImage}
              />
            </div>

            <div className={styles.modalBody}>
              <section className={styles.modalSection}>
                <h3 className={styles.sectionTitle}>Descrição</h3>
                <p className={styles.modalDescription}>
                  {longDescription || description}
                </p>
              </section>

              {technologies.length > 0 && (
                <section className={styles.modalSection}>
                  <h3 className={styles.sectionTitle}>Tecnologias</h3>
                  <div className={styles.modalTechnologies}>
                    {technologies.map((tech, index) => (
                      <span key={index} className={styles.modalTechTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {screenshots.length > 0 && (
                <section className={styles.modalSection}>
                  <h3 className={styles.sectionTitle}>Screenshots</h3>
                  <div className={styles.screenshotsGrid}>
                    {screenshots.map((screenshot, index) => (
                      <div key={index} className={styles.screenshotContainer}>
                        <Image
                          src={screenshot}
                          alt={`${title} - Screenshot ${index + 1}`}
                          width={300}
                          height={150}
                          className={styles.screenshotImage}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <div className={styles.modalLinks}>
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.6rem 1.2rem',
                      borderRadius: '6px',
                      backgroundColor: '#2563eb',
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: '500',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    GitHub
                  </a>
                )}
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.6rem 1.2rem',
                      borderRadius: '6px',
                      backgroundColor: '#f3f4f6',
                      color: '#111',
                      border: '1px solid #e5e7eb',
                      textDecoration: 'none',
                      fontWeight: '500',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function Projetos() {
  return (
    <div className={styles.container}>
      {/* Botão Voltar */}
      <Link href="/" passHref>
        <button
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            zIndex: 1000,
            textDecoration: 'none'
          }}
        >
          ← Voltar
        </button>
      </Link>

      <header className={styles.header}>
        <h1>
          <span role="img" aria-label="brain">🧠</span> Projetos
        </h1>
      </header>

      <div className={styles.projectsGrid}>
        <ProjectCard
          title="Personal Website"
          description="Website pessoal para demonstrar habilidades em desenvolvimento web."
          longDescription="Meu portfolio pessoal construído com Next.js, React e CSS Modules. O site apresenta seções sobre meus projetos, habilidades técnicas e informações de contato. Implementei animações suaves e otimização de performance para melhor experiência do usuário."
          technologies={["Next.js | ", "React | ", "CSS Modules ","| Javascript | ", "Vercel | "]}
          screenshots={[
            "/projetos/site-screenshot1.png",
            "/projetos/site-screenshot2.png"
          ]}
          imageSrc="/projetos/site-preview.png"
          githubUrl="https://github.com/MatheusRoF/Personal_website"
        />

        <ProjectCard
          title="Skull King Score"
          description="Aplicativo para contagem de pontos do jogo Skull King."
          longDescription="Aplicativo desenvolvido em Flutter para gerenciar pontuações do jogo de cartas Skull King. Inclui cálculo automático de bônus, histórico de partidas e interface intuitiva para até 6 jogadores. Totalmente offline com armazenamento local."
          technologies={["Flutter", "Dart", "HiveDB"]}
          screenshots={[
            "/projetos/skull-king-1.png",
            "/projetos/skull-king-2.png"
          ]}
          imageSrc="/projetos/skull-king.png"
          githubUrl="https://github.com/seuusuario/skull-king"
        />

        <ProjectCard
          title="Sistema Bancário"
          description="Sistema de monitoramento bancário para faculdade."
          longDescription="Sistema desenvolvido em Java para disciplina de Engenharia de Software no UniCEUB. Implementa autenticação segura, transferências, extrato e relatórios. Arquitetura em camadas com padrões de projeto como Singleton e DAO."
          technologies={["Java", "MySQL", "Swing"]}
          imageSrc="/projetos/banco.png"
          githubUrl="https://github.com/seuusuario/sistema-bancario"
        />

        <ProjectCard
          title="Chatbot Oficina"
          description="Chatbot para agendamento em oficinas mecânicas."
          longDescription="Solução desenvolvida no ChatVolt para automatizar atendimento em oficinas. Integra com Google Agenda para marcação de serviços, envia lembretes por WhatsApp e responde dúvidas frequentes sobre manutenção automotiva."
          technologies={["ChatVolt", "Node.js", "Google Calendar API"]}
          imageSrc="/projetos/chatbot-oficina.png"
        />
      </div>
    </div>
  );
}