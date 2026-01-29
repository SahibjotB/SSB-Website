import React, { useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "../assets/hero-illustration.svg";
import GitHubLogo from "../assets/github-logo.svg";
import LinkedInLogo from "../assets/linkedin-logo.svg";
import ResumeLogo from "../assets/resume-logo.png";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isScrolling = false;

    const handleWheel = (e) => {
      // ONLY run this logic if the screen is wider than 768px (Desktop)
      if (window.innerWidth < 768) return;

      e.preventDefault();
      if (isScrolling) return;

      isScrolling = true;
      const direction = e.deltaY > 0 ? 1 : -1;
      const sectionHeight = window.innerHeight;
      const currentScroll = container.scrollTop;
      const nextTarget = Math.round(currentScroll / sectionHeight + direction) * sectionHeight;

      container.scrollTo({
        top: nextTarget,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={scrollRef}
      id="scroll-container"
      className="h-screen overflow-y-scroll scroll-smooth bg-white dark:bg-black transition-colors duration-500
                snap-y snap-mandatory md:snap-none
                scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-start lg:items-center px-6 md:px-16 pt-16 md:pt-32 snap-start">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto w-full gap-10">
          {/* Text Section */}
          <div className="lg:w-1/2 w-screen text-center lg:text-left space-y-6 pt-14 md:pt-16 pl-0 md:pl-4">
            <div>
              <h1 className="text-7xl md:text-8xl font-extrabold dark:invert text-center transition-colors duration-500">Hi, I'm</h1>
              <h1 className="text-7xl md:text-8xl font-extrabold text-purple-600 mt-2 text-center">
                Sahibjot
              </h1>
            </div>

            <div className="flex flex-row flex-nowrap justify-center md:justify-center gap-4 pt-2 items-center">
              <a
                href="/Sahibjot-Boyal-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ResumeLogo}
                  alt="Resume"
                  className=" w-[105px] h-[105px] hover:scale-110 transition-transform duration-500"
                />
              </a>
              <a
                href="https://github.com/SahibjotB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitHubLogo}
                  alt="GitHub"
                  className="w-[110px] h-[110px] hover:scale-110 dark:invert transition-all duration-500"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sahibjotb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  className="w-[100px] h-[100px] hover:scale-110 dark:invert transition-all duration-500"
                />
              </a>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold pt-2 md:pt-4 text-black dark:text-white transition-colors duration-500">
              I am a{" "}
              <span className="text-purple-600 font-semibold">
                <Typewriter
                  words={[
                    "Software Developer.",
                    "Web Developer.",
                    "Computer Scientist.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
          </div>

          {/* Image Section */}
          <div className="lg:w-[100%] w-full flex justify-center pb-0 md:pb-40 pl-0 md:pl-8">
            <img
              src={HeroImage}
              alt="Hero"
              className="w-[95%] max-w-[650px] object-contain "
            />
          </div>
        </div>
      </section>

      <section id="education" className="min-h-screen snap-start">
        <Education />
      </section>

      <section id="experience" className="min-h-screen snap-start">
        <Experience />
      </section>

      <section id="projects" className="min-h-screen snap-start">
        <Projects />
      </section>
    </div>
  );
}