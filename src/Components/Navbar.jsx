// File: src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = "px-4 py-2 text-lg hover:text-blue-600";
const activeStyle = "text-blue-600 font-bold underline";

const Navbar = () => (
  <nav className="flex justify-center space-x-6 py-4 bg-white shadow-md">
    <NavLink to="/about" className={({ isActive }) => isActive ? `${navStyle} ${activeStyle}` : navStyle}>About</NavLink>
    <NavLink to="/education" className={({ isActive }) => isActive ? `${navStyle} ${activeStyle}` : navStyle}>Education</NavLink>
    <NavLink to="/experience" className={({ isActive }) => isActive ? `${navStyle} ${activeStyle}` : navStyle}>Experience</NavLink>
    <NavLink to="/projects" className={({ isActive }) => isActive ? `${navStyle} ${activeStyle}` : navStyle}>Projects</NavLink>
  </nav>
);

export default Navbar;