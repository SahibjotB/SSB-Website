import React from "react";

const projects = [
  {
    title: "Website Resume",
    tech: "React, Tailwind CSS, Vite, HTML",
    description:
      "Personal portfolio website showcasing projects, education, and experience.",
    link: "https://github.com/SahibjotB/SSB-Website",
  },
  {
    title: "Boyal Blueprint",
    tech: "React, Tailwind, Vite, OpenAI API, MLS API",
    description:
      "A web platform designed to guide users from renting to purchasing their first home. Features an AI chatbot powered by OpenAI and real-time property insights through MLS API integration.",
    link: "https://github.com/SahibjotB/boyal-blueprint",
  },
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
];

import CardCarousel from "../Components/CardCarousel";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-28 md:py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-0 md:px-6 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center pb-2 md:mb-12 text-black dark:text-white transition-colors duration-500">
          Projects
        </h2>

        <CardCarousel
          items={projects}
          renderCard={(project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-screen md:w-full md:max-w-2xl p-6 md:p-12 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-white/10 hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-500 group relative overflow-hidden"
            >

              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <h3 className="text-2xl md:text-4xl font-extrabold text-black dark:text-white group-hover:text-purple-600 transition-all duration-500">
                  {project.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {project.tech.split(',').map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-sm bg-purple-600">
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
                  {project.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-flex items-center px-6 py-2 border border-purple-600 text-purple-600 hover:!bg-purple-600 hover:text-white dark:text-purple-600 dark:border-purple-600 dark:hover:!bg-purple-600 dark:hover:text-white rounded-full font-semibold transition-colors">
                    View Project
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

