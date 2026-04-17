import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // Base path para GitHub Pages.
  // Si tu repo se llama "bf-gesto-03f5aad3", el sitio se servirá en
  // https://TU-USUARIO.github.io/bf-gesto-03f5aad3/
  // Si usas un dominio personalizado (ej: bfgesto.com), cambia esta línea a: base: "/",
  base: "/bf-gesto-03f5aad3/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
