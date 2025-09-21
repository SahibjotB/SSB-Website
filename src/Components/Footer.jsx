import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white text-center py-3 text-xs sm:text-sm w-full">
      <p className="px-2">
        © {new Date().getFullYear()} Sahibjot Boyal •{" "}
        <NavLink to="/" className="text-blue-600 hover:underline">Home</NavLink> •{" "}
        <NavLink to="/education" className="text-blue-600 hover:underline">Education</NavLink> •{" "}
        <NavLink to="/experience" className="text-blue-600 hover:underline">Experience</NavLink> •{" "}
        <NavLink to="/projects" className="text-blue-600 hover:underline">Projects</NavLink>
      </p>
    </footer>
  );
}
