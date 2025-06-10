import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Styles/certificados.module.css';
import VoltarButton from '../components/button_return';

export default function Certificados() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeTab, setActiveTab] = useState('detalhes');

  const certificados = [
    {
      id: 1,
      title: "Santander Bootcamp Fullstack Java + Angular",
      imageSrc: "/certificados/santander-java-angular.png",
      category: "JAVA | ANGULAR",
      institution: "Santander Universidades",
      date: "Junho 2023",
      duration: "120 horas",
      skills: [
        "Desenvolvimento Backend com Java",
        "Spring Framework",
        "Angular Framework",
        "APIs RESTful",
        "Integração Frontend-Backend"
      ],
      projects: [
        "Sistema bancário completo",
        "Aplicação de gestão financeira"
      ]
    },
    {
      id: 2,
      title: "Curso de Inteligência Artificial",
      imageSrc: "/certificados/ia.png",
      category: "IA",
      institution: "Deep Learning Institute",
      date: "Março 2023",
      duration: "80 horas",
      skills: [
        "Machine Learning",
        "Redes Neurais",
        "Processamento de Linguagem Natural",
        "Visão Computacional"
      ],
      projects: [
        "Sistema de reconhecimento de imagens",
        "Chatbot inteligente"
      ]
    },
    {
      id: 3,
      title: "Formação em React.js",
      imageSrc: "/certificados/react.png",
      category: "REACT",
      institution: "Alura",
      date: "Janeiro 2023",
      duration: "60 horas",
      skills: [
        "React Hooks",
        "Context API",
        "Next.js",
        "Testes com Jest"
      ],
      projects: [
        "E-commerce completo",
        "Dashboard interativo"
      ]
    },
    {
      id: 4,
      title: "Certificação em Cloud Computing",
      imageSrc: "/certificados/cloud.png",
      category: "CLOUD",
      institution: "AWS Academy",
      date: "Novembro 2022",
      duration: "100 horas",
      skills: [
        "AWS Lambda",
        "EC2",
        "S3",
        "DynamoDB",
        "Arquitetura Serverless"
      ],
      projects: [
        "Migração de aplicação para cloud",
        "Sistema escalável"
      ]
    },
    {
      id: 5,
      title: "Desenvolvimento Mobile com Flutter",
      imageSrc: "/certificados/flutter.png",
      category: "FLUTTER",
      institution: "Google Developers",
      date: "Setembro 2022",
      duration: "90 horas",
      skills: [
        "Widgets personalizados",
        "Gestão de estado",
        "Integração com Firebase",
        "Publicação na Play Store"
      ],
      projects: [
        "Aplicativo de produtividade",
        "Jogo educativo"
      ]
    }
  ];

  const openDetail = (cert) => {
    setSelectedCert(cert);
    setActiveTab('detalhes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeDetail = () => {
    setSelectedCert(null);
  };

  return (
    <div className={styles.container}>
      <VoltarButton />

      <header className={styles.header}>
        <h1>🎓 Certificados</h1>
        <p className={styles.subtitle}>Clique em um certificado para ver detalhes</p>
      </header>

      {!selectedCert ? (
        <main className={styles.main}>
          {certificados.map((cert) => (
            <article 
              key={cert.id} 
              className={styles.certificateCard}
              onClick={() => openDetail(cert)}
            >
              <div className={styles.cardHeader}>
                <h2>{cert.title}</h2>
                <div className={styles.cardMeta}>
                  <span className={styles.institution}>{cert.institution}</span>
                  <span className={styles.category}>{cert.category}</span>
                </div>
              </div>
              <div className={styles.cardPreview}>
                <div className={styles.imageContainer}>
                  <Image
                    src={cert.imageSrc}
                    alt={cert.title}
                    width={300}
                    height={200}
                    className={styles.certificateImage}
                    objectFit="contain"
                  />
                </div>
                <div className={styles.tags}>
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className={styles.tag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </main>
      ) : (
        <div className={styles.detailContainer}>
          <div className={styles.detailHeader}>
            <h2>{selectedCert.title}</h2>
            <div className={styles.detailMeta}>
              <span className={styles.institution}>{selectedCert.institution}</span>
              <span className={styles.date}>{selectedCert.date} • {selectedCert.duration}</span>
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
              className={`${styles.tabButton} ${activeTab === 'detalhes' ? styles.active : ''}`}
              onClick={() => setActiveTab('detalhes')}
            >
              Detalhes
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'habilidades' ? styles.active : ''}`}
              onClick={() => setActiveTab('habilidades')}
            >
               Habilidades
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'projetos' ? styles.active : ''}`}
              onClick={() => setActiveTab('projetos')}
            >
              Projetos
            </button>
          </div>

          <div className={styles.detailContent}>
            {activeTab === 'detalhes' && (
              <div className={styles.imageDetailContainer}>
                <Image
                  src={selectedCert.imageSrc}
                  alt={selectedCert.title}
                  width={600}
                  height={400}
                  className={styles.certificateImageDetail}
                  objectFit="contain"
                />
              </div>
            )}

            {activeTab === 'habilidades' && (
              <div className={styles.skillsContainer}>
                <div className={styles.skillCategory}>
                  <h3> Habilidades Desenvolvidas</h3>
                  <div className={styles.skillsGrid}>
                    {selectedCert.skills.map((skill, index) => (
                      <div key={index} className={styles.skillItem}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projetos' && (
              <ul className={styles.detailList}>
                {selectedCert.projects.map((project, index) => (
                  <li key={index}>
                    <span className={styles.bullet}>•</span>
                    {project}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.detailFooter}>
            <Link href="/projetos" className={styles.actionButton}>
              <i className={`${styles.icon} ${styles.projectsIcon}`}></i>
              Ver Projetos
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}