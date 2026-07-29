"use client";

import Link from "next/link";
import { useTheme } from "../ThemeContext";

export default function ResumePage() {
  const { theme, toggleTheme } = useTheme();
  
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
            <Link href="/" className={`text-2xl font-bold transition-colors ${
              theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'
            }`}>
              AmiriCodes
            </Link>
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <a href="https://amiricodes.app" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>Home</a>
                <Link href="/#works" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>Work</Link>
                <Link href="/#skills" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>Skills</Link>
                <Link href="/#about" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>About</Link>
                <a href="https://amiricodes.hashnode.dev/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}>Blog</a>
                <Link href="/resume" className={theme === 'dark' ? 'text-white font-semibold' : 'text-black font-semibold'}>Resume</Link>
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

      {/* Resume Section */}
      <section className={`py-16 pt-24 transition-colors duration-300 ${
        theme === 'dark'
          ? ''
          : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-6 ${
              theme === 'dark'
                ? 'from-white to-gray-300'
                : 'from-black to-gray-600'
            }`}>
              Resume
            </h1>
            <div className="w-24 h-1 bg-gray-400 mx-auto mb-8"></div>
            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              View my resume or download it to learn more about my experience and skills.
            </p>
          </div>

          {/* PDF Viewer Section */}
          <div className={`rounded-2xl shadow-lg p-8 md:p-12 mb-12 transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-700'
              : 'bg-white border border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Resume</h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-800">Amir Allen - Resume</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">PDF Document</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative" style={{ height: '800px' }}>
                <iframe
                  src="/AllenKameronGradCV.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  className="w-full h-full border-0"
                  title="Amir Allen Resume"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/AllenKameronGradCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF Resume
              </a>
              
            </div>
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
            &copy; 2026 Amir Allen. All rights reserved. Designed and built with Next.js, Typescript, and Tailwind CSS. Deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
}
