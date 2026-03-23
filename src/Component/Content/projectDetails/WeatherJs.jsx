import React from 'react'
import { useNavigate } from "react-router-dom"
function WeatherJs() {
  const navigate = useNavigate()
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
 <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transition"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-6">Weather App (JavaScript)</h1>

      <img src="/weather-js.png" className="w-full rounded-lg mb-6" />

      <p className="text-gray-600 mb-4">
        Weather app built using vanilla JavaScript and API integration.
      </p>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>API integration</li>
        <li>DOM manipulation</li>
        <li>Responsive UI</li>
      </ul>

      <p className="text-orange-600 mb-6">JavaScript • API</p>

      <div className="flex gap-4">
        <a href="https://github.com/Sarthak050205/weather-app-js" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded">GitHub</a>
        <a href="https://weather-app-js-ivory.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white px-4 py-2 rounded">Live</a>
      </div>

    </div>
  )
}

export default WeatherJs