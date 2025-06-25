import React from "react";

const projects = [
  {
    title: "Western Maps",
    tech: "Java, SQL",
    description: "Campus navigation app with admin and user POI features.",
    link: "https://github.com/SahibjotB/Western-Maps"
  },
  {
    title: "Discord Music Bot",
    tech: "C++, Firebase",
    description:
      "Music bot for Discord using Raspberry Pi, with queue and playback controls.",
    link: "https://github.com/SahibjotB/discord-music-bot"
  },
  {
    title: "Multiplayer Snake Game",
    tech: "Python",
    description:
      "Multiplayer version of Snake with integrated chatroom.",
    link: "https://github.com/SahibjotB/snake-game"
  },
  {
    title: "Discord Planner Bot",
    tech: "TypeScript, Discord.js, Firebase",
    description:
      "A Discord Planning Bot that helps users schedule and organize events directly through a Discord server. Built during a hackathon with features like calendar integration, reminders, and RSVP tracking.",
    link: "https://github.com/Corsage/hackathon"
  },
  {
    title: "Website Resume",
    tech: "React, Tailwind, Vite",
    description:
      "Personal portfolio website showcasing projects, education, and experience.",
    link: "https://github.com/SahibjotB/SSB-Website"
  }
];

export default function Projects() {
  return (
    <div className="px-8 py-20 min-h-screen bg-white text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl shadow-md transition-colors duration-300 hover:bg-purple-100"
          >
            <h2 className="text-2xl font-semibold mb-1">{project.title}</h2>
            <p className="text-sm text-gray-600 mb-2 italic">{project.tech}</p>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
