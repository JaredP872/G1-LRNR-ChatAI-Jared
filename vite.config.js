// This imports the defineConfig function from the Vite package
import { defineConfig } from "vite";
// This imports the Tailwind CSS plugin for Vite.
import tailwindcss from "@tailwindcss/vite";
// This exports the Vite configuration object.
export default defineConfig({
  // The plugins array is where you specify Vite plugins.
  plugins: [tailwindcss()],
});
