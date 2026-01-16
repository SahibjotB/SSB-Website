import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SunIcon, MoonIcon } from "./ThemeIcons";
import Logo from "/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        console.log("Scrolling...", window.scrollY);
        setScrolled(window.scrollY > 10);
      }
    };

    handleScroll(); // 🔥 Important: check scroll on mount

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const toggleMenu = () => {
    if (!menuOpen) {
      setScrolled(false);
    } else {
      setScrolled(window.scrollY > 10);
    }
    setMenuOpen((prev) => !prev);
  };

  const links = [
    { to: "education", label: "Education" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
  ];

  return (
    <header className="fixed top-2 left-0 right-0 z-50 flex justify-center bg-transparent">
      <nav
        className={`relative flex items-center justify-between h-20 px-6 sm:px-16 transition-all duration-500 ease-in-out
          ${scrolled
            ? "backdrop-blur-md bg-white/90 dark:bg-black/90 border border-gray-200 dark:border-neutral-800 rounded-xl shadow-md w-[60%]"
            : menuOpen
              ? "bg-white dark:bg-black border-transparent shadow-md w-full"
              : "bg-transparent border border-transparent w-full"
          }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <img
              src={Logo}
              alt="Logo"
              className="w-12 md:w-16 h-12 md:h-16 rounded-full transition-transform group-hover:scale-110"
            />
            <span className="text-lg md:text-xl font-bold text-black dark:text-white transition-colors group-hover:text-purple-600">
              Sahibjot Boyal
            </span>
          </a>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10 font-semibold text-lg">
          {links.map(({ to, label }) => (
            <li key={to}>
              <a
                href={`#${to}`}
                onClick={(e) => handleNavClick(e, to)}
                className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-600 whitespace-nowrap transition-colors cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode + Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full bg-white dark:bg-black hover:invert transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="w-7 h-7 text-yellow-400" />
            ) : (
              <MoonIcon className="w-7 h-7 text-gray-800 dark:text-gray-200" />
            )}
          </button>

          <button
            onClick={toggleMenu}
            className={`md:hidden text-black dark:text-white focus:outline-none transition-transform duration-500 ${menuOpen ? "rotate-180" : "rotate-0"}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`absolute top-full left-0 md:hidden transition-all duration-500 ease-in-out z-40
          ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}`}
      >
        <div className="min-h-screen w-[55vw] bg-white dark:bg-black text-black dark:text-white p-6 shadow-lg space-y-6">
          {links.map(({ to, label }) => (
            <a
              key={to}
              href={`#${to}`}
              onClick={(e) => handleNavClick(e, to)}
              className="flex items-center space-x-3 text-base font-semibold hover:text-purple-600 cursor-pointer"
            >
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
