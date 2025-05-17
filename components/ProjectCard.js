// // components/ProjectCard.jsx
// // import Link from 'next/link';
// import Image from 'next/image';

// const ProjectCard = ({ id, title, description, imageSrc, githubUrl, demoUrl }) => {
//   return (
//     <div className="group relative">
//       <Link href={`/projetos/${id}`} passHref>
//         <div className="cursor-pointer">
//           <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:transform group-hover:-translate-y-1 h-full flex flex-col">
//             <div className="relative h-48">
//               <Image
//                 src={imageSrc}
//                 alt={title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="transition-opacity duration-300 group-hover:opacity-90"
//               />
//             </div>
//             <div className="p-4 flex-grow">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//               <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
//             </div>
//             <div className="px-4 pb-4 mt-auto">
//               <div className="flex space-x-2">
//                 {githubUrl && (
//                   <a 
//                     href={githubUrl} 
//                     onClick={(e) => e.stopPropagation()}
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md text-gray-700 transition-colors"
//                   >
//                     GitHub
//                   </a>
//                 )}
//                 {demoUrl && (
//                   <a 
//                     href={demoUrl} 
//                     onClick={(e) => e.stopPropagation()}
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="text-sm bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-md text-blue-700 transition-colors"
//                   >
//                     Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProjectCard;

import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ id, title, description, imageSrc, githubUrl, demoUrl }) => {
  return (
    <div className="group relative">
      <Link href={`/projetos/${id}`} passHref legacyBehavior>
        <div className="cursor-pointer">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:transform group-hover:-translate-y-1 h-full flex flex-col">
            <div className="relative h-48">
              <Image
                src={imageSrc}
                alt={`Imagem do projeto ${title}`}
                fill
                className="transition-opacity duration-300 group-hover:opacity-90 object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={id === 'personal-website'} // Prioriza carregamento da imagem principal
              />
            </div>
            <div className="p-4 flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
            </div>
            <div className="px-4 pb-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {githubUrl && (
                  <a 
                    href={githubUrl} 
                    onClick={(e) => e.stopPropagation()}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md text-gray-700 transition-colors flex items-center gap-1"
                    aria-label={`Ver código no GitHub (${title})`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                )}
                {demoUrl && (
                  <a 
                    href={demoUrl} 
                    onClick={(e) => e.stopPropagation()}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-md text-blue-700 transition-colors flex items-center gap-1"
                    aria-label={`Ver demonstração (${title})`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;