import Image from 'next/image';
import Link from 'next/link';
import styles from '../Styles/sobre-mim.module.css';

export default function SobreMim() {
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
        {/* <Image
          src="/profile.jpg"
          alt="Foto de Matheus"
          width={120}
          height={120}
          className={styles.profileImage}
          priority
        /> */}
        <h1>Sobre Mim</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>👋 Olá!</h2>
          <p>
            Sou um profissional apaixonado por tecnologia e inovação, focado em criar soluções eficientes e acessíveis.
          </p>
        </section>

        <section className={styles.section}>
          <h2>🎓 Formação Acadêmica</h2>
          <p className={styles.highlight}>Análise e Desenvolvimento de Sistemas – CEUB, 2023</p>
          <p>
            Minha trajetória me proporcionou sólida base em lógica de programação, estrutura de dados, metodologias ágeis e desenvolvimento de software.
          </p>
        </section>

        <section className={styles.section}>
          <h2>🛠️ Habilidades Técnicas</h2>
          <ul>
            <li>JavaScript, Java, Python</li>
            <li>MySQL, SQL Server, MongoDB</li>
            <li>React, Angular</li>
            <li>Power Platform, SAP, VBA</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>🚀 Busco Aprendizado Contínuo</h2>
          <p>
            Estou em constante evolução para contribuir com soluções modernas e escaláveis, impactando positivamente os negócios e a sociedade.
          </p>
        </section>
      </main>
    </div>
  );
}