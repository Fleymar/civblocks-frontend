"use client";

import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import Image from 'next/image';

const TechnologiesSection = () => {
  interface Technology {
    id: number;
    name: string;
    description: string;
    logo: string;
    link: string;
    linkText: string;
  }

  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  const technologies = [
    {
      id: 1,
      name: "ChromaDB",
      description: "ChromaDB is an open-source embedding database designed for AI applications. It enables efficient storage and retrieval of vector embeddings, making it perfect for semantic search and AI memory systems.",
      logo: "./chroma-logo.png",
      link: "https://www.trychroma.com/",
      linkText: "Official Documentation"
    },
    {
      id: 2,
      name: "Ollama",
      description: "Ollama is a framework for running large language models locally. It allows for easy setup and management of various LLMs, providing a lightweight solution for AI model deployment.",
      logo: "./ollama-logo.png",
      link: "https://ollama.ai/",
      linkText: "Official website"
    },
    {
      id: 3,
      name: "Minecraft",
      description: "The sandbox game provides the perfect environment for AI experimentation. Using Minecraft as the environnement allows us to create autonomous agents that interact with a complex, dynamic world.",
      logo: "./minecraft-logo.png",
      link: "https://www.minecraft.net/fr-fr",
      linkText: "Official website"
    }
  ];

  return (
    <div className="w-full bg-gray-800/50 backdrop-blur-sm p-12 rounded-2xl border border-gray-700">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12">
          Technologies Used
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map(tech => (
            <button
              key={tech.id}
              onClick={() => setSelectedTech(tech)}
              className="group relative p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="h-24 w-full flex items-center justify-center mb-4">
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      fill
                      className="object-contain filter brightness-100 group-hover:brightness-110 transition-all p-2"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{tech.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Technology Info Modal */}
      {selectedTech && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
             onClick={(e) => e.target === e.currentTarget && setSelectedTech(null)}>
          <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 max-w-sm w-full relative"
               onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedTech(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors text-gray-400 hover:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-6">
              <div className="relative w-48 h-24 mx-auto">
                <Image
                  src={selectedTech.logo}
                  alt={`${selectedTech.name} logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {selectedTech.name}
                </h3>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  {selectedTech.description}
                </p>
              </div>
              
              <a
                href={selectedTech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 group hover:scale-105 text-blue-400 hover:text-blue-300"
              >
                <span>{selectedTech.linkText}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologiesSection;