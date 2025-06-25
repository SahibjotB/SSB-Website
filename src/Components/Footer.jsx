import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-2 mt-12 text-sm">
      <p>
        © {new Date().getFullYear()} Sahibjot Boyal •{" "}
        <a href="/" className="text-blue-600 hover:underline">Home</a> •{" "}
        <a href="/education" className="text-blue-600 hover:underline">Education</a> •{" "}
        <a href="/experience" className="text-blue-600 hover:underline">Experience</a> •{" "}
        <a href="/projects" className="text-blue-600 hover:underline">Projects</a>
      </p>
    </footer>
  );
}
