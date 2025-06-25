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
    <div className="min-h-screen px-4 py-12 bg-white text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-2xl shadow-md transition-all duration-300 hover:bg-purple-700 hover:text-white"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="italic text-sm mb-1">{project.tech}</p>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
