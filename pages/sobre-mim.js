import Image from 'next/image';
import Link from 'next/link';

export default function SobreMim() {
  return (
    <div className="flex justify-center min-h-screen px-4 py-10 bg-black text-white">
      <div className="max-w-3xl w-full space-y-6">
        <div className="text-center">
          <Image
            src="/profile.jpg"
            alt="Foto de Matheus"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">Sobre mim</h1>
        </div>

        <section>
          <h2 className="text-blue-400 font-semibold text-xl">👋 Olá!</h2>
          <p>
            Sou um profissional apaixonado por tecnologia e inovação, focado em criar soluções eficientes e acessíveis.
          </p>
        </section>

        <section>
          <h2 className="text-blue-400 font-semibold text-xl">🎓 Formação Acadêmica</h2>
          <p><strong>Análise e Desenvolvimento de Sistemas – CEUB, 2023</strong></p>
          <p>
            Minha trajetória me proporcionou sólida base em lógica de programação, estrutura de dados, metodologias ágeis e desenvolvimento de software.
          </p>
        </section>

        <section>
          <h2 className="text-blue-400 font-semibold text-xl">🛠️ Habilidades Técnicas</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript, Java, Python</li>
            <li>MySQL, SQL Server, MongoDB</li>
            <li>React, Angular</li>
            <li>Power Platform, SAP, VBA</li>
          </ul>
        </section>

        <section>
          <h2 className="text-blue-400 font-semibold text-xl">🚀 Busco Aprendizado Contínuo</h2>
          <p>
            Estou em constante evolução para contribuir com soluções modernas e escaláveis, impactando positivamente os negócios e a sociedade.
          </p>
        </section>

        <Link href="/" className="text-blue-500 hover:underline block mt-4">
          ← Voltar para Home
        </Link>
      </div>
    </div>
  );
}
