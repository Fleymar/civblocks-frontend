"use client";

import { useState } from 'react';
import { Linkedin, Github, X } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  linkedin: string;
  github: string;
}

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team = [
    {
      id: 1,
      name: "Thibaud Bultel",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/thibaud-bultel-ab4837222/",
      github: "https://github.com/Fleymar"
    },
    {
      id: 2,
      name: "Matthew Muller",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/mtwmuller/",
      github: "https://github.com/Peace0fCake"
    },
    {
      id: 3,
      name: "Cédric Bobenrieth",
      role: "Supervisor",
      linkedin: "https://www.linkedin.com/in/c%C3%A9dric-bobenrieth-a487abb8/",
      github: "https://github.com/Ciclarion"
    }
  ];

  return (
    <div className="w-full bg-gray-800/50 backdrop-blur-sm p-12 rounded-2xl border border-gray-700">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12">
          Meet the Team
        </h2>
        
        <div className="grid grid-cols-1 gap-12">
          {/* Developers Section */}
          <div className="grid grid-cols-2 gap-8">
            {team.slice(0, 2).map(member => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl font-semibold text-gray-100 mb-2 relative z-10">{member.name}</h3>
                <p className="text-blue-400 text-sm relative z-10">{member.role}</p>
              </button>
            ))}
          </div>

          {/* Supervisor Section */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-400 text-sm uppercase tracking-wider">Supervised by</p>
            <button
              onClick={() => setSelectedMember(team[2])}
              className="group relative p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.2)] w-full max-w-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl font-semibold text-gray-100 mb-2 relative z-10">{team[2].name}</h3>
              <p className="text-purple-400 text-sm relative z-10">{team[2].role}</p>
            </button>
          </div>

          <div className="text-gray-400 text-lg">
            at <span className="text-gray-300 font-medium">ICAM Strasbourg-Europe</span>
          </div>
        </div>
      </div>

      {/* Member Card Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
             onClick={(e) => e.target === e.currentTarget && setSelectedMember(null)}>
          <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 max-w-sm w-full relative"
               onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors text-gray-400 hover:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {selectedMember.name}
                </h3>
                <p className="text-gray-400 mt-2">{selectedMember.role}</p>
              </div>
              
              <div className="flex justify-center gap-4 pt-2">
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 group hover:scale-105"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a
                  href={selectedMember.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 group hover:scale-105"
                >
                  <Github className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;