// File: src/pages/Projects.jsx
import React from "react";

const Projects = () => (
  <section>
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    <ul className="space-y-4">
      <li>
        <strong>Western Maps</strong> – Java, SQL
        <p><a className="text-blue-600" href="https://github.com/SahibjotB/Western-Maps" target="_blank">GitHub</a></p>
        <p>Campus navigation app with admin and user POI features.</p>
      </li>
      <li>
        <strong>Discord Music Bot</strong> – C++, Firebase
        <p><a className="text-blue-600" href="https://github.com/SahibjotB/Discord-Music-Bot" target="_blank">GitHub</a></p>
        <p>Music bot for Discord using Raspberry Pi, with queue and playback controls.</p>
      </li>
      <li>
        <strong>Multiplayer Snake Game</strong> – Python
        <p><a className="text-blue-600" href="https://github.com/SahibjotB/Snake-Game" target="_blank">GitHub</a></p>
        <p>Multiplayer version of Snake with integrated chatroom.</p>
      </li>
    </ul>
  </section>
);

export default Projects;