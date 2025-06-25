import React from "react";
import WesternLogo from "../assets/western-logo.png";

export default function Education() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-6 bg-gray-50 p-6 rounded shadow hover:bg-purple-100 transition">
        <img src={WesternLogo} alt="Western University Logo" className="h-20 w-auto" />
        <div>
          <p className="italic text-gray-600">
            A top Canadian research university located in London, Ontario, known for excellence in technology, business, and healthcare.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded shadow hover:bg-purple-100 transition">
        <h4 className="text-xl font-semibold">Bachelor of Science – Computer Science (Sept 2020 – Dec 2024)</h4>
        <p className="mt-2">
          Specialized training in AI, databases, cybersecurity, and systems. Completed upper-year project work and practical assignments.
        </p>
        <p>Maintained academic standards of 70%+ average with no course under 60%.</p>
      </div>

      <div className="bg-gray-50 p-6 rounded shadow space-y-4 hover:bg-purple-100 transition">
        <h4 className="text-xl font-semibold">Key Coursework</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Foundations of Programming & Data Structures</li>
          <li>Computer Organization & Operating Systems</li>
          <li>Algorithms, Graph Theory & Complexity</li>
          <li>Object-Oriented Software Engineering</li>
          <li>Machine Learning & Artificial Intelligence</li>
          <li>Cryptography & Network Security</li>
          <li>Advanced Databases & Cloud Systems</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded shadow hover:bg-purple-100 transition">
        <h4 className="text-xl font-semibold">Campus Experience</h4>
        <p className="text-gray-700">
          Engaged in peer programming groups and tech clubs. Participated in hackathons and undergraduate research projects.
        </p>
      </div>
    </section>
  );
}
