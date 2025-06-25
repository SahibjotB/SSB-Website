import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="w-full h-full"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          color: { value: "#8b5cf6" },
          links: { enable: true, color: "#8b5cf6", distance: 150, opacity: 0.5, width: 1 },
          move: { enable: true, speed: 1 },
          number: { value: 60, density: { enable: true, area: 800 } },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
}
