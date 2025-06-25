import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const navButtons = [
    { label: "Education", to: "/education" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-start pt-32 bg-white text-gray-900 px-4">
      <h2 className="text-lg text-gray-500 mb-2">Hi, I'm</h2>
      <h1 className="text-5xl sm:text-6xl font-bold text-center">Sahibjot Boyal</h1>
      <p className="text-2xl mt-3 text-gray-600 text-center">Software Developer</p>

      <div className="mt-10 flex flex-wrap gap-6">
        {navButtons.map(({ label, to }) => (
          <button
            key={label}
            onClick={() => navigate(to)}
            className="px-8 py-4 rounded-xl shadow-md bg-gray-100 hover:bg-purple-500 hover:text-white transition text-lg font-semibold"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
