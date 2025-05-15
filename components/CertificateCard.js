// components/CertificateCard.jsx
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export default function CertificateCard({ title, imageSrc, category }) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition p-2">
      <div className="relative w-full h-40 md:h-48 rounded-md overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Certificado - ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white truncate">{title}</h3>
        <div className="text-xs text-gray-400 flex items-center gap-1 mt-1">
          <BadgeCheck size={14} className="text-green-400" />
          {category}
        </div>
      </div>
    </div>
  );
}
