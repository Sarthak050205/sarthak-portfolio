import React from 'react'
import { useNavigate } from "react-router-dom"

function NetflixClone() {
  const navigate = useNavigate()

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">
        Netflix Clone
      </h1>

      <img
        src="/netflix.png"
        alt="Netflix Clone"
        className="w-full rounded-lg mb-6"
      />

      <p className="text-gray-600 mb-4">
        A Netflix homepage UI clone focusing on layout, design, and responsiveness.
      </p>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Responsive layout</li>
        <li>Clean UI design</li>
        <li>Movie sections layout</li>
      </ul>

      <p className="text-orange-600 mb-6">
        HTML • CSS • JavaScript
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/Sarthak050205/Netflix-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          GitHub
        </a>

        <a
          href="https://netflix-clone-three-xi-57.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 text-white px-4 py-2 rounded"
        >
          Live
        </a>
      </div>

    </div>
  )
}

export default NetflixClone