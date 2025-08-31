import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const navItems = [
    "Home",
    "About",
    "Education",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-white/70 dark:bg-black/50 text-black dark:text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">Ramdeep</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-500 transition"
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleDark}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDark}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 p-6 bg-white dark:bg-gray-900 shadow-lg"
          >
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-lg hover:text-purple-500 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
