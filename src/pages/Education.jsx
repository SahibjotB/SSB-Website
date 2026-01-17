import React from "react";
import westernLogo from "../assets/western.png";
import graduationPhoto from "../assets/western2.jpg";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center pt-32 pb-20 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <img src={westernLogo} alt="Western Logo" className="h-16 sm:h-20 mb-10" />

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-16 w-full">
          {/* Left: Graduation Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl blur opacity-25 transition-colors duration-500"></div>
                <img
                  src={graduationPhoto}
                  alt="Graduation"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md aspect-[3/4] object-cover object-bottom transition-colors duration-500"
                />
            </div>
          </div>

          {/* Right: Sections */}
          <div className="sm:w-[80%] flex flex-col gap-2">
            {/* About */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg border border-transparent transition-colors duration-500">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">About the Program</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed tracking-tight text-lg">
                I completed a 4-year Bachelor of Science in Computer Science at Western University (Class of 2025), based in London, Ontario. The program emphasized theoretical and practical learning in AI, cybersecurity, systems engineering, and database technologies — fostering collaboration, innovation, and technical depth.
              </p>
            </div>

            {/* Courses */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg border border-transparent transition-colors duration-500">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Key Coursework</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 text-md">
                {[
                  "Data Structures & Algorithms",
                  "Operating Systems",
                  "Computer Networks & Security",
                  "Databases and SQL",
                  "Object-Oriented Software Engineering",
                  "AI & Machine Learning"
                ].map((course) => (
                  <li key={course} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            {/* Involvement */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg border border-transparent transition-colors duration-500">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Campus Involvement</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed tracking-tight text-lg">
                I participated in programming clubs, mentorship programs, and hackathons. These activities enhanced my teamwork and leadership capabilities, complementing my academic training through real-world collaboration and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
