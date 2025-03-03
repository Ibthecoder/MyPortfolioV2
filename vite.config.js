import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
      "@Component": path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "src/Component"
      ),
      "@Section": path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "src/Section"
      ),
      "@Layout": path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "src/Layout"
      ),
      "@constant": path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "src/constant"
      ),
      "@assets": path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "src/assets/images/image"
      ),
    },
  },
});
