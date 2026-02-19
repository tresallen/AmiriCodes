"use client";

import Link from "next/link";
import { useTheme } from "./ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const projects = [
    {
      id: 1,
      title: "Independent Software Engineer",
      description: "",
      tech: ["Python", "FastAPI", "AI/ML", "LLMs", "Typescript", "Next.js"],
      status: "Current",
      year: "Aug 2025 - Current"
    },
    {
      id: 6,
      title: "Amiri Codes Website",
      description: "A personal portfolio.",
      tech: ["Typescript", "Next.js", "PostgreSQL", "Node.js"],
      status: "Habitual Work in Progress",
      year: "2025 - Current"
    },
    {
      id: 2,
      title: "Contracted Systems Engineer",
      description: "Amazon",
      tech: ["AWS", "CI/CD", "Terraform", "Bash", "PowerShell", "Linux"],
      status: "Completed",
      year: "Nov 2024 - Jan 2025"
    },
    {
      id: 5,
      title: "Vereda",
      description: "A comprehensive analytics dashboard for tracking social media performance, engagement metrics, and content optimization insights.",
      slug: "social-media-analytics",
      tech: ["React", "D3.js", "Node.js", "MongoDB", "REST API"],
      status: "Completed",
      year: "2024"
    },
    {
      id: 3,
      title: "Software Engineer",
      description: "General Motors",
      tech: ["React", "Azure DevOps", "Java", "REST & GraphQL APIs", "SQL"],
      status: "Completed",
      year: "Jan 2023 - Aug 2024"
    },
    {
      id: 4,
      title: "Software Engineer Intern",
      description: "General Motors",
      tech: ["Python", "RobotFramework", "Elasticsearch", "Java", "QA Automation"],
      status: "Completed",
      year: "Jun 2022 - Sep 2022"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black' 
        : 'bg-white'
    }`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-black/80 border-b border-gray-700'
          : 'bg-white/80 border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              AmiriCodes
            </div>
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <a href="https://amiricodes.app" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>Home</a>
                <a href="#projects" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>Work</a>
                <a href="#about" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>About</a>
                <a href="https://amiricodes.hashnode.dev/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>Blog</a>
                <a href="/resume" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>Resume</a>
              </nav>
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`pt-24 transition-colors duration-300 ${
        theme === 'dark'
          ? ''
          : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-6 ${
              theme === 'dark'
                ? 'from-white to-gray-300'
                : 'from-black to-gray-600'
            }`}>
              Hey I&apos;m Kam (code name Amiri)
            </h1>
            <p className={`text-2xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              & I am a software engineer dedicated to helping this world, one line of code 
              at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 scroll-mt-24 transition-colors duration-300 ${
        theme === 'dark'
          ? ''
          : 'bg-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Work</h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto mb-6"></div>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              A collection of my recent work showcasing various technologies and problem-solving approaches.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden group ${
                  theme === 'dark'
                    ? 'bg-transparent border-gray-700 hover:border-gray-500'
                    : 'bg-transparent border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 group-hover:text-gray-400 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-transparent border border-gray-500 text-gray-500'
                            : 'bg-white border border-gray-300 text-gray-600'
                        }`}>
                          {project.status}
                        </span>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          theme === 'dark'
                            ? 'bg-emerald-800 text-emerald-50 border border-emerald-700'
                            : 'bg-emerald-800 text-emerald-50 border border-emerald-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.id === 1 ? (
                    <a
                      href="https://amiricodes.hashnode.dev/hello-world-meet-gpt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center font-semibold transition-colors group/link ${
                        theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : project.id === 2 ? (
                    <a
                      href="https://amiricodes.hashnode.dev/different-technologies-same-learning-curve"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center font-semibold transition-colors group/link ${
                        theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : project.id === 3 ? (
                    <a
                      href="https://amiricodes.hashnode.dev/fleet-and-field-applications-at-gener"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center font-semibold transition-colors group/link ${
                        theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : project.id === 4 ? (
                    <a
                      href="https://amiricodes.hashnode.dev/from-assuring-patients-to-assuring-code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center font-semibold transition-colors group/link ${
                        theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : project.id === 5 ? (
                    <a
                      href="https://amiricodes.hashnode.dev/from-one-fall-to-a-lifelong-climb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center font-semibold transition-colors group/link ${
                        theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : project.id === 6 ? (
                    <a
                      href="https://amiricodes.hashnode.dev/codename-kids-next-developer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center font-semibold transition-colors group/link ${
                        theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={`/projects/${project.slug}`}
                      className={`inline-flex items-center font-semibold transition-colors group/link ${
                        theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 scroll-mt-24 transition-colors duration-300 ${
        theme === 'dark'
          ? ''
          : 'bg-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-xl mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I am a dynamic and goal-oriented software developer looking to leverage my skills in full-stack development
                to contribute to scalable, secure & user-focused web applications. I am an eager and curious learner, who
                embraces complex challenges with modern solutions. I am skilled in frontend development and API design and integration,
                with a knack for teamwork and problem solving. I am confident that I would be a valued addition to any organization.
              </p>
              <p className={`text-xl mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the developer community.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/tresallen"
            target="_blank"
            rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600'
                      : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
          </a>
          <a
                  href="http://linkedin.com/in/kameronallen/"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:tresallen@gmail.com"
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                      : 'bg-gradient-to-r from-gray-600 to-gray-500 text-white hover:from-gray-500 hover:to-gray-400'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </div>
            <div className={`rounded-2xl p-8 text-white shadow-lg ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800 to-black'
                : 'bg-gradient-to-br from-gray-700 to-gray-800'
            }`}>
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
              <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-gray-100'}`}>
                Continuously exploring new technologies and best practices to deliver exceptional results. 
                Currently diving deep into AI/ML and cloud architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 scroll-mt-24 transition-colors duration-300 ${
        theme === 'dark'
          ? ''
          : 'bg-gray-100'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Let&apos;s Work Together</h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto mb-8"></div>
          <p className={`mb-8 text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind? I&apos;d love to hear about it. 
            Let&apos;s discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:tresallen@gmail.com"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
            <a
              href="https://calendar.google.com/calendar/u/0/r/eventedit?add=tresallen@gmail.com&text=Call%20with%20Kam"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white hover:shadow-gray-500/25'
                  : 'bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white hover:shadow-gray-500/25'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t transition-colors duration-300 ${
        theme === 'dark'
          ? 'border-t border-gray-700 text-white'
          : 'border-t border-gray-200 bg-white text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            &copy; 2026 Kameron Allen. All rights reserved. Designed and built with Next.js, Typescript, and Tailwind CSS. Deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
}
