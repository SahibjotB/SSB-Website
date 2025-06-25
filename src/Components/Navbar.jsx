import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "./ThemeIcons";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const closeDrawer = () => setDrawerOpen(false);
    window.addEventListener("resize", closeDrawer);
    return () => window.removeEventListener("resize", closeDrawer);
  }, []);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link
            to="/"
            className="text-lg md:text-xl font-bold text-purple-700 dark:text-purple-300 hover:underline"
          >
            Sahibjot Boyal
          </Link>
          <div className="hidden md:flex items-center space-x-2">
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
          </div>
          <span className="hidden md:inline text-sm text-gray-600 dark:text-gray-300 ml-4">📞 647-865-0244</span>
          <span className="hidden md:inline text-sm text-gray-600 dark:text-gray-300 ml-2">✉️ sboyal3@uwo.ca</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {[
            { to: "/education", label: "Education" },
            { to: "/experience", label: "Experience" },
            { to: "/projects", label: "Projects" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="text-sm text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300"
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setDrawerOpen((open) => !open)}
          aria-label="Open navigation menu"
        >
          <svg className="w-7 h-7 text-purple-700 dark:text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex" onClick={() => setDrawerOpen(false)}>
          <div className="flex-1" />
          <div className="relative w-64 h-full bg-white dark:bg-gray-900 shadow-lg flex flex-col p-6" onClick={(e) => e.stopPropagation()}>
            <button
              className="self-end mb-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6 text-purple-700 dark:text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col space-y-4">
              {[
                { to: "/education", label: "Education" },
                { to: "/experience", label: "Experience" },
                { to: "/projects", label: "Projects" },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="text-sm text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-300"
                >
                  {label}
                </NavLink>
              ))}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}
