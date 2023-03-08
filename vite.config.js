import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:"/study-intl/"
  build: {
    rollupOptions: {
      input: "src/main.jsx",
    },
  },
  optimizeDeps: {
    include: [
      "axios",
      "lodash",
      "react",
      "react-dom",
      "react-router-dom",
      "sass",
      "react-icons",
    ],
  },
});
