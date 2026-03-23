import React from 'react'

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sarthak. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          
          <a
            href="https://github.com/Sarthak050205"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sarthak-kumar-lohani-214aab325/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer