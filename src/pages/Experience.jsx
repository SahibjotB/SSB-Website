import React from "react";

const experiences = [
  {
    title: "React – The Complete Guide (Udemy)",
    tech: "JavaScript, React, Redux, React Router, Next.js",
    description: "Comprehensive hands-on course by Maximilian Schwarzmüller with over 70h of instruction, covering core React concepts, Hooks, global state, routing, Next.js, and best practices to build scalable modern apps. :contentReference[oaicite:1]{index=1}"
  },
  {
    title: "React Native – The Practical Guide (Udemy)",
    tech: "JavaScript, React Native, Redux, Navigation, Camera, Maps",
    description: "Built cross-platform mobile apps (iOS/Android) with React Native, including authentication, navigation, maps, camera and backend integration. :contentReference[oaicite:2]{index=2}"
  },
  {
    title: "Java – The Complete Java Developer Course (Udemy)",
    tech: "Java, OOP, Data Structures, Algorithms",
    description: "Deep dive into Java fundamentals, OOP, collections, concurrency, GUIs, and advanced Java applications. Reinforced my school learning with practical projects and exercises."
  },
  {
    title: "DHL International – Distribution Centre",
    tech: "Logistics, Team Coordination",
    description: "Toronto, Ontario. Improved sorting efficiency using RF scanners, organized dispatch flow, and coordinated with team leads to resolve tagging issues."
  }
];

export default function Experience() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-semibold">Experience & Courses</h2>
      {experiences.map(({ title, tech, description }) => (
        <div key={title} className="bg-gray-50 p-6 rounded shadow hover:bg-purple-100 transition">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="italic text-gray-600">{tech}</p>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>
      ))}
    </section>
  );
}
