import Link from 'next/link';
import Image from 'next/image';
import styles from '../Styles/projetos.module.css';

const ProjectCard = ({ title, description, imageSrc, githubUrl, demoUrl }) => {
  return (
    <div className={styles.projectCard}>
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={200}
        className={styles.projectImage}
      />
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectLinks}>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.projectLink} ${styles.githubLink}`}>
              GitHub
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={`${styles.projectLink} ${styles.demoLink}`}>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projetos() {
  return (
    <div className={styles.container}>
      {/* Botão Voltar no mesmo estilo */}
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
          description="Web site com objetivo de demonstrar habilidades em desenvolvimento web e servir como curriculo e portfolio."
          imageSrc="/projetos/skull-king.png"
          githubUrl="https://github.com/MatheusRoF/Personal_website"
          demoUrl=""   
        />
        <ProjectCard
          title="Skull King Score"
          description="Aplicativo Flutter para contagem de pontos do jogo Skull King, com apostas, bônus e controle automático por rodada."
          imageSrc="/projetos/skull-king.png"
          githubUrl="https://github.com/seuusuario/skull-king"
          demoUrl=""
        />
        <ProjectCard
          title="Sistema Bancário"
          description="Sistema de monitoramento bancário com foco em segurança e performance. Projeto de faculdade no UniCEUB."
          imageSrc="/projetos/banco.png"
          githubUrl="https://github.com/seuusuario/sistema-bancario"
        />
        <ProjectCard
          title="Chatbot Oficina"
          description="Chatbot feito no ChatVolt para auxiliar oficinas mecânicas no atendimento ao cliente e agendamentos."
          imageSrc="/projetos/chatbot-oficina.png"
          githubUrl=""
        />
        {/* Adicione mais projetos conforme necessário */}
      </div>
    </div>
  );
}