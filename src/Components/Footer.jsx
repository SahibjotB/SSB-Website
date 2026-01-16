import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white text-center py-3 text-xs sm:text-sm w-full">
      <p className="px-2">
        © {new Date().getFullYear()} Sahibjot Boyal •{" "}
        <span className="text-blue-600">647-865-0244</span> •{" "}
        <a href="mailto:sboyal3@uwo.ca" className="text-blue-600 hover:underline">
          sboyal3@uwo.ca
        </a>
      </p>
    </footer>
  );
}
