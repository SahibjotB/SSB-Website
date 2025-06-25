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
      <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold">Sahibjot Boyal</h1>
        <div className="space-x-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 ${isActive ? "font-semibold border-b-2 border-blue-600" : ""}`
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

