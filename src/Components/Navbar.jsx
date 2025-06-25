import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-purple-700">Sahibjot Boyal</span>
        <a href="https://github.com/SahibjotB" className="text-sm text-gray-700 hover:text-purple-700">GitHub</a>
        <a href="https://linkedin.com" className="text-sm text-gray-700 hover:text-purple-700">LinkedIn</a>
        <span className="text-sm text-gray-600 ml-4">📞 647-865-0244</span>
        <span className="text-sm text-gray-600 ml-2">✉️ sboyal3@uwo.ca</span>
      </div>
      <div className="flex space-x-6">
        {[
          { to: "/", label: "Home" },
          { to: "/education", label: "Education" },
          { to: "/experience", label: "Experience" },
          { to: "/projects", label: "Projects" },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `hover:text-purple-700 ${
                isActive ? "font-semibold border-b-2 border-purple-700" : "text-gray-700"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
