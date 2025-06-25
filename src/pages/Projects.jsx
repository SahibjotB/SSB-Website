import React from "react";

const projects = [
  {
    title: "Western Maps",
    tech: "Java, SQL",
    description: "Campus navigation app with admin and user POI features.",
    link: "https://github.com/SahibjotB/Western-Maps",
  },
  {
    title: "Discord Music Bot",
    tech: "C++, Firebase",
    description: "Music bot for Discord using Raspberry Pi, with queue and playback controls.",
    link: "https://github.com/SahibjotB/Discord-Music-Bot",
  },
  {
    title: "Multiplayer Snake Game",
    tech: "Python",
    description: "Multiplayer version of Snake with integrated chatroom.",
    link: "https://github.com/SahibjotB/Snake-Game",
  },
  {
    title: "Discord Planning Bot",
    tech: "JavaScript, Discord.js, Firebase",
    description: "Plan events via Discord commands: create hackathons, teams, join/leave, display details.",
    link: "https://github.com/Corsage/hackathon",
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.title} className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="italic text-gray-600">{p.tech}</p>
            <p className="mt-2 text-gray-700">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
