import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:bg-gray-900 flex items-center justify-center text-white dark:text-gray-100">
      <div className="text-center p-6">
        <p className="text-lg mb-2">Hi, I'm</p>
        <h1 className="text-5xl font-bold mb-2">Sahibjot Boyal</h1>
        <p className="text-xl mb-10">Software Developer</p>

        <div className="flex flex-wrap gap-6 justify-center">
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
            href="/sahib-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl px-10 py-5 rounded-2xl bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-200 font-semibold shadow-lg hover:bg-purple-700 hover:text-white dark:hover:bg-purple-700 dark:hover:text-white transition-all duration-300"
          >
            Resume
          </a>

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
        </div>

        <div className="mt-10 text-lg font-medium">
          📞 647-865-0244 • 📧 sboyal3@uwo.ca
        </div>
      </div>
    </div>
  );
}
