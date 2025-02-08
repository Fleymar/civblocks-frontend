import Image from "next/image";
import { Brain, Bot, Code, GitBranch } from "lucide-react";
import localFont from 'next/font/local';


// Load Minecraft font
const minecraftFont = localFont({
  src: '../../public/Minecrafter-MA3Dw.ttf',
  variable: '--font-minecraft'
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#2A4434] text-white">
      <main className="flex flex-col gap-12 row-start-2 items-center w-full max-w-5xl">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className={`text-5xl font-bold ${minecraftFont.variable} font-minecraft`}>
            CivBlocks
          </h1>
          <p className="text-xl text-green-200">Building Autonomous Civilizations in Minecraft</p>
        </div>

        {/* Project Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="bg-green-800/50 p-6 rounded-lg border-2 border-green-700 hover:border-green-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-6 h-6" />
              <h2 className="text-xl font-bold">Agent Capabilities</h2>
            </div>
            <ul className="space-y-2 text-green-100">
              <li>• Environment navigation and interaction</li>
              <li>• Resource gathering and crafting</li>
              <li>• Combat and survival mechanisms</li>
              <li>• Autonomous decision making</li>
            </ul>
          </div>

          <div className="bg-green-800/50 p-6 rounded-lg border-2 border-green-700 hover:border-green-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6" />
              <h2 className="text-xl font-bold">AI Architecture</h2>
            </div>
            <ul className="space-y-2 text-green-100">
              <li>• Goal-oriented behavior system</li>
              <li>• Advanced memory management</li>
              <li>• Visual semantic analysis</li>
              <li>• Dynamic task prioritization</li>
            </ul>
          </div>
        </div>

        {/* Project Visualizations */}
        <div className="w-full space-y-8">
          <h2 className="text-2xl font-bold text-center mb-8">Project Showcase</h2>
          
          {/* Algorithm Visualization */}
          <div className="bg-green-800/50 p-6 rounded-lg border-2 border-green-700">
            <h3 className="text-xl font-bold mb-4">Logic Flow</h3>
            <div className="aspect-video relative w-full bg-green-900/50 rounded-lg overflow-hidden">
              <Image
                src='./flowchart.png'
                alt="Algorithm flowchart"
                width={800}
                height={450}
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-green-200">Our agent&apos;s decision-making process flowchart</p>
          </div>

          {/* In-game Examples Grid */}
          <div className="bg-green-800/50 p-6 rounded-lg border-2 border-green-700">
            <h3 className="text-xl font-bold mb-4">In-game Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-video relative bg-green-900/50 rounded-lg overflow-hidden">
                <Image
                  src="./next.svg"
                  alt="Agent building example"
                  width={400}
                  height={225}
                  className="object-cover"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-sm">Building Capabilities</p>
              </div>
              <div className="aspect-video relative bg-green-900/50 rounded-lg overflow-hidden">
                <Image
                  src="./next.svg"
                  alt="Resource gathering example"
                  width={400}
                  height={225}
                  className="object-cover"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-sm">Resource Management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Development Timeline */}
        <div className="w-full bg-green-800/50 p-6 rounded-lg border-2 border-green-700">
          <div className="flex items-center gap-3 mb-6">
            <GitBranch className="w-6 h-6" />
            <h2 className="text-xl font-bold">Project Timeline</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-green-500 pl-4">
              <h3 className="text-lg font-semibold">Phase 1: Basic Agent Implementation</h3>
              <p className="text-green-200">Initial autonomous movement, basic interactions, and environment recognition</p>
            </div>
            <div className="border-l-2 border-green-500 pl-4">
              <h3 className="text-lg font-semibold">Phase 2: Advanced Cognition</h3>
              <p className="text-green-200">Memory systems, goal evaluation, and semantic understanding</p>
            </div>
            <div className="border-l-2 border-green-500 pl-4">
              <h3 className="text-lg font-semibold">Current: Visual Analysis</h3>
              <p className="text-green-200">Implementing advanced visual recognition and semantic understanding</p>
            </div>
          </div>
        </div>

        {/* GitHub Link */}
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-600 hover:bg-green-700 gap-2 text-white text-sm sm:text-base h-12 px-6"
          href="https://github.com/yourusername/civblocks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code className="w-5 h-5" />
          View on GitHub
        </a>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-green-200">
        <p>© 2024 CivBlocks Project</p>
      </footer>
    </div>
  );
}