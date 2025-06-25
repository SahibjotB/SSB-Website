import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Left side: name and socials */}
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold whitespace-nowrap">Sahibjot Boyal</h1>
          <div className="space-x-4 text-base">
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
          </div>
        </div>

        {/* Right side: nav links */}
        <div className="space-x-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 text-base ${isActive ? "font-semibold border-b-2 border-blue-600" : ""}`
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
