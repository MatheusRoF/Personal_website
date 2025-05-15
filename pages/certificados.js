// pages/certificados.jsx
import CertificateCard from "../components/CertificateCard";

export default function Certificados() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🎓 Certificados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CertificateCard
            title="Santander Bootcamp Fullstack Java + Angular"
            imageSrc="/certificados/santander-java-angular.png"
            category="JAVA | ANGULAR"
          />
          <CertificateCard
            title="Curso de Inteligência Artificial"
            imageSrc="/certificados/ia.png"
            category="IA"
          />
          {/* Adicione mais certificados aqui */}
        </div>
      </div>
    </div>
  );
}
