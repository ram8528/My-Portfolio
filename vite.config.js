import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss({
      darkMode: "class", // 👈 force class-based dark mode
    }),
  ],
});
