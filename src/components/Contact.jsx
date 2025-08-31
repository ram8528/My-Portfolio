import React from "react";
import { motion } from "framer-motion";

const apiKey = import.meta.env.VITE_SECRET_KEY;

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Replace with your real Web3Forms access key
    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-black text-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400"
      >
        Hit Me Up!
      </motion.h2>

      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Reach me at{" "}
        <a
          href="mailto:programmingramdeep8528@gmail.com"
          className="text-blue-500 hover:underline"
        >
          programmingramdeep8528@gmail.com
        </a>
      </p>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className="max-w-lg mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>

      {/* Result Message */}
      {result && (
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          {result}
        </p>
      )}
    </section>
  );
}
