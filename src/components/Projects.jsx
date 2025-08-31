import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "BlizzBazar - Food Ordering & Delivery App",
    description:
      "A full-stack MERN application for food ordering and delivery. Features include user authentication, restaurant menus, cart & checkout, order tracking, and an admin dashboard for managing restaurants and deliveries.",
    github: "https://github.com/ram8528/BlizzBazar-Food-Application",
  },
  {
    title: "VideoTube Backend",
    description:
      "A scalable backend built with Node.js, Express, and MongoDB. Implements authentication with refresh & access tokens, file storage via Cloudinary, file uploads using Multer, playlist management, pagination, and robust APIs for users, videos, and more.",
    github: "https://github.com/ram8528/VideoTube",
  },
  {
    title: "Hospital Website",
    description:
      "A responsive hospital website providing details about doctors, services, and facilities. Optimized for SEO and user-friendly navigation, designed to serve patients with easy access to information.",
    live: "https://www.vimlahospital.com",
  },
  {
    title: "Coding Stars - Task Manager",
    description:
      "A task management web app with robust authentication and role-based access control. Allows users to manage tasks, deadlines, and collaboration features in a secure environment.",
    github: "https://github.com/ram8528/CodingStars",
  },
  {
    title: "FoodieCart (Frontend)",
    description:
      "A frontend-only food ordering project powered by live Swiggy API data. Clean UI built with React & Tailwind, showcasing real-time restaurant listings, search, and menu browsing.",
    github: "https://github.com/ram8528/FoodieCart-Front-End-Project",
  },
  {
    title: "ChatKaro - AI integrated query resolution",
    description:
      "An AI based chatting platform for unique and query handling platform built on MERN Stack .",
    github: "https://github.com/ram8528/ChatKaro",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 text-center text-purple-600 dark:text-purple-400"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-6 rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800 hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <h3 className="font-semibold text-xl text-purple-700 dark:text-purple-300">
              {project.title}
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
