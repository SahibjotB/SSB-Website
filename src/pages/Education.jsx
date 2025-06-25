import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 px-6 sm:px-16 lg:px-32 text-gray-800 font-sans">
      <div className="mb-12">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Western_University_Logo.svg/2560px-Western_University_Logo.svg.png"
          alt="Western University"
          className="w-80 mx-auto mb-6"
        />
        <p className="italic text-center text-sm text-gray-600">
          A top Canadian research university located in London, Ontario, known for excellence in technology, business, and healthcare.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-1 text-purple-800">
          Bachelor of Science – Computer Science <span className="text-sm font-normal text-gray-600">(Sept 2020 – Dec 2024)</span>
        </h2>
        <p>
          Specialized training in AI, databases, cybersecurity, and systems. Completed upper-year project work and practical assignments.
          Maintained academic standards of 70%+ average with no course under 60%.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">📘 Key Coursework</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Foundations of Programming & Data Structures</li>
          <li>Computer Organization & Operating Systems</li>
          <li>Algorithms, Graph Theory & Complexity</li>
          <li>Object-Oriented Software Engineering</li>
          <li>Machine Learning & Artificial Intelligence</li>
          <li>Cryptography & Network Security</li>
          <li>Advanced Databases & Cloud Systems</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">🎓 Campus Experience</h3>
        <p className="text-sm">
          Engaged in peer programming groups and tech clubs. Participated in hackathons and undergraduate research projects.
        </p>
      </div>
    </div>
  );
};

export default Education;
