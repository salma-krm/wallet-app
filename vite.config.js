// import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
// import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // reactRouter(),
    // tsconfigPaths(),
  ],
});
