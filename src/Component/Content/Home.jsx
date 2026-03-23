import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left max-w-xl">
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="text-orange-600">Sarthak</span> 👋
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            I build real-world React applications with clean UI, API integration, and state management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            <Link
              to="/project"
              className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition shadow-md"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Contact Me
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          
          <img
            src="/profile.jpeg"
            alt="Sarthak"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-orange-500 shadow-xl"
          />

        </div>

      </section>

      {/* SKILLS SECTION */}
      <section className="px-6 py-16 bg-white text-center">
        
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          
          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-orange-100 transition"
            >
              {skill}
            </span>
          ))}

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-20 text-center bg-gray-50">
        
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Together 🚀
        </h2>

        <p className="text-gray-600 mb-6">
          I'm open to internships and collaboration opportunities.
        </p>

        <Link
          to="/contact"
          className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition shadow-md"
        >
          Get In Touch
        </Link>

      </section>

    </div>
  )
}

export default Home