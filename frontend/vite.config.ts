import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      pages: "/src/pages",
      components: "/src/components",
      routes: "/src/routes",
      styles: "/src/styles",
      assets: "/src/assets",
    },
  },
});
