import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SunIcon, MoonIcon } from "./ThemeIcons";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-purple-700 dark:text-purple-300">Sahibjot Boyal</span>
        <a href="https://github.com/SahibjotB" className="text-sm text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300">GitHub</a>
        <a href="https://www.linkedin.com/in/sahibjotb/" className="text-sm text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300">LinkedIn</a>
        <a
          href="/sahib-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300"
        >
          Resume
        </a>
        <span className="text-sm text-gray-600 dark:text-gray-300 ml-4">📞 647-865-0244</span>
        <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">✉️ sboyal3@uwo.ca</span>
      </div>
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
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
              `hover:text-purple-700 dark:hover:text-purple-300 ${
                isActive
                  ? "font-semibold border-b-2 border-purple-700 dark:border-white dark:text-white"
                  : "text-gray-700 dark:text-gray-200"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />}
        </button>
      </div>
    </nav>
  );
}
