import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      slug: "ecommerce-platform",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, project tracking, and deadline management capabilities.",
      slug: "task-management-app",
      tech: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Prisma"],
      status: "Completed",
      year: "2024"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions, 7-day forecasts, interactive maps, and location-based weather alerts.",
      slug: "weather-dashboard",
      tech: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 4,
      title: "AI Chat Bot",
      description: "An intelligent chatbot powered by machine learning that can handle customer inquiries, provide technical support, and learn from user interactions.",
      slug: "ai-chatbot",
      tech: ["Python", "TensorFlow", "FastAPI", "WebSocket", "Redis"],
      status: "In Progress",
      year: "2024"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for tracking social media performance, engagement metrics, and content optimization insights.",
      slug: "social-media-analytics",
      tech: ["React", "D3.js", "Node.js", "MongoDB", "REST API"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 6,
      title: "Mobile Banking App",
      description: "A secure mobile banking application with features like account management, money transfers, bill payments, and transaction history.",
      slug: "mobile-banking-app",
      tech: ["React Native", "Node.js", "PostgreSQL", "Biometric Auth"],
      status: "Completed",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-900/20 to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-black to-green-900/30 shadow-lg border-b border-green-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-white">
              AmiriCodes
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">Projects</a>
              <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
              <a href="/resume" className="text-gray-300 hover:text-green-400 transition-colors">Resume</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-green-900/10 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent mb-6">
              Hey I&apos;m Kam (code name Amiri),
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              & I am a software engineer dedicated to helping this world, one line of code 
              at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gradient-to-br from-black via-green-900/10 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Work</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A collection of my recent work showcasing various technologies and problem-solving approaches.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 overflow-hidden group border border-gray-700 hover:border-green-500"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-900/50 text-green-400 border border-green-600' 
                            : 'bg-yellow-900/50 text-yellow-400 border border-yellow-600'
                        }`}>
                          {project.status}
                        </span>
                        <span className="text-gray-400 text-sm">{project.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm font-medium border border-green-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-colors group/link"
                  >
                    View Project Details
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-black via-green-900/20 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I&apos;m a passionate full-stack developer with 5+ years of experience building 
                scalable web applications. I specialize in modern JavaScript frameworks, 
                cloud technologies, and creating intuitive user experiences.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the developer community.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
          </a>
          <a
                  href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-lg hover:from-green-500 hover:to-green-400 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 via-green-700 to-black rounded-2xl p-8 text-white shadow-lg">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
              <p className="text-green-100 leading-relaxed">
                Continuously exploring new technologies and best practices to deliver exceptional results. 
                Currently diving deep into AI/ML and cloud architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-black via-green-900/20 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto mb-8"></div>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. 
            Let&apos;s discuss how we can bring your ideas to life.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-green-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-green-900/30 to-black text-white py-8 border-t border-green-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Your Name. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
