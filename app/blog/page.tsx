import Navigation from "@/components/navigation"
import Starfield from "@/components/starfield"
import CosmicBackground from "@/components/cosmic-background"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Art of Scalable Architecture",
    slug: "the-art-of-scalable-architecture",
    date: "January 15, 2024",
    excerpt:
      "Exploring the fundamental principles of building software systems that gracefully handle growth. From microservices to monoliths, understanding when and how to scale your applications for long-term success.",
    readTime: "12 min read",
    tags: ["Architecture", "Scalability", "Backend", "Best Practices"],
    category: "Technical Deep Dive",
  },
  {
    title: "Machine Learning in Production",
    slug: "machine-learning-in-production",
    date: "January 8, 2024",
    excerpt:
      "A comprehensive guide to deploying machine learning models in production environments. Covering everything from model versioning to monitoring and automated retraining pipelines.",
    readTime: "15 min read",
    tags: ["Machine Learning", "MLOps", "Production", "DevOps"],
    category: "AI & ML",
  },
  {
    title: "The Philosophy of Clean Code",
    slug: "the-philosophy-of-clean-code",
    date: "December 28, 2023",
    excerpt:
      "Beyond syntax and structure lies the art of writing code that tells a story. Exploring how thoughtful programming practices create maintainable, elegant solutions that stand the test of time.",
    readTime: "8 min read",
    tags: ["Clean Code", "Software Craftsmanship", "Best Practices"],
    category: "Philosophy",
  },
  {
    title: "Blockchain Beyond Cryptocurrency",
    slug: "blockchain-beyond-cryptocurrency",
    date: "December 20, 2023",
    excerpt:
      "Examining the transformative potential of distributed ledger technology across industries. From supply chain management to digital identity, exploring real-world applications of blockchain.",
    readTime: "10 min read",
    tags: ["Blockchain", "Web3", "Distributed Systems", "Innovation"],
    category: "Emerging Tech",
  },
  {
    title: "The Future of Human-Computer Interaction",
    slug: "the-future-of-human-computer-interaction",
    date: "December 10, 2023",
    excerpt:
      "As AI becomes more sophisticated, how will we interact with our digital tools? Exploring the evolution of user interfaces and the role of natural language processing in shaping our digital future.",
    readTime: "11 min read",
    tags: ["HCI", "AI", "UX Design", "Future Tech"],
    category: "Future Vision",
  },
  {
    title: "Building Resilient Distributed Systems",
    slug: "building-resilient-distributed-systems",
    date: "November 28, 2023",
    excerpt:
      "In an interconnected world, system failures are inevitable. Learn how to design distributed systems that gracefully handle failures and maintain service availability under adverse conditions.",
    readTime: "14 min read",
    tags: ["Distributed Systems", "Resilience", "Architecture", "Reliability"],
    category: "Technical Deep Dive",
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-space relative">
      <Starfield />
      <CosmicBackground />

      <div className="relative z-10 container mx-auto px-8 py-8 max-w-5xl">
        <div className="mb-16">
          <Navigation />
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold elegant-heading mb-6 text-slate-100">Thoughts & Insights</h1>
          <p className="text-xl elegant-text text-slate-300 max-w-3xl mx-auto">
            Reflections on technology, software craftsmanship, and the ever-evolving landscape of digital innovation
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="border-b border-slate-700/30 pb-12 last:border-b-0">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm elegant-text text-slate-400 bg-slate-800/30 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-slate-500 text-sm elegant-text">{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-3xl font-bold elegant-heading text-slate-100 hover:text-slate-300 transition-colors mb-3 cursor-pointer">
                      {post.title}
                    </h2>
                  </Link>
                </div>
              </div>

              <p className="elegant-text text-slate-300 leading-relaxed mb-6 text-lg">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-slate-800/30 border border-slate-600/30 text-slate-400 px-3 py-1 rounded-lg elegant-text"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-slate-500 text-sm elegant-text">{post.readTime}</span>
              </div>

              <div className="mt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-slate-300 hover:text-white elegant-text font-medium transition-colors duration-300 border-b border-slate-600 hover:border-white"
                >
                  Continue Reading
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
