import { useState } from 'react';
import Link from 'next/link';
import styles from '../Styles/experiencias.module.css';
import VoltarButton from '../components/button_return';

export default function Experiencias() {
  const [selectedExp, setSelectedExp] = useState(null);
  const [activeTab, setActiveTab] = useState('descricao');

  const experiencias = [
    {
      id: 1,
      empresa: 'Desenvolvimento de Soluções Tecnológicas',
      cargo: 'Desenvolvedor Freelancer | Automação | Desenvolvimento web | Desenvolvimento mobile',
      periodo: 'Janeiro 2023 - Presente',
      descricao: [
        'Desenvolvimento abrangendo soluções web (Next.js, Angular), mobile (Flutter, React Native) e automações com Python. Criação de sistemas completos, responsivo e eficiente, incluindo também desenvolvimento de chatbots e automação de processos empresariais para otimização de workflows.',
        'Desenvolvimento web com Next.js',
        'Desenvolvimento mobile com Flutter',
        'Criação de Chatbot',
        'Desenvolvimento mobile com React Native',
        'Desenvolvimento web com Angular',
        'Desenvolvimento de scripts Python para automação de processos repetitivos e planilhas'
      ],
      conquistas: [
        "Entrega de 5 projetos de desenvolvimento web e mobile, utilizando tecnologias como Next.js, Angular, Flutter e React Native, com foco na criação de soluções personalizadas e de alto impacto.",
        "Desenvolvi e implementei soluções de automação com Python.",
        "Criação de chatbots interativos, resultando na otimização de processos de negócios e na melhoria da eficiência operacional.",
        "Gerenciei projetos freelancer de ponta a ponta, desde a coleta de requisitos e prototipação até a implantação e manutenção."
        ],
      habilidades: {
        tecnologias: [
        'JavaScript (Next.js, React, Angular, Node.js)',
        'Python',
        'Dart (Flutter)',
        'React Native',
        'SQL', // Ajuste o nível conforme sua experiência
        'HTML5',
        'CSS3',
        'Java'
        // Adicione aqui outras tecnologias específicas de chatbot se relevante, ex: 'Dialogflow', 'Rasa'
      ],
      ferramentas: [
        'Git & GitHub',
        'VS Code',
        'Vercel' // Se aplicável
      ],
      competencias: [
        'Resolução de Problemas Complexos',
        'Adaptabilidade Tecnológica (aprendizado rápido de novas stacks)',
        'Automação de Processos',
        'Desenvolvimento',
        'Gerenciamento de Projetos Freelancer (autogerenciamento)',
        'Comunicação Efetiva',
        'Pensamento Crítico e Analítico'
      ]}
    },
    {
      id: 2,
      empresa: 'Votorantim Cimentos',
      cargo: 'Transportes | Logística | Análise de Dados',
      periodo: 'Março 2022 – Setembro 2023',
      descricao: [
        'Gestão logística completa para frota de transporte nas regiões Centro-Norte e Nordeste, incluindo coordenação de operações, negociação de fretes, otimização de rotas e análise de dados. Desenvolvimento de soluções estratégicas com SAP, Qlik e Excel para automação de processos, monitoramento de desempenho e tomada de decisão baseada em dados, resultando em redução de custos e aumento de eficiência operacional.',
        'Gerenciamento de frota de transporte de saída para região centro norte e nordeste abrangendo fábricas e centros de distribuição.',
        'Negociação de fretes com motoristas e transportadoras para diversas rotas.',
        'Desenvolvimento de planos de contingência para abastecimentos de clientes.',
        'Elaboração de orçamentos com base nas influências externas do mercado sobre os preços de combustíveis.',
        'Otimização de processos logísticos por meio de automações, reduzindo o tempo de execução de tarefas repetitivas.',
        'Monitoramento da frota para garantir a eficiência operacional e apoio a gestão de transportes.',
        'Criação de relatórios estratégicos no Excel para acompanhamento de indicadores de desempenho.',
        'Utilização de SAP e Qlik para controle de fretes, análise de dados e gestão de pedidos.',
        'Criação de dashboards para visualização de indicadores logísticos e financeiros.',
        'Implementação de soluções para integração entre SAP e planilhas Excel.',
        'Otimização de roteirização.',
        'Análise de grandes volumes de dados logísticos.'
      ],
      conquistas: [
      'Implementação de nova métrica de precificação de fretes, resultando na redução nos custos logísticos de transporte. (Roteirização)',
      'Implementação de Plano Safra para mitigar impactos sazonais na região Centro-Oeste, resultando na otimização da gestão de frotas e eficiência no escoamento da produção, assegurando continuidade operacional e excelência no atendimento aos clientes.',
      'Redução do tempo de execução de atividades por meio de padronização e automações.',
      'Otimização de alocação de recursos por meio da melhora da precisão da análise de custos de transportes.',
      'Padronização de relatórios e análises facilitando a tomada de decisão.',
      ],
      habilidades: {
      tecnologias: ['VBA', 'Python'],
      ferramentas: ['SAP MM/SD', 'Qlik Sense/QlikView','Power BI', 'Excel Avançado(VBA)','Google Maps','Rotas Brasil'],
      competencias: ['Gestão Logística', 'Análise de Dados', 'Automação de Processos','Resolução de Problemas','Otimização de Rotas','Negociação de Fretes', 'Desenvolvimento de Dashboards','Gestão de Indicadores KPIS', 'Planejamento Estratégico']}
    },
    {
      id: 3,
      empresa: 'Manutenção em equipamentos de informática',
      cargo: 'Técnico Freelancer | Suporte TI',
      periodo: 'Janeiro 2020 - Presente',
      descricao: [
        'Trabalho técnico de TI em manutenção preventiva de equipamentos eletrônicos (computadores, notebooks e videogames), instalação de sistemas operacionais, upgrades de hardware e configuração de redes domésticas. Atendimento técnico especializado com diagnóstico preciso e soluções personalizadas para otimização de desempenho e prolongamento da vida útil dos equipamentos.',
        'Manutenção preventiva de computadores, notebooks e video-games',
        'Instalação e configuração de sistemas operacionais e softwares aplicativos.',
        'Montagem e upgrade de hardware.',
        'Diagnóstico e solução de problemas de hardware e software.',
        'Configuração de redes domésticas.'
      ],
      conquistas: [
        'Implementação de manutenção preventiva que aumentou a vida útil dos equipamentos.',
        'Expansão da carteira de clientes através de indicações.',
        'Automação de processos de instalação de SO e drivers, reduzindo o tempo de serviço.',
        'Implementação de solução de backup em nuvem para clientes usando OneDrive e Google Drive.'
      ],
      habilidades: {
        tecnologias: [
          'Windows', 'Linux', 'BIOS/UEFI', 'Redes Wi-Fi', 'TCP/IP'],
        ferramentas: [
          'OneDrive', 'Google Drive'
        ],
        competencias: [
          'Suporte técnico', 'Atendimento ao cliente', 'Diagnóstico de problemas', 'Organização', 'Comunicação']
      }
    },
    {
      id: 4,
      empresa: 'Aulas Particulares',
      cargo: 'Matemática | Física | Química | Estátistica',
      periodo: 'Janeiro 2018 - Presente',
      descricao: [
        'Professor particular multidisciplinar com experiência no ensino fundamental e médio. Desenvolvo aulas personalizadas com metodologia adaptativa, utilizando ferramentas digitais para explicar conceitos complexos de forma clara, com foco na resolução prática de exercícios e no desenvolvimento da autonomia do aluno.',
        'Ministração de aulas particulares presenciais e online para estudantes de ensino fundamental, médio e superior.',
        'Preparação de material personalizado com base nas necessidades específicas de cada aluno.',
        'Explicação clara e objetiva de conceitos complexos, com foco em resolução de exercícios e reforço escolar.',
        'Utilização de ferramentas digitais para aulas remotas, como quadro branco virtual e simuladores.'
      ],
      conquistas: [
        'Aumento significativo no desempenho dos alunos, com média de melhoria de 30% nas notas escolares.',
        'Criação de uma rede de alunos fiéis através de recomendações e resultados comprovados.',
        'Adaptação rápida ao modelo de ensino remoto durante a pandemia, mantendo a qualidade do ensino.'
      ],
      habilidades: {
        tecnologias: [
          'Zoom', 'Google Meet','Khan Academy' ,'YouTube' ],
        ferramentas: [
          'PowerPoint', 'Canva', 'Whiteboard.fi', 'Geogebra', 'Calculadora Científica'
        ],
        competencias: [
          'Didática', 'Paciência', 'Empatia', 'Comunicação', 'Organização de conteúdo', 'Autonomia']
      }
    }
  ];

  const openDetail = (exp) => {
    setSelectedExp(exp);
    setActiveTab('descricao');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeDetail = () => {
    setSelectedExp(null);
  };

  return (
    <div className={styles.container}>
      <VoltarButton />

      <header className={styles.header}>
        <h1>💼 Experiências Profissionais</h1>
        <p className={styles.subtitle}>Clique em uma experiência para ver detalhes</p>
      </header>

      {!selectedExp ? (
        <main className={styles.main}>
          {experiencias.map((exp) => (
            <article 
              key={exp.id} 
              className={styles.experienciaCard}
              onClick={() => openDetail(exp)}
            >
              <div className={styles.cardHeader}>
                <h2>{exp.empresa}</h2>
                <div className={styles.cardMeta}>
                  <span className={styles.cargo}>{exp.cargo}</span>
                  <span className={styles.periodo}>{exp.periodo}</span>
                </div>
              </div>
              <div className={styles.cardPreview}>
                <p>{exp.descricao[0]}</p>
                <div className={styles.tags}>
                  {exp.habilidades.tecnologias.slice(0, 3).map((tech, index) => (
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
            <h2>{selectedExp.empresa}</h2>
            <div className={styles.detailMeta}>
              <span className={styles.cargo}>{selectedExp.cargo}</span>
              <span className={styles.periodo}>{selectedExp.periodo}</span>
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
              <i className={`${styles.icon} ${styles.responsibilitiesIcon}`}></i>
              Responsabilidades
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'conquistas' ? styles.active : ''}`}
              onClick={() => setActiveTab('conquistas')}
            >
              <i className={`${styles.icon} ${styles.achievementsIcon}`}></i>
              Conquistas
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'habilidades' ? styles.active : ''}`}
              onClick={() => setActiveTab('habilidades')}
            >
              <i className={`${styles.icon} ${styles.skillsIcon}`}></i>
              Habilidades
            </button>
          </div>

          <div className={styles.detailContent}>
            {activeTab === 'descricao' && (
              <ul className={styles.detailList}>
                {selectedExp.descricao.map((item, index) => (
                  <li key={index}>
                    <span className={styles.bullet}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'conquistas' && (
              <ul className={styles.detailList}>
                {selectedExp.conquistas.map((item, index) => (
                  <li key={index}>
                    <span className={styles.bullet}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'habilidades' && (
              <div className={styles.skillsContainer}>
                <div className={styles.skillCategory}>
                  <h3>Tecnologias</h3>
                  <div className={styles.skillsGrid}>
                    {selectedExp.habilidades.tecnologias.map((skill, index) => (
                      <div key={index} className={styles.skillItem}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h3>Ferramentas</h3>
                  <div className={styles.skillsGrid}>
                    {selectedExp.habilidades.ferramentas.map((tool, index) => (
                      <div key={index} className={styles.skillItem}>
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h3>Competências</h3>
                  <div className={styles.skillsGrid}>
                    {selectedExp.habilidades.competencias.map((competence, index) => (
                      <div key={index} className={styles.skillItem}>
                        {competence}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.detailFooter}>
            <Link href="/contatos" className={styles.actionButton}>
              <i className={`${styles.icon} ${styles.contactIcon}`}></i>
              Entrar em Contato
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}