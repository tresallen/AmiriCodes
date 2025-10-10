"use client";

import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-900/20 to-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-black to-green-900/30 shadow-lg border-b border-green-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-bold text-white hover:text-green-400 transition-colors">
              AmiriCodes
            </Link>
            <nav className="hidden md:flex space-x-8">
              <a href="https://amiricodes.app" className="text-gray-300 hover:text-green-400 transition-colors">Home</a>
              <Link href="/#projects" className="text-gray-300 hover:text-green-400 transition-colors">Projects</Link>
              <Link href="/#about" className="text-gray-300 hover:text-green-400 transition-colors">About</Link>
              <Link href="/#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link>
              <a href="https://amiricodes.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">Blog</a>
              <Link href="/resume" className="text-green-400 font-semibold">Resume</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Resume Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent mb-6">
              Resume
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              View my resume or download it to learn more about my experience and skills.
            </p>
          </div>

          {/* PDF Viewer Section */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-lg p-8 md:p-12 border border-gray-700 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Resume</h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-800">Kameron Allen - Resume</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">PDF Document</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative" style={{ height: '800px' }}>
                <iframe
                  src="/KamiCloudResume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  className="w-full h-full border-0"
                  title="Kameron Allen Resume"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/KamiCloudResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-green-500/25"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF Resume
              </a>
              
              <button
                className="inline-flex items-center bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg"
                onClick={() => document.getElementById('resume-upload')?.click()}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Upload New Resume
              </button>
              
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                id="resume-upload"
              />
            </div>
            <p className="text-gray-400 text-sm mt-4">PDF files only (Max 10MB)</p>
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
