import React, { useRef } from "react";
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
  return (
    <div
      ref={scrollRef}
      id="scroll-container"
      className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-white dark:bg-black"
    >
      {/* Hero Section */}
      <section id="home" className="min-h-screen snap-start flex items-start lg:items-center px-6 md:px-16 pt-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto w-full gap-10">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6 pt-16 pl-4">
            <div>
              <h1 className="text-7xl md:text-8xl font-extrabold">Hi, I'm</h1>
              <h1 className="text-7xl md:text-8xl font-extrabold text-purple-600 mt-2">
                Sahibjot
              </h1>
            </div>

            <div className="flex flex-row flex-nowrap justify-center lg:justify-start gap-4 pt-2 items-center">
              <a
                href="/sahib-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ResumeLogo}
                  alt="Resume"
                  className=" w-[105px] h-[105px] hover:scale-110 transition-transform"
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
                  className="w-[110px] h-[110px] hover:scale-110 transition-transform dark:invert"
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
                  className="w-[100px] h-[100px] hover:scale-110 transition-transform dark:invert"
                />
              </a>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold pt-4">
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
          <div className="lg:w-[100%] w-full flex justify-center pb-40 pl-8">
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