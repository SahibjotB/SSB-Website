import React from "react";
import westernLogo from "../assets/western.png";
import graduationPhoto from "../assets/western2.jpg";

export default function Education() {
  return (
    <div className="min-h-screen bg-white dark:bg-black dark:text-white px-2 sm:px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Logo */}
      <img src={westernLogo} alt="Western Logo" className="h-16 sm:h-24 mb-6 sm:mb-8" />

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6 sm:gap-10 max-w-6xl w-full">
        {/* Left: Graduation Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={graduationPhoto}
            alt="Graduation"
            className="w-full h-64 sm:h-full rounded-xl object-cover shadow-xl"
            style={{ minHeight: "200px", maxHeight: "600px" }}
          />
        </div>

        {/* Right: Sections */}
        <div className="md:w-1/2 w-full flex flex-col gap-4 sm:gap-6 mt-4 md:mt-0">
          {/* About */}
          <div className="bg-neutral-300 dark:bg-neutral-950 rounded-xl p-4 sm:p-6 shadow-md hover:bg-purple-700/20 dark:hover:bg-purple-900/40 transition duration-300 ease-in-out text-black dark:text-white">
            <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">About the Program</h2>
            <p className="text-black dark:text-white">
              I completed a 4-year Bachelor of Science in Computer Science at Western University (Class of 2024), based in London, Ontario. The program emphasized theoretical and practical learning in AI, cybersecurity, systems engineering, and database technologies — fostering collaboration, innovation, and technical depth.
            </p>
          </div>

          {/* Courses */}
          <div className="bg-neutral-300 dark:bg-neutral-950 rounded-xl p-4 sm:p-6 shadow-md hover:bg-purple-700/20 dark:hover:bg-purple-900/40 transition duration-300 ease-in-out text-black dark:text-white">
            <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">Key Coursework</h2>
            <ul className="list-disc pl-6 text-black dark:text-white">
              <li>Data Structures & Algorithms</li>
              <li>Operating Systems</li>
              <li>Computer Networks & Security</li>
              <li>Databases and SQL</li>
              <li>Object-Oriented Software Engineering</li>
              <li>Web & Mobile Application Development</li>
              <li>Artificial Intelligence & Machine Learning</li>
            </ul>
          </div>

          {/* Involvement */}
          <div className="bg-neutral-300 dark:bg-neutral-950 rounded-xl p-4 sm:p-6 shadow-md hover:bg-purple-700/20 dark:hover:bg-purple-900/40 transition duration-300 ease-in-out text-black dark:text-white">
            <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">Campus Involvement</h2>
            <p className="text-black dark:text-white">
              I participated in programming clubs, mentorship programs, and hackathons. These activities enhanced my teamwork and leadership capabilities, complementing my academic training through real-world collaboration and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
