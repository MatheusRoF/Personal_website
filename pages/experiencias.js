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
      cargo: 'Desenvolvedor Freelancer | Automação e Análise de Dados',
      periodo: 'Janeiro 2023 - Presente',
      descricao: [
        'Desenvolvimento de scripts Python para automação de processos repetitivos em planilhas e sistemas ERP.',
        'Criação de dashboards interativos (Next.js + Qlik/Power BI) para visualização de indicadores logísticos e financeiros.',
        'Implementação de soluções RPA (Robotic Process Automation) para integração entre SAP e planilhas Excel.',
        'Otimização de algoritmos de roteirização utilizando Python e bibliotecas de geolocalização.',
        'Desenvolvimento de aplicações web personalizadas para gestão de fretes e controle logístico.',
        'Migração de processos manuais para sistemas automatizados com Node.js e React.',
        'Análise de grandes volumes de dados logísticos utilizando Pandas e NumPy para identificar oportunidades de redução de custos.',
        'Configuração de pipelines ETL para consolidar dados de múltiplas fontes (SAP, Excel, APIs de transportadoras).'
      ],
      conquistas: [
        'Automação de relatórios financeiros que reduziu o tempo de geração de 8h para 15min (Python + Pandas).',
        'Desenvolvimento de algoritmo de precificação dinâmica de fretes que reduziu custos em 12% para 3 clientes do setor logístico.',
        'Criação de sistema de monitoramento de frota em tempo real com integração a APIs de rastreamento (Next.js + Node.js).',
        'Implementação de solução de backup automatizado para 15+ clientes, reduzindo perda de dados em 90%.',
        'Migração bem-sucedida de 50+ sistemas legados para ambiente moderno com React e Firebase.',
        'Desenvolvimento de pacote de automações para Excel que se tornou produto recorrente entre clientes do setor financeiro.'
      ],
      habilidades: {
        tecnologias: ['Python (Pandas, NumPy)', 'JavaScript (React, Next.js)', 'Node.js', 'SQL'],
        ferramentas: ['SAP', 'Qlik/Power BI', 'Excel Avançado', 'Git'],
        competencias: ['Análise de Dados', 'Automação de Processos', 'Gestão Logística', 'Resolução de Problemas']
      }
    },
    {
      id: 2,
      empresa: 'Votorantim Cimentos',
      cargo: 'Transportes | Logística | Análise de Dados',
      periodo: 'Março 2022 – Setembro 2023',
      descricao: [
        'Gerenciamento de frota de transporte de saída para região centro norte e nordeste abrangendo fábricas e centros de distribuição.',
        'Negociação de fretes com motoristas e transportadoras para diversas rotas.',
        'Desenvolvimento de planos de contingência para abastecimentos de clientes.',
        'Elaboração de orçamentos com base nas influências externas do mercado sobre os preços de combustíveis.',
        'Otimização de processos logísticos por meio de automações, reduzindo o tempo de execução de tarefas repetitivas.',
        'Monitoramento da frota para garantir a eficiência operacional e apoio a gestão de transportes.',
        'Criação de relatórios estratégicos no Excel para acompanhamento de indicadores de desempenho.',
        'Utilização de SAP e Qlik para controle de fretes, análise de dados e gestão de pedidos.'
      ],
      conquistas: [
        'Implementação de nova métrica de precificação de fretes, resultando na redução nos custos logísticos de transporte. (Roteirização)',
        'Implementação de Plano Safra para mitigar impactos sazonais na região Centro-Oeste, resultando na otimização da gestão de frotas e eficiência no escoamento da produção.',
        'Redução do tempo de execução de atividades por meio de padronização e automações.',
        'Otimização de alocação de recursos por meio da melhora da precisão da análise de custos de transportes.',
        'Padronização de relatórios e análises facilitando a tomada de decisão.'
      ],
      habilidades: {
        tecnologias: ['Excel Avançado', 'VBA', 'Power Query', 'SQL'],
        ferramentas: ['SAP MM/SD', 'QlikView', 'Power BI', 'TMS'],
        competencias: ['Gestão de Transportes', 'Análise de Custos', 'Negociação', 'Planejamento Estratégico']
      }
    },
    {
      id: 3,
      empresa: 'Manutenção em equipamentos de informática',
      cargo: 'Técnico Freelancer | Suporte TI',
      periodo: 'Janeiro 2020 - Presente',
      descricao: [
        'Manutenção preventiva e corretiva de computadores, notebooks, dispositivos móveis e video-games',
        'Instalação e configuração de sistemas operacionais (Windows, Linux) e softwares aplicativos.',
        'Montagem e upgrade de hardware, incluindo substituição de componentes e otimização de desempenho.',
        'Diagnóstico e solução de problemas de hardware e software.',
        'Configuração de redes domésticas e pequenas redes empresariais.',
        'Recuperação de dados e backup de sistemas.',
        'Atendimento ao cliente para orientação técnica e suporte remoto.'
      ],
      conquistas: [
        'Desenvolvimento de método próprio para diagnóstico rápido de problemas de hardware, reduzindo o tempo de reparo.',
        'Implementação de manutenção preventiva que aumentou a vida útil dos equipamentos.',
        'Criação de manual de uso para usuários finais, reduzindo chamados recorrentes.',
        'Expansão da carteira de clientes através de indicações.',
        'Automação de processos de instalação de SO e drivers, reduzindo o tempo de serviço pela metade.',
        'Implementação de solução de backup em nuvem para clientes.'
      ],
      habilidades: {
        tecnologias: ['Windows Server', 'Linux', 'Virtualização', 'Redes TCP/IP'],
        ferramentas: ['Clonezilla', 'GParted', 'CrystalDiskInfo', 'TeamViewer'],
        competencias: ['Suporte Técnico', 'Diagnóstico de Problemas', 'Atendimento ao Cliente', 'Gestão de TI']
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
        <h1>Minhas Experiências Profissionais</h1>
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
            <Link href="/projetos" className={styles.actionButton}>
              <i className={`${styles.icon} ${styles.projectsIcon}`}></i>
              Ver Projetos Relacionados
            </Link>
            <Link href="/contato" className={styles.actionButton}>
              <i className={`${styles.icon} ${styles.contactIcon}`}></i>
              Entrar em Contato
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}