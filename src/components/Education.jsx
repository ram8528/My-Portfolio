import React from "react";
import { motion } from "framer-motion";

const Education = () => (
  <section id="education" className="py-20 bg-white dark:bg-black text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold mb-6 text-purple-600 dark:text-purple-400"
    >
      Education
    </motion.h2>

    <div className="max-w-3xl mx-auto space-y-6">
      {/* MCA */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-left bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow"
      >
        <h3 className="text-xl font-semibold">
          Greater Noida Institute of Technology | MCA
        </h3>
        <ul className="list-disc ml-6 mt-2 text-gray-600 dark:text-gray-300">
          <li>
            Masters in Computer Application with strong foundation in CS
            principles.
          </li>
          <li>
            Experience in Web Development with HTML, CSS, JS, and database
            design.
          </li>
          <li>
            Worked with Agile & Waterfall methodologies for team projects.
          </li>
        </ul>
      </motion.div>

      {/* BCA */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-left bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow"
      >
        <h3 className="text-xl font-semibold">
          School of Management Sciences, Varanasi | BCA (2021 - 2024)
        </h3>
        <ul className="list-disc ml-6 mt-2 text-gray-600 dark:text-gray-300">
          <li>Bachelor of Computer Application with 9.6 CGPA out of 10.</li>
          <li>
            Specialized in core programming, software development & databases.
          </li>
          <li>Built multiple academic projects in web technologies.</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Education;
