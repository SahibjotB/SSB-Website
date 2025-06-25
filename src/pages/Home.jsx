import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white">
      <div className="text-center p-6">
        <p className="text-lg mb-2">Hi, I'm</p>
        <h1 className="text-5xl font-bold mb-2">Sahibjot Boyal</h1>
        <p className="text-xl mb-10">Software Developer</p>

        <div className="flex flex-wrap gap-6 justify-center">
          {["Education", "Experience", "Projects", "Resume"].map((label) =>
            label === "Resume" ? (
              <a
                key={label}
                href="/sahib-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-8 py-4 rounded-2xl bg-white text-purple-700 font-medium shadow-lg hover:bg-purple-700 hover:text-white transition-all duration-300"
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                to={`/${label.toLowerCase()}`}
                className="text-lg px-8 py-4 rounded-2xl bg-white text-purple-700 font-medium shadow-lg hover:bg-purple-700 hover:text-white transition-all duration-300"
              >
                {label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
