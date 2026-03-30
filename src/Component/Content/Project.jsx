import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  const projects = [
    {
      title: "Linkdin Post Generator (React)",
      image: "/LinkdinPostGenerator.png",
      desc: "AI-powered LinkedIn Post Generator built with React.Helps developers write better posts by:- Adapting tone (casual, professional, story)- Remembering previous posts for continuity- Allowing custom intent-based generation- Supporting multi-post generation with word control Focus: solving consistency and repetition issues while posting on LinkedIn.",
      tech: "React, Tailwind, OpenRouter API (LLM integration)",
      github: "https://github.com/Sarthak050205/linkedin-post-generator",
      live: "https://linkedin-post-generator-silk.vercel.app",
      path: "/project/linkedin-post-generator"
    },
    {
      title: "Weather App (React)",
      image: "/weather-react.png",
      desc: "Fetches real-time weather data using API with loading and error handling.",
      tech: "React, Tailwind, API",
      github: "https://github.com/Sarthak050205/weather-app-react",
      live: "https://weather-app-react-virid-three.vercel.app",
      path: "/project/weather-react"
    },
    {
      title: "Todo App (React Context API)",
      image: "/todo-react.png",
      desc: "Manage tasks with add, edit, delete, and mark as complete using Context API.",
      tech: "React, Context API",
      github: "https://github.com/Sarthak050205/todo-context-api",
      live: "https://todo-context-api-deploy.vercel.app",
      path: "/project/todo-react"
    },
    {
      title: "Weather App (JavaScript)",
      image: "/weather-js.png",
      desc: "Weather application built using vanilla JavaScript and API integration.",
      tech: "JavaScript, API",
      github: "https://github.com/Sarthak050205/weather-app-js",
      live: "https://weather-app-js-ivory.vercel.app/",
      path: "/project/weather-js"
    },
    {
      title: "Todo App (JavaScript)",
      image: "/todo-js.png",
      desc: "Basic todo app with add and delete functionality using JavaScript.",
      tech: "JavaScript",
      github: "https://github.com/Sarthak050205/Todo-app-js",
      live: "https://todo-app-js-pink.vercel.app/",
      path: "/project/todo-js"
    },
    {
      title: "Tic Tac Toe",
      image: "/tictactoe.png",
      desc: "Classic tic tac toe game built using JavaScript with interactive UI.",
      tech: "JavaScript",
      github: "https://github.com/Sarthak050205/Tic-Tac-Toe-JS",
      live: "https://tic-tac-toe-js-sigma.vercel.app/",
      path: "/project/tictactoe"
    },
    {
      title: "Netflix Clone",
      image: "/netflix.png",
      desc: "UI clone of Netflix homepage focusing on layout and responsiveness.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/Sarthak050205/Netflix-clone",
      live: "https://netflix-clone-three-xi-57.vercel.app/",
      path: "/project/netflix"
    }
  ]

  return (
    <section className="px-10 py-16 bg-gray-50 min-h-screen">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {projects.map((project, index) => (
          
          <Link key={index} to={project.path}>
            
            <div className="bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden group">
              
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3">
                  {project.desc}
                </p>

                <p className="text-sm text-orange-600 mb-4">
                  {project.tech}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-gray-800 text-white px-3 py-1 rounded"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-orange-600 text-white px-3 py-1 rounded"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live
                  </a>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  )
}

export default Project