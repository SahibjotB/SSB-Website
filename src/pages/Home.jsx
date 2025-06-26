import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "../assets/hero-illustration.svg";
import GitHubLogo from "../assets/github-logo.png";
import LinkedInLogo from "../assets/linkedin-logo.png";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-300px)] flex items-start lg:items-center bg-white text-gray-900 px-6 md:px-16 pt-8">
      <div className="flex flex-col-reverse lg:flex-row items-start max-w-6xl mx-auto w-full gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 pt-28">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold">Hi, I'm</h1>
            <h1 className="text-5xl md:text-6xl font-extrabold text-purple-600 mt-2">
              Sahibjot Boyal
            </h1>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 items-center">
            <a
              href="/sahib-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-800 transition font-semibold text-base md:text-base"
            >
              My Resume
            </a>
            <a
              href="https://github.com/SahibjotB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitHubLogo}
                alt="GitHub"
                className="w-10 h-10 hover:scale-110 transition-transform"
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
                className="w-10 h-10 hover:scale-110 transition-transform"
              />
            </a>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold pt-4">
            I am a{" "} 
            <span className="text-purple-600 font-semibold">
              <Typewriter
                words={[
                  "Software Developer",
                  "Web Developer",
                  "Computer Scientist",
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
        <div className="lg:w-1/2 flex justify-center pt-10">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-[95%] max-w-[650px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
