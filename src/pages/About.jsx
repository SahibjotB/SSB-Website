import React from "react";

export default function About() {
  return (
    <section className="text-center space-y-4">
      <h2 className="text-3xl font-bold">Software Developer</h2>
      <p>📧 sboyal3@uwo.ca | 📞 (647) 865‑0244</p>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/sahibjotb" target="_blank" className="text-blue-600 hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com/in/sahibjotb" target="_blank" className="text-blue-600 hover:underline">
          LinkedIn
        </a>
      </div>
      <p className="mt-6 text-lg">
        Welcome! I’m Sahibjot, a skilled Software developer with a passion for building fast, clean, responsive interfaces. Explore my education, experience, and projects.
      </p>
    </section>
  );
}
