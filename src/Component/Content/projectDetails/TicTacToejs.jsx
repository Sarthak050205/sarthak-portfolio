import React from 'react'
import { useNavigate } from 'react-router-dom'
function TicTacToeJs() {
  const navigate = useNavigate()
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transition"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-6">Tic Tac Toe</h1>

      <img src="/tictactoe.png" className="w-full rounded-lg mb-6" />

      <p className="text-gray-600 mb-4">
        Classic Tic Tac Toe game built using JavaScript with interactive gameplay.
      </p>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Game logic</li>
        <li>Player turns</li>
        <li>Win/draw detection</li>
      </ul>

      <p className="text-orange-600 mb-6">JavaScript</p>

      <div className="flex gap-4">
        <a href="https://github.com/Sarthak050205/Tic-Tac-Toe-JS" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded">GitHub</a>
        <a href="https://tic-tac-toe-js-sigma.vercel.app/" target="_blank" className="bg-orange-600 text-white px-4 py-2 rounded">Live</a>
      </div>

    </div>
  )
}

export default TicTacToeJs