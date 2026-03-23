import React from "react";

function About() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* HEADING */}
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        {/* INTRO */}
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Hi, I'm <span className="text-orange-600 font-semibold">Sarthak</span>
          , a passionate frontend developer who enjoys building clean and
          user-friendly web applications.
        </p>

        {/* JOURNEY */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          I have built multiple projects including a React Weather App, a Todo
          App using Context API, and JavaScript-based games, focusing on clean
          UI, functionality, and real-world problem solving.
        </p>

        {/* SKILLS */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          I focus on writing clean code, improving user experience, and
          continuously learning new technologies. My current stack includes
          React, Tailwind CSS, and JavaScript.
        </p>

        {/* GOAL */}
        <p className="text-gray-600 leading-relaxed">
          My goal is to become a skilled software developer and work on
          impactful projects while continuously improving my problem-solving
          skills.
        </p>
      </div>

      {/* EXTRA SECTION (CARDS) */}
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2">💻 Development</h3>
          <p className="text-gray-600 text-sm">
            Building responsive and interactive web applications using modern
            technologies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2">📚 Learning</h3>
          <p className="text-gray-600 text-sm">
            Continuously improving my skills in React and Data Structures &
            Algorithms.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2">🎯 Goal</h3>
          <p className="text-gray-600 text-sm">
            Aiming to become a professional software developer and contribute to
            meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
