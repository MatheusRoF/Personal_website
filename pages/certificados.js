import Link from 'next/link';
import Image from 'next/image';
import styles from '../Styles/certificados.module.css';

const CertificateCard = ({ title, imageSrc, category }) => {
  return (
    <div className={styles.certificateCard}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={200}
          className={styles.certificateImage}
          objectFit="contain"
        />
      </div>
      <div className={styles.certificateContent}>
        <h3 className={styles.certificateTitle}>{title}</h3>
        <span className={styles.certificateCategory}>{category}</span>
      </div>
    </div>
  );
};

export default function Certificados() {
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
          <span role="img" aria-label="graduation cap">🎓</span> Certificados
        </h1>
      </header>

      <div className={styles.certificatesGrid}>
        <CertificateCard
          title="Santander Bootcamp Fullstack Java + Angular"
          imageSrc="/certificados/santander-java-angular.png"
          category="JAVA | ANGULAR"
        />
        <CertificateCard
          title="Curso de Inteligência Artificial"
          imageSrc="/certificados/ia.png"
          category="IA"
        />
        {/* Adicione mais certificados conforme necessário */}
        <CertificateCard
          title="Formação em React.js"
          imageSrc="/certificados/react.png"
          category="REACT"
        />
        <CertificateCard
          title="Certificação em Cloud Computing"
          imageSrc="/certificados/cloud.png"
          category="CLOUD"
        />
        <CertificateCard
          title="Desenvolvimento Mobile com Flutter"
          imageSrc="/certificados/flutter.png"
          category="FLUTTER"
        />
      </div>
    </div>
  );
}
