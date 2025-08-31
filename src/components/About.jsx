import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <img
          src="https://avatars.githubusercontent.com/u/106538883?s=400&u=9701fd01eb98ad21b2ba7c9d7828ad8d853b3200&v=4"
          alt="Profile"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-xl border-4 border-purple-500 dark:border-purple-400"
        />
      </motion.div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Hi, I’m <span className="font-semibold">Ramdeep Kesharwani</span>, a
          passionate{" "}
          <span className="text-purple-600 dark:text-purple-400 font-semibold">
            Full Stack Web Developer
          </span>{" "}
          specializing in the <span className="font-semibold">MERN stack</span>.
          I love building scalable, user-friendly applications that blend
          functionality with clean design. Currently pursuing my{" "}
          <span className="font-semibold">MCA at GNIOT</span>, I have hands-on
          experience with React, Node.js, Express, and MongoDB, along with
          modern tools like Tailwind CSS and Framer Motion.
        </p>

        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
            <FaCode className="text-purple-600 dark:text-purple-400 text-xl" />
            <span>Clean & Scalable Code</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
            <FaLaptopCode className="text-purple-600 dark:text-purple-400 text-xl" />
            <span>End-to-End Development</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
            <FaRocket className="text-purple-600 dark:text-purple-400 text-xl" />
            <span>Performance & Growth</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
