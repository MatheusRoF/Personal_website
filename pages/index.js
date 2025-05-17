import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../Styles/index.module.css';
import Button from '../components/button';
import { generatePdf } from '../utils/generatePdf';

export default function Home() {
  const handleDownloadPdf = async () => {
    if (typeof window !== 'undefined') {
      const success = await generatePdf(document.body, 'curriculo-matheus.pdf');
      
      if (!success) {
        alert('Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Botão de Download */}
      <button
        onClick={handleDownloadPdf}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        Baixar PDF
      </button>

      <div className={styles.layout}>
        <div className={styles.content}>
          <h1 className={styles.title}>Matheus Rodrigues Ferreira</h1>

          <div className={styles.buttonGroup}>
            <Link href="/sobre-mim" passHref legacyBehavior>
              <Button label="Sobre mim" className="rounded-2xl bg-blue-500 hover:bg-blue-600" />
            </Link>
            <Link href="/projetos" passHref legacyBehavior>
              <Button label="Projetos" className="rounded-2xl bg-blue-500 hover:bg-blue-600" />
            </Link>
            <Link href="/contatos" passHref legacyBehavior>
              <Button label="Contatos" className="rounded-2xl bg-blue-500 hover:bg-blue-600" />
            </Link>
            <Link href="/certificados" passHref legacyBehavior>
              <Button label="Certificados" className="rounded-2xl bg-blue-500 hover:bg-blue-600" />
            </Link>
            <Link href="/experiencias" passHref legacyBehavior>
              <Button label="Experiências" className="rounded-2xl bg-blue-500 hover:bg-blue-600" />
            </Link>
          </div>

          <section className={styles.section}>
            <h2>Olá! 👋</h2>
            <p className={styles.highlight}>Eu sou o Matheus Rodrigues Ferreira.</p>
            <p><a href="mailto:mmatheus99@hotmail.com">mmatheus99@hotmail.com</a></p>

            <h3>Perfil Profissional</h3>
            <p>
              Sou um profissional apaixonado por tecnologia e inovação, formado em Análise e Desenvolvimento de Sistemas pelo CEUB em 2023.
              Minha experiência acadêmica solidificou meu entendimento em lógica de programação, metodologias ágeis e estrutura de dados.
            </p>
            <p>
              Possuo habilidades técnicas em JavaScript, Java e Python, com experiência em bancos de dados como MySQL e MongoDB.
              Trabalhei com frameworks como React e Angular, utilizando ferramentas como Git e Visual Studio.
            </p>
          </section>

          <section className={styles.section}>
            <h3>Experiência Profissional</h3>
            <p className={styles.highlight}>Estagiário de Transportes | Votorantim Cimentos</p>
            <p className={styles.highlight}>Maio 2022 – Setembro 2023</p>
            
            <h4>Principais Responsabilidades:</h4>
            <ul>
              <li>Gerenciamento de frota de transporte para região centro norte e nordeste</li>
              <li>Negociação de fretes com motoristas e transportadoras</li>
              <li>Desenvolvimento de planos de contingência</li>
              <li>Otimização de processos logísticos através de automações</li>
              <li>Criação de relatórios estratégicos no Excel</li>
            </ul>

            <h4>Principais Conquistas:</h4>
            <ul>
              <li>Implementação de nova métrica de precificação de fretes, reduzindo custos</li>
              <li>Otimização da gestão de frotas durante período sazonal</li>
              <li>Redução do tempo de execução de atividades através de automações</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>Contatos</h3>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/matheus-rodrigues-ferreira-06754617a/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://wa.me/+5561982129045" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://github.com/MatheusRoF" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className={styles.profileContainer}>
          <Image
            src="/profile.jpg"
            alt="Foto de Matheus"
            width={400}  // Tamanho original maior para qualidade
            height={400} // Proporção 1:1
            className={styles.profileImage}
            priority
            quality={90} // Qualidade aumentada (padrão é 75)
          />
        </div>
      </div>
    </div>
  );
}