import React from "react";

export default function Experience() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="bg-gray-50 p-6 rounded shadow space-y-2">
        <h3 className="text-xl font-bold">DHL International – Distribution Centre</h3>
        <p>Toronto, ON • July 2021 – August 2021</p>
        <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
          <li>Increased package sorting efficiency via RF scanner workflows</li>
          <li>Streamlined dispatch by organizing orders systematically</li>
          <li>Collaborated with team leads to correct tagging issues</li>
        </ul>
      </div>
    </section>
  );
}
