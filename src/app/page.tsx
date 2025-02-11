import Image from "next/image";
import { Brain, Bot, Code, GitBranch } from "lucide-react";
import localFont from 'next/font/local';

import TimelineSection from "./Components/timelineSection";
import GameExamplesCarousel from "./Components/gameExamplesCarousel";
import TeamSection from "./Components/TeamSection";
import TechnologiesSection from "./Components/technologies";

const minecraftFont = localFont({
  src: '../../public/Minecrafter-MA3Dw.ttf',
  variable: '--font-minecraft'
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent_40%)] pointer-events-none" />
      
      <main className="relative flex flex-col gap-16 items-center w-full max-w-6xl mx-auto px-4 sm:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className={`text-9xl font-bold ${minecraftFont.variable} font-minecraft bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500`}>
            CivBlocks
          </h1>
          <p className="text-xl text-gray-400">Simulating Autonomous Civilizations in Minecraft</p>
        </div>

        {/* Project Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-xl font-bold">Agent Capabilities</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Environment navigation and interaction
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Resource gathering and crafting
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Combat and survival mechanisms
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Autonomous decision making
              </li>
            </ul>
          </div>

          <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.3)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold">AI Architecture</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Goal-oriented behavior system
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Advanced memory management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Visual semantic analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Dynamic task prioritization
              </li>
            </ul>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="w-full space-y-12">
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Project Showcase
          </h2>
          
          {/* Algorithm Visualization */}
          <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-6">Logic Flow</h3>
            <div className="aspect-video relative w-full bg-gray-900/50 rounded-xl overflow-hidden">
              <Image
                src='./flowchart.png'
                alt="Algorithm flowchart"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-gray-400">Our agent&apos;s decision-making process flowchart</p>
          </div>

          {/* Examples Carousel */}
          <GameExamplesCarousel />

          {/* Video Section */}
          <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold mb-6">Agent Gameplay</h3>
            <div className="aspect-video relative w-full bg-gray-900/50 rounded-xl overflow-hidden">
              <video 
                className="w-full h-full rounded-xl"
                controls
                poster="/api/placeholder/800/450"
              >
                <source src="path_to_your_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="mt-6 text-gray-400">Here&apos;s a quick showcase of our agent exploring the minecraft world</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="w-full group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <GitBranch className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-xl font-bold">Project Timeline</h2>
          </div>
          <TimelineSection />
        </div>
          
        {/* Technologies Section */}

        <TechnologiesSection />

        {/* Team Section */}
        <TeamSection />

        {/* GitHub Link */}
        <a
          href="https://github.com/Peace0fCake/CivBlocks"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-2 h-12 px-8 bg-blue-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-600"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Code className="w-5 h-5 relative z-10" />
          <span className="relative z-10">View on GitHub</span>
        </a>
      </main>

      <footer className="py-8 text-center text-gray-400">
        <p>© 2024-2025 CivBlocks Project</p>
      </footer>
    </div>
  );
}