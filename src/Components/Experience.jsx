// File: src/components/Experience.jsx
import React from "react";

const Experience = () => (
  <section className="p-6">
    <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
    <div>
      <h3 className="text-xl font-bold">DHL International - Distribution Centre</h3>
      <p>Toronto, ON (July 2021 - August 2021)</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Used RF scanners to improve delivery sorting efficiency</li>
        <li>Organized packages by order for faster dispatch</li>
        <li>Coordinated with team leads to correct tagging issues</li>
      </ul>
    </div>
  </section>
);

export default Experience;