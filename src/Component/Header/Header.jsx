import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-600 tracking-wide">
          Sarthak Kumar Lohani
        </h1>

        {/* Nav Links */}
        <nav className="flex gap-8 text-sm font-medium">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : "text-gray-700 hover:text-orange-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : "text-gray-700 hover:text-orange-600 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : "text-gray-700 hover:text-orange-600 transition"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : "text-gray-700 hover:text-orange-600 transition"
            }
          >
            Contact
          </NavLink>

        </nav>

      </div>
    </header>
  )
}

export default Header