import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:bg-gray-900 flex flex-col items-center justify-center text-white dark:text-gray-100 px-2 sm:px-4 py-8">
      <div className="text-center p-4 sm:p-6 w-full max-w-xl">
        <p className="text-base sm:text-lg mb-2">Hi, I'm</p>
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">Sahibjot Boyal</h1>
        <p className="text-lg sm:text-xl mb-8 sm:mb-10">Software Developer</p>

        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          {["Education", "Experience", "Projects"].map((label) => (
            <Link
              key={label}
              to={`/${label.toLowerCase()}`}
              className="text-xl px-10 py-5 rounded-2xl bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-200 font-semibold shadow-lg hover:bg-purple-700 hover:text-white dark:hover:bg-purple-700 dark:hover:text-white transition-all duration-300"
            >
              {label}
            </Link>
          ))}

          <a
            href="https://github.com/SahibjotB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl px-10 py-5 rounded-2xl bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-200 font-semibold shadow-lg hover:bg-purple-700 hover:text-white dark:hover:bg-purple-700 dark:hover:text-white transition-all duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sahibjotb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl px-10 py-5 rounded-2xl bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-200 font-semibold shadow-lg hover:bg-purple-700 hover:text-white dark:hover:bg-purple-700 dark:hover:text-white transition-all duration-300"
          >
            LinkedIn
          </a>
          
          <a
            href="/sahib-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl px-10 py-5 rounded-2xl bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-200 font-semibold shadow-lg hover:bg-purple-700 hover:text-white dark:hover:bg-purple-700 dark:hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </div>

        <div className="mt-8 sm:mt-10 text-base sm:text-lg font-medium break-words">
          📞 647-865-0244 • 📧 sboyal3@uwo.ca
        </div>
      </div>
    </div>
  );
}
