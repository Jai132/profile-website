import Navigation from "@/components/navigation"
import Starfield from "@/components/starfield"
import CosmicBackground from "@/components/cosmic-background"

const projects = [
  {
    name: "Quantum Commerce Platform",
    description:
      "A next-generation e-commerce platform leveraging AI-driven personalization and blockchain technology for secure transactions. Built with cutting-edge technologies to deliver unparalleled user experiences.",
    tech: ["Next.js", "TypeScript", "Blockchain", "AI/ML", "PostgreSQL"],
    github: "github.com/alexsterling/quantum-commerce",
    demo: "quantum-commerce.com",
    status: "Production",
    category: "Full Stack Application",
  },
  {
    name: "Neural Network API Suite",
    description:
      "Comprehensive API infrastructure for machine learning applications, featuring real-time model deployment, automated scaling, and advanced analytics dashboard.",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker", "Kubernetes"],
    github: "github.com/alexsterling/neural-api",
    demo: null,
    status: "Development",
    category: "Machine Learning",
  },
  {
    name: "Celestial Data Visualization",
    description:
      "Interactive astronomical data visualization platform that transforms complex space data into beautiful, intuitive visual narratives for researchers and enthusiasts.",
    tech: ["React", "D3.js", "WebGL", "Python", "NASA APIs"],
    github: "github.com/alexsterling/celestial-viz",
    demo: "celestial-data.com",
    status: "Production",
    category: "Data Visualization",
  },
  {
    name: "Distributed Ledger Framework",
    description:
      "Open-source blockchain framework designed for enterprise applications, featuring smart contract deployment, consensus mechanisms, and comprehensive security protocols.",
    tech: ["Rust", "Solidity", "Web3", "IPFS", "GraphQL"],
    github: "github.com/alexsterling/ledger-framework",
    demo: "ledger-framework.org",
    status: "Production",
    category: "Blockchain",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-space relative">
      <Starfield />
      <CosmicBackground />

      <div className="relative z-10 container mx-auto px-8 py-8 max-w-7xl">
        <div className="mb-16">
          <Navigation />
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold elegant-heading mb-6 text-slate-100">Featured Projects</h1>
          <p className="text-xl elegant-text text-slate-300 max-w-3xl mx-auto">
            A curated selection of my most impactful work, spanning from enterprise applications to open-source
            contributions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-slate-700/30 pb-12 last:border-b-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold elegant-heading text-slate-100 mb-2">{project.name}</h3>
                  <span className="text-sm elegant-text text-slate-400 bg-slate-800/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <span
                  className={`text-xs px-4 py-2 rounded-full border elegant-text ${
                    project.status === "Production"
                      ? "border-blue-400 text-blue-300 bg-blue-900/20"
                      : "border-purple-400 text-purple-300 bg-purple-900/20"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="elegant-text text-lg leading-relaxed text-slate-300 mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-slate-400 elegant-text font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm bg-slate-800/30 border border-slate-600/30 text-slate-300 px-3 py-2 rounded-lg elegant-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-6">
                <a
                  href={`https://${project.github}`}
                  className="text-slate-300 hover:text-white elegant-text font-medium transition-colors duration-300 border-b border-slate-600 hover:border-white"
                >
                  View Source
                </a>
                {project.demo && (
                  <a
                    href={`https://${project.demo}`}
                    className="text-slate-300 hover:text-white elegant-text font-medium transition-colors duration-300 border-b border-slate-600 hover:border-white"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
