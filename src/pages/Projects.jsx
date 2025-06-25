import React from "react";

const projects = [
  {
    title: "Western Maps",
    tech: "Java, SQL",
    description: "Campus navigation app with admin and user POI features.",
    link: "https://github.com/sahibjotb/western-maps",
  },
  {
    title: "Discord Music Bot",
    tech: "C++, Firebase",
    description:
      "Music bot for Discord using Raspberry Pi, with queue and playback controls.",
    link: "https://github.com/sahibjotb/discord-music-bot",
  },
  {
    title: "Multiplayer Snake Game",
    tech: "Python",
    description:
      "Multiplayer version of Snake with integrated chatroom.",
    link: "https://github.com/sahibjotb/snake-game",
  },
  {
    title: "Discord Planner Bot",
    tech: "TypeScript, Discord.js, Firebase",
    description:
      "A Discord Planning Bot that helps users schedule and organize events directly through a Discord server. Built during a hackathon with features like calendar integration, reminders, and RSVP tracking.",
    link: "https://github.com/Corsage/hackathon",
  },
  {
    title: "Website Resume",
    tech: "React, Tailwind, Vite",
    description:
      "Personal portfolio website showcasing projects, education, and experience.",
    link: "https://github.com/SahibjotB/SSB-Website",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen px-2 sm:px-4 py-8 sm:py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Projects</h1>
      <div className="max-w-4xl mx-auto grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md transition-all duration-300 hover:bg-purple-700 hover:text-white dark:hover:bg-purple-700 dark:hover:text-white text-gray-900 dark:text-gray-100"
          >
            <h2 className="text-lg sm:text-xl font-semibold">{project.title}</h2>
            <p className="italic text-xs sm:text-sm mb-1">{project.tech}</p>
            <p className="text-sm sm:text-base">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
