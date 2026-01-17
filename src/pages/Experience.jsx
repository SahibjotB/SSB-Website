// src/pages/Experience.jsx
import React from "react";

const experiences = [
  {
    title: "Full Stack Web Developer",
    subtitle: "React, Tailwind CSS, Node.js, Hydrogen, HTML",
    description:
      "Built a custom headless Shopify storefront for the brand Lenvl using Hydrogen and React, handling both server-side data loading and client-side UI development. Delivered a performant, scalable, and fully responsive e-commerce experience with modern full-stack architecture and best practices.",
    link: "https://lenvl.com/",
  },
  {
    title: "Web Designer",
    subtitle: "HTML, CSS, JavaScript, WordPress",
    description:
      "Designed and developed a fully responsive, modern website for a local cabinetry business enhancing their online presence and user engagement",
    link: "https://friendkitchencabinets.ca/",
  },

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
      "Improved sorting efficiency using RF scanners, organized dispatch flow, and coordinated with team leads to resolve tagging issues.",
    link: "https://www.dhl.com/us-en/home.html",
  },
];

import CardCarousel from "../Components/CardCarousel";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white transition-colors duration-500">
          Experience
        </h2>

        <CardCarousel
          items={experiences}
          renderCard={(exp) => (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-2xl p-8 md:p-10 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-white/10 hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-500 group relative overflow-hidden no-underline hover:no-underline"
            >

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <h3 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white group-hover:text-purple-600 transition-colors duration-300">
                  {exp.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {exp.subtitle.split(',').map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-sm bg-purple-600">
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg mt-4 tracking-tight">
                  {exp.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-flex items-center px-6 py-2 border border-purple-600 text-purple-600 hover:!bg-purple-600 hover:text-white dark:text-purple-600 dark:border-purple-600 dark:hover:!bg-purple-600 dark:hover:text-white rounded-full font-semibold transition-colors">
                    View
                  </span>
                </div>
              </div>
            </a>
          )}
        />
      </div>
    </section>
  );
}

