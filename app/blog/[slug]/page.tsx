import Navigation from "@/components/navigation"
import Starfield from "@/components/starfield"
import CosmicBackground from "@/components/cosmic-background"
import { ArrowLeft, Calendar, Clock, MessageCircle, User } from "lucide-react"
import Link from "next/link"

export default function BlogPost({ params }: { params: { slug: string } }) {
  // This would normally come from a database or CMS
  const post = {
    title: "The Art of Scalable Architecture",
    slug: "the-art-of-scalable-architecture",
    date: "January 15, 2024",
    author: "Alexander Sterling",
    readTime: "12 min read",
    category: "Technical Deep Dive",
    tags: ["Architecture", "Scalability", "Backend", "Best Practices"],
    excerpt:
      "Exploring the fundamental principles of building software systems that gracefully handle growth. From microservices to monoliths, understanding when and how to scale your applications for long-term success.",
    content: `
      <p>In the ever-evolving landscape of software development, scalability stands as one of the most critical yet often misunderstood aspects of system design. As applications grow in complexity and user base, the architecture decisions made early on can either empower or constrain future growth.</p>
      
      <h2>The Foundation of Scalable Systems</h2>
      
      <p>At its core, scalability is about maintaining performance and reliability as demand increases. This requires a thoughtful approach to system design that anticipates growth patterns and potential bottlenecks.</p>
      
      <p>The journey toward scalable architecture begins with understanding your application's specific needs. Not every system requires the same scaling strategies, and premature optimization can lead to unnecessary complexity.</p>
      
      <blockquote>
        "Make it work, make it right, make it fast." — Kent Beck
      </blockquote>
      
      <p>This quote encapsulates a pragmatic approach to scalability: start with a functioning system, refine its design, and then optimize for performance and scale.</p>
      
      <h2>Horizontal vs. Vertical Scaling</h2>
      
      <p>When discussing scalability, we often encounter two primary approaches: horizontal and vertical scaling.</p>
      
      <p>Vertical scaling (scaling up) involves adding more power to your existing machines—more CPU, RAM, or storage. While straightforward, this approach eventually hits physical limitations and can become prohibitively expensive.</p>
      
      <p>Horizontal scaling (scaling out) distributes your workload across multiple machines. This approach offers greater flexibility and resilience but introduces complexity in data consistency and system coordination.</p>
      
      <h2>Microservices: The Double-Edged Sword</h2>
      
      <p>The microservices architecture has gained immense popularity for its scalability benefits. By decomposing applications into smaller, independently deployable services, teams can scale specific components based on demand rather than scaling the entire system.</p>
      
      <p>However, microservices are not a silver bullet. The distributed nature introduces challenges in service discovery, inter-service communication, and maintaining data consistency across services.</p>
      
      <h2>Data Considerations</h2>
      
      <p>Data often becomes the primary bottleneck in scaling applications. Strategies like database sharding, read replicas, and caching layers can alleviate pressure on your data tier.</p>
      
      <p>Modern approaches like Command Query Responsibility Segregation (CQRS) and event sourcing provide patterns for managing data in distributed systems, enabling greater scalability while maintaining data integrity.</p>
      
      <h2>Conclusion</h2>
      
      <p>Building scalable architecture is less about following trends and more about understanding your specific requirements and constraints. The most successful scalable systems are those designed with flexibility in mind, allowing them to evolve as needs change.</p>
      
      <p>Remember that scalability is a journey, not a destination. Continuous monitoring, testing, and refinement are essential components of maintaining a system that can grow with your business.</p>
    `,
    comments: [
      {
        id: 1,
        author: "Jane Cooper",
        date: "January 16, 2024",
        content:
          "This article provides an excellent overview of scalability considerations. I particularly appreciated the balanced take on microservices—acknowledging both benefits and challenges.",
      },
      {
        id: 2,
        author: "Robert Chen",
        date: "January 17, 2024",
        content:
          "I've been struggling with database scaling issues in my current project. The section on data considerations gave me some new approaches to explore. Would love to see a follow-up article focused specifically on database scaling patterns!",
      },
      {
        id: 3,
        author: "Maria Rodriguez",
        date: "January 18, 2024",
        content:
          "Great insights! I've found that many teams rush to implement microservices without fully understanding the operational complexity they introduce. Your measured approach is refreshing.",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-space relative">
      <Starfield />
      <CosmicBackground />

      <div className="relative z-10 container mx-auto px-8 py-8 max-w-4xl">
        <div className="mb-16">
          <Navigation />
        </div>

        <Link
          href="/blog"
          className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span className="elegant-text">Back to all writings</span>
        </Link>

        <article>
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm elegant-text text-slate-400 bg-slate-800/30 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold elegant-heading mb-6 text-slate-100">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-400">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span className="elegant-text text-sm">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span className="elegant-text text-sm">{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span className="elegant-text text-sm">{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle size={16} className="mr-2" />
                <span className="elegant-text text-sm">{post.comments.length} comments</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-slate-800/50 flex items-center justify-center">
              <div className="text-slate-500 elegant-text text-center p-12">
                <p className="mb-2">Featured Image Placeholder</p>
                <p className="text-sm">1200 × 675 pixels</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-invert prose-slate max-w-none elegant-text mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold elegant-heading mb-4 text-slate-200">Topics</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-slate-800/30 border border-slate-600/30 text-slate-300 px-3 py-1 rounded-lg elegant-text"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <section className="border-t border-slate-700/30 pt-12">
            <h3 className="text-2xl font-bold elegant-heading mb-8 text-slate-100">
              Comments <span className="text-slate-400">({post.comments.length})</span>
            </h3>

            {/* Existing Comments */}
            <div className="space-y-8 mb-12">
              {post.comments.map((comment) => (
                <div key={comment.id} className="border-b border-slate-700/30 pb-8 last:border-b-0">
                  <div className="flex justify-between mb-4">
                    <h4 className="text-lg font-semibold elegant-text text-slate-200">{comment.author}</h4>
                    <span className="text-sm elegant-text text-slate-400">{comment.date}</span>
                  </div>
                  <p className="elegant-text text-slate-300">{comment.content}</p>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <div>
              <h3 className="text-xl font-bold elegant-heading mb-6 text-slate-100">Leave a Comment</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm elegant-text text-slate-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-800/30 border border-slate-700 rounded-lg p-3 text-slate-200 elegant-text focus:outline-none focus:ring-2 focus:ring-slate-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm elegant-text text-slate-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-800/30 border border-slate-700 rounded-lg p-3 text-slate-200 elegant-text focus:outline-none focus:ring-2 focus:ring-slate-400"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block mb-2 text-sm elegant-text text-slate-300">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    rows={6}
                    className="w-full bg-slate-800/30 border border-slate-700 rounded-lg p-3 text-slate-200 elegant-text focus:outline-none focus:ring-2 focus:ring-slate-400"
                    placeholder="Share your thoughts..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg elegant-text transition-colors duration-300"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
