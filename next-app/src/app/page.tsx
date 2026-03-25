"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeContext";

const HERO_TEXT = "Kameron Allen\nSoftware developer\nI design and develop scalable and high-performance digital solutions to meet the needs of modern businesses.";
const TYPING_SPEED = 45;
const CURSOR_BLINK_MS = 530;

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [skillsTab, setSkillsTab] = useState<"frontend" | "backend" | "others">("frontend");
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < HERO_TEXT.length) {
        setDisplayedText(HERO_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, TYPING_SPEED);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), CURSOR_BLINK_MS);
    return () => clearInterval(blink);
  }, []);

  const renderTypedHero = () => {
    const lines = displayedText.split("\n");
    const isDark = theme === "dark";
    const cursor = (
      <span
        className={`inline-block w-0.5 h-6 md:h-7 align-bottom ml-0.5 ${isDark ? "bg-white" : "bg-gray-900"} transition-opacity duration-75`}
        style={{ opacity: cursorVisible ? 1 : 0 }}
        aria-hidden
      />
    );
    return (
      <div className="space-y-2">
        <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
          {lines[0] || "\u00A0"}
          {lines.length === 1 && cursor}
        </h1>
        {lines.length > 1 && (
          <h2 className={`text-xl md:text-2xl font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {lines[1]}
            {lines.length === 2 && cursor}
          </h2>
        )}
        {lines.length > 2 && (
          <p className={`text-lg max-w-2xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {lines[2]}
            {cursor}
          </p>
        )}
      </div>
    );
  };

  const employment = [
    { company: "Independent", role: "Software Engineer", type: "Current", year: "2025", blogUrl: "https://amiricodes.hashnode.dev/hello-world-meet-gpt" },
    { company: "Amazon", role: "Contracted Systems Engineer", type: "Completed", year: "2024", blogUrl: "https://amiricodes.hashnode.dev/different-technologies-same-learning-curve" },
    { company: "General Motors", role: "Software Engineer", type: "Completed", year: "2023-2024", blogUrl: "https://amiricodes.hashnode.dev/fleet-and-field-applications-at-gener" },
    { company: "General Motors", role: "Software Engineer Intern", type: "Completed", year: "2022", blogUrl: "https://amiricodes.hashnode.dev/from-assuring-patients-to-assuring-code" },
  ];

  const sideProjects = [
    {
      title: "Amiri Codes Website",
      description: "A personal portfolio.",
      tech: ["Typescript", "Next.js", "PostgreSQL", "Node.js"],
      slug: null,
    },
    {
      title: "Vereda",
      description: "A comprehensive analytics dashboard for tracking social media performance.",
      tech: ["React", "D3.js", "Node.js", "MongoDB", "REST API"],
      slug: "social-media-analytics",
    },
  ];

  const skills = {
    frontend: [
      { name: "React", desc: "For building dynamic and efficient user interfaces tailored to modern web applications." },
      { name: "Next.js", desc: "For creating high-performance web applications with server-side rendering and seamless SEO optimization." },
      { name: "TypeScript", desc: "For type-safe development and maintainable codebases." },
    ],
    backend: [
      { name: "Python", desc: "For building scalable APIs and AI/ML solutions." },
      { name: "FastAPI", desc: "For high-performance REST APIs with automatic documentation." },
      { name: "Node.js", desc: "For full-stack JavaScript development and server-side applications." },
    ],
    others: [
      { name: "AI/ML & LLMs", desc: "For integrating intelligent features and automation." },
      { name: "AWS", desc: "For cloud infrastructure and deployment." },
      { name: "PostgreSQL", desc: "For robust relational data storage." },
    ],
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black/80 border-b border-gray-700' : 'bg-white/80 border-b border-gray-200'
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
<a href="#works" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>Work</a>
                <a href="#skills" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>Skills</a>
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
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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

      {/* Hero - Kevin style with typing effect */}
      <section className={`pt-32 pb-16 transition-colors duration-300 ${theme === 'dark' ? '' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 min-h-[10rem]">
            {renderTypedHero()}
          </div>
        </div>
      </section>

      {/* Link Buttons Bar - above Work */}
      <section className={`py-6 ${theme === 'dark' ? '' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="http://linkedin.com/in/kameronallen/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all text-sm ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/tresallen"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all text-sm ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="mailto:tresallen@gmail.com"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all text-sm ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <Link
              href="/resume"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all text-sm ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Works Section - Kevin style */}
      <section id="works" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Work
          </h2>

          <div className="space-y-6 mb-16">
            {/* Employment history */}
            <div className="space-y-6">
              {employment.map((job, i) => (
                <div key={i} className={`flex justify-between items-start gap-4 py-4 border-b ${
                  theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                }`}>
                  <div>
                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {job.company}
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {job.role}
                    </p>
                    {job.blogUrl && (
                      <a
                        href={job.blogUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm mt-1 inline-flex items-center font-medium ${
                          theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
                        }`}
                      >
                        View Details
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {job.type}
                    </span>
                    <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                      {job.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest side/freelance project */}
          <h3 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Latest side/freelance project.
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sideProjects.map((project) => (
              <div
                key={project.title}
                className={`p-6 rounded-xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-transparent border-gray-800 hover:border-gray-700'
                    : 'bg-transparent border-gray-200 hover:border-gray-300'
                }`}
              >
                <h4 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h4>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        theme === 'dark'
                          ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-700/50'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.slug ? (
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`inline-flex items-center mt-4 font-medium text-sm ${
                      theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
                    }`}
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <a
                    href="https://amiricodes.hashnode.dev/codename-kids-next-developer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center mt-4 font-medium text-sm ${
                      theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
                    }`}
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Kevin style */}
      <section id="skills" className={`py-16 scroll-mt-24 ${theme === 'dark' ? '' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Skills
          </h2>
          <h3 className={`text-lg font-medium mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Tools and technologies I enjoy working with
          </h3>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            {(["frontend", "backend", "others"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSkillsTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                  skillsTab === tab
                    ? theme === 'dark'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-900 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-800/50 text-gray-400 hover:text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {tab === "frontend" ? "FrontEnd" : tab === "backend" ? "Backend" : "Others"}
              </button>
            ))}
          </div>

          {/* Skill cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {skills[skillsTab].map((skill) => (
              <div
                key={skill.name}
                className={`p-6 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-transparent border-gray-800'
                    : 'bg-white border-gray-200'
                }`}
              >
                <h4 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {skill.name}
                </h4>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 scroll-mt-24 ${theme === 'dark' ? '' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <p className={`text-lg mb-6 leading-relaxed max-w-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            I am a dynamic and goal-oriented software developer looking to leverage my skills in full-stack development
            to contribute to scalable, secure & user-focused web applications. I am an eager and curious learner, who
            embraces complex challenges with modern solutions. I am skilled in frontend development and API design and integration,
            with a knack for teamwork and problem solving. I am confident that I would be a valued addition to any organization.
          </p>
          <p className={`text-lg leading-relaxed max-w-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            When I&apos;m not coding, you can find me exploring new technologies, 
            contributing to open source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t transition-colors duration-300 ${
        theme === 'dark' ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            &copy; 2026 Kameron Allen. All rights reserved. Designed and built with Next.js, Typescript, and Tailwind CSS. Deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
}
