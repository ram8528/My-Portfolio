import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJava,
  FaCuttlefish,
  FaMagic,
  FaLayerGroup, // ✅ for Material UI replacement
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSpringboot,
  SiNextdotjs,
  SiCplusplus,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-4xl" />,
    },
    { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400 text-4xl" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    },
    {
      name: "SQL/Databases",
      icon: <FaDatabase className="text-purple-400 text-4xl" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300 text-4xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500 text-4xl" /> },

    // New Additions
    { name: "C", icon: <FaCuttlefish className="text-blue-500 text-4xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-indigo-500 text-4xl" /> },
    { name: "Java", icon: <FaJava className="text-red-600 text-4xl" /> },
    { name: "ShadCN", icon: <FaMagic className="text-pink-400 text-4xl" /> },
    {
      name: "Material UI",
      icon: <FaLayerGroup className="text-blue-600 text-4xl" />,
    }, // ✅ replaced
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-green-700 text-4xl" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-900 dark:text-white text-4xl" />,
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 text-pink-600 dark:text-pink-400"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            {skill.icon}
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
