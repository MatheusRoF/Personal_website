// pages/index.js
import Image from 'next/image';
import Link from 'next/link';
import styles from '../Styles/index.module.css';
import Button from '../components/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <h1 className={styles.title}>Pessoal Website</h1>

          <div className="flex flex-wrap gap-4">
        <Link href="/sobre-mim">
          <Button label="Sobre mim" className="rounded-2xl bg-blue-500 hover:bg-blue-600" />
        </Link>
        <Link href="/projetos">
          <Button label="Projetos" className="rounded-2xl bg-blue-500 hover:bg-blue-600" />
        </Link>
        <Link href="/contatos">
          <Button label="Contatos" className="rounded-2xl bg-blue-500 hover:bg-blue-600" />
        </Link>
        <Link href="/certificados">
          <Button label="Certificados" className="rounded-2xl bg-blue-500 hover:bg-blue-600" />
        </Link>
      </div>

          <section className={styles.section}>
            <h2>Olá! 👋</h2>
            <p><strong>Eu sou o Matheus Rodrigues Ferreira.</strong></p>
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
            <h3>Experiências</h3>
            <p><strong>Estagiário de Transportes | Votorantim Cimentos</strong><br />
              Maio 2022 – Setembro 2023</p>
            <p>
              Responsável pela gestão de operações de transporte de produtos acabados, junto a seus fornecedores e público interno da empresa 
              (Gerentes, Coordenadores, Supervisores, Gestão comercial), bem como pelo desenvolvimento de novos projetos e mudanças estratégicas 
              na área e desenvolvimento de automações utilizando Python. Análise de base de dados de transportes com ferramentas de BI, SAP e VBA.
            </p>
          </section>

          <footer className={styles.section}>
            <h4>Contatos</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/matheus-rodrigues-ferreira-06754617a/">LinkedIn</a></li>
              <li><a href="https://wa.me/+5561982129045">WhatsApp</a></li>
              <li><a href="https://github.com/MatheusRoF">GitHub</a></li>
            </ul>
          </footer>
        </div>

        <div>
          <Image
            src="/profile.jpg"
            alt="Foto de Matheus"
            width={240}
            height={240}
            className={styles.profileImage}
            priority
          />
        </div>
      </div>
    </div>
  );
}
