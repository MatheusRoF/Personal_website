// components/ProjectCard.jsx
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ title, description, imageSrc, githubUrl, demoUrl }) {
  return (
    <div className="bg-zinc-900 rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
      <div className="relative w-full h-40 md:h-52">
        <Image
          src={imageSrc}
          alt={`Imagem do projeto ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
        <div className="flex gap-4 pt-2">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-1">
              <Github size={16} />
              GitHub
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline flex items-center gap-1">
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
