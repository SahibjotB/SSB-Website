// File: src/App.jsx
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;