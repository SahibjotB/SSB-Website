import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-2 mt-8 sm:mt-12 text-xs sm:text-sm w-full">
      <p className="px-2">
        © {new Date().getFullYear()} Sahibjot Boyal •{" "}
        <a href="/" className="text-blue-600 hover:underline">Home</a> •{" "}
        <a href="/education" className="text-blue-600 hover:underline">Education</a> •{" "}
        <a href="/experience" className="text-blue-600 hover:underline">Experience</a> •{" "}
        <a href="/projects" className="text-blue-600 hover:underline">Projects</a>
      </p>
    </footer>
  );
}
