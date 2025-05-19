'use client';

import Image from 'next/image';
import styles from '../Styles/sobre-mim.module.css';
import VoltarButton from '../components/button_return.js';

export default function SobreMim() {
  return (
    <div className={styles.container}>
      {/* Componente Botão Voltar */}
      <VoltarButton />

      <header className={styles.header}>
        <h1>Sobre Mim</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>👋 Olá!</h2>
          <p>
            Sou um profissional apaixonado por tecnologia, inovação e programação, com foco na criação de soluções eficientes e acessíveis. Sou formado em Análise e Desenvolvimento de Sistemas pelo CEUB (2023) e atualmente curso pós-graduação em Engenharia de Software.

Minha formação acadêmica consolidou conhecimentos sólidos em lógica de programação, estrutura de dados e metodologias ágeis. Além disso, desenvolvi habilidades práticas em linguagens como Python, Java e JavaScript, aplicando esses conhecimentos em projetos que unem eficiência, escalabilidade e boas práticas de desenvolvimento.
          </p>
         </section>

         <section className={styles.section}>
          <h2>🎯 Objetivo</h2>
          <p>
            Desenvolver uma carreira sólida na área de tecnologia e aperfeiçoar minhas habilidades em tecnologia da informação para contribuir com soluções inovadoras e eficientes.
          </p>
         </section>

         <section className={styles.section}>
          <h2>🎓 Formação Acadêmica</h2>
            <p className={styles.highlight}>Análise e Desenvolvimento de Sistemas – CEUB, 2019 - 2023</p>
            <p>
              Durante a graduação, desenvolvi uma base sólida em lógica de programação, estrutura de dados, metodologias ágeis e desenvolvimento de software, aplicando esses conhecimentos em projetos práticos e trabalhos colaborativos.
            </p>

            <p className={styles.highlight}>Pós-graduação em Engenharia de Software – FOCUS, 2024 - Em andamento</p>
            <p>
              Atualmente, aprofundo meus conhecimentos em arquitetura de sistemas, engenharia de requisitos, testes, integração contínua e boas práticas de desenvolvimento, com foco em soluções escaláveis e de alta qualidade.
            </p>
        </section>
        
        

        <section className={styles.section}>
          <h2>🛠️ Habilidades Técnicas</h2>
          <ul>
            <li>linguagens: JavaScript, Java, Python</li>
            <li>Banco de Dados: MySQL, MongoDB</li>
            <li>Idiomas: Inglês</li>
            <li>Frameworks: Next, Flutter, React, Angular</li>
            <li>Aplicações de Escritório: Microsoft Word, Microsoft Outlook, Microsoft Excel, Power Platform, SAP, VBA</li>
            <li>Software: Excel(Avançado), Git(Versionamento), Visual Studio Code</li>
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
