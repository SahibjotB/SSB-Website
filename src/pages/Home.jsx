import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "../assets/hero-illustration.png"; // Add a valid image file here

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-white text-gray-900 px-6 md:px-16">
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-6xl mx-auto w-full -mt-16">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hi, I'm <span className="text-purple-600">Sahibjot Boyal</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium">
            I am a{" "}
            <span className="text-purple-600 font-semibold">
              <Typewriter
                words={["Software Developer", "Web Developer", "Computer Scientist"]}
                loop={0}             // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a
              href="/sahib-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-800 transition"
            >
              Resume
            </a>
            <a
              href="https://github.com/SahibjotB"
              className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-800 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sahibjotb/"
              className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-800 transition"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-lg pt-6">
            📞 647-865-0244 • ✉️ sboyal3@uwo.ca
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-[85%] max-w-[400px] lg:max-w-[480px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
