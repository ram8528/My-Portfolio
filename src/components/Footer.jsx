import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Custom SVG Icons for LeetCode & GeeksforGeeks
const LeetCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      fill="currentColor"
      d="M14.59 2.59a2 2 0 0 0-2.83 0L4 10.34V14h2v-2h2v2h2v-2h2v2h2v-3.66l7.76-7.75a2 2 0 0 0 0-2.83L14.59 2.59z"
    />
  </svg>
);

const GFGIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 50 50"
  >
    <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 44C13.4 46 4 36.6 4 25S13.4 4 25 4s21 9.4 21 21-9.4 21-21 21z" />
    <path d="M34 19h-5l-4 6-4-6h-5l7 10-7 10h5l4-6 4 6h5l-7-10z" />
  </svg>
);

const Footer = () => (
  <footer className="py-6 bg-gray-900 text-gray-400 text-center">
    <div className="flex justify-center gap-6 mb-3">
      <a
        href="https://github.com/ram8528"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-white transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ramdeepkesharwani"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-blue-500 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://x.com/its_ram8528"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-sky-400 transition"
      >
        <FaTwitter />
      </a>
      <a
        href="https://auth.geeksforgeeks.org/user/skcoder123"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-500 transition"
      >
        <GFGIcon />
      </a>
      <a
        href="https://leetcode.com/ramdeepk"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 transition"
      >
        <LeetCodeIcon />
      </a>
    </div>
    <p className="text-sm">© 2025 Ramdeep Kesharwani. All rights reserved.</p>
  </footer>
);

export default Footer;
