import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
