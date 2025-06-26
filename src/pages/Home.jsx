import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "../assets/hero-illustration.svg";
import GitHubLogo from "../assets/github-logo.svg";
import LinkedInLogo from "../assets/linkedin-logo.svg";
import ResumeLogo from "../assets/resume-logo.png";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start lg:items-center bg-white dark:bg-black text-black dark:text-white px-6 md:px-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl mx-auto w-full gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6 pt-12">
          <div>
            <h1 className="text-7xl md:text-8xl font-extrabold">Hi, I'm</h1>
            <h1 className="text-7xl md:text-8xl font-extrabold text-purple-600 mt-2">
              Sahibjot
            </h1>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 items-center">
            <a
              href="/sahib-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ResumeLogo}
                alt="Resume"
                className=" w-[110px] h-[110px] hover:scale-110 transition-transform"
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
                className="w-[120px] h-[120px] hover:scale-110 transition-transform dark:invert"
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
                className="w-[110px] h-[110px] hover:scale-110 transition-transform dark:invert"
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
        <div className="lg:w-[100%] w-full flex justify-center pb-28 pl-6">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-[95%] max-w-[650px] object-contain "
          />
        </div>
      </div>
    </div>
  );
}
