import React from 'react'
import { useNavigate } from "react-router-dom"
function WeatherReact() {
  const navigate = useNavigate()
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
       <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transition"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-6">
        Weather App (React)
      </h1>

      <img
        src="/weather-react.png"
        alt="Weather App"
        className="w-full rounded-lg mb-6"
      />

      <p className="text-gray-600 mb-4">
        A React-based weather application that fetches real-time weather data using API and displays it in a clean UI.
      </p>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>API integration</li>
        <li>Loading & error handling</li>
        <li>Responsive UI</li>
      </ul>

      <p className="text-sm text-orange-600 mb-6">
        React • Tailwind • API
      </p>

      {/* BUTTONS */}
      <div className="flex gap-4">

        <a
          href="https://github.com/Sarthak050205/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-900"
        >
          GitHub
        </a>

        <a
          href="https://weather-app-react-virid-three.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 text-white px-5 py-2 rounded hover:bg-orange-700"
        >
          Live
        </a>

      </div>

    </div>
  )
}

export default WeatherReact