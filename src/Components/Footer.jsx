import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-center py-4 mt-8">
      <p className="text-sm">
        © {new Date().getFullYear()} Sahibjot Boyal •{" "}
        <a
          href="/about"
          className="text-blue-600 hover:underline"
        >
          Home
        </a>
      </p>
    </footer>
  );
}
