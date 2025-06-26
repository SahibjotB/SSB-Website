import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "./ThemeIcons";
import githubLogo from "../assets/github-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
import resumeLogo from "../assets/resume-logo.png";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const closeDrawer = () => setDrawerOpen(false);
    window.addEventListener("resize", closeDrawer);
    return () => window.removeEventListener("resize", closeDrawer);
  }, []);

  return (
    <nav className="w-full bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-4.5 min-h-[72px]">
        {/* Left Side: Name + Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4">
          <Link
            to="/"
            className="text-2xl md:text-2xl font-bold text-purple-700 dark:text-purple-500 hover:underline"
          >
            Sahibjot Boyal
          </Link>
          <div className="hidden md:flex flex-wrap items-center gap-x-4 text-base text-black dark:text-white font-semibold">
            <span>📞 647-865-0244</span>
            <span>✉️ sboyal3@uwo.ca</span>
          </div>
        </div>

        {/* Desktop Links & Icons */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-base">
          {[ 
            { to: "/education", label: "Education" },
            { to: "/experience", label: "Experience" },
            { to: "/projects", label: "Projects" },
          ].map(({ to, href, label, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-purple-700 dark:hover:text-purple-300"
              >
                {label}
              </a>
            ) : (
              <NavLink
                key={to}
                to={to}
                className="text-black dark:text-white hover:text-purple-700 dark:hover:text-purple-300"
              >
                {label}
              </NavLink>
            )
          )}
          <a href="/sahib-resume.pdf" target="_blank" rel="noopener noreferrer">
            <img src={resumeLogo} alt="Resume" className="w-[60px] h-[60px] hover:scale-110 transition-transform " />
          </a>
          <a href="https://github.com/SahibjotB" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="w-[65px] h-[65px] hover:scale-110 transition-transform dark:invert" />
          </a>
          <a href="https://www.linkedin.com/in/sahibjotb/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="w-[60px] h-[60px] hover:scale-110 transition-transform " />
          </a>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="ml-2 p-2 rounded-full bg-white dark:bg-black hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="w-12 h-12 text-yellow-400" />
            ) : (
              <MoonIcon className="w-12 h-12 text-black dark:text-white" />
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="w-7 h-7 text-yellow-400" />
            ) : (
              <MoonIcon className="w-7 h-7 text-gray-800 dark:text-gray-200" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={() => setDrawerOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            <svg
              className="w-7 h-7 text-purple-700 dark:text-purple-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex" onClick={() => setDrawerOpen(false)}>
          <div className="flex-1" />
          <div
            className="relative w-64 h-full bg-white dark:bg-black shadow-lg flex flex-col p-6"
            onClick={(e) => e.stopPropagation()}
          >
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
                  className="w-full px-4 py-2 text-center rounded-md bg-purple-600 text-white hover:bg-purple-700 transition duration-200"
                >
                  {label}
                </NavLink>
              ))}

              <div className="flex justify-center space-x-1 mt-6 pl-1">
                <a
                  href="/sahib-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:scale-110 transition-transform"
                >
                  <img src={resumeLogo} alt="Resume" className="w-[50px] h-[50px]" />
                </a>
                <a
                  href="https://github.com/SahibjotB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:scale-110 transition-transform dark:invert"
                >
                  <img src={githubLogo} alt="GitHub" className="w-[55px] h-[55px]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sahibjotb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:scale-110 transition-transform"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="w-[50px] h-[50px]" />
                </a>
              </div>

              <div className="mt-6 pl-1 text-left text-[15px] text-black dark:text-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📞</span>
                  <span>647-865-0244</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">✉️</span>
                  <span>sboyal3@uwo.ca</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
