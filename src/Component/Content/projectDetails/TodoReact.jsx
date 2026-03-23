import React from 'react'
import { useNavigate } from "react-router-dom"
function TodoReact() {
  const navigate = useNavigate()
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
 <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transition"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-6">Todo App (React Context API)</h1>

      <img src="/todo-react.png" className="w-full rounded-lg mb-6" />

      <p className="text-gray-600 mb-4">
        A React todo app using Context API for managing global state.
      </p>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Add, edit, delete tasks</li>
        <li>Mark tasks complete</li>
        <li>Context API for state</li>
      </ul>

      <p className="text-orange-600 mb-6">React • Context API</p>

      <div className="flex gap-4">
        <a href="https://github.com/Sarthak050205/todo-context-api" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded">GitHub</a>
        <a href="https://todo-context-api-deploy.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white px-4 py-2 rounded">Live</a>
      </div>

    </div>
  )
}

export default TodoReact