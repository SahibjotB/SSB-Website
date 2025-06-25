import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
      <Navbar />
      <main className="flex-grow p-8 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
