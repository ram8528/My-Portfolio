import React from "react";
import { motion } from "framer-motion";

const bubbleVariants = {
  float: {
    y: [0, -30, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

// Variants for typewriter effect
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const Hero = () => {
  const name = "Hey! I'm Ramdeep Kesharwani";
  const role =
    "Full Stack Developer | MERN | Building scalable & beautiful web apps";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"
    >
      {/* Floating Bubbles */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          variants={bubbleVariants}
          animate="float"
          className="absolute rounded-full bg-white/20 dark:bg-white/10"
          style={{
            width: `${80 + i * 20}px`,
            height: `${80 + i * 20}px`,
            top: `${20 + i * 10}%`,
            left: `${10 + i * 12}%`,
            filter: "blur(4px)",
          }}
          transition={{ delay: i * 0.6 }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-white px-4">
        {/* Typewriter Name */}
        <h1 className="font-['Poppins'] text-4xl md:text-6xl font-extrabold drop-shadow-lg flex flex-wrap justify-center animate-pulse">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterAnimation}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Typewriter Role */}
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow flex flex-wrap justify-center">
          {role.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterAnimation}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-black rounded-xl shadow-lg hover:bg-gray-200 transition"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1iDBmgnuBaJCuF6gG5jnQT-j7Z0TD3k2_/view?usp=sharing"
            className="px-6 py-3 border border-white text-white rounded-xl shadow-lg hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
