import React from 'react'

function Contact() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen px-6 py-16">

      <div className="max-w-3xl mx-auto text-center">

        {/* HEADING */}
        <h1 className="text-4xl font-bold mb-4">
          Contact Me
        </h1>

        <p className="text-gray-600 mb-10">
          Feel free to reach out through any platform below.
        </p>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/918271788650"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <h3 className="text-lg font-semibold mb-2">💬 WhatsApp</h3>
            <p className="text-gray-600 text-sm">
              Chat with me directly
            </p>
          </a>

          {/* CALL */}
          <a
            href="tel:+918271788650"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <h3 className="text-lg font-semibold mb-2">📞 Call</h3>
            <p className="text-gray-600 text-sm">
              +91 8271788650
            </p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:sklohani252@gmail.com"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <h3 className="text-lg font-semibold mb-2">📧 Email</h3>
            <p className="text-gray-600 text-sm">
              sklohani252@gmail.com
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/sarthak-kumar-lohani-214aab325/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left"
          >
            <h3 className="text-lg font-semibold mb-2">💼 LinkedIn</h3>
            <p className="text-gray-600 text-sm">
              Connect with me professionally
            </p>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Sarthak050205"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-2">💻 GitHub</h3>
            <p className="text-gray-600 text-sm">
              Explore my projects and code
            </p>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact