import React from "react";
import { useNavigate } from "react-router-dom";
function LinkdinPostGenerator() {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full hover:bg-orange-200 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">Linkdin Post Generator</h1>

      <img
        src="/LinkdinPostGenerator.png"
        alt="Linkdin Post Generator"
        className="w-full rounded-lg mb-6"
      />

      <p className="text-gray-600 mb-4">
        Generates engaging LinkedIn posts with customizable templates.
      </p>

      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Smart post generation using AI </li> 
        <li>Context-aware (usesprevious posts) </li> 
        <li>Tone selection system{" "}</li>
        <li>Multi-post generation </li>
        <li>Word length controlslider</li>
        <li>Clean responsive UI </li>
        <li>Dark mode support</li>
      </ul>

      <p className="text-orange-600 mb-6">
        React • Tailwind CSS • OpenRouter API (LLM integration)
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/Sarthak050205/linkedin-post-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          GitHub
        </a>

        <a
          href="https://linkedin-post-generator-silk.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 text-white px-4 py-2 rounded"
        >
          Live
        </a>
      </div>
    </div>
  );
}

export default LinkdinPostGenerator;
