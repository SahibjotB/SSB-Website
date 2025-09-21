import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white text-center py-3  text-xs sm:text-sm w-full">
      <p className="px-2">
        © {new Date().getFullYear()} Sahibjot Boyal •{" "}
        <a href="/" className="text-blue-600 hover:underline">Home</a> •{" "}
        <a href="/Education" className="text-blue-600 hover:underline">Education</a> •{" "}
        <a href="/Experience" className="text-blue-600 hover:underline">Experience</a> •{" "}
        <a href="/Projects" className="text-blue-600 hover:underline">Projects</a>
      </p>
    </footer>
  );
}
