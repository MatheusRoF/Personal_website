import Link from 'next/link';
import styles from '../Styles/experiencias.module.css';

export default function Experiencias() {
  const experiencias = [
    {
      id: 1,
      empresa: 'Votorantim Cimentos',
      cargo: 'Estagiário de Transportes',
      periodo: 'Maio 2022 – Setembro 2023',
      descricao: [
        'Gerenciamento de frota de transporte para região centro norte e nordeste',
        'Negociação de fretes com motoristas e transportadoras',
        'Desenvolvimento de planos de contingência',
        'Otimização de processos logísticos através de automações',
        'Criação de relatórios estratégicos no Excel'
      ],
      conquistas: [
        'Implementação de nova métrica de precificação de fretes, reduzindo custos',
        'Otimização da gestão de frotas durante período sazonal',
        'Redução do tempo de execução de atividades através de automações'
      ]
    },
    // Adicione outras experiências aqui
    {
      id: 2,
      empresa: 'Outra Empresa',
      cargo: 'Outro Cargo',
      periodo: 'Jan 2020 – Abr 2022',
      descricao: [
        'Descrição das responsabilidades',
        'Outras atividades relevantes'
      ],
      conquistas: [
        'Conquistas importantes',
        'Resultados alcançados'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Botão Voltar no mesmo estilo do Baixar Word */}
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
        <h1>Minhas Experiências Profissionais</h1>
      </header>

      <main className={styles.main}>
        {experiencias.map((exp) => (
          <section key={exp.id} className={styles.experiencia}>
            <div className={styles.experienciaHeader}>
              <h2>{exp.empresa}</h2>
              <div className={styles.experienciaMeta}>
                <span className={styles.cargo}>{exp.cargo}</span>
                <span className={styles.periodo}>{exp.periodo}</span>
              </div>
            </div>

            <div className={styles.experienciaContent}>
              <h3>Responsabilidades:</h3>
              <ul className={styles.responsabilidades}>
                {exp.descricao.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>Conquistas e Resultados:</h3>
              <ul className={styles.conquistas}>
                {exp.conquistas.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}