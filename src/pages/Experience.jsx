// src/pages/Experience.jsx
import React from "react";

const experiences = [
  {
    title: "React – The Complete Guide (Udemy)",
    subtitle: "JavaScript, React, Redux, React Router, Next.js",
    description:
      "Comprehensive hands‑on course by Maximilian Schwarzmüller with over 40 h of instruction covering core React concepts, Hooks, routing, Next.js, and best practices.",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux",
  },
  {
    title: "React Native – The Practical Guide (Udemy)",
    subtitle: "JavaScript, React Native, Redux, Navigation, Camera, Maps",
    description:
      "Built cross‑platform mobile apps (iOS/Android) with React Native, including authentication, navigation, maps, camera, and backend integration.",
    link: "https://www.udemy.com/course/react-native-the-practical-guide",
  },
  {
    title: "Java – The Complete Java Developer Course (Udemy)",
    subtitle: "Java, OOP, Data Structures, Algorithms",
    description:
      "Deep dive into Java fundamentals, OOP, collections, concurrency, GUIs, and advanced Java applications. Reinforced my school learning with practical projects.",
    link:
      "https://www.udemy.com/course/java-the-complete-java-developer-course",
  },
  {
    title: "DHL International – Distribution Centre",
    subtitle: "Logistics, Team Coordination",
    description:
      "Toronto, Ontario. Improved sorting efficiency using RF scanners, organized dispatch flow, and coordinated with team leads to resolve tagging issues.",
    link: "https://www.dhl.com/us-en/home.html",
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-2 sm:px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6 sm:mb-8">
        Experience
      </h1>
      <div className="max-w-4xl mx-auto grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        {experiences.map((exp, idx) => (
          <a
            key={idx}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:bg-purple-700 hover:text-white dark:hover:bg-purple-700 dark:hover:text-white transition-colors duration-300 text-gray-900 dark:text-gray-100"
          >
            <h2 className="text-2xl font-semibold">{exp.title}</h2>
            <p className="italic text-gray-600 mb-2">{exp.subtitle}</p>
            <p>{exp.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
