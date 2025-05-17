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
              Gerenciamento de frota de transporte de saída para região centro norte e nordeste abrangendo fábricas e centros de distribuição.
              Negociação de fretes com motoristas e transportadoras para diversas rotas.
              Desenvolvimento de planos de contingência para abastecimentos de clientes.
              Elaboração de orçamentos com base nas influências externas do mercado sobre os preços de combustíveis.
              Otimização de processos logísticos por meio de automações, reduzindo o tempo de execução de tarefas repetitivas.
              Monitoramento da frota para garantir a eficiência operacional e apoio a gestão de transportes.
              Criação de relatórios estratégicos no Excel para acompanhamento de indicadores de desempenho.
              Utilização de SAP e Qlik para controle de fretes, análise de dados e gestão de pedidos.

              Impacto e Resultados:
              Implementação de nova métrica de precificação de fretes, resultando na redução nos custos logísticos de transporte. (Roteirização)
              Implementação de Plano Safra para mitigar impactos sazonais na região Centro-Oeste, resultando na otimização da gestão de frotas e eficiência no escoamento da produção, assegurando continuidade operacional e excelência no atendimento aos clientes.
              Redução do tempo de execução de atividades por meio de padronização e automações.
              Otimização de alocação de recursos por meio da melhora da precisão da análise de custos de transportes.
              Padronização de relatórios e análises facilitando a tomada de decisão.
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
