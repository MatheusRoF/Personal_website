// pages/projetos.jsx
import ProjectCard from "../components/ProjectCard.js";

export default function Projetos() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🧠 Projetos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Skull King Score"
            description="Aplicativo Flutter para contagem de pontos do jogo Skull King, com apostas, bônus e controle automático por rodada."
            imageSrc="/projetos/skull-king.png"
            githubUrl="https://github.com/seuusuario/skull-king"
            demoUrl=""
          />
          <ProjectCard
            title="Sistema Bancário"
            description="Sistema de monitoramento bancário com foco em segurança e performance. Projeto de faculdade no UniCEUB."
            imageSrc="/projetos/banco.png"
            githubUrl="https://github.com/seuusuario/sistema-bancario"
          />
          <ProjectCard
            title="Chatbot Oficina"
            description="Chatbot feito no ChatVolt para auxiliar oficinas mecânicas no atendimento ao cliente e agendamentos."
            imageSrc="/projetos/chatbot-oficina.png"
            githubUrl=""
          />
          {/* Adicione outros projetos abaixo com o mesmo componente */}
        </div>
      </div>
    </div>
  );
}
