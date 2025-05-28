import Navigation from "@/components/navigation"
import Starfield from "@/components/starfield"
import CosmicBackground from "@/components/cosmic-background"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-space relative">
      <Starfield />
      <CosmicBackground />

      <div className="relative z-10 container mx-auto px-8 py-8 max-w-5xl">
        <div className="mb-16">
          <Navigation />
        </div>

        {/* Hero Section */}
        <section className="text-center mb-24">
          <h1 className="text-6xl md:text-7xl font-bold elegant-heading mb-6 text-slate-100">Alexander Sterling</h1>
          <h2 className="text-3xl md:text-4xl elegant-heading mb-8 text-slate-300">
            Full Stack Developer & Digital Architect
          </h2>
          <p className="text-xl elegant-text max-w-3xl mx-auto leading-relaxed text-slate-400">
            Crafting elegant digital experiences through the intersection of technology and artistry. With over five
            years of experience, I transform complex problems into beautiful, functional solutions.
          </p>
        </section>

        {/* About Section */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold elegant-heading mb-8 text-slate-100">Philosophy & Approach</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="elegant-text text-lg leading-relaxed text-slate-300 mb-6">
                I believe that great software is born from the marriage of technical excellence and human empathy. Every
                line of code I write serves a purpose: to create meaningful connections between people and technology.
              </p>
              <p className="elegant-text text-lg leading-relaxed text-slate-300">
                My approach combines classical software engineering principles with modern innovation, always keeping
                the end user's experience at the forefront of every decision.
              </p>
            </div>
            <div>
              <p className="elegant-text text-lg leading-relaxed text-slate-300 mb-6">
                When I'm not immersed in code, you'll find me contributing to open-source projects, mentoring aspiring
                developers, or exploring the latest advancements in artificial intelligence and machine learning.
              </p>
              <p className="elegant-text text-lg leading-relaxed text-slate-300">
                I'm passionate about building products that not only solve problems but inspire and delight users.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h3 className="text-3xl font-bold elegant-heading mb-8 text-slate-100">
            Let's Create Something Extraordinary
          </h3>
          <p className="elegant-text text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Whether you're looking to build the next groundbreaking application or need guidance on your technical
            journey, I'd love to hear from you.
          </p>
          <div className="flex justify-center space-x-12">
            <a href="mailto:alexander@example.com" className="social-icon-link" aria-label="Email">
              <Mail
                size={36}
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
              />
            </a>
            <a href="https://github.com/alexsterling" className="social-icon-link" aria-label="GitHub">
              <Github
                size={36}
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
              />
            </a>
            <a href="https://linkedin.com/in/alexsterling" className="social-icon-link" aria-label="LinkedIn">
              <Linkedin
                size={36}
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
              />
            </a>
            <a href="https://twitter.com/alexsterling" className="social-icon-link" aria-label="Twitter">
              <Twitter
                size={36}
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
