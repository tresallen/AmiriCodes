import Link from "next/link";
import { notFound } from "next/navigation";

// Sample project data - in a real app, this would come from a CMS or database
const projects = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description: "A comprehensive full-stack e-commerce solution designed to handle modern online retail requirements.",
    longDescription: `
      This e-commerce platform was built from the ground up to provide a seamless shopping experience for customers while offering powerful management tools for store owners. The application handles everything from product catalog management to secure payment processing.

      Key features include:
      - User authentication and authorization with JWT tokens
      - Comprehensive product catalog with categories, filters, and search
      - Shopping cart and wishlist functionality
      - Secure payment processing with Stripe integration
      - Order management and tracking system
      - Admin dashboard for inventory and sales management
      - Responsive design optimized for all devices
      - Real-time inventory updates
      - Email notifications for orders and updates
    `,
    tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Express", "Redux", "Material-UI"],
    status: "Completed",
    year: "2024",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com",
    challenges: [
      "Implementing secure payment processing with PCI compliance",
      "Optimizing database queries for large product catalogs",
      "Creating a responsive design that works across all devices",
      "Building real-time inventory management system"
    ],
    results: [
      "Successfully processed over $100K in transactions",
      "Achieved 99.9% uptime during peak shopping seasons",
      "Reduced page load times by 40% through optimization",
      "Received positive feedback from 500+ beta users"
    ]
  },
  "task-management-app": {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    longDescription: `
      This task management application was designed to streamline team productivity and project coordination. Built with modern web technologies, it provides real-time collaboration features that keep teams synchronized and efficient.

      The application includes:
      - Real-time task updates using WebSocket connections
      - Team collaboration with role-based permissions
      - Project organization with customizable boards
      - Deadline tracking and notification system
      - File attachments and comments on tasks
      - Time tracking and productivity analytics
      - Mobile-responsive design for on-the-go access
      - Integration with popular tools like Slack and Google Calendar
    `,
    tech: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Prisma", "Tailwind CSS", "NextAuth.js"],
    status: "Completed",
    year: "2024",
    githubUrl: "https://github.com/yourusername/task-management",
    liveUrl: "https://your-taskmanager-demo.com",
    challenges: [
      "Implementing real-time synchronization across multiple clients",
      "Managing complex state with TypeScript for type safety",
      "Optimizing database performance for large teams",
      "Creating intuitive drag-and-drop interface"
    ],
    results: [
      "Improved team productivity by 35% according to user feedback",
      "Successfully handles 1000+ concurrent users",
      "Reduced project completion time by 25% on average",
      "Achieved 4.8/5 user satisfaction rating"
    ]
  },
  "weather-dashboard": {
    title: "Weather Dashboard",
    description: "A responsive weather application with current conditions, forecasts, and interactive maps.",
    longDescription: `
      This weather dashboard provides comprehensive weather information with a focus on user experience and data visualization. The application aggregates data from multiple weather sources to provide accurate and detailed forecasts.

      Features include:
      - Current weather conditions with detailed metrics
      - 7-day and hourly forecasts with interactive charts
      - Interactive weather maps with multiple layers
      - Location-based weather alerts and notifications
      - Historical weather data and trends
      - Offline functionality with cached data
      - Progressive Web App (PWA) capabilities
      - Accessibility features for users with disabilities
    `,
    tech: ["Vue.js", "Chart.js", "OpenWeather API", "PWA", "Vuex", "Vue Router", "Service Workers"],
    status: "Completed",
    year: "2023",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-demo.com",
    challenges: [
      "Optimizing API calls to reduce costs while maintaining accuracy",
      "Creating smooth animations for weather transitions",
      "Implementing offline functionality with service workers",
      "Designing responsive charts that work on all screen sizes"
    ],
    results: [
      "Reduced API costs by 60% through intelligent caching",
      "Achieved 95+ Lighthouse performance score",
      "Received 10K+ downloads as a PWA",
      "Featured in Vue.js community showcase"
    ]
  }
};

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-900/20 to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-black to-green-900/30 shadow-lg border-b border-green-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-bold text-white hover:text-green-400 transition-colors">
              Your Name
            </Link>
                  <nav className="hidden md:flex space-x-8">
                    <Link href="/#about" className="text-gray-300 hover:text-green-400 transition-colors">About</Link>
                    <Link href="/#projects" className="text-gray-300 hover:text-green-400 transition-colors">Projects</Link>
                    <Link href="/#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link>
                    <a href="https://amiricodes.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">Blog</a>
                    <Link href="/resume" className="text-gray-300 hover:text-green-400 transition-colors">Resume</Link>
                  </nav>
          </div>
        </div>
      </header>

      {/* Project Header */}
      <section className="bg-gradient-to-br from-black via-green-900/10 to-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link 
              href="/#projects" 
              className="inline-flex items-center text-green-400 hover:text-green-300 font-medium mb-6 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent mb-6">
              {project.title}
            </h1>
            
            <div className="flex justify-center items-center space-x-4 mb-8">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                project.status === 'Completed' 
                  ? 'bg-green-900/50 text-green-400 border border-green-600' 
                  : 'bg-yellow-900/50 text-yellow-400 border border-yellow-600'
              }`}>
                {project.status}
              </span>
              <span className="text-gray-400 text-lg">{project.year}</span>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 bg-gradient-to-br from-black via-green-900/10 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-lg p-8 md:p-12 border border-gray-700">
            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-green-900/30 text-green-300 rounded-full text-sm font-medium border border-green-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-300">
                {project.longDescription.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Key Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-3 mr-4"></span>
                    <span className="text-gray-300 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Results & Impact</h2>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-3 mr-4"></span>
                    <span className="text-gray-300 leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-lg hover:from-green-500 hover:to-green-400 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-green-900/30 to-black text-white py-8 border-t border-green-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Kameron Allen. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
