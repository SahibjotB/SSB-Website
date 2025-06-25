import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT: Name + Links + Contact */}
        <div className="flex items-center space-x-4 text-sm text-gray-700 flex-wrap">
          <span className="font-bold text-xl whitespace-nowrap">Sahibjot Boyal</span>

          <a
            href="https://github.com/sahibjotb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sahibjotb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>

          <span className="ml-4 whitespace-nowrap">📧 sboyal3@uwo.ca</span>
          <span className="whitespace-nowrap">📞 (647) 865-0244</span>
        </div>

        {/* RIGHT: Nav Pages */}
        <div className="flex space-x-6 text-base">
          {[
            { to: "/about", label: "Home" },
            { to: "/education", label: "Education" },
            { to: "/experience", label: "Experience" },
            { to: "/projects", label: "Projects" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `hover:text-blue-600 ${
                  isActive ? "font-semibold border-b-2 border-blue-600" : "text-gray-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
