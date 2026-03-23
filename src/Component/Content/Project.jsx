import React from 'react'

function Project() {
  const projects = [
    {
      title: "Weather App (React)",
      desc: "Fetches real-time weather data using API with loading and error handling.",
      tech: "React, Tailwind, API",
      github: "https://github.com/Sarthak050205/weather-app-react",
      live: "https://weather-app-react-virid-three.vercel.app"
    },
    {
      title: "Todo App (Context API)",
      desc: "Manage tasks with add, edit, delete, and mark as complete using Context API.",
      tech: "React, Context API",
      github: "https://github.com/Sarthak050205/todo-context-api",
      live: "https://todo-context-api-deploy.vercel.app"
    },
    {
      title: "Weather App (JavaScript)",
      desc: "Weather application built using vanilla JavaScript and API integration.",
      tech: "JavaScript, API",
      github: "https://github.com/Sarthak050205/weather-app-js",
      live: "https://sarthak050205.github.io/weather-app-js/"
    },
    {
      title: "Todo App (JavaScript)",
      desc: "Basic todo app with add and delete functionality using JavaScript.",
      tech: "JavaScript",
      github: "https://github.com/Sarthak050205/Todo-app-js",
      live: "https://sarthak050205.github.io/Todo-app-js/"
    },
    {
      title: "Tic Tac Toe",
      desc: "Classic tic tac toe game built using JavaScript with interactive UI.",
      tech: "JavaScript",
      github: "https://github.com/Sarthak050205/Tic-Tac-Toe-JS",
      live: "https://sarthak050205.github.io/Tic-Tac-Toe-JS/"
    },
    {
      title: "Netflix Clone",
      desc: "UI clone of Netflix homepage focusing on layout and responsiveness.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/Sarthak050205/Netflix-clone",
      live: "https://sarthak050205.github.io/Netflix-clone/"
    }
  ]

  return (
    <section className="px-10 py-16 bg-gray-50 min-h-screen">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>

            <p className="text-gray-600 mb-3">
              {project.desc}
            </p>

            <p className="text-sm text-orange-600 mb-4">
              {project.tech}
            </p>

            <div className="flex gap-4">
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
              >
                Live
              </a>

            </div>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Project